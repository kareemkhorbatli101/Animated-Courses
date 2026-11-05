"""Which of the author's figures are ASKED about, and which are only shown.

Measured from the generator's own page structures rather than by pattern-matching the
written files: an earlier version regexed the .js and reported chapter 2's classify sort
and statement build as "appearing nowhere", because the block boundary it guessed was
wrong. Here each scene is an object, so its kind and its kicker are facts.

  ASKED  a graded scene names the figure in its kicker or label
  SHOWN  only an exhibit does (figure, lines, grid)
  ABSENT neither
"""
import io
import os
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book, cma_scenes as CS    # noqa: E402

EXH = {"figure", "lines", "grid"}
out = []
T = [0, 0, 0]
out.append("=" * 100)
out.append("THE AUTHOR'S FIGURES: asked about, only shown, or absent")
out.append("=" * 100)
out.append("%-5s %5s %7s %7s %8s   %s" % ("ch", "figs", "asked", "shown", "absent",
                                          "the ones only shown"))
out.append("-" * 100)
for n in range(2, 19):
    d = cma_book.load(n)
    try:
        pages = CS.build(n)
    except Exception as exc:
        out.append("ch%-3d  BUILD FAILED: %s" % (n, exc))
        continue
    asked, shown = set(), set()
    for p in pages.values():
        sc = p["scenes"]
        if isinstance(sc, str):
            continue
        for s in sc:
            tags = set(re.findall(r"F\d\d-\d\d",
                                  str(s.get("kicker", "")) + " " +
                                  str(s.get("label", "")) + " " +
                                  str(s.get("file", ""))))
            (shown if s["kind"] in EXH else asked).update(tags)
    allf = set(CS.all_figures(d, n)) - {"F%02d-01" % n}
    only = sorted(shown - asked)
    absent = sorted(allf - shown - asked)
    T[0] += len(asked & allf)
    T[1] += len(only)
    T[2] += len(absent)
    out.append("%-5d %5d %7d %7d %8d   %s%s"
               % (n, len(allf), len(asked & allf), len(only), len(absent),
                  ", ".join(only),
                  ("   ABSENT: " + ", ".join(absent)) if absent else ""))
out.append("-" * 100)
out.append("%-5s %5s %7d %7d %8d" % ("all", "", T[0], T[1], T[2]))
out.append("")
out.append("   %d of the author's %d numbered figures (excluding each chapter's roadmap)"
           % (T[1], T[0] + T[1] + T[2]))
out.append("   are put on the screen and never asked about. Each one is an exercise the")
out.append("   book already contains and the site does not yet use.")
# INTO THE PACKAGE, NOT INTO A SESSION FOLDER. This wrote the table to a scratchpad path and
# printed only its last six lines, so `evidence/figures_asked.txt` - the file the package's own
# checker reads, and the only record of WHICH figures are only shown - held the six-line summary
# and nothing else. The evidence a plan rests on has to live in the plan.
_EV = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "evidence")
io.open(os.path.join(_EV, "figures_asked.txt"), "w", encoding="utf-8").write("\n".join(out))
print("\n".join(out[-6:]))
print("   full table in evidence/figures_asked.txt")
