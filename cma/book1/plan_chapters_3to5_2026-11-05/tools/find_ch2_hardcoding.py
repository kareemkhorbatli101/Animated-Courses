"""Where tools/cma_scenes still assumes the chapter is 2.

The generator takes --chapter N and Chapter 2 was built with it, so it LOOKS generic.
It is not: ORDER names s2-1..s2-6 literally, and `python -m tools.cma_scenes --chapter 3`
dies with KeyError 's2-1'. This lists every place the chapter number is written in
rather than passed in, which is the work list for making it genuinely per-chapter.

Usage: python -I find_ch2_hardcoding.py
"""
import io
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

SRC = r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python\tools\cma_scenes.py"
lines = io.open(SRC, encoding="utf-8").read().splitlines()

# patterns that pin the file to chapter 2. Each is a literal "2" where an N belongs.
PATS = [
    ("page id", re.compile(r'"s2-\d"')),
    ("section number", re.compile(r'"2\.\d"')),
    ("figure tag", re.compile(r'F02-\d\d')),
    ("case id", re.compile(r'"C2-\d"')),
    ("chapter key", re.compile(r'\b2:\s*\{')),
    ("ledger file", re.compile(r'ledger-ch02')),
    ("asset ch02", re.compile(r'ch02')),
]

hits = {}
for i, ln in enumerate(lines, 1):
    s = ln.strip()
    if s.startswith("#") or s.startswith("*") or s.startswith("/*"):
        continue
    for name, pat in PATS:
        if pat.search(ln):
            hits.setdefault(name, []).append((i, s[:96]))

total = 0
for name, rows in hits.items():
    print("=" * 74)
    print("%s  -  %d line(s)" % (name.upper(), len(rows)))
    print("=" * 74)
    for i, s in rows[:28]:
        print("  %5d  %s" % (i, s))
    if len(rows) > 28:
        print("  ... and %d more" % (len(rows) - 28))
    total += len(rows)
    print()

print("TOTAL lines pinned to chapter 2: %d" % total)
print()
print("Functions that take `d` (the chapter) and so are already generic:")
gen = re.findall(r"^def ([a-z_0-9]+)\(d[,)]", "\n".join(lines), re.M)
print("  %d: %s" % (len(gen), ", ".join(gen)))
print()
print("Functions that take NO chapter at all (suspect):")
nog = re.findall(r"^def ([a-z_0-9]+)\(\)", "\n".join(lines), re.M)
print("  %d: %s" % (len(nog), ", ".join(nog)))
