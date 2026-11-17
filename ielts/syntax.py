# -*- coding: utf-8 -*-
"""The syntax ladder: where each book's sentences sit, and what to change.

density.py gates four numbers now; two of them (mean sentence length and
the nominalisation rate) are syntactic, and this module is the authoring
aid behind them. It finds the sentences that make a book's mean what it
is, so that moving the mean is a matter of ten named edits rather than of
rewriting a book.

    python3 syntax.py 4              # the book's sentences, longest first
    python3 syntax.py 4 --short 20   # the twenty shortest (merge these)
    python3 syntax.py 4 --long 20    # the twenty longest (split these)
    python3 syntax.py 4 --plan 25.0  # how many merges reach a target mean

An address is unit.cycle.paragraph, so `u34 c4 p2` is the second paragraph
of the fourth cycle of unit 34, and `paper p1.3` the third paragraph of
the first passage of the timed paper.
"""
import re
import sys

import density as D


def sentences(text):
    return [s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if s.strip()]


def inventory(vol):
    """Every sentence of a book's gated prose, with its address."""
    out = []
    lo = 21 + (vol - 3) * 10
    for n in range(lo, lo + 10):
        m = D._load('u%02d' % n)
        if m is None:
            continue
        U = m.UNIT
        for ci, c in enumerate(U['cycles'], 1):
            for r in c['read']:
                if r['band'] not in ('acad', 'long'):
                    continue
                for pi, p in enumerate(r['paras'], 1):
                    for s in sentences(p):
                        out.append(('u%d c%d p%d' % (U['n'], ci, pi),
                                    len(s.split()), s))
    pm = D._load('paper%d' % vol)
    if pm is not None:
        for x in pm.PAPER['passages']:
            for pi, p in enumerate(x['paras'], 1):
                for s in sentences(p):
                    out.append(('paper p%d.%d' % (x['no'], pi),
                                len(s.split()), s))
    return out


def mean(inv):
    return sum(n for _, n, _ in inv) / float(len(inv))


def plan(inv, target):
    """Merging a pair of sentences removes one sentence and adds no words.

    So the mean after k merges is W / (S - k), and the number of merges
    needed for a target mean is S - W/target. Splitting is the same sum
    with the sign reversed.
    """
    W = sum(n for _, n, _ in inv)
    S = len(inv)
    need = S - W / float(target)
    return W, S, W / float(S), need


def main(argv):
    vol = int(argv[1])
    inv = inventory(vol)
    W, S, mu, _ = plan(inv, mu0 := mean(inv))
    name = D.BOOK_NAME.get(vol, 'Volume %d' % vol)
    print('%s: %d sentences, %d words, mean %.2f' % (name, S, W, mu))
    if '--plan' in argv:
        target = float(argv[argv.index('--plan') + 1])
        _, _, _, need = plan(inv, target)
        if need > 0:
            print('to reach %.1f: merge %d pairs (%d -> %d sentences)'
                  % (target, round(need), S, S - round(need)))
        else:
            print('to reach %.1f: split %d sentences (%d -> %d)'
                  % (target, round(-need), S, S + round(-need)))
        return 0
    k = 0
    if '--short' in argv:
        k = int(argv[argv.index('--short') + 1])
        rows = sorted(inv, key=lambda r: r[1])[:k]
    elif '--long' in argv:
        k = int(argv[argv.index('--long') + 1])
        rows = sorted(inv, key=lambda r: -r[1])[:k]
    else:
        rows = sorted(inv, key=lambda r: -r[1])[:40]
    for addr, n, s in rows:
        print('%-14s %3d  %s' % (addr, n, s[:96]))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
