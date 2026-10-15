#!/usr/bin/env python3
"""
Text-block parity: the rendered unit lengths, and the length of every text the
source sets a measurable range for — the warm-up reading, the Part 2 Notice, the
four listening scripts, the two Part 5 texts, the nine models, the Part 8 reading,
the Part 9 case and the unit glossary. Ranges are the source's own measured
minima and maxima, widened to the nearer whole five.
"""
import re, os, sys, glob, zipfile, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCX = os.path.join(ROOT, "dist", "EMC2_International_StudentBook.docx")

SRC_WORDS = {1: 5378, 2: 5435, 3: 5435, 4: 5500, 5: 5478,
             6: 5502, 7: 5493, 8: 5465, 9: 5525, 10: 5640}

# slot -> (label, low, high), measured from the source
SLOT_RANGE = {
    2:  ("warm-up reading", 90, 125),
    9:  ("Part 2 Notice", 80, 125),
    16: ("listening n.2", 125, 165),
    17: ("listening n.3", 125, 165),
    18: ("listening n.4", 110, 145),
    22: ("Part 5 main text", 200, 240),
    24: ("Part 5 second text", 165, 210),
    25: ("Part 6 model 1", 75, 120),
    26: ("Part 6 model 2", 70, 120),
    27: ("Part 6 model 3", 60, 120),
    28: ("Part 6 reflection model", 75, 110),
    30: ("listening n.5", 140, 175),
    33: ("7E model", 85, 115),
    34: ("Part 8 reading", 200, 235),
    37: ("Part 9 case", 160, 200),
    38: ("model decision", 80, 105),
}
GLOSSARY = (110, 165)

UNIT_TOL, BOOK_TOL = 10, 8


def wc(t):
    return len(re.findall(r"[\w’'-]+", t))


fails = []

for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")),
                key=lambda p: int(re.search(r"unit-(\d+)", p).group(1))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    lines = open(f, encoding="utf-8").read().split("\n")
    idx, i = -1, 0
    glossary_slot = 42 if n == 10 else 41
    while i < len(lines):
        l = lines[i]
        if l.startswith("@TASK"):
            idx += 1
        if re.match(r"@(TEXT|MODEL|MODELDEC)\b", l):
            body, i = [], i + 1
            while i < len(lines) and not re.match(r"@[A-Z]", lines[i]):
                if lines[i].strip():
                    body.append(lines[i])
                i += 1
            w = wc(" ".join(body))
            if idx == glossary_slot:
                lo, hi, label = GLOSSARY[0], GLOSSARY[1], "unit glossary"
            elif idx in SLOT_RANGE:
                label, lo, hi = SLOT_RANGE[idx]
            else:
                continue
            if not lo <= w <= hi:
                fails.append(f"U{n} slot {idx} ({label}): {w} words, source range {lo}-{hi}")
            continue
        i += 1

rows, tot, src_tot = [], 0, 0
if os.path.exists(DOCX):
    d = zipfile.ZipFile(DOCX).read("word/document.xml").decode()
    body = html.unescape(" ".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", d, re.S)))
    for i, p in enumerate(re.split(r"Unit \d+:", body)[1:], 1):
        w = wc(p)
        tot += w
        src_tot += SRC_WORDS[i]
        delta = 100 * (w - SRC_WORDS[i]) / SRC_WORDS[i]
        rows.append((i, w, SRC_WORDS[i], delta))
        if abs(delta) > UNIT_TOL:
            fails.append(f"U{i}: {w} rendered words vs source {SRC_WORDS[i]} ({delta:+.0f}%)")
    book = 100 * (tot - src_tot) / src_tot
    if abs(book) > BOOK_TOL:
        fails.append(f"book: {tot} rendered words vs source {src_tot} ({book:+.0f}%)")
else:
    fails.append("dist/ .docx not built — run build/compile.py first")

print(f"{'U':>3} {'rendered':>9} {'source':>7} {'Δ%':>6}")
for n, w, s, dd in rows:
    print(f"{n:>3} {w:>9} {s:>7} {dd:>+5.0f}%")
if rows:
    print(f"{'tot':>3} {tot:>9} {src_tot:>7} {100*(tot-src_tot)/src_tot:>+5.0f}%")
print()
if fails:
    print(f"{len(fails)} text problems:")
    for x in fails:
        print("  -", x)
    sys.exit(1)
print("all text-length checks pass")
