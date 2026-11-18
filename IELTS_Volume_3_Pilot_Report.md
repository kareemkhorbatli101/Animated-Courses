# Volume 3, rebuilt: the pilot report

**18 November 2026 · IELTS Preparation Course, band 6.0 · units 21–30**

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
| `IELTS_2026_B2_Volume_3.docx` | **879** | The complete volume: ten units, every paper, all back matter |
| `IELTS_2026_B2_Volume_3A.docx` | **462** | Units 21–25 with a complete practice test |
| `IELTS_2026_B2_Volume_3B.docx` | **462** | Units 26–30 with a *second* complete practice test |
| `IELTS_2026_B2_Volume_3_Teachers_Edition.docx` | — | The whole volume with notes, answers and scripts on the page |
| `IELTS_2026_B2_Volume_3A_Teachers_Edition.docx` | **519** | Teacher's Edition of the first half |
| `IELTS_2026_B2_Volume_3B_Teachers_Edition.docx` | **508** | Teacher's Edition of the second half |

Page counts are real: each file was rendered to PDF and its pages counted.

Why both a single volume and a split: 879 pages is not a book anybody
carries. 3A and 3B are about 460 pages each, which is a book, and each half
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

**Measured result: teaching prose is 35.0% to 39.7% in all fifty cycles,
mean 36.6%**, against 15.1% at the audit. The floor is enforced by a gate,
so it cannot drift.

The Skills builder is the central change, and it is the one the benchmark
scored hardest against us. Fifty of them, and **no sub-skill is taught
twice in the volume** — the five cycle shapes recur in every unit, so the
slot is the same and the thing taught in it is different each time. Cycle 4
of unit 23 teaches a passage-to-outline move; cycle 4 of unit 30 teaches
telling an incentive paragraph from a consequence paragraph. That is a
syllabus rather than a sequence, and gate 13 enforces it.

---

## 3. The visual system

**284 declared figures** across the ten units, every one of them carrying a
`teaches` field naming its job, drawn from a closed list of 26. A figure
with no job fails the build.

Twenty pedagogic figure types were written for this rebuild: word fields,
word families, clines, collocation frames, passage skeletons, paraphrase
bridges, signpost strips, question anatomies, decision trees, listening
maps, task-reading panels, language banks, band ladders, comparison
matrices, unit maps, clocks, trackers, timelines, scene-setters and
puzzles. They are measured, not estimated: every text run is fitted against
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
| Units | 10 (21–30) |
| Cycles | 50 |
| Skills builders | 50, no sub-skill repeated |
| Declared figures | 284 |
| Reading texts, previews included | 91 |
| Recordings | 83 |
| Exam and teaching items in the units | 2,088 |
| Reference practice questions | 272 |
| Timed papers | 8 (two Reading, two Listening, two Writing, two Speaking) |
| Teaching prose | 35.0%–39.7%, mean 36.6% |
| Head words taught | 400 |

---

## 6. Verification

Seventeen gates, one command (`bash runall.sh <phase>`), all green:

| Gate | What it refuses to let through |
|---|---|
| `check.py` | band lengths, numbering, item shapes, every paper's structure |
| `density.py` | words per page, and the ladder between volumes |
| `book.py` | the document builds at all |
| `omit.py` | **7,583 strings checked — every passage, script turn, model, question and explanation is in the file** |
| `gate6.py` | every text run inside its figure box: 0 overruns, nothing under 7.5px |
| `gate8.py` | every block of prose inside its box: 0 escaping |
| `readiness.py` | a Foundation 2 leaver can read Volume 1 |
| `gate10.py` | 11 reading and 6 listening types in every book, none over its ceiling, speaking split 25–40% a part |
| `gate11.py` | teach before you test, and say why — the 35% prose floor, the notes, the beats |
| `gate12.py` | no figure without a job |
| `gate13.py` | a syllabus, not a sequence — no repeated sub-skill, 50% recycling floor, every pointer resolves |
| `teachdemo.py` | all 20 pedagogic renderers at real content lengths: 380 fitted runs, 0 overruns |
| `regress.py` | **nothing changed that was not declared, anywhere in the other seven books** |

The regression gate is the one worth dwelling on. Each phase files an intent
slip naming exactly what it may change; the gate diffs every item, text and
prose slot in all eight books against the frozen baseline and fails on any
difference the slip does not name. Phase 21 declared 960 additions and the
gate accepted 960 with no undeclared difference. Volumes 1, 2, 4, 5, 6 and
both Foundation books are byte-identical to what they were before this
rebuild started.

---

## 7. What is not done

Three things, stated plainly.

**Units 81 and 82 are specified and not built.** The plan for Volume 3
describes twelve units: ten themed units plus two consolidation units at the
end. The ten are finished. 81 and 82 would each need a full set of passages,
scripts, models and about seventy items written from scratch, and I judged
that finishing the ten units with complete apparatus was worth more to you
than twelve units with thinner back matter. The unit-map table already has
them (`VOL_UNITS[3]` carries 81 and 82), so adding them is authoring work,
not plumbing.

**The diagnostic exists for Volume 3 only.** It names Volume 3's cycles, so
it cannot be reused for another volume without being rewritten against that
volume's content. `DIAG_VOLS = {3}` in `book.py` is the guard; a diagnostic
that sent a learner to a cycle teaching something else would be worse than
none.

**The audio is a script, not a recording.** Every listening task has a
measured script with named speakers, and the volume reads as though the
audio exists, but there are no sound files. The series rebuild plan carries
the spec for recording them — speaker count, accent spread, words per
minute, pause placement — and that is a studio job, not a writing one.

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

Nothing in Volumes 1, 2, 4, 5 or 6 has been touched. They are the same books
they were, and the regression gate proves it on every run.
