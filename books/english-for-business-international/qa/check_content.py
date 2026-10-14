#!/usr/bin/env python3
"""British spelling, the source's typography, figure use and task conventions."""
import re, glob, os, sys, collections
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIGDIR = os.path.join(ROOT, "build", "figures")

US = {"organize": "organise", "organized": "organised", "recognize": "recognise",
      "analyze": "analyse", "color": "colour", "favor": "favour", "labor": "labour",
      "center": "centre", "theater": "theatre", "defense": "defence",
      "traveled": "travelled", "canceled": "cancelled", "catalog": "catalogue",
      "check ": "cheque ", "program": "programme", "practicing": "practising",
      "licensed": "licenced", "fulfill": "fulfil", "enrollment": "enrolment"}

problems = []
used = collections.Counter()
for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    text = open(f, encoding="utf-8").read()
    low = text.lower()
    for bad, good in US.items():
        if re.search(r"\b" + bad.strip() + r"\b", low):
            if bad.strip() in ("check", "program"):   # legitimate in accounting copy
                continue
            problems.append(f"U{n}: American spelling '{bad.strip()}' (use '{good.strip()}')")
    if '"' in text:
        problems.append(f"U{n}: straight double quote — the source uses typographic quotes")
    for key in re.findall(r"^@FIG (\S+)", text, re.M):
        used[key] += 1
        if not os.path.exists(os.path.join(FIGDIR, key + ".png")):
            problems.append(f"U{n}: figure '{key}' is referenced but not drawn")
    for m in re.findall(r"^@TASK\s*$", text, re.M):
        problems.append(f"U{n}: empty task heading")
    # every matching task declares that one meaning is not needed
    rubs = re.findall(r"^@RUBRIC ([^\n|]+)", text, re.M)
    n_match = len(re.findall(r"^@MATCH", text, re.M))
    n_spare = sum(1 for r in rubs if "not needed" in r)
    if n_spare < n_match:
        problems.append(f"U{n}: {n_match} matching tasks but only {n_spare} say a meaning is not needed")
    # every example line is marked
    if len(re.findall(r"^@LINE 0\.", text, re.M)) < 6:
        problems.append(f"U{n}: fewer than six worked '0.' examples")

drawn = {os.path.basename(p)[:-4] for p in glob.glob(os.path.join(FIGDIR, "*.png"))
         if not os.path.basename(p).startswith("_")}
for d in sorted(drawn - set(used)):
    problems.append(f"figure '{d}' is drawn but never used")

print(f"illustrations: {len(drawn)} drawn, {len(set(used))} used, {sum(used.values())} placements")
print()
if problems:
    print(f"{len(problems)} content problems:")
    for p in problems:
        print("  -", p)
    sys.exit(1)
print("all content checks pass")
