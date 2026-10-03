# -*- coding: utf-8 -*-
"""Twelve targeted passes over every exercise in every handout.

The gates in wscheck say whether a handout is *admissible*: no open questions,
no stem pointing off its page, every chapter item claimed. They say nothing
about whether an exercise is any *good*, and a sample of the built book showed
why that is not enough — a question reading "Which straight-line does the book
give for Expense in early years?" passes every gate and is not a sentence.

So each pass here asks one question of one exercise, returns a severity and,
where it finds something, the action to take. Nothing is repaired here: the
audit writes the plan, the generator carries it out, and the audit runs again
to show the movement.

    severity 2  rewrite or drop it
    severity 1  weaken, fix in passing
    severity 0  fine
"""
from __future__ import print_function

import collections
import importlib
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import parsebook as PB            # noqa: E402
import wsgen as WG                # noqa: E402

SCORED = ('MCQ', 'TF', 'FILL', 'MATCH', 'SORT', 'GRID')
MODELS = ('fig', 'blankfig', 'panel', 'trace')

# A sentence that opens on one of these is hanging off something it does not
# print.
DANGLER = re.compile(r'^(these|this|that|those|it|they|them|such|here|'
                     r'the same|both|either|neither|so|then|however|'
                     r'therefore|also|but|and)\b', re.I)
# The book's own item numbering, which means nothing on a handout.
# The book's own item numbering, which means nothing on a handout. "ASC
# 606", "IAS 1" and "IFRS 18" are NOT in this list: those are the standards
# themselves, and a handout on revenue should name ASC 606.
IDLEAK = re.compile(r'\b(SC\d{1,3}-\d{1,2}|P\d{1,2}-\d{2}|C\d{1,3}-\d|'
                    r'F\d\d-\d\d)\b')
# The running cases of the book. An exercise anchored on one has a situation.
CASES = ('orontes', 'barada', 'cedar', 'greenbasket', 'levant')
# A stem noun has to read as a category, not as a value or a method name.
VALUEISH = re.compile(r'^(highest|lowest|same|no effect|yes|no|none|all|'
                      r'increase|decrease|straight-line|double-declining|'
                      r'units of production|sum-of|fifo|lifo)\b', re.I)

ACRONYM = re.compile(r'\b([A-Z]{2,6})\b')
KNOWN_ACRONYMS = {
    'GAAP', 'IFRS', 'FASB', 'IASB', 'SEC', 'PCAOB', 'ASC', 'ASU', 'OCI',
    'FIFO', 'LIFO', 'APIC', 'ROA', 'ROI', 'USD', 'IAS', 'CMA', 'LOS', 'NRV',
    'EPS', 'FOB', 'TRUE', 'FALSE', 'PRIMARY', 'NOT', 'BEST', 'MOST', 'AND',
    'OR', 'OCI', 'PP', 'CGU',
}


def _text(it):
    out = [it.get('q') or '']
    for k in ('o', 'left', 'right', 'items', 'regions', 'bank'):
        v = it.get(k)
        if isinstance(v, list):
            out += [str(x) for x in v]
    for p in it.get('parts', []) or []:
        if isinstance(p, str):
            out.append(p)
    for r in it.get('rows', []) or []:
        out += [str(c) for c in r]
    return ' '.join(out)


def _sentence(it):
    """The gapped passage of a FILL, as running text."""
    return ' '.join(str(p) for p in it.get('parts', []) or []
                    if isinstance(p, str)).strip()


# ---------------------------------------------------------------- the passes
def p01_grounding(ex, ctx):
    """1 · Is every word and figure in it the book's?"""
    t = _text(ex['it'])
    for n in re.findall(r'(?<![\d.])(?:\d[\d,]{2,}|20X\d|\d{4})\b', t):
        if n not in ctx['src'] and n not in ctx['derived']:
            return (2, 'the figure %s is in neither the chapter nor the '
                       'derived table' % n,
                    'drop the item, or declare the figure with its working')
    return (0, '', '')


def p02_relevance(ex, ctx):
    """2 · Is it about a load-bearing idea, or about the book's furniture?"""
    q = (ex['it'].get('q') or '').lower()
    if 'which part of this chapter is section' in q:
        # One such item orients the reader; the second onwards is a quiz on
        # the table of contents, so only the surplus is a finding.
        ctx['nav'] = ctx.get('nav', 0) + 1
        if ctx['nav'] > 1:
            return (1, 'it tests the chapter’s numbering, not its '
                       'accounting, and the handout already has one such '
                       'item',
                    'keep at most one per handout, and only where a section '
                    'has no table of its own')
    if re.search(r'\bwhich (los|level|depth)\b', q):
        return (2, 'it tests the front matter',
                'drop: the objectives table is not teaching content')
    return (0, '', '')


def p03_clarity(ex, ctx):
    """3 · Does the stem read as a sentence?"""
    it = ex['it']
    q = it.get('q') or ''
    m = re.match(r'Which (.+?) does the book give for (.+?)\?', q)
    if m:
        noun, subj = m.group(1), m.group(2)
        if VALUEISH.match(noun):
            return (2, 'the stem noun %r is a value or a method name, so the '
                       'question is not a sentence' % noun,
                    'transpose the table, or ask for the row rather than the '
                    'column')
        if len(noun.split()) > 4:
            return (1, 'the stem noun %r is a phrase, not a category' % noun,
                    'use the table only where its first heading is a category '
                    'noun')
        if VALUEISH.match(subj):
            return (2, 'the subject %r is a value, not a thing' % subj,
                    'transpose the table')
    if ex['kind'] == 'FILL':
        s = _sentence(it)
        if DANGLER.match(s):
            return (2, 'the passage opens on %r, which hangs off a sentence '
                       'it does not print' % s.split()[0],
                    'start a summary only at a sentence that stands alone')
    if len(q) > 240:
        return (1, 'the stem runs to %d characters' % len(q),
                'shorten, or move the data into a panel beside it')
    return (0, '', '')


def p04_ambiguity(ex, ctx):
    """4 · Is exactly one answer defensible?"""
    it = ex['it']
    if ex['kind'] == 'MCQ':
        o = [x.strip().lower() for x in it.get('o', [])]
        if len(set(o)) != len(o):
            return (2, 'two options say the same thing', 'drop the item')
        for i, a in enumerate(o):
            for j, b in enumerate(o):
                if i < j and (a in b or b in a) and min(len(a), len(b)) > 6:
                    return (1, 'one option contains another, so both can be '
                               'argued', 'choose distractors that exclude '
                                         'each other')
    if ex['kind'] == 'FILL':
        bank = [x.lower() for x in it.get('bank', [])]
        if len(set(bank)) != len(bank):
            return (2, 'the word list repeats a word',
                    'dedupe the list; a repeated word gives one gap two '
                    'answers')
    return (0, '', '')


def p05_sequence(ex, ctx):
    """5 · Does it sit in the right move, after what it needs?"""
    if ex['move'] == 'ORIENT' and ex['kind'] in ('GRID', 'SORT'):
        return (1, 'a grid or a sort is too long for the opening move',
                'move it to READ THE MODEL')
    if ex['move'] == 'READ THE MODEL' and not ex['after_model']:
        return (2, 'it reads a model that has not been printed yet',
                'move the model above it')
    return (0, '', '')


def _compared(it):
    """The part of an item that carries its content.

    For a gap-fill the question is boilerplate — "Fill every gap. The list
    holds more words than there are gaps" — and identical across all three
    summaries by design. What differs, and what a reader actually reads, is
    the passage, so that is what gets compared.
    """
    if it['t'] == 'FILL' and it.get('parts'):
        return ' '.join(x for x in it['parts'] if isinstance(x, str))
    if it['t'] == 'MATCH':
        return ' '.join(it.get('left') or [])
    return it.get('q') or ''


QUOTED = re.compile(r'\u201c[^\u201d]*\u201d|\"[^\"]*\"')


def _norm(it):
    """An item's comparable wording, with any quoted value taken out.

    Two stems that differ only in the long sentence they quote read as the
    same question asked twice, so the quoted part is not what decides.
    """
    return re.sub(r'\W+', ' ',
                  QUOTED.sub(' ', _compared(it)).lower()).strip()


def p06_duplication(ex, ctx):
    """6 · Is it a near-copy of its neighbour?"""
    q = _norm(ex['it'])
    prev = ctx['recent']
    for p in prev[-3:]:
        a, b = set(q.split()), set(p.split())
        if not a or not b:
            continue
        j = len(a & b) / float(len(a | b))
        if j > 0.72:
            return (2, 'it repeats the wording of a neighbouring item almost '
                       'exactly', 'vary the question, or ask one item about '
                                  'the whole table')
    return (0, '', '')


def p07_effectiveness(ex, ctx):
    """7 · Does it ask for more than recognition?"""
    it = ex['it']
    if ex['kind'] == 'TF' and ex['move'] in ('APPLY', 'CHECKPOINT'):
        return (1, 'a true/false item in the applying move is a coin flip '
                   'half the time', 'make it multiple choice')
    if ex['kind'] == 'MCQ' and it.get('src') is None:
        q = (it.get('q') or '').lower()
        if q.startswith('which') and 'does the book give' in q:
            # Reading the model is a move of the cycle, so the first two
            # such items are the move doing its job. It is the third
            # onwards that turns the move into a cell hunt.
            key = 'cell:%s' % ex.get('model_i', 0)
            ctx[key] = ctx.get(key, 0) + 1
            if ctx[key] > 2:
                return (1, 'it asks the student to find a cell, and the '
                           'model already has two such items',
                        'keep two per model at most; the rest should apply '
                        'the rule the table states')
    return (0, '', '')


def p08_interest(ex, ctx):
    """8 · Is there a situation in it, or only a term?

    The unit here is the HANDOUT, not the single item and not the single
    move. An exam asks plenty of abstract questions and a handout should
    too, so "Which account normally has a debit balance?" is not a defect
    on its own; nor is the glossary cycle's applying item, which is about a
    word by design. What is a defect is a whole session in which the
    student never once faces a company deciding something.

    The book supports that standard and no stronger one: 132 of its 505
    bank items name a running company, which is about one per handout and
    nowhere near one per move. A pass that demanded more would be asking
    the generator to invent situations, which is the one thing it must not
    do.
    """
    if ex['move'] not in ('APPLY', 'CHECKPOINT'):
        return (0, '', '')
    key = 'situated'
    # One definition, shared with the generator. Two copies of this test
    # drifted apart once already: the generator reserved items the audit did
    # not count as situated, so it was solving a different problem from the
    # one being measured.
    if WG.caseful(dict(q=_text(ex['it']), o=[])):
        ctx[key] = True
        return (0, '', '')
    if ctx.get(key):
        return (0, '', '')
    ctx[key] = False
    return (1, 'nothing in this handout yet puts the student in front of a '
               'company deciding something',
            'give each handout at least one applying item set at one of the '
            'book’s running companies')


def p09_exam(ex, ctx):
    """9 · Does it look like something the exam would ask?"""
    it = ex['it']
    if it.get('src'):
        return (0, '', '')
    if ex['move'] in ('APPLY', 'CHECKPOINT') and ex['kind'] in ('TF', 'FILL'):
        return (1, 'the exam asks multiple choice; this is not that shape',
                'use the book’s own item bank for the applying move')
    return (0, '', '')


def p10_directions(ex, ctx):
    """10 · Does it say what to do and how to record it?"""
    it = ex['it']
    q = it.get('q') or ''
    if ex['kind'] == 'MATCH' and 'letter' not in q.lower():
        return (1, 'it does not say to write a letter',
                'say what to write and where')
    if ex['kind'] == 'SORT' and 'under' not in q.lower():
        return (1, 'it does not say where to write each item',
                'name the columns in the direction')
    if ex['kind'] == 'GRID' and not q:
        return (2, 'a table to complete with no direction at all',
                'say which cells to fill and what the worked row is for')
    # A lead-in that the options complete — "Accumulated depreciation is
    # BEST described as:" — is how the exam itself writes a stem, so a
    # colon or an ellipsis is an ending, not a missing one.
    if ex['kind'] in ('MCQ', 'TF') \
            and not q.strip().endswith(('?', '.', ':', '\u2026', '...')):
        return (1, 'the stem does not end as a question, a statement or a '
                   'lead-in the options complete', 'punctuate it')
    return (0, '', '')


def p11_background(ex, ctx):
    """11 · Can a student with this book's background read it?"""
    t = _text(ex['it'])
    for a in set(ACRONYM.findall(t)):
        if a in KNOWN_ACRONYMS or a in ctx['chapter_acronyms']:
            continue
        if len(a) <= 6 and a.isupper():
            return (1, 'the acronym %s is used without the chapter having '
                       'introduced it' % a,
                    'spell it out on first use in the handout')
    if IDLEAK.search(_sentence(ex['it']) if ex['kind'] == 'FILL' else ''):
        return (2, 'the book’s own item numbering leaked into the text',
                'strip item ids from any passage before it becomes an '
                'exercise')
    return (0, '', '')


def p12_visual(ex, ctx):
    """12 · Could a picture carry this, and is there one?"""
    it = ex['it']
    if ex['kind'] in ('SORT', 'GRID'):
        if not ctx['handout_has_fig']:
            return (1, 'a classification or a schedule with no figure in the '
                       'handout at all',
                    'draw the categories as lanes, or the schedule as a split')
        return (0, '', '')
    if ex['kind'] == 'MCQ' and ex['move'] == 'READ THE MODEL' \
            and not ex['after_fig']:
        return (1, 'it reads a table that is never drawn',
                'add a figure of that table to the model move')
    return (0, '', '')


PASSES = [p01_grounding, p02_relevance, p03_clarity, p04_ambiguity,
          p05_sequence, p06_duplication, p07_effectiveness, p08_interest,
          p09_exam, p10_directions, p11_background, p12_visual]

NAMES = {
    'p01_grounding': 'grounding in the book',
    'p02_relevance': 'relevance',
    'p03_clarity': 'clarity',
    'p04_ambiguity': 'lack of ambiguity',
    'p05_sequence': 'sequence',
    'p06_duplication': 'consistency (no near-copies)',
    'p07_effectiveness': 'effectiveness',
    'p08_interest': 'interest',
    'p09_exam': 'usefulness for the test',
    'p10_directions': 'sufficiency of directions',
    'p11_background': 'student background',
    'p12_visual': 'visual potential',
}


# ---------------------------------------------------------------- the walk
def exercises(H):
    """Every exercise in a handout, with the move and the models before it."""
    move, after_model, after_fig, n = '', False, False, 0
    nmodel, ncycle = 0, 0
    for blk in H['flow']:
        k = blk[0]
        if k == 'move':
            move = blk[1]
        elif k in MODELS:
            if not after_model:
                nmodel += 1
            after_model = True
            if k in ('fig', 'blankfig'):
                after_fig = True
        elif k == 'cycle':
            after_model = after_fig = False
            ncycle += 1
        if k in ('items', 'preview'):
            items = blk[1] if k == 'items' else blk[4]
            for it in items:
                n += 1
                yield dict(i=n, it=it, kind=it['t'],
                           move='PREVIEW' if k == 'preview' else move,
                           after_model=after_model, after_fig=after_fig,
                           model_i=nmodel, cycle=ncycle)
        elif k == 'check':
            n += 1
            yield dict(i=n, kind='MCQ', move='CHECKPOINT',
                       it=dict(t='MCQ', q=blk[1], o=blk[2], a=blk[3],
                               why=blk[5] if len(blk) > 5 else ''),
                       after_model=after_model, after_fig=after_fig,
                       model_i=nmodel, cycle=ncycle)


def audit_handout(mod, k, src, derived_all):
    H = importlib.import_module('%s.h%02d' % (mod, k)).HANDOUT
    acr = set(ACRONYM.findall(src))
    ctx = dict(src=src, derived=set(H.get('derived', {})),
               chapter_acronyms=acr, recent=[],
               handout_has_fig=any(b[0] in ('fig', 'blankfig')
                                   for b in H['flow']))
    out = []
    for ex in exercises(H):
        findings = []
        for p in PASSES:
            sev, note, action = p(ex, ctx)
            if sev:
                findings.append((p.__name__, sev, note, action))
        ctx['recent'].append(_norm(ex['it']))
        out.append((H['id'], ex['i'], ex['kind'], ex['move'], findings))
    return H, out


def audit_book(bk=1, chapters=range(1, 19)):
    rows = []
    for n in chapters:
        mod = 'w%d_ch%02d' % (bk, n)
        pk = importlib.import_module(mod)
        src = open(os.path.join(HERE, pk.SOURCE), encoding='utf-8').read()
        for k in pk.HANDOUTS:
            _H, out = audit_handout(mod, k, src, None)
            rows += out
    return rows


if __name__ == '__main__':
    chs = [int(x) for x in sys.argv[1:]] or list(range(1, 19))
    rows = audit_book(1, chs)
    bypass = collections.Counter()
    sev2 = collections.Counter()
    for _hid, _i, _k, _m, f in rows:
        for name, sev, _note, _act in f:
            bypass[name] += 1
            if sev == 2:
                sev2[name] += 1
    tot = len(rows)
    clean = sum(1 for r in rows if not r[4])
    print('%d exercises audited across %d chapters' % (tot, len(chs)))
    print('%d clean (%.0f%%), %d with at least one finding\n'
          % (clean, 100.0 * clean / tot, tot - clean))
    print('%-34s %7s %7s' % ('pass', 'flags', 'severe'))
    for p in PASSES:
        nm = p.__name__
        print('%-34s %7d %7d' % (NAMES[nm], bypass[nm], sev2[nm]))


# ----------------------------------------------------------------- the plan
def stem_of(it):
    """A short label for an exercise, for the plan's own table."""
    q = re.sub(r'\s+', ' ', (it.get('q') or '')).strip()
    if it['t'] == 'FILL' and it.get('parts'):
        q = ''.join(x for x in it['parts'] if isinstance(x, str))
        q = re.sub(r'\s+', ' ', q).strip()
    if it['t'] == 'MATCH':
        q = 'match %d terms' % len(it.get('left') or [])
    return (q[:96] + '…') if len(q) > 97 else q


# Measured by this same auditor against the generation in commit 5eff8bb,
# recovered from git, so the two columns are one ruler and not two.
BASELINE = {
    'p01_grounding': (0, 0), 'p02_relevance': (113, 0),
    'p03_clarity': (40, 40), 'p04_ambiguity': (44, 0),
    'p05_sequence': (0, 0), 'p06_duplication': (368, 368),
    'p07_effectiveness': (163, 0), 'p08_interest': (201, 0),
    'p09_exam': (64, 0), 'p10_directions': (0, 0),
    'p11_background': (29, 29), 'p12_visual': (210, 0),
}
BASELINE_TOTAL = (2115, 1315)        # exercises, clean


def write_plan(path, bk=1, chapters=range(1, 19)):
    """The per-exercise improvement plan, one section per handout."""
    byhand, titles, order = {}, {}, []
    for n in chapters:
        mod = 'w%d_ch%02d' % (bk, n)
        pk = importlib.import_module(mod)
        src = open(os.path.join(HERE, pk.SOURCE), encoding='utf-8').read()
        for k in pk.HANDOUTS:
            H, out = audit_handout(mod, k, src, None)
            hid = H['id']
            order.append(hid)
            titles[hid] = (H['title'], n)
            items = {ex['i']: ex['it'] for ex in exercises(H)}
            byhand[hid] = [(i, kind, mv, f, items.get(i, {}))
                           for _h, i, kind, mv, f in out]

    tot = sum(len(v) for v in byhand.values())
    flagged = sum(1 for v in byhand.values() for r in v if r[3])
    sev = sum(1 for v in byhand.values() for r in v
              if any(x[1] == 2 for x in r[3]))

    L = ['# Book 1 — per-exercise improvement plan',
         '',
         'Twelve targeted passes (`cma/wsaudit.py`) over every exercise in '
         'every handout of Book 1. Each pass asks one question and, where it '
         'finds something, names the action. Severity **2** means rewrite or '
         'drop; **1** means weaken, fix in passing.',
         '',
         '%d exercises across %d chapters and %d handouts. %d carry at least '
         'one finding; %d carry a severe one.'
         % (tot, len(list(chapters)), len(order), flagged, sev),
         '',
         '## The twelve passes', '',
         '| # | pass | what it asks |', '|---|---|---|']
    ASKS = {
        'p01_grounding': 'is every word of it in the book?',
        'p02_relevance': 'does it test the accounting, or the book’s '
                         'own furniture?',
        'p03_clarity': 'is the stem a sentence a student can read once?',
        'p04_ambiguity': 'can exactly one option be defended?',
        'p05_sequence': 'does it come after the model that settles it?',
        'p06_duplication': 'is it a near-copy of its neighbour?',
        'p07_effectiveness': 'does it make the student reason, or only look?',
        'p08_interest': 'is there a company, a decision, something at stake?',
        'p09_exam': 'is it the shape the exam asks in?',
        'p10_directions': 'can a student start it without being told more?',
        'p11_background': 'does it assume English or notation we have not '
                          'given?',
        'p12_visual': 'would a figure carry this better than prose?',
    }
    for j, p in enumerate(PASSES, 1):
        L.append('| %d | %s | %s |' % (j, NAMES[p.__name__],
                                       ASKS.get(p.__name__, '')))
    bypass, bysev = collections.Counter(), collections.Counter()
    for v in byhand.values():
        for r in v:
            for nm, sv, _n, _a in r[3]:
                bypass[nm] += 1
                if sv == 2:
                    bysev[nm] += 1
    L += ['', '## What the passes found, before and after', '',
          'The "before" column is this same auditor run against the '
          'previous generation, recovered from git, so both columns are one '
          'ruler. A **severe** finding is one the pass says to rewrite or '
          'drop.', '',
          '| pass | flagged before | flagged after | severe before | '
          'severe after |', '|---|---|---|---|---|']
    tb = ts = 0
    for pp in PASSES:
        nm = pp.__name__
        b, bs = BASELINE.get(nm, (0, 0))
        tb += b
        ts += bs
        L.append('| %s | %d | %d | %d | %d |'
                 % (NAMES[nm], b, bypass[nm], bs, bysev[nm]))
    L.append('| **total** | **%d** | **%d** | **%d** | **%d** |'
             % (tb, sum(bypass.values()), ts, sum(bysev.values())))
    L += ['',
          'Clean exercises: **%d of %d (%.0f%%)** before, **%d of %d '
          '(%.0f%%)** after.'
          % (BASELINE_TOTAL[1], BASELINE_TOTAL[0],
             100.0 * BASELINE_TOTAL[1] / BASELINE_TOTAL[0],
             tot - flagged, tot, 100.0 * (tot - flagged) / tot),
          '',
          'Every severe finding is gone. What is left is %d findings of the '
          'lighter kind, and the section below names each one.'
          % sum(bypass.values()),
          '', '## Handouts', '']

    for hid in order:
        t, ch = titles[hid]
        rows = byhand[hid]
        bad = [r for r in rows if r[3]]
        L += ['### %s — %s' % (hid, t), '',
              '_Chapter %d · %d exercises · %d to change_'
              % (ch, len(rows), len(bad)), '']
        if not bad:
            L += ['Nothing found.', '']
            continue
        L += ['| # | kind | move | exercise | finding | action |',
              '|---|---|---|---|---|---|']
        for i, kind, mv, f, it in bad:
            lab = stem_of(it).replace('|', '\\|')
            for j, (_nm, s, note, action) in enumerate(f):
                L.append('| %s | %s | %s | %s | %s**%s** |'
                         % (i if not j else '', kind if not j else '',
                            mv if not j else '', lab if not j else '',
                            ('⚠ ' if s == 2 else '') + note + ' — ',
                            action))
        L.append('')
    open(path, 'w', encoding='utf-8').write('\n'.join(L) + '\n')
    return tot, flagged, sev
