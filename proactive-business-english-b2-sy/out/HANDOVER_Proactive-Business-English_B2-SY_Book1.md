# Handover — Proactive Business English · B2 · Book 1 · Syria Edition

**Status: Book 1 complete and delivered.** Twelve units, eighty-four cycles, two tests, two bound
volumes. **384 lexis items, 96 collocations, 0 QA faults.** Every structural figure in this document
is **measured**, not projected; where a projection was wrong it is shown struck through.

---

## 1 · What is in the box

| File | Pages | What it is |
| --- | ---: | --- |
| `PBE-B2-B1-SY_StudentsBook_BOUND.docx` | **555** | Units 1–12 + both tests + title page, in teaching order |
| `PBE-B2-B1-SY_AnswerKey_COMBINED.docx` | **376** | the twelve unit keys + both test keys + title page |
| `PBE-B2-B1-SY_Unit01..12_StudentsBook.docx` | 44·44·45·44·44·44·45·44·44·44·44·45 | the twelve units, separately |
| `PBE-B2-B1-SY_Unit01..12_AnswerKey.docx` | 29·30·29·30·30·30·30·30·30·30·30·31 | the twelve keys, separately |
| `PBE-B2-B1-SY_MidBookTest.docx` / `_Key` | **10** / **7** | after Unit 6. 60 marks, 15·15·15·15, 30 questions |
| `PBE-B2-B1-SY_EndOfBookTest.docx` / `_Key` | **13** / **9** | after Unit 12. 100 marks, 25·25·25·25, 50 questions |
| `PBE-B2-B1-SY_PLAN.md` | — | the plan of record, with every phase measurement written into it |

**Source:** `pipeline/` — one script per unit (`unitNN.js`, `akNN.js`), the four test scripts,
`lib.js` (frozen), `bound.js`, `qa.js`, `freecheck.js`, `a2-lexis.json`, `b1-lexis.json`, `build.sh`.

**To rebuild everything:**

```
cd pipeline && node qa.js && PE_BOOK=1 ./build.sh bound
```

⚠ **`node qa.js` must print `0 fault(s)` before a build is kept.** It currently prints
`checking 12 unit(s) and 12 key(s) -- 384 lexis item(s) and 96 collocation(s) declared; 0 fault(s)`.

---

## 2 · The spine, and what each unit is actually for

**Book 1 is the contract Nour thinks is a mistake.** In January **Mr Rafiq Dallal**, procurement
director of Ms Tannous's own customer in Beirut, writes to Sham Trading directly and offers a
three-year supply contract at four times the Tannous volume — cutting out **Ms Maysa Tannous**, who
found them. **Mr Ayoub wants it.** Nour believes it is a mistake for three reasons she can evidence
and one she cannot, and ⚠ **her problem is not the argument: it is that she has never written one to
somebody who can overrule her.** That is the gap she named in the last unit of B1.

| Unit | Lesson B genre | ⚠ What it is really teaching |
| ---: | --- | --- |
| 1 *What Is Already Decided, and What Is Not* | a one-page brief for a reader with power | the first four lines **are** the document; what is settled, what is open, what is yours |
| 2 *Taking Yourself Out of the Sentence* | an impersonal account that still assigns accountability | **a passive is a choice, and the choice is who gets named** |
| 3 *The Case Against a Decision Already Half-Taken* | a position paper addressed upward | **the concession that costs something**, and ⚠ **what you are not asking for** |
| 4 *Risk, Exposure and the Thing You Cannot Model* | a risk note, half quantified and half not | **the half you cannot model is named as unmodelled, not left out** |
| 5 *Policy, Not Procedure* | a policy page, and how it differs from a procedure | **a definition should decide; an exclusion should forgive** |
| 6 *Three Readers, One Fact* | the same fact for the bank, the customer and the yard | ⚠ **the load-bearing sentence is identical in all three, or one of them is a lie** |
| 7 *Cause at a Distance* | a root-cause paper whose cause is months and departments away | **document · one account · inference · document**, and the counterfactual test |
| 8 *Numbers in Prose* | a financial narrative — the report the bank asked for | a figure carries **its base and its period**, and ⚠ **a whole and its parts must add up** |
| 9 *Somebody Else's Draft* | an amended draft returned to its author with reasons | **which lines are not yours to write**, and twelve changes sorted into piles that sum to twelve |
| 10 *The Meeting You Did Not Call* | minutes that bind, and a correction to somebody else's minute | **read a minute for what it does not record**; accuracy is not substance |
| 11 *The Thing You Have To Say* | the letter that admits something and undertakes something | ⚠ **keep an ask out of a disclosure**; promise only what you can keep |
| 12 *The Decision You Take* | a decision paper, and the record in four lines | **decision · basis · review date with an owner · trigger with an owner** |

⚠ **Units 9–12 were retitled during the build and two of them changed genre.** The plan had Unit 9
as *Answering an Audit*, Unit 10 as *Chairing, and the Minute That Binds*, Unit 11 as *Bad News in
Writing* and Unit 12 as *What the Year Showed*. **Units 11 and 12 are the same units under better
names.** **Units 9 and 10 are different units**: the audit response became **marking up somebody
else's draft** and the chairing unit became **the meeting you did not call**, which is the position
a coordinator is actually in. ⚠ **Both changes moved the unit from the senior seat to the seat the
learner occupies, and that is the right direction for this strand.** The plan's own tables in
Part Four still describe the units as planned; **this handover and the built books are the record.**

### ⚠ The four things that run through all twelve units

These are what Book 1 is for, and they are what the End-of-Book Test marks:

1. **A figure with its base, its period and its source.** Unit 3.4 puts marks on it, Unit 4
   quantifies half of it, Unit 8 makes a whole book of it, and ⚠ **Unit 8's rule is the one this
   book broke three times before it caught itself** (see §6).
2. ⚠ **What you are not asking for.** Unit 3.5 teaches it as the move that makes a paper answerable;
   Unit 11.4 teaches it as the move that makes a disclosure believable — **an ask attached to a
   disclosure loses the point it is attached to.**
3. **What would change your mind, with an owner.** Unit 4's unmodelled half, Unit 7's counterfactual
   test, Unit 12's review date and trigger — ⚠ **each of them a named person and a date, not a
   sentiment.**
4. ⚠ **The other side, in its strong form, written by you.** Unit 3.3 steelmans Mr Ayoub's case
   better than he put it; Unit 12.4 asks the writer to draft the dissent against their own
   recommendation. **It is the hardest thing in the book to teach and the easiest to fake.**

### ⚠ Unit 11, and the decision not to soften it

The plan asked whether Unit 11 should be softened. **It was not.** The unit asks a learner to write
the letter to **Ms Maysa Tannous** — the buyer who found this company, whose reward is that letter —
and it prices the thing being disclosed: **33 cartons at 1,450, which is 47,850 owed**, against an
April order of **320 cartons, 464,000 of turnover**, on an account worth **2.1 million a year.**
⚠ **The figures are in the unit because a disclosure without them is an apology, and an apology is
not what is owed.** **Nothing in the unit lets the writer ask for anything**, and the teacher's note
says why in terms.

---

## 3 · Structural facts, all measured

- **Per-unit house figures** (asserted by `qa.js`, exact on all twelve units): `stage(` **89** ·
  `lesson(` **14** · `dlg(` **14** · Language box **7** · Writer's box **7** · Homework **7** ·
  `'Write with help` **7** · `'Write freely` **7** · `lines(` **8** · `pb()` **8**.
- **Key page breaks: 7** (`cycles − 1 + 1`, the extra one for the unit check). ⚠ **Unit 12's key
  broke this on the first build**, because the end-of-book word-list block carried a `pb()`; it is
  now `sp()`, so the block runs on from the "I can…" box exactly as the Student's Book's does.
- **The cycle:** 13 stages, 90 minutes, **7 cycles a unit**. Cycle 7 is **Review & Mediate** at
  **11 stages** (quiz · 2 · 3 · 3R · 4 · 4R mediation · 5 exam practice · 6 · 6P · 7), with the `✓`
  unit check sitting **outside** any cycle banner.
- **Bands: SB 44–50, AK 28–34** as recorded in the plan. **Measured: 44–45 and 29–31.** ⚠ **Nothing
  was adjusted** — a band is widened on a measurement outside it and never narrowed on measurements
  inside it. **The spread across twelve units is 1 page of Student's Book and 2 of key**, against 5
  at A2 and 6 at B1; **the cycle at this density leaves the subject matter almost nowhere to go.**
- ⚠ **Both bound volumes are exact on the arithmetic, which has not happened before in this series.**
  531 + 10 + 13 + 1 = **555**, and the volume is 555. 359 + 7 + 9 + 1 = **376**, and the volume is
  376. **Eight earlier bound volumes in this strand each cost at least one page at a file boundary**
  — B1 Book 1's Unit 7 closing `box()` is the standing example, `box()` being `cantSplit`. **Here
  there is none, in either volume, across 26 files.** ⚠ **Do not assume this holds for Book 2; test
  it.**
- **Word counts.** Course: guided **"80 words or more"**, free **"200 to 240 words"**. ⚠ **The tests
  use the examination's own lengths — 40 to 50 and 120 to 140 — and both papers print the course's
  figures next to them with the difference named as the examination's**, so that a candidate meeting
  a shorter task does not read it as a reprieve.
- **Peer review: band 4** throughout — *name the criterion, **copy the line you are marking**, then
  say what you found.* `checkPeerBand` asserts the literal instruction once per unit, so a band-3
  slip pasted up from B1 cannot pass.
- **Lexis: 384 items and 96 collocations**, 32 + 8 per unit, no repeat inside B2 and ⚠ **no repeat
  against the 1,344 declared at A2 and B1**, which `a2-lexis.json` and `b1-lexis.json` hold.
  **No word-formation set**, by decision: Vantage Reading Part 4 tests collocation and the
  examination has no word-formation part.
- **Exam-practice rotation**, asserted by `checkRotation`, which checks **both** parts named in
  cycle 7. **Reading:** U1 **1** · U2 **5** · U3 **3** · U4 **4** · U5 **2** · U6 **1** · U7 **3** ·
  U8 **4** · U9 **5** · U10 **2** · U11 **1** · U12 **3** — **each of the five Vantage parts at
  least twice.** **Writing:** Part 1 in the odd units and Part 2 in the even, with ⚠ **Units 20 and
  21 declared as an exchange in Book 2** so the rotation does not fall on the wrong genre there.

---

## 4 · The examination anchor, looked up and not recalled

**B2 Business Vantage.** Reading is one hour, five parts, **45 questions**: Part 1 matching **7** ·
Part 2 sentence insertion **5** · Part 3 multiple choice **6** (A–D) · Part 4 multiple-choice cloze
**15** · Part 5 error correction **12**. Writing Part 1 is **40–50 words / 10 marks**, Part 2
**120–140 words / 20 marks**. The four skills are weighted equally and ⚠ **the overall result is
their average**, which is why both papers print four separately-marked papers at 25 each and the
keys tell the candidate to work out the average before looking at a total.

⚠ **One figure in the plan was wrong and the verification caught it.** Part Two had been drafted
with **Reading Part 5 at 15 questions**; it is **12**. **It was caught by adding the five parts up
to 45** — the same move Unit 8 teaches. ⚠ **An examination anchor must be looked up, and then its
own figures must be added together.**

**Error correction is still in the paper**, so the rotation stands as planned and no unit lost its
exam task.

---

## 5 · Tests

| | Marks | Split | Questions | Pages |
| --- | ---: | --- | ---: | ---: |
| Mid-Book (after Unit 6) | 60 | 15 · 15 · 15 · 15 | 30 | 10 + 7 |
| End-of-Book (after Unit 12) | 100 | 25 · 25 · 25 · 25 | 50 | 13 + 9 |

**Mid-Book:** Reading three parts of five · Writing 5 + 10 · Listening three parts of five ·
Speaking 4 + 6 + 5. ⚠ **The paper ran a page longer than projected and the key a page shorter**,
because the three listening scripts are printed in the paper (the teacher reads from the candidate's
own paper) and at B2 those scripts are dialogue of real length.

**End-of-Book:** Reading **all five** Vantage parts · Writing 10 + 15 · Listening note completion at
nine plus two multiple-choice sets of eight · Speaking three parts. ⚠ **13 + 9, exactly as
projected** — **the first test projection in the series right on both figures, and the reason is
that it was projected from this book's own mid-book measurement rather than from B1.**

**Declared test-only emphases**, printed on each candidate's own paper so that none is a surprise:

- **Mid-Book:** ✓ **the concession that costs something** (Unit 3.1), 3 marks of 10 in Writing
  Part 2 — 2 for the concession and 1 for nothing after it that argues. ✓ **the load-bearing
  sentence identical across the two Writing tasks** (Unit 6.4), marked as ⚠ **the paper's only
  deduction**, with the two versions written out side by side on the script, because that is the
  only way a candidate sees their own two versions together.
- **End-of-Book:** ✓ **whether the recommendation carries its own basis inside the sentence**
  (Unit 12.5), pass or fail — ⚠ ***in the light of the above* scores nothing.** ✓ **whether you
  asked for anything you were not asked to ask for** (Unit 11.4), across **both** Writing tasks.

⚠ **Two emphases a paper, not three.** *One of accept / accept-with-qualification / dispute* was
dropped from the mid-book paper because it is taught after that test, and **a test-only emphasis is
defensible when it marks a move the units taught and did not score, and indefensible when it marks
a move the candidate has never met.** *A figure with its base and period* was dropped from the
end-of-book paper for the opposite reason: **the units do score it.**

---

## 6 · The harness, and what it caught that nothing else would

`pipeline/qa.js` runs every check over the whole tree: `node qa.js`.

⚠ **Run the tree, not the unit** — a per-unit pass cannot see cross-unit lexis collisions at all.
⚠ **Clear a lexis list with `freecheck.js` before writing the unit**, not after; Unit 7 at B1 cost
seven collisions found after the fact.

**New at B2, each because something in the plan would otherwise have gone unchecked:**
`checkColloc` (8 collocations a unit, no repeat across the level) · **cross-level clearing** against
`b1-lexis.json` as well as `a2-lexis.json`, without which the whole 720-item B1 set is invisible ·
`checkPeerBand` (the band-4 instruction to **copy the line**) · `checkRotation` (the five Vantage
parts, each the declared number of times — **B1's rotation was correct by hand and never asserted**)
· `checkLoads`, which **requires every script before it is built** and checks that it exports a
non-empty array with no `undefined` in it — ⚠ **the fault it catches most is a table whose widths
array is shorter than its headings**, which `docx` reports as *cannot read 'slice'* and nothing
else explains. **Load every script before building it.**

### ⚠ Three arithmetic faults, all in my own prose, none findable by any check

**This is the finding of the book**, and it is uncomfortable because **Unit 8 is the unit that
teaches the rule all three broke:** *a plan that states a whole and its parts must add the parts up.*

1. ⚠ **Unit 8's own cash bridge did not reconcile** with the debtor-day series printed in the same
   unit. Fifteen strings were patched, and ⚠ **the conclusion the dialogue refuses had to change
   too**, because *our collection has improved* is arithmetically impossible on these figures. It is
   now *the gap proves our collection is weakening*, refused on the ground that **lodgements must
   rise more slowly than sales in a growing book with a lengthening collection period.**
2. ⚠ **Unit 9 sorted twelve amendments into piles summing to fifteen.** The fix is in the dialogue
   rather than only in the table: *five and three and four is twelve, which I have added up — a note
   that sorts twelve changes into three piles and does not add the piles together is a note nobody
   can check, including me.*
3. ⚠ **Unit 11 confused margin with turnover.** *About 460,000 at our margin on her* is impossible
   when a carton sells at 1,450; it now reads **464,000 of turnover at 1,450 a carton.**

⚠ **No check can find these and none should be written for them.** They are found by doing what the
book tells the learner to do: **take the figures you wrote and add them up.** **Three in twelve
units is the rate, and the rate is the argument for the rule.**

### ⚠ The guillemet, five times — and why the cheapest check is the best one

`unit09` carried 25 of each guillemet, `ak09` 10, then `unit10`, `ak10`, `unit11`, `ak11` and
`ak12`. ⚠ **My own default for quoting a document inside prose is the guillemet; the series uses
U+201C/U+201D.** `checkChars` refused every single one. **The finding is not about the character.**
It is that **a convention I hold and the book's convention differed by one glyph, the difference was
invisible on every reread, and the only thing that ever caught it was a list of permitted
characters.** ⚠ **A character allow-list is the cheapest check in the harness and it caught more
faults at this level than any other.**

### ⚠ A duplicate word-list item that twelve builds could not see

*A term of art* was both Unit 5's and Unit 9's. It survived twelve unit builds, twelve key builds
and every whole-tree run, and surfaced only when the **72 items of the end-of-book word list** were
assembled in `ak12` and tested for uniqueness. Unit 9's item is now **a closed line**. ⚠ **The
end-of-book list is the first artefact that holds every unit's six at once, which makes it the only
place the fault is visible — so it is a check, and at Book 2 it should be run before Unit 24 rather
than inside it.**

### Four harness faults of one family, all in the End-of-Book Test

⚠ **All four are the same fault at different depths: a thing I wrote was correct and the thing that
reads it could not see it.**

1. **The question-numbering regex could not see `**(6)** ______`** — digits must follow `**`
   immediately, or `(n)` must be followed by whitespace then underscores. The harness reported
   *numbering jumps from 5 to 11* and *45 questions, expected 50*. **The paper was right and the
   markup was invisible.**
2. ⚠ **A readable key table is not necessarily a machine-readable one.** The note-completion answers
   were in a two-column `'Q'`/`'Answer'` table — the clearest layout for a teacher, and one the
   check cannot read. Rewritten so **every answer is three words or fewer**, in number-headed
   tables. **The constraint came from the key's format, which is backwards, and the answers are
   better for it.**
3. **The bracket has to close straight after the numbers**, so `'not needed'` cannot sit in the same
   row.
4. ⚠ **Answer clustering in my own first drafts** — seven consecutive **B** answers in one Listening
   set and six in another. **No check looks for this and one should.**

**And three more the harness caught in the units:** a **surname wrong in twenty places** (*Fadi
Haddad* for **Fadi Saeed**); **`BACK_AT_B2` needing an earlier item's exact declared string**, not a
plausible paraphrase — *a decision* was never declared at A2 or B1 and became *the sense of the
meeting · the chair · on the record*; and ⚠ **a decorated cycle banner that the cycle-map regex
could not see**, which silently disabled the key's stage-coverage check for a whole cycle.

⚠ **A rule nobody has seen fail is not a rule.** Every check named here has caught a real fault.

---

## 7 · Cast, canon, and the continuity fault worth remembering

**Cast at B2:** Nour Mansour (28) · Mr Khaled Ayoub (52) · Lina Barakat (24) · Nadia Sayegh (37) ·
Bassel Nassif (33) · Abu Yasser / Yasser Khalil (56) · Hala Mourad (31) · **Fadi Saeed** (35) ·
Mr Ziad Attar (46, external auditor) · Ms Maysa Tannous (buyer, Beirut).
**New in Book 1:** **Mr Rafiq Dallal** (procurement, Beirut) · **the credit committee** (the bank's,
above Mr Samir Haddad — a reader who never speaks to you) · **Mr Kamal Sayegh** (the firm's own
advocate) · Mr Tarabishi (minute-taker) · Mr Hamdan (Mr Dallal's drafter).
⚠ **Ms Souad Nahas, the commercial arbitrator, is Book 2 Unit 19 only and must not appear in
Book 1.**

### ⚠ The continuity fault, and the rule it produced

**Unit 1 originally had Sham Trading taking legal advice from Ms Nahas.** ⚠ **An arbitrator who has
advised one of the parties is disqualified** — four sentences in Book 1 would have made the whole of
Book 2's arbitration sequence professionally impossible. **Fixed by renaming the adviser to Mr Kamal
Sayegh**, re-QA'd and re-measured at 44 / 29, unchanged.

⚠ **Nothing in the harness could have caught this and nothing will.** **The rule, for the Series
Bible:** *before giving a new name to a professional role, read the whole cast table of **both**
books and ask of every neutral or adjudicating figure whether anything earlier in the level has made
them a party.* **The professions that carry this risk are the ones whose value is independence** —
an arbitrator, an auditor, a surveyor, an inspector, a referee of any kind. ⚠ **Mr Attar survives
the same test only because he has been the external auditor since A2 and has never been instructed
by the firm on anything.**

**Canon Book 1 does not contradict.** *From A2:* Baghdad Street opened **8 June**; Homs opened
**2019**, closed **2021**, ⚠ **Mr Ayoub's decision both times, cause = not counting the walk-in
trade**; the Saturday trial got **nineteen of thirty**, stopped 19 July; the gate sheet is counted
against the order before loading and **signed by name**; a price holds **fourteen days** in writing;
the **generator runs one until four**; founded **1998** in Bab Touma, moved to Mezzeh **2011**.
*From B1:* Ghouta moved to **Mondays and Wednesdays on 1 March**; the Tannous agreed terms of
**28 April** run twelve months from **1 May**, six lines, the sixth with no price; the **nine scrap
cartons of January** are in the fourth store; the bench page is at **revision 2 of 1 April**; two
night markers started **1 October**; Lina was **confirmed in post 1 July**.

⚠ **The Homs fact is the most valuable thing B2 inherits and Book 2 Unit 18 is built on it.** A2
recorded that it happened and that it was the same person's decision twice; it did not record why,
**because nobody wrote the reason down.** ⚠ **Nothing may make the Homs decision look obvious in
retrospect** — the whole point is that it was not, and that the file cannot say.

---

## 8 · Open — one thing, and it is yours

**Book 2 (Phases 5–8) is not started**, by the scope decision taken at approval: Book 1 first, with
Book 2 on a separate go-ahead once Book 1's bands were measured. **They are measured. The plan's
Part Five already specifies all twelve units of Book 2 cycle by cycle.**

**Everything else is closed.** The spine ran as approved with **Unit 11 unsoftened**; lexis is
**32 + 8 with no word-formation set**; **commercial arbitration is Book 2 Unit 19** and written as
arbitration over a consignment rather than litigation; the **Vantage verification happened in
Phase 0** and corrected one figure.

### What to do first in Book 2

1. ⚠ **Build Unit 13's pair, measure both, and write the measured band into `PLAN.md` before Unit 14
   exists.** The plan projects **45–51 / 29–35**. ⚠ **Every page projection in this series has been
   wrong except one**, and the exception was a book that inherited a measurement from the same
   strand. **Expect the Book 2 band to come in *below* Book 1's**, as the general B2 Book 2 did,
   **because Book 2 carries no front matter — that is the cause and not a fault.**
2. **Project the Book 2 mid-book test from this book's two tests, not from B1's.** ⚠ **That is the
   one change that turned a wrong projection into an exact one.**
3. **Run the 72-item word-list uniqueness test before Unit 24**, not inside it.
4. **Add a clustering check to `qa.js`** for multiple-choice answer keys — nothing looks for it, and
   it caught me twice by eye alone.
5. **Peer review steps to band 4 plus the cost clause** in Book 2, as `checkPeerBand` already
   expects.

---

_Author: Mo (Mohamad Khorbatli). Built on branch `claude/intl-journalists-book-adapt-9no27e`._
