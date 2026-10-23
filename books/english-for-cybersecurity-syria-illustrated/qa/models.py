#!/usr/bin/env python3
"""qa/models.py — every model must obey the word limit its own task states.

The 70 "Model - read this first:" boxes are written for this edition, and a
model that breaks the limit the exercise heading sets would be teaching the
opposite of the task.  This reads the limit out of the heading and measures
the model beneath it.

    python3 -I qa/models.py <book.docx>
"""
import re, sys, zipfile

x = zipfile.ZipFile(sys.argv[1]).read("word/document.xml").decode()
b = x[x.find("<w:body>"):]
toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", b, re.S)


def txt(s):
    return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s, re.S))


unit, head, limit, bad, n = 0, "", None, 0, 0
for i, t in enumerate(toks):
    s = txt(t)
    if '<w:sz w:val="40"/>' in t:
        unit += 1
    if '<w:sz w:val="24"/>' in t and s.strip():
        head = s.strip()
        m = re.search(r"\((\d+)[–-](\d+) words\)", head)
        limit = (int(m.group(1)), int(m.group(2))) if m else None
    if s.startswith("Model — read this first:"):
        nxt = txt(toks[i + 1]) if i + 1 < len(toks) else ""
        w = len(nxt.split())
        n += 1
        if not nxt.strip():
            print(f"U{unit} {head[:44]!r}: model is EMPTY")
            bad += 1
        elif limit and not (limit[0] <= w <= limit[1]):
            print(f"U{unit} {head[:44]!r}: model is {w}w, limit {limit[0]}–{limit[1]}")
            bad += 1
print(f"-- {n} models checked; {bad} outside their task's limit")
sys.exit(1 if bad else 0)
