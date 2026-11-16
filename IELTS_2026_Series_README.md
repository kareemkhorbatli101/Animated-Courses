# IELTS 2026 Preparation Course — the graded series

Six volumes, 60 units, 300 cycles. Academic **and** General Training in
every book. Built from one source, gated the same way, and graded so that
each volume starts where the one below it stops.

Foundation 1 and Foundation 2 (below 4.0 and 4.0–4.5) are planned in
`IELTS_Series_Plan.md` but are **not built yet**. This package is the six
graded volumes, which are.

---

## The books

| Book | CEFR | Band | Units | Pages | Figures | File |
|---|---|---|---|---|---|---|
| Volume 1 | B1 | 5.0 | 1–10 | 468 | 436 | `IELTS_2026_B1_Volume_1.docx` |
| Volume 2 | B1+ | 5.5 | 11–20 | 481 | 438 | `IELTS_2026_B1plus_Volume_2.docx` |
| Volume 3 | B2 | 6.0 | 21–30 | 497 | 445 | `IELTS_2026_B2_Volume_3.docx` |
| Volume 4 | B2 | 6.5 | 31–40 | 506 | 464 | `IELTS_2026_B2_Volume_4.docx` |
| Volume 5 | B2+/C1 | 7.0 | 41–50 | 513 | 430 | `IELTS_2026_B2plus_Volume_5.docx` |
| Volume 6 | C1 | 7.5–8.0 | 51–60 | 539 | 449 | `IELTS_2026_C1_Volume_6.docx` |

**3,004 pages. 2,662 rendered figures. 2,400 head words, none repeated
across volumes.**

Band 6.5 (Volume 4) and 7.0 (Volume 5) are the two thresholds written into
university and immigration requirements, which is why they were written
first.

---

## What a unit looks like

Every unit is five cycles, and **no cycle belongs to one module**. Each one
is a complete pass: reading, listening, speaking, writing, grammar,
vocabulary, expressions, transitions.

- **Cycle 1** — two short General Training texts + a Part 1 listening
- **Cycle 2** — the four-short-texts task
- **Cycle 3** — a General Training work text + the unit's figure
- **Cycles 4 and 5** — Academic passages

Every unit covers Listening Parts 1–4. Questions are numbered continuously
through the unit, across reading and listening alike, exactly as the paper
numbers them.

---

## What the series teaches

Skills and technique, not hacks. Receptive before productive. Tied
throughout to the Cambridge band descriptors, because **this is not just a
language test.**

The reading method is one loop, taught in Volume 1 unit 1 and used 300
times after it: **orient, load the questions, then read one paragraph at a
time.** Underline and keep reading. Headings before detail. Out-of-order
questions used as a memory aid rather than fought. Passages split wherever
a paragraph runs past about 150 words, so that a paragraph is always a
thing you can hold.

Listening parallels Reading step for step. Brainstorming and outlining are
taught extensively before any essay is asked for. The eleven essay
structures and the ten Task 1 principles are introduced at the pace each
level can carry, with 1D, 2D and hybrid Task 1 organisation. Speaking runs
on the 2-to-5 rule. **No templates anywhere.**

### The speed ladder

| Volume | Reading speed |
|---|---|
| 1 | 100–120 wpm |
| 2 | 110–130 |
| 3 | 125–140 |
| 4 | 150–165 |
| 5 | 170–185 |
| 6 | 190–210 |

---

## How the level of each book is proved

Two numbers are measured on every academic passage and every timed paper:
the share of running words from the first 1,000 most frequent English words
(`k1`), and the share beyond the first 2,000 plus the academic list
(`beyond`). Each volume has its own window, and the gate is the two sets
measured **together**.

| Volume | k1 | beyond | verdict |
|---|---|---|---|
| 1 | 69.9% | 13.4% | in window |
| 2 | 69.3% | 14.8% | in window |
| 3 | 66.7% | 17.4% | in window |
| 4 | 64.8% | 19.4% | in window |
| 5 | 64.6% | 21.0% | in window |
| 6 | 62.8% | 23.4% | in window |

The two productive bands do **not** scale down with the cover band: a model
answer has to satisfy the rubric at any level, so the writing models in
Volume 1 are held to the same standard as those in Volume 6.

---

## Gates every book passes

| Gate | What it proves |
|---|---|
| `check.py` | bands, continuous numbering, Listening Parts 1–4 in every unit, head-word seams against every other volume, explanation length |
| `density.py` | the register window above |
| `book.py` | the build itself |
| `omit.py` | zero omissions — every passage, script turn, model, question and explanation reaching the file |
| `gate6.py` | every run of text inside its box, nothing printed under 7.5px |

All five pass on all six files in this package.

---

## What is in this package

- the six volumes, as `.docx`
- `IELTS_Series_Plan.md` — the full series design, including the two
  Foundation books not yet built
- `IELTS_Series_Full_Outline.docx` — the unit-by-unit outline of all 80
  planned units
- `IELTS_Volume_N_Report.md` — a delivery report per volume: what is in it,
  how its level was measured, what was fixed and what is still open

## Known open item

The syntax window (mean sentence length, nominalisation) is a recorded
design decision rather than a gated measurement. Volume 1 measures 24.0
words a sentence in its unit passages; Volume 6 measures more. If a
Cambridge measurement ever fixes the real figure, the unit passages are
what to move.
