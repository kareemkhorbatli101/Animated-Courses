# Wayfinder 1 — Book 2

**Deliverable:** `../Wayfinder-1-Book2.docx` — the whole book as one Word file.
223 pages A4 · 54,700 authored words · 181 figures · 194 audio cues.

CEFR A1+ → A2. Set in Portmere one year after Wayfinder Starter, with the same cast.

## What is in the file

| Section | |
|---|---|
| Front matter | Title page, How to use this book, Contents, Scope and sequence |
| **Starting Point** | One year later, in Room 7 |
| **Units 1–12** | Hello Again · Can You Help Me? · People I Know · My Place · Around the Block · My Week · Spend Smart · Good Food · Stay Healthy · Job Hunt · Be Safe · Free Time |
| Back matter | Grammar reference (all 13 units), Audio index and scripts, Word list |

## What is new against Book 1

- **The past tense opens.** Unit 10 gives *was* and *were*; Unit 12 gives *be going to* and
 *was going to* for a plan that changed. For the first time a learner can say what they **were**.
- **Longer texts.** Readings run to about 140 words, model texts to about 90.
- **Phrase banks withdrawn.** Two per unit instead of four, on purpose and visibly.
- **Harder cases.** Several *Think It Through* problems have no good answer — a licence that will
 not translate before a deadline, a CV gap that was a life, a colleague on an unsafe ladder who
 trained you.

## Structure, for the website build

Identical to Book 1: every structural element is a named Word style (`WF Lesson`, `WF Rubric`,
`WF Audio`, `WF Box Head`, `WF Model`, `WF Dialogue`, `WF Figure`…), and every image carries its
alt text as image metadata and its figure id as the image title. The two books parse with one
parser.

## Source and rebuild

```bash
python3 wayfinder/_build/build_book2.py
```

| Path | |
|---|---|
| `text/*.md` | the text, one file per unit, plus `front.md` and `back.md` |
| `figures/*.png` | 181 rendered figures, in the Level 1 teal |
| `../_build/spec_v1/v2/v3.py` | what every figure contains |
| `../_build/build_book2.py` | the Book 2 build: rebinds the accent, the figure directory and the title page, then reuses Book 1's converter unchanged |

The art system is shared with Book 1. `art_core.set_accent()` rebinds the level colour across the
art modules, so the same 187 icons and the same cast render in each book's own validated accent.

## Checks that pass on the finished file

- 181 figures referenced, 181 rendered — exact match
- 194 audio cues, all well-formed `W2-uu-tt`, all unique, 16 per unit
- No currency symbol, no US-only institution, no third-party brand
- No British token in the American base — 16 were found and fixed, in the text and in the realia
- Every model text inside the amended A1+/A2 band (81–104 words; see §4.2 of the series plan)
- Every figure carries alt text

## Known gaps

Same as Book 1: the answer key belongs in the Teacher's Book; teacher's notes exist for Starter
Unit 1 only; audio scripts are indexed with the five non-printed track types scripted in full;
