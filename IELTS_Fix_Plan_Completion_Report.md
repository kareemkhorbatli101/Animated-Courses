# IELTS 2026 — the fix plan, finished

`IELTS_Fix_Plan.md` set out ten phases, an invariance contract and a
measurement for each phase that decided when it was green. All ten have
shipped. This document records what each one actually put into the books,
what the gates say now, and what the plan did **not** fix — because a
report that lists only the wins is the thing the plan was written to stop.

**Final gate run:** eight books, nine gates, `SUITE: ok`, and
`regress.py 8` reports **no undeclared difference**.

---

## 1. What changed, phase by phase

| # | phase | what landed | green when | state |
|---|---|---|---|---|
| 0 | the figure defect and the honest banner | the systemic figure fault in all eight books; the answer-key banner rewritten to what the books then did | gate8 reports 0 escapes | ✅ |
| 1 | gates before content | `freeze.py`, `regress.py`, `gate6.py`, `gate8.py`, `readiness.py`, the `check.py` rules, `runall.sh` | every new rule runs and reports its true failure count | ✅ |
| 2 | mechanical corrections | answer length, duplicate explanations, rubric shape — 114 items retyped | those three rules green | ✅ |
| 3 | three-option distractors | a line for every wrong option on the 489 three-option items | distractor rule green at `wrongs=3` | ✅ |
| 4 | band-6.5 second models | `model65` + `gap65` on the cycle-5 Task 2 of all 60 units in Volumes 1–6 | register row green on both model sets | ✅ |
| 5 | the speaking strand | a Part 2 long-turn model per unit in all eight books, a Part 3 follow-up set per unit from Volume 3, a pronunciation page per unit | speaking ≥ 12% of every unit in all eight books | ✅ |
| 6 | error correction | "Find the fault" in the third cycle of all 80 units: a band-6 paragraph, three planted faults, each with its correction and its reason | present in every unit | ✅ |
| 7 | papers and exam-length reading | a second Reading and a second Listening paper for Volumes 1–5 — ten papers, 400 questions — plus exam-length reads inside the units | ≥6 reads of 700+ words from Volume 3; one stamina read each in Volumes 1 and 2 | ✅ |
| 8 | the remaining distractors | a line for every wrong option on all 2,563 four-option items: 7,689 lines in total | banner restored to its original wording, gate at `wrongs=4` | ✅ |
| 9 | the three missing task types | matching sentence endings (Volumes 1–6), plan and map labelling (Volume 3 up), the True/False/Not Given and Yes/No/Not Given rebalance, the calibration essay | both labelling types and both verification types present | ✅ |

Phases 3 and 8 are one promise split by cost. The answer-key page of every
book now says **"Every wrong option is explained, because a letter on its
own teaches nothing,"** and `check.PHASE['wrongs'] = 4` makes that a
build failure rather than an intention.

---

## 2. What the books measure now

| book | items | 4-option items | wrong-option lines | speaking | reads 700+ | papers | figures |
|---|---|---|---|---|---|---|---|
| Foundation 1 | 560 | 23 | 69 | 18.2–20.4% | — | 2 | 436 |
| Foundation 2 | 672 | 53 | 159 | 16.1–17.6% | — | 2 | 443 |
| Volume 1 | 865 | 227 | 681 | 13.4–15.4% | 1 stamina (685 w) | 4 | 445 |
| Volume 2 | 889 | 304 | 912 | 12.3–14.2% | 1 stamina (718 w) | 4 | 444 |
| Volume 3 | 848 | 501 | 1,503 | 12.5–14.1% | 10 | 4 | 453 |
| Volume 4 | 855 | 477 | 1,431 | 12.2–14.7% | 10 | 4 | 472 |
| Volume 5 | 886 | 500 | 1,500 | 12.5–13.3% | 20 | 4 | 438 |
| Volume 6 | 810 | 478 | 1,434 | 12.1–13.0% | 21 | 4 | 453 |
| **total** | **6,385** | **2,563** | **7,689** | — | **62** | **28** | **3,584** |

Reads of 700+ words counts passages inside the units, not in the papers;
Volumes 1 and 2 carry one stamina read each instead, which is the longest
text in those books by design.

The papers column needs stating exactly, because the four is not the same
four in every book:

| book | timed papers it carries |
|---|---|
| Foundation 1, Foundation 2 | Reading, Listening |
| Volumes 1–5 | Reading ×2, Listening ×2 |
| Volume 6 | Reading, Listening, **Writing, Speaking** |

**A full timed Writing paper and a full timed Speaking paper exist in
Volume 6 only.** Writing and Speaking are taught and modelled in every
cycle of all eighty units — every unit has a Task 1 and a Task 2 model, a
Part 2 long turn and a speaking slot — but a candidate who wants to sit
those two papers against the clock can only do it in Volume 6. That is a
gap in the series, it is not something any of the ten phases set out to
close, and it is the largest piece of work still outstanding.

### The syntax ladder, measured

| book | words/sentence | window | longest | nominalisation |
|---|---|---|---|---|
| Foundation 1 | 16.8 | 16.5–18.5 | 31 | 1.8% |
| Foundation 2 | 18.8 | 17.6–19.6 | 37 | 2.0% |
| Volume 1 | 19.6 | 19.4–21.4 | 39 | 2.9% |
| Volume 2 | 20.7 | 20.2–22.2 | 46 | 3.4% |
| Volume 3 | 21.6 | 20.9–22.9 | 50 | 3.9% |
| Volume 4 | 22.7 | 21.6–23.6 | 54 | 4.3% |
| Volume 5 | 23.3 | 22.3–24.3 | 56 | 4.7% |
| Volume 6 | 24.0 | 23.0–25.0 | 55 | 5.5% |

Every book inside its own window, every mean at least 0.4 words above the
book below, no sentence over its book's ceiling.

### The bridge into Volume 1

`readiness.py`: a Foundation 2 leaver meets **11.4** unknown word types
per Volume 1 academic passage on average (ceiling 12) and **18** in the
worst passage (ceiling 20), against 10,740 head words taught across the
two Foundation books. The gate passes.

---

## 2a. Question-type coverage, audited

Every item in the eighty units and all the timed papers, classified by its
actual shape rather than by the label printed above it.

### Reading — 3,349 items, 9 of the 11 official types

| type | F1 | F2 | V1 | V2 | V3 | V4 | V5 | V6 | total | share |
|---|---|---|---|---|---|---|---|---|---|---|
| completion / short answer | 231 | 283 | 169 | 181 | 143 | 142 | 173 | 164 | 1,486 | 44.4% |
| matching information | 24 | 7 | 66 | 73 | 63 | 57 | 74 | 67 | 431 | 12.9% |
| matching features | 21 | 37 | 64 | 61 | 50 | 55 | 47 | 41 | 376 | 11.2% |
| Yes/No/Not Given | 0 | 0 | 37 | 69 | 63 | 65 | 65 | 64 | 363 | 10.8% |
| multiple choice | 8 | 16 | 20 | 22 | 62 | 50 | 57 | 35 | 270 | 8.1% |
| matching headings | 0 | 0 | 36 | 35 | 30 | 34 | 30 | 34 | 199 | 5.9% |
| True/False/Not Given | 6 | 6 | 70 | 24 | 16 | 19 | 11 | 12 | 164 | 4.9% |
| matching sentence endings | 0 | 0 | 5 | 5 | 5 | 5 | 5 | 5 | 30 | 0.9% |
| plan / map / diagram labelling | 0 | 0 | 6 | 3 | 3 | 12 | 3 | 3 | 30 | 0.9% |

### Listening — 3,036 items, 4 of the 6 official types

| type | F1 | F2 | V1 | V2 | V3 | V4 | V5 | V6 | total | share |
|---|---|---|---|---|---|---|---|---|---|---|
| completion / short answer | 268 | 323 | 341 | 295 | 107 | 108 | 119 | 79 | 1,640 | 54.0% |
| multiple choice | 1 | 0 | 51 | 121 | 279 | 270 | 282 | 294 | 1,298 | 42.8% |
| matching | 1 | 0 | 0 | 0 | 22 | 33 | 15 | 7 | 78 | 2.6% |
| plan / map / diagram labelling | 0 | 0 | 0 | 0 | 5 | 5 | 5 | 5 | 20 | 0.7% |

### Speaking — all three parts, every book

| book | Part 1 slots | Part 2 slots | Part 3 slots | long-turn models | Part 3 follow-up sets |
|---|---|---|---|---|---|
| Foundation 1 | 20 | 10 | 20 | 10 | 0 |
| Foundation 2 | 11 | 10 | 29 | 10 | 0 |
| Volumes 1, 2 | 20 | 10 | 30 | 10 | 0 |
| Volumes 3–6 | 20 | 10 | 30 | 10 | 10 |

1,551 speaking prompts in all. Each book has 50 speaking slots (ten units
× five cycles); the "Part 1 into Part 2" slots count in both columns,
which is why the rows exceed 50.

### What this audit says is not balanced

1. **Reading leans on completion.** 44.4% of reading items ask the
   candidate to write words into a gap. In a real Academic paper that
   family is nearer a quarter to a third.
2. **Reading multiple choice is thin at 8.1%**, and absent from the task
   labels entirely — no exercise in the series is headed "Multiple
   choice", although 270 items are exactly that. The label names the other
   types in the block and omits this one.
3. **The option pools are smaller than the real paper's.** Matching
   information is offered as four candidate paragraphs (335 items) or
   three (31); the real task offers every paragraph in the passage, often
   eight to ten. Matching headings offers four headings per question in all
   183 items; the real task offers about eight for five or six paragraphs.
   Both are therefore easier than the task they prepare for, and the gates
   never checked pool size because no rule was ever written for it.
4. **Listening is two types doing 96.8% of the work.** Matching is 2.6%
   and plan/map/diagram labelling is 0.7%, and both are absent from
   Foundation 1, Foundation 2, Volume 1 and Volume 2 altogether. In a real
   Listening paper those two families are a normal feature of Parts 2 and
   3. Phase 9 added one labelling set a book from Volume 3, which was what
   the plan asked for and is not enough to call the strand balanced.
5. **Listening never names its question type.** A reading exercise is
   headed with its types; a listening exercise is headed with its scenario
   ("A recorded exchange"), so a candidate is never told which task
   they are practising.
6. **Speaking Part 3 carries 57% of the slots**, against roughly a third
   of the real interview, and the Part 3 follow-up sets exist only in
   Volumes 3–6.
7. **Writing and Speaking have no timed paper outside Volume 6**, as the
   table in section 2 now records.

None of the seven is a defect in what is on the page: every item is
gated, explained and at the right level for its book. They are gaps in
*distribution*, and distribution was never gated — no rule in `check.py`
has ever counted how often each question type appears. That is the
obvious next phase, and it would be cheap: the audit above is thirty
lines of Python, and turning it into a gate means choosing target shares
and failing the build outside them.

---

## 3. The invariance contract, as it actually ran

Nine phases were declared in `ielts/intent/<n>.json` and merged only when
`regress.py` reported no undeclared difference. The declarations are
specific, which is what made them useful:

- phase 2 named 114 items and three fields;
- phase 3 named one item and the `wrongs` field;
- phases 4, 5 and 6 named **no** existing item at all, because they added
  blocks and were forbidden to touch anything that existed;
- phase 7 declared `new_items` and four new text prefixes;
- phase 9 named 56 retyped items, ten new texts and four new figures;
- phase 8 declared `items: ["*"]` with `item_fields: ["wrongs", "ans"]`,
  because it touched the `wrongs` field of almost every item in the
  series and corrected exactly one answer key.

The contract caught real mistakes rather than merely existing. Three are
worth recording:

1. **An answer key was wrong.** `u26 c5 R0 i55` asks which paragraph
   describes a scheme allocating licences by auction and was keyed to
   Paragraph 3. The auction is in Paragraph 4. Found while writing the
   wrong-option line for the option that was in fact correct — which is
   the mechanism by which phase 8 audited phase 0's work.
2. **Two lines described the wrong paragraph.** Both were caught by the
   per-book verification sweep rather than by eye, and rewritten.
3. **Lines under the 25-character floor** were rejected by `apply8.put`
   at the moment of writing, six times, and rewritten longer.

---

## 4. What this plan did not fix

- **The `wrongs` field is recorded as a count, not a hash.** `freeze.py`
  stores `len(it[4])`, so a line that is *rewritten* at the same length
  moves nothing in the baseline. The gate proves a line exists and is at
  least 25 characters; it does not prove the line is true. That is the
  largest remaining hole in the contract and the cheapest to close.
- **Nobody has read all 7,689 lines.** Each was written against the
  passage or script in front of the author, and the verification sweep
  checked presence and length rather than accuracy. A sampled read by a
  second person is the obvious next step.
- **Two answer keys have a paragraph number that does not quite match
  their own explanation.** `paper4 i29` offers Paragraph 11 for a
  comparison the passage makes in Paragraph 12, and `paper4 i25` cites
  paragraph 9 in its explanation for a fact in paragraph 10. Neither
  makes the keyed option wrong — in both cases the keyed option is still
  the best of the four — so neither was changed under a phase whose
  declaration permitted only `wrongs` and one `ans`. They belong in the
  next pass.
- **Page counts are measured through LibreOffice**, which is not Word.
  The figures in the README are from a PDF conversion and will differ by
  a page or two from what Word prints.
- **The speaking strand is modelled, not assessed.** Every unit now
  carries a long-turn model and a follow-up set, and nothing in the books
  tells a candidate working alone whether their own answer is at band 6
  or band 7. That is a recording-and-rubric problem, and it is out of
  scope for a plan about the printed page.

---

## 5. The run, in full

```
for v in 7 8 1 2 3 4 5 6:
    check.py <range>        all checks pass
    density.py <v>          exit 0
    omit.py <v> <docx>      GATE (zero omissions): PASS
    gate6.py <v>            OVERRUN: 0
density.py --ladder         every book inside its window
gate8.py all                PASS
readiness.py                PASS
regress.py 8                no undeclared difference: PASS
SUITE: ok
```

Nine gates, eight books, one command: `bash runall.sh 8`.
