#!/usr/bin/env python3
"""Structural parity check: the new book against the source's measurements."""
import re, glob, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET = {1:11, 2:8, 3:9, 4:12, 5:12, 6:8, 7:9, 8:10, 9:10, 10:9}
LETTERS = {1:"ABCDEFGHIJK", 2:"ABCDEFGH", 3:"ABCDEFGHI", 4:"ABCDEFGHIJKL",
           5:"ABCDEFGHIJKL", 6:"ABCDEFGH", 7:"ABCDEFGHI", 8:"ABCDEFGHIJ",
           9:"ABCDEFGHIJ", 10:"ABCDEFGHI"}
SRC_WORDS = {1:7687, 2:7690, 3:7310, 4:7308, 5:7534, 6:7386, 7:7119, 8:7439,
             9:7149, 10:7430}
SRC_FIGS = {1:28, 2:28, 3:28, 4:28, 5:28, 6:28, 7:28, 8:28, 9:28, 10:29}
SRC_VOCAB = {1:15, 2:18, 3:18, 4:18, 5:18, 6:18, 7:18, 8:18, 9:18, 10:18}

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
    if parts.get("W", []) != ["W1", "W2", "W3", "W4", "W5"]:
        fails.append(f"U{n}: warm-up codes {parts.get('W')}")
    if figs != SRC_FIGS[n]:
        fails.append(f"U{n}: {figs} figures, source has {SRC_FIGS[n]}")
    if vocab != SRC_VOCAB[n]:
        fails.append(f"U{n}: Part 1 vocabulary table has {vocab} pairs, "
                     f"want {SRC_VOCAB[n]}")
    # answer-key coverage
    keyed = set()
    if "@ANS" in s:
        for l in s.split("@ANS", 1)[1].split("\n"):
            if "|" not in l:
                continue
            left, _, right = l.partition("|")
            for code in re.findall(r"\b(W\d|\d{1,2}[A-L])\b", left):
                keyed.add(code)
            if left.strip().lower().startswith("open tasks"):
                for code in re.findall(r"\b(W\d|\d{1,2}[A-L])\b", right):
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
