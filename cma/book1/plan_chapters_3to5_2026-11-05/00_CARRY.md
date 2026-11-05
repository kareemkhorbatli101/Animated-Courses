# CARRY — CMA Book 1, Chapters 3, 4 and 5

**Date:** 2026-11-05
**Plan:** `../CMA_Book1_Ch3-Ch5_Plan_2026-11-05.docx` (beside the book's `index.html`)
**Precedent:** `../plan_interactive_overhaul_2026-11-05/` — the Chapters 1–2 overhaul, whose
six standards this plan brings 3–5 up to. Read its `00_CARRY.md` first.

## The goal

Chapters 3, 4 and 5 are **The Income Statement**, **Equity**, and **The Statement of Cash
Flows**. With Chapter 2's balance sheet they complete the four statements, so Chapters 1–5
become a whole that can be shipped together.

## The three chapters, measured (not assumed)

All three **extract and verify verbatim today**, and all three have Chapter 2's shape.

| | Ch 2 (built) | Ch 3 | Ch 4 | Ch 5 |
|---|---|---|---|---|
| Numbered sections | 6 | 6 | 6 | 6 |
| Blocks / words | 411 / ~7,000 | 408 / 7,094 | 447 / 7,001 | 431 / 6,875 |
| Questions (all with the author's explanation) | 34 | 34 | 39 | 37 |
| Case items | C2-1…7 | C3-1…7 | C4-1…7 | C5-1…7 |
| Figures (drawn / numbered) | 6 / 13 | 6 / 13 | 5 / 13 | 5 / 12 |
| Bridged terms, all with the author's Arabic | 30 | 25 | 22 | 15 |

**34 of those 62 terms need a new drawn mark** (the rest are already in `icons.js`).

## The blocker — do this first

`python -m tools.cma_scenes --chapter 3 --report` **dies with `KeyError: 's2-1'`** today,
and the same for 4 and 5. The generator takes `--chapter N` and Chapter 2 was made with it,
so it *looks* generic. **42 lines write the chapter number in rather than pass it in:**

| Where | Lines | Fix |
|---|---|---|
| `ORDER` | 1 | derive page ids from N |
| `BRIEF_ANIM`, `extra`, `TERMS_SCENES` | 16 | key by section index, not `"2.1"` |
| `case_scenes` | 7 | derive the `C2-` prefix from N |
| `TRAPS`, `CASE_RULES` | 2 tables | one entry per chapter, the author's own sentences |
| `build_statement`, `ties_scene`, `read_result` | 3 fns | **they take no chapter at all — they ARE §2.6** |

Against that, **32 functions already take the chapter and are generic.** This finishes a job
that is three-quarters done.

## Instruments — four new kinds, the rest reuse

Grounded in the author's own figure captions (`evidence/new_terms_and_figures.txt`):

| | Ch 3 | Ch 4 | Ch 5 |
|---|---|---|---|
| x.1 | **waterfall** NEW (F03-04) | bands + statement | waterfall (reuse) |
| x.2 | statement + switch | **treasury** NEW (F04-04) | sort + switch |
| x.3 | ladder (F03-06) | **shares** NEW (F04-07) | **signs** NEW (F05-06) |
| x.4 | sort + switch | tank (F04-09 roll-forward) | statement |
| x.5 | wire (F03-09) | wire | wire (F05-08) |
| x.6 | statement + locks + number | statement + locks | locks + number |

`waterfall` is shared by 3.1 and 5.1. Each new kind also needs an `answers-view.js` branch,
`provenance.js` fields and a Brief animation — the per-exercise gate catches a missing one
(that is how `cycle` and `ladder` were caught).

## The part that cannot be generated

**One ledger per chapter**, modelled on `ledger-ch02.js` (190 lines, 19 ties). The arithmetic
differs in kind: Ch 3 is a **ladder** of subtotals (and single-step must reach the same net
income as multi-step); Ch 4 is a **roll-forward** (and a stock dividend must move shares
without moving total equity); Ch 5 is a **reconciliation** (and indirect must reach the same
cash from operations as direct).

## ⚠ The risk to name now, not later

**Four chapters now describe one company's 2025.** Net income in Ch 3 is what Ch 4 rolls
forward and Ch 5 starts from; the cash Ch 5 explains is Ch 2's balance-sheet cash. The gate
must tie **across** chapters, not only within them, or all four can disagree while every
chapter passes alone. That is phase 6 and must not be deferred.

Second risk, from hard experience: **an exhibit that answers its exercise.** Eight of
Chapters 1–2's thirteen figures did, and no gate can see inside an image. Each of the 16
drawn figures here must be *looked at* against the exercise it lands on and declared
`data` / default / `inBrief`.

> **This plan has been executed.** Phases 0 to 8 are all done; what was actually built,
> and what the plan got wrong on the way, is in **[01_DELIVERED.md](01_DELIVERED.md)**.
> Everything below is the plan as it stood before the work started, kept unchanged so
> the two can be read against each other.

## Order of work

0. **Make the generator chapter-generic.** Done when `--chapter 3/4/5 --report` all run.
1. Extract, terms, baseline per chapter — *already done while measuring this plan*
   (`courses/cma/book1_ch03..05.json`, `assets/terms-ch03..05.js`).
2. One ledger per chapter, with `checkTies()`.
3. The four new kinds, each with answer-key branch + provenance fields + animation.
4. Per chapter: six sections' instruments, `TRAPS`, `CASE_RULES`, the Extended Example.
5. 34 term marks; Briefs for the 33 new pages.
6. `CHAPTERS = (1,2,3,4,5)` in all three gates **+ the cross-chapter tie**.
7. Book index, hub, merged glossary and term index.
8. Full suite, commit, push, verify live.

## Gates

| When | Command |
|---|---|
| After every phase | `cma_provenance`, `cma_interactive --each`, `cma_render` (~6 min over 5 chapters) |
| After phases 3, 4, 6 | the same three with `--teeth` (~22 min) |
| Before pushing | `python -m gates.run_all --full --cached-video` |

Run from `D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python`.

**Cost, measured:** 2,016 per-exercise checks over two chapters took **46 s**, because each
scene's checks happen in one round trip. Five chapters ≈ **80 s** and ~3,400 checks. The
Chapters 1–2 plan predicted a 10× cost problem that never appeared — **do not build caching
speculatively.**

## Refusals

No invented Arabic (all 62 bridges are the author's). No emoji or stock icons. No change to
any question, option or reason he wrote. No figure deleted, and none placed above the
exercise it answers. No check that cannot fail.

## Verify this package

```
cd plan_chapters_3to5_2026-11-05
python -I check_package.py --teeth
```
