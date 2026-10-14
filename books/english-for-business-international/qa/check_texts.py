#!/usr/bin/env python3
"""The measured text blocks: every reading, dialogue, model and glossary is
reported against the range measured in the source."""
import re, glob, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

RANGES = {
    "warm-up reading": (181, 203),
    "Part 5 reading A": (197, 241),
    "Part 5 reading B": (173, 183),
    "Part 8 reading": (197, 222),
    "Part 9 scenario": (176, 205),
    "dialogue 1": (158, 196),
    "dialogue 2": (127, 157),
    "dialogue 3": (127, 150),
    "7B dialogue": (151, 168),
    "models": (94, 121),
    "glossary": (117, 157),
}


def wc(t):
    return len(re.findall(r"[\w’'-]+", t))


def parse(path):
    out, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        if raw.strip() == "@@":
            if cur:
                cur[2].append("@@")
            continue
        if raw.startswith("@"):
            if cur:
                out.append(cur)
            tag, _, rest = raw[1:].partition(" ")
            cur = (tag, [a.strip() for a in rest.split("|")] if rest.strip() else [], [])
        elif cur is not None and raw.strip():
            cur[2].append(raw.rstrip())
    if cur:
        out.append(cur)
    return out


problems, rows = [], []
for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    bl = parse(f)
    bodies, models, gloss, part = [], [], 0, 0
    tagged = []
    for tag, a, body in bl:
        if tag == "BANNER":
            m = re.match(r"Part (\d+)", a[0])
            part = int(m.group(1)) if m else 0
        if tag == "BODY":
            tagged.append((part, wc(" ".join(body) if body else a[0])))
        elif tag == "MODEL":
            models.append(wc(" ".join(body) if body else a[0]))
        elif tag == "GLOSSARY":
            gloss = wc(" ".join(body) if body else a[0])
    warm = [w for p, w in tagged if p == 0 and w > 120]
    p3 = [w for p, w in tagged if p == 3 and w > 90]
    p5 = [w for p, w in tagged if p == 5 and w > 120]
    p7 = [w for p, w in tagged if p == 7 and w > 90]
    p8 = [w for p, w in tagged if p == 8 and w > 120]
    p9 = [w for p, w in tagged if p == 9 and w > 120]

    def chk(label, vals, want_n=1):
        lo, hi = RANGES[label]
        if len(vals) < want_n:
            problems.append(f"U{n}: {label}: found {len(vals)}, expected {want_n}")
            return
        for v in vals[:want_n]:
            if not (lo - 12 <= v <= hi + 12):
                problems.append(f"U{n}: {label} is {v} words, source range {lo}-{hi}")

    chk("warm-up reading", warm)
    chk("Part 5 reading A", p5[:1])
    chk("Part 5 reading B", p5[1:2])
    chk("Part 8 reading", p8)
    chk("Part 9 scenario", p9)
    for i, lbl in enumerate(("dialogue 1", "dialogue 2", "dialogue 3")):
        chk(lbl, p3[i:i + 1])
    chk("7B dialogue", p7)
    lo, hi = RANGES["models"]
    for m in models:
        if not (lo - 12 <= m <= hi + 12):
            problems.append(f"U{n}: a model is {m} words, source range {lo}-{hi}")
    if len(models) != 6:
        problems.append(f"U{n}: {len(models)} writing models, source has 6")
    lo, hi = RANGES["glossary"]
    if gloss and not (lo - 15 <= gloss <= hi + 15):
        problems.append(f"U{n}: glossary is {gloss} words, source range {lo}-{hi}")
    rows.append((n, warm[:1], p5[:2], p8[:1], p9[:1], p3[:3], p7[:1], models, gloss))

print(f"{'U':>3}  {'warm':>5} {'P5a/P5b':>10} {'P8':>5} {'P9':>5}  {'dialogues':<18} {'7B':>4}  {'models':<30} {'gloss':>5}")
for r in rows:
    print(f"{r[0]:>3}  {str(r[1][0]) if r[1] else '-':>5} {str(r[2]):>10} {str(r[3][0]) if r[3] else '-':>5} "
          f"{str(r[4][0]) if r[4] else '-':>5}  {str(r[5]):<18} {str(r[6][0]) if r[6] else '-':>4}  {str(r[7]):<30} {r[8]:>5}")
print()
if problems:
    print(f"{len(problems)} text-length problems:")
    for p in problems:
        print("  -", p)
    sys.exit(1)
print("every measured text block is inside the source's range")
