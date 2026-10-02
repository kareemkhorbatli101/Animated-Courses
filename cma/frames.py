# -*- coding: utf-8 -*-
"""The diagram vocabulary for Set D1.

Six archetypes, reused across the handouts so a student learns to read each
shape once: the Ladder (a build-up compared across methods), the Tank (stock
and flow), the Bridge (a reconciliation), the Fork (a decision), the Spine
(cost flow through accounts) and the Scale (two things weighed).

Every diagram can be drawn in two states: complete, or with labels removed for
the student to supply. A blank diagram is a question.
"""
from artbase import T, R, L, C, render, tw, wrap

W = 900
PAPER = '#ffffff'
INK = '#232733'
INDIGO = '#353A7C'
INDIGO_D = '#23265A'
GREY = '#6B7280'
RULE = '#DFE3EE'
SOFT = '#F5F7FC'
ABS = '#6D3F7E'       # absorption, plum
VAR = '#1F7A6A'       # variable, teal
THR = '#C9762E'       # throughput, amber
RED = '#C0483F'
GREEN = '#2E8B62'


def _cap(g, y, text, size=19, fill=GREY):
    g.append(T(W / 2, y, text, size, fill, anchor='middle'))


def _blankline(x, y, w, col=INDIGO):
    return L(x, y, x + w, y, col, 1.6)


# ------------------------------------------------------------------ ladder ---
def ladder(layers, blank=False):
    """The unit-cost build-up under the three methods, side by side.

    layers: [(name, amount_or_None, in_absorption, in_variable, in_throughput)]
    Reading down a column shows exactly where each method draws its line
    between what goes into inventory and what goes to the income statement.
    """
    rowh, top, labw = 62, 150, 348
    colw = (W - labw - 70) / 3
    h = top + rowh * len(layers) + 110
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 54, 'Where each method draws the line', 26, INDIGO_D, bold=True))
    g.append(T(W / 2, 84, 'A cost inside the box goes into inventory. A cost outside it goes '
                          'to the income statement now.', 16, GREY))
    heads = [('Absorption', ABS), ('Variable', VAR), ('Throughput', THR)]
    for i, (nm, col) in enumerate(heads):
        x = labw + 36 + i * colw
        g.append(R(x, top - 44, colw - 12, 34, col, rx=6))
        g.append(T(x + (colw - 12) / 2, top - 21, nm, 17, PAPER, bold=True))
    for j, (name, amt, a, v, t) in enumerate(layers):
        y = top + j * rowh
        g.append(R(24, y, labw, rowh - 8, SOFT, RULE, 1, rx=5))
        # keep the name clear of the money column whatever its length
        avail = labw - 110
        size = 17
        while tw(name, size) > avail and size > 12:
            size -= 1
        g.append(T(40, y + 27, name, size, INK, anchor='start'))
        if amt is not None:
            g.append(T(24 + labw - 16, y + 27, amt, 17, INDIGO, bold=True, anchor='end'))
        for i, (flag, col) in enumerate(((a, ABS), (v, VAR), (t, THR))):
            x = labw + 36 + i * colw
            if blank:
                g.append(R(x, y, colw - 12, rowh - 8, PAPER, RULE, 1.4, rx=5))
            else:
                g.append(R(x, y, colw - 12, rowh - 8,
                           col if flag else PAPER, col if flag else RULE, 1.4, rx=5))
                g.append(T(x + (colw - 12) / 2, y + 27,
                           'inventory' if flag else 'expensed now', 15,
                           PAPER if flag else GREY))
    yb = top + rowh * len(layers) + 18
    g.append(T(W / 2, yb + 22,
               'Write "inventory" or "expensed now" in every box.' if blank
               else 'The only cost that moves between the columns is fixed manufacturing overhead.',
               17, INDIGO if blank else INK, bold=True))
    return render(''.join(g), W, int(h), PAPER)


# -------------------------------------------------------------------- tank ---
def tank(periods, rate_label, blank=False):
    """Fixed overhead flowing into and out of inventory, period by period.

    periods: [(label, produced, sold, opening_units, closing_units, note)]
    """
    colw = W / len(periods)
    h = 470
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 48, 'Fixed overhead held in inventory', 26, INDIGO_D, bold=True))
    g.append(T(W / 2, 76, rate_label, 17, GREY))
    base, top = 360, 140
    for i, (label, prod, sold, op, cl, note) in enumerate(periods):
        cx = colw * i + colw / 2
        tw_ = colw - 86
        g.append(R(cx - tw_ / 2, top, tw_, base - top, PAPER, INDIGO, 2, rx=8))
        peak = max(1, max(c for _, _, _, _, c, _ in periods))
        fillh = (base - top - 8) * (cl / peak) if peak else 0
        if not blank and fillh > 0:
            g.append(R(cx - tw_ / 2 + 4, base - 4 - fillh, tw_ - 8, fillh, ABS, rx=5))
            g.append(T(cx, base - 10 - fillh / 2, '%s units' % format(cl, ',d'), 16,
                       PAPER, bold=True))
        g.append(T(cx, top - 22, label, 19, INDIGO_D, bold=True))
        g.append(T(cx, base + 28, 'made %s' % format(prod, ',d'), 16, GREY))
        g.append(T(cx, base + 50, 'sold %s' % format(sold, ',d'), 16, GREY))
        if blank:
            g.append(_blankline(cx - 60, base + 84, 120))
            g.append(T(cx, base + 108, 'closing units', 14, GREY))
        else:
            g.append(T(cx, base + 84, note, 16, ABS if cl > op else
                       (VAR if cl < op else GREY), bold=True))
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------------ bridge ---
def _fmt(v):
    return ('($%s)' % format(abs(v), ',.0f')) if v < 0 else ('$%s' % format(v, ',.0f'))


def bridge(start_label, start, steps, end_label, end, blank=False):
    """A reconciliation drawn as a waterfall.

    The first and last bars stand on the base line. Each step floats between
    them, so the student can see that the whole difference between the two
    incomes is the fixed overhead that moved into or out of inventory.
    """
    h = 440
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 46, 'From one operating income to the other', 26, INDIGO_D, bold=True))
    cols = [(start_label, start, VAR, 'start')]
    run_total = start
    for lab, val in steps:
        cols.append((lab, val, GREY, 'step'))
        run_total += val
    cols.append((end_label, end, ABS, 'end'))
    n = len(cols)
    colw = (W - 80) / n
    base, top_room = 352, 150
    peak = max(abs(start), abs(end)) or 1
    scale_ = top_room / peak

    level = start
    for i, (lab, val, col, kind) in enumerate(cols):
        x = 40 + i * colw + 14
        bw = colw - 46
        if kind == 'start':
            y0, hh = base - start * scale_, start * scale_
            level = start
        elif kind == 'end':
            y0, hh = base - end * scale_, end * scale_
        else:
            lo, hi = sorted((level, level + val))
            y0, hh = base - hi * scale_, (hi - lo) * scale_
            hh = max(hh, 7)
            level += val
        g.append(R(x, y0, bw, hh, col, rx=5))
        if kind == 'step':
            g.append(L(x - 14, y0 + hh, x, y0 + hh, RULE, 1.6))
            g.append(L(x + bw, y0, x + bw + 14, y0, RULE, 1.6))
        if blank:
            g.append(_blankline(x + 4, y0 - 14, bw - 8))
        else:
            g.append(T(x + bw / 2, y0 - 12, _fmt(val), 17, INDIGO_D, bold=True))
        for k, line in enumerate(wrap(lab, bw + 30, 15)):
            g.append(T(x + bw / 2, base + 28 + k * 19, line, 15, GREY))
    g.append(L(28, base, W - 28, base, GREY, 1.6))
    return render(''.join(g), W, h, PAPER)


# -------------------------------------------------------------------- fork ---
def fork(question, branches, blank=False):
    """A decision point with named branches and their consequences."""
    h = 150 + 128 * len(branches)
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(40, 36, W - 80, 56, INDIGO_D, rx=8))
    g.append(T(W / 2, 71, question, 20, PAPER, bold=True))
    for i, (cond, result, col) in enumerate(branches):
        y = 120 + i * 128
        g.append(R(60, y, 330, 92, SOFT, RULE, 1.4, rx=8))
        for k, line in enumerate(wrap(cond, 300, 17)):
            g.append(T(76, y + 32 + k * 24, line, 17, INK, anchor='start'))
        g.append(L(396, y + 46, 452, y + 46, col, 3))
        g.append('<polygon points="452,%g 468,%g 452,%g" fill="%s"/>' % (y + 40, y + 46, y + 52, col))
        g.append(R(476, y, W - 536, 92, PAPER, col, 2, rx=8))
        if blank:
            g.append(_blankline(500, y + 50, W - 584, col))
        else:
            for k, line in enumerate(wrap(result, W - 580, 17, True)):
                g.append(T(494, y + 32 + k * 24, line, 17, col, bold=True, anchor='start'))
    return render(''.join(g), W, int(h), PAPER)


# ------------------------------------------------------------------- spine ---
def spine(boxes, note, blank=False):
    """Cost flowing through the manufacturing accounts, left to right."""
    h = 330
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 46, 'How a cost reaches the income statement', 24, INDIGO_D, bold=True))
    n = len(boxes)
    bw = (W - 60 - 26 * (n - 1)) / n
    y = 110
    for i, (name, sub, col) in enumerate(boxes):
        x = 30 + i * (bw + 26)
        g.append(R(x, y, bw, 96, PAPER, col, 2.2, rx=8))
        g.append(R(x, y, bw, 30, col, rx=8))
        g.append(R(x, y + 18, bw, 12, col))
        g.append(T(x + bw / 2, y + 21, name, 15, PAPER, bold=True))
        if blank:
            g.append(_blankline(x + 14, y + 68, bw - 28))
        else:
            for k, line in enumerate(wrap(sub, bw - 20, 14)):
                g.append(T(x + bw / 2, y + 56 + k * 18, line, 14, INK))
        if i < n - 1:
            ax = x + bw + 4
            g.append(L(ax, y + 48, ax + 16, y + 48, GREY, 2.4))
            g.append('<polygon points="%g,%g %g,%g %g,%g" fill="%s"/>'
                     % (ax + 16, y + 42, ax + 24, y + 48, ax + 16, y + 54, GREY))
    g.append(R(30, 248, W - 60, 48, SOFT, RULE, 1.4, rx=7))
    g.append(T(W / 2, 278, note, 17, INDIGO_D, bold=True))
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------------- scale ---
def scale(left_title, left_items, right_title, right_items):
    """Two positions weighed against each other."""
    rows = max(len(left_items), len(right_items))
    h = 150 + 34 * rows
    g = [R(0, 0, W, h, PAPER)]
    for i, (title, items, col, x0) in enumerate(
            ((left_title, left_items, VAR, 30), (right_title, right_items, ABS, W / 2 + 10))):
        bw = W / 2 - 40
        g.append(R(x0, 36, bw, 42, col, rx=7))
        g.append(T(x0 + bw / 2, 63, title, 18, PAPER, bold=True))
        for k, it in enumerate(items):
            y = 100 + k * 34
            g.append(C(x0 + 16, y - 5, 4, col))
            for m, line in enumerate(wrap(it, bw - 44, 16)):
                g.append(T(x0 + 30, y + m * 20, line, 16, INK, anchor='start'))
    return render(''.join(g), W, int(h), PAPER)


# ------------------------------------------------------------------- cover ---
def cover():
    h = 1270
    g = [R(0, 0, W, h, INDIGO)]
    g.append(R(0, 0, W, 320, INDIGO_D))
    for i, col in enumerate((ABS, VAR, THR, GREEN)):
        g.append(R(W / 2 - 134 + i * 70, 84, 54, 10, col, rx=5))
    g.append(T(W / 2, 196, 'CMA PART 1', 46, PAPER, bold=True))
    g.append(T(W / 2, 246, 'FINANCIAL PLANNING, PERFORMANCE AND ANALYTICS', 18, '#b9bdf0'))
    g.append(T(W / 2, 400, 'Set D1', 34, PAPER))
    g.append(R(W / 2 - 150, 430, 300, 4, '#8186EF'))
    g.append(T(W / 2, 510, 'Absorption Costing', 50, PAPER, bold=True))
    g.append(T(W / 2, 566, 'and Variable Costing', 50, PAPER, bold=True))
    g.append(T(W / 2, 640, 'Section D.1 Measurement Concepts', 21, '#b9bdf0'))
    bx, bw, gap = 64, 190, 14
    plates = [('WRITE IT', ABS), ('SEE IT', VAR), ('WORK IT', THR), ('SIT IT', GREEN)]
    for i, (name, col) in enumerate(plates):
        x = bx + i * (bw + gap)
        g.append(R(x, 720, bw, 96, col, rx=12))
        g.append(T(x + bw / 2, 776, name, 21, PAPER, bold=True))
    g.append(R(70, 880, W - 140, 2, '#4a4f90'))
    for k, line in enumerate([
            'Six handouts you complete by hand, and one answer key',
            'Every blank, table and diagram builds the summary you revise from']):
        g.append(T(W / 2, 930 + k * 34, line, 20, '#b9bdf0'))
    g.append(T(W / 2, 1066, 'Written for the 2026 exam', 26, PAPER, bold=True))
    g.append(T(W / 2, 1104, 'Case-Based Questions, not essays', 20, '#b9bdf0'))
    g.append(T(W / 2, 1210, 'Student copy  ·  write in this book', 17, '#9a9edd'))
    return render(''.join(g), W, h, INDIGO)
