# -*- coding: utf-8 -*-
"""Render a summary handout and its answer key.

One exercise type on the sheet, so one renderer: a numbered gap, a word
list, and the chapter's tables with some cells taken out. Every gap carries
its number inline so that marking against the key is a matter of reading
down a column rather than counting underscores.
"""
from __future__ import print_function

import importlib
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import wsdoc                      # noqa: E402
import wssum                      # noqa: E402
from wsart import render          # noqa: E402,F401
from wsdoc import (para, run, cell, row, table, banner, widths_for,  # noqa
                   INDIGO, GREY, GREY_L, CREAM, PAPER, PERI, TEAL, PLUM)

PAGE_H = 9.1 * 1440.0
LIMIT = 0.93


class Doc(wsdoc.WDoc):
    """The summary sheet's own blocks, on top of the shared renderer."""

    def sumbar(self, title, sub):
        self.body.append(table([row([cell(
            ''.join([wsdoc._p(title, 22, True, 'FFFFFF', 50, 14),
                     wsdoc._p(sub, 16, False, 'E8EAF6', 0, 46)]),
            100.0, INDIGO, 110)])], [100.0], INDIGO, 8))
        self.blank()

    def divider(self, text):
        self.body.append(table([row([cell(
            wsdoc._p(text, 19, True, INDIGO, 30, 30), 100.0, 'F2F4FB', 80)])],
            [100.0], INDIGO, 4))
        self.blank()

    def sumhead(self, n, note=''):
        rs = [run('Summary %d' % n, b=True, color=INDIGO, sz=18)]
        if note:
            rs.append(run('      ' + note, color=GREY, sz=16))
        self.body.append(para(rs, '<w:spacing w:before="44" w:after="14"/>'))

    def gapped(self, parts, first, sz=19):
        """The summary, with each gap numbered where it stands."""
        rs, k = [], first
        for p in parts:
            if isinstance(p, int):
                rs.append(run(' (%d) ' % k, b=True, color=PERI, sz=15))
                rs.append(run(' ' * max(8, p), u=True, sz=sz))
                rs.append(run(' ', sz=sz))
                k += 1
            else:
                rs.append(run(p, sz=sz))
        self.body.append(para(rs, '<w:spacing w:before="20" w:after="20" '
                                  'w:line="360" w:lineRule="auto"/>'
                                  '<w:ind w:left="200"/>'))

    def wordlist(self, words):
        self.body.append(table([row([cell(
            ''.join([wsdoc._p('word list', 14, True, GREY, 18, 6),
                     wsdoc._p('   ·   '.join(words), 16, True, INDIGO,
                              0, 18)]),
            100.0, CREAM, 70)])], [100.0], CREAM, 4))
        self.blank()

    def figblock(self, fig):
        """A figure with its gaps already numbered inside it."""
        self.body.append(para(
            [run(fig['title'], b=True, color=INDIGO, sz=18)],
            '<w:spacing w:before="44" w:after="10"/>'))
        if fig.get('note'):
            self.body.append(wsdoc._p(fig['note'], 15, False, GREY, 0, 12))
        self.figure(fig['png'], fig['w'], fig['h'])

    def plainsum(self, text, sz=19):
        self.body.append(para([run(text, sz=sz)],
                              '<w:spacing w:before="20" w:after="20" '
                              'w:line="360" w:lineRule="auto"/>'
                              '<w:ind w:left="200"/>'))

    def gaptable(self, title, head, rows, first):
        """A table of the chapter with numbered writing slots."""
        w = widths_for([head] + [[c for c in r] for r in rows])
        out = [banner(title, w, INDIGO)]
        out.append(row([cell(wsdoc._p(h, 15, True, 'FFFFFF', 30, 30), w[j],
                             INDIGO, 80) for j, h in enumerate(head)]))
        k = first
        for i, r in enumerate(rows):
            cs = []
            for j, c in enumerate(list(r)[:len(w)]):
                if c == '':
                    cs.append(cell(
                        para([run('(%d)' % k, b=True, color=PERI, sz=14)],
                             '<w:spacing w:before="46" w:after="46"/>'),
                        w[j], PAPER, 80))
                    k += 1
                else:
                    cs.append(cell(wsdoc._p(str(c), 15, before=28, after=28),
                                   w[j], CREAM if i % 2 else None, 80))
            out.append(row(cs))
        self.body.append(table(out, w, INDIGO, 6))
        self.blank()

    def reftable(self, title, head, rows):
        self.datapanel(title, [head] + [list(r) for r in rows])

    def keylist(self, pairs, cols=2):
        """The answers, numbered, in columns."""
        w = [100.0 / cols] * cols
        per = (len(pairs) + cols - 1) // cols
        out = []
        for i in range(per):
            cs = []
            for c in range(cols):
                j = i + c * per
                if j < len(pairs):
                    n, a = pairs[j]
                    xml = para([run('%d  ' % n, b=True, color=PERI, sz=16),
                                run(a, sz=16)],
                               '<w:spacing w:before="12" w:after="12"/>')
                else:
                    xml = wsdoc._p('', 16)
                cs.append(cell(xml, w[c], None, 50))
            out.append(row(cs))
        self.body.append(table(out, w, PAPER, 0))
        self.blank()

    def keypassage(self, n, text):
        self.body.append(para(
            [run('Summary %d   ' % n, b=True, color=INDIGO, sz=15),
             run(text, sz=15, color=GREY)],
            '<w:spacing w:before="20" w:after="20"/>'
            '<w:ind w:left="240" w:hanging="240"/>'))


def _height(xml):
    return wsdoc._EST(xml) if hasattr(wsdoc, '_EST') else 0


def render_sheet(d, H, pre=0):
    """Lay out one handout, breaking pages where the measure says to."""
    import wsbuild
    h = wsbuild._height
    start = len(d.body)
    d.sumbar('%s  %s' % (H['sec'], H['title']), H['sub'])
    d.body.append(wsdoc._p(
        'Fill every gap. Each word list holds one word more than there are '
        'gaps.', 17, False, GREY, 10, 40))
    spans, nsum = [], 0
    for b in H['blocks']:
        a = len(d.body)
        if b['kind'] == 'divider':
            d.divider(b['title'])
        elif b['kind'] == 'prose':
            nsum += 1
            d.sumhead(nsum, 'gaps %d–%d'
                      % (b['_first'], b['_first'] + len(b['answers']) - 1))
            d.gapped(b['parts'], b['_first'])
            d.wordlist(b['bank'])
            b['_sum'] = nsum
        elif b['kind'] == 'plain':
            # Too short to take three gaps out of without wrecking it. It is
            # still part of the summary, so it goes on as a line of text
            # rather than as a numbered block with nothing to fill in.
            d.plainsum(b['text'])
        elif b['kind'] == 'table':
            d.gaptable(b['title'], b['head'], b['rows'], b['_first'])
            d.wordlist(b['bank'])
        elif b['kind'] == 'fig':
            d.figblock(b)
            d.wordlist(b['bank'])
        else:
            d.reftable(b['title'], b['head'], b['rows'])
        spans.append((a, len(d.body)))
    if H.get('terms'):
        a = len(d.body)
        d.reftable('The English this sheet uses, and its Arabic',
                   ['English (exam term)', 'Arabic'],
                   [[e, ar] for e, ar in H['terms']])
        spans.append((a, len(d.body)))
    before = sum(h(x) for x in d.body[pre:start])
    pages = 1 + wsbuild.paginate(d, [('x',)] * len(spans), spans, before)
    H['gapcount'] = sum(len(b.get('answers') or []) for b in H['blocks'])
    return pages


def render_key(d, H):
    d.keyhead('Answer key · %s  %s' % (H['sec'], H['title']))
    pairs = []
    for b in H['blocks']:
        if '_first' in b and b.get('answers'):
            for i, a in enumerate(b['answers']):
                pairs.append((b['_first'] + i, a))
    d.keylist(sorted(pairs))
    d.body.append(wsdoc._p('the summaries in full', 18, True, INDIGO, 50, 14))
    for b in H['blocks']:
        if b['kind'] == 'prose':
            full, k = [], 0
            for p in b['parts']:
                if isinstance(p, int):
                    full.append(b['answers'][k])
                    k += 1
                else:
                    full.append(p)
            d.keypassage(b['_sum'], ''.join(full).strip())


def build(bk=1, n=1, out=None, chapters=None):
    """Every section of a chapter as one document: sheet then key."""
    hs = wssum.build_chapter(bk, n)
    d = Doc('CMA Part 1 · Book %d · Chapter %d' % (bk, n),
            'Summary handouts')
    for H in hs:
        pre = len(d.body)
        pages = render_sheet(d, H, pre)
        H['pages'] = pages
        d.page_break_section(
            hdr=d.header('Summary handout %s · %s' % (H['id'], H['title']),
                         'Handout %s' % H['id'], total=pages), restart=True)
        khdr = d.header('Answer key · %s' % H['id'], 'Answer key')
        render_key(d, H)
        d.page_break_section(hdr=khdr, restart=True)
    out = out or os.path.join(os.path.dirname(HERE),
                              'CMA_Summaries_B%d_Ch%02d.docx' % (bk, n))
    d.save(out)
    return hs, out


if __name__ == '__main__':
    hs, out = build(1, 1)
    for H in hs:
        print('%-5s %-46s pages %d  gaps %d'
              % (H['id'], H['title'][:46], H['pages'], H['gapcount']))
    print('->', out)
