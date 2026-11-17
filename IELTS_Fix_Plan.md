# IELTS 2026 — fix plan, v2

Supersedes v1. Built from three inputs: a visual pass over the built
books, two external critiques, and a measurement of every checkable claim
in both against the source modules rather than the .docx.

**The binding requirement of this plan is the invariance contract in
Part 5: no regression, no omission, no drift — enforced by a gate that
fails the build on any undeclared change, not by care.**

---

## Part 1 · What the visual pass found

I rendered and read pages from all eight books: covers, unit openers,
technique pages, reading, listening, speaking and writing pages, every
figure family, the answer keys, the band pages and the progress tests.

### 1.1 A systemic figure defect in every book — in neither critique

**`answer_shape`, the "shape of this answer" figure on every speaking
page, draws a fixed 96px box around a text block that grows.** Past three
lines the text leaves the box; past four it lands on the caption.

| book | F1 | F2 | V1 | V2 | V3 | V4 | V5 | V6 | total |
|---|---|---|---|---|---|---|---|---|---|
| figures | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 400 |
| **broken** | 32 | 48 | 40 | 42 | 41 | 40 | 45 | 45 | **333** |
| worst box | 6 | 8 | 10 | 11 | 7 | 8 | 9 | 11 | 11 lines |

**83% of the speaking pages in the series carry a broken figure.**
`gate6.py` proves text fits its *width*. Nothing ever checked *height*.

### 1.2 A promise the books do not keep

Every volume's Answer key page prints *"Every wrong option is explained,
because a letter on its own teaches nothing."* Measured across all 2,961
multiple-choice items, an explanation mentions a wrong option **12–24%**
of the time.

### 1.3 Everything else renders correctly

Covers, loop panels, skill bars, cue cards, outline frames, criterion
tags, band scales, all chart and diagram families, key grids, raw-score
tables and audio scripts are clean. Technique, outlining and speaking
pages run 40–60% empty — room for the work below, not a defect.

---

## Part 2 · Critique 1, ruled

| claim | ruling | measured |
|---|---|---|
| Explanations are locator + reason | **Confirmed** | mean 41–74 characters; longest in V3 is 105; distractor mentioned 12–24% |
| Map/plan labelling missing | **Half wrong** | Reading *has* map (4), plan (5), diagram (6). **Listening has none** — all 2,532 listening items are gap-fill or MC. The Listening half of the claim is the right one |
| Matching sentence endings missing | **Confirmed** | zero in 80 units and 12 papers |
| T/F/NG taught once then vanishes | **Confirmed** | 220 items, all in Volume 1; V2–V6 run 200–220 Y/N/NG each and zero T/F/NG; Foundation has neither |
| Full-length passages too late | **Confirmed** | ≥700 words: V1 **0**, V2 **0**, V3 2, V4 **5**, V5 23, V6 23 |
| Speaking is thin | **Confirmed, and sharper** | see 4.3 — speaking is *flat* at ~5,000 words while reading goes 7,392 → 28,980 |
| Models are band 8–9, out of reach | **Wrong as diagnosed** | in every book the models are **plainer** than the book's own passages: V6 models 66.2% k1 / 18.4% beyond against passages 62.6% / 23.8%. The barrier is rhetorical control, not vocabulary |

---

## Part 3 · Critique 2, ruled

This critique is stronger. It found two real defects my gates could not
see, and its arithmetic matched mine exactly where both of us counted.

| ref | claim | ruling | what I measure |
|---|---|---|---|
| **A1** | Two unanswerable questions: F2 unit 6, q4 and q5 | **Confirmed, exactly two** | `u76` cycle 1 is a Matching features task; items 1–3 carry the (A)–(D) list, items 4 and 5 carry none and key to **B** and **D**. My scan found four bare-letter answers; the other two (*"The house is in band C"*, *"Permit zone: D"*) are legitimate answers, not defects. The gate must tell those apart |
| **A2** | 120 answers over the word limit | **Confirmed to the item** | over two words: F1 **17**, F2 **57**, V1 **16**, V2 **8**, V3 **11**, V4 **5**, V5 **6**, V6 **0** = **120**. Worst is a 12-word sentence in F2. Their reading is right: the discipline arrived late and was never run backwards |
| **A3** | 12 explanations reused verbatim | **Confirmed, and the pattern holds** | 12 repeated strings, **28 instances**. V2's *"Spelled out at the end of the call."* appears 5 times, every one at **q16**; V6's 3 are all at **q11** |
| **B1** | Exercises carry no rubric | **Confirmed, and worse** | **0 of 918** unit exercise blocks carry a word limit. The only rubrics in the series are a handful of `blurb` lines in the Listening papers of Volumes 1–6. **The Foundation progress tests carry none at all** |
| **B2** | Three task types absent | **One right, two wrong** | matching sentence endings: **absent**. Diagram labelling and map/plan labelling **exist in Reading** — but **not one listening item in the series is a labelling task**, which is their real point and is correct |
| **B3** | T/F/NG taught once | **Confirmed** | as above: 220 items in V1, zero in V2–V6 |
| **B4** | Full-length passages too late | **Confirmed** | as above |
| **C1** | Deliver the explanation promise | **Confirmed** | 2,961 MC items, **8,399 wrong options** with no line |
| **C2** | Band-6.5 model beside the band-9 | **Adopted, and promoted** | Part 2 shows why: the models are lexically *easier* than the passages, so the fix is a reachable second model, not simpler prose |
| **C3** | Speaking needs models and pronunciation | **Confirmed** | pronunciation appears in **3 units of 80**; no long-turn transcript anywhere |
| **C4** | Error correction absent entirely | **Partly wrong** | it exists in **6 units of 80** — effectively absent as a strand. Adopted as an addition |
| **C5** | Foundation writing stamina ramp 80 → 110 → 150 | **Wrong — already exceeded** | F1 asks for 80, 90 and 130 words; **F2 asks for 110, 150 and 200**. The remaining gap is Task 2 at 250, and that is a *documented decision*: the rubric floor is switched off for Foundation because asking an A2 writer for 250 words teaches padding. **Ruling: keep the decision, add one calibration piece** — a single full 250-word Task 2 in F2 unit 10, labelled as the real thing rather than as this level's target |
| **D** | Emit exercise-bar text as text | **Adopted in full** | 1,318 cycle and skill bars in the units alone; every task-type label in the series is pixels. Free on the page, and it unlocks search, screen readers and conversion |

Their closing point is also measured and true: every question has a key,
numbering is continuous in all 80 units, and the head-word seam is exact
— **3,384 entries, 3,384 distinct, zero repeated between books**.

---

## Part 4 · The merged work list

### 4.1 Phase 0 — shipped files that are wrong (half a day)

- **A1** — give `u76` items 4 and 5 the (A)–(D) list they continue.
- **1.1** — `answer_shape` grows with its text: wrap first, box height
  `max(96, 92 + 19 × lines)`, caption below the tallest box.
- **1.2 / C1-minimum** — the Answer key banner becomes true today:
  *"Where a wrong option is tempting, the explanation says why."* It
  returns to the stronger wording the day C1 completes.

### 4.2 Phase 1 — gates before content (1 day)

Every rule below **fails today**. That is the point: the gate defines the
work and proves it finished.

- **gate8.py** — geometric containment. `art.R()` gains a `RECTLOG` the
  way `TBLOCK` has `FITLOG`; the gate asserts every text block's bounding
  box lies inside the rectangle drawn around it. *Today: 333 escapes.*
- **check.py · bare-letter answers** — a gap item whose answer is a lone
  letter **and whose block gives options to other items** is an error.
  This flags `u76` and exonerates *band C* and *zone D*.
- **check.py · answer length** — no gap answer over two words. *Today:
  120 failures.*
- **check.py · duplicate explanations** — no explanation string twice in
  one book. *Today: 28 failures.*
- **check.py · rubric required** — every exercise block declares a word
  limit, generated from its answers. *Today: 918 failures.*
- **check.py · speaking floor** — the speaking strand is at least 12% of
  a unit's teaching text. *Today: 6.2–13.6%, so six books fail.*
- **density.py · model register row** — the model answers profiled the
  way passages are, with a required relationship to them.
- **freeze.py / regress.py** — the invariance contract, Part 5.

### 4.3 Phase 2 — mechanical corrections (2 days)

- **A2** — 120 answers rewritten to two words or fewer, adjusting the
  stem where the answer carried the sentence.
- **A3** — 28 duplicated explanations rewritten against their own item.
- **B1** — a rubric on all 918 blocks, generated from the answer shape
  and checked by hand, plus the Foundation progress tests.
- **D** — the bar text emitted into the document body as text.

### 4.4 Phase 3 onward — teaching (the big work)

| ref | work | size |
|---|---|---|
| **C1-1** | distractor lines on all 484 three-option items (T/F/NG, Y/N/NG) — the highest-yield explanation in IELTS | 968 lines |
| **C2** | band-6.5 second model with *Why it stops at 6.5*, Volumes 1–4 first | 40 essays, then 20 |
| **C3/E** | speaking: long-turn model **scaled by volume** (150 → 280 words), a Part 3 follow-up exchange per unit from V3, a pronunciation and fluency page per unit | 80 + 40 + 80 pages |
| **C4** | error correction in the existing grammar slot: a band-6 sentence, what is wrong, why | 74 units |
| **B4/F** | a second timed Reading and Listening paper for Volumes 1–5, one exam-length read per unit from Volume 3, one stamina read in V1 and V2 | 10 papers + 40 passages |
| **C1-2..4** | the remaining ~7,900 distractor lines | papers, then V3–V6, then the rest |
| **B2** | matching sentence endings; **listening** plan/map labelling with its lettered-list answer format | ~30 + ~16 items |
| **B3** | convert a third of the Y/N/NG sets in V2–V6 to T/F/NG; give each Foundation book its first six | ~70 items |
| **C5** | one calibration 250-word Task 2 at the end of Foundation 2 | 1 task |

### 4.5 What is not touched

The timing arithmetic, the loop, the skill boxes, the refusal to use
templates, the three grading ladders (vocabulary, syntax, speed), the
Foundation word ledger and gate 7. These are why the books are worth the
work above. **The band-9 models are not simplified** — Part 2 shows they
are already plainer than the surrounding prose.

---

## Part 5 · The invariance contract — how zero regression is guaranteed

Not by care. By a gate that fails on anything nobody declared.

### 5.1 The baseline

`freeze.py` writes `baseline/NNN.json` before a phase starts, recording:

| what | why it is in there |
|---|---|
| every item: stem, options, answer, explanation, and its question number | an answer or a stem cannot change silently |
| every passage and script: word count and SHA | prose cannot drift |
| the head-word set per book (3,384 entries, zero repeats) | the vocabulary seam cannot move |
| every measured number: k1, beyond4k, mean sentence, longest sentence, nominalisation, reading speed band, readiness mean and worst | the ladders cannot drift |
| figure count per book and the gate6/gate8 logs | a figure cannot vanish or break |
| the full string list `omit.py` checks | nothing can stop reaching the .docx |
| page count and image count per book | the artefact cannot change shape unnoticed |
| a SHA per content module | anything edited is visible |

### 5.2 The declaration

Each phase carries `intent/<phase>.json`: the exact list of things it is
allowed to change — item ids, module names, measured numbers with their
permitted new values. **A2 declares its 120 answers by id. A3 declares its
28 explanations. Nothing else in the series may differ.**

### 5.3 The gate

`regress.py` re-derives everything in 5.1 and diffs it against the
baseline. Every difference is matched against the declaration:

- **declared and within tolerance** → pass;
- **declared but outside the stated new value** → fail;
- **undeclared** → fail, naming the item, module and number.

Tolerances: measured ladder numbers ±0.3 and still inside their window;
page count ±2%; everything else exact. An intended change is made by
editing the declaration in the same commit, so the diff of a phase shows
both the content change and the permission for it.

### 5.4 The run every phase ends with

```
check.py × 8 ranges      density.py × 8 books      density.py --ladder
book.py × 8              omit.py × 8               gate6.py × 8
gate8.py × 8             readiness.py              regress.py
```

plus **a rendered page read by eye** — which is what found the defect in
Part 1 that nine gates had missed.

A phase that cannot make `regress.py` green is not merged. The baseline
is re-frozen only at the end of a green phase, and the re-freeze is its
own commit.

### 5.5 Why this answers "zero omissions" specifically

`omit.py` already proves every passage, script turn, model, question and
explanation in the source reaches the built .docx — 4,176 strings in
Foundation 2 alone. Phase 1 extends it to the new fields: distractor
lines, rubrics, long-turn models, band-6.5 models, error-correction
items. A new field that the renderer forgets to print fails the build on
the day it is written, not in a review months later.

---

## Part 6 · Order, cost, and what each phase proves

| # | phase | cost | green when |
|---|---|---|---|
| 0 | A1, the figure fix, the honest banner | 0.5 d | gate8 0 escapes; A1 rule passes |
| 1 | the nine new gates + freeze/regress | 1 d | every new rule runs and reports its true failure count |
| 2 | A2, A3, B1, D | 2 d | answer-length, duplicate and rubric rules green; regress shows only declared changes |
| 3 | C1-1 — 484 three-option distractors | 2 d | distractor rule green for three-option items |
| 4 | C2 — 40 band-6.5 models (V1–V4) | 3 d | model-register row green on both model sets |
| 5 | C3/E — speaking strand | 7 d | speaking floor ≥12% in all eight books |
| 6 | C4 — error correction, 74 units | 2 d | present in every unit |
| 7 | B4/F — papers and exam-length reads | 4 d | ≥6 passages of 700+ words from V3; ≥1 in V1 and V2 |
| 8 | C1-2..4 — the remaining distractors | 9 d | banner restored to its original wording |
| 9 | B2, B3, C5 | 5 d | both labelling types and both verification types present |

**Total ≈ 35 working days.** Phases 0–2 are 3.5 days and fix everything
that is *wrong*; everything after that is work that makes the books
better than they are.

Phases are independent after phase 2 and can be reordered on your word —
except that phase 1 precedes everything, because in this project the gate
is always written before the content it governs.
