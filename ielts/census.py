# -*- coding: utf-8 -*-
"""Every number the balance report quotes, measured rather than recalled.

    python3 census.py            the per-book table and the series totals
    python3 census.py --types    the full type census, per book and skill

A report that quotes a figure no script can re-derive is the thing the
invariance contract exists to stop, so every number in
IELTS_Balance_Report.md comes from here.
"""
import collections
import importlib
import os
import sys

import _base                                            # noqa: F401
import qtypes
import gate10

HERE = os.path.dirname(os.path.abspath(__file__))
BOOKS = gate10.BOOKS
NAME = {7: 'Foundation 1', 8: 'Foundation 2'}


def label(v):
    return NAME.get(v, 'Volume %d' % v)


def load(nm):
    try:
        m = importlib.import_module('content.%s' % nm)
    except ModuleNotFoundError:
        return None
    importlib.reload(m)
    return m


def unit_blocks(rng, skill):
    for n in rng:
        m = load('u%02d' % n)
        if m is None:
            continue
        for c in m.UNIT['cycles']:
            for b in c[skill]:
                yield b


def papers(vol):
    """Which timed papers a book carries, by kind."""
    out = []
    for nm, kind in (('paper%d' % vol, 'Reading'),
                     ('paper%da' % vol, 'Reading'),
                     ('lpaper%d' % vol, 'Listening'),
                     ('lpaper%da' % vol, 'Listening'),
                     ('wpaper%d' % vol, 'Writing'),
                     ('spaper%d' % vol, 'Speaking')):
        if os.path.exists(os.path.join(HERE, 'content', nm + '.py')):
            out.append(kind)
    return out


def wrongs_and_items(vol, rng):
    """(items, four-option items, wrong-option lines, cue cards)."""
    n_it = n_four = n_lines = n_cue = 0
    for skill in ('read', 'listen'):
        for b in gate10.blocks(vol, rng, skill):
            for it in b['items']:
                n_it += 1
                if it[1] and len(it[1]) == 4:
                    n_four += 1
                if it[1] and len(it) > 4 and isinstance(it[4], dict):
                    n_lines += len(it[4])
    for n in rng:
        m = load('u%02d' % n)
        if m is None:
            continue
        for c in m.UNIT['cycles']:
            if c['speak'].get('cue'):
                n_cue += 1
    for nm in ('wpaper%d' % vol, 'spaper%d' % vol):
        m = load(nm)
        if m is None:
            continue
        P = getattr(m, 'SPAPER', None)
        if P:
            n_cue += sum(1 for p in P['parts'] if p.get('cue'))
    return n_it, n_four, n_lines, n_cue


def speak(rng):
    c = gate10.speak_parts(rng)
    tot = sum(c.values()) or 1
    return tuple(100.0 * c.get(p, 0) / tot
                 for p in ('Part 1', 'Part 2', 'Part 3'))


def main(argv):
    if '--types' in argv:
        for vol, rng in BOOKS:
            print('\n== %s' % label(vol))
            for skill, inv in (('read', qtypes.READING),
                               ('listen', qtypes.LISTENING)):
                cen = qtypes.census(gate10.blocks(vol, rng, skill), skill)
                tot = sum(cen.values()) or 1
                print('  %s  %d items' % (skill, tot))
                for t in inv:
                    n = cen.get(t, 0)
                    if n:
                        print('    %-42s %4d  %5.1f%%'
                              % (t, n, 100.0 * n / tot))
        return 0
    rows = []
    tot = collections.Counter()
    print('%-14s %6s %6s %7s %5s  %-28s %s'
          % ('book', 'items', '4-opt', 'lines', 'cards', 'timed papers',
             'speaking P1/P2/P3'))
    for vol, rng in BOOKS:
        n_it, n_four, n_lines, n_cue = wrongs_and_items(vol, rng)
        ps = papers(vol)
        sp = speak(rng)
        tot['items'] += n_it
        tot['four'] += n_four
        tot['lines'] += n_lines
        tot['cue'] += n_cue
        tot['papers'] += len(ps)
        rows.append((vol, n_it, n_four, n_lines, n_cue, ps, sp))
        print('%-14s %6d %6d %7d %5d  %-28s %.0f/%.0f/%.0f'
              % (label(vol), n_it, n_four, n_lines, n_cue,
                 ', '.join(ps), sp[0], sp[1], sp[2]))
    print('%-14s %6d %6d %7d %5d  %d modules'
          % ('TOTAL', tot['items'], tot['four'], tot['lines'], tot['cue'],
             tot['papers']))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
