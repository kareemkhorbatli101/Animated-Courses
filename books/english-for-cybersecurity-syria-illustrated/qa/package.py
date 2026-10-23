#!/usr/bin/env python3
"""qa/package.py — fidelity criterion 16, checked properly.

LibreOffice opens a good deal that Word refuses, so "it renders" is not a
test of a .docx package.  This checks the things Word actually rejects:
every XML part parses; every namespace prefix that is used, or named in
mc:Ignorable, is declared; every relationship id resolves to a part that is
present; every part extension has a content type; every image is a real PNG
and is referenced; no two tables are adjacent; and the children of pPr, rPr,
tcPr and tblPr appear in the order the schema requires.

    python3 -I qa/package.py <book.docx>
"""
import re, sys, zipfile
import xml.etree.ElementTree as ET

PPR = ["pStyle", "keepNext", "keepLines", "pageBreakBefore", "framePr",
       "widowControl", "numPr", "suppressLineNumbers", "pBdr", "shd", "tabs",
       "suppressAutoHyphens", "kinsoku", "wordWrap", "overflowPunct",
       "topLinePunct", "autoSpaceDE", "autoSpaceDN", "bidi", "adjustRightInd",
       "snapToGrid", "spacing", "ind", "contextualSpacing", "mirrorIndents",
       "suppressOverlap", "jc", "textDirection", "textAlignment",
       "textboxTightWrap", "outlineLvl", "divId", "cnfStyle", "rPr", "sectPr",
       "pPrChange"]
RPR = ["rStyle", "rFonts", "b", "bCs", "i", "iCs", "caps", "smallCaps",
       "strike", "dstrike", "outline", "shadow", "emboss", "imprint",
       "noProof", "snapToGrid", "vanish", "webHidden", "color", "spacing",
       "w", "kern", "position", "sz", "szCs", "highlight", "u", "effect",
       "bdr", "shd", "fitText", "vertAlign", "rtl", "cs", "em", "lang",
       "eastAsianLayout", "specVanish", "oMath"]
TCPR = ["cnfStyle", "tcW", "gridSpan", "hMerge", "vMerge", "tcBorders", "shd",
        "noWrap", "tcMar", "textDirection", "tcFitText", "vAlign", "hideMark"]
TBLPR = ["tblStyle", "tblpPr", "tblOverlap", "bidiVisual", "tblStyleRowBandSize",
         "tblStyleColBandSize", "tblW", "jc", "tblCellSpacing", "tblInd",
         "tblBorders", "shd", "tblLayout", "tblCellMar", "tblLook",
         "tblCaption", "tblDescription"]


def order_faults(x, tag, order):
    bad = []
    for pr in re.findall(rf"<w:{tag}>(.*?)</w:{tag}>", x, re.S):
        kids = [k for k in re.findall(r"<w:([A-Za-z]+)[ />]", pr) if k in order]
        idx = [order.index(k) for k in kids]
        if idx != sorted(idx):
            bad.append(kids)
    return bad


def main():
    z = zipfile.ZipFile(sys.argv[1])
    names = z.namelist()
    faults = []

    for n in names:
        if n.endswith((".xml", ".rels")):
            try:
                ET.fromstring(z.read(n))
            except Exception as e:
                faults.append(f"{n} does not parse: {e}")

    x = z.read("word/document.xml").decode()
    head = x[:x.find("<w:body>")]
    declared = set(re.findall(r'xmlns:([A-Za-z0-9]+)=', head))
    m = re.search(r'mc:Ignorable="([^"]+)"', head)
    for p in (set(m.group(1).split()) if m else set()) - declared:
        faults.append(f'mc:Ignorable names "{p}" but xmlns:{p} is never declared')
    inline = set(re.findall(r'xmlns:([A-Za-z0-9]+)=', x))
    used = set(re.findall(r'<([A-Za-z0-9]+):', x))
    for p in used - inline - {"xml"}:
        faults.append(f'prefix "{p}" is used but never declared')

    rels = z.read("word/_rels/document.xml.rels").decode()
    have = set(re.findall(r'Id="(rId\d+)"', rels))
    for r in set(re.findall(r'r:(?:embed|id)="(rId\d+)"', x)) - have:
        faults.append(f"relationship {r} is referenced but not declared")
    for i, t in re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', rels):
        if not t.startswith("http") and f"word/{t}" not in names and t not in names:
            faults.append(f"relationship {i} points at a missing part: {t}")

    ct = z.read("[Content_Types].xml").decode()
    defaults = {e.lower() for e in re.findall(r'Default Extension="([^"]+)"', ct)}
    overrides = set(re.findall(r'PartName="([^"]+)"', ct))
    for n in names:
        ext = n.rsplit(".", 1)[-1].lower() if "." in n else ""
        if ext not in defaults and "/" + n not in overrides:
            faults.append(f"{n} has no content type")

    imgs = [n for n in names if n.startswith("word/media/")]
    for n in imgs:
        if z.read(n)[:8] != b"\x89PNG\r\n\x1a\n":
            faults.append(f"{n} is not a valid PNG")
    refd = {f"word/media/{t}" for t in re.findall(r'Target="media/([^"]+)"', rels)}
    for n in set(imgs) - refd:
        faults.append(f"{n} is in the package but referenced by nothing")

    ids = re.findall(r'<wp:docPr id="(\d+)"', x)
    if len(ids) != len(set(ids)):
        faults.append("wp:docPr ids are not unique")

    body = x[x.find("<w:body>"):]
    seq = re.findall(r"<w:tbl>|<w:p\b", body)
    if any(seq[i] == seq[i + 1] == "<w:tbl>" for i in range(len(seq) - 1)):
        faults.append("two tables are adjacent; Word will merge them")
    if seq and seq[-1] == "<w:tbl>":
        faults.append("the body ends with a table and no following paragraph")

    for tag, order in (("pPr", PPR), ("rPr", RPR), ("tcPr", TCPR),
                       ("tblPr", TBLPR)):
        for kids in order_faults(x, tag, order):
            faults.append(f"<w:{tag}> children out of schema order: {kids}")

    for f in faults[:30]:
        print("  " + f)
    print(f"-- {len(names)} parts checked; {len(faults)} fault(s)")
    sys.exit(1 if faults else 0)


main()
