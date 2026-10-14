# QA report — English for Journalists · International Edition · Book 2

Three automated suites plus read-through and visual passes were run against the
fidelity criteria in `../PLAN.md`. All pass.

## Automated

| Suite | What it proves |
|---|---|
| `check_parity.py` | 10 units; Warm-Up (W1–W5) + 11 Parts + Answer Key in each; **98 lettered exercises per unit** in the source's exact 11·8·9·12·12·8·9·10·10·9 distribution, with the source's exact code sequences (A–K, A–H, A–I, A–L, A–L, A–H, A–I, A–J, A–J, A–I); the source's figure count per unit (28, and 29 in Unit 10); 15 vocabulary rows in Unit 1 and 18 in Units 2–10; every exercise either answered in the key or listed as an open task; unit length within ±12 % of the source unit |
| `check_answers.py` | Every closed, enumerated exercise gets exactly one answer per item — 359 exercises checked across the book |
| `check_content.py` | British spelling; no orphaned bold markup; no empty exercise prompts; every referenced figure exists; every drawn figure is used; Part 1 vocabulary recycled in Part 10; reading, dialogue, case and warm-up lengths reported per unit |

## Measured against the source

| | Syria Edition · Book 2 | International Edition · Book 2 |
|---|---|---|
| Running words, ten units | 74,052 | 77,865 (+5 %) |
| Lettered exercises | 980 | 980 |
| Warm-up items | 50 | 50 |
| Figure placements | 283 | 283 |
| Unique figure assets | 111 | 116 |
| Mean figure height on the page | 2.57 in | 2.39 in |
| Figure width | 5.84 in | 5.83 in |
| Pages (LibreOffice render) | 309 | 323 (+4.5 %) |
| Hard page breaks | 103 | 101 |
| Reading A | 288–375 words | 291–341 |
| Reading B | 73–129 words | 94–121 |
| Warm-up story | 91–97 words | 85–103 |
| Ethics cases | 94–138 words | 97–139 |
| Answer key, per unit | 890–1,132 words | 953–1,152 |

The source's page architecture was decoded late and reproduced exactly: a hard page
break before each unit head, before Parts 4–11, before every Answer Key, and in the
front matter. Figure panels were given the source's vertical breathing room (`PAD` in
`build/figures.py`) so that illustrations occupy the same share of the page.

## Read-through passes

1. **Grammar sequence.** No unit uses its own grammar in a text before the unit that
   teaches it, except as deliberate recognition; Book 1's grammar is freely recycled.
2. **Register.** Lower B1 → medium B1 throughout, above Book 1's A2 → lower B1: longer
   sentences, more subordination, at the source's own density.
3. **Section grammar.** MODEL → NOTICE → PRACTISE → PRODUCE in every part, with CHECK in
   Part 7; two readings, two listenings, two writing pieces, two cases, two dialogues.
4. **The source's local variations were reproduced, not normalised:** five tips (not
   four) in Unit 1's Reading B; a four-rung *rumour → fact* ladder instead of a rules
   list in Unit 6; an extra grammar box (time clauses) inside Part 3 of Unit 5; a 29th
   figure and a final-project checklist in Unit 10.
5. **Integrity.** Every real fact is attributable and dated; everything invented is
   declared invented in the front matter and at the end of every unit; no invented
   quotation is attributed to any real person or body; no real state, border or
   population is characterised; every number in the Vara basin is invented and said
   to be.
6. **Both directions.** Each unit's two ethics cases are split between pressure from a
   larger partner and the duty owed to a smaller one — the asymmetry is taught from
   both sides.

## Visual pass

The .docx was rendered to PDF with LibreOffice and sampled page by page: title page,
front matter, unit heads, vocabulary tables, grammar boxes, listening dialogues,
readings, ethics cases, digital posts, review pages, assignment templates and answer
keys. Three figure defects were found and fixed — a ladder whose rungs collided with
its own footer, a comparison bar whose note ran off the right edge, and panels whose
content sat flush to the title bar.
