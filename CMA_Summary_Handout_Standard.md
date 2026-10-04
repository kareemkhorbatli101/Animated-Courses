# The summary-handout standard

What a summary handout is, what is forbidden on one, and how to prove a
book's worth of them. Written so that book 4 is the same act as book 1 and
nothing has to be remembered.

**To do a book, in full:**

```
cd cma
python3 wsrun.py 4            # build, check and audit every chapter
python3 wsrun.py 4 --build    # and write the .docx files
```

`wsrun.py` exits non-zero while anything is outstanding, so it is also the
thing to run before saying a book is done. A book is a set of chapter
files in `cma/src/` named `b<N>_ch<NN>.txt`; chapters are counted, never
assumed, so a book of twelve chapters and one of twenty both work.

---

## 1. What a sheet is

One sheet per section of the chapter. The sheet is the section's own
words, in the section's own order, with holes in it — and a word list
under each block holding the answers plus at least one that is not.

**Coverage holds by construction, not by checking.** Every sentence of the
section lands in some block, because the blocks are built by walking the
section. There is no selection step that could leave something out.

Four things a sheet may leave behind, and nothing else:

| | why |
|---|---|
| a reference into the book | the sheet replaces the book, so "Figure F213-07 shows" points at something the reader has not got |
| a sentence whose subject is a French word | these students do not read French |
| the chapter's furniture | its question bank, its captions, its learning-objective table |
| a foreign-language gloss in brackets | the sentence stays, the bracket goes |

## 2. The gapping rules

| | |
|---|---|
| one gap per ~11 words of prose | dense enough to be work, open enough to leave text to reason from |
| 2 to 12 gaps a block, ~135 words a block | built to a word target, breaking on a sentence end |
| never two gaps adjacent, never the first word | there is always readable text to work from |
| a word the block already prints is never gapped | including across an apostrophe: "parent" is printed by "parent's" |
| a number is never gapped in prose or a grid | recalling 300 from a list of numbers is a memory trick |
| no entry inside another, as a phrase | "Current asset" against "**non**current asset" is the lesson; "cash flows, balance sheet" inside the longer list is ambiguity |
| no entry that another begins | "No" and "No: 5 of 30 years" are two answers for one slot |
| at least one wrong answer, shaped like the right ones | a four-word entry among nine-word answers strikes out without reading |
| gaps are numbered inline, and inside a figure | marking is reading down a column |

**A grid is gapped like prose.** The first column stays, because it names
the row — unless the other columns are all amounts, and then the names are
what is worth recalling and the amounts are the clue. A cell too long to
copy off a word list keeps its text and gives up one phrase inside it. A
whole column is never emptied. A value several rows share stays a
candidate — that is what a classification table teaches — but only one of
its occurrences is ever gapped.

**A figure gives up about half its labels, never all.** A card too long to
blank whole keeps its label and gives up a word inside it; a card that
keeps its label gives up a word of its description.

## 3. The forms, and what the text must say for each

Nothing is drawn on a guess. Each form has a detector, and where no shape
fits, the content stays a gapped grid or a paragraph.

| form | drawn when |
|---|---|
| **web** | the section has four or more terms with meanings, or with their Arabic |
| **flow** | a table whose rows are ordered stages, or prose that numbers itself: "Step 1 … Step 2 …", or "First … Second … Third …", consecutive, from one |
| **tree** | 2–5 groups, most holding two or more members, no date column |
| **chart** | three or more labelled magnitudes, no index-like column, no total row |
| **graph** | a quantity across three or more periods or ordered bands |
| **contrast** | a two- or three-column comparison, one side per row gapped |
| **sides** | sentences naming one framework and not the other; or two sets the title joins with "and" and a pivot sentence divides |
| **bridge** | a stated computation whose parts reconcile to its total; or a COLUMN of a table whose entries sum to its own last row, within half a percent. The arithmetic is the detector: where it does not add up, it was not a build-up and nothing is drawn |
| **panel** | a count the chapter states ("in one of three ways") *and* that many sentences opening the same way; or three or more consecutive "If X, Y" tests |
| **branch** | "If X, it does A." answered by the very next sentence, opening "Otherwise" |

A figure drawn from prose takes a **span** — the unbroken run from its
first sentence to its last. The sentences inside the span it does not draw
become its lead-in paragraph, so nothing is lost and nothing is repeated.

## 4. The checks

Two sets, run in that order by `wsrun.py`, overlapping deliberately at one
point only — coverage — because coverage is the claim everything else
rests on.

**Build-time** (`wssum.check`) refuses a sheet outright: every answer in
its list, the gap count matching the answer count in prose, grids and
figures alike, no block opening on a gap or mid-thought, no list holding
one answer inside another, every figure rendering and reporting a height.

**Reading passes** (`wssumaudit`) read the finished sheet the way a
student meets it:

| | |
|---|---|
| 1 | every sentence of every section is on its sheet exactly once |
| 2 | every answer is in its own word list, once, and alone |
| 3 | the gaps run 1..N down the sheet |
| 4 | the answer key has one line per gap and nothing else |
| 5 | every word list offers at least one word that is not an answer |
| 6 | no block too dense, too long or too empty to work |
| 7 | no block opens on a word with nothing before it to refer to |
| 8 | nothing sends the reader to a book he has not got |
| 9 | no caption, question number or box label leaked onto the sheet |
| 10 | no French anywhere; Arabic only in the term web |
| 11 | every figure is a real image with real, distinct answers |
| 12 | no figure drawn in a form its own content does not have |
| 13 | no figure taller than a page |
| 14 | every gapped grid laid out so a reader can read it |
| 15 | the sheet reads in the order the chapter wrote it |
| 16 | no figure and no gapped sentence repeated across the chapter |
| 17 | every answer is a word the book itself uses |
| 18 | every sheet works its section as hard as the section allows |
| 19 | every data table of the section is on its sheet |
| 20 | nothing printed whole that the reader could have worked on |
| 21 | no gap a reader can fill without knowing the answer |
| 22 | every gapped block, refilled from its own key, is what the book says |

Pass 22 is the one that compares the sheet to the source rather than
reading the sheet alone: between the book and the handout the text passes
through sentence splitting, gloss cutting, cross-reference cutting, gap
insertion and — in a grid — a marker substituted into a cell and taken out
again, and any one of those can drop a word that no other pass would
notice.

## 5. What a book's own conventions may differ in

The toolchain was written against book 1 and three of its habits turned
out to be book 1's rather than the books'. Each is now read from the text:

- **figure numbering**: book 1 writes `F05-01`, books 2 and 3 write
  `F213-01`. A two-digit pattern let every figure reference in books 2
  and 3 onto the sheets.
- **how a worked example opens**: books 2 and 3 open theirs "This example
  sets out …", which a demonstrative-opening rule read as a hanging
  sentence. A demonstrative with a concrete noun after it names its own
  subject.
- **blank worksheets**: books 2 and 3 leave more tables for the reader,
  written as runs of underscores. Those are writing slots, not values:
  they vote neither way on whether a column is amounts, and they are
  never offered as an answer.

**When a new book throws findings in the dozens, look here first.** A
finding that repeats across many chapters of one book and appears in no
other book is almost always a convention, not a defect in the sheets.

## 6. Where it stands

| | book 1 | book 2 | book 3 |
|---|---|---|---|
| sheets | 94 | 116 | 106 |
| gaps | 2,317 | 1,832 | 1,542 |
| gaps per sheet | 24.6 | 15.8 | 14.5 |
| gaps per 100 words of prose | 7.7 | 8.1 | 7.8 |
| figures per sheet | 1.82 | 1.34 | 1.32 |
| sheets with no figure | 3 (3%) | 23 (20%) | 21 (20%) |
| …of those, with no grid either | 1 | 5 | 1 |
| forms used | 10 | 6 | 6 |
| findings | **0** | **0** | **0** |

### Where the books differ, and why

The one number that says the standard holds across all three is **gaps per
100 words of prose: 7.7, 8.1, 7.8**. Each book works its own source
equally hard.

Everything else follows from what the books ARE. Book 1 is financial
reporting: it argues, compares and defines, so its prose carries
contrasts, two-way tests and counted sets, and its chapters name three
and a half terms a section. Books 2 and 3 are cost accounting: they
compute and allocate, their sections are half as long, and their content
lives in tables of numbers.

So three of book 1's forms — **contrast, sides, panel, branch** — fire in
books 2 and 3 **never**, and forcing them would mean asserting an
opposition or a test the chapters do not make. Two things were done
instead, and both are the books' own shapes rather than book 1's:

- **the period, however a book names one.** `YEARH` knew years, because
  book 1 reports in years. Books 2 and 3 budget in quarters, and sixteen
  quarterly schedules — exactly the tables a line is the right picture
  for — were being read as ordinary grids. Graphs in book 3: 1 → 9.
- **the bridge from a table.** A column whose entries sum to its own last
  row is a build-up, and a waterfall is what shows one. The arithmetic is
  the detector, so nothing is drawn on a guess. This is the one form the
  three books share in strength: 7, 11 and 4.

And one threshold moved: **a word web now needs three spokes, not four.**
Four was right for book 1; book 3 has thirty-six sections with exactly
three terms. Webs: book 2 39 → 71, book 3 24 → 54, and book 1 gained ten
of its own. Sheets with no figure at all fell from 29% and 32% to 20% in
both, and from 6% to 3% in book 1.

**What the 20% is.** Of the 44 figure-less sheets in books 2 and 3, 38
carry a gapped grid — the section's own table, with cells taken out of
it, which is a visual exercise even though it is not a diagram. **Six
sheets in the three books carry neither**, and every one of them is a
section of under 120 words of prose naming two terms or fewer. There is
nothing there to draw.
