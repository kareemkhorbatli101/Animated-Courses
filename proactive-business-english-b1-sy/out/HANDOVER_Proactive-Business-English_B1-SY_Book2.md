# Handover — Proactive Business English · B1 · Book 2 · Syria Edition

**Status: Book 2 complete and delivered. The B1 Business level is complete.** Twenty-four units
across two books, a hundred and sixty-eight cycles, four tests, four bound volumes. **720 lexis
items, 0 QA faults across the whole tree.** Every structural figure in this document is
**measured**, not projected; where a projection was wrong it is shown struck through.

---

## 1 · What is in the box

| File | Pages | What it is |
| --- | ---: | --- |
| `PBE-B1-B2-SY_StudentsBook_BOUND.docx` | **538** | Units 13–24 + both tests + title page, in teaching order |
| `PBE-B1-B2-SY_AnswerKey_COMBINED.docx` | **327** | the twelve unit keys + both test keys + title page |
| `PBE-B1-B2-SY_Unit13..24_StudentsBook.docx` | 42·42·43·42·44·43·40·44·44·44·44·45 | the twelve units, separately |
| `PBE-B1-B2-SY_Unit13..24_AnswerKey.docx` | 24·25·24·24·27·25·25·29·27·27·28·27 | the twelve keys, separately |
| `PBE-B1-B2-SY_MidBookTest.docx` / `_Key` | **8** / **7** | after Unit 18. 60 marks, 15·15·15·15, 30 questions |
| `PBE-B1-B2-SY_EndOfBookTest.docx` / `_Key` | **12** / **7** | after Unit 24. 100 marks, 25·25·25·25, 50 questions |

**Book 1 is in the same folder** (`PBE-B1-B1-SY_*`): SB 487, AK 298, tests 8+7 and 12+8.

**Source:** `pipeline/` — one script per unit (`unitNN.js`, `akNN.js`) for all twenty-four units,
the eight test scripts (`midtest`/`midkey`/`endtest`/`endkey`, plus the `…2` set for Book 2),
`lib.js` (frozen), `bound.js`, `qa.js`, `freecheck.js`, `a2-lexis.json`, `build.sh`.

**To rebuild everything:**

```
cd pipeline && node qa.js            # whole tree: 720 items, 0 faults
./build.sh bound                     # Book 1 bound volumes
PE_BOOK=2 ./build.sh bound           # Book 2 bound volumes
```

---

## 2 · The spine, and what each unit is actually for

**Book 2 is the export book.** Ms Maysa Tannous, a buyer in Beirut, asks for a trial consignment
on 6 January; **Lina Barakat starts as a trainee on 2 January**; and every document in the book is
written for somebody who cannot telephone the warehouse. The hundred-carton order comes on
**26 March** and is marked at night, because the stencil press runs on the generator, which runs
from one until four.

| Unit | Grammar / function | Lesson B genre | ⚠ What it is really teaching |
| ---: | --- | --- | --- |
| 13 | plans, intentions, arrangements | a programme page | **how you will know** — an assurance is not evidence |
| 14 | forecasts and probability | a forecast board | ⚠ **what your last forecast was wrong by** |
| 15 | post-mortem, blame-free | a five-part post-mortem | the control that was written and still failed |
| 16 | comparing and evaluating | a landed-cost comparison | **cheaper to buy and dearer to own** |
| 17 | the way it used to be done | a change note | ⚠ **no change note has ever said what to get rid of** |
| 18 | verb patterns | a commitments register | **what they heard** — your verb moved one rung up |
| 19 | complaints and claims | a counted fault; an accept-and-limit reply | **the order decides which letter they think they got** |
| 20 | instructions and specifications | a bench page, one side of one sheet | ⚠ **written for somebody alone, at night, who cannot ask** |
| 21 | negotiating and compromise | a two-column page; the agreed terms | **position against interest; one non-negotiable** |
| 22 | interviews and appraisals | a self-appraisal a stranger could check | ⚠ **a number, a date, or a place to look** |
| 23 | trade news | a one-page market note | **confirmed · claimed · not known**, never mixed |
| 24 | looking ahead to B2 | the year in one page; the sealed letter | ⚠ **one document, one reader, one date** |

**The documents of somebody who runs the administration of an exporter** — a programme page, a
forecast board, a post-mortem, a landed-cost comparison, a change note, a commitments register, a
counted fault and a claim, a bench page, a negotiation page and agreed terms, a self-appraisal, a
market note, a plan for a year — are each modelled in full in a Lesson B stage 5 and written by
the learner in stage 6.

### ⚠ The four things that run through all twelve units

These are what Book 2 is for, and they are what the End-of-Book Test marks:

1. **Write for the reader who is not in the building.** Ms Tannous cannot telephone the warehouse;
   the night man cannot ask anybody; the stranger with an hour cannot ask you what you meant.
2. **Say what is not known.** 14's *what my last forecast was wrong by*; 20's *the fault that is in
   no step*; 22's *what I have not counted*; 23's third sentence; 24's *unknown* in a cost column.
3. **Put the number where the work is.** The line count on the bench page, the count on the market
   note, the tally in the front of the file, *note 4 of 9*. **A control kept away from the work is a
   second thing to remember, and it will be forgotten.**
4. **Ask the person who does the work — and then ask who has never been asked.** ⚠ **Six of the
   twelve mediations in this book are the same finding**: 16.7's two costs in no quotation, 19.7's
   claimant who cannot send an invoice, 20.7's originating office, 21.7's line that settled it,
   22.7's three lines nobody can fail, 23.7's answers nobody wrote back.

---

## 3 · Open — nothing

Every question raised in planning is closed. The examination anchor (**B1 Business Preliminary**,
four skills averaged, hence four printed papers at 25·25·25·25) was verified by web search at
Book 1 and is unchanged. Unit 24 carries **both** closing blocks — end of Book 2 and end of B1 —
and the second one points explicitly at B2.

---

## 4 · Structural facts, all measured

- **Per-unit house figures** (asserted by `qa.js`), unchanged across all twenty-four units:
  `stage(` 89 · `lesson(` 14 · `dlg(` 14 · Language box 7 · Writer's box 7 · Homework 7 ·
  `'Write with help` 7 · `'Write freely` 7 · `lines(` 8 · `pb()` 8.
- ⚠ **The closing unit keeps the house figure of 8.** Unit 24's two end-of-level boxes run on from
  the "I can…" box with no extra break and no `h1`. **The bound volume's page arithmetic depends
  on it**, and this is the third book in the series in which it has.
- **Bands:** SB **40–45**, AK **24–29**.
  - ⚠ **The SB projection was right.** Book 1's handover projected 40–45 and every unit of Book 2
    measured inside it. **This is the first page projection in the series that has not been wrong**
    — and the reason is that it was built from a measured band one book earlier and not from
    another level's structure.
  - ⚠ **The AK projection was wrong, at Unit 20.** Projected 24–27; Unit 20 measured **30**. One
    genuinely duplicative sample (a second full bench page, printed twice) was cut and the unit
    moved to **29**; a second trim was tested, **did not move a page**, and was reverted per the
    series rule. **The band follows the measurement.**
  - ⚠ **Unit 24 measures 45**, one page over the 40–44 the first eleven units occupied, because it
    carries two closing blocks where Book 1's Unit 12 carried one. Book 1's `PLAN.md` already
    anticipated the closing unit running over; the band is written as **40–45** and Unit 24 is the
    only 45.
- ⚠ **Both bound volumes are exact.** SB: 517 unit pages + 8 + 12 + 1 title = **538**. AK: 312 +
  7 + 7 + 1 = **327**. **No block-pricing discrepancy anywhere in Book 2** — against Book 1's
  487-for-486 at the Unit 7 → Unit 8 boundary, which remains the series' only boundary-priced block.
- **Word counts.** Course: guided **"60 words or more"**, free **"140 to 180 words"**, models
  180–260. Tests follow the examination: Writing Part 1 **35 to 45 words**, Part 2 **60 to 80**.
  `qa.js` refuses A2's and Book 1's bands inside a Book 2 unit.
- **Peer review: band 3 + one move** — *name the reader you are being*, then quote the criterion,
  ask the question, stop. Full band 4 waits for B2 Business.
- **Lexis: 360 items in Book 2, 720 at B1**, 30 per unit, no repeat inside B1 and **no repeat
  against A2's 624**. A2 items return only on a declared `BACK_AT_B1` line of two or three.
- **Exam-practice rotation**, one B1 Business Preliminary Reading part per unit, chosen to lead
  with the two Reading parts Book 1 covered only once:
  U13 **P3** · U14 **P7** · U15 **P1** · U16 **P2** · U17 **P4** · U18 **P5** ·
  U19 **P6** · U20 **P3** · U21 **P7** · U22 **P1** · U23 **P2** · U24 **P4**.
  Writing alternates Part 1 / Part 2 from U13, so U24 ends on Part 2.

---

## 5 · Tests

| | Marks | Split | Questions | Pages |
| --- | ---: | --- | ---: | ---: |
| Mid-Book (after Unit 18) | 60 | 15 · 15 · 15 · 15 | 30 | 8 + 7 |
| End-of-Book (after Unit 24) | 100 | 25 · 25 · 25 · 25 | 50 | 12 + 7 |

**Numbering:** Reading takes the first block, Listening the second, Writing's tasks are unnumbered,
Speaking is unnumbered. ⚠ **Gap-answer tables in the keys carry the question numbers in the
headings, not in the cells**, or `qa.js` cannot see them. **This cost one rebuild in `endkey2.js`**,
exactly as the Book 1 handover warned it would.

**Declared test-only emphases**, printed on each candidate's own paper:

- Mid-Book: ⚠ **the strength of a verb** (Unit 18), and ⚠ **a date for the next contact rather
  than for the thing** (Unit 13).
- End-of-Book: ⚠ **what is not known** (Units 14, 20, 22, 23 — Writing Part 1), ⚠ **the exception
  written inside your own claim** (Unit 22 — Writing Part 2), and ⚠ **one ask, one date** (Unit 19
  of a claim, Unit 24 of a hope).

⚠ **The End-of-Book key ends with the only instruction in either test for something after the
test**: Unit 24.7's one document, one reader, one date in the next fortnight, on a list the teacher
keeps — **and ask in October.** The Speaking paper gives it two marks, and the key is explicit that
a reader who would be *pleased* earns one of the two while a reader who would *telephone if it did
not come* earns both.

---

## 6 · The harness

`pipeline/qa.js` runs every check over the whole tree: `node qa.js`. ⚠ **Run the tree, not the
unit** — a per-unit pass cannot see intra-level lexis collisions at all.

**What `freecheck.js` was worth in Book 2.** Every one of the twelve lexis lists was cleared before
the unit existed, and it caught **six collisions in advance**: *contingency* (A2 u15) → **slack**;
*sensitivity* (B1 u08) → **a sensitivity test**; *subject to* (A2 u24) → **on current information**;
*to concede* (B1 u12) → **to acknowledge**; *on balance* (B1 u12) → **taking it all together**;
*a concession* (B1 u12) → **a written concession**; *to reopen* (B1 u12) → **to reopen a settled
point**; *hearsay* (B1 u02) → **a second-hand report**. ⚠ **No unit in Book 2 needed a post-hoc
substitution.** Book 1's Unit 7 cost seven, found after the fact.

**One class of fault `freecheck.js` does not catch**, found by hand in Unit 22: an item that
differs from an A2 item only by its article — *a trainee* against A2's *trainee*, *a line manager*
against *line manager*, *a duty* against *duty*. The matcher is exact-string, so these cleared.
⚠ **Three items were moved out of `LEXIS` and the A2 forms were put on the `BACK_AT_B1` line
instead**, which is where they belonged. **Worth a one-line note for whoever writes B2: skim the
cleared list for bare-noun forms of your own candidates before you use it.**

**What the canon check caught in Book 2:** six mentions of Baghdad Street or the generator written
without their A2 facts (Units 13, 14, 15, 18, 21, 24), each fixed by naming the fact in place
rather than by deleting the mention. **The cast check** accepted three new institutional voices on
declaration: `Lina`, `Buyer` (U16), `Officer` (U20).

**Two authoring faults worth recording**, both caught by `node -e "require(…)"` before any build:
a heredoc that broke a string literal across two lines in `ak24.js`, and a `table(…)` call closed
with `)` instead of `])` in `endkey2.js`. ⚠ **Load every script before building it**; the loader
error names the line and the build does not.

---

## 7 · Cast, and the A2 canon B1 does not contradict

**Cast as at the end of B1:** Nour Mansour (26, administration coordinator, both sites) ·
Mr Khaled Ayoub (50) · Nadia Sayegh (35) · Bassel Nassif (31) · Abu Yasser / Yasser Khalil (54) ·
Hala Mourad (29) · Fadi Saeed (33) · Mr Ziad Attar (44, auditor, joined B1 U5) ·
**Lina Barakat** (22, trainee from 2 January, **confirmed in post 1 July**) ·
**Ms Maysa Tannous** (buyer, Beirut — Book 2's export spine) · Mr Fouad Tarabishi · Ms Dima Shamsi ·
Mr Samir Haddad · Mr Haffar · Mr Jaber · Ms Rana Dagher.

**Institutional voices declared at B1:** `Agent` (U1), `Lina`, `Buyer` (U16), `Officer` (U20).

**A2 canon, which B1 does not contradict:** Baghdad Street opened **8 June**. Homs 2019–2021,
**Mr Ayoub's decision both times**. The Saturday trial got **nineteen of thirty** and stopped
19 July. The gate sheet is counted against the order and **signed by name**. A price holds
**fourteen days**. The **generator runs one until four**. Ghouta was Tuesdays and Thursdays — ⚠ **and
moves to Mondays and Wednesdays on 1 March in Unit 17**, which is the first change B1 makes to the
A2 canon and is written as a dated change note rather than a contradiction. Founded **1998** in
Bab Touma; moved to Mezzeh 2011.

**New Book 2 facts the next level must not contradict:** the Tannous agreed terms of **28 April**
run twelve months from **1 May** at a held price, six lines, the sixth with no price against it
(the date list, by the 20th of each month). The **nine scrap cartons of January** are in the fourth
store. The bench page is at **revision 2 of 1 April**, issued by the administration office, with
*tell me what is wrong with it* in the heading. Two night markers start **1 October**. The plater's
**twelve per cent from 1 March** is in a circular of 22 January and an invoice of 4 March.

---

## 8 · Next: B2 Business

**Where B2 begins.** 23.6 and 21.7 left off at an opinion with a name on it and an agreement whose
reason is in one person's head. **B2 is the level where the documents are the ones other people are
held to**: a position argued upward in writing, answering for decisions taken by people who have
left, and the gap Nour names in 24.4 — *I can write a letter that disagrees with a customer; I
cannot write one that disagrees with an auditor* — **which is a B2 skill named precisely at the end
of B1 and is the single most useful thing to build the first B2 unit on.**

**Carried forward, measured:**

- Pages: **start from SB 40–45 and AK 24–29 and measure Unit 1 before writing Unit 2.** ⚠ The one
  projection in this series that held was the one built from a measured band one book earlier.
- Page breaks: 8 in a unit, 7 in a key. Measure anyway.
- Word counts: B2 should step up from 60 / 140–180. **Set it, print it, and let `qa.js` refuse the
  B1 bands** — the mechanism is already in `checkWordBands`.
- Peer review: **band 4** — the first level that may rewrite a sentence for the writer.
- Lexis: 30 a unit, no repeat against B1's 720 or A2's 624. `freecheck.js` reads both already;
  **add a bare-noun skim** (see §6).
- Cast: Lina is confirmed in post and is a reader of documents, not only a writer of them.

**The first thing to do.** Build Unit 1's pair, measure both, and write the measured band into
`PLAN.md` before Unit 2 exists. ⚠ **That step has caught a projection error every time it has been
taken, and the one time it did not, it was because a previous book had already taken it.**

---

_Author: Mo (Mohamad Khorbatli). Built on branch `claude/intl-journalists-book-adapt-9no27e`._
