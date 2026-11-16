# -*- coding: utf-8 -*-
"""The word ledger the Foundation books are written from.

Section 14 of the plan is explicit about why these two books are written
last: "scan the finished Volume 1 for every word a Foundation leaver will
not know, and teach exactly those." This is that scan.

A Foundation leaver is modelled as someone who knows the first thousand
word families and nothing else of the series. Volume 1 then assumes a
great deal more, and most of it Volume 1 never stops to teach: its own
four hundred head words are taught, and everything else is simply used.
Those untaught, non-first-thousand types are the gap, and the gap is what
Foundation 2 teaches.

    python3 ledger.py            # the gap into Volume 1, by frequency
    python3 ledger.py --f1       # the everyday layer Foundation 1 teaches
    python3 ledger.py --taught   # every head word already spoken for
"""
import importlib
import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

_PP = os.path.join(os.path.dirname(HERE), 'toefl', 'profile.py')
_spec = importlib.util.spec_from_file_location('toefl_profile', _PP)
P = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(P)
# profile.py puts the TOEFL directory at the front of sys.path when it is
# imported, which makes `content.uNN` resolve to the TOEFL series' units
# instead of this one's. Put this directory back in front of it.
sys.path.insert(0, HERE)

WORD = re.compile(r"[A-Za-z][A-Za-z'-]*")

# Names the capitalisation rule does not catch, because the series uses
# them at the start of a sentence as often as inside one. A town in a
# reading passage is not a word to teach.
BLOCK = {'brackwell', 'ashfield', 'ashbury', 'dunmorrow', 'hallowfield',
         'marchfield', 'greenway', 'fenwick', 'oduya', 'mariam',
         'hillcrest', 'brantwell', 'carrowmoor', 'ashwell', 'kessock',
         'larchmont', 'netherby', 'strathmore', 'tarnmouth', 'eastvale'}

# Endings stripped before a type is looked up, so that "measured" and
# "measures" are not counted as two unknown words when "measure" is known.
SUFF = ('ingly', 'edly', 'ies', 'ied', 'ing', 'ers', 'est', 'ely', 'ed',
        'es', 'er', 'ly', 's')


def stem(w):
    """Crude but honest: try the word, then the word minus an ending."""
    out = [w]
    for suf in SUFF:
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            base = w[:-len(suf)]
            out.append(base)
            out.append(base + 'e')
            if len(base) > 2 and base[-1] == base[-2]:
                out.append(base[:-1])
            if base.endswith('i'):
                out.append(base[:-1] + 'y')
    return out


def expand(words):
    """A taught word covers its own family.

    known() stems the word it is asked about, which catches a taught
    "farm" against a passage's "farms". It does not catch the other
    direction: the ledger keeps whichever form of a family is commonest
    in Volume 1, and that is often the plural, so a taught "eggs" has to
    cover a passage's "egg" too.
    """
    out = set()
    for w in words:
        w = w.lower()
        out.add(w)
        out.update(stem(w))
        for suf in ('s', 'es', 'ed', 'ing', 'er', 'ers'):
            out.add(w + suf)
    return out


def known(w, R, extra, k=1000):
    """Would a reader who knows the first k ranks plus `extra` know this?"""
    for f in stem(w):
        if f in extra:
            return True
        r = R.get(f)
        if r is not None and r <= k:
            return True
    return False


def _unit(n):
    try:
        m = importlib.import_module('content.u%02d' % n)
    except ModuleNotFoundError:
        return None
    importlib.reload(m)
    return m


def taught(rng=range(1, 81)):
    """Every head word any book in the series already teaches."""
    out = {}
    for n in rng:
        m = _unit(n)
        if m is None:
            continue
        for c in m.UNIT['cycles']:
            for w, _ in c['vocab']:
                out.setdefault(w.lower(), n)
    return out


def volume_text(rng):
    """Everything a student of these units actually reads."""
    out = []
    for n in rng:
        m = _unit(n)
        if m is None:
            continue
        for c in m.UNIT['cycles']:
            for r in c['read']:
                out.extend(r['paras'])
    return out


def gap(rng=range(1, 11), k=1000):
    """The types in those units that a k-word reader does not know and
    that no book in the series teaches, commonest first.

    Proper nouns are not vocabulary. A place or a person's name carries
    no meaning to teach and no transfer to the next passage, so a type
    that is capitalised almost everywhere it appears is dropped: the
    first allocation otherwise sent "india" to a Foundation 1 cycle as
    one of its fourteen words to learn.
    """
    R = P.ranks()
    spoken = expand(set(taught()))
    seen = {}
    caps = {}
    for para in volume_text(rng):
        # a word after a full stop or at the start is capitalised by
        # grammar rather than by being a name, so it does not count
        starts = set()
        for m in re.finditer(r'(?:^|[.!?’"]\s+|\s[—-]\s)([A-Za-z])',
                             para):
            starts.add(m.start(1))
        for m in WORD.finditer(para):
            w = m.group(0).lower()
            seen[w] = seen.get(w, 0) + 1
            if m.group(0)[0].isupper() and m.start() not in starts:
                caps[w] = caps.get(w, 0) + 1
    out = []
    for w, n in seen.items():
        if len(w) < 3 or known(w, R, spoken, k):
            continue
        if caps.get(w, 0) >= 0.6 * n or w in BLOCK:
            continue
        if any(f in spoken for f in stem(w)):
            continue
        out.append((n, R.get(w, 99999), w))
    out.sort(key=lambda t: (-t[0], t[1], t[2]))
    # One entry a stem family. The first allocation gave a Foundation 1
    # cycle "farm", "farms", "farmer" and "farming" as four of its
    # fourteen words to learn, which is three wasted slots and one
    # insulting lesson. known() already counts a reader who has the
    # commonest form as having the rest, so the rest are not the gap.
    fam, keep = {}, []
    for n, r, w in out:
        hit = next((f for f in sorted(stem(w), key=len) if f in fam), None)
        if hit is None:
            for f in stem(w):
                fam.setdefault(f, w)
            fam[w] = w
            keep.append((n, r, w))
    return keep


def main(argv):
    if '--taught' in argv:
        t = taught()
        print('%d head words already taught across the series' % len(t))
        return 0
    k = 1000
    rows = gap(k=k)
    print('THE GAP INTO VOLUME 1')
    print('types a %d-word reader meets in Volume 1 that no book teaches: %d'
          % (k, len(rows)))
    print()
    print('  uses  rank   word')
    for n, r, w in rows[:60]:
        print('  %4d  %5s  %s' % (n, r if r < 99999 else '-', w))
    if len(rows) > 60:
        print('  ... and %d more' % (len(rows) - 60))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
