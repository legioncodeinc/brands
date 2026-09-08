"""Build WHIPT's color-consistent SVG asset family from the reviewed masters."""
from pathlib import Path
import copy
import json
import math
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
NS = "http://www.w3.org/2000/svg"
ET.register_namespace("", NS)
INK, WHITE, MINT = "#0A0B0D", "#F5F6F7", "#3DDC97"
COLORS = {
    "light": {"body": INK, "accent": MINT},
    "dark": {"body": WHITE, "accent": MINT},
    "black": {"body": "#000000", "accent": "#000000"},
    "white": {"body": "#FFFFFF", "accent": "#FFFFFF"},
}
SIZES = {
    "symbol": [64,128,256,512,1024,2048,4096],
    "icon": [32,64,128,256,512,1024,2048],
    "wordmark": [256,512,1024,2048,4096],
    "lockup-horizontal": [512,1024,2048,4096],
    "lockup-stacked": [256,512,1024,2048,4096],
    "app-icon": [16,32,48,64,128,180,192,256,512,1024],
}
ACCENTS = {"#32d99a", "#3ddc97"}
BODY = {"#0b0d0f","#0a0b0d","#000000","#000"}

def tag(name):
    return "{"+NS+"}"+name

def fmt(number):
    return f"{number:.4f}".rstrip("0").rstrip(".") if isinstance(number, float) else str(number)

def normalize_master(path, refined=None):
    root = ET.parse(refined or path).getroot()
    for item in root.iter():
        fill = item.get("fill","").lower()
        if fill in ACCENTS:
            item.set("fill", MINT)
        elif fill in BODY:
            item.set("fill", INK)
    vb = [float(v) for v in root.get("viewBox").split()]
    root.set("width", fmt(vb[2]))
    root.set("height", fmt(vb[3]))
    ET.indent(root, space="  ")
    path.write_text(ET.tostring(root,encoding="unicode")+"\n",encoding="utf-8")
    return root, vb

def append_mark(parent, master, vb, x, y, scale, treatment):
    group = ET.SubElement(parent,tag("g"), {
        "transform": f"translate({fmt(x)} {fmt(y)}) scale({fmt(scale)}) translate({fmt(-vb[0])} {fmt(-vb[1])})"
    })
    for element in master:
        if element.tag.rsplit("}",1)[-1] not in {"g","path","polygon"}:
            continue
        child = copy.deepcopy(element)
        for item in child.iter():
            item.attrib.pop("id",None)
            fill = item.get("fill","").lower()
            if fill in ACCENTS:
                item.set("fill",COLORS[treatment]["accent"])
            elif fill in BODY:
                item.set("fill",COLORS[treatment]["body"])
        group.append(child)
    return group

pursuit, pvb = normalize_master(ROOT/"source/pursuit-symbol-master.svg")
stride, svb = normalize_master(ROOT/"source/full-stride-symbol-master.svg")
wordmark, wvb = normalize_master(ROOT/"source/wordmark-master.svg")
concepts = [
    ("pursuit","01-pursuit","Pursuit",pursuit,pvb),
    ("full-stride","02-full-stride","Full Stride",stride,svb),
]
exports = []
svg_cache = {}

def layout(slug, layout_name, vb):
    # marks: x,y,scale,master-kind; dimensions in SVG user units.
    sw, sh = vb[2],vb[3]
    if layout_name == "symbol":
        pad = max(sw,sh)*0.025
        return sw+pad*2, sh+pad*2, [(pad,pad,1,"symbol")]
    if layout_name in ("icon","app-icon"):
        width = (820 if slug == "pursuit" else 860) if layout_name == "icon" else (760 if slug == "pursuit" else 860)
        scale = width/sw
        return 1024,1024,[((1024-width)/2,(1024-sh*scale)/2,scale,"symbol")]
    if layout_name == "wordmark":
        return wvb[2]+24,wvb[3]+24,[(12,12,1,"wordmark")]
    if layout_name == "lockup-horizontal":
        scale = 190/sh if slug == "pursuit" else 300/sw
        word_scale = 100/wvb[3]
        height = max(sh*scale,100)+64
        width = sw*scale+42+wvb[2]*word_scale+64
        return width,height,[
            (32,(height-sh*scale)/2,scale,"symbol"),
            (32+sw*scale+42,(height-100)/2,word_scale,"wordmark"),
        ]
    if layout_name == "lockup-stacked":
        width = 900
        symbol_width = 610 if slug == "pursuit" else 790
        scale = symbol_width/sw
        word_scale = 700/wvb[2]
        gap = 62 if slug == "pursuit" else 88
        height = 120+sh*scale+gap+wvb[3]*word_scale
        return width,height,[
            ((width-symbol_width)/2,60,scale,"symbol"),
            (100,60+sh*scale+gap,word_scale,"wordmark"),
        ]
    raise ValueError(layout_name)

for slug,folder,label,master,vb in concepts:
    for layout_name,sizes in SIZES.items():
        for treatment in (["light","dark"] if layout_name=="app-icon" else COLORS):
            width,height,marks=layout(slug,layout_name,vb)
            basename=f"whipt-{slug}-{layout_name}-{treatment}"
            root=ET.Element(tag("svg"),{
                "viewBox":f"0 0 {fmt(width)} {fmt(height)}",
                "width":fmt(width),"height":fmt(height),
                "role":"img","aria-labelledby":basename+"-title",
            })
            ET.SubElement(root,tag("title"),{"id":basename+"-title"}).text=f"WHIPT {label} — {layout_name.replace('-',' ')} — {treatment}"
            ET.SubElement(root,tag("desc")).text=(
                "Editable vector paths. OSPRY family palette. "
                +("Intentionally opaque square app tile." if layout_name=="app-icon" else "Transparent background.")
            )
            if layout_name=="app-icon":
                ET.SubElement(root,tag("rect"),{"width":"1024","height":"1024","fill":WHITE if treatment=="light" else INK})
            for x,y,scale,kind in marks:
                append_mark(root,master if kind=="symbol" else wordmark,vb if kind=="symbol" else wvb,x,y,scale,treatment)
            destination=ROOT/folder/"svg"/f"{basename}.svg"
            destination.parent.mkdir(parents=True,exist_ok=True)
            ET.indent(root,space="  ")
            destination.write_text(ET.tostring(root,encoding="unicode")+"\n",encoding="utf-8")
            svg_cache[(slug,layout_name,treatment)] = root
            pngs=[]
            for size in sizes:
                rel=f"{folder}/png/{treatment}/{basename}-{size}.png"
                pngs.append({"path":rel,"width":size,"height":round(size*height/width)})
            exports.append({
                "concept":slug,"layout":layout_name,"treatment":treatment,
                "svg":destination.relative_to(ROOT).as_posix(),
                "viewBox":[0,0,width,height],"transparent":layout_name!="app-icon",
                "png":pngs,
            })
    for treatment in ("light","dark"):
        favicon=ROOT/folder/"favicon"/f"whipt-{slug}-favicon-{treatment}.svg"
        favicon.parent.mkdir(parents=True,exist_ok=True)
        # The favicon deliberately uses the opaque tile to keep both themes legible.
        favicon.write_text(ET.tostring(svg_cache[(slug,"app-icon",treatment)],encoding="unicode")+"\n",encoding="utf-8")

palette={
    "brand":"WHIPT","version":"1.0","reference":"OSPRY supplied symbol PNGs",
    "ink":INK,"white":WHITE,"mint":MINT,
    "monochrome":{"black":"#000000","white":"#FFFFFF"},
    "treatments":COLORS,
}
(ROOT/"palette.json").write_text(json.dumps(palette,indent=2)+"\n",encoding="utf-8")
manifest={
    "brand":"WHIPT","version":"1.0","created":"2026-09-02",
    "concepts":["pursuit","full-stride"],
    "notes":"All logo lettering is outlined. Light/dark SVGs and PNGs have identical geometry. Sizes describe pixel width; icon and app-icon are square.",
    "svg_count":len(exports),
    "png_count":sum(len(item["png"]) for item in exports),
    "exports":exports,
}
(ROOT/"manifest.json").write_text(json.dumps(manifest,indent=2)+"\n",encoding="utf-8")

# A designed overview drawn from the same production vectors.
sheet=ET.Element(tag("svg"),{"width":"2000","height":"1660","viewBox":"0 0 2000 1660"})
def rect(x,y,w,h,fill,rx=0):
    ET.SubElement(sheet,tag("rect"),{"x":str(x),"y":str(y),"width":str(w),"height":str(h),"fill":fill,"rx":str(rx)})
def text(x,y,value,size=20,fill=INK,weight="400",spacing=None):
    attrs={"x":str(x),"y":str(y),"font-family":"Arial, sans-serif","font-size":str(size),"fill":fill,"font-weight":weight}
    if spacing is not None: attrs["letter-spacing"]=str(spacing)
    ET.SubElement(sheet,tag("text"),attrs).text=value
def place(key,x,y,w,h):
    original=svg_cache[key]
    vb=[float(v) for v in original.get("viewBox").split()]
    scale=min(w/vb[2],h/vb[3])
    outer=ET.SubElement(sheet,tag("g"),{"transform":f"translate({fmt(x+(w-vb[2]*scale)/2)} {fmt(y+(h-vb[3]*scale)/2)}) scale({fmt(scale)})"})
    for child in original:
        if child.tag.rsplit("}",1)[-1] in {"g","rect","path"}:
            outer.append(copy.deepcopy(child))
rect(0,0,2000,1660,"#EAEDEC")
append_mark(sheet,wordmark,wvb,50,31,0.52,"light")
text(50,103,"COMPLETE VECTOR + PNG ASSET LIBRARY",17,"#5A625F","400",3)
text(1545,60,"OSPRY FAMILY  /  V1.0",16,"#5A625F","400",1)
for i,(slug,folder,label,_,_) in enumerate(concepts):
    x=50+i*990
    text(x,169,f"0{i+1}  /  {label.upper()}",26,INK,"700",2)
    for j,treatment in enumerate(("light","dark")):
        xx=x+j*450
        bg=WHITE if treatment=="light" else INK
        fg="#5A625F" if treatment=="light" else "#AEB9B4"
        rect(xx,195,438,418,bg,16)
        place((slug,"symbol",treatment),xx+34,230,370,300)
        text(xx+28,579,f"SYMBOL / {treatment.upper()}",13,fg,"400",1.7)
    for j,treatment in enumerate(("light","dark")):
        yy=635+j*200
        bg=WHITE if treatment=="light" else INK
        fg="#5A625F" if treatment=="light" else "#AEB9B4"
        rect(x,yy,888,178,bg,16)
        place((slug,"lockup-horizontal",treatment),x+32,yy+14,824,112)
        text(x+28,yy+151,f"HORIZONTAL LOCKUP / {treatment.upper()}",13,fg,"400",1.7)
    rect(x,1057,438,458,WHITE,16)
    place((slug,"lockup-stacked","light"),x+35,1079,368,365)
    text(x+28,1485,"STACKED LOCKUP",13,"#5A625F","400",1.7)
    rect(x+450,1057,438,458,INK,16)
    place((slug,"wordmark","dark"),x+478,1084,382,91)
    text(x+478,1200,"SHARED WORDMARK",13,"#AEB9B4","400",1.7)
    place((slug,"app-icon","light"),x+490,1245,154,154)
    place((slug,"app-icon","dark"),x+694,1245,154,154)
    text(x+478,1485,"APP ICONS + FAVICONS",13,"#AEB9B4","400",1.7)
text(50,1580,"INK  #0A0B0D",16,INK,"700")
rect(260,1562,30,22,INK,5)
text(342,1580,"WHITE  #F5F6F7",16,INK,"700")
rect(572,1562,30,22,WHITE,5)
text(652,1580,"MINT  #3DDC97",16,INK,"700")
rect(862,1562,30,22,MINT,5)
text(1040,1575,"LIGHT + DARK + BLACK + WHITE",17,INK,"700",1)
text(1040,1608,"Outlined lettering · Transparent logo exports · PNGs up to 4096 px",17,"#5A625F")
(ROOT/"preview").mkdir(exist_ok=True)
(ROOT/"source/overview-build.svg").write_text(ET.tostring(sheet,encoding="unicode"),encoding="utf-8")
print(f"Built {manifest['svg_count']} logo SVGs, 4 favicon SVGs, and {manifest['png_count']} PNG export jobs.")
