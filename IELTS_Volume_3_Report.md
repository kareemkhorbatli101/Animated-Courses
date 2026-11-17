# IELTS 2026 · Volume 3 — delivery report

**File:** `/home/user/Animated-Courses/IELTS_2026_B2_Volume_3.docx`
**Size:** 4.3 MB · 497 pages · 445 images
**Level:** CEFR B2 · target band 6.0 · Academic **and** General Training in one book
**Branch:** `claude/nice-davinci-om6fxb` (all work committed and pushed)

Volume 3 is the book that feeds Volume 4. It was written against the
measurements Volume 4 produced, so the prose habits that had to be fixed
retrospectively there were avoided here from the first unit.

---

## 1. What is in it

Ten units, five cycles each, on the architecture you specified: a cycle is one
sub-topic taken through all four skills, no cycle belongs to a module, and
grammar, vocabulary, expressions and transitions are woven inside the cycles
rather than parked in a reference section.

| | |
|---|---|
| Units | 10 (21–30) |
| Cycles | 50 |
| Readings | 60 (21,387 words of passage) |
| Recordings | 62 (21,049 words of script) |
| Speaking sets | 50 |
| Writing tasks | 50 (9,771 words of model answer) |
| **Gated questions** | 678 in the units + 40 Reading paper + 40 Listening paper = **758** |
| Grammar points | 50, with 250 worked items |
| Taught head words | 400 vocabulary + 200 expressions + 200 transitions |
| Original data visuals | 14 (5 bar charts, 4 line graphs, 2 pie charts, 1 table, 1 device schematic, 1 two-panel map) plus every cycle bar, skill bar, cue card, answer shape, outline frame, pattern box, criterion tag, loop panel and the reading-speed grid |

21 Education: Access and Outcomes · 22 Work: Automation and Skills ·
23 Public Health · 24 Climate and Adaptation · 25 Technology and Privacy ·
26 Tourism and Its Costs · 27 Urban Planning · 28 Food Security ·
29 Media and Trust · 30 Sport: Money and Ethics

Every unit runs from a General Training surface (a council notice, a privacy
notice, a consultation notice, a club membership scheme) through four short
texts of opinion and a data or process visual, and finishes on two Academic
passages that argue rather than inform.

## 2. Two timed papers and a speed tracker

**Reading paper** — Academic, three passages, 40 questions, 60 minutes, 2,200
words, with its own key and all forty explanations. Built to the arithmetic
unit 30 teaches: 7 minutes orienting and loading, 18 minutes of text at
125–140 wpm, **35 minutes for 40 questions — about 50 seconds each**, not the
90 you get by dividing 60 by 40.

**Listening paper** — four parts, 40 questions, 1,342 words of script, each
part written to the volume's own band, with its own key and forty
explanations. The scripts are printed in the audio-script section at the back.
Its rules page carries the point most courses have not updated: on the
computer-delivered test there is no ten-minute transfer window, only a
two-minute check.

**Reading-speed tracker** — a page of method, a table the student fills in,
and a chart with this volume's **125–140 wpm** band shaded, which they plot ten
points onto. The page says the thing that matters: a flat line across the
volume is a gain, not a plateau, because every unit is denser than the one
before it.

## 3. Your technique, as it is taught here

The loop is on every reading and every recording. Each unit adds the hard
variant of one Task 1 or reading skill, and the sequence is deliberate:

| Unit | Technique |
|---|---|
| 21 | The loop at 700 words: splitting a long paragraph |
| 22 | Matching Information across a 700-word passage |
| 23 | Two series that diverge: reading a graph against its caption |
| 24 | A combined chart: which dimension structures the answer |
| 25 | A device, not a sequence: apparatus before operation |
| 26 | Hybrid Task 1: two visuals of different shapes |
| 27 | Maps structured by zone instead of by time |
| 28 | Two charts, two shapes: the hybrid answer |
| 29 | Grouping categories that behave alike in a two-series chart |
| 30 | A full timed Reading paper at Volume 3 length |

Outlining runs one family per unit and ends in unit 30 with the whole toolkit
against a twelve-minute clock, so a student finds out which two tools they
personally use under pressure:

21 brainstorm ten, keep two · 22 spot the unequal · 23 passage to outline,
then outline to essay · 24 spot the overlap · 25 the four-sentence test ·
26 the six tests, then swap and judge · 27 passage to outline on a 720-word
text · 28 spot the intruder and the unequal · 29 essay to outline on a model
that hides its plan · 30 the whole toolkit, timed.

Speaking keeps the 2-to-5 rule as a model: every Part 1 set shows the shape,
every Part 3 set the five-sentence version with a concession in it, and cue
cards take the bullets in order with equal weight.

Writing teaches from your two files — the eleven essay structures used by
intent, with the model answer's notes naming the structure wherever a student
is meant to recognise it (structures 1 and 3 in unit 21, 11 in unit 25, 3 in
units 27 and 29, 1 and 11 in unit 30) and every Task 1 model marked against
your ten principles. There are no templates anywhere in the book.

## 4. The gates

| Gate | Result |
|---|---|
| `check.py` — content | 10 units, 400 head words, 2 timed papers, **all pass** |
| `check.py` — cross-volume seam | no head word taught in both Volume 3 and Volume 4 |
| `omit.py` — zero omissions | **4,670 strings checked, 0 missing** |
| `gate6.py` — no clipped text | **3,638 fitted runs, 0 overrun, 0 under 7.5px** |
| `density.py` — level | vocabulary **in window on all three sets** (below) |
| timed-paper gates | shape, lengths, part order, continuous numbering, 40 explanations each |

### Vocabulary (gated)

| set | 1k words | beyond 4k | words | verdict |
|---|---|---|---|---|
| Unit academic passages | 66.6% | 17.4% | 12,374 | in window |
| Timed Reading paper | 67.4% | 17.0% | 2,196 | in window |
| Both together | 66.7% | 17.4% | 14,570 | in window |
| **Volume 3 window** | 66.0–68.5 | 16.0–19.0 | | |

This is better than Volume 4 managed: there the timed paper sat 0.3 points
below the window floor. Here all three rows are inside it.

### Syntax (reported, not gated)

| set | mean sentence | nominalisation |
|---|---|---|
| Unit academic passages | 21.7 | 3.8% |
| Timed Reading paper | 23.7 | 4.6% |
| Volume 3 band | 21.0–24.0 | 4.0–5.5 |

Both rows sit in the Volume 3 band for sentence length. The split between
teaching texts and the exam simulation is the same deliberate one recorded for
Volume 4, and `density.py` still says so in its own docstring.

## 5. Defects found and fixed in this build

| # | Defect | Found by | Fix |
|---|---|---|---|
| 1 | Long Academic passages and Part 3/4 scripts under-written by 15–25% on first draft, in every unit | `check.py` | each lengthened with real paragraphs and turns, never filler |
| 2 | Head words colliding with Volume 4 or repeating inside Volume 3 — 31 in units 24–30 and about twenty more in units 21–23 | seam gate + `check.py` | all replaced; 400 words, no repeat anywhere in the series |
| 3 | The "New pedestrian route" label on the unit 27 map was painted over by the housing blocks and read as "lest" | visual check of the built file | rows moved up, route given its own clear band between them |
| 4 | The four-club table's "Wages as % of income" header shrank to an odd size | visual check | explicit column widths |
| 5 | The timed Reading paper's rules bar said "Four rules" above five rules | visual check | the subtitle now counts the rules it is heading |
| 6 | Six answer explanations shorter than the 30-character minimum, across four units | `check.py` | rewritten |
| 7 | The built file was named `..._B2_Volume_3.docx` | reading the output path | the filename now takes the volume's own CEFR level |

Items 3, 4 and 5 were invisible to every gate that reads the Python. They came
out of rendering the built file to PDF and looking at it, which is the same
argument the Volume 4 report made and the reason I did it again here.

## 6. Machinery added, which the rest of the series inherits

1. **Two and three visuals on one task.** `figure2` and `figure3` render
   alongside `figure` in readings, recordings and writing tasks. Units 26, 28
   and 30 need it; Volumes 5 and 6 will need it more.
2. **Rules bars that count their own rules**, so a paper with a different
   number of instructions cannot be mislabelled.
3. **Filenames carry the volume's CEFR level**, so two books at different
   levels cannot be confused in a folder.

## 7. Where it is still short

- **The Listening recordings are scripts, not audio.** Nothing in this volume
  produces sound.
- **Speaking and Writing are rated, not marked.** A student working alone gets
  less from those two strands than from Reading and Listening.
- ~~**The syntax window**~~ **Closed on 17 November.** `density.py` now gates
  the two syntactic numbers against a laddered window, and `density.py --ladder`
  checks the eight books together. Volume 3 measures **21.8 words a sentence**
  (window 20.9-22.9), longest sentence **50**, nominalisation **3.9%** — all in
  window. The gate failed six of the eight books when it was written, and about
  275 sentences across the series were split or merged to pass it; the worst
  failure was that the B1 book had the longest sentences in the series and the
  C1 book did not. The full account is in `IELTS_Syntax_Ladder_Report.md`,
  including what the gate still does not prove.
- **One Reading paper and one Listening paper.** No timed Writing or Speaking
  paper at this level.

## 8. Reproducing it

```bash
cd /home/user/Animated-Courses/ielts
python3 check.py 21-30     # 10 units, 400 head words, 2 timed papers, seam
python3 book.py 3          # builds the .docx
python3 omit.py 3 /home/user/Animated-Courses/IELTS_2026_B1plus_Volume_3.docx
python3 gate6.py 3         # no clipped text
python3 density.py 3       # the level, measured
```

## 9. What comes next

Volumes 3 and 4 are now both complete and gated, and the seam between them is
closed word by word. Volume 5 (B2 to the end, band 5.0–5.5) is the next book
in the plan; its speed band (170–185 wpm) and its density windows are already
in the machinery, so it starts with eight gates instead of three.

---

## 8. Correction, 16 November

Volume 3 was built and shipped labelled **B1+**, where the series plan has
always had it at **B2**, band 6.0 — the undergraduate-entry book. The label
was wrong in `book.py` and in all ten unit headers; the content, the bands
and the register window were set against B2 throughout and did not change.

The fix is surgical: `VOLS[3]` and the `level=` line of units 21 to 30. The
cover, the ten unit headers and the filename now read B2, and the file is
renamed `IELTS_2026_B2_Volume_3.docx`. Every gate was re-run on the rebuilt
file: all checks pass, the register window is unmoved (66.7% / 17.4% both
together), zero omissions across 4,670 strings, and 3,666 fitted runs with
no overrun and nothing under 7.5px. No occurrence of "B1+" survives
anywhere in the book.

---

## The ten-phase fix, as it landed in Volume 3

`IELTS_Fix_Plan.md` set out ten phases after the eight books were first
delivered. All ten have shipped, and this is what they put into this book.

| | |
|---|---|
| Pages, rebuilt | 559 |
| Rendered figures | 453 |
| Questions | 848 |
| Four-option items | 501 |
| Wrong-option lines written | 1503 |
| Speaking, as a share of a unit | 12.5-14.1% (floor 12%) |
| Exam-length reading inside the units | 10 reads of 700+ words, longest 732 |
| Band-6.5 second models | 10 |
| Part 2 long-turn models | 10, one per unit |
| Pronunciation and fluency pages | 10, one per unit |
| "Find the fault" error correction | 10, one per unit |
| Matching sentence endings | 1 set |
| Listening plan or map labelling | 1 set |

The answer-key page of this book now reads **"Every wrong option is
explained, because a letter on its own teaches nothing,"** and `check.py`
fails the build if a line is missing. The book was rebuilt and passes all
nine gates; `regress.py 8` reports no undeclared difference against the
baseline.

**What this does not prove.** The wrong-option lines are gated for
presence and for a 25-character floor, not for truth: `freeze.py` records
the field as a count, so a line rewritten at the same length moves nothing
in the baseline. Nobody has read all of them a second time. The full
account, including the three defects the invariance contract caught and
the five things the plan did not fix, is in
`IELTS_Fix_Plan_Completion_Report.md`.

---

## The balance plan, measured in this book

Phases 10 to 15 counted what the ten-phase fix plan never counted: how often each kind of question appears. `gate10.py` holds the answer against a floor, a ceiling and a rule that every type must be taught as a set of at least three questions in one exercise. Those numbers are a declared design target, not a measurement of a Cambridge paper, and the gate says so in its own docstring. What follows is this book, measured by `census.py`.

| | |
|---|---|
| Questions | 848 |
| Four-option items | 343 |
| Wrong-option lines | 1199 |
| Part 2 cue cards | 36 |
| Timed papers | Reading, Reading, Listening, Listening, Writing, Speaking |
| Speaking slots | Part 1 30% · Part 2 35% · Part 3 35% (target 25-40% each) |

### Reading · 435 questions

| task type | questions | share | largest set |
|---|---|---|---|
| multiple choice | 62 | 14.3% | 9 |
| True/False/Not Given | 17 | 3.9% | 3 |
| Yes/No/Not Given | 63 | 14.5% | 3 |
| matching information | 63 | 14.5% | 3 |
| matching headings | 30 | 6.9% | 3 |
| matching features | 50 | 11.5% | 4 |
| matching sentence endings | 5 | 1.1% | 5 |
| sentence completion | 122 | 28.0% | 4 |
| note/table/flow-chart completion | 3 | 0.7% | 3 |
| plan/map/diagram labelling | 4 | 0.9% | 3 |
| short answer | 16 | 3.7% | 5 |

### Listening · 413 questions

| task type | questions | share | largest set |
|---|---|---|---|
| multiple choice | 123 | 29.8% | 6 |
| matching | 24 | 5.8% | 4 |
| plan/map/diagram labelling | 13 | 3.1% | 5 |
| note/table/flow-chart completion | 115 | 27.8% | 10 |
| sentence completion | 125 | 30.3% | 4 |
| short answer | 13 | 3.1% | 3 |

`gate10.py` passes on this book: every type above is taught as a set of three or more, no type is over its ceiling, and no family is under its floor.
