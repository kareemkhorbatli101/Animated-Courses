# Build record — English for Hospital Management, International Edition

## Method

A field-parameterised generator. `series.py` holds every series constant: the six
books, their levels and titles, the sixty unit titles, the sixty grammar points,
the sixty AI capabilities, the cast, the invented sites, the CEFR bands and the
fault ladder. `build.py`, `render.py`, `art.py` and `figs.py` turn a unit's data
dictionary into Word XML with generated figures. Each unit is a single Python
file of about seven hundred lines holding nothing but content.

## Calibration

CEFR level is measured rather than asserted. Each unit is checked against:

| Band | Mean sentence length | Sentence cap | Words |
|---|---|---|---|
| A2 | 8.5 – 12.5 | 26 | 3,500 – 4,700 |
| B1 | 11.5 – 16.5 | 34 | 4,000 – 5,200 |
| B2 | 15.0 – 21.0 | 44 | 4,400 – 5,600 |

Measured means, by book: A2.1 10.04 · A2.2 11.50 · B1.1 13.54 · B1.2 12.54 ·
B2.1 15.86 · B2.2 15.49. Every book sits inside its band.

## Gates

Twenty-three per-unit and per-book gates, run by `qa.py`, and the series gates
run by `qa.py all`. All pass. Among them:

- twenty vocabulary terms per unit, none repeated anywhere in the series (1,200
  distinct terms across sixty units);
- fifteen figures and twenty-six key lines per unit, exactly;
- the grammar point and AI capability matching the series ladder;
- every Brief Lab diagnosing exactly three fault types, two entries each, drawn
  only from the set permitted at that level;
- every Brief Lab cost line carrying a figure and a period;
- true/false items balanced, with the minority answer at least thirty per cent;
- no blank answer key anywhere;
- neutrality, capability-forecast and live-political-reference screens;
- the dissent gates: the manager is wrong in 56 of 60 clinics, and the sceptic is
  right in all 60.

### Series gate 19 · the fault ladder across all sixty Brief Labs

| Fault type | Labs |
|---|---|
| unscoped set | 35 |
| unbounded quantity | 35 |
| unstated criterion | 35 |
| undefined done | 23 |
| hidden assumption | 14 |
| missing condition | 13 |
| unstated exception | 13 |
| ambiguous referent | 12 |

Each of the eight appears in at least twelve labs, as the gate requires, and
each lab holds exactly three types, two entries each. The ladder is also
level-gated: A2.1 uses the first three fault types only, A2.2 the first five,
B1.1 the first six, and B1.2 upward all eight.

## Secondary diagnostics

`diag2.py` reports repeated gap-fill stems, duplicated prose, thin AI-point
narrative and over-cap sentences in the taught prose. The series is clean on all
four across all sixty units.

## Figures

918 figures, all generated: hero bar spreads, split comparison panels, data
tables, spec cards and six-word vocabulary plates. No stock art and no external
assets.

## Safety and scope

No dose, no regimen, no diagnostic rule and no treatment decision appears
anywhere in the series. Where a management decision has a clinical consequence —
a cancelled list, a closed bay, a diverted ambulance, a staffing gap on a ward —
the clinical judgement is attributed to a named clinician and the manager's work
is the sentence that records it.

Employment matters (leave, absence, grievance, discipline, redundancy, contracts
of employment), procurement and contract matters, disclosure, consultation,
inspection and regulatory correspondence are all stated as governed by local law
and by the organisation's own policy. The books teach how to write within those
rules, not what the rules are.
