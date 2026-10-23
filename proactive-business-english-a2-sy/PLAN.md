# Proactive Business English — A2, Syria Edition
## Books 1 and 2 · the full plan

**What this is.** A Business English course at A2 built on the **Proactive English**
cycle architecture — the same 7-cycle, 13-stage spine already delivered at A2, B1, B2 and
C1 in this repository — with the workplace as its setting instead of the language centre.
Two books, 24 units, 168 cycles, Student's Book + separate Answer Key, two tests per book.

⚠ **One reading to confirm.** You wrote *Pervasive English*; I have read that as
**Proactive English**, the strand in `proactive-english-a2-b2-sy`, `-b1-sy`, `-b2-sy` and
`-c1-sy`. Everything below is built on that. If you meant a different series, stop me here.

| | |
| --- | --- |
| **Tree** | `proactive-business-english-a2-sy/` |
| **Files** | `PBE-A2-B1-SY_Unit01_StudentsBook.docx` · `…_AnswerKey.docx` ⚠ *B1/B2 here mean **Book** 1 and 2, not CEFR — the series' existing and confusing convention, kept for consistency* |
| **Level** | A2 throughout (not A2→B1) |
| **Author** | Mohamad Khorbatli |
| **Relationship to the existing A2** | Same spine, same grammar ladder, same cycle, new setting, new cast, new lexis. This is the series' own declared ESP method: *"ESP strands: same function/grammar spine, swapped scenarios and ESP lexis."* |

---

# PART ONE — THE ARCHITECTURE INHERITED, AS MEASURED

Not from memory. Every figure below was counted in the delivered A2 source in
`proactive-english-a2-b2-sy/pipeline`.

## 1 · The cycle — 13 stages, 90 minutes

A cycle is one 90-minute lesson in two halves, and it is the unit of the whole series.

| | Lesson A — Speaking (45 min) | | Lesson B — Writing (45 min) |
| ---: | --- | ---: | --- |
| **1** | Get ready | **5** | Read (+ **Writer's box**) |
| **2** | Listen and read (+ **Language box**) | **6** | Write with help |
| **3** | Practise | **6P** | Check together (peer review) |
| **3R** | Perform | **6R** | Share |
| **4** | Your turn | **7** | Write freely |
| **4R** | Report | **7P** | Respond |
| | | **7R** | Share |
| | | **HW** | Homework — reply to your partner |

**Seven cycles per unit.** Cycles 1–6 are new language. **Cycle 7 is Review & Mediate**:
4R becomes mediation, and Lesson B becomes exam practice — a reading task, a guided
email, an A2 Key Writing Part 6, a 15-minute unit check, and the *I can…* checklist.

## 2 · House figures per unit — counted, identical across Units 1, 2 and 13

| call | count | what it is |
| --- | ---: | --- |
| `stage()` | **89** | the 13 stages × 7 cycles, less the two cycle-7 substitutions |
| `lesson()` | **14** | 7 cycles × (Lesson A + Lesson B) |
| `dlg()` | **14** | two audio-scripted dialogues per cycle |
| `box('Language box'…)` | **7** | one grammar point per cycle |
| "Write with help" / "Write freely" | **7 / 7** | one of each per cycle |
| `pb()` | **7** (Book 1) · **8** (Book 2) | page breaks |
| `lines()` | **8** | ruled writing blocks |

⚠ **One inconsistency found in the existing A2, which this book will not repeat.** Unit 1
carries **6** `box("Writer's box")` and **6** `box('Homework')` calls; every later unit
carries **1** of each, the rest having been folded into stage prose. The bible's own
lesson applies — *"a house count that passes an empty list is not a check; assert the
count before measuring the contents."* **This book fixes both at 7 (one per cycle) in
every unit, and the harness asserts it.**

## 3 · Measured page bands (the bible's §7, which supersedes any projection)

| | Student's Book / unit | Answer Key / unit | Bound SB | Bound AK |
| --- | ---: | ---: | ---: | ---: |
| A2 Book 1 (Units 1–12) | **31** | 17–22 | — | — |
| A2 Book 2 (Units 13–24) | **31–33** | 18–22 | **394** | **270** |

### ⚠ Superseded by measurement — Phase 0, Unit 1

The band above is the bible's **recorded** figure for the general A2. It does not
reproduce in this container. Rebuilding the general A2's *own* `unit01.js` / `ak01.js`
here, unchanged, renders **28 SB / 16 AK** against the bible's recorded 31 / 17–22, so
the recorded band is renderer-dependent and cannot be used as a target. The only usable
comparison is like-for-like in this container, and that is what Phase 0 measured:

| Unit 1, built here | Student's Book | Answer Key |
| --- | ---: | ---: |
| General Proactive English A2 Book 1 (the series source) | 28 | 16 |
| **Proactive Business English A2 Book 1 (this book)** | **29** | **15** |

The Student's Book sits one page above the series source and carries more in it — 8,904
words against 7,746, and 38 tables against 30 — so the extra page is content, not
padding. The Answer Key first rendered **13**, three short of the source's 16. The gap
was not missing substance: coverage was already complete (96 key stages against the
source key's 95; every one of the 89 Student's Book stages answered) and the key was the
wordier of the two (4,500 against 4,272). It was a **missed house convention** — the
series key opens every cycle after the first on a fresh page (`pb()` × 6), and this key
ran continuously. With the six breaks restored it renders **15**.

Two rules were added to `qa.js` so neither fault can ship again, and both were proved to
bite by breaking the key on purpose before restoring it:

* `pb()` in a key must equal *(cycles − 1)* — the fresh-page convention, asserted;
* every stage code in a Student's Book cycle must have a key entry **in that same
  cycle** — coverage per cycle, not a count across the file, which is the bible's
  recorded "a house count that passes an empty list" fault in its key-shaped form.

**The band to hold for Units 2–12 is therefore SB 29 ± 2, AK 15 ± 2, measured in this
container.** Hold the band; do not aim at its midpoint.

### ⚠ The Student's Book band widened once, at Unit 11 — and the cause is not verbal

Units 1–8 rendered 29, 29, 29, 29, 30, 31, 31, 30. Unit 9 rendered 32 and was trimmed to
31 by cutting about 70 words of repetition, which worked. Unit 10 rendered 31. **Unit 11
rendered 32, and about 400 words were cut from it across six cycles without the page
count moving at all.**

Rendering the last two pages showed why. Page 32 holds two things: the three ruled lines
of the unit check's writing task, and the closing **"I can…" box**. `box()` is `cantSplit`,
so an eight-item checklist that does not fit in the space left on page 31 does not break —
it moves whole to a page of its own, and page 31 ends with a hand's width of white below
the audio script. **The overflow is one unsplittable block at the very end of the unit, and
no amount of trimming inside cycles 11.1–11.6 can reach it.**

The checklist has eight items in every unit of this strand — seven cycles and one line for
the writing genres — so shortening it to win a page would break the series pattern to fix
a rendering artefact. **The band is widened instead: SB 29–32, AK 15–17.** This is the same
finding the bible records at C1 ("at and above C1, a page is priced in unsplittable blocks
and not in words"); it is recorded here because it turns out to apply at **A2** as well,
once a unit's prose reaches about 12,800 words. Do not gut a cycle to hit a page.

## 4 · Tests and word counts, as built at A2

**Tests:** Mid-Book **8 pages + key 6**; End-of-Book **9 + key 8**; **60 marks / 100**;
paper split **30 · 30 · 20 · 20**, which is **A2 Key's own weighting** — the bible is
explicit that the split follows the examination, not house habit.

**Word counts:** guided writing ≥25 (Book 1) / ≥35 (Book 2) · free writing 35–60 / 60–100
· model texts 45–100 / 100–180.

### ⚠ As built — a deliberate departure from the general A2's own Mid-Book Test

The bible is explicit that the split follows the examination, and at A2 that is A2 Key's
30 · 30 · 20 · 20. The general A2's **End**-of-Book Test follows it exactly (30 · 30 ·
20 · 20 of 100). Its **Mid**-Book Test does not: it is Reading 20 · Writing 15 ·
Listening 15 · Speaking 10, which is 33 · 25 · 25 · 17.

This book's Mid-Book Test follows the rule rather than the precedent: **Reading 18 ·
Writing 18 · Listening 12 · Speaking 12 of 60**, which is 30 · 30 · 20 · 20 exactly.
A candidate's mid-book percentage is therefore comparable with their end-of-book
percentage and with a real A2 Key result; in the source book the two tests measure
differently-shaped things and the halves of the course cannot be compared.

`qa.js` now asserts the split, the part-mark arithmetic, the four-paper total and the
question numbering of any test paper, so the next test in this strand cannot drift.

**Peer-review progression** (fixed, four bands): Units 1–6 capitals & full stops · *be* in
every sentence · he/she + -s · all parts present → Units 7–12 + past tense · greeting &
ending · a/an/the → Units 13–18 + linkers · all three content points · paragraphs →
Units 19–24 + tense consistency · ≥35 words · one extra detail.

## 5 · Toolchain — already built and frozen

`pipeline/lib.js` (frozen, byte-identical across the A2, B1 and B2 trees) gives
`p h1 h2 h3 pb sp stage lesson box dlg table lines item build bullet`. `build.sh <script>
<Out.docx>` renders and reports the page count; `build.sh bound` binds; `build.sh zip`
bundles. **This book copies `lib.js` unchanged** and adds nothing to it.

⚠ **Two frozen behaviours to design around, both recorded in the bible.**
`lines(N)` prints **one** rule, not N — consecutive identically-bordered empty paragraphs
merge — so a ruled writing block reads as a blank page to any text sweep. And `box()` is
`cantSplit`, so a page is priced in **blocks**, not words.

---

# PART TWO — WHAT MAKES THIS A BUSINESS BOOK

## 6 · The examination anchor — a decision you should see

There is **no Cambridge Business English examination at A2.** The business ladder starts
at B1 (B1 Business Preliminary, formerly BEC Preliminary). So:

- **Test mechanics stay anchored to A2 Key** — its four papers, its 30·30·20·20 weighting,
  its Reading Part 6 and Writing Part 6/7 task shapes. A learner finishing this book can
  sit A2 Key and recognise every task.
- **Task *content* is drawn from Linguaskill Business**, which does report at A2 and whose
  task types (short workplace emails, notices, messages, charts) are the right ones.
- **Cycle 7 therefore says "exam practice (A2 Key Reading Part 3 / Writing Part 6)" exactly
  as the general A2 does**, but every text in it is a workplace text.

⚠ If you would rather anchor to **B1 Business Preliminary** and present this as a
pre-BEC course, the test specification changes and I should know before Phase 0.

## 7 · Setting and cast

**Sham Trading Co., Mezzeh, Damascus** — a small import and distribution company: an
office on the second floor, a warehouse behind it, a small trade counter at the front.
Secondary settings: a supplier in Aleppo, a branch office in Homs, a shipping agent in
Latakia, a bank in Mezzeh, a customer's shop in Souq al-Hamidiyeh.

| Character | Age | From / lives | Job | Fixed facts |
| --- | ---: | --- | --- | --- |
| **Nour Mansour** | 24 | Damascus | administrative assistant — **new in Unit 1** | the learner's proxy; studied commerce at Damascus University; lives with her parents in Mezzeh; first job; nour.mansour@shamtrading.sy |
| **Mr Khaled Ayoub** | 48 | Damascus | office manager | runs the Monday meeting; signs every order over 500,000 SYP; patient, asks questions rather than giving orders |
| **Nadia Sayegh** | 33 | Homs; lives in Damascus | accountant | invoices, payments, the monthly figures; works Sun–Thu, 8–4; two children |
| **Bassel Nassif** | 29 | Aleppo; lives in Damascus | sales | travels to Homs and Aleppo; knows every customer by name; always slightly late |
| **Abu Yasser** (Yasser Khalil) | 52 | Damascus | warehouse supervisor | thirty years in the trade; keeps the stock book by hand as well as on the system; says "check it twice" |
| **Hala Mourad** | 27 | Latakia | customer service — **joins in Unit 13** | handles complaints and repairs; calm on the telephone |
| **Mr Fouad Tarabishi** | — | Damascus | customer, owns a shop in Souq al-Hamidiyeh | orders monthly; pays cash; a long relationship |
| **Ms Dima Shamsi** | — | Aleppo | supplier contact | the company buys its boxes and packaging from her |
| **Fadi Saeed** | 31 | Jaramana | driver — **declared in Unit 10** | the small van and the lorry; writes his delivery notes in the yard at the end of the day |

⚠ **Fadi was not in the plan.** He appears from Unit 1 in the Answer Key's sample answers
as an invented learner ("Fadi Saeed, driver"), is named as the company's driver in Unit 6's
delivery note, and by Unit 10 is speaking in a dialogue — at which point `qa.js` refused the
unit, because the cast list is asserted and he was not on it. He is a good character and the
usage was consistent across five units, so he is **added to the cast rather than removed from
the book**, and recorded here. The harness caught him; the plan did not.

**No clash with the existing casts**: the general A2 (Lina Haddad, Rami Khoury, Maya
Nasser, Omar Darwish, Huda Saleh, Karim) and the ESP cybersecurity books (Maher, Nabil,
Rana, Tarek, Lina, Mr Aboud) share no surname or first name with this list.

## 8 · Style sheet — inherited unchanged

British spelling · SYP / "pounds" in speech · 5.30 pm in text, "half past five" in speech
· Syrian names and real cities · no alcohol, dating or party-drinking · same-gender
pairing always available · "you can invent details" on any personal-data task ·
contractions in dialogue, full forms in grammar tables · audio scripts printed at the
point of use, labelled 🔊 Track U.N, never in an appendix · **Answer Key gives an answer
or a full sample for every task, including brainstorms, speaking, reports, peer-review
checklists and homework.**

**Added for this strand:** money and quantities always in figures a real small company
would use; no company is named after a real Syrian business; power cuts, slow transfers,
imports through a third country and cash payment appear as ordinary facts of the working
day, never as complaint.

---

# PART THREE — BOOK 1 · UNITS 1–12, CYCLE BY CYCLE

The grammar ladder is **the general A2's own ladder, unchanged**, so a learner can move
between the two books. Only the scenario and the lexis are business.

### Unit 1 · Meeting People at Work
*Nour's first week. Lesson B genre: a personal-details form, then a short self-introduction email.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 1.1 | Greeting and saying who you are | *be* (present) | Nour arrives; Mr Ayoub meets her at the door |
| 1.2 | Introducing a third person | possessives and object pronouns | Nour is introduced to Nadia and Abu Yasser |
| 1.3 | Spelling, email and phone | Wh- questions with *be* | the company email address, letter by letter |
| 1.4 | Saying who you work for | *have got* | departments, how many staff, which floor |
| 1.5 | Saying what you do | verb + -ing | "I look after the orders"; what Nour likes doing |
| 1.6 | Asking for repetition | imperatives and *Can you…?* | the telephone is bad; "could you repeat that?" |
| 1.7 | **Review & Mediate** | review | the staff notice board → A2 Key Reading & Writing |

### Unit 2 · The Working Day
*Lesson B genre: a short note about your own working day; a message about a change of time.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 2.1 | Describing a routine | present simple (+ / –) | Nour's first full day, hour by hour |
| 2.2 | Asking about times | questions about times; *at / on / in* | when the office and the warehouse open |
| 2.3 | Saying how often | *how often?* + frequency adverbs | how often stock is counted, email checked |
| 2.4 | Saying what is happening now | present continuous | "I'm working on the Homs order" |
| 2.5 | Asking about someone else's day | present simple questions | Bassel's day on the road |
| 2.6 | Asking someone to do something | requests | "Could you send it before five?" |
| 2.7 | **Review & Mediate** | review | the weekly timetable → exam practice |

### Unit 3 · The Office and the Warehouse
*Lesson B genre: describing a workplace; a short notice about where things are kept.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 3.1 | Saying what there is | *there is / there are* | the office: desks, printer, cupboard, window |
| 3.2 | Saying where something is | prepositions of place | "Where's the invoice file?" |
| 3.3 | Asking what you have in stock | *some / any* | Abu Yasser and the shelves |
| 3.4 | Describing equipment | adjectives; *too / very* | the new shelves, the old printer |
| 3.5 | Giving directions inside a site | imperatives for directions | from the office to the loading door |
| 3.6 | Saying what something is made of | *made of*; *it's a kind of* | boxes, pallets, plastic wrap |
| 3.7 | **Review & Mediate** | review | the floor plan and the safety notice |

### Unit 4 · Stock, Orders and Quantities
*Lesson B genre: a stock note; a short order by email.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 4.1 | Counting what you have | countable / uncountable | boxes, packets, rolls, paper, tape |
| 4.2 | Asking about quantity | *much / many / a lot of* | "How much packaging have we got?" |
| 4.3 | Saying what you have not got | *some / any / none* | the Thursday shortage |
| 4.4 | Describing a process in order | *first, then, after that, finally* | how an order is checked and signed |
| 4.5 | Placing an order | *Can I…? / I'd like…* | Nour telephones Ms Shamsi in Aleppo |
| 4.6 | Checking an order is complete | questions with *all / any* | "Is that everything?" |
| 4.7 | **Review & Mediate** | review | the stock list and the order form |

### Unit 5 · Prices, Payment and Invoices
*Lesson B genre: a short price note to a customer; a receipt explained.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 5.1 | Asking and giving a price | *how much / how many* | the trade counter |
| 5.2 | Comparing two offers | comparatives | two suppliers, two prices |
| 5.3 | Saying which is best | superlatives | the cheapest, the nearest, the fastest |
| 5.4 | Saying something is too much | *too / enough* | "It's too expensive for this order" |
| 5.5 | Saying whose it is | possessive pronouns | "Is this invoice ours or theirs?" |
| 5.6 | Paying and getting change | *this / that / these / those* | cash, card, the receipt book |
| 5.7 | **Review & Mediate** | review | the invoice and the receipt |

### Unit 6 · Deliveries and Transport
*Lesson B genre: a delivery note; a message explaining a delay.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 6.1 | Saying how something travels | *by* + transport; *on foot* | van, lorry, bus, service |
| 6.2 | Asking how long and how far | *how long / how far* | Damascus to Homs, Damascus to Aleppo |
| 6.3 | Giving a site rule | *must / mustn't* | "You mustn't park at the loading door" |
| 6.4 | Proposing a plan | *Let's / Why don't we / Shall we* | which day to send the Homs order |
| 6.5 | Giving a reason | *because*; *to* + purpose | why the small van, why Tuesday |
| 6.6 | Explaining a delay | present continuous + time | the road is closed; it's arriving at four |
| 6.7 | **Review & Mediate** | review | the delivery note and the road sign |

### Unit 7 · Appointments and Arrangements
*Lesson B genre: a meeting invitation; a reply accepting or changing it.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 7.1 | Saying what you can do | *can / can't* | "I can use the accounts system" |
| 7.2 | Making a polite request | *could* | "Could you come at ten?" |
| 7.3 | Talking about your diary | present continuous for future | "What are you doing on Thursday?" |
| 7.4 | Suggesting another time | *How about…? / What about…?* | moving the supplier meeting |
| 7.5 | Accepting and refusing | *I'd love to / I'm afraid* | two meetings on one morning |
| 7.6 | Saying what you prefer | *prefer / I'd rather* | morning or afternoon, office or site |
| 7.7 | **Review & Mediate** | review | the meeting invitation |

### Unit 8 · Last Week at Work
*Lesson B genre: a short report of the week; a note of what was done.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 8.1 | Saying what you did | past simple, regular | "I checked the stock and signed the note" |
| 8.2 | Saying what happened | past simple, irregular | went, saw, had, did, met, sent |
| 8.3 | Describing how it was | *was / were* | "It was busy last week" |
| 8.4 | Asking about the past | past questions with *did* | "When did you send the invoice?" |
| 8.5 | Telling a sequence | past + sequencers | the Tuesday the delivery went wrong |
| 8.6 | Reacting to news | *Really? That's good news.* | Bassel's big order |
| 8.7 | **Review & Mediate** | review | the week's report |

### Unit 9 · Duties, Rules and Permission
*Lesson B genre: a duties list for a new assistant; a short permission email.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 9.1 | Saying what you look after | *be responsible for / look after* | Nour's duties after one month |
| 9.2 | Giving a company rule | *must* | badges, signing in, the stock book |
| 9.3 | Saying what is not necessary | *have to / don't have to* | Saturdays, overtime, the uniform |
| 9.4 | Asking permission | *Is it OK if…? / Can I…?* | leaving early for the clinic |
| 9.5 | Taking a message | *can* for requests | the telephone while Mr Ayoub is out |
| 9.6 | Writing a simple work email | fixed phrases | *Please find attached · Thanks in advance* |
| 9.7 | **Review & Mediate** | review | the staff rules |

### Unit 10 · Health and Safety at Work
*Lesson B genre: a safety notice; a short absence message.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 10.1 | Saying what is wrong | *hurt / have got a…* | Abu Yasser's back; a cut hand |
| 10.2 | Giving advice | *should / shouldn't* | lifting, screens, breaks |
| 10.3 | Giving instructions with frequency | frequency + time | "twice a day, after meals" |
| 10.4 | Making an appointment | *have got* + appointment | the clinic in Mezzeh |
| 10.5 | Giving a safety instruction | negative imperatives | "Don't lift that alone" |
| 10.6 | Wishing someone well | fixed phrases | *Get well soon · Take care* |
| 10.7 | **Review & Mediate** | review | the safety notice |

### Unit 11 · Business Travel
*Lesson B genre: a travel plan; a hotel reservation email.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 11.1 | Talking about plans | *going to* | Bassel is going to visit the Homs branch |
| 11.2 | Booking a room | *a / an*, numbers, nights | single, two nights, breakfast |
| 11.3 | Talking about the weather | *it's* + adjective | Aleppo in January, Deir ez-Zor in July |
| 11.4 | Asking about a service | yes/no questions | "Is breakfast included? Is there Wi-Fi?" |
| 11.5 | Recommending | *You should visit…* | what to see in Latakia in one free evening |
| 11.6 | Reading a timetable | present simple for timetables | "The bus leaves at seven" |
| 11.7 | **Review & Mediate** | review | the travel plan and the hotel page |

### Unit 12 · Courtesy and Company Customs
*Lesson B genre: a thank-you note; an invitation to the company's Eid gathering.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 12.1 | Congratulating | fixed phrases | the new branch, a colleague's wedding |
| 12.2 | Describing a custom | *It's polite to…* | tea with a customer, arriving early |
| 12.3 | Apologising | *sorry for / sorry that* | a late reply, a wrong figure |
| 12.4 | Thanking | *thank you for* + -ing | Ms Shamsi's quick delivery |
| 12.5 | Offering hospitality | *Would you like…?* | a customer waiting at the counter |
| 12.6 | Closing politely | fixed phrases | *Please give my regards to…* |
| 12.7 | **Review & Mediate** | review | the invitation and the thank-you note |

---

# PART FOUR — BOOK 2 · UNITS 13–24, CYCLE BY CYCLE

Book 2 adds **Hala Mourad** (customer service) and opens the company outwards: suppliers,
customers, the city, the year ahead. Word counts step up (guided ≥35, free 60–100, models
100–180) and the peer-review bands move to 3 and 4.

### Unit 13 · Experience and the CV
*Lesson B genre: a short CV; a covering message.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 13.1 | Saying how long | present perfect with *for / since* | Nadia has worked here for eleven years |
| 13.2 | Asking about experience | *ever / never* | "Have you ever used this system?" |
| 13.3 | Saying what is done already | *already / yet / just* | the Monday checklist |
| 13.4 | Finished time vs now | present perfect vs past simple | "I worked there in 2019" |
| 13.5 | Describing skills | skills vocabulary | what Nour can put on a CV after a year |
| 13.6 | Answering "tell me about yourself" | a short spoken answer | Hala's interview, reported by Nour |
| 13.7 | **Review & Mediate** | review | the job advertisement and the CV |

### Unit 14 · Plans and Forecasts
*Lesson B genre: a short plan with three steps; a note on the figures.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 14.1 | Company plans | *going to* | a second counter at the front |
| 14.2 | Predicting | *will* | "Sales will rise after Eid" |
| 14.3 | Saying something is possible | *may / might* | the road, the power, the shipment |
| 14.4 | Linking a condition to a result | first conditional | "If we order now, we'll get it Tuesday" |
| 14.5 | Describing a simple chart | *went up / down by…* | three months of sales |
| 14.6 | Giving an opinion about the future | *I think… will…* | the Monday meeting |
| 14.7 | **Review & Mediate** | review | the sales chart and the forecast note |

### Unit 15 · Problems and Solutions at Work
*Lesson B genre: a problem report; a message proposing a solution.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 15.1 | Describing a problem | present continuous + negatives | the printer, the system, the van |
| 15.2 | Suggesting | *Why don't we…? / We could…* | three ways round a late delivery |
| 15.3 | Saying what will happen if | first conditional, negative | "If we wait, we'll lose the order" |
| 15.4 | Saying what was done | simple passive (past) | "It was delivered yesterday" |
| 15.5 | Breaking bad news gently | *I'm afraid…* | telling Mr Tarabishi his order is short |
| 15.6 | Buying time | *Let me check and call you back* | the telephone, mid-problem |
| 15.7 | **Review & Mediate** | review | the problem report |

### Unit 16 · Then and Now
*Lesson B genre: a short company history; a paragraph on what has changed.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 16.1 | Past habits | *used to* | "We used to write every order by hand" |
| 16.2 | Change up to now | present perfect for change | the company has grown to nineteen staff |
| 16.3 | Comparing then and now | *as … as* | "It isn't as quiet as it was" |
| 16.4 | Measuring a period | *since / for* | prices since March |
| 16.5 | Describing the old way | past simple + *there was/were* | one van, one telephone, one ledger |
| 16.6 | Explaining why it changed | *because of / so* | Abu Yasser explains the stock book |
| 16.7 | **Review & Mediate** | review | the company history |

### Unit 17 · Training and Learning at Work
*Lesson B genre: a request to attend a course; a note of what you learned.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 17.1 | Saying what you want to learn | *would like to* | Nour and the accounts software |
| 17.2 | Talking about a course | duration and schedule | three weeks, Tuesdays, 5–7 pm |
| 17.3 | Saying what is needed | *need to* | "You need to bring your badge" |
| 17.4 | Saying something is easy or hard | *it's* + adj + *to* | "It's easy to use once you learn it" |
| 17.5 | Describing strengths | *good at / bad at* | numbers, telephone, writing |
| 17.6 | Asking someone to show you | *Could you show me how to…?* | Nadia teaches Nour the invoice screen |
| 17.7 | **Review & Mediate** | review | the course notice |

### Unit 18 · Technology at Work
*Lesson B genre: a short instruction sheet; an email with an attachment.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 18.1 | Email conventions | fixed phrases | *Please find attached · I am writing to…* |
| 18.2 | Giving instructions | imperatives, sequence | how to open the order screen |
| 18.3 | Describing a failure | *isn't working / is down* | the morning the system is down |
| 18.4 | Comparing tools | comparatives revisited | paper book and system, side by side |
| 18.5 | Saying where things are kept | prepositions + folders | the shared folder, the stock file |
| 18.6 | A safe-working rule | *don't* + imperative | a message nobody expected |
| 18.7 | **Review & Mediate** | review | the IT notice |

### Unit 19 · Suppliers and Partners
*Lesson B genre: an enquiry email; a short note comparing two suppliers.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 19.1 | Saying where you buy from | *buy … from* | boxes from Aleppo, tape from Damascus |
| 19.2 | Asking for a better price | *Could you…? / Would you…?* | Nour's first negotiation, with Mr Ayoub listening |
| 19.3 | Making a conditional offer | first conditional | "If you order a hundred, we'll reduce it" |
| 19.4 | Describing a long relationship | present perfect + *for* | eleven years with Ms Shamsi |
| 19.5 | Describing a partner | adjectives of reliability | *reliable, fair, slow, always on time* |
| 19.6 | Agreeing terms | *Let's agree on…* | the delivery day and the price |
| 19.7 | **Review & Mediate** | review | the quotation |

### Unit 20 · Services and Repairs
*Lesson B genre: a service request; a follow-up message.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 20.1 | Saying something needs work | *need* + -ing | the air conditioner, the shutter, the van |
| 20.2 | Arranging a visit | *When can you…?* | the engineer and a four-hour window |
| 20.3 | Following up | *It's still not working* | the second telephone call |
| 20.4 | Saying what was done | passive, past | "It was repaired last week" |
| 20.5 | Asking the cost | *How much will it cost?* | an estimate before the work |
| 20.6 | Closing politely | thanks + confirmation | "Thank you for coming so quickly" |
| 20.7 | **Review & Mediate** | review | the service request |

### Unit 21 · Quality and Complaints
*Lesson B genre: a letter of complaint; a reply to a complaint.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 21.1 | Reporting damage | passive + numbers | two of twenty boxes, crushed |
| 21.2 | Complaining politely | *I'd like to make a complaint* | Nour telephones Aleppo |
| 21.3 | Apologising for a company | *I'm very sorry about that* | Hala takes a call from Mr Tarabishi |
| 21.4 | Putting it right | *We'll send a replacement* | what the company offers, and when |
| 21.5 | Stating a quality rule | *must be* + past participle | goods checked on arrival |
| 21.6 | Asking about a guarantee | *Is it under guarantee?* | the shutter motor, four months old |
| 21.7 | **Review & Mediate** | review | the complaint letter |

### Unit 22 · Emails and Requests
*Lesson B genre: a formal request email; the same message written two ways.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 22.1 | Opening an email | *Dear Mr… / Dear Sir or Madam* | to a customer, to a supplier, to a colleague |
| 22.2 | Stating your purpose | *I am writing to…* | asking for a price, a date, a document |
| 22.3 | Making a formal request | *Could you possibly…?* | a document the bank needs |
| 22.4 | Giving a deadline | *by* + day; *before* | "Please let me know by Thursday" |
| 22.5 | Closing | *Thank you in advance · Best regards* | the four closings and when to use each |
| 22.6 | Choosing the register | formal vs friendly | the same request to Abu Yasser and to the bank |
| 22.7 | **Review & Mediate** | review | two emails compared |

### Unit 23 · The Company and the City
*Lesson B genre: a short company profile; a paragraph on doing business in your city.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 23.1 | Describing a company | past simple + *since* | Sham Trading, founded 1998 |
| 23.2 | Describing local business | *there is / are* revisited | the small businesses of Mezzeh |
| 23.3 | Comparing places and times | comparatives revisited | the market on Friday and on Monday |
| 23.4 | Describing change in the city | simple passive | a new road, a rebuilt souq |
| 23.5 | Explaining difficult conditions | *because of* | power, transfers, imports — plainly, not as complaint |
| 23.6 | Talking about business news | *Did you read about…?* | the Monday meeting's five minutes of news |
| 23.7 | **Review & Mediate** | review | the local business page |

### Unit 24 · Looking Forward
*Lesson B genre: a three-step proposal; the end-of-course reflection.*

| # | Function | Language box | Scenario |
| ---: | --- | --- | --- |
| 24.1 | Company plans for the year | *going to* revisited | what Mr Ayoub tells the Monday meeting |
| 24.2 | Personal goals | *I hope to…* | Nour after two years |
| 24.3 | Ambitions | *We'd like to…* | a branch in Latakia |
| 24.4 | Making a simple proposal | sequencers + *because* | Nour's three-step proposal, her own idea |
| 24.5 | Reviewing what you learned | present perfect | the year in the company, and in English |
| 24.6 | Closing well | thanks and good wishes | the last Monday meeting of the course |
| 24.7 | **Review & Mediate** | review | the year-end note and the course review |

---

# PART FIVE — TESTS

| | pages | key | marks | papers |
| --- | ---: | ---: | ---: | --- |
| **Book 1 Mid-Book Test** (after Unit 6) | 8 | 6 | 60 | Reading 30 · Writing 30 · Listening 20 · Speaking 20 |
| **Book 1 End-of-Book Test** (after Unit 12) | 9 | 8 | 100 | same weighting |
| **Book 2 Mid-Book Test** (after Unit 18) | 8 | 6 | 60 | same |
| **Book 2 End-of-Book Test** (after Unit 24) | 9 | 8 | 100 | same |

Every text in every paper is a workplace text: a notice, an order, an invoice, a short
email, a stock list, a telephone message. ⚠ **These page figures are the measured A2
figures and are a projection here.** The bible is emphatic that *every* projection built
from unit density has over-estimated test length at every level — so the first test built
is measured and the figure replaces this table.

---

# PART SIX — HOUSE FIGURES AND FIDELITY CRITERIA

The book is correct when all **fourteen** hold.

1. **24 units × 7 cycles = 168 cycles**, each complete in all 13 stages.
2. Per unit: **89 `stage()` · 14 `lesson()` · 14 `dlg()` · 7 Language boxes · 7 Writer's boxes · 7 Homework boxes · 7 "Write with help" · 7 "Write freely"**. ⚠ The 7/7 for Writer's and Homework is this book's correction of the existing A2's 6-then-1 inconsistency, and the harness asserts the **count** before it measures the contents.
3. **Cycle 7 of every unit is Review & Mediate**: 4R is mediation; Lesson B is exam practice + the 15-minute unit check + the *I can…* checklist.
4. **Every task has an answer or a full sample in the Answer Key** — brainstorms, speaking, reports, peer-review checklists, feedback slips, free writing and homework included.
5. **Audio scripts printed at the point of use**, labelled 🔊 Track *U.N*, never in an appendix. Track numbering restarts per unit.
6. Word counts: guided ≥25 / ≥35 · free 35–60 / 60–100 · models 45–100 / 100–180.
7. Peer-review bands follow the four-band progression, unchanged.
8. **The grammar ladder matches the general A2 unit for unit**, so the two books are interchangeable within a level.
9. **No lexical item repeats across the 24 units.** Checked in the source with `tr '·' '\n' … sort | uniq -d` — ⚠ never with a `sed` that strips at the first underscore, which drops the last item of every set and has let two collisions through before.
10. Page bands: ⚠ the bible's SB **31**, AK **17–22** does not reproduce in this container and is **superseded** — the measured band is **SB 29–32, AK 15–17** (§3; widened once at Unit 11, with the cause recorded).
11. **Ordinal continuity**: every cycle 7 that names its place in a series is grepped across the whole book whenever a unit is added, and again before the book closes. ⚠ This fault has shipped at three levels in a row and is the series' most reliable defect; the drift begins at **the cycle that omits the claim**, so check the sequence for gaps, not just the numbers present.
12. **Dialogue integrity**: no speaker asks a question and answers it himself; no speaker outside the cast; consecutive same-speaker turns reported for a human decision. ⚠ Found at C1 Book 2 in eleven exchanges across four units, and no word-count check can see it.
13. Every unit and key script ends with **both** `module.exports = out;` **and** the `require.main` build line — without the second the build writes no file and exits silently.
14. Each finished unit is **read against the house pattern** — cast list, boxes, reports, dialogues — and not only run through the scripts.

---

# PART SEVEN — PHASES

| phase | work | deliverable |
| ---: | --- | --- |
| **0** | Tree, `lib.js` copied unchanged, `build.sh`, the QA harness, **Unit 1 SB + AK built and measured** | the measured page band that replaces §3's projection |
| **1** | Units 2–6 (SB + AK) | 6 units |
| **2** | **Book 1 Mid-Book Test + key**, measured | the measured test band |
| **3** | Units 7–12 (SB + AK) | Book 1 complete |
| **4** | **Book 1 End-of-Book Test + key**, bound SB and AK, handover, bundle | **Book 1 delivered** |
| **5** | Units 13–18 (SB + AK) + Mid-Book Test | |
| **6** | Units 19–24 (SB + AK) + End-of-Book Test | |
| **7** | Bound volumes, handover, bundle, Series Bible updated to v1.5 with the measured A2-Business record | **Book 2 delivered** |

---

# PART EIGHT — DECISIONS I NEED FROM YOU

1. ⚠ **"Pervasive" = "Proactive"?** Everything here assumes yes.
2. ⚠ **Exam anchor: A2 Key** (my recommendation — there is no Cambridge business exam at A2), **or** reframe as pre-**B1 Business Preliminary**? This changes the test specification.
3. **Cast and setting**: Sham Trading Co. and the eight people above — approve, or replace?
4. **Grammar ladder**: I have kept the general A2's ladder exactly, so the two books interleave. Confirm you want that rather than a business-first resequencing.
5. **Scope of this approval**: both A2 books now (Phases 0–7), or Book 1 first and Book 2 on a separate approval?

**Approve and Phase 0 starts: the tree, the harness, and Unit 1's Student's Book and
Answer Key built and measured before anything else is written.**
