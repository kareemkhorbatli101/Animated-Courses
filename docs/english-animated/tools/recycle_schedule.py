#!/usr/bin/env python3
"""Build the Part 12 grammar recycling schedule and verify the coverage law.

`02-unit-architecture.md` Part 12 requires every unit to recycle 4 items from
earlier in its own book and 2 from the previous book. Three of those six slots
carry grammar; the rest carry lexis. This script fills the grammar slots so
that the series law holds:

  COVERAGE  Every canonical structure is encountered at least TWICE after the
            unit that introduces it — counting G2 returns and Part 12 recycle
            slots together. G2 alone cannot do it: there are 172 structures
            and only 139 G2 slots.

  PLACEMENT A recycle slot never carries a structure that is already that
            unit's G2 return, never one introduced later, and the
            previous-book slot only ever carries a previous-book structure.

    python3 -I tools/recycle_schedule.py [--check]
"""
import csv, sys, pathlib
from collections import defaultdict

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE.parent / 'data' / 'structures.tsv'
OUT = HERE.parent / 'data' / 'recycle-schedule.csv'
OWN_SLOTS, PREV_SLOTS, TARGET = 2, 1, 2


def load():
    units, books = [], []
    for line in SRC.read_text(encoding='utf-8').splitlines():
        if line.startswith('#') or not line.strip():
            continue
        f = line.split('\t')
        if f[0] not in books:
            books.append(f[0])
        units.append(dict(book=f[0], unit=int(f[1]),
                          new=[x for x in f[2].split(';') if x],
                          ret=[x for x in (f[3] if len(f) > 3 else '').split(';') if x]))
    pos = {b: i for i, b in enumerate(books)}
    for u in units:
        u['seq'] = pos[u['book']] * 10 + u['unit']
        u['bi'] = pos[u['book']]
    units.sort(key=lambda u: u['seq'])
    return units, books


def main():
    units, books = load()
    intro = {}
    for u in units:
        for s in u['new']:
            intro[s] = u
    seen = defaultdict(int)          # encounters after introduction
    for u in units:
        for s in u['ret']:
            seen[s] += 1

    by_book = defaultdict(list)
    for s, u in intro.items():
        by_book[u['book']].append(s)

    schedule, misplaced = [], []
    for u in units:
        own_pool = [s for s in by_book[u['book']] if intro[s]['seq'] < u['seq']]
        prev_book = books[u['bi'] - 1] if u['bi'] > 0 else None
        prev_pool = list(by_book[prev_book]) if prev_book else []
        banned = set(u['ret'])

        def pick(pool, n):
            cands = sorted((s for s in pool if s not in banned),
                           key=lambda s: (seen[s], intro[s]['seq']))
            out = []
            for s in cands:
                if len(out) == n:
                    break
                out.append(s)
                banned.add(s)
                seen[s] += 1
            return out

        own = pick(own_pool, OWN_SLOTS)
        prev = pick(prev_pool, PREV_SLOTS)
        # a unit early in book 1 may legitimately have nothing to recycle yet
        for s in own:
            schedule.append((u['book'], u['unit'], 'own', s, intro[s]['book'] + 'U' + str(intro[s]['unit'])))
        for s in prev:
            if intro[s]['book'] != prev_book:
                misplaced.append((u['book'], u['unit'], s))
            schedule.append((u['book'], u['unit'], 'prev', s, intro[s]['book'] + 'U' + str(intro[s]['unit'])))

    short = sorted((s for s in intro if seen[s] < TARGET),
                   key=lambda s: (intro[s]['seq'], s))
    final = books[-1]
    short_nonfinal = [s for s in short if intro[s]['book'] != final]

    print(f"structures                        {len(intro)}")
    print(f"G2 return events                  {sum(len(u['ret']) for u in units)}")
    print(f"grammar recycle slots filled      {len(schedule)}")
    print(f"total post-introduction encounters{sum(seen.values()):>5}")
    print()
    print(f"COVERAGE  below {TARGET} encounters      {len(short)}  "
          f"({len(short_nonfinal)} outside the final book)")
    print(f"PLACEMENT prev-slot misplaced     {len(misplaced)}")
    for s in short[:14]:
        print(f"   short: {s:30} {seen[s]}  (introduced {intro[s]['book']}U{intro[s]['unit']})")
    for m in misplaced[:6]:
        print("   misplaced:", m)

    dist = defaultdict(int)
    for s in intro:
        dist[min(seen[s], 6)] += 1
    print("\nencounters after introduction:")
    for k in sorted(dist):
        print(f"   {k}{'+' if k == 6 else ' '} encounters: {dist[k]:3} structures")

    with OUT.open('w', newline='', encoding='utf-8') as fh:
        w = csv.writer(fh)
        w.writerow(['book', 'unit', 'slot', 'structure', 'introduced_at'])
        w.writerows(schedule)
    print(f"\nwrote {OUT.relative_to(HERE.parent)}")

    if '--check' in sys.argv:
        sys.exit(1 if (short_nonfinal or misplaced) else 0)


if __name__ == '__main__':
    main()
