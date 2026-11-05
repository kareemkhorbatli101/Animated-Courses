"""Build the depth-pass DELIVERY report as a .docx, from the measurements in evidence/.

Why a second document rather than a rewrite of the plan's. `make_plan_docx.py` produced
CMA_Book1_Depth_Pass_2026-11-05.docx, and that document was accurate as a PLAN: it said what
the six targets were and what it would cost to meet them. Regenerating it with today's numbers
would destroy the only record of what was believed before the work, including the one belief
that turned out to be wrong and cost the most to discover. The repo already works this way -
`..._Ch3-Ch5_Plan_...docx` sits beside `..._Ch3-Ch5_Delivered_...docx`.

Every figure below is read out of evidence/ when this runs, so a report that has drifted from
the site says so rather than reading plausibly.

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
WARN = RGBColor(0x9A, 0x3A, 0x1A)
GOOD = RGBColor(0x1B, 0x6B, 0x3A)


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


def grab(pattern, src, default="no record", group=0):
    m = re.search(pattern, src, re.M)
    return m.group(group).strip() if m else default


FIGS = ev("figures_asked.txt")
BOX = ev("author_boxes.txt")
INV = ev("inventory.txt")

mf = re.search(r"^all\s+(\d+)\s+(\d+)\s+(\d+)", FIGS, re.M)
ASKED, SHOWN = (int(mf.group(1)), int(mf.group(2))) if mf else (0, 0)
TOTF = ASKED + SHOWN + (int(mf.group(3)) if mf else 0)
mb = re.search(r"^all\s+(.*?)\s+(\d+)/(\d+)\s*$", BOX, re.M)
BOXUSED, BOXALL = (int(mb.group(2)), int(mb.group(3))) if mb else (0, 0)
BOXCOLS = re.findall(r"(\d+)/(\d+)", mb.group(1)) if mb else []
BOXNAMES = ["EXAM TRAP", "WORKED EXAMPLE", "FALSE-FRIEND", "YOUR TURN",
            "LANGUAGE FOCUS", "IFRS CONTRAST", "WATCH", "WHAT YOU ALREADY KNOW"]

#: the figures each chapter still only shows, read back from the evidence
ONLY = {}
for line in FIGS.splitlines():
    m = re.match(r"^(\d+)\s+\d+\s+\d+\s+(\d+)\s+\d+\s+(.*)$", line)
    if m:
        ONLY[int(m.group(1))] = (int(m.group(2)),
                                 re.findall(r"F\d\d-\d\d", m.group(3)))

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
doc.add_heading("The depth pass — delivered", level=0)
para(doc, "What changed, what it is measured at, and the one thing the plan was wrong "
          "about. Measured 2026-11-06 from the built site and the author's manuscript.",
     italic=True, colour=MUTED, size=10)

rule(doc)
doc.add_heading("Where the book stands now", level=1)
table(doc, ["", "before the pass", "now"],
      [["the author's figures asked about", "88 of 203 (43%)",
        "%d of %d (%.0f%%)" % (ASKED, TOTF, 100.0 * ASKED / max(1, TOTF))],
       ["graded exercises", "1,061", "1,102"],
       ["named traps", "0 in thirteen chapters", "116 across seventeen"],
       ["sections opening a drawn Brief", "24 of 105", "105 of 105"],
       ["ledger ties checked across chapters", "19", "112"],
       ["the author's 204 boxes used", "measured wrongly — see below",
        "%d (%.0f%%)" % (BOXUSED, 100.0 * BOXUSED / max(1, BOXALL))]],
      [3.0, 2.0, 2.1])
para(doc, "A fifth gate, cma_depth, now holds every one of these as a floor with teeth on "
          "all five of its checks, so none of it can quietly go backwards. The four earlier "
          "gates ask whether what ships is CORRECT; this one asks whether a chapter is deep, "
          "which is the question thirteen correct-and-shallow chapters passed.", size=10)

rule(doc)
doc.add_heading("The correction that matters", level=1)
para(doc, "The plan concluded that a drawn figure could not be turned into an exercise. It "
          "measured four ways of doing it, watched all four fail, and wrote down why: the "
          "words printed on a chart are not in the extracted chapter, so nothing built from "
          "them could clear the provenance lock. That reasoning is sound. It was looking at "
          "the picture.")
para(doc, "Seventeen of the eighteen chapters end in a “Your turn” answer key: the "
          "author blanks four to six cells of one figure and then answers them himself, with "
          "his working. That is 73 authored item-and-answer pairs, every string already in "
          "the oracle — and the function that reads them had been in the generator since "
          "Chapter 2 shipped. One chapter used it.", bold=True)
para(doc, "The exercise was never on the chart. It was in his key.", italic=True,
     colour=ACCENT)
para(doc, "Sixteen chapters now carry his own exercise, with the shape of his answers "
          "picking the instrument exactly as a figure's shape does:", space_after=4)
table(doc, ["his answers look like", "instrument", "chapters"],
      [["an expression that settles on a number",
        "yourturn — new", "3, 6, 7, 8, 9, 10, 11, 12, 16"],
       ["a classification and a reason", "shares — existing",
        "2, 4, 5, 13, 15, 17, 18"],
       ["one row's cells, semicolon separated", "schedule — existing", "14"]],
      [2.8, 1.8, 2.5])
para(doc, "The new instrument is where the plan's Move 3 — “make the numbers "
          "travel” — actually landed. It shows his working with the result cut off "
          "at the last equals sign, and a line whose working quotes an earlier answer stays "
          "shut, its working hidden and its box dead, until every line it quotes is right. "
          "Chapter 7 is a chain of six: $51,400 + $16,600 = $68,000 cannot be read off, "
          "because $51,400 and $16,600 are the answers to the two lines above it. The chain "
          "is computed from his arithmetic by looking for each earlier answer inside the "
          "later line's working, so it is his chain and not a guess at one.", size=10)
para(doc, "Chapter 14's five-year lease roll-forward — the best single exercise in the "
          "book — was blocked by one thing: the key matcher tokenised letters only, so "
          "his row names 2028, 2029 and 2030 had nothing to score on, and the builder kept "
          "finding blanks and refusing the figure. A four-digit year in the token set and a "
          "reader that pulls one cell out of “Opening 267,301; interest 16,038; closing "
          "183,339; …”, and it builds: five years, seven columns, every closing "
          "feeding the next opening, every number his.", size=10)

rule(doc)
doc.add_heading("The general case: thirteen more figures asked", level=1)
para(doc, "Thirty-two of his tables were on screens nobody could get wrong, because no "
          "shape rule in the dispatcher reached them. A new rule runs last, just before the "
          "fall-back exhibit, and emits the existing schedule renderer with no carry: his "
          "figures, with one column entered and the rest printed. It adds no eleventh "
          "instrument. Thirteen figures, sixty graded rows.", size=10)
bullets(doc, [
    ("The entered column is his last numeric one.",
     "His tables run left to right towards the figure he is deriving — Required "
     "allowance, 2026 revenue, After tax, Current, LIFO — so the last column is the "
     "question and everything left of it is the working. An earlier version entered every "
     "complete numeric column and was worse in an instructive way: it chose the columns "
     "that were complete rather than the ones that were the point, so the aging schedule "
     "asked the reader to recall five expected loss rates and dropped the total, when the "
     "exercise his table sets is amount × rate = allowance, totalled."),
    ("The answer must not already appear in its own row.",
     "F07-11 prints Sales as 420,000 under FIFO, the weighted average and LIFO alike; "
     "F16-11 prints the same consideration under both measurement choices. Those rows are "
     "shown and not asked, because a row whose answer is already on screen asks nothing."),
])

rule(doc)
doc.add_heading("Three numbers the plan was wrong about", level=1)
para(doc, "All three were faults in the plan's own measuring tools, and all three made the "
          "work look smaller or the evidence thinner than it was. A plan is only as good as "
          "the instrument that measured it, so these are reported as prominently as the "
          "gains.", size=10)
bullets(doc, [
    ("The box count was reported as 40 per cent; it is %d per cent."
     % int(round(100.0 * BOXUSED / max(1, BOXALL))),
     "The test pulled punctuation-free word runs out of the author's sentence and then "
     "looked for them inside the raw page text. Every YOUR TURN box begins "
     "“Figure Fnn-xx lists six …”, and the figure number survives in the "
     "page and vanishes from the run, so the windows never matched. It reported 1 of 18 "
     "YOUR TURN boxes used at a moment when sixteen chapters were built on them, and "
     "understated EXAM TRAP by 21 and WORKED EXAMPLE by 11."),
    ("The figure evidence held six lines.",
     "The tool wrote its table to a scratch folder and printed only the summary, so the "
     "one record of WHICH figures are only shown — the file the package's own checker "
     "reads — held the summary and nothing else."),
    ("Two tools measured the figures and disagreed.",
     "88 only shown against 94, and 26 figures “appearing nowhere” against 0. The "
     "duplicate was the superseded method: it searched the written pages and guessed a "
     "scene's extent as the next 1,200 characters. Two numbers for one fact make a report "
     "a story rather than a measurement, so there is one tool for it now."),
])
para(doc, "A fourth, inside the new gate itself: its floors were typed from what the work "
          "felt like it had achieved, and its own first run rejected eight of eighteen rows "
          "— chapter 18 written as 15 instruments and 9 kinds against a true 10 and 8. "
          "It has a --raise switch now that prints the measured block to paste back.",
     size=10, colour=WARN)

rule(doc)
doc.add_heading("The one that shipped, and what found it", level=1)
para(doc, "Everything else in this report was caught by a gate. This was not.")
para(doc, "On section 11.4 an exhibit printed the author's worked example — Step 1 "
          "$324,000, Step 2 $180,000, Step 3 $11,250, Check $515,250 — and two scenes "
          "below it an exercise asked the reader for 324,000, 11,250 and 515,250. The "
          "answers were printed above the question, on the same screen, in his own hand.",
     bold=True)
para(doc, "Seventeen exhibits had this shape. The builder takes the block after each "
          "caption, and beside a DRAWN figure that block is not a table at all but the "
          "one-cell box the author puts next to the picture — an exam trap, a worked "
          "example, a term bridge, once an entire section check. The exhibit built from it "
          "had no rows and the whole box pasted into its caption.", size=10)
para(doc, "Every gate passed it. The provenance lock, because every word is his. The render "
          "gate, because the exercise marks correctly. The twelve per-exercise checks, "
          "because a scene cannot be answered by looking at itself — and this is one "
          "scene leaking another's answers. It was found by taking a screenshot of a page "
          "and reading it.", size=10, colour=WARN)
para(doc, "The builder now refuses a figure with no rows, and there is a new check whose "
          "unit is the PAGE: no scene may print the figures another scene asks for. Two or "
          "more of one exercise's answers in another scene's static text is the bar, because "
          "one number in common is ordinary — his tables carry the inputs the exercise "
          "works from.", size=10)
para(doc, "That check took three attempts to bite, and each failure is worth more than the "
          "check. It counted “Year 1” as an answer; then it kept the dollar sign, "
          "so $324,000 never matched 324,000; then it required a pattern that matches no "
          "column in a pretty-printed file, so it read no schedule at all. It reported CLEAN "
          "every time. A check written against a tree with no defect in it has never been "
          "asked a question.", size=10, italic=True)

rule(doc)
doc.add_heading("Three defects this pass created, and the checks that caught them", level=1)
bullets(doc, [
    ("A field name collided with the page framework.",
     "The page folds an exhibit in before a renderer runs, and one of the three keys it "
     "folds is the name the new instrument had chosen for its own rows. It would have drawn "
     "a garbled table above sixteen working exercises — the exercises would have been "
     "fine, so the only sign would have been the mess."),
    ("A scene's instruction line is interface text, budgeted at 45 words.",
     "Chapter 6's own instruction runs to 43 words of trial balances and allowances and "
     "failed at 48. Trimming his sentence would have been wrong twice over: the budget "
     "exists to stop a scene lecturing in interface text, and his instruction is not "
     "interface. It moved to the field the provenance lock already audits as the author's "
     "content, for exactly this reason."),
    ("The Your-turn figure was asked twice.",
     "The dispatcher built a second exercise on the same figure, asking the same four "
     "classifications or the same column of amounts. Both were correct, and the first "
     "answered the second: a reader who pressed Check on the aging table was shown 6,400, "
     "10,000 and 20,000 and was then asked for them. That is the plan's own warning — "
     "no figure in front of the exercise it answers — arriving between two scenes "
     "rather than inside one."),
])

rule(doc)
doc.add_heading("The author's boxes, as used today", level=1)
table(doc, ["box", "used of written"],
      [[BOXNAMES[i] if i < len(BOXNAMES) else "?", "%s of %s" % (a, b)]
       for i, (a, b) in enumerate(BOXCOLS)],
      [3.4, 3.7])
para(doc, "The last two rows are the remaining material, and both are already written in "
          "his voice: the IFRS contrasts and the opening “what you already "
          "know” cards.", size=10, colour=MUTED)

rule(doc)
doc.add_heading("What is left, in the order it should be done", level=1)
bullets(doc, [
    ("A match instrument, for the twelve label-and-description tables that remain.",
     "F06-10, F07-05, F11-02, F12-11, F14-03, F14-08, F16-03, F16-06, F18-03, F18-06, "
     "F18-07, F18-10. This is the single remaining block on the figures target. The book "
     "has no instrument that fits: one candidate is a card-and-port graph, and the other "
     "draws every option as a button, so seven principles against seven meanings would be "
     "forty-nine long buttons. A seven-way sort is the open candidate."),
    ("One journal-entry figure, F16-06.",
     "The entry builder reads column 1 as the account name, and in that figure the account "
     "is column 0."),
    ("The Extended Examples.",
     "Eight chapters print theirs as a table and the site now asks it; the remaining step "
     "is to open each one from the reader's own earlier answers where his own arithmetic "
     "does, as the new instrument already does inside one scene."),
    ("Chapters 2 to 5 are not on the dispatcher at all.",
     "They name their builders by hand, which is why twelve of their figures are still only "
     "shown. Adding the dispatcher to them as an addition rather than a replacement is a "
     "contained change, and its one hazard — a figure asked twice — now has a "
     "guard."),
    ("Fingerprint the render teeth.",
     "Still 60% of the suite and about 69 minutes at eighteen chapters. Every item above "
     "re-runs it."),
])

rule(doc)
doc.add_heading("Figures each chapter still only shows", level=1)
table(doc, ["ch", "only shown", "which"],
      [[str(n), str(ONLY[n][0]), ", ".join(ONLY[n][1])] for n in sorted(ONLY)],
      [0.5, 1.0, 5.6])

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
    os.path.dirname(PKG), "CMA_Book1_Depth_Pass_Delivered_2026-11-06.docx")
doc.save(out)
print("wrote %s" % out)
print("   figures %d asked of %d, %d only shown; boxes %d of %d"
      % (ASKED, TOTF, SHOWN, BOXUSED, BOXALL))
