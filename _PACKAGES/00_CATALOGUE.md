# Every book built in this session — the complete catalogue

**Author: Mo (Mohamad Khorbatli).**

**42 books · 427 units · 18,078 pages · 17 packages.**

Every page figure in this catalogue is **measured from the built document**. Nothing here is
an estimate, and where a book is missing something a teacher would expect, it says so.

**The rule for how these are packaged:** a series ships as one package; a book that is not
part of a series ships in its own. Two editions of the same book — a Syria Edition and an
International Edition built as structural twins — ship together, because they are one book
in two settings and a teacher uses them interchangeably.

---

## 1 · The graded series

| Package | Books | Units | Pages |
| --- | ---: | ---: | ---: |
| **Proactive English · Syria Edition · THE COMPLETE SERIES** | **15** | **168** | **11,797** |

Two strands on one spine, eight levels: **Proactive Business English** at A1, A2, B1 and B2,
and **Proactive English** (general) at A2, B1, B2 and C1. 30 bound volumes — a Student's Book
and a separate Answer Key for every book — plus both tests and both test keys per book, the
per-unit files, every level's plan and handover, the build pipelines, and the Series Bible.

⚠ **This is 15 books of a 16-book series.** General A2 Book 1 (Units 1–12) was written before
this repository existed and only ever arrived as handover files; the package's own index says
where it drops in. Everything else in both strands was built here.

---

## 2 · The professional books — two editions each

Eight books, each in a **Syria Edition** and an **International Edition**, built as exact
structural twins: the same book unit for unit and exercise for exercise, with only the setting
changed. The Syria Edition runs in Damascus, Aleppo and Homs; the International Edition moves
through ten non-English-speaking countries, one per unit. **The identical page counts are the
proof, and they were measured, not assumed.**

| Package | Level | Units | Pages | Each edition |
| --- | --- | ---: | ---: | ---: |
| **English for Architects** | A2 | 20 | 502 | 251 |
| **English for Business Managers** | A2 | 20 | 504 | 252 |
| **English for Content Creators** | A2 | 20 | 504 | 252 |
| **English for Logistics Management** | A2 | 20 | 504 | 252 |
| **English for Office Managers** | A2 | 20 | 504 | 252 |
| **English for Quality Assurance Professionals** | A2 | 20 | 504 | 252 |
| **English for Tour Guides** | A2 | 20 | 502 | 251 |
| **English for Tourism Police** | A2 | 20 | 502 | 251 |

All sixteen books carry **Appendix A** (audio scripts) and **Appendix B** (a full answer key)
bound into the Student Book.

---

## 3 · The multi-book series

| Package | What it is | Books | Units | Pages |
| --- | --- | ---: | ---: | ---: |
| **English for International Journalists** | Book 1 (226pp) then Book 2 (323pp), same newsroom and cast, B1 | 2 | 20 | 549 |
| **English for Foreign Ministry Staff Members** | the A2 book (133pp, 4 units) then B1.1 (200pp, 5 units) which continues it | 2 | 9 | 333 |
| **English for Cybersecurity · Syria** | the A2 text (251pp) and an illustrated A2→B1 book (142pp) with its own figure set | 2 | 20 | 393 |

The Journalists books print their answers **inside each unit** at the point of use rather than
in an appendix. The Foreign Ministry books and Cybersecurity Book 1 carry Appendix A and B.

---

## 4 · The standalone books

| Package | Level | Units | Pages | Answer key |
| --- | --- | ---: | ---: | --- |
| **English for NGOs and International Organizations** | A2 | 10 | 257 | Appendix A + B |
| **English for Accountants** | B1 | 10 | 247 | Appendix A + B + C |
| **English for Business** | B1 | 10 | 190 | ⚠ none |
| **English for Media and Communications 2** | B1 | 10 | 152 | ⚠ none |
| **English for Banking & Finance** | B1 | 10 | 134 | ⚠ none |

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
| English for Banking & Finance · International | 134 |
| English for Cybersecurity Personnel · Illustrated · Syria | 142 |

Their units carry model answers and self-check boxes where a task has one right answer, but
there is no appendix of answers and no separate key. **A teacher can teach from any of them as
it stands; a learner working alone cannot mark their own work.** Each affected package repeats
this notice. The key can be written from the unit source in that package's `03_Source/` if it
is wanted — the other twenty-three books show the form it should take.

---

## 6 · What is inside each package

The graded series package has its own structure, described in its own index. **Every
professional-book package is laid out the same way:**

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
what holds the twin editions identical to the page, and it is why the page counts in section 2
come out in matched pairs rather than merely close.

---

## 7 · The packages

| File | Size |
| --- | ---: |
| `Proactive-English_Syria-Edition_COMPLETE-SERIES.zip` | 48 MB |
| `English-for-International-Journalists_B1_Books-1-and-2.zip` | 23 MB |
| `English-for-Business_B1_International.zip` | 22 MB |
| `English-for-Banking-and-Finance_B1_International.zip` | 15 MB |
| `English-for-Cybersecurity_Syria_Standard-and-Illustrated.zip` | 4.1 MB |
| `English-for-Content-Creators_A2_Both-Editions.zip` | 796 KB |
| `English-for-Logistics-Management_A2_Both-Editions.zip` | 796 KB |
| `English-for-Tour-Guides_A2_Both-Editions.zip` | 796 KB |
| `English-for-Tourism-Police_A2_Both-Editions.zip` | 795 KB |
| `English-for-Office-Managers_A2_Both-Editions.zip` | 793 KB |
| `English-for-Business-Managers_A2_Both-Editions.zip` | 790 KB |
| `English-for-Architects_A2_Both-Editions.zip` | 782 KB |
| `English-for-Quality-Assurance_A2_Both-Editions.zip` | 782 KB |
| `English-for-Foreign-Ministry-Staff_A2-to-B1.1.zip` | 617 KB |
| `English-for-NGOs-and-International-Organizations_A2.zip` | 388 KB |
| `English-for-Media-and-Communications-2_B1_International.zip` | 284 KB |
| `English-for-Accountants_B1_International.zip` | 273 KB |

The three large professional packages are large because their source carries figure and image
assets, not because the books are longer — Banking is the shortest book in the catalogue at
134 pages.
