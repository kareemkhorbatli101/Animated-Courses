# -*- coding: utf-8 -*-
"""Author one Foundation 2 unit, validated before it is written.

Foundation 1's academic cycles cost four to six round trips a unit until the
gates ran before the file was emitted rather than after. This does the same
for whole Foundation 2 units, and adds one check the earlier generator could
not: that the unit actually teaches the measured Volume 1 gap words it exists
to teach.

Usage, from a unit script:

    from mkg import emit
    UNIT = dict(...)            # the full unit, same shape as a Foundation 1 unit
    emit(UNIT, docstring)
"""
import io
import json
import os
import pprint
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import check                                            # noqa: E402

PLAN = json.load(open(os.path.join(HERE, 'f2_wordplan.json')))


def taught_before(n):
    """Every head word a Foundation 2 student has already met: all of
    Foundation 1, plus the Foundation 2 units before this one."""
    import importlib
    out, names = [], []
    for m in range(1, 11):
        U = importlib.import_module('content.f%02d' % m).UNIT
        out += [w for w, _ in check.heads(U)]
        names += list(U.get('names', ()))
    for m in range(1, n):
        try:
            U = importlib.import_module('content.g%02d' % m).UNIT
        except ImportError:
            continue
        out += [w for w, _ in check.heads(U)]
        names += list(U.get('names', ()))
    return out, names


def gap_report(n, U):
    """Does this unit teach the words f2_wordplan.py allocated to it?

    The plan names the surface form the measurement found - 'laid', 'ports',
    'divides'. A unit may teach the lemma instead, because the vocabulary gate
    licenses a taught word's inflections, so coverage is checked through
    expand() rather than by string equality.
    """
    from content._wordbank import expand
    want = set(PLAN[str(n)]['fieldwords']) | set(PLAN[str(n)]['acad'])
    heads = [w for w, _ in check.heads(U)]
    covered = {w.lower() for w in expand(heads)} | {w.lower() for w in heads}
    return want, {w for w in want if w.lower() in covered}


def validate(U, strict_gap=True):
    n = U['n']
    bad = []
    if U.get('level') != 'A2B1':
        bad.append("level is %r, want 'A2B1'" % U.get('level'))
    if U.get('vol') != 'F2':
        bad.append("vol is %r, want 'F2'" % U.get('vol'))
    if U.get('prepares') != n:
        bad.append('prepares is %r, want %d' % (U.get('prepares'), n))

    taught, _ = taught_before(n)
    bad += check.check(U, taught)

    want, hit = gap_report(n, U)
    missed = sorted(want - hit)
    if missed and strict_gap:
        bad.append('%d of the %d words the plan allocates to this unit are not '
                   'taught here: %s' % (len(missed), len(want), ', '.join(missed)))
    return bad, want, hit


def emit(U, doc, strict_gap=True):
    n = U['n']
    bad, want, hit = validate(U, strict_gap)
    if bad:
        print('UNIT G%d NOT WRITTEN:' % n)
        for b in bad:
            print('  !', b)
        return False
    out = io.StringIO()
    out.write('# -*- coding: utf-8 -*-\n"""%s"""\n\n' % doc)
    out.write('UNIT = ')
    pprint.pprint(U, stream=out, width=98, sort_dicts=False)
    out.write('\n')
    path = os.path.join(HERE, 'content', 'g%02d.py' % n)
    open(path, 'w').write(out.getvalue())
    print('unit G%d written: %d of %d planned words taught, '
          'r3 %d words, r4 %d, r5 %d'
          % (n, len(hit), len(want), U['r3']['words'],
             U['r4']['words'], U['r5']['words']))
    return True
