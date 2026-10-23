#!/usr/bin/env python3
"""List every prose block that runs over its measured band, with its unit."""
import re, sys, zipfile
BANDS = {"warm": (44, 81), "Part 5": (86, 202), "Part 8": (125, 175),
         "Part 9": (105, 168)}
x = zipfile.ZipFile(sys.argv[1]).read("word/document.xml").decode()
b = x[x.find("<w:body>"):]
toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", b, re.S)
def txt(s): return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s, re.S))
unit, part, warm = 0, "", False
for t in toks:
    s = txt(t)
    if '<w:sz w:val="40"/>' in t:
        unit += 1
    if '<w:sz w:val="28"/>' in t:
        part = s.strip(); warm = part.startswith("Warm")
    if 'w:fill="F8F8F8"' not in t or not s.strip():
        continue
    n = len(s.split())
    key = "warm" if warm else next((k for k in BANDS if part.startswith(k)), None)
    if not key or n < 40:
        continue
    lo, hi = BANDS[key]
    if n > hi:
        print(f"U{unit:<3} {key:<7} {n:>4}w  (band {lo}-{hi}, cut {n-hi:>3})  {s[:62]}")
