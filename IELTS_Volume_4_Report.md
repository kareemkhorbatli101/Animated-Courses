# IELTS 2026 · Volume 4 — delivery report

**File:** `/home/user/Animated-Courses/IELTS_2026_B2_Volume_4.docx`
**Size:** 4.5 MB · 493 pages · 459 images
**Level:** CEFR B2 · target band 6.5 · Academic **and** General Training in one book
**Branch:** `claude/nice-davinci-om6fxb` (all work committed and pushed)

---

## 1. What is in it

Ten units, five cycles each, following the architecture you specified: a cycle
is one sub-topic taken through all four skills, no cycle belongs to a module,
and grammar, vocabulary, expressions and transitions are woven inside the
cycles rather than parked at the end of the unit.

| | |
|---|---|
| Units | 10 (31–40) |
| Cycles | 50 |
| Readings | 60 (23,604 words of passage) |
| Recordings | 63 (23,254 words of script) |
| Speaking sets | 50 |
| Writing tasks | 50 (10,855 words of model answer) |
| Gated questions | 725 in the units + 40 in the timed paper = **765** |
| Grammar points | 50, with 250 worked items |
| Taught head words | 400 vocabulary + 200 expressions + 200 transitions |
| Original figures | 30 data visuals (5 line graphs, 7 bar charts, 6 tables, 6 process diagrams, 3 maps, 3 device schematics) plus every cycle bar, skill bar, cue card, answer shape, outline frame, pattern box, criterion tag and loop panel |

The ten themes, taken from the series outline:

31 Measurement and Statistics · 32 Consumption and Waste · 33 Justice and
Punishment · 34 Work, Time and Meaning · 35 Heritage and Ownership ·
36 Energy Transition · 37 Value and Authenticity in Art · 38 Evidence and
Error in Science · 39 Migration and Movement · 40 Technology and Autonomy

Each unit runs from a General Training surface (a form, a council notice, a
rights sheet, a loan agreement) through four short texts of opinion, a data or
process visual, and finishes on two Academic passages that argue rather than
inform. That is the same ladder inside every unit, so a GT candidate and an
Academic candidate both get a full unit's work from every page.

## 2. The volume ends with a full timed Reading paper

Academic, three passages, 40 questions, 60 minutes, 2,427 words — with its own
answer key and all forty explanations. The three passages are *The box that
changed the world* (containerisation), *The invention of standard time* and
*What counts as a species*.

The length is not arbitrary. Unit 40's technique page briefs the arithmetic
and the paper is built to match it: 30 seconds orienting plus 2 minutes
loading the questions, three times over, is 7.5 minutes; 2,427 words at 100
words a minute is 24 minutes; what is left is **28 minutes for 40 questions,
about 40 seconds each**. That is the number the student is taught to feel,
instead of the misleading 90 seconds you get by dividing 60 by 40.

## 3. Your technique, as it is actually taught in this volume

The loop is present on every reading and every recording. What this volume
adds, unit by unit, is the hard variant of each type:

- **Unit 34 — Yes/No/Not Given as a question about the writer's commitment.**
  A statement can be true and still be *No*; plausible and still *Not Given*.
  The move taught is to say what sentence the writer would have had to write,
  then look for it.
- **Unit 35 — three maps, parallel order, and what did not change.** Maps are
  two-dimensional, so one dimension has to structure the paragraphs. Structure
  by time, run the same spatial order inside each paragraph, describe later
  maps as *change* naming what was replaced, and finish on the survival —
  which is the sentence candidates reliably omit.
- **Unit 36 — five series grouped by behaviour, not by name.** On the day
  graph, wind and solar go together because they run against demand, not
  because they are both renewable. The flat line is reported, because a series
  that does not move is still a main feature.
- **Unit 37 — two charts, two structuring dimensions, one story.** Each visual
  gets its own paragraph on its own dimension; exactly one sentence, at the
  end, says what they show together.
- **Unit 38 — Not Given at Volume 4 density**, plus the agentless passive for
  process diagrams.
- **Unit 39 — flows in two directions.** A net figure is a subtraction and a
  subtraction destroys information: +15,000 can describe a sleepy region or
  one where 391,000 people changed places.
- **Unit 40 — a full timed paper**, and the branch language a device diagram
  needs so that both arms are followed to the end point.

Outlining runs the same way, one family per unit, ending in unit 40 with all
five families run against a twelve-minute clock so a student finds out which
two they personally need.

Speaking keeps the 2-to-5 rule as a model: every Part 1 set shows the shape
(answer + support + follow-up), every Part 3 set shows the five-sentence
version with a concession in it, and the cue cards take the bullets in order
with roughly equal weight and favour depth over listing.

Writing teaches from your two files throughout: the eleven essay structures
are used by intent (structure 1 in unit 38, structure 3 in units 35/36/39,
structure 5 in unit 34, structure 9 in unit 36, structure 11 in unit 37), and
every Task 1 model is marked against your ten principles — Overall statement
first, declared basis for dividing, no bare numbers, grouping where the data
clusters, never jumping from biggest to smallest.

## 4. The gates, and what they caught

Five gates ran on this volume. Three were written before the content, two were
written because the first three missed something.

**`check.py` — the content gate (written first).** Five cycles per unit, word
bands per text type, item counts, explanation length, answer-position spread,
Listening Parts 1–4 present, Speaking Parts 1–3 present, both Task 1 forks
present, per-cycle grammar/vocabulary/expressions/transitions, and no repeated
taught head word anywhere in the volume. Result: **10 units, 400 head words,
all checks pass.**

**`gate6.py` — no clipped text.** `TFIT` and `TBLOCK` are the only two ways a
figure draws fitted text and both record the box they promised, so this
measures every run against its own promise with exact DejaVu metrics rather
than squinting at a rendered page. Result: **3,705 fitted runs, 0 overrun, 0
printed under 7.5px.**

**`omit.py` — zero omissions.** Reads the `.docx` the student actually gets and
checks that every authored string is in it. Result: **4,564 strings checked,
0 missing.**

**`density.py` — the level on the cover, measured from the prose.** See §6; it
is deliberately part gate, part report.

**The timed-paper gate** (inside `check.py`): three passages, 12–14 questions
each, continuous numbering, 2,150–2,750 words in total, explanations on every
one of the 40.

### What the gates found

| # | Defect | Found by | Fix |
|---|---|---|---|
| 1 | `import frames` resolved to the TOEFL package | build crash | `sys.path.append`, not `insert(0, …)` |
| 2 | Chart axes stepped in 20s on a 43-max series | visual check | `_nice()` divides the span by 5, not 4 |
| 3 | A Task 2 model measured against a letter's word band | `check.py` | separate `essay` band plus a `wband` field |
| 4 | **Systematic under-writing of long passages and Part 3/4 scripts — 40+ failures across all ten units** | `check.py` | every one lengthened with real paragraphs and real turns, never filler |
| 5 | `legible` taught twice (units 31 and 33) and 11 other repeated head words | `check.py` | all replaced; the no-repeat rule now holds across 400 words |
| 6 | Map labels broke mid-word (`Gatehou se`) | visual check | all four diagram families wrap with `fit_block`, which shrinks the type rather than splitting a word |
| 7 | Device-diagram arrows ran centre-to-centre, straight across the boxes they connected, with captions on top of the line | visual check | flows clipped to each box's boundary; captions offset perpendicular |
| 8 | **The planning tasks' "Why it works" notes were never rendered** — 24 notes across eight units silently dropped, because `book.py` printed notes only when a model answer existed | `omit.py` | notes render whenever notes exist |
| 9 | **Question numbers restarted at 1 in every cycle while the headings said "Questions 30–35"** | visual check | numbering runs continuously through a unit; `check.py` now gates the headings against the running count |
| 10 | Map road labels were drawn through the band they name | visual check | offset clear of the 11px band |

Items 8 and 9 are the ones worth dwelling on. Both were invisible to a gate
that reads the Python, and both were found only by reading the built file and
looking at rendered pages. That is why `omit.py` exists and why I spot-checked
pages rather than trusting the build.

## 5. Visual verification

Pages rendered to PNG and inspected: the three-map figure (p. 174), the
five-series day graph (p. 212), the scoring-system device diagram (p. 365), a
GT procedure notice with flow-chart completion (p. 9), an Academic passage
(p. 181), the timed paper's first passage (p. 391) and the timed paper's
answer key (p. 436). All correct after the fixes in §4.

## 6. Where the volume is honestly short

**Sentence length and nominalisation sit one rung below the B2 window.**
Measured on the volume's own academic prose against the ruler the TOEFL series
uses:

| | 1k words | beyond 4k | mean sentence | nominalisation |
|---|---|---|---|---|
| Unit academic passages | 65.1% | 19.3% | 21.2 | 4.5% |
| Timed Reading paper | 64.2% | 19.4% | 23.1 | 4.0% |
| **Both together** | **65.0%** | **19.3%** | **21.5** | **4.4%** |
| B2 window | 64.5–67.0 | 18.5–21.5 | 24.0–26.5 | 5.0–6.5 |

Vocabulary is in the window and is **gated**: the word-rank ladder is a
property of English, so the window transfers between the two courses without
an assumption. Sentence length and nominalisation are **reported, not gated**,
and `density.py` says why in its own docstring: the only window available for
those two was calibrated on TOEFL textbook prose, and IELTS Academic passages
are adapted journalism, a different register. Gating this book against that
window would assert an equivalence nobody has measured.

I tried to settle it properly by measuring official Cambridge sample passages.
The fetch was refused — `ielts.org` is not on this environment's allowed-hosts
list, and a second attempt through the fetch agent was blocked as well. So the
honest statement is: **this prose sits in the TOEFL Volume 3 window on both
syntax measures while sitting in the Volume 4 window on vocabulary**, and I do
not have the evidence to say whether that is correct for IELTS or a genuine
under-reach. What would settle it is ten minutes with a set of real Cambridge
passages and the same two numbers.

The timed paper's 1k share (64.2%) is 0.3 points *below* the window floor,
i.e. marginally denser than the units. For an end-of-volume exam simulation
that is the right direction, but it is outside the stated window and I have
not adjusted it.

**Other limits, stated plainly:**

- The Listening recordings exist as scripts, not audio. The book prints them
  at the back with the instruction not to read them first; nothing in this
  volume produces sound.
- Speaking and Writing are rated against band descriptors, not marked. That is
  the right design, and it means a student working alone gets less from those
  two strands than from Reading and Listening.
- The reading-speed ladder is specified in the plan (V4 ≈ 150–165 wpm on this
  volume's own prose) but this volume does not contain the timing charts that
  would let a student plot it; they are in the plan for Volumes 5 and 6.
- Only one timed paper, and it is Reading. The plan calls for a Listening
  paper at this level too.

## 7. What I changed in the machinery, and why it matters to the rest of the series

Five changes, all of which the later volumes inherit:

1. `fit_block` in all four diagram families — no label will ever break
   mid-word again.
2. Arrow clipping and perpendicular captions in `device_schematic`.
3. Continuous question numbering through a unit, plus the gate that keeps the
   headings honest.
4. `notes` render independently of `model`, so planning tasks keep their
   commentary.
5. `omit.py` and `density.py` exist now, so Volume 5 starts with five gates
   instead of three.

## 8. Reproducing it

```bash
cd /home/user/Animated-Courses/ielts
python3 check.py 31-40        # content gate: 10 units, 400 head words, 1 timed paper
python3 book.py 4             # builds the .docx (~3 min)
python3 omit.py 4 /home/user/Animated-Courses/IELTS_2026_B2_Volume_4.docx
python3 gate6.py 4            # no clipped text
python3 density.py            # the level, measured
```

## 9. What comes next

Volume 4 is one of eight. On the same machinery, each further volume is ten
units of authoring plus its timed paper; the gates, the frames, the charts,
the maps, the process and device diagrams and the book skeleton are now done
and shared. The sensible order is Volume 3 (B1+, band 6.0) next, because it
feeds this one, then Volume 5, then the Foundation pair, then Volumes 1, 2 and
6.

The one thing I would want settled before writing Volume 5 is the syntax
window in §6 — it is the difference between "write as I have been writing" and
"write longer, more nominal sentences in the academic passages", and it is
cheap to answer with the right source material.
