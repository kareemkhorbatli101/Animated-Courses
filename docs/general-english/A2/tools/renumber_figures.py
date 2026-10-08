#!/usr/bin/env python3
"""Renumber every figure from the 14-slot layout to the 41-slot one.

Three things have to move together or the build breaks: the `*Figure N.M ·*`
caption in each unit's markdown, the key of each entry in that unit's
`uNN_figures.py`, and the `uNN-M.{png,json,svg}` triple on disk.

The map is not monotonic at both ends -- 2 becomes 4 while 4 becomes 8 -- so a
straight rename clobbers. Every file moves to a temporary name first, then into
place. Verified afterwards by G02 (the set of numbers), G03 (slot to part) and
G28 (numbers ascend in document order).

    python3 tools/renumber_figures.py            # dry run, prints the plan
    python3 tools/renumber_figures.py --apply
"""
from __future__ import annotations
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

# old slot -> new slot. Every existing figure keeps its job and its artwork;
# only the number changes, to make room for the 27 new ones between them.
MAP = {1: 1, 2: 4, 3: 7, 4: 8, 5: 12, 6: 13, 7: 16, 8: 21,
       9: 23, 10: 25, 11: 26, 12: 30, 13: 35, 14: 40}

FIGCAP = re.compile(r'^\*Figure (\d+)\.(\d+) · (.+)\.\*$')


def plan():
    jobs = []
    for book in ('a21', 'a22'):
        d = os.path.join(ROOT, 'units')
        for f in sorted(os.listdir(d)):
            m = re.fullmatch(rf'{book}-u(\d\d)\.md', f)
            if m:
                jobs.append((book, int(m.group(1))))
    return jobs


def renumber_md(path, apply):
    out, n = [], 0
    for line in open(path, encoding='utf-8').read().split('\n'):
        m = FIGCAP.match(line.strip())
        if m and int(m.group(2)) in MAP:
            new = MAP[int(m.group(2))]
            line = f'*Figure {m.group(1)}.{new} · {m.group(3)}.*'
            n += 1
        out.append(line)
    if apply:
        open(path, 'w', encoding='utf-8').write('\n'.join(out))
    return n


def renumber_py(path, apply):
    s = open(path, encoding='utf-8').read()
    # keys look like ` 7: lambda: F....` or `  1: lambda: ...`
    def one(m):
        old = int(m.group(2))
        return f'{m.group(1)}{MAP.get(old, old)}:' if old in MAP else m.group(0)
    s2, n = re.subn(r'(\n\s*)(\d+):(?=\s*lambda)', one, s)
    if apply:
        open(path, 'w', encoding='utf-8').write(s2)
    return n


def renumber_art(book, unit, apply):
    d = os.path.join(ROOT, 'figures', book)
    moved = 0
    if not os.path.isdir(d):
        return 0
    # two passes, via a temporary name, because the map overlaps itself
    for old, new in MAP.items():
        for ext in ('png', 'json', 'svg'):
            src = os.path.join(d, f'u{unit:02d}-{old}.{ext}')
            if os.path.exists(src):
                if apply:
                    os.rename(src, os.path.join(d, f'u{unit:02d}-T{new}.{ext}'))
                moved += 1
    for old, new in MAP.items():
        for ext in ('png', 'json', 'svg'):
            tmp = os.path.join(d, f'u{unit:02d}-T{new}.{ext}')
            if apply and os.path.exists(tmp):
                os.rename(tmp, os.path.join(d, f'u{unit:02d}-{new}.{ext}'))
    return moved


def main(apply):
    tot = {'captions': 0, 'keys': 0, 'files': 0}
    for book, unit in plan():
        md = os.path.join(ROOT, 'units', f'{book}-u{unit:02d}.md')
        py = os.path.join(ROOT, 'content', book, f'u{unit:02d}_figures.py')
        c = renumber_md(md, apply)
        k = renumber_py(py, apply) if os.path.exists(py) else 0
        a = renumber_art(book, unit, apply)
        tot['captions'] += c; tot['keys'] += k; tot['files'] += a
        print(f'{book} u{unit:02d}: {c} captions, {k} dict keys, {a} artefacts')
    print(f"\n{'APPLIED' if apply else 'DRY RUN'}: "
          f"{tot['captions']} captions, {tot['keys']} keys, {tot['files']} files")
    if apply:
        print('now: rebuild figures, then run the suite (G02, G03, G28)')


if __name__ == '__main__':
    main('--apply' in sys.argv)
