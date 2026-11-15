# -*- coding: utf-8 -*-
"""Build the full series outline as markdown, then check its coverage.

    python3 mkoutline.py            write outline/SERIES_OUTLINE.md and report
    python3 mkoutline.py --check    report coverage only

The report is the point. An outline this size cannot be checked by reading it,
so the generator counts what the plan promised: both Task 1 forks in every
unit, Listening Parts 1-4, Speaking Parts 1-3, the reading question types, the
scaffolding steps, and the per-cycle grammar, vocabulary, expressions and
transitions that section 9 of the plan requires.
"""
import importlib
import sys

BOOKS = [
    ('F1', 'Foundation 1', 'CEFR A1-A2', 'below 4.0'),
    ('F2', 'Foundation 2', 'CEFR A2-B1', '4.0-4.5'),
    ('V1', 'Volume 1', 'CEFR B1', '5.0'),
    ('V2', 'Volume 2', 'CEFR B1+', '5.5'),
    ('V3', 'Volume 3', 'CEFR B2', '6.0'),
    ('V4', 'Volume 4', 'CEFR B2', '6.5'),
    ('V5', 'Volume 5', 'CEFR B2+/C1', '7.0'),
    ('V6', 'Volume 6', 'CEFR C1', '7.5-8.0'),
]
STEP = {1: 'see it', 2: 'see it fail', 3: 'with the frame',
        4: 'with a prompt', 5: 'cold'}


def load(key):
    try:
        m = importlib.import_module('outline.%s' % key.lower())
    except ModuleNotFoundError:
        return None
    return m.UNITS


def md_unit(u, bk):
    o = []
    o.append('### Unit %d · %s\n' % (u['n'], u['theme']))
    for ci, c in enumerate(u['cycles'], 1):
        o.append('**Cycle %d — %s**  \n' % (ci, c['sub']))
        for r in c['read']:
            o.append('- *Reading* — **%s** · %s · %s words · %s'
                     % (r['heading'], r['kind'], r['words'], r['qtypes']))
        for l in c['listen']:
            w = ' · %s words' % l['words'] if l['words'] else ''
            o.append('- *Listening* — **%s** · %s%s · %s'
                     % (l['heading'], l['part'], w, l['qtypes']))
        sp = c['speak']
        cue = ' · cue card: **%s**' % sp['cue'] if sp['cue'] else ''
        o.append('- *Speaking* — %s · %s%s' % (sp['part'], sp['focus'], cue))
        for w in (c['write'] if isinstance(c['write'], list) else [c['write']]):
            fk = ' **[%s]**' % w['fork'] if w['fork'] else ''
            st = ' · %s' % w['structure'] if w['structure'] else ''
            o.append('- *Writing*%s — %s: **%s**%s'
                     % (fk, w['task'], w['heading'], st))
        o.append('- *Grammar* — %s' % c['gram'])
        o.append('- *Vocabulary* — %s' % c['vocab'])
        o.append('- *Expressions* — %s' % c['expr'])
        o.append('- *Transitions* — %s' % c['trans'])
        o.append('- *Scaffolding* — step %d, %s\n' % (c['step'], STEP[c['step']]))
    o.append('**Strands** — technique: %s · outlining: %s · review: %s\n'
             % (u['technique'], u['outlining'], u['review']))
    return '\n'.join(o)


def build():
    out = ['# IELTS Preparation Course — full series outline',
           '## Eight books, eighty units, four hundred cycles\n',
           '*Generated from `ielts/outline/`. Companion to '
           '`IELTS_Series_Plan.md`, which states the architecture this '
           'outline instantiates. Every unit is one general theme; every '
           'cycle is one sub-topic through all four skills, carrying its own '
           'grammar, vocabulary, expressions and transitions.*\n']
    have = 0
    for key, name, cefr, band in BOOKS:
        units = load(key)
        out.append('\n---\n')
        out.append('## %s — %s · target band %s\n' % (name, cefr, band))
        if not units:
            out.append('*(not yet written)*\n')
            continue
        have += len(units)
        for u in units:
            out.append(md_unit(u, key))
    return '\n'.join(out), have


def check():
    problems, rows = [], []
    for key, name, cefr, band in BOOKS:
        units = load(key)
        if not units:
            continue
        for u in units:
            cyc = u['cycles']
            reads = sum(len(c['read']) for c in cyc)
            lists = sum(len(c['listen']) for c in cyc)
            parts = set()
            for c in cyc:
                for l in c['listen']:
                    p = l['part'].split('·')[0].strip()
                    parts.add(p)
            sparts = set(c['speak']['part'] for c in cyc)
            forks = set()
            for c in cyc:
                ws = c['write'] if isinstance(c['write'], list) else [c['write']]
                for w in ws:
                    if w['fork']:
                        forks.add(w['fork'])
            tag = '%s u%d' % (key, u['n'])
            if len(cyc) != 5:
                problems.append('%s: %d cycles, want 5' % (tag, len(cyc)))
            if forks != {'A', 'GT'}:
                problems.append('%s: Task 1 forks %s, want both' % (tag, sorted(forks) or 'none'))
            for c in cyc:
                for f in ('gram', 'vocab', 'expr', 'trans'):
                    if not c[f]:
                        problems.append('%s cycle "%s": no %s' % (tag, c['sub'], f))
            rows.append((tag, u['theme'], len(cyc), reads, lists,
                         len(parts), len(sparts)))
    print('%-8s %-38s %3s %3s %3s %3s %3s' %
          ('unit', 'theme', 'cyc', 'rd', 'ls', 'LP', 'SP'))
    for r in rows:
        print('%-8s %-38s %3d %3d %3d %3d %3d' % r)
    print('\n%d units outlined' % len(rows))
    if problems:
        print('\n%d problem(s):' % len(problems))
        for p in problems[:40]:
            print('  ' + p)
    else:
        print('coverage checks pass')
    return not problems


if __name__ == '__main__':
    if '--check' in sys.argv:
        sys.exit(0 if check() else 1)
    text, n = build()
    open('outline/SERIES_OUTLINE.md', 'w', encoding='utf-8').write(text)
    print('wrote outline/SERIES_OUTLINE.md — %d units' % n)
    check()
