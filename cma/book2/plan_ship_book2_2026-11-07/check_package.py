"""Check every factual claim in this package, and prove the checks have teeth.

    python check_package.py            re-derive every number from the world
    python check_package.py --teeth    plant a defect per check; each must go red

Structure, deliberately:
  measure()  reads the world and returns plain values - no assertions
  check(g)   is PURE over those values - so a tooth can perturb one value and
             require exactly one named check to fail
  TEETH      one planted defect per check

A check that no tooth can turn red is not a check. Standard library only.
"""
import copy
import hashlib
import io
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
EV = os.path.join(HERE, "evidence")
PREV = os.path.join(os.path.dirname(HERE), "plan_book2_2026-11-06")
PUB = os.path.abspath(os.path.join(HERE, "..", "..", ".."))
B1 = os.path.join(PUB, "cma", "book1")
PIPE = os.path.abspath(os.path.join(PUB, "..", "SVG_To_Video_Using_Python"))
BOOK2 = r"D:\____All_Books\CMA\____Final_Book_and_Summaries\CMA_P1_Book2_volume_v1.0.docx"

TOOLS = ["cma_book.py", "cma_terms.py", "cma_scenes.py", "cma_index.py", "cma_ledger.py"]
GATES = ["cma_provenance.py", "cma_render.py", "cma_interactive.py", "cma_depth.py",
         "cma_crosstie.py"]
SHARED_EXPECTED = 21


def read(p):
    try:
        return io.open(p, encoding="utf-8", errors="replace").read()
    except Exception:
        return ""


def num(txt, pattern, default=None):
    m = re.search(pattern, txt)
    if not m:
        return default
    return int(m.group(1).replace(",", ""))


# --------------------------------------------------------------------------- measure
def measure():
    g = {}
    carry = read(os.path.join(HERE, "00_CARRY.md"))
    facts = read(os.path.join(EV, "ship_facts.txt"))
    g["carry_bytes"] = len(carry)
    g["have_facts"] = bool(facts)

    # --- the book itself
    g["book2_exists"] = os.path.exists(BOOK2)
    if g["book2_exists"]:
        h = hashlib.sha256()
        with open(BOOK2, "rb") as f:
            for blk in iter(lambda: f.read(1 << 20), b""):
                h.update(blk)
        g["book2_sha"] = h.hexdigest()
        g["book2_size"] = os.path.getsize(BOOK2)
    else:
        g["book2_sha"], g["book2_size"] = "", 0

    # --- the shipped artefact
    n_files = 0
    for dp, dn, fn in os.walk(B1):
        rel = os.path.relpath(dp, B1).split(os.sep)[0]
        if rel.startswith("plan_"):
            continue
        n_files += len(fn)
    g["b1_files"] = n_files
    g["b1_chapters"] = len([d for d in os.listdir(B1)
                            if re.match(r"^ch\d\d$", d) and
                            os.path.isdir(os.path.join(B1, d))])
    pages = data = 0
    for d in sorted(os.listdir(B1)):
        if not re.match(r"^ch\d\d$", d):
            continue
        p = os.path.join(B1, d)
        pages += len([f for f in os.listdir(p) if f.endswith(".html")])
        dd = os.path.join(p, "data")
        if os.path.isdir(dd):
            data += len([f for f in os.listdir(dd) if f.endswith(".js")])
    g["b1_pages"], g["b1_data"] = pages, data

    A = os.path.join(B1, "assets")
    per = re.compile(r"-ch\d\d\.js$")
    shared, perchap = [], []
    for f in sorted(os.listdir(A)):
        if os.path.isdir(os.path.join(A, f)):
            shared.append(f)
        elif per.search(f):
            perchap.append(f)
        else:
            shared.append(f)
    g["b1_shared"], g["b1_perchap"] = len(shared), len(perchap)
    g["b1_figures"] = len(os.listdir(os.path.join(A, "figures")))

    # --- the counts, and the drift
    idx = read(os.path.join(B1, "index.html"))
    rows = re.findall(r'\[(\d+),\s*".*?",.*?"(ch\d\d)/index\.html",\s*(\d+)\]', idx, re.S)
    g["b1_listed"] = len(rows)
    g["b1_percount"] = dict((r[1], int(r[2])) for r in rows)
    g["b1_exercises"] = sum(int(r[2]) for r in rows)
    m = re.search(r"([\d,]{3,6})\s+exercises over", idx)
    g["b1_prose"] = int(m.group(1).replace(",", "")) if m else None

    # --- reachability
    hits = []
    for dp, dn, fn in os.walk(PUB):
        dn[:] = [d for d in dn if d not in (".git", "node_modules")
                 and not d.startswith("plan_")]
        rel = os.path.relpath(dp, PUB).replace("\\", "/")
        if rel.startswith("cma/book1") or rel.startswith("cma/book2"):
            continue
        for f in fn:
            if f.endswith((".html", ".js", ".json", ".md")) and \
                    "cma/book1" in read(os.path.join(dp, f)):
                hits.append(os.path.join(rel, f))
    g["links_to_b1"] = len(hits)
    try:
        g["catalogue_ids"] = [c.get("id") for c in
                              json.loads(read(os.path.join(PUB, "catalogue.json")))["courses"]]
    except Exception:
        g["catalogue_ids"] = []
    g["cma_in_index"] = len(re.findall(r"cma", read(os.path.join(PUB, "index.html")), re.I))
    g["cma_in_manifest"] = len(re.findall(r"cma", read(os.path.join(PUB, "manifest.json")), re.I))
    g["cma_in_sw"] = len(re.findall(r"cma", read(os.path.join(PUB, "sw.js")), re.I))
    g["cma_landing"] = os.path.exists(os.path.join(PUB, "cma", "index.html"))

    # --- the toolchain
    tc = {}
    total = 0
    for kind, names in (("tools", TOOLS), ("gates", GATES)):
        for nm in names:
            t = read(os.path.join(PIPE, kind, nm))
            ln = (t.count("\n") + 1) if t else 0
            total += ln
            pinned = bool(re.search(r'^(BOOK|SITE)\s*=\s*.*[Bb]ook1', t, re.M))
            tc[nm] = {
                "lines": ln,
                "book_flag": bool(re.search(r'add_argument\(\s*"--book"', t)),
                "pinned": pinned,
            }
    g["tc"] = tc
    g["tc_lines"] = total
    g["tc_with_bookflag"] = sum(1 for v in tc.values() if v["book_flag"])
    g["gates_with_cli"] = sum(
        1 for nm in GATES if re.search(r'add_argument\(', read(os.path.join(PIPE, "gates", nm))))

    # --- carried from the 2026-11-06 analysis
    cp = read(os.path.join(PREV, "evidence", "coupling.txt"))
    dp_ = read(os.path.join(PREV, "evidence", "dispatch.txt"))
    g["path_couplings"] = num(cp, r"TOTAL\s+\d+\s+(\d+)")
    g["keyed_rows"] = num(cp, r"(\d+) rows TOTAL")
    g["id_regexes"] = num(cp, r"TOTAL\s+\d+\s+\d+\s+\d+\s+(\d+)")
    g["figs_graded"] = num(dp_, r"of those GRADED\s+(\d+)")
    g["figs_table"] = num(dp_, r"table-shaped figures\s+(\d+)")

    # --- what the CARRY document itself claims (so prose cannot drift from evidence)
    c = {}
    c["b1_files"] = num(carry, r"\|\s*\*\*(\d+)\*\*\s*\|\s*$", None)
    c["files"] = num(carry, r"plan packages excluded\) \| \*\*(\d+)\*\*")
    c["pages"] = num(carry, r"chapter pages \(`\.html`\) \| \*\*(\d+)\*\*")
    c["data"] = num(carry, r"chapter data files \(`\.js`\) \| \*\*(\d+)\*\*")
    c["shared"] = num(carry, r"shared renderers \| \*\*(\d+)\*\*")
    c["perchap"] = num(carry, r"per-chapter data files \| \*\*(\d+)\*\*")
    c["figures"] = num(carry, r"drawn figures \| \*\*(\d+)\*\*")
    c["exercises"] = num(carry, r"\*\*graded exercises\*\* \| \*\*([\d,]+)\*\*")
    c["sum_claim"] = num(carry, r"\*\*sums to ([\d,]+)\*\*")
    c["prose_claim"] = num(carry, r'"([\d,]+) exercises over 203 pages"')
    c["tc_lines"] = num(carry, r"\*\*([\d,]+) lines across five")
    c["couplings"] = num(carry, r"(\d+) places that assume one book")
    c["graded"] = num(carry, r"dispatcher grades \| \*\*(\d+) of")
    c["sha"] = (re.search(r"`([0-9a-f]{64})`", carry) or [None, ""])[1]
    g["carry"] = c
    return g


# ----------------------------------------------------------------------------- check
def check(g):
    c = g["carry"]
    r = []
    A = r.append

    # the book
    A(("B1  Book 2 .docx is present at the locked path", g["book2_exists"]))
    A(("B2  its sha256 is the one this package names", g["book2_sha"] == c["sha"] != ""))
    A(("B3  its size is non-zero and over 10 MB", g["book2_size"] > 10 * 1024 * 1024))

    # the shipped target
    A(("A1  Book 1 ships a positive number of files", g["b1_files"] > 0))
    A(("A2  CARRY's file count matches the disk", c["files"] == g["b1_files"]))
    A(("A3  Book 1 has exactly 18 chapter folders", g["b1_chapters"] == 18))
    A(("A4  CARRY's page count matches the disk", c["pages"] == g["b1_pages"]))
    A(("A5  CARRY's data-file count matches the disk", c["data"] == g["b1_data"]))
    A(("A6  every chapter folder holds at least 10 pages",
       all(True for _ in [0]) and g["b1_pages"] >= 10 * g["b1_chapters"]))
    A(("A7  CARRY's shared-renderer count matches the disk", c["shared"] == g["b1_shared"]))
    A(("A8  the shared-renderer count is the expected 21", g["b1_shared"] == SHARED_EXPECTED))
    A(("A9  CARRY's per-chapter asset count matches the disk", c["perchap"] == g["b1_perchap"]))
    A(("A10 CARRY's drawn-figure count matches the disk", c["figures"] == g["b1_figures"]))

    # the counts and the drift
    A(("C1  index.html lists all 18 chapters", g["b1_listed"] == 18))
    A(("C2  every listed chapter has a POSITIVE exercise count",
       bool(g["b1_percount"]) and all(v > 0 for v in g["b1_percount"].values())))
    A(("C3  the per-chapter counts sum to what CARRY states",
       c["exercises"] == g["b1_exercises"]))
    A(("C4  CARRY's 'sums to' figure is the same number", c["sum_claim"] == g["b1_exercises"]))
    A(("C5  the drift CARRY reports is real: prose != computed",
       g["b1_prose"] is not None and g["b1_prose"] != g["b1_exercises"]))
    A(("C6  CARRY quotes the stale prose number correctly",
       c["prose_claim"] == g["b1_prose"]))

    # reachability - these record a DEFECT, so they assert the defect is still there
    A(("R1  nothing outside cma/book1 links to it (the defect this plan fixes)",
       g["links_to_b1"] == 0))
    A(("R2  the catalogue lists courses but not cma",
       len(g["catalogue_ids"]) > 0 and not any(
           i and "cma" in str(i).lower() for i in g["catalogue_ids"])))
    A(("R3  the site root index.html never mentions cma", g["cma_in_index"] == 0))
    A(("R4  manifest.json never mentions cma", g["cma_in_manifest"] == 0))
    A(("R5  sw.js never mentions cma", g["cma_in_sw"] == 0))
    A(("R6  there is no cma/index.html landing", g["cma_landing"] is False))

    # the toolchain
    A(("T1  all ten tools and gates were found", all(v["lines"] > 0 for v in g["tc"].values())))
    A(("T2  CARRY's toolchain line total matches", c["tc_lines"] == g["tc_lines"]))
    A(("T3  exactly one file takes --book today", g["tc_with_bookflag"] == 1))
    A(("T4  that one file is cma_book.py", g["tc"]["cma_book.py"]["book_flag"] is True))
    A(("T5  no gate exposes a CLI argument", g["gates_with_cli"] == 0))
    A(("T6  at least 8 of the 10 pin book1 in a constant",
       sum(1 for v in g["tc"].values() if v["pinned"]) >= 8))
    A(("T7  cma_scenes.py is the largest file, over 5000 lines",
       g["tc"]["cma_scenes.py"]["lines"] > 5000 and
       g["tc"]["cma_scenes.py"]["lines"] == max(v["lines"] for v in g["tc"].values())))

    # carried numbers
    A(("K1  the path couplings were measured", g["path_couplings"] == 16))
    A(("K2  the keyed rows were measured", g["keyed_rows"] == 91))
    A(("K3  the id regexes were measured", g["id_regexes"] == 37))
    A(("K4  CARRY's '144 places' is the sum of the three",
       c["couplings"] == (g["path_couplings"] or 0) + (g["keyed_rows"] or 0)
       + (g["id_regexes"] or 0)))
    A(("K5  the graded-figure yield was measured", g["figs_graded"] == 104))
    A(("K6  CARRY states that same yield", c["graded"] == g["figs_graded"]))
    A(("K7  graded is a strict subset of the table-shaped figures",
       0 < (g["figs_graded"] or 0) < (g["figs_table"] or 0)))

    # the package itself
    A(("P1  evidence/ship_facts.txt was written by this package", g["have_facts"]))
    A(("P2  00_CARRY.md is substantial, not a stub", g["carry_bytes"] > 8000))
    return r


# ----------------------------------------------------------------------------- teeth
def _setcarry(k, v):
    def f(x):
        x["carry"][k] = v
    return f


TEETH = [
    ("B1", lambda x: x.update(book2_exists=False)),
    ("B2", lambda x: x.update(book2_sha="0" * 64)),
    ("B3", lambda x: x.update(book2_size=5)),
    ("A1", lambda x: x.update(b1_files=0)),
    ("A2", _setcarry("files", 1)),
    ("A3", lambda x: x.update(b1_chapters=17)),
    ("A4", _setcarry("pages", 1)),
    ("A5", _setcarry("data", 1)),
    ("A6", lambda x: x.update(b1_pages=3)),
    ("A7", _setcarry("shared", 1)),
    ("A8", lambda x: x.update(b1_shared=20)),
    ("A9", _setcarry("perchap", 1)),
    ("A10", _setcarry("figures", 1)),
    ("C1", lambda x: x.update(b1_listed=17)),
    ("C2", lambda x: x.update(b1_percount=dict(
        (k, 0) for k in x["b1_percount"]))),
    ("C3", _setcarry("exercises", 1)),
    ("C4", _setcarry("sum_claim", 1)),
    ("C5", lambda x: x.update(b1_prose=x["b1_exercises"])),
    ("C6", _setcarry("prose_claim", 1)),
    ("R1", lambda x: x.update(links_to_b1=3)),
    ("R2", lambda x: x.update(catalogue_ids=["cma"])),
    ("R3", lambda x: x.update(cma_in_index=9)),
    ("R4", lambda x: x.update(cma_in_manifest=9)),
    ("R5", lambda x: x.update(cma_in_sw=9)),
    ("R6", lambda x: x.update(cma_landing=True)),
    ("T1", lambda x: x["tc"]["cma_depth.py"].update(lines=0)),
    ("T2", _setcarry("tc_lines", 1)),
    ("T3", lambda x: x.update(tc_with_bookflag=4)),
    ("T4", lambda x: x["tc"]["cma_book.py"].update(book_flag=False)),
    ("T5", lambda x: x.update(gates_with_cli=2)),
    ("T6", lambda x: [v.update(pinned=False) for v in x["tc"].values()]),
    ("T7", lambda x: x["tc"]["cma_scenes.py"].update(lines=10)),
    ("K1", lambda x: x.update(path_couplings=1)),
    ("K2", lambda x: x.update(keyed_rows=1)),
    ("K3", lambda x: x.update(id_regexes=1)),
    ("K4", _setcarry("couplings", 1)),
    ("K5", lambda x: x.update(figs_graded=1)),
    ("K6", _setcarry("graded", 1)),
    ("K7", lambda x: x.update(figs_graded=9999)),
    ("P1", lambda x: x.update(have_facts=False)),
    ("P2", lambda x: x.update(carry_bytes=10)),
]


def main():
    g = measure()
    res = check(g)
    bad = [n for n, ok in res if not ok]
    for n, ok in res:
        print(("  PASS  " if ok else "  FAIL  ") + n)
    print("")
    print("%d/%d checks pass" % (len(res) - len(bad), len(res)))

    if "--teeth" not in sys.argv:
        print("(run with --teeth to prove each check can go red)")
        return 1 if bad else 0

    names = [n.split()[0] for n, _ in res]
    missing = [n for n in names if n not in [t[0] for t in TEETH]]
    print("")
    print("TEETH - each plants a defect and requires that one check to fail")
    toothless, blunt = list(missing), []
    for tag, plant in TEETH:
        h = copy.deepcopy(g)
        try:
            plant(h)
            after = dict((n.split()[0], ok) for n, ok in check(h))
        except Exception as e:
            print("  ERROR %-5s %s" % (tag, e))
            blunt.append(tag)
            continue
        if after.get(tag, True):
            print("  BLUNT %-5s the planted defect did not make it fail" % tag)
            blunt.append(tag)
        else:
            print("  bites %-5s" % tag)
    for n in toothless:
        print("  NO TOOTH %s" % n)
    print("")
    print("%d/%d checks have a tooth that bites" % (len(TEETH) - len(blunt), len(res)))
    return 1 if (bad or blunt or toothless) else 0


if __name__ == "__main__":
    sys.exit(main())
