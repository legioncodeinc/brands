"""Create platform icon aliases and verify the delivered vector/raster families."""
from pathlib import Path
from PIL import Image
import hashlib, json, re, shutil, xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parent.parent
manifest=json.loads((ROOT/"manifest.json").read_text())
aliases=[]
icos=[]
for slug,folder in (("pursuit","01-pursuit"),("full-stride","02-full-stride")):
    for treatment in ("light","dark"):
        prefix=f"whipt-{slug}-app-icon-{treatment}"
        image=Image.open(ROOT/folder/"png"/treatment/f"{prefix}-256.png").convert("RGBA")
        ico=ROOT/folder/"favicon"/f"whipt-{slug}-favicon-{treatment}.ico"
        image.save(ico,format="ICO",sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
        assert len(Image.open(ico).ico.sizes())==6
        icos.append(ico.relative_to(ROOT).as_posix())
        for size,name in ((180,"apple-touch-icon"),(192,"android-chrome-192"),(512,"android-chrome-512")):
            source=ROOT/folder/"png"/treatment/f"{prefix}-{size}.png"
            target=ROOT/folder/"favicon"/f"whipt-{slug}-{name}-{treatment}.png"
            shutil.copyfile(source,target)
            aliases.append({"path":target.relative_to(ROOT).as_posix(),"width":size,"height":size})
manifest["favicon_svg_count"]=4
manifest["ico_count"]=len(icos)
manifest["ico_files"]=icos
manifest["platform_png_aliases"]=aliases
manifest["production_svg_count"]=manifest["svg_count"]+4
manifest["production_png_count"]=manifest["png_count"]+len(aliases)
errors=[]
svg_verified=0
png_verified=0
alpha_verified=0
edge_verified=0
geometry={}
hashes={}
for asset in manifest["exports"]:
    svg_path=ROOT/asset["svg"]
    svg=svg_path.read_text(encoding="utf8")
    tree=ET.fromstring(svg)
    for elem in tree.iter():
        local=elem.tag.rsplit("}",1)[-1]
        if local in {"image","text","script","foreignObject","use"}:
            errors.append(f"Non-portable vector element in {asset['svg']}: {local}")
        for attr,value in elem.attrib.items():
            if "href" in attr or value.startswith(("http://","https://")):
                errors.append(f"External reference in {asset['svg']}: {value}")
    outline=[]
    for elem in tree.iter():
        if elem.tag.rsplit("}",1)[-1] in {"g","path","polygon"}:
            outline.append((elem.tag,{key:value for key,value in elem.attrib.items() if key not in {"fill","id"}}))
    key=(asset["concept"],asset["layout"])
    signature=json.dumps(outline,sort_keys=True)
    if key in geometry and geometry[key]!=signature:
        errors.append(f"Colorway geometry drift: {key}")
    geometry[key]=signature
    svg_verified+=1
    hashes[asset["svg"]]=hashlib.sha256(svg_path.read_bytes()).hexdigest()
    for png in asset["png"]:
        file=ROOT/png["path"]
        with Image.open(file) as im:
            if im.size!=(png["width"],png["height"]):
                errors.append(f"Incorrect PNG dimensions: {png['path']}: {im.size}")
            rgba=im.convert("RGBA")
            alpha=rgba.getchannel("A")
            extrema=alpha.getextrema()
            if asset["transparent"]:
                if extrema!=(0,255):
                    errors.append(f"Transparency failure: {png['path']}: {extrema}")
                # Clear canvas padding prevents a clipped muzzle, tail or letter.
                w,h=rgba.size
                bounds=alpha.getbbox()
                if not bounds or bounds[0]<=0 or bounds[1]<=0 or bounds[2]>=w or bounds[3]>=h:
                    errors.append(f"Artwork touches edge: {png['path']}: {bounds}")
                edge_verified+=1
            elif extrema!=(255,255):
                errors.append(f"Opaque app tile failure: {png['path']}: {extrema}")
            alpha_verified+=1
            png_verified+=1
        hashes[png["path"]]=hashlib.sha256(file.read_bytes()).hexdigest()
# Shared wordmark must be pixel-identical between concepts at every matching size.
for treatment in ("light","dark","black","white"):
    for size in [256,512,1024,2048,4096]:
        a=ROOT/f"01-pursuit/png/{treatment}/whipt-pursuit-wordmark-{treatment}-{size}.png"
        b=ROOT/f"02-full-stride/png/{treatment}/whipt-full-stride-wordmark-{treatment}-{size}.png"
        if Image.open(a).tobytes()!=Image.open(b).tobytes():
            errors.append(f"Shared wordmark mismatch: {treatment}-{size}")
report={
    "status":"passed" if not errors else "failed",
    "production_svg_files":manifest["production_svg_count"],
    "production_png_files":manifest["production_png_count"],
    "multi_resolution_ico_files":len(icos),
    "logo_svgs_checked":svg_verified,
    "main_png_exports_checked":png_verified,
    "alpha_checks":alpha_verified,"clear_edge_checks":edge_verified,
    "geometry_identical_across_colorways":not any("geometry" in e for e in errors),
    "shared_wordmark_identical_across_concepts":not any("wordmark" in e for e in errors),
    "ico_sizes":[16,32,48,64,128,256],
    "checks":["SVGs parse without raster embeds, live fonts or external resources",
              "All PNGs have expected pixel dimensions",
              "Transparent logos have real alpha; app tiles are fully opaque",
              "Transparent artwork clears all canvas edges",
              "Colorways share identical geometry",
              "Shared wordmark raster pixels are identical across concepts"],
    "errors":errors,
}
(ROOT/"manifest.json").write_text(json.dumps(manifest,indent=2)+"\n",encoding="utf8")
(ROOT/"validation.json").write_text(json.dumps(report,indent=2)+"\n",encoding="utf8")
(ROOT/"checksums.sha256").write_text("\n".join(f"{h}  {p}" for p,h in sorted(hashes.items()))+"\n",encoding="utf8")
print(json.dumps(report,indent=2))
if errors: raise SystemExit(1)

