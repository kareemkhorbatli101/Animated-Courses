# English for Quality Assurance Professionals — Student Book (A2)

Two editions, built as exact structural twins of each other:

| edition | setting | file |
| --- | --- | --- |
| **Syrian Edition** | Syria throughout — Damascus, Aleppo, Homs | `books/english-for-qa-syria/dist/EnglishForQA_Syria_StudentBook_A2.docx` |
| **International Edition** | ten non-English-speaking countries, one per unit | `books/english-for-qa-international/dist/EnglishForQA_International_StudentBook_A2.docx` |

Both are new books for a new profession, laid out on the measured design system
of *New English for NGOs and International Organizations — Student Book (A2)*,
so a teacher who knows one book knows the other.

---

## 1 · What the template is

| measure | value |
| ---: | --- |
| Level | A2 |
| Units | 10 |
| Exercises | 41 per unit (Unit 1 has 37 — see §7), 407 in all |
| Parts per unit | Warm Up, then Part 1 Vocabulary, 2 Grammar, 3 Listening, 4 Reading, 5 Speaking, 6 Writing, 7 Culture, 8 Review |
| Appendices | Appendix B — Answer Key (329 heads, 620 answers); Appendix A — Audio Scripts (92 track heads, plus a VBA playback listing) |
| Paragraphs | 7,346, of which 2,300 are blank spacers |
| Elements in reading order | 5,455 |
| Tables | 264, with 953 rows and 2,155 cells |
| Pages | 257 |

Every structural number is matched exactly by both editions. §6 records the
measurements.

---

## 2 · The quality-assurance syllabus

The template's exercise *shapes* are kept; the subject is quality assurance.

| unit | subject | grammar |
| ---: | --- | --- |
| 1 | Introduction to Quality Assurance | present simple |
| 2 | QA Careers and Roles | present perfect |
| 3 | Standards, Codes and Certification Bodies | conditionals, passive, reported speech, modals |
| 4 | Inspection, Sampling and Measurement | modals of ability, gerunds, comparatives |
| 5 | The Quality Management Cycle | sequencing, conditionals, passive, purpose |
| 6 | Working with Suppliers and Customers | cooperation structures, agreement, passive |
| 7 | Food Safety and Laboratory Quality | cause and effect, purpose, concession |
| 8 | Auditing and Performance Measurement | past tense for results, comparison, question forms |
| 9 | Continuous Improvement and Scaling Quality | future forms, conditionals, comparatives |
| 10 | Quality Advocacy and Professional Communication | persuasive language, conditionals, argument |

The vocabulary load is the template's in weight and the profession's in content:
specification, tolerance, nonconformity, calibration, batch, traceability, audit,
accreditation, validation, critical control point, sampling plan, first-pass
yield, corrective action, root cause, proficiency testing, handover, indicator,
roll-out, standardisation, committee.

---

## 3 · The two settings

The **Syrian Edition** is set in Syria throughout. Its spine is proving that
what the country makes is safe: olive oil, pistachios, canned vegetables and
bottled water for export; pharmaceuticals for the domestic market and the
region; Aleppo soap made to a recipe kept for centuries; and, since the
conflict, the re-qualification of production lines that were damaged or moved.
Its institutions are the Syrian Arab Standards and Metrology Organization and
the accredited laboratories that work alongside the national metrology service.
Its constraints are real ones: reagents and reference materials that are hard to
import, power that stops mid-test, and accreditation that is expensive to keep.

The **International Edition** moves each unit to a different country, keeping
every element in place:

| unit | country | standards body | local matter |
| ---: | --- | --- | --- |
| 1 | **Vietnam** | Directorate for Standards, Metrology and Quality | coffee, cashew, canned fruit; Phú Quốc fish sauce; qualifying new export lines |
| 2 | **Türkiye** | Turkish Standards Institution | olive oil and canned vegetables for the EU; analysts returning from abroad |
| 3 | **Mexico** | General Directorate of Standards | overlapping export schemes; residue limits on dried chillies |
| 4 | **Morocco** | Moroccan Institute for Standardization | olive pressing, argan kernel drying, canning lines |
| 5 | **Indonesia** | National Standardization Agency | halal verification, prayer times, craft mastery, transport between islands |
| 6 | **Brazil** | National Institute of Metrology, Quality and Technology | *dignidade*; the consumer code's duty to declare a defect; a highland coffee cooperative |
| 7 | **Egypt** | Egyptian Organization for Standardization and Quality | *amanah*; household preservation; a factory laboratory serving the line |
| 8 | **Thailand** | Thai Industrial Standards Institute | royal inspectors of weights and measures; *khwam pen tham* |
| 9 | **Poland** | Polish Committee for Standardization | *solidarność*; *gospodarność*; roll-out across lines |
| 10 | **Kenya** | Kenya Bureau of Standards | the *baraza*; *haki*; advocacy for calibration budget |

Each unit's institutions, products, processes and cultural terms move with it, so
no unit carries a product its country does not make or a value its culture does
not hold.

---

## 4 · Fidelity criteria

1. The same 5,455 elements in the same reading order.
2. The same 7,346 paragraphs, including all 2,300 blank spacers.
3. The same 264 tables, 953 rows and 2,155 cells.
4. The same 89 part bars with the same fills, including the Part 6/7/8 rotation.
5. The same 137 instruction boxes with the same per-part tints.
6. The same 407 Heading3 exercise titles, each with the source's second,
   undefined `[object Object]` style.
7. The same 171 reading panels and 224 fill-in blanks.
8. The same 92 track heads, 70 audio chips and 132 play notes.
9. The same 620 answers under the same 329 heads, numbered to the same
   exercises and titled from each unit's own exercise list.
10. The same voice colouring: 65 female-voice and 506 male-voice paragraphs.
11. The same 120 🔊 and 36 📝.
12. Answer-key density within a few per cent of the template's 25,758 words.
13. No answer more than eight words shorter than its counterpart.
14. Every transcript printed twice — inside its unit and in Appendix A — printed
    identically in both places.
15. The same page count in both editions, and every section opening on the same
    page.
16. The two editions identical on every one of the above.

---

## 5 · Build

```
python3 build/compile.py                      # content/*.txt -> dist/…_A2.docx
QA_SRC=<template.docx> python3 qa/check.py    # 30 structural metrics
python3 qa/spacing.py  <template.docx>        # every element's full layout
python3 qa/runs.py     <template.docx>        # run structure, run by run
python3 qa/answers.py  <template.docx>        # per-answer parity in Appendix B
python3 qa/partial.py  <template.docx>        # progressive parity while writing
python3 qa/unitdiff.py <template.docx>        # unit-by-unit element counts
python3 qa/scripts.py                         # Appendix A against each unit's own transcripts
python3 qa/outline.py  <doc>                  # dump any document in reading order
```

`QA_SRC` may be the NGO A2 template or the other QA edition; both comparisons
pass.

---

## 6 · Verification

| pass | Syrian Edition | International Edition |
| --- | --- | --- |
| 30 structural metrics vs the template | all identical | all identical |
| full layout, element by element | 5,455/5,455, **0 differ** | 5,455/5,455, **0 differ** |
| run formatting (text lengths ignored) | **0 differ** | **0 differ** |
| answers more than 8 words short | **0** of 620 | **0** of 620 |
| answer-key density | 27,219 words vs 25,758 (105.7 %) | 27,229 vs 25,758 (105.7 %) |
| transcripts printed in two places | 18 of 18 identical | 18 of 18 identical |
| LibreOffice render | **252 pages** | **252 pages** |
| package integrity | 10 parts, every XML part well-formed | 10 parts, every XML part well-formed |

### The two editions against each other

| pass | result |
| --- | --- |
| 30 structural metrics | all 30 identical, em dashes included (107 each) |
| full layout, element by element | 5,455 of 5,455, **0 differ** |
| run formatting | **0 differ** |
| answer-key density | 27,229 against 27,219 — **100.0 %** |
| words | 70,071 against 70,064 — **+0.01 %** |
| pages | **252 and 252** |
| section openings in the render | all 487 fall on the identical page |
| per-page line counts | 244 of 252 identical; on 8 pages a paragraph wraps one line further in the International Edition, because country and standards-body names are longer than "Syria" and "SASMO". No page boundary moves. |

---

## 7 · Template quirks reproduced

1. The instruction-box tint rotates out of order in the last three parts: Part 6
   takes Part 8's tint, Part 7 takes Part 6's and Part 8 takes Part 7's, in every
   unit.
2. Unit 1 has no Part 6, and so 37 exercises where every other unit has 41.
3. Unit 2 carries four one-off dialogue elements that appear nowhere else, the
   same narrator text printed twice in two different treatments.
4. Every exercise heading carries a second, undefined `[object Object]`
   paragraph style, which is what makes the headings render as body text.
5. Short multiple choices lay their options out inside the stem paragraph,
   behind fifteen spaces and a line break, instead of as option paragraphs.
6. The answer-key strip sizes its cells from how many answers it carries and
   leaves the unused columns as 26-twip slivers.
7. Speaker voice colours are assigned per track rather than per role, so the
   same job title is blue in one unit and purple in another.
8. `docDefaults` names Times New Roman and leaves `pPrDefault` empty; the single
   list defines nine bullet levels cycling ● ○ ■ as literal characters.

---

## 8 · One deliberate divergence

The template's contents page runs one topic behind its units: Unit 3 is called
"International Organizations" but is about humanitarian crises, Unit 7 is called
"Working with Communities" but is about health and education, and so on through
Unit 10. Reproducing that offset in a new book would mean shipping ten units
whose titles describe the wrong content. Both QA editions therefore name each
unit for what it actually contains. Everything structural is unchanged: the
contents page still has ten entries, each unit still opens with one Heading1,
and all 30 metrics match.

---

## 9 · Where the editions necessarily differ from the template

- **+4,400 words** (70,064 and 70,071 against 65,644), almost all of it in
  Appendix B, where answers were written to the template's per-answer lengths
  and a few run long.
- **107 em dashes against 126** — the template's prose reaches for the dash more
  often than technical description does.
- **252 pages against 257**: with the same elements and the same spacing,
  quality-assurance prose fills its lines slightly more completely than the
  template's. Both editions land on the same 252, which is the number that
  matters.

---

## 10 · Two defects found and fixed during QA

- **Appendix A disagreed with the units.** Eighteen tracks have their transcript
  printed twice — once inside the unit as `@SCRIPT`, once in Appendix A as
  `@SPEECH`. The template prints the identical words in both places; the first
  draft of this book did not, on 40 lines. `qa/scripts.py` now compares the two
  by track number and copies the unit's lines in, and both editions pass with 0
  differences.
- **Eleven answers ran short.** `qa/answers.py` flagged eleven answers in
  Appendix B more than eight words shorter than their counterparts; each was
  extended, and both editions now report 0 of 620 short.
