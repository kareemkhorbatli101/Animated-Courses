# IELTS 2026 — Foundation 2: delivery report

**File:** `IELTS_2026_A2-B1_Foundation_2.docx` — 439 pages, 440 rendered
figures, 4.4 MB
**Level:** CEFR A2–B1 · target band 4.0–4.5 · Units 1–10
**Status:** complete, built, all gates green

---

## What this book is for

The second half of the bridge. Foundation 1 taught the shape of the paper
and the commoner half of the vocabulary Volume 1 assumes; Foundation 2
teaches the rarer half and stretches every length — passages, recordings,
writing — one step closer to the real thing. A student who finishes it can
open Volume 1 and read it, which is a claim this package **measures**
rather than asserts (see *Gate 7*).

---

## The ten units

| Unit | Theme | Technique page | Outlining page |
|---|---|---|---|
| 1 | Art and Design | The paragraph loop, now in Reading | Fill the outline: ten sentences, three main ideas |
| 2 | Music and Performance | Matching Headings: write your own heading first | Spot the overlap and spot the unequal, on one plan |
| 3 | Technology at Home | Guessing from context, in Reading this time | Essay to outline: reverse-engineer the cycle 5 model |
| 4 | Animals and Nature | Matching Information: the type with no order to lean on | Passage to outline: a whole passage in four lines |
| 5 | Cities and Neighbourhoods | Looking ahead and the loop, together, under time | Fill the outline, then write one body paragraph from it |
| 6 | Holidays and Tourism | The two routes, timed, on a four-hundred-word text | Spot the intruder and spot the overlap, on one plan |
| 7 | Clothes and Fashion | The keyword trap, taken apart | Outline to essay, then essay back to outline |
| 8 | Festivals and Traditions | **Predicting the grammar of a gap** | The one-minute outline, then speak it |
| 9 | News and Media | **Scan only when the key is rare and unique** | From passage to outline, then compare with the plan |
| 10 | Transport and Journeys | **Everything so far, under the clock** | Fill, write, outline: closing the loop |

Five cycles a unit, no cycle belonging to one module; Listening Parts 1–4
and Speaking Parts 1–3 in every unit; Task 1 forking Academic and General
Training; questions numbered continuously through the unit.

The three technique pages in bold are the ones this book adds to the
series' method:

- **Predicting the grammar of a gap.** Most completion marks are lost
  *after* the answer has been heard correctly. Four decisions before you
  write: singular or plural, is the article already there, which part of
  speech, must I change the form I hear.
- **Scan only when the key is rare and unique.** The standard advice to
  "scan" is right about a third of the time. A year, a name, a figure has
  a shape your eye can find. "The main problem" does not, and hunting for
  it costs the minutes that the hard questions needed.
- **Everything so far, under the clock.** No new technique: a full timed
  Reading section, marked by *which step you skipped* rather than by what
  the answer was. That list is what a student carries into Volume 1.

---

## The word ledger: the gap is now closed

| | |
|---|---|
| Gap into Volume 1, measured before either Foundation book | **984 types** |
| Taught in Foundation 1 | 561 head words |
| Taught in Foundation 2 | 423 head words |
| **Gap remaining** | **0** |

`ledger.py` recomputed with both Foundation books in the series returns an
empty list: there is no type in Volume 1's units that a thousand-word
reader meets and that no book in the series teaches.

---

## Gate 7: can a Foundation 2 leaver read Volume 1?

This is the gate the two Foundation books exist to pass, and it is
measured on the finished books rather than on a projection. The known set
is the first 1,000 ranks, plus every Foundation head word, plus Volume 1's
own 400.

```
Foundation head words taught: 10,740 (tokens, across both books)
Volume 1 academic passages:   20
unknown types, mean:          11.3   (ceiling 12)
unknown types, worst passage: 18     (ceiling 20)
                              "The threats that cross a fence" (unit 4)
PASS — a Foundation 2 leaver can read Volume 1
```

---

## How the level is proved

| set | k1 | beyond 4k | words | verdict |
|---|---|---|---|---|
| unit academic passages | 72.2% | 12.1% | 5,547 | in window |
| timed Reading paper | 71.8% | 11.5% | 910 | in window |
| **both together (gated)** | **72.2%** | **12.0%** | **6,457** | **in window** |

Window: k1 70.0–74.0, beyond 8.5–12.5. Volume 1 sits at 69.9 / 13.4, one
step beyond this book, which is the point.

One correction worth recording. The `beyond` figure first came out at 13.4
— over the ceiling. The obvious hypothesis was that the book's own head
words were inflating it, and that hypothesis was **measured and refuted**:
head words are 0.7% of Foundation 2's running text, against 3.7% in
Foundation 1. The prose was therefore changed rather than the window, and
it fell to 12.0.

As in Foundation 1, the productive bands step down, and for the same
reason: neither Foundation book prepares a candidate to sit the paper.

### Reading speed

80–100 words a minute, between Foundation 1's 60–80 and Volume 1's
100–120.

---

## The progress tests

One step up from Foundation 1's:

- **Reading:** three passages (250–360 words each), 24 questions, 40
  minutes
- **Listening:** four parts, six questions each, played once

So that a candidate has already felt the paper stretch once before Volume
1 stretches it again.

---

## Gates

| Gate | Result |
|---|---|
| `check.py 71-80` | all checks pass · 423 head words · 2 timed papers |
| `density.py 8` | in window (table above) |
| `book.py 8` | 440 images |
| `omit.py 8` | 4,176 strings checked, zero omissions |
| `gate6.py 8` | 3,431 fitted runs, no overrun, nothing under 7.5px |
| `readiness.py` | **PASS** — 11.3 mean / 18 worst, against 12 / 20 |

---

## One defect found by eye and fixed

The cable-network schematic in unit 9 was first laid out with two
horizontal arrows between boxes 90px apart, and their captions landed on
the box borders. No gate catches that: `gate6.py` proves text is inside
its own box, not that a caption is clear of a neighbour's. It was found by
rendering the page and looking at it, and fixed by redrawing the diagram
as a six-box snake in two columns. The lesson is the one from the three
renderer defects found in Volumes 1–6: **gates do not replace looking at
the page.**

---

## What is still open

**Nothing.** The syntax window was closed on 17 November and is now
gated. Foundation 2 failed it at first on all three counts and was fixed:
31 long sentences split and 24 rephrased to carry a nominalisation,
bringing the mean from 20.9 words to **18.8** (window 17.6–19.6), the
longest sentence from 56 words to **37** (ceiling 38), and the
nominalisation rate from 1.5 % to **2.0 %** — it had been *below*
Foundation 1's, which for a book one level higher was backwards. See
`IELTS_Syntax_Ladder_Report.md`.
