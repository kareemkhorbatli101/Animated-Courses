# -*- coding: utf-8 -*-
"""GATE 7 (readiness) - how many unknown word types a Foundation leaver meets
in each real Volume 1 academic passage.

A student who finishes Foundation knows:
  - the 2,200-form control band the Foundation is written inside,
  - every head word the ten Foundation units teach, with its inflections,
  - the closed-class and course words the gate always allows,
  - the proper names any Foundation unit declares.

The number this gate prints is the count of DISTINCT content words in a
Volume 1 passage that are in none of those sets. Volume 1's own unit
vocabulary is excluded from the count, because Volume 1 teaches those words
on the page before the passage: they are the lesson, not the obstacle.

Volume 1 Unit 10's closing test tells the student that fewer than fifteen
unknown words means ready. That sentence is what this gate measures against.
"""
import importlib
import re
import sys

import check
from content._wordbank import unknown


def taught_by_foundation():
    taught, names = [], []
    for m in range(1, 11):
        U = importlib.import_module('content.f%02d' % m).UNIT
        taught += [w for w, _ in check.heads(U)]
        names += list(U.get('names', ()))
    return taught, names


def v1_passages():
    """Every academic reading passage and listening script in Volume 1, with
    the unit's own taught vocabulary, which Volume 1 presents before them."""
    out = []
    for n in range(1, 11):
        U = importlib.import_module('content.u%02d' % n).UNIT
        own = [w for w, _ in check.heads(U)] + list(U.get('names', ()))
        for tag in ('r1', 'r2', 'r3'):
            b = U.get(tag)
            if not b or 'paras' not in b:
                continue
            out.append(('U%02d %s' % (n, tag), ' '.join(b['paras']), own,
                        list(U.get('names', ()))))
        for tag in ('l1', 'l2', 'l3'):
            b = U.get(tag)
            if not b or 'script' not in b:
                continue
            out.append(('U%02d %s' % (n, tag),
                        ' '.join(t for _, t in b['script']), own,
                        list(U.get('names', ()))))
    return out


def main():
    taught, names = taught_by_foundation()
    rows, total = [], []
    for label, text, own, own_names in v1_passages():
        out = unknown(text, list(taught) + list(own),
                      tuple(names) + tuple(own_names))
        seen, uniq = set(), []
        for w in out:
            if w.lower() not in seen:
                seen.add(w.lower())
                uniq.append(w)
        rows.append((label, len(uniq), uniq))
        total.append(len(uniq))

    rows.sort(key=lambda r: -r[1])
    print('GATE 7 (readiness) - unknown word types per Volume 1 passage\n')
    print('%-10s %5s  %s' % ('passage', 'new', 'the words'))
    print('-' * 72)
    for label, k, uniq in rows:
        print('%-10s %5d  %s' % (label, k, ', '.join(uniq[:9])
                                 + (' ...' if len(uniq) > 9 else '')))
    n = len(total)
    print('-' * 72)
    print('passages: %d   worst: %d   mean: %.1f   median: %d'
          % (n, max(total), sum(total) / n, sorted(total)[n // 2]))
    cap = int(sys.argv[1]) if len(sys.argv) > 1 else 12
    over = [(l, k) for l, k, _ in rows if k > cap]
    if over:
        print('\nGATE 7: %d passage(s) over the cap of %d: %s'
              % (len(over), cap, ', '.join('%s (%d)' % x for x in over[:12])))
        return 1
    print('\nGATE 7 (readiness): PASS - every Volume 1 passage sits at or under '
          '%d unknown word types.' % cap)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
