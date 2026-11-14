# -*- coding: utf-8 -*-
"""Augment one upper-volume unit to five cycles a skill, validated first.

The Foundation augmentation taught the lesson: run the gates before the file
is written, not after, or every unit costs four round trips. mkg.py does that
for whole Foundation 2 units; this does it for an addition to a unit that
already exists.

The original unit file is not rewritten. The new blocks are appended to it
under a header, so the augmentation stays auditable: you can see exactly what
unit 21 was and exactly what was added to it.

Usage, from a scratchpad script:

    from mkb import emit
    emit(21, dict(fieldwords=[...], r4=..., r5=..., l4=..., l5=...,
                  w4=..., w5=..., sp=[...]), "why these two cycles")
"""
import importlib
import io
import json
import os
import pprint
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import check                                            # noqa: E402

TEACH = json.load(open(os.path.join(HERE, 'v34_teach.json'))) \
    if os.path.exists(os.path.join(HERE, 'v34_teach.json')) else {}

ORDER = ['fieldwords', 'r4', 'r5', 'l4', 'l5', 'w4', 'w5', 'sp']


def taught_before(n):
    """Every head word a student on the series path has met before unit n."""
    out = []
    for pre, rng in (('f', range(1, 11)), ('g', range(1, 11)),
                     ('u', range(1, n))):
        for m in rng:
            try:
                U = importlib.import_module('content.%s%02d' % (pre, m)).UNIT
            except ImportError:
                continue
            out += [w for w, _ in check.heads(U)]
    return out


def normalise(U):
    for tag in ('r4', 'r5'):
        if tag in U:
            U[tag]['words'] = sum(len(x.split()) for x in U[tag]['paras'])
    if 'w5' in U:
        U['w5']['model_words'] = sum(len(l.split()) for l in U['w5']['model'])
    for s in U.get('sp', ()):
        s['repeat'] = sorted(s['repeat'], key=lambda x: len(x.split()))
    return U


def merge(n, blocks):
    mod = importlib.import_module('content.u%02d' % n)
    importlib.reload(mod)
    U = dict(mod.UNIT)
    for k, v in blocks.items():
        if k == 'sp':
            U['sp'] = list(U['sp']) + list(v)
        elif k == 'acad':
            U['acad'] = list(U['acad']) + list(v)
        else:
            U[k] = v
    return normalise(U)


def seam_report(n, U):
    """Does this unit now teach the words its own passages needed?"""
    want = set(w.lower() for w in TEACH.get(str(n), []))
    mine = {w.lower() for w, _ in check.heads(U)}
    from content._wordbank import expand
    covered = {w.lower() for w in expand(list(mine), deriv=True)} | mine
    return want, {w for w in want if w in covered}


def emit(n, blocks, doc, strict_seam=True):
    U = merge(n, blocks)
    bad = check.check(U, taught_before(n))
    want, hit = seam_report(n, U)
    missed = sorted(want - hit)
    if missed and strict_seam:
        bad.append('%d of the %d seam words this unit must teach are not '
                   'taught: %s' % (len(missed), len(want), ', '.join(missed)))
    if bad:
        print('UNIT %d NOT AUGMENTED:' % n)
        for b in bad:
            print('  !', b)
        return False

    out = io.StringIO()
    out.write('\n\n# ---------------------------------------------------------'
              '------------------\n')
    out.write('# The two academic cycles, added by the Volumes 3-6 work.\n#\n')
    for line in doc.strip().split('\n'):
        out.write('# %s\n' % line if line.strip() else '#\n')
    out.write('# ---------------------------------------------------------'
              '------------------\n')
    for k in ORDER:
        if k not in blocks:
            continue
        v = blocks[k]
        if k == 'sp':
            out.write("UNIT['sp'] = list(UNIT['sp']) + ")
        elif k == 'acad':
            out.write("UNIT['acad'] = list(UNIT['acad']) + ")
        else:
            out.write("UNIT[%r] = " % k)
        out.write(pprint.pformat(U[k] if k not in ('sp', 'acad') else list(v),
                                 width=94, sort_dicts=False))
        out.write('\n')
    path = os.path.join(HERE, 'content', 'u%02d.py' % n)
    with open(path, 'a') as fh:
        fh.write(out.getvalue())
    r4 = U['r4']['words']
    r5 = U['r5']['words']
    print('unit %d augmented: r4 %d words, r5 %d, %d of %d seam words taught, '
          '%d speaking cycles' % (n, r4, r5, len(hit), len(want), len(U['sp'])))
    return True
