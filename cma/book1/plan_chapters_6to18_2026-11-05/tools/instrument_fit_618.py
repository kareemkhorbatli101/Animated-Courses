"""Which of the eleven existing scene kinds each printed figure in 6-18 fits.

The question this answers is "how many NEW instruments does the rest of the book need",
and the honest way to answer it is to classify every printed figure by its SHAPE rather
than by its subject. A chapter on leases and a chapter on depreciation look unrelated and
print the same shape: a row per year, each row computed from the one above.

The classifier is deliberately crude and its rules are printed, so a figure it puts in
the wrong bucket can be argued with. What matters is the totals.

Run from anywhere; it inserts the pipeline on sys.path itself.
"""
import collections
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book  # noqa: E402

MONEY = re.compile(r"^\(?[\d,]+(\.\d+)?\)?%?$")
BLANK = re.compile(r"_{3,}")

RULES = [
    ("switch   (exists)", "head is Topic | U.S. GAAP ... | IFRS ..."),
    ("post     (exists)", "head has Debit and Credit"),
    ("schedule (NEW)", "a Year/period column, and a closing column that is the next "
                       "row's opening"),
    ("rowpick  (NEW)", "three or more amount columns and a column chosen FROM them "
                       "(market, LCM)"),
    ("shares   (exists)", "two or more columns whose cells repeat a set of at most "
                          "four short words"),
    ("waterfall(exists)", "two columns, a label and an amount, with subtotal rows"),
    ("grid     (exists)", "four or more columns of amounts, nothing chosen"),
    ("lines    (exists)", "two or three columns, a label and amounts"),
]


def classify(head, rows):
    h = [str(c).strip().lower() for c in head]
    cells = [[str(c).strip() for c in r] for r in rows]
    ncol = len(h)
    joined = " | ".join(h)

    if ncol >= 3 and ("ifrs" in joined and "gaap" in joined):
        return "switch   (exists)"
    if "debit" in h and "credit" in h:
        return "post     (exists)"
    if h and re.match(r"^(year|end of year|period)$", h[0]) and ncol >= 4:
        return "schedule (NEW)"
    if any("opening" in x for x in h) and any("closing" in x for x in h):
        return "schedule (NEW)"
    if any(x.startswith("market") for x in h) or any("lcm" in x for x in h):
        return "rowpick  (NEW)"

    decided = 0
    for ci in range(1, ncol):
        vals = [r[ci] for r in cells[1:] if ci < len(r) and r[ci] and not BLANK.search(r[ci])]
        if not vals:
            continue
        uniq = set(vals)
        if len(uniq) <= 4 and not all(MONEY.match(v) for v in uniq) \
           and max(len(v) for v in uniq) <= 42:
            decided += 1
    if decided >= 2:
        return "shares   (exists)"

    amountish = sum(1 for ci in range(1, ncol)
                    if [r[ci] for r in cells[1:] if ci < len(r) and MONEY.match(r[ci])])
    if ncol >= 4 and amountish >= 3:
        return "grid     (exists)"
    if ncol == 2 and any(re.match(r"^total\b|^net\b|^closing\b", str(r[0]).strip().lower())
                         for r in cells[1:]):
        return "waterfall(exists)"
    return "lines    (exists)"


print("=" * 96)
print("HOW EVERY PRINTED FIGURE IN CHAPTERS 6-18 IS CLASSIFIED")
print("=" * 96)
print("The rules, in the order they are tried:")
for name, rule in RULES:
    print("   %-18s %s" % (name, rule))
print()

counts = collections.Counter()
per_chapter = collections.defaultdict(collections.Counter)
for n in range(6, 19):
    d = cma_book.load(n)
    seq = d["seq"]
    print("  chapter %d" % n)
    for i, b in enumerate(seq):
        if b.get("k") != "Caption":
            continue
        m = re.search(r"F%02d-\d\d" % n, str(b.get("t", "")))
        if not m:
            continue
        nxt = seq[i + 1] if i + 1 < len(seq) else {}
        if nxt.get("k") != "table" or not nxt.get("rows"):
            continue
        kind = classify(nxt["rows"][0], nxt["rows"])
        counts[kind] += 1
        per_chapter[n][kind] += 1
        print("      %-9s %-18s %d x %d" % (m.group(0), kind, len(nxt["rows"]),
                                            len(nxt["rows"][0])))

print()
print("=" * 96)
print("TOTALS")
print("=" * 96)
for kind, c in counts.most_common():
    print("   %-18s %3d figures" % (kind, c))
print("   %-18s %3d figures" % ("ALL", sum(counts.values())))
new = sum(c for k, c in counts.items() if "NEW" in k)
print()
print("   READ `lines` AS 'UNDECIDED', NOT AS 'A READING SCREEN'. It is the fallback")
print("   bucket: a label-and-amount table that none of the shape rules above claimed.")
print("   Each one becomes an EXERCISE chosen when its section is authored - most often")
print("   a `number` to enter or a `waterfall` to add up - and the standard that no")
print("   screen is scored on looking applies to every one of them. The count here says")
print("   how many decisions remain, not how many reading screens there will be.")
print()
print("   %d of %d printed figures fit a scene kind that already ships."
      % (sum(counts.values()) - new, sum(counts.values())))
print("   %d need one of the two NEW kinds, and they are concentrated:" % new)
for n in sorted(per_chapter):
    bits = {k: v for k, v in per_chapter[n].items() if "NEW" in k}
    if bits:
        print("      ch%-3d %s" % (n, ", ".join("%s x%d" % (k.split()[0], v)
                                                for k, v in sorted(bits.items()))))
