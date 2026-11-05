# CARRY — CMA Book 1, Chapters 6 to 18 (the rest of the book)

**Date:** 2026-11-05
**Plan:** `../CMA_Book1_Ch6-Ch18_Plan_2026-11-05.docx` (beside the book's `index.html`)
**Precedent:** `../plan_chapters_3to5_2026-11-05/` — read its `01_DELIVERED.md` first. It
says what the Chapters 3–5 plan got wrong, and five of those six mistakes are mistakes
this plan is built to avoid repeating.

## The goal

Part I is built: Chapters 1 to 5, 372 exercises, five gates green. **Thirteen chapters
remain** — Parts II, III and IV, from Receivables to Integrated Reporting. Finishing them
makes Book 1 complete, and it is the first time the toolchain has been asked for a whole
book rather than a part of one.

## The thirteen chapters, measured (not assumed)

All thirteen **extract and verify verbatim today** against
`CMA_P1_Book1_volume_v1.3.docx` (sha `0836a0eb7cc8…`) — `evidence/book_verbatim.txt`.

| | built 2–5 | 6–18 | per chapter |
|---|---|---|---|
| Numbered sections | 24 | **81** | 4 to 7 |
| Blocks | 1,697 | 4,878 | ~375 |
| Words | 28,756 | **85,803** | ~6,600 |
| Section checks | 52 | **175** | 9 to 15 |
| Practice questions | 92 | **228** | 16 to 22 |
| Case items | 28 | **91** | 7 in every one |
| Numbered figures | 51 | **169** | 12 to 14 |
| Drawn figures (the author's own artwork) | 22 | **73** | 4 to 8 |
| Bridged terms, all with his Arabic | ~92 | **339** | 18 to 38 |

Full table per chapter: `evidence/chapter_census.txt`.

**Every one of the 339 bridged rows carries the author's Arabic. None is missing, so none
has to be invented** — `evidence/terms_and_figures.txt`.

## ⚠ The blocker — do this first, and it is worse than last time

`order_of(n, sections=6)` and `terms_scenes(n, sections=4)` carry Chapter 2's shape as a
**default argument**, and every caller passes only `n`. Chapters 2 to 5 all have six
numbered sections, so nothing has ever exercised it. Of the thirteen:

| | chapters | what happens |
|---|---|---|
| **exactly 6 sections** | 7, 8, 10, 12, 13 | fits the default |
| **7 sections** | 11, 14, 15, 16, 17, 18 | **s{n}-7 is built and then left off the page list.** The chapter ships missing a section. Silent. |
| **fewer than 6** | 6 (four), 9 (five) | `order_of` names `s6-5`, `s6-6`, `s9-6`, which do not exist; `write()` does `pages[pid]` and **raises KeyError**. Loud. |

Only **five of thirteen** fit. The two failure directions are not equally dangerous: too
few stops the build, **too many ships a chapter with a section missing and no gate counts
section pages against the book.** Fixing the default is one line each; adding the gate
check that would have caught the silent half is the part that must not be skipped.

See `evidence/pinned_to_five.txt`.

## What the Chapters 3–5 work already fixed for this one

Four of that plan's six surprises were fixed generically, and the census confirms the
fixes hold for all thirteen:

- **The case exhibit is found by the author's caption**, not by a table heading. All 13
  have `Figure Fnn-xx. Case exhibit: …`, and the figure number varies from `-12` to `-14`.
- **The case category sort is found by its second header.** All 13 head it `Category`;
  the first header is `Transfer`, `Memo item`, `Product line`, `Investment`, `Asset`,
  `Item`, `Lease` or `Disclosure` — eight different words, and the old code matched two.
- **The summary paragraph is found structurally.** All 13 print one, 91 to 111 words.
- **An unresolved ledger reference raises** at build time and fails gate check A7.

**All 13 have exactly seven case items**, `C{n}-1` to `C{n}-7`.

## What is NOT the same, and will bite

1. **The Extended Example is not section x.6.** It is 6.4, 7.6, 8.6, 9.5, 10.6, 11.7,
   12.6, 13.6, 14.7, 15.7, 16.7, 17.7, 18.7. It is always the LAST numbered section, so
   key `EXTRA_BY_CHAPTER` and `EXTENDED_EXAMPLE` off the last section, never off `"x.6"`.
2. **Four case exhibits are too wide for the `lines` exhibit**: ch7 is 13×4, ch8 6×8,
   ch9 6×4, ch10 6×4. They need `grid`, which already ships. Chapter 8's eight-column
   exhibit is the widest thing in the book.
3. **Chapter 6 has four numbered sections.** The thirteen-page shape is not a law of the
   book; the contents rail and the hub must be built from what the chapter has.

## Instruments — two new kinds, and that is all

Every printed figure in the thirteen chapters was classified **by its shape, not its
subject** (`evidence/instrument_fit.txt`): 113 printed figures, of which **106 fit a
scene kind that already ships.**

| New kind | Why nothing existing fits | Where |
|---|---|---|
| **`schedule`** | a row per year, where each row's **closing is the next row's opening**. `waterfall` is one vertical ladder of subtotals; this is a recurrence, so an error must propagate and be marked where it starts. | F09-09, F10-03, F10-05, F10-11, F14-06, F14-07, F14-10 |
| **`rowpick`** | per row, choose among **that row's own numbers** (market = the middle of replacement cost, ceiling and floor; then LCM = the lower of cost and market). `shares` picks from a fixed vocabulary; here the options differ every row. | F08-05, F08-10, F08-13 |

Everything else reuses what is there: `switch` for the twelve GAAP-vs-IFRS tables,
`shares` for the twelve decision grids, `post` for the two sets of journal entries
(F12-08 warranties, F16-06 the elimination entry), `grid` for the eight wide tables,
`waterfall` for the reconciliations, `order`/`ladder` for the decision trees.

**Read the 67 figures the classifier calls `lines` as "undecided", not "a reading
screen".** Each becomes an exercise chosen when its section is authored. The standard
that no screen is scored on looking applies to every one.

**Eleven chapters print a "complete the blanks" figure** with the author's own key —
F06-06, F08-07, F10-05, F11-09, F12-03, F13-07, F14-07, F15-06, F16-09, F17-08, F18-05.
Those are the best exercises in the book and they come for free; do not paraphrase them.

## The part that cannot be generated

| | count | note |
|---|---|---|
| Ledgers, one per chapter, with `checkTies()` | 13 | the arithmetic differs in kind every time: an allowance roll-forward, three cost flows, an amortisation schedule, a lease liability, an NCI roll-forward |
| `EXTRA_BY_CHAPTER` entries | 13 × 4–7 sections | the instruments |
| `TRAPS`, `CASE_RULES`, `SUMMARY_CLOZE`, `BRIEF_ANIM_BY_CHAPTER`, `EXTENDED_EXAMPLE` | **65** | five registries × thirteen chapters |
| **Term marks** | **204** | the big one — see below |
| Brief drawings | ~81 | one per section, plus the back matter |

### The 204 term marks

`assets/icons.js` draws 129 terms today from 21 drawing families plus the typographic
fallback. The thirteen chapters bridge 339 rows, and **204 distinct terms have no mark**
— 213 if you add the per-chapter column up, because nine terms are bridged by two
chapters. The work is 204. Listed in full in `evidence/terms_and_figures.txt` so the list
can be argued with rather than discovered.

The rule stands: no emoji, no stock icons, and a word with no geometry gets a typographic
mark and is **counted as such** by the icon census now on all five gate pages. The 34
marks for Chapters 3–5 took eight families, so expect **roughly 25 more families** — the
shapes come from each chapter's own figures (the aging ladder, the cost layers, the
influence spectrum, the five steps, the six capitals), and are decided when the chapter
is authored, not now.

## ⚠ Cost — measured, and it changes how the work must be run

One real run of the full suite on 2026-11-05 with five chapters built
(`evidence/gate_cost.txt`):

| gate | 5 chapters | 18, scaled by pages |
|---|---|---|
| `cma_provenance` + teeth | 158 s | 9.5 min |
| `cma_render` | 288 s | 17.3 min |
| **`cma_render_teeth`** | **1,146 s** | **69 min** |
| `cma_interactive` + `--each` + teeth | 304 s | 18.3 min |
| `cma_crosstie` + teeth | 9 s | 0.5 min |
| **total** | **31.7 min** | **114 min** |

**`cma_render_teeth` is 60% of it**, because it re-walks every page once per planted
defect. At eighteen chapters it is over an hour on its own, every suite run, whether or
not a single CMA file changed.

**Do this when the gates are extended, not afterwards:** give `cma_render_teeth` an input
fingerprint, the way `player_component` has one, so an unchanged corpus is a skip rather
than an hour. That is the approved suite-fingerprint direction and this is the case it
was approved for. A skip must be visible in the report and must record what it hashed,
or it becomes a gate that passes by not running.

## Order of work

0. **The two defaults.** `order_of` and `terms_scenes` take the count from the chapter.
   Done when `--chapter 6` (four sections) and `--chapter 11` (seven) both build, and a
   new gate check counts each chapter's section pages against the book.
1. **The two new kinds**, `schedule` and `rowpick`, each with an `answers-view.js` branch,
   `provenance.js` fields, a Brief drawing and a place in the A5 lint.
2. **Then one chapter at a time**, in book order, each finished before the next starts:
   ledger → instruments → the five registries → term marks → Brief drawings.
3. **After every chapter**: `cma_provenance`, `cma_interactive --each`, `cma_render` for
   that chapter alone.
4. **After every third chapter**: the three with `--teeth`, plus `cma_crosstie`.
5. **Fingerprint `cma_render_teeth`** before chapter 12, or the suite becomes unrunnable.
6. Book index, hub, merged glossary and term index — all five are already chapter-generic
   as of the Chapters 3–5 work, so this is a re-run, not a rewrite.
7. Full suite, commit, push, verify live.

## Gates

| When | Command |
|---|---|
| After each chapter | `python -m gates.cma_provenance`, `cma_interactive --each`, `cma_render` |
| After every third | the same three with `--teeth`, plus `cma_crosstie` |
| Before pushing | `python -m gates.run_all --full --cached-video` |

Run from `D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python`.

## The risk to name now, not later

**Eighteen chapters will describe one company across several years.** `cma_crosstie`
already makes Chapters 2–5 agree about Orontes's 2025. Chapters 6 to 18 add 2026, 2027
and 2028, and the same figures recur: the Chapter 2 warehouse fire is in the Chapter 3
case, the Chapter 4 treasury purchase is in the Chapter 5 case, Levant is in 16 and 17.
**Extend `cma_crosstie` with every chapter, never at the end** — four statements that
disagree while each chapter passes alone is the failure this gate exists for, and it gets
thirteen times easier to create.

Second: **an exhibit that answers its exercise.** Five of the sixteen drawn figures in
Chapters 3–5 were answer keys, and no gate can see inside an image. The 73 drawn figures
here must each be *looked at* against the exercise it lands on and declared `data` /
default / `inBrief`. That is 73 screenshots and there is no way round it.

## Refusals

No invented Arabic — all 339 bridges are the author's. No emoji or stock icons. No change
to any question, option or reason he wrote. No figure deleted, and none placed above the
exercise it answers. No check that cannot fail.

## Verify this package

```
cd plan_chapters_6to18_2026-11-05
python -I check_package.py --teeth
```
