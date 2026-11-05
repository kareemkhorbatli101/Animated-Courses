"""What chapters 3-5 add: terms not yet drawn, and every figure the chapters name.

The icon registry covers 95 terms today. Anything here that is not in it needs a mark,
and the figure captions are the best guide to which instruments each section wants.
"""
import glob
import io
import os
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book  # noqa: E402
from tools import cma_scenes as CS  # noqa: E402

SITE = r"D:\MyWork\AnimatedMatrix\Apps\_publish_Animated-Courses\cma\book1"

# the terms icons.js already draws
icons = io.open(os.path.join(SITE, "assets", "icons.js"), encoding="utf-8").read()
drawn = set()
for m in re.finditer(r'reg\(\s*\d+\s*,\s*"[a-z0-9]+"\s*,\s*"[a-z0-9]*"\s*,\s*\[(.*?)\]\)',
                     icons, re.S):
    drawn |= set(re.findall(r'"([^"]+)"', m.group(1)))
print("icons.js registers %d terms today" % len(drawn))
print()

new_all = []
for n in (3, 4, 5):
    path = os.path.join(SITE, "assets", "terms-ch%02d.js" % n)
    src = io.open(path, encoding="utf-8").read()
    rows = re.findall(r'\[\s*"([^"]+)"\s*,\s*"([^"]*)"\s*,', src)
    ens = [r[0].strip().lower() for r in rows]
    ar = [r for r in rows if re.search(r"[\u0600-\u06FF]", r[1])]
    new = sorted({e for e in ens} - drawn)
    new_all += new
    print("CHAPTER %d: %d bridged rows, %d carry Arabic, %d need a NEW mark"
          % (n, len(rows), len(ar), len(new)))
    for t in new:
        print("     ", t)
    print()

print("TOTAL new terms needing a mark across 3-5: %d (distinct %d)"
      % (len(new_all), len(set(new_all))))
print()

for n in (3, 4, 5):
    d = cma_book.load(n)
    print("=" * 76)
    print("CHAPTER %d FIGURES" % n)
    print("=" * 76)
    figs = CS.figures_of(d, n)          # the drawn ones (a png on disk)
    allf = CS.all_figures(d, n)         # every numbered figure - a SET of tags, not a map
    caps = {}
    for b in d["seq"]:
        if b["k"] == "Caption":
            m = re.search(r"F%02d-\d+" % n, b.get("t", ""))
            if m:
                caps[m.group(0)] = re.sub(r"\s+", " ", b["t"])
    for tag in sorted(allf):
        mark = "PNG" if tag in figs else "tbl"
        print("  %s %s" % (mark, caps.get(tag, tag)[:98]))
    print("  -> %d numbered, %d drawn as a picture, %d are tables"
          % (len(allf), len(figs), len(allf) - len(figs)))
    print()
