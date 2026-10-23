# HANDOVER — Proactive Business English · A2 · Syria Edition

Running continuity file for the **Proactive Business English A2 Syria Edition** track.
Updated at the end of every turn. This file plus the bundle zip is enough to resume from zero.

- **File prefix:** `PBE-A2-B1-SY_` (Book 1) · `PBE-A2-B2-SY_` (Book 2, not yet begun)
  ⚠ *B1/B2 here mean **Book** 1 and 2, not CEFR. The level is A2 throughout. This is the
  series' own confusing convention and it is kept for consistency with the other trees.*
- **Tree:** `proactive-business-english-a2-sy/` · **Plan of record:** `PLAN.md` in the tree root.
- **Author:** Mo (Mohamad Khorbatli). His parameters are fixed and are not to be improved.
- **Built on:** the Proactive English cycle architecture already delivered at A2, B1, B2 and C1
  in this repository. `lib.js` is a byte-for-byte copy of the series file and has not been touched.

**STATUS: BOOK 1 IS COMPLETE — twelve units, eighty-four cycles, two tests, two bound volumes.**
Book 2 (Units 13–24) is planned in full in `PLAN.md` Part Four and has not been started.
One question from Part Eight of the plan is still open and is listed at §3 below.

---

## 0 · Turn log

| phase | what was delivered |
| --- | --- |
| **0** | Tree created, `lib.js` copied unchanged, `build.sh`, the QA harness, and **Unit 1 SB + AK built and measured**. The measured page band replaced the plan's projection on the day it was taken. |
| **1** | **Units 2–6** (SB + AK). |
| **2** | **Mid-Book Test + key**, measured at 8 + 6 — the projection exactly. Its mark split follows the plan (18·18·12·12) and so departs from the general A2's own mid-test; see §4. |
| **3** | **Units 7–12** (SB + AK). Fadi Saeed declared to the cast at Unit 10, after the harness refused him. |
| **4** | **End-of-Book Test + key** (100 marks, 50 questions), **both bound volumes**, this handover and the delivery bundle. Book 1 closed. Four harness rules added and each proved to fire. |

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
| Complete delivery bundle | 33 files | `PBE-A2-B1-SY_COMPLETE_DELIVERY.zip` — every .docx, this handover, a copy of `PLAN.md`, and `PBE-A2-B1-SY_pipeline_latest.zip` (the whole `pipeline/` tree) |

**365 pp of units, 197 pp of keys**, plus 17 pp of tests and 14 pp of test keys.
Both bound volumes carry the tests in teaching order — Mid-Book after Unit 6, End-of-Book after Unit 12.

⚠ The bound Answer Key is 213 and the arithmetic gives 212. **Page 33 is blank.** Unit 2's key
ends flush with the bottom of its last page and `bound.js` emits a `pb()` before every
component, so the break lands on an empty page. It is an artefact of the bound build, not of
the key: the standalone `Unit02_AnswerKey.docx` is 15 pages with no blank. The Student's Book
has no such page, which is why its arithmetic is exact. `bound.js` is the series' own file and
has deliberately not been changed to suppress this — the same conditional would have to go
into four other trees, and that is the author's call.

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
  *"the most valuable page in this book."* Book 2 should extend it, not restart it.

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

---

## 10 · Next

**Phase 5–7: Book 2, Units 13–24.** Planned in full in `PLAN.md` Part Four: Hala Mourad joins
at Unit 13, the company turns outwards (suppliers, complaints, the branch), and Unit 24 closes
on the year-end Monday meeting. Same spine, same 7 × 13, the same two tests, the same bands.

Before starting Book 2, three things carry forward:
1. Run `node qa.js` once against Book 1 to confirm the tree is still clean after any edit.
2. `bound.js` picks Book 2 up automatically from `PE_BOOK=2`; the test files are `midtest2.js`
   and `endtest2.js` by convention, beside Book 1's.
3. The Series Bible is to be updated to v1.5 with this book's measured record — the superseded
   page band, the block-pricing finding at A2, and the two page-break conventions at §4 above.
