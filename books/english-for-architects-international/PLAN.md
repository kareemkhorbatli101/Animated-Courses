# English for Architects — Student Book (A2) · International Edition

This is the International Edition. Its twin, the Syrian Edition, is in
`books/english-for-architects-syria/`. The two are exact structural twins — all
30 metrics, all 5,455 elements, the same 251 pages — and differ only in where
each unit is set. The plan below covers both, and §3 gives this edition's ten
countries.

---

Two editions, built as exact structural twins of each other:

| edition | setting | file |
| --- | --- | --- |
| **Syrian Edition** | Syria throughout — Damascus, Aleppo, Homs | `books/english-for-architects-syria/dist/EnglishForArchitects_Syria_StudentBook_A2.docx` |
| **International Edition** | ten non-English-speaking countries, one per unit | `books/english-for-architects-international/dist/EnglishForArchitects_International_StudentBook_A2.docx` |

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
| Appendices | Appendix B — Answer Key (329 heads, 620 answers); Appendix A — Audio Scripts (92 tracks, plus a VBA playback listing) |
| Paragraphs | 7,346 |
| Elements in reading order | 5,455 |
| Tables | 264, with 953 rows and 2,155 cells |
| Pages | 251 |

Every one of those numbers is matched exactly by both editions. §6 records the
measurements.

---

## 2 · The architecture syllabus

The template's exercise *shapes* are kept; the subject is architecture.

| unit | subject | grammar |
| ---: | --- | --- |
| 1 | Introduction to Architecture | present simple |
| 2 | Architecture Careers and Roles | present perfect |
| 3 | Standards, Codes and Professional Bodies | conditionals, passive, reported speech, modals |
| 4 | Site Survey and Technical Drawing | modals of ability, gerunds, comparatives |
| 5 | Design Project Basics | sequencing, conditionals, passive, purpose |
| 6 | Working with Clients and Communities | cooperation structures, agreement, passive |
| 7 | Designing for Health and Education | cause and effect, purpose, concession |
| 8 | Evaluating Building Performance | past tense for results, comparison, question forms |
| 9 | Sustainable Design and Practice Growth | future forms, conditionals, comparatives |
| 10 | Advocacy and Professional Communication | persuasive language, conditionals, argument |

The vocabulary load is the template's: plan, section, elevation, scale, brief,
facade, structure, site, permit, setback, compliance, live load, survey, level,
programme, handover, baseline, indicator, roll-out, adaptation, coalition.

---

## 3 · The two settings

The **Syrian Edition** is set in Syria throughout. Reconstruction after the
conflict is its spine: damage assessment, structural repair, heritage work in
the old cities of Damascus and Aleppo, and housing for families returning to
their own districts. Its buildings are Syria's — Kathmandu's counterpart here is
the Umayyad Mosque, the Citadel of Aleppo, Palmyra, the Azem Palace, the souks —
and its institutions are the Order of Syrian Engineers and Architects and the
Syrian Arab Standards and Metrology Organization.

The **International Edition** moves each unit to a different country, keeping
every element in place:

| unit | country | setting | local matter |
| ---: | --- | --- | --- |
| 1 | **Nepal** | Kathmandu, Bhaktapur | Newar brick and timber; the 2015 earthquake; the Durbar Squares and the bahals |
| 2 | **Morocco** | Casablanca, Fès | medina conservation; alleys no machine can enter |
| 3 | **Peru** | Lima, Cusco | the seismic code; informal title; historic centres |
| 4 | **Vietnam** | Hanoi, Hue | measured survey of tube houses; flooding and rot |
| 5 | **Senegal** | Dakar, Saint-Louis | earth construction, shade, teranga; rains closing roads |
| 6 | **Indonesia** | Yogyakarta, Solo | gotong royong, musyawarah, the kampung |
| 7 | **Guatemala** | Guatemala City, Quetzaltenango | highland hamlets, the patio house, the cantón |
| 8 | **Mozambique** | Maputo, Beira | cyclones; resources held in trust for a community |
| 9 | **Jordan** | Amman, Irbid | ta'awun and amanah; water scarcity; housing roll-out |
| 10 | **Türkiye** | İstanbul, İzmir | istişare; post-earthquake policy advocacy |

Each unit's institutions move with it — the Nepal Engineers' Association, the
Colegio de Arquitectos del Perú, the Ordre National des Architectes — and so do
its hazards, so no unit carries a problem its country does not have.

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
   exercises.
10. The same voice colouring: 65 female-voice and 506 male-voice paragraphs.
11. The same 120 🔊 and 36 📝.
12. Answer-key density within a few per cent of the template's 25,758 words.
13. No answer more than eight words shorter than its counterpart.
14. The same page count, and every section opening on the same page.
15. The two editions identical on every one of the above.

---

## 5 · Build

```
python3 build/compile.py                       # content/*.txt -> dist/…_A2.docx
ARCH_SRC=<template.docx> python3 qa/check.py   # 30 structural metrics
python3 qa/spacing.py  <template.docx>         # every element's full layout
python3 qa/answers.py  <template.docx>         # per-answer parity in Appendix B
python3 qa/partial.py  <template.docx>         # progressive parity while writing
python3 qa/outline.py  <doc>                   # dump any document in reading order
```

`ARCH_SRC` may be the NGO A2 template or the other architect edition; both
comparisons pass.

---

## 6 · Verification

| pass | Syrian Edition | International Edition |
| --- | --- | --- |
| 30 structural metrics vs the template | all identical | all identical |
| full layout, element by element | 5,455/5,455, **0 differ** | 5,455/5,455, **0 differ** |
| run formatting (text lengths ignored) | **0 differ** | **0 differ** |
| answers more than 8 words short | **0** of 620 | **0** of 620 |
| answer-key density | 26,893 words vs 25,758 (104.4 %) | 26,900 vs 25,758 (104.4 %) |
| LibreOffice render | **251 pages** | **251 pages** |
| package integrity | 10 parts, every XML part well-formed | 10 parts, every XML part well-formed |

### The two editions against each other

| pass | result |
| --- | --- |
| 30 structural metrics | all 30 identical, em dashes included |
| full layout, element by element | 5,455 of 5,455, **0 differ** |
| run formatting | **0 differ** |
| answer-key density | 26,900 against 26,893 — **100.0 %** |
| words | 68,807 against 68,764 — **+0.06 %** |
| pages | **251 and 251** |
| section openings in the render | all 31 fall on the identical page |
| per-page line counts | 251 of 252 identical; one discussion bullet sits a page later in the International Edition |

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

## 8 · One deliberate divergence

The template's contents page runs one topic behind its units: Unit 3 is called
"International Organizations" but is about humanitarian crises, Unit 7 is called
"Working with Communities" but is about health and education, and so on through
Unit 10. Reproducing that offset in a new book would mean shipping ten units
whose titles describe the wrong content. Both architect editions therefore name
each unit for what it actually contains. Everything structural is unchanged: the
contents page still has ten entries, each unit still opens with one Heading1, and
all 30 metrics match.

## 9 · Where the editions necessarily differ from the template

- **+3,100 words** (68,764 and 68,807 against 65,644), almost all of it in
  Appendix B, where answers were written to the template's per-answer lengths
  and a few run long.
- **108 em dashes against 126** — the template's prose reaches for the dash more
  often than architectural description does.
- **251 pages against 257**: with the same elements and the same spacing,
  architectural prose fills its lines slightly more completely than the
  template's. Both editions land on the same 251, which is the number that
  matters.
