# English for Daily Life · B1 — Master Production Plan

**Two student books, twenty units, full B1. The same architecture, the same visual
density and the same 238-check discipline that A2 shipped with — raised to B1 on
numbers measured from a real CEFR dataset, not from memory.**

Approve this and I build it. Every number in §3 and §4 either (a) was measured out of
the twenty A2 units that already exist, (b) was measured out of the CEFR-J
Vocabulary and Grammar Profiles, which I downloaded and counted while writing this,
or (c) is a forecast — and every forecast is labelled as one, with the measurement
that will replace it named in §10.

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

### 2c · Published B1 task lengths

Cambridge B1 Preliminary sets both writing tasks at **about 100 words**, against A2
Key's 25–35. That is the one external length figure I will use directly, and it is
the figure behind the model-answer change in §3.3. Reading-text lengths in that exam
are gap-fill tasks of 100–150 words and are a poor model for a coursebook reading, so
they are not used; §3.3 derives reading length from the A2 measurement instead.

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

### 3.3 · The word budget, derived part by part

Not a blanket multiplier. Each part's target moves by the length of the specific
thing inside it that B1 changes, and nothing else moves at all.

| Part | A2 mean | What drives the change | B1 target | Δ |
|---|---|---|---|---|
| Warm Up | 302 | items lengthen slightly; shape identical | 330 | +28 |
| Part 1 Vocabulary | 620 | 7 subs unchanged; longer gloss, longer pronunciation section | 680 | +60 |
| Part 2 Grammar | 468 | B1 points need a longer Notice text and a two-way contrast | 560 | +92 |
| Part 3 Listening | 479 | 3 scripts, 70 → 110 words each | 600 | +121 |
| Part 4 Speaking | 329 | longer prompts and role cards | 380 | +51 |
| Part 5 Reading | 564 | **two readings, 130 → 250 each** | 820 | +256 |
| Part 6 Writing | 461 | 4 model answers, 58 → 100 each | 630 | +169 |
| Part 7 Real-World File | 517 | 7B script 70 → 110, 7E model 58 → 100 | 600 | +83 |
| Part 8 Global Story | 333 | story 134 → 240 | 440 | +107 |
| Part 9 Close to Home | 328 | reading 133 → 240 | 435 | +107 |
| Part 10 Review | 203 | same shape, fuller glossary gloss | 225 | +22 |
| **Prose total** | **5,016** | | **5,700** | **+684** |

Captions stay at 538 (41 figures, same caption allowance), so a B1 unit totals
**≈ 6,240 words** against A2's 5,555 — a lift of **1.12×**, against a vocabulary band
that widened 1.92×. That asymmetry is deliberate: B1 is mostly *harder* text, not
much *more* text.

**Every number in that table is a forecast.** Phase 4 builds Unit 1, measures it, and
writes the measured value into `spec/golden.yaml` with the measurement beside it —
exactly as A2's page envelope was raised three times, each time from a number rather
than a guess.

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

## 4 · The syllabus — twenty units

Grammar from the CEFR-J B1 Grammar Profile; the code in the last column is the item
the unit teaches. No point repeats any of A2's twenty. No country repeats any of
A2's twenty.

### Book 1 — *Looking Back* (the past behind the past, and what might have been)

| U | Grammar | Topic | Part 8 | CEFR-J |
|---|---|---|---|---|
| 1 | Past continuous vs past simple — *while / when* | Interruptions and Accidents | Argentina | `TA.PASTPRG` (A2 item A2 never taught — declared bridge) |
| 2 | Present perfect continuous — *how long, for, since* | Work and How Long | Finland | `TA.PRPFPRG` |
| 3 | Past perfect — *by the time, before, after* | Explaining What Went Wrong | Nepal | `TA.PASTPF` |
| 4 | *used to* / *would* for past habit | How the Street Used to Be | Tunisia | `MD.used_to` |
| 5 | Future forms contrasted + future continuous | Plans, Predictions and Timetables | Australia | `TA.FUT`, `TA.FUTPRG` |
| 6 | Second conditional | Money and What If | Colombia | `SUBJ.PAST` |
| 7 | Third conditional | Looking Back at a Decision | Estonia | `SUBJ.PASTPF` |
| 8 | Modals of deduction — *must / might / may / can't be* | Working Things Out | Philippines | `MD.must`, `MD.might`, `MD.may` |
| 9 | *should have / ought to / had better* | Regret, and Advice After the Fact | Chile | `MD.MD_PF`, `MD.ought_to` |
| 10 | *be able to / manage to* | Skills and Getting Things Done | Senegal | `MD.be_able_to` |

### Book 2 — *Making Yourself Clear* (saying, joining, explaining)

| U | Grammar | Topic | Part 8 | CEFR-J |
|---|---|---|---|---|
| 11 | Passive extended — perfect, future, modal, *get + pp* | Supply and Services | Bangladesh | `PASS.MD`, `PASS.get_VN`, `PASS.IO` |
| 12 | Gerunds and infinitives — *verb + -ing* vs *verb + to*, *not to do* | Habits, Choices and Giving Up | Denmark | `TO.not_to_do`, `VG.P`, `VN.P` |
| 13 | *too … to* / *so … that* | Crowds, Queues and Too Much | Thailand | `RBDEG.too_to`, `RBDEG.so_JJ` |
| 14 | Comparison refined — *not as … as*, intensified, *-er and -er* | Comparing and Choosing Again | Jamaica | `COMP.EQ`, `COMP.even_JJR`, `COMP.and` |
| 15 | Non-defining relatives + *where / when / whose* | People and Their Histories | Italy | `PREL.NR`, `RBREL.NR`, `RBREL.NOANT` |
| 16 | Reported speech in full — backshift, reported questions and commands | News, Rumour and Getting It Right | Rwanda | `INDSP.tell`, `INDQ.ask`, `CAUS.ask` |
| 17 | Indirect questions and question tags | Asking in Difficult Places | Turkey | `CL.WH.OBJ`, `TO.WH_to_do`, `TAG` |
| 18 | Reflexives, *each other*, *-thing / -body* compounds, *others* | Doing It Yourself, and Together | Uruguay | `PREFL`, `PREF.each_other`, `NN.thing_JJ`, `P.others` |
| 19 | *it + be + adj + to-infinitive*; *there + modal + be* | Problems Worth Raising | Sri Lanka | `PP.it_to_do`, `EX.there.MD` |
| 20 | Adverbs of attitude and discourse linkers | Putting a Case | Croatia | `RB.ATT` |

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

**The A2 spine is recycled, not re-taught.** A new check (`K19`, §8) asserts that
every one of A2's twenty points appears by name in at least three B1 Spiral Reviews,
and that no B1 unit presents one as new.

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

## 8 · The checks — 238 inherited, 13 changed, 9 new

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

### 8c · New — 9, taking the suite to 247

| New | Family | What it enforces | Why it must exist |
|---|---|---|---|
| `E27` | Language | ≥ **6%** of running words B1-tier and not A2-reachable | The level floor. Every A2 ceiling passes a text written entirely in A2 words. A2 measures 0.5%. |
| `E28` | Language | mean sentence ≥ **12.0** words | Same reason. A2 measures 10.0, max 10.94. |
| `E29` | Language | Flesch–Kincaid ≥ **5.5** | Same reason. A2 measures 3.8, max 4.61 — and A2's own ceiling is 5.0. |
| `E30` | Language | every B2-and-above word used is glossed in its own unit | `E26` says it must be glossable; this says it was actually glossed. |
| `F19` | Content | no B1 glossary word appears in any **A2** glossary | 400 glossary words across two levels, none repeated. Needs to read across levels, which nothing currently does. |
| `K19` | Regression | every A2 grammar point is named in ≥ 3 B1 Spiral Reviews, and none is presented as new | The A2 spine is recycled, not re-taught. |
| `K20` | Regression | the shared toolchain produces byte-identical A2 output | The gate in §9. Fails the moment a B1 change touches A2. |
| `G31` | Figures | the four new jobs draw what their slot's spec says | Matches `G19`–`G21`, which do this for `label_me`, `category_set` and `process_strip`. |
| `L01` | Level | the three floors were calibrated against A2 and **every A2 unit fails them** | A floor nothing fails is not a floor. This is the check that checks the checks. |

Each of the nine gets a mutation fixture, so the mutation suite goes **221 → 230**,
and `K15` ("every non-gate check has a negative test") holds unchanged.

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

## 9 · The toolchain — one copy, not two

**The decision.** `tools/` is 10,189 lines and currently lives inside `A2/`. B1 needs
it. There are two ways to do that and only one of them survives contact with reality.

| | Copy it into `B1/tools/` | **Promote it to `general-english/tools/`** |
|---|---|---|
| Effort now | an hour | a day |
| Effort later | every fix applied twice, for ever | once |
| Drift | certain | impossible by construction |
| Risk to A2 | none | real, and gated |

This session alone found **fourteen defects** in that toolchain — a silent grey disc
for an unknown icon, `fit_lines` overflowing instead of wrapping, `E21` measuring the
apparatus, a caption stranded on its own page in all twenty units, LibreOffice's
timeout taking a whole build down. Every one of those would have had to be found and
fixed twice. **Promote it.**

**The gate that makes it safe.** The move is not finished until A2 is provably
untouched:

1. Record the SHA-256 of all 820 figure PNGs, both book DOCX files, both answer keys
   and `reports/manifest.json`.
2. Move `tools/` up one level; resolve level from the book code (`a21`/`a22` → A2,
   `b11`/`b12` → B1); every path that was `A2/<x>` becomes `<level>/<x>`.
3. Re-render all 820 A2 figures → **every hash identical** or the move is wrong.
4. Rebuild both A2 volumes → content hashes identical (`J11`).
5. Both A2 suites 238/238, mutation suite 221/221.
6. `K20` added, so this can never silently stop being true.

Only then does Phase 1 start. If step 3 or 4 disagrees by one byte, the move is
reverted and re-done — not patched.

**What stays per level:** `spec/`, `ledgers/`, `content/`, `units/`, `keys/`,
`figures/`, `covers/`, `reports/`, `release/`. **What becomes shared:** `tools/`
and the check families. **What is per level inside a shared file:** the mutation
fixtures, which are anchored to literal strings from one book and therefore need a
B1 set (`FIXTURE_BOOK` already exists for exactly this reason).

---

## 10 · Phases and gates

Each phase ends green or the next does not start. This is A2's proven order, with the
calibration gate moved earlier because B1's envelope is a forecast and A2's was not.

| Phase | What | Gate |
|---|---|---|
| **0** | Promote the toolchain (§9). | A2 byte-identical: 820 figure hashes, 2 book hashes, 238×2 checks, 221 mutations. `K20` added. |
| **1** | The B1 spec. Derive both wordlists from the CEFR-J CSV. Grammar ledger from the B1 profile with the CEFR-J code on every unit. Cast ledger seeded from A2's final state, ages +2. The twenty countries. `golden.yaml` with §3.3's forecast envelopes, hash-locked. | The spec loads, the hash locks, `K01` green. Wordlist derivation reproduces A2's shipped list at ≥ 99%. |
| **2** | The checks. 13 spec changes, 9 new checks, 9 mutation fixtures. **Calibrate the three floors against the twenty A2 units.** | 247 checks registered; `L01` proves every A2 unit fails all three floors; mutation suite 230/230. |
| **3** | Covers and front matter for both volumes. | `I01`–`I12` green on four covers. |
| **4** | **Unit 1, end to end — the calibration and review gate.** Markdown, key, 41 figures, build, both suites. Then **measure it** and replace every forecast in §3.3, `H21` and `J15` with the measured value. | 247/247 on Unit 1. The spec's forecasts are gone, replaced by numbers. **I stop here and show you one finished unit before building nineteen more.** |
| **5** | Units 2–10. Build B1.1. | 247/247 on the volume; page and size envelopes hold. |
| **6** | Units 11–20. Build B1.2. | Same, plus `F19` (no glossary collision with A2) and `K19` (A2 spine recycled). |
| **7** | Release. Both books, both keys, twenty single units, covers, reports, `DOWNLOADS.md`, every link verified by download. | Both volumes 247/247, mutation suite 230/230, A2 still 238/238. |

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

## 11 · Page and size forecast

| | A2 measured | B1 forecast | Basis |
|---|---|---|---|
| Pages a unit | 37.2 | **40–41** | +684 prose words ≈ +2.5 pages at A2's measured density |
| Pages a volume | 492 / 502 | **~535** | ten units plus front matter, covers and the bound key |
| Book DOCX | 17.4 / 17.6 MB | **~18 MB** | same 410 figures a volume, same canvas |
| Book PDF | 20.5 / 20.5 MB | **~21 MB** | same |
| `release/` added | 150 MB (A2, both volumes) | **+150 MB** | four books, four keys, twenty single units |

The envelopes go into the spec as `pages_per_unit: 36–46` and `pages_per_volume:
330–560` — deliberately wide, because they are forecasts — and are **narrowed to the
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

1. Both volumes: **247 of 247 checks green**, zero failures, every adjudication gate
   answered.
2. Mutation suite: **230 of 230 caught, 0 escaped, 0 broken.**
3. **A2 still 238/238 and byte-identical** — `K20` green.
4. Every unit: 41 figures, 42 sub-sections, 110 bold headings, 60 closed items, 10
   glossary words, 5 audio tracks, 5 writing tasks.
5. Every unit clears all three level floors and all five ceilings.
6. No B1 glossary word in any A2 glossary; no Part 8 country used twice across either
   level; every A2 grammar point recycled in ≥ 3 Spiral Reviews and none re-taught.
7. Both books build deterministically, land inside the measured page and size
   envelopes, and every download link resolves — verified by downloading it, not by
   reading it.
8. `00-MASTER-PLAN.md`, `RESUME.md` and the visual plan record every number that
   moved and the measurement that moved it.

---

## 14 · Effort, honestly

| Phase | Work |
|---|---|
| 0 Toolchain | the largest single piece of engineering; it is a day, and it is the day that stops every later fix being done twice |
| 1 Spec and ledgers | half a day, mostly derivation and seeding |
| 2 Checks | half a day; the floor calibration is the interesting part |
| 3 Covers | an hour — the cover code exists |
| 4 Unit 1 | the review gate; a unit plus the measurement pass |
| 5–6 Units 2–20 | the bulk. A2's last nineteen ran about forty minutes each end to end, most of it build time; B1 is comparable because the figure pipeline already exists |
| 7 Release | an hour |

The honest summary: **the content is the work, and the tooling that made A2's content
safe is already built.** That is why this plan is mostly about level and continuity
rather than machinery.

---

## 15 · What I need from you

1. **Do you have a B1 coursebook to measure?** (§1.) If yes, drop it in
   `B1/source/` and Phase 1 measures it; if no, Route B stands and Phase 4 locks the
   numbers.
2. **Volume titles** — *Looking Back* and *Making Yourself Clear*, or your own.
3. **The twenty topics and twenty countries** in §4 — any you want changed.
4. **`release/` size** — match A2 exactly (+150 MB), or PDFs only (+75 MB)?
5. **Anything in §3.2 you want set differently** — particularly the 32-word sentence
   cap and the 7.0 reading-grade ceiling, which are the two numbers that most decide
   how B1 *feels* — and the three floors in §3.4, which decide whether it is B1 at all.

Answer those five and I start at Phase 0. Silence on 2–5 means I proceed as written;
silence on 1 means Route B.
