# -*- coding: utf-8 -*-
"""GATE 8: every block of text stays inside the box drawn around it.

gate6 proves a line of text fits the WIDTH it was promised. Nothing proved
that a block of lines fits the HEIGHT of the rectangle it was drawn into,
and a box overflows downwards: 333 of the 400 speaking figures in this
series were drawn with a fixed 96px box around a text block that grew,
and every other gate passed them.

The method: art.py logs every rectangle (RECTLOG) and every run of text
with the block it belongs to (FITLOG). For each block, take the smallest
rectangle that contains the first line's anchor, and require the whole
block to sit inside it.

Usage:  python3 gate8.py 4
        python3 gate8.py all
"""
import collections
import sys

import _base                                     # puts the TOEFL dir on path
import art

BOOK = {7: 'Foundation 1', 8: 'Foundation 2'}
TOL = 1.5                      # a pixel and a half of printer's grace
OUT = ('/tmp/claude-0/-home-user-Animated-Courses/'
       'd2ecb935-98b0-524f-8ee9-37faa42d8a33/scratchpad/gate8_%s.docx')


def bbox(runs):
    """The ink of one block: left, top, right, bottom."""
    x0 = y0 = 1e9
    x1 = y1 = -1e9
    for r in runs:
        w = art.tw(r['s'], r['size'], r['bold'], r['mono'])
        if r['anchor'] == 'middle':
            a, b = r['x'] - w / 2.0, r['x'] + w / 2.0
        elif r['anchor'] == 'end':
            a, b = r['x'] - w, r['x']
        else:
            a, b = r['x'], r['x'] + w
        x0, x1 = min(x0, a), max(x1, b)
        y0 = min(y0, r['y'] - r['size'] * 0.80)      # ascent
        y1 = max(y1, r['y'] + r['size'] * 0.24)      # descent
    return x0, y0, x1, y1


def audit(vol):
    art.FITLOG, art.RECTLOG = [], []
    import book
    book.build(vol, OUT % vol)
    log, rects = art.FITLOG, art.RECTLOG
    art.FITLOG = art.RECTLOG = None

    by_fig = collections.defaultdict(list)
    for r in rects:
        by_fig[r['fig']].append(r)
    blocks = collections.defaultdict(list)
    for r in log:
        blocks[(r['fig'], r['blk'])].append(r)

    escapes = []
    for (fig, blk), runs in blocks.items():
        runs.sort(key=lambda r: r['y'])
        first = runs[0]
        px, py = first['x'], first['y'] - first['size'] * 0.4
        holders = [q for q in by_fig.get(fig, ())
                   if q['x'] <= px <= q['x'] + q['w']
                   and q['y'] <= py <= q['y'] + q['h']
                   and q['w'] < 880]               # not the page-wide panel
        if not holders:
            continue
        # Two paper patches can overlap, so the smallest box containing
        # the anchor is not always the box the text was drawn into. Take
        # the box it fits best: a block is contained if ANY box it starts
        # inside holds all of it.
        x0, y0, x1, y1 = bbox(runs)
        out = min(max(0.0, q['y'] - y0, y1 - (q['y'] + q['h']),
                      q['x'] - x0, x1 - (q['x'] + q['w']))
                  for q in holders)
        if out > TOL:
            escapes.append((fig, len(runs), round(out, 1),
                            runs[0]['s'][:48]))
    return len(blocks), len(rects), escapes


def main(argv):
    vols = ([7, 8, 1, 2, 3, 4, 5, 6] if argv[1] == 'all'
            else [int(argv[1])])
    bad = 0
    for v in vols:
        n, nr, esc = audit(v)
        name = BOOK.get(v, 'Volume %d' % v)
        print('%-14s %5d blocks, %5d boxes, %4d escaping'
              % (name, n, nr, len(esc)))
        for fig, lines, out, s in esc[:6]:
            print('     fig %-5d %d lines, %.1fpx out   %r' % (fig, lines, out, s))
        if esc:
            bad = 1
    print('\nGATE 8 (a block of text inside its box): %s'
          % ('PASS' if not bad else 'FAIL'))
    return bad


if __name__ == '__main__':
    sys.exit(main(sys.argv))
