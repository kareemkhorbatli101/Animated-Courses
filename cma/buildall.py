# -*- coding: utf-8 -*-
"""Build one document holding every handout, each followed by its own key.

The per-chapter build keeps the student sheets and the keys in separate files,
which is what a teacher wants when handing one out and keeping the other. This
build is the other arrangement: the whole of Book 1 in order, with each
handout's answer key on the sheet immediately after it, so a single file can be
printed straight through and cut into packs.

Usage:  python3 buildall.py [out.docx]
"""
import sys, os, importlib

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from docxw import Doc
import buildch as B

CHAPTERS = range(1, 19)


TITLES = {1: 'CMA Part 1 · Section A · Book 1',
          2: 'CMA Part 1 · Book 2 · Cost Management',
          3: 'CMA Part 1 · Book 3 · Planning, Budgeting '
             'and Performance Management'}


def build(out, bk=1):
    d = Doc(TITLES.get(bk, 'CMA Part 1 · Book %d' % bk),
            'Handouts and answer keys, chapters 1 to 18')
    total = hcount = 0
    for n in CHAPTERS:
        mod = 'b%d_ch%02d' % (bk, n)
        ch = importlib.import_module(mod)
        for h in ch.HANDOUTS:
            m = importlib.import_module('%s.h%02d' % (mod, h))
            importlib.reload(m)
            H = m.HANDOUT
            c = B.render_handout(d, H, ch.CH)
            B.render_key(d, H, c, ch.CH)
            hcount += 1
            total += c.n
    d.save(out)
    return out, hcount, total


if __name__ == '__main__':
    bk = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    p = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        'CMA_Book%d_All_Handouts_and_Keys.docx' % bk)
    path, hc, tp = build(p, bk)
    print('wrote %s  %d bytes' % (path, os.path.getsize(path)))
    print('%d handouts, each followed by its own answer key sheet, '
          '%d response points' % (hc, tp))
