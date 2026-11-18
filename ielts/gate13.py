# -*- coding: utf-8 -*-
"""GATE 13: a syllabus, not a sequence of units.

Three findings turned into rules.

One, recycling. The audit sampled 400 target words in Volume 3 and found 50
of them - 12.5% - anywhere else in the volume. A word met once and never
again is a word taught to nobody, and this is the gap between a wordlist
and a vocabulary syllabus. Rule 1 asks for half.

Two, the reference. Every grammar slot in the rebuilt books points at a
back-matter entry with the full paradigm, the errors learners at that band
make, and more practice. A pointer at an entry that does not exist is worse
than no pointer, so rule 3 checks the target.

Three, subject progression. Measuring all 80 units found that Volume 1 and
Volume 3 run the same ten topic fields in the same order - education, work,
health, environment, technology, travel, cities, food, media, sport - with
Volume 2's much better list sandwiched between them. Rules 5a-5c are the
stated progression rule the benchmark asked for, and they are what makes
Volume 3's two new units obligatory rather than optional.

Usage:  python3 gate13.py          every book
        python3 gate13.py 3        one book
        python3 gate13.py 3 --detail
"""
import importlib
import re
import sys

import _base                                            # noqa: F401
import pedagogy as PED
import unitmap as UN

RECYCLE_FLOOR = 50.0       # per cent of a unit's target words seen again
MAX_SHARED_SUBS = 4        # cycle sub-topics two books may have in common
MIN_OWN_FIELDS = 2         # fields a book must own outright in the series
REFS = 'content.refs'      # where the three back-matter references live

WORD = re.compile(r"[A-Za-z][A-Za-z'-]+")


# Which books this gate is BINDING for. A gate written before its content
# must not turn the whole suite red for eight books at once: that would hide
# every real regression for the length of the rebuild. So the gate reports
# its count for every book and fails the build only for the books that have
# opted in. Volume 3 joins at phase 26, Volume 4 at 31, and so on, each one
# as its rebuild lands.
BINDING = set()
# Phase 19 builds ONE unit completely before the other ninety-five
# copy it, so the gate has to be bindable at unit granularity too.
# A unit in BINDING_UNITS fails the build on its own account even
# while its book is still open.
BINDING_UNITS = {21, 22, 23, 24, 25, 26, 27, 28}


def load(name):
    try:
        m = importlib.import_module(name)
    except ModuleNotFoundError:
        return None
    importlib.reload(m)
    return m


def unit(n):
    m = load('content.u%02d' % n)
    return m.UNIT if m else None


def prose_words(U):
    """Every word a unit prints, lowercased, as a set."""
    return set(w.lower() for w in WORD.findall(PED._flat(U)
               if hasattr(PED, '_flat') else _flat(U)))


def _flat(o):
    if isinstance(o, str):
        return o
    if isinstance(o, dict):
        return ' '.join(_flat(v) for v in o.values())
    if isinstance(o, (list, tuple)):
        return ' '.join(_flat(v) for v in o)
    return ''


def targets(U):
    """A unit's target words: the head word of every vocabulary pair."""
    out = []
    for c in U['cycles']:
        for pair in (c.get('vocab') or []):
            if isinstance(pair, (list, tuple)) and pair:
                out.append(str(pair[0]).lower())
    return out


def subs(U):
    return [str(c.get('sub', '')).lower() for c in U['cycles']]


def audit_vol(vol, rng, allfields):
    bad = []
    us = [(n, unit(n)) for n in rng]
    us = [(n, U) for n, U in us if U]
    refs = load(REFS)

    # ---- 1. recycling: half of a unit's words come back later in the book
    open_now = []
    later = {}
    for i, (n, U) in enumerate(us):
        rest = set()
        for _, V in us[i + 1:]:
            rest |= prose_words(V)
        later[n] = rest
    for n, U in us:
        tg = targets(U)
        if not tg:
            continue
        back = sum(1 for w in tg
                   if any(p in later[n] for p in WORD.findall(w.lower())))
        share = 100.0 * back / len(tg)
        # A unit's recycling is measured against the units that come
        # AFTER it, so it cannot be judged until those units carry their
        # rebuilt teaching prose - which is where a word gets used again.
        # Measuring unit 24 against units 25 to 30 while 26 to 30 are
        # still the old content would fail a unit for somebody else's
        # unfinished work. The last unit in a book is exempt for the same
        # reason: nothing comes after it.
        later_units = [m for m, _ in us[i + 1:]]
        judgeable = (later_units
                     and all(m in BINDING_UNITS for m in later_units))
        if share < RECYCLE_FLOOR and judgeable:
            bad.append('u%d: %.1f%% of %d target words reappear later, '
                       'want %.0f%%' % (n, share, len(tg), RECYCLE_FLOOR))
        elif share < RECYCLE_FLOOR and later_units:
            open_now.append('u%d: %.1f%% recycling, not yet judgeable - '
                            'units %s are not rebuilt'
                            % (n, share,
                               ', '.join(str(m) for m in later_units
                                         if m not in BINDING_UNITS)))

    # ---- 2 and 3. the grammar syllabus and its reference
    seen = {}
    for n, U in us:
        for i, c in enumerate(U['cycles'], 1):
            g = c.get('gram') or {}
            pt = (g.get('point') or '').strip()
            at = 'u%d c%d' % (n, i)
            if not pt:
                bad.append('%s: grammar slot with no point' % at)
                continue
            key = pt.lower()
            if key in seen and not g.get('revision'):
                bad.append('%s: grammar point %r already taught at %s and '
                           'not flagged revision' % (at, pt, seen[key]))
            seen.setdefault(key, at)
            ref = g.get('ref')
            if not ref:
                bad.append('%s: grammar slot points at no reference entry'
                           % at)
            elif refs is None:
                bad.append('%s: points at reference %r but content/refs.py '
                           'does not exist' % (at, ref))
            elif ref not in getattr(refs, 'LANG', {}):
                bad.append('%s: reference entry %r is not in refs.LANG'
                           % (at, ref))

    # ---- 4. what the contents tables are generated from
    for n, U in us:
        if not U.get('field'):
            bad.append('u%d: no topic field declared (the contents table and '
                       'the progression rule are both generated from it)' % n)
        for i, c in enumerate(U['cycles'], 1):
            if not c.get('sub'):
                bad.append('u%d c%d: no sub-topic' % (n, i))

    # ---- 5a. no two units in a book share a topic field
    fields = {}
    for n, U in us:
        f = (U.get('field') or '').lower()
        if not f:
            continue
        if f in fields:
            bad.append('u%d: topic field %r is also u%d' % (n, f, fields[f]))
        fields[f] = n

    # ---- 5b. two books may share at most four cycle sub-topics
    mine = set(s for _, U in us for s in subs(U))
    for other, orng in UN.books():
        if other == vol:
            continue
        theirs = set()
        for n in orng:
            V = unit(n)
            if V:
                theirs |= set(subs(V))
        both = sorted(mine & theirs)
        if len(both) > MAX_SHARED_SUBS:
            bad.append('vol %d and vol %d share %d cycle sub-topics, want at '
                       'most %d: %s' % (vol, other, len(both),
                                        MAX_SHARED_SUBS,
                                        ', '.join(both[:4])))

    # ---- 5c. a book must own at least two fields outright
    own = [f for f in fields if allfields.get(f) == 1]
    if len(own) < MIN_OWN_FIELDS:
        bad.append('vol %d owns %d topic field(s) found nowhere else in the '
                   'series, want %d' % (vol, len(own), MIN_OWN_FIELDS))
    return bad + ['(not yet judgeable) ' + o for o in open_now]


def report(only=None, detail=False):
    allfields = {}
    for vol, rng in UN.books():
        for n in rng:
            U = unit(n)
            if U and U.get('field'):
                f = U['field'].lower()
                allfields[f] = allfields.get(f, 0) + 1
    bad, binding = [], []
    for vol, rng in UN.books():
        if only and vol != only:
            continue
        name = ('Foundation %d' % (vol - 6)) if vol > 6 else 'Volume %d' % vol
        fails = audit_vol(vol, rng, allfields)
        print('%-14s %4d failure(s)' % (name, len(fails)))
        for f in (fails if detail else fails[:4]):
            print('     ' + f)
        if not detail and len(fails) > 4:
            print('     ... and %d more' % (len(fails) - 4))
        bad += fails
        fails_bind = [f for f in fails
                      if not f.startswith('(not yet judgeable)')]
        if vol in BINDING:
            binding += fails_bind
        else:
            # a bound unit answers for its own failures even while the rest
            # of its book is still open
            pre = tuple('u%d:' % n for n in BINDING_UNITS) + \
                  tuple('u%d ' % n for n in BINDING_UNITS)
            binding += [f for f in fails_bind if f.startswith(pre)]
    return bad, binding


def main(argv):
    only = int(argv[1]) if len(argv) > 1 and argv[1].isdigit() else None
    bad, binding = report(only, '--detail' in argv)
    if binding:
        state = 'FAIL - %d in %s' % (len(binding), sorted(BINDING))
    elif bad:
        bound = (['book %d' % v for v in sorted(BINDING)]
                 + ['unit %d' % n for n in sorted(BINDING_UNITS)])
        state = ('OPEN - %d item(s); green and binding for %s'
                 % (len(bad), ', '.join(bound) or 'nothing yet'))
    else:
        state = 'PASS'
    print('\nGATE 13 (a syllabus, not a sequence): %s' % state)
    return 1 if binding else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
