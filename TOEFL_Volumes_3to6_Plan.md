# TOEFL iBT® 2026 — Volumes 3 to 6
## Improve the B2 half, then build B2-exit and C1

*Every number in section 1 is measured, by `seam.py` and `profile.py`, both
committed. Nothing here is a judgement about what a B2 learner "probably"
needs.*

---

## 1. What the measurements found

### The seams

`seam.py` asks one question at every join: how many distinct words does a
leaver of one stage meet in the next volume's passages that they have never
been taught and that are not in the control band? Derivations of a known stem
are credited, because Foundation 2 teaches the -tion/-ment/-ity, -ous/-ive and
un-/in-/re- families by name.

| Seam | Worst passage | Mean | Over the book's own threshold of 15 |
|---|---|---|---|
| Foundation 1 → Volume 1 | 33 | 11.4 | 14 of 40 |
| Foundation 2 → Volume 1 | 7 | **1.4** | 0 of 40 |
| Volume 1 → Volume 2 | 17 | 6.8 | 2 of 40 |
| Volume 2 → Volume 3 | 19 | 8.2 | 3 of 40 |
| **Volume 3 → Volume 4** | **24** | **10.8** | **5 of 40** |

The widest real seam in the series is inside the B2 half, not at the
Foundation join we just closed.

### Why it is wide

Volumes 1–2 teach 36 words a unit. Volumes 3–4 teach 18, while their passages
get longer and denser. Every word those volumes use and never teach comes to
622, a mean of 31 a unit (`v34_newlex.json`) — but that is not the number to
fix, because at B2 meeting an unknown word and inferring it is the skill. The
number to fix is the one that brings every passage under the course's own
threshold of fifteen: **63 words, a mean of 3 a unit and a worst unit of 12**,
in `v34_teach.json`. Five passages of forty are over the threshold today, and
those five are where the 63 words live.

### The prose ladder

`profile.py` measures the academic passages themselves against a 10,000-form
frequency ranking.

| Volume | from 1st 1k | beyond 4k | mean sentence | nominalisation |
|---|---|---|---|---|
| Foundation 1 | 83.6% | 3.7% | 10.0 | 0.6% |
| Foundation 2 | 77.9% | 8.2% | 12.4 | 1.3% |
| Volume 1 | 72.3% | 11.5% | 16.7 | 1.6% |
| Volume 2 | 69.6% | 14.2% | 18.8 | 3.1% |
| Volume 3 | 69.1% | 15.5% | 19.6 | 3.3% |
| Volume 4 | 67.6% | 17.9% | 24.5 | 5.0% |

The ladder is clean except at one step: **Volume 3 is a near-repeat of Volume
2** on every measure. The badge on the cover changes and the text barely does.
The cause is structural — `_check_b2` gives all twenty B2 units one flat
passage band of 255–300 words, so nothing inside the B2 half is required to
rise.

### And the asymmetry nobody had counted

| | academic passages a unit | words of academic reading |
|---|---|---|
| Foundation 1 | 3 | 3,895 |
| Foundation 2 | 3 | 5,973 |
| Volume 1 | 1 | 2,417 |
| Volume 2 | 1 | 2,344 |
| Volume 3 | 1 | 2,720 |
| **Volume 4** | **1** | **2,914** |

The A2–B1 bridge has more than twice the academic reading of the B2 book. The
Foundation volumes got five cycles a skill; Volumes 1–4 were left at three.

---

## 2. The shape of the six volumes after this work

| Volume | Level | Section band | Units | Cycles a skill | Test |
|---|---|---|---|---|---|
| Foundation 1 | A1–A2 | — | 1–10 | 5 | Progress F, 59 |
| Foundation 2 | A2–B1 | — | 1–10 | 5 | Progress F2, 77 |
| Volume 1 | B1 | 3.0–4.0 | 1–10 | 3 | Practice 1, 97 |
| Volume 2 | B1 | 3.0–4.0 | 11–20 | 3 | Practice 2, 97 |
| **Volume 3** | **B2 entry** | 4.5–5.5 | 21–30 | **5** | Practice 3, 97 |
| **Volume 4** | **B2 core** | 4.5–5.5 | 31–40 | **5** | Practice 4, 97 |
| **Volume 5** | **B2 to the end** | **5.0–5.5** | **41–50** | **5** | **Practice 5, 97** |
| **Volume 6** | **C1** | **5.5–6.0** | **51–60** | **5** | **Practice 6, 97** |

ETS confirms the 2026 scale: **1–6 in half bands**, one band per section, and
the overall band is the *average* of the four rounded to the nearest half. That
last detail is a page in Volume 6 on its own: at the top of the scale your
weakest section sets your score, so one 4.5 in Speaking costs you the band
however good the other three are.

### The targets, as a continuation of the measured ladder

These become gate 9 — floors, not guidance. The Foundation volumes are gated by
a **ceiling** (nothing outside the band); the upper volumes need the opposite,
a **floor** on density, or "B2" is a label rather than a level.

| | r3 passage | r4/r5 passage | from 1st 1k | beyond 4k | mean sentence | nominalisation |
|---|---|---|---|---|---|---|
| Volume 3 | 255–300 | 280–330 | ≤ 68.5% | ≥ 16.0% | ≥ 21.0 | ≥ 4.0% |
| Volume 4 | 255–300 | 320–380 | ≤ 67.0% | ≥ 18.5% | ≥ 24.0 | ≥ 5.0% |
| Volume 5 | 270–310 | 360–410 | ≤ 65.0% | ≥ 21.0% | ≥ 26.0 | ≥ 6.0% |
| Volume 6 | 280–320 | 400–450 | ≤ 62.0% | ≥ 24.0% | ≥ 28.0 | ≥ 7.0% |

`r3` stays at the real test's own passage length in every volume, because that
is the task. The two new academic cycles carry the ramp and run *longer than
the test*, which is how reading speed is actually built: train above the
distance you race.

---

## 3. What changes in Volumes 3 and 4

1. **Teach to the threshold, not to zero.** The first count said 622 words —
   every word Volumes 3–4 use and never teach, 31 a unit. That was the wrong
   target: a B2 reader is supposed to meet unknown words and infer them, and
   the standard is the one the course itself gives the student, fifteen a
   passage. Teaching to *that*, greedily and worst-passage-first, needs **63
   words across the twenty units — a mean of 3 and a worst unit of 12**
   (`v34_teach.json`). So the eighteen academic words each unit already has
   stay, and a list of **12 field words** covers both the unit's seam list and
   the vocabulary its two new cycles need: 40 taught items a unit against
   Volumes 1–2's 36.
2. **Five cycles a skill.** Reading 4 and 5, Listening 4 and 5, Writing 4 and
   5, Speaking 4 and 5 — the machinery the Foundation volumes already use
   (`ITEMS_A2X`, `SHAPE_A2X`), ported to B2 as `ITEMS_B2X` and `SHAPE_B2X`.
   Academic reading per unit goes from ~270 words to ~900.
3. **Volume 3 steps up.** The flat 255–300 band is replaced by a per-unit
   curve, and the new cycles are written to the Volume 3 column above, which
   moves the volume's average off Volume 2's.
4. **Cycle 5 is the objection**, as in Foundation 2: cycle 4 teaches the
   field's central claim and cycle 5 gives that claim its strongest
   counter-argument. At B2 and above this is not a flourish — the test's
   writing task is an academic discussion, and a student who cannot state the
   other side cannot score at the top of it.

Nothing already in Volumes 3–4 is thrown away. The existing three cycles,
`stance`, `nuance`, `family`, `fault` and the band pairs all stay.

---

## 4. Volume 5 — B2 to the end (units 41–50)

The volume that finishes B2 rather than entering it. Band target 5.0–5.5.

- Passages 270–310 (test length) and 360–410 (the stamina cycles).
- Vocabulary: the Academic Word List is spent by Volume 2 and the measured gap
  by Volume 4, so Volume 5 teaches the next tier — academic vocabulary at
  frequency ranks ~6,000–10,000, discipline terminology, and multi-word units,
  which is where B2 readers actually stall.
- The skills that separate 4.5 from 5.5: hedging and stance at paragraph
  scale, cohesion across a whole text, paraphrase without lexical repetition,
  inference and rhetorical-purpose questions, and integrated note-taking.
- Ten subjects, continuing the series' fields rather than repeating them.

## 5. Volume 6 — C1 for the top band (units 51–60)

Not more language for its own sake: the volume that turns B2–C1 competence into
5.5–6.0. Band target 5.5–6.0.

- Passages 280–320 and 400–450, at the density floors above.
- **Your weakest section sets your band.** The overall score is the average of
  four, so the book is built around diagnosis and repair of the weak section
  rather than uniform practice.
- Ceiling performance: speed and precision under time, the question types that
  separate the top two bands, writing with range and register control,
  speaking fluently at length.
- Four full timed forms in the back matter, not one, so the last stretch is
  practice under real conditions.

---

## 6. Gates

Existing gates extend to the new volumes. Two are new.

| | Gate | New? |
|---|---|---|
| 1 | Structural — `check.py 21-40`, `41-50`, `51-60` | extended: `SHAPE_B2X`, `ITEMS_B2X`, per-unit curves to unit 60 |
| 2 | Vocabulary — band ∪ taught ∪ derivations ∪ names | extended: `deriv=True` above B1 |
| 3 | Containment — nothing a later volume owns | extended |
| 4 | Handoff — every point has a named prerequisite | extended to the V4→V5 and V5→V6 joins |
| 5 | Test shape — `checktest.py 5 6` | extended |
| 6 | No clipped text — `gate6.py 5 6` | unchanged |
| 7 | Readiness — `seam.py`, every join under 15 | **replaces gate 7's single join** |
| 8 | Zero omissions — `omit.py` per volume | unchanged |
| 9 | **Density floors** — `profile.py` targets asserted per volume | **new** |

Gate 9 is the one that makes the two new covers honest. A volume that claims C1
and profiles at B2 fails the build.

---

## 7. Order of work

1. Machinery: `SHAPE_B2X` / `ITEMS_B2X`, the per-unit curves for units 21–60,
   gate 9, and the vocabulary-page change. **Gates before content, as always.**
2. Volumes 3 and 4: the 622 words, then the academic cycles, ten units at a
   time.
3. Volume 5, with Practice Test 5.
4. Volume 6, with Practice Test 6 and the four timed forms.
5. Rebuild all eight, run all nine gates, repackage.

This is about forty units of authoring at the highest density in the series —
more text than Foundation 1 and 2 together. It will take several sittings, and
each one ends with a volume that builds and passes its gates rather than a
half-finished one.
