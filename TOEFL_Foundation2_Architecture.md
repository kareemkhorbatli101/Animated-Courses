# Foundation 2: the architecture, and why it is this shape

Foundation 2 sits between Foundation 1 (A1–A2) and Volume 1 (B1). Same ten
units, same five cycles a skill, same task names, same item counts. What makes
it a bridge rather than another general course is that **both its vocabulary
and its grammar are derived from what Volume 1 needs and does not supply**.

## 1. The vocabulary is the measured gap, unit by unit

`TOEFL_Readiness_Measurement.md` showed that a Foundation 1 leaver meets about
14 unknown content words in each Volume 1 academic passage, and that the words
are a long tail: 261 distinct items, only 23 of them appearing in more than one
passage. There is no short list that closes it.

But the tail is not evenly smeared. Sorting the gap words by the Volume 1 unit
whose passages use them (`toefl/v1_gap_by_unit.json`):

| V1 unit | | gap words |
|---|---|---|
| 1 | American History | 13 |
| 2 | Astronomy and Space | 30 |
| 3 | Cells and Genetics | 38 |
| 4 | Climate and the Environment | 24 |
| 5 | Psychology and the Mind | 33 |
| 6 | Art and Design | 25 |
| 7 | Geology and the Earth | 36 |
| 8 | Economics and Markets | 25 |
| 9 | Anthropology and Culture | 31 |
| 10 | Literature and Storytelling | 21 |

Average 27.6, range 13–38. That fits one Foundation 2 unit each, with room.

So **Foundation 2 unit *k* is the preparation for Volume 1 unit *k***, and its
academic vocabulary is literally the set of words Volume 1 unit *k*'s own
passages use and a Foundation 1 leaver does not know. 36 head-word slots a
unit — 24 `acad` and 12 `fieldwords` — against a worst case of 38, so every
measured word gets taught, in the unit that needs it, before the passage that
uses it.

| F2 | title | prepares |
|---|---|---|
| 1 | History: How a Country Grows | V1 U1 American History |
| 2 | Space: The Sky and the Numbers in It | V1 U2 Astronomy and Space |
| 3 | Life: Cells and What They Carry | V1 U3 Cells and Genetics |
| 4 | Climate: Air, Heat and What We Add | V1 U4 Climate and the Environment |
| 5 | The Mind: Attention, Memory and Choice | V1 U5 Psychology and the Mind |
| 6 | Design: Why a Thing Looks Right | V1 U6 Art and Design |
| 7 | The Earth: Rock, Time and Movement | V1 U7 Geology and the Earth |
| 8 | Markets: Buyers, Sellers and Prices | V1 U8 Economics and Markets |
| 9 | Culture: Family, Custom and Change | V1 U9 Anthropology and Culture |
| 10 | Stories: How a Writer Builds One | V1 U10 Literature and Storytelling |

## 2. The grammar is what nobody else teaches

This is the constraint that shaped the syllabus, and it is tighter than it
looks. Volume 1's ten grammar points are:

> past simple and present perfect · comparatives and superlatives · the
> present passive · the first conditional · gerunds and infinitives · defining
> relative clauses and embedded questions · quantifiers and measurement ·
> articles and generalisation · used to and would · past continuous and
> narrative

Foundation 2 may teach **none** of those: Volume 1 owns them, and `handoff.py`
fails the build if a Foundation unit claims one. Foundation 1 already holds the
A1–A2 core (be, there is/are, present simple, have got, present continuous,
countable and uncountable, past of be, the past simple, can and should, going
to and will, comparatives).

What is left between them is the A2–B1 threshold that neither book covers, and
two of those ten slots go to the thing the measurement actually argues for.
Since the gap is a tail of 261 words rather than a core, a word list cannot
close it — but **word building** multiplies whatever list you teach: a student
who can get *explanation* from *explain*, *characteristics* from *character*,
*constantly* from *constant* and *economists* from *economy* reads past most of
the tail without ever having met the exact form.

| F2 | grammar point |
|---|---|
| 1 | Choosing the tense: present simple, present continuous and past simple together |
| 2 | Questions in every tense · subject questions and object questions |
| 3 | must, have to and do not have to |
| 4 | Adjectives and adverbs · very, quite, too and enough |
| 5 | **Word building 1: verb to noun — -tion, -ment, -ness, -ity** |
| 6 | Linking a paragraph: first, then, also, for example, however, so |
| 7 | Noun phrases: of, compound nouns, this and these pointing back |
| 8 | **Word building 2: adjectives and opposites — -al, -ive, -ous, -ful, un-, in-, re-** |
| 9 | Phrasal verbs of academic life: find out, point out, carry out, take part, depend on |
| 10 | What a text says: says that, shows that, according to, in other words |

None of these appears in Volume 1's syllabus and none appears in Foundation
1's. Checked by `handoff.py`, which is extended to run over both Foundation
volumes.

## 3. Everything else is held identical

Ten units. Five cycles a skill: three everyday, two academic, the same as
Foundation 1 after the augmentation. The same task names, so a student meets
no new instruction wording. Progress Test F2 at the end, two modules a
section. The same four non-test strands (sound, builder, typing, study), the
same answer key that explains, audio scripts, glossary and grammar reference.

The level on the cover is **CEFR A2–B1**.

## 4. The gates it must pass

1. `check.py g1-g10` — structure, item counts, length bands, no repeated head word
2. the vocabulary gate — nothing outside the control band, what Foundation 1
   taught, what this unit teaches, and declared names
3. the containment gate — no structure before the unit that teaches it, and
   nothing Volume 1 owns, ever
4. `handoff.py` — every Volume 1 point has a prerequisite; no Foundation unit
   teaches a Volume 1 point
5. `gate6.py F2` — no clipped text in any figure
6. zero omissions between the unit data and the .docx
7. `gate7.py` — the readiness number this whole volume exists to move
