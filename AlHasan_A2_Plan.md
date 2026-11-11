# Al-Hasan International — the A2 volume

**A full plan for the missing level, with the B1 book measured as its target and the B2 volume sketched beyond it.**

---

## 0. What I checked, and what is actually there

You asked for A2 first *if it is not there*. It is not. Here is the evidence, from this repository.

| Level | Status | Where it is |
| --- | --- | --- |
| **A1 → A2 (elementary)** | **Exists** — Al-Hasan International **Student Book 1**, ten units, 652 exercises, 2,714 questions. Published as an interactive site (`alhasan/book1/`, commit `0b57ab2`, later superseded). Its source JSON lives in the *pipeline* repo, not here. | not in this tree |
| **A2 proper** | **Does not exist.** No book, no generator, no source. | — |
| **B1 (lower)** | **Exists and is complete** — Al-Hasan International **Student Book 2**, ten units, 223 illustrations, full keys, glossary, irregular verbs. | `book2/` → `AlHasan_International_StudentBook_2.docx` |
| **B2** | **Does not exist.** (The only B2 material in the tree is the TOEFL course, `toefl/`, which is a different product.) | — |

Book 1's level is nowhere labelled, so I measured it from its own target frames:

> U1 `I am …, the … at Al-Hasan.` · `We have got … in the group.` · `This is …, our … .`
> U4 `The unit price is … dollars per tonne.` · `Our price is cheaper than … .`
> U9 `I am very sorry about … .` · `It is late because of … .`

That is **A1 with A2 edges** — present simple, *have got*, *would like*, *could you*, comparatives, a little past simple. Book 2 opens at **present perfect versus past simple** and runs through modals, conditionals, the passive, relative clauses and reported speech.

**So there is a real hole between them**, and it is exactly A2: the past simple is never taught anywhere, yet Book 2 Unit 1 contrasts it with the present perfect on its first page. A learner who finishes Book 1 cannot start Book 2.

**Decision, per your rule: a full plan for A2.** Section 13 sketches B2 so that A2 is designed as the bottom of a three-level spine rather than a patch.

---

## 1. What to call it

Awkward, and worth one minute. The existing numbering is `Book 1` (elementary) and `Book 2` (B1), so an A2 volume belongs *between* them.

**Recommended: rename the series by level, not by number.**

| Now | Becomes | Work |
| --- | --- | --- |
| Student Book 1 | **Student Book A2 — Foundation** *(the existing elementary book, unchanged)* | cover text only |
| *(new)* | **Student Book A2** → this plan | the whole build |
| Student Book 2 (CEFR B1) | **Student Book B1** | three strings in `book2/frames.py`, one in `docxw.py`, one in `book.py` |
| *(future)* | **Student Book B2** | §13 |

Since you asked the question in CEFR terms, level names are what your own catalogue already wants. The cost against the published B1 book is five strings and one rebuild — the content does not move.

**Fallback if you would rather not touch Book 2:** call it **Student Book 1B — Bridge to B1 (CEFR A2)**. Everything in this plan holds either way; only `cast.py`'s strapline and the two covers change. The generator directory is `booka2/` regardless.

---

## 2. The contract: what A2 inherits, and what it must deliver

This is the spine of the plan. A2 has exactly two obligations.

**Entry — assume from Book 1 and do not re-teach:**
present simple of *be* and *have got* · *this/that/these/those* · basic possessives · *there is/are* in the singular · *I would like* · *Can/Could you …?* · cardinal numbers, prices, dates · comparatives in the fixed frame *cheaper than* · *because of* · sequencers *first/then/finally* · the company, the departments, the greeting, the simple email.

**Exit — deliver these, because Book 2 assumes every one of them and teaches none:**

| Form Book 2 needs | Where Book 2 uses it | A2 unit that must deliver it |
| --- | --- | --- |
| past simple — regular, irregular, negative, question | U1, from page one, against the present perfect | **U6, U7** |
| present continuous for now **and** for arrangements | U4 (*present continuous for arrangements*) | **U3, U9** |
| *going to* / *will* | U4 (*will · going to*) | **U9** |
| *can* for ability and permission | U2 (*can for permission*) | **U5** |
| *have to / don't have to* | U2 (*must · have to · mustn't*) | **U8** |
| comparatives and superlatives | U3, arguing a price | **U4** |
| time clauses *when / before / after* | U3 (*when / as soon as / until*) | **U9** |
| countable / uncountable, quantifiers | U6, checking quantity and stock | **U2** |
| prepositions of place and movement | U5, shipping and clearing | **U7** |
| *so / because / but / and* | U9 (*because of · so · although*) | **U10** |
| question formation, question words | U2, writing an enquiry | **U1** |
| numbers, units, figures, simple trends | U10, reporting a year | **U4, U10** |
| the email on a page: subject, greeting, close | every unit, Part 6 | **every unit, Part 6** |
| the Group, the companies, the cast | U1 | **U1** |

Every row is checkable, and §10 turns this table into a gate. Nothing in A2 exists that is not on one of these two lists.

---

## 3. Level specification

What "A2" means operationally in this book, so that an author and a gate can both apply it.

**Grammar inventory — the whole of it, in teaching order:** present simple (all persons, negative, question) · adverbs of frequency · question words and subject/object questions · *there is / there are* · plurals, regular and irregular · countable and uncountable · *some / any / much / many / a few / a little / a lot of* · present continuous, and continuous versus simple · prepositions of time · comparatives, superlatives, *(not) as … as* · *can / could / would like* for requests, offers and ability · imperatives · past simple, regular and irregular, negative and question · past time expressions · sequencers and prepositions of place and movement · *have to / don't have to / can't* · *going to* and *will* · time clauses with *when / before / after* · the connectors *and / but / so / because*.

**Explicitly banned until B1** — these are gate-enforced (§10): present perfect in any form · any passive · *if*-clauses of any kind · relative clauses · reported speech · *should / may / might* · past continuous · *although / despite / unless* · phrasal verbs beyond a listed twenty.

**Lexis.** 28–32 target terms a unit, 280–320 unique across the book, every one concrete and pictured. Beyond the terms, a reading may use only: the A2 core list shipped with the generator, a term from an earlier unit, a proper noun, or a word glossed on the same page.

**Text metrics.**

| Text | Length | Sentences |
| --- | --- | --- |
| Warm Up reading | 120–150 words | mean ≤ 11 words, none over 18 |
| Part 5 extended reading | 180–220 words | mean ≤ 12 words, none over 20 |
| Part 9 case | 60–80 words each, three cases | mean ≤ 11 words |
| Dialogue turn | 6–10 words | 10–14 turns a dialogue |

(Book 2 runs 350–420-word readings and a 2,250-word unit. A2 runs roughly 60 % of that: see §7.)

**Task types.** The balance shifts from production to recognition and controlled practice: about half of every unit is matching, gap-fill with a word bank, labelling a picture, ordering, true/false-correct, and completing a form; a quarter is guided production against a model; a quarter is free-but-scaffolded — the email with its skeleton given, the dialogue with its first and last turn given.

---

## 4. The world

Unchanged, and that is the point: the series' asset is that the same Group, the same companies and the same people carry a learner from A1 to B2. `cast.py` is reused as it stands.

**Head office (Damascus):** Mr. Adnan (Founder) · Ms. Rania (Board) · Mr. Tarek (General Manager) · Karim (Financial Controller) · Lina (Finance Manager) · Huda (Accountant) · Fadi (Admin).
**Specialists:** Rami (Bashak · Imports) · Mr. Samir (Komosh · Freight) · Ms. Dana (Depot · Quality) · Ms. Maya (Alten IL · Retail) · Eng. Bilal (Maham · Site) · Mr. Haitham (the bank).
**Partners:** Ms. Chen (NorthBridge) · Mr. Delgado (Westgate Metals).

**What changes at A2 is the camera position.** Book 2 looks at the Group from the boardroom — two strands, the import side facing a supplier abroad and the market side facing Syria. A2 looks at it from **one desk**: the learner is the newest person at the Chemco depot, and the book is their first ten weeks. Head office appears as voices on the phone; the partners abroad appear once, at the end, as a visit. That keeps A2's content genuinely new rather than a simplified replay of either neighbouring book.

**The two strands become the two halves of a working day**, and they keep Book 2's rule that they never share a block:

- **Strand A — the desk.** The office: the phone, the email, the order form, the invoice, the counter. Speakers: Fadi, Huda, Lina, a customer.
- **Strand B — the floor.** The yard and the warehouse: the pallet, the forklift, the delivery note, the count. Speakers: Ms. Dana, Mr. Samir, a driver, a storeman.

Dialogue 1 is always the desk; Dialogue 2 is always the floor; different speakers, a different document, a different register — exactly the architecture `check.py` already asserts.

---

## 5. The ten units

| # | Title | New grammar | Function | Desk (D1) | Floor (D2) | Document |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | **Your Company, Your Job, Your Week** | present simple, all persons, negative and question · adverbs of frequency · question words | Admin | calling head office to introduce yourself | a tour of the depot | staff list · job card |
| 2 | **What We Have, and How Much** | *there is / there are* · countable and uncountable · *some / any / much / many / a few / a little* · plurals | Logistics | a stock question by phone | counting pallets in bay 3 | stock list |
| 3 | **Today, and This Week** | present continuous · continuous versus simple · prepositions of time | Logistics + Admin | "what are you doing today?" | a lorry is loading now | weekly schedule |
| 4 | **Prices, Sizes, and Which Is Better** | comparatives · superlatives · *(not) as … as* · numbers, units, measurements | Trade + Finance | comparing two quotations | measuring and weighing | price comparison sheet |
| 5 | **Taking an Order** | *can / could / would like* for requests and offers · imperatives for instructions | Trade | an order on the phone | handing the goods over at the counter | order form |
| 6 | **Yesterday, Last Week** | past simple: regular and irregular, negative, question · past time expressions | Admin + Logistics | reporting what happened | what came in yesterday | day log |
| 7 | **The Delivery and the Papers** | past simple extended · *first / then / after that / finally* · prepositions of place and movement | Logistics | confirming a delivery | checking and signing for it | delivery note |
| 8 | **Money In, Money Out** | *have to / don't have to / can't* · dates and amounts in writing | Finance + Admin | asking about an unpaid invoice | cash and receipt at the counter | invoice · receipt |
| 9 | **Next Week, Next Month** | *going to* versus *will* · time clauses with *when / before / after* | Admin + Trade | making an appointment | planning the week's loads | diary · plan |
| 10 | **A Small Problem, and a Short Report** | review, no new forms · *and / but / so / because* · apologising and thanking · the language of simple figures | Trade · Finance · Logistics · Admin | an apology call to a customer | explaining the delay on the floor | short report |

**Unit 1** establishes the Group from the bottom: who the twelve companies are, what the learner's own department does, and what happens every day, every week, every month. It is the only unit that is mostly description, and it earns that because it installs the present simple and the question forms the other nine depend on.

**Units 2 and 3** are the warehouse pair. Unit 2 is quantity — what is there and how much of it, which is where countable and uncountable belong because a learner can see the difference between *three pallets* and *some steel*. Unit 3 is time — what is happening now against what happens always, taught at the one place the distinction is unavoidable: a yard where one lorry is loading while every lorry loads on Tuesdays.

**Unit 4** is the first unit with an argument in it. Two quotations, side by side, and the learner has to say which is better and why: cheaper, heavier, faster, the cheapest, not as strong as. It also installs numbers, units and measurement properly, which Book 2 Unit 10 will later need for figures and trends.

**Unit 5** is politeness. Requests, offers, and the imperative for instructions — the three registers of a counter and a telephone — around a single document, the order form, filled twice.

**Units 6 and 7** are the past, and they are the heart of the book, because the past simple is the form Book 2 cannot open without. Unit 6 teaches it from a day log: what arrived, what we sent, what we did not do, what did you do. Unit 7 extends it into a narrative with sequencers and prepositions of movement: the lorry came from Tartous, went through the gate, stopped at bay 2.

**Unit 8** is money and rules: *have to* for what the company requires, *don't have to* for what it permits, *can't* for what it forbids — taught on payment terms, which is where rules are least abstract. It also teaches dates and amounts in writing, which every later email needs.

**Unit 9** is the future, both of them, with the diary as the document: *going to* for what is planned, *will* for what is decided as you speak, and the time clauses that join them.

**Unit 10** adds no new form. It is the review unit: a small problem, an apology, an explanation with *because* and *so*, and a five-line report of the ten weeks in figures — which is exactly the shape of the question Book 2 Unit 1 opens with.

---

## 6. The unit template

**Keep all eleven parts and their exact exercise letters.** `book2/check.py` already asserts them, `docxw.py` already renders them, and the site generator and the video course both map onto them. The template is the series' spine and A2 should not fork it.

What changes is the *scope* of each part, not its shape.

| Part | Letters | At B1 | At A2 |
| --- | --- | --- | --- |
| Warm Up | A–D | 3 questions, a 350-word read, comprehension | 3 questions on a picture, a 120–150-word read, comprehension with 0 done for you |
| 1 · Vocabulary and Terminology | A–H | 32–40 terms, definition matching, collocation | 28–32 terms, picture-labelling first, then matching, then gap-fill from a bank |
| 2 · Grammar | A–J | one B1 form, contrasted | one A2 form, with a grammar-card figure, a rule in six words, and more, shorter items |
| 3 · Listening and Dialogue | D1 A–C, D2 A–B | two strands, 16–20 turns | desk and floor, 10–14 turns, 6–10 words a turn, one gapped transcript |
| 4 · Speaking and Your Role | A–D | role cards, open | a model dialogue given whole, then the same with one side blank, then a role card |
| 5 · Extended Reading | A–F | 350–420 words | 180–220 words, glossed, with a picture, and a comprehension ladder from true/false to *why* |
| 6 · Writing (a real email) | A–D | a brief, written cold | the model email, the same email gapped, a skeleton, then the learner's own |
| 7 · Trade-Skills Track | A–D | the document read and argued | the document labelled, then filled, then filled from a dialogue |
| 8 · Consolidation | A–D | mixed revision | mixed revision, half of it recycling earlier units' terms |
| 9 · Case Studies and Decisions | 3 cases | a paragraph and a decision | 60–80 words and one decision, with two options offered |
| 10 · Review and Can-Do | A–I | the unit, tested | the unit, tested, plus a spelling and a pronunciation item |
| 11 · Foundations for Further Study | A–C | study skills for B1 | **"Foundations — how the words work":** plural *-s*, third person *-s*, *-ing* and *-ed* spelling, the three sounds of *-ed*, numbers said aloud, word families |

Part 11 is the only part whose *purpose* changes, and it changes because "foundations for further study" is an abstraction an A2 learner cannot use, while the spelling and sound of the endings they are being asked to produce is a need they feel in every exercise. The letter count (A–C) is unchanged, so the gate does not move.

**Figures: 22 a unit**, as at B1 — 20 authored plus the end card and the next-unit teaser added at render time.

---

## 7. Budgets, measured against Book 2

Book 2's real numbers, counted from its source:

| | Book 2 (B1), per unit | **Book A2, per unit** | Book A2, total |
| --- | --- | --- | --- |
| prose words | 2,103–2,411 (mean 2,265) | **1,200–1,500** | ~13,500 |
| exercises | 62 | **62** | 620 |
| numbered items | 244–252 | **260–280** | ~2,700 |
| authored figures | 20 (+2 at render) | **20 (+2)** | 220 |
| dialogues | 2 | **2** | 20 |
| target terms | 32–40 | **28–32** | 280–320 unique |

The exercise count holds and the prose falls by 40 %: an A2 unit is the same amount of *work* and a lot less *reading*. The item count rises because A2 drills.

Back matter, as at B1: the irregular verbs table (about 40 verbs, not 60 — only those the book actually uses), the glossary of every term with its unit, and the full answer keys.

**Whole book:** ten units, ~13,500 words of prose, 620 exercises, ~2,700 items, ~225 illustrations, keys, glossary, verbs. One .docx, built from source.

---

## 8. Figures

The fifteen frames in `book2/frames.py` carry most of it unchanged: `cover_front`, `cover_back`, `scene_banner`, `end_card`, `team_strip`, `dialogue_scene`, `half_scene`, `grammar_card`, `icon_row`, `dos_donts`, `process_strip`, `doc_card`, `split_panel`, `label_panel`, `companies_strip`, `route_strip`.

**Three new frames, because A2 needs pictures to carry meaning that B1 carries in words:**

1. `word_picture_grid(title, items)` — eight to twelve labelled pictures, for Part 1 A at every unit. This is the single most-used new frame.
2. `number_card(title, rows)` — a number, its figure, and how it is said: *1,250 kg · one thousand two hundred and fifty kilos*; prices, dates, measurements. Used in Units 4, 8 and 10.
3. `form_card(title, fields, filled)` — a blank form beside the same form filled in, which is the Part 7 figure for the order form, delivery note, invoice and receipt.

Typical allocation of the 20 authored figures in a unit: 2 openers, 1 warm-up scene, 2 vocabulary grids, 1 grammar card, 2 dialogue scenes, 1 speaking panel, 1 reading scene, 1 email/doc card, 2 trade-skills form cards, 1 process strip, 2 case panels, 2 review/icon rows, 2 free for the unit's own subject.

---

## 9. The pipeline

`booka2/`, mirroring `book2/` file for file. Copy, then change three things.

| File | Action |
| --- | --- |
| `art.py` | **reuse unchanged** — palette, people, icons, the Chromium renderer |
| `docxw.py` | **reuse unchanged** — the 28 paragraph and 4 table signatures |
| `skel/` | **reuse unchanged** — styles, numbering, fonts |
| `preview_docx.py` | **reuse unchanged** |
| `frames.py` | reuse + the three new frames of §8; cover text to A2 |
| `cast.py` | same cast; new `UNIT_TITLES`; strapline unchanged |
| `book.py` | same assembly; `d.cefr('CEFR A2 …')`; irregular list cut to the ~40 used; front banner reset to the depot |
| `check.py` | same assertions + the four new gates of §10; terms range 28–32 |
| `content/u01.py … u10.py` | **new** — the whole authoring job |
| `a2core.txt` | **new** — the A2 core word list the lexis gate runs against |

Build exactly as Book 2 does:

```
python3 book.py ../AlHasan_International_StudentBook_A2.docx   # the whole book
UNITS=1,2 python3 book.py out.docx                             # selected units
python3 check.py                                               # structural + level gates
python3 preview_docx.py out.docx page.png 30 180               # a page preview
```

> **Note on this container:** `art.py` renders SVG through headless Chromium at `/opt/pw-browsers/chromium_headless_shell-1194/…`, which is not present in this session's image, so `book2/` cannot currently build here. The path needs re-pointing (or Chromium installing) before the first A2 build — a one-line change in `art.py`, worth doing as step 1 so that nothing is authored blind.

---

## 10. The gates

Book 2's structural check stays, and four A2 gates join it. Each is mechanical, which is the point: the level is not a matter of opinion once it is a test.

**G1 · Structure** *(existing)* — eleven parts in order, exercise letters exactly `ABCD / ABCDEFGH / ABCDEFGHIJ / ABC+AB / ABCD / ABCDEF / ABCD / ABCD / ABCD / 3 cases / ABCDEFGHI / ABC`; 22 figures; every key label points at a real exercise; no duplicate labels; the key is in part order.

**G2 · Level** *(new)* — no banned form appears anywhere in a unit, and no form appears before the unit that teaches it. Implemented as a pattern list over every `p`, `ex`, `items`, `dlg` and `bank` string: `have/has + past participle`, `was/were + past participle`, `if`, `who/which/that` as a relative, `said that`, `should/may/might`, `was/were + -ing`, `although/despite/unless`. Each unit declares `allows=[…]` and the gate fails on anything outside the union of its own and earlier units' allowances. Fixed phrases are whitelisted explicitly, by string, never by exception.

**G3 · Sentences** *(new)* — per reading block: mean sentence length ≤ 12 words, no sentence over 20, no sentence with more than one subordinate clause.

**G4 · Lexis** *(new)* — every content word in a reading or dialogue is in `a2core.txt`, or in this unit's `TERMS`, or in an earlier unit's `TERMS`, or a proper noun from `cast.py`, or glossed in the same block. The gate prints the offenders, which is also how `a2core.txt` gets maintained.

**G5 · Recycling** *(new)* — each unit from 3 onward uses at least eight terms taught in earlier units, so the book compounds instead of resetting.

**G6 · Exit contract** *(new)* — the fourteen rows of §2's exit table are a literal list in the gate; each names the unit that must teach it, and the gate asserts that unit declares it in `allows`. This is the A2 equivalent of the coverage proof used for the CMA books: it fails if the book ever stops delivering Book 2's entry requirements.

---

## 11. Build order

| Step | What | Done when |
| --- | --- | --- |
| 0 | Decide the naming of §1 | one line from you |
| 1 | Fix the Chromium path; scaffold `booka2/` from `book2/`; write `cast.py`, the three frames, `a2core.txt`, and G2–G6 | `python3 check.py` runs and reports "not written yet" ten times |
| 2 | **Units 1–3**, then gate, then a page preview | 0 findings; the template proved at A2 |
| 3 | **Units 4–7** | 0 findings |
| 4 | **Units 8–10** | 0 findings; G6 passes, i.e. the exit contract is complete |
| 5 | Back matter — irregular verbs, glossary, answer keys — and the two covers | the full book builds |
| 6 | Full build, full gate run, previews of ten pages spread across the book | `AlHasan_International_StudentBook_A2.docx` |
| 7 | Commit, push, deliver | the .docx in your hands |

Steps 2–4 are the work; each unit is roughly the size of one Book 2 unit to author and rather less to write, because the prose is 40 % shorter and the exercises are more patterned.

**Afterwards, optionally and in this order:** the interactive site, exactly as `alhasan/book1/` was generated — same part names, same per-item traceability back to the book block; then the video course, as `courses/eam-b1` does, one video a part.

---

## 12. What this gives you

- `AlHasan_International_StudentBook_A2.docx` — ten units, ~225 illustrations, full keys, glossary, irregular verbs.
- `booka2/` — the generator, so the book is reproducible and correctable at source.
- Six gates, one of which proves that a learner finishing A2 can open B1 on page one.
- A three-level series with no hole in it.

---

## 13. And then B2

Not the full plan — you asked for one — but the shape, so A2 is built as the bottom of a spine.

**Student Book B2 — *The Group Abroad*.** The camera moves out again: Al-Hasan is no longer only importing and selling at home but negotiating, contracting and answering for itself internationally. Ten units: the negotiation · the contract and its terms · tendering and bidding · compliance, standards and certification · financing the trade (the instruments of credit) · the joint venture · the dispute and its resolution · forecasting and the budget · presenting to a board · the annual report and the next three years.

**Grammar spine:** the full perfect system including past perfect and future perfect · the complete passive including the causative and passive reporting · second, third and mixed conditionals · advanced modality and degrees of certainty · participle and reduced relative clauses · inversion and emphasis for argument · nominalisation and the register of written business English · hedging, qualification and diplomatic distance · cohesion across a long text.

The useful property of this sketch is that it is continuous with both neighbours: B2's first unit assumes exactly what B1's tenth delivers, in the same way A2's tenth is built to hand over to B1's first. The series is then one argument from "I am the new person at the depot" to "here is our case to the board."

---

## 14. Open decisions

1. **Naming** — level names (recommended: A2 / B1 / B2, five strings changed in the published B1 book) or the no-touch fallback, *Book 1B — Bridge to B1*.
2. **Chromium** — may I re-point `art.py` at this container's browser, so A2 can be built and previewed here rather than authored blind?
3. **Scope of this round** — the .docx alone, or the .docx and then the interactive site?

Nothing in sections 2 to 11 depends on any of the three; they change the label, the build path and what follows, not the book.
