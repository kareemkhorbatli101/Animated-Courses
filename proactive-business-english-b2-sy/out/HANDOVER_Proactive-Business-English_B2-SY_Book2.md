# Handover — Proactive Business English · B2 · Book 2 · Syria Edition

**Status: Book 2 complete and delivered. The B2 level is finished.** Twelve units, eighty-four
cycles, two tests, two bound volumes. **384 lexis items, 96 collocations, 0 QA faults** in this
book; **768 and 192 across the level, with no repeat anywhere in it and none against the 1,344
declared at A2 and B1.** Every structural figure in this document is **measured**, not projected;
where a projection was wrong it is shown struck through.

---

## 1 · What is in the box

| File | Pages | What it is |
| --- | ---: | --- |
| `PBE-B2-B2-SY_StudentsBook_BOUND.docx` | **559** | Units 13–24 + both tests + title page, in teaching order |
| `PBE-B2-B2-SY_AnswerKey_COMBINED.docx` | **377** | the twelve unit keys + both test keys + title page |
| `PBE-B2-B2-SY_Unit13..24_StudentsBook.docx` | 45·45·44·44·44·45·45·45·45·45·45·46 | the twelve units, separately |
| `PBE-B2-B2-SY_Unit13..24_AnswerKey.docx` | 29·30·29·31·29·31·29·30·30·30·31·30 | the twelve keys, separately |
| `PBE-B2-B2-SY_MidBookTest.docx` / `_Key` | **7** / **8** | after Unit 18. 60 marks, 15·15·15·15, 30 questions |
| `PBE-B2-B2-SY_EndOfBookTest.docx` / `_Key` | **13** / **9** | after Unit 24. 100 marks, 25·25·25·25, 50 questions |
| `PBE-B2-B2-SY_PLAN.md` | — | the plan of record for the whole level, with every phase measurement written into it |

**Source:** `pipeline/` — one script per unit (`unitNN.js`, `akNN.js`) for all twenty-four units of
the level, the eight test scripts, `lib.js` (frozen), `bound.js`, `qa.js`, `freecheck.js`,
`a2-lexis.json`, `b1-lexis.json`, `build.sh`.

**To rebuild everything:**

```
cd pipeline && node qa.js && PE_BOOK=2 ./build.sh bound
```

⚠ **`node qa.js` must print `0 fault(s)` before a build is kept.** It currently prints
`checking 24 unit(s) and 24 key(s) -- 768 lexis item(s) and 192 collocation(s) declared; 0 fault(s)`.
⚠ **Run it over the whole tree and not over the units you have touched** — a collocation collision
is between two units and a single-unit run cannot see one.

---

## 2 · The spine, and what each unit is actually for

**Book 2 is everything Nour did not decide.** The Dallal contract was signed in Unit 12 in a form
she argued for and lost on one clause; Book 2 opens in July with her inside it. Over eighteen months
she audits twenty-two clauses, rejects forty cartons on a word, answers a credit committee, declines
an export enquiry in the customer's own interest, summarises a file of two hundred and fourteen
pages to three paragraphs, carries an arbitration to a settlement at eleven million, inherits the
office on 1 July, reopens Homs, writes four annual reviews and withdraws three assessments of
eleven, costs a Ministry notice in four figures, and signs a trade submission in part only. ⚠ **The
level's premise is one sentence: at B2 the reader can ask a question and can refuse, and does not
have to say why.**

| Unit | Lesson B genre | ⚠ What it is really teaching |
| ---: | --- | --- |
| 13 *The Contract You Have to Live Inside* | an obligations register drawn from a signed contract | ⚠ **what a clause OBLIGES, not what it says** — and a clause written as an act with an owner and a date |
| 14 *Acceptance, Rejection and the Measurable Standard* | a rejection notice that will hold | **a standard two reasonable people would apply the same way**, and *deemed accepted* in both directions |
| 15 *Writing to Somebody Who Has Already Said No* | a second application after a refusal | ⚠ **concede the no completely, then say what has changed** — and the narrower request |
| 16 *The Argument You Do Not Hold* | the case for a decision the writer opposed | ⚠ **the strongest honest form of a position you do not hold**, read to the person who holds it |
| 17 *Summarising at Length* | a three-paragraph summary of a 214-page file | **organise by question, not by document**; and ⚠ **quote long enough that the other side would quote it the same way** |
| 18 *The Long Read, and the Document That Outlives You* | a file note for a reader in 2032 | ⚠ **the REASON, not the decision** — and the option that was considered and rejected, with its re-examination condition |
| 19 *Arbitration, and the Room Where Nobody Is on Your Side* | a without-prejudice letter and a witness statement | ⚠ **say what you are NOT alleging before the allegation you are making**, and put the document that hurts you in yourself |
| 20 *Succession, and the Week After You Have Gone* | a handover document of judgements rather than tasks | **the judgement you would not defend again**, and ⚠ **the relationship that does not transfer** |
| 21 *Proposals, and the Option You Argue Against* | a proposal with a real option set | ⚠ **price the do-nothing option**, and ⚠ **state the option you recommend against in a form its holder would recognise, with a figure** |
| 22 *Reviews, and the Document That Must Not Agree* | four annual reviews, and a paragraph signed against a decision | **work, not the person**; count your instances; and ⚠ **let two documents answering different questions stand in tension** |
| 23 *Trade and Policy, and the Rule Nobody Wrote for You* | a what-it-requires note, a letter to an authority, a costing page | ⚠ **from when does the clock run** · ⚠ **the cost of complying LATE** · ⚠ **a falsifying condition with a named watcher and a stated day** |
| 24 *Opening the Letters* | the sealed B1 letter opened; the letter to the C1 self | ⚠ **claim or hope** · the gap that closed WITH its document · ⚠ **the gap that did not, and whether the exercise was ever done** |

### ⚠ The four things that run through all twelve units

These are what Book 2 is for, and they are what the End-of-Book Test marks:

1. ⚠ **A document is written for what a reader will DO with it, and the reader may refuse.**
   Units 15, 16, 19, 23 — the committee that said no, the argument you do not hold, the room where
   nobody is on your side, the body that can decide.
2. ⚠ **A claim carries its own warrant, and names what it does not cover.** Units 17, 19, 22 — the
   half-quoted sentence, *we do not allege*, the instance under the judgement.
3. ⚠ **A figure, a date and a name are checkable; a disposition is not, and cannot be acted on by
   Monday.** Units 13, 14, 20, 22, 23 — the clause that obliges nobody, the measurable standard,
   the handover, the remedy, the named watcher.
4. ⚠ **What outlives you is one document, and it will be read by somebody who cannot ask.**
   Units 18, 21, 24 — the reader in five years, the rejected option, and the envelope.

### ⚠ As built, against the plan — read this before you read Part Four of the plan

**The plan's Part Four tables describe the units as planned. The built books are the record, and
this section is the reconciliation.** This is the same convention Book 1's handover used, for the
same reason, and the departures here are larger.

**Four unit titles changed and the units are the same units under better names:** Unit 19
*Arbitration, Evidence and Your Own Documents* → *…and the Room Where Nobody Is on Your Side*;
Unit 20 *Succession: Handing Over an Office* → *…and the Week After You Have Gone*; Unit 21
*Proposals* → *…and the Option You Argue Against*; Unit 22 *Reviews, Appraisals and People Who
Report to You* → *…and the Document That Must Not Agree*.

**Eleven of the twelve units keep the plan's seven functions with their emphases refined.** The
cycle titles in the built books are shorter and name the move rather than the topic — *A clause as a
thing somebody does on a date* for the plan's *a clause as an act*, and so on — and no planned
function was dropped in those eleven.

⚠ **Unit 23 is the one real departure and it must not be discovered by somebody reading the plan.**
The plan gave it seven functions built round a four-grade epistemic scheme — *evidenced · reported ·
inferred · unknown* — and a signed forecast with a stated range. **The built unit has the plan's
23.1 (reading a regulation) and 23.4 (the falsifying condition with a watcher) unchanged, and
replaces the other five** with: asking the body that can decide for what it can grant · costing a
requirement in four figures including the cost of complying late · planning against a change you
cannot influence · and common cause with a competitor, with the difference marked.

**Where the dropped material actually lives, checked rather than asserted:**

| Planned | Where its substance is in the delivered level |
| --- | --- |
| the four grades, as a named scheme | ⚠ **nowhere, as a label.** Its working parts are in Book 1 Unit 7.6 (*the link you cannot evidence*, with the three words *which I infer*), Unit 23.1 (*what the notice does NOT say*, marked as absent and never as permitted), Unit 23.3 (*the item I am least sure of*, named and taken at the low end) and Unit 21.4 (*assumed at nil and said so*) |
| a forecast you put your name to, with its range | **Book 1 Units 4 and 8** — the numbered assumption, the stated basis, the round number and the spurious precision, *the figure the reader will check* — and Book 2 Unit 13's quarterly forecast as a performed obligation |

⚠ **The honest statement is that the four grades are absent as an apparatus and present as four
separate habits, and that this was a loss.** A single named scheme is easier to teach and easier to
examine than four habits in four units. **It is recorded here rather than quietly absorbed, and if
the level is revised it is the first thing to put back** — as 23.2, displacing *asking a body that
can decide*, which is the cycle of the five that Unit 23.2's letter to the Directorate would
survive losing.

---

## 3 · Structural facts, all measured

- **Per-unit house figures** (asserted by `qa.js`, exact on all twelve units, and on all
  twenty-four of the level): `stage(` **89** · `lesson(` **14** · `dlg(` **14** · Language box **7** ·
  Writer's box **7** · Homework **7** · `'Write with help` **7** · `'Write freely` **7** ·
  `lines(` **8** · `pb()` **8**.
- ⚠ **Unit 24 carries the end-of-level block and still has 8 `pb()`**, because the block takes an
  `sp()` and no second `h1`. **The bound volume's arithmetic depends on it and it has now held in
  four consecutive books.**
- **The cycle:** 13 stages, 90 minutes, **7 cycles a unit**. Cycle 7 is **Review & Mediate** at
  **10 stages** (quiz · 2 · 3 · 3R · 4 · 4R mediation · 5 exam practice · 6 · 6P · 7), with the `✓`
  unit check sitting **outside** any cycle banner.
- ⚠ **Cycle markers must read `// ======= CYCLE N.7 =======` exactly.** `qa.js`'s `cycles()` splits
  on `/\/\/ =+ ?(?:CYCLE )?(\d+\.\d+) ?=+/`, so a marker with a suffix — `CYCLE 18.7 — REVIEW` —
  folds cycle 7 into cycle 6's region and every per-cycle check then passes on the wrong text.
  **It cost one rebuild in this book and it is silent.**
- **Bands: SB 44–51, AK 29–35** as recorded in the plan. **Measured: 44–46 and 29–31.** ⚠ **Nothing
  was adjusted** — a band is widened on a measurement outside it and never narrowed on measurements
  inside it. **The spread across twelve units is 2 pages of Student's Book and 2 of key**, against
  1 and 2 in Book 1. ⚠ **The Phase 1 prediction that Unit 24 would sit at the top of the band was
  right, and it was reached without adding anything to get there.**
- ⚠ **Both bound volumes are exact on the arithmetic, and Book 1's handover said to test this rather
  than assume it.** **538 + 7 + 13 + 1 = 559**, and the volume is 559. **359 + 8 + 9 + 1 = 377**,
  and the volume is 377. ⚠ **No page is lost at any of the 28 file boundaries in either volume** —
  so across both books of this level, 54 files, the renderer has cost nothing at a boundary. **The
  standing counter-example remains B1 Book 1's Unit 7 closing `box()`, `box()` being `cantSplit`.**
- **Word counts.** Course: guided **"80 words or more"**, free **"200 to 240 words"**. ⚠ **The tests
  use the examination's own lengths — 40 to 50 and 120 to 140 — and both papers print the course's
  figures next to them with the difference named as the examination's and not as a reprieve.**
- **Peer review: band 4 plus the Book 2 clause** — *name the criterion, **copy the line you are
  marking**, say what you found, **and say what your correction would cost the writer**.* The
  harness asserts the literal `would cost the writer` once per unit.
- **Lexis: 384 items and 96 collocations in this book**, 32 + 8 per unit, **768 and 192 across the
  level.** No repeat inside B2 and ⚠ **no repeat against the 1,344 declared at A2 and B1**, which
  `a2-lexis.json` and `b1-lexis.json` hold. **No word-formation set**, by decision: Vantage Reading
  Part 4 tests collocation and the examination has no word-formation part.
- **Exam-practice rotation**, asserted by `checkRotation`, which checks **both** parts named in
  cycle 7. **Reading:** U13 **4** · U14 **2** · U15 **5** · U16 **1** · U17 **2** · U18 **3** ·
  U19 **4** · U20 **5** · U21 **1** · U22 **5** · U23 **2** · U24 **4**. Across the level each of
  the five Vantage parts appears **five times** except Part 3, which appears four. **Writing:**
  Part 1 in the odd units and Part 2 in the even, with ⚠ **Units 20 and 21 exchanged as the plan
  declared**, so Unit 21's proposal falls on the 120-to-140-word task where it belongs.
- ⚠ **`BACK_AT_B2` must name three items actually declared at A2 or B1**, and the harness checks it
  against the two pool files. **Unit 24's three are `a gap · a certificate · a target date`, all
  three from B1 Unit 24** — the unit in which the sealed letter was written.

---

## 4 · The examination anchor, looked up and not recalled

**B2 Business Vantage.** Reading is one hour, five parts, **45 questions**: Part 1 matching **7** ·
Part 2 sentence insertion **5** · Part 3 multiple choice **6** (A–D) · Part 4 multiple-choice cloze
**15** · Part 5 error correction **12**. Writing Part 1 is **40–50 words / 10 marks**, Part 2
**120–140 words / 20 marks**. The four skills are weighted equally and ⚠ **the overall result is
their average**, which is why both papers print four separately-marked papers at 25 each and the
keys tell the candidate to work out the average before looking at a total.

**Part 5 conventions, as the examination has them and as both tests follow them:** a correct line is
answered **CORRECT**; the extra word must be **grammatically wrong** and not merely unnecessary;
answers are written in **capitals**; and ⚠ **the paper never says how many lines are faulty**, so a
candidate who has found one error has not finished and one who has found five has invented two.

⚠ **An examination ordinal must be computed from the rotation and not recalled.** This book produced
the fault twice. *"The third time in the level"* was written for Reading Part 3 at Unit 18 when it
is the **fourth** (Units 3, 7, 12, 18); and *"the odd units take Part 1"* was written without the
declared Unit 20/21 exchange. **Both were corrected by computing the rotation. Both would have
printed.**

---

## 5 · Tests

| | Marks | Split | Questions | Pages |
| --- | ---: | --- | ---: | ---: |
| Mid-Book (after Unit 18) | 60 | 15 · 15 · 15 · 15 | 30 | **7 + 8** |
| End-of-Book (after Unit 24) | 100 | 25 · 25 · 25 · 25 | 50 | **13 + 9** |

**Mid-Book shape:** Reading 3 parts of 5 (sentence insertion · multiple-choice cloze · matching) —
the other two Vantage parts are in the End-of-Book Test; Writing Part 1 at 5 and Part 2 at 10, the
Part 2 genre a **report**; Listening 3 parts of 5 with the scripts printed in the paper; Speaking
4 + 6 + 5.

**End-of-Book shape:** Reading **five parts of five**, all five Vantage parts; Writing Part 1 at 10
and Part 2 at 15, the Part 2 genre a **proposal**, so both Part 2 genres are practised under timed
conditions across the two tests; Listening note completion at 9 then two multiple-choice sets of 8,
**scripts in the key**; Speaking 5 + 10 + 10.

**Declared test-only emphases.** The series rule is that a test may mark one thing the units do not,
if it is declared on the candidate's own paper.

- **Mid-Book:** ⚠ **the absence named inside the document, *and whose it is*** (17.4, narrowed from
  the plan's 17.4 + 19.4 because Unit 19 is after this paper) · **a recommendation written as an act
  with an owner AND a date** (13.3, all-or-nothing).
- **End-of-Book:** ⚠ **the reason and not only the decision** (18.4), marked **across both Writing
  tasks** at half the point it attaches to · ⚠ **the option you recommend against, with a figure**
  (21.5), marked **pass or fail** in Writing Part 2. ⚠ **The plan proposed a third — the falsifying
  condition with a watcher (23.4) — and it is dropped**, because it is a content point of the
  proposal task itself and carries two of its own marks there, and because Phase 4 established that
  three declared emphases on one page is a paper that tells the candidate what to write.

### ⚠ The test projections, and what three phases of measuring actually showed

**This is the part of the handover to read before projecting any test in this series again.**

| | comparator | its words / pages | this paper's words | projected | measured |
| --- | --- | ---: | ---: | ---: | ---: |
| Book 2 Mid-Book paper | Book 1 mid paper | 6,645 / 10 | **4,297** | ~~10~~ | **7** |
| Book 2 Mid-Book key | Book 1 mid key | 6,987 / 7 | **9,768** | ~~7~~ | **8** |
| Book 2 End-of-Book paper | Book 1 end paper | 6,758 / 13 | **7,370** | ~~14~~ | **13** |
| Book 2 End-of-Book key | Book 1 end key | 10,274 / 9 | **11,970** | ~~10~~ | **9** |

**Word counts are of the rendered documents**, taken from `word/document.xml` in the built `.docx`,
which is the only count that corresponds to a page.

⚠ **Phase 6's amendment — adjust the previous measurement by the ratio of total text — is itself
wrong, and this phase is what shows it.** It projected 14 and 10 for the two End-of-Book documents
and both came in one page under. **The naive projection it was written to replace (13 / 9, Book 1's
own measurement, unadjusted) was exactly right on both.**

**Why, measured rather than argued: words per page is not a constant and varies by a factor of 2.6
across these eight documents.**

| | words per page |
| --- | ---: |
| Book 1 mid paper | 665 |
| Book 2 mid paper | 614 |
| Book 1 end paper | 520 |
| Book 2 end paper | **567** |
| Book 1 mid key | 998 |
| Book 2 mid key | **1,221** |
| Book 1 end key | 1,142 |
| Book 2 end key | **1,330** |

**Papers run 520–665 and keys run 998–1,330**, because a paper spends page area on ruled lines,
question stems and answer boxes while a key spends it on prose and tables. ⚠ **And within every pair
the heavier document is the denser one**, which is the finding: material added to a test is denser
than that test's average page, so extra words cost less than a page's worth of average words.

**The rule as it now stands, twice amended and narrower than before:**

> **Project a test from the same book's own measurement of a document of the same TYPE — paper or
> key — and the same shape.** **Adjust only where the text differs from the comparator by more than
> about a third, and then adjust by less than the ratio implies.** ⚠ **Below about a fifth, do not
> adjust at all: page boundaries absorb it.**

**Checked against all four:** −35% → −30% pages ✓ · +40% → +14% ✓ · +9% → 0% ✓ · +17% → 0% ✓.

⚠ **And the operational conclusion, which is worth more than the rule.** **No projection in this
strand has ever been better than plus or minus one page except where it was right by luck.** **So
build and measure early, and stop spending effort on better projections** — the Phase 5 half-book
was measured six units in, which is what made the band safe, and that is the method that works.

---

## 6 · The harness, and the four gaps this book found in it

⚠ **All four are the family Phase 4 named: a check that tests the SOURCE of a document rather than
the document.** **None was found by a failure.** All four were found by reading the tooling against
its own purpose, and every fix was negative-tested before it was trusted.

1. ⚠ **`freecheck.js` was silently truncating every word list that contained an escaped
   apostrophe.** The regex was `/^const LEXIS = '([^']*)'/m`, and `[^']*` stops at the first `\'`.
   **Seven units — 09, 10, 11, 13, 14, 17, 18 — were short in the clearance pool, Unit 11 by twelve
   of its thirty-two items.** So for several units the tool was clearing a candidate list against a
   pool smaller than the book and reporting zero collisions truthfully. **Fixed to
   `/const LEXIS = '((?:[^'\\]|\\.)*)'/`, which is the form `qa.js` had always used, plus a named
   check that every unit contributes exactly 32 items.** ⚠ **Negative-tested with an item from Unit
   11's invisible tail.**
2. ⚠ **`freecheck.js` had no collocation pool at all.** It cleared the 32-item word list and
   nothing else, so a collocation collision could only be found by `qa.js` after the unit was
   written. **It was: *to source a figure*, already at Unit 03, discovered after Unit 21 was
   finished.** **A COLLOC pool was added, built the same way, with an 8-item-per-unit check.**
3. ⚠ **Both pools were last-writer-wins, and the first negative test of the new COLLOC pool did not
   fire — which is how this was found.** `set()` meant a later unit overwrote an earlier one, so
   re-checking an already-written unit compared its own list against itself. **Changed to
   first-writer-wins.** ⚠ **A test that does not fire is a finding about the test.**
4. ⚠ **`qa.js`'s teacher's-note check matched source text in a form only a single-quoted string can
   satisfy.** `/Teacher\'s note/` cannot match a note written in double quotes — which is how
   `ak18.js` writes it, deliberately, to avoid the apostrophe escaping that broke `ak14.js`.
   **Widened to `/Teacher\?'s note/`, with a comment saying that both quoting styles render
   identically and that the check matches source.**

### ⚠ Three faults the harness has a named check for, all of which still happened

- **A stray `⚠` outside a string**, `unit21.js` line 234 — the exact fault `checkLoads` exists for.
  **Found by loading every script before building it, which is the standing rule.** The whole
  pipeline was then swept and was otherwise clean.
- **Characters outside `ALLOWED`:** `§` (U+00A7) twelve times in `unit18.js`, `²` (U+00B2) seven
  times in `unit21.js`, and `è` eleven times in `unit19.js`. ⚠ **The house forms are `section 3.2`,
  *sixty square metres* spelled out, and `Dallal Freres` unaccented** — the last confirmed by
  counting the tree, 19 unaccented against 11 accented and all eleven mine.
- **Question numbering in the Mid-Book Test:** written `**(1)** ______`, where the house form is
  `**1** ______`. **The check regex is `/\*\*(\d+)\*\*|\((\d+)\)\s*_{3,}/` and the parenthesised
  bold form matches neither branch**, so twenty of thirty questions were found. ⚠ **Both tests in
  this book were verified by counting 1 to 50 out of the source after they were written.**

---

## 7 · Cast, canon, and the surname rule

**At B2:** Nour Mansour · Mr Khaled Ayoub · Nadia Sayegh · Bassel Nassif · Lina Barakat · Hala
Mourad · Fadi Saeed · Abu Yasser (Yasser Khalil) · Mr Ziad Attar · Ms Maysa Tannous · Mr Kamal
Sayegh · Mr Fouad Tarabishi · Mr Rafiq Dallal.

**New in Book 2, and each used in one unit only:** **Ms Souad Nahas**, counsel in Beirut (Unit 19) ·
**R. Mardini**, Homs branch supervisor 2019–21, and **Ghassan Mardini** (Unit 18) · **Dr Mikhail**,
the pharmacist opposite the Hama road unit (Unit 18).

⚠ **`qa.js` asserts the canon surnames** — Nour: Mansour · Nadia: Sayegh · Bassel: Nassif · Hala:
Mourad · Fadi: Saeed · Khaled: Ayoub · **Fouad: Tarabishi** · Dima: Shamsi · Yasser: Khalil · Ziad:
Attar · Lina: Barakat · Maysa: Tannous · **Samir: Haddad** · Rana: Dagher.

**This book produced three violations and all three were invented minor characters:** *Fouad
Mikhail* (Fouad is Tarabishi) → **Dr Mikhail** · *S. Haddad* and *Samer Haddad* (canon has Samir
Haddad) → **R. Mardini** and **Ghassan Mardini**. ⚠ **The rule the check enforces is that a first
name in this strand carries its surname**, and the practical consequence is that a new minor
character should be given a surname that is not in the canon list and then either no first name or
a new one.

**Three canon advisories also fired on places and routines** — Baghdad Street in Units 18 and 21,
and the Ghouta run in Unit 22. **Each was fixed by naming the fact in place** (*"which opened on
8 June"*, *"which moved to Mondays and Wednesdays on 1 March"*), which is cheaper than a continuity
appendix and is what Unit 18.2 teaches.

---

## 8 · Open — two things

1. ⚠ **The four grades.** Section 2's reconciliation records that the plan's *evidenced · reported ·
   inferred · unknown* scheme is absent from the delivered level as a named apparatus. **It is the
   first thing to put back if the level is revised**, as Unit 23.2, displacing *asking a body that
   can decide*.
2. ⚠ **The October list, and it is not optional.** The End-of-Book Test ends with every candidate
   writing three things on the teacher's list: **one document, one reader, one date in the following
   fortnight.** **The teacher keeps the list and asks in October** — reading the candidate's own
   line back to them and asking for the date it was written and who received it. ⚠ **The key tells
   the teacher to expect about a third, and records that figure so that the next teacher has
   something to compare with.** **It is the only part of this course that happens after the course,
   and it is the apparatus of Unit 23.4 applied to the candidates themselves.**

### What to do first at C1

- ⚠ **Measure Unit 1 of C1 Book 1 before writing Unit 2**, and record the band from that measurement
  rather than from B2's. **That is the method that has worked in four consecutive books and it is
  the only one that has.**
- ⚠ **Read the harness that is copied up from B2 for what it PERMITS, not only for what it checks.**
  Phase 2 found a three-letter answer pattern inherited from B1 Preliminary silently holding this
  book's Reading parts below the examination it prepares for. **A harness copied up a level encodes
  that level's examination, and the places where it does so are invisible until the higher level
  needs the extra option.**
- ⚠ **At C1 the reader changes again.** At B1 the reader could not ask a question; at B2 the reader
  can ask and can refuse. **At C1 the reader is usually somebody who agrees with you and cannot
  act**, and the apparatus for that is what C1 Book 1 has to build.
- **The envelope is the continuity hook.** Nour's letter to her C1 self was sealed on 14 December and
  **Lina Barakat has agreed, in her own handwriting, to ask for it on the first working day of
  December 2029 and to stay in the room while it is opened.** ⚠ **C1 Unit 1 opens it.** Its four
  claims, its five undertakings and the reader's line are printed in full at Unit 24.6.

---

_Proactive Business English · B2 · Syria Edition. Two books, twenty-four units, one hundred and
sixty-eight cycles, seven hundred and sixty-eight lexical items and one hundred and ninety-two
collocations. 1,114 pages of Student's Book and 753 of Answer Key, bound (555 + 559 and 376 + 377). Author: Mo (Mohamad
Khorbatli). The level is finished._
