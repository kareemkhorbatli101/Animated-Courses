# QA report — English for Journalists · International Edition

Three automated suites plus three read-through passes were run against the
fidelity criteria in `../PLAN.md`.

## Automated

| Suite | What it proves |
|---|---|
| `check_parity.py` | 10 units; Warm-Up + 11 Parts + Answer Key each; 78 lettered exercises per unit in the source's exact 9·6·7·10·10·6·7·8·8·7 distribution with the source's exact code sequences; W1–W4 in every warm-up; the source's figure count per unit; 14 word/meaning pairs in every Part 1; every exercise either answered in the key or listed as an open task; unit length within ±12 % of the source unit |
| `check_answers.py` | Every closed, enumerated exercise gets exactly one answer per item (304 exercises checked across the book) |
| `check_content.py` | British spelling; no orphaned bold markup; no empty exercise prompts; every referenced figure exists; every drawn figure is used; Part 1 vocabulary is recycled in Part 10; reading, dialogue, case and warm-up lengths reported per unit |

## Measured against the source

| | Syria Edition | International Edition |
|---|---|---|
| Running words, ten units | 60,020 | 59,630 (−1 %) |
| Lettered exercises | 780 | 780 |
| Warm-up items | 40 | 40 |
| Figure placements | 245 | 245 |
| Unique figures | 91 | 100 |
| Reading A, by unit | 283 · 141 · 317 · 231 · 227 · 210 · 195 · 205 · 214 · 194 | 255 · 145 · 310 · 265 · 252 · 235 · 194 · 207 · 206 · 194 |
| A4 pages | 243 | 226 (−7 %) |

## Read-through passes

1. **Grammar and level.** Every target structure is modelled before it is practised, and
   no unit uses a structure in a text before the unit that teaches it, except as
   deliberate recognition. Sentence length and clause density held at the source's band.
2. **Answer-key correctness.** Every closed answer was re-derived from its exercise.
   Open tasks are listed by code at the foot of each key, as in the source.
3. **Factual accuracy.** Every real-world claim traced to a named organisation and dated:
   the RSF Index and its 180 countries and territories; the CPJ prison census of
   1 December and its published figures (81 · 125 · 145 · 199 · 274 · 361 for
   2000–2024); UNESCO's finding on impunity; the Windhoek Declaration (1991) and
   Windhoek+30 (2021); World Press Freedom Day, named by the UN in 1993 for 3 May;
   the UN Plan of Action (2012); the International Day to End Impunity (2 November);
   the IFJ Global Charter of Ethics (2019). Everything invented — Atlas Wire, its
   staff, Kalina, the river Vara, the crossing and every person in the stories — is
   declared invented in the front matter and again at the end of every unit. No
   invented quotation is attributed to any real person or body, and no real state,
   border or population is characterised.
