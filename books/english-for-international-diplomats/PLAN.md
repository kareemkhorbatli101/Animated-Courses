# English for Foreign Ministry Staff Members — International Edition

A structural twin of *English for Foreign Ministry Staff Members — Student Book (B1)*,
rebuilt so that the course is no longer set in one country's ministry but across the
foreign ministries of **non-English-speaking countries on four continents** — the real
condition of working diplomatic English, where two non-native speakers meet in a third
language.

---

## 1 · What the source is

Measured from the file itself: unzipped, walked in reading order, counted, and its design
system read out of its own `document.xml`, `styles.xml` and `sectPr`.

| | |
|---|---|
| Words | 44,049 |
| Paragraphs | 2,415 |
| Units | **4** |
| Named exercises per unit | **35** (Warm Up 1–3, then Parts 1–8) |
| Tables | 52 |
| Hard page breaks | **0** — the book flows, it is not paginated by hand |
| Illustrations | none |
| Appendices | 2 — **B: Answer Key** (20,243 words) then **A: Audio Scripts** (944) |
| Pages (LibreOffice render) | **134** |
| CEFR band | B1 |
| Page | **A4** 11906 × 16838, margins 1701 top/bottom, 1134 left, 850 right |
| Page border | a grey (`808080`) single 1½-pt box **on every page** |
| Header | "English for Foreign Ministry Staff Members - Student Book (B1)" |
| Footer | "Page *n* of *N*" as live `PAGE`/`NUMPAGES` fields |

### The 35-exercise unit template

Every one of the four units is built the same way, exercise for exercise. The numbering
runs 1–35 straight through the unit and the Answer Key refers to it.

```
Unit n: <title>                                     [Heading1, 18 pt, 003366, ruled]
🟠 Warm Up                                          [orange bar, white bold 16 pt]
    1  Pair Discussion – …
    2  Group Brainstorm – …
    3  Fluency Practice – …
🔵 Part 1   VOCABULARY                              [blue bar]
    4  Match and Guess                   Column A 7×3 + Column B 7×2 matching tables
    5  <role / scenario cards>           numbered cards, 3 per unit
    6  Group Discussion – …
    7  Vocabulary Practice: Using the Words in Sentences   Word Bank 1×3 ×2 + 5 gaps
🟢 Part 2   GRAMMAR                                 [teal bar]
    8  Noticing Grammar                  a colour-coded dialogue
    9  Grammar Focus Box
   10  Guided Practice                   5–6 gapped sentences
   11  Error Correction                  4–5 sentences
   12  Speaking Practice                 4 questions
🟣 Part 3   LISTENING                               [purple bar]
   13  Before You Listen: Predict and Discuss
   14  <four dialogues>                  Dialogue 1–4 bars + colour-coded speakers
   15  Choose the Correct Response
   16  Useful Phrases Box
🔴 Part 4   SPEAKING                                [pink bar]
   17  <dialogue practice / role-play>
   18  Role-Play: <event>
   19  Group Discussion: …
🟩 Part 5   READING                                 [green bar]
   20  Read: <profiles or case>          shaded reading panels
   21  Reading Comprehension: Discussion Questions
🔵 Part 6   WRITING                                 [blue bar]
   22  Model Writing – <models>          2 model documents
   23  <write task 1>                    10-line writing frame
   24  Analyze the Parts of …
   25  Your Turn: <task> (n–n words)     10-line writing frame
   26  Optional Extension: …             10-line writing frame
🔵 Part 7   PRONUNCIATION                           [blue bar]
   27  Word stress / clarity
   28  Linking, rhythm or intonation
   29  Controlled dialogue practice
   30  Practice and Record
🔵 Part 8   INTERCULTURAL                           [blue bar]
   31  Understanding cultural differences
   32  <comparison table>
   33  Role-play with one counterpart culture
   34  Role-play with another counterpart culture
   35  Reflection / closing discussion
```

Measured per unit: **Unit 1** 5,174 words · **Unit 2** 5,938 · **Unit 3** 5,655 ·
**Unit 4** 5,896. Part 3 is the longest part of every unit (1,030 / 1,379 / 1,281 / 1,261).

### Appendix B — the Answer Key

Half the book. For each unit it answers exactly **16 of the 35 exercises** — 1, 2, 3, 5, 6,
7, 10, 11, 12, 14, 19, 20, 21, 22, 31, 35 — under headings `Exercise n: <title>` set in
blue bold. Discussion exercises get `Question n - Sample Answer:` followed by two graded
answers in pale-green boxes:

```
Level 1 (B1 Target): <the answer a B1 learner should be able to produce>
—
Level 2 (Extended): <the same answer at a higher level, with more detail>
```

Gap-fill and correction exercises get their answers as a single shaded answer strip
instead. 20,243 words in all, about 5,060 per unit.

### Appendix A — Audio Scripts

An intro, a six-step note on enabling playback, a block of VBA that speaks the dialogue
aloud in two voices, and then per unit six track headings — `🔊 Track n.8`, `n.14`,
`n.27`, `n.28`, `n.29`, `n.30`. Only **Track n.8 carries its script**; the other five are
headings with nothing under them. That is a gap in the source and the twin keeps it.

---

## 2 · The transposition

The source is set in one ministry, in one country, at one moment in its history: the
Syrian Ministry of Foreign Affairs in Damascus after the change of government —
"Syria's New Chapter", reconstruction investment, diaspora Syrians, re-engagement.

The International Edition keeps every structure and moves the setting. One ministry per
unit, on a different continent each time, and counterparts drawn from a third set of
countries again — so that in almost every exchange English belongs to neither speaker.

| | Source | International Edition |
|---|---|---|
| The ministry | one, in Damascus | **four**, one per unit |
| Unit 1 | Syria — first contact | **Indonesia** — Ministry of Foreign Affairs, Jakarta |
| Unit 2 | Syria — coordination | **Senegal** — Ministry of Foreign Affairs, Dakar |
| Unit 3 | Syria — explaining policy | **Peru** — Ministry of Foreign Affairs, Lima |
| Unit 4 | Syria — correspondence | **Poland** — Ministry of Foreign Affairs, Warsaw |
| The visitors | mostly European + UN | Japan, Germany, France, Brazil, Viet Nam, Morocco, Kazakhstan, Türkiye, Korea, Mexico, Finland, Thailand, Egypt, Chile, Hungary, Côte d'Ivoire, and the UN system |
| The subject | one country's reconstruction | each ministry's own ordinary diplomatic business |
| Unit 3's theme | "Syria's New Chapter" | **"Telling the National Story"** — the same skill, no single country |
| Part 8 | Europe vs. Gulf Arab norms | professional conventions across four regions, per unit |

**The working language.** Where the source has a Syrian officer meeting a German investor,
the twin has an Indonesian officer meeting a Japanese correspondent, a Senegalese liaison
officer meeting a Turkish delegation, a Peruvian spokesperson briefing a Korean press
corps. English is the bridge, not the home language of either side — which is what a B1
ministry course is actually for.

---

## 3 · Fidelity criteria

**Structure**
1. Four units, each with Warm Up and Parts 1–8. **[auto]**
2. 35 named exercises per unit, in the source's order, with the source's fixed titles kept
   verbatim where the source keeps them fixed. **[auto]**
3. 52 tables, of the source's four kinds, in the source's positions. **[auto]**
4. No hard page breaks. **[auto]**
5. Appendix B answers exactly exercises 1, 2, 3, 5, 6, 7, 10, 11, 12, 14, 19, 20, 21, 22,
   31, 35 of each unit. **[auto]**
6. Appendix A carries six track headings per unit and a script under `n.8` only. **[auto]**

**Language and level**
7. B1 throughout: the source's sentence length, its clause density, its vocabulary load.
8. Every Level 1 answer stays inside B1; every Level 2 extends it without leaving B1+.
9. The source's "(Aim for 3–4 sentences per answer.)" and "(Aim for 30–40 seconds per
   turn.)" rubrics kept, with the source's numbers.
10. Grammar syllabus unchanged: Present Simple vs. Continuous (U1), modals of obligation
    and permission (U2), reporting and the passive (U3), formal conditionals and polite
    distance (U4).

**Content**
11. Role cards, dialogues, readings and model documents are the same shapes, the same
    lengths and the same counts as the source's.
12. Three role cards in Part 1 of every unit; four dialogues in Part 3; two model documents
    in Part 6; two role-plays in Part 8. **[auto]**
13. Every named person is invented. Every ministry, embassy and organisation named is real
    in kind but the people, meetings and figures attached to them are not.
14. No country is characterised. Part 8 compares professional conventions — how formal an
    opening is, how directly a disagreement is expressed, how punctual a start is — never
    peoples.
15. Nothing of the source's single-country story survives.

**Production**
16. The source's design system rebuilt from its own OOXML: A4 with its margins, the grey
    page border on every page, the running header, the `Page n of N` footer fields, the
    part colour bars in the source's own six colours, the pale-yellow instruction boxes,
    the colour-coded dialogue speakers, the four table kinds. **[auto]**
17. Each unit within ±12 % of its source unit, the book within ±8 %, pages within ±8 %.
    **[auto]**

### The decoded design system

| Element | Source formatting |
|---|---|
| Page | A4; margins 1701/1134/1701/850; grey `808080` page border, all pages |
| Header | centred, 9 pt, with a bottom rule |
| Footer | centred "Page `PAGE` of `NUMPAGES`", 9 pt, with a top rule |
| Title page | 28 pt `0D2F5E` bold / 16 pt `1A56A0` / 14 pt `4A82B8` / 12 pt `7AAAD4`, centred |
| Unit heading | Heading1, 18 pt, `003366`, bold, bottom rule |
| Part bar | 16 pt white bold on a colour: Warm Up `FF9900`, P1 `0066CC`, P2 `009688`, P3 `9C27B0`, P4 `E91E63`, P5 `4CAF50`, P6–P8 `0066CC` |
| Exercise heading | Heading3, 12 pt, `1F4D78` |
| Instruction box | `FFF9E6` fill, thin border, 11 pt `3A3A3A`, indent 200 |
| Bullet | ListParagraph, "→" prefix, indent 360 |
| Dialogue line | `F8FAFF` fill, indent 420 — speaker A `1A56A0`, speaker B `7B2D8B` |
| Dialogue bar | `1A56A0` fill, white bold, indent 300 |
| Reading panel | `F8F8F8` fill, indent 200 |
| Audio chip | `F0F0F0` fill, right-aligned, 9 pt `666666` |
| Answer box | `F8FFF8` fill, thin border, 10 pt, indent 500 |
| Answer heading | 11 pt `0066CC` bold, indent 360 |
| Matching table | 95 %, centred, black 0.25-pt box, `CCCCCC` inside; number cell 8 % on `F8F8F8` |
| Word Bank table | 100 %, `0066CC` box, `FFF9E6` cells, centred |
| Answer strip | 100 %, `0066CC` box, `FFFEF8` cells |
| Writing frame | 95 %, `666666` box, ten rows each ruled `D0D0D0` |

---

## 4 · Build

```
python3 build/compile.py          # content/*.txt -> dist/…_StudentBook.docx
FM_SRC=<src.docx> python3 qa/check.py      # whole-document structural parity
python3 qa/spacing.py  <src.docx>          # every paragraph's full layout
python3 qa/runs.py     <src.docx>          # every paragraph's run formatting
python3 qa/unitdiff.py <src.docx> <twin.docx> "Unit 3:"   # one section, element by element
python3 qa/answers.py  <src.docx>          # per-answer word-count parity in Appendix B
python3 qa/outline.py  <doc>               # dump any document in reading order
```

`<src.docx>` is the source Student Book; `<twin.docx>` is
`dist/EnglishForForeignMinistryStaff_International_StudentBook.docx`.

---

## 5 · Verification

Every check below was run against the source's own OOXML, not against a
description of it.

### Element-by-element parity

`qa/spacing.py` walks both documents in reading order and compares each
element on style, shading, border, indent, list, size, colour, page break,
paragraph spacing and — for tables — row and cell counts.

```
elements  source 1983  twin 1983
0 element(s) differ in layout
```

`qa/runs.py` does the same one level down, comparing the run structure
inside every paragraph (bold, italic, underline, colour, size, shading and
where the text is split). Three paragraphs differ, all of them deliberate —
see below.

### Section parity

| section | source | twin |
| --- | ---: | ---: |
| Unit 1 | 294 | 294 |
| Unit 2 | 282 | 282 |
| Unit 3 | 269 | 269 |
| Unit 4 | 281 | 281 |
| Appendix B | 730 | 730 |
| Appendix A | 116 | 116 |

### Whole-document counts

| metric | source | twin |
| --- | ---: | ---: |
| paragraphs | 2415 | 2415 |
| page breaks | 40 | 40 |
| tables / rows / cells | 52 / 244 / 484 | 52 / 244 / 484 |
| Heading1 / 2 / 3 | 7 / 8 / 141 | 7 / 8 / 141 |
| list paragraphs | 138 | 138 |
| bordered paragraphs | 550 | 550 |
| part bars | 36 | 36 |
| instruction boxes | 136 | 136 |
| dialogue lines / bars | 56 / 16 | 56 / 16 |
| answer blocks | 341 | 341 |
| reading panels | 20 | 20 |
| track heads | 24 | 24 |
| VBA code lines | 45 | 45 |
| audio chips / play notes | 28 / 5 | 28 / 5 |
| document heads | 18 | 18 |
| blank spacers | 699 | 699 |
| female- / male-voice lines | 37 / 117 | 37 / 117 |
| 🔊 / 📝 | 49 / 12 | 49 / 12 |
| fill-in blanks | 80 | 80 |
| words | 43,522 | 43,476 |

### Density

| section | source words | twin words | ratio |
| --- | ---: | ---: | ---: |
| Unit 1 | 5,024 | 5,035 | 100.2 % |
| Unit 2 | 5,791 | 5,764 | 99.5 % |
| Unit 3 | 5,546 | 5,527 | 99.7 % |
| Unit 4 | 5,756 | 5,796 | 100.7 % |
| Appendix B | 20,192 | 20,143 | 99.8 % |
| Appendix A | 944 | 947 | 100.3 % |

`qa/answers.py` compares Appendix B answer by answer: all 242 answer
paragraphs are present in the same order, and their combined length is
99.7 % of the source's.

### Visual pass

Both documents were rendered to PDF with the same LibreOffice build. The
source is 134 pages, the twin 133. Unit 1 opens on page 4 in both; Appendix
B opens on page 95 in both. Pages were compared side by side at the title
page, a part opening, a listening spread, a model-writing spread and the
answer key.

---

## 6 · Source quirks reproduced rather than normalised

- **Doubled unit titles.** Every unit heading, table-of-contents entry and
  answer-key heading reads `Unit 1: Unit 1: …`. The generator wrote the
  label twice; the twin does too.
- **Exercise headings that are not headings.** Each exercise heading carries
  `Heading3` *and* a second, undefined `[object Object]` style. Word resolves
  the pair to body text, so the headings render small and unemphasised. Kept.
- **Parts 6, 7 and 8 share Part 1's blue.** Only Warm Up and Parts 1–5 have
  their own bar colour; the last three parts repeat `0066CC`.
- **Appendix B comes before Appendix A.** The answer key is printed first and
  the audio scripts last, despite the lettering.
- **Only Track n.8 carries a script.** Appendix A lists all twenty-four track
  headings but transcribes only the Noticing Grammar dialogue in each unit.
- **Tables that are not there.** “Grammar Focus Box”, “Cultural Comparison
  Table”, “Audience Sensitivity Matrix” and “Three-Culture Formal Dinner
  Comparison Table” each have an instruction telling the student to complete
  a table, and no table.
- **Answer strips answer one gap per model document.** Exercise 22's answer
  is a five-cell strip giving only the first blank of each of the three
  documents.
- **Eighteen leading spaces.** In every unit's “Choose the Correct Response”,
  the second option of each pair is indented with a run of spaces rather than
  with an indent.
- **A first dialogue bar sits tighter than the rest.** The bar under the play
  note has 120 twips above it; every later bar in the same set has 280.
- **Empty `docDefaults`.** The source sets no default run size and no default
  paragraph spacing, so the reader's own defaults apply. Matching this is
  what keeps the twin's pagination within one page of the source.

## 7 · Two deliberate divergences

1. **The grammar targets really are bold.** Units 2, 3 and 4 open Part 2 with
   “Notice the modal verbs / the sentences / the future expressions **in
   bold**” — and in the source nothing in those three paragraphs is bold. The
   twin sets the targeted language in bold so the exercise does what its own
   instruction says. These are the only three paragraphs where `qa/runs.py`
   reports a difference.
2. **Unit 3's title.** The source's `Unit 3: Syria's New Chapter — Explaining
   Policies, Programs, and Progress` names a country. The twin uses
   `Unit 3: Telling the National Story — Explaining Policies, Programs, and
   Progress`, which keeps the shape, the em dash and the three-noun list.
