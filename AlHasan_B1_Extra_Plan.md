# Al-Hasan International — Student Book 2 (CEFR B1)
## Plan for the extra-material website

*Companion to `AlHasan_A2_Plan.md` and to the delivered A2 pack in `book1-extra/`.*

---

## 0. What the uploaded book is

`AlHasan_International_StudentBook_2.docx` — 81,700 words, ten units, every
unit headed **CEFR B1**. It is the direct sequel to Student Book 1 (A2):
Unit 1 opens *"It is one year since Ms. Chen first came to Damascus"*, and
Unit 10 closes the same year with the next annual review.

This settles the question left open in `AlHasan_A2_Plan.md`. The series has
**A2 (Book 1)** and **B1 (Book 2)**. The missing level is **B2**, not A2.

### The ten units

| # | Unit | Grammar | Function |
|---|---|---|---|
| 1 | The Group and Its Companies | present perfect (for/since · already/yet/just · ever/never) vs past simple | Trade + Admin |
| 2 | Sourcing a Supplier | must · have to · mustn't · don't have to · can (permission) | Trade + Admin |
| 3 | Offers, Prices and the Margin | first conditional · unless · time clauses (when/as soon as/until) | Finance + Trade |
| 4 | Ordering and Paying Across Borders | will · going to · present continuous for arrangements | Finance + Admin |
| 5 | Shipping In and Clearing Customs | the passive (present & past simple) · by + agent | Logistics |
| 6 | Goods In: Quality, Quantity and Stock | defining relative clauses — who · which · that · where | Trade + Logistics |
| 7 | Selling in Syria | reported speech — say · tell · ask | Trade |
| 8 | Getting Paid and Giving Credit | should · shouldn't · could · may · might | Finance + Admin |
| 9 | When It Goes Wrong | past continuous vs past simple · because of · so · although | Logistics · Finance · Admin |
| 10 | Reporting the Year and Growing | review of 1–9 · the language of figures and trends | all four |

Each unit runs Warm Up → Parts 1–11 (vocabulary, grammar, listening,
speaking, extended reading, writing, trade-skills, consolidation, case
studies, review, foundations).

### The world the extra material must stay inside

**Twelve companies.** Bashak Co. imports (Rami, Import Manager). Komosh
moves goods and clears customs (Mr. Samir). Chemco sells metals and fuels
to builders and factories and runs the depot outside Damascus (Ms. Dana).
Alten IL sells retail, three shops (Ms. Maya). Altintash sells fodder to
farmers. Maham builds and buys from the Group (Eng. Bilal). Chemac makes
cement in Aleppo. Two Khalifa factories make iron and concrete.

**Head office, Damascus — seven people.** Mr. Adnan (Founder), Mr. Tarek
(General Manager), Ms. Rania (board; signs above $50,000), Karim (Financial
Controller), Lina (Financial Manager), Huda (Accountant), Fadi
(Administrative Assistant). Mr. Haitham is at the bank.

**Partners abroad.** Ms. Chen, NorthBridge Industrial Trading — the Book 1
cement buyer, who has now opened a machines division and wants to sell to
Al-Hasan as well as buy from it. Mr. Delgado, Westgate Metals — the steel
supplier of Units 2–9.

**The figures the whole book turns on, which the extra material must not
contradict:**

| Fact | Value |
|---|---|
| Steel coil offered | $640 a tonne, CFR Lattakia |
| Discount offered | 7% at 2,000 t |
| Discount agreed | 5% at 1,200 t → $608 a tonne |
| Order value | $729,600 (1,200 × 608) |
| Deposit, 30% on order | about $219,000 |
| Landed cost in the Damascus depot | **$712** a tonne |
| Board threshold | $50,000 |
| The shipment | 48 containers, 1,200 t, 12 coils each |
| Short | one container held 11 coils |
| Off-spec | containers 31–34 measured 4.8 mm, not 5 mm → 40 t rejected |
| Voyage | loaded 10th, sailed 14th, 11 days, arrives Lattakia 25th |
| Clearance | discharged 26th, 4 containers inspected, released 27th |
| Depot at Unit 6 | 6,400 t steel (4 months) · 11 t cement (9 days) |
| Maham's order | 200 t, 60 days, for a warehouse in Homs |
| Year-end (Unit 10) | imports 11 → 19 orders · sales +22% · overdue 9% → 5% · steel cover 4 months → 7 weeks · margin held |
| Maya's lost-sales sheet | 406 people asked for 5 mm bar, 61 for 8 mm, in three months |
| The proposal | import bar as a trial, 200 t, through the existing three shops, review a fourth shop after six months |

**One addition, declared.** The pack adds **Yara**, a new import assistant
at Bashak, as the learner's eyes — the equivalent of Nour in the A2 pack.
She is not at head office, so the book's "seven people at head office" stays
true. Nothing else is invented: no new companies, no new partners, no
figures that contradict the table above.

---

## 1. What the pack is

**`sb2-extra/`** — a second, standalone site, built on the same engine as
`book1-extra/`, delivered as its own zip. Named `sb2-` (Student Book 2) to
avoid colliding with the unrelated `book2/` directory in this repository,
which belongs to the CMA course.

- **Ten units · twelve lessons each · 120 lessons.**
- Six readings and six listenings per unit, as in the A2 pack.
- **15 exercises per lesson · 1,800 in the pack.**
- Audio from the browser's own speech voices; two voices for dialogue.
- Opens from `index.html` with no server, no build step, no network.

## 2. How B1 differs from the A2 pack

Same shell, same five steps, same eight exercise types. What changes is
inside:

| | A2 pack (`book1-extra/`) | B1 pack (`sb2-extra/`) |
|---|---|---|
| Reading length | 5–6 paragraphs, 300–380 words | 6 paragraphs, 420–520 words |
| Dialogue | 14–17 turns | 16–20 turns, with hedging, interruption and repair |
| Sentences | mostly simple and compound | subordination expected: *although*, *unless*, *which*, *so that* |
| Comprehension | mostly retrieval | 2 of the 6 require inference or weighing two facts |
| Gap-fills | vocabulary and fixed phrases | **the unit's grammar form** — present perfect vs past simple, passive, reported speech, conditionals |
| Written tasks | 3–5 sentences modelled | a paragraph or a short document (email, claim, reminder, proposal) |
| Glossary | word → short definition | word → definition **plus the collocation it lives in** |

The three self-marked tasks per lesson (one `short`, two `write`) become
the heart of the B1 pack: the model answers are the register models the
Student Book's Part 6 writing tasks ask for.

## 3. The 120 lessons

Each unit's twelve lessons use that unit's grammar and only characters and
figures from the table in §0.

### Unit 1 · The Group and Its Companies · present perfect vs past simple

**Readings** — 1 What the Group has done this year · 2 Twelve companies,
one job each · 3 Since March · 4 The year the Group stopped making and
started buying · 5 Have you ever bought a machine? · 6 The year-in-review
email

**Listenings** — 1 The annual review · 2 How long have you been here? ·
3 Already, yet and just · 4 We have never done that before · 5 Two late
shipments · 6 Our customer is now our supplier

### Unit 2 · Sourcing a Supplier · must · have to · mustn't · can

**Readings** — 1 Three enquiries, every time · 2 The rules we buy by ·
3 What a good enquiry says · 4 You don't have to take the cheapest ·
5 Checking a company you have never used · 6 Ninety days takes us past the
winter

**Listenings** — 1 We have no supplier for this · 2 May I ask who signs? ·
3 The reply that answered three of four questions · 4 Comparing two
suppliers · 5 Can I order before the board meets? · 6 The telephone call
about the lead time

### Unit 3 · Offers, Prices and the Margin · first conditional · unless · time clauses

**Readings** — 1 The price at the port is not the price · 2 Building the
landed cost · 3 Seven per cent of nothing · 4 Unless we can sell it ·
5 From dollars to the shelf · 6 Who carries the exchange rate?

**Listenings** — 1 Arguing about the discount · 2 If you confirm before
Friday · 3 Reading the offer line by line · 4 The price card in the shop ·
5 As soon as the deposit clears · 6 The counter-offer

### Unit 4 · Ordering and Paying Across Borders · will · going to · present continuous for arrangements

**Readings** — 1 Turning a conversation into an order · 2 Who is allowed to
sign · 3 The file that goes with the order · 4 Thirty per cent on order ·
5 The payment reference nobody writes · 6 Four days that cost nothing and
nearly cost everything

**Listenings** — 1 I am going to sign it, but not today · 2 At the bank
with Mr. Haitham · 3 When will the money arrive? · 4 Reading the purchase
order back · 5 We are shipping on the fourteenth · 6 The deposit has
cleared

### Unit 5 · Shipping In and Clearing Customs · the passive

**Readings** — 1 Five stages, four handovers · 2 The four documents ·
3 It is the same group to you and me · 4 Eleven days at sea · 5 How a
declaration is made · 6 Released on the twenty-seventh

**Listenings** — 1 The names do not match · 2 A courier is booked · 3 Has
the vessel sailed? · 4 Four containers are opened · 5 Five days and then
storage · 6 The trucks leave this evening

### Unit 6 · Goods In: Quality, Quantity and Stock · defining relative clauses

**Readings** — 1 Nothing goes on a shelf until it has been counted ·
2 The container which held eleven · 3 Two tenths of a millimetre · 4 The
photograph that settles it · 5 Four months of steel and nine days of cement
· 6 The claim

**Listenings** — 1 It is only two tenths · 2 The coil which came out of
container 33 · 3 Writing the goods-received note · 4 The driver who wants
to go home · 5 Telling Westgate · 6 The yard that is full and the shelf
that is empty

### Unit 7 · Selling in Syria · reported speech

**Readings** — 1 The same steel, two rooms · 2 What Eng. Bilal asked ·
3 The quotation Lina wrote · 4 Two minutes and twenty bags · 5 Eleven
people asked for bar · 6 What a shop knows that a depot does not

**Listenings** — 1 He said he needed two hundred tonnes · 2 Is that
delivered or collected? · 3 She told him March would be quoted in March ·
4 In the shop · 5 Reporting the week to Lina · 6 They said they would go to
Homs

### Unit 8 · Getting Paid and Giving Credit · should · could · may · might

**Readings** — 1 The aged debt list · 2 A colleague who owes you money ·
3 Half now and half in June · 4 Never mix two arguments in one payment ·
5 What credit actually is · 6 The reminder that works

**Listenings** — 1 I am not refusing, I am waiting · 2 You should talk to
Karim · 3 Could we hold back the claim? · 4 Agreeing a schedule · 5 The
polite first reminder · 6 Might, may and the honest answer

### Unit 9 · When It Goes Wrong · past continuous vs past simple · because of · so · although

**Readings** — 1 Two problems, two different kinds · 2 While the port was
closed · 3 The line nobody painted · 4 He was not angry; he was
disappointed · 5 The apology that starts at step one · 6 What you can put a
number on

**Listenings** — 1 The vessel sailed without the containers · 2 While she
was on leave · 3 The builder telephones · 4 What do you need, and when? ·
5 The explanation afterwards, in writing · 6 Weather and a painted line

### Unit 10 · Reporting the Year and Growing · review · figures and trends

**Readings** — 1 Five figures and one sentence each · 2 Three of those five
changed because we changed something · 3 Four hundred and six people ·
4 The one-page proposal · 5 Who owns it? · 6 One year, and what it taught

**Listenings** — 1 Presenting without reading the sheet · 2 Rose, fell,
held steady · 3 That is not a feeling · 4 Arguing for the trial · 5 The
question that is not about money · 6 Next year's first enquiry

## 4. The lesson template

Unchanged from the A2 pack, because it works:

| Step | | Exercises |
|---|---|---|
| 1 | Before you read / listen | 3 |
| 2 | The text or the dialogue — audio, highlight, glossary | — |
| 3 | Comprehension | 6 |
| 4 | Words in context | 3 |
| 5 | After you read / listen | 3 |

Eight types: `mcq`, `multi`, `tf`, `gap`, `match`, `order` (self-marking);
`short`, `write` (model answer, learner self-marks).

## 5. Build

```
sb2-extra/
  index.html            generated by build.py
  assets/site.css       B1 accent (deeper orange rule, same palette)
  assets/app.js         the engine, with the Book 2 unit table
  assets/data/u1r1.js … 120 files
  build.py  check.py
  README.txt  README.md
```

`check.py` carries one extra gate over the A2 version: **every unit's
lessons must use that unit's grammar**, checked by requiring at least one
`gap` exercise per lesson whose answers are the unit's target forms.

## 6. Gates before delivery

1. `check.py` → 0 problems; 120 files, 12 per unit.
2. `build.py` → index.html references all 120.
3. Headless browser: every lesson renders 15 exercises, no console errors.
4. Every exercise type marks correctly; scores persist and roll up.
5. The **unzipped** copy passes 1–4 from a clean directory.
6. No figure contradicts the table in §0.

## 7. After this

B2 is the only level in the series with no book. `AlHasan_A2_Plan.md`
§§2–7 can be re-aimed at B2 unchanged: the entry contract becomes the exit
contract of this B1 book — present perfect, modals, conditionals, passive,
relative clauses and reported speech all secure — and B2 adds the third
conditional, perfect modals, reduced relatives, hedging and the register
range that negotiation above $50,000 actually needs.

---

*Al-Hasan Holding Group · Damascus*
