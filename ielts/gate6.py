# -*- coding: utf-8 -*-
"""GATE: no clipped text in any IELTS figure.

Same contract as the TOEFL gate of the same name. art.TFIT and art.TBLOCK are
the only two ways a figure draws fitted text and both record the box they
promised (art.FITLOG), so this measures every logged run against its own
promise with the exact DejaVu metrics the renderer uses, rather than
inspecting a rendered page and hoping.

Usage:  python3 gate6.py 4
"""
import sys
import _base                                     # puts the TOEFL dir on path
import art

# the two books whose key is not their name
BOOK = {7: 'Foundation 1', 8: 'Foundation 2'}

TOL = 0.5
MIN_SIZE = 7.5
OUT = ('/tmp/claude-0/-home-user-Animated-Courses/'
       'd2ecb935-98b0-524f-8ee9-37faa42d8a33/scratchpad/gate6_ielts_%s.docx')


def audit(vol):
    art.FITLOG = []
    import book
    book.build(vol, OUT % vol)
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
    vol = int(sys.argv[1]) if len(sys.argv) > 1 else 4
    log, over, small = audit(vol)
    print('%s: %d fitted runs of text in the figures'
          % (BOOK.get(vol, 'Volume %s' % vol), len(log)))
    bad = 0
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
            print('    %.1fpx  %r' % (r['size'], r['s'][:60]))
    else:
        print('  TOO SMALL: 0 - nothing printed under %.1fpx' % MIN_SIZE)
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
