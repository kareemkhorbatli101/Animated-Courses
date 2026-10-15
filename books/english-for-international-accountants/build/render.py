#!/usr/bin/env python3
"""
render.py — the design system of English for Accountants, decoded from the source's
own OOXML and rebuilt from scratch with zipfile.

The source is the plainest of the six: a Letter page, the theme font at 11 pt, no
colours and no shading. Everything is carried by bold headings with an emoji run,
Word bullet and decimal lists, and tables with thin borders.
"""
import os, re, zipfile, datetime

EMOJI = ('<w:rFonts w:ascii="Segoe UI Emoji" w:hAnsi="Segoe UI Emoji" '
         'w:cs="Segoe UI Emoji"/>')

ABSTRACT_BULLET = 1     # • o ▪
ABSTRACT_DECIMAL = 2    # 1. 2. 3.


def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def rpr(bold=False, italic=False, emoji=False):
    p = "<w:rPr>"
    if emoji:
        p += EMOJI
    if bold:
        p += "<w:b/><w:bCs/>"
    if italic:
        p += "<w:i/><w:iCs/>"
    p += "</w:rPr>"
    return p if p != "<w:rPr></w:rPr>" else ""


def run(text, **kw):
    return f'<w:r>{rpr(**kw)}<w:t xml:space="preserve">{esc(text)}</w:t></w:r>'


# The source emphasises the grammar it is teaching inside otherwise plain
# paragraphs: bold for the target form, italics for a term being named.
# Content carries that as *bold* and _italic_, which fmt() turns into runs.
# Underscores are the book's fill-in blanks, so italics are marked ~like this~.
EMPH = re.compile(r"\*([^*\n]+)\*|~([^~\n]+)~")


def fmt(text, bold=False, italic=False):
    """-> runs, honouring *bold* and _italic_ spans inside text"""
    out, at = [], 0
    for m in EMPH.finditer(text):
        if m.start() > at:
            out.append(run(text[at:m.start()], bold=bold, italic=italic))
        if m.group(1) is not None:
            out.append(run(m.group(1), bold=True, italic=italic))
        else:
            out.append(run(m.group(2), bold=bold, italic=True))
        at = m.end()
    if at < len(text):
        out.append(run(text[at:], bold=bold, italic=italic))
    return "".join(out) or run("", bold=bold, italic=italic)


def para(runs, num=None, lvl=0, after=None, keep=False):
    pp = "<w:pPr>"
    if num:
        pp += f'<w:numPr><w:ilvl w:val="{lvl}"/><w:numId w:val="{num}"/></w:numPr>'
    if after is not None:
        pp += f'<w:spacing w:after="{after}"/>'
    if keep:
        pp += "<w:keepNext/>"
    pp += "</w:pPr>"
    if pp == "<w:pPr></w:pPr>":
        pp = ""
    return f"<w:p>{pp}{runs}</w:p>"


def cell(paras, w=None):
    tc = ('<w:tcPr><w:tcW w:w="0" w:type="auto"/><w:tcBorders>'
          + "".join(f'<w:{s} w:val="single" w:sz="6" w:space="0" w:color="auto"/>'
                    for s in ("top", "left", "bottom", "right"))
          + '</w:tcBorders><w:tcMar><w:top w:w="120" w:type="dxa"/>'
            '<w:left w:w="180" w:type="dxa"/><w:bottom w:w="120" w:type="dxa"/>'
            '<w:right w:w="180" w:type="dxa"/></w:tcMar></w:tcPr>')
    return f"<w:tc>{tc}{''.join(paras)}</w:tc>"


def table(rows, grid):
    out = ['<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/>'
           '<w:tblCellSpacing w:w="15" w:type="dxa"/>'
           '<w:tblCellMar><w:left w:w="0" w:type="dxa"/>'
           '<w:right w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>']
    for g in grid:
        out.append(f'<w:gridCol w:w="{g}"/>')
    out.append("</w:tblGrid>")
    for r in rows:
        out.append('<w:tr><w:trPr><w:tblCellSpacing w:w="15" w:type="dxa"/></w:trPr>'
                   + "".join(r) + "</w:tr>")
    out.append("</w:tbl>")
    return "".join(out)


class Doc:
    def __init__(self):
        self.body = []
        # Each list in the source carries its own numId so that every list
        # restarts at 1; lists[i] is the abstract format of numId i + 3.
        self.lists = []
        self.cur = {}
        self.new_list()

    def new_list(self):
        """Begin a fresh bullet list and a fresh numbered list."""
        for abstract in (ABSTRACT_BULLET, ABSTRACT_DECIMAL):
            self.lists.append(abstract)
            self.cur[abstract] = len(self.lists) + 2

    def add(self, xml):
        self.body.append(xml)

    # -- headings --------------------------------------------------
    def emoji_head(self, emoji, text):
        self.add(para(run(emoji, emoji=True) + run(" ") + run(text, bold=True), keep=True))

    def book_title(self, emoji, text):
        self.add(para(run(emoji, emoji=True) + run(" " + text, bold=True)))

    def task_head(self, text):
        self.add(para(run(text, bold=True), keep=True))

    def bold_line(self, text):
        self.add(para(fmt(text, bold=True)))

    # -- body ------------------------------------------------------
    def line(self, text):
        self.add(para(fmt(text)))

    def labelled(self, label, text):
        # The source sets its in-unit labels (Context:, Activity:, Scenario:,
        # Audio Script:) entirely in plain text — only the appendices bold them.
        self.add(para(fmt(label + (" " + text if text else ""))))

    def bold_labelled(self, label, text):
        self.add(para(fmt(label, bold=True) + (fmt(" " + text) if text else "")))

    def italic(self, text):
        self.add(para(run(text, italic=True)))

    def bullet(self, text, lvl=0):
        self.add(para(fmt(text), num=self.cur[ABSTRACT_BULLET], lvl=lvl))

    def bullet_label(self, label, text, lvl=0):
        self.add(para(fmt(label, bold=True) + (fmt(" " + text) if text else ""),
                      num=self.cur[ABSTRACT_BULLET], lvl=lvl))

    def number(self, text, lvl=0):
        self.add(para(fmt(text), num=self.cur[ABSTRACT_DECIMAL], lvl=lvl))

    def pagebreak(self):
        self.add('<w:p><w:r><w:br w:type="page"/></w:r></w:p>')

    # -- tables ----------------------------------------------------
    def grid(self, header, rows, widths=None, bold_first=False):
        """A cell holding ' // ' is split into one paragraph per part."""
        n = len(header)
        widths = widths or [8624 // n] * n
        out = [[cell([para(fmt(h, bold=True))]) for h in header]]
        for r in rows:
            r = (list(r) + [""] * n)[:n]
            out.append([cell([para(fmt(part, bold=bold_first and i == 0))
                              for part in c.split(" // ")])
                        for i, c in enumerate(r)])
        self.add(table(out, widths))

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
               '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>'
               '<w:pgMar w:top="1440" w:right="1800" w:bottom="1440" w:left="1800" '
               'w:header="720" w:footer="720" w:gutter="0"/>'
               '<w:cols w:space="720"/><w:docGrid w:linePitch="360"/>'
               "</w:sectPr></w:body></w:document>")

        rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/'
                '2006/relationships/styles" Target="styles.xml"/>'
                '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/'
                '2006/relationships/numbering" Target="numbering.xml"/></Relationships>')

        styles = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                  '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
                  '<w:docDefaults><w:rPrDefault><w:rPr>'
                  '<w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>'
                  '<w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault>'
                  '<w:pPrDefault><w:pPr>'
                  '<w:spacing w:after="160" w:line="259" w:lineRule="auto"/>'
                  '</w:pPr></w:pPrDefault></w:docDefaults>'
                  '<w:style w:type="paragraph" w:styleId="Normal"><w:name w:val="Normal"/>'
                  '<w:qFormat/></w:style></w:styles>')

        def levels(fmt, texts, font=None):
            out = []
            for i in range(9):
                t = texts[i % len(texts)]
                out.append(
                    f'<w:lvl w:ilvl="{i}"><w:start w:val="1"/>'
                    f'<w:numFmt w:val="{fmt}"/><w:lvlText w:val="{t}"/>'
                    f'<w:lvlJc w:val="left"/><w:pPr><w:ind w:left="{720*(i+1)}" '
                    f'w:hanging="360"/></w:pPr>'
                    + (f'<w:rPr><w:rFonts w:ascii="{font}" w:hAnsi="{font}" '
                       f'w:hint="default"/></w:rPr>' if font else "")
                    + "</w:lvl>")
            return "".join(out)

        numbering = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                     '<w:numbering xmlns:w="http://schemas.openxmlformats.org/'
                     'wordprocessingml/2006/main">'
                     '<w:abstractNum w:abstractNumId="1"><w:multiLevelType w:val="hybridMultilevel"/>'
                     + levels("bullet", ["\uF0B7", "o", "\uF0A7"], "Symbol") +
                     '</w:abstractNum>'
                     '<w:abstractNum w:abstractNumId="2"><w:multiLevelType w:val="hybridMultilevel"/>'
                     + levels("decimal", ["%1.", "%2.", "%3.", "%4.", "%5.",
                                          "%6.", "%7.", "%8.", "%9."]) +
                     '</w:abstractNum>'
                     + "".join(f'<w:num w:numId="{i + 3}">'
                                 f'<w:abstractNumId w:val="{a}"/>'
                                 # without startOverride, lists sharing an
                                 # abstract definition share one counter
                                 + "".join(f'<w:lvlOverride w:ilvl="{l}">'
                                           f'<w:startOverride w:val="1"/>'
                                           f'</w:lvlOverride>' for l in range(9))
                                 + '</w:num>'
                                 for i, a in enumerate(self.lists))
                     + '</w:numbering>')

        ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
              '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
              '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.'
              'relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>'
              '<Override PartName="/word/document.xml" ContentType="application/vnd.'
              'openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'
              '<Override PartName="/word/styles.xml" ContentType="application/vnd.'
              'openxmlformats-officedocument.wordprocessingml.styles+xml"/>'
              '<Override PartName="/word/numbering.xml" ContentType="application/vnd.'
              'openxmlformats-officedocument.wordprocessingml.numbering+xml"/>'
              '<Override PartName="/docProps/core.xml" ContentType="application/vnd.'
              'openxmlformats-package.core-properties+xml"/></Types>')

        now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        core = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/'
                'metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" '
                'xmlns:dcterms="http://purl.org/dc/terms/" '
                'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
                f'<dc:title>{esc(title)}</dc:title>'
                '<dc:creator>English for Accountants — International Edition</dc:creator>'
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
            z.writestr("word/numbering.xml", numbering)
            z.writestr("word/_rels/document.xml.rels", rels)
        return os.path.getsize(path)
