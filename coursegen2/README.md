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
