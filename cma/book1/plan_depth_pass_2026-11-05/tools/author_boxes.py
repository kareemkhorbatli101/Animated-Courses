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


def used(site, sentence):
    """Does any scene quote a distinctive run of this sentence?"""
    words = re.findall(r"[A-Za-z][A-Za-z'-]+", sentence)
    for i in range(0, max(1, len(words) - 7)):
        run = " ".join(words[i:i + 7])
        if len(run) > 28 and run in site:
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
print("=" * 104)
print("FIGURES THAT ARE ONLY AN EXHIBIT: shown, but no exercise is built from them")
print("=" * 104)
EXH = ("lines", "grid", "figure")
tot_e = tot_f = 0
for n in range(1, 19):
    ddir = os.path.join(BOOK, "ch%02d" % n, "data")
    if not os.path.isdir(ddir):
        continue
    d = cma_book.load(n)
    allf = set(CS.all_figures(d, n))
    asked, shown = set(), set()
    for f in sorted(os.listdir(ddir)):
        if not f.endswith(".js"):
            continue
        t = io.open(os.path.join(ddir, f), encoding="utf-8").read()
        # chapter 1's deck is hand-written and spells the key bare (kind: "post"), so a
        # pattern written for the generated chapters reported all thirteen of its
        # figures as appearing nowhere. Both spellings.
        for m in re.finditer(r'(?:"kind"|kind): "([a-z0-9]+)"'
                             r'((?:(?!kind.{0,2}:)[\s\S]){0,1200})', t):
            kind, blk = m.group(1), m.group(2)
            for tag in re.findall(r"F\d\d-\d\d", blk[:300]):
                (shown if kind in EXH else asked).add(tag)
    only = sorted((shown | set()) - asked - {"F%02d-01" % n})
    never = sorted(allf - shown - asked - {"F%02d-01" % n})
    tot_e += len(only)
    tot_f += len(never)
    print("   ch%-3d %2d figures: %2d asked, %2d shown only%s%s"
          % (n, len(allf), len(asked), len(only),
             ("  [" + ", ".join(only) + "]") if only else "",
             ("  NEVER: " + ", ".join(never)) if never else ""))
print()
print("   %d figures across the book are shown but never asked about." % tot_e)
print("   %d appear nowhere at all." % tot_f)
