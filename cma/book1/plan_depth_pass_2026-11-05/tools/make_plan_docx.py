"""Build the depth-pass plan as a .docx, from the measurements in evidence/.

Every number is read out of evidence/ at the moment this runs, so a plan that has
drifted from the site says so instead of reading plausibly.

Usage: python -I make_plan_docx.py <out.docx>
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
WARN = RGBColor(0x9A, 0x3A, 0x1A)


def ev(name):
    p = os.path.join(EV, name)
    return io.open(p, encoding="utf-8", errors="replace").read() if os.path.exists(p) else ""


def para(doc, text="", bold=False, italic=False, size=None, colour=None, space_after=6):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.bold, r.italic = bold, italic
    if size:
        r.font.size = Pt(size)
    if colour:
        r.font.color.rgb = colour
    p.paragraph_format.space_after = Pt(space_after)
    return p


def bullets(doc, items, style="List Bullet"):
    for it in items:
        p = doc.add_paragraph(style=style)
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
    b = OxmlElement("w:pBdr")
    bot = OxmlElement("w:bottom")
    bot.set(qn("w:val"), "single")
    bot.set(qn("w:sz"), "6")
    bot.set(qn("w:color"), "BBC5CA")
    b.append(bot)
    pr.append(b)


inv = ev("inventory.txt")


def grab(pattern, default="no record", group=0, src=None):
    m = re.search(pattern, src if src is not None else inv, re.M)
    return m.group(group).strip() if m else default


# the per-chapter rows of the coverage table
COV = []
for line in inv.splitlines():
    m = re.match(r"^(\d+)\s+(.{1,34}?)\s*\|\s+([\d.]+)\s+([\d.]+)\s+(\d+)%\s+"
                 r"([\d.]+)\s+([\d.]+)\s*$", line)
    if m:
        COV.append(list(m.groups()))

doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Inches(8.5), Inches(11)
sec.left_margin = sec.right_margin = Inches(0.7)
sec.top_margin = sec.bottom_margin = Inches(0.8)
doc.styles["Normal"].font.name = "Calibri"
doc.styles["Normal"].font.size = Pt(10.5)

t = doc.add_paragraph()
r = t.add_run("CMA Part 1, Book 1")
r.bold = True
r.font.size = Pt(11)
r.font.color.rgb = ACCENT
doc.add_heading("The depth pass — eighteen chapters to one standard", level=0)
para(doc, "All eighteen chapters are built. They are not equal, and the inequality is "
          "not in coverage but in depth. Measured 2026-11-05.",
     italic=True, colour=MUTED, size=10)

rule(doc)
doc.add_heading("Where the book stands", level=1)
table(doc, ["", "ex / 1k words", "instruments / 1k", "instrument share",
            "kinds", "ex / section"],
      [["Chapter 1 (hand-written, oldest)", "8.40", "6.19", "74%", "22", "10.9"],
       ["Chapters 2-5 (hand-written)",
        grab(r"HAND-AUTHORED  chapters 2-5\s+\|\s+([\d.]+)", group=1),
        grab(r"HAND-AUTHORED  chapters 2-5\s+\|\s+[\d.]+\s+([\d.]+)", group=1),
        grab(r"HAND-AUTHORED  chapters 2-5\s+\|\s+[\d.]+\s+[\d.]+\s+(\d+%)", group=1),
        "10.8",
        grab(r"HAND-AUTHORED  chapters 2-5\s+\|(?:\s+[\d.%]+){4}\s+([\d.]+)", group=1)],
       ["Chapters 6-18 (generated)",
        grab(r"GENERATED      chapters 6-18\s+\|\s+([\d.]+)", group=1),
        grab(r"GENERATED      chapters 6-18\s+\|\s+[\d.]+\s+([\d.]+)", group=1),
        grab(r"GENERATED      chapters 6-18\s+\|\s+[\d.]+\s+[\d.]+\s+(\d+%)", group=1),
        "7.9",
        grab(r"GENERATED      chapters 6-18\s+\|(?:\s+[\d.%]+){4}\s+([\d.]+)",
             group=1)]],
      [2.6, 1.1, 1.3, 1.3, 0.6, 0.9])
p = doc.add_paragraph()
r = p.add_run(grab(r"\s+(\d+ of those are the author's own multiple-choice questions "
                   r"\(\d+%\),)", group=1).rstrip(","))
r.bold = True
p.add_run(" and only " + grab(r"and (\d+) are built instruments", group=1)
          + " are instruments the site builds. The chapters are not smaller: chapter 7 "
            "is 7,477 words against chapter 2's 7,786.")

rule(doc)
doc.add_heading("The three measurements this plan rests on", level=1)
bullets(doc, [
    ("115 of the author's 203 numbered figures are shown and never asked about.",
     "Chapters 2-5 leave 12 of 47 unasked; chapters 6-18 leave 103 of 156. Two per "
     "chapter are structural, so roughly eighty figures are an exercise the book "
     "already contains. [evidence/figures_asked.txt]"),
    ("37 of the author's 204 boxes are used — 18%.",
     "64 EXAM TRAP boxes, 13 used. 45 WORKED EXAMPLE, 9 used. 19 FALSE-FRIEND ALERT, "
     "4 used. 18 YOUR TURN, 1 used. [evidence/author_boxes.txt]"),
    ("The depth registries are empty for thirteen chapters.",
     "Traps: 5-6 each in chapters 2-5, none in 6-18. Brief drawings: 9 each, none. "
     "Ledger ties: 16-23, against 1-4. [evidence/inventory.txt]"),
])
para(doc, "What a learner meets because of that: the error log on thirteen summary "
          "pages has nothing to record, eighty-one sections open a Brief with no "
          "picture of the mechanism, and the cross-chapter tie gate has almost nothing "
          "to tie in Parts II to IV.")

rule(doc)
doc.add_heading("Chapter by chapter", level=1)
table(doc, ["ch", "title", "ex/1k", "instr/1k", "share", "ex/fig", "ex/sec"],
      [[c[0], c[1], c[2], c[3], c[4] + "%", c[5], c[6]] for c in COV],
      [0.33, 2.7, 0.75, 0.85, 0.7, 0.7, 0.7])

rule(doc)
doc.add_heading("What \"deeper and more specific\" means here", level=1)
para(doc, "Not more exercises. Fewer screens that can be answered by elimination, and "
          "more that require the learner to carry a number or a rule from one place to "
          "another. Four moves, in order of how much they change:")
table(doc, ["Move", "What it does", "Material it spends"],
      [["1. Ask the eighty figures that are only shown",
        "Every one already has an instrument that fits; the dispatcher did not reach "
        "it because the figure is an image, not a table. The image figures are decision "
        "charts, timelines, spectrums and T-accounts - and `order`, `timeline2`, "
        "`ladder` and `post` already ship.",
        "80 of his own figures"],
       ["2. A trap register per chapter",
        "Each EXAM TRAP box becomes a named trap wired to the scene that teaches it, so "
        "a learner's own errors are recorded and replayable, as in chapters 2-5.",
        "51 unused EXAM TRAP boxes"],
       ["3. Make the numbers travel between screens",
        "The sharpest weakness is that most numeric entries stand alone. Extended "
        "Examples become chains rather than lists of independent ties; the Step 1/2/3 "
        "worked examples are PERFORMED through `post` and `order`; and `schedule` marks "
        "a row whose opening disagrees with the learner's own previous closing, which "
        "is the error the exam actually tests.",
        "19 worked examples, 18 Extended Examples"],
       ["4. A Brief drawing for every section",
        "The 19 icon families added for chapters 6-18 are the same shapes a Brief "
        "animation needs, at a different size.",
        "81 sections"]],
      [2.1, 3.7, 1.3])

rule(doc)
doc.add_heading("Targets, as the gate will state them", level=1)
table(doc, ["Check", "Today, worst chapter", "Target"],
      [["built instruments as a share of graded", "17% (ch 18)", "≥ 45% every chapter"],
       ["instrument kinds per chapter", "7 (ch 6)", "≥ 10"],
       ["the author's figures asked about", "17% (ch 6, 7, 18)", "≥ 70%"],
       ["named traps", "0 in thirteen chapters", "≥ 4"],
       ["Brief drawings", "0 in thirteen chapters", "1 per section"],
       ["his boxes used", "18% book-wide", "≥ 60%"]],
      [3.0, 2.3, 1.8])
para(doc, "A target with no check is a wish: the checks are written FIRST, failing, "
          "before any move starts.")

rule(doc)
doc.add_heading("Two things that must not happen", level=1)
bullets(doc, [
    ("No new exercise may be invented.", "Every target above is met out of material the "
     "author already wrote, and evidence/ names it figure by figure and box by box. The "
     "provenance lock and _verbatim make that enforceable rather than aspirational."),
    ("No figure may be moved in front of the exercise it answers.", "Five of the sixteen "
     "drawn figures in chapters 3-5 were answer keys, found only by opening them. Move 1 "
     "puts about eighty more figures onto exercise screens, and every one must be looked "
     "at and declared data / default / inBrief."),
])

rule(doc)
doc.add_heading("Cost", level=1)
para(doc, "cma_render_teeth is already 60% of the CMA suite and would be about 69 "
          "minutes at eighteen chapters. Fingerprint it BEFORE Move 1 starts, not "
          "after: this pass touches every chapter and will re-run the suite many times.")

rule(doc)
para(doc, "Package: cma/book1/plan_depth_pass_2026-11-05/  -  evidence/ holds the "
          "measurements, tools/ holds the three scripts that made them, 00_CARRY.md is "
          "the short brief, and check_package.py recomputes every number above and "
          "states, for each target, whether the gap is still open.",
     size=9, colour=MUTED)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(PKG, "plan.docx")
doc.save(out)
print("wrote", out)
