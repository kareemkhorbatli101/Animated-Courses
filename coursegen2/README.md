# coursegen2 — the second-edition generator

Built for the dental and pharmacy programme. The architecture it implements is
in `../design/`; this directory is the machinery and the series sources.

| File | What it does |
|---|---|
| `art2.py` | illustration engine: leader lines, callouts, label pins, hatching, embedded licensed base art, a greyscale-safe palette |
| `figs2.py` | the figure primitives: tooth section, dentition map with three notations, instrument plate, annotated form, step sequence, contrast panel, morphology builder, set plate, phrase box, chair scene, exchange |
| `build2.py` | one unit → document XML, in the fixed stage order: warm-up, preview, vocabulary, grammar, listening ×3, speaking ×3, reading ×3, writing ×3, extras, review |
| `gates2.py` | the gates: preview, definitions-are-definitions, concept load, production vs reception register, 3×3 genre distinctness, scaffolding, length bands, Tier A sourcing, dissent-by-level, figures |
| `make2.py` | build a student book: `make2.py <series> <CODE> [--units 1,2]` |
| `teacher2.py` | build the teacher's book for the same title |
| `art.py` `render.py` `figs.py` | carried over unchanged from the first-edition harness |

Series sources: `den2/` (English for Dentists, Second Edition — practitioner,
A2.1→B2.2) and `dens/` (English for Dental Students — academic, A2.2→C1.1).
Units are `<series>/units/<CODE>/uNN.py`; their teacher notes are `tNN.py`
beside them. Built documents are not committed.

## The rule the whole thing turns on

A unit is not finished until its teacher notes exist and the defects they
exposed have been fixed. Each `tNN.py` ends with a `defects` list recording
exactly that. Three of the four defects found in the pilot were invisible to
every gate.

## Building

    python3 make2.py den2 A21 --units 1,2      # student book + gates
    python3 teacher2.py den2 A21 --units 1,2   # teacher's book

## The level guard

`levels.py` holds the core word lists by band, an irregular-form map, a closed
academic set for the student series, and a checker that strips affixes and
splits compounds. `gates2.check_level` fails the build on any word above the
book's band that is not taught in the unit, not in the series' `DOMAIN`, and not
on the unit's `allow` list. **The fix is always to paraphrase into the band, up
or down. Never delete the idea to pass the gate.**

## Two visuals per exercise

`build2.run_task` emits an answer bank and a set of picture cards for every
exercise, both generated from the exercise data, so they cannot drift from the
answer key. The shuffle is seeded on the exercise label, so builds are
reproducible. `gates2.check_exercise_figs` fails the build if any exercise has
fewer than two.

## Third round — the page, the case and the glossed teacher's book

This round closed a review that listed five faults and added a third unit to
each pilot book. Full rationale is in `../design/DESIGN.md` §12; what follows is
what changed in the code.

### art2.py
* `pt()` and the named sizes `FS_TITLE/FS_HEAD/FS_BODY/FS_SMALL/FS_NOTE`.
  One SVG unit prints at 0.1505 pt, so a 40-unit label printed at 6 pt against
  11 pt body text. **No figure may set a bare font size any more.**
* `wrap_w()` wraps by measured width; `fit()` shrinks to fit; `block()` returns
  wrapped text and its own height.
* `person()` rewritten: `_arc_cap()` draws hair along an arc concentric with
  the head, and everything that belongs behind the head is drawn first.
* `person_box()` returns a drawn person's extent; `person_card()` is the single
  function every caller uses, so a name can never be printed over a body.
* `bubble2()` sizes itself from its wrapped text and returns its height.

### figs2.py
* `part_recap()` — the closing figure. Grows or compresses to a measured
  `target_h`, capped at one page.
* `case_panel()`, `opinion_line()` — part 9 and its teacher's-book twin.
* `cover2()` rebuilt: the scene is sized from the cast, every string is fitted,
  and the panel absorbs the slack so there is no dead band.
* Every text-bearing primitive re-laid out against measured text.

### build2.py
* `endpart()` is the **only** function that writes a page break, and it always
  emits a closing figure first.
* Part 9 is three cases; `data_box` and `ai_page` are gone.
* `Ctx` carries `fit` (measured targets in) and `recaps` (figure id → key out).

### fitpass.py  /  fitbuild.sh
The page-fitting loop. Pass 0 builds with `--norecap` and measures the room each
part leaves; later passes build, re-measure and correct; the last pass writes
what the printed pages look like for `gates2.check_fit`.

### gates2.py
`check_cases`, `check_recaps`, `check_breaks`, `check_fit` added.

### levels.py
`_forms()` strips affixes to a fixed point. The B1 list, the ACADEMIC set and
the irregular map were completed against three new units.

### render.py
`arun`, `ar_para`, `bilingual`, `gloss_table`, `sample_answer`, `trap` — the
Arabic layer of the teacher's book, set as complex script. `picture()` carries
`w:keepNext`. `pron()` separates its label from its note.

### teacher2.py
Rewritten. Per unit: drawn route, board plan, procedure, bilingual glossary with
Syrian usage, Arabic interference points, expansion list, five engagement
options, a sample answer for every open task, case notes for all three cases
with an opinion-line figure, a marking table, a photocopiable, and the defects
the notes found in the unit.

### Building
    ./fitbuild.sh den2 A21 1,2,3      # student book, fitted to the page
    python3 teacher2.py den2 A21 --units 1,2,3
