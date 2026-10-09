# English for Daily Life · B1 — Master Production Plan

### Version 3 · the content law, after Unit 1 was built green and rejected on sight

**Two student books, twenty units, full B1. The same architecture, the same visual
density and the same check discipline that A2 shipped with — raised to B1 on numbers
measured from a real CEFR dataset, not from memory.**

Approve this and I build it. Every number in §3 and §4 either (a) was measured out of
the twenty A2 units that already exist, (b) was measured out of the CEFR-J
Vocabulary and Grammar Profiles, which I downloaded and counted, or (c) is a
forecast — and every forecast is labelled as one, with the measurement that will
replace it named in §10.

---

## v3 changelog — the one thing 251 checks could not see

Version 2's Unit 1 passed every check in the suite and was rejected on sight, in
four words: *it has one subject.* It did. Thirty-seven of its forty-two
sub-sections were about the same power cut on the same Tuesday evening, its
forty-one pictures mostly restated their own captions, and its opening listening
had a man standing still for twenty minutes in a dark stairwell while the same
script said somebody walked past him holding out a lit phone.

Every one of those is a property of **content**, and every check in families A–L
compares a unit with a **shape**. That is not a gap in the checks; it is the
boundary of what a structural suite can do, and v2 did not say where that
boundary was. v3 says it, and then moves it.

| | v2 | v3 |
|---|---|---|
| **What a unit is** | a topic, named in the title, carried through all eleven parts | a **theme** carrying **seven to nine distinct situations**, with the grammar point as the thread |
| **§4, the twenty units** | twenty single topics | twenty neighbourhood themes, each with its strands named — the full list is in `ledgers/situations.yaml` |
| **Where the design lives** | this document, as prose | `ledgers/situations.yaml`, as declarations a check can read |
| **Realism** | an authorial intention | a declared `obvious_out` and `why_not` per situation, plus a blocklist of four premises (§4c) |
| **Pictures** | 41 a unit, 28 distinct jobs — and a quarter of the icons said nothing their caption had not | `G34` depiction and `G35` contrast, measured and enforced (§6a) |
| **The suite** | 251 checks | **263** — family M (10) and `G34`/`G35` |
| **Unit 1** | *The Night the Power Went Out* | *The Afternoon Everything Happened at Once* — rebuilt whole, 263/263, nine situations |

**The one finding that matters most.** A check that compares an artefact with
itself is blind — that was the lesson of the five A2 defects in §8f, and this is
the same lesson at a level up. The suite could prove Unit 1's 42 sub-sections,
41 figures, 15.5-word mean and 6.61 reading grade, and every one of those
numbers was true of a unit nobody would want to teach. §4c is the answer: the
author declares the content, and the checks hold the declaration against the
page.

---

## v2 changelog — what the audit changed, and why

Version 1 was audited against eight questions: volume and unit count, visual parity,
answer-shuffling, passage length, topic currency, CEFR-J comprehensiveness, flow
(internal and from A2), and structural parity with A2. **Three of the eight came back
clean. Five produced a change.** Nothing here is a tidy-up; each item is a number or
a defect.

| # | Audited | Verdict | What v2 does |
|---|---|---|---|
| 1 | **Volumes and units** | clean — 2 × 10 = 20, same as A2 | unchanged |
| 2 | **Visual parity** | clean — 41 a unit, 820 a course, same 41-slot law | unchanged |
| 3 | **Structural parity** | clean — 42 subs, 110 headings, 11 parts, 5 tracks, CORE/PLUS | unchanged, and `K20` makes it checkable |
| 4 | **Answer shuffling** | **DEFECT — and it is in A2, shipped** | §8e. Two new checks, 44 repairs in A2 before B1 Unit 1 is written |
| — | *(five further A2 defects, found while building Unit 1)* | **all five were silent** | §8f. `G32` and a fix each: 40 stale figures, four truncated figure titles in the shipped books, a truncated ledger printing on both back covers, the coverage law skipping at B1, and a book build that deleted its own answer key |
| 5 | **Passage lengths** | **two of five were too short for B1** | §3.3 revised: listening 110 → 200/150/220, Global Story 240 → 300, Close to Home 240 → 280. The texts came out as planned; the apparatus estimate did not (§11) |
| 6 | **CEFR-J comprehensiveness** | **6 of 29 B1 families had no home** | §4: `INTF` `EXCL` `IMP` `VP` `DT` `PPOS` absorbed, with an explicit disposition for each |
| 7 | **Topic currency** | v1's topics were named after their grammar | §4: all twenty retitled to a concrete, current situation |
| 8 | **Flow from A2 and within B1** | sound, but asserted rather than checked | `K19` tightened; §4a states the three spines explicitly |

**The one finding that matters most.** You asked whether questions that need
shuffling are marked for shuffling. They are not, and A2 proves the cost: of 140
matching tasks, **four print Column B in exactly Column A's order** — their answer
key reads `a, b, c, d, e` — and **seven more have three or more answers sitting on
the diagonal**. Of 60 word-bank gap-fills, **27 print the bank in exactly answer
order** and **37 open with the first answer as the first bank word**. A2's `C18`
guards ordering tasks only; nothing guards matching keys or word banks. That is 44
tasks a learner can complete without reading them. §8e fixes A2 and §8c adds the two
checks so B1 cannot be born with it.

---

---

## 0 · The one-paragraph version

**Unit 1 is built and this plan has been through it.** A2 is finished and, after
six defects this work found in it, green at 263 checks on both volumes. B1 is
the same shell — Warm Up + Parts 1–10, 42 sub-sections, 110 bold headings, 41
figures, 5 audio tracks, CORE/PLUS — filled with B1 content and measured against
a B1 band. **B1.1 — *Looking Back* (Units 1–10)** carries the past behind the
past, what used to be and what might have been; **B1.2 — *Making Yourself Clear*
(Units 11–20)** carries the passive, reporting, joining and explaining. The
grammar spine covers all 29 CEFR-J B1 families and all 84 of their rows; the
vocabulary band widens from 2,356 headwords to **4,530**, a measured 1.92×. The
toolchain is not copied and not moved: `B1/tools` is a symlink, which costs one
line and makes A2 byte-identical by construction rather than by gate.

**Unit 1 measures 263 of 263 green, 7,874 prose words, 41 figures, 37 pages — after being built green at 251 and rejected for having one subject, and rebuilt whole as nine situations under one theme (§4c, §16).**
Three numbers in this plan were forecasts and came back wrong — the word budget
by 1,397 words, the page count by five pages in the safe direction, and the
`E27` floor by nearly 3×. All three are now measurements, with the forecast kept
beside each one so the size of the error stays visible. §11 and §16.

---

## 1 · The one question I need answered before Phase 1

**You asked, when we settled the B1 open questions, that I "measure a real B1 book
rather than inherit A2's shape." I cannot, because no B1 book was supplied.** The A2
spec was measured out of `EFD_Book_U1-U10_Illustrated_StudentBook_2.docx`. There is
no B1 equivalent in the repository and none was given to me. Saying so is the point
of this section; the alternative is a plan that quietly pretends otherwise.

So there are two routes, and the difference between them is real:

| | **Route A — you have a B1 book** | **Route B — you do not** |
|---|---|---|
| What I measure | that `.docx`: pages, words per part, text lengths, figure law, device quota | the A2 architecture, plus the CEFR-J B1 profiles |
| What the spec gets | the book's own numbers, as A2 got | A2's architecture held constant, with every length re-derived from the specific B1 task that drives it (§3.3) |
| How the envelope is locked | measured up front | **forecast up front, then re-locked from Unit 1's own measurement** at the Phase 4 gate |
| Risk | none beyond A2's | the forecast is wrong by some margin; Phase 4 exists to find out and correct it before 19 more units are built |

**Everything below is written for Route B**, because it has to be executable today.
If you drop a B1 coursebook into `docs/general-english/B1/source/`, Phase 1 gains a
measurement pass and §3's numbers are replaced by that book's. Nothing else in the
plan changes. That is a one-line switch, not a rewrite.

---

## 2 · What was measured, and where every number came from

Nothing in this plan is remembered. These are the measurements, taken while writing
it, with the command that produced each one reproducible from the repository.

### 2a · The twenty A2 units, as they actually shipped

| | Measured across all 20 units |
|---|---|
| Total words a unit | 5,420–5,628, **mean 5,555** |
| Prose words (total minus captions) | 4,891–5,089, **mean 5,016** |
| Caption words | 523–553, **mean 538** |
| Sentences a unit | 136–168, **mean 149** |
| Mean sentence length | 8.7–10.9 words, **mean 10.0** |
| Longest sentence | 22–25 words (cap is 25) |
| Flesch–Kincaid grade | 3.1–4.6, **mean 3.8** (cap is 5.0) |
| Distinct word types a unit | 394–480, **mean 433** |
| Syllables a word | 1.272–1.362, **mean 1.312** |
| B1-tier running words (CEFR-J B1, not reachable as A2) | 0.1%–1.2%, **mean 0.5%** |
| Printed pages a unit | 37–38, **mean 37.2** |
| Answer-key words a unit | 2,576–4,451, **mean 3,100** |
| Course prose total | **92,064 words** |

Per-part prose, measured, against the spec envelope each part is held to:

| Part | Measured mean | Measured range | Spec min–max |
|---|---|---|---|
| Warm Up | 302 | 279–336 | 272–342 |
| Part 1 Vocabulary | 620 | 580–666 | 565–670 |
| Part 2 Grammar | 468 | 411–493 | 383–495 |
| Part 3 Listening | 479 | 438–535 | 398–558 |
| Part 4 Speaking | 329 | 293–373 | 280–375 |
| Part 5 Reading | 564 | 515–618 | 470–627 |
| Part 6 Writing | 461 | 439–499 | 437–547 |
| Part 7 Real-World File | 517 | 488–567 | 477–583 |
| Part 8 Global Story | 333 | 295–363 | 289–372 |
| Part 9 Close to Home | 328 | 311–355 | 310–395 |
| Part 10 Review | 203 | 186–218 | 162–242 |

And the four text lengths that actually drive the level, measured separately:

| | Measured across 20 units |
|---|---|
| Part 5 main reading | 106–200, **mean 130** words |
| Part 8 global story | 112–152, **mean 134** |
| Part 9 close-to-home reading | 117–168, **mean 133** |
| Audio scripts (5 a unit, 100 total) | 18–125, **mean 70** |
| Part 6 / 7E model answers (5 a unit) | 46–75, **mean 58** |

### 2b · The CEFR-J profiles, downloaded and counted

Source: `openlanguageprofiles/olp-en-cefrj`, the same repository the A2 wordlists came
from. CEFR-J Wordlist 1.5 and CEFR-J Grammar Profile 20180315, compiled by Yukio Tono,
Tokyo University of Foreign Studies; free for research and commercial use with
citation. This is the same provenance A2 already declares in
`spec/wordlists/PROVENANCE.md`, so B1 inherits a licence position that is already
written down and already honest.

**Vocabulary, headwords by level:**

| Level | Headwords | Cumulative band |
|---|---|---|
| A1 | 1,164 | 1,164 |
| A2 | 1,411 | **2,575** ← the A2 band |
| B1 | 2,446 | **5,021** ← the B1 band |
| B2 | 2,778 | 7,799 |

After splitting slash-variants the way A2's build does, the usable lists are **2,356
for A2** and **4,530 for B1** — a measured **1.92× widening**. I verified the
derivation by re-deriving A2's own shipped list from the CSV: 99.2% of the file on
disk reproduced exactly, and the B1-and-above list reproduced at 100%. The method is
repeatable, which is why I am willing to build B1's band on it.

**Grammar, B1 items:** 90 rows, **69 distinct concepts** once affirmative, negative
and interrogative variants of the same point are collapsed. Those 69 are the pool the
twenty-unit spine in §4 is drawn from, and §4 names the CEFR-J code behind every unit.

Three findings from that dataset corrected assumptions I would otherwise have made:

- **Past progressive is A2 in CEFR-J — and the A2 book never taught it.** It is a
  genuine gap, not a B1 point. B1 Unit 1 picks it up as a declared bridge.
- **Past perfect progressive, *wish* + conditional, *so that* and bare *enough* are
  B2.** They are excluded from the spine and go on the gloss-required list.
- ***too … to* and *so … that* are B1**, so Unit 13 is sound; *enough* is not, and is
  glossed where it appears.

### 2c · The A2 passage lengths, measured slot by slot

This table did not exist in v1, and it is why v1's length targets were wrong in two
places. It is every continuous text in A2, measured across all twenty units with
instructions, rubrics, tables and figure captions excluded — body prose only.

| Slot | What it is | A2 mean | min | max |
|---|---|---|---|---|
| Warm Up sub 3 | warm-up reading | 86 | 67 | 102 |
| Part 1 sub 2 | vocabulary reading | 82 | 52 | 108 |
| Part 1 sub 7 | short writing model | 45 | 38 | 54 |
| Part 2 sub 1 | grammar Notice text | 61 | 44 | 104 |
| Part 3 sub 1 | **listening script 1** | 72 | 49 | 94 |
| Part 3 sub 2 | **listening script 2** | 74 | 61 | 87 |
| Part 3 sub 3 | **listening script 3** | 83 | 66 | 125 |
| Part 4 sub 2 | role-play cards | 63 | 50 | 76 |
| Part 4 sub 3 | role-play scenario | 125 | 109 | 151 |
| Part 5 sub 1 | **main reading** | 130 | 106 | 200 |
| Part 5 sub 3 | **second reading** | 109 | 86 | 137 |
| Part 6 subs 1–4 | **writing models** | 62 / 59 / 59 / 52 | 46 | 75 |
| Part 7 sub 2 | Real-World File text | 79 | 64 | 104 |
| Part 7 sub 4 | 7B listening script | 104 | 81 | 123 |
| Part 7 sub 5 | 7E writing model | 66 | 58 | 72 |
| Part 8 leading | **Global Story** | 135 | 112 | 152 |
| Part 9 leading | **Close to Home reading** | 133 | 117 | 168 |
| **whole unit** | prose, captions excluded | **5,016** | 4,891 | 5,089 |

**A2's longest continuous text is 152 words.** That is the number every B1 length
target has to be set against, and in v1 two of them were not.

### 2d · Published B1 task lengths

Cambridge B1 Preliminary sets both writing tasks at **about 100 words**, against A2
Key's 25–35 — the figure behind the model-answer change in §3.3. Its Reading Parts 3
and 4 run **roughly 300–400 words** of continuous text, and its Listening Part 3
monologue runs about **two minutes**, which at 150 words a minute of natural
delivery is **≈ 300 words of script**. Those two are new in v2: v1 dismissed the
reading figure because it looked at the gap-fill parts only, and never looked at the
listening figure at all.

**That is the error.** v1 put B1 listening scripts at **110 words each**, against a
published B1 monologue of about 300, and the A2 book's own 7B script already runs
104. A B1 script of 110 words would have been one word longer than the A2 book's
longest. §3.3 corrects it.

---

## 3 · The frozen spec — B1

### 3.1 · What does not change

This is the "no drift" half, and it is most of the book. Every one of these is
already enforced by a check that B1 inherits unchanged:

**Architecture** — Warm Up + Parts 1–10 in the golden order · **42 sub-sections**
(3·7·7·3·4·3·4·5·2·1·3) · **110 bold headings** · 5 audio tracks (N.1 Part 1
Pronunciation, N.2–N.4 Part 3, N.5 Part 7B) · `[CORE]` Warm-Up + Parts 1–6 ·
`[PLUS]` Parts 7–10 · Part 10 `[CORE + PLUS]`.

**Devices, to the number** — 14 seeded `0.` · 7 "is not needed" · 7 *Model — read this
first* · 5 *Before you read* · 5 *Check before you finish* · 5 *Useful language* ·
4–5 *Word bank* · 4 *Gloss* (2–5 items) · 3 *Before you listen* · 2 *Model exchange* ·
2 *Stretch* · 1 each *Remember* / *Watch out!* / *Harvest* / *Answer frame* /
*7A Phrase Bank* / *Discussion frames* / *Pronunciation* · 1–2 *Plan*.

**Figures** — **41 a unit, 820 across the course**, in the same 41-slot layout, the
same four plain sub-sections declared in `no_figure_subs`, the full-page unit opener,
the full-page front and back covers, the same placement law (fit into the box, round
half-up to a whole 96-DPI pixel), the same 1440 px in-flow canvas and 2480 × 3508
full-page canvas, the same closed 12-colour palette.

**Typography and page** — A4 portrait 11906 × 16838 twips, 1440 twips margins, text
area 9026 twips, the reference DOCX, the running footer, the table border law.

**Exercise integrity** — 60 closed items a unit, MCQ balance A25 B25 C25 D25 a volume
with no letter over 40% in a unit and no two consecutive the same, every distractor
plausible, every gap uniquely fillable, an answer key with marking points and a
sample answer for every open task.

**Build and release** — hash-locked golden spec, deterministic build, the manifest,
the release gate, the mutation suite with a negative test for every check.

### 3.2 · What changes, and by how much

| | A2 (measured) | B1 | Why |
|---|---|---|---|
| In-band wordlist | 2,356 headwords | **4,530** | CEFR-J A1+A2+B1, measured (§2b) |
| Gloss-required band | B1+B2 | **B2 only** | B1 words are now in band |
| Off-band tolerance | ≤ 10% of running words | ≤ 10% | unchanged |
| **B1-tier floor** | — | **≥ 6% of running words from the B1 tier** | NEW — see §3.4 |
| Max sentence | 25 words | **32** | B1 admits subordination A2 refuses |
| Mean sentence ceiling | 14 words | **16** | 17 is unreachable: see §3.5 |
| **Mean sentence floor** | — | **≥ 12 words** | NEW — calibrated, see §3.4 |
| Clause nesting depth | 2 | **3** | relative + conditional + reported in one sentence |
| Flesch–Kincaid ceiling | 5.0 | **7.0** | binds before the sentence ceiling above a 15-word mean |
| **Flesch–Kincaid floor** | — | **≥ 5.5** | NEW — above A2's own ceiling, see §3.4 |
| Writing tasks | 50–70 ×3, 40–60 ×1, 50–80 ×1 | **90–110 ×3, 80–100 ×1, 100–120 ×1** | Cambridge B1 Preliminary: about 100 words |
| Glossary | 10 a unit, 200 a course | 10 a unit, 200 a course, **none repeating A2's 200** | NEW cross-level check |
| Part 8 countries | 20, none repeated | **20 new**, none repeating A2's | §4 |

### 3.3 · The word budget, derived part by part — **revised in v2**

Not a blanket multiplier. Each part's target moves by the length of the specific
thing inside it that B1 changes, and nothing else moves at all. The **Text** column
names the one measured text (§2c) that drives the change; the five rows marked ▲ are
the ones v2 raised after the audit.

| Part | A2 mean | Text that drives it | A2 → B1 | B1 part target | Δ |
|---|---|---|---|---|---|
| Warm Up | 302 | warm-up reading | 86 → 150 | **366** | +64 |
| Part 1 Vocabulary | 620 | short writing model + longer gloss and pronunciation | 45 → 80 | **715** | +95 |
| Part 2 Grammar | 468 | Notice text, plus a two-way contrast | 61 → 110 | **560** | +92 |
| ▲ Part 3 Listening | 479 | **three scripts** | 72/74/83 → **200/150/220** | **820** | +341 |
| Part 4 Speaking | 329 | role-play scenario and cards | 125/63 → 180/100 | **421** | +92 |
| Part 5 Reading | 564 | **two readings** | 130/109 → **300/220** | **845** | +281 |
| Part 6 Writing | 461 | **four model answers** | 62/59/59/52 → **105/100/100/90** | **624** | +163 |
| ▲ Part 7 Real-World File | 517 | 7B script and 7E model | 104/66 → **200/105** | **652** | +135 |
| ▲ Part 8 Global Story | 333 | **the story** | 135 → **300** | **498** | +165 |
| ▲ Part 9 Close to Home | 328 | **the reading** | 133 → **280** | **475** | +147 |
| Part 10 Review | 203 | same shape, fuller glossary gloss | — | **225** | +22 |
| **Prose total** | **5,016** | | | **6,201** | **+1,185** |

Captions stay at 538 (41 figures, same caption allowance), so a B1 unit totals
**≈ 6,740 words** against A2's 5,554 — a lift of **1.24×**, against a vocabulary band
that widened 1.92×. That asymmetry is deliberate: B1 is mostly *harder* text, not
proportionately *more* text. v1 forecast 1.12× and was wrong on the two listening
rows and the two narrative rows.

**What changed from v1, precisely.** v1 put all three Part 3 scripts at 110 words,
the Global Story at 240 and Close to Home at 240. Against §2d's published figures
— a B1 monologue of about 300 words of script — and against A2's own 7B script of
104 words, a 110-word B1 script is not a level step at all. The longest continuous
text a B1 unit now carries is **300 words**, against A2's measured 152: a clean
1.97× on the thing that most determines perceived level.

**Why the readings are 300 and 220, not 350 each.** Cambridge B1 Preliminary's
reading parts run 300–400 words, but that is an exam text read once under timing.
A coursebook reading is worked through with a gloss, a vocabulary-in-context task
and a comprehension set, and A2's own ratio between its two readings (130 : 109)
is kept. 300 for the flagship, 220 for the second.

**Those numbers are now measured, and the forecast was wrong by 1,397 words.**
Unit 1 is built and measures **7,598 prose words**, not 6,201 — 1.51× A2, not
1.24×. The reason is one the forecast could not have caught and the measurement
could: §3.3 derived each part's target by adding the growth of the one *text*
inside it and **held the apparatus at A2's length**. At B1 the apparatus grows
with the language, everywhere at once. A four-item gloss that defines B1 words
needs a clause per item, not a phrase. An MCQ distractor that has to be
plausible at B1 is a full clause — Part 5's twelve options alone are 90 words
against A2's 40. A Column B row that distinguishes *grid* from *substation*
cannot be six words. A 90–110-word writing task needs a model of that length, a
four-row Plan and a four-box checklist. None of that is in the named texts and
all of it is on the page.

`spec/golden.yaml` now carries the measured value for every part, with the
forecast kept beside it under `forecast:` so the size of the error stays
visible, and a band of ±9% on a sample of one. The measured per-part figures
are: Warm Up 432 · Part 1 749 · Part 2 673 · Part 3 857 · Part 4 412 · Part 5
1,041 · Part 6 674 · Part 7 866 · Part 8 709 · Part 9 507 · Part 10 248.

**What did NOT move:** the texts themselves. Every length decision in the table
above was met — listening 209/166/196, readings 300/247, Global Story 300,
Close to Home 266, writing models 108/103/107/90, 7B script 218, 7E model 116.
The error was entirely in the apparatus estimate.

### 3.4 · The floor checks — the one genuinely new idea in this plan

A2's language family has twenty-six checks and every one of them is a **ceiling**:
no sentence over 25 words, no grade above 5.0, no more than 10% off-band. That is
the right shape for A2, where the only failure mode is writing above the level.

**At B1 the dangerous failure is the opposite one, and A2's suite cannot see it.**
A unit written entirely in A2 language passes every ceiling with room to spare. It
would ship as B1 and be A2 with a different cover — the exact drift you asked me to
make impossible.

So B1 adds three floors, and they are the reason I am confident about level:

- **`E27` — the level's own-tier share. 2.2%, corrected from 6% at the Phase 4
  gate.** At least **2.2%** of running words must be CEFR-J B1-tier and *not*
  reachable as A2 by the project's own `lexis.in_band` (which also consults the
  2,000 high-frequency list, so this is the strict reading).

  **6% was wrong, and it was wrong in the way this section was written to
  prevent.** It was set as five times A2's measured B1-tier share (0.1%–1.2%),
  which is the wrong reference class entirely: that number says how little B1
  vocabulary an A2 book uses, and nothing whatever about how much a B1 book can
  carry. Unit 1, written to every other B1 bound, measures **3.24%**. 6% was not
  a floor but a wall.

  The right reference is how heavily a book draws on its **own** newest tier.
  Measured across the twenty A2 units — A2-list words the 2,000-word frequency
  list does not also reach — A2 carries **4.09% mean, 2.26% minimum, 6.58%
  maximum**. So the floor is A2's own minimum: *a B1 unit must draw on the B1
  tier at least as heavily as the thinnest A2 unit draws on A2's.* That is still
  1.8× A2's measured B1-tier maximum, so `L01` holds, and Unit 1 clears it by
  1.5×. The number to write to is ~4%, matching A2's mean.
- **`E28` — mean sentence floor.** At least **12.0** words. A2 measures 8.73–11.19
  (the upper figure re-measured after the shuffling repair). Unit 1 measures 15.5.
- **`E29` — reading-grade floor.** Flesch–Kincaid at least **5.5**. A2 measures
  3.14–4.61 — and 5.5 is above A2's own *ceiling* of 5.0, so B1 is required to start
  where A2 was forbidden to go. That is the cleanest statement of the level step in
  the whole spec. Unit 1 measures 6.61.

**These three numbers are not proposals. They were calibrated against all twenty A2
units**, and all three first values were wrong — two found while the plan was being
written, the third only when Unit 1 was built against it:

| Floor | First tried | A2 max | Result | Corrected to |
|---|---|---|---|---|
| `E27` own-tier share | 6% | 1.2% | every A2 unit fails — and so does every *B1* unit. The wrong reference class; see above | **2.2%**, A2's own-tier minimum |
| `E28` mean sentence | 11.0 | 11.19 | every A2 unit fails — **by 0.057 words on the first measurement** | **12.0**, margin 1.07 |
| `E29` Flesch–Kincaid | 4.5 | 4.609 | **one A2 unit passes** — not a floor at all | **5.5**, margin 0.89 |

A floor one unit clears by 0.06, or that one unit passes outright, is a coin flip, not
a check. Finding that out cost one measurement pass; finding it out at Phase 5 would
have cost nineteen units.

### 3.5 · How the floors and ceilings interact — stated, not discovered later

Flesch–Kincaid is `0.39 × (words per sentence) + 11.8 × (syllables per word) − 15.59`,
so the sentence-length and reading-grade bounds are not independent. Two consequences,
both measured rather than assumed:

**The floors together demand real B1 lexis, not just longer sentences.** At the
12-word sentence floor, clearing `E29`'s 5.5 needs **1.391 syllables a word** against
A2's measured 1.312 — about **6% longer words**. A unit cannot satisfy both floors by
stapling A2 clauses together with *and*; it has to use the wider band. That is the
behaviour I want, and it falls out of the arithmetic rather than being legislated.

**The reading-grade ceiling binds before the sentence ceiling.** A 17-word mean at a
realistic B1 word length of 1.38–1.45 syllables gives FK **7.32–8.15** — over the 7.0
cap. A 17-word ceiling is therefore unreachable and would have been a dead number in
the spec. **The mean-sentence ceiling is 16**, and above roughly a 15-word mean it is
`E22` that stops you, by design.

---

## 4 · The syllabus — twenty units — **rebuilt as themes in v3**

Grammar from the CEFR-J B1 Grammar Profile; the code in the last column is the item
the unit teaches. No point repeats any of A2's twenty. No country repeats any of
A2's twenty. **The grammar order and the countries are unchanged from v2, because
both were sound.** What changed is everything in the Theme column.

**What v3 changed, and why.** v1 named each unit after its grammar. v2 renamed each
unit after a concrete situation — and that turned out to be the same mistake wearing
better clothes, because a unit named after one situation is a unit that spends
eleven parts on it. v2's Unit 1 was *The Night the Power Went Out*, and it was a
power cut in the warm-up, a power cut in the vocabulary, three power-cut listenings,
a power-cut meeting, a power-cut reading, four power-cut writing tasks, a power-cut
phone call, a power cut in Buenos Aires and a power-cut argument three weeks later.

**A unit is now a theme carrying several situations.** The theme is a region of
neighbourhood life wide enough to hold six or seven different things going wrong in
different places to different people. The grammar point is the thread that runs
through all of them, and it is the grammar that repeats, never the situation. Each
unit's situations are named below and declared in full in `ledgers/situations.yaml`,
where family M reads them (§4c).

**This is not decoration. It is what the grammar wants.** The past continuous is the
tense of simultaneity: teaching it through one interruption gives the unit one long
action and one short one and then nothing left to do. Five things happening at once
give it the shape it actually has. The same argument holds down the list — duration
needs several durations beside each other, deduction needs several chains of
evidence, comparison needs several pairs, regret needs several people's regrets.

### Book 1 — *Looking Back* (the past behind the past, and what might have been)

| U | Theme | The situations it carries | Grammar | Part 8 | CEFR-J |
|---|---|---|---|---|---|
| 1 | **The Afternoon Everything Happened at Once** | a misdelivered skip · a card reader that failed mid-queue · a window cracked with nobody watching · a flat battery halfway across town · a flat already let · a dropped call · three hours looking for a cat · a street closed for filming · the meeting three weeks later | past continuous vs past simple — *while / when* | Argentina | `TA.PASTPRG` (declared bridge, §4b) |
| 2 | **Still Waiting** | scaffolding up since March · a claim in its fourth month · a consultation with no reply · damp reported four times · a licence renewal somewhere · a list on the stair door | present perfect continuous — *how long, for, since* | Finland | `TA.PRPFPRG` |
| 3 | **Nobody Told Us** | a rent rise agreed in June · a road closed that morning · a school place after the deadline · a chemist already shut · a deposit in the wrong account · what the noticeboard had said | past perfect — *by the time, before, after* | Nepal | `TA.PASTPF` |
| 4 | **What This Street Used to Be** | the Thursday market · what the flats went for · the 42 before the route changed · the launderette · who lived in flat 3 · a box of photographs | *used to* / *would* for past habit | Tunisia | `MD.used_to` |
| 5 | **The Year the Street Gets Dug Up** | eleven weeks of roadworks · a block going up · a lease ending in October · an exam in June · a pram in the hall by August · the year on one page | future forms contrasted + future continuous | Australia | `TA.FUT`, `TA.FUTPRG` |
| 6 | **If We Had the Money** | £210 and five claims on it · somewhere to put a bike · a light in the car park · the beds at the front · five private what-ifs · the two who would not vote | second conditional | Colombia | `SUBJ.PAST` |
| 7 | **The Ones That Got Away** | a flat not taken in 2023 · a job not applied for · a deposit nobody chased · an argument at a party · a second shop nearly taken · a letter not sent | third conditional | Estonia | `SUBJ.PASTPF` |
| 8 | **Somebody's Been Here** | a parcel for nobody · a noise at the back, twice · a smell on the second floor · a light in the empty flat · a bill for the wrong meter · what five people wrote down | modals of deduction — *must / might / may / can't be* | Philippines | `MD.must`, `MD.might`, `MD.may` |
| 9 | **We Should Have Checked** | a car bought on a Saturday · a holiday let with an old photograph · a contract with a second year in it · a subscription nobody noticed · a quotation that was not one · the checklist written afterwards | *should have / ought to / had better* | Chile | `MD.MD_PF`, `MD.ought_to` |
| 10 | **Starting Something at Forty** | a bookkeeping course · a driving test at the fourth attempt · Mr Okonkwo's Portuguese · eleven months to break even · an access course and a childcare problem · a how-to sheet | *be able to / manage to* | Senegal | `MD.be_able_to`, **`IMP.V.NEG`**, **`IMP.do_V`** |

### Book 2 — *Making Yourself Clear* (saying, joining, explaining)

| U | Theme | The situations it carries | Grammar | Part 8 | CEFR-J |
|---|---|---|---|---|---|
| 11 | **Where Everything Comes From** | how the shop's stock is ordered · where the recycling goes · what is done to the water · a parcel tracked backwards · bread baked where · reading a label properly | passive extended — perfect, future, modal, *get + pp* | Bangladesh | `PASS.MD`, `PASS.get_VN`, `PASS.IO` |
| 12 | **A Week Without It** | seven days without a smartphone · a month without cooking meat · leaving the car · handing in a notice · an hour before bed, agreed and broken · the diaries at the end | gerunds and infinitives — *-ing* vs *to*, *not to do* | Denmark | `TO.not_to_do`, `VG.P`, `VN.P`, **`VP.SV.AFF`** |
| 13 | **Too Many, Too Few** | one park, four uses · eleven days for an appointment · nine spaces, nineteen cars · fortnightly bins · a class of thirty-four · counting it for a week first | *too … to* / *so … that* | Thailand | `RBDEG.too_to`, `RBDEG.so_JJ`, **`EXCL.how_JJ.RB`** |
| 14 | **Nothing Like the Picture** | eight photographs and one viewing · a sofa in a colour with a name · twelve minutes from the sea · what the advertisement said the job was · unlimited, with conditions · the review that would have helped | comparison refined — *not as … as*, intensified, *-er and -er* | Jamaica | `COMP.EQ`, `COMP.even_JJR`, `COMP.and`, **`DT.these.those_N`**, **`PPOS.mine.etc`** |
| 15 | **The Names on the Street** | the woman on the bridge · a bench with a plate · who the school was named after · a mural nobody repaints · the sign Amina kept · a plaque in thirty words | non-defining relatives + *where / when / whose* | Italy | `PREL.NR`, `RBREL.NR`, `RBREL.NOANT` |
| 16 | **What the Group Chat Said** | the building being sold · a message home, forwarded four times · an email read as an instruction · the app at eleven at night · somebody's cousin who works for the council · going back to the source | reported speech in full — backshift, reported questions and commands | Rwanda | `INDSP.tell`, `INDQ.ask`, `CAUS.ask`, **`VP.SVOtoO.AFF`** |
| 17 | **Asking the Council** | a licence that is with somebody · a repair logged three times · a skip permit applied for late · a bus-lane fine and a photograph · a form with no box for it · the record that shortens the next call | indirect questions and question tags | Turkey | `CL.WH.OBJ`, `TO.WH_to_do`, `TAG.AFF`, `TAG.NEG`, **`INTF` ×6** |
| 18 | **Fixing It Ourselves** | a drill that belongs to everybody · a repair afternoon · four beds and a watering rota · the month the stair rota broke · a list of who can do what · saying it properly afterwards | reflexives, *each other*, *-thing / -body*, *others* | Uruguay | `PREFL.oneself.etc`, `PREF.each_other`, `NN.thing_JJ`, `P.others` |
| 19 | **Somebody Ought to Say Something** | the third step from the bottom · a mattress by the bins · £4 a month nobody queried · the drain at the front · a door that shuts but does not lock · deciding who says it | *it + be + adj + to-infinitive*; *there + modal + be* | Sri Lanka | `PP.it_to_do`, `EX.there.MD` |
| 20 | **Putting a Case** | three minutes at a public meeting · two hundred words to a local paper · standing for the committee · saying no to something reasonable · a question you were not expecting · the last word | adverbs of attitude and discourse linkers | Croatia | `RB.ATT` |

### 4a · CEFR-J B1 coverage — audited, and the six gaps closed

The B1 Grammar Profile has **84 rows at B1, in 29 shorthand families**. v1's syllabus
named 23 of those families. **Six had no home anywhere in the plan**, covering 13
rows, and the audit found them by matching every code in the profile against the plan
text. Each is now placed, with a stated disposition — because three of the six would
be a *regression* if taught as new at B1:

| Family | Rows | Disposition | Where |
|---|---|---|---|
| `INTF` | 6 | **Taught as new.** Functional questions — *Could you …? May I …? Can't you …? Couldn't you …? Won't you …? Wouldn't you …?* — are exactly the B1 politeness-and-indirectness work that belongs beside indirect questions. | U17, Part 4 and Part 7 |
| `EXCL` | 1 | **Taught as new.** *How crowded it was!* is the natural exclamative beside *so … that*. | U13, Part 2 freer practice and Part 4 |
| `VP` | 2 | **Recycled, not taught.** `VP.SV.AFF` (bare subject + verb) and `VP.SVOtoO.AFF` (*gave it to her*) are A1/A2 sentence patterns the profile places at B1.1 on frequency. Teaching them as new would be the regression you asked me to make impossible. They are *named* in the Grammar Focus Box as the pattern the new point sits on. | U12, U16 |
| `IMP` | 2 | **Recycled, not taught.** Same reason: imperatives are A1. They appear as the instruction register of a B1 how-to text and are named, not drilled. | U10, Part 7 |
| `DT` | 1 | **Recycled, not taught.** *These/Those + N* is A1. Named in the comparison unit where *these* and *those* carry the contrast. | U14 |
| `PPOS` | 1 | **Recycled, not taught.** Possessive pronouns are A2. Named where *mine* and *theirs* do comparison work. | U14 |

**Coverage after v2: 29 of 29 families, 84 of 84 rows.** A new check, `K21`, reads
`spec/wordlists/source/grammar.csv`, resolves every B1 row's family, and fails if any
family is absent from `ledgers/grammar.yaml` — so this audit cannot silently rot. The
ledger carries the disposition (`taught` or `recycled`) per row, and `E06` only
enforces the markers of rows marked `taught`.

### 4b · The three spines — flow, stated so it is checkable

v1 asserted that B1 flows from A2 and within itself. v2 names the three mechanisms:

1. **The grammar spine.** Book 1 is *time and unreality* — every point is a
   displacement away from the present moment, in a single widening arc: one step back
   (U1), a step back that is still going (U2), a step behind the step back (U3), the
   habitual past (U4), forward (U5), then unreal present (U6), unreal past (U7),
   inference (U8), inference about the past (U9), and ability across all of it (U10).
   Book 2 is *saying and joining* — passive (U11), complementation (U12), degree
   (U13), comparison (U14), relatives (U15), reporting (U16), indirect questions
   (U17), reflexive and reciprocal (U18), impersonal (U19), stance (U20). Each point
   needs the one before it; none needs one after it. `E06` enforces the order.
2. **The A2 spine, recycled.** `K19` asserts every one of A2's twenty points is named
   in at least **three** B1 Spiral Reviews, and that **no B1 unit presents one as
   new**. v2 tightens the second clause from a convention into a marker test: a sub-
   section headed *Grammar Focus Box* may not introduce an A2 point.
3. **The cast and place spine.** The same six principals and twenty walk-ons,
   two years on (§5), on the same street. Every unit's Part 9 is on that street; `F01`–`F11` already enforce
   that nobody's age, job, family or history contradicts A2 or an earlier B1 unit.

**`E06` has a harder job at B1 than it had at A2, and this is the subtlety that
would otherwise bite.** At A2, a grammar marker appearing before its unit was simply
illegal: nothing had been taught yet. At B1, **eight of the twenty points extend an A2
point rather than introduce a new one** — passive extended (A2 U17), reported speech in
full (A2 U20), second and third conditional (A2 U18's first), non-defining relatives
(A2 U19's defining), past perfect and present perfect continuous (A2 U15–16's present
perfect), *should have* (A2 U14's *should*). Reported speech is legal from B1 Unit 1
because A2 taught it; **backshift specifically** is not legal until B1 Unit 16. So every
B1 marker must match the *extension*, not the family — `had \w+ed` not `\bsaid\b`,
`would have \w+ed` not `\bif\b`. `ledgers/grammar.yaml` carries both the marker and
the A2 point it extends, and the exempt list is seeded with every A2 form.

**Volume titles are a proposal.** *Looking Back* and *Making Yourself Clear* follow
A2's plain register. Say the word and they change; nothing else moves.

---

### 4c · The content law — what family M enforces, and what it cannot

The law is one sentence: **a unit is a theme carrying several distinct situations,
and it is the grammar that repeats, never the situation.** `ledgers/situations.yaml`
makes that declarable and family M makes it checkable. The numbers:

| | | Check |
|---|---|---|
| Distinct situations a unit carries | **≥ 7**, each owning at least one sub-section outright | `M02` |
| Sub-sections any one situation may own | **≤ 7** of 42 (16.7%) | `M03` |
| Share of all attributions any one may take | **≤ 25%**, counting the theme sub-sections that draw on it | `M03` |
| Distinct physical settings | **≥ 5**, and none on more than 9 sub-sections | `M04` |
| Strands a theme-level sub-section must draw on | **≥ 2**, each verified present in its own text | `M05` |
| Share of a unit's situations any one person may be in | **≤ 60%** | `M09` |

`M01` requires every one of the 42 sub-sections to be attributed to a situation or to
the theme, and every attribution to name a heading that exists — so the map cannot
drift from the unit. `M07` requires each situation to be findable in the unit's own
text, by its own declared probe words, in the very sub-sections it claims.

**The realism clause, and its honest limit.** No check can judge whether a situation
is plausible. What `M06` can do is refuse one whose obvious objection has not been
named and answered: every strand declares `obvious_out` — the thing any adult reader
thinks of within two seconds — and `why_not`, the answer, in the strand's own facts.
`M08` greps four blocklisted premises, and the first of them is the one that got the
file written:

| id | What it forbids | Why |
|---|---|---|
| `dark_without_phone` | twenty minutes of being unable to see | Every adult in 2026 carries a torch, and v2's own script had somebody walk past holding out a lit phone |
| `unreachable_by_phone` | being uncontactable, asserted bare | It needs a stated cause — a flat battery, a dead area, a number nobody knows by heart. Unit 1 now uses all three, and names them |
| `nobody_knew` | a week of total ignorance | Information travels; a street with a group chat does not have one |
| `unexplained_authority` | a flat refusal with no reason | Institutions are slow, not silent, and the slowness is where the language work is |

**`M10` is the calibration**, and it is to this family what `L01` is to the level
floors. A law that would have passed the thing it was written to reject is not a law,
so the superseded unit is kept at `spec/fixtures/b11-u01-v1.md` and `M10` fails if
the numbers above would have let it through. They would not: it carried **2** distinct
situations against a floor of 7, ran **37** of its 42 sub-sections on one of them
against a cap of 7, and stood in **2** settings against a floor of 5.

**What this still cannot do.** It cannot tell you a situation is boring, that a
sentence is flat, or that a joke does not land. It can tell you that a unit is not
one story in disguise, that every situation in it has survived its own obvious
objection, and that the objection's answer reached the page. That is the whole
claim, and §13 does not make a larger one.

## 5 · The cast, two years on

The same six people at 14 Alder Street. `ledgers/cast.yaml` for B1 is **seeded from
A2's final state**, not written fresh, and every age moves by two.

| Person | A2 | B1 | What two years changes, and what it carries |
|---|---|---|---|
| **Maya Oduya** | 26 | **28** | Still the bookshop; now making books by hand seriously. Carries the hypotheticals — the move she keeps not making. |
| **Tomas Nilsen** | 31 | **33** | Nurse, still nights. Carries deduction, the health system, *should have*. |
| **Amina Chaudhry** | 58 | **60** | The shop under pressure. Carries the passive — where things come from, what gets delivered, what stopped. |
| **Dani Rossi** | 19 | **21** | Course finished, first job. Carries *used to*, money, second conditional. |
| **Mr Okonkwo** | 70 (71 in A2.2) | **72** | Carries the past perfect and how the street used to be — the only one who remembers before. |
| **Yuki Tanaka** | 34 | **36** | No longer the newcomer. Carries reporting and linking: the one who now explains the street to somebody else. |

Two continuity rules, both mechanical:

- **`F04` reads both ledgers.** A B1 sentence that contradicts an A2 fact fails. Tomas
  cannot have been a teacher; Amina's shop cannot have closed on Mondays.
- **`ages_also`** carries each A2 age so a flashback to the A2 years is legal and a
  contradiction still is not.

Part 8 leaves the street each unit; Part 9 stays close to home. Unchanged.

---

## 6 · The visual system

**820 figures, 41 a unit, identical layout.** Everything built for A2 carries over:
30 figure jobs, **165 icons**, the placement law, the full-page mechanics, the
caption discipline, the coverage law, and the whole phase-6 pipeline — the extractor,
the generator, the icon map, the preflight and the slot patcher. That is the single
largest saving in this plan: the visual system is already built and already proved on
820 figures.

**Four new figure jobs**, because four B1 grammar points have a shape no existing job
draws:

| Job | For | Why nothing existing fits |
|---|---|---|
| `two_point_timeline` | past perfect (U3) | `timeline` has one line of events; the past perfect needs two marked points and the order between them |
| `hypothetical_fork` | second and third conditional (U6, U7) | `decision_fork` draws real choices; this draws the real branch and the unreal one, visibly distinguished |
| `certainty_scale` | modals of deduction (U8) | a graded line from *can't be* to *must be*, with the evidence under each |
| `transform_pair` | reported speech (U16) | direct above, reported below, with exactly the parts that changed ringed in both |

**Icons:** A2 needed 165 for domestic and street vocabulary. B1's topics add work,
money, study, media, services, the environment and officialdom. Forecast **45–65 new
icons**; the icon map already covers both volumes of A2 and is extended, not replaced.

### 6a · The depiction law — added in v3, because the pictures were rejected too

"The visuals are not interesting at all either." Half of that is taste and half of it
is measurable, and this is the measurable half: **a figure that restates its own
caption teaches nothing, and a figure drawn to show a contrast that draws the same
thing on both sides teaches the opposite of what it was for.** v2's Unit 1 had both.

* Its `scene` of six people put a generic person glyph under *was reading in bed*, a
  nurse under *was coming up the stairs* and a house under *was sitting by the
  window*. The glyph named the person's job; the caption did all the work. Six
  pictures, no information.
* Its `info_gap_pair`, whose entire task is for two students to find four
  differences, drew the same stairs, the same bag and the same door on both sides —
  including for the pair *three doors shut* / *three doors open*, where the picture
  contradicted the text it served.

**`G34` — depiction.** In the eleven jobs whose glyph is there to depict (`scene`,
`word_grid`, `bank_strip`, `cue_cards`, `glossary_grid`, `category_set`,
`close_scene`, `world_strip`, `info_gap_pair`, `before_after`, `sort_bins`), every
icon must be licensed by some content word of its own label — the icon's own name, or
a word or pair of words that `tools/icon_map.py` resolves to it. `dialogue_strip` and
`speakers` are deliberately outside it: there the glyph identifies who is talking and
is a portrait, not a depiction.

**`G35` — contrast.** In `info_gap_pair` and `before_after`, the two sides may not
draw the same glyph in more than half their positions.

**Scope, stated rather than implied.** Both are gated on
`golden.figures.depictive_icons`, which B1's spec sets and A2's does not. Measured
when the law was written: **332 of A2's 1,354 depictive icon/label pairs (25%) would
fail `G34`**, concentrated in `category_set` (84/110), `scene` (77/96) and
`world_strip` (59/66). A2 is not retrofitted. Eight hundred and twenty figures are
already drawn and shipped, and re-choosing a quarter of their glyphs in the same
commit that invents the law would be a change nobody could review. The law applies
forward; the measurement is recorded here so the decision is visible rather than
silent, and reversing it is a day's work with `G34` as the worklist.

**Two new glyphs**, `van` and `cat`, drawn for Unit 1 because the law would not
accept a picture that does not show what its label says and nothing existing showed
a vehicle that was not a bus or an animal at all. Both go into the shared library.

**What G34 found while being written**, and this is the part worth keeping: the
pair-extraction it uses originally recognised only `(label, icon)` and
`(name, icon, descriptor)`. The third shape, `(title, [lines], icon)`, is what
`cue_cards` and `before_after` take — so the icon at the top of **every role-play
card and every before-and-after panel in both courses** was never looked at. That is
another instance of §8f's lesson, found by writing a new check rather than by
running an old one.

**The pronunciation slot** is already five jobs in A2 (`sound_shape`, `sound_groups`,
`function_map`, `annotated_lines`, and the A2.2 phrase-and-explanation shape). B1
pronunciation is connected speech, weak forms, sentence stress and intonation —
`annotated_lines` and `sound_groups` cover all four, and `figure_source.pron_kind`
already classifies by the section's own shape rather than by level.

---

## 7 · Deliverables

Per volume: the book as DOCX and PDF; the answer key alone as DOCX and PDF; the ten
units each alone as DOCX and PDF; a front and back cover at 300 DPI; a check report.
Plus, shared: the golden spec, the three ledgers, the two B1 wordlists with their
provenance, the figure library, the check suite and its mutation fixtures, and
`DOWNLOADS.md` with a one-click link for every file — the shape A2 ships in today.

**Totals:** 20 units · ~114,000 words of student text · ~72,000 words of answer key ·
820 figures · 100 audio scripts · 4 covers · **~1,070 printed pages across two
volumes** (A2 measures 994). The key grows with the open tasks: A2's keys average
3,100 words a unit against writing tasks of 50–70 words; B1's are 90–120, so the
marking points and sample answers grow with them.

---

## 8 · The checks — 238 inherited, 13 changed, 25 new

B1 does not get a new check suite. It gets **the same suite**, because a second suite
is a second standard and that is the definition of drift. 238 checks carry over as
they are. Thirteen read a number that moves. **Twenty-five are new: thirteen in v2,
and twelve more in v3** — family M's ten (§4c) and `G34`/`G35` (§6a), which take the
suite from 251 to **263**. All twelve are declared at B1 only, for a stated reason:
family M reads `ledgers/situations.yaml`, which A2 does not have, and `G34`/`G35` are
gated on a spec flag A2 does not set. All twelve carry a mutation fixture in
`MUTATIONS_B1`, so `K15` accounts for every one of them rather than letting them sit
quietly untested.

### 8a · The 238, by family

A 30 · B 22 · C 28 · D 14 · E 26 · F 18 · G 30 · H 23 · I 12 · J 17 · K 18.
Of those, 46 are book-scoped and 13 are adjudication gates that stop the build for a
human judgement rather than pass or fail on their own.

### 8b · Changed — 13 (spec values only, no code)

| Check | Reads | A2 | B1 |
|---|---|---|---|
| `E01` | `language.min_a2_coverage` → renamed `min_band_coverage` | A2 list, ≥ 90% | B1 list, ≥ 90% |
| `E02` | off-band vocabulary | B1+B2 flagged | **B2 only** flagged |
| `E04` | `max_sentence_words` | 25 | **32** |
| `E05` | `max_clause_depth` | 2 | **3** |
| `E22` | `fk_grade_max` | 5.0 | **7.0** |
| `E25` | mean sentence ceiling | 14 | **16** (17 is unreachable — §3.5) |
| `E26` | words that must be glossed | B1-and-above list | **B2-and-above list** |
| `A20` | writing-task word ranges | 50–70 / 40–60 / 50–80 | **90–110 / 80–100 / 100–120** |
| `K11` | per-part prose budget | §2a table | **§3.3 table** |
| `G27` | caption words a unit | 480–625 | unchanged (41 figures) |
| `H21` | pages a unit | 20–42 | **forecast 36–46, locked at Phase 4** |
| `J15` | pages a volume | 230–520 | **forecast 330–560, locked at Phase 4** |
| `F12` | Part 8 countries | A2's twenty | **B1's twenty** (§4) |

### 8c · New in v2 — 13, taking the suite to 251

*(v3 adds twelve more — family M and `G34`/`G35` — taking it to 263. They are
specified in §4c and §6a rather than repeated here.)*

| New | Family | What it enforces | Why it must exist |
|---|---|---|---|
| `E27` | Language | ≥ **6%** of running words B1-tier and not A2-reachable | The level floor. Every A2 ceiling passes a text written entirely in A2 words. A2 measures 0.5%. |
| `E28` | Language | mean sentence ≥ **12.0** words | Same reason. A2 measures 10.0, max 10.94. |
| `E29` | Language | Flesch–Kincaid ≥ **5.5** | Same reason. A2 measures 3.8, max 4.61 — and A2's own ceiling is 5.0. |
| `E30` | Language | every B2-and-above word used is glossed in its own unit | `E26` says it must be glossable; this says it was actually glossed. |
| **`C29`** | **Exercises** | **no matching key reads `a,b,c,d,e`, and at most 2 of 5 answers sit on the diagonal** | **§8e. A2 ships 4 full diagonals and 7 more at 3+. Nothing in the suite looks at a matching key's shape.** |
| **`C30`** | **Exercises** | **a word bank is not printed in answer order, and its first word is not the first answer** | **§8e. 27 of A2's 60 word banks are in answer order; 37 give the first answer away.** |
| `F19` | Content | no B1 glossary word appears in any **A2** glossary | 400 glossary words across two levels, none repeated. Needs to read across levels, which nothing currently does. |
| `K19` | Regression | every A2 grammar point is named in ≥ 3 B1 Spiral Reviews, none presented as new, and no *Grammar Focus Box* introduces an A2 point | The A2 spine is recycled, not re-taught (§4b). |
| `K20` | Regression | the shared toolchain produces byte-identical A2 output | The gate in §9. Fails the moment a B1 change touches A2. |
| **`K21`** | **Regression** | **every CEFR-J B1 grammar family appears in `ledgers/grammar.yaml` with a disposition** | **§4a. The coverage audit, made permanent. Reads the profile CSV, not a hand-written list.** |
| `G31` | Figures | the four new jobs draw what their slot's spec says | Matches `G19`–`G21`, which do this for `label_me`, `category_set` and `process_strip`. |
| `L01` | Level | the three floors were calibrated against A2 and **every A2 unit fails them** | A floor nothing fails is not a floor. This is the check that checks the checks. |

Each of the thirteen gets a mutation fixture, so A2's mutation suite goes
**221 → 229** and B1's own set carries the remaining four, which A2 structurally
cannot test. `K15` ("every non-gate check has a negative test") holds unchanged
at both levels, and `mutations.CROSS_LEVEL` names the four with their reason
rather than leaving them quietly uncovered.

**One of those four found a fifth defect.** `K19`'s own fixture escaped,
because the key it was looking for had been cut in half — `keys()` stripped the
punctuation out of a grammar point BEFORE splitting on it, so every A2 point
collapsed to one long string no text could contain and the check could not
fail. Fixing it exposed the truncated ledger in §8f.

**`C29` and `C30` are the only two of the twelve that are not B1-specific.** They are
A2 bugs, found by this audit, and they go into the shared suite — which means A2 goes
red the moment they land. §8e is how that is closed, and it happens **before** B1
Unit 1 is written, not after.

### 8e · The A2 answer-shuffling defect — found by this audit, fixed before Phase 1

You asked whether questions that need shuffling are marked for shuffling. **They are
not.** A2 has exactly one check in this area — `C18`, *"the scrambled list is not
already in the correct order"* — and it fires only on ordering tasks (`Number them
1–5`). Matching tasks and word-bank gap-fills have no such guard, and both leak.

**Measured across all twenty shipped A2 units:**

| | Tasks | Defective | What a learner can do |
|---|---|---|---|
| Matching (Column A / Column B) | 140 | **4** print B in exactly A's order (key = `abcde`) | answer all five without reading Column B |
| Matching, 3+ answers on the diagonal | 140 | **7** (2 at three, 1 at four, 4 at five) | guess the pattern after two items |
| Word-bank gap-fill | 60 | **27** print the bank in exactly answer order | fill left-to-right without reading the sentences |
| Word-bank gap-fill, first word = first answer | 60 | **37** | the first gap is free |

The four full diagonals are `a22-u17` *Who Did It, or Just What Happened?*, `a22-u18`
*If, When or Unless?*, `a22-u19` *Who, Which or That?* and `a22-u20` *Said, Told or
Asked?* — all four in Part 1, all four in the second volume, all four almost certainly
the same authoring habit repeating. Twenty of the 27 bank defects are **Part 10 Spiral
Review**, the same habit in the same slot.

**Why it was invisible.** Every one of these tasks passes `C01`–`C17`: the columns
parse, Column B is one longer than Column A, the "not needed" instruction is there,
the key is a bijection, no letter is used twice, the distractor is plausible. The
tasks are *correct*. They are just answerable without reading them, and correctness
checks cannot see that.

**The repair — 44 tasks, mechanical, and it regenerates its own figures.** For a
matching task, Column B's rows are permuted and the key letters rewritten; for a word
bank, the bank's print order is permuted. The permutation is deterministic — seeded
from the sub-section heading, so a re-run reproduces it — and is rejected and
re-drawn until it satisfies `C29`/`C30`. Because `figure_source.py` reads the
**markdown** and `gen_figures.py` renders from it, the affected figures (the Column-A
grids and the *"word bank … in the order it is printed"* strips) regenerate correctly
with no hand work. Nothing else in either volume moves.

**Gate — met.** It landed with `C29`, `C30` and their two mutation fixtures, and
the repair came out at **7 matching tasks and 42 word banks**, not the 7 and 37 the
first count gave: `C30` grew a third clause during the work, because a bank can avoid
being in answer order and still have most of its words standing exactly where their
own answer stands, which is the same giveaway spread out.

### 8f · Five more A2 defects, found the same way

§8e's shuffling defect was the first thing the audit turned up. Five more came
out of actually building Unit 1 against the shared toolchain, and each one had
been invisible for the same structural reason: the check that should have seen
it was measuring the artefact against *itself*, or there was no check at all.

| | What | Why nothing saw it | Fixed by |
|---|---|---|---|
| **2** | **40 stale figures.** `cue_cards` was changed in the A2.2 commit so its card title fits instead of overflowing at a fixed 34 px. The figures were never re-rendered, so slots 21 and 33 of all twenty units sat in the repository drawn by the old code. | `G23` hashes each PNG against the hash in its **own sidecar**, so it proves the file has not been corrupted since it was written. It cannot see a code change that was never rendered. | new check **`G32`**: compare the SVG on disk with the SVG the current content module and figure code produce |
| **3** | **A truncated ledger.** `ledgers/grammar.yaml` used unquoted YAML flow values, so eight of twenty `point` strings and two of twenty `topic` strings were silently cut at their first comma. Unit 19's topic read *People*; Unit 20's read *News*. `build_covers` had been printing the cut-off grammar list on the back cover of **both volumes**. | Nothing compared the ledger against anything. | every value quoted; both covers rebuilt |
| **4** | **Sixty-one truncated figures, in the shipped books.** `grammar_contrast` called `fit_lines` and drew only `ll[0]`, so a label one word too long printed as half a label — A2 Unit 17's figure read *“This book was made by”*. Fixing that one exposed a pattern: a grep found ten more call sites with the same shape, and instrumenting `fit_lines` found that **five jobs across 61 of A2's 820 figures were printing a label short**. `decision_fork` cut its question in **every unit of both volumes**; `sort_bins` dropped a chip's second line in eleven; `grammar_contrast` in four; `timeline`, `talk_shape` and `error_pairs` in the rest. Several also overflowed their own cards, because the layout was sized for the shortest plausible text. | `G13` and `G14` measure the glyphs that **are** drawn; `G22` reads the contrast the metadata claims. A line that was never drawn has neither glyphs nor metadata. | all six jobs now draw every line and size the element to hold it. New check **`G33`**: `figures.Fitted` records which lines the caller read, and the check builds every figure and fails on any that dropped one — the class, not the instances. |
| **5** | **`build_book` deleting the answer key.** The book build removes any older file sharing the volume's `EFDL-<level>.<vol>-<Title>-` prefix, so that a rename does not leave the previous unit span behind. The answer key carries the same prefix, so building the book deleted it. A2 never noticed because `build_keys` always happened to run second; building the book and then looking for the key loses the file. | Nothing checks `build/` for a file that should be there and is not. | exclude `AnswerKey` from the sweep |
| **6** | **The coverage law skipping at B1.** `G29` guarded itself with `per_unit != dense_per_unit`, which is A2's phase-5 transition mechanism. B1 has no transition — every unit is dense from Unit 1 — so it declares no `dense_per_unit`, and the one check that enforces "a figure in every sub-section" skipped silently at the level that most needed it. | A skip is not a failure. | gate on the layout the unit is measured against, not on the transition flag |

**What they have in common is worth more than any of them.** Four were checks
comparing something to itself: a PNG to its own sidecar, a
drawn glyph to its own metadata, a check to its own skip condition. The fifth,
the shuffling defect, was a set of tasks that were individually *correct*. None
of them was a hard failure anywhere.

That is the shape of defect this suite is worst at, and the three new checks
that close it — `G32`, `K20` and `G33` — are the first in it that compare an
artefact with something other than itself: the SVG with the code that should
have drawn it, A2's figures with the shared toolchain, and what a figure drew
with what it was given to draw.

**And it is worth saying how much of A2 this moved.** 44 closed tasks
re-ordered, 40 stale figures re-rendered, 61 truncated figures redrawn, both
back covers corrected, both books and both answer keys rebuilt. None of it
changes a word of the course. All of it changes what a learner sees.

### 8d · The no-regression register for B1

Everything here is at its current value when B1 finishes, and each is already
enforced. Named so that "no regression" is checkable rather than asserted:

**A2 itself** — both volumes 238/238 green, 221/221 mutations caught, every figure
byte-identical, both books' content hashes unchanged. This is `K20` and it is the
first gate in §10, not the last.

**Structure** — 42 sub-sections, 110 bold headings, 11 parts in the golden order, 5
audio tracks, the CORE/PLUS split, the four declared plain sub-sections.

**Devices** — every count in §3.1, `K05` green.

**Figures** — 41 a unit, the 41-slot layout, the placement law, the whole-pixel
invariant, the full-page mechanics, `G01`–`G31` green, the coverage law in both
directions.

**Exercises and key** — 60 closed items a unit, MCQ balance, unique-fit gaps, every
open task with marking points and a sample answer.

**Palette** — the closed 12 colours, `G09` at 1.5%, `I02` on covers.

**Determinism** — `J11` and `G23`: two runs, identical hash; re-rendering is
byte-identical. This constrains every new figure job: no time, no randomness, no
dict-ordering dependence.

---

## 9 · The toolchain — one copy, shared by symlink · **rewritten in v2**

**v1 planned to move it. v2 does not have to, and that removes a whole day and the
only real risk in Phase 0.**

`tools/` is 10,189 lines and lives in `A2/`. B1 needs it, and a second copy is a
second standard — the definition of drift. v1's answer was to promote it to
`general-english/tools/`, rewrite every path, and then prove A2 byte-identical
afterwards. That is a day of work and a real risk, gated by six steps.

**The audit found that none of it is necessary.** Every module in the toolchain
resolves its own root the same way:

```python
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
```

`os.path.abspath` does **not** resolve symlinks, and `__file__` keeps the path the
import actually used. So:

```
B1/tools  ->  ../A2/tools        (one symlink)
```

makes `python3 -c "import figures"` from inside `B1/` report

```
figures.ROOT = /home/user/Animated-Courses/docs/general-english/B1
```

— **verified, not assumed.** One copy of the source, two roots, **zero lines of path
code changed**, and A2 byte-identical *by construction* rather than by gate, because
nothing moved.

**What does still need changing — 30 lines, not 10,189.** The audit grepped every
hardcoded book code in the toolchain. All but five are function defaults
(`def build(book='a21')`) and are irrelevant. The five that are real data:

| File | What | Change |
|---|---|---|
| `build_book.py:17` | `VOL = {'a21': …, 'a22': …}` volume number and title | add `b11`, `b12` |
| `build_covers.py:14,23` | per-volume cover metadata and back-cover blurb | add `b11`, `b12` |
| `checks/family_i.py:120` | `other = 'a22' if ctx.book == 'a21' else 'a21'` — the sibling-volume lookup | generalise to a `SIBLING` map |
| `renumber_figures.py:32` | `for book in ('a21','a22')` | take the books from the spec |
| `mutations.py:17` | `FIXTURE_BOOK = 'a21'` | already per-level by design; B1 gets its own fixture book |

**The gate is now one step, not six.** After the symlink and those five edits:
re-render all 820 A2 figures and rebuild both volumes → **every hash identical**, both
A2 suites green, mutation suite green. If any hash moves, one of the five edits was
wrong; the symlink itself cannot move a hash, because A2's `ROOT` is still `A2/`.

**What stays per level:** `spec/`, `ledgers/`, `content/`, `units/`, `keys/`,
`figures/`, `covers/`, `reports/`, `release/` — all of which B1 already has, created
during the audit. **What is shared:** `tools/` and the check families, as one copy.
**What is per level inside a shared file:** the mutation fixtures, anchored to literal
strings from one book, so B1 needs its own set — `FIXTURE_BOOK` exists for exactly
this reason.

`K20` is still added, and still asserts A2 byte-identical output from the shared
toolchain. The reasoning above says it should never fail; the check is there because
"should never" is not a measurement.

---

## 10 · Phases and gates — **revised in v2**

Each phase ends green or the next does not start. Phase 0 shrank (§9) and gained the
A2 shuffling repair (§8e), which must land before any B1 content exists — otherwise
B1 Unit 1 would be written against a suite that does not yet have `C29`/`C30`.

| Phase | What | Gate |
|---|---|---|
| **0a** | **Fix the A2 shuffling defect (§8e).** Add `C29`, `C30` and their two mutation fixtures. Permute the matching tasks and word banks, rewrite the affected keys, regenerate the affected figures. | Both A2 volumes green, every unaffected figure byte-identical. **Met** — 7 matching tasks and 42 word banks repaired. |
| **0b** | **Share the toolchain (§9).** One symlink, five data edits. | 820 A2 figure hashes identical, 2 book hashes identical, 240×2 checks green. `K20` added. |
| **1** | The B1 spec. Derive both wordlists from the CEFR-J CSV. Grammar ledger from the B1 profile, **every one of the 84 rows carrying a `taught`/`recycled` disposition (§4a)**. Cast ledger seeded from A2's final state, ages +2. The twenty countries. `golden.yaml` with §3.3's forecast envelopes, hash-locked. | The spec loads, the hash locks, `K01` and `K21` green. Wordlist derivation reproduces A2's shipped list at ≥ 99%. |
| **2** | The checks. 13 spec changes, 10 remaining new checks, the fixtures. **Calibrate the three floors against the twenty A2 units.** | **263** checks registered (251 at v2, plus family M and `G34`/`G35` at v3); `L01` proves every A2 unit fails all three floors; A2's mutation suite **230/230** and B1's own **16/16**. |
| **3** | Covers and front matter for both volumes. | `I01`–`I12` green on four covers. |
| **4** | **Unit 1, end to end — the calibration and review gate.** Markdown, key, 41 figures, build, both suites. Then **measure it** and replace every forecast in §3.3, `H21` and `J15` with the measured value. | **263/263** on Unit 1, at the second attempt: the first was green at 251 and was rejected for having one subject, which is what family M now exists to prevent. The spec's forecasts are gone, replaced by numbers. **I stop here and show you one finished unit before building nineteen more.** |
| **5** | Units 2–10. Build B1.1. | 263/263 on the volume; page and size envelopes hold; family M green on every unit. |
| **6** | Units 11–20. Build B1.2. | Same, plus `F19` (no glossary collision with A2) and `K19` (A2 spine recycled). |
| **7** | Release. Both books, both keys, twenty single units, covers, reports, `DOWNLOADS.md`, every link verified by download. | Both volumes 263/263, mutations 230/230 + 16/16, **A2 still 263/263**. |

**The per-unit loop**, unchanged from the one that built A2's last nineteen units:

```
figure_source.py b11 7 --decide     # the seven slots needing a decision
write units/b11-u07.md + keys/      # the unit and its answer key
gen_figures.py  b11 7 --write       # 20 of 27 slots, verbatim from the unit
gen_figures.py  b11 7 --captions    # all 27 captions
fix_slots.patch(...)                # the seven judgement slots
preflight_figures.py b11 7          # seconds, not minutes
build_figures / build_docx / runner # render, build, check
```

---

## 11 · Page and size — **measured at the Phase 4 gate, 2026-10-09**

Unit 1 is built, so these are no longer forecasts. Two of them were wrong, in
opposite directions, and both corrections are instructive.

| | A2 measured | B1 v2 forecast | **B1 measured** | What the gap was |
|---|---|---|---|---|
| Prose words a unit | 5,016 | 6,201 | **7,598** (1.51×) | the forecast held the APPARATUS at A2's length (§3.3) |
| Words a unit incl. captions | 5,554 | 6,740 | **8,149** | as above; captions 551, exactly as planned |
| **Pages a unit** | 37.2 | 42–43 | **37** | 41 figures set the page count almost on their own |
| Pages, bound answer key | — | — | **15** a unit | measured |
| Pages, covers + front matter | — | — | **4** | measured on the one-unit volume |
| Pages a volume | 492 / 502 | ~565 | **~524** derived | 10 × 37 + 10 × 15 + 4 |
| Unit DOCX | — | — | **1.9 MB** | 41 figures |
| Unit PDF | — | — | **2.1 MB** | |
| Volume DOCX | 17.4 / 17.6 MB | ~18 MB | **~19 MB** forecast | 2.3 MB at one unit, scaling the figure payload |

**The page forecast was wrong in the safe direction, and the reason is worth
keeping.** B1 carries half again as much prose as A2, and the page count does
not move at all: A2 measures 37.2 pages a unit and B1 measures 37. At 41
figures a unit the figures set the page count almost on their own, and the
extra text fills white space that was already sitting between them. That also
means the next lever on page count is the figure layout, not the word budget.

`spec/typography.yaml` now carries `pages_per_unit: 34–44` — the measurement
plus 18% either way, narrowed from the forecast 36–50 — and
`pages_per_volume: 440–600`, derived from the two measurements rather than
guessed. Both narrow again when Units 2–10 exist.

**One thing worth saying plainly:** `release/` already holds 150 MB for A2 and
B1 roughly doubles it. GitHub Releases remain the right answer and are still
not reachable from this session's tool set. If repository size matters to you,
the lever is to ship PDFs only in `release/` and leave DOCX to the build —
that halves it. Your call; the default is to match A2 exactly.

---

## 12 · Risk register

| Risk | Likelihood | Impact | What stops it |
|---|---|---|---|
| **Writing A2 and calling it B1** | **High** without the floors | The whole premise | `E27`/`E28`/`E29`, calibrated so every A2 unit fails them, and `L01` which checks that calibration |
| Drifting up into B2 | Medium | Level failure the other way | `E02` + `E26` + `E30` against the B2 list; `E04`/`E22` ceilings |
| The toolchain move regresses A2 | Medium | A green course goes red | §9's byte-identity gate, then `K20` for ever |
| The §3.3 forecast is wrong | **Certain to some degree** | Budgets reject every unit, or admit anything | Phase 4 exists only to replace it with a measurement |
| Cast contradiction across levels | Medium | Continuity failure nothing catches today | `F04` reads both ledgers; `ages_also` carries A2's ages |
| Glossary collision with A2 | Medium | 400 words, some taught twice | `F19`, reading across levels |
| A2's spine re-taught as new | Medium | B1 that is A2 revision | `K19` |
| **A B1 marker firing on an A2 form** | **High** | `E06` red on every unit, or silently blind | Eight of the twenty B1 points extend an A2 point (§4). Every marker matches the extension, not the family; `grammar.yaml` records which A2 point each one extends and the exempt list is seeded with every A2 form |
| The four new figure jobs break determinism | Low | `G23`/`J11` red | No time, no randomness, no dict order — stated in the job contract |
| Build time | Medium | Lost hours | LibreOffice already raised to 2700 s; never two `build_book` runs on one volume |
| 41 figures reads as wallpaper at B1 | Low | Pedagogical regression | Every slot has a stated job; the four plain sub-sections stay plain; Phase 4 is the cheap place to find out |

---

## 13 · Acceptance criteria

B1 is done when, and only when:

1. Both volumes: **263 of 263 checks green**, zero failures, every adjudication gate
   answered.
2. Mutation suite: **A2's 229 of 229 caught and B1's 4 of 4**, 0 escaped, 0 broken.
3. **A2 still green and byte-identical** — `K20` green — at its new total of
   **263/263**, i.e. including `C29`, `C30` and `G32` (§8e, §8f), and including
   family M and `G34`/`G35` on every B1 unit (§4c, §6a).
4. Every unit: 41 figures, 42 sub-sections, 110 bold headings, 60 closed items, 10
   glossary words, 5 audio tracks, 5 writing tasks.
5. Every unit clears all three level floors and all five ceilings.
6. **No matching key on the diagonal and no word bank in answer order** — `C29`,
   `C30` — in either level.
7. All **29 CEFR-J B1 grammar families** present in `ledgers/grammar.yaml` with a
   disposition — `K21` (§4a).
8. No B1 glossary word in any A2 glossary; no Part 8 country used twice across either
   level; every A2 grammar point recycled in ≥ 3 Spiral Reviews and none re-taught.
9. Both books build deterministically, land inside the measured page and size
   envelopes, and every download link resolves — verified by downloading it, not by
   reading it.
10. `00-MASTER-PLAN.md`, `RESUME.md` and the visual plan record every number that
    moved and the measurement that moved it.

---

## 14 · Effort, honestly

| Phase | Work |
|---|---|
| 0a A2 shuffling repair | half a day — two checks, 44 deterministic permutations, the affected keys and figures regenerated |
| 0b Share the toolchain | **an hour**, not v1's day: one symlink and five data edits (§9) |
| 1 Spec and ledgers | half a day, mostly derivation and seeding |
| 2 Checks | half a day; the floor calibration is the interesting part |
| 3 Covers | an hour — the cover code exists |
| 4 Unit 1 | the review gate; a unit plus the measurement pass |
| 5–6 Units 2–20 | the bulk. A2's last nineteen ran about forty minutes each end to end, most of it build time; B1 is comparable because the figure pipeline already exists, though every text is now 1.24× longer |
| 7 Release | an hour |

The honest summary: **the content is the work, and the tooling that made A2's content
safe is already built.** The audit's net effect on effort is roughly neutral — §9
gave back a day, §8e spent half of one.

---

## 15 · The audit, question by question

This section exists because the eight questions deserve a direct answer in one place,
not a cross-reference. Three came back clean.

**1 · How many volumes, how many units each?**
**Two volumes, ten units each, twenty in total** — identical to A2. B1.1 *Looking
Back* is Units 1–10; B1.2 *Making Yourself Clear* is Units 11–20. The reason is not
symmetry: ten units of 42 sub-sections and 41 figures is, on Unit 1's measurement,
about 524 pages and ~19 MB of DOCX, which is already at the limit of what binds and
opens comfortably. Eleven would not. ✅ **clean**

**2 · Does the plan have the same level of extensive visuals?**
Yes, to the figure: **41 a unit, 820 a course**, the same 41-slot layout, the same
four sub-sections declared plain, the same full-page unit opener, the same full-page
front and back covers, the same placement law and the same closed 12-colour palette.
The 30 existing figure jobs and 165 icons carry over; B1 adds **four jobs** for four
shapes nothing existing draws, and a forecast 45–65 icons for work, money, study,
media, services and officialdom. The visual system was the expensive part of A2 and it
is already built and already proved on 820 figures. ✅ **clean**

**3 · Are questions that need shuffling marked for shuffling?**
**No — and this is the audit's most important finding, because A2 shipped with it.**
`C18` guards ordering tasks only. Of A2's 140 matching tasks, **4 print Column B in
exactly Column A's order** and **7 have three or more answers on the diagonal**. Of 60
word-bank gap-fills, **27 print the bank in answer order** and **37 give the first
answer away as the first bank word**. 44 tasks are answerable without reading them,
and every one passes all 238 existing checks, because they are *correct* — just free.
v2 adds `C29` and `C30`, and **Phase 0a repairs A2 before a word of B1 is written**.
Full numbers and the repair mechanism: §8e. ❌ **defect — fixed**

**4 · Are the reading, listening and writing lengths appropriate for B1?**
**Three of five were; two were badly short.** v1's writing models at 90–120 words are
right — Cambridge B1 Preliminary sets both tasks at about 100. v1's readings at 250
were at the low end of right. But v1 put **all three listening scripts at 110 words**,
against a published B1 monologue of about 300 words of script — and against A2's own
7B script, which already runs 104. A 110-word "B1" script would have been one word
longer than A2's longest. The Global Story and Close to Home at 240 were short for the
same reason: nobody had measured A2's, which are 135 and 133. v2 measured every
continuous text in all twenty A2 units (§2c) and reset the targets from them:
listening **200 / 150 / 220**, readings **300 / 220**, Global Story **300**, Close to
Home **280**, writing models **105 / 100 / 100 / 90**. Unit 1 came in on every one of
them: 209 / 166 / 196, 300 / 247, 300, 266, 108 / 103 / 107 / 90. The longest text in
a B1 unit goes from A2's measured 152 words to **300** — 1.97× on the single thing
that most decides how a level *feels*. ❌ **two targets wrong — corrected and then
hit (§3.3, §11)**

**5 · Are the topics current, interesting and engaging?**
v1's were not, and the reason is diagnosable: **every topic was named after its
grammar.** *"Comparing and Choosing Again"* is a syllabus label. All twenty are
retitled to a situation an adult is actually in — a power cut, a waiting list, the
rent, a windfall, the flat they didn't take, something in the garden, the reviews they
didn't read, learning at forty, where it was made, a week off the phone, too many
people, nothing like the picture, the name on the bridge, what the group chat said,
asking the council, fixing it ourselves, somebody ought to say something, putting a
case. The grammar order is untouched, because it was sound. §4. ⚠️ **weak —
rewritten**

**6 · Is B1 comprehensive?**
v1 was not, by a measurable amount. The CEFR-J B1 Grammar Profile has **84 rows in 29
shorthand families**; v1's syllabus named 23. **Six families — 13 rows — had no home
anywhere in the plan**: `INTF` (six functional questions), `EXCL`, `IMP`, `VP`, `DT`,
`PPOS`. v2 places all six, and distinguishes the two cases honestly: `INTF` and `EXCL`
are **taught as new**, because polite indirect requests and exclamatives are real B1
work; `VP`, `IMP`, `DT` and `PPOS` are **recycled and named, not taught**, because
imperatives and *these/those* are A1 forms the profile places at B1.1 on frequency,
and drilling them at B1 would be precisely the regression you asked me to prevent.
Coverage is now **29 of 29 families, 84 of 84 rows**, and `K21` reads the profile CSV
directly so the audit cannot rot. §4a. ❌ **6 gaps — closed**

**7 · Does B1 flow internally and from A2?**
Sound, but v1 asserted it where it should have named it. §4b now states three spines
explicitly: the **grammar spine** (Book 1 is one widening arc of displacement from the
present — one step back, a step back still going, a step behind that, the habitual
past, forward, then unreal present, unreal past, inference, inference about the past,
ability across all of it; Book 2 is saying and joining), the **A2 spine recycled**
(`K19`, now with a marker test: no *Grammar Focus Box* may introduce an A2 point), and
the **cast and place spine** (the same six people (and A2’s twenty walk-ons), two years on, same street,
`F01`–`F11` enforcing it). Eight of the twenty B1 points *extend* an A2 point rather
than introduce one, which makes `E06` subtler at B1 than at A2 — the markers must
match the extension, not the family. ⚠️ **sound — made checkable**

**8 · Does it follow the same structure as the previous one?**
Yes, and this is the strictest answer in the audit, because it is not a judgement:
**Warm Up + Parts 1–10 in the golden order · 42 sub-sections in the shape 3·7·7·3·4·3·
4·5·2·1·3 · 110 bold headings · 5 audio tracks at N.1 / N.2–N.4 / N.5 · `[CORE]`
Warm-Up + Parts 1–6 · `[PLUS]` Parts 7–10 · Part 10 `[CORE + PLUS]`**, plus every
device count in §3.1 to the number — 14 seeded `0.`, 7 "is not needed", 7 *Model*, 5
*Before you read*, and the rest. All of it is already enforced by checks B1 inherits
unchanged, so structural parity is not a promise in this plan, it is a gate. ✅
**clean**

---

## 16 · Where Unit 1 actually landed

Built, rejected, rebuilt whole, measured, green. The v2 row is kept beside the
v3 row wherever the number moved, because the size of the correction is the
point of this section.

| | v2 — *The Night the Power Went Out* | v3 — *The Afternoon Everything Happened at Once* |
|---|---|---|
| Checks | 251 of 251, 0 FAIL | **263 of 263, 0 FAIL**, 13 gates answered, 2 skips |
| Mutations | 4 of 4 | **16 of 16 caught**, 0 escaped, 0 broken |
| Distinct situations | **2** | **9** |
| Largest share one situation takes | **37 of 42 sub-sections (88%)** | **6 of 42 (14%)**; 19% of all attributions |
| Distinct settings | 2 | **9** |
| Icons that restate their own label | 15 of 78 (19%) | **0 of 83** |
| Contrast figures drawing the same glyph on both sides | 1 of 1 | **0 of 2** |
| Prose words | 7,598 | 7,874 |
| Figure captions | 551 words | 547 — inside the 480–625 allowance |
| Figures | 41 | 41, all rendered, preflight clean |
| Pages | 37 unit / 15 key / 56 volume | 37 unit / 16 key / 57 volume |
| Mean sentence | 15.5 | **14.8** — inside the 12.4–16.3 corridor |
| Flesch–Kincaid | 6.61 | **5.99** — inside the 5.5–7.0 corridor |
| B1-tier share | 3.24% | **2.75%**, above the 2.2% floor |
| Off-band words unglossed · glossary shared with A2 | 0 · 0 | 0 · 0 |

**Two skips, and both are honest.** `J15` and `J17` are per-*volume* envelopes and
cannot be measured against one unit of ten, so they report what they see and stand
down. (`G29` skipped in the very first run; that was the §8f defect, and it has run
and passed ever since.)

**The two numbers I would watch, and one of them nearly shipped wrong.** The
mean-sentence corridor is arithmetic, not taste:
`FK = 0.39 × mean + 11.8 × syllables − 15.59`, so at Unit 1's 1.35 syllables a word
the ceilings and floors together admit a mean between **12.4 and 16.3 words**. The
first rebuild landed at a 13.5-word mean and **FK 5.55** — passing, with five
hundredths of margin above a floor of 5.5, which is a unit one editorial tidy-up
away from turning the book red. Eighteen sentence joins took it to 14.8 and 5.99.
Margin is part of being green; a check that passes by 0.05 has not really been
satisfied, and `RESUME.md` says so where Unit 2 will be written.

**What the rebuild cost, for estimating Unit 2.** The unit's markdown, its key, its
41 figure definitions and 4 of its icons were written again from nothing; the
toolchain, the spec and the shell were untouched. Twelve new checks, two new glyphs,
48 new icon-map entries, one new ledger and one new mutation kind. A2 was not
reopened and both its volumes are still green at 263.

---

## 17 · What I need from you

**Phase 0 and Phase 4 are done, so the only thing waiting is your read of Unit
1.** Everything below Unit 1 — the spec, the ledgers, the checks, the covers,
the toolchain — is built and green, and A2 is rebuilt and green with six
defects out of it. Units 2–10 are the next commitment, and these five want an
answer before I make it:

1. **Read Unit 1 again.** `B1/DOWNLOADS.md` has one-click links. The checks can
   now tell you it carries nine situations in nine settings, that no one of them
   takes more than a seventh of the unit, and that every picture shows something
   its caption does not. They cannot tell you whether the nine are *interesting*,
   which is the one judgement left entirely with you — and it is the judgement
   that sent the last version back.
2. **Do you have a B1 coursebook to measure?** (§1.) If yes, drop it in
   `B1/source/` and §3's numbers are replaced by that book's. If no, Route B
   stands — and Unit 1 has now replaced the three forecasts that mattered.
3. **The twenty themes in §4** are the thing to read next, and the thing that is
   cheap now and expensive after Unit 10. Each row names the six or seven
   situations that unit will carry; `ledgers/situations.yaml` has them in full.
   Strike any theme you do not want and I will replace it before Unit 2. Volume
   titles (*Looking Back*, *Making Yourself Clear*) and the twenty countries are
   unchanged from v2 and equally cheap to change.
4. **`release/` size** — match A2 exactly (+150 MB), or PDFs only (+75 MB)?
   A2's `release/` is already 150 MB and B1's will be comparable.
5. **The two numbers that most decide how B1 feels**: the 32-word sentence cap
   and the 7.0 reading-grade ceiling (§3.2). Unit 1 sits at a 14.8-word mean
   and FK 5.99, so there is room in both directions, and moving either one
   moves every unit after it.
6. **A2's 332 unlicensed icons** (§6a). The depiction law applies forward and A2
   is not retrofitted. Say the word and I will work `G34`'s list back through
   A2's 820 figures; it is about a day, and it would touch two books that are
   currently green.

Silence on 3–5 means I proceed as written; silence on 2 means Route B.
