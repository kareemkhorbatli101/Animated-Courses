# English for Daily Life · B1 — downloads

**Rebuilt against the supplied coursebook, 2026-10-09.** B1 Unit 1 was rejected
three times. The fourth message supplied `PE_B2_U08_StudentBook.docx`, and this
unit is built to its shape: **59 numbered exercises** instead of 42 prose
sub-sections, **four short texts** instead of twenty-five, a mean sentence of
**7.5 words** instead of 14.6, and a reading grade of **3.98** instead of 5.98.
The old spec's language floors, which forced every sentence to be longer than a
published unit, are gone. `HOUSE-STYLE.md` has every rule with its measurement;
`tools/gate.py` checks them.

## The unit on its own

| What | File | Size | Pages |
|---|---|---|---|
| Unit 1 — The Skip Outside Number 14 | [b11-u01.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/units/b11-u01.docx) | see below | |
| the same as PDF | [b11-u01.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/units/b11-u01.pdf) | see below | |

## The volume as it stands (one unit of ten)

| What | File | Size | Pages |
|---|---|---|---|
| B1.1 *Looking Back* — student book | [EFDL-B1.1-LookingBack-u01-01.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/EFDL-B1.1-LookingBack-u01-01.docx) | see below | |
| the same as PDF | [EFDL-B1.1-LookingBack-u01-01.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/EFDL-B1.1-LookingBack-u01-01.pdf) | see below | |
| answer key, bound separately | [EFDL-B1.1-LookingBack-AnswerKey-u01-01.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/EFDL-B1.1-LookingBack-AnswerKey-u01-01.docx) | 23 KB | 16 |
| the same as PDF | [EFDL-B1.1-LookingBack-AnswerKey-u01-01.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/EFDL-B1.1-LookingBack-AnswerKey-u01-01.pdf) | see below | |

The student book carries the front cover, the front matter, the unit and the
answer key bound in, which is the shape A2 ships in. The unit-only files are
there for a teacher who wants next week's unit without the volume.

## Covers, at 300 DPI

| What | File |
|---|---|
| B1.1 front | [b11-front.png](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/covers/b11-front.png) |
| B1.1 back | [b11-back.png](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/covers/b11-back.png) |

## The source, if you want to read rather than print

| What | File |
|---|---|
| the unit as markdown | [units/b11-u01.md](https://github.com/kareemkhorbatli101/Animated-Courses/blob/claude/jolly-johnson-9khdgl/docs/general-english/B1/units/b11-u01.md) |
| the answer key as markdown | [keys/b11-u01-key.md](https://github.com/kareemkhorbatli101/Animated-Courses/blob/claude/jolly-johnson-9khdgl/docs/general-english/B1/keys/b11-u01-key.md) |
| the 41 figures | [figures/b11/](https://github.com/kareemkhorbatli101/Animated-Courses/blob/claude/jolly-johnson-9khdgl/docs/general-english/B1/figures/b11/) |
| the figure definitions | [content/b11/u01_figures.py](https://github.com/kareemkhorbatli101/Animated-Courses/blob/claude/jolly-johnson-9khdgl/docs/general-english/B1/content/b11/u01_figures.py) |
| the frozen spec, hash-locked | [spec/golden.yaml](https://github.com/kareemkhorbatli101/Animated-Courses/blob/claude/jolly-johnson-9khdgl/docs/general-english/B1/spec/golden.yaml) |
| the three ledgers | [ledgers/](https://github.com/kareemkhorbatli101/Animated-Courses/blob/claude/jolly-johnson-9khdgl/docs/general-english/B1/ledgers/) |
| the plan, with every number that moved | [00-MASTER-PLAN.md](https://github.com/kareemkhorbatli101/Animated-Courses/blob/claude/jolly-johnson-9khdgl/docs/general-english/B1/00-MASTER-PLAN.md) |

## What the gate says

**29 of 29, 0 FAIL.** Every check is a number measured off the supplied book:

| | Book | This unit |
|---|---|---|
| Numbered exercises | 59 | **59** |
| Total words | 5,899 | **5,268** |
| Texts over 60 words | 4 | **4** |
| Longest text | 176 w | **176 w** |
| Mean sentence | 7.9 w | **7.5 w** |
| Reading grade | 3.3 | **3.98** |
| Exercise item | 8.6 w | **9.0 w** |
| Figures | 28 | **28** |

A2 is untouched and still green on its own 269-check suite. `A2/tools/runner.py`
now refuses a B1 book and says why.

**What the gate does not check:** whether a task is dull, a text pointless or a
picture ugly. That stays with the reader.
