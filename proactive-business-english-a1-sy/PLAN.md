# Proactive Business English — A1, Syria Edition
## One book · 12 units · 84 cycles · the plan of record

**What this is.** The bottom of the Proactive Business English ladder, written **after** A2, B1
and B2 were delivered and measured. ⚠ **It is the first level in this series written downwards
rather than upwards, and four things that have been true at every other level are not true here.**
Part Two is those four things, and it is the part to read if you read nothing else.

| | |
| --- | --- |
| **Tree** | `proactive-business-english-a1-sy/` |
| **Files** | `PBE-A1-B1-SY_Unit01_StudentsBook.docx` · `…_AnswerKey.docx` ⚠ *B1 here means **Book** 1, the series' existing and confusing convention, kept* |
| **Level** | A1 throughout |
| **Books** | ⚠ **TWO books of SIX units** — 12 units in all, split after Unit 6. See §2.4, amended. |
| **Author** | Mohamad Khorbatli |
| **Status** | ⚠ **IN BUILD. All six Part Nine decisions resolved on the author's recommendations — see Part Ten.** |

---

# PART ONE — THE ARCHITECTURE INHERITED, AS MEASURED

Not from memory. Every figure below was counted in the delivered A2 Business tree, which is the
level this book sits beneath.

## 1.1 · The cycle — 13 stages, 90 minutes

| | Lesson A — Speaking | | Lesson B — Writing |
| ---: | --- | ---: | --- |
| **1** | Get ready | **5** | Read (+ **Writer's box**) |
| **2** | Listen and read (+ **Language box**) | **6** | Write with help |
| **3** | Practise | **6P** | Check together (peer review) |
| **3R** | Perform | **6R** | Share |
| **4** | Your turn | **7** | Write freely |
| **4R** | Report | **7P** | Respond |
| | | **7R** | Share |
| | | **HW** | Homework |

**Seven cycles a unit. Cycle 7 is Review & Mediate.** 12 units × 7 = **84 cycles = 126 contact
hours**, against A2's 168 cycles and 252.

## 1.2 · The measured A2 figures this book is projected from

| | A2 Business Book 1 | A2 Business Book 2 |
| --- | ---: | ---: |
| Student's Book per unit | **29–32** (Unit 12 = 33) | 35–36 (Unit 24 = 37) |
| Answer Key per unit | **15–17** (Unit 12 = 18) | 18–21 (Unit 24 = 22) |
| `pb()` per unit / per key | **7 / 6** | 8 / 7 |
| Bound | **383 / 213** | 451 / 253 |
| Mid-Book Test + key | **8 + 6** | 8 + 7 |
| End-of-Book Test + key | **9 + 8** | 10 + 7 |
| Lexis | **26 a unit, 624 a level** | — |
| Guided / free words | **≥25 / 35–60** | ≥35 / 60–100 |
| Peer review | **bands 1–2** | band 3 |

## 1.3 · Toolchain — copied, not forked

`lib.js` is **frozen and byte-identical** across five trees and is copied unchanged. `bound.js`,
`build.sh`, `qa.js` and `freecheck.js` are copied from the A2 Business tree, which is the closest
container. ⚠ **`qa.js` needs four changes and they are named in §7.3, not discovered later.**

**Two frozen behaviours to design around:** `lines(N)` prints **one** rule, not N; and `box()` is
`cantSplit`, so a page is priced in blocks and not in words.

---

# PART TWO — THE FOUR PROBLEMS THIS LEVEL HAS AND NO OTHER LEVEL HAD

⚠ **This part is the plan. Parts Three to Eight are its consequences.**

## 2.1 · A2 Business already starts at zero, so "earlier grammar" is not a book

**This is the finding that decides everything else, and it was checked rather than assumed.**
A2 Business Unit 1 teaches *be* (present), possessives and object pronouns, Wh- questions with
*be*, *have got*, verb + *-ing*, and imperatives. Unit 2 is present simple and present continuous.
Unit 3 is *there is / there are*, prepositions of place and *some / any*. Unit 4 is countable and
uncountable, *much / many*.

⚠ **That is the A1 syllabus.** An A1 book written as "A2 Units 1–4, more slowly" would make a
learner who takes both courses do the same four units twice, and would be the kind of padding this
series has refused at every level.

**So A1 cannot be differentiated by grammar. It has to be differentiated by WHO IS SPEAKING.**

## 2.2 · The recommendation: A1 is the yard, the counter and the gate

**A2 Business is the office.** Its learner-proxy is Nour Mansour, an administrative assistant with
a university degree, and every document in it is a document an office produces.

⚠ **A1 is the same company in the same twelve weeks, seen from the yard.** Its learner-proxy is
**Ammar Zreik, 19, a new storeman** who left school at sixteen, reads the Latin alphabet slowly,
and whose English has to do five things and no more: **read a number, read a date, say a name,
hand over a piece of paper, and write four sentences somebody will act on.**

**Why this is the right book and not a consolation prize:**

- ⚠ **It is a larger population than the office.** In a company of this size the office is four
  people and the yard, the counter and the gate are eleven. **Every one of the eleven handles a
  document in English and none of them has ever been taught to.**
- **It is a different kind of English, not a weaker kind.** The office writes. The yard **reads
  what somebody else wrote, out loud, under time pressure, with a lorry waiting** — and then says
  one sentence that has to be right.
- ⚠ **It gives the series something it has never had: two books covering the same twelve weeks
  from two desks.** Nour comes down to the yard in A1 Unit 5 with a delivery note; the same note is
  in A2 Unit 6. **A centre can run both courses at once, and the two groups meet in the story.**
- **The failure mode it teaches against is real and expensive.** A2 Unit 8's whole subject is a
  figure with a wrong base. ⚠ **A1 Unit 2's subject is a figure copied wrong off a page by somebody
  who was not sure whether it was a 6 or an 8**, and that is where most wrong figures actually
  start.

## 2.3 · The cross-level lexis rule inverts, and the harness must be told

**The rule at every level so far:** no repeat inside the level, and **no repeat against any level
below it**. It works because levels were written bottom-up — A2, then B1 checked against A2, then
B2 checked against both.

⚠ **A1 is written downwards and the rule would do exactly the wrong thing.** A2 Business has
already declared *box*, *invoice*, *driver*, *shelf*, *delivery* and about six hundred other items.
**A rule that forbids A1 from declaring them forbids A1 from teaching the words it exists to
teach.**

**The resolution, and it costs one flag in `freecheck.js`:**

> ⚠ **A1's list is checked against A2, B1 and B2 in REPORT-ONLY mode.** A collision is **not** a
> fault. It is a finding, and it is written into A1's own forward-reference box.

**And it buys a device.** B2 ends each unit with **"Back at B2 — three things you already have"**,
naming items first declared at A2 or B1. ⚠ **A1 ends each unit with its mirror: "Ahead at A2 —
three things you will meet again"**, naming three of the unit's items that A2 Business declares
later, with the A2 unit number printed. **The report-only collision list is what writes that box,
so a harness output becomes a page of the book.**

## 2.4 · Two books of six — amended after the plan was first written

**The plan as first written recommended ONE book of twelve.** ⚠ **It ran two things together
that should have been separated: splitting the BINDING and adding CONTENT.** The alternative it
offered was two books of *eight* — sixteen units, 168 hours, four more units of content — and
against that, one book of twelve was obviously right.

⚠ **The option it did not offer is the one taken: two books of SIX. The same twelve units, the
same 84 cycles, the same 126 hours, bound as two slim volumes with the split after Unit 6.**

**Why, and the argument only applies at this level:**

- ⚠ **A nineteen-year-old storeman who left school at sixteen, handed a 330-page book, is being
  handed something he has never finished anything like.** **Two volumes of about 170 pages mean he
  finishes one after 63 hours and has a certificate in his hand before the hard half.**
- **At B2 that would be sentimentality. At A1, with this population, it is probably the single
  biggest factor in completion**, and it costs about fifteen pages of duplicated front matter.
- **There is still not 24 units of A1 that is not padding** — so the content stays at twelve.

⚠ **Each volume ends with its own test and there is no mid-book test in either: at six units, the
test at the end of the book IS the mid-point of the course.** **Book 1's test is 60 marks after
Unit 6; Book 2's is 100 marks after Unit 12 and covers the whole level.**

**What it changes in the harness, and all of it is stated rather than inferred:** `bound.js` takes
Units 1–6 and 7–12 instead of 1–12 and 13–24; `BOOK_OF` becomes `n >= 7 ? 2 : 1`; the mediation
ordinal counts **within a six-unit book**, so Unit 7 is the *first* of Book 2; and the `pb()`
figures do **not** differ between the books, which is the first level in this strand where they do
not.

---

# PART THREE — THE EXAMINATION ANCHOR, LOOKED UP AND NOT RECALLED

⚠ **The series rule, recorded three times in three levels: an examination anchor must be looked up,
and then its own figures must be added together.** This was looked up on 25 October 2026.

## 3.1 · What is actually there at A1

| | Finding |
| --- | --- |
| **Cambridge, adults** | ⚠ **There is no Cambridge A1 examination for adults.** The adult ladder starts at **A2 Key**. A1 is covered only by **A1 Movers**, which is a Young Learners test and is not usable here. |
| **Cambridge, business** | The business ladder starts at **B1 Business Preliminary**. The only A1-capable business instrument is the **Cambridge English Skills Test (Business)**, A1–C1 — ⚠ **and Cambridge's own page describes it as for internal use with no external recognition**, while its workplace-exams page describes it without that caveat. **It is not a certificate to aim a course at.** |
| ⚠ **Linguaskill** | **Current Cambridge pages describe Linguaskill and Linguaskill Business as B1–C2.** ⚠ **The A2 Business plan states that task content is "drawn from Linguaskill Business, which does report at A2". That is no longer true and may never have been.** It is corrected here and must not be carried down. |
| **LanguageCert** | ⚠ **This is the real adult A1 four-skills certificate.** In LanguageCert International ESOL the A1 level is called **Preliminary** (Access is **A2** — the naming is the opposite of what it looks like). Four skills, Written and Spoken sat separately, **pass mark 50%**, and **Writing Part 1 is four sentences in about thirty words.** |

## 3.2 · The recommendation: anchor FORWARD, to A2 Key

**Not to an A1 certificate. To the examination the learner will actually sit next.**

- ⚠ **Test mechanics follow A2 Key's four papers and its 30 · 30 · 20 · 20 weighting**, scaled down,
  so that a learner's A1 percentage sits on the same scale as their A2 mid-book, A2 end-of-book and
  B1 results. **One scale across four levels is the thing this series has been consistent about and
  it is worth more than a certificate nobody in Damascus sits.**
- **Task LENGTH follows LanguageCert A1 Preliminary**, because it is the only A1 figure in the
  research that is a figure: ⚠ **four sentences in about thirty words** is the shape of this book's
  final writing task and of Unit 12's whole subject.
- **Cycle 7 therefore says "exam practice (A2 Key Reading Part 1 / Writing Part 6, at A1 length)"**,
  and the Student's Book says in terms that the task is a step below the examination it rehearses.

⚠ **The objection, and it is a real one, is in Part Nine decision 4:** 30 · 30 · 20 · 20 gives
Writing 30% to a population whose English is mostly spoken and read. **A yard-weighted split would
be 25 · 15 · 30 · 30.** I recommend keeping 30 · 30 · 20 · 20 and I would not argue hard.

---

# PART FOUR — SETTING, CAST AND STYLE

## 4.1 · Setting

**Sham Trading Co., Mezzeh, Damascus — the same company, the same twelve weeks as A2 Book 1, from
the yard instead of the second floor.** The gate and the gate book · the yard · the small store and
the big store · the loading door · the trade counter at the front · the weighbridge on the Ghouta
road. **The office is upstairs and is where paper comes from.**

## 4.2 · Cast — three inherited, three new

| Character | Age | Job | Fixed facts |
| --- | ---: | --- | --- |
| ⚠ **Ammar Zreik** | 19 | **storeman — new in Unit 1** | **the learner's proxy.** Left school at sixteen; from Jaramana; reads the Latin alphabet slowly and says so; first job; his brother got him the interview |
| **Abu Yasser** (Yasser Khalil) | 52 | warehouse supervisor | **inherited from A2 canon, unchanged.** Thirty years in the trade; keeps the stock book by hand as well as on the system; says *"check it twice"* |
| **Fadi Saeed** | 31 | driver | **inherited.** The small van and the lorry; writes his delivery notes in the yard at the end of the day |
| **Nour Mansour** | 24 | administrative assistant | **inherited. New upstairs in the same week Ammar is new downstairs.** ⚠ **In A1 she is the person who comes down with a piece of paper** — four appearances, Units 5, 7, 9 and 12 |
| ⚠ **Majd Bitar** | 23 | trade counter | **new.** Two years at the counter; knows the regulars; impatient and good at the job |
| ⚠ **Abu Raed** (Raed Najjar) | 58 | the gate | **new.** Keeps the gate book; has written every name that entered this yard for nine years; cannot read English and writes names phonetically in Arabic |

⚠ **No clash with any canon anywhere in the series.** The asserted first-name-to-surname map
(Mansour, Sayegh, Nassif, Mourad, Saeed, Ayoub, Tarabishi, Shamsi, Khalil, Attar, Barakat, Tannous,
Haddad, Dagher) and the general course's (Haddad, Khoury, Nasser, Darwish, Saleh) contain none of
**Ammar · Majd · Raed · Zreik · Bitar · Najjar.**

⚠ **Abu Raed is the book's best character and he is deliberate.** He cannot read English and he has
kept a perfect gate book for nine years by writing English names in Arabic script. **Unit 1 is
Ammar discovering that his own name is in that book, spelled a way he does not recognise** — and
the unit's mediation is whether the book should be changed after nine years.

## 4.3 · Style — inherited, with three additions for A1

Inherited unchanged: British spelling · SYP written in full · Syrian places, real ones · no
politics, no security services, no war — roads close and nobody says why · same-gender pairing
always available · *"you can invent details"* on any personal-data task · audio scripts printed at
the point of use, never in an appendix · ⚠ **the Answer Key gives an answer or a full sample for
every task, including brainstorms, speaking, peer review and homework.**

**Added at A1, and all three are about the reader this book has:**

1. ⚠ **Arabic is allowed in the classroom throughout this level**, and the book says so on its
   first page. Every other level restricts it by unit. **At A1 restricting it buys nothing and
   costs the quiet learners.**
2. ⚠ **Every instruction in the Student's Book is at or below the level of the unit it is in.**
   A1 books routinely teach *there is / there are* in an exercise whose rubric says *"complete the
   following sentences using the appropriate form"*. **This book's rubrics are: *Read. Say it.
   Write it. Check it. Ask your partner.*** The harness asserts a rubric word-list.
3. ⚠ **Nothing is a gap-fill with one right answer that the learner cannot say aloud first.**
   House sequence, every written task: **say it → copy it → complete it → write it.**

---

# PART FIVE — THE TWELVE UNITS, CYCLE BY CYCLE

**84 functions. The grammar ladder is A1 proper and is the floor of the general A2 ladder, so a
learner moves from A1 Unit 12 to A2 Unit 1 and meets the ladder again from the bottom — once, by
design, and the A2 book is where it is consolidated.**

### Unit 1 · Your Name and the Gate
*Ammar's first morning. Lesson B genre: writing your own name, job and shift on a line.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 1.1 | Saying your name and your job | *be*: I am / you are | Ammar at the gate at 6.50 |
| 1.2 | The alphabet, and spelling your name | the letters; *how do you spell it?* | Abu Raed writes it in the gate book |
| 1.3 | Reading a name on a list | *this is / that is* | finding his own name on the shift list |
| 1.4 | Saying who somebody else is | *he is / she is* | Abu Yasser points out who is who |
| 1.5 | Greeting, and leaving | fixed phrases; morning / afternoon | the first hour and the last |
| 1.6 | Saying you did not understand | *Sorry? · Again, please · I don't understand* | Abu Yasser speaks fast and does not know it |
| 1.7 | **Review & Mediate** | review | the gate book → exam practice · ⚠ **mediation: nine years of names spelled a way nobody can read back** |

### Unit 2 · Numbers, Boxes and the Count
*Lesson B genre: a count sheet — a number written twice, in digits and in words.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 2.1 | Numbers 0–20 | numbers; *how many?* | counting cartons on a pallet |
| 2.2 | Numbers 20–1,000 | the bigger numbers; *and* | the stock figure on the board |
| 2.3 | Saying how many of a thing | plural *-s*; *a / an* | box/boxes · roll/rolls · pallet/pallets |
| 2.4 | Saying what is on the shelf | *there is / there are* | three on the shelf, none on the floor |
| 2.5 | Writing a number down, and reading it back | digits and words; *say it back to me* | ⚠ **the 6 and the 8** |
| 2.6 | Saying the count is wrong | *not* with *be*; *it's not ten, it's nine* | the recount |
| 2.7 | **Review & Mediate** | review | the count sheet · ⚠ **mediation: two men, two counts, one number, and nobody wrote the time** |

### Unit 3 · The Day, the Week and the Shift

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 3.1 | Days of the week | days; *on* | the shift board |
| 3.2 | Clock times | times; *at* | start 7.30, finish 4 |
| 3.3 | Saying what you do every day | present simple, I / you / we | Ammar's day, hour by hour |
| 3.4 | Saying what somebody else does | *he / she* + *-s* | Fadi's day, which is nothing like it |
| 3.5 | Asking about the shift | *when? · what time?* | swapping a Friday |
| 3.6 | Saying you are late, and why | *because*, one clause only | the bus, the road |
| 3.7 | **Review & Mediate** | review | the shift board · **mediation: the man who always swaps and never asks** |

### Unit 4 · Where Things Are

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 4.1 | In, on, under, behind, next to | prepositions of place | the small store |
| 4.2 | Rows, shelves and numbers | *row 3, shelf 2*; ordinals | how this yard is addressed |
| 4.3 | Asking where something is | *where is / where are* | the carton nobody can find |
| 4.4 | Saying it is not there | *there isn't / it's gone* | the empty space where it was |
| 4.5 | Giving a direction inside the yard | imperatives; left / right / straight on | from the gate to the loading door |
| 4.6 | Saying what you can and cannot reach | *can / can't* | the top shelf, and the ladder |
| 4.7 | **Review & Mediate** | review | the shelf map · **mediation: the man who always puts it back somewhere sensible** |

### Unit 5 · The Delivery Note
*⚠ The hinge unit. Lesson B genre: reading a real delivery note and copying four fields off it.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 5.1 | The four things on every note | nouns: *name · date · number · signature* | Nour brings one down from the office |
| 5.2 | Reading a date | dates; the months | 4 March, and why it is not 3 April |
| 5.3 | Reading a quantity and its unit | number + noun | 12 boxes · 3 pallets · 1 roll |
| 5.4 | Signing, and what a signature means | *sign here*; *I signed it* as a chunk | ⚠ **what you have agreed to** |
| 5.5 | Copying a number without changing it | checking; *is it a 6 or an 8?* | the fault that costs money, from 2.5 |
| 5.6 | Saying a paper is missing | *there isn't / there aren't* | the lorry that came with no note |
| 5.7 | **Review & Mediate** | review | a real note · ⚠ **mediation: the driver who wants a signature now and the storeman who has not counted** |

### Unit 6 · The Telephone You Cannot Answer
*Lesson B genre: a message slip — name, number, one line.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 6.1 | Answering | fixed phrases | *Sham Trading, good morning* |
| 6.2 | Asking who is calling | *who is it? · your name, please* | writing a name you cannot spell |
| 6.3 | Saying wait | *one moment, please* | the hold, and not hanging up |
| 6.4 | Saying somebody is not here | *he isn't here · she's at lunch* | where the four people upstairs are |
| 6.5 | Taking a number, and reading it back | numbers again, read back | the call-back |
| 6.6 | Saying you will pass it on | *I'll tell him* as a chunk | the slip on the desk |
| 6.7 | **Review & Mediate** | review | the message slip · ⚠ **mediation: the message that was taken perfectly and never passed on** |

**— MID-BOOK TEST after Unit 6 —**

### Unit 7 · Full, Empty, Broken

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 7.1 | Describing a thing | adjectives: *big · small · full · empty* | the state of the shelf |
| 7.2 | Saying something is damaged | *broken · torn · wet* | the carton off the Aleppo lorry |
| 7.3 | Saying how many are bad | *two of ten* | the proportion, not the adjective |
| 7.4 | Saying it was like that when it came | *it came like this* | ⚠ **the honest report, with no blame in it** |
| 7.5 | Asking what to do | *what do I do?* | Abu Yasser decides and says why |
| 7.6 | Writing one line about it | one sentence | ⚠ **the first sentence in the course that somebody acts on** |
| 7.7 | **Review & Mediate** | review | a damage note · **mediation: the carton four people saw and nobody wrote down** |

### Unit 8 · Asking For and Giving a Thing

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 8.1 | Asking for a thing | *can I have…?* | tape, a pen, the key |
| 8.2 | Giving and receiving | *here you are · thank you* | the counter, with Majd |
| 8.3 | Please, and the difference it makes | politeness | ⚠ **the same request twice, once without it** |
| 8.4 | Saying no, politely | *sorry, we haven't got any* | out of stock at the counter |
| 8.5 | Offering | *do you want…?* | the pallet nobody can move alone |
| 8.6 | Thanking for a named thing | *thank you for the…* | naming what you are thanking for |
| 8.7 | **Review & Mediate** | review | the counter · **mediation: the regular customer who has never once said please** |

### Unit 9 · Yesterday
*Lesson B genre: three sentences about a shift that has finished.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 9.1 | Was and were | *was / were* | where everybody was at four o'clock |
| 9.2 | Fifteen verbs in the past | past simple, regular | what happened on the late shift |
| 9.3 | Saying when | *yesterday · last night · on Monday* | putting it in time |
| 9.4 | Saying what did not happen | *didn't* | the lorry that did not come |
| 9.5 | Asking what happened | *what happened?* | Abu Yasser's only question |
| 9.6 | Telling it in order | *first · then · after that* | three sentences, in order |
| 9.7 | **Review & Mediate** | review | the shift report · ⚠ **mediation: two men, two true versions of one night** |

### Unit 10 · Safety and the Word NO

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 10.1 | Reading a sign | *no smoking · keep out · danger* | the six signs in this yard |
| 10.2 | Must and must not | *must / must not* | the three rules Abu Yasser actually enforces |
| 10.3 | Stopping somebody | *stop! · don't!* | the reversing lorry |
| 10.4 | Saying something is dangerous | *it's dangerous · be careful* | the wet floor by the door |
| 10.5 | Reporting something unsafe, to a person | *there is a… and it is…* | the light over the loading door |
| 10.6 | Saying you cannot do it alone | *I can't do it alone · I need help* | ⚠ **the sentence this book exists to make sayable** |
| 10.7 | **Review & Mediate** | review | the safety notice · **mediation: the rule everybody breaks, including the supervisor** |

### Unit 11 · The Customer at the Counter

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 11.1 | Greeting a customer | fixed phrases | the shop owner at eight o'clock |
| 11.2 | Asking what they want | *what would you like?* as a chunk | the order |
| 11.3 | Prices | numbers + SYP | reading the price list aloud |
| 11.4 | How many and how much | *how many / how much* | the total |
| 11.5 | The receipt | the nouns on a receipt | what the customer takes away |
| 11.6 | Closing well | *see you · come again* | the last ten seconds |
| 11.7 | **Review & Mediate** | review | the price list · ⚠ **mediation: the customer who was given the wrong price and is right** |

### Unit 12 · The Note You Leave
*⚠ Carries the end-of-level block. Lesson B genre: **four sentences in about thirty words**, which is LanguageCert A1's own Writing Part 1 length.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 12.1 | The four-line note | the shape | the end of a shift |
| 12.2 | Who it is for | *To:* | ⚠ **naming your reader, which is the whole series in two words** |
| 12.3 | What you did | past simple, recycled from Unit 9 | the done |
| 12.4 | What you did not do, and why | *didn't … because* | ⚠ **the honest half, and the hard one** |
| 12.5 | What the next person must do | *please… / must*, from Unit 10 | the handover line |
| 12.6 | Your name and the date | signing | the record |
| 12.7 | **Review & Mediate** + **end-of-level block** | review | ⚠ **mediation: the four-line note that saved a morning, and who read it** |

**— END-OF-BOOK TEST after Unit 12 —**

---

# PART SIX — TESTS, WORD COUNTS, LEXIS, PEER REVIEW

## 6.1 · Tests

| | Marks | Split | Questions | ⚠ Projected pages |
| --- | ---: | --- | ---: | ---: |
| **Mid-Book** (after Unit 6) | 60 | 18 · 18 · 12 · 12 | 30 | **7 + 6** |
| **End-of-Book** (after Unit 12) | 100 | 30 · 30 · 20 · 20 | 50 | **9 + 7** |

⚠ **Those two page figures are projections and the series' own record says they will be wrong.**
**No test page projection in this strand has ever beaten plus or minus one page except by luck.**
**Phase 2 builds the mid test and measures it before Unit 7 is written, and the end test is
projected from that measurement and not from A2's.**

**Shape.** Reading: three parts of six at A1 — matching a word to a picture or a sign, reading a
short note for one fact, and reading a delivery note for four fields. Writing: a form, then
**four sentences in about thirty words**. Listening: three parts, scripts **printed in the paper**
and read twice. Speaking: three short parts, ⚠ **and the examiner's rubric says in terms that a
candidate who answers in one word scores what a candidate who says nothing scores** — the series'
*"a bare yes is the same as silence"*, at the level where it bites hardest.

## 6.2 · Word counts

| | guided (stage 6) | free (stage 7) | models |
| --- | --- | --- | --- |
| **A1, this book** | ⚠ **15 words or more** | ⚠ **20 to 35 words** | **30 to 60** |
| A2 Business Book 1 | 25 or more | 35 to 60 | 45 to 100 |

⚠ **Unit 12 is the exception and it is the point of the book: 4 sentences, about 30 words**, which
is a LanguageCert A1 Writing Part 1 and is printed as such.

## 6.3 · Lexis

**22 items a unit × 12 = 264 declared items.** No collocation set (that starts at B2) and no
word-formation set (never, in this strand).

⚠ **Checked against the 2,112 items declared at A2, B1 and B2 in REPORT-ONLY mode**, per §2.3. The
report writes the **"Ahead at A2 — three things you will meet again"** box that closes every unit.

## 6.4 · Peer review — a new band below the series' band 1

The fixed progression runs 1–2 at A2 Book 1, 3 at A2 Book 2 and B1 Book 1, 3 + *name the reader*
at B1 Book 2, 4 at B2, 4 + *what your correction would cost the writer* at B2 Book 2.

⚠ **A1 needs a band 0 and this book declares one:**

> **Point at the line. Read it aloud. Say the one thing that is missing.**

**Three moves, no criterion vocabulary, Arabic allowed.** The harness asserts the literal
instruction once per unit, exactly as it asserts band 4's at B2.

---

# PART SEVEN — HOUSE FIGURES, FIDELITY CRITERIA AND THE HARNESS

## 7.1 · Per-unit house figures — asserted, and identical to A2 Book 1

`stage(` **89** · `lesson(` **14** · `dlg(` **14** · Language box **7** · Writer's box **7** ·
Homework **7** · `'Write with help` **7** · `'Write freely` **7** · `lines(` **8** ·
`pb()` **7** (unit) / **6** (key).

⚠ **Unit 12 carries the end-of-level block with `sp()` and no second `h1` and no extra `pb()`**, so
the figure of 7 holds and the bound volume's arithmetic survives. **That convention has now held in
four consecutive books and this is the fifth test of it.**

## 7.2 · Projected page band — to be replaced by measurement at Phase 0

⚠ **SB 26–30 · AK 14–17**, projected down from A2 Book 1's measured 29–32 / 15–17 on lower word
counts. ⚠ **Phase 0 builds Unit 1 and its key and the band follows the measurement, not this
projection.** **A band is widened on a measurement outside it and never narrowed on measurements
inside it.** **Projected bound: SB about 330, AK about 195.**

## 7.3 · The four changes `qa.js` needs, named now and not discovered later

1. ⚠ **`freecheck.js` gains a `--report-only` mode** for the cross-level pool (§2.3), and its
   output is kept, because it writes a page of the book.
2. ⚠ **`UNIT_BREAKS` loses its book branch.** A one-book level is 7 and 6 throughout; the
   `n >= 13 ? 8 : 7` branch must be made explicit rather than left to evaluate correctly by
   accident.
3. ⚠ **A new check: the rubric word-list** (§4.3 addition 2). Every Student's Book instruction is
   matched against a declared list of allowed rubric words. **This is the one genuinely new check
   in the strand and it is the one an A1 book most needs.**
4. ⚠ **The peer-review assertion takes band 0's literal string.**

**And one thing that must be proved rather than assumed:** ⚠ **each new rule is to be seen to
fire — break a file, watch the check refuse it, restore it.** *A rule nobody has seen fail is not
a rule.*

## 7.4 · Fidelity criteria — what "done" means for a unit

Seven cycles · 89 stages · the ten house figures exact · 22 declared lexis items with the
report-only collision list resolved into the *Ahead at A2* box · band 0 peer review present
verbatim · every rubric inside the allowed word-list · the Answer Key answering **every** task ·
the unit inside the measured band · and `node qa.js` printing **0 fault(s) over the whole tree**.

---

# PART SEVEN-A — ✓ PHASE 0 MEASURED

## Unit 1, built and measured before a word of Unit 2 was written

| | projected | measured | verdict |
| --- | ---: | ---: | --- |
| **Unit 1 Student's Book** | ~~26–30~~ | ⚠ **23** | ✗ **three pages under the floor** |
| **Unit 1 Answer Key** | 14–17 | **16** | ✓ **inside** |

⚠ **The band follows the measurement: SB 23–30, AK 14–17**, floor moved from 26 to 23 and the
ceiling left where it was. **A band is widened on a measurement outside it and never narrowed on
measurements inside it.**

⚠ **And the unit was checked for thinness rather than assumed sound, because a three-page miss
downwards is the shape a thin unit makes.** **Seven cycles, 89 stages, all ten house figures
exact, every task fully specified.** **One provisioning change was made on its merits — the ruled
writing blocks were raised from 4 lines to 5 and the unit check's from 3 to 4, because an A1
learner writes larger and slower than an A2 learner and the series' own line counts are scaled to
word counts rather than to handwriting.** ⚠ **The unit still measured 23 afterwards**, **which is
the useful proof: the lines were space that fitted, not a page of padding, and nothing was added to
reach 26.**

**Why it is three pages under A2 Book 1's 29–32 on identical structure:** every text in it is
shorter — guided 15 against 25, free 20–35 against 35–60, models 30–60 against 45–100 — and the
13-stage cycle has a floor but not a minimum content. ⚠ **This is the second time in the strand
that a word-count change has moved a page band**, **and it confirms the bible's rule: a strand
that changes its word counts has changed its page band.**

## The four harness changes, each seen to fire

⚠ **The series rule is that a rule nobody has seen fail is not a rule.** **Each of the four was
proved by breaking a file, watching the check refuse it, and restoring the file.**

| | Change | Proved by |
| ---: | --- | --- |
| **1** | `freecheck.js` cross-level pool is **report-only** | a candidate list of A2 items returning `0 fault(s), 9 forward reference(s)` |
| **2** | `UNIT_BREAKS` / `KEY_BREAKS` stated, not inferred | — *(it is the absence of a branch; the old `n >= 13` was true for no A1 unit and would have passed while meaning nothing)* |
| **3** | the **rubric** check | *complete the following using the appropriate word* → two refusals; *Discuss with a peer* → house wording absent |
| **4** | **peer-review band 0**, asserted verbatim | *Give your partner some feedback* → refused |
| **+** | the 22-item **lexis count** | a 21-item list → refused |

### ⚠ A fifth change, which was not planned and was found by running the harness

**The teacher's-note check in the copied A2 harness reads `/Teacher\\'s note/`, which matches only
a single-quoted string.** **This key writes its note in double quotes — which is how a key avoids
escaping every apostrophe in a long paragraph — and the check reported a note that is plainly
there as missing.** ⚠ **It is the same fault the B2 strand found and fixed, and the fix had never
been back-ported to the A2 copy this harness came from.** **Widened to `/Teacher\\?'s note/` and
negative-tested.**

⚠ **The finding for the Series Bible: a harness copied ACROSS a strand carries that strand's
unfixed bugs as well as its rules, and a fix recorded in one tree's handover does not travel.**

### ⚠ And one convention that the report-only mode made visible

**The first Unit 1 list was written with articles — *a badge · to spell · a surname* — and cleared
with 0 faults and 0 forward references.** ⚠ **That was wrong and it looked right.** **A2 declares
its items bare — *badge · spell · surname* — and the matcher is exact-string, so every forward
reference was invisible and the "Ahead at A2" box would have had nothing to put in it.**

⚠ **The rule: A1 declares in the SAME form as the level above, bare, because the whole point of
the report-only pool is that the two lists can see each other.** **Rewritten bare, the same 22
items returned nine forward references.**

---

# PART EIGHT — PHASES

| Phase | What is delivered | Gate |
| ---: | --- | --- |
| **0** | Tree, toolchain copied, the four harness changes made **and seen to fire**, 264-item lexis list cleared in report-only mode, ⚠ **Unit 1 Student's Book and Answer Key built and MEASURED** | ⚠ **the band is recorded from the measurement before Unit 2 is written** |
| **1** | Units 2–6 (SB + AK) | the band holds, or is widened and recorded |
| **2** | ⚠ **Mid-Book Test + key, measured** | the end test is projected from THIS measurement |
| **3** | Units 7–12, Unit 12 carrying the end-of-level block | the band holds; `pb()` still 7 |
| **4** | End-of-Book Test + key, bound volumes, handover, delivery bundle, ⚠ **Series Bible to v1.9** | **A1 delivered; the ladder is A1–B2, four levels, 96 units** |

⚠ **Phase 0 is not a formality.** It has caught a wrong page band in four books out of five and a
wrong test weighting at B1. **Here it also has to prove four new harness rules.**

**Size, projected and to be replaced by measurement:** about **330 pp** of Student's Book and
**195 pp** of Answer Key; with both tests, **about 355 pp in all.** ⚠ **That would take the
Business strand to 72 → 84 units and about 5,170 pages.**

---

# PART NINE — THE SIX DECISIONS, AS PUT

⚠ **All six were resolved on the author's recommendations and the resolutions are in Part Ten. The questions are left here as written, because a decision is only legible beside the alternative it refused.**

**1 · The population, and it is the big one.** ⚠ **I have written A1 as the yard, the counter and
the gate — a storeman, a driver, a counter assistant and the man on the gate** — because A2
Business already starts at zero grammar (§2.1) and "A2 more slowly" is not a book. **If you would
rather A1 were the same office population as A2, one notch down, say so and Part Five is rewritten:
it becomes Nour's first six weeks before A2 Unit 1 opens, and it will overlap A2 Units 1–4 and I
would be uneasy about it.**

**2 · One book or two.** ⚠ **I recommend one book of twelve units, 126 hours**, and §2.4 argues it.
**The alternative is two books of eight**, which keeps the series' two-book shape and gives a
mid-point certificate at a natural place. **It costs a second end-of-book test and about 60 pages.**

**3 · Abu Raed and the gate book.** ⚠ **The book's best thread is a man who cannot read English and
has kept a perfect record for nine years by writing English names in Arabic script**, and Unit 1's
mediation is whether to change the book after nine years. **It is affectionate and it is also about
an adult who has been doing a skilled job without the language.** ⚠ **If that reads as condescending
to you rather than as respect, tell me and I will cut him** — the unit still works with Abu Yasser
in the role, and it loses the best thing in the plan.

**4 · The test split.** ⚠ **30 · 30 · 20 · 20, A2 Key's own weighting**, so A1, A2 and B1
percentages sit on one scale. **The objection is real: Writing at 30% is heavy for a population
whose English is mostly spoken and read, and a yard-weighted split would be 25 · 15 · 30 · 30.**
**I recommend the first and I would not argue hard.**

**5 · The report-only lexis rule.** ⚠ **A1 may declare words A2 already declared, and a collision
becomes a page of the book rather than a fault** (§2.3). **This is a change to a rule that has held
across four levels, and it only applies to a level written downwards.** Confirm it, because the
harness change is permanent once it is in.

**6 · Arabic in the classroom, unrestricted at this level** (§4.3). **Every other level restricts
it by unit.** ⚠ **I think restricting it at A1 buys nothing and costs the quiet learners**, but it
is a teaching-policy decision and it is yours.

---

---

# PART TEN — HOW THE SIX WERE RESOLVED

**The author was asked to take his own recommendation on all six and run the level to delivery.**

| | Decision | Resolved |
| ---: | --- | --- |
| **1** | the population | ⚠ **the yard, the counter and the gate** — the storeman, not the office |
| **2** | one book or two | ⚠ **two books of SIX**, not the one-of-twelve the plan first recommended nor the two-of-eight it offered — see §2.4 as amended |
| **3** | Abu Raed and the gate book | ⚠ **kept**, and he is the thread of Unit 1 |
| **4** | the test split | **30 · 30 · 20 · 20**, A2 Key's own, so four levels sit on one percentage scale |
| **5** | the report-only lexis rule | ⚠ **adopted**, and it is now change 1 of 4 in the harness |
| **6** | Arabic in the classroom | ⚠ **unrestricted at this level**, and the book says so on its first page |

⚠ **Decision 2 is the only one that moved from what the plan first said, and it moved because the
plan had run two different things together.** **That is recorded in §2.4 rather than edited away.**

---

# Part Eleven · Book 1 as built, and one amendment to a series rule

## 11.1 · The six units, measured

| Unit | | SB | AK | Notes |
| ---: | --- | ---: | ---: | --- |
| **1** | Your Name and the Gate | **23** | **16** | ⚠ band floor moved to 23 from a projected 26 |
| **2** | Numbers, Boxes and the Count | **23** | **16** | |
| **3** | The Day, the Week and the Shift | **24** | **20** | the -s arrives, alone and protected |
| **4** | Where Things Are | **25** | **21** | |
| **5** | The Delivery Note | **29** | **21** | ⚠ the hinge unit; the longest in Book 1 |
| **6** | The Telephone You Cannot Answer | **30** | **22** | six fixed sentences, nothing else |
| | **Book 1 Test** | **9** | **8** | 60 marks · 30 questions |

⚠ **Measured band: SB 23–30 · AK 16–22.** **The projection in §7.2 (SB 26–30 · AK 14–17) was wrong
at both ends of both ranges** — **too high for the early units and too low for the late ones.** **The
band follows the measurement, and the standing rule held: nothing was trimmed to fit a projection.**

⚠ **The shape inside the band is the useful finding.** **Units 1 and 2 are 23 pages and Units 5 and 6
are 29 and 30.** **A1 units get longer as the book goes on, because the DOCUMENTS get longer — a gate
book is four columns and a delivery note is a whole page with four lines on it.** **The level's house
figures are identical for every unit (89 stages, 14 dialogues, 7 of each box) and the page count still
rises by 30 per cent across six units.** **Figures do not predict pages. Documents do.**

## 11.2 · ⚠ The test-projection rule, third amendment

**The rule as it stood after B2 Phase 8:** *project from the same book's own measurement of a document
of the same TYPE (paper or key) and shape; adjust only where text differs by more than about a third,
and then by less than the ratio implies; below about a fifth do not adjust.*

**What was done here, before building, as the rule requires:**

| | A2 B1 anchor | A1 B1 | word ratio | projected | measured |
| --- | ---: | ---: | ---: | ---: | ---: |
| **test paper** | 8 pp · 1,872 w | 1,920 w | **+2.6%** | **8** | **9** |
| **test key** | 6 pp · 1,709 w | 1,971 w | **+15.3%** | **6** | **8** |

**Both ratios are below a fifth, so the rule said do not adjust. The paper came in one page over and
the key came in two pages over — a third more than projected.**

**The diagnosis, which is the amendment.** ⚠ **Pages did not follow the words. They followed the
BLOCK ELEMENTS** — **every `box`, `table`, `dlg`, `note`, `sample`, `model` and `part`:**

| | blocks (A2 → A1) | block ratio | word ratio | page ratio |
| --- | ---: | ---: | ---: | ---: |
| **test paper** | 31 → 31 | **0%** | +2.6% | **+12.5%** _(8 → 9)_ |
| **test key** | 26 → 36 | **+38%** | +15.3% | **+33%** _(6 → 8)_ |

⚠ **The key's page increase of 33 per cent tracks its block increase of 38 per cent, not its word
increase of 15.** **The paper, whose block count is identical, came in within one page.** **The
mechanism is plain once stated: a box carries padding, a table carries row spacing and a header, a
standalone note carries a paragraph break. Each one costs vertical space ON TOP OF its words, and the
cost does not shrink when the words are short — which is exactly why it bites hardest at A1.**

**⚠ The rule, amended:**

> **Project from the same book's own measurement of a document of the same type and shape, and compare
> TWO quantities, not one: the words, and the number of block elements.** **Where the block counts
> are equal, project on words and expect to be within a page.** **Where the block count differs by
> materially more than the word count, the page count follows the BLOCKS** — **project on the block
> ratio and say so.** **Adjust on words alone only when the block counts match.**

⚠ **This also explains the B2 Phase 8 counter-example rather than merely sitting beside it.** **That
finding was that words per page varies by 2.6× between papers and keys, and that in every pair the
heavier document was the denser one.** **A key is denser per page than a paper because a key is mostly
prose; a paper is mostly boxes and tables. The 2.6× was never about the words — it was about how much
of each document is block and how much is sentence.** ⚠ **One variable, not two rules.**

⚠ **And the standing rule it does not touch:** **a projection is written down before the build and the
band follows the measurement.** **The projection here was wrong by one page and two pages, and both
documents ship at their measured length.** **Nothing was trimmed to reach 6.**
