# -*- coding: utf-8 -*-
"""Author one upper-volume unit, validated before it is written.

mkg.py does this for a whole Foundation 2 unit and mkb.py does it for the two
academic cycles bolted onto an existing Volume 3 or 4 unit. Volumes 5 and 6
need the third case: a complete unit, five cycles a skill from the start,
written and gated in one step.

Usage, from a unit script:

    from mku import emit
    UNIT = dict(...)            # the full unit, B2X shape
    emit(UNIT, docstring)

Everything the generator checks is a gate somewhere else as well. What it adds
is that nothing is written to content/ until the unit passes, which is the
only arrangement that keeps a half-finished unit out of a build.
"""
import importlib
import io
import os
import pprint
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import check                                            # noqa: E402

LEVEL = {5: 'B2', 6: 'C1'}


def gaps(text):
    """Turn 'attac[hed]' into 'attac---' plus the answer 'hed'.

    Complete the Words is gated on the dash run matching the answer letter
    for letter, which is the one thing in a unit that cannot be authored by
    eye: a forty-word paragraph with ten gaps was the commonest single
    failure in the Foundation work. Writing the ending in brackets makes the
    two impossible to disagree.
    """
    out, ans, i = [], [], 0
    while i < len(text):
        ch = text[i]
        if ch == '[':
            j = text.index(']', i)
            end = text[i + 1:j]
            out.append('-' * len(end))
            ans.append(end)
            i = j + 1
        else:
            out.append(ch)
            i += 1
    return ''.join(out), ans


def taught_before(n):
    """Every head word and name a student on the series path has met."""
    out, names = [], []
    for pre, rng in (('f', range(1, 11)), ('g', range(1, 11)),
                     ('u', range(1, n))):
        for m in rng:
            try:
                U = importlib.import_module('content.%s%02d' % (pre, m)).UNIT
            except ImportError:
                continue
            out += [w for w, _ in check.heads(U)]
            names += list(U.get('names', ()))
    return out, names


def normalise(U):
    """The three things that are arithmetic rather than authoring."""
    for tag in ('r3', 'r4', 'r5'):
        if tag in U:
            U[tag]['words'] = sum(len(x.split()) for x in U[tag]['paras'])
    for tag in ('w3', 'w5'):
        if tag in U:
            U[tag]['model_words'] = sum(len(l.split()) for l in U[tag]['model'])
    for s in U.get('sp', ()):
        s['repeat'] = sorted(s['repeat'], key=lambda x: len(x.split()))
    return U


def validate(U):
    n = U['n']
    vol = U.get('vol')
    bad = []
    if vol not in LEVEL:
        bad.append('vol is %r, want 5 or 6' % vol)
    elif U.get('level') != LEVEL[vol]:
        bad.append('level is %r, want %r for Volume %d'
                   % (U.get('level'), LEVEL[vol], vol))
    want = {5: range(41, 51), 6: range(51, 61)}.get(vol)
    if want is not None and n not in want:
        bad.append('unit %d is not in Volume %d' % (n, vol))
    taught, _ = taught_before(n)
    bad += check.check(U, taught)
    return bad


def emit(U, doc):
    n = U['n']
    normalise(U)
    bad = validate(U)
    if bad:
        print('UNIT %d NOT WRITTEN:' % n)
        for b in bad:
            print('  !', b)
        return False
    out = io.StringIO()
    out.write('# -*- coding: utf-8 -*-\n"""%s"""\n\n' % doc)
    out.write('UNIT = ')
    pprint.pprint(U, stream=out, width=98, sort_dicts=False)
    out.write('\n')
    path = os.path.join(HERE, 'content', 'u%02d.py' % n)
    open(path, 'w').write(out.getvalue())
    print('unit %d written: r3 %d words, r4 %d, r5 %d, %d head words, '
          '%d speaking cycles'
          % (n, U['r3']['words'], U['r4']['words'], U['r5']['words'],
             len(check.heads(U)), len(U['sp'])))
    return True
