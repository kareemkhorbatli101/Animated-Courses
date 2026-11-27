# English for Dentists / English for Dental Students — handover

**Date:** 27 November 2026
**Repository:** `kareemkhorbatli101/Animated-Courses`
**Branch:** `claude/affectionate-franklin-ejx25i`
**Engine:** `coursegen2/` (second edition)

This document says what exists, what state it is in, what is known to be wrong,
and what a later session needs to pick the work up without re-reading the whole
history.

---

## 1  What exists

Two complete ten-unit volumes, each with a learner's book and a teacher's book.

| | Series | Level | Units | Pages | Figures |
|---|---|---|---|---|---|
| Book 1 | English for Dentists (practitioner) | A2.1 | 10 | ~950 | 1,316 |
| Book 1 | English for Dental Students (academic) | A2.2 | 10 | ~980 | 1,319 |

**Dentists A2.1 — *In the Chair***

1. Good Morning. My Name Is.
2. Open Wide: Looking in the Mouth
3. Taking a History Before You Look
4. Saying What You Are Going to Do
5. Agreeing How the Patient Stops You
6. Asking About Pain While You Work
7. Afterwards: What Is Normal and When to Telephone
8. The Patient Who Is Afraid
9. A Child in the Chair, and an Adult Beside It
10. When You Cannot Treat Today

**Dental Students A2.2 — *The Mouth and the Clinic***

1. The Mouth, Part by Part
2. The Dentition, and How We Number It
3. The Tooth in Section: From Enamel to Pulp
4. Surfaces, and How We Name Them
5. The Instruments on the Tray
6. The Finding, in One Sentence
7. The Periodontium, and What the Probe Measures
8. Caries: What Takes the Mineral Out, and What Puts It Back
9. The Radiograph, and What It Is Evidence Of
10. The Whole Examination, from Greeting to Plan

Every unit has nine parts, 8 core terms, 10 phrase-bank sentences, 3 listenings,
3 readings, 3 speaking tasks, 3 writing tasks, a fluency task, 3 discussion
cases and a 5-activity review. Every unit of both books passes the full gate set
with **0 failures and 0 warnings**. Every teacher's note passes `taudit.py`
clean: a model for every open task, all eight terms glossed in Syrian Arabic,
three case notes, eight of eight pronunciation notes.

---

## 2  The state of the built files

There are two generations of built file and they differ in one important way.

**Generation A (built 13:15–13:21 on 27 Nov).** Complete, ten units, slimmed to
300 dpi, page fit measured and converged to 34pt of white at the foot of every
part. **It carries the `langbank` defect described in §3.1.**

**Generation B (building at the time of writing).** Identical content, with the
`langbank` defect fixed and 29 additional picture figures added by the
exercise-visual fix. Needs the full four-pass measured fit, which takes about
50 minutes a book.

If the files you hold were sent before generation B finished, they are
generation A and the sixty "SAY IT LIKE THIS" boxes print Python. Everything
else in them is correct.

---

## 3  Known defects

### 3.1  FIXED in the engine: the case language box printed Python

A case's `language` field is `[(heading, [line, ...]), ...]`.
`render.langbank()` took a flat list of strings and ran each item through
`esc()`, which calls `str()`. Every one of the sixty boxes across the two
volumes — learner's book and teacher's book alike — printed its own repr:

```
('Offering him the decision', ['It would take about twenty minutes.',
 'If it is difficult it takes an hour.', 'Would you rather I started …'])
```

Present since part 9 became three cases in round three. Every gate passed every
time, because no gate reads the assembled document.

Fixed: `langbank()` renders a group as a heading with its lines beneath, and
still accepts a flat list for the first-edition builder. **Guard:**
`render.run()` now raises `TypeError` on a list, tuple, dict or set instead of
stringifying it.

### 3.2  FIXED: the exercise-visual gate counted by label alone

`check_exercise_figs` keyed its counts by exercise label, and labels restart at
every unit, so unit 1's `4.3` and unit 10's `4.3` shared a counter. Keyed per
unit, 31 exercises across the two books carried one visual where the design asks
for two — all of them tasks whose answers are whole sentences, where
`_terms_of()` had nothing short enough to draw.

Fixed: counts keyed `uNN label`; the picture visual falls back to four of the
unit's own core words when the task's own answers yield none.

### 3.3  FIXED: a cross-reference to an exercise that does not exist

The morphology figure in the previews of units 1–3 carried `xref='2.3'`. There
is no exercise 2.3 in any unit. It now points at 2.1.

### 3.4  OPEN: five identical tooth icons in the student book

Eight case word-card rows in Dental Students units 1, 2 and 4 draw two or fewer
distinct icons. In units 2 and 4 every word genuinely is a tooth or a tooth
surface, so the picture is accurate but carries no information.

`figs2._tooth_glyph()` can already draw `molar`, `premolar`, `canine` and
`incisor` shapes; `icon_cards()` cannot use them. The fix is to let a card
request a tooth-type glyph so that unit 2's row shows four visibly different
teeth. It changes figure heights, so it needs a refit.

### 3.5  OPEN: the picture-visual fallback is a safety net, not authorship

The 31 exercises in §3.2 now get four of the unit's core words, rotated by label
so neighbours differ. That is better than nothing and worse than a chosen set.
Each of those exercises should be given its own `pics=[...]` list, picked for
that exercise. Mechanical, about an hour, and it needs a refit.

### 3.6  OPEN: only the closing page of each part is measured

`fitpass.py` measures the page a part's closing figure lands on and nothing
else. A part's *opening* page can still end with 200pt of white under a figure
that would not fit. Extending the measurement to every page is the single
biggest remaining improvement to the printed object.

### 3.7  OPEN: no gate validates a cross-reference label

§3.3 existed because nothing checks that an `xref` names a task that exists. A
gate that collects every task label in a unit and fails on an `xref` outside
that set would have caught it on the day it was written.

### 3.8  OPEN: the student book's subtitle no longer fits

*The Mouth and the Clinic* described a book whose second half was the clinic and
its rules. Units 6 to 10 are now the finding, the chart, caries, the radiograph
and the whole examination. Something like *The Mouth, the Chart and the Record*
would be honest. Renaming changes the output filename.

### 3.9  OPEN: the photocopiable page is text only

Every teacher's note ends with a photocopiable page built from plain lines
(`fig=None` in all twenty). It is the page a teacher actually hands out and it
is the only page in either book with no rendered figure on it.

---

## 4  Content still needed

### 4.1  The rest of the two dentistry series

Both series are planned to six books in `series.py`. One book of each exists.

* **English for Dentists** — A2.2 *The Book, the Fees and the Record*; B1.1
  *Explaining, and Getting Consent*; B1.2 *Referrals, Reports and the
  Laboratory*; B2.1 *When Something Goes Wrong*; B2.2 *The Practice and the
  Profession*.
* **English for Dental Students** — B1.1 *Structure and Material*; B1.2; B2.1;
  B2.2; C1.1.

The unit titles in `series.BOOKS[CODE]['units']` for those books are phase-0
plans. **They will drift from what gets written, and the contents page is built
from them** — that fault was found in this round and fixed for the two existing
books. Update the list when the units are written, not before.

### 4.2  Pharmacy A2.1

The stated next priority: breadth before depth. Fork the harness the way `den2`
and `dens` were forked — a new package directory with its own `series.py`
(`TITLE`, `KIND`, `CAST`, `CAST_LOOK`, `DOMAIN`, `BOOKS`) and `units/<CODE>/`.
Nothing else in `coursegen2/` is series-specific.

### 4.3  Audio

Every listening has a full scripted transcript with named speakers and turn
counts inside the A2 band. No audio has been recorded or synthesised. The books
are usable without it — a teacher reads the transcript — but the course is
sold short without it.

### 4.4  A learner-facing glossary

The Syrian Arabic glosses exist only in the teacher's book, one per core term
per unit. A learner's back-of-book glossary of all 80 terms, with the Arabic,
would be cheap to generate from the same data.

### 4.5  A learner answer key

Keys are printed in the teacher's book only. Whether a learner's edition should
carry one is a pedagogical decision nobody has taken.

---

## 5  How to continue

### 5.1  Layout

```
coursegen2/
  art.py art2.py      SVG → PNG rendering
  figs2.py            the figure library (tooth_section, mini_table, contrast, …)
  render.py           OOXML: runs, paragraphs, tables, pictures
  build2.py           one unit → document body
  make2.py            one book: cover, contents, units, back matter, gates
  teacher2.py         the teacher's book
  gates2.py           every gate
  levels.py           the CEFR word lists and the level guard
  audit.py            what a gate cannot see (variety, Bloom, own-practice)
  taudit.py           what a teacher must find in the notes
  study.py            print a unit as a learner meets it, key withheld
  fitpass.py          measure the white at the foot of every closing page
  fitbuild.sh         the four-pass measured build
  slim.py             resample a built docx to 300 dpi
  den2/  dens/        the two series: series.py + units/<CODE>/u01..u10, t01..t10
```

### 5.2  Commands

```bash
cd coursegen2

# gates on one unit or several, without building
python3 make2.py dens A22 --units 8          # builds and gates
python3 audit.py dens A22 8,9,10             # variety, Bloom, own-practice
python3 taudit.py dens A22 8,9,10            # the teacher's notes
python3 study.py dens A22 8                  # read it as a learner

# the full measured build (about 50 minutes a book)
bash fitbuild.sh den2 A21 1,2,3,4,5,6,7,8,9,10
bash fitbuild.sh dens A22 1,2,3,4,5,6,7,8,9,10
python3 teacher2.py den2 A21 --units 1,2,3,4,5,6,7,8,9,10
python3 teacher2.py dens A22 --units 1,2,3,4,5,6,7,8,9,10

# 300 dpi for print
python3 slim.py <book>.docx <book>_print.docx 300
```

### 5.3  The standing quality bar

Set by the person this was built for and not negotiable:

* **Zero regression, zero omissions, zero drift, zero invention.**
* Every unit passes the full gate set with **no warnings**, not just no failures.
* The measured page fit is **re-run** whenever a block or figure height changes.
  It is never assumed, and never carried over from a previous build.
* Figures are drawn from source, never stock. 300 dpi for print.
* A word above the band is **paraphrased into band, never deleted**. If it is
  genuinely ordinary it goes to the B1 list; if it is academic register it goes
  to `ACADEMIC`; if it is dental it goes to the series' own `DOMAIN`.
* Medical content is tiered: A cited, B attributed, C illustrative. A Tier A
  reading or case must carry its source.

### 5.4  The one check that keeps finding things

Convert a built book to PDF and **read pages**, without a target. The last four
rounds each found a defect that way, and the defect in §3.1 — sixty boxes
printing Python in both books, for four rounds — was found by looking at a page
rather than by looking for anything.

```bash
libreoffice -env:UserInstallation=file:///tmp/p --headless --convert-to pdf \
  --outdir /tmp/out <book>_print.docx
pdftoppm -r 100 -f 581 -l 581 -png /tmp/out/<book>_print.pdf /tmp/page
```

Then look at the image.

---

## 6  Where the reasoning is written down

* `design/DESIGN.md` — the model, the figure library, the gates, and §14 on what
  a tenth unit has to do, the ten grammar points of each book, the contents-page
  fault and the three faults the printed page showed.
* `design/EVALUATION.md` — the four evaluation rounds, what each measured and
  what it changed. §6 covers the ten-unit rounds.
* `design/UNIT_MODEL.md`, `design/TEACHER_BOOK_MODEL.md` — the two templates.
* `design/SOURCE_POLICY.md` — the three tiers of medical sourcing.
* `design/INVENTORY_DENTISTRY.md` — the domain vocabulary inventory.
