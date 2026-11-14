# Gate 7: what actually stands between a Foundation leaver and Volume 1

This is the measurement behind the decision to build Foundation 2, and behind
the shape Foundation 2 takes. It replaces an assumption I had made with a
number.

## What was measured

`toefl/gate7.py` takes every academic passage in Volume 1 — the twenty `r3`
readings and `l3` lecture scripts, one of each in all ten units — and counts
the **distinct content words a Foundation leaver has never met**.

A Foundation leaver is credited with:

* the 2,200-form control band Foundation is written inside,
* every head word the ten Foundation units teach, with its inflections,
* the closed-class and course words the gate always allows,
* the proper names Foundation declares,
* **and** the vocabulary Volume 1 itself teaches on the page before each
  passage — those words are the lesson, not the obstacle.

Volume 1 Unit 10's own closing test tells the student that fewer than fifteen
unknown words means ready. That sentence is what this gate measures against.

## What the academic cycles bought

| | worst passage | mean | median |
|---|---|---|---|
| Foundation 1 before the academic cycles | 34 | 18.3 | 19 |
| Foundation 1 with the academic cycles | 33 | 16.6 | 18 |

So the 120 new field words moved the mean by 1.7 word types. That is a real
improvement and it is far smaller than I expected when I proposed them.

The academic cycles were still worth building, for a reason the number does
not show: before them, **none** of Foundation's ten units was about an
academic field at all. A student left Foundation having never read a passage
about biology, economics, geology or history. The cycles fix that, and Gate 4
confirms they do it without teaching any Volume 1 structure early. But they do
not close the vocabulary gap, and it is worth being plain about why.

## Why the field words did not close it

Breaking the residual gap down by kind of word, across all twenty passages:

| kind of word | distinct types | share |
|---|---|---|
| general and topic vocabulary | 287 | 86.7% |
| proper names (Boston, Pacific, Hobsbawm) | 35 | 10.6% |
| measurement units (metres, kilogram, acres) | 9 | 2.7% |

Names and units are not really obstacles — a reader skips a name and a unit is
a closed set of about a dozen. Setting them aside, the lexical obstacle is
**mean 14.3, median 16, worst 29** distinct new words per academic passage.

The decisive fact is the shape of that set. It is **261 distinct words, and
only 23 of them appear in more than one passage**:

> argument (4 passages), instrument (3), then two passages each: inland,
> stopping, wheat, slightly, proportion, separate, capacity, contains, mass,
> atmosphere, enormous, thermometer, trapped, flywheel, emissions, expands,
> constantly, explanation, uncomfortable, economists, harvest

A long tail, not a core. Teaching the 23 recurring words would cut the mean by
roughly 2.3 types a passage. There is no short list that closes this gap,
which is why adding twelve well-chosen field words a unit moved the number so
little: each word a Foundation unit teaches pays off in about one twentieth of
a Volume 1 passage.

## What this means for Foundation 2

It changes Foundation 2's word list from something I would have guessed to
something measured.

My earlier plan was "180 AWL words plus 180 field words", chosen by judgement.
The measurement says to do it the other way round: **Foundation 2's head-word
list should be the measured gap itself.** The 258 genuinely new items are
written to `toefl/v1_readiness_gap.json` with the passages each one appears
in.

258 words over ten units is about 26 a unit. Foundation 2 carries five cycles
a skill, so 30 head words a unit — 300 in all — fits with room to spare. Every
one of those 300 is then a word a Volume 1 academic passage actually uses,
rather than a word that looked academic to me.

That is the test to hold Foundation 2 to, and Gate 7 is the instrument: after
Foundation 2, the same twenty passages should sit in single figures.

## Running it

```
cd toefl
python3 gate7.py 15      # the cap Volume 1's own test states
```

The gate prints every passage, its count and its unknown words, then the
worst, mean and median, and fails if any passage is over the cap.
