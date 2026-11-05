# CARRY — the depth pass: eighteen chapters to one standard

> **Moves 2 and 4 are DONE. Move 1 is largely DONE and the reason this file was wrong about it
> is the most useful thing in it. Move 3 is DONE for the sixteen Your-turn exercises and open
> for the Extended Examples.** Updated 2026-11-05, second pass.
>
> | | before the pass | now |
> |---|---|---|
> | the author's figures asked about | 88 of 203 (43%) | **109 of 203 (54%)** |
> | graded exercises | 1,061 | **1,102** |
> | named traps | 0 in thirteen chapters | **116 across seventeen** |
> | sections opening a drawn Brief | 24 of 105 | **105 of 105** |
> | ledger ties | 19 | **112** |
> | his 204 boxes used | *see the correction below* | **138 (68%)** |
>
> **⚠ The box number is a correction, not a gain.** Earlier versions of this file said 18% and
> then 40%. The true figure is **138 of 204 (68%)**, and almost all of the difference is a
> fault in `tools/author_boxes.py`, not work: its `used()` test pulled punctuation-free word
> runs out of the author's sentence and then looked for them inside the RAW deck text. Every
> YOUR TURN box begins "Figure Fnn-xx lists six …", and `F18-05` survives in the deck and
> vanishes from the run, so the windows never matched. It reported **1 of 18 YOUR TURN boxes
> used at a moment when sixteen chapters were built on them**, and understated EXAM TRAP by 21
> and WORKED EXAMPLE by 11. Both sides are normalised now. For a plan whose entire case is that
> table, understating it is the worst way to be wrong: it makes the gap look bigger than it is
> and the work look smaller. **EXAM TRAP 58/64 · FALSE-FRIEND 17/19 · YOUR TURN 17/18 · WATCH
> 14/14 · LANGUAGE FOCUS 6/8 · WORKED EXAMPLE 20/45 · IFRS CONTRAST 4/18 · WHAT YOU ALREADY
> KNOW 2/18.** The last two are the real remaining material: 14 IFRS contrasts and 16 opening
> cards, both already written in his voice.
>
> A fifth gate, `gates/cma_depth.py`, now holds every one of these as a **floor** with teeth on
> all five checks, so none of it can quietly go backwards. See "Targets" below for the floors
> against the targets.

## ⚠ THE CORRECTION THAT MATTERS: why "Move 1 cannot be generated" was wrong

The first version of this file concluded that a drawn figure could not be turned into an
exercise, having measured four mechanisms and watched all four fail. The measurements were
real and the conclusion does not follow. **It was looking at the picture.**

Seventeen of the eighteen chapters end in a "Your turn" answer key: the author blanks four to
six cells of one figure and then answers them himself, with his working. That is **73 authored
item/answer pairs**, every string already in the extracted chapter — and `_your_turn_key(d)`
in `tools/cma_scenes.py` had been reading them since Chapter 2 shipped. One chapter used it.

The exercise was never on the chart. It was in his key, in the oracle, behind a function that
already existed.

**Sixteen chapters now carry his own exercise**, with the shape of his answers picking the
instrument exactly as a figure's shape does:

| his answers | instrument | chapters |
|---|---|---|
| an expression that settles on a number | **`yourturn`**, new (`assets/objects5.js`) | 3, 6, 7, 8, 9, 10, 11, 12, 16 |
| a classification and a reason | the existing `shares` | 2, 4, 5, 13, 15, 17, 18 |
| one row's cells, semicolon separated | the existing `schedule` | 14 |

`yourturn` is where **Move 3** actually landed. It shows his working with the result cut off at
the last `=`, and **a line whose working quotes an earlier answer stays shut — its working
hidden and its box dead — until every line it quotes is right.** Chapter 7 is a chain of six:
`$51,400 + $16,600 = $68,000` cannot be read off, because $51,400 and $16,600 are the answers
to the two lines above it. The chain is computed from his arithmetic, by looking for each
earlier answer inside the later line's working, so it is his chain and not a guess at one.

Chapter 14's five-year lease roll-forward — the best single exercise in the book — was blocked
by one thing: `_key_for` tokenised `[a-z]+` only, so his row names 2028, 2029 and 2030 had no
token to score on, `auto_schedule` kept finding blanks and refused the figure. A four-digit
year in the token set, plus a `_key_cell` that pulls one cell out of
`Opening 267,301; interest 16,038; closing 183,339; …`, and it builds: five years, seven
columns, every closing feeding the next opening, every number his.

**What is still only shown: twelve label-↔-description tables.** F06-10, F07-05, F11-02,
F12-11, F14-03, F14-08, F16-03, F16-06, F18-03, F18-06, F18-07, F18-10. These need a MATCH
instrument and the book has none that fits: `wire` is a card-and-port graph, and `shares` draws
every option as a button, so seven principles against seven meanings is forty-nine long
buttons. A seven-way `sort` is the open candidate. F16-06 is a separate, smaller miss:
`auto_post` reads column 1 as the account name when in that figure the account is column 0.

## The general case: `auto_fill`

Thirty-two of his tables were on screens nobody could get wrong — no shape rule in the
dispatcher reached them, so each fell through to `auto_exhibit`. `auto_fill` runs last, just
before the exhibit, and emits the existing `schedule` renderer with no `carry`: his figures,
with one column entered and the rest printed. It adds no eleventh kind. **Thirteen figures and
sixty graded rows.**

Two decisions in it are worth keeping:

- **The entered column is his LAST numeric one.** His tables run left to right towards the
  figure he is deriving — Required allowance, 2026 revenue, After tax, Current, LIFO — so the
  last column is the question and everything left of it is the working. An earlier version
  entered every complete numeric column and was worse in an instructive way: it chose the
  columns that were complete rather than the ones that were the point, so F06-03 asked the
  reader to recall five expected loss rates and dropped the total, when the exercise his table
  sets is amount × rate = allowance, totalled.
- **The answer must not already appear in its own row.** F07-11 prints Sales as 420,000 under
  FIFO, the weighted average and LIFO alike; F16-11 prints the same consideration under both
  measurement choices. Those rows are shown and not asked, because a row whose answer is
  already on screen asks nothing. This is the warning at the bottom of this file arriving as a
  rule rather than as a hope.

## ⚠ THE ONE THAT SHIPPED, AND WHAT FOUND IT

Everything else in this file was caught by a gate. This was not, and it is the most important
thing here.

On section 11.4 an exhibit printed the author's worked example — **Step 1 $324,000, Step 2
$180,000, Step 3 $11,250, Check $515,250** — and two scenes below it `auto_fill` asked the
reader for 324,000, 11,250 and 515,250. **The answers were printed above the question, on the
same screen, in his own hand.** Seventeen exhibits had this shape: `figure_tables` takes the
block after each caption, and beside a DRAWN figure that block is not a table at all but the
one-cell box the author puts next to the picture — an EXAM TRAP, a WORKED EXAMPLE, a TERM
BRIDGE, once an entire SECTION CHECK. The exhibit built from it had no rows and the whole box
pasted into its caption. (It also collided with the real figure scene's id, so two scenes on
one page shared one id.)

**Every gate passed it.** The provenance lock, because every word is his. The render gate,
because the exercise marks correctly. The twelve per-exercise checks, because a scene cannot
be answered by looking at ITSELF — and this is one scene leaking another's answers. It was
found by taking a **screenshot of a page and reading it**, which is the only reason this
section exists.

`auto_exhibit` now refuses a figure with no body rows, and there is a new check, **A9: no
scene prints the figures another scene asks for**, whose unit is the PAGE. Two or more of one
exercise's answers appearing in another scene's static text is the bar — one in common is
ordinary, because his tables carry the inputs the exercise works from.

**A9 took three attempts to bite, and each failure is worth more than the check.** It counted
"Year 1" as an answer; then it kept the dollar sign, so `$324,000` never matched `324,000`;
then it required `{"id":` with nothing between, which matches no column in a pretty-printed
deck, so it read no schedule column at all. **It reported CLEAN every time.** A check written
against a tree with no defect in it has never been asked a question.

## Three defects this pass created and the gates caught

Recorded because each one is a shape that will recur.

1. **`spec.lines` was already taken.** `assets/scene.js` folds `spec.lines` in as a
   printed-statement exhibit *before* a renderer runs. A new kind carrying its own `lines`
   would have drawn a garbled table above sixteen working exercises — the exercises would have
   been fine, so the only sign would have been the mess. The field is `blanks`.
2. **A scene's `say` is CHROME, budgeted at 45 words.** Chapter 6's own instruction runs to 43
   words of trial balances and allowances, and failed at 48. Trimming his sentence would have
   been wrong twice over: the budget exists to stop a scene lecturing in interface text, and
   his instruction is not interface. It goes in `exhibit`, which the provenance lock already
   audits as CONTENT for exactly this reason — "a scenario the learner reads in order to
   answer". For the same reason "Every other column is **his**" failed the chrome check in ten
   chapters, and the check was right: "his" is a claim about where a figure came from.
3. **The Your-turn figure was asked twice.** `auto_yourturn` builds his exercise out of his
   key; the dispatcher then built a second exercise on the same figure, asking the same four
   classifications or the same column of amounts. Both were correct, and the first answered the
   second — a learner who pressed Check on `fill-06` was shown 6,400, 10,000 and 20,000 and was
   then asked for them. That is this file's own second warning, arriving **between** two scenes
   rather than within one. The figure is now shown as the data his exercise is set on, and
   asked once. The guard tests whether the Your-turn scene is actually BUILT, not whether the
   box exists — keying it on the box would have cost Chapter 14 its lease schedule.

## Three numbers this package was wrong about, and what they have in common

All three were measurement faults in the package's own tools, and all three made the work look
smaller or the evidence thinner than it was. A plan is only as good as the instrument that
measured it, so these are recorded as prominently as the gains.

1. **`used()` normalised one side.** 68% of his boxes are used, not 40% — see the correction at
   the top.
2. **`figures_asked.py` wrote its table to a session scratchpad** and printed six lines, so
   `evidence/figures_asked.txt` — the only record of WHICH figures are only shown, and the file
   `check_package.py` reads — held the summary and nothing else. It writes into `evidence/` now.
3. **`author_boxes.py` measured the figures as well**, by the superseded method: it regexed the
   written decks and guessed a scene's extent as the next 1,200 characters. It disagreed with
   `figures_asked.py` inside the same package — 88 only shown against 94, and 26 figures
   "appearing nowhere" against 0. Two numbers for one fact make a package a story. The
   duplicate is gone and that tool now counts boxes only.

## Two numbers that must never be typed again

- **`index.html`'s per-chapter exercise count** has now drifted three times, and
  `cma_interactive`'s check A8 caught it all three. `tools/cma_index.py` writes it from
  `gates.cma_interactive.run`. Its first version kept a second counting rule and was wrong for
  six chapters, because `scene.js` folds exhibits onto neighbouring exercises and the Term
  Bridge deck expands three drills at load — neither visible in the data file. It asks the
  authority instead.
- **`cma_depth`'s own floors.** They were typed from what the work felt like it had achieved,
  and the gate's first run rejected eight of eighteen rows (chapter 18 written as 15
  instruments and 9 kinds against a true 10 and 8). `--raise` prints the block to paste back.

## Chapter 1 is refused by name

`--chapter 1` died with "C1-6: an option with no reason", which reads like a gap in the
author's key and is not: his key explains all three wrong options, and what is missing is a
`CASE_RULES[1]` entry for the right one. **Supplying it would have been the obvious fix and the
wrong one.** `build()` names no section builder for chapter 1 — 0, against chapter 2's 6 —
because chapter 1 was written scene by scene before this generator existed, and its seven
section files on disk are the only copy of that work. The "fix" that makes `--chapter 1` run is
the one that replaces the benchmark chapter with a stub. `tools.cma_scenes.BUILDABLE` is
`range(2, 19)` and the refusal says what it would cost to lift it.

## Targets, as the gate now states them

`gates/cma_depth.py`, five checks, teeth on all five. Each asserts the floor we hold and prints
the target beside it, because a gate that asserts an unmet target is red from birth and then
unread.

| Check | Floor now held | Target |
|---|---|---|
| the author's figures asked about | 109 of 203 (54%); worst chapter 27% | ≥ 70% every chapter |
| instruments as a share of graded | 312 of 1,017 (31%); worst ch18 19% | ≥ 45% every chapter |
| instrument kinds per chapter | 8 (ch18), 9 (ch17) | ≥ 10 — **16 of 18 already there** |
| named traps | ≥ 4 in every chapter, 116 total | ✅ met |
| Brief drawings | 105 of 105 sections | ✅ met |
| his 204 boxes used | 138 (68%) | ≥ 60% — ✅ met, and mostly by fixing the measurement |

## What is left, in the order it should be done

1. **A match instrument** for the twelve label-↔-description tables. That is the single
   remaining block on the "figures asked" target: twelve figures is 6% of the book.
2. **`auto_post` for F16-06** — one figure, and the fix is reading column 0 as the account.
3. **Move 3 for the Extended Examples.** Eight chapters print theirs as a TABLE and the site
   now asks it with `auto_fill`; the remaining step is to open each one from the learner's own
   earlier answers where his own arithmetic does, as `yourturn` already does inside one scene.
4. **Chapters 2–5 are not on the dispatcher at all** — they name their builders by hand, which
   is why F02-05, F02-08, F03-12, F04-02 and eight more are still only shown. Adding
   `auto_section` to them as an ADDITION rather than a replacement is a contained change, and
   the only hazard is a figure asked twice, which defect 3 above now has a guard for.
5. **Fingerprint `cma_render_teeth`** — still 60% of the CMA suite and ~69 minutes at eighteen
   chapters. Every item above re-runs it.

## ⚠ Two things that must not happen

1. **No new exercise may be invented.** Every gain above came out of material the author
   already wrote — his answer key, his tables, his trap boxes. `_verbatim` makes that
   enforceable rather than aspirational, and it refused this pass's work four times before the
   wording was his.
2. **No figure may be moved in front of the exercise it answers.** Five of sixteen drawn
   figures in chapters 3–5 were answer keys, found only by opening them. Defect 3 above is the
   same rule broken between two scenes instead of inside one, so the check has to be about the
   PAGE and not the scene.

## Verify this package

```
cd plan_depth_pass_2026-11-05
python -I check_package.py --teeth
```
