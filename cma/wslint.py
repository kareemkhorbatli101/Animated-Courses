# -*- coding: utf-8 -*-
"""Structural guards that read the built .docx rather than the source.

A renderer can be wrong in ways the source looks right. The data panels in the
first build declared a one-column grid and then emitted four-cell rows, which
Word resolved by giving the first column the banner's width and squeezing the
rest; nothing in the Python said anything untrue. So these checks parse the
document that was actually produced.
"""
from __future__ import print_function

import re
import sys
import zipfile
import xml.etree.ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'

# A column narrower than this cannot hold a word, whatever is in it.
MIN_COL_PCT = 8.0
# No column may take more than this unless the table has only two.
MAX_COL_PCT = 62.0


def _tables(path):
    x = zipfile.ZipFile(path).read('word/document.xml')
    return ET.fromstring(x).iter(W + 'tbl')


def _span(tc):
    pr = tc.find(W + 'tcPr')
    if pr is None:
        return 1
    gs = pr.find(W + 'gridSpan')
    return int(gs.get(W + 'val')) if gs is not None else 1


def _width(tc):
    pr = tc.find(W + 'tcPr')
    if pr is None:
        return None
    w = pr.find(W + 'tcW')
    if w is None or w.get(W + 'type') != 'pct':
        return None
    return int(w.get(W + "w")) / 50.0


def _text(el, limit=52):
    t = ' '.join(''.join(n.text or '' for n in el.iter(W + 't')).split())
    return t[:limit]


def check_tables(path):
    """Grid, cell counts and widths must agree, in every table."""
    bad = []
    for ti, tbl in enumerate(_tables(path)):
        grid = tbl.find(W + 'tblGrid')
        ncols = len(grid.findall(W + 'gridCol')) if grid is not None else 0
        rows = tbl.findall(W + 'tr')
        if not rows:
            continue
        label = _text(tbl)
        widths = {}
        for ri, tr in enumerate(rows):
            tcs = tr.findall(W + 'tc')
            span = sum(_span(tc) for tc in tcs)
            if span != ncols:
                bad.append('table %d row %d covers %d of %d columns  | %s'
                           % (ti, ri, span, ncols, label))
                break
            if len(tcs) == ncols:
                col = 0
                for tc in tcs:
                    w = _width(tc)
                    if w is not None:
                        widths.setdefault(col, []).append(w)
                    col += _span(tc)
        if not widths or ncols < 2:
            continue
        # every row that is not a banner must agree about the widths
        for col, ws in widths.items():
            if max(ws) - min(ws) > 0.6:
                bad.append('table %d column %d is given %s in different rows '
                           '| %s' % (ti, col, sorted({round(x, 1)
                                                      for x in ws}), label))
        avg = {c: sum(v) / len(v) for c, v in widths.items()}
        total = sum(avg.values())
        if abs(total - 100.0) > 2.0:
            bad.append('table %d columns total %.0f%% of the measure | %s'
                       % (ti, total, label))
        for c, w in sorted(avg.items()):
            if w < MIN_COL_PCT:
                bad.append('table %d column %d is only %.0f%% wide | %s'
                           % (ti, c, w, label))
            if ncols > 2 and w > MAX_COL_PCT:
                bad.append('table %d column %d takes %.0f%% of the measure '
                           '| %s' % (ti, c, w, label))
    return bad


def check_layout_fixed(path):
    """A table of data must use a fixed layout, or Word re-sizes it."""
    bad = []
    for ti, tbl in enumerate(_tables(path)):
        grid = tbl.find(W + 'tblGrid')
        ncols = len(grid.findall(W + 'gridCol')) if grid is not None else 0
        if ncols < 2:
            continue
        pr = tbl.find(W + 'tblPr')
        lay = pr.find(W + 'tblLayout') if pr is not None else None
        if lay is None or lay.get(W + 'type') != 'fixed':
            bad.append('table %d has %d columns and no fixed layout | %s'
                       % (ti, ncols, _text(tbl)))
    return bad


def check_images(path):
    """Every image is referenced, and every reference resolves."""
    z = zipfile.ZipFile(path)
    names = set(z.namelist())
    doc = z.read('word/document.xml').decode()
    rels = z.read('word/_rels/document.xml.rels').decode()
    rid = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', rels))
    used = set(re.findall(r'r:embed="(rId\d+)"', doc))
    bad = []
    for r in sorted(used):
        if r not in rid:
            bad.append('image relationship %s is not declared' % r)
        elif 'word/' + rid[r].lstrip('/') not in names:
            bad.append('image file %s is missing' % rid[r])
    refd = {rid[r].split('/')[-1] for r in used if r in rid}
    for n in names:
        if n.startswith('word/media/') and n.split('/')[-1] not in refd:
            bad.append('image %s is in the package but never shown' % n)
    return bad


def check_wellformed(path):
    bad = []
    z = zipfile.ZipFile(path)
    if z.testzip() is not None:
        bad.append('the zip is damaged')
    for part in ('word/document.xml', 'word/styles.xml',
                 '[Content_Types].xml'):
        if part not in z.namelist():
            bad.append('%s is missing' % part)
            continue
        try:
            ET.fromstring(z.read(part))
        except Exception as e:
            bad.append('%s is not well formed: %s' % (part, e))
    return bad


def lint(path):
    bad = []
    bad += check_wellformed(path)
    bad += check_tables(path)
    bad += check_layout_fixed(path)
    bad += check_images(path)
    return bad


if __name__ == '__main__':
    fail = 0
    for p in sys.argv[1:]:
        bad = lint(p)
        print('%-44s %s' % (p.split('/')[-1],
                            'clean' if not bad else '%d problems' % len(bad)))
        for b in bad[:25]:
            print('    ' + b)
        fail += len(bad)
    sys.exit(1 if fail else 0)
