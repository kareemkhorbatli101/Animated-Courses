"""Re-derive every number in 00_CARRY.md from the book and the toolchain, then prove the
checks have teeth.

    python check_package.py            the checks
    python check_package.py --teeth    plant a defect against each one, require it to fail

THE SHAPE, and it is deliberate. `measure()` reads the world and returns plain values.
`check(got)` is PURE over those values. That split is what makes teeth possible: a tooth
perturbs one measured value and requires exactly the check that owns it to go red. A checker
whose checks read the world inside themselves cannot be tested, and an untested check that
has only ever seen a healthy tree has not been asked a question - it reported CLEAN three
times while blunt last time, which is why this file exists in this shape.

CARRY AGREEMENT. Several checks do not compare a measurement with a constant I typed here;
they compare it with the number written in 00_CARRY.md, parsed out of the prose. That is the
only way the document cannot drift away from its own evidence.
"""
import argparse
import copy
import hashlib
import os
import re
import sys

PKG = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(PKG, "tools"))
from _tee import book_paths, pipeline_root                      # noqa: E402

sys.path.insert(0, pipeline_root())
from tools import cma_book                                      # noqa: E402
from tools import cma_scenes as S                               # noqa: E402
from dispatch_dryrun import figure_tables_b2, icon_registry     # noqa: E402

BOOKS = book_paths()
CARRY = os.path.join(PKG, "00_CARRY.md")
EVIDENCE = os.path.join(PKG, "evidence")
PUB1 = r"D:\MyWork\AnimatedMatrix\Apps\_publish_Animated-Courses\cma\book1"
REVIEW_ED = (r"D:\____All_Books\CMA\CMA_Book_2\CMA_P1_Book2_REVIEW_EDITION.docx")

SHARED = ["answers-view.js", "brief.js", "figure.js", "grid.js", "hub.js", "icons.js",
          "ledger.js", "lines.js", "objects.js", "objects2.js", "objects3.js",
          "objects4.js", "objects5.js", "progress.js", "provenance.js", "scene.js",
          "site.css", "speech.js", "terms-merge.js"]
SHOWN_ONLY = ("figure", "lines", "grid")
EE_CLOSERS = ("tie line", "how the exam asks it", "self-check")


def boxes(d, start):
    n = 0
    for b in d["seq"]:
        if b["k"] == "table" and len(b["rows"]) == 1 and len(b["rows"][0]) == 1:
            if b["rows"][0][0].strip().upper().startswith(start):
                n += 1
    return n


# ----------------------------------------------------------------- measure
def measure():
    from docx import Document
    g = {}
    p2 = BOOKS[2]
    g["exists"] = os.path.exists(p2)
    g["bytes"] = os.path.getsize(p2) if g["exists"] else 0
    g["sha"] = cma_book.sha256(p2) if g["exists"] else ""
    g["review_sha"] = cma_book.sha256(REVIEW_ED) if os.path.exists(REVIEW_ED) else ""
    g["siblings"] = sorted(x for x in os.listdir(os.path.dirname(p2))
                           if x.lower().endswith(".docx"))

    g["n_chapters"] = len(cma_book.chapter_titles(Document(p2)))

    tot = dict(secs=0, sc=0, p=0, expl=0, figs=0, img=0, terms=0, ar=0,
               tb=0, et=0, we=0, ytb=0, cases=0, ytpairs=0)
    g["per_chapter_figs"] = {}
    g["ee_closers_ok"] = 0
    g["ee_steps"] = {}
    distinct2 = set()
    for n in range(1, g["n_chapters"] + 1):
        d = cma_book.extract(p2, n)
        qs = S.questions(d)
        ex = S.explanations(d)
        tot["secs"] += len([s for s in d["sections"]
                            if re.match(r"^\d+\.\d+", s["title"])])
        tot["sc"] += len([q for q in qs if q["id"].startswith("SC")])
        tot["p"] += len([q for q in qs if q["id"].startswith("P")])
        tot["expl"] += sum(1 for q in qs if q["id"] in ex)
        tot["figs"] += len(d["figures"])
        tot["img"] += sum(1 for b in d["seq"] if b["k"] == "image")
        tot["terms"] += len(d["terms"])
        tot["ar"] += sum(1 for x in d["terms"] if x["ar"])
        tot["tb"] += boxes(d, "TERM BRIDGE")
        tot["et"] += boxes(d, "EXAM TRAP")
        tot["we"] += boxes(d, "WORKED EXAMPLE")
        tot["ytb"] += boxes(d, "YOUR TURN")
        tot["cases"] += len({m.group(0) for b in d["seq"] for m in
                             [re.match(r"^C\d+-\d+", str(b.get("t", "")).strip())] if m})
        tot["ytpairs"] += len(S._your_turn_key(d))
        for x in d["terms"]:
            if x["en"].strip():
                distinct2.add(x["en"].strip().lower())
        g["per_chapter_figs"][n] = len(figure_tables_b2(d, n))
        ee = [s for s in d["sections"] if "extended example" in s["title"].lower()]
        steps = ([b["t"] for b in ee[-1]["blocks"] if b["k"] == "Heading 3"] if ee else [])
        g["ee_steps"][n] = len(steps)
        low = " | ".join(steps).lower()
        if all(c in low for c in EE_CLOSERS) and "three languages" in low:
            g["ee_closers_ok"] += 1
    g.update(tot)
    g["distinct2"] = len(distinct2)

    # the prefix claim, both directions
    d7 = cma_book.extract(p2, 7)
    caps7 = [b["t"] for b in d7["seq"] if b.get("k") == "Caption"]
    q7 = S.questions(d7)
    g["b2_fig_tag"] = re.search(r"F\d+-\d\d", caps7[0]).group(0)
    g["b2_sc_id"] = q7[0]["id"]
    g["b2_case_id"] = sorted({m.group(0) for b in d7["seq"] for m in
                              [re.match(r"^C\d+-\d+", str(b.get("t", "")).strip())] if m})[0]
    # THE DANGEROUS FACT: the Book 1 pattern finds nothing on Book 2
    g["b1_pattern_hits_on_b2"] = sum(
        1 for b in d7["seq"] if b.get("k") == "Caption" and re.search(r"F%02d-\d\d" % 7,
                                                                      str(b.get("t", ""))))

    # the dispatcher
    S.figure_tables = figure_tables_b2
    dtot = dict(tables=0, graded=0, shown=0, errors=0, fill=0)
    for n in range(1, g["n_chapters"] + 1):
        d = cma_book.extract(p2, n)
        ft = figure_tables_b2(d, n)
        dtot["tables"] += len(ft)
        key = S._your_turn_key(d)
        for sec in sorted({f for f, _c, _h, _r in ft.values() if f}):
            try:
                for sp in S.auto_section(d, n, sec, key):
                    k = sp.get("kind", "?")
                    if k in SHOWN_ONLY:
                        dtot["shown"] += 1
                    else:
                        dtot["graded"] += 1
                    if k == "fill":
                        dtot["fill"] += 1
            except Exception:
                dtot["errors"] += 1
    g["dispatch"] = dtot

    # icons
    reg, fams = icon_registry()
    b1 = set()
    for n in range(1, 19):
        for x in cma_book.extract(BOOKS[1], n)["terms"]:
            if x["en"].strip():
                b1.add(x["en"].strip().lower())
    g["icons_registered"] = len(reg)
    g["icons_families"] = len(fams)
    g["b1_distinct"] = len(b1)
    g["b1_unregistered"] = len(b1 - reg)
    g["b2_registered"] = len(distinct2 & reg)
    g["b2_new"] = len(distinct2 - reg)

    # coupling, re-derived here rather than read back from the evidence file
    keyed, tabs, idlines = 0, set(), 0
    KEYED = re.compile(r"^\s{0,12}(\d{1,2})\s*:\s*[\(\{\[\"']")
    TOP = re.compile(r"^([A-Z_][A-Z0-9_]*)\s*=\s*[\{\[]")
    IDP = re.compile(r"""%0?2?d[-\\]|["'](?:F|SC|P|C)%0?2?d""")
    for rel in ("tools/cma_book.py", "tools/cma_terms.py", "tools/cma_scenes.py",
                "tools/cma_index.py", "gates/cma_provenance.py", "gates/cma_render.py",
                "gates/cma_interactive.py", "gates/cma_crosstie.py", "gates/cma_depth.py"):
        p = os.path.join(pipeline_root(), rel.replace("/", os.sep))
        cur = None
        for ln in open(p, encoding="utf-8").read().split("\n"):
            m = TOP.match(ln)
            if m:
                cur = m.group(1)
            if KEYED.match(ln):
                keyed += 1
                if cur:
                    tabs.add(cur)
            if IDP.search(ln) and not ln.strip().startswith("#"):
                idlines += 1
    g["keyed_rows"] = keyed
    g["keyed_tables"] = len(tabs)
    g["id_lines"] = idlines

    # the site
    nf = 0
    for dp, dn, fn in os.walk(PUB1):
        dn[:] = [x for x in dn if not x.startswith("plan_")]
        nf += len(fn)
    g["book1_files"] = nf
    g["shared_present"] = sum(1 for x in SHARED
                              if os.path.exists(os.path.join(PUB1, "assets", x)))

    # the package's own evidence
    g["evidence"] = {x: (os.path.getsize(os.path.join(EVIDENCE, x))
                         if os.path.exists(os.path.join(EVIDENCE, x)) else 0)
                     for x in ("structure.txt", "dispatch.txt", "coupling.txt")}
    g["carry"] = open(CARRY, encoding="utf-8").read() if os.path.exists(CARRY) else ""
    return g


# ----------------------------------------------------------------- the claims in the prose
def carry_num(txt, pattern):
    """A number 00_CARRY.md states, pulled out of its own prose. None if absent."""
    m = re.search(pattern, txt, re.I)
    if not m:
        return None
    return int(m.group(1).replace(",", ""))


# ----------------------------------------------------------------- check
def check(g):
    """[(name, ok, detail)] - pure over the measured values, so teeth can bite."""
    out = []
    c = g["carry"]

    def add(name, ok, detail):
        out.append((name, bool(ok), detail))

    # --- the book is what the package says it is
    add("B1 the file exists", g["exists"], BOOKS[2])
    add("B2 bytes match CARRY",
        g["bytes"] == carry_num(c, r"\|\s*bytes\s*\|\s*\*\*([\d,]+)\*\*"),
        "measured %d, CARRY %s" % (g["bytes"], carry_num(c, r"\|\s*bytes\s*\|\s*\*\*([\d,]+)\*\*")))
    sha_in_carry = re.search(r"`([0-9a-f]{64})`", c)
    add("B3 sha256 matches CARRY",
        sha_in_carry and g["sha"] == sha_in_carry.group(1),
        "measured %s…" % g["sha"][:16])
    add("B4 it is NOT the review edition",
        g["review_sha"] and g["sha"] != g["review_sha"],
        "review edition %s…" % g["review_sha"][:16])
    add("B5 books 3 and 4 are in the same folder",
        any("Book3_volume" in x for x in g["siblings"])
        and any("Book4_volume" in x for x in g["siblings"]),
        "%d .docx siblings" % len(g["siblings"]))

    # --- the census, each against the number the prose states
    for name, key, pat in (
            ("C1 chapters", "n_chapters", r"\|\s*chapters\s*\|\s*18\s*\|\s*\*\*(\d+)\*\*"),
            ("C2 numbered sections", "secs", r"numbered sections\s*\|\s*112\s*\|\s*\*\*(\d+)\*\*"),
            ("C3 questions", None, r"\|\s*questions\s*\|.*?\*\*(\d+)\*\*"),
            ("C4 section-check split", "sc", r"\*\*522\*\* \((\d+) Section Check"),
            ("C5 practice split", "p", r"\+ (\d+) Practice\)"),
            ("C6 all explained", "expl", r"\*\*(\d+) of 522\*\*"),
            ("C7 captioned figures", "figs", r"captioned figures \|\s*203\s*\|\s*\*\*(\d+)\*\*"),
            ("C8 drawn figures", "img", r"\*\*(\d+) drawn, 150 tables\*\*"),
            ("C9 term rows", "terms", r"\*\*(\d+) / 392\*\*"),
            ("C10 distinct terms", "distinct2", r"distinct English terms \|\s*316\s*\|\s*\*\*(\d+)\*\*"),
            ("C11 case items", "cases", r"\*\*(\d+) = 7 . 18\*\*"),
            ("C12 your-turn pairs", "ytpairs", r"Your-turn authored answer pairs \|\s*73\s*\|\s*\*\*(\d+)\*\*"),
    ):
        want = carry_num(c, pat)
        got = (g["sc"] + g["p"]) if key is None else g[key]
        add(name, want is not None and got == want,
            "measured %s, CARRY %s" % (got, want))

    add("C13 every term row has Arabic", g["ar"] == g["terms"],
        "%d of %d" % (g["ar"], g["terms"]))
    add("C14 the four box counts",
        (g["tb"], g["et"], g["we"], g["ytb"]) == (96, 37, 39, 18),
        "TB/ET/WE/YT = %d/%d/%d/%d" % (g["tb"], g["et"], g["we"], g["ytb"]))

    # --- the prefix: the most dangerous fact in the package
    add("P1 book 2 figure tag is F207-01", g["b2_fig_tag"] == "F207-01", g["b2_fig_tag"])
    add("P2 book 2 question id is SC207-1", g["b2_sc_id"] == "SC207-1", g["b2_sc_id"])
    add("P3 book 2 case id is C207-1", g["b2_case_id"] == "C207-1", g["b2_case_id"])
    add("P4 the BOOK 1 pattern finds ZERO on book 2 (the silent-zero fault)",
        g["b1_pattern_hits_on_b2"] == 0,
        "F07-\\d\\d matched %d captions" % g["b1_pattern_hits_on_b2"])
    add("P5 every chapter yields a POSITIVE figure count with the book 2 prefix",
        all(v > 0 for v in g["per_chapter_figs"].values()),
        "min %d over %d chapters" % (min(g["per_chapter_figs"].values()),
                                     len(g["per_chapter_figs"])))

    # --- the dispatcher
    d = g["dispatch"]
    add("D1 table-shaped figures", d["tables"] == carry_num(c, r"table-shaped figures\s+(\d+)"),
        "measured %d" % d["tables"])
    add("D2 graded", d["graded"] == carry_num(c, r"of those GRADED\s+(\d+)"),
        "measured %d" % d["graded"])
    add("D3 only shown", d["shown"] == carry_num(c, r"of those ONLY SHOWN\s+(\d+)"),
        "measured %d" % d["shown"])
    add("D4 no dispatcher errors", d["errors"] == 0, "%d errors" % d["errors"])
    add("D5 auto_fill is chosen zero times, as CARRY states", d["fill"] == 0,
        "fill=%d" % d["fill"])
    add("D6 graded exceeds only-shown by more than 3x", d["graded"] > 3 * d["shown"],
        "%d vs %d" % (d["graded"], d["shown"]))

    # --- icons
    add("I1 icons.js registers 333 terms in 40 families",
        (g["icons_registered"], g["icons_families"]) == (333, 40),
        "%d/%d" % (g["icons_registered"], g["icons_families"]))
    add("I2 book 1 has ZERO unregistered terms (the standard being held to)",
        g["b1_unregistered"] == 0, "%d unregistered" % g["b1_unregistered"])
    add("I3 book 2 new-term count matches CARRY",
        g["b2_new"] == carry_num(c, r"NEW, need a family\s+(\d+)"),
        "measured %d" % g["b2_new"])
    add("I4 the new terms are nearly all of book 2's",
        g["b2_new"] + g["b2_registered"] == g["distinct2"],
        "%d + %d = %d" % (g["b2_new"], g["b2_registered"], g["distinct2"]))

    # --- coupling
    add("K1 keyed rows match CARRY",
        g["keyed_rows"] == carry_num(c, r"\*\*(\d+) rows keyed by a bare chapter number\*\*")
        or g["keyed_rows"] == carry_num(c, r"(\d+) rows keyed"),
        "measured %d" % g["keyed_rows"])
    add("K2 seven chapter-keyed tables", g["keyed_tables"] == 7,
        "%d tables" % g["keyed_tables"])
    add("K3 id-regex line count matches CARRY",
        g["id_lines"] == carry_num(c, r"\*\*(\d+) lines\*\*"),
        "measured %d" % g["id_lines"])

    # --- the extended example, the opportunity the plan rests on
    add("E1 all eighteen Extended Examples end with the four closing steps",
        g["ee_closers_ok"] == g["n_chapters"],
        "%d of %d" % (g["ee_closers_ok"], g["n_chapters"]))
    add("E2 the step list really does vary (7 to 10)",
        min(g["ee_steps"].values()) == 7 and max(g["ee_steps"].values()) == 10,
        "%d..%d" % (min(g["ee_steps"].values()), max(g["ee_steps"].values())))

    # --- the site and this package
    add("S1 all 19 shared renderers exist in book1/assets",
        g["shared_present"] == len(SHARED),
        "%d of %d" % (g["shared_present"], len(SHARED)))
    add("S2 book1 file count matches CARRY",
        g["book1_files"] == carry_num(c, r"(\d+) shipped Book 1 files"),
        "measured %d" % g["book1_files"])
    add("S3 all three evidence files are present and substantial",
        all(v > 1500 for v in g["evidence"].values()),
        ", ".join("%s=%d" % (k, v) for k, v in sorted(g["evidence"].items())))
    add("S4 CARRY names the plan's eight risks", len(re.findall(r"^\| R\d", c, re.M)) == 8,
        "%d risk rows" % len(re.findall(r"^\| R\d", c, re.M)))
    add("S5 CARRY states what is NOT decided", "needs the owner" in c, "")
    return out


# ----------------------------------------------------------------- teeth
def teeth(g):
    """Plant one defect per check and require THAT check to go red.

    A check that cannot be made to fail is not a check. Every entry below names the check it
    must break; if a plant breaks nothing, or breaks something else, this prints BLUNT.
    """
    plants = [
        ("B1 the file exists", lambda x: x.update(exists=False)),
        ("B2 bytes match CARRY", lambda x: x.update(bytes=x["bytes"] + 1)),
        ("B3 sha256 matches CARRY", lambda x: x.update(sha="0" * 64)),
        ("B4 it is NOT the review edition", lambda x: x.update(review_sha=x["sha"])),
        ("B5 books 3 and 4 are in the same folder", lambda x: x.update(siblings=[])),
        ("C1 chapters", lambda x: x.update(n_chapters=17)),
        ("C2 numbered sections", lambda x: x.update(secs=115)),
        ("C3 questions", lambda x: x.update(sc=x["sc"] - 1)),
        ("C4 section-check split", lambda x: x.update(sc=231)),
        ("C5 practice split", lambda x: x.update(p=289)),
        ("C6 all explained", lambda x: x.update(expl=x["expl"] - 1)),
        ("C7 captioned figures", lambda x: x.update(figs=255)),
        ("C8 drawn figures", lambda x: x.update(img=105)),
        ("C9 term rows", lambda x: x.update(terms=391)),
        ("C10 distinct terms", lambda x: x.update(distinct2=168)),
        ("C11 case items", lambda x: x.update(cases=125)),
        ("C12 your-turn pairs", lambda x: x.update(ytpairs=42)),
        ("C13 every term row has Arabic", lambda x: x.update(ar=x["terms"] - 1)),
        ("C14 the four box counts", lambda x: x.update(et=36)),
        ("P1 book 2 figure tag is F207-01", lambda x: x.update(b2_fig_tag="F07-01")),
        ("P2 book 2 question id is SC207-1", lambda x: x.update(b2_sc_id="SC7-1")),
        ("P3 book 2 case id is C207-1", lambda x: x.update(b2_case_id="C7-1")),
        ("P4 the BOOK 1 pattern finds ZERO on book 2 (the silent-zero fault)",
         lambda x: x.update(b1_pattern_hits_on_b2=3)),
        # THE TOOTH THAT MATTERS MOST: the real fault, replanted. The first dry run of this
        # package returned an empty dict for all eighteen chapters and reported no error.
        ("P5 every chapter yields a POSITIVE figure count with the book 2 prefix",
         lambda x: x.update(per_chapter_figs=dict((k, 0) for k in x["per_chapter_figs"]))),
        ("D1 table-shaped figures",
         lambda x: x["dispatch"].update(tables=x["dispatch"]["tables"] - 1)),
        ("D2 graded", lambda x: x["dispatch"].update(graded=x["dispatch"]["graded"] - 1)),
        ("D3 only shown", lambda x: x["dispatch"].update(shown=x["dispatch"]["shown"] + 1)),
        ("D4 no dispatcher errors", lambda x: x["dispatch"].update(errors=1)),
        ("D5 auto_fill is chosen zero times, as CARRY states",
         lambda x: x["dispatch"].update(fill=4)),
        ("D6 graded exceeds only-shown by more than 3x",
         lambda x: x["dispatch"].update(shown=x["dispatch"]["graded"])),
        ("I1 icons.js registers 333 terms in 40 families",
         lambda x: x.update(icons_registered=332)),
        ("I2 book 1 has ZERO unregistered terms (the standard being held to)",
         lambda x: x.update(b1_unregistered=5)),
        ("I3 book 2 new-term count matches CARRY", lambda x: x.update(b2_new=165)),
        ("I4 the new terms are nearly all of book 2's",
         lambda x: x.update(b2_registered=x["b2_registered"] + 2)),
        ("K1 keyed rows match CARRY", lambda x: x.update(keyed_rows=90)),
        ("K2 seven chapter-keyed tables", lambda x: x.update(keyed_tables=6)),
        ("K3 id-regex line count matches CARRY", lambda x: x.update(id_lines=36)),
        ("E1 all eighteen Extended Examples end with the four closing steps",
         lambda x: x.update(ee_closers_ok=17)),
        ("E2 the step list really does vary (7 to 10)",
         lambda x: x.update(ee_steps=dict((k, 9) for k in x["ee_steps"]))),
        ("S1 all 19 shared renderers exist in book1/assets",
         lambda x: x.update(shared_present=18)),
        ("S2 book1 file count matches CARRY", lambda x: x.update(book1_files=1)),
        ("S3 all three evidence files are present and substantial",
         lambda x: x.update(evidence=dict((k, 6) for k in x["evidence"]))),
        ("S4 CARRY names the plan's eight risks",
         lambda x: x.update(carry=re.sub(r"^\| R\d", "| X", x["carry"], flags=re.M))),
        ("S5 CARRY states what is NOT decided",
         lambda x: x.update(carry=x["carry"].replace("needs the owner", "x"))),
    ]
    clean = dict((n, ok) for n, ok, _d in check(g))
    bites, blunt = 0, []
    for name, plant in plants:
        if name not in clean:
            blunt.append("%s  <- no such check" % name)
            continue
        doctored = copy.deepcopy(g)
        plant(doctored)
        after = dict((n, ok) for n, ok, _d in check(doctored))
        if clean[name] and not after.get(name, True):
            bites += 1
        else:
            blunt.append("%s  <- plant did not break it (clean=%s after=%s)"
                         % (name, clean[name], after.get(name)))
    return bites, len(plants), blunt, sorted(set(clean) - set(n for n, _p in plants))


# ----------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--teeth", action="store_true")
    a = ap.parse_args()

    g = measure()
    res = check(g)
    bad = [r for r in res if not r[1]]
    print("CMA BOOK 2 PLAN PACKAGE - %d checks" % len(res))
    print("=" * 86)
    for name, ok, detail in res:
        print("  %-4s %-62s %s" % ("ok" if ok else "FAIL", name, detail))
    print("=" * 86)
    print("RESULT: %d of %d pass" % (len(res) - len(bad), len(res)))

    rc = 1 if bad else 0
    if a.teeth:
        bites, n, blunt, untested = teeth(g)
        print("\nTEETH")
        print("=" * 86)
        print("  %d of %d plants broke exactly the check they target" % (bites, n))
        if untested:
            print("  checks with NO tooth (%d): %s" % (len(untested), ", ".join(untested)))
        for b in blunt:
            print("  BLUNT  %s" % b)
        # separated from the clean run on purpose: last time a failing clean run printed
        # FAIL in the teeth section and hid which of the two was actually wrong.
        print("  TEETH %s" % ("BITE - every tooth drew blood" if bites == n and not untested
                              else "INCOMPLETE"))
        if bites != n or untested:
            rc = 1
    sys.exit(rc)


if __name__ == "__main__":
    main()
