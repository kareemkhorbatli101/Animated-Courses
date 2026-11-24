# English for the Foreign Ministry with AI — Syria Edition
## Build record

Six books, sixty units, one invented diplomatic world. Second series of a
field-by-field franchise: the harness that produced it is parameterised by
field, so this series reuses the machinery of *English for Management with AI*
and replaces the field content entirely — cast, world, capability ladder,
grammar ladder, exercises, figures and every line of prose.

---

## 1. Who the series is for

A serving officer of a foreign ministry whose working English is good and whose
professional English has to be exact, and who is now expected to direct
systems that draft, translate, summarise, compare, classify and search.

The series teaches two things at once and refuses to separate them:

- **The language of precise instruction.** Every unit turns on one grammar
  point chosen because it is the point at which imprecise instructions fail:
  imperatives of purpose, the passive in formulaic correspondence, modals of
  obligation, conditionals in negotiation, the subjunctive in formal
  requirement, prohibition and permission at the highest register, stance
  reporting verbs, conditional perfects.
- **The actual capability and its edge.** Each unit takes one documented use —
  transcription, triage, version comparison, precedent search, closed-collection
  research, indexing, multilingual reply, chronology building, media
  monitoring, continuity drills — states the gain in figures, and then states
  exactly where it fails and what the ministry has to do about it.

The reader who finishes the series can write an instruction a post cannot
misread, a tasking a system cannot satisfy loosely, and a record that survives
the officer who wrote it.

---

## 2. The world

The institution is **the Ministry**; the state it serves is not named. The
counterpart states are invented — Verenia, Astrene, Oristan, Kavara, Lysmark,
Tarnia, Halmar and the Regional Council — and the international system is real,
because a diplomat works inside it: the Vienna Conventions, the United Nations,
Geneva, treaty practice, consular law.

No serving official is named. No real state's position is stated. No live
political dispute appears anywhere in the six books. A dedicated QA gate
(gate 12) scans every book for live political references, real company names
and flagged terms, and fails the build on any hit.

**The cast** is eleven officers, consistent across sixty units:

| Officer | Section |
|---|---|
| Lina Khalil | Bilateral Affairs |
| Samir Haddad | Legal and Treaties |
| Dr Hana Mourad | Policy Planning |
| Rana Deeb | Consular Affairs |
| Omar Nasri | Translation and Documentation |
| Yara Ibrahim | Press and Public Diplomacy |
| Tarek Zayed | Protocol |
| Nadia Barakat | Multilateral Affairs, Geneva |
| Karim Dalati | Information Security and Records |
| Maya Sarkis | the Diplomatic Institute |
| Ambassador Faris Said | Head of Mission, Astrene |

---

## 3. The six books

| Book | Level | Title | Protagonist | Words |
|---|---|---|---|---|
| 1 | B1.1 | Correspondence and Record | Omar Nasri | 56,457 |
| 2 | B1.2 | Reading the Traffic | Lina Khalil | 55,430 |
| 3 | B2.1 | Research and the Brief | Dr Hana Mourad | 59,608 |
| 4 | B2.2 | Positions and Texts | Samir Haddad | 59,735 |
| 5 | C1.1 | Citizens, Public and Crisis | Rana Deeb | 61,765 |
| 6 | C1.2 | What Must Not Leave the Building | Karim Dalati | 61,702 |

**Series totals:** 354,626 words · 60 units · 858 figures · 1,200 distinct
vocabulary terms · 60 AI capability points · 60 grammar points · 60 Brief Labs
· 60 Decision Rooms.

---

## 4. The unit architecture

Every one of the sixty units has the same fourteen-part shape, so that an
officer who has worked through one unit knows where everything is in the other
fifty-nine:

1. **Hero spread** — the unit's problem in two sentences and one figure.
2. **Warm-up** — three questions about the reader's own office.
3. **Reading** — five paragraphs of narrative from inside the Ministry.
4. **Comprehension** — six short answers, six true/false, six gaps, five
   multiple choice, one classification task.
5. **Vocabulary** — twenty terms with definitions, a labelled figure, eight
   gap items and five matching items. No term is taught twice anywhere in the
   series.
6. **Grammar** — the rule in four lines, a loose/precise figure, nine gap
   items and six multiple choice.
7. **Two dialogues** — twelve turns each, with comprehension and gap work.
   One dialogue per unit, in four units per book, ends on an objection nobody
   answers.
8. **Speaking** — three paired tasks.
9. **Extended reading** — five or six paragraphs on the capability, its gain
   in figures, and its boundary, with a sourced data point.
10. **Writing** — a six-line tasking model (Purpose, Scope, Inputs, Criteria,
    Done, Fallback), a spec card figure, steps, a phrase bank and a checklist.
11. **The skill section** — the capability stated for an officer who will use
    it tomorrow, with three model sentences and a boundary paragraph.
12. **The Decision Room** — a five-stage case clinic with an exhibit, three
    named voices in disagreement, a decision to write, and the outcome, which
    names who turned out to be wrong.
13. **Brief Lab** — a real tasking that failed, six marked defects diagnosed
    by fault type, a rewrite scaffold, the model answer, and the cost of the
    failure in officer-hours or in consequences.
14. **Review, Foundations and a closing line.**

---

## 5. The three locked ladders

Every unit is the intersection of three sequences, and nothing repeats across
the series. The full sixty-row table is in `ALIGNMENT.md`.

- **The AI capability ladder** — sixty capabilities, from the four verbs of
  Book 1 Unit 1 to the part of diplomacy that cannot be delegated in Book 6
  Unit 10. Each is a documented use in a foreign service, described as a
  practice rather than attributed to any named institution.
- **The grammar ladder** — sixty points, from imperatives of purpose to
  summative and valedictory register, each chosen because it is the structure
  that fails when an instruction is imprecise.
- **The precision faults** — eight faults, introduced progressively: unscoped
  set, unbounded quantity, unstated criterion, undefined done, ambiguous
  referent, missing condition, unstated exception, hidden assumption. Each
  Brief Lab diagnoses exactly three fault types, twice each.

---

## 6. Quality gates

Twenty-two gates run on every book and three on the series. The build fails on
any one of them. They are not stylistic preferences; each exists because
something went wrong once.

| # | Gate |
|---|---|
| 1 | Structure: 10 units, 143 figures, 110 part bands, titles match the series file |
| 2 | Answer-key integrity: every graded item keyed, 250 exercise blocks |
| 3 | Multiple-choice integrity: key distribution balanced across A/B/C/D |
| 4 | True/false balance: neither value below 30 per cent |
| 5 | Vocabulary: 200 terms, no repeat inside the book or anywhere earlier in the series |
| 6 | Classification task valid |
| 7 | Figure numbering and captions complete |
| 8 | Case clinic structure: five stages, three voices, a bank, an outcome |
| 9 | Register: measured mean sentence length inside the CEFR band for the level |
| 10 | Dialogue and task parity: 10 turns minimum, 3 speaking tasks, 5 can-dos |
| 11 | Every data point box carries a source line |
| 12 | Continuity and names: no role conflicts, no live politics, no real companies |
| 13 | Grammar and capability ladder in order |
| 14 | Redundancy: no gap stem used more than twice, no duplicated prose sentence |
| 15 | Precision: no model answer uses a vague quantifier without a number |
| 16 | No product, model or platform named anywhere |
| 17 | No capability forecast: nothing about what systems will be able to do |
| 18 | Brief Lab integrity: exactly three fault types, twice each |
| 19 | Fault ladder: no fault used before it is introduced |
| 20 | Capability carried by the extended reading, the skill section and the narrative |
| 21 | A boundary line on every capability |
| 22 | Dissent: four unanswered objections, four clinics where the senior figure was wrong, three where the sceptic was right |

**Series gates:** every one of the eight faults in at least twelve of the sixty
labs; at least twenty clinics where the senior figure was wrong; at least twelve
where the sceptic was right; and a cross-series vocabulary ledger that rejects
any term taught in an earlier book of this series or in *English for Management
with AI*.

**Final result: ALL CHECKS PASS**, on all six books and on the series.

---

## 7. What the series refuses to do

- It names no product, model, platform or company, in sixty units.
- It makes no claim about what these systems will be able to do. Gate 17
  rejects any sentence containing a capability forecast.
- It attributes no practice to a named ministry. Practices are described as
  reported practice in foreign services, with a dated source line.
- It never resolves a professional disagreement by authority. Twenty-four of
  the sixty Decision Rooms end with a senior figure saying what they got
  wrong, and twenty-four dialogues end on an objection that nobody answers.
- It does not pretend that the human part of the work is the part a system
  does badly. The closing argument of Book 6 is that three of five tasks the
  Ministry excludes would be performed competently today, and that the reason
  for excluding them is not quality.

---

## 8. Package contents

For each of the six books:

- a **.docx** at full fidelity, every paragraph directly formatted;
- a **.pdf** rendered from it;
- a **_FULL_TEXT.md** of the complete book as plain text, for review and for
  translation.

Plus:

- `ALIGNMENT.md` — the sixty-row table of capability × grammar × faults;
- `BUILD_RECORD.md` — this document;
- `vocab_ledger.json` — the 1,200-term cross-series ledger, which is what
  stops the next field series repeating a word taught here.

---

## 9. Reusing the harness for the next field

The generator is parameterised. To produce the next series — medicine, law,
logistics, education, finance — replace `series.py`, which holds:

- the field name and the series strap;
- the edition line;
- the eleven-member cast and their sections;
- the invented world;
- the six book titles, levels, protagonists and blurbs;
- the sixty-point capability ladder;
- the sixty-point grammar ladder;
- the fault availability per book.

Everything else — the build engine, the figure library, the twenty-five gates,
the vocabulary ledger, the MCQ rebalancer, the alignment generator — is field
independent and carries over unchanged. The vocabulary ledger is cumulative, so
the next series cannot reuse a term taught in this one.
