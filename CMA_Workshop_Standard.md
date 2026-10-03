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

---

## 8 · Built — the two reference chapters, and what the build changed

Two chapters were built to this standard: **Book 1 Chapter 1**, which is a
chapter of definitions, and **Book 1 Chapter 7**, which is a chapter of
arithmetic. They were chosen as a pair precisely because the format has to
work for both, and because the second was the honest test of whether the first
had only been designed for easy material.

### What came out

| | Ch 1 · The Language and Framework | Ch 7 · Inventory I |
|---|---|---|
| Handouts | 12 | 8 |
| Student pages | 71 | 42 |
| Response items | 332 | 184 |
| Drawn figures | 15, each with a blank twin | 7, each with a blank twin |
| Chapter items covered | 102 of 102 | 75 of 75 |
| Worst measured page fill | 0.93 | 0.93 |

Across both chapters, **113 student pages, none over budget**. The only
measurements above one page are three answer-key sheets, which flow onto a
second sheet; a key is not page-budgeted, and cutting the reasons to fit one
sheet would remove the most useful part of it.

### How the two chapters differ, and why that matters

Chapter 1's cycles mostly **invent a rule from a diagram**: the beam, the
equity tree, the quality hierarchy. Chapter 7's mostly **run a worked trace,
fade it to a completion problem, and then take the scaffolding away** — the
same skill asked three times with less help each time, which is what the
fading gate exists to enforce. The six moves did not need changing for the
computational chapter; what changed was which kind of model fills move 2.

The figures differ in the same way. Chapter 1's draw what a term *means*.
Chapter 7's draw where a number *comes from*: one total split two ways, the
layers a cost flow assumption cuts through, the direction every figure moves
when prices rise, the year an error lands in.

### Three gates changed, with the measurements that changed them

The gates were written before any handout existed. Three were wrong, and the
build is what showed it.

- **A drawn figure every two pages forced decoration.** Measured against real
  handouts, a worked trace and a data panel carry a model just as well as a
  diagram does. The rule is now one model every three pages, at least two per
  handout, and at least one drawn figure per handout.

- **A cycle may teach twice.** The move-order gate read MODEL, READ, MODEL,
  READ as moves out of order. It is a second pass at the same idea, and four
  cycles across the two chapters legitimately do it. The gate now tests
  precedence — a read after a model, an invent after a read, an apply after a
  read — rather than a single ascending sequence.

- **A figure the student computes is not a figure the book prints.** The
  original rule refused any number not in the chapter. But a handout that asks
  for FIFO ending inventory on a different quantity has to print the answer in
  its key, and the book never states it. Such figures are now allowed only
  when they are declared in the handout's `derived` table *with the arithmetic
  that produces them*. That is stricter than the old rule in the way that
  matters: the working is now on the record and auditable, instead of the
  number simply being absent from the source.

One gate was loosened for a reason that is not a concession: the no-lecture
word count now ignores the answer key. The key is the one place a full
explanation belongs, and counting it was penalising the sheets for explaining
themselves properly.

### What the gates caught

They are not decoration. On the first full run of the two chapters they
returned 49 failures. Two were mistakes that would have reached a student:

- A figure of **1,702,450** in a Chapter 1 contrasting case, which came from
  Book 3 and has nothing to do with Book 1. The source-numbers gate had no
  opinion about whether it looked plausible; it simply was not in the chapter.
- A set of **invented cost layers** for the Dubai pastry trays. The book gives
  only the total — 3,000 trays costing 68,000 — and not the layers, so the
  layers had been made up; they did not even add back to the total. The
  exercise was rebuilt on arithmetic the book's own figures support.

The rest were structural: a rule frame with no contrasting cases after it, a
cycle whose model had no questions interrogating it, a checkpoint whose reloop
named a move that did not exist, six coverage ids that did not match the
chapter inventory.

### The page count is a result, not a decision

The builder measures what it has emitted and breaks at the last block boundary
that fits, binding a cycle bar to what follows it and a model to the move that
reads it. The author writes the flow and marks a break only where the teaching
needs one — before a prediction is checked, for instance. This removed a whole
class of work: the first draft had every page break placed by hand, and three
pages still came out over budget.

The declared page count is then written back into the source after the build,
so that the running header's "Page 2 of 6" and the 4-to-8 page rule are held
against what the document actually is.

### A note on verification

LibreOffice is unavailable in the build container — it fails on a plain text
file, not only on these — so the documents were not proofed by rendering them
to PDF. They are verified structurally instead: the zip, the XML, every
relationship and every embedded image, plus the page-fill estimator that reads
the built file rather than trusting the height model. That is the same
verification the three first-generation books were delivered under. The
figures themselves were proofed by eye, as images, before being embedded.

---

## 9 · Second revision — what review found, and what changed

Reading the built documents turned up four faults. Three were mine; one was a
rule that had been written down but never enforced against a real page.

### The tables were broken, not merely ugly

The first column of every data panel took far too much width and the rest were
squeezed. The cause was not a width setting: **22 of the 388 tables declared a
one-column grid and then emitted rows of two, three or four cells.** A banner
row was being built as a single short row rather than as a cell spanning the
table, so Word was left to reconcile a grid that disagreed with its own
contents, and it reconciled it by giving column one the banner's width.

Three things changed:

- a banner is now one cell with `gridSpan`, so every row covers exactly the
  columns the grid declares;
- column widths are computed **from the content** — a blend of each column's
  longest and average cell, with a floor of 9 per cent and a ceiling of 52 —
  rather than by dividing 100 by the number of columns;
- the layout is `fixed`, so Word uses the widths it is given instead of
  re-sizing to fit.

And because a renderer can be wrong in ways the source looks right, this is
now checked **against the built file, not against the Python**. `wslint`
opens the .docx and fails the build if any table has a row that does not
cover the grid, a column that disagrees with itself between rows, a column
under 8 per cent or over 62, a multi-column table without a fixed layout, or
an image that is referenced but missing. All fifteen documents pass it.

### No open questions anywhere

Every item is now one of six closed kinds. Across the seven chapters:

| Kind | Count |
|---|---|
| Multiple choice | 872 |
| True / false | 191 |
| Matching | 28 |
| Sorting into categories | 8 |
| Table to complete | 2 |
| **Open questions** | **0** |

The reason is not neatness. A student working through a sheet alone has to be
able to settle every answer against the key; an open question asks them to
judge their own wording, which is exactly the judgement they do not yet have.

### A stem may not point at anything it does not print

The example that prompted this was real and the complaint was right:

> 27. recognize  28. measure  29. record  30. present  31. disclose
> **32. Which one of the five verbs is the only one that does not put anything in the statements themselves?**

"The five verbs" were in a different block. Item 32 could not be answered from
item 32. A gate now rejects any generated stem containing *above*, *below*,
*earlier*, *the panel*, *the figure*, *the table*, *the five*, *the four*, *the
three* or *the list*. Items the book itself wrote are exempt, because their
options are printed with them.

The same rule reshaped how questions are generated from a table. The first
attempt asked *"'Current asset' — which account is this?"*, which has several
defensible answers whenever two rows share a value. Questions now run the
other way — *"Which category does the book give for Prepaid rent?"* — which is
always a function: one row, one column, exactly one right answer, and the
wrong options are the column's own other values.

Two more lints came out of the same reading: a column heading is only used as
the noun of a question when it reads as one (*Measured at* does not), and a
row of a table that says *"Check with Figure F01-10"* is an instruction to
look elsewhere, not data, so it is dropped.

### Page one is now the preview, and it is full

Every handout opens with a page of multiple-choice and true/false items
answered **before anything has been taught** — the pretesting effect, and a
preview of what the session will settle. It is not sized by counting items in
the generator: the builder measures each item as it emits it and stops when
the page is full, so the generator offers up to sixteen candidates and the
page takes what fits.

Measured across all 41 handouts: **mean fill 0.84, lowest 0.71, highest 0.90,
and none over.**

### The seven chapters

| Ch | Chapter | Handouts | Pages | Items |
|---|---|---|---|---|
| 1 | The Language and Framework of Financial Reporting | 7 | 40 | 212 |
| 2 | The Balance Sheet | 6 | 38 | 178 |
| 3 | The Income Statement and Comprehensive Income | 6 | 33 | 166 |
| 4 | Equity and the Statement of Changes in Equity | 6 | 34 | 169 |
| 5 | The Statement of Cash Flows | 6 | 33 | 167 |
| 6 | Receivables: Credit Losses and Transfers | 4 | 23 | 142 |
| 7 | Inventory I: Goods, Costs and Cost Flows | 6 | 32 | 191 |
| | **total** | **41** | **233** | **1,225** |

Worst measured page fill across all 233 pages is 0.92. Every chapter passes
every gate.

### How seven chapters got built

Two chapters were hand-written, and that proved the format. Seven at the same
standard is a conversion job, and the book turns out to carry what a
conversion needs:

- **every section check and practice item is already multiple choice**, with
  the correct letter, a reason for it, and a separate reason for each wrong
  option. That is a complete, self-checking item bank, and 259 items come
  straight from it;
- **every real table is a relation**, so each row yields a question whose
  distractors are the table's own sibling rows. 842 items are generated this
  way. Nothing is invented, and no distractor is a straw man, because the
  alternatives come from the same table the answer does.

Where the book places most of a chapter's grids in one section — which it
usually does — the spares are pooled and handed to the sections it left
empty, so every handout has something real to read.

Chapters 1 and 7 keep the figures drawn for them by hand. The other five get
figures built from their own tables: a classification drawn as lanes, a
relation drawn as cards, a sequence drawn as a chain, and a located chapter
map where a section has no table of its own.

### What was given up, and why

- **The hand-written Chapter 1 and Chapter 7 handouts are no longer built.**
  They are better writing than a generator produces, and they are kept in
  `cma/legacy_w1_ch01` and `cma/legacy_w1_ch07` with a note. They predate
  three rules that now hold for every sheet, and rewriting them to those rules
  while also building five new chapters was not a trade worth making: seven
  chapters at one consistent standard is what makes a judgement about the
  standard possible.

- **Six of the book's own items are not asked**, each with its reason recorded
  in the chapter's `OMIT`: one works from the facts of another numbered item,
  and five are answered from a figure whose data the book prints as a picture
  rather than as a table. Reconstructing that data is exactly the invention
  the fidelity gates exist to stop.

- **Some of the book's own items have a correct option much longer than their
  distractors**, which is a mild giveaway. The length heuristic therefore runs
  only on generated items. Padding the book's distractors would mean writing
  accounting the book did not write.

- **The page ceiling moved from eight to nine.** One handout needs nine
  sheets because its model is the book's own balance sheet, which is
  thirty-nine rows. Printing less of it would mean asking questions from data
  the sheet does not show, which is the one thing these gates exist to
  prevent. A tenth page is still a failure.

---

## 10 · Third revision — page one becomes three gapped summaries

Page one was ten multiple-choice questions. It is now **three fill-in-the-gaps
summaries**, and the page around them is built to be a real route map of the
handout rather than a warm-up.

### Why summaries rather than sentences

The first attempt gapped three *individual* sentences pulled from different
parts of the section. That is a quiz, not a preview: three disconnected facts
tell a student nothing about the shape of the session. Each question is now a
**passage** — two to four of the book's consecutive sentences — taken from a
different stretch of the section, labelled *where the section starts*, *what it
settles in the middle*, *where it ends*. Read in order, the three of them are
the whole handout.

The wording stays the book's throughout. Nothing is paraphrased, because a
student filling a gap should be writing the word the book uses, and the key
prints the passage in full for them to check against.

### What else is on page one

| Block | What it is for |
|---|---|
| **Route map** | one row per cycle: what it settles, what you will be given to read, and the checkpoint question in full. Built **from the handout's own blocks after they exist**, so it cannot drift from what follows it |
| **Words this handout uses precisely** | the handout's glossary slice, with a tick column. Nothing here is marked: a student ticks what they could already use in a sentence, which shows them their own gaps and shows the room's to whoever is circulating |
| **The three gapped summaries** | the only scored work on the page |
| **How every cycle on this sheet works** | the six moves in a line each. Printed when the page has room for it |

Measured across all 41 handouts: **mean page-one fill 0.79, lowest 0.63,
highest 0.89, none over.**

### Gates added or changed

- **page one is three FILL questions** — not two, not four, and not of any
  other kind;
- **every gapped passage has at least two gaps**, and its word list holds
  **more words than gaps** with no word repeated, so it cannot be filled by
  counting and no gap has two defensible answers;
- **the route map has at least three rows**, so it describes the handout
  rather than naming it;
- **page one measures between 0.60 and 0.95 of a page** — enforced against the
  built document, not estimated;
- **the no-lecture cap no longer counts a gapped passage.** A summary a student
  writes into is work, not reading. Its *directions* are still capped at 45
  words, and shortening them was one of the fixes this revision needed;
- **a sentence that sends the reader to a figure** — *"Look at the lower part
  of Figure F01-03"* — is navigation, not content, and never reaches a summary;
- **the book's box labels are stripped.** A passage beginning *"EXAM TRAP Who
  is a primary user?"* reads as a mistake on a handout, because the label is
  the book's furniture rather than part of the sentence. So is a table cell:
  a summary sentence must start with a capital and end with a full stop.

### A bug this revision exposed

The Workshop blocks are mixed into the document class as `WDoc(Doc, WS)`. `Doc`
already had a `wordbank` method with a different signature, so **`Doc.wordbank`
was silently answering calls meant for the Workshop one**. Here it failed loudly
on the argument count, but a collision with compatible arguments would have
rendered the wrong block in silence for as long as nobody looked.

The mixin order is now `WDoc(WS, Doc)`, the Workshop method is renamed, and
**the module refuses to import if any name is defined on both classes.**

A second bug came out of the same reading: the flow list inside the generator
was called `body`, and `_i, head, body = main` — unpacking a table — rebound
that name. The appends still went to the right list because another variable
held the reference, so nothing failed; the route map just silently read a
table's rows instead of the handout and came out empty. The list is now called
`blocks`.

### The seven chapters, rebuilt

| Ch | Handouts | Pages | Scored items |
|---|---|---|---|
| 1 | 7 | 41 | 183 |
| 2 | 6 | 38 | 152 |
| 3 | 6 | 33 | 137 |
| 4 | 6 | 34 | 142 |
| 5 | 6 | 33 | 136 |
| 6 | 4 | 24 | 118 |
| 7 | 6 | 32 | 161 |
| | **41** | **235** | **1,029** |

Worst page fill 0.92. Every gate passes, and all fifteen documents pass the
layout lint.

The item count falls from 1,225 because page one now carries three questions
instead of ten. That is the intended trade: ten cold multiple-choice questions
measured what a student happened to know, while three gapped summaries make
them read the shape of the session before they start it.

---

## 11 · Book 1 complete — all eighteen chapters

| Ch | Chapter | Handouts | Pages | Scored items |
|---|---|---|---|---|
| 1 | The Language and Framework of Financial Reporting | 7 | 41 | 112 |
| 2 | The Balance Sheet | 6 | 38 | 104 |
| 3 | The Income Statement and Comprehensive Income | 6 | 33 | 101 |
| 4 | Equity and the Statement of Changes in Equity | 6 | 34 | 106 |
| 5 | The Statement of Cash Flows | 6 | 33 | 104 |
| 6 | Receivables: Credit Losses and Transfers | 4 | 24 | 78 |
| 7 | Inventory I: Goods, Costs and Cost Flows | 6 | 32 | 102 |
| 8 | Inventory II: Measurement Tests, Retail Estimates and Choosing a Method | 6 | 32 | 102 |
| 9 | Investments in Debt and Equity Securities | 5 | 28 | 91 |
| 10 | Long-Lived Assets: Depreciation, Disposal and Impairment | 6 | 30 | 100 |
| 11 | Revenue Recognition | 7 | 39 | 118 |
| 12 | Current Liabilities and Warranties | 6 | 36 | 100 |
| 13 | Income Taxes | 6 | 39 | 109 |
| 14 | Leases | 7 | 39 | 109 |
| 15 | Measuring Income: Gains, Losses, Comprehensive Income and Discontinued Operations | 7 | 39 | 109 |
| 16 | Consolidated Financial Statements | 7 | 39 | 111 |
| 17 | U.S. GAAP and IFRS: The Six Tested Differences | 7 | 39 | 116 |
| 18 | Integrated Reporting | 7 | 38 | 119 |
| | **total** | **112** | **633** | **1891** |

Worst measured page fill across all 633 student pages is 0.92. Page one, in
every one of the 112 handouts, sits between 0.63 and 0.90 — mean 0.79, none
over. Every chapter passes every gate, and all 37 documents pass the layout
lint.

### The item set

| Kind | Count |
|---|---|
| Multiple choice | 1,055 |
| True / false | 419 |
| Fill the gaps (the three preview summaries) | 336 |
| Matching | 55 |
| Sorting into categories | 17 |
| Table to complete | 9 |
| **Open questions** | **0** |

441 items come from the book's own section checks and practice sets, which
already carry the stem, the four options, the correct letter and a reason for
every wrong answer. 1,450 are generated from the book's own tables, where a
row gives a question whose distractors are that table's sibling rows.

### Twenty-three items the book wrote that these sheets do not ask

Each one is declared in its chapter's `OMIT` with the reason. Twenty-two are
answered from a figure whose data the book prints as a picture rather than as
a table, and reconstructing it is exactly the invention the fidelity gates
exist to stop. One works from the facts of another numbered item, so it cannot
be answered from its own page.

### What the last eleven chapters changed in the generator

Scaling from seven chapters to eighteen found five faults, all of them in
items that *read* fine until the gates looked at them:

- **A reference the key may make and the page may not.** A rule frame's book
  wording, a checkpoint's answer and the model answer of a teach-it-back are
  all printed on the key sheet, where pointing a student back to the book's
  own figure is useful. The cross-reference gate was reading them as page
  text. It now knows which positions of each block are key text.
- **A checkpoint with no extract.** The review handout's checkpoint took a
  practice item straight from the bank without attaching the figure it works
  from — and page one's route map, which copies the checkpoint, inherited the
  dangling reference. Four chapters were failing on this one omission.
- **A case item that opens by saying where to look.** The book writes "Use
  Figure F12-05, scenario C. How much …". That is where to look, not what is
  asked, so the pointer is stripped before the item becomes a question.
- **A row label that points off the page.** "Tax depreciation above the line"
  makes a stem that refers to something it does not print, as soon as it is
  quoted into a question. Such rows are no longer used as stems.
- **A word list that repeats a word.** A term appearing twice in a gapped
  passage was listed twice, which gives one gap two defensible answers.

And two tells that would have cost marks rather than correctness: a column
clamped to a maximum width could be pushed back over it by the renormalisation
that follows (the clamp now runs again after scaling), and a generated
question could end up with its right answer much longer than every distractor
(distractors are now chosen from those closest in length, and a question with
no close enough set is not asked at all).


## 12 · Fourth revision — twelve audit passes, and what they changed

The gates in §4 say whether a handout is *admissible*: no open questions, no
stem pointing off its page, every chapter item claimed, every table covering
its grid. They say nothing about whether an exercise is any **good**. A
question reading

> Which straight-line does the book give for Expense in early years?

passes every one of the eighteen gates and is not a sentence. So this
revision adds a second instrument, `cma/wsaudit.py`, which asks twelve
questions of every exercise in every handout and, where it finds something,
names the action. Nothing is repaired in the auditor: it writes the plan,
the generator carries it out, and the auditor runs again to show the
movement.

| # | pass | what it asks |
|---|---|---|
| 1 | grounding in the book | is every word of it in the book? |
| 2 | relevance | does it test the accounting, or the book's own furniture? |
| 3 | clarity | is the stem a sentence a student can read once? |
| 4 | lack of ambiguity | can exactly one option be defended? |
| 5 | sequence | does it come after the model that settles it? |
| 6 | consistency | is it a near-copy of its neighbour? |
| 7 | effectiveness | does it make the student reason, or only look? |
| 8 | interest | is there a company, a decision, something at stake? |
| 9 | usefulness for the test | is it the shape the exam asks in? |
| 10 | sufficiency of directions | can a student start it without being told more? |
| 11 | student background | does it assume English or notation we have not given? |
| 12 | visual potential | would a figure carry this better than prose? |

Severity **2** means rewrite or drop; **1** means weaken, fix in passing.

### What it found, and the rule each finding became

Every fix below is structural — a rule in the generator or a gate — not an
edit to one handout, because an edit to one handout does not survive the
next regeneration.

**The sentence layer.** Three defects fed every gapped passage on every
page one.

- The splitter broke on any full stop, so `U.S. GAAP` became a sentence
  ending at `U.S.` and a fragment starting at `GAAP`. A passage then read
  *"the method changes cash only through income taxes, and U.S. A new
  useful life is a change in estimate."* Fixed by holding a fragment open
  while it ends in a known abbreviation (`ABBREV`).
- A figure caption is prose to a splitter. `Figure F10-02. Depreciation
  expense each year for the bottling line under four methods.` lost its
  first half to the figure-reference filter and left the rest describing a
  picture the page does not print. Caption lines are now dropped before any
  splitting (`CAPTION`).
- The book's item numbering leaked in, so a *summary* read *"SC10-4 After
  two years, Orontes revises the useful life."* — a question stem lifted
  out of its exercise. `sentences()` now rejects any sentence carrying an
  item id. `ASC 606` and `IAS 1` are **not** item ids: those are the
  standards, and a handout on revenue should name ASC 606.

**The three preview summaries** — the complaint that began this revision.
They were weak for four reasons beyond the sentence layer, each now a rule.

- They overlapped. Disjointness was tested on the whole passage string, so
  three passages sharing two of three sentences all passed. It is now
  tested on *sentence indices*: the three are disjoint, and a section too
  thin for three disjoint passages (14.1 "What is a lease?" is a dozen
  sentences) may carry over one sentence, never an opening one.
- They opened mid-thought: *"This reclassification adjustment stops the
  same gain being counted twice."* A passage may not begin on a word that
  hangs off a sentence it does not print (`DANGLING`), and the rule now
  binds every source of a preview passage, including the fallbacks — which
  is where the last two danglers in Book 1 were hiding.
- They arrived in the wrong order. The labels say *where the section
  starts*, *in the middle*, *where it ends*, but a thin third sends the
  search through the whole section, so a reader could meet the end of the
  section under "where the section starts". The three are now sorted by
  position before they are labelled.
- A section with no three passages fell back to single gapped sentences,
  which is the thing page one was redesigned away from. The fallback is now
  the **table** the handout is built on, summarised in its own cells
  (`table_summary`), and the single-sentence fallback is last and must meet
  the dangler rule.

**The exercises.**

- *Near-copies (368 findings, all severe).* A table of eight rows yielded
  eight questions of one shape, and the reading move asked four of them off
  one column. The reading move now takes **two** cell questions at most,
  from different rows *and* different columns, and spends the rest of the
  move on the table as a whole (sort, grid, matching). A near-copy filter
  (`deduped`) then cuts any run that survives, comparing stems with the
  quoted value removed — because *"Which row does the book pair with ⟨a
  long sentence⟩?"* asked three times differs enormously in the quoted part
  and not at all in the part a student reads as the question.
- *The checkpoint re-asked the cycle.* `scm[:2]` and `pm[:2]` overlapped
  the applying pool, so a cycle closed by repeating a question it had just
  set. The checkpoint now excludes anything already shown, and checkpoints
  pass through the near-copy filter and the per-item normaliser like every
  other item.
- *The review sheet* was the one sheet whose flow never went through either,
  so every near-copy and unpunctuated stem left in Book 1 was on a review
  sheet.
- *The case set* asked *"Which of these does item C1-1 ask for?"*, then
  C1-2, then C1-3 — six near-identical questions about the wording of a
  question, naming an item number that means nothing on a handout. The book
  gives no answers for its case tasks, so the one thing askable in closed
  form is what a case set actually teaches: the tasks have an order, because
  each uses the result of the one before, and the book's own numbering is
  that order. Six MCQs became one ordering item.
- *Stems that were not sentences.* `noun_ok` accepted any short heading, so
  the sheet asked *"Which what happens does the book give for Prepaid
  expense?"* and *"the creates of Contract liability"* and *"Which ● IFRS
  does the book give for common stock?"*. A heading is now rejected if it
  opens on a question word, if it is a bare verb, if it is generic (*row*,
  *item*, *answer*, *value*), if it is a value or a method name
  (`VALUEISH` — the transposed-table case that produced *"Which
  straight-line…"*), or if it carries the book's bullet. `tf_from_row` was
  testing the wrong heading of the two it quotes. A totals line is an
  arithmetic consequence of the rows above it, so it is not a subject for a
  stem either.
- *Ambiguity.* An option containing another lets a student defend both. One
  normaliser (`normalised`) now drops the overlapping *distractors* rather
  than the key, drops the item if fewer than three options survive,
  dedupes every word bank, punctuates every stem, and runs over every item
  from every source — because a dozen places build items and any of them
  can forget. The generator's threshold was one character off the auditor's;
  they now agree.
- *True/false in the applying move* is a coin flip. The two hand-written
  fillers became real items: one applies the table to a row the reading
  move did not show, the other asks for the English term the exam will mark.
- *Chapter numbering* ("Which part of this chapter is section 7.1?") is the
  book's table of contents, not its accounting. One such item orients a
  reader; four is a quiz on the front matter. Capped at one.
- *Interest.* Where the book's bank offers both an abstract item and one
  set at Orontes, the Orontes one goes on the page (`by_interest`). The
  bank is dealt out to a chapter's sections in order and the situated items
  are not spread evenly through it, so they are now set aside first and
  dealt one per handout, with anything undealt returned to the bank so the
  chapter's coverage still closes.

### Two rules the audit changed about itself

An instrument that measures the wrong thing is worse than none, so two
passes were re-specified against evidence rather than left to flatter the
result.

- **Interest is a property of the handout, not of the item.** The pass first
  flagged every abstract item in an applying move — 598 findings. But an
  exam asks plenty of abstract questions and a handout should too; *"Which
  account normally has a debit balance?"* is not a defect, and the glossary
  cycle's applying item is about a word by design. What *is* a defect is a
  whole session in which the student never once faces a company deciding
  something. The book supports that standard and no stronger one: of its
  505 bank items, about a quarter set a situation, which is roughly one per
  handout and nowhere near one per move. A pass demanding more would be
  asking the generator to invent situations, which is the one thing it must
  not do.
- **A lead-in is an ending.** The pass required every stem to end in `?` or
  `.`, flagging 144 items — but *"Accumulated depreciation is BEST
  described as:"* is how the exam itself writes a stem. A colon or an
  ellipsis now counts.

Both the generator and the auditor import **one** definition of what makes
an item situated. Two copies of that test had already drifted apart, and
the generator was reserving items the auditor did not count — solving a
different problem from the one being measured.

### Two structural rules this revision added

- **A sheet is as long as its section has substance.** The page floor was a
  flat four. Section 18.5, "Benefits and challenges", is six sentences and
  a four-row table; stretching it to four pages means inventing questions.
  A section the book itself writes short (under 1,600 characters) is allowed
  a three-page sheet. Every other section still owes four.
- **A thin section is topped up from what it has, not padded.** Where a
  chapter's bank runs out before its last section, the applying move is
  filled from that section's own tables and glossary (`topup`) — rows the
  reading move did not show, the table read as a relation, the glossary as
  matching. It goes into the existing move, never into a cycle of its own:
  a cycle without a model is not a cycle.

### The movement

Measured by the same auditor against both generations, the earlier one
recovered from git so that both columns are one ruler:

| | before | after |
|---|---|---|
| exercises | 2,115 | 1,635 |
| clean | 1,315 (62%) | 1,593 (97%) |
| findings | 1,232 | 42 |
| **severe findings** | **437** | **0** |

Fewer exercises, because 480 of them were near-copies, cell hunts or quizzes
on the table of contents. All eighteen chapters still pass all eighteen
gates, the document linter and the measured page budget.

### What is left, and why

Forty-two findings remain, none severe.

- **26 · interest.** Eight handouts of 112 still have no item that puts a
  company in front of the student: 6.2, 6.4, 8.6, 10.5, 12.1, 13.1, 17.6,
  17.7. Their chapters' situated items ran out — chapter 17 offers three in
  its problem bank against seven handouts. Closing these would mean writing
  situations the book does not contain, which is a decision about content,
  not a defect in the conversion.
- **12 · effectiveness.** A third cell-reading question under one model,
  where the top-up had nothing better to offer.
- **5 · visual potential.** Three tables in chapters 13 and 16 that no
  figure shape fits: a numeric tax reconciliation and two long topic
  comparisons.

`cma/wsaudit.py` prints the table above; `CMA_Book1_Exercise_Plan.md` names
every remaining finding with its handout, its exercise and its action.
