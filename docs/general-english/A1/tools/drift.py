"""Drift: re-render every figure and compare it to the one on disk.

This is the check that turns "I fixed it everywhere" from a claim into a
fact. It re-renders every figure of every unit from the current code and
diffs it byte-for-byte against the SVG sitting in figures/. Three outcomes:

    same     the figure is unaffected by whatever just changed
    CHANGED  the code produces something different -- expected only for the
             figures the edit was supposed to touch, and a regression
             anywhere else
    MISSING  a figure in the module has no file, or a file has no module
             entry: an omission

Run it after ANY edit to the engine, not just after an edit to a unit. A
change to people.py reaches every figure in the course that contains a
person, and the only way to know which ones moved is to render them all.
"""
import importlib.util
import os
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(HERE, 'tools'))


def load(book, unit):
    path = os.path.join(HERE, 'content', book, f'u{unit:02d}_figures.py')
    spec = importlib.util.spec_from_file_location(f'drift_u{unit}', path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def main(book, units, write=False):
    changed, same, missing = [], [], []
    for u in units:
        mod = load(book, u)
        figdir = os.path.join(HERE, 'figures', book)
        seen = set()
        for f in mod.FIGURES:
            base = os.path.join(figdir, f"u{u:02d}-{f['n']:02d}")
            seen.add(os.path.basename(base) + '.svg')
            new = f['build']().svg()
            if not os.path.exists(base + '.svg'):
                missing.append((u, f['n'], 'no file on disk'))
                continue
            old = open(base + '.svg').read()
            tag = (u, f['n'], f['caption'])
            (same if old == new else changed).append(tag)
        on_disk = {x for x in os.listdir(figdir)
                   if x.startswith(f'u{u:02d}-') and x.endswith('.svg')}
        for orphan in sorted(on_disk - seen):
            missing.append((u, orphan, 'file with no entry in the module'))

    for u, n, cap in changed:
        print(f'  CHANGED  u{u:02d} fig {n:2d}  {cap}')
    for u, n, why in missing:
        print(f'  MISSING  u{u:02d} {n}  {why}')
    print(f'\n{len(same)} unchanged, {len(changed)} changed, {len(missing)} missing')
    if write and changed:
        for u in units:
            mod = load(book, u)
            mod.build(os.path.join(HERE, 'figures', book))
        print(f're-rendered {len(changed)} changed figures to disk')
    return 1 if missing else 0


if __name__ == '__main__':
    w = '--write' in sys.argv
    us = [int(a) for a in sys.argv[1:] if a.isdigit()] or [1, 2]
    sys.exit(main('a11', us, w))
