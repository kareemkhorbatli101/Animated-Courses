"""English Animated — the twelve figure types (07-visual-system.md §3).

Each generator takes a plain spec dict and returns an SVG string with the
layer groups the animation layer needs. Everything is data-driven, so a unit's
figures are authored as data beside its text, not drawn by hand.
"""
import math
import ea_design as D
from ea_design import (PAPER, PAPER_DEEP, INK, INK_SOFT, PRIMARY, ACCENT, GREEN,
                       RED, GOLD, MUTED, RULE, WHITE, SHADE, FONT, MONO,
                       T_TITLE, T_HEAD, T_BODY, T_LABEL, T_CALLOUT, T_MICRO,
                       text, wrap, rect, line, circle, path, poly, group, svg,
                       person, balloon, figure_title, esc)

W = 1600  # standard figure width; height varies by type


# ── V1 · Establishing Scene ────────────────────────────────────────────────
def v1_scene(spec):
    """A wide, deep, populated environment with findable, nameable elements.

    Human figures are drawn at ~0.57 of a storey, which is the real ratio of a
    1.7 m person to a 3 m floor. Getting this wrong is what makes coursebook
    street scenes read as toys.
    """
    h = spec.get('height', 980)
    sky, ground = spec.get('sky', '#E7EFF2'), spec.get('ground', '#CDBFA8')
    gl = spec.get('ground_line', h - 210)      # pavement line
    band = h - gl                              # label band below it
    ctx, sub, det, lab = [], [], [], []
    ctx.append(rect(0, 0, W, gl, fill=sky))
    SH = spec.get('storey_h', 118)
    # Building labels sit on the sky, so they take their colour from it.
    _lum = sum(int(sky.lstrip('#')[i:i+2], 16) for i in (0, 2, 4)) / 3
    _sky_ink = PRIMARY if _lum > 120 else '#E3EAEC'

    # A distant skyline behind everything, so the sky is never a blank slab.
    # Deterministic from the title, so a figure looks the same on every build.
    if spec.get('skyline', True):
        seed = sum(ord(c) * (i + 3) for i, c in enumerate(spec.get('title', '')))
        x = -40
        k = 0
        while x < W + 40:
            k += 1
            bw = 60 + (seed * k * 7) % 150
            bh = 40 + (seed * k * 13) % int(max(60, SH * 1.9))
            ctx.append(rect(x, gl - bh, bw, bh, fill=INK, opacity=.085, stroke='none'))
            if (seed * k) % 3 == 0:                       # a roof box, now and then
                ctx.append(rect(x + bw * .25, gl - bh - 16, bw * .3, 16,
                                fill=INK, opacity=.085, stroke='none'))
            x += bw + 14 + (seed * k * 3) % 40
        ctx.append(rect(0, gl - 34, W, 34, fill=sky, opacity=.45))   # horizon haze

    ctx.append(rect(0, gl, W, band, fill=ground))
    ctx.append(rect(0, gl, W, 26, fill=INK, opacity=.07))
    ctx.append(line(0, gl, W, gl, stroke=INK, sw=2.2, opacity=.35))

    for b in spec.get('buildings', []):
        x, bw, st, col = b['x'], b['w'], b['storeys'], b.get('colour', '#D8CFC2')
        top = gl - st * SH
        ctx.append(rect(x, top, bw, st * SH, fill=col, stroke=INK, sw=2))
        ctx.append(rect(x, top - 10, bw + 8, 12, fill=col, stroke=INK, sw=2))
        if b.get('cutaway'):
            ctx.append(rect(x, top, bw, st * SH, fill=WHITE, opacity=.9))
            fl = b.get('floor_labels', [])     # given top floor first
            for i in range(st):
                y = top + i * SH
                ctx.append(line(x, y, x + bw, y, stroke=INK, sw=1.6, opacity=.55))
                if i < len(fl):
                    _bw = max(120, len(str(fl[i])) * T_MICRO * 0.56 + 24)
                    lab.append(rect(x + bw - 12 - _bw, y + SH / 2 - 15, _bw, 26,
                                    fill=WHITE, opacity=.88, rx=4))
                    lab.append(text(x + bw - 16, y + SH / 2 + 4, fl[i], size=T_MICRO,
                                    fill=INK_SOFT, weight='600', anchor='end'))
            ctx.append(path(_zig(x, top, st * SH, amp=8, step=24), stroke=ACCENT, sw=2.6, fill='none'))
        else:
            per = max(1, int(bw // 72))
            for i in range(st):
                for j in range(per):
                    wx = x + (bw - per * 48 + 14) / 2 + j * 48
                    wy = top + i * SH + 26
                    ctx.append(rect(wx, wy, 32, 46, fill='#9FB4BD', stroke=INK, sw=1, opacity=.9))
        if b.get('label'):
            lab.append(text(x + bw / 2, top - 24, b['label'], size=T_LABEL,
                            anchor='middle', weight='600', fill=_sky_ink))

    for p in spec.get('props', []):
        sub.append(_prop(p))
    for pp in spec.get('people', []):
        sub.append(person(pp['x'], pp.get('y', gl), h=pp.get('h', 68),
                          skin=pp.get('skin', 0), cloth=pp.get('cloth', 0),
                          hair=pp.get('hair', 'short'), arm=pp.get('arm', 'down'),
                          lean=pp.get('lean', 0)))

    # label band: rows packed greedily by measured width, so nothing collides
    rows = []                                   # each row is a list of (left, right)
    for nm in sorted(spec.get('names', []), key=lambda n: n['x']):
        half = len(str(nm['t'])) * T_MICRO * 0.29 + 10
        a, z = nm['x'] - half, nm['x'] + half
        row = 0
        while row < len(rows) and any(not (z < ra or a > rz) for ra, rz in rows[row]):
            row += 1
        if row == len(rows):
            rows.append([])
        rows[row].append((a, z))
        lab.append(line(nm['x'], gl + 6, nm['x'], gl + 34 + row * 30, stroke=INK_SOFT,
                        sw=1.2, opacity=.7))
        lab.append(text(nm['x'], gl + 50 + row * 30, nm['t'], size=T_MICRO,
                        anchor='middle', fill=INK_SOFT))
    for i, m in enumerate(spec.get('markers', []), 1):
        det.append(circle(m['x'], m['y'], 16, fill=WHITE, stroke=ACCENT, sw=2.6, opacity=.96))
        det.append(text(m['x'], m['y'] + 5, str(i), size=T_MICRO, anchor='middle',
                        weight='700', fill=ACCENT))
    # A scrim behind the header and the label band, so a V1 set at night still reads.
    scrim = (rect(0, 0, W, 118, fill=PAPER, opacity=.82)
             + '\n' + rect(0, gl + 2, W, band - 2, fill=PAPER, opacity=.78))
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('30_detail', '\n'.join(det)),
                      group('40_callouts', scrim + '\n' + head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


def _prop(p):
    """Small named objects for a scene: stall, van, bowser, table, sign, tree."""
    k, x, y = p['kind'], p['x'], p['y']
    s = p.get('s', 1.0)
    c = p.get('colour', MUTED)
    o = []
    if k == 'stall':
        o.append(rect(x, y - 70 * s, 180 * s, 70 * s, fill='#E4D7C3', stroke=INK, sw=1.8))
        o.append(poly([(x - 14 * s, y - 70 * s), (x + 194 * s, y - 70 * s),
                       (x + 170 * s, y - 112 * s), (x + 10 * s, y - 112 * s)],
                      fill=c, stroke=INK, sw=1.8))
        for i in range(4):
            o.append(circle(x + 30 * s + i * 40 * s, y - 84 * s, 11 * s, fill='#C7873E', stroke=INK, sw=1.2))
    elif k == 'van':
        o.append(rect(x, y - 78 * s, 190 * s, 58 * s, rx=6, fill=c, stroke=INK, sw=1.8))
        o.append(rect(x + 128 * s, y - 108 * s, 62 * s, 32 * s, rx=5, fill=c, stroke=INK, sw=1.8))
        o.append(rect(x + 136 * s, y - 102 * s, 46 * s, 22 * s, rx=3, fill='#BBD0D9', stroke=INK, sw=1))
        o.append(circle(x + 42 * s, y - 16 * s, 18 * s, fill='#33414A', stroke=INK, sw=1.6))
        o.append(circle(x + 156 * s, y - 16 * s, 18 * s, fill='#33414A', stroke=INK, sw=1.6))
    elif k == 'bowser':
        o.append(rect(x, y - 70 * s, 150 * s, 50 * s, rx=24, fill='#7E9BA6', stroke=INK, sw=1.8))
        o.append(circle(x + 34 * s, y - 12 * s, 15 * s, fill='#33414A', stroke=INK, sw=1.5))
        o.append(circle(x + 116 * s, y - 12 * s, 15 * s, fill='#33414A', stroke=INK, sw=1.5))
        o.append(path(f'M {x + 150*s} {y - 56*s} q {24*s} {4*s} {20*s} {30*s}', stroke=INK, sw=2.4))
    elif k == 'hoarding':
        o.append(rect(x, y - 150 * s, p.get('w', 260) * s, 150 * s, fill='#C4CBB8', stroke=INK, sw=2))
        for i in range(int(p.get('w', 260) / 60)):
            o.append(line(x + i * 60 * s, y - 150 * s, x + i * 60 * s, y, stroke=INK, sw=1, opacity=.35))
        if p.get('notice'):
            o.append(rect(x + 30 * s, y - 120 * s, 72 * s, 94 * s, fill=WHITE, stroke=INK, sw=1.6))
            for i in range(6):
                o.append(line(x + 38 * s, y - 104 * s + i * 13 * s, x + 94 * s,
                              y - 104 * s + i * 13 * s, stroke=INK_SOFT, sw=1.4, opacity=.6))
    elif k == 'scaffold':
        wdt = p.get('w', 180) * s
        hgt = p.get('h', 300) * s
        for i in range(int(hgt // 70) + 1):
            o.append(line(x, y - i * 70, x + wdt, y - i * 70, stroke='#9A8F7E', sw=4))
        for j in range(int(wdt // 70) + 1):
            o.append(line(x + j * 70, y, x + j * 70, y - hgt, stroke='#9A8F7E', sw=4))
    elif k == 'tree':
        o.append(rect(x - 7 * s, y - 60 * s, 14 * s, 60 * s, fill='#6B5440'))
        o.append(circle(x, y - 86 * s, 42 * s, fill='#4E7A55'))
    elif k == 'sign':
        o.append(line(x, y, x, y - 100 * s, stroke='#6E7B82', sw=6))
        o.append(rect(x - 52 * s, y - 146 * s, 104 * s, 48 * s, rx=4, fill=WHITE, stroke=INK, sw=2))
        o.append(text(x, y - 116 * s, p.get('text', ''), size=T_MICRO, anchor='middle', weight='600'))
    elif k == 'table':
        o.append(rect(x, y - 46 * s, 120 * s, 8 * s, fill='#8A6E52', stroke=INK, sw=1.4))
        o.append(line(x + 12 * s, y - 38 * s, x + 12 * s, y, stroke='#8A6E52', sw=6))
        o.append(line(x + 108 * s, y - 38 * s, x + 108 * s, y, stroke='#8A6E52', sw=6))
    elif k == 'chair':
        o.append(rect(x, y - 44 * s, 46 * s, 7 * s, fill='#8A6E52', stroke=INK, sw=1.3))
        o.append(rect(x + 38 * s, y - 92 * s, 8 * s, 52 * s, fill='#8A6E52', stroke=INK, sw=1.3))
        o.append(line(x + 5 * s, y - 37 * s, x + 5 * s, y, stroke='#8A6E52', sw=5))
        o.append(line(x + 41 * s, y - 37 * s, x + 41 * s, y, stroke='#8A6E52', sw=5))
    elif k == 'cup':
        o.append(rect(x, y - 26 * s, 26 * s, 26 * s, rx=3, fill=WHITE, stroke=INK, sw=1.5))
        o.append(path(f'M {x + 26*s} {y - 20*s} q {10*s} {6*s} 0 {12*s}', stroke=INK, sw=2))
    elif k == 'box':
        o.append(rect(x, y - 44 * s, 54 * s, 44 * s, fill='#C9A97A', stroke=INK, sw=1.6))
        o.append(line(x, y - 26 * s, x + 54 * s, y - 26 * s, stroke=INK, sw=1.2, opacity=.6))
    elif k == 'crate':
        o.append(rect(x, y - 36 * s, 86 * s, 36 * s, fill='#B9C7CC', stroke=INK, sw=1.6))
        for i in range(3):
            o.append(line(x + 6 * s, y - 30 * s + i * 11 * s, x + 80 * s, y - 30 * s + i * 11 * s,
                          stroke=INK, sw=1, opacity=.5))
    return '\n'.join(o)


# ── V2 · Cutaway ───────────────────────────────────────────────────────────
def v2_cutaway(spec):
    h = spec.get('height', 820)
    x0, y0 = 170, 120
    bw, bh = 560, h - 230
    rows = spec['floors']
    fh = bh / len(rows)
    ctx, sub, lab = [], [], []
    ctx.append(rect(x0 - 16, y0 - 16, bw + 32, bh + 32, fill=PAPER_DEEP))
    ctx.append(rect(x0, y0, bw, bh, fill=WHITE, stroke=INK, sw=2.4))
    for i, r in enumerate(rows):
        y = y0 + i * fh
        ctx.append(rect(x0, y, bw, fh, fill=r.get('fill', WHITE), stroke=INK, sw=1.6))
        sub.append(text(x0 + 20, y + 32, r['was'], size=T_LABEL, fill=INK_SOFT, style='italic'))
        sub.append(text(x0 + 20, y + 58, r['now'], size=T_BODY, fill=INK, weight='600'))
        if r.get('year'):
            sub.append(text(x0 + bw - 18, y + 32, r['year'], size=T_MICRO,
                            anchor='end', fill=ACCENT, weight='700'))
    # cut edge
    ctx.append(path(_zig(x0 + bw, y0, bh), stroke=INK, sw=2.4, fill=WHITE))
    # callouts on the right
    cx = x0 + bw + 150
    for c in spec.get('callouts', []):
        ty = y0 + c['at'] * bh
        lab.append(D.leader(x0 + bw + 6, ty, cx - 14, ty))
        body, _ = wrap(cx, ty + 5, c['text'], size=T_CALLOUT, width=30, weight='500')
        lab.append(body)
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


def _zig(x, y, h, amp=10, step=26):
    d = [f'M {x} {y}']
    n = int(h // step)
    for i in range(n):
        d.append(f'L {x + (amp if i % 2 == 0 else -amp)} {y + (i + 1) * step}')
    d.append(f'L {x} {y + h}')
    return ' '.join(d)


# ── V3 · Process Strip ─────────────────────────────────────────────────────
def v3_process(spec):
    panels = spec['panels']
    n = len(panels)
    cols = min(n, 4)
    rows_n = math.ceil(n / cols)
    pw, ph = (W - 120 - (cols - 1) * 24) / cols, 300
    h = 150 + rows_n * (ph + 70)
    ctx, sub, lab = [], [], []
    for i, p in enumerate(panels):
        r, c = divmod(i, cols)
        x = 60 + c * (pw + 24)
        y = 120 + r * (ph + 70)
        ctx.append(rect(x, y, pw, ph, fill=WHITE, stroke=RULE, sw=2, rx=6))
        ctx.append(circle(x + 26, y + 26, 16, fill=PRIMARY))
        ctx.append(text(x + 26, y + 32, str(i + 1), size=T_LABEL, anchor='middle',
                        weight='700', fill=WHITE))
        sub.append(_panel_art(p, x, y, pw, ph))
        body, _ = wrap(x + 10, y + ph + 28, p['caption'], size=T_CALLOUT,
                       width=int(pw / 8.3), weight='500')
        lab.append(body)
    # time axis
    ay = 120 + rows_n * (ph + 70) - 24
    if rows_n == 1:
        lab.append(line(60, ay + 18, W - 60, ay + 18, stroke=MUTED, sw=1.6, dash='6 6'))
        lab.append(text(60, ay + 44, spec.get('axis_start', 'first'), size=T_MICRO, fill=MUTED))
        lab.append(text(W - 60, ay + 44, spec.get('axis_end', 'last'), size=T_MICRO,
                        anchor='end', fill=MUTED))
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


def _panel_art(p, x, y, w, h):
    """Same viewpoint across panels; one thing changes per panel."""
    cx, base = x + w / 2, y + h - 48
    o = [line(x + 20, base, x + w - 20, base, stroke=INK, sw=1.6, opacity=.35)]
    for el in p.get('art', []):
        k = el['kind']
        ex = x + el.get('x', w / 2)
        ey = base - el.get('y', 0)
        if k == 'person':
            o.append(person(ex, ey, h=el.get('h', 120), skin=el.get('skin', 0),
                            cloth=el.get('cloth', 0), hair=el.get('hair', 'short'),
                            arm=el.get('arm', 'down')))
        elif k == 'block':
            o.append(rect(ex - el.get('w', 60) / 2, ey - el.get('bh', 70), el.get('w', 60),
                          el.get('bh', 70), fill=el.get('colour', MUTED), stroke=INK, sw=1.6))
        elif k == 'gap':
            o.append(rect(ex - el.get('w', 60) / 2, ey - el.get('bh', 70), el.get('w', 60),
                          el.get('bh', 70), fill='none', stroke=MUTED, sw=1.8, dash='7 5'))
        elif k == 'arrow':
            o.append(path(f'M {ex - 30} {ey} L {ex + 30} {ey}', stroke=ACCENT, sw=3))
            o.append(poly([(ex + 30, ey), (ex + 18, ey - 7), (ex + 18, ey + 7)], fill=ACCENT))
        elif k == 'doc':
            o.append(rect(ex - 34, ey - 88, 68, 88, fill=WHITE, stroke=INK, sw=1.8))
            for i in range(5):
                o.append(line(ex - 24, ey - 74 + i * 14, ex + 24, ey - 74 + i * 14,
                              stroke=INK_SOFT, sw=1.4, opacity=.6))
        elif k == 'tick':
            o.append(path(f'M {ex - 14} {ey - 10} l 10 12 l 20 -26', stroke=GREEN, sw=5))
        elif k == 'cross':
            o.append(path(f'M {ex - 13} {ey - 24} l 26 26 M {ex + 13} {ey - 24} l -26 26',
                          stroke=RED, sw=5))
        elif k == 'label':
            o.append(text(ex, ey, el['text'], size=T_LABEL, anchor='middle',
                          weight='600', fill=el.get('colour', PRIMARY)))
    return '\n'.join(o)


# ── V4 · Comparison Pair ───────────────────────────────────────────────────
def v4_compare(spec):
    h = spec.get('height', 700)
    pw = (W - 160) / 2
    ph = h - 240
    ctx, sub, lab = [], [], []
    for i, side in enumerate(['left', 'right']):
        s = spec[side]
        x = 60 + i * (pw + 40)
        y = 130
        ctx.append(rect(x, y, pw, ph, fill=WHITE, stroke=RULE, sw=2, rx=6))
        ctx.append(rect(x, y, pw, 42, fill=PRIMARY if i == 0 else ACCENT, rx=6))
        ctx.append(rect(x, y + 30, pw, 12, fill=PRIMARY if i == 0 else ACCENT))
        ctx.append(text(x + pw / 2, y + 29, s['label'], size=T_LABEL, anchor='middle',
                        weight='700', fill=WHITE))
        sub.append(_panel_art({'art': s.get('art', [])}, x, y + 42, pw, ph - 42))
    lab.append(text(W / 2, h - 66, spec.get('prompt', ''), size=T_BODY, anchor='middle',
                    fill=INK_SOFT, style='italic'))
    if spec.get('differences'):
        lab.append(text(W / 2, h - 34, f"{spec['differences']} differences — find them all",
                        size=T_LABEL, anchor='middle', weight='700', fill=ACCENT))
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


# ── V5 · Annotated Realia ──────────────────────────────────────────────────
def v5_realia(spec):
    h = spec.get('height', 980)
    dx, dy, dw = 110, 120, 820
    dh = h - 210
    ctx, sub, lab = [], [], []
    ctx.append(rect(dx + 8, dy + 10, dw, dh, fill=INK, opacity=.10))
    ctx.append(rect(dx, dy, dw, dh, fill=WHITE, stroke=INK, sw=2))
    y = dy + 40
    for row in spec['rows']:
        t = row.get('t', 'line')
        if t == 'head':
            sub.append(text(dx + 30, y + 14, row['text'], size=T_HEAD, weight='700', fill=INK))
            y += 44
        elif t == 'org':
            # the masthead band belongs at the top of the sheet; a second one is a
            # section head on a second document, and is drawn in place
            if y <= dy + 40:
                sub.append(rect(dx, dy, dw, 70, fill=PAPER_DEEP))
                sub.append(text(dx + 30, dy + 44, row['text'], size=T_HEAD, weight='700',
                                fill=PRIMARY, spacing=1.2))
                y = dy + 94
            else:
                sub.append(rect(dx + 20, y - 18, dw - 40, 44, fill=PAPER_DEEP, rx=4))
                sub.append(text(dx + 36, y + 12, row['text'], size=T_BODY, weight='700',
                                fill=PRIMARY, spacing=1.0))
                y += 60
        elif t == 'kv':
            sub.append(text(dx + 30, y, row['k'], size=T_LABEL, fill=INK_SOFT))
            sub.append(text(dx + 300, y, row['v'], size=T_LABEL, fill=INK,
                            weight='600' if row.get('bold') else '400',
                            family=MONO if row.get('mono') else FONT))
            y += 32
        elif t == 'para':
            body, used = wrap(dx + 30, y, row['text'], size=T_LABEL, width=64, fill=INK)
            sub.append(body)
            y += used + 14
        elif t == 'small':
            body, used = wrap(dx + 30, y, row['text'], size=T_MICRO, width=86, fill=INK_SOFT)
            sub.append(body)
            y += used + 10
        elif t == 'rule':
            sub.append(line(dx + 20, y, dx + dw - 20, y, stroke=RULE, sw=1.4))
            y += 22
        elif t == 'grid':
            cols = row['cols']
            cw = (dw - 60) / len(cols)
            sub.append(rect(dx + 30, y - 18, dw - 60, 30, fill=PAPER_DEEP))
            for j, c in enumerate(cols):
                sub.append(text(dx + 40 + j * cw, y + 2, c, size=T_MICRO, weight='700', fill=INK))
            y += 32
            for r in row['data']:
                for j, c in enumerate(r):
                    sub.append(text(dx + 40 + j * cw, y, str(c), size=T_MICRO,
                                    fill=INK, family=MONO))
                sub.append(line(dx + 30, y + 10, dx + dw - 30, y + 10, stroke=RULE, sw=1))
                y += 30
            y += 8
        elif t == 'sign':
            sub.append(text(dx + 30, y + 10, row['text'], size=T_BODY, fill=INK_SOFT,
                            style='italic', family=MONO))
            y += 40
    cx = dx + dw + 110
    for c in spec.get('callouts', []):
        ty = dy + c['at'] * dh
        lab.append(D.leader(dx + dw + 4, ty, cx - 16, ty))
        body, _ = wrap(cx, ty + 5, c['text'], size=T_CALLOUT, width=34, weight='500')
        lab.append(body)
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


# ── V6 · Data Visual ───────────────────────────────────────────────────────
def v6_data(spec):
    h = spec.get('height', 800)
    x0, y0, pw, ph = 170, 150, W - 420, h - 360
    kind = spec.get('kind', 'bar')
    ctx, sub, lab = [], [], []
    ctx.append(rect(x0, y0, pw, ph, fill=WHITE, stroke=RULE, sw=1.6))
    series = spec['series']
    allv = [v for s in series for v in s['values'] if v is not None]
    lo = spec.get('ymin', min(0, min(allv)))
    hi = spec.get('ymax', max(allv) * 1.12)
    labels = spec['labels']

    def py(v):
        return y0 + ph - (v - lo) / (hi - lo) * ph

    for g in range(5):
        v = lo + (hi - lo) * g / 4
        yy = py(v)
        ctx.append(line(x0, yy, x0 + pw, yy, stroke=RULE, sw=1, opacity=.8))
        ctx.append(text(x0 - 14, yy + 5, spec.get('fmt', '{:,.0f}').format(v),
                        size=T_MICRO, anchor='end', fill=INK_SOFT))
    step = pw / max(1, len(labels) - 1) if kind == 'line' else pw / len(labels)
    if kind == 'line':
        for si, s in enumerate(series):
            pts = [(x0 + i * step, py(v)) for i, v in enumerate(s['values']) if v is not None]
            d = 'M ' + ' L '.join(f'{a:.1f} {b:.1f}' for a, b in pts)
            sub.append(path(d, stroke=s.get('colour', SHADE[si % 6]), sw=3.4))
            for a, b in pts:
                sub.append(circle(a, b, 5, fill=WHITE, stroke=s.get('colour', SHADE[si % 6]), sw=2.6))
            sub.append(text(pts[-1][0] + 14, pts[-1][1] + 5, s['name'], size=T_LABEL,
                            weight='600', fill=s.get('colour', SHADE[si % 6])))
    elif kind == 'bar':
        bw = step / (len(series) + 0.8)
        for si, s in enumerate(series):
            for i, v in enumerate(s['values']):
                bx = x0 + i * step + si * bw + bw * 0.4
                sub.append(rect(bx, py(v), bw * 0.9, y0 + ph - py(v),
                                fill=s.get('colour', SHADE[si % 6])))
            lab.append(rect(x0 + pw + 40, y0 + 20 + si * 34, 18, 18, fill=s.get('colour', SHADE[si % 6])))
            lab.append(text(x0 + pw + 66, y0 + 35 + si * 34, s['name'], size=T_LABEL, fill=INK))
    elif kind == 'waterfall':
        run = 0
        for i, v in enumerate(series[0]['values']):
            bx = x0 + i * step + step * .18
            top, bot = py(run + max(0, v)), py(run + min(0, v))
            col = GREEN if v >= 0 else RED
            if i in spec.get('totals', []):
                top, bot, col = py(v), py(0), PRIMARY
                run = v
            else:
                run += v
            sub.append(rect(bx, top, step * .64, max(2, bot - top), fill=col))
            sub.append(text(bx + step * .32, top - 10, f'{v:+,.0f}' if i not in spec.get('totals', []) else f'{v:,.0f}',
                            size=T_MICRO, anchor='middle', weight='700', fill=col))
    for i, l in enumerate(labels):
        lx = x0 + i * step + (0 if kind == 'line' else step / 2)
        lab.append(text(lx, y0 + ph + 28, l, size=T_MICRO, anchor='middle', fill=INK_SOFT))
    fy = y0 + ph + 60
    if spec.get('warning'):
        wbody, wh = wrap(x0 + 16, fy + 27, spec['warning'], size=T_LABEL, width=100,
                         weight='600', fill=ACCENT)
        lab.append(rect(x0, fy, pw, wh + 22, fill='#F7E7D6', stroke=ACCENT, sw=1.4, rx=4))
        lab.append(wbody)
        fy += wh + 42
    if spec.get('note'):
        body, _ = wrap(x0, fy + 16, spec['note'], size=T_LABEL, width=92, fill=INK, style='italic')
        lab.append(body)
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


# ── V7 · Dialogue Stage ────────────────────────────────────────────────────
def v7_stage(spec):
    h = spec.get('height', 820)
    gl = h - 150
    ctx, sub, lab = [], [], []
    ctx.append(rect(0, 0, W, gl, fill=spec.get('bg', '#EAF0F2')))
    ctx.append(rect(0, gl, W, h - gl, fill='#C9BCA8'))
    ctx.append(line(0, gl, W, gl, stroke=INK, sw=2, opacity=.25))
    for p in spec.get('set', []):
        ctx.append(_prop(p))
    n = len(spec['people'])
    for i, pp in enumerate(spec['people']):
        x = pp.get('x', W / (n + 1) * (i + 1))
        sub.append(person(x, gl + 20, h=pp.get('h', 230), skin=pp.get('skin', 0),
                          cloth=pp.get('cloth', i), hair=pp.get('hair', 'short'),
                          arm=pp.get('arm', 'down'), lean=pp.get('lean', 0),
                          facing=pp.get('facing', 'front'),
                          label=pp.get('label'), role=pp.get('role')))
        if pp.get('says'):
            bw = pp.get('bw', 330)
            lines = pp['says'] if isinstance(pp['says'], list) else [pp['says']]
            b, bh = balloon(x - bw / 2, 140, bw, lines, tail_to=(x, gl - 215), kind='speech')
            lab.append(b)
        if pp.get('thinks'):
            bw = pp.get('tw', 300)
            lines = pp['thinks'] if isinstance(pp['thinks'], list) else [pp['thinks']]
            b, bh = balloon(x - bw / 2, 300, bw, lines, tail_to=(x + 40, gl - 200), kind='thought')
            lab.append(b)
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


# ── V8 · Map / Network ─────────────────────────────────────────────────────
def v8_map(spec):
    h = spec.get('height', 760)
    ctx, sub, lab = [], [], []
    if spec.get('kind') == 'plan':
        x0, y0 = 90, 180
        pw = W - 300
        plots = spec['plots']
        tot = sum(p['w'] for p in plots)
        x = x0
        for p in plots:
            w = pw * p['w'] / tot
            ctx.append(rect(x, y0, w, 220, fill=p.get('now_fill', PAPER_DEEP),
                            stroke=INK, sw=2))
            ctx.append(rect(x, y0, w, 220, fill='none', stroke=p.get('then_stroke', MUTED),
                            sw=2.6, dash='8 6'))
            body, _ = wrap(x + 10, y0 + 36, p['now'], size=T_CALLOUT,
                           width=max(8, int(w / 8)), weight='700', fill=PRIMARY)
            sub.append(body)
            body2, _ = wrap(x + 10, y0 + 170, 'was: ' + p['then'], size=T_MICRO,
                            width=max(10, int(w / 6.6)), fill=INK_SOFT, style='italic')
            sub.append(body2)
            if p.get('unchanged'):
                sub.append(rect(x + 3, y0 + 3, w - 6, 214, fill='none', stroke=ACCENT, sw=3))
            x += w
        ctx.append(line(x0, y0 + 250, x0 + pw, y0 + 250, stroke=INK, sw=2))
        ctx.append(text(x0, y0 + 286, spec.get('street', 'the street'), size=T_LABEL, fill=INK_SOFT))
        sc = spec.get('scale')
        if sc:
            lab.append(line(x0, h - 90, x0 + sc['px'], h - 90, stroke=INK, sw=3))
            lab.append(line(x0, h - 98, x0, h - 82, stroke=INK, sw=3))
            lab.append(line(x0 + sc['px'], h - 98, x0 + sc['px'], h - 82, stroke=INK, sw=3))
            lab.append(text(x0 + sc['px'] / 2, h - 62, sc['label'], size=T_MICRO,
                            anchor='middle', fill=INK_SOFT))
    else:
        nodes = spec['nodes']
        for e in spec.get('edges', []):
            a, b = nodes[e['a']], nodes[e['b']]
            ctx.append(line(a['x'], a['y'], b['x'], b['y'], stroke=e.get('colour', MUTED),
                            sw=e.get('sw', 2), dash=e.get('dash')))
            mx, my = (a['x'] + b['x']) / 2, (a['y'] + b['y']) / 2
            if e.get('label'):
                lab.append(rect(mx - 58, my - 15, 116, 26, fill=PAPER, rx=12))
                lab.append(text(mx, my + 4, e['label'], size=T_MICRO, anchor='middle',
                                fill=INK_SOFT, style='italic'))
        for k, nd in nodes.items():
            sub.append(circle(nd['x'], nd['y'], nd.get('r', 46), fill=WHITE,
                              stroke=nd.get('colour', PRIMARY), sw=3))
            sub.append(text(nd['x'], nd['y'] + 5, nd['short'], size=T_LABEL,
                            anchor='middle', weight='700', fill=nd.get('colour', PRIMARY)))
            sub.append(text(nd['x'], nd['y'] + nd.get('r', 46) + 26, nd['name'],
                            size=T_CALLOUT, anchor='middle', weight='600', fill=INK))
            if nd.get('sub'):
                sub.append(text(nd['x'], nd['y'] + nd.get('r', 46) + 46, nd['sub'],
                                size=T_MICRO, anchor='middle', fill=INK_SOFT))
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


# ── V9 · Grammar Visual ────────────────────────────────────────────────────
# A fixed vocabulary of nine shapes, used identically in all 14 books, so that
# a learner who reads the probability ladder at A2 reads it instantly at C1.
def v9_grammar(spec):
    kind = spec.get('kind', 'timeline')
    h = spec.get('height', 620)
    ctx, sub, lab = [], [], []
    x0, x1 = 160, W - 220

    if kind == 'timeline':
        ty = spec.get('axis_y', h - 190)
        now = spec.get('now', 0.80)
        nx = x0 + (x1 - x0) * now
        ctx.append(line(x0, ty, x1, ty, stroke=INK, sw=2.6))
        ctx.append(poly([(x1, ty), (x1 - 16, ty - 8), (x1 - 16, ty + 8)], fill=INK))
        ctx.append(line(nx, ty - 160, nx, ty + 34, stroke=ACCENT, sw=3, dash='8 6'))
        ctx.append(text(nx, ty + 58, 'NOW', size=T_LABEL, anchor='middle',
                        weight='700', fill=ACCENT, spacing=2))
        for b in spec['bands']:
            by = ty - b.get('lane', 1) * 54
            a = x0 + (x1 - x0) * b['from']
            z = x0 + (x1 - x0) * b.get('to', b['from'])
            t = b['type']
            if t == 'event':                       # a solid dot — one completed event
                sub.append(circle(a, by, 11, fill=PRIMARY))
                sub.append(line(a, by, a, ty, stroke=PRIMARY, sw=1.4, dash='3 4'))
            elif t == 'span':                      # a lens bracket — the ongoing background
                sub.append(path(f'M {a} {by - 20} Q {(a+z)/2} {by - 42} {z} {by - 20}',
                                stroke=GREEN, sw=3))
                sub.append(path(f'M {a} {by + 20} Q {(a+z)/2} {by + 42} {z} {by + 20}',
                                stroke=GREEN, sw=3))
                sub.append(line(a, by - 20, a, by + 20, stroke=GREEN, sw=3))
                sub.append(line(z, by - 20, z, by + 20, stroke=GREEN, sw=3))
            elif t == 'before':                    # dotted span to a hard boundary
                sub.append(line(a, by, z, by, stroke=GOLD, sw=3.4, dash='9 6'))
                sub.append(line(z, by - 22, z, by + 22, stroke=GOLD, sw=4))
            elif t == 'reach':                     # a period reaching to now
                sub.append(line(a, by, nx, by, stroke=PRIMARY, sw=3.4))
                sub.append(circle(a, by, 7, fill=WHITE, stroke=PRIMARY, sw=3))
                sub.append(circle(nx, by, 7, fill=PRIMARY))
            elif t == 'future':
                sub.append(line(a, by, z, by, stroke=SHADE[3], sw=3.4, dash='2 7'))
                sub.append(poly([(z, by), (z - 13, by - 7), (z - 13, by + 7)], fill=SHADE[3]))
            loff = {'event': 30, 'span': 60, 'before': 26, 'reach': 26, 'future': 26}[t]
            lab.append(text(a, by - loff - 22, b['label'],
                            size=T_CALLOUT, weight='600',
                            fill={'event': PRIMARY, 'span': GREEN, 'before': GOLD,
                                  'reach': PRIMARY, 'future': SHADE[3]}[t]))
            if b.get('example'):
                lab.append(text(a, by - loff, b['example'],
                                size=T_MICRO, fill=INK_SOFT, style='italic'))

    elif kind == 'ladder':                         # vertical probability ladder
        lx = W / 2 - 160
        steps = spec['steps']
        top, bot = 150, h - 130
        for i, s in enumerate(steps):
            y = top + (bot - top) * i / max(1, len(steps) - 1)
            ctx.append(line(lx - 34, y, lx + 34, y, stroke=INK, sw=2.4))
            sub.append(text(lx + 58, y + 6, s['form'], size=T_BODY, weight='700',
                            fill=PRIMARY, family=MONO))
            sub.append(text(lx + 300, y + 6, s['meaning'], size=T_LABEL, fill=INK))
        ctx.append(line(lx, top - 20, lx, bot + 20, stroke=MUTED, sw=3))
        lab.append(text(lx - 50, top - 28, spec.get('top_label', 'certain'), size=T_LABEL,
                        anchor='end', weight='700', fill=GREEN))
        lab.append(text(lx - 50, bot + 36, spec.get('bottom_label', 'impossible'), size=T_LABEL,
                        anchor='end', weight='700', fill=RED))

    elif kind == 'branch':                         # two-track conditional
        sy = h / 2
        ctx.append(circle(x0, sy, 12, fill=INK))
        ctx.append(text(x0, sy + 42, spec.get('root', 'if…'), size=T_LABEL,
                        anchor='middle', weight='700', fill=INK))
        xe = x0 + (x1 - x0) * 0.46          # branches stop early; the words get the right half
        for i, br in enumerate(spec['branches']):
            ey = 160 + i * ((h - 300) / max(1, len(spec['branches']) - 1))
            col = br.get('colour', SHADE[i % 6])
            sub.append(path(f'M {x0} {sy} C {(x0+xe)/2} {sy} {(x0+xe)/2} {ey} {xe} {ey}',
                            stroke=col, sw=3.4, dash=br.get('dash')))
            sub.append(poly([(xe, ey), (xe - 16, ey - 8), (xe - 16, ey + 8)], fill=col))
            lab.append(text(xe + 18, ey - 8, br['label'], size=T_CALLOUT, weight='700', fill=col))
            lab.append(wrap(xe + 18, ey + 18, br['example'], size=T_MICRO, width=52,
                            fill=INK_SOFT, style='italic')[0])

    elif kind == 'scope':                          # a bracket over part of a sentence
        sy = h / 2
        words = spec['words']
        gap = (x1 - x0) / max(1, len(words))
        for i, w in enumerate(words):
            wx = x0 + i * gap + gap / 2
            sub.append(text(wx, sy, w, size=T_HEAD, anchor='middle',
                            weight='700' if i in spec.get('focus', []) else '400',
                            fill=PRIMARY if i in spec.get('focus', []) else INK))
        # lay the lanes out from the tallest wrapped label in the lane above
        lanes = sorted({br.get('lane', 0) for br in spec['brackets']})
        lane_y, cur = {}, sy + 34
        for ln in lanes:
            lane_y[ln] = cur
            tallest = 1
            for br in spec['brackets']:
                if br.get('lane', 0) != ln:
                    continue
                span = (br['to'] + 1 - br['from']) * gap - 12
                wch = max(20, int(span / (T_CALLOUT * 0.56)))
                tallest = max(tallest, -(-len(str(br['label'])) // wch))
            cur += 52 + (tallest - 1) * T_CALLOUT * 1.4
        for br in spec['brackets']:
            a = x0 + br['from'] * gap + 6
            z = x0 + (br['to'] + 1) * gap - 6
            by = lane_y[br.get('lane', 0)]
            col = br.get('colour', ACCENT)
            sub.append(path(f'M {a} {by} L {a} {by + 14} L {z} {by + 14} L {z} {by}',
                            stroke=col, sw=2.6))
            wch = max(20, int((z - a) / (T_CALLOUT * 0.56)))
            lab.append(wrap((a + z) / 2, by + 38, br['label'], size=T_CALLOUT, width=wch,
                            lh=1.4, anchor='middle', weight='600', fill=col)[0])

    elif kind == 'weight':                         # end-weight / information structure
        sy = h / 2 - 30
        parts = spec['parts']
        tot = sum(p['w'] for p in parts)
        x = x0
        for i, p in enumerate(parts):
            pw = (x1 - x0) * p['w'] / tot
            sub.append(rect(x, sy - 34, pw - 6, 68, fill=p.get('colour', SHADE[i % 6]), rx=5))
            sub.append(text(x + pw / 2 - 3, sy + 7, p['text'], size=T_LABEL,
                            anchor='middle', weight='700', fill=WHITE))
            lab.append(text(x + pw / 2 - 3, sy + 62, p['role'], size=T_MICRO,
                            anchor='middle', fill=INK_SOFT))
            x += pw
        if spec.get('note'):
            lab.append(wrap(x0, sy + 108, spec['note'], size=T_LABEL, width=96, lh=1.45,
                            fill=INK, style='italic')[0])

    elif kind == 'mirror':                         # active / passive, same event
        side_labels = spec.get('labels', ['ACTIVE', 'PASSIVE'])
        for i, side in enumerate(['active', 'passive']):
            s = spec[side]
            y = 170 + i * 200
            lab.append(text(x0 - 20, y + 8, side_labels[i], size=T_MICRO, anchor='end',
                            weight='700', fill=MUTED, spacing=1.5))
            parts = s['parts']
            tot = sum(p['w'] for p in parts)
            x = x0
            for j, p in enumerate(parts):
                pw = (x1 - x0) * p['w'] / tot
                col = {'agent': ACCENT, 'action': PRIMARY, 'affected': GREEN,
                       'hidden': MUTED}[p['role']]
                if p['role'] == 'hidden':
                    sub.append(rect(x, y - 26, pw - 6, 52, fill='none', stroke=col,
                                    sw=2, dash='7 5', rx=5))
                    sub.append(text(x + pw / 2 - 3, y + 7, p['text'], size=T_LABEL,
                                    anchor='middle', fill=col, style='italic'))
                else:
                    sub.append(rect(x, y - 26, pw - 6, 52, fill=col, rx=5))
                    sub.append(text(x + pw / 2 - 3, y + 7, p['text'], size=T_LABEL,
                                    anchor='middle', weight='700', fill=WHITE))
                x += pw
        lab.append(text(W / 2, 170 + 108,
                        spec.get('between', '↕ same event, different first word'),
                        size=T_LABEL, anchor='middle', fill=INK_SOFT, style='italic'))

    if spec.get('rule'):
        _probe, bh = wrap(0, 0, spec['rule'], size=T_LABEL, width=92, fill=INK, weight='500')
        top = h - 40 - (bh + 34)                   # sit the box on the bottom margin
        lab.append(rect(160, top, W - 320, bh + 34, fill=PAPER_DEEP, rx=6))
        lab.append(wrap(184, top + 24 + T_LABEL * 0.2, spec['rule'], size=T_LABEL, width=92,
                        fill=INK, weight='500')[0])
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


# ── V10 · Phonetics ────────────────────────────────────────────────────────
def v10_phon(spec):
    kind = spec.get('kind', 'elision')
    h = spec.get('height', 620)
    ctx, sub, lab = [], [], []
    if kind == 'mouth':
        for i, m in enumerate(spec['sounds']):
            cx = W / 2 - 330 + i * 660
            cy = 330
            ctx.append(circle(cx, cy, 170, fill=WHITE, stroke=RULE, sw=2))
            sub.append(path(f'M {cx - 130} {cy + 90} Q {cx - 40} {cy + 118} {cx + 110} {cy + 70}',
                            stroke='#C98E8E', sw=10))
            sub.append(path(f'M {cx - 130} {cy - 70} Q {cx - 30} {cy - 100} {cx + 110} {cy - 56}',
                            stroke='#C98E8E', sw=10))
            tongue = m['tongue']
            ty = cy + 60 - tongue['high'] * 70
            tx = cx - 60 + tongue['front'] * 110
            sub.append(path(f'M {cx - 120} {cy + 72} Q {tx} {ty} {cx + 86} {cy + 52}',
                            stroke='#B8625E', sw=16, fill='none'))
            lips = m.get('lips', 'neutral')
            lw = {'spread': 86, 'neutral': 56, 'round': 30}[lips]
            sub.append(rect(cx - 150, cy - 18, 14, lw, rx=6, fill='#C98E8E'))
            lab.append(text(cx, cy + 215, m['ipa'], size=T_TITLE, anchor='middle',
                            weight='700', fill=PRIMARY, family=MONO))
            lab.append(text(cx, cy + 250, m['desc'], size=T_LABEL, anchor='middle', fill=INK_SOFT))
            lab.append(text(cx, cy + 282, m['examples'], size=T_LABEL, anchor='middle',
                            weight='600', fill=INK))
            bar = {'short': 48, 'long': 150}[m.get('length', 'short')]
            lab.append(rect(cx - bar / 2, cy + 300, bar, 14, rx=7, fill=ACCENT))
    elif kind == 'elision':
        for i, e in enumerate(spec['pairs']):
            y = 150 + i * 86
            sub.append(text(190, y, e['written'], size=T_HEAD, weight='600', fill=INK, family=MONO))
            sub.append(text(760, y, '→', size=T_HEAD, fill=MUTED))
            x = 840
            for ch in e['spoken']:
                drop = ch in e.get('dropped', '')
                sub.append(text(x, y, ch, size=T_HEAD,
                                fill=MUTED if drop else PRIMARY,
                                opacity=0.22 if drop else 1.0,
                                weight='400' if drop else '700', family=MONO))
                x += 20
            lab.append(wrap(W - 240, y - 6, e['note'], size=T_CALLOUT, width=26, lh=1.35,
                            fill=INK_SOFT, style='italic')[0])
            ctx.append(line(170, y + 24, W - 170, y + 24, stroke=RULE, sw=1))
    elif kind == 'pitch':
        for i, c in enumerate(spec['contours']):
            y0 = 170 + i * 180
            ctx.append(line(200, y0 + 60, W - 240, y0 + 60, stroke=RULE, sw=1.4, dash='5 5'))
            pts = c['points']
            n = len(pts)
            d = 'M ' + ' L '.join(
                f'{200 + (W - 440) * j / (n - 1):.0f} '
                f'{y0 + 60 - max(-1.0, min(1.0, p)) * 52:.0f}'
                for j, p in enumerate(pts))
            sub.append(path(d, stroke=ACCENT, sw=4))
            sub.append(text(200, y0 - 6, c['text'], size=T_BODY, weight='600', fill=INK))
            lab.append(text(W - 230, y0 - 6, c['meaning'], size=T_CALLOUT,
                            anchor='end', fill=PRIMARY, weight='600'))
    elif kind == 'stress':
        for i, s in enumerate(spec['items']):
            y = 170 + i * 88
            sylls = s['syllables']
            x = 240
            for j, syl in enumerate(sylls):
                strong = j in s['strong']
                sub.append(circle(x, y - 26, 16 if strong else 8,
                                  fill=PRIMARY if strong else MUTED))
                sub.append(text(x, y + 20, syl, size=T_LABEL if strong else T_MICRO,
                                anchor='middle', weight='700' if strong else '400',
                                fill=INK if strong else INK_SOFT))
                x += 118
            lab.append(text(W - 260, y, s.get('note', ''), size=T_CALLOUT,
                            anchor='end', fill=INK_SOFT, style='italic'))
    elif kind == 'groups':                         # one spelling, several sounds
        gs = spec['groups']
        gw = (W - 200) / len(gs)
        for i, g in enumerate(gs):
            x = 100 + i * gw
            col = g.get('colour', SHADE[i % 6])
            ctx.append(rect(x + 12, 130, gw - 24, h - 240, fill=WHITE, stroke=RULE, sw=2, rx=8))
            ctx.append(rect(x + 12, 130, gw - 24, 64, fill=col, rx=8))
            sub.append(text(x + gw / 2, 174, g['ipa'], size=T_TITLE, anchor='middle',
                            weight='700', fill=WHITE, family=MONO))
            cw = max(16, int((gw - 70) / (T_CALLOUT * 0.56)))
            lab.append(wrap(x + gw / 2, 228, g['rule'], size=T_CALLOUT, width=cw,
                            anchor='middle', weight='600', fill=col)[0])
            y = 310
            for wd in g['words']:
                sub.append(text(x + gw / 2, y, wd, size=T_BODY, anchor='middle',
                                weight='600', fill=INK, family=MONO))
                y += T_BODY * 1.9
            if g.get('before'):
                ctx.append(line(x + 40, h - 168, x + gw - 40, h - 168, stroke=RULE, sw=1))
                lab.append(wrap(x + gw / 2, h - 142, g['before'], size=T_MICRO, width=cw + 4,
                                anchor='middle', fill=INK_SOFT, style='italic')[0])
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


# ── V11 · Error Autopsy ────────────────────────────────────────────────────
def v11_error(spec):
    h = spec.get('height', 620)
    ctx, sub, lab = [], [], []
    pw = (W - 200) / 2
    cw = int(pw / 8)                       # characters that fit across a panel
    # Size the panels and the band to the text they actually have to hold.
    why_lines = max(len(wrap(0, 0, spec[k]['why'], size=T_CALLOUT, width=cw)[0].split('\n'))
                    for k in ('wrong', 'right'))
    mis_lines = len(wrap(0, 0, spec['misconception'], size=T_LABEL, width=104)[0].split('\n'))
    band_h = 44 + (mis_lines + 1) * T_LABEL * 1.45
    why_h = why_lines * T_CALLOUT * 1.45
    panel_bottom = h - band_h - 40
    panel_h = panel_bottom - 120
    why_y = panel_bottom - why_h - 4
    for i, (key, col, mark) in enumerate([('wrong', RED, '✗'), ('right', GREEN, '✓')]):
        s = spec[key]
        x = 80 + i * (pw + 40)
        ctx.append(rect(x, 120, pw, panel_h, fill=WHITE, stroke=col, sw=2.6, rx=8))
        ctx.append(circle(x + 36, 158, 20, fill=col))
        ctx.append(text(x + 36, 166, mark, size=T_HEAD, anchor='middle', weight='700', fill=WHITE))
        sub.append(text(x + 72, 166, s['sentence'], size=T_BODY, weight='600', fill=INK))
        # the visual mis-fit: an arrow on the wrong or right side of a boundary
        ay = 270
        bx = x + pw * s.get('boundary', 0.5)
        sub.append(line(bx, ay - 50, bx, ay + 70, stroke=GOLD, sw=4))
        sub.append(text(bx, ay + 96, s.get('boundary_label', 'the story starts'),
                        size=T_MICRO, anchor='middle', fill=GOLD, weight='700'))
        ex = x + pw * s['event']
        sub.append(circle(ex, ay, 12, fill=col))
        sub.append(path(f'M {ex} {ay} L {bx + (28 if s["event"] > s.get("boundary",0.5) else -28)} {ay}',
                        stroke=col, sw=3))
        sub.append(text(ex, ay - 30, s['event_label'], size=T_CALLOUT, anchor='middle',
                        weight='600', fill=col))
        body, _ = wrap(x + 24, why_y, s['why'], size=T_CALLOUT, width=cw, fill=INK)
        sub.append(body)
    by = h - band_h - 8
    lab.append(rect(80, by, W - 160, band_h, fill='#F7E7D6', stroke=ACCENT, sw=1.6, rx=6))
    lab.append(text(104, by + 26, 'What the writer thought:', size=T_LABEL, weight='700',
                    fill=ACCENT))
    body, _ = wrap(104, by + 26 + T_LABEL * 1.45, spec['misconception'], size=T_LABEL,
                   width=104, fill=INK)
    lab.append(body)
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


# ── V12 · Synthesis Infographic ────────────────────────────────────────────
def v12_synth(spec):
    bands = spec['bands']
    h = spec.get('height', 240 + len(bands) * 150)
    ctx, sub, lab = [], [], []
    x0, x1 = 150, W - 150
    span = spec.get('span', ['start', 'end'])
    n_ticks = spec.get('ticks', 6)
    y = 130
    for b in bands:
        ctx.append(rect(x0 - 110, y, 104, 120, fill=PAPER_DEEP, rx=5))
        body, _ = wrap(x0 - 98, y + 34, b['name'], size=T_CALLOUT, width=13,
                       weight='700', fill=PRIMARY)
        ctx.append(body)
        ctx.append(line(x0, y + 120, x1, y + 120, stroke=RULE, sw=1.4))
        t = b['type']
        if t == 'events':
            for e in b['items']:
                ex = x0 + (x1 - x0) * e['at']
                sub.append(circle(ex, y + 60, 10, fill=e.get('colour', PRIMARY)))
                sub.append(line(ex, y + 60, ex, y + 120, stroke=e.get('colour', PRIMARY),
                                sw=1.4, dash='3 4'))
                lab.append(text(ex, y + 36, e['label'], size=T_MICRO, anchor='middle',
                                fill=INK, weight='600'))
        elif t == 'bars':
            # bars may be nested (a subset drawn over a total); keep the labels
            # off each other by pushing a colliding one to the bar's right end
            taken = []
            for e in b['items']:
                ex = x0 + (x1 - x0) * e['from']
                ez = x0 + (x1 - x0) * e['to']
                sub.append(rect(ex, y + 36, max(6, ez - ex), 50,
                                fill=e.get('colour', GREEN), rx=4, opacity=.9))
                w = len(str(e['label'])) * T_MICRO * 0.56
                lx, anchor = ex + 10, 'start'
                if any(lx < b2 and a2 < lx + w for a2, b2 in taken):
                    lx, anchor = ez - 10, 'end'
                    if any(lx - w < b2 and a2 < lx for a2, b2 in taken):
                        lx, anchor = ez + 12, 'start'
                a2 = lx if anchor == 'start' else lx - w
                taken.append((a2, a2 + w))
                lab.append(text(lx, y + 68, e['label'], size=T_MICRO,
                                fill=WHITE if anchor != 'start' or lx < ez else INK,
                                anchor=anchor, weight='700'))
        elif t == 'line':
            pts = b['points']
            lo, hi = min(p[1] for p in pts), max(p[1] for p in pts)
            d = 'M ' + ' L '.join(
                f'{x0 + (x1-x0)*p[0]:.0f} {y + 110 - (p[1]-lo)/(hi-lo+1e-9)*86:.0f}' for p in pts)
            sub.append(path(d, stroke=ACCENT, sw=3.4))
            for p in pts:
                sub.append(circle(x0 + (x1 - x0) * p[0], y + 110 - (p[1] - lo) / (hi - lo + 1e-9) * 86,
                                  4.5, fill=WHITE, stroke=ACCENT, sw=2.4))
            lab.append(text(x1 + 6, y + 110 - (pts[-1][1] - lo) / (hi - lo + 1e-9) * 86 + 4,
                            b.get('end_label', ''), size=T_MICRO, fill=ACCENT, weight='700'))
        elif t == 'flags':
            for e in b['items']:
                ex = x0 + (x1 - x0) * e['at']
                sub.append(line(ex, y + 36, ex, y + 104, stroke=INK_SOFT, sw=2))
                sub.append(poly([(ex, y + 36), (ex + 52, y + 48), (ex, y + 60)],
                                fill=e.get('colour', GOLD)))
                # keep the label inside the plate: wrap it, and flip it left of the
                # pole when there is not room to the right
                room = x1 - ex - 12
                flip = room < 240
                cw = max(18, int((room if not flip else ex - x0 - 12) / (T_MICRO * 0.56)))
                lab.append(wrap(ex + (-6 if flip else 6), y + 86, e['label'], size=T_MICRO,
                                width=min(cw, 60), lh=1.35,
                                anchor='end' if flip else 'start', fill=INK_SOFT)[0])
        y += 150
    for i in range(n_ticks):
        tx = x0 + (x1 - x0) * i / (n_ticks - 1)
        lab.append(line(tx, y - 18, tx, y - 4, stroke=MUTED, sw=1.6))
        lab.append(text(tx, y + 20, spec['tick_labels'][i], size=T_MICRO,
                        anchor='middle', fill=INK_SOFT))
    head = figure_title(W, spec['title'], spec.get('sub'))
    return svg(W, h, [group('10_context', '\n'.join(ctx)),
                      group('20_subject', '\n'.join(sub)),
                      group('40_callouts', head + '\n' + '\n'.join(lab))],
               title=spec['title'], desc=spec.get('alt', ''))


RENDER = {'V1': v1_scene, 'V2': v2_cutaway, 'V3': v3_process, 'V4': v4_compare,
          'V5': v5_realia, 'V6': v6_data, 'V7': v7_stage, 'V8': v8_map,
          'V9': v9_grammar, 'V10': v10_phon, 'V11': v11_error, 'V12': v12_synth}


def render(spec):
    return RENDER[spec['type']](spec)
