# Volume 3, rebuilt: the pilot report

**18 November 2026 · IELTS Preparation Course, band 6.0 · units 21–30, 81 and 82**

This is the report on the pilot the benchmark asked for. In September the
series was scored against *Complete IELTS* on 72 factors; Volume 3 was then
chosen as the volume to rebuild first, because band 6.0 is the score most
undergraduate courses and most skilled visa routes ask for, and because the
volume was already complete enough that a rebuild would measure the
architecture rather than the authoring.

Volume 3 is now finished. Everything below is measured, not estimated, and
the three things that were **not** done are named at the end rather than
left for you to notice.

---

## 1. What you have

Six documents, all in the package:

| File | Pages | What it is |
|---|---|---|
| `IELTS_2026_B2_Volume_3.docx` | **1,037** | The complete volume: twelve units, every paper, all back matter |
| `IELTS_2026_B2_Volume_3A.docx` | **540** | Units 21–25 and 81, with a complete practice test |
| `IELTS_2026_B2_Volume_3B.docx` | **543** | Units 26–30 and 82, with a *second* complete practice test |
| `IELTS_2026_B2_Volume_3_Teachers_Edition.docx` | **1,156** | The whole volume with notes, answers and scripts on the page |
| `IELTS_2026_B2_Volume_3A_Teachers_Edition.docx` | **608** | Teacher's Edition of the first half |
| `IELTS_2026_B2_Volume_3B_Teachers_Edition.docx` | **595** | Teacher's Edition of the second half |

Page counts are real: each file was rendered to PDF and its pages counted.

Why both a single volume and a split: 1,037 pages is not a book anybody
carries. 3A and 3B are about 540 pages each, which is a book, and each half
carries its own answer key, scripts, references, glossary and practice test
rather than half of one. The single volume still builds from one command for
anybody who wants it.

---

## 2. The eleven beats

The audit found the old volume taught almost nothing before it tested: 113
of 124 inputs were set cold, and teaching prose was **15.1%** of the words
on the page. Every one of the fifty cycles now runs eleven beats in a fixed
order:

1. **Lead-in** — three or four questions from the learner's own life
2. **Preview input** — a short text or recording on the same subject, three questions, ninety seconds (reading in cycles 1, 3, 5; a recording in 2 and 4)
3. **Vocabulary work** — the words the main input needs, before it needs them, with their own figures
4. **Skills builder** — one sub-skill, explained, worked, and practised *out of exam format*
5. **Exam task** — the reading or listening task itself
6. **Exam-advice box** — what to do on the day, in four sentences
7. **Debrief** — why the wrong answers looked right, on the page rather than in the key
8. **Outside-the-exam line** — what this skill is for when nobody is marking
9. **Grammar** — a context text from this cycle, a noticing exercise, a contrast, two practices, and a pointer to the reference
10. **Productive slot** — the speaking or writing task
11. **Word list** — marking what is recycled from earlier units

**Measured result: teaching prose is 35.0% to 39.7% in all sixty cycles,
mean 36.7%**, against 15.1% at the audit. The floor is enforced by a gate,
so it cannot drift.

The Skills builder is the central change, and it is the one the benchmark
scored hardest against us. Sixty of them, and **no sub-skill is taught
twice in the volume** — the five cycle shapes recur in every unit, so the
slot is the same and the thing taught in it is different each time. Cycle 4
of unit 23 teaches a passage-to-outline move; cycle 4 of unit 30 teaches
telling an incentive paragraph from a consequence paragraph. That is a
syllabus rather than a sequence, and gate 13 enforces it.

---

## 3. The visual system

**344 declared figures** across the twelve units, every one of them carrying a
`teaches` field naming its job, drawn from a closed list of 26. A figure
with no job fails the build.

Twenty-two pedagogic figure types were written for this rebuild: word fields,
word families, clines, collocation frames, passage skeletons, paraphrase
bridges, signpost strips, question anatomies, decision trees, listening
maps, task-reading panels, language banks, band ladders, comparison
matrices, unit maps, clocks, trackers, timelines, scene-setters,
puzzles, route maps and stratigraphic sections. They are measured, not estimated: every text run is fitted against
real font metrics before it is drawn, and the gates report **0 overruns, 0
runs under 7.5px, and 0 blocks escaping their box** across all eight books.

No photographs. The constraint is stated honestly in the visual-system
document: we have no licensed image library, so every figure is drawn, and
drawn figures are better for teaching anyway because a diagram can carry an
argument that a photograph cannot.

---

## 4. The apparatus

What a book has that a pile of lessons does not:

- **Three contents tables.** By unit (cycle, sub-skill, reading tasks, listening tasks, reference), by exam task (all 11 reading and 6 listening types, with every cycle that teaches each), and by language (every reference entry and the cycles that point at it). All three are generated from the content, so none of them can drift from it.
- **A diagnostic.** Twenty questions, ten reading and ten listening, and the result is **not a band**: every question names the cycle that teaches what it tests. A learner who gets five wrong has five cycle numbers and a reason to open the book.
- **A progress record.** One page the learner writes on: ten rows, five columns, a date column, and the four section bands recorded twice six weeks apart.
- **Three back-matter references.** 24 Language entries, 6 Writing entries, 4 Speaking entries — **272 further practice questions with answers**. Each entry carries the full pattern (not the slice the cycle needed), the three errors learners at *this band* make, and eight more questions. Every grammar box in the volume ends with a pointer, and gate 13 fails the build if a pointer points at nothing.
- **A Teacher's Edition.** The same book, page for page, with the gate-11 notes at the head of every cycle (what task it serves, why, the sub-skill, what it builds on, the error to expect, timings with and without the free writing), the answer and reason under every question, a line on every wrong multiple-choice option saying why a learner was tempted by it, and the audio script after each listening task instead of a pointer to the back.
- **Two complete practice tests.** Reading, Listening, Writing and Speaking, in two forms. The second form is not the first one again: its Task 2 is the evaluate-this-claim question unit 30 teaches and the first form does not set.

---

## 5. The volume by the numbers

| | |
|---|---|
| Units | 12 (21–30, 81, 82) |
| Cycles | 60 |
| Skills builders | 60, no sub-skill repeated |
| Declared figures | 344 |
| Reading texts, previews included | 113 |
| Recordings | 97 |
| Exam and teaching items in the units | 2,517 |
| Reference entries | 34 Language, 6 Writing, 4 Speaking |
| Reference practice questions | 352 |
| Timed papers | 8 (two Reading, two Listening, two Writing, two Speaking) |
| Teaching prose | 35.0%–39.7%, mean 36.7% |
| Head words taught | 480 |

---

## 6. Verification

Seventeen gates, one command (`bash runall.sh <phase>`), all green:

| Gate | What it refuses to let through |
|---|---|
| `check.py` | band lengths, numbering, item shapes, every paper's structure |
| `density.py` | words per page, and the ladder between volumes |
| `book.py` | the document builds at all |
| `omit.py` | **8,868 strings checked — every passage, script turn, model, question and explanation is in the file** |
| `gate6.py` | every text run inside its figure box: 0 overruns, nothing under 7.5px |
| `gate8.py` | every block of prose inside its box: 0 escaping |
| `readiness.py` | a Foundation 2 leaver can read Volume 1 |
| `gate10.py` | 11 reading and 6 listening types in every book, none over its ceiling, speaking split 25–40% a part |
| `gate11.py` | teach before you test, and say why — the 35% prose floor, the notes, the beats |
| `gate12.py` | no figure without a job, and no figure that cannot be drawn |
| `gate13.py` | a syllabus, not a sequence — no repeated sub-skill, 50% recycling floor, every pointer resolves |
| `teachdemo.py` | all 22 pedagogic renderers at real content lengths: 436 fitted runs, 0 overruns |
| `regress.py` | **nothing changed that was not declared, anywhere in the other seven books** |

The regression gate is the one worth dwelling on. Each phase files an intent
slip naming exactly what it may change; the gate diffs every item, text and
prose slot in all eight books against the frozen baseline and fails on any
difference the slip does not name. Phase 27 declared 755 changes and the gate accepted 755 with no undeclared
difference. Volumes 1, 2, 4, 5, 6 and both Foundation books are
byte-identical to what they were before this rebuild started.

---

## 7. What is not done

Two things, stated plainly, and one of them is new since the first version
of this report.

**The audio is a script, not a recording.** Every listening task has a
measured script with named speakers, and the volume reads as though the
audio exists, but there are no sound files. The series rebuild plan carries
the spec for recording them — speaker count, accent spread, words per
minute, pause placement — and that is a studio job, not a writing one.

**The diagnostic exists for Volume 3 only.** It names Volume 3's cycles, so
it cannot be reused for another volume without being rewritten against that
volume's content. `DIAG_VOLS = {3}` in `book.py` is the guard; a diagnostic
that sent a learner to a cycle teaching something else would be worse than
none.

Units 81 and 82 were on this list in the first version of this report and
are now written. The two subject units the plan specified — animal
navigation and archaeology — are complete at five cycles each, and they
were written to do two jobs at once. The first was subject diversity: the
audit found Volume 3's ten topics repeating Volume 1's ten-for-ten, so a
learner working up the series met the same ten subjects six times and
reached Academic Reading Part 3 never having read a science passage with a
narrative in it. The second was task coverage, and the numbers moved:

| Reading task | before | now |
|---|---|---|
| plan, map and diagram labelling | 4 items | 14 |
| note, table and flow-chart completion | 3 | 26 |
| matching sentence endings | 5 | 11 |
| short answer | 16 | 35 |

---

## 7a. Three faults the gates were hiding

Writing these two units found three things wrong with the verification
itself, and they are worth reporting because each one had been passing
silently.

**`gate13`'s recycling rule had never fired.** The loop that decides which
units come after a given unit read a leftover index from the loop above it,
so the later-units list was empty for every unit in every book and the 50%
floor was never applied once. Found by measuring the shares by hand and
getting numbers the gate said did not exist. With it fixed, five units of
Volume 3 were below the floor — one at 22.5% — and units 81 and 82 were
written to repair that. The volume now passes the rule for the first time.

**`check.py` could not check a whole book.** It took a range of unit
numbers, and a book's units are no longer contiguous: Volume 3 is 21–30
plus 81 and 82, which no range can express without dragging in three other
volumes. It now takes `v3`. Checking the volume as one set immediately
found three head words taught twice inside it and one explanation used
twice — faults that had been invisible because the two halves were never
checked together.

**`gate12` checked that a figure declared a job but not that it could be
drawn.** Six figure specs in the new units named the right kind and the
wrong keys — a `listenmap` with `stages` instead of `speakers` and `turns`,
a `collocation` with `title` instead of `node` — and each one passed every
gate and then crashed the build on one missing key at a time. Rule 7 now
renders every declared figure to find out whether it renders.

All three are fixed in the tooling, not worked around in the content.

---

## 8. What the pilot tells you about the other seven books

The architecture held. Writing unit 21 took the longest; by unit 26 the
spec-driven generator (`mkunit.py`) was producing a unit's structural
furniture from a specification, leaving the authoring to be authoring. The
measured cost is **about 26 pages a unit** of rebuilt content, against the
34 the plan estimated — so the per-volume projection comes down, not up.

The rebuild order in the series plan stands: Volume 4 next, because it
shares Volume 3's level and its band is the one most of your students miss
by half a band; then Foundation 2 and Foundation 1, because the readiness
gate binds upwards; then Volumes 1, 2, 5, 6.

One warning for that work, from the three faults above. Volumes 1, 2 and
4–6 have never had `gate13`'s recycling rule applied to them, because it
has never run. When each is rebuilt it will be measured for the first time,
and on Volume 3's evidence roughly half its units will be under the floor.
That is authoring work to budget for, not a surprise to discover.

Nothing in Volumes 1, 2, 4, 5 or 6 has been touched. They are the same books
they were, and the regression gate proves it on every run.
