# Words in Context — 200 graded SAT vocabulary questions

A 116-page .docx: 200 blank-completion questions testing vocabulary in context only
(no grammar, no punctuation, no sentence structure), with a key that explains every
wrong option.

    build/SAT-Words-in-Context.docx     the book
    build/SAT-Words-in-Context.pdf      the same thing, for reading on screen
    build/check-report.md               the result of the 600 check passes

## The grid

4 levels × 5 subject areas × 10 questions. Levels run Foundation, Developing, Target,
Stretch; subject areas are History and Civics, Biology and Earth Science, Physical
Science, Humanities, Social Science. Chapters are by level; domains are sections
within a chapter; questions are numbered 1–200 straight through.

## One source of truth

`data/items/*.yaml` holds all 200 items. Each item carries the passage, the four
options, the answer, a trap tag and an explanation for every wrong option, the exact
words that license the answer (`clue`), the relation they bear to the blank, a sample
of the inert detail that must not influence the choice (`noise`), and the inference
pathway in one sentence. The questions and the key are both generated from that file,
so they cannot drift apart.

    python3 tools/validate.py    structural validation of the item files
    python3 tools/checks.py      the 600 item-level passes + 25 book-level checks
    python3 tools/build.py       regenerate the .docx

## The 600 checks

Three passes per item, 200 items, evenly distributed:

* **A — inference pathway.** Every clue string occurs verbatim in its passage; the
  relation is from the closed set; the pathway states what the blank must mean; the
  answer word does not appear in its own passage; Level 4 items declare two clues.
* **B — distractor integrity.** Four distinct single-word options; the answer letter
  carries the target word; every wrong option has a trap tag and an explanation of at
  least six words; at least two distinct trap types per item; T3 (the familiar sense of
  a word being tested in a rare sense) is used on rare-sense items and only on those;
  no distractor already appears in the passage.
* **C — mechanical conformance.** The blank is the same eight underscores exactly once
  in every passage and nowhere else; passage length inside the level's band; at least
  three inert details declared, each verbatim, none of them overlapping the clue; no
  passage uses a target word from its own level or a harder one; options are single
  lower-case words.

Book-level checks are reported separately because they are not per-item: the 4 × 5 × 10
grid, 200 distinct target words, answer letters at exactly 50 each with no run of three,
trap distribution per level, clue-relation variety, passage length rising with level,
and the proportion of each passage that lies off the clue path.

## What the checks do not prove

They are structural. No automated check can confirm that a passage really licenses one
option and defeats the other three — that is a judgement, and it was made by reading.
The generated document was read end to end; five items whose distractors could be
argued correct were found that way and rewritten, and the layout defects found the same
way (items splitting across a page, options not aligning) were fixed. A green count of
600 is a measure of coverage, not of quality.

Two further limits, stated plainly:

* **The frequency bands are judgement, not corpus measurement.** Level 1 is described as
  the 3,000–5,000 most frequent words and Level 4 as 12,000-plus, but the words were
  assigned to those bands by hand. Before this book is used for placement the list
  should be checked against a frequency corpus.
* **The domain weights quoted in the front matter come from secondary sources.**
  `satsuite.collegeboard.org` would not resolve from this machine, so the figure for
  Craft and Structure (about 28 per cent of the Reading and Writing section) could not
  be confirmed against primary documentation and should be before publication.

Two design claims were removed during the build because measurement did not support
them: that the inert share of a passage rises at every level (measured 72 / 75 / 75 /
70 per cent, which is flat, not rising), and that Level 4 passages are half inert. What
actually rises with level is passage length, the distance from clue to blank, and the
number of clues that must be combined. The checks now test those instead.
