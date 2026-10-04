# -*- coding: utf-8 -*-
"""The visual forms a gapped summary can take, and how to tell which fits.

A summary does not have to be a paragraph. The same content the chapter
states can be a sequence, a grouping, a comparison of magnitudes, a series
over periods, or two sides set against each other — and each of those is
read differently and remembered differently. Every form here is still one
exercise: some of its labels are gone and the reader writes them in.

What governs the whole module is that a form is only used when the content
has that shape already. A grouping drawn as a flow would assert an order
the chapter never states; a magnitude chart drawn from a table of names
would invent numbers. So each form has a detector, the detector either
finds the shape or does not, and nothing is drawn on a guess.

A survey of book 1 before any of this was written, which is what set the
shortlist:

    gapped grid          78 tables      always available
    classification tree  34
    bar chart            23
    two-sided contrast   17
    flow from a table     7
    flow from prose      14 sections    across 11 chapters
    line graph            2             chapters 9 and 12 only

The line graph is kept even at two, because where a series exists nothing
else shows it; it is simply rare, and the plan says so rather than forcing
one onto material that has no periods in it.
"""
from __future__ import print_function

import collections
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import wsart as A                 # noqa: E402
import wsgen as WG                # noqa: E402

clean = WG.clean
shuffled = WG.shuffled

W = 760

# Four hues, so a lane or a line can be told from its neighbour and a
# photocopy still reads. wsfiggen keeps the same list.
PAL = [(A.INDIGO, A.INDIGO_L), (A.AMBER, A.AMBER_L),
       (A.TEAL, A.TEAL_L), (A.RED, A.RED_L)]

NUM = re.compile(r'^\(?-?[\d,]+(?:\.\d+)?\)?%?$')
YEARH = re.compile(r'^(?:year\s*)?(\d{1,2}|20\d\d|20X\d)$', re.I)
# A second column that opens on one of these is an action, so the first
# column is a stage of a process rather than a category.
ACTION = re.compile(r'^(include|decide|enter|show|explain|record|measure|'
                    r'recognize|recognise|present|disclose|add|deduct|'
                    r'compute|calculate|spread|allocate|report|classify|'
                    r'transfer|remove|write|accrue|capitalize|capitalise|'
                    r'expense|debit|credit|post|close|adjust|test|compare|'
                    r'apply|multiply|divide|subtract|collect|deliver|'
                    r'issue|pay|receive|sell|buy)\b', re.I)
ORDINAL = re.compile(r'^(\d+[.)]?|step\s*\d|stage\s*\d|first|second|third|'
                     r'fourth|fifth)\b', re.I)
# Headings that name two sides of a comparison.
SIDES = re.compile(r'\b(GAAP|IFRS|IAS|debit|credit|cash basis|accrual|'
                   r'FIFO|LIFO|current|noncurrent|gross|net|operating|'
                   r'finance|lessee|lessor|before|after|yes|no)\b', re.I)


def _num(x):
    """The value of a cell, or None if it is not a number."""
    x = clean(x)
    if not NUM.match(x):
        return None
    neg = x.startswith('(') and x.endswith(')')
    x = x.strip('()%').replace(',', '')
    try:
        v = float(x)
    except ValueError:
        return None
    return -v if neg else v


def _numcol(body, j):
    vals = [_num(r[j]) for r in body if clean(r[j])]
    return len(vals) >= 3 and all(v is not None for v in vals)


# ------------------------------------------------------------------ detectors
def as_graph(head, body):
    """A series over named periods, in either orientation.

    A schedule can be written with the periods across the top or down the
    side, and the chapter does both. Looking only across the header found
    nothing in the whole of book 1; looking down the first column as well
    finds the bond amortisation schedule in chapter 9 and the depreciation
    schedules, which are exactly the tables a line is the right picture
    for.
    """
    # periods across the header
    cols = [j for j in range(1, len(head)) if YEARH.match(clean(head[j]))]
    if len(cols) >= 3:
        rows = [(clean(r[0]), [_num(r[j]) for j in cols]) for r in body
                if clean(r[0])
                and all(_num(r[j]) is not None for j in cols)]
        if 1 <= len(rows) <= 4:
            return dict(periods=[clean(head[j]) for j in cols], rows=rows)
    # periods down the first column
    per = [clean(r[0]) for r in body]
    if len(per) >= 3 and sum(1 for x in per if YEARH.match(x)) >= 3:
        keep = [j for j in range(1, len(head)) if _numcol(body, j)]
        if 1 <= len(keep) <= 4:
            rows = [(clean(head[j]),
                     [_num(r[j]) for r in body]) for j in keep]
            rows = [(nm, v) for nm, v in rows
                    if all(x is not None for x in v)]
            if rows:
                return dict(periods=per, rows=rows)
    return None


INDEXY = re.compile(r'^(chapter|row|#|no|number|step|line|item|rank|'
                    r'order|section)$', re.I)
DATEY = re.compile(r'^(date|day|month|period|when|time of)$', re.I)


def _is_index(head_j, vals):
    """Is this column a position rather than a quantity?

    A column of 2, 3, 4, 5 under the heading "Chapter" is a cross-reference.
    Drawn as bars it says that chapter 5 is more than twice chapter 2,
    which is not a fact about anything.
    """
    if INDEXY.match(clean(head_j)):
        return True
    ints = sorted(set(int(v) for v in vals if v == int(v)))
    return (len(ints) == len(vals) and len(ints) >= 3
            and max(ints) <= 20 and ints == list(range(ints[0],
                                                       ints[0] + len(ints))))


def as_chart(head, body):
    """Magnitudes to compare: one numeric column against named rows."""
    for j in range(1, len(head)):
        if not _numcol(body, j):
            continue
        allv = [_num(r[j]) for r in body if clean(r[j])]
        if _is_index(head[j], allv):
            continue
        # The labels have to name things, not count them. The worked
        # journal is numbered 1 to 6 down its first column, and bars
        # labelled "1", "2", "3" say nothing about accounting.
        labs = [_num(r[0]) for r in body if clean(r[0])]
        if INDEXY.match(clean(head[0])) or (
                labs and all(v is not None for v in labs)):
            continue
        rows = [(clean(r[0]), _num(r[j])) for r in body
                if clean(r[0]) and _num(r[j]) is not None]
        rows = [(a, v) for a, v in rows if v > 0 and len(a) <= 34]
        if not 3 <= len(rows) <= 10:
            continue
        top = max(v for _a, v in rows)
        bot = min(v for _a, v in rows)
        # Two orders of magnitude and the small bars are invisible, so the
        # picture stops carrying the comparison it exists to carry.
        if top / max(1.0, bot) > 60:
            continue
        return dict(col=clean(head[j]), rows=rows)
    return None


def as_tree(head, body):
    """A classification: one column holding a few repeated values."""
    best = None
    for j in range(1, len(head)):
        vals = [clean(r[j]) for r in body]
        uniq = [x for x in dict.fromkeys(vals) if x]
        # Five groups is still a classification — the five element types
        # are exactly that, and capping at four threw the table away.
        if not 2 <= len(uniq) <= 5 or len(body) < 4:
            continue
        if any(len(x) > 30 for x in uniq):
            continue
        members = [(v, [clean(r[0]) for r in body if clean(r[j]) == v
                        and clean(r[0])]) for v in uniq]
        if any(len(m) < 1 for _v, m in members):
            continue
        # Most groups have to hold more than one thing. A column of dates
        # has a "group" per date holding one row each, which is an index
        # wearing a classification's clothes: the worked journal was being
        # drawn as a tree of Jan 2, Jan 5, Jan 10.
        if sum(1 for _v, m in members
               if len(m) >= 2) < max(1, len(members) // 2):
            continue
        if DATEY.match(clean(head[j])):
            continue
        if any(len(x) > 56 for _v, m in members for x in m):
            continue
        score = sum(len(m) for _v, m in members)
        if best is None or score > best[0]:
            best = (score, dict(root=clean(head[j]), groups=members))
    return best[1] if best else None


def as_flow(head, body):
    """A sequence: a stage against what happens at it."""
    n = len(body)
    if not 3 <= n <= 7:
        return None
    firsts = [clean(r[0]) for r in body]
    if any(not f or len(f) > 34 for f in firsts):
        return None
    if len(set(firsts)) != n:
        return None
    acts = [clean(r[1]) for r in body] if len(head) > 1 else []
    ordinal = sum(1 for f in firsts if ORDINAL.match(f)) >= 3
    verby = acts and sum(1 for a in acts if ACTION.match(a)) >= max(2, n - 1)
    if not (ordinal or verby):
        return None
    return dict(steps=[(firsts[i], (acts[i] if acts else '')[:72])
                       for i in range(n)])


def as_contrast(head, body):
    """Two sides set against each other, row by row.

    Usually a label column and two sides. A table of two columns whose own
    headings name the sides is the same thing without the labels — which
    is how the chapter writes its GAAP-against-IFRS boxes — so it is read
    as a contrast with the rows numbered instead of named.
    """
    if len(head) == 2 and 3 <= len(body) <= 8:
        h0, h1 = _side(head[0]), _side(head[1])
        if SIDES.search(h0) and SIDES.search(h1):
            rows = [('', clean(r[0]), clean(r[1])) for r in body
                    if clean(r[0]) and clean(r[1])]
            if len(rows) >= 3 and not any(len(x) > 84 for r in rows
                                          for x in r):
                return dict(left=h0, right=h1, rows=rows)
    if len(head) != 3 or not 3 <= len(body) <= 8:
        return None
    h1, h2 = clean(head[1]), clean(head[2])
    if not (SIDES.search(h1) and SIDES.search(h2)):
        return None
    rows = [(clean(r[0]), clean(r[1]), clean(r[2])) for r in body
            if clean(r[0]) and clean(r[1]) and clean(r[2])]
    if len(rows) < 3:
        return None
    if any(len(x) > 64 for r in rows for x in r):
        return None
    return dict(left=_side(h1), right=_side(h2), rows=rows)


def _side(h):
    return clean(h).strip(u'●■•▪- ').rstrip(':')


DETECT = [('graph', as_graph), ('flow', as_flow), ('contrast', as_contrast),
          ('chart', as_chart), ('tree', as_tree)]


def shapes(head, body):
    """Every form this table could honestly take, richest first.

    Order matters: a table that is both a series and a set of magnitudes is
    better drawn as a series, because the series says everything the bars
    do and the trend as well.
    """
    out = []
    for name, fn in DETECT:
        got = fn(head, body)
        if got:
            out.append((name, got))
    return out


# ------------------------------------------------------------------ builders
# A figure gives up this share of its labels. Below a third there is nothing
# to do; above a half the picture stops carrying the reader to the answers.
SHARE = 0.40


def _pick(items, seed, share=SHARE, nomax=None, noadjacent=False):
    """Which of these labels to take out.

    Never all of them: what is left is how a reader works out what is
    missing. With noadjacent, no two neighbours go — in a sequence the
    stage before and the stage after are what place the one between.
    """
    n = len(items)
    if n < 2:
        return []
    want = max(1, min(nomax or n - 1, int(round(n * share))))
    want = min(want, n - 1)
    out = []
    for i in shuffled(list(range(n)), seed):
        if len(out) >= want:
            break
        if noadjacent and any(abs(i - j) < 2 for j in out):
            continue
        out.append(i)
    return sorted(out)


def _slotnum(c, x, y, w, h, n):
    """A writing slot with its gap number inside it.

    A figure is an image, so its gaps cannot be numbered from the margin
    the way a paragraph's can. The number is drawn in the slot.
    """
    c.slot(x, y, w, h)
    c.text(x + w / 2.0, y + h / 2.0 + 5, '(%d)' % n, 15, A.GREY_L, True)
    return h


def _bank(answers, spares, seed):
    """The word list: the answers plus one that is not among them."""
    low = [a.lower() for a in answers]
    extra = next((s for s in spares
                  if s.lower() not in low
                  and not any(s.lower() in a or a in s.lower() for a in low)),
                 None)
    return shuffled(list(answers) + ([extra] if extra else []), seed)


def _fig(kind, title, c, answers, bank, note=''):
    png, w, h = c.render()
    return dict(kind='fig', form=kind, title=title, png=png, w=w, h=h,
                answers=answers, bank=bank, note=note)


def flowfig(title, steps, seed, first, spares=()):
    """A sequence, with some of its stages missing."""
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 22
    gaps = _pick(steps, seed, nomax=max(1, len(steps) // 2),
                 noadjacent=True)
    n = len(steps)
    gap = 14
    bw = (W - 56 - gap * (n - 1)) / float(n)
    # Every card is the height of the tallest, so the arrows line up and a
    # gapped card is not obviously the short one.
    hh = 84.0
    for nm, sub in steps:
        th = A.wrapped_h(nm, bw - 18, 15, bold=True)
        bh = A.wrapped_h(sub, bw - 18, 12) + 4 if sub else 0
        hh = max(hh, th + bh + 18)
    h, answers, k = hh, [], first
    for i, (nm, sub) in enumerate(steps):
        x = 28 + i * (bw + gap)
        if i in gaps:
            # Only the NAME goes. Blanking the whole card took the
            # description with it, and the description is the clue: a
            # reader who sees "enter the item in the accounts" can write
            # "record", but a reader who sees an empty box has only the
            # position in the sequence to go on.
            c.rect(x, y, bw, hh, A.PAPER, A.INDIGO, 2, 7)
            c.slot(x + 8, y + 8, bw - 16, 26)
            c.text(x + bw / 2.0, y + 26, '(%d)' % k, 15, A.GREY_L, True)
            if sub:
                c.wrapped(x + bw / 2.0, y + 50, sub, bw - 18, 12, A.GREY)
            answers.append(nm)
            k += 1
        else:
            c.rect(x, y, bw, hh, A.SOFT, A.INDIGO, 2, 7)
            yy = c.wrapped(x + bw / 2.0, y + 22, nm, bw - 18, 15, A.INDIGO,
                           True)
            if sub:
                c.wrapped(x + bw / 2.0, yy + 16, sub, bw - 18, 12, A.GREY)
        c._b(y + hh)
    for i in range(n - 1):
        x = 28 + i * (bw + gap)
        c.arrow(x + bw + 1, y + h / 2.0, x + bw + gap - 1, y + h / 2.0,
                A.INDIGO, 2.2, 7)
    return _fig('flow', title, c, answers, _bank(answers, spares, seed + 1),
                'Each stage leads to the next.')


def treefig(title, root, groups, seed, first, spares=()):
    """A classification, with some members missing from their group.

    A whole group is never emptied: a group with no members left shows
    nothing about what belongs in it.
    """
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 8
    y = c.text(W / 2.0, y + 16, 'grouped by %s' % root.lower(), 15,
               A.GREY, False) + 18
    n = len(groups)
    gap = 12
    bw = (W - 48 - gap * (n - 1)) / float(n)
    answers, k, bot = [], first, y
    for gi, (gname, members) in enumerate(groups):
        x = 24 + gi * (bw + gap)
        col, fill = PAL[gi % 4]
        hh = c.card(x, y, bw, gname, None, fill, col, 2.2, tsz=15, minh=40,
                    pad=8)
        yy = y + hh + 8
        mine = _pick(members, seed + 7 * gi, nomax=max(1, len(members) - 1))
        for mi, m in enumerate(members):
            if mi in mine:
                _slotnum(c, x, yy, bw, 30, k)
                answers.append(m)
                k += 1
                yy += 35
            else:
                yy += c.card(x, yy, bw, m, None, A.PAPER, A.GREY_L, 1.5,
                             tsz=13, tcol=A.INK, minh=28, pad=5) + 5
        bot = max(bot, yy)
    return _fig('tree', title, c, answers, _bank(answers, spares, seed + 1),
                'Every item belongs to exactly one group.')


def chartfig(title, col, rows, seed, first, spares=()):
    """Magnitudes as bars, drawn to scale, with some labels missing.

    The bar heights are never gaps. They are drawn from the figures the
    chapter states, and their length is the clue: reading the length and
    naming what it belongs to is the exercise.
    """
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 8
    y = c.text(W / 2.0, y + 16, col, 15, A.GREY) + 20
    top = max(v for _a, v in rows)
    LAB, BARW = 230.0, W - 230.0 - 110.0
    gaps = _pick(rows, seed, nomax=max(1, len(rows) // 2))
    answers, k = [], first
    for i, (name, v) in enumerate(rows):
        yy = y + i * 40
        if i in gaps:
            _slotnum(c, 24, yy, LAB - 34, 30, k)
            answers.append(name)
            k += 1
        else:
            c.rect(24, yy, LAB - 34, 30, A.SOFT, A.GREY_L, 1.2, 5)
            c.centred(24 + (LAB - 34) / 2.0, yy + 15, name, LAB - 48, 14,
                      A.INK)
        bw = max(3.0, BARW * (v / float(top)))
        c.rect(LAB, yy + 4, bw, 22, A.INDIGO_L, A.INDIGO, 1.6, 3)
        c.text(LAB + bw + 8, yy + 20, '{:,.0f}'.format(v), 14, A.INDIGO,
               True, 'start')
    c.line(LAB, y - 6, LAB, y + len(rows) * 40 - 6, A.GREY_L, 1.4)
    return _fig('chart', title, c, answers, _bank(answers, spares, seed + 1),
                'The bars are drawn to scale.')


def graphfig(title, periods, rows, seed, first, spares=()):
    """A quantity over periods, with some period labels missing."""
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 24
    PH, PW = 200.0, W - 150.0
    x0, y0 = 90.0, y
    vals = [v for _nm, s in rows for v in s]
    hi, lo = max(vals), min(min(vals), 0)
    span = max(1.0, hi - lo)
    c.line(x0, y0, x0, y0 + PH, A.GREY_L, 1.6)
    c.line(x0, y0 + PH, x0 + PW, y0 + PH, A.GREY_L, 1.6)
    n = len(periods)
    step = PW / float(max(1, n - 1))
    for si, (nm, series) in enumerate(rows):
        col = [A.INDIGO, A.AMBER, A.TEAL, A.RED][si % 4]
        pts = [(x0 + i * step, y0 + PH - PH * ((v - lo) / span))
               for i, v in enumerate(series)]
        for i in range(len(pts) - 1):
            c.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1],
                   col, 2.4)
        for px, py in pts:
            c.circle(px, py, 4.5, col, A.PAPER, 1.5)
        c.text(x0 + PW + 6, pts[-1][1] + 5, nm[:18], 13, col, True, 'start')
    gaps = _pick(periods, seed, nomax=max(1, n // 2))
    answers, k = [], first
    for i, p in enumerate(periods):
        px = x0 + i * step
        if i in gaps:
            _slotnum(c, px - 38, y0 + PH + 10, 76, 26, k)
            answers.append(p)
            k += 1
        else:
            c.text(px, y0 + PH + 28, p, 14, A.INK, True)
    c.text(x0 - 10, y0 + 6, '{:,.0f}'.format(hi), 13, A.GREY, False, 'end')
    c.text(x0 - 10, y0 + PH, '{:,.0f}'.format(lo), 13, A.GREY, False, 'end')
    c.rect(0, y0 + PH + 44, 1, 1, 'none')
    return _fig('graph', title, c, answers, _bank(answers, spares, seed + 1),
                'Read the periods off the line.')


def contrastfig(title, left, right, rows, seed, first, spares=()):
    """Two sides, row by row, with some cells missing from each."""
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 22
    LW = 200.0
    CW = (W - 48 - LW - 16) / 2.0
    c.rect(24 + LW + 8, y, CW, 34, A.INDIGO_L, A.INDIGO, 2, 5)
    c.centred(24 + LW + 8 + CW / 2.0, y + 17, left, CW - 16, 15, A.INDIGO,
              True)
    c.rect(24 + LW + 16 + CW, y, CW, 34, A.AMBER_L, A.AMBER, 2, 5)
    c.centred(24 + LW + 16 + CW + CW / 2.0, y + 17, right, CW - 16, 15,
              A.AMBER, True)
    y += 42
    cells = [(i, s) for i in range(len(rows)) for s in (0, 1)]
    gaps = set(cells[g] for g in _pick(cells, seed,
                                       nomax=max(1, len(cells) // 2)))
    answers, k = [], first
    for i, (lab, a, b) in enumerate(rows):
        hs = []
        for s, txt in ((0, a), (1, b)):
            x = 24 + LW + 8 + s * (CW + 8)
            if (i, s) in gaps:
                hs.append(('slot', x, txt))
            else:
                hs.append(('card', x, txt))
        hh = max(A.wrapped_h(t, CW - 20, 14) + 20 for _m, _x, t in hs)
        hh = max(34, hh)
        c.rect(24, y, LW, hh, A.SOFT, A.GREY_L, 1.4, 5)
        c.centred(24 + LW / 2.0, y + hh / 2.0, lab, LW - 16, 14, A.INK, True)
        for mode, x, txt in hs:
            if mode == 'slot':
                _slotnum(c, x, y, CW, hh, k)
                answers.append(txt)
                k += 1
            else:
                c.rect(x, y, CW, hh, A.PAPER, A.GREY_L, 1.3, 5)
                c.centred(x + CW / 2.0, y + hh / 2.0, txt, CW - 20, 14, A.INK)
        y += hh + 6
    return _fig('contrast', title, c, answers,
                _bank(answers, spares, seed + 1),
                'The two sides differ only where the rows say.')


def webfig(title, subject, pairs, seed, first, spares=()):
    """The section's terms around its subject, some of them missing."""
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 20
    c.rect(W / 2.0 - 150, y, 300, 40, A.INDIGO_L, A.INDIGO, 2.4, 7)
    c.centred(W / 2.0, y + 20, subject, 280, 16, A.INDIGO, True)
    y += 48
    TW_, DW = 210.0, W - 48 - 210.0 - 16
    gaps = _pick(pairs, seed, nomax=max(1, len(pairs) // 2))
    answers, k = [], first
    # A spine down the left with a stub to each term. Drawing a line from
    # the hub to every term instead sent them diagonally across the boxes.
    spine = 14.0
    c.line(W / 2.0, y - 10, spine, y - 10, A.INDIGO_M, 1.4)
    rowtops = []
    for i, (term, dfn) in enumerate(pairs):
        hh = max(34, A.wrapped_h(dfn, DW - 20, 14) + 20,
                 A.wrapped_h(term, TW_ - 16, 15, bold=True) + 20)
        rowtops.append((y, hh))
        c.line(spine, y + hh / 2.0, 24, y + hh / 2.0, A.INDIGO_M, 1.4)
        if i in gaps:
            _slotnum(c, 24, y, TW_, hh, k)
            answers.append(term)
            k += 1
        else:
            c.rect(24, y, TW_, hh, A.SOFT, A.INDIGO, 1.8, 5)
            c.centred(24 + TW_ / 2.0, y + hh / 2.0, term, TW_ - 16, 15,
                      A.INDIGO, True)
        c.rect(24 + TW_ + 16, y, DW, hh, A.PAPER, A.GREY_L, 1.3, 5)
        c.centred(24 + TW_ + 16 + DW / 2.0, y + hh / 2.0, dfn, DW - 20, 14,
                  A.INK)
        y += hh + 7
    if rowtops:
        c.line(spine, rowtops[0][0] - 10, spine,
               rowtops[-1][0] + rowtops[-1][1] / 2.0, A.INDIGO_M, 1.4)
    return _fig('web', title, c, answers, _bank(answers, spares, seed + 1),
                'Each term sits against what it means.')


BUILD = {'flow': flowfig, 'tree': treefig, 'chart': chartfig,
         'graph': graphfig, 'contrast': contrastfig, 'web': webfig}
