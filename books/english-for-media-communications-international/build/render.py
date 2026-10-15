#!/usr/bin/env python3
"""
render.py — the design system of English for Media and Communications 2, decoded from
the source's own OOXML and rebuilt from scratch with zipfile.

The source uses no images and almost no boxed tables. Nearly every element is a shaded
paragraph: a coloured part bar, a pale-blue rubric, a near-white text block, a pale-yellow
word bank. The only real tables are the two halves of a matching task and the Grammar
Focus box.
"""
import os, zipfile, struct, datetime

# ---------------------------------------------------------------- design tokens
CALIBRI = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" '
           'w:hAnsi="Calibri"/>')

NAVY   = "1F3864"   # the unit heading
BLUE   = "0066CC"   # task headings, rubric text, Column A/B labels, audio lines
GREY   = "5A6472"   # the unit subtitle and the track line
INK    = "26303B"   # the text inside tables
RED    = "C0392B"   # Watch out!
WHITE  = "FFFFFF"

BAR_BLUE   = "0066CC"   # Parts 1-6, 8, 9
BAR_ORANGE = "FF9900"   # Warm Up and Part 10
BAR_TEAL   = "009688"   # Part 7

F_RUBRIC = "E6F3FF"     # the rubric strip from Part 1 onwards
F_WARM   = "FFF9E6"     # the rubric strip in the Warm Up
F_TEXT   = "F8F8F8"     # readings, scripts, models, frames, phrase banks
F_BANK   = "FBFBEF"     # the word bank
F_GLOSS  = "EEF3F9"     # the gloss line
F_WATCH  = "FBECEC"     # Watch out!

GRID_A = (700, 3300, 1200)      # Column A: number · term · answer blank
GRID_B = (700, 8326)            # Column B: letter · meaning
GRID_G = (1700, 2450, 2200, 2676)   # Grammar Focus


def smart(t):
    return t


def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def rpr(bold=False, italic=False, colour=None, sz=22):
    p = "<w:rPr>" + CALIBRI
    if bold:
        p += "<w:b/><w:bCs/>"
    if italic:
        p += "<w:i/><w:iCs/>"
    if colour:
        p += f'<w:color w:val="{colour}"/>'
    p += f'<w:sz w:val="{sz}"/><w:szCs w:val="{sz}"/></w:rPr>'
    return p


def run(text, **kw):
    return f'<w:r>{rpr(**kw)}<w:t xml:space="preserve">{esc(smart(text))}</w:t></w:r>'


def brk():
    return "<w:r><w:br/></w:r>"


def para(runs, after=120, before=None, ind=None, right=None, jc=None, fill=None):
    pp = "<w:pPr>"
    if fill:
        pp += f'<w:shd w:fill="{fill}" w:val="clear"/>'
    sp = ""
    if after is not None:
        sp += f' w:after="{after}"'
    if before is not None:
        sp += f' w:before="{before}"'
    if sp:
        pp += f"<w:spacing{sp}/>"
    if ind is not None:
        pp += f'<w:ind w:left="{ind}"' + (f' w:right="{right}"' if right else "") + "/>"
    if jc:
        pp += f'<w:jc w:val="{jc}"/>'
    pp += "</w:pPr>"
    return f"<w:p>{pp}{runs}</w:p>"


def cell(paras, w):
    tc = (f'<w:tcPr><w:tcW w:w="{w}" w:type="dxa"/>'
          '<w:tcMar><w:top w:w="40" w:type="dxa"/><w:left w:w="120" w:type="dxa"/>'
          '<w:bottom w:w="40" w:type="dxa"/><w:right w:w="120" w:type="dxa"/>'
          "</w:tcMar></w:tcPr>")
    return f"<w:tc>{tc}{''.join(paras)}</w:tc>"


def table(rows, grid):
    b = "".join(f'<w:{s} w:val="single" w:sz="4" w:color="auto"/>'
                for s in ("top", "left", "bottom", "right", "insideH", "insideV"))
    out = [f'<w:tbl><w:tblPr><w:tblW w:w="{sum(grid)}" w:type="dxa"/>'
           f"<w:tblBorders>{b}</w:tblBorders></w:tblPr><w:tblGrid>"]
    for g in grid:
        out.append(f'<w:gridCol w:w="{g}"/>')
    out.append("</w:tblGrid>")
    for r in rows:
        out.append("<w:tr>" + "".join(r) + "</w:tr>")
    out.append("</w:tbl>")
    return "".join(out)


# ---------------------------------------------------------------- the document

class Doc:
    def __init__(self):
        self.body = []
        self.warm = False      # which rubric tint is in force

    def add(self, xml):
        self.body.append(xml)

    # -- headings --------------------------------------------------
    def unit_head(self, text):
        self.add(para(run(text, bold=True, colour=NAVY, sz=40), after=40))

    def unit_sub(self, text):
        self.add(para(run(text, italic=True, colour=GREY, sz=20), after=160))

    def bar(self, text, fill):
        self.warm = fill == BAR_ORANGE
        self.add(para(run(text, bold=True, colour=WHITE, sz=28),
                      before=240, after=120, fill=fill))

    def track(self, text):
        self.add(para(run(text, bold=True, italic=True, colour=GREY, sz=20), after=80))

    def task(self, text):
        self.add(para(run(text, bold=True, colour=BLUE, sz=24), before=180, after=80))

    # -- shaded strips ---------------------------------------------
    def rubric(self, text):
        self.add(para(run(text, bold=True, colour=BLUE),
                      before=60, after=140, ind=120, right=120,
                      fill=F_WARM if self.warm else F_RUBRIC))

    def text_block(self, lines):
        """A reading, a script or a model answer: near-white, indented."""
        body = ""
        for i, l in enumerate(lines):
            if i:
                body += brk()
            body += run(l)
        self.add(para(body, before=60, after=160, ind=140, right=140, fill=F_TEXT))

    def labelled(self, label, text, fill):
        self.add(para(run(label + " ", bold=True) + run(text),
                      before=40, after=120, ind=120, right=120, fill=fill))

    def wordbank(self, words):
        self.labelled("Word bank:", "    |    ".join(words), F_BANK)

    def gloss(self, text):
        self.labelled("Gloss:", text, F_GLOSS)

    def frame(self, label, text):
        """Discussion frames, answer frames and phrase banks: a near-white strip."""
        self.add(para(run(label + " ", bold=True) + run(text),
                      before=60, after=160, ind=140, right=140, fill=F_TEXT))

    def watch(self, text):
        self.add(para(run("Watch out! ", bold=True, colour=RED) + run(text),
                      after=120, ind=120, right=120, fill=F_WATCH))

    # -- plain lines -----------------------------------------------
    def line(self, text, after=20):
        self.add(para(run(text), after=after))

    def bold_label(self, label, text, after=40):
        self.add(para(run(label + " ", bold=True) + run(text), after=after))

    def bullet(self, text):
        self.add(para(run("•   ") + run(text), after=20, ind=260))

    def gap(self, n, before, after_text):
        """A numbered gap: '1. Always ask for ____' then the rest on a second line."""
        self.add(para(run(f"{n}. ") + run(before + "  ")
                      + run("____________________") + brk()
                      + run("   " + after_text), after=40))

    def mcq(self, n, stem, options):
        self.add(para(run(f"{n}. {stem}", bold=True), after=40))
        for letter, opt in zip("ABCD", options):
            self.add(para(run(f"○  {letter})  {opt}"), after=20, ind=260))

    def heading_label(self, text):
        self.add(para(run(text, bold=True, colour=BLUE), before=0, after=40))

    def audio(self, number):
        self.heading_label(f"\U0001F50A  Audio Track {number}")

    def pron(self, word, stressed):
        """A pronunciation line: the word plain, the stressed form bold navy."""
        self.add(para(run(word + " — ") + run(stressed, bold=True, colour=NAVY),
                      after=20, ind=200))

    def checkbox(self, text):
        self.add(para(run("☐  " + text), after=20))

    # -- grids -----------------------------------------------------
    def matching(self, pairs, extra):
        """The source's two tables: Column A (number · term · blank), Column B (letter · meaning)."""
        self.heading_label("Column A")
        rows = []
        for i, (left, _) in enumerate(pairs, 1):
            rows.append([
                cell([para(run(f"{i}.", colour=INK), after=0, jc="center")], GRID_A[0]),
                cell([para(run(left, bold=True, colour=INK), after=0)], GRID_A[1]),
                cell([para(run("____", colour=INK), after=0, jc="center")], GRID_A[2])])
        self.add(table(rows, GRID_A))
        self.heading_label("Column B")
        rows, letters = [], "abcdefghij"
        rights = [p[1] for p in pairs] + [extra]
        for i, r in enumerate(rights):
            rows.append([
                cell([para(run(f"{letters[i]})", colour=INK), after=0, jc="center")], GRID_B[0]),
                cell([para(run(r, colour=INK), after=0)], GRID_B[1])])
        self.add(table(rows, GRID_B))

    def grammar(self, rows):
        head, body = rows[0], rows[1:]
        out = [[cell([para(run(h, bold=True, colour=INK), after=0)], GRID_G[i])
                for i, h in enumerate(head)]]
        for r in body:
            r = (list(r) + [""] * 4)[:4]
            out.append([cell([para(run(c, bold=(i == 0), colour=INK), after=0)], GRID_G[i])
                        for i, c in enumerate(r)])
        self.add(table(out, GRID_G))

    # -- finish ----------------------------------------------------
    def build(self, path, title):
        doc = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
               'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
               'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
               'mc:Ignorable="w14 w15" '
               'xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" '
               'xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml">'
               "<w:body>" + "".join(self.body) +
               '<w:sectPr><w:pgSz w:w="11906" w:h="16838" w:orient="portrait"/>'
               '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" '
               'w:header="708" w:footer="708" w:gutter="0"/><w:pgNumType/>'
               '<w:docGrid w:linePitch="360"/></w:sectPr></w:body></w:document>')

        rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/'
                '2006/relationships/styles" Target="styles.xml"/></Relationships>')

        styles = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                  '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
                  '<w:docDefaults><w:rPrDefault><w:rPr>' + CALIBRI +
                  '<w:sz w:val="22"/><w:szCs w:val="22"/>'
                  '</w:rPr></w:rPrDefault><w:pPrDefault/></w:docDefaults>'
                  '<w:style w:type="paragraph" w:styleId="Normal"><w:name w:val="Normal"/>'
                  '<w:qFormat/></w:style></w:styles>')

        ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
              '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
              '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.'
              'relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>'
              '<Override PartName="/word/document.xml" ContentType="application/vnd.'
              'openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'
              '<Override PartName="/word/styles.xml" ContentType="application/vnd.'
              'openxmlformats-officedocument.wordprocessingml.styles+xml"/>'
              '<Override PartName="/docProps/core.xml" ContentType="application/vnd.'
              'openxmlformats-package.core-properties+xml"/></Types>')

        now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        core = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/'
                'metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" '
                'xmlns:dcterms="http://purl.org/dc/terms/" '
                'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
                f'<dc:title>{esc(title)}</dc:title>'
                '<dc:creator>English for Media and Communications 2 — International Edition</dc:creator>'
                '<cp:revision>1</cp:revision>'
                f'<dcterms:created xsi:type="dcterms:W3CDTF">{now}</dcterms:created>'
                f'<dcterms:modified xsi:type="dcterms:W3CDTF">{now}</dcterms:modified>'
                "</cp:coreProperties>")

        root_rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                     '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/'
                     'relationships"><Relationship Id="rId1" Type="http://schemas.'
                     'openxmlformats.org/officeDocument/2006/relationships/officeDocument" '
                     'Target="word/document.xml"/><Relationship Id="rId2" Type="http://'
                     'schemas.openxmlformats.org/package/2006/relationships/metadata/'
                     'core-properties" Target="docProps/core.xml"/></Relationships>')

        os.makedirs(os.path.dirname(path), exist_ok=True)
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
            z.writestr("[Content_Types].xml", ct)
            z.writestr("_rels/.rels", root_rels)
            z.writestr("docProps/core.xml", core)
            z.writestr("word/document.xml", doc)
            z.writestr("word/styles.xml", styles)
            z.writestr("word/_rels/document.xml.rels", rels)
        return os.path.getsize(path)
