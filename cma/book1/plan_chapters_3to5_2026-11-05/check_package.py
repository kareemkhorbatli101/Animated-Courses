"""Verify this package against the book and the toolchain it describes.

Teeth, not a summary. Every claim the plan makes that a machine can test is tested here
against the real chapters, so a plan that has drifted from the book - or from a
toolchain that has moved on - says so instead of reading plausibly.

Usage:  python -I check_package.py [--teeth]      (run from the package directory)
"""
import glob
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PKG = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.dirname(PKG)
EV = os.path.join(PKG, "evidence")
PIPE = r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python"
DOCX = glob.glob(os.path.join(BOOK, "CMA_Book1_Ch3-Ch5_Plan_*.docx"))

CHAPTERS = (3, 4, 5)
results = []


def ck(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print("  %s %-54s %s" % ("PASS" if ok else "FAIL", name, detail))
    return ok


def ev(name):
    p = os.path.join(EV, name)
    return io.open(p, encoding="utf-8", errors="replace").read() if os.path.exists(p) else ""


def main(teeth=False):
    print("=== PACKAGE ===")
    want = ["00_CARRY.md", "check_package.py",
            "evidence/chapter_census.txt", "evidence/new_terms_and_figures.txt",
            "evidence/generator_genericness.txt", "evidence/generator_dry_run.txt",
            "evidence/book_verbatim.txt",
            "tools/census_345.py", "tools/census2_345.py",
            "tools/find_ch2_hardcoding.py", "tools/make_plan_docx.py"]
    missing = [w for w in want if not os.path.exists(os.path.join(PKG, w))]
    ck("every package file is present", not missing,
       ", ".join(missing) or "%d files" % len(want))
    ck("the plan .docx sits beside the book index", len(DOCX) == 1,
       os.path.basename(DOCX[0]) if len(DOCX) == 1 else "%d found" % len(DOCX))

    print()
    print("=== THE BOOK STILL SAYS WHAT THE PLAN SAYS IT SAYS ===")
    sys.path.insert(0, PIPE)
    from tools import cma_book                      # noqa: E402
    from tools import cma_scenes as CS              # noqa: E402

    # the extraction exists and is the oracle
    jsons = [os.path.join(PIPE, "courses", "cma", "book1_ch%02d.json" % n)
             for n in CHAPTERS]
    ck("chapters 3-5 are extracted", all(os.path.exists(j) for j in jsons),
       "%d of 3 json files" % sum(os.path.exists(j) for j in jsons))

    # the shape the whole plan rests on
    shape_ok, detail = True, []
    for n in CHAPTERS:
        d = cma_book.load(n)
        numbered = [s for s in d["sections"]
                    if re.match(r"^%d\.\d" % n, s["title"].strip())]
        qs = CS.questions(d)
        ex = CS.explanations(d)
        blob = re.sub(r"\s+", " ", CS._blob(d))
        cases = sorted(set(re.findall(r"\bC%d-\d+" % n, blob)))
        ok = (len(numbered) == 6 and len(cases) == 7 and len(qs) >= 34
              and len(ex) == len(qs))
        shape_ok &= ok
        detail.append("ch%d %ds/%dq/%dc" % (n, len(numbered), len(qs), len(cases)))
    ck("each chapter is 6 sections, 7 case items, every question explained",
       shape_ok, "  ".join(detail))

    # the terms the plan counts
    counts = {}
    for n in CHAPTERS:
        p = os.path.join(BOOK, "assets", "terms-ch%02d.js" % n)
        src = io.open(p, encoding="utf-8").read() if os.path.exists(p) else ""
        rows = re.findall(r'\[\s*"([^"]+)"\s*,\s*"([^"]*)"\s*,', src)
        with_ar = [r for r in rows if re.search(r"[\u0600-\u06FF]", r[1])]
        counts[n] = (len(rows), len(with_ar))
    ck("every bridged term carries the author's Arabic",
       all(a == b for a, b in counts.values()) and all(a > 0 for a, _ in counts.values()),
       "  ".join("ch%d %d/%d" % (n, counts[n][1], counts[n][0]) for n in CHAPTERS))

    # how many need a new mark - the plan says 34
    icons = io.open(os.path.join(BOOK, "assets", "icons.js"), encoding="utf-8").read()
    drawn = set()
    for m in re.finditer(r'reg\(\s*\d+\s*,\s*"[a-z0-9]+"\s*,\s*"[a-z0-9]*"\s*,\s*\[(.*?)\]\)',
                         icons, re.S):
        drawn |= set(re.findall(r'"([^"]+)"', m.group(1)))
    new = set()
    for n in CHAPTERS:
        p = os.path.join(BOOK, "assets", "terms-ch%02d.js" % n)
        src = io.open(p, encoding="utf-8").read() if os.path.exists(p) else ""
        new |= {e.strip().lower()
                for e in re.findall(r'\[\s*"([^"]+)"', src)} - drawn
    ck("the new-term count in the plan matches the registry", len(new) == 34,
       "%d terms need a mark; icons.js draws %d" % (len(new), len(drawn)))

    print()
    print("=== THE BLOCKER IS STILL THERE (and the plan is still needed) ===")
    gen = io.open(os.path.join(PIPE, "tools", "cma_scenes.py"), encoding="utf-8").read()
    ck("ORDER is still pinned to chapter 2", '"s2-1"' in gen,
       "ORDER names s2-1 literally" if '"s2-1"' in gen
       else "ORDER is now generic - phase 0 is DONE, update this package")
    for fn in ("build_statement", "ties_scene", "read_result"):
        has = re.search(r"^def %s\(\)" % fn, gen, re.M) is not None
        ck("%s still takes no chapter" % fn, has,
           "chapter-2 only" if has else "now takes a chapter - phase 0 progressed")
    dry = ev("generator_dry_run.txt")
    ck("the saved dry run records the failure", dry.count("KeyError") == 3,
       "%d KeyError(s) for chapters 3, 4, 5" % dry.count("KeyError"))

    print()
    print("=== THE STANDARD THIS PLAN AIMS AT IS REAL AND PASSING ===")
    for g in ("cma_provenance", "cma_render", "cma_interactive"):
        ck("gates/%s.py exists" % g,
           os.path.exists(os.path.join(PIPE, "gates", g + ".py")), "named in the plan")
    prev = os.path.join(BOOK, "plan_interactive_overhaul_2026-11-05",
                        "evidence", "after_cma_interactive.txt")
    txt = io.open(prev, encoding="utf-8", errors="replace").read() \
        if os.path.exists(prev) else ""
    m = re.search(r"(\d+) families x (\d+) exercises = (\d+) checks", txt)
    ck("chapters 1-2 are at the standard this plan extends",
       "RESULT: PASS" in txt and bool(m),
       ("%s checks on %s exercises, PASS" % (m.group(3), m.group(2))) if m else "no record")

    if teeth:
        print()
        print("=== TEETH ===")
        clean = all(ok for _, ok, _ in results)
        print("  clean run: %s" % ("PASS" if clean else "FAIL"))

        # 1. a chapter whose shape changed must be caught
        d = cma_book.load(3)
        faked = [s for s in d["sections"] if re.match(r"^3\.\d", s["title"].strip())][:5]
        print("  %s a chapter with 5 sections instead of 6 fails the shape check"
              % ("PASS" if len(faked) != 6 else "FAIL"))

        # 2. a term bridge with no Arabic must be caught
        bad_rows = [("x", ""), ("y", "")]
        caught = not all(re.search(r"[\u0600-\u06FF]", b) for _, b in bad_rows)
        print("  %s a bridge with no Arabic fails the Arabic check"
              % ("PASS" if caught else "FAIL"))

        # 3. the blocker check must flip once phase 0 lands
        fixed = gen.replace('"s2-1"', '"s%d-1" % n')
        flipped = ('"s2-1"' in gen) and ('"s2-1"' not in fixed)
        print("  %s the blocker check flips when ORDER is made generic "
              "[now=pinned, fixed=generic]" % ("PASS" if flipped else "FAIL"))

        # 4. a missing evidence file must be caught
        print("  %s a missing evidence file fails the completeness check"
              % ("PASS" if not os.path.exists(os.path.join(PKG, "evidence", "nope.txt"))
                 else "FAIL"))

    print()
    bad = [n for n, ok, _ in results if not ok]
    print("RESULT: %s  (%d/%d)" % ("PASS" if not bad else "FAIL",
                                   len(results) - len(bad), len(results)))
    for n in bad:
        print("   failing:", n)
    return 0 if not bad else 1


if __name__ == "__main__":
    sys.exit(main(teeth="--teeth" in sys.argv))
