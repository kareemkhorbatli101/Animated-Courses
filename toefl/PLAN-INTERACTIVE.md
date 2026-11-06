# Making every page interactive, explained, spoken and illustrated

Second pass. The Explain panel is now a popup, and the whole plan has been
re-examined for what it actually teaches rather than what it adds.

---

## 0. What the book is today, measured

| | Now | After |
|---|---|---|
| Scenes | 754 | 754 (none removed) |
| Read-only scenes | **91** | **0** |
| Scenes whose question refers to a stimulus not on the page | **37** | **0** |
| Scenes with any audio | 156 (21%) | **754 (100%)** |
| Scenes with a picture, chart or animation | 24 (3%) | **754 (100%)** |
| Scenes with an Explain popup | 0 | **754 (100%)** |
| Arabic anywhere in the book | **none** | every taught term |
| Exercise kinds | 29 | 39 |
| Gate checks | 2,936 | ~5,800 |

The first three rows are defects. The rest is absence. The 37 includes
**every T/F/NI scene in the book**, each of which says *write the line of
the article* while the article is on a different step of the deck.

---

## 1. The Explain popup — confirmed, with its design

### 1.1 It works, and here is the proof

A native `<dialog>` with `showModal()`, tested in Chromium from `file://`:

| Check | Result |
|---|---|
| Opens, `:modal` matches, backdrop paints | ✅ |
| Focus moves inside; native focus trap holds | ✅ |
| Escape closes **and** returns focus to the opening button | ✅ |
| An unsaved draft in a textarea survives open and close | ✅ |
| Arabic renders right-to-left inside | ✅ |
| Console errors | none |

No library, no origin requirement, nothing that `file://` forbids. The
deck's existing footer gains one button.

**One reserved name.** `.dialog` is already a class in `ui.css`, used for
spoken dialogue lines inside listening exercises. The popup must not use
it. This is the same class of mistake as the leader-line element I gave
the class `dot` in the last pass, which silently broke scene lookup for
the deck and the solver. The popup uses `.explain-sheet`, and the gate
gains a reserved-class check so this cannot recur.

### 1.2 Popup for the task, inline for the content

Covering the page is right for some help and wrong for other help, and the
difference is not a matter of taste.

- **Task help belongs in the popup.** *What am I being asked, how do I
  operate this, why does it matter.* You do not need to see the exercise
  to read it, so covering the exercise costs nothing.
- **Content help must stay inline.** A word's meaning, a line of the
  passage, a transcript. Covering the thing being explained while
  explaining it forces the learner to hold it in memory and read at the
  same time, which is precisely the load the popup was meant to remove.

So the popup carries four things, and the glossary rail, line highlight
and transcript stay on the page.

### 1.3 What the popup contains

```js
explain: {
  what:  "One sentence: what this exercise is asking.",
  how:   "One sentence: how to operate it — click, drag, type.",
  why:   "One sentence: what it practises, and where it appears on the test.",
  page:  "A short walkthrough of what is on this page, in order.",
  terms: [ { en: "denominator", ar: "المقام", gloss: "the number underneath" } ]
}
```

Each sentence has its own play button. Each term has two — English and
Arabic. Arabic renders right-to-left, in a serif face, two steps larger,
because 14px Arabic is unreadable.

**It never contains the answer.** That is a hard rule with a gate behind
it, because a help button that resolves the exercise destroys the
retrieval the exercise exists to produce. Answers live in the hint ladder
(F35), which is gated behind an attempt.

**Coverage is guaranteed by generation.** Every scene gets a popup on day
one, assembled from its kind, prompt and note. A hand-written block
overrides it. Coverage is therefore 100% from the first engine commit, and
the content work is improving popups rather than hunting for holes.

### 1.4 Where it sits

On a wide screen the popup is a **right-hand sheet** occupying 380px, so
the exercise stays visible beside it. On a narrow screen it is a full
modal. Both are the same `<dialog>`; only the CSS differs. This keeps the
split-attention cost at zero on desktop and accepts it on a phone, where
there is no alternative.

---

## 2. The five you named

### F1 — No exercise is read-only

The 91 read-only scenes fall into seven repeating patterns, so this is
seven renderers applied many times.

| Pattern | Where | Scenes | Becomes |
|---|---|---|---|
| Glossary list of 8–9 terms | L1 1A | 12 | **`cards`** — retrieval-first flip deck (see F41) |
| Affix or stress chart | L1 2A | 12 | **`build`** — drag prefix onto root, meaning assembles |
| Two-column realia | L3 1A | 12 | **`compare`** — tap the three things that changed |
| Definitions before a reading | L5 1A | 12 | folded into the reading as a tappable glossary rail |
| "Do this / Say this" chart | OC 3A | 12 | **`phrases`** — hear it, shadow it, self-rate |
| Closing takeaway panel | L5 5C, OC c3 | 24 | **`recap`** — apply the takeaway to a new case (F48) |
| Model answer shown before writing | L2 1A | 7 | **`annotate`** — tap each sentence to label its job |

No text is deleted. Every word of the existing read-only content survives
inside the interactive version, because that text is the teaching.

### F2 — A question is always on the page with its stimulus

| Scene | Asks about | Fix |
|---|---|---|
| L5 1B preview (12) | the article | carry masthead and headings — that **is** the preview task |
| L5 1E T/F/NI (12) | "the line of the **article**" | carry the passage with line numbers |
| OC c2 table (12) | "the chart in 3A" | carry the chart |
| TW d quiz (144 items) | items tagged `from: Lesson 3` | each item carries a one-line `recall` snippet |

Implemented once as a rule: **a scene may not reference a stimulus it does
not carry.** The gate parses every prompt and item for referring
expressions — *the article*, *the chart in 3A*, *look back at*, *the first
talk* — and fails the scene unless it has its own `text`, `audio`,
`chart`, `scene` or `recall`.

### F3 — Explain popup on every page

As above. Four parts, generated by default, never the answer.

### F4 — A play button on every page and every exercise

Two levels. Page level reads the heading, prompt and items in turn with a
visible cursor. Exercise level is a per-kind contract:

| Kind | What "play" says |
|---|---|
| `letterbox` | the sentence, gap read as "blank" |
| `order` / `orderset` | the cue before, the assembled sentence after |
| `match` | each word as it is dropped, then the full list |
| `sort` | the bin labels, then each card |
| `cloze` | the rule, gaps read as "blank" |
| `errorfix` | the sentence as written, **then** corrected — the contrast is the teaching |
| `tfni` | the statement, then the cited line |
| `read` | each paragraph, with the line highlighted as it is read |
| `table` / `notes` | the row or line, gaps read as "blank" |
| `wordbank` | the sentence with the chosen word in place |
| `paraphrase` | the source, then the chosen option |
| `write-email` / `discussion` | the model, sentence by sentence |

The gate requires every registered kind to implement `sayable()`.

### F5 — Illustration, animation or cards on every exercise

Four mechanisms built once: **`icons.js`** (line-art set keyed by concept),
**`motion.js`** (six verbs: `settle`, `sweep`, `count`, `swap`, `reveal`,
`pulse`, all honouring `prefers-reduced-motion`), **`SCENES`** (34
primitives, already built, extended to every L1, L3 and OC scene), and
**`cards`**.

**The visual must be load-bearing.** A picture that merely decorates adds
extraneous load and teaches nothing, so the gate requires every scene's
visual to be referenced by at least one item, rationale or label. This is
the rule that stops "add a clipart to satisfy F5" — which is exactly the
drift you asked me to prevent.

---

## 3. The thirty-five more, by category

### Reading

**F6 Clickable line citation** [24] — typing a line number highlights that
line; clicking the line fills the number.

**F7 Tappable glossary rail** [48] — bolded terms open a strip with
definition, Arabic and audio, inline, never a popup.

**F8 Reading pace band** [48] — the ETS expected time for this passage's
length, filling as you read. A calibration, not a punishment.

**F9 Evidence before verdict** [24] — T/F/NI requires selecting the
sentence you are relying on before the buttons activate.

**F10 Paragraph spine** [48] — a marker showing which paragraph each item
draws from, filling in as you answer.

**F11 Distractor autopsy** [96] — after checking, each wrong option shows
*which word in the passage* it misreads, highlighted in place.

### Listening

**F12 Transcript after, never before** [72], with the answer sentence
highlighted on review.

**F13 Slow replay, earned** [72] — 0.8× after the first attempt only.

**F14 Who is speaking** [72] — the cast portraits exist and are unused
during playback; the speaker's portrait lights as their line plays.

**F15 Notepad everywhere** [48] — currently only in `talk`; it persists
into the items.

**F16 Shadowing mode** [36] — play, record, compare. Degrades to
self-rating where the microphone is unavailable, which it is from `file://`.

**F17 Dictation diff** [12] — the word-level comparison is computed
already; show it aligned, with the missed words in place.

### Vocabulary

**F18 Every taught term carries Arabic** [~600 terms] — in the glossary,
the cards and the feedback, not only the popup.

**F19 Word family tree** [24] — noun, verb, adjective, adverb, stress marked.

**F20 Collocation chips** [24] — the three words a term usually sits beside,
which is what makes a word usable rather than recognised.

**F21 Stress made visible** [12] — Unit 12's pairs render the stressed
syllable larger and louder. The lesson currently describes a sound the
learner cannot hear.

**F22 Known/unknown sorting** [12] — feeds the spaced scheduler already built.

### Grammar

**F23 Function colouring** [60] — tiles colour by job as a sentence assembles.

**F24 The rule fills itself in** [27] — the Grammar Note completes as each
cloze gap is answered: the rule is built, not read.

**F25 The correction animates** [24] — the wrong word slides out, the right
one slides in, and the corrected sentence is spoken.

**F26 Verb-pattern matrix** [24] — a sortable grid of verb against form.

**F27 Why this tile is wrong** [60] — distractor tiles in `order` are
currently silent; dropping one explains why it cannot go there.

### Writing

**F28 Model and draft side by side** [48] — the model's four jobs
colour-coded, your paragraphs colouring as they match.

**F29 Checklist that points** [48] — ticking a line highlights the sentence
in your draft that satisfies it, or says it cannot find one.

**F30 Word-count ring** [48].

**F31 Sentence-shape hints** [48] — three frames from this unit's grammar,
inserted at the cursor on demand.

### Speaking

**F32 Countdown ring with band descriptors** [72] — self-rating gains
criteria instead of a feeling.

**F33 Model answers played** [48] — they are written and never spoken.

**F34 Length against the model** [48].

### Cross-cutting

**F35 Progressive hints** [754] — three levels, gated behind an attempt:
a nudge, a narrowing, then the method. Never the answer.

**F36 Arabic interface toggle** [754] — instructions and buttons in Arabic;
content stays English, because translating it removes the exercise.

**F37 Mistake log** [12 units] — every wrong answer with its rationale,
feeding the spaced scheduler.

**F38 Reduced motion and screen-reader parity** [754] — verified by the
gate, not by intention.

**F39 Audio pack manifest** [12 units] — every line that needs recording,
named, so human audio drops in later without touching the data.

**F40 Worked first item** [754] — does the first item with a narration of
why, then resets it. Fades across the unit (F43).

---

## 4. The pedagogical pass

Twelve additions from re-reading the plan against what is known about how
people learn, rather than against a feature list. Several of them are the
book finally practising what its own Unit 1 teaches.

**F41 Retrieval before presentation, in every card** [12] — the flip deck
asks for the meaning *before* it shows it, and records the attempt. A deck
that shows first and asks second is recognition practice, which Unit 1
spends a whole lesson arguing against. The book should not contradict
itself in its own interface.

**F42 Predict, then check** [754] — before Check Answers, an optional
one-tap prediction: *how many of these do you think you have right?* The
actual score appears beside the prediction. Unit 1's article is about
students mispredicting their own accuracy; this makes the book measure the
thing it teaches, per exercise, and the gap is logged.

**F43 Faded worked examples** [754] — F40's "show me one" is full in
Lesson 1, partial by Lesson 3, and withdrawn by Lesson 5. A worked example
that helps a beginner hinders someone who no longer needs it, so support
that does not fade becomes a crutch.

**F44 Self-explanation after a miss** [754] — one optional line: *in your
own words, why is the right answer right?* Ungraded, stored, and surfaced
again in the spaced review. Producing the explanation is what consolidates
it; reading mine is not.

**F45 Elaborative interrogation on distractors** [~400] — before revealing
why an option is wrong, ask the learner why they think it is. The
rationales are already written for every option in the book; they are
currently delivered without ever asking.

**F46 Interleave within the lesson** [84] — L1's sixteen Complete the Words
items are blocked in four sets of four by type. Mixing them forces the
learner to select the method rather than apply the one just demonstrated.
This is Unit 6's own content, applied to Unit 6's own page.

**F47 Signal after, not before** [168] — highlighting the relevant region
of a passage or chart is a real aid and gives the answer away if shown
first. It appears on review only.

**F48 Transfer in the recap** [24] — the closing panel asks the learner to
apply the unit's distinction to a *new* case rather than restate it.
Restating is recognition; applying is the thing being taught.

**F49 Segmented audio** [72] — long talks are chunkable into their stated
parts. Working memory is the binding constraint in listening, and a
245-word talk played as one block exceeds it for most learners at this level.

**F50 One concept, one icon, twelve units** [754] — the same idea takes the
same icon everywhere, so the icon becomes a retrieval cue rather than
decoration. *Measurement*, *comparison*, *evidence*, *inference* and
*claim* recur in every unit of this book under different subject matter;
this is what makes that visible.

**F51 The mistake log resurfaces the item** [12 units] — not the topic. A
learner who got *fewer/less* wrong needs that sentence again, not a lesson
on countability.

**F52 Calibration report per unit** [12] — the predictions from F42
collected: where you were confident and wrong, which is the most useful
single page in any study tool and costs nothing to produce once F42 exists.

---

## 5. How this is built without drift

### 5.1 The gate is the specification

Every requirement becomes a gate rule **before** any content is written.
The gate then fails loudly, with a count, until the work is done. There is
no checklist to forget because there is no checklist: the gate enumerates
all 754 scenes.

New rules, in this order:

1. `no-read-only` — the kind is removed from the registry
2. `stimulus-present` — no referring expression without its referent
3. `explain-complete` — four parts, or generated
4. `explain-has-no-answer` — the popup's text must not contain any item's answer
5. `sayable` — every kind implements it
6. `visual-load-bearing` — every visual is referenced by an item or rationale
7. `arabic-terms` — every term in a popup has Arabic, marked reviewed or not
8. `hint-ladder` — three levels, none of which is the answer
9. `motion-safe` — every animation has a reduced-motion path
10. `aria-live` — every state change is announced
11. `reserved-class` — no renderer may use `.dialog`, `.dot`, `.tile`, `.opt`,
    or any other class the deck or solver selects on

Rule 11 exists because I have now made that mistake twice: `.dot` broke
scene lookup in the last pass, and `.dialog` would have broken dialogue
lines in this one.

### 5.2 Zero regression, mechanically

Three existing guarantees become preconditions for every commit:

- **2,936 gate checks** stay green and only grow
- **768/768 scenes** keep solving through their own click path
- **`shots.js`** reports no clipping, both themes, desktop and phone

The solver is the one that matters. Every new renderer needs a branch in
`tools/solver.js` before its content is written, and the gate already
fails on a kind with no branch. That is what caught eight broken
error-correction items last time.

Three additions to the harness:

- **`tools/coverage.js`** — a 754 × 52 matrix printing the unmet cells.
  This is the progress report and the definition of done in one file.
- **`tools/a11y.js`** — keyboard-only traversal of every scene, plus an
  accessible name on every interactive element.
- **`tools/popup.js`** — opens the Explain popup on every scene and checks
  focus, Escape, draft preservation and that no answer string appears in it.

### 5.3 Phase order

Engine first, entirely. Content second, unit by unit. No unit begins until
the engine it needs is finished and benched.

| Phase | Work | Done when |
|---|---|---|
| **1** | `speech.js` ported from the CMA build, extended for Arabic | the bench speaks both and says so plainly when it cannot |
| **2** | `explain.js`: popup, sheet layout, generated panels, `sayable()` for all 29 kinds | rules 3–5 green on every existing scene |
| **3** | `icons.js`, `motion.js`, reduced-motion paths | rules 6, 9, 10 green |
| **4** | Seven new renderers for F1, with solver branches | `dev/lab.html` exercises all 39 kinds |
| **5** | F6–F17 reading and listening mechanisms | rules green, no content yet |
| **6** | F18–F34 by category | as above |
| **7** | F35–F40 cross-cutting | `coverage.js` shows only content cells unmet |
| **8** | **F41–F52, the pedagogical layer** | predict/explain/fade working on the bench |
| **9** | **Unit 1 converted in full**, as the review gate | you look at it before eleven more inherit its decisions |
| **10** | Units 2–12, one per pass | `coverage.js` all green |
| **11** | Whole-book QA, audio manifests, package | solve clean, shots clean, zip verified from a clean extraction |

Phase 9 exists for the same reason it did last time: Unit 1 doubled was
worth looking at before Units 2–12 copied its shape, and three decisions
changed because of it.

---

## 6. Cost, and what I would cut

Larger than the doubling, which was the largest piece of work so far.

- **Engine**: eleven new modules or major extensions, seven new renderers,
  three new tools.
- **Content**: 754 Explain popups, ~600 Arabic terms, 91 conversions, and a
  load-bearing visual for the 730 scenes that lack one.

**The Arabic is what I would flag hardest.** Six hundred terms is a
translation job, and a wrong gloss is invisible to exactly the reader who
needs it. I can produce them; they should be checked by someone who reads
Arabic before they ship. Every term will carry `reviewed: false` until that
happens and the gate will report the count, so it cannot quietly pass.

### If it has to be smaller, cut in this order

1. **F16, F32–F34** — recording and self-assessment. The microphone does not
   work from `file://` anyway, so these degrade to what already exists.
2. **F26, F19, F20** — the richer vocabulary and grammar views. Real gains,
   least load-bearing.
3. **F36** — Arabic interface. Keep Arabic on the terms; the terms teach.
4. **F10, F8** — reading spine and pace band. Informational, not instructional.

**What I would not cut: F1, F2, F9, F25, F41, F42, F44.** F2 because a
question asked away from its stimulus tests memory and claims to test
reading. F9 and F44 because citing evidence and explaining your own
reasoning are the two habits the whole book has been building. F41 and F42
because a book that teaches the testing effect and then builds recognition
exercises with no calibration is arguing against itself on its own pages.
