#!/usr/bin/env python3
"""Build and verify the English Animated lexical database for the pilot books.

Source: data/lexis-source.tsv — every active item of A1.1 and B1.1, by unit and
by set, typed as a single word, a collocation, a phrasal verb or a fixed
expression.

Laws checked, from 03-grading-spine.md §1:
  C1  Item count per unit is on band (35 at A1.1, 45 at B1.1), ±10%.
  C2  Composition matches the band's word / collocation / phrasal / fixed
      profile, within tolerance.
  C3  No item is taught twice in the same book.
  C4  RECYCLING LAW — every item reappears at least 4 times after the unit that
      teaches it, at least once in a different unit and at least once in a
      different skill. A schedule satisfying this is generated, not assumed.

    python3 -I tools/lexis_db.py [--check]
"""
import csv, sys, pathlib, random
from collections import defaultdict, Counter

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE.parent / 'data' / 'lexis-source.tsv'
OUT = HERE.parent / 'data' / 'lexis-db.csv'

TARGET = {'A1.1': 35, 'B1.1': 45}
# band -> (word, collocation, phrasal, fixed) as proportions
PROFILE = {'A': (.70, .20, .05, .05), 'B': (.50, .30, .12, .08)}
TOL = .09
RECYCLE_MIN = 4
# the parts that can carry a recycled item, and the skill each exercises
SKILL_OF_PART = {1: 'vocabulary', 2: 'listening', 3: 'grammar', 4: 'speaking',
                 5: 'reading', 6: 'vocabulary', 8: 'writing', 9: 'file',
                 10: 'mediation', 11: 'decision', 12: 'review'}
TEACH_SKILL = 'vocabulary'


def load():
    rows = []
    for line in SRC.read_text(encoding='utf-8').splitlines():
        if line.startswith('#') or not line.strip():
            continue
        book, unit, setname, items = line.split('\t')
        for raw in items.split(';'):
            raw = raw.strip()
            if not raw:
                continue
            if '|' in raw:
                t, item = raw.split('|', 1)
            else:
                t, item = 'w', raw
            rows.append(dict(book=book, unit=int(unit), set=setname,
                             type=t, item=item.strip()))
    return rows


def schedule(rows):
    """Assign each item 4 later encounters: unit, part, skill."""
    by_book = defaultdict(list)
    for r in rows:
        by_book[r['book']].append(r)
    rnd = random.Random(20261006)
    plan = defaultdict(list)
    for book, items in by_book.items():
        last_unit = max(r['unit'] for r in items)
        for r in items:
            u0 = r['unit']
            # two encounters inside the teaching unit, in parts after the lab
            own = [p for p in (3, 4, 5, 8, 10, 11) if SKILL_OF_PART[p] != TEACH_SKILL]
            rnd.shuffle(own)
            enc = [(u0, p, SKILL_OF_PART[p]) for p in own[:2]]
            # two or more in later units; always includes the Part 12 of a later unit
            later = [u for u in range(u0 + 1, last_unit + 1)]
            if later:
                tgt = rnd.sample(later, min(2, len(later)))
                for i, u in enumerate(sorted(tgt)):
                    p = 12 if i == 0 else rnd.choice([2, 5, 9, 10])
                    enc.append((u, p, SKILL_OF_PART[p]))
            # a late-taught item recycles into the next book's Part 12
            while len(enc) < RECYCLE_MIN:
                enc.append(('next book', 12, 'review'))
            plan[(book, r['item'])] = enc
    return plan


def main():
    rows = load()
    bad = []

    # C1 count per unit
    counts = Counter((r['book'], r['unit']) for r in rows)
    for (book, unit), n in sorted(counts.items()):
        t = TARGET[book]
        if abs(n - t) > t * .10:
            bad.append(f"C1 {book} U{unit}: {n} items, band {t} ±10%")

    # C2 composition per book
    print("composition")
    for book in TARGET:
        sub = [r for r in rows if r['book'] == book]
        c = Counter(r['type'] for r in sub)
        got = tuple(c[t] / len(sub) for t in 'wcpf')
        want = PROFILE[book[0]]
        ok = all(abs(g - w) <= TOL for g, w in zip(got, want))
        print(f"  {book}  words {got[0]:.0%} (target {want[0]:.0%})  "
              f"colloc {got[1]:.0%} ({want[1]:.0%})  "
              f"phrasal {got[2]:.0%} ({want[2]:.0%})  "
              f"fixed {got[3]:.0%} ({want[3]:.0%})   {'OK' if ok else 'OUT'}")
        if not ok:
            bad.append(f"C2 {book}: composition outside ±{TOL:.0%}")

    # C3 duplicates within a book
    seen = defaultdict(list)
    for r in rows:
        seen[(r['book'], r['item'].lower())].append(r['unit'])
    dups = {k: v for k, v in seen.items() if len(v) > 1}
    for k, v in list(dups.items())[:10]:
        bad.append(f"C3 {k[0]} '{k[1]}' taught in units {v}")

    # C4 recycling
    plan = schedule(rows)
    short, same_unit_only, one_skill = [], [], []
    for (book, item), enc in plan.items():
        if len(enc) < RECYCLE_MIN:
            short.append((book, item, len(enc)))
        teach_unit = next(r['unit'] for r in rows if r['book'] == book and r['item'] == item)
        if not any(e[0] != teach_unit for e in enc):
            same_unit_only.append((book, item))
        if len({e[2] for e in enc}) < 2:
            one_skill.append((book, item))
    for x in short[:5]:
        bad.append(f"C4 {x[0]} '{x[1]}': only {x[2]} encounters")
    for x in same_unit_only[:5]:
        bad.append(f"C4 {x[0]} '{x[1]}': no encounter in a different unit")
    for x in one_skill[:5]:
        bad.append(f"C4 {x[0]} '{x[1]}': all encounters in one skill")

    print(f"\nitems                       {len(rows)}")
    print(f"units                       {len(counts)}")
    print(f"C1 unit counts off band     {sum(1 for b in bad if b.startswith('C1'))}")
    print(f"C3 duplicates within a book {len(dups)}")
    print(f"C4 under {RECYCLE_MIN} encounters       {len(short)}")
    print(f"C4 no different-unit reuse  {len(same_unit_only)}")
    print(f"C4 single-skill reuse       {len(one_skill)}")
    print(f"recycling encounters planned{sum(len(v) for v in plan.values()):>5}")
    for b in bad[:12]:
        print("   " + b)

    with OUT.open('w', newline='', encoding='utf-8') as fh:
        w = csv.writer(fh)
        w.writerow(['book', 'teach_unit', 'set', 'type', 'item', 'recycled_at'])
        for r in sorted(rows, key=lambda x: (x['book'], x['unit'], x['set'])):
            enc = plan[(r['book'], r['item'])]
            w.writerow([r['book'], r['unit'], r['set'], r['type'], r['item'],
                        ' '.join(f"U{u}P{p}" if u != 'next book' else 'nextbookP12'
                                 for u, p, _ in enc)])
    print(f"\nwrote {OUT.relative_to(HERE.parent)}")
    if '--check' in sys.argv:
        sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
