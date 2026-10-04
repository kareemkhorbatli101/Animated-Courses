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
# A totals line is the sum of the rows above it, not another row. On a
# scale it is not a point at all: an ageing schedule runs current, 1-30,
# 31-60, over 90 — and then "Total", which sits nowhere on that scale.
TOTALROW = re.compile(r'^(total|totals|sum|subtotal|grand total|'
                      r'net|balance)\b', re.I)
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
    # periods down the first column, or an ordered scale that is not time
    # at all. An ageing schedule runs current, 1-30 days, 31-60, 61-90,
    # over 90, and the loss rate climbing across those bands is exactly
    # what a line shows and a grid does not. Only ONE table in the whole
    # book is a series over years; this is what makes the form earn its
    # place.
    body = [r for r in body if not TOTALROW.match(clean(r[0]))]
    per = [clean(r[0]) for r in body]
    ordered = (sum(1 for x in per if YEARH.match(x)) >= 3
               or (len(per) >= 4
                   and sum(1 for x in per if BAND.search(x)) >= 3))
    if len(per) >= 3 and ordered:
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
# A band of an ordered scale: "1-30 days", "over 90", "Year 3", "0-30".
BAND = re.compile(r'(\d+\s*[-\u2013]\s*\d+|over\s+\d+|under\s+\d+|'
                  r'more than\s+\d+|\d+\s*\+|current|year\s*\d)', re.I)


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
        rows = [(a, v) for a, v in rows
                if v > 0 and len(a) <= 34 and not TOTALROW.match(a)]
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


# ---------------------------------------------------------------- in prose
# "Net income was 80: revenue of 300, minus cost of goods sold of 180,
# minus wages of 40." The chapter states a figure and then how it was
# reached, which is a computation drawn as a bridge.
BR_TOTAL = re.compile(
    r'^(.{3,46}?)\s+(?:was|were|is|are|rose by|fell by|increased by|'
    r'decreased by|totall?ed|comes? to|equals?)\s+\$?([\d,]+)\s*[:\u2014-]',
    re.I)
BR_PART = re.compile(r'([A-Za-z][A-Za-z \-\']{2,40}?)\s+of\s+\$?([\d,]+)',
                     re.I)
MINUS = re.compile(r'\b(minus|less|outflow|deduct|subtract|paid|'
                   r'expense|cost|loss)\b', re.I)
LEAD = re.compile(r'^(?:and\s+|then\s+)?(?:an?|the)\s+', re.I)


def _amount(x):
    try:
        return float(x.replace(',', '').rstrip('.'))
    except ValueError:
        return None


def as_bridge(sent):
    """A stated computation: a total, and the parts that make it up.

    One sentence has to carry both halves — the figure and its parts —
    because a reader has to be able to check the arithmetic against what
    the chapter says, and a bridge assembled from two sentences is the
    generator doing the arithmetic rather than the chapter.
    """
    m = BR_TOTAL.match(sent)
    if not m:
        return None
    total = _amount(m.group(2))
    if total is None:
        return None
    rest = sent[m.end():]
    parts = []
    for lab, val in BR_PART.findall(rest):
        v = _amount(val)
        lab = clean(LEAD.sub('', lab)).strip(' ,;')
        if v is None or not lab or len(lab) > 40:
            continue
        sign = -1 if MINUS.search(lab) else 1
        lab = re.sub(r'^(minus|less|plus|and)\s+', '', lab, flags=re.I)
        parts.append((clean(lab), sign, v))
    if not 2 <= len(parts) <= 6:
        return None
    if len({p[0].lower() for p in parts}) != len(parts):
        return None
    # The parts have to add up to the total. This is the whole guard on
    # this detector: reading "minus" off a word is a guess, and if the
    # guess is wrong the arithmetic will not close. A bridge that does not
    # reconcile is a bridge that was misread, so it is not drawn.
    if abs(sum(sg * v for _l, sg, v in parts) - total) > 0.51:
        return None
    return dict(total=clean(m.group(1)), value=total, parts=parts)


# "Start with net income: $2,969,100. Add depreciation...: $4,924,000."
# The same computation written down the page instead of across a sentence.
STEP = re.compile(r'^(?:(start with|add back|add|subtract|less|plus|deduct|'
                  r'remove)\s+)(.{3,74}?)[:,]?\s*\$?([\d,]+)\s*\.?$', re.I)
STEPDOWN = ('subtract', 'less', 'deduct', 'remove')


def as_bridge_run(sents):
    """A computation written as a run of sentences, one step each."""
    steps = []
    for sent in sents:
        m = STEP.match(clean(sent))
        if not m:
            if steps:
                break
            continue
        v = _amount(m.group(3))
        lab = clean(m.group(2)).strip(' ,;:')
        if v is None or not lab:
            if steps:
                break
            continue
        verb = m.group(1).lower()
        sign = -1 if verb in STEPDOWN else 1
        steps.append((lab, sign if steps else 1, v))
    if not 3 <= len(steps) <= 7:
        return None
    if len({x[0].lower() for x in steps}) != len(steps):
        return None
    total = sum(sg * v for _l, sg, v in steps)
    return dict(total='the total', value=total, parts=steps)


# "A delivery truck wears out with kilometres driven, so units of
# production fits." A mapping of cases to the choice each one calls for.
FITS = re.compile(r'^(.{6,76}?),\s*so\s+(?:an?\s+|the\s+)?'
                  r'(.{3,42}?)\s+(?:fits|is best|is used|applies|'
                  r'is appropriate)\b', re.I)


def as_prose_tree(sents):
    """Cases grouped by the choice the chapter says each one calls for."""
    pairs, used = [], []
    for sent in sents:
        m = FITS.match(clean(sent))
        if not m:
            continue
        case, choice = clean(m.group(1)), clean(m.group(2))
        if len(case) > 70 or len(choice) > 40:
            continue
        pairs.append((case, choice))
        used.append(sent)
    if len(pairs) < 3:
        return None
    groups = collections.OrderedDict()
    for case, choice in pairs:
        groups.setdefault(choice, []).append(case)
    # Where each choice has one case, this is a mapping rather than a
    # classification, and a web reads it better than a tree: a tree of
    # three groups holding one member each says nothing about grouping.
    # The detector reports which sentences it used. Recomputing that from
    # a looser pattern outside counted sentences this one rejected, and
    # the run then failed the contiguity test for sentences it never took.
    if all(len(v) == 1 for v in groups.values()):
        return dict(_form='web', _used=used, subject='what fits each one',
                    pairs=[(c, k) for k, v in groups.items() for c in v])
    if not 2 <= len(groups) <= 4:
        return None
    return dict(root='what fits it', _used=used,
                groups=[(k, v) for k, v in groups.items()])


GAAPISH = re.compile(r'\bU\.S\.\s*GAAP\b|\bASC\s*\d|\bFASB\b', re.I)
IFRSISH = re.compile(r'\bIFRS\b|\bIAS\s*\d|\bIASB\b', re.I)


def as_sides(sents):
    """What each framework does, from sentences that name only one of them.

    Every chapter of this book contrasts the U.S. rules with the
    international ones, and in several sections it does so in prose rather
    than in a table. A sentence that names one framework and not the other
    is a statement about that side, so the two sets of sentences are the
    two columns. They are NOT paired into rows: the chapter does not pair
    them, and inventing the pairing would assert a correspondence it never
    states.
    """
    left, right = [], []
    for sent in sents:
        g, i = bool(GAAPISH.search(sent)), bool(IFRSISH.search(sent))
        if g == i or len(sent) > 150:
            continue
        (left if g else right).append(clean(sent))
    if len(left) < 2 or len(right) < 2:
        return None
    if len(left) > 5 or len(right) > 5:
        left, right = left[:5], right[:5]
    return dict(left='U.S. GAAP', right='IFRS',
                lrows=left, rrows=right)


STEPNUM = re.compile(r'^step\s*(\d+)\s*[.:)]\s*(.{8,200})$', re.I)
ORDWORD = ('first', 'second', 'third', 'fourth', 'fifth', 'sixth')
ORDLEAD = re.compile(r'^(%s|finally)\b,?\s+(.{8,200})$'
                     % '|'.join(ORDWORD), re.I)


def _joined(a, b):
    """Two sentences run together, with the stop between them kept.

    _namesplit takes the full stop off a step's own sentence, because the
    name of a step is not a sentence. The one that follows it still is, so
    without the stop the panel read "cost of goods sold is sold This is
    the matching principle."
    """
    a = clean(a)
    if a and a[-1] not in '.?!:;':
        a += '.'
    return clean(a + ' ' + clean(b))


TAIL = ('and', 'or', 'but', 'of', 'in', 'on', 'to', 'for', 'with',
        'the', 'a', 'an', 'from', 'by', 'at', 'as', 'that', 'which')


def _namesplit(body, cap=46):
    """A step's name and the rest of what it says.

    The name is the sentence's own first clause, because that is what the
    chapter put first; the remainder is the clue a reader works from when
    the name is the gap.

    Where to cut is the whole of it. A comma, a semicolon or a colon is a
    real break and is taken wherever it falls inside twice the cap -- the
    first try looked only within the cap, so "remove gains and losses on
    investing and financing items; the cash from those sales" was cut at
    the cap and the card was headed "remove gains and losses on investing
    and". A full stop is the next-best break. Only with neither is the
    name cut by length, and then never on a word that cannot end one.
    """
    body = clean(body).rstrip('.')
    m = re.match(r'^(.{8,%d}?)\s*[,;:]\s+(.+)$' % (cap * 2), body)
    if m:
        return clean(m.group(1)), clean(m.group(2))
    m = re.match(r'^(.{8,%d}?[.!?])\s+([A-Z].+)$' % (cap * 2), body)
    if m:
        return clean(m.group(1)).rstrip('.'), clean(m.group(2))
    # No break at all: the clause IS the name, up to twice the cap. A hard
    # cut at the cap headed a card "adjust for changes in current
    # operating" and gave "assets and liabilities from the balance sheet"
    # to the description, which splits a noun from its own adjective.
    if len(body) <= cap * 2:
        return body, ''
    cut = body.rfind(' ', 0, cap)
    if cut < 8:
        return body[:cap], ''
    name, rest = body[:cut], body[cut + 1:]
    while name.split() and name.split()[-1].lower() in TAIL:
        back = name.rfind(' ')
        if back < 8:
            break
        rest = name[back + 1:] + ' ' + rest
        name = name[:back]
    return clean(name), clean(rest)


def as_steps(sents):
    """A procedure the prose numbers itself.

    Only a chain the chapter numbers counts: "Step 1 ... Step 2 ..." or
    "First ... Second ... Third ...", consecutive and starting at one. An
    ordinal chain that long is a sequence whichever way the chapter means
    it -- the steps of a method, or the order it explains them in -- and
    drawing it as a sequence says nothing the text does not. A chain of two
    is not a sequence, so three is the floor.

    A sentence that follows a step without starting a new one belongs to
    that step, so it is folded into the step's description rather than left
    behind to open a paragraph mid-thought.
    """
    want, steps, used, folded = 1, [], [], False
    for sent in sents:
        txt = clean(sent)
        m = STEPNUM.match(txt)
        if m:
            got, body = int(m.group(1)), m.group(2)
        else:
            m = ORDLEAD.match(txt)
            if not m:
                # One follower, not every sentence until the next
                # ordinal. Three steps of the indirect method swallowed
                # the worked example that came after them, so the third
                # card carried "Start with net income: $2,969,100" as
                # part of the step itself.
                if steps and not folded and len(txt) < 180:
                    nm, sub = steps[-1]
                    steps[-1] = (nm, _joined(sub, txt))
                    used.append(sent)
                    folded = True
                    continue
                if steps:
                    break
                continue
            w = m.group(1).lower()
            got = want if w == 'finally' else ORDWORD.index(w) + 1
            body = m.group(2)
        if got != want:
            if steps:
                break
            continue
        nm, sub = _namesplit(body)
        if not nm:
            break
        steps.append((nm, sub))
        used.append(sent)
        folded = False
        want += 1
    if not 3 <= len(steps) <= 6:
        return None
    if len({nm.lower() for nm, _s in steps}) != len(steps):
        return None
    return dict(_form='flow', _used=used, steps=steps)


IFLEAD = re.compile(r'^If\s+(.{8,120}?),\s*'
                    r'(?:it|the company|they|the entity|the holder)\s+'
                    r'(.{8,170}?)\.?$', re.I)
ELSELEAD = re.compile(r'^(?:Otherwise|If not|If it does not|'
                      r'If the company does not)\b,?\s*(.{8,180}?)\.?$',
                      re.I)


ONESENT = re.compile(r'^If\s+(.{6,70}?),\s*(?:it\s+)?(.{6,80}?)\s*;\s*'
                     r'if\s+(.{3,70}?),\s*(?:it\s+)?(.{4,80}?)\.?$', re.I)


def as_branch(sents):
    """A test with two outcomes, where the prose states both.

    The structure is in the words: a sentence of the form "If X, it does
    A" answered immediately by one opening "Otherwise" is a two-way test,
    and nothing has to be inferred to draw it. The two must be adjacent --
    an "Otherwise" three sentences later answers something else -- and the
    condition has to survive without the reader having to guess it, so it
    is never the gap.
    """
    for i in range(len(sents) - 1):
        a, b = clean(sents[i]), clean(sents[i + 1])
        m, m2 = IFLEAD.match(a), ELSELEAD.match(b)
        if not m or not m2:
            continue
        cond, yes, no = (clean(m.group(1)), clean(m.group(2)),
                         clean(m2.group(1)))
        if min(len(cond), len(yes), len(no)) < 8:
            continue
        return dict(_used=[sents[i], sents[i + 1]],
                    cond='If ' + cond, yes=yes, no=no)
    return None


def as_either(sents):
    """The same test written as one sentence, as a two-row panel.

    "If the proceeds are higher, it records a gain; if lower, a loss."
    The semicolon and the second "if" are the structure, so this needs
    no inference either. It is drawn as a panel rather than as a branch
    because a branch labels its two routes Yes and No, and here the
    chapter gives both routes conditions of their own.
    """
    for sent in sents:
        m = ONESENT.match(clean(sent))
        if not m:
            continue
        a, ya, b, nb = [clean(m.group(i)) for i in (1, 2, 3, 4)]
        if min(len(ya), len(nb)) < 4:
            continue
        # No header: the sentence IS the content, so putting it above the
        # rows would print both answers over the gaps meant to hide them.
        return dict(_used=[sent], head='',
                    items=[('If %s' % a, ya), ('If %s' % b, nb)],
                    gap='body')
    return None


PIVOT = re.compile(r'^There are also\s+(?:some\s+|a number of\s+|'
                   r'several\s+)?([A-Za-z]{4,}s)\b', re.I)
TWONOUN = re.compile(r'^([A-Za-z][A-Za-z \-]{2,30}?)\s+and\s+'
                     r'([A-Za-z][A-Za-z \-]{2,30})$')


def as_halves(sents, title=''):
    """Two named sets the section's own title and a pivot sentence mark.

    "Benefits and challenges" is two lists, and the prose says where the
    first ends: "There are also challenges." Both the names and the split
    come from the text, so neither is a guess. Without the title naming
    both halves this does not fire, because then there is nothing to label
    the columns with.
    """
    mt = TWONOUN.match(clean(title))
    if not mt:
        return None
    a, b = clean(mt.group(1)), clean(mt.group(2))
    at = re.sub(r's$', '', a.lower())
    bt = re.sub(r's$', '', b.lower())
    if len(at) < 4 or len(bt) < 4 or at == bt:
        return None
    cut = None
    for i, sent in enumerate(sents):
        m = PIVOT.match(clean(sent))
        if m and re.sub(r's$', '', m.group(1).lower()).startswith(bt[:5]):
            cut = i
            break
    if cut is None or cut < 2:
        return None
    left = [clean(x) for x in sents[:cut] if 30 < len(clean(x)) < 190]
    # The pivot sentence only announces the second half; it carries nothing
    # of its own, so it is consumed but never drawn as a card.
    right = [clean(x) for x in sents[cut + 1:] if 30 < len(clean(x)) < 190]
    if len(left) < 2 or len(right) < 2:
        return None
    used = list(sents[:cut + 1 + len(right)])
    return dict(_used=used, left=a[:1].upper() + a[1:],
                right=b[:1].upper() + b[1:],
                lrows=left[:4], rrows=right[:4])


def branchfig(title, cond, yes, no, seed, first, terms=(), spares=()):
    """A two-way test: the condition, and what follows either way.

    One outcome goes whole and the other loses one decisive phrase. Taking
    both whole leaves the two halves of a word list with nothing to tell
    them apart; taking a phrase from each tests reading but never the
    structure.
    """
    whole = 0 if seed % 2 == 0 else 1
    outs = [('Yes', yes, A.INDIGO, A.INDIGO_L),
            ('No', no, A.AMBER, A.AMBER_L)]
    part = outs[1 - whole][1]
    answers = [clean(outs[whole][1])]
    hits = _inner(part, answers, terms, _howmany(part))
    # A long condition gives up one word too. The rule is that the
    # condition is never BLANKED -- a reader who cannot see what is being
    # tested has nothing to reason from -- and a ninety-character
    # condition missing one word is still the test, read closely.
    # A lower bar than a card's, because a condition is never blanked
    # whole and so never loses its shape: seventy characters is already a
    # clause a reader can read around one hole.
    chits = (_inner(cond, answers + hits, terms, 1)
             if len(clean(cond)) > 70 else [])
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 22
    CW = W - 96
    ctext, k = _sub(cond, chits, first)
    hh = A.wrapped_h(ctext, CW - 28, 15, bold=True) + 26
    c.rect(48, y, CW, hh, A.SOFT, A.GREY, 2, 7)
    c.centred(48 + CW / 2.0, y + hh / 2.0, ctext, CW - 28, 15, A.INK, True)
    y += hh
    c.line(W / 2.0, y, W / 2.0, y + 16, A.GREY, 2)
    OW = (W - 48 - 20) / 2.0
    for i in (0, 1):
        tx = 24 + i * (OW + 20) + OW / 2.0
        c.line(W / 2.0, y + 16, tx, y + 16, A.GREY, 2)
        c.arrow(tx, y + 16, tx, y + 32, A.GREY, 2, 7)
    y += 32
    texts = []
    for i, (lab, body, col, fill) in enumerate(outs):
        if i == whole:
            texts.append('(%d) %s' % (k, '_' * 34))
            k += 1
        elif hits:
            txt, k = _sub(body, hits, k)
            texts.append(txt)
        else:
            texts.append(body)
    bh = max(A.wrapped_h(t, OW - 28, 14) for t in texts) + 52
    for i, (lab, body, col, fill) in enumerate(outs):
        x = 24 + i * (OW + 20)
        c.rect(x, y, OW, bh, A.PAPER, col, 2, 7)
        c.rect(x + 10, y + 10, 54, 22, fill, col, 1.6, 11)
        c.centred(x + 37, y + 21, lab, 48, 12, col, True)
        c.centred(x + OW / 2.0, y + 34 + (bh - 44) / 2.0, texts[i],
                  OW - 28, 14, A.INK)
        c._b(y + bh)
    answers = list(chits) + answers + list(hits)
    return _fig('branch', title, c, answers,
                _bank(answers, spares, seed + 1),
                'One route applies, and only one.')


COUNTS = {'two': 2, 'three': 3, 'four': 4, 'five': 5}
ANNOUNCE = re.compile(r'^(.{10,110}?)\b(?:in|has|have|takes?|uses?)\s+'
                      r'(?:one of\s+)?(two|three|four|five)\s+'
                      r'(ways|forms|kinds|types|methods|models|routes|'
                      r'tests|categories|steps|stages|parts)\b', re.I)
# A family of openings a run of parallel items can be written in. All the
# items of one panel have to come from the SAME family: that is what makes
# them parallel, and it is the chapter's own wording rather than a guess.
FAMILY = (re.compile(r'^When\b', re.I),
          re.compile(r'^If\b', re.I),
          re.compile(r'^(?:first|second|third|fourth|fifth)\b,', re.I),
          re.compile(r'^(?:Or\s+)?(?:it|the company|a company)\s+can\b',
                     re.I))
IFRULE = re.compile(r'^If\s+(.{8,110}?),\s*(.{10,160}?)\.?$', re.I)


def _items(sents, pat, want):
    """`want` sentences opening the same way, each keeping what follows it.

    A sentence that does not open a new item belongs to the one before it
    ("Depreciation of the bottling line and the expiry of prepaid rent are
    examples."), so it is folded into that item's description. Left behind
    it would open a paragraph in the middle of a thought.
    """
    items, used, folded = [], [], False
    for sent in sents:
        txt = clean(sent)
        if pat.match(txt):
            if len(items) == want:
                break
            nm, sub = _namesplit(txt, 56)
            items.append([nm, sub])
            used.append(sent)
            folded = False
            continue
        if not items:
            continue
        if len(items) == want:
            break
        if not folded and len(txt) < 180:
            items[-1][1] = _joined(items[-1][1], txt)
            used.append(sent)
            folded = True
            continue
        break
    if len(items) != want:
        return None, None
    return [(a, b) for a, b in items], used


def as_options(sents):
    """A set the prose counts, and the members it then lists.

    "Expenses are recognized in one of three ways." is the chapter
    promising three items, and the three sentences opening "When ..." are
    them. Both the number and the members come from the text, so nothing
    is inferred: if the count and the parallel run do not agree, no panel
    is drawn.
    """
    for i, sent in enumerate(sents):
        m = ANNOUNCE.match(clean(sent))
        if not m:
            continue
        want = COUNTS[m.group(2).lower()]
        for pat in FAMILY:
            items, used = _items(sents[i + 1:], pat, want)
            if not items:
                continue
            if len({a.lower() for a, _b in items}) != len(items):
                continue
            return dict(_used=[sent] + used, head=clean(sent).rstrip('.'),
                        items=items, gap='name')
    return None


def as_rules(sents):
    """Conditions, each with what it rules in or out.

    Three or more consecutive sentences of the form "If X, Y" are a set of
    tests, which is how the chapter writes the facts that settle a choice.
    The condition stays and the consequence is the gap: a reader given
    "If the company reports under IFRS" can reach "LIFO is not possible",
    while the other way round there is nothing to reason from.
    """
    best, bestused = [], []
    cur, used = [], []
    for sent in sents:
        m = IFRULE.match(clean(sent))
        if not m:
            if len(cur) > len(best):
                best, bestused = cur, used
            cur, used = [], []
            continue
        cond, outcome = clean(m.group(1)), clean(m.group(2))
        if len(cond) > 96 or not 10 <= len(outcome) <= 72:
            if len(cur) > len(best):
                best, bestused = cur, used
            cur, used = [], []
            continue
        cur.append((cond, outcome))
        used.append(sent)
    if len(cur) > len(best):
        best, bestused = cur, used
    if not 3 <= len(best) <= 5:
        return None
    if len({a.lower() for a, _b in best}) != len(best):
        return None
    return dict(_used=bestused, head='Each fact, and what it settles',
                items=best, gap='body')


def panelfig(title, head, items, seed, first, gap='name', spares=()):
    """A counted set: the claim, then its members, each a row of its own.

    No arrows. A panel is a set, not a sequence, and an arrow between its
    members would assert an order the chapter does not give them.

    Which half of a row goes depends on which half the reader can reach.
    For a set the chapter names — three ways of recognizing an expense —
    the name goes and the explanation is the clue. For a set of tests the
    condition stays and the consequence goes: a reader given "If the
    company reports under IFRS" can reach "LIFO is not possible", while
    the other way round there is nothing to reason from.
    """
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 20
    CW = W - 48
    if head:
        hh = A.wrapped_h(head, CW - 28, 15, bold=True) + 24
        c.rect(24, y, CW, hh, A.INDIGO_L, A.INDIGO, 2.2, 7)
        c.centred(24 + CW / 2.0, y + hh / 2.0, head, CW - 28, 15, A.INDIGO,
                  True)
        y += hh + 12
    gaps = _pick(items, seed, nomax=max(1, len(items) - 1),
                 labels=[(b if gap == 'body' else a) for a, b in items])
    NW = 250.0
    DW = CW - NW - 32
    answers, k = [], first
    # Which text each row that keeps its label gives a word of. Normally
    # the explanation beside it; where there is none -- a chapter that
    # states its two stages in one clause each and nothing more -- the
    # label itself, because a row too long to blank whole would otherwise
    # ask nothing at all. The panel on activity-based costing had two
    # such rows, produced no gaps, and took its three sentences off the
    # sheet with it.
    extra, inname = [], []
    for i, (nm, sub) in enumerate(items):
        keep, where = (sub or ''), 'body'
        if i in gaps and gap == 'body':
            keep = ''
        if not keep.strip() and i not in gaps and len(clean(nm)) > WHOLE:
            keep, where = nm, 'name'
        hits = _inner(keep, [a for a, _b in items]
                      + [x for sub2 in extra for x in sub2], spares,
                      _howmany(keep)) if len(keep) > 28 else []
        extra.append(hits)
        inname.append(where == 'name')
    for i, (nm, sub) in enumerate(items):
        blank = i in gaps
        name = nm
        body = sub or ''
        if extra[i] and not (blank and gap == 'body'):
            for h in extra[i]:
                if inname[i]:
                    name = re.sub(r'\b%s\b' % re.escape(h),
                                  '\u2423%s\u2423' % h, name, count=1,
                                  flags=re.I)
                else:
                    body = re.sub(r'\b%s\b' % re.escape(h),
                                  '\u2423%s\u2423' % h, body, count=1,
                                  flags=re.I)
        if blank and gap == 'body' and body:
            answers.append(body)
            body = '(%d) %s' % (k, '_' * 30)
            k += 1
        elif blank and gap == 'name':
            answers.append(name)
            name = None
            k += 1
        for h in (extra[i] or []):
            tag = '\u2423%s\u2423' % h
            if name and tag in name:
                name = name.replace(tag, '(%d) ______' % k, 1)
            elif tag in body:
                body = body.replace(tag, '(%d) ______' % k, 1)
            else:
                continue
            answers.append(h)
            k += 1
        nh = (A.wrapped_h(name, NW - 24, 14, bold=True) if name else 26)
        rh = max(nh, A.wrapped_h(body, DW, 13) if body else 0) + 22
        col, fill = PAL[i % len(PAL)]
        c.rect(24, y, CW, rh, A.PAPER, A.GREY_L, 1.3, 6)
        c.rect(24, y, NW, rh, A.PAPER if name is None else fill, col, 1.6, 6)
        if name is None:
            c.slot(34, y + rh / 2.0 - 13, NW - 20, 26)
            c.text(24 + NW / 2.0, y + rh / 2.0 + 5, '(%d)' % (k - 1), 15,
                   A.GREY_L, True)
        else:
            c.centred(24 + NW / 2.0, y + rh / 2.0, name, NW - 24, 14, col,
                      True)
        if body:
            c.centred(24 + NW + (CW - NW) / 2.0, y + rh / 2.0, body, DW,
                      13, A.INK)
        c._b(y + rh)
        y += rh + 8
    if not answers:
        return None
    return _fig('panel', title, c, answers, _bank(answers, spares, seed + 1),
                'The rows are a set, not a sequence.')


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
# A figure gave up two of its five cards at 0.40, and two cards out of a
# five-stage flow is a sheet a reader finishes in a minute. Half is the
# most that still leaves the picture carrying the reader: _pick never
# takes all of them, and noadjacent keeps a gapped card between two that
# are still there.
SHARE = 0.50


# A gap a reader fills by copying sixty characters off a word list is
# transcription, not recall. Past this, the card keeps its label and gives
# up one word inside it instead.
WHOLE = 58


def _pick(items, seed, share=SHARE, nomax=None, noadjacent=False,
          labels=None):
    """Which of these labels to take out.

    Never all of them: what is left is how a reader works out what is
    missing. With noadjacent, no two neighbours go — in a sequence the
    stage before and the stage after are what place the one between.

    With labels, two gaps whose answers a reader cannot tell apart are
    never taken together. The word web on the cash-flow sheet offered
    "financing activities" and "noncash investing and financing
    activities" for two slots, and either word fits either slot.
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
        if labels and any(_clash(labels[i], labels[j]) for j in out):
            continue
        if labels and len(clean(labels[i])) > WHOLE:
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


def _clash(a, b):
    """Would these two read as the same answer in one list?"""
    if not a or not b:
        return False
    x, y = a.lower().strip(), b.lower().strip()
    return x == y or (len(min(x, y, key=len)) > 4 and (x in y or y in x))


# A card past this many characters can lose two words and still read.
# Below it, one. A twenty-word sentence missing two words is still a
# sentence; a six-word label missing two is a guessing game.
LONG_CARD = 104


def _inner(text, answers, terms=(), limit=1):
    """The decisive words inside a card, in the order they are written.

    A figure used to give up only its labels, and a flow of four stages
    gave two gaps for the eighty words of prose it had taken out of the
    section. The card that keeps its name can still give up a word of
    what it says, which is the same reading the paragraphs ask for and
    leaves the name as the clue.

    Two words where the card is long enough to spare them. The spans are
    tracked so the second is never inside the first, and the list comes
    back in reading order so the numbering runs down the page.
    """
    text = clean(text or '')
    if not text:
        return []
    cands = []
    for t in sorted([t for t in terms if 4 < len(t) < 30], key=len,
                    reverse=True):
        m = re.search(r'\b%s\b' % re.escape(t), text, re.I)
        if m:
            cands.append((m.start(), m.end(), text[m.start():m.end()], 2))
    for m in re.finditer(r"[A-Za-z][A-Za-z\-']{6,}", text):
        if m.group(0).lower() not in WG.STOP:
            cands.append((m.start(), m.end(), m.group(0), 1))
    cands.sort(key=lambda c: (-c[3], -len(c[2])))
    out = []
    for a, b, w, _rank in cands:
        if len(out) >= limit:
            break
        # Not overlapping, and not crowded. The paragraphs keep twelve
        # characters between gaps so there is always text to reason from;
        # "revealing (7) ____ to (8) ____ or creating legal risk" is the
        # same clause carrying two holes.
        if any(a < y + 18 and x - 18 < b for x, y, _w in out):
            continue
        if any(_clash(w, z) for z in list(answers) + [x[2] for x in out]):
            continue
        out.append((a, b, w))
    return [w for _a, _b, w in sorted(out)]


def _howmany(text):
    """How many words this card can spare."""
    return 2 if len(clean(text or '')) > LONG_CARD else 1


def _sub(text, hits, k, width=10):
    """The card with each of those words replaced by a numbered slot."""
    out = text
    for w in hits:
        out = re.sub(r'\b%s\b' % re.escape(w),
                     '(%d) %s' % (k, '_' * width), out, count=1, flags=re.I)
        k += 1
    return out, k


def pick_spare(answers, spares, seed):
    """A wrong answer shaped like the right ones.

    A list of four phrases of six or seven words with one two-word entry
    among them is a list whose wrong answer strikes out without reading
    anything. So a spare of the same length as the answers comes first, a
    spare within a word of them next, and only then any spare at all.
    """
    low = [a.lower() for a in answers]
    sizes = [len(a.split()) for a in answers] or [1]
    lo, hi = min(sizes), max(sizes)

    def ok(x):
        x = clean(x or '')
        return bool(x) and x.lower() not in low \
            and not any(_clash(x, a) for a in low)
    pool = [clean(x) for x in shuffled(list(spares), seed) if ok(x)]
    for want in (lambda n: lo <= n <= hi, lambda n: lo - 1 <= n <= hi + 1):
        hit = next((x for x in pool if want(len(x.split()))), None)
        if hit:
            return hit
    # Nothing of the right length. Then the closest there is, rather than
    # whichever came first: a list of nine-word answers was offered a
    # four-word glossary entry while an eleven-word cell of the same
    # table sat unused in the pool.
    mid = (lo + hi) / 2.0
    return min(pool, key=lambda x: abs(len(x.split()) - mid)) \
        if pool else None


def _bank(answers, spares, seed):
    """The word list: the answers plus one that is not among them."""
    extra = pick_spare(answers, spares, seed)
    return shuffled(list(answers) + ([extra] if extra else []), seed)


def _fig(kind, title, c, answers, bank, note=''):
    png, w, h = c.render()
    return dict(kind='fig', form=kind, title=title, png=png, w=w, h=h,
                answers=answers, bank=bank, note=note)


def flowfig(title, steps, seed, first, spares=()):
    """A sequence, with some of its stages missing.

    Three ways a stage can give something up, in order of preference. A
    stage with a short name loses the name and keeps its description,
    which is the clue: a reader who sees "enter the item in the accounts"
    can write "record", where an empty box leaves only the position in the
    sequence to go on. A stage whose name is too long to copy off a word
    list keeps it and loses one word inside it. A stage that keeps its
    name loses one word of its description. So every card asks something,
    and nothing asks for eighty-five characters of transcription.
    """
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 22
    gaps = _pick(steps, seed, noadjacent=True,
                 labels=[nm for nm, _s in steps])
    n = len(steps)
    gap = 14
    bw = (W - 56 - gap * (n - 1)) / float(n)
    # Which word each kept card gives up, and from which half of it.
    taken = [nm for nm, _s in steps]
    inner = []
    for i, (nm, sub) in enumerate(steps):
        if i in gaps:
            inner.append((None, []))
            continue
        src = 'sub' if sub and len(sub) >= 24 else 'nm'
        text = sub if src == 'sub' else nm
        hits = (_inner(text, taken, spares, _howmany(text))
                if len(text or '') >= 24 else [])
        taken.extend(hits)
        inner.append((src, hits))
    # Every card is the height of the tallest, so the arrows line up and a
    # gapped card is not obviously the short one.
    hh = 84.0
    for i, (nm, sub) in enumerate(steps):
        pad = ' (00) ______' * 2
        th = A.wrapped_h(nm + (pad if inner[i][0] == 'nm' else ''),
                         bw - 18, 15, bold=True)
        bh = A.wrapped_h((sub or '') + pad, bw - 18, 12) + 4 if sub else 0
        hh = max(hh, th + bh + 18)
    h, answers, k = hh, [], first
    for i, (nm, sub) in enumerate(steps):
        x = 28 + i * (bw + gap)
        if i in gaps:
            c.rect(x, y, bw, hh, A.PAPER, A.INDIGO, 2, 7)
            c.slot(x + 8, y + 8, bw - 16, 26)
            c.text(x + bw / 2.0, y + 26, '(%d)' % k, 15, A.GREY_L, True)
            if sub:
                c.wrapped(x + bw / 2.0, y + 50, sub, bw - 18, 12, A.GREY)
            answers.append(nm)
            k += 1
            c._b(y + hh)
            continue
        src, hits = inner[i]
        head, body = nm, sub
        if hits:
            if src == 'nm':
                head, k2 = _sub(head, hits, k, 6)
            else:
                body, k2 = _sub(body, hits, k, 6)
            answers.extend(hits)
            k = k2
        c.rect(x, y, bw, hh, A.SOFT, A.INDIGO, 2, 7)
        yy = c.wrapped(x + bw / 2.0, y + 22, head, bw - 18, 15, A.INDIGO,
                       True)
        if body:
            c.wrapped(x + bw / 2.0, yy + 16, body, bw - 18, 12, A.GREY)
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
        mine = _pick(members, seed + 7 * gi,
                     nomax=max(1, len(members) - 1), labels=list(members))
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
    """A quantity over periods, with some period labels missing.

    Two things have to be settled before anything is drawn. Series of very
    different size cannot share an axis: the bond schedule puts a carrying
    amount near 102,000 beside an interest figure near 5,000, and plotted
    together the three smaller lines lie flat on the axis and say nothing.
    So only the series within one band are drawn — the largest such group
    — and the rest are left out rather than flattened.

    And the series names sit to the right of the last point, so the plot
    has to stop early enough to leave room for them. It did not, and they
    ran off the edge of the figure.
    """
    # keep the biggest group of series that share a scale
    tops = sorted(((max(abs(v) for v in ser) or 1.0), i)
                  for i, (_nm, ser) in enumerate(rows))
    best = None
    for a, (hi, _i) in enumerate(tops):
        grp = [j for lo, j in tops if lo <= hi * 10 and lo >= hi / 10.0]
        if best is None or len(grp) > len(best[0]) or (
                len(grp) == len(best[0]) and hi > best[1]):
            best = (grp, hi)
    rows = [rows[i] for i in sorted(best[0])] if best else rows
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 24
    LABW = 176.0
    PH, PW = 200.0, W - 90.0 - LABW
    x0, y0 = 90.0, y
    vals = [v for _nm, s in rows for v in s]
    hi, lo = max(vals), min(min(vals), 0)
    span = max(1.0, hi - lo)
    c.line(x0, y0, x0, y0 + PH, A.GREY_L, 1.6)
    c.line(x0, y0 + PH, x0 + PW, y0 + PH, A.GREY_L, 1.6)
    n = len(periods)
    step = PW / float(max(1, n - 1))
    # The gaps go on the SERIES, not on the periods. Asking which year
    # follows 2025 and 2026 tests counting; asking which line is the cash
    # interest makes a reader read the lines — the one that never moves is
    # the coupon, the one that drifts down is the revenue.
    answers, k = [], first
    # With two or more lines the question is which line is which. With one
    # there is nothing to tell apart, so the question becomes which band of
    # the scale each point sits at — which is a real question when the
    # scale is an ageing of receivables and not a run of years.
    bygap = 'series' if len(rows) >= 2 else 'period'
    gaps = (_pick(rows, seed, nomax=max(1, len(rows) // 2))
            if bygap == 'series' else [])
    for si, (nm, series) in enumerate(rows):
        col = [A.INDIGO, A.AMBER, A.TEAL, A.RED][si % 4]
        pts = [(x0 + i * step, y0 + PH - PH * ((v - lo) / span))
               for i, v in enumerate(series)]
        for i in range(len(pts) - 1):
            c.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1],
                   col, 2.4)
        for px, py in pts:
            c.circle(px, py, 4.5, col, A.PAPER, 1.5)
        lx = x0 + PW + 10
        if si in gaps:
            _slotnum(c, lx, pts[-1][1] - 15, LABW - 16, 30, k)
            answers.append(nm)
            k += 1
        else:
            c.labwrap(lx + (LABW - 20) / 2.0, pts[-1][1] + 4, nm,
                      LABW - 20, 13, col, True)
    pgaps = (_pick(periods, seed + 5, nomax=max(1, len(periods) // 2))
             if bygap == 'period' else [])
    for i, p in enumerate(periods):
        px = x0 + i * step
        if i in pgaps:
            _slotnum(c, px - 52, y0 + PH + 10, 104, 26, k)
            answers.append(p)
            k += 1
        else:
            c.labwrap(px, y0 + PH + 28, p, 110, 13, A.INK, True)
    c.text(x0 - 10, y0 + 6, '{:,.0f}'.format(hi), 13, A.GREY, False, 'end')
    c.text(x0 - 10, y0 + PH, '{:,.0f}'.format(lo), 13, A.GREY, False, 'end')
    c.rect(0, y0 + PH + 44, 1, 1, 'none')
    c.rect(0, y0 + PH + 40, 1, 1, 'none')
    note = ('Name each line from how it moves.' if bygap == 'series'
            else 'Name each point on the scale from where it sits.')
    return _fig('graph', title, c, answers, _bank(answers, spares, seed + 1),
                note)


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
    # One side of a row at most. A row with both sides blank has nothing
    # left to reason from: the whole point of a contrast is that the other
    # side tells you what this side has to differ from.
    cells = [(i, s) for i in range(len(rows)) for s in (0, 1)]
    gaps, byrow = set(), set()
    for g in _pick(cells, seed, nomax=max(1, len(cells) // 2),
                   labels=[rows[i][1 + sd] for i, sd in cells]):
        i, side = cells[g]
        if i in byrow:
            continue
        byrow.add(i)
        gaps.add((i, side))
    answers, k = [], first
    for i, (lab, a, b) in enumerate(rows):
        hs = []
        for s, txt in ((0, a), (1, b)):
            x = 24 + LW + 8 + s * (CW + 8)
            if (i, s) in gaps:
                hs.append(('slot', x, txt))
            else:
                hs.append(('card', x, txt))
        # The row is as tall as its tallest cell, the label included. Sizing
        # it from the two sides alone let "Development costs: Orontes's new
        # sparkling-juice line, 300,000" spill out of the top of its box.
        hh = max([A.wrapped_h(t, CW - 20, 14) + 20 for _m, _x, t in hs]
                 + [A.wrapped_h(lab, LW - 16, 14, bold=True) + 20, 34])
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


def bridgefig(title, total, value, parts, seed, first, spares=()):
    """A stated computation, drawn so the arithmetic is visible.

    Each part is a signed bar from a common left edge, so their lengths
    compare directly, and the total sits under a rule. The amounts are
    never gapped — they are what a reader checks the arithmetic with —
    so the gaps go on the labels.
    """
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 22
    LAB, BARW = 250.0, W - 250.0 - 120.0
    top = max([abs(v) for _l, _s, v in parts] + [abs(value), 1.0])
    gaps = _pick(parts, seed, nomax=max(1, len(parts) // 2))
    answers, k = [], first
    for i, (lab, sign, v) in enumerate(parts):
        yy = y + i * 40
        c.text(22, yy + 20, '+' if sign > 0 else '\u2212', 18,
               A.TEAL if sign > 0 else A.RED, True, 'start')
        if i in gaps:
            _slotnum(c, 44, yy, LAB - 56, 30, k)
            answers.append(lab)
            k += 1
        else:
            c.rect(44, yy, LAB - 56, 30, A.SOFT, A.GREY_L, 1.2, 5)
            c.centred(44 + (LAB - 56) / 2.0, yy + 15, lab, LAB - 72, 14,
                      A.INK)
        bw = max(3.0, BARW * (abs(v) / top))
        col = A.TEAL if sign > 0 else A.RED
        fill = A.TEAL_L if sign > 0 else A.RED_L
        c.rect(LAB, yy + 5, bw, 20, fill, col, 1.5, 3)
        c.text(LAB + bw + 8, yy + 20, '{:,.0f}'.format(v), 14, col, True,
               'start')
    yy = y + len(parts) * 40
    c.line(22, yy + 4, W - 24, yy + 4, A.INK, 1.6)
    yy += 12
    c.text(22, yy + 20, '=', 18, A.INDIGO, True, 'start')
    c.rect(44, yy, LAB - 56, 30, A.INDIGO_L, A.INDIGO, 2, 5)
    c.centred(44 + (LAB - 56) / 2.0, yy + 15, total, LAB - 72, 15,
              A.INDIGO, True)
    bw = max(3.0, BARW * (abs(value) / top))
    c.rect(LAB, yy + 5, bw, 20, A.INDIGO_L, A.INDIGO, 2, 3)
    c.text(LAB + bw + 8, yy + 20, '{:,.0f}'.format(value), 15, A.INDIGO,
           True, 'start')
    return _fig('bridge', title, c, answers, _bank(answers, spares, seed + 1),
                'The parts add up to the total; the bars are to scale.')


def sidesfig(title, left, right, lrows, rrows, seed, first, terms=(),
             spares=()):
    """What each framework says, in two columns, with a phrase taken out.

    The rows are NOT paired: the chapter states what each side does without
    lining them up, and inventing the correspondence would assert one it
    never makes. So a whole card is never blanked — there would be nothing
    to work from — and instead one decisive phrase inside a card becomes
    the gap, which is the sentence read closely rather than recognised.
    """
    cols = [(left, lrows, A.INDIGO, A.INDIGO_L),
            (right, rrows, A.AMBER, A.AMBER_L)]
    # choose the gaps first, so both columns are numbered down the page
    chosen = {}
    k = first
    answers = []
    for ci, (_nm, rows, _c, _f) in enumerate(cols):
        # Every card gives up a phrase, not six in ten of them. A card
        # here is never blanked whole -- the rows are not paired, so there
        # would be nothing to work from -- which means a gap costs the
        # reader one word of a sentence he still has. Three in five left
        # the integrated-reporting sheet with three gaps for its whole
        # section.
        for ri, sent in enumerate(rows):
            hits = _inner(sent, answers, terms, _howmany(sent))
            if not hits:
                continue
            chosen[(ci, ri)] = hits
            answers.extend(hits)
    if not answers:
        return None
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 22
    CW = (W - 48 - 16) / 2.0
    tops = []
    for ci, (nm, rows, col, fill) in enumerate(cols):
        x = 24 + ci * (CW + 16)
        c.rect(x, y, CW, 34, fill, col, 2, 5)
        c.centred(x + CW / 2.0, y + 17, nm, CW - 16, 15, col, True)
        tops.append(y + 42)
    k = first
    for ci, (nm, rows, col, fill) in enumerate(cols):
        x = 24 + ci * (CW + 16)
        yy = tops[ci]
        for ri, sent in enumerate(rows):
            txt = sent
            if (ci, ri) in chosen:
                txt, k = _sub(sent, chosen[(ci, ri)], k)
            hh = A.wrapped_h(txt, CW - 24, 14) + 20
            c.rect(x, yy, CW, hh, A.PAPER, A.GREY_L, 1.3, 5)
            c.centred(x + CW / 2.0, yy + hh / 2.0, txt, CW - 24, 14, A.INK)
            yy += hh + 7
    return _fig('sides', title, c, answers, _bank(answers, spares, seed + 1),
                'The two columns are not matched row by row.')


def webfig(title, subject, pairs, seed, first, spares=()):
    """The section's terms around its subject, some of them missing."""
    c = A.Canvas(W)
    y = c.text(W / 2.0, 30, title, 20, A.INDIGO, True) + 20
    c.rect(W / 2.0 - 150, y, 300, 40, A.INDIGO_L, A.INDIGO, 2.4, 7)
    c.centred(W / 2.0, y + 20, subject, 280, 16, A.INDIGO, True)
    y += 48
    TW_, DW = 210.0, W - 48 - 210.0 - 16
    gaps = _pick(pairs, seed, labels=[t for t, _d in pairs])
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


BUILD = {'branch': branchfig, 'panel': panelfig,
         'flow': flowfig, 'tree': treefig, 'chart': chartfig,
         'graph': graphfig, 'contrast': contrastfig, 'web': webfig,
         'bridge': bridgefig, 'sides': sidesfig}
