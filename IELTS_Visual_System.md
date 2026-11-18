# The visual system — nineteen new figures, each with a job

The series already renders **3,639 figures** across eight books, and
`census.py` shows where they go: in Volume 3, 43 data figures declared in
the content, split almost evenly between reading, listening and writing,
plus the structural frames every page carries. `gate6.py` proves none of
them overruns its box and nothing prints below 7.5px.

So the series is not short of pictures. It is short of **pictures that
teach something other than the data they contain.** Benchmark category G
scores us 10 of 24, and the whole 10 is in one place: data visuals for
Task 1, process diagrams and maps, where we beat the competition. The
four factors we score 0 on are the ones a language coursebook lives by:
topic activation, vocabulary visuals, text-structure visuals, and every
figure declaring what it is for.

## The constraint, stated first

**We cannot use photographs.** No licensed image library is reachable
from this container, and a stock photograph of four people talking is
what Complete IELTS uses for "Starting off". Everything here is vector
art generated from data by `charts.py`, `diagrams.py` and `frames.py`.

That is a real loss and a real gain. The loss: no human faces, no places,
none of the immediate pull a photograph has. The gain is threefold and
worth more over a 12-book series: a figure generated from data can be
**gated** (gate 6 already proves every one of 3,639 fits its box), it can
be **corrected and re-rendered in seconds**, and it can be **required to
declare what it teaches** — which is the rule in Part 4 below, and the
thing no photograph in any coursebook has ever been asked to do.

Where a photograph would do a job line art cannot, the plan substitutes a
**labelled scene** — a drawing of the situation with things in it to name,
which activates the topic *and* pre-teaches the vocabulary, where a
photograph only activates.

---

## Part 1 · What exists

| family | renderers | what they do well |
|---|---|---|
| `charts.py` | line, bar, pie, table | Task 1 data. Four types, correct axes, fitted labels |
| `diagrams.py` | process flow, device schematic, cycle flow, site map | process, flow-chart and plan/map tasks |
| `frames.py` | cycle bar, skill bar, unit opener, cue card, answer shape, outline frame, pattern box, criterion tag, loop panel, band scale, speed grid, covers | the structural furniture of a page |

21 renderers, all gated, none of which asks a learner to do anything
except read it.

---

## Part 2 · Nineteen new figures

Each row: what it teaches, where it goes, what data it takes, and how
often. **`teaches` is a required field** — see Part 4.

### Activation and interest — the "Starting off" problem

| # | figure | teaches | where | data |
|---|---|---|---|---|
| 1 | **`scene`** | the topic and 6–8 of its words, before any text | once a unit, opening it | a drawing frame with 8 numbered callouts, a word bank, and 8 answers |
| 2 | **`puzzle`** | curiosity — one counterintuitive number, circled, with the question it raises | once a unit, in the opener | a mini-chart, the point to circle, the question |

`scene` is the single highest-value new figure in this document. A learner
opens Unit 3 and meets a clinic: a waiting area, a screen showing a
queue number, a notice about eligibility, a nurse's station, a sharps bin.
Eight things to name from a word bank. **Two minutes, and the learner now
owns the vocabulary the 780-word passage is about to use.**

### Vocabulary — four figures where we have none

| # | figure | teaches | where | data |
|---|---|---|---|---|
| 3 | **`field`** | a semantic field: one centre, branches by sub-sense | one a cycle | centre word, 3–5 branches, 3 words each |
| 4 | **`family`** | word formation: verb / noun / person / adjective / adverb, with stress marked | one a cycle from Volume 2 up | a 5-column table, stress dots, 4–6 rows |
| 5 | **`cline`** | strength: hedging, frequency, formality, certainty | twice a unit | an axis, 5–7 items placed, the two poles named |
| 6 | **`collocation`** | what actually goes with a word, grouped by part of speech | one a cycle | node word, 3 groups, 4 collocates each |

Factor 25 in the benchmark — word formation — scores 0 for us and 3 for
Cambridge, and it is **directly tested**: a Reading gap wants *analysis*
when the passage said *analyse*, and a learner who has never seen the
family table guesses. `family` fixes a tested gap with one figure a cycle.

### Reading and listening skill — the category that fixes the "test bank" feel

| # | figure | teaches | where | data |
|---|---|---|---|---|
| 7 | **`skeleton`** | what each paragraph *does* — claim, evidence, concession, consequence — not what it says | every passage of 600+ words | one box a paragraph, each with a function label and a 6-word gist |
| 8 | **`bridge`** | **paraphrase**: question language on the left, text language on the right, the link drawn, the transformation named | twice a unit | 4–6 pairs, each tagged synonym / nominalisation / voice / negation / hypernym |
| 9 | **`signpost`** | the passage reduced to its discourse markers, so the turns become visible | once a unit | the markers in order, with what each one signals |
| 10 | **`anatomy`** | a worked question with the trap marked and named | once per question type per volume | the stem, the options, the trap, the label |
| 11 | **`decide`** | the decision itself: True / False / Not Given, or answer vs distractor | 3 a volume | a decision tree, 3–4 nodes, the test at each |
| 12 | **`listenmap`** | the shape of a Part 3 recording: who speaks, who concedes, where the answer sits | twice a unit | speakers, turns, agreement marks, answer positions |

**`bridge` and `skeleton` are the two figures that would most change what
this series is.** Factor 31 — paraphrase recognition — is the most
testable single skill in IELTS, it appears in Reading and Listening and
Writing, and we score 0 on it. A `bridge` figure makes it visible, a
`bridge` exercise makes it practisable, and a progression across twelve
units makes it learnable.

### Productive skills

| # | figure | teaches | where | data |
|---|---|---|---|---|
| 13 | **`taskread`** | a Task 2 question dissected: topic, task words, scope, what counts as an answer | on every Task 2 | the prompt, 4 labelled parts, the two misreadings |
| 14 | **`langbank`** | useful language by function: comparing, conceding, quantifying, hedging | on every writing task | 4 functions, 4 phrases each, one worked into a sentence |
| 15 | **`ladder`** | what moves 6 → 7 on one criterion, with the same sentence written at each band | once a unit | criterion, 3 bands, a sentence at each, the move named |
| 16 | **`matrix`** | two or three views against criteria — the Part 3 and Task 2 thinking frame | once a unit | 3 columns, 4 rows, the cells filled or blank for the learner |

### Metacognition and navigation

| # | figure | teaches | where | data |
|---|---|---|---|---|
| 17 | **`unitmap`** | the unit before you enter it: five cycles, what each does, the test tasks each carries | every unit opener | 5 rows, sub-topic, skills, task types |
| 18 | **`clock`** | where 60 minutes goes, against the learner's own measured reading speed | front matter, once a volume | the dial, the segments, the learner's speed row |
| 19 | **`tracker`** | a progress record the learner fills in: unit × skill × confidence | front matter and unit ends | the grid, empty, with a worked first row |

### Content figures for the two new units

No new renderers needed — `site_map`, `process_flow` and
`device_schematic` already cover them — but the new units need three data
shapes the series has not used:

- **`route`** (via `site_map`): a migration route with distances and
  dates, for *How Animals Find Their Way*
- **`section`** (via `device_schematic`): a stratigraphy cross-section,
  for *What the Ground Remembers*
- **`timeline`** (new, small): events on a scale — for archaeology, for
  history, and for teaching narrative tenses off a visual

---

## Part 3 · How many figures, and where

Per unit of five cycles, after the rebuild:

| figure | count a unit |
|---|---|
| `scene`, `puzzle`, `unitmap`, `signpost`, `ladder`, `matrix`, `tracker` | 1 each = 7 |
| `field`, `collocation` | 1 a cycle = 10 |
| `family` | 1 a cycle from Volume 2 up = 5 |
| `cline`, `bridge`, `listenmap` | 2 each = 6 |
| `skeleton` | every passage of 600+ words ≈ 4 |
| `taskread`, `langbank` | 1 per writing task ≈ 5 |
| `anatomy`, `decide` | volume-level, ≈ 1 a unit |
| existing data, process, map, device figures | ≈ 4 (unchanged) |
| **new figures a unit** | **≈ 38** |
| **new figures in Volume 3 (12 units)** | **≈ 456** |

Volume 3 goes from 457 figures to about **913**, and — the point — from
**0 to 456 figures that teach something other than their own data.**

---

## Part 4 · The rule that makes it real: `gate12.py`

Every figure in the content must carry a **`teaches`** field naming its
pedagogic function from a closed vocabulary:

```
activate · vocabulary · word-formation · collocation · scale ·
text-structure · paraphrase · signposting · question-anatomy ·
decision · listening-shape · task-analysis · useful-language ·
band-move · comparison · navigation · timing · self-assessment ·
data · process · plan · device · timeline
```

`gate12.py` fails the build when:

1. **any figure has no `teaches`** — decoration becomes impossible;
2. a unit has **no `activate` figure**;
3. a passage of 600+ words has **no `text-structure` figure**;
4. a cycle has **no `vocabulary`-family figure**;
5. a unit has **fewer than two `paraphrase` figures**;
6. a question type taught in the volume has **no `question-anatomy`
   figure anywhere in it** — cross-checked against `qtypes.py`, so the
   claim cannot drift;
7. a cycle carries **fewer than four figures**;
8. the `teaches` vocabulary gains a value that is not on the list.

Gate 6 continues to prove that every one of them fits its box and prints
nothing below 7.5px, so "more figures" cannot become "worse pages".

---

## Part 5 · The order to build them in

Three of the nineteen pay for themselves before the rest exist, and they
are the three to build in the pilot's first phase:

1. **`scene`** — fixes benchmark factor 9, the one the reader noticed
   first ("no introduction, no contextualisation").
2. **`bridge`** — fixes factor 31, the most testable skill in the exam,
   on which we score 0.
3. **`skeleton`** — fixes factor 60, which *neither* series has, and
   teaches the macro-skill that matching headings and matching
   information both test.

Then the vocabulary four (`field`, `family`, `cline`, `collocation`),
because factors 24–27 are four zeros and ones in a row and they are what
makes a learner's language actually grow. Then the rest.

## Part 6 · What this does not do

1. **No photographs, and no faces.** Stated at the top. A coursebook
   without a human face in it is colder than one with, and line art does
   not fix that. If photographs matter more than gating, that is a
   decision to take deliberately and it changes the toolchain.
2. **A figure is not a lesson.** `bridge` makes paraphrase visible; the
   exercise beside it is what makes it learnable, and that is the plan's
   job, not the visual system's.
3. **The counts in Part 3 are a design target**, not a measurement. The
   only measured numbers here are the 3,639 existing figures, the 457 in
   Volume 3 and the gate-6 result.
