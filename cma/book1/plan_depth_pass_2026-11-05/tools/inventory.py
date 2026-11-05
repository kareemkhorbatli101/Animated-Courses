"""A full inventory of all eighteen chapters: the book's weight against the site's.

Three questions, answered from files rather than from memory:

  COVERAGE  does every chapter turn the same PROPORTION of the author's material into
            exercises, or do some chapters leave more of him on the page?
  WEIGHT    is a chapter's built size in proportion to its source size?
  DIVERSITY how many different instruments does a chapter use, and how much of it is
            one instrument repeated?

The split that matters is HAND-AUTHORED against GENERATED. Chapters 2 to 5 were written
scene by scene; 6 to 18 were produced by a dispatcher that classifies each printed
figure by shape. That is why they took a fraction of the time, and the point of this
file is to say what it cost.
"""
import collections
import io
import json
import os
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book, cma_scenes as CS, cma_terms   # noqa: E402

BOOK = r"D:\MyWork\AnimatedMatrix\Apps\_publish_Animated-Courses\cma\book1"
EXEMPT = {"hub", "know", "traps", "section", "back"}
FOLDED = {"figure", "lines", "grid"}
HAND = (2, 3, 4, 5)

#: instruments that ask the learner to DECIDE something structural, as against a
#: multiple-choice question, which every chapter gets free from the author's own exams
RICH = {"sort", "statement", "locks", "number", "order", "probe", "post", "contra",
        "beam", "tank", "split", "switch", "timeline2", "wire", "tbreader", "cues",
        "table", "shelf", "cloze", "flash", "termcards", "ladder", "cycle",
        "waterfall", "treasury", "shares", "signs", "gauges", "schedule", "rowpick"}

rows = []
for n in range(1, 19):
    ddir = os.path.join(BOOK, "ch%02d" % n, "data")
    if not os.path.isdir(ddir):
        continue
    d = cma_book.load(n)
    blob = re.sub(r"\s+", " ", CS._blob(d))
    qs = CS.questions(d)
    kinds = collections.Counter()
    pages = 0
    for f in sorted(os.listdir(ddir)):
        if not f.endswith(".js") or f == "toc.js":
            continue
        pages += 1
        t = io.open(os.path.join(ddir, f), encoding="utf-8").read()
        for k in re.findall(r'(?:"kind"|kind):\s*"([a-z0-9]+)"', t):
            kinds[k] += 1
    graded = sum(v for k, v in kinds.items() if k not in EXEMPT and k not in FOLDED)
    rich = sum(v for k, v in kinds.items() if k in RICH)
    checks = kinds.get("check", 0)
    rows.append({
        "n": n,
        "title": (d.get("chapter") or {}).get("title", "")[:34],
        "secs": len([s for s in d["sections"]
                     if re.match(r"^%d\.\d" % n, s["title"].strip())]),
        "words": len(blob.split()),
        "figs": len(CS.all_figures(d, n)),
        "drawn": len(CS.figures_of(d, n)),
        "sc": len([q for q in qs if q["id"].startswith("SC")]),
        "prac": len([q for q in qs if q["id"].startswith("P")]),
        "terms": len(cma_terms.collect(n)),
        "pages": pages,
        "scenes": sum(kinds.values()),
        "graded": graded,
        "rich": rich,
        "checks": checks,
        "kinds": kinds,
        "nkinds": len([k for k in kinds if k in RICH]),
        "hand": n in HAND or n == 1,
    })

W = 128
print("=" * W)
print("THE BOOK AGAINST THE SITE, CHAPTER BY CHAPTER")
print("=" * W)
print("%-3s %-34s | %4s %6s %4s %4s %4s | %4s %5s %6s %5s %5s %5s"
      % ("ch", "title", "sec", "words", "figs", "SC", "P",
         "pg", "scene", "graded", "rich", "MCQ", "kinds"))
print("-" * W)
for r in rows:
    print("%-3d %-34s | %4d %6d %4d %4d %4d | %4d %5d %6d %5d %5d %5d"
          % (r["n"], r["title"], r["secs"], r["words"], r["figs"], r["sc"], r["prac"],
             r["pages"], r["scenes"], r["graded"], r["rich"], r["checks"], r["nkinds"]))

print()
print("=" * W)
print("COVERAGE AND WEIGHT: is a chapter's built size in proportion to its source?")
print("=" * W)
print("%-3s %-34s | %9s %9s %9s %9s %9s"
      % ("ch", "title", "ex/1k wd", "rich/1k", "rich%", "ex/fig", "ex/sec"))
print("-" * W)
for r in rows:
    k = r["words"] / 1000.0
    print("%-3d %-34s | %9.2f %9.2f %8.0f%% %9.2f %9.1f"
          % (r["n"], r["title"], r["graded"] / k, r["rich"] / k,
             100.0 * r["rich"] / max(1, r["graded"]),
             r["graded"] / max(1, r["figs"]), r["graded"] / max(1, r["secs"])))

hand = [r for r in rows if r["hand"] and r["n"] != 1]
gen = [r for r in rows if not r["hand"]]


def avg(g, f):
    return sum(f(x) for x in g) / float(len(g)) if g else 0.0


print()
print("-" * W)
print("%-38s | %9s %9s %9s %9s %9s"
      % ("", "ex/1k wd", "rich/1k", "rich%", "ex/fig", "ex/sec"))
for label, g in (("HAND-AUTHORED  chapters 2-5", hand),
                 ("GENERATED      chapters 6-18", gen)):
    print("%-38s | %9.2f %9.2f %8.0f%% %9.2f %9.1f"
          % (label,
             avg(g, lambda r: r["graded"] / (r["words"] / 1000.0)),
             avg(g, lambda r: r["rich"] / (r["words"] / 1000.0)),
             avg(g, lambda r: 100.0 * r["rich"] / max(1, r["graded"])),
             avg(g, lambda r: r["graded"] / max(1, r["figs"])),
             avg(g, lambda r: r["graded"] / max(1, r["secs"]))))

print()
print("=" * W)
print("DIVERSITY: which instruments each chapter actually uses")
print("=" * W)
allk = sorted({k for r in rows for k in r["kinds"]
               if k in RICH or k in FOLDED or k == "check"})
hdr = "%-3s " % "ch" + " ".join("%-4s" % k[:4] for k in allk)
print(hdr)
print("-" * len(hdr))
for r in rows:
    print("%-3d " % r["n"] + " ".join(
        ("%-4d" % r["kinds"][k]) if r["kinds"].get(k) else "   ." for k in allk))
print()
print("key: " + ", ".join("%s=%s" % (k[:4], k) for k in allk))

print()
print("=" * W)
print("CONCENTRATION: how much of a chapter is its single commonest instrument")
print("=" * W)
for r in rows:
    rk = [(k, v) for k, v in r["kinds"].items() if k in RICH]
    rk.sort(key=lambda x: -x[1])
    top = rk[0] if rk else ("-", 0)
    print("   ch%-3d %-34s %2d rich scenes over %d kinds; commonest is %-10s x%d (%.0f%%)"
          % (r["n"], r["title"], r["rich"], r["nkinds"], top[0], top[1],
             100.0 * top[1] / max(1, r["rich"])))

print()
print("=" * W)
print("DEPTH: the things that cannot be generated")
print("=" * W)
gen_src = io.open(os.path.join(r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python",
                               "tools", "cma_scenes.py"), encoding="utf-8").read()


def reg_keys(name):
    m = re.search(r"^(\s*)%s = \{" % re.escape(name), gen_src, re.M)
    if not m:
        return {}
    body = gen_src[m.end():]
    end = re.search(r"^%s\}" % m.group(1), body, re.M)
    body = body[:end.start()] if end else body
    out = {}
    for mm in re.finditer(r"^\s{1,8}(\d+): [\{\(\[]", body, re.M):
        start = mm.end()
        nxt = re.search(r"^\s{1,8}\d+: [\{\(\[]", body[start:], re.M)
        chunk = body[start:start + (nxt.start() if nxt else len(body))]
        out[int(mm.group(1))] = chunk
    return out


TR = reg_keys("TRAPS")
CR = reg_keys("CASE_RULES")
SU = reg_keys("SUMMARY_CLOZE")
BA = reg_keys("BRIEF_ANIM_BY_CHAPTER")
print("%-3s | %6s %6s %6s %6s %6s %7s"
      % ("ch", "traps", "rules", "summ", "anims", "ties", "marks"))
print("-" * 52)
for r in rows:
    n = r["n"]
    led = os.path.join(BOOK, "assets", "ledger-ch%02d.js" % n)
    ties = io.open(led, encoding="utf-8").read().count('t("') if os.path.exists(led) else 0
    if n == 1:
        led = os.path.join(BOOK, "assets", "ledger.js")
        ties = io.open(led, encoding="utf-8").read().count('t("') if os.path.exists(led) else 0
    print("%-3d | %6d %6d %6d %6d %6d %7s"
          % (n,
             len(re.findall(r'"[a-z0-9-]+": \(', TR.get(n, ""))),
             len(re.findall(r'"C\d+-\d": ', CR.get(n, ""))),
             1 if n in SU else 0,
             len(re.findall(r'": "', BA.get(n, ""))),
             ties, "yes"))

print()
print("=" * W)
print("THE HEADLINE")
print("=" * W)
tot = lambda f: sum(f(r) for r in rows)                                   # noqa: E731
print("   18 chapters, %d pages, %d scenes, %d graded exercises."
      % (tot(lambda r: r["pages"]), tot(lambda r: r["scenes"]),
         tot(lambda r: r["graded"])))
print("   %d of those are the author's own multiple-choice questions (%.0f%%),"
      % (tot(lambda r: r["checks"]),
         100.0 * tot(lambda r: r["checks"]) / tot(lambda r: r["graded"])))
print("   and %d are built instruments (%.0f%%)."
      % (tot(lambda r: r["rich"]),
         100.0 * tot(lambda r: r["rich"]) / tot(lambda r: r["graded"])))
print()
print("   hand-authored 2-5:  %.0f%% built instruments, %.1f kinds per chapter"
      % (avg(hand, lambda r: 100.0 * r["rich"] / max(1, r["graded"])),
         avg(hand, lambda r: r["nkinds"])))
print("   generated 6-18:     %.0f%% built instruments, %.1f kinds per chapter"
      % (avg(gen, lambda r: 100.0 * r["rich"] / max(1, r["graded"])),
         avg(gen, lambda r: r["nkinds"])))
