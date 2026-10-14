# English for Journalists · International Edition · Book 2 — *Across Borders*

A structural twin of **English for Journalists · Syria Edition · Book 2**: the same
course at the same level, with the national frame replaced by a cross-border one.
Every structural fact about the source was measured first and then reproduced — 10
units, 980 lettered exercises in the source's exact per-part distribution, 283 figure
placements, the source's own page count, and its answer-key arithmetic.

| | Syria Edition · Book 2 | International Edition · Book 2 |
|---|---|---|
| Local newsroom | *(Al-Manara itself)* | **Kalina Daily**, in the town the story is about |
| The learner's newsroom | **Al-Manara**, Damascus | **Atlas Wire**, a world desk in Geneva |
| Regional partner | **Al-Ufuq** | **the River Basin Network** |
| International partner | **Meridian Newswire** | **the Meridian Post** |
| Continuous story | the Hayy al-Yasmin coverage grows | **The Seven Crossings** — a four-newsroom co-production on the Vara basin |
| Learner | a journalist joining a partnership | a journalist working inside one, in both directions |

Putting Atlas Wire in the **middle** tier is the decision the whole book turns on: it
has a larger partner above it, so every source case about a big partner's pressure
transposes unchanged, and a smaller partner below it, so the book can also teach what
an international outlet owes the local newsroom whose story it is carrying.

## What is here

```
PLAN.md            the adaptation plan, the transposition, and 42 fidelity criteria
content/           the book itself, in a line-oriented DSL (readable as prose)
build/render.py    the design system of the source docx, decoded into OOXML
build/compile.py   DSL → Student's Book (.docx)
build/render_md.py DSL → Student's Book (.md)
build/figures.py   the drawing toolkit
build/make_figures.py  the 116 illustrations
build/figures/     the generated illustrations
qa/                three automated suites + the QA report
dist/              the finished Student's Book, .docx and .md
```

## Build

```sh
python3 build/make_figures.py     # draw the 116 illustrations
python3 build/compile.py          # → dist/…_Book2_FULL_StudentBook.docx
python3 build/render_md.py        # → dist/…_Book2_FULL_StudentBook.md
python3 qa/check_parity.py        # structural parity with the source
python3 qa/check_answers.py       # one answer per item, every closed exercise
python3 qa/check_content.py       # spelling, markup, figures, recycling
```

Requires `matplotlib` and `Pillow` for the figures; the .docx writer has no dependencies.

## The grammar sequence

| Unit | Grammar | Beat |
|---|---|---|
| 1 | present perfect vs past simple (+ ever/never/just/already/yet) | a year on; a foreign daily writes |
| 2 | used to · would · past continuous | the backstory of the valley |
| 3 | will · going to · present continuous | planning across time zones |
| 4 | reported speech · say/tell · according to | **wholly cross-border**: filing to a foreign desk |
| 5 | zero & first conditionals · time clauses | the conditions for publishing |
| 6 | might/may/could · should/ought to | a claim spreads across the basin |
| 7 | the passive across tenses | **wholly cross-border**: writing for the wire |
| 8 | comparatives · superlatives · as…as, too/enough | an explainer for a distant reader |
| 9 | quantifiers · articles · connectors | co-writing with two partners |
| 10 | gerunds and infinitives | **wholly cross-border**: the co-production, and the capstone |

## A note on real and invented content

The facts about journalism around the world in 2026 are true, dated and attributed on
the page. Atlas Wire, Kalina Daily, the River Basin Network, the Meridian Post, their
staff, the town of Kalina, the river Vara, the seven crossings and the people in the
stories are invented, for practice. Real people and real organisations appear only in
true, sourced facts — never in an invented quote, and never in an invented number.
