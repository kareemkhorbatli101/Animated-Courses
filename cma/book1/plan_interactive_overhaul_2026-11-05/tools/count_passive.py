"""Count, per chapter and page, how many scenes are graded on looking rather than knowing.

The PASSIVE set was established by reading each renderer's return value:
  figure     score 0 / total 0, verdict "Looked at"
  lines      score 0, verdict "Read"
  probe      score = how many answers were opened
  table      score = how many seats were read
  termcards  verdict "N of M lists opened"
  timeline2  verdict "You have seen the whole timeline."
  shelf      score = how many of the wanted items were tapped
  tank       verdict "Every pipe tried." - credits trying, not judging
  wire       verdict "Both links wired." - credits completing the wiring
  switch     verdict "Seen both" - credits flipping
  beam       score = number of moves applied, verdict "All applied"
  gauges     no input at all: a drawn panel plus one multiple-choice question

Usage: python -I count_passive.py      (run from the book's cma/book1 directory)
"""
import collections
import glob
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PASSIVE = {
    "figure", "lines", "probe", "table", "termcards", "timeline2",
    "shelf", "tank", "wire", "switch", "beam", "gauges",
}
NAV = {"section", "back", "hub"}
KIND = re.compile(r'["\']?kind["\']?\s*:\s*["\']([a-z0-9_-]+)["\']')

grand = collections.Counter()
for ch in ("ch01", "ch02"):
    print("=" * 64)
    print(ch)
    print("=" * 64)
    tot = act = pas = 0
    per = collections.Counter()
    for path in sorted(glob.glob(os.path.join(ch, "data", "*.js"))):
        src = open(path, encoding="utf-8").read()
        kinds = [k for k in KIND.findall(src) if k not in NAV]
        if not kinds:
            continue
        p = [k for k in kinds if k in PASSIVE]
        per.update(p)
        tot += len(kinds)
        pas += len(p)
        act += len(kinds) - len(p)
        flag = "  <-- every scene passive" if p and len(p) == len(kinds) else ""
        print(f"  {os.path.basename(path):14} {len(kinds):3} scenes  "
              f"{len(p):2} passive  {sorted(set(p))}{flag}")
    print(f"  TOTAL {tot} scenes: {act} ask for a decision, {pas} are graded on looking "
          f"({100 * pas // max(1, tot)}%)")
    print(f"  passive by kind: {dict(per.most_common())}")
    print()
    grand.update(per)

print("BOTH CHAPTERS, passive scenes by kind:", dict(grand.most_common()))
print("BOTH CHAPTERS, passive scene total:", sum(grand.values()))
