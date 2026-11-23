# Wayfinder 3 — Book 4

**Deliverable:** `../Wayfinder-3-Book4.docx` — the whole book as one Word file.
255 pages A4 · 72,100 authored words · 194 figures · 194 audio cues.

CEFR B1. Set in Portmere three years after Wayfinder Starter, with the same cast.
The first book in the series with sixteen-page units.

## What is in the file

| Section | |
|---|---|
| Front matter | Title page, How to use this book, Contents, The people |
| **Starting Point** | Parts of speech, word families, and a tense review |
| **Units 1–12** | Back to School · Fun Times · Office Life · The Interview · Lend a Hand · In the Kitchen · Money Moves · Healthy Habits · On the Road · Keeping Safe · Big Moments · Speak Up |
| Back matter | Grammar reference (13 units), Audio index, Word list, **Sources** |

## What is new against Book 3

Four slots arrive at this level, all of them in the plan from the start:

- **True/False/Not Given, with line numbers.** Every Lesson 2 reading is numbered by line, and
 the exam-format task asks learners to name the line that decides each answer. The hardest items
 are the ones that are *Not Given* — where the text neither says it nor contradicts it.
- **Word study.** A five-row affix chart per unit — prefixes that reverse, suffixes that make
 people, the *-able* family, compound nouns — followed by five sentences that use them.
- **A *Language connection* box** in every Grammar lesson: a rule the learner completes from two
 worked examples, always about the difference between a sentence that starts an argument and one
 that starts a process.
- **Team roles.** Manager, Writer, Editor, Presenter. The Editor's job is the real one: check that
 every claim in the team's work could actually be defended.

Also: the phrase banks are gone, as planned; the team error hunt gives four wrong sentences and
asks for the part of speech as well as the correction; and every lesson now carries a
participation self-check that the learner fills in honestly or not at all.

## Every number in this book is real

This is the first book where the Lesson 2 readings cite external sources, and all twelve do.
OECD, ILO, UNEP, WHO, INTERPOL, UN DESA and Eurostat. The figures were checked by search while
the book was being written and are listed with their publications in `../_series/SOURCES.md` and
in the book's own back matter.

Two of the readings contain a sentence that the figure beside it does not support — a college
guide that turns "two adults in five" into "most adults", and a briefing that quietly never
mentions its own town's number. Both are deliberate, both are flagged by the task underneath, and
the Starting Point warns the learner that one is coming.

## Structure, for the website build

Identical to Books 1–3: every structural element is a named Word style, and every image carries
its alt text as image metadata and its figure id as the image title. Four books, one parser.

## Source and rebuild

```bash
python3 wayfinder/_build/render_book4.py && python3 wayfinder/_build/build_book4.py
```

| Path | |
|---|---|
| `text/*.md` | the text, one file per unit, plus `front.md` and `back.md` |
| `figures/*.png` | 194 rendered figures, in the Level 3 blue |
| `../_build/spec_x1…x4.py` | what every figure contains |
| `../_build/build_book4.py` | the Book 4 build |

The art system is shared. This book added 21 icons and three things the system did not have: a
line chart for a trend (a ranked bar answers a different question), an `on_counter` placement that
puts objects on the counter top instead of floating them above it, and a gridline interval that
adapts, because one gridline per unit is right for a count of students and absurd for a
percentage.

## Checks that pass on the finished file

Run `python3 wayfinder/_series/bookcheck.py wayfinder/level3`.

- 194 figures referenced, 194 rendered — exact match
- 194 audio cues, all well-formed `W4-uu-tt`, all unique, 16 per unit
- Every figure carries alt text
- No currency symbol, no US-only institution, no third-party brand
- No British token in the American base
- Every lesson carries at least three oral slots and at least one open question; no silent openers
- Reading texts: 12 of 12 scored, Flesch-Kincaid 5.6–9.7 against a document ceiling of 10.0

## Known gaps

The answer key belongs in the Teacher's Book. Teacher's notes exist for Starter Unit 1 only. Six
of the sixteen audio types per unit are deliberately not printed in the Student Book, and their
scripts are in the Teacher's Book. Three gates still need a per-unit META spine (band check, key coverage, CEFR
descriptors) and two are human reads by design.
