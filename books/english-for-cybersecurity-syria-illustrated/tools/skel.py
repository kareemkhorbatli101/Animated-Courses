#!/usr/bin/env python3
"""Typed skeleton extractor.

Reads a .docx (path as argv[1]; treated as untrusted data) and emits one
typed record per top-level element, classified against the EAM design
system.  Usage:
    python3 -I tools/skel.py <docx> [from] [to]
    python3 -I tools/skel.py <docx> --unit N
    python3 -I tools/skel.py <docx> --types
"""
import re, sys, zipfile
from collections import Counter

NS = r"(?:w:)?"

def tokens(path):
    x = zipfile.ZipFile(path).read("word/document.xml").decode()
    body = x[x.find("<w:body>"):]
    return re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", body, re.S)

def txt(s):
    return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s, re.S))

def props(t):
    """(jc, sz, bold, ital, color, fill, border, img, ind)"""
    pr = re.search(r"<w:pPr>.*?</w:pPr>", t, re.S)
    pr = pr.group(0) if pr else ""
    jc = (re.search(r'<w:jc w:val="([^"]+)"', pr) or [None, "left"])[1]
    sp = re.search(r"<w:spacing[^>]*/>", pr)
    sp = sp.group(0) if sp else ""
    sz = (re.search(r'<w:sz w:val="(\d+)"', t) or [None, "22"])[1]
    bold = "<w:b/>" in t or "<w:b " in t
    ital = "<w:i/>" in t
    color = (re.search(r'<w:color w:val="([0-9A-Fa-f]{6})"', t) or [None, ""])[1].upper()
    fill = (re.search(r'<w:shd[^>]*w:fill="([0-9A-Fa-f]{6})"', pr) or [None, ""])[1].upper()
    bdr = "<w:pBdr>" in pr
    img = None
    if "<w:drawing>" in t:
        m = re.search(r'<wp:extent cx="(\d+)" cy="(\d+)"', t)
        img = (int(m.group(1)) // 9525, int(m.group(2)) // 9525) if m else (0, 0)
    ind = (re.search(r'<w:ind [^>]*w:left="(\d+)"', pr) or [None, "0"])[1]
    return jc, sz, bold, ital, color, fill, bdr, img, ind, sp

def classify(t):
    pr = re.search(r"<w:pPr>.*?</w:pPr>", t, re.S)
    pr = pr.group(0) if pr else ""
    if t.startswith("<w:tbl>"):
        cols = re.findall(r'<w:gridCol w:w="(\d+)"', t)
        fills = sorted(set(re.findall(r'<w:shd[^>]*w:fill="([0-9A-Fa-f]{6})"', t)))
        n = len(cols)
        if n == 4:
            return "T_GRAM", f"{n}|{','.join(cols)}"
        if n == 3:
            return "T_COLA", f"{n}|{','.join(cols)}"
        if n == 2:
            return "T_COLB", f"{n}|{','.join(cols)}"
        return "T_OTHER", f"{n}|{','.join(cols)}|{','.join(fills)}"
    jc, sz, b, i, c, f, bdr, img, ind, sp = props(t)
    s = txt(t).strip()
    if img:
        return "FIG", f"{img[0]}x{img[1]}"
    if sz == "40":
        return "UNITHEAD", ""
    if sz == "28" and f == "FF9900":
        return "WARMBAR", ""
    if sz == "28" and f == "0066CC":
        return "PARTBAR", ""
    if sz == "24":
        return "EXHEAD", ""
    if sz == "18":
        return "CAPTION", ""
    if sz == "20" and i and not b:
        return "SUBTITLE", ""
    if sz == "20" and i and b:
        return "TRACK", ""
    if sz == "20" and b:
        return "PRON", ""
    if sz == "20":
        return "SZ20", ""
    if f == "FFF9E6":
        return "INSTRW", ""
    if f == "E6F3FF":
        return "INSTR", ""
    if f == "FBECEC":
        return "WATCH", ""
    if f == "FBFBEF":
        return "BANK", ""
    if f == "EEF3F9":
        return "GLOSS" if s else "GLOSS_EMPTY", ""
    if f == "F8F8F8":
        if not s:
            return "BOX_EMPTY", ""
        return ("BOXG" if (re.search(r'<w:ind [^>]*w:left="120"', pr or "")) else "BOX"), ""
    if f:
        return "FILL_" + f, ""
    if not s:
        return "SPACER", ""
    if b and c == "0066CC":
        before = (re.search(r'w:before="(\d+)"', sp) or [None, "0"])[1]
        after = (re.search(r'w:after="(\d+)"', sp) or [None, "0"])[1]
        if "w:line=" in sp:
            return ("LABEL2" if before == "80" else "LABEL"), ""
        if before == "80":
            return "LABELG", ""
        if before == "40":
            return "LABELC", ""
        if after == "20":
            return "LABELM", ""
        return "LABEL?", f"b={before},a={after}"
    if b and c == "1F3864":
        return "PRON", ""
    if b:
        before = (re.search(r'w:before="(\d+)"', sp) or [None, "0"])[1]
        after = (re.search(r'w:after="(\d+)"', sp) or [None, "0"])[1]
        if after == "120":
            return "BCHECK", ""
        if before == "80":
            return "BREMEMBER", ""
        return "BITEM", ""
    if ind != "0":
        return "IND", ind
    after = (re.search(r'w:after="(\d+)"', sp) or [None, "0"])[1]
    if after == "40":
        return "ITEM40", ""
    if after == "24":
        return "ITEM24", ""
    return "ITEM", ""

def main():
    path = sys.argv[1]
    toks = tokens(path)
    heads = [i for i, t in enumerate(toks) if classify(t)[0] == "UNITHEAD"]
    args = sys.argv[2:]
    if args and args[0] == "--types":
        c = Counter(classify(t)[0] for t in toks)
        for k, v in c.most_common():
            print(f"{v:6}  {k}")
        print(f"{len(toks):6}  TOTAL")
        return
    if args and args[0] == "--unit":
        n = int(args[1]) - 1
        a = heads[n]
        b = heads[n + 1] if n + 1 < len(heads) else len(toks)
    elif len(args) >= 2:
        a, b = int(args[0]), int(args[1])
    else:
        a, b = 0, len(toks)
    for i in range(a, b):
        k, extra = classify(toks[i])
        s = re.sub(r"\s+", " ", txt(toks[i])).strip()
        print(f"{i:5} {k:11} {extra:14} {s[:108]}")
    print(f"-- {b-a} elements of {len(toks)}; unit heads at {heads}")

main()
