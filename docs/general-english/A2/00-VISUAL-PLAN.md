# A2 — plan to make both volumes much more visual

**Status: awaiting approval. Nothing in this plan has been executed.**

Written 2026-10-08, against the finished course: twenty units, 230 checks,
3,826 executions at zero failures, 280 figures. Every number below was
measured from the shipped files, not estimated. Where a number is a forecast
it says so and shows the arithmetic.

---

## 1. What is actually wrong today

The complaint is correct and it is worse than it looks. I measured the shipped
A2.2 DOCX: every image in the book, as printed.

| What | Printed size today | Page is |
|---|---|---|
| **Front cover** | **1.40 × 1.98 in** | 8.27 × 11.69 in |
| **Back cover** | **1.40 × 1.98 in** | 8.27 × 11.69 in |
| Unit opener (Figure N.1) | 3.51 × 1.98 in | text area 6.27 × 9.69 in |
| Every other figure | ≤ 5.62 × 1.98 in | — |

The covers are **postage stamps**. A 2480 × 3508 px A4 cover — correct artwork,
300 DPI, already the right aspect — is being shrunk to 1.4 inches wide.

The cause is one line of law in `spec/typography.yaml`:

```yaml
figure_placement:
  box_in: {w: 5.625, h: 1.9791666666666667}
  fit: contain
```

`tools/build_docx.py:box_for()` parses a slot number out of the filename
(`uNN-S.png`). Covers are named `a21-front.png`, so no slot matches, and they
fall through to the default box. Portrait artwork hits the 1.979 in **height**
cap first, so `contain` solves for height and the width collapses to 1.4 in.

The same 1.979 in cap squashes every figure in the book. Two of Unit 16's
figures are drawn 595 and 577 px tall and are printed at 4.79 and 4.94 in wide
instead of the full 6.27 in text width, purely to stay under that cap.

### Coverage

42 sub-sections per unit. **13 carry a figure. 29 do not.** Plus one unit
opener that is not attached to a sub-section. Current ratio: 31%.

| Part | Sub-sections | With a figure today |
|---|---|---|
| Warm Up | 3 | 1 |
| Part 1 | 7 | 2 |
| Part 2 | 7 | 2 |
| Part 3 | 3 | 1 |
| Part 4 | 4 | 1 |
| Part 5 | 3 | 2 |
| Part 6 | 4 | 1 |
| Part 7 | 5 | 1 |
| Part 8 | 2 (+ reading) | 1 |
| Part 9 | 1 (+ reading) | 0 |
| Part 10 | 3 | 1 |

Part 9 has **no figure at all** attached to a sub-section. Part 7 has five
sub-sections and one figure.

---

## 2. What this plan commits to

Three things, each stated as a law a check will enforce.

1. **Four covers fill a page.** Front and back of both volumes, printed at the
   full A4 trim size, 8.268 × 11.693 in, alone on their own page, bleeding to
   the trim edge.
2. **Twenty unit openers fill a page.** Figure N.1 of every unit, redrawn as
   portrait A4 artwork, printed full-page, alone, with the unit's first part
   beginning on the page after.
3. **A visual on every exercise but two.** Not "every other" — every
   sub-section that can carry a pedagogically useful one, which is 40 of the
   42. The two exceptions are named, with reasons, in §4.

Plus a fourth thing the complaint implies and the measurements prove:

4. **In-flow figures get the full text width.** The box goes from
   5.625 × 1.979 in to **6.268 × 3.100 in** — full text width, and the 1.979 in
   height cap removed. Nothing is redrawn for this; the existing 280 figures
   simply stop being squashed. Unit 16's fourteen figures grow from 25.1 in of
   total art height to 29.6 in, and the two currently narrowed to 4.79 and
   4.94 in go to the full 6.27 in.

### The headline numbers

| | Today | After |
|---|---|---|
| Figures per unit | 14 | **41** |
| Figures per volume | 140 | **410** |
| Figures, whole course | 280 | **820** |
| Full-page images per volume | 0 | **11** (2 covers + 10 openers... see note) |
| Sub-sections with a visual | 13 of 42 (31%) | **40 of 42 (95%)** |
| In-flow figure box | 5.625 × 1.979 in | 6.268 × 3.100 in |
| Cover printed size | 1.40 × 1.98 in | 8.27 × 11.69 in |
| Pages per unit | 27 | **~35** (forecast, §7) |
| Pages per volume | 386 / 396 | **~470** (forecast, §7) |
| Checks | 230 | **238** |
| Mutation fixtures | 217 | **225** |

Note on full-page count: 12 per volume — front cover, back cover, and ten unit
openers.

---

## 3. The alternative sizes, so the choice is visible

I am recommending 41. The two other defensible points, with the same
arithmetic, in case you want to dial it:

| Figures/unit | Coverage | Pages/unit | Pages/volume | What you lose |
|---|---|---|---|---|
| 28 | 27 of 42 (64%) | ~32 | ~436 | The vocabulary picture-grids. A2 learners lose picture support on four matching tasks per unit, which is where it helps most. |
| **41 (recommended)** | **40 of 42 (95%)** | **~35** | **~469** | **Nothing. Two open talk prompts stay plain, which they should.** |
| All 42 | 42 of 42 (100%) | ~36 | ~472 | Nothing measurable, but two figures would be decorative, and a decorative figure teaches learners to skip figures. |

The recommendation is 41 because it comes from a **rule** rather than a target:
*every sub-section gets a figure unless the sub-section is a pure open-ended
talk prompt with no content to draw.* Exactly two sub-sections are that. A rule
survives twenty units; a number drifts.

---

## 4. The complete figure inventory — all 41 slots

This is the whole table. Every row is a slot, in document order. "Was" is the
slot number today, blank if the figure is new.

| New slot | Part | Sub | Kind | Figure job | Was | Pedagogical job |
|---|---|---|---|---|---|---|
| **1** | Unit | — | opener | `unit_opener_page` | 1 | **FULL PAGE.** The unit's grammar, topic and can-do promises, as a page a learner meets before any text. |
| 2 | Warm Up | w1 | matching | `word_grid` | | The five words as picture cards, so the matching task can be done from the image before the English is secure. |
| 3 | Warm Up | w2 | gapfill | `bank_strip` | | The four word-bank items as icons, in bank order, so the gap-fill has a visual referent. |
| 4 | Warm Up | w3 | fig_mcq | `scene` | 2 | The six people and what each is doing — the text the MCQ questions. |
| 5 | Part 1 | p1a | matching | `word_grid` | | Seven words as picture cards. The spare meaning is drawn too, so the distractor is visible. |
| 6 | Part 1 | p1b | pronunciation | `sound_shape` | | **The highest-value new figure.** Stress, length and the reduced syllable drawn as shape. Pronunciation is the one thing prose cannot show, and every unit has a pronunciation section with no visual today. |
| 7 | Part 1 | p1c | table_fill | `category_set` | 3 | The table's four or six rows as labelled cards. |
| 8 | Part 1 | p1d | matching | `label_me` | 4 | The diagram the learner labels. |
| 9 | Part 1 | p1f | gapfill | `bank_strip` | | Four bank words as icons. |
| 10 | Part 1 | p1g | short_write | `writing_frame` | | The two-or-three-sentence shape, before the model. |
| 11 | Part 2 | p2a | notice | `annotated_lines` | | The notice sentences with the target form ringed. The task says "underline the verbs"; this is what a correct underlining looks like. |
| 12 | Part 2 | p2b | focus_box | `grammar_contrast` | 5 | The grammar as two columns. |
| 13 | Part 2 | p2c | gapfill | `timeline` | 6 | The practice sentences on a time line. |
| 14 | Part 2 | p2d | gapfill | `sort_bins` | | A two-bin sort. This task *is* a sorting task; prose makes it a list. |
| 15 | Part 2 | p2e | correct_sent | `error_pairs` | | Four ✗ → ✓ pairs, the wrong form struck and the right one beside it. |
| 16 | Part 3 | p3a | script_tfng | `speakers` | 7 | Who is speaking in each of the three tracks. |
| 17 | Part 3 | p3b | script_qa | `dialogue_strip` | | The two speakers and the object they are arguing about. |
| 18 | Part 3 | p3c | script_match | `match_columns` | | The four people and the five things said, with the spare one drawn. |
| 19 | Part 4 | p4a | discuss | `question_cards` | | The three questions as cards a pair can put on the table. |
| 20 | Part 4 | p4b | infogap | `info_gap_pair` | | **Fixes a real pedagogical defect.** The task says "Student A and Student B each have a street — find three differences". Today both are prose lists on the same page, so either student can read the other's. Two pictures is what the task has always needed. |
| 21 | Part 4 | p4c | roleplay | `cue_cards` | 8 | Card A and Card B. |
| 22 | Part 4 | p4d | presentation | `talk_shape` | | The one-minute talk as four beats with a time against each. |
| 23 | Part 5 | p5a | text_mcq | `process_strip` | 9 | The reading's argument in five stages. |
| 24 | Part 5 | p5b | matching | `word_grid` | | The four words from the text as pictures. |
| 25 | Part 5 | p5c | text_qa | `world_strip` | 10 | The three cases the second reading compares. |
| 26 | Part 6 | p6a | writing | `writing_frame` | 11 | The shape of the piece. |
| 27 | Part 6 | p6b | writing | `writing_frame` | | Same, for the second task. Three of the four writing tasks have no frame today. |
| 28 | Part 6 | p6c | writing | `writing_frame` | | Same, third task. |
| 29 | Part 6 | p6d | writing | `writing_frame` | | Same, the reflection. |
| 30 | Part 7 | p7a | matching | `function_map` | 12 | What each phrase does. |
| 31 | Part 7 | p7b | script_qa | `dialogue_strip` | | The 7B exchange. |
| 32 | Part 7 | p7c | ordering | `sequence_steps` | | Five steps with the numbers blank. Ordering is spatial and is currently prose. |
| 33 | Part 7 | p7d | roleplay | `cue_cards` | | The 7D cards. Part 7's role-play has no cards today while Part 4's does. |
| 34 | Part 7 | p7e | writing | `writing_frame` | | The note's shape. |
| 35 | Part 8 | reading | text_qa | `before_after` | 13 | The global story's two states. |
| 36 | Part 8 | p8b | matching | `word_grid` | | The four story words as pictures. |
| 37 | Part 9 | reading | text_qa | `close_scene` | | Part 9 has no figure at all today. The close-to-home reading drawn as the street scene it describes. |
| 38 | Part 9 | p9b | decision | `decision_fork` | | The three options with what each costs. The decision task's whole content. |
| 39 | Part 10 | p10a | gapfill | `bank_strip` | | The spiral review's eight bank words as icons, four of them from earlier units. |
| 40 | Part 10 | p10b | cando | `progress_strip` | 14 | The five can-do lines with a box each. |
| 41 | Part 10 | p10c | glossary | `glossary_grid` | | **All ten glossary words as picture cards on one page.** The single best retention aid in the unit, and the glossary is a bare word list today. |

### The two sub-sections deliberately left plain

| Sub | Heading | Why no figure |
|---|---|---|
| p2f | Part 2: Freer Practice | Two lines: *write two sentences about your own street, one X and one Y.* There is nothing to draw that is not already in the Focus Box figure four sub-sections earlier. A figure here would be a repeat, and a repeated figure teaches learners that figures can be skipped. |
| p8c | Part 8: Discussion | Three sentence frames and nothing else. The content is whatever the pair brings. Drawing a generic "two people talking" icon is decoration. |

Both are recorded in the spec as `figure: none` with the reason, so a later pass
cannot read them as an oversight and "fix" them.

### New figure jobs to build — 12

`sound_shape` · `annotated_lines` · `sort_bins` · `error_pairs` ·
`dialogue_strip` · `match_columns` · `question_cards` · `info_gap_pair` ·
`talk_shape` · `sequence_steps` · `decision_fork` · `glossary_grid` ·
`word_grid` · `bank_strip` · `close_scene` · `unit_opener_page`

(16 — four of them, `word_grid`, `bank_strip`, `close_scene` and
`unit_opener_page`, are variants close enough to existing jobs to share code.)

Existing jobs reused unchanged: `scene` · `category_set` · `label_me` ·
`grammar_contrast` · `timeline` · `speakers` · `cue_cards` · `process_strip` ·
`world_strip` · `writing_frame` · `function_map` · `before_after` ·
`progress_strip`.

---

## 5. The word-budget problem, and the fix

**This is the single thing most likely to derail the work, and it is not
obvious.** Figure captions count toward the word budget.

`model.Unit.words` counts every word in the file with `|*>_` stripped. A caption
is a line like `*Figure 16.3 · Four things, and what each one became.*` — it is
counted. Measured across A2.2:

| | |
|---|---|
| Captions per unit today | 14 |
| Mean words per caption | **13.6** |
| Caption words per unit today | 184–203 |
| Unit word maximum (`unit.words.max`) | 5,280 |
| **Mean headroom to that maximum** | **64 words** |
| Units with under 10 words of headroom | **5 of 10** (u13 ✓10, u16 ✓9, u18 ✓3, u19 ✓6, u20 ✓4) |

27 new captions × 13.6 = **367 words**. Every unit in both volumes would break
`K11` immediately. Unit 18 has three words of room.

### The fix: separate prose from apparatus

The word budget exists to bound how much *reading* a learner faces in a part.
A caption is apparatus, like a heading — it is not prose. So:

1. Add `caption_words` to each part in `golden.yaml.word_budget`, and a
   `unit.caption_words` total, with min/max.
2. `K11` and the A-family length checks measure **prose words = total − caption
   words**, against the **unchanged** source-derived min/max. The source
   comparison stays exactly as it is.
3. A new check (`G29`) bounds caption words per unit, so apparatus cannot grow
   without a declared allowance.

**This is not a loosening.** It makes the existing books conform *better*:

| Unit | Total today | Captions | Prose | Target 4,930 | Max 5,280 |
|---|---|---|---|---|---|
| u16 | 5,271 | 184 | **5,087** | +157 | ✓ |
| u18 | 5,277 | 188 | **5,089** | +159 | ✓ |
| u20 | 5,276 | 190 | **5,086** | +156 | ✓ |

Prose lands 156–159 words above target instead of 341–347. Nothing in any unit
is rewritten.

New totals after the change: prose ~5,090 (unchanged), captions ~558
(41 × 13.6), total ~5,650.

### Captions escape the language band check

A second finding: `model.Unit.sentences` excludes caption lines, so `E02`
(off-band vocabulary) never sees caption text. With 14 captions that is
tolerable; with 41 it is a hole. `G18` partly covers it — every figure label
word must appear in the unit text — but caption *prose* is unchecked.

**Added to the plan:** extend `E02` to band-check caption text, or add it to the
sentence stream. I propose extending `E02`, because captions are not sentences
and should not enter `E04`/`E05`/`E22` (length, nesting, Flesch-Kincaid) where
they would skew the reading-grade measurement.

---

## 6. Full-page mechanics — the part that needs real care

A full-page image in a DOCX is not a bigger image. It needs its own section.

### Why

The body section has 1 in margins on all four sides, so the largest image that
fits in the text area is 6.268 × 9.693 in. That is a big image on a page, not a
page. "Fill a page" means edge to edge: 8.268 × 11.693 in.

### How

For each full-page image (4 covers + 20 openers):

1. Wrap it in its own `<w:sectPr>` with `margins_twips: {top: 0, right: 0,
   bottom: 0, left: 0}` and the same page size.
2. Place the image at exactly `8.268 × 11.693 in` → `cx=7561200 cy=10693400`
   EMU.
3. Set the paragraph to no spacing before/after, centred, so nothing nudges it
   onto a second page.
4. Follow it with a section break back to the 1 in body section.
5. The opener is followed by `Part 1`, which already carries
   `page_break_before: true`, so no extra break is needed there. The front cover
   is followed by the front matter; the back cover ends the document.

### Artwork changes

| | Canvas today | Canvas after | Why |
|---|---|---|---|
| Covers | 2480 × 3508 | **unchanged** | Already exact A4 at 300 DPI, aspect 1.4145. Only the placement is wrong. |
| Unit openers | 1440 × 812 (aspect 0.564) | **2480 × 3508 (aspect 1.4142)** | Must be redrawn portrait. A landscape canvas cannot fill a portrait page without distortion, and distortion is not an option. |
| In-flow figures | 1440 × 320–880 | **unchanged** | Only the box changes. |

`unit_opener_page` is therefore a genuinely new drawing, not a rescale: a
portrait page with the unit number and title as a masthead, the grammar point,
the three can-do promises set as a list with room to breathe, and the five topic
icons at a size that reads at arm's length rather than the current five small
glyphs in a row.

### Three traps

- **`fit: contain` must not apply to full-page slots.** The cover is 1.4145 and
  the page is 1.4142 — `contain` would shrink it by 0.02% and leave a hairline
  of white at top and bottom. Full-page slots use `fit: fill_trim`: set the
  extent to the page size exactly and let the 0.02% crop happen in the
  0.002 in beyond the trim, where a printer cuts anyway.
- **`G17` (empty band ≤ 8% of canvas height) will fail every opener.** A
  portrait page legitimately has generous top and bottom margin. The check must
  become slot-aware.
- **`G13` (no glyph below 22 px) is resolution-dependent and silently wrong at
  two canvas sizes.** At 1440 px printed 5.625 in wide, 22 px = 6.19 printed
  points. At 2480 px printed 8.268 in wide, 22 px = 5.32 points — *smaller*, so
  the check would get looser exactly where the art is biggest. It must be
  rewritten in **printed points**, with the floor set at 6.19 pt so the current
  threshold is preserved exactly for every existing figure.

---

## 7. Page and size forecast

Computed from Unit 16's real canvases refitted to the new box, plus a measured
0.35 in caption block.

```
Unit 16, 14 figures:  art height 25.1 in today  ->  29.6 in in the new box
mean in-flow block (art + caption):                  2.47 in
```

| | Today | After |
|---|---|---|
| In-flow figures per unit | 13 | 40 |
| Figure height per unit | 27.8 in | 98.6 in |
| Delta | — | **+70.8 in = +7.3 pages** |
| Full-page opener | — | +1 page (net, replacing a 2 in figure) |
| **Pages per unit** | 27 | **~35** |
| **Pages per volume** | 386 / 396 | **~469** |

New envelopes, to be written into `typography.yaml.departures`:

```yaml
pages_per_unit:   {min: 30, max: 42}      # was 20-34
pages_per_volume: {min: 420, max: 560}    # was 230-380
```

### File size — and a real problem with the download bundle

| | Today | Forecast |
|---|---|---|
| Figures per volume | 140 | 410 |
| Book DOCX | 6.2 / 6.5 MB | ~20 MB |
| Book PDF | 8.9 / 9.2 MB | ~28 MB |
| **Complete-course ZIP** | **25 MB** | **~105 MB** |

**GitHub refuses any single file over 100 MB.** The ZIP would be rejected at
push. Three ways out, decision needed:

- **(a) Split the ZIP per volume** — two ~52 MB files. Two clicks instead of
  one, which is a small regression against what you asked for yesterday.
- **(b) Drop PDFs from the ZIP**, keep DOCX + covers + docs (~45 MB), and link
  the PDFs separately. One click for the editable course, one more if you want
  print-ready.
- **(c) Attach the ZIP to a GitHub Release** instead of committing it. Release
  assets allow up to 2 GB, download in one click, and do not bloat git history.
  **This is the right answer** and is what releases are for.

I recommend (c), with (a) as the fallback if release creation is not permitted
for this repo.

### The repository is already 1.4 GB, and this is why

Found 2026-10-08 while costing the bundle. Measured over the whole git history:

| What is in the history | Size |
|---|---|
| `.docx` | **573 MB** |
| `.pdf` | **568 MB** |
| `.png` | 197 MB |
| everything else (`.glb`, `.mp4`, `.zip`, `.html`, `.md`) | ~245 MB |
| **`.git` on disk** | **1.4 GB** |

The working tree's build folder is only 86 MB. The history is 1.14 GB of DOCX
and PDF because **the loop rebuilt and committed both books after every one of
twenty units**. Each rebuild is a fresh ~15 MB pair that git stores whole,
because DOCX and PDF are already-compressed zip containers and do not delta
against the previous version.

GitHub's own guidance is to keep a repository under about 1 GB. We are past it.

**What the visual work would do to that.** Books go from 15 MB a pair to about
48 MB. Twenty more unit rebuilds across two volumes is roughly **1 to 2 GB of
new history** — for files nobody reads from git, only download.

So the bundle question in §7 is the smaller half of a bigger one:

> **Should build outputs be committed to the repository at all?**

My answer is no, and this is the one recommendation in the plan I would make
even if nothing else here were approved:

1. Stop tracking `build/*.docx`, `build/*.pdf` and `build/*.zip`. The
   `.gitignore` in `build/` already lists `build/*.pdf`; it was never effective
   because the files had been added before it existed and `git add -A` keeps
   updating tracked files regardless.
2. Publish them as **GitHub Release assets** instead — free, 2 GiB a file,
   1000 files a release, no bandwidth charge, and not part of git history.
3. Keep committing everything that *is* source: `units/*.md`, `keys/*.md`,
   `content/*/u*_figures.py`, `figures/**` (the PNG/JSON/SVG the checks read),
   `spec/`, `ledgers/`, `tools/`, the reports and the plans.
4. Leave the existing history alone. Rewriting it would need a force-push over
   every commit of this project, and the gain is disk we are not short of.
   Stopping the growth is the whole win.

`DOWNLOADS.md` then points at Release assets rather than `raw` links, and stays
one click.

---

## 8. Spec changes

### `spec/golden.yaml`

```yaml
unit:
  figures: 4            # UNCHANGED - this is the source's own count, a measurement
  caption_words:        # NEW
    target: 558
    min: 480
    max: 620

figures:
  per_unit: 41                      # was 14
  source_per_unit: 4                # UNCHANGED
  px_width: 1440                    # -> px_width_by_class (NEW)
  px_width_by_class:                # NEW
    in_flow: 1440
    full_page: 2480
  px_height:                        # -> px_height_by_class (NEW)
    in_flow: {min: 320, max: 980}   # max was 880; the new box allows taller
    full_page: {min: 3508, max: 3508}
  max_bytes: 98304                  # -> max_bytes_by_class (NEW)
  max_bytes_by_class:
    in_flow: 98304
    full_page: 786432               # 768 KB; measured covers are 155-395 KB
  min_glyph_pt: 6.19                # NEW, replaces min_glyph_px: 22
  max_empty_band_fraction: 0.08     # -> by class (NEW)
  max_empty_band_fraction_by_class:
    in_flow: 0.08
    full_page: 0.22                 # a portrait page has margin by design
  box_default: {w: 6.268, h: 3.100} # was 5.625 x 1.979
  box_full_page: {w: 8.268, h: 11.693}   # NEW
  full_page_slots: [1]              # NEW
  full_page_covers: [front, back]   # NEW
  label_me_slot: 8                  # was 4
  category_set_slot: 7              # was 3
  process_strip_slot: 23            # was 9
  no_figure_subs:                   # NEW - the two deliberate exceptions
    p2f: "open prompt; the Focus Box figure already carries the content"
    p8c: "sentence frames only; the content is whatever the pair brings"
  slots:                            # all 41 rewritten, per the table in §4
    1:  {part: Unit,    job: unit_opener_page, class: full_page, feeds: orientation}
    2:  {part: Warm Up, job: word_grid,  sub: w1, feeds: matching}
    ...
    41: {part: Part 10, job: glossary_grid, sub: p10c, feeds: glossary}
```

### `spec/typography.yaml`

```yaml
figure_placement:
  render_px_width: 1440             # -> by class
  box_in: {w: 5.625, h: 1.979...}   # -> 6.268 x 3.100
  fit: contain                      # -> contain for in_flow, fill_trim for full_page
  full_page:                        # NEW
    box_in: {w: 8.268, h: 11.693}
    fit: fill_trim
    section_margins_twips: {top: 0, right: 0, bottom: 0, left: 0}
    alone_on_page: true

departures:
  pages_per_unit:   {min: 30, max: 42}
  pages_per_volume: {min: 420, max: 560}
  # NEW, and the reason recorded:
  visual_density: "a figure on every sub-section except p2f and p8c; covers and
    unit openers full-page. Requested 2026-10-08: 'the front cover and back
    covers and first image of each unit must fill a page and every other
    exercise or so must have a pedagogically useful diagram or image or visual'."
```

`spec/palette.yaml` — **unchanged.** The closed 12-colour palette holds. All new
art uses it, and `G09` keeps the 1.5% off-palette ceiling.

**After any edit, re-hash or `K01` goes red:**
```
python3 -c "import hashlib;open('spec/golden.sha256','w').write(hashlib.sha256(open('spec/golden.yaml','rb').read()).hexdigest()+chr(10))"
```

---

## 9. Check changes — 13 modified, 8 new, 1 latent defect fixed

### 9a. The latent defect, fixed first

**`J15` — "Page count per volume within the planned envelope" — has never
executed.** It reads `ctx.pdf_for(None)`, which resolves to
`build/a21-book.pdf`. `build_book.py` has never written that name; it writes
`EFDL-A2.1-EverydayLife-u01-10.pdf`. The check has silently skipped on every run
of this project — it is the "1 skip" in both volumes' reports.

And if it ran today it would **fail**: the declared envelope is 230–380 pages
and the volumes are 386 and 396.

Fix `Ctx.pdf_for(None)` to resolve the real `EFDL-*` book name, then raise the
envelope. This must happen **before** the visual work, not after, because the
visual work moves page counts by ~85 per volume and I will not do that with the
page-count check blindfolded.

### 9b. Modified — 13

| Check | Today | After | Code or spec? |
|---|---|---|---|
| `G01` | per_unit 14 | 41 | spec only |
| `G02` | numbers == slots 1–14 | 1–41 | spec only |
| `G03` | slot → part, 14 rows | 41 rows | spec only |
| `G06` | PNG width == 1440 | 1440 in-flow, 2480 full-page | code + spec |
| `G07` | height 320–880 | in-flow 320–980, full-page == 3508 | code + spec |
| `G10` | ≤ 96 KB | 96 KB in-flow, 768 KB full-page | code + spec |
| `G11` | fit(5.625 × 1.979) | fit(6.268 × 3.100); fill_trim for full-page | code + spec |
| `G13` | no glyph < 22 px | **no glyph < 6.19 printed pt** | code + spec |
| `G17` | empty band ≤ 8% | 8% in-flow, 22% full-page | code + spec |
| `G19` | label_me_slot 4 | 8 | spec only |
| `G20` | category_set_slot 3 | 7 | spec only |
| `G21` | process_strip_slot 9 | 23 | spec only |
| `H21` | pages/unit 20–34 | 30–42 | spec only |

`K11` additionally changes behaviour (prose vs total words) per §5.

### 9c. New — 8, taking 230 → 238

| New | Family | What it enforces | Why it must exist |
|---|---|---|---|
| `G25` | Figures | Front and back cover each print at the full A4 trim size in the DOCX, within 1 px | The *only* thing that would have caught today's 1.40 × 1.98 in cover. Nothing in 230 checks looks at a cover's printed size. |
| `G26` | Figures | Every unit opener prints full-page and is alone on its page | Same gap, for the twenty openers. |
| `G27` | Figures | Figure numbers ascend in document order | `G02` only checks the *set* of numbers, not their order. After a 14 → 41 renumber this is the check that proves the migration is right. |
| `G28` | Figures | Every sub-section carries a figure except those in `no_figure_subs` | Makes the §2 commitment mechanical. Without it, "much more visual" is a memory, not a law. |
| `G29` | Figures | Caption words per unit within `unit.caption_words` | Bounds the apparatus growth that §5 opens up. |
| `G30` | Figures | Full-page art is exactly 2480 × 3508 at 300 DPI with no text inside 10 mm of trim | `I12` does this for covers. Openers need it too, or text lands in the printer's cut. |
| `H23` | Typography | No full-page image shares a page with body text | The failure mode of §6 done wrong: a 11.69 in image plus one line of text spills to two pages and leaves a blank. |
| `J17` | Build | Book DOCX and PDF within a declared size envelope | §7 forecasts 20 and 28 MB. A silent jump to 80 MB means something is rendering at the wrong canvas. |

`K15` ("every check has a negative test") makes each of the 8 require a
mutation fixture: **217 → 225**. `K17`/`K18` (every spec clause has a check, every
check has a spec clause) make each require a spec key — listed in §8.

### 9d. Must NOT change — the no-regression register

Everything in this list is at its current value when the work finishes. Each is
already enforced; I am naming them so that "no regression" is checkable rather
than asserted.

**Structure** — 42 sub-sections (`A`), 110 bold headings (`unit.bold_headings`),
11 parts in the golden order (`K06`), 5 audio tracks, CORE/PLUS split.

**Devices** — every count in `golden.devices`, unchanged, `K05` green: 14 seeded
`0.` · 7 "is not needed" · 7 Model — read this first · 5 Before you read ·
5 Check before you finish · 5 Useful language · 4–5 Word bank · 4 Gloss (2–5
items) · 3 Before you listen · 2 Model exchange · 2 Stretch · 1 each Remember /
Watch out! / Harvest / Answer frame / 7A Phrase Bank / Discussion frames /
Pronunciation · 1–2 Plan.

**Prose** — every unit's prose word count, per part and per unit, inside the
*unchanged* source-derived budget. Not one sentence of the 104,078 words is
rewritten for this change. If a figure needs text the unit does not have, the
figure changes, not the unit.

**Language** — all 26 `E` checks at their current thresholds: A2 band coverage,
no sentence over 25 words, nesting depth 2, Flesch-Kincaid ≤ 5.0, the grammar
spine, the 200 glossary words, `of course` as one unit.

**Answer keys** — all 20, every closed item keyed, every open task with marking
points and a sample answer. 60 closed items per unit. `C` and `D` families green.

**MCQ balance** — A25 B25 C25 D25 per volume, chi² 0.00, no letter over 40% in a
unit, no two consecutive the same.

**Palette** — the closed 12 colours, `G09` at 1.5%, `I02` on covers.

**Covers' content** — blurb 120–200 words, unit list, grammar list, can-do
lines, no fabricated ISBN or publisher, `I01`–`I12` green. Only the *placement*
changes.

**Cast and lexis ledgers** — append-only; no fact rewritten.

**Determinism** — `J11` (two runs, identical content hash) and `G23`
(re-rendering is byte-identical) stay green. This constrains the new drawing
code: no time, no randomness, no dict-ordering dependence.

**Mutation suite** — 225 of 225 caught, 0 escaped, 0 broken.

**Both volumes** — 0 failures across all 238 checks.

---

## 10. The renumber migration

14 → 41 slots means every existing figure changes number. 280 PNG/JSON/SVG
triples renamed, 280 captions rewritten, 20 `uNN_figures.py` dicts rekeyed.

Done by hand this is where the drift would come from. So it is a script:
`tools/renumber_figures.py`, with the old → new map as a literal table.

```
old -> new   job
  1  ->  1   unit_opener_page (redrawn)
  2  ->  4   scene
  3  ->  7   category_set
  4  ->  8   label_me
  5  -> 12   grammar_contrast
  6  -> 13   timeline
  7  -> 16   speakers
  8  -> 21   cue_cards
  9  -> 23   process_strip
 10  -> 25   world_strip
 11  -> 26   writing_frame
 12  -> 30   function_map
 13  -> 35   before_after
 14  -> 40   progress_strip
```

The script, in one pass per unit:
1. Rewrite `*Figure N.old · …*` → `*Figure N.new · …*` in `units/aXX-uNN.md`.
2. Rekey the `FIGURES` dict in `content/aXX/uNN_figures.py`.
3. Rename `figures/aXX/uNN-old.{png,json,svg}` → `uNN-new.*`, **via a temporary
   name**, because the map is not monotonic at the ends and a naive rename
   would clobber (`2 → 4` while `4 → 8`).
4. Assert afterwards: 14 captions still present, numbers all distinct, and
   document order ascending.

Verified by `G02` (the set), `G03` (slot → part), and the new `G27`
(document order). Run on one unit first, diffed by eye, before the other 19.

---

## 11. Order of work

Eight phases. Each ends with both volumes at 0 failures, committed and pushed.
Nothing proceeds on a red tree.

| Phase | What | Deliverable |
|---|---|---|
| **0** | Fix `J15` so it finds the real book PDF. Confirm it now fails at 386/396 against 230–380. Raise the envelope to the *current* truth (380 → 400) so it passes honestly. **This is a bug fix, shipped on its own.** | Both volumes green with `J15` actually executing, for the first time in the project. |
| **1** | Geometry only. New `box_default` 6.268 × 3.100. Full-page sections in `build_docx.py`. Covers full-page. `G06`/`G07`/`G10`/`G11`/`G13`/`G17` made class-aware. New `G25`, `H23`, `J17` + fixtures. | **Covers fill a page. Every existing figure 11% wider and un-squashed.** No new art. Visible win on day one, ~0 pages added. |
| **2** | The 20 full-page unit openers: `unit_opener_page` job, portrait 2480 × 3508. New `G26`, `G30` + fixtures. | **Every unit opens on a full page.** |
| **3** | The renumber migration (§10). New `G27` + fixture. Spec `slots` rewritten to 41 with 27 declared-absent. `G01` stays at 14 until phase 5 — the slot table carries 41 but `per_unit` lags so the tree stays green. | 280 figures renumbered, zero content change, both volumes green. |
| **4** | Word-budget split (§5): `caption_words`, prose-vs-total in `K11`, `E02` extended to captions. New `G29` + fixture. | Headroom for 27 new captions a unit, with the prose budget untouched. |
| **5** | Build the 16 new figure jobs in `tools/figures.py`, plus the icons each needs, against **Unit 1 only**. Drive Unit 1 to 41 figures and 0 failures. `G01` → 41 and `G28` added, both scoped to u01 first. | **One finished unit at full visual density**, as the reference every other unit is measured against. Reviewable before 19 more units of work. |
| **6** | Units 2–10, one at a time, each to 0 failures. Rebuild A2.1. | A2.1 complete and visual. |
| **7** | Units 11–20, same. Rebuild A2.2. Rebuild both answer keys, covers, reports, the ZIP, `DOWNLOADS.md`. Resolve the 100 MB bundle question per §7. | **Both volumes complete.** 820 figures, 238 checks, 0 failures. |

**Phase 5 is the approval gate I most want.** One unit at 41 figures is the
cheapest possible way to find out whether 41 is right, and whether the new
figure jobs actually teach. If `sound_shape` or `glossary_grid` turns out to be
a dud, it costs one unit to learn, not twenty.

### Per-unit loop in phases 6–7

Unchanged from the loop that built the course, with figures expanded:

1. `content/aXX/uNN_figures.py` — 41 entries, every label word already in the unit (`G18`).
2. `python3 tools/build_figures.py aXX NN`
3. `python3 tools/runner.py --book aXX` → **0 FAIL**
4. `python3 tools/mutate.py a21` → **225/225 caught, 0 escaped**
5. `python3 tools/targeted.py aXX NN` → N×10 executions, 0 failures
6. `python3 tools/build_docx.py aXX NN && python3 tools/build_book.py aXX`
7. `python3 tools/report.py aXX`
8. Commit and push; deliver the cumulative book, the unit, `RESUME.md`.

---

## 12. Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Word budget** breaks every unit | Certain without the fix | Blocks everything | §5, done as its own phase (4) before any new caption exists |
| **Renumber clobbers files** (`2 → 4` while `4 → 8`) | High if naive | Lost artwork | Two-pass rename via temp names; run on one unit and diff before the rest |
| `G18` rejects new label words (no stemming — `stand` ≠ `stands`) | High; it bit four times building A2.2 | A round of one-word fixes per figure | Copy label text verbatim out of the unit. 27 new figures a unit makes this the top time sink — budget for it |
| `G13` silently loosens at 2480 px | Certain if left in px | Illegible text in the biggest art | Rewrite in printed points, floor 6.19 pt (§6) |
| Full-page image spills to two pages | Medium | Blank page after every cover and opener | `H23` + zero-margin section + no paragraph spacing; proven on one cover in phase 1 |
| ZIP exceeds GitHub's 100 MB | Certain at ~105 MB | Push rejected | §7; decide (a)/(b)/(c) — recommend (c), a Release |
| `G09` off-palette on bigger art | Low | Rework | Palette unchanged; new jobs use the same primitives. Worst current figure is 0.000% |
| `J11`/`G23` determinism broken by new drawing code | Medium | Non-reproducible build | No time, no randomness, no set iteration, no dict-order dependence. Both checks already green and stay in the gate |
| 41 figures reads as wallpaper | Low–medium | Pedagogical regression | Every slot has a stated job (§4); the two decorative candidates are explicitly excluded; phase 5 is the cheap place to find out |
| `G07` in-flow max 880 → 980 hides a genuinely oversized canvas | Low | Mild | The box caps printed height regardless; `G11` still enforces the fit |
| A2.1 regresses while A2.2 is worked on | Medium | Silent drift | `K10` ("no check that passed last build fails now") already guards this, and both volumes run on every phase |

---

## 13. Acceptance criteria

Approved means: when the work is done, every line below is true and
demonstrated by a command, not by assertion.

1. `python3 tools/runner.py` → `a21: 10 unit(s) · 238 checks · 0 FAIL`
2. `python3 tools/runner.py --book a22` → `a22: 10 unit(s) · 238 checks · 0 FAIL`
3. `python3 tools/mutate.py a21` → `225/225 caught · 0 ESCAPED · 0 broken`
4. `python3 tools/targeted.py a21 10` and `a22 20` → 100 and 200 executions, 0 failures
5. `J15` **executes** (no longer skips) and passes
6. Every unit has **41** figures; `G01`, `G02`, `G03`, `G27`, `G28` green
7. Front and back covers of both volumes print at **8.268 × 11.693 in**; `G25` green
8. All 20 unit openers print at **8.268 × 11.693 in**, alone on a page; `G26`, `H23` green
9. **40 of 42** sub-sections carry a figure; the two exceptions are the declared ones; `G28` green
10. Prose word counts per part and per unit inside the **unchanged** source-derived budget
11. Every device count in `K05` unchanged from today
12. MCQ balance still A25 B25 C25 D25, chi² 0.00, per volume
13. 200 glossary words, still unique; all 20 answer keys complete
14. Both books, both answer keys, covers, reports and `DOWNLOADS.md` rebuilt, with one-click links that resolve `200`
15. `RESUME.md` updated: the new figure architecture, the 8 new checks, every defect found, and what a B1 build inherits

---

## 14. Effort, honestly

| Phase | Scope | Rough effort |
|---|---|---|
| 0 | `J15` fix | small |
| 1 | Geometry + full-page covers + 3 checks | medium |
| 2 | 20 portrait openers | medium |
| 3 | Renumber 280 figures | medium |
| 4 | Word-budget split | small–medium |
| 5 | 16 new figure jobs + Unit 1 to 41 figures | **largest single phase** |
| 6 | Units 2–10 | large but repetitive |
| 7 | Units 11–20 + rebuild everything | large but repetitive |

Phases 0–5 are the engineering. Phases 6–7 are 19 units of applying it, at
roughly the pace the original build ran: the figure authoring is the work, and
`G18`'s lack of stemming is the thing that will eat the hours.

---

## 15. What B1 inherits

If this is approved and built, a B1 course starts from a much better place than
A2 did, and the plan for it is shorter because the hard parts are done:

**Inherited as-is** — the 238-check harness; the mutation suite; the closed
palette; the full-page section machinery; all 29 figure jobs and ~60 icons; the
renumber script; the prose-vs-apparatus word model; `build_keys.py`;
`DOWNLOADS.md`; the per-unit loop.

**Needs B1-specific work** — a new golden spec measured from a B1 source (word
budgets, device counts, sub-section count are all level-specific and must be
*measured*, not inherited); the B1 grammar spine; 200 new glossary words chosen
up front (`E26`); a new B1 country list for Part 8, since **all twenty in
`F12`'s list are spent**; a new cast or a declared continuation of this one;
B1-appropriate language thresholds (Flesch-Kincaid ≤ 5.0 and the 25-word
sentence cap are A2 laws and must be re-derived for B1).

The one thing I would carry over as a decision, not a default: whether B1 keeps
the same 42-sub-section, 11-part architecture. A2's came from measuring a real
A2 book. B1's should come from measuring a real B1 book, and if it differs, the
spec differs.

---

## 16. Open questions — the whole list

Four are decisions I cannot make for you. Six are smaller, and I have marked
what I will do if you say nothing.

### Needs your decision

| # | Question | Options | My recommendation |
|---|---|---|---|
| **A** | How many figures per unit? | 28 / **41** / 42 | **41.** It comes from a rule, not a number. |
| **B** | Separate prose from captions in the word budget? | yes / no | **Yes.** Without it the first new figure breaks every unit. It rewrites no prose and makes the current books conform better. |
| **C** | Stop committing build outputs; publish them as Release assets? | yes / no | **Yes.** True whether or not the visual work happens. |
| **D** | Stop after Unit 1 at full density for your review? | yes / no | **Yes.** One unit is the cheapest way to find out if 41 is right. |

### Smaller, with a default if you say nothing

| # | Question | What I will do unless told otherwise |
|---|---|---|
| **E** | Keep producing PDFs? They are half the bulk. | Keep them. Teachers print, and the DOCX is not a reliable print target across Word versions. |
| **F** | Fix the `walk_ons` ledger gap? Unit 3's Japan entry was never recorded, so the ledger lists 19 of 20 Part 8 countries. | Fix it. One line, and the ledger exists precisely so this cannot drift. |
| **G** | B1: same 42-sub-section, 11-part architecture? | **Measure a real B1 book first.** A2's shape came from measuring an A2 book; inheriting it would be the exact drift this project has avoided for twenty units. |
| **H** | B1: new Part 8 countries — all twenty A2 ones are spent. | Propose ten, matched to each B1 unit's grammar and glossary before any unit is written, as was done for A2 units 17–20. |
| **I** | B1: same six characters at 14 Alder Street, or a new cast? | Same cast, two years on, as a declared continuation. The ledger already holds 145 recorded facts about them; a new cast throws that away and a continuity error becomes possible on page one. |
| **J** | B1: same language thresholds? | **No — re-derive them.** Flesch-Kincaid ≤ 5.0 and the 25-word sentence cap are A2 laws. Applying them to B1 would make B1 read like A2, which is the opposite of a level. |

---

## 17. What I need from you

1. **Approve 41 figures per unit**, or pick 28 / 42 from §3.
2. **Approve the word-budget split** in §5 — prose measured against the
   unchanged source budget, captions bounded separately. This is the one change
   that touches how the book is *measured*, and I do not want to make it
   silently.
3. **Decide the bundle question** in §7 — (a) split ZIP, (b) DOCX-only ZIP,
   or (c) GitHub Release. I recommend (c).
4. **Confirm phase 5 is a review gate** — I stop after Unit 1 at full density
   and you look at it before I do the other 19.

Everything else I will take as approved with the plan.

---

## 18. Phase 5 as built — the review gate

Written after the work, not before it, so the plan carries what actually
happened rather than what was forecast.

### Delivered

- Fifteen new figure jobs and eight new icons in `tools/figures.py`.
- `spec/golden.yaml → figures.dense_units / dense_slots / dense_per_unit`:
  **one unit on the 41-slot layout, nineteen still on 14, both green.**
- Unit 1 at **41 figures**, 0 failures, 38 pages (was 25).
- Three new checks — `G29` (the coverage law), `G30` (full-page art is
  2480 × 3508 with nothing inside the 10 mm trim) and `J17` (DOCX/PDF size
  envelope) — each with a mutation fixture and a spec clause. **238 checks.**

### Corrections to this plan, found by measuring

| Section | Said | Is |
|---|---|---|
| §4 | two sub-sections left plain | **four** — the Part 1 and Part 2 rows accounted for six and five where every unit has seven of each. `Part 1: Daily Life — Multiple Choice` and `Part 2: Grammar Review` are both tests of what has just been taught; a picture would cue the answers. All four are in `figures.no_figure_subs` with reasons. |
| §9c | `G28` = caption words, `G29` = coverage, `G30` = full-page trim | built as `G27` = caption words, `G28` = ascending order, `G29` = coverage, `G30` = full-page trim. The names shifted by one when `G25`–`G28` landed in phase 2; the eight checks all exist. |
| §9b `G07` | raise the in-flow height cap to 980 px | **not raised.** Nothing needed it: the tallest new figure is 686 px. A figure over ~712 px prints narrower than the text width anyway, because the fit box solves for whichever side binds. 880 stands. |
| §7 | the page forecast | Unit 1 went 25 → 38 pages, and the volume stayed at **411** — the 13 pages Unit 1 gained were paid for by the caption-page defect below, which cost one page in every unit. |

### A defect this phase found in phase 2's work

**A full-page image's caption printed alone on a page of its own, in all
twenty units.** A full-page image owns a zero-margin section, so the paragraph
after it begins a new section and therefore a new page — and that paragraph
was the caption. `build_docx.preprocess` now drops the printed caption for a
full-page figure. The line stays in the markdown, where every `G` check reads
it, and the same words still reach a screen reader as the image's alt text.
`H12` knows about it. Worth one page a unit.

Not fixed, and recorded as a known cost: the unit title page (title line and
strap, then nothing) cannot share a page with the opener, because a section
break with different margins always starts a new page. Recovering it means
putting the title under the opener, and `A01` requires the title to be line 1.

---

## 19. Phase 6 as built — A2.1 complete

### What changed in how the work is done

Phase 5 produced one dense unit by hand. Nine more by hand would have been 243
figures of transcription, and the two defects Unit 1 shipped with — a word the
unit does not use, and a caption carrying a phrase the device counter watches
for — are both transcription defects. So phase 6 built the tooling first and
the units second:

| Tool | What it removes |
|---|---|
| `tools/figure_source.py` | reading the unit to find each slot's material |
| `tools/gen_figures.py` | writing twenty of the twenty-seven slots, and all 27 captions |
| `tools/icon_map.py` | choosing 400+ icons by hand, and choosing one wrongly |
| `tools/preflight_figures.py` | the render-build-check loop, for everything it can answer in seconds |
| `tools/fix_slots.py` | editing a 400-line module to change one figure |

Seven slots per unit still need a decision a parser cannot make: which phrase
to ring, what the two bins are, which four places the Part 9 reading walks
past, what each branch of the decision costs. Those were written by hand,
against the unit's own text, 63 figures in all.

### The pronunciation slot is four jobs, not one

`00-VISUAL-PLAN.md` section 4 assigned `sound_shape` to slot 6 in every unit.
Measuring the ten sub-sections found they teach four different things:

| Units | Teaches | Job |
|---|---|---|
| 1, 2, 3, 4 | syllable stress (`rou-TINE`) | `sound_shape` |
| 5 | the three sounds of `-ed` | `sound_groups` (new) |
| 6, 7 | a changed form (`go → went`) | `function_map` |
| 8, 9, 10 | where the beat falls in a phrase | `annotated_lines` |

`figure_source.pron_kind` classifies the section and the generator picks the
job. One job drawn over all four would have been decoration in six units.

### Defects found by building nine more units

- **`fit_lines` gave up after two lines and returned one over-wide line.** A
  discussion question ran off the canvas and across its neighbour's label. It
  wraps to as many lines as the caller allows now, and falls back to wrapping
  at the floor size rather than overflowing. Too tall is a layout problem a
  caller can see; too wide is a silent collision.
- **`writing_frame` set its step label at a fixed 30 px** and ran into the
  example column as soon as a step was called something longer than "Offer
  help". It fits the label now.
- **`sort_bins` could not take three bins** without running the third off the
  canvas; four units need three or four.
- **`close_scene` hung its icons a fixed 74 px above the ground line**, which
  left the top third of every one empty. `G17` cannot see it, because the band
  is drawn, not blank. The icons fill the band now.
- **`icon()` drew a plain grey disc for an unknown name.** Nothing could see
  it: `G13`, `G14` and `G16` all read the text and the bounds, and a grey
  circle has the right bounds and no text. It raises now.
- **The icon map normalised the label and not its own keys**, so no key
  containing an apostrophe could ever match.

### What A2.1 now is

410 figures across ten units. 155 icons. Every drawn word is a word the unit
uses, checked mechanically rather than by eye.
