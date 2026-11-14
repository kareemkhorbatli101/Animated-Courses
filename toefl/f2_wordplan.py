# -*- coding: utf-8 -*-
"""Allocate Foundation 2's 330 head words across its ten units, from measurement.

Foundation 2 teaches 33 head words a unit - 21 'acad' and 12 'fieldwords' -
so 330 in all. v1_gap_all.json holds the 522 words a Foundation 1 leaver meets
in Volume 1 and does not know, sorted by the Volume 1 unit whose text uses
them and tagged by whether that text was an academic passage or an everyday
one.

330 slots hold the 329 measured words with one to spare, but not in the unit
that needs each one, so the order of priority is stated here rather than left
to taste:

  1. every word from an academic passage, in the unit whose passage uses it -
     these are the hardest and the reason this volume exists;
  2. a word used by more than one unit goes to the earliest of them, so it is
     taught before either passage needs it;
  3. the remaining slots go to everyday-text words, most-used first.

A word is allocated once. Where a unit's academic words overflow its 33 slots
the surplus moves to the adjacent unit with room, and the move is printed, so
that the overflow is visible rather than silently dropped.

Run:  python3 f2_wordplan.py        writes f2_wordplan.json
"""
import collections
import json
import sys

G = json.load(open('v1_gap_all.json'))
PER = {int(k): set(v) for k, v in G['per_unit'].items()}
KIND = G['kind']
SLOTS, FIELD = 33, 12


def build():
    first = {}                       # word -> the earliest unit that uses it
    uses = collections.Counter()
    for n in sorted(PER):
        for w in PER[n]:
            uses[w] += 1
            first.setdefault(w, n)

    want = collections.defaultdict(list)
    for w, n in first.items():
        want[n].append(w)
    for n in want:
        want[n].sort(key=lambda w: (KIND[w] != 'academic', -uses[w], w))

    plan, spill = {n: [] for n in sorted(PER)}, []
    for n in sorted(PER):
        for w in want[n]:
            if len(plan[n]) < SLOTS:
                plan[n].append(w)
            else:
                spill.append((n, w))

    # the surplus goes to the nearest unit with room
    moved = []
    for n, w in spill:
        for m in sorted(plan, key=lambda m: (abs(m - n), m)):
            if len(plan[m]) < SLOTS:
                plan[m].append(w); moved.append((w, n, m)); break
    left = [w for n, w in spill if not any(x[0] == w for x in moved)]

    # fill any remaining room with the most-used words nobody has taken
    placed = {w for ws in plan.values() for w in ws}
    pool = sorted((w for w in uses if w not in placed),
                  key=lambda w: (KIND[w] != 'academic', -uses[w], w))
    for n in sorted(plan):
        while len(plan[n]) < SLOTS and pool:
            plan[n].append(pool.pop(0))

    # One word short of 330, because 329 were measured. The top-up is declared
    # here rather than chosen while writing: 'narrative' is the word Volume 1
    # unit 10 uses for its own grammar point, so it is the one word in this
    # volume that is named by Volume 1 instead of measured from it.
    if sum(len(v) for v in plan.values()) < SLOTS * len(plan):
        plan[max(plan)].append('narrative')
        KIND.setdefault('narrative', 'academic')
        uses['narrative'] = 1
        first['narrative'] = max(plan)

    out = {}
    for n in sorted(plan):
        ws = plan[n]
        # The field words are this unit's own subject: a word first used by an
        # academic passage of the matching Volume 1 unit. Everything else -
        # a word moved here for room, or one from an everyday text - is general
        # vocabulary and goes in acad.
        mine = [w for w in ws if first.get(w) == n and KIND[w] == 'academic']
        mine.sort(key=lambda w: (-uses[w], w))
        field = mine[:FIELD]
        rest = [w for w in ws if w not in field]
        while len(field) < FIELD and rest:
            field.append(rest.pop(0))
        out[str(n)] = {'fieldwords': sorted(field), 'acad': sorted(rest)}
    return out, moved, left, pool, uses


def main():
    plan, moved, left, pool, uses = build()
    print('Foundation 2 word plan: %d slots a unit, %d in all\n'
          % (SLOTS, SLOTS * len(plan)))
    aca = sum(1 for n in plan for w in plan[n]['acad'] + plan[n]['fieldwords']
              if KIND[w] == 'academic')
    tot = sum(len(plan[n]['acad']) + len(plan[n]['fieldwords']) for n in plan)
    print('allocated            %d' % tot)
    print('  from academic passages %d of the %d measured'
          % (aca, sum(1 for w in KIND if KIND[w] == 'academic')))
    print('  from everyday texts    %d' % (tot - aca))
    print('not taught in this volume %d (all everyday-text words)' % len(pool))
    if moved:
        print('\nmoved for want of room in the unit that needed it:')
        for w, a, b in moved:
            print('  %-16s U%d -> U%d' % (w, a, b))
    if left:
        print('\nNOT PLACED: %s' % ', '.join(left))
    print()
    for n in sorted(plan, key=int):
        p = plan[n]
        print('G%-2s field: %s' % (n, ', '.join(p['fieldwords'])))
        print('    acad : %s' % ', '.join(p['acad']))
    json.dump(plan, open('f2_wordplan.json', 'w'), indent=1)
    print('\n-> toefl/f2_wordplan.json')
    return 0


if __name__ == '__main__':
    sys.exit(main())
