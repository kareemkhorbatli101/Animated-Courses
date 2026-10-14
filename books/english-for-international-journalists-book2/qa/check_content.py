#!/usr/bin/env python3
"""Content QA: things a structural check cannot see."""
import re, glob, os, sys, collections
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
files = sorted(glob.glob(os.path.join(ROOT, "content", "*.txt")))
warn = []

# --- American spellings that should be British
AMERICAN = {r"\bpractice\b(?=\s+(it|the|them))": "practise (verb)",
            r"\bcolor\b": "colour", r"\borganiz": "organis",
            r"\brecognize": "recognise", r"\bprogram\b": "programme",
            r"\bneighbor\b": "neighbour", r"\btraveled\b": "travelled",
            r"\bcenter\b": "centre", r"\bdefense\b": "defence",
            r"\banalyze": "analyse", r"\bapologize": "apologise"}
# --- figures referenced vs figures that exist
figdir = os.path.join(ROOT, "build", "figures")
have = {f[:-4] for f in os.listdir(figdir) if f.endswith(".png")}
used = collections.Counter()

for f in files:
    s = open(f, encoding="utf-8").read()
    name = os.path.basename(f)
    for pat, fix in AMERICAN.items():
        for m in re.finditer(pat, s):
            warn.append(f"{name}: American spelling '{m.group(0)}' → {fix}")
    for m in re.finditer(r"^@FIG (\S+)", s, re.M):
        used[m.group(1)] += 1
        if m.group(1) not in have:
            warn.append(f"{name}: figure '{m.group(1)}' does not exist")
    # straight apostrophes are fine in source (the renderer curls them); check for
    # stray markup instead
    for i, line in enumerate(s.split("\n"), 1):
        if line.count("**") % 2:
            warn.append(f"{name}:{i}: odd number of ** markers: {line[:60]}")
    # every @EX must have a prompt
    for m in re.finditer(r"^@EX (\S+) \|\s*$", s, re.M):
        warn.append(f"{name}: exercise {m.group(1)} has an empty prompt")
    # answer key must not be empty
    if "unit-" in name and "@ANS" not in s:
        warn.append(f"{name}: no answer key")

unused = sorted(have - set(used))
print(f"figures: {len(have)} drawn, {len(used)} used, {sum(used.values())} placements")
if unused:
    print(f"  unused figures ({len(unused)}): {', '.join(unused)}")
print(f"  most reused: {used.most_common(5)}")
print()

# --- vocabulary recycling: Part 1 words should reappear in Part 10
for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
    s = open(f, encoding="utf-8").read()
    n = re.search(r"unit-(\d+)", f).group(1)
    voc = []
    if "\n@VOCAB\n" in s:
        for l in s.split("\n@VOCAB\n")[1].split("\n"):
            if l.startswith("@") or not l.strip():
                break
            voc.append(l.split("|")[0].strip().lower())
    p10 = s.split("@PART 10 ", 1)[1].split("@PART 11", 1)[0].lower() if "@PART 10 " in s else ""
    recycled = [w for w in voc if w in p10]
    if len(recycled) < 5:
        warn.append(f"unit {n}: only {len(recycled)}/14 Part-1 words recycled in Part 10")

if warn:
    print(f"{len(warn)} content warnings:")
    for w in warn[:60]:
        print("  -", w)
    sys.exit(1)
print("all content checks pass")

# ---------------------------------------------------------------- text lengths
import statistics
print()
rows = []
for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    s = open(f, encoding="utf-8").read()
    blocks = re.split(r"\n(?=@)", s)
    readings, dialogues, cases, warm = [], [], [], []
    for b in blocks:
        head = b.split("\n", 1)[0]
        body = b.split("\n", 1)[1] if "\n" in b else ""
        wc = len(re.findall(r"\S+", body))
        if head.startswith("@READING"): readings.append(wc)
        elif head.startswith("@DIALOGUE"): dialogues.append(len(body.strip().split("\n")))
        elif head.startswith("@CASE"): cases.append(len(re.findall(r"\S+", head)))
        elif head.startswith("@WARMBOX"): warm.append(wc)
    rows.append((n, readings, dialogues, cases, warm))

print(f"{'U':>3} {'readings (words)':>24} {'dialogue turns':>16} {'cases (words)':>18} {'warm-up':>8}")
for n, r, d, c, w in rows:
    print(f"{n:>3} {str(r):>24} {str(d):>16} {str(c):>18} {str(w):>8}")
