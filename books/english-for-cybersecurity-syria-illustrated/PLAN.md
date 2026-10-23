# English for Cybersecurity Personnel — Illustrated Student Book (A2 → B1) · Syria Edition

**A structural clone of _English for Auto Maintenance Personnel — Illustrated Student
Book_ (the uploaded `Fixed_EAM_Book_U1-U10_Illustrated_StudentBook.docx`).**
Same method, same shape, same visual language, same length — a different profession.

| | |
| --- | --- |
| **Source** | `Fixed_EAM_Book_U1-U10_Illustrated_StudentBook.docx` · 141 pages · 10 units · 40 figures |
| **Target** | `books/english-for-cybersecurity-syria-illustrated/dist/EnglishForCybersecurity_Syria_Illustrated_StudentBook_A2-B1.docx` |
| **Level** | Upper A2 → Low B1, on the source's own progression (U1–4 Upper A2 · U5 bridge · U6–10 Low B1) |
| **Setting** | Syria throughout — Damascus, Aleppo, Homs, Latakia |
| **Author** | Mohamad Khorbatli |
| **Relationship to the other cybersecurity book** | Separate tree, separate book. `english-for-cybersecurity-syria` is the NGO-A2-template twin (10 units × 41 exercises, answer key inside). This one is the EAM-template twin: illustrated, dual-track, no answer key, inline models. |

---

# PART ONE — THE SOURCE, MEASURED

Nothing below is estimated. Every figure was taken off the uploaded file's own XML or
off a LibreOffice render of it.

## 1 · Gross measurements

| measure | value |
| ---: | --- |
| Pages (LibreOffice render) | **141** |
| Units | **10**, each **13–16 pages** (13 · 14 · 14 · 14 · 14 · 14 · 14 · 14 · 14 · 16) |
| Top-level elements (paragraphs + tables, reading order) | **3,450** |
| Paragraphs | **5,320** (3,290 at top level; the rest inside table cells) |
| Tables | **160** — 810 rows, 2,030 cells |
| Images | **40** PNGs, one per figure, no image reused |
| Words | **~44,600** (42,760 in the units' own flow) |
| Explicit page breaks | **9** — one before each unit after the first |
| Section properties | **1** — A4 (11906 × 16838 twips), 1-inch margins all round |
| Front matter | **none** — the book opens on "Unit 1:" |
| Back matter | **none** — no answer key, no appendix; it closes on a short "End of the Course" box |
| Paragraph styles used | **none for body** — 5,290 of 5,320 paragraphs carry no `pStyle`; the book is built entirely from **direct formatting** |
| Default font | **Calibri 11 pt** (`docDefaults`, sz 22 half-points) |

⚠ **The styles-free construction is the single most important technical fact.** The
other ESP books in this repository use `Heading1/2/3` and a shared style sheet. This book
does not: every heading, bar, box and caption is a plain paragraph carrying its own
colour, size, shading and border. A clone must therefore reproduce **direct formatting**,
element by element, not a style sheet.

## 2 · The design system, measured

Six colours, ten fills, five type sizes. That is the whole book.

| role | formatting | count |
| --- | --- | ---: |
| Body text | Calibri 11, colour `26303B` | 1,929 runs |
| Unit head | **sz 20 pt bold**, colour `1F3864` | 10 |
| Unit subtitle | sz 10 italic, colour `5A6472` | 10 |
| Warm-Up bar | **sz 14 bold white on `FF9900`** | 10 |
| Part bar | **sz 14 bold white on `0066CC`** | 100 |
| Track label | sz 10 bold italic, `5A6472` | 127 |
| Exercise head | **sz 12 bold**, `0066CC` | 423 |
| Instruction box (Parts 1–10) | bold `0066CC` on `E6F3FF` | 379 |
| Instruction box (Warm Up) | bold `0066CC` on `FFF9E6` | 30 |
| Reading / script / model / frame box | body on `F8F8F8` | 291 |
| Word bank | bold on `FBFBEF` | 57 |
| Gloss strip | bold on `EEF3F9` | 39 |
| "Watch out!" error box | bold `C0392B` on `FBECEC` | 10 |
| Column A / Column B / "Model — read this first:" labels | bold `0066CC` | 241 |
| MCQ stem | bold, no colour | 179 |
| Plain item line (gaps, options, questions) | body default | 1,242 |
| Figure | centred image, **540 px wide** | 40 |
| Figure caption | sz 9 italic `1F3864`, centred | 40 |
| Matching table, Column A | 3 columns (700 / 3300 / 1200 twips), no fill | 74 |
| Matching table, Column B | 2 columns (700 / 8326), no fill | 76 |
| Grammar Focus Box table | 4 columns, header fill `009688`, body `FAFAFA` | 10 |

## 3 · The unit skeleton — eleven blocks, identical in all ten units

| block | bar colour | track label | exercises |
| --- | --- | --- | ---: |
| **Warm Up** | orange `FF9900` | `[OP] Operator track · in-class starter` | **3** |
| **Part 1 · Vocabulary and Terminology** | blue | `[OP] … pre-class input` | **7** |
| **Part 2 · Grammar — <point>** | blue | `[OP] … pre-class input` | **7** |
| **Part 3 · Listening** | blue | `[OP] … scripts printed inline` | **3** |
| **Part 4 · Speaking** | blue | `[OP] … in-class output` | **3–4** |
| **Part 5 · Reading** | blue | `[OP] … pre-class input` | **3** |
| **Part 6 · Writing** | blue | `[OP] … in-class / homework` | **4** |
| **Part 7 · Management File — <topic>** | blue | `[PR] Practitioner track (optional for beginners)` | **5** (7A–7E) |
| **Part 8 · Global Case Study — <title>** | blue | `[PR] … pre-read / in-class discuss` | **2** |
| **Part 9 · Local Case Study — Syria in Focus: <title>** | blue | `[PR] … pre-read / in-class decide` | **1** |
| **Part 10 · Review and Can-Do** | blue | `[OP + PR] · homework / self-study` | **3–4** |

**41–43 exercises per unit; 420 in the book.** The exercise *titles* inside Parts 2, 8, 9
and 10 are near-fixed across units (Notice · Grammar Focus Box · Controlled Practice ·
<variable> · Correct the Sentence · Freer Practice · Grammar Review; Vocabulary in
Context · Discussion; Decision Task; Spiral Review · Can-Do · Glossary). Parts 1, 3, 4, 5,
6 and 7 re-title every unit around that unit's subject.

## 4 · The house figures — identical in all ten units

| per unit | count |
| --- | ---: |
| Part bars (Warm Up + Parts 1–10) | **11** |
| Tables | **16** (7–8 × Column A, 7–8 × Column B, 1 × Grammar Focus Box) |
| Matching-table rows | **78** |
| MCQ option lines | **40** (= 10 stems × 4 options) |
| Pronunciation lines | **6** |
| Glossary words | **10** |
| Spiral-review items | **5** |
| Can-Do checkboxes | **5** |
| Audio tracks | **5** — `x.1` pronunciation · `x.2`–`x.4` listening · `x.5` manager dialogue |
| Figures + captions | **4 + 4** |
| "Model — read this first:" slots | **7** |
| Word banks | 5–6 · Gloss strips 3–4 · "Watch out!" box **1** |
| Gap-fill lines | 19–31 |
| Elements / paragraphs / words | ~344 / ~328 / ~4,300 |

## 5 · Method — how this book actually teaches

1. **Two tracks in one book.** `[OP] Operator` is the mechanic/technician doing the job;
   `[PR] Practitioner` is the manager. Warm Up and Parts 1–6 are Operator; Parts 7, 8 and 9
   are Practitioner (Part 7 marked *optional for beginners*); Part 10 is both. Every block
   is labelled, so one book serves a mixed class and a self-studying supervisor.
2. **Flipped sequencing is printed on the page.** Each label also says *when*: pre-class
   input, in-class starter, in-class output, homework. The book is a timetable as well as a
   syllabus.
3. **Answers are inline, not in a key.** Every exercise that needs a worked example carries
   `(0. is done for you.)` with item 0 completed. There is no answer key — by design.
4. **Scripts are printed where they are used.** No audio appendix: every listening script
   sits under its own `🔊 Audio Track x.y` chip.
5. **Grammar is taught in a seven-step loop**: Notice (text) → Focus Box (4-column table) →
   *Remember* line → **Watch out!** (the two errors that actually occur) → controlled
   practice → correction task → freer practice → review MCQ, closing with a forward
   reference: *"You will see this again in the Part 5 reading."*
6. **Two case studies per unit, deliberately paired.** Part 8 is global and discussed;
   Part 9 is Syrian and **decided** — it ends in a Decision Task with an answer frame and a
   phrase bank.
7. **A "Stretch [PR]" line** turns a routine task into a dilemma for stronger students:
   19 of them, one in Part 4 and one in Part 7 of most units.
8. **Every writing task is scaffolded the same way:** instruction → *Model — read this
   first* → Plan (fill in, then write) → Word bank → **Check before you finish** checklist
   with ☐ boxes and the word count.
9. **Spiral review.** Part 10 reviews five items of the unit's own lexis and grammar; the
   Can-Do list is five `I can…` statements, the last one marked *(Practitioner)*.
10. **One continuous cast and one continuous workplace.** Cham Motors, Damascus: Maher
    (manager), Nabil (mechanic), Rana (reception), Tarek (apprentice), Lina (a young
    mechanic who opens her own workshop), Mr Aboud (customer), Sami (a garage founder).
    The same people recur from Unit 1 to Unit 10.

## 6 · Content coverage and length, by block type (measured word bands)

| block | n | min | mean | max |
| --- | ---: | ---: | ---: | ---: |
| Warm-up reading | 10 | 44 | **63** | 81 |
| Part 5 readings (main + "… in Syria") | 20 | 86 | **152** | 202 |
| Part 3 listening scripts (3 per unit) | 36 blocks | 6 | 69 | 127 |
| Part 7 manager dialogue (7B) | 10 | 76 | **92** | 109 |
| Part 8 global case study | 10 | 125 | **152** | 175 |
| Part 9 Syria case study | 10 | 105 | **139** | 168 |
| Part 4 role-play model + cards | 38 | 17 | 31 | 47 |
| Part 7 frames and cards | 20 | 30 | 39 | 51 |
| Part 9 answer frame + phrase bank | 20 | 18 | 23 | 28 |
| Writing tasks | 40 | — | — | 50–70 words asked (reflections 40–60; 7E 50–80) |

## 7 · The visual system, measured

| measure | value |
| --- | --- |
| Figures | **40** — exactly **4 per unit** |
| Placement | Warm Up (10 of 40 units' first figure), Part 1, Part 2, Part 4, Part 5 — varying by unit |
| Numbering | `Figure <unit>.<1–4>` — ⚠ **assigned by content role, not by position**: Unit 3 prints 3.2 before 3.1, Unit 5 prints 5.2, 5.4, 5.3, 5.1 |
| Canvas | **1440 × 360–480 px** PNG (24-bit, no alpha), placed at **540 px wide** — a 2.67× downscale, so ~192 dpi on the page |
| Caption, in-image | one line, centred, navy, sentence case |
| Caption, in-document | `Figure x.y · <caption>` — sz 9 italic `1F3864`, centred, directly under the image |
| Palette | navy stroke `#1F3864`/`#223A5E` · pale blue fill `#E8EEF8` · grey `#C8CDD2` · mid grey `#9AA3AC` · accent blue `#1565C0` · alert red `#C0392B` |
| Type in figures | DejaVu Sans (matplotlib default) — bold for labels, regular for captions |
| Style | **flat vector line-art**: rounded-rectangle panels, 2 px strokes, no gradients, no photographs, no clip-art |

**The twelve figure archetypes actually used** (and therefore the twelve the generator must
implement): two-panel scene · role row · labelled object with leader lines · grammar
contrast panel · icon row · ordering task (circles + ruled answer lines) · numbered process
chain with arrows · gauges with answer lines · comparison bars · document mock-up ·
two-person scene · three-group diagram.

## 8 · Defects found in the source — recorded, and **not** to be reproduced

1. ⚠ **All 70 "Model — read this first:" boxes are empty.** Seven per unit — Part 1's
   *Write About…*, all four Part 6 tasks, 7E Supervisory Writing, and the Part 9 Decision
   Task. The scaffold promises a model and prints a blank grey box. **This is the single
   largest content gap in the source and the clone will fill every one of them.**
2. **Text-collision and spacing bugs inside figures** — e.g. *"Number the stepsin the
   correct order."* (missing space); the ESTIMATE mock-up's ruled lines striking through its
   own text; its title overflowing the box.
3. **Unlabelled "label the parts" figures** — Figure 1.3 draws leader lines to blank grey
   dashes with no part names anywhere in the image, so the task cannot be checked.
4. **Figure numbering out of document order** in Units 3, 5, 6, 7, 8, 9 and 10.
5. **Two stray shaded spacer paragraphs** (`EEF3F9`) left in Unit 1 Part 1.
6. **Inconsistent level labelling** — the subtitle says *Upper A2* in Units 1–4, *A2 → B1
   (bridge)* in Unit 5 and *Low B1* in Units 6–10, which is correct and deliberate, but the
   book never explains the progression to the student.

---

# PART TWO — THE PLAN

## 9 · What will be built

**One book.** *English for Cybersecurity Personnel — Illustrated Student Book (A2 → B1),
Syria Edition.* Ten units, eleven blocks each, 41–43 exercises per unit, 40 figures,
50 audio scripts printed inline, no answer key, ~141 pages — **element-for-element
parallel with the source, unit by unit.**

### 9.1 The syllabus

| # | unit | level band | grammar (kept from the source's progression) |
| ---: | --- | --- | --- |
| 1 | **Introduction to the Computer and the IT Department** | Upper A2 | present simple vs present continuous |
| 2 | **Inside the System — Machines, Accounts and Data** | Upper A2 | there is / there are + some / any / much / many |
| 3 | **Safe Working at the Desk — Passwords and Protection** | Upper A2 | imperatives and sequencers |
| 4 | **Checking, Readings and Diagnosis** | Upper A2 | comparatives and superlatives |
| 5 | **The Incident Process — From Report to Closure** | A2 → B1 bridge | active and passive |
| 6 | **Routine Maintenance — Updates, Backups and Checks** | Low B1 | requests, offers and advice (modals) |
| 7 | **At the Help Desk — Requests, Estimates and Handover** | Low B1 | future forms (will / going to / present continuous) |
| 8 | **Rules, Standards and the Written Policy** | Low B1 | must / have to / mustn't |
| 9 | **Incidents, Recovery and Repeat Problems** | Low B1 | present perfect vs past simple |
| 10 | **The User, the Provider and Explaining Security** | Low B1 | reported speech |

### 9.2 Parts 7, 8 and 9 — the practitioner spine

| # | Part 7 · Management File | Part 8 · Global Case Study | Part 9 · Syria in Focus |
| ---: | --- | --- | --- |
| 1 | Welcoming a new trainee | A small office gets a help desk | The first account list |
| 2 | Checking the stock of machines and licences | The office that never lost a record | Genuine licence or cheaper copy? |
| 3 | The desk induction | The office with no shared passwords | Raising a small office to bank standard |
| 4 | Checking the weekly report | Why standard figures matter | Changing the backup interval |
| 5 | Planning the day's work | The team that cut waiting times | The three-day job at the branch |
| 6 | Approving a maintenance quote | The maintenance plan that kept customers | Only the work the system needs |
| 7 | A big job and the week's schedule | The office you can see online | When the licence is late and the power is off |
| 8 | A policy check before handover | The honest disclosure | The guarantee that kept its promise |
| 9 | A repeat problem and a warranty repair | The office that recovered in a day | Rebuild or replace? |
| 10 | The security-team meeting | Launching security for a new system | Carrying a famous name and our own |

### 9.3 The cast and the workplace

**Cham Systems, Damascus** — an IT and security department inside an ordinary Syrian
company, with a **help desk** (the source's reception), a **workshop bench** for machines,
and a **store** of spare machines, disks and licences.

| who | role | carried from the source |
| --- | --- | --- |
| **Maher** | IT and security manager — the `[PR]` voice | the service-department manager |
| **Nabil** | security officer / senior technician | the mechanic |
| **Rana** | help-desk officer | reception |
| **Tarek** | trainee, first week | the apprentice |
| **Lina** | young officer who later sets up her own practice | the young mechanic |
| **Mr Aboud** | customer / section head | the customer |
| **Sami** | founder of a one-room office that grows | the garage founder |

⚠ **Decision for approval:** the cast keeps the source's first names so the two books read
as one family of materials. Say the word and they will be renamed instead.

### 9.4 The Syrian material — the real constraints, as the subject of the exercises

Power on a schedule, so a long restore is planned around the generator · slow, shared
connections, so files move on USB sticks · licences that cannot be paid for from Damascus
and are bought through a reseller abroad · machines past support and parts that take months
· staff who learned computers on one shared machine, so accounts get shared out of habit ·
Arabic phishing by SMS and messaging app · the manager's messaging account taken over to
ask a clerk for a transfer · and paper as the fallback that still settles a dispute.
Institutions named: the Ministry of Communications and Technology, the Syrian
Telecommunications Establishment, the National Agency for Network Services (the `.sy`
register), the Syrian Computer Society, the Central Bank's instructions to banks, the
commercial register, and the IT faculties of Damascus and Aleppo.

### 9.5 The standing rule on content

⚠ **This is a book about defending an office, and nothing in it teaches an attack.** The
attacker appears only as what arrives — a message, a call asking for a code, a file on a
borrowed USB stick. Every exercise asks the learner to notice it, report it, record it,
explain it to a colleague or write it up for a manager. **Criterion 15 makes this a
measurement, not an intention.**

## 10 · Fidelity criteria

The clone is correct when **all sixteen** hold.

1. **3,450 top-level elements in the same reading order**, and unit *N* matches source
   unit *N* element for element.
2. The same **5,320 paragraphs**, **160 tables**, **810 rows**, **2,030 cells**.
3. The same **direct formatting** on every element: size, bold, italic, colour, fill,
   borders, alignment — verified element by element, not by eye.
4. The same **11 part bars per unit**, in the same two colours.
5. The same **127 track labels**, with the same nine wordings in the same places.
6. The same **423 exercise headings** and the same **409 instruction boxes** (379 blue +
   30 cream).
7. The same **16 tables per unit** with the same column widths, and **78 matching rows**.
8. The same **40 MCQ options per unit**, **6 pronunciation lines**, **10 glossary words**,
   **5 spiral-review items**, **5 Can-Do boxes**, **5 audio tracks**, **1 Watch out! box**.
9. The same **40 figures**, 4 per unit, 540 px wide, each with an in-image caption and a
   `Figure x.y ·` caption line beneath.
10. The same **9 page breaks**, A4 page set-up and margins; **no front matter, no answer
    key**; the closing "End of the Course" box.
11. Word volume within **±3 %** of 44,600, and every measured block band in §6 respected.
12. **141 pages ± 2**, and every unit opening on its own page.
13. ⚠ **Zero empty model boxes** — all 70 written (see §11).
14. Every figure passes the drawing checks: canvas size, no text overflow, no collision, a
    caption, and only house-palette colours.
15. ⚠ **The defensive sweep reports zero hits** over the built document.
16. The package is well-formed: 52 parts, every XML part parseable, every image referenced.

## 11 · Declared improvements on the source

| # | what | why |
| ---: | --- | --- |
| 1 | **Write all 70 models** (7 per unit, 50–80 words each, in the cast's own voice) | A scaffold that promises a model and prints a blank box is unusable; this is ~4,500 words of new, carefully levelled writing |
| 2 | **Fix the figure text bugs** — no missing spaces, no line/text collisions, no overflowing titles | The source ships at least three |
| 3 | **Label every "label the parts" figure** with the words the task asks for | Otherwise the task cannot be answered or checked |
| 4 | **Number figures in document order** (x.1 … x.4) | The source's order is scrambled in seven units |
| 5 | **Drop the two stray shaded spacers** | Leftovers; they render as empty tinted bars |
| 6 | **Add one line to each unit subtitle naming the level step** | So a student can see Upper A2 → bridge → Low B1 happening |

Nothing else about the source is "improved". Its method, sequencing, dual track, inline
answers, case-study pairing and visual language are reproduced as they are.

## 12 · Toolchain to be built

```
build/figures.py    # 12 archetypes → 40 PNGs at 1440×360–480, house palette, QA'd
build/compile.py    # content/*.txt (tagged DSL) → the .docx
build/render.py     # the direct-formatting renderer: every element type in §2
qa/outline.py       # dump any .docx in reading order with a formatting signature
qa/spacing.py       # element-by-element layout parity against the source
qa/runs.py          # run-level formatting parity
qa/check.py         # 30+ whole-document metrics against the source
qa/house.py         # the per-unit house figures of §4, and 0 empty models
qa/figures.py       # per-figure drawing checks (criterion 14)
qa/defensive.py     # criterion 15, over the built document
```

The DSL and the compile/QA ladder follow the pattern already proved nine times in
`books/`; the renderer and the figure generator are new, because this source's
construction (direct formatting, drawn figures) is not the NGO-A2 one.

## 13 · Phases and deliverables

| phase | work | deliverable |
| ---: | --- | --- |
| 0 | Tree, DSL, renderer, figure generator, QA ladder; **Unit 1 built element-exact** as the proof | `qa/spacing.py` reporting 0 differences over Unit 1 |
| 1 | **Units 1–3** + their 12 figures | 3 units element-exact |
| 2 | **Units 4–6** + 12 figures | 6 units element-exact |
| 3 | **Units 7–8** + 8 figures | 8 units element-exact |
| 4 | **Units 9–10** + 8 figures, the 70 models, "End of the Course" | the complete book |
| 5 | Full QA ladder, figure visual pass, render, defensive sweep, measured record written into this plan | the delivered `.docx` + measured results |

Each phase lands on the development branch as its own commit.

## 14 · Risks, and how each is handled

| risk | handling |
| --- | --- |
| Direct formatting is easy to get subtly wrong | The renderer is verified element-by-element against the source by `qa/spacing.py` from Unit 1 onwards — the same harness that produced 5,455/5,455 on the last book |
| 40 drawn figures are the long pole | 12 archetypes, parameterised; each figure is a few lines of data, not a bespoke drawing; `qa/figures.py` checks each one mechanically |
| Writing 70 models from nothing | Budgeted explicitly in Phase 4, with the word limits the tasks themselves state (50–70 / 50–80 / 40–60) |
| Cybersecurity vocabulary drifting above A2 | Every new term is glossed on the page it first appears on, exactly as the source glosses *service*, *job card*, *import* |
| An exercise accidentally teaching an attack | `qa/defensive.py` as criterion 15, run over the built document, not over the drafts |
| Page count drifting | Measured after each phase; the last book's lesson — at this density a page is decided by a line — applies here too |

## 15 · Not in this plan

- **No answer key.** The source has none; answers are inline `(0. is done.)`.
- **No audio files.** Scripts are printed inline, as in the source.
- **No International edition** and **no Book 2.** Both derive from the same content tree later.
- **No teacher's book.**
- **No change to the existing `english-for-cybersecurity-syria`** (the NGO-template twin). The two books stand side by side.

---

**Approve this and Phase 0 starts: the tree, the renderer, the figure generator, and
Unit 1 built element-exact against the source as proof before anything else is written.**

---

# PART THREE — AS BUILT

Everything in this part is measured off the delivered file, not estimated.
Where a criterion was not met, it says so and gives the number.

## 16 · The sixteen criteria, checked

| # | criterion | result |
| ---: | --- | --- |
| 1 | 3,450 elements, same reading order, unit *N* = source unit *N* | ✅ **3,450 / 3,450, 0 differ** (`qa/spacing.py`) |
| 2 | 5,320 paragraphs · 160 tables · 810 rows · 2,030 cells | ✅ all four exact (`qa/check.py`) |
| 3 | Same direct formatting on every element | ✅ 0 differences over the full signature: alignment, size, weight, italic, colour, shading, borders, indent, spacing, image box |
| 4 | 11 part bars per unit, two colours | ✅ 10 warm-up + 100 part bars |
| 5 | 127 track labels, same nine wordings | ✅ 127 |
| 6 | 423 exercise heads · 409 instruction boxes | ✅ 423 · 379 blue + 30 cream |
| 7 | 16 tables per unit, same widths, 78 matching rows | ✅ exact in all ten units (`qa/house.py`) |
| 8 | 40 MCQ · 6 pron · 10 glossary · 5 spiral · 5 can-do · 5 tracks · 1 watch-out, per unit | ✅ exact in all ten units |
| 9 | 40 figures, 4 per unit, 540 px wide, in-image + numbered caption | ✅ 40 figures, 40 captions, all 540 px |
| 10 | 9 page breaks · A4 · no front matter · no answer key · closing box | ✅ 9 · A4 1″ · none · none · "End of the Course" |
| 11 | Words within ±3 % **and** every measured block band respected | ⚠️ **band: met in full. ±3 %: not met — see §18** |
| 12 | 141 pages ± 2, every unit opening its own page | ✅ **142 pages**; units open on 1, 15, 29, 43, 57, 71, 86, 100, 114, 128 |
| 13 | Zero empty model boxes — all 70 written | ✅ **70 written, 0 empty**, and `qa/models.py` reports **0 of 70** outside the word limit its own task states |
| 14 | Every figure passes the drawing checks | ✅ **40 checked, 0 faults** (`qa/figures.py`) |
| 15 | The defensive sweep reports zero hits | ✅ **0 hits**, 39 banned terms + 3 framings over 51,709 words |
| 16 | Package well-formed | ✅ **46 parts, 0 faults** (`qa/package.py`) — see §20 |

## 17 · The six declared improvements, delivered

1. **70 models written** — 4,390 words, every one inside the word limit its own exercise states (40–60, 50–70 or 50–80). `qa/models.py` enforces this and reports 0 outside.
2. **Figure text bugs fixed** — no missing spaces, no text crossing a rule, no overflowing title. Figure 7.3 is the answer to the source's ESTIMATE mock-up: values sit above their rules, and the heading fits.
3. **Label-the-parts figures labelled** — Figure 1.3 names screen, keyboard, mouse, tower and cable, so the task can be checked.
4. **Figures numbered in document order** in all ten units; the source scrambles seven of them.
5. **The two blank gloss strips filled** rather than dropped — 49 words — which fixes the blank without losing an element.
6. **The level step named in every subtitle**, so a student can see Upper A2 → bridge → Low B1 happening.

A seventh, not in the plan because it was found during the build: an **in-image line is drawn only where it adds an instruction or a legend**, never repeating the Figure caption beneath it. The source prints the same sentence twice on several figures.

## 18 · Criterion 11, honestly

The band half is met: every warm-up reading, Part 5 reading, Part 7 manager dialogue,
Part 8 case and Part 9 case sits inside the band measured off the source. Eighteen blocks
and two dialogues were over band on the first build and were cut back.

The ±3 % half is **not met**, and could not have been. The book runs **49,891 words
against the source's 42,760: +16.7 %**. The arithmetic:

| | words | % of source |
| --- | ---: | ---: |
| The 72 boxes the source leaves blank, now filled | **4,439** | **+10.4 %** |
| Prose sitting higher inside its (respected) bands | 2,692 | +6.3 % |
| **Total** | **7,131** | **+16.7 %** |

Improvement 1 and criterion 11 were in conflict from the moment both were written into
the plan: filling 70 model boxes at the 50–80 words those tasks themselves ask for adds
about 10 % on its own. That was an error in the plan, not a discovery during the build.
Given the conflict, the band was kept — it is the figure that actually controls how hard
a text is to read — and the word total was allowed to go where the models took it. The
page count landed at 142 against 141 even so.

## 19 · Measured record

| | source | this book |
| --- | ---: | ---: |
| Pages | 141 | **142** |
| Elements / paragraphs | 3,450 / 5,320 | **3,450 / 5,320** |
| Tables / rows / cells | 160 / 810 / 2,030 | **160 / 810 / 2,030** |
| Figures | 40 | **40**, from 14 parameterised archetypes |
| Words | 42,760 | **49,891** |
| Empty model boxes | 70 | **0** |
| Unit spans (pages) | 13·14·14·14·14·14·14·14·14·16 | 14·14·14·14·14·15·14·14·14·15 |

**Toolchain:** `build/render.py` (direct-formatting renderer, one emitter per element
type) · `build/compile.py` (DSL) · `build/figlib.py` + `figarch.py` + `figures.py`
(14 archetypes, 40 figures) · `qa/spacing.py` `check.py` `house.py` `bands.py`
`models.py` `figures.py` `defensive.py` · `tools/skel.py` `sheet.py` `retag.py`
`overband.py` (source measurement and build sheets).

**Faults found by the harness and fixed rather than shipped:** a leader line crossing the
monitor it pointed past; a vertical leader running through its own label; gauge unit
labels crossing their dial rims; a week-planner grid running down into the caption;
a build sheet collapsing six two-column completion tables into the wrong shape; a places
table one row short in each column; eight models over the word limit their own task
states; twenty prose blocks over band.

## 20 · The repair Word reported, and the fix

The first delivered file opened in Word with a "unreadable content" prompt and was
repaired. LibreOffice had rendered it without complaint, which is why criterion 16 —
checked by eye rather than by a tool — passed when it should not have.

**The fault.** The document root declared `mc:Ignorable="w14 wp14"` but never declared
`xmlns:wp14`. Naming an undeclared prefix as ignorable is invalid markup. Word rejects
it; LibreOffice ignores it. One line, in `build/render.py`'s `DOCROOT`.

**The fix.** `xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"`
is now declared on the root, with a comment saying why it must be.

**What else was checked, and was already clean:** every XML part parses; every other
namespace prefix is declared; all 40 relationship ids resolve to parts that exist; every
part extension has a content type; all 40 images are valid PNGs and all are referenced;
the 40 `wp:docPr` ids are unique; no two tables are adjacent; the body does not end on a
table; and the children of every `pPr`, `rPr`, `tcPr` and `tblPr` are in schema order —
0 out of order across 3,450 elements. There were no control characters, no stray
ampersands and no unbalanced tags. The package now also parses under python-docx as an
independent reader: 3,290 paragraphs, 160 tables, 40 inline shapes, 1 section.

**Why it was missed.** Criterion 16 said "the package is well-formed" and was verified by
opening the file. `qa/package.py` now implements it as a test, and it is the check that
would have caught this before delivery. The other 27 .docx packages in this repository
were checked against it as well: all clean, because they are produced by python-docx
rather than by this book's hand-rolled renderer.
