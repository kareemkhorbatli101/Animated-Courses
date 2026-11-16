# -*- coding: utf-8 -*-
"""Task 1 visuals, generated from a data specification rather than drawn.

Every chart here takes numbers and returns a figure. Three things follow, and
they are the whole argument for doing it this way:

  * the model answer is written from the same spec as the picture, so the
    prose and the figure cannot disagree - a defect that is endemic in
    published IELTS material;
  * every label goes through the measured text-fitting layer, so gate 6
    covers the figures as well as the prose;
  * a chart can be re-levelled by changing the data, not redrawn.

`facts()` on each spec returns the numbers an answer must account for, which
is what the coverage gate checks a model answer against.
"""
from _base import (render, T, R, C, L, P, TFIT, TBLOCK, tw, W,
                   PAPER, SOFT, INDIGO, INDIGO_D, PERI, BLUE, AMBER, TEAL,
                   PLUM, GREEN, RED, INK, GREY, GREY_L, RULE)

SERIES_COLOURS = [BLUE, AMBER, TEAL, PLUM, GREEN, RED]
_ML, _MR, _MT = 92, 36, 76          # plot margins


def _nice(hi, lo=0.0):
    """A round axis maximum and a step that divides it tidily."""
    import math
    span = float(hi - lo) or 1.0
    raw = span / 5.0
    mag = 10 ** math.floor(math.log10(raw))
    for m in (1, 2, 2.5, 5, 10):
        if raw <= m * mag:
            step = m * mag
            break
    top = math.ceil(hi / step) * step
    bot = math.floor(lo / step) * step
    return bot, top, step


def _fmt(v):
    if abs(v - round(v)) < 1e-9:
        return '%d' % round(v)
    return ('%.1f' % v).rstrip('0').rstrip('.')


def _axes(g, x0, y0, x1, y1, bot, top, step, ylab):
    """Left axis with gridlines, baseline, and a y-axis caption.

    Where the scale runs below zero the heavy rule is drawn at zero rather
    than at the foot of the plot, so that a bar or a point below the line is
    read as a fall and not as a short column.
    """
    n = int(round((top - bot) / step))
    for i in range(n + 1):
        v = bot + i * step
        y = y1 - (v - bot) / (top - bot) * (y1 - y0)
        heavy = (abs(v) < 1e-9) if bot < 0 else (i == 0)
        g.append(L(x0, y, x1, y, GREY_L if heavy else RULE, 2 if heavy else 1))
        g.append(TFIT(x0 - 10, y + 6, _fmt(v), 16, _ML - 24, GREY, anchor='end'))
    if ylab:
        g.append(TFIT(x0 - 10, y0 - 22, ylab, 15, _ML + 150, GREY, anchor='start'))


def _legend(g, y, names, cols, box=14):
    """A centred legend row; returns the height it used."""
    gap, items = 26, []
    for nm, c in zip(names, cols):
        items.append((nm, c, box + 8 + tw(nm, 16)))
    total = sum(w for _, _, w in items) + gap * (len(items) - 1)
    x = (W - total) / 2.0
    for nm, c, w in items:
        g.append(R(x, y - box + 2, box, box, c, rx=3))
        g.append(T(x + box + 8, y, nm, 16, INK, anchor='start'))
        x += w + gap
    return 26


def line_graph(title, xlabels, series, ylab='', sub=''):
    """series = [(name, [values...]), ...] - one value per x label."""
    h = 470
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, title, 23, W - 80, INDIGO, bold=True, anchor='middle'))
    if sub:
        g.append(TFIT(W / 2, 60, sub, 16, W - 120, GREY, anchor='middle'))
    y0, y1 = _MT + (14 if sub else 0), h - 96
    x0, x1 = _ML, W - _MR
    vals = [v for _, vs in series for v in vs]
    bot, top, step = _nice(max(vals), min(min(vals), 0))
    _axes(g, x0, y0, x1, y1, bot, top, step, ylab)
    n = len(xlabels)
    dx = (x1 - x0) / float(max(n - 1, 1))
    for i, lab in enumerate(xlabels):
        x = x0 + i * dx
        g.append(TFIT(x, y1 + 26, str(lab), 16, dx + 24, GREY, anchor='middle'))
    for si, (nm, vs) in enumerate(series):
        col = SERIES_COLOURS[si % len(SERIES_COLOURS)]
        pts = []
        for i, v in enumerate(vs):
            x = x0 + i * dx
            y = y1 - (v - bot) / (top - bot) * (y1 - y0)
            pts.append((x, y))
        d = 'M%g %g ' % pts[0] + ' '.join('L%g %g' % p for p in pts[1:])
        g.append(P(d, 'none', col, 3.2))
        for x, y in pts:
            g.append(C(x, y, 5, PAPER, col, 2.4))
    _legend(g, h - 34, [nm for nm, _ in series],
            [SERIES_COLOURS[i % len(SERIES_COLOURS)] for i in range(len(series))])
    return render(''.join(g), W, h, PAPER)


def bar_chart(title, cats, series, ylab='', sub=''):
    """Grouped bars. series = [(name, [one value per category]), ...]"""
    h = 470
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, title, 23, W - 80, INDIGO, bold=True, anchor='middle'))
    if sub:
        g.append(TFIT(W / 2, 60, sub, 16, W - 120, GREY, anchor='middle'))
    y0, y1 = _MT + (14 if sub else 0), h - 96
    x0, x1 = _ML, W - _MR
    vals = [v for _, vs in series for v in vs]
    # A chart of changes can carry a fall. The floor is the lower of zero and
    # the smallest value, and bars are drawn from the zero line in whichever
    # direction the value goes; with no negative value the floor is zero and
    # nothing about an all-positive chart moves.
    bot, top, step = _nice(max(vals), min(min(vals), 0.0))
    _axes(g, x0, y0, x1, y1, bot, top, step, ylab)
    yz = y1 - (0.0 - bot) / (top - bot) * (y1 - y0)
    ncat, nser = len(cats), len(series)
    slot = (x1 - x0) / float(ncat)
    bw = min(46.0, (slot - 18) / nser)
    for ci, cat in enumerate(cats):
        cx = x0 + slot * (ci + 0.5)
        left = cx - (bw * nser) / 2.0
        for si, (nm, vs) in enumerate(series):
            v = vs[ci]
            col = SERIES_COLOURS[si % len(SERIES_COLOURS)]
            y = y1 - (v - bot) / (top - bot) * (y1 - y0)
            g.append(R(left + si * bw, min(y, yz), bw - 4, abs(yz - y),
                       col, rx=3))
        g.append(TFIT(cx, y1 + 26, str(cat), 16, slot - 6, GREY, anchor='middle'))
    _legend(g, h - 34, [nm for nm, _ in series],
            [SERIES_COLOURS[i % len(SERIES_COLOURS)] for i in range(nser)])
    return render(''.join(g), W, h, PAPER)


def pie_chart(title, slices, sub=''):
    """slices = [(label, value), ...]; shares are computed, not supplied."""
    import math
    h = 430
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, title, 23, W - 80, INDIGO, bold=True, anchor='middle'))
    if sub:
        g.append(TFIT(W / 2, 60, sub, 16, W - 120, GREY, anchor='middle'))
    total = float(sum(v for _, v in slices)) or 1.0
    cx, cy, r = 268, 240, 134
    a0 = -90.0
    for i, (lab, v) in enumerate(slices):
        sweep = 360.0 * v / total
        a1 = a0 + sweep
        col = SERIES_COLOURS[i % len(SERIES_COLOURS)]
        x0 = cx + r * math.cos(math.radians(a0))
        y0 = cy + r * math.sin(math.radians(a0))
        x1 = cx + r * math.cos(math.radians(a1))
        y1 = cy + r * math.sin(math.radians(a1))
        large = 1 if sweep > 180 else 0
        d = ('M%g %g L%g %g A%g %g 0 %d 1 %g %g Z'
             % (cx, cy, x0, y0, r, r, large, x1, y1))
        g.append(P(d, col, PAPER, 2))
        a0 = a1
    ly = 128
    for i, (lab, v) in enumerate(slices):
        col = SERIES_COLOURS[i % len(SERIES_COLOURS)]
        g.append(R(470, ly - 13, 16, 16, col, rx=3))
        g.append(TFIT(496, ly, '%s' % lab, 17, 250, INK, anchor='start'))
        g.append(TFIT(W - 40, ly, '%s%%' % _fmt(round(100.0 * v / total, 1)),
                      17, 90, GREY, anchor='end'))
        ly += 30
    return render(''.join(g), W, h, PAPER)


def data_table(title, headers, rows, sub='', widths=None):
    """A table as a figure, so that Task 1 tables look like the real paper."""
    n = len(headers)
    widths = widths or [1.0] * n
    tot = float(sum(widths))
    rh, top = 38, 92 + (16 if sub else 0)
    h = top + rh * (len(rows) + 1) + 30
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, title, 23, W - 80, INDIGO, bold=True, anchor='middle'))
    if sub:
        g.append(TFIT(W / 2, 60, sub, 16, W - 120, GREY, anchor='middle'))
    x0, x1 = 50, W - 50
    cw = [(x1 - x0) * w / tot for w in widths]
    y = top
    x = x0
    g.append(R(x0, y, x1 - x0, rh, INDIGO, rx=6))
    for i, hd in enumerate(headers):
        g.append(TFIT(x + 14, y + 25, str(hd), 17, cw[i] - 24, PAPER,
                      bold=True, anchor='start'))
        x += cw[i]
    y += rh
    for ri, row in enumerate(rows):
        if ri % 2:
            g.append(R(x0, y, x1 - x0, rh, SOFT))
        x = x0
        for i, cell in enumerate(row):
            g.append(TFIT(x + 14, y + 25, str(cell), 17, cw[i] - 24, INK,
                          anchor='start'))
            x += cw[i]
        g.append(L(x0, y + rh, x1, y + rh, RULE, 1))
        y += rh
    return render(''.join(g), W, h, PAPER)
