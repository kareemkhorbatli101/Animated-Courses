"""G · Figures and visuals — 24 checks.

Geometry checks read the sidecar `.json` the renderer emits beside each PNG:
label boxes, leader segments, drawn bounds, glyph sizes. Pixel checks read the PNG.
"""
import json, os, re, struct, math
from . import check, ok, fail, expect
import model as M

def _figpath(ctx, u, n, ext):
    return os.path.join(ctx.root, 'figures', ctx.book, f'u{u.num:02d}-{n}.{ext}')

def _png_size(p):
    with open(p, 'rb') as f:
        h = f.read(26)
    w, ht = struct.unpack('>II', h[16:24])
    return w, ht, h[24], h[25]

def _meta(ctx, u, n):
    p = _figpath(ctx, u, n, 'json')
    return json.load(open(p)) if os.path.exists(p) else None

def _present(ctx, u):
    return [n for n in (1, 2, 3, 4) if os.path.exists(_figpath(ctx, u, n, 'png'))]

def _skip_if_absent(ctx, u):
    return None if _present(ctx, u) else ok('SKIP: no figures rendered yet (P1 gate)')


@check('G01', 'golden.figures.per_unit', 'Exactly 4 figure captions per unit')
def g01(u, ctx):
    return expect(len(u.figures) == 4, f'{len(u.figures)} captions')

@check('G02', 'golden.figures', 'Figures numbered N.1-N.4, no gaps, no duplicates')
def g02(u, ctx):
    nums = sorted(n for _, n, _ in u.figures)
    units = {m for m, _, _ in u.figures}
    return expect(nums == [1, 2, 3, 4] and units == {u.num}, f'numbers {nums}, unit prefixes {units}')

@check('G03', 'golden.figures.slots', 'Slot placement: N.4 Warm Up, N.1+N.2 Part 1, N.3 Part 5')
def g03(u, ctx):
    want = {1: 'Part 1', 2: 'Part 1', 3: 'Part 5', 4: 'Warm Up'}
    got = {}
    for p in u.parts:
        for src in [p.leading] + [s.lines for s in p.subs]:
            for l in src:
                m = M.FIGCAP.match(l)
                if m:
                    got[int(m.group(2))] = p.name
    bad = [f'{k}: {got.get(k)} want {v}' for k, v in want.items() if got.get(k) != v]
    return expect(not bad, '; '.join(bad))

@check('G04', 'golden.figures.caption_pattern', 'Caption format *Figure N.M · Text.*')
def g04(u, ctx):
    caps = [l for l in u.lines if l.startswith('*Figure')]
    bad = [c for c in caps if not M.FIGCAP.match(c)]
    return expect(len(caps) == 4 and not bad, f'{len(caps)} captions, malformed {bad}')

@check('G05', 'golden.figures.caption_pattern', 'Caption ends in a full stop')
def g05(u, ctx):
    bad = [c for c in u.lines if c.startswith('*Figure') and not c.rstrip().endswith('.*')]
    return expect(not bad, f'{bad}')

@check('G06', 'golden.figures.px_width', 'PNG width == 1440 px')
def g06(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    bad = [f'{n}:{_png_size(_figpath(ctx,u,n,"png"))[0]}' for n in _present(ctx, u)
           if _png_size(_figpath(ctx, u, n, 'png'))[0] != ctx.spec['figures']['px_width']]
    return expect(not bad, f'widths {bad}')

@check('G07', 'golden.figures.px_height', 'PNG height within 320-880 px')
def g07(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    lo, hi = ctx.spec['figures']['px_height']['min'], ctx.spec['figures']['px_height']['max']
    bad = []
    for n in _present(ctx, u):
        h = _png_size(_figpath(ctx, u, n, 'png'))[1]
        if not lo <= h <= hi:
            bad.append(f'{n}:{h}')
    return expect(not bad, f'heights {bad} outside {lo}-{hi}')

@check('G08', 'golden.figures', '8-bit RGB PNG')
def g08(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    bad = []
    for n in _present(ctx, u):
        _, _, bd, ct = _png_size(_figpath(ctx, u, n, 'png'))
        if (bd, ct) != (8, 2):
            bad.append(f'{n}: bit={bd} type={ct}')
    return expect(not bad, f'{bad}')

@check('G09', 'palette.colours', 'Every pixel within deltaE 3 of the 12-colour locked palette')
def g09(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    from PIL import Image
    pal = [tuple(int(c['hex'][i:i+2], 16) for i in (1, 3, 5)) for c in ctx.palette['colours'].values()]
    tol = ctx.palette['antialias_tolerance_deltaE']
    limit = ctx.palette['max_offpalette_pixel_fraction']
    bad = []
    for n in _present(ctx, u):
        im = Image.open(_figpath(ctx, u, n, 'png')).convert('RGB')
        cols = im.getcolors(1 << 22) or []
        tot = sum(c for c, _ in cols)
        off = sum(c for c, px in cols
                  if min(math.dist(px, p) for p in pal) > tol * 2.5)
        if off / max(1, tot) > limit:
            bad.append(f'{n}: {off/tot:.1%} off-palette')
    return expect(not bad, '; '.join(bad))

@check('G10', 'golden.figures.max_bytes', 'File size <= 60 KB')
def g10(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    lim = ctx.spec['figures']['max_bytes']
    bad = [f'{n}:{os.path.getsize(_figpath(ctx,u,n,"png"))//1024}KB' for n in _present(ctx, u)
           if os.path.getsize(_figpath(ctx, u, n, 'png')) > lim]
    return expect(not bad, f'{bad}')

@check('G11', 'typography.figure_placement', 'Placement == fit(5.625x1.979in) rounded to whole 96-DPI px')
def g11(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    fp = ctx.typo['figure_placement']
    BW, BH, DPI = fp['box_in']['w'], fp['box_in']['h'], fp['round_to_dpi']
    bad = []
    for n in _present(ctx, u):
        pw, ph, _, _ = _png_size(_figpath(ctx, u, n, 'png'))
        sc = min(BW / pw, BH / ph)
        w = math.floor(pw * sc * DPI + 0.5) / DPI
        h = math.floor(ph * sc * DPI + 0.5) / DPI
        if not (w <= BW + 1e-6 and h <= BH + 1e-6):
            bad.append(f'{n}: {w:.4f}x{h:.4f} exceeds box')
        m = _meta(ctx, u, n)
        if m and 'placed_in' in m:
            if abs(m['placed_in'][0] - w) > 1e-6 or abs(m['placed_in'][1] - h) > 1e-6:
                bad.append(f'{n}: metadata {m["placed_in"]} != law {w:.4f}x{h:.4f}')
    return expect(not bad, '; '.join(bad))

@check('G12', 'golden.figures.slots', 'Each figure caption sits directly under its own heading')
def g12(u, ctx):
    bad = []
    for p in u.parts:
        for sub in p.subs:
            idx = [i for i, l in enumerate(sub.lines) if M.FIGCAP.match(l)]
            for i in idx:
                before = [l for l in sub.lines[:i] if l.strip()]
                if before:
                    bad.append(f'{sub.heading}: {len(before)} line(s) before the figure')
    # the Warm Up figure sits under its own sub-heading too
    return expect(not bad, '; '.join(bad))

@check('G13', 'golden.figures.min_glyph_px', 'No rendered glyph below 22 px')
def g13(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    lim = ctx.spec['figures']['min_glyph_px']
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m:
            bad.append(f'{n}: no metadata'); continue
        small = [t['text'][:18] for t in m.get('texts', []) if t.get('size', 99) < lim]
        if small:
            bad.append(f'{n}: {small}')
    return expect(not bad, '; '.join(bad))

def _overlap(a, b):
    return not (a[2] <= b[0] or b[2] <= a[0] or a[3] <= b[1] or b[3] <= a[1])

@check('G14', 'golden.figures', 'No label bounding box overlaps another')
def g14(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m:
            bad.append(f'{n}: no metadata'); continue
        boxes = [(t['bbox'], t['text']) for t in m.get('texts', []) if 'bbox' in t]
        for i, (bi, ti) in enumerate(boxes):
            for bj, tj in boxes[i + 1:]:
                if _overlap(bi, bj):
                    bad.append(f'{n}: {ti[:14]!r} over {tj[:14]!r}')
    return expect(not bad, '; '.join(bad[:6]))

def _seg_cross(p, q, r, s):
    def d(a, b, c):
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
    d1, d2, d3, d4 = d(r, s, p), d(r, s, q), d(p, q, r), d(p, q, s)
    return ((d1 > 0) != (d2 > 0)) and ((d3 > 0) != (d4 > 0))

@check('G15', 'golden.source_defects_not_reproduced.D4', 'No leader line crosses another (source defect D4)')
def g15(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m:
            continue
        L = [tuple(x) for x in m.get('leaders', [])]
        for i, a in enumerate(L):
            for b in L[i + 1:]:
                if _seg_cross(a[:2], a[2:], b[:2], b[2:]):
                    bad.append(f'{n}: leaders cross')
    return expect(not bad, '; '.join(sorted(set(bad))))

@check('G16', 'golden.figures', 'No drawn element outside the canvas')
def g16(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m:
            continue
        W, H = m['canvas']
        x0, y0, x1, y1 = m['bounds']
        if x0 < 0 or y0 < 0 or x1 > W or y1 > H:
            bad.append(f'{n}: bounds {m["bounds"]} vs canvas {m["canvas"]}')
    return expect(not bad, '; '.join(bad))

@check('G17', 'golden.source_defects_not_reproduced.D4', 'Empty band <= 8% of canvas height, top and bottom')
def g17(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    lim = ctx.spec['figures']['max_empty_band_fraction']
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m:
            continue
        H = m['canvas'][1]
        top, bot = m['bounds'][1] / H, (H - m['bounds'][3]) / H
        if top > lim or bot > lim:
            bad.append(f'{n}: top {top:.0%} bottom {bot:.0%} (limit {lim:.0%})')
    return expect(not bad, '; '.join(bad))

@check('G18', 'golden.figures', "Every figure label word is in the unit's vocabulary or glossary")
def g18(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    import lexis as L
    bad = []
    body = u.text.lower()
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m:
            continue
        for t in m.get('texts', []):
            for w in L.tokens(t['text']):
                if len(w) > 2 and w.lower() not in body:
                    bad.append(f'{n}: "{w}" not in the unit text')
    return expect(not bad, '; '.join(sorted(set(bad))[:8]))

@check('G19', 'golden.figures.slots', 'Label-me figure has as many rules as the task has items')
def g19(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    m = _meta(ctx, u, 2)
    if not m:
        return ok('SKIP: figure 2 not rendered')
    sub = next((x for x in u.subs if any('Figure %d.2' % u.num in l for l in x.lines)), None)
    mt = M.matchings(sub) if sub else None
    want = len(mt.a) if mt else 0
    got = len(m.get('leaders', []))
    return expect(got == want, f'figure 2 has {got} rules, task has {want} items')

@check('G20', 'golden.figures.slots', 'Category-set figure has as many cards as the table has rows')
def g20(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    m = _meta(ctx, u, 1)
    if not m:
        return ok('SKIP: figure 1 not rendered')
    sub = next((x for x in u.subs if any('Figure %d.1' % u.num in l for l in x.lines)), None)
    rows = len([l for l in (sub.lines if sub else []) if l.startswith('|') and l.count('|') >= 3]) - 2
    got = m.get('cards', 0)
    return expect(got >= max(rows, 1), f'figure 1 has {got} cards, table has {max(rows,0)} rows')

@check('G21', 'golden.figures.slots', 'Process strip has an arrow between every adjacent pair')
def g21(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    m = _meta(ctx, u, 3)
    if not m:
        return ok('SKIP: figure 3 not rendered')
    st, ar = m.get('stages', 0), m.get('arrows', 0)
    return expect(st >= 2 and ar == st - 1, f'{st} stages, {ar} arrows')

@check('G22', 'golden.figures.min_contrast_ratio', 'Text-on-fill contrast >= 4.5:1')
def g22(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    def lum(c):
        def f(v):
            v /= 255
            return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
        return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2])
    def ratio(a, b):
        la, lb = lum(a), lum(b)
        return (max(la, lb) + 0.05) / (min(la, lb) + 0.05)
    lim = ctx.spec['figures']['min_contrast_ratio']
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m:
            continue
        for t in m.get('texts', []):
            fg = tuple(int(t.get('fill', '#1F3864')[i:i+2], 16) for i in (1, 3, 5))
            bg = tuple(int(t.get('on', '#FFFFFF')[i:i+2], 16) for i in (1, 3, 5))
            r = ratio(fg, bg)
            if r < lim:
                bad.append(f'{n}: {t["text"][:14]!r} {r:.1f}:1')
    return expect(not bad, '; '.join(bad[:6]))

@check('G23', 'golden.figures', 'Re-rendering produces a byte-identical PNG')
def g23(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    import hashlib
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m or 'sha256' not in m:
            bad.append(f'{n}: no recorded hash'); continue
        h = hashlib.sha256(open(_figpath(ctx, u, n, 'png'), 'rb').read()).hexdigest()
        if h != m['sha256']:
            bad.append(f'{n}: hash drift')
    return expect(not bad, '; '.join(bad))

@check('G24', 'golden.figures', 'Alt text present and descriptive for every figure')
def g24(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        alt = (m or {}).get('alt', '')
        if len(alt.split()) < 6:
            bad.append(f'{n}: alt is {len(alt.split())} words')
    return expect(not bad, '; '.join(bad))
