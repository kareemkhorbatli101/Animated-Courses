# English for Daily Life · B1 — downloads

**Phase 4 review gate, 2026-10-09 — second pass.** One finished unit of twenty,
for review before the other nineteen are built. The first version of this unit
was green at 251 checks and was rejected for running one subject through all
eleven parts; the rebuild was green at 263 and was rejected again, for prose that
was vague and unfocused. The unit now carries nine situations under one theme,
pictures that show what their captions say, and passages written as explanations
with stated points rather than as magazine prose. Eighteen new checks hold all
three in place — `00-MASTER-PLAN.md` §4c, §4d and §6a say what they are. Everything below is in the repository on
branch `claude/jolly-johnson-9khdgl`; click a filename to download it.

## The unit on its own

| What | File | Size | Pages |
|---|---|---|---|
| Unit 1 — The Afternoon Everything Happened at Once | [b11-u01.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/units/b11-u01.docx) | 2.0 MB | 37 |
| the same as PDF | [b11-u01.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/units/b11-u01.pdf) | 2.2 MB | 37 |

## The volume as it stands (one unit of ten)

| What | File | Size | Pages |
|---|---|---|---|
| B1.1 *Looking Back* — student book | [EFDL-B1.1-LookingBack-u01-01.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/EFDL-B1.1-LookingBack-u01-01.docx) | 2.3 MB | 57 |
| the same as PDF | [EFDL-B1.1-LookingBack-u01-01.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/EFDL-B1.1-LookingBack-u01-01.pdf) | 2.7 MB | 57 |
| answer key, bound separately | [EFDL-B1.1-LookingBack-AnswerKey-u01-01.docx](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/EFDL-B1.1-LookingBack-AnswerKey-u01-01.docx) | 23 KB | 16 |
| the same as PDF | [EFDL-B1.1-LookingBack-AnswerKey-u01-01.pdf](https://github.com/kareemkhorbatli101/Animated-Courses/raw/refs/heads/claude/jolly-johnson-9khdgl/docs/general-english/B1/release/EFDL-B1.1-LookingBack-AnswerKey-u01-01.pdf) | 0.2 MB | 16 |

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

## What the checks say

**269 of 269 green on Unit 1**, 0 failures, 13 adjudication gates answered, 2
skips, both of them volume-scoped envelopes that cannot be measured against one
unit of ten. B1's mutation suite is **22 of 22 caught, 0 escaped**.

Eighteen of those 269 are new since the first download, and they exist because the
last download was green and still wrong:

| | What it holds |
|---|---|
| `M01`–`M10` | A unit carries at least **7 distinct situations** in at least **5 settings**, none of them taking more than a seventh of its 42 sub-sections or a quarter of its attributions; every theme-level section draws on at least two of them and names words that are actually in its own text; every situation declares the objection a reader will raise and answers it; four premises are blocklisted outright; and `M10` fails unless the law would have rejected the superseded unit, which is kept in the repository for exactly that purpose. |
| `G34`, `G35` | Every icon must be licensed by its own label — no more generic person glyph under *was reading in bed* — and a figure drawn to show a contrast must draw something different on each side. |
| `N01`–`N06` | Every paragraph of an explanation opens on a sentence that states its subject and closes on the same subject; every paragraph after the first is signposted; every open answer is findable in the passage the learner was given; no construction from the blocklist in `ledgers/clarity.yaml`; and in a dialogue, every question is answered by the next turn. |

Unit 1 now carries **9 situations in 9 settings**; the largest takes 6 of 42
sub-sections. The superseded version carried 2 situations in 2 settings, and the
largest took 37.

A2 is unchanged and still green at its new total: **269 of 269 on both
volumes**, mutations 230 of 230. That includes `C29` and `C30`, the two checks
that found and fixed the answer-shuffling defect A2 had shipped with. The two
new picture checks are declared at B1 only; the plan (§6a) records the
measurement behind that decision — 332 of A2's 1,354 icon/label pairs would fail
`G34` — rather than leaving it unsaid.
