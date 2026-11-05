"""Build the Chapters 3-5 plan as a .docx.

Every number in the document comes from a file in evidence/, written by the other
scripts in this directory against the actual chapters. Nothing is carried over from
Chapter 2 on the assumption that these chapters look like it - where they do, the
census says so.

Usage: python -I make_plan_docx.py <out.docx>
"""
import os
import sys

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt, RGBColor

HERE = os.path.dirname(os.path.abspath(__file__))
PKG = os.path.dirname(HERE)
EV = os.path.join(PKG, "evidence")

ACCENT = RGBColor(0x0D, 0x65, 0x74)
MUTED = RGBColor(0x55, 0x66, 0x6E)


def h(doc, text, level=1):
    return doc.add_heading(text, level=level)


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

# ---- title -----------------------------------------------------------------
t = doc.add_paragraph()
r = t.add_run("CMA Part 1, Book 1")
r.bold = True
r.font.size = Pt(13)
r.font.color.rgb = MUTED

t2 = doc.add_paragraph()
r = t2.add_run("Chapters 3, 4 and 5")
r.bold = True
r.font.size = Pt(26)
r.font.color.rgb = ACCENT
t2.paragraph_format.space_after = Pt(2)

para(doc, "The Income Statement  ·  Equity  ·  The Statement of Cash Flows",
     size=12, colour=MUTED, space_after=2)
para(doc, "Plan and work package  -  2026-11-05", size=11, colour=MUTED, space_after=14)

rule(doc)

para(doc, "What this plan is for", bold=True, size=12, space_after=4)
para(doc,
     "Chapters 1 and 2 are live and meet six standards: no screen is graded on looking, "
     "every page carries a Brief, every term has a drawn mark, every worked example is "
     "performed, every exercise carries twelve targeted gate checks, and every word is "
     "the author's. This plan brings Chapters 3, 4 and 5 to the same state. With Chapter "
     "2's balance sheet they complete the four statements, so Chapters 1 to 5 become a "
     "whole that can be shipped as one.",
     space_after=8)

para(doc,
     "It is written to be executed by someone who has not seen the work on Chapters 1 "
     "and 2. Every number below was measured from the three chapters themselves; the "
     "scripts that measured them are in tools/ and their output in evidence/, so any "
     "figure here can be reproduced or disputed. Where these chapters turn out to differ "
     "from Chapter 2, the census says so rather than the plan assuming it.",
     space_after=10)

# ---- 1. the three chapters -------------------------------------------------
h(doc, "1. What the three chapters actually contain", level=1)

para(doc,
     "All three extract and verify verbatim against the .docx today "
     "(evidence/book_verbatim.txt), and all three have the same shape as Chapter 2. That "
     "is the single most important fact in this plan: the section template the generator "
     "already uses fits them without change.",
     space_after=8)

table(doc,
      ["", "Ch 2 (built)", "Ch 3 Income", "Ch 4 Equity", "Ch 5 Cash flows"],
      [["Numbered sections", "6", "6", "6", "6"],
       ["Blocks extracted", "411", "408", "447", "431"],
       ["Words", "~7,000", "7,094", "7,001", "6,875"],
       ["Questions (practice + section check)", "34", "34", "39", "37"],
       ["Every question has the author's explanation", "yes", "yes", "yes", "yes"],
       ["Case items (C n-1 to C n-7)", "7", "7", "7", "7"],
       ["Numbered figures", "13", "13", "13", "12"],
       ["of those, drawn as a picture", "6", "6", "5", "5"],
       ["TERM BRIDGE boxes", "4", "4", "4", "4"],
       ["Bridged terms, all with the author's Arabic", "30", "25", "22", "15"],
       ["Worked / Extended examples", "2 / 1", "2 / 1", "2 / 1", "2 / 1"],
       ["Distinct money amounts", "91", "63", "59", "62"]],
      [2.5, 1.0, 1.1, 1.1, 1.2])

para(doc, "The sections, in the author's order:", bold=True, space_after=4)
table(doc,
      ["", "Chapter 3", "Chapter 4", "Chapter 5"],
      [["x.1", "Purpose and structure of the income statement",
        "Components of equity and the statement of changes in equity",
        "Purpose and structure of the statement of cash flows"],
       ["x.2", "Building the multi-step income statement",
        "Issuing and buying back shares", "Classifying cash flows"],
       ["x.3", "Unusual items and discontinued operations",
        "Dividends, stock dividends and stock splits", "The indirect method"],
       ["x.4", "Comprehensive income", "Retained earnings",
        "The direct method and required disclosures"],
       ["x.5", "Limitations and links to the other statements",
        "Limitations and links to the other statements",
        "Limitations and links between the four statements"],
       ["x.6", "Extended Example 3A: the same year in two formats",
        "Extended Example 4A: a full year of equity movements",
        "Extended Example 5A: the Orontes cash flow statement"]],
      [0.4, 2.15, 2.15, 2.2])

# ---- 2. what the toolchain already does ------------------------------------
h(doc, "2. What the toolchain already does, and the one thing it does not", level=1)

para(doc,
     "The generator takes --chapter N and Chapter 2 was produced with it, so it looks "
     "chapter-generic. It is not. `python -m tools.cma_scenes --chapter 3 --report` dies "
     "today with KeyError 's2-1' (evidence/generator_dry_run.txt), and the same for 4 and "
     "5. A sweep of the file (evidence/generator_genericness.txt) finds 42 lines where "
     "the chapter number is written in rather than passed in.",
     space_after=8)

para(doc,
     "This is worth stating plainly because it is the difference between \"run the tool "
     "three times\" and a real piece of work - and because it is the ordinary failure of "
     "a key that gained a dimension without every consumer gaining it.",
     space_after=8)

table(doc,
      ["Where", "Lines", "What it assumes", "The fix"],
      [["ORDER", "1", "page ids are literally s2-1 ... s2-6",
        "derive from N"],
       ["BRIEF_ANIM, `extra`, TERMS_SCENES", "16", "section keys are the strings \"2.1\" ... \"2.6\"",
        "key by section index, not by literal"],
       ["case_scenes", "7", "case items are named C2-1 ... C2-7",
        "derive the prefix from N"],
       ["TRAPS, CASE_RULES", "2 tables", "a chapter-2 entry only",
        "add an entry per chapter (the author's own sentences)"],
       ["build_statement, ties_scene, read_result", "3 functions",
        "they take no chapter at all: they ARE Chapter 2's section 2.6",
        "one Extended-Example builder per chapter"],
       ["ledger-ch02 / ch02 asset paths", "a handful", "the chapter's numbers live in one file",
        "already parameterised; one new ledger per chapter"]],
      [1.9, 0.6, 2.5, 1.9])

para(doc,
     "Against that, 32 of the generator's functions already take the chapter as an "
     "argument and are generic as they stand - the question parser, the explanations, the "
     "figure census, the section titles, the Brief builder, the boxes, the provenance "
     "assertion, the QA page. The work is to finish a job that is three-quarters done, "
     "not to start one.",
     space_after=10)

# ---- 3. the instruments ----------------------------------------------------
h(doc, "3. The instruments, one per section, from what each chapter draws", level=1)

para(doc,
     "The standard Chapters 1 and 2 now meet is that every teaching section carries an "
     "instrument the learner can operate, and that nothing is graded on looking. The "
     "author's own figure captions are the best guide to what each section wants, so the "
     "table below is built from them (evidence/new_terms_and_figures.txt). Twenty-six "
     "scene kinds exist already; only four are new.",
     space_after=8)

para(doc, "Chapter 3 - The Income Statement", bold=True, size=11, space_after=4)
table(doc,
      ["", "Instrument", "Grounded in", "New?"],
      [["3.1", "waterfall", "F03-04 \"Waterfall from Orontes's 2025 net sales to net "
                            "income\" - the ladder of subtotals, built one step at a time",
        "NEW"],
       ["3.2", "statement + switch", "F03-05 \"complete the blanks\" multi-step, and F03-03 "
                                     "\"the same net income\" in single-step and multi-step form",
        "reuse"],
       ["3.3", "ladder", "F03-06 \"Decision chart: where does an item go?\" plus the two "
                         "tests for a discontinued operation",
        "reuse"],
       ["3.4", "sort + switch", "F03-08 \"Main OCI items: U.S. GAAP and IFRS\"", "reuse"],
       ["3.5", "wire", "F03-09 \"Why Orontes's 2025 net income differs from its operating "
                       "cash flow\"", "reuse"],
       ["3.6", "statement + locks + number", "F03-10 and F03-11, the same year in two "
                                             "formats and net income to comprehensive income",
        "reuse"]],
      [0.4, 1.5, 4.0, 0.7])

para(doc, "Chapter 4 - Equity", bold=True, size=11, space_after=4)
table(doc,
      ["", "Instrument", "Grounded in", "New?"],
      [["4.1", "bands + statement", "F04-03 \"Orontes's equity at the end of 2024 and 2025, "
                                    "by component\"", "reuse"],
       ["4.2", "treasury", "F04-04 \"Treasury stock under the cost method: buy back, "
                           "reissue or retire\" - three routes, three different effects",
        "NEW"],
       ["4.3", "shares", "F04-07 small and large stock dividends and a stock split: move "
                         "the ratio and watch shares, par and retained earnings",
        "NEW"],
       ["4.4", "tank", "F04-09 \"Orontes's 2025 retained earnings roll-forward\" - the tank "
                       "instrument from Chapter 1 is exactly this", "reuse"],
       ["4.5", "wire", "F04-09, book value versus market value, and the links out", "reuse"],
       ["4.6", "statement + locks", "F04-10 and F04-11, the statement of changes in equity "
                                    "and why accumulated OCI keeps its own column", "reuse"]],
      [0.4, 1.5, 4.0, 0.7])

para(doc, "Chapter 5 - The Statement of Cash Flows", bold=True, size=11, space_after=4)
table(doc,
      ["", "Instrument", "Grounded in", "New?"],
      [["5.1", "waterfall", "F05-01 \"three activities explain the change in cash\" and "
                            "F05-03 cash flows by activity - the same instrument 3.1 needs",
        "reuse"],
       ["5.2", "sort + switch", "F05-05 \"Which activity? (complete the blanks)\" and F05-04 "
                                "interest, dividends and taxes under U.S. GAAP and IFRS",
        "reuse"],
       ["5.3", "signs", "F05-06 \"Sign rules for the indirect method, with Orontes "
                        "examples\" - add or subtract, for each change", "NEW"],
       ["5.4", "statement", "F05-07 operating activities by the direct method", "reuse"],
       ["5.5", "wire", "F05-08 \"How Orontes's four 2025 statements fit together\"", "reuse"],
       ["5.6", "locks + number", "F05-09 and F05-10, cash from operations and \"three "
                                 "answers, only one correct\"", "reuse"]],
      [0.4, 1.5, 4.0, 0.7])

para(doc,
     "Four new kinds in all - waterfall, treasury, shares, signs - and waterfall is "
     "shared between Chapter 3 and Chapter 5. Each must also gain a branch in "
     "assets/answers-view.js, a field list in assets/provenance.js and, if it is drawn in "
     "a Brief, an animation: a kind that is missing any of the three is caught by the "
     "per-exercise gate, which is how cycle and ladder were caught in Chapter 2.",
     space_after=10)

# ---- 4. the six standards --------------------------------------------------
h(doc, "4. The six standards, and what each costs in these chapters", level=1)

table(doc,
      ["", "Standard", "What it costs here"],
      [["A", "Decide, do not reveal. No exercise graded on looking; an untouched one "
             "scores zero and is not ok.",
        "Free if the sections are built from the instruments above. The gate "
        "(gates/cma_interactive) already enforces it and needs only CHAPTERS extended."],
       ["B", "Every page carries a Brief: the author's summary, a drawing, the terms with "
             "his Arabic and both voices, and what the page asks.",
        "Generated. brief_for() already takes the chapter and lifts whole sentences from "
        "the author's section openings. Needs one BRIEF_ANIM entry per section (18) and "
        "any new animations."],
       ["C", "Every term carries a drawn mark. No emoji, no stock icons.",
        "34 new terms across the three chapters (25 + 22 + 15 bridged, of which 34 are "
        "not already drawn). Most fall into families icons.js already has."],
       ["D", "Every worked example is performed, not watched.",
        "Three Extended Examples and six worked examples. Each needs its own builder; "
        "this is where build_statement/ties_scene/read_result stop being Chapter 2's."],
       ["E", "Twelve targeted gate checks on every exercise.",
        "Free. The families are chapter-independent; extending CHAPTERS to (1,2,3,4,5) "
        "takes the count from 2,016 to roughly 3,400."],
       ["F", "One hundred per cent the author's words.",
        "One baseline per chapter (source-text-chNN.js), already supported. Every quoted "
        "sentence asserted with _verbatim() at build time."]],
      [0.3, 2.9, 3.7])

# ---- 5. the per-chapter ledger ---------------------------------------------
h(doc, "5. The part that cannot be generated: one ledger per chapter", level=1)

para(doc,
     "assets/ledger-ch02.js is 190 lines and the most careful thing in the build. It "
     "holds every figure Chapter 2 prints, each annotated with the block that prints it; "
     "the few that are DERIVED, each one addition of two printed figures; and "
     "checkTies(), nineteen arithmetic identities the chapter itself asserts, recomputed "
     "from the accounts so that a mistyped number fails the gate instead of quietly "
     "teaching a wrong statement. The best of them closes the loop on the chapter's own "
     "named error: reporting assets before their contra accounts gives 43,816,600, and "
     "the ledger recomputes exactly that.",
     space_after=8)

para(doc,
     "Each new chapter needs its own, and the arithmetic is different in kind:",
     space_after=5)
bullets(doc, [
    ("Chapter 3.", "A ladder of subtotals. The ties are the ladder itself - net sales less "
                   "cost of sales is gross profit, and so on down to net income - plus the "
                   "single-step and multi-step forms reaching the SAME net income, which is "
                   "what F03-03 is for, and net income to comprehensive income."),
    ("Chapter 4.", "A roll-forward. Opening equity plus issues, less buy-backs, plus net "
                   "income, less dividends, equals closing equity, component by component, "
                   "with accumulated OCI in its own column. Stock dividends and splits move "
                   "shares and par without moving total equity - that identity is the "
                   "chapter's whole point and it must be a tie."),
    ("Chapter 5.", "A reconciliation, and the strictest of the three. Operating plus "
                   "investing plus financing equals the change in cash; the change in cash "
                   "equals the balance-sheet cash movement; and the indirect method must "
                   "reach the same cash from operations as the direct method. Chapter 5's "
                   "ledger must also agree with Chapters 2, 3 and 4 - it is the same "
                   "company and the same year."),
])

para(doc,
     "That last point is the one real risk in this plan, and it is stated here so it is "
     "not discovered late: four chapters now describe one company's 2025. The gate must "
     "check ACROSS chapters, not only within them, or the four statements can disagree "
     "while every chapter passes on its own.",
     space_after=10)

# ---- 6. order of work ------------------------------------------------------
h(doc, "6. Order of work", level=1)

para(doc,
     "Phase 0 first, and alone: it makes the generator genuinely per-chapter and proves "
     "it by producing a Chapter 3 that is deliberately plain. Nothing else can be judged "
     "until that runs.",
     space_after=8)

table(doc,
      ["Phase", "Work", "Done when"],
      [["0", "Make tools/cma_scenes chapter-generic: ORDER, the section keys, the case "
             "prefix, and the three functions that take no chapter.",
        "--chapter 3, 4 and 5 --report all run. No output is judged yet."],
       ["1", "Per chapter: extract, terms, baseline. (Already done for 3, 4 and 5 while "
             "measuring this plan - the JSON is in courses/cma/.)",
        "book_is_verbatim and baseline_is_the_book pass for each."],
       ["2", "One ledger per chapter, with every printed figure annotated and checkTies() "
             "asserting the chapter's own identities.",
        "checkTies() returns all-holding for each, and the cross-chapter tie holds."],
       ["3", "The four new kinds - waterfall, treasury, shares, signs - each with an "
             "answers-view branch, provenance fields and a Brief animation.",
        "Each solves to full marks and fails on one wrong move."],
       ["4", "Per chapter: the six sections' instruments, TRAPS, CASE_RULES, the Extended "
             "Example builder.",
        "Every teaching section carries an instrument; every quoted sentence passes "
        "_verbatim()."],
       ["5", "Term marks for the 34 new terms; Briefs for the 33 new pages.",
        "Icons.census reports no typographic fallbacks it cannot justify; every deck page "
        "opens a Brief."],
       ["6", "Extend CHAPTERS to (1,2,3,4,5) in all three gates; add the cross-chapter "
             "tie.",
        "All three gates green over five chapters, with teeth."],
       ["7", "The book index, the hub, the merged glossary and term index.",
        "The index counts five chapters and the glossary carries every term once."],
       ["8", "Full gate run, commit, push, verify live.",
        "Every URL 200, and no exercise on the live site passes untouched or on coverage."]],
      [0.5, 3.2, 3.2])

# ---- 7. gates --------------------------------------------------------------
h(doc, "7. Which gate to run, and when", level=1)

table(doc,
      ["When", "Command", "Why that one"],
      [["After every phase",
        "python -m gates.cma_provenance\npython -m gates.cma_interactive --each\n"
        "python -m gates.cma_render",
        "About 6 minutes over five chapters. Catches a broken quotation, a screen graded "
        "on looking, and a page that throws - the three ways this work goes wrong."],
       ["After phases 3, 4 and 6",
        "the same three with --teeth",
        "About 22 minutes. A gate without proven teeth is the failure the Chapter 1 and 2 "
        "work existed to correct."],
       ["Before pushing",
        "python -m gates.run_all --full --cached-video",
        "The pre-publish suite. --cached-video is right: this work renders no video."]],
      [1.1, 2.6, 3.2])

para(doc,
     "A measured note on cost, because the Chapter 1-2 plan got this wrong in the "
     "pessimistic direction: the per-exercise gate ran 2,016 checks over two chapters in "
     "46 seconds, because every check on a scene happens in one round trip to the "
     "browser. Five chapters should be about 80 seconds. No fingerprinting or caching is "
     "needed, and none should be built speculatively.",
     space_after=10)

# ---- 8. refusals and risks -------------------------------------------------
h(doc, "8. What this plan refuses to do, and what could still go wrong", level=1)

para(doc, "Refusals, carried over unchanged:", bold=True, space_after=4)
bullets(doc, [
    "No invented Arabic. The 62 bridged terms all carry the author's own Arabic; no "
    "sentence is translated.",
    "No emoji, no stock icons, no picture invented for a word with no geometry - such a "
    "term gets a typographic mark and is counted as one.",
    "No change to any question, option or reason the author wrote.",
    "No figure deleted, and no figure placed above the exercise it answers.",
    "No check that cannot fail: each new family demonstrated against a planted defect.",
])

para(doc, "Risks, in the order they are likely to bite:", bold=True, space_after=4)
bullets(doc, [
    ("The four statements must agree with each other.", "Four chapters now describe one "
     "company's 2025. A cross-chapter tie is phase 6 and must not be deferred: net income "
     "in Chapter 3 is the net income Chapter 4 rolls forward and Chapter 5 starts from, "
     "and the cash Chapter 5 explains is the cash on Chapter 2's balance sheet."),
    ("An exhibit that answers its exercise.", "Eight of Chapter 1 and 2's thirteen figures "
     "did, and no gate could see it because the content is inside an image. Each of the "
     "16 drawn figures in these chapters must be LOOKED AT against the exercise it lands "
     "on, and declared data / default / inBrief accordingly."),
    ("The Extended Example builders.", "Chapter 2's are three functions that take no "
     "chapter. Writing three more by copying them is how a chapter ends up quietly "
     "showing Chapter 2's numbers; each should be written from its own ledger and its own "
     "figure."),
    ("Chapter 4's share arithmetic.", "Stock dividends, stock splits and treasury stock "
     "move shares, par, additional paid-in capital and retained earnings in combinations "
     "that are easy to get subtly wrong and that no reader will check. The ties are the "
     "defence."),
])

rule(doc)
para(doc,
     "Package: cma/book1/plan_chapters_3to5_2026-11-05/  -  evidence/ holds the "
     "measurements, tools/ holds the scripts that made them, 00_CARRY.md is the short "
     "brief, and check_package.py verifies this package against the book and the "
     "toolchain it describes.",
     size=9, colour=MUTED)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(PKG, "plan.docx")
doc.save(out)
print("wrote", out)
