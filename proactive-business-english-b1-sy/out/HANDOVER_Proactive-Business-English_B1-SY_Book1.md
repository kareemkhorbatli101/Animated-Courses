# Handover — Proactive Business English · B1 · Book 1 · Syria Edition

**Status: Book 1 complete and delivered.** Twelve units, eighty-four cycles, two tests, two bound
volumes. 360 lexis items, 0 QA faults. Every structural figure in this document is **measured**,
not projected; where a projection was wrong it is shown struck through.

---

## 1 · What is in the box

| File | Pages | What it is |
| --- | ---: | --- |
| `PBE-B1-B1-SY_StudentsBook_BOUND.docx` | **487** | Units 1–12 + both tests + title page, in teaching order |
| `PBE-B1-B1-SY_AnswerKey_COMBINED.docx` | **298** | the twelve unit keys + both test keys + title page |
| `PBE-B1-B1-SY_Unit01..12_StudentsBook.docx` | 38·36·40·36·38·38·38·40·41·41·41·38 | the twelve units, separately |
| `PBE-B1-B1-SY_Unit01..12_AnswerKey.docx` | 23·22·23·23·24·23·24·24·24·24·24·24 | the twelve keys, separately |
| `PBE-B1-B1-SY_MidBookTest.docx` / `_AnswerKey` | **8** / **7** | after Unit 6. 60 marks, 15·15·15·15, 30 questions |
| `PBE-B1-B1-SY_EndOfBookTest.docx` / `_AnswerKey` | **12** / **8** | after Unit 12. 100 marks, 25·25·25·25, 50 questions |

**Source:** `pipeline/` — one script per unit (`unitNN.js`, `akNN.js`), the four test scripts,
`lib.js` (frozen), `bound.js`, `qa.js`, `freecheck.js`, `a2-lexis.json`, `build.sh`.

**To rebuild everything:** `cd pipeline && node qa.js && ./build.sh bound`

---

## 2 · The spine, and what each unit is actually for

Sham Trading, Damascus, is a year on from A2. Nour Mansour is administration coordinator across
both sites; **Mr Ziad Attar, the external auditor, joins at Unit 5** and is the reader the second
half of the book is written for. He is not an antagonist, and the keys say so twice: he is the
first reader in the course who is paid to find the gap.

| Unit | Grammar | Lesson B genre | ⚠ What it is really teaching |
| ---: | --- | --- | --- |
| 1 | present simple/continuous, roles | a handover note | a role is a boundary, not a job title |
| 2 | narrative past | a log of a working day | a time is evidence; a duration is a guess |
| 3 | past perfect | a sequence note with an omission named | how to name what did not happen |
| 4 | present perfect | a claim with evidence | **a claim with no number cannot be disbelieved, so it cannot be believed** |
| 5 | passives | a procedure page | **take the names out and the gaps appear** |
| 6 | obligation and authority | an authority matrix | **an authority needs a figure and a thing** |
| 7 | cause and effect | an incident report with an evidence paragraph | **what I saw · what I was told · what I infer**, in that order |
| 8 | second conditional | an options paper | **there are always three options and the third is do nothing** |
| 9 | deduction and doubt | an inspection note | **what would change my mind** |
| 10 | reported speech | minutes; a note of a call | four reporting verbs, four claims about a person |
| 11 | relative clauses | terms of business | **one comma, and the sentence promises a whole order** |
| 12 | opinions and agreement | a position paper | concede first; and the third thing weighing produces |

**The ten documents a coordinator writes** — a handover note, a procedure page, an authority
matrix, a request for authorisation, an incident report with an evidence paragraph, an options
paper, an inspection note, minutes, a correction to a set of terms, a position paper — are each
modelled in full in a Lesson B stage 5 and written by the learner in stage 6.

### ⚠ The four things that run through all twelve units

These are what Book 1 is for, and they are what the End-of-Book Test marks:

1. **A number where a number belongs.** Unit 4 puts marks on it, Unit 6 makes it a figure and a
   thing, Unit 7 a consequence, Unit 8 a measured *would*.
2. **Say where it came from.** Unit 5's *from* and *against*; Unit 7's S/T/I; Unit 9's *the mark
   it rests on*; Unit 10's *one sentence theirs and one ours*.
3. **Say what would change your mind.** Unit 9's overturning condition, Unit 8's do-nothing
   option, Unit 12's *where I would be if the third thing fell through*.
4. **Ask the person who does the work.** Every mediation cycle ends here: Abu Yasser's missing
   clause in 5.7, Fadi's telephone number in 7.7, the half-objection in 10.7, the definitions page
   in 11.7, the eleven undocumented years in 12.7.

⚠ The Unit 12 teacher's note says the fourth of these plainly: **it is the book's argument and it
is not a language point.** A class that leaves writing figures, sources and overturning conditions
and still does not ask the person who does the work has learned the grammar of this course and not
the course.

---

## 3 · Open — nothing

Every question raised in planning is closed. The series name is **Proactive** (confirmed by the
user). The examination anchor is **B1 Business Preliminary**, verified by web search rather than
recalled: Reading & Writing one 90-minute paper at 50 per cent, Listening 25, Speaking 25, and the
overall result the **average of the four skill scores** — hence four printed papers at 25·25·25·25
and a key that insists on the average rather than the total.

---

## 4 · Structural facts, all measured

- **Per-unit house figures** (asserted by `qa.js`): `stage(` 89 · `lesson(` 14 · `dlg(` 14 ·
  Language box 7 · Writer's box 7 · Homework 7 · `'Write with help` 7 · `'Write freely` 7 ·
  `lines(` 8. These are properties of the cycle and carry across levels unchanged.
- **Page breaks, measured at B1 Book 1:** **8** in a unit, **7** in a key (`cycles − 1 + 1`, the
  extra one for the unit check, which at B1 will not share a page with cycle 7).
- ⚠ **The closing unit keeps the house figure of 8.** Following A2 unit 24, the end-of-book block
  runs on from the "I can…" box with no extra break and no `h1`. **The bound volume's page
  arithmetic depends on this.**
- **Bands:** SB **36–41**, AK **21–25**. The SB top was 40 through Unit 8; Unit 9 measured 41, a
  trim of three paragraphs was tested, it **did not move a page**, so it was reverted and the band
  was widened. ⚠ **The band follows the measurement, not the content the band.**
- **Word counts.** Course: guided **"50 words or more"**, free **"100 to 140 words"**, models
  180–260. Tests follow the examination and are deliberately shorter: Writing Part 1 **35 to 45
  words**, Part 2 **60 to 80 words**, stated on the paper.
- **Peer review: band 3** throughout — *quote the criterion from the Writer's box, ask a question,
  stop; do not rewrite the sentence for the writer.* Full band 4 waits for B2 Business.
- **Lexis: 360 items**, 30 per unit, no repeat inside B1 and **no repeat against A2's 624**.
  A2 items return only on a declared `BACK_AT_B1` line of two or three, each re-taught for a sense
  it did not have at A2. `pipeline/a2-lexis.json` holds the harvested A2 sets, so the B1 tree is
  self-contained.
- **Exam-practice rotation**, one B1 Business Preliminary Reading part per unit:
  U1 Part 1 · U2 Part 4 · U3 Part 5 · U4 Part 2 · U5 Part 3 · U6 Part 6 · U7 Part 7 ·
  U8 Part 1 · U9 Part 4 · U10 Part 5 · U11 Part 2 · U12 Part 6.

### ⚠ The bound Student's Book is 487 and the arithmetic says 486

Bisected to the **Unit 7 → Unit 8 boundary**: Unit 7's closing `box()` moves whole to its own page
there, because `box()` is `cantSplit`. Unit 7 is correct at 38 standing alone and occupies 39 in
the volume. **It was not trimmed** — trimming it would make the unit worse in the only form a
learner holds. This is the series' **eighth** block-pricing measurement and the **first taken at a
boundary between two files** rather than inside one. The Answer Key is exact at 298.

---

## 5 · Tests

| | Marks | Split | Questions | Pages |
| --- | ---: | --- | ---: | ---: |
| Mid-Book (after Unit 6) | 60 | 15 · 15 · 15 · 15 | 30 | 8 + 7 |
| End-of-Book (after Unit 12) | 100 | 25 · 25 · 25 · 25 | 50 | 12 + 8 |

**Numbering:** Reading takes the first block, Listening the second, Writing's tasks are unnumbered,
Speaking is unnumbered. ⚠ **Gap-answer tables in the keys carry the question numbers in the
headings, not the cells**, or `qa.js` cannot see them — a fault that cost two rebuilds at A2.

**Declared test-only emphases**, printed on each candidate's own paper so that none is a surprise:

- Mid-Book: **a figure where a figure belongs**, and ⚠ **what you are not asking for** (2 of 9 in
  Writing Part 2, taught once in 6.5). The *awkward reason* is marked in Speaking and deliberately
  **not** in Writing — eighty written words cannot hold it, and the key says so rather than leaving
  the asymmetry to look careless.
- End-of-Book: **what would change your mind** (Unit 9), ⚠ **the strongest point against your own
  recommendation, placed first** (Unit 12 — the position is marked separately from the presence),
  and figures again.

⚠ **The End-of-Book key carries a whole-book band table written to be shown to an employer.**
Nothing in it says *good* or *weak*; it says what the person can do at a desk on Monday and what
they cannot — including that a learner in the bottom band who can read and act on a procedure page
correctly **has gained something real, and an employer told only a percentage will not know that.**

---

## 6 · The harness, and the four faults it caught that nothing else would

`pipeline/qa.js` runs every check over the whole tree: `node qa.js`.

⚠ **Run the tree, not the unit.** A per-unit pass cannot see intra-B1 lexis collisions at all —
three were found in Units 5 and 6 only when the whole tree was first run, after both units had
been written and measured.

**New at B1:**

- **`freecheck.js`** — clears a candidate lexis list against A2's 624 and every B1 item already
  declared, **before** a unit is written. Unit 7 cost seven collisions found after the fact;
  Unit 8's list was cleared in one call before a word of it existed.
- **Cross-level lexis** (`a2-lexis.json`) — caught collisions in Units 5, 6, 7 and 10.
- **The cast check** — refused `Agent` at Unit 1 on first use, which is the designed behaviour.
- **The canon check** — fired on Unit 2, where a log had the generator coming off at 3.40 against
  A2's *one until four*. Fixed on the page, not by weakening the check.

**Four harness faults found and repaired, each negative-tested afterwards:**

1. **`checkTest`'s part-marks regex** used `[^']*?`, which stops at an escaped apostrophe, so the
   part titled `Right, wrong or doesn\'t say` was invisible and Reading added to 10 of 15. The
   paper was right and the check was wrong. Repaired to allow escapes; negative-tested by making
   that part four marks, which it caught.
2. **`countOccurrences` counted constructs mentioned in comments.** Unit 12 failed its page-break
   count because of a comment line containing `pb()`. It now strips line comments, and it was
   negative-tested **both ways** — a real ninth break still fails, a commented one passes.
3. **The key-coverage check** needs `stage('✓')` and an `['Answer', …]` row in the unit key, or it
   cannot see the answers at all. Caught in `ak05`.
4. **The stray-character check** rejected sixteen left-arrows in a chain table in `ak07` (rewritten
   in the unit's own grammar, which reads better) and a CJK month glyph in `ak06`.

⚠ **A rule nobody has seen fail is not a rule.** Every check listed here has caught a real fault.

---

## 7 · Cast, and the A2 canon B1 may not contradict

**Cast:** Nour Mansour (26, administration coordinator, both sites) · Mr Khaled Ayoub (50, office
manager) · Nadia Sayegh (35, accountant) · Bassel Nassif (31, sales) · Abu Yasser / Yasser Khalil
(54, warehouse) · Hala Mourad (29, customer service, Mezzeh counter) · Fadi Saeed (33, driver) ·
Mr Fouad Tarabishi (customer) · Ms Dima Shamsi (supplier, Aleppo) · Mr Samir Haddad (bank) ·
Mr Haffar (customer) · Mr Jaber (haulier) · Ms Rana Dagher (government office).
**New at B1: Mr Ziad Attar** (44, external auditor since 2019, joins Unit 5).
**Due in Book 2: Lina Barakat** (22, trainee, Unit 13) and **Ms Maysa Tannous** (buyer, Beirut).

Institutional voices must be declared in `CAST` on first use with a comment naming the unit.
Declared so far: Customer, Driver, Engineer, Teacher, Woman, Man, Caller, Supplier, Voice, Clinic,
Receptionist, Pharmacist, Hotel, Station, Technician, Visitor, **Agent** (B1 U1).

**A2 canon, which B1 does not contradict:** Baghdad Street opened **8 June** (lease, sign and
licence 12 May; painting 24 May; shelves 30 May; stock 1–5 June; sign arriving 6 June). Homs opened
2019, closed 2021, **Mr Ayoub's decision both times**, cause = not counting the walk-in trade. The
Saturday trial got **nineteen of thirty** and stopped 19 July. The gate sheet is counted against
the order before loading and **signed by name**. A price holds **fourteen days** in writing. The
**generator runs one until four**. Ghouta is Tuesdays and Thursdays. Founded **1998** in Bab Touma,
four people and one machine; moved to Mezzeh 2011. Two staff since 1998. The three weeks in August
when the generator failed and nothing was late.

---

## 8 · Next: Book 2

**The export book.** Sham Trading takes an order from a buyer outside Syria, so every document in
the book has to work for a reader who cannot telephone the warehouse. **Lina Barakat joins as a
trainee in Unit 13**, which inverts Book 1: Nour becomes the person who explains, and the
peer-review band steps up accordingly.

**Projections for Book 2, to be replaced by measurements:**

- Pages: SB 40–45 a unit, AK 24–27. ⚠ **These are projections.** Every page projection in this
  series has been wrong — four times — and the error has gone in both directions.
- Page breaks: `UNIT_BREAKS` is already set to 8 for Book 2 in `qa.js`. **Measure Unit 13 before
  writing Unit 14.**
- Word counts: guided **≥60**, free **140–180**.
- Peer review: band 3 **plus** *name the reader you are being*.
- Lexis: 30 a unit, no repeat against B1's 360 or A2's 624. `freecheck.js` already reads both.

**The first thing to do.** Build Unit 13's pair, measure both, and write the measured band into
`PLAN.md` before Unit 14 exists. ⚠ **That is the step that has caught a projection error every
time it has been taken.**

---

_Author: Mo (Mohamad Khorbatli). Built on branch `claude/intl-journalists-book-adapt-9no27e`._
