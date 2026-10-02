# CMA Part 1 · Set D1 — Absorption and Variable Costing

Interactive handouts for teaching CMA Part 1, Section D.1 Measurement Concepts,
to learners whose accounting is strong and whose English is the obstacle.

## Build

    python3 check.py      # structure, language and arithmetic
    python3 book.py       # writes the .docx

## How the set is put together

`data.py` holds the three scenarios and derives every figure from them. Nothing
in a handout or an answer key is a typed number, so a handout and its key cannot
disagree, and changing an input re-flows the whole set.

`blanks.py` turns brace notation into numbered write-in rules and collects the
answer key from the same string the student reads. The key is a by-product of
the exercise rather than a parallel document.

`check.py` enforces three things that are easy to get wrong by hand:

  * structure — every exercise has as many answers as items, every question has
    four options, a valid key and a real explanation;
  * language — no term is used before the handout that teaches it, no term is
    glossed in a handout that never uses it, and exam-register teaching text
    does not appear before the student has met the idea at R1 and R2;
  * arithmetic — every journal entry balances, and every identity the handouts
    assert is recomputed from `data.py`. The two independent routes to
    absorption income in Scenario 2 must agree, and the Handout 5 ledger must
    prove the same difference as the Handout 3 reconciliation formula.

## The three registers

Every piece of prose declares the English it is written in, and the teacher sees
the marker in the margin.

  * **R1** teaching English — short sentences, one clause, active voice
  * **R2** textbook English — passives and nominalisation
  * **R3** exam English — authentic CMA stem syntax, traps included

Practice questions are R3 from Handout 1 onward. The scaffolding is in the
teaching, never in the assessment.
