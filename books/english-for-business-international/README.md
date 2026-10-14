# English for Business · International Edition — Student's Book

A structural twin of **EFB · Al Manzil Restaurant, Dubai (Units 1–10)**: the same course
at the same level, with the single-country frame replaced by a cross-border one. Every
structural fact about the source was measured first and then reproduced — the 53-slot
unit template, 110 illustrations, 150 tables, 100 multiple-choice stems, 50 audio tracks
and the source's own page count.

| | Source | International Edition |
|---|---|---|
| The business | **Al Manzil Restaurant**, Dubai | **Blue Door Group** — five restaurants in five countries |
| Head office | the accounts office upstairs | the **group accounts office in Lisbon** |
| Branches | *(one site)* | Lisbon · Nairobi · Istanbul · Singapore · Montréal |
| Currency | dirhams | five branch currencies, reporting in **euro** |
| Tax | one VAT rule | a different VAT/GST rule in every country |
| Month-end | one office closes its books | five branches close, then the group consolidates |
| Learner | an accountant in one country | an accountant in a group that reports across five |

Making the business a **group** is the decision the whole book turns on. Every accounting
idea the source teaches gains a second, international dimension that costs the syllabus
nothing: a sale recorded in Singapore dollars and reported in euro practises the present
tenses on exchange rates as well as routines; a month-end with five deadlines in five
time zones gives the first conditional something real to be conditional about; and
compliance with five tax authorities is why the modals of obligation matter.

## What is here

```
PLAN.md            the adaptation plan, the transposition, and 34 fidelity criteria
content/           the book itself, in a line-oriented DSL (readable as prose)
build/render.py    the design system of the source docx, decoded into OOXML
build/compile.py   DSL → Student's Book (.docx)
build/render_md.py DSL → Student's Book (.md)
build/figures.py   the drawing toolkit
build/make_figures.py  the 110 illustrations, eleven per unit
build/figures/     the generated illustrations
qa/                three automated suites + the QA report
dist/              the finished Student's Book, .docx and .md
```

## Build

```sh
python3 build/make_figures.py     # draw the 110 illustrations
python3 build/compile.py          # → dist/EnglishForBusiness_International_StudentBook.docx
python3 build/render_md.py        # → dist/EnglishForBusiness_International_StudentBook.md
python3 qa/check_parity.py        # the 53-slot template, and every structural count
python3 qa/check_texts.py         # every reading, dialogue, model and glossary, against the source's ranges
python3 qa/check_content.py       # British spelling, typography, figure use, task conventions
```

Requires `matplotlib` and `Pillow` for the illustrations; the .docx writer has no dependencies.

## The syllabus

| Unit | Grammar | Accounting |
|---|---|---|
| 1 | present simple and present continuous | the daily work of a group accounts office |
| 2 | past simple and past continuous | the day a payment system failed |
| 3 | present perfect and past simple | the record so far, and each finished year |
| 4 | the passive voice | honest records and the audit trail |
| 5 | comparatives, superlatives, modifiers | price, value and the cost per plate |
| 6 | quantifiers, articles, precise numbers | writing a figure so nobody misreads it |
| 7 | will, going to, present continuous | budgets, forecasts and assumptions |
| 8 | modals of obligation and deduction | five countries, five rule books |
| 9 | first conditional and time clauses | closing the month across five time zones |
| 10 | second conditional and wish | growth, risk, and the five values |

## The cast

**Teresa**, group financial controller, Lisbon · **Daniel**, bookkeeper, Nairobi ·
**Mei**, cashier, Singapore · **Can**, accounts payable, Istanbul · **Clara**, restaurant
manager, Lisbon · **Mr Alvarez**, who opened the first Blue Door in 2016 · **Noor**, the
new assistant.

## A note on real and invented content

The business and accounting facts are true: how VAT and GST differ, what an exchange
difference is, what an accrual is for, what an audit trail must show, and the five values
of an honest accountant — accuracy, honesty, good records, confidentiality and compliance,
serving one purpose, which is trust. Blue Door Group, its five restaurants, its staff and
every figure in the book are invented, for practice. No real company, bank, tax authority
or person is given invented words or figures, and no country is characterised: the five
cities are settings, not subjects.
