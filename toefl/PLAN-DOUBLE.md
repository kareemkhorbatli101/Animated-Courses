# Doubling the book

Same twelve units, same seven blocks, same titles and headers. Twice the
practice inside them, and a wider range of things to do.

---

## 1. What doubling means in numbers

Per unit, scored items go from **53 to 106**, plus review from 6 to 12.

| Task | Now | After |
|---|---|---|
| Complete the Words | 10 | 20 |
| Read in Daily Life | 4 | 8 |
| Read an Academic Passage | 4 | 8 |
| **Reading** | **18** | **36** |
| Listen and Choose a Response | 6 | 12 |
| Listen to a Conversation | 4 | 8 |
| Listen to an Announcement | 3 | 6 |
| Listen to an Academic Talk | 4 | 8 |
| **Listening** | **17** | **34** |
| Build a Sentence | 10 | 20 |
| Write an Email | 1 | 2 |
| Write for an Academic Discussion | 1 | 2 |
| **Writing** | **12** | **24** |
| Listen and Repeat | 4 | 8 |
| Take an Interview | 2 | 4 |
| **Speaking** | **6** | **12** |
| Mixed review | 6 | 12 |
| **Per unit** | **59** | **118** |
| **Whole book** | **708** | **1,416** |

The section proportions are held exactly, so a unit still mirrors the
live test's shape. Writing moves off the live test's twelve, which is
correct: a teaching unit is not a test form, and twelve items of writing
practice per unit was always thin.

---

## 2. The real gain: twelve new activity types

Volume alone would be a worse book. The following are the activities a
standards-based course uses that this build currently does not, each with
the job it does that nothing existing covers.

**A fidelity gap I should name first.** Step Forward's Lesson 1 is
*match the words to the numbered picture*. I substituted a read-only
list, because I had no matching renderer. That is the single largest
departure from the architecture in the whole build, and item 1 below
repairs it.

| # | Activity | What it does that nothing existing does |
|---|---|---|
| 1 | **Match to a labelled scene** | Word to numbered hotspot on an illustration. The book's signature L1 exercise, currently missing. |
| 2 | **Sort into categories** | Drag items into two or three bins. Tests whether a distinction is held, not just recognised. |
| 3 | **Word bank gap-fill** | Drag words into a paragraph. Tests collocation and fit, where letterbox tests spelling. |
| 4 | **Sequence the steps** | Put a process in order. The book's Unit 6 strategy, never built. |
| 5 | **Error correction** | *Yan memorize words every day* to be rewritten. The book does this; it forces noticing before producing. |
| 6 | **Select in the text** | Click the words that support an answer. The pencil-icon exercise, and the evidence skill behind every inference item. |
| 7 | **Table completion** | Fill a grid while listening. The book's 10-speaker by 4-tense chart. Trains parallel listening. |
| 8 | **Dictation** | Type what you hear. Machine-checkable, and the hardest honest test of listening there is. |
| 9 | **Minimal pairs** | Which of two words did you hear? Real perception practice; Listen and Repeat is self-assessed and cannot test this. |
| 10 | **Note completion** | Fill a skeleton outline during a talk. Bridges the notepad and the comprehension items. |
| 11 | **Paraphrase match** | Choose the best restatement. Directly tests Unit 11's taught strategy. |
| 12 | **Odd one out** | Which does not belong, and why. Vocabulary depth rather than breadth. |

Eight of the twelve are machine-markable with per-element feedback, which
keeps the Check Answers contract intact. Dictation and error correction
mark on normalised text with a visible diff.

---

## 3. What each block becomes

Every block roughly doubles and gains at least one new activity type.

**L1 Vocabulary** — 8 to 16 Complete the Words, plus **match to a
labelled scene** (replacing the read-only list), **odd one out**, and a
**sort into categories** on the unit's affix.

**L2 Writing** — 4 to 8 Build a Sentence, a second Academic Discussion
on a different prompt, plus **error correction** on the unit's own
grammar and a **sequence the steps** on the writing strategy itself.

**L3 Grammar** — 6 to 12 Build a Sentence, 2 to 4 Complete the Words,
plus **error correction** and a second **cloze** stating the rule a
different way.

**L4 Everyday Conversation** — 6 to 12 Choose a Response, a second
conversation with 4 more items, 4 to 8 Repeat lines, plus **minimal
pairs** on the unit's sounds and one **dictation** of four sentences.

**L5 Reading** — a second everyday text and a second academic passage,
each with its own item set, plus **select in the text** for the
author's-purpose step and a **paraphrase match** on the main claim.

**On Campus** — a second announcement and a second talk, plus **note
completion** during the talk and a **table completion** on the function
chart.

**Teamwork** — a second email on a different scenario, 2 to 4 interview
questions, 6 to 12 review items, plus a **sort into categories** review
of the unit's vocabulary.

---

## 4. One new thing worth more than the volume: spaced review

Review is currently within-unit only. With twice the items there is
enough material for **cross-unit spaced retrieval**: Unit N's review
draws a third of its items from Units N-1 and N-3, chosen by what the
learner got wrong.

This matters beyond convenience. Unit 1 of this book teaches the spacing
effect and the testing effect, and the book then fails to use either on
its own material. Making the review spaced closes that gap, and the
Bring It To Life box in Unit 1 can finally point at the book itself.

Cost: one scheduler in `progress.js`, a `pool` of retired items per unit,
and a rule that an item is only eligible once its unit is complete.

---

## 5. Engine and gate work

**New renderers:** twelve, listed above. Six are variants of machinery
that already exists (choice, drag, text input); six are genuinely new.

**Drag and drop returns.** Items 1, 2 and 3 need it, and the CMA build's
`Drag` — grip glyph, lift state, ghost, snap, spring-back with a reason,
click path and full keyboard parity — can be lifted across rather than
rewritten.

**Audio grows.** Doubling listening roughly doubles the audio: about 34
items per unit against 17. That strengthens the case for shipping audio
per unit rather than per book, which the current README already does.

**Gate extensions:**
- budget check updated to the doubled table
- every new activity type needs its own structural rules (a sort needs at
  least one distractor bin; a dictation needs a normalisation rule; a
  select-in-text needs its spans to exist in the passage)
- a **stem/answer semantic flag**: the Unit 12 error — a stem describing a
  *critic* answered *convention* — is not machine-checkable, but a cheap
  heuristic can flag any letterbox item whose stem contains a different
  glossary term from its answer, for human review
- a duplicate-item check across units, now that review draws across them

---

## 6. Phases

| Phase | Work | Output |
|---|---|---|
| **1** | Port `Drag`; build items 1-3 (match, sort, word bank) | Three renderers, gate rules, demo page |
| **2** | Build items 4-8 (sequence, error correction, select-in-text, table completion, dictation) | Five renderers |
| **3** | Build items 9-12 (minimal pairs, note completion, paraphrase match, odd one out) | Four renderers; library complete |
| **4** | Spaced review scheduler | Cross-unit retrieval working |
| **5** | **Unit 1 doubled**, as the review gate | 118 items, every new type in use |
| **6** | Units 2-12, one per pass | The doubled book |
| **7** | Whole-book QA, per-unit audio packaging, zip | Release |

Phase 5 is the gate, as Unit 1 was before. You look at a doubled unit
before eleven more inherit its decisions.

---

## 7. Honest cost, and what I would cut

This is roughly **two and a half times the authoring** that got the book
to where it is, and twelve new renderers on top. It is the largest single
piece of work proposed so far.

If you want it smaller, cut in this order:

1. **Drop the second academic passage per unit** (keep one, double the
   items on it). Saves twelve passages, loses little.
2. **Halve the new activity types** — build 1, 5, 6, 8, 10 only. Those
   five carry most of the pedagogical gain; the other seven are variety.
3. **Skip the spaced review.** It is the thing I would keep longest, but
   it is severable.

What I would not cut is item 1. The matching exercise is the book's own
Lesson 1 and its absence is a real departure from the architecture
everything else is faithful to.
