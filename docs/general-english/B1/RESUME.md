# B1 — where it stands, and how to work on it

Everything here is reproducible from the repository. If a session ends, a new
one can pick up from this file alone.

## Where it stands: **Phase 4 gate met. One unit of twenty, green.**

| | B1.1 *Looking Back* | B1.2 *Making Yourself Clear* |
|---|---|---|
| Units | 1 of 10 built | 0 of 10 |
| Checks | **251 of 251, 0 FAIL** | not started |
| Prose words, Unit 1 | 7,598 | — |
| Pages, Unit 1 | 37 | — |
| Figures, Unit 1 | 41 | — |
| Covers | built, `I01`–`I12` green | not started |
| Book | `build/EFDL-B1.1-LookingBack-u01-01.docx` | — |

Run `python3 tools/runner.py --book b11` from this directory. It must end
`0 FAIL`. Then run it for A2 as well — see **the shared toolchain** below.

## The three things that make this directory work

**1 · The toolchain is a symlink, not a copy.** `B1/tools -> ../A2/tools`.
Every module resolves its own root as `dirname(dirname(abspath(__file__)))`,
and `abspath` does not resolve symlinks, so the same code reads `A2/` when run
from `A2/` and `B1/` when run from `B1/`, with no path argument anywhere.
Verified: `figures.ROOT` is `.../B1` from here.

**This means a change to anything under `tools/` is a change to A2's
toolchain.** Run both levels' suites and both mutation suites before
committing. `K20` asserts that all 820 A2 figures are byte-identical under the
shared code, and it is cached per process, so it is fast.

`tools/level.py` is the only place a level, a volume title or a built-file
prefix is written down. `tools/lexis.py` resolves the band from the root
directory: `band()` and `above_band()`, named for the role rather than the
level.

**2 · The spec is generated, not written.** `python3 tools/make_b1_spec.py`
derives `spec/golden.yaml` from `../A2/spec/golden.yaml` and applies a named
list of substitutions. That is how structural parity with A2 is a diff rather
than a promise: 42 sub-sections, 110 bold headings, 41 figure slots, 4 declared
plain sub-sections and every device count are identical because they are the
same bytes. **Do not hand-edit `spec/golden.yaml`** — change the generator and
re-run it, which also re-locks `spec/golden.sha256` for `K01`.

`python3 tools/make_b1_ledgers.py` does the same for `ledgers/cast.yaml`
(A2's cast with every age +2 and the A2 age kept in `ages_also`) and writes
`ledgers/grammar.yaml` in full. `ledgers/lexis.yaml` is append-only and is
edited by hand as each unit is written.

**3 · Three level floors, and the check that checks them.** A2's 26 language
checks are all ceilings, and a unit written entirely in A2 language passes
every one. `E27` (own-tier share ≥ 2.2%), `E28` (mean sentence ≥ 12.0 words)
and `E29` (Flesch–Kincaid ≥ 5.5) are the floors, and `L01` asserts that every
one of the twenty A2 units **fails all three**. A floor nothing fails is not a
floor. Unit 1 measures 3.24% / 15.5 / 6.6.

Beware the interaction, which is arithmetic and not opinion:
`FK = 0.39 × mean + 11.8 × syllables − 15.59`. At Unit 1's measured 1.37
syllables a word, the ceilings and floors together leave a mean-sentence
corridor of **12.4 to 16.3 words**. Writing outside it fails two checks at
once, in opposite directions.

## The per-unit loop

```
python3 tools/figure_source.py b11 N --decide     # the slots needing a decision
# write units/b11-uNN.md and keys/b11-uNN-key.md
python3 tools/gen_figures.py  b11 N --captions    # inserts the 27 generated captions
# add the 14 hand-written captions by hand (slots 1 4 7 8 12 13 16 21 23 25 26 30 35 40)
python3 tools/gen_figures.py  b11 N --write       # merges the 27 generated slots
# hand-author the 14, then fix_slots.patch() the ~12 the generator cannot parse
python3 tools/preflight_figures.py b11 N          # seconds, not minutes
python3 tools/build_figures.py b11 N
python3 tools/build_docx.py b11 N
python3 tools/build_book.py b11 ; python3 tools/build_keys.py b11
python3 tools/runner.py --book b11
```

**The captions are inserted into `units/b11-uNN.md` in place.** If you rebuild
the unit markdown from pieces you will lose all 41 of them and `G01`–`G04`
will fail; the unit file is the source of truth once the captions are in.

## What Unit 1 cost, so Unit 2 can be estimated

| | |
|---|---|
| Prose words | 7,598, against a forecast of 6,201 |
| Answer key words | 4,098 |
| Figures | 41, of which 27 generated and 14 hand-authored |
| Figure slots needing a hand decision after generation | 12 |
| New icons needed | 8 (`bulb` `switch` `meter` `cable` `spark` `road` `laptop` `ear`) |
| New `label_me` drawing | 1 (`building_section`) |
| Check failures on the first full run | 27 |
| Of those, spec or toolchain rather than content | 6 |

The 27 first-run failures are worth reading before writing Unit 2: the four
that cost the most time were the mean-sentence corridor above, `E06` markers
from units 2, 3, 5, 13, 15, 16 and 18 leaking into a Unit 1 that may use none
of them, the typographic apostrophe (`E15`/`E17` — write `’` and `“ ”` from the
start), and `H09`, which forbids a fully empty table row, so a sorting task
needs its item in the first cell and `____` in the answer cell.

## What is NOT done

- Units 2–10 and 11–20.
- `G31`, the check for the four new figure jobs (`two_point_timeline`,
  `hypothetical_fork`, `certainty_scale`, `transform_pair`). None of them is
  needed until Unit 3, so neither is the check. The suite is 251 now and 252
  when it lands.
- B1.2: no units, no covers, no `VOL`-level content beyond the title and blurb.
- `release/` and the per-unit single files, which are a Phase 7 job.
- The five open questions in `00-MASTER-PLAN.md` §16.
