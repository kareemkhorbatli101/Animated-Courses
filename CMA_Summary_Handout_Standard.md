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
its occurrences is ever gapped. A column heading that *asks* —
"Controllable by the plant manager?" — does not count as printing the
answer: it names the axis, and "Controllable" and "Not controllable" are
two different answers on it.

**A figure gives up about half its labels, never all.** A card too long to
blank whole keeps its label and gives up a word inside it; a card that
keeps its label gives up a word of its description.

### No answer is printed anywhere else on its sheet

This is the rule the whole sheet is judged by, not the block. Applied
block by block it let a word be gapped in a paragraph and printed in the
grid under it, and **1,874 of the books' 8,020 gaps — 23 per cent — could
be filled by looking down the page instead of thinking.** It is now 3.5
per cent, and what is left is a term appearing in some unrelated sentence
rather than its own definition sitting beside its slot.

It is enforced in four places and in one direction each, because the two
halves of a duplication are not worth the same:

| | gives way to | because |
|---|---|---|
| a paragraph's gap | the other paragraphs and the printed grids | the sheet's text is one text |
| a grid's gap | the paragraphs, then the other grids | a grid has twenty cells to choose between and a paragraph has to be printed whole |
| a figure's gap | the printed grids | a figure has four or five labels; the paragraph is the one that should give way, and it does, above |
| a figure's gap | what an earlier sheet asked **in the same form** | a chapter map gapping "Operating lease" and a web gapping it are not the same question |

Two of those give way again when holding to them would cost more than it
buys. A grid that can find nothing under the sheet-wide rule is gapped
against its own row instead, because a grid printed whole with its
answers in it is the worse failure. A block the rule takes below two gaps
— the floor at which it would be dropped from the sheet — is gapped
without it. The figure's rule never gives way: a figure that finds
nothing falls back to its grid.

**A translation is exempt.** A web of English against Arabic asks for the
mapping, and the mapping is the one thing no paragraph and no grid on the
sheet carries; the glossary table that *would* carry it is never printed.
Judged like any other figure it cost twenty-two webs, because the
chapter's journals print "actual costing" as a column heading — which
narrows the choice and does not supply the answer.

**Where a section has its own glossary the web is clued by the Arabic,
not by a meaning the section states in words.** Both are its vocabulary,
but the prose keeps the definition it states — it is the section's
summary and has to — so a web clued by that same definition asks the
reader to copy the word out of the paragraph above it. Taking the
definitions *out* of the prose was tried and reverted: a section's
definitions are scattered down its paragraphs with their examples between
them, so removing them left "Three of them describe the balance sheet at
one date. Examples: cash, accounts receivable. Examples: accounts
payable. It is the owners' claim."

### A figure replaces its table, so it has to carry it

The grid is not printed under a figure drawn from it — printed both ways,
the figure's answers would sit in the grid beside it. So a form that
draws half a table takes the other half off the sheet, and **119 figures
across the four books did**: a nine-line journal drawn as three bars of
its debit column, with the accounts and the credits gone; a seven-column
lease schedule drawn as a flow of years against opening liability.

- **A form may leave at most one of the table's columns undrawn.** A
  column mostly drawn is a column the figure carries; a column not drawn
  at all is the chapter's own data taken off the sheet. Held instead to
  every cell, the rule refused the good partial figures with the bad
  whole ones and left books 2, 3 and 4 with two forms each.
- **A tree carries the row's other columns on its card**, and the rows
  the chapter leaves out of the classification — a worked example's own
  answer line — in a band under it.
- **A chart carries them under the bar's label**, and is refused outright
  for a journal (account lines written under a blank first cell) or a
  reconciliation (amounts it subtracts), neither of which bars can draw.
- Where the cards make a figure taller than a page it is drawn again
  without them, and if it is still too tall the form is given up and the
  table stays a grid, where every cell is printed or gapped.

### A worksheet and its key are one grid

Every chapter of these books ends on a worksheet with cells left as
underscores, and, in its answer pages, the key to it: `Item | Answer`.
Printed as they stand the two did real damage. Where the chapter's index
puts both on one section — every chapter of book 4 — the sheet asked the
question and printed the answer under it, and fifteen classification
trees drew a root reading `________`. Where it puts them on different
sections — books 1 to 3 — the key landed on a sheet with no question on
it at all.

So they are merged, across the chapter rather than within a section. The
blank takes the part of the answer that belongs to the column the chapter
left blank — the label before the dash, or, where the key says "Why:",
the clause after it — and the Why column takes the key's own fuller
wording. The key then comes off the sheet, because the handout carries a
key of its own. Nothing is guessed: the two are paired only where the
key answers *every* blank row, matching on the row's own first cell.

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
| **panel** | a count the chapter states ("in one of three ways") *and* that many sentences opening the same way; or three or more consecutive "If X, Y" tests; or a two-column table of cases against the one category each falls under, each named once, the label column the shorter of the two |
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
| 23 | every numbered gap a figure draws is in the answer key |
| 24 | every sentence the generator leaves out, it leaves out for a reason |

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

| | book 1 | book 2 | book 3 | book 4 |
|---|---|---|---|---|
| sheets | 94 | 116 | 106 | 108 |
| gaps | 2,273 | 1,801 | 1,547 | 1,868 |
| gaps per sheet | 24.2 | 15.5 | 14.6 | 17.3 |
| figures per sheet | 1.71 | 1.27 | 1.30 | 0.94 |
| sheets with no figure | 6 (6%) | 23 (20%) | 22 (21%) | 33 (31%) |
| …of those, with no grid either | 1 | 5 | 1 | 16 |
| forms used | 10 | 7 | 7 | 5 |
| findings | 1 | **0** | **0** | **0** |

**424 handouts, 7,489 gaps, 1 finding across four books**, and of those
gaps **269 — 3.5 per cent — have their answer printed somewhere else on
their own sheet**, against 1,874 of 8,020 (23 per cent) before the
sheet-wide rules above.

The one finding is book 1's treasury-stock journal (4.2) printing
whole. Its
Account column names "Cash" on three of its nine lines and "Treasury
stock" on three more, and one slot per entry in the word list leaves it
one gap, below the floor. Two slots sharing a word is what the exam's own
drag-and-drop does, but the word list is a list and the key is a list,
and a reader who meets "Cash" once against two slots cannot tell which it
answers. That is a change to the bank and the key, not to the gapping,
and it has not been made.

**The totals moved down and the sheets got better.** 531 fewer gaps and
seven more sheets without a figure, against 1,605 fewer gaps a reader
could fill by copying and three more forms in use. What went was mostly
not work: 15 of book 4's trees were rooted on a cell reading `________`
and asked which case belonged under a blank label; 22 webs asked for a
word the grid beneath them printed; 119 figures were drawing part of a
table and taking the rest of it off the sheet.

Also fixed in the same pass: **50 figures across the four books were
losing the ends of their titles**, drawn as one line on a canvas that
holds about sixty characters at 20pt. Titles now wrap.

### Book 4, and what it took

Book 4 (internal controls, systems, data analytics) ran **9 findings on
its first pass**, against book 2's 149 — the generalisation work held.
Four causes, three of them book 4 conventions:

- **a cross-reference column.** Book 4 gives several tables a column
  headed "Where this book met it" or "In this book", holding entries like
  "Chapter 16's warning". That is a pointer at a book the reader has not
  got, and it is not content either way. The column is dropped and the
  rest of the table stays.
- **an aside that points at the book itself** — "Its role rests on a
  single principle, *and it is the most useful sentence in this
  chapter*". Dropping the sentence for the sake of the aside took the
  principle with it; the clause is cut instead.
- **a block opening a sheet on "It" or "This is"**, where the antecedent
  was a figure-pointer sentence. The sheet's own title bar is a heading,
  so the block that opens a sheet is never hanging: "It is drawn with
  return arrows" sits under "14.3 Why mining is iterative", which is what
  "It" means.

And one that improved every book: **a meaning the chapter states in a
table counts whether or not the word is also in a glossary.** Book 4
writes its vocabulary as `Risk | What it means | At Orontes` — forty
tables of it — and a rule that read only two-column tables, and then only
looked the rows up in the section glossary, saw none of it. Book 4's
figure-less sheets fell from 39% to 28%, and books 2 and 3 gained webs too.

### Why book 4 uses four forms

It is a vocabulary book. Its chapter on **time series** contains no
numeric table at all — every table in it is `term | what it is | example`
— so chart fires once, and graph and bridge not at all. Nothing is being
missed; there is nothing of that shape to draw.

Its 16 sheets with neither figure nor grid are short expository sections
naming **one or two terms** between them and carrying no table. A web
needs three spokes. One detector was prototyped for them — a section
titled "The five systems roles" whose five roles sit in one sentence —
and **rejected**: across the four books it fired fifteen times and was
right about twice, matching "The liability still grows by interest, falls
by payments" to the word "two" in a title. A form drawn on a coincidence
is worse than no form.
