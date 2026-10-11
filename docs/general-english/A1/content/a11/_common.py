"""Shared header for the unit figure modules."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'tools'))
import plates as P                                                   # noqa: E402
from draw import C                                                   # noqa: E402


def make(unit, book='a11'):
    figs = []

    def fig(n, part, job, caption, builder):
        figs.append(dict(n=n, part=part, job=job, caption=caption, build=builder))
    return figs, fig


def runner(unit, FIGURES, book='a11'):
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
        flag = 'FAIL' if (x['warnings'] or x['overlaps']) else 'ok  '
        print(f"{flag} fig {x['n']:2d} {x['part']:>2} {x['job']:<9} {x['caption']}")
        for wn in (x['warnings'] + [str(o) for o in x['overlaps']])[:2]:
            print('        !', wn)
    print(f"u{unit:02d}: {len(rep)} figures, {len(bad)} with findings")
    json.dump(rep, open(os.path.join(out, f'u{unit:02d}_report.json'), 'w'), indent=1)
    return bad
