# -*- coding: utf-8 -*-
"""Estimate the rendered page count of a hand-written .docx.

LibreOffice is unusable in this container (it rejects a reference python-docx
file too), so the page count cannot be measured by rendering. This walks the
document body in order and accumulates block heights against the usable page
area taken from the file's own sectPr, breaking a page whenever the accumulator
overflows or an explicit break is reached.

It is an estimate. The known sources of error are listed at the bottom.
"""
import sys, re, math, zipfile
import xml.etree.ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
WP = '{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}'

EMU_PER_TWIP = 635.0
DEFAULT_SZ = 19          # half-points, the commonest body size in these files
CHAR_EM = 0.50           # average glyph advance as a fraction of the font size
LINE_FACTOR = 1.18       # single line spacing, as Word lays a serif out
CELL_PAD = 90            # twips of padding per table row


def _geom(body):
    """Usable width and height in twips, from the document's own last sectPr."""
    sect = body.find(W + 'sectPr')
    if sect is None:
        for p in body.iter(W + 'sectPr'):
            sect = p
    sz, mar = sect.find(W + 'pgSz'), sect.find(W + 'pgMar')
    h = int(sz.get(W + 'h'))
    w = int(sz.get(W + 'w'))
    return (w - int(mar.get(W + 'left')) - int(mar.get(W + 'right')),
            h - int(mar.get(W + 'top')) - int(mar.get(W + 'bottom')))


def _text(el):
    return ''.join(t.text or '' for t in el.iter(W + 't'))


def _size(p):
    sz = p.find('.//' + W + 'sz')
    return int(sz.get(W + 'val')) if sz is not None else DEFAULT_SZ


def _spacing(p):
    pr = p.find(W + 'pPr')
    if pr is None:
        return 0, 0, None
    sp = pr.find(W + 'spacing')
    if sp is None:
        return 0, 0, None
    return (int(sp.get(W + 'before', 0)), int(sp.get(W + 'after', 0)),
            sp.get(W + 'line'))


def _para_height(p, width):
    """A paragraph's height, including an image if it holds one."""
    before, after, line = _spacing(p)
    ext = p.find('.//' + WP + 'extent')
    if ext is not None:
        return int(ext.get('cy')) / EMU_PER_TWIP + before + after
    txt = _text(p)
    pt = _size(p) / 2.0
    lh = (int(line) if line else pt * 20 * LINE_FACTOR)
    per_line = max(1.0, width / (pt * 20 * CHAR_EM))
    lines = max(1, math.ceil(len(txt) / per_line)) if txt else 1
    return lines * lh + before + after


def _table_height(tbl, width):
    total = 0
    for tr in tbl.findall(W + 'tr'):
        cells = tr.findall(W + 'tc')
        if not cells:
            continue
        cw = width / len(cells)
        tallest = 0
        for tc in cells:
            h = sum(_para_height(p, cw) for p in tc.findall(W + 'p'))
            tallest = max(tallest, h)
        total += tallest + CELL_PAD
    return total


def pages(path):
    z = zipfile.ZipFile(path)
    root = ET.fromstring(z.read('word/document.xml'))
    body = root.find(W + 'body')
    width, height = _geom(body)
    n, used = 1, 0.0
    for el in body:
        if el.tag == W + 'sectPr':
            continue
        if el.tag == W + 'p':
            # an explicit page break, or a section break carried in the pPr
            brk = any(b.get(W + 'type') == 'page' for b in el.iter(W + 'br'))
            h = _para_height(el, width)
            if brk:
                n += 1
                used = 0.0
                continue
            if used + h > height:
                n += 1
                used = 0.0
            used += h
            pr = el.find(W + 'pPr')
            if pr is not None and pr.find(W + 'sectPr') is not None:
                n += 1
                used = 0.0
        elif el.tag == W + 'tbl':
            h = _table_height(el, width)
            # a long table flows across pages rather than jumping to a new one
            while used + h > height:
                h -= (height - used)
                n += 1
                used = 0.0
            used += h
    return n


if __name__ == '__main__':
    for f in sys.argv[1:]:
        print('%-56s %4d' % (f.split('/')[-1], pages(f)))
