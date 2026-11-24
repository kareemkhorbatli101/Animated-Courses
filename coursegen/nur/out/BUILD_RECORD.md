# Build record — English for Nurses, International Edition

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

Measured means, by book: A2.1 10.9 · A2.2 11.3 · B1.1 12.2 · B1.2 12.6 ·
B2.1 17.0 · B2.2 16.8.

## Gates

Twenty-three per-unit and per-book gates, run by `qa.py`, and the series gates
run by `qa.py all`. All pass. Among them:

- twenty vocabulary terms per unit, none repeated anywhere in the series (1,200
  distinct terms across sixty units);
- fifteen figures and twenty-six key lines per unit, exactly;
- the grammar point and AI capability matching the series ladder;
- every Brief Lab diagnosing exactly three fault types, two entries each, drawn
  only from the set permitted at that level;
- true/false items balanced, with the minority answer at least thirty per cent;
- no blank answer key anywhere;
- neutrality and live-political-reference screens;
- the dissent gates: the manager or founder is wrong in 50 of 60 clinics, and
  the sceptic is right in all 60.

### Series gate 19 · the fault ladder across all sixty Brief Labs

| Fault type | Labs |
|---|---|
| unscoped set | 28 |
| unbounded quantity | 28 |
| unstated criterion | 28 |
| ambiguous referent | 28 |
| hidden assumption | 21 |
| undefined done | 21 |
| missing condition | 13 |
| unstated exception | 13 |

Each of the eight appears in at least twelve labs, as the gate requires, and
each lab holds exactly three types.

## Secondary diagnostics

`diag2.py` reports repeated gap-fill stems, duplicated prose, thin AI-point
narrative and over-cap sentences. The series is clean on all four across all
sixty units.

## Figures

918 figures, all generated: hero bar spreads, split comparison panels, data
tables, spec cards and six-word vocabulary plates. No stock art and no external
assets.

## Safety and scope

No dose, no regimen, no diagnostic rule, no grading instruction and no treatment
decision appears anywhere in the series. Clinical decisions are attributed to the
treating clinician. Professional duties are attributed to local law and employer
policy. Grading scales, consent requirements, disclosure rules, scope of practice
and sign-off standards are all stated as governed locally rather than described.
