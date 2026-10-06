# 01 · Series Architecture

## English Animated
### A six-level general English course for adults and young adults, A1 → C2

---

## 1 · Why the name is a specification, not a label

This repository already contains an XML→video engine that renders lit 3D sets, rigged actors with
viseme-driven mouths and explicit camera cuts (`courses/eam-b1/*/scene.json`, `schema: scene/2`).
That engine is the course's second medium, not a marketing afterthought.

**Every visual in English Animated is authored once, in layers, and published twice:**

- **Frame 1** → the printed page / PDF: a still, complete, information-dense illustration.
- **The sequence** → the platform: the same artwork revealed, morphed, zoomed, annotated and
  voiced, rendered by the engine already in this repo.

A cutaway of a water-treatment plant is a labelled diagram on page 44 and a 40-second camera move
through the plant on the platform. A before/after pair is a static comparison in the book and a
cross-dissolve on screen. One asset, two media, no duplicated authoring. That is the whole
proposition of the name, and §7 of `07-visual-system.md` specifies it down to layer naming.

---

## 2 · The shelf: 14 books

CEFR bands are not equal in width. B1 and B2 each require roughly twice the guided learning
hours of A1. A series that gives every level two books is mis-graded by construction — the
notorious "B1 cliff". English Animated weights the shelf to the real shape of the curve.

| Shelf | Book | CEFR | Core GLH | Cum. GLH | Units | Active vocab | Cum. active |
|---|---|---|---|---|---|---|---|
| **Foundation** | A1.1 *Starting Out* | A1 lower | 90 | 90 | 10 | 350 | 350 |
| | A1.2 *Getting Around* | A1 upper | 90 | 180 | 10 | 350 | 700 |
| | A2.1 *Making Plans* | A2 lower | 100 | 280 | 10 | 400 | 1,100 |
| | A2.2 *Telling the Story* | A2 upper | 100 | 380 | 10 | 400 | 1,500 |
| **Independence** | B1.1 *Taking a Position* | B1 lower | 110 | 490 | 10 | 450 | 1,950 |
| | B1.2 *Weighing It Up* | B1 mid | 110 | 600 | 10 | 450 | 2,400 |
| | B1.3 *Making the Case* | B1 upper | 110 | 710 | 10 | 450 | 2,850 |
| | B2.1 *Reading Between Lines* | B2 lower | 120 | 830 | 10 | 500 | 3,350 |
| | B2.2 *Holding the Floor* | B2 mid | 120 | 950 | 10 | 500 | 3,850 |
| | B2.3 *Thinking in English* | B2 upper | 120 | 1,070 | 10 | 500 | 4,350 |
| **Mastery** | C1.1 *Shaping the Argument* | C1 lower | 130 | 1,200 | 10 | 550 | 4,900 |
| | C1.2 *Precision and Nuance* | C1 upper | 130 | 1,330 | 10 | 550 | 5,450 |
| | C2.1 *Command* | C2 lower | 140 | 1,470 | 10 | 600 | 6,050 |
| | C2.2 *Voice* | C2 upper | 140 | 1,610 | 10 | 600 | 6,650 |

**140 units · 1,610 core guided hours · ~6,650 active headwords.**

Receptive vocabulary runs roughly 2.2× active, reaching ~15,000 word families at C2 — consistent
with the ~7,000 headwords of the
[English Vocabulary Profile](https://www.englishprofile.org/) once multi-word items, phrasal verbs
and derived forms are counted separately.

**Core GLH is the timetabled Standard path** — all twelve parts, at 9 h/unit (A), 11 h (B1),
12 h (B2), 13–14 h (C). It is a floor, not a ceiling. Each book also carries a **Fast path**
(7 parts, ~6 h/unit) for intensive courses, and an **Extended path** adding Workbook, Milestone
projects and platform work for a further 50–60 h per book (`02-unit-architecture.md` §6). A
10-unit book therefore serves a 60-hour intensive, a 110-hour standard course or a 170-hour
academic year without rewriting.

### Why not 2 books per level?

| Option | Verdict |
|---|---|
| 12 books (2 per level) | Fails. B1 and B2 would each compress ~350 h into 220 h. This is the gap every teacher complains about. |
| **14 books (2/2/3/3/2/2)** | **Adopted.** Matches the real width of the bands; keeps A-level books short enough to finish in a term, which drives completion and repurchase. |
| 18 books (3 per level) | Over-fragments A1 and C2, where populations are smaller and the band is narrower. Raises unit cost without raising fit. |

### Reading the shelf names

Each book title names the **performance** the book delivers, not the grammar it contains. A learner
can see what they are buying. "Taking a Position" is B1.1 because that is the first point at which
a learner can state and defend a preference; "Holding the Floor" is B2.2 because extended turn-taking
under pressure is the B2 mid threshold.

---

## 3 · The three shelves, and what changes between them

The architecture is constant across 14 books — same 12 parts, same three lines — but the *weight*
inside it shifts. This is what makes the series feel graded rather than repetitive.

| | **Foundation** (A1–A2) | **Independence** (B1–B2) | **Mastery** (C1–C2) |
|---|---|---|---|
| Driving question | *What do I need to say?* | *What do I think, and can I defend it?* | *How is this being said to me, and what am I doing with it?* |
| Text source | Written-to-level, high-frequency | Written-to-level + lightly adapted authentic | Authentic, unabridged |
| Grammar | Form-dominant: build the system | Meaning-dominant: choose between forms | Discourse-dominant: why *this* form here |
| Lexis | Concrete, high-frequency, topic sets | Collocation, chunks, word families | Connotation, register, metaphor, hedging |
| Reading | Comprehension | Inference, argument structure | Critique, stance detection, intertext |
| Listening | Decoding, gist | Attitude, implication, note-taking | Fast speech, accent range, subtext |
| Speaking | Transactions, short exchanges | Discussion, negotiation, presentation | Debate, chairing, improvised register shift |
| Writing | Short functional genres | Structured genres with argument | Extended, voiced, genre-aware |
| Mediation | Relay simple information | Explain, summarise, simplify, bridge | Facilitate, reframe, mediate conflict |
| File rotation | 4 Work · 3 Study · 3 Culture | 4 Work · 3 Study · 3 Culture | 3 Work · 4 Study · 3 Culture |
| Visual density | 14–16 figures/unit, high support | 10–12 figures/unit, high information | 7–9 figures/unit, data & document led |
| L1 support | Bilingual gloss available | Gloss on request | English only |

---

## 4 · Components per book

| Component | Extent | Notes |
|---|---|---|
| **Student's Book** | 208–264 pp | 10 units (22 pp at A, 20 at B, 18 at C) + 2 Milestone spreads (8 pp) + 24–32 pp back matter |
| **Workbook** | 96–128 pp | 8 pp per unit — one page for each of the nine practice parts, minus the two that are performance-only — plus 24 pp key and reference |
| **Teacher's Edition** | 288–336 pp | Interleaved pages, timings, staging, anticipated errors, culture notes, three lesson paths (fast / standard / extended) |
| **Animated Asset Library** | 90–160 assets | Layered source + still export + scene JSON for the engine |
| **Audio** | 70–110 tracks | 1.5 h at A1 rising to 4.5 h at C2 (`03-grading-spine.md` §3); scripted, semi-scripted and unscripted; accent-banded (§5) |
| **Video** | 20 per book | 10 Dialogue Stages + 10 Documentary shorts, rendered by the repo engine |
| **Assessment Pack** | — | Diagnostic, 10 unit quizzes, 2 milestone tests, exit test, speaking & writing rubrics, exam-mapped practice |
| **Platform course** | — | Catalogue entry under `courses/`, `course/1` schema, per-unit scenes |
| **Portfolio** | 3 anchors | One spoken, one written, one mediated artefact per book |

---

## 5 · Accent and voice policy

The source books use one accent throughout. A general international course cannot.

| Shelf | Accent exposure |
|---|---|
| A1–A2 | Standard southern British and General American only, clearly articulated, 90–120 wpm. Listening is for decoding; accent is not a variable yet. |
| B1 | Add Scottish, Irish, Australian, Canadian — in *supported* listening (visual + task scaffold) only. |
| B2 | Add proficient L2 Englishes: Indian, Nigerian, Singaporean, Spanish-accented, Japanese-accented, German-accented. Introduce the explicit goal: *understanding English as it is actually used globally*. |
| C1–C2 | Unrestricted, including overlapping speech, regional idiom, poor line quality, and one deliberately difficult speaker per book. |

**At least 40% of speakers from B2 upward are L2 users of English.** This is not representation
for its own sake: most English a learner will hear in their working life is spoken by another
learner, and no major series trains for it adequately.

---

## 6 · The cast system

The source books prove that a persistent cast works. English Animated keeps the principle and
removes the constraint that made it parochial.

- **Each book has a resident cast of 6–8** who recur across all 10 units.
- **The cast changes between books.** A learner who spends 1,610 hours with the same eight people
  would mutiny; a learner who meets a new ensemble every 110 hours stays curious.
- **The setting rotates by book across six world regions** — no book is set where the last one was,
  and across 14 books every region hosts at least twice.
- **Three characters cross the whole series** as a thin connecting thread: a journalist, an engineer
  and a teacher who appear once per book, ten years apart by C2. Learners who do the full shelf get
  a payoff; learners who do one book lose nothing.

| Book | Setting | Resident cast anchor |
|---|---|---|
| A1.1 | A language school and its street, Lisbon | Students and staff |
| A1.2 | An intercity train line, Canada | Passengers and crew |
| A2.1 | A city food market, Kuala Lumpur | Traders and customers |
| A2.2 | A coastal town rebuilding after a storm, Ireland | Residents |
| B1.1 | A shared workspace, Nairobi | Six founders |
| B1.2 | A regional hospital, Chile | Clinical and admin staff |
| B1.3 | A university campus, Melbourne | Students, porters, researchers |
| B2.1 | A newsroom, Toronto | Reporters and editors |
| B2.2 | A port and its logistics chain, Rotterdam | Operations teams |
| B2.3 | A climate research station, Iceland | Scientists and contractors |
| C1.1 | A public inquiry, London | Counsel, witnesses, press |
| C1.2 | An architecture practice, Seoul | Partners and clients |
| C2.1 | An international standards body, Geneva | Delegates |
| C2.2 | A documentary production, moving | Crew, subjects, funders |

**Cultural neutrality rule.** The setting supplies *texture* — a street, a job, a weather —
never *values*. No unit requires a learner to accept a norm. Where norms differ, the Culture File
makes the difference the object of study rather than the assumed background (`05-topic-matrix.md` §4).

---

## 7 · Localisation layer

Every book ships with a **Localisation Supplement** specification so a regional publisher can adapt
without touching the core:

| Layer | Localisable | Fixed |
|---|---|---|
| Names, places, currencies in *examples* | ✅ | |
| Culture File comparison partner | ✅ | |
| Bilingual gloss and L1 notes | ✅ | |
| One "Your Country" task per unit | ✅ | |
| Grammar spine, lexis spine, can-dos | | ✅ |
| Text lengths, audio timings, task types | | ✅ |
| Figures (text layer separated for translation) | text only | artwork |

This is the direct answer to the Syrian-context lock-in identified in `00-diagnosis.md` §3.6:
the series is general by default and local by configuration.
