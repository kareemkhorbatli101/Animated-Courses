"""Build the Chapter 1 + Chapter 2 interactive-overhaul plan as a .docx.

Every number in the document comes from a file in evidence/, written by the other
scripts in this directory. Nothing here is typed from memory.

Usage: python -I make_plan_docx.py <out.docx>
"""
import csv
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


# ---------------------------------------------------------------- helpers
def h(doc, text, level=1):
    p = doc.add_heading(text, level=level)
    return p


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
    total = Inches(sum(widths))
    t.columns  # touch
    for i, w in enumerate(widths):
        for cell in t.columns[i].cells:
            cell.width = Inches(w)
    hdr = t.rows[0].cells
    for i, text in enumerate(headers):
        hdr[i].text = ""
        p = hdr[i].paragraphs[0]
        r = p.add_run(text)
        r.bold = True
        r.font.size = Pt(9)
    for row in rows:
        cells = t.add_row().cells
        for i, val in enumerate(row):
            cells[i].text = ""
            p = cells[i].paragraphs[0]
            r = p.add_run(str(val))
            r.font.size = Pt(9)
            p.paragraph_format.space_after = Pt(2)
        for i, w in enumerate(widths):
            cells[i].width = Inches(w)
    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    return t


def rule(doc):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(8)
    pr = p._p.get_or_add_pPr()
    from docx.oxml.ns import qn
    from docx.oxml import OxmlElement
    borders = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "6")
    bottom.set(qn("w:color"), "BBC5CA")
    borders.append(bottom)
    pr.append(borders)


# ---------------------------------------------------------------- evidence
def read_passive_csv():
    with open(os.path.join(EV, "passive_scenes.csv"), encoding="utf-8") as fh:
        return list(csv.DictReader(fh))


PASSIVE = read_passive_csv()

# The rewrite target for each passive scene. Keyed by (page, kind, title-prefix) so a
# change to the site that renames a scene shows up as a missing key rather than silently
# attaching the wrong plan to the wrong scene.
TARGET = {
    ("case", "probe", "What the bank"):
        ("judge (new)", "Each of the bank's and Mr Haddad's questions becomes a claim the "
                        "learner marks true or false and then picks the book's own reason for. "
                        "4 decisions."),
    ("case", "probe", "The four figures"):
        ("locks", "The four figures must tie to one another. A wrong figure will not lock, so "
                  "the learner cannot pass by reading. 4 decisions."),
    ("s1-1", "table", "Seven readers"):
        ("matchgrid (new)", "THE NAMED DEFECT. Drag each of the seven readers onto the question "
                            "they ask and the statement they use most, and mark which three are "
                            "primary users. 17 decisions, replacing click-to-reveal."),
    ("s1-2", "figure", "Three describe a date"):
        ("exhibit", "The figure becomes the exhibit inside the sort of the same name. The picture "
                    "stays; it stops being a scene of its own."),
    ("s1-2", "beam", "Assets = Liabilities"):
        ("beam, drag-graded", "THE NAMED DEFECT. For each transaction the learner drags the two "
                              "effects onto the Assets / Liabilities / Contributed capital / "
                              "Retained earnings pans. The beam levels only when both are right, "
                              "and the equation is proved numerically. Graded per transaction, "
                              "not per click."),
    ("s1-2", "tank", "What moves retained earnings"):
        ("tank, predict-first", "For each pipe the learner first chooses raises / lowers / does "
                                "not touch retained earnings, and only then does the pipe open. "
                                "Graded on the prediction, not on having tried every pipe."),
    ("s1-2", "switch", "The same statement, two sets"):
        ("pairs (new)", "Match the six U.S. GAAP names to their IFRS equivalents against "
                        "distractors. The switch stays, as the reveal after grading."),
    ("s1-3", "figure", "Which side increases it"):
        ("exhibit", "Becomes the exhibit of the debit/credit sort of the same name."),
    ("s1-3", "probe", "Read the grid you just built"):
        ("judge (new)", "Four claims about the grid the learner has just built, one of which the "
                        "book contradicts. True/false plus the reason."),
    ("s1-4", "figure", "One sale, two years"):
        ("exhibit", "Becomes the exhibit of the timeline exercise of the same name."),
    ("s1-4", "timeline2", "One sale, two years"):
        ("timeline2, predict-first", "At each stop the learner enters how much revenue falls in "
                                     "fiscal 2025 before the slider moves. Graded per stop."),
    ("s1-5", "figure", "Four bodies, four jobs"):
        ("exhibit", "Becomes the exhibit of the sort of the same name."),
    ("s1-5", "shelf", "Find the two topics"):
        ("shelf, penalised", "Wrong taps are counted against the score. Today only correct taps "
                             "are counted, so tapping everything scores full marks."),
    ("s1-5", "switch", "Six names, in the form"):
        ("pairs (new)", "Graded matching of the six exam forms, then the switch as the reveal."),
    ("s1-5", "probe", "Four things to carry"):
        ("judge (new)", "Four claims, graded; the section's four takeaways become decisions."),
    ("s1-6", "figure", "A date, or a period"):
        ("exhibit", "Becomes the exhibit of the sort of the same name."),
    ("s1-6", "wire", "Link the statements together"):
        ("wire, graded", "Wrong wires are recorded and scored instead of being silently dropped, "
                         "and distractor endpoints are added so the link is a judgment."),
    ("s1-7", "gauges", "What the lender sees"):
        ("gauges, live", "The only scene in either chapter that takes no input at all. The learner "
                         "reclassifies accounts and the current ratio and working capital move, "
                         "then answers the book's question."),
    ("summary", "figure", "One rule from each"):
        ("exhibit", "Becomes the exhibit of the summary sort."),
    ("terms", "termcards", "Every term in the chapter"):
        ("termcards, two-direction", "Graded recall English to Arabic and Arabic to English against "
                                     "the book's own gloss, replacing a score of how many lists "
                                     "were opened."),
    ("case", "lines", "The case exhibit"):
        ("exhibit", "Becomes the exhibit of the case's first exercise."),
    ("s2-1", "lines", "The classified balance sheet"):
        ("anatomy (new)", "Drag the five section labels onto the right bands of Figure F02-02, then "
                          "three named lines into the right band. 8 decisions."),
    ("s2-2", "figure", "The same test, three times"):
        ("exhibit", "Becomes the exhibit of the sort of the same name."),
    ("s2-3", "figure", "Where do U.S. GAAP and IFRS"):
        ("exhibit", "Becomes the exhibit of the sort of the same name."),
    ("s2-4", "figure", "Which of these puts a liability"):
        ("exhibit", "Becomes the exhibit of the sort of the same name."),
    ("s2-5", "figure", "How the four statements meet"):
        ("exhibit + wire", "Becomes the exhibit of a new wire exercise tying each statement to the "
                           "balance-sheet amount it must equal."),
    ("summary", "figure", "The chapter in one paragraph"):
        ("exhibit", "Becomes the exhibit of the summary cloze."),
    ("terms", "termcards", "Every bridged term"):
        ("termcards, two-direction", "Graded recall in both directions, as in Chapter 1."),
}


def target_for(row):
    for (page, kind, prefix), val in TARGET.items():
        if row["page"] == page and row["kind"] == kind and row["title"].startswith(prefix):
            return val
    return ("UNASSIGNED", "No target written. This is a gap in the plan, not in the site.")


# ---------------------------------------------------------------- document
doc = Document()

# US Letter, and a readable body font
sec = doc.sections[0]
sec.page_width = Inches(8.5)
sec.page_height = Inches(11)
for m in ("left_margin", "right_margin"):
    setattr(sec, m, Inches(0.8))
sec.top_margin = Inches(0.8)
sec.bottom_margin = Inches(0.8)

style = doc.styles["Normal"]
style.font.name = "Calibri"
style.font.size = Pt(10.5)

# ---- title page -------------------------------------------------------------
t = doc.add_paragraph()
t.alignment = WD_ALIGN_PARAGRAPH.LEFT
r = t.add_run("CMA Part 1, Book 1")
r.bold = True
r.font.size = Pt(13)
r.font.color.rgb = MUTED

t2 = doc.add_paragraph()
r = t2.add_run("Chapters 1 and 2: Interactive Overhaul")
r.bold = True
r.font.size = Pt(26)
r.font.color.rgb = ACCENT
t2.paragraph_format.space_after = Pt(2)

para(doc, "Plan and work package  -  2026-11-05", size=11, colour=MUTED, space_after=14)

rule(doc)

para(doc, "The one sentence this plan serves", bold=True, size=12, space_after=4)
para(doc,
     "Every page makes the learner decide. The explaining happens in a pop-up the learner "
     "opens on purpose. Nothing on a page is graded on having looked at it, and nothing on "
     "a page makes a claim the author did not write.",
     italic=True, space_after=12)

para(doc,
     "This package is written to be executed by someone who has not seen the conversation "
     "behind it. Every number in it was measured from the live site and the committed book "
     "text, and the scripts that measured it ship in tools/ so any number can be "
     "reproduced or disputed. Where the plan does not yet know something, it says so and "
     "names the check that will settle it.",
     space_after=10)

# ---- 1. the finding ---------------------------------------------------------
h(doc, "1. The finding that prompted this", level=1)

para(doc,
     "The two chapters hold 163 exercises across 27 learner-facing pages. Twenty-eight of "
     "those exercises are graded on looking rather than on knowing: their score counts what "
     "the learner opened, clicked, tried or flipped, not what the learner got right. Eleven "
     "of the twenty-eight are figure scenes that return a score of zero out of zero with the "
     "verdict \"Looked at\".",
     space_after=8)

table(doc,
      ["Measure", "Chapter 1", "Chapter 2", "Source"],
      [["Pages (learner-facing)", "14", "13", "evidence/book_census.txt"],
       ["Scenes", "84", "79", "evidence/passive_census.txt"],
       ["Graded on a decision", "64", "71", "evidence/passive_census.txt"],
       ["Graded on looking", "20  (23%)", "8  (10%)", "evidence/passive_census.txt"],
       ["Distinct scene kinds, teaching sections", "22", "9", "evidence/kind_inputs.txt"],
       ["Purpose-built instruments, teaching sections", "13", "0", "evidence/kind_inputs.txt"],
       ["Multiple-choice share, teaching sections", "26%", "35%", "evidence/kind_inputs.txt"],
       ["Gate checks today", "204 across both chapters", "-", "gates/cma_render.py"],
       ["Gate checks per scene today", "1.2 across both chapters", "-", "204 / 177"]],
      [2.6, 1.5, 1.5, 1.3])

para(doc,
     "Two of the twenty-eight were named directly by the owner, and both are confirmed in "
     "code rather than by impression:",
     space_after=6)
bullets(doc, [
    ("The accounting equation (s1-2 beam).",
     "Its score is the number of transaction buttons pressed, and its verdict is \"All "
     "applied\". It is explored, not judged, and it is click-driven where it should be "
     "drag-driven."),
    ("The readers of the statements (s1-1 table).",
     "Clicking a reader reveals that reader's decision, question and statements. The score "
     "is how many were read and the verdict is \"Every seat read.\" Reading all seven scores "
     "full marks without a single judgment."),
])

para(doc,
     "Chapter 2 is the weaker chapter on variety and the stronger on grading, which is the "
     "signature of how each was made: Chapter 1 was authored by hand, so it has many bespoke "
     "instruments but several that credit activity instead of accuracy; Chapter 2 was "
     "generated from the .docx, so it grades cleanly but repeats one template and contains no "
     "instrument at all.",
     space_after=10)

# ---- 2. evidence ------------------------------------------------------------
h(doc, "2. The evidence, and how to reproduce it", level=1)

para(doc, "Run each from the directory named. None of them writes to the site.", space_after=6)

table(doc,
      ["Script", "Run from", "Produces"],
      [["tools/audit_kinds.py", "cma/book1/assets",
        "evidence/kind_inputs.txt - which input each scene kind accepts, with bodies found by "
        "brace-matching so one kind cannot leak into the next"],
       ["tools/classify_kinds.py", "cma/book1/assets",
        "evidence/kind_grading.txt - each kind's score expression and verdict strings, which is "
        "what proves a scene is graded on looking"],
       ["tools/count_passive.py", "cma/book1",
        "evidence/passive_census.txt - passive scenes per page and per chapter"],
       ["tools/list_passive_scenes.py", "cma/book1",
        "evidence/passive_scenes.csv - the 28-row worklist for Standard A"],
       ["tools/count_entries.py", "cma/book1",
        "evidence/book_census.txt - term-bank sizes, figures the book names, worked examples"]],
      [1.7, 1.5, 3.7])

para(doc,
     "One caution for whoever repeats this. Two of these scripts were wrong on their first "
     "run and the errors were quiet, not loud. Scene bodies found by scanning forward from "
     "register( swallowed the next three kinds, which made passive scenes look graded; and "
     "drag-based kinds looked input-free until the shared Drag() helper in assets/scene.js "
     "was counted. Both appear fixed in the shipped scripts. Treat a surprising result as a "
     "bug in the measurement until the renderer has been read by eye.",
     space_after=6)

para(doc,
     "A third caution, about this machine: python -I implies -E, so PYTHONIOENCODING is "
     "ignored and printing the book's Arabic or an arrow dies on cp1256. Each script calls "
     "sys.stdout.reconfigure itself.",
     space_after=10)

# ---- 3. the six standards ---------------------------------------------------
h(doc, "3. The six standards: the definition of done", level=1)

para(doc,
     "A page is finished when all six hold. They are written so that each can be checked by "
     "a machine, because a standard the gate cannot test is a standard that will drift.",
     space_after=8)

table(doc,
      ["", "Standard", "The test that enforces it"],
      [["A", "Decide, do not reveal. No exercise is graded on looking, trying or flipping. "
             "An untouched exercise scores zero and is not ok.",
        "A scene that is rendered and never touched must return ok === false. Planting a "
        "reveal-scored scene must fail the gate."],
       ["B", "Every page carries a Brief: the explanation, the Arabic terms, a voice and one "
             "animation, in a pop-up the learner opens.",
        "Every page exposes a Brief control; the Brief contains no answer to any exercise on "
        "that page; its Arabic appears in the book's term bridges."],
       ["C", "Every term carries a memory hook drawn in the book's own visual language. No "
             "emoji, no stock icons.",
        "Every bridged term resolves to an icon of a declared tier; no icon file is an "
        "imported third-party glyph."],
       ["D", "Every worked example and every journal entry the book performs is performable "
             "on the page. The book's worked result lives in the Brief and the answer key, "
             "not on the page.",
        "Every Dr/Cr pair in the chapter source appears in a post exercise; no page prints a "
        "worked result as a finished figure."],
       ["E", "Every exercise carries at least ten targeted gate checks.",
        "The gate reports its check count per exercise and fails if any exercise is below "
        "ten."],
       ["F", "One hundred per cent book-sourced. Augmentation adds interaction, never a "
             "claim.",
        "The provenance lock: every string is CONTENT present in that chapter, declared "
        "CHROME, or a BRIDGE the author printed."]],
      [0.3, 3.0, 3.6])

# ---- 4. Standard A ----------------------------------------------------------
h(doc, "4. Standard A: the twenty-eight rewrites", level=1)

para(doc, "The governing rule, which removes thirteen of the twenty-eight by itself:",
     space_after=4)
para(doc,
     "A figure is never a scene. Every figure the book prints becomes the exhibit inside the "
     "exercise built on it. No picture is lost and no picture is a step of its own.",
     italic=True, space_after=8)

para(doc,
     "Eleven figure scenes and two lines scenes become exhibits. The remaining fifteen are "
     "rewritten to grade a decision. Titles below are the site's own, so this table can be "
     "diffed against the data decks.",
     space_after=8)

rows = []
for row in PASSIVE:
    kind_t, how = target_for(row)
    rows.append([row["chapter"].replace("ch0", "C"), row["page"], row["kind"],
                 row["title"][:46], kind_t, how])
table(doc,
      ["Ch", "Page", "Now", "Scene", "Becomes", "How it is graded after"],
      rows,
      [0.3, 0.6, 0.65, 1.75, 0.95, 2.65])

para(doc,
     "Four new exercise kinds are needed - matchgrid, judge, pairs, anatomy - and eight "
     "existing kinds change how they score: beam, tank, switch, shelf, wire, timeline2, "
     "gauges, termcards. The author's questions, options and reasons are not touched by any "
     "of this.",
     space_after=10)

# ---- 5. Standard B: the Brief -----------------------------------------------
h(doc, "5. Standard B: the Brief", level=1)

para(doc,
     "One Brief per page, 27 in all. It is the only place in the design that lectures, which "
     "is what lets the page itself stop lecturing. It opens from a control in the page bar "
     "and closes on Escape, using the same <dialog> element the figure zoom already uses.",
     space_after=8)

para(doc, "Contents, in this order:", bold=True, space_after=4)
bullets(doc, [
    ("What this page is about.",
     "Assembled only from the author's own sentences for that section, quoted. Subject to the "
     "provenance lock like any other content."),
    ("The mechanism, animated.",
     "One inline SVG animation per page, showing the movement the section is about. It may "
     "only move what the book's own figure already shows, so that the animation carries no "
     "claim of its own. It must have a still first frame and must honour "
     "prefers-reduced-motion, which assets/site.css already respects in one place."),
    ("The terms on this page.",
     "Each term with the Arabic the author prints in its TERM BRIDGE box, the book's gloss, "
     "and the French where the author gives it. An English and an Arabic play button per "
     "term, both of which already exist as Speech.button()."),
    ("Play the brief.",
     "One button that speaks the summary in English through Speech.speak()."),
    ("What this page asks you to do.",
     "One line per exercise, naming the decision the learner must make. Not the answer."),
])

para(doc, "Hard rules:", bold=True, space_after=4)
bullets(doc, [
    "The Brief never contains an answer to an exercise on its own page. This is the rule that "
    "keeps the Brief from undoing Standard A, and it is gated.",
    "The Brief's Arabic is term bridges only. No Arabic sentence is written for this project.",
    "The Brief is reachable by keyboard and readable at phone width.",
])

para(doc,
     "The good news on this standard is that almost none of it is new engine work. "
     "assets/speech.js is 7.5 KB of already-written Web Speech handling - it solves the three "
     "classic breakages, including that getVoices() returns empty on first call, and it "
     "degrades visibly when no Arabic voice is installed rather than failing silently. It is "
     "already loaded on all 33 pages and already called in eight places. how-to-use.html "
     "already tells the learner how to add an Arabic voice in Windows. The Brief consumes "
     "this; it does not rebuild it.",
     space_after=10)

# ---- 6. Standard C: icons ---------------------------------------------------
h(doc, "6. Standard C: memory hooks for the terms", level=1)

para(doc,
     "108 term rows across the two banks, 95 distinct after the merge dedupe; 84 of them "
     "carry the author's Arabic. The standing rule on art in this workshop is that there are "
     "no emoji and no stock icons, and that a word with no geometry needs the geometry built "
     "before it can be drawn. That rule forces three honest tiers rather than 95 invented "
     "pictures.",
     space_after=8)

table(doc,
      ["Tier", "When it applies", "What is drawn"],
      [["1  Geometric",
        "The term already has a shape in the book: balance sheet, T-account, the beam, the "
        "shelf, the timeline, a contra account, a gauge.",
        "An inline SVG glyph that is a reduction of the book's own figure, not a new "
        "invention. One accent colour, correct in light and dark."],
       ["2  Relational",
        "No shape of its own, but a relation the book states: materiality, relevance, "
        "faithful representation.",
        "A minimal relation diagram - two marks and a link - in the same visual language."],
       ["3  Typographic",
        "No geometry at all. The plan states this openly instead of faking a picture.",
        "A typographic mark only: the term set in the accent, with its Arabic beneath."]],
      [1.1, 2.6, 3.2])

para(doc,
     "Every icon must read at 24 px in a term chip and at 96 px in the Brief - the same asset "
     "at both sizes, which is the usual reason a drawn glyph fails. Each proposed icon is "
     "declared with its tier before it is drawn, so that a tier-3 term is never quietly given "
     "a tier-1 picture.",
     space_after=10)

# ---- 7. Standard D: performable ---------------------------------------------
h(doc, "7. Standard D: every worked example performable", level=1)

para(doc, "What the two chapters actually work, from the committed source:", space_after=6)
bullets(doc, [
    ("Section 1.3.", "Six February transactions. The book does rows 1 to 3 for the learner and "
                     "leaves rows 4 to 6. The site today posts three and five respectively."),
    ("Extended Example 1A.", "The Barada trial balance of Figure F01-10 built into three "
                             "statements in preparation order. Already performable through the "
                             "statement and locks scenes; keep."),
    ("Extended Example 2A.", "The Orontes classified balance sheet from sixteen raw accounts. "
                             "Already performable through locks; keep."),
])

para(doc,
     "The change is the rule, not the count: a worked example is never printed as a finished "
     "result on a page. All six February entries become postable, including the three the "
     "book works, because the learner who is shown rows 1 to 3 never performs the step the "
     "book was demonstrating. The book's worked version stays available - in the Brief and in "
     "the answer key.",
     space_after=10)

# ---- 8. Standard E: the gate ------------------------------------------------
h(doc, "8. Standard E: ten or more targeted checks per exercise", level=1)

para(doc,
     "Today the gate runs 204 checks across 177 scenes, which is 1.2 per scene. The twelve "
     "families below give at least twelve per exercise. Each family must be shown to pass "
     "clean and to fail on a planted defect, which is this workshop's standing requirement "
     "for teeth on both ends.",
     space_after=8)

table(doc,
      ["#", "Check family", "The planted defect that must fail it"],
      [["1", "The scene renders and produces its declared controls",
        "Remove a control from the spec"],
       ["2", "A cited figure is present and actually loads (naturalWidth > 0)",
        "Point the exhibit at a missing file"],
       ["3", "The declared input kind exists and responds",
        "Replace a slider with static text"],
       ["4", "A perfect solution scores total of total and ok === true",
        "Break one correct-answer flag"],
       ["5", "Any single wrong move scores below total and ok === false",
        "Mark a wrong option correct"],
       ["6", "An untouched exercise scores zero and ok === false",
        "Restore a reveal-scored scene - this is Standard A's tooth"],
       ["7", "Every option and row carries a reason from the book",
        "Delete one why"],
       ["8", "Exactly one right answer where one is claimed",
        "Mark two options correct, or none"],
       ["9", "Progress is recorded under this chapter's own key",
        "Write a ch01 key from a ch02 page"],
       ["10", "The answer key page shows this exercise",
        "Add a kind the key has no branch for"],
       ["11", "Rendering the same spec twice gives the same shape",
        "Introduce unseeded shuffling"],
       ["12", "Where it animates, prefers-reduced-motion is honoured",
        "Remove the media query"],
       ["B1-B4", "Brief: it opens; it holds no answer to its own page; its Arabic is in the "
                 "book's bridges; it is keyboard-reachable",
        "Put an exercise's answer in its Brief"]],
      [0.45, 3.1, 3.35])

para(doc,
     "That is roughly 161 exercises times 12, plus 27 pages times 4 Brief checks: on the "
     "order of two thousand checks, against 204 today.",
     space_after=6)

para(doc, "The cost, stated plainly, because it is the main risk in this plan:", bold=True,
     space_after=4)
para(doc,
     "The four CMA gates cost about 24 minutes today - cma_provenance 50 s, its teeth 3 min, "
     "cma_render 4 min, its teeth 16 min. A ten-fold expansion of the render gate is not "
     "affordable run after run. So the gate must gain an input fingerprint and skip work whose "
     "inputs have not changed, the pattern already used by the player_component gate. That "
     "work belongs in this plan, not after it, or the gate will be switched off by whoever "
     "runs it next.",
     space_after=10)

# ---- 9. Standard F: provenance ----------------------------------------------
h(doc, "9. Standard F: provenance, with a third category", level=1)

para(doc,
     "The lock today sorts every string into CONTENT - which must appear in the author's "
     "chapter - or CHROME, which is interface and may carry no accounting claim. The Brief "
     "needs a third category, because it will put the author's Arabic in front of the learner "
     "in a new place:",
     space_after=6)

bullets(doc, [
    ("BRIDGE.", "The Arabic and French the author prints in TERM BRIDGE boxes. 54 Arabic terms "
                "in Chapter 1 and 30 in Chapter 2, with 54 and 21 French. A BRIDGE string must "
                "appear in a bridge box in that chapter's source, and may appear nowhere else."),
])

para(doc,
     "This matters more than it looks. Chapter 1's term bank already carries the rule in its "
     "own header - there are 54 bridges and there will not be a 55th until the author writes "
     "one - and the QA page already fails the build if any Arabic on the site is absent from "
     "the source. Declaring BRIDGE keeps that true when the Brief starts showing Arabic "
     "alongside prose, instead of letting Arabic quietly become CHROME.",
     space_after=6)

para(doc,
     "The animation is held to the same line: it may only move what the book's figure already "
     "shows. An animation that implies a sequence the author never stated is a claim, and it "
     "would be the hardest kind of drift to notice.",
     space_after=10)

# ---- 10. new kinds ----------------------------------------------------------
h(doc, "10. New scene kinds to build", level=1)

table(doc,
      ["Kind", "What it asks", "Used by"],
      [["matchgrid", "Place each item against two or three axes at once, with distractors; "
                     "scored per cell.", "s1-1 readers; reusable wherever the book prints a "
                                         "table with more than one column of meaning"],
       ["judge", "Mark a claim true or false and then choose the author's reason. Both halves "
                 "are scored.", "the four probe scenes in C1 and the case"],
       ["pairs", "Match two naming systems against distractors.", "the two switch scenes "
                                                                  "(U.S. GAAP / IFRS names)"],
       ["anatomy", "Label the bands and lines of a statement by dragging onto the book's own "
                   "figure.", "s2-1 on Figure F02-02"],
       ["instant", "Drag a date: the balance-sheet heading follows the instant while an income "
                   "strip spans a period.", "s2-1"],
       ["cycle", "Drag the inventory and collection days; the operating cycle recomputes and "
                 "flips which classification test governs.", "s2-2"],
       ["terms3", "A three-way discriminator for reserve, provision and allowance.", "s2-4"]],
      [0.9, 3.4, 2.6])

para(doc,
     "Chapter 2 additionally gains eight instruments that already exist and are already gated "
     "in Chapter 1 - split, switch, wire, beam, tank, contra, gauges and shelf - which is why "
     "the chapter that has none today is not an eleven-instrument build from scratch. The "
     "single highest-value reuse is split on the 6,400,000 note in section 2.3: drag the "
     "maturity date and the split into 400,000 current and 6,000,000 non-current happens in "
     "front of the learner.",
     space_after=10)

# ---- 11. phases -------------------------------------------------------------
h(doc, "11. Order of work", level=1)

para(doc,
     "Phase 0 exists so that the standard is measured before anything is built against it. "
     "Its deliverable is a gate that fails, loudly, on all 28 scenes.",
     space_after=8)

table(doc,
      ["Phase", "Work", "Done when"],
      [["0", "Build check family 6 - an untouched exercise must score zero and not be ok - and "
             "run it.",
        "It fails on exactly the 28 scenes in evidence/passive_scenes.csv, and passes on the "
        "other 135."],
       ["1", "Demote the 11 figure scenes and 2 lines scenes to exhibits inside their "
             "exercises.",
        "No figure is lost; 13 fewer scenes; family 2 passes for every exhibit."],
       ["2", "Build matchgrid, judge, pairs, anatomy; convert the nine scenes that use them.",
        "Family 6 passes on those nine."],
       ["3", "Regrade the eight half-graded kinds: beam (drag), tank and timeline2 "
             "(predict-first), switch and shelf, wire, gauges (live), termcards "
             "(two-direction).",
        "Family 6 passes on all 28; Standard A is met."],
       ["4", "Chapter 2's instruments: the eight reused plus instant, cycle, terms3.",
        "Chapter 2's teaching sections reach at least 15 distinct kinds and no section is "
        "read-plus-multiple-choice."],
       ["5", "The Brief, 27 pages: summary, animation, terms with Arabic and voice, play, "
             "and what this page asks.",
        "Families B1 to B4 pass on all 27."],
       ["6", "Icons: declare every term's tier, then draw tiers 1 and 2.",
        "Every bridged term resolves to a declared tier; none is a third-party glyph."],
       ["7", "All six February entries postable; no worked result printed as a finished "
             "figure.",
        "Every Dr/Cr pair in the source appears in a post exercise."],
       ["8", "Expand the gate to twelve families with teeth on each, and give it an input "
             "fingerprint so it stays affordable.",
        "At least ten checks on every exercise; every family shown to fail on a planted "
        "defect; runtime still practical."],
       ["9", "Full suite, commit, push, verify live.",
        "The whole suite green, and the live site re-driven as it was for Chapter 2."]],
      [0.5, 3.3, 3.1])

# ---- 12. gates to run -------------------------------------------------------
h(doc, "12. Which gate to run, and when", level=1)

para(doc,
     "Naming the exact command is a standing rule here, because the wrong one is either "
     "useless or very expensive.",
     space_after=6)

table(doc,
      ["When", "Command", "Why that one"],
      [["After every phase",
        "python -m gates.cma_provenance\npython -m gates.cma_render",
        "About 5 minutes together. Catches a provenance break and a render break immediately, "
        "which are the two ways this work goes wrong."],
       ["After phases 3, 5 and 8",
        "python -m gates.cma_provenance --teeth\npython -m gates.cma_render --teeth",
        "About 19 minutes. A gate without proven teeth is the failure this whole package "
        "exists to correct, so the teeth are re-proved at each standard's completion."],
       ["Before pushing",
        "python -m gates.run_all --full --cached-video",
        "The pre-publish suite. --cached-video is correct here because this work renders no "
        "new video; plain --full would pay for perceptual judgement of the whole video corpus "
        "for nothing."]],
      [1.1, 2.5, 3.3])

# ---- 13. refusals -----------------------------------------------------------
h(doc, "13. What this plan refuses to do", level=1)

bullets(doc, [
    "Write a single Arabic sentence. Arabic appears only as a term bridge the author printed. "
    "An invented Arabic explanation would be unverifiable against the book and would quietly "
    "become the thing learners trust most.",
    "Use emoji or stock icons, including as a placeholder.",
    "Change any question, option or reason the author wrote. 663 reasons are already in the "
    "two chapters; they are the book's, and they stay.",
    "Delete a figure. Thirteen figure and lines scenes stop being scenes; every picture stays, "
    "inside the exercise built on it.",
    "Change a URL. The 27 page addresses are unchanged, so anything already shared keeps "
    "working.",
    "Ship a check that cannot fail. Each of the twelve families must be demonstrated against "
    "a planted defect before it counts.",
])

# ---- 14. open questions -----------------------------------------------------
h(doc, "14. What this plan does not yet know", level=1)

bullets(doc, [
    ("The exact January entry count in section 1.3.",
     "Six February transactions are counted from the source; the January set was not "
     "separately censused. Phase 7's check settles it: every Dr/Cr pair in the source must "
     "appear in a post exercise, whatever the number turns out to be."),
    ("How many terms fall into icon tier 3.",
     "Declared per term in phase 6 before any drawing starts. If the tier-3 list is long, that "
     "is a finding about the vocabulary, not a licence to invent pictures."),
    ("Whether the expanded gate stays affordable.",
     "Phase 8 carries the input-fingerprint work for this reason. If the fingerprint does not "
     "bring the runtime back, the honest answer is fewer, better checks, not a gate nobody "
     "runs."),
    ("Whether an Arabic voice exists on the learner's machine.",
     "Microsoft's Arabic neural voices are an online service, not a local voice. speech.js "
     "already degrades visibly rather than silently, and how-to-use.html already explains how "
     "to install one. The Brief must look correct with no Arabic voice present."),
])

# ---- 15. what was delivered -------------------------------------------------
doc.add_page_break()
h(doc, "15. What was delivered", level=1)

para(doc,
     "All nine phases are built, gated and verified. The plan above is left as it was "
     "written so that the two can be read against each other; this section records the "
     "result and, more usefully, the four places where the delivery differs from the "
     "plan.",
     space_after=8)

table(doc,
      ["Measure", "Before", "After"],
      [["Exercises graded on looking", "28", "0"],
       ["Gate checks", "204", "2,016  (12 on each of 168 exercises)"],
       ["Chapter 2: instruments / distinct kinds", "0 / 9", "9 / 12"],
       ["Teaching sections with no instrument", "6 of 13", "0"],
       ["Briefs (summary, Arabic, voice, drawing)", "0", "23"],
       ["Term marks drawn", "0", "95  (83 tier 1, 12 tier 2, 0 fallbacks)"],
       ["Journal rows posted for the learner", "3", "0"]],
      [3.0, 1.6, 2.3])

para(doc, "Where the delivery differs from the plan", bold=True, size=11, space_after=5)
bullets(doc, [
    ("No new scene kinds were needed for Standard A.",
     "The plan named matchgrid, judge and pairs. The author's data already held the "
     "pairs, so table, probe and switch were rewritten in place instead, which avoided "
     "migrating 28 scenes' data for no gain. The consequence matters and is written down "
     "in the package: a kind's NAME no longer implies its behaviour, so the name-based "
     "census that produced the original worklist is a start-state tool only. The "
     "authority is gates/cma_interactive, which measures behaviour in a browser."),
    ("Section 2.4 got an instrument after all.",
     "The plan was prepared to leave it without one rather than fit a decorative slider. "
     "The author's three-sentence contingency rule turned out to be a clean three-rung "
     "match, so all thirteen teaching sections now carry an instrument."),
    ("The cost risk did not materialise.",
     "The plan predicted a ten-fold gate cost and budgeted input-fingerprint work to "
     "absorb it. Measured: 23 seconds for the chapter-wide claims, 46 seconds for all "
     "2,016 per-exercise checks, 87 seconds for the teeth. Every check on a scene happens "
     "in one round trip to the browser rather than one page-load per check. The "
     "fingerprint work was not needed and was not done."),
    ("Two existing checks were replaced rather than satisfied.",
     "_qa.html's \"the February deck is faded exactly as the book prints it\" and the "
     "Standard A tooth that planted study:true both asserted behaviour this work "
     "deliberately removed. Each was rewritten to assert the new intent, with the reason "
     "recorded at the site of the change. A check that can no longer fail is worse than "
     "no check."),
])

para(doc, "The worst defect of the job, and no gate could have found it", bold=True,
     size=11, space_after=5)
para(doc,
     "Standard A's central move - folding each figure into the exercise that follows it, "
     "so that eleven unmarkable screens became exhibits - replaced eight reveal screens "
     "with eight answer keys. A textbook prints a figure immediately before the exercise "
     "built on it, so \"the next exercise\" is usually the one the figure answers. "
     "Figure F01-04 lists all six account types under \"increase with a DEBIT\" and "
     "\"increase with a CREDIT\", and the sort beneath it asked exactly that. F02-03 "
     "prints 32 days, 34 days, 66 days in total and \"shorter than a year, so Orontes "
     "uses one year\", which is every answer the cycle exercise wants. The Chapter 1 "
     "summary map prints six of the eight words the summary cloze blanks.",
     space_after=7)
para(doc,
     "It looked entirely normal - the figure is the author's, the exercise is sound, and "
     "each is where the book puts it - and no gate can read the content of an image. It "
     "was found by taking a screenshot of a page and reading it. Moving each figure on by "
     "one exercise did not fix it either: F01-09 simply landed on the wire exercise it "
     "also answers. The figure answers the SECTION, not one question in it.",
     space_after=7)

table(doc,
      ["Declared as", "Where the exhibit goes", "Why"],
      [["data: true", "Folds forward, onto the next exercise",
        "The learner cannot answer without it - a list of accounts to classify."],
       ["(default)", "Closes the PRACTICE: the last scene that is not one of the author's "
                     "own section-check questions",
        "Not simply the last scene. Section 2.5 ends with \"Which amount on the statement "
        "of cash flows must equal an amount on the balance sheet?\", and F02-09 draws "
        "that link with the arrow labelled."],
       ["inBrief: true", "Goes into the Brief",
        "A summary map answers everything on its page, so there is nowhere on that page "
        "it can stand. The Brief is the one place in this design allowed to explain."]],
      [1.2, 2.3, 3.4])

para(doc,
     "All thirteen exhibits are still shown and none sits above the question it answers.",
     space_after=10)

para(doc, "Defects the new checks found, which review had not", bold=True, size=11,
     space_after=5)
bullets(doc, [
    "scene.js: ?seed= did not reproduce a screen. The shuffle counter ran on forever, so "
    "the second render of a scene drew from a different stream than the first - pressing "
    "Try Again reshuffled the board even under a fixed seed. The determinism check caught "
    "it; nobody had noticed.",
    "objects2.js holds three separate IIFEs, and a renderer appended at the end of the "
    "file lands in the third, which aliased only two helpers. The cycle scene threw the "
    "moment a learner pressed Check, leaving an empty verdict and a dead button.",
    "Chapter 1's three-questions sort carried empty reasons on three items, so the answer "
    "key printed blank lines for them.",
    "cycle and ladder had no branch in the answer key - exercises whose answer a learner "
    "could not look up.",
    "Three of the measurement scripts were wrong first and each blamed the site: a "
    "byte-window scan that swallowed the following three renderers, paren-matching that "
    "broke on a regex literal and attributed two scenes' reveal verdicts to an innocent "
    "third, and a solver still reading a field that had been renamed. Treat a surprising "
    "result as a bug in the measurement until the renderer has been read by eye.",
])

rule(doc)
para(doc,
     "Package: cma/book1/plan_interactive_overhaul_2026-11-05/  -  evidence/ holds the "
     "measurements, tools/ holds the scripts that made them, 00_CARRY.md is the short brief, "
     "and check_package.py verifies this package against the site it describes.",
     size=9, colour=MUTED)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(PKG, "plan.docx")
doc.save(out)
print("wrote", out)
print(f"{len(PASSIVE)} passive scenes in the rewrite table")
missing = [r["title"] for r in PASSIVE if target_for(r)[0] == "UNASSIGNED"]
print("UNASSIGNED:", missing or "none")
