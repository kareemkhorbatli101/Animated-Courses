# A2 — the finished course, and how to work on it

Everything here is reproducible from the repository. If a session ends, a new
one can pick up from this file alone.

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

Twenty units, 230 checks, 3,826 check executions at zero failures, 280 figures,
200 glossary words, two covers, two full answer keys. The mutation suite reports
212/212 caught, 0 escaped. Each unit also passed its own targeted pass of N×10
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
8. `python3 tools/mutate.py a21` → must report **212/212 caught, 0 escaped**.
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
