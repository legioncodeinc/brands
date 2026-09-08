"""Build rflectr's Echo bat identity from the selected concept's vector trace.

Normal exports require Pillow, fonttools, resvg-py. First trace additionally
requires vtracer. No source or unrelated brand artwork is overwritten.
"""
from pathlib import Path
from copy import deepcopy
from hashlib import sha256
import io
import json
import sys
import xml.etree.ElementTree as ET
import zipfile

from PIL import Image
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
import resvg_py

ROOT = Path(__file__).resolve().parents[1]
BRANDS = ROOT.parents[1]
NS = 'http://www.w3.org/2000/svg'
ET.register_namespace('', NS)
PALETTES = {
    'color-on-light': ('#0A0B0D', '#3DDC97'),
    'color-on-dark': ('#F5F6F7', '#3DDC97'),
    'mono-on-light': ('#000000', '#000000'),
    'mono-on-dark': ('#FFFFFF', '#FFFFFF'),
}
COMPOSITIONS = ['horizontal', 'stacked', 'mark', 'wordmark']
SOURCE_BOX = (844, 90, 1208, 381)


def el(tag, attrib=None, **kw):
    return ET.Element(f'{{{NS}}}{tag}', {**(attrib or {}), **kw})


def group(transform=None):
    return el('g', {'transform': transform} if transform else {})


def svg_doc(w, h, content, title='rflectr Echo bat'):
    root = el('svg', viewBox=f'0 0 {w:g} {h:g}', width=f'{w:g}', height=f'{h:g}',
              role='img', **{'aria-label': title})
    title_el = el('title'); title_el.text = title; root.append(title_el)
    root.append(content)
    return ET.tostring(root, encoding='unicode')


def selected_pixels():
    im = Image.open(ROOT/'source/selected-concept-board.png').convert('RGB')
    x0, y0, x1, y1 = SOURCE_BOX
    px = im.load()
    pixels = []
    for y in range(y0, y1):
        for x in range(x0, x1):
            r, g, b = px[x, y]
            if g > 90 and g > r * 1.45 and g > b * 1.12:
                pixels.append((61, 220, 151, 255))
            elif max(r, g, b) < 125:
                pixels.append((10, 11, 13, 255))
            else:
                pixels.append((0, 0, 0, 0))
    return pixels, (x1-x0, y1-y0)


def trace_once():
    target = ROOT/'source/rflectr-echo-bat-master.svg'
    if target.exists() and '--retrace' not in sys.argv:
        return
    import vtracer
    pixels, size = selected_pixels()
    content = group()
    factor=1
    for color, rgba in [('#0A0B0D',(10,11,13,255)),('#3DDC97',(61,220,151,255))]:
        binary = [(0,0,0,255) if px == rgba else (255,255,255,255) for px in pixels]
        expanded=[]
        for y in range(size[1]):
            row=[px for px in binary[y*size[0]:(y+1)*size[0]] for _ in range(factor)]
            for _ in range(factor): expanded.extend(row)
        traced = vtracer.convert_pixels_to_svg(
            expanded, (size[0]*factor,size[1]*factor), colormode='binary', mode='spline', filter_speckle=4,
            corner_threshold=60, length_threshold=3.5, max_iterations=20,
            splice_threshold=45, path_precision=3)
        root = ET.fromstring(traced)
        scaled=group(f'scale({1/factor})')
        for path in root.findall(f'{{{NS}}}path'):
            path.set('fill',color)
            scaled.append(deepcopy(path))
        content.append(scaled)
    target.write_text(svg_doc(*size, content), encoding='utf-8')


def outline_word_once():
    target = ROOT/'source/rflectr-wordmark-master.svg'
    if target.exists():
        return
    font_path = BRANDS/'legion-code-inc/fonts/Inter_24pt-Bold.ttf'
    font = TTFont(font_path)
    gs = font.getGlyphSet(); cmap = font.getBestCmap()
    g = group(); offset = 0; bounds = []
    for char in 'rflectr':
        name = cmap[ord(char)]
        glyph = gs[name]
        pen = SVGPathPen(gs); glyph.draw(pen)
        bp = BoundsPen(gs); glyph.draw(bp)
        x0, y0, x1, y1 = bp.bounds
        bounds.append((x0+offset, y0, x1+offset, y1))
        g.append(el('path', d=pen.getCommands(), transform=f'translate({offset} 0)'))
        offset += font['hmtx'][name][0] - 36
    x0 = min(b[0] for b in bounds); y0 = min(b[1] for b in bounds)
    x1 = max(b[2] for b in bounds); y1 = max(b[3] for b in bounds)
    s = 72/(y1-y0)
    normalized = group(f'translate({-x0*s:g} {y1*s:g}) scale({s:g} {-s:g})')
    normalized.set('fill', '#0A0B0D'); normalized.append(g)
    target.write_text(svg_doc((x1-x0)*s, 72, normalized, 'rflectr outlined wordmark'), encoding='utf-8')
    (ROOT/'source/wordmark-provenance.json').write_text(json.dumps({
        'spelling': 'rflectr', 'font': str(font_path.relative_to(BRANDS)),
        'font_sha256': sha256(font_path.read_bytes()).hexdigest(),
        'tracking_font_units': -36, 'note': 'New outlined wordmark, visually matched to the selected concept; not an exact trace of generated lettering.'
    }, indent=2), encoding='utf-8')


def read_master(filename):
    root = ET.parse(ROOT/'source'/filename).getroot()
    _, _, w, h = map(float, root.attrib['viewBox'].split())
    return root.find(f'{{{NS}}}g'), w, h


def place(content, x, y, scale=1):
    g = group(f'translate({x:g} {y:g}) scale({scale:g})')
    g.append(content)
    return g


def composition(layout, appearance):
    body, accent = PALETTES[appearance]
    mark, mw, mh = read_master('rflectr-echo-bat-master.svg')
    word, ww, wh = read_master('rflectr-wordmark-master.svg')
    for item in mark.iter():
        if item.get('fill', '').upper() == '#0A0B0D': item.set('fill', body)
        elif item.get('fill', '').upper() == '#3DDC97': item.set('fill', accent)
    word.set('fill', body)
    content = group()
    if layout == 'mark':
        content.append(place(mark, 20, 20))
        return content, mw+40, mh+40
    if layout == 'wordmark':
        content.append(place(word, 20, 20))
        return content, ww+40, wh+40
    if layout == 'horizontal':
        s = 124/mh
        h = 164; w = 20+mw*s+25+ww+20
        content.append(place(mark, 20, 20, s))
        content.append(place(word, 20+mw*s+25, (h-wh)/2+4))
        return content, w, h
    s = 222/mh
    w = max(ww, mw*s)+64; h = 32+222+28+wh+32
    content.append(place(mark, (w-mw*s)/2, 32, s))
    content.append(place(word, (w-ww)/2, 32+222+28))
    return content, w, h


def make_svg(layout, appearance, square=False):
    g, w, h = composition(layout, appearance)
    if square:
        s = min(864/w, 864/h)
        g = place(g, (1024-w*s)/2, (1024-h*s)/2, s)
        w = h = 1024
    return svg_doc(w, h, g, f'rflectr Echo bat {layout}, {appearance}'), w, h


def icon_svg(appearance, template=False):
    g, w, h = composition('mark', 'mono-on-light' if template else appearance)
    content = group()
    if not template:
        content.append(el('rect', x='0', y='0', width='1024', height='1024', rx='214',
                          fill='#0A0B0D' if appearance.endswith('on-dark') else '#F5F6F7'))
    s = min(834/w, 834/h)
    content.append(place(g, (1024-w*s)/2, (1024-h*s)/2, s))
    return svg_doc(1024, 1024, content, 'rflectr Echo bat application icon')


def render(svg, width):
    font=BRANDS/'legion-code-inc/fonts/Inter_24pt-Medium.ttf'
    return resvg_py.svg_to_bytes(svg_string=svg, width=width, skip_system_fonts=True,
        font_files=[str(font)] if font.exists() else None,
        font_family='Inter 24pt Medium',sans_serif_family='Inter 24pt Medium')


def write_file(relative, data, **meta):
    p = ROOT/relative; p.parent.mkdir(parents=True, exist_ok=True)
    raw = data.encode('utf-8') if isinstance(data, str) else data
    p.write_bytes(raw)
    return {'file': relative, 'sha256': sha256(raw).hexdigest(), **meta}


def trace_verification():
    pixels, size = selected_pixels()
    svg = (ROOT/'source/rflectr-echo-bat-master.svg').read_text(encoding='utf-8')
    image = Image.open(io.BytesIO(render(svg, size[0]))).convert('RGBA')
    assert image.size == size
    a = [p[3] > 127 for p in pixels]
    b = [p[3] > 127 for p in (image.get_flattened_data() if hasattr(image, 'get_flattened_data') else image.getdata())]
    intersection = sum(x and y for x, y in zip(a, b))
    union = sum(x or y for x, y in zip(a, b))
    iou = intersection/union
    # Smooth vectors deliberately remove the pixel staircase of the low-resolution
    # source. Verify silhouette overlap and boundary distance, not pixel identity.
    source={(i%size[0],i//size[0]) for i,v in enumerate(a) if v}
    output={(i%size[0],i//size[0]) for i,v in enumerate(b) if v}
    def beyond_boundary(one,other):
        return sum(not any((x+dx,y+dy) in other for dx in range(-2,3) for dy in range(-2,3)) for x,y in one-other)
    outside=beyond_boundary(source,output)+beyond_boundary(output,source)
    boundary_fraction=outside/union
    assert iou > .95 and boundary_fraction < .002, f'Trace diverged: IoU={iou:.4f}, outside 2px={boundary_fraction:.4f}'
    return {'source_region_xyxy': SOURCE_BOX, 'silhouette_iou': round(iou, 6),
            'fraction_outside_2px_boundary':round(boundary_fraction,6),
            'method': 'Thresholded selected board region vs rendered vector alpha at source resolution',
            'scope': 'Silhouette similarity only. Vector smoothing, exact palette normalization, and new wordmark are production adaptations.'}


def proof_sheet(monochrome=False):
    content = group()
    content.append(el('rect', x='0', y='0', width='1600', height='1180', fill='#DDDFE1'))
    appearances=['mono-on-light','mono-on-dark'] if monochrome else ['color-on-light','color-on-dark']
    for col, appearance in enumerate(appearances):
        x = col*800; dark = col == 1
        bg, fg = ('#0A0B0D','#F5F6F7') if dark else ('#F5F6F7','#0A0B0D')
        content.append(el('rect', x=str(x), y='0', width='800', height='1180', fill=bg))
        label = el('text', x=str(x+40), y='54', fill=fg, **{'font-family':'sans-serif','font-size':'17'})
        label.text = 'rflectr / Echo bat / ' + ('mono / ' if monochrome else '') + ('dark surface' if dark else 'light surface')
        content.append(label)
        for layout, y, maxw, maxh in [('horizontal',110,704,230),('stacked',345,560,440),('wordmark',830,520,145)]:
            g,w,h = composition(layout, appearance)
            s = min(maxw/w,maxh/h)
            content.append(place(g, x+(800-w*s)/2,y+(maxh-h*s)/2,s))
        for i,size in enumerate([24,32,48,64,96]):
            root = ET.fromstring(icon_svg(appearance)); g = root.find(f'{{{NS}}}g')
            content.append(place(g, x+56+i*132,1030+(96-size)/2,size/1024))
    svg = svg_doc(1600,1180,content,'rflectr Echo bat identity proof')
    suffix='-mono' if monochrome else ''
    write_file(f'review/rflectr-echo-bat{suffix}-proof.svg',svg)
    write_file(f'review/rflectr-echo-bat{suffix}-proof.png',render(svg,1600))


def export():
    (ROOT/'source').mkdir(exist_ok=True,parents=True)
    trace_once(); outline_word_once()
    checks = trace_verification()
    entries=[]
    for layout in COMPOSITIONS:
        for appearance in PALETTES:
            for framing in ['native','square']:
                svg,w,h=make_svg(layout,appearance,framing=='square')
                tree=ET.fromstring(svg)
                assert not tree.findall(f'.//{{{NS}}}text')
                assert not tree.findall(f'.//{{{NS}}}image')
                assert not tree.findall(f'.//{{{NS}}}rect')
                assert all(e.get('fill') in {None,*PALETTES[appearance]} for e in tree.iter())
                stem=f'rflectr-{layout}-{appearance}-{framing}'
                entries.append(write_file(f'logos/svg/{framing}/{stem}.svg',svg,
                    composition=layout,appearance=appearance,framing=framing,format='svg',transparent=True))
                for width in [512,2048]:
                    data=render(svg,width); im=Image.open(io.BytesIO(data))
                    alpha=im.getchannel('A'); box=alpha.getbbox()
                    assert im.mode=='RGBA' and alpha.getextrema()==(0,255)
                    assert box and 0<box[0]<box[2]<im.width and 0<box[1]<box[3]<im.height
                    if framing=='square': assert im.width==im.height
                    entries.append(write_file(f'logos/png/{framing}/{stem}-{im.width}x{im.height}.png',data,
                        composition=layout,appearance=appearance,framing=framing,format='png',
                        width=im.width,height=im.height,transparent=True))
    for appearance in ['color-on-light','color-on-dark']:
        svg=icon_svg(appearance)
        name='light' if appearance.endswith('on-light') else 'dark'
        entries.append(write_file(f'application/rflectr-app-{name}.svg',svg,format='svg',transparent_corners=True))
        largest=None
        for size in [16,24,32,48,64,128,256,512,1024]:
            data=render(svg,size)
            im=Image.open(io.BytesIO(data)); assert im.size==(size,size) and im.mode=='RGBA'
            entries.append(write_file(f'application/rflectr-app-{name}-{size}.png',data,format='png',width=size,height=size))
            largest=im
        buf=io.BytesIO();largest.save(buf,format='ICO',sizes=[(s,s) for s in [16,24,32,48,64,128,256]])
        entries.append(write_file(f'application/rflectr-app-{name}.ico',buf.getvalue(),format='ico'))
    template=icon_svg('mono-on-light',template=True)
    entries.append(write_file('application/rflectr-template.svg',template,format='svg',transparent=True))
    for size in [16,18,20,22,24,32,36,40,44,48,64]:
        entries.append(write_file(f'application/rflectr-template-{size}.png',render(template,size),format='png',width=size,height=size,transparent=True))
    proof_sheet()
    proof_sheet(monochrome=True)
    manifest={'brand':'rflectr','direction':'B / Echo bat','selected_date':'2026-09-05',
              'status':'Selected direction; prepared artwork for review',
              'provenance':checks, 'source_files':{p.name:sha256(p.read_bytes()).hexdigest() for p in (ROOT/'source').iterdir() if p.is_file()},
              'validation':{'true_vector_paths':True,'outlined_lettering':True,'logo_transparency':True,'no_clipped_logo_exports':True,
                            'application_state':'Static; never recolor or animate logo to represent runtime state',
                            'native_app_integration':'Not performed'},
              'asset_count':len(entries),'assets':entries}
    write_file('manifest.json',json.dumps(manifest,indent=2))
    (ROOT/'review/vector-trace-verification.json').write_text(json.dumps(checks,indent=2),encoding='utf-8')
    with zipfile.ZipFile(ROOT/'rflectr-echo-bat-brand-kit.zip','w',zipfile.ZIP_DEFLATED) as z:
        for folder in ['logos','application','source','review','scripts']:
            for p in sorted((ROOT/folder).rglob('*')):
                if p.is_file() and '__pycache__' not in str(p) and p.name != 'master-first.png': z.write(p,p.relative_to(ROOT))
        for name in ['README.md','manifest.json','preview.html']:
            if (ROOT/name).is_file():z.write(ROOT/name,name)
    with zipfile.ZipFile(ROOT/'rflectr-echo-bat-brand-kit.zip') as z: assert z.testzip() is None
    print(json.dumps({'assets':len(entries),'source_trace':checks,'validation':'PASS','zip':str(ROOT/'rflectr-echo-bat-brand-kit.zip')}))


if __name__=='__main__':
    export()
