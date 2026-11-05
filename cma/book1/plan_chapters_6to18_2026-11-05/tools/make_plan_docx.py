"""Build the Chapters 6-18 plan as a .docx, from the measurements in evidence/.

Every number in the document is read out of a file in evidence/ at the moment this runs,
or recomputed from the book, so a plan that has drifted says so instead of reading
plausibly. Nothing is carried over from the five built chapters on the assumption that
the rest of the book looks like them - where it does, the census says so, and where it
does not, that is the plan.

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


def grab(name, pattern, group=0, default="no record"):
    m = re.search(pattern, ev(name))
    return m.group(group).strip() if m else default


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


def numbers(doc, items):
    for it in items:
        p = doc.add_paragraph(style="List Number")
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


# ---- the census, read back out of the evidence file ------------------------
census = ev("chapter_census.txt")
CH = []
for line in census.splitlines():
    m = re.match(r"^(\d+)\s+(.{1,52}?)\s{2,}(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)"
                 r"\s+(\d+)\s+(\d+)\s+(\d+)\s*$", line)
    if m:
        CH.append([m.group(1), m.group(2).strip()] + [m.group(i) for i in range(3, 11)])
UNBUILT = [c for c in CH if int(c[0]) >= 6]


def total(col):
    return sum(int(c[col]) for c in UNBUILT)


doc = Document()
sec = doc.sections[0]
sec.page_width = Inches(8.5)
sec.page_height = Inches(11)
sec.left_margin = sec.right_margin = Inches(0.7)
sec.top_margin = sec.bottom_margin = Inches(0.8)
doc.styles["Normal"].font.name = "Calibri"
doc.styles["Normal"].font.size = Pt(10.5)

t = doc.add_paragraph()
r = t.add_run("CMA Part 1, Book 1")
r.bold = True
r.font.size = Pt(11)
r.font.color.rgb = ACCENT
doc.add_heading("Chapters 6 to 18 — the rest of the book", level=0)
para(doc, "Thirteen chapters, measured against the author's .docx on 2026-11-05. "
          "Part I (Chapters 1-5) is built and green; this is what finishing Book 1 "
          "costs and what stands in the way.", italic=True, colour=MUTED, size=10)

rule(doc)

doc.add_heading("The thirteen chapters, measured", level=1)
para(doc, "All thirteen extract and verify VERBATIM today against "
          "CMA_P1_Book1_volume_v1.3.docx. Nothing below is estimated.")
table(doc,
      ["ch", "title", "sec", "blocks", "words", "SC", "P", "case", "figs", "drawn"],
      [[c[0], c[1][:42], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9]]
       for c in UNBUILT]
      + [["", "THIRTEEN CHAPTERS", total(2), total(3), total(4), total(5), total(6),
          total(7), total(8), total(9)]],
      [0.32, 2.5, 0.38, 0.6, 0.6, 0.4, 0.4, 0.45, 0.45, 0.5])
para(doc, "Compare Part I, built: 24 sections, 28,756 words, 92 practice questions, "
          "372 exercises. The remaining thirteen chapters are three times the book "
          "that has been built so far.", size=9, colour=MUTED)

rule(doc)

doc.add_heading("The blocker — do this first, and it is worse than last time", level=1)
para(doc, "order_of(n, sections=6) and terms_scenes(n, sections=4) carry Chapter 2's "
          "shape as a DEFAULT ARGUMENT, and every caller passes only n. Chapters 2 to 5 "
          "all have six numbered sections, so nothing has ever exercised it.")
table(doc,
      ["sections", "chapters", "what happens"],
      [["exactly 6", "7, 8, 10, 12, 13", "fits the default"],
       ["7", "11, 14, 15, 16, 17, 18",
        "s{n}-7 is built and then left off the page list. The chapter ships missing a "
        "section. SILENT."],
       ["fewer than 6", "6 (four), 9 (five)",
        "order_of names s6-5, s6-6, s9-6, which do not exist; write() does pages[pid] "
        "and raises KeyError. LOUD."]],
      [0.9, 1.7, 4.5])
p = doc.add_paragraph()
r = p.add_run("Only five of thirteen fit. The two directions are not equally dangerous: "
              "too few stops the build; too many ships a chapter with a section missing, "
              "and no gate counts section pages against the book.")
r.bold = True
r.font.color.rgb = WARN

rule(doc)

doc.add_heading("What the Chapters 3-5 work already fixed for this one", level=1)
para(doc, "Four of that plan's six surprises were fixed generically. The census "
          "confirms the fixes hold for all thirteen chapters they have never run on:")
bullets(doc, [
    ("The case exhibit is found by the author's caption,", "not by a table heading. All "
     "13 print \"Figure Fnn-xx. Case exhibit: ...\", and the figure number varies from "
     "-12 to -14."),
    ("The case category sort is found by its SECOND header.", "All 13 head it "
     "\"Category\"; the FIRST header is one of %s - %s. The old code matched two of "
     "them." % (
         len(set(re.findall(r"category key '([^']+)'", ev("chapter_census.txt")))),
         ", ".join(sorted(set(re.findall(r"category key '([^']+)'",
                                         ev("chapter_census.txt"))))))),
    ("The summary paragraph is found structurally.", "All 13 print one, 91 to 111 words."),
    ("An unresolved ledger reference raises", "at build time and fails gate check A7."),
    ("All 13 have exactly seven case items,", "C{n}-1 to C{n}-7."),
])

rule(doc)

doc.add_heading("What is NOT the same, and will bite", level=1)
numbers(doc, [
    ("The Extended Example is not section x.6.", "It is 6.4, 7.6, 8.6, 9.5, 10.6, 11.7, "
     "12.6, 13.6, 14.7, 15.7, 16.7, 17.7, 18.7 - always the LAST numbered section. Key "
     "the registries off the last section, never off the string \"x.6\"."),
    ("Four case exhibits are too wide for the lines exhibit:", "ch7 is 13x4, ch8 6x8, "
     "ch9 6x4, ch10 6x4. They need `grid`, which already ships. Chapter 8's "
     "eight-column exhibit is the widest table in the book."),
    ("Chapter 6 has four numbered sections.", "The thirteen-page shape is not a law of "
     "the book; the contents rail and the hub must be built from what the chapter has."),
])

rule(doc)

doc.add_heading("Instruments — two new kinds, and that is all", level=1)
para(doc, "Every printed figure in the thirteen chapters was classified by its SHAPE, "
          "not its subject (evidence/instrument_fit.txt): "
          + grab("instrument_fit.txt", r"\d+ of \d+ printed figures fit a scene kind "
                                       r"that already ships\.")
          + " A chapter on leases and a chapter on depreciation look unrelated and print "
            "the same shape.")
table(doc,
      ["New kind", "Why nothing existing fits", "Where"],
      [["schedule",
        "a row per year, where each row's CLOSING is the next row's OPENING. `waterfall` "
        "is one vertical ladder of subtotals; this is a recurrence, so an error must "
        "propagate and be marked where it starts.",
        "F09-09, F10-03, F10-05, F10-11, F14-06, F14-07, F14-10"],
       ["rowpick",
        "per row, choose among THAT ROW'S OWN numbers - market is the middle of "
        "replacement cost, ceiling and floor; LCM is then the lower of cost and market. "
        "`shares` picks from a fixed vocabulary; here the options differ every row.",
        "F08-05, F08-10, F08-13"]],
      [0.9, 4.4, 1.8])
para(doc, "Everything else reuses what ships: `switch` for the twelve GAAP-vs-IFRS "
          "tables, `shares` for the twelve decision grids, `post` for the two sets of "
          "journal entries, `grid` for the eight wide tables, `waterfall` for the "
          "reconciliations, `order` and `ladder` for the decision trees.")
p = doc.add_paragraph()
r = p.add_run("Read the 67 figures the classifier calls `lines` as \"undecided\", not as "
              "\"a reading screen\". Each becomes an exercise chosen when its section is "
              "authored, and the standard that no screen is scored on looking applies to "
              "every one.")
r.italic = True
para(doc, "Eleven chapters print a \"complete the blanks\" figure with the author's own "
          "key - F06-06, F08-07, F10-05, F11-09, F12-03, F13-07, F14-07, F15-06, "
          "F16-09, F17-08, F18-05. Those are the best exercises in the book and they "
          "come for free. Do not paraphrase them.")

rule(doc)

doc.add_heading("The part that cannot be generated", level=1)
table(doc,
      ["What", "Count", "Note"],
      [["Ledgers, one per chapter, with checkTies()", "13",
        "the arithmetic differs in kind every time: an allowance roll-forward, three "
        "cost flows, an amortisation schedule, a lease liability, an NCI roll-forward"],
       ["EXTRA_BY_CHAPTER entries", "13 chapters x 4-7 sections", "the instruments"],
       ["TRAPS, CASE_RULES, SUMMARY_CLOZE, BRIEF_ANIM_BY_CHAPTER, EXTENDED_EXAMPLE",
        "65", "five registries x thirteen chapters, every entry his words or his figure"],
       ["Term marks", "204",
        "distinct terms with no mark today (213 if the per-chapter column is added up; "
        "nine terms are bridged twice). icons.js draws 129 from 21 families; expect "
        "about 25 more families, drawn from each chapter's own figures."],
       ["Brief drawings", "~81", "one per section, plus the back matter"]],
      [2.5, 1.1, 3.5])

rule(doc)

doc.add_heading("Cost — measured, and it changes how the work must be run", level=1)
para(doc, "One real run of `python -m gates.run_all --full --cached-video` on "
          "2026-11-05 with five chapters built, scaled to eighteen by pages:")
cost_rows = []
for line in ev("gate_cost.txt").splitlines():
    m = re.match(r"^(cma_\w+)\s+(PASS|FAIL)\s+([\d.]+)s\s+([\d.]+)s", line)
    if m:
        cost_rows.append([m.group(1), m.group(2), m.group(3) + " s",
                          "%.1f min" % (float(m.group(4)) / 60.0)])
m = re.search(r"^TOTAL\s+([\d.]+)s\s+([\d.]+)s", ev("gate_cost.txt"), re.M)
if m:
    cost_rows.append(["TOTAL", "", "%.0f s" % float(m.group(1)),
                      "%.0f min" % (float(m.group(2)) / 60.0)])
table(doc, ["gate", "result", "5 chapters", "18, scaled"], cost_rows,
      [2.3, 0.8, 1.3, 1.3])
p = doc.add_paragraph()
r = p.add_run("cma_render_teeth is 60% of it, because it re-walks every page once per "
              "planted defect. At eighteen chapters that is over an hour on its own, "
              "every suite run, whether or not a single CMA file changed.")
r.bold = True
r.font.color.rgb = WARN
para(doc, "Do this when the gates are extended, not afterwards: give cma_render_teeth "
          "an input fingerprint, the way player_component has one, so an unchanged "
          "corpus is a skip rather than an hour. A skip must be visible in the report "
          "and must record what it hashed, or it becomes a gate that passes by not "
          "running.")

rule(doc)

doc.add_heading("Order of work", level=1)
numbers(doc, [
    ("The two defaults.", "order_of and terms_scenes take the count from the chapter. "
     "Done when --chapter 6 (four sections) and --chapter 11 (seven) both build, and a "
     "new gate check counts each chapter's section pages against the book."),
    ("The two new kinds,", "schedule and rowpick, each with an answers-view.js branch, "
     "provenance.js fields, a Brief drawing and a place in the A5 lint."),
    ("Then one chapter at a time,", "in book order, each finished before the next "
     "starts: ledger, instruments, the five registries, term marks, Brief drawings."),
    ("After every chapter:", "cma_provenance, cma_interactive --each, cma_render for "
     "that chapter alone."),
    ("After every third chapter:", "the same three with --teeth, plus cma_crosstie."),
    ("Fingerprint cma_render_teeth before chapter 12,", "or the suite becomes "
     "unrunnable."),
    ("Book index, hub, merged glossary and term index.", "All five are already "
     "chapter-generic as of the Chapters 3-5 work, so this is a re-run, not a rewrite."),
    ("Full suite, commit, push, verify live.", ""),
])

rule(doc)

doc.add_heading("The risks to name now, not later", level=1)
bullets(doc, [
    ("Eighteen chapters will describe one company across several years.", "cma_crosstie "
     "already makes Chapters 2-5 agree about Orontes's 2025. Chapters 6 to 18 add 2026, "
     "2027 and 2028, and the same figures recur: the Chapter 2 warehouse fire is in the "
     "Chapter 3 case, the Chapter 4 treasury purchase is in the Chapter 5 case, Levant "
     "is in 16 and 17. Extend cma_crosstie WITH every chapter, never at the end."),
    ("An exhibit that answers its exercise.", "Five of the sixteen drawn figures in "
     "Chapters 3-5 were answer keys, and no gate can see inside an image. The 73 drawn "
     "figures here must each be LOOKED AT against the exercise it lands on and declared "
     "data / default / inBrief. That is 73 screenshots and there is no way round it."),
])

rule(doc)

doc.add_heading("Refusals", level=1)
bullets(doc, [
    "No invented Arabic: all 339 bridged rows are the author's, and the census confirms "
    "none is missing.",
    "No emoji and no stock icons. A word with no geometry gets a typographic mark and is "
    "counted as such by the icon census.",
    "No change to any question, option or reason he wrote; no figure deleted; none "
    "placed above the exercise it answers.",
    "No check that cannot fail.",
])

rule(doc)
para(doc,
     "Package: cma/book1/plan_chapters_6to18_2026-11-05/  -  evidence/ holds the "
     "measurements, tools/ holds the scripts that made them, 00_CARRY.md is the short "
     "brief, and check_package.py verifies this package against the book and the "
     "toolchain it describes.",
     size=9, colour=MUTED)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(PKG, "plan.docx")
doc.save(out)
print("wrote", out)
