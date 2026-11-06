# Making every page interactive, explained, spoken and illustrated

A plan to close five gaps you named and thirty-five more I found, across
754 scenes in twelve units, without losing anything that currently works.

---

## 0. What the book is today, measured

| | Now | After |
|---|---|---|
| Scenes | 754 | 754 (none removed) |
| Read-only scenes | **91** | **0** |
| Scenes whose question refers to a stimulus not on the page | **37** | **0** |
| Scenes with any audio | 156 (21%) | **754 (100%)** |
| Scenes with a picture, chart or animation | 24 (3%) | **754 (100%)** |
| Scenes with an Explain panel | 0 | **754 (100%)** |
| Arabic anywhere in the book | **none** | every taught term |
| Exercise kinds | 29 | 39 |
| Gate checks | 2,936 | ~5,500 |

Those first three rows are the defects. The rest is absence.

---

## 1. The five you named

### F1 — No exercise is read-only

91 scenes currently present text and ask nothing. They are not random:
they fall into six repeating patterns, so this is six conversions applied
many times, not 91 inventions.

| Pattern | Where | Scenes | Becomes |
|---|---|---|---|
| Glossary list of 8–9 terms | L1 1A | 12 | **`cards`** — a flip deck: term, tap to hear, flip for meaning + Arabic, swipe to sort known/unknown |
| Affix or stress chart with examples | L1 2A | 12 | **`build`** — drag the prefix onto the root and watch the meaning assemble |
| Two-column realia (before/after, active/passive) | L3 1A | 12 | **`compare`** — tap the three things that changed between the two versions |
| Definitions before a reading | L5 1A | 12 | folded into the reading as a tappable glossary rail (F2 also requires this) |
| "Do this / Say this" chart | OC 3A | 12 | **`phrases`** — tap to hear each phrase, then shadow it and self-rate |
| Closing takeaway panel | L5 5C, OC c3 | 24 | **`recap`** — drag each takeaway onto the lesson it came from |
| Model answer, shown before writing | L2 1A | 7 | **`annotate`** — tap each sentence to label its job |

Seven new renderers. Nothing is deleted: every word of the existing
read-only text survives inside the interactive version, which matters
because that text is the teaching.

### F2 — A question is always on the page with its stimulus

37 scenes ask about something that is on a different step of the deck.
The deck shows one scene at a time, so "different step" means the learner
is answering from memory, which is not the skill being tested.

| Scene | Asks about | Fix |
|---|---|---|
| L5 1B preview (12) | the article | carry the masthead and headings — that **is** the preview task, so this is the honest stimulus |
| L5 1E T/F/NI (12) | "the line of the **article**" | carry the whole passage beside the items, with line numbers |
| OC c2 table (12) | "the chart in 3A" | carry the chart |
| TW d quiz (12 × 12 items) | items tagged `from: Lesson 3` | each item carries a one-line `recall` snippet of what it is testing |

Implemented once as a rule rather than 37 times as a patch: **a scene may
not reference a stimulus it does not carry.** The gate parses every
prompt and item for referring expressions — *the article*, *the chart in
3A*, *look back at*, *the first talk* — and fails the scene unless it has
its own `text`, `audio`, `chart`, `scene` or `recall`.

### F3 — Explain, on every page

A button in the footer of every scene opens a panel with four parts:

```js
explain: {
  what:  "One sentence: what this exercise is asking you to do.",
  how:   "One sentence: how to operate it — click, drag, type.",
  why:   "One sentence: what it is practising, and where it appears on the test.",
  terms: [ { en: "denominator", ar: "المقام", gloss: "the number underneath" } ]
}
```

Each of the three sentences has its own play button. Each term has two:
English and Arabic. Arabic is right-to-left, in a serif face, at a larger
size, because 14px Arabic is unreadable.

**Coverage is guaranteed by generation, not by discipline.** Every scene
gets a panel on day one, assembled from its kind, its prompt and its
note. A hand-written `explain` block overrides the generated one. So the
figure is 100% from the first commit of the engine, and the work after
that is improving panels rather than filling holes.

The gate reports the ratio of hand-written to generated and fails if a
hand-written panel is missing any of the four parts.

### F4 — A play button on every page and every exercise

Two levels.

**Page level.** Every scene gets "Play this page": the heading, the
prompt, then each item in turn, with a visible cursor moving through the
text as it is read.

**Exercise level.** Every kind declares what playing it means. This is a
contract, not a guess:

| Kind | What "play" says |
|---|---|
| `letterbox` | the sentence with the gap read as "blank" |
| `order` / `orderset` | the target sentence, once assembled correctly; before that, the cue |
| `match` | each word as it is dropped, then the full list |
| `sort` | the bin labels, then each card |
| `cloze` | the rule with each gap read as "blank" |
| `errorfix` | the sentence as written, then the sentence corrected — the contrast **is** the teaching |
| `tfni` | the statement, then the cited line from the passage |
| `read` | each paragraph, with the line being read highlighted |
| `table` / `notes` | the row or line, gaps read as "blank" |
| `wordbank` | the sentence with the chosen word in place |
| `minimal-pairs` | already does this |
| `paraphrase` | the source, then the chosen option |
| `write-email` / `discussion` | the model, sentence by sentence |

The gate requires every registered kind to have a `sayable()` and fails
on any kind that does not.

### F5 — Illustration, animation or cards on every exercise

Minimum one per scene, two or more wherever the content supports it. Four
mechanisms, all built once:

1. **`icons.js`** — a line-art icon set in the book's existing style, keyed
   by concept (`measure`, `compare`, `listen`, `sequence`, `error`, `credit`),
   so an icon is a data reference rather than a drawing.
2. **`motion.js`** — a small animation vocabulary: `settle` (a dropped chip
   seats itself), `sweep` (a reading cursor), `count` (a number rolls),
   `swap` (the wrong word becomes the right one), `reveal` (a card flips),
   `pulse` (a target asks to be looked at). Every one checks
   `prefers-reduced-motion` and degrades to an instant state change.
3. **`SCENES`**, already built — 34 line-art primitives, currently used by
   12 scenes. Extended to every L1, L3 and OC scene.
4. **`cards`** — the flip-card renderer from F1, reused anywhere a set of
   terms needs rehearsing.

The gate counts visual elements per scene and fails at zero.

---

## 2. The thirty-five more

Each applies to a whole category, so each is written once and lands many
times. The number in brackets is how many scenes it touches.

### Reading (L5, `read`, `tfni`, `selectintext`, `paraphrase`)

**F6 Clickable line citation** [24] — in `tfni`, typing a line number
highlights that line in the passage; clicking the line fills the number.
The citation stops being an act of faith.

**F7 Tappable glossary rail** [48] — every bolded term in a passage opens
a strip with definition, Arabic and audio, without leaving the page.

**F8 Reading pace band** [48] — a quiet bar showing the ETS expected time
for this passage's length, filling as you read. Not a timer that punishes;
a calibration you can ignore.

**F9 Evidence before verdict** [24] — optional mode in which `tfni`
requires you to select the sentence you are relying on before the T/F/NI
buttons activate. This is the single highest-value reading habit in the
book and it is currently unenforced.

**F10 Paragraph spine** [48] — a vertical marker beside the passage
showing which paragraph each item draws from, filling in as you answer, so
the distribution of questions becomes visible.

**F11 Distractor autopsy** [96] — after checking, each wrong option
expands to show *which* word in the passage it misreads, highlighted in
place. The rationales already exist; they are currently only text.

### Listening (L4, OC, `listen`, `talk`, `respond`, `notes`, `dictation`)

**F12 Transcript after, never before** [72] — a transcript panel that
unlocks only after the first check, with the sentence containing each
answer highlighted as you review.

**F13 Slow replay, earned** [72] — a 0.8× replay available after the first
attempt. Before that the audio plays once, as on the test.

**F14 Who is speaking** [72] — the cast portraits already exist and are
unused during playback. The speaker's portrait lights as their line plays.

**F15 Notepad everywhere** [48] — the note pad currently exists only in
`talk`. Every listening scene gets one, and it persists into the items.

**F16 Shadowing mode** [36] — play a line, record yourself, play both back
to back. Falls back to self-rating where the microphone is unavailable,
which it is from `file://`.

**F17 Dictation diff** [12] — the word-level comparison is computed
already and shown as text. Show it as an aligned diff with the missed
words in place.

### Vocabulary (L1, `letterbox`, `match`, `oddone`, `sort`)

**F18 Every taught term carries Arabic** [~600 terms] — not only in the
Explain panel: in the glossary, the flip cards and the answer feedback.

**F19 Word family tree** [24] — for each `-tion`/`-ment`/`-al` set, a
tappable tree showing noun, verb, adjective and adverb with stress marked.

**F20 Collocation chips** [24] — tap a taught word, see the three words it
most often sits beside, which is what makes a word usable rather than
recognised.

**F21 Stress made visible** [12] — Unit 12's noun/verb pairs render the
stressed syllable larger and louder on playback. Currently the lesson
describes a sound the learner cannot hear.

**F22 Known/unknown sorting** [12] — the flip deck records which terms you
turned over twice, and feeds them to the spaced scheduler.

### Grammar (L3, `order`, `orderset`, `cloze`, `errorfix`, `wordbank`)

**F23 Function colouring** [60] — as a sentence is assembled in `order`,
each tile colours by its job: subject, verb, object, adjunct. The
structure becomes visible rather than asserted.

**F24 The rule fills itself in** [27] — in `cloze`, the Grammar Note beside
it completes as each gap is answered, so the rule is built rather than read.

**F25 The correction animates** [24] — in `errorfix`, the wrong word slides
out and the right one slides in, and the corrected sentence is then spoken.

**F26 Verb-pattern matrix** [24] — for Units 10 and 12, a sortable grid of
verb against form, filled by dragging, replacing the list that currently
has to be memorised.

**F27 Why this tile is wrong** [60] — the distractor tiles in `order` are
currently silent. Dropping one shows why it cannot go there.

### Writing (L2, TW, `discussion`, `write-email`, `paragraph`)

**F28 Model and draft side by side** [48] — with the model's four jobs
colour-coded and your own paragraphs colouring as they match.

**F29 Checklist that points** [48] — ticking a checklist line highlights
the sentence in your draft that satisfies it, or tells you it cannot find
one. This turns self-assessment from a formality into a check.

**F30 Word-count ring** [48] — a ring rather than a number, filling to the
minimum and then continuing in a different tone.

**F31 Sentence-shape hints** [48] — three sentence frames from this unit's
grammar, available on demand, inserted at the cursor.

### Speaking (`repeat`, `interview`)

**F32 Countdown ring with band descriptors** [72] — the 45 seconds shown
as a ring, with the 1–6 band descriptors beside it, so self-rating has
criteria rather than a feeling.

**F33 Model answer, played** [48] — the model answers are written and
never spoken. Play them.

**F34 Length against the model** [48] — show your recording's length
against the model's, which is the single most actionable thing about a
45-second answer.

### Cross-cutting

**F35 Progressive hints** [754] — three levels on every exercise: a nudge,
a narrowing, then the method. Never the answer.

**F36 Arabic interface toggle** [754] — instructions, buttons and the
Explain panel in Arabic; the English content stays English, because
translating the content would remove the exercise.

**F37 Mistake log** [12 units] — every wrong answer recorded with its
rationale, reviewable per unit, feeding the spaced scheduler already built.

**F38 Reduced motion and screen-reader parity** [754] — every animation has
a static equivalent and every state change is announced. Verified by the
gate, not by intention.

**F39 Audio pack manifest** [12 units] — a per-unit manifest naming every
line that needs recording, so human audio can be dropped in later without
touching the data. The fallback to speech synthesis stays.

**F40 Worked first item** [754] — "show me one" does the first item of any
exercise with a narration of why, then resets it.

---

## 3. How this is built without drift

### 3.1 The gate is the specification

Every requirement above becomes a gate rule **before** any content is
written. The gate then fails loudly, with a count, until the work is done.
There is no checklist to forget and no scene that can be missed, because
the gate enumerates all 754.

New rules, added in this order:

1. `no-read-only` — the kind `read-only` is removed from the registry
2. `stimulus-present` — no referring expression without its referent
3. `explain-complete` — four parts, or generated
4. `sayable` — every kind implements it
5. `visual-min` — at least one visual element per scene
6. `arabic-terms` — every term in an Explain panel has Arabic
7. `hint-ladder` — three levels, none of which is the answer
8. `motion-safe` — every animation has a reduced-motion path
9. `aria-live` — every state change is announced

### 3.2 Zero regression, mechanically

Three existing guarantees become preconditions for every commit:

- **2,936 gate checks** stay green and only grow
- **768/768 scenes** keep solving through their own click path
- **`shots.js`** reports no clipping in either theme at desktop and phone width

The solver is the one that matters. Every new renderer needs a branch in
`tools/solver.js` before its content is written, and the gate already
fails on a kind with no branch. That is what stopped eight broken
error-correction items shipping last time, and it is the same mechanism.

Two additions to the harness:

- **`tools/coverage.js`** — a matrix of 754 scenes against the 40
  requirements, printing the unmet cells. This is the progress report and
  the definition of done in one file.
- **`tools/a11y.js`** — keyboard-only traversal of every scene, plus a
  check that every interactive element has an accessible name.

### 3.3 Phase order

Engine first, entirely. Content second, unit by unit. No unit is started
until the engine it needs is finished and benched, because the alternative
is twelve units each needing a retrofit.

| Phase | Work | Done when |
|---|---|---|
| **1** | `speech.js` ported from the CMA build and extended: Arabic voices, fallback chain, visible degradation | the bench speaks English and Arabic, and says so plainly when it cannot |
| **2** | `explain.js` + generated panels + `sayable()` for all 29 existing kinds | every existing scene has a panel and a play button; gate rules 3 and 4 go green |
| **3** | `icons.js`, `motion.js`, reduced-motion paths | gate rule 5 and 8 green on existing scenes |
| **4** | Seven new renderers for F1, with solver branches and bench scenes | `dev/lab.html` exercises all 39 kinds |
| **5** | F6–F17 reading and listening mechanisms | gate rules green; no content yet |
| **6** | F18–F34 by category | as above |
| **7** | F35–F40 cross-cutting | `coverage.js` shows only content cells unmet |
| **8** | **Unit 1 converted in full**, as the review gate | you look at it before eleven more inherit its decisions |
| **9** | Units 2–12, one per pass | `coverage.js` all green |
| **10** | Whole-book QA, audio manifests, package | solve 768/768, shots clean, zip verified from a clean extraction |

Phase 8 exists for the same reason it did last time. Unit 1 doubled was
worth looking at before Units 2–12 copied its shape, and three of its
decisions changed as a result.

---

## 4. What this costs, honestly

This is larger than the doubling, and the doubling was the largest piece
of work in the project so far.

- **Engine**: ten new modules or major extensions, seven new renderers,
  two new tools. Phases 1–7.
- **Content**: 754 Explain panels, ~600 Arabic terms, 91 conversions,
  and a visual element for every scene that lacks one — 730 of them.
- **The Arabic is the part I would flag hardest.** Six hundred terms is a
  translation job, and a wrong Arabic gloss is worse than none, because it
  is invisible to a reader who needs it. I can produce them, and I would
  want them checked by someone who reads Arabic before they ship. I will
  mark every one as unreviewed in the data until that happens, and the
  gate will report the count.

### If it has to be smaller, cut in this order

1. **F16, F32–F34 (recording and self-assessment)** — the microphone does
   not work from `file://` anyway, so these degrade to self-rating, which
   already exists.
2. **F26, F19, F20 (the richer vocabulary and grammar views)** — real gains,
   and the least load-bearing.
3. **F36 (Arabic interface)** — keep Arabic on the terms, drop it on the
   buttons. The terms are the part that teaches.
4. **F10, F8 (reading spine and pace band)** — informational rather than
   instructional.

What I would not cut is **F1, F2, F9 and F25**. F2 because a question
asked away from its stimulus is testing memory and claiming to test
reading. F9 because citing evidence before judging is the habit the whole
book has been building. F1 and F25 because they are the difference between
a book that explains and a book that asks.
