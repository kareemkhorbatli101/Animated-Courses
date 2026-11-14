# -*- coding: utf-8 -*-
"""GATE 9 (density) - the level on the cover, measured from the page.

The Foundation volumes are gated by a CEILING: nothing outside the control
band, so the text cannot drift upward past the level it claims. The upper
volumes need the opposite. Nothing stops an author writing B1 prose and
printing B2 on the cover, and that is exactly what happened to Volume 3,
which profiles as a near-repeat of Volume 2 on every measure.

So this gate is two-sided. Each volume declares a window on four numbers that
profile.py computes from its academic passages:

    1k       the share of running words from the 1,000 commonest forms
    beyond   the share past the 4,000-form Foundation ceiling
    sent     mean sentence length
    nominal  the -tion/-ment/-ity/-ness/-ance rate, which is what makes
             academic prose dense rather than merely long

Low numbers on the last three mean easy text. A Foundation volume must stay
below its ceiling; a B2 or C1 volume must stay above its floor.

Usage:  python3 gate9.py            every volume that exists
        python3 gate9.py 3 4        only these
"""
import sys

import profile as P

#                 1k window      beyond    sent    nominal
WINDOW = {
    'Foundation 1': dict(k1=(80.0, 100.0), beyond=(0.0, 5.5),
                         sent=(8.0, 11.5), nominal=(0.0, 1.2)),
    'Foundation 2': dict(k1=(74.0, 81.0), beyond=(6.0, 10.5),
                         sent=(11.0, 14.5), nominal=(0.8, 2.2)),
    'Volume 1': dict(k1=(70.0, 74.5), beyond=(10.0, 13.5),
                     sent=(15.0, 18.0), nominal=(1.2, 2.6)),
    'Volume 2': dict(k1=(67.5, 71.0), beyond=(13.0, 16.0),
                     sent=(17.5, 20.5), nominal=(2.4, 4.0)),
    # the four windows below are the specification for the Volumes 3-6 work,
    # not a description of what is there now. Volumes 3 and 4 fail this gate
    # until that work lands, and that failure is the point of writing it first.
    'Volume 3': dict(k1=(66.0, 68.5), beyond=(16.0, 19.0),
                     sent=(21.0, 24.0), nominal=(4.0, 5.5)),
    'Volume 4': dict(k1=(64.5, 67.0), beyond=(18.5, 21.5),
                     sent=(24.0, 26.5), nominal=(5.0, 6.5)),
    'Volume 5': dict(k1=(62.5, 65.0), beyond=(21.0, 24.0),
                     sent=(26.0, 28.5), nominal=(6.0, 7.5)),
    'Volume 6': dict(k1=(59.0, 62.0), beyond=(24.0, 28.0),
                     sent=(28.0, 31.0), nominal=(7.0, 9.0)),
}
LADDER = ['Foundation 1', 'Foundation 2', 'Volume 1', 'Volume 2',
          'Volume 3', 'Volume 4', 'Volume 5', 'Volume 6']


def main(argv):
    want = None
    if argv:
        want = {'Volume %s' % a if a.isdigit() else a for a in argv}
    R = P.ranks()
    rows, bad = [], []
    for name, pre, rng in P.VOLS:
        if want and name not in want:
            continue
        texts = P.prose(pre, rng)
        if not texts:
            continue
        r = P.profile(name, texts, R)
        w = WINDOW[name]
        got = dict(k1=r['bands']['1k'], beyond=r['over4k'],
                   sent=r['mean_sent'], nominal=r['nominal'])
        fails = []
        for key, (lo, hi) in w.items():
            if not lo <= got[key] <= hi:
                fails.append('%s %.1f, want %.1f-%.1f' % (key, got[key], lo, hi))
        rows.append((name, got, w, fails))
        for f in fails:
            bad.append('%s: %s' % (name, f))

    print('GATE 9 (density) - the academic prose of each volume against the')
    print('window its level claims\n')
    head = '%-14s %13s %13s %13s %13s   %s' % (
        'volume', '1k', 'beyond 4k', 'mean sent', 'nominal', 'verdict')
    print(head)
    print('-' * len(head))
    for name, got, w, fails in rows:
        def cell(key, fmt='%.1f'):
            lo, hi = w[key]
            mark = ' ' if lo <= got[key] <= hi else '!'
            return '%s%s' % (mark, (fmt % got[key]))
        print('%-14s %12s%% %12s%% %13s %12s%%   %s'
              % (name, cell('k1'), cell('beyond'), cell('sent'),
                 cell('nominal'), 'pass' if not fails else 'FAIL'))
    print('-' * len(head))
    print('! marks a number outside the window. The window is two-sided: a')
    print('Foundation volume must stay simple enough, an upper volume dense')
    print('enough. Windows for Volumes 3-6 are the specification for the work')
    print('in TOEFL_Volumes_3to6_Plan.md, not a description of what is there.')
    if bad:
        print('\n%d number(s) outside their window:' % len(bad))
        for b in bad:
            print('  ' + b)
        print('\nGATE 9 (density): FAIL')
        return 1
    print('\nGATE 9 (density): PASS')
    return 0


if __name__ == '__main__':
    raise SystemExit(main(sys.argv[1:]))
