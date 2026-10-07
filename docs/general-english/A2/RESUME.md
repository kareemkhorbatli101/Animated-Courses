# A2 — how to resume this build

Everything here is reproducible from the repository. If a session ends, a new
one can pick up from this file alone.

## Where it stands

| | A2.1 *Everyday Life* | A2.2 *Out in the World* |
|---|---|---|
| Units | 1–10, **complete** | 11–20, in progress |
| Checks | 1,913 executions, 0 failures | grows with each unit, 0 failures |
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
- **Part 8 country (F12).** One country per unit, never repeated. Used so far:
  South Korea, Brazil, Japan, Morocco, Iceland, Peru, Kenya, Canada,
  Netherlands, Portugal (A2.1); Norway, India, Ireland (A2.2). Remaining:
  Vietnam, Singapore, New Zealand, Poland, Ghana, Mexico, Egypt.

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

`spec/golden.yaml` is hash-locked by `spec/golden.sha256`. **Re-hash after any
edit** or check K01 goes red:
`python3 -c "import hashlib;open('spec/golden.sha256','w').write(hashlib.sha256(open('spec/golden.yaml','rb').read()).hexdigest()+chr(10))"`
