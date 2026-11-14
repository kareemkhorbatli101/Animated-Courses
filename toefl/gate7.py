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


def taught_by_foundation(pre='f'):
    taught, names = [], []
    for m in range(1, 11):
        U = importlib.import_module('content.%s%02d' % (pre, m)).UNIT
        taught += [w for w, _ in check.heads(U)]
        names += list(U.get('names', ()))
    return taught, names


def seen_in_foundation(pre):
    """Every word form that actually occurs in a Foundation volume's own text.

    The band is a licence to use a word, not a promise that the book used it.
    Crediting a leaver with all 1,800 forms of the second band tier would
    flatter Foundation 2, so this gate also reports the strict number, where
    the only extra forms credited are the ones a student has actually read or
    heard in the volume.
    """
    out = set()
    for m in range(1, 11):
        U = importlib.import_module('content.%s%02d' % (pre, m)).UNIT
        for t in check._texts(U):
            out |= {w.lower() for w in re.findall(r"[A-Za-z][A-Za-z'\u2019-]*", t)}
    return out


def leaver(stage):
    """What a student knows on the day they finish `stage`.

    F1: the 2,200-form control band plus Foundation 1's 504 head words.
    F2: all of that, plus the second band tier (ranks ~2,201-4,000) and
        Foundation 2's own head words. This is the only difference between
        the two numbers this gate prints, and it is the reason Foundation 2
        exists.
    """
    taught, names = taught_by_foundation('f')
    extra = None
    if stage.startswith('F2'):
        t2, n2 = taught_by_foundation('g')
        taught += t2
        names += n2
        from content._band2 import BAND2
        extra = set(BAND2)
        if stage == 'F2S':
            extra &= (seen_in_foundation('g') | seen_in_foundation('f'))
    return taught, names, extra


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


def measure(stage):
    taught, names, extra = leaver(stage)
    rows, total = [], []
    for label, text, own, own_names in v1_passages():
        out = unknown(text, list(taught) + list(own),
                      tuple(names) + tuple(own_names), extra)
        seen, uniq = set(), []
        for w in out:
            if w.lower() not in seen:
                seen.add(w.lower())
                uniq.append(w)
        rows.append((label, len(uniq), uniq))
        total.append(len(uniq))
    rows.sort(key=lambda r: -r[1])
    return rows, total


def main():
    stage = sys.argv[1] if len(sys.argv) > 1 else 'F2'
    cap = int(sys.argv[2]) if len(sys.argv) > 2 else 12
    if stage.upper() not in ('F1', 'F2', 'F2S'):
        print('usage: gate7.py [F1|F2|F2S] [cap]')
        return 2
    stage = stage.upper()

    rows, total = measure(stage)
    print('GATE 7 (readiness) - unknown word types per Volume 1 passage')
    print('measured for a student who has finished Foundation %s\n'
          % stage[-1])
    print('%-10s %5s  %s' % ('passage', 'new', 'the words'))
    print('-' * 72)
    for label, k, uniq in rows:
        print('%-10s %5d  %s' % (label, k, ', '.join(uniq[:9])
                                 + (' ...' if len(uniq) > 9 else '')))
    n = len(total)
    print('-' * 72)
    print('passages: %d   worst: %d   mean: %.1f   median: %d'
          % (n, max(total), sum(total) / n, sorted(total)[n // 2]))

    if stage == 'F2':
        _, t1 = measure('F1')
        _, ts = measure('F2S')
        def line(lab, t):
            print('%-44s worst %2d   mean %4.1f   median %2d'
                  % (lab, max(t), sum(t) / float(len(t)), sorted(t)[len(t) // 2]))
        print()
        line('after Foundation 1 only', t1)
        line('after Foundation 2, strict (words actually read)', ts)
        line('after Foundation 2, band credited in full', total)
        m1 = sum(t1) / float(len(t1))
        ms = sum(ts) / float(len(ts))
        print('On the strict measure Foundation 2 removes %.1f unknown word '
              'types from the average Volume 1 passage (%.0f%%), and that is '
              'the number to quote.' % (m1 - ms, 100.0 * (m1 - ms) / m1))

    over = [(l, k) for l, k, _ in rows if k > cap]
    if over:
        print('\nGATE 7: %d passage(s) over the cap of %d: %s'
              % (len(over), cap, ', '.join('%s (%d)' % x for x in over[:12])))
        return 1
    print('\nGATE 7 (readiness): PASS - every Volume 1 passage sits at or under '
          '%d unknown word types for a Foundation %s leaver.' % (cap, stage[-1]))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
