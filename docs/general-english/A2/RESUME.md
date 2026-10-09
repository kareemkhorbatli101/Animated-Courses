# A2 — the finished course, and how to work on it

Everything here is reproducible from the repository. If a session ends, a new
one can pick up from this file alone.

## 2026-10-09, later still — the suite is 269, and A2 is still untouched

Six more checks, family N, after a reader said B1's passages and dialogues made
them feel stupid. They hold an explanation's paragraphs to a topic sentence,
require every paragraph to be signposted, require every open answer to be
findable in the passage, blocklist a set of writerly constructions, and require
a question in a dialogue to be answered by the next turn. All six are gated on
`golden.language.clarity_law`, which only B1's spec sets, so all six are inert
here and say so in their own result.

**The register fault they name is in A2's prose too**, and A2 is not retrofitted
for the same reason as the depiction law. If you want that reversed, family N is
the worklist: turn the flag on in A2's spec and read what comes back.

A2 is green at **269 of 269 on both volumes**, mutations **230 of 230**.

## 2026-10-09, later — the suite is 263, and A2 is still untouched

B1's Unit 1 was built green at 251 checks and was rejected for running one
subject through all eleven of its parts. Twelve checks were added for that:
**family M**, ten checks that read a per-unit content ledger and bound how much
of a unit any one situation may occupy, and **`G34`/`G35`**, which require an
icon to be licensed by its own label and a contrast figure to actually
contrast. All twelve live in the shared toolchain, so they run here too.

**All twelve are inert at A2, by design and with the reason written down.**
Family M reads `ledgers/situations.yaml`, which only B1 has; `G34` and `G35`
are gated on `golden.figures.depictive_icons`, which only B1's spec sets. Each
check says so in its own result rather than passing in silence.

**The measurement behind that decision, because it is not flattering.** 332 of
A2's 1,354 depictive icon/label pairs — 25% — would fail `G34` today,
concentrated in `category_set` (84 of 110), `scene` (77 of 96) and `world_strip`
(59 of 66). A2's 820 figures are drawn and shipped, and re-choosing a quarter of
their glyphs in the same commit that invented the law would not have been
reviewable. `B1/00-MASTER-PLAN.md` §6a carries the number and the offer to
reverse it.

**One real finding for A2 came out of writing `G34`**, and it is the §8f lesson
again: the pair-extraction recognised `(label, icon)` and
`(name, icon, descriptor)` but not `(title, [lines], icon)`, which is the shape
`cue_cards` and `before_after` take — so the icon at the top of every role-play
card and every before-and-after panel in both courses had never been looked at
by anything. It is looked at now.

A2 was green at **263 of 263 on both volumes** at that point, mutations
**230 of 230**. Nothing in `units/`, `keys/` or `content/` changed.

## 2026-10-09 — six defects found and fixed, and B1 started

The work on B1 audited A2 and found six things A2 had shipped with. All six
are fixed and A2 is green at a new total of **251 checks** on both volumes.
(263 as of the later entry above.)
Between them they re-ordered 44 closed tasks, re-rendered 40 stale figures,
redrew 61 truncated ones, corrected both back covers, and rebuilt both books
and both answer keys — without changing a word of the course.

1. **The answer-shuffling defect.** 44 closed tasks were answerable without
   being read: 4 of 140 matching tasks printed Column B in exactly Column A's
   order (key `abcde`), 7 more had 3+ answers on the diagonal, 27 of 60 word
   banks printed in answer order and 37 opened with the first answer as the
   first bank word. Every one passed all 238 checks, because they were
   *correct* — just free. New checks `C29` and `C30`; repaired by
   `tools/fix_shuffle.py` (deterministic permutation, seeded from the heading)
   and `tools/reorder_bank_figs.py` (the 42 affected `bank_strip` figures).
2. **Forty stale figures.** `cue_cards` was changed so its card title fits
   instead of overflowing at a fixed 34 px, and the figures were never
   re-rendered. Slots 21 and 33 of all twenty units sat in the repository drawn
   by the old code with `G23` green over all forty, because `G23` hashes each
   PNG against the hash in its own sidecar. New check `G32` compares the SVG on
   disk against what the current code draws.
3. **Sixty-one truncated figures, in the shipped books.** `grammar_contrast`
   called `fit_lines` and drew only the first line, so a two-line label printed
   as half a label — Unit 17's read *“This book was made by”*. A grep found ten
   more call sites with the same shape, and instrumenting `fit_lines` found
   **five jobs across 61 of the 820 figures** doing it: `decision_fork` cut its
   question in every unit of both volumes, `sort_bins` dropped a chip's second
   line in eleven units, and `grammar_contrast`, `timeline`, `talk_shape` and
   `error_pairs` in the rest. Several also overflowed their own cards, because
   the layout was sized for the shortest plausible text. `G13`/`G14` measure
   the glyphs that are drawn, so a line never drawn has nothing to measure.
   New check **`G33`**: `figures.Fitted` records which lines the caller read,
   and the check builds every figure and fails on any that dropped one.
4. **`build_book` deleting the answer key.** The book build sweeps away any
   older file sharing the volume's `EFDL-<level>.<vol>-<Title>-` prefix so a
   rename leaves nothing behind. The answer key has the same prefix, so
   building the book deleted it. A2 never noticed because `build_keys` always
   ran second. `AnswerKey` is now excluded from the sweep.
5. **The coverage law skipping at B1.** `G29` guarded itself on A2's phase-5
   transition flag (`per_unit != dense_per_unit`), which B1 does not have, so
   the one check that enforces "a figure in every sub-section" skipped
   silently at B1. It now gates on the layout the unit is measured against.
6. **A truncated ledger.** `ledgers/grammar.yaml` used unquoted YAML flow
   values, so eight of the twenty `point` strings and two of the twenty `topic`
   strings were silently cut at their first comma — Unit 19's topic read
   *People* and Unit 20's read *News* — and `build_covers` printed the
   truncated grammar list on the back cover of both volumes. Every value is now
   quoted and the covers are rebuilt. Found by B1's `K19`, whose own mutation
   fixture escaped because the key it looked for had been cut in half.

**The toolchain is now shared with B1 rather than copied.** `B1/tools` is a
symlink to `A2/tools`: `abspath` does not resolve symlinks and `__file__` keeps
the path the import used, so the same code reads `A2/` from `A2/` and `B1/`
from `B1/`. `tools/level.py` resolves level, volume, title and file prefix from
a book code, and `K20` asserts that every one of A2's 820 figures is
byte-identical under the shared toolchain. **A change to anything in `tools/`
is now a change to A2 as well — run both levels' suites.**

## Where it stands: **complete**

| | A2.1 *Everyday Life* | A2.2 *Out in the World* |
|---|---|---|
| Units | 1–10, **complete** | 11–20, **complete** |
| Checks | 1,913 executions, 0 failures | 1,913 executions, 0 failures |
| Words | 51,922 | 52,156 |
| Pages | 386 | 396 |
| Figures | 140 | 140 |
| MCQ letters | balanced | A25 B25 C25 D25, chi² 0.00 |
| Book | `build/EFDL-A2.1-EverydayLife-u01-10.docx` | `build/EFDL-A2.2-OutintheWorld-u11-20.docx` |

Twenty units, 251 checks, 4,098 check executions at zero failures, 820 figures,
200 glossary words, two covers, two full answer keys. The mutation suite reports
230/230 caught, 0 escaped. Each unit also passed its own targeted pass of N×10
executions, from 10 after Unit 1 to 200 after Unit 20.

Run `python3 tools/runner.py` and `python3 tools/runner.py --book a22` to see the
live state. Both must end `0 FAIL`.

### The grammar spine, as built

| | A2.1 *Everyday Life* | | A2.2 *Out in the World* |
|---|---|---|---|
| 1 | present simple, frequency adverbs | 11 | going to, present continuous for arrangements |
| 2 | there is/are, some/any, much/many | 12 | will, might |
| 3 | present continuous vs present simple | 13 | must / have to / mustn't |
| 4 | countable/uncountable, articles | 14 | should |
| 5 | past simple — was/were, regular | 15 | present perfect — experience |
| 6 | past simple — irregular | 16 | present perfect vs past simple |
| 7 | comparatives and superlatives | 17 | active and passive |
| 8 | can/can't, could | 18 | first conditional |
| 9 | prepositions | 19 | defining relative clauses |
| 10 | imperatives, sequencers, adverbs | 20 | reported speech |

## If the course is extended

The loop below built all twenty units and would build a twenty-first. Two things
have to be decided before any new unit is written, because both are cross-unit
constraints that cannot be fixed afterwards:

- **The glossary words**, in `ledgers/lexis.yaml`, for every new unit at once.
  E26 forbids a later unit's glossary word from appearing unglossed in an
  earlier one, so picking them unit by unit boxes the last units in. All 200
  of the existing ones were chosen before Unit 11 was written.
- **The Part 8 country**, in `ledgers/cast.yaml`. All twenty in `F12`'s list are
  now used. A twenty-first unit needs a new country added to that list first.

## The loop, per unit N

The user's standing instruction, verbatim: *"after each chapter is done do
chapter number * 10 targeted checks passes (carefully selected ones) and fix
before moving to the next chapter and after each such step create one docx that
has the full updated book up to that point with all the fixes and the answer key
and front and back cover and any other documenation you want to produce links to
and then continue non stop to the next unit"*. Later: deliver the latest unit as
a separate docx as well.

1. `units/a2X-uNN.md` — 42 sub-sections, 110 bold headings, 14 figures,
   5 audio tracks, inside the per-part word budget in `spec/golden.yaml`.
2. `keys/a2X-uNN-key.md` — every closed item keyed, every open task with
   marking points and a sample answer.
3. `content/a2X/uNN_figures.py` — 14 figures, every label word present in the
   unit text (G18).
4. Ledgers: `ledgers/lexis.yaml` (glossary, already fixed for all 20 units) and
   `ledgers/cast.yaml` (every new fact about a character, and the Part 8 country).
5. `python3 tools/fix_counts.py && python3 tools/fix_key_counts.py`
6. `python3 tools/build_figures.py a2X && python3 tools/build_docx.py a2X &&
   python3 tools/build_covers.py a2X`
7. `python3 tools/runner.py --book a2X` → drive to **0 FAIL**.
8. `python3 tools/mutate.py a21` → must report **230/230 caught, 0 escaped**.
   Always a21: the fixtures are literal strings from that book and they test the
   shared check code, not a volume's prose (see `tools/mutations.py`).
9. `python3 tools/targeted.py a2X NN` → N×10 executions, 0 failures.
10. `python3 tools/build_book.py a2X` → the cumulative book.
11. `python3 tools/report.py`
12. Commit and push to `claude/jolly-johnson-9khdgl`. Deliver the cumulative
    book DOCX, the single-unit DOCX, and this file.

## What the checks will catch, every time

These recur in every draft. Anticipating them saves a round:

- **Grammar ahead of its unit (E06).** The spine is in `ledgers/grammar.yaml`.
  In A2.2 the live traps are the present perfect (U15/U16), the passive (U17),
  the first conditional (U18), defining relative clauses (U19) and reported
  speech (U20). A unit about rules wants the passive; a unit about experience
  wants the present perfect. Rewrite, do not widen the spec.
- **Passives (E25).** Three shapes: `is/are/was/were` + participle, modal + `be`
  + participle, and `been`/`being` + participle. Irregular participles included.
- **Off-band words (E02).** Replace where an A2 word says the same thing; gloss
  only where the word is the point. Gloss blocks hold 2–5 items, four per unit.
- **Later units' glossary words (E26).** All 200 glossary words are already
  fixed in `ledgers/lexis.yaml`; a word from unit N+k must not appear in unit N.
- **Gender balance (F10).** 40–60%. Grammar examples default to one gender
  without anybody deciding to; check it before building.
- **Figure label words (G18).** Every word on a figure must appear in the unit.
  Edit the text first, then the figure, or they drift apart.
- **label_me hit points** are `(name, y_fraction, x_fraction)`, in that order,
  and must step down as they step right or the leaders cross.
- **MCQ letters.** `python3 tools/mcq_balance.py a2X` before building. No two
  consecutive the same, no letter over 40% in a unit, book chi² under 7.815.
  Pick the unit's ten-letter sequence *before* writing the key, then reorder the
  options so the right answer lands on the chosen letter. Both volumes finished
  dead level — A2.2 at A25 B25 C25 D25, chi² 0.00 over 100 questions — because
  each unit's sequence was chosen from the running totals rather than at random.
- **T/F/NG sets (C19).** The seeded `0.` example does not count towards the
  three verdicts, because the key writes it as `True *(given)*` and the check
  reads only bare verdicts. So **items 1–3 must themselves span True, False and
  Not Given**. This cost a round in both Unit 17 and Unit 18; check it while
  writing the key, not after.
- **Duplicate question stems (C27).** Book-scoped, and it bites on the generic
  ones: *Which sentence is correct?* collided between U15 and U16. Make every
  grammar-review stem name its own point (*Which sentence uses `for`
  correctly?*).
- **Unit total words (K11).** Every part can sit inside its own budget while the
  unit total still breaks the 4,560–5,280 envelope. Check the total, not just
  the parts; prose added to fix E09 plantings is what pushes it over.
- **Part 8 country (F12).** One country per unit, never repeated. All twenty
  in F12's list are now used: South Korea, Brazil, Japan, Morocco, Iceland,
  Peru, Kenya, Canada, Netherlands, Portugal (A2.1); Norway, India, Ireland,
  New Zealand, Egypt, Poland, Singapore, Mexico, Ghana, Vietnam (A2.2). F12 is
  book-scoped, so an A2.1 country would pass the check and still be a repeat
  inside one course. A twenty-first unit needs a new country added to the list
  in `tools/checks/family_f.py` first, with its cities in `_cities`.

  The last four were matched to their unit's grammar and glossary before any of
  them was written, because four countries and four units leaves no room to
  discover a clash late:

| Unit | Grammar | Part 8 | The story |
|---|---|---|---|
| 17 | active and passive | **Singapore** | used water cleaned and sold back as drinking water — carries `recycle`, `waste`, `produce`, and is all passive by nature |
| 18 | first conditional | **Mexico** | the earthquake alarm that gives the city about a minute — carries `emergency`, `danger`, `safe`, `risk`, `chance` |
| 19 | defining relative clauses | **Ghana** | the kente weavers of Bonwire — carries `tailor`, `artist`, `builder`, `farmer`, and every sentence wants a *who* |
| 20 | reported speech | **Vietnam** | the ward loudspeakers that read out the morning news — carries `news`, `article`, `reporter`, `rumour`, and reported speech is the whole point |

## Check defects found and fixed (do not reintroduce)

The same discipline every time: when a check and the text disagree, verify
against the source book before changing either, and fix check defects and
content defects separately.

- **`lexis.bases()` strips one suffix level only.** It costs us `designers` and
  `builders`, which read as B1+ although `design` and `build` are A2. A
  two-level closure recovers those and leaks `tenses` → `ten` and `shutters` →
  `shut`, and the leak direction silently whitelists off-band words. The
  wordlists are sourced, so they cannot be edited either. Write around it.
- **E25 and the `-en` alternation.** `\w+(?:ed|en)` swallows every teen number,
  so `I was fifteen` read as a passive. The non-participle list now carries
  thirteen–nineteen, `between`, `queen`, `screen`, `teen`.
- **E25's literals are module-level** (`E25_ADJ`, `E25_PART`, `E25_PATS`,
  `E25_CLEFT`). They were inside the function and `tools/diag.py` had its own
  copy, so a fix in one missed the other.
- **F04 only matched digit ages.** The book spells ages out, so `at seventy-one`
  passed a ledger that said 70 (Unit 14). It now reads words as well — but only
  a *present-tense* claim (`is`/`was`/`aged`) counts: `at twenty-four` in
  *started at the hospital at twenty-four* is a past age and no conflict, and
  `at 14` is the street number. Both of those were false positives on the first
  attempt. An age a character legitimately reaches later goes in the ledger as
  `ages_also`.
- **`tools/diag.py`** prints the full untruncated list for any E check on one
  unit: `python3 tools/diag.py a22 16 E02 E04 E25`. The runner truncates to ten
  items, which is how a long tail hid in Units 8 and 9.
- **`Fig.path` needs every `Q` to carry all four coordinates.** `Q x y Z` is two
  arguments short and `_path_points` raises on the `Z`. Close a curve on its own
  start point instead.
- **YAML colons inside a cast fact.** `owns a coat older than Dani: it has been
  relined` parses as a mapping and the ledger stops loading. Use a semicolon.
  This happened twice, so `runner._load_yaml` now names the file, the line and
  the cause instead of raising twenty frames of PyYAML composer internals.
- **Figure label words (G18) have no stemming.** `stand` in the unit does not
  cover `stands` on a figure, and `moves` does not cover `moved`. Copy the
  phrase out of the unit rather than paraphrasing it, or expect a round of
  one-word corrections.
- **Long step labels in `writing_frame` (G14).** Four or more words in the
  left-hand column overlaps the example beside it. Keep them to three.
- **A figure's `alt` text is checked too (G18/G24),** not just its labels. A
  label fix that leaves the alt text paraphrasing the old wording still fails.
  Change both in the same edit.
- **F15 rejects any four-digit year.** The pattern is `\b(19|20)\d{2}\b`, so
  `in 1998` and `in 1987` both failed. Replacing the year with a relative
  distance — `about twenty-five years ago`, `long ago` — passes and reads
  better at A2, which is the point of the check: a book with a year in it is
  a book that dates.
- **A26 wants the literal headers.** The Part 2 Focus Box table must carry
  `**Form**`, `**Use**` and `**Example**`. A cleverer header row (`Said like
  this` / `Reported like this`) fails, and the fix is to keep the three
  columns and put the cleverness in the cells.

## How the last three units were constrained

Kept as a record of why they were written in this order — each was blocked by
the unit after it:

- **Unit 18 (first conditional).** The marker is
  `\bif\b[^.!?]{0,90}\bwill\b`, bounded to one sentence — it used to run
  across the whole unit body and match an `if` in Part 1 against a `will` in
  Part 1's writing model. The real risk in this unit is the opposite one:
  drifting past the first conditional into the second or third (*if the wind
  had turned, I would have lost it*), which no check catches and which is two
  levels above A2. Both Part 6 models in the first draft did it.
- **Unit 19 (defining relative clauses).** Every earlier unit has been written
  around the U19 marker, so Unit 19 is the one unit that may finally use
  `the man who mends`. Watch the reverse: its own glossary (actor, artist,
  author, athlete, builder, farmer, painter, singer, tailor, waiter) is all
  job words, and E20's occupational blocklist plus F11's stereotyping gate
  both sit close to this topic. Describe what a person does, never what people
  of that job are like.
- **Unit 20 (reported speech).** Markers are `told me/him/her/them/us …`,
  `said that` and `asked me/him/… if/whether/where/when/why/what`. Nothing
  earlier may use them, so by Unit 20 they are all free — but the glossary
  word `false` must stay quoted in `ledgers/lexis.yaml` (K07 now enforces it).

## Things measured against the source book, not assumed

Recorded so a later pass does not "fix" them back:

- Gloss blocks hold 2–3 items in the source; up to 5 here, because E02 enforces
  a band the source never enforced on itself (`spec/golden.yaml`).
- The book's rubric uses `will` and `should` from Unit 1 — verbatim in the
  source's own Unit 1 — so E06 reads blockquote prose and skips device labels
  (`ledgers/grammar.yaml`).
- `of course` is one lexical unit, not an early use of `course`
  (`ledgers/lexis.yaml`, `fixed_phrases`).
- The PLUS track carries narrative past from Unit 1; the CORE track does not.
- `ledgers/cast.yaml` is append-only and **was not appended between Units 10 and
  16** — units 11–15 went in without their facts recorded. Back-filled on
  2026-10-07. F04 can only adjudicate ages and Amina's opening hours
  mechanically, so the free-text facts are the only thing stopping Unit 19 from
  contradicting Unit 16. Append as you write, not afterwards.

`spec/golden.yaml` is hash-locked by `spec/golden.sha256`. **Re-hash after any
edit** or check K01 goes red:
`python3 -c "import hashlib;open('spec/golden.sha256','w').write(hashlib.sha256(open('spec/golden.yaml','rb').read()).hexdigest()+chr(10))"`

---

## Phase 5 of the visual plan: the 41-slot layout, proved on Unit 1

`00-VISUAL-PLAN.md` is the approved plan. Phases 0–4 are done and committed.
Phase 5 builds the fifteen new figure jobs and takes **Unit 1 only** to the
full layout, as the review gate before 540 more pieces of artwork are made.

### How one unit can be dense while nineteen are not

`spec/golden.yaml → figures.dense_units` names them (`a21: [1]` today).
A unit in that list is measured against `dense_slots` (41 rows) and
`dense_per_unit`; every other unit against `slots` (14) and `per_unit`.
`checks/family_g._fig(ctx, u)` is the one place that chooses. Everything else
— the boxes, the full-page set, the byte budgets — is shared, because a slot
NUMBER means the same job in both tables. That is what the 2026-10-08 renumber
bought. Phases 6 and 7 move every unit over; then `dense_slots` becomes
`slots` and the block goes.

### The fifteen new jobs

`word_grid` · `bank_strip` · `sound_shape` · `annotated_lines` · `sort_bins` ·
`error_pairs` · `dialogue_strip` · `match_columns` · `question_cards` ·
`info_gap_pair` · `talk_shape` · `sequence_steps` · `decision_fork` ·
`glossary_grid` · `close_scene`, plus eight icons (`alarm`, `window`, `radio`,
`bread`, `question`, `speech`, `pencil`, `street`).

Two constraints shaped all of them, and will shape any more:

- **G18 has no stemming and no morphology.** Every word drawn must appear in
  the unit's own text. That is why `sound_shape` measures syllables and never
  prints one: `rou` is not a word. It is also why `talk_shape` shows shares of
  a minute as widths rather than writing "seconds", which Unit 1 does not use.
  The check is a substring test, so a singular drawn against a plural in the
  text passes (`reason` against `reasons`); an invented word does not.
- **A figure taller than ~712 px prints narrower than the text width.** The
  box is 6.2604 × 3.0938 in and `contain` solves for whichever side binds, so
  at 1440 px wide anything over 1440 × 3.0938 / 6.2604 = 712 px is limited by
  height and leaves white down both sides. Keep in-flow canvases under that.

### Three defects the proof build found

- **`sort_bins` sized its bins for exactly two and ran a third clean off the
  canvas.** Now sized from `len(bins)`.
- **`dialogue_strip` alternated sides by turn index, not by speaker**, so Maya
  sat on the left in turn 1 and the right in turn 4. The side now belongs to
  the speaker. In a dialogue figure the shape IS the content.
- **A full-page image's caption printed alone on a page of its own, in all
  twenty units.** The image owns a zero-margin section, so the paragraph after
  it starts a new section and therefore a new page. `build_docx.preprocess`
  now drops the PRINTED caption for a full-page figure; the line stays in the
  markdown, which is what every G check reads, and the same words still reach
  a screen reader as the image's alt text. H12 knows about it. Worth one page
  a unit, twenty a volume.

### Known and left alone

The unit title page (title line + strap, then nothing) is the structural cost
of a full-page opener: a section break with different margins always starts a
new page, so the opener cannot share a page with the lines above it. Moving
the title under the opener would recover a page a unit but A01 requires the
title to be line 1 of the markdown. Recorded, not fixed.

### What the plan under-counted

`00-VISUAL-PLAN.md` section 4 named **two** sub-sections to leave plain. The
real architecture has **four**: the plan's Part 1 and Part 2 rows accounted for
six and five sub-sections where every unit has seven of each. The two extra —
`Part 1: Daily Life — Multiple Choice` and `Part 2: Grammar Review` — are both
tests of what has just been taught, where a picture would cue the answers.
All four are in `figures.no_figure_subs` with their reasons, and `G29` checks
the list in **both** directions: a sub-section that is excused and then gains a
figure is a finding too, or the list rots into a list of places nobody looked.

---

## Phase 6: A2.1 complete at 41 figures a unit

All ten units of A2.1 are on the dense layout. **410 figures, 155 icons, 0
failures across 251 checks.** The tooling that made it safe is in `tools/` and
is the thing to read before starting A2.2 or B1:

```
python3 tools/figure_source.py a21 7            # what each slot has to work with
python3 tools/figure_source.py a21 7 --decide   # only the seven that need a decision
python3 tools/gen_figures.py   a21 7 --write    # write the 20 generated slots
python3 tools/gen_figures.py   a21 7 --captions # insert the 27 captions
python3 tools/preflight_figures.py a21 7        # everything the suite would say, in seconds
```

Then patch the seven judgement slots with `fix_slots.patch(book, unit, slot,
call, alt)`, preflight again, render, build, check. The loop per unit is about
fifteen minutes, nearly all of it the build.

### The seven slots that need a person

| Slot | Why a parser cannot do it |
|---|---|
| 10 | Part 1's short writing task has no Check-before-you-finish list, so there are no step labels to copy |
| 11 | which phrase to ring; the task says "underline the verbs", not which ones |
| 14 | what the two or three bins are, and what the chips should say |
| 22 | whether the task's clauses read as beat labels |
| 37 | which four places the Part 9 reading walks past, and in what order |
| 38 | what each branch of the decision costs, from the model and the reading |
| 6 | only where the Pronunciation section is written in a new shape |

### Four things that will bite again

- **G18 has no morphology.** It is a substring test against the unit body, so
  a singular drawn against a plural passes (`reason` inside `reasons`) and
  `grows` against `grew` does not. Preflight catches it in two seconds; the
  build does not catch it for ten minutes.
- **A caption is counted prose.** `B02` counts the string `is not needed`
  wherever it appears, captions included. Preflight checks every caption
  against every device pattern in `golden.devices`.
- **A canvas over ~712 px prints narrower than the text width**, because the
  fit box solves for whichever side binds. Preflight warns.
- **The icon map is matched on whole words**, so `bus stop` must come before
  `bus`, and a label that is itself an icon name needs no entry at all.

---

## Phase 7: A2.2 complete. The course is 820 figures.

Both volumes, twenty units, 41 figures each, 0 failures across 251 checks.
A2.1 is 492 pages, A2.2 is 502.

A2.2's ten Pronunciation sections are written in a fifth shape -- `phrase —
explanation`, with the key word italicised in the explanation --
`figure_source.pron_kind` reads it and the rubric together. Where the
contrast is an ending or the shape of the voice rather than a word (units 16,
17, 18, 20), the ring is chosen by hand.

### If you touch the build again

- **LibreOffice gets 2700 s, not 900.** A dense volume is ~500 pages and
  18 MB. The old limit killed the A2.2 conversion, and because `TimeoutExpired`
  is uncaught it took `build_book` down with it: no PDF, no answer key, and a
  chain that stopped silently. If a build ends with a DOCX and no PDF, this is
  why.
- **Never run two `build_book.py` for the same volume at once.** They both
  delete the existing `EFDL-*` files and write the same path.
- **A book DOCX inspected mid-build looks broken.** pandoc writes it first and
  `postprocess` rewrites the extents and inserts the full-page sections
  afterwards, so a file read between the two has no zero-margin sections and
  pandoc's own image sizes. Wait for the build to say it is done.

### Delivery

`tools/make_release.py` copies the shipped files into `release/` and nothing
else; `build/` stays untracked. Run it at a milestone, not on every build.
