"""Rendering engine for the TOEFL Writing guide.

Design notes
------------
Fonts are chosen so that Word on Windows and the PDF produced here lay out
identically: Cambria and Calibri are metric-compatible with Caladea and
Carlito, which is what fontconfig substitutes on this machine.  Nothing in
the book depends on a font that only exists on one of the two platforms.

Boxes are 1x1 tables.  python-docx cannot put a border round a bare
paragraph, and a shaded bordered table cell is what Word itself uses for
callouts, so it round-trips cleanly.
"""
import os, subprocess
from docx import Document
from docx.shared import Pt, Mm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

HERE = os.path.dirname(os.path.abspath(__file__))
OUT  = HERE + '/out'

# ---------------------------------------------------------------- type
SERIF = 'Cambria'        # -> Caladea when rendered here
SANS  = 'Calibri'        # -> Carlito
MONO  = 'Consolas'
BODY  = 10.5
LEAD  = 14               # minimum line box

# ---------------------------------------------------------------- colour
INK    = '1A1A1A'
NAVY   = '16365C'
TEAL   = '0F766E'
AMBER  = '9A5B00'
GREEN  = '1B6B3A'
RED    = 'B3261E'
VIOLET = '5B3E8E'
GREY   = '5A6472'

F_TASK   = 'EEF2F7'
F_PREV   = 'E7F3F1'
F_MODEL  = 'EAF4EC'
F_FOLLOW = 'FBF1E3'
F_DEGR   = 'FBEAE8'
F_KEY    = 'F3F4F6'
F_PAY    = 'F1ECF8'
F_CHIP   = 'E8ECF1'
BORDER   = 'C9D2DD'


def el(tag, **a):
    e = OxmlElement(tag)
    for k, v in a.items():
        e.set(qn(k), v)
    return e


def _shade(cell, fill):
    cell._tc.get_or_add_tcPr().append(
        el('w:shd', **{'w:val': 'clear', 'w:fill': fill}))


def _borders(cell, colour=BORDER, sz='8', sides='tblr', left_accent=None):
    tcPr = cell._tc.get_or_add_tcPr()
    b = el('w:tcBorders')
    names = {'t': 'w:top', 'b': 'w:bottom', 'l': 'w:left', 'r': 'w:right'}
    for s, name in names.items():
        if s in sides:
            c, w = colour, sz
            if s == 'l' and left_accent:
                c, w = left_accent, '24'
            b.append(el(name, **{'w:val': 'single', 'w:sz': w,
                                 'w:space': '0', 'w:color': c}))
        else:
            b.append(el(names[s], **{'w:val': 'nil'}))
    tcPr.append(b)


def _margins(cell, top=60, bottom=60, left=140, right=140):
    tcPr = cell._tc.get_or_add_tcPr()
    m = el('w:tcMar')
    for name, v in (('w:top', top), ('w:bottom', bottom),
                    ('w:left', left), ('w:right', right)):
        m.append(el(name, **{'w:w': str(v), 'w:type': 'dxa'}))
    tcPr.append(m)


def _keep(par):
    par.paragraph_format.keep_with_next = True


class Doc:
    def __init__(self):
        d = Document()
        self.d = d
        s = d.sections[0]
        s.page_width, s.page_height = Mm(210), Mm(297)
        s.left_margin = s.right_margin = Mm(19)
        s.top_margin, s.bottom_margin = Mm(17), Mm(15)
        n = d.styles['Normal']
        n.font.name = SERIF
        n.font.size = Pt(BODY)
        n.font.color.rgb = RGBColor.from_string(INK)
        pf = n.paragraph_format
        pf.space_after = Pt(0)
        pf.line_spacing_rule = WD_LINE_SPACING.AT_LEAST
        pf.line_spacing = Pt(LEAD)
        self._footer()

    def _footer(self):
        f = self.d.sections[0].footer.paragraphs[0]
        f.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r = f.add_run()
        r.font.name, r.font.size = SANS, Pt(8)
        r.font.color.rgb = RGBColor.from_string(GREY)
        fld = el('w:fldSimple', **{'w:instr': 'PAGE'})
        rr = el('w:r')
        rp = el('w:rPr')
        rp.append(el('w:rFonts', **{'w:ascii': SANS, 'w:hAnsi': SANS}))
        rp.append(el('w:sz', **{'w:val': '16'}))
        rp.append(el('w:color', **{'w:val': GREY}))
        rr.append(rp)
        fld.append(rr)
        f._p.append(fld)

    # ------------------------------------------------------- paragraphs
    def p(self, text='', size=BODY, font=SERIF, bold=False, italic=False,
          colour=None, after=4, before=0, align=None, indent=0, keep=False,
          newpage=False, space_line=None):
        par = self.d.add_paragraph()
        pf = par.paragraph_format
        pf.space_after = Pt(after)
        pf.space_before = Pt(before)
        pf.line_spacing_rule = WD_LINE_SPACING.AT_LEAST
        pf.line_spacing = Pt(space_line or LEAD)
        if indent:
            pf.left_indent = Mm(indent)
        if align is not None:
            par.alignment = align
        if keep:
            _keep(par)
        if newpage:
            pf.page_break_before = True
        if text:
            self.run(par, text, size, font, bold, italic, colour)
        return par

    def spacer(self, after=0):
        """A separator after a table.

        Word needs a paragraph between consecutive tables, but an ordinary
        empty paragraph is a full line tall; a run of them at the foot of a
        section spills onto the next page and, when the next heading forces a
        break, leaves a blank page behind. Exactly 1pt costs nothing.
        """
        par = self.d.add_paragraph()
        pf = par.paragraph_format
        pf.space_after = Pt(after)
        pf.space_before = Pt(0)
        pf.line_spacing_rule = WD_LINE_SPACING.EXACTLY
        pf.line_spacing = Pt(1)
        r = par.add_run()
        r.font.size = Pt(1)
        return par

    def drop_trailing_spacers(self):
        """Discard empty paragraphs at the end of the body.

        Call this immediately before forcing a page break. A spacer left at
        the foot of a full page is pushed onto the next one by itself, and the
        break then moves the heading on again, leaving that page blank.
        """
        body = self.d.element.body
        for child in reversed(list(body)):
            if child.tag == qn('w:sectPr'):
                continue
            if child.tag != qn('w:p'):
                break
            if ''.join(child.itertext()).strip():
                break
            body.remove(child)

    def run(self, par, text, size=BODY, font=SERIF, bold=False,
            italic=False, colour=None, underline=False):
        r = par.add_run(text)
        r.font.name = font
        r.font.size = Pt(size)
        r.bold = bold
        r.italic = italic
        r.underline = underline
        if colour:
            r.font.color.rgb = RGBColor.from_string(colour)
        return r

    def rich(self, par, parts, size=BODY, font=SERIF):
        """parts: str, or (text, {opts}) tuples."""
        for part in parts:
            if isinstance(part, tuple):
                t, o = part
                self.run(par, t, size=o.get('size', size),
                         font=o.get('font', font), bold=o.get('bold', False),
                         italic=o.get('italic', False), colour=o.get('colour'),
                         underline=o.get('underline', False))
            else:
                self.run(par, part, size=size, font=font)
        return par

    # ------------------------------------------------------- headings
    def h1(self, text, sub=None, newpage=True):
        if newpage:
            self.drop_trailing_spacers()
        par = self.p(after=1, before=0, newpage=newpage, keep=True)
        self.run(par, text, size=19, font=SANS, bold=True, colour=NAVY)
        if sub:
            s = self.p(after=8, keep=True)
            self.run(s, sub, size=10, font=SANS, colour=GREY)
        self.rule(NAVY, after=10)
        return par

    def h2(self, text, colour=NAVY, after=5, before=12):
        par = self.p(after=after, before=before, keep=True)
        self.run(par, text, size=13, font=SANS, bold=True, colour=colour)
        return par

    def h3(self, text, colour=NAVY, after=3, before=8):
        par = self.p(after=after, before=before, keep=True)
        self.run(par, text, size=10.5, font=SANS, bold=True, colour=colour)
        return par

    def eyebrow(self, text, colour=GREY, after=2, before=10):
        """small all-caps section marker"""
        par = self.p(after=after, before=before, keep=True)
        self.run(par, text.upper(), size=8, font=SANS, bold=True, colour=colour)
        return par

    def rule(self, colour=BORDER, after=6, before=0, width=100):
        t = self.d.add_table(rows=1, cols=1)
        t.alignment = WD_TABLE_ALIGNMENT.LEFT
        self._tblw(t, width)
        c = t.cell(0, 0)
        _borders(c, colour=colour, sz='6', sides='t')
        _margins(c, 0, 0, 0, 0)
        c.paragraphs[0].paragraph_format.space_after = Pt(0)
        c.paragraphs[0].paragraph_format.space_before = Pt(0)
        self._set_run_size(c.paragraphs[0], 1)
        self.spacer(after=after)
        return t

    def _set_run_size(self, par, pts):
        pf = par.paragraph_format
        pf.line_spacing_rule = WD_LINE_SPACING.EXACTLY
        pf.line_spacing = Pt(pts)

    def _tblw(self, t, pct=100):
        tblPr = t._tbl.tblPr
        tblPr.append(el('w:tblW', **{'w:w': str(int(pct * 50)), 'w:type': 'pct'}))
        tblPr.append(el('w:tblLayout', **{'w:type': 'fixed'}))

    def _nosplit(self, t):
        for row in t.rows:
            row._tr.get_or_add_trPr().append(el('w:cantSplit'))

    # ------------------------------------------------------- boxes
    def box(self, fill=F_TASK, accent=None, after=8, before=2, width=100,
            nosplit=True):
        """Returns the cell of a 1x1 shaded, bordered table. Caller fills it.

        nosplit keeps a short callout whole across a page break, which is what
        you want for a prompt or a model answer. Pass nosplit=False for a box
        that can grow past a page -- an unsplittable row that does not fit is
        moved to the next page entire, stranding its heading on a page of its
        own.
        """
        t = self.d.add_table(rows=1, cols=1)
        t.alignment = WD_TABLE_ALIGNMENT.LEFT
        self._tblw(t, width)
        c = t.cell(0, 0)
        _shade(c, fill)
        _borders(c, left_accent=accent)
        _margins(c)
        c.paragraphs[0].paragraph_format.space_after = Pt(0)
        if nosplit:
            self._nosplit(t)
        self.spacer(after=after)
        return c

    def cp(self, cell, text='', size=BODY, font=SERIF, bold=False,
           italic=False, colour=None, after=3, first=False, indent=0,
           align=None):
        """paragraph inside a box cell"""
        par = cell.paragraphs[0] if first else cell.add_paragraph()
        pf = par.paragraph_format
        pf.space_after = Pt(after)
        pf.space_before = Pt(0)
        pf.line_spacing_rule = WD_LINE_SPACING.AT_LEAST
        pf.line_spacing = Pt(LEAD)
        if indent:
            pf.left_indent = Mm(indent)
        if align is not None:
            par.alignment = align
        if text:
            self.run(par, text, size, font, bold, italic, colour)
        return par

    def bullets(self, cell, items, size=BODY, colour=None, bullet='•',
                after=2, indent=4, first=False):
        pars = []
        for i, it in enumerate(items):
            par = self.cp(cell, after=after, indent=indent,
                          first=(first and i == 0))
            self.run(par, bullet + '  ', size=size, font=SANS, colour=colour or GREY)
            if isinstance(it, list):
                self.rich(par, it, size=size)
            else:
                self.run(par, it, size=size)
            pars.append(par)
        return pars

    # ------------------------------------------------------- question block
    def qblock(self, tag, title, colour, body, fill=None):
        """A tagged question: coloured badge + title + body lines.

        body: list of str | list-of-rich-parts | ('bullets', [...]) | ('mono', [...])
        """
        t = self.d.add_table(rows=1, cols=2)
        t.alignment = WD_TABLE_ALIGNMENT.LEFT
        tblPr = t._tbl.tblPr
        tblPr.append(el('w:tblW', **{'w:w': '5000', 'w:type': 'pct'}))
        tblPr.append(el('w:tblLayout', **{'w:type': 'fixed'}))
        t.columns[0].width = Mm(13)
        t.columns[1].width = Mm(159)
        badge, main = t.cell(0, 0), t.cell(0, 1)
        for c in (badge, main):
            _borders(c, sides='')
            c.paragraphs[0].paragraph_format.space_after = Pt(0)
        _shade(badge, colour)
        _margins(badge, 40, 40, 60, 60)
        _margins(main, 20, 40, 100, 0)
        bp = badge.paragraphs[0]
        bp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        self.run(bp, tag, size=9.5, font=SANS, bold=True, colour='FFFFFF')
        tp = self.cp(main, after=3, first=True)
        self.run(tp, title, size=10.5, font=SANS, bold=True, colour=colour)
        self._emit(main, body)
        self._nosplit(t)
        self.spacer(after=5)
        return t

    def _emit(self, cell, body):
        for item in body:
            if isinstance(item, tuple) and item and item[0] == 'bullets':
                self.bullets(cell, item[1])
            elif isinstance(item, tuple) and item and item[0] == 'mono':
                for line in item[1]:
                    par = self.cp(cell, after=2, indent=4)
                    self.run(par, line, size=9.5, font=MONO, colour=NAVY)
            elif isinstance(item, tuple) and item and item[0] == 'note':
                par = self.cp(cell, after=3)
                self.run(par, item[1], size=9.5, italic=True, colour=GREY)
            elif isinstance(item, list):
                self.rich(self.cp(cell, after=3), item)
            else:
                self.cp(cell, item, after=3)

    # ------------------------------------------------------- word chips
    def chips(self, words, after=8):
        """The Build-a-Sentence draggable word tiles."""
        n = len(words)
        t = self.d.add_table(rows=1, cols=n)
        t.alignment = WD_TABLE_ALIGNMENT.CENTER
        tblPr = t._tbl.tblPr
        tblPr.append(el('w:tblW', **{'w:w': '0', 'w:type': 'auto'}))
        for i, w in enumerate(words):
            c = t.cell(0, i)
            _shade(c, F_CHIP)
            _borders(c, colour='A9B4C2', sz='8')
            _margins(c, 50, 50, 90, 90)
            par = c.paragraphs[0]
            par.alignment = WD_ALIGN_PARAGRAPH.CENTER
            par.paragraph_format.space_after = Pt(0)
            self.run(par, w, size=10, font=SANS, colour=NAVY)
        self._nosplit(t)
        self.spacer(after=after)
        return t

    def chips_in(self, cell, words, after=4):
        """The same word tiles, nested inside a box cell."""
        t = cell.add_table(rows=1, cols=len(words))
        t.alignment = WD_TABLE_ALIGNMENT.CENTER
        tblPr = t._tbl.tblPr
        tblPr.append(el('w:tblW', **{'w:w': '0', 'w:type': 'auto'}))
        for i, w in enumerate(words):
            c = t.cell(0, i)
            _shade(c, F_CHIP)
            _borders(c, colour='A9B4C2', sz='8')
            _margins(c, 40, 40, 80, 80)
            par = c.paragraphs[0]
            par.alignment = WD_ALIGN_PARAGRAPH.CENTER
            par.paragraph_format.space_after = Pt(0)
            self.run(par, w, size=9.5, font=SANS, colour=NAVY)
        self._nosplit(t)
        self.cp(cell, after=after)
        return t

    # ------------------------------------------------------- data table
    def table(self, header, rows, widths, fills=None, size=9.5,
              head_fill=NAVY, after=8):
        cols = len(header)
        t = self.d.add_table(rows=len(rows) + 1, cols=cols)
        t.alignment = WD_TABLE_ALIGNMENT.LEFT
        self._tblw(t, 100)
        total = float(sum(widths))
        for i, w in enumerate(widths):
            t.columns[i].width = Mm(172 * w / total)
        for j, h in enumerate(header):
            c = t.cell(0, j)
            _shade(c, head_fill)
            _borders(c)
            _margins(c, 40, 40, 80, 80)
            par = c.paragraphs[0]
            par.paragraph_format.space_after = Pt(0)
            self.run(par, h, size=size, font=SANS, bold=True, colour='FFFFFF')
        for i, row in enumerate(rows):
            for j, v in enumerate(row):
                c = t.cell(i + 1, j)
                _shade(c, (fills or ['FFFFFF', 'F7F9FB'])[i % 2])
                _borders(c)
                _margins(c, 40, 40, 80, 80)
                par = c.paragraphs[0]
                par.paragraph_format.space_after = Pt(0)
                par.paragraph_format.line_spacing_rule = WD_LINE_SPACING.AT_LEAST
                par.paragraph_format.line_spacing = Pt(12)
                if isinstance(v, list):
                    self.rich(par, v, size=size)
                else:
                    self.run(par, v, size=size)
        t.rows[0]._tr.get_or_add_trPr().append(el('w:tblHeader'))
        self._nosplit(t)
        self.spacer(after=after)
        return t

    def save(self, path):
        self.drop_trailing_spacers()   # else the last one makes an empty page
        self.d.save(path)


def to_pdf(docx_path, outdir=OUT):
    subprocess.run(['soffice', '--headless', '--convert-to', 'pdf',
                    docx_path, '--outdir', outdir],
                   capture_output=True, timeout=600)
    return docx_path.replace('.docx', '.pdf')
