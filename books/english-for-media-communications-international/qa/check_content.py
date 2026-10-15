#!/usr/bin/env python3
"""
Content, style and integrity checks — the criteria a count cannot see.

* the source's typography and British spelling;
* the scaffolding promise, slot by slot: every writing task has a model and a
  check list, every role play has a model and two cards, every matching task has
  an option that is not needed and says so, every numbered practice opens with a
  worked 0.;
* the transposition: Meridian Relief everywhere, nothing of the Damascus setting
  left behind, no real organisation, government or person given invented words,
  no country characterised, the humanitarian ethic carried over intact.
"""
import re, os, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCX = os.path.join(ROOT, "dist", "EMC2_International_StudentBook.docx")
fails, notes = [], []

AMERICAN = {
    r"\borganiz(e|ed|ing|ation)\b": "organise",
    r"\brecogniz(e|ed|ing)\b": "recognise",
    r"\banalyz(e|ed|ing)\b": "analyse",
    r"\bcenter(s)?\b": "centre",
    r"\bcolor(s|ed)?\b": "colour",
    r"\bfavorite\b": "favourite",
    r"\bbehavior\b": "behaviour",
    r"\btraveling\b": "travelling",
    r"\bcanceled\b": "cancelled",
    r"\brumor\b": "rumour",
    r"\bapologize\b": "apologise",
    r"\bminimiz(e|ed|ation)\b": "minimise",
    r"\banonymiz(e|ed)\b": "anonymise",
    r"\bcell ?phone\b": "mobile phone",
}

REAL = ["UNHCR", "UNICEF", "Red Cross", "Red Crescent", "Oxfam", "Save the Children",
        "Médecins", "WHO ", "the UN ", "Reuters", "the BBC", "Al Jazeera",
        "Facebook", "WhatsApp", "Twitter", "TikTok"]

LEFTOVER = ["Syria", "Syrian", "Damascus", "Aleppo", "Care Foundation",
            "Rasha", "Kareem", "Sana", "Nour", "Bassel", "Um Yousef"]

PLACES = ["Geneva", "Amman", "Dhaka", "Nairobi", "Lima", "Freetown"]

VALUES = ["consent", "accuracy", "dignity", "do no harm"]

files = sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")),
               key=lambda p: int(re.search(r"unit-(\d+)", p).group(1)))
whole = "".join(open(f, encoding="utf-8").read() for f in files)

# ---------------------------------------------------------------- typography
if '"' in whole:
    fails.append("a straight quotation mark appears in the content")
for pat, want in AMERICAN.items():
    for f in files:
        if re.search(pat, open(f, encoding="utf-8").read(), re.I):
            fails.append(f"{os.path.basename(f)}: American form {pat} — the source writes '{want}'")

if os.path.exists(DOCX):
    import zipfile, html
    _d = zipfile.ZipFile(DOCX).read("word/document.xml").decode()
    rendered = html.unescape(" ".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", _d, re.S)))
else:
    rendered = ""
    fails.append("dist/ .docx not built — run build/compile.py first")
for mark in ["·", "—", "→", "☐", "○", "\U0001F50A", "’", "‘"]:
    if mark not in rendered:
        fails.append(f"the source's {mark} does not reach the rendered book")

# ---------------------------------------------------------------- transposition
for bad in LEFTOVER:
    if re.search(rf"\b{re.escape(bad)}\b", whole):
        fails.append(f"the source's Damascus setting survives: '{bad}'")
if whole.count("Meridian Relief") < 10:
    fails.append("Meridian Relief is named fewer than ten times across the book")
for p in PLACES:
    if p not in whole:
        fails.append(f"office '{p}' never appears")
for name in REAL:
    if name in whole:
        notes.append(f"a real organisation or platform is named ('{name.strip()}') — check "
                     f"it is given no invented words or figures")

# ---------------------------------------------------------------- scaffolding
SLOT_NEEDS = {
    0:  ["MATCH"], 1: ["BANK", "GAP"], 2: ["TEXT", "MCQ"],
    3:  ["MATCH", "GLOSS"], 4: ["AUDIO", "PRON"], 5: ["MATCH", "GLOSS"],
    6:  ["MCQ"], 7: ["BANK", "GAP"], 8: ["PLAN"],
    9:  ["TEXT"], 10: ["GRAMMAR", "REMEMBER", "WATCH", "GLOSS"],
    14: ["BULLET"], 15: ["MCQ"],
    16: ["AUDIO", "PRE", "TEXT", "WHILE", "PHRASES"],
    17: ["AUDIO", "PRE", "TEXT", "WHILE", "PHRASES"],
    18: ["AUDIO", "PRE", "TEXT", "WHILE", "MATCH"],
    19: ["BULLET", "USE"], 20: ["MODEL", "USE", "CARD"], 21: ["PLAN"],
    22: ["TEXT", "MCQ"], 23: ["MATCH", "GLOSS"], 24: ["TEXT"],
    25: ["MODEL", "PLAN", "CHECK"], 26: ["MODEL", "CHECK"],
    27: ["MODEL", "CHECK"], 28: ["MODEL", "CHECK"],
    29: ["MATCH"], 30: ["AUDIO", "PRE", "TEXT"], 31: ["LINE"],
    32: ["MODEL", "CARD"], 33: ["MODEL", "CHECK"],
    34: ["PRE", "TEXT", "GLOSS"], 35: ["MATCH"], 36: ["FRAME", "BULLET"],
    37: ["PRE", "TEXT"], 38: ["FRAME", "MODELDEC", "PHRASEBANK"],
    39: ["BANK", "GAP"], 40: ["CANDO"],
}

for f in files:
    n = int(re.search(r"unit-(\d+)", f).group(1))
    lines = open(f, encoding="utf-8").read().split("\n")
    idx, have = -1, {}
    titles = {}
    for l in lines:
        m = re.match(r"@([A-Z]+)(?: (.*))?$", l)
        if not m:
            continue
        tag, rest = m.group(1), m.group(2) or ""
        if tag == "TASK":
            idx += 1
            have[idx] = []
            titles[idx] = rest
        elif idx >= 0:
            have[idx].append(tag)
    for slot, needs in SLOT_NEEDS.items():
        s = slot
        if n == 10 and slot >= 41:
            s = slot + 1
        if s not in have:
            fails.append(f"U{n}: slot {s} is missing")
            continue
        for t in needs:
            if t not in have[s]:
                fails.append(f"U{n} slot {s} ('{titles[s][:32]}'): no @{t}")
    # the source gives Part 6 two plan lines, but not always on the same two tasks
    plans = sum(have.get(s, []).count("PLAN") for s in (25, 26, 27, 28))
    if plans != 2:
        fails.append(f"U{n}: Part 6 has {plans} plan lines, the source has 2")
    # two cards on every role play
    for s in (20, 32):
        if have.get(s, []).count("CARD") != 2:
            fails.append(f"U{n} slot {s}: a role play does not have two cards")
    # every matching task names an option that is not needed
    for l in lines:
        if l.startswith("@MATCH") and not l[6:].strip():
            fails.append(f"U{n}: a matching task has no spare option")
            break
    # the four values survive the transposition
    if n == 10:
        tail = open(f, encoding="utf-8").read().lower()
        for v in VALUES:
            if v not in tail:
                fails.append(f"U10: the course value '{v}' is missing from the final unit")
    # every unit invites the learner's own country or workplace in
    if not re.search(r"(your (own )?(work|team|office|organisation|country|audience|customers)"
                     r"|where you work|in your work)", open(f, encoding="utf-8").read(), re.I):
        fails.append(f"U{n}: no task invites the learner's own workplace in")

print(f"{len(files)} content files · {len(whole.split())} DSL words")
if notes:
    print(f"\n{len(notes)} note(s) for the read-through:")
    for x in sorted(set(notes)):
        print("  ·", x)
print()
if fails:
    print(f"{len(fails)} content problems:")
    for x in fails[:40]:
        print("  -", x)
    if len(fails) > 40:
        print(f"  … and {len(fails)-40} more")
    sys.exit(1)
print("all content, style and integrity checks pass")
