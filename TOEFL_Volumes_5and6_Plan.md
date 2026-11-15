# Volumes 5 and 6 — the plan the units are written against

Volume 5 finishes B2. Volume 6 is C1 and is the preparation for the top of
the 2026 band scale. Both carry the five-cycle unit of Volumes 3 and 4:
three everyday cycles and two academic ones, where cycle 4 sets out the
claim a field is built on and cycle 5 is the objection to that claim.

Everything below is a gate before it is a plan. `mku.py` refuses to write a
unit that misses any of it, and gate 9 refuses a volume whose prose does not
match the level on its cover.

## The band the two volumes are for

The 2026 test reports 1 to 6 in half bands, one band a section, and the
overall score is the **average of the four section bands rounded to the
nearest half band**. That arithmetic is why Volume 6 exists in the shape it
does: at the top of the scale the overall band is set by the weakest
section, so a candidate who reads at 6.0 and speaks at 4.5 scores 5.5, and
the only route to 6.0 is four sections at 6.0. Volume 5 targets 5.0–5.5 and
Volume 6 targets 5.5–6.0.

## Per-unit numbers

| | Volume 5 (units 41–50) | Volume 6 (units 51–60) |
|---|---|---|
| level string | `B2` | `C1` |
| r3 passage | 255–300 words | 255–300 words |
| r4 / r5 passages | 346–424 words, ramped across the ten units, ±14 in each | 386–464 words, ramped, ±14 in each |
| l4 / l5 scripts | 276–344 words, ramped | 306–374 words, ramped |
| w5 model | 255–315 words, ramped | 285–350 words, ramped |
| mean sentence, new prose | 27.0–30.5 | 29.0–33.0 |
| nominalisation floor | 6.5% | 7.5% |
| untaught words a block | ≤ 12 | ≤ 12 |
| head words a unit | 14 academic + 16 field | 14 academic + 16 field |

The three ramped rows are the per-unit bands in `check.BX`, which rise linearly
from the first unit of the volume to the last, so that unit 41 joins Volume 4
without a step and unit 60 is the longest reading in the course. The single
figure the plan used to quote was the middle of each ramp, not its ends.

The r3 passage keeps the real test's own length in every volume. The two
academic cycles are what run long, because reading speed is built above the
distance you race.

## Gate 9 windows, which are the specification

| volume | 1k share | beyond 4k | mean sentence | nominalisation |
|---|---|---|---|---|
| Volume 5 | 62.5–65.0% | 21.0–24.0% | 26.0–28.5 | 6.0–7.5% |
| Volume 6 | 59.0–62.0% | 24.0–28.0% | 28.0–31.0 | 7.0–9.0% |

The lesson of Volume 4: the 1k share is mostly function words, so it is
lowered by nominal compression and subject vocabulary, not by swapping
ordinary words for rarer ones. Write the passages compressed from the start.

## Volume 5 — units 41 to 50

| n | title | field | grammar |
|---|---|---|---|
| 41 | Instruments and Measurement | resolution, artefact, drift | Extraposition: it-clauses and end weight |
| 42 | Food, Farming and Soil | yield, tillage, nutrient | Reduced relative and appositive clauses |
| 43 | Infrastructure and Maintenance | asset, backlog, renewal | Marked theme and given-new ordering |
| 44 | Judgement and Bias | heuristic, anchor, overconfidence | Concessive conditionals: even if, whether or not |
| 45 | Translation and Meaning | equivalence, register, idiom | Reporting at a distance: purportedly, is said to |
| 46 | Transport and Movement | congestion, induced demand, modal shift | Correlative and parallel structures |
| 47 | Trials and Regulation | randomise, blinding, endpoint | Ellipsis in comparison and coordination |
| 48 | Water, Scarcity and Rights | aquifer, abstraction, entitlement | Inverted hypothetical past: had it not been for |
| 49 | Taxation and Public Finance | incidence, compliance, exemption | Nominal clauses as subject and complement |
| 50 | Error and Self-Correction in Science | retraction, misconduct, incentive | Attribution and evidentials across a text |

## Volume 6 — units 51 to 60

| n | title | field | grammar |
|---|---|---|---|
| 51 | Quantum Theory and Interpretation | superposition, decoherence, observable | Heavy pre- and postmodification |
| 52 | Constitutional Design | entrenchment, review, federalism | Long-range cohesion and anaphora |
| 53 | Causation in Epidemiology | counterfactual, instrument, bias | Counterfactual reasoning at length |
| 54 | Algorithms, Fairness and Audit | proxy, disparity, threshold | Qualification and scope: only, even, at least |
| 55 | Historiography and Sources | periodisation, teleology, archive | Reported stance and free indirect style |
| 56 | Climate Attribution | forcing, ensemble, attribution | Modal stacking and graded commitment |
| 57 | Vagueness and Meaning | predicate, borderline, threshold case | Scope ambiguity and its repair |
| 58 | Monopoly and Regulation | contestable, rent, remedy | Concessive-contrastive chains |
| 59 | Consciousness and Explanation | qualia, reduction, explanatory gap | Metadiscourse and the shape of an argument |
| 60 | Testing and What a Score Means | construct, validity, washback | The whole repertoire, under time |

## Tests

Volume 5 carries Practice Test 5. Volume 6 carries Practice Test 6 **and
four further timed forms** (`test61` to `test64`), rendered under their own
titles with their own answer keys and audio scripts, because the one thing a
top-band candidate cannot get from a unit is four sections in a row against
a clock. Every one of the six is held to the same 97-item table in
`checktest.py` that Practice Tests 1 to 4 pass.

## What the last unit of the course now says

Unit 40 closed the course when there were four volumes. Unit 60 closes it
now, and unit 40's opener and closing tip point forward to Volume 5 instead.
