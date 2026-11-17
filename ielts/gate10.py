# -*- coding: utf-8 -*-
"""Gate 10: every question type present in every book, and none dominating.

The nine gates before this one measure what is on the page. None of them
counted how often each kind of question appears, and an audit in November
found the consequence: four of the six Listening types were missing from
four books, 542 reading items were labelled short answer while being
sentence completion, and no exercise in the series was headed Multiple
choice although 270 items were exactly that.

This gate states the rule the series is held to:

  * COVERAGE. Every type in the inventory appears in every book, at or
    above a floor share, except where EXEMPT says a book is too low a
    level for it.
  * CEILING. No single type carries more than its ceiling share, so that
    a book cannot drill one task and call itself a course.
  * SPEAKING. Each of the three parts holds between 25 and 40 per cent of
    a book's speaking slots.

The floors and ceilings are a declared design target, not a measurement of
official papers: this container reaches package registries and nothing
else, so the real distribution of a Cambridge paper cannot be sampled
here. What the gate therefore proves is that every type is taught in every
book and none dominates. It does not prove the shares match a real paper.
Saying which of those two things a number proves is the whole discipline
of this project.

    python3 gate10.py            # all eight books
    python3 gate10.py 3          # one book
"""
import collections
import importlib.util
import os
import sys

import _base                                            # noqa: F401
import qtypes

HERE = os.path.dirname(os.path.abspath(__file__))
BOOKS = [(7, range(61, 71)), (8, range(71, 81)), (1, range(1, 11)),
         (2, range(11, 21)), (3, range(21, 31)), (4, range(31, 41)),
         (5, range(41, 51)), (6, range(51, 61))]
FLOOR_READ = 2.0        # per cent of a book's reading items
FLOOR_LISTEN = 3.0      # per cent of a book's listening items
CEIL_READ = 30.0
CEIL_LISTEN = 38.0
SPEAK_LO, SPEAK_HI = 25.0, 40.0

# A type a book is too low a level to teach. Yes/No/Not Given asks what a
# writer believes as against what a text states, and neither Foundation
# book contains a text with a thesis to disagree with; matching sentence
# endings needs a reader who can hold a clause in mind while scanning for
# its other half. Both arrive in Volume 1. This is a design decision and
# it is written here so that the gate enforces it rather than tolerating
# a hole that nobody chose.
EXEMPT = {
    7: {'Yes/No/Not Given', 'matching sentence endings'},
    8: {'Yes/No/Not Given', 'matching sentence endings'},
}


def load(name):
    p = os.path.join(HERE, 'content', name + '.py')
    if not os.path.exists(p):
        return None
    spec = importlib.util.spec_from_file_location('qt_' + name, p)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def blocks(vol, rng, skill):
    """Every exercise block of one skill in a book, units and papers."""
    for n in rng:
        m = load('u%02d' % n)
        if m is None:
            continue
        for c in m.UNIT['cycles']:
            for b in c[skill]:
                yield b
    names = (('paper%d' % vol, 'paper%da' % vol) if skill == 'read'
             else ('lpaper%d' % vol, 'lpaper%da' % vol))
    for nm in names:
        pm = load(nm)
        if pm is None:
            continue
        if skill == 'read':
            for x in pm.PAPER['passages']:
                yield x
        else:
            for x in pm.LPAPER['parts']:
                yield x


def speak_parts(rng):
    """{part label: slots} over a book's speaking slots."""
    c = collections.Counter()
    for n in rng:
        m = load('u%02d' % n)
        if m is None:
            continue
        for cy in m.UNIT['cycles']:
            p = str(cy['speak'].get('part') or '')
            # "Part 1 into Part 2" is one slot that teaches both, so it
            # counts a half to each rather than a whole to either.
            got = [x for x in ('Part 1', 'Part 2', 'Part 3') if x in p]
            for g in got:
                c[g] += 1.0 / len(got)
    return c


def report(only=None):
    bad = []
    for vol, rng in BOOKS:
        if only and vol != only:
            continue
        tag = 'Foundation %d' % (vol - 6) if vol > 6 else 'Volume %d' % vol
        print('\n%s' % tag)
        for skill, inv, floor, ceil in (
                ('read', qtypes.READING, FLOOR_READ, CEIL_READ),
                ('listen', qtypes.LISTENING, FLOOR_LISTEN, CEIL_LISTEN)):
            cen = qtypes.census(blocks(vol, rng, skill), skill)
            tot = sum(cen.values()) or 1
            print('  %s  %d items' % (skill, tot))
            for t in inv:
                n = cen.get(t, 0)
                sh = 100.0 * n / tot
                flag = ''
                if t in EXEMPT.get(vol, set()):
                    flag = 'exempt'
                elif sh < floor:
                    flag = 'UNDER %.0f%%' % floor
                    bad.append('%s %s: %s is %.1f%% (%d items), floor %.0f%%'
                               % (tag, skill, t, sh, n, floor))
                elif sh > ceil:
                    flag = 'OVER %.0f%%' % ceil
                    bad.append('%s %s: %s is %.1f%% (%d items), ceiling %.0f%%'
                               % (tag, skill, t, sh, n, ceil))
                print('    %-42s %4d  %5.1f%%  %s' % (t, n, sh, flag))
        sp = speak_parts(rng)
        tot = sum(sp.values()) or 1
        line = []
        for p in ('Part 1', 'Part 2', 'Part 3'):
            sh = 100.0 * sp.get(p, 0) / tot
            line.append('%s %.1f%%' % (p, sh))
            if not SPEAK_LO <= sh <= SPEAK_HI:
                bad.append('%s speaking: %s is %.1f%%, want %.0f-%.0f%%'
                           % (tag, p, sh, SPEAK_LO, SPEAK_HI))
        print('  speaking  %.0f slots  %s' % (tot, '  '.join(line)))
    return bad


def main(argv):
    only = int(argv[1]) if len(argv) > 1 and argv[1].isdigit() else None
    bad = report(only)
    print('\nGATE 10 (every type in every book, none dominating)')
    if bad:
        print('  %d FAILURE(S):' % len(bad))
        for b in bad:
            print('    ' + b)
        return 1
    print('  PASS - %d reading types and %d listening types in every book, '
          'no type over its ceiling, speaking split 25-40%% per part'
          % (len(qtypes.READING), len(qtypes.LISTENING)))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
