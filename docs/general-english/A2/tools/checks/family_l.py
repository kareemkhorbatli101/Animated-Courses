"""L · Level — 1 check.

One check, and it exists because the three level floors in family E are the
only place in this project where a check's VALUE carries the whole argument.
A ceiling is self-evidently doing something: if it is set wrong the build goes
red. A floor set too low is invisible -- it passes everything, including the
text it was written to reject, and nothing ever says so.

So L01 measures the floors against the twenty A2 units that already exist and
asserts that every one of them fails all three. That is the only evidence that
a B1 unit clearing them is at B1 rather than at A2 with a wider word list.

It is scoped to the book but reads the OTHER level's files, which nothing else
in the suite does. That is the point: the floors are a statement about the step
between two levels and cannot be validated inside one of them.
"""
from __future__ import annotations
import os, re, sys
from . import check, ok, fail, expect
import model as M
import lexis as L
import level as LV

FLOORS = ('min_b1_tier_share', 'mean_sentence_words_min', 'fk_grade_min')
# The lower level's measurements depend only on that level's units and word
# lists, which a mutation of THIS level cannot touch. Parsing twenty units per
# call would make the mutation suite re-read them 223 times.
_CAL: dict = {}
# Which level's units a level's floors are calibrated against: the one below.
BELOW = {'B1': 'A2'}


def _syl(w):
    w = w.lower()
    n = len(re.findall(r'[aeiouy]+', w))
    return max(1, n - (1 if w.endswith('e') and n > 1 else 0))


def _measure(u, a2band, hf, band):
    ss = u.sentences
    words = [w for s in ss for w in L.tokens(s)]
    if not ss or not words:
        return None
    def a2_reachable(w):
        return any(b in a2band or b in hf for b in L.bases(w.lower()))
    def in_band(w):
        return any(b in band or b in hf for b in L.bases(w.lower()))
    tier = [w for w in words if in_band(w) and not a2_reachable(w)]
    return {
        'min_b1_tier_share': len(tier) / len(words),
        'mean_sentence_words_min': sum(len(s.split()) for s in ss) / len(ss),
        'fk_grade_min': (0.39 * len(words) / len(ss)
                         + 11.8 * sum(_syl(w) for w in words) / len(words) - 15.59),
    }


@check('L01', 'golden.language floors',
       'Every floor is calibrated: every unit of the level below fails all of them',
       scope='book')
def l01(units, ctx):
    lim = {k: ctx.spec['language'].get(k) for k in FLOORS}
    if not any(v is not None for v in lim.values()):
        return ok('no floors declared at this level')
    missing = [k for k, v in lim.items() if v is None]
    if missing:
        return fail(f'a level with floors must declare all three; missing {missing}')
    lv = LV.level(ctx.book)
    below = BELOW.get(lv)
    if below is None:
        return fail(f'no lower level recorded for {lv}')
    root = LV.level_root(ctx.root, below)
    wl = os.path.join(root, 'spec', 'wordlists')
    try:
        a2band = set(open(os.path.join(wl, 'a2-and-below.txt')).read().split())
        band = L.band()
        hf = L.freq2000()
    except OSError as e:
        return fail(f'cannot read the {below} word lists: {e}')
    paths = sorted(os.path.join(root, 'units', f)
                   for f in os.listdir(os.path.join(root, 'units'))
                   if f.endswith('.md'))
    if not paths:
        return fail(f'no {below} units to calibrate against at {root}')
    passed, worst = [], {k: None for k in FLOORS}
    for p in paths:
        if p not in _CAL:
            _CAL[p] = _measure(M.parse(p), a2band, hf, band)
        got = _CAL[p]
        if got is None:
            continue
        clears = [k for k in FLOORS if got[k] >= lim[k]]
        for k in FLOORS:
            if worst[k] is None or got[k] > worst[k]:
                worst[k] = got[k]
        if clears:
            passed.append(f'{os.path.basename(p)} clears {clears}')
    margins = ', '.join(
        f'{k}: floor {lim[k]}, {below} max {worst[k]:.4f}' for k in FLOORS)
    if passed:
        return fail(f'{len(passed)} of {len(paths)} {below} units clear a '
                    f'floor, so it is not a floor -- {passed[:3]}; {margins}')
    return ok(f'all {len(paths)} {below} units fail all three ({margins})')
