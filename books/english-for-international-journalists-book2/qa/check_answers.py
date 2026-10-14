#!/usr/bin/env python3
"""Answer-key arithmetic: does every closed, enumerated exercise get one answer per item?

Skipped on purpose: matching tasks (the key lists both columns), tasks whose key says
"(any …)" or "your own answers", and tasks whose single blank takes an open answer.
"""
import re, glob, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
problems, stats = [], []


def count_answers(txt):
    segs = [p for p in txt.split("·") if p.strip()]
    if len(segs) > 1 and all(re.match(r"^\s*\d+[\s\-)]", p) for p in segs):
        return len(segs)
    commas = [p for p in txt.split(",") if p.strip()]
    if len(commas) > 1 and all(re.match(r"^\s*\d+[\s\-)]", p) for p in commas):
        return len(commas)
    nums = re.findall(r"(?:^|[·,])\s*(\d{1,2})[\s\-)]", txt)
    if len(set(nums)) > 1:
        return len(set(nums))
    return len(segs)


for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    s = open(f, encoding="utf-8").read()
    body, _, key = s.partition("@ANS")

    items, is_match = {}, set()
    cur, mode = None, None
    for line in body.split("\n"):
        if line.startswith("@PART") or line.startswith("@KEY"):
            cur, mode = None, None; continue
        m = re.match(r"@EX (\S+) \|", line)
        if m:
            cur = m.group(1); items[cur] = 0; mode = None; continue
        if line.startswith("@NUM"):
            mode = "num" if cur else None; continue
        if line.startswith("@MATCH"):
            if cur: is_match.add(cur)
            mode = None; continue
        if line.startswith("@"):
            mode = None; continue
        if mode == "num" and line.strip() and cur:
            items[cur] += 1

    checked = 0
    for line in key.split("\n"):
        if "|" not in line:
            continue
        code, _, txt = line.partition("|")
        code, txt = code.strip(), txt.strip()
        if not re.fullmatch(r"(W\d|\d{1,2}[A-L])", code):
            continue
        if code in is_match or code not in items or items[code] < 2:
            continue
        if re.search(r"your own|\(any|example|accept", txt, re.I):
            continue
        got, want = count_answers(txt), items[code]
        checked += 1
        if got != want:
            problems.append(f"U{n} {code}: {want} items but {got} answers  →  {txt[:70]}")
    stats.append((n, len(items), checked))

print(f"{'U':>3} {'exercises':>10} {'checked':>9}")
for n, t, c in stats:
    print(f"{n:>3} {t:>10} {c:>9}")
print()
if problems:
    print(f"{len(problems)} answer-count mismatches:")
    for p in problems: print("  -", p)
    sys.exit(1)
print("every closed, enumerated exercise has one answer per item")
