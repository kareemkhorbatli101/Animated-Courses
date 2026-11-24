# English for Syrian Diplomats — Syria Edition
## Build record

Six books, sixty units, 334,435 words, 918 original figures. Third series of a
field-by-field franchise: the generator is parameterised by field, so this
series reuses the machinery that produced *English for Management with AI* and
*English for the Foreign Ministry with AI*, and replaces every line of field
content — cast, world, capability ladder, grammar ladder, exercises, figures and
prose.

It also adds one structural part that the earlier series do not have:
**Part 10 · On Your Feet**, described in section 6 below.

---

## 1. Who the series is for

Officers **serving abroad**, or holding a representative title that requires
them to travel abroad: third secretaries and attachés at embassies, consuls
and consular staff at consulates general, members of permanent missions and
delegations, envoys, chargés d'affaires, heads of mission.

It is not for ministry staff in the capital. That is a different book and it
has been written: *English for the Foreign Ministry with AI* covers the desk,
the registry, the brief, the submission and the classified file. This series
begins at the airport and ends at the end of a tour.

The distinction drives everything. An officer abroad is alone in a room with a
counterpart, speaks under instruction written two days ago in another country,
is told things nobody will ever write down, and is answerable in a language
that is not his own for a position he did not draft. Those four facts are the
syllabus.

### What the reader can do at the end

- Write an instruction to a system that cannot be satisfied loosely.
- Deliver a demarche in the words a capital sent, and record the response in
  the counterpart's own words.
- Negotiate with a position whose conditions survive compression.
- Answer an unscripted question in public, in English, without conceding
  anything he has not been authorised to concede.
- Say "I do not know yet" in a form that is true at six o'clock as well as at
  nine.
- Hand a post over so that a successor's first fortnight is survivable.

---

## 2. The world

Nothing in the series names a real state other than Syria, a real official, a
real company, a real product, a real platform or a real model. The invented
geography carries every counterpart:

**States and bodies**: Verenia, Astrene, Oristan, Kavara, Lysmark, Tarnia,
Halmar, Doravia, Solenne, and the Regional Council.
**Cities**: Calmar (embassy), Ostport (consulate general), Rhene (permanent
mission and conference venue), Marnach.

**The cast of eleven**, who recur across all six books:

| Name | Post |
|---|---|
| Ambassador Walid Hourani | head of mission, Calmar |
| Dr Suhair Kanaan | deputy head of mission |
| Nour Ajami | third secretary, Calmar |
| Bassel Tannous | consul, Ostport |
| Rim Haddad | consular assistant, Ostport |
| Ziad Mikhail | commercial attaché |
| Layla Sayegh | press and cultural attaché |
| Firas Obeid | administration |
| Tarek Sabbagh | protocol |
| Hala Darwish | delegate to the Regional Council, Rhene |
| Dalia Khoury | desk officer, the capital |

Three refusals hold across all sixty units and are enforced by the QA gates:

- **No real organisation, product, platform or model is named**, anywhere, in
  any figure or any line of prose (gates 12 and 16).
- **No serving official, no real state's position, no live political dispute**
  (the POLITICS gate). Where the past is the subject — Book 6, Unit 4 — the
  teaching is about *how* an officer answers from his own institution's
  records, never about what the answer is.
- **No capability forecasting** (gate 17). The books state what systems did in
  the documented cases they describe, and never what they will do next year.

---

## 3. The six books

| # | Level | Title | Words | Measured mean sentence length |
|---|---|---|---|---|
| 1 | A2.1 | Arriving at Post | 54,240 | 10.48 (band 8.5–12.5) |
| 2 | A2.2 | Representing | 53,911 | 11.56 (band 8.5–12.5) |
| 3 | B1.1 | The Work of the Mission | 55,195 | 12.37 (band 11.5–16.5) |
| 4 | B1.2 | Out in the Country | 55,193 | 12.59 (band 11.5–16.5) |
| 5 | B2.1 | Negotiating Abroad | 57,069 | 16.91 (band 15.0–21.0) |
| 6 | B2.2 | Speaking for the Country | 58,827 | 16.64 (band 15.0–21.0) |

Each book is ten units; each unit is twelve parts and roughly 5,000 words of
student-facing material with fifteen original figures and twenty-six answer-key
lines.

**Book 1 · Arriving at Post** — the first six weeks. Accreditation, a flat, the
front desk, the diary, the first email home, the first report.

**Book 2 · Representing** — the officer as the face of a state. The national
day, the speech of four minutes, the host's press, the dinner table, the
difficult guest, the note of a conversation.

**Book 3 · The Work of the Mission** — the machinery. Notes verbales,
consular cases, visas refused, a death abroad, a prisoner, the registry, the
things that must not leave the building.

**Book 4 · Out in the Country** — the officer away from the capital. Field
visits, regional authorities, trade enquiries at the door, universities, a
local journalist, a new law nobody has read, heritage and provenance, what a
week was worth.

**Book 5 · Negotiating Abroad** — instructions, bilaterals, the margins of a
conference, a memorandum of understanding, counting votes, a demarche, the gap
between the instruction and the room, joint drafting, honest reporting, and
what was actually agreed.

**Book 6 · Speaking for the Country** — the public face, and the hardest
English in the course. An interview request, three minutes on a panel, a
doorstep, a question about the past, correcting a false claim without
amplifying it, a crisis at post, a community meeting, saying you do not know,
a handover note, the end of a tour.

---

## 4. The three locked ladders

Every unit is the intersection of three progressions, enforced by exact-string
comparison against `series.py` on every build (gates 13, 19 and 20).

1. **An AI capability.** Sixty distinct capabilities, each used once in the
   series: a translation you can check; a telephone message written down
   correctly; comparing two texts word by word; counting votes without
   pretending to know; a demarche delivered exactly as instructed; the first
   hour of a crisis at post; saying you do not know yet, and meaning it; what a
   machine cannot do for a representative.

2. **A grammar point.** Sixty distinct points, each chosen because it is where
   an imprecise instruction fails: the present simple for routine and fact;
   prepositions of time; modals of deduction; conditionals in negotiation;
   nominalisation in a written position; cleft sentences; authority in drafted
   text (shall, is to, may); reference and substitution; reported speech in a
   record of a negotiation; the subjunctive in formal requirement; the passive
   to place and to withhold responsibility; the third conditional and the
   language of regret; ellipsis and what must never be left out; restraint.

3. **A precision fault.** Eight faults, introduced in a fixed order and
   available only in the books that have reached them: unscoped set, unbounded
   quantity, unstated criterion, undefined done, ambiguous referent, missing
   condition, unstated exception, hidden assumption. Every Brief Lab diagnoses
   exactly three fault types, two instances each. Series distribution after
   rebalancing: 39 / 35 / 39 / 17 / 14 / 12 / 12 / 12 labs.

---

## 5. The twelve-part unit

| Part | Name | What it does |
|---|---|---|
| 1 | The Situation | hero figure, warm-up questions, the reading |
| 2 | Comprehension | five exercise types, including a classify table |
| 3 | Vocabulary | twenty terms with definitions, a figure, two exercises |
| 4 | Grammar | the rule, a LOOSE/PRECISE figure, nine gaps, six choices |
| 5 | Dialogues | two dialogues of twelve lines, with comprehension |
| 6 | Speaking | three pair tasks |
| 7 | The Capability | the extension reading, a data figure, a boundary box |
| 8 | Writing | a six-line tasking scaffold with a model |
| 9 | The Skill | how to use the capability, what to say, what it cannot do |
| 10 | **On Your Feet** | an unscripted spoken round (new in this series) |
| 11 | Review | reading, listening, speaking, writing, vocabulary, grammar |
| 12 | Can-do | five statements the reader ticks |

Plus, in every unit, **The Decision Room** (a case with an exhibit, three
voices, a five-step analysis and a documented outcome) and **the Brief Lab**
(a six-line instruction as it was actually given, what came back, the six
diagnosed faults, and a rewrite on the scaffold).

The six-line tasking scaffold is identical in all sixty units:
**Purpose · Scope · Inputs · Criteria · Done · Fallback.**

---

## 6. The extra part: On Your Feet

The earlier series train document production — the brief, the submission, the
telegram, the position. An officer abroad also has to produce *unscripted
spoken English*, under pressure, in front of people who will repeat it, with no
time to draft and no opportunity to correct.

**Part 10 · On Your Feet** gives every unit one spoken round:

- a situation, in two paragraphs, with the room and the audience described;
- a three-rung escalation figure showing what each turn is doing;
- three turns from an interlocutor, read aloud by a partner, answered
  immediately and out loud with nothing written down first;
- six pieces of **holding language you can use while you think**;
- a red box headed **WHAT YOU MUST NOT SAY**, which always contains a negation;
- six questions to answer afterwards in the student's own words;
- a five-row score sheet ticking what a good answer actually did.

The rounds escalate across the series: at A2.1 a visitor asks where the
consular section is; at B2.2 a chair asks for a position on a decree published
two hours earlier, an interviewer opens with a remark made at a reception, and a
relative at a rear gate asks about her brother. QA gate 23 checks every round
for completeness, for a negation in the red line, for distinct titles, and that
no holding phrase is reused more than twice in a book.

---

## 7. Quality assurance

**Twenty-three per-book gates and three series gates**, all of which pass on
the delivered build. Representative gates:

| # | Gate | What it enforces |
|---|---|---|
| 1 | Structure | twelve parts, fifteen figures, twenty-six key lines per unit |
| 2 | Register | measured mean sentence length inside the CEFR band for the book |
| 5 | Vocabulary | twenty terms per unit, 1,200 unique across the series |
| 8 | Decision Room | exhibit, three voices, five analysis steps aligned to the ladder |
| 12 | Neutrality | no loaded vocabulary, no advocacy |
| 14 | Redundancy | no gap stem used more than twice, no duplicated prose sentence |
| 15 | Precision | no model answer contains an unquantified vagueness |
| 16 | No products | no organisation, platform, product or model named |
| 17 | No forecasting | no claim about future capability |
| 18 | Brief Lab | three fault types, two each, within the book's ladder |
| 20 | Capability | the AI point carried in the extension, the skill and the narrative |
| 21 | Boundary | a boundary line in every unit, stating what the capability cannot do |
| 22 | Dissent | at least four dialogues per book end on an unresolved objection |
| 23 | On Your Feet | completeness, a negation in the red line, no reused holding phrase |

Series gates: every vocabulary term unique across 1,200; every grammar point
and every AI capability used exactly once across sixty units; each of the eight
faults diagnosed in at least twelve of the sixty labs; across sixty Decision
Rooms, at least twenty in which the senior figure was wrong and at least twelve
in which the sceptic was right and the plan was dropped.

**Dissent is a quota, not an accident.** 33 of the 60 cases end with the senior
officer's instinct overruled by the record; 44 end with a sceptic vindicated.
The books do not teach that systems are to be trusted, and they do not teach
that they are to be avoided.

### Vocabulary scope

Uniqueness is enforced **within this series**: 1,200 distinct terms, no term
taught twice. Overlap with the Foreign Ministry series is permitted and
deliberate — the audiences differ, the levels differ (A2.1–B2.2 here against
B1.1–C1.2 there), and a consul abroad needs *a muster* and *a wardens' network*
whether or not a desk officer in the capital has met them.

---

## 8. How it was built

A single Python harness, parameterised by field:

| File | What it does |
|---|---|
| `series.py` | the field: cast, world, books, three ladders, bands, caps |
| `units/<CODE>/uNN.py` | one unit of content as a `U = dict(...)` |
| `render.py` | OOXML by direct formatting only — no Word styles |
| `figs.py` | figure generators (ladders, splits, data tables, spec cards) |
| `art.py` | SVG → PNG at 3000px, with real text metrics |
| `build.py` | assembles the twelve parts of a unit |
| `make.py` | builds a book's `.docx` |
| `check.py` | per-unit check while drafting |
| `qa.py` | the twenty-three gates and the three series gates |
| `fulltext.py` | the full student text as Markdown |
| `align.py` | the sixty-row alignment table |

Every paragraph carries its own shading, spacing and indents, so the documents
open identically in Word, LibreOffice and Pages with no style dependencies.
PDFs are produced by LibreOffice headless from the same `.docx` files, so the
two formats cannot diverge.

Replacing `series.py` and a handful of constants in `make.py` produces a new
field series. That is how three series now exist.

---

## 9. What is in the delivered package

```
English_for_Syrian_Diplomats/
├── 01_Word_DOCX/          six .docx files, one per book
├── 02_PDF/                six .pdf files, same content
├── 03_Full_Text_Markdown/ six .md files, the complete student text
├── 04_Course_Documentation/
│   ├── PLAN.md            the design brief written before the build
│   ├── ALIGNMENT.md       sixty rows: unit × capability × grammar × faults
│   ├── BUILD_RECORD.md    this file
│   └── vocab_ledger.json  1,200 terms, each with its unit
└── README.md              what to open first
```

Final figures: **six books · sixty units · 334,435 words · 918 figures ·
1,200 vocabulary terms · 60 grammar points · 60 AI capabilities · 1,560 answer
key lines.** `python3 qa.py all` → **ALL CHECKS PASS**, no warnings.
