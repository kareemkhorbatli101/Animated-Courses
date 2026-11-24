# Build record — English for College Students, International Edition

**Built:** 24 November 2026
**Result:** `RESULT : ALL CHECKS PASS` on all six books and both series gates,
with no warnings and no diagnostics.

---

## What was built

| Book | Code | Units | Words | Figures | Key lines | Mean sentence | Over cap |
|---|---|---|---|---|---|---|---|
| 1 · A2.1 The First Weeks | A21 | 10 | 59,213 | 153 | 260 | 10.98 (band 8.5–12.5) | 2 (0.3%) |
| 2 · A2.2 Lectures, Notes and the Reading List | A22 | 10 | 59,882 | 153 | 260 | 11.56 (band 8.5–12.5) | 11 (1.5%) |
| 3 · B1.1 Saying What You Think in a Seminar | B11 | 10 | 62,603 | 153 | 260 | 13.68 (band 11.5–16.5) | 0 |
| 4 · B1.2 Assignments, Sources and the Deadline | B12 | 10 | 62,878 | 153 | 260 | 13.89 (band 11.5–16.5) | 0 |
| 5 · B2.1 When It Goes Wrong | B21 | 10 | 66,597 | 153 | 260 | 16.17 (band 15.0–21.0) | 0 |
| 6 · B2.2 The Dissertation, the Viva and What Comes Next | B22 | 10 | 65,640 | 153 | 260 | 16.17 (band 15.0–21.0) | 0 |
| **Series** | | **60** | **376,813** | **918** | **1,560** | | |

Sentence caps are 26 words at A2, 34 at B1 and 44 at B2. The two residual A2
over-cap sentences and the eleven in Book 2 are table rows and statistical
end-lines, where splitting would have broken a figure.

---

## The twenty-three per-book gates

Each gate is run on all ten units of a book and must return no problems.

1. **Structure** — ten units, 153 figures (150 unit + 2 cover + 1 cast), twelve
   parts present in every unit
2. **Answer key** — ten unit headings, 260 exercise blocks, printed key
   distribution balanced four ways and two ways
3. **Vocabulary** — exactly 20 terms per unit, 200 per book, no repeats inside
   the book, no term taught in an earlier book, every exercise target present in
   the unit's own table, every gloss more than one bare word
4. **Classify task** — four categories, six items, every category used
5. **Grammar exercises** — nine gap items, six contrast pairs, correct answer
   always first in the source and shuffled on the page
6. **Dialogue parity** — 12 to 13 turns per scene, two scenes per unit
7. **Speaking parity** — three paired tasks per unit, six items each
8. **Can-do statements** — five per unit
9. **Register and density** — mean sentence length inside the level's band,
   over-cap sentence proportion reported, reading words per unit within range
10. **Figures** — fifteen per unit, every figure captioned, no figure label
    teaching a term before its unit
11. **Data points sourced** — two per unit, each with a source line
12. **Invented names** — every institution, fund and board consistent across
    the book and absent from the real world
13. **Neutrality** — no pejorative term applied to a person or a group
14. **Gap stems** — no stem used more than twice in a unit, no duplicated prose
    sentence
15. **Precision of model answers** — no vague quantifier in any model answer
    without a number attached
16. **No product named** — no software, model or platform named anywhere
17. **No capability forecast** — no claim about what a system will be able to do
18. **Brief Lab integrity** — exactly three fault types, two entries each, all
    permitted at that level
19. **Fault ladder** — no fault used before the level that introduces it
20. **AI ladder** — ten capabilities in order, each carried by the extension
    reading, the tasking work and the lab
21. **Boundary line** — every capability has a stated boundary of at least
    fourteen words containing a negation
22. **Dissent** — at least four dialogues per book end on an open objection
23. **The series signature** — all ten repairs complete: a named
    misunderstanding, a three-turn ladder, six hold lines, a redline of at least
    twelve words containing a negation, and five scoring points

---

## The two series gates

**Gate 19 · the fault ladder across sixty labs.** Each of the eight named
faults must be diagnosed in at least twelve of the sixty Brief Labs.

| Fault | Labs |
|---|---|
| unscoped set | 27 |
| unbounded quantity | 30 |
| unstated criterion | 25 |
| undefined done | 26 |
| ambiguous referent | 23 |
| missing condition | 20 |
| unstated exception | 14 |
| hidden assumption | 15 |

**Gate 22 · dissent across sixty clinics.** A senior figure must be shown to be
wrong in at least twenty of the sixty Decision Room clinics, and a sceptic must
be shown to be right in at least twelve.

| Measure | Clinics | Required |
|---|---|---|
| manager or founder wrong | 60 | 20 |
| sceptic right, plan dropped | 60 | 12 |

---

## Ledgers

- **Vocabulary:** 1,200 distinct terms across six books, none repeated. Every
  term was pre-cleared against the whole-series ledger before its unit was
  written; thirteen collisions were caught at that stage and replaced.
- **Grammar:** 60 distinct points, verified distinct by set comparison.
- **AI capability:** 60 distinct capabilities, verified distinct by set
  comparison, each with its own boundary line.

---

## Build pipeline

For each book, for each unit: pre-clear the twenty vocabulary terms against the
series ledger, write the unit, run the per-unit check. After the tenth unit:
clear caches, normalise case, repair answer-key distribution, build the
document, run the twenty-three gates, run the duplicate-and-length diagnostic,
split any over-cap sentence against the level's cap, then re-check and rebuild.
After the sixth book: run the full-series pass with both series gates, write
the ledger, build the alignment table, export plain text, convert to PDF.

---

## Faults found and fixed during the build

- Eleven redlines under the twelve-word minimum, across five books — lengthened
  with their negation retained.
- One neutrality failure: a pejorative word in a Book 2 gloss and in a Book 3
  unit title. The unit was retitled *Asking the Question You Are Afraid Is Too
  Basic* and the gloss rewritten.
- One vocabulary-exercise target outside its own unit table in Book 3, and two
  in Book 6 — exercise heads rewritten to contain every word of the term in
  order.
- One Brief Lab in Book 2 with four fault types instead of three — reassigned.
- Two inconsistent invented names, both possessive forms, and one curly-
  apostrophe plural: added to the harness stoplist and the demonym list.
- One model answer in Book 6 using an unquantified adverb — replaced with a
  figure.
- Repeated gap stems in every book, caused by identical stems recurring across
  three exercise types — the review stems were diversified in each case.
- Three syntax and structure errors in unit sources, caught by the per-unit
  check before any build.

---

## Output

| Book | docx | pdf | pages |
|---|---|---|---|
| 1 · A2.1 The First Weeks | 13.0 MB | 16.9 MB | 195 |
| 2 · A2.2 Lectures, Notes and the Reading List | 13.1 MB | 17.2 MB | 197 |
| 3 · B1.1 Saying What You Think in a Seminar | 13.5 MB | 17.5 MB | 202 |
| 4 · B1.2 Assignments, Sources and the Deadline | 13.5 MB | 17.6 MB | 205 |
| 5 · B2.1 When It Goes Wrong | 13.2 MB | 17.9 MB | 208 |
| 6 · B2.2 The Dissertation, the Viva and What Comes Next | 13.3 MB | 17.8 MB | 208 |

**Total: 1,215 printed pages.**

Plain-text exports of all six books are included as `*_FULL_TEXT.md`, each
carrying the complete unit text and the printed answer key.
