# Writing the Five Fields

**750 graded exercises in Standard English, transitions, synthesis and quantitative
evidence.** The third book of the series, after *Words in Context*
(`../sat-vocabulary`) and *Reading the Five Fields* (`../sat-reader`).

The Writing and Language half of the SAT asks about twenty-seven questions. A student
who has met the same rule twenty, thirty, fifty times stops reasoning about it and
starts seeing it, which is the only state in which these questions can be answered at
the pace the test sets. This book gives each of fifteen elements fifty exercises: one
part of ten in each of five knowledge domains, rising from Foundation to Stretch
inside every part.

- `PLAN.md` — the design, written before the exercises, and §14, the record of the
  fifteen things measurement changed in it.
- `build/check-report.md` — the 6,000 per-exercise passes and the 120 book-level
  checks, with what each one measures.
- `build/Writing-the-Five-Fields.pdf` — the book, 325 pages, US Letter.
- `build/Writing-the-Five-Fields.docx` — the same, editable.

## The grid

Fifteen elements × five knowledge domains × ten exercises = 750.

| | Element | Home domain | Part of the test |
|---|---|---|---|
| 1 | Subject-verb agreement | Biology and Earth Science | Standard English Conventions |
| 2 | Verb tense and aspect | History and Civics | Standard English Conventions |
| 3 | Pronoun-antecedent agreement | Social Science | Standard English Conventions |
| 4 | Pronoun case and clarity | Humanities | Standard English Conventions |
| 5 | Plural and possessive nouns | Humanities | Standard English Conventions |
| 6 | Modifier placement | Physical Science | Standard English Conventions |
| 7 | Parallel structure | Physical Science | Standard English Conventions |
| 8 | Finite verbs and fragments | History and Civics | Standard English Conventions |
| 9 | Sentence boundaries | Biology and Earth Science | Standard English Conventions |
| 10 | Supplements and paired punctuation | History and Civics | Standard English Conventions |
| 11 | Colons, semicolons and lists | Physical Science | Standard English Conventions |
| 12 | Restrictive and nonrestrictive elements | Biology and Earth Science | Standard English Conventions |
| 13 | Transitions | Social Science | Expression of Ideas |
| 14 | Rhetorical synthesis | Humanities | Expression of Ideas |
| 15 | Tables and graphs | Social Science | Information and Ideas |

The five domains carry their own grammar, which is why the book is a grid and not a
list: a subject-verb agreement question about a Latin plural in biology, about a
collective noun in social science and about an apparatus list in physics are three
different questions. Each domain is the home of exactly three elements, and a home
part carries every one of its chapter's hardest rules.

## What "graded" means here

Position inside a part fixes the level and the difficulty, so the ladder is identical
in all seventy-five parts and a student knows what an exercise is meant to cost
before attempting it.

| Level | Positions | Sentence with the answer in place | Words between the governing word and the blank |
|---|---|---|---|
| Foundation | 1, 2 | 12–28 words | 0–3 |
| Developing | 3, 4, 5 | 18–38 words | 2–8 |
| Target | 6, 7, 8 | 24–46 words | 5–14 |
| Stretch | 9, 10 | 30–62 words | 10–24 |

Difficulty runs easy at 1–3, medium at 4–7, hard at 8–10. The book holds 225 easy,
300 medium and 225 hard, and 150 / 225 / 225 / 150 by level.

## What makes a wrong answer wrong

Every distractor in the book names its own fault — a `move` from its chapter's closed
set — and **quotes the span of its own text that carries it**. Forty-nine moves fill
sixty-two chapter slots. Twenty-six of them have a machine predicate in
`tools/wlex.py`, which must fire on the distractor's span and stay silent on the key;
the other twenty-two are declared undetectable, and for those the quoted span must
not appear in the key at all. Every distractor in the book is checked by one of the
two, never by neither.

`tools/wlex.py` answers `True`, `False` or `None`, and `None` — "I cannot tell" — is
a first-class answer rather than a failure. The library has 144 self-tests of its
own, because four distinct false positives in one function (`has_finite` reading
"having collapsed" as a finite verb, and three more) would each have passed a whole
chapter of fragments as sentences.

## The checks

```
python3 tools/wlex.py              # 144 self-tests of the predicate library
python3 tools/xchecks.py           # 6,000 per-exercise + 120 book-level checks
python3 tools/xchecks.py -v        # every line
python3 tools/xbal.py              # the balances that only fail at book scale
python3 tools/xdrift.py            # re-emit all 15 chapters and diff against data/
python3 tools/xnum.py              # audit every numeral in chapter 15 against its table
python3 tools/xbuild.py            # the .docx, the .pdf and build/doc-stats.json
```

Ten of the 120 are claims about the printed page — that no exercise is split across a
page break, that ninety Arabic blocks were rendered, that the page count falls inside
its declared band — and a claim about a page can only be tested on a page, so
`tools/xbuild.py` writes `build/doc-stats.json` from the PDF and the document's own
XML and `tools/xchecks.py` reads it.

## Writing one chapter

Each chapter is one authoring module, `tools/w_C01.py` … `tools/w_C15.py`, holding
the Arabic rule page, five part dicts of ten exercises, and nothing else. The
emitter fills in the level, the difficulty, the stem and the planned key letter from
`data/spec.yaml`, so a chapter cannot drift from the plan by mistyping.

```
python3 tools/xpart.py w_C11 HIS   # one part, before the other four exist
python3 tools/xrun.py w_C11        # the whole chapter, writing data/exercises/C11.yaml
python3 tools/xchecks.py --partial # everything written so far
```

## The Arabic

Ninety blocks: a rule page in each of the fifteen chapters, in four parts — the rule,
how the test asks about it, the trap, and why it matters — and a note in each of the
seventy-five parts on what that knowledge domain does to that element. They are
there so that a student who thinks about grammar in Arabic does not have to translate
the explanation before using it. The checks measure their length, that they are at
least 92 per cent Arabic script, that each names its element and its domain, and that
no Latin text beyond `SAT`, `Text` and the four option letters appears in them.

A note on the PDF: `pdftotext` scrambles some Arabic words when it extracts them,
which is a property of the converter and not of the document. The Arabic is counted
in the `.docx` XML, where the text is exact, and the rendered pages are correct.

## What this book adds to the series

Book 2 holds 200 passages with 2,000 questions, and 200 of those are punctuation
questions — all of them easy by design, since slot 9 is that book's easy anchor at
every level. Half of Standard English Conventions, the Form, Structure and Sense
skill, has no coverage there at all, and quantitative evidence has none: not one
figure appears in 200 passages. This book covers both, drills punctuation at hard
difficulty, and gives transitions a chapter of fifty rather than one sample per
passage.
