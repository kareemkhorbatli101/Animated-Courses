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

Papers counts the four single-skill forms a book carries (Reading,
Listening, Writing, Speaking) plus, in Volumes 1–5, the second Reading
and Listening forms phase 7 added. Reads of 700+ words counts passages
inside the units, not in the papers; Volumes 1 and 2 carry one stamina
read each instead, which is the longest text in those books by design.

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
