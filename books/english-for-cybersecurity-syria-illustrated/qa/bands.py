#!/usr/bin/env python3
"""qa/bands.py — measured word bands by block type, for two documents.

Criterion 11: every block band measured off the source is respected.

    python3 -I qa/bands.py <source.docx> [built.docx]
"""
import re, sys, zipfile

BANDS = {        # the source's measured bands, from the plan
    "warm-up reading": (44, 81), "Part 5 reading": (86, 202),
    "Part 7 dialogue": (76, 109), "Part 8 case": (125, 175),
    "Part 9 case": (105, 168),
}


def blocks(p):
    x = zipfile.ZipFile(p).read("word/document.xml").decode()
    b = x[x.find("<w:body>"):]
    toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)", b, re.S)

    def txt(s):
        return "".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", s, re.S))

    out = {k: [] for k in BANDS}
    part = ""
    warm = False
    for t in toks:
        s = txt(t)
        if '<w:sz w:val="28"/>' in t:
            part = s.strip()
            warm = part.startswith("Warm")
        if 'w:fill="F8F8F8"' not in t or not s.strip():
            continue
        n = len(s.split())
        if n < 40:
            continue                      # frames, cards and phrase banks
        if warm:
            out["warm-up reading"].append(n)
        elif part.startswith("Part 5"):
            out["Part 5 reading"].append(n)
        elif part.startswith("Part 7"):
            out["Part 7 dialogue"].append(n)
        elif part.startswith("Part 8"):
            out["Part 8 case"].append(n)
        elif part.startswith("Part 9"):
            out["Part 9 case"].append(n)
    return out


def show(name, d):
    print(f"--- {name} ---")
    for k, v in d.items():
        if not v:
            continue
        lo, hi = BANDS[k]
        over = sum(1 for n in v if n > hi)
        print(f"{k:>18}  n={len(v):>3}  min={min(v):>4}  mean={sum(v)//len(v):>4}"
              f"  max={max(v):>4}   band {lo}-{hi}"
              + (f"   {over} over band" if over else "   all in band"))


show("source", blocks(sys.argv[1]))
if len(sys.argv) > 2:
    show("built", blocks(sys.argv[2]))
