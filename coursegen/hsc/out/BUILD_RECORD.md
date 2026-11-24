# Build record
## English for High School Students — International Edition

Built and verified 24 November 2026.

---

## 1. What was produced

| Book | Level | Title | Words | Figures | Key lines | Pages |
|---|---|---|---:|---:|---:|---:|
| 1 | A2.1 | The School Day | 56,160 | 153 | 260 | 198 |
| 2 | A2.2 | Every Subject Has Its Own Words | 56,161 | 153 | 260 | 205 |
| 3 | B1.1 | Saying What You Think, and Why | 57,189 | 153 | 260 | 204 |
| 4 | B1.2 | Writing From What You Have Read | 57,398 | 153 | 260 | 207 |
| 5 | B2.1 | Evidence, Numbers and What They Do Not Show | 61,420 | 153 | 260 | 207 |
| 6 | B2.2 | Applying: Choosing, Writing and Being Asked Why | 61,692 | 153 | 260 | 207 |
| | | **Series** | **350,020** | **918** | **1,560** | **1,228** |

Sixty units. 1,200 distinct vocabulary terms. 60 distinct grammar points.
60 distinct AI capabilities. No term, grammar point or capability is
repeated anywhere in the series.

## 2. Register bands

Mean sentence length is measured across the reading passage, the
capability text, the tasking body and the case brief of every unit, and
the book mean must fall inside its band.

| Book | Level | Band | Book mean | Cap | Over cap |
|---|---|---|---:|---:|---:|
| 1 | A2.1 | 8.5 – 12.5 | 11.48 | 26 | 7 (0.8%) |
| 2 | A2.2 | 8.5 – 12.5 | 11.85 | 26 | 18 (2.2%) |
| 3 | B1.1 | 11.5 – 16.5 | 13.19 | 34 | 14 (1.9%) |
| 4 | B1.2 | 11.5 – 16.5 | 14.30 | 34 | 15 (2.0%) |
| 5 | B2.1 | 15.0 – 21.0 | 17.89 | 44 | 13 (1.8%) |
| 6 | B2.2 | 15.0 – 21.0 | 18.14 | 44 | 13 (1.9%) |

The gate permits a tail above the cap and fails a book only above five
per cent. The worst book in the series sits at 2.2 per cent. Of the eighty
over-cap sentences in the gate-measured prose of all six books, sixty-two
are the university adviser's statistical rebuttal in the Decision Room,
which is a single dense sentence of counts by design; seven are case
outcomes; eight are dialogue lines; two are capability texts; and one is a
case brief. **None is in a reading passage.**

## 3. The gates

Every book passed 23 per-book gates. The series passed both series gates.
Final run: **ALL CHECKS PASS**, with no warnings on any book.

Per book, among others: the register band; the figure count; the key-line
count; vocabulary distinctness within the book and against every earlier
book; vocabulary exercise targets inside the unit's own table; figure
labels never teaching a term introduced later; the classification task
shape; neutrality of language about people; no product, model or platform
named; no forecast of future capability; precision of the twenty model
answers against a list of unquantified vague words; the redundancy scan
for repeated gap stems and duplicated prose; the grammar and capability
ladders in order; a boundary line on every capability; dissent; and the
series signature in all ten units.

**Series gate 19 — the eight fault types across sixty Brief Labs**
(each needs at least twelve):

| Fault | Labs |
|---|---:|
| unstated criterion | 39 |
| unscoped set | 33 |
| unbounded quantity | 32 |
| hidden assumption | 16 |
| undefined done | 15 |
| ambiguous referent | 15 |
| missing condition | 15 |
| unstated exception | 15 |

**Series gate 22 — dissent across sixty Decision Rooms**: the senior
figure was wrong in 60 cases (20 needed) and the sceptic was right in 60
(12 needed). Every one of the sixty cases ends with the objection
answered by evidence rather than by authority, and every unit has one
dialogue that ends on an objection nobody resolves.

## 4. The research run

The course was designed after a research pass on the two assessments it
prepares for indirectly. The single most consequential finding was that
the four-skill proficiency test most widely used for study in English was
**redesigned on 21 January 2026**: integrated speaking and writing tasks
no longer exist, and the current paper is built from short-response,
email, academic-discussion, listen-and-repeat and interview tasks. Most
published preparation material still teaches the superseded format.

The course was therefore designed against the current shape of both
assessments rather than against the familiar one. `COVERAGE.md` records
the mapping, with the caveat that figures for both assessments came from
third-party summaries and should be re-verified against the awarding
bodies' own current documentation before the course is marketed as
preparation for either.

Neither assessment is named anywhere in the sixty units. No test technique
is taught anywhere.

## 5. Verification steps run

- `check.py` on each of the sixty units as it was written: word count,
  figure count, key-line count, mean sentence length, and the Brief Lab
  fault distribution.
- `free.py` on every unit's twenty vocabulary terms before writing, against
  the whole-series ledger. Seven clashes were caught this way and the terms
  renamed.
- `fixcase.py` and `mcqfix.py` on each book before building.
- `qa.py` per book, then `qa.py all` for the series gates.
- `diag2.py` per book for the redundancy warnings: repeated gap stems,
  duplicated prose and over-long sentences. All cleared.
- `align.py` for the alignment table: 0 units unwritten.
- `fulltext.py` per book: six full-text records, 5,878 to 5,928 lines each.
- `soffice` conversion run **one book at a time**, because a batch
  conversion has previously exited zero having silently skipped a file.
- `pdfinfo` on all six PDFs to confirm page counts at the file level.

## 6. Faults found and fixed during the build

Thirty-one defects were caught by the gates and corrected. The recurring
kinds: a `hero` tuple missing its bars list; redlines under the twelve-word
minimum; vocabulary terms clashing with an earlier book; a classification
task with four fault types instead of three; model answers containing an
unquantified vague word; identical gap stems across three exercises in one
unit; duplicated prose sentences across two units; one book's mean sentence
length above its band, corrected by sentence splitting; sentences over the
B2 cap; and one invented capitalised word read by the name-consistency gate
as a character.
