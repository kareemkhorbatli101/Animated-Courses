"""A2 band membership, as PROVENANCE.md defines it."""
import re, functools, os

_HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_WL = os.path.join(_HERE, 'spec', 'wordlists')

@functools.lru_cache(1)
def a2() -> set[str]:
    return set(open(os.path.join(_WL, 'a2-and-below.txt')).read().split())

@functools.lru_cache(1)
def b1plus() -> set[str]:
    return set(open(os.path.join(_WL, 'b1-and-above.txt')).read().split())

@functools.lru_cache(1)
def freq2000() -> set[str]:
    return set(open(os.path.join(_WL, 'high-frequency-2000.txt')).read().split())

# 'n' and a bare 'd' are unsound: they turn `bin` into `bi` and `and` into `an`.
SUFFIXES = ['s', 'es', 'ed', 'ing', 'er', 'est', 'ly']

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

def in_a2(w: str) -> bool:
    """An inflection of an A2 headword is A2. The CEFR-J list is lemmatised, so
    `bins` is absent while `bin` is present; the frequency list is not, so both
    pools are tested against every base form."""
    w = w.lower()
    pool, hf = a2(), freq2000()
    return any(b in pool or b in hf for b in bases(w))

def is_b1plus(w: str) -> bool:
    w = w.lower()
    if in_a2(w):
        return False
    return any(b in b1plus() for b in bases(w))

TOKEN = re.compile(r"[A-Za-z][A-Za-z'’-]*")

def tokens(text: str) -> list[str]:
    return [t.replace('’', "'") for t in TOKEN.findall(text)]
