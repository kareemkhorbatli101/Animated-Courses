# English for Syrian Diplomats — Syria Edition
## Design brief for a six-book course, A2.1 to B2.2

### 1. Who this is for, and who it is not for

This course is for officers who serve **outside the country**: staff posted to an embassy,
a consulate general or a permanent mission, and officials who hold a representative title
that takes them abroad — delegation members, envoys, attachés, chargés d'affaires and
those who travel to accompany or substitute for them.

It is deliberately **not** a course for all ministry staff. A desk officer in the capital
and a third secretary in a host capital do different work in different English. The officer
abroad has to do three things the officer at home does not: perform in real time in front of
people who are not obliged to be patient, operate inside a legal and social system that is
not their own, and represent a country in rooms where nobody else will correct the record.

The six books are built on those three facts.

### 2. The six books

| # | Level | Title | The question it answers |
|---|---|---|---|
| 1 | A2.1 | Arriving at Post | How does a mission work, and how do I function in it from the first morning? |
| 2 | A2.2 | Representing | What is actually happening at a reception, and what is my job in it? |
| 3 | B1.1 | The Work of the Mission | How do I serve citizens and report home accurately under volume? |
| 4 | B1.2 | Out in the Country | How do I work beyond the host ministry — regions, business, community, press? |
| 5 | B2.1 | Negotiating Abroad | How do I hold a position, draft text and report a negotiation honestly? |
| 6 | B2.2 | Speaking for the Country | How do I answer, in public, questions I did not choose? |

Each book is ten units of roughly 4,000–5,500 words, fifteen original figures per unit,
a full answer key, and one AI capability per unit taught with its boundary.

### 3. Three locked ladders

Every unit is the intersection of three sequences fixed in `series.py` before a word is
written, so that no unit can drift and no capability can be taught twice:

- **An AI capability** (60, one per unit) — drawn from practice that diplomatic services
  have actually published on: translation with a verification step, media monitoring of a
  host country, consular triage, briefing packs for a visit, document-fraud screening,
  text comparison in negotiation, interview preparation, crisis communication.
- **A grammar point** (60, one per unit) — a genuine A2→B2 syllabus, from the present
  simple and prepositions of place up to cleft sentences, the subjunctive of requirement
  and cohesion across a long spoken answer.
- **A precision fault** (8 types, each diagnosed in at least 12 of the 60 Brief Labs) —
  unscoped set, unbounded quantity, unstated criterion, undefined done, ambiguous
  referent, missing condition, unstated exception, hidden assumption.

The three are chosen so that each explains the others. The unit that teaches conditionals
teaches the fault *missing condition*, and its Brief Lab fails for want of one.

### 4. The shape of a unit — twelve parts

1. Warm Up and Read — five kinds of comprehension
2. Vocabulary — 20 key terms, taught once in the whole series
3. Grammar and Dialogues — a rule, a loose/precise contrast, two dialogues
4. Speaking
5. Extended Reading
6. Guided Writing
7. **Working with AI** — one capability, ending in a red box: WHAT THIS DOES NOT DO
8. **The Decision Room** — a five-stage case with a full thinking scaffold
9. **The Brief Lab** — task it, watch it fail, name the fault, repair it on six lines
10. **On Your Feet** — *new in this series*
11. Six-Skill Review
12. Can-Do and Foundations

### 5. The extra part: On Your Feet

The other series in this family are written for people who produce **documents**. A
diplomat abroad also produces **answers**, out loud, with no draft, to a question chosen by
somebody else, in a room where a wrong word is a position.

So every unit in this course ends its taught content with an unscripted spoken round:

- a **situation** of two short paragraphs — where you are, who is in front of you, what you
  want out of the next ninety seconds;
- a figure showing the round's **three escalating turns**;
- three **interlocutor turns**, read aloud by a partner one at a time, each harder than the
  last, the third being the one you cannot fully answer;
- **holding language** — honest phrases that buy a thinking second without conceding
  anything;
- a red box: **WHAT YOU MUST NOT SAY** — the specific red lines of that situation;
- six questions after the round, and a four-point **score sheet** of what a good answer did.

Nothing in it may be written down before it is said. The part exists to train the one skill
that document practice cannot: composing an accurate sentence at the speed of speech.

### 6. What the series refuses to do

- **No product, model or platform is ever named.** Systems appear by what they do.
- **No capability forecast.** Nothing says what these systems will do in five years.
- **No serving official, no real state's position, no live dispute.** Host states, cities,
  posts and counterparts are invented; the international system — the United Nations, the
  Vienna Conventions — is real, because a diplomat works inside it.
- **No capability without its boundary.** Part 7 always ends in WHAT THIS DOES NOT DO.
- **No unanimity.** Across the series, at least 20 Decision Rooms end with the senior
  officer wrong, at least 12 with the sceptic right, and at least 24 dialogues end on an
  objection nobody answers.

### 7. How it is checked

Twenty-three automated gates per book and three across the series, run before any page is
rendered: structure and part counts, answer-key integrity against every graded item,
multiple-choice balance, true/false balance, vocabulary uniqueness across all six books,
figure numbering and captions, Decision Room completeness, **measured** register band by
mean sentence length, dialogue parity, data-point sourcing, name and role continuity,
grammar-ladder conformity, redundancy, precision of the book's own model answers, no
vendor, no forecast, Brief Lab integrity, fault ladder, AI-ladder depth, boundary lines,
dissent quotas and On Your Feet integrity.

A book that fails one gate is not rendered.

### 8. Deliverables

Six Word masters, six PDFs, six full-text Markdown files, the sixty-row alignment table,
a build record, the machine-readable ledger, and this plan.
