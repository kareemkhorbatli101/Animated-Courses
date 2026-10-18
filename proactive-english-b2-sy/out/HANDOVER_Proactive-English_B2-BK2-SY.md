# HANDOVER — Proactive English · B2 · Book 2 · Syria Edition

Running continuity file for the **B2 Syria Edition** track, Book 2. This file plus the bundle zip
is enough to resume from zero. Read it beside `HANDOVER_Proactive-English_B2-BK1-SY.md`, which is
still the canon for everything Book 1 settled.

- **File prefix:** `PE-B2-BK2-SY_` · **Tree:** `proactive-english-b2-sy/`
- **Author:** Mo (Mohamad Khorbatli). His parameters are fixed and are not to be improved.
- **Plan of record:** `PE-B2-SY_PLAN_and_Blueprint.docx` (26 pp). Everything below implements it, and its
  word-count and test tables have been amended to the as-built figures — see §10.2.

**STATUS: BOOK 2 IS COMPLETE, AND SO IS THE B2 LEVEL AND THE WHOLE A2→B2 SERIES.**
Twelve units, eighty-four cycles, two tests, two bound volumes. The one open item carried out of
Book 1 — Bassel Tahhan without a thread — is closed; see §5. No open items remain except the C1
question in §10.

---

## 0 · Turn log

| turn | what was delivered |
| --- | --- |
| 1 | **Units 13–15** (SB + AK), to the Book 1 bands and the Book 1 QA harness unchanged. |
| 2 | **Units 16–18 and the Mid-Book Test** (60 marks; the parts taught by Unit 18). |
| 3 | **Units 19–21** (SB + AK). Unit 19's minute profile caught a new defect class: a literal `40 min` inside a model, which `qa.sh` parses as a stage minute. |
| 4 | **Units 22–24 and the End-of-Book Test** (100 marks, all seven Reading parts). |
| 5 | Both bound volumes, the plan's measured record, this handover, the Series Bible update and the delivery bundle. Book 2, the level and the series closed. |

---

## 1 · What exists on disk

| artefact | pp | file |
| --- | --- | --- |
| Plan and blueprint (both books) | 26 | `PE-B2-SY_PLAN_and_Blueprint.docx` |
| Units 13–24 Student's Book | 46 · 45 · 46 · 46 · 47 · 45 · 46 · 46 · 45 · 46 · 46 · 47 | `PE-B2-BK2-SY_UnitNN_StudentsBook.docx` |
| Units 13–24 Answer Key | 30 · 31 · 29 · 34 · 34 · 31 · 32 · 32 · 31 · 30 · 31 · 29 | `PE-B2-BK2-SY_UnitNN_AnswerKey.docx` |
| Mid-Book Test + key | 10 + 8 | `PE-B2-BK2-SY_MidBookTest[_Key].docx` |
| End-of-Book Test + key | 15 + 11 | `PE-B2-BK2-SY_EndOfBookTest[_Key].docx` |
| **Bound Student's Book** | **577** | `PE-B2-BK2-SY_StudentsBook_BOUND.docx` |
| **Bound Answer Key** | **394** | `PE-B2-BK2-SY_AnswerKey_COMBINED.docx` |
| Complete delivery bundle | — | `PE-B2-BK2-SY_COMPLETE_DELIVERY.zip` — every .docx, this handover, and the whole `pipeline/` tree |

**551 pp of units, 374 pp of keys.** Both bound volumes carry the tests in teaching order:
Mid-Book after Unit 18, End-of-Book after Unit 24. Book 2 carries **no front matter**, which is
why its Student's Book is seven pages shorter than Book 1's on the same number of units.

**The level, in both books: 24 units, 168 cycles, four tests, 1,161 pp of Student's Book and
789 pp of Answer Key.**

---

## 2 · The twelve units

| # | title | function (from x.1) | grammar |
| --- | --- | --- | --- |
| 13 | Interviews at B2 | answering a competency question in four sentences | situation · action · result · and what you would do differently |
| 14 | Negotiating a Difference of Interest | telling a difference of interest from a misunderstanding | the two diagnoses, and why only one is negotiable |
| 15 | Writing to Somebody Who Has Already Said No | saying what has changed since the refusal, in one sentence | the new fact, and nothing about the old answer |
| 16 | Judging Against Criteria | writing three criteria that can each be failed | the testable criterion, and the one that cannot be failed beside it |
| 17 | The Argument You Do Not Hold | putting a position you do not hold, and saying whose it is | the attribution inside the sentence, not after it |
| 18 | Summarising at Length | finding the part that, if it goes, makes the rest not worth reading | the load-bearing sentence, placed first |
| 19 | Chairing and Minuting | saying what the meeting is for, and what would make it unnecessary | the purpose sentence in two halves |
| 20 | Giving Bad News in Writing | putting the news in the first sentence, short and unhedged | the news sentence — a subject, a verb and a date |
| 21 | Specifications and Acceptance Criteria | writing an acceptance criterion that can be failed | the criterion sentence — a thing, a limit and a figure |
| 22 | Proposals | putting the ask in one sentence, with its cost and its date | the ask sentence — _I am asking for ___, which costs ___, starting ___ |
| 23 | The Long Read | finding out in ten minutes what a long document is for | reporting a document's structure · clause and page together |
| 24 | Opening the Letters | comparing a record you made of yourself with what happened | _I wrote that I would ___; what I did was ____ |

**The four movements of the plan, as built.** 13–15 the interview and the negotiation ·
16–18 judgement, advocacy and the long summary · 19–21 the room, the refusal and the
specification · 22–24 the proposal, the long document and the record of two years.

---

## 3 · Decisions — nothing re-opened in Book 2

All seven of the plan's decisions were taken before Book 1 and none was revisited. The only
figure Book 2 changed is in §10.2, and the book changed the plan rather than the other way round.

---

## 4 · Locked, inherited and not re-opened

Everything in §4 of the Book 1 handover holds unchanged. The cycle, the minute profiles, the
Answer Key section order, the register rules, `lib.js` frozen at
`60c3ce12e272976ad6229b9350653b6e`, and the whole QA harness were carried over without a line
of change.

### Measured across twelve more units — the Book 1 house figures held exactly
- **15 tracks per unit**, `NN.1`–`NN.15`.
- **Dialogue turns 16–20.** **Models 350–480 words.** **4R reports 335–460.**
  **Writer's boxes 180–250.** **3R listener tasks 35–78.** **7R shares 55–88.**
  **Free writing 180–220.**
- **Page bands, as built. SB 45–47 · AK 29–34.** Book 1's SB band was 46–48; the one-page
  difference is the front matter, which Book 2 does not carry.
- **Exactly six `**Practise:**` lines per unit.** **Exactly ten `NOTE()` boxes per Answer Key.**
- **Exactly one phrasal-verb marker and one word-formation marker per unit**, declaring
  **12 phrasal verbs** and **9 word-formation pairs** in every unit of Book 2, with **no repeat
  anywhere in the 24 units of the level.**

### Exam rotation, as built
- **Reading and Use of English:** Part 6(13, 20) · Part 7(14, 21) · Part 3(15, 22) ·
  Part 4(16, 23) · Part 1(17, 24) · Part 2(18) · Part 5(19).
- **Writing:** W1 the essay in every odd unit. W2 by genre — report(14, 22), review(16),
  article(18), letter(20, 24).
- **Listening:** L1(13, 17, 21) · L2(14, 18, 22) · L3(15, 19, 23) · L4(16, 20, 24).
- **Speaking:** Part 1 in every x.1 · Part 4 in every x.7, as Book 1.
- **Both tests weighted 40 · 25 · 25 · 10**, as Book 1. **Mid-Book Test** (60 marks, after Unit
  18): Reading Parts 7, 3, 2, 4 · Listening Parts 1, 3, 4. **End-of-Book Test** (100 marks):
  **all seven** Reading parts, Writing 1 and 2, all four Listening parts, all four Speaking parts.
- ⚠ **The End-of-Book key carries an item-traceability table** taking every question back to the
  cycle that taught it. **Build that table from the files at the end of every book** — it is what
  caught the Part 7 omission in Book 1.

### The declared lexis sets — Book 2. No item here or in Book 1 §4 may be reused at C1
| # | phrasal verbs | word formation |
| --- | --- | --- |
| 13 | apply for · go up for · sit in on · run through · brush up on · be up against · come across as · talk up · size up · draw on · take on · play to | recruit→recruitment · compete→competence · appoint→appointment · apply→applicant · require→requirement · assess→assessable · equivalent→equivalence · describe→description · capable→capability |
| 14 | push back · hold out on · trade away · walk away from · come up against · enter into · put to · wrap up · firm up · open up · break off · call in | negotiate→negotiation · settle→settlement · reserve→reservation · condition→conditional · willing→willingness · reluctant→reluctance · entitle→entitlement · flexible→flexibility · mutual→mutually |
| 15 | go back to · write in · put aside · press on · ease off · leave off · take back · stand over · let up · hear back from · draw back · turn on | submit→submission · omit→omission · compose→composition · care→careless · reassure→reassurance · restrict→restriction · kind→kindly · include→inclusion · sign→signatory |
| 16 | mark down · mark up · let through · screen out · sift through · rule on · measure up · count against · pass over · weed out · bear on · take into account | evaluate→evaluation · moderate→moderation · appeal→appealable · objective→objectivity · consistent→consistency · transparent→transparency · discriminate→discrimination · standard→standardise · rank→ranking |
| 17 | stand in for · speak for · bring round · take issue with · argue away · reason with · sign up to · buy into · fall in with · square up to · pick apart · see through | refute→refutation · represent→representation · distort→distortion · plausible→plausibility · coherent→coherence · motivate→motivation · sympathetic→sympathetically · dismiss→dismissal · charitable→charitably |
| 18 | cut out · leave aside · pare down · strip out · run to · amount to · go over · write up · set down · take in · skim over · lose sight of | abbreviate→abbreviation · compress→compression · reduce→reduction · substitute→substitution · faithful→faithfulness · exhaustive→exhaustively · essence→essential · distil→distillation · concise→concision |
| 19 | call on · move on · come back to · run over · wind up · talk over · shout down · draw out · sum up · head off · cut in · stand down | attend→attendance · adjourn→adjournment · propose→proposal · deliberate→deliberation · ratify→ratification · amend→amendment · unanimous→unanimity · absent→absence · interrupt→interruption |
| 20 | let down · put across · scale back · follow up · go through with · pull out of · write off · hand back · spell out · go back on · come clean · put right | cancel→cancellation · regret→regrettable · terminate→termination · compensate→compensation · liable→liability · final→finality · sever→severance · redundant→redundancy · announce→announcement |
| 21 | lay down · tie down · build in · tighten up · put in for · work to · iron out · nail down · keep to · trade off · factor in · map out | specify→specification · tolerate→tolerance · interpret→interpretation · verify→verification · define→definition · inspect→inspection · deviate→deviation · confirm→confirmation · adopt→adoption |
| 22 | put up · draw up · cost out · sound out · flesh out · thrash out · phase in · push through · carry through · stand behind · stack up · hinge on | feasible→feasibility · implement→implementation · allocate→allocation · provide→provision · commit→commitment · sustain→sustainable · fund→funding · prioritise→prioritisation · quantify→quantification |
| 23 | wade through · skip over · pick out · flick through · dip into · plough through · pore over · home in on · fasten on · leaf through · turn up · tally with | annotate→annotation · navigate→navigation · compile→compilation · collate→collation · retrieve→retrieval · abridge→abridgement · comprehend→comprehension · legible→legibility · cumulative→cumulatively |
| 24 | move on from · hold on to · grow out of · settle into · take stock of · fall away · stick with · catch up on · carry on with · set about · start out · end up | achieve→achievement · progress→progressive · persist→persistence · fluent→fluency · mature→maturity · reflect→reflection · competent→competence · aware→awareness · hesitate→hesitation |

⚠ **Two near-misses worth recording.** `come down to` (Unit 22, first draft) collided with
Unit 2; `conform` (Unit 21, first draft) collided with Unit 1. **Both were found by `qa.sh` and
not by the pre-check**, because the pre-check extraction dropped the **last** item of every
declared list — the trailing `_` truncates it. The corrected extraction is in §8.

---

## 5 · Cast — Book 1's canon, plus one thread closed and four new outside figures

Everything in §5 of the Book 1 handover stands. Two things are added.

**1 ✔ Bassel Tahhan now has his thread, and Book 1's one open item is closed.** He is the
works manager at Dar al-Kutub Press in Qassaa and he carries the whole of **Unit 20**: the
letter of 11 March with the news in the fourth paragraph; Mr Saqqal's telephone call at eight
the next morning, having read the first paragraph and believing the letter was about the price;
the letter of 20 March, nine words at the top and a third shorter; and the mediation of 20.7,
in which the better letter loses the order because Mr Saqqal's committee reads first paragraphs.
He also carries **24.5**, where his nephew asks what the course was and gets six words of
topics. **Eleven of the twelve students carried a thread in Book 1; all twelve do now.**

**2 Four new outside figures, all greppable and all checked against the three trees before use.**

| name | who | used in |
| --- | --- | --- |
| **Mr Jabri** | holds the budget; reads proposals and signs nothing he does not control | 22.1–22.7 |
| **Mrs Khalaf** | holds the ward rota — the hours Ms Sabbagh's proposal actually asks for | 22.7 |
| **Mrs Tannous** | drafter at the standards office; wrote both halves of a document that contradicts itself | 23.4, 23.7, 24.3 |
| **Mr Deeb** | registry clerk; keeps the certificate book, and keeps the sealed letters because it is his job to keep dates | 21.7, 24.6 |

⚠ **Mr Deeb appears in both 21.7 (as a supplier) and 24.6 (as the registry clerk).** This is a
collision inside one book and it should be cleaned at C1 if either figure is reused: the 21.7
supplier is the one to rename.

---

## 6 · Devices planted and paid off

| planted | where | paid off |
| --- | --- | --- |
| the B1 sealed letters of 24.6 | B1 Unit 24 | **24.6** — opened beside the guess written in 24.1, and the count is the only public finding |
| next year's prediction sheet, written after B2 Unit 12 | B2 Book 1 | **13.1 and 24.2** — the habit stocktaking is its successor |
| the "cannot yet" list, named in the Unit 16 key | ak16 | **24.3**, in full, and given to the next teacher on the first morning |
| the C1 letter | — | **24.6** — the new sealed letter, with a date on the outside and a keeper who is not a friend |
| Rim Shaaban's eleven degrees (B1, and Book 1 Unit 4) | B1 | **21.1 and 21.6** — the four-probe criterion that must not be averaged |
| Mazen Hariri's handset batch (B1) | B1 | **21.3** — the test card, and the fault his own bench test does not look at |
| Lubna Sweidan's thirty millimetres (Book 1 Unit 1) | Book 1 1.5 | **21.2** — the target with no band, and the joiner's six millimetres of blockwork |
| Nour Sabbagh's eight afternoons and four hundred hours (Book 1 7.5) | Book 1 | **22.1–22.7** — the ask, the figure from the switchboard's own call book, and the hours that are not Mr Jabri's |
| Adnan Barghouti's nineteen years of minutes (Book 1) | Book 1 | **19.6 and the whole of 23** — the sixty-page conditions of contract and page forty-one |

### The mediation series in Book 2 — one per unit from 13.7, and it is a new series
**13.7 first** (the candidate and the panel) · **14.7** (both parties right about different things) ·
**15.7** (the refuser and the re-applicant) · **16.7** (the assessor and the assessed) ·
**17.7** (the advocate and the person whose case it is) · **18.7** (the summariser and the author) ·
**19.7** (the chairman and somebody who was in the room) · **20.7** (the writer and the reader of
bad news) · **21.7** (the writer of the criterion and the man who has to meet it) ·
**22.7** (the proposer and the person who has to find the money) · **23.7** (the reader of a long
document and the person who wrote it) · **24.7 last** (the person who sealed the letter and the
person who opened it — and both of them are the same person).
⚠ **Book 2 does not print ordinals in its mediations**, which is deliberate: Book 1 shipped four
Student's Books with the wrong ones. **If C1 prints ordinals, grep them across the whole book
whenever a unit is added.**

### The three findings of the last four cycles, which are the level's own conclusions
- **21.7** — a specification is written by the party who applies it and met by the party who
  cannot change it; the silence that comes back is a correct commercial decision, not agreement.
- **22.7** — a proposal priced in the reader's units has to be granted by whoever holds those
  units, and the rule that makes it readable is the rule that sends it to the wrong desk.
- **23.7** — a long document cannot show its own dates, because every layer is printed in the
  same type.
- **24.7** — a sealed letter is written for a reader who has to be invented, and the invention is
  always of a person with the writer's present problem.

---

## 7 · Register rules

Unchanged from Book 1 §7, and two additions.

- ⚠ **`qa.sh` parses `(\d+) min` out of the source to build the minute profile.** A literal
  **`40 min`** inside a model or a writer's box is counted as a stage and corrupts the cycle
  total. **Write "forty minutes", or `______ minutes`.** Found in Unit 19.6, which reported
  130 min for a 90-minute cycle.
- ⚠ **The policy sweep has `\b` boundaries and flags `dating`.** Unit 23 used *dating a clause*
  four times and had to be rewritten as *putting a date against* / *a date problem*. The word is
  needed often at this level; **say _date_ as a noun.**

---

## 8 · Toolchain

Unchanged from Book 1 §8. Three things learned in Book 2.

- ⚠ **The cross-unit lexis pre-check must not truncate the list.** The correct extraction, which
  keeps the final item of every declared set:
  ```bash
  grep -ho "phrasal verbs\*\* _(declared[^']*" pipeline/unit*.js \
    | sed "s/.*another unit)_: //;s/_//g;s/\\\\//g" | tr '·' '\n' \
    | sed 's/^ *//;s/ *$//;s/\.$//' | grep -v '^$' | sort | uniq -d
  ```
  `uniq -d` prints the collisions. The same shape with `word-formation set\*\*` and
  `s/→.*//` does the other set. **Run it before writing a unit, not after building it.**
- ⚠ **Page-count growth is not linear and the box behaviour decides it.** Adding ~385 words of
  Language-box bullets to Unit 24 moved it **0 pages**; adding six two-turn dialogue exchanges to
  the same unit moved it **five**. `dlg()` rows are `cantSplit`, so a dialogue that grows past a
  page foot jumps the whole row. **Grow a thin unit through its dialogues (inside 16–20 turns) and
  trim a fat one through its Language boxes**, which are not band-enforced.
- **The generalised report inserter still works unchanged**: `ak_reports.py <unit.js> <ak.js>`
  lifts the seven `Tell the class:  _…_` reports out of the Student's Book and plants them as
  `SAMPLE([...])` in the key. It asserts exactly seven of each and writes once.

---

## 9 · Faults found and fixed in Book 2 — watch for these again

1. **Unescaped apostrophes before `s`** inside single-quoted JS — `the section's`, `a person's`.
   Recurred in Units 17 and 19. The regex that fixes them, `(?<!\\)'(?=s\b)`, **also escapes the
   apostrophe in the `// … Student's Book` comment on line 1.** Restore it with `sed`.
2. **An unterminated `**` bold marker** inside a writer's box (Unit 21, chunk 3). It builds and
   renders, so only reading the paragraph catches it.
3. **Exam items with more than one valid answer** — eight of them across Units 21, 23 and 24 and
   two in the End-of-Book Test. The commonest cause at this level is **two declared phrasal verbs
   from different units fitting the same gap**: `bring round` and `talk round`, `lay down` and
   `set down`, `turn up` and `end up`, `tally with` and `agree with`, `fallen away` and `gone
   away`. **Check every distractor against the whole level's lexis, not just the unit's.**
4. **Answer-letter patterning.** Unit 21's Listening Part 1 came out `B A B B A A B B` with no C
   at all; Unit 24's Part 4 came out all-B; the Stage 1b answers in Unit 23 were `2 and 4` in
   every one of six cycles. **Reorder options, never answers**, and check the Stage 1b positions
   as well as the exam items.
5. **A quiz item with no error in it.** Unit 24's x.7 quiz item 2 read _Her progress is more than
   I expected_, which is correct English in a task that says *correct the mistakes*. **Read all
   six aloud.**
6. **Out-of-band house figures, every unit, on the first build.** Unit 23 came in with five of
   seven 4R reports short; Unit 24 with all seven short and three 7R shares long; Unit 22 with a
   21-turn and a 15-turn dialogue in the same unit. **Fix by adding or trimming real content.**
7. **A page count below the band.** Units 23 and 24 both built at 44 pp. See the growth note in §8.
8. **A test key that describes a test.** Checked this time: the End-of-Book key's traceability
   table and the Mid-Book key's part list were both written after the tests were final.

---

## 10 · Open items

1. ✔ **Bassel Tahhan.** Closed — see §5.
2. **The plan's Book 2 projections were wrong in one direction only, and the plan has been
   amended.** Four of six word-count bands were projected as a step up from Book 1 and came back
   **identical**: free writing 180–220, models 350–480, dialogue 16–20, AK 29–34. **The reason is
   the examination** — B2 First asks for 140–190 words in both writing parts and does not ask for
   more in the second year of a course — and the rule to carry forward is in the plan: **step up
   only the figures the exam does not fix, and check which those are before projecting any of
   them.** The two that did move are SB pages (45–47 against a projected 47–50, because Book 2
   carries no front matter) and the End-of-Book Test (15 + 11 against Book 1's 14 + 10).
3. ✔ **The Series Bible is updated to version 1.2** at
   `proactive-english-a2-b2-sy/pipeline/bible.js`. §7 Measured record now carries the B2 Book 2
   bands, both test lengths, the paper splits and the Book 2 lexis rule. ⚠ **It is not in this
   book's delivery bundle**, because it belongs to the series and not to this level.
4. ⚠ **`Mr Deeb` is used twice in Book 2** — as a supplier in 21.7 and as the registry clerk in
   24.6. Nothing contradicts itself, but if either figure is reused at C1, **rename the 21.7
   supplier.**
5. **C1 is not planned and nothing in the delivered books promises it.** What the series leaves
   for it is in print and is unusually concrete: the **sealed letters of 24.6**, with a date on
   each envelope and a keeper who is not a friend; the **"cannot yet" lists of 24.3**, which the
   key tells the teacher to collect and hand on; and the **readiness pages of 24.4**, which name
   for each student the two or three B2 moves that are automatic and therefore ready to be built
   on. ⚠ **24.4 also states the shape of the step**, and a C1 plan should start from it rather
   than from a syllabus: **it is not from simple to complicated, it is from visible to invisible**
   — every function in these two books was taught in a form where the reader can see the method
   working, which is why it could be learned and why it is not the finished article.
