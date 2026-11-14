# TOEFL iBT® Preparation Course 2026 — **Foundation 2**
## What was built, and how it was checked

*Companion to `TOEFL_Foundation2_Architecture.md`. Every number below is from
the build, not from the plan.*

---

## 1. The book

| | |
|---|---|
| Title | TOEFL iBT® Preparation Course 2026 — **Foundation 2** |
| Level | CEFR **A2–B1** — a solid A2 in, B1 out |
| Position | between Foundation 1 (A1–A2) and Volume 1 (B1) |
| Units | **10**, one for each unit of Volume 1 |
| Cycles | **five a skill** — three everyday, two academic |
| Head words | **390**, none of them taught anywhere else in the series |
| Assessment | Progress Test F2 — **77 items**, two modules a section |
| Words | **130,584** in the document body (Foundation 1 is 112,942; Volume 1 is 87,032) |
| Figures | **521** |
| File | `TOEFL_2026_Foundation_2.docx`, 7.4 MB |

### The ten units, and the Volume 1 unit each one prepares

| # | Unit | Grammar | Prepares |
|---|---|---|---|
| G1 | History: How a Country Grows | past simple of irregular verbs in a narrative · time markers | U1 American History |
| G2 | Space: The Sky and the Numbers in It | large numbers, measurement and approximation | U2 Astronomy and Space |
| G3 | Life: Cells and What They Carry | the -tion / -ment / -ity noun family | U3 Cells and Genetics |
| G4 | Weather: Air, Heat and What We Add | cause and effect: because of, so that, as a result | U4 Climate and the Environment |
| G5 | The Mind: Attention, Memory and Choice | reporting verbs: show, suggest, find, claim | U5 Psychology and the Mind |
| G6 | Design: Why a Thing Looks Right | describing with -ed / -ing adjectives and degree words | U6 Art and Design |
| G7 | The Earth: Rock, Time and Movement | noun phrases: of, compound nouns, this/these pointing back | U7 Geology and the Earth |
| G8 | Markets: Buyers, Sellers and Prices | word building 2: un-, in- and re- | U8 Economics and Markets |
| G9 | Culture: Family, Custom and Change | phrasal verbs of academic life | U9 Anthropology and Culture |
| G10 | Stories: How a Writer Builds One | what a text says: says that, shows that, according to | U10 Literature and Storytelling |

Every unit is twenty pages: the sixteen of a Volume 1 unit, plus the four
Foundation strands, and the five cycles a skill sit inside that.

---

## 2. It was not designed. It was measured.

Foundation 1 shipped, and `gate7.py` then asked the only question that matters
about a bridge: **how many words does a Foundation 1 leaver meet in a real
Volume 1 academic passage that they do not know?** The answer was **11.4 on
average and 33 in the worst passage**, against Volume 1's own stated threshold
of fifteen.

So Foundation 2 was not written from a judgement about what an A2+ learner
needs. It was written from that count.

1. **`gapscan.py`** read every academic reading passage and listening script in
   Volume 1 — r2, r3, l1, l2, l3 of all ten units — and listed every distinct
   word form that is in none of: the 2,200-form control band, Foundation 1's
   504 head words with their inflections, the closed-class and course words,
   or a declared proper noun. It normalises accents and collapses inflections,
   so `confirm` and `confirms` are one entry and `café` is not two.
   **Result: 329 distinct words, 239 of them academic rather than everyday.**
2. **`f2_wordplan.py`** allocated 330 teaching slots, 33 a unit, to the unit
   whose own Volume 1 passage uses the word. A word shared by two units goes to
   the earlier one. Overflow moves to the nearest unit with room, and every
   move is printed. One word was added by hand and declared: *narrative*.
3. The ten units were then written to teach exactly their own allocation, and
   `mkg.py` refuses to write a unit file until every one of its 33 words is
   covered by that unit's head words or an earlier unit's.

That is the difference between this volume and a generic A2+ course: every one
of its 390 head words is in it because a passage in Volume 1 uses it.

---

## 3. Two control bands, not one

Foundation 1 is written inside the 2,200 most frequent word forms of English
(`content/_band.py`). Foundation 2 is written inside that band **plus a second
tier**: ranks roughly 2,201–4,000, 1,800 further forms, in
`content/_band2.py`.

The vocabulary gate takes the second tier as an `extra` argument, so it applies
to Foundation 2 and to nothing else. Volumes 1–4 and Foundation 1 are unchanged
and still rebuild against their own band.

The gate is still the point. Every content word in every passage, script,
document, item stem, option, model answer, speaking repeat and review clue
must be in band 1, in band 2, taught by name in this unit or an earlier one
(Foundation 1 included), or a declared proper noun. Anything else fails the
build and names itself. It caught several hundred words across the ten units —
*anthropology*, *translator*, *catalogue*, *bargain*, *supermarket*,
*electrician*, *summary*, *examiner* among them — and each one was either
taught, replaced, or the passage was rewritten around it.

One word was refused rather than accommodated: *bucket*, at rank 4,017,
seventeen places outside the band. The passage was rewritten instead of the
band being widened, and the reason is in the commit.

---

## 4. The grammar syllabus neither book had

Foundation 1 stops at the past simple and *will*. Volume 1 Unit 1 opens with
the present perfect. Between them sits the whole of the A2–B1 ground, and
nothing in the series taught it. These ten points are that ground, and
`handoff.py` checks that none of them is taught in Foundation 1 and none of
them belongs to Volume 1.

The containment gate is stricter here than in Foundation 1. Because a
Foundation 2 student has all of Foundation 1's grammar on day one, the
one-structure-a-unit locks are all open, so `_containment_f2` opens them and
then refuses five structures **by name**, because Volume 1 owns them: the past
continuous (U10), the superlative (U2), *used to* and *would* (U9), and the
first conditional (U4). The three unconditional refusals stand for every volume
of the series: present perfect, passive, relative clause.

That constraint is why the prose in this book reads the way it does. There is
no `would` in it, no `which` after a noun, and no `has done` — for ten units,
in every passage, script, model answer and answer-key explanation.

---

## 5. Five cycles a skill

Three everyday cycles and two academic ones, in Reading, Listening, Writing and
Speaking. The five Reading cycles of each unit are: a word-building gap-fill, a
daily-life document pair, a short text, and then **two full academic
passages**. The five Listening cycles are a conversation, an announcement, a
short talk and **two academic talks**. Writing is Build a Sentence, an email, a
discussion post, a second Build a Sentence and a **second discussion post**.
Speaking is five cycles of repeat-and-interview.

The academic pair in each unit is built to a shape, and the shape is the
pedagogy: cycle 4 teaches the subject's central idea, and **cycle 5 is the
objection to it**. Unit 8 teaches comparative advantage and then gives the
argument its own best counter — the gain spread thinly over forty million, the
loss landing on eight hundred people in one town. Unit 9 teaches that a custom
is studied by watching rather than asking, and then asks who owns a custom a
firm invented in 1825. Unit 10 teaches how a novelist builds a person out of a
key and a knock, and then asks what a translation cannot carry.

A student who has read both halves can hold a seminar position. A student who
has read only the first half cannot, and that is what the fifth cycle is for.

---

## 6. Progress Test F2

Foundation 1's Progress Test is one module a section, 59 items, so that an A2
learner finishes it. Volume 1's Practice Test is two adaptive modules a
section, 97 items. Foundation 2 sits between them and so does its test.

| Section | Progress Test F | **Progress Test F2** | Practice Test 1 |
|---|---|---|---|
| Reading | 20, one module | **30, two modules** | 40, two modules |
| Listening | 16, one module | **24, two modules** | 34, two modules |
| Writing | 12 | **12** | 12 |
| Speaking | 11 | **11** | 11 |
| **Total** | **59** | **77** | **97** |

Module 1 of each section is everyday and Module 2 is academic, which is the
shape of the real test and of every unit in this book. The front matter page
about adaptive testing now says, for this volume, that the two-module shape is
no longer something waiting in Volume 1: it is the test at the back of this
book, and once Module 2 has begun you cannot go back.

Writing and Speaking do not shrink, for the same reason they did not shrink in
Foundation 1: Build a Sentence is ten because the real task is ten, and seven
repeats with four interview questions is a performance rather than a set of
comprehension items.

`checktest.py` was extended to gate both Foundation tests the way it already
gated the four practice tests — module counts, item counts a module, gap
dashes against their answers, declared passage length against the real one,
four options everywhere, a real explanation on every item, answer letters
spread, and the grand total. Both pass, and extending it found two real
defects in Progress Test F: a passage declaring 117 words that has 107, and
Build a Sentence items the old checker never looked at.

---

## 7. The gates

Eight now, and all eight pass on all six volumes.

| | Gate | How it is run | Result |
|---|---|---|---|
| 1 | **Structural** — item counts, four options, a real explanation per item, answer letters spread, length bands per unit, no word taught twice | `check.py g1-g10` | **PASS** — 10 units, 390 head words, no repeats |
| 2 | **Vocabulary control** — band 1 ∪ band 2 ∪ taught ∪ names | inside gate 1 | **PASS** — 0 words outside |
| 3 | **Grammar containment** — nothing Volume 1 owns, ever | inside gate 1 | **PASS** |
| 4 | **Handoff** — every Volume 1 point has a prerequisite; no Foundation unit teaches a Volume 1 point; no Foundation 2 point repeats a Foundation 1 one; one Foundation 2 unit per Volume 1 unit | `handoff.py` | **PASS** |
| 5 | **Test shape** — both Foundation tests and all four practice tests | `checktest.py f f2 1 2 3 4` | **PASS** — 59, 77, 97, 97, 97, 97 items |
| 6 | **No clipped text** — every fitted run inside its declared box, nothing shrunk below 7.5 px | `gate6.py F2` | **PASS** — 2,223 fitted runs in 521 figures, 0 overruns, 0 shrunk under 7.5 px |
| 7 | **Readiness** — unknown word types per real Volume 1 passage | `gate7.py F2` | **PASS** — see below |
| 8 | **Zero omissions** — the .docx against the unit data | `omit.py F2 <file>` | **PASS** — 2,122 strings checked, 0 missing |

### Gate 7, the number this volume exists to move

`gate7.py` measures all forty academic passages and scripts in Volume 1.

| Measured for | Worst passage | Mean | Median |
|---|---|---|---|
| A Foundation 1 leaver | **33** | **11.4** | 10 |
| A Foundation 2 leaver, strict | **8** | **1.6** | 1 |
| A Foundation 2 leaver, band credited in full | 7 | 1.5 | 1 |

The strict row is the honest one and the one to quote. It credits a leaver only
with words that actually appear in the two Foundation volumes' own texts,
rather than with all 1,800 forms of the second band tier on the grounds that
the book was allowed to use them. **On that measure Foundation 2 removes 9.8
unknown word types from the average Volume 1 passage, an 86% reduction, and
brings the worst passage in Volume 1 from 33 unknown words to 8** — against
Volume 1's own threshold of fifteen.

This is the result that the first Foundation could not produce. Augmenting
Foundation 1 with two academic cycles a skill moved the mean from 18.3 to 16.6,
which I reported at the time as a small gain with a clear cause: a long tail of
261 words that no amount of extra cycles inside the A2 band could reach,
because the words themselves are above that band. Measuring the tail and
teaching it directly is what closed it.

### Gate 8, and what it found

Gate 8 is new. Every other gate reads the Python; this one unzips the .docx,
strips the markup, and checks that every passage paragraph, every script turn,
every model answer, every speaking repeat and question, and **every answer-key
explanation** is actually in the file the student gets. Text drawn inside a
figure is a PNG by then and carries no characters, so gate 6 covers that and
gate 8 deliberately does not.

It earned its place immediately, with three defects no other gate could see:

1. **Foundation 2's academic cycles were not being rendered at all.**
   `render_unit` decided whether to use the twenty-page Foundation layout with
   `U['level'] == 'A2'`. Foundation 2's units are `'A2B1'`, so every unit fell
   through to the sixteen-page Volume 1 layout: no Reading 4 or 5, no Listening
   4 or 5, no Writing 4 or 5, no frames, and none of the four strands. The
   content was all there in the Python and all of it passed gates 1 to 5. Gate
   8 named 288 missing strings. The test is now `U['level'] in FOUND`.
2. **The review mini-section's answer key printed letters without
   explanations** — in all six volumes. Every other block in the key uses the
   explained form, and the key's own first page says that a letter on its own
   teaches nothing. The mini-section is a timed test, so it now gets the same
   treatment. This is a change to Volumes 1–4 and Foundation 1 as well, and
   they have been rebuilt.
3. **Foundation 2's email documents were rendering through the wrong frame.**
   The ten Foundation 2 units give a Reading 2 email as a headed card with a
   short From block inside it, which is four fields; Volumes 1–4 give it as the
   five fields of a mail client. `_dock` dispatched on the tag alone and
   crashed. It now dispatches on the shape, and the notice frame gained an
   EMAIL label.

Foundation 2 also needed a vocabulary page of its own. Foundation 1's page
shows `core` + `campus` + an AWL bridge; Foundation 2's three lists are the
unit's field words, the general academic words the measurement found, and the
campus words — so `_vocab_f2` prints those three, and the glossary now
collects the field words too.

---

## 8. No regression

| Volume | Gate 1 | Gate 8 | Rebuilt |
|---|---|---|---|
| Volume 1 | 20 units, 720 head words, no repeats | 1,294 strings, 0 missing | yes |
| Volume 2 | (same run) | 1,305 strings, 0 missing | yes |
| Volume 3 | 20 units, 360 head words, no repeats | 1,439 strings, 0 missing | yes |
| Volume 4 | (same run) | 1,426 strings, 0 missing | yes |
| Foundation 1 | 10 units, 504 head words, no repeats | 2,055 strings, 0 missing | yes |
| Foundation 2 | 10 units, 390 head words, no repeats | 2,122 strings, 0 missing | yes |

All six were rebuilt after the three rendering fixes, so the package is
internally consistent. `gate6.py all` was then run over the six together:
**10,219 fitted runs of text in 2,312 figures, zero overruns and zero runs
shrunk below 7.5 px** (F1 2,036 · F2 2,223 · V1 1,366 · V2 1,400 · V3 1,549 ·
V4 1,645).

| Volume | Figures | File |
|---|---|---|
| Foundation 1 | 518 | 6.7 MB |
| Foundation 2 | 521 | 7.4 MB |
| Volume 1 | 311 | 4.8 MB |
| Volume 2 | 311 | 4.9 MB |
| Volume 3 | 330 | 5.5 MB |
| Volume 4 | 331 | 5.7 MB |

All six are in `TOEFL_iBT_2026_Course_All_Six_Volumes.zip` (33 MB) with a
README that says which volume a student opens first and why.

---

## 9. Files

```
TOEFL_2026_Foundation_2.docx        the book
toefl/content/g01.py … g10.py       the ten units
toefl/content/testf2.py             Progress Test F2
toefl/content/_band2.py             the second control band tier (1,800 forms)
toefl/content/_wordbank.py          the vocabulary gate, + the extra= tier
toefl/gapscan.py                    the measurement       (329 words)
toefl/f2_wordplan.py                the allocation        (33 words a unit)
toefl/mkg.py                        the unit generator, gates before it writes
toefl/lintf2.py                     reports every containment problem at once
toefl/check.py                      + the A2B1 branch, SHAPE_F2, F2, F2X
toefl/checktest.py                  + the two Foundation tests
toefl/handoff.py                    + Foundation 2
toefl/gate6.py                      no clipped text
toefl/gate7.py                      + the F1 / F2 / strict comparison
toefl/omit.py                       gate 8, new
toefl/book.py                       + the A2B1 unit layout, _vocab_f2, the
                                      Foundation 2 front and back matter,
                                      the explained mini-section key
```
