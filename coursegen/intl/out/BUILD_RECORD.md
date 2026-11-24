# Build record · English for Diplomats (International Edition)

Six books, sixty units, A2.1 → B2.2. This document records what was built, how
it was built, and how it was checked.

---

## 1 · What the series is

An English course for serving diplomats of any nationality. The sending state
is never named; the officers in it are described by function — second
secretary, consul, deputy head of mission, delegate, press officer, head of
administration, senior locally engaged assistant, head of mission — and never
by nationality.

The audience assumption that shapes every page: **English is nobody's first
language in these books.** Interpreters, relay booths, machine translation,
translated agreements, subtitles, transliterated names and second-language
audiences appear in every unit, and the writing technique the course teaches
follows from that fact rather than from style.

Totals: **352,556 words · 918 figures · 1,200 vocabulary terms · 60 grammar
points · 60 AI capabilities · 1,189 PDF pages.**

| Book | Level | Title | Words | Figures | Keylines | PDF pages |
|---|---|---|---|---|---|---|
| 1 | A2.1 | The First Posting | 51,423 | 153 | 260 | 195 |
| 2 | A2.2 | The Diplomatic Round | 51,105 | 153 | 260 | 195 |
| 3 | B1.1 | Consular Work and the Public | 53,433 | 153 | 260 | 195 |
| 4 | B1.2 | Projects and Partners | 54,294 | 153 | 260 | 197 |
| 5 | B2.1 | Conferences and Negotiation | 56,361 | 153 | 260 | 205 |
| 6 | B2.2 | The Public Voice | 56,931 | 153 | 260 | 202 |

---

## 2 · The invented world

No real state is used for anything politically delicate. Nine invented
countries carry every example that could embarrass a reader of any
nationality:

**Countries** — Arvenia, Belmora, Corvadia, Dalmane, Eskavia, Fenmark, Grevia,
Harraden, Ilmaria.
**Institutions** — the Assembly, the Secretariat, the Joint Commission.
**Cities** — Varkent (the main posting), Port Sable (the consulate), Lindhall
(the Assembly), Tarrow (a regional town).

Real countries appear only in neutral, verifiable contexts. Nothing in the six
books takes a position on any actual dispute, government, religion or border.

---

## 3 · The cast

Eleven recurring people, each with a function and a book in which they lead:

| Person | Function | Leads |
|---|---|---|
| Mira Halloran | second secretary, Varkent | Book 1 |
| Daniel Osei | consul, Port Sable | Book 3 |
| Ines Pereira | deputy head of mission | throughout |
| Rashid Karam | economic and cooperation officer | Book 4 |
| Yuki Tanaka | press officer | Book 6 |
| Tomas Bergh | head of administration | throughout |
| Amara Sow | senior locally engaged assistant, Port Sable | throughout |
| Elena Duarte | delegate, the Assembly, Lindhall | Book 5 |
| Peter Novak | desk officer, the capital | throughout |
| Farida Haddad | protocol and interpreting | throughout |
| Ambassador Clara Mendel | head of mission | Book 2 and Book 6 |

Amara Sow is deliberately the most frequently right person in the series: the
locally engaged colleague who reads the original, knows what the phrase means
locally, and remembers what was promised in 2019.

---

## 4 · The three ladders

Every unit sits at a fixed point on three independent ladders, enforced from
`series.py` by exact string comparison.

**The AI capability ladder (60 points).** Each unit teaches exactly one
capability — a queue triaged across a language barrier, a translated agreement
checked against its original, a hundred pages reduced to a night's reading, the
questions a journalist in another country will ask — and states exactly where
it stops.

**The grammar ladder (60 points).** A2.1 begins with the present simple for
routine; B2.2 ends with nominalisation and summary in a final report. No point
is taught twice.

**The precision-fault ladder (8 faults).** Every Brief Lab diagnoses exactly
three fault types, two phrases each:

| Fault | Labs | First available |
|---|---|---|
| unscoped set | 49 | Book 1 |
| unbounded quantity | 20 | Book 1 |
| unstated criterion | 40 | Book 1 |
| undefined done | 12 | Book 2 |
| ambiguous referent | 12 | Book 2 |
| missing condition | 12 | Book 3 |
| unstated exception | 13 | Book 4 |
| hidden assumption | 22 | Book 4 |

---

## 5 · The six-line tasking scaffold

Taught in Part 8 of every unit, used sixty times, never varied:

**Purpose** · why, and for whom
**Scope** · what is in, and what is explicitly out
**Inputs** · what you are giving it
**Criteria** · what makes the output usable
**Done** · when, and to whom
**Fallback** · what happens where the work cannot be done as specified

The Fallback line carries most of the teaching: *where a figure cannot be
produced on the agreed rule, the row is left blank and the reason is given*;
*where a verb has no equivalent, the difference is reported rather than
smoothed*; *where I am unsure what was said, the record says that the point is
uncertain and why*.

---

## 6 · Part 10 · Across the Language Line

This edition's signature part, and the reason the series is not simply the
earlier Diplomats course with the nationality removed. Each of the sixty rounds
takes a moment at which a meaning fails between two languages and **nobody has
done anything wrong**:

- a word for *foundation* that means a membership body
- *regret* with no neutral equivalent in the language of publication
- a hearsay construction that translates as a plain assertion
- a group statement that binds only its coordinator
- *taking note* as endorsement in one procedural tradition and nothing in another
- a chair's summing-up delivered in her second language
- an acronym that travelled without its expansion
- a delivery rate that reads as condescension
- a thanks learned from a transliteration, with one vowel wrong

Each round has a three-step ladder, three turns, six repair moves, a red line
and a five-row score sheet. The red line is always double: never do the
technically wrong thing, and never humiliate the person on the other side of
the language.

---

## 7 · The harness

```
series.py     the field definition: world, cast, books, three ladders, bands
build.py      twelve-part unit builder → OOXML, direct formatting only
figs.py       figure library → SVG → PNG at 3000px via cairosvg
make.py       assembles one book: front matter, ten units, answer keys
check.py      one unit: words, figures, keylines, register, vocab clash, lab
qa.py         26 per-book gates + 3 series gates
fulltext.py   the complete student text of a book as Markdown
align.py      the sixty-row alignment table
diag2.py      repeated stems, duplicated prose, thin AI points, long sentences
free.py       pre-clears candidate vocabulary against the series ledger
```

Every `.docx` is written by direct formatting only — no Word styles — so that a
ministry or a publisher can restyle the files without inheriting anything.

---

## 8 · Register control

Mean sentence length is measured, not estimated, and each book's mean must sit
inside its CEFR band:

| Band | Required mean | A2.1 | A2.2 | B1.1 | B1.2 | B2.1 | B2.2 |
|---|---|---|---|---|---|---|---|
| A2 | 8.5 – 12.5 | 11.60 | 12.04 | — | — | — | — |
| B1 | 11.5 – 16.5 | — | — | 13.50 | 13.96 | — | — |
| B2 | 15.0 – 21.0 | — | — | — | — | 16.08 | 15.67 |

Long-sentence caps: 26 words at A2, 34 at B1, 44 at B2; no more than five per
cent of sentences may exceed the cap.

---

## 9 · The quality gates

Twenty-three gates run per book, three across the series. All pass.

Per book: word count in band · figure count · keyline count · twelve parts
present and in order · can-do statements · vocabulary count and uniqueness ·
grammar point unique · register band · long-sentence ceiling · answer-key
completeness · MCQ key validity · dialogue length · second dialogue ends open ·
speaking tasks · datapoint sourcing · neutrality (no live political reference,
no named real dispute) · no capability forecast · Brief Lab integrity · fault
ladder respected · AI ladder in order · a boundary line on every capability ·
dissent present · Part 10 complete.

Across the series: every fault type in at least twelve labs · at least twenty
clinics in which the senior officer's own plan was wrong and at least twelve in
which the sceptic was right · 1,200 distinct vocabulary terms, 60 distinct
grammar points, 60 distinct AI capabilities.

Clinic outcomes: **20 manager-wrong, 40 sceptic-right.** The ratio is
deliberate — in a course about delegation the person who wrote the instruction
is wrong often enough to be worth teaching.

---

## 10 · What was fixed during the build

A partial list, as a record of what the gates actually catch:

- `qa.py` text extraction joined adjacent table cells, producing a false
  "inconsistent invented name" on *Lindhall* + *a / an* → fixed with `' '.join`
- a meeting room "occupied until twelve" tripped the neutrality gate → reworded
- fifty-one vocabulary clashes against the series ledger, each renamed
- repeated gap stems across `c_c`, `g_a` and `rev.gram` in every book → every
  review item rewritten fresh
- A2.2 drifted to a mean of 13.40, above the A2 band → later units deliberately
  shortened to bring the book mean to 12.03
- four series gates failed at first assembly (three fault types under quota and
  too few manager-wrong clinics) → twenty-eight Brief Labs rebalanced and
  thirteen clinics retagged, each change made in the draft text as well as the
  key so that the diagnosis remains true to the instruction quoted

---

*Built and verified in one session. `qa.py all` → ALL CHECKS PASS.*
