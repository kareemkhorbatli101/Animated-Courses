# The series rebuild plan — eight books, one architecture

Volume 3 is the pilot (`IELTS_Textbook_Plan.md`). This document is what
happens to the other seven books once the pilot ships, plus the three
things the series needs that no single volume can carry: an audio
production spec, a topic architecture, and a decision about the package.

The evidence is `IELTS_Volume_3_Pedagogy_Audit.md` (15 factors measured
on one volume) and `IELTS_Series_Benchmark.md` (72 factors scored against
Complete IELTS and Bridge to IELTS). The visual system is
`IELTS_Visual_System.md`.

---

## Part 1 · Where our books sit against the ones you teach

You teach Bridge to IELTS, then Complete IELTS 4–5, then 5–6.5, then
6.5–7.5. Four books. We have eight, which is the series' single biggest
structural advantage and it has never been stated:

| you teach | band | our books | our band |
|---|---|---|---|
| Bridge to IELTS | pre-4.0 → 4.5 | **Foundation 1** (A1–A2) | below 4.0 |
| | | **Foundation 2** (A2–B1) | 4.0–4.5 |
| Complete IELTS 4–5 | 4.0 → 5.0 | **Volume 1** (B1) | 5.0 |
| | | **Volume 2** (B1+) | 5.5 |
| Complete IELTS 5–6.5 | 5.0 → 6.5 | **Volume 3** (B2) | 6.0 |
| | | **Volume 4** (B2) | 6.5 |
| Complete IELTS 6.5–7.5 | 6.5 → 7.5 | **Volume 5** (B2+/C1) | 7.0 |
| | | **Volume 6** (C1) | 7.5 |

**Two of ours for each of theirs.** A learner moving 5.0 → 6.5 gets two
full books of 60 cycles rather than one of 14 units. That is roughly
twice the hours at the band where most learners stall, and it is the
right answer to "extreme ability to raise a student's level" — the level
rises with time on task, and we have the pages.

### Finding: you do not need a ninth book for the bridge

"I also start with Bridge to IELTS before Complete 4–5 if I have to."

Foundation 1 and Foundation 2 already occupy that slot by band. What they
lack is the **Bridge posture**, which is not a level but a teaching
style: shorter inputs, far more scaffolding, every task modelled before
it is set, vocabulary pre-taught every single time, and no assumption
that the learner has ever seen an exam paper.

Measured: F1 carries 8,648 script words against V3's 21,987 — the inputs
are already short. But the audit's central failure (unprepared input)
hurts an A2 learner far more than a B2 one. **So the Foundations do not
need rewriting at a different level; they need the pilot's architecture
applied harder** — a Skills builder in every cycle without exception, and
a `scene` figure opening every cycle rather than every unit.

---

## Part 2 · The order to rebuild in, and why

| order | book | reason |
|---|---|---|
| 1 | **Volume 3** | the pilot. Proves the architecture on one volume before 7 more |
| 2 | **Volume 4** | 6.5 is the most-demanded band on earth (visas, most universities). V4 is nearest V3 in level, so the pilot transfers with least adaptation |
| 3 | **Foundation 2** | 4.0–4.5. The learners who most need teaching rather than testing, and the band where a book either keeps a learner or loses them |
| 4 | **Foundation 1** | same argument, one level down |
| 5 | **Volume 1** | 5.0. Largest population; also where the topic-overlap problem is (Part 4) |
| 6 | **Volume 2** | 5.5 |
| 7 | **Volume 5** | 7.0. Strong learners tolerate a dry book; they are not the ones we are losing |
| 8 | **Volume 6** | 7.5 |

The instinct is to go bottom-up, F1 → V6, in the order a learner meets
them. The reason not to: **V4 second** means the two books that carry the
6.0 and 6.5 thresholds are both done early, and those two thresholds are
what nearly every learner is actually buying the series for. The
Foundations come third and fourth because that is where bad pedagogy does
the most damage, and V5/V6 come last because that is where it does the
least.

---

## Part 3 · What transfers from the pilot, and what does not

**Transfers unchanged** (built once in V3, reused by all):

- the eleven-beat cycle and the distribution rule (which beats fall in
  which cycle);
- 19 new renderers and `gate12.py`;
- `gate11.py` and `gate13.py`;
- the `notes` schema and the Teacher's Edition flag on `book.py`;
- the three back-matter references, re-levelled per band;
- the three contents tables, the preview, the diagnostic, the tracker;
- the `VOL_UNITS` table.

**Must be rewritten per volume** (there is no shortcut):

- every Skills builder — a sub-skill lesson is band-specific. "Match a
  heading" at 5.0 is a different lesson from the same at 7.5;
- every preview input;
- every vocabulary figure and exercise;
- every paraphrase bridge;
- the grammar context texts and graded practice;
- the diagnostic, keyed to that volume's own units.

Per volume that is roughly **340 new pages of writing**. The architecture
is free after V3; the content never is.

---

## Part 4 · The topic architecture, measured

I measured the actual themes of all 80 units. Two things came out, one
better than expected and one worse.

### What is already good

Volumes 2, 4, 5 and 6 are genuinely varied and genuinely interesting, and
they get better as the band rises. V4 runs measurement and statistics,
waste, justice, work and meaning, heritage and ownership, energy
transition, authenticity in art, error in science, migration, autonomy.
V6 runs causation, models and assumptions, institutions, memory and
narrative, the commons, aesthetics, linguistic categories, prediction,
consciousness, and — at the end of the series — *what a test measures*.

That is a real intellectual progression, it is more interesting than the
Cambridge topic list, and it is the strongest claim this series has to
"create interest in language and what it talks about". **Nothing in the
rebuild should touch it.**

### What is wrong

| pair | shared topic fields (of 10) |
|---|---|
| **Volume 1 ↔ Volume 3** | **10** |
| Volume 7 ↔ Volume 1 | ~8 |
| Volume 8 ↔ Volume 1 | ~6 |
| Volume 2 ↔ Volume 3 | 0 |
| Volume 3 ↔ Volume 4 | ~3 |

V1 and V3 are the same ten fields in the same order: education, work,
health, environment, technology, travel, cities, food, media, sport. The
angle differs every time (V1 "Education and Learning" vs V3 "Education:
Access and Outcomes") but the field does not, and a learner who works
V1 → V2 → V3 meets the same ten subjects twice with V2's much better list
sandwiched between them.

### The rule

`gate13.py` rule 5, stated precisely:

1. **No two units within a volume share a topic field.** (Currently
   true everywhere. Keep it true.)
2. **No volume may share more than 4 *cycle sub-topics* with any other
   volume.** Measured at cycle level, not unit level, because that is
   where a learner notices repetition and it is measurable from
   `cycles[]['sub']`.
3. **Every volume must carry at least two topic fields that appear
   nowhere else in the series.**

Rule 3 is what makes Units 81 and 82 obligatory rather than a nice idea:
animal navigation and archaeology appear nowhere in the other 78 units,
so V3 satisfies rule 3 the moment they exist. Each later volume gets the
same treatment — two new fields from the bank below.

### The topic bank, for the sixteen new units

Fields used by no current unit, each chosen because it carries real
IELTS task shapes (process, map, classification, data) *and* a Part 3
argument:

| volume | two new fields |
|---|---|
| F1 | daily routines and time; colours, shapes and describing things |
| F2 | weather and the sea; tools and how things are made |
| V1 | water: where it comes from and where it goes; sleep |
| V2 | maps and how places get named; glass, steel and concrete |
| **V3** | **animal navigation; archaeology** |
| V4 | oceans and what is in them; writing systems and literacy |
| V5 | pandemics and public trust in numbers; the economics of attention |
| V6 | deep time and geology; proof, in mathematics and in law |

### On V1 ↔ V3: the honest position

Rule 2 is measured at cycle level, and V1 and V3 largely pass it there —
V1's education cycles are school-level and personal, V3's are admissions,
funding and outcomes. Adding units 81 and 82 drops the field overlap from
10/10 to 10/12 and satisfies rule 3.

That is a mitigation, not a fix, and I am not going to pretend otherwise.
The full fix is to swap four of V3's ten fields for four from the bank,
which means discarding four units of finished work. **You said you are
not throwing the work away, so the default is the mitigation.** If you
want the full fix, say which four and it becomes phase 22b.

---

## Part 5 · Audio — the spec, with measured numbers

The series has **511 listening scripts and not one recording.** Measured:

| | scripts | words | runtime @150 wpm |
|---|---|---|---|
| Foundation 1 | 50 | 8,648 | 58 min |
| Foundation 2 | 50 | 10,751 | 72 min |
| Volume 1 | 52 | 12,821 | 85 min |
| Volume 2 | 59 | 17,158 | 114 min |
| Volume 3 | 63 | 21,987 | 147 min |
| Volume 4 | 64 | 24,225 | 162 min |
| Volume 5 | 60 | 23,909 | 159 min |
| Volume 6 | 61 | 24,325 | 162 min |
| Listening papers | 52 | 16,872 | 112 min |
| **total** | **511** | **160,696** | **17.9 hours** |

Script shapes, measured: **250 monologues, 165 two-speaker, 95
three-speaker, 1 four-speaker**, across **322 distinct named roles**.
Scripts are already stored as `(speaker, line)` tuples, so the recording
script generates directly from the content with no new authoring.

After the rebuild, 80 units × 2 preview listenings plus 16 new units adds
roughly **200 scripts, 46,000 words, 5 hours** → about **24 hours
finished audio, 710 scripts**.

### The spec

1. **Accents.** Four groups, as the test uses: British, Australian,
   North American, New Zealand. Distribution per volume: 50 / 20 / 20 /
   10, and no single recording mixes accent groups unless the script's
   setting justifies it.
2. **Casting.** Ten voices. A new `VOICES` table maps each of the 322
   role names to one voice, so a role is the same voice across a volume
   — the thing self-study learners rely on and amateur audio always
   breaks. The table is content, so a gate can check it is total.
3. **Pace.** 150 wpm for Parts 1–2, 160–170 for Parts 3–4. Monologues at
   the slower end of their band. Foundation 1 at 130.
4. **Realism, bounded.** Natural hesitation and self-repair in Parts 1
   and 3 where the script already contains it; no added overlap, no
   music, no sound effects beyond a single room tone per setting.
   Distractors must be *audible*: the self-correction that creates the
   trap gets its full pause.
5. **Structure.** One track per block, numbered `v3u21c1L0`, matching the
   content key exactly. A track list generates from the content, so the
   book's audio references cannot go stale.
6. **Timing.** Each track carries the test's own pauses — the 30 seconds
   to read questions, the pause between sections — so a learner can sit
   a Part without a teacher holding a stopwatch.
7. **Budget.** Scripted multi-voice narration runs about 4 hours of
   studio and edit per finished hour, so ~24 hours finished implies on
   the order of **100 hours of studio time**. That is an industry rule of
   thumb, not a measurement, and it is the one line in this whole plan
   that needs money rather than work.

**What I can build without voices:** the `VOICES` table, the track-list
generator, the recording scripts (speaker, accent, pace, pause marks, one
file per track), and a gate that every listening block has a track id and
every track id has a script. Then the audio is a procurement problem,
not a design problem. **What I cannot build:** the recordings.

---

## Part 6 · The package

Benchmark category I is our worst: **2 of 18.** Complete IELTS ships a
student's book, workbook, teacher's book, audio, online practice and a
test bank. We ship eight PDFs.

Decisions, in the order they pay off:

| component | decision | why |
|---|---|---|
| **Teacher's Edition** | **yes, per level, from phase 25** | generated from the same modules by `book.py --teacher`, so it costs the `notes` field and nothing else. It is also what makes the series teachable by anyone but you |
| **Audio** | **spec and scripts yes, recordings deferred** | Part 5. Everything buildable gets built; the voices are procurement |
| **Practice tests** | **yes — one per half-volume** | the paper tooling exists (42 timed modules already). 3A and 3B each get a full test; a separate 6-test book follows the rebuild |
| **Diagnostic** | **yes, in the front matter** | 8 pages, keyed to units. Highest value per page in the book |
| **Workbook** | **deferred until all eight are rebuilt** | a workbook for a book that teaches badly is worthless. After the rebuild, ~120 pages a level of extra practice, most of it generated against the same references |
| **Online practice** | **no** | we have no delivery platform and inventing one is not a coursebook project |
| **Test bank** | **partial** | the item census is 6,385 items with 7,475 wrong-option lines, all typed by `qtypes.py`. A teacher-facing export (filter by type, band, topic; print a worksheet) is a small tool against data we already hold. Worth doing; not a book |

---

## Part 7 · What the series becomes, in pages

At +34 pages a unit, +2 units a volume, +42 pages of references and +32
of front matter and answer key:

| book | now | rebuilt | ships as |
|---|---|---|---|
| Foundation 1 | 442 | ≈ 930 | 1A + 1B |
| Foundation 2 | 475 | ≈ 965 | 2A + 2B |
| Volume 1 | 530 | ≈ 1,020 | 1A + 1B |
| Volume 2 | 548 | ≈ 1,040 | 2A + 2B |
| Volume 3 | 569 | ≈ 1,165 | 3A + 3B |
| Volume 4 | 579 | ≈ 1,070 | 4A + 4B |
| Volume 5 | 582 | ≈ 1,075 | 5A + 5B |
| Volume 6 | 572 | ≈ 1,065 | 6A + 6B |
| **total** | **4,297** | **≈ 8,330** | **16 student books** |

Plus **8 Teacher's Editions** (one per level, covering both halves) and
one 6-test practice book. 25 volumes, averaging 540 pages — the size we
already ship and already gate.

The series roughly doubles in length, and that is the correct outcome:
the audit's finding was that 85% of the words on the page are test
material and 15% are teaching. The rebuild does not cut the test
material. It adds the teaching.

---

## Part 8 · Phases at series scale

Phases 17–26 are Volume 3 (`IELTS_Textbook_Plan.md`, Part 9). Then:

| phase | work |
|---|---|
| 27 | `VOICES` table, recording scripts, track-list generator, `gate14.py` (every listening block has a track; every track has a script) |
| 28–31 | **Volume 4** rebuilt and split (4A, 4B) |
| 32–35 | **Foundation 2**, with the Bridge posture of Part 1 |
| 36–39 | **Foundation 1** |
| 40–43 | **Volume 1** |
| 44–47 | **Volume 2** |
| 48–51 | **Volume 5** |
| 52–55 | **Volume 6** |
| 56 | Teacher's Editions for all eight levels |
| 57 | The 6-test practice book; the test-bank export tool |
| 58 | Workbooks, if wanted |

Every phase ends the way the last fifteen did: `bash runall.sh <phase>`,
an `intent/<phase>.json` permission slip, `regress.py` clean against the
frozen baseline, `freeze.py`, a report, a push. Fourteen gates, no
exceptions, nothing ships red.

---

## Part 9 · What this plan would score, and what it would not

Against the 72-factor benchmark, today **82/222 (37%)**:

| category | now | after |
|---|---|---|
| A Orientation and navigation | 4/24 | 22/24 |
| B Lesson architecture | 3/30 | 27/30 |
| C Language syllabus | 12/30 | 27/30 |
| D Exam-skill training | 18/30 | 28/30 |
| E Productive skills | 14/24 | 22/24 |
| F Interest, content, life value | 9/24 | 21/24 |
| G Visual system | 10/24 | 22/24 |
| H Assessment and feedback | 10/18 | 16/18 |
| I Package | 2/18 | 12/18 |
| **total** | **82/222** | **≈ 197/222 (89%)** |

The 25 points it cannot reach:

1. **Photographs and human faces** — no image library is reachable.
   Generated vector art instead, which gates and re-renders; it does not
   put a face on the page.
2. **Recorded audio** — scripts, casting, pacing and track lists can all
   be built. Voices cannot.
3. **A learner error corpus** — `notes['watch']` predicts the error a
   learner at that band will make, from reasoning, not from data.
4. **Validated placement** — the diagnostic points a learner at a unit.
   Calling it a band score would need trialling against real candidates.
5. **Trialling of any kind.** Not one page of this series has been in
   front of a learner. Every claim in this document is about design and
   measurement, and the benchmark's own caveat applies: the Cambridge
   column is scored from the published series as I understand it, not
   from a page-by-page audit of the current editions.

---

## Part 10 · The one thing to decide now

Volume 3's phase 19 builds **one unit** — Unit 21, with all eleven beats,
all its figures, its `notes`, and gates 11–13 green for that unit alone.

Nothing else in this plan should start until that unit exists, because it
is the only honest test of whether 34 pages a unit buys what this
document claims it buys. If it does, the other 95 units are the same work
96 times. If it does not, we have spent one unit finding out.

Phase 17 (the three gates, written failing, and the six renderers) can
start immediately; it changes no content and breaks nothing.
