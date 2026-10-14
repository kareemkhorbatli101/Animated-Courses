#!/usr/bin/env python3
"""Structural parity with the source: the 53-slot template, the illustrations,
the tables, the multiple-choice stems, the audio tracks and the unit length."""
import re, glob, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SRC_WORDS = {1: 5919, 2: 5923, 3: 5926, 4: 5896, 5: 5802,
             6: 5815, 7: 5922, 8: 5965, 9: 5934, 10: 6315}
SRC_FIGS, SRC_TABLES, SRC_MCQ, SRC_AUDIO = 11, 15, 10, 5
SRC_SLOTS = {n: 53 for n in range(1, 11)}
SRC_SLOTS[10] = 55
# the seven matching tasks, in the source's order and shapes (Column A rows, Column B rows)
SRC_MATCH = [(5, 6), (7, 8), (5, 6), (4, 5), (5, 6), (5, 6), (5, 6)]
BANNERS = ["Warm Up", "Part 1 ·", "Part 2 ·", "Part 3 ·", "Part 4 ·",
           "Part 5 ·", "Part 6 ·", "Part 7 ·", "Part 8 ·",
           "Part 9 ·", "Part 10 ·"]

fails, rows = [], []


def blocks(path):
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


for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    text = open(f, encoding="utf-8").read()
    bl = blocks(f)
    tags = [b[0] for b in bl]

    words = len(re.findall(r"[\w’'-]+", re.sub(r"^@\w+ ?", "", text, flags=re.M)))
    figs = tags.count("FIG")
    mcq = tags.count("MCQ")
    audio = tags.count("AUDIO")
    matches = [b for b in bl if b[0] == "MATCH"]
    tables = len(matches) * 2 + tags.count("GRAMMAR")
    slots = tags.count("TASK") + tags.count("BANNER")

    if figs != SRC_FIGS:
        fails.append(f"U{n}: {figs} illustrations, source has {SRC_FIGS}")
    if tables != SRC_TABLES:
        fails.append(f"U{n}: {tables} tables, source has {SRC_TABLES}")
    if mcq != SRC_MCQ:
        fails.append(f"U{n}: {mcq} multiple-choice stems, source has {SRC_MCQ}")
    if audio != SRC_AUDIO:
        fails.append(f"U{n}: {audio} audio tracks, source has {SRC_AUDIO}")
    if slots != SRC_SLOTS[n]:
        fails.append(f"U{n}: {slots} task slots, source has {SRC_SLOTS[n]}")

    shapes = []
    for _, _, body in matches:
        a = b = 0
        side = "a"
        for l in body:
            if l.strip() == "@@":
                side = "b"
            elif side == "a":
                a += 1
            else:
                b += 1
        shapes.append((a, b))
    if shapes != SRC_MATCH:
        fails.append(f"U{n}: matching shapes {shapes} != source {SRC_MATCH}")

    got = [b[1][0] for b in bl if b[0] == "BANNER"]
    if len(got) != 11 or not all(g.startswith(p) for g, p in zip(got, BANNERS)):
        fails.append(f"U{n}: banner sequence wrong: {got}")

    for _, a, _ in [b for b in bl if b[0] == "MCQ"]:
        if len(a) != 5:
            fails.append(f"U{n}: a multiple-choice stem has {len(a)-1} options, not 4")
            break

    d = 100 * (words - SRC_WORDS[n]) / SRC_WORDS[n]
    if abs(d) > 12:
        fails.append(f"U{n}: {words} words vs source {SRC_WORDS[n]} ({d:+.0f}%)")
    rows.append((n, words, SRC_WORDS[n], d, figs, tables, mcq, audio, slots))

print(f"{'U':>3} {'words':>7} {'src':>7} {'Δ%':>6} {'figs':>5} {'tbl':>4} {'MCQ':>4} {'aud':>4} {'slots':>6}")
for r in rows:
    print(f"{r[0]:>3} {r[1]:>7} {r[2]:>7} {r[3]:>+5.0f}% {r[4]:>5} {r[5]:>4} {r[6]:>4} {r[7]:>4} {r[8]:>6}")
tw, sw = sum(r[1] for r in rows), sum(r[2] for r in rows)
print(f"{'tot':>3} {tw:>7} {sw:>7} {100*(tw-sw)/sw if sw else 0:>+5.0f}%")
print()
if fails:
    print(f"{len(fails)} parity problems:")
    for x in fails:
        print("  -", x)
    sys.exit(1)
print("all structural parity checks pass")
