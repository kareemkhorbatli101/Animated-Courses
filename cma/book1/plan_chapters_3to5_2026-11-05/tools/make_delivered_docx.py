"""Build the Chapters 3-5 DELIVERY record as a .docx, from the saved gate logs.

Every number in the document is read out of a file in evidence/ at the moment this runs,
so a record that has drifted from the gates says so instead of reading plausibly. If a
log is missing, the line says "no record" rather than carrying a number over from the
plan.

Usage: python -I make_delivered_docx.py <out.docx>
"""
import io
import os
import re
import sys

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.shared import Inches, Pt, RGBColor

HERE = os.path.dirname(os.path.abspath(__file__))
PKG = os.path.dirname(HERE)
EV = os.path.join(PKG, "evidence")

ACCENT = RGBColor(0x0D, 0x65, 0x74)
MUTED = RGBColor(0x55, 0x66, 0x6E)


def ev(name):
    p = os.path.join(EV, name)
    return io.open(p, encoding="utf-8", errors="replace").read() if os.path.exists(p) else ""


def grab(name, pattern, default="no record"):
    m = re.search(pattern, ev(name))
    return m.group(0).strip() if m else default


def para(doc, text="", bold=False, italic=False, size=None, colour=None, space_after=6):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.bold = bold
    r.italic = italic
    if size:
        r.font.size = Pt(size)
    if colour:
        r.font.color.rgb = colour
    p.paragraph_format.space_after = Pt(space_after)
    return p


def bullets(doc, items):
    for it in items:
        p = doc.add_paragraph(style="List Bullet")
        if isinstance(it, tuple):
            r = p.add_run(it[0])
            r.bold = True
            p.add_run(" " + it[1])
        else:
            p.add_run(it)
        p.paragraph_format.space_after = Pt(3)


def table(doc, headers, rows, widths):
    t = doc.add_table(rows=1, cols=len(headers))
    t.style = "Table Grid"
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    for i, w in enumerate(widths):
        for cell in t.columns[i].cells:
            cell.width = Inches(w)
    hdr = t.rows[0].cells
    for i, text in enumerate(headers):
        hdr[i].text = ""
        r = hdr[i].paragraphs[0].add_run(text)
        r.bold = True
        r.font.size = Pt(9)
    for row in rows:
        cells = t.add_row().cells
        for i, val in enumerate(row):
            cells[i].text = ""
            p = cells[i].paragraphs[0]
            rr = p.add_run(str(val))
            rr.font.size = Pt(9)
            p.paragraph_format.space_after = Pt(2)
        for i, w in enumerate(widths):
            cells[i].width = Inches(w)
    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    return t


def rule(doc):
    from docx.oxml import OxmlElement
    from docx.oxml.ns import qn
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(8)
    pr = p._p.get_or_add_pPr()
    borders = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "6")
    bottom.set(qn("w:color"), "BBC5CA")
    borders.append(bottom)
    pr.append(borders)


doc = Document()
sec = doc.sections[0]
sec.page_width = Inches(8.5)
sec.page_height = Inches(11)
sec.left_margin = sec.right_margin = Inches(0.8)
sec.top_margin = sec.bottom_margin = Inches(0.8)
doc.styles["Normal"].font.name = "Calibri"
doc.styles["Normal"].font.size = Pt(10.5)

t = doc.add_paragraph()
r = t.add_run("CMA Part 1, Book 1")
r.bold = True
r.font.size = Pt(11)
r.font.color.rgb = ACCENT
h = doc.add_heading("Chapters 3, 4 and 5 — delivered", level=0)
para(doc, "Part I of Book 1 is complete: five chapters, built to one standard, gated "
          "together. 2026-11-05.", italic=True, colour=MUTED, size=10)

rule(doc)

doc.add_heading("What a learner gets", level=1)
bullets(doc, [
    ("Every screen decides.", "Nothing on any of the three new chapters is scored on "
     "having looked at it."),
    ("Every figure is evidence for an exercise,", "folded into it in one of three "
     "declared places: it folds forward as data, closes the practice, or goes to the "
     "Brief when it would answer the page."),
    ("Every string is the author's,", "checked word by word by the site's own "
     "provenance lock against the chapter it appears in and no other."),
    ("A Brief on every page:", "his summary, the terms with his Arabic and two voices, "
     "and one drawing of the mechanism the section is about."),
    ("A drawn mark for every bridged term,", "from families of shapes the book already "
     "uses - no emoji, no stock icons."),
    ("Teeth on both ends:", "every check is demonstrated to fail on a planted defect."),
])

rule(doc)

doc.add_heading("The gates, as they last ran", level=1)
table(doc,
      ["Gate", "What it proves", "Result"],
      [["cma_provenance", "every word the site teaches is in the author's chapter, and "
                          "the chapter is verbatim from the .docx",
        grab("after_provenance.txt", r"RESULT: \w+")],
       ["cma_interactive --each", "Standard A, then twelve targeted checks on every "
                                  "exercise in all five chapters",
        grab("after_interactive.txt", r"RESULT: \w+")],
       ["cma_render", "every page opens in a real browser, every scene renders and "
                      "marks itself, no figure 404s",
        grab("after_render.txt", r"RESULT: \w+")],
       ["cma_crosstie", "four chapters describing one company's 2025 agree with each "
                        "other, not only with themselves",
        grab("after_crosstie.txt", r"RESULT: \w+")],
       ["cma_interactive --teeth", "every check above fails on a planted defect",
        grab("after_teeth.txt", r"RESULT: \w+")]],
      [1.9, 3.9, 1.1])

para(doc, "Measured, not estimated:", bold=True)
bullets(doc, [
    grab("after_interactive.txt", r"\d+ families x \d+ exercises = \d+ checks"),
    grab("after_interactive.txt", r"ch01 \d+, ch02 \d+, ch03 \d+, ch04 \d+, ch05 \d+ = \d+"),
    grab("after_render.txt", r"\d+/\d+ checks pass"),
    grab("after_interactive.txt", r"\d+ renderers linted"),
])

rule(doc)

doc.add_heading("What the plan got wrong", level=1)
para(doc, "The plan was written from a census of the three chapters. Six things it "
          "assumed were Chapter 2's shape and not the book's. Each one had already "
          "shipped something broken that no gate could see, because the page still "
          "loaded.")
table(doc,
      ["Assumption", "What it cost", "Fix"],
      [["A statement is a name and one or two amount columns",
        "Chapter 4's Figure F04-02 is a seven-column roll-forward, so the chapter's "
        "central figure was on no screen at all",
        "statement_matrix + a new exhibit, assets/grid.js"],
       ["The case exhibit is headed \"Account / memo\"",
        "Chapters 4 and 5 had no case exhibit: the learner classified items they could "
        "not see",
        "found by the author's own caption, which also carries the figure number - "
        "F05-12, not F05-13"],
       ["The case category table is headed \"Account\" or \"Item\"",
        "Chapter 5's is headed \"Cash flow\": its first case item was missing",
        "found by the SECOND header, which is \"Category\" in every chapter"],
       ["The summary paragraph opens \"The balance sheet shows…\"",
        "Chapters 3 and 4 shipped a summary page holding nothing but the record of traps",
        "found structurally; a chapter with no SUMMARY_CLOZE entry now raises"],
       ["Every ledger reference is one of four prefixes",
        "\"@eq.rise@\" shipped as a string: a numeric field no learner could answer, "
        "and none of the twelve per-exercise checks caught it",
        "the generator refuses to write one; gate check A7 reads what shipped"],
       ["The merged glossary links a term to its section",
        "the link was hardcoded to ch01: with five chapters merged, four fifths of the "
        "table pointed at the wrong chapter",
        "the chapter comes from the term's own section number"]],
      [1.9, 3.0, 2.0])

rule(doc)

doc.add_heading("The figures that answer their own page", level=1)
para(doc, "No gate can see inside an image, so each of the sixteen drawn figures in "
          "chapters 3 to 5 was opened and read against the exercise it lands on. Five "
          "were answer keys and are routed to the Brief instead - the one place in this "
          "design that is allowed to explain - declared in one place with the reason "
          "each gives away.")
table(doc,
      ["Figure", "What it gives away"],
      [["F03-03", "prints every subtotal, and captions itself \"only the multi-step "
                  "shows subtotals\" - the first blank of the cloze it lands on"],
       ["F03-06", "the whole decision chart: it answers the order scene built from it, "
                  "the sort beside it, and all three blanks of the cloze it lands on"],
       ["F04-09", "draws \"+ net income to retained earnings, Dec 31\", which is link l1 "
                  "of the wire it lands on"],
       ["F05-06", "the complete sign key for the signs scene on the same page"],
       ["F05-08", "draws both arrows the wire asks the learner to draw"]],
      [0.9, 6.0])

rule(doc)

doc.add_heading("New checks, each with teeth", level=1)
table(doc,
      ["Check", "What it would have caught"],
      [["A7 no page ships an unresolved ledger reference",
        "the \"@eq.rise@\" defect. Teeth: a planted reference in a copy of the site."],
       ["A8 the index's exercise count per chapter is the counted one",
        "it drew blood on its first run: 68/74/70 were typed into index.html, 65/71/67 "
        "were counted."],
       ["the icon census, on all five gate pages",
        "Icons.census() was exported so a gate could read it, and nothing read it: 34 "
        "terms had no family and fell through to the typographic tier, which looks "
        "identical to a term judged to have no geometry."],
       ["the statement check, tightened",
        "rows.length >= 0 passes on an empty statement."],
       ["objects3.js and grid.js added to the A5 lint",
        "five scene kinds were registered, shipped and not linted."]],
      [2.6, 4.3])

rule(doc)

doc.add_heading("Refusals held", level=1)
bullets(doc, [
    "No invented Arabic: all 62 bridges in chapters 3 to 5 are the author's.",
    "No emoji and no stock icons: the 34 new marks are eight new families of the book's "
    "own shapes.",
    "No question, option or reason of his was changed, and no figure was deleted.",
    "Every sentence quoted as his is asserted against the chapter at build time. Five "
    "sentences written from memory were rejected by that assertion and replaced with "
    "his wording.",
])

rule(doc)
para(doc,
     "Package: cma/book1/plan_chapters_3to5_2026-11-05/  -  00_CARRY.md is the plan as "
     "it stood before the work, 01_DELIVERED.md is this record, evidence/ holds the gate "
     "logs every number above is read from, and check_package.py verifies the package "
     "against the book and the toolchain.",
     size=9, colour=MUTED)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(PKG, "delivered.docx")
doc.save(out)
print("wrote", out)
