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


def build(out):
    d = Doc('CMA Part 1 · Section A · Book 1',
            'Handouts and answer keys, chapters 1 to 18')
    total = hcount = 0
    for n in CHAPTERS:
        mod = 'b1_ch%02d' % n
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
    p = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        'CMA_Book1_All_Handouts_and_Keys.docx')
    path, hc, tp = build(p)
    print('wrote %s  %d bytes' % (path, os.path.getsize(path)))
    print('%d handouts, each followed by its own answer key sheet, '
          '%d response points' % (hc, tp))
