# -*- coding: utf-8 -*-
"""The lean handout: headings, exercises, answer key, and nothing else.

One section of the textbook, turned into exercises. No content is invented and
none is explained: every fact, figure, number and term in the exercises is
already in the source section, and the handout's whole job is to make the
student produce it instead of read it.

It is deliberately a different build from book.py. There is no cover, no front
matter, no language panel, no figures and no glossary, because the brief is
four pages and furniture is what fills pages.

The format is reusable: a LEAN dict names the source section and lists its
exercises, and the renderer below walks it. Every exercise type keeps its
answers in the same structure the exercise is drawn from, so the key cannot
drift from the page.
"""
import sys, os, importlib

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import docxw as D
from docxw import (Doc, para, run, tcpr, tblpr, INDIGO, INDIGO_D, GREY, RULE,
                   SOFT, PERI, CREAM, GREEN, PLUM, TEAL, RED, INK)
from blanks import Blanks


# ------------------------------------------------------------ renderers -----
def exbar(d, label, instruction):
    """An exercise heading: the label, and what to do. One line."""
    d.body.append(para(
        [run(label + '   ', b=True, color=INDIGO, sz=21),
         run(instruction, b=True, sz=19)],
        '<w:spacing w:before="120" w:after="55"/>'
        '<w:pBdr><w:top w:val="single" w:sz="10" w:space="6" w:color="%s"/>'
        '</w:pBdr>' % INDIGO))


def mcq_compact(d, n, stem, options):
    """A multiple-choice item with the options two to a line.

    One option per line is how a book sets them and it costs four lines an
    item. At eight items that is a page, which on a four-page handout is the
    difference between fitting and not.
    """
    d.body.append(para([run('%d.  ' % n, b=True, color=INDIGO, sz=19),
                        run(stem, sz=19)],
                       '<w:spacing w:before="55" w:after="10"/>'
                       '<w:ind w:left="300" w:hanging="300"/>'))
    rows = []
    for i in range(0, len(options), 2):
        pair = options[i:i + 2]
        cells = ''
        for j, o in enumerate(pair):
            cells += '<w:tc>%s%s</w:tc>' % (
                tcpr(None, 28),
                para([run('(%s) ' % 'ABCD'[i + j], b=True, color=GREY, sz=18),
                      run(o, sz=18)]))
        if len(pair) == 1:
            cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 28), para([run(' ', sz=18)]))
        rows.append('<w:tr>%s</w:tr>' % cells)
    d.body.append('<w:tbl><w:tblPr><w:tblW w:type="pct" w:w="100%"/>'
                  '<w:tblInd w:type="dxa" w:w="300"/></w:tblPr>'
                  '<w:tblGrid><w:gridCol w:w="50"/><w:gridCol w:w="50"/>'
                  '</w:tblGrid>' + ''.join(rows) + '</w:tbl>')


def truefalse(d, items, start=1):
    """Statements with a T and an F to ring. Two columns of the narrow kind."""
    head = '<w:tr>%s</w:tr>' % (
        '<w:tc>%s%s</w:tc>' % (tcpr(INDIGO, 52),
                               para([run('Statement', b=True,
                                         color='FFFFFF', sz=17)]))
        + '<w:tc>%s%s</w:tc>' % (tcpr(INDIGO, 52),
                                 para([run('True or false?', b=True,
                                           color='FFFFFF', sz=17)],
                                      '<w:jc w:val="center"/>')))
    trs = [head]
    for i, s in enumerate(items, start):
        trs.append('<w:tr>%s%s</w:tr>' % (
            '<w:tc>%s%s</w:tc>' % (tcpr(None, 48),
                                   para([run('%d.  ' % i, b=True, sz=18),
                                         run(s, sz=18)])),
            '<w:tc>%s%s</w:tc>' % (tcpr(None, 48),
                                   para([run('T        F', b=True,
                                             color=GREY, sz=18)],
                                        '<w:jc w:val="center"/>'))))
    d.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="82"/>'
                  '<w:gridCol w:w="18"/></w:tblGrid>%s</w:tbl>'
                  % (tblpr(RULE, 4), ''.join(trs)))
    d.blank()


def matchbox(d, heads, left, right, note=''):
    """Matching, with a letter column to write in and the options beside it."""
    rows = max(len(left), len(right))
    head = '<w:tr>%s</w:tr>' % ''.join(
        '<w:tc>%s%s</w:tc>' % (tcpr(INDIGO, 52),
                               para([run(h, b=True, color='FFFFFF', sz=17)]))
        for h in ('', heads[0], '', '', heads[1]))
    trs = [head]
    for i in range(rows):
        l = left[i] if i < len(left) else ''
        r = right[i] if i < len(right) else ''
        trs.append('<w:tr>%s</w:tr>' % (
            '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 38),
                                   para([run(str(i + 1) if l else '',
                                             b=True, sz=17)]))
            + '<w:tc>%s%s</w:tc>' % (tcpr(None, 44), para([run(l, sz=17)]))
            + '<w:tc>%s%s</w:tc>' % (tcpr(None, 44),
                                     para([run('    ', u=True, sz=18)],
                                          '<w:jc w:val="center"/>'))
            + '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 38),
                                     para([run('ABCDEFGH'[i] if r else '',
                                               b=True, sz=17)]))
            + '<w:tc>%s%s</w:tc>' % (tcpr(None, 44), para([run(r, sz=17)]))))
    d.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="4"/><w:gridCol w:w="40"/>'
                  '<w:gridCol w:w="7"/><w:gridCol w:w="4"/>'
                  '<w:gridCol w:w="45"/></w:tblGrid>%s</w:tbl>'
                  % (tblpr(RULE, 4), ''.join(trs)))
    if note:
        d.body.append(para([run(note, sz=16, color=GREY)],
                           '<w:spacing w:before="40" w:after="60"/>'))
    d.blank()


def options(d, label, items, accent=PERI):
    """A lettered option list, set as a run rather than as a table.

    A second matching exercise over a list of premises the page has already
    numbered does not need the premises printed again. The options go in one
    panel and the answers go in a row of boxes, which is four lines instead of
    eight table rows — and on a four-page handout that is the difference
    between fitting and not.
    """
    rs = [run(label + '   ', b=True, color=INDIGO_D, sz=15)]
    for i, it in enumerate(items):
        if i:
            rs.append(run('   \u00b7   ', color=accent, sz=17, b=True))
        rs.append(run('%s  ' % 'ABCDEFGH'[i], b=True, sz=17))
        rs.append(run(it, sz=17))
    d.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                  '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                  % (tblpr(PERI, 4), tcpr(CREAM, 110),
                     para(rs, '<w:spacing w:line="276" w:lineRule="auto"/>')))


def letterrow(d, n, note=''):
    """A row of numbered boxes, for an exercise whose premises are elsewhere."""
    rs = []
    for i in range(1, n + 1):
        if i > 1:
            rs.append(run('        ', sz=19))
        rs.append(run('%d  ' % i, b=True, sz=19))
        rs.append(run('      ', u=True, sz=19))
    d.body.append(para(rs, '<w:spacing w:before="90" w:after="50"/>'
                       '<w:ind w:left="200"/>'))
    if note:
        d.body.append(para([run(note, sz=16, color=GREY)],
                           '<w:spacing w:after="60"/>'))
    d.blank()


def labelrow(d, items, start=1):
    """Numbered items in a run, each with a box after it.

    A seven-row classification table and a seven-item classification run hold
    the same seven decisions; the run holds them in three lines.
    """
    rs = []
    for i, it in enumerate(items, start):
        if i > start:
            rs.append(run('      ', sz=18))
        rs.append(run('%d  ' % i, b=True, color=INDIGO, sz=18))
        rs.append(run(it + '  ', sz=18))
        rs.append(run('     ', u=True, sz=18))
    d.body.append(para(rs, '<w:spacing w:before="70" w:after="60" '
                       'w:line="300" w:lineRule="auto"/><w:ind w:left="200"/>'))
    d.blank()


def tickgrid(d, heads, items, start=1):
    """Classification: one tick per row, under one of the columns."""
    head = '<w:tr>%s</w:tr>' % ''.join(
        '<w:tc>%s%s</w:tc>' % (tcpr(INDIGO, 52),
                               para([run(h, b=True, color='FFFFFF', sz=17)],
                                    '' if i == 0 else '<w:jc w:val="center"/>'))
        for i, h in enumerate(heads))
    trs = [head]
    for i, it in enumerate(items, start):
        cells = '<w:tc>%s%s</w:tc>' % (
            tcpr(None, 46), para([run('%d.  %s' % (i, it), sz=17)]))
        for _ in heads[1:]:
            cells += '<w:tc>%s%s</w:tc>' % (
                tcpr(None, 46), para([run(' ', sz=18)],
                                     '<w:jc w:val="center"/>'))
        trs.append('<w:tr>%s</w:tr>' % cells)
    w = [100 - 17 * (len(heads) - 1)] + [17] * (len(heads) - 1)
    d.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                  % (tblpr(RULE, 4),
                     ''.join('<w:gridCol w:w="%d"/>' % x for x in w),
                     ''.join(trs)))
    d.blank()


def keyblock(d, title, rows, accent=GREEN, widths=(16, 84)):
    """A key table: the item, and the answer with its reason.

    The key is set smaller and tighter than the exercises, and it never
    restates an option the student already has in front of them. Both are
    there so the whole handout stays inside four pages.
    """
    head = '<w:tr>%s</w:tr>' % ''.join(
        '<w:tc>%s%s</w:tc>' % (tcpr(accent, 50),
                               para([run(h, b=True, color='FFFFFF', sz=15)]))
        for h in ('Item', title))
    trs = [head]
    for a, b in rows:
        trs.append('<w:tr>%s%s</w:tr>' % (
            '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 45), para([run(a, b=True, sz=15)])),
            '<w:tc>%s%s</w:tc>' % (tcpr(None, 45), para([run(b, sz=15)]))))
    d.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="%d"/><w:gridCol w:w="%d"/>'
                  '</w:tblGrid>%s</w:tbl>'
                  % (tblpr(RULE, 4), widths[0], widths[1], ''.join(trs)))
    d.blank()
