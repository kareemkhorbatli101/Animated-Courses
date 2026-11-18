# -*- coding: utf-8 -*-
"""Audit 15 factors that separate a textbook from a technical guide.

The ten gates and gate 10 measure the exam content: whether a question is
sound, whether a label is true, whether a type is taught. None of them
asks whether the book TEACHES - whether a learner is prepared for a text
before meeting it, told why they are doing a task, given practice after
an explanation, reminded of what they met two cycles ago, or shown where
they are in the book.

    python3 pedagogy.py 3           one volume
    python3 pedagogy.py 3 --detail  per unit

Every factor is a count of something in the content modules, not a
judgement. Where a factor cannot be counted without reading the prose, it
counts a proxy and says which.
"""
import collections
import importlib
import io
import os
import re
import sys

import _base                                            # noqa: F401
import gate10

HERE = os.path.dirname(os.path.abspath(__file__))

# Teaching prose: text addressed to the learner about how to work, as
# opposed to input text (a passage, a script) or task text (an item, a
# model). The split matters because a technical guide is mostly the second
# two.
TEST_WORDS = re.compile(
    r'\b(band|examiner|the test|the exam|the paper|Part [1-4]|Task [12]|'
    r'marks?|rubric|question types?|under the clock|in the exam room)\b', re.I)
XREF = re.compile(r'\b(cycle \d|you (?:read|met|saw|heard) (?:earlier|in|'
                  r'above|before)|earlier in this unit|as in cycle|'
                  r'the passage (?:above|you have just read))\b', re.I)
YOU = re.compile(r'\byou(?:r|rs|rself)?\b', re.I)


def wc(x):
    if x is None:
        return 0
    if isinstance(x, str):
        return len(x.split())
    if isinstance(x, dict):
        return sum(wc(v) for v in x.values())
    if isinstance(x, (list, tuple)):
        return sum(wc(v) for v in x)
    return 0


def load(n):
    m = importlib.import_module('content.u%02d' % n)
    importlib.reload(m)
    return m


def teaching_prose(U):
    """Every string in a unit that teaches rather than tests, in order."""
    out = [('opener', U['opener'])]
    for ci, c in enumerate(U['cycles'], 1):
        for r in c['read']:
            if r.get('skill'):
                out.append(('c%d read skillbox' % ci, wcjoin(r['skill'])))
        for l in c['listen']:
            if l.get('skill'):
                out.append(('c%d listen skillbox' % ci, wcjoin(l['skill'])))
        out.append(('c%d speak intro' % ci, c['speak'].get('intro') or ''))
        for w in c['write']:
            out.append(('c%d write notes' % ci, ' '.join(w.get('notes') or [])))
            out.append(('c%d write gap65' % ci,
                        ' '.join(w.get('gap65') or [])))
        out.append(('c%d grammar explain' % ci, c['gram']['explain']))
    out.append(('technique', U['technique']['body']))
    out.append(('outlining', U['outlining']['body']))
    out.append(('tip', U['tip']))
    return [(k, v) for k, v in out if v]


def wcjoin(skill):
    return '%s. %s' % (skill[0], ' '.join(skill[1]))


def input_words(U):
    n = 0
    for c in U['cycles']:
        for r in c['read']:
            n += wc(r['paras'])
        for l in c['listen']:
            n += sum(len(t.split()) for _, t in l['script'])
    return n


def task_words(U):
    n = 0
    for c in U['cycles']:
        for r in c['read']:
            n += wc([it[0] for it in r['items']])
        for l in c['listen']:
            n += wc([it[0] for it in l['items']])
        for w in c['write']:
            n += wc(w.get('prompt')) + wc(w.get('model')) + \
                wc(w.get('model65'))
        n += wc(c['speak'].get('qs'))
        n += wc([q for q, _ in c['gram']['items']])
    return n


def audit(vol, rng, detail=False):
    rows = {}
    units = [load(n) for n in rng]
    Us = [m.UNIT for m in units]

    # 1 a contents page anywhere in the renderer
    book = io.open(os.path.join(HERE, 'book.py'), encoding='utf-8').read()
    rows['1 contents page in the book'] = (
        'yes' if re.search(r'def (contents|toc)\b', book) else 'NONE')

    # 2 input blocks per cycle
    rc = collections.Counter()
    lc = collections.Counter()
    for U in Us:
        for c in U['cycles']:
            rc[len(c['read'])] += 1
            lc[len(c['listen'])] += 1
    rows['2 reading blocks a cycle'] = dict(rc)
    rows['2 listening blocks a cycle'] = dict(lc)

    # 3 anything printed BEFORE a passage to prepare the learner
    pre_r = sum(1 for U in Us for c in U['cycles'] for r in c['read']
                if r.get('skill'))
    all_r = sum(1 for U in Us for c in U['cycles'] for r in c['read'])
    pre_l = sum(1 for U in Us for c in U['cycles'] for l in c['listen']
                if l.get('skill'))
    all_l = sum(1 for U in Us for c in U['cycles'] for l in c['listen'])
    rows['3 reading blocks with a strategy box'] = '%d of %d' % (pre_r, all_r)
    rows['3 listening blocks with a strategy box'] = '%d of %d' % (pre_l,
                                                                   all_l)
    rows['3 input blocks with a lead-in TASK'] = '0 of %d (no such field)' \
        % (all_r + all_l)

    # 4 the three kinds of word, per volume
    t = sum(wc(v) for U in Us for _, v in teaching_prose(U))
    i = sum(input_words(U) for U in Us)
    k = sum(task_words(U) for U in Us)
    rows['4 teaching prose (words)'] = t
    rows['4 input text (words)'] = i
    rows['4 task text (words)'] = k
    rows['4 teaching prose as a share'] = '%.1f%%' % (100.0 * t / (t + i + k))

    # 5 teaching prose that names the test
    hits = tot = 0
    for U in Us:
        for _, v in teaching_prose(U):
            tot += 1
            if TEST_WORDS.search(v):
                hits += 1
    rows['5 teaching passages naming the test'] = '%d of %d' % (hits, tot)

    # 6 teacher notes
    rows['6 teacher notes'] = '0 (no such field)'

    # 7 grammar: explanation, examples, practice
    ex = [len(c['gram']['explain'].split()) for U in Us for c in U['cycles']]
    pr = [len(c['gram']['items']) for U in Us for c in U['cycles']]
    eg = [len(c['gram']['examples']) for U in Us for c in U['cycles']]
    rows['7 grammar explanation (words, mean)'] = '%.1f' % (sum(ex) /
                                                            float(len(ex)))
    rows['7 grammar example sentences (mean)'] = '%.1f' % (sum(eg) /
                                                           float(len(eg)))
    rows['7 grammar practice items (mean)'] = '%.1f' % (sum(pr) /
                                                        float(len(pr)))
    rows['7 grammar practice items (total)'] = sum(pr)

    # 8 is the grammar drawn from the cycle's own text?
    drawn = 0
    for U in Us:
        for c in U['cycles']:
            text = ' '.join(p for r in c['read'] for p in r['paras']).lower()
            text += ' '.join(t for l in c['listen']
                             for _, t in l['script']).lower()
            hit = False
            for e in c['gram']['examples']:
                words = [w for w in re.findall(r'[a-z]{6,}', e.lower())]
                if words and sum(1 for w in words if w in text) >= 2:
                    hit = True
            drawn += 1 if hit else 0
    rows['8 grammar sets echoing their own cycle text'] = '%d of %d' % (
        drawn, sum(len(U['cycles']) for U in Us))

    # 9 recycling: a cycle's taught words reappearing later in the unit
    back = tot_v = 0
    for U in Us:
        later = []
        texts = []
        for c in U['cycles']:
            texts.append((' '.join(p for r in c['read'] for p in r['paras']) +
                          ' '.join(t for l in c['listen']
                                   for _, t in l['script'])).lower())
        for ci, c in enumerate(U['cycles']):
            rest = ' '.join(texts[ci + 1:])
            for wd, _ in c['vocab']:
                tot_v += 1
                if wd.lower() in rest:
                    back += 1
    rows['9 taught words that reappear later in the unit'] = '%d of %d' % (
        back, tot_v)

    # 10 explicit cross-references between cycles
    xr = 0
    for U in Us:
        for _, v in teaching_prose(U):
            xr += len(XREF.findall(v))
    rows['10 cross-references between cycles'] = xr

    # 11 how formulaic the exercise rubric is
    rub = collections.Counter()
    for U in Us:
        for c in U['cycles']:
            for r in c['read']:
                rub[r['task'][:40]] += 1
            for l in c['listen']:
                rub[l['task'][:40]] += 1
    rows['11 distinct exercise rubrics'] = '%d distinct of %d exercises' % (
        len(rub), sum(rub.values()))

    # 12 review and self-assessment
    rows['12 can-do lists'] = '%d (one a unit)' % sum(
        1 for U in Us if U.get('candos'))
    rows['12 can-do statements a unit'] = '%.1f' % (
        sum(len(U['candos']) for U in Us) / float(len(Us)))
    rows['12 review exercises after a unit'] = '0 (no such field)'

    # 13 genre of the reading input
    kinds = collections.Counter(r['kind'] for U in Us for c in U['cycles']
                                for r in c['read'])
    rows['13 reading text genres'] = dict(kinds.most_common())

    # 14 themes
    rows['14 unit themes'] = [U['theme'] for U in Us]

    # 15 learner address: 'you' per 100 words of teaching prose
    yous = sum(len(YOU.findall(v)) for U in Us for _, v in teaching_prose(U))
    rows['15 "you" per 100 words of teaching prose'] = '%.1f' % (
        100.0 * yous / float(t))
    return rows


def main(argv):
    vol = int(argv[1]) if len(argv) > 1 else 3
    rng = dict(gate10.BOOKS)[vol]
    rows = audit(vol, rng, '--detail' in argv)
    tag = ('Foundation %d' % (vol - 6)) if vol > 6 else 'Volume %d' % vol
    print('PEDAGOGY AUDIT - %s' % tag)
    for k in sorted(rows):
        v = rows[k]
        if isinstance(v, (dict, list)):
            print('  %-46s' % k)
            if isinstance(v, dict):
                for a, b in v.items():
                    print('      %-40s %s' % (a, b))
            else:
                for a in v:
                    print('      %s' % a)
        else:
            print('  %-46s %s' % (k, v))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
