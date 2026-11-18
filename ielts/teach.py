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
from _base import (render, T, R, C, L, P, TFIT, TBLOCK, fit, tw, icon, W,
                   PAPER, SOFT, CREAM, INDIGO, INDIGO_D, PERI, PERI_L, BLUE,
                   AMBER, TEAL, PLUM, GREEN, RED, INK, GREY, GREY_L, RULE)

BRANCH_COLOURS = [BLUE, TEAL, PLUM, AMBER, GREEN]


def _head(g, title, sub, col=INDIGO, h=54):
    """The coloured cap every figure in this family wears."""
    g.append(R(0, 0, W, h, col, rx=12))
    g.append(R(0, h - 14, W, 14, col))
    g.append(TFIT(28, 35, title, 20, W - 380, PAPER, bold=True,
                  anchor='start'))
    if sub:
        g.append(TFIT(W - 28, 34, sub, 15, 300, PERI_L, anchor='end'))
    return h


def _block(g, x, y, text, size, max_w, lead, fill, maxlines,
           bold=False, anchor='start', italic=False):
    """Wrapped text, capped at a line count, appended as a string.

    TBLOCK returns (svg, lines, height) and its `lines` argument is a
    pre-wrapped list, not a maximum - so it is easy to append a tuple into
    an SVG list and easy to ask for two lines and get nine. This does the
    wrapping, caps it, and ellipsises what will not fit, so a figure's
    declared height is always the height it uses.
    """
    lns = fit(text, max_w, size, bold, False)
    if len(lns) > maxlines:
        lns = lns[:maxlines]
        # the ellipsis is ink too: drop words until the marked line fits,
        # or the gate finds a run 12px wider than the box it promised
        last = lns[-1].rstrip(' ,;')
        while last and tw(last + '…', size, bold, False) > max_w:
            last = last.rsplit(' ', 1)[0].rstrip(' ,;') if ' ' in last \
                else last[:-1]
        lns[-1] = last + '…'
    svg, n, used = TBLOCK(x, y, '', size, max_w, lead=lead, fill=fill,
                          bold=bold, anchor=anchor, italic=italic, lines=lns)
    g.append(svg)
    return used


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


# --------------------------------------------------------------- skeleton
FUNCTION_COLOURS = {'claim': INDIGO, 'evidence': BLUE, 'concession': AMBER,
                    'consequence': TEAL, 'definition': PLUM,
                    'example': GREEN, 'qualification': AMBER,
                    'counter-claim': RED, 'context': GREY,
                    'method': TEAL, 'result': BLUE, 'implication': PLUM}


def skeleton(title, paras, sub='', note=''):
    """What each paragraph DOES, which is not what it says.

    paras = [(letter, function, six-word gist), ...]

    Matching headings and matching information both test the same thing and
    neither is a vocabulary test: a paragraph can mention money three times
    and still be about access. The skeleton is the only way to make that
    visible before a learner has learned it the hard way, and benchmark
    factor 60 found that neither series draws one.
    """
    rowh = 46
    h = 54 + 34 + rowh * len(paras) + 20 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, INDIGO, 2, 12)]
    y = _head(g, title or 'What each paragraph does', sub, INDIGO)
    g.append(TFIT(84, y + 24, 'DOES', 12, 150, GREY, bold=True, anchor='start'))
    g.append(TFIT(290, y + 24, 'AND THE POINT IT MAKES', 12, 300, GREY,
                  bold=True, anchor='start'))
    ry = y + 34
    for letter, fn, gist in paras:
        col = FUNCTION_COLOURS.get(str(fn).lower(), GREY)
        g.append(R(28, ry + 5, 34, rowh - 12, SOFT, col, 1.6, 8))
        g.append(TFIT(45, ry + rowh / 2 + 6, str(letter), 17, 28, col,
                      bold=True, anchor='middle'))
        g.append(R(76, ry + 5, 192, rowh - 12, col, rx=8))
        g.append(TFIT(172, ry + rowh / 2 + 6, fn, 15, 178, PAPER,
                      bold=True, anchor='middle'))
        g.append(TFIT(286, ry + rowh / 2 + 6, gist, 17, W - 316, INK,
                      anchor='start'))
        ry += rowh
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ----------------------------------------------------------------- bridge
MOVE_COLOURS = {'synonym': BLUE, 'nominalisation': PLUM, 'voice': TEAL,
                'negation': RED, 'hypernym': GREEN, 'reformulation': AMBER,
                'antonym + negative': RED, 'word family': PLUM}


def bridge(pairs, sub='', note='', left='THE QUESTION SAYS',
           right='THE TEXT SAYS'):
    """Paraphrase, drawn.

    pairs = [(question language, text language, the move), ...]

    This is the most testable single skill in the exam - Reading gaps,
    Listening distractors, matching, and half of Lexical Resource in
    Writing - and the benchmark scored us 0 on it against Cambridge's 3.
    Naming the move is what turns a lucky match into a procedure.
    """
    rowh = 54
    h = 54 + 36 + rowh * len(pairs) + 20 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, PLUM, 2, 12)]
    y = _head(g, 'Paraphrase bridge', sub, PLUM)
    cw = 330
    g.append(TFIT(28, y + 26, left, 12, cw, GREY, bold=True, anchor='start'))
    g.append(TFIT(W - 28, y + 26, right, 12, cw, GREY, bold=True,
                  anchor='end'))
    ry = y + 36
    for q, t, move in pairs:
        col = MOVE_COLOURS.get(str(move).lower(), GREY)
        g.append(R(28, ry + 4, cw, rowh - 12, SOFT, PERI, 1.2, 8))
        g.append(TFIT(28 + cw / 2, ry + rowh / 2 + 5, q, 16, cw - 20, INK,
                      anchor='middle'))
        g.append(R(W - 28 - cw, ry + 4, cw, rowh - 12, CREAM, col, 1.2, 8))
        g.append(TFIT(W - 28 - cw / 2, ry + rowh / 2 + 5, t, 16, cw - 20,
                      INK, anchor='middle'))
        mx0, mx1 = 28 + cw + 6, W - 28 - cw - 6
        my = ry + rowh / 2 - 4
        g.append(L(mx0, my, mx1 - 10, my, col, 2))
        g.append(P('M%g %g L%g %g L%g %g Z'
                   % (mx1, my, mx1 - 10, my - 5, mx1 - 10, my + 5), col))
        g.append(TFIT((mx0 + mx1) / 2, my + 20, move, 12,
                      mx1 - mx0 - 4, col, bold=True, anchor='middle'))
        ry += rowh
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# --------------------------------------------------------------- signpost
def signpost(markers, sub='', note='', title='Where the text turns'):
    """A passage reduced to its discourse markers, in order.

    markers = [(the marker, what it signals), ...]

    A learner who can see the turns can predict the answer's neighbourhood
    before reading the sentence. Stripping everything but the markers is
    the fastest way to show that the turns were always there.
    """
    n = len(markers)
    colw = (W - 56 - (n - 1) * 10) / float(n)
    h = 54 + 128 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, AMBER, 2, 12)]
    y = _head(g, title, sub, AMBER)
    track = y + 48
    g.append(L(28, track, W - 28, track, PERI, 3))
    for i, (mk, means) in enumerate(markers):
        x = 28 + i * (colw + 10)
        g.append(C(x + colw / 2, track, 7, PAPER, AMBER, 2.6))
        g.append(R(x, track - 40, colw, 28, AMBER, rx=7))
        g.append(TFIT(x + colw / 2, track - 21, mk, 15, colw - 12, PAPER,
                      bold=True, anchor='middle'))
        _block(g, x + colw / 2, track + 26, means, 14, colw - 6, 17,
               GREY, 3, anchor='middle')
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ---------------------------------------------------------------- anatomy
def anatomy(qtype, stem, options, answer, why, trap, sub='', note=''):
    """One worked question with the trap marked and named.

    options = ['A ...', 'B ...', ...]; answer = the index that is right;
    why = one line on why it is right; trap = (index, what the trap is).

    Every published IELTS book sets this question type. Almost none takes
    one apart. gate12 requires one per question type per volume, which is
    eleven reading types and six listening ones, so nothing we test is
    untaught.
    """
    rowh = 40
    h = (54 + 74 + rowh * len(options) + 124 + (26 if note else 0))
    g = [R(0, 0, W, h, PAPER, RED, 2, 12)]
    y = _head(g, 'Question anatomy · %s' % qtype, sub, RED)
    g.append(R(28, y + 16, W - 56, 44, SOFT, PERI, 1.2, 8))
    g.append(TFIT(44, y + 44, stem, 17, W - 88, INK, anchor='start'))
    ry = y + 74
    ti, twhat = trap if trap else (None, '')
    for i, opt in enumerate(options):
        # the letter is already in the disc; an option written 'A  The cost'
        # would otherwise print its letter twice
        lead = chr(65 + i)
        for pre in (lead + '  ', lead + ' ', lead + ') ', lead + '. ',
                    lead + ')', lead + '.'):
            if str(opt).startswith(pre):
                opt = str(opt)[len(pre):].lstrip()
                break
        right, trapped = (i == answer), (i == ti)
        col = GREEN if right else (RED if trapped else GREY_L)
        g.append(R(28, ry + 3, W - 56, rowh - 8, CREAM if right else PAPER,
                   col, 1.6 if (right or trapped) else 1.0, 7))
        g.append(C(50, ry + rowh / 2 - 1, 11, col))
        g.append(T(50, ry + rowh / 2 + 4, chr(65 + i), 13, PAPER, bold=True))
        g.append(TFIT(72, ry + rowh / 2 + 5, opt, 16, W - 230, INK,
                      anchor='start'))
        if right:
            g.append(TFIT(W - 44, ry + rowh / 2 + 5, 'the answer', 13, 140,
                          GREEN, bold=True, anchor='end'))
        elif trapped:
            g.append(TFIT(W - 44, ry + rowh / 2 + 5, 'the trap', 13, 140,
                          RED, bold=True, anchor='end'))
        ry += rowh
    ry += 10
    pw = (W - 68) / 2
    g.append(R(28, ry, pw, 96, CREAM, GREEN, 1.4, 8))
    g.append(TFIT(44, ry + 22, 'WHY IT IS THE ANSWER', 11, 200, GREEN,
                  bold=True, anchor='start'))
    _block(g, 44, ry + 44, why, 14, pw - 32, 18, INK, 3)
    g.append(R(W - 28 - pw, ry, pw, 96, SOFT, RED, 1.4, 8))
    g.append(TFIT(W - 12 - pw, ry + 22, 'WHY THE TRAP WORKS', 11,
                  200, RED, bold=True, anchor='start'))
    _block(g, W - 12 - pw, ry + 44, twhat, 14, pw - 32, 18, INK, 3)
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ----------------------------------------------------------------- decide
def decide(title, nodes, sub='', note=''):
    """The decision itself, as a chain of tests.

    nodes = [(the test, what YES means, what NO means), ...]; the last NO
    falls through to the final outcome.

    True / False / Not Given is not a reading problem. It is a logic problem
    that learners lose because they never settle, in advance, what question
    they are answering. Three tests in a fixed order settles it.
    """
    nodeh, gap = 86, 26
    h = 54 + 24 + len(nodes) * (nodeh + gap) + 18 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, TEAL, 2, 12)]
    y = _head(g, title, sub, TEAL)
    ry = y + 24
    bw = 470
    for i, (test, yes, no) in enumerate(nodes):
        g.append(R(28, ry, bw, nodeh, SOFT, TEAL, 1.8, 10))
        g.append(C(52, ry + 22, 13, TEAL))
        g.append(T(52, ry + 27, str(i + 1), 13, PAPER, bold=True))
        _block(g, 74, ry + 27, test, 16, bw - 96, 21, INK, 2)
        g.append(L(28 + bw, ry + nodeh / 2 - 16, W - 300,
                   ry + nodeh / 2 - 16, GREEN, 2))
        g.append(R(W - 296, ry + 2, 268, 38, CREAM, GREEN, 1.2, 7))
        _block(g, W - 284, ry + 19, 'YES → %s' % yes, 14, 244, 16, GREEN, 2,
               bold=True)
        g.append(L(28 + bw, ry + nodeh / 2 + 18, W - 300,
                   ry + nodeh / 2 + 18, GREY, 2))
        g.append(R(W - 296, ry + nodeh - 42, 268, 38, PAPER, GREY_L,
                   1.2, 7))
        _block(g, W - 284, ry + nodeh - 25, 'NO → %s' % no, 14, 244, 16,
               GREY, 2)
        if i < len(nodes) - 1:
            g.append(L(28 + 24, ry + nodeh, 28 + 24, ry + nodeh + gap - 6,
                       GREY_L, 2))
            g.append(P('M%g %g L%g %g L%g %g Z'
                       % (52, ry + nodeh + gap, 46, ry + nodeh + gap - 8,
                          58, ry + nodeh + gap - 8), GREY_L))
        ry += nodeh + gap
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------- listenmap
def listenmap(title, speakers, turns, sub='', note=''):
    """The shape of a recording before you hear it.

    speakers = ['Tutor', 'Marta', 'Josef']
    turns = [(speaker index, the move, True if an answer sits here), ...]

    Part 3 is three voices agreeing, half-agreeing and changing their minds,
    and the answer is almost never in the first thing anyone says. Drawing
    the shape stops a learner writing down the first noun they recognise.
    """
    lanes = len(speakers)
    laneh = 54
    n = len(turns)
    colw = (W - 180 - 20) / float(max(n, 1))
    h = 54 + 28 + lanes * laneh + 44 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, AMBER, 2, 12)]
    y = _head(g, title, sub, AMBER)
    top = y + 28
    for li, name in enumerate(speakers):
        ly = top + li * laneh
        g.append(R(28, ly, W - 56, laneh - 8, SOFT if li % 2 == 0 else PAPER,
                   rx=8))
        g.append(TFIT(44, ly + laneh / 2 - 2, name, 15, 124, INDIGO,
                      bold=True, anchor='start'))
    for ti, (si, move, is_ans) in enumerate(turns):
        x = 180 + ti * colw
        ly = top + si * laneh
        col = GREEN if is_ans else PERI
        g.append(R(x, ly + 7, colw - 8, laneh - 22, col, rx=7))
        g.append(TFIT(x + (colw - 8) / 2, ly + laneh / 2 + 2, move, 13,
                      colw - 20, PAPER if is_ans else INK, bold=is_ans,
                      anchor='middle'))
        if is_ans:
            g.append(TFIT(x + (colw - 8) / 2, top + lanes * laneh + 16,
                          '↑ answer', 12, colw, GREEN, bold=True,
                          anchor='middle'))
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# --------------------------------------------------------------- taskread
def taskread(prompt, parts, misreadings, sub='', note=''):
    """A Task 2 question taken apart before a word is written.

    parts = [(label, the words, what it obliges you to do), ...]
    misreadings = [the two essays that answer a question nobody asked]

    Task Response is the criterion band-6 writers lose most often, and they
    lose it before they start: they answer the topic instead of the task.
    """
    rowh = 62
    h = (54 + 70 + rowh * len(parts) + 30 + 26 * len(misreadings) + 24
         + (26 if note else 0))
    g = [R(0, 0, W, h, PAPER, PLUM, 2, 12)]
    y = _head(g, 'Read the task before you answer it', sub, PLUM)
    g.append(R(28, y + 14, W - 56, 48, SOFT, PERI, 1.2, 8))
    _block(g, 44, y + 36, prompt, 16, W - 88, 21, INK, 2)
    ry = y + 70
    for i, (lab, words, must) in enumerate(parts):
        col = BRANCH_COLOURS[i % len(BRANCH_COLOURS)]
        g.append(R(28, ry + 4, 168, rowh - 14, col, rx=8))
        g.append(TFIT(112, ry + rowh / 2 + 1, lab, 14, 154, PAPER,
                      bold=True, anchor='middle'))
        g.append(TFIT(212, ry + 26, words, 16, W - 252, INK, bold=True,
                      anchor='start'))
        g.append(TFIT(212, ry + 46, must, 14, W - 252, GREY, anchor='start'))
        ry += rowh
    ry += 8
    g.append(TFIT(28, ry + 14, 'TWO ESSAYS THAT ANSWER A DIFFERENT QUESTION',
                  12, 460, RED, bold=True, anchor='start'))
    ry += 24
    for m in misreadings:
        g.append(C(38, ry + 8, 3.5, RED))
        g.append(TFIT(52, ry + 13, m, 15, W - 86, GREY, anchor='start'))
        ry += 26
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# --------------------------------------------------------------- langbank
def langbank(title, groups, sub='', note=''):
    """Useful language by what it DOES, with one phrase worked into place.

    groups = [(function, [phrases...], a sentence using one), ...]

    A phrase list is furniture. A phrase list where one phrase has already
    been put to work is a model, and the difference shows up in the script.
    """
    n = len(groups)
    colw = (W - 56 - (n - 1) * 14) / float(n)
    deep = max(len(ph) for _, ph, _ in groups)
    h = 54 + 30 + 32 + deep * 26 + 64 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, TEAL, 2, 12)]
    y = _head(g, title, sub, TEAL)
    top = y + 24
    for i, (fn, phrases, worked) in enumerate(groups):
        col = BRANCH_COLOURS[i % len(BRANCH_COLOURS)]
        x = 28 + i * (colw + 14)
        g.append(R(x, top, colw, 30, col, rx=8))
        g.append(TFIT(x + colw / 2, top + 21, fn, 14, colw - 16, PAPER,
                      bold=True, anchor='middle'))
        py = top + 30 + 24
        for ph in phrases:
            g.append(TFIT(x + 8, py, ph, 15, colw - 16, INK, anchor='start'))
            py += 26
        g.append(R(x, top + 30 + 14 + deep * 26, colw, 54, SOFT, col, 1.2, 8))
        _block(g, x + 10, top + 30 + 34 + deep * 26, worked, 13,
               colw - 20, 16, GREY, 2, italic=True)
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ----------------------------------------------------------------- ladder
def ladder(criterion, rungs, sub='', note=''):
    """What moves a script up one band, in one sentence written three ways.

    rungs = [(band, the sentence at that band, the move that got it there)]
    lowest first.

    'Use more complex sentences' is advice nobody can act on. The same
    sentence at 5.5, 6.5 and 7.5, with the move named between them, is.
    """
    rowh = 94
    h = 54 + 24 + rowh * len(rungs) + 20 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, BLUE, 2, 12)]
    y = _head(g, 'Band ladder · %s' % criterion, sub, BLUE)
    ry = y + 24
    for i, (band, sent, move) in enumerate(reversed(rungs)):
        top = ry + i * rowh
        shade = BLUE if i == 0 else (PERI if i == 1 else GREY_L)
        g.append(R(28, top + 4, 92, rowh - 14, shade, rx=8))
        g.append(TFIT(74, top + rowh / 2 - 4, 'BAND', 11, 80, PAPER,
                      bold=True, anchor='middle'))
        g.append(TFIT(74, top + rowh / 2 + 18, str(band), 22, 80, PAPER,
                      bold=True, anchor='middle'))
        g.append(R(132, top + 4, W - 160, rowh - 14, SOFT if i else CREAM,
                   shade, 1.4, 8))
        _block(g, 148, top + 28, sent, 16, W - 192, 21, INK, 2)
        if move:
            g.append(TFIT(148, top + rowh - 18, '↑ ' + move, 13, W - 192,
                          BLUE, bold=True, anchor='start'))
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ----------------------------------------------------------------- matrix
def matrix(title, cols, rows, cells, sub='', note=''):
    """Two or three views against the same criteria.

    cells[r][c] is a string, or '' for a box the learner fills in.

    This is the Part 3 and Task 2 thinking frame. An argument that has not
    been laid out this way tends to be one view repeated louder.
    """
    labw = 190
    colw = (W - 56 - labw) / float(len(cols))
    rowh = 64
    h = 54 + 30 + 34 + rowh * len(rows) + 20 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, INDIGO, 2, 12)]
    y = _head(g, title, sub, INDIGO)
    hy = y + 24
    for i, c in enumerate(cols):
        x = 28 + labw + i * colw
        g.append(R(x + 3, hy, colw - 6, 30, BRANCH_COLOURS[i % 5], rx=7))
        g.append(TFIT(x + colw / 2, hy + 21, c, 14, colw - 18, PAPER,
                      bold=True, anchor='middle'))
    ry = hy + 34
    for r, rowlab in enumerate(rows):
        g.append(R(28, ry + 3, labw - 8, rowh - 8, SOFT, INDIGO, 1.2, 7))
        _block(g, 42, ry + 26, rowlab, 14, labw - 36, 17, INDIGO, 2,
               bold=True)
        for c in range(len(cols)):
            x = 28 + labw + c * colw
            txt = ''
            try:
                txt = cells[r][c]
            except (IndexError, TypeError, KeyError):
                txt = ''
            g.append(R(x + 3, ry + 3, colw - 6, rowh - 8, PAPER,
                       GREY_L if txt else PERI, 1.2, 7))
            if txt:
                _block(g, x + 13, ry + 26, txt, 14, colw - 28, 17, INK, 2)
            else:
                g.append(L(x + 16, ry + rowh / 2 + 4, x + colw - 20,
                           ry + rowh / 2 + 4, GREY_L, 1.2))
        ry += rowh
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ---------------------------------------------------------------- unitmap
def unitmap(n, theme, rows, note=''):
    """The unit before you enter it: five cycles, what each does, what it
    carries.

    rows = [(sub-topic, the skill taught, the test tasks it carries), ...]

    The audit's flattest finding was that no book in this series has a
    contents page. This is the per-unit half of the fix, and it is also the
    thing that makes a cycle's place in the unit arguable rather than
    assumed.
    """
    rowh = 52
    h = 112 + 30 + rowh * len(rows) + 20 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, INDIGO, 2, 12)]
    g.append(R(0, 0, W, 104, INDIGO, rx=12))
    g.append(R(0, 90, W, 14, INDIGO))
    g.append(TFIT(40, 44, 'UNIT %d · WHAT IS IN IT' % n, 15, 340, PERI_L,
                  bold=True, anchor='start'))
    g.append(TFIT(40, 80, theme, 27, W - 90, PAPER, bold=True,
                  anchor='start'))
    hy = 118
    g.append(TFIT(96, hy + 16, 'THE SUB-TOPIC', 11, 220, GREY, bold=True,
                  anchor='start'))
    g.append(TFIT(392, hy + 16, 'THE SKILL IT TEACHES', 11, 230, GREY,
                  bold=True, anchor='start'))
    g.append(TFIT(656, hy + 16, 'THE TEST TASKS IT CARRIES', 11, 230, GREY,
                  bold=True, anchor='start'))
    ry = hy + 26
    for i, (sub, skill, tasks) in enumerate(rows, 1):
        if i % 2:
            g.append(R(28, ry, W - 56, rowh, SOFT, rx=6))
        g.append(C(56, ry + rowh / 2 - 2, 15, PERI))
        g.append(T(56, ry + rowh / 2 + 3, str(i), 14, PAPER, bold=True))
        _block(g, 96, ry + rowh / 2 - 2, sub, 15, 282, 18, INK, 2,
               bold=True)
        _block(g, 392, ry + rowh / 2 - 2, skill, 14, 250, 17, GREY, 2)
        _block(g, 656, ry + rowh / 2 - 2, tasks, 13, 216, 16, INDIGO, 2)
        ry += rowh
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------------------------ clock
def clock(title, segments, speed='', note=''):
    """Where the hour goes, against the learner's own measured speed.

    segments = [(label, minutes, note), ...] summing to the paper's length.

    Most candidates who run out of time in Reading do not read slowly. They
    spend eighteen minutes on the first passage because nothing ever told
    them what twenty minutes is supposed to feel like.
    """
    import math
    total = float(sum(m for _, m, _ in segments)) or 1.0
    cx, cy, rad = 190, 196, 118
    h = 54 + 300 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, TEAL, 2, 12)]
    _head(g, title, speed, TEAL)
    g.append(C(cx, cy, rad + 10, SOFT))
    a0 = -math.pi / 2
    for i, (lab, mins, _n) in enumerate(segments):
        sweep = 2 * math.pi * (mins / total)
        a1 = a0 + sweep
        col = BRANCH_COLOURS[i % len(BRANCH_COLOURS)]
        x0, y0 = cx + rad * math.cos(a0), cy + rad * math.sin(a0)
        x1, y1 = cx + rad * math.cos(a1), cy + rad * math.sin(a1)
        large = 1 if sweep > math.pi else 0
        g.append(P('M%g %g L%g %g A%g %g 0 %d 1 %g %g Z'
                   % (cx, cy, x0, y0, rad, rad, large, x1, y1), col))
        am = (a0 + a1) / 2.0
        g.append(T(cx + rad * 0.62 * math.cos(am),
                   cy + rad * 0.62 * math.sin(am) + 6,
                   '%d' % mins, 18, PAPER, bold=True))
        a0 = a1
    g.append(C(cx, cy, rad * 0.42, PAPER))
    g.append(T(cx, cy - 2, '%d' % int(total), 30, INDIGO, bold=True))
    g.append(T(cx, cy + 22, 'minutes', 14, GREY))
    ly = 110
    for i, (lab, mins, nt) in enumerate(segments):
        col = BRANCH_COLOURS[i % len(BRANCH_COLOURS)]
        g.append(R(352, ly - 12, 16, 16, col, rx=4))
        g.append(TFIT(380, ly, '%s · %d min' % (lab, mins), 17, 480, INK,
                      bold=True, anchor='start'))
        g.append(TFIT(380, ly + 22, nt, 14, 490, GREY, anchor='start'))
        ly += 48
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# ---------------------------------------------------------------- tracker
def tracker(title, rows, cols, sub='', note=''):
    """A progress record the learner fills in, with the first row worked.

    rows = [(label, [marks or '' per column]), ...]

    Benchmark factor 68. Self-assessment that lives on paper and gets a date
    beside it is the only kind anyone goes back to.
    """
    labw = 300
    colw = (W - 56 - labw - 120) / float(len(cols))
    rowh = 46
    h = 54 + 30 + 36 + rowh * len(rows) + 20 + (26 if note else 0)
    g = [R(0, 0, W, h, PAPER, GREEN, 2, 12)]
    y = _head(g, title, sub or 'tick · half-tick · cross, and the date',
              GREEN)
    hy = y + 26
    for i, c in enumerate(cols):
        x = 28 + labw + i * colw
        g.append(TFIT(x + colw / 2, hy + 14, c, 13, colw - 8, GREEN,
                      bold=True, anchor='middle'))
    g.append(TFIT(W - 34, hy + 14, 'DATE', 13, 110, GREEN, bold=True,
                  anchor='end'))
    g.append(L(28, hy + 24, W - 28, hy + 24, GREEN, 1.6))
    ry = hy + 30
    for ri, (lab, marks) in enumerate(rows):
        if ri % 2:
            g.append(R(28, ry, W - 56, rowh, SOFT, rx=5))
        _block(g, 40, ry + rowh / 2 - 2, lab, 14, labw - 24, 17, INK, 2)
        for ci in range(len(cols)):
            x = 28 + labw + ci * colw
            mk = ''
            try:
                mk = marks[ci]
            except (IndexError, TypeError):
                mk = ''
            g.append(R(x + colw / 2 - 13, ry + rowh / 2 - 13, 26, 26, PAPER,
                       GREY_L, 1.2, 5))
            if mk:
                g.append(T(x + colw / 2, ry + rowh / 2 + 6, mk, 15, GREEN,
                           bold=True))
        g.append(L(W - 138, ry + rowh - 10, W - 34, ry + rowh - 10,
                   GREY_L, 1.2))
        ry += rowh
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)


# --------------------------------------------------------------- timeline
def timeline(title, events, sub='', note=''):
    """Events on a scale, with the span named.

    events = [(when, what, 0.0 at the left end .. 1.0 at the right), ...]

    Archaeology and deep time need it; so does the narrative tense in a
    Part 2 answer, which learners get wrong because they have never seen
    the order drawn.
    """
    h = 54 + 258 + (34 if note else 0)
    g = [R(0, 0, W, h, PAPER, AMBER, 2, 12)]
    y = _head(g, title, sub, AMBER)
    ax = y + 128
    x0, x1 = 60, W - 60
    g.append(L(x0, ax, x1, ax, INDIGO, 3.4))
    for i, (when, what, pos) in enumerate(events):
        x = x0 + (x1 - x0) * max(0.0, min(1.0, float(pos)))
        up = (i % 2 == 0)
        col = BRANCH_COLOURS[i % len(BRANCH_COLOURS)]
        g.append(L(x, ax, x, ax - 46 if up else ax + 46, col, 1.8))
        g.append(C(x, ax, 7, PAPER, col, 2.8))
        ty = ax - 112 if up else ax + 54
        bw2 = 162
        bx = max(10, min(W - 10 - bw2, x - bw2 / 2))
        g.append(R(bx, ty, bw2, 66, SOFT, col, 1.3, 8))
        g.append(TFIT(bx + bw2 / 2, ty + 20, when, 14, bw2 - 14, col,
                      bold=True, anchor='middle'))
        _block(g, bx + bw2 / 2, ty + 38, what, 12, bw2 - 16, 15, INK, 2,
               anchor='middle')
    _note(g, h - 18, note)
    return render(''.join(g), W, h, PAPER)
