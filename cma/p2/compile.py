"""Compile an authored chapter into the two files the toolchain reads.

Part 1's chapters reached src/ by extraction from Word: the prose arrived
as lines and the tables as real tables, in a .txt and a .json beside it.
Part 2 is authored here rather than extracted, so the same two files have
to be produced from something a person can write and read back.

The source is the chapter as it reads, with one addition: a table is
written as rows of cells separated by '|', between @table and @end. The
compiler flattens it into the .txt the way Word's extractor did -- every
non-empty cell on its own line, row by row -- and keeps the real rows in
the .json, so the handout generator still sees a table where the reader
sees one.
"""
from __future__ import print_function
import json
import os
import re
import sys

SECPAT = re.compile(r'^(\d{1,2}\.\d{1,2})\s{2}')
CAPPAT = re.compile(r'^Figure\s+(F\d{3}-\d{2})\.')


def compile_chapter(src):
    lines = src.replace('\r\n', '\n').split('\n')
    out, tables, tsec, figs = [], [], {}, {}
    sec, lastfig = '', None
    i = 0
    while i < len(lines):
        ln = lines[i].rstrip()
        if ln.strip() == '@table':
            rows, start, i = [], i + 1, i + 1
            while i < len(lines) and lines[i].strip() != '@end':
                raw = lines[i].rstrip('\n')
                if raw.strip() == '@table':
                    raise ValueError(
                        'line %d: a table opened at line %d was never closed '
                        'with @end' % (i + 1, start))
                if raw.strip():
                    rows.append([c.strip() for c in raw.split('|')])
                i += 1
            if i >= len(lines):
                raise ValueError('line %d: a table was never closed with @end'
                                 % start)
            # A row that carries no separator is prose that fell inside the
            # block, which is what an unclosed @end looks like when the next
            # one belongs to a later table.
            for r in rows:
                if len(r) == 1 and len(r[0]) > 40:
                    raise ValueError(
                        'the table at line %d contains a line with no "|": '
                        '%r' % (start, r[0][:60]))
            i += 1
            if not rows:
                continue
            w = max(len(r) for r in rows)
            rows = [r + [''] * (w - len(r)) for r in rows]
            idx = len(tables)
            tables.append(rows)
            tsec[str(idx)] = sec
            if lastfig:
                figs.setdefault(lastfig, idx)
                lastfig = None
            for r in rows:
                for c in r:
                    if c:
                        out.append(c)
            continue
        m = SECPAT.match(ln)
        if m:
            sec = m.group(1)
        m = CAPPAT.match(ln.strip())
        if m:
            lastfig = m.group(1)
        out.append(ln)
        i += 1
    return '\n'.join(out).rstrip() + '\n', {
        'tables': tables, 'figures': figs, 'tsec': tsec}


def main(argv):
    if len(argv) < 2:
        print('usage: compile.py <book> [chapter ...]')
        return 2
    bk = int(argv[1])
    here = os.path.dirname(os.path.abspath(__file__))
    srcdir = os.path.join(here, 'b%d' % bk)
    outdir = os.path.join(os.path.dirname(here), 'src')
    chs = [int(x) for x in argv[2:]] or sorted(
        int(m.group(1)) for m in
        (re.match(r'^ch(\d+)\.src$', f) for f in os.listdir(srcdir)) if m)
    for n in chs:
        p = os.path.join(srcdir, 'ch%02d.src' % n)
        txt, meta = compile_chapter(open(p, encoding='utf8').read())
        open(os.path.join(outdir, 'b%d_ch%02d.txt' % (bk, n)), 'w',
             encoding='utf8').write(txt)
        json.dump(meta, open(os.path.join(outdir, 'b%d_ch%02d.json' % (bk, n)),
                             'w', encoding='utf8'), ensure_ascii=False)
        print('ch%02d  %6d words  %3d tables  %2d figures'
              % (n, len(txt.split()), len(meta['tables']), len(meta['figures'])))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
