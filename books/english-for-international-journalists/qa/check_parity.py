#!/usr/bin/env python3
"""Structural parity check: the new book against the source's measurements."""
import re, glob, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET = {1:9, 2:6, 3:7, 4:10, 5:10, 6:6, 7:7, 8:8, 9:8, 10:7}
LETTERS = {1:"ABCDEFGHI", 2:"ABCDEF", 3:"ABCDEFG", 4:"ABCDEFGHIJ", 5:"ABCDEFGHIJ",
           6:"ABCDEF", 7:"ABCDEFG", 8:"ABCDEFGH", 9:"ABCDEFGH", 10:"ABCDEFG"}
SRC_WORDS = {1:8024, 2:6231, 3:5752, 4:5647, 5:5679, 6:5496, 7:5646, 8:5705,
             9:5760, 10:6080}
SRC_FIGS = {1:24, 2:24, 3:24, 4:24, 5:24, 6:24, 7:24, 8:25, 9:24, 10:26}

fails = []
rows = []
for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    s = open(f, encoding="utf-8").read()
    parts, cur = {}, "W"
    for line in s.split("\n"):
        m = re.match(r"@PART (\d+) ", line)
        if m: cur = int(m.group(1))
        m = re.match(r"@EX (\S+) \|", line)
        if m: parts.setdefault(cur, []).append(m.group(1))
    figs = len(re.findall(r"^@FIG ", s, re.M))
    words = len(re.findall(r"\S+", re.sub(r"^@\w+", "", s, flags=re.M)))
    vocab = 0
    if "\n@VOCAB\n" in s:
        for l in s.split("\n@VOCAB\n")[1].split("\n"):
            if l.startswith("@") or not l.strip():
                break
            if "|" in l:
                vocab += 1
    # exercise distribution
    for p, want in TARGET.items():
        got = parts.get(p, [])
        if len(got) != want:
            fails.append(f"U{n} part {p}: {len(got)} exercises, want {want}")
        want_codes = [f"{p}{c}" for c in LETTERS[p]]
        if got != want_codes:
            fails.append(f"U{n} part {p}: codes {got} != {want_codes}")
    if parts.get("W", []) != ["W1", "W2", "W3", "W4"]:
        fails.append(f"U{n}: warm-up codes {parts.get('W')}")
    if figs != SRC_FIGS[n]:
        fails.append(f"U{n}: {figs} figures, source has {SRC_FIGS[n]}")
    if vocab != 14:
        fails.append(f"U{n}: Part 1 vocabulary table has {vocab} pairs, want 14")
    # answer-key coverage
    keyed = set()
    if "@ANS" in s:
        for l in s.split("@ANS", 1)[1].split("\n"):
            if "|" not in l:
                continue
            left, _, right = l.partition("|")
            for code in re.findall(r"\b(W\d|\d{1,2}[A-J])\b", left):
                keyed.add(code)
            if left.strip().lower().startswith("open tasks"):
                for code in re.findall(r"\b(W\d|\d{1,2}[A-J])\b", right):
                    keyed.add(code)
    allcodes = {c for v in parts.values() for c in v}
    missing = sorted(allcodes - keyed)
    if missing:
        fails.append(f"U{n}: {len(missing)} exercises absent from the key: {missing}")
    d = 100 * (words - SRC_WORDS[n]) / SRC_WORDS[n]
    if abs(d) > 12:
        fails.append(f"U{n}: {words} words vs source {SRC_WORDS[n]} ({d:+.0f}%)")
    rows.append((n, words, SRC_WORDS[n], d, figs, SRC_FIGS[n], vocab))

print(f"{'U':>3} {'words':>7} {'src':>7} {'Δ%':>6} {'figs':>5} {'src':>4} {'vocab':>6}")
for n, w, sw, d, fg, sf, v in rows:
    print(f"{n:>3} {w:>7} {sw:>7} {d:>+5.0f}% {fg:>5} {sf:>4} {v:>6}")
tw, tsw = sum(r[1] for r in rows), sum(r[2] for r in rows)
print(f"{'tot':>3} {tw:>7} {tsw:>7} {100*(tw-tsw)/tsw:>+5.0f}%")
print()
if fails:
    print(f"{len(fails)} parity problems:")
    for x in fails: print("  -", x)
    sys.exit(1)
print("all structural parity checks pass")
