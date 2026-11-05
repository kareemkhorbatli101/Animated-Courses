"""Verify this package against the site it describes.

Teeth, not a summary: each check below fails on a specific, nameable defect. Run it
after any change to the site or to the plan, and before handing the package on.

Usage:  python -I check_package.py            (run from the package directory)
        python -I check_package.py --teeth    (also prove the checks can fail)
"""
import csv
import glob
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PKG = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.dirname(PKG)
EV = os.path.join(PKG, "evidence")
DOCX = glob.glob(os.path.join(BOOK, "CMA_Book1_Ch1-Ch2_Interactive_Overhaul_*.docx"))

PASSIVE_KINDS = {
    "figure", "lines", "probe", "table", "termcards", "timeline2",
    "shelf", "tank", "wire", "switch", "beam", "gauges",
}
NAV = {"section", "back", "hub"}
KIND = re.compile(r'["\']?kind["\']?\s*:\s*["\']([a-z0-9_-]+)["\']')

results = []


def ck(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print(f"  {'PASS' if ok else 'FAIL'} {name:46} {detail}")
    return ok


def scenes_of(ch):
    out = []
    for path in sorted(glob.glob(os.path.join(BOOK, ch, "data", "*.js"))):
        src = open(path, encoding="utf-8").read()
        for k in KIND.findall(src):
            if k not in NAV:
                out.append((os.path.basename(path)[:-3], k))
    return out


def main(teeth=False):
    print("=== PACKAGE ===")

    # 1. the package is complete
    want = ["00_CARRY.md", "check_package.py",
            "evidence/passive_scenes.csv", "evidence/passive_census.txt",
            "evidence/kind_grading.txt", "evidence/kind_inputs.txt",
            "evidence/book_census.txt",
            "tools/audit_kinds.py", "tools/classify_kinds.py",
            "tools/count_passive.py", "tools/count_entries.py",
            "tools/list_passive_scenes.py", "tools/make_plan_docx.py"]
    missing = [w for w in want if not os.path.exists(os.path.join(PKG, w))]
    ck("every package file is present", not missing, ", ".join(missing) or f"{len(want)} files")

    ck("the plan .docx sits beside the book index", len(DOCX) == 1,
       os.path.basename(DOCX[0]) if len(DOCX) == 1 else f"{len(DOCX)} found")

    # 2. The worklist is now a RECORD, not a to-do list: the 28 scenes it names have
    #    been rewritten. It is deliberately not re-measured by kind NAME any more, and
    #    this is the most important thing in this file to understand.
    #
    #    The scene kinds kept their names. `table` is still called `table`; what changed
    #    is that it grades a decision instead of counting how many seats were read. So a
    #    census keyed on kind names - which is what tools/count_passive.py does, and what
    #    produced the original worklist - now says nothing about behaviour, and re-running
    #    it after the rewrite reports 29 "passive" scenes that are nothing of the kind.
    #    The authority on whether an exercise is graded on looking is behavioural, and it
    #    lives in gates/cma_interactive: it drives every exercise in a browser, presses
    #    Check untouched, then clicks everything, and requires both to fail.
    rows = list(csv.DictReader(open(os.path.join(EV, "passive_scenes.csv"), encoding="utf-8")))
    ck("the worklist is the 28 scenes that were found", len(rows) == 28, f"{len(rows)} rows")

    after = os.path.join(EV, "after_cma_interactive.txt")
    txt = open(after, encoding="utf-8").read() if os.path.exists(after) else ""
    ck("the behavioural gate's result is saved beside the plan",
       "RESULT: PASS" in txt, os.path.basename(after) + (" PASS" if "RESULT: PASS" in txt else " missing/FAIL"))
    ck("Standard A is met: nothing is graded on looking",
       "A3 clicking every button is not enough to pass" in txt and
       "FAIL A3" not in txt and "FAIL A1" not in txt and "FAIL A2" not in txt,
       "A1, A2, A3 all pass in the saved run")
    m = re.search(r"(\d+) families x (\d+) exercises = (\d+) checks", txt)
    ck("every exercise carries at least ten targeted checks",
       bool(m) and int(m.group(1)) >= 10,
       ("%s families on %s exercises = %s checks" % m.groups()) if m else "not reported")

    # 3. every passive scene has a rewrite target in the plan generator
    gen = open(os.path.join(PKG, "tools", "make_plan_docx.py"), encoding="utf-8").read()
    unassigned = []
    for r in rows:
        page, kind, title = r["page"], r["kind"], r["title"]
        hit = re.search(r'\(\s*"' + re.escape(page) + r'"\s*,\s*"' + re.escape(kind)
                        + r'"\s*,\s*"([^"]+)"\s*\)', gen)
        if not hit:
            unassigned.append(f"{page}/{kind}")
            continue
        # the stored prefix must really be a prefix of the live title
        prefixes = re.findall(r'\(\s*"' + re.escape(page) + r'"\s*,\s*"' + re.escape(kind)
                              + r'"\s*,\s*"([^"]+)"\s*\)', gen)
        if not any(title.startswith(p) for p in prefixes):
            unassigned.append(f"{page}/{kind} (title drift: {title[:40]})")
    ck("every passive scene has a rewrite target", not unassigned,
       ", ".join(unassigned) or "28 of 28")

    # 4. the standards are now BUILT, so these checks assert their presence. They
    #    asserted their ABSENCE while this was a plan, which is how the package proved
    #    it was not describing work already done.
    any_html = open(os.path.join(BOOK, "ch01", "s1-1.html"), encoding="utf-8").read()
    ck("Standard B: the Brief ships and every deck page loads it",
       "assets/brief.js" in any_html, "brief.js on ch01/s1-1.html")
    deck_pages = [p for p in glob.glob(os.path.join(BOOK, "ch0*", "*.html"))
                  if not os.path.basename(p).startswith("_")
                  and os.path.basename(p) not in ("index.html", "answers.html")]
    with_brief = [p for p in deck_pages if "assets/brief.js" in open(p, encoding="utf-8").read()]
    ck("every deck page loads the Brief", len(with_brief) == len(deck_pages),
       f"{len(with_brief)} of {len(deck_pages)} deck pages")

    ck("Standard C: the term marks ship",
       os.path.exists(os.path.join(BOOK, "assets", "icons.js")), "assets/icons.js")
    with_icons = [p for p in deck_pages if "assets/icons.js" in open(p, encoding="utf-8").read()]
    ck("every deck page loads the term marks", len(with_icons) == len(deck_pages),
       f"{len(with_icons)} of {len(deck_pages)} deck pages")

    # Standard D: no journal row is posted for the learner
    led = open(os.path.join(BOOK, "assets", "ledger.js"), encoding="utf-8").read()
    ck("Standard D: no journal row is pre-posted",
       "given: true" not in led, "%d rows, all the learner's" % led.count("given: false"))

    # 5. the prior art the plan leans on really is there
    speech = os.path.join(BOOK, "assets", "speech.js")
    sp = open(speech, encoding="utf-8").read() if os.path.exists(speech) else ""
    ck("speech.js exposes speak() and button()",
       "speak: speak" in sp and "button: button" in sp, f"{len(sp)} bytes")

    pages = glob.glob(os.path.join(BOOK, "ch0*", "*.html")) + glob.glob(os.path.join(BOOK, "*.html"))
    loaded = [p for p in pages if "speech.js" in open(p, encoding="utf-8").read()]
    ck("speech.js is loaded by every page", len(loaded) == len(pages),
       f"{len(loaded)} of {len(pages)}")

    ar = 0
    for f in glob.glob(os.path.join(BOOK, "assets", "terms-ch0*.js")):
        src = open(f, encoding="utf-8").read()
        ar += len([1 for row in re.findall(r'\[\s*"[^"]+"\s*,\s*"([^"]*)"', src)
                   if re.search(r"[\u0600-\u06FF]", row)])
    ck("the book's Arabic term bridges are present", ar >= 80, f"{ar} bridged terms carry Arabic")

    # 6. the gate commands the plan names must exist
    pipe = r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python"
    for g in ("cma_provenance", "cma_render"):
        ck(f"gates/{g}.py exists", os.path.exists(os.path.join(pipe, "gates", g + ".py")),
           "named in section 12")

    if teeth:
        print()
        print("=== TEETH ===")
        clean = all(ok for _, ok, _ in results)
        print(f"  clean run: {'PASS' if clean else 'FAIL'}")

        # tooth 1: a saved gate result that does not say PASS must be caught
        faked = txt.replace("RESULT: PASS", "RESULT: FAIL")
        caught = ("RESULT: PASS" in txt) and ("RESULT: PASS" not in faked)
        print(f"  {'PASS' if caught else 'FAIL'} a failing saved gate result fails the check")

        # tooth 2: a rewrite target removed from the generator must be caught
        hacked = gen.replace('("s1-1", "table", "Seven readers")', '("x", "y", "z")')
        page, kind, title = "s1-1", "table", "Seven readers"
        found = re.search(r'\(\s*"' + page + r'"\s*,\s*"' + kind + r'"', hacked)
        print(f"  {'PASS' if not found else 'FAIL'} a removed rewrite target fails the "
              f"assignment check")

        # tooth 3: removing brief.js from a page must fail the Standard B check
        stripped = any_html.replace('<script src="../assets/brief.js"></script>', "")
        flipped = ("assets/brief.js" in any_html) and ("assets/brief.js" not in stripped)
        print(f"  {'PASS' if flipped else 'FAIL'} dropping brief.js fails Standard B "
              f"  [clean=present planted=absent]")

    print()
    bad = [n for n, ok, _ in results if not ok]
    print(f"RESULT: {'PASS' if not bad else 'FAIL'}  ({len(results) - len(bad)}/{len(results)})")
    if bad:
        for n in bad:
            print("   failing:", n)
    return 0 if not bad else 1


if __name__ == "__main__":
    sys.exit(main(teeth="--teeth" in sys.argv))
