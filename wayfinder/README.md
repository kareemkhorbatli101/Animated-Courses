# Wayfinder English

A six-book English course for international students, from pre-A1 to B2. Written from a
specification; every word of it is new.

| Book | Level | CEFR | Deliverable | Pages | Words | Figures | Audio cues |
|---|---|---|---|---|---|---|---|
| 1 | Wayfinder Starter | pre-A1 → A1 | `Wayfinder-Starter-Book1.docx` | 219 | 51,200 | 183 | 195 |
| 2 | Wayfinder 1 | A1 → A2 | `Wayfinder-1-Book2.docx` | 228 | 54,700 | 181 | 194 |
| 3 | Wayfinder 2 | A2 | `Wayfinder-2-Book3.docx` | 234 | 57,100 | 174 | 193 |
| 4 | Wayfinder 3 | A2+ → B1 | `Wayfinder-3-Book4.docx` | 264 | 72,300 | 194 | 194 |
| 5 | Wayfinder 4 | B1+ | `Wayfinder-4-Book5.docx` | 290 | 77,200 | 194 | 194 |
| 6 | Wayfinder 5 | B2 | `Wayfinder-5-Book6.docx` | 298 | 85,700 | 194 | 194 |

**398,000 authored words · 1,120 figures · 1,164 audio cues · 1,533 pages.**

Each book is one Word file: front matter, a Starting Point, twelve units of sixteen pages, and
back matter. Nothing is a placeholder.

## What the series is

Portmere is a coastal city that is not on any map. The same cast moves through all six books over
five years: Nadia, who arrives in Book 1 unable to fill in a form and in Book 6 tells eighteen
new arrivals the part of her story she had trained herself to cut; Tomas, Priya, Oksana, Adeel,
Mei, Linh, Samira and the rest. Four new arrivals join in Book 2. Nothing about any of them is
drawn from a real person.

Each book is built on the same lesson architecture — Vocabulary, Real-life Reading, Grammar,
Everyday Conversation, Writing, Team Up & Review — and every lesson carries a **speaking spine**:
at least three oral slots and at least one open-ended question, enforced mechanically by
`_series/bookcheck.py` rather than left to the author's memory.

## The spine of the six books

| | The skill the book is for |
|---|---|
| **Starter** | Saying the thing at all: a name, a date, a form, a reason |
| **1** | Asking rather than guessing — and understanding the answer |
| **2** | Explaining what happened, to somebody who was not there |
| **3** | Asking who decided something, and reading a document that does not want to be read |
| **4** | Reporting what somebody else said without becoming them |
| **5** | The difference between what you know and what you are claiming |

## Every number in these books is real

Sixty-odd published figures across the six books, checked by search while each book was written,
named in the text where they are used, and listed unit by unit in `_series/SOURCES.md`: the UN,
the OECD, the IEA, UN-Habitat, the WHO, the ILO, Eurostat, Eurobarometer, the European Commission,
the World Economic Forum, the Reuters Institute, International IDEA, and two arXiv studies.

Four of them are genuinely hard to use, and the books say so in print rather than quietly dropping
them: one whose base is not stated anywhere; one whose reference year is four years before its
publication year; two peer-reviewed studies of the same thing that differ by a factor of three;
and two summaries of a single IEA report that give different projections. In each case the
difficulty became the lesson.

Everything else — every character, company, letter, form, notice, minute, clause and review — was
written for these books.

## American base, switchable to British

The base text is American English. `_series/VARIANTS.json` defines the switchable tokens, and
gate 14 in `bookcheck.py` fails the build if a British spelling reaches the base by accident. A
British edition is a token swap, not a rewrite.

## Clean-room

The architecture — the lesson sequence, the page grid, the box types, the review pattern — is a
method, and methods are not protected expression (17 U.S.C. §102(b); *Baker v. Selden*). Every
word, character, figure, document, statistic and task in these six books is original to them.

## Built from source

```bash
python3 wayfinder/_build/render_book6.py   # SVG → PNG at scale 2, via Chromium
python3 wayfinder/_build/build_book6.py    # markdown + figures → one .docx
python3 wayfinder/_series/bookcheck.py wayfinder/level5
```

| Path | |
|---|---|
| `<level>/text/*.md` | the text — one file per unit, plus `front.md` and `back.md` |
| `<level>/figures/*.png` | the rendered figures, in that level's accent |
| `_build/art_*.py` | the parametric art system: 340 icons, a cast of 19, scenes, charts, realia |
| `_build/spec_*.py` | what every figure in every book contains |
| `_build/build_docx.py` | the markdown → Word converter |
| `_series/bookcheck.py` | the book-level gates |
| `_series/SOURCES.md` | every cited figure, unit by unit, with its honesty notes |
| `../SERIES-PLAN.md` | the authoring contract the six books were written against |

## For the website build

Every structural element is a named Word style — `WF Lesson`, `WF Rubric`, `WF Audio`,
`WF Model`, `WF Figure`, `WF Box Head` — and every image carries its alt text as image metadata
and its figure id as the image title. Six books, one parser, no guessing from formatting.

## Known gaps, in all six books

Answer keys belong in the Teacher's Book. Teacher's notes exist for Starter Unit 1 only. Six of
the sixteen audio types per unit are deliberately unprinted and their scripts are in the Teacher's
Book. Contents page numbers are placeholders pending design pagination. Three gates need a
per-unit META spine that is not yet written, and two are human reads by design.
