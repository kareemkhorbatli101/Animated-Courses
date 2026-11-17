# IELTS 2026 — the balance plan

The ten-phase fix plan closed every defect it set out to close and then an
audit of its own work found a new one: **nothing in this project has ever
counted how often each kind of question appears.** Nine gates measured
what is on the page; none measured the mix. This plan fixes the mix, and
fixes it the way this project fixes things — gate first, content second,
and every change declared before it is allowed.

**Binding requirement, unchanged:** no regression, no omission, no drift,
and nothing asserted that a gate cannot re-derive. Added here: **no
label that the page does not support.** The audit found three kinds of
false label, and a false label is a defect of the same order as a missing
answer, because a candidate practising "flow-chart completion" on a page
with no flow chart has been told something untrue about the exam.

---

## Part 1 · What the audit found, stated exactly

`qtypes.py` classifies every item from its own shape and the block it sits
in, never from the printed label. `gate10.py` holds the result against a
floor and a ceiling. On the series as delivered it reports **75
failures**. They fall into five groups.

### 1.1 Three kinds of false label

| what the label says | what the page does | scale |
|---|---|---|
| "short answer" | the items are sentences with a blank in them, which is **sentence completion** | 542 items |
| "Flow-chart completion", "Table completion", "Form completion" | the items are gapped lines with no chart, table or form drawn anywhere | 171 blocks, 436 gap items, of which 21 blocks carry any figure at all |
| the label names some of the block's types and omits the rest | 193 gap items sit in blocks whose label names no completion type; **270 items are multiple choice and no exercise in the series is headed "Multiple choice"** | 463 items |

None of this is a content defect. Every one of those items is a sound
question, gated, explained, at its book's level. The defect is that the
book tells the candidate the wrong name for what they are doing.

### 1.2 Reading: two types below the floor in every volume

Matching sentence endings sits at 1.1% and plan/map/diagram labelling at
0.6–1.3% in all six volumes. Phase 9 added one set of each a book, which
was what that plan asked for, and one set is not practice.

### 1.3 Listening: two types doing 97% of the work

| book | multiple choice | sentence completion | matching | labelling | short answer |
|---|---|---|---|---|---|
| Foundation 1 | 0.4% | 96.3% | 0.4% | 0% | 3.0% |
| Foundation 2 | 0% | 99.1% | 0% | 0% | 0.9% |
| Volume 1 | 13.0% | 84.9% | 0% | 0% | 2.0% |
| Volume 2 | 29.1% | 69.5% | 0% | 0% | 1.4% |
| Volume 3 | 67.6% | 24.5% | 5.3% | 1.2% | 1.5% |
| Volume 4 | 64.9% | 26.0% | 7.9% | 1.2% | 1.4% |
| Volume 5 | 67.0% | 28.0% | 3.6% | 1.2% | 0% |
| Volume 6 | 76.4% | 20.5% | 1.8% | 1.3% | 0% |

Two separate faults in one table. The Foundation books and Volumes 1–2 are
almost entirely gap-filling; Volumes 3–6 are almost entirely multiple
choice. A candidate working up the series meets a cliff at Volume 3 and
meets matching and labelling essentially nowhere.

### 1.4 Speaking: Part 3 carries 58–60% of the slots

Part 2 holds 10% in all six volumes. The real interview gives the long
turn three to four minutes of eleven to fourteen.

### 1.5 No timed Writing or Speaking paper outside Volume 6

Both skills are taught and modelled in all 400 cycles. Against a clock,
they exist in one book of eight.

---

## Part 2 · The rule the series is now held to

Stated as what it is. The container's network reaches package registries
and nothing else, so **the real distribution of a Cambridge paper cannot
be sampled here**, and this plan does not pretend to have sampled it.
What `gate10.py` enforces is therefore coverage and dominance, not
fidelity to an official mix:

- **Coverage.** Every one of the official **11 Reading types** and **6
  Listening types** appears in every book at or above a floor — 2% of a
  book's reading items, 3% of its listening items.
- **Ceiling.** No reading type above 30%, no listening type above 38%, so
  a book cannot drill one task and call itself a course.
- **Speaking.** Each of Parts 1, 2 and 3 holds 25–40% of a book's
  speaking slots.
- **Two declared exemptions.** Yes/No/Not Given and matching sentence
  endings are not taught in either Foundation book. The first asks what a
  writer *believes* as against what a text *states*, and no Foundation
  text carries a thesis to disagree with; the second needs a reader who
  can hold a clause in mind while scanning for its other half. Both
  arrive in Volume 1. The exemption is written into the gate, so it is a
  decision somebody made rather than a hole nobody noticed.

What this proves: every type is taught in every book and none dominates.
What it does not prove: that 14% matching information is the right figure
for a real paper. That is the same honest limit the syntax ladder carries,
and it is stated in the same place.

---

## Part 3 · The phases

### Phase 10 — the gate, before the content  ✅ written first

`qtypes.py` (the classifier) and `gate10.py` (the rule). Runs on the
series as delivered and reports 75 failures, which is the number this plan
drives to zero.

### Phase 11 — every label tells the truth

Derive each block's printed label from the items it actually contains:

- 542 items labelled "short answer" become **sentence completion**, which
  is what a sentence with a blank in it is;
- the 171 blocks claiming a drawn table, flow chart or form become **note
  completion**, which is what gapped lines under a heading are — and
  which is half of official Reading type 9, so the type stays covered
  without a single item changing;
- "Multiple choice" is named wherever the items are multiple choice;
- every listening block gains a question-type label beside its scenario,
  so that a candidate is told which task they are practising.

**No item changes in this phase.** Stems, options, answers, explanations
and wrong-option lines are untouched; `intent/11.json` declares prose and
label movement only.

### Phase 12 — the reading floors

New item sets on existing passages, so no new text and no new figure:

- **matching sentence endings** to ≥2% in Volumes 1–6 (a second and third
  set a book, bank-based, so no wrong-option lines are owed);
- **plan/map/diagram labelling** to ≥2% in Volumes 1–6;
- **True/False/Not Given** and **matching headings** to ≥2% in Foundation
  1 and Foundation 2.

### Phase 13 — the listening strand

- **matching** and **plan/map/diagram labelling** sets into Foundation 1,
  Foundation 2, Volume 1 and Volume 2, which have none of either;
- **multiple choice down to the 38% ceiling** in Volumes 3–6 by turning
  the surplus into completion and short-answer items, which is a real
  content change and is derivable from the item itself: the keyed option
  *is* the answer the gap wants;
- **short answer** and the completion types to ≥3% in every book.

### Phase 14 — the speaking split

Rebalance the 400 speaking slots so every book sits inside 25–40% on each
of the three parts, which chiefly means moving slots out of Part 3 and
writing the Part 2 task cards that the moved slots need.

### Phase 15 — the seven missing timed papers

A Writing paper and a Speaking paper for Foundation 1, Foundation 2 and
Volumes 1–5. `check.py` has gated both since phase 1 — three tasks with
both Task 1 forks, models inside the book's band, three notes and four
marking checks on each; three speaking parts in order with a cue card on
Part 2 and an answer shape on each — so the gate for this content was
written nine phases before the content.

---

## Part 4 · The contract, unchanged

Each phase carries `ielts/intent/<n>.json`, committed with the content it
permits, and is merged only when `regress.py` reports no undeclared
difference. The run every phase ends with gains one line:

```
check.py × 8    density.py × 8    density.py --ladder    book.py × 8
omit.py × 8     gate6.py × 8      gate8.py               readiness.py
gate10.py       regress.py
```

Ten gates. A phase that cannot make all ten green is not merged, and the
baseline is re-frozen only at the end of a green phase.

### What "no hallucinations" means operationally here

Three rules, each enforced by something other than care:

1. **No label the page does not support.** Phase 11 derives labels from
   items by code, and `gate10.py` re-derives the census from items, so a
   label and the thing it names cannot drift apart without a failure.
2. **No number that was not measured.** Every figure in this plan and in
   the report that closes it comes from a script in `ielts/` that can be
   re-run. Where a number is a declared target rather than a measurement
   — the floors, the ceilings, the speaking band — it is labelled as one,
   in Part 2 above and in the gate's own docstring.
3. **No new content that a gate does not check.** Every item added in
   phases 12 and 13 passes the existing item rules: answer length,
   explanation length, no duplicate explanation, a wrong-option line for
   every wrong option of a four-option item. Items added to a lettered
   bank carry no options and so owe no lines, which is why the floors are
   met with bank-based tasks wherever the real paper uses them.
