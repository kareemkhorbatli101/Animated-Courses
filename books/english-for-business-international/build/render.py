#!/usr/bin/env python3
"""
render.py — the design system of the EFB Student's Book, decoded from its OOXML and
rebuilt as a .docx writer.

Every token below was read out of the source document, not approximated: the colour
set, the shaded-paragraph vocabulary, the table geometry, the spacing pairs and the
page set-up.
"""
import os, re, zipfile, datetime, struct

# ---------------------------------------------------------------- design tokens

INK      = "26303B"   # body text
NAVY     = "1F3864"   # unit title, captions, stressed syllables
BLUE     = "0066CC"   # task headings, instructions, banners, Column A/B labels
GREY     = "5A6472"   # unit subtitle, track labels
RED      = "C0392B"   # Watch out!
TEAL     = "009688"   # grammar focus box header
ORANGE   = "FF9900"   # Warm Up and Part 10 banners
WHITE    = "FFFFFF"

RUBRIC   = "E6F3FF"   # instruction band (everywhere but the warm-up)
RUBRIC_W = "FFF9E6"   # instruction band (warm-up)
BODY_BG  = "F8F8F8"   # readings, scripts, models, notice texts
GLOSS_BG = "EEF3F9"   # Gloss:
BANK_BG  = "FBFBEF"   # Word bank:
WARN_BG  = "FBECEC"   # Watch out!

CALIBRI = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" '
           'w:eastAsia="Calibri" w:hAnsi="Calibri"/>')

IMG_EMU = 4956175          # 5.42 in — the source's illustration width
COL_A_W, COL_B_W = 5200, 9026
GRID_A = (700, 3300, 1200)
GRID_B = (700, 8326)
GRID_G = (1700, 2450, 2200, 2676)

# ---------------------------------------------------------------- xml helpers

_SMART_PRE = ' \t([{—–/"“'


def smart(t):
    """Straight quotes -> typographic quotes, as the source sets them."""
    out = []
    for i, ch in enumerate(t):
        prev = t[i - 1] if i else " "
        if ch == '"':
            out.append("“" if prev in _SMART_PRE else "”")
        elif ch == "'":
            nxt = t[i + 1] if i + 1 < len(t) else " "
            out.append("‘" if prev in _SMART_PRE and nxt.isalnum() else "’")
        else:
            out.append(ch)
    return "".join(out)


def esc(t):
    return (t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def rpr(bold=False, italic=False, colour=None, sz=22, cap=False):
    p = "<w:rPr>" + CALIBRI
    if bold:
        p += "<w:b/><w:bCs/>"
    else:
        p += '<w:b w:val="false"/><w:bCs w:val="false"/>' if cap else ""
    if italic:
        p += "<w:i/><w:iCs/>"
    if colour:
        p += f'<w:color w:val="{colour}"/>'
    p += f'<w:sz w:val="{sz}"/><w:szCs w:val="{sz}"/></w:rPr>'
    return p


def run(text, **kw):
    return f'<w:r>{rpr(**kw)}<w:t xml:space="preserve">{esc(smart(text))}</w:t></w:r>'


def para(runs, after=20, before=None, fill=None, ind=None, jc=None, line=None):
    pp = "<w:pPr>"
    if fill:
        pp += f'<w:shd w:fill="{fill}" w:val="clear"/>'
    sp = ""
    if after is not None:
        sp += f' w:after="{after}"'
    if before is not None:
        sp += f' w:before="{before}"'
    if line is not None:
        sp += f' w:line="{line}"'
    if sp:
        pp += f"<w:spacing{sp}/>"
    if ind is not None:
        if isinstance(ind, tuple):
            pp += f'<w:ind w:left="{ind[0]}" w:right="{ind[1]}"/>'
        else:
            pp += f'<w:ind w:left="{ind}"/>'
    if jc:
        pp += f'<w:jc w:val="{jc}"/>'
    pp += "</w:pPr>"
    return f"<w:p>{pp}{runs}</w:p>"


def cell(text, w, bold=False, fill=None, centre=False, sz=22):
    tc = (f'<w:tcPr><w:tcW w:type="dxa" w:w="{w}"/>'
          + (f'<w:shd w:fill="{fill}" w:val="clear"/>' if fill else "")
          + '<w:tcMar><w:top w:type="dxa" w:w="40"/><w:left w:type="dxa" w:w="120"/>'
            '<w:bottom w:type="dxa" w:w="40"/><w:right w:type="dxa" w:w="120"/>'
            "</w:tcMar></w:tcPr>")
    pp = '<w:pPr><w:jc w:val="center"/></w:pPr>' if centre else ""
    colour = WHITE if fill == TEAL else INK
    r = (f'<w:r>{rpr(bold=bold, colour=colour, sz=sz, cap=True)}'
         f'<w:t xml:space="preserve">{esc(smart(text))}</w:t></w:r>')
    return f"<w:tc>{tc}<w:p>{pp}{r}</w:p></w:tc>"


def table(rows, width, grid):
    out = [f'<w:tbl><w:tblPr><w:tblW w:type="dxa" w:w="{width}"/><w:tblBorders>'
           '<w:top w:val="single" w:color="auto" w:sz="4"/>'
           '<w:left w:val="single" w:color="auto" w:sz="4"/>'
           '<w:bottom w:val="single" w:color="auto" w:sz="4"/>'
           '<w:right w:val="single" w:color="auto" w:sz="4"/>'
           '<w:insideH w:val="single" w:color="auto" w:sz="4"/>'
           '<w:insideV w:val="single" w:color="auto" w:sz="4"/>'
           "</w:tblBorders></w:tblPr><w:tblGrid>"]
    for g in grid:
        out.append(f'<w:gridCol w:w="{g}"/>')
    out.append("</w:tblGrid>")
    for r in rows:
        out.append("<w:tr>" + "".join(r) + "</w:tr>")
    out.append("</w:tbl>")
    return "".join(out)


def png_size(path):
    with open(path, "rb") as f:
        head = f.read(24)
    return struct.unpack(">II", head[16:24])


# ---------------------------------------------------------------- the document

class Doc:
    def __init__(self, figdir):
        self.body, self.figdir = [], figdir
        self.images, self.rid, self.docpr = {}, 100, 0

    def add(self, xml):
        self.body.append(xml)

    # -- headings and banners --------------------------------------
    def unit_title(self, text):
        self.add(para(run(text, bold=True, colour=NAVY, sz=40), after=40))

    def unit_sub(self, text):
        self.add(para(run(text, italic=True, colour=GREY, sz=20), after=160))

    def banner(self, text, warm=False):
        self.add(para(run(text, bold=True, colour=WHITE, sz=28),
                      fill=ORANGE if warm else BLUE, before=240, after=120))

    def track(self, text):
        self.add(para(run(text, bold=True, italic=True, colour=GREY, sz=20), after=80))

    def task(self, text):
        self.add(para(run(text, bold=True, colour=BLUE, sz=24), before=180, after=80))

    def sub(self, text):
        """A small blue bold label: Column A, Can-Do checklist, audio headers."""
        self.add(para(run(text, bold=True, colour=BLUE, sz=22), after=40,
                      before=0, line=276))

    # -- bands -----------------------------------------------------
    def rubric(self, text, warm=False):
        self.add(para(run(text, bold=True, colour=BLUE), fill=RUBRIC_W if warm else RUBRIC,
                      ind=(120, 120), before=60, after=140))

    def body_text(self, text):
        self.add(para(run(text), fill=BODY_BG, ind=(120, 120), before=60, after=160))

    def gloss(self, text):
        self.add(para(run("Gloss:  ", bold=True) + run(text), fill=GLOSS_BG,
                      ind=(120, 120), before=40, after=120))

    def wordbank(self, items):
        self.add(para(run("Word bank:  ", bold=True) + run("    |    ".join(items)),
                      fill=BANK_BG, ind=(120, 120), before=40, after=120))

    def watchout(self, text):
        self.add(para(run("Watch out!  ", bold=True, colour=RED) + run(text),
                      fill=WARN_BG, ind=(120, 120), after=120))

    def frame(self, text):
        """The source's second shaded band: cards, models, frames, phrase banks."""
        self.add(para(run(text), fill=BODY_BG, ind=(140, 140), before=60, after=160))

    def gloss_head(self, text):
        self.add(para(run(text, bold=True, colour=BLUE), before=80, after=40))

    def glossary(self, text):
        self.add(para(run(text), fill=BODY_BG, ind=(120, 120), after=120))

    def model_head(self):
        self.add(para(run("Model \u2014 read this first:", bold=True, colour=BLUE), after=20))

    def plan(self, text):
        self.add(para(run("Plan (make notes, then write): ", bold=True) + run(text), after=40))

    def item(self, text):
        """A numbered practice item; the source gives these after=40."""
        self.add(para(run(text), after=40))

    def remember(self, text):
        self.add(para(run("Remember: ", bold=True) + run(text), before=80, after=40))

    def labelled(self, label, text, after=40, before=None):
        self.add(para(run(label + " ", bold=True) + run(text), after=after, before=before))

    # -- plain lines -----------------------------------------------
    def line(self, text, ind=None, after=20):
        self.add(para(run(text), ind=ind, after=after))

    def bold_line(self, text, after=40):
        self.add(para(run(text, bold=True), after=after))

    def caption(self, text):
        self.add(para(run(text, italic=True, colour=NAVY, sz=18), after=160, jc="center"))

    # -- compound blocks -------------------------------------------
    def mcq(self, stem, options):
        self.bold_line(stem)
        for letter, opt in zip("ABCD", options):
            self.line(f"○  {letter})  {opt}", ind=260)

    def pron(self, word, stress):
        self.add(para(run(word + "  —  ") + run(stress, bold=True, colour=NAVY),
                      ind=200, after=20))

    def matching(self, col_a, col_b):
        """col_a: [(term)], col_b: [(meaning)] — the source's two-table layout."""
        self.sub("Column A")
        rows = []
        for i, term in enumerate(col_a, 1):
            rows.append([cell(f"{i}.", GRID_A[0], centre=True),
                         cell(term, GRID_A[1], bold=True),
                         cell("____", GRID_A[2], centre=True)])
        self.add(table(rows, COL_A_W, GRID_A))
        self.sub("Column B")
        rows = []
        for i, meaning in enumerate(col_b):
            rows.append([cell(f"{chr(97 + i)})", GRID_B[0], bold=True, centre=True),
                         cell(meaning, GRID_B[1])])
        self.add(table(rows, COL_B_W, GRID_B))

    def grammarbox(self, rows):
        head = [cell("", GRID_G[0], bold=True, fill=TEAL),
                cell("Form", GRID_G[1], bold=True, fill=TEAL),
                cell("Use", GRID_G[2], bold=True, fill=TEAL),
                cell("Example", GRID_G[3], bold=True, fill=TEAL)]
        out = [head]
        for label, form, use in rows:
            out.append([cell(label, GRID_G[0], bold=True),
                        cell(form, GRID_G[1]),
                        cell(use, GRID_G[2])])
        self.add(table(out, COL_B_W, GRID_G))

    def audio(self, number):
        self.sub(f"\U0001F50A  Audio Track {number}")

    def check(self, items):
        self.add(para(run("Check before you finish: ", bold=True)
                      + run("  ".join("☐ " + i for i in items)), after=120))

    def cando(self, items):
        self.sub("Can-Do checklist")
        for i in items:
            self.line(f"☐  {i}")

    def pagebreak(self):
        self.add('<w:p><w:pPr><w:spacing w:after="0"/></w:pPr>'
                 '<w:r><w:br w:type="page"/></w:r></w:p>')

    # -- illustrations ---------------------------------------------
    def fig(self, key, caption):
        path = os.path.join(self.figdir, key + ".png")
        if not os.path.exists(path):
            path = os.path.join(self.figdir, "_placeholder.png")
        fn = os.path.basename(path)
        if fn not in self.images:
            self.rid += 1
            self.images[fn] = (f"rId{self.rid}", path)
        rid = self.images[fn][0]
        w, h = png_size(path)
        cy = int(IMG_EMU * h / w)
        self.docpr += 1
        drawing = (
            f'<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0">'
            f'<wp:extent cx="{IMG_EMU}" cy="{cy}"/><wp:effectExtent t="0" r="0" b="0" l="0"/>'
            f'<wp:docPr id="{self.docpr}" name="" descr="" title=""/>'
            f'<wp:cNvGraphicFramePr><a:graphicFrameLocks '
            f'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
            f'noChangeAspect="1"/></wp:cNvGraphicFramePr>'
            f'<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">'
            f'<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">'
            f'<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">'
            f'<pic:nvPicPr><pic:cNvPr id="0" name="" descr=""/><pic:cNvPicPr>'
            f'<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/></pic:cNvPicPr></pic:nvPicPr>'
            f'<pic:blipFill><a:blip r:embed="{rid}" cstate="none"/><a:srcRect/>'
            f'<a:stretch><a:fillRect/></a:stretch></pic:blipFill>'
            f'<pic:spPr bwMode="auto"><a:xfrm><a:off x="0" y="0"/>'
            f'<a:ext cx="{IMG_EMU}" cy="{cy}"/></a:xfrm>'
            f'<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr>'
            f'</pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>')
        self.add(para(drawing, after=40, jc="center"))

    # -- finish ----------------------------------------------------
    def build(self, path, title):
        doc = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
               'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
               'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" '
               'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
               'mc:Ignorable="w14 w15" '
               'xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" '
               'xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml">'
               "<w:body>" + "".join(self.body) +
               '<w:sectPr><w:pgSz w:w="11906" w:h="16838" w:orient="portrait"/>'
               '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" '
               'w:header="708" w:footer="708" w:gutter="0"/><w:pgNumType/>'
               '<w:docGrid w:linePitch="360"/></w:sectPr></w:body></w:document>')

        rels = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/'
                '2006/relationships/styles" Target="styles.xml"/>']
        exts = set()
        for fn, (rid, src) in self.images.items():
            rels.append(f'<Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/'
                        f'officeDocument/2006/relationships/image" Target="media/{fn}"/>')
            exts.add(fn.rsplit(".", 1)[-1].lower())
        rels.append("</Relationships>")

        styles = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                  '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
                  '<w:docDefaults><w:rPrDefault><w:rPr>' + CALIBRI +
                  f'<w:color w:val="{INK}"/><w:sz w:val="22"/><w:szCs w:val="22"/>'
                  '</w:rPr></w:rPrDefault><w:pPrDefault/></w:docDefaults>'
                  '<w:style w:type="paragraph" w:styleId="Normal"><w:name w:val="Normal"/>'
                  '<w:qFormat/></w:style></w:styles>')

        ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
              '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
              '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.'
              'relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>')
        for e in sorted(exts):
            ct += f'<Default Extension="{e}" ContentType="image/{"jpeg" if e in ("jpg","jpeg") else e}"/>'
        ct += ('<Override PartName="/word/document.xml" ContentType="application/vnd.'
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
                '<dc:creator>English for Business — International Edition</dc:creator>'
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
            z.writestr("word/_rels/document.xml.rels", "".join(rels))
            for fn, (rid, src) in self.images.items():
                z.write(src, "word/media/" + fn)
        return os.path.getsize(path)
