# IELTS 2026 — closing the last open item: the syntax window

**Status:** closed. The two syntactic numbers are now gated on all eight
books, and the prose of six of them was changed to pass.

This was the one item carried as open in every delivery report in the
series. This document says what the problem was, what was done, what the
gate now proves, and — honestly — what it still does not.

---

## 1. What the open item was

Every book in this series has its level *measured* rather than asserted.
`density.py` profiles four numbers on the academic passages and the timed
papers:

| | |
|---|---|
| `k1` | share of running words from the 1,000 commonest English words |
| `beyond` | share past the 4,000-word ceiling |
| `sent` | mean sentence length |
| `nominal` | the -tion/-ment/-ity/-ness/-ance/-ence rate |

The first two were gated from the beginning. They rest on a word-rank
list, which is a property of English rather than of a genre, so a window
measured on one course transfers to another without an assumption.

The last two were only **reported**, and the reason was stated in the
module: the only window available for them had been calibrated on TOEFL
textbook prose, and IELTS Academic passages are adapted journalism — a
different register. Gating this series against that window would have
asserted an equivalence nobody had measured.

## 2. What would have closed it properly, and why that was not possible

The clean fix is to measure `sent` and `nominal` on a set of official
Cambridge Academic passages and put the window where they land. That
needs the passages. This container's network policy allows package
registries and nothing else: `ielts.org`, `takeielts.britishcouncil.org`
and `cambridgeenglish.org` are all unreachable from here, and there is no
register-matched English corpus on disk. The session also cannot be moved
to the environment saved for this repository.

So the choice was between leaving the item open for a ninth delivery, or
gating something that can be established here and is worth establishing.

## 3. What was found when the numbers were looked at properly

Measuring the eight books against each other, rather than against an
absolute, produced a result that mattered more than the missing window:

| book | mean sentence, before |
|---|---|
| Foundation 1 | 19.1 |
| Foundation 2 | 20.9 |
| **Volume 1 (B1)** | **23.7** |
| Volume 2 | 21.1 |
| Volume 3 | 21.9 |
| Volume 4 | 21.6 |
| Volume 5 | 22.8 |
| **Volume 6 (C1)** | **22.1** |

**The B1 book had the longest sentences in the series and the C1 book did
not.** A graded course whose syntax runs backwards is a real defect, it
was invisible to every other gate, and it was invisible by eye as well,
because each page reads perfectly well on its own. Only the series read
as a series shows it.

The longest single sentences told the same story: 56 words in the B1
book, 62 in Volume 3, 60 in Volumes 4 and 5.

## 4. What is gated now

`SYNTAX_BY_VOL` in `density.py` is a **ladder**: a window per book for the
mean, a ceiling per book for the longest sentence, and a window per book
for the nominalisation rate. Three things are checked:

1. each book inside its own window;
2. no sentence anywhere over its book's ceiling;
3. `density.py --ladder` — the eight measured means strictly rising, each
   at least 0.4 words above the book below.

```
book             sent     window   longest   nominal   verdict
--------------------------------------------------------------
Foundation 1     16.8  16.5-18.5        31      1.8%   in window
Foundation 2     18.8  17.6-19.6        37      2.0%   in window +2.0
Volume 1         20.2  19.4-21.4        37      3.0%   in window +1.4
Volume 2         21.1  20.2-22.2        46      3.6%   in window +0.9
Volume 3         21.8  20.9-22.9        50      3.9%   in window +0.7
Volume 4         22.7  21.6-23.6        54      4.5%   in window +0.9
Volume 5         23.3  22.3-24.3        56      4.9%   in window +0.6
Volume 6         24.0  23.0-25.0        55      5.6%   in window +0.7
```

The nominalisation rate rises from 1.8 per cent to 5.6 across the eight
books, which is the better marker of academic density of the two and now
rises monotonically as well. Foundation 2 had been *below* Foundation 1 at
1.5 per cent; that is also fixed.

## 5. What was changed in the prose

Six of the eight books failed the gate the day it was written. About 275
sentences were edited, none of them by machine:

| book | what was done |
|---|---|
| Foundation 1 | 26 long sentences split; mean 19.1 → 16.8, longest 43 → 31 |
| Foundation 2 | 31 split, 24 rephrased to carry a nominalisation; 20.9 → 18.8, longest 56 → 37, nominal 1.5 % → 2.0 % |
| Volume 1 | 62 split; 23.7 → 20.2, longest 56 → 37 |
| Volume 2 | unchanged — it was already in window |
| Volume 3 | 4 split; longest 62 → 50 |
| Volume 4 | 2 split, 39 merged; 21.6 → 22.7, longest 60 → 54 |
| Volume 5 | 1 split, 17 merged; 22.8 → 23.3, longest 60 → 56 |
| Volume 6 | 69 merged; 22.2 → 24.0 |

Splitting and merging were done where the prose wanted it, not
mechanically. A merge joins two sentences that were already one thought —
`The first is access. A financial auditor has a statutory right to the
books.` becomes `The first is access: a financial auditor has a statutory
right to the books.` A split breaks a sentence at a joint that was
carrying too much — a 56-word sentence in the B1 book became three.

### The tool that made it possible

A sentence does not exist as text in these files. A paragraph is a run of
wrapped string literals that Python concatenates, so `sed` cannot see a
sentence that crosses a line break — which almost every sentence does.
`rewrap.py` was written for this: it finds the run of literals whose
joined value is the paragraph, edits the sentence inside the joined text,
and writes the run back re-wrapped at the same indentation. `syntax.py` is
its companion: it lists a book's sentences by length with their addresses,
lists adjacent pairs inside a paragraph shortest-sum first (the merge
candidates), and computes how many edits a target mean needs, from
`mean = words / sentences`.

## 6. What this gate does not prove

It is a **relative** claim, and weaker than the vocabulary gate. It proves
that this series is internally graded; it does not prove that Volume 4's
22.7 words a sentence is the right figure for band 6.5 in the real exam.
Nothing available in this environment can prove that.

What would replace it: the mean sentence length and nominalisation rate of
twenty official Cambridge Academic passages, per band. If that measurement
is ever made, the window **centres** move to it and the ladder stays —
the ladder is a property of a graded series whatever the absolute figures
turn out to be. `density.py`'s docstring says this too, so whoever opens
the file next does not have to find this document first.

One practical note: the measurement could be made from Cambridge IELTS
practice books as PDFs on the user's own machine. That path exists and
was not taken here, because it needs files this container cannot reach.

## 7. Verification after the change

| gate | result |
|---|---|
| `check.py` × 8 ranges | all checks pass — bands, numbering, Listening Parts 1–4, head-word seams, explanation length |
| `density.py` × 8 books | vocabulary **and** syntax in window, every book |
| `density.py --ladder` | the eight means rising, every step ≥ 0.4 |
| `book.py` × 8 | all eight rebuilt |
| `omit.py` × 8 | zero omissions in every file |
| `gate6.py` × 8 | no overrun, nothing printed under 7.5px |
| `readiness.py` | PASS — 11.4 unknown types mean, 18 worst, against 12 and 20 |

Nothing else in the books moved: no question, no answer, no figure, no
model answer. The word-band checks on every passage still pass, which is
the evidence that splitting and merging changed sentence boundaries
rather than content.
