from pathlib import Path
import base64
import json
import re
import zipfile
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from PIL import Image, ImageDraw, ImageFont
import resvg_py

ROOT = Path(__file__).resolve().parent
BRANDS = ROOT.parents[2]
VIZ = Path('C:/Users/mario/.codex/visualizations/2026/09/05/01a07225-031a-7702-99cc-dc870a05b184/knectar-logo-options.html')
FONT = BRANDS / 'legion-code-inc/fonts/Inter_24pt-SemiBold.ttf'
font = TTFont(FONT)
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()

# Independent original symbol constructions; existing brand marks are references only.
# A single accent region is retained in each concept.
concepts = [
    ('01-junction', '01 / Junction', 'A K-shaped routing junction.',
     '<path d="M15 13H34V51L73 13H98L55 55L100 103H73L34 61V103H15Z" fill="INK"/><path d="M34 51L73 13H98L56 54H34Z" fill="GREEN"/>'),
    ('02-nectar', '02 / Nectar', 'A drop with a K cut through its center.',
     '<path fill="INK" fill-rule="evenodd" d="M57 5C48 23 17 47 17 70C17 94 34 109 57 109C80 109 97 94 97 70C97 47 66 23 57 5ZM42 43H52V66L69 48H83L62 70L83 94H68L52 75V94H42Z"/><path fill="GREEN" d="M57 5C52 15 43 25 35 35H79C70 24 62 15 57 5Z"/>'),
    ('03-weave', '03 / Weave', 'Two systems connected by one shared link.',
     '<path d="M64 25L55 16C44 5 28 5 17 16C6 27 6 43 17 54L49 86C60 97 76 97 87 86C98 75 98 59 87 48L78 39L65 52L74 61C78 65 78 70 74 74C70 78 65 78 61 74L29 42C25 38 25 33 29 29C33 25 38 25 42 29L51 38Z" fill="INK"/><path d="M50 77L59 86C70 97 86 97 97 86C108 75 108 59 97 48L65 16C54 5 38 5 27 16L40 29C44 25 49 25 53 29L85 61C89 65 89 70 85 74C81 78 76 78 72 74L63 65Z" fill="INK"/><path d="M37 63L63 37L77 51L51 77Z" fill="GREEN"/>'),
    ('04-hummingbird', '04 / Hummingbird', 'Speed, precision, and the nectar connection.',
     '<path d="M57 65C64 45 76 33 85 35C92 36 92 42 92 46L114 44L93 51C91 66 77 78 59 80L34 101L43 76L8 90L45 61L18 21C42 25 54 43 57 65Z" fill="INK"/><path d="M52 61C44 43 36 18 43 4C61 19 68 36 61 53Z" fill="GREEN"/>'),
    ('05-cell', '05 / Cell', 'A modular cell around a clear central route.',
     '<path d="M56 5L101 31V82L56 108L11 82V31ZM56 25L29 41V72L56 88L83 72V41Z" fill="INK" fill-rule="evenodd"/><path d="M56 5L101 31L83 41L56 25Z" fill="GREEN"/><path d="M40 38H50V54L66 38H80L59 58L80 78H66L50 63V78H40Z" fill="INK"/>'),
    ('06-lens', '06 / Lens', 'A focused signal inside an open aperture.',
     '<path d="M56 8C30 8 9 29 9 56S30 104 56 104C72 104 86 96 95 84L81 72C75 81 67 86 56 86C40 86 27 72 27 56S40 26 56 26C67 26 75 31 81 40L95 28C86 16 72 8 56 8Z" fill="INK"/><path d="M76 47H106V65H76Z" fill="GREEN"/><circle cx="56" cy="56" r="12" fill="INK"/>'),
]

def wordmark(ink):
    x = 155.0
    scale = 72 / font['head'].unitsPerEm
    parts = []
    for c in 'knectar':
        name = cmap[ord(c)]
        pen = SVGPathPen(glyphs)
        glyphs[name].draw(pen)
        parts.append(f'<path transform="translate({x:.3f} 87) scale({scale:.7f} {-scale:.7f})" d="{pen.getCommands()}"/>')
        x += font['hmtx'][name][0] * scale - 1.7
    return f'<g fill="{ink}">{"".join(parts)}</g>', x + 18

def svg(symbol, label, ink, icon=False):
    shape = symbol.replace('INK', ink).replace('GREEN', '#3DDC97')
    word, width = wordmark(ink)
    if icon:
        width, word = 128, ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width:.3f} 128" role="img" aria-label="knectar {label}"><title>knectar {label}</title><g transform="translate(5 6)">{shape}</g>{word}</svg>'

def build_all(concepts, ROOT):
    for sub in ['svg', 'png', 'review']:
        (ROOT / sub).mkdir(exist_ok=True, parents=True)

    report = []
    for slug, title, desc, symbol in concepts:
        for variant, ink in [('ink','#0A0B0D'),('white','#F5F6F7')]:
            for icon in [False, True]:
                stem = f'knectar-{slug}-{variant}' + ('-icon' if icon else '-lockup')
                source = svg(symbol, title, ink, icon)
                (ROOT/'svg'/f'{stem}.svg').write_text(source, encoding='utf-8')
                png = resvg_py.svg_to_bytes(svg_string=source, width=512 if icon else 2000)
                (ROOT/'png'/f'{stem}.png').write_bytes(png)
                im = Image.open(ROOT/'png'/f'{stem}.png')
                alpha = im.getchannel('A')
                assert alpha.getextrema() == (0,255)
                assert im.getpixel((0,0))[3] == 0
                assert im.getbbox() is not None
                report.append({'file':f'png/{stem}.png','size':im.size,'mode':im.mode,'alpha_min_max':alpha.getextrema()})

    (ROOT/'review/verification.json').write_text(json.dumps(report,indent=2),encoding='utf-8')

    # QA contact sheet is separate from the deliverable transparent artwork.
    sheet = Image.new('RGB',(1500,370*((len(concepts)+1)//2)),'#EDEEEB')
    d = ImageDraw.Draw(sheet)
    label_font = ImageFont.truetype(str(BRANDS/'legion-code-inc/fonts/Inter_24pt-Medium.ttf'),22)
    for i,(slug,title,desc,symbol) in enumerate(concepts):
        col,row=i%2,i//2
        x,y=col*750,row*370
        d.text((x+32,y+20),title,fill='#0A0B0D',font=label_font)
        for variant,dy,bg in [('ink',70,'#FAFAF8'),('white',198,'#0A0B0D')]:
            d.rectangle((x+24,y+dy,x+726,y+dy+112), fill=bg)
            im=Image.open(ROOT/'png'/f'knectar-{slug}-{variant}-lockup.png')
            im.thumbnail((610,99),Image.Resampling.LANCZOS)
            sheet.paste(im,(x+55,y+dy+6),im)
        d.text((x+32,y+330),desc,fill='#373B3C',font=ImageFont.truetype(str(FONT),17))
    sheet.save(ROOT/'review/contact-sheet.png')

    # Only original SVG assets and PNG exports are packaged.
    with zipfile.ZipFile(ROOT/'knectar-logo-options-round-01.zip','w',zipfile.ZIP_DEFLATED) as z:
        for sub in ['svg','png']:
            for p in sorted((ROOT/sub).iterdir()):
                z.write(p,p.relative_to(ROOT))

    print(f'Created {len(report)} verified transparent PNGs, {len(report)} SVGs, and a ZIP.')


if __name__ == "__main__":
    build_all(concepts, ROOT)
