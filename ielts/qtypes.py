# -*- coding: utf-8 -*-
"""What question type each item actually is, and the label that says so.

The November audit found three kinds of false label: 542 items headed
"short answer" that were sentences with a blank in them, 171 blocks
claiming a drawn table, flow chart or form where only 21 carried a figure
of any kind, and 270 multiple-choice items in a series where no exercise
was headed "Multiple choice". A label nobody can re-derive is a label
that drifts, so this module makes the label derivable from the block and
the derivation checkable.

    shape_of(item, block)   the official type, from the item and the
                            figure the block draws
    types_of(block)         the types a block holds
    label_for(block)        the sentence the book prints

The classifier never reads `task`, which is the field it exists to
rewrite. It reads the items, the lettered bank and the **kind of figure
the block actually draws**, which is the thing that decides a completion
task's name in the real paper: gaps against a drawn table are table
completion, gaps against a process diagram are flow-chart completion,
gaps against a plan or a schematic are diagram label completion, and gaps
against nothing are note or sentence completion. A block that claims a
table and draws none is the defect this module reports.

One authored field remains, `qkind`, for the single distinction the data
cannot settle: whether a run of gapped lines with no figure is note
completion or sentence completion. In the real paper that turns on
whether the gaps come from one continuous set or stand independently,
which is a fact about the task the author wrote. `verify()` fails when an
authored qkind and the items disagree.

The inventory is the official one: eleven Reading types, six Listening.
"""
import re

READING = [
    'multiple choice',
    'True/False/Not Given',
    'Yes/No/Not Given',
    'matching information',
    'matching headings',
    'matching features',
    'matching sentence endings',
    'sentence completion',
    'note/table/flow-chart completion',
    'plan/map/diagram labelling',
    'short answer',
]
LISTENING = [
    'multiple choice',
    'matching',
    'plan/map/diagram labelling',
    'note/table/flow-chart completion',
    'sentence completion',
    'short answer',
]
COMPLETION = ('sentence completion', 'note/table/flow-chart completion')

# Which figure kinds a completion task can be set against, and what the
# resulting task is called on the page. bar, line and pie are charts: a
# question about a chart is not a labelling task and is not named one.
FRAME = {'table': ('note/table/flow-chart completion', 'Table completion'),
         'process': ('note/table/flow-chart completion',
                     'Flow-chart completion'),
         'map': ('plan/map/diagram labelling', 'Plan labelling'),
         'device': ('plan/map/diagram labelling', 'Diagram labelling'),
         # The two frames written for units 81 and 82. A route is a map
         # and a section is a diagram, and a question set against either
         # is the same official task as one set against the two above.
         'route': ('plan/map/diagram labelling', 'Map labelling'),
         'section': ('plan/map/diagram labelling', 'Diagram labelling')}

PRETTY = {
    'multiple choice': 'Multiple choice',
    'True/False/Not Given': 'True/False/Not Given',
    'Yes/No/Not Given': 'Yes/No/Not Given',
    'matching information': 'Matching information',
    'matching headings': 'Matching headings',
    'matching features': 'Matching features',
    'matching sentence endings': 'Matching sentence endings',
    'sentence completion': 'Sentence completion',
    'note/table/flow-chart completion': 'Note completion',
    'plan/map/diagram labelling': 'Plan labelling',
    'matching': 'Matching',
    'short answer': 'Short answer',
}

# How many gaps make a note/summary set rather than independent
# sentences. See completion_kind for why this is five.
NOTE_SET = 5

GAP = re.compile(r'_{3,}')
PARA = re.compile(r'^(paragraph|section|part)\s+[\dA-Za-z]+$', re.I)
HEADING = re.compile(r'best heading', re.I)
WHICH = re.compile(r'^\s*(which|in which|who)\b', re.I)
ENDING = re.compile(r'ending', re.I)
MAPWORDS = re.compile(r'plan|map|diagram|schematic|position', re.I)


def frame_of(blk):
    """(official type, printed name) for the figure this block draws, or
    (None, None). The first drawn frame wins; a chart is not a frame."""
    for key in ('figure', 'figure2', 'figure3'):
        f = blk.get(key)
        if isinstance(f, dict) and f.get('kind') in FRAME:
            return FRAME[f['kind']]
    return (None, None)


LETTER = re.compile(r'^[A-J]$')


def in_bank(it, blk):
    """True when this item is answered by a letter of the block's bank.

    The test is the letter and its position, not the bank's contents: a
    labelling bank happens to be a list of letters, while an endings bank
    is a list of the endings themselves and the letters are implied by
    their order. Comparing the answer against the contents therefore
    worked for one kind and silently failed for the other, which cost the
    series its matching-sentence-endings count for an hour."""
    bank = blk.get('bank')
    if not bank:
        return False
    a = it[2]
    if not isinstance(a, str) or not LETTER.match(a.strip()):
        return False
    return 'ABCDEFGHIJ'.index(a.strip()) < len(bank)


def shape_of(it, blk, skill='read'):
    """The official type of one item. 'gap' where only qkind can decide."""
    stem, opts = it[0], it[1]
    if opts:
        low = {str(o).strip().lower() for o in opts}
        if low == {'true', 'false', 'not given'}:
            return 'True/False/Not Given' if skill == 'read' else 'short answer'
        if low == {'yes', 'no', 'not given'}:
            return 'Yes/No/Not Given' if skill == 'read' else 'short answer'
        if all(PARA.match(str(o).strip()) for o in opts):
            return 'matching information' if skill == 'read' else 'matching'
        if HEADING.search(stem):
            return 'matching headings' if skill == 'read' else 'matching'
        if WHICH.search(stem) and not GAP.search(stem):
            return 'matching features' if skill == 'read' else 'matching'
        return 'multiple choice'
    if in_bank(it, blk):
        # A bank item is one whose answer is a letter the bank offers.
        # Testing that, rather than the mere presence of a bank, lets one
        # block hold a lettered task and a completion task at once, which
        # is what a real Part 2 does and what this series needs in order
        # to reach the floors without inventing recordings.
        bl = '%s %s' % (blk.get('banklabel', ''), blk.get('heading', ''))
        if MAPWORDS.search(bl) or frame_of(blk)[0] == \
                'plan/map/diagram labelling':
            return 'plan/map/diagram labelling'
        if ENDING.search(bl):
            return ('matching sentence endings' if skill == 'read'
                    else 'matching')
        return 'matching features' if skill == 'read' else 'matching'
    if GAP.search(stem or ''):
        t = frame_of(blk)[0]
        return t if t else 'gap'
    return 'short answer'


def completion_kind(blk):
    """Which completion type a block's unframed gapped lines are.

    Authored in qkind where the author has said. Otherwise the gap count
    decides, and the threshold is five, because that is where the two
    tasks differ in the real paper: a note, summary, table or flow-chart
    set is one continuous frame and runs five to eight gaps, while a
    sentence-completion set is three to six independent sentences drawn
    from different parts of the text. Blocks of three and four gaps in
    this series are the second thing - their gaps sit in different
    paragraphs - so they are sentence completion and are now named that.

    The rule is written down, with its reason, so that a reader can
    disagree with the threshold rather than wonder what happened. It was
    3 when this module was first written and moving it to 5 reclassified
    668 reading items, which is why it is a constant and not a guess
    repeated in four places."""
    q = blk.get('qkind') or ()
    for k in COMPLETION:
        if k in q:
            return k
    gaps = sum(1 for it in blk['items']
               if not it[1] and GAP.search(it[0] or ''))
    return ('note/table/flow-chart completion' if gaps >= NOTE_SET
            else 'sentence completion')


def classify(it, blk, skill='read'):
    """The official type of one item, with gaps resolved."""
    s = shape_of(it, blk, skill)
    return completion_kind(blk) if s == 'gap' else s


def types_of(blk, skill='read'):
    """The official types a block holds, in the order its items use them."""
    out = []
    for it in blk['items']:
        k = classify(it, blk, skill)
        if k not in out:
            out.append(k)
    return out


def _name(t, blk):
    """What a type is called on the page, which is finer than the official
    type for a completion task set against a drawn frame."""
    ft, fname = frame_of(blk)
    if ft == t and fname:
        return fname
    return PRETTY.get(t, t)


SEP = ' \u00b7 '          # between a listening scenario and its types


def _lower(t):
    """A type name mid-sentence. True/False/Not Given and Yes/No/Not Given
    keep their capitals, because they are the names of the three answers a
    candidate writes and lower-casing them makes the label look like a
    typing error."""
    return t if '/' in t else t[0].lower() + t[1:]


def typelist(blk, skill='read'):
    """The types a block holds, as the book names them, joined for print."""
    seen = []
    for t in types_of(blk, skill):
        nm = _name(t, blk)
        if nm not in seen:
            seen.append(nm)
    if not seen:
        return ''
    if len(seen) == 1:
        return seen[0]
    all_ = [seen[0][0].upper() + seen[0][1:]] + [_lower(t) for t in seen[1:]]
    return '%s and %s' % (', '.join(all_[:-1]), all_[-1])


def label_for(blk, skill='read'):
    """The sentence the book prints above the exercise.

    A reading label is the list of question types, which is what a reading
    label has always been. A listening label keeps the scenario, because
    the real paper tells a candidate who is speaking and why, and adds the
    question types after it, because until this phase the series never
    told a candidate which listening task they were practising."""
    ts = typelist(blk, skill)
    if not ts:
        return ''
    if skill != 'listen':
        return ts
    scen = (blk.get('task') or '').split(SEP)[0].strip()
    return '%s%s%s' % (scen, SEP, ts[0].lower() + ts[1:]) if scen else ts


def bar_label(blk, skill='read'):
    """A short label for the skill bar, which is a 340px box that shrinks
    its text to fit. The full type list goes on the exercise line, which
    wraps; this one names the first type and counts the rest, so the bar
    stays legible and gate 6 has nothing to catch."""
    seen = []
    for t in types_of(blk, skill):
        nm = _name(t, blk)
        if nm not in seen:
            seen.append(nm)
    if not seen:
        return ''
    return seen[0] if len(seen) == 1 else '%s +%d' % (seen[0], len(seen) - 1)


def verify(blk, skill='read'):
    """Why an authored qkind and the block's items disagree, or []."""
    bad = []
    q = blk.get('qkind')
    if not q:
        return bad
    held = set(types_of(blk, skill))
    for k in q:
        if k not in held:
            bad.append('qkind claims %r, no item is one' % k)
    gaps = [it for it in blk['items']
            if not it[1] and GAP.search(it[0] or '')]
    for k in COMPLETION:
        if k in q and not gaps:
            bad.append('qkind claims %r with no gapped line' % k)
    if sum(1 for k in COMPLETION if k in q) > 1:
        bad.append('qkind claims both completion types at once')
    return bad


def census(blocks, skill):
    """{official type: count} over blocks carrying 'items'."""
    out = {}
    for blk in blocks:
        for it in blk['items']:
            k = classify(it, blk, skill)
            out[k] = out.get(k, 0) + 1
    return out
