#!/usr/bin/env python3
"""
render.py — the design system of English for NGOs and International Organizations (A2),
decoded from the source's own OOXML and rebuilt from scratch with zipfile.

The largest book in the series: ten units of forty-one exercises inside an A4 page with
a grey border, a coloured bar and its own instruction-box tint for each of the eight
parts, five kinds of table, fifty-one transcribed audio tracks and a 30,000-word answer
key.  Table widths are written the way the source writes them — fiftieths of a percent
as a bare integer, not a percent string.
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

# Every part also tints its own instruction box — but the source's generator
# rotates the last three: Part 6 gets Part 8's tint, Part 7 gets Part 6's and
# Part 8 gets Part 7's, in every unit.  Reproduced rather than straightened.
PART_BOX = {"Warm Up": "FFF9E6", "1": "E6F3FF", "2": "E6F9E6", "3": "F3E6FF",
            "4": "FFE6E6", "5": "FFE6CC", "6": "FFE6F3", "7": "FFF0E6",
            "8": "E6F9F9"}

SPEAKER = ("990099", "0066CC")   # purple for a female voice, blue for a male

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


NOBORDER = ("<w:tcBorders>" + "".join(f'<w:{s} w:val="none"/>'
            for s in ("top", "left", "bottom", "right")) + "</w:tcBorders>")


def numbered(text, sz=18):
    """"1. answer" -> a bold "1. " run and a plain run for the answer."""
    m = re.match(r"(\d+\.\s*)(.*)", text)
    if not m:
        return run(text, sz=sz)
    return run(m.group(1), bold=True, sz=sz) + run(m.group(2), sz=sz)


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
    if width == "auto":
        tc += '<w:tcW w:w="0" w:type="auto"/>'
    elif width:
        tc += f'<w:tcW w:w="{width}" w:type="pct"/>'
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


# --- the five table kinds, verbatim from the source ------------------------

def _tbl(width, borders, inside=None, jc=False):
    b = "".join(f'<w:{s} w:val="single" w:sz="{borders[1]}" w:space="0" '
                f'w:color="{borders[0]}"/>' for s in ("top", "left", "bottom", "right"))
    if inside:
        b += "".join(f'<w:{s} w:val="single" w:sz="{inside[1]}" w:space="0" '
                     f'w:color="{inside[0]}"/>' for s in ("insideH", "insideV"))
    return (f'<w:tblPr><w:tblW w:w="{width}" w:type="pct"/>'
            + ('<w:jc w:val="center"/>' if jc else "")
            + f"<w:tblBorders>{b}</w:tblBorders>"
            + '<w:tblCellMar><w:left w:w="10" w:type="dxa"/>'
              '<w:right w:w="10" w:type="dxa"/></w:tblCellMar></w:tblPr>')


# Column A: a numbered grey cell, the item, and the box the student writes in
TBL_MATCH = _tbl(4750, ("000000", 2), ("CCCCCC", 1), jc=True)
# the fill-in-the-empty-cells grid
TBL_GRID = _tbl(4500, ("auto", 4), ("auto", 4))
# the answer key's five-across strip
TBL_STRIP = _tbl(5000, ("0066CC", 1), ("CCCCCC", 1))
# the ten-row writing frame
TBL_LINES = ('<w:tblPr><w:tblW w:w="4750" w:type="pct"/><w:tblBorders>'
             + "".join(f'<w:{s} w:val="single" w:sz="6" w:space="0" w:color="666666"/>'
                       for s in ("top", "left", "bottom", "right"))
             + '</w:tblBorders><w:tblCellMar><w:left w:w="10" w:type="dxa"/>'
               '<w:right w:w="10" w:type="dxa"/></w:tblCellMar></w:tblPr>')

CELL_GRID = ("<w:tcBorders>"
             + "".join(f'<w:{s} w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
                       for s in ("top", "left", "bottom", "right"))
             + "</w:tcBorders>")

RULED = ('<w:tcBorders><w:bottom w:val="single" w:sz="1" w:space="0" '
         'w:color="D0D0D0"/></w:tcBorders>')

# the matching tables centre their rows and refuse to split across a page
TR_MATCH = '<w:trPr><w:cantSplit/><w:trHeight w:val="400"/><w:jc w:val="center"/></w:trPr>'
TR_STRIP = "<w:trPr><w:cantSplit/></w:trPr>"
TR_LINES = '<w:trPr><w:trHeight w:val="250"/></w:trPr>'


def table(rows, grid, pr, trpr=""):
    """`grid` is the list of w:gridCol widths the source writes for this shape."""
    g = "<w:tblGrid>" + "".join(f'<w:gridCol w:w="{w}"/>' for w in grid) + "</w:tblGrid>"
    return ("<w:tbl>" + pr + g
            + "".join(f"<w:tr>{trpr}" + "".join(r) + "</w:tr>" for r in rows)
            + "</w:tbl>")


class Doc:
    def __init__(self):
        self.body = []
        self.lists = []
        self.cur = {}
        self.new_list()

    def add(self, xml):
        self.body.append(xml)

    def spacer(self, after=300, dotted=False, pbb=False):
        """after=None writes no <w:spacing> at all, which is what the source does
        for the blank that only carries a page break."""
        self.add(para("", bdr=(border("CCCCCC", 6, "b", val="dotted") if dotted else ""),
                      after=after, pbb=pbb))

    def new_list(self):
        for abstract in (NUM_BULLET, NUM_DECIMAL):
            self.lists.append(abstract)
            self.cur[abstract] = len(self.lists) + 2

    # -- front matter ----------------------------------------------------
    def title_page(self, title, level, author, year):
        self.add(para(run(title, bold=True, color="0D2F5E", sz=56),
                      after=400, jc="center"))
        self.add(para(run(level, color="1A56A0", sz=32), after=800, jc="center"))
        self.add(para(run(author, color="4A82B8", sz=28), after=400, jc="center"))
        self.add(para(run(year, color="7AAAD4", sz=24), jc="center"))

    def toc_head(self, text):
        self.add(para(run(text), style="Heading1", after=300))

    def toc_line(self, text):
        self.add(para(run(text), after=100, left=300))

    # -- unit and part furniture -----------------------------------------
    def unit_head(self, text):
        self.add(para(run(text, bold=True, color="003366", sz=36), style="Heading1",
                      keep=True, keeplines=True, pbb=True,
                      bdr=border("003366", 12, "b", val="double"), after=400))

    def part_bar(self, key, text):
        self.add(para(run(text, bold=True, color="FFFFFF", sz=32),
                      keep=True, keeplines=True, pbb=(key != "Warm Up"),
                      fill=PART_FILL[key], after=300, left=200, right=200))

    def exercise(self, text):
        self.add(para(run(text), style="Heading3", keep=True, keeplines=True,
                      before=250, after=150))

    def instruction(self, text, part):
        """The instruction box carries the tint of the part it sits in."""
        self.add(para(fmt(text, color="3A3A3A", sz=22), keeplines=True,
                      bdr=border("3A3A3A", 2), fill=PART_BOX[part],
                      after=120, line=300, left=200, right=200))

    def h2(self, text, rule="0066CC"):
        self.add(para(run(text), style="Heading2", bdr=border(rule, 12, "l"),
                      fill="F0F0F0", before=400, after=200, left=200))

    def appendix_head(self, text, fill, rule="0066CC"):
        self.add(para(run(text), style="Heading1",
                      bdr=border(rule, 6, "tb", val="double"), fill=fill,
                      after=400, jc="center"))

    def centred_note(self, text, after=400):
        self.add(para(run(text), after=after, left=500, right=500, jc="center"))

    # -- audio -----------------------------------------------------------
    def audio(self, text):
        self.add(para(run(text, color="666666", sz=18), keep=True, fill="F0F0F0",
                      after=150, right=200, jc="right"))

    def play_note(self, text="🔊 Click to play dialogue (requires VBA macro - see instructions)"):
        head, _, rest = text.partition(" ")
        self.add(para(run(head + " ", color="0066CC", sz=32)
                      + run(rest, color="666666", sz=18),
                      bdr=border("0066CC", 1), fill="E6F3FF",
                      before=100, after=150, left=300))

    def track_head(self, text):
        """"🔊 Track 1.7 - Exercise 7: Title" — purple track, bold exercise, plain title."""
        m = re.match(r"(.*?)( - )(Exercise \d+: )(.*)", text)
        if m:
            runs = (run(m.group(1) + m.group(2), bold=True, color="8B00FF")
                    + run(m.group(3), bold=True) + run(m.group(4)))
        else:
            runs = run(text, bold=True, color="8B00FF")
        self.add(para(runs, bdr=border("8B00FF", 3, "t"), fill="F8FCFF",
                      before=250, after=150, left=360))

    # -- body text -------------------------------------------------------
    def line(self, text, left=None, after=None, **kw):
        self.add(para(fmt(text, **kw), after=after, left=left))

    def panel(self, text):
        self.add(para(run(text, sz=22), fill="F8F8F8",
                      before=150, after=150, left=200, right=200))

    def passage(self, text):
        self.add(para(run(text, sz=22), bdr=border("0066CC", 1), fill="F8F8F8",
                      before=200, after=200, left=200, right=200))

    def bullet(self, text):
        self.add(para(run("→ ") + run(text, sz=22), style="ListParagraph",
                      num=self.cur[NUM_BULLET], after=150, left=360))

    def plainbullet(self, text):
        self.add(para(run(text), style="ListParagraph",
                      num=self.cur[NUM_BULLET], after=50))

    # -- the exercise kinds ----------------------------------------------
    def mcq_stem(self, text):
        self.add(para(run(text, bold=True), before=150, after=100, left=360))

    def mcq_option(self, text):
        self.add(para(run(text), after=50, left=720))

    def cat_head(self, text, after=100):
        """"Categories:" closes at 100, "Classify each item:" at 150."""
        self.add(para(run(text, bold=True, color="0066CC", sz=22),
                      before=100, after=after, left=360))

    def category(self, text):
        self.add(para(run(text), fill="E6F3FF", after=50, left=720))

    def classify(self, text):
        """An item to classify, with the ruled blank the student writes on."""
        body, _, blank = text.partition("  __")
        runs = run(body + "  ")
        if blank:
            runs += run("__" + blank, under=True)
        self.add(para(runs, after=200, left=720))

    def gap_line(self, text):
        """A numbered gap sentence: bold number, body, blanks on pale grey."""
        n, _, rest = text.partition(" ")
        self.add(para(run(n + " ", bold=True, sz=22)
                      + _blanks(rest, True, sz=22),
                      after=80, left=360))

    def grey_gap(self, text):
        self.add(para(run(text, bold=True, sz=22), fill="F5F5F5", after=60, left=360))

    def numbered_line(self, text, after=120, left=300):
        self.add(para(run(text), after=after, left=left))

    def toc_line_u(self, text):
        self.add(para(run(text), after=100, left=300))

    def question(self, text):
        self.add(para(run(text), after=150, left=360))

    def column_head(self, text):
        self.add(para(run(text), after=100))

    def choices_head(self, text="Choices:"):
        self.add(para(run(text, bold=True, color="1A56A0"),
                      bdr=border("DDAA00", 4, "t"), fill="FFF9E6",
                      before=150, after=40, left=300))

    def choice(self, text):
        self.add(para(run(text, color="374151"), fill="FFF9E6", after=60, left=420))

    def write_prompt(self, text="📝 Write your response below:"):
        self.add(para(run(text, bold=True), before=200, after=150))

    def rule(self, text="_" * 48):
        self.add(para(run(text, color="BBBBBB"), before=40, after=180, left=300))

    def code(self, text):
        self.add(para(run(text), fill="F5F5F5", left=720, right=360))

    # -- dialogue --------------------------------------------------------
    def speech(self, text, male=False):
        """A dialogue line: the whole line in the speaker's colour, grey left rule."""
        who, rest = split_speaker(text)
        col = SPEAKER[int(male)]
        self.add(para((run(who, bold=True, color=col) if who else "")
                      + run(rest, color=col),
                      bdr=border("CCCCCC", 2, "l"), after=100, left=720))

    def script(self, text, male=False):
        """The same dialogue in Appendix A: speaker coloured, body plain."""
        who, rest = split_speaker(text)
        self.add(para((run(who, bold=True, color=SPEAKER[int(male)]) if who else "")
                      + run(rest), fill="F8FCFF", after=50, left=300))

    # One exercise in Unit 2 prints its dialogue twice, in two different
    # formats, because the source's generator emitted both its old and its new
    # dialogue styling.  All four of these elements occur exactly once.
    def dialogue_bar(self, text="Dialogue"):
        self.add(para(run(text, bold=True, color="1A56A0"), fill="EEF4FF",
                      before=160, after=80, left=300))

    def dialogue_line(self, text):
        who, rest = split_speaker(text)
        self.add(para(run(who, bold=True, color="1A56A0", sz=22)
                      + run(rest, color="1F2937", sz=22),
                      fill="F8FAFF", after=60, left=420))

    def dialogue_head(self, text="Dialogue"):
        self.add(para(run(text, bold=True, color="333333", sz=22),
                      before=100, after=100, left=300))

    def narrator(self, text):
        who, rest = split_speaker(text)
        self.add(para(run(who, bold=True, color="0066CC") + run(rest),
                      after=50, left=300))

    # -- the answer key --------------------------------------------------
    def answer_head(self, text):
        label, _, title = text.partition(": ")
        self.add(para(run(label + ": ", bold=True, color="0066CC") + run(title),
                      before=200, after=100, left=360))

    def question_head(self, text):
        self.add(para(run(text), before=100, after=50, left=500))

    def answer(self, text):
        self.add(para(fmt(text), bdr=border("006600", 4, "l"), fill="F8FFF8",
                      after=100, left=500, right=200))

    # -- tables ----------------------------------------------------------
    def match_a(self, rows):
        """Column A: a bold number on grey, the item, then the box to write in."""
        out = []
        for n, item in rows:
            out.append([
                cell([para(run(n, bold=True))], width=400, fill="F8F8F8",
                     mar=(50, 100, 50, 50)),
                cell([para(run(item))], width=3600),
                cell([para('<w:r><w:rPr><w:u w:val="single"/></w:rPr>'
                           '<w:t xml:space="preserve">          </w:t></w:r>',
                           jc="center")], width=1000, fill="FFFEF8",
                     mar=(50, 50, 50, 100)),
            ])
        self.add(table(out, (754, 6782, 1884), TBL_MATCH, TR_MATCH))

    def match_b(self, rows):
        """Column B: a bold letter on pale green, then the definition."""
        out = []
        for n, item in rows:
            out.append([
                cell([para(run(n, bold=True))], width=750, fill="F8FFF8",
                     mar=(50, 100, 50, 50)),
                cell([para(run(item))], width=4250),
            ])
        self.add(table(out, (1413, 8007), TBL_MATCH, TR_MATCH))

    def grid(self, rows):
        """The completable grid: a blue header, white body, grey cells to fill."""
        n = max(len(r) for r in rows)
        width = {2: 2500, 3: 1650, 4: 1250}.get(n, 5000 // n)
        gridcols = {2: (4460, 4461), 3: (2973, 2974, 2974),
                    4: (2230, 2230, 2230, 2231)}.get(n, (2973,) * n)
        out = []
        for i, r in enumerate(rows):
            r = (list(r) + [""] * n)[:n]
            cs = []
            for c in r:
                if i == 0:
                    cs.append(cell([para(run(c, bold=True, color="1A56A0"),
                                         before=80, after=80, jc="center")],
                                   width=width, fill="D6E8FF", bdr=CELL_GRID,
                                   mar=(100, 150, 100, 150), valign=False))
                else:
                    cs.append(cell([para(run(c, color="1F2937"),
                                         before=80, after=80)],
                                   width=width,
                                   fill="FFFFFF" if c.strip() else "F0F0F0",
                                   bdr=CELL_GRID, mar=(100, 150, 100, 150),
                                   valign=False))
            out.append(cs)
        self.add(table(out, gridcols, TBL_GRID))

    def strip(self, items, cols=5):
        """The answer-key strip: "1. " bold, then the answer, five to a row.

        The source sizes the columns from the number of answers it actually has
        rather than from the five slots it lays out, and leaves the grid widths
        of whatever table it cloned.  Reproduced rather than tidied.
        """
        n = min(len(items), cols)
        width = 5000 // n
        out = []
        for i in range(0, max(len(items), 1), cols):
            chunk = list(items[i:i + cols])
            cs = [cell([para(numbered(c))], width=width, fill="FFFEF8",
                       mar=(50, 100, 50, 100), valign=False) for c in chunk]
            while len(cs) < cols:
                cs.append(f'<w:tc><w:tcPr><w:tcW w:w="{width}" w:type="pct"/>'
                          + NOBORDER + "</w:tcPr><w:p/></w:tc>")
            out.append(cs)
        self.add(table(out, (2473, 2473, 2474, 2474, 26), TBL_STRIP, TR_STRIP))

    def write_lines(self, n=10):
        rows = [[cell([para("")], width="auto", bdr=RULED, mar=(50, 200, 50, 200),
                      valign=False)] for _ in range(n)]
        self.add(table(rows, (9411,), TBL_LINES, TR_LINES))

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
