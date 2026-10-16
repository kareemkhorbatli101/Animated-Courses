# HANDOVER — Proactive English · B1 · Syria Edition

Running continuity file for the **B1 Syria Edition** track (Books 1 and 2, Units 1–24).
Updated at the end of every turn. This file plus the bundle zip is enough to resume from zero.

- **File prefix:** `PE-B1-BK1-SY_` and `PE-B1-BK2-SY_` · **Tree:** `proactive-english-b1-sy/`
- **Author:** Mo (Mohamad Khorbatli). His parameters are fixed and are not to be improved.
- **Plan of record:** `PE-B1-SY_PLAN_and_Blueprint.docx` (18 pp). Everything below implements it.

**STATUS: BOOK 1 IS COMPLETE.** Twelve units, eighty-four cycles, both tests, both bound volumes.

---

## 0 · Turn log

| turn | what was delivered |
| --- | --- |
| 1 | B1 plan and curriculum blueprint written and built (18 pp). Tree created, pipeline forked, `lib.js` copied byte-for-byte. |
| 2 | **Unit 1** in full. SB 36 pp, AK 23 pp. All 15 tracks, every cycle at 90 min, x.7 at 91. Four content faults found and fixed before build; twenty-two past-perfect occurrences swept out of the pair. |
| 3 | **Units 2–4.** |
| 4 | **Units 5–6 and the Mid-Book Test** (60 marks; Speaking uses Preliminary Parts 1 and 4 only, because Parts 2 and 3 are not taught until Units 9 and 12). |
| 5 | **Units 7–9.** |
| 6 | **Units 10–12, the End-of-Book Test** (100 marks, all four Speaking parts), **`bound.js`** and **both bound volumes**. Book 1 closed. |

---

## 1 · What exists on disk

| artefact | pp | file |
| --- | --- | --- |
| Plan and blueprint | 18 | `PE-B1-SY_PLAN_and_Blueprint.docx` |
| Units 1–12 Student's Book | 36 · 35 · 36 · 36 · 36 · 37 · 37 · 37 · 37 · 37 · 37 · 38 | `PE-B1-BK1-SY_UnitNN_StudentsBook.docx` |
| Units 1–12 Answer Key | 23 · 23 · 24 · 24 · 22 · 25 · 24 · 26 · 25 · 27 · 28 · 30 | `PE-B1-BK1-SY_UnitNN_AnswerKey.docx` |
| Mid-Book Test + key | 9 + 7 | `PE-B1-BK1-SY_MidBookTest[_Key].docx` |
| End-of-Book Test + key | 12 + 8 | `PE-B1-BK1-SY_EndOfBookTest[_Key].docx` |
| **Bound Student's Book** | **461** | `PE-B1-BK1-SY_StudentsBook_BOUND.docx` |
| **Bound Answer Key** | **317** | `PE-B1-BK1-SY_AnswerKey_COMBINED.docx` |

Student's Book total 439 pp of units; answer keys 301 pp. Both bound volumes carry the tests in
teaching order: Mid-Book after Unit 6, End-of-Book after Unit 12.

---

## 2 · The twelve units of Book 1

| unit | title | the function set |
| --- | --- | --- |
| 1 | Who We Are | introductions · the two present tenses · hedging · keeping a conversation going |
| 2 | Telling a Story | past simple against past continuous · narrative linkers · the full stop |
| 3 | By the Time I Got There | the past perfect, owned here · order of events · _I had never done it before that day_ |
| 4 | Since and For | the two perfects · _how long_ · asking for something at work |
| 5 | It Was Done in 2009 | the passive · agentless description · surveys and records |
| 6 | Would It Be All Right If | permission and requests · obligation and its absence · Preliminary Speaking Part 4 |
| 7 | So Bad That | evidence against feeling · _so … that_ · **the four-sentence evidence paragraph (7.6)** |
| 8 | If I Were You | advice · conditionals · _what would make me wrong_ (8.3) · ask for one thing (8.1) |
| 9 | It Must Have Been | deduction and doubt · modals of certainty · Preliminary Speaking Part 2 |
| 10 | Reporting What People Said | backshift in thirty minutes · reporting verbs · reporting against interpreting |
| 11 | Defining and Adding | defining and non-defining clauses · _whose/where/when_ · dropping the pronoun |
| 12 | Opinions and Agreement | opinion + reason · polite disagreement · concession · **Preliminary Speaking Part 3 (12.5)** |

---

## 3 · Decisions taken, pending the author's confirmation

The plan left six decisions with the author. Production proceeded on the recommendation in each
case. Five are now **effectively settled by the delivered book**; reversing them would mean
rebuilding Book 1.

| # | decision | taken as | cost to reverse now |
| --- | --- | --- | --- |
| 1 | books × units | **2 × 12** | both tests and the whole of Book 1 |
| 2 | file naming | **`PE-B1-BK1-SY_…`** | a rename script |
| 3 | exam anchor | **Cambridge B1 Preliminary** | every x.7 Lesson B, both tests |
| 4 | the sealed letter | reused, at two-year scale | none until Unit 24 |
| 5 | order of play | **B1 Syria first** | none |
| 6 | `bound.js` | **written, extended with `PE_LEVEL`** | none — see §8 |

---

## 4 · Locked, inherited from A2 and not re-opened

- 7 cycles per unit; x.7 is Review & Mediate. 13 stages, 90 min; the minute profile is
  `6 12 7 5 9 6 7 9 5 3 12 5 4` for x.1–x.6 and `6 12 7 5 9 6 7 9 5 10 15` (= **91**) for x.7.
- Audio scripts printed **at the point of use**, never an appendix. Answer Key separate.
  Every task gets an answer or a full sample. No teacher's notes. No appendices.
- British English · SYP · Damascus · no alcohol, dating or party-drinking · same-gender
  pairing always available · a privacy option on every personal task.
- `lib.js` **frozen** — the B1 copy is byte-identical to the A2 one and was never edited.

### Measured at B1 across twelve units
- **15 tracks per unit**, `NN.1`–`NN.15`, every one used in every unit (checked by `qa.sh`).
  Twelve for cycles x.1–x.6 (dialogue + pronunciation), `NN.13` the x.7 dialogue, `NN.14` the
  x.7 pronunciation track — new at B1 — and `NN.15` the unit-check listening.
- **Word counts:** guided ≥50 · free 100–140 · models 180–260.
- **Page budget, as built:** SB **35–38** (the plan said 34–36; the band drifted up by one page
  from Unit 6 as the models lengthened, and 38 in Unit 12 carries the extra Speaking Part 3
  candidate page). AK **22–30**, rising with the unit. **For Book 2, budget SB 36–38 and AK
  24–30 and do not pad or trim to hit 36/24.**
- **Answer-key length tracks Note-box count.** House range **7–10**. Every key in Book 1 was
  swept down to 9 or 10 before it was built.

### Exam rotation, as built
- **Reading:** R5(1) R2(2) R6(3) R3(4) R1(5) R4(6) R5(7) R2(8) R6(9) R3(10) R1(11) R4(12).
- **Writing:** W1 on odd units, W2 on even.
- **Listening:** L1 in 1, 5, 9 · L2 in 2, 6, 10 · L3 in 3, 7, 11 · L4 in 4, 8, 12.
- **Speaking:** Part 1 taught in 1.3 · Part 4 in 6.7 · Part 2 in 9.7 · **Part 3 in 12.5**.
  The Mid-Book Test therefore uses Parts 1 and 4 only; the End-of-Book Test uses all four.
- **Two Preliminary adaptations made for a book without pictures and kept consistently:**
  Listening Part 2 is matching — five speakers, eight options A–H (set in Unit 2, repeated in 6
  and 10); Listening Part 1 is seven short extracts with three **word** options, not pictures.

---

## 5 · Cast (canon — do not contradict in Book 2)

### Carried from A2
| who | fixed facts |
| --- | --- |
| **Ms Huda Saleh** | teaches 5A; tenth year; keeps dated evidence on every student; seals a first-impressions note in week one and reads it in June; wrong about a third of it every year. **New in 12.6:** for twenty years her mistakes were about *ability*; this year all four were about *whether somebody would speak*, and those four are the four who changed most. She says she cannot tell whether that is a coincidence. |
| **Omar Darwish** | IT at TechCare; photographs; sold one to a newspaper in A2 U23 |
| **Lina Haddad** | accounts, Medica Trading; needs four seconds before she speaks |
| **Samira Deeb** | clothes shop in Al-Hamra. **B1 thread:** wrote her sister a letter in April and did not send it; one sentence of it had the commas wrong (11.2); sent both versions on 2 June |
| **Tareq Ayoub** | drives a bus, the Harasta road route, since 2017; fills in the depot check sheet; **B1 thread:** proud of nine words since April and takes them apart himself in 11.4; writes to the depot manager in 12.2 asking that a call also go in writing — four seconds |
| **Hiba Nasser** | *not in the class* — teacher-training course; available as an outside figure |
| **Nour Sabbagh** | *arrives in Book 2, Unit 13*. Promised "the first week of September next year" in A2 U24 |

### New in B1 (now canon)
| who | age | fixed facts |
| --- | --- | --- |
| **Bassel Tahhan** | 41 | printing works in Qassaa (Dar al-Kutub Press), 19 years, 14 people, two machines; **three of the fourteen work the ministry order**. Eleven ministry conditions over the counter in March; crossed nine out; read the definitions page in June (11.7) and found the yard was inside the premises and that he may name somebody in writing to authorise. Told the three men on the Thursday that he had made a rule stricter than the ministry's. In 12.3 he puts **one** of the nine crossings-out back: condition four is right about the street. |
| **Yara Mansour** | 26 | Suwayda; hospital laboratory; studied English since eleven and never spoke it to a stranger; four sentences in week one, the rest three weeks later. **12.6: she asks to read out the note she wrote about herself in week one and to have it first on the page for September, in her own handwriting, with her name on it.** Her line is the one the book ends on: _the thing that was difficult was never the English._ |
| **Rasha Barakat** | 30 | Deir ez-Zor; nurse, children's hospital, nine years; night sister. 118 shifts in a notebook, seven errors, all on a fourth or fifth night. Trial of three-night blocks from 1 June, three months, report in September. Sister Nasr — the other night sister, eleven metres away, fourteen years of the same pattern — joined on 8 June with a separate sheet. The ward has had one trolley since February. **12.7: she decides to lead the September report on the trolley, the explanation that damages her own case.** |
| **Jad Attar** | 19 | computer engineering, Damascus University; answers forum questions at one in the morning, about nine hundred of them. Counted 31 dropped relative pronouns in forty of his own answers (11.5). Said in May that he is nineteen; two readers stopped answering him and four did not. **12.6: telephoned a supplier in Aleppo on 2 June and spoke English for nine minutes, having written in April that he never would.** |
| **Umm Kinan (Siham Dibo)** | 48 | maths, Rukn al-Din, 24 years; son in Germany; granddaughters 5 and 7. Used a projector alone for the first time on 11 April, eleven minutes for one triangle; asked a colleague for forty minutes after four months of not asking and got yes in nine seconds. **12.4: she asks Yara the question nobody has asked her, and names the method. She has asked two colleagues to come on the course next year.** |
| **Fares Kayyali** | 34 | Aleppo; pharmaceutical representative; has trained six representatives in car parks. **September is agreed: two days a month, in writing, for a year — and he told his own company on the Monday before he signed.** One line in 11.2; concedes the whole of it in 12.3. |
| **Lubna Sweidan** | 23 | final-year architecture; survey of 14 Sharia al-Jalaa, three sheets, two admitted blanks; wrote the key with _whose/where/when_ (11.3); read Bassel's definitions page with him (11.7); plays the committee in 12.7 |
| **Mazen Hariri** | 37 | mends telephones at a counter in Shaalan; fault book started in September for no reason; fifteen handsets of one model with an uneven adhesive line; **the manager asked him for a copy on 2 April, which is why the book still exists** (12.1) |

**Setting:** Class 5A, **Room 14**, Mondays and Thursdays, 5.30 to 7.30. Twelve students. September.

---

## 6 · Devices planted in Unit 1 and Unit 3 — all paid off in Unit 12

| planted | where | paid off |
| --- | --- | --- |
| the "who we are" pages, pinned up | 1.1 | **12.6**, opened |
| the vote on which changes would last | 1.2 | **12.6**, opened — Bassel voted that nothing in his shop would change |
| the sealed first-impressions notes | 1.4 | **12.6** — and the question is *which kind of thing* you were wrong about |
| _by the time I finish this course_ | 3.3 homework | **12.6**, opened — Jad was right about three and wrong about the one he put in to be wrong about |
| the dated turning-point page | 3.6 homework | **12.6** — Rasha's turning point was not the night of the errors but a handover that had not happened when she wrote it |
| the four open questions | 1.3 | used all level; **Unit 22** again |
| Yara's "there is more, next week" | 1.1, 1.4 | **3.6**, and again in **12.6** |
| the evidence paragraph | 7.6 | **12.7**, April and June versions printed side by side |
| the letter to the B2 self | — | **Unit 24.6**, sealed; the A2 envelope device at two-year scale |

**Carried forward into Book 2:** Unit 13 opens on the four envelope pages plus the 12.6 balanced
page. Both the Unit 12 NEXT box and the end of the End-of-Book Test tell students to keep them.

---

## 7 · Register rules

- **The past perfect is at ZERO until Unit 3** — A2 shipped zero in all four volumes, and Units 1
  and 2 hold that line so Unit 3 owns it. From Unit 3 the sweep inverts to a by-hand check that
  the form is *present and correct* where the unit teaches it.
- **Reported speech keeps A2's no-backshift rule until Unit 10**, which teaches the full system
  and names the A2 rule it replaces. Decisions in minutes are **not** backshifted (10.6).
- **Hedging** introduced in 1.5, one per sentence; the test is whether the information survived.
- **Phrasal verbs:** a declared set of 8–10 per unit, never repeated.
- **The two commas of Unit 11 are meaning, not punctuation**, and that is the hardest register
  point in the book: the sweep for it is by eye, cycle by cycle.

---

## 8 · Toolchain

- `build.sh <script> <Out.docx> ["preview pages"]` · `build.sh bound` · `build.sh zip <name>`.
  Exports `PE_LEVEL=B1` and `PE_BOOK` (default 1).
- **`bound.js` is written** (decision 6). It is the A2 script with one addition: the CEFR level is
  read from `PE_LEVEL` and printed on the title page. With `PE_LEVEL` unset it prints `A2` and
  behaves exactly as the A2 copy does, so the same file can replace the A2 one whenever the
  author wants a single script — **that replacement has not been made; the A2 copy is untouched.**
- QA scripts live in the scratchpad: `qa.sh <unit> <pdf>` (15 tracks · the stage/minute profile
  per cycle · past perfect against the Unit-3 rule · Americanisms · policy · currency) and
  `akqa.sh <unit> <pdf>` (register sweep + Note-box count). Both use `\b` word boundaries on the
  Americanism list — a substring match flags *forgotten* for *gotten*.
- **The two page-count levers from A2 apply unchanged.** An SB cycle must fit its budget —
  measure per page (`pdftotext -f N -l N | grep -c '[A-Za-z]'`) and look for a page under twenty
  lines, which means a `cantSplit` box jumped. Trimming early in a cycle does **not** collapse
  the tail: you have to take out 12–15 counted lines from the cycle whose tail page is smallest.
  `lines(8)` ruled blocks are invisible to the line counter and occupy about eight line-heights.
- An Answer Key's length tracks the **number of Note boxes**: house range **7–10**. The sweep is
  a scripted line-number demotion of `NOTE(` to `A(`.

---

## 9 · Faults found and fixed in Book 1 — watch for these again

1. **`'),` instead of `',`** at the end of an array element or table row. By far the most frequent
   defect in the series: `SyntaxError: Unexpected token ')'`. Sweep for lines ending `_'),`.
2. **Apostrophes.** The JS files store `\'`; a Python single-quoted replacement string yields a
   bare `'` and the match fails. Choose apostrophe-free substrings or double the backslash.
3. **Exam items with more than one correct answer** — found in Units 1, 7 and the End-of-Book
   Test (an MC-cloze item where *believed / assumed / thought* all fitted). Every distractor must
   be visibly wrong. Check every option against the stem, by hand, after the build.
4. **Unit-check listening items not supported by their own script.** Read each extract alone and
   answer the item from it, with the rest of the page covered.
5. **Answer-letter patterning.** A first draft of the End-of-Book Test had four B answers out of
   five in Reading Part 1 and six A answers out of six in Part 5. Reorder options, not answers.
6. **Comprehension questions written against the plan for a track rather than the track.**
7. **Register drift:** past perfect before Unit 3; Americanisms; one stray Chinese character.
8. **Continuity drift inside the book**, found at the end and fixed: *Bassel Khoury* for *Bassel
   Tahhan* in two keys, and *lorries* for *buses* in Tareq's depot thread in Unit 12. **Grep the
   cast's surnames and each character's vehicle, job and premises against this file at the end of
   every unit pair.**

---

## 10 · Next

**Book 2, Units 13–24.** The plan of record has the function list. Three things are already
fixed and must not be moved:

1. **Unit 13 opens on the four envelope pages and the 12.6 balanced page**, and on **Nour
   Sabbagh's return** — she promised "the first week of September next year" in A2 Unit 24.
2. **Unit 22** reuses the four open questions from 1.3.
3. **Unit 24.6** seals the letter to the B2 self.

The pipeline is parameterised for it: `PE_BOOK=2 bash build.sh bound` binds units 13–24 with
`midtest2`/`endtest2` once those files exist, exactly as the A2 tree does.
