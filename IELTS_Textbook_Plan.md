# From material to coursebook — the plan for Volume 3

`IELTS_Volume_3_Pedagogy_Audit.md` upheld the verdict on fourteen of
fifteen factors and put one number on it: **Volume 3 is 85% material and
15% teaching.** 238 words are addressed to the learner across an 11-page
cycle; 113 of its 124 texts and recordings arrive with no preparation of
any kind; there is no contents page in the book; two cross-references tie
569 pages together; 350 of 400 taught words are never seen again.

This plan does not replace any of that material. **Every passage, every
recording, every question, every wrong-option line and every model answer
in Volume 3 stays.** What the plan adds is the apparatus that turns
material into a course, and it adds it under the same discipline the rest
of the project runs on: the gate is written before the content, every
change is declared, and nothing ships until all eleven gates are green.

**The target, stated as a measurement:** teaching prose from 15.1% to
**35–45%** of the volume, which is the band a commercial coursebook sits
in, with every one of the fourteen failed factors passing a gate that did
not exist when the audit was written.

---

## Part 1 · What a cycle becomes

A cycle today is: *cycle bar → passage → questions → recording →
questions → speaking → writing → grammar → word lists.* Seven blocks with
nothing between them.

A cycle after this plan, in reading order. **New in bold.**

| | what the learner meets | words | why it is there |
|---|---|---|---|
| 1 | cycle bar | — | where you are |
| 2 | **`bridge` — one sentence tying this cycle to the last one** | 25 | factor 7: the cycles stop being five separate lessons |
| 3 | **`serves` — the test tasks this cycle rehearses, named** | 20 | factor 5: the learner is told why, every cycle, not 27% of the time |
| 4 | **PREVIEW READING — 70–110 words, 3 questions** | 110 | a short, easy, same-topic text that activates the topic and pre-teaches two words before the main passage |
| 5 | **`leadin` on the main passage — 3 questions to answer first** | 40 | factor 2: predict, don't decode cold |
| 6 | passage (unchanged) + strategy box | — | — |
| 7 | exercise + questions (unchanged) | — | — |
| 8 | **`debrief` — check, and look again at the one you got wrong** | 45 | factor 3: the feedback loop stops being a 300-page page-turn |
| 9 | **PREVIEW LISTENING — 50–90 words, 3 questions** | 90 | the same for the ear: one short recording before the real one |
| 10 | **`leadin` on the main recording** | 40 | — |
| 11 | recording + exercise + questions (unchanged) | — | — |
| 12 | **`debrief`** | 45 | — |
| 13 | speaking (unchanged) + **`serves` line** | 20 | — |
| 14 | writing (unchanged) + **`serves` line** | 20 | — |
| 15 | **GRAMMAR, rebuilt** — see Part 2 | +190 | factor 4 |
| 16 | vocabulary, expressions, transitions + **`recycle` box: the words from earlier cycles this cycle re-used** | 40 | factor 8 |

**Per cycle: about 725 new words of teaching prose and 9 new questions,
in roughly 3.1 extra pages.** Nothing is removed.

### Why a preview reading and a preview listening, specifically

The audit's factor 2 is the heaviest fault after the missing contents
page, and a strategy box does not fix it: telling a learner *how* to
attack a notice is not the same as giving them something to stand on
before they meet one. The preview block does four things no existing part
of the cycle does:

1. **It establishes the topic in easy language first.** The main passage
   at band 6.0 runs 620–820 words of B2 prose. The preview runs 70–110
   words at roughly B1, on the same subject, so that the learner meets
   the *ideas* before meeting the *difficulty*.
2. **It pre-teaches the two words that block comprehension** — in
   context, in a sentence, not as a gloss in a list at the back.
3. **It is a task, not a warm-up.** Three questions, answerable, gated by
   `check.py` like any other item, so the preview cannot decay into
   decoration.
4. **It makes the main text a second encounter.** That is the single
   best-evidenced move in reading pedagogy and the series currently never
   makes it.

The preview listening does the same for the ear, and matters more there,
because a recording plays once: a learner who has already heard the
topic, the register and two of its words has a different task in front of
them.

---

## Part 2 · The grammar slot, rebuilt

Today: 28 words of explanation, 4 examples, 5 rewrite items. After:

| | what it becomes | words |
|---|---|---|
| `context` | **the sentence from this cycle's own passage that the pattern comes from, quoted, with the pattern marked.** 46 of 50 cycles already draw their examples from the cycle's text — this makes that visible to the learner instead of leaving it implicit | 40 |
| `explain` | 28 words → **100–140**: what the pattern does, when it is the right choice, and the one thing learners at this band get wrong with it | 120 |
| `examples` | 4, unchanged | — |
| `stage1` | **NEW — recognition: 5 items. Which of these sentences uses the pattern? Which of these two is the examiner going to prefer, and why?** A recognition stage before a production stage is the step the slot has never had | 60 |
| `items` | the existing 5 production items, unchanged | — |
| `fix` | "Find the fault", unchanged | — |
| `serves` | **one line: what this buys in the test, named by criterion** — *Grammatical Range and Accuracy*, or *Task Response*, and in which task | 25 |

**Grammar practice goes from 5 items a cycle to 10, staged**, and the
explanation goes from a sentence and a half to a paragraph with a
contextualised source and a stated pay-off.

---

## Part 3 · Teacher notes, and why they go in a second book

The requirement behind teacher notes is the useful one: *force the
pedagogy and the relationship to the test to be stated, so that no cycle
can exist without a justification.* Two things follow.

**1. The justification goes in the student's book, short.** That is the
`serves` field in Parts 1 and 2 — one line per cycle and per slot, naming
the test task and the criterion. Gated: `gate11.py` fails any cycle whose
`serves` names a task type that `qtypes.py` cannot find in that cycle's
own items. **A cycle cannot claim to rehearse matching headings unless it
contains matching headings.** That is the mechanism that makes the
justification real rather than decorative.

**2. The full note goes in a Teacher's Edition.** 130 words a cycle of
student-facing teacher-talk would be 7,800 words of the wrong register in
a self-study book. Instead, Volume 3 gains a second deliverable:

> **`IELTS_2026_B2_Volume_3_Teachers_Edition.docx`**
> For each of the 60 cycles: what the cycle is for · which test task it
> rehearses and why that task is hard at this band · the predicted
> failure (what a band-5.5 learner will do wrong here) · what to do in
> class if they do · the answer to every exercise, in place rather than
> at the back · how long it takes.

That is **7,800 words of teacher notes plus a 60-row cycle rationale
table**, and it is the artefact that forces the design question to be
answered sixty times. It is also, separately, a product: no self-study
IELTS series ships a teacher's book with a per-cycle test rationale.

---

## Part 4 · The contents and preview section, detailed and justified

The audit's factor 1. Volume 3 gains a front section of eight pages that
does not exist in any of the eight books:

### 4.1 Contents, in three tables

1. **The volume at a glance** — 12 rows, one a unit: unit number, theme,
   its five cycle sub-topics, the test tasks it carries, its page, the
   hours it takes.
2. **Where each test task is taught** — a reverse index. All eleven
   Reading types, six Listening types, both Writing tasks, three Speaking
   parts, down the side; the cycles that teach each one, across. A learner
   who is weak at matching headings can find every place in the book that
   teaches it. **Generated from `qtypes.py`, not typed**, so it cannot be
   wrong.
3. **The grammar and vocabulary map** — 60 rows: cycle, grammar point,
   the eight words, the criterion each serves.

### 4.2 The preview, justified

Four pages that defend the book's design *to the learner*, which the
audit's factor 15 found nowhere on the page:

- **Why five cycles, and why in this order.** Read → listen → speak →
  write, because nobody produces a pattern they have not processed. Why
  cycles 4 and 5 are a pair. Why the grammar comes *after* the writing.
- **Why the preview blocks exist** — stated to the learner, in two
  sentences, because a learner who knows why a task is easy does it
  properly instead of skipping it.
- **What this volume assumes you can already do**, and the Volume 2 units
  to go back to if you cannot.
- **How to use the book in three modes**: 12 weeks taught, 8 weeks
  intensive self-study, and "I sit the test in three weeks" — which
  cycles to do and which to skip, named.
- **What the book will not do for you.** It cannot mark your writing; it
  gives you a model at your band and a checklist, and says what that is
  worth.

### 4.3 Per-unit preview

Each unit opener goes from **56 words to about 180**, plus a map figure:
the five cycles, what each one does, the test tasks each carries, the
can-dos the unit closes on, and the one question the unit is built round.
The learner can see the unit before entering it.

---

## Part 5 · Subject diversity: two new units

The audit's factors 12 and 13 are the two the existing material cannot
fix, because they are about what is *absent*. Volume 3 repeats Volume 1's
ten topics and runs one intellectual move — a social-policy question
about a measurement — fifty times. A real Academic Reading paper puts an
archaeology passage beside one on insect navigation beside one on
workplace psychology.

**Volume 3 goes from 10 units to 12.** The two new units are chosen to be
the two subject areas most common in Academic Reading and wholly absent
from the series' first three volumes, and both are deliberately *not*
policy:

### Unit 11 · How Animals Find Their Way

Natural science and animal behaviour: the single most common Academic
Reading subject area in the published papers, and absent from Volumes
1–3. Five cycles: *a wildlife centre's visitor notice · what people
notice about birds in their own garden · how a migration route is
measured · the experiment that ruled out the sun · what tracking still
cannot tell us.* It carries a migration map (plan labelling), a process
diagram (flow-chart completion) and a classification task (matching
features) naturally, so it serves the type floors as well as the subject
spread.

### Unit 12 · What the Ground Remembers

Archaeology and ancient technology: the second most common, and likewise
absent. Five cycles: *a site's visitor rules · four volunteers on a dig ·
how a layer is dated · why a reconstruction is a hypothesis · what
survives and what that does to the record.* It carries a site plan, a
stratigraphy diagram, and a dating process — again, three task types the
volume is thin on.

Both are **science with a story**, which is the other half of the fix: the
dryness the audit measured is partly register and partly subject. A unit
about an experiment that ruled out the sun has a narrative that a unit
about whether a cap would help does not.

### The numbering decision, and its cost

Twelve units in Volume 3 breaks the 10-unit arithmetic that four scripts
hard-code. Two options were costed:

| option | cost | verdict |
|---|---|---|
| **Renumber** units 31–60 to 33–62 so the series stays contiguous | 30 file renames, **every freeze key in the baseline changes**, four scripts, the 80-unit outline, every report | rejected: thousands of declared diffs for a cosmetic property |
| **A table** — `VOL_UNITS = {3: [21..30, 81, 82], ...}` replacing the arithmetic in `book.py`, `check.py` (×2), `density.py` (×2), `freeze.py`, `gate10.py` | **6 small edits, no renames, no freeze-key churn**, and a volume can gain a unit again later for free | **adopted** |

The printed unit number becomes the unit's position in its volume —
*Volume 3 · Unit 11 of 12* — which is how both Foundation books already
number themselves, so this makes the series consistent rather than
inconsistent. The series-wide module number stays in the data as the
internal id and on the strapline for anybody tracking the 80-unit plan.

---

## Part 6 · Gate 11, written before any of it

Nothing above gets authored until the gate that measures it exists and
reports its true failure count. `pedagogy.py` already counts all fifteen
factors; it becomes `gate11.py` with thresholds:

| rule | threshold | today |
|---|---|---|
| every cycle has a preview reading and a preview listening | 100% | 0% |
| every main input block has a `leadin` | 100% | 0 of 124 |
| every main input block has a `debrief` | 100% | 0 |
| every cycle has a `bridge` and a `serves` | 100% | 0 |
| **every `serves` names a task type that cycle's items actually contain** | 100% | — |
| teaching prose as a share of the volume | **≥ 35%** | 15.1% |
| grammar explanation | ≥ 90 words | 28.3 |
| grammar practice items, staged | ≥ 10, in two stages | 5, one stage |
| grammar `context` quotes the cycle's own text | 100% | implicit in 46 of 50 |
| taught words reappearing later in the unit | **≥ 50%** | 12.5% |
| cross-references between cycles | ≥ 1 a cycle | 2 in the volume |
| unit preview | ≥ 150 words + a map figure | 56 words |
| review exercises a unit | ≥ 10 items | 0 |
| contents, task index and grammar map | all three present | none |
| teacher note for every cycle | 100% | no field |
| subject domains in the volume | ≥ 6 of the 12 Academic domains | 3 |

The "≥ 35%" and "≥ 50%" are **declared design targets**, like gate 10's
floors: this container cannot sample a Cambridge paper or a commercial
coursebook, so these numbers are a target this project is choosing and
will be labelled as such wherever they are quoted.

---

## Part 7 · The phases

Each phase ends green on eleven gates or it is not merged. `intent/<n>.json`
declares every change before it is allowed; `regress.py` fails the build
on anything undeclared.

| # | phase | what lands | green when |
|---|---|---|---|
| 17 | **the gate** | `gate11.py`, the `VOL_UNITS` table, the new fields in the data model, `book.py` renderers for preview / leadin / debrief / bridge / serves / recycle / staged grammar, `check.py` rules for all of them | gate 11 runs and reports its true failure count; the eight books still build and the other ten gates stay green with zero content change |
| 18 | **the front matter** | contents ×3, the four-page justified preview, the generated task index, the grammar map, the per-unit previews and maps | factors 1, 9 and 15 pass; the task index is generated from `qtypes.py` and matches it exactly |
| 19 | **the connective tissue** | 50 bridges, 50 `serves`, 124 lead-ins, 124 debriefs, the recycle boxes, and the vocabulary rewrite that takes recycling from 12.5% to 50% | factors 2, 3, 5, 7, 8 pass |
| 20 | **the previews** | 50 preview readings and 50 preview listenings, with 300 new gated questions | every cycle has both; `density.py` still green on the volume's reading band |
| 21 | **the grammar** | 50 rebuilt grammar slots: context, 120-word explanation, recognition stage, `serves` | factor 4 passes; grammar items 250 → 500 |
| 22 | **review and consolidation** | a 12-item review exercise a unit, re-testing that unit's grammar and re-using its words | factor 10 passes |
| 23 | **the two new units** | Units 11 and 12 in full, at the new standard, with their own ten cycles, and `VOL_UNITS` switched on | factors 12 and 13 pass; gate 10 still green on the enlarged volume |
| 24 | **the Teacher's Edition** | a second .docx: 60 cycle rationales, predicted failures, in-place answers, timings | every cycle has a note; no note contradicts its cycle's `serves` |
| 25 | **ship** | rebuild, eleven gates, re-freeze, re-measure every number, the completion report, repackage, push | `SUITE: ok` and every quoted number re-derivable |

---

## Part 8 · What it costs, measured

| | words | items | pages |
|---|---|---|---|
| 60 preview readings + 60 preview listenings | 11,000 | 360 | 78 |
| 148 lead-ins + 148 debriefs | 12,600 | 444 | 89 |
| 60 bridges + 60 × 3 `serves` | 4,700 | — | 12 |
| 60 grammar slots rebuilt | 11,400 | 300 | 72 |
| 12 unit previews + 12 reviews | 2,900 | 144 | 42 |
| contents, task index, grammar map, the justified preview | 2,500 | — | 8 |
| vocabulary recycling rewrite | — | — | 0 |
| **Units 11 and 12, complete** | 16,000 | 240 | 136 |
| **total new** | **61,100** | **1,488** | **437** |

**Volume 3 goes from 569 pages to about 1,006, and from 15.1% teaching
prose to about 38%.**

That page count is the one number in this plan worth arguing about before
work starts, so here is the lever: Volume 3 can ship as **one 1,006-page
volume** or as **3A (units 1–6, ~500pp) and 3B (units 7–12, ~510pp)**,
each with its own practice test. The split costs one extra timed Reading
and Listening paper and nothing else, and it is a packaging decision, not
a content one — say which you want and the plan absorbs it at phase 25.

---

## Part 9 · What this plan does not do

1. **It does not make the series' prose warm.** The audit found 1.5
   "you" per 100 words and the fix raises address, not temperature. The
   register stays specific, numerate and adult. If what is wanted is a
   friendlier voice, that is a different instruction and I should have it
   explicitly.
2. **It does not re-level the existing passages.** The 20 academic
   passages in Volume 3 stay at their measured band. The preview blocks
   are the new easy on-ramp; the climb itself is unchanged.
3. **It fixes Volume 3 only.** Every factor in the audit is series-wide:
   no book has a contents page, no book has previews, every book has
   28-word grammar explanations. Volume 3 becomes the reference
   implementation, and the same fourteen fixes then run across the other
   seven books — about four times this plan's work. The gate is written
   once and holds all eight.
4. **The 35% and 50% targets are chosen, not discovered.** They are the
   right order of magnitude for a coursebook and they are not a
   measurement of one.
5. **Nothing here has been tried on a learner.** The whole plan is an
   argument from pedagogy about artefacts, and the audit it answers is a
   count of fields in a data model.

---

## What I need from you before phase 17

Three decisions, and the first two change the plan's shape:

1. **One volume of 1,006 pages, or 3A and 3B at ~505 each?**
2. **Teacher's Edition as a separate book (my recommendation), or teacher
   notes printed inside the student's book?**
3. **Units 11 and 12: animal navigation and archaeology as proposed, or
   two other domains?** The other candidates absent from Volumes 1–3 are
   business and enterprise, psychology of the individual, art and
   architecture, and astronomy.

Say nothing and I start at phase 17 with one volume, a separate Teacher's
Edition, and the two units as proposed.
