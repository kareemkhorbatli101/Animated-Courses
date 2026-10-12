"""Shared header for the A2 unit figure modules.

A2 has one figure per exercise -- thirty-eight -- so the runner checks that
count and the per-part split as well as the findings.
"""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'tools'))
import plates2 as P                                              # noqa: E402
from draw import C                                               # noqa: E402

PARTS = {'W': 3, '1': 6, '2': 6, '3': 4, '4': 4, '5': 4, '6': 3, '7': 3, '8': 5}


def make(unit, book='a21'):
    figs = []

    def fig(n, part, job, caption, builder):
        figs.append(dict(n=n, part=part, job=job, caption=caption, build=builder))
    return figs, fig


def runner(unit, FIGURES, book='a21'):
    import json
    out = os.path.join(os.path.dirname(__file__), '..', '..', 'figures', book)
    os.makedirs(out, exist_ok=True)
    rep = []
    for f in FIGURES:
        cv = f['build']()
        base = os.path.join(out, f"u{unit:02d}-{f['n']:02d}")
        open(base + '.svg', 'w').write(cv.svg())
        cv.png(base + '.png', 1440)
        rep.append(dict(n=f['n'], part=f['part'], job=f['job'], caption=f['caption'],
                        w=cv.w, h=cv.h, warnings=cv.warnings, overlaps=cv.overlaps()))
    bad = [x for x in rep if x['warnings'] or x['overlaps']]
    for x in rep:
        if x['warnings'] or x['overlaps']:
            print(f"FAIL fig {x['n']:2d} {x['part']:>2} {x['job']:<9} {x['caption']}")
            for wn in (x['warnings'] + [str(o) for o in x['overlaps']])[:2]:
                print('        !', wn)
    got = {}
    for x in rep:
        got[x['part']] = got.get(x['part'], 0) + 1
    shape = 'ok' if got == PARTS else f'SHAPE {got}'
    nums = [x['n'] for x in rep]
    order = 'ok' if nums == list(range(1, 39)) else f'NUMBERING {nums[:6]}…'
    print(f"u{unit:02d}: {len(rep)} figures, {len(bad)} with findings, "
          f"parts {shape}, numbering {order}")
    json.dump(rep, open(os.path.join(out, f'u{unit:02d}_report.json'), 'w'), indent=1)
    return bad or shape != 'ok' or order != 'ok'
