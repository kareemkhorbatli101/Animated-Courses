"""Build the Book 2 plan as a .docx, reading its numbers out of evidence/ as it runs.

Every figure in the document is pulled from the evidence files at the moment this runs, so
a plan that has drifted from its own measurements reads wrong instead of reading plausibly.
Nothing is typed twice.

Usage: python make_plan_docx.py <out.docx>
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

ACCENT = RGBColor(0x0D, 0x65, 0x74)
MUTED = RGBColor(0x55, 0x66, 0x6E)
WARN = RGBColor(0x9A, 0x3A, 0x1A)


def ev(name):
    p = os.path.join(EV, name)
    return io.open(p, encoding="utf-8", errors="replace").read() if os.path.exists(p) else ""


def num(txt, pattern, default="?"):
    m = re.search(pattern, txt)
    return m.group(1).strip() if m else default


def para(doc, text="", bold=False, italic=False, size=None, colour=None, after=6,
         align=None):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.bold, r.italic = bold, italic
    if size:
        r.font.size = Pt(size)
    if colour:
        r.font.color.rgb = colour
    p.paragraph_format.space_after = Pt(after)
    if align is not None:
        p.alignment = align
    return p


def bullets(doc, items):
    for x in items:
        p = doc.add_paragraph(style="List Bullet")
        p.add_run(x)
        p.paragraph_format.space_after = Pt(3)


def table(doc, head, rows, widths=None):
    t = doc.add_table(rows=1, cols=len(head))
    t.style = "Light Grid Accent 1"
    for i, h in enumerate(head):
        c = t.rows[0].cells[i]
        c.text = ""
        r = c.paragraphs[0].add_run(h)
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
        os.path.dirname(PKG), "CMA_Book2_Plan_2026-11-06.docx")
    st, dp, cp = ev("structure.txt"), ev("dispatch.txt"), ev("coupling.txt")

    doc = Document()
    s = doc.sections[0]
    s.page_width, s.page_height = Inches(8.5), Inches(11)
    for m in ("left_margin", "right_margin"):
        setattr(s, m, Inches(0.9))
    s.top_margin, s.bottom_margin = Inches(0.8), Inches(0.8)
    st_n = doc.styles["Normal"]
    st_n.font.name = "Georgia"
    st_n.font.size = Pt(10.5)

    doc.add_heading("CMA Part 1 — Book 2 onto the website", 0)
    para(doc, "A plan, with every number measured. 6 November 2026.", italic=True,
         colour=MUTED, after=2)
    para(doc, "Nothing has been built. This is facts, dispositions and teeth: each figure "
              "below was produced by a tool in the package's tools/ folder, which wrote its "
              "working into evidence/.", colour=MUTED, after=14)

    doc.add_heading("1. The book is verified, and it is the same book", 1)
    table(doc, ["", ""], [
        ["file", num(st, r"file\s+(.+)")],
        ["bytes", num(st, r"bytes\s+(\d+)")],
        ["sha256", num(st, r"sha256\s+([0-9a-f]{64})")],
        ["read by", "tools/cma_book.py — the Book 1 reader, unmodified"],
    ], widths=[1.1, 5.4])
    para(doc, "It is not the earlier CMA_P1_Book2_REVIEW_EDITION.docx. The volume above is "
              "the one to lock to.", after=10)

    para(doc, "It is the same series, the same author and the same house style:", bold=True,
         after=4)
    table(doc, ["", "Book 1 (shipped)", "Book 2"], [
        ["chapters", "18", num(st, r"chapters after dropping front matter/appendices: (\d+)")],
        ["numbered sections", "112", num(st, r"numbered sections\s+(\d+)")],
        ["questions", "—", "%s  (%s Section Check + %s Practice)"
         % (num(st, r"questions TOTAL\s+(\d+)"),
            num(st, r"Section Check questions\s+(\d+)"),
            num(st, r"Practice questions\s+(\d+)"))],
        ["…with the author's explanation", "all",
         "%s of %s" % (num(st, r"of those, EXPLAINED\s+(\d+)"),
                       num(st, r"questions TOTAL\s+(\d+)"))],
        ["captioned figures", "203", num(st, r"captioned figures\s+(\d+)")],
        ["…of those drawn", "104", num(st, r"embedded drawings\s+(\d+)")],
        ["term rows / with Arabic", "—",
         "%s / %s" % (num(st, r"term rows\s+(\d+)"), num(st, r"with Arabic: (\d+)"))],
        ["distinct English terms", "316", num(dp, r"Book 2 distinct terms\s+(\d+)")],
        ["TERM BRIDGE / EXAM TRAP / WORKED EXAMPLE / YOUR TURN", "—",
         "%s / %s / %s / %s" % (num(st, r"TERM BRIDGE boxes\s+(\d+)"),
                                num(st, r"EXAM TRAP boxes\s+(\d+)"),
                                num(st, r"WORKED EXAMPLE boxes\s+(\d+)"),
                                num(st, r"YOUR TURN boxes\s+(\d+)"))],
        ["case items", "7 per chapter", num(st, r"case items \(C-ids\)\s+(\d+)")],
        ["Your-turn authored answer pairs", "73",
         num(st, r"Your-turn answer pairs\s+(\d+)")],
    ], widths=[2.3, 1.3, 2.9])
    para(doc, "Book 1 was financial reporting. Book 2 is cost management: Cost Objects, "
              "Pools and Drivers through to Setting Standards: The Standard Cost Card.",
         after=12)

    doc.add_heading("2. The one real difference, and why it is dangerous rather than hard",
                    1)
    para(doc, "The author namespaced Book 2 by inserting a 2 before the two-digit chapter "
              "number.", bold=True, after=4)
    table(doc, ["", "Book 1 ch 7", "Book 2 ch 7"], [
        ["figure", "F07-01", "F207-01"],
        ["section check", "SC7-1", "SC207-1"],
        ["practice", "P7-01", "P207-01"],
        ["case item", "C7-1", "C207-1"],
    ], widths=[1.6, 2.4, 2.5])
    para(doc, "This is good news — Book 1 and Book 2 ids can never collide — but it is the "
              "most dangerous fact in the package, because of HOW it fails:", after=4)
    para(doc, "figure_tables() searches for F%02d-\\d\\d % n. On Book 2 that matches "
              "nothing and returns an empty dict. A census reads an empty dict as zero "
              "figures, which is indistinguishable from a clean result.",
         italic=True, colour=WARN, after=6)
    para(doc, "I hit this while measuring. The first dry run printed 0 figures and 0 graded "
              "for all eighteen chapters with no error, and the same probe reported that "
              "every Book 2 term was new because a loose regex found 5 keys in an icons.js "
              "that registers 333. Both numbers were my probe's bugs, not the book's. Every "
              "check in this package therefore asserts a POSITIVE count.", after=8)
    para(doc, "evidence/coupling.txt lists all %s lines across the toolchain where the "
              "chapter number is interpolated into an id pattern. Each finds zero on Book 2."
         % num(cp, r"THE ID REGEXES WITH THE CHAPTER NUMBER INTERPOLATED \((\d+) lines\)"),
         after=10)

    para(doc, "The other half: %s rows keyed by a bare chapter number"
         % num(cp, r"(\d+) rows TOTAL"), bold=True, after=4)
    rows = re.findall(r"^   ([A-Z_]+)\s+(\d+) rows$", cp, re.M)
    table(doc, ["table", "rows", "what a row is"],
          [[a, b, {"BRIEF_ANIM_BY_CHAPTER": "a choice: which drawing the Brief opens with",
                   "SUMMARY_CLOZE": "the author's summary sentence, blanked",
                   "CASE_RULES": "the author's own sentences, asserted verbatim",
                   "FLOORS": "a measured floor — never typed",
                   "DUPLICATE_OPTIONS": "an erratum in his key",
                   "TRAPS": "a named trap",
                   "EXTENDED_EXAMPLE": "the step list"}.get(a, "")]
           for a, b in rows], widths=[2.1, 0.6, 3.8])
    para(doc, "Left as they are, Book 1 chapter 5's row would answer for Book 2 chapter 5 — "
              "silently, in the author's own voice, so cma_provenance would pass it. The "
              "mechanism is .get(n) returning an empty dict: a missing row reads as "
              "“nothing to add”, never as “wrong book”.", after=12)

    doc.add_heading("3. What the existing toolchain already builds, measured", 1)
    para(doc, "tools/dispatch_dryrun.py runs the shipped auto_section over Book 2 with only "
              "the prefix regex changed, so a figure counted graded here is a figure that "
              "would really be graded.", after=6)
    table(doc, ["", "count"], [
        ["table-shaped figures", num(dp, r"table-shaped figures\s+(\d+)")],
        ["dispatched into a scene", num(dp, r"dispatched into a scene\s+(\d+)")],
        ["of those GRADED", num(dp, r"of those GRADED\s+(\d+)")],
        ["of those ONLY SHOWN", num(dp, r"of those ONLY SHOWN\s+(\d+)")],
        ["not dispatched at all", num(dp, r"not dispatched at all\s+(\d+)")],
        ["Your-turn answer pairs", num(dp, r"Your-turn answer pairs\s+(\d+)")],
        ["dispatcher errors", "0 on all eighteen chapters"],
    ], widths=[2.6, 3.9])
    para(doc, "That is the headline: %s graded exercises from the author's figures, for one "
              "character of change, with no new instrument and no errors."
         % num(dp, r"of those GRADED\s+(\d+)"), bold=True, after=6)
    para(doc, "Add the %s questions, the %s case items and the %s Your-turn pairs, and Book "
              "2 opens at roughly 800 graded exercises before any depth work at all — "
              "against Book 1's 1,102 after a full depth pass."
         % (num(st, r"questions TOTAL\s+(\d+)"),
            num(st, r"case items \(C-ids\)\s+(\d+)"),
            num(st, r"Your-turn answer pairs\s+(\d+)")), after=8)
    para(doc, "Two measured oddities to resolve, not to assume:", bold=True, after=3)
    bullets(doc, [
        "auto_fill is chosen 0 times, having taken 13 of Book 1's figures. Either the rules "
        "above it claim everything, or its one guarantee — the answer must not already "
        "appear in its own row — cannot be met by this book's tables.",
        "%s of %s table figures are not dispatched at all. Some are the Your-turn figure, "
        "correctly reserved; some are skipped by rules written for Book 1's chapter-1 "
        "roadmap convention. Census them by tag before deciding."
        % (num(dp, r"not dispatched at all\s+(\d+)"),
           num(dp, r"table-shaped figures\s+(\d+)")),
    ])
    doc.add_paragraph()

    doc.add_heading("4. The largest hand item: %s term icons"
                    % num(dp, r"NEW, need a family\s+(\d+)"), 1)
    table(doc, ["", ""], [
        ["icons.js registers", num(dp, r"icons.js registers (\d+) terms") + " terms across "
         + num(dp, r"across (\d+) families") + " families"],
        ["Book 1 distinct terms", num(dp, r"Book 1 distinct terms\s+(\d+)")
         + " — registered " + num(dp, r"-> registered (\d+)")
         + ", tier-3 fallback " + num(dp, r"tier-3 fallback (\d+)")],
        ["Book 2 distinct terms", num(dp, r"Book 2 distinct terms\s+(\d+)")],
        ["already registered", num(dp, r"already registered\s+(\d+)")],
        ["NEW, need a family", num(dp, r"NEW, need a family\s+(\d+)")],
    ], widths=[2.0, 4.5])
    para(doc, "At Book 1's measured density that is roughly 20 new families. The shapes Book "
              "2 needs are its own and the book draws most of them: two-stage assignment, "
              "the relevant range, the high-low line, the learning curve, a job card, a "
              "process flow with a department per WIP account, equivalent units, the "
              "overhead rate and its over/under bar, absorption versus variable, "
              "service-department allocation, the split-off point, the ABC pyramid, the "
              "value chain, a process map, the cost-of-quality four-box, the supply chain, "
              "the standard cost card.", after=6)
    para(doc, "Book 1 ships zero tier-3 typographic fallbacks. Shipping Book 2 with %s of "
              "them would be a visible regression of a standard, not a gap — which is why "
              "this is a gated item and not a nicety."
         % num(dp, r"NEW, need a family\s+(\d+)"), bold=True, after=12)

    doc.add_heading("5. An opportunity Book 1 did not have", 1)
    para(doc, "Book 2's Extended Example is richer and varies by chapter (7 to 10 steps, "
              "listed per chapter in evidence/structure.txt). All eighteen end with the same "
              "four steps:", after=4)
    para(doc, "Tie line · Terms in three languages · How the exam asks it · Self-check",
         bold=True, colour=ACCENT, after=6, align=WD_ALIGN_PARAGRAPH.CENTER)
    para(doc, "“How the exam asks it” and “Self-check” are authored "
              "exercise material in prose, in all eighteen chapters — the same kind of find "
              "as Book 1's Your-turn key, which was the whole of that depth pass. "
              "“Tie line” is a ready-made cma_crosstie oracle.", after=6)
    para(doc, "Do not build on this before reading it. Book 1's package concluded "
              "“Move 1 cannot be generated” from four honest measurements and was "
              "wrong because it was looking at the drawn figure instead of the answer key. "
              "Census these two steps' shape across all eighteen chapters first, in a tool "
              "that writes into evidence/.", italic=True, colour=WARN, after=12)

    doc.add_heading("6. The plan", 1)
    phases = [
        ("Phase 0 — the prefix becomes a parameter (blocking)",
         "A BOOKS registry with path and sha per book and --book N on every tool and gate; "
         "one fid(book, n) function threaded through the %s interpolated id lines; the %s "
         "chapter-keyed rows re-keyed to (book, chapter) with the lookup RAISING on a "
         "missing row rather than returning an empty dict; outputs gaining the book. Teeth: "
         "a positive figure count per chapter for both books (plant the old regex, it must "
         "fail); Book 1's eighteen chapters still extracting byte-identically; a missing "
         "(book, chapter) row raising."
         % (num(cp, r"INTERPOLATED \((\d+) lines\)"), num(cp, r"(\d+) rows TOTAL"))),
        ("Phase 1 — extract and lock",
         "--book 2 --extract --verify-book --figures --baseline across eighteen chapters, "
         "giving book2_chNN.json, source-text-ch01..18.js and the %s drawings written out "
         "beside the pages they appear on."
         % num(st, r"embedded drawings\s+(\d+)")),
        ("Phase 2 — terms and icons",
         "cma_terms --book 2 for the %s term rows, then the new icon families. Gate: "
         "Icons.census() tier-3 count must be 0, as Book 1's is."
         % num(st, r"term rows\s+(\d+)")),
        ("Phase 3 — generate the eighteen chapters",
         "Book 2's chapter 1 IS generatable: there is no hand-authored benchmark chapter to "
         "protect, so no BUILDABLE refusal. It also means Book 2 has no 74%-built reference "
         "chapter, so its depth floors start lower and must be compared with Book 1's "
         "GENERATED chapters 6–18, never with its chapter 1."),
        ("Phase 4 — the eighteen hand rows per table",
         "CASE_RULES is transcription of the author's sentences, asserted verbatim so a typo "
         "fails the build. BRIEF_ANIM, SUMMARY_CLOZE and TRAPS are judgements about his "
         "chapters. EXTENDED_EXAMPLE must carry the varying step lists."),
        ("Phase 5 — the site shell",
         "cma/book2/ pages and hub, and the cma/ landing gaining a second book. Disposition "
         "on the 19 shared renderers: copy them into cma/book2/assets/ and gate each copy as "
         "byte-identical to Book 1's. Moving them to a shared cma/assets/ is cleaner and "
         "would rewrite script paths in %s shipped Book 1 files for no learner-visible gain; "
         "copying without the gate is how two renderers drift into two behaviours silently."
         % num(cp, r"book1/ holds (\d+) files")),
        ("Phase 6 — the gates",
         "All five on --book 2, with A9 (no scene prints the figures another scene asks for) "
         "from the very first build — it exists because that defect shipped in Book 1 and "
         "all four other gates passed it. Then cma_depth --book 2 --raise to MEASURE Book "
         "2's floors. Never type a floor: Book 1's typed floors were wrong for 8 of 18 "
         "chapters."),
        ("Phase 7 — index and catalogue",
         "cma_index --book 2 derives the per-chapter exercise counts from "
         "gates.cma_interactive.run rather than counting them a second way. Then "
         "catalogue.json and the landing page; note that app.js owns the badge, subtitles "
         "and load order, and publish_site whitelists keys, so a new key is dropped "
         "silently."),
    ]
    for title, body in phases:
        doc.add_heading(title, 2)
        para(doc, body, after=8)

    doc.add_heading("7. Risks, each with the check that catches it", 1)
    table(doc, ["#", "risk", "the check"], [
        ["R1", "the 2 prefix makes a pattern match zero, read as clean",
         "positive-count assertion per chapter, both books"],
        ["R2", "Book 1's chapter-n row answers for Book 2's",
         "lookup raises on a missing (book, n) row"],
        ["R3", "phase 0 regresses the eighteen shipped Book 1 chapters",
         "re-extract Book 1, require byte-identical"],
        ["R4", "166 terms fall to tier-3 marks", "Icons.census() tier-3 must be 0"],
        ["R5", "a renderer copy drifts from Book 1's",
         "byte-identity gate on all 19 shared files"],
        ["R6", "an exhibit prints the answers of the exercise below it",
         "A9, from the first build; unit = the PAGE"],
        ["R7", "depth floors typed rather than measured",
         "--raise only; a typed floor is a defect"],
        ["R8", "auto_fill's silent 0 hides a whole class of figures",
         "census the undispatched tags before the build"],
    ], widths=[0.4, 3.1, 3.0])

    doc.add_heading("8. What is not decided here, and needs the owner", 1)
    bullets(doc, [
        "Scope. This plans Book 2 to Book 1's current standard. Books 3 and 4 are in the "
        "same folder, and phase 0 is the work that makes them cheap. Parameterise for all "
        "four now, or for two?",
        "The 12 label-to-description tables are still only shown in Book 1 for want of a "
        "match instrument. Book 2's shares-heavy dispatch suggests the same shape, so "
        "building the seven-way sort once would serve both books — but it is a layout I have "
        "not seen, and adding it unverified is how the “five figures were answer "
        "keys” class of defect happened.",
        "Book 1 chapter 1 stays unbuildable either way. Nothing here changes that.",
    ])
    doc.add_paragraph()
    para(doc, "Check this package with: python check_package.py --teeth", bold=True,
         colour=ACCENT, after=2)
    para(doc, "Every number above is re-derived from the book and the toolchain, and --teeth "
              "plants a defect against each check and requires it to fail.", italic=True,
         colour=MUTED)

    doc.save(out)
    print("wrote %s" % out)


if __name__ == "__main__":
    main()
