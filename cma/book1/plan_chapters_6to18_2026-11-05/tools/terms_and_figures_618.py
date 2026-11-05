"""What chapters 6-18 need that does not exist yet: term marks, and instruments.

Two questions the plan rests on, both answered from the book rather than guessed:

  1. HOW MANY BRIDGED TERMS HAVE NO DRAWN MARK. assets/icons.js registers every term it
     can draw. A term that is not registered falls through to the typographic tier, which
     is honest but is not a picture. The list below is the work.

  2. WHAT THE AUTHOR ACTUALLY DRAWS. Every numbered figure is either a picture he embedded
     or a table he printed. The tables are what the site turns into instruments, so their
     SHAPE decides whether an existing scene kind fits: a two-column table of amounts is
     the `lines` exhibit, a wide one needs `grid`, and a table whose cells are a small set
     of repeated words is a `shares`-style decision grid.

Run from anywhere; it inserts the pipeline on sys.path itself.
"""
import collections
import io
import os
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book          # noqa: E402
from tools import cma_scenes as CS  # noqa: E402

BOOK = r"D:\MyWork\AnimatedMatrix\Apps\_publish_Animated-Courses\cma\book1"
TODO = tuple(range(6, 19))


def registered_marks():
    src = io.open(os.path.join(BOOK, "assets", "icons.js"), encoding="utf-8").read()
    out = set()
    for m in re.finditer(r'reg\(\s*\d+\s*,\s*"[a-z0-9]+"\s*,\s*"[a-z0-9]*"\s*,\s*\[(.*?)\]\)',
                         src, re.S):
        out |= {t.strip().lower() for t in re.findall(r'"([^"]+)"', m.group(1))}
    return out


def bridged(d):
    """Every Term Bridge row the chapter prints: (section, English, Arabic)."""
    out, sec = [], None
    for b in d["seq"]:
        t = str(b.get("t", "")).strip()
        if str(b.get("k", "")).startswith("Heading") and re.match(r"^\d+\.\d", t):
            sec = t.split()[0]
        if b.get("k") != "table" or not b.get("rows"):
            continue
        head = [str(c).strip() for c in b["rows"][0]]
        if len(head) >= 2 and head[0].lower().startswith("english"):
            for r in b["rows"][1:]:
                cells = [str(c).strip() for c in r]
                if cells[0]:
                    out.append((sec, cells[0], cells[1] if len(cells) > 1 else ""))
    return out


MARKS = registered_marks()
print("=" * 100)
print("TERM MARKS: assets/icons.js draws %d terms today" % len(MARKS))
print("=" * 100)
print("%-5s %6s %6s %6s   %s" % ("ch", "rows", "unique", "NEW", "terms with no drawn mark"))
grand_new, all_new = 0, []
for n in TODO:
    d = cma_book.load(n)
    rows = bridged(d)
    uniq = []
    for _s, en, _ar in rows:
        if en.lower() not in [u.lower() for u in uniq]:
            uniq.append(en)
    new = [e for e in uniq if e.lower() not in MARKS]
    grand_new += len(new)
    all_new += new
    print("%-5d %6d %6d %6d   %s" % (n, len(rows), len(uniq), len(new),
                                     ", ".join(new)[:120]))
print()
distinct = sorted({x.lower() for x in all_new})
print("   %d bridged rows in all." % sum(len(bridged(cma_book.load(n))) for n in TODO))
print("   %d chapter-and-term pairs need a mark, which is %d DISTINCT terms: %d of them"
      % (grand_new, len(distinct), grand_new - len(distinct)))
print("   are bridged by two chapters. The work is the %d distinct marks; the larger"
      % len(distinct))
print("   number is what you get by adding the per-chapter column up, and it double-")
print("   counts. Both are printed because the per-chapter column is what tells you")
print("   which chapter's figure a mark has to be drawn from.")
print()
print("   Every one, so the list can be argued with instead of discovered:")
for e in distinct:
    print("      " + e)

print()
print("=" * 100)
print("NO ARABIC IS MISSING: every bridged row carries the author's own")
print("=" * 100)
for n in TODO:
    rows = bridged(cma_book.load(n))
    noar = [en for _s, en, ar in rows if not re.search(r"[\u0600-\u06FF]", ar)]
    print("   ch%-3d %3d rows, %d without Arabic%s"
          % (n, len(rows), len(noar), ("  " + ", ".join(noar)[:70]) if noar else ""))

print()
print("=" * 100)
print("WHAT THE AUTHOR DRAWS, AND WHAT SHAPE EACH PRINTED FIGURE IS")
print("=" * 100)
print("A numbered figure is either an IMAGE he embedded or a TABLE he printed. The site")
print("shows an image as an exhibit and turns a table into an instrument, so the table's")
print("shape is what decides whether an existing scene kind fits.")
print()
shapes = collections.Counter()
for n in TODO:
    d = cma_book.load(n)
    allf = sorted(CS.all_figures(d, n))
    drawn = set(CS.figures_of(d, n))
    tables = []
    for i, b in enumerate(d["seq"]):
        if b.get("k") != "Caption":
            continue
        m = re.search(r"F%02d-\d\d" % n, str(b.get("t", "")))
        if not m:
            continue
        nxt = d["seq"][i + 1] if i + 1 < len(d["seq"]) else {}
        if nxt.get("k") == "table" and nxt.get("rows"):
            cols = len(nxt["rows"][0])
            tables.append((m.group(0), len(nxt["rows"]), cols))
            shapes["%d-column" % cols] += 1
    print("   ch%-3d %2d figures: %d drawn, %d printed as tables"
          % (n, len(allf), len(drawn), len(tables)))
    for tag, r, c in tables:
        print("            %-8s %2d rows x %d cols%s"
              % (tag, r, c, "   <- wider than the lines exhibit can render" if c > 3 else ""))
print()
print("   Table widths across the thirteen chapters: %s"
      % ", ".join("%s %d" % (k, v) for k, v in sorted(shapes.items())))
wide = sum(v for k, v in shapes.items() if int(k.split("-")[0]) > 3)
print("   %d printed figures are wider than three columns, so they need the `grid`"
      % wide)
print("   exhibit rather than `lines`. `grid` was built for Chapter 4 and already ships.")
