# IELTS 2026 — Volume 2 (B1+, target band 5.5)

**Status: complete.** Ten units, fifty cycles, two timed papers, all five gates
green, built and visually verified.

**481 pages, 438 figures, 4.3 MB.**

---

## 0. A correction first

Volume 6 was delivered with a closing line saying it left "Volumes 7 and 8" to
finish. That was wrong, and the instruction to build Volume 7 came from my
error rather than from the plan. The series is eight books and there is no
Volume 7:

| Book | Level | Target band |
|---|---|---|
| Foundation 1 | A2 | — |
| Foundation 2 | A2+/B1 | 4.0 |
| Volume 1 | B1 | 5.0 |
| **Volume 2** | **B1+** | **5.5** |
| Volume 3 | B2 | 6.0 |
| Volume 4 | B2+ | 6.5 |
| Volume 5 | C1− | 7.0 |
| Volume 6 | C1 | 7.5 |

`IELTS_Series_Plan.md` describes Volume 6 as "the top of what preparation can
move", and the outline file carries eight `##` headings, not ten. So I built
**Volume 2** instead: it is adjacent to the already-built Volume 3, which means
every cross-volume word seam had a built neighbour to be checked against, and
the plan calls 5.5 "the commonest score, and the commonest ceiling".

Unbuilt after this volume: **Volume 1, Foundation 2, Foundation 1.**

---

## 1. What is in the book

| | |
|---|---|
| Units | 11–20, ten units, five cycles each — fifty cycles |
| Level | CEFR B1+, target band **5.5** |
| New head words | 400, eight a cycle, none repeated inside the volume or across Volumes 3–6 |
| Timed papers | two — Reading and Listening |
| Reading in the units | 17 032 words across 50 cycles, every cycle a different text type |
| Listening in the units | 16 413 words of script, Parts 1–4 covered in every unit |
| Questions in the units | 716, every one with a written explanation |
| Writing models | 8 966 words, every Task 1 and Task 2 model at band with notes and criterion tags |
| Grammar | 250 transformation items, five a cycle |
| Expressions | 200, four a cycle, each with what it is for |
| Figures | 30 referenced: 9 line graphs, 6 bar charts, 6 pie pairs, 6 process diagrams, 3 map pairs |
| Reading paper | 3 passages, 1 884 words, 40 questions, 60 minutes |
| Listening paper | 4 parts, 40 questions, one hearing |

### The ten units

| # | Theme | Technique page | Outlining move |
|---|---|---|---|
| 11 | Family and Society | Yes/No/Not Given: whose opinion is it | the ten-idea brainstorm |
| 12 | Money and Consumption | The number-deletion test | ideas that survive deletion |
| 13 | Crime and Law | Grouping lines that behave alike | grouping before ordering |
| 14 | Language and Communication | Scanning, and when it is the wrong method | from brainstorm to two headings |
| 15 | History and Heritage | The blind-reader sketch | writing the thesis first |
| 16 | Energy and Resources | Two pie charts: grouping slices that move together | supports that are facts |
| 17 | Design and How It Is Judged | A process with a branch: following both arms | essay to outline, on two models |
| 18 | Science and Discovery | Not Given: you cannot scan for an absence | fill the outline from an abstract |
| 19 | Transport and Mobility | Maps again: parallel order across the two plans | outline, then the spoken version |
| 20 | Recorded Music and Live Performance | Everything so far, under time: a full Listening paper | the whole toolkit, then write |

Unit 20 is the hinge into Volume 3. Its technique page stops teaching methods
and hands the student the Listening paper at the back of the book, to be sat in
one uninterrupted sitting with nothing paused; its outlining page asks for a
plan in twelve minutes and an essay in twenty-eight, and then asks whether the
plan held.

---

## 2. What this volume teaches that the others do not

Volume 2 sits where most candidates stall, so three things are carried further
here than anywhere else in the series:

**The brainstorm, taught as a timed habit.** Units 11–16 build it one move at a
time — ten ideas without judging them, the deletion test, grouping, the thesis
written before the body, supports that are facts rather than restatements —
and units 17–20 then use the whole sequence under a clock. Every planning page
in the volume is twelve minutes, timed, and the essay it plans is written two
cycles later, so the plan has to survive being put down.

**Reading technique taught against its own failure modes.** The technique pages
are not a list of tips; each one names the three ways candidates lose marks on
that question type and then gives the behaviour that avoids them. Unit 18's
page is the hardest single thing in Reading: Not Given is the only question
type answered by *failing* to find something, so it cannot be scanned for, and
the empty feeling of having found nothing is the correct feeling rather than a
sign of having missed something.

**Task 1 organisation, one principle a unit.** Grouping series that behave
alike (13, 16), the blind-reader test (15), a process that branches into two
unequal arms (17), a process whose phases carry the point (18), two maps
described in parallel order with the unchanged features named first (19), and
four lines of which three are one story and the fourth needs its own sentence
(20).

---

## 3. The two timed papers

**Reading (Academic)** — three passages, 1 884 words, 40 questions, 60 minutes,
no transfer time:

1. *The pencil and the accident of a storm* — the Borrowdale graphite deposit,
   the Italian wooden case, the 1752 act against theft, and Conté's wartime
   substitute that turned out to be better than the material it replaced.
2. *Why a postcode is not an address* — a code built around sorting offices,
   adopted by insurers, delivery firms and researchers who each assumed it
   meant a small area on the ground.
3. *What a fingerprint can and cannot prove* — two claims run together for a
   century, and what the post-2005 studies actually found about examiners.

**Listening** — four parts, 40 questions, one hearing: joining a sports centre,
a talk to new volunteers at a city farm, two students choosing a project
subject, and a lecture on why queues form.

Every question in both papers carries an explanation that says where the answer
is and why the distractors fail, so a student working alone can mark the paper
and learn from the wrong answers rather than only counting them.

---

## 4. The gates

| Gate | What it proves | Result |
|---|---|---|
| `check.py 11-20` | shape, length bands, question counts, numbering, answer spread, explanation length, word seams across volumes | **pass** — 10 units, 400 head words, 2 timed papers |
| `density.py 2` | the level on the cover, measured from the prose | **pass** |
| `omit.py 2` | every passage, script turn, model, question and explanation is actually in the .docx | **pass** |
| `gate6.py 2` | no clipped or overrunning text in any figure | **pass** |
| build | the .docx renders | **pass** — 481 pages, 438 figures |
| visual check | pages sampled across the volume, at full size | **pass after two fixes** — see §6 |

### Density: the level on the cover

| | 1k share | beyond 4k | window |
|---|---|---|---|
| unit academic passages | 69.7 % | 14.4 % | 67.5–70.0 / 13.5–16.5 |
| timed Reading paper | 67.0 % | 16.8 % | denser than the window, deliberately |
| **both together (gated)** | **69.3 %** | **14.8 %** | **in window** |

The volume was calibrated empirically on unit 11 rather than by assumption. The
first draft of that unit measured **75.9 % / 7.9 %** — nearer Foundation 2 than
B1+, which would have made the cover wrong. Both academic passages were
rewritten denser, to 69.5 / 13.0, and that gave the working target the other
nine units were written to: seven paragraphs, 450–580 words, mean sentence
19–20, plain academic journalism rather than textbook prose.

The timed Reading paper is slightly denser than the unit passages (67.0 / 16.8
against a 67.5–70.0 / 13.5–16.5 window). That is the intended relationship and
`density.py` gates only the combined row for exactly this reason: the paper is
an exam simulation and is written to the register a candidate will actually
meet, while the unit passages are teaching texts read at 110–130 words a minute
under the loop. Volumes 4 and 6 show the same pattern.

The two syntactic numbers — mean sentence 21.1, nominalisation 3.6 % — are now
**gated**, but against a ladder rather than an absolute, because the only
absolute window available was calibrated on textbook prose and IELTS Academic
passages are adapted journalism. The ladder gates what this series actually
claims: that each book is harder than the one below it. Volume 2 sits between
Volume 1's 20.2 and Volume 3's 21.8. See `IELTS_Syntax_Ladder_Report.md`.

---

## 5. Machinery added before the content

Volume 2 counts *downwards* from Volume 3, which no gate had been asked to do
before. Written and verified before unit 11:

- `check.py` — `BANDS_BY_VOL[2]` and `PAPER_BY_VOL[2]`, with `vol_of()`
  generalised to `3 + (n - 21) // 10` clamped at both ends, so it counts below
  Volume 3 as well as above it.
- `density.py` — `GATED_BY_VOL[2] = k1 67.5–70.0, beyond 13.5–16.5`, and
  `texts()` deriving the unit range from the volume number.
- `book.py` — `VOLS[2]`, the speed ladder rung (110–130 wpm), the cover blurb,
  the "who this book is for" bullets and the band description.

The two productive bands do **not** scale down with the cover band: a Task 1
model must still satisfy the rubric, so the model bands stay at 155–260 and
255–340 words. A B1+ book is not licensed to print a model that would fail.

### Defects fixed on the way

`check.py` now gates the per-cycle **speaking answer shape**: three moves
minimum, only the three taught move names, and no line shorter than twelve
characters. A missing shape previously crashed the build with `KeyError` rather
than reporting a problem; the gate was added when unit 54 of Volume 6 shipped
without one, and Volume 2 was written against it from the start.

Two more were found by looking at rendered pages rather than by a gate, and
both are fixed at source rather than worked around in the content:

1. **A branching process diagram drew a sequential arrow between its two
   outcomes.** `process_flow` chains every stage to the next, so unit 17's
   diagram read "Approved → Referred back" — on the page whose model answer
   says the two arms are *not* equivalent. `process_flow` now takes `alts`,
   a list of stages that are alternatives to the stage before them rather
   than steps after it: the sibling arrow is suppressed and a fork is routed
   from the stage they share, under the sibling, into the alternative. A
   diagram with no `alts` renders exactly as before, so no other volume
   changes.
2. **A map label was overrun by the boxes it ran between.** Unit 19's "New
   footbridge route" sat at the exact lower edge of the middle row of
   objects, so the label printed behind them and read "foo". Moved into the
   clear band between the rows. The figure gate could not see this: the text
   was inside its own box, and the box was behind another object.

---

## 6. The visual check

Pages were sampled across the volume at full size and read as a reader would
see them — the two Task 1 Academic figure pages, the process article, the
four-series line graph, a technique page and a page of the Reading paper. The
line graph, the pie pairs, the bar charts and the page furniture were right
first time. The two figure defects described in §5 were found this way, fixed
in `diagrams.py` and `content/u19.py`, the volume rebuilt, and both pages
re-read to confirm: the fork now runs from **Application** into both outcomes
rather than chaining one into the other, and **New footbridge route** prints in
full between the rows.

Running `gate6.py` again after the rebuild: 3 810 fitted runs of text in the
figures, nothing overrunning its box, nothing printed under 7.5 px.

---

## 7. What is still open

- **`VOLS[3]['cefr']` says B1+ where the plan says B2.** Volume 3's cover and
  filename (`IELTS_2026_B1plus_Volume_3.docx`) therefore carry the wrong level
  label. It is a one-line fix plus a rebuild, and I have deliberately not
  touched it while Volume 2 was in flight, because changing it renames the
  shipped Volume 3 file.
- ~~**The syntax window**~~ **Closed on 17 November.** `density.py` now gates
  mean sentence length, the longest sentence in the book and the
  nominalisation rate against a laddered window, and `density.py --ladder`
  checks the eight books together. Volume 2 measures **21.1 words a sentence**
  (window 20.2-22.2), longest sentence **46**, nominalisation **3.6%** — all in
  window, and Volume 2 was the only book of the eight that needed no change at
  all to pass. See `IELTS_Syntax_Ladder_Report.md`, including what the gate
  still does not prove.
- *(superseded)* The syntax window was a recorded decision rather than a measurement,
  for the genre reason above.
- Fifteen outline frames in **Volumes 3 and 4** are set small to fit a thesis
  on one line. They are not clipped; a rebuild would now set them full size.

---

## 8. Files

- `IELTS_2026_B1plus_Volume_2.docx` — the book, 481 pages
- `IELTS_Volume_2_Report.md` — this report

Branch `claude/nice-davinci-om6fxb`.
