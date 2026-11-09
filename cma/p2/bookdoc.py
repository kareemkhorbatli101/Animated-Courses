# -*- coding: utf-8 -*-
"""Render an authored Part 2 chapter into the book itself.

Part 1's books arrived as Word documents and were parsed into src/ for the
handout toolchain. Part 2 runs the other way: the chapter is authored here as
a .src, compiled into src/ for the same toolchain, and rendered into Word by
this module. One source, two outputs, so the book a student reads and the
handouts cut from it can never describe different figures.

Nothing here invents content. Every paragraph, table, question and answer is
a line of the .src; the only drawn thing is the roadmap and the summary map,
whose boxes are the chapter's own section numbers and opening sentences.

Usage:  python3 bookdoc.py <book> [chapter ...]
"""
from __future__ import print_function
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
CMA = os.path.dirname(HERE)
sys.path.insert(0, CMA)

import docxw as D                                                 # noqa: E402
from docxw import Doc, para, run, arun, tblpr, tcpr               # noqa: E402
import wsart as A                                                 # noqa: E402

SECPAT = re.compile(r'^(\d{1,2}\.\d{1,2})\s{2}(.+)$')
CAPPAT = re.compile(r'^Figure\s+(F\d{3}-\d{2})\.\s*(.*)$')
QPAT = re.compile(r'^((?:SC|P)\d{1,3}-\d{1,2})\s{2}(.+)$')
OPTPAT = re.compile(r'^([A-D])\.\t(.+)$')
WRONGPAT = re.compile(r'^([A-D]) is wrong\.\s*(.*)$')
ANSPAT = re.compile(r'^((?:SC|P)\d{1,3}-\d{1,2})\s{2}Answer ([A-D])\.\s*(.*)$')
ARABIC = re.compile(u'[؀-ۿ]')

HEADINGS = ('Learning objectives', 'Key terms in this chapter',
            'Chapter summary', 'Practice', 'Answers and explanations',
            'Multiple-choice questions', 'Section checks', 'Your turn')

CALLOUTS = {
    'WHAT YOU ALREADY KNOW': ('What you already know', D.TEAL, 'E7F1EF'),
    'EXAM TRAP': ('Exam trap', D.RED, 'FDEEEC'),
    'WORKED EXAMPLE': ('Worked example', D.INDIGO, 'EEEFFC'),
    'LANGUAGE FOCUS': ('Language focus', D.PLUM, 'F6EEF6'),
    'TERM BRIDGE': ('Term bridge', D.INDIGO_D, 'F2F2F8'),
    'SECTION CHECK': ('Section check', D.AMBER, 'FBF1E2'),
    'YOUR TURN': ('Your turn', D.GREEN, 'EAF3EE'),
}
PROSE_BOXES = ('WHAT YOU ALREADY KNOW', 'EXAM TRAP', 'WORKED EXAMPLE',
               'LANGUAGE FOCUS')


# ----------------------------------------------------------------- parsing --
def parse(src):
    """The .src as a list of (kind, payload) blocks, in order."""
    lines = src.replace('\r\n', '\n').split('\n')
    out = []
    i = 0
    while i < len(lines):
        ln = lines[i].rstrip()
        if ln.strip() == '@table':
            rows, i = [], i + 1
            while i < len(lines) and lines[i].strip() != '@end':
                if lines[i].strip():
                    rows.append([c.strip() for c in lines[i].split('|')])
                i += 1
            i += 1
            w = max(len(r) for r in rows)
            out.append(('table', [r + [''] * (w - len(r)) for r in rows]))
            continue
        if not ln.strip():
            i += 1
            continue
        m = CAPPAT.match(ln.strip())
        if m:
            out.append(('caption', (m.group(1), m.group(2))))
            i += 1
            continue
        m = SECPAT.match(ln)
        if m:
            out.append(('section', (m.group(1), m.group(2))))
            i += 1
            continue
        if ln.strip() in HEADINGS:
            out.append(('heading', ln.strip()))
            i += 1
            continue
        if ln.startswith('Case-style practice:') or \
                ln.startswith('Case-style set:'):
            out.append(('heading', ln.strip()))
            i += 1
            continue
        lab = ln.split('   ')[0]
        if lab in CALLOUTS and '   ' in ln:
            out.append(('callout', (lab, ln.split('   ', 1)[1].strip())))
            i += 1
            continue
        m = ANSPAT.match(ln)
        if m:
            why = [m.group(3)]
            i += 1
            while i < len(lines) and WRONGPAT.match(lines[i].rstrip()):
                mm = WRONGPAT.match(lines[i].rstrip())
                why.append('%s is wrong. %s' % (mm.group(1), mm.group(2)))
                i += 1
            out.append(('answer', (m.group(1), m.group(2), why)))
            continue
        m = QPAT.match(ln)
        if m:
            opts, i = [], i + 1
            while i < len(lines) and OPTPAT.match(lines[i].rstrip('\n')):
                opts.append(OPTPAT.match(lines[i].rstrip('\n')).group(2))
                i += 1
            if len(opts) == 4:
                out.append(('question', (m.group(1), m.group(2), opts)))
                continue
            out.append(('para', ln.strip()))
            continue
        out.append(('para', ln.strip()))
        i += 1
    return out


# ---------------------------------------------------------------- drawings --
def _sections(blocks):
    """(number, title, opening sentence) for every section of the chapter."""
    got, cur = [], None
    for kind, payload in blocks:
        if kind == 'section':
            cur = [payload[0], payload[1], '']
            got.append(cur)
        elif kind == 'para' and cur is not None and not cur[2]:
            s = re.split(r'(?<=[.;])\s', payload)[0]
            cur[2] = s if len(s) < 150 else s[:147] + '...'
    return [tuple(g) for g in got]


def roadmap_png(secs, caption):
    """The chapter's own sections, in order, as a chain of boxes."""
    W, pad, gap = 1000, 14, 14
    n = max(1, len(secs))
    per = n if n <= 3 else (n + 1) // 2
    rows = [secs[i:i + per] for i in range(0, n, per)] or [[]]
    bw = (W - 2 * pad - (per - 1) * gap) / float(per)
    bh = 104
    g, y = [], pad
    for r, row in enumerate(rows):
        x = pad
        for k, (num, title, _s) in enumerate(row):
            g.append(A.box(x, y, bw, bh, num,
                           body=title, tsz=20, bsz=16))
            if k:
                g.append(A.arrow(x - gap - 1, y + bh / 2, x - 3, y + bh / 2))
            x += bw + gap
        y += bh + gap + 10
    h = int(y + 4)
    return A.render(''.join(g), W, h)


def summary_png(secs):
    """One box a section, carrying the sentence the section opens on."""
    W, pad = 1000, 14
    g, y = [], pad
    for num, title, rule in secs:
        body = rule or title
        bh = max(74, int(A.wrapped_h(body, W - 2 * pad - 40, 16) + 54))
        g.append(A.box(pad, y, W - 2 * pad, bh, '%s  %s' % (num, title),
                       body=body, tsz=19, bsz=16))
        y += bh + 12
    return A.render(''.join(g), W, int(y + 2))


# --------------------------------------------------------------- rendering --
def _widths(rows):
    w = [max(len(r[c]) for r in rows) for c in range(len(rows[0]))]
    tot = float(sum(w)) or 1.0
    out = [max(8, int(round(100 * x / tot))) for x in w]
    out[-1] += 100 - sum(out)
    return out


def table(d, rows, accent=None):
    accent = accent or D.INDIGO
    head, body = rows[0], rows[1:]
    gcol = ''.join('<w:gridCol w:w="%d"/>' % x for x in _widths(rows))
    cells = ['<w:tr>' + ''.join(
        '<w:tc>%s%s</w:tc>' % (tcpr(accent, 90),
                               para([run(h, b=True, color='FFFFFF', sz=18)]))
        for h in head) + '</w:tr>']
    for r in body:
        tr = []
        for c in r:
            if ARABIC.search(c):
                p = para([arun(c, sz=18)], '<w:bidi/><w:jc w:val="right"/>')
            else:
                p = para([run(c, sz=18)])
            tr.append('<w:tc>%s%s</w:tc>' % (tcpr(None, 90), p))
        cells.append('<w:tr>' + ''.join(tr) + '</w:tr>')
    d.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                  % (tblpr(D.RULE), gcol, ''.join(cells)))
    d.blank()


def boxed(d, label, title, prose):
    name, col, fill = CALLOUTS[label]
    ps = [para([run(name.upper() + '   ', b=True, color=col, sz=17),
                run(title, b=True, color=col, sz=20)],
               '<w:spacing w:after="50"/>')]
    for t in prose:
        ps.append(para([run(t, sz=20)],
                       '<w:spacing w:after="60" w:line="290" '
                       'w:lineRule="auto"/>'))
    d.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                  '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                  % (tblpr(col, 4), tcpr(fill, 150), ''.join(ps)))
    d.blank()


def tag(d, label, title):
    name, col, _fill = CALLOUTS[label]
    d.body.append(para([run(name.upper() + '   ', b=True, color=col, sz=17),
                        run(title, b=True, color=col, sz=21)],
                       '<w:spacing w:after="40" w:before="140"/>'))


def question(d, num, stem, opts):
    d.body.append(para([run(num + '   ', b=True, color=D.INDIGO_D, sz=20),
                        run(stem, sz=21)],
                       '<w:spacing w:after="30" w:before="60"/>'
                       '<w:ind w:left="200"/>'))
    for k, o in enumerate(opts):
        d.body.append(para([run('%s.   ' % 'ABCD'[k], sz=20), run(o, sz=20)],
                           '<w:spacing w:after="14"/><w:ind w:left="560"/>'))


def answer(d, num, letter, why):
    d.body.append(para([run(num + '   ', b=True, color=D.INDIGO_D, sz=20),
                        run('Answer %s.  ' % letter, b=True,
                            color=D.GREEN, sz=20),
                        run(why[0], sz=20)],
                       '<w:spacing w:after="20" w:before="60"/>'
                       '<w:ind w:left="200"/>'))
    for t in why[1:]:
        d.body.append(para([run(t, sz=19, color=D.GREY)],
                           '<w:spacing w:after="12"/><w:ind w:left="560"/>'))


def chapter(d, blocks, hdr=None):
    secs = _sections(blocks)
    pend_cap = None
    i, n = 0, len(blocks)
    # the frame: Chapter N / title / Arabic title / the opening paragraphs
    d.strapline(blocks[0][1])
    d.unit_title(blocks[1][1])
    d.body.append(para([arun(blocks[2][1], sz=26, b=True, color=D.INDIGO_D)],
                       '<w:bidi/><w:jc w:val="right"/>'
                       '<w:spacing w:after="150"/>'))
    i = 3
    while i < n:
        kind, payload = blocks[i]
        i += 1
        if kind == 'caption':
            pend_cap = payload
            nxt = blocks[i][0] if i < n else None
            if nxt == 'table':
                continue
            low = payload[1].lower()
            if 'roadmap' in low:
                png, pw, ph = roadmap_png(secs, payload[1])
            elif 'summary map' in low:
                png, pw, ph = summary_png(secs)
            else:
                continue
            d.figure(png, pw, ph,
                     caption='Figure %s. %s' % (payload[0], payload[1]))
            pend_cap = None
            continue
        if kind == 'table':
            if pend_cap:
                d.body.append(para(
                    [run('Figure %s.  ' % pend_cap[0], b=True,
                         color=D.INDIGO, sz=18),
                     run(pend_cap[1], color=D.GREY, sz=18)],
                    '<w:spacing w:after="40" w:before="90"/>'))
                pend_cap = None
            table(d, payload)
            continue
        if kind == 'section':
            d.partbar('%s  %s' % payload, 'SECTION')
            continue
        if kind == 'heading':
            d.h3(payload)
            continue
        if kind == 'callout':
            lab, title = payload
            if lab in PROSE_BOXES:
                prose = []
                while i < n and blocks[i][0] == 'para':
                    prose.append(blocks[i][1])
                    i += 1
                boxed(d, lab, title, prose)
            else:
                tag(d, lab, title)
            continue
        if kind == 'question':
            question(d, *payload)
            continue
        if kind == 'answer':
            answer(d, *payload)
            continue
        d.body_p(payload)


TITLES = {5: (u'CMA Part 2 · Book 1 · Reading the Statements',
              u'Section A: Financial Statement Analysis — chapters 1 to 18'),
          6: (u'CMA Part 2 · Book 2 · Paying for It',
              u'Section B: Corporate Finance — chapters 1 to 18')}


def build(bk, chs, out):
    title, sub = TITLES.get(bk, ('CMA Part 2 · Book %d' % bk, ''))
    d = Doc(title, sub)
    d.unit_title(title)
    d.strapline(sub)
    d.cefr(u'Orontes Foods, Inc. — the company of Part 1, read as an '
           u'analyst reads it')
    for k, ch in enumerate(chs):
        src = open(os.path.join(HERE, 'b%d' % bk, 'ch%02d.src' % ch),
                   encoding='utf8').read()
        hdr = d.header('%s' % title, 'Chapter %d' % ch)
        d.page_break_section(hdr=hdr, restart=(k == 0))
        chapter(d, parse(src))
    d.save(out)
    return out


def main(argv):
    bk = int(argv[1]) if len(argv) > 1 else 5
    chs = [int(x) for x in argv[2:]] or sorted(
        int(m.group(1)) for m in
        (re.match(r'^ch(\d+)\.src$', f)
         for f in os.listdir(os.path.join(HERE, 'b%d' % bk))) if m)
    name = {5: 'CMA_Part2_Book1_Reading_the_Statements.docx',
            6: 'CMA_Part2_Book2_Paying_for_It.docx'}.get(
                bk, 'CMA_Part2_Book%d.docx' % bk)
    out = os.path.join(os.path.dirname(CMA), name)
    build(bk, chs, out)
    print('%s  %d chapters' % (out, len(chs)))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
