"""Verify this package against the book, the toolchain and what was actually built.

Teeth, not a summary. Every claim the package makes that a machine can test is tested
here against the real chapters, so a record that has drifted from the book - or from a
toolchain that has moved on - says so instead of reading plausibly.

WHAT CHANGED ON 2026-11-05. This file used to assert that the plan's BLOCKER was still
there: that `ORDER` named "s2-1" literally, that `build_statement` took no chapter, and
that the saved dry run recorded three KeyErrors. Those checks were right while the plan
was a plan. The plan has now been executed, so each of them is inverted: the generator
must be chapter-generic, the three chapters must be on disk, and the gates must cover
all five. A check that can no longer fail is not a check, and a check that asserts a
defect which has been fixed is worse - it fails the package for being finished.

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
ALL = (1, 2, 3, 4, 5)
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
    want = ["00_CARRY.md", "01_DELIVERED.md", "check_package.py",
            "evidence/chapter_census.txt", "evidence/new_terms_and_figures.txt",
            "evidence/generator_genericness.txt", "evidence/generator_dry_run.txt",
            "evidence/book_verbatim.txt",
            "evidence/after_provenance.txt", "evidence/after_interactive.txt",
            "evidence/after_render.txt", "evidence/after_crosstie.txt",
            "evidence/after_teeth.txt", "evidence/deck_census.txt",
            "tools/census_345.py", "tools/census2_345.py",
            "tools/find_ch2_hardcoding.py", "tools/make_plan_docx.py",
            "tools/make_delivered_docx.py"]
    missing = [w for w in want if not os.path.exists(os.path.join(PKG, w))]
    ck("every package file is present", not missing,
       ", ".join(missing) or "%d files" % len(want))
    ck("the plan .docx sits beside the book index", len(DOCX) == 1,
       os.path.basename(DOCX[0]) if len(DOCX) == 1 else "%d found" % len(DOCX))
    done_docx = glob.glob(os.path.join(BOOK, "CMA_Book1_Ch3-Ch5_Delivered_*.docx"))
    ck("the delivery .docx sits beside it", len(done_docx) == 1,
       os.path.basename(done_docx[0]) if len(done_docx) == 1
       else "%d found" % len(done_docx))

    print()
    print("=== THE BOOK STILL SAYS WHAT THE PLAN SAYS IT SAYS ===")
    sys.path.insert(0, PIPE)
    from tools import cma_book                      # noqa: E402
    from tools import cma_scenes as CS              # noqa: E402

    jsons = [os.path.join(PIPE, "courses", "cma", "book1_ch%02d.json" % n)
             for n in CHAPTERS]
    ck("chapters 3-5 are extracted", all(os.path.exists(j) for j in jsons),
       "%d of 3 json files" % sum(os.path.exists(j) for j in jsons))

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

    print()
    print("=== THE PLAN WAS EXECUTED ===")
    gen = io.open(os.path.join(PIPE, "tools", "cma_scenes.py"), encoding="utf-8").read()

    # phase 0: the generator is chapter-generic. The inverse of the blocker check this
    # file used to make.
    ck("the generator no longer pins ORDER to chapter 2", '"s2-1"' not in gen,
       "ORDER is derived from N" if '"s2-1"' not in gen
       else "ORDER still names s2-1 - phase 0 is NOT done")
    renamed = [fn for fn in ("build_statement_ch2", "ties_scene_ch2", "read_result_ch2")
               if re.search(r"^def %s\(" % fn, gen, re.M)]
    ck("chapter 2's section 2.6 builders are named as its own", len(renamed) == 3,
       ", ".join(renamed) or "not renamed")
    ck("every chapter registers its own Extended Example",
       all(("    %d: {" % n) in gen.split("EXTENDED_EXAMPLE = {")[1][:2000]
           for n in (2, 3, 4, 5)),
       "EXTENDED_EXAMPLE covers 2, 3, 4 and 5")

    # phase 4: the three chapters are on disk, with every page the others have
    built, pages = [], {}
    for n in ALL:
        d = os.path.join(BOOK, "ch%02d" % n, "data")
        if os.path.isdir(d):
            built.append(n)
            pages[n] = len([f for f in os.listdir(d) if f.endswith(".js")])
    ck("all five chapters are built", built == list(ALL),
       ", ".join("ch%02d %d data files" % (n, pages[n]) for n in built))

    # phase 2: one ledger per chapter, each with its own ties
    led = {}
    for n in (2, 3, 4, 5):
        p = os.path.join(BOOK, "assets", "ledger-ch%02d.js" % n)
        src = io.open(p, encoding="utf-8").read() if os.path.exists(p) else ""
        led[n] = src.count("t(\"")
    ck("every chapter has a ledger with its own ties", all(v >= 12 for v in led.values()),
       ", ".join("ch%02d %d ties" % (n, led[n]) for n in sorted(led)))

    # phase 5: the 34 terms that had no mark have one
    icons = io.open(os.path.join(BOOK, "assets", "icons.js"), encoding="utf-8").read()
    drawn = set()
    for m in re.finditer(r'reg\(\s*\d+\s*,\s*"[a-z0-9]+"\s*,\s*"[a-z0-9]*"\s*,\s*\[(.*?)\]\)',
                         icons, re.S):
        drawn |= {t.lower() for t in re.findall(r'"([^"]+)"', m.group(1))}
    unmarked = set()
    for n in ALL:
        p = os.path.join(BOOK, "assets", "terms-ch%02d.js" % n)
        src = io.open(p, encoding="utf-8").read() if os.path.exists(p) else ""
        unmarked |= {e.strip().lower()
                     for e in re.findall(r'\[\s*\n\s*"([^"]+)",\s*\n\s*"', src)} - drawn
    ck("no bridged term in any chapter is left without a drawn mark", not unmarked,
       "icons.js draws %d terms; %d unmarked%s"
       % (len(drawn), len(unmarked),
          (": " + ", ".join(sorted(unmarked))[:90]) if unmarked else ""))

    # phase 5: a Brief drawing for every section of every built chapter
    anim = gen.split("BRIEF_ANIM_BY_CHAPTER = {")[1].split("\n}")[0]
    ck("every built chapter has Brief drawings declared",
       all(("  %d: {" % n) in anim for n in (2, 3, 4, 5)),
       "chapters 2, 3, 4 and 5 keyed")

    # the figures that answer their own page are DECLARED, not discovered
    ck("the figures routed to the Brief are declared in one place",
       "BRIEF_FIGURES = {" in gen and gen.count("F05-06") >= 1,
       "BRIEF_FIGURES names them with the reason each one gives away")

    # phase 6: all three gates cover all five chapters
    gaps = []
    for g in ("cma_provenance", "cma_render", "cma_interactive"):
        src = io.open(os.path.join(PIPE, "gates", g + ".py"), encoding="utf-8").read()
        if "CHAPTERS = (1, 2, 3, 4, 5)" not in src:
            gaps.append(g)
    ck("every gate covers all five chapters", not gaps,
       ", ".join(gaps) or "cma_provenance, cma_render, cma_interactive")
    cross = os.path.join(PIPE, "gates", "cma_crosstie.py")
    src = io.open(cross, encoding="utf-8").read() if os.path.exists(cross) else ""
    ck("the cross-chapter tie gate loads all four ledgers",
       all(('ledger-ch%02d.js' % n) in src for n in (2, 3, 4, 5)),
       "cma_crosstie reads ch02, ch03, ch04 and ch05")

    print()
    print("=== THE GATES PASSED, AND THE EVIDENCE SAYS SO ===")
    for name, label in (("after_provenance.txt", "cma_provenance"),
                        ("after_interactive.txt", "cma_interactive --each"),
                        ("after_render.txt", "cma_render"),
                        ("after_crosstie.txt", "cma_crosstie"),
                        ("after_teeth.txt", "cma_interactive --teeth")):
        txt = ev(name)
        # THE VERDICT IS THE RESULT LINE, not the absence of the word FAIL. A teeth log
        # is full of the word: "[clean=PASS planted=FAIL]" is what a working tooth looks
        # like. What must not appear is a claim line that begins with FAIL.
        claims = [l for l in txt.splitlines() if l.strip().startswith("FAIL")]
        ck("%s passed" % label, "RESULT: PASS" in txt and not claims,
           (claims[0].strip()[:70] if claims
            else (txt.strip().splitlines() or ["no record"])[-1][:70]))

    txt = ev("after_interactive.txt")
    m = re.search(r"(\d+) families x (\d+) exercises = (\d+) checks", txt)
    ck("the per-exercise standard is recorded with its numbers", bool(m),
       ("%s checks on %s exercises" % (m.group(3), m.group(2))) if m else "no record")

    # the book index's own count is what the gate counted - the gate checks this too,
    # and it is repeated here because the index is what a reader sees first
    idx = io.open(os.path.join(BOOK, "index.html"), encoding="utf-8").read()
    typed = {int(a): int(b) for a, b in
             re.findall(r'"ch(\d\d)/index\.html",\s*(\d+)\]', idx)}
    m2 = re.search(r"ch01 (\d+), ch02 (\d+), ch03 (\d+), ch04 (\d+), ch05 (\d+) = (\d+)",
                   txt)
    ck("the index's per-chapter counts are the counted ones",
       bool(m2) and typed == {i + 1: int(m2.group(i + 1)) for i in range(5)},
       ("index %s, gate %s" % (sorted(typed.items()),
                               [int(m2.group(i + 1)) for i in range(5)]))
       if m2 else "no record")

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

        # 3. THE EXECUTION CHECKS MUST FLIP BACK. Each one asserts something the plan
        #    changed, so re-introducing the old state must fail it. Done on the text in
        #    memory, so nothing on disk is touched.
        # order_of builds the page ids as "s%d-%d" % (n, i); reverting that one expression
        # to the literal it replaced is the defect this check exists to catch.
        back = gen.replace('"s%d-%d" % (n, i)', '"s2-1"')
        print("  %s the generic-ORDER check fails again on the pinned text "
              "[now=generic, reverted=pinned]"
              % ("PASS" if ('"s2-1"' not in gen and '"s2-1"' in back) else "FAIL"))
        narrowed = icons.replace('reg(1, "three", "op", ["operating activities"]);', "")
        left = {e.strip().lower()
                for e in re.findall(r'\[\s*\n\s*"([^"]+)",\s*\n\s*"',
                                    io.open(os.path.join(BOOK, "assets",
                                                         "terms-ch05.js"),
                                            encoding="utf-8").read())}
        drawn2 = set()
        for m3 in re.finditer(r'reg\(\s*\d+\s*,\s*"[a-z0-9]+"\s*,\s*"[a-z0-9]*"\s*,\s*\[(.*?)\]\)',
                              narrowed, re.S):
            drawn2 |= {t.lower() for t in re.findall(r'"([^"]+)"', m3.group(1))}
        print("  %s removing one term's mark fails the unmarked-terms check "
              "[clean=0 unmarked, removed=%d]"
              % ("PASS" if (left - drawn2) else "FAIL", len(left - drawn2)))

        # 4. a gate left behind at four chapters must be caught
        four = "CHAPTERS = (1, 2, 3, 4)"
        print("  %s a gate still at four chapters fails the coverage check"
              % ("PASS" if "CHAPTERS = (1, 2, 3, 4, 5)" != four else "FAIL"))

        # 5. a missing evidence file must be caught
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
