# Design document · English for the Dental and Pharmacy Professions

The architecture both series are built on. Written once, reused for Medicine,
Nursing and Hospital Management later. Every rule here exists because something
in the First Edition went wrong, or because the research in RESEARCH_NOTES.md
pointed at it.

---

## 1. Two populations, two syllabi, one inventory

| | Practitioner | Student |
|---|---|---|
| Who | qualified, linguistically weak, professionally expert | enrolled, linguistically weak **and** professionally novice |
| Their task | do the job in English | learn the subject in English, then do the job under supervision |
| Sequenced by | the patient visit and the working week | the curriculum |
| Levels | A2.1 → B2.2 | A2.2 → C1.1 (practitioner A2.1 is the shared on-ramp) |
| Dominant genres | consultation, instruction, record, letter, notice | lecture, textbook, definition, exam answer, case report, viva |
| Lexis | clinical lexis in use | clinical lexis **plus morphology as a decoding system** |

They share: one domain inventory per profession, one cast and world, one unit
skeleton, one set of level gates, one scaffolding standard, one recycling
schedule. They do not share a unit sequence, and no student unit is a
practitioner unit "made academic".

---

## 2. The unit skeleton

Identical stage order in both series; the content of each stage differs.

| # | Stage | Practitioner | Student |
|---|---|---|---|
| 1 | Warm-up | 3 questions from the learner's own practice | 3 from the lecture or clinic they are in |
| 2 | **Preview** | lexical set + phrase bank, defined, exemplified, collocated — **before any text** | the same, plus the morphology that generates more terms |
| 3 | Vocabulary | 4 tasks: recognition → matching → controlled production | 4 tasks, morphology-driven |
| 4 | Grammar | one point, drawn out of the phrase bank | the grammar of the discipline |
| 5 | **Listening ×3** | patient exchange · colleague handover · telephone | lecture extract · tutorial · clinical supervision |
| 6 | **Speaking ×3** | scripted model → substitution → role-play with a task | present a structure · explain a process · be questioned |
| 7 | **Reading ×3** | notice · record or form · professional guidance extract | textbook passage with labelled figure · case · procedure |
| 8 | **Writing ×3** | the note · the message · the letter | definition · short exam answer · case report to a rubric |
| 9 | Extras | data box · AI page with boundary line · Brief Lab (B1+) · Decision Room (B2) | the same, re-pointed at study work · Precision Lab |
| 10 | Review | unit check + spaced recycling from 3 and 7 units back | the same |

**Why Speaking sits before Reading.** The preview and listening give the
learner the language in the mouth first; the reading then consolidates it in
the eye and extends it. Writing comes last because it is the hardest output and
should draw on everything above it.

---

## 3. The two threads

Every unit advances both, and the data model records which items belong to
which so the gates can check coverage.

**Domain thread** — the physical and procedural world: anatomy and structures,
instruments, materials, equipment, imaging, prostheses, procedures, documents,
settings, roles.

**Communication thread** — the functions, across settings: greeting and
identifying · eliciting · explaining · instructing · warning · checking
understanding · reassuring · refusing · apologising · referring · handing over ·
recording · negotiating · reporting · defending a judgement.

A2 takes the concrete end of both and nothing else. Governance, accountability,
consent disputes and professional politics — the material that wrecked the First
Edition's A2 — begin at B1.2 and carry the B2 books.

---

## 4. Vocabulary architecture

Per unit, declared in the data:

- **productive core: 8–10 items.** Defined, exemplified in a sentence from the
  unit's own world, given with one collocation, practised in three task types,
  recycled on the schedule below, and assessed productively in the unit review
  and the progress test.
- **receptive set: up to 10–14 items.** Met in the texts, glossed in place and
  in the book glossary, assessed only for recognition.
- **phrase bank: 8–12 functional chunks**, treated as single items.
- **morphology (student series): 3–5 word parts** per unit from the first book,
  grouped by system.

Every item carries: headword, part of speech, a real definition in A2-plain
English, an example in use, one collocation, its set, its thread, its level of
first appearance, and its recycling slots. **An item whose "meaning" is an
aphorism rather than a definition cannot be expressed in this model, which is
the point.**

Book totals: 60–100 productive items per book is the design range, well under
the First Edition's 200 and far above its useful content.

---

## 5. Recycling schedule

Driven by the spacing evidence: three or more encounters, later gaps long,
interval *shape* deliberately not optimised.

| Encounter | Where |
|---|---|
| 1 | the unit's preview, then at least two of its tasks |
| 2 | the unit review |
| 3 | the review section of the unit 3 later |
| 4 | the review section of the unit 7 later |
| 5 | the book's end review and the progress test covering it |

The recycling gate counts encounters and measures gap length. It does not
enforce expanding intervals, because the evidence does not support one shape
over another.

---

## 6. Scaffolding standard

Every task in both series carries four things, enforced by gate:

1. **a rubric** — plain imperative, one sentence, saying exactly what to do;
2. **a worked example** — the first item done, visibly;
3. **a model** — an answer, a model text, or a model exchange;
4. **a checklist** — the success criteria the learner checks their own work against.

Nothing is left to "discuss the following". Directions name the number of items,
the form of the answer, and whether it is done alone, in pairs or in writing.

---

## 7. Level gates

Replacing gates that measured the wrong thing. Per book, per level:

| Gate | A2 | B1 | B2 | C1 |
|---|---|---|---|---|
| Mean sentence length | 8.5–12.5 | 11.5–16.5 | 15.0–21.0 | 18.0–25.0 |
| Sentence cap | 26 | 34 | 44 | 52 |
| **Concept load** | no abstract noun phrase as a headword; no governance topics | abstract permitted in one stage | unrestricted | unrestricted |
| **Lexical level** | productive items concrete and high-frequency | — | — | — |
| Dialogue turn (practitioner) | ≤ 12 words, yes/no answerable | ≤ 18 | ≤ 28 | ≤ 35 |
| Reading length ×3 (practitioner) | 220–320 words | 320–450 | 450–650 | — |
| Reading length ×3 (student) | 450–650 | 650–900 | 900–1,200 | 1,100–1,500 |
| Listening script ×3 | 180–260 | 260–400 | 400–600 | 550–800 |
| **Dissent** (an unresolved professional objection) | forbidden | from B1.2 | required | required |

Plus, at every level: the **preview gate** (no text before its set and phrases),
the **scaffolding gate** (rubric + example + model + checklist on every task),
the **recycling gate**, the **domain-coverage gate** (the inventory ticked off
across the book), the **figure gate** (count, non-decorative, captioned,
cross-referenced, alt text, licence recorded), the **3×3 gate** (three distinct
text types per skill), the **answer-key, transcript and glossary completeness
gates**, and the **Tier A sourcing gate** from SOURCE_POLICY.md.

---

## 8. What carries over from the First Edition

Kept: the harness (figure engine, answer-key assembly, rendering, ledger, QA
framework); the AI page with an explicit boundary line, from B1 up; the Brief
Lab and its eight precision faults, from B1.2 up; the Decision Room at B2; data
boxes with attributed sources; the invented-world rule.

Dropped: coined-phrase vocabulary with aphoristic glosses; A2 governance
content; the rule forcing an unresolved argument into every unit at every level;
essays about a step in place of scripted exchanges; gendered role glosses.

---

## 9. Open questions carried into the pilot

1. Whether 3 readings + 3 listenings + 3 writings + 3 speakings is teachable in
   the time a real class has, or whether the unit needs a declared core route.
   The teacher's book's two timing routes are the hedge; the pilot tests it.
2. Whether the student A2.2 reading-length band (450–650 words ×3) is too heavy
   at that level even with full preview support.
3. Whether the productive/receptive split lands at 8–10, or should be 6–8 at A2.

These are stated so the pilot can answer them with evidence rather than taste.

---

## 10. What the pilot established (measured, not projected)

Four units built end to end: Dentists 2e A2.1 units 1–2, Dental Students A2.2
units 1–2, each with teacher's notes written after it.

### The three open questions, answered

**1. Register bands must be split into production and reception.** The student
A2.2 unit failed the register gate at 14.51 words a sentence against the A2 band
of 8.5–12.5. Rewriting it into that band would have stopped it being textbook
prose, which is the thing the student series exists to teach. A learner reads
longer sentences than they produce, especially when every term has been
previewed and glossed. The gates now carry `BANDS_P` (production, the
practitioner series) and `BANDS_S` (reception, the student series), one step
wider at the same CEFR level, with a cap of 30 rather than 26 at A2. **This is
an architecture change, and it came from the pilot, not from taste.**

**2. 3×3×3×3 does not fit a ninety-minute lesson, and should not be made to.**
A unit is a bank, not a lesson plan. The teacher's book now carries two routes,
and the per-unit notes name *which* listening, reading and speaking to keep on
the short route and why. The three-of-each standard stays: it is what makes the
book usable across a term rather than a week.

**3. The productive core is right at 8–10.** Both A2 units carry eight and the
preview takes 20 minutes in the practitioner book and 22–25 in the student book.
Six would have been thin; twelve would not have fitted.

### Measurements that correct the plan's arithmetic

| | Planned | Measured |
|---|---|---|
| Words per practitioner unit | 6,000–7,000 | **6,460** |
| Words per student unit | 8,000–14,000 | **7,600** |
| Printed pages per unit | not estimated | **35** |
| Figures per unit | 24–30 | **18–20** |
| Teacher's notes per unit | 3,000–5,000 words | **1,800** |

Consequences: a ten-unit book runs to about **350 printed pages**, not the
First Edition's 200 — the skills core roughly doubles the extent. Teacher's
books are **lighter than planned**, around 20k words a title rather than 35–50k,
because the procedure is written tightly and the answer key is generated. The
student series is not dramatically longer than the practitioner series in words;
it is longer in *reading*, which is where its weight sits.

### The two timing tables

The practitioner preview takes 20 minutes; the student preview takes 22–25, for
the same eight items, because in the student series six of the eight are new
*concepts* and not only new words. The teacher's book front matter should carry
two timing tables, not one.

### What the loop caught that no gate could

Writing the teacher's notes after each unit found four things the gates passed:

- a figure sitting inside a speaking task that the task never asked anybody to
  look at (fixed: the task now requires pointing at it and naming a layer);
- a listening too long to play three times in the lesson it belongs to (fixed in
  the route, with the transcript given out on the third pass);
- a vocabulary task that asks learners to produce FDI numbers before the lecture
  that teaches the system (the rule is carried in the task instruction, so it
  works, but the numbering belongs on the preview page in the full book);
- the best text in a unit sitting third in the reading sequence, where a short
  route never reaches it.

This is the argument for the loop. Three of those four are invisible to any
automated check, and all four were found by writing down how the lesson runs.

### Carried forward as open

- the collision figure is now used in three places across two series; shared
  figures should live in one module, not be duplicated per series;
- "four six, not forty-six" is taught without its reason, and a safety point
  given without a reason is one learners drop when busy — it should become a
  line in the student book;
- three readings of 450–650 words at student A2.2 may still prove too much in
  practice; the route names one as the class text, which is the hedge.
