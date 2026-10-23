#!/usr/bin/env python3
"""Direct-formatting renderer for the illustrated EAM/cybersecurity design system.

The source book defines no paragraph styles: every element carries its own
size, weight, colour, shading, indent and spacing.  This module reproduces
each of those element types exactly, with the spacing values measured off
the source, and assembles a complete .docx package.
"""
import os, re, struct, zipfile

EMU = 9525  # EMU per pixel

# ---------------------------------------------------------------- escaping

def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def runs(text, color=None, bold=False, ital=False, sz=None):
    """Split **bold** spans into separate runs; keep the rest at the base weight."""
    out = []
    for i, part in enumerate(re.split(r"\*\*(.+?)\*\*", text)):
        if part == "":
            continue
        out.append(run(part, color=color, bold=bold or bool(i % 2), ital=ital, sz=sz))
    return "".join(out) if out else run("", color=color, bold=bold, ital=ital, sz=sz)


def run(text, color=None, bold=False, ital=False, sz=None):
    rpr = ""
    if bold:
        rpr += "<w:b/><w:bCs/>"
    if ital:
        rpr += "<w:i/><w:iCs/>"
    if color:
        rpr += f'<w:color w:val="{color}"/>'
    if sz:
        rpr += f'<w:sz w:val="{sz}"/><w:szCs w:val="{sz}"/>'
    rpr = f"<w:rPr>{rpr}</w:rPr>" if rpr else ""
    sp = ' xml:space="preserve"' if text != text.strip() else ""
    return f"<w:r>{rpr}<w:t{sp}>{esc(text)}</w:t></w:r>"


def para(content, fill=None, before=None, after=None, line=None,
         ind=None, indr=None, jc=None):
    pr = ""
    if fill:
        pr += f'<w:shd w:val="clear" w:color="auto" w:fill="{fill}"/>'
    sp = ""
    if before is not None:
        sp += f' w:before="{before}"'
    if after is not None:
        sp += f' w:after="{after}"'
    if line is not None:
        sp += f' w:line="{line}" w:lineRule="auto"'
    if sp:
        pr += f"<w:spacing{sp}/>"
    if ind is not None or indr is not None:
        a = f' w:left="{ind}"' if ind is not None else ""
        b = f' w:right="{indr}"' if indr is not None else ""
        pr += f"<w:ind{a}{b}/>"
    if jc:
        pr += f'<w:jc w:val="{jc}"/>'
    pr = f"<w:pPr>{pr}</w:pPr>" if pr else ""
    return f"<w:p>{pr}{content}</w:p>"


# ------------------------------------------------------- element emitters
# Every spacing/colour/indent value below was measured off the source.

def unithead(t):  return para(runs(t, "1F3864", bold=True, sz=40), after=40)
def subtitle(t):  return para(runs(t, "5A6472", ital=True, sz=20), after=160)
def warmbar(t):   return para(runs(t, "FFFFFF", bold=True, sz=28), fill="FF9900", before=240, after=120)
def partbar(t):   return para(runs(t, "FFFFFF", bold=True, sz=28), fill="0066CC", before=240, after=120)
def track(t):     return para(runs(t, "5A6472", bold=True, ital=True, sz=20), after=80)
def exhead(t):
    if t:
        return para(runs(t, "0066CC", bold=True, sz=24), before=180, after=80)
    # An empty exercise head still carries its formatting on the paragraph mark.
    return ('<w:p><w:pPr><w:spacing w:before="180" w:after="80"/><w:rPr><w:b/><w:bCs/>'
            '<w:color w:val="0066CC"/><w:sz w:val="24"/><w:szCs w:val="24"/>'
            "</w:rPr></w:pPr></w:p>")
def instr(t):     return para(runs(t, "0066CC", bold=True), fill="E6F3FF", before=60, after=140, ind=120, indr=120)
def instrw(t):    return para(runs(t, "0066CC", bold=True), fill="FFF9E6", before=60, after=140, ind=120, indr=120)
def label(t):     return para(runs(t, "0066CC", bold=True), after=40, line=276)
def label2(t):    return para(runs(t, "0066CC", bold=True), before=80, after=40, line=276)
def labelm(t):    return para(runs(t, "0066CC", bold=True), after=20)
def labelc(t):    return para(runs(t, "0066CC", bold=True), before=40, after=40)
def labelg(t):    return para(runs(t, "0066CC", bold=True), before=80, after=40)
def caption(t):   return para(runs(t, "1F3864", ital=True, sz=18), after=160, jc="center")
def box(t):       return para(runs(t) if t else "", fill="F8F8F8", before=60, after=160, ind=140, indr=140)
def item(t):      return para(runs(t), after=20)
def item40(t):    return para(runs(t), after=40)
def item24(t):    return para(runs(t), after=24)
def bitem(t):     return para(runs(t, bold=True), after=40)
def bcheck(t):    return para(runs(t, bold=True), after=120)
def bremember(t): return para(runs(t, bold=True), before=80, after=40)
def boxg(t):      return para(runs(t), fill="F8F8F8", after=120, ind=120, indr=120)
def opt(t):       return para(runs(t), after=20, ind=260)


def pron(t):
    """A pronunciation line: the word plain, the stress pattern bold navy."""
    word, _, stress = t.partition("—")
    if not stress:
        return para(runs(t), after=20, ind=200)
    body = (run(word.rstrip() + "  —  ")
            + run(stress.strip(), color="1F3864", bold=True))
    return para(body, after=20, ind=200)
def pagebreak():  return '<w:p><w:r><w:br w:type="page"/></w:r></w:p>'

def _prefixed(prefix, t, fill, pcolor=None):
    body = run(prefix, color=pcolor, bold=True) + runs(t)
    return para(body, fill=fill, before=40, after=120, ind=120, indr=120)

def bank(t):      return _prefixed("Word bank:  ", t, "FBFBEF")
def gloss(t):     return _prefixed("Gloss:  ", t, "EEF3F9")
def glossempty(): return para("", fill="EEF3F9", before=40, after=120, ind=120, indr=120)
def watch(t):
    body = run("Watch out!  ", color="C0392B", bold=True) + runs(t)
    return para(body, fill="FBECEC", after=120, ind=120, indr=120)


def figure(rid, w, h):
    cx, cy = w * EMU, h * EMU
    return para(
        f'<w:r><w:rPr><w:noProof/></w:rPr><w:drawing>'
        f'<wp:inline distT="0" distB="0" distL="0" distR="0">'
        f'<wp:extent cx="{cx}" cy="{cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/>'
        f'<wp:docPr id="{rid}" name="Picture {rid}"/>'
        f'<wp:cNvGraphicFramePr><a:graphicFrameLocks '
        f'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/>'
        f'</wp:cNvGraphicFramePr>'
        f'<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">'
        f'<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">'
        f'<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">'
        f'<pic:nvPicPr><pic:cNvPr id="0" name=""/><pic:cNvPicPr>'
        f'<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/></pic:cNvPicPr></pic:nvPicPr>'
        f'<pic:blipFill><a:blip r:embed="rId{rid}"/><a:srcRect/>'
        f'<a:stretch><a:fillRect/></a:stretch></pic:blipFill>'
        f'<pic:spPr bwMode="auto"><a:xfrm><a:off x="0" y="0"/>'
        f'<a:ext cx="{cx}" cy="{cy}"/></a:xfrm>'
        f'<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr>'
        f'</pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>',
        before=120, after=20, jc="center")


# ------------------------------------------------------------------ tables

CELLMAR = ('<w:tcMar><w:top w:w="40" w:type="dxa"/><w:left w:w="120" w:type="dxa"/>'
           '<w:bottom w:w="40" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar>')
PREX = ('<w:tblPrEx><w:tblCellMar><w:top w:w="0" w:type="dxa"/>'
        '<w:bottom w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPrEx>')


def cell(w, text, bold=False, jc=None, fill=None, color="26303B"):
    pr = f'<w:tcW w:w="{w}" w:type="dxa"/>'
    if fill:
        pr = f'<w:tcW w:w="{w}" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="{fill}"/>'
    pr += CELLMAR
    ppr = f'<w:pPr><w:jc w:val="{jc}"/></w:pPr>' if jc else ""
    body = runs(text, color=color, bold=bold) if text else ""
    return f"<w:tc><w:tcPr>{pr}</w:tcPr><w:p>{ppr}{body}</w:p></w:tc>"


def table(grid, rows, total=None):
    """rows: list of lists of pre-rendered cell XML strings."""
    total = total or sum(grid)
    g = "".join(f'<w:gridCol w:w="{w}"/>' for w in grid)
    pr = (f'<w:tblPr><w:tblW w:w="{total}" w:type="dxa"/>'
          '<w:tblBorders>'
          '<w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
          '<w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
          '<w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
          '<w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
          '<w:insideH w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
          '<w:insideV w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
          '</w:tblBorders>'
          '<w:tblCellMar><w:left w:w="10" w:type="dxa"/><w:right w:w="10" w:type="dxa"/></w:tblCellMar>'
          '<w:tblLook w:val="04A0" w:firstRow="1" w:lastRow="0" w:firstColumn="1"'
          ' w:lastColumn="0" w:noHBand="0" w:noVBand="1"/></w:tblPr>')
    body = "".join(f"<w:tr>{PREX}{''.join(r)}</w:tr>" for r in rows)
    return f"<w:tbl>{pr}<w:tblGrid>{g}</w:tblGrid>{body}</w:tbl>"


def cola(items):
    """Column A matching table: n. | Term | ____"""
    g = [700, 3300, 1200]
    rows = [[cell(700, f"{n}.", jc="center"), cell(3300, term, bold=True),
             cell(1200, "____", jc="center")] for n, term in items]
    return table(g, rows, total=5200)


def colb(items):
    """Column B options table: a) | description"""
    g = [700, 8326]
    rows = [[cell(700, f"{k})", bold=True, jc="center"), cell(8326, text)]
            for k, text in items]
    return table(g, rows, total=9026)


def gram(grid, rows):
    """Grammar focus box: teal header row, bold first column."""
    out = []
    for ri, r in enumerate(rows):
        if ri == 0:
            out.append([cell(grid[ci], c, bold=bool(c), fill="009688",
                             color="FFFFFF" if c else None)
                        for ci, c in enumerate(r)])
        else:
            out.append([cell(grid[ci], c, bold=(ci == 0)) for ci, c in enumerate(r)])
    return table(grid, out, total=9026)


def tbl(grid, rows, header=True, shade=()):
    """Generic completion table: teal header row, plain body.

    Rows named in `shade` are tinted — the worked example the task gives away.
    """
    out = []
    for ri, r in enumerate(rows):
        if ri == 0 and header:
            out.append([cell(grid[ci], c, bold=True, fill="009688", color="FFFFFF")
                        for ci, c in enumerate(r)])
        elif ri in shade:
            out.append([cell(grid[ci], c, fill="FAFAFA") for ci, c in enumerate(r)])
        else:
            out.append([cell(grid[ci], c) for ci, c in enumerate(r)])
    return table(grid, out, total=9026)


# ----------------------------------------------------------- the package

DOCROOT = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    '<w:document '
    'xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" '
    'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
    'xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" '
    'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" '
    'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
    'xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" '
    'xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" '
    'xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" '
    'xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" '
    'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
    # every prefix named in mc:Ignorable must also be declared, or Word
    # reports the document as having unreadable content and repairs it
    'mc:Ignorable="w14 wp14">')

SECTPR = ('<w:sectPr><w:pgSz w:w="11906" w:h="16838"/>'
          '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"'
          ' w:header="708" w:footer="708" w:gutter="0"/>'
          '<w:cols w:space="720"/><w:docGrid w:linePitch="360"/></w:sectPr>')

STYLES = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
          '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
          '<w:docDefaults><w:rPrDefault><w:rPr>'
          '<w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>'
          '<w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault>'
          '<w:pPrDefault><w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/>'
          '</w:pPr></w:pPrDefault></w:docDefaults>'
          '<w:style w:type="paragraph" w:default="1" w:styleId="Normal">'
          '<w:name w:val="Normal"/><w:qFormat/></w:style>'
          '</w:styles>')

SETTINGS = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
            '<w:compat><w:compatSetting w:name="compatibilityMode"'
            ' w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat>'
            '</w:settings>')

RELS = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
        '<Relationship Id="rId1" '
        'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" '
        'Target="word/document.xml"/></Relationships>')


def write_docx(path, elements, images):
    """elements: list of XML strings.  images: list of (rid, filepath)."""
    doc = DOCROOT + "<w:body>" + "".join(elements) + SECTPR + "</w:body></w:document>"
    rel = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
           '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">',
           '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/'
           '2006/relationships/styles" Target="styles.xml"/>',
           '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/'
           '2006/relationships/settings" Target="settings.xml"/>']
    for rid, _ in images:
        rel.append(f'<Relationship Id="rId{rid}" Type="http://schemas.openxmlformats.org/'
                   f'officeDocument/2006/relationships/image" Target="media/image{rid}.png"/>')
    rel.append("</Relationships>")
    ct = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">',
          '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.'
          'relationships+xml"/>',
          '<Default Extension="xml" ContentType="application/xml"/>',
          '<Default Extension="png" ContentType="image/png"/>',
          '<Override PartName="/word/document.xml" ContentType="application/vnd.'
          'openxmlformats-officedocument.wordprocessingml.document.main+xml"/>',
          '<Override PartName="/word/styles.xml" ContentType="application/vnd.'
          'openxmlformats-officedocument.wordprocessingml.styles+xml"/>',
          '<Override PartName="/word/settings.xml" ContentType="application/vnd.'
          'openxmlformats-officedocument.wordprocessingml.settings+xml"/>',
          '</Types>']
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", "\n".join(ct))
        z.writestr("_rels/.rels", RELS)
        z.writestr("word/document.xml", doc)
        z.writestr("word/_rels/document.xml.rels", "".join(rel))
        z.writestr("word/styles.xml", STYLES)
        z.writestr("word/settings.xml", SETTINGS)
        for rid, fp in images:
            with open(fp, "rb") as fh:
                z.writestr(f"word/media/image{rid}.png", fh.read())
    return path


def png_size(path):
    with open(path, "rb") as f:
        head = f.read(26)
    return struct.unpack(">II", head[16:24])
