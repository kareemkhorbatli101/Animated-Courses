# CMA Part 1 · Book 1 — Interactive Website

## Build plan, with Chapter 1 as the pilot

**Source book:** *External Financial Reporting Decisions*, Chapters 1–18, v1.3 (compilation of 2026-10-02), Mohamad Khorbatli.
**Pilot scope:** Chapter 1, *The Language and Framework of Financial Reporting* — complete, nothing omitted.
**Deliverable:** a `.zip` you unzip and open `index.html`. No web server, no internet, no install.
**Plan date:** 2026-10-31

Terminology note: the book says **Chapter**; the request said **unit**. They are the same thing throughout this
plan. Chapter 1 = Unit 1. The site uses the book's word, "Chapter", so the site and the book agree.

---

## 0. What the pilot must prove

Seven things, in priority order. Every later decision in this plan serves this list.

| # | Requirement | How it is proved |
|---|---|---|
| 1 | **Nothing from the chapter is left out** | The coverage ledger in §5 maps every atom of Chapter 1 to a page and an item. The QA page re-checks it mechanically. |
| 2 | **Runs with no web server** | Opens from `file://`. The constraints this forces are in §9 — they are severe and they shape the whole build. |
| 3 | **Pages are linked and navigable** | Book home → chapter hub → 13 chapter pages, with prev/next, breadcrumbs, and a persistent chapter rail. |
| 4 | **Interactive and fun, with visuals of real teaching value** | 13 figures rebuilt as manipulable SVG (§7), 20 exercise types (§6), not one decorative image. |
| 5 | **Drag and drop, including dropping onto a financial statement** | Type **D3 image/statement drop** in §6 is the marquee interaction; §6.3 explains why it is pedagogically justified and not a gimmick. |
| 6 | **English ↔ Arabic only, answers shuffled, Check Answers + Try Again on every exercise** | §8 (bilingual design), §6.2 (the shuffle and distractor rules), §6.1 (the mandatory exercise contract). |
| 7 | **Pronunciation icons that call Windows to speak the term** | §8.3, Web Speech API against installed Windows voices, with a stated fallback chain. |

---

## 1. What already exists in this repository

I am not starting from zero, and the plan should not pretend otherwise.

`cma/unit1/` holds a working prototype: a chapter hub, seven section pages, and `lesson.js` — a 18 KB engine
with **six** exercise renderers (`match`, `quiz`, `cloze`, `journal`, `number`, `classify`), each already
carrying **Check answer / Try again** buttons, an `aria-live` status, per-option explanations, shuffled match
tiles, Arabic spans, and `localStorage` progress. Inventory of what it currently teaches:

| Page | Concepts | Exercises |
|---|---|---|
| `chapter-1.html` (§1.1) | hand-built, not data-driven | — |
| `section-1-2.html` | 3 | 4 (match, cloze, quiz, number) |
| `section-1-3.html` | 3 | **14** (term match + 13 journal entries) |
| `section-1-4.html` | 3 | 4 |
| `section-1-5.html` | 3 | 3 |
| `section-1-6.html` | 3 | 4 |
| `section-1-7.html` | 3 | 5 |
| | | **34 total** |

**What is good and should be kept:** the renderer-per-type architecture, the inline
`<script type="application/json" id="lesson-data">` data pattern (it is the one data pattern that works on
`file://`), the check/reset contract, the `markComplete` progress keys, the Arabic span convention.

**What is missing or wrong, and is the reason for a rebuild rather than a patch:**

1. **Coverage is roughly 20% of the chapter.** 34 exercises, no Exam Traps, no False Friends, no Language
   Focus, no What You Already Know, no IFRS Contrasts, no qualities of useful information, no users table, no
   effect grid, no Your Turn, none of P01–P16, none of the case C1-1…C1-6, no chapter summary.
2. **Matching has equal premise and response counts.** The last pair is therefore free — a known matching-item
   defect. Needs distractor tiles (§6.2).
3. **MCQ options are not shuffled**, and cannot be, because `answer` is a numeric index and each rationale is
   positional. The data shape has to change so the rationale travels with the option (§6.2).
4. **No image or statement drop targets.** The single most requested interaction is absent.
5. **No pronunciation.** No speech layer at all.
6. **No figures.** The chapter's 13 figures — which carry much of its teaching load — have no counterpart.
7. **Numbers are hand-copied into each page**, so the ties the book guarantees are not enforced anywhere.
   §9.4 replaces this with one computed ledger.

**Decision:** build the pilot at `cma/book1/` as a clean site with a shared engine designed for 18 chapters,
porting the six working renderers across and retiring `cma/unit1/` once the pilot supersedes it. Keeping two
half-sites for the same chapter is worse than either one alone.

---

## 2. The research run — findings that changed the design

I ran this before designing, because three of the request's features (drag-and-drop, Arabic translation
exercises, Windows pronunciation) are each contested or constrained in ways that matter.

### 2.1 Exam-format fidelity: the item types are not arbitrary

From the September/October 2026 testing window the CMA exam is **100 multiple-choice questions (75% of the
grade) plus two case-based questions (25%)**, replacing the essays. Each CBQ is a case of roughly 250 words
followed by several independent items whose named types are **drag-and-drop, select-from-a-list, fill-in-the-
blank, and numeric entry**, with partial credit and no penalty for wrong answers. Prep-provider accounts
differ on detail (one says only 90 of the 100 MCQs are scored; Gleim describes a narrower CBQ type mix), so
treat the exact scoring as unconfirmed against ICMA's own candidate handbook.

**Consequence for the design:** this is a gift. The interaction types the request asks for *are* the exam's
item types. Drag-and-drop is not a decorative choice here — it is format rehearsal. The site's exercise
taxonomy (§6) therefore mirrors the CBQ item types one-for-one, and the case page (§5, `case.html`) reproduces
the exam's own answer-entry conventions, down to "enter amounts in thousands, no `$` sign and no commas",
which the book already states. The book's own closing line — the case "gives a short case and an exhibit,
followed by independent items (drag-and-drop, select from a list, fill in the blank and calculations)" — is
the specification. Chapter 1 is already written for this site.

### 2.2 Drag-and-drop: the evidence is real but conditional

This is the finding that most changed the design, and it is a caution, not an endorsement.

- A CALL study comparing multiple-choice, drag-to-reorder, and typed-completion exercises found **click-only
  multiple choice the weakest** of the three, with drag and typed completion ahead of it — but the drag
  advantage over typing was slight and mixed across measures.
- Work on Parsons problems (drag-and-drop code blocks) found that **adding distractors raises difficulty and
  apparent cognitive load**; whether that helps or hurts learning is genuinely mixed across studies, with at
  least one randomised trial finding a gain.
- Assessment-design guidance warns that **complex physical interaction imposes extraneous cognitive load**,
  and that matching items with equal numbers of premises and responses **let the last match be guessed free**.
- Nothing I found supports the common claim that dragging aids memory through "kinesthetic learning". Treat
  that claim as unevidenced.
- A matching exercise is best understood as **retrieval practice, not generative learning**, unless the
  learner must also explain the choice.

**Five design rules follow, and they are binding:**

1. **Drag only where the spatial mapping is itself the content.** Dropping an account onto the *current
   liabilities band of a balance sheet* teaches classification, because position carries meaning. Dragging a
   word onto a word to mean "these two are a pair" teaches no more than clicking would. So the drop target is a
   statement, a T-account side, a grid cell, a timeline, an org chart — a place that *means* something.
2. **Always more tiles than targets.** Minimum two distractors per matching or classifying set, so the final
   placement is never free. Distractors are drawn from the chapter's own wrong answers, which the book
   helpfully supplies for every question.
3. **Click/tap does everything drag does.** Not as a concession to touch devices — as load reduction. The
   existing engine already does select-then-place; keep it, and add full keyboard operation.
4. **Make the heavy items generative.** On the high-value items, the learner commits a one-line *reason*
   before the answer is revealed, and the feedback compares it with the book's own explanation. Retrieval plus
   self-explanation, not retrieval alone.
5. **Coherence over spectacle.** No animation that does not carry information. Honour
   `prefers-reduced-motion`.

### 2.3 English ↔ Arabic: translation pairing is the right call, with a caveat

- Nation's position is that **no meaning-conveying method is intrinsically most accurate** — it depends on the
  word — while noting that comparative studies have **repeatedly found L1 translation the most effective**
  method, and that translation paired with word cards speeds vocabulary growth.
- A 2022 CALL-EJ study of 100 engineering students found **L1 computerised glosses beat L2 glosses** for both
  target-vocabulary learning and reading comprehension of an ESP text.
- Bilingual glossaries are described as effective for vocabulary mastery and comprehension in ESP, and
  bilingualised dictionaries serve beginner and intermediate learners through L1 while advanced learners move
  to L2 definitions.
- **Caveat:** the strongest pro-L1 studies used elementary-level learners, and one ESP study found teachers
  *overusing* L1. There is no meta-analysis specific to ESP technical terms.

**Consequence:** the Arabic bridge is well-founded for exactly what this book uses it for — fixing the
reference of an exam term fast — and should not creep beyond that. So: Arabic is **always available, never
load-bearing**. Term bridges, false-friend work and the glossary are bilingual; the reasoning, the
explanations and the exam-language work stay in English, because the exam is in English. Arabic is shown
beside the English term, never instead of it. B1+/B2 graded English, as the book specifies.

### 2.4 The learning-science spine

Nothing exotic; the book is already built on it, and the site's job is to deliver it with more repetitions.

- **Retrieval practice** is the main engine, and carries strong benefits even without feedback — so feedback is
  a bonus layered on top, not the mechanism.
- **Spacing and interleaving** are desirable difficulties. Classroom studies of interleaved retrieval are
  still thin and mostly in mathematics, so treat interleaving as well-motivated rather than proven here.
- **Dual coding** — pairing verbal and visual representations — sits in every standard list of the six
  evidence-based strategies, alongside elaborative interrogation and concrete examples.
- **Mayer's multimedia principles**, especially **coherence** (leave out unnecessary pictures) and
  **signalling** (highlight what matters), reduce extraneous load; applying them has improved learning in
  medical-education studies.
- **Worked examples then faded completion problems** — the book's Worked Example → Your Turn pairing is
  precisely this, and the site implements the fading literally (rows 1–3 given, 4–6 to complete).

### 2.5 Windows pronunciation: works, but the fallback chain is mandatory

- `speechSynthesis` is supported in Chrome and Edge; **Edge additionally exposes Microsoft's local Windows
  voices** and online natural voices.
- **`getVoices()` returns empty on first call** — voices load asynchronously and code must wait for the
  `voiceschanged` event. This is the single most common cause of a dead speaker button.
- `voice.localService` distinguishes an offline voice from a network one. Offline matters here: the package is
  meant to work with no internet.
- `ar-SA` is the Saudi Arabic locale. **Whether a given Windows machine exposes a local Arabic voice depends on
  installed language packs** — Microsoft's `ar-SA` neural voices (Zariyah, Hamed) are an *online* service, not
  the local voice list.
- **I could not confirm by search how `speechSynthesis` behaves specifically on `file://` pages.** My
  expectation is that local Windows voices work and Google network voices do not, but this is an explicit
  build-time verification item, not an assumption (§11, Gate 0).

**Consequence — the fallback chain in §8.3:** local Windows voice → any voice for that language → pre-rendered
audio file → icon visibly disabled with a one-line instruction for installing an Arabic voice. The button
never silently does nothing.

### Sources

- [Master the 2026 US CMA Question Paper Format](https://www.mileseducation.com/blog/accounting/master-the-us-cma-question-paper-format)
- [CMA Exam Changes 2026: New Pattern, Syllabus & Key Updates](https://www.edoxi.com/studyhub-detail/cma-exam-changes)
- [2026 CMA Exam Changes — Becker](https://www.becker.com/blog/cma/cma-exam-changes-whats-changing-about-the-2026-cma-exam)
- [CMA Part 2: Syllabus, Format & Pass Strategy (2026 CBQs)](https://cmaexamacademy.com/cma-part-2/)
- [CMA Exam Questions — Gleim](https://www.gleim.com/cma-review/cma-exam-questions/)
- [Summary of changes to the CMA Content Specifications Outline](https://cma.globalfinx.in/wp-content/uploads/2024/05/Summary-of-changes-to-the-CMA-Content-Specifications-Outline.pdf)
- [Drag or Type, But Don't Click: A Study on the Effectiveness of Different CALL Exercise Types](https://www.researchgate.net/publication/253227686_Drag_or_Type_But_Don't_Click_A_Study_on_the_Effectiveness_of_Different_CALL_Exercise_Types)
- [Measuring the Impact of Distractors on Student Learning Gains while Using Proof Blocks](https://arxiv.org/pdf/2311.00792)
- [Matching and Drag-and-Drop Question Design for Digital Assessments](https://lmspedia.org/matching-and-drag-and-drop-question-design-for-digital-assessments/)
- [The Role of L1 in Asian EFL (Nation)](https://www.scribd.com/doc/162861481/2003-Role-of-L1-Asian-EFL)
- [Effects of L1 and L2 computerised glosses on ESP vocabulary and reading — CALL-EJ](https://callej.org/index.php/journal/article/view/388)
- [Karpicke & O'Day, retrieval practice — Oxford Handbook chapter](https://learninglab.psych.purdue.edu/downloads/2024/2024_Karpicke_ODay_Oxford_Handbook.pdf)
- [Six Strategies for Effective Learning (Weinstein et al.)](https://www.schreyerinstitute.psu.edu/pdf/SixStrategiesEffectiveLearning.YanaWeinstein.2017.pdf)
- [A Review of the Science of Learning (Spicer)](https://education.aaaai.org/sites/default/files/media/2024-02/Spicer%20-%20A%20Review%20of%20the%20Science%20of%20Learning.pdf)
- [Sana & Yan, interleaved retrieval practice in classrooms (2022)](https://www.gwern.net/doc/psychology/spaced-repetition/2022-sana.pdf)
- [Speech Synthesis API: Browser Support, Voices, Limitations](https://www.testmuai.com/learning-hub/speech-synthesis-api-browser-support/)
- [Web Speech API Browser Support (2026)](https://textintoaudio.com/browser-support)
- [Edge TTS voice list](https://gist.github.com/FujiwaraChoki/84c50c701fa74c23b07816705ba9b805)

---

## 3. The pedagogical approach

### 3.1 The learner this is built for

An accountant or accounting student who **already knows the subject in Arabic** (and often French), reads
English at B1+/B2, and is sitting an exam written in precise English where one word changes the answer. The
book states this explicitly in *What you already know*: the ideas are not new, three things are —
**the English names, the U.S. rules, and the exam wording**.

That diagnosis is the whole design brief. This is not a site that teaches accounting. It is a site that
teaches **the English of accounting, the U.S. version of the rules, and the reading of exam questions**, to
someone who can already do the accounting. So the exercise mix is weighted away from "explain the concept" and
towards **naming, discriminating, classifying, and reading precisely** — which is also, conveniently, what the
exam tests.

### 3.2 Five teaching moves, and where each one lives

**1. Name it — bilingual terminology, anchored and pronounceable.**
The chapter's eight Term Bridge boxes hold **64 term rows**. Each becomes a bilingual card: English exam term,
Arabic equivalent, a 🔊 on each, and the sentence from the chapter where it occurs. Practised through
recognition first (EN→AR matching with distractors), then production (hear it, type it / choose it), then
spaced review. Evidence base: §2.3.

**2. Discriminate it — the false friend and the exam trap as first-class exercise types.**
The chapter's richest material is the stuff a confident Arabic-trained accountant gets *wrong*: `stock` is
shares not inventory; دخل is not إيراد; مخصص covers both allowance (asset reduction) and provision
(liability); استهلاك / اهتلاك / إهلاك all appear regionally for depreciation; "the bank credits my account" is
the bank's view, not yours. These are not asides — they are the chapter's highest-value content for this
learner, and they get their own drilled, scored, repeated item types (D6, M4 in §6). The four Exam Trap boxes
get the same treatment.

**3. See it — one manipulable figure per idea, nothing decorative.**
13 figures, 13 interactive SVGs (§7). The accounting equation is a machine you unbalance and rebalance. The
debit/credit rules are a grid you are tested against. The accrual timeline is a slider that shows the same
sale falling in different years under the two bases. Signalling: hovering a term in the prose highlights its
part of the figure, and the reverse. Coherence: if a graphic does not carry information, it is not drawn.

**4. Do it — worked example, then faded completion, then full independence.**
Section 1.3 is the model and the book already wrote it this way. The six **January** journal entries are the
worked example, read with their effect grid (F01-05). The six **February** transactions are the Your Turn, and
F01-06 is *already a faded grid in the book* — rows 1–3 filled, 4–6 blank. The site implements exactly that
fading, and then the practice and case pages remove the scaffold entirely. Evidence base: §2.4.

**5. Read it — explicit exam-language training.**
The chapter's three Language Focus boxes become drills in their own right: the five accounting verbs
(recognize / measure / record / present / disclose), the phrasing of transaction effects (*increase in* + item,
*increase of* + amount, *increase by* the change, *increase to* the new total), and the exam-stem cues
(MOST likely, BEST describes, NOT, EXCEPT, *immediately after the transaction*, *net effect*). Nothing else in
the chapter pays back as fast for this learner.

### 3.3 The feedback model

Chapter 1 is unusually generous: **it supplies a rationale for every wrong option**, not just the right one —
every SC item, all sixteen of P01–P16, and the case items (including why `6,030` ignores the allowance and
`6,910` ignores accumulated depreciation). That is the raw material for proper elaborated feedback, and it
would be a waste to render it as a bare ✓/✗.

So the contract is:

- **Check Answers** marks each element, then shows the rationale **for the option the learner actually chose**
  first and most prominently, then the correct one, then the remainder. Not a generic "incorrect".
- **Try Again** re-shuffles and re-renders the item from scratch, clearing marks — a genuinely new attempt, not
  a revealed answer. Both buttons are on every exercise without exception.
- Wrong answers are **logged by trap**, not just counted, so the review page can resurface the specific
  confusion (§6.5, the trap counter).
- Nothing is scored out of 100 and no one is ranked. Progress shows coverage and recency, which is what drives
  return visits.

### 3.4 Sequence within a section page

Fixed rhythm, so the learner always knows where they are, and load is front-loaded onto reading and
back-loaded onto retrieval:

> **Orient** (what this section answers, 1 line) → **Read** (the book's prose, segmented into 2–4 blocks) →
> **See** (the figure, manipulable) → **Bridge** (term cards, bilingual, pronounceable) →
> **Watch out** (Exam Trap / False Friend / IFRS Contrast, as drills) → **Practise** (6–20 exercises, mixed
> types, easiest first) → **Section Check** (the book's own SC items, exam-style) → **Next**

---

## 4. Site map

```
cma-part1-book1/                      ← the zip's root; open index.html
│
├── index.html                        BOOK HOME. 4 parts, 18 chapters, progress ring per
│                                     chapter. Ch.1 live; Ch.2–18 shown and marked "planned".
├── how-to-use.html                   The book's How to use this book + the box legend +
│                                     case companies (Orontes / Barada / Cedar) + the numbers
│                                     convention + how this site works offline.
├── glossary.html                     Appendix A, English ↔ Arabic, searchable, 🔊 on every row.
├── term-index.html                   Appendix B, index of terms → the section that defines each.
│
├── ch01/
│   ├── index.html                    CHAPTER HUB. F01-01 roadmap as the clickable map,
│   │                                 the LOS table (A.1.a, A.1.b, A.1.e, A.2.z, Background),
│   │                                 the 16-row chapter key-terms table, What You Already Know,
│   │                                 and the 13-page contents with per-page progress.
│   ├── s1-1.html   Who uses financial statements, and why?
│   ├── s1-2.html   The building blocks: elements and the accounting equation
│   ├── s1-3.html   Double entry: debits and credits          ← the heavy one
│   ├── s1-4.html   The accrual basis and the matching principle
│   ├── s1-5.html   Who writes the rules? U.S. GAAP and IFRS
│   ├── s1-6.html   A first look at the four statements
│   ├── s1-7.html   Extended Example 1A: trial balance → statements
│   ├── summary.html    F01-13 summary map + the chapter summary prose + the tie recap
│   ├── practice.html   P01–P16, exam-style, elaborated feedback per option
│   ├── case.html       The Barada CBQ: narrative + exhibit + C1-1…C1-6 in exam item formats
│   ├── terms.html      All 64 chapter terms: bilingual drill, pronunciation, Leitner box
│   ├── review.html     Interleaved mixed retrieval across all 7 sections + the trap counter
│   └── answers.html    Full answers and explanations, as the book prints them (reference view)
│
├── assets/
│   ├── site.css            layout, type, light/dark, print
│   ├── figures.css         SVG figure styling
│   ├── engine.js           the 20 exercise renderers + the check/reset contract
│   ├── figures.js           the 13 interactive figure builders
│   ├── speech.js            Windows voice selection + fallback chain
│   ├── progress.js          localStorage, namespaced, try/catch everywhere
│   ├── ledger.js            THE single source of truth for every number (§9.4)
│   ├── terms-ch01.js        the 64 bilingual term records
│   ├── fonts/              bundled Arabic + Latin woff2 (no CDN)
│   └── audio/ch01/         optional pre-rendered term audio (phase 3 fallback)
│
├── _qa.html                 the self-test page (§11). Not in any nav.
└── README.txt               three lines: unzip, open index.html, works offline.
```

**13 pages for Chapter 1** — seven section pages exactly as the request asked, plus the six that the chapter's
own back matter requires. Same shape repeats for Chapters 2–18, which is why the engine is built shared from
day one.

### Navigation

- Persistent **chapter rail**: the 7 sections + the 6 back-matter pages, current one marked, completed ones
  ticked.
- **Prev / Next** on every page, following the book's own order through to `review.html`.
- **Breadcrumb**: Book → Part I → Chapter 1 → Section 1.3.
- **Keyboard**: `←` / `→` page through, `/` focuses search, `?` opens the shortcut sheet.
- Every link relative, no leading `/`, so the whole tree works from any folder depth on `file://`.

---

## 5. Coverage ledger — every atom of Chapter 1

This is the §0 requirement #1 artifact. If an atom of the chapter is not in this table, it is not in the site;
the QA page (§11) asserts the table and the built pages agree. Exercise IDs read
`c01.s3.x07` = chapter 1, section 3, exercise 7. Types are defined in §6.

### 5.1 Front matter and chapter opener

| Atom from the book | Page | Treatment | Items |
|---|---|---|---|
| How to use this book; four parts; chapter pattern | `how-to-use.html` | prose | — |
| 2026 format: 100 MCQ + 2 CBQs, LOS unchanged | `how-to-use.html` | prose + a note on how the site mirrors the item types | — |
| The nine box types (box legend table) | `how-to-use.html` | legend, each box styled as it appears on the section pages | — |
| Case companies: Orontes Foods, Barada Wholesale, Cedar Retail S.A.L. | `how-to-use.html` | three profile cards, reused as tooltips sitewide | — |
| Numbers convention: whole USD unless USD 000; "Suppose" examples illustrative | `how-to-use.html` + a sitewide badge on every money table | prose + UI convention | — |
| Chapter 1 opener prose; Arabic chapter title لغة التقارير المالية وإطارها | `ch01/index.html` | prose, bilingual heading, 🔊 | — |
| **F01-01** roadmap, seven linked topics | `ch01/index.html` | **interactive map**, each node links to its section, completion-aware | — |
| LOS table: A.1.a, A.1.b, A.1.e, A.2.z, Background — official text, plain words, depth | `ch01/index.html` | full table, kept verbatim; depth column drives a "covered here / covered in Ch. N" badge | — |
| Chapter key terms, 16 rows | `ch01/index.html` | bilingual table, 🔊 per row, links to the defining section | `c01.hub.x01` M1 |
| What you already know — the three new things | `ch01/index.html` | callout + a 3-item sorting warm-up | `c01.hub.x02` M2 |

### 5.2 Section 1.1 — Who uses financial statements, and why?

| Atom | Treatment | Items |
|---|---|---|
| Thousands of facts → standard form; the four main statements named | prose | — |
| General-purpose financial statements defined | prose + term card | — |
| Primary users = existing and potential investors, lenders, other creditors; they give resources and cannot demand special reports | prose, signalled | `c01.s1.x03` M1 |
| **F01-02** users table: 7 rows × decision / key question / statements used | **interactive figure**: user cards; flip to reveal decision, question, statements | `c01.s1.x01` **D3** drag each user onto the statement they lean on; `c01.s1.x02` M1 user → key question |
| Other groups: employees, customers, governments, tax authorities, the public | prose | folded into `x03` |
| Managers are users but **not** primary users; management accounting is the rest of the exam | prose + trap | `c01.s1.x04` **D6** |
| The three user questions → which statement answers each | prose | `c01.s1.x05` D2 |
| Stewardship | prose + term card | `c01.s1.x10` S1 |
| Relevance: predictive value, confirmatory value, materiality | prose | `c01.s1.x06` D2 sort qualities |
| Faithful representation: complete, neutral, free from error | prose | `c01.s1.x06` (same set) |
| The four enhancing qualities: comparability, verifiability, timeliness, understandability | prose | `c01.s1.x06`, `c01.s1.x07` M1 quality → definition |
| Cost constraint | prose | `c01.s1.x06` |
| **Exam Trap**: who is a primary user; fundamental vs enhancing qualities | trap drill | `c01.s1.x08` **M4** |
| **Language Focus**: the five verbs — recognize, measure, record, present, disclose | drill | `c01.s1.x09` **L1** place the right verb in the Orontes sentence |
| Orontes worked sentence (recognizes / measures / presents / discloses) | worked example | shown in `x09` feedback |
| **Term Bridge**, 8 rows | bilingual cards, 🔊 | `c01.s1.x11` M1 with distractors |
| **SC1-1** primary user → D; rationales for A, B, C | exam-style | `c01.s1.sc1` Q1 |
| **SC1-2** predictive value → A; rationales for B, C, D | exam-style | `c01.s1.sc2` Q1 |

### 5.3 Section 1.2 — The building blocks: elements and the accounting equation

| Atom | Treatment | Items |
|---|---|---|
| Every amount belongs to an element; FASB defines **ten** | prose | `c01.s2.x01` D2 sort all ten into balance-sheet-at-a-date vs change-during-a-period |
| Asset: present right to an economic benefit; examples cash, AR, inventory, equipment | prose + term card | `c01.s2.x02` M1 |
| Liability: present obligation to transfer an economic benefit; examples AP, NP, wages payable | prose + term card | `c01.s2.x02` |
| Equity: the residual interest after liabilities | prose + term card | `c01.s2.x02` |
| Revenues and expenses — central, ongoing operations; olive oil sale, plant wages | prose | `c01.s2.x03` D2 central vs peripheral |
| Gains and losses — peripheral or incidental; the truck sold above carrying amount | prose | `c01.s2.x03` |
| Investments by owners ↑ equity; distributions to owners ↓ equity | prose | `c01.s2.x04` E1 |
| Comprehensive income — forward reference to Ch. 3 and 15 | prose + badge | — |
| **A = L + E**; why it always holds | prose | `c01.s2.x05` **F2** the equation machine |
| **F01-03** equation with equity split | **interactive figure**: live A = L + E with equity opened into contributed capital + RE | `c01.s2.x05` |
| Contributed capital = common stock at par + APIC | prose | `c01.s2.x06` D3 onto the equity block |
| Retained earnings = past net income kept, not paid out | prose | `c01.s2.x06` |
| Lower part of F01-03: revenues and gains ↑ RE; expenses and losses ↓ RE; dividends ↓ RE but are **not** an expense and never appear in the income statement | prose, heavily signalled | `c01.s2.x07` **E1** RE driver sort; `c01.s2.x08` M4 the dividend trap |
| **IFRS Contrast**: IFRS asset definition (present economic resource controlled…); *income* covers revenue + gains; statement of financial position / share capital / share premium | contrast drill | `c01.s2.x09` **I1** US ↔ IFRS name match |
| **False Friend**: `stock` = shares, not inventory | trap drill | `c01.s2.x10` **D6** |
| **False Friend**: دخل is not إيراد; revenue is gross, net income is after expenses | trap drill | `c01.s2.x10` |
| **False Friend**: French *résultat* = net income, *charges* = expenses; English "charges" = fees | trap drill | `c01.s2.x10` (see §12 Q1 on French) |
| **False Friend**: French *la balance* = trial balance; *le bilan* = balance sheet | trap drill | `c01.s2.x10` |
| **Term Bridge**, 13 rows | bilingual cards, 🔊 | `c01.s2.x11` M1 |
| **SC2-1** wages are an expense → B; rationales A, C, D | exam-style | `c01.s2.sc1` Q1 |
| **SC2-2** equity = 500 − 320 = 180 → A; rationales B, C, D | exam-style | `c01.s2.sc2` **N1** |

### 5.4 Section 1.3 — Double entry: debits and credits (the heavy section)

| Atom | Treatment | Items |
|---|---|---|
| Double entry; at least two accounts; total debits = total credits; why the equation always balances | prose | `c01.s3.x01` Q1 |
| Debit = left, credit = right; neither means good/bad nor always increase | prose, signalled | `c01.s3.x02` M4 |
| Normal balance defined | prose + term card | `c01.s3.x03` **D2** |
| **F01-04** which of the six account types increases with a debit vs a credit | **interactive figure**: the six-type rule grid, tappable and testable | `c01.s3.x03`, `c01.s3.x04` |
| The expanded-equation mnemonic: left side (assets, expenses, dividends) ↑ with debit; right side (liabilities, equity, revenues) ↑ with credit | prose + figure | `c01.s3.x04` **F2** |
| Contra account: opposite normal balance; accumulated depreciation reduces equipment, credit balance, sits with assets; allowance for credit losses reduces AR (→ Ch. 6) | prose | `c01.s3.x05` D2 |
| **Worked Example**: Orontes, January 2025, six entries with full amounts (1,500 / 100 / 1,400; 800; 1,200; 300 and 180; 40; 50) totalling 4,070 = 4,070 | worked example, read-only, step-reveal | — |
| Entry 1 — issue 100,000 $1-par shares at $15 cash | journal drill | `c01.s3.x06` **J1** |
| Entry 2 — borrow on a 5-year 6% note from Levant Commerce Bank | journal drill | `c01.s3.x07` J1 |
| Entry 3 — buy the Amman bottling line for cash | journal drill | `c01.s3.x08` J1 |
| Entry 4 — sell olive oil to GreenBasket on credit, **two** entries (revenue and COGS) | journal drill, two-part | `c01.s3.x09` J1 |
| Entry 5 — pay January plant wages in cash | journal drill | `c01.s3.x10` J1 |
| Entry 6 — declare a cash dividend payable Feb 15 | journal drill | `c01.s3.x11` J1 |
| Debits = credits check on every entry | engine-enforced: an entry that does not balance cannot be marked correct | all J1 |
| **F01-05** effect grid for the six January transactions | **interactive figure**: read-only grid, row hover links to its journal entry | `c01.s3.x12` **G1** |
| Reading point 1: rows 1–2 bring in 2,300 cash but no revenue — owners and lenders are financing, not income | prose, signalled | `c01.s3.x13` Q1 |
| Reading point 2: row 4 creates 300 revenue and no cash — revenue on delivery, not collection | prose | `c01.s3.x13` |
| Reading point 3: row 6 cuts RE by 50 and creates a liability; no cash until February; net income unchanged | prose | `c01.s3.x13` |
| Totals prove the equation: assets +2,380 = liabilities +850 + equity +1,530 | prose + computed from the ledger | `c01.s3.x14` **N1** ×3 |
| **Exam Trap**: a dividend is not an expense | trap drill | `c01.s3.x15` M4 |
| **Exam Trap**: cash from borrowing or issuing shares is not revenue | trap drill | `c01.s3.x15` |
| **Exam Trap**: buying equipment for cash is not an expense today; cost becomes expense through depreciation | trap drill | `c01.s3.x15` |
| **Your Turn** — February, six transactions (150 / 200 / 24 / 60 / 50 / 4) | faded completion | `c01.s3.x16` **G2** |
| **F01-06** faded grid: rows 1–3 given, rows 4–6 for the learner | **interactive figure, faded exactly as printed** | `c01.s3.x16` |
| Your Turn answers: row 4 Dr Cash 60 / Cr Contract liability 60, operating +60; row 5 Dr Dividends payable 50 / Cr Cash 50, financing −50; row 6 Dr Interest expense 4 / Cr Interest payable 4, no cash flow | journal drills + feedback | `c01.s3.x17-19` J1 |
| Why row 4 is a liability not revenue; why row 5's RE fell back in January; why row 6 is an accrued expense | elaborated feedback | in `x17-19` |
| **Language Focus**: debit X credit Y; X is debited for an amount; *an increase in* + item vs *an increase of* + amount; *increase by* the change vs *increase to* the new total; the exam stem "the effect of this transaction is to increase … and decrease …" | drill | `c01.s3.x20` **L1** |
| **False Friend**: استهلاك (Gulf, also "consumption") / اهتلاك (Levant) / إهلاك (Egypt) — in English always *depreciation* | trap drill | `c01.s3.x21` **D6** |
| **False Friend**: مخصص covers both *allowance* (reduces an asset) and *provision* (a liability); never "reserve for bad debts" in a U.S. GAAP answer | trap drill | `c01.s3.x21` |
| **False Friend**: your bank credits your account because the bank owes you — the bank's view, not yours | trap drill | `c01.s3.x21` |
| **Term Bridge**, 15 rows | bilingual cards, 🔊 | `c01.s3.x22` M1 |
| **SC3-1** accumulated depreciation → B; rationales A, C, D | exam-style | `c01.s3.sc1` Q1 |
| **SC3-2** Dr Equipment 1,200 / Cr Cash 1,200 → D; rationales A, B, C | exam-style | `c01.s3.sc2` Q1 |

### 5.5 Section 1.4 — The accrual basis and the matching principle

| Atom | Treatment | Items |
|---|---|---|
| Accrual basis: revenue when earned (goods/services delivered), expenses when incurred; cash timing does not decide the period | prose | `c01.s4.x01` Q1 |
| Cash basis: simple, not acceptable under U.S. GAAP | prose | `c01.s4.x01` |
| **F01-07** Dec 20 2025 ship and invoice 90, cost 54, collected Jan 15 2026 | **interactive figure**: a timeline slider showing the same sale under both bases | `c01.s4.x02` **F3** |
| Accrual: revenue and COGS in fiscal 2025; gross profit 36 belongs to 2025 | prose + computed | `c01.s4.x03` N1 |
| January collection just turns one asset into another | prose | `c01.s4.x04` E1 |
| Cash basis would put revenue in 2026 — the wrong period | prose | `c01.s4.x02` |
| Matching principle stated | prose + term card | `c01.s4.x05` L1 |
| Cause and effect — COGS recorded with the sales revenue | prose | `c01.s4.x06` **D2** |
| Systematic and rational allocation — the bottling line via depreciation | prose | `c01.s4.x06` |
| Immediate recognition — most advertising, office salaries | prose | `c01.s4.x06` |
| Four adjustment types: prepaid expense → asset; contract liability / unearned revenue → liability; accrued expense → liability; accrued revenue → asset (Ch. 11) | table | `c01.s4.x07` **D3** onto a balance-sheet image; `c01.s4.x08` M1 type → what it creates |
| Each tied to its February row (rows 3, 4, 6) | cross-link to s1-3 | in `x07` feedback |
| Prepaid expense is an asset; contract liability is a liability — the two exam-critical names | prose, signalled | `c01.s4.x09` M4 |
| **Exam Trap**: cash in advance is a liability not revenue; cash paid in advance is an asset not an expense; matching is to revenues, not to cash payments | trap drill | `c01.s4.x10` M4 |
| **Term Bridge**, 4 rows | bilingual cards, 🔊 | `c01.s4.x11` M1 |
| **SC4-1** contract liability of 60 → A; rationales B, C, D | exam-style | `c01.s4.sc1` Q1 |
| **SC4-2** COGS by cause and effect → C; rationales A, B, D | exam-style | `c01.s4.sc2` Q1 |

### 5.6 Section 1.5 — Who writes the rules?

| Atom | Treatment | Items |
|---|---|---|
| U.S. GAAP named; FASB writes it; private and independent | prose | `c01.s5.x01` M1 |
| ASC: the single source of authoritative nongovernmental U.S. GAAP, organised by topic | prose | `c01.s5.x02` Q1 |
| ASC 606 revenue, ASC 842 leases | prose | `c01.s5.x03` M1 |
| ASU amends the Codification | prose | `c01.s5.x02` |
| SEC: U.S. government agency, legal authority over public-company reporting, recognises FASB; SEC rules are part of authoritative GAAP for registrants | prose | `c01.s5.x04` D2 |
| PCAOB: oversees audits, sets **auditing** standards, not accounting standards | prose, signalled | `c01.s5.x04` |
| IASB issues IFRS under the IFRS Foundation | prose | `c01.s5.x04` |
| MENA adoption: Jordan, UAE require IFRS for listed companies; Cedar Retail S.A.L. is the book's IFRS company | prose | `c01.s5.x05` Q1 |
| **F01-08** who writes the rules — SEC / FASB / ASC and IFRS Foundation / IASB | **interactive figure**: the two-system org map, drag each body to its job | `c01.s5.x06` **D3** |
| Exam tests U.S. GAAP; Section A also asks the main IFRS differences (Ch. 17); every chapter has an IFRS Contrast box | prose + badge | — |
| Conceptual framework defined; the U.S. version was §1.1–1.2 | prose + back-link | `c01.s5.x07` M1 |
| **IFRS Contrast** name table, 6 pairs: balance sheet / statement of financial position; income statement / statement of profit or loss; common stock / share capital; APIC / share premium; accounts receivable / trade receivables; net income / profit | contrast drill | `c01.s5.x08` **I1** |
| **Exam Trap**: four bodies, four jobs — FASB writes GAAP, SEC has legal authority, PCAOB sets auditing standards, IASB writes IFRS | trap drill | `c01.s5.x09` **M4** |
| **Term Bridge**, 7 rows | bilingual cards, 🔊 | `c01.s5.x10` M1 |
| **SC5-1** FASB → A; rationales B, C, D | exam-style | `c01.s5.sc1` Q1 |
| **SC5-2** share premium = APIC → D; rationales A, B, C | exam-style | `c01.s5.sc2` Q1 |

### 5.7 Section 1.6 — A first look at the four statements

| Atom | Treatment | Items |
|---|---|---|
| Four statements table: question answered / at a date vs for a period / chapter | table | `c01.s6.x01` M1; `c01.s6.x02` D2 date vs period |
| **F01-09** the two links: net income → retained earnings; net change in cash → the cash balance | **interactive figure**: animated flow between the four statements | `c01.s6.x03` **F4** |
| January proof: net income 80 = 300 − 180 − 40 | computed from the ledger | `c01.s6.x04` **N1** |
| Dividend declared 50, so retained earnings rose 30 | computed | `c01.s6.x04` |
| Cash rose 1,060 = operating −40, investing −1,200, financing +2,300 | computed | `c01.s6.x05` N1 + D2 classify the three flows |
| Net income and the change in cash are very different numbers — the accrual basis at work | prose, signalled | `c01.s6.x06` Q1 |
| Trial balance defined: lists every balance, checks debits = credits | prose + term card | `c01.s6.x07` Q1 |
| **F01-10** Barada Wholesale trial balance, 20 lines, 9,750 = 9,750 | **the live exhibit**: one ledger object, reused by s1-7, practice, case and review; totals computed, never typed | `c01.s6.x08` **D3** classify every line onto the statement it belongs to |
| **Term Bridge**, 5 rows | bilingual cards, 🔊 | `c01.s6.x09` M1 |
| **Language Focus**: MOST likely / BEST describes; NOT / EXCEPT; *immediately after the transaction*; *net effect* | drill | `c01.s6.x10` **L2** |
| **SC6-1** balance sheet is at a single date → B; rationales A, C, D | exam-style | `c01.s6.sc1` Q1 |
| **SC6-2** the two contra-assets → C; rationales A, B, D | exam-style | `c01.s6.sc2` Q1 |

### 5.8 Section 1.7 — Extended Example 1A

| Atom | Treatment | Items |
|---|---|---|
| Step 1, the plan: sort by element → income statement → changes in equity → balance sheet → check it balances | prose | `c01.s7.x01` **O1** put the five steps in order |
| Why the income statement comes first (net income is needed next) | prose | in `x01` feedback |
| Step 2 income statement: 3,100 − 1,860 = 1,240 gross profit; − 520 − 300 = 420 operating income; − 90 = **330** net income | computed | `c01.s7.x02` **D3** build it on the statement image; `c01.s7.x03` N1 ×3 |
| **F01-11** the income statement from the trial balance | **the drop-target statement** | `c01.s7.x02` |
| Step 3 changes in equity: RE 1,000 + 330 − 50 = **1,280**; CS 600 + APIC 1,900 unchanged; total equity **3,780** | computed | `c01.s7.x04` N1 ×2 |
| Step 4 balance sheet: current assets 1,774; non-current 4,236; total assets 6,010; current liabilities 430; LT note 1,800 | computed | `c01.s7.x05` **D3**; `c01.s7.x06` N1 |
| **F01-12** the classified balance sheet | **the second drop-target statement**, with banded drop zones | `c01.s7.x05` |
| Two contra accounts: AR net of allowance = 280; equipment net of accumulated depreciation = 3,300; gross would overstate assets | prose, signalled | `c01.s7.x07` **N1** + M4 |
| Step 5 tie line: A 6,010 = L 2,230 + E 3,780; operating 420 − interest 90 = 330; RE 1,000 + 330 − 50 = 1,280 | worked example | `c01.s7.x08` **T1** the three ties, engine-verified |
| Step 6 reading the result: working capital 1,344; current ratio 4.13; the 1,800 note is large against equity of 3,780 | computed | `c01.s7.x09` N1 ×2 + S1 |
| Step 7: a cash flow statement needs last year's balance sheet too, so it cannot come from one trial balance (→ Ch. 5) | prose | `c01.s7.x10` Q1 |
| Step 8 **Exam Trap**: a trial-balance question usually asks for one number; sort by element first; watch the contra accounts | trap drill | `c01.s7.x11` M4 |
| **SC7-1** total current assets 1,774 → B; rationales A (that is current liabilities), C (adds the allowance back), D (total assets) | exam-style | `c01.s7.sc1` N1 |
| **SC7-2** closing RE 1,280 → C; rationales A, B, D | exam-style | `c01.s7.sc2` Q1 |
| **SC7-3** dividends payable is a current liability → D; rationales A, B, C | exam-style | `c01.s7.sc3` Q1 |

### 5.9 Summary, practice, case

| Atom | Page | Treatment | Items |
|---|---|---|---|
| **F01-13** summary map, the key rule for each of the seven topics | `summary.html` | **interactive figure**: seven rule cards, each flipping to its section, completion-aware | `c01.sum.x01` M1 topic → key rule |
| The chapter summary paragraph | `summary.html` | prose, with each clause linked back to its section | `c01.sum.x02` L1 cloze over the summary |
| Practice preamble: MCQs first, then the case; read the explanations even when right | `practice.html` | prose | — |
| **P01–P16**, each with four options and a rationale for every option | `practice.html` | exam-style, options shuffled, elaborated feedback keyed to the chosen option | `c01.p01`–`c01.p16` Q1 (P07 also N1) |
| Case narrative: Barada, Amman wholesaler, Orontes customer, U.S. GAAP for its bank and supplier | `case.html` | prose, ~250 words as the exam uses | — |
| The bookkeeper's trial balance description; the bank wants net income, total assets, total liabilities, and the effect on RE after closing; Mr Haddad wants each account categorised first and asks whether dividends reduce net income | `case.html` | prose | — |
| "Enter amounts in USD 000, no `$` and no commas (for example 1250)" | `case.html` | **enforced by the input**, with the exam's own instruction shown | all case items |
| The exhibit — F01-10 again | `case.html` | the same ledger object, as an exam exhibit panel | — |
| **C1-1** eight accounts → six categories (Asset, Contra-asset, Liability, Equity, Revenue, Expense) | `case.html` | **D3** drag-and-drop, as the exam screen does it | `c01.c1-1` |
| C1-1 feedback: the two contra-assets sit with assets but carry credit balances; dividends payable is a liability while dividends declared reduce equity | `case.html` | elaborated feedback | — |
| **C1-2** net income = 330; wrong answers 280 (treats dividends as an expense), 1,240 (stops at gross profit), 3,100 (reports revenue) | `case.html` | **N1** with the book's wrong-answer diagnostics fired by the actual entry | `c01.c1-2` |
| **C1-3** total assets = 6,010; wrong 6,030 (ignores the allowance), 6,910 (ignores accumulated depreciation), 7,850 (adds the contras instead of subtracting) | `case.html` | N1, same diagnostics | `c01.c1-3` |
| **C1-4** closing RE = 1,280; wrong 1,330 (forgets the dividend), 330 (this year's income only) | `case.html` | **S2** select from a list | `c01.c1-4` |
| **C1-5** total liabilities = 2,230; wrong 2,280 (counts dividends declared as a liability), 2,180 (omits dividends payable) | `case.html` | N1, same diagnostics | `c01.c1-5` |
| **C1-6** a dividend reduces **retained earnings**, not net income; wrong options and why | `case.html` | **S3** fill in the blank from a list | `c01.c1-6` |
| All section-check, Your Turn, P01–P16 and case answers with every rationale | `answers.html` | the book's answer section in full, as a reference view | — |

### 5.10 Terms, review, appendices

| Atom | Page | Treatment |
|---|---|---|
| All 64 Term Bridge rows + the 16 chapter key terms, de-duplicated | `terms.html` | bilingual cards, 🔊 EN and AR, recognition → production → Leitner box, source section linked |
| Appendix A glossary (English, Arabic) | `glossary.html` | searchable table, 🔊 per row, filter by chapter |
| Appendix B index of terms | `term-index.html` | term → defining section link |
| Interleaved retrieval across all seven sections | `review.html` | mixed-type set drawn from every section, re-shuffled each visit |
| The trap counter | `review.html` | the traps this learner has actually failed, resurfaced first |

**Totals for the pilot:** 13 pages, 13 interactive figures, **~150 scored items** (≈105 section exercises, 16
practice MCQs, 6 case items, ~20 review items), a 64-term bilingual drill, and one computed ledger behind
every number.

---

## 6. Exercise types

### 6.1 The contract every exercise obeys

No exceptions, enforced by the engine and asserted by the QA page:

1. **Check Answers** and **Try Again** buttons, always both, always in the same place, always those words.
2. **Try Again** re-shuffles and re-renders from scratch; it never reveals the answer as a shortcut.
3. Marking is per element, never one verdict for the whole item.
4. Feedback leads with **the rationale for what the learner actually chose**, then the correct answer, then
   the rest.
5. Never colour alone: ✓ / ✗ glyphs and text labels accompany every green and red.
6. Drag always has a click/tap equivalent and full keyboard operation.
7. `aria-live` status, so a screen reader announces the result.
8. Completion writes to `localStorage` under a namespaced key, inside `try/catch`.
9. Every target set has **at least two distractors** more than it has slots.

### 6.2 Shuffling and distractors

- **Matching / classifying:** tiles shuffled on every render *and* on every Try Again; targets shuffled
  independently; tile count > target count by ≥ 2, drawn from the chapter's own wrong answers.
- **MCQ:** options shuffled. This requires the data shape to change from the prototype's positional
  `answer: 2` to `options: [{text, ar, correct, why}]`, so the rationale travels with its option and survives
  the shuffle. The chapter supplies a `why` for all four options of every question, so no rationale is invented.
- **Numeric:** no shuffle; instead the book's named wrong answers become **diagnostic triggers** — entering
  `6,030` on C1-3 returns "this ignores the allowance for credit losses", exactly as the book explains it.
- A fixed seed option (`?seed=…`) so a specific shuffle can be reproduced when reporting a problem.

### 6.3 The twenty types

**Drag-and-drop family**

| ID | Type | What it does | Where |
|---|---|---|---|
| **D1** | Term match | Drag an English exam term onto its Arabic equivalent, or the reverse. With distractors. | every Term Bridge |
| **D2** | Classify into bins | Drag items into category bins — elements, normal balances, qualities, matching methods, cash-flow categories. | throughout |
| **D3** | **Image / statement drop** | **The marquee interaction.** Drag account labels onto the real thing: the banded classified balance sheet (F01-12), the income statement skeleton (F01-11), the trial balance exhibit (F01-10), the two-system org map (F01-08), the users-to-statements map (F01-02). Drop zones are regions of the statement, so position carries meaning — current vs non-current, above vs below gross profit, asset vs contra-asset. | s1-1, s1-4, s1-5, s1-6, s1-7, case |
| **D4** | T-account / debit-credit side | Drop an account on the left or right side of a T. | s1-3 |
| **D5** | Sequence | Drag to order — the five preparation steps, the accrual timeline. | s1-7 |
| **D6** | False-friend trap | Two-sided sorter: the word that *looks* right vs the U.S. GAAP term that *is* right. | s1-2, s1-3, s1-1 |

**Journal and grid family**

| ID | Type | What it does | Where |
|---|---|---|---|
| **J1** | Journal entry | Drop accounts into debit and credit lines with amounts. **An entry that does not balance cannot be marked correct.** | s1-3 (13 entries) |
| **G1** | Effect grid (read) | The January grid: each row's effect on A / L / E / NI / cash flow, hover-linked to its journal entry. | s1-3 |
| **G2** | Effect grid (faded) | The February grid with rows 1–3 given and 4–6 to complete — the book's own fading, implemented literally. | s1-3 |
| **T1** | Tie check | Enter the figures and the engine verifies the book's tie lines; nothing passes until it ties. | s1-7 |

**Exam-format family (mirrors the CBQ item types)**

| ID | Type | Where |
|---|---|---|
| **Q1** | Single-answer MCQ, shuffled, rationale per option | every SC item, P01–P16 |
| **Q2** | Multiple-select | review |
| **S2** | Select from a list (dropdown) | C1-4, review |
| **S3** | Fill in the blank from a list | C1-6 |
| **N1** | Numeric entry, unit-aware, with the book's wrong-answer diagnostics | throughout |
| **L1** | Cloze with a word bank | Language Focus boxes, summary |

**Language, figure and reflection family**

| ID | Type | What it does | Where |
|---|---|---|---|
| **L2** | Exam-stem reader | Highlight the cue word (MOST, NOT, EXCEPT, *immediately after*, *net effect*) and say what it changes. | s1-6 |
| **M1** | Bilingual term card drill | Recognition → production; 🔊 on both languages. | every section |
| **M4** | Trap drill | The Exam Trap boxes as scored items; failures feed the trap counter. | every section |
| **I1** | IFRS contrast match | U.S. GAAP name ↔ IFRS name. | s1-2, s1-5 |
| **E1** | Equation effect | Set ↑ / ↓ / 0 for assets, liabilities, equity, net income and cash. | s1-2, s1-4 |
| **F2–F4** | Figure manipulation | The equation machine, the accrual slider, the statement-link flow. Scored where there is a right answer. | s1-2, s1-4, s1-6 |
| **O1** | Ordering | The five preparation steps. | s1-7 |
| **S1** | Self-explanation | Free text, not auto-graded; compared against the book's own explanation and a checklist. Used sparingly, on the heavy items only — this is what makes the retrieval generative (§2.2, rule 4). | s1-1, s1-7 |

### 6.4 The image drop target, concretely

Because this is the feature most likely to be built badly, here is the actual mechanism:

- The statement is **inline SVG**, not a bitmap: drop zones are `<rect>` regions with semantic ids
  (`bs.current-assets`, `bs.noncurrent-assets`, `bs.current-liabilities`, `bs.equity.contributed`,
  `bs.equity.retained`), so the target is the *band of the statement*, which is what carries the meaning.
- Zones highlight on drag-over; a dropped label renders inside the band in the statement's own typography, so
  the learner sees the statement being built, not a quiz being filled in.
- Subtotals **compute live from the ledger** as labels land — drop *Prepaid rent* into current assets and the
  current-assets subtotal moves. Getting the classification wrong visibly breaks the total, which is the
  teaching moment.
- Wrong band → the band is marked, and feedback says *why that band* ("accumulated depreciation has a credit
  balance but belongs with the asset it reduces, not with liabilities").
- Inline SVG also means it scales, prints, works in dark mode, needs no image files, and keeps the zip small.

### 6.5 The trap counter

Every M4 and D6 failure is recorded against a named trap (`trap.primary-user`,
`trap.dividend-not-expense`, `trap.stock-means-shares`, `trap.allowance-vs-provision`,
`trap.estihlak-depreciation`, `trap.cash-not-trigger`, `trap.four-bodies`, `trap.contra-netting`, …).
`review.html` opens with the traps this learner has actually failed. This is the cheapest high-value
personalisation available, and it needs no server.

---

## 7. The figures — 13 figures, 13 interactive SVGs

The chapter's figures are not illustrations; several of them *are* the teaching. Each is rebuilt as inline SVG
built by `figures.js`, themed, bilingual-labelled, and interactive where interaction teaches. Mayer's
coherence and signalling principles (§2.4) are the test: if an element carries no information, it is removed.

| Figure | In the book | On the site |
|---|---|---|
| **F01-01** | Roadmap, seven linked topics | Clickable chapter map; nodes tick as sections complete |
| **F01-02** | Users table, 7 rows | User cards that flip to decision / key question / statements; feeds a D3 drag |
| **F01-03** | A = L + E with equity split | **The equation machine**: apply a transaction and watch both sides move; unbalance it and it visibly refuses |
| **F01-04** | Debit/credit rules, six account types | The rule grid, tappable, then testable; the expanded-equation mnemonic overlays it |
| **F01-05** | January effect grid | Live grid computed from the ledger; row hover links to the journal entry |
| **F01-06** | February **faded** grid | The G2 exercise itself — rows 1–3 given, 4–6 live inputs |
| **F01-07** | Accrual vs cash timeline | **A slider** from Dec 20 to Jan 15: the same sale, two bases, two years |
| **F01-08** | Who writes the rules | Two-system org map; drag each body onto its job (D3) |
| **F01-09** | How the four statements connect | Animated flow: net income → retained earnings, net change in cash → cash balance, honouring reduced-motion |
| **F01-10** | Barada trial balance | **The live exhibit**, one ledger object reused by four pages; totals computed |
| **F01-11** | Income statement | Build-it drop target with live subtotals |
| **F01-12** | Classified balance sheet | The banded drop target of §6.4 |
| **F01-13** | Summary map, key rule per topic | Seven rule cards, flip to the section, completion-aware |

---

## 8. Bilingual and audio design

### 8.1 English ↔ Arabic, and nothing else in the exercises

- Every term appears as **English (the exam term) + Arabic**, never Arabic alone. Arabic is the bridge, not
  the medium (§2.3).
- Arabic text: `lang="ar"` and `dir="rtl"` on the span, so shaping, punctuation and bidi mirroring are right.
  Mixed-direction lines (a term and its gloss in one sentence) are the classic bug; every one gets an isolating
  wrapper.
- Arabic plural and verbal-noun forms are preserved as the book writes them — `أصل (أصول)`,
  `يعترف (الاعتراف)` — because that *is* the teaching.
- Bundled Arabic webfont (no CDN, no internet), so Arabic renders identically on a machine without good
  Arabic system fonts.
- **Translation exercises are English ↔ Arabic only.** No French exercise of any kind.
- French in the book's four False-Friend bullets (*résultat*, *charges*, *la balance*, *stock*) is content
  about a trap, not a translation exercise. See §12 Q1 — this is the one content fork I want your call on.

### 8.2 What stays in English

Reasoning, explanations, exam stems, question text and all feedback. The exam is in English and the book is a
graded-English textbook; translating the reasoning would remove the thing being taught. Arabic appears on
terms, on the chapter title, and in the glossary.

### 8.3 Pronunciation — the fallback chain

A 🔊 icon beside every term, on both the English and the Arabic.

```
speech.js, in order:
  1. Wait for the voiceschanged event before touching getVoices()   ← the #1 cause of dead buttons
  2. Prefer a LOCAL voice (voice.localService === true) for the target language
       en → en-US, en-GB;  ar → ar-SA, ar-EG, any ar-*
  3. Otherwise any available voice for that language
  4. Otherwise a pre-rendered audio file from assets/audio/ch01/   (phase 3)
  5. Otherwise: the icon renders visibly disabled with a tooltip —
       "No Arabic voice is installed. Windows: Settings → Time & language →
        Speech → Add voices."
```

Plus: `cancel()` before every `speak()` so clicks do not queue up; rate 0.85 for single terms; a voice picker
in the page footer when more than one voice exists; the chosen voice remembered in `localStorage`; and **no
autoplay anywhere** — speech only ever follows a click.

**Unverified, and on the Gate 0 checklist (§11):** exactly how `speechSynthesis` behaves on `file://` pages.
Local Windows voices are expected to work and Google's network voices are expected not to, but §2.5 could not
confirm it by search, so it gets tested on Windows from a `file://` page before anything is built on top of it.
If local voices turn out to be unavailable on `file://`, the pre-rendered audio pack moves from phase 3
fallback to phase 1 requirement — the same pattern `alhasan/book1/assets/audio/` already uses in this repo.

---

## 9. Technical architecture — the `file://` constraints

These are not stylistic preferences. Each one is a thing that **silently breaks** when the page is opened from
a folder instead of a server, and each has broken offline course packages before.

### 9.1 What is forbidden

| Forbidden | Why | Instead |
|---|---|---|
| `fetch()` / `XMLHttpRequest` on local files | `file://` is an opaque origin; the request fails CORS | data in `<script type="application/json">` inline, or a `.js` file assigning `window.X` |
| `<script type="module">`, `import` / `export` | ES modules are CORS-checked, so they are blocked on `file://` | classic scripts and IIFEs |
| Service worker, `manifest.json` caching | will not register on `file://` | nothing needed; it is already local |
| Any CDN, webfont service, analytics | no internet | bundle the fonts, write the CSS |
| Absolute paths (`/assets/…`) | resolve to the filesystem root | relative paths only |
| `<img src="chart.svg">` for interactive figures | external SVG cannot be styled or scripted from the page | inline SVG |

### 9.2 What works, with care

- **`localStorage` works on `file://`** in Chrome, Edge and Firefox, but all `file://` pages share one opaque
  origin — so keys are namespaced `cma1b1.ch01.s3.x07` to avoid collisions with anything else the user has
  opened locally, every access is wrapped in `try/catch`, and the site degrades to in-memory progress if
  storage throws (private windows, blocked site data).
- **`speechSynthesis`** — §8.3, with Gate 0 verification.
- **Inline SVG, CSS custom properties, flexbox/grid, `<details>`, `<dialog>`** — all fine.
- **Printing** — a `@media print` sheet so practice and case pages print as clean worksheets.

### 9.3 Housekeeping that bites on Windows

Lowercase, hyphenated filenames; no spaces, no `#`, no `?`, no non-ASCII in any path (the zip may be extracted
into a folder whose own name has Arabic characters — our paths must not add to the problem); `README.txt` with
CRLF so Notepad renders it; and the package verified by extracting with Windows Explorer's own unzip, not just
a CLI tool.

### 9.4 One ledger, every number computed

The chapter's numbers all descend from two sources: the **Barada trial balance** (F01-10) and the **Orontes
January and February transactions**. The book guarantees they tie. The prototype hand-copied them into each
page, which is how such a site drifts.

Instead, `ledger.js` holds the trial balance and the transaction list once, and **every figure, subtotal,
answer key and numeric tolerance is derived from it at runtime.** Net income 330, closing RE 1,280, total
assets 6,010, total liabilities 2,230, AR net 280, equipment net 3,300, working capital 1,344, current ratio
4.13, assets +2,380 / liabilities +850 / equity +1,530, cash +1,060, net income 80 — all computed, none typed.

I verified every one of these by hand against the chapter while writing this plan, and they all tie:
9,750 = 9,750; 1,774 + 4,236 = 6,010; 2,230 + 3,780 = 6,010; 420 − 90 = 330; 1,000 + 330 − 50 = 1,280;
2,380 = 850 + 1,530; 1,500 + 80 − 50 = 1,530; 1,774 − 430 = 1,344; 1,774 / 430 = 4.13. The QA page re-asserts
them on every build, so a future edit cannot quietly break one.

### 9.5 Size and shape

13 HTML pages at 15–40 KB each, engine ~45 KB, figures ~35 KB, ledger + terms ~25 KB, bundled fonts
~250 KB, CSS ~20 KB. **Zip ≈ 0.5 MB** without pre-rendered audio, **≈ 4–6 MB** with a full English + Arabic
term-audio pack. No build step, no dependencies, nothing to install — the source *is* the deliverable.

---

## 10. Augmentations

The request allows augmenting the material but never dropping a concept. The hard rule I am holding to:
**augmentations add repetitions, representations and retrieval opportunities. They never add accounting
doctrine, never invent a number, and never introduce a rule the book does not state.** Every number traces to
the ledger; every rationale traces to a sentence in the chapter.

| # | Augmentation | Why | Risk |
|---|---|---|---|
| A1 | **Interleaved review page** with re-shuffling across all seven sections | Spacing and interleaving (§2.4); the book has no cross-section retrieval | none |
| A2 | **Trap counter** — resurfaces the traps this learner actually failed | The chapter's traps are its highest-value content for this learner | none |
| A3 | **Pronunciation on all 64 terms** | An Arabic-trained accountant may read these terms correctly and say them unrecognisably; the exam is English | depends on installed voices (§8.3) |
| A4 | **Arabic regional-variant drill** — استهلاك / اهتلاك / إهلاك, مخصص as allowance vs provision | The book names the variants; a drill fixes them. Purely the book's own content | none |
| A5 | **Live subtotals on the statement builders** | Makes a misclassification visibly break a total — the teaching moment of §6.4 | none |
| A6 | **CBQ answer-entry trainer** — USD 000, no `$`, no commas | The book states the convention; the exam enforces it; drilling it costs nothing | none |
| A7 | **Printable one-page cheat sheet** — debit/credit rules, A = L + E, the four adjustments, the four bodies | Pure consolidation of §1.2–1.5 content | none |
| A8 | **Self-explanation prompts on heavy items** | Turns matching from retrieval into generative learning (§2.2, rule 4) | can't be auto-graded; model answer + checklist instead |
| A9 | **"Which statement?" sorter over all 20 trial-balance lines** | More repetitions of the single highest-yield Chapter 1 skill | none |
| A10 | **Forward-reference badges** (comprehensive income → Ch. 3/15; allowance → Ch. 6; accrued revenue → Ch. 11; cash flow statement → Ch. 5) | The book makes these promises; the site should honour them visibly once those chapters exist | none |

### Two copy fixes to flag, not to make silently

In the chapter's C1-6 answer block, two rationales have a dropped clause:
*"revenue is wrong: this answer a dividend is a distribution, not a reduction of revenue"* and
*"total assets on the declaration date is wrong: this answer cash leaves only when the dividend is paid…"*.
Both read as if "this answer" should be followed by something like "treats". The meaning is clear and I will
**not** change the accounting; I will carry them as `[sic]` in the data with a proposed reading, listed for
your sign-off rather than edited quietly. The book is frozen for review, so this belongs in your review notes.

---

## 11. Build phases and the quality gate

The book passes a 33-check gate per chapter. The site should be held to something comparable, and
mechanically.

### Phases

| Phase | What ships | Why in this order |
|---|---|---|
| **Gate 0** | On Windows, from `file://`: `speechSynthesis` with a local English voice and a local Arabic voice; HTML5 drag-and-drop; `localStorage`; inline SVG drop zones | Four assumptions the whole build rests on. Verified before anything is built on them. Half a day. |
| **1 — vertical slice** | The engine, `ledger.js`, `speech.js`, `progress.js`, the figure library, `_qa.html`, and **section 1.3 complete** (22 exercises, 13 journal entries, both effect grids, three false friends, three exam traps, 15 term bridges) | 1.3 is the hardest section in the chapter. If the architecture survives it, the other six are filling in content. This is the slice to review before committing to the rest. |
| **2 — the other six sections** | s1-1, s1-2, s1-4, s1-5, s1-6, s1-7 with their figures | Content work against a proven engine |
| **3 — back matter** | `summary`, `practice` (P01–P16), `case` (C1-1…C1-6), `terms`, `review`, `answers`, the chapter hub, the book home, `glossary`, `term-index`, `how-to-use` | Needs all seven sections to exist to link and interleave |
| **4 — package** | Print sheet, optional audio pack, `README.txt`, full QA pass, extract-and-open test on Windows, **zip** | The deliverable |

### The gate `_qa.html` asserts, mechanically

**Coverage** — every row of the §5 ledger resolves to a real item id on a real page; every SC item, every
P01–P16, every C1-x, every Term Bridge row, every figure, every Exam Trap, every False Friend, every Language
Focus, every IFRS Contrast is present.

**Contract** — every exercise has both buttons with the exact words *Check Answers* and *Try Again*; every
MCQ carries a rationale for **all** options; no matching or classifying set has equal tiles and targets; every
drag target has a click and a keyboard path; every `aria-live` region exists.

**Numbers** — all nine ledger ties recompute; every numeric answer key derives from `ledger.js` and no numeric
literal answer appears in any page's data.

**Offline** — no `http://` or `https://` in any `src` or `href` except the citation list; no `fetch(`; no
`type="module"`; no absolute paths; every internal link resolves to a file that exists.

**Bilingual** — every term record has a non-empty Arabic field; every Arabic span has `lang="ar"`; no French
in any exercise payload.

**Accessibility** — contrast ≥ 4.5:1 both themes, visible focus on every interactive element, 44 px minimum
targets, `prefers-reduced-motion` honoured, no information carried by colour alone.

---

## 12. Decisions — settled 2026-10-31

**Q1 — French: keep the prose, no French exercises.** The four False-Friend bullets that warn about French
words (*résultat*, *charges*, *la balance*, *stock*) stay as readable content, because they are concepts the
chapter teaches and dropping them would drop content. No French column in any term table, and no French
exercise anywhere. Translation exercises are English ↔ Arabic only.

**Q2 — the pilot zip is Chapter 1 complete, all 13 pages.** Seven section pages plus hub, summary, practice
(P01–P16), case (C1-1…C1-6), terms, review and answers. The pilot's job is to prove "absolutely everything"
on one chapter.

**Q3 — build fresh at `cma/book1/` and retire `cma/unit1/`.** The six working renderers are ported; the data
shapes change so that MCQ options can shuffle with their rationales attached and every matching set carries
distractors. `cma/unit1/` is removed once the pilot supersedes it.

---

## 13. Build status — Chapter 1 pilot, shipped 2026-10-31

All four phases complete. The package is `cma-part1-book1-chapter1.zip` (168 KB): unzip, open `index.html`.

### What was built

| | Planned | Built |
|---|---|---|
| Pages | 13 | **13** + book home, how-to-use, glossary, term index, QA page = **18** |
| Scored exercises | ~150 | **133** |
| Interactive figures | 13 | **13** |
| Bilingual terms | 64 | **80** (the book's 54 bridge rows + 26 it defines in prose) |
| Renderers | 20 types | **16 renderers** covering all 20 planned interactions |
| Ledger ties | 9 named | **16 asserted**, all passing |

The exercise count came in at 133 rather than the planned ~150 because several planned items merged into
single richer exercises — the five-verb Language Focus is one cloze rather than five items, and the twelve
journal entries are generated from the ledger rather than hand-written as separate drills. Coverage of §5 is
complete; the count is lower than the estimate, not the coverage.

### Verification actually run

- **`_qa.html`: all 59 checks pass.** It loads every page's real exercise definitions, renders all 133
  exercises, and inspects the result — not a description of it.
- **Every exercise solved through the click path in Chromium from `file://`**, on all 13 pages: every one
  grades correctly when solved. Wrong answers were checked separately and return the book's own rationale for
  the option actually chosen, with the trap recorded by name.
- **Build checks**: 453 internal references all resolve; no external URL; no absolute path; no `fetch`, no
  XHR, no ES module, no service worker; all paths lowercase ASCII; all 18 pages reachable from `index.html`
  by clicking.
- **The zip was extracted and re-tested** from the extracted copy: navigation by clicking works and the gate
  still reads clean.
- **The marquee interaction verified behaviourally**: omit the allowance for credit losses from the balance
  sheet and the current-assets subtotal reads **1,794 in red** — which is exactly the wrong answer the book
  names in SC7-1 option C — then snaps to 1,774 in green when the allowance is added.

### Decisions taken during the build

1. **Statements are HTML "paper", not SVG.** Inline SVG is used for the three real diagrams (roadmap,
   statement-link flow, summary map) where geometry carries meaning. The statements, grids and maps are
   HTML+CSS, because an HTML statement takes a dropped HTML chip natively, recomputes its subtotals, prints,
   scales and reads correctly to a screen reader. SVG `foreignObject` would do none of that as well.
2. **One ledger, every number computed.** `assets/ledger.js` holds the Barada trial balance and the Orontes
   January/February transactions; every statement line, subtotal, answer key and numeric tolerance derives
   from it at runtime. No answer is typed twice anywhere in the site.
3. **The answers page is generated, not transcribed.** `ch01/answers.html` loads all twelve data files and
   renders 136 answer items with 724 explanations from the live exercise definitions, so the answer section
   cannot drift from the exercises it answers.
4. **A static `<noscript>` route between pages.** The rail and pager are JS-built from one TOC, which meant
   seven pages had no path to them without JavaScript. Every page now carries a plain static list of all
   thirteen.
5. **Authored rationales may carry markup; learner input never does.** A `rich()` path was separated from
   `esc()` after the first build escaped `<em>` inside the book's own explanations.
6. **Gate 0 could not be fully run.** `speechSynthesis` on `file://` was verified in Chromium on Linux (the
   container has no installed voices, which exercised the degraded path correctly). **The Windows local-voice
   path and the Arabic voice are still unverified on real hardware** — the fallback chain is built and the
   icon degrades visibly with install instructions, but this is the one item in §11 that needs a human at a
   Windows machine.

### Still open

- **Windows verification** of the English and Arabic local voices (above).
- **No pre-rendered audio pack.** Phase 3 fallback, not built. If Windows verification shows local voices do
  not work from `file://`, this moves from optional to required, following the pattern already in
  `alhasan/book1/assets/audio/`.
- **No bundled Arabic webfont.** The site uses the system Arabic stack (Segoe UI, Tahoma, Traditional
  Arabic, Noto Naskh Arabic). Bundling one would make Arabic render identically everywhere at ~250 KB.
- **The two `[sic]` copy slips** in the book's C1-6 answers (§10) are carried with a proposed reading, not
  silently edited. They belong in your review notes.
- **`cma/unit1/` not yet removed.** Per §12 Q3 it retires once this pilot supersedes it; left in place until
  you have seen the pilot.

---

*Nothing in §5 is optional — the coverage ledger is the contract.*
