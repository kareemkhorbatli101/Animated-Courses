# TOEFL iBT® Preparation Course 2026 — **Volumes 3 to 6**
## What was built, and how it was checked

*Companion to `TOEFL_Volumes_3to6_Plan.md` and `TOEFL_Volumes_5and6_Plan.md`.
Every number below is from the build, not from the plan.*

---

## 1. What was asked for

Volumes 1 to 4 and the two Foundation volumes had shipped. The question put to
this round of work was which levels the series actually covers in an effective
way, and the answer was uncomfortable: Volumes 3 and 4 printed **B2** on their
covers and profiled as a near-repeat of Volume 2 on every measure that matters.
The decision taken from that was a four-part job:

1. **Improve Volumes 3 and 4** so that the level on the cover is true.
2. **Write Volume 5** to finish B2, targeting a steady 5.0–5.5.
3. **Write Volume 6** at C1 — not more of the same ground at greater length,
   but the preparation for a **5.5 or a 6.0** on the 2026 scale.
4. Keep the same architecture throughout: **five cycles of every skill in every
   unit**, three everyday and two academic, where cycle 4 states the claim a
   field rests on and cycle 5 is the objection to that claim.

All four are done. The course is now **eight volumes and sixty units**.

---

## 2. The eight books as they now stand

| Volume | Level | Units | Assessment | Body words | Figures | File |
|---|---|---|---|---|---|---|
| Foundation 1 | A1–A2 | 1–10 | Progress Test F (59 items) | 114,066 | 518 | 6.4 MB |
| Foundation 2 | A2–B1 | 1–10 | Progress Test F2 (77 items) | 130,584 | 521 | 7.1 MB |
| Volume 1 | B1 | 1–10 | Practice Test 1 (97) | 87,032 | 311 | 4.6 MB |
| Volume 2 | B1 | 11–20 | Practice Test 2 (97) | 85,177 | 311 | 4.7 MB |
| **Volume 3** | **B2** | 21–30 | Practice Test 3 (97) | **159,645** | 510 | 7.8 MB |
| **Volume 4** | **B2** | 31–40 | Practice Test 4 (97) | **156,693** | 511 | 7.9 MB |
| **Volume 5** | **B2** | 41–50 | Practice Test 5 (97) | **159,808** | 511 | 7.7 MB |
| **Volume 6** | **C1** | 51–60 | Practice Test 6 **+ four timed forms** (97 each) | **185,427** | 559 | 9.3 MB |

Volume 6 is the largest book in the series, and almost all of the difference is
the four extra timed forms: 388 further items with their own answer keys and
audio scripts.

Head words, which no other unit in the series teaches: **480 a volume** in each
of Volumes 3 to 6 — 140 academic and 160 field words a volume in Volumes 5 and
6, plus 100 collocations, 50 stance markers and 30 nuance pairs. Across all
sixty units the course now teaches **1,917 head words with no repeats**, and
`check.py` proves it, allowing exactly three declared second senses (*analogy*,
*portfolio*, *stress*) where a later unit teaches a genuinely different meaning.

---

## 3. Volumes 3 and 4: what changed

Nothing was thrown away. Both volumes kept their twenty units, their task
names, their item counts and their tests. Three things were added or repaired.

**The two academic cycles.** Each of units 21 to 40 gained a cycle 4 and a
cycle 5 in all four skills: an academic reading passage, an academic listening
talk, a fifth speaking cycle and a fifth writing model, with cycle 5 arguing
against cycle 4. That is 160 new academic blocks across the two volumes, and it
is why Volumes 3 and 4 are now the thickest books in the series apart from
Volume 6.

**The density.** The passages were not only lengthened. They were compressed —
nominalised, pre- and postmodified, and populated with the series' own taught
vocabulary from beyond the 4,000-word band. Gate 9 (section 6) is the proof.

**The seam.** `seam.py` counts how many unknown word types a leaver of one
volume meets in the next one. The Volume 2 → Volume 3 seam now sits at a mean
of 7.9 unknown types a passage against the threshold of fifteen that Volume 1
Unit 10 gives the student, and the no-repeat gate across the whole series was
written in the same pass; it found seven repeats, which were resolved.

One cosmetic defect was found late and fixed: in units 21 to 35 the skill bar
above cycle 5 printed the same sub-topic as the one above cycle 4, so a student
met two identical-looking headings over two passages that disagree with each
other. Each cycle 5 now names its own objection, as units 36 to 60 always did.

---

## 4. Volume 5 — units 41 to 50, the volume that finishes B2

| # | Unit | Grammar | Cycle 4 claims | Cycle 5 objects |
|---|---|---|---|---|
| 41 | Instruments and Measurement | Extraposition: it-clauses and end weight | Resolution is not accuracy | When the instrument is the only one |
| 42 | Food, Farming and Soil | Reduced relative and appositive clauses | What tillage does to soil | Yield, and what it leaves out |
| 43 | Infrastructure and Maintenance | Marked theme and given-new ordering | What a backlog actually is | Renewal and the cost of waiting |
| 44 | Judgement and Bias | Concessive conditionals | Anchoring and what survives it | Calibration, and whether it can be trained |
| 45 | Translation and Meaning | Reporting at a distance | Equivalence and what it asks for | When two texts disagree |
| 46 | Transport and Movement | Correlative and parallel structures | Why a new lane fills up | Charging for the road |
| 47 | Trials and Regulation | Ellipsis in comparison and coordination | What randomisation buys | Surrogate endpoints and what they hide |
| 48 | Water, Scarcity and Rights | Inverted hypothetical past | How a shared aquifer behaves | Who owns the water |
| 49 | Taxation and Public Finance | Nominal clauses as subject and complement | Who really pays a tax | Why people pay at all |
| 50 | Error and Self-Correction in Science | Attribution and evidentials across a text | How science corrects itself | What the correction mechanism misses |

Lengths, measured: r3 passages 280–300 words (the real test's own length, kept
in every volume); the two academic passages 350–411 words, on a per-unit band
that ramps from 346–374 at unit 41 to 396–424 at unit 50; academic listening
scripts 281–328 words; the fifth writing model 257–295.

---

## 5. Volume 6 — units 51 to 60, the only volume written at C1

| # | Unit | Grammar | Cycle 4 claims | Cycle 5 objects |
|---|---|---|---|---|
| 51 | Quantum Theory and Interpretation | Heavy pre- and postmodification | What the formalism says | What the formalism does not say |
| 52 | Constitutional Design | Long-range cohesion and anaphora | Why a constitution is hard to change | What judicial review cannot do |
| 53 | Causation in Epidemiology | Counterfactual reasoning at length | What a cause means in a population | When the data cannot answer |
| 54 | Algorithms, Fairness and Audit | Qualification and scope: only, even, at least | What the impossibility result says | What an audit can reach |
| 55 | Historiography and Sources | Reported stance and free indirect style | What a period is for | Whether the objection survives itself |
| 56 | Climate Attribution | Modal stacking and graded commitment | How an event is attributed | What attribution cannot settle |
| 57 | Vagueness and Meaning | Scope ambiguity and its repair | Why the sorites bites | Whether the answer matters |
| 58 | Monopoly and Regulation | Concessive-contrastive chains | What a market can be made to do | Whether a remedy can work |
| 59 | Consciousness and Explanation | Metadiscourse and the shape of an argument | Why the gap looks unbridgeable | Whether the gap is in the world |
| 60 | Testing and What a Score Means | The whole repertoire, under time | How a test is validated | What a test does to teaching |

Lengths, measured: the two academic passages 393–453 words, on a band that
ramps from 386–414 at unit 51 to 436–464 at unit 60, so unit 60 carries the
longest reading in the course; academic listening scripts 308–355; the fifth
writing model 289–331. The r3 passage stays at 263–300, because that is the
real test's own length and a candidate should keep meeting it.

### 5.1 The four timed forms

Volume 6 carries **Practice Test 6 and four further timed forms** — `test61` to
`test64` — rendered under their own titles with their own answer keys and audio
scripts. The reason is in the band arithmetic: the one thing a unit cannot give
a candidate near the top of the scale is four sections in a row against a
clock, where the third one is the section that decides the band.

Each form is held to the same 97-item table in `checktest.py` that Practice
Tests 1 to 4 pass: two reading modules of ten gaps, five daily-life items and
five academic items each; listening modules of eighteen and sixteen items;
twelve writing items; eleven speaking items.

| Form | Reading passage 1 | Reading passage 2 |
|---|---|---|
| Practice Test 6 | The Hole Nobody Was Looking For | The Script That Turned Out to Be Greek |
| Timed Form 1 | The Clock That Could Not Be Built | The Insect and the Isthmus |
| Timed Form 2 | One Part in Two Hundred | The Year Without a Summer |
| Timed Form 3 | The Tree That Was Not Magnetised | A Sample of One |
| Timed Form 4 | The Experiment That Measured Nothing | The Sea That Was Spent on Purpose |

### 5.2 One page that exists only in Volume 6

The 2026 test reports 1 to 6 in half bands, one band a section, and the overall
score is the **average of the four section bands rounded to the nearest half
band**. At the top of the scale that arithmetic is the whole story: a candidate
who reads at 6.0 and speaks at 4.5 scores 5.5, and the only route to 6.0 is
four sections at 6.0.

So Volume 6's front matter carries a page no other volume has — the arithmetic
itself, a table of five four-section profiles with their averages and overall
bands, and four instructions that follow from it: read the four figures before
the overall one; find your lowest section; ignore half-band differences,
because the published standard error is about half a band; and spend your time
unevenly.

---

## 6. Density: the gate that made this work necessary, and the result

`gate9.py` was written **before** the content, and Volumes 3 and 4 failed it on
the day it was written. That failure was the point. Each volume declares a
two-sided window on four numbers computed from its academic prose only — the
share of running words from the 1,000 commonest forms, the share beyond the
4,000-form Foundation ceiling, mean sentence length, and the
`-tion/-ment/-ity/-ness/-ance` rate that makes academic prose dense rather than
merely long.

| Volume | 1k share | beyond 4k | mean sentence | nominalisation | verdict |
|---|---|---|---|---|---|
| Foundation 1 | 83.6% *(80–100)* | 3.7% *(0–5.5)* | 10.0 *(8–11.5)* | 0.6% *(0–1.2)* | pass |
| Foundation 2 | 77.9% *(74–81)* | 8.2% *(6–10.5)* | 12.4 *(11–14.5)* | 1.3% *(0.8–2.2)* | pass |
| Volume 1 | 72.3% *(70–74.5)* | 11.5% *(10–13.5)* | 16.7 *(15–18)* | 1.6% *(1.2–2.6)* | pass |
| Volume 2 | 69.6% *(67.5–71)* | 14.2% *(13–16)* | 18.8 *(17.5–20.5)* | 3.1% *(2.4–4)* | pass |
| **Volume 3** | 68.0% *(66–68.5)* | 17.1% *(16–19)* | 22.5 *(21–24)* | 5.0% *(4–5.5)* | **pass** |
| **Volume 4** | 66.9% *(64.5–67)* | 18.8% *(18.5–21.5)* | 25.8 *(24–26.5)* | 6.4% *(5–6.5)* | **pass** |
| **Volume 5** | 64.0% *(62.5–65)* | 21.2% *(21–24)* | 27.5 *(26–28.5)* | 6.5% *(6–7.5)* | **pass** |
| **Volume 6** | 61.5% *(59–62)* | 24.2% *(24–28)* | 29.3 *(28–31)* | 8.4% *(7–9)* | **pass** |

Read down that table and the ladder is monotone on all four numbers, which is
what a series of eight books at rising levels should look like and did not look
like before this work.

### 6.1 The lesson that cost the most time

The 1k share is mostly function words. Swapping an ordinary content word for a
rarer synonym lowers nothing that matters and raises the untaught-word count,
which is capped at twelve a block by `check.py`. Density comes from two places
only:

* **nominal compression** — *the cancellation of*, *the prevention of*, *any
  system constructed for the prediction of the past*; and
* **credited-and-rare vocabulary** — the series' own taught head words that
  happen to sit beyond the 4,000-form band.

A small tool, `cand.py`, answers the only question that matters while drafting:
is this word credited to the student, and is it beyond 4k? Writing the passages
compressed from the start, with that check in hand, is what made the last two
volumes tractable. The nominalisation floor has one trap worth recording:
plurals do not match the regex, and swapping one nominalisation for another
gains nothing — the fix always has to *add* one.

### 6.2 Per-unit density, Volume 6

The volume window is tight, so every unit was measured on its own.

| Unit | 1k | beyond 4k | mean sentence | nominal |
|---|---|---|---|---|
| 51 | 62.2 | 24.5 | 29.0 | 8.6 |
| 52 | 62.4 | 23.8 | 28.9 | 8.6 |
| 53 | 61.6 | 24.7 | 29.8 | 7.9 |
| 54 | 62.0 | 26.0 | 28.5 | 10.2 |
| 55 | 61.1 | 26.2 | 28.3 | 9.1 |
| 56 | 59.6 | 26.3 | 29.6 | 8.2 |
| 57 | 62.8 | 23.0 | 28.7 | 9.0 |
| 58 | 59.9 | 22.2 | 31.0 | 7.5 |
| 59 | 62.9 | 21.4 | 28.9 | 8.2 |
| 60 | 60.3 | 24.4 | 30.5 | 7.2 |

The volume's beyond-4k figure of 24.2% sits just above a floor of 24.0, which
is the thinnest margin anywhere in the series. Units 54 to 56 were written
deliberately dense to hold it, and unit 60 at 24.4 was the last correction. A
future edit that plains down any academic passage in this volume should expect
to re-run gate 9 and may have to pay the density back somewhere else.

---

## 7. The nine gates, all eight volumes

| Gate | What it proves | Result |
|---|---|---|
| 1 structural | every unit has every block the shape requires, at the right item counts, with explanations over 30 characters and answers spread across at least three positions | **PASS** — 60 units |
| 2 vocabulary | 1,917 head words, no repeats except three declared second senses; at most 12 untaught words in any block | **PASS** |
| 3 containment | no volume teaches a structure a later volume owns | **PASS** |
| 4 handoff | every Volume 1 grammar point has a named prerequisite in the Foundation volumes, and nothing is taught twice | **PASS** |
| 5 test shape | 97 items in each of Practice Tests 1–6 and Timed Forms 1–4; 59 in Progress Test F; 77 in F2 | **PASS** — 10 × 97, 59, 77 |
| 6 no clipped text | every fitted run in every figure measured against the box it was promised, with exact DejaVu metrics | **PASS** — 0 overruns, 0 runs shrunk under 7.5px, all eight volumes |
| 7 readiness | a Foundation 2 leaver meets ≤ 12 unknown word types in any Volume 1 passage | **PASS** — worst 7, mean 1.5 |
| 8 zero omissions | every passage, script turn, model, speaking cycle and answer-key explanation is present in the .docx the student receives | **PASS** — 15,323 strings checked across the eight files |
| 9 density | the four profile numbers inside each volume's declared window | **PASS** — all eight |

### 7.1 The seam report, which is not a gate

`seam.py` counts unknown word types a leaver of one volume meets in the next.
The last two seams are wider than the earlier ones, and that is expected rather
than hidden:

| Seam | worst | mean | passages over 15 |
|---|---|---|---|
| Foundation 1 → Volume 1 | 33 | 11.4 | 14 of 40 |
| Foundation 2 → Volume 1 | 7 | 1.4 | 0 of 40 |
| Volume 1 → Volume 2 | 17 | 6.8 | 2 of 40 |
| Volume 2 → Volume 3 | 22 | 7.9 | 2 of 80 |
| Volume 3 → Volume 4 | 21 | 9.8 | 6 of 80 |
| Volume 4 → Volume 5 | 26 | 11.6 | 17 of 80 |
| Volume 5 → Volume 6 | 27 | 11.3 | 19 of 80 |

Nineteen of Volume 6's eighty academic passages put more than fifteen unknown
word types in front of a Volume 5 leaver. At C1, on fields like quantum
interpretation and supervaluationism, that is the cost of the subject matter
rather than a defect in the sequencing — but it is the number to watch if a
Volume 7 is ever written, and it is the reason Volumes 5 and 6 teach 160 field
words a volume where Volumes 3 and 4 teach 120.

---

## 8. What is in the package

`TOEFL_iBT_2026_Course_All_Eight_Volumes.zip` — eight .docx files and a
README.txt, 55 MB.

Each volume contains its ten units, its practice test, an answer key with an
explanation for every item, audio scripts for every listening and speaking
task, a glossary and a grammar reference. Volume 6 adds the four timed forms,
their keys and their scripts.

They are Word documents. Word, LibreOffice Writer, Google Docs and Pages all
open them. Every figure is a picture, so nothing reflows and nothing moves when
you print.

---

## 9. What I would look at next

* **The Volume 5 → Volume 6 seam.** Nineteen passages above the fifteen-type
  threshold is tolerable at C1 and is the widest number in the series. A pass
  that moves ten or fifteen field words from Volume 6 into Volume 5's wordlists
  would narrow it without touching a passage.
* **Volume 6's beyond-4k margin.** 24.2% against a 24.0 floor. It holds, but it
  has no slack.
* **The r3 passage across Volumes 3 to 6.** It is deliberately held at the real
  test's length while everything around it grows. That is the right decision
  for exam realism, and it does mean cycle 3 is the easiest reading in the unit
  by a widening distance as the volumes rise.
