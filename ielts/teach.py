# -*- coding: utf-8 -*-
"""The pedagogic figure family: visuals whose job is not their own data.

charts.py draws Task 1 data. diagrams.py draws processes, devices and maps.
Both are good and both answer the same question - what do these numbers or
parts look like. Nothing in the series answered the question a language
coursebook lives by: what does this picture TEACH.

The benchmark scored our visual system 10 of 24 with the whole 10 in data
charts, and four zeros on topic activation, vocabulary visuals, text
structure, and a figure declaring its purpose. These six are the first six
of the nineteen in IELTS_Visual_System.md, chosen because each one closes a
measured zero:

  scene       -> activation; the labelled-situation figure that replaces the
                 photograph we cannot license, and pre-teaches while it warms
  puzzle      -> curiosity; one counterintuitive number, circled, with the
                 question it raises
  field       -> a semantic field, so a word arrives with its neighbours
  family      -> word formation with stress marked, which Reading gaps test
                 directly and which we scored 0 on
  cline       -> strength and degree: hedging, frequency, formality
  collocation -> what actually goes with a word, grouped by part of speech

Every label goes through the measured fitting layer, so gate 6 and gate 8
cover these exactly as they cover everything else.
"""
from _base import (render, T, R, C, L, P, TFIT, TBLOCK, tw, icon, W,
                   PAPER, SOFT, CREAM, INDIGO, INDIGO_D, PERI, PERI_L, BLUE,
                   AMBER, TEAL, PLUM, GREEN, RED, INK, GREY, GREY_L, RULE)

BRANCH_COLOURS = [BLUE, TEAL, PLUM, AMBER, GREEN]


def _head(g, title, sub, col=INDIGO, h=54):
    """The coloured cap every figure in this family wears."""
    g.append(R(0, 0, W, h, col, rx=12))
    g.append(R(0, h - 14, W, 14, col))
    g.append(TFIT(28, 35, title, 20, W - 300, PAPER, bold=True, anchor='start'))
    if sub:
        g.append(TFIT(W - 28, 34, sub, 15, 260, PERI_L, anchor='end'))
    return h


def _note(g, y, s, col=GREY):
    if not s:
        return 0
    g.append(TFIT(28, y, s, 15, W - 56, col, anchor='start', italic=True))
    return 26


# ------------------------------------------------------------------ scene
def scene(title, cells, bank, instr='', note=''):
    """A situation with eight things in it to name, and a word bank.

    cells = [(icon name, answer), ...]  - the answer is not printed; it is
    what the answer key holds, and what makes this an exercise rather than a
    picture. Two rows of four, each cell a numbered icon over a ruled blank.

    This figure is the one substitution this series makes for a photograph.
    A photograph activates a topic; it does not pre-teach a word. Eight
    numbered things and a bank do both, in the two minutes before a learner
    meets a 780-word passage that assumes all eight.
    """
    cols, cw, pad = 4, (W - 56 - 3 * 18) / 4.0, 28
    rows = (len(cells) + cols - 1) // cols
    ch = 132
    # how many lines the word bank will take, measured before anything is
    # drawn, because the figure's height is fixed at creation
    bx, blines = pad + 18, 1
    for wd in bank:
        pw = tw(wd, 15, False) + 22
        if bx + pw > W - pad - 18:
            bx, blines = pad + 18, blines + 1
        bx += pw + 8
    bankh = 44 + 30 * (blines - 1) + 48
    h = (54 + (34 if instr else 10) + rows * (ch + 16) + bankh
         + (26 if note else 0) + 4)
    g = [R(0, 0, W, h, PAPER, INDIGO, 2, 12)]
    y = _head(g, title, 'Name the eight things')
    if instr:
        y += 30
        g.append(TFIT(28, y, instr, 16, W - 56, GREY, anchor='start'))
        y += 8
    else:
        y += 10
    for i, (ic, _ans) in enumerate(cells):
        r, c = divmod(i, cols)
        x = pad + c * (cw + 18)
        top = y + r * (ch + 16)
        g.append(R(x, top, cw, ch, SOFT, RULE, 1.4, 10))
        g.append(C(x + 20, top + 20, 14, INDIGO))
        g.append(T(x + 20, top + 25, str(i + 1), 13, PAPER, bold=True))
        g.append(icon(ic, x + cw / 2.0, top + 62, 0.9))
        g.append(L(x + 16, top + ch - 22, x + cw - 16, top + ch - 22, GREY, 1.6))
    y += rows * (ch + 16) + 6
    # The bank is pills, not a joined string: SVG collapses runs of spaces,
    # so a '   '.join prints as single spaces and ten words read as one.
    # Each pill is measured, and the row wraps when the next one will not fit.
    px, py, rowy = pad + 18, y + 34, []
    pills = []
    for wd in bank:
        pw = tw(wd, 15, False) + 22
        if px + pw > W - pad - 18:
            px, py = pad + 18, py + 30
        pills.append((px, py, pw, wd))
        px += pw + 8
    bankh2 = (py - y) + 44
    g.append(R(pad, y, W - 2 * pad, bankh2, CREAM, INDIGO, 1.4, 8))
    g.append(TFIT(pad + 16, y + 22, 'WORD BANK', 13, 110, INDIGO,
                  bold=True, anchor='start'))
    for x, yy, pw, wd in pills:
        g.append(R(x, yy, pw, 24, PAPER, PERI, 1.2, 12))
        g.append(TFIT(x + pw / 2, yy + 17, wd, 15, pw - 14, INK,
                      anchor='middle'))
    y += bankh2 + 14
    _note(g, y + 10, note)
    return render(''.join(g), W, h, PAPER)


# ----------------------------------------------------------------- puzzle
def puzzle(title, question, bars, mark, ylab='', note=''):
    """One counterintuitive number, circled, with the question it raises.

    bars = [(label, value), ...]; mark = the index of the odd one. The ring
    and the question are the whole figure: a learner who wants to know why
    reads the passage differently from one who has been told to read it.
    """
    h = 356 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, AMBER, 2, 12)]
    y = _head(g, title, '', AMBER)
    x0, x1 = 92, W - 48
    y0, y1 = y + 44, h - 118 - (26 if note else 0)
    top = max(v for _, v in bars) * 1.18 or 1.0
    g.append(L(x0, y1, x1, y1, GREY_L, 2))
    if ylab:
        g.append(TFIT(x0 - 10, y0 - 14, ylab, 14, 150, GREY, anchor='start'))
    slot = (x1 - x0) / float(len(bars))
    bw = min(64.0, slot - 24)
    for i, (lab, v) in enumerate(bars):
        cx = x0 + slot * (i + 0.5)
        bh = (v / top) * (y1 - y0)
        hot = (i == mark)
        g.append(R(cx - bw / 2, y1 - bh, bw, bh, AMBER if hot else PERI, rx=4))
        g.append(TFIT(cx, y1 - bh - 10, ('%g' % v), 16,
                      slot - 8, INK if hot else GREY,
                      bold=hot, anchor='middle'))
        g.append(TFIT(cx, y1 + 24, lab, 15, slot - 6, GREY, anchor='middle'))
        if hot:
            # a ring round the bar AND its number. A circle centred on the
            # bar's middle clipped the top off a tall bar and left the
            # number outside the thing it was marking.
            g.append(R(cx - bw / 2 - 15, y1 - bh - 32, bw + 30, bh + 34,
                       'none', RED, 2.4, 14))
    g.append(TFIT(28, h - 46 - (26 if note else 0), question, 18, W - 56,
                  INDIGO_D, bold=True, anchor='start'))
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------------ field
def field(centre, branches, sub='', note=''):
    """A semantic field: one centre, three to five branches, words under each.

    branches = [(branch name, [words...]), ...]

    A word learned alone is a word learned once. The field is what makes
    `eligible` arrive with `criteria`, `waive` and `means-tested` attached,
    which is also how it comes back in the passage.
    """
    n = len(branches)
    deep = max(len(ws) for _, ws in branches)
    colw = (W - 56 - (n - 1) * 14) / float(n)
    h = 54 + 96 + 44 + deep * 30 + 24 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, TEAL, 2, 12)]
    y = _head(g, 'Word field', sub or centre, TEAL)
    cy = y + 46
    pill = min(W - 220, tw(centre, 24, True) + 72)
    g.append(R((W - pill) / 2, cy - 26, pill, 52, TEAL, rx=26))
    g.append(TFIT(W / 2, cy + 8, centre, 24, pill - 40, PAPER,
                  bold=True, anchor='middle'))
    ytop = cy + 50
    for i, (name, words) in enumerate(branches):
        col = BRANCH_COLOURS[i % len(BRANCH_COLOURS)]
        x = 28 + i * (colw + 14)
        g.append(P('M%g %g L%g %g' % (W / 2, cy + 26, x + colw / 2, ytop),
                   'none', col, 1.8))
        g.append(R(x, ytop, colw, 34, col, rx=8))
        g.append(TFIT(x + colw / 2, ytop + 23, name, 16, colw - 18, PAPER,
                      bold=True, anchor='middle'))
        wy = ytop + 34 + 26
        for wd in words:
            g.append(C(x + 12, wy - 5, 3, col))
            g.append(TFIT(x + 24, wy, wd, 16, colw - 34, INK, anchor='start'))
            wy += 30
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ----------------------------------------------------------------- family
FAMILY_COLS = ('Verb', 'Noun · thing', 'Noun · person', 'Adjective', 'Adverb')


def _syll(cell):
    """A cell is 'word', or ('syl-la-ble', stressed index starting at 1)."""
    if isinstance(cell, (list, tuple)):
        parts = str(cell[0]).split('-')
        return ''.join(parts), parts, int(cell[1])
    return str(cell), [str(cell)], 0


def family(rows, sub='', note='', cols=FAMILY_COLS):
    """Word formation, with the stressed syllable marked.

    rows = [(verb, noun, person, adjective, adverb), ...] where any cell may
    be '' for a gap in the family, or ('a-na-lyse', 2) to mark stress.

    This closes benchmark factor 25, scored 0 for us and 3 for Cambridge, and
    it is directly tested: a Reading gap wants `analysis` where the passage
    said `analyse`, and a learner who has never seen the family guesses. The
    stress dot is not decoration either - it is the difference between being
    understood in Speaking and not.
    """
    colw = (W - 48) / float(len(cols))
    rowh = 44
    h = 54 + 40 + rowh * len(rows) + 22 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, PLUM, 2, 12)]
    y = _head(g, 'Word family', sub or 'the dot marks the stress', PLUM)
    hy = y + 32
    for i, c in enumerate(cols):
        g.append(TFIT(24 + i * colw + colw / 2, hy, c, 14, colw - 12, PLUM,
                      bold=True, anchor='middle'))
    g.append(L(24, hy + 12, W - 24, hy + 12, PLUM, 1.6))
    ry = hy + 12
    for r, row in enumerate(rows):
        if r % 2:
            g.append(R(24, ry, W - 48, rowh, SOFT))
        for i, cell in enumerate(row[:len(cols)]):
            cx = 24 + i * colw + colw / 2
            if not cell:
                g.append(T(cx, ry + rowh / 2 + 6, '—', 17, GREY_L))
                continue
            word, parts, st = _syll(cell)
            g.append(TFIT(cx, ry + rowh / 2 + 7, word, 17, colw - 14, INK,
                          anchor='middle'))
            if st:
                # the dot sits over the middle of the stressed syllable,
                # measured, not guessed
                full = tw(word, 17, False)
                before = tw(''.join(parts[:st - 1]), 17, False)
                mid = tw(parts[st - 1], 17, False) / 2.0
                g.append(C(cx - full / 2.0 + before + mid,
                           ry + rowh / 2 - 13, 3.2, PLUM))
        ry += rowh
    g.append(L(24, ry, W - 24, ry, RULE, 1.2))
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------------ cline
def cline(title, left, right, items, sub='', note=''):
    """A scale: hedging, frequency, formality, certainty.

    items = [(label, 0.0 at the left pole .. 1.0 at the right), ...]

    `may`, `might`, `could`, `is likely to`, `will` are not synonyms, and a
    band-6 script that treats them as synonyms is why Task 2 stalls. The
    cline is the only honest way to draw that, and labels alternate above
    and below the axis so none of them collides.
    """
    h = 232 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, BLUE, 2, 12)]
    y = _head(g, title, sub, BLUE)
    ax = y + 92
    x0, x1 = 120, W - 120
    g.append(L(x0, ax, x1, ax, BLUE, 3))
    g.append(P('M%g %g L%g %g L%g %g Z'
               % (x1, ax, x1 - 14, ax - 7, x1 - 14, ax + 7), BLUE))
    g.append(P('M%g %g L%g %g L%g %g Z'
               % (x0, ax, x0 + 14, ax - 7, x0 + 14, ax + 7), BLUE))
    g.append(TFIT(x0 - 14, ax + 6, left, 15, 96, GREY, anchor='end'))
    g.append(TFIT(x1 + 14, ax + 6, right, 15, 96, GREY, anchor='start'))
    for i, (lab, pos) in enumerate(items):
        x = x0 + 18 + (x1 - x0 - 36) * max(0.0, min(1.0, float(pos)))
        up = (i % 2 == 0)
        g.append(C(x, ax, 6.5, PAPER, BLUE, 2.6))
        ty = ax - 22 if up else ax + 34
        g.append(L(x, ax + (-9 if up else 9), x, ty + (8 if up else -16),
                   RULE, 1.4))
        wd = tw(lab, 16, False) + 18
        g.append(R(x - wd / 2, ty - 18 if up else ty - 16, wd, 26, SOFT,
                   BLUE, 1.2, 6))
        g.append(TFIT(x, ty if up else ty + 2, lab, 16, wd - 12, INK,
                      anchor='middle'))
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------ collocation
def collocation(node, groups, sub='', note=''):
    """What actually goes with a word, grouped by part of speech.

    groups = [(label, [collocates...]), ...] - two, three or four panels.

    `make research` is grammatical English that no examiner has ever read in
    a band-7 script. Collocation is not a refinement on vocabulary; below
    band 7 it is most of what Lexical Resource is measuring.
    """
    n = len(groups)
    colw = (W - 56 - (n - 1) * 16) / float(n)
    deep = max(len(ws) for _, ws in groups)
    h = 54 + 92 + 40 + deep * 28 + 22 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, GREEN, 2, 12)]
    y = _head(g, 'Words that go together', sub or node, GREEN)
    cy = y + 44
    pill = min(W - 260, tw(node, 23, True) + 64)
    g.append(R((W - pill) / 2, cy - 24, pill, 48, GREEN, rx=24))
    g.append(TFIT(W / 2, cy + 8, node, 23, pill - 36, PAPER,
                  bold=True, anchor='middle'))
    ytop = cy + 48
    for i, (lab, words) in enumerate(groups):
        x = 28 + i * (colw + 16)
        g.append(P('M%g %g L%g %g' % (W / 2, cy + 24, x + colw / 2, ytop),
                   'none', GREY_L, 1.6))
        g.append(R(x, ytop, colw, 32, SOFT, GREEN, 1.4, 8))
        g.append(TFIT(x + colw / 2, ytop + 22, lab, 15, colw - 16, GREEN,
                      bold=True, anchor='middle'))
        wy = ytop + 32 + 26
        for wd in words:
            g.append(TFIT(x + 10, wy, wd, 16, colw - 20, INK, anchor='start'))
            wy += 28
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)
