#!/usr/bin/env python3
"""
Text-block parity: the rendered unit lengths, and the length of every text the
source sets a measurable range for — the two reading boxes in Part 5, the Part 8
and Part 9 cases, the four listening scripts, the writing models and the glossary.
Ranges are the source's own measured minima and maxima, widened to the nearer
whole ten, because the source itself declares round numbers it does not hit.
"""
import re, os, sys, glob, zipfile, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCX = os.path.join(ROOT, "dist", "EnglishForBanking_International_StudentBook.docx")

SRC_WORDS = {1: 4719, 2: 4461, 3: 4373, 4: 4488, 5: 4350,
             6: 4544, 7: 4739, 8: 4519, 9: 4496, 10: 4704}

# (label, low, high) measured from the source
RANGE = {
    "5A":  (127, 190),      # company / guideline profile, declared "About 200 words"
    "5C":  (67, 120),       # team-member or short profile, declared "About 120-130"
    "P8":  (152, 190),      # global case, declared "About 200-210 words"
    "P9":  (136, 190),      # branch case, declared "About 170-190 words"
    "3B":  (30, 90),
    "3C":  (30, 95),
    "3D":  (80, 115),
    "7B":  (60, 100),
    "MODEL": (7, 75),
    "GLOSS": (25, 100),
}

UNIT_TOL = 10      # per cent, per unit
BOOK_TOL = 8       # per cent, whole book


def wc(t):
    return len(re.findall(r"[\w’'-]+", t))


fails = []

# ---------------------------------------------------------------- the blocks
for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")),
                key=lambda p: int(re.search(r"unit-(\d+)", p).group(1))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    txt = open(f, encoding="utf-8").read()
    cur = None
    for tag, args, body in re.findall(r"^@(\w+)([^\n]*)\n((?:(?!@)[^\n]*\n)*)", txt, re.M):
        if tag == "TASK":
            cur = args.split("|")[0].strip()
        elif tag == "PART":
            if "Part 8" in args:
                cur = "P8"
            elif "Part 9" in args:
                cur = "P9"
        key = None
        if tag == "READ":
            key = cur if cur in ("5A", "5C", "P8", "P9") else None
            if key is None:
                fails.append(f"U{n}: a reading box sits outside 5A/5C/Part 8/Part 9")
        elif tag == "SCRIPT" and cur in ("3B", "3C", "3D", "7B"):
            key = cur
        elif tag in ("MODEL", "GLOSS"):
            key = tag
        if key:
            w = wc(body)
            lo, hi = RANGE[key]
            if not lo <= w <= hi:
                fails.append(f"U{n} {cur or tag}: {key} is {w} words, source range {lo}-{hi}")

    # every reading box must declare its length, as the source's do
    for tag, args in re.findall(r"^@(\w+)([^\n]*)$", txt, re.M):
        if tag == "READ" and not re.search(r"About \d+ words", args):
            fails.append(f"U{n}: a reading box does not declare 'About N words'")

# ---------------------------------------------------------------- the lengths
rows, tot, src_tot = [], 0, 0
if os.path.exists(DOCX):
    d = zipfile.ZipFile(DOCX).read("word/document.xml").decode()
    body = html.unescape(" ".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", d, re.S)))
    for i, p in enumerate(re.split(r"Unit \d+ ·", body)[1:], 1):
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
for n, w, s, d in rows:
    print(f"{n:>3} {w:>9} {s:>7} {d:>+5.0f}%")
if rows:
    print(f"{'tot':>3} {tot:>9} {src_tot:>7} {100*(tot-src_tot)/src_tot:>+5.0f}%")
print()
if fails:
    print(f"{len(fails)} text problems:")
    for x in fails:
        print("  -", x)
    sys.exit(1)
print("all text-length checks pass")
