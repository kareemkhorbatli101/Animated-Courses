#!/usr/bin/env python3
"""
Structural parity with the source, measured from the source's own OOXML:
the 42-slot template, the eleven part bars and their colours, the tables,
the multiple-choice stems, the audio tracks and the unit length.
"""
import re, glob, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# measured from 126ab3d2-EMC2_Book_U1-U10_StudentBook_1.docx
SRC_WORDS = {1: 5378, 2: 5435, 3: 5435, 4: 5500, 5: 5478,
             6: 5502, 7: 5493, 8: 5465, 9: 5525, 10: 5640}

SRC_SLOTS = {n: 42 for n in range(1, 11)}
SRC_SLOTS[10] = 43          # Unit 10 adds "End of Course — The Four Values"

# the task heading each slot must start with, in the source's order
SLOT_PREFIX = (["Warm-up:"] * 3
               + ["Part 1:"] * 6
               + ["Part 2:"] * 7
               + ["Part 3:"] * 3
               + ["Part 4:"] * 3
               + ["Part 5:"] * 3
               + ["Part 6:"] * 4
               + ["7A:", "7B:", "7C:", "7D:", "7E:"]
               + ["Part 8:"] * 3
               + ["Part 9:"] * 2
               + ["Part 10:"] * 3)

BARS = [("Warm Up", "orange"),
        ("Part 1  ·  Vocabulary and Terminology", "blue"),
        ("Part 2  ·  Grammar", "blue"),
        ("Part 3  ·  Listening and Dialogue", "blue"),
        ("Part 4  ·  Speaking", "blue"),
        ("Part 5  ·  Extended Reading", "blue"),
        ("Part 6  ·  Writing", "blue"),
        ("Part 7  ·  Supervisory Track", "teal"),
        ("Part 8  ·  Consolidation", "blue"),
        ("Part 9  ·  Decision Task", "blue"),
        ("Part 10  ·  Review and Can-Do", "orange")]

TRACKS = ["in-class starter", "pre-class input", "grammar focus", "listening",
          "speaking", "extended reading", "writing", "leading the team",
          "consolidation", "judgement", "review"]

# per unit, measured from the source
SRC_TABLES, SRC_MCQ, SRC_AUDIO, SRC_GLOSS = 15, 10, 5, 5
SRC_MODELS, SRC_CHECKS = 9, 5

fails, rows = [], []


def blocks(path):
    out, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        if re.match(r"@[A-Z]", raw):
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
    text = re.sub(r"^@[A-Z]\w* ?", "", open(f, encoding="utf-8").read(), flags=re.M)
    words = len(re.findall(r"[\w’'-]+", text))

    titles = [b[1][0] for b in bl if b[0] == "TASK"]
    if len(titles) != SRC_SLOTS[n]:
        fails.append(f"U{n}: {len(titles)} task slots, source has {SRC_SLOTS[n]}")
    expect = list(SLOT_PREFIX)
    if n == 10:
        expect = expect[:41] + ["Part 10:"] + expect[41:]
    for i, (got, want) in enumerate(zip(titles, expect)):
        if not got.startswith(want):
            fails.append(f"U{n} slot {i}: '{got[:38]}' should start with '{want}'")
            break

    bars = [(b[1][0], b[1][1]) for b in bl if b[0] == "BAR"]
    if len(bars) != 11:
        fails.append(f"U{n}: {len(bars)} part bars, source has 11")
    else:
        for i, ((gt, gc), (wt, wc)) in enumerate(zip(bars, BARS)):
            if not gt.startswith(wt) or gc != wc:
                fails.append(f"U{n} bar {i}: '{gt}' ({gc}) != '{wt}…' ({wc})")
                break

    tracks = [" ".join(b[2]) or (b[1][0] if b[1] else "") for b in bl if b[0] == "TRACK"]
    for i, (got, want) in enumerate(zip(tracks, TRACKS)):
        if want not in got:
            fails.append(f"U{n} track {i}: '{got}' should name '{want}'")
            break
    if sum(1 for t in tracks if t.startswith("[PR]")) != 1:
        fails.append(f"U{n}: expected exactly one [PR] Manager track line")

    matches = tags.count("MATCH")
    tables = matches * 2 + tags.count("GRAMMAR")
    if tables != SRC_TABLES:
        fails.append(f"U{n}: {tables} tables, source has {SRC_TABLES}")

    mcq = tags.count("MCQ")
    if mcq != SRC_MCQ:
        fails.append(f"U{n}: {mcq} multiple-choice stems, source has {SRC_MCQ}")
    for b in bl:
        if b[0] == "MCQ" and len(b[1]) != 6:
            fails.append(f"U{n}: a multiple-choice stem has {len(b[1])-2} options, not 4")
            break

    audio = [b[1][0] for b in bl if b[0] == "AUDIO"]
    if audio != [f"{n}.{i}" for i in range(1, 6)]:
        fails.append(f"U{n}: audio tracks {audio}, source has {n}.1-{n}.5")

    gloss = tags.count("GLOSS")
    if gloss != SRC_GLOSS:
        fails.append(f"U{n}: {gloss} Gloss lines, source has {SRC_GLOSS}")
    # the source counts two Model paragraphs in Part 9: the label and "Model decision:"
    models = tags.count("MODEL") + 2 * tags.count("MODELDEC")
    if models != SRC_MODELS:
        fails.append(f"U{n}: {models} models, source has {SRC_MODELS}")
    checks = tags.count("CHECK")
    if checks != SRC_CHECKS:
        fails.append(f"U{n}: {checks} check lists, source has {SRC_CHECKS}")
    for t, k in (("WATCH", 1), ("REMEMBER", 1), ("CANDO", 1)):
        if tags.count(t) != k:
            fails.append(f"U{n}: {tags.count(t)} @{t}, source has {k}")

    for b in bl:
        if b[0] == "MATCH" and (not b[1] or "not needed" not in " ".join(b[2] + b[1])
                                and not b[1][0]):
            pass
    for b in bl:
        if b[0] == "RUBRIC" and "Match" in " ".join(b[2]) and "not needed" not in " ".join(b[2]):
            fails.append(f"U{n}: a matching rubric does not say one option is not needed")
            break

    d = 100 * (words - SRC_WORDS[n]) / SRC_WORDS[n]
    rows.append((n, len(titles), words, SRC_WORDS[n], d, tables, mcq, len(audio),
                 models, gloss))

print(f"{'U':>3} {'slots':>6} {'words':>6} {'src':>6} {'Δ%':>5} {'tbl':>4} {'MCQ':>4} "
      f"{'aud':>4} {'mod':>4} {'gls':>4}")
for r in rows:
    print(f"{r[0]:>3} {r[1]:>6} {r[2]:>6} {r[3]:>6} {r[4]:>+4.0f}% {r[5]:>4} {r[6]:>4} "
          f"{r[7]:>4} {r[8]:>4} {r[9]:>4}")
tw, sw = sum(r[2] for r in rows), sum(r[3] for r in rows)
print(f"{'tot':>3} {sum(r[1] for r in rows):>6} {tw:>6} {sw:>6} {100*(tw-sw)/sw:>+4.0f}%")
print()
if fails:
    print(f"{len(fails)} parity problems:")
    for x in fails:
        print("  -", x)
    sys.exit(1)
print("all structural parity checks pass")
