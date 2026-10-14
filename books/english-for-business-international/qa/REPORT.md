# QA report — English for Business · International Edition

Three automated suites plus read-through and visual passes were run against the fidelity
criteria in `../PLAN.md`. All pass.

## Automated

| Suite | What it proves |
|---|---|
| `check_parity.py` | 10 units; the source's **53 named task slots** per unit (55 in Unit 10) in the right order; the eleven-banner sequence, with Warm Up and Part 10 in orange and Parts 1–9 in blue; **11 illustrations**, **15 tables**, **10 four-option multiple-choice stems** and **5 audio tracks** per unit; the seven matching tasks in the source's exact shapes (A5/B6 · A7/B8 · A5/B6 · A4/B5 · A5/B6 · A5/B6 · A5/B6); unit length within ±12 % of the source unit |
| `check_texts.py` | Every warm-up reading, extended reading, consolidation reading, decision scenario, dialogue, writing model and glossary measured against the range measured in the source |
| `check_content.py` | British spelling; typographic quotes; every referenced illustration exists; every drawn illustration is used; every matching task declares that one meaning is spare; at least six worked `0.` examples per unit |

## Measured against the source

| | Source | International Edition |
|---|---|---|
| Running words | 59,417 | 57,202 (−4 %) |
| Task slots per unit | 53 (55 in Unit 10) | 53 (55 in Unit 10) |
| Illustrations | 110 | 110 |
| Tables | 150 | 150 |
| Multiple-choice stems | 100 | 100 |
| Audio tracks | 50 | 50 |
| Writing models | 60 | 60 |
| Illustration width | 5.42 in | 5.42 in |
| Illustration height | 2.60–3.38 in (mean 3.00) | 2.82 in, inside the source's band |
| Pages (LibreOffice render) | 194 | 190 (−2 %) |
| Warm-up reading | 181–203 words | 166–225, every unit inside tolerance |
| Part 5 readings | 197–241 / 173–183 | inside range in all ten units |
| Part 8 reading · Part 9 scenario | 197–222 / 176–205 | inside range in all ten units |
| Dialogues (3 + 7B) | 158–196 / 127–157 / 127–150 / 151–168 | inside range in all ten units |
| Writing models | 94–121 words | inside range, six per unit |
| Glossary | 117–157 words | inside range in all ten units |

## The design system, decoded

Rebuilt from the source's OOXML rather than approximated: Calibri throughout; the unit
title at 20 pt in `#1F3864`; the orange `#FF9900` banner for Warm Up and Part 10 and the
blue `#0066CC` banner for Parts 1–9; the two instruction bands (`#FFF9E6` in the warm-up,
`#E6F3FF` elsewhere); the body band `#F8F8F8` for readings, scripts and models and its
wider-indent variant for cards, frames and phrase banks; `#EEF3F9` for glosses, `#FBFBEF`
for word banks and `#FBECEC` for *Watch out!*; the matching tables at 5200 and 9026 twips
on the source's exact grids; and the grammar focus box with its teal `#009688` header.

## Reproduced rather than corrected

The source has three habits that look like slips and are consistent across all ten units.
They are reproduced, because the brief was a structural twin:

1. The grammar focus box has four header cells and three data cells, so the last column
   of each data row runs on into the header's fourth column.
2. The *Watch out!* line repeats its own label: the bold `Watch out!` is followed by text
   beginning `Watch out: …`.
3. Numbered practice items place the answer gap mid-sentence, so a line can break around it.

## Read-through passes

1. **Grammar sequence.** Each unit's grammar appears in its texts only from the unit that
   teaches it onwards; earlier units' grammar is recycled freely, and Unit 10's
   end-of-course review tests five earlier units by name.
2. **Register.** B1.1–B1.2 throughout, at the source's sentence length and density.
3. **The five values** close the course exactly as in the source — accuracy, honesty,
   records, confidentiality, compliance — each given a cross-border edge.
4. **Integrity.** Everything about Blue Door is invented and declared invented; the
   business facts are true; no real company, bank, tax authority or person is given
   invented words or figures; the five cities are settings, never subjects.

## Visual pass

The .docx was rendered to PDF with LibreOffice and sampled page by page across all ten
units: unit heads, warm-ups, matching tables, multiple-choice blocks, the grammar focus
box with its Remember/Watch out!/Gloss stack, listening scripts, speaking cards, writing
models with their check lines, the restaurant track, decision tasks and the Can-Do
checklists. Three illustration defects were found and fixed during the build: panels that
floated in dead space before the templates were made to size their own canvas, a ladder
whose rungs collided with the panel footer, and a comparison bar whose note ran off the
right edge.
