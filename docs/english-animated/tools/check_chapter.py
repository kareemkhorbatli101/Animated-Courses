#!/usr/bin/env python3
"""Gate runner for a written English Animated unit.

    python3 -I tools/check_chapter.py chapters/b11-unit01.md [--check]

Checks a chapter against the plan's own specifications:
  F1  Figure count matches 07-visual-system.md §4 for the level.
  F2  Figure type distribution matches 07 §4 exactly.
  F3  Every figure id is unique and well formed.
  L1  Every active item for that unit in data/lexis-source.tsv appears in the
      chapter text.
  L2  The chapter declares the right number of active items.
  P1  All twelve parts plus Part 0 are present, in order.
  P2  Each of the three lines is tagged on at least three parts.
  R1  No rubric sentence is reused inside the unit.
"""
import re, sys, pathlib, unicodedata
from collections import Counter

HERE = pathlib.Path(__file__).resolve().parent
LEX = HERE.parent / 'data' / 'lexis-source.tsv'

# from 07-visual-system.md §4
DIST = {
 'A1': {'V1':1,'V2':2,'V3':2,'V4':2,'V5':1,'V6':0,'V7':1,'V8':1,'V9':2,'V10':1,'V11':1,'V12':1},
 'A2': {'V1':1,'V2':1,'V3':2,'V4':2,'V5':1,'V6':1,'V7':1,'V8':1,'V9':2,'V10':1,'V11':0,'V12':1},
 'B1': {'V1':1,'V2':1,'V3':0,'V4':1,'V5':2,'V6':1,'V7':1,'V8':1,'V9':1,'V10':1,'V11':1,'V12':1},
 'B2': {'V1':1,'V2':1,'V3':0,'V4':1,'V5':2,'V6':1,'V7':1,'V8':0,'V9':1,'V10':1,'V11':0,'V12':1},
}
TARGET_ITEMS = {'A1.1': 35, 'A1.2': 35, 'A2.1': 40, 'A2.2': 40,
                'B1.1': 45, 'B1.2': 45, 'B1.3': 45,
                'B2.1': 50, 'B2.2': 50, 'B2.3': 50}


def norm(s):
    s = unicodedata.normalize('NFKD', s).lower()
    s = s.replace('’', "'").replace('…', '...').replace('—', ' ')
    return re.sub(r'\s+', ' ', s)


def lexis_for(book, unit):
    out = []
    for line in LEX.read_text(encoding='utf-8').splitlines():
        if line.startswith('#') or not line.strip():
            continue
        b, u, _s, items = line.split('\t')
        if b == book and int(u) == unit:
            for raw in items.split(';'):
                raw = raw.strip()
                out.append(raw.split('|', 1)[1].strip() if '|' in raw else raw)
    return out


def main():
    path = pathlib.Path(sys.argv[1])
    doc = path.read_text(encoding='utf-8')
    m = re.search(r'^# ((?:A|B|C)\d\.\d) · Unit (\d+)', doc, re.M)
    book, unit = m.group(1), int(m.group(2))
    level = book.split('.')[0]
    bad = []

    # --- figures ---
    ids = re.findall(r'fig_[a-z0-9]+_u\d+_p\d+_v(\d+)[a-z]?', doc)
    full = re.findall(r'(fig_[a-z0-9]+_u\d+_p\d+_v\d+[a-z]?)', doc)
    got = Counter('V' + str(int(i)) for i in ids)
    want = DIST[level]
    if sum(got.values()) != sum(want.values()):
        bad.append(f"F1 figures: {sum(got.values())}, spec says {sum(want.values())}")
    for t in sorted(want, key=lambda x: int(x[1:])):
        if got.get(t, 0) != want[t]:
            bad.append(f"F2 {t}: {got.get(t,0)} in chapter, {want[t]} in spec")
    if len(set(full)) != len(full):
        bad.append(f"F3 duplicate figure ids: {[k for k,v in Counter(full).items() if v>1]}")

    # --- lexis ---
    items = lexis_for(book, unit)
    if len(items) != TARGET_ITEMS.get(book, len(items)):
        bad.append(f"L2 {len(items)} items in database, target {TARGET_ITEMS.get(book)}")
    body = norm(doc)
    missing = []
    for it in items:
        probe = norm(it).rstrip('?.!').strip()
        probe = re.sub(r'^(a|an|the) ', '', probe)
        head = probe.split('...')[0].strip()
        if head and head not in body:
            missing.append(it)
    if missing:
        bad.append(f"L1 {len(missing)} active items never appear: {missing[:12]}")

    # --- parts ---
    parts = [int(x) for x in re.findall(r'^## Part (\d+) ·', doc, re.M)]
    if parts != list(range(0, 13)):
        bad.append(f"P1 parts present: {parts}")
    lines = Counter(re.findall(r'◆ \*\*([ABC]) ·', doc))
    for L in 'ABC':
        if lines[L] < 3:
            bad.append(f"P2 line {L} tagged on only {lines[L]} parts")

    # --- rubric reuse ---
    rubrics = [norm(x) for x in re.findall(r'^\*\*([A-Z][^*]{12,90})\.\*\*', doc, re.M)]
    rep = [k for k, v in Counter(rubrics).items() if v > 1]
    if rep:
        bad.append(f"R1 repeated rubric: {rep[:4]}")

    print(f"{path.name}  —  {book} Unit {unit} ({level})")
    print(f"  figures          {sum(got.values())} / {sum(want.values())}   "
          + " ".join(f"{t}:{got.get(t,0)}" for t in sorted(want, key=lambda x: int(x[1:])) if want[t] or got.get(t)))
    print(f"  active items     {len(items)} in database, {len(items)-len(missing)} found in text")
    print(f"  parts            {len(parts)}")
    print(f"  line tags        A:{lines['A']} B:{lines['B']} C:{lines['C']}")
    print(f"  words            {len(re.findall(r'[A-Za-z][A-Za-z-]*', doc))}")
    if bad:
        print("  FAIL")
        for b in bad:
            print("    " + b)
    else:
        print("  PASS")
    if '--check' in sys.argv:
        sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
