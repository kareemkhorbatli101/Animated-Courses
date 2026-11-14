# -*- coding: utf-8 -*-
"""Every seam in the series, measured the way the A2->B1 seam was measured.

gate7.py asked one question about one join: how many unknown word types does a
Foundation leaver meet in a real Volume 1 passage? That measurement is what
Foundation 2 was built from. This generalises it, so that no join in the
series is asserted when it could be counted.

A "leaver" of a stage knows: the control band tiers that stage is written
inside, every head word taught up to and including that stage with its
inflections, the closed-class and course words, and the proper names any unit
declares. The target volume's own unit vocabulary is excluded from the count,
because a unit teaches its words on the page before the passage: they are the
lesson, not the obstacle.

Usage:  python3 seam.py            every seam
        python3 seam.py V2 3       one seam, with the words listed
"""
import importlib
import sys

import check
from content._wordbank import unknown

# a stage -> the (prefix, units) a leaver of it has worked through
PATH = [('F1', [('f', range(1, 11))]),
        ('F2', [('f', range(1, 11)), ('g', range(1, 11))]),
        ('V1', [('f', range(1, 11)), ('g', range(1, 11)),
                ('u', range(1, 11))]),
        ('V2', [('f', range(1, 11)), ('g', range(1, 11)),
                ('u', range(1, 21))]),
        ('V3', [('f', range(1, 11)), ('g', range(1, 11)),
                ('u', range(1, 31))]),
        ('V4', [('f', range(1, 11)), ('g', range(1, 11)),
                ('u', range(1, 41))])]
STAGE = dict(PATH)

# the seams worth a number: what a leaver of X meets in volume Y
SEAMS = [('F1', 1, 'Foundation 1 -> Volume 1'),
         ('F2', 1, 'Foundation 2 -> Volume 1'),
         ('V1', 2, 'Volume 1 -> Volume 2'),
         ('V2', 3, 'Volume 2 -> Volume 3'),
         ('V3', 4, 'Volume 3 -> Volume 4')]

VOL_UNITS = {1: range(1, 11), 2: range(11, 21),
             3: range(21, 31), 4: range(31, 41)}


def leaver(stage):
    taught, names = [], []
    for pre, rng in STAGE[stage]:
        for n in rng:
            U = importlib.import_module('content.%s%02d' % (pre, n)).UNIT
            taught += [w for w, _ in check.heads(U)]
            names += list(U.get('names', ()))
    extra = None
    if stage != 'F1':
        from content._band2 import BAND2
        extra = BAND2
    return taught, names, extra


def passages(vol):
    """Every academic passage and listening script in a volume, with the
    unit's own taught vocabulary, which the unit presents before them."""
    out = []
    for n in VOL_UNITS[vol]:
        U = importlib.import_module('content.u%02d' % n).UNIT
        own = [w for w, _ in check.heads(U)] + list(U.get('names', ()))
        nm = list(U.get('names', ()))
        for tag in ('r1', 'r2', 'r3', 'r4', 'r5'):
            b = U.get(tag)
            if b and 'paras' in b:
                out.append(('U%02d %s' % (n, tag), ' '.join(b['paras']), own, nm))
        for tag in ('l1', 'l2', 'l3', 'l4', 'l5'):
            b = U.get(tag)
            if b and 'script' in b:
                out.append(('U%02d %s' % (n, tag),
                            ' '.join(t for _, t in b['script']), own, nm))
    return out


def measure(stage, vol):
    taught, names, extra = leaver(stage)
    rows = []
    for label, text, own, own_names in passages(vol):
        out = unknown(text, list(taught) + list(own),
                      tuple(names) + tuple(own_names), extra)
        seen, uniq = set(), []
        for w in out:
            if w.lower() not in seen:
                seen.add(w.lower())
                uniq.append(w)
        rows.append((label, len(uniq), uniq))
    rows.sort(key=lambda r: -r[1])
    return rows


def main(argv):
    if len(argv) == 2:
        stage, vol = argv[0], int(argv[1])
        rows = measure(stage, vol)
        print('%s leaver, Volume %d passages\n' % (stage, vol))
        for label, k, uniq in rows:
            print('%-10s %4d  %s' % (label, k, ', '.join(uniq[:12])
                                     + (' ...' if len(uniq) > 12 else '')))
        t = [k for _, k, _ in rows]
        print('\npassages %d   worst %d   mean %.1f   median %d'
              % (len(t), max(t), sum(t) / float(len(t)), sorted(t)[len(t) // 2]))
        return 0

    print('EVERY SEAM IN THE SERIES')
    print('unknown word types a leaver meets in the next volume\n')
    print('%-32s %8s %7s %8s %9s' % ('seam', 'worst', 'mean', 'median',
                                     'over 15'))
    print('-' * 70)
    worst_seam = None
    for stage, vol, label in SEAMS:
        rows = measure(stage, vol)
        t = [k for _, k, _ in rows]
        mean = sum(t) / float(len(t))
        over = sum(1 for k in t if k > 15)
        print('%-32s %8d %7.1f %8d %9s'
              % (label, max(t), mean, sorted(t)[len(t) // 2],
                 '%d of %d' % (over, len(t))))
        if worst_seam is None or mean > worst_seam[1]:
            worst_seam = (label, mean)
    print('-' * 70)
    print('The threshold Volume 1 Unit 10 gives the student is fifteen.')
    print('Widest seam by mean: %s (%.1f).' % worst_seam)
    return 0


if __name__ == '__main__':
    raise SystemExit(main(sys.argv[1:]))
