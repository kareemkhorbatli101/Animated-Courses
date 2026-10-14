# English for Journalists · International Edition — Student's Book

A structural twin of **English for Journalists · Syria Edition**: the same course,
with the national frame replaced by a cross-border one. Every structural fact about
the source was measured and reproduced — 10 units, 780 lettered exercises in the
source's exact per-part distribution, 245 figure placements, 59,630 running words.

| | Syria Edition | International Edition |
|---|---|---|
| Newsroom | Al-Manara, Damascus | **Atlas Wire**, a world desk in Geneva |
| Continuous story | the return of Hayy al-Yasmin | the reopening of the **Kalina crossing** |
| Factual backdrop | Syria's media landscape | world press freedom and the safety of journalists |
| Learner | a journalist in a national newsroom | a journalist working across borders |

## What is here

```
PLAN.md            the adaptation plan, the transposition, and 65 fidelity criteria
content/           the book itself, in a line-oriented DSL (readable as prose)
build/render.py    the design system of the source docx, decoded into OOXML
build/compile.py   DSL → Student's Book (.docx)
build/render_md.py DSL → Student's Book (.md)
build/figures.py   the drawing toolkit
build/make_figures.py  the 100 illustrations
build/figures/     the generated illustrations
qa/                three automated suites + the QA report
dist/              the finished Student's Book, .docx and .md
```

## Build

```sh
python3 build/make_figures.py     # draw the 100 illustrations
python3 build/compile.py          # → dist/…_FULL_StudentBook_1.docx
python3 build/render_md.py        # → dist/…_FULL_StudentBook.md
python3 qa/check_parity.py        # structural parity with the source
python3 qa/check_answers.py       # one answer per item, every closed exercise
python3 qa/check_content.py       # spelling, markup, figures, recycling
```

Requires `matplotlib` and `Pillow` for the figures; the .docx writer has no dependencies.

## A note on real and invented content

The facts about journalism around the world — the press-freedom indexes, the safety
figures, the international days, the codes of ethics — are true, dated and attributed
on the page. Atlas Wire, its staff, the town of Kalina, the river Vara, the crossing and
the people in the stories are invented, for practice. Real people and real organisations
appear only in true, sourced facts — never in an invented quote.
