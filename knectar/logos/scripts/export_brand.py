"""Export the selected Hover master without redrawing the approved geometry.

Requires Python 3.11+, resvg-py, Pillow, and fonttools.
Run from any directory: python knectar/scripts/export_brand.py
"""
from pathlib import Path
from copy import deepcopy
from hashlib import sha256
import io
import json
import math
import re
import xml.etree.ElementTree as ET
import zipfile

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen
from fontTools.svgLib.path import parse_path
from PIL import Image, ImageDraw, ImageFont
import resvg_py

ROOT = Path(__file__).resolve().parents[1]
NS = 'http://www.w3.org/2000/svg'
ET.register_namespace('', NS)
SOURCE = ROOT / 'source/knectar-b-hover-ink-lockup.svg'
MASTER = ET.fromstring(SOURCE.read_text(encoding='utf-8'))
MARK, WORD = MASTER.findall(f'{{{NS}}}g')
_, _, HORIZONTAL_W, HORIZONTAL_H = map(float, MASTER.attrib['viewBox'].split())
APPEARANCES = {
    'color-on-light': ('#0A0B0D', '#3DDC97'),
    'color-on-dark': ('#F5F6F7', '#3DDC97'),
    'mono-on-light': ('#000000', '#000000'),
    'mono-on-dark': ('#FFFFFF', '#FFFFFF'),
}
LAYOUTS = ['horizontal', 'stacked', 'mark', 'wordmark']
FORMATS = ['native', 'square-1x1', 'landscape-16x9']


def glyph_bounds():
    bounds = []
    for path in WORD:
        tx, ty, sx, sy = map(float, re.findall(r'-?\d+(?:\.\d+)?', path.attrib['transform']))
        pen = BoundsPen(None)
        parse_path(path.attrib['d'], TransformPen(pen, (sx, 0, 0, sy, tx, ty)))
        bounds.append(pen.bounds)
    return (min(b[0] for b in bounds), min(b[1] for b in bounds),
            max(b[2] for b in bounds), max(b[3] for b in bounds))


WX0, WY0, WX1, WY1 = glyph_bounds()
WW, WH = WX1 - WX0, WY1 - WY0


def group(transform=None):
    g = ET.Element(f'{{{NS}}}g')
    if transform:
        g.set('transform', transform)
    return g


def composition(layout, appearance):
    body, accent = APPEARANCES[appearance]
    mark, word = deepcopy(MARK), deepcopy(WORD)
    for el in mark.iter():
        if el.get('fill') == '#0A0B0D':
            el.set('fill', body)
        elif el.get('fill') == '#3DDC97':
            el.set('fill', accent)
    word.set('fill', body)
    content = group()
    if layout == 'horizontal':
        content.extend([mark, word])
        return content, HORIZONTAL_W, HORIZONTAL_H
    if layout == 'mark':
        content.append(mark)
        return content, 128, 128
    if layout == 'wordmark':
        positioned = group(f'translate({16-WX0:.6f} {16-WY0:.6f})')
        positioned.append(word)
        content.append(positioned)
        return content, WW + 32, WH + 32
    # The same unmodified bird sits centered above the same outlined wordmark.
    w, h = WW + 48, 171 + WH + 24
    bird = group(f'translate({(w-153.6)/2:.6f} 12) scale(1.2)')
    bird.append(mark)
    lettering = group(f'translate({24-WX0:.6f} {171-WY0:.6f})')
    lettering.append(word)
    content.extend([bird, lettering])
    return content, w, h


def make_svg(layout, appearance, framing):
    content, nw, nh = composition(layout, appearance)
    if framing == 'native':
        cw, ch = nw, nh
    else:
        cw, ch = (1024, 1024) if framing == 'square-1x1' else (1920, 1080)
        s = min(cw * .84 / nw, ch * .80 / nh)
        positioned = group(f'translate({(cw-nw*s)/2:.6f} {(ch-nh*s)/2:.6f}) scale({s:.9f})')
        positioned.append(content)
        content = positioned
    svg = ET.Element(f'{{{NS}}}svg', {
        'viewBox': f'0 0 {cw:.6f} {ch:.6f}',
        'width': f'{cw:.6f}', 'height': f'{ch:.6f}',
        'role': 'img', 'aria-labelledby': 'title desc',
    })
    ET.SubElement(svg, f'{{{NS}}}title', {'id':'title'}).text = f'knectar Hover {layout}'
    ET.SubElement(svg, f'{{{NS}}}desc', {'id':'desc'}).text = (
        f'Selected Hover identity. {appearance}; {framing}; transparent background. '
        'Original approved hummingbird geometry and outlined lowercase knectar lettering.')
    svg.append(content)
    return ET.tostring(svg, encoding='unicode'), cw, ch


def digest(data):
    return sha256(data).hexdigest()


def export():
    (ROOT/'review').mkdir(exist_ok=True)
    entries = []
    for layout in LAYOUTS:
        for appearance in APPEARANCES:
            for framing in FORMATS:
                stem = f'knectar-{layout}-{appearance}-{framing}'
                svg, cw, ch = make_svg(layout, appearance, framing)
                svg_path = ROOT/'logos/svg'/framing/f'{stem}.svg'
                svg_path.parent.mkdir(parents=True, exist_ok=True)
                svg_path.write_text(svg, encoding='utf-8')
                parsed = ET.fromstring(svg)
                assert not parsed.findall(f'.//{{{NS}}}text')
                assert not parsed.findall(f'.//{{{NS}}}image')
                assert all(el.get('fill') in {None, *APPEARANCES[appearance]} for el in parsed.iter())
                entries.append({'file':svg_path.relative_to(ROOT).as_posix(), 'layout':layout,
                                'appearance':appearance, 'framing':framing, 'format':'svg',
                                'viewBox':[0,0,cw,ch], 'sha256':digest(svg.encode())})
                widths = [1280,1920,3840] if framing == 'landscape-16x9' else [512,1024,2048]
                for width in widths:
                    png = resvg_py.svg_to_bytes(svg_string=svg, width=width, skip_system_fonts=True)
                    im = Image.open(io.BytesIO(png))
                    height = im.height
                    png_path = ROOT/'logos/png'/framing/f'{stem}-{width}x{height}.png'
                    png_path.parent.mkdir(parents=True, exist_ok=True)
                    png_path.write_bytes(png)
                    alpha = im.getchannel('A')
                    box = alpha.getbbox()
                    assert im.mode == 'RGBA' and im.width == width
                    assert alpha.getextrema() == (0,255)
                    assert box and 0 < box[0] < box[2] < width and 0 < box[1] < box[3] < height
                    if framing == 'square-1x1':
                        assert width == height
                    elif framing == 'landscape-16x9':
                        assert width * 9 == height * 16
                    opaque_colors = {rgb[:3] for _, rgb in im.getcolors(im.width * im.height) if rgb[3] == 255}
                    expected = {tuple(bytes.fromhex(c[1:])) for c in APPEARANCES[appearance]}
                    if len(expected) == 1:
                        assert opaque_colors <= expected
                    else:
                        # Raster antialiasing blends the green/neutral shared edge.
                        a, b = list(expected)
                        channel = max(range(3), key=lambda c: abs(b[c]-a[c]))
                        for rgb in opaque_colors:
                            t = (rgb[channel]-a[channel])/(b[channel]-a[channel])
                            assert -.01 <= t <= 1.01
                            assert max(abs(rgb[c]-(a[c]+t*(b[c]-a[c]))) for c in range(3)) <= 2
                    entries.append({'file':png_path.relative_to(ROOT).as_posix(), 'layout':layout,
                                    'appearance':appearance,'framing':framing,'format':'png',
                                    'width':width,'height':height,'alpha':[0,255],
                                    'content_bounds':list(box),'sha256':digest(png)})
    assert len(entries) == 192
    for tone, name in [('ink','color-on-light'),('white','color-on-dark')]:
        selected = ROOT/f'source/knectar-b-hover-{tone}-lockup.svg'
        before = Image.open(io.BytesIO(resvg_py.svg_to_bytes(svg_path=str(selected),width=2000)))
        after = Image.open(io.BytesIO(resvg_py.svg_to_bytes(svg_string=make_svg('horizontal',name,'native')[0],width=2000)))
        assert before.size == after.size and before.tobytes() == after.tobytes(), 'Approved horizontal lockup changed'
    manifest = {'brand':'knectar','selected_concept':'B / Hover','selected_date':'2026-09-05',
                'transparent':True,'svg_count':48,'png_count':144,
                'approved_horizontal_pixel_equivalence':'PASS at 2000px in both color appearances',
                'sources':{p.name:digest(p.read_bytes()) for p in (ROOT/'source').glob('*.svg')},
                'assets':entries}
    (ROOT/'manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
    review_sheets()
    with zipfile.ZipFile(ROOT/'knectar-hover-brand-kit.zip','w',zipfile.ZIP_DEFLATED) as z:
        for p in sorted((ROOT/'logos').rglob('*')):
            if p.is_file(): z.write(p,p.relative_to(ROOT))
        for name in ['README.md','manifest.json']:
            if (ROOT/name).is_file(): z.write(ROOT/name,name)
    with zipfile.ZipFile(ROOT/'knectar-hover-brand-kit.zip') as z:
        assert z.testzip() is None
    print(json.dumps({'svg':48,'png':144,'total_artwork':192,'transparency':'PASS',
                      'palette':'PASS','aspect_ratios':'PASS','no_clipping':'PASS',
                      'master_preservation':'pixel identical','zip':'PASS'}))


def review_sheets():
    font = ImageFont.truetype(str(ROOT.parent/'legion-code-inc/fonts/Inter_24pt-Medium.ttf'),20)
    for framing in FORMATS:
        sheet = Image.new('RGB',(1600,1200),'#D5D8D7')
        draw = ImageDraw.Draw(sheet)
        for row,layout in enumerate(LAYOUTS):
            for col,appearance in enumerate(APPEARANCES):
                x,y = col*400,row*300
                dark = appearance.endswith('on-dark')
                bg,fg = ('#111315','#F5F6F7') if dark else ('#FAFAF8','#0A0B0D')
                draw.rectangle((x+4,y+4,x+396,y+296),fill=bg)
                draw.text((x+18,y+15),f'{layout} / {appearance}',font=font,fill=fg)
                source = make_svg(layout,appearance,framing)[0]
                im = Image.open(io.BytesIO(resvg_py.svg_to_bytes(svg_string=source,width=700)))
                im.thumbnail((354,218),Image.Resampling.LANCZOS)
                sheet.paste(im,(x+(400-im.width)//2,y+59+(218-im.height)//2),im)
        sheet.save(ROOT/f'review/{framing}-proof.png')


if __name__ == '__main__':
    export()
