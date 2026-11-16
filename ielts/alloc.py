# -*- coding: utf-8 -*-
"""Which Foundation cycle teaches which word of the gap.

ledger.py says what the gap into Volume 1 is: 1,407 types a thousand-word
reader meets there that no book in the series teaches. Gate 7 says the gap
has to be taught in full, not sampled. This decides where each word goes,
once, so that authoring a cycle is a matter of writing a text around a
known list rather than hoping the coverage adds up at the end.

Two decisions, in order:

1. Which book. The commoner half of the gap goes to Foundation 1 and the
   rarer half to Foundation 2, because a word a student meets constantly
   is worth teaching first and is usually the plainer word.
2. Which unit. Every gap word is somewhere in Volume 1, and Volume 1's
   units have themes. A word that lives in Volume 1's food unit is taught
   in the Foundation unit about food. THEME maps one to the other; what
   fits nowhere fills the units whose themes Volume 1 does not cover.

    python3 alloc.py            # the shape of the allocation
    python3 alloc.py 61         # the five cycle lists for one unit
    python3 alloc.py --write    # write alloc.json for the authoring
"""
import collections
import json
import os
import sys

import ledger as LG

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'alloc.json')

# Volume 1 unit -> the Foundation units that inherit its vocabulary.
# Modules 61-70 are Foundation 1, 71-80 Foundation 2.
THEME = {
    1:  [67, 71],        # Education            -> School and Study; Art
    2:  [66, 77],        # Work and Careers     -> Work and Jobs; Clothes
    3:  [68, 78],        # Health               -> Health; Festivals
    4:  [70, 74],        # Environment          -> Weather; Animals
    5:  [64, 73],        # Technology           -> Shopping; Technology
    6:  [65, 76],        # Travel and Tourism   -> Travel; Holidays
    7:  [62, 75],        # Cities and Housing   -> Home; Cities
    8:  [61, 78],        # Food and Agriculture -> Food; Festivals
    9:  [63, 79],        # Media                -> Family; News and Media
    10: [69, 80],        # Sport                -> Free Time; Transport
}
# Foundation 2's music unit has no source unit in Volume 1, which has no
# music in it. It fills from the spill, which is the honest answer: there
# is no measured music vocabulary to inherit.
F1 = list(range(61, 71))
F2 = list(range(71, 81))
PER_CYCLE = 15           # a ceiling; the floor is 14


def home_units():
    """For each gap word, the Volume 1 units it actually appears in."""
    where = collections.defaultdict(collections.Counter)
    for n in range(1, 11):
        m = LG._unit(n)
        if m is None:
            continue
        for c in m.UNIT['cycles']:
            for r in c['read']:
                for para in r['paras']:
                    for w in LG.WORD.findall(para.lower()):
                        where[w][n] += 1
    return where


def allocate():
    rows = LG.gap()                       # (uses, rank, word), commonest first
    where = home_units()
    half = len(rows) // 2
    book_of = {}
    for i, (_, _, w) in enumerate(rows):
        book_of[w] = 1 if i < half else 2
    slots = {u: [] for u in F1 + F2}
    cap = {}
    for u in F1 + F2:
        cap[u] = 0
    # pass 1: every word to a unit whose theme owns it
    spill = []
    for uses, rank, w in rows:
        v1 = where[w].most_common(1)
        if not v1:
            spill.append((uses, rank, w))
            continue
        cands = THEME[v1[0][0]]
        book = book_of[w]
        want = [u for u in cands if (u in F1) == (book == 1)]
        want = want or cands
        u = min(want, key=lambda x: len(slots[x]))
        if len(slots[u]) >= 5 * PER_CYCLE:
            spill.append((uses, rank, w))
        else:
            slots[u].append(w)
    # pass 2: whatever overflowed goes where there is room, keeping the
    # commoner half in Foundation 1
    for uses, rank, w in spill:
        pool = F1 if book_of[w] == 1 else F2
        pool = [u for u in pool if len(slots[u]) < 5 * PER_CYCLE] or \
               [u for u in F1 + F2 if len(slots[u]) < 5 * PER_CYCLE]
        if not pool:
            pool = F1 + F2
        u = min(pool, key=lambda x: len(slots[x]))
        slots[u].append(w)
    return slots


def cycles(words):
    """Split a unit's words into five cycle lists, 14 or 15 each."""
    n = len(words)
    base, extra = divmod(n, 5)
    out, i = [], 0
    for c in range(5):
        k = base + (1 if c < extra else 0)
        out.append(words[i:i + k])
        i += k
    return out


def main(argv):
    slots = allocate()
    if '--write' in argv:
        data = {str(u): cycles(ws) for u, ws in slots.items()}
        with open(OUT, 'w') as fh:
            json.dump(data, fh, indent=1, sort_keys=True)
        print('wrote %s: %d units, %d words'
              % (OUT, len(data), sum(len(w) for ws in data.values()
                                     for w in ws)))
        return 0
    if argv and argv[0].isdigit():
        u = int(argv[0])
        for i, cy in enumerate(cycles(slots[u]), 1):
            print('cycle %d (%d): %s' % (i, len(cy), ', '.join(cy)))
        return 0
    tot = 0
    for u in F1 + F2:
        tot += len(slots[u])
        print('u%d  %3d words' % (u, len(slots[u])))
    print('total %d' % tot)
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
