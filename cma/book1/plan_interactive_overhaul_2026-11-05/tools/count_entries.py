"""Count the journal entries the book works, and the term bank sizes.

Run from the book's cma/book1 directory. Reads the committed source text, which is
the oracle, not the generated site.
"""
import glob
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# --- the book's own source text -------------------------------------------------
for path in sorted(glob.glob("source/*.txt")):
    text = open(path, encoding="utf-8", errors="replace").read()
    dr = len(re.findall(r"\bDr\.?\b", text))
    cr = len(re.findall(r"\bCr\.?\b", text))
    debit = len(re.findall(r"\bdebit", text, re.I))
    credit = len(re.findall(r"\bcredit", text, re.I))
    # a worked entry usually appears as a Dr/Cr pair on consecutive lines
    pairs = len(re.findall(r"Dr\.?[^\n]*\n\s*Cr\.?", text))
    print(f"{os.path.basename(path)}: {len(text.split())} words")
    print(f"   Dr tokens {dr}, Cr tokens {cr}, Dr/Cr adjacent pairs {pairs}")
    print(f"   'debit' {debit}, 'credit' {credit}")
    figs = sorted(set(re.findall(r"\bFigure\s+(\d+-\d+|F\d+-\d+)", text)))
    print(f"   figures named: {len(figs)} {figs[:14]}")
    ex = sorted(set(re.findall(r"(Extended Example\s+\w+|WORKED EXAMPLE)", text)))
    print(f"   worked/extended examples: {ex}")
    print()

# --- the term banks -------------------------------------------------------------
for path in sorted(glob.glob("assets/terms-ch0*.js")):
    src = open(path, encoding="utf-8").read()
    rows = re.findall(r'\[\s*"([^"]+)"\s*,\s*"([^"]*)"\s*,', src)
    with_ar = [r for r in rows if re.search(r"[؀-ۿ]", r[1])]
    print(f"{os.path.basename(path)}: {len(rows)} rows, {len(with_ar)} carry Arabic")

for path in sorted(glob.glob("assets/terms-fr-ch0*.js")):
    src = open(path, encoding="utf-8").read()
    print(f"{os.path.basename(path)}: {len(re.findall(chr(34) + '[^' + chr(34) + ']+' + chr(34) + r'\s*:', src))} French terms")

# --- pages needing a Brief ------------------------------------------------------
for ch in ("ch01", "ch02"):
    pages = [p for p in glob.glob(os.path.join(ch, "*.html"))]
    print(f"{ch}: {len(pages)} pages")
print("book-level pages:", [os.path.basename(p) for p in glob.glob("*.html")])
