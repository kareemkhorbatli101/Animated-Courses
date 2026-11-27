# Evaluation of the third-round pilot

Six units — Dentists A2.1 units 1–3 and Dental Students A2.2 units 1–3 — with
their two teacher's books. The books were worked, not inspected: every closed
task was attempted before the key was opened, and a ninety-minute lesson was
planned from the teacher's notes alone.

## 1  The frameworks used, and why each one

| Framework | What it is for here |
|---|---|
| **Nation, *Learning Vocabulary in Another Language*** — the four strands | Whether classroom time is spread across meaning-focused input, meaning-focused output, language-focused learning and fluency development. The strongest single test of a syllabus's balance. |
| **Tomlinson, *Materials Development in Language Teaching*** | Impact, affective engagement, readiness, authentic use, intake opportunities, outcome feedback. |
| **Littlejohn's three-level framework** | What is in the task; what the learner has to *do*; what that implies about the view of learning. |
| **Bloom, revised (Anderson & Krathwohl)** | Cognitive demand of every question. |
| **ICAP (Chi & Wylie)** | Whether the learner is passive, active, constructive or interactive. |
| **CEFR** | Whether the level claim survives contact with the tasks. |
| **Cunningsworth's checklist** | The teacher's book and the support apparatus. |
| **Dudley-Evans & St John, ESP** | Fit to a real professional need rather than to a general syllabus. |

Everything below is measured by `audit.py` and `taudit.py`, which are committed,
or is recorded as a judgement with the evidence beside it.

---

## 2  What is working, and should not be touched

**The preview does its job.** Working the units, nothing in a reading or a
listening arrived unglossed. The eight-word core with a definition and a
sentence each, drilled before anything else, is why a 450-word textbook page
is readable at A2.2. Tomlinson's *readiness* criterion is met better than in
most published ESP material.

**The cases are the best part of the book.** They are arguable, they are short,
and they turn on something the unit taught. Tooth 14 in the student book is a
genuinely good case: both readings of the number are correct and the learner
has to say why that is the problem. ICAP-interactive, Bloom-evaluate, and it
could not be done without the unit's language.

**Connectedness is real.** The same seven people appear in every unit; the
record written in Unit 1 is the record read in Unit 2; the notation learned in
student Unit 2 is the notation the Unit 3 chart is written in. The warm-up of
each unit opens the question its part 9 argues about.

**Sourcing survives.** Every Tier A claim carries its source, and the case
guidance boxes kept the citations that the data box used to carry.

**The level guard holds.** Nothing above band reached the page in six units.
That was tested by trying to break it, not by trusting it.

---

## 3  What is wrong

### 3.1  The review reprints instead of retrieving  — the worst fault

Measured in all six units:

```
U1 review 10.1 repeats 7 of 8 items from 3.1      U1 10.3 model = 6.3's model
U2 review 10.1 repeats 8 of 8 items from 3.1      U1 10.4 model = 8.1's model
U3 review 10.1 repeats 5 of 8 items from 3.1      U3 10.2 repeats 3 of 5 from 5.1b
student U1 10.5 repeats 4 of 5 items from 7.2c    student U1 10.3 model = 6.1's model
```

Unit 2's review gap-fill is **the same eight sentences** as task 3.1, reordered.
A learner recognises that in four seconds and completes it from the shape of the
page. Spaced retrieval is the principle the design document cites for the review;
a reprint tests recognition of a page, not recall of a word, and it is the one
place where the book is doing the opposite of what it says it does.

### 3.2  Three exercise types for a whole course

```
U1 gap 8, match 1, short 18        U2 gap 9, match 1, short 17
U3 gap 4, match 5, short 17        student U3 gap 4, match 6, short 16
```

`build2.py` supports `gap`, `match` and `short` and nothing else, so twenty-seven
closed tasks a unit are drawn from three shapes, and two-thirds of them are the
same shape. Missing, and all cheap to add: sequencing, odd-one-out, two-column
sorting, true/false with a correction, and multiple choice. Littlejohn's second
level — *what the learner is actually required to do* — comes out far narrower
than the unit's variety of content suggests.

### 3.3  Too much of the thinking is at the bottom of Bloom

```
U1 remember 70%   U2 remember 85%   U3 remember 77%
student U1 59%    student U2 81%    student U3 46%
```

Student Unit 3 shows what the model can do when it tries: 46% remember, with
analysis and application carrying the rest. Practitioner Unit 2 at 85% is a
drill. The cases pull the unit average up, but parts 3 and 5 are almost pure
recall.

### 3.4  Nation's fourth strand is missing entirely

The ninety-minute route spends its time like this:

| Strand | Minutes | Share | Nation's target |
|---|---|---|---|
| Language-focused learning (2, 3, 4, 10) | 42 | 47% | 25% |
| Meaning-focused input (5, 7) | 23 | 26% | 25% |
| Meaning-focused output (6, 9) | 20 | 22% | 25% |
| **Fluency development** | **0** | **0%** | **25%** |

There is no task anywhere in six units whose purpose is to make known language
come out faster. Every speaking task introduces something new. This is the
clearest structural gap in the course and it is invisible to every gate,
because every gate measures what is there.

### 3.5  The learner is asked about their own work once, and then never

```
U1 nothing after the warm-up asks about the learner's own practice
U2 nothing   U3 nothing   student U1 nothing   student U2 nothing
```

Three questions in part 1, and from then on the learner works entirely on
Fairgate Dental Practice. Tomlinson's *affective engagement* and *personal
response* criteria both fail here. These are practitioners: the one thing they
have that the book does not is their own surgery.

### 3.6  Two answers that do not match their source

`5.3b` in Dentists Unit 3 asks what the patient says about an allergy and keys
the answer as *not that she knows*. The script says *Not that I remember.* A
learner who writes what they heard is marked wrong. One instance in six units,
but it is the kind of error that destroys trust in a key.

### 3.7  A gap that splits a taught chunk

`3.1` item 5 is *Can you ____ back for me?* with the answer *sit*, while the
taught item is *to sit back*. The learner has been drilled on a three-word chunk
and is then asked for one word out of the middle of it.

### 3.8  The teacher's book makes a teacher hold two books

```
no answer key in the teacher's book        no transcript in the teacher's book
2 routes (90 and 180); nothing for 60      open tasks with no sample answer: 9–12 per unit
```

The notes are rich — the Arabic, the interference points and the case notes are
genuinely better than most published teacher's books — but a teacher running
part 5 has to hold the learner's book open at the back for the transcript and
again at the answer key, while holding the teacher's book at the procedure.
Cunningsworth's test is whether the teacher's book can be used *while teaching*,
and this one cannot without a second copy. The routes also miss the commonest
real constraint, which is a sixty-minute class. The sample answers cover the
three role-plays and one or two writing tasks, and leave the pre-reading
predictions and the three cases' own questions without a model.

---

## 4  The plan

Eight changes. Each one names what moves, and whether a gate will stop it
coming back.

| # | Change | Where | New gate |
|---|---|---|---|
| 1 | Review retrieves: no review task may share more than a quarter of its items with an earlier task, and its speaking and writing models must be new | six units rewritten | `check_recycle` |
| 2 | Five new exercise types — `order`, `odd`, `sort`, `tf`, `choice` — and at least four distinct types per unit, none above 55% | `build2.py`, `render.py`, units | `check_variety` |
| 3 | Cognitive demand: at most 60% of closed tasks at remember, at least three above apply | units | `check_demand` |
| 4 | A fluency task in every unit: the same content said three times under a falling clock, using only language already met | `build2.py`, units | `check_fluency` |
| 5 | At least two tasks after part 1 ask about the learner's own practice | units | `check_own` |
| 6 | Every while-task answer must be at least half-present in its own script or text | fix U3 5.3b | `check_answerable` |
| 7 | A gap may not ask for one word out of a taught multi-word item | fix U1 3.1 | `check_gap_chunks` |
| 8 | The teacher's book carries its own answer key, its own transcripts, a sixty-minute route, and a model for every open task including the cases' own questions | `teacher2.py`, six note files | `taudit.py` in the build |

Not changing, deliberately:

* **The page count.** Approved at 288 and 295 for three units.
* **The eight-word core.** It is the reason the readings work.
* **Three listenings, three readings, three writing tasks, three role-plays,
  three cases.** The shape is right; what fills it is what changes.
* **The 47% language-focused share will not fall to 25%.** A ninety-minute
  ESP class with eight new items cannot do that honestly. It will fall to about
  40% with fluency work added, and the gap is stated rather than disguised.

## 5  What the plan produced, measured

Each of the eight changes was implemented and then measured on the rebuilt
books. The plan is not reported as done; it is reported with numbers.

### 5.1  The eight changes

| # | Change | State | Evidence |
|---|---|---|---|
| 1 | Review retrieves rather than reprints | done | `check_recycle` passes on all ten units; it caught one reprint in the first draft of Dentists unit 5 (two of six items from 3.4) and the task was rewritten |
| 2 | Five new exercise types, ≥4 per unit | done | every unit shows 6–8 distinct kinds; the largest single share is `short` at about a third |
| 3 | Remember ≤60%, ≥3 tasks above apply | done | remember fell to 19–44% across the five new units, against 70–85% before |
| 4 | A fluency task in every unit | done | `check_fluency` passes on all ten; the teacher's book carries its own page on why it is not a role-play |
| 5 | ≥2 own-practice tasks after part 1 | done | the new units carry 6–7 each |
| 6 | Every while-task answerable from its own text | done | `check_answerable` caught two more while writing the new units (a nurse's line keyed to a paraphrase, and an uninspected surface keyed to "it was not seen") |
| 7 | No gap out of a taught chunk | done | `check_gap_chunks` caught one in Dental Students unit 5 ("mirror" out of "a mouth mirror") and was itself refined twice for over-firing |
| 8 | Teacher's book self-sufficient | done | `taudit.py` reports, for every unit: a model for every open task, its own key, its own transcripts, a 60/90/180 route table, fluency notes, all eight core terms glossed in Arabic, three case notes, and 4–6 of 8 core terms with a pronunciation note |

### 5.2  Two gates that had to be made less eager

Both of the new gates that fired on correct material were loosened, and both
corrections are the same point: a gate that cries wolf gets ignored.

* `check_recycle` treated any shared items as a reprint. Meeting a term in a
  match and then in a sort is recycling. It now needs the same task kind, or at
  least half the answers in common.
* `check_gap_chunks` treated *probe* as a fragment of *a periodontal probe*. A
  word taught whole in its own right is never a fragment, and the gate now
  excludes the unit's own single-word items.

### 5.3  What the round added that the plan did not foresee

* A **three-column sort**. The student book needed U/L/B (upper arch, lower
  arch, both) and I/S/T (instrument, surface, tissue). `sort_items` assumed two
  columns and raised a `TypeError` in the middle of a five-unit build; it now
  takes any number.
* **Mean sentence length as a live constraint.** The student series reads at
  12.0–16.5 words a sentence. The first draft of Surfaces came in at 18.01, and
  bringing it down meant rewriting three readings sentence by sentence rather
  than trimming them, because the same gate fails a text that is too short.
* About **sixty level-guard hits** across four units, every one of them cleared
  by paraphrase or by adding the word to the right list — never by cutting the
  idea. §13.4 of `DESIGN.md` lists what went where and why.

### 5.4  The two books now

Five units each, written to the model this evaluation produced rather than
fitted to it afterwards. The page count the round was told not to change is
unchanged per unit; the books are longer because there are more units, which is
what was asked for.

## 6  Rounds five and six: ten units a book

Rounds five and six added units 6 and 7, then 8, 9 and 10, to both pilot books,
on the same standing instruction: no regression, no omissions, no drift, no
invention, and every unit through the full gate set with no warnings. Both books
are now complete at ten units and both report zero failures and zero warnings
across all ten.

### 6.1  What the gates caught, and what they did not

The gate set written in round four did its job on the new units, and the
distribution of what it caught is itself a result:

* **Level guard:** about a hundred and twenty hits across the five student-book
  units, every one cleared by paraphrase or by adding the word to the right
  list. The clinical ones went to `DOMAIN` (*carious*, *progression*,
  *radiography*, *superimposition*, *demineralisation* and its family,
  *radiolucency*, *apex*, *artefact*, *bitewing*); the academic register went to
  `ACADEMIC` (*extensive*, *provisional*, *prioritise*, *justification*,
  *confined*, *prediction*, *pending*); the genuinely ordinary words went to B1
  (*mend*, *sip*, *ache*, *urgent*, *absent*, *faulty*, *hidden*, *heavily*,
  *advise*, *connection*, *quote*). Everything else was rewritten — *hedge*,
  *refusal*, *oneself*, *fortnight*, *compromise*, *ritual*, *whom* — because a
  dentist writes those without thinking and an A2.2 reader cannot read them yet.
* **`check_recycle`** caught review 10.5 of student unit 10 reprinting four of
  six stems from vocabulary 3.4. Both were sorts and the stems had drifted into
  each other while the unit was being written. The review now sorts six
  different lines drawn from across the whole book, which is what a review in
  the last unit should do anyway.
* **Reading and listening length bands** caught six texts outside their bands,
  all of them short rather than long. Each was lengthened with material that
  does work — an interproximal paragraph in the caries textbook page, two
  paragraphs about why the instruction was followed in the sugar case, three
  short ones in the patient leaflet — rather than padded.

What the gates did not catch was the contents page, which had described a
different book for five units of each volume. §14.3 of `DESIGN.md` has the
reason: it is built from a field written in phase 0 and read on every build, and
no gate reads it. It was found by putting the printed contents beside the
printed unit headings, which is the same method that found the two figure
faults in round three and the review-model fault in round four. Reading the
built artefact has now found a fault in three consecutive rounds, and it is the
only check in the whole process that does.

### 6.2  Teacher's notes: a count that was being met by the new units only

`taudit.py` has reported pronunciation coverage since round three, and the new
units met the figure of six core terms in eight. Running it across all twenty
notes at once showed units 1 to 3 of each book at four or five — the three units
a new teacher opens first. Twenty-nine notes were added across fourteen files
and both books now read eight of eight everywhere.

This is a different kind of fault from the contents page. Nothing was wrong; a
standard was being met on average and not per unit, and an audit that prints a
number rather than failing a build makes that easy to miss. The number is now
the same on every unit of both books, which is the only form in which a standard
of this kind is worth having.

### 6.3  The two books now

Ten units each, ten grammar points each with no repetition between them, and a
closing unit in each book that runs the whole volume in a single task. The
per-unit page count is unchanged; the measured page fit was re-run after every
edit that changed a block or a figure height, never assumed. The practitioner
book ends by pointing at the second volume; the student book ends by pointing at
Book 2 of its own series.
