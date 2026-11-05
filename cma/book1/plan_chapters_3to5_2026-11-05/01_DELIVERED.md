# DELIVERED — CMA Book 1, Chapters 3, 4 and 5

**Date:** 2026-11-05
**Plan:** [00_CARRY.md](00_CARRY.md), unchanged, so the two can be read against each other.
**Verify:** `cd plan_chapters_3to5_2026-11-05 && python -I check_package.py --teeth`

Part I of Book 1 — all five chapters — is built, gated and shipped together. This file
records what was actually made, **what the plan got wrong**, and the numbers, every one
of them taken from a saved gate log in `evidence/`.

---

## What a learner gets

Chapters 3, 4 and 5 are built to the same six standards as Chapters 1 and 2:

1. **Every screen decides.** Nothing is scored on having looked at it.
2. **Every figure is folded into the exercise it is evidence for**, in one of three
   declared places — `data` (folds forward), default (closes the practice), `inBrief`.
3. **Every string is the author's**, checked word by word by the site's own lock.
4. **A Brief on every page**: his summary, the terms with his Arabic and two voices, and
   one drawing of the mechanism the section is about.
5. **A drawn mark for every bridged term**, from a family of shapes the book already uses.
6. **Teeth on both ends**: every check is demonstrated to fail on a planted defect.

---

## The numbers, every one from a saved gate log

| | Ch 1 | Ch 2 | Ch 3 | Ch 4 | Ch 5 | All |
|---|---|---|---|---|---|---|
| Pages | 13 | 11 | 11 | 11 | 11 | 57 |
| Scenes | 85 | 85 | 73 | 78 | 75 | 396 |
| **Exercises** (counted in the browser) | 91 | 77 | 65 | 71 | 68 | **372** |
| The site's own provenance checks | 55 | 63 | 55 | 62 | 59 | 294 |
| Ledger ties | — | 20 | 16 | 23 | 20 | 79 |

| Gate | Result | Evidence |
|---|---|---|
| `cma_provenance` | **PASS** — every word in the author's chapter, every chapter verbatim from the .docx | `evidence/after_provenance.txt` |
| `cma_interactive --each` | **PASS** — 12 families × 372 exercises = **4,464 checks**, A1–A8 green | `evidence/after_interactive.txt` |
| `cma_render` | **PASS** — **484/484**: every page opens, every scene renders and marks itself | `evidence/after_render.txt` |
| `cma_crosstie` | **PASS** — 16 cross-chapter agreements over 79 ties | `evidence/after_crosstie.txt` |
| `cma_interactive --teeth` | **PASS** — every check fails on a planted defect | `evidence/after_teeth.txt` |

Also built: **8 new icon families** carrying the 34 unmarked terms (`icons.js` now draws
129), **13 new Brief drawings**, **1 new exhibit kind** (`grid`), and **1 new scene kind**
beyond the four planned.

---

## The phases, as executed

| Phase | What the plan said | What happened |
|---|---|---|
| 0 | Make the generator chapter-generic (42 pinned lines) | Done. `--chapter 3/4/5` all build. |
| 1 | Extract, terms, baseline | Already done while measuring the plan. |
| 2 | One ledger per chapter | `ledger-ch03/04/05.js`, and ch04 gained the F04-05 entries. |
| 3 | Four new kinds | `waterfall`, `treasury`, `shares`, `signs` in `objects3.js`; **plus a fifth, `grid`, the plan did not foresee.** |
| 4 | Six sections per chapter, TRAPS, CASE_RULES, Extended Example | Done, plus `SUMMARY_CLOZE` — see "what the plan missed". |
| 5 | 34 term marks, Briefs for 33 new pages | 34 marks in 8 new icon families; 13 new Brief drawings. |
| 6 | `CHAPTERS = (1,2,3,4,5)` + the cross-chapter tie | Done in all four gates. |
| 7 | Book index, hub, merged glossary and term index | Done, and a **real bug** found in the merged pages. |
| 8 | Full suite, commit, push | Done. |

---

## What the plan got wrong, and what that cost

The plan was written from a census of the three chapters. Six things it assumed were
Chapter 2's shape and not the book's:

**1. Chapter 4's statement is a matrix, not a list of lines.** `statement_scene` looks
for a name and one or two amount columns. Figure F04-02 is a seven-column roll-forward,
so the search found nothing, returned `None`, and the chapter's **central figure was on
no screen at all**. Nothing failed: the page still loaded. Fixed with `statement_matrix`
and a new exhibit, `assets/grid.js` — the wide form of `lines` — and the gate check that
caught it was tightened from `rows.length >= 0` (which passes on an empty statement) to
the author's own row count.

**2. The case exhibit is found by its caption, not its heading.** The search matched
`"Account / memo"` or `"Item / memo"`. Chapter 4 heads it `"Balance / event"` and
Chapter 5 `"Barada Wholesale"`, so **both chapters had no case exhibit**: the learner was
asked to classify items they could not see. The author captions every one of them
`Figure Fnn-xx. Case exhibit: …`, so the caption is the anchor now — and it carries the
figure's number, which is `-13` in chapters 2 to 4 and **`-12` in chapter 5**, where the
code had computed `-13` for all of them.

**3. The case category sort is found by its SECOND header.** `"Account"` in ch2,
`"Item"` in ch3, `"Cash flow"` in ch5. A list of the ones seen so far had already dropped
a case item once; what is true of every chapter is that the second column is headed
`"Category"`.

**4. The chapter summary paragraph was matched on Chapter 2's opening words.** Chapters 3
and 4 had already shipped a summary page holding **nothing but the record of traps**, and
the gate passed it, because the page still loaded. The paragraph is now found
structurally, and a chapter that prints one and has no `SUMMARY_CLOZE` entry **raises**.

**5. A ledger reference that the generator did not resolve shipped as a string.** The
substitution was a whitelist of four prefixes, so `"@eq.rise@"` and `"@treasuryEntries@"`
were written into the page verbatim: a numeric field whose correct answer was a literal
at-sign, and a posting deck with no transactions. **None of the twelve per-exercise
checks caught it**, because such a field still marks — it just always marks wrong. The
generator now refuses to write one, and gate check **A7** reads the files it shipped.

**6. The merged glossary and term index linked every term to Chapter 1.** The section
link was hardcoded to `ch01/s1-N`, so "2.3 Classifying debt" opened "1.3 Double entry".
With two chapters merged that was half the table; with five it was four fifths.

---

## The figures that answer their own page

No gate can see inside an image, so each of the sixteen drawn figures in chapters 3 to 5
was **opened and read** against the exercise it lands on. Five of them were answer keys
and are routed to the Brief instead, declared in one place as `BRIEF_FIGURES` with the
reason each one gives away:

| Figure | What it gives away |
|---|---|
| F03-03 | prints every subtotal, and captions itself "only the multi-step shows subtotals" — the first blank of the cloze it lands on |
| F03-06 | the whole decision chart: it answers the order scene built from it, the discontinued-operations sort beside it, and all three blanks of the cloze it lands on |
| F04-09 | draws "+ net income → retained earnings, Dec 31", which is link l1 of the wire it lands on |
| F05-06 | the complete sign key — "AR rose by 384,000: subtract", "AP rose by 150,000: add" — for the signs scene on the same page |
| F05-08 | draws both arrows the wire asks the learner to draw |

The five summary maps were already routed this way.

---

## New gate checks, each with teeth

| Check | What it would have caught |
|---|---|
| **A7** no page ships an unresolved ledger reference | the `@eq.rise@` defect above — teeth: a planted reference in a copy of the site |
| **A8** the index's exercise count per chapter is the counted one | it **drew blood on its first run**: 68/74/70 were typed, 65/71/67 were counted |
| the icon census, on all five gate pages | `Icons.census()` was exported so a gate could read it and **nothing read it**: 34 terms had no family and fell through to the typographic tier, which looks identical to a term judged to have no geometry |
| the statement check, tightened | `rows.length >= 0` passed on an empty statement |
| `objects3.js` and `grid.js` added to the A5 lint | five kinds were registered, shipped and **not linted** |

---

## Refusals held

No invented Arabic — all 62 bridges are the author's. No emoji or stock icons: the 34 new
marks are 8 new families of the book's own shapes. No question, option or reason of his
was changed. No figure deleted. Every sentence quoted as his is asserted against the
chapter at build time, and five sentences written here from memory were rejected by that
assertion and replaced with his wording.
