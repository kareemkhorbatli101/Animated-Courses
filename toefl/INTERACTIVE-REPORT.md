# What was built, and what it cost

`PLAN-INTERACTIVE.md` listed 52 fixes. All 52 are at 100% of their
measured scope. The book is 756 scenes across 84 pages in 12 units;
`tools/coverage.js` reports 10,307 of 10,995 cells met, and the gap is
one tracked ambition, described at the end.

## The five that were asked for by name

**No exercise is read and understand.** All 91 read-only panels became
exercises and the `read-only` renderer is gone from the registry; the
gate refuses the kind outright, so the book cannot reacquire one a scene
at a time. Not one word of those panels was deleted — each one's text is
now the thing its exercise is about.

**A question is always on the page with its stimulus.** 83 scenes name
the scene that owns their passage, chart or talk, and the deck carries
it in at render. The worst case was a Lesson 5 exercise asking the
learner to "write the line of the article" with no article on the page,
on a deck that shows one scene at a time.

**An Explain popup on every page.** Native `<dialog>`, four panels,
generated for every one of the 37 kinds, and it never contains an
answer.

**A play button on every page and every exercise.** Every kind
implements `sayable()`; the page-level button reads heading, prompt and
items with a visible cursor.

**Illustration on every exercise.** Every scene carries one to three
labelled concept icons that name the idea it is about, and every scene
that marks anything animates its own feedback.

## The rest

Reading gained citable lines, a glossary that opens where the word is, a
pace band, evidence before verdict, a paragraph spine and an autopsy on
every wrong option. Listening gained transcripts after the attempt,
earned slow replay, speaker portraits that light as their line plays, a
notepad everywhere, shadowing and a word-aligned dictation diff.
Vocabulary gained retrieval-first decks with Arabic and collocations,
word families with the stress marked, and known/unknown sorting that
feeds the spaced schedule. Grammar gained function colouring, a rule
that builds itself from the learner's own right answers, an animated
correction and a spare tile that explains itself. Writing and speaking
gained a pointing checklist, a word-count ring, sentence frames, the
model's sentences with their jobs named, a countdown with band
descriptors, and the model answers spoken.

Across all of it: three graded hints per kind, a prediction before every
check with the gap kept, a worked first item that fades across the unit,
a question asked before any rationale is handed over, a mistake log that
keeps the item rather than the topic, an Arabic interface for the
chrome, and a calibration report per unit.

## What the tooling proves, every build

- `check.js` — 2,945 assertions, including the ones added here: a
  carried stimulus must resolve and its cited lines must exist; a field
  one renderer owns may not be borrowed by another; the two copies of
  the audio-file hash must agree; no regex literal may carry a doubled
  class escape.
- `solve.js` — 794 of 794 scenes operated through their own click path.
- `a11y.js` — 794 of 794 scenes clean on keyboard and screen-reader
  checks, in both motion modes.
- `shots.js` — 84 pages, 1,512 screenshots, no clipping in either theme.
- `pack.js` — a 1.1 MB zip, verified from a clean extraction: it renders,
  it grades, and it makes no request outside its own folder.

## What is deliberately not done

**F5c, a bespoke illustration on every exercise: 72 of 756.** Scene art,
charts, flip decks, pinned diagrams and grids are on the scenes where a
picture carries information. The rest are mostly a cloze or a Complete
the Words, where an illustration would be the decoration the plan's own
rule exists to prevent: *the rule that stops "add a clipart to satisfy
F5"*. It is reported with a number against it rather than quietly
dropped or quietly inflated.

## What the work actually cost, in mistakes

Eight defects were found by looking at screenshots and none of them by a
test, which is the same lesson the doubling pass produced:

- A worked example opened on the retrieval deck and gave away a card the
  learner was about to be asked for — in a unit that spends a lesson
  arguing recall beats recognition.
- Recap chips printed raw `<b>` tags, because the chip builder uses
  `textContent` so a screen reader does not read tag names aloud.
- Verb and linker were given two oranges that differ by a few points of
  hue and read as one colour.
- A table's three column headers pushed it past the edge of its card.

And three classes of silent fault, each caught by reading output rather
than by a passing test:

- **Matching by pattern instead of by position.** Three separate tools
  wrote their results onto the wrong item, because `indexOf(text)` finds
  the first match in the file. Each now anchors inside the thing it is
  editing and reports what it could not place.
- **Measuring the wrong text.** Rules were repeatedly tested against
  rationales, which explain answers, rather than prompts, which ask
  questions. "The reading wouldn't have drifted" is a measurement; "the
  n belongs to the article" is the article *a/an*.
- **Escaping.** A regex literal written with doubled backslashes
  compiles, matches nothing, and disables the feature it guards. The
  gate now refuses them.
