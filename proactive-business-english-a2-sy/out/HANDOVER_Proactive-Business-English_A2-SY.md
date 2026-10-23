# HANDOVER — Proactive Business English · A2 · Syria Edition

Running continuity file for the **Proactive Business English A2 Syria Edition** track.
Updated at the end of every turn. This file plus the bundle zip is enough to resume from zero.

- **File prefix:** `PBE-A2-B1-SY_` (Book 1) · `PBE-A2-B2-SY_` (Book 2)
  ⚠ *B1/B2 here mean **Book** 1 and 2, not CEFR. The level is A2 throughout. This is the
  series' own confusing convention and it is kept for consistency with the other trees.*
- **Tree:** `proactive-business-english-a2-sy/` · **Plan of record:** `PLAN.md` in the tree root.
- **Author:** Mo (Mohamad Khorbatli). His parameters are fixed and are not to be improved.
- **Built on:** the Proactive English cycle architecture already delivered at A2, B1, B2 and C1
  in this repository. `lib.js` is a byte-for-byte copy of the series file and has not been touched.

**STATUS: A2 IS COMPLETE — BOTH BOOKS.** Twenty-four units, one hundred and sixty-eight
cycles, four tests, four bound volumes. Book 1 (Units 1–12) and Book 2 (Units 13–24) are built,
measured, QA-clean and delivered. **624 lexis items declared across twenty-four units with no
collision.** One question from Part Eight of the plan is still open and is listed at §3 below.

The next thing in this track is **B1 Business**, not more A2.

---

## 0 · Turn log

| phase | what was delivered |
| --- | --- |
| **0** | Tree created, `lib.js` copied unchanged, `build.sh`, the QA harness, and **Unit 1 SB + AK built and measured**. The measured page band replaced the plan's projection on the day it was taken. |
| **1** | **Units 2–6** (SB + AK). |
| **2** | **Mid-Book Test + key**, measured at 8 + 6 — the projection exactly. Its mark split follows the plan (18·18·12·12) and so departs from the general A2's own mid-test; see §4. |
| **3** | **Units 7–12** (SB + AK). Fadi Saeed declared to the cast at Unit 10, after the harness refused him. |
| **4** | **End-of-Book Test + key** (100 marks, 50 questions), **both bound volumes**, this handover and the delivery bundle. Book 1 closed. Four harness rules added and each proved to fire. |
| **5** | **Units 13–18** (SB + AK) and the **Book 2 Mid-Book Test + key**, measured at 8 + 7. Hala Mourad joins the cast at Unit 13, as planned. The harness was made genuinely book-aware in this phase rather than patched: page breaks, ordinals and the two extra test papers are all asserted per book. |
| **6** | **Units 19–24** (SB + AK) and the **Book 2 End-of-Book Test + key** (100 marks, 50 questions, 10 + 7 pp). `Technician` declared to the cast at Unit 20 and `Visitor` at Unit 23, both as institutional voices, each after the harness refused them. |
| **7** | **Both Book 2 bound volumes** (451 and 253, both exact), this handover rewritten for the whole level, the Book 2 delivery bundle, and the measured record written into `PLAN.md` Part Five. **A2 closed.** |

---

## 1 · What exists on disk

| artefact | pp | file |
| --- | ---: | --- |
| Plan and measured record | — | `PLAN.md` (tree root) |
| Units 1–12 Student's Book | 29 · 29 · 29 · 29 · 30 · 31 · 31 · 30 · 31 · 31 · 32 · 33 | `PBE-A2-B1-SY_UnitNN_StudentsBook.docx` |
| Units 1–12 Answer Key | 16 · 15 · 15 · 15 · 16 · 17 · 17 · 17 · 17 · 17 · 17 · 18 | `PBE-A2-B1-SY_UnitNN_AnswerKey.docx` |
| Mid-Book Test + key | 8 + 6 | `PBE-A2-B1-SY_MidBookTest[_Key].docx` |
| End-of-Book Test + key | 9 + 8 | `PBE-A2-B1-SY_EndOfBookTest[_Key].docx` |
| **Bound Student's Book** | **383** | `PBE-A2-B1-SY_StudentsBook_BOUND.docx` |
| **Bound Answer Key** | **213** | `PBE-A2-B1-SY_AnswerKey_COMBINED.docx` |
| Complete delivery bundle (Book 1) | 33 files | `PBE-A2-B1-SY_COMPLETE_DELIVERY.zip` — every .docx, this handover, a copy of `PLAN.md`, and `PBE-A2-B1-SY_pipeline_latest.zip` (the whole `pipeline/` tree) |
| Units 13–24 Student's Book | 35 · 36 · 36 · 36 · 36 · 36 · 36 · 36 · 36 · 36 · 36 · 37 | `PBE-A2-B2-SY_UnitNN_StudentsBook.docx` |
| Units 13–24 Answer Key | 18 · 20 · 20 · 18 · 19 · 19 · 21 · 21 · 20 · 20 · 20 · 22 | `PBE-A2-B2-SY_UnitNN_AnswerKey.docx` |
| Book 2 Mid-Book Test + key | 8 + 7 | `PBE-A2-B2-SY_MidBookTest[_Key].docx` |
| Book 2 End-of-Book Test + key | 10 + 7 | `PBE-A2-B2-SY_End-of-Book-Test[_AnswerKey].docx` |
| **Bound Student's Book (Book 2)** | **451** | `PBE-A2-B2-SY_StudentsBook_BOUND.docx` |
| **Bound Answer Key (Book 2)** | **253** | `PBE-A2-B2-SY_AnswerKey_COMBINED.docx` |
| Complete delivery bundle (the level) | 64 files | `PBE-A2-B2-SY_COMPLETE_DELIVERY.zip` — see §1b |

**Book 1: 365 pp of units, 197 pp of keys**, plus 17 pp of tests and 14 pp of test keys.
**Book 2: 432 pp of units, 238 pp of keys**, plus 18 pp of tests and 14 pp of test keys.
**The level, bound: 834 pp of Student's Book and 466 pp of Answer Key across four volumes.**
Every bound volume carries its tests in teaching order — Mid-Book after Unit 6 / Unit 18,
End-of-Book after Unit 12 / Unit 24.

⚠ The bound Answer Key is 213 and the arithmetic gives 212. **Page 33 is blank.** Unit 2's key
ends flush with the bottom of its last page and `bound.js` emits a `pb()` before every
component, so the break lands on an empty page. It is an artefact of the bound build, not of
the key: the standalone `Unit02_AnswerKey.docx` is 15 pages with no blank. The Student's Book
has no such page, which is why its arithmetic is exact. `bound.js` is the series' own file and
has deliberately not been changed to suppress this — the same conditional would have to go
into four other trees, and that is the author's call.

⚠ **Book 2 has no such page.** Both its volumes are arithmetically exact (432 + 8 + 10 + 1 = 451;
238 + 7 + 7 + 1 = 253). That is luck rather than a fix: no component of Book 2 happens to end
flush with the bottom of a page. `bound.js` is still unchanged and the fault is still live for
whatever is bound next.

### 1b · The Book 2 bundle — 64 files, and it is the whole level

`PBE-A2-B2-SY_COMPLETE_DELIVERY.zip` holds **every .docx in the tree, both books' and all four
bound volumes**, this handover, both plan copies, and `PBE-A2-B2-SY_pipeline_latest.zip` — the
whole `pipeline/` tree, which is both books' scripts in one folder. It is named for Book 2
because it is the Book 2 delivery, but nothing is left out: Book 1's bundle is a subset of it.

The pipeline zip is the thing to keep. The two books share `lib.js`, `qa.js`, `build.sh` and
`bound.js`, and the book is selected by `PE_BOOK` and not by a separate directory.

---

## 2 · The twelve units of Book 1

| # | Title | SB | AK | the six functions |
| ---: | --- | ---: | ---: | --- |
| 1 | Meeting People at Work | 29 | 16 | greet · introduce · details and spelling · who you work for · what you do · ask to repeat |
| 2 | The Working Day | 29 | 15 | times · routines · frequency · the week · talking about a colleague's day · arranging the meeting |
| 3 | The Office and the Warehouse | 29 | 15 | *there is / there are* · where things are · describing a place · asking where · office equipment · the stock shelf |
| 4 | Stock, Orders and Quantities | 29 | 15 | countable and uncountable · *how much / how many* · quantities **with units** · ordering · low stock · the reorder note |
| 5 | Prices, Payment and Invoices | 30 | 16 | prices and currency · asking the price · comparatives · discounts and terms · the invoice · a payment query |
| 6 | Deliveries and Transport | 31 | 17 | *must / mustn't* · *because* and *to* · delivery arrangements · the delivery note · a problem on the road · the polite refusal |
| 7 | Appointments and Arrangements | 31 | 17 | *can / can't* · *could* · present continuous for the diary · suggesting another time · accepting and refusing · *prefer / I'd rather* |
| 8 | Last Week at Work | 30 | 17 | past simple regular · past simple irregular · *was / were* · past questions · sequencers · reacting to news |
| 9 | Duties, Rules and Permission | 31 | 17 | responsible for · *must* · *have to / don't have to* · asking permission · taking a message · fixed email phrases |
| 10 | Health and Safety at Work | 31 | 17 | *hurt / have got a…* · *should / shouldn't* · frequency instructions · making an appointment · negative imperatives · wishing well |
| 11 | Business Travel | 32 | 17 | *going to* · booking a room · weather · yes/no questions · recommending · timetables |
| 12 | Courtesy and Company Customs | 33 | 18 | congratulating · describing a custom · apologising · thanking · offering hospitality · closing politely |

Every unit is seven cycles; cycle 7 is **Review & Mediate** (11 stages, not 13) and carries the
A2 Key practice, the 15-minute unit check and the *I can…* checklist.
**Lexis: 312 items declared across the twelve units, no collision.**

---

## 2b · The twelve units of Book 2 — as built

| # | Title | SB | AK | the seven cycles, as built |
| ---: | --- | ---: | ---: | --- |
| 13 | Experience and the CV | 35 | 18 | *for / since* · *ever / never* · *already / yet / just* · present perfect vs past simple · skills on a CV · "tell me about yourself" · **the advertisement and what it is really asking for** |
| 14 | Plans and Forecasts | 36 | 20 | *going to* · *will* · *may / might* · first conditional · describing a chart · *I think … will* · **the sales chart and the forecast note** |
| 15 | Problems and Solutions at Work | 36 | 20 | describing a fault · *Why don't we / We could* · negative first conditional · past passive · *I'm afraid…* · buying time on the telephone · **the problem report** |
| 16 | Then and Now | 36 | 18 | *used to* · present perfect for change · *as … as* · *since / for* · *there was / were* · *because of / so* · **the company history** |
| 17 | Training and Learning at Work | 36 | 19 | *would like to* · course duration · *need to* · *it's easy to…* · *good at / bad at* · *Could you show me how to…?* · **the course notice** |
| 18 | Technology at Work | 36 | 19 | email conventions · instructions in sequence · *is down / isn't working* · comparing tools · folders and prepositions · a *don't* rule · **the IT notice** |
| 19 | Suppliers and Partners | 36 | 21 | *buy … from* · asking for a better price · conditional offer · present perfect + *for* · reliability adjectives · *let's agree on…* · **the quotation** |
| 20 | Services and Repairs | 36 | 21 | *need* + -ing · arranging a visit · following up · past passive · asking the cost · closing politely · **the service request** |
| 21 | Quality and Complaints | 36 | 20 | proportion and position · complaining politely · apologising for a company · putting it right · *must be* + past participle · guarantees · **the complaint letter** |
| 22 | Emails and Requests | 36 | 20 | the salutation · purpose in the first line · *Could you possibly…?* · *by / before* and the deadline · the four closings · the same message two ways · **two emails compared** |
| 23 | The Company and the City | 36 | 20 | *was founded in* · *there is / are* **and** *there is no* · comparatives with a measure · the process passive · *because of* + the answer half · reporting news with its source · **the local business page** |
| 24 | Looking Forward | 37 | 22 | *going to* for the arranged · *hope to* with a condition · *would like to propose* · sequencers with reasons · the present perfect for progress · closing a year · **the year-end note and the course review** |

⚠ **Departures from `PLAN.md` Part Four, all in Units 23–24, all deliberate.** The plan's
functions were kept exactly; four of its *scenarios* were replaced because the replacement does
more work at A2:

| planned scenario | as built | why |
| --- | --- | --- |
| 23.4 a new road, a rebuilt souq | *it is made here and sent to Beirut* — a process | the process passive is what a profile needs, and it keeps Unit 15's rule (never a passive to hide a person) visibly intact; the cycle says so in as many words |
| 23.6 the Monday meeting's five minutes of news | reporting an **unconfirmed** rule, source first | gives the cycle a usable shape — source, content, what it means for us — and a note with a *what I have not seen* paragraph |
| 24.2 / 24.3 personal goals / a branch in Latakia | *we hope to* with a condition and a date of knowing / *we would like to propose* a three-step trial | the three futures (arranged · hoped-for · proposed) become one teachable sorting, which is what the whole unit now turns on |
| 24.4 / 24.5 a simple proposal / reviewing what you learned | ordering a plan with reasons / reporting progress with a count | the proposal moved up to 24.3, so 24.4 could teach the long-wait item started on day one; the course review survives as 24.7 stage 7 |

**Lexis: 312 items in Book 1 and 312 in Book 2 — 624 across the level, no collision anywhere.**
Eight collisions were caught and substituted while writing Units 23 and 24 alone, every one of
them against a Book 1 unit written months earlier. The check earns its keep at this distance.

---

## 3 · Open — the one question still outstanding

⚠ **"Pervasive English" was read as "Proactive English."** The whole book is built on that
reading. The author has not confirmed it in writing. Everything else in Part Eight of the plan
was settled by the recommendation the author accepted — A2 Key as the exam anchor, the Sham
Trading cast, the general A2's grammar ladder kept unchanged so the two books interleave, and
Book 1 built first.

---

## 4 · Measured facts that replaced projections — do not re-derive these

**Page bands.** The bible's SB 31 / AK 17–22 **does not reproduce in this container** and is
superseded. The measured band is **SB 29–32, AK 15–17**, with **Unit 12 a stated exception at
SB 33 / AK 18** (it carries the end-of-book block and the complete office-word list that no
other unit has).

**Block pricing of pages.** Past about 12,800 words a unit's page count is priced in
unsplittable blocks, not in words. Unit 11 lost ~400 words with no page change: page 32 held
only the ruled lines and the `cantSplit` *I can…* box. The band was widened rather than an
eight-item checklist — a series constant — being cut. **Do not gut a cycle to hit a page.**
The same thing happened twice more in this phase, on the End-of-Book Test.

**The Answer Key page-break convention.** The series puts a `pb()` before each cycle after the
first in a **unit** key (6 of them), three in a **Mid-Book** key, and five in an **End-of-Book**
key — before each of the four papers and before the closing band table. Phase 0 missed the
first of these and the keys came out three pages short of the series; Phase 4 missed the last
and the end key came out one short. Both are now right.

**The Mid-Book Test split.** The plan specifies the A2 Key weighting, 30·30·20·20, which on 60
marks is **Reading 18 · Writing 18 · Listening 12 · Speaking 12**. The general A2's own
mid-test is 20/15/15/10 — it does not follow the rule its own bible states. This book follows
the rule. ⚠ At the **End**-of-Book Test the two agree: both are 100 marks at 30·30·20·20.

**Test lengths.** Mid 8 + 6, End 9 + 8 — the projection exactly, and the first time in this
series a test-length projection has held. The end test rendered 10 at first, with the tenth
page carrying nothing but the result box; it came back to 9 by merging two paragraphs of the
Speaking task, one line at a time.

### Book 2's measured facts

**Page bands.** **SB 35–36, AK 18–21**, with **Unit 24 a stated exception at SB 37 / AK 22** —
it carries the end-of-book block, exactly as Unit 12 does in Book 1. Book 2 runs five to six
pages longer per unit than Book 1 on identical structure: the word counts are higher (guided
≥35 against ≥25, free 60–100 against 35–60) and the models are 100–180 words.

**Page breaks per book — this is the one the harness now enforces.** A **Book 2** unit has
**8** `pb()` and its key **7**, where Book 1 has 7 and 6. The extra break in each is the unit
check opening on a fresh page. Both figures were measured in the series' own `unit13.js` and
`ak13.js`, not projected, and `qa.js` derives them from the unit number:
`UNIT_BREAKS = n => (n >= 13 ? 8 : 7)`.

**Test lengths.** Mid **8 + 7**, End **10 + 7**. Three of the four departed from Book 1 and
each departure was measured:
- the **Mid key** is 7 against the series' 6, page 7 holding only the closing band box. One
  trim round bought nothing, and the marking note that had been cut was **restored** rather
  than left out for a page that was never purchased.
- the **End test** rendered **11**, the eleventh page holding only the result box — Book 1's
  fault in Book 1's exact place. Merging the two Speaking role cards and shortening three
  marking-table cells brought it to 10.
- the **End key** is 7 against Book 1's 8, because its four audio scripts are shorter.

**Writing marks that the units do not teach.** Book 2's End-of-Book Writing Part 2 puts **5 of
20 marks on the exit** — how a proposal would be stopped and what stopping costs. Unit 24.3
teaches it; nothing in the units marks it. That row is the deliberate exception to "the test
tests only what the book taught", and it is recorded in `PLAN.md` for B1 to inherit or drop.

**Peer-review bands.** Book 1 is band 1–2 (*be kind, be clear, one thing*). **Book 2 is band
3: quote the criterion from the Writer's box, ask a question, and do not rewrite the sentence
for the writer.** Every `6P` box in Units 13–24 carries a worked example of it.

---

## 5 · Cast (canon — do not contradict in Book 2)

**Sham Trading Co., Mezzeh, Damascus.** Office on the second floor, warehouse behind it, a
small trade counter at the front. Secondary settings: a supplier in Aleppo, a branch in Homs, a
shipping agent in Latakia, a bank in Mezzeh, Mr Tarabishi's shop in Souq al-Hamidiyeh.

| Character | Age | Job | fixed facts that must not move |
| --- | ---: | --- | --- |
| **Nour Mansour** | 24 | administrative assistant, new in Unit 1 | the learner's proxy; commerce at Damascus University; lives with her parents in Mezzeh; first job; afraid of the telephone in Unit 1 and best at it by the End-of-Book Test |
| **Mr Khaled Ayoub** | 48 | office manager | runs the Monday meeting; signs every order over 500,000 SYP; asks questions rather than giving orders |
| **Nadia Sayegh** | 33 | accountant | invoices Wednesday, every week; Sun–Thu 8–4; finishes at four exactly because of the children; two children |
| **Bassel Nassif** | 29 | sales | Homs and Aleppo; prefers the bus because he can read the orders on it; always slightly late |
| **Abu Yasser** (Yasser Khalil) | 52 | warehouse supervisor | thirty years in the trade; keeps the stock book by hand as well as on the system; *"the screen says ninety; sometimes the shelf says eighty-six"*; hurt his back in March, so mustn't lift over fifteen kilos alone |
| **Fadi Saeed** | 31 | driver | ⚠ **declared at Unit 10, not in the plan** — he was in the keys from Unit 1 and named in Unit 6's delivery note before anyone noticed. Jaramana; the small van and the lorry; writes his notes in the yard at the end of the day |
| **Mr Fouad Tarabishi** | — | customer, Souq al-Hamidiyeh | orders monthly; pays cash; a long relationship |
| **Ms Dima Shamsi** | — | supplier contact, Aleppo | boxes and packaging; sends on Tuesdays |
| **Hala Mourad** | 27 | customer service | **joins in Unit 13** — Book 2. She appears in Book 1 only as a new colleague being welcomed. |

Outside figures used by name: Khalil & Sons (customer, Homs), Hotel Al Nawras (Latakia),
Al Qasr Hall. No clash with the general A2 cast or with the ESP cybersecurity books.

⚠ **Hala Mourad is canon from Unit 13 on**, and is the second voice in most of Book 2's Lesson A
dialogues: Nour explains, Hala learns, which is the inversion of Book 1 where Nour was the one
learning. Book 2 also adds two **institutional voices** — a speaker with a job and no history,
declared in the harness so that one unexplained name cannot slip in:

| voice | declared at | why |
| --- | --- | --- |
| `Customer`, `Driver`, `Engineer`, `Teacher`, `Woman`, `Man`, `Caller`, `Supplier` | Book 1 | the series' own set |
| `Technician` | **Unit 20**, the repairs unit | somebody has to arrive and look at the shutter |
| `Visitor` | **Unit 23**, the city unit | somebody from outside has to read the difficulties page and react to it |

Both were refused by `checkUnit` on first use and declared deliberately rather than renamed,
which is the pattern set when Fadi was found undeclared at Unit 10.

---

## 6 · Devices planted in Book 1 and where they are paid off

- **The unit.** Unit 4 teaches a quantity with its unit; Nour's *60 boxes* mistake is told as
  history in the End-of-Book Test reading, and *"a quantity with no unit scores half a mark"*
  is written into both test marking schemes. Book 2 should keep charging for it.
- **"Telephone early rather than late."** Mr Ayoub's line, Unit 1; quoted back by Nour in both
  test readings.
- **The shelf against the screen.** Abu Yasser, Unit 3/4; the Mid-Book Test listening; still
  true at Unit 12.
- **The Monday meeting moved from ten to half past eight.** Mid-Book Test cloze; Mr Ayoub
  confirms it has *not* moved again in the End-of-Book Test listening. If Book 2 moves it, say so.
- **Abu Yasser's back.** Unit 10; the reason for the two-person lifting rule in the end test.
- **Apologise first, then explain.** Unit 12; it is a marked criterion in the End-of-Book
  Writing Part 1 — an apology at the end of the message loses an organisation mark.
- **The office-word list** (attendance, discrepancy, dispatch, designated, authorisation,
  consignment, outstanding, reimburse, RSVP and the rest) is collected in the Unit 12 key:
  *"the most valuable page in this book."* Book 2 extended it rather than restarting it: the
  `4R` stage of each Book 2 cycle 7 adds six or seven words to it, and Unit 24.7 closes it.

### What Book 2 planted, and where it is paid off

- **The proportion and the position.** Unit 21.1: *two of the twenty, both on the bottom layer*.
  It returns in the End-of-Book Reading Part 1, the Listening Part 1, and the Speaking Part 2
  role card, where 4 of 12 marks depend on it. It is the single most reused device in Book 2.
- **"The complaint is almost never about the goods."** Unit 21, said plainly in the key; paid off
  in the end test Reading Part 2, where nine of Hala's eleven complaints were about nobody
  telephoning.
- **The separate, earlier confirmation date.** Unit 22.3; a marked criterion worth 2 of the 10
  marks in End-of-Book Writing Part 1, and *as soon as possible* in its place scores 0 of 3.
- **The Homs store, opened 2019 and closed 2021.** Named in Unit 23.1's profile as the thing
  that went wrong, used again in 23.3's comparison note, and owned in the first person in Unit
  24.6's year-end note and the end-test Listening Part 4. ⚠ It is canon that this was **Mr
  Ayoub's** decision, both times, and that the cause was not counting the walk-in trade first.
- **Baghdad Street, 8 June.** Unit 24's one arranged thing: lease signed 12 May, sign ordered
  12 May, licence applied for 12 May, painting finished 24 May, shelves 30 May, stock 1–5 June,
  sign now arriving 6 June. Those dates are consistent across 24.1, 24.4, 24.5, 24.7, the end
  test Listening Part 2 and its key. **If B1 moves the opening, it has to move all of them.**
- **The Saturday trial: nineteen orders against the thirty needed.** Unit 24.3's proposal and
  24.5's progress report, and the whole of the end test's Reading Part 3. It failed, and it is
  told as useful.
- **Four weeks is enough, so we are not late by waiting.** Unit 23.6; the sentence that keeps a
  rumour from becoming a purchase. B1's risk and reporting units should take it on.

---

## 7 · Register rules

- Money in **SYP**, written in full (*300,000*), never abbreviated or converted.
- Syrian places only, and real ones: Mezzeh, Jaramana, Homs, Hama, Aleppo, Latakia, Deir ez-Zor.
- No politics, no security services, no war. Roads close; nobody says why.
- A2 vocabulary throughout. Where a hard office word is needed it is **glossed in the key**, not
  avoided — that list is the point of the book.
- Full sentences in speaking tasks: *"a bare yes is the same as silence"* is house wording.
- Every cycle's dialogue has two voices who both want something. No speaker asks a question
  and answers it himself.

---

## 8 · Toolchain

```
pipeline/lib.js      frozen, byte-identical to the series copy — do not edit
pipeline/build.sh    build.sh <script> <Out.docx> [preview pages] | build.sh bound | build.sh zip <f.zip>
pipeline/bound.js    series file; PE_LEVEL / PE_BOOK select the title page and the unit range
pipeline/qa.js       the harness — run it with no arguments for the whole book, or `node qa.js 03 07`
```

⚠ `build.sh` exits 2 when no preview pages are given (the trailing `ls` finds nothing), which
breaks an `&&` chain. Run a second build separately, or append `; true`.

**The harness, as it now stands.** Every rule below was proved to fire by breaking a file and
restoring it; a rule nobody has seen fail is not a rule.

| check | what it refuses |
| --- | --- |
| `checkLoads` | a script that does not parse, exports a non-array, exports nothing, or holds an `undefined` element. ⚠ It now loads the **test papers** too, which is what catches a table whose widths array is shorter than its headings — that one renders no file and throws from inside `docx`, and the message is rewritten into something readable |
| `checkChars` | any character outside the house set (a stray Cyrillic word reached a table cell once and every text check passed it) |
| `checkUnit` | the house counts — 89 `stage()`, 14 `lesson()`, 14 `dlg()`, 7 of each box — plus the cast list, which is how Fadi was found |
| `checkKey` | `pb()` count = cycles − 1, and every SB stage code answered **in its own cycle** |
| `checkUnitCheck` | 8 language questions, an answer per question, each answer letter pointing at an option that exists, **no option equal to the word after the blank**, a marking box and a teacher's note |
| `checkOrdinals` | the cycle-7 ordinal claim, across the whole book, with the drift measured from the cycle that **omits** it |
| `checkLexis` | collisions across all twelve declared sets — never with a `sed` that truncates at the first underscore |
| `checkTest` | four papers, the right total, the right split, part marks adding to their paper, unbroken question numbering, the right **number** of questions, one answer letter per question, **and an answer in the key for every numbered question** |
| `checkNames` | a cast first name with the wrong surname. Nine `F. Haddad` bylines shipped at B1; one `Bassel Haddad` was caught here, in a writing sample in the end key |

**What Book 2 added to it.** Four changes, all of them making the harness book-aware rather than
patching a case:

- `const BOOK_OF = n => (n >= 13 ? 2 : 1)` and `UNIT_BREAKS = n => (BOOK_OF(n) === 2 ? 8 : 7)`, with
  `checkKey` using `nCyc - 1 + (BOOK_OF(n) === 2 ? 1 : 0)`. A Book 2 unit written with Book 1's
  break count is refused, which is why none was.
- `checkOrdinals` counts **within the book** (`ORD[(n - 1) % 12]`) and reads only from
  `CYCLE n.7` onwards, so prose earlier in a unit cannot satisfy or falsify the claim. Both
  failure modes were re-proved after the change.
- `checkTest` is spec-driven and runs over **four** pairs — `midtest`/`endtest` and
  `midtest2`/`endtest2` — each with its own total, question count and paper split.
- `CAST` gained `Technician` (Unit 20) and `Visitor` (Unit 23), each with the comment that says
  where and why, in the pattern set by `Fadi` at Unit 10.

Run it with no arguments for the whole tree, both books at once; it reports the lexis total and
the fault count on the last line. Warnings print with `?` and faults with `✗`. **The tree
currently reports 624 lexis items and 0 faults.** The 22 `?` warnings are all the same shape —
a unit-check audio script where one speaker reads several consecutive turns — and are correct.

---

## 9 · Faults found and fixed — watch for these again

1. **Answer Key three pages short of the series** — not missing substance (96 key stages against their 95, and wordier) but the missing `pb()` before each cycle. Convention, not content.
2. **A stray Cyrillic word** (`счёт`) in the Unit 3 key, in a table cell, past every check. → `checkChars`.
3. **A syntax error the harness passed** — a stray `]` in `ak04.js` made the file unparseable and the text-only harness called it clean. → `checkLoads`.
4. **A listening question with no correct option** (Unit 4: the forgotten item was the string; the options were gloves, tape, reference number).
5. **An unanswerable multiple choice** (Unit 5: choosing the right option wrote *"For for"*). → the duplicated-word rule.
6. **Unit 1's key weaker than the rest** — a prose line where every other unit had an answer table, a marking box and a teacher's note. → three new key rules.
7. **Mid-test answer clustering** — five of six Reading Part 1 answers were B, and two questions had more than one defensible answer. Redistributed and rewritten.
8. **A harness check that matched nothing.** The answer-row regex required a trailing comma the last item never has, so it silently matched zero rows and passed a key with a missing answer. Only found by testing the check itself.
9. **Fadi Saeed, five units undeclared.** The cast assertion caught him; the plan never did.
10. **The ordinal claim at Unit 12** — *"the twelfth and last unit"* put words between the ordinal and the noun, so the harness could not see the claim. This is the series' most reliable defect and it is now four levels in a row.
11. **`Bassel Haddad`** in the End-of-Book key's writing sample. Bassel is **Nassif**. → `checkNames`.
12. **A widths array one short of its headings** in the end key — the build threw from inside `docx` with an unreadable message and wrote no file. → the test papers are loaded by the harness now.

### Book 2's faults

13. **The widths-array fault again**, twice, on its first real Book 2 use in `midkey2.js`. The rule added at the end of Book 1 caught both. It is the series' most expensive fault — no file is written and the text-only checks call the tree clean — and it is now the one that fires most often.
14. **`ak13.js` reported "0 answers for 8 questions"** when it had all eight. The harness was reading the answer row from the exam-practice table earlier in the file. → the unit-check row is now taken from `stage('✓'` onwards, and `ak13` was also brought onto Book 1's `['Q','Answer','Why']` convention.
15. **A U+2212 minus sign** in `ak14.js` and **a CJK character** (月) inside the words *"when they check a月"* in `ak16.js`. Both from `checkChars`, both invisible on screen at that size.
16. **A stray `]`** in `ak15.js` made the file unparseable. → `checkLoads`, again.
17. **An ordinal false positive in `unit19.js`** — the prose *"this is the third unit in which that rule has done real work"* matched before cycle 7's own claim. Reworded **and** the check scoped to cycle 7; both failure modes (wrong ordinal, omitted ordinal) were re-proved afterwards.
18. **`Technician` and `Visitor` refused as off-cast speakers** at Units 20 and 23. Declared, not renamed.
19. **Thirteen lexis collisions**: five in Units 13–21 (`probation`/`job description`, `target`/`figures`, `breakdown`/`shortage`, `attend`, `quote`/`deposit`/`balance`) and eight in Units 23–24 (`exchange rate`, `turnover`, `founded`, `premises`, `workshop`, `wholesale`, `retail`, `traffic`, and then `currency`, `ground floor`, `yard`, `unit`, `shortlist`, `milestone`, `sign-off`, `approval`, `trial period` among the substitutes). Every one against a Book 1 unit written months earlier. All resolved by substitution; none by widening the rule.
20. **A repeated option in a unit check.** `unit24.js` question 2 offered `c) open` where the word after the blank was *open*. The duplicated-word rule, written during Book 1 for exactly this, fired on its first Book 2 occurrence.
21. **Six invisible answers in `endkey2.js`.** The listening gap table carried its question numbers in the **cells** rather than the headings, so the answer-coverage check saw none of them. The key was wrong, not the harness: numeric headings are the convention the rule was written against.

⚠ **The fault that did not happen.** No Book 2 unit was written with Book 1's page-break count,
because the harness computes the expected count from the unit number. That is the difference
between a harness that is extended and one that is patched, and it is worth preserving in B1.


---

## 10 · Next

**A2 is finished. The next thing in this track is B1 Business — a new tree, not an extension of
this one.** Nothing in `PLAN.md` covers it; a B1 plan has to be written and approved first, and
Unit 24.7's closing box already promises the learner that B1 is where *"I would be grateful if
you could"* finally earns its place.

Four things carry forward, and three of them are already in the toolchain:

1. **The harness is book-aware, not Book-1-shaped.** `qa.js` derives page breaks, ordinals and
   the test specifications from the unit number and the book. A B1 tree should copy it and add
   `BOOK_OF` cases rather than fork it. Each of its rules was proved to fire by breaking a file
   and restoring it; a rule nobody has seen fail is not a rule, and that is the standard to keep.
2. **`PE_BOOK` and `PE_LEVEL` select everything.** `PE_BOOK=2 ./build.sh bound` builds the Book 2
   volumes from the same folder as Book 1's; `build.sh zip` refreshes the plan copy and the
   pipeline zip. No per-book directory exists and none is wanted.
3. **The measured record lives in `PLAN.md` Part Five**, not in anybody's memory: the two page
   bands, the per-book `pb()` counts, the three key page-break conventions, the block-pricing
   finding, and the five occasions a `cantSplit` box cost a page. **Do not re-derive these.**
4. **The Series Bible is at v1.5 and carries this strand's record.** `proactive-english-a2-b2-sy/pipeline/bible.js`
   → `out/PE-SY_SERIES_BIBLE.docx`, 8 pp. What went in: the roadmap row marking the Business
   strand delivered; both measured page bands with their stated exceptions (Book 1 SB 29–32 /
   AK 15–17, Unit 12 at 33/18; Book 2 SB 35–36 / AK 18–21, Unit 24 at 37/22) and the note that
   **a strand which changes its word counts has changed its page band**; both test rows (8+6 and
   9+8; 8+7 and 10+7); and nine new findings in §7 — the **book-dependent `pb()` counts** and
   the three key conventions, **block pricing confirmed at A2** with the five measurements and
   the new rule that **a trim which does not move a page is reverted**, the widths-array fault
   that writes no file, lexis as a level-wide constraint, the cast-surname and institutional-voice
   checks, the gap-table numbering convention, the declared test-only mark, the ESP peer-review
   progression, and the two fixes an ordinal check needs before it can be trusted.

So Phase 7 is complete, with nothing deferred.

And one judgement, offered rather than assumed: the four measured facts of this level are worth
more than its 1,300 pages. They are that page counts past about 12,800 words are priced in
unsplittable blocks and not in words; that the series' own page-break conventions differ by
component **and** by book and were both wrong in the first draft; that thirteen lexis collisions
in one level all pointed backwards to units written months earlier; and that every structural
difference between two books of the same level can be asserted by a harness, if somebody takes
the trouble to measure it once instead of projecting it twice.
