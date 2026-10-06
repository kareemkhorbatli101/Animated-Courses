#!/usr/bin/env python3
"""Build and verify the English Animated grammar database.

Source of truth: data/structures.tsv — for every one of the 140 units, the
canonical structures it INTRODUCES and the ones it RETURNS.

Laws checked:
  L1  No canonical structure is introduced twice anywhere in the shelf.
  L2  Every returning structure was introduced in a strictly earlier unit.
  L3  A structure never returns in the unit that introduces it.
  L4  A return is spaced by level: at least 1 unit after the previous
      encounter at A (where consolidation is still the point), 3 at B, 4 at C,
      so that a "return" is a genuine re-entry and not next week's revision.

Overall coverage — that every structure is met at least twice after it is
introduced — cannot be carried by G2 alone (172 structures, 139 G2 slots) and
is checked by tools/recycle_schedule.py instead.

    python3 -I tools/grammar_db.py [--check]
"""
import csv, sys, pathlib
from collections import defaultdict

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE.parent / 'data' / 'structures.tsv'
OUT = HERE.parent / 'data' / 'grammar-db.csv'
SPACING = {'A': 1, 'B': 3, 'C': 4}


def load():
    units, books = [], []
    for line in SRC.read_text(encoding='utf-8').splitlines():
        if line.startswith('#') or not line.strip():
            continue
        f = line.split('\t')
        book, unit = f[0], int(f[1])
        new = [x for x in (f[2] if len(f) > 2 else '').split(';') if x]
        ret = [x for x in (f[3] if len(f) > 3 else '').split(';') if x]
        if book not in books:
            books.append(book)
        units.append(dict(book=book, unit=unit, new=new, ret=ret))
    pos = {b: i for i, b in enumerate(books)}
    for u in units:
        u['seq'] = pos[u['book']] * 10 + u['unit']
    units.sort(key=lambda u: u['seq'])
    return units, books


def main():
    units, books = load()
    intro, dup = {}, []
    for u in units:
        for s in u['new']:
            if s in intro:
                dup.append((s, intro[s]['label'], f"{u['book']}U{u['unit']}"))
            else:
                intro[s] = dict(seq=u['seq'], label=f"{u['book']}U{u['unit']}", book=u['book'])

    encounters = defaultdict(list)
    for u in units:
        for s in u['new']:
            encounters[s].append(u['seq'])
    dangling, same_unit, tight = [], [], []
    for u in units:
        for s in u['ret']:
            tag = f"{u['book']}U{u['unit']}"
            if s not in intro:
                dangling.append((s, tag, 'never introduced'))
            elif intro[s]['seq'] > u['seq']:
                dangling.append((s, tag, f"introduced later at {intro[s]['label']}"))
            elif intro[s]['seq'] == u['seq']:
                same_unit.append((s, tag))
            else:
                prev = max(x for x in encounters[s] if x < u['seq'])
                need = SPACING[u['book'][0]]
                if u['seq'] - prev < need:
                    tight.append((s, tag, f"{u['seq'] - prev} units after previous "
                                          f"encounter; {u['book'][0]}-level minimum is {need}"))
                encounters[s].append(u['seq'])

    returns = defaultdict(list)
    for u in units:
        for s in u['ret']:
            returns[s].append(f"{u['book']}U{u['unit']}")
    per_book = defaultdict(int)
    for u in units:
        per_book[u['book']] += len(u['new'])

    print(f"units                              {len(units)}")
    print(f"canonical structures introduced    {len(intro)}")
    print(f"return events                      {sum(len(v) for v in returns.values())}")
    print(f"structures that return at least 1x {len(returns)}")
    print()
    print(f"L1 introduced twice                {len(dup)}")
    print(f"L2 return before introduction      {len(dangling)}")
    print(f"L3 return in its own unit          {len(same_unit)}")
    print(f"L4 return spaced below level min   {len(tight)}")
    for d in dup[:10]:
        print("   L1:", d)
    for d in dangling[:10]:
        print("   L2:", d)
    for d in same_unit[:10]:
        print("   L3:", d)
    for d in tight[:10]:
        print("   L4:", d)

    print("\nnew structures per book:")
    print("  " + "  ".join(f"{b}:{per_book[b]}" for b in books))
    top = sorted(((len(v), k) for k, v in returns.items()), reverse=True)[:6]
    print("\nmost-returned:")
    for n, k in top:
        print(f"   {k:28} {n}  {' '.join(returns[k])}")

    with OUT.open('w', newline='', encoding='utf-8') as fh:
        w = csv.writer(fh)
        w.writerow(['structure', 'introduced_at', 'returns_at', 'return_count'])
        for s in sorted(intro, key=lambda x: intro[x]['seq']):
            w.writerow([s, intro[s]['label'], ' '.join(returns.get(s, [])), len(returns.get(s, []))])
    print(f"\nwrote {OUT.relative_to(HERE.parent)}")

    bad = len(dup) + len(dangling) + len(same_unit) + len(tight)
    if '--check' in sys.argv:
        sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
