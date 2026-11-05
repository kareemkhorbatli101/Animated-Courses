# CARRY — CMA Book 1, Chapters 1 & 2: Interactive Overhaul

## ✅ DELIVERED 2026-11-05

All nine phases are built, gated and verified. The plan below is kept as written, so the
delivery can be read against it; **where the two differ, the difference is listed here.**

| | Before | After |
|---|---|---|
| Exercises graded on looking | **28** | **0** |
| Gate checks | 204 | **2,016** (12 on each of 168 exercises) |
| Ch 2 instruments / kinds | 0 / 9 | **9 / 12** |
| Teaching sections with no instrument | 6 of 13 | **0** |
| Briefs (explanation + Arabic + voice + drawing) | 0 | **23** |
| Term marks drawn | 0 | **95** (83 tier-1, 12 tier-2, 0 fallbacks) |
| Journal rows pre-posted for the learner | 3 | **0** |

**New gate:** `gates/cma_interactive.py` — six chapter-wide claims (A1–A6) plus twelve
checks on every exercise, with teeth on all of them. Registered in `run_all.py`.

### Where the delivery differs from the plan, and why

1. **No new scene kinds for Standard A.** The plan named `matchgrid`, `judge` and `pairs`.
   They were not needed: the author's data already held the pairs, so `table`, `probe` and
   `switch` were rewritten in place to grade a decision. That avoided migrating 28 scenes'
   data for no gain. **Consequence:** a kind's NAME no longer implies its behaviour, so the
   name-based census in `tools/count_passive.py` is a *start-state tool only*. The
   authority is `gates/cma_interactive`, which measures behaviour in a browser.
2. **§2.4 got an instrument after all.** The plan was ready to leave it out. The author's
   three-sentence contingency rule became the `ladder` kind, so all 13 teaching sections
   now carry one.
3. **The cost risk did not materialise.** The plan predicted a ~10× gate cost and budgeted
   input-fingerprint work. Actual: **23 s** for the chapter-wide claims, **46 s** for all
   2,016 per-exercise checks, 87 s for the teeth. The reason is that every check on a scene
   happens in one round trip to the browser instead of one page-load per check. The
   fingerprint work was **not needed and not done.**
4. **Two checks were replaced, not satisfied.** `_qa.html`'s "the February deck is faded
   exactly as the book prints it" and the Standard-A tooth that planted `study:true` both
   asserted behaviour this work deliberately removed. Each was rewritten to assert the new
   intent, with the reason in a comment at the site.

### The worst defect of the job, found by LOOKING — not by any gate

Folding each figure onto the next exercise **replaced 8 reveal screens with 8 answer
keys.** A textbook prints a figure immediately before the exercise built on it, so "the
next exercise" is usually the one the figure answers: F01-04 lists all six account types
under *increase with a DEBIT / CREDIT* and the sort beneath it asked exactly that; F02-03
prints "32 … 34 … 66 days … so Orontes uses one year", which is every answer the cycle
exercise wants; F01-13 prints **six of the eight words** the summary cloze blanks.

It looked completely normal, and no gate can read an image. It was found by screenshotting
a page. **Moving each one on by one exercise did not fix it** — F01-09 simply landed on the
wire exercise it also answers — because the figure answers the *section*, not a question.

Three declared tiers (`assets/scene.js:foldExhibits`):

| | rule | why |
|---|---|---|
| `data: true` | fold **forward** | the learner cannot answer without it (a list of accounts to classify) |
| *default* | close the **practice** — the last scene that is not one of the author's section-check questions | not the last scene: §2.5 ends with the very question F02-09 answers |
| `inBrief: true` | goes in the **Brief** | a summary map answers its whole page; there is nowhere on it to stand |

All 13 exhibits are still shown, none above the question it answers.

### Defects found by the new checks (not by review)

- `scene.js`: `?seed=` did not reproduce a screen — the shuffle counter ran on forever, so
  the second render of a scene differed from the first. Fixed by resetting it per render.
- `objects2.js` holds **three** IIFEs; a renderer appended at the end landed in the third,
  which aliased only two helpers. `cycle` threw on Check with an empty verdict.
- `ch01/s1-1`'s three-questions sort had `why: ""` on items the answer key printed blank.
- `cycle` and `ladder` had no answer-key branch — an exercise whose answer could not be
  looked up.
- Three measurement bugs of my own, each of which blamed the site: a byte-window scan that
  swallowed the next three renderers, paren-matching that broke on a regex literal and
  blamed `cues` for two other scenes' verdicts, and a solver reading a renamed field.

**Date:** 2026-11-05
**Plan:** `../CMA_Book1_Ch1-Ch2_Interactive_Overhaul_2026-11-05.docx` (beside the book's `index.html`)
**Site it describes:** `cma/book1/` in the `Animated-Courses` publish repo
**Live:** https://kareemkhorbatli101.github.io/Animated-Courses/cma/book1/

## The one sentence

Every page makes the learner decide. The explaining happens in a pop-up the learner opens
on purpose. Nothing on a page is graded on having looked at it, and nothing on a page makes
a claim the author did not write.

## The finding

**28 of the 163 exercises are graded on looking, not knowing** — their score counts what was
opened, clicked, tried or flipped. 11 of them are `figure` scenes returning `score 0 / total 0`
with the verdict "Looked at".

| | Ch 1 | Ch 2 |
|---|---|---|
| Scenes | 84 | 79 |
| Graded on a decision | 64 | 71 |
| **Graded on looking** | **20 (23%)** | **8 (10%)** |
| Distinct kinds (teaching) | 22 | 9 |
| Instruments (teaching) | 13 | **0** |
| MCQ share (teaching) | 26% | 35% |

Two were named by the owner and both are confirmed in code:
- **`s1-2` beam** (the accounting equation) — scores the number of buttons pressed; verdict "All applied".
- **`s1-1` table** (the seven readers) — click to reveal; scores how many were *read*; verdict "Every seat read."

## The six standards (definition of done)

| | Standard |
|---|---|
| **A** | Decide, don't reveal. An untouched exercise scores 0 and is not `ok`. |
| **B** | Every page carries a **Brief** pop-up: summary, animation, Arabic terms, voice. |
| **C** | Every term has a drawn memory hook. No emoji, no stock icons. |
| **D** | Every worked example and journal entry is performable, not printed. |
| **E** | **≥10 targeted gate checks per exercise** (204 total today → ~2,000). |
| **F** | 100% book-sourced. Augmentation adds interaction, never a claim. |

## The rule that does the most work

**A figure is never a scene.** Each becomes the *exhibit* inside the exercise built on it.
That removes 13 of the 28 passive scenes without losing a single picture.

## Prior art — do NOT rebuild these

- **`assets/speech.js`** (7.5 KB): `Speech.speak/button/picker`, Arabic fallback chain, handles
  the empty-first-`getVoices()` trap, degrades *visibly* with no Arabic voice. Already loaded on
  **all 33 pages** and already called in 8 places. The Brief consumes it.
- **Arabic already exists, from the book**: 54 bridged terms in Ch 1, 30 in Ch 2 — each copied
  from a TERM BRIDGE box, with a QA rule that fails if any Arabic is absent from the source.
  **Never write an Arabic sentence.**
- `TERMS_FR`: 54 + 21 French terms the author prints.
- 15 figure PNGs in `assets/figures/`; 3 `@keyframes`; `prefers-reduced-motion` already honoured.

## Order of work

0. Build the "untouched exercise must score 0" check → **it must fail on exactly these 28**.
1. Demote 11 `figure` + 2 `lines` scenes to exhibits.
2. Build `matchgrid`, `judge`, `pairs`, `anatomy`; convert 9 scenes.
3. Regrade 8 half-graded kinds (beam→drag, tank/timeline2→predict-first, switch, shelf, wire, gauges→live, termcards→two-direction).
4. Ch 2 instruments: 8 reused from Ch 1 + `instant`, `cycle`, `terms3`.
5. The Brief × 27 pages.
6. Icons: declare every term's tier, then draw tiers 1–2.
7. All six February entries postable; no worked result printed.
8. Gate to 12 families with teeth each **+ an input fingerprint** so it stays affordable.
9. Full suite, commit, push, verify live.

## Gates — the exact commands

| When | Command |
|---|---|
| After every phase | `python -m gates.cma_provenance` then `python -m gates.cma_render` (~5 min) |
| After phases 3, 5, 8 | the same two with `--teeth` (~19 min) |
| Before pushing | `python -m gates.run_all --full --cached-video` |

Run from `D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python`.
`--cached-video` is correct: this work renders no new video.

## Cost warning

The four CMA gates cost **~24 min today** (provenance 50 s, its teeth 3 min, render 4 min, its
teeth 16 min). A 10× check expansion is not affordable run-after-run, so the input-fingerprint
work is **inside** phase 8, not after it — otherwise whoever runs it next will switch it off.

## Refusals

No invented Arabic. No emoji or stock icons. No change to the author's questions, options or
reasons (663 of them). No figure deleted. No URL changed. No check that cannot fail.

## Verify this package

```
cd plan_interactive_overhaul_2026-11-05
python -I check_package.py --teeth
```

It fails if the worklist no longer matches the live site — which is correct: this package
describes a *starting state*, and it must say so out loud once that state moves.
