# Build notes — shipping CMA Part 1 Book 2, 2026-11-07

Running record of what was done, what was found, and what is owed. Written as the build goes, so
the delivered package is assembled from evidence rather than recollection.

Owner decisions taken as given at the start (from the ship plan's §8, answered "as per your
recommendations"): **parameterise for all four volumes**; **Phase 8 may edit Book 1 and the site
root**; **the 12 label↔description tables stay *shown*** — no unverified 7-way `sort` layout.

---

## Phase 0 — the toolchain takes a book number  ✅

`gates/cma_volume.py` — **10 checks, 10 teeth, all biting.** Evidence `evidence/phase0_gate.txt`.

New module `tools/cma_vol.py` is the only place a book number lives: paths, sha256s, output
names, site directories, id patterns, the per-volume tables and the part structure.

**The headline check is V9:** all 18 of Book 1's chapters re-extract **byte-identically** after
the edits. Phase 0 changed the reader every one of the 686 shipped files descends from, so this
is the check that says the pass cost Book 1 nothing.

### What measurement changed about the plan

| the plan assumed | measured |
|---|---|
| one `fid(book)` prefix threads the 37 id sites | figures prefix (`F07`→`F207`) but **cases also widen**: Book 1 writes `C7-1`, Book 2 writes `C207-1`. A prefix derived from the figure rule would have produced `C27-` and matched nothing. |
| — | **section** headings are bare (`7.1`) in all four volumes, so four of the 37 sites needed no change at all |
| `book` threaded through the generator | the extracted chapter already records its own `.docx` sha256, so `V.book_of(d)` **derives** the volume from the data being built — it cannot disagree with it |

### Three defects found by parameterising, none of them in the plan

1. **`CHAPTER_ID` is the localStorage prefix.** Both books are served from one origin. Book 2
   shipping `ch07` would have shown a learner their *Book 1* chapter 7 progress, scored it
   against the wrong exercises, and had "Reset my progress" wipe both. Book 2 on gets
   `b2ch07`; Book 1 keeps the bare `chNN` deliberately, because changing it would silently
   reset every existing learner.
2. **Book 1's hub names the wrong part of the book on 13 of its 18 chapters.** The part line was
   the hardcoded string `"Part I · Foundations and the four financial statements"`, printed on
   every chapter; chapters 6–18 are in Parts II, III and IV. `V.PARTS` now records all four
   volumes' part structure, read out of each book's own contents page, and V10 requires every
   volume's parts to tile chapters 1..18 exactly once.
3. **Two caches keyed by chapter alone.** `numbered_sections` and `bridge_sections` cached
   `(chapter) → answer` and loaded the book themselves, so building Book 1 then Book 2 in one
   process returned Book 1's section count for Book 2 — and `order_of()` turns that count into
   the page list, so the wrong count ships a chapter short or raises on a page never built.

### Two bugs the static checks could not see

The undefined-name pass (symtable) proved no function uses a name nothing gives it. It cannot
see a call with the right number of arguments in the wrong **order** — `write(a.chapter, ...)`
against `def write(book, n, ...)` is valid Python and silently builds the wrong volume. A second
audit over the AST, listing the first argument of every call to a function whose first parameter
is `book`, found:

* `cma_terms.main`: `write(a.chapter, ...)` — passing the chapter as the book.
* `cma_scenes`: `collect(n)` and `gloss_for(n, en)` — same shape, two more sites.

Both fixed. The audit is `argaudit.py` and its output is the check.

---

## Phase 1 — extract and lock  ✅

`tools/cma_extract_all.py --book 2`. Evidence `evidence/phase1_extract.txt`.

**18 of 18 chapters OK.** 6,470 blocks, 170 sections, 253 captioned figures, **106 drawings
written**, 392 term rows, 92,264 baseline words. Every chapter verified verbatim against the
`.docx` after extraction, and every image resolved to a figure tag (an untagged image is a file
the site can never ask for, so the tool treats one as a failure).

**106 drawn figures** is the number the 2026-11-06 analysis package measured independently from
the `.docx`. Two different tools, two different days, same number.

---

## Phase 2 — terms, and the 166 icons  ✅

`gates/cma_icons.py` — **6 checks, 6 teeth, all biting.** Evidence `evidence/phase2_icons.txt`.

* **392 term rows, 100% Arabic, 100% French.** 392 is again the analysis package's own figure.
* **25 new icon families, 166 terms registered, 0 typographic fallbacks.** Book 1 ships zero
  tier-3 marks and that zero is a standard, so Book 2 meets it rather than regressing it.
  icons.js 54,308 → 93,097 bytes, still one shared renderer: no Book 1 term is re-registered,
  and I6 measures that every run (316 Book 1 terms, 0 unregistered, 0 tier-3).
* The check worth having is **I4**: a registration naming a part its family's drawing cannot
  light renders the family with *nothing* lit — which looks like a deliberate overview mark and
  is a dead registration. I4 reads the drawing and requires every registered part to be one it
  actually lights. 0 dead.
* The pyramid's unit level is drawn but registered to **nothing**: no term in Book 1 or Book 2
  names it, and inventing "unit-level cost" to fill the gap would be this file inventing
  vocabulary the author never wrote. I removed it after catching myself doing exactly that.

### The gloss rule was Book 1's prose, not the author's

Two chapters reported **0 glosses**, and a zero is not a result. The rule required the defining
verb to be `is` or `are`. Book 2 is cost accounting and the same author writes *"Continuous
improvement **means** improving processes in small steps"*, *"Raw materials inventory **holds**
materials not yet used"*, *"Internal failure costs **arise** from defects found before the
product reaches the customer"*. Every one a definition; every one rejected.

`DEFINING_VERBS` is now a **closed, listed** set measured over all 36 chapters of both volumes —
closed because the same measurement also turned up *"Variable costing **has** another benefit"*
and *"Variable cost **per** hour is flat"*, and a loose search here is worse than none.

Measured against the old rule on **Book 1**, which is shipped:

| | |
|---|---|
| unchanged | 453 |
| changed | **3, all improvements** — Book 1's gloss for "lease" was defining *lease term* |
| lost | **3**, and none of the three defines its term |
| newly gained | 39 |

Book 2: **168 of 392 glossed (43%)**, no chapter at zero.

**OWED TO PHASE 8:** Book 1's generated term banks on disk are now stale against the tool by 3
changed + 39 gained glosses. They are to be regenerated with the Book 1 repairs, under one gate
run, not mid-flight here.

---

## Phase 3 — the eighteen chapters generate  ✅

`tools/cma_scenes --book 2 --chapter 1..18`. Evidence `evidence/phase3_generate.txt`.

**18 of 18, no dispatcher error. 242 pages, 1,073 scenes** (Book 1 ships 238 pages). The page
count is exactly 116 section pages + 126 chapter chrome, which is what the measured section
counts predict.

Book 2 chapter 1 is generated, where Book 1's is refused. That is not a difference between the
chapters — `BUILDABLE` is now per volume, and Book 1's refusal is about *that* chapter's history:
its seven section files were authored before the generator existed and are the only copy of that
work.

### The guard earned its place on the first run

`V.rows` refused to serve Book 1's rows for Book 2 five times, by name, and the fifth was the one
worth having. `EXTRA_BY_CHAPTER` — the per-section scene builders — was a dict **inside
`build()`** keyed by chapter alone, so Book 2 chapters 2 to 5 were handed Book 1's hand-written
builders. The run died on

```
sections_order_scene first: not in chapter 'Current assets come first, from cash down to ...'
```

which is `_verbatim` doing its job. Unguarded, the balance-sheet band order, the income
waterfall, the treasury-stock entry and the cash-flow waterfall would have been built into four
of Book 2's cost-accounting chapters, quoting sentences from another book.

### Four more defects found by generating

| | |
|---|---|
| `"Answer: 10.50."` | the number pattern is greedy and swallowed the full stop. Book 1's answers are whole currency amounts and `float("480000.")` is legal, so it never showed; Book 2's are rates and hours, and `float("10.50.")` raised on four chapters. |
| `V.rows(..., default=None)` returned `{}` | My own helper: the sentinel for "no default given" **was** `None`, so a caller asking "is there an entry?" with `is not None` got an empty dict and took it for an entry. Eighteen chapters raised `KeyError: 'statement'` instead of taking their fallback. Now a private sentinel, and V6b checks it. |
| `extended_example`'s `n >= 6` | Not a rule about chapter numbers — it meant "not one of Book 1 chapters 2 to 5", the five authored before `auto_ties` existed. Read literally it refused Book 2 chapters 1 to 5, which have tie boxes of their own. |
| `{bk}` unsupplied | Added to the hub's format call and not the gate page's, so every chapter raised `KeyError: 'bk'`. |

---

## Phase 4 — the hand rows  ✅

Measured, the required rows are far fewer than the plan's 126 estimate — because three of the
five tables have a **designed fallback onto the author's own text**, and for Book 2 that fallback
is the right answer rather than a stopgap: `TRAPS` takes a chapter's own EXAM TRAP boxes,
`CASE_RULES` falls back to the sentence his answer key prints, and a page with no Brief animation
shows none.

* **54 case rules — exactly three per chapter.** Each is *quoted* from the section that teaches
  the item: `tools/cma_caserules` ranks the chapter's own sentences by overlap with the item's
  language, I chose among them **by rank**, and the tool wrote out the sentence character for
  character. Nothing was retyped, which matters because `cma_scenes` asserts every one verbatim
  and a plausible near-miss would be a sentence the author never wrote, printed as his. Three
  items had no good candidate and a targeted search found them.
* **18 summary clozes**, five phrases each cut from the chapter's own closing paragraph in
  document order, plus one distractor that is not in it. **All 18 validated on the first pass.**
* **`EXTENDED_EXAMPLE[2] = {}`** — and that is the finished state. Every Book 2 chapter closes
  its Extended Example on the author's own "Everything ties" box, so all eighteen are built from
  his arithmetic rather than from a hand-written statement.

### Book 2 needed its own Brief animations

All 44 of brief.js's drawings have **Book 1's vocabulary lettered into them** — "carrying amount"
and "market value", "trading / available-for-sale / held-to-maturity", "LIFO" and "FIFO", "FASB"
and "IASB", "parent" and "subsidiary". Naming one for a cost-accounting section would print the
wrong words on screen, and nothing would fail: a missing drawing renders as *no* drawing, which
is indistinguishable from a page deliberately given none.

So **24 new drawings** were authored — the cost line, the three inventory boxes, the overhead
rate as a fraction, the split-off point, the four-level hierarchy, the scatter and its line, the
whale curve — in the same 320x132 box with the same `bf-*` classes, no new CSS, each readable
with no animation running. `gates/cma_brief` (5 checks, 5 teeth) requires every named drawing to
exist, to belong to **this** volume, and to be used by some page; **24 drawings over 188 pages,
none missing, none foreign, none unused.**

---

## Phase 5 — the site shell and the shared renderers  ✅

`gates/cma_shared` — **6 checks, 6 teeth.** 19 renderers copied **byte-identical**; `figures/`
and `source-text.js` deliberately *not* copied (one is a volume's artwork, the other is Book 1
chapter 1's provenance lock, and copying it would widen Book 2's lock to another book's words).
S4 requires every file in Book 1's `assets/` to be accounted for, so a new shared renderer
cannot go silently missing from later volumes.

**S6 uses git as the oracle, and that was the lesson of the phase.** I had been hashing Book 1's
files before and after each change — until a run overwrote `ledger-ch18.js` with a broken
parser's output, which made "before" the damaged file and the comparison went quiet. git holds
the real baseline for all 686 files for free. It now reports **exactly three Book 1 files
modified** — `brief.js`, `icons.js`, `progress.js` — the three shared renderers Book 2 extends,
and nothing else.

### allChapters() would have shown Book 2 an empty panel

A consequence of the storage-prefix decision, and not an obvious one: `progress.js` rolled up
progress by walking every key beginning `ch`. Book 2's keys are `b2ch07`, so its hub would have
shown no progress at all — and an empty panel looks like a learner who has not started. The
prefix is now derived from `CHAPTER_ID`, which for Book 1 is `ch` and leaves its behaviour
exactly as it was.

### The ledger parser gained four line shapes, and Book 1 proved it lost none

`cma_ledger --all` was `range(6, 19)` — again "not Book 1's first five", which silently skips the
first five chapters of every other volume, and a missing `ledger-chNN.js` is not loud: it leaves
the page's ledger undefined and every figure fails to recompute. That is what the gate page was
reporting as "0 exhibits, 12 scenes".

Book 2 writes tie lines in shapes Book 1 never used, and each cost a measurement:

| the shape | what went wrong |
|---|---|
| `A - B = C x D` | expression on **both** sides; read as "result on the left" it asked the learner for $636,000, a figure the sentence hands over |
| `... = $40,000 = <prose>` | splitting on the last equals handed the parser a clause with no number |
| `($143,200 + $12,800) / 8,000` | the author's **brackets** were dropped with the words, so precedence was applied to a grouping he had settled — and the number pattern hides a trailing bracket inside the token, because it also captures a bracketed negative |
| `... minus $200,000 gives ...` | the operator list had no **word** operators, so subtraction written in English was not arithmetic at all |

The ledger and the scene parse these independently, so both now call the same helpers — a
disagreement there means the page asks for one figure and the site's own tie check holds another.

**Three tries to get the prose test right**, each caught by regenerating Book 1: "has a digit"
read the job number in `= job T-0304` as the answer; "has a money-shaped figure" stripped `= 17%`
off Book 1 chapter 18 and would have stripped `= 0.` off Book 2 chapter 4. The test is now "a
number, not an identifier". **42 tie lines read across Book 2, every chapter's Extended Example
has at least two, and all 17 Book 1 ledgers are byte-identical to HEAD.**

---

## Phase 6 — the five gates on `--book 2`

All five took **no arguments at all** before this work; each pinned `SITE` to `…/cma/book1`.
They now take `--book N`, and the gate suite launches each as its own subprocess, so the flag
reaches them exactly as `--teeth` already did.

### The gate page was asserting Book 1's conventions

Three of its own checks were spelled for one volume, and two of them failed Book 2 **for being
right**:

| the check | what it asserted |
|---|---|
| the figure census | `/F\d\d-\d\d/`, which cannot match `F207-02`. Every figure reference in Book 2 read as absent. |
| the Fnn-02 statement check | the literal `F{chapter}-02` |
| the progress namespace | `P.chapter === "ch07"` — Book 2 stores `b2ch07` **on purpose**, because both books share one origin |

Four Python call sites had the same `F\d\d-\d\d` pattern and the same silence: a search for "a
figure reference, any figure" that finds none, and finds none quietly.

### My own cloze distractors were wrong, and the provenance lock caught it

I chose them the way a teacher would — a plausible wrong answer borrowed from elsewhere in the
book, "the split-off point" offered on a chapter about cost objects. The lock forbids it: every
word the site teaches must appear in the chapter it is taught in, and "plantwide", "whale",
"separable" and "equivalent" were words their own chapters never use. **Twelve of eighteen** were
wrong this way. Each is now one of that chapter's own bridged terms, chosen so it still cannot be
mistaken for one of the five blanks.

### `if n >= 6` was withholding the dispatcher from five chapters

The largest find of the phase, and invisible without a second volume. That number never meant a
chapter number — it meant "not one of Book 1 chapters 2 to 5", the five hand-authored before the
dispatcher existed. Read literally, Book 2 chapters 1 to 5 were built with **no `auto_section`
and no "Everything ties" scene**: about 52 scenes where the rest of the volume builds 63.

Nothing failed. A chapter with fewer instruments is a thinner chapter, not a broken one, and only
the gate page's own coverage census noticed. The condition is now "nobody hand-wrote this
chapter", which is the same rule for every volume — and the reason Book 2 chapter 1 is generated
where Book 1's is refused.

### A9 found two real leaks, which is the whole reason it runs from the first build

`A1`–`A7` pass: **961 exercises reached**, 134 exempt, 0 unmarkable, 0 passing on coverage alone,
224 data files with no stranded ledger reference. Then:

> A9 2 leak(s): ch15/s15-2.js sc215-4 prints 2 of fill-05's answers (12,800, 143,200);
> ch17/s17-6.js sc217-12 prints 2 of fill-12's answers (12,000, 225,000)

Both are the author's own material in conflict with itself: a worked-example schedule asks the
reader to fill in a column, and his section check four scenes below states its own data — which
is two of the cells just asked for. Both are necessary; the section check cannot be answered
without its figures.

Book 1's instance of this came from a malformed exhibit and was fixed by refusing to build it.
These are not malformed, so the repair is a **rule** rather than two corrections, or Books 3 and
4 would rediscover it:

* `assets/objects4.js` now honours `given` on a **row**, not only on a column. Additive — no
  Book 1 row carries it, so every existing schedule renders exactly as before.
* the generator hands over any cell whose figure another scene on the same page prints, and
  keeps asking for the rest of the column. Two or more is the bar, the same as A9's: one number
  in common is ordinary, because his tables carry the inputs the exercise works from.
* `_schedule_answers` in the gate skips a handed-over cell, or A9 would report a leak the page
  has just been corrected not to have.

### The depth gate had stopped checking anything

Caught by reading it rather than by running it, and it is the plainest form of the
address-completeness failure. `FLOORS` was `{chapter: …}`; wrapping it as `{book: {chapter: …}}`
left its three ratchets testing `if n in FLOORS` — which now asks whether the chapter number is
a **book** number. True for chapter 1 and nothing else, and chapter 1 is in `UNMEASURABLE`. So
all three compared no chapter against any floor **and reported PASS**, which is worse than
reporting FAIL.

`UNMEASURABLE = (1,)` was the same mistake: a fact about Book 1 chapter 1's history read as a
fact about every chapter 1, which would have dropped Book 2 chapter 1 out of all three ratchets.

---

## Phase 8 — the landing, and what the plan got wrong about three files

`gates/cma_reach` — **4 checks, 4 teeth.** It starts where a visitor starts and follows links
until there are no new ones, because that is the only way to see this class of defect: five gates
passed Book 1 while nothing on the site linked to it.

**Measured before: 1 page reachable from the site root.** The root page itself. Measured after
the landing and its link: **245**, and Book 1 is reachable for the first time since it shipped.

### Two of the plan's three registration targets are not registries

The ship plan said to register `cma` in `catalogue.json`, `manifest.json` and `sw.js`, because
the word appears in none of them. Reading them:

* **`sw.js`** caches one thing — content-addressed blobs under `/blobs/` — and its header says
  why everything else is deliberately *not* cached: a mutable file served from cache goes stale.
  CMA belongs nowhere in it.
* **`manifest.json`** at the site root is not a site registry at all. It is a `bundle/2` lesson
  manifest for a single video, "Barada Auto Service – Garage Tour". There is nothing to register.
* **`catalogue.json`** is a registry, but of **video** courses: the player reads `c.videos` for
  every entry and counts them in the row it draws. A textbook with no videos renders as an empty
  row — visibly broken, which is worse than absent.

So reachability is a link from the root page to a real course landing, which is what the plan's
own "done when" asks for.

### Book 1's 1,078 / 1,102 drift

Both the hero figure and the OFFLINE BY DESIGN sentence now take the total from the table of rows
above them. **The page figure is gone rather than corrected**: this page loads no chapter's
`toc.js`, so nothing on it can count pages — the fourth column of each row is the *part* the
chapter belongs to, not a page count — and a number the page cannot check is the number that
drifted. It is stated where it can be derived: on the landing, from the files.

### Two more Book 1 repairs, both found only by having a second volume

* **The case page took its name from a hardcoded company.** Twelve of Book 1's seventeen
  generated case pages were headed "Case question · Barada Wholesale" — chapters 6 to 11 are set
  at Orontes, 15 at Orontes, 17 at Levant. 241 lines corrected across the book.
* **The hub named the wrong part on thirteen of eighteen chapters.** And the first repair of it
  did nothing: `part_title(book, n=None)` defaulted to the volume's *first* part, and the hub
  called it without a chapter, so every page went on printing "Part I" exactly as the literal
  had. A default that returns a plausible wrong answer is worse than the literal it replaced —
  the literal at least looked like something to check. The chapter is now required.

### S6 is now a line-level check, because a filename list was too weak

Regenerating Book 1 with the corrected generator rewrote something in nearly every one of its 238
pages. A list of permitted filenames could only say "that file was allowed to change", never "and
it changed in the way I meant". So every changed **line** must match a declared repair, with two
exceptions that are stronger rather than weaker: `brief.js` and `icons.js` are append-only, so
the rule is *nothing was removed*; `progress.js` and `index.html` were edited in place, so every
**removed** line must be one I meant to remove. Result: **258 files touched, zero unexplained
lines.**
