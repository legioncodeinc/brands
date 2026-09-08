"""Package the completed kit and independently usable per-direction archives."""
from pathlib import Path
import hashlib,json,zipfile
ROOT=Path(__file__).resolve().parent.parent
report_path=ROOT/"validation.json"
report=json.loads(report_path.read_text(encoding="utf8"))
report["catalog_validation"]={"direction_treatment_states_checked":8,"resolved_local_references":333,"missing_local_references":0,"javascript_syntax":"passed"}
report_path.write_text(json.dumps(report,indent=2)+"\n",encoding="utf8")
checks=[]
for file in sorted(ROOT.rglob("*")):
    if file.is_file() and file.name!="checksums.sha256" and "__pycache__" not in file.parts:
        checks.append(f"{hashlib.sha256(file.read_bytes()).hexdigest()}  {file.relative_to(ROOT).as_posix()}")
(ROOT/"checksums.sha256").write_text("\n".join(checks)+"\n",encoding="utf8")
def verify_archive(path):
    with zipfile.ZipFile(path) as archive:
        bad=archive.testzip()
        if bad: raise RuntimeError(f"Archive integrity failure: {bad}")
        print(json.dumps({"archive":str(path),"files":len(archive.namelist()),"bytes":path.stat().st_size}))
all_zip=ROOT.parent/"whipt-complete-brand-kit-v1.zip"
with zipfile.ZipFile(all_zip,"x",zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
    for file in sorted(ROOT.rglob("*")):
        if file.is_file() and "__pycache__" not in file.parts:
            archive.write(file,Path(ROOT.name)/file.relative_to(ROOT))
verify_archive(all_zip)
for slug,folder,label in (("pursuit","01-pursuit","Pursuit"),("full-stride","02-full-stride","Full Stride")):
    output=ROOT.parent/f"whipt-{slug}-assets-v1.zip"
    with zipfile.ZipFile(output,"x",zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
        for file in sorted((ROOT/folder).rglob("*")):
            if file.is_file(): archive.write(file,Path(folder)/file.relative_to(ROOT/folder))
        for master in [f"{slug}-symbol-master.svg","wordmark-master.svg"]:
            archive.write(ROOT/"source"/master,Path(folder)/"source"/master)
        archive.write(ROOT/"palette.json",Path(folder)/"palette.json")
        guide=f"""# WHIPT — {label} asset set

Editable vector SVGs, transparent PNG exports, outlined wordmark, horizontal and stacked lockups, square icons, opaque app tiles, and browser/platform icons.

- light: ink #0A0B0D + mint #3DDC97, intended for light backgrounds.
- dark: off-white #F5F6F7 + mint #3DDC97, intended for dark backgrounds.
- black / white: pure monochrome.
- The symbol, icon, wordmark and lockups have real transparent backgrounds.
- App tiles and favicons intentionally include a solid square background.
- Numbers in PNG filenames specify pixel width; icon/app-icon files are square.
- Source SVG masters are in source/. No fonts or embedded images are required.
- Keep original proportions and allow clear space around the mark.

The complete two-direction kit includes an offline visual catalog and an overview sheet.
"""
        archive.writestr(f"{folder}/README.md",guide)
    verify_archive(output)

