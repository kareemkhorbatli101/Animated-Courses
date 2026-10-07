# A2 — how to resume this build

Everything here is reproducible from the repository. If a session ends, a new
one can pick up from this file alone.

## Where it stands

| | A2.1 *Everyday Life* | A2.2 *Out in the World* |
|---|---|---|
| Units | 1–10, **complete** | 11–17 written, 18–20 to go |
| Checks | 1,913 executions, 0 failures | 1,352 executions, 0 failures |
| Pages | 386 | 274 |
| Figures | 140 | 98 |
| Book | `build/EFDL-A2.1-EverydayLife-u01-10.docx` | `build/EFDL-A2.2-OutintheWorld-u11-NN.docx` |

Run `python3 tools/runner.py` and `python3 tools/runner.py --book a22` to see the
live state. Both must end `0 FAIL`.

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
  options so the right answer lands on the chosen letter. A2.2 stands at
  A18 B17 C18 D17 after Unit 17 (chi² 0.06), so units 18–20 want roughly 7 of
  each letter, spread 2/3 per unit.
- **Duplicate question stems (C27).** Book-scoped, and it bites on the generic
  ones: *Which sentence is correct?* collided between U15 and U16. Make every
  grammar-review stem name its own point (*Which sentence uses `for`
  correctly?*).
- **Unit total words (K11).** Every part can sit inside its own budget while the
  unit total still breaks the 4,560–5,280 envelope. Check the total, not just
  the parts; prose added to fix E09 plantings is what pushes it over.
- **Part 8 country (F12).** One country per unit, never repeated. Used so far:
  South Korea, Brazil, Japan, Morocco, Iceland, Peru, Kenya, Canada,
  Netherlands, Portugal (A2.1); Norway, India, Ireland, New Zealand, Egypt,
  Poland (A2.2). Remaining for units 17–20: **Vietnam, Singapore, Ghana,
  Mexico** — exactly four countries for exactly four units, so none is free to
  waste. F12 is book-scoped, so an A2.1 country would pass the check and still
  be a repeat inside one course; do not. Matched to each unit's grammar and
  glossary ahead of time, because four countries and four units leaves no room
  to discover a clash late:

| Unit | Grammar | Part 8 | The story |
|---|---|---|---|
| 17 | active and passive | **Singapore** | used water cleaned and sold back as drinking water — carries `recycle`, `waste`, `produce` and is all passive by nature |
| 18 | first conditional | **Mexico** | the earthquake alarm that gives the city about a minute — carries `emergency`, `danger`, `safe`, `careful`, `risk`, `chance` |
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

## Traps specific to units 18–20

Each of the last three units is blocked by the unit after it, so the order
matters:

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
