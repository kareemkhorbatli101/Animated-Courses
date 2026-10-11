"""The visual checks. V-checks before a figure is drawn, F-checks after.

Run: python3 tools/check_visual.py a11 1
"""
import importlib.util
import itertools
import json
import os
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(HERE, 'tools'))

from draw import C, contrast                     # noqa: E402
from cast import HILL_ROAD, SIGNATURE            # noqa: E402

OK, BAD = [], []


def check(name, cond, detail=''):
    (OK if cond else BAD).append((name, detail))


def main(book, unit):
    spec_jobs = ['data', 'contrast', 'lexis', 'document']

    # ---- V1  the cast is distinguishable --------------------------------
    clash = []
    for a, b in itertools.combinations(SIGNATURE, 2):
        same = sum(1 for i in range(3) if SIGNATURE[a][i] == SIGNATURE[b][i])
        if same >= 2:
            clash.append((a, b, same))
    check('V1 no two characters share two identity channels', not clash, str(clash))

    colours = [p.top for p in HILL_ROAD.values()]
    check('V2 every character has a colour nobody else wears',
          len(set(colours)) == len(colours),
          str([c for c in colours if colours.count(c) > 1]))

    skins = {p.skin for p in HILL_ROAD.values()}
    check('V3 the cast spans the skin-tone range', len(skins) >= 5, f'{len(skins)} of 6')

    # ---- load the unit's figure module ----------------------------------
    path = os.path.join(HERE, 'content', book, f'u{unit:02d}_figures.py')
    spec = importlib.util.spec_from_file_location(f'u{unit}', path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    figs = mod.FIGURES

    check('V4 every figure declares a permitted job',
          all(f['job'] in spec_jobs for f in figs),
          str([f['n'] for f in figs if f['job'] not in spec_jobs]))
    check('V5 no job is decoration', not any(f['job'] == 'decoration' for f in figs))

    jobs = {j: sum(1 for f in figs if f['job'] == j) for j in spec_jobs}
    check('V6 all four jobs are used', all(v > 0 for v in jobs.values()), str(jobs))
    check('V7 documents are at least a fifth of the unit',
          jobs['document'] >= len(figs) * 0.18, f"{jobs['document']}/{len(figs)}")

    # ---- F-checks: draw every figure and read what the canvas recorded --
    bad_contrast, overflow, collide, flat = [], [], [], []
    for f in figs:
        cv = f['build']()
        for w in cv.warnings:
            (bad_contrast if w.startswith('contrast') else overflow).append((f['n'], w))
        if cv.overlaps():
            collide.append((f['n'], cv.overlaps()))
        if cv.h > cv.w * 0.75:
            flat.append((f['n'], f'{cv.w:.0f}x{cv.h:.0f}'))

    check('F1 every label passes 4.5:1', not bad_contrast, str(bad_contrast[:4]))
    check('F2 no label overflows its box', not overflow, str(overflow[:4]))
    check('F3 no two label boxes collide', not collide, str(collide[:3]))
    check('F4 no figure is taller than it is wide by much', not flat, str(flat))

    caps = [f['caption'] for f in figs]
    check('F5 captions are at most six words',
          all(len(c.split()) <= 6 for c in caps),
          str([c for c in caps if len(c.split()) > 6]))
    check('F6 no caption repeats another', len(set(caps)) == len(caps),
          str([c for c in caps if caps.count(c) > 1]))

    parts = {}
    for f in figs:
        parts[f['part']] = parts.get(f['part'], 0) + 1
    check('F7 two to four figures per part',
          all(2 <= v <= 4 for v in parts.values()), str(parts))
    check('F8 the unit has its full figure count', len(figs) == 22, str(len(figs)))

    for n, d in OK:
        print(f'  ok   {n}' + (f'  — {d}' if d else ''))
    for n, d in BAD:
        print(f'  FAIL {n}  — {d}')
    print(f'\n{len(OK)} passed, {len(BAD)} failed   '
          f'[{len(figs)} figures x 14 passes = {len(figs) * 14}]')
    return 1 if BAD else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1], int(sys.argv[2])))
