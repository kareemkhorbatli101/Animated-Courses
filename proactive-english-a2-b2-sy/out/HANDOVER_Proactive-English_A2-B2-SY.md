# HANDOVER — Proactive English · A2 · Book 2 · Syria Edition

Running continuity file for the **A2 Book 2 (Units 13–24), Syria Edition** track.
Started turn 1. Updated at the end of every turn. If a session is lost, this file
plus the bundle zip is enough to resume from zero.

- **Track owner:** parallel instance (this track). **File prefix:** `PE-A2-B2-SY_`
- **Other track:** A2 Book 1 Syria is finished and signed off; that instance
  continues on the **A2 International Edition** (prefix `-INT`). Never write into
  its output directory; never edit its handover.
- **Author:** Mo (Mohamad Khorbatli). His parameters are fixed and are not to be
  improved — see §1.

---

## 0 · Turn log

| turn | what was delivered |
| --- | --- |
| 1 | Toolchain proven (Unit 12 of Book 1 rebuilt unchanged, 31 pp, pages inspected). Continuity harvested from `bible.js` + the bound SB/AK. This handover started. Book 2 blueprint (84 functions) written. |
| 2 | **Unit 13 delivered in full.** SB 31 pp (Unit 12 = 31), AK 18 pp (Unit 12 AK = 17). Per-cycle stage/minute profile identical to Unit 12 ([6,12,7,5,9,6,7,9,5,3,12,5,4] x6, then [6,12,7,5,9,6,7,9,5,10,15]). Pages 1, 3, 9, 17, 25, 26, 28, 29, 30, 31 inspected rendered; AK pages 1, 4, 9, 16 inspected. Two faults found and fixed (see below). `bound.js` parameterised; Book 1 binding verified unchanged. |
| 3 | **Units 14–18 delivered.** SB 31/31/31/32/33 pp, AK 19/22/22/22/22 pp. Past-perfect sweep tightened to **zero** after finding Book 1's Answer Key uses it not once in twelve units; Unit 18 alone needed 22 rewrites. Unit 14's five-to-seven matching task relabelled (A2 Key Listening **Part 5**, not Part 2) and that label standardised for every unit check. |
| 4 | **Mid-Book Test rebuilt and Units 19–21 delivered.** The first mid-test draft followed my blueprint (Reading 1–3 / Writing 6 / Listening 1–2, 6 pp); Book 1's real artefact is **four papers, 60 marks, 8 pp**, so `midtest2.js` / `midkey2.js` were rewritten from it — now 8 pp and 6 pp, matching Book 1 exactly. Units 19–21: SB 31/32/31 pp, AK 22/22/20 pp. Unit 20 came in at 35 pp and was diagnosed with a sparse-page count (5 pages under 22 lines) — the cause was whitespace from `cantSplit` Language boxes, not content; trimmed to 32. |
| 5 | **Units 22, 23, 24 and the End-of-Book Test delivered. Book 2 is complete.** SB 31/31/31 pp, AK 22/22/22 pp. End-of-Book Test **9 pp + key 8 pp — identical to Book 1's**, built from `endtest.js` / `endkey.js` rather than from a blueprint (same four papers, same mark split 30/30/20/20, same `ET-1`–`ET-4` track names, same band table). Bound volumes: SB **394 pp**, AK **270 pp**, with the Mid-Book Test after Unit 18 and the End-of-Book Test after Unit 24, verified in the rendered PDF. Unit 18's pointer box corrected to describe the real four-paper mid-test. |

---

## 1 · Locked decisions (inherited — do not re-open)

1. **The cycle is the unit of teaching.** 7 cycles per unit, each one language
   function, each 90 minutes. Cycle x.7 of every unit is **Review & Mediate**.
2. **Thirteen printed stages, fixed order and fixed minute budgets:**
   Lesson A — 1 Get ready (6) · 2 Listen and read (12) · 3 Practise (7) ·
   3R Perform (5) · 4 Your turn (9) · 4R Report (6);
   Lesson B — 5 Read (7) · 6 Write with help (9) · 6P Check together (5) ·
   6R Share (3) · 7 Write freely (12) · 7P Respond (5) · 7R Share (4) · Homework.
   Total 90. In the Review & Mediate cycle Lesson B becomes
   5 Read (exam practice) · 6 Write with help · 6P · 7 Write freely (exam task) ·
   ✓ Unit check (15) · "I can…" box.
3. **The scaffold is shared.** Stage 1 produces the `We SAY… / We WRITE…` board
   list; stages 2–4 use it orally, stages 5–7 use it in writing. If the writing
   side introduces new content the cycle has failed.
4. **Every report stage needs a listener task and the board clinic.**
5. **Peer review is closed** — a four-line tick checklist, never "give feedback".
6. **Audio scripts print in the Student's Book at the point of use.** No appendix.
7. **No teacher notes in the Student's Book.** Guidance lives in the Answer Key.
8. **The Answer Key is a separate book and everything gets an answer**, including
   brainstorms, free speaking, reports, peer-review slips, homework and mediation.
9. **British English · Syrian pounds · Damascus setting · no alcohol, no dating.**
10. **Deliverables are .docx.**

### Peer-review checklist progression (Series Bible §5)
Book 2 Units 13–18 use: **+ linkers · all 3 content points (A2 Key W6) · paragraphs**,
feedback in **English + phrase bank**. Units 19–24 use: **+ tense consistency ·
≥35 words (W7) · one extra detail**, feedback in **English, free**.

### Word counts (Series Bible §4) — Book 2 values
Guided writing **≥35 words** · free writing **60–100** · model texts **100–180**.

---

## 2 · The toolchain in this environment

Author's Node/docx-js pipeline, unchanged. `lib.js` is **shared and frozen**: if a
change is ever needed it goes in §8 of this file as a proposal, never as an edit.

```
pipeline/   lib.js (frozen) · unitNN.js · akNN.js · bound.js · bible.js · build.sh
out/        deliverables
```

One command per build, never a chain:

```
bash pipeline/build.sh unit13 PE-A2-B2-SY_Unit13_StudentsBook.docx "3 9 17 25"
bash pipeline/build.sh bound
bash pipeline/build.sh zip PE-A2-B2-SY_Bundle_Turn01.zip
```

**Three paths at the top of `build.sh` are environment-specific** and are already
set here: `P` = pipeline dir, `O` = out dir, `S` = preview scratchpad. The soffice
call uses `python3`. `export NODE_PATH=$(npm root -g)` is inside the script; if you
call `node` directly you must set it yourself or `require('docx')` fails.

`bound.js` needs editing for Book 2: it is hardcoded to "A2 · Book 1" on the title
page and inserts the mid-book test after unit **06**. For Book 2 the mid-book test
goes after Unit **18** and the title line reads "A2 · Book 2". See §8.

---

## 3 · Cast — fixed facts inherited from Book 1

**Do not contradict any of this.** Harvested from `bible.js` and from the bound
Student's Book and Answer Key.

| person | fixed facts |
| --- | --- |
| **Lina Haddad**, 28 | Damascus. Accountant, **Medica Trading**, Mezzeh (manager **Mr Khaled**; colleague **Rana**). Brother **Ziad**, 32, dentist, Shaalan clinic, married, daughter **Jana** (3 in Book 1, **4** by Unit 12). Cousin **Sara** (husband Fadi, son Karam 2). lina.haddad@mail.sy · 0991 205 734. Her family moved into a new flat in Mezzeh in December; the kitchen still has no door. |
| **Rami Khoury**, 31 | From **Homs**, lives in Damascus. Civil engineer (Kafr Sousa school site; colleague **Nadia**). Father a retired teacher, mother a nurse. Sister **Hala**, 29, teacher, two sons. Brothers **Samer**, 26, bank, and **Fadi**, 19, engineering student at Al-Baath University. Not married. Football on Fridays, hates cooking, likes Fairuz, likes old buildings and photography. Shares a flat with Omar. |
| **Maya Nasser**, 24 | From **Latakia**, lives in Damascus. Pharmacist at **Al-Shifa Pharmacy** in Lina's building. City Gym member (Mon & Wed evenings). Loves swimming, likes novels, dislikes TV, hates getting up early; starts work at 8. 15 Al-Jalaa Street, Mezzeh · 0933 427 815 · maya.nasser@mail.sy. |
| **Omar Darwish**, 35 | From **Aleppo**, lives in Damascus. IT technician at **TechCare**, Al-Hamra Street (manager **Mr Fouad**). Rami's flatmate and colleague. Loves cooking (kibbeh), watches football on TV, likes Fairuz. Birthday **3 May**. Favourite place: the Citadel of Aleppo. 0944 318 260 · omar.d@mail.sy. **Hiba is his cousin.** One of his photographs from the engagement party was printed in a Homs newspaper. |
| **Lama Nasser**, 19 | **Maya's younger sister.** Came to Damascus to **study English literature**; needed a flat in Unit 3. |
| **Nour** | Started as a **new trainee at TechCare** in Unit 9; finished her training and has a **real contract as a junior technician** (Unit 12). Has an uncle who came to the end-of-year evening; her mother makes kibbeh. |
| **Hiba Khalil** | Student in class 4B, **Omar's cousin**. Her cousin **Rasha Dabbagh** married **Samer Khoury** (Rami's brother) at the **Rose Hall, Homs, Friday 24 October at 6 pm**; the whole class was invited and eighteen of them went by bus. Hiba owns a camera. |
| **Fadi** | Rami's youngest brother, 19, engineering student, Al-Baath University. **Passed his driving test on the third try.** Plays the guitar. |
| **Ms Huda Saleh** | English teacher, class **4B**, **Room 12**, second floor, **Thursdays 5.30 pm**. Runs the Cooking in English club. |
| **Mr Khaled** | Lina's manager at Medica Trading. |
| **Mr Fouad** | Omar's and Nour's manager at **TechCare**. Reads all the phone-message notes on Thursday. ⚠ Book 1 also has a **Mr Fouad Dabbagh** in Homs (Rasha's father). Different men — avoid using the bare name "Mr Fouad" in any Homs scene. |
| **Mr Bassam** | Receptionist at Al-Yasmin Language Centre; takes the RSVPs. |
| **Mr Peter Lang** | German visitor; buys medical equipment from Lina's company. Appeared Units 4–6 and 11; was told to **come in April** to see Eid (Unit 12). |
| **Karim** | Receptionist, **City Gym**. |
| **Abu Ziad** | Owner, **Hotel Al-Bahr**, the sea road, Latakia (Mansour family, thirty years). 320,000 SYP a night for a sea-view room. |
| **Dr Samar Khalil** | Doctor, Al-Noor Clinic, Mezzeh. |
| **Samira** | Shop assistant, Moda Clothes, Al-Hamra Centre. |
| **Abu Nabil** | Landlord in Baramkeh. **Abu Hassan** — vegetable seller in the souq. **Jamal** — minibus driver, Mezzeh line. |

**Places:** Al-Yasmin Language Centre, Mezzeh (Room 12, café on the ground floor,
big hall on the second floor) · Medica Trading · TechCare, Al-Hamra Street ·
Al-Shifa Pharmacy · City Gym · Al-Hamra Centre · Beit Al-Yasmin Restaurant, Old
City near Bab Sharqi · Dar Al-Fann Cultural Centre, Old City · Al-Amir Travel
(Damascus garage) · Al-Noor Clinic · Hotel Al-Bahr and the Blue Coast Hotel,
Latakia · Rose Hall, Homs.
**Clubs:** English Club (Saturdays 11.00–12.30, café, free) · Photography Club
(Mondays 6–7.30 pm, Room 8, 5,000 SYP/month) · Cooking in English (Wednesdays
4–6 pm, centre kitchen, free) · a football club was added in Unit 7.

⚠ **Name reuse.** Book 1 reuses first names for walk-on characters in exercises
(a different Lama who is a nurse, a different Lama with twins, a Rasha who is
somebody's sister, a Café Nour). The table above is the canonical cast; treat a
bare first name in a Book 1 exercise as a walk-on, not as the cast member.

---

## 4 · Timeline

- Book 1 runs from the start of the course to **December**.
- **Friday 24 October** — Rasha and Samer's wedding, Rose Hall, Homs.
- **Thursday 19 December, 5.30 pm** — Al-Yasmin end-of-year evening and
  certificates; Nour's contract, Omar's newspaper photograph, Lina's move and
  Fadi's driving test are all announced there.
- **Book 2 opens in January**, the first week of the new term, same class, same
  room, same teacher.
- **April** — Mr Peter Lang is expected back in Damascus for Eid (promised in
  Unit 12). Reserved for Unit 20.

---

## 5 · Book 1 function spine (do not repeat a function)

Book 1 covered, in order: be · possessives · Wh- questions · have got · like +
-ing · imperatives and Can you…? ‖ present simple · at/on/in · frequency ·
present continuous vs simple · do/does questions · Can/Could you…? ‖ there
is/are · prepositions of place · adjectives · directions · adjective order ·
Shall I…? ‖ countable/uncountable · I'd like · How much/many · recipe
imperatives · Would you like to…? · very/really/so ‖ this/that/these/those ·
comparatives · superlatives · can/could for requests · too/not enough ·
present continuous for clothes ‖ transport verbs · tickets · How long/far ·
because + to-purpose · Let's/Why don't we · can't/must/mustn't ‖ can/could for
ability · present continuous for future · refusing politely · changing an
arrangement · prefer/I'd rather · present simple for timetables ‖ past simple ·
past questions · was/were · life events · sequencers · reactions ‖ have to ·
must/mustn't/don't have to · permission · skills · phone messages and I'll ·
Could you…?/Would you mind…? ‖ have got + illness · should · appointments ·
instruction imperatives · try/want/need to · sympathy ‖ going to · booking ·
Is there…? · going to from evidence · holiday message · recommending ‖ present
simple for customs + before/after/when · invitations and register · good wishes ·
should for advice about presents · past continuous with when/while · It's +
adj + to.

**Still to teach at A2, and therefore the Book 2 backbone:** present perfect for
experience · will for predictions and instant decisions · first conditional ·
used to · relative clauses with who/which/that · adverbs of manner · infinitive
vs -ing after common verbs · so/such · too/enough extended · reported requests ·
question formation review.

---

## 6 · Book 2 unit map — Units 13–24

Full 84-function blueprint: see `PE-A2-B2-SY_Blueprint_Units13-24.docx`. Summary:

| unit | topic | grammar home |
| ---: | --- | --- |
| 13 | Experiences | present perfect: ever/never, → past simple, been/gone, just/already/yet, for/since, superlative + ever |
| 14 | Plans and Predictions | will for predictions · will for instant decisions · might · probably |
| 15 | Problems and Solutions | first conditional · if/when · unless (light) |
| 16 | Then and Now | used to · no longer / still / any more |
| 17 | Learning and Training | infinitive vs -ing after common verbs · to + purpose (recycle) |
| 18 | Technology and Online Life | imperatives for instructions (recycle) · present perfect for results — **Mid-Book Test after this unit** |
| 19 | People and Places | relative clauses with who / which / that |
| 20 | Services and Repairs | adverbs of manner · comparative adverbs |
| 21 | Quality and Complaints | so / such · too / enough extended |
| 22 | Messages and Requests | reported requests and instructions at A2 |
| 23 | News and Our City | present perfect for news vs past simple for details |
| 24 | Looking Forward | question formation review · the three futures together — **End-of-Book Test after this unit** |

**Status:** **13–24 all built**, plus the Mid-Book Test (after 18) and the End-of-Book Test (after 24). Book 2 is complete.

---

## 7 · Facts invented in Book 2 (append every turn)

### Unit 13
- The new term starts in **January**; same class 4B, Room 12, Thursdays 5.30 pm.
- **Lama Nasser** is now in her **second year** of English literature at Damascus
  University and is looking for **part-time work**.
- **Dar Al-Kalima Bookshop**, Shaalan — a bookshop with a small café; the owner is
  **Mrs Mona**. It advertises for a part-time assistant, 3 afternoons a week,
  and asks for a CV in English.
- **Aunt Suad** — Maya and Lama's aunt in Damascus; she does not read English.
- **Lama's CV** (printed in full in 13.7, so every detail on it is now canon):
  15 Al-Jalaa Street, Mezzeh, Damascus · **0955 612 408** ·
  **lama.nasser@mail.sy** · Damascus University, BA English Literature, 2nd year ·
  **Al-Basel Secondary School, Latakia** · one job only — summer assistant on a
  **children's summer course in Latakia, 2 months, a group of 14 children aged
  8–10** · Arabic, English, Word, Excel, cash handling · free **Monday, Tuesday
  and Thursday afternoons** · references available on request, **no photograph**.
- **Nour has worked at TechCare for fourteen months** (trainee from the autumn of
  the year before, contract in December). She went to **Palmyra once, aged
  eleven, with her school** — April, by bus from Homs, about three hours, there
  and back in one day.
- **Hiba has never flown**; she has been to **Beirut three times, always by bus**,
  always to the same aunt in the same street, and has never seen the sea there.
- Omar has been to the Citadel of Aleppo "more times than he can count"; he has
  **never been to Palmyra**; he has **flown twice, both times to Cairo**.
- **Rami has been to Aleppo twice**, both times for work, both times it rained.
  His book for the club shelf is a **1997 second-hand book about bridges**, read
  four times.
- **Samer Khoury** was sent to Aleppo **by the bank for a week** (left on a
  Tuesday) — the *gone* example in 13.3.
- **Fadi Khoury drove to Homs on his own for the first time** (Track 13.14).
- **The English Club noticeboard** — "Member of the Month", a "Places we know"
  page and the **club shelf** (one book and one sentence from each member) are
  the three writing genres of this unit and are now club furniture.
- Answer key only: **Mrs Mona Haffar** (surname used once, in the sample reply);
  a **volunteer reception notice at Al-Noor Clinic** (Dr Samar Khalil) used as a
  sample application. Both are safe to reuse; neither appears in the SB.
- **Dropped before the build:** an earlier plan gave Mr Peter Lang four visits to
  Syria and no trip to Bosra. He does not appear in Unit 13 at all, so that fact
  is **not** canon — he is still free for Unit 14 onwards.
- Tracks used: **13.1 – 13.14** (same count and the same 13.x.14-is-the-unit-check
  shape as Unit 12).

### Unit 14 — Plans and Predictions
- **The predictions envelope.** Ms Huda collects the three predictions everybody
  wrote at the end of Unit 13 and seals them. **Opened in 24.1** — this is now a
  two-book-long device and must not be re-used for anything else.
- Rami's site **may move to Latakia** (eight months if it does; the company has
  not decided). Lina's company is **waiting on a supplier in Türkiye**.
- Omar predicts the football every week and is wrong almost every week — the
  class's running way of talking about certainty.
- Tracks **14.1–14.14**.

### Unit 15 — Problems and Solutions
- **The lift has broken** — stopped on a Tuesday with nobody in it. The Thursday
  class moves to **Room 3, ground floor**, until it is fixed. (The lift is
  **mended** again by Unit 23, where nobody knows who ordered the repair.)
- **Mr Bassam** manages the repair and the notices. The engineer is
  **Abu Nizar**, who has fixed this lift four times.
- Maya plans **three days in Latakia** around the weather, the bus and her
  sister's exams.
- Tracks **15.1–15.14**.

### Unit 16 — Then and Now
- **The then-and-now wall** in Room 12: one photograph each, at least ten years
  old, with a caption.
- **Omar's Aleppo folder** — about **two thousand** photographs, going back to
  when he was fourteen. (This is why the newspaper buys one in Unit 23.)
- **Abu Rami**, Rami's father, visits the club and talks about the Homs he grew
  up in. **Mrs Mona** remembers **nine** bookshops in her street; there are two.
- Tracks **16.1–16.14**.

### Unit 17 — Learning and Training
- **Nour's training course** at TechCare: started **3 February**, six weeks, two
  evenings a week, assessment at the end. Trainer **Mr Jamil**.
- The centre's **conversation club**: Saturdays at eleven, free for students,
  **20,000 SYP** a term for everybody else.
- **Hiba's teacher-training forms went in on 1 March**; both referees said yes.
  (She is interviewed on **9 March** and hears on a **Sunday in June** — Units
  23 and 24, and the End-of-Book Test Reading Part 3.)
- **Lama** works three afternoons at Dar Al-Kalima and is learning the till.
- Tracks **17.1–17.14**.

### Unit 18 — Technology and Online Life
- **The timetable has gone online**; the paper one is off the door and about half
  the class cannot find anything.
- **The Saturday clinic** — Omar and Nour, Room 3, 10:00–11:00, an hour before
  the conversation club. (Mr Fouad asks Omar to keep it going in 22.2.)
- **Mr Bassam** has an account for the website and has locked himself out twice.
- **Mid-Book Test follows this unit.** The pointer box describes four papers and
  60 marks — keep it in step with `midtest2.js` if that file is ever changed.
- Tracks **18.1–18.14**.

### Unit 19 — People and Places
- **Two new students joined 4B after the mid-test:** **Tareq Ayoub**, who drives
  a minibus on the Mezzeh line, and **Samira Deeb**, who works in a clothes shop
  in Al-Hamra.
- **Abu Walid**, the new caretaker of Lina's building, replacing a man everybody
  knew for nineteen years.
- The class writes **a page about the people of the centre** for the entrance
  hall.
- Tracks **19.1–19.14**.

### Unit 20 — Services and Repairs
- **A bad fortnight:** Rami's laptop, Lina's washing machine and the centre's
  projector all broke within two weeks.
- **Three repair shops in Mezzeh:** **Khalid Electronics** (fast, expensive,
  explains nothing), **Abu Nidal's** (slow, cheap, tells you what he did), and
  **the one by the bridge** whose name nobody remembers.
- **Nour's rule:** a repair you cannot see is a repair you cannot judge.
- Tracks **20.1–20.14**.

### Unit 21 — Quality and Complaints
- **The T-shirts.** Twenty ordered for the end of the course from **Al-Rayyan
  Printing**, **420,000 SYP**, paid; order **1184**, placed 3 April, delivered
  14 April, all twenty in the wrong size (42 cm across the chest where a large
  is 54). (Omar brings **twenty T-shirts, right size**, to the evening in Unit 24
  and the End-of-Book Test Listening Part 2.)
- Maya takes back a **kettle** — three weeks old, receipt kept, box not kept.
- **Mr Peter Lang is coming in April** (the German visitor from Book 1). He came
  for an hour and stayed four at last year's end-of-course evening.
- Tracks **21.1–21.14**.

### Unit 22 — Messages and Requests
- **Mr Fouad is away from the 6th to the 20th** — his daughter's wedding in
  Aleppo. He answers the telephone twice a day, at about ten and about seven.
- **Nour takes 61 messages in a fortnight** and expected about twenty.
- **The TechCare message book**, started by Omar in week one after four messages
  went missing in the first three days, two of them his.
- **Mrs Jamila Khoury**, Mezzeh, **0991 448 207** — needs her machine before
  Thursday because her daughter is arriving from Dubai for four days; asks them
  not to ring after six, because of her mother.
- **Al-Sharq Parts**, account **4412**, order **2214**: terms change from 1 May —
  orders over 100,000 SYP need confirmation in writing, payment goes from 30 days
  to 21, late accounts go on pro forma, "appointments/changes not negotiable
  individually". Nour's one question: does the 21 days run from invoice or
  delivery?
- **Lina writes to M. Yilmaz at Anadolu Tekstil alone** for the first time —
  Mr Khaled tells her to send it without showing him ("I am not a checker; I am
  a bottleneck"); Rana is on leave until the **11th**. Lina is
  **Accounts, Medica Trading, 0991 205 734**. Yilmaz answers in four hours and
  answers one question of two.
- **Mr Samih Aswad · 0955 613 118** (practice card). **Abu Hani** — the customer
  everybody says yes to, refused a repair without a ticket on the 11th.
- Tracks **22.1–22.14**.

### Unit 23 — News and Our City
- **The Mezzeh public library has reopened** — opened 1962, closed 2013, reopened
  **4 May** after eleven years; **14,000 volumes** in **41 boxes** in a basement,
  some of them wet; **Maysoun Sabbagh** at the desk has worked there **since
  1998** and put the books back **on her own in nine weeks**. The main room is
  painted, the back-room windows replaced, the desk moved to the door. The
  **children's room has not opened** (full of chairs). No lending cards — names
  written in a book, as until 1998. Open 9–2 and 4–7, every day but Friday;
  identification on a first visit. Nobody will say who paid for the paint;
  "appointments are under consideration".
- **Omar has sold a photograph to a newspaper** — the library stairs, taken on
  4 May in eleven minutes at four o'clock; the paper rang on Tuesday the 14th, he
  sent four, they printed one on **page four on Thursday 9 May** and paid
  **25,000 SYP**. His father has put it on the workshop wall where the licence is.
- **Hiba has a place on the teacher-training course** — **40 places, 300
  applications**, heard on a Sunday in June, starts **14 September**, four days a
  week. Her mother has worked in the family shop **since she was seventeen**
  (41 years).
- **Rana has been given the Aleppo office**; **Lina takes over her job from
  June**, and the company pays half her B1 fee.
- **The Mezzeh road:** the bridge is finished, the road is not; about **200
  metres** with no surface at the Mezzeh end, and the machine that lays it has
  been in Tartous for five weeks. The paper says "expected to open in June".
- The weakening-word list (keep it): _expected · likely · planned · under review
  · under consideration · in the programme · substantially · in due course_.
- Tracks **23.1–23.14**.

### Unit 24 — Looking Forward
- **The Unit 13 envelopes are opened** in 24.1. Hiba's said she would apply and
  not tell her mother; Omar's said "I am going to buy a camera **with my own
  money**".
- **The end-of-course evening is on the 27th**, doors **6.30**, certificates
  **7.00**, one dish per family; Omar brings **twenty T-shirts**, right size this
  time; tell Ms Huda by the **20th**; nobody had booked the chairs.
- **Nine of the sixteen who started Book 2 have finished.** Three of the four
  named students go on to B1: **Omar** (paid, meeting the newspaper man on the
  **9th**), **Lina** (company pays half), **Hiba** (course instead). **Nour
  stops for one year** — the second workshop opens in **October** — and gives a
  date: the **first week of September next year**, and Omar may ask her in
  **August**.
- **Ms Huda** has taught **nine years**, keeps dated evidence for every student,
  has asked for the **second room** for three years, and takes the next B1 group.
  In November eleven were enrolled and **four came**.
- **The letter from the previous Book 2 class** (printed in 24.7): nine finished
  of sixteen; the Thursday after the first test is the day people stop coming.
- Tracks **24.1–24.14**.

### Mid-Book Test (after Unit 18) and End-of-Book Test (after Unit 24)
- Mid-Book Test tracks **MT-1 · MT-2 · MT-3**; End-of-Book Test tracks
  **ET-1 · ET-2 · ET-3 · ET-4** (the same names Book 1's end test uses — the two
  books are never bound into one volume, so they do not collide).
- End-of-Book Test Reading Part 2 invents **Souda/Souad's 2019 application** and
  **the Haddad sisters** (one employer pays half, one was refused). Reading Part 3
  is Hiba's story and adds the interview date, **9 March**, forty minutes, three
  people.
- Band advice sends 40–54 back to the **x.7 cycles of Units 13, 19 and 23**.


---

## 8 · Proposed changes to shared files (never edited directly)

| file | proposal | why |
| --- | --- | --- |
| `bound.js` | **DONE in this track's copy — needs Mo's sign-off before it goes back to the shared pipeline.** Reads `process.env.PE_BOOK`; when it is `2` the title page says "A2 · Book 2", only units **13–24** are bound, the mid-book test goes in after unit **18**, and the end-of-book test waits for unit **24**. With the variable absent it infers the book from the unit numbers on disk and falls back to 1, so **Book 1 behaviour is byte-for-byte unchanged** — regression-checked this turn: with `PE_BOOK` unset the same file still produced "A2 · Book 1 · Syria Edition · Units 1…11 · Mid-Book Test". `build.sh` in this tree exports `PE_BOOK=2`. | it was hardcoded to Book 1 and to unit 06, and it binds every `unitNN.js` in the folder — which, since Book 1's scripts ship in the same pipeline, put Units 1–11 into the Book 2 volume |
| `lib.js` | none | frozen |

---

## 9 · Formatting traps (inherited, all still live)

| trap | fix |
| --- | --- |
| newline inside a table cell | one paragraph per cell; use extra rows, never `\n` |
| a box breaking across a page | `cantSplit: true` — already inside `box()` |
| column widths ignored | set `columnWidths` **and** a `width` on every cell, both DXA |
| `ShadingType.SOLID` | always `CLEAR` with a `fill` |
| `______` blanks turning italic | the italic regex has a lookbehind/lookahead — do not simplify it |
| bold inside italics | the parser is recursive; keep that version of `lib.js` |
| weights like `[3, 0.01]` | keep weights in the same order of magnitude |
| emoji in a pdftoppm preview | harmless poppler font warning; the .docx is correct |
| **two tables pushed back-to-back merge into one** (OOXML rule: adjacent `<w:tbl>` with no `<w:p>` between them). The author's own layout relies on it — the Unit check grid and the Track x.14 `dlg` are meant to sit flush. The fault only shows when the **merged** table breaks across a page: the grid's header row (`tableHeader: true`) then repeats on top of the audio script. | do **not** separate them with a spacer — that loses the author's flush look and the `dlg`'s geometry. Put a `pb()` before the `✓ Unit NN check` stage so the whole check block starts a fresh page, exactly as it falls in Unit 12. Costs one page and matches Unit 12's 31 pp. |
| the pipeline folder holds **Book 1's** `unitNN.js`/`akNN.js` too | Unit 12 is kept as the live template under the names `ref-unit12.js` / `ref-ak12.js` — the `ref-` prefix keeps `bound.js`'s `^unit\d\d\.js$` from binding it while `require('./lib')` still resolves. Units 01–11 are left as they are and excluded by the `PE_BOOK=2` range. |
| **page count is set by whitespace, not by words** | Two separate levers, both discovered the hard way. **SB:** each cycle must fit **4 pages** (x.7 may take 5–6), so 1 + 6×4 + 6 = **31**. Measure it with `pdftotext -f n -l n | grep -c '[A-Za-z]'` per page: a page under ~20 lines means a `cantSplit` box jumped. Trim the cycle that spills, not the book. **AK:** length is governed by the **number of `NOTE()` boxes**. Book 1's keys and Units 19–21 run **7–10** per unit; Unit 22's first draft had **22** and was two pages over. Keep one `NOTE` per cycle (after the Language box practise) plus three or four in x.7. |
| **matching tasks in a unit check are A2 Key Listening *Part 5*** | Part 2 is note-completion. Label every `Track NN.14` five-to-seven matching task "A2 Key Listening Part 5 style – matching". |

## 10 · Content QA — run every unit

1. Matching tasks: count both sides; every answer exists exactly once; the extras
   are genuinely wrong.
2. Multiple choice: every distractor wrong for a reason; the key findable in the
   text or script.
3. Three-person reading tasks: test every question against all three people.
4. Numbers reconcile across cycles and into the key (prices, times, durations).
5. Continuity: check §3 and §7 before inventing anything.
6. Word counts achievable, and the sample in the key actually hits the count.
7. **Register sweep — zero tolerance (revised).** Book 1's Student's Book uses
   the past perfect **once in twelve units** and Book 1's **Answer Key uses it
   not once**. Every unit of Book 2 therefore ships at **zero**, keys included —
   including the places where it is natural English (`I wish somebody had told
   me`, `two of them had read the form`): rewrite them. Unit 18 needed 22
   rewrites, Unit 23's key ten, Unit 24's key three, the End-of-Book Test four. Unit 13's first draft had eight, mostly
   from reported speech (`she asked me how long I had lived…`) and from
   narrative `I had never heard…`. Grep every unit and its key for
   `\bhad (never |already |just |ever )?[a-z]+(ed|en|ne|me|nt|d|t)\b` and keep
   the count at **one or two per unit**, deliberate. Where it appears in
   reported speech, ask the question directly instead
   (`how long **have** you lived in Damascus?`) — that is both A2 and the
   unit's own target grammar. Also sweep for Americanisms, alcohol/dating,
   and `$`/non-SYP currency; all four came back clean on the final build.
7. Track numbers unique and sequential; every track referenced has a printed script.
8. Arabic-L1 error profile drives the board clinics: omitted copula, missing
   auxiliary *do*, articles, present perfect, /p/–/b/, /v/–/f/, final clusters.
