#!/usr/bin/env python3
"""
render.py — the design system of English for Foreign Ministry Staff Members, decoded
from the source's own OOXML and rebuilt from scratch with zipfile.

This is the most heavily designed of the six source books: an A4 page inside a grey
border, a running header and a Page-n-of-N footer, a coloured bar at the head of every
part, pale-yellow instruction boxes, colour-coded dialogue speakers, four kinds of table,
and a 20,000-word answer key set in pale-green panels.
"""
import os, re, zipfile, datetime

NS = ('xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
      'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
      'xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" '
      'xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" '
      'mc:Ignorable="w14 w15"')

# the source's own palette, colour for colour
PART_FILL = {"Warm Up": "FF9900", "1": "0066CC", "2": "009688", "3": "9C27B0",
             "4": "E91E63", "5": "4CAF50", "6": "0066CC", "7": "0066CC", "8": "0066CC"}
SPEAKER = ("7B2D8B", "1A56A0")          # purple for a female voice, blue for a male
SCRIPT_SPEAKER = ("990099", "0066CC")   # the same two in Appendix A, one shade stronger

NUM_BULLET = 1
NUM_DECIMAL = 2


def esc(t):
    return (t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def rpr(bold=None, color=None, sz=None, under=False, fill=None):
    p = "<w:rPr>"
    if bold is True:
        p += "<w:b/><w:bCs/>"
    elif bold is False:
        # the source writes the negative explicitly, and so does the twin
        p += '<w:b w:val="false"/><w:bCs w:val="false"/>'
    if under:
        p += '<w:u w:val="single"/>'
    if color:
        p += f'<w:color w:val="{color}"/>'
    if sz:
        p += f'<w:sz w:val="{sz}"/><w:szCs w:val="{sz}"/>'
    if fill:
        p += f'<w:shd w:fill="{fill}"/>'
    p += "</w:rPr>"
    return "" if p == "<w:rPr></w:rPr>" else p


def run(text, **kw):
    return f'<w:r>{rpr(**kw)}<w:t xml:space="preserve">{esc(text)}</w:t></w:r>'


# Inside any text, *bold* marks a span the source sets in bold and ` // ` marks the
# line break it uses to stack a guide, a card list or a phrase bank inside one paragraph.
EMPH = re.compile(r"\*([^*\n]+)\*")
# a fill-in blank is its own run: underlined, on the source's pale grey
BLANK = re.compile(r"_{4,}")


def _spans(text, blanks=False, **kw):
    """Split one line into runs: a bold bullet marker, *bold* spans and,
    inside the model documents, underlined fill-in blanks."""
    out = []
    if text.startswith("• "):
        # the source sets the bullet character itself in bold
        out.append(run("• ", **dict(kw, bold=True)))
        text = text[2:]
    at = 0
    for m in EMPH.finditer(text):
        if m.start() > at:
            out.append(_blanks(text[at:m.start()], blanks, **kw))
        out.append(run(m.group(1), **dict(kw, bold=True)))
        at = m.end()
    if at < len(text):
        out.append(_blanks(text[at:], blanks, **kw))
    return "".join(out) or run("", **kw)


def _blanks(text, blanks, **kw):
    if not blanks:
        return run(text, **kw)
    out, at = [], 0
    for m in BLANK.finditer(text):
        if m.start() > at:
            out.append(run(text[at:m.start()], **kw))
        out.append(run(m.group(0), under=True, sz=kw.get("sz"), fill="F5F5F5"))
        at = m.end()
    if at < len(text):
        out.append(run(text[at:], **kw))
    return "".join(out)


_runs = _spans


def fmt(text, brk="plain", blanks=False, **kw):
    """` // ` is the line break the source stacks inside one paragraph.
    The source writes a bare break between guide lines and a sized break
    carrying a space inside the model documents."""
    parts = text.split(" // ")
    br = ("<w:r><w:br/></w:r>" if brk == "plain"
          else f'<w:r>{rpr(sz=kw.get("sz"))}<w:br/>'
               '<w:t xml:space="preserve"> </w:t></w:r>')
    return br.join(_spans(p, blanks, **kw) for p in parts)


def split_speaker(line):
    """"Name: rest" -> ("Name: ", "rest"); a line with no speaker keeps its text."""
    who, sep, rest = line.partition(":")
    return (who + sep + " ", rest.lstrip()) if sep else ("", line)


def border(colour, sz, sides="tblr", space=None, val="single"):
    names = {"t": "top", "b": "bottom", "l": "left", "r": "right"}
    sp = f' w:space="{space}"' if space is not None else ""
    return ("<w:pBdr>" + "".join(
        f'<w:{names[s]} w:val="{val}" w:color="{colour}" w:sz="{sz}"{sp}/>'
        for s in sides) + "</w:pBdr>")


def para(runs, style=None, objstyle=False, keep=False, keeplines=False, pbb=False,
         bdr="", fill=None, before=None, after=None, line=None, left=None, right=None,
         jc=None, num=None, lvl=0):
    pp = "<w:pPr>"
    if style:
        pp += f'<w:pStyle w:val="{style}"/>'
    if objstyle:
        # the source's generator writes a second, undefined pStyle on every heading;
        # it is what makes the exercise headings render as body text
        pp += '<w:pStyle w:val="[object Object]"/>'
    if num:
        pp += f'<w:numPr><w:ilvl w:val="{lvl}"/><w:numId w:val="{num}"/></w:numPr>'
    if keep:
        pp += "<w:keepNext/>"
    if keeplines:
        pp += "<w:keepLines/>"
    if pbb:
        pp += "<w:pageBreakBefore/>"
    pp += bdr
    if fill:
        pp += f'<w:shd w:fill="{fill}"/>'
    if before is not None or after is not None or line is not None:
        pp += ("<w:spacing"
               + (f' w:before="{before}"' if before is not None else "")
               + (f' w:after="{after}"' if after is not None else "")
               + (f' w:line="{line}" w:lineRule="auto"' if line is not None else "")
               + "/>")
    if left is not None or right is not None:
        pp += ("<w:ind"
               + (f' w:left="{left}"' if left is not None else "")
               + (f' w:right="{right}"' if right is not None else "") + "/>")
    if jc:
        pp += f'<w:jc w:val="{jc}"/>'
    pp += "</w:pPr>"
    if pp == "<w:pPr></w:pPr>":
        pp = ""
    return f"<w:p>{pp}{runs}</w:p>"


def cell(paras, width=None, fill=None, bdr=None, mar=(50, 100, 50, 100), valign=True):
    tc = "<w:tcPr>"
    if width:
        tc += f'<w:tcW w:type="pct" w:w="{width}"/>'
    if fill:
        tc += f'<w:shd w:fill="{fill}"/>'
    if bdr:
        tc += bdr
    tc += ("<w:tcMar>"
           + f'<w:top w:type="dxa" w:w="{mar[0]}"/><w:left w:type="dxa" w:w="{mar[1]}"/>'
           + f'<w:bottom w:type="dxa" w:w="{mar[2]}"/><w:right w:type="dxa" w:w="{mar[3]}"/>'
           + "</w:tcMar>")
    if valign:
        tc += '<w:vAlign w:val="center"/>'
    tc += "</w:tcPr>"
    return f"<w:tc>{tc}{''.join(paras)}</w:tc>"


def table(rows, cols, pr):
    grid = "<w:tblGrid>" + '<w:gridCol w:w="100"/>' * cols + "</w:tblGrid>"
    return ("<w:tbl>" + pr + grid
            + "".join("<w:tr>" + "".join(r) + "</w:tr>" for r in rows) + "</w:tbl>")


# --- the four table kinds, verbatim from the source ------------------------
TBL_MATCH = ('<w:tblPr><w:tblW w:type="pct" w:w="95%"/><w:jc w:val="center"/>'
             '<w:tblBorders>'
             + "".join(f'<w:{s} w:val="single" w:color="000000" w:sz="2"/>'
                       for s in ("top", "left", "bottom", "right"))
             + '<w:insideH w:val="single" w:color="CCCCCC" w:sz="1"/>'
               '<w:insideV w:val="single" w:color="CCCCCC" w:sz="1"/>'
               '</w:tblBorders></w:tblPr>')

TBL_STRIP = ('<w:tblPr><w:tblW w:type="pct" w:w="100%"/><w:tblBorders>'
             + "".join(f'<w:{s} w:val="single" w:color="0066CC" w:sz="1"/>'
                       for s in ("top", "left", "bottom", "right"))
             + '<w:insideH w:val="single" w:color="CCCCCC" w:sz="1"/>'
               '<w:insideV w:val="single" w:color="CCCCCC" w:sz="1"/>'
               '</w:tblBorders></w:tblPr>')

TBL_BANK = ('<w:tblPr><w:tblW w:type="pct" w:w="100%"/><w:tblBorders>'
            + "".join(f'<w:{s} w:val="single" w:color="0066CC" w:sz="1"/>'
                      for s in ("top", "left", "bottom", "right"))
            + '<w:insideH w:val="single" w:color="auto" w:sz="4"/>'
              '<w:insideV w:val="single" w:color="CCCCCC" w:sz="1"/>'
              '</w:tblBorders></w:tblPr>')

TBL_LINES = ('<w:tblPr><w:tblW w:type="pct" w:w="95%"/><w:tblBorders>'
             + "".join(f'<w:{s} w:val="single" w:color="666666" w:sz="6"/>'
                       for s in ("top", "left", "bottom", "right"))
             + '<w:insideH w:val="none" w:sz="0"/><w:insideV w:val="none" w:sz="0"/>'
               '</w:tblBorders></w:tblPr>')

RULED = ('<w:tcBorders><w:top w:val="none" w:sz="0"/><w:left w:val="none" w:sz="0"/>'
         '<w:bottom w:val="single" w:color="D0D0D0" w:sz="1"/>'
         '<w:right w:val="none" w:sz="0"/></w:tcBorders>')


class Doc:
    def __init__(self):
        self.body = []
        self.lists = []
        self.cur = {}
        self.new_list()

    def add(self, xml):
        self.body.append(xml)

    def spacer(self, after=300, dotted=False, pbb=False):
        """after=None writes no <w:spacing>, which is what the source does
        for the blank that carries a page break."""
        self.add(para("", bdr=(border("CCCCCC", 6, "b", val="dotted") if dotted else ""),
                      after=after, pbb=pbb))

    def new_list(self):
        for abstract in (NUM_BULLET, NUM_DECIMAL):
            self.lists.append(abstract)
            self.cur[abstract] = len(self.lists) + 2

    # -- the title page --------------------------------------------------
    def title_page(self, title, level, author, year):
        self.add(para(run(title, bold=True, color="0D2F5E", sz=56),
                      after=400, jc="center"))
        self.add(para(run(level, color="1A56A0", sz=32), after=800, jc="center"))
        self.add(para(run(author, color="4A82B8", sz=28), after=400, jc="center"))
        self.add(para(run(year, color="7AAAD4", sz=24), jc="center"))

    def spacer_break(self):
        self.add(para("", pbb=True))

    # -- headings --------------------------------------------------------
    def toc_head(self, text):
        self.add(para(run(text), style="Heading1", after=300))

    def unit_head(self, text):
        self.add(para(run(text, bold=True, color="003366", sz=36), style="Heading1",
                      keep=True, keeplines=True, pbb=True,
                      bdr=border("003366", 12, "b", val="double"), after=400))

    def appendix_head(self, text, fill):
        self.add(para(run(text), style="Heading1",
                      bdr=border("0066CC", 6, "tb", val="double"), fill=fill,
                      after=400, jc="center"))

    def h2(self, text):
        self.add(para(run(text), style="Heading2",
                      bdr=border("0066CC", 12, "l"), fill="F0F0F0",
                      before=400, after=200, left=200))

    def part_bar(self, key, text):
        self.add(para(run(text, bold=True, color="FFFFFF", sz=32),
                      keep=True, keeplines=True, pbb=(key != "Warm Up"),
                      fill=PART_FILL[key], before=0, after=300, left=200, right=200))

    def exercise(self, text, before=250, objstyle=True):
        # Heading3 plus the generator's stray second style, exactly as the source
        self.add(para(run(text), style="Heading3", objstyle=objstyle,
                      keep=True, keeplines=True, before=before, after=150))

    def track_head(self, text):
        # "🔊 Track 1.8 - " purple, "Exercise 8: " bold black, title plain
        track, _, rest = text.partition(" - ")
        label, _, title = rest.partition(": ")
        self.add(para(run(track + " - ", bold=True, color="8B00FF")
                      + run(label + ": ", bold=True) + run(title),
                      bdr=border("8B00FF", 3, "t"), fill="F8FCFF",
                      before=250, after=150, left=360))

    # -- body ------------------------------------------------------------
    def instruction(self, text):
        self.add(para(fmt(text, bold=False, color="3A3A3A", sz=22), keeplines=True,
                      bdr=border("3A3A3A", 2), fill="FFF9E6",
                      after=120, line=300, left=200, right=200))

    def bullet(self, text):
        # the source sets the arrow in its own unstyled run
        self.add(para(run("→ ") + fmt(text, bold=False, sz=22),
                      style="ListParagraph",
                      num=self.cur[NUM_BULLET], after=150, left=360))

    def card_bullet(self, text, left=300, after=100):
        """Bulleted detail inside a formula card: no arrow, body size."""
        self.add(para(fmt(text), style="ListParagraph",
                      num=self.cur[NUM_BULLET], after=after, left=left))

    def plain_bullet(self, text):
        """Bulleted line at discussion indent but with no arrow prefix."""
        self.add(para(fmt(text, sz=22), style="ListParagraph",
                      num=self.cur[NUM_BULLET], after=150, left=360))

    def number(self, text, left=360, sz=None, bold=None, after=100):
        self.add(para(fmt(text, bold=bold, sz=sz), num=self.cur[NUM_DECIMAL],
                      after=after, left=left))

    def line(self, text, left=300, sz=None, bold=False, color=None):
        self.add(para(fmt(text, bold=bold, sz=sz, color=color), after=100, left=left))

    def plain(self, text, left=360, sz=None, after=150, before=None):
        self.add(para(fmt(text, sz=sz), before=before, after=after, left=left))

    def bold_line(self, text):
        self.add(para(fmt(text, bold=True), before=200, after=150))

    def dialogue_bar(self, text, first=False):
        # the source opens the first bar of a set tight under the play note and
        # gives every later bar a full gap above it
        self.add(para(run(text, bold=True, color="FFFFFF", sz=22), fill="1A56A0",
                      before=120 if first else 280, after=60, left=300, right=300))

    def speech(self, text, male=False):
        # the source colours the speaker's name by voice, so that the playback
        # macro can read the line aloud in two voices, and sets the line itself
        # in the body grey
        who, rest = split_speaker(text)
        self.add(para(run(who, bold=True, color=SPEAKER[int(male)], sz=22)
                      + fmt(rest, color="1F2937", sz=22),
                      fill="F8FAFF", after=60, left=420))

    def script_speech(self, text, male=False):
        who, rest = split_speaker(text)
        col = SCRIPT_SPEAKER[int(male)]
        self.add(para(run(who, bold=True, color=col, sz=20)
                      + fmt(rest, bold=False, color=col, sz=20),
                      bdr=border("CCCCCC", 2, "l"), after=100, left=720))

    def panel(self, text):
        self.add(para(fmt(text, bold=False, sz=22), fill="F8F8F8",
                      before=150, after=150, left=200, right=200))

    def doc_head(self, text):
        self.add(para(run(text, bold=True, color="1A56A0", sz=22), fill="EEF4FF",
                      before=200, after=100, left=360))

    def sub_bar(self, text, before=160):
        self.add(para(run(text, bold=True, color="1A56A0", sz=20), fill="EEF4FF",
                      before=before, after=80, left=300))

    def audio_chip(self, text):
        self.add(para(run(text, color="666666", sz=18), keep=True, fill="F0F0F0",
                      after=150, right=200, jc="right"))

    def play_note(self, text):
        # the speaker emoji is set large and blue, the note itself small and grey
        icon, _, rest = text.partition(" ")
        self.add(para(run(icon + " ", color="0066CC", sz=24)
                      + run(rest, color="666666", sz=18),
                      bdr=border("0066CC", 1),
                      fill="E6F3FF", before=100, after=150, left=300))

    def word_bank(self, text="Word Bank: "):
        self.add(para(run(text, bold=True, color="0066CC", sz=22), keep=True,
                      bdr=border("0066CC", 2), fill="FFF9E6",
                      before=200, after=100, left=200, right=200))

    def write_prompt(self, text="📝 Write your response below:"):
        self.add(para(run(text, bold=True), before=200, after=150))

    def centred_note(self, text, after=400):
        self.add(para(run(text), after=after, left=500, right=500, jc="center"))

    def code(self, text):
        self.add(para(run(text), fill="F5F5F5", after=0, left=720, right=360))

    def gap_sentence(self, text):
        # "1. " stays bold; the sentence around the blanks does not
        n, _, rest = text.partition(" ")
        self.add(para(run(n + " ", bold=True, sz=22)
                      + fmt(rest, brk="gap", blanks=True, bold=False, sz=22),
                      after=150, left=360))

    def column_head(self, text):
        self.add(para(run(text), after=100))

    # -- the answer key --------------------------------------------------
    def answer_head(self, text):
        # "Exercise 7: " is bold blue; the exercise title is plain body text
        label, _, title = text.partition(": ")
        self.add(para(run(label + ": ", bold=True, color="0066CC") + run(title),
                      before=200, after=100, left=360))

    def question_head(self, text):
        self.add(para(run(text), before=100, after=50, left=500))

    def answer(self, text):
        self.add(para(fmt(text, bold=False, sz=20), bdr=border("006600", 4, "l"),
                      fill="F8FFF8", after=100, left=500, right=200))

    def answer_sep(self):
        self.add(para(fmt("—", bold=False, sz=20), bdr=border("006600", 4, "l"),
                      fill="F8FFF8", after=100, left=500, right=200))

    # -- tables ----------------------------------------------------------
    def match_table(self, rows):
        """Column A / Column B: a numbered first cell, the item, then the blank."""
        n = max(len(r) for r in rows)
        blank = para('<w:r><w:rPr><w:u w:val="single"/></w:rPr>'
                     '<w:t xml:space="preserve">          </w:t></w:r>', jc="center")
        out = []
        for r in rows:
            r = (list(r) + [""] * n)[:n]
            cs = [cell([para(run(r[0], bold=True, sz=20))], width="8%", fill="F8F8F8",
                       mar=(50, 100, 50, 50))]
            cs.append(cell([para(run(r[1]))], width="72%" if n == 3 else "92%"))
            if n == 3:
                cs.append(cell([blank], width="20%", fill="FFFEF8",
                               mar=(50, 50, 50, 100)))
            out.append(cs)
        self.add(table(out, n, TBL_MATCH))

    def bank_table(self, items, cols=3):
        row = [cell([para(run(i), style="[object Object]", jc="center")],
                    fill="FFF9E6", mar=(100, 100, 100, 100))
               for i in (list(items) + [""] * cols)[:cols]]
        self.add(table([row], cols, TBL_BANK))

    def strip_table(self, items, cols=5):
        out = []
        for i in range(0, max(len(items), 1), cols):
            chunk = (list(items[i:i + cols]) + [""] * cols)[:cols]
            out.append([cell([para(run(c, bold=True, sz=18))], width="20%",
                             fill="FFFEF8") for c in chunk])
        self.add(table(out, cols, TBL_STRIP))

    def write_lines(self, n=10):
        rows = [[cell([para("", after=0)], bdr=RULED)] for _ in range(n)]
        self.add(table(rows, 1, TBL_LINES))

    # -- finish ----------------------------------------------------------
    def build(self, path, title, header):
        doc = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               f"<w:document {NS}><w:body>" + "".join(self.body)
               + '<w:sectPr><w:headerReference w:type="default" r:id="rId3"/>'
                 '<w:footerReference w:type="default" r:id="rId4"/>'
                 '<w:pgSz w:w="11906" w:h="16838" w:orient="portrait"/>'
                 '<w:pgMar w:top="1701" w:right="850" w:bottom="1701" w:left="1134" '
                 'w:header="708" w:footer="708" w:gutter="0"/>'
                 '<w:pgBorders w:display="allPages" w:offsetFrom="page" w:zOrder="front">'
               + "".join(f'<w:{s} w:val="single" w:color="808080" w:sz="12" w:space="8"/>'
                         for s in ("top", "left", "bottom", "right"))
               + "</w:pgBorders></w:sectPr></w:body></w:document>")

        rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/'
                'relationships">'
                '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/'
                'officeDocument/2006/relationships/styles" Target="styles.xml"/>'
                '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/'
                'officeDocument/2006/relationships/numbering" Target="numbering.xml"/>'
                '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/'
                'officeDocument/2006/relationships/header" Target="header1.xml"/>'
                '<Relationship Id="rId4" Type="http://schemas.openxmlformats.org/'
                'officeDocument/2006/relationships/footer" Target="footer1.xml"/>'
                '<Relationship Id="rId5" Type="http://schemas.openxmlformats.org/'
                'officeDocument/2006/relationships/settings" Target="settings.xml"/>'
                "</Relationships>")

        hdr = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               f"<w:hdr {NS}>"
               + para(run(header, color="666666", sz=18),
                      bdr=border("808080", 3, "b", space=1), jc="center")
               + "</w:hdr>")

        field = ('<w:fldChar w:fldCharType="begin"/>'
                 '<w:instrText xml:space="preserve">{}</w:instrText>'
                 '<w:fldChar w:fldCharType="separate"/>'
                 '<w:fldChar w:fldCharType="end"/>')
        ftr = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               f"<w:ftr {NS}>"
               + para('<w:r>' + rpr(color="666666", sz=18)
                      + '<w:t xml:space="preserve">Page </w:t>'
                      + field.format("PAGE")
                      + '<w:t xml:space="preserve"> of </w:t>'
                      + field.format("NUMPAGES") + "</w:r>",
                      bdr=border("808080", 3, "t", space=1), jc="center")
               + "</w:ftr>")

        def st(sid, name, rpr_xml, based="Normal"):
            return (f'<w:style w:type="paragraph" w:styleId="{sid}">'
                    f'<w:name w:val="{name}"/><w:basedOn w:val="{based}"/>'
                    f'<w:next w:val="Normal"/><w:qFormat/>{rpr_xml}</w:style>')

        styles = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                  f"<w:styles {NS}>"
                  '<w:docDefaults><w:rPrDefault/><w:pPrDefault/></w:docDefaults>'
                  + st("Title", "Title", '<w:rPr><w:sz w:val="56"/>'
                                         '<w:szCs w:val="56"/></w:rPr>')
                  + st("Heading1", "Heading 1", '<w:rPr><w:color w:val="2E74B5"/>'
                                                '<w:sz w:val="32"/><w:szCs w:val="32"/>'
                                                "</w:rPr>")
                  + st("Heading2", "Heading 2", '<w:rPr><w:color w:val="2E74B5"/>'
                                                '<w:sz w:val="26"/><w:szCs w:val="26"/>'
                                                "</w:rPr>")
                  + st("Heading3", "Heading 3", '<w:rPr><w:color w:val="1F4D78"/>'
                                                '<w:sz w:val="24"/><w:szCs w:val="24"/>'
                                                "</w:rPr>")
                  + st("Heading4", "Heading 4", '<w:rPr><w:i/><w:iCs/>'
                                                '<w:color w:val="2E74B5"/></w:rPr>')
                  + st("Heading5", "Heading 5",
                       '<w:rPr><w:color w:val="2E74B5"/></w:rPr>')
                  + st("Heading6", "Heading 6",
                       '<w:rPr><w:color w:val="1F4D78"/></w:rPr>')
                  + st("Strong", "Strong", "<w:rPr><w:b/><w:bCs/></w:rPr>")
                  + '<w:style w:type="paragraph" w:styleId="ListParagraph">'
                    '<w:name w:val="List Paragraph"/><w:basedOn w:val="Normal"/>'
                    "<w:qFormat/></w:style>"
                    '<w:style w:type="character" w:styleId="Hyperlink">'
                    '<w:name w:val="Hyperlink"/>'
                    '<w:basedOn w:val="DefaultParagraphFont"/>'
                    '<w:uiPriority w:val="99"/><w:unhideWhenUsed/>'
                    '<w:rPr><w:u w:val="single"/><w:color w:val="0563C1"/></w:rPr>'
                    "</w:style>"
                    '<w:style w:type="character" w:styleId="FootnoteReference">'
                    '<w:name w:val="footnote reference"/>'
                    '<w:basedOn w:val="DefaultParagraphFont"/>'
                    '<w:uiPriority w:val="99"/><w:semiHidden/><w:unhideWhenUsed/>'
                    '<w:rPr><w:vertAlign w:val="superscript"/></w:rPr></w:style>'
                    '<w:style w:type="paragraph" w:styleId="FootnoteText">'
                    '<w:name w:val="footnote text"/>'
                    '<w:basedOn w:val="Normal"/>'
                    '<w:link w:val="FootnoteTextChar"/>'
                    '<w:uiPriority w:val="99"/><w:semiHidden/><w:unhideWhenUsed/>'
                    '<w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/>'
                    "</w:pPr>"
                    '<w:rPr><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr></w:style>'
                    '<w:style w:type="character" w:styleId="FootnoteTextChar">'
                    '<w:name w:val="Footnote Text Char"/>'
                    '<w:basedOn w:val="DefaultParagraphFont"/>'
                    '<w:link w:val="FootnoteText"/>'
                    '<w:uiPriority w:val="99"/><w:semiHidden/><w:unhideWhenUsed/>'
                    '<w:rPr><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr></w:style>'
                  + "</w:styles>")

        # the source's settings part: the page border is a background shape, so
        # displayBackgroundShape is what makes it render
        settings = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                    f"<w:settings {NS}>"
                    "<w:displayBackgroundShape/>"
                    '<w:evenAndOddHeaders w:val="false"/>'
                    "<w:compat><w:compatSetting w:val=\"15\" "
                    'w:uri="http://schemas.microsoft.com/office/word" '
                    'w:name="compatibilityMode"/></w:compat></w:settings>')

        def levels(fmt_, texts, font=None):
            out = []
            for i in range(9):
                t = texts[i % len(texts)]
                out.append(
                    f'<w:lvl w:ilvl="{i}"><w:start w:val="1"/>'
                    f'<w:numFmt w:val="{fmt_}"/><w:lvlText w:val="{t}"/>'
                    f'<w:lvlJc w:val="left"/><w:pPr><w:ind w:left="{360 * (i + 1)}" '
                    f'w:hanging="360"/></w:pPr>'
                    + (f'<w:rPr><w:rFonts w:ascii="{font}" w:hAnsi="{font}" '
                       f'w:hint="default"/></w:rPr>' if font else "")
                    + "</w:lvl>")
            return "".join(out)

        numbering = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                     f"<w:numbering {NS}>"
                     '<w:abstractNum w:abstractNumId="1">'
                     '<w:multiLevelType w:val="hybridMultilevel"/>'
                     + levels("bullet", ["", "o", ""], "Symbol")
                     + "</w:abstractNum>"
                       '<w:abstractNum w:abstractNumId="2">'
                       '<w:multiLevelType w:val="hybridMultilevel"/>'
                     + levels("decimal", ["%1.", "%2.", "%3.", "%4.", "%5.",
                                          "%6.", "%7.", "%8.", "%9."])
                     + "</w:abstractNum>"
                     + "".join(f'<w:num w:numId="{i + 3}">'
                               f'<w:abstractNumId w:val="{a}"/>'
                               + "".join(f'<w:lvlOverride w:ilvl="{l}">'
                                         f'<w:startOverride w:val="1"/></w:lvlOverride>'
                                         for l in range(9))
                               + "</w:num>" for i, a in enumerate(self.lists))
                     + "</w:numbering>")

        ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
              '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
              '<Default Extension="rels" ContentType="application/vnd.openxmlformats-'
              'package.relationships+xml"/>'
              '<Default Extension="xml" ContentType="application/xml"/>'
              + "".join('<Override PartName="/word/%s.xml" ContentType="application/vnd.'
                        'openxmlformats-officedocument.wordprocessingml.%s+xml"/>'
                        % (p, k) for p, k in (("document", "document.main"),
                                              ("styles", "styles"),
                                              ("numbering", "numbering"),
                                              ("header1", "header"),
                                              ("footer1", "footer"),
                                              ("settings", "settings")))
              + '<Override PartName="/docProps/core.xml" ContentType="application/vnd.'
                'openxmlformats-package.core-properties+xml"/></Types>')

        root_rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                     '<Relationships xmlns="http://schemas.openxmlformats.org/package/'
                     '2006/relationships">'
                     '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/'
                     'officeDocument/2006/relationships/officeDocument" '
                     'Target="word/document.xml"/>'
                     '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/'
                     'package/2006/relationships/metadata/core-properties" '
                     'Target="docProps/core.xml"/></Relationships>')

        now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        core = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/'
                '2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/"'
                ' xmlns:dcterms="http://purl.org/dc/terms/" '
                'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
                f"<dc:title>{esc(title)}</dc:title>"
                f'<dcterms:created xsi:type="dcterms:W3CDTF">{now}</dcterms:created>'
                "</cp:coreProperties>")

        os.makedirs(os.path.dirname(path), exist_ok=True)
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
            z.writestr("[Content_Types].xml", ct)
            z.writestr("_rels/.rels", root_rels)
            z.writestr("docProps/core.xml", core)
            z.writestr("word/document.xml", doc)
            z.writestr("word/_rels/document.xml.rels", rels)
            z.writestr("word/styles.xml", styles)
            z.writestr("word/numbering.xml", numbering)
            z.writestr("word/header1.xml", hdr)
            z.writestr("word/footer1.xml", ftr)
            z.writestr("word/settings.xml", settings)
        return os.path.getsize(path)
