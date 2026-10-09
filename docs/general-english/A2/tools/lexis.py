"""Band membership for the level this toolchain was run from.

The band is not a constant. At A2 it is CEFR-J A1+A2 (2,356 headwords) and
everything from B1 up must be glossed; at B1 it is A1+A2+B1 (4,530, a measured
1.92x) and only B2 and above must be glossed. Both pairs of lists are derived
from the same CEFR-J Vocabulary Profile 1.5 -- see each level's
spec/wordlists/PROVENANCE.md -- and the level is read off the root directory,
exactly as every other path in this toolchain is.

The functions are named for the ROLE, not the level: `in_band` and
`above_band`. The old names `in_a2` and `is_b1plus` were accurate while only
one level existed and would have been actively misleading the moment a second
one did.
"""
import re, functools, os

_HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_WL = os.path.join(_HERE, 'spec', 'wordlists')

BAND = {'A2': 'a2-and-below.txt', 'B1': 'b1-and-below.txt'}
ABOVE = {'A2': 'b1-and-above.txt', 'B1': 'b2-and-above.txt'}


def _level() -> str:
    lv = os.path.basename(_HERE)
    if lv not in BAND:
        raise KeyError(f'{_HERE}: no word lists defined for level {lv!r}')
    return lv

@functools.lru_cache(1)
def band() -> set[str]:
    return set(open(os.path.join(_WL, BAND[_level()])).read().split())

@functools.lru_cache(1)
def above_band_list() -> set[str]:
    return set(open(os.path.join(_WL, ABOVE[_level()])).read().split())

@functools.lru_cache(1)
def freq2000() -> set[str]:
    return set(open(os.path.join(_WL, 'high-frequency-2000.txt')).read().split())

# 'n' and a bare 'd' are unsound: they turn `bin` into `bi` and `and` into `an`.
SUFFIXES = ['s', 'es', 'ed', 'ing', 'er', 'est', 'ly']

# Stripping is ONE level deep on purpose. It costs us the doubly-derived
# agentive plurals -- `designers` and `builders` read as B1+ although `design`
# and `build` are A2, because only `designer`/`builder` are reachable and
# neither headword is on the lemmatised list. Tested on 2026-10-07: a
# transitive two-level closure recovers those two (and `arguers`) but leaks
# `tenses` -> `tens` -> `ten` and `shutters` -> `shutter` -> `shut`, which are
# not the same words at all, and the leak direction is the dangerous one -- it
# silently whitelists off-band vocabulary. The wordlists are sourced, so
# adding plurals to them is not available either (see PROVENANCE.md). Write
# around it instead: `the people who designed it` is in fact the lighter read.

def bases(w: str):
    yield w
    for suf in SUFFIXES:
        if w.endswith(suf) and len(w) > len(suf) + 1:
            stem = w[:-len(suf)]
            yield stem
            yield stem + 'e'
            if len(stem) > 2 and stem[-1] == stem[-2]:
                yield stem[:-1]
            if stem.endswith('i'):
                yield stem[:-1] + 'y'

def in_band(w: str) -> bool:
    """An inflection of an in-band headword is in band. The CEFR-J list is
    lemmatised, so `bins` is absent while `bin` is present; the frequency list
    is not, so both pools are tested against every base form."""
    w = w.lower()
    pool, hf = band(), freq2000()
    return any(b in pool or b in hf for b in bases(w))

def above_band(w: str) -> bool:
    w = w.lower()
    if in_band(w):
        return False
    return any(b in above_band_list() for b in bases(w))

TOKEN = re.compile(r"[A-Za-z][A-Za-z'’-]*")

def tokens(text: str) -> list[str]:
    return [t.replace('’', "'") for t in TOKEN.findall(text)]
