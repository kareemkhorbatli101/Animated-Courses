# -*- coding: utf-8 -*-
"""Build a book of summary handouts, prove it, and say what is wrong with it.

One command per book, so that doing book 2 is the same act as doing book 1
and nothing has to be remembered:

    python3 wsrun.py              # every book found in src/
    python3 wsrun.py 2            # book 2
    python3 wsrun.py 2 -c 5       # book 2, chapter 5 only
    python3 wsrun.py 2 --build    # and write the .docx files
    python3 wsrun.py 2 -q         # findings only

It runs three things in order and stops for none of them:

    1. the build          every chapter of the book, as sheets
    2. the build checks   wssum.check -- the invariants construction
                          cannot guarantee on its own
    3. the reading passes wssumaudit -- twenty-two questions asked of the
                          finished sheet, the way a student meets it

The exit status is 0 only when both sets are clean, so this is also the
thing to run before saying a book is done.

Nothing here knows anything about book 1. A book is a set of chapter files
in src/, and the chapters are counted rather than assumed, so a book of
twelve chapters and a book of twenty both work without an edit.
"""
from __future__ import print_function

import glob
import os
import re
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import wssum as S                  # noqa: E402
import wssumaudit as A             # noqa: E402


def books():
    """Every book with chapter files on disk, in order."""
    out = set()
    for p in glob.glob(os.path.join(HERE, 'src', 'b*_ch*.txt')):
        m = re.match(r'^b(\d+)_ch\d+\.txt$', os.path.basename(p))
        if m:
            out.add(int(m.group(1)))
    return sorted(out)


def chapters(bk):
    """Every chapter of this book, counted rather than assumed."""
    out = []
    for p in glob.glob(os.path.join(HERE, 'src', 'b%d_ch*.txt' % bk)):
        m = re.match(r'^b%d_ch(\d+)\.txt$' % bk, os.path.basename(p))
        if m:
            out.append(int(m.group(1)))
    return sorted(out)


def run_book(bk, chs=None, build=False, quiet=False):
    """Build, check and audit one book. Returns (findings, sheets, gaps)."""
    chs = chs or chapters(bk)
    if not chs:
        print('book %d: no chapter files in src/' % bk)
        return [['book %d has no chapters' % bk]], 0, 0
    findings, sheets, gaps = [], 0, 0
    t0 = time.time()
    print('\n' + '=' * 68)
    print('Book %d — %d chapters' % (bk, len(chs)))
    print('=' * 68)
    for n in chs:
        try:
            hs = S.build_chapter(bk, n)
        except Exception as exc:
            print('  ch%-2d  WILL NOT BUILD: %s: %s'
                  % (n, type(exc).__name__, exc))
            findings.append(('ch%d' % n, 'build', str(exc)))
            continue
        sheets += len(hs)
        g = sum(int(H['gaps']) for H in hs)
        gaps += g
        built = S.check(hs, bk, n)
        hard, _soft = A.audit(bk, n, verbose=False)
        findings.extend(('ch%d' % n, 'build check', m) for m in built)
        findings.extend(('ch%d' % n, p, m) for p, m in hard)
        mark = 'ok  ' if not (built or hard) else 'FAIL'
        if not quiet or built or hard:
            print('  ch%-2d  %s  %2d sheets  %4d gaps%s'
                  % (n, mark, len(hs), g,
                     '' if not (built or hard)
                     else '   %d finding(s)' % (len(built) + len(hard))))
        for m in built:
            print('          build check: %s' % m)
        for p, m in hard:
            print('          %s' % m)
    print('  %d sheets, %d gaps, %d finding(s), %.1fs'
          % (sheets, gaps, len(findings), time.time() - t0))
    if build:
        import wssumbuild
        _hs, out = wssumbuild.build(bk, chs[0], chapters=chs)
        print('  -> %s' % out)
        for n in chs:
            _h, o = wssumbuild.build(bk, n, chapters=[n])
            print('  -> %s' % o)
    return findings, sheets, gaps


def main(argv):
    args = [a for a in argv[1:] if not a.startswith('-')]
    flags = set(a for a in argv[1:] if a.startswith('-'))
    quiet = bool({'-q', '--quiet'} & flags)
    build = bool({'--build', '-b'} & flags)
    chs = None
    if '-c' in argv:
        chs = [int(argv[argv.index('-c') + 1])]
        args = [a for a in args if a != str(chs[0])]
    bks = [int(a) for a in args] or books()
    total, sheets, gaps = [], 0, 0
    for bk in bks:
        f, sh, g = run_book(bk, chs, build, quiet)
        total.extend((bk,) + tuple(x) for x in f)
        sheets += sh
        gaps += g
    print('\n' + '=' * 68)
    print('%d book(s), %d sheets, %d gaps, %d finding(s)'
          % (len(bks), sheets, gaps, len(total)))
    if total:
        print('\nFindings by pass:')
        byp = {}
        for row in total:
            byp.setdefault(row[2], []).append(row)
        for p in sorted(byp, key=lambda x: -len(byp[x])):
            print('  %3d  %s' % (len(byp[p]), p))
    return 1 if total else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
