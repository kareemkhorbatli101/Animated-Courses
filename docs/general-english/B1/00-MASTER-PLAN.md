# English for Daily Life · B1 — Master Production Plan

### Version 2 · audited, corrected, and now carrying a defect found in A2

**Two student books, twenty units, full B1. The same architecture, the same visual
density and the same check discipline that A2 shipped with — raised to B1 on numbers
measured from a real CEFR dataset, not from memory.**

Approve this and I build it. Every number in §3 and §4 either (a) was measured out of
the twenty A2 units that already exist, (b) was measured out of the CEFR-J
Vocabulary and Grammar Profiles, which I downloaded and counted, or (c) is a
forecast — and every forecast is labelled as one, with the measurement that will
replace it named in §10.

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
| 5 | **Passage lengths** | **two of five were too short for B1** | §3.3 revised: listening 110 → 130/150/190, Global Story 240 → 300, Close to Home 240 → 280 |
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

A2 is finished: 20 units, 820 figures, 238 checks green on both volumes, 221 of 221
mutations caught. B1 is the same shell — Warm Up + Parts 1–10, 42 sub-sections, 110
bold headings, 41 figures, 5 audio tracks, CORE/PLUS — filled with B1 content and
measured against a B1 band. **B1.1 — *Looking Back* (Units 1–10)** carries the past
behind the past, what used to be and what might have been; **B1.2 — *Making Yourself
Clear* (Units 11–20)** carries the passive, reporting, joining and explaining. The
grammar spine is drawn from the 69 distinct B1 items in the CEFR-J Grammar Profile;
the vocabulary band widens from 2,356 headwords to **4,530**, a measured 1.92×. The
toolchain is not copied — it is promoted to a shared, level-aware layer, and A2 must
come out of that move byte-identical before a word of B1 is written.

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

**Every number in that table is still a forecast.** Phase 4 builds Unit 1, measures
it, and writes the measured value into `spec/golden.yaml` with the measurement beside
it — exactly as A2's page envelope was raised three times, each time from a number
rather than a guess. `K11`'s per-part tolerance is ±8% at the gate, as it is for A2.

### 3.4 · The floor checks — the one genuinely new idea in this plan

A2's language family has twenty-six checks and every one of them is a **ceiling**:
no sentence over 25 words, no grade above 5.0, no more than 10% off-band. That is
the right shape for A2, where the only failure mode is writing above the level.

**At B1 the dangerous failure is the opposite one, and A2's suite cannot see it.**
A unit written entirely in A2 language passes every ceiling with room to spare. It
would ship as B1 and be A2 with a different cover — the exact drift you asked me to
make impossible.

So B1 adds three floors, and they are the reason I am confident about level:

- **`E27` — B1-tier share.** At least **6%** of running words must be CEFR-J B1-tier
  and *not* reachable as A2 by the project's own `lexis.in_a2` (which also consults the
  2,000 high-frequency list, so this is the strict reading). Measured across the twenty
  A2 units: **0.1%–1.2%, mean 0.5%.** The floor is five times A2's maximum.
- **`E28` — mean sentence floor.** At least **12.0** words. A2 measures 8.73–10.94.
- **`E29` — reading-grade floor.** Flesch–Kincaid at least **5.5**. A2 measures
  3.14–4.61 — and 5.5 is above A2's own *ceiling* of 5.0, so B1 is required to start
  where A2 was forbidden to go. That is the cleanest statement of the level step in
  the whole spec.

**These three numbers are not proposals. They were calibrated against all twenty A2
units while this plan was being written**, and the first two values I tried were
wrong:

| Floor | First tried | A2 max | Result | Corrected to |
|---|---|---|---|---|
| `E27` B1-tier share | 6% | 1.2% | every A2 unit fails, margin 5× | **6%** — kept |
| `E28` mean sentence | 11.0 | 10.943 | every A2 unit fails — **by 0.057 words** | **12.0**, margin 1.06 |
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

## 4 · The syllabus — twenty units — **retitled and completed in v2**

Grammar from the CEFR-J B1 Grammar Profile; the code in the last column is the item
the unit teaches. No point repeats any of A2's twenty. No country repeats any of
A2's twenty.

**What v2 changed.** v1's topic column named each unit after its grammar —
*"Interruptions and Accidents"*, *"Comparing and Choosing Again"*. That is a syllabus
label, not a reason to turn the page. Every title below is now **a specific situation
an adult learner in 2026 is actually in**, and the grammar is what that situation
needs. The grammar order is unchanged, because it was sound.

### Book 1 — *Looking Back* (the past behind the past, and what might have been)

| U | Title | Grammar | Part 8 | CEFR-J |
|---|---|---|---|---|
| 1 | **The Night the Power Went Out** | past continuous vs past simple — *while / when* | Argentina | `TA.PASTPRG` (declared bridge, §4b) |
| 2 | **How Long Have You Been Waiting?** | present perfect continuous — *how long, for, since* | Finland | `TA.PRPFPRG` |
| 3 | **By the Time They Told Us** | past perfect — *by the time, before, after* | Nepal | `TA.PASTPF` |
| 4 | **What the Rent Used to Be** | *used to* / *would* for past habit | Tunisia | `MD.used_to` |
| 5 | **This Time Next Year** | future forms contrasted + future continuous | Australia | `TA.FUT`, `TA.FUTPRG` |
| 6 | **If the Money Came Tomorrow** | second conditional | Colombia | `SUBJ.PAST` |
| 7 | **The Flat They Didn't Take** | third conditional | Estonia | `SUBJ.PASTPF` |
| 8 | **Something in the Garden** | modals of deduction — *must / might / may / can't be* | Philippines | `MD.must`, `MD.might`, `MD.may` |
| 9 | **We Should Have Read the Reviews** | *should have / ought to / had better* | Chile | `MD.MD_PF`, `MD.ought_to` |
| 10 | **Learning Something at Forty** | *be able to / manage to* | Senegal | `MD.be_able_to`, **`IMP.V.NEG`**, **`IMP.do_V`** |

### Book 2 — *Making Yourself Clear* (saying, joining, explaining)

| U | Title | Grammar | Part 8 | CEFR-J |
|---|---|---|---|---|
| 11 | **Where It Was Made, and How It Got Here** | passive extended — perfect, future, modal, *get + pp* | Bangladesh | `PASS.MD`, `PASS.get_VN`, `PASS.IO` |
| 12 | **Giving Up the Phone for a Week** | gerunds and infinitives — *-ing* vs *to*, *not to do* | Denmark | `TO.not_to_do`, `VG.P`, `VN.P`, **`VP.SV.AFF`** |
| 13 | **Too Many People, Too Little Room** | *too … to* / *so … that* | Thailand | `RBDEG.too_to`, `RBDEG.so_JJ`, **`EXCL.how_JJ.RB`** |
| 14 | **Nothing Like the Picture** | comparison refined — *not as … as*, intensified, *-er and -er* | Jamaica | `COMP.EQ`, `COMP.even_JJR`, `COMP.and`, **`DT.these.those_N`**, **`PPOS.mine.etc`** |
| 15 | **The Woman Whose Name Is on the Bridge** | non-defining relatives + *where / when / whose* | Italy | `PREL.NR`, `RBREL.NR`, `RBREL.NOANT` |
| 16 | **What the Group Chat Said** | reported speech in full — backshift, reported questions and commands | Rwanda | `INDSP.tell`, `INDQ.ask`, `CAUS.ask`, **`VP.SVOtoO.AFF`** |
| 17 | **Asking the Council** | indirect questions and question tags | Turkey | `CL.WH.OBJ`, `TO.WH_to_do`, `TAG.AFF`, `TAG.NEG`, **`INTF` ×6** |
| 18 | **Fixing It Ourselves** | reflexives, *each other*, *-thing / -body*, *others* | Uruguay | `PREFL.oneself.etc`, `PREF.each_other`, `NN.thing_JJ`, `P.others` |
| 19 | **Somebody Ought to Say Something** | *it + be + adj + to-infinitive*; *there + modal + be* | Sri Lanka | `PP.it_to_do`, `EX.there.MD` |
| 20 | **Putting a Case, and Being Heard** | adverbs of attitude and discourse linkers | Croatia | `RB.ATT` |

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
3. **The cast and place spine.** The same fourteen people, two years on (§5), on the
   same street. Every unit's Part 9 is on that street; `F01`–`F11` already enforce
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

## 8 · The checks — 238 inherited, 13 changed, 12 new

B1 does not get a new check suite. It gets **the same suite**, because a second suite
is a second standard and that is the definition of drift. 238 checks carry over as
they are. Thirteen read a number that moves. Nine are new.

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

### 8c · New — 12, taking the suite to 250

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

Each of the twelve gets a mutation fixture, so the mutation suite goes **221 → 233**,
and `K15` ("every non-gate check has a negative test") holds unchanged.

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

**Gate.** This lands as one commit with `C29`, `C30` and their two mutation fixtures:
both A2 volumes **240/240 green, 223/223 mutations caught**, every unaffected figure
byte-identical, and the 44 repaired figures re-rendered from the repaired source. If
that gate is not met, B1 does not start.

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
| **0a** | **Fix the A2 shuffling defect (§8e).** Add `C29`, `C30` and their two mutation fixtures. Permute the 7 matching tasks and 37 word banks, rewrite the affected keys, regenerate the affected figures. | Both A2 volumes **240/240**, mutations **223/223**, every unaffected figure byte-identical. |
| **0b** | **Share the toolchain (§9).** One symlink, five data edits. | 820 A2 figure hashes identical, 2 book hashes identical, 240×2 checks green. `K20` added. |
| **1** | The B1 spec. Derive both wordlists from the CEFR-J CSV. Grammar ledger from the B1 profile, **every one of the 84 rows carrying a `taught`/`recycled` disposition (§4a)**. Cast ledger seeded from A2's final state, ages +2. The twenty countries. `golden.yaml` with §3.3's forecast envelopes, hash-locked. | The spec loads, the hash locks, `K01` and `K21` green. Wordlist derivation reproduces A2's shipped list at ≥ 99%. |
| **2** | The checks. 13 spec changes, 10 remaining new checks, 10 mutation fixtures. **Calibrate the three floors against the twenty A2 units.** | **250** checks registered; `L01` proves every A2 unit fails all three floors; mutation suite **233/233**. |
| **3** | Covers and front matter for both volumes. | `I01`–`I12` green on four covers. |
| **4** | **Unit 1, end to end — the calibration and review gate.** Markdown, key, 41 figures, build, both suites. Then **measure it** and replace every forecast in §3.3, `H21` and `J15` with the measured value. | **250/250** on Unit 1. The spec's forecasts are gone, replaced by numbers. **I stop here and show you one finished unit before building nineteen more.** |
| **5** | Units 2–10. Build B1.1. | 250/250 on the volume; page and size envelopes hold. |
| **6** | Units 11–20. Build B1.2. | Same, plus `F19` (no glossary collision with A2) and `K19` (A2 spine recycled). |
| **7** | Release. Both books, both keys, twenty single units, covers, reports, `DOWNLOADS.md`, every link verified by download. | Both volumes 250/250, mutations 233/233, **A2 still 240/240**. |

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

## 11 · Page and size forecast — **revised in v2**

The prose lift is 1.24×, not v1's 1.12× (§3.3), so these move with it.

| | A2 measured | B1 forecast | Basis |
|---|---|---|---|
| Prose words a unit | 5,016 | **6,201** | §3.3 |
| Words a unit incl. captions | 5,554 | **6,740** | +538 captions, unchanged |
| Pages a unit | 37.2 | **42–43** | +1,185 prose words ≈ +4.6 pages at A2's measured density; figure area unchanged |
| Pages a volume | 492 / 502 | **~565** | ten units plus front matter, covers and the bound key |
| Student text, course | 111,000 | **~124,000** | 20 × 6,201 |
| Answer key, course | 62,000 | **~78,000** | marking points scale with 90–120-word writing tasks |
| Printed pages, course | 994 | **~1,130** | both volumes |
| Book DOCX | 17.4 / 17.6 MB | **~18 MB** | same 410 figures a volume, same canvas |
| Book PDF | 20.5 / 20.5 MB | **~21 MB** | same |
| `release/` added | 150 MB (A2, both volumes) | **+150 MB** | four books, four keys, twenty single units |

The envelopes go into the spec as `pages_per_unit: 36–50` and `pages_per_volume:
350–620` — deliberately wide, because they are forecasts — and are **narrowed to the
measurement at the Phase 4 gate.** A2's page envelope was raised three times during
its build, each time from a number; B1's will be narrowed once, from a number.

**One thing worth saying plainly:** `release/` already holds 150 MB and B1 doubles it.
GitHub Releases remain the right answer and are still not reachable from this
session's tool set. If repository size matters to you, the lever is to ship PDFs only
in `release/` and leave DOCX to the build — that halves it. Your call; the default is
to match A2 exactly.

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

1. Both volumes: **250 of 250 checks green**, zero failures, every adjudication gate
   answered.
2. Mutation suite: **233 of 233 caught, 0 escaped, 0 broken.**
3. **A2 still green and byte-identical** — `K20` green — at its new total of
   **240/240**, i.e. including `C29` and `C30` (§8e).
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
symmetry: ten units of 42 sub-sections and 41 figures is 565 pages and ~18 MB of
DOCX, which is already at the limit of what binds and opens comfortably. Eleven would
not. ✅ **clean**

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
Home **280**, writing models **105 / 100 / 100 / 90**. The longest text in a B1 unit
goes from A2's measured 152 words to **300** — 1.97× on the single thing that most
decides how a level *feels*. ❌ **two targets wrong — corrected (§3.3)**

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
the **cast and place spine** (the same fourteen people, two years on, same street,
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

## 16 · What I need from you

Nothing, to start. Phase 0a is unambiguous and is already underway: the A2 defect is
real, measured, and should be fixed whatever you decide about B1. These five still
want an answer before Phase 5 commits nineteen more units:

1. **Do you have a B1 coursebook to measure?** (§1.) If yes, drop it in
   `B1/source/` and Phase 1 measures it; if no, Route B stands and Phase 4 locks the
   numbers.
2. **Volume titles** — *Looking Back* and *Making Yourself Clear*, or your own.
3. **The twenty titles and twenty countries** in §4 — any you want changed.
4. **`release/` size** — match A2 exactly (+150 MB), or PDFs only (+75 MB)?
5. **Anything in §3.2 you want set differently** — particularly the 32-word sentence
   cap and the 7.0 reading-grade ceiling, which are the two numbers that most decide
   how B1 *feels* — and the three floors in §3.4, which decide whether it is B1 at all.

Silence on 2–5 means I proceed as written; silence on 1 means Route B.
