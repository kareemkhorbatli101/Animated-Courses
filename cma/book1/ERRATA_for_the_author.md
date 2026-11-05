# Errata found while building the interactive site — CMA Part 1, Book 1

Three things found while building all eighteen chapters into an interactive site. Only the
first needs anything from you. Each was found by a check rather than by reading, which is why
they are worth sending: they are the kind of thing that survives proofreading.

Source: `CMA_P1_Book1_volume_v1.3.docx`, sha256 beginning `0836a0eb7cc8`.

---

## 1. Two Section Check questions offer the same option twice

**SC7-13** (Chapter 7) lists **16,000** as both option B and option C. Your key gives B.

**SC13-11** (Chapter 13) lists **357,000** as both option A and option B. Your key gives A.

In both cases a reader has four lettered choices and only three distinct answers, so one of the
four is unanswerable: a reader who works out 16,000 and picks C is right and is marked wrong.

The site cannot repair these, because the repair would be inventing a fourth number, which is
the one thing the build is not allowed to do — every string on the site has to be found in your
chapter or the build stops. So it **drops the duplicate that is not your answer** and shows
three options, all yours. If you would like a fourth distractor in either question, it has to
come from you and the site will pick it up on the next rebuild.

*How they were found:* SC7-13 was caught by a check that answers every multiple-choice question
on the site correctly and asserts that it is marked correct — it reported "chose right, verdict
said not right". SC13-11 passed every check and was found only by then scanning all eighteen
chapters for the same shape; it had been passing by luck, because the renderer happened to
resolve the click to the correct one of the two identical options. It was broken for a reader
and green for us.

---

## 2. Figure F05-12 is the Chapter 5 case exhibit, not F05-13

Chapters 2, 3 and 4 number the case exhibit `-13`; Chapter 5 numbers it `-12`. This is almost
certainly intentional (Chapter 5 has eleven numbered figures, not twelve) and is recorded only
because anything that builds a chapter from a pattern will get it wrong. Nothing needs changing.

---

## 3. 29 of 254 "wrong answer" explanations read as a clause rather than a phrase

Your template for a wrong option is "*<the wrong answer>* is wrong: this answer **<verb
phrase>**" — "this answer **counts** dividends declared as a liability", "this answer
**ignores** that maintenance is earned over time". **29 of the 254** fill the slot with a
clause instead, so the sentence does not close:

> accrue 30 and disclose the rest is wrong: this answer **there is no partial accrual rule**.
>
> rent revenue is wrong: this answer **the lessee has an expense, not revenue**.
>
> left in both balance sheets is wrong: this answer **a group cannot owe itself**.

They are spread across fifteen chapters, which is why this is offered as a note on the house
style rather than as a list of slips — at 11% it may well be deliberate, and each one reads
perfectly well if "this answer" is taken as "the trouble with this answer is that". Dropping
the two words would close all 29.

The site quotes every one of them **whole and unaltered**, so where the sentence is awkward the
awkwardness is visibly the book's and not a transcription error. Trimming the stem would read
as a fragment and rewriting it would be putting words in your mouth. The full list of 29 is
reproducible with one search of the manuscript for `is wrong: this answer` followed by a
determiner.

*A note on how this item was first written and corrected*, because it bears on how much to
trust the rest: the build's own code comment said "three of these lines", which was true when
it was written against Chapters 1 and 2 and stale by sixteen chapters. The number above was
counted across all eighteen before being sent.

---

## What the site does with all of this

Nothing is corrected silently. Every string the site shows is checked against your extracted
chapter before the build is allowed to finish, so where the manuscript and the site disagree
the build stops rather than publishing a guess. These three are the only places in eighteen
chapters where that check had something to say about the source rather than about our own work.
