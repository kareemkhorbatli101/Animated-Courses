# English for Business Managers — Student Book (A2)

Two editions, built as exact structural twins of each other:

| edition | setting | file |
| --- | --- | --- |
| **Syrian Edition** | Syria throughout — Damascus, Aleppo, Homs | `books/english-for-business-managers-syria/dist/EnglishForBusinessManagers_Syria_StudentBook_A2.docx` |
| **International Edition** | ten non-English-speaking countries, one per unit | `books/english-for-business-managers-international/dist/EnglishForBusinessManagers_International_StudentBook_A2.docx` |

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

## 2 · The business-management syllabus

The template's exercise *shapes* are kept; the subject is running a company.

| unit | subject | grammar |
| ---: | --- | --- |
| 1 | Introduction to Business Management | present simple |
| 2 | Management Careers and Roles | present perfect |
| 3 | Company Law, Governance and Compliance | conditionals, passive, reported speech, modals |
| 4 | Costing, Pricing and Financial Records | modals of ability, gerunds, comparatives |
| 5 | The Planning and Budgeting Cycle | sequencing, conditionals, passive, purpose |
| 6 | Working with Customers and Suppliers | cooperation structures, agreement, passive |
| 7 | Marketing, Sales and Customer Service | cause and effect, purpose, concession |
| 8 | Performance Measurement and Reporting | past tense for results, comparison, question forms |
| 9 | Growth, Change and Scaling the Business | future forms, conditionals, comparatives |
| 10 | Business Advocacy and Professional Communication | persuasive language, conditionals, argument |

The vocabulary load is the template's in weight and the profession's in content:
margin, overhead, unit cost, working capital, cash flow, budget variance,
commercial register, articles of association, director's duty, certificate of
origin, lead time, stock turn, credit terms, distributor, repeat order,
indicator, succession, delegation, trade association, policy brief.

---

## 3 · The two settings

The **Syrian Edition** is set in Syria throughout. Its spine is keeping a company
earning while the ground moves under it: textiles and garments centred on Aleppo
and Damascus; food processing, Aleppo soap, furniture and pharmaceuticals; export
orders won back one buyer at a time; and, since the conflict, the rebuilding of
businesses that were damaged or moved. Its institutions are the commercial
register, the Ministry of Internal Trade and Consumer Protection and the Damascus
Chamber of Commerce. Its constraints are real ones: a currency that moves between
the order and the delivery, interrupted power, scarce credit and materials that
are hard to import.

The **International Edition** moves each unit to a different country, keeping
every element in place:

| unit | country | registry / regulator | local matter |
| ---: | --- | --- | --- |
| 1 | **Vietnam** | national business register · Ministry of Industry and Trade | garments, footwear, electronics assembly; Bát Tràng pottery; moving up from cheap assembly; keeping face |
| 2 | **Türkiye** | trade registry · Ministry of Trade | branded manufacturing; managers returning from abroad; neighbouring markets |
| 3 | **Mexico** | commercial registry · Federal Consumer Protection Agency | permits at federal, state and municipal level; EU and Gulf importers' own rules |
| 4 | **Morocco** | commercial register · Ministry of Industry and Trade | yarn prices, port charges, long-distance transport; costing under pressure |
| 5 | **Indonesia** | business register · Ministry of Trade | shipping between islands, monsoon weeks, prayer times, local language, craft mastery |
| 6 | **Brazil** | commercial registry · National Consumer Secretariat | *respeito*; the duty to declare a defect; Serra Têxteis and the Mercadão wholesalers |
| 7 | **Egypt** | commercial register · Ministry of Supply and Internal Trade | *amanah*; the souk as shared responsibility; a furniture workshop outside Damietta |
| 8 | **Thailand** | business register · Ministry of Commerce | *sujarit*; the royal inspector of weights and measures; *yutitham* in using findings |
| 9 | **Poland** | National Court Register · Office of Competition and Consumer Protection | *spółdzielczość*; *dziedzictwo*; opening branches across a region |
| 10 | **Kenya** | business register · Competition Authority of Kenya | the *baraza*; *haki*; a campaign to clear the border in three days |

Each unit's institutions, products, processes and cultural terms move with it, so
no unit carries an industry its country does not have or a value its culture does
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
BM_SRC=<template.docx> python3 qa/check.py    # 30 structural metrics
python3 qa/spacing.py  <template.docx>        # every element's full layout
python3 qa/runs.py     <template.docx>        # run structure, run by run
python3 qa/answers.py  <template.docx>        # per-answer parity in Appendix B
python3 qa/partial.py  <template.docx>        # progressive parity while writing
python3 qa/unitdiff.py <src> <cand> <section> # section-by-section element lists
python3 qa/scripts.py  content                # Appendix A against each unit's own transcripts
python3 qa/outline.py  <doc>                  # dump any document in reading order
```

`BM_SRC` may be the NGO A2 template or the other Business Managers edition; both
comparisons pass.

---

## 6 · Verification

| pass | Syrian Edition | International Edition |
| --- | --- | --- |
| 30 structural metrics vs the template | all identical | all identical |
| full layout, element by element | 5,455/5,455, **0 differ** | 5,455/5,455, **0 differ** |
| run formatting (text lengths ignored) | **0 differ** | **0 differ** |
| answers more than 8 words short | **0** of 620 | **0** of 620 |
| answer-key density | 27,219 words vs 25,758 (105.7 %) | 27,213 vs 25,758 (105.6 %) |
| transcripts printed in two places | 18 of 18 identical | 18 of 18 identical |
| DSL skeleton against the other edition | 12 of 12 files, **0 divergences** | 12 of 12 files, **0 divergences** |
| LibreOffice render | **252 pages** | **252 pages** |
| package integrity | 10 parts, every XML part well-formed | 10 parts, every XML part well-formed |

### The two editions against each other

| pass | result |
| --- | --- |
| 30 structural metrics | all 30 identical, em dashes included (106 each) |
| full layout, element by element | 5,455 of 5,455, **0 differ** |
| run formatting | **0 differ** |
| per-section element lists (10 units + 2 appendices) | **0 diff lines** |
| answer-key density | 27,213 against 27,219 — **100.0 %** |
| words | 70,095 against 70,076 — **+0.03 %** |
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
whose titles describe the wrong content. Both Business Managers editions
therefore name each unit for what it actually contains. Everything structural is
unchanged: the contents page still has ten entries, each unit still opens with
one Heading1, and all 30 metrics match.

---

## 9 · Where the editions necessarily differ from the template

- **+4,450 words** (70,076 and 70,095 against 65,644), almost all of it in
  Appendix B, where answers were written to the template's per-answer lengths
  and a few run long.
- **106 em dashes against 126** — the template's prose reaches for the dash more
  often than commercial description does.
- **252 pages against 257**: with the same elements and the same spacing,
  business-management prose fills its lines slightly more completely than the
  template's. Both editions land on the same 252, which is the number that
  matters.

---

## 10 · Three defects found and fixed during QA

- **Nine answers ran short.** `qa/answers.py` flagged nine answers in Appendix B
  more than eight words shorter than their counterparts; each was extended, and
  both editions now report 0 of 620 short.
- **Unit 9's answers drifted long and short.** The length comparison against the
  structural model flagged five unit-9 answers 42–94 characters short; each was
  rewritten to length before the appendix was installed.
- **The International Edition's longer names cost a page line.** Country, registry
  and regulator names are longer than "Syria" and "the commercial register", and
  the accumulated +506 characters pushed four section openings one page further.
  Seven one-off replacements were shortened and the derivation re-run from a
  fresh copy; all 816 openings now fall on the identical page.
