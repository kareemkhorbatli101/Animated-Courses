# English for NGOs — New Syria Edition
## Build record

Six books, sixty units, measured and gated. Every figure below is read from the
built packages, not from the drafts.

---

### 1 · Totals

| Measure | Value |
|---|---|
| Books | 6 |
| Units | 60 |
| Total words | 385,107 |
| Figures | 918 |
| Graded items | 5,040 |
| Answer-key exercise blocks | 1,560 |
| Vocabulary terms, all distinct | 1,200 |
| Grammar points, all distinct | 60 |
| AI capabilities, all distinct | 60 |
| Brief Labs | 60 |
| Decision Room clinics | 60 |

---

### 2 · Per book

| Book | Level | Words | Prose words / unit | Mean sentence | Band | Over cap |
|---|---|---|---|---|---|---|
| 1 · The Queue at the Gate | A2.1 | 59,735 | 383–465 | 11.54 | 8.5–12.5 | 10 (1.3%) |
| 2 · The List, the Distribution and the Complaints Desk | A2.2 | 61,135 | 384–415 | 11.26 | 8.5–12.5 | 9 (1.1%) |
| 3 · Explaining a Decision Nobody Wants | B1.1 | 63,848 | 433–473 | 13.59 | 11.5–16.5 | 0 (0.0%) |
| 4 · Proposals, Partners and the Donor’s Report | B1.2 | 63,896 | 446–482 | 13.40 | 11.5–16.5 | 1 (0.1%) |
| 5 · When Something Goes Wrong in the Field | B2.1 | 68,673 | 511–626 | 16.69 | 15.0–21.0 | 0 (0.0%) |
| 6 · The Organisation, the Community and the State | B2.2 | 67,820 | 547–623 | 17.52 | 15.0–21.0 | 0 (0.0%) |

### 2a · Pages, as converted

| Book | Level | Pages |
|---|---|---|
| 1 · The Queue at the Gate | A2.1 | 198 |
| 2 · The List, the Distribution and the Complaints Desk | A2.2 | 200 |
| 3 · Explaining a Decision Nobody Wants | B1.1 | 208 |
| 4 · Proposals, Partners and the Donor’s Report | B1.2 | 208 |
| 5 · When Something Goes Wrong in the Field | B2.1 | 209 |
| 6 · The Organisation, the Community and the State | B2.2 | 208 |
| **Series** | | **1,231** |

Sentence caps: 26 words at A2, 34 at B1, 44 at B2. Mean sentence length is
measured on the prose subset only — reading, the AI extension, the tasking body
and the clinic brief — so that exercise stems and dialogue do not flatter the
figure.

---

### 3 · The twenty-three per-book gates

Every one of the six books returns `ALL CHECKS PASS` on all twenty-three:

1. **Structure** — 10 units, 153 figures, 120 part bands, titles matching the series spec
2. **Answer-key integrity** — 840 graded items per book, no broken gap, no open item without an answer, 260 exercise blocks
3. **Multiple-choice integrity** — no invalid option, key distribution even across A/B/C/D
4. **True / false balance** — at least two of each value in every set
5. **Vocabulary** — 200 terms per book, no repeat inside the book, none taught in an earlier book, every exercise target present in the unit table
6. **Classify task** — four categories, six items, each item in exactly one
7. **Figure numbering and captions** — every unit carries figures .0 to .14, each captioned
8. **Case clinic structure** — five stages, three voices, a bank of four, 100 stage bands
9. **Register and density** — mean sentence length inside the level band, over-cap sentences counted
10. **Dialogue and task parity** — 11–12 turns per dialogue, 3 speaking tasks, 5 can-do statements, 4 foundations items per unit
11. **Data points sourced** — 20 data point boxes per book, each attributed
12. **No invented statute** — no legal requirement or sum of money stated as a jurisdictional fact
13. **No live political reference** — checked against a stop list; parties, armed actors and contested terms absent
14. **Invented organisations only** — real place names permitted, every organisation invented, misspelt variants caught
15. **Role consistency** — no character holding two incompatible roles
16. **Precision in model answers** — no vague quantifier in any model answer or bank line
17. **No capability forecast** — no claim about what a system will be able to do later
18. **Brief Lab integrity** — exactly three fault types, twice each, all permitted at that level
19. **Fault ladder** — no fault used before it is introduced
20. **AI ladder** — capabilities in order, each carried by the extension, the tasking and the clinic
21. **Boundary line on every capability** — 10 of 10 valid per book
22. **Dissent** — at least four dialogues ending on an open objection; all ten do
23. **The Sentence You Must Say to Somebody You Cannot Help** — 10 of 10 complete, no repair phrase reused more than twice

---

### 4 · The two series gates

**Gate 19 · the fault ladder across sixty labs.** Each of the eight precision
faults must be diagnosed in at least twelve of the sixty Brief Labs:

| Fault | Labs |
|---|---|
| unscoped set | 27 |
| unbounded quantity | 17 |
| unstated criterion | 17 |
| undefined done | 25 |
| ambiguous referent | 25 |
| missing condition | 25 |
| unstated exception | 22 |
| hidden assumption | 22 |

**Gate 22 · dissent across sixty clinics.** The manager, founder or senior
figure must be wrong in at least twenty of the sixty clinics, and the sceptic
right in at least twelve:

| Measure | Required | Actual |
|---|---|---|
| manager or senior figure wrong | 20 | 60 |
| sceptic right, plan dropped | 12 | 60 |

---

### 5 · Vocabulary ledger

1,200 terms across sixty units, 200 per book, every one distinct across the
whole series. The ledger records the unit that teaches each term and is written
to `vocab_ledger.json`. Terms were pre-cleared against the running ledger
before each unit was drafted, which is why no book repeats a term from an
earlier one.

---

### 6 · Build pipeline

For each book: ten unit files, checked individually for structure, key
integrity, figure count and sentence length; then case normalisation,
multiple-choice key redistribution, package build, the twenty-three gates,
repeated-gap-stem diagnostics, and a sentence-length split pass against the
level cap. Then the series pass: all six books together, the two series gates,
and the vocabulary, grammar and AI ledgers.

---

### 7 · What is in the package

- Six `.docx` books and six `.pdf` books
- `README.md` — what the series is and the four standing rules
- `PLAN.md` — the series design, the cast, the invented world
- `ALIGNMENT.md` — the sixty-row table: unit, AI capability, grammar point, faults
- `BUILD_RECORD.md` — this file
- `vocab_ledger.json` — all 1,200 terms with their teaching unit
- Six `*_FULL_TEXT.md` files — the complete text of each book in markdown
