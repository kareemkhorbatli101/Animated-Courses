# Build record — English for the Oil and Gas Industries (Syrian Edition)

Built 26 November 2026.

## Totals

| | |
|---|---|
| Books | 6 |
| Units | 60 |
| Words | 380,660 |
| Figures | 918 (153 per book: 150 unit, 2 cover, 1 cast) |
| Answer-key lines | 1,560 (260 per book) |
| Printed pages | 1,220 |
| Vocabulary terms | 1,200, none repeated anywhere in the series |
| Grammar points | 60 distinct |
| AI capabilities | 60 distinct, each with a boundary line |
| Brief Labs | 60, each exactly 3 fault types × 2 entries |
| Decision Rooms | 60, each with the manager wrong and the sceptic right |
| Stop the Job repairs | 60 |

## Per-book build

| Book | Words | Figures | Key lines | Mean sentence | Over cap | Pages |
|---|---|---|---|---|---|---|
| 1 · A2.1 The First Day on Site | 58,590 | 153 | 260 | 10.87 | 1.7% | 196 |
| 2 · A2.2 The Permit, the Shift and the Logbook | 59,610 | 153 | 260 | 11.77 | 2.8% | 197 |
| 3 · B1.1 Saying It Before Something Happens | 64,168 | 153 | 260 | 14.28 | 0.2% | 207 |
| 4 · B1.2 Reports, Contracts and Contractors | 62,913 | 153 | 260 | 14.63 | 0.3% | 205 |
| 5 · B2.1 When Something Goes Wrong | 66,531 | 153 | 260 | 16.53 | 0.2% | 207 |
| 6 · B2.2 The Company, the Ministry and the People Next Door | 68,848 | 153 | 260 | 15.97 | 0.0% | 208 |

## Quality gates

Twenty-three gates per book, plus two series gates, all passing with no
warnings on the final run.

1. Structure — units, figures, words, prose per unit, part bands, titles
   against the series definition
2. Answer-key integrity — graded items, broken gaps, open items, headings,
   blocks per part
3. Multiple-choice integrity — invalid options, key distribution
4. True/false balance
5. Vocabulary — terms per book, repeats inside the book, exercise targets
   inside the unit table, figure labels taught, terms taught in an earlier book
6. Classify task validity
7. Figure numbering and captions
8. Case clinic structure — five stages, three voices, decision bank
9. Register and density — mean sentence length inside the level band,
   sentences over cap, reading words per unit
10. Dialogue and task parity
11. Data points sourced — every data box carries a source line
12. Continuity and names — role conflicts, cast coverage, invented-name
    variants, live political references, real company names, flagged terms
13. Grammar and skill ladder against the series definition
14. Redundancy scan — distinct gap stems, stems used more than twice,
    duplicated prose
15. Precision of the model answers — no unquantified vagueness in any of the
    twenty model texts per book
16. No product, model or platform named
17. No capability forecast
18. Brief Lab integrity — exactly three fault types per lab, two entries each
19. Fault ladder — no fault used before it is introduced
20. AI ladder — points in order, each carried by the extension reading, the
    skill page and the narrative
21. Boundary line on every capability
22. Dissent — dialogues ending on an open objection, clinics where the manager
    was wrong and the sceptic right
23. Stop the Job — every repair complete, no repair phrase reused more than twice

**Series gate 19 · the fault ladder across sixty labs**

| Fault | Labs (of 60) |
|---|---|
| unscoped set | 29 |
| unstated criterion | 29 |
| unbounded quantity | 27 |
| undefined done | 23 |
| ambiguous referent | 22 |
| missing condition | 22 |
| hidden assumption | 15 |
| unstated exception | 13 |

Threshold: each fault in at least 12 labs.

**Series gate 22 · dissent across sixty clinics**

| | Found | Needed |
|---|---|---|
| Manager or founder wrong | 60 | 20 |
| Sceptic right, plan dropped | 60 | 12 |

## How it was built

Sources are a field-parameterised Python generator. `series.py` holds the
series definition — the field, the edition, the cast, the world, the six book
definitions with their unit titles, the sixty-point grammar ladder, the
sixty-point AI ladder, the register bands, the sentence caps and the per-book
fault allow-lists. Each of the sixty units is a single Python module under
`units/<CODE>/uNN.py` holding that unit's complete content as data.

The harness files (`align.py art.py build.py check.py diag2.py figs.py
fixcase.py free.py fulltext.py make.py mcqfix.py one.py qa.py render.py
resent.py`) are shared with the other series in `coursegen/` and were used
unchanged.

Build sequence per book:

```
python3 check.py <CODE> uNN     # per-unit structural check as each unit is written
python3 fixcase.py <CODE>       # casing normalisation
python3 mcqfix.py <CODE>        # multiple-choice key distribution
python3 make.py <CODE>          # render the .docx
python3 qa.py <CODE>            # 23 gates
python3 diag2.py <CODE>         # stem, thin-point and long-sentence diagnostics
```

Then across the series:

```
python3 qa.py all               # 23 gates per book + series gates 19 and 22
python3 align.py                # ALIGNMENT.md
python3 fulltext.py <CODE>      # Markdown full text per book
soffice --headless --convert-to pdf   # one book at a time
```

## Repairs made during the build

- Book 1: a vocabulary gloss tripped the neutrality stoplist and was rewritten;
  the extension readings of all ten units were re-cut to bring over-cap
  sentences from 7.8% to 1.7%; one repeated gap stem differentiated; one thin
  AI point strengthened in the narrative.
- Book 2: a vocabulary exercise target moved inside the unit table; one gloss
  rewritten for neutrality; one sentence rewritten to remove a capability
  forecast; two gap stems differentiated; one vocabulary term renamed after a
  clash with Book 1.
- Book 3: one model answer rewritten to remove an unquantified quantity; one
  thin AI point strengthened.
- Book 4: the series invented-name allow list extended with possessive forms,
  which fixed the failure at source for Books 4 to 6; one unit title's
  vocabulary term renamed after a clash with Book 1; one syntax repair.
- Book 5: two vocabulary terms renamed after clashes; one historical period
  rephrased to clear the capability-forecast gate; five gap stems
  differentiated; one unit's register lengthened to sit inside the B2 band.
- Book 6: Unit 1's grammar point and AI capability realigned to the series
  ladder; four vocabulary terms renamed after clashes; one model answer
  rewritten to remove an unquantified quantity; fourteen repeated gap stems
  differentiated.

Final run: all 23 gates on all six books and both series gates pass with no
warnings.
