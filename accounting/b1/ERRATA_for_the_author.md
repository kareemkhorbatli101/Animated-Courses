# Errata — *English for Accounting and Financial Management B1*

Written for the author. These are defects found by **measuring** all ten student
books while building the course site, not by reading them. Every one is reproducible:
`python -I tools/census-book.py "<book folder>" tools/plan-docx/census.json` re-derives
the numbers, and `tools/book-text/` holds the extracted text each claim is checked
against, with the `.docx` sha256 recorded beside it.

None of these stops the books working in a classroom, where a teacher fills the gap.
All of them stop a self-marking website working, because a site cannot mark an item
whose answer does not exist.

The site's handling is given for each. Nothing in the books themselves has been changed.

---

## 1. The answer key reprints the question instead of answering it

**Where:** every unit. Seven sections of each key.
**Scale:** 30 items in Unit 1, 30 in Unit 2, **307 across the ten units**.

The affected sections are the same in every unit:

| Key section | Items with no answer |
|---|---|
| P3 Dialogue 1 comprehension | 4 |
| P3 Dialogue 2 comprehension | 3 |
| Figure task | 4 |
| P8 "complete with ONE word" | 4 |
| P7 track comprehension | 2 |
| P10 Vocabulary | 5 |
| P10 Grammar | 5 |
| P10 Reading | 3 |

For example, Unit 2's key for the figure task reads:

> *1 What is the source document in the diagram? · 2 Which account did Fadi debit, and
> which did he credit? · 3 What are the two totals at the bottom of the journal? …*

— which is the exercise, copied, not its answers.

**What the site does:** every one of these answers is **derived from the text** and the
card names the sentence it came from, so a reader can check the derivation rather than
trust it. `tools/check-key.cjs` is designed to fail the build if an answer is ever taken
from one of these reprinting entries.

**Suggested fix:** supply the missing answers. They are the most-used sections of the
key — Part 10 is the unit test.

---

## 2. Five answers to questions that do not exist

**Where:** every unit. **50 phantom answers in total.**

Every key contains:

> **P8 MCQ** — P8Q1 A · P8Q2 B · P8Q3 C · P8Q4 D · P8Q5 D

and **no unit contains a single `P8Q` stem anywhere in its body.** Part 8 has a reading,
a comprehension section and a one-word gap-fill; it has no multiple-choice exercise.
The letters are identical in all ten units, which suggests the exercise was planned and
keyed from a template and then never written.

**What the site does:** nothing is invented to fill the gap. Part 8 shows the exercises
the book actually contains.

**Suggested fix:** either write the five questions (the consolidation text supports them
easily) or delete the key entry.

---

## 3. Unit 2's key points at Unit 1's figure

**Where:** Unit 2 only.

Unit 2 contains **Figure 2.1**. Its key heading reads **"Figure 1.1 task"**. Unit 1's is
correct, so this is a copy of Unit 1's key that was not renumbered.

It matters more than a typo normally would, because this is one of the sections in §1
above: a reader going to the key for the figure questions finds both the wrong number
*and* no answers.

---

## 4. Unit 2's review section is lettered twice, and the two disagree

**Where:** Unit 2 only. Unit 1 is consistent.

In Part 10 the section headings and the instruction lines beneath them use different
letters from C onwards:

| Section | Heading says | Instruction says |
|---|---|---|
| Reading | C | **D** |
| Listening | D | **E** |
| Speaking | E | **F** |
| Writing | F | **G** |

A learner following the instruction letters cannot find section C at all, and there is
no section G.

**What the site does:** one letter per section, the heading letter.

---

## 5. The stress mark on *bookkeeping*

**Where:** Unit 1, Audio 1.1.

The book prints **book-KEEP-ing**. English compound nouns take the stress on the first
element — BLACK-board, FOOT-ball — and this one is no exception: **BOOK-keep-ing**.

**What the site does:** teaches BOOK-keep-ing, and says in the explanation that the book
marks it differently. It is the one item in that drill worth saying twice.

---

## 6. There is no Audio N.4 — probably intentional, recorded for completeness

Every unit numbers its recordings **N.1, N.2, N.3, N.5**, skipping N.4, in all ten units.
Because it is consistent across the whole series it looks like the template rather than
an omission, and nothing is missing except the number. Noted only so that nobody later
goes looking for a file that never existed.

---

## 7. Two small things that are not errors, but cost a reader time

- **Unit 2's Warm Up opens** *"Look at the transaction diagram (Figure 2.1)"* **and
  Figure 2.1 is printed in Part 5**, six parts later. Unit 1 does the same with Figure
  1.1. In print the learner flips; the site draws the figure where it is needed and again
  where it is taught, from one definition.
- **Part 10 is the unit test** — more items than any other part, and the only part whose
  items all have a right answer — but it is not marked as one. The site is explicit that
  it is the only screen that reports a score.

---

## How to re-check any of this

```
python -I tools/census-book.py  "D:\____All_Books\English for NGO Accounting" \
                                tools/plan-docx/census.json
python -I tools/export-book-text.py "D:\____All_Books\English for NGO Accounting" \
                                tools/book-text
node tools/check-book.cjs            # every sentence the site shows as yours, verbatim
```

`census.json` carries, per unit: the item counts by type, the answer-key classification
(which lines answer and which reprint), the phantom key entries, the figure-label
mismatch and the Part 10 letter drift — each with the `.docx` sha256 it was measured from.
