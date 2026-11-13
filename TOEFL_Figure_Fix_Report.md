# TOEFL 2026 — the clipped-figure defect: investigation, fix and proof

## 1. What you saw

A *TAKE AN INTERVIEW* box in which the question ran out of its white card and
was sliced off at the edge of the picture. The missing words were not hidden —
they were never drawn. Nothing could be recovered from the .docx, because what
the .docx holds is a PNG, and the PNG had no more pixels.

## 2. Why it happened

Every figure in these books is drawn as SVG and rasterised to PNG by headless
Chromium, then embedded as an image. Text inside a figure is therefore *baked
into a picture*: it cannot reflow, and anything past the right edge of the
canvas is gone.

The drawing code placed each string at a fixed coordinate with no width
constraint. The only line-breaking it had was this estimate:

    chars * font_size * 0.56      (0.63 when bold)

DejaVu Sans is not a 0.56-em font. For ordinary mixed-case English prose that
constant under-measures real advance widths by up to **40 %**, and the error
grows with the length of the string — exactly the strings that most needed
breaking. Anything the estimate judged to fit, but that did not, ran off the
card and then off the canvas.

Two latent faults were found in the same pass:

* **Four silent truncations.** `talk_scene`, `announce_scene`, `unit_opener`
  and `icon_row` each sliced their content (`[:4]`, `[:3]`, `[:3]`, `[:2]`).
  While wrapping was broken these rarely bit; the moment wrapping became
  accurate and boxes grew, they would have started deleting real content.
* **A dead renderer path.** `art.py` hard-coded one Playwright build number
  (`chromium_headless_shell-1194`) that no longer exists in the image, so the
  books could not be re-rendered at all until it was replaced with a resolver.

## 3. How far it went — measured, not sampled

The audit instrumented the real `book.build()` for all four volumes, so it saw
exactly the figures the books contain: **1,296 figure placements, 1,262 unique,
across 22 families.**

| Measure | Before |
|---|---|
| Text runs clipped by the edge of the image | **678** |
| Figures containing clipped text | **288** |
| Text runs overrunning the shape they sit in | **1,252** |
| Figures with at least one overrun | **357 of 1,296 (28 %)** |
| Worst single overrun | 2,718 px past a 644 px slot |

Per volume: V1 71 figures, V2 77, V3 94, V4 115.

By family: `repeat_strip` 124 figures, `interview_panel` 124, `notice_card` 28,
`build_demo` 25, `skill_bar` 22, `talk_scene` 18, `hedge_scale` 6,
`email_card` 6, `map_strip` 4.

## 4. The fix

**A. Exact text metrics.** `toefl/metrics_build.py` parses the four DejaVu
TrueType faces directly (`head`, `hhea`, `hmtx`, `cmap` formats 4 and 12) and
writes every glyph advance to `toefl/dejavu_metrics.json`. `art.tw()` now
returns a true width in pixels instead of a guess.

Two details matter for correctness:

* SVG collapses runs of whitespace, so the measurement normalises `\s+` to a
  single space first. Skipping this was worth up to 74 px of error.
* Chromium applies pair kerning; summing advances does not. Measured against
  Chromium's own `getComputedTextLength()` over every string in the books, the
  residual is **mean 0.97 px, max 10.8 px, and worst under-estimate 0.075 px** —
  i.e. the Python number is a safe upper bound, which is the direction a
  fitting layer needs.

**B. A fitting layer.** `fit()` wraps without ever splitting a word;
`fit_block()` shrinks the font (floor 0.72) until the longest word fits before
any split is considered; `shrink_to()` and `TFIT()` fit a single line to a
declared width; `TBLOCK()` draws a wrapped block and reports the height it
used. Every fitted run logs the box it was told to fit, which is what Gate B
checks.

**C. Nine families rewritten** so that boxes *grow to the content* instead of
content spilling out of boxes: `interview_panel`, `repeat_strip`,
`notice_card`, `email_card`, `talk_scene`, `announce_scene`, `map_strip`,
`skill_bar`, `build_demo`, plus `unit_opener`, `icon_row`, `social_card`,
`family_tree` and `convo_scene`. All four `[:n]` truncations removed.

**D. The renderer path** is now resolved at import time by globbing the
Playwright and system locations.

## 5. Proof — four gates, all green

| Gate | What it proves | Before | After |
|---|---|---|---|
| **A** | No text crosses the image edge (hard bound, no inference) | 678 runs in 288 figures | **0 runs in 0 figures** |
| **B** | Every fitted run lies inside the width it declared | — | **0 violations of 5,960 runs** |
| **B3** | Independent geometric check against per-family box limits read off the rewritten code | 1,252 overruns | **0 of 6,927 runs** |
| **C** | Content is unchanged: word-token multiset over all figure text, plus figure counts | — | **56,352 tokens, 0 lost, 0 added; 1,296 → 1,296 figures (314/314/334/334)** |

Gate C caught one regression of my own during the work: the last-resort word
splitter had hard-broken five long unit titles in `map_strip`
(`Anthropology` → `Anthropolog` + `y`, and four others). `fit_block()` was
added to shrink before splitting; the gate then ran clean.

A fifth check runs on the rebuilt files themselves: the document body text of
each new volume is compared against the old one. Only the images were allowed
to change, and that is what the comparison shows.

## 6. What changed in the books

Nothing in the words. Figures are taller where they now hold wrapped text —
the interview panel from your screenshot grew from 366 px to 494 px — so page
breaks shift slightly in places. Every question, instruction and label that was
being cut off is now fully on the page.
