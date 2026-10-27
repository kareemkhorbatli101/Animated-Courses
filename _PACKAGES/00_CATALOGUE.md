# Every book — the complete catalogue

**Author: Mo (Mohamad Khorbatli).**

**43 books · 439 units · 18,643 pages · 17 packages, in this one file.**

Every page figure here is **measured from the built document**. Nothing is estimated, and where
a book lacks something a teacher would expect, it says so.

**How this is packaged.** Each of the 17 zips beside this file is a complete, self-contained
package. A series ships as one package; a book that is not part of a series ships in its own.
Two editions of the same book — a Syria Edition and an International Edition built as
structural twins — ship together, because they are one book in two settings and a teacher uses
them interchangeably. **Unzip only the ones you need; each stands alone.**

---

## 1 · The graded series — now complete

| Package | Books | Units | Pages |
| --- | ---: | ---: | ---: |
| `Proactive-English_Syria-Edition_COMPLETE-SERIES.zip` | **16** | **180** | **12,362** |

Two strands on one spine, eight levels: **Proactive Business English** at A1, A2, B1 and B2,
and **Proactive English** (general) at A2, B1, B2 and C1. **32 bound volumes** — a Student's
Book and a separate Answer Key for every book — plus both tests and both test keys per book,
the per-unit files, every level's plan and handover, the build pipelines, and the Series Bible.

⚠ **The sixteenth book is now in place.** General A2 Book 1 (Units 1–12, 368pp + 197pp) was
found in the production handover that started the parallel track and has been added at
`01_Proactive-English_General/A2_Book-1_Units-01-12/`. **It is the one book in the series not
built in this repository**, and its folder holds two bound volumes and a note instead of the
usual six files and a `units/` directory — both its tests are bound *inside* the Student's Book
and its per-unit sources never existed here. The book itself is complete: twelve units, both
tests, every answer. The folder's own note says all of this.

---

## 2 · The professional books — two editions each

Eight books, each in a **Syria Edition** and an **International Edition**, built as exact
structural twins: the same book unit for unit and exercise for exercise, with only the setting
changed. The Syria Edition runs in Damascus, Aleppo and Homs; the International Edition moves
through ten non-English-speaking countries, one per unit. **The matched page counts are the
proof, and they were measured, not assumed.**

| Package | Level | Units | Pages | Each edition |
| --- | --- | ---: | ---: | ---: |
| `English-for-Architects_A2_Both-Editions.zip` | A2 | 20 | 502 | 251 |
| `English-for-Business-Managers_A2_Both-Editions.zip` | A2 | 20 | 504 | 252 |
| `English-for-Content-Creators_A2_Both-Editions.zip` | A2 | 20 | 504 | 252 |
| `English-for-Logistics-Management_A2_Both-Editions.zip` | A2 | 20 | 504 | 252 |
| `English-for-Office-Managers_A2_Both-Editions.zip` | A2 | 20 | 504 | 252 |
| `English-for-Quality-Assurance_A2_Both-Editions.zip` | A2 | 20 | 504 | 252 |
| `English-for-Tour-Guides_A2_Both-Editions.zip` | A2 | 20 | 502 | 251 |
| `English-for-Tourism-Police_A2_Both-Editions.zip` | A2 | 20 | 502 | 251 |

All sixteen books carry **Appendix A** (audio scripts) and **Appendix B** (a full answer key)
bound into the Student Book.

---

## 3 · The multi-book series

| Package | What it is | Books | Units | Pages |
| --- | --- | ---: | ---: | ---: |
| `English-for-International-Journalists_B1_Books-1-and-2.zip` | Book 1 (226pp) then Book 2 (323pp), same newsroom and cast, B1 | 2 | 20 | 549 |
| `English-for-Foreign-Ministry-Staff_A2-to-B1.1.zip` | the A2 book (133pp, 4 units) then B1.1 (200pp, 5 units) which continues it | 2 | 9 | 333 |
| `English-for-Cybersecurity_Syria_Standard-and-Illustrated.zip` | the A2 text (251pp) and an illustrated A2→B1 book (142pp) with its own figure set | 2 | 20 | 393 |

The Journalists books print their answers **inside each unit** at the point of use rather than
in an appendix. The Foreign Ministry books and Cybersecurity Book 1 carry Appendix A and B.

---

## 4 · The standalone books

| Package | Level | Units | Pages | Answer key |
| --- | --- | ---: | ---: | --- |
| `English-for-NGOs-and-International-Organizations_A2.zip` | A2 | 10 | 257 | Appendix A + B |
| `English-for-Accountants_B1_International.zip` | B1 | 10 | 247 | Appendix A + B + C |
| `English-for-Business_B1_International.zip` | B1 | 10 | 190 | ⚠ none |
| `English-for-Media-and-Communications-2_B1_International.zip` | B1 | 10 | 152 | ⚠ none |
| `English-for-Banking-and-Finance_B1_International.zip` | B1 | 10 | 134 | ⚠ none |

⚠ **The NGO book is worth singling out.** Its measured design system is what the eight
twin-edition professional books in section 2 are laid out on, so it is the parent of that whole
family even though it ships alone.

---

## 5 · ⚠ The four books with no answer key

Stated here rather than left to be discovered:

| Book | Pages |
| --- | ---: |
| English for Business · International | 190 |
| English for Media and Communications 2 · International | 152 |
| English for Cybersecurity Personnel · Illustrated · Syria | 142 |
| English for Banking & Finance · International | 134 |

Their units carry model answers and self-check boxes where a task has one right answer, but
there is no appendix of answers and no separate key. **A teacher can teach from any of them as
it stands; a learner working alone cannot mark their own work.** Each affected package repeats
this notice. The key can be written from the unit source in that package's `03_Source/` — the
other thirty-nine books show the form it should take.

---

## 6 · What is inside each package

The graded series has its own structure, described in its own index. **Every professional-book
package is laid out identically**, so once you have opened one you know them all:

```
00_START-HERE.md     what the package holds, measured, and what it lacks
01_Student-Books/    the finished book(s), .docx, ready to print or teach from
02_Plans/            the adaptation plan for each book
03_Source/           one zip per book: unit source text, build scripts, QA harness
```

The content is plain text with typographic markers — `@UNIT`, `@EX`, `@GRAMMAR`, `@MODEL` and
so on — which the build scripts turn into the .docx.

⚠ **The QA harness in each book is not a spell-checker.** It checks structure: that every unit
has the elements its design system requires, in the right order and the right number. That is
what holds the twin editions identical to the page, and it is why the counts in section 2 come
out in matched pairs rather than merely close.

---

## 7 · The whole set, by size

| File | Size |
| --- | ---: |
| `Proactive-English_Syria-Edition_COMPLETE-SERIES.zip` | 48 MB |
| `English-for-International-Journalists_B1_Books-1-and-2.zip` | 23 MB |
| `English-for-Business_B1_International.zip` | 22 MB |
| `English-for-Banking-and-Finance_B1_International.zip` | 15 MB |
| `English-for-Cybersecurity_Syria_Standard-and-Illustrated.zip` | 4.1 MB |
| the eight twin-edition professional packages | 782–796 KB each |
| `English-for-Foreign-Ministry-Staff_A2-to-B1.1.zip` | 617 KB |
| `English-for-NGOs-and-International-Organizations_A2.zip` | 388 KB |
| `English-for-Media-and-Communications-2_B1_International.zip` | 284 KB |
| `English-for-Accountants_B1_International.zip` | 273 KB |

The three large professional packages are large because their source carries figure and image
assets, not because the books are longer — Banking is the shortest book in the catalogue at
134 pages.
