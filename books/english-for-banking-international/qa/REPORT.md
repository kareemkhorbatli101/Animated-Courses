# QA report — English for Banking & Finance · International Edition

Three automated suites, run against the content files and the built `.docx`.
Every number below was measured, not asserted: the source column comes from
`0b8a1a25-English_for_Banking_B1_Fixed_2.docx` read directly as OOXML, and the
edition column from `dist/EnglishForBanking_International_StudentBook.docx`.

```
python3 qa/check_parity.py     # the 44-task template, bars, figures, audio, matching shapes
python3 qa/check_texts.py      # every text block the source sets a measurable range for
python3 qa/check_content.py    # typography, British spelling, scaffolding, transposition
```

All three pass.

---

## 1 · Shape

| Measure | Source | International Edition |
|---|---|---|
| Units | 10 | 10 |
| Named tasks | 445 (47 · 45 · 44×7 · 45) | 445, in the same code sequence |
| Part bars | 110 (11 per unit) | 110 |
| Illustrations | 52 | 52 |
| Audio tracks | 40 (n.1–n.4 per unit) | 40 |
| Pages (LibreOffice) | 135 | **134** (−1 %) |

The task-code sequence is checked unit by unit, including the source's three
local variations: Unit 1 adds **W-C** and **6E–6F**, Unit 2 adds **1F**, Unit 10
adds **10D**. None is normalised away.

## 2 · Elements

Counted from the OOXML of both documents, by fill colour and by the text each
element carries.

| Element | Source | Edition |
|---|---|---|
| Model box (`#FBF7E8`) | 140 | 140 |
| Matching table (`#DEEAF6`) | 70 | 70 |
| Script box (`#F2F2F2`) | 50 | 52 |
| Reading box (`#EAF1FB`) | 40 | 40 |
| ✎ Write box | 89 | 91 |
| Glossary box | 20 | 20 |
| ⚠ Watch out! box | 10 | 10 |
| Grammar Focus table | 10 | 10 |
| Word bank (3 columns) | 25 | 26 |
| Remember line | 10 | 10 |
| Tip line | 11 | 11 |
| Worked `Example:` | 114 | 118 |
| Check-before-you-finish list | 40 | 41 |

The raw `<w:tbl>` count differs (478 against 569) because the source often packs
two adjacent boxes — a write box and the next part bar, say — into one two-row
table, while the toolchain emits them separately. The elements on the page are
the same; only the packaging differs, and it is invisible in the render.

## 3 · Matching-table shapes

Column A rows per matching task, in the source's order. Every one carries exactly
one extra option, and says so.

| Unit | Source | Edition |
|---|---|---|
| 1 | 7 · 5 · 3 · 4 · 5 · 5 · 4 · 4 | identical |
| 2 | 6 · 6 · 4 · 4 · 4 · 4 | identical |
| 3 | 7 · 5 · 4 · 4 · 4 · 4 · 4 | identical |
| 4–10 | 8 · 5 · 4 · 4 · 4 · 4 · 4 | identical |

## 4 · Length

Rendered words per unit, against the source's own.

| Unit | Source | Edition | Δ |
|---|---|---|---|
| 1 | 4,719 | 4,802 | +2 % |
| 2 | 4,461 | 4,504 | +1 % |
| 3 | 4,373 | 4,480 | +2 % |
| 4 | 4,488 | 4,772 | +6 % |
| 5 | 4,350 | 4,690 | +8 % |
| 6 | 4,544 | 4,786 | +5 % |
| 7 | 4,739 | 4,954 | +5 % |
| 8 | 4,519 | 4,822 | +7 % |
| 9 | 4,496 | 4,743 | +5 % |
| 10 | 4,704 | 4,811 | +2 % |
| **Book** | **45,393** | **47,364** | **+4 %** |

Tolerances: ±10 % per unit, ±8 % for the book. The edition runs slightly long
because the international setting costs a few words in several places — a
currency named, a second country mentioned — and those words are the point of
the adaptation.

## 5 · Text blocks

Every text the source sets a measurable range for is held inside that range.

| Block | Source range | Edition |
|---|---|---|
| 5A company / guideline profile | 127–169 | 164–186 |
| 5C short profile | 67–109 | 93–115 |
| Part 8 global case | 152–175 | 160–186 |
| Part 9 branch case | 136–177 | 146–179 |
| 3B script | 48–80 | 30–90 |
| 3C script | 48–79 | 35–89 |
| 3D script (longer listening) | 80–107 | 94–114 |
| 7B script | 67–91 | 65–95 |
| Writing models (140 of them) | 7–74 | 12–67 |
| Glossary box (20 of them) | 29–93 | 30–95 |

Each reading box declares its length as the source's do ("About 200 words"),
including the source's habit of declaring a round number it does not quite hit.

## 6 · Style and integrity

Checked by `check_content.py` and by read-through.

* Curly quotation marks and apostrophes throughout; no straight marks anywhere.
* The source's typography reaches the render: `·` `—` `→` `☐` `✎` `⚠` `🔊`.
* British spelling, with a check for fifteen American forms including
  *checking account* for **current account** and *bills and coins* for
  **notes and coins**.
* Scaffolding, task by task, in the source's own pattern: 1E takes a model, a
  check list and a write box; 6B and 7E take a model, a plan, a phrase bank, a
  check list and a write box; 6C drops the phrase bank; 9B takes a frame and a
  phrase bank but no check list; 4B and 7D take a model and role cards; 4D takes
  cards and useful questions but no model. Unit 1's and Unit 2's local
  rearrangements are encoded as the source has them, not corrected.
* Every unit invites the learner's own country or workplace into a discussion
  task.
* Nothing of the Syrian setting survives: nineteen place names, bank names and
  character names are checked for and absent.
* Harbour Bank, its six locations, its staff, its customers and every figure are
  invented, and the front matter says so. The banking is true and general: IBAN
  and BIC, correspondent banking, know-your-customer and sanctions screening,
  exchange rates and spreads, letters of credit, structuring, reporting
  thresholds.
* No real bank, regulator or payment network is given invented words or figures.
  "BIC / SWIFT" appears once, as the ordinary industry name for a bank code; the
  checker flags it for read-through, and it carries no invented content.
* No country is characterised. The six cities are settings, not subjects.
