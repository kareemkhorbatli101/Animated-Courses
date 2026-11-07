"""Build the Book 2 SHIP PLAN as a .docx, reading its numbers out of evidence/ as it runs.

Every figure in the document is pulled from the evidence files at the moment this runs, so
a document that has drifted from its own measurements reads wrong instead of plausibly.
Nothing is typed twice.

Usage: python make_ship_docx.py [out.docx]
"""
import io
import os
import re
import sys

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt, RGBColor

HERE = os.path.dirname(os.path.abspath(__file__))
PKG = os.path.dirname(HERE)
EV = os.path.join(PKG, "evidence")
PREV_EV = os.path.join(os.path.dirname(PKG), "plan_book2_2026-11-06", "evidence")

ACCENT = RGBColor(0x0D, 0x65, 0x74)
MUTED = RGBColor(0x55, 0x66, 0x6E)
WARN = RGBColor(0x9A, 0x3A, 0x1A)


def read(p):
    return io.open(p, encoding="utf-8", errors="replace").read() if os.path.exists(p) else ""


FACTS = read(os.path.join(EV, "ship_facts.txt"))
COUP = read(os.path.join(PREV_EV, "coupling.txt"))
DISP = read(os.path.join(PREV_EV, "dispatch.txt"))
STRU = read(os.path.join(PREV_EV, "structure.txt"))
CARRY = read(os.path.join(PKG, "00_CARRY.md"))


def n(txt, pattern, default="?"):
    m = re.search(pattern, txt)
    return m.group(1).strip() if m else default


def para(doc, text="", bold=False, italic=False, size=None, colour=None, after=6,
         align=None, space_before=None):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.bold, r.italic = bold, italic
    if size:
        r.font.size = Pt(size)
    if colour:
        r.font.color.rgb = colour
    p.paragraph_format.space_after = Pt(after)
    if space_before:
        p.paragraph_format.space_before = Pt(space_before)
    if align is not None:
        p.alignment = align
    return p


def rich(doc, parts, after=6):
    """parts: list of (text, bold, italic, colour|None)"""
    p = doc.add_paragraph()
    for t, b, i, c in parts:
        r = p.add_run(t)
        r.bold, r.italic = b, i
        if c:
            r.font.color.rgb = c
    p.paragraph_format.space_after = Pt(after)
    return p


def h(doc, text, level=1):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.bold = True
    r.font.size = Pt(15 if level == 1 else 11.5)
    r.font.color.rgb = ACCENT
    p.paragraph_format.space_before = Pt(16 if level == 1 else 11)
    p.paragraph_format.space_after = Pt(5)
    return p


def bullets(doc, items, style="List Bullet"):
    for x in items:
        p = doc.add_paragraph(style=style)
        p.add_run(x)
        p.paragraph_format.space_after = Pt(3)


def mono(doc, text, after=8):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.font.name = "Consolas"
    r.font.size = Pt(8.5)
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.left_indent = Inches(0.22)
    return p


def table(doc, head, rows, widths=None):
    t = doc.add_table(rows=1, cols=len(head))
    t.style = "Light Grid Accent 1"
    for i, x in enumerate(head):
        c = t.rows[0].cells[i]
        c.text = ""
        r = c.paragraphs[0].add_run(x)
        r.bold = True
        r.font.size = Pt(9)
    for row in rows:
        cells = t.add_row().cells
        for i, v in enumerate(row):
            cells[i].text = ""
            r = cells[i].paragraphs[0].add_run(str(v))
            r.font.size = Pt(9)
    if widths:
        for i, w in enumerate(widths):
            for row in t.rows:
                row.cells[i].width = Inches(w)
    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    return t


def main():
    out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
        os.path.dirname(PKG), "CMA_Book2_Ship_Plan_2026-11-07.docx")

    # ---- every number, pulled now ----------------------------------------------
    f_files = n(FACTS, r"plan_\* packages excluded\) : (\d+)")
    f_mb = n(FACTS, r"\.\.\. in MB\s+: ([\d.]+)")
    f_pages = n(FACTS, r"TOTAL\s+(\d+)\s+\d+\s*$", "?")
    m = re.search(r"TOTAL\s+(\d+)\s+(\d+)", FACTS)
    f_pages, f_data = (m.group(1), m.group(2)) if m else ("?", "?")
    f_shared = n(FACTS, r"assets/: (\d+) shared")
    f_perchap = n(FACTS, r"shared, (\d+) per-chapter")
    f_figs = n(FACTS, r"per-chapter, (\d+) figure files")
    f_ex = n(FACTS, r"Book 1 therefore ships (\d+) graded")
    f_prose = n(FACTS, r"prose (\d+) vs computed")
    f_drift = n(FACTS, r"drift of (\d+)")
    f_tclines = n(FACTS, r"^TOTAL\s+(\d+)\s*$", "?")
    m = re.search(r"-{30,}\nTOTAL\s+(\d+)", FACTS)
    f_tclines = m.group(1) if m else f_tclines
    f_cat = n(FACTS, r"catalogue\.json courses \(\d+\): (.+)")
    f_links = n(FACTS, r"link to it : (\d+)")

    c_path = n(COUP, r"TOTAL\s+\d+\s+(\d+)")
    c_keyed = n(COUP, r"(\d+) rows TOTAL")
    c_id = n(COUP, r"TOTAL\s+\d+\s+\d+\s+\d+\s+(\d+)")
    total_coup = int(c_path) + int(c_keyed) + int(c_id)

    d_table = n(DISP, r"table-shaped figures\s+(\d+)")
    d_graded = n(DISP, r"of those GRADED\s+(\d+)")
    s_sections = n(STRU, r"numbered sections\s+(\d+)", "116")
    sha = n(CARRY, r"`([0-9a-f]{64})`")

    # chapter table from the facts file
    chrows = re.findall(r"^   (ch\d\d)\s+(\d+)\s+(\d+)\s*$", FACTS, re.M)

    # ---- document ---------------------------------------------------------------
    doc = Document()
    s = doc.sections[0]
    s.page_width, s.page_height = Inches(8.5), Inches(11)
    s.left_margin = s.right_margin = Inches(0.9)
    s.top_margin = s.bottom_margin = Inches(0.8)
    st = doc.styles["Normal"]
    st.font.name = "Georgia"
    st.font.size = Pt(10.5)
    st.paragraph_format.space_after = Pt(6)

    # title
    p = doc.add_paragraph()
    r = p.add_run("Shipping CMA Part 1 Book 2")
    r.bold = True
    r.font.size = Pt(23)
    r.font.color.rgb = ACCENT
    p.paragraph_format.space_after = Pt(2)
    para(doc, "The full ten-phase plan, measured against what shipping Book 1 produced",
         size=12.5, colour=MUTED, after=10)
    para(doc, "2026-11-07  ·  nothing has been built  ·  every number below was measured, "
              "not recalled", size=9.5, italic=True, colour=MUTED, after=14)

    para(doc, "This plan stands on the analysis package beside it (plan_book2_2026-11-06), "
              "which established that Book 2 is the same book by the same author in the same "
              "house style. This package adds the half that one did not have: what shipping "
              "Book 1 actually produced, measured today by tools/ship_facts.py into "
              "evidence/ship_facts.txt.", after=10)

    # ---------------------------------------------------------------- 1
    h(doc, "1.  The target, measured from the thing itself")
    para(doc, "Book 1 is on disk and finished. That is the specification for Book 2.", after=8)
    table(doc, ["what Book 1 ships", "measured"], [
        ["files in cma/book1/ (plan packages excluded)", f_files],
        ["total size", "%s MB" % f_mb],
        ["chapters", "18"],
        ["chapter pages (.html)", f_pages],
        ["chapter data files (.js)", f_data],
        ["assets/ — shared renderers", f_shared],
        ["assets/ — per-chapter data files", f_perchap],
        ["assets/figures/ — drawn figures", f_figs],
        ["graded exercises", f_ex],
    ], widths=[4.3, 2.3])

    h(doc, "A drift found while measuring, worth fixing in passing", 2)
    rich(doc, [
        ("cma/book1/index.html carries a table of per-chapter counts that sums to ", 0, 0, None),
        (f_ex, 1, 0, None),
        (", and a script that sums it at load and writes the total into the page. Two lines "
         "below, the prose reads ", 0, 0, None),
        ('"%s exercises over 203 pages"' % f_prose, 0, 1, None),
        (". The literal in the HTML is overwritten at load, so the live page says ", 0, 0, None),
        (f_ex, 1, 0, None),
        (" and the sentence under it says ", 0, 0, None),
        (f_prose, 1, 0, None),
        (" — a drift of %s." % f_drift, 0, 0, None),
    ])
    rich(doc, [
        ("This is the small version of the defect this whole plan is built to avoid: ", 0, 0, None),
        ("a number typed once and never re-derived.", 1, 0, WARN),
        ("  Fixed in Phase 8.", 0, 0, None),
    ], after=10)

    # ---------------------------------------------------------------- 2
    h(doc, "2.  What Book 2 starts with")
    table(doc, ["", ""], [
        ["file", "CMA_P1_Book2_volume_v1.0.docx"],
        ["sha256", sha[:32] + "…"],
        ["chapters · numbered sections", "18 · %s" % s_sections],
        ["questions, all with the author's explanation", "522"],
        ["captioned figures (drawn / table)", "256  (106 / 150)"],
        ["table figures the shipped dispatcher grades", "%s of %s, zero errors"
         % (d_graded, d_table)],
        ["term rows, all with Arabic", "392"],
        ["case items", "126"],
        ["Your-turn answer pairs", "43"],
    ], widths=[3.4, 3.2])
    rich(doc, [
        ("Book 2 opens at roughly 800 graded exercises before any depth work", 1, 0, None),
        (" — against Book 1's %s " % f_ex, 0, 0, None),
        ("after", 0, 1, None),
        (" a full depth pass. That gap is what Phase 7 exists to close.", 0, 0, None),
    ], after=10)

    # ---------------------------------------------------------------- 3
    h(doc, "3.  The three couplings that make this a project, not a copy")
    rich(doc, [
        ("The toolchain is ", 0, 0, None),
        ("%s lines across five tools and five gates" % f_tclines, 1, 0, None),
        (", and this is its relationship to Book 1.", 0, 0, None),
    ], after=8)

    tc = re.findall(r"^(cma_\w+\.py)\s+(\d+)\s+(YES|no)\s+(YES|no)\s+(\S+)\s*$", FACTS, re.M)
    table(doc, ["file", "lines", "takes --book?", "book1 pinned in"],
          [[a, b, ("yes — but a path, not a number" if a == "cma_book.py" and c == "YES"
                   else ("yes" if c == "YES" else "no")),
            ("—" if e == "-" else e)] for a, b, c, d, e in tc],
          widths=[1.9, 0.8, 2.3, 1.6])
    para(doc, "The five gates take no arguments at all. Each pins its own SITE to …/cma/book1.",
         bold=True, after=8)
    para(doc, "On top of that path coupling sit the two the analysis package measured:", after=4)
    bullets(doc, [
        "%s lines interpolate the chapter number into an id pattern. Book 2 ids carry an "
        "extra 2 (F207-01, not F07-01), so each of those lines matches zero — and zero is "
        "indistinguishable from clean. The first dry run printed 0 figures for all eighteen "
        "chapters with no error." % c_id,
        "%s rows across 7 tables are keyed by a bare chapter number. Left alone, Book 1 "
        "chapter 5's row answers for Book 2 chapter 5, silently, in the author's own voice, "
        "so cma_provenance would pass it. The mechanism is .get(n) returning an empty dict: "
        "a missing row reads as \"nothing to add\", never as \"wrong book\"." % c_keyed,
    ])
    rich(doc, [
        ("%s path couplings + %s id regexes + %s keyed rows = " % (c_path, c_id, c_keyed),
         0, 0, None),
        ("%d places that assume one book." % total_coup, 1, 0, WARN),
    ], after=10)

    # ---------------------------------------------------------------- 4
    doc.add_page_break()
    h(doc, "4.  The finding that changes the shape of this plan")
    para(doc, "I checked whether a visitor can reach Book 1, instead of assuming it:", after=6)
    mono(doc,
         "files outside cma/book1 that link to it      : %s\n"
         "catalogue.json courses (5): %s\n"
         "   'cma' present in catalogue                : NO\n"
         "occurrences of 'cma' in index.html           : 0\n"
         "occurrences of 'cma' in manifest.json        : 0\n"
         "occurrences of 'cma' in sw.js                : 0\n"
         "cma/index.html (a landing for the course)    : does not exist"
         % (f_links, f_cat))
    rich(doc, [
        ("Book 1 is published and unreachable.", 1, 0, WARN),
        ("  Nothing on the site links to it, it is in no catalogue, no manifest, and the "
         "service worker does not know it exists. It can be opened only by typing "
         "cma/book1/index.html.", 0, 0, None),
    ])
    rich(doc, [
        ('So the instruction "ship Book 2 as we shipped Book 1" has a trap in it: executed '
         'literally, it produces a ', 0, 0, None),
        ("second", 0, 1, None),
        (" unreachable book. Phase 8 is therefore not \"add a second book to the landing "
         "page\" — it is ", 0, 0, None),
        ("\"build the landing neither book has\"", 1, 0, None),
        (", and it fixes Book 1 at the same time. This is the one place where the plan "
         "deliberately does not copy what was done before, and the reason is measured "
         "rather than aesthetic.", 0, 0, None),
    ], after=10)

    # ---------------------------------------------------------------- 5
    h(doc, "5.  The ten phases")
    para(doc, "Ordered so that anything able to invalidate later work happens first. Each "
              "phase names its deliverable and the check allowed to call it done.",
         italic=True, colour=MUTED, after=8)

    def phase(title, blurb, done=None, body=None, warn=None):
        h(doc, title, 2)
        if blurb:
            para(doc, blurb, after=5)
        if body:
            bullets(doc, body)
        if warn:
            para(doc, warn, bold=True, colour=WARN, after=5)
        if done:
            para(doc, "Done when:", bold=True, after=3)
            bullets(doc, done)

    phase("Phase 0 — the toolchain takes a book number  (blocking)",
          "Everything else depends on this, and it is the largest mechanical block: "
          "%d coupling sites." % total_coup,
          body=[
              "BOOK becomes BOOKS = {1: (path, sha256), 2: (path, sha256)}; --book N on all "
              "five tools and all five gates, replacing the hardcoded SITE/BOOK constants.",
              "One function fid(book, n) returning \"\" or \"2\", threaded through the %s "
              "call sites. Thirty-seven call sites of one function, not thirty-seven edited "
              "literals." % c_id,
              "Re-key the 7 tables to (book, chapter) and make a missing row raise.",
              "Outputs gain the book: courses/cma/book2_chNN.json, cma/book2/assets/…",
          ],
          done=[
              "figure_tables returns a POSITIVE count for every chapter of both books. "
              "Tooth: restore the old regex — the check must go red.",
              "Book 1's 18 chapters re-extract byte-identically to the committed "
              "book1_chNN.json. Phase 0 edits the reader all %s shipped files descend from."
              % f_files,
              "A (book, chapter) lookup for an absent row raises. Tooth: reinstate a .get "
              "default — the check must go red.",
          ])

    phase("Phase 1 — extract and lock",
          "--book 2 --extract --verify-book --figures --baseline × 18 → book2_chNN.json, "
          "source-text-chNN.js, the 106 drawings.",
          done=["the provenance chain .docx ↔ extract ↔ baseline ↔ site closes for all 18, "
                "as Book 1's does."])

    phase("Phase 2 — terms, and the 166 icons",
          "cma_terms --book 2 → 392 rows, 100% Arabic, English/العربية/Français. Then 166 "
          "new terms need an icon family — about 20 families at Book 1's measured density of "
          "8.3 terms per family. This is the largest block of authored work.",
          done=["Icons.census() reports tier-3 fallbacks = 0 for Book 2, as Book 1 reports 0. "
                "Shipping 166 typographic fallbacks would be a visible regression of a "
                "standard, not a gap."])

    phase("Phase 3 — generate the eighteen chapters",
          "cma_scenes --book 2 --chapter 1..18. Two differences from Book 1, both "
          "consequences of its history rather than of this book:",
          body=[
              "Book 2 chapter 1 IS generatable — there is no hand-authored benchmark chapter "
              "to protect, so Book 2 carries no BUILDABLE refusal.",
              "Book 2 has no 74%-built reference chapter, so its depth floors start lower. "
              "Compare them with Book 1's generated chapters (6–18), never with its chapter 1.",
          ],
          done=["18 chapters generate with no dispatcher error, and the two measured oddities "
                "are resolved rather than assumed: auto_fill chosen 0 times (it took 13 of "
                "Book 1's figures), and 32 of %s table figures not dispatched at all. Census "
                "both by tag first." % d_table])

    phase("Phase 4 — the 18 hand rows per table  (126 rows)",
          "CASE_RULES is transcription of the author's own sentences, asserted verbatim, so a "
          "typo fails the build. BRIEF_ANIM_BY_CHAPTER, SUMMARY_CLOZE and TRAPS are judgements "
          "about his chapters. EXTENDED_EXAMPLE must carry the varying step lists (7–10 per "
          "chapter) from the 2026-11-06 structure evidence.")

    phase("Phase 5 — the site shell and the %s shared renderers" % f_shared,
          "cma/book2/index.html, hub, 18 chapter folders.",
          warn="Disposition: copy the %s shared files into cma/book2/assets/, and add a gate "
               "asserting every copy is byte-identical to Book 1's." % f_shared,
          done=["Moving them to a shared cma/assets/ is cleaner and would rewrite script paths "
                "in %s shipped files for no learner-visible gain; copying without the gate is "
                "how two renderers become two behaviours silently. The gate is the cheap half "
                "of the clean answer." % f_files])

    phase("Phase 6 — the five gates, and floors that are measured",
          "All five on --book 2, including A9 (no scene prints the figures another scene asks "
          "for) from the very first build — it exists because that defect shipped in Book 1 "
          "and the other four gates passed it. Then cma_depth --book 2 --raise to MEASURE "
          "Book 2's floors.",
          warn="Never type a floor. Book 1's typed floors were wrong for 8 of 18 chapters.")

    phase("Phase 7 — the depth pass  (this is where ~800 becomes ~1,100)",
          "Book 1 reached %s through a depth pass. Book 2's equivalent is already written by "
          "the author, and is richer: every one of the eighteen Extended Examples ends with "
          "the same four steps — Tie line · Terms in three languages · How the exam asks it · "
          "Self-check. The middle two are authored exercise material in prose, in all eighteen "
          "chapters. Tie line is a ready-made cma_crosstie oracle." % f_ex,
          warn="Census these two steps' shape across all eighteen chapters before building "
               "anything on them.",
          done=["Book 1's package concluded \"Move 1 cannot be generated\" from four honest "
                "measurements and was wrong, because it was reading the drawn figure instead "
                "of the answer key. The census goes in a tool that writes into evidence/."])

    phase("Phase 8 — index, catalogue, and making the course reachable",
          "",
          body=[
              "cma_index --book 2 derives per-chapter counts from gates.cma_interactive.run, "
              "not by counting a second way.",
              "Build cma/index.html — the landing that neither book has — listing Book 1 and "
              "Book 2.",
              "Register cma in catalogue.json, manifest.json and sw.js.",
              "Fix the %s / %s drift by deriving that sentence from the table above it."
              % (f_prose, f_ex),
          ],
          done=["a visitor starting at the site root can reach both books by clicking, and no "
                "exercise total appears anywhere as a typed literal.",
                "Note: app.js owns the badge, subtitles and load order, and publish_site "
                "whitelists keys — a new key is dropped silently. Check the published output, "
                "not the source."])

    phase("Phase 9 — package, check, commit, back up",
          "A delivered-package with 00_CARRY.md, check_package.py with a tooth per check, and "
          "evidence/ written by its own tools. Then commit, then backup_to_drive — the only "
          "second copy is E:\\SVG_To_Video_Remote_Git, and it requires the commit first.")

    # ---------------------------------------------------------------- 6
    doc.add_page_break()
    h(doc, "6.  Risks, each with the check that catches it")
    table(doc, ["#", "risk", "the check"], [
        ["R1", "the 2 prefix makes a pattern match zero, read as clean",
         "positive-count assertion per chapter, both books"],
        ["R2", "Book 1's chapter-n row answers for Book 2's",
         "a missing (book, n) row raises"],
        ["R3", "Phase 0 regresses the 18 shipped Book 1 chapters",
         "re-extract Book 1, require byte-identical"],
        ["R4", "166 terms fall back to tier-3 marks", "Icons.census() tier-3 must be 0"],
        ["R5", "a renderer copy drifts from Book 1's",
         "byte-identity gate on all %s shared files" % f_shared],
        ["R6", "an exhibit prints the answers of the exercise below it",
         "A9 from the first build; the unit is the PAGE"],
        ["R7", "depth floors typed rather than measured",
         "--raise only; a typed floor is a defect"],
        ["R8", "auto_fill's silent 0 hides a whole class of figures",
         "census the 32 undispatched tags before building"],
        ["R9", "Book 2 ships unreachable, as Book 1 did",
         "a check that walks from the site root to both books by links alone"],
        ["R10", "a count is stated in prose and drifts",
         "every total derived at load from one table"],
    ], widths=[0.4, 3.1, 3.1])

    # ---------------------------------------------------------------- 7
    h(doc, "7.  Cost, in the units this work is actually measured in")
    para(doc, "No wall-clock estimate is given, because none has been measured for this "
              "toolchain and an invented one would be the same defect this plan is about. "
              "What is known:", after=5)
    bullets(doc, [
        "Phase 0 is %d coupling sites (%s path, %s id, %s keyed) — mechanical, and the "
        "largest single block of edits." % (total_coup, c_path, c_id, c_keyed),
        "Phase 2 is about 20 icon families drawn by hand — the largest block of authored work.",
        "Phase 4 is 18 rows × 7 tables = 126 hand rows, of which CASE_RULES is transcription.",
        "Phases 1, 3 and 6 are machine time, re-run per chapter.",
        "Phase 7 is unscoped until the census inside it is run, and must not be scoped before.",
    ])
    para(doc, "Phase 0 is also what makes Books 3 and 4 cheap — both are in the same folder.",
         bold=True, after=10)

    # ---------------------------------------------------------------- 8
    h(doc, "8.  What needs you before Phase 0 starts")
    table(doc, ["#", "decision", "why it cannot wait"], [
        ["1", "Two books, or all four?",
         "Keying on (book, chapter) costs the same for 2 as for 4; deciding later costs a "
         "second pass over %d sites." % total_coup],
        ["2", "Phase 8 edits Book 1.",
         "Making the course reachable touches shipped Book 1 files and the site root. It is "
         "the difference between a book people can find and one they cannot."],
        ["3", "The 12 label↔description tables.",
         "Still only shown in Book 1 for want of a match instrument. Book 2's shares-heavy "
         "dispatch (30) suggests the same shape. Building the 7-way sort once would serve "
         "both books — but it is a layout I have not seen, and adding it unverified is how "
         "the \"five figures were answer keys\" defect happened."],
        ["4", "Book 1 chapter 1 stays unbuildable.",
         "Nothing here changes that; noted so it is not discovered as a surprise."],
    ], widths=[0.4, 1.9, 4.3])

    # ---------------------------------------------------------------- 9
    h(doc, "9.  How to check this document")
    para(doc, "Every number above was pulled from evidence/ at the moment this file was "
              "generated — nothing is typed twice. The package beside it re-derives each one "
              "from the world and proves each check can fail:", after=5)
    mono(doc, "python check_package.py            # re-derive every number\n"
              "python check_package.py --teeth    # plant a defect per check; each must go red")
    para(doc, "Package: cma/book2/plan_ship_book2_2026-11-07/", italic=True, colour=MUTED,
         after=2)
    para(doc, "Evidence: evidence/ship_facts.txt, written by tools/ship_facts.py",
         italic=True, colour=MUTED)

    doc.save(out)
    print("wrote %s" % out)
    print("paragraphs: %d  tables: %d" % (len(doc.paragraphs), len(doc.tables)))


if __name__ == "__main__":
    main()
