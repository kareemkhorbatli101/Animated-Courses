# QA report — English for Media and Communications 2 · International Edition

Three automated suites, run against the content files and the built `.docx`.
Every number below was measured, not asserted: the source column comes from
`126ab3d2-EMC2_Book_U1-U10_StudentBook_1.docx` read directly as OOXML, and the
edition column from `dist/EMC2_International_StudentBook.docx`.

```
python3 qa/check_parity.py     # the 42-slot template, bars, tables, MCQ, audio
python3 qa/check_texts.py      # every text block the source sets a range for
python3 qa/check_content.py    # typography, spelling, scaffolding, transposition
```

All three pass.

---

## 1 · Shape

| Measure | Source | International Edition |
|---|---|---|
| Units | 10 | 10 |
| Named tasks | 421 (42 per unit, 43 in Unit 10) | 421, in the same slot order |
| Part bars | 110 (11 per unit) | 110 |
| Pages (LibreOffice) | 150 | **152** (+1 %) |

This is the most regular of the five sources: every unit has the same 42 slots in
the same order, and of 43 slots only seven vary between units — each by a single
item (a fourth gap, a fifth can-do line, a plan on one Part 6 task rather than
another). The edition reproduces that regularity, including the variations.

Unit 10's extra slot, **Part 10: End of Course — The Four Values**, is kept where
the source puts it, before the glossary.

## 2 · Elements

Counted from the OOXML of both documents, by fill colour and by the text each
element carries. These are not sampled: they are every occurrence in both files.

| Element | Source | Edition |
|---|---|---|
| Tables (matching pairs + Grammar Focus) | 150 | 150 |
| Multiple-choice options (10 stems × 4) | 400 | 400 |
| Audio lines (`🔊 Audio Track n.m`) | 50 | 50 |
| Gloss lines (`#EEF3F9`) | 50 | 50 |
| Word banks (`#FBFBEF`) | 30 | 30 |
| Model paragraphs | 90 | 90 |
| Check lists | 50 | 50 |
| Plan lines | 40 | 40 |
| Watch out! boxes (`#FBECEC`) | 10 | 10 |
| Can-Do checklists | 10 | 10 |
| Orange bars — Warm Up and Part 10 (`#FF9900`) | 20 | 20 |
| Blue bars — Parts 1–6, 8, 9 (`#0066CC`) | 80 | 80 |
| Teal — Part 7 bar and Grammar Focus header (`#009688`) | 50 | 50 |
| Rubric strips (`#E6F3FF` / `#FFF9E6`) | 391 | 391 |
| Text blocks (`#F8F8F8`) | 282 | 281 |

The source's quirks are reproduced rather than corrected. The Grammar Focus
table carries a four-column header over three-cell data rows; the line after the
Part 2 Notice is a rubric strip rather than plain text; "Useful language" and the
role cards are shaded like a reading, while "Useful phrases" and "Before you
listen" are not.

## 3 · Length

Rendered words per unit, against the source's own.

| Unit | Source | Edition | Δ |
|---|---|---|---|
| 1 | 5,378 | 5,499 | +2 % |
| 2 | 5,435 | 5,399 | −1 % |
| 3 | 5,435 | 5,593 | +3 % |
| 4 | 5,500 | 5,465 | −1 % |
| 5 | 5,478 | 5,470 | −0 % |
| 6 | 5,502 | 5,547 | +1 % |
| 7 | 5,493 | 5,660 | +3 % |
| 8 | 5,465 | 5,583 | +2 % |
| 9 | 5,525 | 5,607 | +1 % |
| 10 | 5,640 | 5,690 | +1 % |
| **Book** | **54,851** | **55,413** | **+1 %** |

Tolerances: ±10 % per unit, ±8 % for the book.

## 4 · Text blocks

Every text the source sets a measurable range for is held inside that range.

| Block | Source range |
|---|---|
| Warm-up reading | 96–112 |
| Part 2 Notice | 86–119 |
| Listening n.2 · n.3 · n.4 | 134–155 · 134–154 · 118–131 |
| Listening n.5 (manager's briefing) | 144–166 |
| Part 5 main text · second text | 207–234 · 170–203 |
| Part 6 models (four per unit) | 68–111 |
| 7E model | 92–109 |
| Part 8 reading | 207–225 |
| Part 9 case · model decision | 165–193 · 86–97 |
| Unit glossary | 113–158 |

## 5 · Style and integrity

Checked by `check_content.py` and by read-through.

* Curly quotation marks and apostrophes throughout; no straight marks anywhere.
* The source's typography reaches the render: `·` `—` `→` `☐` `○` `●` `🔊` `‘ ’`.
* British spelling, with a check for fifteen American forms including *rumor* for
  **rumour** and *minimize* for **minimise**.
* Scaffolding checked slot by slot against the source's own pattern: every
  matching task has an option that is not needed and says so; every numbered
  practice opens with a worked `0.`; every role play has a model and two cards;
  every Part 6 task has a model and a check list, with two plan lines across the
  four; the Grammar Focus box carries a Remember line, a Watch out! and a Gloss.
* Every unit invites the learner's own country, team or workplace into a
  discussion task.
* Nothing of the Damascus setting survives: eleven place names, the organisation
  name and the six character names are checked for and absent.
* Meridian Relief, its six offices, its staff, the people in its stories and
  every figure are invented. The communications practice is true and general:
  informed consent, safeguarding, do no harm, attribution, read-back, embargo,
  right of reply, correction notices, data minimisation and retention periods.
* No real organisation, government, news outlet or platform is named at all, so
  none is given invented words or figures.
* No country is characterised. The six offices are settings, not subjects, and
  the three tasks the source names after one country become comparisons the
  learner makes from wherever they are.
* The source's ethic is carried over unchanged, including the four values the
  course closes on: consent, accuracy, dignity, do no harm.
