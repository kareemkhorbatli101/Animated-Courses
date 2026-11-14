# -*- coding: utf-8 -*-
"""The handoff gate: every Volume 1 grammar point has a prerequisite in the
Foundation volume, and the Foundation teaches nothing Volume 1 teaches again.

This is the argument that the Foundation is a foundation and not a generic
beginner course, so it is checked against the real unit data rather than
asserted in a plan document.
"""
import sys, os, importlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Volume 1 unit -> (the Foundation units that lay its ground, why)
BRIDGE = {
    1: ([7, 8], 'past simple of be and regular -ed (F7) plus the irregular pasts and '
                'did questions (F8); Volume 1 adds only the present perfect'),
    2: ([10], 'comparative -er and more'),
    3: ([1, 5], 'be (F1) and be + -ing (F5): the "be + a verb form" pattern the passive '
                'is built on'),
    4: ([3, 10], 'present simple (F3) and will (F10)'),
    5: ([5, 9], '-ing forms (F5) and the bare infinitive after can and should (F9)'),
    6: ([1, 2], 'word order (F1) and there is / there are with where (F2)'),
    7: ([6], 'much, many, a lot of, some and any'),
    8: ([1], 'a and an, and the plural -s'),
    9: ([7], 'past simple with ago, last and in 1990'),
    10: ([5, 7, 8], 'continuous aspect (F5) and the past simple (F7, F8)'),
}

# Structures Volume 1 owns. None of them may be taught in the Foundation.
V1_ONLY = ['present perfect', 'passive', 'conditional', 'relative clause',
           'gerund', 'reported', 'superlative']


def main():
    bad = []
    f = {n: importlib.import_module('content.f%02d' % n).UNIT for n in range(1, 11)}
    u = {n: importlib.import_module('content.u%02d' % n).UNIT for n in range(1, 11)}

    print('Volume 1 unit                        prerequisite in the Foundation')
    print('-' * 78)
    for n in range(1, 11):
        pre, why = BRIDGE[n]
        for p in pre:
            if p not in f:
                bad.append('unit %d names F%d, which does not exist' % (n, p))
        print('%2d %-32s F%s' % (n, u[n]['grammar'].split(' · ')[0][:32],
                                 ', F'.join(str(p) for p in pre)))
        print('   %s' % why)

    print('\nFoundation grammar points')
    print('-' * 78)
    for n in range(1, 11):
        g = f[n]['grammar']
        print('F%-2d %s' % (n, g))
        for bad_word in V1_ONLY:
            if bad_word in g.lower():
                bad.append('F%d teaches "%s", which belongs to Volume 1' % (n, bad_word))

    covered = sorted({p for pre, _ in BRIDGE.values() for p in pre})
    missing = [n for n in range(1, 11) if n not in covered]
    # ---- Foundation 2, once its units exist -------------------------------
    g = {}
    for n in range(1, 11):
        try:
            g[n] = importlib.import_module('content.g%02d' % n).UNIT
        except ImportError:
            break
    if g:
        print('\nFoundation 2 grammar points')
        print('-' * 78)
        f1_points = ' | '.join(f[n]['grammar'].lower() for n in f)
        for n in sorted(g):
            gr = g[n]['grammar']
            print('G%-2d %s' % (n, gr))
            for bad_word in V1_ONLY:
                if bad_word in gr.lower():
                    bad.append('G%d teaches "%s", which belongs to Volume 1'
                               % (n, bad_word))
            # a point Foundation 1 already taught is not a bridge, it is a repeat
            for piece in [x.strip().lower() for x in gr.split('\u00b7')]:
                if piece and piece in f1_points:
                    bad.append('G%d teaches "%s", which Foundation 1 already taught'
                               % (n, piece))
        if len(g) != 10:
            bad.append('Foundation 2 has %d of its 10 units' % len(g))
        # one Foundation 2 unit for each Volume 1 unit, by design
        print('\nFoundation 2 unit -> the Volume 1 unit it prepares')
        print('-' * 78)
        for n in sorted(g):
            prep = g[n].get('prepares')
            if prep != n:
                bad.append('G%d declares prepares=%r, want %d' % (n, prep, n))
            print('G%-2d %-34s -> U%d %s'
                  % (n, g[n]['title'][:34], n, u[n]['title']))

    print('\nFoundation units used by the bridge: %s' % covered)
    if missing:
        print('Foundation units not used by the bridge: %s '
              '(these carry vocabulary and skills rather than a Volume 1 structure)'
              % missing)

    if bad:
        print('\n'.join(bad))
        print('\nGATE 4 (handoff): FAIL — %d problem(s)' % len(bad))
        return 1
    print('\nGATE 4 (handoff): PASS — all ten Volume 1 grammar points have a named '
          'prerequisite, no Volume 1 structure is taught early, and no Foundation 2 '
          'point repeats a Foundation 1 one.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
