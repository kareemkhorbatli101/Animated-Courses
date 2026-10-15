# English for Logistics Management — Student Book (A2) · International Edition

This is the International Edition. Its twin, the Syrian Edition, is in
`books/english-for-logistics-syria/`. The two are exact structural twins — all
30 metrics, all 5,455 elements, the same 252 pages, every one of 816 section
openings on the identical page — and differ only in where each unit is set. The
plan below covers both, and §3 gives this edition's ten countries.

---

# English for Logistics Management — Student Book (A2)

Two editions, built as exact structural twins of each other:

| edition | setting | file |
| --- | --- | --- |
| **Syrian Edition** | Syria throughout — Damascus, Aleppo, Homs, the Latakia and Tartous ports | `books/english-for-logistics-syria/dist/EnglishForLogistics_Syria_StudentBook_A2.docx` |
| **International Edition** | ten non-English-speaking countries, one per unit | `books/english-for-logistics-international/dist/EnglishForLogistics_International_StudentBook_A2.docx` |

Both are new books for a new profession, laid out on the measured design system
of *New English for NGOs and International Organizations — Student Book (A2)*,
so a teacher who knows one book knows the other.

---

## 1 · What the template is

| measure | value |
| ---: | --- |
| Level | A2 |
| Units | 10 |
| Exercises | 41 per unit (Unit 1 has 37 — see §7), 406 in all |
| Parts per unit | Warm Up, then Part 1 Vocabulary, 2 Grammar, 3 Listening, 4 Reading, 5 Speaking, 6 Writing, 7 Culture, 8 Review |
| Appendices | Appendix B — Answer Key (329 heads, 620 answers); Appendix A — Audio Scripts (92 track heads, plus a VBA playback listing) |
| Paragraphs | 7,346, of which 2,300 are blank spacers |
| Elements in reading order | 5,455 |
| Tables | 264, with 953 rows and 2,155 cells |
| Pages | 257 |

Every structural number is matched exactly by both editions. §6 records the
measurements.

---

## 2 · The logistics syllabus

The template's exercise *shapes* are kept; the subject is moving goods.

| unit | subject | grammar |
| ---: | --- | --- |
| 1 | Introduction to Logistics Management | present simple |
| 2 | Logistics Careers and Roles | present perfect |
| 3 | Customs, Documentation and Compliance | conditionals, passive, reported speech, modals |
| 4 | Warehousing, Inventory and Measurement | modals of ability, gerunds, comparatives |
| 5 | The Transport Planning Cycle | sequencing, conditionals, passive, purpose |
| 6 | Working with Carriers and Suppliers | cooperation structures, agreement, passive |
| 7 | Freight Forwarding and Customer Service | cause and effect, purpose, concession |
| 8 | Performance Measurement and Reporting | past tense for results, comparison, question forms |
| 9 | Growth, Change and Scaling the Network | future forms, conditionals, comparatives |
| 10 | Logistics Advocacy and Professional Communication | persuasive language, conditionals, argument |

The vocabulary load is the template's in weight and the profession's in content:
consignment, lead time, transit time, freight rate, bill of lading, packing list,
customs declaration, tariff code, certificate of origin, incoterms, consignee,
forwarder, groupage, pallet, cycle count, stock discrepancy, safety stock,
reorder level, vehicle utilisation, on-time delivery rate.

---

## 3 · The two settings

The **Syrian Edition** is set in Syria throughout. Its spine is keeping goods
moving along roads that were cut: lorries to Beirut, Amman and the Turkish
crossings; cold stores for food, pharmaceuticals and textiles; the Latakia and
Tartous ports; and the old caravan roads through Damascus and Aleppo that the
Hejaz railway once served. Its institutions are the commercial register, the
General Customs Directorate, the General Company for Land Transport and the
chambers of commerce. Its constraints are real ones: fuel that is costly and
scarce, roads and bridges that were damaged, spare parts that cannot be imported,
and long waits at a crossing.

The **International Edition** moves each unit to a different country, keeping
every element in place:

| unit | country | customs / registry | local matter |
| ---: | --- | --- | --- |
| 1 | **Vietnam** | General Department of Customs · national business register | Hải Phòng and Cái Mép, seafood, coffee and garments; the north-south railway; keeping face |
| 2 | **Türkiye** | Turkish Customs Administration · trade registry | linking two continents; queue times; staff returning from abroad |
| 3 | **Mexico** | National Customs Agency · commercial registry | permits at federal and state level; EU and Gulf importers' own rules |
| 4 | **Morocco** | Customs and Indirect Tax Administration · commercial register | summer heat in the cold chain, mountain roads, port charges |
| 5 | **Indonesia** | Directorate General of Customs · business register | shipping between islands, monsoon weeks, prayer times, local language |
| 6 | **Brazil** | Federal Revenue Customs Service · commercial registry | *respeito*; the duty to declare damage; Serra Distribuição and the Mercadão hauliers |
| 7 | **Egypt** | Egyptian Customs Authority · commercial register | *amanah*; the khan as shared responsibility; a furniture haulier outside Damietta |
| 8 | **Thailand** | Thai Customs Department · business register | *sujarit*; the royal inspector of weights and measures; *yutitham* in using findings |
| 9 | **Poland** | National Revenue Administration · National Court Register | *spółdzielczość*; *dziedzictwo*; opening depots across a region |
| 10 | **Kenya** | Kenya Revenue Authority Customs · business register | the *baraza*; *haki*; a campaign to clear the border in three days |

Each unit's institutions, corridors, cargo and cultural terms move with it, so
no unit carries a port its country does not have or a value its culture does not
hold.

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
python3 build/compile.py                       # content/*.txt -> dist/…_A2.docx
LOG_SRC=<template.docx> python3 qa/check.py    # 30 structural metrics
python3 qa/spacing.py  <template.docx>         # every element's full layout
python3 qa/runs.py     <template.docx>         # run structure, run by run
python3 qa/answers.py  <template.docx>         # per-answer parity in Appendix B
python3 qa/partial.py  <template.docx>         # progressive parity while writing
python3 qa/unitdiff.py <src> <cand> <section>  # section-by-section element lists
python3 qa/scripts.py  content                 # Appendix A against each unit's own transcripts
python3 qa/outline.py  <doc>                   # dump any document in reading order
```

`LOG_SRC` may be the NGO A2 template or the other Logistics edition; both
comparisons pass.

---

## 6 · Verification

| pass | Syrian Edition | International Edition |
| --- | --- | --- |
| 30 structural metrics vs the template | all identical | all identical |
| full layout, element by element | 5,455/5,455, **0 differ** | 5,455/5,455, **0 differ** |
| run formatting (text lengths ignored) | **0 differ** | **0 differ** |
| per-section element lists vs the template | **0 diff lines** | **0 diff lines** |
| answers more than 8 words short | **0** of 620 | **0** of 620 |
| answer-key density | 27,294 words vs 25,758 (106.0 %) | 27,296 vs 25,758 (106.0 %) |
| transcripts printed in two places | 18 of 18 identical | 18 of 18 identical |
| DSL skeleton against the other edition | 13 of 13 files, **0 divergences** | 13 of 13 files, **0 divergences** |
| LibreOffice render | **252 pages** | **252 pages** |
| package integrity | 10 parts, every XML part well-formed | 10 parts, every XML part well-formed |

### The two editions against each other

| pass | result |
| --- | --- |
| 30 structural metrics | all 30 identical, em dashes included (106 each) |
| full layout, element by element | 5,455 of 5,455, **0 differ** |
| run formatting | **0 differ** |
| per-section element lists (10 units + 2 appendices) | **0 diff lines** |
| answer-key density | 27,296 against 27,294 — **100.0 %** |
| words | 70,680 against 70,665 — **+0.02 %** |
| pages | **252 and 252** |
| section openings in the render | all **816** fall on the identical page |

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
whose titles describe the wrong content. Both Logistics editions therefore name
each unit for what it actually contains. Everything structural is unchanged: the
contents page still has ten entries, each unit still opens with one Heading1,
and all 30 metrics match.

---

## 9 · Where the editions necessarily differ from the template

- **+5,000 words** (70,665 and 70,680 against 65,644), almost all of it in
  Appendix B, where answers were written to the template's per-answer lengths
  and a few run long.
- **106 em dashes against 126** — the template's prose reaches for the dash more
  often than operational description does.
- **252 pages against 257**: with the same elements and the same spacing,
  logistics prose fills its lines slightly more completely than the template's.
  Both editions land on the same 252, which is the number that matters.

---

## 10 · How the editions were built, and what QA found

The Syrian Edition was written against the Business Managers A2 book as its
structural scaffold: every `@TAG` line and every spacer was held fixed while the
headings, instructions and body lines were rewritten for logistics, so each unit
landed element-exact on the first or second attempt. Two tools enforce that:
`anyline.py` refuses a replacement that would change a line's tag, and
`byline.py` refuses to touch anything that is not a body line.

Three defects were found and fixed:

- **A unit heading numbered one line off.** `anyline.py` caught a replacement
  aimed at an `@INSTR` line that carried an `@EX` title, in Unit 5 and again in
  Unit 10; the line numbers were remapped before anything was written.
- **Appendix A disagreed with the units.** Eighteen tracks have their transcript
  printed twice — once inside the unit as `@SCRIPT`, once in Appendix A as
  `@SPEECH`. `qa/scripts.py` matched the two by track number and copied the
  unit's 40 lines in; both editions now report 0 differences.
- **One answer ran short.** `qa/answers.py` flagged a single answer in Appendix B
  more than eight words shorter than its counterpart; it was extended, and both
  editions now report 0 of 620 short.
