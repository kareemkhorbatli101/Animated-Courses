"""I · Covers and front matter — 12 checks. Book-scope."""
import os, re, json, struct
from . import check, ok, fail, expect

def _cov(ctx, side):
    return os.path.join(ctx.root, 'covers', f'{ctx.book}-{side}.png')

def _meta(ctx, side):
    p = os.path.join(ctx.root, 'covers', f'{ctx.book}-{side}.json')
    return json.load(open(p)) if os.path.exists(p) else None

def _skip(ctx):
    return None if os.path.exists(_cov(ctx, 'front')) else ok('SKIP: covers not built yet (P3 gate)')


@check('I01', 'covers', 'Front cover carries series, title, volume, level', scope='book')
def i01(units, ctx):
    s = _skip(ctx)
    if s: return s
    m = _meta(ctx, 'front') or {}
    t = ' '.join(x['text'] for x in m.get('texts', []))
    missing = [k for k in ('English for Daily Life', ctx.volume_title, 'A2') if k not in t]
    return expect(not missing, f'front cover missing {missing}')

@check('I02', 'palette.colours', 'Cover art uses only the locked palette', scope='book')
def i02(units, ctx):
    s = _skip(ctx)
    if s: return s
    import math
    from PIL import Image
    pal = [tuple(int(c['hex'][i:i+2], 16) for i in (1, 3, 5)) for c in ctx.palette['colours'].values()]
    bad = []
    for side in ('front', 'back'):
        p = _cov(ctx, side)
        if not os.path.exists(p):
            continue
        im = Image.open(p).convert('RGB').resize((400, 566))
        cols = im.getcolors(1 << 20) or []
        tot = sum(c for c, _ in cols)
        off = sum(c for c, px in cols if min(math.dist(px, q) for q in pal) > 10)
        if off / max(1, tot) > ctx.palette['max_offpalette_pixel_fraction']:
            bad.append(f'{side}: {off/tot:.1%} off-palette')
    return expect(not bad, '; '.join(bad))

@check('I03', 'covers', 'Back cover carries blurb, unit list, grammar list, can-do, level', scope='book')
def i03(units, ctx):
    s = _skip(ctx)
    if s: return s
    m = _meta(ctx, 'back') or {}
    need = ('blurb', 'units', 'grammar', 'can_do', 'level')
    missing = [k for k in need if not m.get(k)]
    return expect(not missing, f'back cover missing {missing}')

@check('I04', 'covers', 'Back-cover blurb is 120-200 words', scope='book')
def i04(units, ctx):
    s = _skip(ctx)
    if s: return s
    b = (_meta(ctx, 'back') or {}).get('blurb', '')
    n = len(b.split())
    return expect(120 <= n <= 200, f'blurb is {n} words')

@check('I05', 'covers', 'No fabricated ISBN or barcode', scope='book')
def i05(units, ctx):
    s = _skip(ctx)
    if s: return s
    txt = json.dumps(_meta(ctx, 'front') or {}) + json.dumps(_meta(ctx, 'back') or {})
    hits = re.findall(r'\bISBN\b|\b97[89][-\d]{10,}\b|\bbarcode\b', txt, re.I)
    return expect(not hits, f'ISBN/barcode present: {hits}')

@check('I06', 'covers', 'No fabricated publisher, endorsement or review quote', scope='book')
def i06(units, ctx):
    s = _skip(ctx)
    if s: return s
    txt = json.dumps(_meta(ctx, 'front') or {}) + json.dumps(_meta(ctx, 'back') or {})
    hits = re.findall(r'\b(Press|Publishing|Publishers|Ltd|Inc|University of|“[^”]{20,}” —)\b', txt)
    return expect(not hits, f'publisher/endorsement markers: {sorted(set(hits))}')

@check('I07', 'covers', 'Back-cover unit list diffs clean against the actual contents', scope='book')
def i07(units, ctx):
    s = _skip(ctx)
    if s: return s
    listed = [x.strip() for x in (_meta(ctx, 'back') or {}).get('units', [])]
    actual = [u.title for u in sorted(units, key=lambda x: x.num)]
    return expect(listed == actual, f'cover lists {listed}\nbook has {actual}')

@check('I08', 'covers', 'Every claim on the cover is verified against the book', scope='book')
def i08(units, ctx):
    s = _skip(ctx)
    if s: return s
    m = _meta(ctx, 'back') or {}
    bad = []
    if m.get('unit_count') and int(m['unit_count']) != len(units):
        bad.append(f'claims {m["unit_count"]} units, book has {len(units)}')
    cando = set(m.get('can_do', []))
    real = {l.lstrip('☐ ').strip() for u in units for s2 in u.subs
            if s2.heading.endswith('Can-Do') for l in s2.lines if l.strip().startswith('☐')}
    stray = [c for c in cando if c not in real]
    if stray:
        bad.append(f'can-do lines not in the book: {stray[:3]}')
    return expect(not bad, '; '.join(bad))

@check('I09', 'covers', 'Front and back are a visually consistent pair', scope='book')
def i09(units, ctx):
    s = _skip(ctx)
    if s: return s
    f, b = _meta(ctx, 'front') or {}, _meta(ctx, 'back') or {}
    return expect(f.get('theme') and f.get('theme') == b.get('theme'),
                  f'themes front={f.get("theme")} back={b.get("theme")}')

@check('I10', 'covers', 'The two volumes are distinguishable at thumbnail size', scope='book')
def i10(units, ctx):
    s = _skip(ctx)
    if s: return s
    other = 'a22' if ctx.book == 'a21' else 'a21'
    p2 = os.path.join(ctx.root, 'covers', f'{other}-front.png')
    if not os.path.exists(p2):
        return ok(f'{other} cover not built yet')
    from PIL import Image, ImageChops
    a = Image.open(_cov(ctx, 'front')).convert('RGB').resize((64, 90))
    b = Image.open(p2).convert('RGB').resize((64, 90))
    diff = ImageChops.difference(a, b)
    score = sum(sum(p) for p in diff.getdata()) / (64 * 90 * 3 * 255)
    return expect(score > 0.05, f'thumbnail difference only {score:.1%}')

@check('I11', 'covers', 'Covers render at 300 DPI without resampling', scope='book')
def i11(units, ctx):
    s = _skip(ctx)
    if s: return s
    bad = []
    for side in ('front', 'back'):
        p = _cov(ctx, side)
        if not os.path.exists(p):
            bad.append(f'{side}: absent'); continue
        with open(p, 'rb') as f:
            w, h = struct.unpack('>II', f.read(24)[16:24])
        if (w, h) != (2480, 3508):
            bad.append(f'{side}: {w}x{h}')
    return expect(not bad, '; '.join(bad))

@check('I12', 'covers', 'No cover text within 10 mm of the trim edge', scope='book')
def i12(units, ctx):
    s = _skip(ctx)
    if s: return s
    MARGIN = round(10 / 25.4 * 300)   # 118 px
    bad = []
    for side in ('front', 'back'):
        m = _meta(ctx, side)
        if not m:
            continue
        W, H = m.get('canvas', (2480, 3508))
        for t in m.get('texts', []):
            x0, y0, x1, y1 = t['bbox']
            if x0 < MARGIN or y0 < MARGIN or x1 > W - MARGIN or y1 > H - MARGIN:
                bad.append(f'{side}: {t["text"][:18]!r} in the margin')
    return expect(not bad, '; '.join(bad[:5]))
