# TOEFL iBT® Preparation Course 2026 — **Foundation**
## Plan for the volume that comes before Volume 1

*Companion to the four volumes in `toefl/`. Everything below is measured
against the code and content that already exist, not against a memory of them.*

---

## 0. What already exists (audited, not assumed)

| | Volumes 1–2 | Volumes 3–4 |
|---|---|---|
| Level | CEFR B1 | CEFR B2 |
| Units | 1–20 (10 per volume) | 21–40 (10 per volume) |
| Band claimed | "a steady 3.0–4.0" | "4.5–5.5" |
| Words per volume | 120,202 / 118,439 | 143,258 / 142,007 |
| Figures per volume | 314 / 314 | 334 / 334 |
| Vocabulary per unit | 24 AWL + 12 campus | 18 AWL + 10 collocations + 5 stance + 3 nuance |
| Academic passage | 265 words (3 paras) | 255–300 words, enforced |
| Academic talk script | ~190 words | longer, denser |
| Per volume | 10 units + 1 full 97-item practice test | same |

A unit is sixteen pages and never varies: opener → vocabulary → Reading 1·2·3
→ Listening 1·2·3 → Speaking 1·2·3 → Writing 1·2·3 → grammar → review.
Three sub-topics, three cycles in every skill. `toefl/check.py` enforces the
shape mechanically — item counts, four options per item, a real explanation
for every answer, answer letters spread, Build a Sentence totalling ten with
at least eight question frames, no word taught twice in a book.

**The gap.** Volume 1 Unit 1 opens on *past simple vs present perfect* and a
265-word academic passage on nineteenth-century American railroads. A learner
below B1 cannot start there. There is nothing before it.

---

## 1. The honest problem, and the principle that solves it

A learner at A1–A2 **cannot do the TOEFL iBT**. Any book that pretends
otherwise does one of two dishonest things: it fakes the tasks down until they
are no longer the tasks, or it drills test strategy at someone who does not yet
have the language the strategy operates on.

So this book is built on one principle, and the whole design follows from it:

> **Nothing is removed. Everything is made reachable.**

The student does the *same number of exercises* as a Volume 1 student, in the
*same order*, under the *same task names*. What changes is the linguistic load
of each one — text length, sentence length, vocabulary band, grammar range —
and the amount of scaffolding around it. Low-level learners need **more**
practice, not less; cutting the exercise count would be the easy mistake.

And four strands run through the book that are **not TOEFL at all** — sound and
spelling, sentence construction, typing, and learning how to learn. They exist
because they are the real reasons a low-level learner fails the test, and
because an A2 learner's first need is English, not test technique.

---

## 2. Name, level and position

**Recommended title:** *TOEFL iBT® Preparation Course 2026 — **Foundation***
Cover line: **Student's Book · CEFR A1–A2** · "Volume F"

Why *Foundation* rather than *Beginner*: it is the standard ELT term for this
slot, it describes the book's job rather than the student's deficit, and adult
learners who have paid for a TOEFL course do not like being called beginners.
*Beginner* remains available — it is one string in the front matter and one on
the cover if you prefer it.

| | |
|---|---|
| **Entry level** | CEFR A1.2 / low A2 — can read and write the alphabet, knows *be* and a few hundred words |
| **Exit level** | Solid A2 / A2+ — ready to open Volume 1 on page 1 |
| **Band honesty** | "This book does not prepare you to sit the test. It prepares you to start Volume 1." Stated in the front matter, not buried. |
| **Units** | **10** — a full level, the same as every other volume |
| **Assessment** | One Progress Test at the end, same shape, lighter load (§9) |
| **Size estimate** | ~85,000–95,000 words, ~380 figures, ~200 unit pages + front and back matter |

---

## 3. What stays identical · what scales · what is new

### Identical (so the architecture transfers intact)

* 10 units; 3 sub-topics per unit; 3 cycles in every skill.
* Every task name: Complete the Words · Read in Daily Life · Read an Academic
  Passage · Listen and Choose a Response · Conversations · Announcements ·
  Academic Talks · Listen and Repeat · Take an Interview · Build a Sentence ·
  Write an Email · Write for an Academic Discussion.
* **Every item count**, unchanged from `ITEMS_B1`: r2 4+6, r3 4+7, l1 3+6,
  l2 3+5, l3 3+6, w1 3+7, 15 word-completion gaps, review 12+8+6.
* 24 + 12 words a unit, six can-do statements, four vocabulary talk questions,
  a grammar page with three exercises, a tip, a review.
* The figure engine, the answer-spreading, the answer key with an explanation
  for every item, the audio scripts, the glossary.

### Scaled, on a rising curve across the ten units

Every one of these is a number `check.py` will enforce per unit, so the climb
is real and not rhetorical.

| Parameter | Unit 1 | Unit 10 | Volume 1 (for comparison) |
|---|---|---|---|
| Academic passage (words) | 110 | 175 | 265 |
| Mean sentence length in that passage | ≤ 11 | ≤ 13 | ~18 |
| Longest single sentence | ≤ 18 | ≤ 22 | unbounded |
| Academic talk script (words) | 85 | 150 | ~190 |
| Conversation script (turns) | 8 | 12 | 14 |
| Announcement script (words) | 55 | 95 | 115 |
| Longest Listen-and-Repeat sentence | 9 words | 16 words | ~22 words |
| Build a Sentence tiles | 4–5 | 6–7 | 5–8 |
| …of which use a question frame | 5 of 10 | 8 of 10 | 8 of 10 (enforced) |
| Email target | 35 words | 65 words | free, 7 minutes |
| Discussion post target | 40 words | 80 words | 100 words |
| Discussion model answer | 45 words | 90 words | 146 words |

The last row matters: the real task wants 100 words in 10 minutes. The book
names that number in every unit and walks the student to 80 by Unit 10, so
Volume 1 asks for the last twenty rather than all hundred at once.

### New — the four Foundation strands (four extra pages a unit)

These do not exist anywhere in Volumes 1–4, and they are the reason this is a
foundation course rather than an easier TOEFL course.

**1 · Sound and Spelling** (1 page a unit)
The actual causes of low-level listening failure, in order: spelled-out letters,
numbers, prices, dates and years, weak forms, and word stress. Syllabus:
the alphabet and spelling aloud → numbers 1–100 → prices and decimals → dates
and years → plural and third-person /s/ /z/ /ɪz/ → past /t/ /d/ /ɪd/ → word
stress in two- and three-syllable words → *to*, *of*, *for*, *are* as weak forms
→ sentence stress → the eight vowel contrasts that cost marks (*ship/sheep*,
*man/men*, *walk/work* …). Each page: a chart figure, a listening discrimination
task, and a production task.

**2 · Sentence Builder** (1 page a unit)
Writing fails at A2 because of fragments, not vocabulary. Syllabus: a sentence
needs a subject and a verb → capital letters and full stops → S-V-O order →
*and / but / because / so* → avoiding the comma splice → one idea, one sentence
→ building two sentences into one → paragraph shape (first sentence says what it
is about). Feeds Build a Sentence directly.

**3 · Typing and the Screen** (1 page a unit)
**The test is typed, on a screen, with no paper.** A learner who hunts for keys
loses the Writing section before the language does. Syllabus: home row →
capitals and punctuation keys → typing a sentence → typing a paragraph →
scrolling and reading on screen → the on-screen clock → drag-and-drop (what
Build a Sentence actually looks like) → timed typing. Measured target: **15
words per minute by Unit 10**, recorded by the student in the book.

**4 · Learning to Learn** (1 page a unit)
A vocabulary notebook that works → how to use a learner's dictionary →
word families → guessing from context → spaced review (the book schedules it:
every unit's review tests words from two units back) → what to do when you do
not understand → how to listen twice → making your own flashcards → how to
study without a teacher → how to use Volume 1.

---

## 4. The ten units

Topics are the student's own world pointed at a campus. Each unit still carries
three sub-topics and three cycles, and each academic passage seeds a field that
a later volume will take up properly.

| # | Unit | Three sub-topics | Grammar | Question spine | Seeds |
|---|---|---|---|---|---|
| F1 | People, Names and the First Week | meeting your class · the student card · where people are from | *be* · subject pronouns · a/an · plural -s · S-V-O order | *Am / Is / Are …?* | V1 U8 articles |
| F2 | The Campus and How to Find It | a campus map · the library · asking the way | *there is / there are* · prepositions of place · this/that/these/those | *Is there …? Where is …?* | V1 U6 relative clauses |
| F3 | Days, Times and the Timetable | a week of classes · the clock and the calendar · changing a time | present simple · third-person -s · adverbs of frequency | *Do / Does …? When …?* | every Listening task |
| F4 | Family, Home and Where You Live | who is in your family · a room in halls · your street | *have got* · possessive *'s* · my/your/his/her | *Have you got …? Whose …?* | V1 U9 *used to* |
| F5 | A Day in Your Life | a student's routine · how people study · free time | present continuous vs present simple | *What are you doing?* | V1 U3 passive (*be* + form), U10 past continuous |
| F6 | Food, Prices and the Cafeteria | the menu · paying and change · what people eat | countable / uncountable · some / any · much / many / a lot of | *How much …? How many …?* | V1 U7 quantifiers |
| F7 | Weather, Seasons and the Year | a week of weather · the four seasons · a day it rained | past simple of *be* · regular -ed and its three sounds · *ago, last, in 1990* | *Was / Were …?* | V1 U1 past simple, U4 climate |
| F8 | Getting There: Travel and Transport | the bus and the train · a ticket and a timetable · a journey you made | past simple irregular — the fifty that matter | *Did …? Where did …?* | V1 U1 past simple |
| F9 | The Body, Health and the Clinic | parts of the body · at the clinic · staying well | *can / can't* · *should* · imperatives · adverbs of manner | *Can you …? What should …?* | V2 U12 public health |
| F10 | Study, Work and Your Plans | choosing a subject · a part-time job · what you will do next | *going to* · *will* · comparative -er / more · and·but·because·so | *What are you going to …? Will …?* | V1 U2 comparatives, U4 first conditional |

### Why question formation is a spine and not a unit

Build a Sentence is ten items and **at least eight of them make a question** —
`check.py` enforces that ratio on every existing unit, because that is what the
real task does. Question word order is therefore not one lesson; it is taught
ten times, once per unit, each time on the structure that unit has just learned.
By Unit 10 the student has built direct questions with *be, do, does, have got,
was, were, did, can, will* and *going to* — which is the whole inventory the
B1 book then starts embedding.

---

## 5. The handoff: every Volume 1 grammar point has a named prerequisite here

This table is the argument that this is a *foundation* and not a generic
beginner book. It will be enforced as a build gate (§11, Gate 4).

| Volume 1 unit | Its grammar | Prerequisite built in Foundation |
|---|---|---|
| U1 | Past simple **and present perfect**; direct question forms | **F7** regular past + **F8** irregular past + **F8** *did* questions — U1 adds only the perfect |
| U2 | Comparatives and superlatives | **F10** comparative *-er / more* |
| U3 | The present passive | **F1** *be* + **F5** *be* + -ing — the "*be* + a verb form" pattern |
| U4 | The first conditional | **F10** *will* + **F3** present simple |
| U5 | Gerunds and infinitives | **F5** -ing forms + **F9** *can/should* + bare infinitive |
| U6 | Defining relative clauses; embedded questions | **F2** *there is/are*, *where* + **F1** S-V-O |
| U7 | Quantifiers and measurement | **F6** much / many / a lot of / some / any |
| U8 | Articles and generalisation | **F1** a/an + plural -s |
| U9 | *used to* and *would* | **F7** past simple + past time phrases |
| U10 | Past continuous and narrative | **F7/F8** past simple + **F5** continuous aspect |

Nothing in Volume 1 arrives without its ground laid. Conversely, Foundation
teaches **nothing that Volume 1 teaches again** — no present perfect, no
passive, no conditional, no relative clause. The two books do not overlap.

---

## 6. Vocabulary: 360 words, every one of them earned

Volumes 1–2 teach 480 Academic Word List items. **Teaching the AWL to an A1
learner is the classic error** — the AWL is a list of what is frequent *in
academic text once you already know the general 2,000*. Give it to someone who
does not have the 2,000 and you get memorised words that cannot be used.

So the Foundation ledger is:

| Strand | Per unit | Total | Source |
|---|---|---|---|
| Core high-frequency | 24 | 240 | The general-service band: the most frequent ~2,000 word families of English. Primary source the New General Service List (Browne, Culligan & Phillips, 2013); if a machine-readable copy cannot be obtained at build time, the band is taken from a published corpus frequency list — `FrequencyWords/en_50k`, which **is reachable from this container (confirmed, HTTP 200, 622 KB)** — and the ledger is cut at rank 2,000. |
| Campus and everyday | 12 | 120 | The same campus register Volumes 1–2 use (*enrolment, tutorial, timetable, reading week*), because Listening conversations turn on it. Deliberate overlap with Volume 1's campus strand: this is spaced repetition, not duplication, and it is the one place the two books are *meant* to meet. |
| AWL bridge | — | 60 | **AWL Sublist 1** seeded across Units 8–10 only, so the student meets the Volume 1 strand before Volume 1 asks for it. |

**Vocabulary control is a build gate, not an intention.** Every running content
word in the reading passages, the listening scripts and the word-completion
paragraphs must be in: the 2,000-word band ∪ the words this book has already
taught ∪ proper nouns. Anything else fails the build and must be replaced or
taught. (This is the gate the existing books do not have; adding it is what
makes "A2" a fact rather than a label.)

Glossary: all 360 words at the back, **with phonemic transcription** — at this
level the spelling-to-sound gap is a daily obstacle, and the other volumes do
not need it.

---

## 7. The unit, page by page (20 pages)

| Page | Content | Status |
|---|---|---|
| 1 | Opener: unit figure, six can-dos, CEFR line, grammar and word field | same as V1 |
| 2 | Vocabulary 1 (24 core) + Vocabulary 2 (12 campus) + 4 talk questions | same shape, new source |
| **3** | **Sound and Spelling** | **new** |
| 4 | Reading 1 · Complete the Words (5 guided + 10 exam gaps) | same counts, shorter text, inflectional endings |
| 5 | Reading 2 · Read in Daily Life (2 documents, 4 + 6 items) | same counts, shorter documents, locate-and-match |
| 6 | Reading 3 · Read an Academic Passage (4 + 7 items) | same counts, 110→175 words |
| **7** | **Sentence Builder** | **new** |
| 8 | Listening 1 · Conversations (3 + 6) | same counts, 8→12 turns |
| 9 | Listening 2 · Announcements (3 + 5) | same counts, 55→95 words |
| 10 | Listening 3 · Academic Talks (3 + 6) | same counts, 85→150 words |
| 11–13 | Speaking 1·2·3 · Listen and Repeat (7) + Take an Interview (4) | same counts; **all four** model answers given, not two; a sentence frame for each |
| 14 | Writing 1 · Build a Sentence (3 guided + 7 exam) | same counts, 4–7 tiles |
| 15 | Writing 2 · Write an Email | same task; adds a gapped frame and a word bank |
| 16 | Writing 3 · Write for an Academic Discussion | same task; rising word target, longer starter list |
| 17 | Grammar focus: table, notes, watch-out, 3 exercises, "how this is tested in Build a Sentence" | same as V1 |
| **18** | **Typing and the Screen** | **new** |
| **19** | **Learning to Learn** | **new** |
| 20 | Review: 12 vocabulary + 8 grammar + 6 timed mini-section + can-do check + tip | same as V1; **mini-section draws on units n−1 and n−2** (spaced review) |

Scaffolding that the B1 book does not carry, and this one does: a worked example
at the head of every exercise, all four speaking models instead of two, a gapped
frame for both writing tasks, and the answer key explanation written at A2 (the
B1 key assumes the reader can follow a B1 explanation of a B1 item — circular at
this level).

---

## 8. Front and back matter

**Front:** cover · "Where you are, and how far this book takes you" (the frank
page: *after this book you are not ready to sit the test; you are ready for
Volume 1*) · how to use the book without a teacher · the 2026 format map
(the existing `format_map` figure) · what an adaptive test does (the existing
`adaptive_map` figure — **knowledge only**, the Progress Test does not adapt) ·
the alphabet and the sounds of English · map of the book.

**Back:** Progress Test F · answer key with an explanation for every item ·
audio scripts · glossary of 360 words with phonemics · the fifty irregular
verbs · grammar reference · **"What Volume 1 will ask of you"** — a two-page
bridge showing a real Volume 1 passage and what has changed.

---

## 9. Assessment: Progress Test F

The real test is 97 items in two adaptive modules per section: Reading 40,
Listening 34, Writing 12, Speaking 11. Sitting that at A2 produces a score of
*cannot do this yet*, which teaches nothing.

**Progress Test F — 59 items, one module per section, same order, same names.**

| Section | Real test | Progress Test F | Why |
|---|---|---|---|
| Reading | 40 (2 modules) | **20** (10 gaps + 5 daily + 5 academic) | One module. The two-module adaptive shape is explained in the front matter and introduced for real in Volume 1. |
| Listening | 34 (2 modules) | **16** (3 responses + 5 conversation + 4 announcement + 4 talk) | as above |
| Writing | 12 | **12** | **Unchanged.** Build a Sentence is ten because the real task is ten — the same reason `check.py` already fixes it at ten for B1 and B2. |
| Speaking | 11 | **11** | **Unchanged.** Seven repeats and four interview questions are performances, not comprehension items; shortening them would remove the task. |

Then one page the student is told not to score: **"First sight of the real
thing"** — one genuine, unmodified Volume 1 academic passage with its items, and
a short guide to reading it. Seeing the destination is motivating; being graded
against it is not.

---

## 10. Build: files and code changes

Everything below sits beside the existing course and changes no existing
behaviour.

```
toefl/
  content/f01.py … f10.py      NEW  the ten units, same dict shape as u01.py
  content/testf.py             NEW  Progress Test F
  content/_wordbank.py         NEW  the 2,000-word control band + the 360-word ledger
  check.py                     EDIT SHAPE_F, _check_f(), the per-unit parameter table
  book.py                      EDIT VOLS['F'], BLURB['A2'], BULLETS['A2'], _vocab_f(),
                               and four new page renderers for the Foundation strands
  frames.py                    EDIT three new figure families
  art.py                       — unchanged (the fitting layer already covers them)
```

**Three new figure families** (built on the exact-metrics fitting layer, so they
inherit the no-clipping guarantee):

* `sound_strip(rows)` — a spelling/sound chart: letter or symbol, example words, a contrast pair.
* `keyboard_map(highlight)` — a keyboard with keys highlighted, for the typing strand.
* `frame_card(lines, gaps)` — a writing frame with blanks, for the email and discussion scaffolds.

**`check.py` gains an A2 branch** enforcing, per unit, against a table of the
numbers in §3: passage length and mean/max sentence length; talk and
announcement script length; conversation turn count; longest repeat sentence;
tile count and question-frame ratio; model-answer length for both writing tasks;
**and the vocabulary-control gate** (§6). Item counts are reused from
`ITEMS_B1` unchanged.

---

## 11. Verification gates — the build is not done until all six pass

1. **Structural** — `check.py f1-f10` passes: item counts, four options,
   a real explanation per item, answer letters spread, Build a Sentence totals
   ten, no word taught twice.
2. **Level** — every per-unit parameter in §3 inside its band, and the bands
   rise monotonically from Unit 1 to Unit 10.
3. **Vocabulary control** — 100% of running content words in R1, R2, R3, L1,
   L2 and L3 are in the 2,000-band ∪ taught-so-far ∪ proper nouns. Reported as
   a number, not a claim; any miss names the word and the unit.
4. **Handoff** — every one of the ten Volume 1 grammar points resolves to a
   named Foundation unit (§5), and no structure taught in Volume 1 is taught
   here. Checked against the real `u01…u10` data, not against this document.
5. **Grammar containment** — no structure appears in a text before the unit that
   teaches it: no present perfect, passive, conditional or relative clause
   anywhere; no past tense before F7; no continuous before F5. Regex gate over
   every passage, script and model answer, with a declared whitelist for fixed
   phrases (*How are you?*).
6. **Figures and content** — the four gates from the figure fix: nothing clipped
   by an image edge, every fitted run inside its declared box, the independent
   geometric check, and the word-multiset check on rebuild.

---

## 12. Order of work

| Step | Output |
|---|---|
| 1 | The word ledger: fetch the frequency band, build `_wordbank.py`, fix the 360 words unit by unit, prove no collision with Volume 1's AWL strand |
| 2 | `check.py` A2 branch + the parameter table + the vocabulary gate — **the gates before the content**, so no unit is ever written blind |
| 3 | The three new figure families, rendered and eyeballed |
| 4 | `book.py`: volume F, the four strand renderers, front and back matter |
| 5 | Units F1–F3, then gates 1–5 run — the first three units are the calibration; parameters get adjusted here if they are wrong |
| 6 | Units F4–F10 |
| 7 | Progress Test F, answer key, audio scripts, glossary with phonemics, irregular verbs, grammar reference, the Volume 1 bridge |
| 8 | Full build, six gates, package, deliver |

Delivery is unit by unit, as the B1 and B2 volumes were — you see F1–F3 and the
gate report before the remaining seven are written, because that is the point at
which the level calibration is cheap to change.

---

## 13. Deliberate departures, stated rather than hidden

1. **The Progress Test is one module per section, not two.** The adaptive shape
   is taught as knowledge in the front matter and sat for real in Volume 1.
2. **No AWL strand until Units 8–10.** Grounded in §6: the AWL assumes the
   general 2,000.
3. **Four pages a unit are not about the TOEFL.** Sound, sentences, typing,
   study skills. This is the point of the book.
4. **Four extra pages per unit** means twenty pages rather than sixteen. The
   unit is longer than a Volume 1 unit even though every text in it is shorter.
5. **The book says plainly that it does not prepare you to sit the test.**
   A foundation course that claims otherwise is selling something.

---

## 14. One decision for you

The title. **Foundation** is my recommendation, for the reasons in §2;
**Beginner** is what you suggested and it is one string to change. Either way
the series name, the cover design, the running heads and the ETS trademark
notice stay exactly as they are in Volumes 1–4.

Everything else in this plan I will build as written unless you say otherwise.
