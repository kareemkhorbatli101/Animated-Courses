# -*- coding: utf-8 -*-
"""What question type each item actually is.

One classifier, used by the distribution gate, by the label repair and by
the reports, so that all three agree by construction. It reads the item
and the block it sits in, never the printed label, because the whole point
of the audit that produced it was that a label can be wrong.

The inventory is the official one: eleven Reading types and six Listening
types. A series that teaches ten of eleven has a hole in it, and until this
module existed nothing in the project could say which ten.

    from qtypes import classify, READING, LISTENING
    classify(item, block, 'read')   -> one of READING
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
    'summary/note/table/flow-chart completion',
    'plan/map/diagram labelling',
    'short answer',
]
LISTENING = [
    'multiple choice',
    'matching',
    'plan/map/diagram labelling',
    'form/note/table/flow-chart completion',
    'sentence completion',
    'short answer',
]

GAP = re.compile(r'_{3,}')
PARA = re.compile(r'^(paragraph|section|part)\s+[\dA-Za-z]+$', re.I)
HEADING = re.compile(r'best heading', re.I)
WHICH = re.compile(r'^\s*(which|in which|who)\b', re.I)
ENDING = re.compile(r'ending', re.I)
PLAN = re.compile(r'plan|map|diagram', re.I)
# A completion block says in its own label how its gaps are presented: a
# table and a flow chart are different tasks in the real paper even though
# the candidate writes the same words into the same kind of gap.
PRESENT = [
    ('summary/note/table/flow-chart completion',
     r'summary completion|note completion|table completion|'
     r'flow-chart completion|form completion'),
]


def _blocktext(blk):
    return ' '.join(str(blk.get(k, '')) for k in
                    ('task', 'banklabel', 'heading', 'kind'))


def classify(it, blk, skill):
    """The type of one item. skill is 'read' or 'listen'."""
    stem, opts = it[0], it[1]
    bt = _blocktext(blk)
    if opts:
        low = [str(o).strip().lower() for o in opts]
        s = set(low)
        if s == {'true', 'false', 'not given'}:
            return ('True/False/Not Given' if skill == 'read'
                    else 'short answer')
        if s == {'yes', 'no', 'not given'}:
            return ('Yes/No/Not Given' if skill == 'read'
                    else 'short answer')
        if all(PARA.match(str(o).strip()) for o in opts):
            return ('matching information' if skill == 'read'
                    else 'matching')
        if HEADING.search(stem):
            return ('matching headings' if skill == 'read'
                    else 'matching')
        if WHICH.search(stem) and not GAP.search(stem):
            return ('matching features' if skill == 'read' else 'matching')
        return 'multiple choice'
    # No option list: the presentation decides, and the block carries it.
    if blk.get('bank'):
        if PLAN.search(bt):
            return 'plan/map/diagram labelling'
        if ENDING.search(bt):
            return ('matching sentence endings' if skill == 'read'
                    else 'matching')
        return ('matching features' if skill == 'read' else 'matching')
    if blk.get('figure') and re.search(r'label', bt, re.I):
        return 'plan/map/diagram labelling'
    if GAP.search(stem or ''):
        for name, rx in PRESENT:
            if re.search(rx, bt, re.I):
                return (name if skill == 'read'
                        else 'form/note/table/flow-chart completion')
        return 'sentence completion'
    return 'short answer'


def census(blocks, skill):
    """{type: count} over an iterable of (block) dicts with 'items'."""
    out = {}
    for blk in blocks:
        for it in blk['items']:
            k = classify(it, blk, skill)
            out[k] = out.get(k, 0) + 1
    return out
