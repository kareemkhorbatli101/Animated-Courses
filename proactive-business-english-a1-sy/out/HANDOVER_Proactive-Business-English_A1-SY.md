# Handover — Proactive Business English · A1 · Syria Edition

**Status: the A1 level is complete and delivered. Twelve units, eighty-four cycles, two tests, four
bound volumes.** A1 is **two books of six units**, not one of twelve — the reasoning is in §3.

**264 lexis items, 0 QA faults.** No repeat anywhere inside A1, and every collision with the 2,112
items declared at A2, B1 and B2 is a deliberate forward reference, printed by the harness and
turned into a page of the book (§6).

Every structural figure in this document is **measured**, not projected. Where a projection was
wrong, the measurement stands and the projection is shown as what it was.

---

## 1 · What is in the box

| File | Pages | What it is |
| --- | ---: | --- |
| `PBE-A1-B1-SY_StudentsBook_BOUND.docx` | **165** | Book 1: Units 1–6 + Book 1 Test + title page, in teaching order |
| `PBE-A1-B1-SY_AnswerKey_COMBINED.docx` | **125** | Book 1: six unit keys + the test key + title page |
| `PBE-A1-B2-SY_StudentsBook_BOUND.docx` | **193** | Book 2: Units 7–12 + End-of-Course Test + title page |
| `PBE-A1-B2-SY_AnswerKey_COMBINED.docx` | **142** | Book 2: six unit keys + the test key + title page |
| `PBE-A1-B1-SY_Unit01..06_StudentsBook.docx` | 23·23·24·25·29·30 | Book 1's units, separately |
| `PBE-A1-B1-SY_Unit01..06_AnswerKey.docx` | 16·16·20·21·21·22 | Book 1's keys, separately |
| `PBE-A1-B2-SY_Unit07..12_StudentsBook.docx` | 30·30·30·30·30·30 | Book 2's units, separately |
| `PBE-A1-B2-SY_Unit07..12_AnswerKey.docx` | 21·22·22·22·22·22 | Book 2's keys, separately |
| `PBE-A1-B1-SY_Book1Test.docx` / `_AnswerKey` | **9** / **8** | after Unit 6. 60 marks, 18·18·12·12, 30 questions |
| `PBE-A1-SY_EndOfCourseTest.docx` / `_AnswerKey` | **12** / **9** | after Unit 12. 100 marks, 30·30·20·20, 50 questions |
| `PBE-A1-SY_PLAN.md` | — | the plan of record, with every phase measurement written into it |

**Source:** `pipeline/` — one script per unit (`unitNN.js`, `akNN.js`) for all twelve units, the
four test scripts, `lib.js` (frozen), `bound.js`, `qa.js`, `freecheck.js`, `blankcheck.js`,
`above-lexis.json`, `build.sh`.

**To rebuild everything:**

```
cd pipeline && node qa.js && PE_LEVEL=A1 PE_BOOK=1 ./build.sh bound && PE_LEVEL=A1 PE_BOOK=2 ./build.sh bound
```

⚠ **`node qa.js` must print `0 fault(s)` before a build is kept.** It currently prints
`checking 12 unit(s) and 12 key(s) -- 264 lexis item(s) declared; 0 fault(s)`.

⚠ **Run it over the whole tree, not over the units you have touched.** A lexis collision is between
two units and a single-unit run cannot see one. This is not theoretical: `light` went into Unit 7
and Unit 10 and only a whole-tree run caught it, after both units had already built (§7).

---

## 2 · The spine, and what each unit is actually for

**A1 is Ammar Zreik's first year.** He arrives at Sham Trading in March able to say his name and
almost nothing else, and the course ends in his second March with a note he left that worked for a
man who cannot read English. Nothing else in the twelve units is invented for practice: every
cycle is a thing that went wrong at a real kind of workplace, and in eleven of the twelve review
cycles **nobody is at fault.**

**Book 1 — the things you must get right before anybody trusts you with a telephone.**

| Unit | Title | The thing it is for |
| ---: | --- | --- |
| 1 | Your Name and the Gate | your name, said and spelled, and the gate book Abu Raed has kept for nine years in a script the office cannot read |
| 2 | Numbers, Boxes and the Count | a number is not a quantity. _12_ is not _12 boxes_ |
| 3 | The Day, the Week and the Shift | _on_ a day, _at_ a time, and Hani's eleven swaps that nobody wrote down |
| 4 | Where Things Are | five place words, and Fouad's shelf map that was right and unusable |
| 5 | The Delivery Note | counting before you sign, and the line that says what you did **not** check |
| 6 | The Telephone You Cannot Answer | six sentences, the read-back, and the slip that spent three days under a pad |

**Book 2 — the things that need a word for a state, a reason, and somebody else's morning.**

| Unit | Title | The thing it is for |
| ---: | --- | --- |
| 7 | Full, Empty, Broken | _full_ is not a quantity either. Four men saw the crushed cartons and each assumed another had written it down |
| 8 | Asking For and Giving a Thing | asking in four steps, and a card that lets a man who cannot think of the words read them off it |
| 9 | Yesterday | seven past verbs, and _I did not count it — no light_ |
| 10 | Safety and the Word NO | saying no and then saying who can say yes. Three rules on a wall, not nine |
| 11 | The Customer at the Counter | the price with a date on it, and the customer who never says please |
| 12 | The Note You Leave | four lines, about thirty words, and the only review cycle in the course where something goes **right** |

⚠ **Unit 12 is the smallest thing in the book and the one the whole course is built towards.** To ·
what I did · what I did not do and why · what you must do, with a name at the top and a time at the
bottom. **It is also, exactly, the shape the examination asks for** — and that is why every Lesson B
in twelve units ends the same way. Tell the class so, on the first morning of Unit 12.

---

## 3 · Why A1 is two books of six units and not one of twelve

Every other level in this strand is two books of twelve. A1 is **two of six**, and the reason is
page count, not pedagogy.

An A1 unit runs **23 to 30 pages** because an A1 cycle needs more furniture per idea than a B2 one:
a model dialogue, a Language box, a worked practice, and a ruled writing area for a task whose
answer is fifteen words. Twelve of those is a **358-page** student's book, which is not a book a
learner carries. Six is **165** and **193** — two volumes a learner can hold, each ending in its own
test.

⚠ **And at six units the test at the end of a book IS the mid-point of the course**, so A1 has **no
mid-book test in either volume**. Book 1 ends with a 60-mark test over Units 1–6; Book 2 ends with
the 100-mark End-of-Course Test over all twelve. `bound.js` carries this as a documented special
case — the file names stay the series' `midtest`/`endtest` so the harness needs none.

**The ordinal helper follows the book, not the level:** `ORD[(n - 1) % 6]`. Unit 7 is the **first**
unit of Book 2, not the seventh of anything.

---

## 4 · The cycle, and the house figures

**Thirteen stages, ninety minutes, seven cycles a unit.**

Lesson A — 1 Get ready · 2 Listen and read (+ Language box) · 3 Practise · 3R Perform · 4 Your turn
· 4R Report. Lesson B — 5 Read (+ Writer's box) · 6 Write with help · 6P Check together · 6R Share ·
7 Write freely · 7P Respond · 7R Share · Homework.

**A unit's student's book must have, exactly:**

| `stage(` | `lesson(` | `dlg(` | Language box | Writer's box | `box('Homework` | `'Write with help` | `'Write freely` | `lines(` | `pb()` |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 89 | 14 | 14 | 7 | 7 | 7 | 7 | 7 | 8 | 7 |

**A unit's answer key must have:** `stage(` **95** (fourteen per cycle for 1–6, eleven in cycle 7) ·
`sample(` 27–33 · `note(` 6–15 · `dlg(` **6** · `h2(` **7** · `pb()` **6** · **no `h3(`**.

**The five house rubric words, all of which must appear in every unit:** `Read` · `Say it` ·
`Write it` · `Check it` · `Ask your partner`.

⚠ **Every single one of the twelve units needed a `**Say it. Write it. Check it**` line added after
its first QA run.** The rule fired twelve times on real content. It is the most useful check in the
harness and it was nearly not written.

**Word counts.** Guided writing **15 words or more** · free writing **20 to 35** · models **30 to
60** · cycle 7's written task **four sentences in about 30 words**.

**Peer-review band 0, verbatim, in every unit:** _Point at the line. Read it aloud. Say the one
thing that is missing._

---

## 5 · The two tests

| | Book 1 Test | End-of-Course Test |
| --- | --- | --- |
| After | Unit 6 | Unit 12 |
| Marks | **60** | **100** |
| Split | Reading 18 · Writing 18 · Listening 12 · Speaking 12 | Reading 30 · Writing 30 · Listening 20 · Speaking 20 |
| Numbered questions | 30 | 50 |
| Pages | 9 / key 8 | 12 / key 9 |

⚠ **Both splits are the A2 Key examination's own weighting (30 · 30 · 20 · 20 per cent)** — the
first at 60 per cent size, the second at full size. **Fifty out of a hundred is the LanguageCert
pass mark at this level.** So a learner's percentage on the End-of-Course Test is the first number
this course produces that means anything outside the classroom. Say that when you hand the paper
out, not when you hand it back.

**The numbered questions are Reading's plus Listening's.** Writing and Speaking carry marks and no
numbers. `qa.js` enforces the four papers, the totals, the split, the part marks summing to their
paper, contiguous numbering 1..N, answer-row arity, and that **every** numbered question is
answered somewhere in the key.

⚠ **Two sittings, not one.** Reading and Writing in one lesson, Listening and Speaking in the next.
Eighty minutes of paper is more than an A1 class has done at once, and the paper that suffers is
the fourth — which is where half the marks for talking to another person live.

⚠ **Play every recording three times.** The first is noise, the second is words, the third is
meaning. **Track ET-3 is four sentences and thirty seconds long and carries five marks**; there is
no excuse for reading that one twice.

⚠ **Listening Part 3 of the End-of-Course Test is new in kind.** Every other listening task in the
course is a conversation. That one is a woman reading a four-line note aloud, and the learner is
the person it was **not** written to — which is Hani, in 12.7. It is the only time the examination
puts the learner in that chair.

---

## 6 · Lexis: the rule that had to be inverted for this level

**22 items a unit × 12 = 264.** No repeat inside A1 — that part of the series rule is absolute and
`qa.js` enforces it.

⚠ **But the cross-level rule had to be inverted, and this is the one thing a future level must not
"fix".** Everywhere else in this strand the rule is *no repeat against any level below*, and it
works because the levels were written bottom-up. **A1 is the first level written downwards.** A2
Business has already declared *box*, *invoice*, *driver*, *shelf*, *delivery* and about six hundred
others. A rule forbidding A1 from declaring them forbids A1 from teaching the words it exists to
teach.

So at A1 the cross-level pool is **report-only**. A collision with A2, B1 or B2 is not a fault: it
is a finding, printed as `→`, and **it is what writes each unit's closing "Ahead at A2 — three
things you will meet again" box.** A harness output became a page of the book. Each unit needs
exactly **three** forward references and `freecheck.js` checks for them.

**Declare lexis in BARE form** so the exact-string matcher can see forward references.

---

## 7 · The harness, and the five changes A1 needed

`qa.js` carries five A1-specific changes and a sixth helper. Each is commented in place with the
fault that produced it.

1. **`CAST` grew four times** — Samih (unit 02), Fouad (unit 04), Hani (unit 08), Hala (unit 09).
   Every one of them was already in `SURNAME`.
2. **`SURNAME` extended** with Marwan Haddad and the walk-ons Ghassan Mouallem, Hani Deeb, Omar
   Sibai, Rima Sibai, Lina Shamseddine.
3. **`castGap()`** — the fix for the actual fault, which was that **`SURNAME` and `CAST` are two
   lists that should be one.** It reports names registered for surname consistency that cannot yet
   speak. ⚠ **Its first version listed Raed and Yasser, who are in `CAST` as "Abu Raed" and "Abu
   Yasser" and can speak. A warning that names people who can speak is a warning nobody reads**, so
   `Abu X` now covers a bare `X`. It currently prints nine names, all correct.
4. **`freecheck.js --batch`** — several candidate lists cross-checked **against each other** as well
   as against the written units. Added after a real miss: all six Book 2 lists were cleared in one
   go, each against the units on disk, and because none of the six was written yet, none was checked
   against the other five. `light` went into Unit 7 and Unit 10. ⚠ **A batch clearance that does not
   cross-check the batch is not a clearance.** Disambiguated to `light (not heavy)` and
   `light (a lamp)`, and the miss was replayed to prove the new check fires.
5. **`blankcheck.js`** — see §8.

**Rules that fired on real content, with counts:** the rubric check **12×** · the cast check **4×** ·
the repeated-speaker check **3×** · the surname check **2×** · the house-figure check **1×**, on a
comment of mine.

⚠ **That last one is worth the space.** Unit 12's own header comment named `pb()` and `h1()` in code
form to explain how the end-of-level block is attached, and `qa.js` refused the unit with
`pb() = 8` and `h1( = 2`. **The house-figure check counts text matches, so prose about the harness,
written inside a file the harness reads, is code as far as the harness is concerned.** Name call
sites in words, never in their code form, inside any file `qa.js` reads.

---

## 8 · Two measurement rules this level rewrote

Both are in the PLAN in full (Parts Twelve and Thirteen). Both matter to anyone building the next
level, because both were **written down and believed before they were ever tested.**

**The test-projection rule, fourth amendment.** Projections of 13 and 12–13 pages; measurements of
12 and 9. Two findings:

- ⚠ **Every projection in this series counted words in the SOURCE** — which includes identifiers and
  colour constants, and mangles every table. **A quantity the reader never sees cannot predict a
  page.** Measure the rendered text: `pdftotext file.pdf - | wc -w`.
- ⚠ **A test paper and a key do not behave the same way.** A test paper has a **fixed
  words-per-page**, because its page is paced by layout furniture that does not vary with content.
  A key's words-per-page **rises in step with its words-per-block**, because a longer paragraph
  amortises one block's fixed overhead over more text.

So: **project a test from a test and a key from a key, on rendered words.** Checked on four pairs
across two levels — two exact, two within a page, nothing trimmed. Block count was only ever a
proxy for words-per-block, and a poor one: it counts a fifteen-row table and a one-line notice
alike.

**The bound-arithmetic rule, made exact.**

> bound total = 1 title page + Σ(standalone page counts) + one per document that ends flush with
> its last page bottom.

⚠ **An internal blank belongs to the document** — it is there standalone and the binding reproduces
it faithfully. ⚠ **A trailing blank is created by binding alone.** Four volumes, four exact
predictions: 165, 125, 193, 142.

⚠ **And the check that was supposed to police this could not fire.** "A page with no content" is
never true in a bound volume: every page carries the running header and the footer. The naive check,
run on the very volume it was written from, reports no blank where there is one. `blankcheck.js`
strips the furniture first, classifies a blank by **whether the next page opens something** — a
unit, a numbered cycle, a paper, a test — and treats two in a row, or a blank not at a break, as a
fault. **Both fault branches were made to fire against a deliberately broken fixture before the
tool was trusted.**

⚠ **A rule nobody has seen fire is not a rule.** This level found two that had been written down and
never run, and one hand-written shell loop that returned a confident false negative twice. **Measure
with the tool, not with a loop written in the moment.**

---

## 9 · If you are teaching this tomorrow

1. **Read the teacher's note at the end of each answer key before the lesson, not after.** They are
   long on purpose and they are the only place the mediation in each review cycle is explained.
2. **In eleven of the twelve review cycles, nobody is at fault.** Learners will look for the person
   to blame; the whole course is training them to look for the gap instead. Unit 12.7 is the one
   where something goes right, and the difference should be pointed out.
3. **The counting is not a ritual.** Count the four sentences out loud, with fingers, every single
   Lesson B. Twelve units of that is why Paper 2 Part 2 is the best mark most learners get.
4. **Never accept a bare number.** _12_ is not a quantity. This starts in Unit 2 and is still being
   marked in the final examination.
5. **The `because` is the useful part.** It is asked for six times across the level — 5.6, 7.4, 9.4,
   11.4, 12.4 and the examination — and the single most valuable thing you can do is run the 12.4
   count: ask how many learners have ever had anybody be angry about an _I did not_ with a reason on
   it. **It is always none, and most of the room has spent years expecting otherwise.**
6. **Mark what the paper would do, not whether it is pretty.** A note with a spelling mistake in
   every line that still tells the next man what to do first has done its job. A beautiful note with
   no ask in it has not.

---

## 10 · If you are building A1 for another sector

The pipeline is sector-independent. What is A1-specific, and must be re-derived rather than copied:

- the **cast** and `SURNAME` — and keep them as one list if you are starting fresh, because they
  should never have been two
- the **264 lexis items**, cleared with `freecheck.js --batch` **before** any unit is written, and
  cross-checked against each other as well as against the tree
- the **page band**: SB **23–30**, AK **16–22**. ⚠ **House figures do not predict pages. Documents
  do.** Every unit in this level hits the same house figures exactly and they range over seven pages
- the **six-unit book** and therefore `ORD[(n - 1) % 6]`, and the absence of a mid-book test

What must **not** be changed: the thirteen-stage cycle, the house figures, the five rubric words, the
peer-review band 0 wording, the report-only cross-level lexis rule (§6), and the examination
weighting of both tests.

**Author: Mo (Mohamad Khorbatli).**
