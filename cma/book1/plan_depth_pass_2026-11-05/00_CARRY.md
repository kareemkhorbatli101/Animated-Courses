# CARRY — the depth pass: eighteen chapters to one standard

> **Moves 2 and 4 are DONE** (2026-11-05). 72 traps are wired across chapters 6–18
> from the author's own EXAM TRAP, FALSE-FRIEND and WATCH boxes — every chapter at or
> above the target of four — and every section of chapters 2–18 now opens its Brief
> with a drawing of its own mechanism, from 19 new animations that mirror the 19 icon
> families. `check_package.py` asserts both.
>
> **Move 2 moved one of the six targets on its own:** the author's boxes used went from
> **37 of 204 (18%) to 82 of 204 (40%)** — EXAM TRAP from 13/64 to 37/64, FALSE-FRIEND
> from 4/19 to 13/19, WATCH from 2/14 to **14/14**. The instrument share did not move,
> and should not have: a trap and a drawing add depth to an existing screen but no new
> graded exercise. That is Moves 1 and 3, and they are still open.
>
> **Move 1 was attempted and stopped, and the reason is the most useful thing in this
> file.** See "Why Move 1 cannot be generated" below.

**Date:** 2026-11-05
**Plan:** `../CMA_Book1_Depth_Pass_2026-11-05.docx` (beside the book's `index.html`)
**Precedent:** `../plan_chapters_3to5_2026-11-05/01_DELIVERED.md` and
`../plan_chapters_6to18_2026-11-05/`. The whole book is built; this is the pass that
makes it one book rather than three batches.

## Why this plan exists

All eighteen chapters are built: **203 pages, 1,233 scenes, 1,061 graded exercises.**
They are not equal, and the inequality is not in coverage — it is in **depth**.

| | ex/1k words | built instruments/1k | **instrument share** | kinds | ex/section |
|---|---|---|---|---|---|
| Chapter 1 (hand, oldest) | 8.40 | **6.19** | **74%** | 22 | 10.9 |
| Chapters 2–5 (hand) | 9.77 | 3.49 | **36%** | 10.8 | 11.7 |
| Chapters 6–18 (generated) | 8.23 | 2.09 | **25%** | 7.9 | 8.8 |

**Book-wide, 725 of the 1,061 exercises (68%) are the author's own multiple-choice
questions.** Only 336 are instruments the site builds. Chapter 1 is the benchmark and it
is the one nobody has touched since it was written by hand, scene by scene.

The chapters are **not** smaller. Chapter 7 is 7,477 words against Chapter 2's 7,786.
Thirteen chapters were built in an hour because a dispatcher classified each printed
figure by shape; this plan is the price of that.

## The three measurements this plan rests on

All three are in `evidence/`, each produced by a script in `tools/`.

**1. 115 of the author's 203 numbered figures are shown and never asked about**
(`figures_asked.txt`). Chapters 2–5 leave 12 of 47 unasked (26%); chapters 6–18 leave
**103 of 156 (66%)**. Two per chapter are structural — the summary map and the case
exhibit — so roughly **eighty figures are an exercise the book already contains.**

| | asked | only shown |
|---|---|---|
| ch 6, 7, 18 | 2 each | 9, 10, 9 |
| ch 10, 11 | 4 each | 9 each |
| ch 2, 3 | 8, 10 | 4, 2 |

**2. 37 of the author's 204 boxes are used — 18%** (`author_boxes.txt`). He writes
**64 EXAM TRAP** boxes and 13 are used; **45 WORKED EXAMPLE** boxes and 9 are used;
**19 FALSE-FRIEND ALERT**, 4 used; **18 YOUR TURN**, 1 used; 18 IFRS CONTRAST, 4 used.
Every one of these is a finished teaching move already written in his voice.

**3. The depth registries are empty for thirteen chapters** (`inventory.txt`).

| | traps | Brief drawings | ledger ties |
|---|---|---|---|
| ch 2–5 | 5–6 each | **9 each** | 16–23 |
| ch 6–18 | **0** | **0** | 1–4 |

Consequences a learner meets: the error log on thirteen summary pages has nothing to
record, eighty-one sections open a Brief with no picture of the mechanism, and
`cma_crosstie` has almost nothing to tie in Parts II–IV.

## What "deeper and more specific" means here, concretely

Not more exercises. **Fewer screens that can be answered by elimination, and more that
require the learner to carry a number or a rule from one place to another.** Four moves,
in order of how much they change:

### Move 1 — ask the eighty figures that are only shown

Every one already has an instrument that fits; the dispatcher simply did not reach it
because the figure is an image rather than a table. The image figures are decision
charts, timelines, spectrums and T-accounts — all four already have a scene kind
(`order`, `timeline2`, `ladder`, `post`). **Target: `asked` per chapter ≥ 70% of its
numbered figures, every chapter.** That alone roughly doubles the built instruments in
Parts II–IV.

### Why Move 1 cannot be generated — four mechanisms measured, four failed

The 47 drawn figures in chapters 6–18 are images. **Their text is not in the oracle**:
`cma_book` extracts the .docx prose and tables, so anything read off a chart by eye
would be rejected by `_verbatim` — correctly, because the site's source of truth is the
extracted chapter and not my reading of a picture. So a generated exercise for a drawn
figure has to be built from the chapter's PROSE. Four ways of doing that were tried and
each was measured before it was trusted:

| Mechanism | Result |
|---|---|
| blank the section's bridged terms in its opening prose | **6 of 81 sections** — he introduces a term in the paragraph that defines it, which is rarely the first |
| match each term to the sentence that defines it (`gloss_for`) | **2 of 81** — the strict subject test finds a gloss for 2 of 28 terms in chapter 6 |
| blank the word the author capitalised in an EXAM TRAP box | **8 of 64 boxes** |
| split the section's enumerating sentence into ordered steps | **11 of 14 "succeeded" and the output was garbage** — "$540,000" split in two, clause fragments like "its creditors" and "even in bankruptcy" offered as steps |

The fourth is the dangerous one: it *passes the provenance lock*, because every fragment
is genuinely his words. A gate cannot catch a sentence cut in the wrong place. **Move 1
is per-figure authoring: open the image, find the sentences in his prose that say the
same thing, write the scene.** Roughly 47 figures, and the estimate should be made on
that basis rather than on the hope of a classifier.

### Move 2 — one trap register per chapter, from his own EXAM TRAP boxes

64 boxes, 51 unused. Each becomes a named trap wired to the scene that teaches it, so a
learner's own errors are recorded and replayable, as in chapters 2–5. **Target: ≥ 4
traps per chapter, every chapter, every sentence `_verbatim`.**

### Move 3 — make the numbers travel between screens

The sharpest weakness is that most numeric entries stand alone. The author's worked
examples carry a figure from one step to the next, and three instruments already do
this and are barely used: `schedule` (7 uses), `locks` (18), `post` (3). Specifically:

- **Every chapter's Extended Example becomes a chain, not a list.** Today it is a
  `locks` scene of independent ties. It should open from the learner's own earlier
  answers where the author's own arithmetic does.
- **The 19 unused WORKED EXAMPLE boxes with Step 1/2/3 structure become `post` or
  `order` scenes** — the learner performs the steps rather than reading them.
- **`schedule` carries forward.** It grades each row against the author's figures today;
  it should also mark a row whose opening does not equal the learner's own previous
  closing, which is the error the exam actually tests.

### Move 4 — a Brief drawing for every section

81 sections, 0 drawings in thirteen chapters. The 19 icon families added for 6–18 are
the same shapes a Brief animation needs, at a different size. **Target: one drawing per
section, reusing an existing animation where the mechanism matches and adding one only
where it does not.**

## Order of work

0. **A gate check for each target**, written first and failing: instrument share per
   chapter, figures asked per chapter, traps per chapter, Brief drawings per section.
   A target with no check is a wish.
1. **Move 1**, chapter by chapter, in book order.
2. **Move 2**, in the same pass per chapter.
3. **Move 4**, in the same pass per chapter.
4. **Move 3** last, because it changes instruments that all eighteen chapters share and
   every earlier move's work is re-gated by it.
5. Extend `cma_crosstie` as each chapter's ledger grows.
6. Full suite, commit, push.

## Targets, as the gate will state them

| Check | Today, worst chapter | Target |
|---|---|---|
| built instruments as a share of graded | 17% (ch 18) | **≥ 45% every chapter** |
| instrument kinds per chapter | 7 | **≥ 10** |
| the author's figures asked about | 17% (ch 6, 7, 18) | **≥ 70%** |
| named traps | 0 in thirteen chapters | **≥ 4** |
| Brief drawings | 0 in thirteen chapters | **1 per section** |
| his boxes used | 18% book-wide | **≥ 60%** |

## ⚠ Two things that must not happen

1. **No new exercise may be invented.** Every target above is met out of material the
   author already wrote; `evidence/` names it figure by figure and box by box. The
   provenance lock and `_verbatim` make this enforceable rather than aspirational.
2. **No figure may be moved in front of the exercise it answers.** Five of sixteen drawn
   figures in chapters 3–5 were answer keys, found only by opening them. Move 1 puts
   ~80 more figures onto exercise screens; **every one must be looked at** and declared
   `data` / default / `inBrief`.

## Cost

`cma_render_teeth` is already 60% of the CMA suite and would be ~69 minutes at eighteen
chapters. **Fingerprint it before Move 1 starts**, not after — this pass touches every
chapter and will re-run the suite many times.

## Verify this package

```
cd plan_depth_pass_2026-11-05
python -I check_package.py --teeth
```
