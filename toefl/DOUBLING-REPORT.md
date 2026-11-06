# The doubling, as built

`PLAN-DOUBLE.md` proposed doubling the book and adding twelve activity
types. This is what the repository now contains, what it cost, and what
is still missing.

---

## 1. The numbers

| | Before | Target | Built |
|---|---|---|---|
| Scenes | 346 | — | **754** |
| ETS-task items per unit | 53 | 106 | **106** |
| Mixed review per unit | 6 | 12 | **12** |
| ETS-task items, whole book | 636 | 1,272 | **1,272** |
| With review | 708 | 1,416 | **1,416** |
| All gradable items | ~708 | — | **2,395** |
| Exercise kinds in use | 17 | 29 | **29** |
| Gate checks | 757 | — | **2,936** |

The last row of the middle block is the one worth explaining. The plan
counted only items that sit against a published ETS task budget, and
those hit 1,416 exactly. The twelve new activity types are not ETS task
forms — there is no "sort into categories" on the test — so they carry no
budget and are not in that figure. They are gradable, they are marked,
and they bring the real total to 2,395.

Section proportions are held exactly, so a unit still mirrors the live
test's shape: Reading 36, Listening 34, Writing 24, Speaking 12.

---

## 2. The twelve activity types

All twelve were built, and all twelve are used in all twelve units.

| Activity | Scenes | Where |
|---|---|---|
| Match to a labelled picture | 12 | L1, one per unit |
| Sort into categories | 24 | L1 and TW |
| Word bank gap-fill | 12 | L3 |
| Sequence the steps | 12 | L2 |
| Error correction | 24 | L2 and L3 |
| Select in the text | 12 | L5 |
| Table completion | 12 | OC |
| Note completion | 12 | OC |
| Dictation | 12 | L4 |
| Minimal pairs | 12 | L4 |
| Paraphrase match | 12 | L5 |
| Odd one out | 12 | L1 |

The first of these was the repair the plan named: Step Forward's Lesson 1
is *match the words to the numbered picture*, and the build had
substituted a read-only list. Twelve line-art scenes now exist, composed
from a library of 34 primitives so that one drawing style holds across
the book rather than twelve inconsistent illustrations.

---

## 3. What the gate learned

The gate grew from 757 checks to 2,936, and most of the new rules exist
because they caught something.

**Error correction cannot express a word swap.** Eight items across five
units replaced one word and left the sentence broken — *She hardly
worked* became *She hard worked*, *has been opened* became *was been
opened*. The renderer marked all of them correct, because it only ever
compares the clicked word against the key; nothing looked at the sentence
the learner was left with. Every item now carries the corrected sentence
in full and the gate recomputes the substitution. Twenty-four items were
rewritten in total.

**A target word that appears twice has two right answers.** Clicking
either one satisfied the grader. The gate now requires the target to be
unique in its sentence.

**A punctuation-only correction cannot be marked at all,** because the
grader normalises punctuation and case away before comparing. One item
asked for a comma to become a semicolon and would have accepted the comma.

**Two exercises were impossible rather than wrong.** A minimal-pairs
exercise on stress placement (*CONduct* against *conDUCT*) cannot work
here, because the string in `say` is handed to the speech synthesiser and
it will not shift stress on request. True homophones have the same
problem for the opposite reason: there is nothing to hear. The first was
replaced; the second now plays a whole sentence and lets the grammar
settle it, with the gate checking that the sentence really contains the
right word and really does not contain the wrong one.

**Scene lookup was silently corrupted** by a leader-line element I gave
the class `dot`, which the deck and the solver both use to find the
current scene. Found by screenshotting, not by running.

---

## 4. What else is in this pass

- **Spaced review.** `progress.js` schedules every completed exercise at
  1, 3, 7, 16 and 35 days, resetting to the first interval on a miss. Unit
  1 teaches the spacing effect; the book now uses it.
- **`tools/solver.js`** — the in-page solving routine, extracted so
  `solve.js` and the bench share one copy. A kind with no branch is
  reported rather than silently unverified.
- **`tools/shots.js`** — photographs every scene in both themes and
  reports clipping. Three defects in this pass were visible only here.
- **`tools/pack.js`** — builds the release zip and its README.
- **`dev/lab.html`** — a bench carrying one scene of every new kind, with
  deliberately awkward data.

---

## 5. What is still missing

Named plainly, because none of it is built:

- **The Pre-Unit.** Step Forward opens with one; this book does not.
- **Two adaptive mock tests** with 1–6 band scoring and the 0–120
  transition score. The scoring model is in `spec.js` and unused.
- **Recorded audio.** Every listening exercise falls back to browser
  speech synthesis. It is intelligible and it is not a voice actor, and
  two of the twelve pronunciation lessons had to be redesigned around
  what synthesis can and cannot produce.
- **Cross-unit review in the data.** The scheduler is built and the
  review exercises are still drawn from within their own unit. Wiring
  Unit N's review to pull from Units N-1 and N-3 is the remaining step.
