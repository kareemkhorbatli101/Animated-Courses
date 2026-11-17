# IELTS 2026 — visual pass and fix plan

Written after a visual pass over the built books and a measurement of every
claim in the external review. Measurements are from the source modules, not
from the .docx, so table cells are counted.

---

## Part 1 · What the visual pass found

I rendered and read pages from all eight books: covers, unit openers,
technique pages, reading pages, listening pages, speaking pages, writing
and model pages, every figure family, the answer keys, the band pages and
the progress tests.

### 1.1 A systemic figure defect, in every book — not in the review

**`answer_shape`, the "shape of this answer" figure on every speaking page,
draws a fixed-height box around a text block that grows.** The box is
96px tall; the text starts 48px into it and wraps to as many lines as it
needs. Past three lines it spills out of the box; past four it lands on
top of the caption underneath.

| book | speaking figures | spilling the box | colliding with the caption | worst box |
|---|---|---|---|---|
| Foundation 1 | 50 | 32 | 32 | 6 lines |
| Foundation 2 | 50 | 48 | 48 | 8 lines |
| Volume 1 | 50 | 40 | 40 | 10 lines |
| Volume 2 | 50 | 42 | 42 | 11 lines |
| Volume 3 | 50 | 41 | 41 | 7 lines |
| Volume 4 | 50 | 40 | 40 | 8 lines |
| Volume 5 | 50 | 45 | 45 | 9 lines |
| Volume 6 | 50 | 45 | 45 | 11 lines |
| **total** | **400** | **333** | **333** | |

**83% of the speaking pages in the series carry a broken figure.** It is
visible at a glance once you look at one.

**Why no gate caught it.** `gate6.py` proves every run of text fits the
*width* it was promised, measured with real font metrics. Nothing in the
pipeline checks that a text block fits the *height* of the box drawn
around it. This is a hole in the method, not just a bug in one function:
`answer_shape` is the only frame that puts a multi-line block inside a
fixed-height box, but nothing would stop the next one.

### 1.2 A promise the books do not keep

The Answer key section page of every volume prints:

> *Every wrong option is explained, because a letter on its own teaches
> nothing.*

Measured across every multiple-choice item in the series, an explanation
mentions a wrong option **12–24% of the time** (generous regex; the true
figure is lower). The printed sentence is false. This is the same thing
the review found, and it is worse than a gap: it is a claim on the page.

### 1.3 Everything else rendered correctly

Covers, unit openers, the loop panel, skill bars, cue cards, outline
frames, criterion tags, band scales, bar/line/pie charts, process flows,
site maps, device schematics, the answer-key grids, the raw-score tables
and the audio scripts all render cleanly at 85 dpi. The Volume 1
True/False/Not Given page the review praised is as good as they say it is.

One non-defect worth noting: **technique, outlining and speaking pages run
40–60% empty.** Nothing is wrong with them; there is simply room for the
second model answer and the distractor work below.

---

## Part 2 · The review's claims, checked

| # | claim | verdict | measured |
|---|---|---|---|
| 1 | Explanations are a locator plus a reason, rarely a distractor | **Confirmed** | mean explanation 41–74 characters; longest in Volume 3 is 105; distractor mentioned in 12–24% of MC items |
| 2 | Map/plan labelling missing | **Half right, and the right half matters** | Reading *has* them (4 map, 5 plan, 6 diagram labelling tasks). **Listening has none** — all 2,532 listening items are gap-fill or MC. Map labelling is a Listening Part 2 task |
| 2 | Matching sentence endings missing | **Confirmed** | zero in 80 units and 12 papers |
| 2 | T/F/NG taught in Volume 1 then vanishes | **Confirmed** | 30 occurrences, every one in Volume 1. Volumes 2–6 use Yes/No/Not Given exclusively (30 each). Foundation 1 and 2 have **neither** |
| 3 | Full-length passages arrive too late | **Confirmed exactly** | passages ≥700 words: V1 **0**, V2 **0**, V3 **2**, V4 **5**, V5 23, V6 23. ≥900 words: only 3 in V5 and 3 in V6 |
| 4 | Speaking is the thin strand | **Mostly right** | there *is* a model — the 4–5 line "shape" — but no full long-turn transcript anywhere, and pronunciation appears in **3 units out of 80** |

Two additions of my own:

- **The Foundation books contain no True/False/Not Given and no
  Yes/No/Not Given at all.** The question type that loses most marks is
  first met in Volume 1.
- **Unit passages are below exam length by design** (the acad band is
  400–510 words in Volume 1, rising to 860–1000 in Volume 6) **and each of
  Volumes 1–5 has only one timed Reading paper.** So stamina is trained in
  one place per book. Volume 6 has four papers; the others have two.

---

## Part 3 · The plan

Ordered by value per hour, and following this project's own rule: **the
gate is written before the content it governs.**

### P0 · Defects in files already delivered — do these first

**A. Make `answer_shape` grow with its text.** `frames.py`, one function.
Compute the wrapped lines first, set the box height to
`max(96, 92 + 19 × lines)`, put the caption below the tallest box, and
size the figure from that. ~15 lines changed.

**B. Gate 8: geometric containment.** The real fix. `art.R()` gains an
optional `RECTLOG` the way `TBLOCK` already has `FITLOG`; a new `gate8.py`
walks every figure and asserts that each text block's bounding box lies
inside the rectangle it was drawn into, with the same DejaVu metrics
gate6 uses. Run it on all eight books. ~120 lines of new code.
*Acceptance:* gate8 reports 0 escapes on all eight books, and reported
333 before the fix.

**C. Tell the truth on the answer-key page, today.** One string per book.
Either make the promise accurate (P1-D below) or change it to what is
true: *"Where a wrong option is tempting, the explanation says why."*
Do **C** now and **D** next; a book should not carry a false claim for
the weeks that D takes.

*Cost of P0: half a day, including rebuilding and re-gating all eight
books.*

### P1 · The band 6 → 7 work

**D. Per-distractor explanations.** The highest-value addition in the
whole list, as the review says, and bounded: the right answer, the
locator and the reason already exist.

Size, measured: **2,961 MC items, 8,399 wrong options.**

| phase | what | items | lines to write |
|---|---|---|---|
| D1 | every 3-option item (T/F/NG and Y/N/NG) | 484 | 968 |
| D2 | the 12 timed papers | ~430 | ~1,290 |
| D3 | academic cycles, Volumes 3–6 | ~900 | ~2,700 |
| D4 | the rest | ~1,150 | ~3,450 |

D1 first: in IELTS the question "why is this Not Given rather than False"
is the single most valuable explanation there is, and 484 items is two
days' work.

*Mechanics:* the item tuple becomes `(stem, options, answer, why, wrongs)`
with `wrongs` a dict `{index: one line}`; `check.py` gains a rule — for an
MC item, every wrong index must have a line of at least 25 characters —
applied per phase so the gate goes green as each phase lands. The renderer
prints them under the key entry, indented.

*Acceptance:* `check.py` reports 100% distractor coverage for the phases
completed, and the answer-key banner is restored to its original wording
the day D4 lands.

**E. The speaking strand.** Second-thinnest, and the one a web course
transforms most.

- **E1.** A full Part 2 long-turn model, written out, once per unit —
  80 of them, 180–220 words each. The "shape" stays; the transcript sits
  under it. This is the single thing that makes the strand teachable from
  the page. *Gate:* `check.py` requires one `longturn` per unit, in band.
- **E2.** A pronunciation and fluency page in each unit, replacing nothing
  — there is room on the speaking pages for it. Word stress, sentence
  stress, chunking, and the two or three sounds that cost marks at that
  level. 80 pages.
- **E3.** Record the audio. Out of scope for the books; in scope for the
  course. The scripts are already written and already gated for omissions.

**F. Exam-length reading.** Do **not** lengthen the teaching passages:
they are read under the loop at a graded speed, and their length is tied
to the k1/beyond windows and the syntax ladder. Two clean fixes instead:

- **F1.** Give Volumes 1–5 a **second timed Reading paper and a second
  Listening paper**, as Volume 6 already has. That doubles stamina work
  without touching a single teaching text. 10 new papers; the machinery
  (`paperNa`, `paperNb`) already exists and Volume 6 uses it.
- **F2.** Add one **stamina read** per book to Volumes 1 and 2 — a single
  700-word passage, labelled honestly: *"longer than anything you will be
  asked to read at this level. Read it for stamina, not for score."*
  *Gate:* a new row in `check.py` — every book from Volume 3 up must
  contain at least 6 passages of 700+ words; Volumes 1 and 2 at least 1.

### P2 · Authoring decisions, your call

**G. Matching sentence endings.** A real exam task type, absent. Needs a
question-type renderer (it is a two-column matching layout) and ~30
instances across Volumes 2–6. Two days.

**H. Listening map/plan labelling.** Absent, and a distinct skill: the
candidate tracks a speaker's route through a space. Needs a new figure
family (a plan with lettered points), ~16 instances, one per unit from
Volume 2. Three days, mostly the figure.

**I. Re-balance T/F/NG against Y/N/NG.** Convert roughly a third of the
Yes/No/Not Given sets in Volumes 2–6 to True/False/Not Given, and give the
Foundation books their first six T/F/NG items each. These are different
tasks — facts against a writer's views — and both are in the paper.

**J. The second model answer.** The review's one recommendation to the
books, and I agree with it. Beside each band-9 Task 2 model, a **band-6.5
model** with its own *Why it stops at 6.5* note: the three or four moves
it does not make. 60 essays. This is the change most likely to raise an
actual candidate's score, because it shows a B2 student what is reachable
this month rather than this year.

### What not to touch

The timing arithmetic, the loop, the skill boxes, the refusal to use
templates, the grading ladders (vocabulary, syntax, speed) and the
Foundation word ledger. These are why the books are worth the work above.

---

## Part 4 · Suggested order and cost

| step | work | rough cost |
|---|---|---|
| P0 A–C | figure fix, gate 8, honest banner | half a day |
| P1 D1 | distractors on all 484 three-option items | 2 days |
| P1 E1 | 80 Part 2 long-turn models | 2 days |
| P1 F1 | 10 second timed papers | 3 days |
| P1 D2–D3 | distractors: papers, then Volumes 3–6 | 5 days |
| P2 J | 60 band-6.5 second models | 4 days |
| P1 E2 | 80 pronunciation pages | 3 days |
| P1 D4 | the remaining distractors | 4 days |
| P2 G–I | new task types and the T/F/NG rebalance | 5 days |

Every step ends the same way: `check.py`, `density.py`, `density.py
--ladder`, `book.py`, `omit.py`, `gate6.py`, the new `gate8.py`,
`readiness.py`, **and a rendered page read by eye** — which is what found
the defect in Part 1.

---

## Part 5 · Two questions the plan did not answer well enough

Asked directly whether this fixes **the density of speaking** and **the
level of writing**, I measured both rather than answering from intent.
One answer is "mostly, with an amendment"; the other is "no, as written".

### 5.1 Speaking density: the real shape of the problem

Words of teaching text in the unit cycles of each book:

| book | reading | listening | writing | **speaking** | grammar/vocab | speaking share |
|---|---|---|---|---|---|---|
| Foundation 1 | 7,392 | 8,143 | 7,619 | **4,438** | 5,135 | 13.6% |
| Foundation 2 | 10,791 | 10,275 | 10,637 | **4,787** | 4,480 | 11.7% |
| Volume 1 | 15,129 | 12,253 | 13,534 | **5,086** | 5,465 | 9.9% |
| Volume 2 | 17,032 | 16,413 | 13,880 | **5,048** | 5,771 | 8.7% |
| Volume 3 | 21,389 | 21,049 | 14,593 | **4,924** | 6,258 | 7.2% |
| Volume 4 | 23,634 | 23,272 | 15,831 | **5,567** | 6,617 | 7.4% |
| Volume 5 | 27,886 | 22,884 | 16,461 | **5,241** | 6,386 | 6.6% |
| Volume 6 | 28,980 | 23,197 | 17,004 | **5,020** | 6,345 | 6.2% |

**Speaking is flat at about 5,000 words in every book while reading goes
from 7,000 to 29,000.** It is not that speaking is thin; it is that
speaking never grows. Its share halves from 13.6% to 6.2% exactly as the
other strands get serious. That is the defect, and it is sharper than
"the thin strand".

**What E1 and E2 would actually do.** Eighty long-turn models at 200 words
adds 2,000 words a book; a pronunciation page at roughly 250 words adds
2,500. Speaking goes to about 9,700 a book — which takes Foundation 1 to
24% and Volume 6 to **9.5%**. Fixed at the bottom, improved but still
thin at the top.

**Amendment to the plan.** Scale the speaking strand with the book, the
way every other strand already scales:

- **E1′** — the Part 2 long-turn model grows with the volume: 150 words in
  Foundation 1 rising to 280 in Volume 6, not a flat 200.
- **E2′** — the pronunciation and fluency page likewise, and from Volume 3
  it covers the features that actually separate band 6 from band 7:
  chunking, stress for contrast, and the intonation of a concession.
- **E4 (new)** — from Volume 3, a **second speaking block per unit**: a
  Part 3 follow-up exchange with the examiner's counter-question written
  out and a model reply. This is the thing that distinguishes a band 7
  Part 3 from a band 6, and no page in the series currently shows it.
- **E5 (new)** — gate it. `check.py` gains a speaking band per volume, the
  way it already has `acad`, `long` and `essay` bands for the texts, and a
  rule that the speaking strand is not less than 12% of a unit's teaching
  text. Written before E1′–E4, as usual.

With the amendment, speaking lands at roughly 12–14% in every book, and
the gate stops it drifting back.

### 5.2 Writing level: the review's diagnosis is wrong, the complaint is right

The review says the models are band 8–9 prose a B2 student cannot
produce. Measured the same way a reading passage is measured:

| book | models k1 | models beyond4k | models sent | models nominal | passages k1 / beyond | difference |
|---|---|---|---|---|---|---|
| Foundation 1 | 75.3% | 9.4% | 15.7 | 0.7% | 74.2 / 10.0 | models **+1.1** k1, **−0.6** beyond |
| Foundation 2 | 71.9% | 11.7% | 19.6 | 2.0% | 72.0 / 12.3 | −0.1, −0.6 |
| Volume 1 | 71.2% | 12.8% | 21.2 | 2.9% | 69.9 / 13.5 | +1.3, −0.7 |
| Volume 2 | 69.5% | 14.1% | 20.9 | 3.1% | 69.7 / 14.4 | −0.2, −0.3 |
| Volume 3 | 68.3% | 16.0% | 22.0 | 3.5% | 66.6 / 17.4 | +1.7, −1.4 |
| Volume 4 | 67.8% | 16.8% | 21.7 | 3.6% | 65.0 / 19.3 | +2.8, −2.6 |
| Volume 5 | 65.4% | 19.4% | 24.6 | 4.8% | 64.8 / 21.0 | +0.6, −1.6 |
| Volume 6 | 66.2% | 18.4% | 23.8 | 5.1% | 62.6 / 23.8 | **+3.7, −5.4** |

**In every single book the models are written in a plainer register than
the book's own reading passages** — more first-thousand words, fewer rare
ones. In Volume 6 the gap is 3.7 and 5.4 points. Whatever is out of reach
about these models, it is not their vocabulary.

So the complaint is real but the cause was misdiagnosed. What is out of
reach is **rhetorical control**: the concession placed before the
counter-argument, the test that resolves both views, the conclusion that
adds instead of summarising. A B2 candidate can read every word of the
Volume 3 model and still not see which move to attempt this month.

That has three consequences for the plan:

- **J moves from P2 to P1.** The band-6.5 second model is not a nice
  extra; it is the only item in the list that addresses this. 60 essays,
  each with a *Why it stops at 6.5* note naming the two or three moves it
  does not make — which is the same technique the existing *Why it works*
  notes use, pointed the other way.
- **Do not simplify the band-9 models.** The measurement says they are
  already plainer than the surrounding prose. Simplifying them further
  would remove the target without making it reachable.
- **E6 (new) — gate the models' register.** `density.py` profiles the
  reading passages; nothing profiles the model answers, which is why this
  relationship was accidental rather than designed. Add a row: models
  measured like passages, with a required relationship to them (within
  about 2 points of k1 of the book's own passages, never harder). The
  band-6.5 models get their own looser row. This is a twenty-line change
  and it makes the next sixty essays verifiable instead of hopeful.

### 5.3 Revised order

| step | work | cost |
|---|---|---|
| P0 A–C | figure fix, gate 8, honest banner | half a day |
| **E5, E6** | the speaking band and the model-register row — gates first | half a day |
| P1 D1 | distractors on all 484 three-option items | 2 days |
| **P1 J** | 60 band-6.5 second models with *Why it stops at 6.5* | 4 days |
| P1 E1′ | 80 long-turn models, scaled by volume | 2 days |
| P1 E4 | 40 Part 3 follow-up exchanges, Volumes 3–6 | 2 days |
| P1 E2′ | 80 pronunciation and fluency pages, scaled | 3 days |
| P1 F1 | 10 second timed papers | 3 days |
| P1 D2–D4 | the remaining 7,900 distractor lines | 9 days |
| P2 G–I | new task types and the T/F/NG rebalance | 5 days |
