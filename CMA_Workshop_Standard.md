# The Workshop Standard

**Handouts that are the course, not a test of it.**

CMA Part 1 · Books 1–3 · second-generation handout format
Reference implementation: Book 1 Chapter 1 (conceptual) and Book 1 Chapter 7 (computational)

---

## 0 · What changed, and why

The first-generation handouts converted the books into exercises. The rule was
"you are not creating content, just converting it", and the gates enforced it:
every number and every term in an exercise had to appear in the source. That
produced 107 handouts across three books that work as **revision**, and the
gates are the reason they are trustworthy.

But a student who has not already read the chapter cannot learn from them. The
exercises test knowledge; they do not deliver it. Delivering it was still the
lecturer's job, which means the handouts did not remove the lecture — they
presupposed it.

This standard inverts that. **The handout delivers the content.** The lecturer
circulates, listens and intervenes; they do not present. Everything a student
needs to learn the chapter is on the sheet, and the sheet is built so that
reading it passively is impossible: the content arrives as diagrams, data and
questions that must be answered to move forward.

Three consequences follow, and they are the whole design:

1. **Coverage becomes total.** Every section, figure, box, term, self-check,
   practice item and case item in the chapter must be claimed by a handout —
   and claimed by a *teaching* element, not merely by a test item.
2. **Augmentation is now allowed, and bounded.** The handouts may add
   diagrams, scaffolds, analogies, error hunts, role cards and contrasting
   cases that the book does not contain. They may **not** add accounting
   facts: a new number, a new technical term, a new rule, a new standard
   reference is still a gate failure. The distinction is **pedagogy is ours,
   accounting is the book's**.
3. **Prose is capped.** A handout that explains in paragraphs has become a
   lecture on paper. No prose block may exceed 45 words, and prose outside
   models and directions may not exceed 15% of a handout's text.

---

## 1 · The unit of design is the cycle, not the exercise

A handout is one teaching session of 60–90 minutes. It is built from **cycles**.
One cycle teaches exactly one idea and always has the same six moves, in order.

| Move | Name | What it is | Who does the work |
|---|---|---|---|
| 1 | **ORIENT** | One or two items answerable from prior knowledge or the previous cycle | Student, alone, 2 min |
| 2 | **MODEL** | The content itself — a diagram, annotated panel, data set or worked trace | Student reads a picture, not a paragraph |
| 3 | **READ THE MODEL** | 3–6 questions whose answers are visible in the model | Student, alone then in pairs |
| 4 | **INVENT THE RULE** | A rule frame the student completes, then contrasting cases | Pair or team |
| 5 | **APPLY** | A new case with no scaffolding, then one stretch item | Student, alone |
| 6 | **CHECKPOINT** | One gate item, with a named reloop if it is wrong | Student, self-marked |

### Why this order

- **ORIENT first** because retrieval before new material improves retention of
  the new material (the pretesting effect), and because a sheet that opens with
  a success is a sheet students keep working on.
- **MODEL as a picture** because the content has to enter without a narrator.
  Integrated labels, no legends to cross-reference, one idea per figure.
- **READ THE MODEL** is the move that replaces the lecture. The questions a
  lecturer would answer out loud are printed, and the student extracts the
  answers from the figure. Every part of the figure is interrogated by at
  least one question, so nothing can be skimmed.
- **INVENT THE RULE** before the book's wording is revealed. The student writes
  the rule in their own words into a frame that supplies the obligatory
  vocabulary. The answer key then gives the book's sentence, so the student
  compares rather than copies.
- **Contrasting cases are compulsory** inside move 4. The research on
  problem-solving-before-instruction is explicit that it only helps when the
  design includes contrasting cases or builds on students' own solutions; a
  bare "try it first" does not work. So every rule frame is followed by two or
  three cases that differ on exactly one dimension, where the invented rule
  gives different answers.
- **APPLY unscaffolded**, then one stretch item at the edge of the rule — a
  trap, an exception or an exam-worded stem.
- **CHECKPOINT with a named reloop.** "If you missed this, redo move 3 of this
  cycle" is the sheet doing what a lecturer does when they see a blank face.

### Fading across the chapter

Within a chapter, the same skill must get less help each time it appears. Each
item is tagged with a skill id and a scaffold level:

| Level | Name | What the student is given |
|---|---|---|
| 3 | **worked** | The full solution, with the reasoning for each step |
| 2 | **completion** | The solution with the last steps blank |
| 1 | **frame** | The structure (an empty table, a labelled axis) but no steps |
| 0 | **bare** | The question only |

For any skill id, the levels across the chapter must be non-increasing. A skill
that is introduced worked and then asked bare is correct; a skill asked bare
and later worked is a gate failure, because it means the chapter teaches after
it tests.

---

## 2 · The activity catalogue

The first generation had eight exercise types. All eight survive as **test**
elements. Twelve **teaching** and **interaction** elements join them.

### Teaching elements (these carry content)

| Code | Name | What it does |
|---|---|---|
| **M1** | Diagram model | A drawn figure with integrated labels; the content of the cycle |
| **M2** | Data panel | A table of the book's own figures, with one complete worked row |
| **M3** | Worked trace | A solution shown step by step, each step labelled with its reason |
| **M4** | Annotated specimen | A real artefact (journal entry, trial balance, statement) with callouts |
| **M5** | Rule frame | A sentence skeleton with the obligatory words supplied, for the student to complete |
| **M6** | Contrasting pair | Two cases differing on one dimension, side by side, with the question "what changed, and why does the answer change?" |

### Interaction elements (these make it a workshop, not a worksheet)

| Code | Name | What it does |
|---|---|---|
| **X1** | Pair point | Both students answer alone, then compare; the sheet gives the rule for settling a disagreement |
| **X2** | Role card | Each student answers from an assigned viewpoint, then the team fills one grid |
| **X3** | Error hunt | A worked solution with planted errors to find, mark and correct |
| **X4** | Predict then check | A prediction written before the evidence is turned over |
| **X5** | Teach it back | Three sentences written to a named audience, using required words |
| **X6** | Card sort | Items placed into regions printed on the sheet |
| **X7** | Build the diagram | The blank twin of a model from earlier in the handout, completed from memory |
| **X8** | Speed round | A 60-second retrieval strip at the top of a handout, drawing only on earlier handouts |

### Test elements (carried over, unchanged)

T1 multiple choice · T2 true/false · T3 fill the spaces · T4 matching ·
T5 fill the table · T6 classification · T7 odd one out · T8 sequencing

**Every model gets a blank twin.** Each M1 diagram is drawn twice: complete, as
the model in move 2, and empty, as an X7 at the end of the handout. Drawing a
structure from memory is a stronger act of learning than reading it, and it
costs nothing but one extra render.

---

## 3 · The visual catalogue

Diagrams are built in SVG and rendered through headless Chromium to PNG, the
same pipeline the earlier courses used. They are not decoration: a figure that
could be replaced by its caption fails review.

Design rules, from the multimedia-learning literature:

- **Labels inside the figure**, never in a legend. A legend forces the eye to
  hold a key in memory while reading the picture.
- **One idea per figure.** Two ideas means two figures.
- **Signal the part under discussion** — the questions in move 3 refer to
  regions by name, and those names are printed in the figure.
- **No decorative imagery.** No stock illustration, no clip art, no gradient
  that does not encode a quantity.
- **Readable in grayscale**, because these sheets will be photocopied. Colour
  may reinforce a distinction but must never be the only thing that carries it.

The chapter-1 set, as the reference:

| # | Figure | Teaches |
|---|---|---|
| 1 | Balance beam | A = L + E as a physical balance; both pans must match |
| 2 | Equity tree | Equity splitting into contributed capital and retained earnings, with what flows in and out |
| 3 | Six-box debit/credit grid | Which account types increase on the left and which on the right |
| 4 | T-account anatomy | The parts of an account and where the normal balance sits |
| 5 | Transaction pipeline | Document → journal → ledger → trial balance → statements |
| 6 | Accrual timeline | The same sale on two timelines, accrual and cash |
| 7 | Quality hierarchy | Fundamental qualities and their parts, enhancing qualities, cost constraint |
| 8 | Rule-maker map | SEC, FASB, ASC, ASU on one side; IFRS Foundation, IASB on the other; PCAOB set apart |
| 9 | Statement articulation | The four statements and the two links that join them |
| 10 | Effect strip | Which of assets, liabilities, equity, net income and cash each transaction moves |
| 11 | Verb ladder | recognize → measure → record → present → disclose as stages of one item's life |
| 12 | Chapter map | The chapter's topics and how they depend on each other |

The chapter-7 set adds the computational shapes: a cost-flow ladder showing the
same units costed three ways, a periodic/perpetual split, and a
consequence grid for what each cost-flow assumption does to income, tax and
assets.

---

## 4 · The eighteen gates

A handout is not reviewed by eye. It is built by a program, and the program
refuses to emit a handout that fails any gate. Nine gates are inherited; nine
are new and encode this standard.

### Fidelity — inherited, unchanged

1. **source_numbers** — every figure used in an exercise appears in the chapter.
   Scaffolding may restructure the book's data; it may not invent a number.
2. **source_terms** — every technical term used appears in the chapter.
3. **answer_present** — every response slot has an answer in the key.
4. **no_cross_reference** — no element refers to another exercise, handout or
   figure number. Each is self-contained.
5. **self_sufficient** — every element carries the data it needs on its own page.
6. **page_budget** — each handout declares its pages; measured fill of every
   declared page is ≤ 0.95 and no page overflows.
7. **key_separate** — the answer key is on its own sheets, outside the handout's
   page numbering.
8. **terms_covered** — every term row in the chapter's glossary is used.
9. **source_fidelity_of_reasons** — every answer's reason traces to the book's
   own explanation where the book gives one.

### Coverage and teaching — new

10. **total_coverage** — every section, figure, box, self-check item, practice
    item and case item in the chapter is claimed by some handout. An omission
    must be declared with a written reason; silence fails.
11. **teaching_coverage** — every claimed item is claimed by at least one
    *teaching* element (M1–M6), not only by a test element. This is the gate
    that makes the handouts the course.
12. **cycle_shape** — every cycle contains moves 1–6 in order. A cycle without
    a MODEL or without an INVENT fails.
13. **contrasting_cases** — every rule frame (M5) is followed inside its cycle
    by an M6 with at least two cases differing on one dimension.
14. **fading** — for every skill id, scaffold levels across the chapter are
    non-increasing.
15. **interaction_density** — every handout contains at least one X element,
    and at least one of X1, X2, X3 or X5 (the ones that require another person
    or an audience).
16. **visual_density** — at least one drawn figure per two pages, and at least
    one blank twin (X7) per handout.
17. **no_lecture** — no prose block exceeds 45 words; prose outside models and
    directions is under 15% of the handout's text.
18. **reloop_target** — every checkpoint names a move that exists in the same
    handout.

### What the gates deliberately do not check

They do not check that a diagram is *good*, that a rule frame's skeleton is
well chosen, or that a contrasting pair contrasts the dimension that matters.
Those are judgements, and they are made by hand, in review. The gates exist to
make the mechanical failures impossible so that review time goes to the
judgements.

---

## 5 · Page and session budget

| | First generation | Workshop standard |
|---|---|---|
| Pages per handout | ≤ 4 | 4–8, declared |
| Handouts per chapter | 2–3 (generated) | 8–14 |
| Minutes of student work | 25–40 | 60–90 |
| Prose share | n/a (no prose) | < 15% |
| Drawn figures per handout | 0 | ≥ 2, plus blank twins |
| Answer key | separate sheet | separate sheet, with the book's own wording for every rule frame |

A chapter is therefore roughly **60–80 pages** of student material, and a book
of eighteen chapters is a course of about 1,200 pages. That is the correct
order of magnitude: it is a textbook's worth of content, delivered as work
rather than as reading.

---

## 6 · What the student sees, in order

```
  SPEED ROUND            60 seconds, from earlier handouts          (not in handout 1)
  ─────────────────────────────────────────────────────────────
  CYCLE A   ORIENT       what you can already answer
            MODEL        the figure
            READ         questions off the figure
            INVENT       rule frame  +  contrasting cases
            APPLY        new case, then one stretch
            CHECKPOINT   gate item  ·  reloop if missed
  ─────────────────────────────────────────────────────────────
  CYCLE B   … same six moves, next idea
  ─────────────────────────────────────────────────────────────
  CLOSE     BUILD THE DIAGRAM     the blank twin, from memory
            TEACH IT BACK         three sentences to a named reader
  ─────────────────────────────────────────────────────────────
  (separate sheets)  ANSWER KEY, with the book's wording for each rule frame
```

---

## 7 · The division of labour, stated plainly

**The book supplies:** every accounting fact, number, term, rule, standard
reference, worked figure and explanation.

**This standard supplies:** the order in which they are met, the diagrams that
carry them, the questions that extract them, the scaffolds that fade, the
contrasting cases that make the rule visible, the errors planted for hunting,
the roles assigned for discussion, and the gates that keep all of the above
from quietly inventing accounting.

**The lecturer supplies:** circulation, listening, and the decision of when to
pull the room together. Not presentation.
