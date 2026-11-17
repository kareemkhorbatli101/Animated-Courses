# IELTS 2026 — the balance plan, finished

`IELTS_Balance_Plan.md` set out six phases (10 to 15), a gate written
before the content, and the same invariance contract the ten-phase fix
plan ran under. All six have shipped.

**What the gate says now:** `gate10.py` reports

```
PASS - 11 reading types and 6 listening types in every book,
no type over its ceiling, speaking split 25-40% per part
```

on all eight books, against **80 failures** when the gate was first
written. `check.py` passes on all eighty units and all forty-two timed
modules.

Every number in this document comes from `ielts/census.py`,
`ielts/gate10.py` or `ielts/check.py` and can be re-derived by running
them. Where a number is a declared design target rather than a
measurement, it says so.

---

## 1. What landed, phase by phase

| # | phase | what landed | green when |
|---|---|---|---|
| 10 | the gate before the content | `qtypes.py`, which classifies every item from its own shape and never from its printed label; `gate10.py`, which holds the census against a floor, a ceiling and a set rule; `census.py` | the gate runs and reports its true failure count (80) |
| 11 | every label tells the truth | `labeledit.py` rewrites each block's printed label from what the block holds. 713 labels in the first pass, 488 more after phase 13 changed the items, 113 more after the Foundation reading work | no label differs from the classifier's reading of its own block |
| 12 | the reading floors | 30 True/False/Not Given sets and 30 best-heading sets in Foundation 1, the same in Foundation 2, two plan-labelling tasks per Foundation book, matching-information and short-answer sets, and six authored `qkind` declarations | every reading type taught as a set of 3+ in every book, no type over 30%, matching family ≥20%, verification family ≥8% |
| 13 | the listening strand | the whole strand re-asked. Volumes 1–6 first, then both Foundation books, which between them had been 100% gap completion in 593 questions | all six listening types taught as a set of 3+ in every book, note completion ≤45%, completion family 30–65%, multiple choice ≥10% |
| 14 | the speaking split | 195 new cue cards, two or three a unit, in front of the discussion each slot already held; the twenty Foundation long turns that had no card printed at all | each of the three parts holds 25–40% of a book's speaking slots |
| 15 | the missing timed papers | a Writing paper and a Speaking paper for Volume 1, 2, 3, 4, 5 and both Foundation books: fourteen modules | every book can be used to sit a full mock exam |

### Two defects found while doing the work

Neither was in the plan. Both are the kind of thing the discipline exists
to catch, and both are fixed.

1. **Eight labels printed twice.** `blockedit.py` inserted a new keyword
   by re-emitting `task=` at the end of its own span, and Python's `ast`
   does not record the redundant brackets round a wrapped string, so the
   span stopped short of the closing bracket: the file kept the old label
   and gained a copy. Eight listening blocks shipped with their scenario
   and type list printed twice. The tool now inserts before an existing
   keyword, whose own start is unambiguous, and the same fix went into
   `speakedit.py`.

2. **Seventy items in the timed papers had no wrong-option lines.** The
   answer-key page of every book says *"Every wrong option is explained,
   because a letter on its own teaches nothing."* `_items_ok` enforced
   that inside the units; nothing enforced it in the papers. The rule now
   lives in `check_paper` and `check_lpaper` as well, and 138 lines were
   written across eleven modules.

---

## 2. What the series measures now

| book | items | 4-option items | wrong-option lines | cue cards | timed modules | speaking P1 / P2 / P3 |
|---|---|---|---|---|---|---|
| Foundation 1 | 560 | 87 | 379 | 26 | 4 | 35% / 35% / 30% |
| Foundation 2 | 672 | 132 | 470 | 31 | 4 | 32% / 30% / 38% |
| Volume 1 | 865 | 222 | 900 | 36 | 6 | 30% / 35% / 35% |
| Volume 2 | 889 | 291 | 1,075 | 36 | 6 | 30% / 35% / 35% |
| Volume 3 | 848 | 343 | 1,199 | 36 | 6 | 30% / 35% / 35% |
| Volume 4 | 855 | 316 | 1,160 | 36 | 6 | 30% / 35% / 35% |
| Volume 5 | 886 | 341 | 1,189 | 36 | 6 | 30% / 35% / 35% |
| Volume 6 | 810 | 317 | 1,103 | 36 | 4 | 30% / 35% / 35% |
| **series** | **6,385** | **2,049** | **7,475** | **273** | **42** | — |

Three of those columns moved in a direction that needs explaining rather
than celebrating.

**Items: 6,385, exactly as before.** Not one question was deleted in six
phases. Every conversion kept the fact being tested and changed only how
the candidate answers it, which is what the invariance contract was for.

**Four-option items: 2,563 → 2,049.** 514 items stopped being
multiple choice when phase 13 re-asked them as gap, matching, short-answer
or labelling tasks. That is the point of the phase: Volume 6 was running
62% of its listening as multiple choice and no real Listening paper does.

**Wrong-option lines: 7,689 → 7,475.** This follows from the line above.
An item with no option list owes no lines, and the promise is about every
option that is *printed*. Every printed option in the series now has a
line, in the papers as well as in the units, which was not true before
this week.

**Cue cards: 60 → 273.** The series had one Part 2 card per unit in
Volumes 1–6 and none at all in the Foundation books, where twenty long
turns were run with the card's bullets written out as instructions and no
card on the page. There are now two or three cards a unit everywhere.

**Timed modules: 28 → 42.** Fourteen Writing and Speaking papers were
written. Before this phase a candidate working through Volume 1 could sit
half a mock exam.

---

## 3. The type census, which is the thing the plan was about

Declared targets, from `gate10.py` and repeated here because a number
without its rule is not evidence: every type taught as a set of **3+**
questions in one block, no reading type over **30%**, no listening type
over **45%**, multiple choice in listening over **10%** and under **35%**,
the listening completion family between **30%** and **65%**, the reading
matching family over **20%** and the verification family over **8%**, and
each speaking part between **25%** and **40%** of a book's slots.

Yes/No/Not Given and matching sentence endings are **exempt in both
Foundation books** by a decision written into `gate10.EXEMPT`: the first
needs a text with a thesis to disagree with and the second needs a reader
who can hold a clause in mind while scanning. Both arrive in Volume 1.

### Reading

| type | F1 | F2 | V1 | V2 | V3 | V4 | V5 | V6 |
|---|---|---|---|---|---|---|---|---|
| multiple choice | 4.8 | 6.3 | 4.2 | 4.7 | 14.3 | 11.4 | 12.3 | 8.2 |
| True/False/Not Given | 10.0 | 8.6 | 14.8 | 5.1 | 3.9 | 4.3 | 2.6 | 2.8 |
| Yes/No/Not Given | exempt | exempt | 7.8 | 14.6 | 14.5 | 14.8 | 14.2 | 15.1 |
| matching information | 8.3 | 2.9 | 14.0 | 15.4 | 14.5 | 13.0 | 15.9 | 15.5 |
| matching headings | 10.3 | 8.6 | 7.6 | 7.4 | 6.9 | 7.7 | 6.5 | 8.0 |
| matching features | 6.6 | 10.6 | 13.5 | 12.9 | 11.5 | 12.5 | 10.1 | 9.6 |
| matching sentence endings | exempt | exempt | 1.1 | 1.1 | 1.1 | 1.1 | 1.1 | 1.2 |
| sentence completion | 25.9 | 26.1 | 24.3 | 28.8 | 28.0 | 23.9 | 29.9 | 29.9 |
| note/table/flow-chart completion | 20.3 | 24.9 | 3.8 | 4.4 | 0.7 | 6.2 | 1.3 | 5.4 |
| plan/map/diagram labelling | 3.4 | 3.2 | 1.3 | 0.6 | 0.9 | 1.8 | 0.6 | 0.7 |
| short answer | 10.3 | 8.9 | 7.6 | 5.1 | 3.7 | 3.2 | 5.6 | 3.5 |

### Listening

| type | F1 | F2 | V1 | V2 | V3 | V4 | V5 | V6 |
|---|---|---|---|---|---|---|---|---|
| multiple choice | 11.1 | 12.4 | 11.7 | 26.0 | 29.8 | 26.2 | 29.2 | 34.8 |
| matching | 16.7 | 18.6 | 3.1 | 4.3 | 5.8 | 7.9 | 5.0 | 1.8 |
| plan/map/diagram labelling | 3.7 | 1.9 | 3.1 | 1.2 | 3.1 | 2.9 | 1.9 | 2.1 |
| note/table/flow-chart completion | 37.0 | 41.8 | 37.0 | 36.3 | 27.8 | 27.6 | 32.3 | 24.4 |
| sentence completion | 17.8 | 15.2 | 26.0 | 28.6 | 30.3 | 31.0 | 28.5 | 33.2 |
| short answer | 13.7 | 10.2 | 19.1 | 3.6 | 3.1 | 4.3 | 3.6 | 3.6 |

Read those two tables as a shape, not as a target hit. Multiple choice in
listening rises from 11% in Foundation 1 to 35% in Volume 6, which is
deliberate: the task gets harder as the books do. Matching falls the
other way for the same reason. Several cells sit close to a floor —
matching sentence endings at 1.1% in every graded volume, plan labelling
under 1% in three of them — and a cell at a floor is a cell that would
fail if one more item moved.

---

## 4. What these numbers do and do not prove

They prove three things:

1. **Every official task type is taught as a set in every book** that is
   not exempt from it by a decision recorded in code. A candidate who
   works through any one of these books will not meet a task type for the
   first time in the exam room.
2. **No type dominates.** The ceilings hold in all eight books, and the
   two worst cases when the gate was written — 62% multiple choice in
   Volume 6's listening, 99% gap completion in Foundation 2's — are gone.
3. **Every label on every exercise is derived from the items under it**
   by `labeledit.py` and re-derived by `gate10.py`. A label and the thing
   it names cannot drift apart without a gate failure.

They do not prove the distribution matches a real Cambridge paper. The
floors, the ceilings, the set minimum and the speaking band are a
**declared design target**. This container reaches package registries and
nothing else, so the real distribution of a current paper cannot be
sampled here, and `gate10.py` says so in its own docstring. Saying which
of those two things a number proves is the whole discipline of this
project.

---

## 5. What is still outstanding

Stated plainly, because a report that lists only the wins is the thing
the plan was written to stop.

1. **The Foundation progress tests are still single-task.** `lpaper7` and
   `lpaper8` are 100% note completion, and `paper7` and `paper8` are
   nearly so. They pass gate 10 because the gate counts a whole book and
   the units now carry the spread, but a progress test that tests one
   task type while its book teaches six is a weak test. This is the
   largest piece of work left.
2. **Cells at a floor.** Matching sentence endings is at 1.1% in every
   graded volume and plan labelling under 1% in Volumes 2, 3 and 5. Both
   are above the set minimum and both are one item from failing it.
3. **The speaking split is measured in slots, not minutes.** A cycle
   labelled "Part 2 into Part 3" counts a half to each part. That is a
   defensible measure of what a book teaches and it is not a measure of
   time, which is what a real test allocates.
4. **The Writing and Speaking papers are not marked.** They cannot be: a
   model at a band and a checklist are what stands in for a score, and a
   candidate applying the checklist honestly to their own script is doing
   something harder and more useful than being marked. It is still not
   the same as being marked.
5. **Nothing in the series has been tried on a learner.** Every number in
   this document is a property of the books. None of it is evidence about
   what happens when somebody studies from them.
