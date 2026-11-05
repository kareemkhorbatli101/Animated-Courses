"""List every passive scene with its chapter, page, kind and title.

This is the worklist for Standard A. The PASSIVE set is justified in
evidence/kind_grading.txt by each renderer's own return value.

Usage: python -I list_passive_scenes.py [out.csv]   (run from cma/book1)
"""
import csv
import glob
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PASSIVE = {
    "figure", "lines", "probe", "table", "termcards", "timeline2",
    "shelf", "tank", "wire", "switch", "beam", "gauges",
}
WHY = {
    "figure": "score 0 / total 0, verdict 'Looked at'",
    "lines": "score 0, verdict 'Read'",
    "probe": "score = how many answers were opened",
    "table": "score = how many seats were read",
    "termcards": "verdict 'N of M lists opened'",
    "timeline2": "verdict 'You have seen the whole timeline.'",
    "shelf": "score = how many wanted items were tapped",
    "tank": "verdict 'Every pipe tried.' - credits trying",
    "wire": "verdict 'Both links wired.' - credits completing",
    "switch": "verdict 'Seen both' - credits flipping",
    "beam": "score = number of moves applied",
    "gauges": "no input at all: a drawn panel plus one MCQ",
}

rows = []
for ch in ("ch01", "ch02"):
    for path in sorted(glob.glob(os.path.join(ch, "data", "*.js"))):
        src = open(path, encoding="utf-8").read()
        page = os.path.basename(path)[:-3]
        for m in re.finditer(r'["\']?kind["\']?\s*:\s*["\']([a-z0-9_-]+)["\']', src):
            kind = m.group(1)
            if kind not in PASSIVE:
                continue
            t = re.search(r'["\']?title["\']?\s*:\s*["\']([^"\']{0,110})',
                          src[m.start():m.start() + 1400])
            rows.append({
                "chapter": ch, "page": page, "kind": kind,
                "title": (t.group(1) if t else "").strip(),
                "why_passive": WHY[kind],
            })

out = sys.argv[1] if len(sys.argv) > 1 else "passive_scenes.csv"
with open(out, "w", newline="", encoding="utf-8") as fh:
    w = csv.DictWriter(fh, fieldnames=["chapter", "page", "kind", "title", "why_passive"])
    w.writeheader()
    w.writerows(rows)

for r in rows:
    print(f"{r['chapter']}  {r['page']:11} {r['kind']:10} {r['title'][:70]}")
print()
print(f"{len(rows)} passive scenes -> {out}")
