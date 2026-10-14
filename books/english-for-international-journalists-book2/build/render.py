#!/usr/bin/env python3
"""
render.py — turn the book DSL in ../content into a .docx that reproduces, element for
element, the design system of the Syria Edition Student's Book.

The design tokens below were read out of the source document's OOXML, not approximated.
"""
import os, re, sys, zipfile, datetime, struct

# ---------------------------------------------------------------- design tokens

INK        = "20303B"   # body text
NAVY       = "1A2733"   # display / dark fills
RED        = "C0392B"   # PRODUCE, exercise codes, part kicker
GOLD       = "B8862F"   # MODEL, word-box rules
BLUE       = "2E6E8E"   # NOTICE, dialogue speakers, grammar headers
TEAL       = "3B7D6F"   # CHECK, can-do ticks, criteria header
GREY       = "5C6873"   # subtitles, captions
RULE       = "D9D2C2"   # hairline rules and table borders
RULE_BLUE  = "CDD8DD"   # grammar box border
CREAM      = "F3EEE2"   # case / can-do / remember fill
CREAM_WARM = "FBF7EE"   # warm-up story / word box fill
CREAM_ALT  = "FAF7EF"   # vocab zebra
BLUE_PALE  = "F2F6F7"   # dialogue / grammar body fill
RED_PALE   = "FBEEEC"   # watch-out fill
BANNER_SUB = "9FB0BA"   # banner kicker
BANNER_ACC = "D2A94E"   # banner unit number / bullets
WARM_RULE  = "EFE4CF"
WHITE      = "FFFFFF"

GEORGIA = '<w:rFonts w:ascii="Georgia" w:cs="Georgia" w:eastAsia="Georgia" w:hAnsi="Georgia"/>'
TBL_W   = 9020
IMG_EMU = 5334000          # 14.82 cm, the source's figure width

LABEL_COLOUR = {"MODEL": GOLD, "PRACTISE": NAVY, "NOTICE": BLUE,
                "PRODUCE": RED, "CHECK": TEAL}

# ---------------------------------------------------------------- xml helpers

_SMART_PRE = ' \t([{\u2014\u2013/"\u201c'

def smart(t):
    """Straight quotes -> typographic quotes, as the source book sets them."""
    out = []
    for i, ch in enumerate(t):
        prev = t[i - 1] if i else " "
        if ch == '"':
            out.append("\u201c" if prev in _SMART_PRE else "\u201d")
        elif ch == "'":
            nxt = t[i + 1] if i + 1 < len(t) else " "
            if prev in _SMART_PRE and nxt.isalnum():
                out.append("\u2018")
            else:
                out.append("\u2019")
        else:
            out.append(ch)
    return "".join(out)


def esc(t):
    t = (t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
          .replace('"', "&quot;").replace("'", "&apos;"))
    return t

def rpr(bold=False, italic=False, colour=None, sz=None, georgia=False, under=False):
    p = "<w:rPr>"
    if georgia: p += GEORGIA
    if bold:    p += "<w:b/><w:bCs/>"
    if italic:  p += "<w:i/><w:iCs/>"
    if under:   p += '<w:u w:val="single"/>'
    if colour:  p += f'<w:color w:val="{colour}"/>'
    if sz:      p += f'<w:sz w:val="{sz}"/><w:szCs w:val="{sz}"/>'
    return p + "</w:rPr>"

def run(text, **kw):
    pr = rpr(**kw)
    pr = "" if pr == "<w:rPr></w:rPr>" else pr
    return f'<w:r>{pr}<w:t xml:space="preserve">{esc(smart(text))}</w:t></w:r>'

def para(runs, after=100, before=None, jc=None, ind=None, hanging=None,
         border_top=None, border_bottom=None):
    pp = "<w:pPr>"
    if border_top or border_bottom:
        pp += "<w:pBdr>"
        if border_top:
            c, s = border_top
            pp += f'<w:top w:val="single" w:color="{c}" w:sz="{s}"/>'
        if border_bottom:
            c, s = border_bottom
            pp += f'<w:bottom w:val="single" w:color="{c}" w:sz="{s}"/>'
        pp += "</w:pBdr>"
    sp = ""
    if after is not None:  sp += f' w:after="{after}"'
    if before is not None: sp += f' w:before="{before}"'
    if sp: pp += f"<w:spacing{sp}/>"
    if ind is not None:
        h = f' w:hanging="{hanging}"' if hanging else ""
        pp += f'<w:ind w:left="{ind}"{h}/>'
    if jc: pp += f'<w:jc w:val="{jc}"/>'
    pp += "</w:pPr>"
    return f"<w:p>{pp}{runs}</w:p>"

# ---- inline markup: **bold**, *italic*, {{highlight}}, [[red]]
TOKEN = re.compile(r"(\*\*.+?\*\*|\*[^*]+?\*|\{\{.+?\}\}|\[\[.+?\]\])")

def inline(text, base_sz=None, base_colour=None):
    out = []
    for part in TOKEN.split(text):
        if not part:
            continue
        if part.startswith("**") and part.endswith("**"):
            out.append(run(part[2:-2], bold=True, colour=base_colour or INK, sz=base_sz))
        elif part.startswith("{{") and part.endswith("}}"):
            out.append(run(part[2:-2], bold=True, colour=BLUE, sz=base_sz))
        elif part.startswith("[[") and part.endswith("]]"):
            out.append(run(part[2:-2], bold=True, colour=RED, sz=base_sz))
        elif part.startswith("*") and part.endswith("*") and len(part) > 2:
            out.append(run(part[1:-1], italic=True, colour=base_colour, sz=base_sz))
        else:
            out.append(run(part, colour=base_colour, sz=base_sz))
    return "".join(out)

# ---------------------------------------------------------------- tables

def cell(content, w, shd=None, mar=(60, 100, 60, 100)):
    t, l, b, r = mar
    tc = f'<w:tc><w:tcPr><w:tcW w:type="dxa" w:w="{w}"/>'
    if shd: tc += f'<w:shd w:fill="{shd}" w:color="auto" w:val="clear"/>'
    tc += (f'<w:tcMar><w:top w:type="dxa" w:w="{t}"/><w:left w:type="dxa" w:w="{l}"/>'
           f'<w:bottom w:type="dxa" w:w="{b}"/><w:right w:type="dxa" w:w="{r}"/></w:tcMar>')
    return tc + "</w:tcPr>" + content + "</w:tc>"

def table(rows, grid, border=(RULE, 4), inside=None, first_header=False):
    """rows: list of list of cell-xml. grid: column widths."""
    c, s = border if border else (None, None)
    bd = "<w:tblBorders>"
    if border:
        for side in ("top", "left", "bottom", "right"):
            bd += f'<w:{side} w:val="single" w:color="{c}" w:sz="{s}"/>'
    else:
        for side in ("top", "left", "bottom", "right"):
            bd += f'<w:{side} w:val="none" w:color="FFFFFF" w:sz="0"/>'
    if inside == "none":
        bd += ('<w:insideH w:val="none" w:color="FFFFFF" w:sz="0"/>'
               '<w:insideV w:val="none" w:color="FFFFFF" w:sz="0"/>')
    else:
        ic, isz = inside if inside else ("auto", 4)
        bd += (f'<w:insideH w:val="single" w:color="{ic}" w:sz="{isz}"/>'
               f'<w:insideV w:val="single" w:color="{ic}" w:sz="{isz}"/>')
    bd += "</w:tblBorders>"
    x = (f'<w:tbl><w:tblPr><w:tblW w:type="dxa" w:w="{TBL_W}"/>{bd}'
         f'<w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>')
    for g in grid:
        x += f'<w:gridCol w:w="{g}"/>'
    x += "</w:tblGrid>"
    for i, r in enumerate(rows):
        hdr = "<w:trPr><w:tblHeader/></w:trPr>" if (first_header and i == 0) else ""
        x += "<w:tr>" + hdr + "".join(r) + "</w:tr>"
    return x + "</w:tbl>"

def onecell_box(paras, shd, border, inside=None, mar=(120, 180, 120, 180)):
    return table([[cell(paras, TBL_W, shd=shd, mar=mar)]], [TBL_W],
                 border=border, inside=inside)

# ---------------------------------------------------------------- images

def png_size(path):
    with open(path, "rb") as f:
        head = f.read(26)
    w, h = struct.unpack(">II", head[16:24])
    return w, h

# ---------------------------------------------------------------- the renderer

class Doc:
    def __init__(self, figdir):
        self.body = []
        self.figdir = figdir
        self.images = {}      # filename -> rId
        self.rid = 100
        self.docpr = 0

    def add(self, xml):
        self.body.append(xml)

    def pagebreak(self):
        """A hard page break, as the source uses before Parts 4-11, the key and each unit."""
        self.add('<w:p><w:pPr><w:spacing w:after="0"/></w:pPr>'
                 '<w:r><w:br w:type="page"/></w:r></w:p>')

    # -- primitives ------------------------------------------------
    def divider(self):
        self.add(para("", after=20, before=300, border_top=(NAVY, 18)))

    def heading(self, kicker, title, kick_sz=24, title_sz=30, after=40):
        self.add(para(run(kicker + "   ", bold=True, colour=RED, sz=kick_sz, georgia=True)
                      + run(title, bold=True, colour=NAVY, sz=title_sz, georgia=True),
                      after=after))

    def lead(self, text):
        self.add(para(inline(text, base_sz=20, base_colour=GREY), after=140))

    def label(self, kind, title):
        col = LABEL_COLOUR.get(kind, NAVY)
        self.add(para(run(kind + "   ", bold=True, colour=col, sz=16)
                      + run(title, bold=True, colour=NAVY, sz=22, georgia=True),
                      after=80, before=200, border_bottom=(RULE, 4)))

    def subhead(self, left, right):
        self.add(para(run(left, bold=True, colour=NAVY, sz=22, georgia=True)
                      + run("    " + right, bold=True, colour=GREY, sz=18),
                      after=80, before=160))

    def ex(self, code, prompt):
        self.add(para(run(code + "   ", bold=True, colour=RED, sz=22)
                      + inline(prompt, base_sz=22, base_colour=INK).replace(
                          "<w:r><w:rPr><w:sz", "<w:r><w:rPr><w:b/><w:bCs/><w:sz"),
                      after=70, before=160))

    def ex_plain(self, code, prompt):
        self.add(para(run(code + "   ", bold=True, colour=RED, sz=22)
                      + run(prompt, bold=True, colour=INK, sz=22),
                      after=70, before=160))

    def num(self, n, text):
        self.add(para(run(f"{n}.   ", bold=True, colour=NAVY) + inline(text),
                      after=50, ind=360, hanging=360))

    def bullet(self, text, colour=BANNER_ACC):
        self.add(para(run("•  ", bold=True, colour=colour) + inline(text), after=50))

    def p(self, text, **kw):
        self.add(para(inline(text), **kw))

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
        self.add(para(drawing, after=40, before=120, jc="center"))
        if caption:
            self.add(para(run(caption, italic=True, colour=GREY, sz=18),
                          after=140, jc="center"))

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
               '<w:pgMar w:top="1000" w:right="1000" w:bottom="1000" w:left="1000" '
               'w:header="708" w:footer="708" w:gutter="0"/><w:pgNumType/>'
               '<w:docGrid w:linePitch="360"/></w:sectPr></w:body></w:document>')

        rels = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/'
                '2006/relationships/styles" Target="styles.xml"/>']
        ctypes_img = set()
        for fn, (rid, src) in self.images.items():
            rels.append(f'<Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/'
                        f'officeDocument/2006/relationships/image" Target="media/{fn}"/>')
            ctypes_img.add(fn.rsplit(".", 1)[-1].lower())
        rels.append("</Relationships>")

        styles = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                  '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
                  '<w:docDefaults><w:rPrDefault><w:rPr>'
                  '<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/>'
                  f'<w:color w:val="{INK}"/><w:sz w:val="21"/><w:szCs w:val="21"/>'
                  '</w:rPr></w:rPrDefault><w:pPrDefault/></w:docDefaults>'
                  '<w:style w:type="paragraph" w:styleId="Normal"><w:name w:val="Normal"/>'
                  '<w:qFormat/></w:style></w:styles>')

        ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
              '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
              '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.'
              'relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>')
        for e in sorted(ctypes_img):
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
                '<dc:creator>English for Journalists — International Edition</dc:creator>'
                '<cp:revision>1</cp:revision>'
                f'<dcterms:created xsi:type="dcterms:W3CDTF">{now}</dcterms:created>'
                f'<dcterms:modified xsi:type="dcterms:W3CDTF">{now}</dcterms:modified>'
                "</cp:coreProperties>")

        root_rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                     '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/'
                     'relationships"><Relationship Id="rId1" Type="http://schemas.'
                     'openxmlformats.org/officeDocument/2006/relationships/officeDocument" '
                     'Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.'
                     'openxmlformats.org/package/2006/relationships/metadata/core-properties" '
                     'Target="docProps/core.xml"/></Relationships>')

        os.makedirs(os.path.dirname(path), exist_ok=True)
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
            z.writestr("[Content_Types].xml", ct)
            z.writestr("_rels/.rels", root_rels)
            z.writestr("docProps/core.xml", core)
            z.writestr("word/document.xml", doc)
            z.writestr("word/styles.xml", styles)
            z.writestr("word/_rels/document.xml.rels", "".join(rels))
            for fn, (rid, src) in self.images.items():
                z.write(src, f"word/media/{fn}")
        return path
