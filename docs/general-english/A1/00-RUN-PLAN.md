# EFDL A1 — Autonomous Run Plan

**For approval before the run starts.** Nothing in this document has been built
yet. It says exactly what one unattended run will produce, which checks run
before and after every exercise and every unit, how the visuals are checked,
and what stops the run rather than being papered over.

Branch: `claude/jolly-johnson-9khdgl`. Target directory: `docs/general-english/A1/`.

---

## 0. Read this part first: two corrections to what I told you earlier

**(a) The A1 plan you approved describes a course that does not belong to your
series.** `english-a1/PLAN.md` (v2, 2,665 lines) invents a standalone course —
seventeen units, its own figure system, its own tool names, its own naming
("Wayfare"). Meanwhile this repository already contains **EFDL — English for
Daily Life**: A2 shipped as two volumes and twenty units, 820 figures, a frozen
spec measured off your own source book, five append-only ledgers, a
3,225-line figure library, and a house style written *after* a failed B1
attempt. Building A1 on a second architecture would give you two courses that
cannot share a page, a palette, a cast or a check.

So the run builds A1 **inside EFDL**: `EFDL-A1.1` and `EFDL-A1.2`, two volumes
of ten units, same shell grammar, same figure law, same ledger discipline,
same release layout. `english-a1/PLAN.md` is **kept and used** — but as
*syllabus and research*, not as architecture. Its syllabus (798 lexical items,
44 grammar points, 16 phonology points, 34 functions), its American Headway
research, its check design and its visual taxonomy all survive intact and are
cited throughout this document. Its directory structure, tool names and unit
numbering do not. This is the only change of substance from what you approved,
and it is a change of plumbing, not of content.

**(b) The most important lesson in this repository is about floors, and it
changes the A1 spec.** B1 was first built against a 269-check suite with
*minimums* — mean sentence ≥ 12 words, reading grade ≥ 5.5, 41 figures, 42
sections. The suite went green and three readers in a row rejected the unit.
From `B1/tools/gate.py`:

> *"Its floors were not a safety net; they were the fault."*

A1 therefore has **ceilings only**. No check in this run can ever be satisfied
by making a sentence longer, a text denser or a unit bigger. Where a number is
a minimum it is a *count of things that must exist* (every exercise has a key;
every part has two figures), never a measure of difficulty.

---

## 1. What the run produces

### 1.1 The two volumes

| | EFDL-A1.1 | EFDL-A1.2 |
|---|---|---|
| Units | 1–10 | 11–20 |
| Working title | *First Words* | *Out and About* |
| New lexical items | ~400 | ~400 |
| Grammar points | 22 | 22 |
| Exercises | 380 | 380 |
| Figures | 220 | 220 |
| Student Book | DOCX + PDF | DOCX + PDF |
| Answer Key | DOCX + PDF | DOCX + PDF |
| Covers | front + back | front + back |

Twenty units, **760 exercises, 440 figures**, four student-facing documents,
four answer-key documents, four covers, plus back matter. Delivered to
`A1/release/` by `tools/make_release.py`, exactly as A2 is.

### 1.2 The four Loops

Four consolidation spreads — after units 5, 10, 15 and 20 — carrying no new
language. They are **spreads, not units**: they do not change the 2 × 10 shape,
they are not counted in the 760, and they are the first thing on the cut list
(§10). Each Loop is 12 exercises and 6 figures recycling only what the
preceding five units taught, and each one is where the cumulative cross-checks
are reported to you as a table rather than a log line.

### 1.3 Back matter, per volume

Grammar File (one page per grammar point, A1 wording, no metalanguage beyond
eight permitted terms), Word File (every item, unit of first appearance,
Arabic gloss), Phrase File (the functional sets), Audio File (every script, to
the word), Picture File (every figure, its caption and its alt text),
irregular-verb list, sound-symbol table, and the Can-Do record.

### 1.4 What the run cannot produce, stated plainly

- **No recorded audio or video.** The container has `ffmpeg` but no voices and
  no licence to synthesise any. The run produces scripts, timings, speaker
  notes and the recording spec. The Audio File is complete; the audio is not.
- **No photographs.** Every visual is drawn by `tools/figures.py` from data.
  This is a feature — it is why all 440 are checkable — but it means the book
  has no photographic register at all, where American Headway has one on
  every page.
- **No Arabic edition in this run.** The glosses in the Word File and the
  Grammar File headwords are bilingual; a full Arabic edition is Tier 2 on the
  cut list and will almost certainly not be reached.

---

## 2. The A1 shell

Eight parts, thirty-eight exercises. Fewer parts than B1's ten: *Exam Skills*
and *At Work* are not A1 material and are gone. *Real-World File* stays,
because a beginner reading a real timetable is the single most motivating
thing a beginner course does.

| Part | Header | Exercises | Labels |
|---|---|---|---|
| Warm Up | `**Warm Up**` | 3 | W1 W2 W3 |
| 1 | `**Part 1 · Words & Sounds**` | 6 | 1A–1F |
| 2 | `**Part 2 · Grammar**` | 6 | 2A–2F |
| 3 | `**Part 3 · Listening**` | 4 | 3A–3D |
| 4 | `**Part 4 · Speaking**` | 4 | 4A–4D |
| 5 | `**Part 5 · Reading**` | 4 | 5A–5D |
| 6 | `**Part 6 · Writing**` | 3 | 6A–6C |
| 7 | `**Part 7 · Real-World File**` | 3 | 7A–7C |
| 8 | `**Part 8 · Review & Can-Do**` | 5 | 8A–8E |

Thirty-eight exercises, 2–4 figures per part, **22 figures per unit**.

The unit source format is B1's, unchanged, because the whole toolchain reads
it: `**Unit N: Title**`, an `*In this unit you…*` strap, part headers, bold
exercise labels, a seeded `0.` example with the answer in brackets and
`*(example)*`, `*Figure N.M · Caption.*` captions, `> **Words:** a · b · c`
boxes, `______________` blanks.

### 2.1 The ceilings

Derived, and **declared as derived** — there is no A1 source book in this
repository to measure, and I will not pretend otherwise. Every A1 ceiling is
set strictly below the figure measured from your B2 source
(`PE_B2_U08_StudentBook.docx`), by the ratio the CEFR descriptors and the
American Headway Starter research in `english-a1/PLAN.md` §1 support.

| | B1 (measured from source) | A1 (derived ceiling) |
|---|---|---|
| Words per unit | 5,899 target, 6,783 max | 3,200 target, **3,600 max** |
| Mean sentence | ≤ 12 words | **≤ 8 words** |
| Longest sentence | ≤ 26 words | **≤ 14 words** |
| Flesch–Kincaid | ≤ 4.5 | **≤ 2.0** |
| Clause depth | ≤ 2 | **≤ 1** |
| Item mean | ≤ 11 words | **≤ 7 words** |
| Longest item | ≤ 22 words | **≤ 12 words** |
| Texts over 60 words | ≤ 5 | **≤ 3** |
| Longest text | ≤ 190 words | **≤ 80 words** |
| Rubric | ≤ 20 words | **≤ 12 words** |
| Items per exercise | 3–8 | **3–8** |
| MCQ options | 3 | **3** |
| Caption | ≤ 8 words | **≤ 6 words** |
| New items per unit | — | **≤ 42** |

The floors that would normally sit opposite these numbers are absent on
purpose. A unit of 2,400 words that teaches its forty items and reads
beautifully is a *pass*.

### 2.2 The ladder

A1 must get harder, and the only honest way to enforce that without floors is
**pairwise monotonicity**: for every pair of units *(u, p)* with *u > p*, check
X5 requires that *u*'s text length, new-item load, required output length and
audio words-per-minute are each **≥ p's** — not that they exceed a fixed bar.
The ladder is relative to what the book already did, so it can never force a
unit to be denser than the course needs.

---

## 3. The check architecture

Four layers, and in each layer there is something that runs **before** the work
and something that runs **after** it. The before-checks are the part the
earlier plan was missing, and they are the ones that prevent rework: an
exercise whose lexis does not exist yet should never be written at all.

```
                      BEFORE                       AFTER
 per exercise         P1–P5   (5)                  E1–E7   (7)
 per figure           V1–V4   (4)                  F1–F10  (10)
 per unit             B1–B5   (5)                  U1–U5 + 5·(u−1) cross
 per volume / book    —                            120 book checks, 12 families
```

### 3.1 Before each exercise — P1 to P5

Run against the exercise's **spec row** in the unit skeleton, before a single
word of it is authored. All five must pass or the row is rewritten first.

| | Check | Fails when |
|---|---|---|
| **P1** | slot legality | the row's label is not the next label in the part; its type is not one of the 22 permitted types; its type is not permitted in that part |
| **P2** | lexis availability | the row names a target item that is not yet in `ledgers/lexis.yaml` at this unit, or names more than 42 new items for the unit, or needs a word the Word File will not contain by then |
| **P3** | grammar availability | the row's target structure is not this unit's or an earlier unit's; nothing from a later unit is required to answer it |
| **P4** | figure feasibility | the row's figure type maps to a renderer that exists in `tools/figures.py`, the data it needs is in the row, and the part's figure budget (2–4) is not exceeded |
| **P5** | warrant and the no-guess design | the row names one CEFR descriptor and one verb of what the learner does; and the row states *why a learner who knows the lexis but not the target structure cannot score above chance* |

**P5 is the check that decides whether the book teaches anything.** It is
stated as a design obligation at the planning stage, not a judgement after the
fact, because a picture-matching exercise that can be solved from the picture
alone cannot be repaired by editing — it has to be a different exercise.

### 3.2 After each exercise — E1 to E7

The seven from `english-a1/PLAN.md` §11.1, unchanged, now reading EFDL data.

| | Check | Fails when |
|---|---|---|
| **E1** | identity and placement | label, unit, part, position and global number disagree; the exercise appears twice; a renumber left a stale id |
| **E2** | skeleton conformance | the written exercise's type, target, minutes or figure differ from the row P1–P5 approved |
| **E3** | item form | rubric over 12 words; no seeded `0.` example; items outside 3–8; any of the eleven item-writing rules broken (options of unequal length, a clue in one item that answers another, "all of the above", negative stems, an audio script printed beside its own task) |
| **E4** | lexis and coverage | any word in the rubric, items, key, figure labels or script is absent from the cumulative Word File; text coverage below 98%; more than three glossed words in one text |
| **E5** | key integrity | no key; key shape wrong for the type; accepted variants missing; one option letter over 40% within the exercise; the key sequence duplicates another exercise's |
| **E6** | visual integrity | the figure is missing, unreferenced by the rubric, carries no task data, or breaks a §3.3 rule |
| **E7** | pedagogical warrant | the descriptor P5 named is not actually served; the no-guess property does not hold in the written version |

**12 passes per exercise × 760 = 9,120.**

### 3.3 The figure checks — before (V) and after (F)

This is where I want to be most concrete, because "check the visuals" is the
part of your brief most easily faked. A1's figures are **data passed to named
renderers**, so they are machine-checkable in a way photographs are not.

**Before drawing — V1 to V4.** V1: the renderer exists and its signature
accepts this row's data. V2: every label the figure will print is in the Word
File at this unit (a figure may not teach a word the unit has not met). V3:
the figure's *job* is declared as one of four — **carry the task data**,
**contrast two forms**, **supply the lexis**, **show the real document** — and
decoration is not on the list. V4: the slot's canvas fits the page column
(the A2 log records that a canvas over ~712 px prints narrower than the text
width, which silently shrinks the whole figure).

**After drawing — F1 to F10**, every one of which already exists in the A2/B1
toolchain and is carried over:

| | Check |
|---|---|
| **F1** | renders to SVG without a fit-drop (no label was silently shrunk out) |
| **F2** | palette: every pixel within ΔE ≤ 3 of the twelve locked colours |
| **F3** | geometry: PNG 1440 px wide, fitted into 5.625 × 1.979 in preserving aspect, rounded to whole 96-DPI pixels, half up |
| **F4** | no label box overlaps another |
| **F5** | no leader line crosses another |
| **F6** | empty margin ≤ 8% of the canvas (a figure that is mostly air is a figure that was not drawn) |
| **F7** | text contrast ≥ 4.5:1; non-text ≥ 3:1; colour is never the only channel |
| **F8** | byte-identical on re-render — the anti-drift check |
| **F9** | the SVG on disk matches what the current code emits (catches the 40 stale figures that shipped silently in A2) |
| **F10** | every depiction is licensed by its own label, and a contrast figure actually contrasts (the A2 defects G34/G35) |

**14 passes per figure × 440 = 6,160.**

### 3.4 Before each unit — B1 to B5

| | Check |
|---|---|
| **B1** | the skeleton resolves: 38 rows, labels complete and in order, every row P1–P5 green |
| **B2** | the lexis budget balances: ≤ 42 new items, each with its ten-encounter schedule placed, every item due for recycling from an earlier unit actually placed in a row |
| **B3** | the grammar slot is free: this unit's points are unused, and at least one earlier point is scheduled for *productive* reuse |
| **B4** | the world is consistent *before* writing: every cast fact the unit will assert is already in `ledgers/cast.yaml` or is a declared, dated change |
| **B5** | the figure budget: 22 figures, 2–4 per part, every renderer V1–V4 green, no figure type over 12% of the book so far |

### 3.5 After each unit — the gate, U1–U5, and the cross-checks

**The gate.** `A1/tools/gate.py`, forked from B1's and extended: G1–G24,
ceilings only, every number read from `spec/golden.yaml`. Sentences are
measured **line by line, never on the file joined** — measuring the whole file
produced nine false positives in B1, and in the SAT books joining option sets
put a word next to itself and invented a typo that did not exist.

**U1–U5**, from `english-a1/PLAN.md` §11.2, adapted to the eight-part shell:
completeness and order; within-unit spacing (every new item appears ≥ 3 times,
in ≥ 2 different parts); variety and investment (no two consecutive exercises
of one type, all five visual classes present, ≥ 4 exercises asking for the
student's own information, the controlled drill blocked and not interleaved —
Hwang 2025: interleaving hurts low achievers who have not had blocked practice
first); media integrity; descriptor closure.

**The cross-checks — 5 for every earlier unit.** X1 lexical, X2 grammatical,
X3 duplication and keys, X4 world continuity, X5 the ladder. Unit 2 runs 5,
unit 20 runs 95. Σ = **5 × (0+1+…+19) = 950**, plus 100 intra = 1,050.

This is the layer your brief asked for, and the reason it is pairwise rather
than aggregate: cohesion failures in a coursebook are failures *between two
specific units* — a word taught twice, a rule stated two ways, a unit that got
easier — and a book-level average hides every one of them. A failure names the
pair.

### 3.6 Book level — 120 checks, twelve families

A completeness, B the grid, C the ladder, D grammar, E lexis, F functions,
G phonology, H keys, I the visual system, J the bilingual apparatus, K the
document, L originality. Ten named checks each, as listed in
`english-a1/PLAN.md` §11.5, with family J reduced to the glosses this run
actually produces.

### 3.7 The total

| Layer | Passes |
|---|---|
| Per exercise, before and after | 9,120 |
| Per figure, before and after | 6,160 |
| Per unit, before | 100 |
| Per unit, after (intra + cross) | 1,050 |
| Book level | 120 |
| **Total** | **16,550** |

### 3.8 Why the checks can be trusted — mutation testing

A check that cannot fail is worse than no check, because it reports green. So
every check in the run carries a **negative test**: a mutation of a good unit
that the check must catch. `tools/mutations.py` holds one mutation per check;
`tools/mutate.py` applies each one to the pilot unit and asserts the named
check goes red and the others stay green.

**The run does not start writing unit 2 until every check has been proven
able to fail.** In A2 this found checks that were quietly inert; the same
discipline is why I trust the A2 numbers and do not trust the first B1 suite.

---

## 4. Zero omissions, zero regression, zero drift

Your three words, each with a mechanism rather than a promise.

### 4.1 Zero omissions — the manifest

Before any content is written, the run writes `spec/manifest.yaml`: an
enumeration of **every artifact the finished course contains** — 20 units by
name, 760 exercise labels, 440 figure ids, 760 key entries, 20 audio script
sets, every back-matter page, every release file. Produced from the skeleton,
not from what gets built.

Family A then does one thing: compares the manifest against what exists. An
artifact missing from the manifest is a planning bug; an artifact in the
manifest and missing from disk is an omission, and it blocks release. **There
is no path by which "done" means "done except".** The morning report prints
the manifest coverage as a fraction, and if it is not 1.00 it says so in the
first line.

### 4.2 Zero regression — revalidate everything, always

The rule carried from A2 as guard K03: **any edit anywhere re-runs the gate and
the cross-checks on every unit written so far.** Not the edited unit — all of
them. It is cheap (the whole suite is deterministic file comparison, seconds)
and it is the only reason A2's twenty units are mutually consistent.

Reinforced by three structural guards:

- **Append-only ledgers.** `cast.yaml`, `lexis.yaml`, `grammar.yaml`,
  `clarity.yaml`, `situations.yaml` may gain entries and never lose or alter
  one. A change of a cast fact is a new, dated entry that says what changed.
- **One source for item and answer.** The key is generated from the same data
  that generates the item, never typed twice. (A2's answer-shuffling defect
  came from two sources of truth.)
- **Generated scaffolds are generated, not typed.** Labels, numbering, figure
  references and cross-references come from the skeleton.

### 4.3 Zero drift — re-emit and diff

Three sweeps, all in phase P6:

1. **Content drift.** Every unit is re-emitted from its authoring module and
   diffed byte-for-byte against the file on disk. A difference means the
   module and the markdown disagree — the SAT books' `xdrift.py` pattern, which
   caught fifteen modules' worth of silent divergence.
2. **Figure drift.** Every figure re-rendered and compared byte-for-byte (F8),
   plus the stale-SVG check (F9) that compares the SVG on disk to what the
   current code emits. A2 shipped 40 stale figures and 61 truncated ones
   before F9 and F1 existed.
3. **Spec drift.** `spec/golden.sha256` freezes the spec. The gate refuses to
   run against a spec whose hash has changed without a recorded reason. A
   ceiling may be *tightened* mid-run with a logged note; **a ceiling may never
   be loosened to make a unit pass**, and the run treats an attempt to do so as
   a hard stop (§9).

---

## 5. Parity with American Headway Starter

The research is in `english-a1/PLAN.md` §1, with confidence marks. This is the
ledger the run is held to. "Exceeds" claims are about *verifiable properties*,
not about taste — I cannot claim to beat a book I have only read about on
charm.

| Dimension | AH Starter | EFDL A1 | Verdict |
|---|---|---|---|
| Level | A1 | A1 | parity |
| Units | 14 | 20 | exceeds |
| Pages | ~140 | ~700 across 2 volumes | exceeds (different density model) |
| Exercises | ~25/unit [likely] | 38/unit | exceeds |
| Grammar points | ~28 [likely] | 44 | exceeds |
| Lexical items | ~500 [likely] | ~800, each with a 10-encounter schedule | exceeds |
| Unit shape | Starter → presentation → Grammar Spot → practice → vocabulary → skills → Everyday English | 8 parts, W1–8E | parity, different arrangement |
| Everyday English | one slot per unit | Part 7 Real-World File + the functional Phrase File | parity |
| Grammar Reference | back matter | Grammar File, one page per point | parity |
| Word list | back matter | Word File with unit of first appearance + gloss | exceeds |
| Audio scripts | back matter | Audio File, complete, to the word | parity |
| Irregular verbs | back matter | yes | parity |
| Phonetic symbols | back matter | sound-symbol table + 16 taught phonology points | exceeds |
| Writing syllabus | back-matter Writing pages | Part 6 in every unit, 3 exercises | exceeds |
| Images | photographs, every page | 22 drawn, checked figures per unit | **different** — see §1.4 |
| Answer key | Teacher's Book | shipped, both volumes, every exercise | exceeds |
| Tests | 14 unit tests A/B, 4 Stop-and-Checks, 3 Progress tests, exit, placement | 4 Loops + Part 8 Review & Can-Do in every unit | **below** — no separate test suite in this run |
| Digital | Online Skills 30h, iChecker, iTools | none | **below** |
| Teacher's Book | full, with *Possible problems* | not in this run | **below** |
| Audio | recorded | scripts only | **below** |
| Checkable quality | publisher process, not inspectable | 16,550 declared passes, mutation-tested | exceeds |

Five rows below parity, and all five are component rows rather than content
rows: tests, digital, teacher's book, recorded audio, photographs. I am telling
you this now rather than in the morning. The content of the Student Book —
units, grammar, lexis, exercises, keys, back matter — exceeds Starter on every
dimension I can measure.

---

## 6. Run order

| Phase | What happens | Ends when |
|---|---|---|
| **P0** | `A1/` tree; `spec/golden.yaml` + `golden.sha256`; `palette.yaml` and `typography.yaml` copied from A2 unchanged; the five ledgers seeded from the §5 syllabus; the toolchain forked from B1 (36 files); `gate.py` extended to G24; `achecks` P/E/B/U/X; `avis` V/F; `manifest.yaml`; `HOUSE-STYLE.md` | the gate runs green on an empty tree and the manifest enumerates 20/760/440 |
| **P1** | **Unit 1, the pilot.** Written, gated, and then *read* by me as a rendered page, not only as a gate result. Mutation suite run: every check proven able to fail. | unit 1 green, mutations 100%, and I have read the PDF page by page |
| **P2** | Units 2–10. One commit per unit. After each: gate + U1–U5 + all cross-checks + K03 revalidation of every earlier unit. | 10 units green, cross-checks 225/225 |
| **P3** | A1.1 assembly: Loops 1–2, back matter, DOCX, PDF, answer key, covers | A1.1 builds and family K passes |
| **P4** | Units 11–20, same loop | 20 units green, cross-checks 950/950 |
| **P5** | A1.2 assembly: Loops 3–4, back matter, documents, covers, `make_release.py` | release/ complete |
| **P6** | The drift sweep (§4.3), the 120 book checks, manifest coverage, the originality gate, the morning report | all green, or parked and reported |

**Commit policy.** One commit per unit, titled `A1 unit NN: <title>`, body
naming the checks that ran and their counts. A commit happens only when that
unit's gate is green — a red unit is committed as `WIP` with the failure in the
message, never as done. Phase boundaries get their own commit. Everything on
`claude/jolly-johnson-9khdgl`. **No pull request** unless you ask for one.

**Continuity across compaction.** After every unit the run updates
`A1/RESUME.md` (the narrative log, as A2 has) and `A1/state.json` (the machine
state: units done, checks run and passed, parked items, next action). If this
session's context is compacted mid-run, the next window reads `state.json` and
continues at the next unit. This is how the A2 twenty units survived being
built across many windows.

---

## 7. What I do that the checks cannot

Every green gate in this repository that later turned out to be wrong was
wrong because nobody looked at the page. The chapter-9 typo in SAT Book 3
("plain sight sight") was found by reading the rendered page. B1's version 2
passed every one of 269 checks and was rejected in four words: *it has one
subject*.

So at three points in the run — after unit 1, after unit 10, after unit 20 — I
read the rendered PDF as a learner would, and I write what I find into
`A1/ADJUDICATION.md`: what the gate said was fine and is not. Anything I find
there becomes a new check if it can be mechanised, and a ledger entry in
`clarity.yaml` if it cannot.

---

## 8. Honest risks

1. **Twenty units in one unattended run is the aggressive case.** A2's twenty
   units took many sessions. The checks are cheap; the writing is not. The cut
   list in §10 is what gives, in order, and the morning report says exactly
   where the run stopped.
2. **A1 ceilings are derived, not measured.** There is no A1 source book here.
   If the derived numbers are wrong they will be wrong in the safe direction —
   too tight — and a too-tight ceiling shows up as a unit that cannot say what
   it needs to say. Unit 1's adjudication is where I would catch it, and
   tightening or relaxing a ceiling *there*, before nineteen units depend on
   it, is legitimate; doing it in unit 14 to make unit 14 pass is not.
3. **A beginner course with no photographs is unusual.** I think drawn,
   checkable figures are the better trade for a course that has to be
   verifiable, but it is a real difference from the book we are matching, and
   you should know it is a deliberate choice and not an oversight.
4. **No recorded audio means the listening parts are untested in the only way
   that matters.** The scripts are checked for length, speed and naturalness
   features; nobody has heard them.

---

## 9. Hard stops and the parking policy

**The run stops and waits for you** only for these:

- A ceiling in `spec/golden.yaml` would have to be loosened for a unit to pass.
- A check would have to be deleted, disabled or narrowed to get green.
- A ledger entry would have to be altered or removed.
- The manifest would have to shrink.

None of these is a judgement call; all four are the failure modes that produced
every silent defect in this repository, and the run is not permitted to take
any of them, even to finish.

**Everything else parks rather than stops.** Three failed attempts at the same
exercise or figure → an entry in `A1/PARKED.md` naming the unit, the label, the
check that will not go green and what I tried; the unit continues without it;
the manifest records it as outstanding so release stays blocked and the morning
report lists it first. A parked item is never silently dropped and never
counted as done.

**Never, under any circumstance:** lower a ceiling to pass; delete or weaken a
check; type a key separately from its item; edit a ledger entry in place;
ship with manifest coverage below 1.00 and call it finished.

---

## 10. The cut list, in order

If the run is going long, this is the order things give. Units and their checks
are **never** on this list.

| Tier | Cut | Cost |
|---|---|---|
| 1 | The Workbook (340 exercises) | practice volume; the Student Book is unaffected |
| 2 | The full Arabic edition | glosses remain; the parallel edition goes |
| 3 | Covers beyond a plain typographic front | cosmetic |
| 4 | The four Loops | review spreads; Part 8 in each unit still reviews |
| 5 | The Picture File and Audio File as separate back matter | captions and scripts stay in the units |
| 6 | **A1.2 ships as units 11–16 rather than 11–20** | last resort; the morning report says so in its first line, and the manifest records six units outstanding |

---

## 11. The morning report

`A1/REPORT.md`, and the same thing as the last message in this session. In
this order:

1. **One line: what you have.** Units complete, exercises, figures,
   documents, manifest coverage as a fraction.
2. **Anything not done**, naming it — parked items, cut tiers reached, units
   outstanding.
3. **The check table**: passes run and passed at every layer, mutation
   coverage, drift sweep results.
4. **The parity ledger** from §5, with the verdict column filled from what was
   actually built.
5. **What I found by reading** — the three adjudication passes, verbatim.
6. **The decisions waiting for you**, if any.
7. **Where the files are**, as paths you can open.

If something went wrong at 3 a.m., that report is where it will say so, in the
second item, not in a footnote.

---

## 12. The one question I still owe you

`docs/english-animated/` holds nineteen design documents and several per-unit
builds on an architecture you rejected. The A2 plan asked whether to keep or
delete it and the question was never answered. It is not in the way of this
run — I will leave it exactly as it is — but it is the last loose end in
`docs/`, and a one-word answer closes it whenever you like.

---

## 13. Sources this plan rests on

`english-a1/PLAN.md` §§1, 5, 7, 8, 9, 11 (the American Headway research, the
syllabus, the evidence strands, the visual system, the check design);
`docs/general-english/A2/00-MASTER-PLAN.md` §§3, 8, 9 (the frozen spec, the
230 checks, the eight guards); `docs/general-english/A2/RESUME.md` (the six
silent A2 defects, and the build's hard-won limits);
`docs/general-english/B1/00-MASTER-PLAN.md` and `B1/HOUSE-STYLE.md` (the
no-floors correction); `B1/tools/gate.py` and `B1/tools/figures.py` (the gate
pattern and the renderer library this run reuses).
