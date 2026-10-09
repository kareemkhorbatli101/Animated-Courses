# B1 — where it stands, and how to work on it

Everything here is reproducible from the repository. If a session ends, a new
one can pick up from this file alone.

## 2026-10-09, later — the suite is 269, and the prose was the third rejection

The unit was rebuilt as nine situations, went green at 263, and came back a third
time: *"Your conversations and reading passages make me feel stupid. They are
vague, non-conventional, lacking focus."*

Said of a unit at a 14.8-word mean sentence and a 6.0 reading grade, every word
inside the B1 band. **A sentence can be twelve words of easy vocabulary and still
never state its point.** Readability arithmetic measures the shape of a sentence
and is blind to whether it says anything.

**Family N, six checks** (`ledgers/clarity.yaml` holds the hand-maintained half):
an explanation's paragraphs must open on a sentence that states their subject and
close on the same subject; every paragraph after the first must be signposted; every
open answer must be findable in the passage; no blocklisted construction; and in a
dialogue every question must be answered by the next turn, with no turn over 55
words. `N01` and `N04` take **exposition only** — a story paragraph is allowed to
move, and holding narrative to a topic-sentence rule would make the stories worse.

**What it cannot do, stated so nobody assumes otherwise:** it cannot tell you a
sentence is vague. It catches the structural half of that, which is most of what
"makes me feel stupid" means in practice.

**Two bugs this found, and only the mutation suite saw one of them.** Family N's own
kind-resolution took the first matching heading regex, so all three Part 3 subs read
as `script_tfng` and all three Part 5 subs as `text_mcq`; `N03` covered one
sub-section of the three it was written for and the green run said nothing. Resolve
by position — the spec lists subs in document order. And `ledgers/grammar.yaml` gave
Unit 15 the marker `(place|street|town|year|day)\s+(where|when)`, which fires on
*I was crossing town when it died* — Unit 1's own target structure, not a relative
adverb. Unit 15 teaches non-defining relatives, so the `when` half now wants a comma.

**If you are writing Unit 2:** decide before you start whether each passage is an
explanation or a story, and write it as that. An explanation states its point and
numbers its reasons. A story runs on time markers. Do not write the register this
author reaches for by default, which is magazine prose — elliptical, ironic,
thesis-by-implication. Family N catches the structure of it and nothing catches
the rest.

## 2026-10-09 — Unit 1 was green at 251 and was rejected. Read this first.

The first Unit 1 passed every check in the suite and came back in four words:
*it has one subject.* It did. Thirty-seven of its forty-two sub-sections were
about the same power cut, a quarter of its icons restated their own captions,
and its opening listening had a man standing still for twenty minutes in a dark
stairwell while the same script said somebody walked past him holding out a lit
phone.

**The structural suite could not see any of that, and never could.** Families
A–L compare a unit with a *shape*; monotony and implausibility are properties of
*content*. So content got a shape of its own:

* `ledgers/situations.yaml` — the content law, declared per unit. A unit is a
  **theme** carrying **seven to nine distinct situations**; the grammar point is
  the thread, and it is the grammar that repeats, never the situation. All twenty
  units are designed in that file; Unit 1 is built against it.
* **Family M, ten checks.** Every sub-section attributed; ≥7 situations each
  owning one outright; none over 7 sub-sections or 25% of attributions; ≥5
  settings; every theme-level section drawing on ≥2 situations that are *in its
  text*; every situation declaring the obvious objection and its answer; a
  blocklist of four premises; nobody in more than 60% of the situations; and
  `M10`, which fails unless the law would have rejected the superseded unit —
  kept at `spec/fixtures/b11-u01-v1.md` for exactly that.
* **`G34` and `G35`.** An icon must be licensed by its own label, and a
  contrast figure must contrast. Both gated on `golden.figures.depictive_icons`,
  set at B1 and not at A2 (plan §6a records the measurement: 332 of A2's 1,354
  pairs would fail `G34`, and A2 is not retrofitted).

Unit 1 was then rebuilt whole as *The Afternoon Everything Happened at Once* —
nine situations, nine settings, no one of them more than a seventh of the unit.

**If you are writing Unit 2, start from `ledgers/situations.yaml`, not from the
markdown.** Declare the theme and its strands first, with `obvious_out` and
`why_not` for each, then write the unit against the declaration. Doing it the
other way round means writing the unit twice; that is what happened here.

## Where it stands: **Phase 4 gate met. One unit of twenty, green.**

| | B1.1 *Looking Back* | B1.2 *Making Yourself Clear* |
|---|---|---|
| Units | 1 of 10 built | 0 of 10 |
| Checks | **269 of 269, 0 FAIL** · mutations **22/22** | not started |
| Prose words, Unit 1 | 7,993 | — |
| Pages, Unit 1 | 37 | — |
| Figures, Unit 1 | 41, every icon licensed by its label | — |
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
floor. Unit 1 measures 2.75% / 14.6 / 6.0.

**Leave margin on the floors.** The rebuild first landed at a 13.5-word mean and
**FK 5.55** — green, with five hundredths above a floor of 5.5, which is one
editorial tidy-up away from turning the book red. Eighteen sentence joins took it
to 14.8 and 5.99. A check that passes by 0.05 has not really been satisfied.

Beware the interaction, which is arithmetic and not opinion:
`FK = 0.39 × mean + 11.8 × syllables − 15.59`. At Unit 1's measured 1.37
syllables a word, the ceilings and floors together leave a mean-sentence
corridor of **12.4 to 16.3 words**. Writing outside it fails two checks at
once, in opposite directions.

## The per-unit loop

```
# FIRST: add the unit's entry to ledgers/situations.yaml -- theme, strands,
# obvious_out, why_not, probes, and which sub-section each strand owns.
python3 tools/figure_source.py b11 N --decide     # the slots needing a decision
# write units/b11-uNN.md and keys/b11-uNN-key.md against that declaration
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
| Prose words | 7,874 (v1: 7,598), against a forecast of 6,201 |
| Answer key words | 4,689 |
| Figures | 41, of which 27 generated and 14 hand-authored |
| Figure slots needing a hand decision after generation | 12 |
| New icons needed | 8 for v1, then 2 more for the rebuild (`van`, `cat`) and 48 icon-map entries |
| New `label_me` drawing | 1 (`building_section`) |
| Check failures on the first full run | 27 (v1) · 29 (the rebuild) |
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
  needed until Unit 3, so neither is the check. The suite is 269 now and 270
  when it lands.
- B1.2: no units, no covers, no `VOL`-level content beyond the title and blurb.
- `release/` and the per-unit single files, which are a Phase 7 job.
- Units 2–20 have a theme and named strands in `ledgers/situations.yaml`, but
  only Unit 1 carries the full realism detail. `M06` demands it of any unit
  marked `built: true`, so it is written as each unit is written.
- A2's 332 icons that `G34` would reject. The law applies forward; the plan
  (§6a) carries the measurement and what reversing that decision would cost.
- The six open questions in `00-MASTER-PLAN.md` §17.
