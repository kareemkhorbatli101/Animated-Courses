# IELTS 2026 — Volume 6 (C1, target band 7.5)

**Status: complete.** Ten units, fifty cycles, four timed papers, all five gates
green, built and visually verified.

---

## 1. What is in the book

| | |
|---|---|
| Units | 51–60, ten units, five cycles each — fifty cycles |
| Level | CEFR C1, target band **7.5** |
| New head words | 400, eight a cycle, none repeated inside the volume or across Volumes 3–5 |
| Timed papers | **four** — Reading, Listening, Writing, Speaking |
| Reading passages (units) | 20 academic passages, ~880 words each |
| Reading paper | 3 passages, 2 573 words, 40 questions, 60 minutes |
| Listening paper | 4 parts, 40 questions, three voices in Part 3 |
| Writing paper | both Task 1 forks + Task 2, with a model at band and a self-marking checklist |
| Speaking paper | three parts, the answer shape at band, a listen-back checklist |

### The ten units

| # | Theme | Technique page | Outlining move |
|---|---|---|---|
| 51 | Causation and Policy | The loop at 935 words under exam conditions | premise named and tested |
| 52 | Models and Their Assumptions | A device with a feedback loop, without anthropomorphism | one premise shared by every idea |
| 53 | Institutions and Incentives | Two charts that disagree, and which to believe | the premise test on your own side |
| 54 | Memory, History and Narrative | Absence in a chart, described without inventing it | an objection applied to itself |
| 55 | The Commons and Collective Action | Four series grouped by outcome, not by label | descriptive and prescriptive marked apart |
| 56 | Aesthetics and Judgement | Ranges on a chart: spread as well as centre | an unstated premise found by transfer |
| 57 | Language, Thought and Category | A break in series: a jump that is not a change | the word-versus-world substitution test |
| 58 | Prediction and Uncertainty | Three declining series: slope, not level | premise testing on an argument about probability |
| 59 | Consciousness and Explanation | A method and its interpretation, kept apart | the premise test on an argument from intuition |
| 60 | What a Test Measures | Four timed papers, against the clock | everything, on a question about the test |

Unit 60 is the volume's hinge: it is about the test itself — enquiries on
results, what practice for a test does and does not change, what a band score
is made of, validation as an argument about a *named inference*, and washback —
and its technique page hands the student straight into the four papers.

---

## 2. The four timed papers

This is the first volume in the series to carry all four sections at their real
length, on a candidate's terms.

**Reading** — three Academic passages (Tambora and the year without a summer;
how the metre was decided; the lighthouse and the limits of an example),
2 573 words, 40 questions, 60 minutes, no transfer time.

**Listening** — four parts, 40 questions, one hearing: an enquiry about a
residential course, a talk on a town's new bus contract, a three-voice
supervision about a dissertation design, and a lecture on the coming of
standard time.

**Writing** — both Task 1 forks are printed, because this book carries Academic
and General Training together. Task 1A is a four-series line graph of the age
of first-time home buyers; Task 1GT is a letter about a closed footpath; Task 2
is public money and the arts.

**Speaking** — three parts, 11 to 14 minutes, recorded.

Neither productive paper can be marked for the candidate, so what stands in for
an answer key is a **model written at band 7.5**, a note of what that model is
doing, criterion tags against the published assessment criteria, and a
checklist of six questions to run against your own script or recording.
Applying the checklist honestly is harder than being marked and teaches more.

---

## 3. The gates

All five gates pass on the whole volume.

| Gate | What it proves | Result |
|---|---|---|
| `check.py 51-60` | shape, length bands, question counts, answer spread, explanation length, word seams across volumes | **pass** — 10 units, 400 head words, 4 timed papers |
| `density.py 6` | the level on the cover, measured from the prose | **pass** — see below |
| `omit.py` | every passage, script turn, model, question and explanation is actually in the .docx | **pass** |
| `gate6.py` | no clipped or overrunning text in any figure | **pass** |
| build | the .docx renders | **pass** |

### Density: the level on the cover

The gated numbers rest on a word-rank list that is a property of English, so
the window transfers from the parallel TOEFL series without an assumption.

| | 1k share | beyond 4k | window |
|---|---|---|---|
| unit academic passages | 62.6 % | 23.8 % | 60.5–63.5 / 22.5–25.5 |
| with the Reading paper | **62.8 %** | **23.4 %** | **in window** |

This did not come free, and it is the most substantial piece of work in the
volume. On first draft the passages measured **67.0 % / 19.2 %** — that is,
*lexically lighter than Volume 4*, which is an indefensible thing for a C1 book
to be. Closing it took two passes:

1. A table of 110 word-level substitutions, every rule inspected at every site
   it fires and the dropped rules recorded with the sentence that killed them
   (`wrong → mistaken` died on "is mistaken by a stated amount";
   `very → highly` on "there is highly little of it").
2. **102 paragraphs rewritten by hand** in heavier academic register, at the
   same length, with the same content, preserving every answer token and every
   paragraph number — because the matching-headings and summary questions
   reference both.

The two *reported* numbers — mean sentence length 22.2, nominalisation 5.5 % —
are not gated, and `density.py` explains why: the only window available for
them was calibrated on textbook prose, and IELTS Academic passages are adapted
journalism. Gating this book against that window would assert an equivalence
nobody has measured. They sit on the Volume 3–4 rung of the TOEFL ladder, and
`calibrate.py` settles the question in one command the moment real Cambridge
passages can be supplied.

---

## 4. Machinery written before the content

Four new renderers and their gates, built and verified before a word of
Volume 6 was written:

- `render_wpaper` / `wpaper_key` and `render_spaper` / `spaper_key` in `book.py`
- `check_wpaper` / `check_spaper` in `check.py` — both Task 1 forks present,
  model inside the band and above the rubric floor, three notes and four
  marking checks on every task; Part 2 and only Part 2 carries a cue card,
  the answer shape uses only the three taught moves
- `wpaper_wanted` / `spaper_wanted` in `omit.py`
- `vol_of`, `seam()` and `density.texts()` generalised, so that a new volume of
  ten units needs no edit to any gate

Four defects in the shared machinery were also found and fixed while building
this volume:

1. **`bar_chart` could not cross zero** — a bar for a fall of three points had
   negative height and rendered as nothing. Now computes a zero line and draws
   from it; all-positive charts are byte-identical.
2. **Outline-frame headers clipped** — Volume 5 and 6 theses are long
   sentences; the header hit the 8 px floor and still ran 1 180 px into an
   844 px box. Now wrapped, with the frame grown to fit.
3. **Volume-blind speed example** — "700 ÷ 5 = 140 wpm" printed in every
   volume, i.e. Volume 3's target beside a chart shaded 170–185. Now derived
   from the volume's own band.
4. **Seam gate scanned the wrong range** — `seam()` picked the other volume's
   units with two-way conditionals written when only Volumes 3 and 4 existed,
   so Volume 5 scanned units 31–40 under its own name. Now derived from the
   volume number. Volume 5's own result was sound.
5. **A cycle without an answer shape crashed the build** rather than printing a
   blank page. Unit 54's second cycle shipped without one; `check.py` now
   requires three moves with legible lines on every cycle.

---

## 5. What is still open

- The **syntax window** (sentence length, nominalisation) remains a recorded
  decision rather than a measurement, for the genre reason above. One command
  closes it given real Cambridge passages.
- Fifteen outline frames in **Volumes 3 and 4** are set small to fit a thesis
  on one line. They are *not* clipped, and a rebuild of those two volumes would
  now set them at full size with wrapped headers.

---

## 6. Files

- `IELTS_2026_C1_Volume_6.docx` — the book
- `IELTS_Volume_6_Report.md` — this report

Branch `claude/nice-davinci-om6fxb`.
