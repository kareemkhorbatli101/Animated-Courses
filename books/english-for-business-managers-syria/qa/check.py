#!/usr/bin/env python3
"""qa/check.py — whole-document parity against the source.
Set BM_SRC to the source .docx or its unzipped word/document.xml.
"""
import os, re, sys, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
INT = os.path.join(os.path.dirname(HERE), "dist",
                   "EnglishForBusinessManagers_Syria_StudentBook_A2.docx")
SRC = os.environ.get("BM_SRC")


def load(p):
    if p.endswith(".docx"):
        return zipfile.ZipFile(p).read("word/document.xml").decode()
    return open(p, encoding="utf-8").read()


def paras(x):
    return re.findall(r"<w:p\b(?:[^>]*/>|.*?</w:p>)", x[x.find("<w:body>"):], re.S)


def text(s):
    return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s, re.S))


def ppr(p):
    m = re.search(r"<w:pPr>.*?</w:pPr>", p, re.S)
    return m.group(0) if m else ""


def measure(x):
    ps = paras(x)
    body = x[x.find("<w:body>"):]
    hits = [re.search(r'<w:shd[^>]*w:fill="([0-9A-Fa-f]{6})"', ppr(p)) for p in ps]
    pfill = [h.group(1) for h in hits if h]

    def nfill(*vals):
        return sum(1 for f in pfill if f in vals)

    m = {
        "paragraphs": len(ps),
        "page breaks": len(re.findall(r"pageBreakBefore", x)) + len(re.findall(r'w:type="page"', x)),
        "female-voice paras": sum(1 for p in ps if re.search(
            r'<w:color w:val="(?:7B2D8B|990099)"', p)),
        "male-voice paras": sum(1 for p in ps if re.search(
            r'<w:color w:val="(?:1A56A0|0066CC)"', p)),
        "tables": len(re.findall(r"<w:tbl>", body)),
        "table rows": len(re.findall(r"<w:tr\b", body)),
        "table cells": len(re.findall(r"<w:tc>", body)),
        "Heading1": len(re.findall(r'<w:pStyle w:val="Heading1"', x)),
        "Heading2": len(re.findall(r'<w:pStyle w:val="Heading2"', x)),
        "Heading3": len(re.findall(r'<w:pStyle w:val="Heading3"', x)),
        "ListParagraph": len(re.findall(r'<w:pStyle w:val="ListParagraph"', x)),
        "numbered paras": len(re.findall(r"<w:numPr>", x)),
        "bordered paras": len(re.findall(r"<w:pBdr>", x)),
        "part bars": nfill("FF9900", "0066CC", "009688", "9C27B0", "E91E63", "4CAF50"),
        "instruction boxes": nfill("FFF9E6"),
        "dialogue speech": nfill("F8FAFF"),
        "dialogue bars": nfill("1A56A0"),
        "answer blocks": nfill("F8FFF8"),
        "reading panels": nfill("F8F8F8"),
        "track heads": nfill("F8FCFF"),
        "code lines": nfill("F5F5F5"),
        "audio chips": nfill("F0F0F0"),
        "play notes": nfill("E6F3FF"),
        "doc heads": nfill("EEF4FF"),
        "blank paras": sum(1 for p in ps if not text(p).strip()),
        "emoji 🔊": x.count("🔊"),
        "emoji 📝": x.count("📝"),
        "em dashes": x.count("—"),
        "fill-in blanks": len(re.findall(r"_{10,}", x)),
        "words": len(" ".join(text(p) for p in ps).split()),
    }
    return m


if not SRC:
    sys.exit("set BM_SRC to the source document")
a, b = measure(load(SRC)), measure(load(INT))
w = max(len(k) for k in a)
bad = 0
print(f"{'metric':{w}}  {'source':>8} {'intl':>8}  delta")
for k in a:
    d = b[k] - a[k]
    flag = "" if d == 0 else ("  <-- " if k not in ("words", "em dashes") else "  (text)")
    if d and k not in ("words", "em dashes"):
        bad += 1
    print(f"{k:{w}}  {a[k]:8} {b[k]:8}  {d:+6}{flag}")
print(f"\n{bad} structural metric(s) differ")
