# EFDL A2 — Autonomous Run Plan

**For approval before the run starts.** Nothing in this document has been
built yet. It says exactly what one run will produce, what it inherits from
A1 rather than rebuilding, which checks run before and after every exercise,
every figure and every unit, and what stops the run rather than being papered
over.

Branch: `claude/jolly-johnson-9khdgl`. Target directory:
`docs/general-english/A2/`.

This is the A1 plan again, with four differences: the level, the source level
of American Headway, the engine is **inherited and not written**, and seven
things A1 learned the hard way are checks from day one instead of discoveries
in week two.

---

## 0. Where this starts

### 0.1 The A2 that is already in this directory

`docs/general-english/A2/` currently holds a finished twenty-unit A2 built on
a different architecture: the shape of *English for Furniture Designers Book
2*, a ten-part shell, **four figures per unit**, 80 figures in all, and
`tools/figures.py`, a 3,225-line library whose output you described as a
disaster. The diagnosis is in `A1/VISUAL-SYSTEM.md` §1 and it was correct:
sixteen of twenty figures in its Unit 1 were a rounded card with prose in it,
and its whole cast was one grey pill with a circle on top.

That book passed 269 checks. The checks measured whether a figure was
*correctly produced*. None of them asked whether it was *a picture*.

**Proposal: delete it and rebuild `A2/` from scratch on the A1 architecture.**
Deletion is safe — nothing outside `A2/` imports from it — and reversible:
`git log --all -- docs/general-english/A2` keeps every byte, exactly as the
deleted `docs/english-animated/` is still recoverable. **This is decision 1 in
§12 and the run does not start until you answer it.** Nothing is deleted on my
own judgement.

### 0.2 What A2 inherits rather than rebuilds

This is the whole reason A2 is a smaller job than A1 was. A1 ended with a
working engine and a working suite, both proven on 440 figures and 760
exercises:

| Inherited | What it is | Lines |
|---|---|---|
| `draw.py` | canvas, 55 colours, WCAG contrast, font fallback, fit, clip, overlap recording | ~430 |
| `people.py` | the character rig: 14 poses, signed joints, hair front/back | ~350 |
| `cast.py` | the eight people of Hill Road | ~60 |
| `world.py` | ~49 props, 12 places, speech bubbles with clamped tails | ~700 |
| `plates.py` | **39 plate functions** — street, two_talk, register, notice, form, phone, blocks, verb_change, tick_grid, town_map, body_map, rank_three, … | ~1,100 |
| `covers.py` | the four-cover system, counts read from the book | ~370 |
| the check suite | gate, cross, crossall, lexis, keys, coupling, drift, back, doc, visual, mutate, mutations, runall | ~1,900 |
| the builders | `build_unit.py`, `build_volume.py` (sections, keepNext, full-bleed covers), `build_back.py` | ~450 |

**A2 writes no engine.** It writes units, keys, figure modules, scripts,
wordlists, and about eight new plates (§2.4). Everything else is a call into
code that is already green on a 441-page book.

### 0.3 The one structural change: the engine becomes the series engine

A1's tools live in `A1/tools/`. If A2 copies them, the next bug is fixed
twice and the two levels drift apart — which is the exact failure the drift
checks exist to prevent, one level up.

So P0 promotes the shared code to **`docs/general-english/engine/`**, which
both levels import, with the level supplied as a parameter (`a11`, `a21`) and
the spec read from the level's own `spec/golden.yaml`. `A1/tools/` keeps
one-line shims so every path in `A1/` still works.

**The proof obligation is absolute and it is cheap.** Moving a file cannot
change an SVG, so after the move `A1`'s whole suite must report exactly what
it reports today — ten stages, 0 failures, drift 440/440 unchanged, 441-page
Student Book. If any number moves, the move is reverted and A2 forks the
engine instead. This is decision 2 in §12.

---

## 1. What the run produces

### 1.1 The two volumes

| | EFDL-A2.1 | EFDL-A2.2 |
|---|---|---|
| Units | 1–10 | 11–20 |
| Working title | *Getting On* | *Out in the World* |
| New lexical items | ~460 | ~460 |
| Grammar points | 20 | 20 |
| Exercises | 380 | 380 |
| Figures | 220 | 220 |

Shipped the way A1 was finally shipped: **one Student Book of twenty units and
one Answer Key**, DOCX and PDF, with a full-bleed front and back cover on each
and the back matter behind the units. The same builder also emits the 1–10 and
11–20 split on request; A1 proved both paths.

**Twenty units · 760 exercises · 440 figures · ~920 new words · 4 covers ·
8 back-matter files.** Estimated extent: 470–510 printed pages for the Student
Book (A1 was 441 at tighter ceilings), 55–65 for the Answer Key.

### 1.2 Back matter, eight files, generated from day one

A1 wrote its back matter at the end. That is how a defect in Unit 5 survived
to the twentieth unit (§0.4 of `A1/RESUME.md`). **A2 generates the three
derivable files from the first unit onwards** — Word File, Can-Do Record,
Picture File — so they can never be out of step with the book, and
`check_back.py` fails the moment they are.

| File | How it is made |
|---|---|
| Grammar File | written, one entry per unit, held by **B8** to the eight permitted terms |
| Word File | generated from the wordlists; every word, its unit, an Arabic gloss, **and the A1 unit it was first taught in if it is carried** |
| Phrase File | written, the functional set per unit |
| Audio File | written **with each unit**, not after it — see §1.3 |
| Picture File | generated from each figure module's manifest and the strings its canvas actually draws |
| Irregular verbs | written, extended from A1's 24 to ~60 |
| Sound and symbol table | written, extended from A1's 23 sounds, **plus stress, weak forms, contractions and linking** |
| Can-Do Record | generated from every unit's 8E |

### 1.3 The process change that matters most

**Every unit's four listening scripts are written as part of that unit, before
it is committed.**

In A1 the eighty scripts were written at the end, and writing them found a
real defect in a unit that had shipped five sessions earlier: exercise 5-3B
asked which *room* a class was in, against a timetable with no room column,
and its key answered one slot out. `check_keys` counts answers; it does not
read them. The script found it because *a script has to say the answer out
loud*.

So in A2 the script is part of the unit's definition of done, and a new check
**K8** compares every definite listening answer in the key against the words
of its own script. A key that says `18.00` where the script says `six o'clock`
is red before the unit is committed.

### 1.4 What the run cannot produce, stated plainly

- **No recorded audio.** Scripts, speaker letters, timings and the recording
  spec; no voices.
- **No photographs.** 440 drawn, checked figures. This is why they are
  checkable, and it is a real difference from the book being matched.
- **No separate test suite.** Part 8 reviews in every unit; the four Loops are
  on the cut list at Tier 3.
- **No Workbook, no Teacher's Book, no digital components.**

---

## 2. The A2 shell

### 2.1 The shell does not change, and that is deliberate

Same nine sections, same thirty-eight labels, same twenty-two figures as A1.

| Part | Header | Exercises | Labels |
|---|---|---|---|
| Warm Up | `**Warm Up**` | 3 | W1 W2 W3 |
| 1 | `**Part 1 · Words & Sounds**` | 6 | 1A–1F |
| 2 | `**Part 2 · Grammar**` | 6 | 2A–2F |
| 3 | `**Part 3 · Listening**` | 4 | 3A–3D |
| 4 | `**Part 4 · Speaking**` | 4 | 4A–4D |
| 5 | `**Part 5 · Reading**` | 4 | 5A–5D |
| 6 | `**Part 6 · Writing**` | 3 | 6A–6C |
| 7 | `**Part 7 · Real-World File**` | 3 | 7A–7C |
| 8 | `**Part 8 · Review & Can-Do**` | 5 | 8A–8E |

Three reasons, in order of weight:

1. **A learner should learn the book once.** Someone finishing A1 unit 20 and
   opening A2 unit 1 should recognise the furniture and spend their attention
   on the language.
2. **The ladder checks compare like with like.** X5 asks whether unit *u* is
   harder than unit *p*. Across a shell change that question has no meaning,
   and the A1→A2 boundary is the most important rung on the whole ladder.
3. **Zero tool work.** `gate.py` reads the sections from `golden.yaml`. A
   different shell is a config change, but every check that reasons about
   parts — G21, F7, the figure budget, the coupling classifier — would need
   re-tuning and re-mutating.

**The level lives in the ceilings, the syllabus, the task types and the
figures — not in the furniture.** What changes inside the parts:

| Part | A1 | A2 |
|---|---|---|
| 1D Say it | a list of words to say | a named phonology point per unit: stress, weak forms, contractions, linking |
| 3 Listening | 40–60-word scripts, one voice mostly | 90–140-word scripts, two and three voices, a wpm ladder |
| 5 Reading | a notice, a receipt, a message | **one real text of up to 130 words** plus a document |
| 6 Writing | a form, a frame, three lines | a form, a frame, **a paragraph of five to six lines** |
| 7 Real-World File | the street: shop, clinic, timetable | work, travel, money, services, health, technology |
| 8 Review | words, conversation, form, matching, can-do | the same, plus one **cumulative** item drawn from an earlier unit |

### 2.2 The ceilings

Derived, and declared as derived. A1's ceilings were set below the B2 source
by a CEFR ratio; A2's sit **between A1's measured, shipped reality and B1's
measured ceilings**, which is a much better-founded interpolation than A1 had,
because the left-hand column is now a book that exists.

| | A1 (shipped) | **A2 (ceiling)** | B1 (measured) |
|---|---|---|---|
| Words per unit | ≤ 3,600 | **≤ 4,800** | ≤ 6,783 |
| Mean sentence | ≤ 8 | **≤ 10** | ≤ 12 |
| Longest sentence | ≤ 14 | **≤ 20** | ≤ 26 |
| Flesch–Kincaid | ≤ 2.0 | **≤ 3.2** | ≤ 4.5 |
| Clause depth | ≤ 1 | **≤ 2** | ≤ 2 |
| Item mean | ≤ 7 | **≤ 9** | ≤ 11 |
| Longest item | ≤ 12 | **≤ 16** | ≤ 22 |
| Texts over 60 words | ≤ 3 | **≤ 5** | ≤ 5 |
| Longest text | ≤ 80 | **≤ 130** | ≤ 190 |
| Rubric | ≤ 12 | **≤ 16** | ≤ 20 |
| Caption | ≤ 6 | **≤ 7** | ≤ 8 |
| Items per exercise | 3–8 | **3–8** | 3–8 |
| MCQ options | 3 | **3** | 4 |
| New items per unit | ≤ 42 | **≤ 48** | — |
| Audio script | 40–60 words | **≤ 140 words** | — |

**Ceilings only. There are no floors, and there will be no floors.** Not on
words, not on sentence length, not on reading grade. The single most expensive
lesson in this repository is in `B1/tools/gate.py`:

> *"Its floors were not a safety net; they were the fault."*

A unit of 3,000 words that teaches its forty-eight items and reads cleanly is
a **pass**. Where a number here is a minimum it counts things that must exist
— every exercise has a key, every part has two figures — never difficulty.

### 2.3 The syllabus

**A1 already covers the whole of American Headway Starter and essentially all
of American Headway Level 1's grammar** (§5). So A2 is sourced from **American
Headway Level 2** — its A2 band — plus the consolidation that Level 1's top
end needs, and it deliberately stops short of B1: no past perfect, no reported
speech, no second conditional, no passives beyond the simple present.

Volume A2.1 — *Getting On*:

| Unit | Title | Grammar | Real-World File |
|---|---|---|---|
| 1 | Back on Hill Road | tense review: be, present simple, past simple, will | a registration form |
| 2 | Every Day and Right Now | present simple vs present continuous; state verbs | a work rota |
| 3 | A Place of My Own | have got, possessions; too / enough | a rental advert |
| 4 | How Much, How Many | much / many / a lot of / a few / a little | a bank statement |
| 5 | What Happened | past simple vs past continuous; when / while | an incident report |
| 6 | Getting There | prepositions of movement; have to / don't have to | a travel timetable |
| 7 | Making Plans | will vs going to vs present continuous for arrangements | a calendar invitation |
| 8 | At Work | must / mustn't / should; workplace routines | a job advert |
| 9 | Feeling Better | should / shouldn't for advice; body and symptoms | a pharmacy label |
| 10 | The Way I Am | adverbs of manner and frequency; (not) as … as | a personality quiz |

Volume A2.2 — *Out in the World*:

| Unit | Title | Grammar | Real-World File |
|---|---|---|---|
| 11 | Ever and Never | present perfect with ever / never; been vs gone | a travel checklist |
| 12 | Just, Yet, Already | present perfect with just / yet / already | a delivery tracker |
| 13 | How Long? | present perfect with for / since | a membership card |
| 14 | Then and Now | used to; past habits | a then-and-now photo pair |
| 15 | The One Who | defining relative clauses: who / which / that | a lost-property form |
| 16 | If and When | first conditional; time clauses with when / as soon as | a weather warning |
| 17 | Things I Like Doing | verb patterns: enjoy doing, want to do, decide to do | a course booking |
| 18 | Telling the Story | sequencing: so, because, although, but; linking a text | a short news item |
| 19 | How It's Made | the simple present passive | a product label |
| 20 | Looking Ahead | everything, together; will for prediction, review of all twenty | a letter of application |

Forty grammar points, twenty functional sets, twenty phonology points,
~920 new lexical items. Every item carries a ten-encounter schedule, as in A1,
and the recycling is enforced by X1b, not hoped for.

**Confidence.** The American Headway Level 1 grammar sequence is **[firm]** —
three third-party copies of the third-edition Teacher's Book contents, in
agreement. They are copies of one document, not three witnesses, so the
confidence is in the transcription, not in corroboration.
Level 2 units 1–5 are **[firm]**; units 6–12 are **[likely]** and the A2 plan
does not depend on them, because everything above B1 is excluded anyway. The
mapping of CEFR A2 onto this content is **[firm]** from the CEFR descriptors,
not from the publisher.

### 2.4 The eight new plates

The engine has 39. A2's content needs these, and nothing else:

| Plate | For |
|---|---|
| `timeline` | present perfect vs past simple — the one diagram that makes it teachable |
| `bar_compare` | quantity: much / many / a few, and *as … as* |
| `process_strip` | the simple present passive, and how-it's-made texts |
| `itinerary` | multi-day travel, units 6 and 11 |
| `office` (place) | Part 7 at work, unit 8 |
| `two_text` | two short texts side by side, for the A2 reading task |
| `rota` | a work rota and a weather table |
| `split_screen` | past continuous interrupted by past simple: *while … when* |

Each one is a renderer, built and read as a contact sheet before any unit uses
it, exactly as `body_map` and `rank_three` were in A1 — where rendering them
found three faults that no check would have caught.

---

## 3. The check architecture

A1's plan projected a suite. A2's plan can quote a suite that **exists and is
green on a real book**, which is a much stronger promise. These are the actual
numbers `tools/runall.py` reports today, re-targeted at A2's twenty units.

### 3.1 The ten stages, inherited

| Stage | Checks | Passes at 20 units |
|---|---|---|
| gate | G1–G21 per unit: shape, ceilings, examples, captions, figure budget | **420** |
| visual | V1–V7, F1–F8 per unit, 14 per figure | **300** (6,160 figure passes) |
| cross-unit | X1a X1b X3a X3b X3c X5a X5b X5c per pair, 190 pairs | **1,520** |
| lexis | E4 against the cumulative Word File | 20 |
| keys | K1–K7 + K6v volume letter balance | **141** |
| coupling | LEAK / GAP / PICTORIAL over every exercise | 760 examined |
| drift | every figure re-rendered and diffed byte for byte | **440** |
| covers | four, re-rendered and diffed | 4 |
| back matter | B1–B9 | 9 |
| document | D0–D9 on both PDFs | 14 |

### 3.2 Five new checks A2 needs and A1 did not

| | Check | Fails when |
|---|---|---|
| **X0a** | cross-level lexis | an A2 wordlist contains a word A1 already taught as new — the Word File would teach it twice across the series |
| **X0b** | cross-level ladder | A2 unit 1 is easier than A1 unit 20 on item mean, text length or new-item load. The most important rung on the ladder is the one between the books |
| **X0c** | cross-level duplication | an A2 exercise shares a seven-gram of **content** with any A1 exercise — 400 pairs, and the one that stops A2 quietly reprinting A1 |
| **K8** | key against script | a definite listening answer is not in the words of its own audio script (§1.3) |
| **C1** | cast continuity | an A2 unit asserts a fact about one of the eight that contradicts `ledgers/cast.yaml` — Lili left for Spain in A1 unit 20 and cannot be behind the counter in A2 unit 2 without a dated entry saying she came back |

### 3.3 Seven things A1 learned late, which are checks from unit 1

Each of these cost a round of rework in A1. None of them will cost one in A2.

1. **A caption ending in a question mark is not a caption** — the pattern is
   `· text.`, and a caption that breaks it vanishes from the figure count.
   Checked by G19 from the first figure.
2. **Part 8 needs two figures, not one.** Three of A1's last five units had
   one, and fixing it meant renumbering every figure after it in the module,
   the unit and the key. The figure budget is fixed in the skeleton, before
   any figure is drawn.
3. **A listening figure must not print the audio's answers.** Two A1 figures
   did; the tasks were answerable with the sound off. The coupling check runs
   on unit 1 and on every unit.
4. **A wordlist must contain the grammar words its unit teaches.** `love` was
   in no A1 wordlist, in a book whose sixteenth unit is built on it. P2 checks
   the wordlist against the unit's own grammar point before the unit is
   written.
5. **Recycling does not happen by itself.** X1b's taper
   (`need = max(2, 10 − 2·gap)`) is a planning input, not a post-hoc test: the
   skeleton places the recycled items in specific speaking and writing
   prompts, which is where a coursebook recycles.
6. **An inert check reports green.** Thirty mutations, one per check family,
   run against the pilot unit before unit 2 is written — and A1's run found a
   check that could never fail (G20) and six mutations that were too weak.
7. **A check that measures the file instead of the pieces is wrong three
   times out of three in this repository.** n-grams are measured per exercise;
   sentences per line; pages per page. Any new check is reviewed against that
   sentence before it is trusted.

### 3.4 Mutation testing

`tools/mutations.py` carries one mutation per check family, and
`tools/mutate.py` asserts each one turns its own check red and leaves the rest
green. **The run does not write unit 2 until every check has been proven able
to fail**, including the five new ones in §3.2. A1's suite was mutation-tested
on a unit it was not built on (unit 18: 30 live, 0 inert); A2's will be too.

---

## 4. Zero omissions, zero regression, zero drift

### 4.1 Zero omissions — the manifest

Before any content, `spec/manifest.yaml` enumerates everything the finished
course contains: 20 units by name, 760 exercise labels, 440 figure ids, 760
key entries, **80 audio scripts**, every back-matter page, four covers, every
release file. Produced from the skeleton, not from what gets built. Coverage
below 1.00 blocks release and is the first line of the report.

### 4.2 Zero regression

**Any edit anywhere re-runs every stage on every unit written so far** — not
the edited unit, all of them. It costs seconds; it is the only reason A1's
twenty units are mutually consistent after seven runs of edits.

Plus the structural guards: append-only ledgers; one source for item and
answer; generated scaffolds generated, never typed.

And for A2 specifically: **the A1 suite is part of A2's regression suite.**
After the engine move (§0.3) and after any engine change, A1's ten stages run
too. A2 is not allowed to improve the engine in a way that moves a single page
of A1.

### 4.3 Zero drift

1. **Figure drift** — all 440 re-rendered and diffed byte for byte, every run.
2. **Cover drift** — all four, same guarantee (B9).
3. **Back-matter drift** — the three generated files re-derived and diffed
   (B2).
4. **Spec drift** — `spec/golden.sha256` freezes the ceilings. A ceiling may
   be *tightened* with a logged reason. **A ceiling may never be loosened to
   make a unit pass**, and an attempt is a hard stop (§9).

---

## 5. Parity with American Headway

The honest comparison is now **A1 + A2 together against American Headway
Starter + Level 1 + the A2 half of Level 2**, because that is what the two
EFDL levels cover between them.

| Dimension | American Headway (Starter + 1 + ½ of 2) | EFDL A1 + A2 | Verdict |
|---|---|---|---|
| Level | A1 → A2 | A1 → A2 | parity |
| Units | 14 + 12 + ~6 = ~32 | **40** | exceeds |
| Exercises | ~25/unit | **38/unit, 1,520 in all** | exceeds |
| Grammar points | ~60 [likely] | **84** | exceeds |
| Lexical items | ~1,300 [likely] | **~1,600, each with a 10-encounter schedule and an Arabic gloss** | exceeds |
| Unit shape | Starter → presentation → Grammar Spot → practice → vocabulary → skills → Everyday English | 9 parts, W1–8E | parity, different arrangement |
| Everyday English | one slot per unit | Part 7 + the Phrase File | parity |
| Grammar Reference | back matter | Grammar File, one entry per unit, held to eight terms | exceeds |
| Word list | back matter | Word File: word, unit of first appearance, gloss, cross-level | exceeds |
| Audio scripts | back matter | Audio File, complete, to the word, **and checked against the keys** | exceeds |
| Irregular verbs | back matter | yes, ~60 | parity |
| Phonetic symbols | back matter | sound-symbol table + 40 taught phonology points | exceeds |
| Writing | back-matter pages | Part 6 in every unit, 3 exercises, up to a paragraph | exceeds |
| Reading | graded texts, photographs | up to 130 words + a real document, every unit | parity |
| Images | photographs, every page | 880 drawn, checked figures | **different** — §1.4 |
| Answer key | Teacher's Book | shipped, every exercise, both levels | exceeds |
| Tests | unit tests A/B, Stop-and-Checks, Progress tests, placement | Part 8 in every unit; Loops at Tier 3 | **below** |
| Digital / Teacher's Book / recorded audio | yes | no | **below** |
| Checkable quality | publisher process, not inspectable | ten stages, mutation-tested, re-run on every edit | exceeds |

Four rows below parity, all four component rows rather than content rows, and
the same four as A1. I would rather say so here than in the morning.

---

## 6. Run order

| Phase | What happens | Ends when |
|---|---|---|
| **P0** | decisions §12 answered; old `A2/` deleted; engine promoted to `general-english/engine/` and **A1's ten stages re-run green**; `A2/` tree; `spec/golden.yaml` + `.sha256`; the five ledgers seeded from §2.3, `cast.yaml` carried forward from A1; wordlists u01–u20 drafted and X0a-clean against A1's 687; `manifest.yaml`; `HOUSE-STYLE.md`; the eight new plates built and read as a contact sheet | A1 unchanged; the suite runs green on an empty A2 tree; the manifest enumerates 20 / 760 / 440 / 80 |
| **P1** | **Unit 1, the pilot** — unit, key, 22 figures, 4 scripts. Gated, then *read* by me as a rendered page. All thirty-five mutations run; every check proven able to fail. | unit 1 green, mutations 100%, and I have read the PDF |
| **P2** | Units 2–10, one commit per unit, every stage re-run on every earlier unit after each | 10 units green, 45 pairs green |
| **P3** | A2.1 assembly: back matter to date, covers, documents, `check_doc` | A2.1 builds, D0–D9 green |
| **P4** | Units 11–20, same loop | 20 units green, 190 pairs + 400 cross-level pairs green |
| **P5** | A2.2 and the whole-book assembly: back matter complete, covers, Student Book + Answer Key, DOCX + PDF | release complete |
| **P6** | The drift sweep, the cross-level sweep, manifest coverage, mutation re-run, the morning report | all green, or parked and reported |

**Commit policy.** One commit per unit, `A2 unit NN: <title>`, body naming the
checks that ran and their counts. A red unit is committed as `WIP` with the
failure in the message, never as done. **No pull request** unless you ask.

**Continuity across compaction.** `A2/RESUME.md` (the narrative log) and
`A2/state.json` (units done, checks passed, parked items, next action) are
updated after every unit. This is how A1's twenty units survived being built
across many context windows.

---

## 7. What I do that the checks cannot

Every green gate in this repository that later turned out wrong was wrong
because nobody looked at the page. A1's body-part diagram put the stomach
marker on an arm and passed every check; its rank-three plate printed a value
below the card's own bottom edge and passed every check; three of its five
late units had one figure in Part 8 and only a count caught it.

So at four points — after unit 1, unit 5, unit 10 and unit 20 — I read the
rendered PDF as a learner would and write what I find into
`A2/ADJUDICATION.md`. Anything mechanisable becomes a check; anything not
becomes a ledger entry. **Every new plate is rendered and looked at before a
unit is allowed to use it.**

---

## 8. Honest risks

1. **A2 is more words than A1 and the writing is the slow part.** Ceilings
   rise by a third; twenty units is the aggressive case in one run. The cut
   list in §10 says what gives, in order, and the report says where it stopped.
2. **The engine move could cost a day if it goes wrong.** Mitigated by making
   A1's suite the acceptance test and by the fork fallback in §0.3. If the move
   is not green within one attempt, A2 forks and the series keeps two copies —
   worse architecture, same book.
3. **Present perfect is the hardest thing in A2 and a diagram can mislead.**
   Four units turn on it (11–14). The `timeline` plate is the single highest-
   risk new plate and gets its own adjudication pass at unit 11.
4. **American Headway Level 2 straddles A2 and B1.** The syllabus deliberately
   stops short of B1, which means the top of A2 will feel less ambitious than
   Level 2's later units. That is correct for the level and will look like a
   gap if the two are laid side by side.
5. **No recorded audio means the listening is untested in the only way that
   matters** — the scripts are checked for length, speed, answer-fidelity and
   speaker count; nobody has heard them.
6. **Cross-level checks are new and could be noisy.** X0c compares 400 pairs
   of exercises for shared content. If it reports widely on its first run, it
   is wrong and gets fixed before it is trusted — the same treatment the
   SUPPLY/LOOKUP classifier got in A1 after it produced 61 false reports.

---

## 9. Hard stops and the parking policy

**The run stops and waits for you** only for these:

- A ceiling in `spec/golden.yaml` would have to be loosened for a unit to pass.
- A check would have to be deleted, disabled or narrowed to get green.
- A ledger entry would have to be altered or removed.
- The manifest would have to shrink.
- **A1 would have to change for A2 to work.**

**Everything else parks.** Three failed attempts at the same exercise or
figure → an entry in `A2/PARKED.md` naming the unit, the label, the check and
what I tried; the unit continues without it; the manifest records it
outstanding so release stays blocked and the report lists it first. A parked
item is never silently dropped and never counted as done.

**Never, under any circumstance:** lower a ceiling to pass; delete or weaken a
check; type a key separately from its item; edit a ledger entry in place; ship
with manifest coverage below 1.00 and call it finished.

---

## 10. The cut list, in order

Units and their checks are **never** on this list.

| Tier | Cut | Cost |
|---|---|---|
| 1 | The Workbook | practice volume; the Student Book is unaffected |
| 2 | The full Arabic edition | glosses remain; the parallel edition goes |
| 3 | The four Loops | review spreads; Part 8 still reviews in every unit |
| 4 | The Picture File as separate back matter | captions and alt text stay in the units |
| 5 | **A2.2 ships as units 11–16 rather than 11–20** | last resort; the report says so in its first line and the manifest records four units outstanding |

Covers have come off the cut list: in A1 they were Tier 3 because they had to
be invented. The engine exists now and all four cost an afternoon.

---

## 11. The morning report

`A2/REPORT.md`, written by `runall.py`, and the same thing as my last message:

1. **One line: what you have** — units, exercises, figures, documents,
   manifest coverage as a fraction.
2. **Anything not done**, named — parked items, cut tiers reached, units
   outstanding.
3. **The check table** — every stage, passes run and passed, mutation
   coverage, drift results, **and A1's ten stages confirming it did not move.**
4. **The parity ledger** from §5 with the verdict column filled from what was
   actually built.
5. **What I found by reading** — the four adjudication passes, verbatim.
6. **The decisions waiting for you.**
7. **Where the files are**, as paths you can open.

---

## 12. The decisions I need from you

Three, and the run starts when they are answered. Everything else in this
document I will decide and record.

| | Decision | My recommendation |
|---|---|---|
| **1** | **The old A2.** Delete `docs/general-english/A2/` and rebuild, or keep it beside the new build? | **Delete.** It is reversible from git forever, nothing imports from it, and keeping two A2s on one shelf is how a reader ends up with the wrong one. |
| **2** | **The engine.** Promote the shared code to `general-english/engine/` for both levels, or fork a copy into `A2/tools/`? | **Promote**, with A1's ten stages as the acceptance test and the fork as the fallback if it is not green on the first attempt. |
| **3** | **The shell.** Keep the nine sections and 38 exercises, or grow the shell for A2 (a tenth part — *At Work*, or *Extended Reading*)? | **Keep.** §2.1. The level belongs in the ceilings and the tasks, not the furniture — and the A1→A2 rung of the ladder only means something if both sides have the same shape. |

If you answer only decision 1, I will take my recommendations on 2 and 3 and
record them in `RESUME.md` as decided-by-default.

---

## 13. Sources this plan rests on

**American Headway.** Level 1 third-edition Teacher's Book contents, read
from three third-party copies in agreement, for the unit-by-unit grammar
sequence; Level 2 third-edition Teacher's Book contents for units 1–5; the OUP catalogue for
the level/CEFR mapping; `english-a1/PLAN.md` §1 for the Starter research,
carried forward with its confidence marks intact.

**This repository.** `A1/00-RUN-PLAN.md` (this plan's parent);
`A1/RESUME.md` runs 1–7 (every defect quoted in §3.3 is from its log);
`A1/HOUSE-STYLE.md` (the no-floors correction); `A1/VISUAL-SYSTEM.md` (what
went wrong with the old A2 and the research that replaced it);
`A1/spec/golden.yaml` (the ceiling pattern); `B1/tools/gate.py` (the sentence
that ends the argument about floors); `A2/00-MASTER-PLAN.md` (the architecture
being replaced, and its 230 checks, which were real but asked the wrong
questions).
