# -*- coding: utf-8 -*-
"""Measure a unit against criteria a gate cannot see from its own data.

Five things, each of which the third-round gates pass without noticing:

  1  Does the review re-ask what an earlier part already asked, in the same
     words? Retrieval after a gap is the point of a review; a reprint is not.
  2  How wide is the range of exercise types, and what does the book do most?
  3  Where do the questions sit on Bloom's revised taxonomy, and how much of
     the unit is remember-level?
  4  Is every while-task answerable from the text or script it belongs to?
  5  Does the unit ever ask the learner about their own practice after the
     warm-up?

    python3 audit.py <pkg> <CODE> <n>[,<n>...]
"""
import importlib, os, re, sys
from difflib import SequenceMatcher
import gates2
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
PKG, CODE = sys.argv[1], sys.argv[2]
NUMS = [int(x) for x in sys.argv[3].split(',')]
sys.path.insert(0, os.path.join(HERE, PKG))
sys.path.insert(0, os.path.join(HERE, PKG, 'units', CODE))

STOP = set('a an the to of in on at is are was were be been and or for with that this '
           'it its you your i we they he she him her his them do does did not no yes '
           'what when where who why how which can could would will shall may might '
           'one two three four five six seven eight nine ten'.split())

BLOOM = [
    ('create',     r'\b(write a|design|invent|make up|compose|produce a)\b'),
    ('evaluate',   r'\b(is this|would you|should|which .*better|decide|judge|argue|'
                   r'defend|good .*\?|yes or no)\b'),
    ('analyse',    r'\b(why|what is wrong|compare|difference|order|put .* in order|'
                   r'sort|which .* and which|what does .* tell)\b'),
    ('apply',      r'\b(use|write the sentence|say it|rewrite|complete|make the|'
                   r'what would you say|what do you say|what do you do)\b'),
    ('understand', r'\b(match|what does .* mean|explain|in your own words|choose)\b'),
    ('remember',   r'\b(write the missing|name|list|answer with one word|find)\b'),
]


def words(s):
    return [w for w in re.findall(r"[a-z']+", str(s).lower()) if w not in STOP]


def sim(a, b):
    return SequenceMatcher(None, str(a).lower(), str(b).lower()).ratio()


def bloom(t):
    # One classifier, shared with the gate, so the audit and the gate can
    # never disagree about the same unit.
    return gates2._demand(t)


def tasks_of(U):
    """(label, task dict, part) for every closed task in the unit."""
    out = [('2.1', U['preview_task'], 'preview')]
    for i, v in enumerate(U['vocab_tasks'], 1):
        out.append(('3.%d' % i, v, 'vocab'))
    for i, g in enumerate(U['g_tasks'], 1):
        out.append(('4.%d' % i, g, 'grammar'))
    for i, L in enumerate(U['listening'], 1):
        for part, let in (('pre', 'a'), ('while', 'b'), ('post', 'c')):
            out.append(('5.%d%s' % (i, let), L[part], 'listening'))
    for i, R in enumerate(U['reading'], 1):
        for part, let in (('while', 'b'), ('post', 'c')):
            out.append(('7.%d%s' % (i, let), R[part], 'reading'))
    for i, rv in enumerate(U['review'], 1):
        if rv['skill'] not in ('speaking', 'writing'):
            out.append(('10.%d' % i, rv, 'review'))
    return out


def audit(U):
    n = U['num']
    said = []
    T = tasks_of(U)

    # --- 1 review that reprints an earlier task (the gate owns the rule)
    f1, w1 = [], []
    gates2.check_recycle(U, f1, w1)
    said.extend('U%d REPRINT   %s' % (n, x.split(': ', 1)[1]) for x in f1)

    # --- 2 range of exercise types
    kinds = {}
    for lab, t, part in T:
        k = t.get('kind', 'short')
        kinds[k] = kinds.get(k, 0) + 1
    said.append('U%d KINDS     %s' % (n, ', '.join('%s %d' % kv for kv in sorted(kinds.items()))))

    # --- 3 Bloom spread
    lev = {}
    for lab, t, part in T:
        b = bloom(t)
        lev[b] = lev.get(b, 0) + 1
    tot = sum(lev.values())
    said.append('U%d BLOOM     %s   (remember %.0f%%)'
                % (n, ', '.join('%s %d' % kv for kv in sorted(lev.items())),
                   100.0 * lev.get('remember', 0) / tot))

    # --- 4 answerability of while-tasks
    f2, w2 = [], []
    gates2.check_answerable(U, f2, w2)
    said.extend('U%d UNSOURCED %s' % (n, x.split(': ', 1)[1]) for x in f2)

    # --- 5 the learner's own practice, after the warm-up
    own = 0
    hay = []
    for lab, t, part in T:
        hay.append((t.get('rubric', '') or '') + ' ' + (t.get('how') or ''))
    for s in U['speaking'] + U['writing']:
        hay.append(s.get('rubric', '') + ' ' + s.get('how', ''))
    for h in hay:
        if re.search(r'\byour own (practice|clinic|surgery|school|words)\b|'
                     r'\bin your (practice|clinic|country|school)\b', h.lower()):
            own += 1
    if own == 0:
        said.append('U%d NO-OWN    nothing after the warm-up asks about the learner\'s '
                    'own practice' % n)
    else:
        said.append('U%d OWN       %d tasks ask about the learner\'s own practice' % (n, own))
    return said


for num in NUMS:
    U = importlib.import_module('u%02d' % num).U
    for line in audit(U):
        print(line)
