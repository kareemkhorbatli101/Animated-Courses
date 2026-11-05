"""What the author wrote that no exercise uses yet.

An enrichment plan has to start from material that exists, not from instruments someone
would like to build. Every one of his boxes is counted here, and marked USED where some
scene already quotes it, so the plan's "enrich the examples" means a specific list of
his own examples rather than a wish.
"""
import collections
import io
import os
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book, cma_scenes as CS    # noqa: E402

BOOK = r"D:\MyWork\AnimatedMatrix\Apps\_publish_Animated-Courses\cma\book1"
BOXES = ("EXAM TRAP", "WORKED EXAMPLE", "FALSE-FRIEND ALERT", "YOUR TURN",
         "LANGUAGE FOCUS", "IFRS CONTRAST", "WATCH: NOT YET TESTABLE",
         "WHAT YOU ALREADY KNOW")


def deck_text(n):
    d = os.path.join(BOOK, "ch%02d" % n, "data")
    if not os.path.isdir(d):
        return ""
    out = []
    for f in sorted(os.listdir(d)):
        if f.endswith(".js"):
            out.append(io.open(os.path.join(d, f), encoding="utf-8").read())
    return " ".join(out)


def _words(s):
    return re.findall(r"[A-Za-z][A-Za-z'-]+", s)


def used(site, sentence):
    """Does any scene quote a distinctive run of this sentence?

    BOTH SIDES ARE NORMALISED THE SAME WAY, and the first version normalised only one. It
    pulled word runs out of the author's sentence - dropping punctuation and every figure
    number, because `F18-05` matches nothing in `[A-Za-z][A-Za-z'-]+` - and then looked for
    that stripped run inside the RAW deck text, punctuation and figure numbers included. It
    therefore only ever matched a window that happened to contain neither.

    Every YOUR TURN box in the book begins "Figure Fnn-xx lists six ...", so every one of the
    eighteen failed on the first window and most failed on all of them: the tool reported 1 of
    18 used at a moment when sixteen chapters were built on them. It was understating the whole
    table, which for a plan whose case IS the table is the worst way to be wrong - it makes the
    gap look bigger than it is and the work look smaller.
    """
    hay = " ".join(_words(site))
    words = _words(sentence)
    for i in range(0, max(1, len(words) - 7)):
        run = " ".join(words[i:i + 7])
        if len(run) > 28 and run in hay:
            return True
    return False


print("=" * 104)
print("THE AUTHOR'S BOXES: how many, and how many the site already uses")
print("=" * 104)
print("%-4s " % "ch" + " ".join("%-10s" % b[:10] for b in BOXES) + "  used/all")
print("-" * 104)
grand = collections.Counter()
grand_used = collections.Counter()
rows = []
for n in range(1, 19):
    site = deck_text(n)
    if not site:
        continue
    d = cma_book.load(n)
    have, hit = collections.Counter(), collections.Counter()
    for b in d["seq"]:
        if b.get("k") != "table" or not b.get("rows") or len(b["rows"][0]) != 1:
            continue
        txt = str(b["rows"][0][0])
        head = txt.split("\n")[0]
        for kind in BOXES:
            if head.startswith(kind) or head.lstrip("\u25cf ").startswith(kind):
                have[kind] += 1
                body = " ".join(txt.split("\n")[1:])
                if body and used(site, body):
                    hit[kind] += 1
                break
    rows.append((n, have, hit))
    grand += have
    grand_used += hit
    print("%-4d " % n + " ".join("%-10s" % ("%d/%d" % (hit[b], have[b]) if have[b]
                                            else ".") for b in BOXES)
          + "  %d/%d" % (sum(hit.values()), sum(have.values())))
print("-" * 104)
print("%-4s " % "all" + " ".join("%-10s" % ("%d/%d" % (grand_used[b], grand[b]))
                                 for b in BOXES)
      + "  %d/%d" % (sum(grand_used.values()), sum(grand.values())))

print()
print("   The figures are measured by tools/figures_asked.py, into")
print("   evidence/figures_asked.txt. THIS FILE USED TO MEASURE THEM TOO, and the two")
print("   disagreed inside one package - 88 shown only against 94, and 26 figures")
print("   'appearing nowhere' against 0. The duplicate here was the superseded method:")
print("   it regexed the written decks and guessed a scene's extent as the next 1,200")
print("   characters, which is the exact guess figures_asked.py's own docstring says it")
print("   replaced, because the boundary is wrong whenever a scene is longer than that.")
print("   Two numbers for one fact make a package a story rather than a measurement, so")
print("   there is now one tool for it and this one counts boxes.")
