# CARRY — CMA Part 1 **Book 2** onto the website

*Written for: the owner, and whoever executes this (likely a later session of me).*
Dated 2026-11-06. Nothing has been built yet — this package is **facts, dispositions and
teeth**, and every number in it was measured by a tool in `tools/` that wrote its working into
`evidence/`.

---

## 1. The book is verified, and it is the same book

| | |
|---|---|
| file | `D:\____All_Books\CMA\____Final_Book_and_Summaries\CMA_P1_Book2_volume_v1.0.docx` |
| bytes | **14,653,969** |
| sha256 | `dbb9d303bf5c1e5fedc82ce3951df8fd515a59c61f23c21946d79a73d886ea17` |
| read by | `tools/cma_book.py` — the Book 1 reader, unmodified |

It is **not** the same file as `CMA\CMA_Book_2\CMA_P1_Book2_REVIEW_EDITION.docx`
(`87fca4ea…`), which is an earlier edition. The volume above is the one to lock to.

**It is the same series, the same author and the same house style.** Measured
(`evidence/structure.txt`):

| | Book 1 (shipped) | Book 2 |
|---|---|---|
| chapters | 18 | **18** |
| numbered sections | 112 | **116** |
| questions | — | **522** (232 Section Check + 290 Practice) |
| …of those with the author's explanation | all | **522 of 522** |
| captioned figures | 203 | **256** |
| …of those drawn (the rest are tables) | 104 | **106 drawn, 150 tables** |
| term rows / with Arabic | — | **392 / 392** |
| distinct English terms | 316 | **169** |
| TERM BRIDGE · EXAM TRAP · WORKED EXAMPLE · YOUR TURN boxes | — | **96 · 37 · 39 · 18** |
| case items (`C…-1…7`) | 7 per chapter | **126 = 7 × 18** |
| Your-turn authored answer pairs | 73 | **43** |
| blocks / characters / tables | — | 6,400 / 565,603 / 684 |

Chapter titles run **Cost Objects, Pools and Drivers** → **Setting Standards: The Standard
Cost Card**: this is Section B/C cost management, where Book 1 was financial reporting.

Every structural anchor the Book 1 pipeline depends on is present and parses with the
**unmodified** readers: `Learning objectives`, `Key terms in this chapter`, numbered
`Heading 2` sections, a final `Extended Example NA`, `Chapter summary`, `Practice`,
`Answers and explanations`, the one-cell boxes, and the three-column
English/العربية/Français term tables nested inside the TERM BRIDGE boxes.

---

## 2. The one real difference, and why it is dangerous rather than hard

**The author namespaced Book 2 by inserting a `2` before the two-digit chapter number.**

| | Book 1 ch 7 | Book 2 ch 7 |
|---|---|---|
| figure | `F07-01` | **`F207-01`** |
| section check | `SC7-1` | **`SC207-1`** |
| practice | `P7-01` | **`P207-01`** |
| case item | `C7-1` | **`C207-1`** |

This is *good news* — it means Book 1 and Book 2 ids can never collide — but it is the single
most dangerous fact in this package, because of **how** it fails:

> `figure_tables()` searches for `F%02d-\d\d % n`. On Book 2 that pattern matches **nothing**
> and the function returns an empty dict. A census reads an empty dict as **zero figures**,
> which is indistinguishable from a clean result.

I hit this while measuring. The first dry run printed `0 figures, 0 graded, 0 shown` for all
eighteen chapters and **no error**, and the same probe reported `169 of Book 2's terms are
new` because a loose regex found 5 keys in an `icons.js` that registers 333. Both numbers
were my probe's bugs, not the book's. This is the
`clean-first-run-means-nothing` class exactly, and it is why every check below is specified
to assert a **positive** count.

**`evidence/coupling.txt` lists all 37 lines** across the toolchain where the chapter number
is interpolated into an id pattern. Each one finds zero on Book 2.

### The other half: 91 rows keyed by a bare chapter number

Seven hand tables are keyed by `n` alone:

| table | rows | what a row is |
|---|---|---|
| `BRIEF_ANIM_BY_CHAPTER` | 27 | a choice: which drawing the Brief opens with |
| `SUMMARY_CLOZE` | 17 | the author's summary sentence, blanked |
| `CASE_RULES` | 17 | **the author's own sentences**, asserted verbatim |
| `FLOORS` (cma_depth) | 17 | a *measured* floor — never typed |
| `DUPLICATE_OPTIONS` | 5 | an erratum in his key |
| `TRAPS` | 4 | a named trap |
| `EXTENDED_EXAMPLE` | 4 | the step list |

Left as they are, **Book 1 chapter 5's row would answer for Book 2 chapter 5** — silently, in
the author's own voice, so `cma_provenance` would pass it. The mechanism is `.get(n)` returning
an empty dict: a missing row reads as "nothing to add", never as "wrong book".

---

## 3. What the existing toolchain already builds, measured

`tools/dispatch_dryrun.py` runs the **shipped** `auto_section` over Book 2 with only the prefix
regex changed. Nothing else is touched, so a figure counted graded here is a figure that would
really be graded.

```
table-shaped figures      164
dispatched into a scene   132
  of those GRADED         104
  of those ONLY SHOWN      28
not dispatched at all      32   (skipped, or the Your-turn figure itself)
Your-turn answer pairs     43
no dispatcher errors on any of the eighteen chapters
```

Kinds chosen: `schedule` 42 · `shares` 30 · `lines` 21 · `number` 20 · `post` 12 · `grid` 7.

**That is the headline: 104 graded exercises from the author's figures, for one character of
change, with no new instrument and no errors.** The figure-shape dispatcher classifies by
shape rather than subject, so it does not care that Book 2 is about cost pools and spoilage.

Add the 522 questions, the 126 case items and the 43 Your-turn pairs and Book 2 opens at
roughly **800 graded exercises before any depth work at all** — against Book 1's 1,102 after
a full depth pass.

### Two measured oddities to resolve, not to assume

1. **`auto_fill` is chosen 0 times** (it took 13 of Book 1's figures). Either the rules above
   it claim everything, or its one guarantee — *the answer must not already appear in its own
   row* — cannot be met by this book's tables. One measurement, before the build.
2. **32 of 164 table figures are not dispatched at all.** Some are the Your-turn figure
   (correctly reserved), some are `_skip_figure`'d by rules written for Book 1's chapter 1
   roadmap convention. Census them by tag before deciding.

---

## 4. The largest hand item: 166 term icons

```
icons.js registers 333 terms across 40 families (8.3 terms per family)
Book 1 distinct terms   316  -> registered 316, tier-3 fallback 0
Book 2 distinct terms   169
   already registered     3
   NEW, need a family   166
```

At Book 1's measured density that is roughly **20 new families**. The shapes Book 2 needs are
its own and the book draws most of them: two-stage assignment (resources → pools → objects),
the relevant range, the high-low line, the learning curve, a job card, a process flow with a
department per WIP account, equivalent units, the overhead rate and its over/under bar,
absorption vs variable, service-department allocation, the split-off point, the ABC pyramid,
the value chain, a process map, the cost-of-quality four-box, the supply chain, the standard
cost card.

**Book 1 ships zero tier-3 typographic fallbacks.** Shipping Book 2 with 166 of them would be
a visible regression of a standard, not a gap — which is why this is a gated item below and
not a nicety. The full 166-term list is in `evidence/dispatch.txt`.

---

## 5. An opportunity Book 1 did not have

Book 2's Extended Example is **richer and varies by chapter** (7 to 10 `Heading 3` steps,
listed per chapter in `evidence/structure.txt`). Every one of the eighteen ends with the same
four steps:

> **Tie line** · **Terms in three languages** · **How the exam asks it** · **Self-check**

`How the exam asks it` and `Self-check` are **authored exercise material in prose, in all
eighteen chapters** — the same kind of find as Book 1's Your-turn key, which was the whole of
that depth pass. `Tie line` is a ready-made `cma_crosstie` oracle. This is Move 3 from the
Book 1 package ("open the Extended Example from the learner's own earlier answers"), which is
still open there, arriving pre-written here.

**Do not build on this before reading it.** Book 1's package concluded "Move 1 cannot be
generated" from four honest measurements and was wrong because it was looking at the drawn
figure instead of the answer key. Census these two steps' shape across all eighteen chapters
first, in a tool that writes into `evidence/`.

---

## 6. The plan

Ordered so that the thing that can invalidate the rest comes first.

### Phase 0 — the prefix becomes a parameter *(blocking, mechanical, measured)*

1. `BOOK` → a `BOOKS = {1: (path, sha), 2: (path, sha)}` registry; `--book N` on
   `cma_book`, `cma_terms`, `cma_scenes`, `cma_index` and all five gates.
2. One function, `fid(book, n)` → `""`/`"2"`, threaded through the **37 lines** in
   `evidence/coupling.txt`. Not 37 edits of a literal: 37 call sites of one function.
3. Re-key the **7 tables** to `(book, chapter)`, and **make the lookup raise on a missing
   row** instead of returning `{}`. A missing row is "wrong book", not "nothing to add".
4. Outputs gain the book: `courses/cma/book2_chNN.json`, `cma/book2/assets/figures/`.

**Teeth for phase 0** — and these are the point of the phase:
- a check that `figure_tables` returns a **positive** count for **every** chapter of **both**
  books, and fails on zero. Plant the old regex; it must fail.
- a check that Book 1's 18 chapters still extract **byte-identically** to the committed
  `book1_chNN.json`. Phase 0 touches the reader every shipped chapter depends on.
- a check that a `(book, chapter)` lookup for a row that does not exist **raises**. Plant a
  `.get` default; it must fail.

### Phase 1 — extract and lock
`--book 2 --extract --verify-book --figures --baseline` × 18 → `book2_chNN.json`,
`source-text-ch01..18.js`, the 106 drawings written out beside the pages. The provenance
chain is `.docx ↔ extract ↔ baseline ↔ site`, per chapter, as Book 1.

### Phase 2 — terms and icons
`cma_terms --book 2` → `terms-chNN.js` + `terms-fr-chNN.js` (392 rows, 100% Arabic).
Then the ~20 new icon families for the 166 new terms.
**Gate:** `Icons.census()` tier-3 count for Book 2 must be **0**, as Book 1's is.

### Phase 3 — generate the eighteen chapters
`cma_scenes --book 2 --chapter 1..18`. **Book 2's chapter 1 is generatable** — there is no
hand-authored benchmark chapter to protect here, so unlike Book 1 this book has no `BUILDABLE`
refusal. It also means Book 2 has **no 74%-built reference chapter**, so its depth floors will
start lower than Book 1's and should be compared with Book 1's *generated* chapters (6–18),
never with its chapter 1.

### Phase 4 — the 18 hand rows per table
`CASE_RULES` is transcription of the author's sentences (asserted verbatim, so a typo fails
the build). `BRIEF_ANIM`, `SUMMARY_CLOZE`, `TRAPS` are judgements about his chapters.
`EXTENDED_EXAMPLE` must carry the **varying** step lists from `evidence/structure.txt`.

### Phase 5 — the site shell
`cma/book2/index.html` + hub + per-chapter pages, and the `cma/` landing gaining a second
book. **Disposition on the 19 shared renderers** (`scene.js`, `objects.js`…`objects5.js`,
`brief.js`, `icons.js`, `site.css`, `answers-view.js`, `figure.js`, `grid.js`, `hub.js`,
`ledger.js`, `lines.js`, `progress.js`, `provenance.js`, `speech.js`, `terms-merge.js`):
**copy them into `cma/book2/assets/`, and add a gate asserting
each copy is byte-identical to Book 1's.** Moving them to a shared `cma/assets/` is cleaner and
would rewrite script paths in 686 shipped Book 1 files for no learner-visible gain; copying
without the gate is how two renderers drift into two behaviours silently. The gate is the
cheap half of the clean answer.

### Phase 6 — the gates
All five on `--book 2`, including **A9** (no scene prints the figures another scene asks for)
from the very first build — it exists because that defect *shipped* in Book 1 and all four
other gates passed it. Then `cma_depth --book 2 --raise` to **measure** Book 2's floors.
**Never type a floor.** Book 1's typed floors were wrong for 8 of 18 chapters.

### Phase 7 — index and catalogue
`cma_index --book 2` derives the per-chapter exercise counts from
`gates.cma_interactive.run` rather than counting them a second way. Then `catalogue.json` and
the site landing page. Note `app.js` owns the site's badge/subtitle/load order and
`publish_site` whitelists keys — a new key is dropped silently.

---

## 7. Risks, each with the check that catches it

| # | risk | the check |
|---|---|---|
| R1 | the `2` prefix makes a pattern match zero, read as clean | positive-count assertion per chapter, both books |
| R2 | Book 1's chapter-`n` row answers for Book 2's | lookup raises on a missing `(book, n)` row |
| R3 | phase 0 regresses the 18 shipped Book 1 chapters | re-extract Book 1, require byte-identical |
| R4 | 166 terms fall to tier-3 marks | `Icons.census()` tier-3 must be 0 |
| R5 | a renderer copy drifts from Book 1's | byte-identity gate on all 19 shared files |
| R6 | an exhibit prints the answers of the exercise below it | A9, from the first build, unit = the PAGE |
| R7 | depth floors typed rather than measured | `--raise` only; a typed floor is a defect |
| R8 | `auto_fill`'s silent 0 hides a whole class of figures | census the 32 undispatched tags before the build |

---

## 8. What is **not** decided here, and needs the owner

1. **Scope.** This package plans Book 2 to Book 1's *current* standard. Books **3 and 4** exist
   in the same folder (`CMA_P1_Book3_volume_v1.0.docx`, `CMA_P1_Book4_volume_v1.0.docx`), and
   phase 0 is the work that makes them cheap. Say whether to parameterise for all four now or
   for two.
2. **The 12 label↔description tables** are still only shown in Book 1 for want of a match
   instrument. Book 2's `shares`-heavy dispatch (30) suggests it has the same shape. Building
   the 7-way `sort` once would serve both books — but it is a layout I have not seen, and
   adding it unverified is how the "five figures were answer keys" class of defect happened.
3. **Book 1 chapter 1 stays unbuildable** either way. Nothing here changes that.

---

## 9. How to check this package

`python check_package.py` — every claim above that is a number is re-derived from the book and
the toolchain, and `--teeth` plants a defect against each check and requires it to fail.
Evidence is in `evidence/`, written by the tools in `tools/`, **inside this package** — the
previous package's `figures_asked.py` printed its table to a session scratchpad and shipped six
lines of evidence for a headline number, which is how a package comes to assert something it
cannot show.
