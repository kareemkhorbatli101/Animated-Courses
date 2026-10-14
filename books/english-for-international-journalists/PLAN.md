# English for International Journalists — Adaptation Plan

Adapting **English for Journalists · Syria Edition (Student's Book)** into
**English for Journalists · International Edition (Student's Book)**.

The target is not a "version inspired by" the source. It is a **structural twin**: the same
book, with the national frame replaced by a cross-border one. Every structural fact about the
source has been measured, and the new book is built to those measurements.

---

## 1 · What the source actually is (measured, not guessed)

| Measure | Source value |
|---|---|
| Total running words | 62,741 (60,020 in the ten units + front matter) |
| Units | 10 |
| Parts per unit | Warm-Up + Parts 1–11 + Answer Key |
| Lettered exercises per unit | **78** (9 · 6 · 7 · 10 · 10 · 6 · 7 · 8 · 8 · 7, Parts 1→10) |
| Warm-up items per unit | 4 (W1–W4) |
| Answer-key entries per unit | 48–51 (closed tasks only; open tasks listed by code) |
| Figures per unit | **24** (Unit 8 = 25, Unit 10 = 26) |
| Boxed tables per unit | 41 (Units 3–10); 60 in Unit 1, 50 in Unit 2 |
| Words per unit | 5,496 – 6,231 (Unit 1 = 8,024) |
| Unique figure assets | 91 (71 one-offs + 20 recurring, each used ~10×) |
| CEFR band | A2 → lower B1 |
| Page format | A4, 17.6 mm margins, Calibri 10.5 pt, Georgia display |

Two internal templates exist, and the adaptation reproduces **both**:

* **Units 1–2** ("v5 / v4 standard") — unit banner is a dark table, part titles are generic
  (*Newsroom words · Grammar in the newsroom · Skill focus · Listen & view · Read the story ·
  Write it · In the field · Ethics & the Code · The digital angle · Review & Can-Do ·
  Assignment*), figures carry numbered captions (*Figure 1.2 · …*), Unit 1 is the oversized
  entry unit.
* **Units 3–10** ("v6 standard") — unit banner is a Georgia heading plus a *Beat · CEFR* line,
  an **In this unit you learn to…** list of 4 aims, a **The story so far** paragraph, part
  titles are topical (*The words of X · Grammar: X · Listening: X* …), two ethics **cases**,
  two speaking dialogues, captions unnumbered.

### The invariant section grammar inside every part

```
PART n   Title
<grey one-line subtitle>
MODEL    …      ← gold label, rule under it
NOTICE   …      ← blue label
PRACTISE …      ← navy label
PRODUCE  …      ← red label
CHECK    …      ← teal label (Part 7 only)
```

Every part walks the same arc: **model → notice → controlled practice → free production.**
Part 2 is explicitly split in half — "Structured practice — half of this part" /
"Your own words — the other half."

---

## 2 · The transposition

The source teaches English through **one invented newsroom** covering **one continuous story**
against a **true factual backdrop**. The adaptation keeps all three mechanisms and swaps only
their referents.

| Dimension | Syria Edition | International Edition |
|---|---|---|
| Learner | A journalist working in a national newsroom | A journalist working across borders — correspondent, stringer, fixer, freelancer, agency and desk staff |
| Newsroom | **Al-Manara**, invented, Damascus, 8 staff | **Atlas Wire**, invented independent international news agency, world desk in Geneva, 8 staff + correspondents abroad |
| Continuous story | The return of the **Hayy al-Yasmin** quarter — market reopens, families come home, front page | The reopening of the **Kalina bridge** — a crossing closed for years, the market on it, families crossing again, front page |
| Factual backdrop | Syria's media landscape, 2026 | World press freedom and the safety of journalists — RSF Index, CPJ census, UNESCO, the UN Plan of Action, cross-border collaboration |
| Code of conduct | The 2026 Syrian Media Code of Conduct | The shared international code — accuracy, honesty, fairness, respect, independence — as expressed in the IFJ Global Charter of Ethics and the UN Plan of Action |
| "Second situation" extras | A press event in Damascus | A UN press briefing in Geneva |

### Why the Kalina bridge

The source's continuous story is chosen to feed the grammar syllabus, one tense at a time.
The replacement is chosen the same way, and carries exactly the same load:

| Unit | Grammar | What the story supplies |
|---|---|---|
| 1 | be · present simple · have got · there is/are | Who is in the newsroom; what an agency is |
| 2 | wh-questions · adjectives | The five Ws of the crossing story |
| 3 | present continuous · going to · prepositions | A live report *from the bridge* |
| 4 | can / could / would · question forms | Asking a returning family, through an interpreter, for an interview |
| 5 | reported speech · say/tell · attribution | A UN agency spokesperson's numbers |
| 6 | past simple · past continuous | The year the bridge reopened |
| 7 | the passive | The repair work: *the bridge was rebuilt* |
| 8 | present perfect · for/since | What has changed in a year — and what has not |
| 9 | should/must/have to · first conditional | Advice and rules for a new foreign correspondent |
| 10 | relative clauses | The front page that told the whole story |

**Kalina, the river Vara, and the two sides of the crossing are invented**, as Hayy al-Yasmin
is invented. No real state, border or population is described, so no false claim can be made
about one. The factual layer — press-freedom data, safety figures, accreditation practice,
embargoes, verification method — is real, dated and attributed, exactly as the source's Syrian
facts are real, dated and attributed.

### The cast (8, mirroring the 8 of Al-Manara one-for-one)

| Atlas Wire | Role | Mirrors |
|---|---|---|
| **Ana Ferreira** | editor-in-chief | Rima Haddad |
| **Daniel Okoye** | world editor | Yousef |
| **Mira Sandoval** | correspondent — *the protagonist* | Lina Saleh |
| **Tomas Varga** | field & video | Kareem |
| **Priya Nair** | verification | Nour |
| **Hana Kim** | photojournalist | Samer |
| **Leila Haddad** | digital & social | Dima |
| **Jonas Weber** | radio & podcast | Hadi |

Recurring story characters: **Elena Marku**, who reopens the café at the bridge (mirrors Amal);
**Bekim**, a stall-holder on the crossing (mirrors Abu Sami); **the Crossing Office** and a **UN
agency spokesperson** (mirror the community office); **Sofia Mendes**, the new trainee in Unit 9
(mirrors Yara); and **Dren**, a local journalist who works with the team — the one role the
international edition adds, because the fixer/local partner is to international journalism what
the source's "source" is to local journalism. Dren is never decoration: Unit 9's second ethics
case is about crediting and protecting local colleagues.

---

## 3 · Fidelity criteria

The new book is checked against all of these. Items marked **[auto]** are verified by
`qa/check_parity.py`; the rest by read-through passes.

**Architecture**
1. 10 units, in the same order, teaching the same grammar in the same sequence. **[auto]**
2. Warm-Up + 11 Parts + Answer Key in every unit, same order, same titles per template. **[auto]**
3. Units 1–2 in the v4/v5 template; Units 3–10 in the v6 template.
4. Part titles follow the source's two naming schemes exactly.
5. Each unit opens with a banner carrying kicker, unit number, title, Beat and CEFR band.
6. Units 3–10 open with four numbered aims and a "The story so far" paragraph. **[auto]**
7. Each unit closes with Answer Key → note on real and invented content → italic colophon line.

**Exercise system**
8. 78 lettered exercises per unit, distributed 9·6·7·10·10·6·7·8·8·7. **[auto]**
9. Exercise codes run A–I, A–F, A–G, A–J, A–J, A–F, A–G, A–H, A–H, A–G. **[auto]**
10. W1–W4 in every warm-up; W4 is always a paired discussion. **[auto]**
11. Part 1 always: match → gap-fill from a box → collocations → odd-one-out → paragraph gap-fill → definitions → personal questions → discussion → creative.
12. Part 2 always: four/three grammar boxes, then structured practice, then "Your own words".
13. Part 4 always: two listenings, each with a pre-listening prediction task, detail tasks, a notes grid; then a both-audios summary and a discussion.
14. Part 5 always: Reading A (a longer text) + Reading B (a four-tip / four-rule text), with T/F, comprehension, word-search, matching, and two discussion tasks.
15. Part 6 always: two writing pieces, each model → notice → produce, plus a "Fix it".
16. Part 7 always: model dialogue → notice → controlled → role table → pair work → second dialogue → self-check grid.
17. Part 8 always: two ethics cases, each with a binary choice + reason, a classification task, a rule gap-fill, discussion and a short write.
18. Part 9 always: a model digital artefact → parts-matching → find/fix → build → write → discussion.
19. Part 10 always: vocabulary, grammar ×2–3, a short read-and-answer, the Can-Do list, reflection, and a correct-the-sentence review.
20. Part 11 always: assignment title, task, Remember box, 4–7 success criteria, and a "Keep this" forward link to the next unit.
21. Answer key gives answers for every closed task and lists open tasks by code. **[auto]**
22. Every lettered exercise appears either in the key or in the Open-tasks list. **[auto]**

**Language and level**
23. CEFR A2 in Units 1–2, A2 → lower B1 from Unit 3, with the same gradient.
24. Sentence length, clause density and vocabulary difficulty held at the source's level.
25. Each Part 1 vocabulary table has exactly 14 word/meaning pairs. **[auto]**
26. Definitions written in the source's register: short, concrete, no metalanguage.
27. British spelling throughout (*practise* as verb, *programme*, *organisation*, *-ise*).
28. Typographic conventions preserved: curly quotes, `·` separators, `→` arrows, `☐` boxes, en-dashes in ranges, `___________` answer rules of the same lengths.
29. Grammar explanations use the source's two-colour convention (target form highlighted) and end with a "Watch out!" box in Unit 1.
30. No grammar is used in a text before the unit that teaches it, except deliberately as recognition.
31. Vocabulary recycles forward: each unit's Part 10 re-tests its own Part 1 words.

**Texts**
32. Warm-up story: 55–90 words, 1–2 paragraphs.
33. Reading A: 190–320 words, tracking the source's own per-unit profile (measured: 283 · 141 · 317 · 231 · 227 · 210 · 195 · 205 · 214 · 194).
34. Reading B: a numbered three- or four-point text of 78–135 words.
35. Each Reading A carries 3–6 direct quotations from named speakers.
36. Listening scripts: 6–8 turns, two speakers (three in Unit 3's studio link).
37. Dialogues in Part 7: 5–7 turns, with a named speaker label on each line.
38. Ethics cases: 80–130 words, ending in a question to the student.
39. Models in Part 6 are 25–60 words and are themselves worked examples of the unit's grammar.

**Visuals**
40. 24 figures per unit (25 in Unit 8, 26 in Unit 10); 240+ placements. **[auto]**
41. Figures are flat-vector, 1500 px wide, navy title bar, light background, red/teal/gold accents — the source's exact visual language.
42. Numbered captions (*Figure 1.2 · …*) in Units 1–2; unnumbered italic captions elsewhere.
43. Figure types and their frequencies mirror the source: cast board, four-key-words card, newsroom scene, audio card, chart, page-anatomy diagram, grammar diagram, case card, phone-screen card, can-do card, assignment template.
44. Recurring figures reappear at the same points in each unit (cast board at the unit head, audio cards in Part 4, Can-Do card in Part 10, template in Part 11).
45. Every figure has a caption that teaches — never "a picture of X".
46. One data chart per edition in Unit 1, sourced and dated.

**Pedagogy**
47. Half of every grammar part is controlled, half is free — stated on the page, as in the source.
48. Every writing task ships with a plan prompt and a tick-box checklist.
49. Every speaking part ships with a role table so learners practise from their own job.
50. Every unit's Part 8 builds the Code: accuracy, honesty, fairness, respect, independence.
51. Can-Do lists are written in "I can…" form and map onto the unit's four aims.
52. Success criteria are 4–7 rows with Yes / Almost / Not yet columns.
53. Each unit ends by naming what the next unit teaches.
54. The assignment chain is cumulative and ends in the Unit 10 capstone front page.
55. Open tasks are explicitly marked so the book is usable for self-study.

**Integrity**
56. Every real fact is attributable to a named organisation and dated.
57. Everything invented is declared invented, in the front matter and at the end of every unit.
58. No invented quotation is ever put in the mouth of a real person or body.
59. No real state, border or population is characterised; the story's geography is invented.
60. The book's own ethics (Part 8) are applied to the book itself.

**Production**
61. A4, 1000-twip margins, Calibri 10.5 pt body on `#20303B`, Georgia display. **[auto]**
62. The five-label palette: MODEL `#B8862F`, PRACTISE `#1A2733`, NOTICE `#2E6E8E`, PRODUCE `#C0392B`, CHECK `#3B7D6F`. **[auto]**
63. All ten box variants reproduced: vocab table, word box, grammar box, watch-out, reading, warm-up story, dialogue, case, checklist, can-do, criteria grid, assignment title, role table, notes grid. **[auto]**
64. Figures 14.82 cm wide, centred, italic grey caption beneath. **[auto]**
65. Total length within ±8 % of the source. **[auto]**

---

## 4 · Unit-by-unit map

| # | Title | Beat | Grammar | Story beat | Ethics cases |
|---|---|---|---|---|---|
| 1 | The Newsroom & the World Media Landscape | Report & newswriting | be · present simple · have got · there is/are | Mira's first day on the world desk; the crossing is reopening | A stringer is offered a paid trip; a family asks not to be photographed |
| 2 | What Is News? The Five Ws | Report & newswriting | wh-questions · adjectives | The morning conference picks the crossing story | A number nobody counted; an unverified post |
| 3 | Live from the Scene: Reporting Now | Report & live | present continuous · going to · prepositions | Mira goes live from the bridge | Guessing a crowd size on air; filming a distressed person |
| 4 | The Interview: Asking Politely | Interview | can / could / would · question forms | Interviewing Elena at her new café | A guest asks for a better quote; something said off the record |
| 5 | Getting the Quote Right: Attribution | Verify & report | reported speech · say/tell · attribution | The UN agency's figures | Two sources disagree; an unnamed source's claim |
| 6 | Telling the Story: What Happened | Report & feature | past simple · past continuous | The year the crossing reopened | A number grows in the telling; a painful memory |
| 7 | What Was Done: The Passive | Report | past & present passive | The repair of the bridge | "Mistakes were made"; who gets the credit |
| 8 | What Has Happened: The Present Perfect | Report & feature | present perfect · for/since · just/already/yet | One year on | "Fully recovered"; only the good news |
| 9 | What You Should Do: Advice and Rules | Verify & ethics | should · must · have to · first conditional | Sofia's first week; safety, visas, verification | The deadline and the unchecked fact; protecting a local colleague |
| 10 | The Front Page: Bringing It Together | Capstone | relative clauses | The front page that told the year | Which story leads; a public correction |

---

## 5 · Factual sources used in the backdrop

All figures in the book are attributed on the page and dated. The backdrop draws only on
long-standing, publicly documented material:

* **Reporters Without Borders (RSF)** — *World Press Freedom Index*, published annually since
  2002, ranking 180 countries and territories.
* **Committee to Protect Journalists (CPJ)** — annual 1 December prison census; database of
  journalists killed.
* **UNESCO** — *Director-General's Report on the Safety of Journalists and the Danger of
  Impunity*; the long-reported finding that the large majority of killings of journalists go
  unresolved.
* **UN Plan of Action on the Safety of Journalists and the Issue of Impunity**, adopted 2012;
  **International Day to End Impunity for Crimes against Journalists**, 2 November.
* **World Press Freedom Day**, 3 May; the **Windhoek Declaration** (1991) and **Windhoek+30**
  (2021).
* **IFJ Global Charter of Ethics for Journalists** (2019).
* **ICIJ** — cross-border collaborative investigation as a working method.

Where a precise current-year figure would be needed, the book uses the *shape* of the finding
with its source named, rather than a number that would date — the same choice the source makes
when it writes "the biggest jump of any country in that year".

---

## 6 · Build

```
content/            the book, in a line-oriented DSL (readable as prose, renderable to .docx)
build/style.py      the decoded design system
build/render.py     DSL → OOXML, byte-level equivalent to the source's formatting
build/figures.py    the 90-odd flat-vector figures, generated
qa/check_parity.py  the [auto] criteria above, run against both books
dist/               the finished Student's Book
```
