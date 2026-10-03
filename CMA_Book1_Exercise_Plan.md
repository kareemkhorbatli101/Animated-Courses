# Book 1 — per-exercise improvement plan

Twelve targeted passes (`cma/wsaudit.py`) over every exercise in every handout of Book 1. Each pass asks one question and, where it finds something, names the action. Severity **2** means rewrite or drop; **1** means weaken, fix in passing.

1635 exercises across 18 chapters and 112 handouts. 42 carry at least one finding; 0 carry a severe one.

## The twelve passes

| # | pass | what it asks |
|---|---|---|
| 1 | grounding in the book | is every word of it in the book? |
| 2 | relevance | does it test the accounting, or the book’s own furniture? |
| 3 | clarity | is the stem a sentence a student can read once? |
| 4 | lack of ambiguity | can exactly one option be defended? |
| 5 | sequence | does it come after the model that settles it? |
| 6 | consistency (no near-copies) | is it a near-copy of its neighbour? |
| 7 | effectiveness | does it make the student reason, or only look? |
| 8 | interest | is there a company, a decision, something at stake? |
| 9 | usefulness for the test | is it the shape the exam asks in? |
| 10 | sufficiency of directions | can a student start it without being told more? |
| 11 | student background | does it assume English or notation we have not given? |
| 12 | visual potential | would a figure carry this better than prose? |

## What the passes found, before and after

The "before" column is this same auditor run against the previous generation, recovered from git, so both columns are one ruler. A **severe** finding is one the pass says to rewrite or drop.

| pass | flagged before | flagged after | severe before | severe after |
|---|---|---|---|---|
| grounding in the book | 0 | 0 | 0 | 0 |
| relevance | 113 | 0 | 0 | 0 |
| clarity | 40 | 0 | 40 | 0 |
| lack of ambiguity | 44 | 0 | 0 | 0 |
| sequence | 0 | 0 | 0 | 0 |
| consistency (no near-copies) | 368 | 0 | 368 | 0 |
| effectiveness | 163 | 12 | 0 | 0 |
| interest | 201 | 26 | 0 | 0 |
| usefulness for the test | 64 | 0 | 0 | 0 |
| sufficiency of directions | 0 | 0 | 0 | 0 |
| student background | 29 | 0 | 29 | 0 |
| visual potential | 210 | 5 | 0 | 0 |
| **total** | **1232** | **43** | **437** | **0** |

Clean exercises: **1315 of 2115 (62%)** before, **1593 of 1635 (97%)** after.

Every severe finding is gone. What is left is 43 findings of the lighter kind, and the section below names each one.

## Handouts

### 1.1 — Who uses financial statements, and why?

_Chapter 1 · 18 exercises · 0 to change_

Nothing found.

### 1.2 — The building blocks: elements and the accounting equation

_Chapter 1 · 15 exercises · 0 to change_

Nothing found.

### 1.3 — Double entry: debits and credits

_Chapter 1 · 15 exercises · 0 to change_

Nothing found.

### 1.4 — The accrual basis and the matching principle

_Chapter 1 · 15 exercises · 0 to change_

Nothing found.

### 1.5 — Who writes the rules? U.S. GAAP and IFRS

_Chapter 1 · 14 exercises · 0 to change_

Nothing found.

### 1.6 — A first look at the four statements

_Chapter 1 · 10 exercises · 0 to change_

Nothing found.

### 1.7 — The whole chapter

_Chapter 1 · 15 exercises · 0 to change_

Nothing found.

### 2.1 — Purpose and structure of the balance sheet

_Chapter 2 · 17 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 15 | MCQ | READ THE MODEL | Which category does the book give for Allowance for credit losses? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 2.2 — Current and noncurrent items

_Chapter 2 · 17 exercises · 0 to change_

Nothing found.

### 2.3 — Classifying debt

_Chapter 2 · 12 exercises · 0 to change_

Nothing found.

### 2.4 — Other presentation matters

_Chapter 2 · 11 exercises · 0 to change_

Nothing found.

### 2.5 — Limitations and links to the other statements

_Chapter 2 · 11 exercises · 0 to change_

Nothing found.

### 2.6 — The whole chapter

_Chapter 2 · 19 exercises · 0 to change_

Nothing found.

### 3.1 — Purpose and structure of the income statement

_Chapter 3 · 18 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 15 | MCQ | READ THE MODEL | Which category does the book give for Interest expense? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 3.2 — Building the multi-step income statement

_Chapter 3 · 14 exercises · 0 to change_

Nothing found.

### 3.3 — Unusual items and discontinued operations

_Chapter 3 · 19 exercises · 0 to change_

Nothing found.

### 3.4 — Comprehensive income

_Chapter 3 · 12 exercises · 0 to change_

Nothing found.

### 3.5 — Limitations and links to the other statements

_Chapter 3 · 11 exercises · 0 to change_

Nothing found.

### 3.6 — The whole chapter

_Chapter 3 · 17 exercises · 0 to change_

Nothing found.

### 4.1 — Components of equity and the statement of changes in equity

_Chapter 4 · 19 exercises · 0 to change_

Nothing found.

### 4.2 — Issuing and buying back shares

_Chapter 4 · 15 exercises · 0 to change_

Nothing found.

### 4.3 — Dividends, stock dividends and stock splits

_Chapter 4 · 13 exercises · 0 to change_

Nothing found.

### 4.4 — Retained earnings

_Chapter 4 · 18 exercises · 0 to change_

Nothing found.

### 4.5 — Limitations and links to the other statements

_Chapter 4 · 11 exercises · 0 to change_

Nothing found.

### 4.6 — The whole chapter

_Chapter 4 · 20 exercises · 0 to change_

Nothing found.

### 5.1 — Purpose and structure of the statement of cash flows

_Chapter 5 · 18 exercises · 0 to change_

Nothing found.

### 5.2 — Classifying cash flows

_Chapter 5 · 17 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 15 | MCQ | READ THE MODEL | Which activity does the book give for Interest paid on a bank loan? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 5.3 — The indirect method

_Chapter 5 · 12 exercises · 0 to change_

Nothing found.

### 5.4 — The direct method and required disclosures

_Chapter 5 · 11 exercises · 0 to change_

Nothing found.

### 5.5 — Limitations and links between the four statements

_Chapter 5 · 17 exercises · 0 to change_

Nothing found.

### 5.6 — The whole chapter

_Chapter 5 · 20 exercises · 0 to change_

Nothing found.

### 6.1 — Recognizing and measuring receivables

_Chapter 6 · 18 exercises · 0 to change_

Nothing found.

### 6.2 — The allowance for credit losses

_Chapter 6 · 18 exercises · 3 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 8 | MCQ | APPLY | Under IFRS 9, how are expected credit losses measured on trade receivables without a significant… | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 9 | MCQ | APPLY | Receivables are factored with substantial recourse. The transfer meets the three ASC 860 conditi… | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 10 | MCQ | APPLY | Spiral review (Chapter 1). Where is the allowance for credit losses reported? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |

### 6.3 — Transferring receivables: sale or secured borrowing?

_Chapter 6 · 11 exercises · 0 to change_

Nothing found.

### 6.4 — The whole chapter

_Chapter 6 · 15 exercises · 2 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 7 | MCQ | APPLY | A trade receivable is due in 60 days. At what amount is it recorded? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 8 | MCQ | APPLY | The aging shows that the allowance for credit losses should be 20,000. Before adjustment, the al… | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |

### 7.1 — Which goods belong in inventory?

_Chapter 7 · 18 exercises · 0 to change_

Nothing found.

### 7.2 — Which costs belong in inventory?

_Chapter 7 · 14 exercises · 0 to change_

Nothing found.

### 7.3 — Cost flow assumptions

_Chapter 7 · 13 exercises · 0 to change_

Nothing found.

### 7.4 — Effects on income, taxes and assets

_Chapter 7 · 11 exercises · 0 to change_

Nothing found.

### 7.5 — Inventory errors

_Chapter 7 · 11 exercises · 0 to change_

Nothing found.

### 7.6 — The whole chapter

_Chapter 7 · 20 exercises · 0 to change_

Nothing found.

### 8.1 — Which test applies?

_Chapter 8 · 18 exercises · 0 to change_

Nothing found.

### 8.2 — Lower of cost or market

_Chapter 8 · 14 exercises · 0 to change_

Nothing found.

### 8.3 — The retail inventory method and the gross profit method

_Chapter 8 · 13 exercises · 0 to change_

Nothing found.

### 8.4 — Advantages and disadvantages of the methods

_Chapter 8 · 13 exercises · 0 to change_

Nothing found.

### 8.5 — Recommending a method

_Chapter 8 · 11 exercises · 0 to change_

Nothing found.

### 8.6 — The whole chapter

_Chapter 8 · 17 exercises · 5 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 7 | MCQ | APPLY | Which basis gives the largest LCM write-down? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 8 | MCQ | APPLY | In the conventional retail method, net markdowns are: | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 9 | MCQ | APPLY | Use the Jebel Ali fire example. What is the estimated inventory at the date of the fire (whole U… | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 10 | MCQ | APPLY | When prices are rising, which is an advantage of LIFO? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 11 | MCQ | APPLY | For large volumes of identical items, the main disadvantage of specific identification is that: | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |

### 9.1 — Three categories of debt securities

_Chapter 9 · 18 exercises · 0 to change_

Nothing found.

### 9.2 — Measuring debt securities

_Chapter 9 · 13 exercises · 0 to change_

Nothing found.

### 9.3 — Credit losses on debt securities

_Chapter 9 · 11 exercises · 0 to change_

Nothing found.

### 9.4 — Equity securities and the equity method

_Chapter 9 · 11 exercises · 0 to change_

Nothing found.

### 9.5 — The whole chapter

_Chapter 9 · 20 exercises · 0 to change_

Nothing found.

### 10.1 — The cost of property, plant and equipment

_Chapter 10 · 21 exercises · 0 to change_

Nothing found.

### 10.2 — Depreciation methods and their effects

_Chapter 10 · 18 exercises · 0 to change_

Nothing found.

### 10.3 — Recommending a depreciation method

_Chapter 10 · 13 exercises · 0 to change_

Nothing found.

### 10.4 — Disposal of fixed assets

_Chapter 10 · 11 exercises · 0 to change_

Nothing found.

### 10.5 — Impairment of long-lived assets, intangibles and goodwill

_Chapter 10 · 10 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 6 | MCQ | CHECKPOINT | Which of these did this cycle settle? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |

### 10.6 — The whole chapter

_Chapter 10 · 12 exercises · 0 to change_

Nothing found.

### 11.1 — Revenue and the core principle

_Chapter 11 · 21 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 17 | MCQ | READ THE MODEL | Which category does the book give for Volume rebate (M1)? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 11.2 — Steps 1 and 2: the contract and its performance obligations

_Chapter 11 · 12 exercises · 0 to change_

Nothing found.

### 11.3 — Steps 3 and 4: the transaction price and its allocation

_Chapter 11 · 11 exercises · 0 to change_

Nothing found.

### 11.4 — Step 5: recognizing revenue over time or at a point in time

_Chapter 11 · 15 exercises · 0 to change_

Nothing found.

### 11.5 — Special situations

_Chapter 11 · 11 exercises · 0 to change_

Nothing found.

### 11.6 — Matching, contract costs and IFRS differences

_Chapter 11 · 12 exercises · 0 to change_

Nothing found.

### 11.7 — The whole chapter

_Chapter 11 · 20 exercises · 0 to change_

Nothing found.

### 12.1 — What makes a liability current

_Chapter 12 · 17 exercises · 3 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 6 | MCQ | APPLY | Which item is NOT a current liability? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 7 | MCQ | APPLY | A shop's cash register shows total receipts of $10,500, including 5% sales tax. What are sales r… | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 8 | MCQ | APPLY | Income tax withheld from employees' wages is recorded by the employer as: | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |

### 12.2 — Payroll, taxes collected and compensated absences

_Chapter 12 · 20 exercises · 0 to change_

Nothing found.

### 12.3 — Short-term debt expected to be refinanced

_Chapter 12 · 11 exercises · 0 to change_

Nothing found.

### 12.4 — IFRS and covenants

_Chapter 12 · 11 exercises · 0 to change_

Nothing found.

### 12.5 — Warranties

_Chapter 12 · 11 exercises · 0 to change_

Nothing found.

### 12.6 — The whole chapter

_Chapter 12 · 16 exercises · 0 to change_

Nothing found.

### 13.1 — Why book income and taxable income differ

_Chapter 13 · 18 exercises · 3 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 6 | MCQ | APPLY | Income tax expense on the income statement equals: | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 7 | MCQ | APPLY | Pretax income is $500,000, and there are no temporary differences. It includes $20,000 of tax-ex… | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 8 | MCQ | APPLY | Under U.S. GAAP, a tax position is recognized in the financial statements if it is: | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |

### 13.2 — Temporary and permanent differences

_Chapter 13 · 18 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 17 | MCQ | APPLY | Which type of difference does the book give for Life insurance premiums when the company is the … | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 13.3 — Measuring current and deferred taxes

_Chapter 13 · 20 exercises · 3 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 12 | MCQ | READ THE MODEL | Which amount does the book give for Income before income taxes (book)? | it reads a table that is never drawn — **add a figure of that table to the model move** |
| 13 | MCQ | READ THE MODEL | Which amount does the book give for Less: tax-exempt municipal interest (permanent)? | it reads a table that is never drawn — **add a figure of that table to the model move** |
| 14 | MCQ | READ THE MODEL | Which amount does the book give for Add: fine, not deductible (permanent)? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |
|  |  |  |  | it reads a table that is never drawn — **add a figure of that table to the model move** |

### 13.4 — Rate changes, valuation allowances, losses and presentation

_Chapter 13 · 12 exercises · 0 to change_

Nothing found.

### 13.5 — IFRS differences and disclosures

_Chapter 13 · 11 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 9 | MCQ | READ THE MODEL | Which topic does the book pair with “Record the full DTA, then a valuation allowance if realizat… | it reads a table that is never drawn — **add a figure of that table to the model move** |

### 13.6 — The whole chapter

_Chapter 13 · 15 exercises · 0 to change_

Nothing found.

### 14.1 — What is a lease?

_Chapter 14 · 14 exercises · 0 to change_

Nothing found.

### 14.2 — Finance or operating? The five criteria

_Chapter 14 · 12 exercises · 0 to change_

Nothing found.

### 14.3 — Initial measurement

_Chapter 14 · 12 exercises · 0 to change_

Nothing found.

### 14.4 — Subsequent measurement: two expense patterns

_Chapter 14 · 19 exercises · 0 to change_

Nothing found.

### 14.5 — Presentation

_Chapter 14 · 11 exercises · 0 to change_

Nothing found.

### 14.6 — Short-term leases, sale and leaseback, and IFRS 16

_Chapter 14 · 12 exercises · 0 to change_

Nothing found.

### 14.7 — The whole chapter

_Chapter 14 · 18 exercises · 0 to change_

Nothing found.

### 15.1 — Gains and losses

_Chapter 15 · 18 exercises · 0 to change_

Nothing found.

### 15.2 — Expense recognition

_Chapter 15 · 16 exercises · 2 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 14 | MCQ | READ THE MODEL | Which category does the book give for Dry-foods operating loss? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |
| 15 | MCQ | APPLY | Which idea does the book give for Immediate recognition? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 15.3 — Comprehensive income and reclassification

_Chapter 15 · 11 exercises · 0 to change_

Nothing found.

### 15.4 — Is it a discontinued operation?

_Chapter 15 · 11 exercises · 0 to change_

Nothing found.

### 15.5 — Held for sale: criteria and measurement

_Chapter 15 · 17 exercises · 0 to change_

Nothing found.

### 15.6 — Presentation and IFRS differences

_Chapter 15 · 11 exercises · 0 to change_

Nothing found.

### 15.7 — The whole chapter

_Chapter 15 · 15 exercises · 0 to change_

Nothing found.

### 16.1 — What consolidated statements are

_Chapter 16 · 18 exercises · 0 to change_

Nothing found.

### 16.2 — Two control models: VIE first, then votes

_Chapter 16 · 15 exercises · 2 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 12 | MCQ | READ THE MODEL | Which category does the book give for Listed food company (8%)? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |
| 13 | MCQ | APPLY | Which conclusion does the book give for NCI in consolidation? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 16.3 — Full consolidation, proportionate consolidation and the equity method

_Chapter 16 · 12 exercises · 0 to change_

Nothing found.

### 16.4 — The acquisition: goodwill and noncontrolling interest

_Chapter 16 · 11 exercises · 0 to change_

Nothing found.

### 16.5 — Eliminating intercompany balances and transactions

_Chapter 16 · 13 exercises · 0 to change_

Nothing found.

### 16.6 — IFRS differences and what is changing

_Chapter 16 · 18 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 11 | MCQ | READ THE MODEL | Which topic does the book pair with “Two: VIE model first, then voting interest”? | it reads a table that is never drawn — **add a figure of that table to the model move** |

### 16.7 — The whole chapter

_Chapter 16 · 17 exercises · 0 to change_

Nothing found.

### 17.1 — (i) Share-based payments and employee benefits

_Chapter 17 · 17 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 14 | MCQ | READ THE MODEL | Which category does the book give for L3 Land revaluation? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 17.2 — (ii) Intangible assets

_Chapter 17 · 16 exercises · 0 to change_

Nothing found.

### 17.3 — (iii) Inventories

_Chapter 17 · 12 exercises · 0 to change_

Nothing found.

### 17.4 — (iv) Leases: the lessee

_Chapter 17 · 11 exercises · 0 to change_

Nothing found.

### 17.5 — (v) Long-lived assets

_Chapter 17 · 11 exercises · 0 to change_

Nothing found.

### 17.6 — (vi) Impairment

_Chapter 17 · 11 exercises · 4 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 6 | MCQ | APPLY | You have just written the rule this cycle settles. What decides whether your wording is right? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 7 | MCQ | CHECKPOINT | Which of these did this cycle settle? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 10 | SORT | APPLY | Write each one under the heading it belongs to. Every item belongs to exactly one group. | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 11 | MCQ | CHECKPOINT | What is the safest way to settle a disagreement about an answer on this sheet? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |

### 17.7 — The whole chapter

_Chapter 17 · 15 exercises · 5 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 6 | MCQ | APPLY | A French subsidiary using IFRS wants to adopt LIFO to lower its taxable profit. Under IFRS, it: | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 7 | MCQ | APPLY | The extract for this question is printed with it. What is the warehouse lease expense for 2026 u… | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 8 | MCQ | APPLY | Which lessee rule exists under IFRS 16 but NOT under ASC 842? | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 9 | MCQ | APPLY | The extract for this question is printed with it. Under IFRS with the revaluation model, where d… | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |
| 10 | MCQ | APPLY | An aircraft has an engine that lasts 5 years and a body that lasts 25 years. Which statement is … | nothing in this handout yet puts the student in front of a company deciding something — **give each handout at least one applying item set at one of the book’s running companies** |

### 18.1 — Integrated thinking, integrated reporting and the integrated report

_Chapter 18 · 15 exercises · 0 to change_

Nothing found.

### 18.2 — The primary purpose

_Chapter 18 · 10 exercises · 0 to change_

Nothing found.

### 18.3 — Value creation and the six capitals

_Chapter 18 · 15 exercises · 1 to change_

| # | kind | move | exercise | finding | action |
|---|---|---|---|---|---|
| 12 | MCQ | READ THE MODEL | Which capital does the book give for Safety training for factory staff? | it asks the student to find a cell, and the model already has two such items — **keep two per model at most; the rest should apply the rule the table states** |

### 18.4 — Guiding principles and content elements

_Chapter 18 · 12 exercises · 0 to change_

Nothing found.

### 18.5 — Benefits and challenges

_Chapter 18 · 12 exercises · 0 to change_

Nothing found.

### 18.6 — Integrated reporting and sustainability disclosures

_Chapter 18 · 11 exercises · 0 to change_

Nothing found.

### 18.7 — The whole chapter

_Chapter 18 · 20 exercises · 0 to change_

Nothing found.

