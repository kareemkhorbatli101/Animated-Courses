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
                                     para([run('ABCDEFGHIJKLMNOPQRSTUVWX'[i] if r else '',
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


# ---------------------------------------------------------------------------
# The chapter-handout format: everything below serves a handout that converts
# one section of the textbook and refers to nothing outside itself.
# ---------------------------------------------------------------------------

def datapanel(d, title, rows, accent=PLUM):
    """The data an exercise needs, printed inside the exercise.

    This is what self-sufficiency costs and what it buys. The same six Orontes
    transactions are printed in three handouts, because a handout that says
    "the transactions from Exercise 4" cannot be taught on its own day.

    rows: strings, or (label, text) pairs, or a list of lists for a grid.
    """
    ps = [para([run('DATA   ', b=True, color='FFFFFF', sz=14),
                run(title, b=True, color='FFFFFF', sz=15)],
               '<w:spacing w:after="0"/>')]
    head = '<w:tr><w:tc>%s%s</w:tc></w:tr>' % (tcpr(accent, 46), ''.join(ps))
    body = []
    for r in rows:
        if isinstance(r, str):
            body.append(para([run(r, sz=17)],
                             '<w:spacing w:after="30" w:line="268" '
                             'w:lineRule="auto"/>'))
        else:
            body.append(para([run(r[0] + '   ', b=True, sz=17),
                              run(r[1], sz=17)],
                             '<w:ind w:left="200" w:hanging="200"/>'
                             '<w:spacing w:after="25"/>'))
    cell = '<w:tr><w:tc>%s%s</w:tc></w:tr>' % (tcpr(CREAM, 100), ''.join(body))
    d.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                  '%s%s</w:tbl>' % (tblpr(accent, 4), head, cell))
    d.blank()


def datagrid(d, title, heads, rows, accent=PLUM, widths=None):
    """Data that is itself a table: a trial balance, a list of transactions."""
    d.body.append(para([run('DATA   ', b=True, color='FFFFFF', sz=14),
                        run(title, b=True, color='FFFFFF', sz=15)],
                       '<w:spacing w:before="110" w:after="30"/>'
                       '<w:ind w:left="120"/>'
                       '<w:shd w:fill="%s" w:val="clear"/>' % accent))
    n = len(heads)
    widths = widths or [100 // n] * n
    head = '<w:tr>%s</w:tr>' % ''.join(
        '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 42),
                               para([run(h, b=True, color=INDIGO_D, sz=16)]))
        for h in heads)
    trs = [head]
    for r in rows:
        trs.append('<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(None, 40), para([run(str(c), sz=16)]))
            for c in r))
    d.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                  % (tblpr(RULE, 4),
                     ''.join('<w:gridCol w:w="%d"/>' % w for w in widths),
                     ''.join(trs)))
    d.blank()


def filltable(d, heads, rows, nums, widths=None, accent=INDIGO):
    """T5, fill in the table.

    rows: [(cells, kind)] where kind is 'w' for a worked row printed in full
    and 'd' for a row the student completes. A cell given as None is the
    student's to supply and is drawn as a ruled box carrying its item number;
    any other cell is printed. A missing cell may be a figure, a word, or both
    in the same table, which is the whole point of the type: the pattern that
    carries an amount also carries an account name and a classification.

    nums: an iterator of item numbers, consumed left to right, top to bottom,
    so the key is one flat list in reading order.
    """
    n = len(heads)
    widths = widths or [100 // n] * n
    out = ['<w:tr>' + ''.join(
        '<w:tc>%s%s</w:tc>' % (tcpr(accent, 52),
                               para([run(h, b=True, color='FFFFFF', sz=16)]))
        for h in heads) + '</w:tr>']
    for cells, kind in rows:
        tcs = ''
        for i, c in enumerate(cells):
            if c is None:
                k = next(nums)
                tcs += ('<w:tc><w:tcPr><w:tcBorders><w:bottom w:val="single" '
                        'w:sz="6" w:color="%s"/></w:tcBorders><w:tcMar>'
                        '<w:top w:type="dxa" w:w="80"/>'
                        '<w:left w:type="dxa" w:w="80"/>'
                        '<w:bottom w:type="dxa" w:w="80"/></w:tcMar></w:tcPr>'
                        '%s</w:tc>'
                        % (PERI, para([run('%d' % k, b=True, color=PERI,
                                           sz=14)])))
            elif kind == 'w':
                tcs += '<w:tc>%s%s</w:tc>' % (
                    tcpr('EFF0FB', 52),
                    para([run(str(c), sz=17, b=(i > 0),
                              color=INDIGO_D if i > 0 else None)]))
            else:
                tcs += '<w:tc>%s%s</w:tc>' % (tcpr(None, 52),
                                              para([run(str(c), sz=17)]))
        out.append('<w:tr>%s</w:tr>' % tcs)
    d.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                  % (tblpr(RULE, 4),
                     ''.join('<w:gridCol w:w="%d"/>' % w for w in widths),
                     ''.join(out)))
    d.blank()


def oddoneout(d, groups, nums):
    """T7. Four items from the chapter, one of which does not belong."""
    for items in groups:
        k = next(nums)
        rs = [run('%d  ' % k, b=True, color=INDIGO, sz=18)]
        for i, it in enumerate(items):
            if i:
                rs.append(run('   ·   ', color=PERI, sz=18, b=True))
            rs.append(run('(%s) ' % 'abcd'[i], b=True, color=GREY, sz=18))
            rs.append(run(it, sz=18))
        rs.append(run('      ', sz=18))
        rs.append(run('     ', u=True, sz=18))
        d.body.append(para(rs, '<w:spacing w:before="60" w:after="40" '
                           'w:line="280" w:lineRule="auto"/>'
                           '<w:ind w:left="300" w:hanging="300"/>'))
    d.blank()


def sequence(d, items, nums, note=''):
    """T8. Put the items in the order the chapter gives them."""
    rs = []
    for it in items:
        if rs:
            rs.append(run('   ·   ', color=PERI, sz=18, b=True))
        rs.append(run(it, sz=18))
    d.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                  '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                  % (tblpr(PERI, 4), tcpr(CREAM, 100),
                     para(rs, '<w:spacing w:line="272" w:lineRule="auto"/>')))
    rs = []
    for i in range(len(items)):
        k = next(nums)
        if i:
            rs.append(run('      ', sz=19))
        rs.append(run('%d  ' % (i + 1), b=True, color=INDIGO, sz=16))
        rs.append(run('        ', u=True, sz=19))
        rs.append(run(' %d' % k, color=PERI, sz=13))
    d.body.append(para(rs, '<w:spacing w:before="90" w:after="50"/>'
                       '<w:ind w:left="200"/>'))
    if note:
        d.body.append(para([run(note, sz=16, color=GREY)],
                           '<w:spacing w:after="50"/>'))
    d.blank()


def checkbar(d, page, span, pass_mark, redo):
    """The gate at the foot of a page.

    The key is a separate sheet, which is what makes this usable: a student
    marks the page they have just done before starting the next one, and the
    bar names the page to redo rather than the answer to read.
    """
    d.body.append(para(
        [run('CHECK   ', b=True, color='FFFFFF', sz=15),
         run('Page %d' % page, b=True, color='FFFFFF', sz=17),
         run('   ·   items %s   ·   ' % span, color='FFFFFF', sz=15),
         run('fewer than %d right: ' % pass_mark, color='FFFFFF', sz=15),
         run(redo, b=True, color='FFFFFF', sz=15)],
        '<w:spacing w:before="150" w:after="60"/>'
        '<w:ind w:left="130" w:right="130"/>'
        '<w:shd w:fill="%s" w:val="clear"/>' % INDIGO_D))


def pagebreak(d):
    d.body.append(para([run(' ', sz=2)], '<w:spacing w:after="0"/>'
                       '<w:pageBreakBefore w:val="true"/>'))


def keyblock2(d, pairs, accent=GREEN):
    """A two-column key, for a handout whose answers are short.

    One column of 70 short answers runs to two sheets. The key is specified to
    be one sheet, so a key whose average answer is under 26 characters is set
    in two columns.
    """
    head = '<w:tr>%s</w:tr>' % ''.join(
        '<w:tc>%s%s</w:tc>' % (tcpr(accent, 44),
                               para([run(h, b=True, color='FFFFFF', sz=15)]))
        for h in ('#', 'Answer', '#', 'Answer'))
    trs = [head]
    for (a1, b1), (a2, b2) in pairs:
        trs.append('<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(SOFT if i % 2 == 0 else None, 40),
                                   para([run(v, b=(i % 2 == 0), sz=15)]))
            for i, v in enumerate((a1, b1, a2, b2))))
    d.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="6"/><w:gridCol w:w="44"/>'
                  '<w:gridCol w:w="6"/><w:gridCol w:w="44"/></w:tblGrid>%s</w:tbl>'
                  % (tblpr(RULE, 4), ''.join(trs)))
    d.blank()


def keyblock3(d, rows, accent=GREEN):
    """The answers, three columns to a sheet.

    The key is specified to be one sheet per handout, and a handout carries up
    to 78 items. Three columns of number-and-answer fit that in about half a
    sheet, which leaves room underneath for the reasons worth printing.
    """
    import math
    n = len(rows)
    per = int(math.ceil(n / 3.0))
    cols = [rows[0:per], rows[per:2 * per], rows[2 * per:]]
    cols = [c + [('', '')] * (per - len(c)) for c in cols]
    head = '<w:tr>%s</w:tr>' % ''.join(
        '<w:tc>%s%s</w:tc>' % (tcpr(accent, 40),
                               para([run(h, b=True, color='FFFFFF', sz=14)]))
        for h in ('#', 'Answer', '#', 'Answer', '#', 'Answer'))
    trs = [head]
    for i in range(per):
        cells = ''
        for c in cols:
            num, ans = c[i]
            cells += '<w:tc>%s%s</w:tc>' % (
                tcpr(SOFT, 36), para([run(num, b=True, sz=14)]))
            cells += '<w:tc>%s%s</w:tc>' % (
                tcpr(None, 36), para([run(ans, sz=14)]))
        trs.append('<w:tr>%s</w:tr>' % cells)
    d.body.append('<w:tbl>%s<w:tblGrid>'
                  '<w:gridCol w:w="5"/><w:gridCol w:w="28"/>'
                  '<w:gridCol w:w="5"/><w:gridCol w:w="28"/>'
                  '<w:gridCol w:w="5"/><w:gridCol w:w="29"/>'
                  '</w:tblGrid>%s</w:tbl>' % (tblpr(RULE, 4), ''.join(trs)))
    d.blank()


def keywhy(d, rows, accent=TEAL):
    """The reasons worth printing, under the answers, on the same sheet."""
    if not rows:
        return
    d.body.append(para([run('Why, where it is worth saying', b=True,
                            color=accent, sz=17)],
                       '<w:spacing w:before="110" w:after="50"/>'
                       '<w:pBdr><w:top w:val="single" w:sz="8" w:space="5" '
                       'w:color="%s"/></w:pBdr>' % accent))
    for num, why in rows:
        d.body.append(para([run('%s   ' % num, b=True, color=accent, sz=15),
                            run(why, sz=15)],
                           '<w:ind w:left="300" w:hanging="300"/>'
                           '<w:spacing w:after="25"/>'))
    d.blank()
