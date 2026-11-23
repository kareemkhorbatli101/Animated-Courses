# Wayfinder 5 — Book 6

**Deliverable:** `../Wayfinder-5-Book6.docx` — the whole book as one Word file.
298 pages A4 · 85,700 authored words · 194 figures · 194 audio cues.

CEFR B2. Set in Portmere five years after Wayfinder Starter, with the same cast and four new
arrivals. The last book in the series.

## What is in the file

| Section | |
|---|---|
| Front matter | Title page, How to use this book, Contents, The people |
| **Starting Point** | Eight degrees of hedging on one claim, academic word families, and a tense-and-aspect review ending with the future perfect |
| **Units 1–12** | Telling the Story · What Comes Next · Reading the Evidence · If Things Were Different · How It Gets Done · People and Places · He Said, She Claimed · Taking a Position · Making It Concise · Making the Point · The Fine Print · Pulling It Together |
| Back matter | Grammar reference · Audio index · Word list · Academic word list · Sources · Closing |

## What is new against Book 5

**One subject, approached twelve times.** The difference between what you know and what you are
claiming. Narrative tenses put back the detail a story has trained itself to cut; graded certainty
puts a number against a prediction; modals of deduction report how many explanations the speaker
has thought of; the passive is examined for whether a reader who wants the agent can find one;
reporting verbs are weighed for the judgement they carry; and the last unit asks the learner to
write *I don't know, and here is what would settle it*.

**Grammar at the level where it becomes rhetoric.** Mixed conditionals, participle clauses,
nominalization, inversion, cleft sentences, non-defining and reduced relative clauses, discourse
markers in three positions. Each is taught as a choice with a consequence rather than a form with
a rule — the comma that changes how many people a sentence is about, the nominalization that
removes the actor, the cleft that puts the point where the room will remember it.

**Two sources that disagree with each other.** Units 9 and 11 use two peer-reviewed studies of the
same thing — how long a privacy policy takes to read — that differ by a factor of three. Both are
honest. Unit 11 works through why, and then makes the point that the argument survives the lower
figure, so the disagreement does not need adjudicating. Unit 3 does the same with two summaries of
one IEA report that give 43% and "almost 45%" for the same projection: the unit lists four things
that could explain the gap and says plainly that it does not know which.

## Every number in this book is real

Six source bodies across twelve units, no figure used twice, listed in `../_series/SOURCES.md` and
in the book's own back matter: UN DESA (World Population Prospects 2024 and SDG Goal 11), the OECD
(PIAAC December 2024 and the trust survey, 2025 results), UN-Habitat (World Cities Report 2024),
the IEA (Renewables 2025 and Global Energy Review 2026), and two arXiv studies of privacy policies.

## Structure, for the website build

Identical to Books 1–5: every structural element is a named Word style, and every image carries
its alt text as image metadata and its figure id as the image title. Six books, one parser.

## Source and rebuild

```bash
python3 wayfinder/_build/render_book6.py && python3 wayfinder/_build/build_book6.py
```

| Path | |
|---|---|
| `text/*.md` | the text, one file per unit, plus `front.md` and `back.md` |
| `figures/*.png` | 194 rendered figures, in the Level 5 purple |
| `../_build/spec_z1…z4.py` | what every figure contains |
| `../_build/build_book6.py` | the Book 6 build |

The art system added 34 icons for this level — a magnifier, footprints, a propped door, an access
log, scaffolding, a roadworks barrier, a boiler, a pipe, a surveyor's tripod, a certificate, a
tree, railings, a planter, a canal, goalposts, a recorder, a quotation mark, speech bubbles, a
podium, a show of hands, a tally, scissors, a word count, a marked proof, a spotlight, a signpost,
a megaphone, a signature, an inventory, a thread through beads, a roof, a part-rendered wall, a
flashback arrow and a stairwell.

## Checks that pass on the finished file

Run `python3 wayfinder/_series/bookcheck.py wayfinder/level5`.

- 194 figures referenced, 194 rendered — exact match
- 194 audio cues, all well-formed `W6-uu-tt`, all unique, 16 per unit
- Every figure carries alt text
- No currency symbol, no US-only institution, no third-party brand
- No British token in the American base
- Every lesson carries at least three oral slots and at least one open question; no silent openers
- Reading texts: 12 of 12 scored, Flesch-Kincaid 6.3–9.4 against a document ceiling of 14.0

## Known gaps

The answer key belongs in the Teacher's Book. Teacher's notes exist for Starter Unit 1 only. Six
of the sixteen audio types per unit are deliberately not printed, and their scripts are in the
Teacher's Book. Contents page numbers are placeholders pending design pagination. Three gates
still need a per-unit META spine and two are human reads by design.
