"""One mutation per check: a deliberate break that check must notice.

A check that cannot fail is worse than no check, because it reports green.
Every entry below edits a known-good unit in a way that should turn exactly
one check red. If the check stays green, the check is inert and the number
it contributes to every report is a lie.

Each mutation is (check_id, target, function). `target` says which file to
damage: 'unit', 'key', 'lex' (the unit's wordlist), or 'fig' (the figure
module). The function takes (text, unit) and returns the broken text, or
None if it cannot apply to that unit.

The unit argument matters: a mutation that hardcodes unit 5's neighbour
goes inert the moment the suite is run on unit 8, and an inert mutation
looks exactly like an inert check.
"""
import re


def _first(t, pat, rep):
    new, n = re.subn(pat, rep, t, count=1, flags=re.M)
    return new if n else None


M = []


def mut(check, target):
    def deco(fn):
        M.append((check, target, fn))
        return fn
    return deco


# ---------------------------------------------------------------- gate
@mut('G1', 'unit')
def _(t, u=5): return _first(t, r'^\*\*1C\*\*', '**1Z**')


@mut('G2', 'unit')
def _(t, u=5): return t.replace('**Part 3 · Listening**', '**Part 3 · Hearing**', 1)


@mut('G3', 'unit')
def _(t, u=5): return _first(t, r'^\*\*Unit (\d+): (.+)\*\*$', r'Unit \1: \2')


@mut('G4', 'unit')
def _(t, u=5): return _first(t, r'^\*In this unit you.+\*$', 'This unit is about things.')


@mut('G5', 'unit')
def _(t, u=5): return t + '\n\n' + ('filler word ' * 1800)


@mut('G6', 'unit')
def _(t, u=5):
    # one long rubric does not move a mean taken over four hundred
    # sentences; the mutation has to be proportionate to the measure
    # thirteen words a sentence, under the fourteen-word ceiling so that G7
    # does not fire instead, repeated until the mean has to move
    return t + '\n\n' + ('A sentence of just under the longest length that is '
                          'allowed. ' * 500)


@mut('G7', 'unit')
def _(t, u=5): return t.replace('\n0. ', '\n0. ' + ' '.join(['word'] * 16) + ' ', 1)


@mut('G8', 'unit')
def _(t, u=5):
    return t + '\n\n' + ('Extraordinary complication necessitates particularly '
                          'sophisticated vocabulary. ' * 160)


@mut('G9', 'unit')
def _(t, u=5): return re.sub(r'^(\d\. )', r'\1' + ' '.join(['x'] * 8) + ' ', t,
                        count=400, flags=re.M)


@mut('G10', 'unit')
def _(t, u=5): return _first(t, r'^(1\. )', r'\1' + ' '.join(['w'] * 14) + ' ')


@mut('G11', 'unit')
def _(t, u=5): return _first(t, r'\*\(example\)\*', '')


@mut('G12', 'unit')
def _(t, u=5): return _first(t, r'^(\*\*1C\*\* )', r'\1' + ' '.join(['w'] * 13) + ' ')


@mut('G13', 'unit')
def _(t, u=5):
    b = re.search(r'^\*\*1C\*\*.*?(?=^\*\*\w)', t, re.M | re.S)
    if not b:
        return None
    body = b.group(0)
    kept = re.sub(r'^\d\. .*\n', '', body, count=3, flags=re.M)
    return t.replace(body, kept, 1)


@mut('G14', 'unit')
def _(t, u=5):
    b = re.search(r'^\*\*1C\*\*.*?(?=^\*\*\w)', t, re.M | re.S)
    if not b:
        return None
    extra = ''.join(f'{i}. more\n' for i in range(5, 14))
    return t.replace(b.group(0), b.group(0).rstrip() + '\n' + extra + '\n', 1)


@mut('G15', 'unit')
def _(t, u=5): return t.replace('One option is not needed.', 'All options are used.', 1)


@mut('G16', 'unit')
def _(t, u=5): return _first(t, r'\(c\) ', '(c) x (d) ')


@mut('G17', 'unit')
def _(t, u=5): return _first(t, r'^\*Figure (\d+)\.(\d+) · (.+)\.\*$', '')


@mut('G19', 'unit')
def _(t, u=5): return _first(t, r'^\*Figure (\d+)\.1 · (.+)\.\*$',
                        r'*Figure \1.1 · ' + ' '.join(['word'] * 8) + r'.*')


@mut('G20', 'unit')
def _(t, u=5):
    # every mention outside the captions must go, or the figure is still
    # referenced by some other exercise
    return re.sub(r'Look at Figure (\d+)\.(\d+)', r'Look at the picture', t)


@mut('G21', 'unit')
def _(t, u=5):
    """Move every Part 6 figure out, leaving that part with none."""
    return re.sub(r'^\*Figure (\d+)\.(1[78]) · (.+)\.\*$', '', t, flags=re.M) or None


# ---------------------------------------------------------------- cross
@mut('X1a', 'lex')
def _(t, u=5):
    # must collide with the unit cross.py is comparing against, which is the
    # one immediately before -- not with Unit 1
    import pathlib as _p
    prev = (_p.Path(__file__).parent.parent / 'spec' / 'wordlists'
            / f'u{u-1:02d}.txt')
    return t.strip() + ' ' + prev.read_text().split()[0] + '\n'


@mut('X1b', 'unit')
def _(t, u=5):
    # erase EVERY word the previous unit taught, so recycling falls to zero
    # whichever unit the suite is pointed at. The first version listed seven
    # words by hand and was live on unit 5 and dead everywhere else.
    import pathlib as _p
    prev = (_p.Path(__file__).parent.parent / 'spec' / 'wordlists'
            / f'u{u-1:02d}.txt').read_text().split()
    for w in prev:
        t = re.sub(r'\b' + re.escape(w) + r'\b', 'zzz', t, flags=re.I)
    return t


@mut('X3c', 'unit')
def _(t, u=5):
    # a verbatim item from the unit before: X3c compares the normalised
    # content items of the two units in the pair
    # a verbatim item from the unit before, blanks and all: the normaliser
    # strips blanks, so an item retyped without one does not collide
    import pathlib as _p, re as _re
    prev = (_p.Path(__file__).parent.parent / 'units'
            / f'a11-u{u-1:02d}.md').read_text()
    for ln in _re.findall(r'^\d\. .+$', prev, _re.M):
        if len([w for w in _re.findall(r"[A-Za-z']{2,}", ln)]) >= 4:
            return _first(t, r'^1\. .+$', '1. ' + ln[3:])
    return None


@mut('X5c', 'unit')
def _(t, u=5):
    # strip most of the items, not a fixed sixty: a fixed count is a
    # different proportion of every unit
    n = len(re.findall(r'^\d\. ', t, re.M))
    cut = re.sub(r'^\d\. .*\n', '', t, count=int(n * 0.85), flags=re.M)
    return cut if cut != t else None


# ---------------------------------------------------------------- lexis
@mut('LEX', 'unit')
def _(t, u=5): return _first(t, r'^0\. ', '0. The perpendicular aardvark. ')


# ---------------------------------------------------------------- keys
@mut('K1', 'key')
def _(t, u=5): return _first(t, r'^\*\*8C\*\*', '**ZZ**')


@mut('K2', 'key')
def _(t, u=5): return _first(t, r'· 1 ', '· 1 x · 9 ')


@mut('K3', 'key')
def _(t, u=5): return _first(t, r'^\*\*W2\*\* 0 \S+', '**W2** 0 zzzzz')


@mut('K5', 'key')
def _(t, u=5):
    # must break the MULTIPLE-CHOICE key, not the first lettered answer in
    # the file -- that one belongs to a matching table and trips K4 instead
    b = re.search(r'^\*\*5C\*\*.*?(?=^\*\*)', t, re.M | re.S)
    if not b:
        return None
    return t.replace(b.group(0),
                     re.sub(r'·\s*1\s+[abc]\b', '· 1 z', b.group(0), count=1), 1)


@mut('K7', 'unit')
def _(t, u=5): return _first(t, r'^\*Figure (\d+)\.2 · (.+)\.\*$',
                        r'*Figure \1.2 · A different caption.*')
