# -*- coding: utf-8 -*-
"""Extract each chapter's text and its real tables from the book .docx.

The first version flattened the whole document to one line per cell and then
tried to guess the column count back. It guessed wrong often enough to be
dangerous: a two-column read of a three-column table produced exercises whose
headers were data values. The .docx already holds every table as rows and
cells, so the shape does not have to be inferred at all.

Writes, per chapter: src/b1_chNN.txt (prose, tables flattened for the text
checks) and src/b1_chNN.json (the real tables, in document order).
"""
import os, re, json, zipfile
import xml.etree.ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
HERE = os.path.dirname(os.path.abspath(__file__))
UP = '/root/.claude/uploads/d2ecb935-98b0-524f-8ee9-37faa42d8a33/'
# The two books are authored to the same conventions, so one extractor serves
# both: only the file and the output prefix differ.
BOOKS = {
    1: UP + '638db64a-CMA_P1_SecA_Ch01-18_book_REVIEW_EDITION.docx',
    2: UP + 'ca83676e-CMA_P1_Book2_REVIEW_EDITION.docx',
    3: UP + '30b2c1ee-CMA_P1_Book3_REVIEW_EDITION.docx',
}
BOOK = BOOKS[1]


def ptext(p):
    return ''.join(t.text or '' for t in p.iter(W + 't')).strip()


def table(tbl):
    """One table's rows. Nested tables are returned separately, not lost.

    The boxes in this book are 1x1 tables, and several of them hold a real
    table inside that cell. Reading only a cell's direct child paragraphs
    dropped those inner tables entirely, which cost the text file the IFRS
    name pairs among other things.
    """
    rows, nested = [], []
    for tr in tbl.findall(W + 'tr'):
        cells = []
        for tc in tr.findall(W + 'tc'):
            for inner in tc.findall(W + 'tbl'):
                r, nn = table(inner)
                if r:
                    nested.append(r)
                nested += nn
            # a newline, not a space: a box is a 1x1 table whose cell holds a
            # whole page of lines, and joining them with spaces put each
            # section check and all four of its options on one line, which
            # no line-based parse can read
            cells.append('\n'.join(
                t for t in (ptext(p) for p in tc.iter(W + 'p')) if t))
        if any(c for c in cells):
            rows.append(cells)
    return rows, nested


def walk(path):
    """The document body as an ordered list of ('p', text) and ('t', rows)."""
    z = zipfile.ZipFile(path)
    body = ET.fromstring(z.read('word/document.xml')).find(W + 'body')
    out = []
    for el in list(body):
        if el.tag == W + 'p':
            t = ptext(el)
            if t:
                out.append(('p', t))
        elif el.tag == W + 'tbl':
            rows, nested = table(el)
            if rows:
                out.append(('t', rows))
            for r in nested:
                out.append(('t', r))
    return out


def chapters(items):
    """Split the body at each chapter opener: 'Chapter N' then its title."""
    marks = []
    for i, (k, v) in enumerate(items):
        if k == 'p' and re.fullmatch(r'Chapter \d{1,2}', v):
            nxt = ' '.join(x[1] for x in items[i:i + 40] if x[0] == 'p')
            if 'Learning objectives' in nxt:
                marks.append((int(v.split()[1]), i))
    out = {}
    for j, (n, i) in enumerate(marks):
        end = marks[j + 1][1] if j + 1 < len(marks) else len(items)
        out[n] = items[i:end]
    return out


def main(bk=1):
    items = walk(BOOKS[bk])
    chs = chapters(items)
    os.makedirs(os.path.join(HERE, 'src'), exist_ok=True)
    print('%-4s %-56s %7s %6s %5s'
          % ('ch', 'title', 'chars', 'tables', 'figs'))
    for n in sorted(chs):
        seg = chs[n]
        # Chapter 18 runs into the appendices; cut at the glossary.
        for i, (k, v) in enumerate(seg):
            if k == 'p' and v.startswith('Appendix A'):
                seg = seg[:i]
                break
        lines, tabs, figs, cap = [], [], {}, None
        # Which section each table sits in, so a table-based handout can
        # be named after the concept rather than after itself.
        tsec, cursec = {}, ''
        for k, v in seg:
            if k == 'p':
                lines.append(v)
                # 'Figure F02-07. Caption' introduces the table below it, and
                # the book's practice items send the reader to it by number.
                # A handout has to carry the table instead, so the number is
                # remembered and the next table is filed under it.
                m = re.match(r'Figure (F\d{2,3}-\d{2})\.', v)
                cap = m.group(1) if m else cap
                m2 = re.match(r'^(\d{1,2}\.\d{1,2})\s{2}\S', v)
                if m2:
                    cursec = m2.group(1)
            else:
                if cap and cap not in figs:
                    figs[cap] = len(tabs)
                    cap = None
                if cursec:
                    tsec[str(len(tabs))] = cursec
                tabs.append(v)
                # the text file keeps a flattened copy so the fidelity checks
                # can find every figure and every account name
                for row in v:
                    for c in row:
                        if c:
                            lines.append(c)   # may itself be several lines
        txt = '\n'.join(lines)
        title = seg[1][1] if len(seg) > 1 else ''
        open(os.path.join(HERE, 'src', 'b%d_ch%02d.txt' % (bk, n)), 'w').write(txt)
        json.dump(dict(tables=tabs, figures=figs, tsec=tsec),
                  open(os.path.join(HERE, 'src', 'b%d_ch%02d.json' % (bk, n)), 'w'),
                  ensure_ascii=False)
        print('%-4d %-56s %7d %6d %5d'
              % (n, title[:56], len(txt), len(tabs), len(figs)))


if __name__ == '__main__':
    import sys
    main(int(sys.argv[1]) if len(sys.argv) > 1 else 1)
