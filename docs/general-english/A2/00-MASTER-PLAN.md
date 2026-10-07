# English for Daily Life · A2 — Master Production Plan

**Two student books, twenty units, full A2. Built on the measured architecture of
*English for Furniture Designers* Book 2, with its formatting, its visual language and its
device quota reproduced to the number — and its three defects fixed.**

Approve this and I build it. Nothing below is aspirational; every figure in it was measured
out of the `.docx` you gave me, and every check in §8 is one I can actually run.

---

## 0 · The one-paragraph version

A2 does not fit in one book. The source covers ten grammar points in 43,756 words and
~195 pages; a complete A2 syllabus is twenty points. So: **Book 1 — *Everyday Life*
(Units 1–10)** and **Book 2 — *Out in the World* (Units 11–20)**, each the exact shape of the
book you gave me — Warm Up + Parts 1–10, 42 sub-sections, 4 figures, 5 audio tracks, 110
headings, ~4,375 words a unit — plus the things it is missing: a real answer key, filled
models, a front cover, a back cover, front matter, and 80 figures drawn in its own palette.
Quality is held by **230 distinct automated check passes**, a frozen golden spec, and a
release gate that refuses to produce a file while any check is red.

---

## 1 · Deliverables

### Book 1 — *English for Daily Life A2.1: Everyday Life*
| File | What |
|---|---|
| `EFDL-A2.1-StudentBook.docx` | Covers + front matter + Units 1–10 + answer key |
| `EFDL-A2.1-StudentBook.pdf` | Same, print-ready, A4 |
| `EFDL-A2.1-AnswerKey.docx` / `.pdf` | The key as a separate teacher volume as well |
| `EFDL-A2.1-AudioScripts.docx` | 50 scripts, numbered 1.1–10.5 |
| `EFDL-A2.1-TeacherNotes.docx` | Per-unit timing, answers, the Stretch rationale |
| `figures/a21/*.png` | 40 figures, 1440 px wide, locked palette |
| `covers/a21-front.png`, `a21-back.png` | 300 DPI, full A4 |

### Book 2 — *English for Daily Life A2.2: Out in the World*
The same seven artefacts, Units 11–20, figures `a22/`, covers `a22-*`.

### Shared
| File | What |
|---|---|
| `spec/golden.yaml` | The frozen architecture spec. Hash-locked. |
| `spec/palette.yaml` | The 12 colours, extracted from your book's PNGs |
| `spec/typography.yaml` | A4, margins, Calibri, the six sizes, the table border |
| `ledgers/cast.yaml` | Every fact ever asserted about every character |
| `ledgers/lexis.yaml` | Every word taught, where, and how often recycled |
| `ledgers/grammar.yaml` | Each point, its unit, its first legal appearance |
| `checks/` | 230 check passes, each with a negative test |
| `reports/` | A per-unit and per-book check report, green or it does not ship |

**Totals:** 20 units · ~87,500 words of student text · ~47,000 words of key · 80 figures ·
100 audio scripts · 4 covers · ~540 printed pages.

---

## 2 · Why two books, and where the line falls

One A4 unit of this architecture is **18 pages** before figures (measured: I converted the
sample unit and counted). With four figures it is 19–20. Ten units is ~195 pages, plus
front matter and a bound key — **~270 pages a volume.** Twenty units in one volume is 540
pages, which is not a book anybody opens.

The split is not arbitrary. It falls where the grammar does:

- **A2.1 — Everyday Life.** Present and past. The learner can describe what is, what they
  do, and what happened. Ends able to tell a simple story about last weekend and compare two
  things.
- **A2.2 — Out in the World.** Future, obligation, the perfect, the passive, conditionals,
  relatives, reported speech. The learner can plan, advise, report, and talk about
  experience. Ends at the A2/B1 border — the same place your book ends.

Each volume stands alone. Book 2 recycles Book 1's 100 glossary words through its Spiral
Reviews, but assumes nothing untaught.

---

## 3 · The frozen spec

This is the part that makes drift impossible. Every number below was measured from
`EFD_Book_U1-U10_Illustrated_StudentBook_2.docx`, not remembered. It goes into
`spec/golden.yaml`, the file is hashed, and the hash is checked before every build. If the
spec changes, every one of the twenty units is re-validated against the new spec in the same
run — there is no path by which Unit 3 is built to one standard and Unit 14 to another.

### 3.1 · Architecture (per unit)

| | Value |
|---|---|
| Shell | Warm Up + Parts 1–10, in order, no exceptions |
| Bold headings | **110** |
| Sub-sections | **42** (3 · 7 · 7 · 3 · 4 · 3 · 4 · 5 · 2 · 1 · 3) |
| Words | **4,375** (source range 4,021–4,636; envelope 4,000–4,700) |
| Figures | **4**, numbered N.1–N.4 |
| Audio tracks | **5**: N.1 Part 1 Pronunciation · N.2–N.4 Part 3 · N.5 Part 7B |
| Glossary | **10** words |
| Can-Do lines | **5**, last marked *(Plus)* |
| Writing tasks | **5** — 50–70 ×3, 40–60 ×1, 50–80 ×1 |
| Tracks | `[CORE]` Warm-Up + Parts 1–6 · `[PLUS]` Parts 7–10 · Part 10 labelled `[CORE + PLUS]` |

**Per-part word budget** (source mean, and the envelope each unit must land inside):

| Section | Target | Envelope | Sub-sections |
|---|---|---|---|
| Warm Up | 318 | 290–350 | 3 |
| Part 1 Vocabulary | 590 | 550–650 | 7 |
| Part 2 Grammar | 462 | 415–515 | 7 |
| Part 3 Listening | 499 | 410–570 | 3 |
| Part 4 Speaking | 328 | 295–375 | 4 |
| Part 5 Reading | 580 | 495–645 | 3 |
| Part 6 Writing | 265 | 210–300 | 4 |
| Part 7 Real-World File | 477 | 430–520 | 5 |
| Part 8 Global Story | 336 | 305–380 | 2 + text |
| Part 9 Close to Home | 289 | 255–335 | 1 + text |
| Part 10 Review | 197 | 175–255 | 3 |

### 3.2 · Typography and page — measured from your `.docx`

| Property | Value | Where I got it |
|---|---|---|
| Page | A4 portrait, 11906 × 16838 twips | `w:pgSz` |
| Margins | 1440 twips (1 in) top, right, bottom, left | `w:pgMar` |
| Header / footer offset | 708 twips; **no header or footer content** | `w:pgMar`, no header parts in the zip |
| Page numbers | `<w:pgNumType/>` — **empty, none printed** | `sectPr` |
| Font | **Calibri** (ascii, cs, eastAsia, hAnsi) | `docDefaults/rPrDefault` |
| Default size | **22 half-points = 11 pt** | `docDefaults` |
| Sizes in use | 9, 10, 11, 12, 14, 20 pt — **and no others** | `w:sz` set `{18,20,22,24,28,40}` |
| Paragraph styles used | **`ListParagraph` only.** No Heading styles anywhere. | `w:pStyle` census |
| Headings | Bold runs in body paragraphs — *not* Word headings | ditto |
| Tables | 156 in ten units; **single border, `w:sz="4"` (½ pt), all six edges** | `tblPr` |
| Table style | none — borders set inline | no `tblStyle` |
| Centring | used for figures only | `w:jc` census |

Two deliberate departures, because the source is a 42,000-word book with no way to navigate
it: **I add page numbers and a running footer** (`Unit N · Part M`). If you want it bit-exact
to the source instead, say so and both come out — it is one line in `typography.yaml`.

### 3.3 · Figures — the law your book actually obeys

I extracted all 40 PNGs and measured them against their placements. The rule is exact:

> **Render 1440 px wide. Fit the result into a 5.625 in × 1.979 in box preserving aspect
> ratio. Round each resulting dimension to a whole pixel at 96 DPI, half up.**

That model reproduces all 40 of your placements to the EMU. Heights run 320–860 px; files
run 9–38 KB; every one is 8-bit RGB PNG.

**The palette, counted across all 40 of your figures** — these twelve colours are 97.5% of
every pixel, and they go in `spec/palette.yaml` as a closed set:

| Colour | Share | Job |
|---|---|---|
| `#FFFFFF` | 70.6% | background |
| `#EEF3F9` | 20.3% | card fill |
| `#1F3864` | 1.30% | all strokes, all label text |
| `#8FA8C8` | 1.15% | mid blue fill |
| `#A97C43` | 0.98% | dark tan |
| `#C79A5C` | 0.98% | tan |
| `#E6C78F` | 0.93% | light tan |
| `#AEB6C2` | 0.71% | answer rules, light lines |
| `#6E88AC` | 0.57% | deep blue fill |
| `#9AA6B2` | 0.19% | secondary grey |
| `#009688` | 0.15% | the one accent — ticks, arrows |
| `#8A5A3B` | 0.13% | brown |

**The four figure jobs**, and where each sits — identical to your book:

| Slot | Job | Sits in | Feeds |
|---|---|---|---|
| N.1 | labelled category set — cards in a grid | Part 1 | a table-completion task |
| N.2 | label-me diagram — numbered leaders to blank rules | Part 1 | a matching task |
| N.3 | process strip — stages with arrows | Part 5 | the reading |
| N.4 | scene, or a comparison pair | Warm Up | the warm-up MCQ |

**Three figure defects in your book that I will not reproduce.** In `Figure 1.2` the leader
lines cross each other (3 crosses 5, and 4 runs the full width of the canvas), and roughly a
third of the canvas is empty band top and bottom. Checks **G15** and **G17** below exist
specifically to make that impossible.

### 3.4 · The device quota (per unit, exact)

| Device | Count | | Device | Count |
|---|---|---|---|---|
| seeded `0. … is done.` | 14 | | `Model exchange:` | 2 |
| `one … is not needed` | 7 | | `***Stretch***` | 2 |
| `Model — read this first:` | 7 | | `Remember:` | 1 |
| `Before you read:` | 5 | | `Watch out!` ✗→✓ | 1 |
| `Check before you finish:` ☐ | 5 | | `→ Harvest:` | 1 |
| `Useful language / phrases / questions` | 5 | | `Answer frame:` | 1 |
| `Word bank:` | 4–5 | | `Phrase bank` (7A) | 1 |
| `Gloss:` | 4 | | `Discussion frames:` | 1 |
| `Before you listen:` | 3 | | `Plan (fill in, then write):` | 1–2 |
| | | | `Pronunciation` | 1 |

Book total: 140 seeded examples · 70 matchings with a live distractor · 70 filled models ·
50 reading primers · 50 writing checklists · 40 glosses · 30 listening primers.
Across both books, double it.

---

## 4 · The syllabus — twenty units

The grammar is a complete A2 progression, mapped to Cambridge A2 Key / CEFR Threshold-minus.
Each point is introduced once, in one unit, and recycled by name in every later Spiral Review.

### Book 1 — *Everyday Life*

| U | Grammar | Topic | Part 8 set in |
|---|---|---|---|
| 1 | Present simple · frequency adverbs | People and Routines | South Korea |
| 2 | *there is / are* · *some / any* · *much / many* | Home and Neighbourhood | Brazil |
| 3 | Present continuous vs present simple | A Day in the City | Japan |
| 4 | Countable & uncountable · quantifiers · articles | Food and Shopping | Morocco |
| 5 | Past simple: *was/were* + regular verbs | Last Weekend | Iceland |
| 6 | Past simple: irregular verbs · past time phrases | Journeys and Mishaps | Peru |
| 7 | Comparatives and superlatives | Choosing and Comparing | Kenya |
| 8 | *can / can't · could* — ability, permission, polite asks | Help and Ability | Canada |
| 9 | Prepositions of place, time and movement | Finding Your Way | Netherlands |
| 10 | Imperatives · sequencers · adverbs of manner | Doing and Making | Vietnam |

### Book 2 — *Out in the World*

| U | Grammar | Topic | Part 8 set in |
|---|---|---|---|
| 11 | *going to* · present continuous for arrangements | Plans and Arrangements | Portugal |
| 12 | *will* · *might* — predictions, offers, decisions | Weather and What Might Happen | Norway |
| 13 | *must / have to / mustn't / don't have to* | Rules and Places | Singapore |
| 14 | *should / shouldn't* — advice | Health and Feeling Better | India |
| 15 | Present perfect: experience, *ever / never* | Experiences | New Zealand |
| 16 | Present perfect vs past simple | Then and Now | Poland |
| 17 | Active and passive (present and past simple) | How Things Are Made | Ghana |
| 18 | First conditional · time clauses *when / if / before* | If and When | Mexico |
| 19 | Defining relative clauses *who / which / that* | People, Places and Things | Ireland |
| 20 | Reported speech *say / tell* · indirect questions | News, Stories and Messages | Egypt |

No country appears twice. No unit's grammar appears in an earlier unit's text except as a
fixed phrase on the exempt list, and check **E06** enforces that mechanically.

**The 200 glossary words** are drawn from the A2 band of the English Vocabulary Profile and
the first 2,000 of the New General Service List. Each is met three times before it reaches
its glossary, and recycled at least twice afterwards. No word appears in two glossaries
across either book.

---

## 5 · The cast and the world

Six recurring people at one address — the direct analogue of your six at one company —
carried through all twenty units.

| Person | Age | Life | Carries |
|---|---|---|---|
| **Maya Oduya** | 26 | works in a bookshop, flat 2 | routines, plans, the narrator's eye |
| **Tomas Nilsen** | 31 | nurse, Maya's flatmate | shifts, health, night and day |
| **Amina Chaudhry** | 58 | runs the corner shop downstairs | food, shopping, quantities, the street's memory |
| **Dani Rossi** | 19 | student, flat 3 | cooking badly, travel, mishaps, experience |
| **Mr Okonkwo** | 70 | retired teacher, flat 4 | the past, advice, how things used to be |
| **Yuki Tanaka** | 34 | new arrival, top flat, works from home | the newcomer's questions — the reader's proxy |

Every fact ever asserted about any of them goes into `ledgers/cast.yaml` at the moment it is
written. Check **F04** rejects any later sentence that contradicts the ledger — Tomas cannot
become a teacher in Unit 14, and Amina cannot close on Mondays in Unit 7 and open in Unit 16.

Part 8 leaves the street entirely each unit for a short true-feeling story set somewhere
else; Part 9 stays close to home. That is your book's own Global / Local pairing, with the
occupational framing removed.

---

## 6 · Covers and front matter

Your book has neither. Both are additions, declared as such.

**Front cover** (per volume, 300 DPI, full A4, locked palette): the series name, the volume
title, the level, and a flat-vector scene built from the same shape language as the interior
figures — Book 1 the street at eight in the morning, Book 2 a station departure board. No
invented publisher, no invented ISBN, no barcode, no fake review quotes. Check **I05/I06**
block all four.

**Back cover**: a 140-word blurb, the ten unit titles, the ten grammar points, a six-line
"you will be able to" summary drawn *from the actual Can-Do lines in the book* (check **I07**
diffs them), and a plain level statement.

**Front matter** (≈8 pages): title page · how to use this book, explaining `[CORE]` and
`[PLUS]` in four sentences · **Map of the Book** — a ten-row table of unit, topic, grammar,
vocabulary, skills · the audio track list · a one-page symbol key (🔊 ☐ ✗ ✓ ***Stretch***
→ Harvest).

---

## 7 · How a unit gets made

Seven stages. A unit cannot enter a stage until the previous stage's checks are green.

1. **Blueprint.** The unit's 42 sub-sections are instantiated from `golden.yaml` as an empty
   scaffold with every heading, every device label and every word-count target in place. The
   scaffold is generated, never typed, so no unit can be missing a section.
2. **Lexis.** The ten glossary words are drawn, checked against both books' ledgers for
   collision, and a recycling schedule is written: where each word is planted three times
   before Part 10 and twice after.
3. **Spine.** The grammar point's Focus Box, `Remember`, `Watch out!` pair, and eight-plus
   in-text occurrences are placed.
4. **Prose.** Warm Up, the four reading texts, the four scripts, the role-play models, the
   seven filled Models.
5. **Items.** Every exercise built, with its 14 seeded `0.` examples, its distractors, and
   its answers recorded *in the same operation* — so the key cannot drift from the book,
   because they are written from one source.
6. **Figures.** Four SVGs rendered to 1440 px PNG, palette-checked, overlap-checked,
   leader-crossing-checked, then placed with the fit-box rule.
7. **Build & gate.** Markdown → DOCX → PDF, then all 230 checks. Any red, and the unit goes
   back to the stage the failing check belongs to. Nothing ships amber.

---

## 8 · The 230 check passes

Eleven families. Each check is a named, independently runnable pass with a single pass/fail
verdict, a pointer to the spec clause it enforces, and a **negative test** — a deliberately
broken fixture it must catch (check **K15** verifies that every check has one, so the suite
cannot rot into 230 functions that all return true).

Per unit, all 230 run. Twenty units plus two book-level passes is **4,600+ check executions
per full build.**

### A · Structure — 30

| | Check |
|---|---|
| A01 | Unit title line present, format `**Unit N: Title**` |
| A02 | Strap line present: course · level · tracks |
| A03 | `**Warm Up**` section present |
| A04 | Warm Up has exactly 3 `Warm-up:` sub-sections |
| A05 | Parts 1–10 all present, in order, none repeated, none missing |
| A06 | Every part header matches `**Part N · Name**` |
| A07 | Every part header is followed by a track label line |
| A08 | Every track label is drawn from the closed set of 7 source sub-labels |
| A09 | Part 1 sub-section count == 7 |
| A10 | Part 2 sub-section count == 7 |
| A11 | Part 3 sub-section count == 3 |
| A12 | Part 4 sub-section count == 4 |
| A13 | Part 5 sub-section count == 3 |
| A14 | Part 6 sub-section count == 4 |
| A15 | Part 7 sub-sections are exactly 7A–7E, in order |
| A16 | Part 8 == text + Vocabulary in Context + Discussion |
| A17 | Part 9 == text + Decision Task |
| A18 | Part 10 == Spiral Review + Can-Do + Glossary |
| A19 | Bold-heading count == 110 |
| A20 | Sub-section total == 42 |
| A21 | Glossary is the final sub-section of the unit |
| A22 | Can-Do immediately precedes Glossary |
| A23 | No sub-section heading appears twice |
| A24 | No heading outside the golden schema |
| A25 | Full heading sequence diffs clean against the golden order |
| A26 | Part 2 contains a Grammar Focus Box with Form / Use / Example |
| A27 | Part 7's 7A is a Phrase Bank |
| A28 | Part 9 contains a Decision Task with three options |
| A29 | Part 5 contains two texts and a Vocabulary in Context |
| A30 | Part 1 contains exactly one Pronunciation sub-section |

### B · Scaffolding quota — 22

| | Check |
|---|---|
| B01 | Seeded `0.` items == 14 |
| B02 | `one … is not needed` == 7 |
| B03 | `Model — read this first:` == 7 |
| B04 | **Every Model is non-empty** — your book's defect #2 |
| B05 | `Before you read:` == 5 |
| B06 | `Before you listen:` == 3 |
| B07 | `Check before you finish:` == 5 |
| B08 | Every `Check before you finish` carries ≥ 3 ☐ boxes |
| B09 | `Word bank:` ∈ {4, 5} |
| B10 | `Gloss:` == 4 |
| B11 | `Useful language / phrases / questions` total == 5 |
| B12 | `Model exchange:` == 2 |
| B13 | `***Stretch***` == 2, both tagged `[PLUS]` |
| B14 | `Remember:` == 1 |
| B15 | `Watch out!` == 1, and contains both ✗ and ✓ |
| B16 | `→ Harvest:` == 1, at the end of Part 2 |
| B17 | `Answer frame:` == 1, in Part 9 |
| B18 | `Phrase bank` == 1, at 7A |
| B19 | `Discussion frames:` == 1, at the end of Part 8 |
| B20 | `Plan (fill in, then write):` ∈ {1, 2} |
| B21 | Pronunciation block present with Audio Track N.1 |
| B22 | Every device label spelled exactly as the spec — no near-variants |

### C · Exercise integrity — 28

| | Check |
|---|---|
| C01 | Every matching task has both a Column A and a Column B |
| C02 | `len(B) == len(A) + 1` in every matching |
| C03 | Every matching carries the "not needed" instruction |
| C04 | Matching answers form a bijection from A onto B minus one letter |
| C05 | No answer letter used twice in one matching |
| C06 | The unused distractor is semantically plausible *(LLM adjudication gate)* |
| C07 | Every MCQ has exactly 4 options |
| C08 | Options labelled `○ A)` `○ B)` `○ C)` `○ D)` exactly |
| C09 | Exactly one defensibly correct option per MCQ |
| C10 | Within a unit, no answer letter exceeds 40% of MCQs |
| C11 | Across a book, MCQ answer letters pass a χ² uniformity test (p > 0.05) |
| C12 | No two consecutive MCQs share an answer letter |
| C13 | No MCQ distractor is nonsense or a joke *(gate)* |
| C14 | Every gap-fill bank has ≥ as many words as gaps |
| C15 | Every bank word is used exactly once, or declared a distractor |
| C16 | No gap is correctly fillable by two different bank words |
| C17 | Every ordering task uses the numbers 1–5 exactly once |
| C18 | **The scrambled list is not already in the correct order** |
| C19 | Every T/F/NG set uses all three verdicts at least once |
| C20 | Every "Not Given" item is genuinely absent from the text *(gate)* |
| C21 | Every seeded `0.` answer is itself correct |
| C22 | A seeded `0.` in a matching consumes no Column B letter |
| C23 | Every comprehension question is answerable from its own text |
| C24 | Every question has exactly one entry in the answer key |
| C25 | Every key entry maps to a question that exists |
| C26 | No duplicate question stem within a unit |
| C27 | No duplicate question stem within a book |
| C28 | Gap rules are a uniform width throughout |

### D · Answer key — 14

| | Check |
|---|---|
| D01 | A key section exists for every unit |
| D02 | Key section order == student-book section order |
| D03 | Every closed item has a key entry |
| D04 | Key entry count == closed item count |
| D05 | Matching keys are valid Column B letters |
| D06 | MCQ keys ∈ {A, B, C, D} |
| D07 | Gap-fill keys are members of their own word bank |
| D08 | Ordering keys are a permutation of 1–5 |
| D09 | T/F/NG keys ∈ {True, False, Not Given} |
| D10 | Every open task carries explicit marking points |
| D11 | Every open task carries a sample answer |
| D12 | Every sample answer meets its own stated word count |
| D13 | No key answer contradicts the text it is drawn from |
| D14 | No key content leaks into the student book |

### E · Language and level — 26

| | Check |
|---|---|
| E01 | ≥ 90% of running words inside the A2 band (EVP + NGSL-2000) |
| E02 | Every off-list word is glossed or in the unit glossary |
| E03 | Mean sentence length ≤ 14 words |
| E04 | No sentence over 25 words |
| E05 | No subordinate-clause nesting deeper than 2 |
| E06 | **No grammar point appears before the unit that teaches it** (exempt-phrase list) |
| E07 | The unit's target grammar occurs ≥ 8 times in that unit |
| E08 | Glossary length == 10 |
| E09 | Every glossary word occurs ≥ 3 times before Part 10 |
| E10 | No glossary word repeats within a book |
| E11 | No glossary word repeats across the two books |
| E12 | Spiral Review recycles ≥ 2 words from earlier units |
| E13 | British spelling throughout — no `-ize`, `color`, `center` |
| E14 | Contractions in dialogue, sparing in expository text |
| E15 | Typographic apostrophes and quotes only |
| E16 | No double spaces, no trailing whitespace |
| E17 | No straight quote characters |
| E18 | En-dash / em-dash usage follows the source's own pattern |
| E19 | Times written as `7.00`, not `7:00` — the source's convention |
| E20 | No occupational jargon from the banned-domain list |
| E21 | Dialogue register differs measurably from expository register |
| E22 | Flesch–Kincaid grade ≤ 5.0 on every continuous text |
| E23 | No more than 2 sentences per text open with a conjunction |
| E24 | British date and time formats throughout |
| E25 | No passive voice before Unit 17 outside the exempt list |
| E26 | No later unit's glossary word used earlier without a gloss |

### F · Topic and content — 18

| | Check |
|---|---|
| F01 | Zero hits on the occupational-vocabulary blocklist (the failure that killed the last attempt) |
| F02 | Every section's content ties to the unit's declared topic |
| F03 | Cast names, ages, jobs and relations match `cast.yaml` |
| F04 | **No sentence contradicts any fact already in the cast ledger** |
| F05 | No unit repeats another unit's story shape |
| F06 | Story-shape diversity index across 20 units above threshold |
| F07 | No real brand or company names |
| F08 | No real living people |
| F09 | Cultural representation reviewed *(gate)* |
| F10 | Gender balance across cast, examples and figure labels within 40–60% |
| F11 | No stereotyping by nationality, gender, age or job *(gate)* |
| F12 | Part 8 set outside the UK; no country used twice in 20 units |
| F13 | Part 9 set on or near Alder Street |
| F14 | Names varied in origin; no name reused for a second character |
| F15 | No years, no current events, nothing that dates the book |
| F16 | No actionable medical, legal or financial advice |
| F17 | Every figure matches the text it illustrates |
| F18 | Every caption matches what the figure actually shows |

### G · Figures and visuals — 24

| | Check |
|---|---|
| G01 | Exactly 4 figures per unit |
| G02 | Numbered N.1–N.4, no gaps, no duplicates |
| G03 | Slot placement: N.4 Warm Up, N.1 + N.2 Part 1, N.3 Part 5 |
| G04 | Caption format `*Figure N.M · Text.*` |
| G05 | Caption ends in a full stop |
| G06 | PNG width == 1440 px exactly |
| G07 | PNG height ∈ [320, 880] |
| G08 | 8-bit RGB PNG |
| G09 | **Every pixel within ΔE 3 of the 12-colour locked palette** |
| G10 | File size ≤ 60 KB |
| G11 | Placement == fit(5.625 × 1.979 in), rounded to whole 96-DPI px, half up |
| G12 | Figure paragraph is centred |
| G13 | No rendered glyph below 22 px |
| G14 | **No label bounding box overlaps another** |
| G15 | **No leader line crosses another leader line** — your book's defect #1 |
| G16 | No drawn element outside the canvas |
| G17 | **Empty margin ≤ 8% of canvas height, top and bottom** — your book's defect #1 |
| G18 | Every figure label word is in the unit's vocabulary or glossary |
| G19 | Label-me figures have exactly as many rules as the task has items |
| G20 | Category-set figures have exactly as many cards as the table has rows |
| G21 | Process strips have an arrow between every adjacent pair |
| G22 | Text-on-fill contrast ratio ≥ 4.5 : 1 |
| G23 | Re-rendering produces a byte-identical PNG |
| G24 | Alt text present and descriptive for every figure |

### H · DOCX and typography — 22

| | Check |
|---|---|
| H01 | Page size == 11906 × 16838 twips |
| H02 | All four margins == 1440 twips |
| H03 | Default font == Calibri, all four script slots |
| H04 | Default size == 22 half-points |
| H05 | Font sizes used ⊆ {18, 20, 22, 24, 28, 40} |
| H06 | No `pStyle` other than `ListParagraph` |
| H07 | Every table carries single `w:sz="4"` borders on all six edges |
| H08 | Table count within the expected per-unit range |
| H09 | No required table cell is empty |
| H10 | No table splits across a page break mid-row |
| H11 | Every figure paragraph is centred |
| H12 | Every caption is italic and immediately follows its figure |
| H13 | No heading left within 2 lines of a page bottom |
| H14 | No widow or orphan lines |
| H15 | No part header orphaned from its track label across a page break |
| H16 | No unit split across the two volumes |
| H17 | Front and back covers both present |
| H18 | Covers are full-A4 at 300 DPI |
| H19 | `docProps` title, creator and language set |
| H20 | File opens in LibreOffice with no repair prompt |
| H21 | PDF page count within the planned envelope |
| H22 | **No missing glyph (tofu) anywhere in the rendered PDF** |

### I · Covers and front matter — 12

| | Check |
|---|---|
| I01 | Front cover carries series, title, volume, level |
| I02 | Cover art uses only the locked palette |
| I03 | Back cover carries blurb, unit list, grammar list, can-do summary, level |
| I04 | Back-cover blurb 120–200 words |
| I05 | **No fabricated ISBN or barcode** |
| I06 | **No fabricated publisher, endorsement or review quote** |
| I07 | Back-cover unit list diffs clean against the actual contents |
| I08 | Every claim on the cover is verified against the book |
| I09 | Front and back are a visually consistent pair |
| I10 | The two volumes' covers are distinguishable at thumbnail size |
| I11 | Covers render at 300 DPI without resampling |
| I12 | No cover text within 10 mm of the trim edge |

### J · Build and release — 16

| | Check |
|---|---|
| J01 | Markdown → DOCX round-trips within 0.5% on word count |
| J02 | Every heading survives conversion |
| J03 | Every table survives conversion |
| J04 | Every figure is embedded — no broken relationship ids |
| J05 | DOCX → PDF renders every page |
| J06 | No placeholder or error text in any output |
| J07 | No `TODO`, `TBD`, `FIXME`, `XXX`, `???` anywhere |
| J08 | No lorem ipsum or filler |
| J09 | **No model identifier in any shipped artefact** |
| J10 | No internal file paths leaked into output |
| J11 | Build is deterministic — two runs, identical content hash |
| J12 | A SHA-256 manifest is written for every shipped file |
| J13 | Git tree clean after a build |
| J14 | Everything committed and pushed to the designated branch |
| J15 | Page count per volume within the planned envelope |
| J16 | File naming follows the convention exactly |

### K · Regression and drift guards — 18

| | Check |
|---|---|
| K01 | `golden.yaml` hash matches the frozen value |
| K02 | Every unit validated against the golden spec, never against a sibling unit |
| K03 | **Editing any unit re-runs all 230 checks on all 20 units** |
| K04 | Full-book revalidation before every release |
| K05 | Per-unit device counts diffed against the source's own, in a printed table |
| K06 | Heading sequence diffed against the golden order |
| K07 | Cumulative vocabulary ledger never loses an entry |
| K08 | Cast fact ledger never contradicted, across both volumes |
| K09 | Grammar ledger: each point introduced exactly once |
| K10 | **No check that passed in the last build fails in this one** |
| K11 | Per-part word counts inside the source's measured envelope |
| K12 | A unit cannot be marked done with any check red |
| K13 | Release is blocked while any check is red |
| K14 | The check suite is mutation-tested against known-bad fixtures |
| K15 | **Every one of the 230 checks has a negative test that it catches** |
| K16 | Check count ≥ 200 is itself asserted |
| K17 | Every spec clause maps to at least one check |
| K18 | Every check maps to at least one spec clause — no orphans |

**Family totals:** A 30 · B 22 · C 28 · D 14 · E 26 · F 18 · G 24 · H 22 · I 12 · J 16 ·
K 18 = **230**.

Twenty-one of them are **adjudication gates** — C06, C13, C20, F09, F11 and the rest need
judgement, not a regex. Those are run as a separate reasoning pass per unit against a written
rubric, and their verdicts are recorded in the report with the reasoning, so you can
overrule any of them.

---

## 9 · The guards

Checks catch mistakes. These make whole classes of mistake impossible.

1. **Generated scaffolds, not typed ones.** The 42 sub-sections of every unit are
   instantiated from the spec. A section cannot be omitted, because nobody types the
   headings. This is the single biggest defence against the omission you are worried about.
2. **One source for item and answer.** Exercises and their answers are written in the same
   operation and emitted to two files. The key cannot drift from the book because they are
   not written twice.
3. **Append-only ledgers.** Cast facts, vocabulary and grammar go into ledgers at the moment
   of writing. Later units are checked against the ledger, not against my memory of Unit 3.
4. **All-units revalidation on any edit.** There is no "just fix Unit 7" path. K03 reruns
   everything, so a fix in one unit cannot silently break another.
5. **Green-or-nothing release.** The build script refuses to emit a DOCX while any check is
   red. There is no override flag.
6. **The check suite is itself tested.** K14 and K15 mutate good fixtures into bad ones and
   assert the suite catches each. A check that cannot fail is a check that is lying.
7. **Spec↔check bijection.** K17 and K18 mean a spec clause with no check, or a check with no
   clause, is itself a build failure. The suite cannot drift away from the spec.
8. **The source stays in the repo** as the reference, and the per-unit report prints my
   numbers beside yours in the same table. Drift is visible, not asserted away.

---

## 10 · Phases and gates

| Phase | Output | Gate before moving on |
|---|---|---|
| **P0 · Foundation** | `golden.yaml`, `palette.yaml`, `typography.yaml`, the 230 checks with their negative tests, the renderer, the build script | K14–K18 green; the suite catches every seeded fault; your approval of this plan |
| **P1 · Pilot** | Unit 1 rebuilt to the full spec, with 4 figures, covers mocked | All 230 green on Unit 1; **you review and sign off the look** |
| **P2 · Book 1 content** | Units 2–10 | All 230 green on all 10, every build |
| **P3 · Book 1 assembly** | Covers, front matter, Map of the Book, key, scripts, teacher notes, DOCX + PDF | H, I, J families green at book level |
| **P4 · Book 2 content** | Units 11–20 | All 230 green on all 20 — Book 1 re-validated in every run |
| **P5 · Book 2 assembly** | Same seven artefacts | As P3 |
| **P6 · Release** | Both volumes, manifest, final report | Every check green across both books; manifest written; pushed |

**P1 is the real decision point.** One finished unit with its figures is worth more than any
amount of further planning, and if the look is wrong it is cheap to change there and
expensive to change at Unit 17.

---

## 11 · What could go wrong, honestly

- **Volume.** 134,000 words, 80 figures, 100 scripts, 4,600 check executions per build. This
  is many sessions' work, not one. I will deliver it unit by unit, each one green, so you
  always hold finished work rather than a promise.
- **The adjudication gates are me.** Twenty-one of the 230 need judgement. I will show the
  reasoning for each so you can overrule it, but they are not as hard as the other 209.
- **A2 word lists.** EVP is not freely downloadable. I will build the A2 band from NGSL,
  NAWL and the published A2 Key vocabulary list, and state exactly what I used — not claim
  an EVP licence I do not have.
- **Figure likeness.** Your figures were drawn by a tool I do not have. I will match the
  palette exactly, the sizing law exactly, and the shape idiom closely — but a side-by-side
  will show a different hand. P1 is where you judge whether it is close enough.
- **The three defects.** I am fixing them. If you want the book bit-identical to the source
  including the empty Models and the 5-for-8 word bank, say so and I will reproduce them.

---

## 12 · What I need from you

Approve the plan, and tell me on these five. Defaults in bold — if you say nothing, I build
the bold ones.

1. **Two volumes, A2.1 and A2.2, at the split in §2?** — **yes**
2. **Page numbers and a running footer**, which your source lacks? — **yes, add them**
3. **The six-person cast across both volumes**, or units that stand alone? — **keep the cast**
4. **Answer key bound at the back of the student book *and* issued as a separate teacher
   volume?** — **both**
5. **Audio:** scripts printed inline exactly as your book does it, with a track list in the
   front matter — I cannot record audio. — **scripts only**

One more thing I need a decision on, outside the A2 work: the twenty B2 units in
`docs/english-animated/` were built on the architecture you rejected. **Keep them, or delete
them?** They are not referenced by anything in this plan.
