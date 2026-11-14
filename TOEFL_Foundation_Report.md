# TOEFL iBT® Preparation Course 2026 — **Foundation**
## What was built, and how it was checked

*Companion to `TOEFL_Foundation_Plan.md`. Every number below is from the build,
not from the plan.*

---

## 1. The book

| | |
|---|---|
| Title | TOEFL iBT® Preparation Course 2026 — **Foundation** (Volume F) |
| Level | CEFR A1–A2 in, solid A2 out |
| Units | **10** — a full level, like every other volume |
| Words | **119,043** in the document body (Volume 1 is 120,202) |
| Figures | **348** (Volume 1 has 314) |
| File | `TOEFL_2026_Foundation.docx`, 4.7 MB |
| Assessment | Progress Test F — **59 items**, one module per section |

### The ten units

| # | Unit | Grammar | Question spine |
|---|---|---|---|
| F1 | People, Names and the First Week | be · a/an · plural -s | *Am / Is / Are …?* |
| F2 | The Campus and How to Find It | there is/are · prepositions of place · this/that | *Is there …? Where is …?* |
| F3 | Days, Times and the Timetable | present simple · third-person -s · frequency | *Do / Does …? When …?* |
| F4 | Family, Home and Where You Live | have got · possessive 's | *Have you got …? Whose …?* |
| F5 | A Day in Your Life | present continuous vs present simple | *What are you doing?* |
| F6 | Food, Prices and the Cafeteria | countable/uncountable · some/any · much/many | *How much …? How many …?* |
| F7 | Weather, Seasons and the Year | past simple of be · regular -ed · ago/last/in | *Was / Were …?* |
| F8 | Getting There: Travel and Transport | irregular past · questions with did | *Did …? Where did …?* |
| F9 | The Body, Health and the Clinic | can/cannot · should · orders · -ly words | *Can you …? What should …?* |
| F10 | Study, Work and Your Plans | going to and will · comparatives · and/but/because/so | *What are you going to …? Will …?* |

Every unit is twenty pages: the sixteen of a Volume 1 unit, plus the four
Foundation strands.

---

## 2. What is identical to Volumes 1–4, and what scales

**Identical.** Every task name, in the same order on the same pages. And every
item count, reused from `ITEMS_B1` without changing a single number: 15
word-completion gaps, r2 4+6, r3 4+7, l1 3+6, l2 3+5, l3 3+6, Build a Sentence
3+7, review 12+8+6. A low level needs *more* practice, not less; cutting the
exercise count would have been the easy mistake.

**Scaled, on a curve the build enforces per unit.**

| | F1 | F10 | Volume 1 |
|---|---|---|---|
| Academic passage | 117 words | 175 | 265 |
| Mean sentence length there | 7.3 | 11.7 | ~18 |
| Academic talk script | 85 | 164 | ~190 |
| Longest Listen-and-Repeat sentence | 9 words | 14 | ~22 |
| Build a Sentence tiles | 4–5 | 6–7 | 5–8 |
| …using a question frame | 5 of 10 | 8 of 10 | 8 of 10 |
| Email target | 36 words | 72 | free |
| Discussion post target | 40 words | 85 | 100 |

**Added — four strands a unit, none of them about the test**: Sound and
Spelling (letters, numbers, the three -s and three -ed sounds, word stress,
weak forms); Sentence Builder (a sentence needs a verb, comma splices, word
order, lists); Typing and the Screen (home row to a timed email, 8 → 18 words a
minute); Learning to Learn (a notebook that works, a learner's dictionary,
spaced review, guessing from context, what to do when you do not understand).

---

## 3. Vocabulary: 384 words, and a gate that enforces them

| Strand | Per unit | Total |
|---|---|---|
| Core, from the general-service band | 24 | **240** |
| Campus and everyday | 12 | **120** |
| Academic Word List bridge (F9, F10) | 8 / 16 | **24** |
| | | **384** |

The control band is the 2,200 most frequent word forms of English, taken from
the public FrequencyWords list and written into `toefl/content/_band.py`, so
the build needs no network.

**The gate is the point.** Every content word in every reading passage,
listening script, document, item stem, option, model answer and review clue
must be in the band, or taught by name in that unit or an earlier one, or a
declared proper noun. Anything else fails the build and names itself. Writing
inside that constraint is most of what made this book A2 rather than labelled
A2 — it caught *library*, *collect*, *valid*, *urgent*, *basement*, *profession*
and about ninety others, and each one was either taught or replaced.

**One deliberate change from the plan.** The plan named a 60-item AWL bridge.
The real number is **24**. Sixty would have crowded out the topic vocabulary
the last three units need, and the bridge is there to make the list familiar,
not to teach it. Volume 1 still teaches all 480.

---

## 4. The six gates

All six pass. They were written before any unit was.

| | Gate | Result |
|---|---|---|
| 1 | **Structural** — `check.py f1-f10`: item counts, four options, a real explanation per item, answer letters spread, Build a Sentence totals ten, no word taught twice | **PASS** — 10 units, 384 head words, no repeats |
| 2 | **Level** — every per-unit parameter inside its band, rising monotonically | **PASS** — enforced on passage and script length, mean and max sentence length, repeat length, tile count, question-frame ratio, both model-answer lengths |
| 3 | **Vocabulary control** — every content word in the band ∪ taught ∪ names | **PASS** — 0 words outside |
| 4 | **Handoff** — `handoff.py`: all ten Volume 1 grammar points resolve to a named Foundation unit, and no Volume 1 structure is taught early | **PASS** |
| 5 | **Grammar containment** — no structure appears before the unit that teaches it | **PASS** — no present perfect, passive or relative clause anywhere; no past before F7, no irregular past before F8, no continuous before F5, no comparison or future before F10 |
| 6 | **Figures** — nothing clipped by an image edge; every fitted run inside its declared width | **PASS** — 3,431 text runs in 348 figures, 0 clipped; 1,454 fitted runs, 0 outside their box |

Gate 6 is the one you asked for. It is the same gate that fixed the clipped
figures in Volumes 1–4, and it was run again on all five volumes together:
**12,436 runs in 1,296 figures across Volumes 1–4 and 3,431 runs in 348 figures
in the Foundation — zero violations in either.**

It earned its keep here too. My new `sound_strip` family drew the sound label
inside a circle, and six labels — `wasn't / weren't` among them — could not
shrink far enough to fit. Gate 6 named all six. The family now uses a box that
wraps the label onto two lines, and the gate is clean.

**No regression.** Volumes 1, 2, 3 and 4 rebuild to byte-identical files
(4,826,418 / 4,903,222 / 5,528,051 / 5,737,939), and their own gates still pass.

---

## 5. Progress Test F, and one page nobody marks

The real test is 97 items in two adaptive modules per section. Sitting that at
A2 produces a score of *cannot do this yet*, which teaches nothing.

**59 items, one module per section, the real order and the real names:**

| Section | Real test | Progress Test F |
|---|---|---|
| Reading | 40 | **20** (10 gaps + 5 daily + 5 academic) |
| Listening | 34 | **16** (3 responses + 5 conversation + 4 announcement + 4 talk) |
| Writing | 12 | **12** — unchanged |
| Speaking | 11 | **11** — unchanged |

Writing and Speaking do not shrink. Build a Sentence is ten because the real
task is ten — the same reason `check.py` has fixed it at ten for B1 and B2
since the course was written. Seven repeats and four interview questions are
performances, not comprehension items, and a shorter version would be a
different task.

Then **"First sight of the real thing"**: the genuine Academic Passage from
Volume 1 Unit 1, unchanged, at 265 words, with a short guide to reading it and
a box to write down how many words you did not know. It is not scored. Seeing
the destination is motivating; being graded against it is not.

---

## 6. The honest page

The front matter carries a page called *Where you are, and how far this book
takes you*. It says, in the book's own words, that it does not prepare you to
sit the TOEFL iBT®, that anybody who tells you otherwise is selling you
something, and that what it does do is take you from around A1 to a solid A2 —
at which point Volume 1 opens at page one. The last talk of the last unit says
the same thing again, and the back matter ends with a two-page bridge showing
exactly what changes in Volume 1 and what does not.

That was the part of your brief I took most seriously: a foundation course that
claims to be exam preparation is the thing that wastes a low-level learner's
year.

---

## 7. Files

```
TOEFL_2026_Foundation.docx          the book
toefl/content/f01.py … f10.py       the ten units
toefl/content/testf.py              Progress Test F
toefl/content/_band.py              the 2,200-word control band
toefl/content/_wordbank.py          the vocabulary gate
toefl/check.py                      gates 1, 2, 3 and 5   (python3 check.py f1-f10)
toefl/handoff.py                    gate 4                (python3 handoff.py)
toefl/frames.py                     + sound_strip, keyboard_map, frame_card
toefl/book.py                       + volume F, the four strands, the honest page,
                                      the irregular verbs, the Volume 1 bridge
```
