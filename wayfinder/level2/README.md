# Wayfinder 2 — Book 3

**Deliverable:** `../Wayfinder-2-Book3.docx` — the whole book as one Word file.
234 pages A4 · 57,100 authored words · 174 figures · 193 audio cues.

CEFR A2. Set in Portmere two years after Wayfinder Starter, with the same cast and four
arrivals who joined in Book 2.

## What is in the file

| Section | |
|---|---|
| Front matter | Title page, How to use this book, Contents, Scope and sequence |
| **Starting Point** | Two years in — what the group can already do |
| **Units 1–12** | Study Smarter · Make Plans · A New Place · Find Work · First Week at Work · Stay Connected · Cook at Home · Feeling Better · Manage Money · Know Your City · When Things Go Wrong · Time to Relax |
| Back matter | Grammar reference (all 13 units), Audio index and scripts, Word list |

## What is new against Book 2

- **The past tense completes.** Unit 4 gives the regular simple past, Unit 8 the irregular forms
  and *had to*, Unit 11 the past continuous against the simple past. A learner can now narrate.
- **Comparison arrives.** Unit 12 gives comparatives, superlatives and *one of the*.
- **Documents get real.** The Real-life Reading texts are a tenancy agreement, a mobile contract,
  a discharge letter, a bank statement, a council registration page and a power company's
  emergency notice — written as those documents are written, with the task constrained to
  scan-and-locate rather than full comprehension (series plan §4.2‡).
- **Phrase banks are gone.** Withdrawn entirely at this level, as planned.
- **The hard cases get harder.** *Think It Through* now asks about a signature on a delivery note
  that does not match the pallets, a consent form being translated by a neighbour who is not sure
  she understood it, and a wheelchair at the top of an unlit stairwell.

## Structure, for the website build

Identical to Books 1 and 2: every structural element is a named Word style (`WF Lesson`,
`WF Rubric`, `WF Audio`, `WF Box Head`, `WF Model`, `WF Dialogue`, `WF Figure`…), and every image
carries its alt text as image metadata and its figure id as the image title. The three books parse
with one parser.

## Source and rebuild

```bash
python3 wayfinder/_build/build_book3.py
```

| Path | |
|---|---|
| `text/*.md` | the text, one file per unit, plus `front.md` and `back.md` |
| `figures/*.png` | 174 rendered figures, in the Level 2 amber |
| `../_build/spec_w1/w2/w3.py` | what every figure contains |
| `../_build/render_book3.py` | renders the figures at the Level 2 accent |
| `../_build/build_book3.py` | the Book 3 build: rebinds the accent, the figure directory and the title page, then reuses the shared converter |

The art system is shared across the series. This book added 46 icons (a scanner, a SIM, a
measuring jug, the injury set, the banking set, a fuse box, a fallen tree), four cast members who
had been standing in for themselves since Book 2, and four new scene primitives: a night street
with lit windows and torch beams, a sagging wire with a branch across it, a flight of stairs, and
a city skyline above its harbour.

## Checks that pass on the finished file

Run `python3 wayfinder/_series/bookcheck.py wayfinder/level2`.

- 174 figures referenced, 174 rendered — exact match
- 193 audio cues, all well-formed `W3-uu-tt`, all unique
- Every figure carries alt text, and the alt text matches what the art actually shows
- No currency symbol, no US-only institution, no third-party brand
- No British token in the American base; 7 switchable tokens defined in `VARIANTS.json`
- Every lesson carries at least three oral slots and at least one open question; no silent openers
- Reading texts: 10 of 12 scored, Flesch-Kincaid 2.9–5.8 against a document ceiling of 7.5. The
  other two are an advert and a price table with no running prose, so the measure does not apply
  and the gate says so rather than scoring them anyway.

## Known gaps

Same as Books 1 and 2: the answer key belongs in the Teacher's Book; teacher's notes exist for
Starter Unit 1 only; audio scripts are indexed with the non-printed track types scripted in full;
Contents page numbers are placeholders pending design pagination. Three gates still cannot run
without a per-unit META spine (band check, key coverage, CEFR descriptors) and two are human reads
by design (answer sanity, and the clean-room n-gram diff, for which the project holds no corpus).
