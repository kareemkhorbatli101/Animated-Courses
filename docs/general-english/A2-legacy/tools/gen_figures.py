#!/usr/bin/env python3
"""Write a unit's 27 new figure definitions from the unit's own text.

Twenty of the twenty-seven slots can be filled verbatim from the markdown:
the word a card shows is a word the task prints, the sentence in a writing
frame is a sentence from the model, the turn in a dialogue is a turn in the
script. Those are generated and need no judgement, and because the text is
copied rather than retyped they pass G18 by construction.

The other seven need a decision a parser cannot make -- which phrase to ring,
what the two bins are, which four places the Part 9 reading walks past -- and
are emitted with a `REVIEW` marker and the raw source beside them.

    python3 tools/gen_figures.py a21 2           # print to stdout
    python3 tools/gen_figures.py a21 2 --write   # merge into the content file
"""
from __future__ import annotations
import os, re, sys, textwrap

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE]
import runner as R          # noqa: E402
import figure_source as S   # noqa: E402
from icon_map import pick   # noqa: E402

CAST_ICON = {'Maya': 'person', 'Tomas': 'nurse', 'Amina': 'shop',
             'Dani': 'book', 'Yuki': 'computer', 'Mr Okonkwo': 'home',
             'Office': 'computer', 'Jun': 'person'}


NUM = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
       7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve'}


def nw(n):
    return NUM.get(n, str(n))


def q(s):
    """A Python string literal, with the typographic apostrophe escaped so the
    generated file is pure ASCII and diffs cleanly."""
    s = str(s).replace('\\', '\\\\').replace("'", "\\'")
    s = s.replace('\u2019', "\\u2019").replace('\u2014', "\\u2014")
    s = s.replace('\u2013', "\\u2013").replace('\u00b7', "\\u00b7")
    return "'" + s + "'"


def wrap(text, indent, width=78):
    """A long alt string as several adjacent literals, house style."""
    out, line = [], ''
    for w in text.split():
        if len(line) + len(w) + 1 > width - indent - 2:
            out.append(line); line = w
        else:
            line = (line + ' ' + w).strip()
    out.append(line)
    pad = ' ' * indent
    return ('\n' + pad).join(q(l + (' ' if i < len(out) - 1 else ''))
                             for i, l in enumerate(out))


def icons_for(labels, default='notice'):
    return [pick(l, None) for l in labels], default


def turn_line(t, limit=46):
    """The substance of a turn, not whichever clause ends first.

    Taking sentence one gave "Morning." for a turn whose point was the next
    nine words. Take the longest sentence that fits, else shorten the turn.
    """
    ss = S.sentences(t) or [t]
    fits = [x for x in ss if len(x) <= limit]
    return max(fits, key=len) if fits else shorten(max(ss, key=len), limit)


def stop(t):
    """Add a full stop only where there is not already one."""
    t = t.strip()
    return t if t[-1:] in '.?!' else t + '.'


# A label cut mid-clause reads as a mistake, not as a short label: "There are
# four rooms in my flat, and the" is worse than no label at all. Cut at a comma
# where there is one, then drop any trailing function word.
TRAIL = {'and', 'but', 'or', 'so', 'the', 'a', 'an', 'of', 'in', 'on', 'at',
         'to', 'with', 'that', 'which', 'because', 'for', 'is', 'are', 'not',
         'my', 'your', 'his', 'her', 'their', 'it', 'there'}


def shorten(t, limit=46):
    t = ' '.join(str(t).split()).strip().rstrip('.')
    if len(t) <= limit:
        return t
    cut = t[:limit]
    if ',' in cut and len(cut.rsplit(',', 1)[0]) > limit * 0.45:
        cut = cut.rsplit(',', 1)[0]
    else:
        cut = cut.rsplit(' ', 1)[0]
    ws = cut.split()
    while ws and ws[-1].lower().strip(',;') in TRAIL:
        ws.pop()
    return ' '.join(ws).rstrip(',;')


def check_items(lines):
    for l in lines:
        m = re.search(r'\*\*Check before you finish:\*\*\s*(.+)$', l)
        if m:
            raw = [x.replace('*', '').replace('_', '').strip(' ?')
                   for x in m.group(1).split('\u2610') if x.strip(' ?')]
            return [r for r in raw if not re.search(r'\d+\s*[\u2013-]\s*\d+\s*words', r)]
    return []


def plan_slots(lines):
    for l in lines:
        m = re.search(r'\*\*Plan \(fill in, then write\):\*\*\s*(.+)$', l)
        if m:
            return [x.strip() for x in m.group(1).split('.') if x.strip()]
    return []


def watch_out(lines):
    for l in lines:
        if 'Watch out!' in l:
            pairs = re.findall(r'\u2717\s*\*(.+?)\*\s*\u2192\s*\u2713\s*\*(.+?)\*', l)
            if pairs:
                return [(a.strip(), b.strip()) for a, b in pairs]
    return []


# --------------------------------------------------------------- the slots
def build(book, num):
    ctx = R.load_ctx(book)
    units, ctx._keys = R.discover(book)
    u = [x for x in units if x.num == num][0]
    body = u.text.lower().replace('\u2019', "'")
    out, review = {}, []

    def L(part, idx):
        p = u.part(part)
        return p.leading if idx is None else p.subs[idx - 1].lines

    def emit(slot, call, alt, note=None):
        out[slot] = (call, alt, note)
        if note:
            review.append(f'{slot}: {note}')

    def cells(words, default='notice'):
        rows = []
        for w in words:
            ic = pick(w)
            rows.append((w, ic or default, ic is None))
        return rows

    def cell_src(rows):
        return ', '.join(f'({q(w)}, {q(i)})' for w, i, _ in rows)

    def unknowns(rows):
        return [w for w, _, miss in rows if miss]

    # --- 2 word_grid, Warm Up 1
    a = S.column_a(L('Warm Up', 1))
    rows = cells(a)
    emit(2, f"F.word_grid(\n        [{cell_src(rows)}],\n"
            f"        height=460, cols={len(a)},",
         f"The {nw(len(a))} warm-up words as numbered picture cards: "
         + ', '.join(w.lower() for w, _, _ in rows) + '.',
         f'icon not in the map for {unknowns(rows)}' if unknowns(rows) else None)

    # --- 3 bank_strip, Warm Up 2
    bk = S.word_bank(L('Warm Up', 2))
    rows = cells(bk)
    emit(3, f"F.bank_strip(\n        [{cell_src(rows)}],\n        height=400,",
         'The ' + {3: 'three', 4: 'four', 5: 'five'}.get(len(bk), str(len(bk)))
         + ' words of the word bank, in the order the task prints them, each '
           'with a picture: ' + ', '.join(w.lower() for w, _, _ in rows) + '.',
         f'icon not in the map for {unknowns(rows)}' if unknowns(rows) else None)

    # --- 5 word_grid, Part 1 sub 1
    a = S.column_a(L('Part 1', 1))
    rows = cells(a)
    emit(5, f"F.word_grid(\n        [{cell_src(rows)}],\n        height=560, cols=4,",
         f"The {nw(len(a))} words of Column A as numbered picture cards: "
         + ', '.join(w.lower() for w, _, _ in rows)
         + ', each with the thing it means drawn beside its number.',
         f'icon not in the map for {unknowns(rows)}' if unknowns(rows) else None)

    # --- 6 the pronunciation slot, Part 1 sub 2
    # Four of the ten units teach syllable stress, one teaches a sound, two
    # teach a changed form and three teach where the beat falls in a phrase.
    # One job cannot draw all four honestly, so the slot takes the job the
    # section's own content asks for -- see figure_source.pron_kind.
    kind, rows = S.pron_kind(L('Part 1', 2))
    if kind == 'stress':
        src = ',\n         '.join(
            f"({q(w)}, [{', '.join(q(x) for x in sy)}], {st})" for w, sy, st in rows)
        emit(6, f"F.sound_shape(\n        [{src}],\n"
                f"        height={max(460, 60 + 110 * len(rows))},",
             f"Where the stress falls in {nw(len(rows))} words of this unit. Each "
             "word has a bar above every syllable, tall and dark where the stress "
             "falls and short and pale elsewhere, and the same pattern again at "
             "the right as one large dot among small ones.")
    elif kind == 'sound':
        src = ',\n         '.join(
            f"({q(g)}, [{', '.join(q(w) for w in ws)}])" for g, ws in rows)
        # the card has to fit its own words: a fixed 440 left two-thirds of
        # each column empty when a group held only two
        _h = 338 + 66 * (max(len(ws) for _, ws in rows) - 1)
        emit(6, f"F.sound_groups(\n        [{src}],\n        height={_h},",
             f"The words of this unit sorted by the sound they end in, "
             f"{nw(len(rows))} columns in all: "
             + '; '.join(f"{g} takes " + ', '.join(ws) for g, ws in rows) + '.')
    elif kind == 'pair':
        src = ',\n         '.join(f'({q(a)}, {q(b)})' for a, b in rows)
        emit(6, f"F.function_map(\n        [{src}],\n"
                f"        height={max(420, 90 + 86 * len(rows))},",
             f"The {nw(len(rows))} forms this unit drills, each with an arrow from "
             "the one you start with to the one you say: "
             + ', '.join(f'{a} to {b}' for a, b in rows) + '.')
    elif kind == 'beat':
        src = ',\n         '.join(f'({q(a)}, {q(b)})' for a, b in rows)
        emit(6, f"F.annotated_lines(\n        [{src}],\n"
                f"        height={max(360, 120 + 86 * len(rows))},",
             f"{nw(len(rows)).capitalize()} phrases from this unit with the word "
             "that carries the beat ringed in each: "
             + ', '.join(b for _, b in rows) + '.')
    else:
        emit(6, "F.sound_shape(\n        [REVIEW],\n        height=460,",
             'The pronunciation point of this unit, drawn.',
             'pronunciation section not recognised')

    # --- 9 bank_strip, Part 1 sub 6
    bk = S.word_bank(L('Part 1', 6))
    rows = cells(bk)
    emit(9, f"F.bank_strip(\n        [{cell_src(rows)}],\n        height=400,",
         'The four words of the fill-in word bank, in bank order, each drawn: '
         + ', '.join(w.lower() for w, _, _ in rows) + '.',
         f'icon not in the map for {unknowns(rows)}' if unknowns(rows) else None)

    # --- 10 writing_frame, Part 1 sub 7
    def frame(part, idx, slot, what):
        lines = L(part, idx)
        ck = check_items(lines) or plan_slots(lines)
        ms = S.sentences(S.model(lines))
        n = min(len(ck), len(ms), 4) or min(len(ms), 3)
        steps = [(shorten(ck[i], 26) if i < len(ck) else f'Step {i + 1}',
                  shorten(ms[i], 46) + '.') for i in range(n)]
        src = ',\n         '.join(f'({q(a)}, {q(b)})' for a, b in steps)
        emit(slot, f"F.writing_frame(\n        [{src}],\n"
                   f"        height={163 * n + 82},",
             f"The shape of {what} in {['one','two','three','four'][n-1]} steps -- "
             + ', '.join(a.lower() for a, _ in steps)
             + ' -- with a line of the model beside each one.',
             'no Check-before-you-finish list here, so the step labels are '
             'placeholders' if len(ck) < n else
             ('no model sentences' if not ms else None))

    frame('Part 1', 7, 10, 'the two or three sentences to write')

    # --- 11 annotated_lines, Part 2 sub 1  (REVIEW: which phrase to ring)
    lines = L('Part 2', 1)
    sents = S.sentences(S.notice(lines))[:4]
    t = S.task(lines)
    m = re.search(r'Underline\s+(.+?)[.?]', t)
    targets = []
    if m:
        raw = m.group(1).replace('the ', '').strip()
        targets = [x.strip(' *') for x in re.split(r'\s+and\s+|,\s*', raw)]
    pairs = []
    for s in sents:
        hit = next((g for g in targets if g and g in s.lower()), '')
        if hit:
            i = s.lower().index(hit)
            hit = s[i:i + len(hit)]
        pairs.append((s, hit))
    src = ',\n         '.join(f'({q(a)}, {q(b)})' for a, b in pairs)
    emit(11, f"F.annotated_lines(\n        [{src}],\n"
             f"        height={max(360, 120 + 80 * len(pairs))},",
         f"{['One','Two','Three','Four'][len(pairs)-1]} lines from the notice with "
         "the target form ringed in each. This is what a correct underlining "
         "looks like.",
         f'ring phrase empty for some lines; task says {t!r}'
         if any(not b for _, b in pairs) else None)

    # --- 14 sort_bins, Part 2 sub 4  (REVIEW: the bins)
    lines = L('Part 2', 4)
    opts = re.findall(r'\(([^()/]+)\s*/\s*([^()/]+)\)', '\n'.join(lines))
    bins = []
    for a, b in opts:
        for x in (a.strip(), b.strip()):
            if x not in bins:
                bins.append(x)
    chips = [shorten(re.sub(r'\s*\([^)]*\)', '', s), 22) for s in S.numbered(lines)][:5]
    emit(14, f"F.sort_bins(\n        [{', '.join(q(b) for b in bins[:3])}],\n"
             f"        [{', '.join(q(c) for c in chips)}],\n        height=560,",
         'The items of this task as chips above empty bins, one for each form. '
         'Which chip goes in which bin is the exercise, so none of them is placed.',
         f'bins guessed as {bins[:3]}; chips are whole sentences, shorten them')

    # --- 15 error_pairs, Part 2 sub 5
    wo = watch_out(L('Part 2', 2)) or watch_out(u.lines)
    wrongs = S.numbered(L('Part 2', 5))[:3]
    rows = ([(wo[0][0], wo[0][1])] if wo else []) + [(w, None) for w in wrongs]
    src = ',\n         '.join(
        f'({q(a)}, {q(b) if b else "None"})' for a, b in rows)
    emit(15, f"F.error_pairs(\n        [{src}],\n"
             f"        height={max(360, 120 + 95 * len(rows))},",
         'One correction worked through -- the wrong form struck out and the '
         'right one beside it -- and then three more sentences with an empty '
         'line for the learner to write the correct form.',
         'no Watch out! pair found' if not wo else None)

    # --- 17 / 31 dialogue_strip
    def dialogue(part, idx, slot, what):
        turns = S.script(L(part, idx))[:4]
        # one icon per speaker, and never the same icon for two of them: the
        # icon is how the reader tells the sides apart
        seen, spare = {}, ['person', 'speech', 'guest', 'teacher', 'crowd']
        for w, _ in turns:
            if w in seen:
                continue
            ic = CAST_ICON.get(w) or pick(w)
            while not ic or ic in seen.values():
                ic = spare.pop(0) if spare else 'person'
            seen[w] = ic
        rows = [(w, seen[w], stop(turn_line(t))) for w, t in turns]
        src = ',\n         '.join(
            f'({q(a)}, {q(b)}, {q(c)})' for a, b, c in rows)
        emit(slot, f"F.dialogue_strip(\n        [{src}],\n        height=560,",
             f'{what} as speech bubbles, one speaker on each side. '
             + ' '.join(f'{a}: {c}' for a, _, c in rows),
             'fewer than three turns parsed' if len(rows) < 3 else None)

    dialogue('Part 3', 2, 17, 'The second listening')
    dialogue('Part 7', 2, 31, 'The 7B exchange')

    # --- 18 match_columns, Part 3 sub 3
    lines = L('Part 3', 3)
    left = S.column_a(lines)
    right = S.column_b(lines)
    lrows = [(w, CAST_ICON.get(w, pick(w, 'person'))) for w in left]
    emit(18, "F.match_columns(\n        ["
             + ', '.join(f'({q(a)}, {q(b)})' for a, b in lrows) + "],\n        ["
             + ',\n         '.join(q(shorten(r, 40)) for r in right)
             + f"],\n        height={max(420, 100 + 110 * max(len(left), len(right)))},",
         f'{nw(len(left)).capitalize()} cards on the left and {nw(len(right))} on the '
         'right for the learner to join. One of the right-hand options is not wanted, and it is drawn '
         'so the spare one is visible rather than implied.')

    # --- 19 question_cards, Part 4 sub 1
    qs = S.bullets(L('Part 4', 1))[:3]
    rows = [((S.sentences(x) or [x])[0], pick(x, 'question')) for x in qs]
    emit(19, "F.question_cards(\n        ["
             + ',\n         '.join(f'({q(a)}, {q(b)})' for a, b in rows)
             + "],\n        height=480,",
         'The three discussion questions as numbered cards a pair can put on '
         'the table and take one at a time.',
         'no bullets parsed' if not qs else None)

    # --- 20 info_gap_pair, Part 4 sub 2
    st = S.students(L('Part 4', 2))
    sides = []
    for who, _, facts in st[:2]:
        rows = [(shorten(x, 22), pick(x, 'notice')) for x in facts[:4]]
        sides.append((who, rows))
    src = ',\n        '.join(
        f'({q(w)}, [' + ', '.join(f'({q(a)}, {q(b)})' for a, b in rows) + '])'
        for w, rows in sides)
    emit(20, f"F.info_gap_pair(\n        {src},\n        height=560,",
         (sides[0][0] if sides else 'Student A') + "\\u2019s facts on the left and "
         + (sides[1][0] if len(sides) > 1 else 'Student B') + "\\u2019s on the "
         "right, with a fold line between them, so each student sees only their "
         "own -- which is what the task has always asked for and a pair of prose "
         "lists on one page cannot give.",
         'students not parsed' if len(sides) < 2 else None)

    # --- 22 talk_shape, Part 4 sub 4
    t = S.task(L('Part 4', 4))
    tail = t.split(':', 1)[1] if ':' in t else t
    beats = [shorten(x, 30) for x in re.split(r',\s*and\s+|,\s*', tail) if x.strip()][:4]
    rows = [(b, pick(b, 'speech')) for b in beats]
    src = ',\n         '.join(f'({q(a)}, {s}, {q(b)})'
                              for (a, b), s in zip(rows, [1, 2, 2, 1]))
    emit(22, f"F.talk_shape(\n        [{src}],\n        height=420,",
         f'The one-minute talk as {nw(len(rows))} beats on a clock line, each block '
         'as wide as the share of the minute it should take.',
         'beats split from the task sentence; check they read as labels')

    # --- 24 word_grid, Part 5 sub 2
    a = S.column_a(L('Part 5', 2))
    rows = cells(a)
    emit(24, f"F.word_grid(\n        [{cell_src(rows)}],\n"
             f"        height=440, cols={len(a)},",
         f'The {nw(len(a))} words from the reading as numbered picture cards: '
         + ', '.join(w.lower() for w, _, _ in rows) + '.',
         f'icon not in the map for {unknowns(rows)}' if unknowns(rows) else None)

    # --- 27 / 28 / 29 / 34 writing frames
    frame('Part 6', 2, 27, 'the opinion paragraph')
    frame('Part 6', 3, 28, 'the message')
    frame('Part 6', 4, 29, 'the reflection')
    frame('Part 7', 5, 34, 'the Part 7 writing task')

    # --- 32 sequence_steps, Part 7 sub 3
    bl = S.blanks(L('Part 7', 3))
    rows = [(shorten(x, 46) + '.', pick(x, 'list')) for x in bl]
    emit(32, "F.sequence_steps(\n        ["
             + ',\n         '.join(f'({q(a)}, {q(b)})' for a, b in rows)
             + f"],\n        height={max(360, 110 + 95 * len(rows))},",
         f'The {nw(len(rows))} steps still to be numbered, in the order the task '
         'prints them and not in the right order, each with an empty box at the '
         'left for its number.',
         'no blank steps parsed' if not bl else None)

    # --- 33 cue_cards, Part 7 sub 4
    cd = S.cards(L('Part 7', 4))
    if len(cd) >= 2:
        src = ',\n        '.join(
            f'({q(t)},\n         [' + ', '.join(q(shorten(i, 34)) for i in its[:4])
            + f'], {q(pick(t, "person"))})' for t, its in cd[:2])
        emit(33, f"F.cue_cards(\n        {src},\n        height=560,",
             'The two role-play cards side by side. ' + ' '.join(
                 f'{t}: ' + ', '.join(i.lower() for i in its[:4]) + '.'
                 for t, its in cd[:2]))
    else:
        emit(33, "F.cue_cards(\n        REVIEW,\n        height=560,",
             'The two role-play cards side by side.', 'cards not parsed')

    # --- 36 word_grid, Part 8 sub 1
    a = S.column_a(L('Part 8', 1))
    rows = cells(a)
    emit(36, f"F.word_grid(\n        [{cell_src(rows)}],\n"
             f"        height=440, cols={len(a)},",
         f'The {nw(len(a))} words from the global story as numbered picture cards: '
         + ', '.join(w.lower() for w, _, _ in rows) + '.',
         f'icon not in the map for {unknowns(rows)}' if unknowns(rows) else None)

    # --- 37 close_scene, Part 9 leading  (REVIEW: which places)
    emit(37, "F.close_scene(\n        [REVIEW],\n        height=460,",
         'The close-to-home reading drawn as the place it describes.',
         'pick four places the reading walks past, in order')

    # --- 38 decision_fork, Part 9 sub 1  (REVIEW: the costs)
    lines = L('Part 9', 1)
    t = S.task(lines)
    opts = re.findall(r'\(([abc])\)\s*([^,?]+)', t)
    head = re.split(r'Should you', t)[0].strip().rstrip('.')
    src = ',\n         '.join(
        f'({q(shorten(o.strip(), 26))},\n          [REVIEW], {q(pick(o, "question"))})'
        for _, o in opts[:3])
    emit(38, f"F.decision_fork(\n        {q(shorten(head, 54) + '?')},\n"
             f"        [{src}],\n        height=580,",
         'The decision task as one question and three branches, with what each '
         'one costs.',
         'two short consequence lines per branch, from the model and the reading')

    # --- 39 bank_strip, Part 10 sub 1
    bk = S.word_bank(L('Part 10', 1))
    rows = cells(bk)
    emit(39, f"F.bank_strip(\n        [{cell_src(rows)}],\n"
             f"        height={560 if len(bk) > 5 else 400}, "
             f"cols={4 if len(bk) > 5 else len(bk)},",
         f'The {nw(len(bk))} words of the spiral review bank, in bank order: '
         + ', '.join(w.lower() for w, _, _ in rows) + '.',
         f'icon not in the map for {unknowns(rows)}' if unknowns(rows) else None)

    # --- 41 glossary_grid, Part 10 sub 3
    g = S.glossary(u)
    rows = cells(g)
    emit(41, f"F.glossary_grid(\n        [{cell_src(rows)}],\n"
             f"        height=700, cols=5,",
         f'All {nw(len(g))} glossary words of Unit {num} as picture cards on one '
         'page: ' + ', '.join(w.lower() for w, _, _ in rows) + '.',
         f'icon not in the map for {unknowns(rows)}' if unknowns(rows) else None)

    return u, out, review


def render(book, num):
    u, out, review = build(book, num)
    chunks = []
    for slot in sorted(out):
        call, alt, note = out[slot]
        head = f' {slot}: lambda: {call}'
        body = f"        alt={wrap(alt, 12)}),"
        tag = f'        # REVIEW: {note}\n' if note else ''
        chunks.append(tag + head + '\n' + body)
    return '\n\n'.join(chunks), review


def write(book, num):
    """Merge the generated slots into the unit's content module.

    The fourteen slots that were already there are not touched: they are the
    hand-written ones that have shipped since the first build, and the whole
    point of the renumber was that they keep their numbers.
    """
    path = os.path.join(ROOT, 'content', book, f'u{num:02d}_figures.py')
    src = open(path, encoding='utf-8').read()
    text, review = render(book, num)
    blocks = {}
    for b in text.split('\n\n'):
        blocks[int(re.search(r'^(?:\s*# REVIEW.*\n)? (\d+): lambda:', b).group(1))] = b
    have = sorted(int(m.group(1))
                  for m in re.finditer(r'^ (\d+): lambda:', src, re.M))
    body = src[:src.index('\n 1: lambda:') + 1]
    pieces = []
    for slot in sorted(set(have) | set(blocks)):
        if slot in blocks:
            pieces.append(blocks[slot])
        else:
            i = src.index(f'\n {slot}: lambda:') + 1
            nxt = [s2 for s2 in have if s2 > slot]
            j = src.index(f'\n {nxt[0]}: lambda:') + 1 if nxt else src.rindex('}')
            pieces.append(src[i:j].rstrip().rstrip(','))
    open(path, 'w', encoding='utf-8').write(
        body + ',\n\n'.join(p.rstrip().rstrip(',') for p in pieces) + ',\n}\n')
    return review


# ------------------------------------------------------------------ captions
# Caption text, by slot. Kept short on purpose: 41 captions at the measured
# 13.6 words each is 558 words out of a unit, and `unit.caption_words_dense`
# holds the line at 480-625. Nothing here may contain a phrase the device
# counter watches for -- "is not needed" cost Unit 1 a rebuild.
CAPTION = {
    2:  'The {na} warm-up words, and the thing each one means',
    3:  'The word bank for this task, in the order it is printed',
    5:  'The {na} words of Column A, and what each one is',
    6:  'Where the stress falls in {npr} words of this unit',
    9:  'The {nbk} words of the bank, in the order the task gives them',
    10: 'The shape of your two or three sentences, with the model beside each step',
    11: 'Lines from the notice, with the target form ringed in each',
    14: 'The items of this task, and the bins they sort into',
    15: 'One correction done for you, and the rest to write',
    17: 'The second listening, turn by turn',
    18: '{nl} on the left, {nr} on the right, and one spare',
    19: 'The three questions as cards, to take one at a time',
    20: 'Student A\u2019s facts and Student B\u2019s, with a fold between them',
    22: 'The one-minute talk as {nb} beats, each as wide as its share',
    24: 'The {na} words from the reading, drawn',
    27: 'The shape of the opinion paragraph, step by step',
    28: 'The moves of the message, with a line of the model for each',
    29: 'The reflection, step by step',
    31: 'The 7B exchange: who takes each turn',
    32: 'The steps still to be numbered, as the task prints them',
    33: 'The 7D cards: what each of you has to say',
    34: 'The Part 7 note, with the model beside each line',
    36: 'The {na} words from the global story, drawn',
    37: 'The close-to-home reading, drawn along one street',
    38: 'Three ways to decide, and what each one costs',
    39: 'The {nbk} words of the review bank, in bank order',
    41: 'All {ng} glossary words of Unit {unit}, one card each',
}


def caption_text(book, num):
    ctx = R.load_ctx(book)
    units, ctx._keys = R.discover(book)
    u = [x for x in units if x.num == num][0]

    def L(part, idx):
        p = u.part(part)
        return p.leading if idx is None else p.subs[idx - 1].lines

    n = {
        2:  {'na': nw(len(S.column_a(L('Warm Up', 1))))},
        5:  {'na': nw(len(S.column_a(L('Part 1', 1))))},
        6:  {'npr': nw(len(S.pronunciation(L('Part 1', 2))))},
        9:  {'nbk': nw(len(S.word_bank(L('Part 1', 6))))},
        18: {'nl': nw(len(S.column_a(L('Part 3', 3)))).capitalize(),
             'nr': nw(len(S.column_b(L('Part 3', 3))))},
        22: {'nb': nw(min(4, len([x for x in re.split(
             r',\s*and\s+|,\s*', (S.task(L('Part 4', 4)).split(':', 1) + [''])[1])
             if x.strip()])))},
        24: {'na': nw(len(S.column_a(L('Part 5', 2))))},
        36: {'na': nw(len(S.column_a(L('Part 8', 1))))},
        39: {'nbk': nw(len(S.word_bank(L('Part 10', 1))))},
        41: {'ng': nw(len(S.glossary(u))), 'unit': num},
    }
    return {k: v.format(**n.get(k, {})) for k, v in CAPTION.items()}


def write_captions(book, num):
    """Insert the 27 new caption lines, each directly under its sub-heading.

    The anchor is the sub-heading the slot belongs to, read from the parsed
    model rather than guessed, so a unit whose headings differ in wording from
    Unit 1's still lands them in the right place. Part 9's opener has no
    sub-heading -- it sits in the part's leading text -- so it anchors on the
    track line instead.
    """
    ctx = R.load_ctx(book)
    units, ctx._keys = R.discover(book)
    u = [x for x in units if x.num == num][0]
    path = os.path.join(ROOT, 'units', f'{book}-u{num:02d}.md')
    src = open(path, encoding='utf-8').read()
    caps = caption_text(book, num)
    plan = []
    for slot, (part, idx) in sorted(S.WHERE.items()):
        p = u.part(part)
        if idx is None:
            hdr = next(l for l in src.split('\n')
                       if l.startswith('**' + part + ' ·'))
            after = src.split('\n')[src.split('\n').index(hdr) + 1:]
            anchor = next(l for l in after if l.startswith('***['))
        else:
            anchor = '**' + p.subs[idx - 1].heading + '**'
        if src.count(anchor) != 1:
            raise SystemExit(f'slot {slot}: anchor {anchor!r} appears '
                             f'{src.count(anchor)} times')
        plan.append((anchor, slot, caps[slot]))
    for anchor, slot, text in plan:
        line = f'*Figure {num}.{slot} · {text}.*'
        src = src.replace(anchor, f'{anchor}\n\n{line}', 1)
    open(path, 'w', encoding='utf-8').write(src)
    return len(plan)


if __name__ == '__main__':
    book = sys.argv[1] if len(sys.argv) > 1 else 'a21'
    num = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    if '--captions' in sys.argv:
        print(f'inserted {write_captions(book, num)} captions into '
              f'units/{book}-u{num:02d}.md')
        sys.exit(0)
    if '--write' in sys.argv:
        review = write(book, num)
        print(f'wrote content/{book}/u{num:02d}_figures.py')
    else:
        text, review = render(book, num)
        print(text)
    print('\n# ---- needs a decision:')
    for r in review:
        print('#  ', r)
