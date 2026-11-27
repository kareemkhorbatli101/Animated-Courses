# -*- coding: utf-8 -*-
"""What a teacher has to find in the notes, and whether it is there.

Checked against what a teacher actually reaches for during a lesson rather
than against the structure of the notes themselves.

    python3 taudit.py <pkg> <CODE> <n>[,<n>...]
"""
import importlib, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
PKG, CODE = sys.argv[1], sys.argv[2]
NUMS = [int(x) for x in sys.argv[3].split(',')]
sys.path.insert(0, os.path.join(HERE, PKG))
sys.path.insert(0, os.path.join(HERE, PKG, 'units', CODE))


def open_tasks(U):
    """Everything with no single right answer, which is what needs a model."""
    out = ['1.1']
    for i in range(1, len(U['speaking']) + 1):
        out.append('6.%d' % i)
    for i in range(1, len(U['writing']) + 1):
        out.append('8.%d' % i)
    for i in range(1, len(U['reading']) + 1):
        out.append('7.%da' % i)
    for i in range(1, len(U['cases']) + 1):
        out.append('9.%d' % i)
    for i, rv in enumerate(U['review'], 1):
        if rv['skill'] in ('speaking', 'writing'):
            out.append('10.%d' % i)
    return out


for num in NUMS:
    U = importlib.import_module('u%02d' % num).U
    T = importlib.import_module('t%02d' % num).T
    n = U['num']
    refs = ' | '.join(sa[0] for sa in T['sample_answers'])
    missing = [lab for lab in open_tasks(U)
               if not re.search(re.escape(lab).replace(r'\.', r'\.'), refs)]
    if missing:
        print('U%d NO-MODEL  open tasks with no sample answer: %s' % (n, ', '.join(missing)))
    else:
        print('U%d MODELS    every open task has a sample answer' % n)

    # what the teacher has to reach for mid-lesson, read off the builder itself
    tmpl = open(os.path.join(HERE, 'teacher2.py'), encoding='utf-8').read()
    print('U%d KEY       %s' % (n, 'answer key printed in the teacher\'s book'
                                if 'ANSWER KEY FOR THIS UNIT' in tmpl else
                                'NO answer key in the teacher\'s book'))
    print('U%d SCRIPT    %s' % (n, 'transcripts printed in the teacher\'s book'
                                if 'TRANSCRIPTS FOR THIS UNIT' in tmpl else
                                'NO transcripts in the teacher\'s book'))
    print('U%d ROUTES    %s' % (n, 'short, core and full (60 / 90 / 180)'
                                if 'Short (60 min)' in tmpl else
                                'only 90 and 180; nothing for a 60-minute class'))
    print('U%d FLUENCY   %s' % (n, 'the fluency task has its own notes'
                                if 'THE FLUENCY TASK, AND WHY IT IS NOT A ROLE-PLAY' in tmpl
                                else 'NO notes on the fluency task'))

    # glossary covers the productive core
    gl = {g[0].lower() for g in T['glossary']}
    miss = [it['term'] for it in U['set'] if it['term'].lower() not in gl]
    print('U%d GLOSSARY  %s' % (n, 'all eight core terms glossed' if not miss
                                else 'core terms with no Arabic: ' + ', '.join(miss)))

    # does every case have notes, and does every note have the four parts
    for j, C in enumerate(U['cases'], 1):
        N = T['case_notes'][j - 1]
        gaps = [k for k in ('first', 'positions', 'push', 'arabic', 'poles', 'marks')
                if not N.get(k)]
        if gaps:
            print('U%d CASE %d    missing: %s' % (n, j, ', '.join(gaps)))
    print('U%d CASES     %d sets of notes for %d cases'
          % (n, len(T['case_notes']), len(U['cases'])))

    # pronunciation covers something from this unit's core
    pr = ' '.join(x[0].lower() for x in T['pronunciation'])
    hits = sum(1 for it in U['set'] if it['term'].split()[-1].lower() in pr)
    print('U%d PRON      %d of 8 core terms have a pronunciation note' % (n, hits))
