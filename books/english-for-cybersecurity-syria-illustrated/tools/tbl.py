#!/usr/bin/env python3
"""Summarise a table element of a .docx: grid, tblPr, per-cell fill/align/bold/text."""
import re, sys, zipfile
p = sys.argv[1]
x = zipfile.ZipFile(p).read("word/document.xml").decode()
body = x[x.find("<w:body>"):]
toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", body, re.S)
for a in sys.argv[2:]:
    t = toks[int(a)]
    print(f"===== {a} =====")
    pr = re.search(r"<w:tblPr>.*?</w:tblPr>", t, re.S).group(0)
    print("tblW   ", re.search(r'<w:tblW [^>]*>', pr).group(0))
    print("borders", "yes" if "<w:tblBorders>" in pr else "NO")
    print("cellMar", re.findall(r'<w:tblCellMar>.*?</w:tblCellMar>', pr, re.S))
    print("grid   ", re.findall(r'<w:gridCol w:w="(\d+)"', t))
    rows = re.findall(r"<w:tr\b.*?</w:tr>", t, re.S)
    for ri, r in enumerate(rows):
        print(f" tblPrEx={'y' if '<w:tblPrEx>' in r else 'n'} trPr={re.findall(r'<w:trPr>.*?</w:trPr>', r, re.S)}")
        for ci, c in enumerate(re.findall(r"<w:tc>.*?</w:tc>", r, re.S)):
            w = (re.search(r'<w:tcW w:w="(\d+)"', c) or [0, "-"])[1]
            fill = (re.search(r'w:fill="([0-9A-Fa-f]{6})"', c) or [0, "-"])[1]
            jc = (re.search(r'<w:jc w:val="(\w+)"', c) or [0, "-"])[1]
            b = "B" if "<w:b/>" in c else "-"
            col = (re.search(r'<w:color w:val="([0-9A-Fa-f]{6})"', c) or [0, "-"])[1]
            tx = "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", c, re.S))
            mar = "y" if "<w:tcMar>" in c else "n"
            print(f"   r{ri}c{ci} w={w:>5} fill={fill} jc={jc:<6} {b} col={col} mar={mar} | {tx[:50]!r}")
        if ri >= 2:
            print(f"   ... {len(rows)} rows total"); break
