# Business English — Syria

What was asked for: a 100% clone of the TOEFL iBT 2026 course for Business
English in Syria, everything except the actual content. What was built: that,
plus the four things a clone of a measured course needs if the measurements are
to keep meaning anything.

This file is the account of it. `PLAN.md` is what was agreed before any of it
was written, and it has not been edited since; reading the two together shows
where the build followed the plan and where it did not.

---

## 1. What exists

| | |
| --- | --- |
| Units | 12 |
| Pages | 84 (12 × 7) |
| Scenes | 571 |
| Scored items | 1,272 (106 per unit, plus 12 unscored review items per unit) |
| CEFR band | B1 to B2 |
| Spoken lines with a recording slot | 940 |
| Arabic glossary entries | 357 |
| Data written for this course | 17,827 lines |
| Engine shared with the TOEFL course | 42 of 55 files byte-identical |

Every figure above is produced by a tool in `app/tools`, not counted by hand.
`node tools/unitmap.js` writes the unit and page table; `node tools/glossary.js`
writes the glossary; `node tools/check.js` refuses to pass if either is stale.

## 2. The four decisions

Four questions were put before the build began, and the answers shaped
everything after them.

**Measurement authority: the Cambridge Business English handbooks.** B1 Business
Preliminary and B2 Business Vantage. Their task types, reading lengths, audio
durations and writing word counts are in `app/assets/spec.js`, with the figures
recorded verbatim in `research/baseline.md`.

**Target band: B1 to B2.** Not a single level. The reading proofread task is
B2; most of the rest is B1, and `spec.js` marks which is which.

**English-first chrome, with an Arabic Explain overlay.** The controls can be
switched to Arabic and every exercise has an Arabic explanation. No passage,
option or stem is translated, because translating an exercise removes it.

**Full 12 × 7 parity, delivered in phases.** Not a sample unit. All 84 pages
exist and all of them are gated.

## 3. The one thing the authority could not do

The Cambridge Business English exams were **withdrawn after 2024**. This was
discovered during Phase 0, after the decision to use them had been made, and
it was surfaced rather than worked around.

The resolution: the handbooks are used as a structural and pedagogical
reference, which is what they are good for, and not as an exam this course
prepares anybody to sit. `spec.js` carries an `AUTHORITY` block saying so, and
every figure in it is tagged `source: "bec-2019"` when published or
`source: "course"` when ours.

The sharpest consequence is a figure that does not exist. Cambridge publishes
no readability band for its business reading texts — no Flesch-Kincaid range,
nothing equivalent. The honest options were to invent one or to measure
something else. `spec.js` therefore holds `fkMedium: null, fkHigh: null`, and
`tools/check.js` applies a **relative** rule in its place: no passage for a
given task may be more than 60% longer than the shortest passage in the book
for that same task. The course is held to its own consistency rather than to a
band nobody published. The gate's message says which part of the reasoning is
Cambridge's and which is ours, every time it fires.

The audio bands work the same way. Cambridge publishes durations in seconds.
Words per minute is this course's assumption, so the gate derives the word band
from the published seconds at an assumed 150 wpm with a ±25% tolerance, and the
failure message names the rate as ours.

`rm.coe.int` (the Council of Europe's CEFR resources) returned 403 to an
automated fetch. That was left alone rather than circumvented, and
`research/baseline.md` records that it was not consulted.

## 4. What the clone actually touched

Of 55 files in `app/assets` and `app/tools`, **42 are byte-identical** between
the two courses. Eleven differ — three of those only because they are generated
caches — and two are new:

| File | Why it differs |
| --- | --- |
| `assets/course.js` | **new concept.** Declares `{ id, ns, slug, title, cefr, blurb }`. |
| `assets/book.js` | The twelve units, their language spine, the item budget. |
| `assets/spec.js` | The Cambridge task types and figures, replacing the ETS ones. |
| `assets/cast.js` | Eight invented Syrian colleagues, replacing the campus cast. |
| `assets/scenes.js` | 41 line-art primitives; a workshop and a warehouse, not a lab. |
| `assets/icons.js` | 31 drawings over 164 concept words, keyed to business ideas. |
| `tools/check.js` | The gate, re-anchored to the new authority. |
| `tools/pack.js` | Shares all its plumbing; the README it writes is this course's. |
| `tools/glossary.js` | **new tool.** Generates the Arabic glossary from the lessons. |
| `tools/unitmap.js` | **new tool.** Generates the unit map from the lessons. |

Three further differences are generated caches (`tools/.a11y.json`,
`tools/.figures.json`, `tools/.audio-manifest.json`), which is what they are
for.

Five files that started as differences are now byte-identical again, because
the course-specific part was moved out of them rather than duplicated:
`assets/ui.css` (one new rule, `.efx-drop`, now in both), `assets/items4.js`
and `tools/solver.js` (the drop mode, ported back — see §5), `assets/items6.js`
(a double-escape fix), and `tools/build.js`, which now reads
`assets/course.js` instead of carrying a course's name in three places.
`tools/pack.js` went the same way as far as it could: its slug, staging folder
and output path all come from `course.js` now, and what still differs is the
README text it writes into the zip, which is prose about a particular course
and not engine.

Everything else ported untouched: all 37 scene renderers, the three-tool QA
discipline, the hint engine, the calibration report, the 52-fix coverage
matrix, the diagram library, the Arabic chrome. Two of those deserve a note
because the claim was checked rather than assumed. `tools/coverage.js` was
audited for TOEFL task-id coupling and has none: the 52 fixes are expressed in
terms of scene shape, not task names. `assets/ar.js` was audited for taught
English and has none: it is 100% interface chrome.

## 5. The one real coupling, and the one engine fork

**The coupling.** Ten `localStorage` keys were hard-coded `toefl.`. A learner
running both courses in one browser would have had one course's progress
overwrite the other's. Ten engine sites now read
`(root.COURSE && root.COURSE.ns || "toefl.")`, and `course.js` supplies `bes.`
here and `toefl.` there — so the TOEFL course's existing progress is not
orphaned by the change. It was committed on its own, with the TOEFL course
re-gated before and after.

**The fork, now closed.** Unit 3's grammar needed the published B2 proofreading
task in its real form: one word too many, click the word, nothing to type.
That meant a new `drop` mode in the `errorfix` renderer, four gate rules, a
solver branch and a CSS rule. It was built in this course first and left out of
the TOEFL course, which forked the engine on one feature. It has now been
ported back: `assets/items4.js`, `tools/solver.js`, `tools/dropcheck.js` and
`assets/ui.css` are byte-identical again, the drop rules are in both gates, and
the TOEFL course re-gates green.

## 6. What the build found that the plan did not anticipate

Three of these are bugs in the gate rather than in the content, which is the
more useful kind to find.

**A key no renderer reads is silent.** `u12/l1/3a` was written with a
`notices: [...]` array. No renderer reads `notices`. The gate passed, the page
built, and the exercise died at runtime when the renderer dereferenced
`text.masthead`. The solver caught it; the gate should have. There is now a
`KIND_NEEDS` table in `check.js` naming, for each of 37 scene kinds, the fields
its renderer dereferences without checking — and the table itself was audited
against the renderers by brace-matching their bodies and extracting every
`spec.<field>` reference, which is how four of my own first guesses were caught
and corrected. The same rule is now in both courses. A pie chart shipped with
no `slices` earlier in the build for exactly this reason, and this closes that
class of bug rather than that one instance.

**One English term, two Arabic words.** Generating the glossary surfaced ten
terms where the same English headword carried two different Arabic renderings
across the book — `lead time`, `tolerance`, `specification`, `scrap`,
`sign-off`, `weighting`, `discrepancy`, `reference` and two genuine sense
splits. Eight were normalised to one rendering. Two were not, because they are
not errors: `outstanding` means something different on an invoice and on a
delivery note, and `tender` is the invitation in Unit 3 and the bid in Unit 12.
Those were split by naming the sense in the English headword rather than by
pretending one word covers both. `check.js` now fails if any English term
carries two Arabic renderings anywhere, and fails if a scene shows a gloss the
generated glossary does not list.

**The book's own spine was wrong about itself.** `book.js` declared Unit 11's
word-building slot as `-ment`. Unit 11 teaches `-ion` and `-ure`; Unit 10
teaches `-ment` and `-ance`. Auditing all twelve declarations against the
`build` scene in each unit's Lesson 1 found that every declaration named only
the first of a taught pair, and one named the wrong suffix entirely. All twelve
are corrected, and Unit 6's `affix: null` is now rendered honestly in the unit
map as "this unit teaches phrasal verbs instead" rather than as a blank.

**Two coverage fixes were sitting unmet.** `tools/coverage.js` reported that
F21 (stress made visible) and F26 (verb-pattern matrix) expected scenes the
book did not have. Both were genuinely called for by the language spine — Unit
12 teaches noun/verb word stress and the infinitive/gerund split, Unit 10
teaches gerunds — so three scenes were written rather than the predicates
relaxed: a stress-marked `annotate` scene in `u12/l1`, a verb-pattern grid in
`u12/l3`, and a grid for the three jobs of an `-ing` form in `u10/l3`. Both
fixes now read 100%.

**The book index was still the TOEFL course's.** A browser smoke test on the
extracted package — not the gate, not the solver, a headless Chromium opening
eight pages from `file://` — showed the contents page titled *TOEFL iBT 2026*.
`tools/build.js` generates that page and had the title typed into it in three
places. It now reads `COURSE.title`, so neither course's name is in the shared
tool any more.

**And the skill mix on that page was wrong in both courses.** The same page
carried a hand-typed line, *Reading 18 · Listening 17 · Writing 12 · Speaking
6 per unit*. The TOEFL course's own item budget adds up to Reading 16,
Listening 34, Writing 4, Speaking 4, Pronunciation 8, Sentence building 20,
Vocabulary 20. The typed line had been wrong for as long as it had existed,
and nothing could have caught it because nothing was comparing it to anything.
`build.js` now derives the line from `BUDGET2` and **throws** if a task name
maps to no skill, because a figure with a task silently missing from it is
worse than no figure. Both courses' index pages now state their real mix.

**An italic that was never emphasis.** A screenshot of the pie-chart lesson
showed its reader note broken across three lines: *…divides up a* / **decision**
/ *, which is rarer…*. `assets/ui.css` carries `.note i{display:block}`, because
in the engine's own convention an italic inside a note is a *displayed example*
on its own line, not emphasis. Eighty-six note bodies in this course had used
`<i>` mid-sentence, each one breaking its sentence apart. They are now `<em>`,
which has no block rule, and a gate rule refuses `<i>` in a note body or a
`focus` string so the convention cannot be forgotten again. Nothing in the gate,
the solver or the accessibility pass could have found this: all three were
green. It took a picture.

**An explanation that contradicted its own exercise.** Opening the Explain
overlay on Unit 12's homophone exercise showed the generic text for its scene
kind: *if you cannot hear a contrast you cannot produce it reliably*. The whole
point of that exercise is that the two options sound identical and listening
cannot settle it. `assets/explain.js` already let a scene supply its own page
walk-through, so it now also lets a scene overrule any of the generic what,
how and why — in both courses — and the homophone scene says what it is really
asking. Again: gate green, solver green, accessibility green, and the panel was
telling the learner the opposite of the lesson.

**Markup where the renderer escapes it.** The `matrix` renderer reads its
column headers as HTML and its row items and closing note as text. The first
matrix written for this course put `<b>` round the word under examination in
each row, which would have printed literal angle brackets to the learner — and
the solver, which finds a row by its text, failed on it, which is how it was
caught. There is now a gate rule, and that rule immediately found the same bug
sitting in the TOEFL course's Unit 10, where a matrix note had `<i>` in it.
While fixing the renderer it also became clear that the row item was being
escaped twice, once by `esc()` and once by `textContent`, so an ampersand in a
matrix row would have printed as `&amp;`. Both are fixed in both courses.

**A proofreading item can be ambiguous in a way the author cannot see.** The
`drop` items kept failing the gate for two reasons: the extra word occurred
twice in the sentence, so two different clicks were both "right" to the
learner and only one to the grader; or removing one word was not enough to
reach the stated correction. After eight of these, `tools/dropcheck.js` was
written to pre-validate the items in one file in a second rather than in a full
gate run. It is now in both courses.

**Continuity does not police itself.** Rival mills were voiced with Orontes
staff, so one character appeared as both our own export coordinator and an
Aleppo supplier. Two cast members were added rather than the lines reassigned.
An editing artefact also reached a draft `to:` field and was caught on reread —
which is an argument for rereading, not for a tool.

## 7. The world the course is set in

Invented, and consistently. **Orontes Textiles** is a 40-person weaving
workshop near Hama. It subcontracts dyeing to Homs, sells over half its output
domestically and exports mostly to Jordan. Its client **Levant Home** is in
Amman; Unit 12 tenders to **Barada Hotels**. The eight people in `cast.js` —
Nour in operations, Samer in export, Lina in accounts, Fadi in the warehouse,
and the others — are fictional, and nothing about them is a claim about any real
company or person.

Two honest notes about the representation. The `accent` field in `cast.js`
selects whichever voice the learner's browser happens to have; it is not a
claim about how a Syrian colleague sounds, and the header comment says so. And
a `hijab` hairstyle branch was added to the figure drawing, because a cast of
eight Syrian colleagues drawn without one would have been a decision too.

The things a business conversation keeps returning to — cost, deadline,
agreement, risk, deliverable — take the same icon in all twelve units, so the
icon becomes a retrieval cue rather than decoration.

## 8. The Arabic

357 terms, every one of them a word a learner can actually see in the course,
collected from the two places the engine renders Arabic: a vocabulary card's
`ar` field and an `explain.terms` entry's `ar`. `GLOSSARY-AR.md` is generated
from those, by unit of first appearance and alphabetically, and bound to the
lessons by the gate.

It is Modern Standard Arabic, written to be read rather than spoken, because
that is what a Syrian learner meets in a contract, an invoice and a tender.
Where the business usage genuinely is the borrowed English word, the gloss says
so instead of inventing a replacement.

**It has not been reviewed by a native-speaker translator or by a
terminologist.** The instruction was "best efforts translation" and this is
that: a working draft to be checked, not an authority to be cited. Where a term
is contested in Arabic business usage, the English gloss beside it is the
definition the course actually teaches, and that gloss is the part that has
been through the gate.

## 9. How it is verified

Four tools, each answering a different question and none of them trusting the
others — and then a fifth thing that is not a tool at all.

**`tools/check.js` — the gate.** 4,465 checks. It refuses the course if a
figure claims an authority `spec.js` does not grant it, if a passage breaks the
relative-length rule, if an audio transcript falls outside the derived band, if
a chart lacks the field its renderer dereferences, if a scene uses a key no
renderer reads, if a `drop` item is ambiguous, if a stem is taught twice as new
in different units, if a line citation points past the end of its passage, if a
scene kind has no solver branch, or if the glossary and the lessons disagree.

**`tools/solve.js` — the solver.** It does not inspect data; it operates every
exercise through its own click path and checks the page says "right". 571 of
571 scenes. This is the tool that found the `notices` bug the gate missed.

**`tools/a11y.js` — the accessibility pass.** Every scene audited in both
motion modes, keyboard and screen-reader. 571 of 571 clean.

**`tools/coverage.js` — the 52-fix matrix.** 69% of 10,752 cells met. The
unmet cells are not failures; they are the honest accounting of a plan that
estimated scope before the book existed. Ten fixes now show a measured scope
different from the plan's estimate — `Signal after, not before` was planned at
143 scenes and measures 48 — and the tool says in each case that either the
estimate was loose or its own predicate is wrong, rather than quietly adopting
whichever number looks better.

**And one thing that is not a tool: looking at the pages.** All four were green
on the note italics that broke every sentence they were in, on the Explain
panel that contradicted its own exercise, and on the book index still carrying
the other course's name. Every one of those was found by opening a page and
reading it, which is the argument for doing that at the end of a build and not
only at the start.

## 10. What is not done

**The Arabic has not been reviewed by a native speaker.** Section 8. This is
the single most important caveat in this file.

**There are no human recordings.** All 940 spoken lines fall back to the
browser's speech synthesis, which means the book is complete without any audio
files and that no line is spoken by a Syrian voice.
`audio/record-list.csv` and `audio/manifest.json` exist so recordings can be
dropped in later under names derived from the lines themselves — so a recording
can only ever play against the words it was made for, and recording part of the
book works.

**Microphone capture does not work from `file://`.** The speaking exercises
fall back to self-assessment. Serving the folder over `http://localhost` turns
recording on; this is a browser rule, not a bug in the course.

**The ten coverage disagreements in §9 are unresolved.** Each is either a loose
estimate in the plan or a wrong predicate in the measuring tool, and telling
which requires going fix by fix. The tool reports them rather than hiding them.

**The `research/baseline.md` figures are from the 2019 handbooks.** They are the
last published editions, the exams are withdrawn, and no newer figures exist to
check them against.

---

## Files

| Path | What it is |
| --- | --- |
| `PLAN.md` | What was agreed before the build. Unedited. |
| `REPORT.md` | This file. |
| `GLOSSARY-AR.md` | Generated. 357 Arabic terms, bound to the lessons by the gate. |
| `UNIT-MAP.md` | Generated. What each unit teaches, page by page. |
| `research/baseline.md` | The Cambridge figures, verbatim, with provenance. |
| `app/` | The course. Open `app/index.html`; no server, no install, no network. |
