"""G · Figures and visuals — 31 checks.

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

def _fig(ctx, u=None):
    """The figure spec as it applies to ONE unit.

    Phase 5 of the visual plan takes a single unit to the full 41-slot layout
    and leaves the other nineteen on the 14 they have, so that 540 pieces of
    new artwork are not committed before one unit has been read end to end.
    A unit named in `figures.dense_units` is measured against `dense_slots`
    and `dense_per_unit`; every other unit against `slots` and `per_unit`.
    Everything else -- the boxes, the full-page set, the byte budgets -- is
    shared, because the slot NUMBERS mean the same job in both tables: that is
    what the 2026-10-08 renumber was for.
    """
    fg = ctx.spec['figures']
    dense = (fg.get('dense_units') or {}).get(ctx.book) or []
    if u is not None and u.num in dense:
        return {**fg, 'slots': fg['dense_slots'], 'per_unit': fg['dense_per_unit']}
    return fg


def _slots(ctx, u=None):
    return sorted(_fig(ctx, u)['slots'])


def _full(ctx):
    """Slots drawn at full-page size. They are a different canvas, a different
    byte budget and a different empty-band rule from an in-flow figure, so
    every pixel check has to ask which kind it is looking at."""
    return set(ctx.spec['figures'].get('full_page_slots') or [])


def _present(ctx, u):
    return [n for n in _slots(ctx, u) if os.path.exists(_figpath(ctx, u, n, 'png'))]

def _skip_if_absent(ctx, u):
    return None if _present(ctx, u) else ok('SKIP: no figures rendered yet (P1 gate)')


@check('G01', 'golden.figures.per_unit', 'Exactly as many figure captions as the spec sets')
def g01(u, ctx):
    want = _fig(ctx, u)['per_unit']
    return expect(len(u.figures) == want, f'{len(u.figures)} captions, want {want}')

@check('G02', 'golden.figures', 'Figures numbered from 1 up, no gaps, no duplicates')
def g02(u, ctx):
    nums = sorted(n for _, n, _ in u.figures)
    units = {m for m, _, _ in u.figures}
    want = _slots(ctx, u)
    return expect(nums == want and units == {u.num},
                  f'numbers {nums} want {want}; unit prefixes {units}')

@check('G03', 'golden.figures.slots', 'Every figure sits in the part the spec gives it')
def g03(u, ctx):
    want = {k: v['part'] for k, v in _fig(ctx, u)['slots'].items()
            if v['part'] != 'Unit'}
    got = {}
    for p in u.parts:
        for src in [p.leading] + [s.lines for s in p.subs]:
            for l in src:
                m = M.FIGCAP.match(l)
                if m:
                    got[int(m.group(2))] = p.name
    # the opener sits above the first part header, so it has no part
    opener = [k for k, v in _fig(ctx, u)['slots'].items() if v['part'] == 'Unit']
    bad = [f'{k}: {got.get(k)} want {v}' for k, v in want.items() if got.get(k) != v]
    bad += [f'{k}: opener should sit before Part 1, found in {got[k]}'
            for k in opener if k in got]
    return expect(not bad, '; '.join(bad))

@check('G04', 'golden.figures.caption_pattern', 'Caption format *Figure N.M · Text.*')
def g04(u, ctx):
    caps = [l for l in u.lines if l.startswith('*Figure')]
    bad = [c for c in caps if not M.FIGCAP.match(c)]
    want = _fig(ctx, u)['per_unit']
    return expect(len(caps) == want and not bad,
                  f'{len(caps)} captions (want {want}), malformed {bad}')

@check('G05', 'golden.figures.caption_pattern', 'Caption ends in a full stop')
def g05(u, ctx):
    bad = [c for c in u.lines if c.startswith('*Figure') and not c.rstrip().endswith('.*')]
    return expect(not bad, f'{bad}')

@check('G06', 'golden.figures.px_width', 'PNG width == 1440 px')
def g06(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    fg, full = ctx.spec['figures'], _full(ctx)
    bad = []
    for n in _present(ctx, u):
        want = fg['px_width_full_page'] if n in full else fg['px_width']
        got = _png_size(_figpath(ctx, u, n, 'png'))[0]
        if got != want:
            bad.append(f'{n}:{got} want {want}')
    return expect(not bad, f'widths {bad}')

@check('G07', 'golden.figures.px_height', 'PNG height within 320-880 px')
def g07(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    fg, full = ctx.spec['figures'], _full(ctx)
    bad = []
    for n in _present(ctx, u):
        h = _png_size(_figpath(ctx, u, n, 'png'))[1]
        if n in full:
            want = fg['px_height_full_page']
            if h != want:
                bad.append(f'{n}:{h} want exactly {want}')
        else:
            lo, hi = fg['px_height']['min'], fg['px_height']['max']
            if not lo <= h <= hi:
                bad.append(f'{n}:{h} outside {lo}-{hi}')
    return expect(not bad, f'heights {bad}')

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

def _blend_dist(px, pal):
    """Distance to the nearest segment between two palette colours. An
    antialiased edge is a blend of two of them, so it sits ON a segment."""
    best = min(math.dist(px, p) for p in pal)
    for i, a in enumerate(pal):
        for b in pal[i + 1:]:
            ab = [b[k] - a[k] for k in range(3)]
            L = sum(c * c for c in ab)
            if not L:
                continue
            t = max(0.0, min(1.0, sum((px[k] - a[k]) * ab[k] for k in range(3)) / L))
            best = min(best, math.dist(px, [a[k] + t * ab[k] for k in range(3)]))
            if best <= 1:
                return best
    return best


@check('G09', 'palette.metric', 'Off-palette pixel mass within the source-calibrated limit')
def g09(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    from PIL import Image
    pal = [tuple(int(c['hex'][i:i+2], 16) for i in (1, 3, 5)) for c in ctx.palette['colours'].values()]
    tol = ctx.palette['blend_line_tolerance_deltaE']
    limit = ctx.palette['max_offpalette_pixel_fraction']
    bad = []
    for n in _present(ctx, u):
        im = Image.open(_figpath(ctx, u, n, 'png')).convert('RGB')
        cols = im.getcolors(1 << 22) or []
        tot = sum(c for c, _ in cols)
        off = sum(c for c, px in cols if _blend_dist(px, pal) > tol)
        if off / max(1, tot) > limit:
            bad.append(f'{n}: {off/tot:.2%} off-palette (limit {limit:.1%})')
    return expect(not bad, '; '.join(bad))

@check('G10', 'golden.figures.max_bytes', 'File size within the budget for its class')
def g10(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    fg, full = ctx.spec['figures'], _full(ctx)
    bad = []
    for n in _present(ctx, u):
        lim = fg['max_bytes_full_page'] if n in full else fg['max_bytes']
        got = os.path.getsize(_figpath(ctx, u, n, 'png'))
        if got > lim:
            bad.append(f'{n}:{got//1024}KB over {lim//1024}KB')
    return expect(not bad, f'{bad}')

@check('G11', 'typography.figure_placement',
       'Placement == fit(the slot box) rounded to whole 96-DPI px')
def g11(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    fp = ctx.typo['figure_placement']
    DPI = fp['round_to_dpi']
    fg = ctx.spec['figures']
    bad = []
    full = set(fg.get('full_page_slots') or [])
    for n in _present(ctx, u):
        pw, ph, _, _ = _png_size(_figpath(ctx, u, n, 'png'))
        if n in full:
            # fill_trim: the extent IS the box, so there is no rounding to check
            b = fg['box_full_page']
            w, h = b['w'], b['h']
        else:
            b = fg.get('box_by_slot', {}).get(n) or fg['box_default']
            BW, BH = b['w'], b['h']
            # the box must itself be a whole number of 96-DPI pixels, or the
            # half-up rounding below can overflow the very box it fits into
            for side, v in (('w', BW), ('h', BH)):
                if abs(v * DPI - round(v * DPI)) > 1e-6:
                    bad.append(f'{n}: box {side}={v} is not a whole 96-DPI pixel')
            sc = min(BW / pw, BH / ph)
            w = math.floor(pw * sc * DPI + 0.5) / DPI
            h = math.floor(ph * sc * DPI + 0.5) / DPI
            if not (w <= BW + 1e-6 and h <= BH + 1e-6):
                bad.append(f'{n}: {w:.4f}x{h:.4f} exceeds box {BW}x{BH}')
        m = _meta(ctx, u, n)
        if m and 'placed_in' in m:
            if abs(m['placed_in'][0] - w) > 1e-6 or abs(m['placed_in'][1] - h) > 1e-6:
                bad.append(f'{n}: metadata {m["placed_in"]} != law {w:.4f}x{h:.4f}')
    return expect(not bad, '; '.join(bad))

@check('G12', 'golden.figures.slots', 'No figure is left dangling at the end of a section')
def g12(u, ctx):
    bad = []
    for p in u.parts:
        for src, where in [(p.leading, p.name)] + [(s.lines, s.heading) for s in p.subs]:
            idx = [i for i, l in enumerate(src) if M.FIGCAP.match(l)]
            for i in idx:
                after = [l for l in src[i + 1:] if l.strip()]
                if not after:
                    bad.append(f'{where}: figure is the last thing in the section')
                elif M.FIGCAP.match(after[0]):
                    bad.append(f'{where}: two figures with no text between them')
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
    fg, full = ctx.spec['figures'], _full(ctx)
    bad = []
    for n in _present(ctx, u):
        m = _meta(ctx, u, n)
        if not m:
            continue
        lim = (fg['max_empty_band_fraction_full_page'] if n in full
               else fg['max_empty_band_fraction'])
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
                # lexis.tokens folds the typographic apostrophe, so the body must be
                # folded the same way or every possessive reads as missing
                if len(w) > 2 and w.lower() not in body.replace('\u2019', "'"):
                    bad.append(f'{n}: "{w}" not in the unit text')
    return expect(not bad, '; '.join(sorted(set(bad))[:8]))

@check('G19', 'golden.figures.slots', 'Label-me figure has as many rules as the task has items')
def g19(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    slot = ctx.spec['figures']['label_me_slot']
    m = _meta(ctx, u, slot)
    if not m:
        return ok(f'SKIP: figure {slot} not rendered')
    sub = next((x for x in u.subs if any(f'Figure {u.num}.{slot} ' in l for l in x.lines)), None)
    mt = M.matchings(sub) if sub else None
    want = len(mt.a) if mt else 0
    got = len(m.get('leaders', []))
    return expect(got == want, f'figure {slot} has {got} rules, task has {want} items')

@check('G20', 'golden.figures.slots', 'Category-set figure has as many cards as the table has rows')
def g20(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    slot = ctx.spec['figures']['category_set_slot']
    m = _meta(ctx, u, slot)
    if not m:
        return ok(f'SKIP: figure {slot} not rendered')
    sub = next((x for x in u.subs if any(f'Figure {u.num}.{slot} ' in l for l in x.lines)), None)
    rows = len([l for l in (sub.lines if sub else []) if l.startswith('|') and l.count('|') >= 3]) - 2
    got = m.get('cards', 0)
    return expect(got >= max(rows, 1), f'figure {slot} has {got} cards, table has {max(rows,0)} rows')

@check('G21', 'golden.figures.slots', 'Process strip has an arrow between every adjacent pair')
def g21(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s: return s
    slot = ctx.spec['figures']['process_strip_slot']
    m = _meta(ctx, u, slot)
    if not m:
        return ok(f'SKIP: figure {slot} not rendered')
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


# --------------------------------------------------------------------------
# G25 and G26 read the built DOCX rather than the spec. Every other G check
# asserts the law arithmetically against the PNG, which is why three defects
# in a row could hide behind a green suite: the DOCX was not printing what
# the law said. On 2026-10-08 the covers printed 1.40 x 1.98 in on an
# 8.27 x 11.69 page, every figure fell through to box_default because pandoc
# renames media to rIdNN.png and the slot could not be parsed, and the
# box_by_slot table had therefore never been applied at all. Nothing in 230
# checks looked at a printed extent. These two do.
# --------------------------------------------------------------------------

EMU = 914400


def _docx_extents(path):
    """Every image in a DOCX as (printed_w_in, printed_h_in), in order."""
    import zipfile
    if not os.path.exists(path):
        return None
    with zipfile.ZipFile(path) as z:
        d = z.read('word/document.xml').decode('utf8')
    out = []
    for m in re.finditer(r'<w:drawing>.*?</w:drawing>', d, re.S):
        e = re.search(r'<wp:extent cx="(\d+)" cy="(\d+)"', m.group(0))
        if e:
            out.append((int(e.group(1)) / EMU, int(e.group(2)) / EMU))
    return out


def _page_in(ctx):
    pg = ctx.typo['page']['size_twips']
    return pg['w'] / 1440, pg['h'] / 1440


@check('G25', 'golden.figures.box_full_page',
       'Covers print at the full page size in the book DOCX', scope='book')
def g25(units, ctx):
    path = ctx.docx_for(None)
    ext = _docx_extents(path)
    if ext is None:
        return ok('SKIP: no book DOCX built yet')
    if not os.path.exists(os.path.join(ctx.root, 'covers', f'{ctx.book}-front.png')):
        return ok('SKIP: covers not built yet')
    PW, PH = _page_in(ctx)
    TOL = 1 / 96          # one 96-DPI pixel
    bad = []
    for label, (w, h) in (('front', ext[0]), ('back', ext[-1])):
        if abs(w - PW) > TOL or abs(h - PH) > TOL:
            bad.append(f'{label} cover prints {w:.3f}x{h:.3f} in, page is {PW:.3f}x{PH:.3f}')
    return expect(not bad, '; '.join(bad))


@check('G26', 'typography.figure_placement',
       'Every image in the DOCX prints at the size the placement law gives')
def g26(u, ctx):
    import sys as _sys
    _sys.path.insert(0, os.path.join(ctx.root, 'tools'))
    import build_docx as B
    path = ctx.docx_for(u)
    ext = _docx_extents(path)
    if ext is None:
        return ok('SKIP: no unit DOCX built yet')
    present = _present(ctx, u)
    if len(ext) != len(present):
        return fail(f'{len(ext)} images in the DOCX, {len(present)} figures rendered')
    TOL = 1 / 96 + 1e-9
    bad = []
    for n, (w, h) in zip(present, ext):
        want = B.placed(_figpath(ctx, u, n, 'png'), n)
        if abs(w - want[0]) > TOL or abs(h - want[1]) > TOL:
            bad.append(f'{n}: prints {w:.4f}x{h:.4f}, law says {want[0]:.4f}x{want[1]:.4f}')
    return expect(not bad, '; '.join(bad))


@check('G27', 'golden.unit.caption_words',
       'Figure caption words per unit within the declared allowance')
def g27(u, ctx):
    """Captions come out of K11's prose budget, so something has to bound them
    or the apparatus can grow without limit while every prose check stays
    green. Per unit rather than per part: the number of figures in each part
    is fixed by figures.slots, so a part's caption load is already structural,
    and a second per-part table would be one more thing to re-measure at every
    phase for no extra catch."""
    dense = (ctx.spec['figures'].get('dense_units') or {}).get(ctx.book) or []
    key = 'caption_words_dense' if u.num in dense else 'caption_words'
    cw = ctx.spec['unit'].get(key)
    if not cw:
        return ok('SKIP: no caption allowance declared')
    n = u.caption_words
    return expect(cw['min'] <= n <= cw['max'],
                  f'{n} caption words, want {cw["min"]}-{cw["max"]}')


@check('G28', 'golden.figures.slots', 'Figure numbers ascend in document order')
def g28(u, ctx):
    """G02 checks the SET of numbers in a unit and says nothing about their
    order, so a figure could carry the wrong number and the suite stay green
    as long as the number existed somewhere. That was tolerable while the
    numbers ran 1..14 with no gaps; after the 2026-10-08 renumber the slots
    are spread (1, 4, 7, 8, 12, ...) and a misplaced caption is far easier to
    make and no harder to miss. This is the check that proves the migration.
    """
    nums = [n for _, n, _ in u.figures]
    bad = [f'{a} then {b}' for a, b in zip(nums, nums[1:]) if b <= a]
    return expect(not bad, f'out of order: {bad}')


@check('G29', 'golden.figures.no_figure_subs',
       'Every sub-section carries a figure except the ones the spec excuses')
def g29(u, ctx):
    """The coverage law. "Much more visual" is a memory unless something counts
    the sub-sections that have no picture, and the excuse list is checked in
    BOTH directions: a sub-section the spec excuses that later gains a figure is
    a finding too, or the list quietly rots into a list of places nobody
    looked."""
    fg = _fig(ctx, u)
    if fg['per_unit'] != fg.get('dense_per_unit'):
        return ok('SKIP: unit is not on the dense layout yet')
    excused = {(e['part'], e['index'])
               for e in (ctx.spec['figures'].get('no_figure_subs') or [])}
    bad = []
    for p in u.parts:
        for i, sub in enumerate(p.subs, 1):
            has = any(M.FIGCAP.match(l) for l in sub.lines)
            if has and (p.name, i) in excused:
                bad.append(f'{p.name}.{i} {sub.heading!r} carries a figure the '
                           'spec excuses')
            elif not has and (p.name, i) not in excused:
                bad.append(f'{p.name}.{i} {sub.heading!r} has no figure')
    return expect(not bad, '; '.join(bad[:6]))


@check('G30', 'golden.figures.px_height_full_page',
       'Full-page art is 2480 x 3508 with no text inside 10 mm of the trim')
def g30(u, ctx):
    """I12 does this for the two covers. The openers need it too: a full-page
    image is printed to the page edge, so anything within the printer's cut is
    gone, and unlike an in-flow figure there is no white margin to save it."""
    s = _skip_if_absent(ctx, u)
    if s: return s
    fg, full = _fig(ctx, u), _full(ctx)
    MARGIN = round(10 / 25.4 * 300)        # 118 px at 300 DPI, as I12 uses
    bad = []
    for n in _present(ctx, u):
        if n not in full:
            continue
        pw, ph, _, _ = _png_size(_figpath(ctx, u, n, 'png'))
        if (pw, ph) != (fg['px_width_full_page'], fg['px_height_full_page']):
            bad.append(f'{n}: {pw}x{ph}, want '
                       f'{fg["px_width_full_page"]}x{fg["px_height_full_page"]}')
            continue
        for t in (_meta(ctx, u, n) or {}).get('texts', []):
            x0, y0, x1, y1 = t['bbox']
            if x0 < MARGIN or y0 < MARGIN or x1 > pw - MARGIN or y1 > ph - MARGIN:
                bad.append(f'{n}: {t["text"][:18]!r} inside the trim margin')
    return expect(not bad, '; '.join(bad[:5]))


# --- G32 --------------------------------------------------------------------
# G23 hashes the PNG against the hash recorded in its own sidecar JSON, so it
# proves the file has not been corrupted since it was written. It cannot see
# the one failure that actually happened: a change to figure CODE that was
# committed without re-rendering.
#
# `cue_cards` was changed in the A2.2 commit so its card title fits instead of
# overflowing at a fixed 34 px. The figures were not re-rendered, and slots 21
# and 33 of all twenty units -- forty figures -- sat in the repository drawn by
# the old code, with G23 green over every one of them, because each PNG still
# matched its own recorded hash. This check compares the SVG on disk against
# the SVG the CURRENT content module and figure code produce. SVG rather than
# PNG because `Fig.svg()` is pure string building and costs milliseconds,
# while cairosvg for 820 figures would cost minutes -- and rendering is
# deterministic (G23, J11), so identical SVG means identical PNG.

_FIGMOD: dict = {}
# The expected SVG for a (book, unit) is a function of the content module and
# the figure code, neither of which a mutation changes -- only the files on
# disk do. Without this cache the mutation suite re-draws 410 figures for
# every one of its 223 fixtures, which took it from eight minutes to over
# twenty.
_EXPECT: dict = {}


def _figmod(ctx, u):
    k = (ctx.book, u.num)
    if k not in _FIGMOD:
        import importlib.util
        p = os.path.join(ctx.root, 'content', ctx.book, f'u{u.num:02d}_figures.py')
        if not os.path.exists(p):
            _FIGMOD[k] = None
        else:
            spec = importlib.util.spec_from_file_location(
                f'_g32_{ctx.book}_{u.num}', p)
            mod = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(mod)
            _FIGMOD[k] = mod
    return _FIGMOD[k]


@check('G32', 'golden.figures',
       'Every figure on disk is what the current content module and figure code draw')
def g32(u, ctx):
    s = _skip_if_absent(ctx, u)
    if s:
        return s
    mod = _figmod(ctx, u)
    if mod is None:
        return fail(f'no content/{ctx.book}/u{u.num:02d}_figures.py')
    import figures as F
    full = set(_fig(ctx, u).get('full_page_slots') or [])
    key = (ctx.book, u.num)
    if key not in _EXPECT:
        e = {}
        for n, make in mod.FIGURES.items():
            f = make()
            if n not in full:
                f = F.tighten(f)
            e[n] = f.svg()
        _EXPECT[key] = e
    exp = _EXPECT[key]
    bad = []
    for n in _present(ctx, u):
        want = exp.get(n)
        if want is None:
            bad.append(f'{n}: on disk but not in the content module'); continue
        p = _figpath(ctx, u, n, 'svg')
        if not os.path.exists(p):
            bad.append(f'{n}: no SVG beside the PNG'); continue
        if open(p, encoding='utf-8').read() != want:
            bad.append(f'{n}: stale render')
    return expect(not bad, '; '.join(bad))
