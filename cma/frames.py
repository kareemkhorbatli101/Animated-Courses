# -*- coding: utf-8 -*-
"""The diagram vocabulary for Set D1.

Six archetypes, reused across the handouts so a student learns to read each
shape once: the Ladder (a build-up compared across methods), the Tank (stock
and flow), the Bridge (a reconciliation), the Fork (a decision), the Spine
(cost flow through accounts) and the Scale (two things weighed).

Every diagram can be drawn in two states: complete, or with labels removed for
the student to supply. A blank diagram is a question.
"""
from artbase import T, R, L, C, render, tw, wrap, person, icon
from artbase import col as _col

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
    for i, (cond, result, colr) in enumerate(branches):
        y = 120 + i * 128
        g.append(R(60, y, 330, 92, SOFT, RULE, 1.4, rx=8))
        for k, line in enumerate(wrap(cond, 300, 17)):
            g.append(T(76, y + 32 + k * 24, line, 17, INK, anchor='start'))
        g.append(L(396, y + 46, 452, y + 46, colr, 3))
        g.append('<polygon points="452,%g 468,%g 452,%g" fill="%s"/>'
                 % (y + 40, y + 46, y + 52, _col(colr)))
        g.append(R(476, y, W - 536, 92, PAPER, colr, 2, rx=8))
        if blank:
            g.append(_blankline(500, y + 50, W - 584, colr))
        else:
            for k, line in enumerate(wrap(result, W - 580, 17, True)):
                g.append(T(494, y + 32 + k * 24, line, 17, colr, bold=True, anchor='start'))
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
                     % (ax + 16, y + 42, ax + 24, y + 48, ax + 16, y + 54, _col(GREY)))
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
def cover(setcode='Set D1', line1='Absorption Costing', line2='and Variable Costing',
          cso='Section D.1 Measurement Concepts', nhand='Six',
          blurb=('Six handouts you complete by hand, and one answer key',
                 'Every blank, table and diagram builds the summary you revise from')):
    h = 1270
    g = [R(0, 0, W, h, INDIGO)]
    g.append(R(0, 0, W, 320, INDIGO_D))
    for i, col in enumerate((ABS, VAR, THR, GREEN)):
        g.append(R(W / 2 - 134 + i * 70, 84, 54, 10, col, rx=5))
    g.append(T(W / 2, 196, 'CMA PART 1', 46, PAPER, bold=True))
    g.append(T(W / 2, 246, 'FINANCIAL PLANNING, PERFORMANCE AND ANALYTICS', 18, '#b9bdf0'))
    g.append(T(W / 2, 400, setcode, 34, PAPER))
    g.append(R(W / 2 - 150, 430, 300, 4, '#8186EF'))
    g.append(T(W / 2, 510, line1, _fit(line1, W - 120, 50, True), PAPER, bold=True))
    g.append(T(W / 2, 566, line2, _fit(line2, W - 120, 50, True), PAPER, bold=True))
    g.append(T(W / 2, 640, cso, _fit(cso, W - 100, 21), '#b9bdf0'))
    bx, bw, gap = 64, 190, 14
    plates = [('WRITE IT', ABS), ('SEE IT', VAR), ('WORK IT', THR), ('SIT IT', GREEN)]
    for i, (name, col) in enumerate(plates):
        x = bx + i * (bw + gap)
        g.append(R(x, 720, bw, 96, col, rx=12))
        g.append(T(x + bw / 2, 776, name, 21, PAPER, bold=True))
    g.append(R(70, 880, W - 140, 2, '#4a4f90'))
    for k, line in enumerate(blurb):
        g.append(T(W / 2, 930 + k * 34, line, _fit(line, W - 110, 20), '#b9bdf0'))
    g.append(T(W / 2, 1066, 'Written for the 2026 exam', 26, PAPER, bold=True))
    g.append(T(W / 2, 1104, 'Case-Based Questions, not essays', 20, '#b9bdf0'))
    g.append(T(W / 2, 1210, 'Student copy  ·  write in this book', 17, '#9a9edd'))
    return render(''.join(g), W, h, INDIGO)


# =====================================================================
# Second diagram set: one visual per exercise
# =====================================================================
DEBIT, CREDIT = '#2B6CB0', '#B2531F'
DEBIT_L, CREDIT_L = '#E7EFF8', '#F8EAE1'
FAV, UNFAV = '#2E8B62', '#C0483F'
GIVEN = '#44506B'
AMBER_L, PLUM_L, TEAL_L = '#FAEDDD', '#EFE6F3', '#E2F0ED'


def _fit(text, box, size, bold=False):
    """Shrink a label until it fits its box, rather than letting it collide."""
    while size > 9 and tw(text, size, bold) > box:
        size -= 1
    return size


# --------------------------------------------------------------- T-accounts --
def _cx(x, text, size, bold=False):
    """Keep a centred label on the page.

    Text drawn at the far left or right of a figure is centred on a point that
    may sit closer to the edge than half the label is wide, which silently
    pushes the end of the label off the canvas. Nudging the centre inward is
    invisible where there is room and is the only thing that saves the label
    where there is not.
    """
    half = tw(str(text), size, bold) / 2
    return min(max(x, half + 8), W - half - 8)


def taccounts(accounts, note='', percol=2, refs=None):
    """Real T-accounts, two to a row, with room for the figures.

    accounts: [(name, [(ref, amount)] debits, [(ref, amount)] credits, colour)]

    A posting carries its journal reference, the way a textbook draws it, and
    the references are explained underneath. That keeps the inside of the T to
    two short columns, which is what stops the labels colliding.
    """
    n = len(accounts)
    cols = min(percol, n)
    rows = (n + cols - 1) // cols
    gap = 46
    cw = (W - 80 - gap * (cols - 1)) / cols
    maxlines = max(max(len(d), len(c)) for _nm, d, c, _col in accounts)
    ah = 86 + maxlines * 32
    refh = 30 + 24 * ((len(refs) + 1) // 2) if refs else 0
    nlines = wrap(note, W - 170, 16) if note else []
    h = 96 + rows * (ah + 52) + refh + (28 + 24 * len(nlines) if note else 14)
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 50, 'Follow the posting through the accounts', 23, INDIGO_D,
               bold=True))
    for k, (name, deb, cred, col) in enumerate(accounts):
        x0 = 40 + (k % cols) * (cw + gap)
        top = 90 + (k // cols) * (ah + 52)
        cx = x0 + cw / 2
        g.append(R(x0, top, cw, 34, col, rx=7))
        g.append(T(cx, top + 23, name, _fit(name, cw - 22, 16, True), PAPER, bold=True))
        ty = top + 42
        g.append(L(x0, ty + 28, x0 + cw, ty + 28, INK, 2.4))
        g.append(L(cx, ty + 28, cx, ty + ah - 60, INK, 2.4))
        g.append(T(x0 + cw / 4, ty + 20, 'DEBIT', 13, DEBIT, bold=True))
        g.append(T(x0 + cw * 3 / 4, ty + 20, 'CREDIT', 13, CREDIT, bold=True))
        for side, entries, col2 in ((0, deb, DEBIT), (1, cred, CREDIT)):
            hx = x0 + side * cw / 2
            for r, (ref, amt) in enumerate(entries):
                y = ty + 58 + r * 32
                g.append(T(hx + 14, y, ref, 13, GREY, anchor='start'))
                g.append(T(hx + cw / 2 - 14, y, amt, 16, col2, bold=True, anchor='end'))
    y = 90 + rows * (ah + 52) - 20
    if refs:
        # A student reads this legend to look a posting up, so it is ordered by
        # journal reference rather than by the order the postings happen to sit
        # in the accounts above. Sorting here means no content file can drift.
        def _refkey(r):
            d = ''.join(c for c in r[0] if c.isdigit())
            return (int(d) if d else 0, r[0])
        for i, (ref, text) in enumerate(sorted(refs, key=_refkey)):
            rx = 46 + (i % 2) * (W / 2 - 20)
            ry = y + 26 + (i // 2) * 24
            g.append(T(rx, ry, ref, 13, INDIGO, bold=True, anchor='start'))
            gx = rx + max(42, tw(ref, 13, True) + 14)
            g.append(T(gx, ry, text, _fit(text, W / 2 - (gx - rx) - 68, 14),
                       GREY, anchor='start'))
        y += refh
    if note:
        nh = 18 + 24 * len(nlines)
        g.append(R(40, h - nh - 12, W - 80, nh, SOFT, RULE, 1.3, rx=7))
        for j, ln in enumerate(nlines):
            g.append(T(W / 2, h - nh + 7 + j * 24, ln, 16, INDIGO_D, bold=True))
    return render(''.join(g), W, int(h), PAPER)


# ------------------------------------------------------------------ people --
def workplace(title, actors, props, caption=''):
    """Organisational context: who is in the room, and what the business is.

    actors: [(name, role, kind, colour)] where kind is m, w or h
    props:  [(icon_name, label)] drawn on their own band so nothing overlaps

    Available icons include factory, truck, shelf, bank, doc, stamp, money,
    calendar, scale, container, drum, sack, crane, building, clock, tick, cross.
    """
    propband = 118 if props else 0
    clines = wrap(caption, W - 120, 16) if caption else []
    h = 76 + propband + 196 + (26 + 22 * len(clines) if caption else 16)
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(0, 0, W, 58, INDIGO_D))
    g.append(T(W / 2, 37, title, 21, PAPER, bold=True))
    if props:
        tilew, gap = 112, 20
        total = len(props) * tilew + (len(props) - 1) * gap
        x0 = (W - total) / 2
        for i, (ic, label) in enumerate(props):
            x = x0 + i * (tilew + gap)
            g.append(R(x, 74, tilew, 68, SOFT, RULE, 1.4, rx=10))
            g.append(icon(ic, x + tilew / 2 - 24, 86, 0.78))
            g.append(T(x + tilew / 2, 160, label, _fit(label, tilew + 14, 14), GREY))
    ground = 76 + propband + 150
    g.append(R(40, ground, W - 80, 4, RULE))
    span = (W - 120) / max(1, len(actors))
    for i, (name, role, kind, col) in enumerate(actors):
        cx = 60 + span * i + span / 2
        g.append(person(cx, ground, shirt=col, kind=kind, scale=0.86))
        g.append(T(cx, ground + 30, name, 17, INDIGO_D, bold=True))
        for k, line in enumerate(wrap(role, span - 20, 14)):
            g.append(T(cx, ground + 52 + k * 18, line, 14, col))
    if caption:
        for j, ln in enumerate(clines):
            g.append(T(W / 2, h - 16 - 22 * (len(clines) - 1 - j), ln, 16,
                       INDIGO_D, bold=True))
    return render(''.join(g), W, int(h), PAPER)


# ----------------------------------------------------------------- buckets --
def buckets(title, columns, note=''):
    """A sorting visual with any number of boxes.

    columns: [(heading, colour, [item, item, ...])]
    """
    nc = len(columns)
    bw = (W - 60 - 18 * (nc - 1)) / nc
    # An item longer than its column used to be shrunk until it fitted, with a
    # floor of 9pt that it was allowed to blow straight through: the result was
    # unreadable and overlapped the next column anyway. Wrap it instead, and
    # give every column the same row heights so the boxes still line up.
    room = bw - 48
    wrapped = [[wrap(it, room, 15)[:2] if it else [''] for it in items]
               for _h, _c, items in columns]
    rowh = [max(len(w[i]) for w in wrapped if i < len(w))
            for i in range(max(len(w) for w in wrapped))]
    most = sum(rowh)
    nlines = wrap(note, W - 110, 16) if note else []
    h = 150 + most * 32 + (26 + 22 * len(nlines) if note else 18)
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 42, title, 22, INDIGO_D, bold=True))
    for i, (head, colour, items) in enumerate(columns):
        x = 30 + i * (bw + 18)
        g.append(R(x, 68, bw, h - 108 - (30 if note else 0), PAPER, colour, 2, rx=10))
        g.append(R(x, 68, bw, 34, colour, rx=10))
        g.append(R(x, 90, bw, 12, colour))
        g.append(T(x + bw / 2, 92, head, _fit(head, bw - 18, 16, True), PAPER, bold=True))
        for k, it in enumerate(items):
            y = 128 + sum(rowh[:k]) * 32
            if it:
                g.append(C(x + 18, y - 5, 4, colour))
                for j, line in enumerate(wrapped[i][k]):
                    g.append(T(x + 30, y + j * 21, line, 15, INK, anchor='start'))
            else:
                for j in range(rowh[k]):
                    g.append(L(x + 18, y + j * 26, x + bw - 18, y + j * 26, RULE, 1.4))
    if note:
        for j, ln in enumerate(nlines):
            g.append(T(W / 2, h - 18 - 22 * (len(nlines) - 1 - j), ln, 16, GREY))
    return render(''.join(g), W, int(h), PAPER)


# ---------------------------------------------------------------- registers --
def register(rows, note=''):
    """The same proposition climbing from teaching English to exam English.

    rows: [(r1, r2, r3)]
    """
    cols = [('R1  teaching English', '#2E8B62'), ('R2  textbook English', '#2B6CB0'),
            ('R3  exam English', ABS)]
    bw = (W - 76) / 3
    heights = []
    for r in rows:
        heights.append(max(len(wrap(t, bw - 30, 15)) for t in r) * 21 + 34)
    h = 150 + sum(heights) + (46 if note else 14)
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 42, 'One idea, three difficulties', 22, INDIGO_D, bold=True))
    g.append(T(W / 2, 70, 'You meet it on the left. The exam gives it to you on the right.',
               15, GREY))
    for i, (head, col) in enumerate(cols):
        x = 30 + i * (bw + 8)
        g.append(R(x, 88, bw, 34, col, rx=7))
        g.append(T(x + bw / 2, 111, head, 15, PAPER, bold=True))
        g.append('<polygon points="%g,%g %g,%g %g,%g" fill="%s"/>'
                 % (x + bw + 1, 96, x + bw + 7, 105, x + bw + 1, 114, _col(GREY))
                 if i < 2 else '')
    y = 132
    for ri, r in enumerate(rows):
        for i, txt in enumerate(r):
            x = 30 + i * (bw + 8)
            g.append(R(x, y, bw, heights[ri] - 8, SOFT if ri % 2 == 0 else PAPER,
                       RULE, 1.3, rx=6))
            for k, line in enumerate(wrap(txt, bw - 30, 15)):
                g.append(T(x + 15, y + 26 + k * 21, line, 15, INK, anchor='start'))
        y += heights[ri]
    if note:
        g.append(T(W / 2, h - 18, note, 16, INDIGO_D, bold=True))
    return render(''.join(g), W, int(h), PAPER)


# ------------------------------------------------------------ stem anatomy --
def anatomy(stem, labels, note=''):
    """Pull an exam stem apart and point at the parts that decide the answer.

    labels: [(fragment, what_it_is, colour)]
    """
    lines = wrap(stem, W - 150, 17)
    h = 120 + len(lines) * 26 + len(labels) * 42 + (46 if note else 16)
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 42, 'What the question is actually made of', 22, INDIGO_D, bold=True))
    g.append(R(40, 66, W - 80, len(lines) * 26 + 26, SOFT, RULE, 1.4, rx=8))
    for k, line in enumerate(lines):
        g.append(T(62, 94 + k * 26, line, 17, INK, anchor='start'))
    y = 66 + len(lines) * 26 + 48
    for frag, what, colr in labels:
        g.append(R(40, y, 300, 34, colr, rx=6))
        g.append(T(54, y + 23, frag, _fit(frag, 282, 15, True), PAPER, bold=True,
                   anchor='start'))
        g.append(L(344, y + 17, 372, y + 17, colr, 2.4))
        g.append('<polygon points="372,%g 386,%g 372,%g" fill="%s"/>'
                 % (y + 11, y + 17, y + 23, _col(colr)))
        g.append(T(396, y + 23, what, _fit(what, W - 440, 16), INK, anchor='start'))
        y += 42
    if note:
        g.append(T(W / 2, h - 18, note, 16, INDIGO_D, bold=True))
    return render(''.join(g), W, int(h), PAPER)


HELD_C, CHARGED_C = ABS, VAR


# --------------------------------------------------------------- behaviour --
def behaviour():
    """The four facts about cost behaviour, as four small charts."""
    h = 390
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 40, 'What happens as activity rises', 23, INDIGO_D, bold=True))
    panels = [('Variable cost — TOTAL', 'rises in proportion', 'up', VAR),
              ('Variable cost — PER UNIT', 'does not change', 'flat', VAR),
              ('Fixed cost — TOTAL', 'does not change', 'flat', ABS),
              ('Fixed cost — PER UNIT', 'falls as volume rises', 'down', ABS)]
    pw = (W - 70) / 4
    for i, (title, sub, shape, col) in enumerate(panels):
        x = 30 + i * pw
        bw = pw - 18
        g.append(R(x, 80, bw, 190, PAPER, RULE, 1.6, rx=8))
        g.append(L(x + 22, 240, x + bw - 16, 240, GREY, 1.6))
        g.append(L(x + 22, 100, x + 22, 240, GREY, 1.6))
        if shape == 'up':
            g.append(L(x + 22, 234, x + bw - 22, 112, col, 3.4))
        elif shape == 'flat':
            g.append(L(x + 26, 168, x + bw - 22, 168, col, 3.4))
        else:
            g.append('<path d="M%g,%g Q%g,%g %g,%g" fill="none" stroke="%s" '
                     'stroke-width="3.4"/>' % (x + 26, 116, x + bw / 2, 230,
                                               x + bw - 22, 232, col))
        g.append(T(x + 24, 258, 'activity', 12, GREY, anchor='start'))
        for k, line in enumerate(wrap(title, bw, 14, True)):
            g.append(T(x + bw / 2, 292 + k * 19, line, 14, INDIGO_D, bold=True))
        for k, line in enumerate(wrap(sub, bw, 14)):
            g.append(T(x + bw / 2, 334 + k * 18, line, 14, col))
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------------ matrix --
def matrix(title, rowhead, colhead, cells, note=''):
    """A 2 x 2 (or n x m) grid for cross-classification."""
    nr, nc = len(rowhead), len(colhead)
    cw, ch = (W - 240) / nc, 92
    nlines = wrap(note, W - 150, 16) if note else []
    h = 150 + nr * ch + (24 + 22 * len(nlines) if note else 14)
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 40, title, 22, INDIGO_D, bold=True))
    for j, chd in enumerate(colhead):
        g.append(R(210 + j * cw, 70, cw - 12, 38, INDIGO, rx=6))
        g.append(T(210 + j * cw + (cw - 12) / 2, 95, chd,
                   _fit(chd, cw - 26, 16, True), PAPER, bold=True))
    for i, rhd in enumerate(rowhead):
        y = 120 + i * ch
        g.append(R(30, y, 168, ch - 12, SOFT, RULE, 1.4, rx=6))
        rl = wrap(rhd, 150, 15, True)[:3]
        for k, line in enumerate(rl):
            g.append(T(114, y + (ch - 12) / 2 - 9 * (len(rl) - 1) + k * 19 + 5,
                       line, _fit(line, 152, 15, True), INDIGO_D, bold=True))
        for j in range(nc):
            x = 210 + j * cw
            g.append(R(x, y, cw - 12, ch - 12, PAPER, RULE, 1.6, rx=6))
            txt = cells[i][j] if cells else ''
            if txt:
                for k, line in enumerate(wrap(txt, cw - 34, 15)):
                    g.append(T(x + (cw - 12) / 2, y + 30 + k * 20, line, 15, INK))
            else:
                g.append(L(x + 16, y + (ch - 12) / 2 + 6, x + cw - 28,
                           y + (ch - 12) / 2 + 6, RULE, 1.4))
    if note:
        for j, ln in enumerate(nlines):
            g.append(T(W / 2, h - 18 - 22 * (len(nlines) - 1 - j), ln, 16, GREY))
    return render(''.join(g), W, int(h), PAPER)


# ------------------------------------------------------------------ stacks --
def stacks(title, columns, note=''):
    """Stacked bars comparing how each method builds a unit cost.

    columns: [(label, [(layer, value, colour, inside)], colour)]
    """
    h = 440
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 40, title, 22, INDIGO_D, bold=True))
    base = 340
    peak = max(sum(v for _l, v, _c, _i in layers) for _lab, layers, _c in columns) or 1
    cw = (W - 80) / len(columns)
    for i, (lab, layers, col) in enumerate(columns):
        x = 40 + i * cw + cw / 2
        bw = cw - 96
        y = base
        for lname, val, lcol, inside in layers:
            hh = 212 * val / peak
            y -= hh
            g.append(R(x - bw / 2, y, bw, hh - 2, lcol if inside else PAPER,
                       lcol, 2, rx=4))
            if hh > 22:
                g.append(T(x, y + hh / 2 + 5, '%s  $%g' % (lname, val),
                           _fit('%s  $%g' % (lname, val), bw - 16, 14),
                           PAPER if inside else lcol, bold=True))
        g.append(T(x, base + 26, lab, 17, col, bold=True))
        g.append(T(x, base + 50, 'unit cost  $%g'
                   % sum(v for _l, v, _c, ins in layers if ins), 16, INDIGO_D, bold=True))
    g.append(L(30, base, W - 30, base, GREY, 1.6))
    if note:
        g.append(R(30, 384, W - 60, 40, SOFT, RULE, 1.2, rx=6))
        g.append(T(W / 2, 410, note, 16, INDIGO_D, bold=True))
    return render(''.join(g), W, h, PAPER)


# ---------------------------------------------------------------- timeline --
def timeline(title, points, note=''):
    """Events along a line: deferral in one period, release in another.

    points: [(label, sublabel, colour)]
    """
    nlines = wrap(note, W - 130, 16) if note else []
    nh = 18 + 24 * len(nlines) if note else 0
    h = max(300, 252 + nh)
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 40, title, 22, INDIGO_D, bold=True))
    y = 150
    g.append(L(60, y, W - 60, y, RULE, 4))
    # The points used to sit 80px from each edge, which left the first and last
    # labels half their own width of room. Clamping them inward only moved the
    # problem into the neighbouring label. Inset the points instead, so each one
    # owns a share of the width wide enough for the text it carries.
    n = len(points)
    inset = 150 if n > 1 else W / 2
    span = (W - 2 * inset) / (n - 1) if n > 1 else 0
    for i, (lab, sub, col) in enumerate(points):
        x = inset + span * i
        room = min(span - 22, 2 * min(x, W - x) - 20) if span else 240
        g.append(C(x, y, 15, col))
        g.append(C(x, y, 7, PAPER))
        for k, line in enumerate(wrap(lab, room, 16, True)):
            g.append(T(x, y - 46 + k * 20, line, _fit(line, room, 16, True),
                       INDIGO_D, bold=True))
        for k, line in enumerate(wrap(sub, room, 14)):
            g.append(T(x, y + 44 + k * 19, line, _fit(line, room, 14), col))
    if note:
        g.append(R(40, 238, W - 80, nh, SOFT, RULE, 1.2, rx=6))
        for j, ln in enumerate(nlines):
            g.append(T(W / 2, 261 + j * 24, ln, 16, INDIGO_D, bold=True))
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------------ formula --
def formula(title, parts, note=''):
    """A formula drawn as labelled blocks, so each term can be pointed at.

    parts: [(term, gloss, colour)] with operators given as ('=', '', None)
    """
    gap = 14
    widths = []
    for term, _gl, col in parts:
        widths.append(46 if col is None else max(150, tw(term, 17, True) + 46))
    # A formula with many terms, or one long term, used to compute a row wider
    # than the page and then centre it, which pushed the first and last blocks
    # clean off the canvas. Squeeze the row to fit instead: the blocks narrow,
    # and _fit shrinks the text inside them to match.
    room = W - 56
    total = sum(widths) + gap * (len(parts) - 1)
    if total > room:
        # Operators keep their width; only the term blocks give ground, and the
        # result is not clamped back up, because a clamp is what let the row
        # grow past the page again.
        fixed = sum(w for w, p in zip(widths, parts) if p[2] is None)
        flex = sum(widths) - fixed
        spare = room - gap * (len(parts) - 1) - fixed
        k = max(0.4, spare / flex) if flex else 1
        widths = [w if p[2] is None else w * k for w, p in zip(widths, parts)]
        total = sum(widths) + gap * (len(parts) - 1)
    nlines = wrap(note, W - 120, 16) if note else []
    h = 250 + (22 + 22 * len(nlines) if note else 0)
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 40, title, 22, INDIGO_D, bold=True))
    x = max(28, (W - total) / 2)
    for (term, gl, col), bw in zip(parts, widths):
        if col is None:
            g.append(T(x + bw / 2, 128, term, 26, GREY, bold=True))
        else:
            g.append(R(x, 86, bw, 76, col, rx=8))
            g.append(T(x + bw / 2, 120, term, _fit(term, bw - 18, 17, True),
                       PAPER, bold=True))
            for k, line in enumerate(wrap(gl, bw + 10, 13)):
                g.append(T(_cx(x + bw / 2, line, 13), 184 + k * 18, line, 13, GREY))
        x += bw + gap
    if note:
        for j, ln in enumerate(nlines):
            g.append(T(W / 2, h - 22 - 22 * (len(nlines) - 1 - j), ln, 16,
                       INDIGO_D, bold=True))
    return render(''.join(g), W, int(h), PAPER)


# ----------------------------------------------------------------- threshold --
def threshold(title, bars, line_value, line_label):
    """Columns measured against a target line."""
    h = 390
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 40, title, 22, INDIGO_D, bold=True))
    base, top = 300, 96
    peak = max(max(v for _l, v, _c in bars), line_value) * 1.12
    cw = (W - 120) / len(bars)
    ly = base - (base - top) * line_value / peak
    g.append(L(40, ly, W - 40, ly, UNFAV, 2.4))
    g.append(T(W - 44, ly - 10, line_label, 15, UNFAV, bold=True, anchor='end'))
    for i, (lab, val, col) in enumerate(bars):
        x = 60 + i * cw + cw / 2
        bw = cw - 110
        hh = (base - top) * val / peak
        g.append(R(x - bw / 2, base - hh, bw, hh, col, rx=6))
        g.append(T(x, base - hh - 14, '$%s' % format(val, ',.0f'), 17, INDIGO_D, bold=True))
        for k, line in enumerate(wrap(lab, cw - 30, 15)):
            g.append(T(x, base + 28 + k * 20, line, 15, GREY))
    g.append(L(30, base, W - 30, base, GREY, 1.6))
    return render(''.join(g), W, h, PAPER)


def ranked(title, rows, note='', scale_note=''):
    """An ordered list of amounts, drawn as bars in the order they are given.

    rows: [(label, amount_number, amount_text, colour)]

    Section A orders things constantly: a balance sheet by liquidity, an equity
    section by where the money came from, a cash flow statement by activity. The
    order is the teaching point, so the bar length carries the size and the
    position carries the rank.
    """
    n = len(rows)
    top = 92 if not scale_note else 112
    rh = 44
    nlines = wrap(note, W - 120, 16) if note else []
    h = top + n * rh + (26 + 22 * len(nlines) if note else 20)
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 46, title, 22, INDIGO_D, bold=True))
    if scale_note:
        g.append(T(W / 2, 76, scale_note, 15, GREY))
    lw = max(tw(r[0], 15) for r in rows) + 26
    lw = min(lw, 330)
    x0 = 40 + lw
    amt = 128                                   # the money column on the right
    bar = W - 40 - amt - x0
    biggest = max(abs(r[1]) for r in rows) or 1
    for i, (label, value, text, c) in enumerate(rows):
        y = top + i * rh
        g.append(T(40, y + 26, label, _fit(label, lw - 14, 15), INK, anchor='start'))
        w = max(3, bar * abs(value) / biggest)
        g.append(R(x0, y + 10, w, 24, _col(c), rx=4))
        g.append(T(W - 40, y + 27, text, 16, _col(c), bold=True, anchor='end'))
    if note:
        for j, ln in enumerate(nlines):
            g.append(T(W / 2, h - 18 - 22 * (len(nlines) - 1 - j), ln, 16, GREY))
    return render(''.join(g), W, int(h), PAPER)


# ------------------------------------------------------------------ legend --
def legend():
    """The colour system, stated once at the front of the book.

    Grouped into bands, because the same colour carries a different question in
    each band: plum is absorption costing in one and "still in inventory" in the
    next. The bands are what make a repeated colour readable rather than
    confusing, and each band heading says which question its colours answer.
    """
    bands = [
        ('THE THREE COSTING SYSTEMS', 'Which system am I reading?', [
            ('Absorption costing', ABS,
             'Plum marks everything absorption costing touches: its statements, its '
             'unit cost, its inventory figure.'),
            ('Variable costing', VAR,
             'Teal throughout, including every contribution margin format.'),
            ('Throughput costing', THR,
             'Amber. You meet it in Handout 2 and again in the exam questions.'),
        ]),
        ('WHERE A COST IS SITTING', 'Has this cost reached the income statement?', [
            ('Held in inventory', HELD_C,
             'Plum again, asking a second question: this cost is still an asset on '
             'the balance sheet.'),
            ('Charged to the period', CHARGED_C,
             'Teal again: this cost has already been taken to the income statement.'),
        ]),
        ('THE TWO SIDES OF THE LEDGER', 'Which side does this posting go on?', [
            ('Debit', DEBIT,
             'The left side of every T-account and every journal entry in this set.'),
            ('Credit', CREDIT,
             'The right side. The rule to carry: blue goes in, rust comes out.'),
        ]),
        ('VARIANCE DIRECTION', 'Which way did the variance go?', [
            ('Favourable variance', FAV,
             'Green. Read Handout 4 before you decide that green means good news for '
             'the business.'),
            ('Unfavourable variance', UNFAV,
             'Red, and the same warning in reverse: an unfavourable volume variance '
             'can sit under a healthy quarter.'),
        ]),
        ('SIGNPOSTS ON THE PAGE', 'What is this box telling me to do?', [
            ('Trap', UNFAV,
             'A red panel is a mistake the exam sets for you on purpose. Work it '
             'before you read the answer.'),
            ('Watch out', THR,
             'An amber note is a warning you will need within the next page or two.'),
            ('Answer key', FAV,
             'Green headings belong to the answer key at the back of the set.'),
        ]),
    ]
    g = [T(W / 2, 46, 'What the colours mean', 26, INDIGO_D, bold=True),
         T(W / 2, 76, 'The same colour means the same thing on every page of this set. '
                      'Read the band heading first.', 16, GREY)]
    y = 104
    gx = 316
    gw = W - gx - 44                     # the room the gloss column actually has
    for title, question, rows in bands:
        g.append(R(34, y, W - 74, 30, SOFT, RULE, 1.2, rx=5))
        g.append(T(46, y + 20, title, 13, INDIGO_D, bold=True, anchor='start'))
        g.append(T(W - 52, y + 20, question, 13, GREY, anchor='end'))
        y += 42
        for name, c, gloss in rows:
            lines_ = wrap(gloss, gw, 15)[:2]
            g.append(R(44, y + 2, 24, 24, _col(c), rx=5))
            g.append(T(82, y + 19, name, 16, INDIGO_D, bold=True, anchor='start'))
            for j, ln in enumerate(lines_):
                g.append(T(gx, y + 19 + j * 20, ln, 15, GREY, anchor='start'))
            y += 34 + 20 * len(lines_)
        y += 10
    h = y + 16
    return render(R(0, 0, W, h, PAPER) + ''.join(g), W, int(h), PAPER)
