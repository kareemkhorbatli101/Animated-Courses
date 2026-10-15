#!/usr/bin/env python3
"""
Content, style and integrity checks — the criteria a count cannot see.

* the source's typography and British spelling;
* the scaffolding promise: every writing task has a model, a plan or frame,
  a phrase bank and a ☐ check list; every speaking task has a model and cards;
* the exercise system: a worked Example where one is possible, an extra option
  on every matching task;
* the transposition: Harbour Bank everywhere, no Syrian setting left behind,
  no real bank, regulator or payment network given invented words or figures,
  no country characterised.
"""
import re, os, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fails, notes = [], []

AMERICAN = {
    r"\borganiz(e|ed|ing|ation)\b": "organise",
    r"\brecogniz(e|ed|ing)\b": "recognise",
    r"\banaly(z|zed|zing)e?\b": "analyse",
    r"\bcenter(s)?\b": "centre",
    r"\bcheck(s)? book": "cheque book",
    r"\bcolor(s|ed)?\b": "colour",
    r"\bfavorite\b": "favourite",
    r"\bbehavior\b": "behaviour",
    r"\btraveling\b": "travelling",
    r"\bcanceled\b": "cancelled",
    r"\btraining program\b": "training programme",
    r"\bchecking account\b": "current account",
    r"\bbills? and coins\b": "notes and coins",
}

# names that must never appear with invented words, figures or quotations
REAL = ["SWIFT ", "Visa", "Mastercard", "Western Union", "HSBC", "Citibank",
        "Barclays", "Santander", "Deutsche Bank", "PayPal", "Revolut",
        "the ECB", "Federal Reserve", "the IMF", "the World Bank"]

LEFTOVER = ["Syria", "Syrian", "Damascus", "Aleppo", "Al Aman", "Levant Bank",
            "Fatima", "Rana", "Salma", "Mr Sami", "Omar", "Rania Haddad",
            "Wissam", "Noura", "Ayman", "Khalid", "Lina", "Huda", "Karim"]

CITIES = ["Rotterdam", "Nairobi", "Istanbul", "São Paulo", "Manila", "Warsaw"]

files = sorted(glob.glob(os.path.join(ROOT, "content", "*.txt")))
whole = "".join(open(f, encoding="utf-8").read() for f in files)

# ---------------------------------------------------------------- typography
for ch, what in [("'", "a straight apostrophe"), ('"', "a straight quotation mark")]:
    if ch in whole:
        where = [os.path.basename(f) for f in files if ch in open(f, encoding="utf-8").read()]
        fails.append(f"{what} appears in {', '.join(where)} — the source uses curly marks")
DOCX = os.path.join(ROOT, "dist", "EnglishForBanking_International_StudentBook.docx")
if os.path.exists(DOCX):
    import zipfile, html
    _d = zipfile.ZipFile(DOCX).read("word/document.xml").decode()
    rendered = html.unescape(" ".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", _d, re.S)))
else:
    rendered = ""
    fails.append("dist/ .docx not built — run build/compile.py first")
for mark in ["·", "—", "☐", "✎", "⚠", "\U0001F50A", "→", "’", "“", "”"]:
    if mark not in rendered:
        fails.append(f"the source's {mark} does not reach the rendered book")

for pat, want in AMERICAN.items():
    for f in files:
        t = open(f, encoding="utf-8").read()
        if re.search(pat, t, re.I):
            fails.append(f"{os.path.basename(f)}: American form {pat} — the source writes '{want}'")

# ---------------------------------------------------------------- transposition
for bad in LEFTOVER:
    if re.search(rf"\b{re.escape(bad)}\b", whole):
        fails.append(f"the source's Syrian setting survives: '{bad}'")
if whole.count("Harbour Bank") < 10:
    fails.append("Harbour Bank is named fewer than ten times across the book")
for c in CITIES:
    if c not in whole:
        fails.append(f"branch city '{c}' never appears")
for name in REAL:
    if name in whole:
        notes.append(f"a real institution is named ('{name.strip()}') — check it is given "
                     f"no invented words or figures")

# ---------------------------------------------------------------- scaffolding
for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")),
                key=lambda p: int(re.search(r"unit-(\d+)", p).group(1))):
    n = int(re.search(r"unit-(\d+)", f).group(1))
    txt = open(f, encoding="utf-8").read()
    blocks = re.findall(r"^@(\w+)([^\n]*)\n((?:(?!@)[^\n]*\n)*)", txt, re.M)

    task, kit = None, {}
    for tag, args, body in blocks:
        if tag == "TASK":
            task = args.split("|")[0].strip()
            title = args.split("|")[1].strip() if "|" in args else ""
            kit[task] = {"title": title, "tags": []}
        elif task:
            kit[task]["tags"].append(tag)

    # the source's own scaffolding pattern, task by task
    NEED = {
        "1E": ["MODEL", "CHECK", "WRITE"],
        "1F": ["MODEL", "CHECK", "WRITE"],
        "6B": ["MODEL", "GREEN", "PHRASES", "CHECK", "WRITE"],
        "6C": ["MODEL", "GREEN", "CHECK", "WRITE"],
        "7E": ["MODEL", "GREEN", "PHRASES", "CHECK", "WRITE"],
        "9B": ["MODEL", "GREEN", "PHRASES", "WRITE"],
        "8D": ["WRITE"],
        "2C": ["WRITE"],
        "4B": ["MODEL", "CARD"],
        "4C": ["MODEL"],
        "4D": ["CARD", "USEFUL"],
        "7D": ["MODEL", "CARD", "STRETCH"],
        "10B": ["CANDO"],
    }
    # Unit 1 puts the email tasks at 6C/6D and keeps 6A as a matching task
    if n == 1:
        NEED["6C"] = ["MODEL", "GREEN", "PHRASES", "CHECK", "WRITE"]
        NEED["6D"] = ["MODEL", "GREEN", "CHECK", "WRITE"]
        NEED.pop("6B")
        NEED["4C"] = ["CARD", "USEFUL"]     # in Unit 1 the info-gap is 4C
        NEED["4D"] = ["STRETCH"]            # and 4D is the mingle
    if n == 2:
        NEED["6B"] = ["MODEL", "GREEN", "PHRASES", "CHECK", "WRITE"]
        NEED.pop("1E")                      # in Unit 2 the writing task is 1F
    LABEL = {"MODEL": "a model", "CHECK": "a ☐ check list", "WRITE": "a ✎ write box",
             "GREEN": "a plan or frame", "PHRASES": "a phrase bank",
             "CARD": "role cards", "USEFUL": "useful language",
             "STRETCH": "a stretch line", "CANDO": "a Can-Do checklist"}
    for code, need in NEED.items():
        if code not in kit:
            continue
        for t in need:
            if t not in kit[code]["tags"]:
                fails.append(f"U{n} {code} ({kit[code]['title'][:34]}): has no {LABEL[t]}")

    # the source opens roughly a dozen tasks a unit with a worked Example
    ex = sum(1 for tag, _, _ in blocks if tag == "EX")
    if ex < 10:
        fails.append(f"U{n}: {ex} worked Examples, the source has 10-14")

    # every matching task says one option is extra
    for tag, args, body in blocks:
        if tag == "MATCH":
            if "extra" not in args:
                fails.append(f"U{n}: a matching task's spare option is not marked '(extra)'")
        if tag == "INSTR" and "Match" in body and "extra" not in body:
            notes.append(f"U{n}: a matching instruction does not mention the extra option")

    # the invented-bank declaration and the learner's own country
    if not re.search(r"(where you live|in your country|your own |at my bank|"
                     r"your bank|your branch|your workplace|your customers)", txt, re.I):
        fails.append(f"U{n}: no task invites the learner's own country or workplace in")

front = open(os.path.join(ROOT, "content", "front.txt"), encoding="utf-8").read()
for claim in ["invented", "true and general"]:
    if claim not in front:
        fails.append(f"the front matter does not declare the bank '{claim}'")

print(f"{len(files)} content files · {len(whole.split())} DSL words")
if notes:
    print(f"\n{len(notes)} note(s) for the read-through:")
    for x in sorted(set(notes)):
        print("  ·", x)
print()
if fails:
    print(f"{len(fails)} content problems:")
    for x in fails:
        print("  -", x)
    sys.exit(1)
print("all content, style and integrity checks pass")
