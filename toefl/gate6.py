# -*- coding: utf-8 -*-
"""GATE 6 (no clipped text) - prove every run of text in every figure of a
volume stays inside the box the figure promised it.

This is the gate for the defect the user reported: text cut off inside a
shape, unrecoverable from the .docx because the glyphs were never drawn.

art.TFIT and art.TBLOCK are the only two ways a figure draws fitted text, and
both record the box they promised (art.FITLOG). So this gate does not infer
anything from the rendered PNG. It turns the log on, builds the volume's
figures, and then measures every logged run against its own promise with the
same exact DejaVu metrics the renderer uses.

Two failures are reported:

  OVERRUN   the run is wider than the box it was given. This is the defect:
            the glyphs fall outside the shape and the reader loses them.
  TOO SMALL the run fits only because it was shrunk below 7.5px, which is
            smaller than this book ever intends to print. Legible, but a sign
            the box is wrong, and the next edit to that string will clip.

Usage:  python3 gate6.py F1         (or F2, 1, 2, 3, 4, or 'all')
"""
import sys

import art


TOL = 0.5          # px: the metrics are a proven upper bound, so this is slack
MIN_SIZE = 7.5     # px: below this the book is not printing readable type


def audit(vol):
    art.FITLOG = []
    import book
    out = '/tmp/claude-0/-home-user-Animated-Courses/' \
          'd2ecb935-98b0-524f-8ee9-37faa42d8a33/scratchpad/gate6_%s.docx' % vol
    book.build(vol, out)
    log, art.FITLOG = art.FITLOG, None

    over, small = [], []
    for r in log:
        if r['max_w'] is None:
            continue
        w = art.tw(r['s'], r['size'], r['bold'], r['mono'])
        if w > r['max_w'] + TOL:
            over.append((r, w))
        if r['size'] < MIN_SIZE and r['s'].strip():
            small.append((r, w))
    return log, over, small


def main():
    arg = sys.argv[1] if len(sys.argv) > 1 else 'F1'
    _u = arg.upper()
    vols = (['F1', 'F2', 1, 2, 3, 4] if _u == 'ALL' else
            [('F1' if _u in ('F', 'F1') else 'F2' if _u == 'F2' else int(arg))])
    vols = [v for v in vols if v in __import__('book').VOLS]
    bad = 0
    for v in vols:
        log, over, small = audit(v)
        print('Volume %s: %d fitted runs of text in the figures' % (v, len(log)))
        if over:
            bad += len(over)
            print('  OVERRUN: %d run(s) wider than the box' % len(over))
            for r, w in over[:12]:
                print('    %6.2f > %6.2f px  %.1fpx  %r'
                      % (w, r['max_w'], r['size'], r['s'][:60]))
        else:
            print('  OVERRUN: 0 - every run is inside its box')
        if small:
            bad += len(small)
            print('  TOO SMALL: %d run(s) under %.1fpx' % (len(small), MIN_SIZE))
            for r, w in small[:12]:
                print('    %.2fpx  %r' % (r['size'], r['s'][:60]))
        else:
            print('  TOO SMALL: 0 - no run was shrunk under %.1fpx' % MIN_SIZE)
    if bad:
        print('\nGATE 6: FAIL - %d problem(s).' % bad)
        return 1
    print('\nGATE 6 (no clipped text): PASS')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
