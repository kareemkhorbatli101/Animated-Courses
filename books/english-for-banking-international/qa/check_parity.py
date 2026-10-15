#!/usr/bin/env python3
"""
Structural parity with the source, measured from the source's own OOXML:
the task-code sequence, the eleven part bars, the illustrations, the audio
tracks, the matching-table shapes, the Grammar Focus box and the unit length.
"""
import re, glob, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# measured from 0b8a1a25-English_for_Banking_B1_Fixed_2.docx
SRC_WORDS = {1: 4719, 2: 4461, 3: 4373, 4: 4488, 5: 4350,
             6: 4544, 7: 4739, 8: 4519, 9: 4496, 10: 4704}

CANON = (["W-A", "W-B"]
         + [f"1{c}" for c in "ABCDE"] + [f"2{c}" for c in "ABCDE"]
         + [f"3{c}" for c in "ABCDE"] + [f"4{c}" for c in "ABCDE"]
         + [f"5{c}" for c in "ABCD"] + [f"6{c}" for c in "ABCD"]
         + [f"7{c}" for c in "ABCDE"] + [f"8{c}" for c in "ABCD"]
         + ["9A", "9B"] + ["10A", "10B", "10C"])

SRC_TASKS = {n: list(CANON) for n in range(1, 11)}
# Unit 1 adds W-C and 6E-6F; Unit 2 adds 1F and loses nothing; Unit 10 adds 10D
SRC_TASKS[1] = (["W-A", "W-B", "W-C"] + CANON[2:CANON.index("6D") + 1]
                + ["6E", "6F"] + CANON[CANON.index("6D") + 1:])
SRC_TASKS[2] = CANON[:CANON.index("1E") + 1] + ["1F"] + CANON[CANON.index("1E") + 1:]
SRC_TASKS[10] = CANON + ["10D"]

# the matching-table shapes (Column A rows, excluding the header and the extra row),
# in the source's order, per unit
SRC_MATCH = {
    1:  [7, 5, 3, 4, 5, 5, 4, 4],   # 1A 1C 3E 4E 5A 6A 7A 8B
    2:  [6, 6, 4, 4, 4, 4],         # 1A 1E 3E 4A 4E 8B
    3:  [7, 5, 4, 4, 4, 4, 4],      # 1A 1D 3E 4A 4E 7A 8B
    4:  [8, 5, 4, 4, 4, 4, 4],
    5:  [8, 5, 4, 4, 4, 4, 4],
    6:  [8, 5, 4, 4, 4, 4, 4],
    7:  [8, 5, 4, 4, 4, 4, 4],
    8:  [8, 5, 4, 4, 4, 4, 4],
    9:  [8, 5, 4, 4, 4, 4, 4],
    10: [8, 5, 4, 4, 4, 4, 4],
}

BARS = ["Part · · Warm-Up", "Part 1 · Vocabulary", "Part 2 · Grammar",
        "Part 3 · Listening", "Part 4 · Speaking", "Part 5 · Reading",
        "Part 6 · Writing", "Part 7 · Management File",
        "Part 8 · Global Case Study", "Part 9 · Branch Case Study",
        "Part 10 · Review & Can-Do"]

fails, rows = [], []


def blocks(path):
    out, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
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


for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")),
                key=lambda p: int(re.search(r"unit-(\d+)", p).group(1))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    bl = blocks(f)
    tags = [b[0] for b in bl]
    text = re.sub(r"^@\w+ ?", "", open(f, encoding="utf-8").read(), flags=re.M)
    words = len(re.findall(r"[\w’'-]+", text))

    codes = [b[1][0] for b in bl if b[0] == "TASK"]
    if codes != SRC_TASKS[n]:
        extra = [c for c in codes if c not in SRC_TASKS[n]]
        miss = [c for c in SRC_TASKS[n] if c not in codes]
        fails.append(f"U{n}: task codes differ (missing {miss}, extra {extra})")

    bars = [b[1][0] for b in bl if b[0] == "PART"]
    if len(bars) != 11 or not all(g.startswith(p) for g, p in zip(bars, BARS)):
        fails.append(f"U{n}: part-bar sequence wrong: {bars}")

    figs = tags.count("FIG")
    if figs != 5:
        fails.append(f"U{n}: {figs} illustrations, source has 5")

    audio = [b[1][0] for b in bl if b[0] == "AUDIO"]
    if audio != [f"{n}.{i}" for i in (1, 2, 3, 4)]:
        fails.append(f"U{n}: audio tracks {audio}, source has {n}.1-{n}.4")

    if tags.count("GRAMMAR") != 1 or tags.count("GF") != 1:
        fails.append(f"U{n}: expected exactly one Grammar Focus box")
    if tags.count("WATCH") != 1:
        fails.append(f"U{n}: expected exactly one ⚠ Watch out! box")
    if tags.count("TIP") < 1:
        fails.append(f"U{n}: Part 2 must end with a Tip pointing at Part 5")

    shapes = [len(b[2]) for b in bl if b[0] == "MATCH"]
    if shapes != SRC_MATCH[n]:
        fails.append(f"U{n}: matching shapes {shapes} != source {SRC_MATCH[n]}")
    for b in bl:
        if b[0] == "MATCH" and (not b[1] or "extra" not in b[1][0]):
            fails.append(f"U{n}: a matching task has no extra option")
            break

    if tags.count("GLOSS") != 2:
        fails.append(f"U{n}: {tags.count('GLOSS')} glossary boxes, source has 2")
    if tags.count("READ") != 4:
        fails.append(f"U{n}: {tags.count('READ')} reading boxes, source has 4")
    if tags.count("CANDO") < 1:
        fails.append(f"U{n}: no Can-Do checklist")

    d = 100 * (words - SRC_WORDS[n]) / SRC_WORDS[n]
    rows.append((n, len(codes), words, SRC_WORDS[n], d, figs, len(shapes),
                 len(audio), tags.count("MODEL"), tags.count("WRITE")))

print(f"{'U':>3} {'tasks':>6} {'words':>6} {'src':>6} {'Δ%':>5} {'figs':>5} "
      f"{'match':>6} {'audio':>6} {'model':>6} {'write':>6}")
for r in rows:
    print(f"{r[0]:>3} {r[1]:>6} {r[2]:>6} {r[3]:>6} {r[4]:>+4.0f}% {r[5]:>5} "
          f"{r[6]:>6} {r[7]:>6} {r[8]:>6} {r[9]:>6}")
tw, sw = sum(r[2] for r in rows), sum(r[3] for r in rows)
print(f"{'tot':>3} {sum(r[1] for r in rows):>6} {tw:>6} {sw:>6} "
      f"{100*(tw-sw)/sw:>+4.0f}%")
print()
if fails:
    print(f"{len(fails)} parity problems:")
    for x in fails:
        print("  -", x)
    sys.exit(1)
print("all structural parity checks pass")
