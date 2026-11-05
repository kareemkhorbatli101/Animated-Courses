# Step Forward 3 → TOEFL 2026

A plan to rebuild Oxford *Step Forward* Level 3 as a TOEFL iBT 2026 course:
same architecture, same lesson cycle, the same kinds of exercise in the same
slots, augmented where the 2026 test has task types the source book has no
equivalent for.

Research baseline and every source: `research/baseline.md`.

---

## 0. Three things to settle before reading on

**0.1 The book is Oxford, not Cambridge.** There is no Cambridge *Step
Forward*. *Step Forward* is Oxford University Press, Second Edition, Level 3
Student Book ISBN 9780194493789, by Jane Spigarelli and Jayme
Adelson-Goldstein. Everything below is built on that book. If you meant a
Cambridge title, say which and I will redo the correspondence map — the method
transfers, the map does not.

**0.2 What gets cloned is the architecture, not the book.** The unit sequence,
the six-lesson cycle, the exercise taxonomy and the page grammar are a
pedagogical system, and that is what "one-for-one" means here. Not one
sentence, not one image, not one vocabulary list, not one reading passage comes
across. All content is newly authored against the ETS specification. This is
the only version of "cloning in" I will build, and it is also the better
product: a book re-pitched for TOEFL needs different text anyway.

**0.3 The level ladder has to be re-cut, and this is the one place "100%
correspondence" genuinely cannot hold.** Step Forward 3 sits around A2+/B1.
The 2026 TOEFL spans A1–C2, and its academic tasks are B1–C2:

| TOEFL 2026 task | Target band |
|---|---|
| Listen and Choose a Response | A1–B2 |
| Read in Daily Life | A1–C1 |
| Listen to a Conversation / Announcement | A2–C1 |
| Listen to an Academic Talk | A2–C2 |
| Complete the Words | B1–C1+ |
| Read an Academic Passage | B1–C2 |
| Write an Email / Academic Discussion | B1–C2 |
| Build a Sentence, Listen and Repeat, Take an Interview | A1–C2 |

So the *slots* clone one-for-one. The *ceiling* of each slot rises. Each
exercise is authored as a graded ladder inside its slot, entering at Step
Forward 3's level and climbing to that task's TOEFL ceiling. A learner who can
do the book can start it; a learner who finishes it has been taken to the top
of the band the real task reaches. That is the honest reading of "virtually
100% correspondence except when augmenting."

---

## 1. The finding: the correspondence is near-exact

This is the result that makes the project worth doing. Step Forward's
six-lesson cycle and the 2026 TOEFL's twelve task types map onto each other
with nothing left over on either side.

| Step Forward 3 lesson slot | What the slot does | Becomes, in the TOEFL book | Status |
|---|---|---|---|
| **L1 Vocabulary** | picture-dictionary set, word → meaning, word in use, dictionary and alphabetising skills | **Complete the Words** | clone + reformat |
| **L2 Real-life writing** | fill in a form, write a note or message, plan → revise → edit | **Write an Email** + **Build a Sentence** | clone + **augment** |
| **L3 Grammar** | grammar chart, then controlled practice; explicitly "produce simple, compound and complex sentences" | **Build a Sentence** | clone, near-verbatim construct |
| **L4 Everyday conversation** | two-person dialogue, listen and respond, pronunciation drill | **Listen and Choose a Response** + **Listen to a Conversation** + **Listen and Repeat** | clone |
| **L5 Reading** | read a life-skills text, main idea, key details, and in every unit interpret a chart | **Read in Daily Life** + **Read an Academic Passage** + **Listen to an Announcement** + **Listen to an Academic Talk** | clone + **augment** |
| **L6 Teamwork & Language Review** | group task, discussion where you build on others' ideas, then language review | **Write for an Academic Discussion** + **Take an Interview** + mixed review | clone + **augment** |

Three of these are not analogies, they are the same construct in different
words:

* CCRS L.1.B (l.), on every L3 in the book: *"Produce simple, compound and
  complex sentences."* ETS on Build a Sentence: *"Reconstruct a range of
  sentence structures."*
* CCRS RF.2.A (g.) on L4: *"Isolate and pronounce initial, medial vowel, and
  final sounds in spoken single-syllable words."* ETS Listen and Repeat:
  *"Repeat spoken sentences with accuracy and intelligibility."*
* CCRS SL.1.B (d.) on every L6: *"Explain their own ideas and understanding in
  light of the discussion."* ETS Write for an Academic Discussion: *"present a
  clear, well-supported argument"* in response to a discussion.

The book was already teaching the 2026 TOEFL's constructs. It was teaching
them for the laundromat and the job application instead of the lecture hall and
the registrar's office.

---

## 2. The augmentation set

Eight gaps. Four are new genres, three are format conversions, one is
structural.

### New genres — content that does not exist in the source at all

**A1. Write an Email** *(the one you named)*. Step Forward 3's L2 writes forms,
notes and short narratives. It does not write an addressed email with a stated
audience, purpose and register — which is the whole of the ETS task (*"Prompts
may include contextual cues such as audience, purpose, or topic"*, scored out
of 5, AI-scored, B1–C2, Academic Navigational). The hook already exists: L3
teaches *commas in greetings and closings of letters*. So this widens a slot
the book already opened. New in the book: a real email chrome (To / From /
Subject / body), a scenario card, a register dial (to a professor vs. to a
classmate), and a 5-point rubric the learner can self-apply.

**A2. Write for an Academic Discussion.** The source's L6 is *spoken* teamwork.
A written discussion-board post responding to a professor's question and two
classmates' posts has no equivalent. New: a threaded board, the professor's
post, two authored student posts holding opposing positions, and a rubric that
rewards engaging with a named classmate rather than restating the question.

**A3. Listen to an Announcement.** Academic Navigational register — a campus PA
notice, a schedule change, a lab-safety briefing. The source's L4 is purely
interpersonal dialogue. New genre, 35–100 words, A2–C1.

**A4. Listen to an Academic Talk.** Up to 250 words of lecture monologue,
A2–C2, with rhetorical patterns (comparison, contrast, cause-and-effect) the
items then test. The source has no monologue of any length. This is the single
largest piece of new authoring in the project.

### Format conversions — the skill is taught, the item shape is not

**A5. Complete the Words.** The source teaches the vocabulary; it does not use
the partial-letter cloze shape (a word shown with letters missing, inside a
sentence that supplies the grammatical and semantic cue). 30 of the 50 reading
items on the real test are this one shape, so the format is worth more marks
than anything else in the test. Reformat, do not re-teach.

**A6. Read an Academic Passage.** The source's L5 reads life-skills text. The
new slot needs ≤200-word passages at Flesch-Kincaid 10.5–20.0 with inference
and pronoun-referent items. Same slot, higher ceiling, new text.

**A7. Take an Interview.** The source does pair conversation with a partner and
unlimited time. The task is a timed, single-pass, recorded monologue answer to
a question delivered by audio. Same construct, different stakes. See §6 on the
recording constraint.

### Structural

**A8. Adaptive routing.** Step Forward is linear. The 2026 TOEFL routes each
learner into a lower or upper module in Reading and Listening on the strength
of the first part, and that is why ETS publishes item counts as ranges (5–15,
15–19, 6–10, 8–16) rather than fixed numbers. The book has to teach this,
because a learner who does not know the test adapts will misread an easy start
as a good sign. Built as: a real router in the two mock tests, and a visible
"you were routed up / down, here is why" panel after each.

---

## 3. The book

### Shape — one-for-one with the source

```
Pre-Unit   Test Day: The First Step
Unit  1    Learning Together            Academic Navigational
Unit  2    Ready for Fun                Social Interpersonal
Unit  3    A Job to Do                  Academic Navigational
Unit  4    Good Work                    Social Interpersonal + Navigational
Unit  5    Community Resources          Academic Navigational
Unit  6    What's Cooking?              Social Interpersonal + Academic
Unit  7    Money Wise                   Academic Navigational + Academic
Unit  8    Living Well                  Academic (health sciences)
Unit  9    Hit the Road                 Navigational + Academic (geography)
Unit 10    Crime Doesn't Pay            Academic (criminology, ethics)
Unit 11    That's Life                  Social Interpersonal + Academic
Unit 12    Do the Right Thing           Academic Discussion — capstone
+          Two full adaptive mock tests
```

Twelve units, twelve titles, twelve themes, six lessons each — the source's
sequence, untouched. Each theme is re-aimed at one of ETS's three language-use
contexts. The themes take the re-aim without strain: *Learning Together*
becomes campus orientation and study groups; *Money Wise* becomes the bursar's
office and an economics lecture; *Do the Right Thing* becomes an ethics
discussion board, which is exactly what the capstone needs.

The Pre-Unit keeps its job — in the source it is the classroom-orientation
unit. Here it orients the learner to the test: the twelve task types, the
timing, the 1–6 bands, the half-band average, the 0–120 comparable score for
the transition period, and the fact that the test adapts.

### Item budget per unit

| Lesson | Task types | Items |
|---|---|---|
| L1 Vocabulary | Complete the Words | 8 |
| L2 Real-life writing | Write an Email 1 · Build a Sentence 4 | 5 |
| L3 Grammar | Build a Sentence 6 · Complete the Words 2 | 8 |
| L4 Everyday conversation | Listen and Choose a Response 6 · Listen to a Conversation 4 · Listen and Repeat 4 | 14 |
| L5 Reading | Read in Daily Life 4 · Read an Academic Passage 4 · Listen to an Announcement 3 · Listen to an Academic Talk 4 | 15 |
| L6 Teamwork & Language Review | Write for an Academic Discussion 1 · Take an Interview 2 · mixed review 6 | 9 |
| | | **59** |

By section, per unit: Reading 18, Listening 17, **Writing 12**, Speaking 6,
mixed review 6. Writing lands on exactly the live test's 12 items. Reading and
Listening are about a third of a live section, which is the right size for a
teaching unit rather than a test.

Book total: 12 × 59 = 708, plus the Pre-Unit (~20) and two 120-item mock
tests = **about 970 items**.

---

## 4. Visual equivalence

You asked for visual equivalence or near-equivalence in quality. The research
turned up something that makes this far more achievable than it looks: **the
2026 TOEFL's own stimulus inventory is almost exactly Step Forward's.**

ETS, on reading stimuli: *"short everyday texts (e.g., sign, menu, email,
social media post)"*. On listening: *"Each spoken input is accompanied by a
visual representation of the speaker(s)."* On speaking: *"Visual elements such
as schematic images, maps, forms, or photos of speakers."* And: *"All texts
remain visible throughout the task."*

Signs, menus, emails, social posts, forms, maps, schematics, speaker portraits,
and a chart in every reading lesson. That is a Step Forward page. The visual
target and the test's visual reality are the same target, so matching the book
and matching the test are one job, not two.

### Four asset tiers

**Tier A — authored documents, as vector/HTML. The bulk of the book.**
Signs, menus, emails, forms, schedules, invoices, receipts, timetables, campus
notices, social posts, grammar charts, floor plans, maps, charts and graphs.
Rendered the way the CMA statements were rendered: real typography, real
alignment, real rules and totals — a document, not a box with text in it. That
work already exists in this repository and generalises directly. Zero licence
risk, pixel-crisp at any zoom, themeable light and dark, a few KB each, and
better than a photograph of a document because the learner can interact with
it.

**Tier B — the cast.** The listening tasks need a visible speaker. A fixed
recurring cast of about sixteen characters, drawn as flat SVG portraits, each
with a name, a role, a voice and an accent held constant across all twelve
units. Chosen over stock photography deliberately: a consistent cast gives the
book an identity, costs nothing to license, carries no model-release exposure,
and is what a modern coursebook looks like. It also makes the audio coherent —
Professor Adeyemi sounds the same in Unit 2 and Unit 11.

**Tier C — scene illustrations.** The numbered picture-dictionary scene is Step
Forward's signature page and the thing that most determines whether this reads
as equivalent in quality. Authored SVG scenes with numbered hotspots, one per
unit's L1. This is the largest art cost in the project and the item most worth
spending real effort on. It needs a written art spec before any of it is drawn.

**Tier D — photography, only where a photograph is genuinely the subject.**
CC0 and public-domain sources only: Met Open Access, Library of Congress,
Smithsonian Open Access, NYPL Digital Collections, Wikimedia Commons PD. Every
asset recorded in `ASSETS.csv` with source, accession number and licence.
Unsplash and Pexels are ruled out — their licences are not clean for
redistribution inside an offline package you hand to someone.

### The art spec, written before any art

One palette with light and dark tokens. One type pair. One line weight. One
figure-proportion rule. One icon set. Eight fixed document templates (email,
form, sign, menu, notice, schedule, social post, invoice). One chart style for
the twelve L5 data visuals. The deliverable for this is a single page that
renders every template and every cast member side by side, so that "does this
look like one book?" is answerable by looking rather than arguing.

---

## 5. The engine

Most of it is built. The CMA Chapter 1 package in this repository already ships
the deck engine, the scene model, drag-and-drop with click and keyboard parity,
shuffling with guaranteed distractors, the Check Answers / Try Again contract
on every exercise, per-option authored feedback, namespaced `localStorage`
progress, TTS pronunciation, a print path, and a 53-check QA gate — all working
from `file://` with no server.

| TOEFL task | Interaction | Engine object |
|---|---|---|
| Complete the Words | type missing letters into a word inside a sentence | `cloze` **exists** + `letterbox` variant |
| Read in Daily Life | document stays on screen, 2–3 MCQ beside it | `document` (generalised from `statement`) + `check` **exists** |
| Read an Academic Passage | passage + 5 MCQ incl. inference and referent | `passage` + `check`/`probe` **exists** |
| Build a Sentence | drag word tiles into order | `order` **exists, built for CMA** |
| Listen and Choose a Response | hear one utterance, pick the reply | `audio` **new** + `check` |
| Listen to a Conversation | hear dialogue, answer a set | `audio` **new** + `check` set |
| Listen to an Announcement | hear a notice, answer | `audio` **new** + `check` |
| Listen to an Academic Talk | hear ≤250 w, note-take, answer | `audio` + `notepad` **new** |
| Write an Email | scenario → compose in email chrome | `mailer` **new** + rubric |
| Write for an Academic Discussion | prof post + 2 student posts → reply | `board` **new** + rubric |
| Listen and Repeat | hear, repeat, compare | `repeat` **new** |
| Take an Interview | hear question, speak to a timer | `repeat` + timer **new** |
| Adaptive routing | score part 1, branch | `router` **new** |

New work: an audio layer, the `document` generalisation, `mailer`, `board`,
`notepad`, `repeat`, `letterbox`, `router`. Everything else is reuse.

---

## 6. Two hard constraints, stated plainly

**6.1 Microphone capture does not work from `file://`.** Chrome treats
`file://` as a non-secure origin, and `getUserMedia` is unavailable on
non-secure origins. So the two Speaking tasks cannot record the learner inside
the no-server package the rest of the book depends on. Three options, and I
recommend the first:

1. **Self-assessment against a model.** The learner hears the prompt, speaks
   aloud, then reveals a model answer with its transcript and a 5-point rubric
   and rates themselves. No recording. Works offline, works everywhere, and is
   how most paper-and-CD coursebooks have always handled speaking.
2. **A one-click local server** (a tiny `start.cmd` that serves the folder on
   `localhost`), which makes the origin secure and unlocks recording. Breaks
   the "just double-click index.html" promise for anyone who skips it.
3. Ship both: option 1 by default, option 2 documented for learners who want
   playback.

I will verify this on the target machine during Phase 1 rather than leave it on
my say-so, and I will report what the actual browser does.

**6.2 Audio has to be budgeted.** The book needs roughly 17 listening items per
unit plus the Listen and Repeat sentences. At 48 kbps mono, a 250-word talk is
around 600 KB. A unit's audio is a few MB; the whole book is a few hundred MB.
That is too much for one zip but fine per unit. The plan: **audio ships per
unit**, so each unit is a self-contained download, with browser TTS as a
fallback when an audio file is absent. ETS's own specification says listening
stimuli are *"delivered using AI-generated audio"*, so synthetic voices are
spec-faithful here rather than a compromise — but TTS cannot reliably deliver
the balanced US/Canadian/Australian/British accent spread the spec describes,
so pre-rendered audio is the quality target and TTS is the fallback.

---

## 7. The quality gate

The CMA build taught the real lesson of this project: a package is only as
honest as the gate that checks it, and the gate is only as good as its
baseline. There, the baseline was your chapter text and the gate checked every
taught word against it. Here there is no author source text, so the gate checks
four different things, and ships inside the package as `_qa.html` did.

**Spec lock.** Every item declares `taskType`, `cefr`, `langUse` and
`maxPoints`. The gate holds the ETS blueprint as data (`spec.js`, the verbatim
figures with their citation) and fails if any item claims a task type that does
not exist, a CEFR band outside that task's published range, a wrong maximum
score, or if a unit's item mix drifts from the budget in §3.

**Difficulty lock.** Reading passages measured in-package against ETS's own
published bands (Flesch-Kincaid 7.4–10.5 medium, 10.5–20.0 high) and word
counts enforced: 15–50 for easy texts, ≤200 for complex ones, ≤250 words for
academic talks, 35–100 for intermediate audio, ≤6 stressed syllables for brief
utterances. A passage that drifts out of band fails the build.

**Originality lock.** No string in the package matches any published source.
All content newly authored. `ASSETS.csv` complete, every asset licence-clean,
and a check that no asset came from a ruled-out source.

**Answer-key lock.** Every item solvable through its own click path, the way
all 92 CMA scenes were proved solvable. An item nobody can answer by operating
the interface is a broken item regardless of what its data says.

---

## 8. Phases

**Phase 0 — close the baseline gap.** *Blocking for labelling, not for
building.* I have the complete unit list, the six-lesson cycle, and
standards-level evidence of what each lesson does, from two independent
official correlations. What I do not have is the lesson *titles* and the
per-lesson vocabulary and grammar lists; those live in the Level 3 Table of
Contents, behind Oxford's bot challenge, which I will not work around. Either
your copy of the book, or the Level 3 Table of Contents PDF from the Oxford
Teacher's Site downloaded in a normal browser, closes it in one step. This is
the same gap that caused the provenance failure on the CMA build, and I would
rather name it now than discover it in Unit 7.

**Phase 1 — engine.** Audio layer, `document` generalisation, `mailer`,
`board`, `notepad`, `repeat`, `letterbox`, `router`, `spec.js`, QA gate v2.
Verify the microphone question on the target machine. No content.

**Phase 2 — art spec and asset pipeline.** The palette, the type pair, the
eight document templates, the chart style, the sixteen-member cast. Deliverable
is the one-page style sheet that renders all of it at once.

**Phase 3 — Unit 1 pilot.** *Learning Together*, re-aimed as campus
orientation and study groups — Academic Navigational, the most distinctively
TOEFL of the three contexts. All six lessons, all 59 items, full visual
treatment, audio recorded, gate green. **This is the review gate**, exactly as
CMA Chapter 1 was: you look at it and tell me what is wrong before eleven more
units inherit it.

**Phase 4 — Units 2–12.** One unit per pass, gate green at the end of each.

**Phase 5 — Pre-Unit, two adaptive mock tests, score report.** The 1–6 bands,
the half-band average across four sections, the 0–120 comparable score, and the
routed-up/routed-down explanation panel.

**Phase 6 — whole-book QA, per-unit audio packaging, zip, README.**

---

## 9. What I need from you

1. **Confirm Oxford Step Forward Level 3, Second Edition** is the book — or
   name the Cambridge title you meant.
2. **The Level 3 Table of Contents**, or your copy of the book, for Phase 0.
3. **A decision on the microphone question** (§6.1) — I recommend
   self-assessment by default, local server documented.

None of these block Phases 1 and 2, which are engine and art-spec work that the
research already fully determines. Say the word and I will start there.
