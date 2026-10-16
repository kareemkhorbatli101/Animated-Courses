# English for Tourism Police — Student Book (A2)

Two editions, built as exact structural twins of each other:

| edition | setting | file |
| --- | --- | --- |
| **Syrian Edition** | Syria throughout — Damascus, Aleppo, Homs, the Ministry of Interior, the Ministry of Tourism and the Directorate-General of Antiquities and Museums | `books/english-for-tourism-police-syria/dist/EnglishForTourismPolice_Syria_StudentBook_A2.docx` |
| **International Edition** | ten non-English-speaking countries, one per unit | `books/english-for-tourism-police-international/dist/EnglishForTourismPolice_International_StudentBook_A2.docx` |

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

## 2 · The tourism-policing syllabus

The template's exercise *shapes* are kept; the subject is policing a heritage
site and the visitors who come to see it.

| unit | subject | grammar |
| ---: | --- | --- |
| 1 | Introduction to Tourism Policing | present simple |
| 2 | Tourism Police Roles and Careers | present perfect |
| 3 | Law, Procedure and Compliance | conditionals, passive, reported speech, modals |
| 4 | Equipment, Budgets and Patrol Costs | modals of ability, gerunds, comparatives |
| 5 | The Patrol Planning and Deployment Cycle | sequencing, conditionals, passive, purpose |
| 6 | Working with Site Staff and Partner Agencies | cooperation structures, agreement, passive |
| 7 | Visitor Assistance, Communication and Service | cause and effect, purpose, concession |
| 8 | Performance Measurement and Reporting | past tense for results, comparison, question forms |
| 9 | Growth, Change and Scaling the Unit | future forms, conditionals, comparatives |
| 10 | Community Advocacy and Professional Communication | persuasive language, conditionals, argument |

The vocabulary load is the template's in weight and the profession's in content:
duty roster, beat plan, patrol budget, response time, turnaround time, incident
register, lost-property entry, permit file, witness file, site pass, retention
schedule, liaison request, notice period, response terms, service level, unit
cost, variance, approval limit, enquiry log, on-time response rate.

---

## 3 · The two settings

The **Syrian Edition** is set in Syria throughout. Its spine is keeping a post
answering every call while the sites it guards are themselves being repaired:
the Ministry of Interior that appoints every officer before they may take a
post, the Ministry of Tourism that licenses the hotels, guides and agencies, the
Directorate-General of Antiquities and Museums that protects the sites, and the
khan keepers who watched over guests and their goods on the caravan roads for
four hundred years before any of it. Its case post is the Bab Touma post in
Damascus, whose commander is Nour; its sites are the Old City of Damascus,
Palmyra, Bosra, the Aleppo citadel and Krak des Chevaliers. Its constraints are
real ones: interrupted power in the middle of a long perimeter sweep, vehicles
that are hard to repair, radios too few to cover a long perimeter, certified
translation that costs more than the escort, and sites damaged or looted in the
conflict whose records have to be reconstructed.

The **International Edition** moves each unit to a different country, keeping
every element in place:

| unit | country | ministry / heritage authority | local matter |
| ---: | --- | --- | --- |
| 1 | **Vietnam** | Ministry of Public Security · Department of Cultural Heritage | the inn keepers of Hội An; the river roads; Hội An Ancient Town, Mỹ Sơn, the Huế monuments; the Riverside post |
| 2 | **Türkiye** | Ministry of Interior · General Directorate of Cultural Heritage and Museums | serving visitors at many sites at once; officers returning from abroad |
| 3 | **Mexico** | Ministry of Security and Civilian Protection · National Institute of Anthropology and History | records held in several registries; a state-government certificate; a mission's own consent forms |
| 4 | **Morocco** | Ministry of Interior · National Foundation of Museums | electricity charges, repair costs, certified translation, long seasonal peaks |
| 5 | **Indonesia** | Ministry of Home Affairs · Directorate of Cultural Heritage | shipping between islands, prayer times, holiday weeks, the rest-house keepers |
| 6 | **Brazil** | Ministry of Justice and Public Security · National Historic and Artistic Heritage Institute | *respeito*; the duty to declare a fault; the estalagem keepers |
| 7 | **Egypt** | Ministry of Interior · Supreme Council of Antiquities | *amanah*; the *diwan* as shared responsibility; the wakala keepers; a post outside Damietta |
| 8 | **Thailand** | Ministry of Interior · Fine Arts Department | *sujarit*; the royal inspector of weights and measures; *yutitham* in using findings |
| 9 | **Poland** | Ministry of the Interior and Administration · National Heritage Board | *spółdzielczość*; *dziedzictwo*; opening posts across a region |
| 10 | **Kenya** | Ministry of Interior and National Administration · National Museums of Kenya | the *baraza*; *haki*; a campaign to issue a site access permit in three days |

Each unit's ministries, heritage authority, hospitality tradition and cultural
terms move with it, so no unit carries an authority its country does not have or
a value its culture does not hold.

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
TP_SRC=<template.docx> python3 qa/check.py     # 30 structural metrics
python3 qa/spacing.py  <template.docx>         # every element's full layout
python3 qa/runs.py     <template.docx>         # run structure, run by run
python3 qa/answers.py  <template.docx>         # per-answer parity in Appendix B
python3 qa/partial.py  <template.docx>         # progressive parity while writing
python3 qa/unitdiff.py <src> <cand> <section>  # section-by-section element lists
python3 qa/scripts.py  content                 # Appendix A against each unit's own transcripts
python3 qa/anyline.py  <src> <repl> <out>      # tag-safe line replacement
python3 qa/outline.py  <doc>                   # dump any document in reading order
```

`TP_SRC` may be the NGO A2 template, the Content Creators A2 book this edition
was scaffolded from, or the other Tourism Police edition; all three comparisons
pass.

---

## 6 · Verification

| pass | Syrian Edition | International Edition |
| --- | --- | --- |
| 30 structural metrics vs the template | all identical | all identical |
| full layout, element by element | 5,455/5,455, **0 differ** | 5,455/5,455, **0 differ** |
| run formatting (text lengths ignored) | **0 differ** | **0 differ** |
| per-section element lists vs the template | **0 diff lines** | **0 diff lines** |
| answers more than 8 words short | **0** of 620 | **0** of 620 |
| answer-key density | 27,474 words vs 25,758 (106.7 %) | 27,485 vs 25,758 (106.7 %) |
| transcripts printed in two places | 18 of 18 identical | 18 of 18 identical |
| DSL skeleton against the other edition | 13 of 13 files, **0 divergences** | 13 of 13 files, **0 divergences** |
| LibreOffice render | **251 pages** | **251 pages** |
| package integrity | 10 parts, every XML part well-formed | 10 parts, every XML part well-formed |

### The two editions against each other

| pass | result |
| --- | --- |
| 30 structural metrics | all 30 identical, em dashes included (106 each) |
| full layout, element by element | 5,455 of 5,455, **0 differ** |
| run formatting | **0 differ** |
| answer-key density | 27,485 against 27,474 — **100.0 %** |
| words | 71,048 against 71,020 — **+0.04 %** |
| pages | **251 and 251** |
| section openings in the render | all **856** fall on the identical page |

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
whose titles describe the wrong content. Both Tourism Police editions therefore
name each unit for what it actually contains. Everything structural is
unchanged: the contents page still has ten entries, each unit still opens with
one Heading1, and all 30 metrics match.

---

## 9 · Where the editions necessarily differ from the template

- **+5,400 words** (71,020 and 71,048 against 65,644), almost all of it in
  Appendix B, where answers were written to the template's per-answer lengths
  and a few run long.
- **106 em dashes against 126** — the template's prose reaches for the dash more
  often than procedural policing description does.
- **251 pages against 257**: with the same elements and the same spacing, post
  prose fills its lines slightly more completely than the template's. Both
  editions land on the same 251, which is the number that matters.

---

## 10 · How the editions were built, and what QA found

The Syrian Edition was written against the Content Creators A2 book as its
structural scaffold: every `@TAG` line and every spacer was held fixed while the
headings, instructions and body lines were rewritten for tourism policing, so
each unit landed element-exact on the first or second attempt. Three tools
enforce that: `anyline.py` refuses a replacement that would change a line's tag,
`byline.py` refuses to touch anything that is not a body line, and the DSL
skeleton diff refuses a unit whose element list has moved at all.

Four classes of defect were found and fixed:

- **Two replacements landed on a spacer.** `anyline.py` guards `@TAG` lines but
  not bare `_300` spacers, because a spacer does not start with `@`. A Part 4
  heading in Unit 1 and an MCQ option in Unit 2 were each numbered one line low
  and silently overwrote a spacer; the skeleton diff caught both, and the
  spacers were restored.
- **Leftover scaffold vocabulary.** Sweeps for the previous book's profession
  (*content*, *studio*, *channel*, *editor*, *footage*, *audience*, *comment*,
  *archive*) found residue in Units 4, 5, 6, 7 and in all ten sections of
  Appendix B; every hit was rewritten and the sweep now returns nothing but
  words a policing book is entitled to use.
- **Fourteen article and repetition slips** introduced by ordered substitution
  (*an radio room*, *a enquiry*, *the the ministry*, *an visitors*) were caught
  by a tight article-agreement scan over both appendices and corrected.
- **One section opening a page late.** The International Edition's Unit 5
  reading section ran 85 characters long, pushing "Part 4: Reading —
  Site-Centred Planning" onto the next page. Five of the unit's country one-offs
  were shortened, the edition was re-derived from a fresh copy, and both
  editions now render to 251 pages with all 856 section openings on the
  identical page.
