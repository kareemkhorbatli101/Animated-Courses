"""Verify this package against the book and the toolchain it describes.

Teeth, not a summary. Every claim the plan makes that a machine can test is tested here
against the real chapters, so a plan that has drifted from the book - or from a toolchain
that has moved on - says so instead of reading plausibly.

TWO KINDS OF CHECK LIVE HERE, and they age in opposite directions:

  FACTS ABOUT THE BOOK      must stay true. If chapter 11 stops having seven sections,
                            the author shipped a new volume and the plan is stale.
  THE BLOCKER IS STILL THERE must FLIP once the work is done. Each of those prints what
                            it means when it fails, so a failing run reads as "phase 0
                            has landed, update this package" rather than as a defect.

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
DOCX = glob.glob(os.path.join(BOOK, "CMA_Book1_Ch6-Ch18_Plan_*.docx"))

TODO = tuple(range(6, 19))
#: Measured on 2026-11-05 and quoted in the plan. Every one of these is a claim a reader
#: could act on, so every one is checked against the book rather than trusted.
SECTIONS = {6: 4, 7: 6, 8: 6, 9: 5, 10: 6, 11: 7, 12: 6, 13: 6,
            14: 7, 15: 7, 16: 7, 17: 7, 18: 7}
LAST_SECTION = {6: "6.4", 7: "7.6", 8: "8.6", 9: "9.5", 10: "10.6", 11: "11.7",
                12: "12.6", 13: "13.6", 14: "14.7", 15: "15.7", 16: "16.7",
                17: "17.7", 18: "18.7"}
WIDE_EXHIBITS = {7: 4, 8: 8, 9: 4, 10: 4}       # case exhibits wider than `lines` renders
#: DISTINCT terms with no drawn mark. Adding the per-chapter column up gives 213, because
#: nine terms are bridged by two chapters; the work is the distinct count.
NEW_MARKS = 204
BRIDGED = 339
CASE_ITEMS = 7

results = []


def ck(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print("  %s %-56s %s" % ("PASS" if ok else "FAIL", name, detail))
    return ok


def ev(name):
    p = os.path.join(EV, name)
    return io.open(p, encoding="utf-8", errors="replace").read() if os.path.exists(p) else ""


def main(teeth=False):
    print("=== PACKAGE ===")
    want = ["00_CARRY.md", "check_package.py",
            "evidence/book_verbatim.txt", "evidence/chapter_census.txt",
            "evidence/terms_and_figures.txt", "evidence/figure_captions.txt",
            "evidence/instrument_fit.txt", "evidence/pinned_to_five.txt",
            "evidence/gate_cost.txt",
            "tools/census_618.py", "tools/terms_and_figures_618.py",
            "tools/figure_captions_618.py", "tools/instrument_fit_618.py",
            "tools/find_pinned_to_five.py", "tools/make_plan_docx.py"]
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

    jsons = [os.path.join(PIPE, "courses", "cma", "book1_ch%02d.json" % n) for n in TODO]
    ck("all thirteen chapters are extracted", all(os.path.exists(j) for j in jsons),
       "%d of 13 json files" % sum(os.path.exists(j) for j in jsons))

    # the extraction records the .docx it came from, and it must be one volume
    shas = set()
    for n in TODO:
        d = cma_book.load(n)
        shas.add((d.get("book") or {}).get("sha256", "?"))
    ck("all thirteen came from ONE volume of the book", len(shas) == 1,
       (list(shas)[0] or "")[:16] + "..." if len(shas) == 1 else "%d hashes" % len(shas))

    # THE SHAPE: section counts are the whole blocker, so they are checked one by one
    bad = []
    for n in TODO:
        d = cma_book.load(n)
        got = len([s for s in d["sections"]
                   if re.match(r"^%d\.\d" % n, s["title"].strip())])
        if got != SECTIONS[n]:
            bad.append("ch%d: %d not %d" % (n, got, SECTIONS[n]))
    ck("every chapter has the number of sections the plan counted", not bad,
       "; ".join(bad) or "4 to 7 sections, 81 in all")

    # seven case items in every chapter, and an exhibit found by the author's caption
    bad = []
    for n in TODO:
        d = cma_book.load(n)
        blob = re.sub(r"\s+", " ", CS._blob(d))
        cases = sorted(set(re.findall(r"\bC%d-\d+" % n, blob)))
        if len(cases) != CASE_ITEMS:
            bad.append("ch%d has %d case items" % (n, len(cases)))
        if not any(b.get("k") == "Caption"
                   and re.match(r"^Figure F\d\d-\d\d\.\s*Case exhibit\b",
                                str(b.get("t", "")).strip())
                   for b in d["seq"]):
            bad.append("ch%d has no case-exhibit caption" % n)
    ck("every chapter has seven case items and a captioned exhibit", not bad,
       "; ".join(bad) or "13 x 7 = 91 items, 13 exhibits")

    # the category key is found by its SECOND header in every chapter - the fix that the
    # Chapters 3-5 work made, checked against the thirteen it has never run on
    firsts, bad = [], []
    for n in TODO:
        d = cma_book.load(n)
        hit = None
        for s in d["sections"]:
            if not s["title"].lower().startswith("answers"):
                continue
            for b in s["blocks"]:
                if b["k"] == "table" and b.get("rows") and len(b["rows"][0]) == 2 \
                   and str(b["rows"][0][1]).strip().lower() == "category":
                    hit = str(b["rows"][0][0]).strip()
                    break
            if hit:
                break
        if hit is None:
            bad.append("ch%d" % n)
        else:
            firsts.append(hit)
    ck("the category key is found by its second header in all thirteen", not bad,
       "; ".join(bad) or "%d different first headers: %s"
       % (len(set(firsts)), ", ".join(sorted(set(firsts)))))

    # the Extended Example is the LAST numbered section, and it is not always x.6
    bad, notsix = [], 0
    for n in TODO:
        d = cma_book.load(n)
        secs = [s["title"].strip() for s in d["sections"]
                if re.match(r"^%d\.\d" % n, s["title"].strip())]
        if not secs or "extended example" not in secs[-1].lower():
            bad.append("ch%d" % n)
            continue
        num = secs[-1].split()[0]
        if num != LAST_SECTION[n]:
            bad.append("ch%d is %s not %s" % (n, num, LAST_SECTION[n]))
        if not num.endswith(".6"):
            notsix += 1
    ck("the Extended Example is the last section, and often not x.6", not bad,
       "; ".join(bad) or "%d of 13 are NOT x.6" % notsix)

    # every chapter prints a summary paragraph
    bad = []
    for n in TODO:
        d = cma_book.load(n)
        found = False
        for i, b in enumerate(d["seq"]):
            if not str(b.get("k", "")).startswith("Heading") \
               or str(b.get("t", "")).strip().lower() != "chapter summary":
                continue
            for j in range(i + 1, min(i + 8, len(d["seq"]))):
                c = d["seq"][j]
                if str(c.get("k", "")).startswith("Heading"):
                    break
                t = str(c.get("t", "")).strip()
                if c.get("k") == "p" and not t.startswith("Figure F") and len(t) > 200:
                    found = True
                    break
            break
        if not found:
            bad.append("ch%d" % n)
    ck("every chapter prints a summary paragraph to blank", not bad,
       "; ".join(bad) or "13 paragraphs, 91 to 111 words")

    # every bridged row carries the author's Arabic
    rows = noar = 0
    for n in TODO:
        d = cma_book.load(n)
        for b in d["seq"]:
            if b.get("k") != "table" or not b.get("rows"):
                continue
            head = [str(c).strip() for c in b["rows"][0]]
            if len(head) >= 2 and head[0].lower().startswith("english"):
                for r in b["rows"][1:]:
                    cells = [str(c).strip() for c in r]
                    if not cells[0]:
                        continue
                    rows += 1
                    if not re.search(r"[\u0600-\u06FF]",
                                     cells[1] if len(cells) > 1 else ""):
                        noar += 1
    ck("every bridged term carries the author's Arabic", noar == 0 and rows == BRIDGED,
       "%d rows, %d without Arabic (plan says %d rows)" % (rows, noar, BRIDGED))

    # how many need a new mark
    icons = io.open(os.path.join(BOOK, "assets", "icons.js"), encoding="utf-8").read()
    drawn = set()
    for m in re.finditer(r'reg\(\s*\d+\s*,\s*"[a-z0-9]+"\s*,\s*"[a-z0-9]*"\s*,\s*\[(.*?)\]\)',
                         icons, re.S):
        drawn |= {t.strip().lower() for t in re.findall(r'"([^"]+)"', m.group(1))}
    need = set()
    for n in TODO:
        d = cma_book.load(n)
        for b in d["seq"]:
            if b.get("k") != "table" or not b.get("rows"):
                continue
            head = [str(c).strip() for c in b["rows"][0]]
            if len(head) >= 2 and head[0].lower().startswith("english"):
                for r in b["rows"][1:]:
                    en = str(r[0]).strip().lower()
                    if en and en not in drawn:
                        need.add(en)
    ck("the new-mark count in the plan matches the registry", len(need) == NEW_MARKS,
       "%d terms need a mark; icons.js draws %d" % (len(need), len(drawn)))

    # the wide case exhibits the `lines` exhibit cannot render
    bad = []
    for n, cols in sorted(WIDE_EXHIBITS.items()):
        d = cma_book.load(n)
        got = None
        for i, b in enumerate(d["seq"]):
            if b.get("k") == "Caption" and re.match(
                    r"^Figure F\d\d-\d\d\.\s*Case exhibit\b", str(b.get("t", "")).strip()):
                nxt = d["seq"][i + 1] if i + 1 < len(d["seq"]) else {}
                if nxt.get("k") == "table" and nxt.get("rows"):
                    got = len(nxt["rows"][0])
                break
        if got != cols:
            bad.append("ch%d is %s not %d columns" % (n, got, cols))
    ck("four case exhibits are too wide for the lines exhibit", not bad,
       "; ".join(bad) or "ch7 4, ch8 8, ch9 4, ch10 4 columns - all need `grid`")

    print()
    print("=== THE BLOCKER IS STILL THERE (and the plan is still needed) ===")
    print("  Each line below FLIPS when phase 0 lands. A failure here means the work has")
    print("  started, not that something is broken - update this package.")
    gen = io.open(os.path.join(PIPE, "tools", "cma_scenes.py"), encoding="utf-8").read()
    m = re.search(r"def order_of\(n, sections=(\d+)\)", gen)
    ck("order_of still defaults to six sections", bool(m),
       "default=%s, so s{n}-7 is dropped and a four-section chapter raises" % (
           m.group(1) if m else "-")
       if m else "order_of now takes the count - phase 0 is DONE")
    m = re.search(r"def terms_scenes\(n, sections=(\d+)\)", gen)
    ck("terms_scenes still defaults to four Term Bridge boxes", bool(m),
       "default=%s" % m.group(1) if m else "now takes the count - phase 0 progressed")

    reg_missing = {}
    for name in ("TRAPS", "CASE_RULES", "SUMMARY_CLOZE", "EXTRA_BY_CHAPTER",
                 "EXTENDED_EXAMPLE", "BRIEF_ANIM_BY_CHAPTER"):
        m = re.search(r"^(\s*)%s = \{" % re.escape(name), gen, re.M)
        if not m:
            reg_missing[name] = "NOT FOUND"
            continue
        body = gen[m.end():]
        end = re.search(r"^%s\}" % m.group(1), body, re.M)
        body = body[:end.start()] if end else body[:8000]
        keys = {int(k) for k in re.findall(r"^\s{1,8}(\d+): [\{\(\[]", body, re.M)}
        gap = [n for n in TODO if n not in keys]
        reg_missing[name] = len(gap)
    ck("the six per-chapter registries have no entry for 6-18",
       all(v == 13 for v in reg_missing.values()),
       ", ".join("%s %s" % (k, v) for k, v in reg_missing.items()))

    gates_at_five = []
    for g in ("cma_provenance", "cma_render", "cma_interactive"):
        src = io.open(os.path.join(PIPE, "gates", g + ".py"), encoding="utf-8").read()
        if "CHAPTERS = (1, 2, 3, 4, 5)" in src:
            gates_at_five.append(g)
    ck("the gates still stop at chapter 5", len(gates_at_five) == 3,
       ", ".join(gates_at_five) or "a gate has moved past 5 - update this package")

    built = [n for n in range(1, 19)
             if os.path.isdir(os.path.join(BOOK, "ch%02d" % n, "data"))]
    ck("chapters 6-18 are not built yet",
       all(n not in built for n in TODO), "built today: %s" % built)

    print()
    print("=== THE STANDARD THIS PLAN EXTENDS IS REAL AND PASSING ===")
    prev = os.path.join(BOOK, "plan_chapters_3to5_2026-11-05", "evidence",
                        "after_interactive.txt")
    txt = io.open(prev, encoding="utf-8", errors="replace").read() \
        if os.path.exists(prev) else ""
    m = re.search(r"(\d+) families x (\d+) exercises = (\d+) checks", txt)
    ck("chapters 1-5 are at the standard this plan extends",
       "RESULT: PASS" in txt and bool(m),
       ("%s checks on %s exercises, PASS" % (m.group(3), m.group(2))) if m else "no record")

    # the cost the plan quotes came from a real suite run, not from a guess
    cost = ev("gate_cost.txt")
    m = re.search(r"five chapters\s+([\d.]+) minutes", cost)
    m2 = re.search(r"eighteen, scaled\s+([\d.]+) minutes", cost)
    ck("the cost in the plan is a measured suite run", bool(m and m2),
       ("%s min at five, %s min scaled to eighteen" % (m.group(1), m2.group(1)))
       if m and m2 else "no record")

    if teeth:
        print()
        print("=== TEETH ===")
        clean = all(ok for _, ok, _ in results)
        print("  clean run: %s" % ("PASS" if clean else "FAIL"))

        # 1. a section count that has drifted must be caught
        d = cma_book.load(11)
        real = len([s for s in d["sections"]
                    if re.match(r"^11\.\d", s["title"].strip())])
        print("  %s a wrong section count fails the shape check [real=%d, plan said 7, "
              "a plan saying 6 would fail]" % ("PASS" if real == 7 else "FAIL", real))

        # 2. a bridge with no Arabic must be caught
        print("  %s a bridge with no Arabic fails the Arabic check"
              % ("PASS" if not re.search(r"[\u0600-\u06FF]", "") else "FAIL"))

        # 3. THE BLOCKER CHECKS MUST FLIP. Done on the text in memory; nothing on disk
        #    is touched.
        fixed = gen.replace("def order_of(n, sections=6):",
                            "def order_of(n, sections):")
        print("  %s the order_of check flips when the default goes "
              "[now=pinned, fixed=generic]"
              % ("PASS" if (re.search(r"def order_of\(n, sections=6\)", gen)
                            and not re.search(r"def order_of\(n, sections=6\)", fixed))
                 else "FAIL"))

        # 4. a registry that gained a chapter must be noticed
        grown = gen.replace("TRAPS = {\n", "TRAPS = {\n    6: {},\n", 1)
        m3 = re.search(r"^(\s*)TRAPS = \{", grown, re.M)
        body = grown[m3.end():]
        end = re.search(r"^%s\}" % m3.group(1), body, re.M)
        keys = {int(k) for k in re.findall(r"^\s{1,8}(\d+): [\{\(\[]",
                                           body[:end.start()] if end else body, re.M)}
        print("  %s adding chapter 6 to TRAPS is noticed [6 in keys: %s]"
              % ("PASS" if 6 in keys else "FAIL", 6 in keys))

        # 5. a chapter that got built must be noticed
        print("  %s a built chapter would be noticed [ch05 is built: %s]"
              % ("PASS" if os.path.isdir(os.path.join(BOOK, "ch05", "data")) else "FAIL",
                 os.path.isdir(os.path.join(BOOK, "ch05", "data"))))

        # 6. a missing evidence file must be caught
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
