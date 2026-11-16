# -*- coding: utf-8 -*-
"""Gate 7: is a Foundation 2 leaver ready for Volume 1?

The plan sets the bar in one line: "a Foundation 2 leaver meets <= 12
unknown word types in a Volume 1 passage". This measures it.

The leaver is modelled as a reader who knows the first thousand word
families and every head word the two Foundation books teach, with the
crude stemming ledger.py uses, so that a taught "measure" covers
"measured" and "measures". Everything else in a Volume 1 academic
passage is counted as unknown.

    python3 readiness.py          # the gate
    python3 readiness.py -v       # and what the unknown types actually are
"""
import importlib
import sys

import ledger as LG

LIMIT = 12          # the plan's own figure, per passage, as a mean
WORST = 20          # and no single passage may be hopeless


def foundation_heads():
    """Every head word the two Foundation books teach."""
    return set(LG.taught(range(61, 81)))


def passages(rng=range(1, 11), bands=('acad',)):
    out = []
    for n in rng:
        m = LG._unit(n)
        if m is None:
            continue
        for c in m.UNIT['cycles']:
            for r in c['read']:
                if r['band'] in bands:
                    out.append((n, r['heading'], r['paras']))
    return out


def unknown_types(paras, R, kn):
    seen = set()
    for p in paras:
        for w in LG.WORD.findall(p.lower()):
            if len(w) < 3:
                continue
            if LG.known(w, R, kn):
                continue
            seen.add(w)
    return seen


def main(argv):
    R = LG.P.ranks()
    kn = foundation_heads()
    ps = passages()
    if not ps:
        print('no Volume 1 passages found')
        return 1
    counts = []
    for n, head, paras in ps:
        u = unknown_types(paras, R, kn)
        counts.append((len(u), n, head, sorted(u)))
    counts.sort(reverse=True)
    mean = sum(c for c, _, _, _ in counts) / float(len(counts))
    worst = counts[0]
    print('GATE 7 (readiness)')
    print('  Foundation head words taught: %d' % len(kn))
    print('  Volume 1 academic passages:   %d' % len(counts))
    print('  unknown types, mean:          %.1f  (want <= %d)'
          % (mean, LIMIT))
    print('  unknown types, worst passage: %d  "%s" (unit %d)  (want <= %d)'
          % (worst[0], worst[2][:40], worst[1], WORST))
    if '-v' in argv:
        print()
        for c, n, head, u in counts[:6]:
            print('  u%d "%s" - %d: %s' % (n, head[:34], c, ', '.join(u[:24])))
    bad = mean > LIMIT or worst[0] > WORST
    print()
    print('  %s' % ('FAIL' if bad else 'PASS - a Foundation 2 leaver can '
                    'read Volume 1'))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
