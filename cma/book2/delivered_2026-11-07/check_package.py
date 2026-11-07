# -*- coding: utf-8 -*-
"""Every number in 00_CARRY.md, re-derived from the world.

    python check_package.py            # re-measure and compare
    python check_package.py --teeth    # plant a defect against each check; each must fail

HOW THIS IS MEANT TO BE READ. `measure()` reads the shipped site, the toolchain and the saved
gate output and returns plain values. `check(g)` is pure over those values, so `--teeth` can
move one of them and require exactly one named check to go red. A check nothing can break is a
sentence, not a check.

AND WHY IT PARSES THE CARRY. Several numbers below are read out of 00_CARRY.md's own prose and
compared with the measurement. That is the point: the document cannot drift from the thing it
describes without this failing. It is the same defect the whole of this work kept finding -
"1,078 exercises" typed once under a table that sums to 1,102 - applied to my own write-up.
"""
import io
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
BOOK2 = os.path.dirname(HERE)
CMA = os.path.dirname(BOOK2)
PUBLISH = os.path.dirname(CMA)
PIPELINE = os.path.join(os.path.dirname(PUBLISH), "SVG_To_Video_Using_Python")
CARRY = os.path.join(HERE, "00_CARRY.md")
EV = os.path.join(HERE, "evidence")


def n(txt, pattern, default=-1):
    """A number out of the CARRY's own prose, or -1 so a missing one fails loudly."""
    m = re.search(pattern, txt)
    return int(m.group(1).replace(",", "")) if m else default


def site_files(root, skip=("build_2026", "plan_", "delivered_")):
    nf = nb = 0
    for dp, _dn, fn in os.walk(root):
        if any(s in dp for s in skip):
            continue
        for f in fn:
            if f.endswith((".docx", ".md")):
                continue
            nf += 1
            nb += os.path.getsize(os.path.join(dp, f))
    return nf, nb


def measure():
    g = {}
    carry = io.open(CARRY, encoding="utf-8").read()
    g["carry"] = carry

    # ---- the shipped artefact ----
    nf, nb = site_files(BOOK2)
    g["files"] = nf
    g["mb"] = round(nb / 1048576.0, 1)
    g["pages"] = sum(len([f for f in os.listdir(os.path.join(BOOK2, "ch%02d" % i))
                          if f.endswith(".html")]) for i in range(1, 19))
    g["datafiles"] = sum(len([f for f in os.listdir(os.path.join(BOOK2, "ch%02d" % i, "data"))
                              if f.endswith(".js")]) for i in range(1, 19))
    g["chapters"] = len([d for d in os.listdir(BOOK2) if re.fullmatch(r"ch\d\d", d)])
    g["figures"] = len(os.listdir(os.path.join(BOOK2, "assets", "figures")))
    idx = io.open(os.path.join(BOOK2, "index.html"), encoding="utf-8").read()
    rows = re.findall(r'"ch(\d\d)/index\.html"\s*,\s*(\d+)\s*\]', idx)
    g["index_rows"] = len(rows)
    g["exercises"] = sum(int(x) for _c, x in rows)
    # NOTHING ON THE PAGE MAY STATE A TOTAL. Book 1's page said 1,078 under a table summing to
    # 1,102; this page derives every figure from the rows at load.
    # THE POPULATION IS THE PROSE, not the whole file. Stripping only <script> left the inline
    # <style> block, whose `rgba(255,255,255,.14)` reads as a comma-grouped figure - so the
    # check reported a typed total on a page that has none. A check wrong about its population
    # is a check that cries wolf, and this one would have been argued with rather than fixed.
    body = re.sub(r"<script.*?</script>|<style.*?</style>", " ", idx, flags=re.S)
    g["typed_totals"] = sorted(set(re.findall(r"\b\d{1,3},\d{3}\b", body)))

    # ---- the author's book ----
    sys.path.insert(0, PIPELINE)
    from tools import cma_vol as V                                   # noqa: E402
    g["sha_ok"] = V.sha256(2) == V.VOLUMES[2]["sha256"]
    g["sha"] = V.VOLUMES[2]["sha256"][:12]
    terms = 0
    for i in range(1, 19):
        d = json.load(io.open(V.course_json(2, i), encoding="utf-8"))
        terms += len(d["terms"])
    g["terms"] = terms
    g["extractions"] = len([f for f in os.listdir(os.path.join(PIPELINE, "courses", "cma"))
                            if re.fullmatch(r"book2_ch\d\d\.json", f)])

    # ---- the hand-authored tables ----
    from tools import cma_scenes as CS                               # noqa: E402
    g["case_rules"] = sum(len(v) for v in CS.CASE_RULES[2].values())
    g["clozes"] = len(CS.SUMMARY_CLOZE[2])
    g["traps_rows"] = sum(len(v) for v in CS.TRAPS[2].values())
    g["anim_pages"] = sum(len(v) for v in CS.BRIEF_ANIM_BY_CHAPTER[2].values())
    g["buildable"] = len(CS.BUILDABLE[2])

    # ---- the shared renderers ----
    from tools import cma_shell as SH                                # noqa: E402
    g["shared"] = len(SH.SHARED)
    b1 = os.path.join(CMA, "book1", "assets")
    b2 = os.path.join(BOOK2, "assets")
    g["identical"] = sum(1 for f in SH.SHARED
                         if os.path.exists(os.path.join(b2, f))
                         and SH.sha(os.path.join(b1, f)) == SH.sha(os.path.join(b2, f)))

    # ---- the marks and the drawings ----
    from gates import cma_icons as GI                                # noqa: E402
    ic = GI.read_icons()
    g["icon_families"] = len(ic["families"])
    g["icon_registered"] = len(ic["reg"])
    t2 = GI.book_terms(2)
    g["icon_unreg"] = len([t for t in t2 if t not in ic["reg"]])
    g["icon_tier3"] = len([t for t in t2 if ic["reg"].get(t, (3,))[0] == 3])
    from gates import cma_brief as GB                                # noqa: E402
    g["anim_defined"] = len(GB.defined())
    g["anim_owned"] = len(GB.OWNED[2])

    # ---- reachability, measured by walking links from the site root ----
    from tools import cma_landing as LD                              # noqa: E402
    seen = LD.reachability()
    g["reachable"] = len(seen)
    g["b2_chapters_reached"] = len({x.split("/")[2] for x in seen
                                    if x.startswith("cma/book2/") and x.count("/") > 2
                                    and x.split("/")[2].startswith("ch")})
    g["landing"] = "cma/index.html" in seen

    # ---- the gate output saved in evidence/ ----
    def ev(name):
        p = os.path.join(EV, name)
        return io.open(p, encoding="utf-8", errors="replace").read() if os.path.exists(p) else ""

    allg = ev("phase6_all.txt")
    g["gate_results"] = allg.count("RESULT: PASS")
    g["render_checks"] = n(allg, r"(\d+)/\d+ checks pass")
    g["walked_exercises"] = n(allg, r"(\d+) exercises, \d+ exempt")
    b1g = ev("phase6_book1.txt")
    g["book1_pass"] = b1g.count("RESULT: PASS")
    g["book1_render"] = n(b1g, r"(\d+)/\d+ checks pass")
    g["book1_exercises"] = n(b1g, r"(\d+) exercises, \d+ exempt")

    # ---- book 1 changed only where this work meant it to ----
    from gates import cma_shared as GS                               # noqa: E402
    g["b1_unexplained"] = len(GS._git_unexplained("cma/book1"))
    g["b1_touched"] = len(GS._git_modified("cma/book1"))
    return g


def check(g):
    rows = []
    c = g["carry"]

    def A(name, ok, detail=""):
        rows.append((name, bool(ok), detail))

    # ---- A: the shipped artefact agrees with the CARRY ----
    A("A1  files shipped matches the CARRY",
      g["files"] == n(c, r"\*\*(\d[\d,]*)\*\* files"),
      "%d measured, CARRY says %d" % (g["files"], n(c, r"\*\*(\d[\d,]*)\*\* files")))
    A("A2  chapter pages matches the CARRY",
      g["pages"] == n(c, r"\*\*(\d+)\*\* chapter pages"),
      "%d measured, CARRY says %d" % (g["pages"], n(c, r"\*\*(\d+)\*\* chapter pages")))
    A("A3  graded exercises matches the CARRY, and the index rows sum to it",
      g["exercises"] == n(c, r"\*\*(\d[\d,]*)\*\* graded exercises") and g["index_rows"] == 18,
      "%d over %d rows" % (g["exercises"], g["index_rows"]))
    A("A4  the author's drawings matches the CARRY",
      g["figures"] == n(c, r"\*\*(\d+)\*\* drawings"),
      "%d measured, CARRY says %d" % (g["figures"], n(c, r"\*\*(\d+)\*\* drawings")))
    A("A5  bridged term rows matches the CARRY",
      g["terms"] == n(c, r"\*\*(\d+)\*\* term rows"),
      "%d measured, CARRY says %d" % (g["terms"], n(c, r"\*\*(\d+)\*\* term rows")))
    A("A6  all 18 chapters are extracted and the .docx still hashes to what was used",
      g["extractions"] == 18 and g["sha_ok"], "18 extractions, sha %s" % g["sha"])
    A("A7  no total is typed into the contents page",
      not g["typed_totals"],
      "comma-grouped figures outside <script>: %s" % (g["typed_totals"] or "none"))

    # ---- H: the hand-authored tables ----
    A("H1  case rules matches the CARRY",
      g["case_rules"] == n(c, r"\*\*(\d+)\*\* case rules"),
      "%d ids, CARRY says %d" % (g["case_rules"], n(c, r"\*\*(\d+)\*\* case rules")))
    A("H2  one summary cloze per chapter",
      g["clozes"] == 18, "%d of 18" % g["clozes"])
    A("H3  named traps matches the CARRY",
      g["traps_rows"] == n(c, r"\*\*(\d+)\*\* hand-written traps"),
      "%d rows, CARRY says %d" % (g["traps_rows"],
                                  n(c, r"\*\*(\d+)\*\* hand-written traps")))
    A("H4  every chapter of this volume is generated, chapter 1 included",
      g["buildable"] == 18, "%d buildable chapters" % g["buildable"])

    # ---- I: the marks and the drawings ----
    A("I1  every bridged term has a drawn mark and none falls back to type",
      g["icon_unreg"] == 0 and g["icon_tier3"] == 0,
      "%d unregistered, %d tier-3" % (g["icon_unreg"], g["icon_tier3"]))
    A("I2  icon families matches the CARRY",
      g["icon_families"] == n(c, r"\*\*(\d+)\*\* icon families in all"),
      "%d defined" % g["icon_families"])
    A("I3  this volume's own Brief drawings matches the CARRY",
      g["anim_owned"] == n(c, r"\*\*(\d+)\*\* Brief drawings"),
      "%d owned of %d defined" % (g["anim_owned"], g["anim_defined"]))
    A("I4  every page of every chapter names a drawing",
      g["anim_pages"] == n(c, r"\*\*(\d+)\*\* pages name a drawing"),
      "%d pages" % g["anim_pages"])

    # ---- S: the shared renderers ----
    A("S1  every shared renderer is byte-identical to book 1's",
      g["identical"] == g["shared"] == 19,
      "%d of %d identical" % (g["identical"], g["shared"]))
    A("S2  book 1 changed only where this work meant it to",
      g["b1_unexplained"] == 0,
      "%d files touched, %d unexplained lines" % (g["b1_touched"], g["b1_unexplained"]))

    # ---- R: a visitor can reach it ----
    A("R1  the course landing is reachable from the site root",
      g["landing"], "%d pages reachable in all" % g["reachable"])
    A("R2  every chapter of book 2 is reachable by clicking",
      g["b2_chapters_reached"] == 18, "%d of 18" % g["b2_chapters_reached"])
    # ANCHORED. `\*\*(\d+)\*\* pages` also matches "**188** pages name a drawing" earlier in the
    # document, so this compared the reachable count against the Brief-drawing count and the
    # failure it reported was its own.
    A("R3  pages reachable matches the CARRY",
      g["reachable"] == n(c, r"After it: \*\*(\d+)\*\* pages"),
      "%d measured, CARRY says %d"
      % (g["reachable"], n(c, r"After it: \*\*(\d+)\*\* pages")))

    # ---- G: the gates, from their saved output ----
    A("G1  all three browser gates passed on book 2",
      g["gate_results"] == 3, "%d RESULT: PASS in phase6_all.txt" % g["gate_results"])
    A("G2  the render gate's check count matches the CARRY",
      g["render_checks"] == n(c, r"\*\*(\d[\d,]*)/\d[\d,]* checks\*\*"),
      "%d checks" % g["render_checks"])
    A("G3  the browser walk reached the same exercise count as the index",
      g["walked_exercises"] == g["exercises"],
      "walk %d, index %d" % (g["walked_exercises"], g["exercises"]))
    A("G4  book 1 still passes all three of its browser gates",
      g["book1_pass"] == 3 and g["book1_exercises"] == 1102,
      "%d PASS, %d exercises, render %d" % (g["book1_pass"], g["book1_exercises"],
                                            g["book1_render"]))
    return rows


def teeth():
    base = measure()
    clean = {k: ok for k, ok, _d in check(base)}
    plants = [
        ("A1", lambda x: x.update(files=1)),
        ("A2", lambda x: x.update(pages=1)),
        # A3 asserts two things: the total agrees with the CARRY, and the index carries a row
        # for all eighteen chapters. Planting the TOTAL breaks G3 as well, because G3 compares
        # the browser walk against that same total - an honest coupling, not a defect, so the
        # plant moves A3's other condition instead.
        ("A3", lambda x: x.update(index_rows=17)),
        ("A4", lambda x: x.update(figures=1)),
        ("A5", lambda x: x.update(terms=1)),
        ("A6", lambda x: x.update(sha_ok=False)),
        ("A7", lambda x: x.update(typed_totals=["1,078"])),
        ("H1", lambda x: x.update(case_rules=1)),
        ("H2", lambda x: x.update(clozes=17)),
        ("H3", lambda x: x.update(traps_rows=1)),
        ("H4", lambda x: x.update(buildable=17)),
        ("I1", lambda x: x.update(icon_tier3=1)),
        ("I2", lambda x: x.update(icon_families=1)),
        ("I3", lambda x: x.update(anim_owned=1)),
        ("I4", lambda x: x.update(anim_pages=1)),
        ("S1", lambda x: x.update(identical=18)),
        ("S2", lambda x: x.update(b1_unexplained=3)),
        ("R1", lambda x: x.update(landing=False)),
        ("R2", lambda x: x.update(b2_chapters_reached=1)),
        ("R3", lambda x: x.update(reachable=1)),
        ("G1", lambda x: x.update(gate_results=2)),
        ("G2", lambda x: x.update(render_checks=1)),
        ("G3", lambda x: x.update(walked_exercises=1)),
        ("G4", lambda x: x.update(book1_pass=2)),
    ]
    out = []
    for tag, plant in plants:
        d = dict(base)
        plant(d)
        rows = {k: ok for k, ok, _x in check(d)}
        broke = sorted(k for k in rows if clean.get(k, True) and not rows[k])
        mine = [k for k in broke if k.startswith(tag + " ")]
        out.append((tag, len(broke) == 1 and len(mine) == 1,
                    "broke: %s" % (", ".join(k.split()[0] for k in broke) or "nothing")))
    return out


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    g = measure()
    rows = check(g)
    print("=== CMA PART 1 BOOK 2, AS DELIVERED ===")
    for name, ok, detail in rows:
        print("  %-4s %-62s %s" % ("PASS" if ok else "FAIL", name, detail[:66]))
    bad = [r for r in rows if not r[1]]
    print()
    print("  %d/%d checks pass" % (len(rows) - len(bad), len(rows)))
    ok = not bad

    if "--teeth" in sys.argv:
        print()
        print("=== TEETH (each planted defect must break exactly its own check) ===")
        t = teeth()
        for tag, good, detail in t:
            print("  %-4s %-6s %s" % ("PASS" if good else "FAIL", tag, detail))
        print("  %d/%d checks have a tooth that bites" % (sum(1 for _t, b, _d in t if b), len(t)))
        ok = ok and all(b for _t, b, _d in t)

    print()
    print("RESULT: %s" % ("PASS" if ok else "FAIL"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
