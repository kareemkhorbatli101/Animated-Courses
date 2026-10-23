#!/usr/bin/env python3
"""Element-by-element layout parity against the source.

Compares two documents' full formatting signatures in reading order:
alignment, size, weight, italic, colour, shading, borders, indent, spacing
and image box for paragraphs; grid, row/cell counts and fills for tables.
Prose is ignored; only the shape of the page is compared.

    python3 -I qa/spacing.py <source.docx> <built.docx> [srcFrom srcTo bltFrom bltTo]
"""
import re, sys, zipfile


def toks(p):
    x = zipfile.ZipFile(p).read("word/document.xml").decode()
    b = x[x.find("<w:body>"):]
    return re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", b, re.S)


def sig(t):
    if t.startswith("<w:tbl>"):
        cols = re.findall(r'<w:gridCol w:w="(\d+)"', t)
        rows = len(re.findall(r"<w:tr\b", t))
        cells = len(re.findall(r"<w:tc>", t))
        fills = ",".join(sorted(set(f.upper() for f in
                re.findall(r'<w:shd[^>]*w:fill="([0-9A-Fa-f]{6})"', t))))
        w = (re.search(r'<w:tblW w:w="(\d+)"', t) or [0, "?"])[1]
        jcs = len(re.findall(r'<w:jc w:val="center"', t))
        return (f"TBL w={w} grid={','.join(cols)} rows={rows} cells={cells} "
                f"fills={fills or '-'} ctr={jcs}")
    pr = re.search(r"<w:pPr>.*?</w:pPr>", t, re.S)
    pr = pr.group(0) if pr else ""
    jc = (re.search(r'<w:jc w:val="([^"]+)"', pr) or [None, "left"])[1]
    sz = (re.search(r'<w:sz w:val="(\d+)"', t) or [None, "22"])[1]
    b = "B" if "<w:b/>" in t else "-"
    i = "I" if "<w:i/>" in t else "-"
    cols = "/".join(c.upper() for c in re.findall(r'<w:color w:val="([0-9A-Fa-f]{6})"', t))
    fill = (re.search(r'<w:shd[^>]*w:fill="([0-9A-Fa-f]{6})"', pr) or [None, "-"])[1].upper()
    bdr = "BDR" if "<w:pBdr>" in pr else "-"
    before = (re.search(r'w:before="(\d+)"', pr) or [None, "0"])[1]
    after = (re.search(r'w:after="(\d+)"', pr) or [None, "0"])[1]
    line = (re.search(r'w:line="(\d+)"', pr) or [None, "0"])[1]
    ind = (re.search(r'<w:ind [^>]*?w:left="(\d+)"', pr) or [None, "0"])[1]
    indr = (re.search(r'<w:ind [^>]*?w:right="(\d+)"', pr) or [None, "0"])[1]
    img = ""
    if "<w:drawing>" in t:
        m = re.search(r'<wp:extent cx="(\d+)" cy="(\d+)"', t)
        img = f" IMG w={int(m.group(1))//9525}" if m else " IMG"
    brk = " PAGEBRK" if 'w:type="page"' in t else ""
    empty = "EMPTY" if not re.search(r"<w:t[ >]", t) and not img and not brk else ""
    return (f"{jc} sz{sz} {b}{i} c={cols or '-'} f={fill} {bdr} "
            f"sp={before}/{after}/{line} ind={ind}/{indr}{img}{brk} {empty}")


def main():
    src, blt = toks(sys.argv[1]), toks(sys.argv[2])
    if len(sys.argv) > 3:
        a, b, c, d = (int(x) for x in sys.argv[3:7])
        src, blt = src[a:b], blt[c:d]
    diffs = filled = 0
    for i in range(max(len(src), len(blt))):
        s = sig(src[i]) if i < len(src) else "<missing>"
        t = sig(blt[i]) if i < len(blt) else "<missing>"
        if s.endswith("EMPTY") and not t.endswith("EMPTY"):
            # a box the source left blank and this book fills: declared, not a fault
            if s[:-5].replace("-- c=-", "XX") == t.replace("B- c=-", "XX").replace(
                    "-- c=-", "XX").rstrip() or s[:-6] == t.rstrip():
                filled += 1
                continue
            base_s = re.sub(r"[BI-]{2} c=\S+", "", s[:-5]).strip()
            base_t = re.sub(r"[BI-]{2} c=\S+", "", t).strip()
            if base_s == base_t:
                filled += 1
                continue
        if s != t:
            diffs += 1
            if diffs <= 30:
                print(f"{i:5}  src  {s}")
                print(f"{i:5}  blt  {t}")
    print(f"-- {len(src)} source vs {len(blt)} built elements; {diffs} differ"
          + (f"; {filled} blank box(es) filled" if filled else ""))
    sys.exit(1 if diffs else 0)


main()
