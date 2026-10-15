#!/usr/bin/env python3
"""
render.py — the design system of the English for Banking & Finance Student's Book,
decoded from its OOXML and rebuilt as a .docx writer.

Every token below was read out of the source document: the colour set, the five boxed
table types, the matching and word-bank geometry, the spacing pairs and the page set-up.
"""
import os, re, zipfile, datetime, struct

# ---------------------------------------------------------------- design tokens

NAVY   = "1F3864"   # unit headings, part bars, grammar header
BLUE   = "2E74B5"   # task codes, word bank, check list, glossary label
INK    = "404040"   # instructions
GREY   = "808080"   # the write box
GREY2  = "595959"   # audio line, "About N words"
GREEN  = "375623"   # remember, tip, useful phrases, frames, pronunciation
GOLD   = "7F6000"   # the model label
RED    = "C00000"   # watch out
WHITE  = "FFFFFF"
PALE   = "D9E2F3"   # the part-bar subtitle

F_MODEL  = "FBF7E8"; B_MODEL  = "D6C98A"
F_SCRIPT = "F2F2F2"; B_GREY   = "BFBFBF"
F_READ   = "EAF1FB"; B_READ   = "9DB7D6"
F_WATCH  = "FDEDED"
F_MATCH  = "DEEAF6"
F_BAR    = NAVY

CALIBRI = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" '
           'w:eastAsia="Calibri" w:hAnsi="Calibri"/>')

TBL_W   = 9700
GRID_MATCH = (4850, 4850)
GRID_GRAM  = (2425, 2425, 2425, 2425)
GRID_BANK  = (3234, 3233, 3233)
IMG_EMU = 5943600          # 6.5 in — the source's illustration width

_SMART_PRE = ' \t([{—–/"“'


def smart(t):
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
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def rpr(bold=False, italic=False, colour=None, sz=20):
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


def para(runs, after=100, before=None, ind=None, jc=None, style=None, sz=None):
    pp = "<w:pPr>"
    if style:
        pp += f'<w:pStyle w:val="{style}"/>'
    sp = ""
    if after is not None:
        sp += f' w:after="{after}"'
    if before is not None:
        sp += f' w:before="{before}"'
    if sp:
        pp += f"<w:spacing{sp}/>"
    if ind is not None:
        pp += f'<w:ind w:left="{ind}"/>'
    if jc:
        pp += f'<w:jc w:val="{jc}"/>'
    if sz:
        pp += f'<w:rPr><w:sz w:val="{sz}"/></w:rPr>'
    pp += "</w:pPr>"
    return f"<w:p>{pp}{runs}</w:p>"


def cell(paras, w, fill=None):
    tc = (f'<w:tcPr><w:tcW w:w="{w}" w:type="dxa"/>'
          + (f'<w:shd w:val="clear" w:color="auto" w:fill="{fill}"/>' if fill else "")
          + '<w:tcMar><w:top w:w="60" w:type="dxa"/><w:left w:w="140" w:type="dxa"/>'
            '<w:bottom w:w="60" w:type="dxa"/><w:right w:w="140" w:type="dxa"/>'
            "</w:tcMar></w:tcPr>")
    return f"<w:tc>{tc}{''.join(paras)}</w:tc>"


def table(rows, grid=(TBL_W,), border=B_GREY, width=TBL_W):
    b = "".join(f'<w:{s} w:val="single" w:sz="4" w:space="0" w:color="{border}"/>'
                for s in ("top", "left", "bottom", "right", "insideH", "insideV"))
    out = [f'<w:tbl><w:tblPr><w:tblW w:w="{width}" w:type="dxa"/><w:tblBorders>{b}'
           "</w:tblBorders><w:tblCellMar><w:left w:w='10' w:type='dxa'/>"
           "<w:right w:w='10' w:type='dxa'/></w:tblCellMar></w:tblPr><w:tblGrid>"]
    for g in grid:
        out.append(f'<w:gridCol w:w="{g}"/>')
    out.append("</w:tblGrid>")
    for r in rows:
        out.append("<w:tr>" + "".join(r) + "</w:tr>")
    out.append("</w:tbl>")
    return "".join(out)


def barless_table(rows, grid=(TBL_W,), width=TBL_W):
    """The part bar: a filled table with no visible borders."""
    out = [f'<w:tbl><w:tblPr><w:tblW w:w="{width}" w:type="dxa"/>'
           "<w:tblCellMar><w:left w:w='10' w:type='dxa'/>"
           "<w:right w:w='10' w:type='dxa'/></w:tblCellMar></w:tblPr><w:tblGrid>"]
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

    def spacer(self):
        self.add(para("", after=0, sz=8))

    # -- headings --------------------------------------------------
    def unit_head(self, text):
        self.add(para(run(text, bold=True, colour=NAVY, sz=40),
                      before=240, after=160, style="Heading1"))

    def big(self, text):
        self.add(para(run(text, bold=True, colour=NAVY, sz=40), before=240,
                      after=120, jc="center", style="Heading1"))

    def sub(self, text, sz=24, colour=INK, italic=False):
        self.add(para(run(text, colour=colour, sz=sz, italic=italic),
                      after=80, jc="center"))

    def h2(self, text):
        self.add(para(run(text, bold=True, colour=NAVY, sz=32), before=200,
                      after=120, style="Heading1"))

    def para_text(self, text):
        self.add(para(run(text), after=120))

    def intro(self, text):
        self.add(para(run(text, italic=True, colour=INK), after=100))

    def part_bar(self, title, note):
        paras = [para(run(title, bold=True, colour=WHITE, sz=26), after=20)]
        if note:
            paras.append(para(run(note, italic=True, colour=PALE, sz=17), after=20))
        self.add(barless_table([[cell(paras, TBL_W, fill=F_BAR)]]))
        self.spacer()

    def task(self, code, title):
        self.add(para(run(code + "  ", bold=True, colour=BLUE, sz=23)
                      + run(title, bold=True, colour=NAVY, sz=23),
                      before=140, after=50))

    # -- plain lines -----------------------------------------------
    def instr(self, text):
        self.add(para(run(text, italic=True, colour=INK), after=60))

    def example(self, text):
        self.add(para(run(text, bold=True), after=50))

    def line(self, text, after=40):
        self.add(para(run(text), after=after))

    def bullet(self, text):
        """The source's question lines: a round bullet, indented one tab."""
        self.add(para(run("\u25cf   ", sz=16) + run(text), after=30, ind=400))

    def num(self, n, text):
        self.add(para(run(f"{n}.  ", bold=True) + run(text), after=30))

    def small(self, text, colour=GREEN, sz=19, italic=True, bold_prefix=None):
        r = ""
        if bold_prefix:
            r += run(bold_prefix, bold=True, italic=italic, colour=colour, sz=sz)
        r += run(text, italic=italic, colour=colour, sz=sz)
        self.add(para(r, after=100))

    def pron(self, text):
        self.add(para(run(text, italic=True, colour=GREEN, sz=19), before=80, after=100))

    def remember(self, text):
        self.add(para(run("Remember:  ", bold=True, colour=GREEN, sz=19)
                      + run(text, colour=GREEN, sz=19), before=80, after=40))

    def tip(self, text):
        self.add(para(run("Tip: ", bold=True, italic=True, colour=GREEN, sz=19)
                      + run(text, italic=True, colour=GREEN, sz=19), after=100))

    def audio(self, number):
        self.add(para(run(f"\U0001F50A Audio {number} (optional) — or read the script below.",
                          colour=GREY2, sz=18), after=100))

    def label_block(self, label, items, sz=19, colour=BLUE):
        self.add(para(run(label, bold=True, colour=colour, sz=sz), before=60, after=40))
        for i in items:
            self.add(para(run("☐  " + i), after=30))

    def bank_label(self, text="Word bank"):
        self.add(para(run(text, bold=True, colour=BLUE, sz=19), before=60, after=40))

    # -- boxes -----------------------------------------------------
    def _box(self, paras, fill, border):
        self.add(table([[cell(paras, TBL_W, fill=fill)]], border=border))
        self.spacer()

    def model(self, lines):
        paras = [para(run("Model — read this first", bold=True, colour=GOLD, sz=19), after=40)]
        paras += [para(run(l), after=40) for l in lines]
        self._box(paras, F_MODEL, B_MODEL)

    def script(self, lines):
        paras = []
        for l in lines:
            who, _, said = l.partition(":")
            if said:
                paras.append(para(run(who.strip() + ": ", bold=True) + run(said.strip()), after=40))
            else:
                paras.append(para(run(l, bold=True), after=40))
        self._box(paras, F_SCRIPT, B_GREY)

    def reading(self, title, note, lines):
        paras = [para(run(title, bold=True, colour=NAVY), after=20)]
        if note:
            paras.append(para(run(note, italic=True, colour=GREY2, sz=17), after=40))
        paras += [para(run(l), after=60) for l in lines]
        self._box(paras, F_READ, B_READ)

    def watch(self, lines):
        paras = [para(run("⚠  Watch out!", bold=True, colour=RED, sz=19), after=40)]
        paras += [para(run(l, sz=19), after=30) for l in lines]
        self._box(paras, F_WATCH, B_MODEL)

    def write_box(self):
        paras = [para(run("✎ Write your response here.", italic=True, colour=GREY, sz=18),
                      after=60),
                 para("", after=240)]
        self._box(paras, None, B_GREY)

    def glossary(self, entries):
        paras = [para(run("Glossary help", bold=True, colour=BLUE, sz=18), after=40)]
        for e in entries:
            term, _, rest = e.partition("—")
            paras.append(para(run(term.strip() + " — ", bold=True, sz=18)
                              + run(rest.strip(), sz=18), after=30))
        self._box(paras, WHITE, B_GREY)

    # -- grids -----------------------------------------------------
    def matching(self, pairs, extra):
        head = [cell([para(run("Column A", bold=True, sz=19), after=0)], GRID_MATCH[0], fill=F_MATCH),
                cell([para(run("Column B", bold=True, sz=19), after=0)], GRID_MATCH[1], fill=F_MATCH)]
        rows = [head]
        letters = "abcdefghij"
        rights = [p[1] for p in pairs] + [extra]
        for i, (left, _) in enumerate(pairs, 1):
            rows.append([
                cell([para(run(f"{i}. ", bold=True) + run(left + "  ")
                           + run("____", colour="BFBFBF"), after=0)], GRID_MATCH[0]),
                cell([para(run(f"{letters[i-1]}) ", bold=True) + run(rights[i - 1]),
                           after=0)], GRID_MATCH[1])])
        rows.append([cell([para("", after=0)], GRID_MATCH[0]),
                     cell([para(run(f"{letters[len(pairs)]}) ", bold=True) + run(rights[-1]),
                                after=0)], GRID_MATCH[1])])
        self.add(table(rows, grid=GRID_MATCH))
        self.spacer()

    def grammar(self, rows):
        head = [cell([para(run("", bold=True, colour=WHITE, sz=19), after=0)], GRID_GRAM[0], fill=NAVY),
                cell([para(run("Form", bold=True, colour=WHITE, sz=19), after=0)], GRID_GRAM[1], fill=NAVY),
                cell([para(run("Use", bold=True, colour=WHITE, sz=19), after=0)], GRID_GRAM[2], fill=NAVY),
                cell([para(run("Example", bold=True, colour=WHITE, sz=19), after=0)], GRID_GRAM[3], fill=NAVY)]
        out = [head]
        for r in rows:
            r = (list(r) + ["", "", "", ""])[:4]
            out.append([cell([para(run(r[0], bold=True, sz=19), after=0)], GRID_GRAM[0]),
                        cell([para(run(r[1], sz=19), after=0)], GRID_GRAM[1]),
                        cell([para(run(r[2], sz=19), after=0)], GRID_GRAM[2]),
                        cell([para(run(r[3], sz=19), after=0)], GRID_GRAM[3])])
        self.add(table(out, grid=GRID_GRAM, border=B_READ))
        self.spacer()

    def wordbank(self, words):
        self.bank_label()
        rows, row = [], []
        for w in words:
            row.append(cell([para(run(w), after=0)], GRID_BANK[len(row)]))
            if len(row) == 3:
                rows.append(row); row = []
        if row:
            while len(row) < 3:
                row.append(cell([para("", after=0)], GRID_BANK[len(row)]))
            rows.append(row)
        self.add(table(rows, grid=GRID_BANK))
        self.spacer()

    # -- illustration ----------------------------------------------
    def fig(self, key):
        path = os.path.join(self.figdir, key + ".png")
        if not os.path.exists(path):
            return
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
        self.add(para(drawing, after=120, jc="center"))

    def pagebreak(self):
        self.add('<w:p><w:pPr><w:spacing w:after="0"/></w:pPr>'
                 '<w:r><w:br w:type="page"/></w:r></w:p>')

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
               '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/>'
               '<w:pgMar w:top="1200" w:right="1080" w:bottom="1200" w:left="1080" '
               'w:header="708" w:footer="708" w:gutter="0"/><w:pgNumType/><w:footerReference w:type="default" r:id="rIdFtr"/>'
               '<w:docGrid w:linePitch="360"/></w:sectPr></w:body></w:document>')

        rels = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/'
                '2006/relationships/styles" Target="styles.xml"/>'
                '<Relationship Id="rIdFtr" Type="http://schemas.openxmlformats.org/'
                'officeDocument/2006/relationships/footer" Target="footer1.xml"/>']
        exts = set()
        for fn, (rid, src) in self.images.items():
            rels.append(f'<Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/'
                        f'officeDocument/2006/relationships/image" Target="media/{fn}"/>')
            exts.add(fn.rsplit(".", 1)[-1].lower())
        rels.append("</Relationships>")

        styles = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                  '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
                  '<w:docDefaults><w:rPrDefault><w:rPr>' + CALIBRI +
                  '<w:sz w:val="21"/><w:szCs w:val="21"/>'
                  '</w:rPr></w:rPrDefault><w:pPrDefault/></w:docDefaults>'
                  '<w:style w:type="paragraph" w:styleId="Normal"><w:name w:val="Normal"/>'
                  '<w:qFormat/></w:style>'
                  '<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/>'
                  '<w:uiPriority w:val="9"/><w:qFormat/><w:pPr><w:outlineLvl w:val="0"/></w:pPr>'
                  f'<w:rPr><w:b/><w:bCs/><w:color w:val="{NAVY}"/>'
                  '<w:sz w:val="40"/><w:szCs w:val="40"/></w:rPr></w:style></w:styles>')

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
               '<Override PartName="/word/footer1.xml" ContentType="application/vnd.'
               'openxmlformats-officedocument.wordprocessingml.footer+xml"/>'
               '<Override PartName="/docProps/core.xml" ContentType="application/vnd.'
               'openxmlformats-package.core-properties+xml"/></Types>')

        footer = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                  '<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/'
                  '2006/main"><w:p><w:pPr><w:jc w:val="center"/>'
                  '<w:spacing w:before="120" w:after="0"/></w:pPr>'
                  + run("English for Banking & Finance · B1 — ", colour=GREY2, sz=16)
                  + '<w:r><w:fldChar w:fldCharType="begin"/></w:r>'
                    '<w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r>'
                    '<w:r><w:fldChar w:fldCharType="separate"/></w:r>'
                  + run("1", colour=GREY2, sz=16)
                  + '<w:r><w:fldChar w:fldCharType="end"/></w:r>'
                  '</w:p></w:ftr>')

        now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        core = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/'
                'metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" '
                'xmlns:dcterms="http://purl.org/dc/terms/" '
                'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
                f'<dc:title>{esc(title)}</dc:title>'
                '<dc:creator>English for Banking &amp; Finance — International Edition</dc:creator>'
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
            z.writestr("word/footer1.xml", footer)
            z.writestr("word/_rels/document.xml.rels", "".join(rels))
            for fn, (rid, src) in self.images.items():
                z.write(src, "word/media/" + fn)
        return os.path.getsize(path)
