# English for Content Creators — Student Book (A2)

Two editions, built as exact structural twins of each other:

| edition | setting | file |
| --- | --- | --- |
| **Syrian Edition** | Syria throughout — Damascus, Aleppo, Homs, the Ministry of Information and the General Establishment for Cinema | `books/english-for-content-creators-syria/dist/EnglishForContentCreators_Syria_StudentBook_A2.docx` |
| **International Edition** | ten non-English-speaking countries, one per unit | `books/english-for-content-creators-international/dist/EnglishForContentCreators_International_StudentBook_A2.docx` |

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

## 2 · The content-creation syllabus

The template's exercise *shapes* are kept; the subject is making content.

| unit | subject | grammar |
| ---: | --- | --- |
| 1 | Introduction to Content Creation | present simple |
| 2 | Content Roles and Careers | present perfect |
| 3 | Rights, Licensing and Compliance | conditionals, passive, reported speech, modals |
| 4 | Equipment, Budgets and Production Costs | modals of ability, gerunds, comparatives |
| 5 | The Content Planning and Production Cycle | sequencing, conditionals, passive, purpose |
| 6 | Working with Clients and Collaborators | cooperation structures, agreement, passive |
| 7 | Audience, Community and Engagement | cause and effect, purpose, concession |
| 8 | Performance Measurement and Analytics | past tense for results, comparison, question forms |
| 9 | Growth, Change and Scaling the Channel | future forms, conditionals, comparatives |
| 10 | Creator Advocacy and Professional Communication | persuasive language, conditionals, argument |

The vocabulary load is the template's in weight and the profession's in content:
content brief, shot list, publishing calendar, turnaround time, response time,
master file, asset catalogue, retention schedule, release form, licence file,
rights register, commission order, lead time, service level, unit cost, variance,
approval limit, comment log, message slip, on-time publishing rate.

---

## 3 · The two settings

The **Syrian Edition** is set in Syria throughout. Its spine is keeping a studio
publishing while the archive itself has to be rebuilt: the commercial register a
production company is entered in before it may trade, the Ministry of
Information that licenses media work and approves filming permits, the General
Establishment for Cinema and the Artists' Syndicate that set the professional
rules, and the hakawati who told stories in the coffee houses for four hundred
years before any of it. Its case firm is Yasmine Studio of Damascus, whose
content manager is Lina. Its constraints are real ones: interrupted power in the
middle of a long render, equipment that is hard to repair, certified subtitling
that costs more than the film, an internet connection too slow to upload a
finished piece, and footage lost in the conflict that cannot be reshot.

The **International Edition** moves each unit to a different country, keeping
every element in place:

| unit | country | regulator / film body | local matter |
| ---: | --- | --- | --- |
| 1 | **Vietnam** | Ministry of Information and Communications · Cinema Department | the water-puppet masters; printing houses in Hanoi and Hội An; Sông Hồng Studio |
| 2 | **Türkiye** | Radio and Television Supreme Council · Directorate General of Cinema | audiences in many countries at once; staff returning from abroad |
| 3 | **Mexico** | Federal Telecommunications Institute · Mexican Film Institute | the film workers' union; archives held in several registries; platform release forms |
| 4 | **Morocco** | High Authority for Audiovisual Communication · Moroccan Cinematographic Centre | electricity charges, repair costs, certified subtitling, long seasonal peaks |
| 5 | **Indonesia** | Ministry of Communication and Informatics · Indonesian Film Board | shipping between islands, prayer times, holiday weeks, local language |
| 6 | **Brazil** | Ministry of Culture · National Film Agency | *respeito*; the duty to declare a fault; Paulista Studio and the Centro collaborators |
| 7 | **Egypt** | Supreme Council for Media Regulation · National Film Centre | *amanah*; the *diwan* as shared responsibility; a studio outside Damietta |
| 8 | **Thailand** | Ministry of Culture · Thai Film Office | *sujarit*; the royal inspector of weights and measures; *yutitham* in using findings |
| 9 | **Poland** | National Broadcasting Council · Polish Film Institute | *spółdzielczość*; *dziedzictwo*; opening channels across a region |
| 10 | **Kenya** | Film Classification Board · Kenya Film Commission | the *baraza*; *haki*; a campaign to issue a filming permit in three days |

Each unit's institutions, regulators, storytelling tradition and cultural terms
move with it, so no unit carries a film body its country does not have or a
value its culture does not hold.

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
CC_SRC=<template.docx> python3 qa/check.py     # 30 structural metrics
python3 qa/spacing.py  <template.docx>         # every element's full layout
python3 qa/runs.py     <template.docx>         # run structure, run by run
python3 qa/answers.py  <template.docx>         # per-answer parity in Appendix B
python3 qa/partial.py  <template.docx>         # progressive parity while writing
python3 qa/unitdiff.py <src> <cand> <section>  # section-by-section element lists
python3 qa/scripts.py  content                 # Appendix A against each unit's own transcripts
python3 qa/anyline.py  <src> <repl> <out>      # tag-safe line replacement
python3 qa/outline.py  <doc>                   # dump any document in reading order
```

`CC_SRC` may be the NGO A2 template or the other Content Creators edition; both
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
| answer-key density | 27,355 words vs 25,758 (106.2 %) | 27,348 vs 25,758 (106.2 %) |
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
| answer-key density | 27,348 against 27,355 — **100.0 %** |
| words | 70,795 against 70,782 — **+0.02 %** |
| pages | **252 and 252** |
| section openings in the render | all **866** fall on the identical page |

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
whose titles describe the wrong content. Both Content Creators editions
therefore name each unit for what it actually contains. Everything structural is
unchanged: the contents page still has ten entries, each unit still opens with
one Heading1, and all 30 metrics match.

---

## 9 · Where the editions necessarily differ from the template

- **+5,100 words** (70,782 and 70,795 against 65,644), almost all of it in
  Appendix B, where answers were written to the template's per-answer lengths
  and a few run long.
- **106 em dashes against 126** — the template's prose reaches for the dash more
  often than production description does.
- **252 pages against 257**: with the same elements and the same spacing,
  studio prose fills its lines slightly more completely than the template's.
  Both editions land on the same 252, which is the number that matters.

---

## 10 · How the editions were built, and what QA found

The Syrian Edition was written against the Office Managers A2 book as its
structural scaffold: every `@TAG` line and every spacer was held fixed while the
headings, instructions and body lines were rewritten for content creation, so
each unit landed element-exact on the first or second attempt. Two tools enforce
that: `anyline.py` refuses a replacement that would change a line's tag, and
`byline.py` refuses to touch anything that is not a body line.

Three defects were found and fixed:

- **Four headings numbered one line off.** `anyline.py` caught replacements
  aimed at an `@INSTR` line that carried an `@EX` title, and at an `@MCQ` line
  that carried a question, in Units 2, 3 and 7; the line numbers were remapped
  before anything was written.
- **A matching item lost its number.** A tab typed inside a replacement line
  turned `5. | Publishing calendar` into a broken cell; the residue sweep caught
  it on the same pass and it was rewritten.
- **Six lines still carried the scaffold's profession.** A sweep for the
  previous book's vocabulary (*office*, *registry*, *requisition*, *clerk*)
  found them in Units 1, 3, 5, 7 and 8; they were rewritten, and the sweep now
  returns nothing but words a content book is entitled to use.

Both editions then rendered to 252 pages with all 866 section openings on the
identical page on the first attempt, so no trimming round was needed.
