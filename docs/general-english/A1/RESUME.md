# A1 — running log

## 2026-10-11 · New visual machinery, and Unit 1 built

The A2 figures were rejected on sight, and the diagnosis is in
`VISUAL-SYSTEM.md` §1: sixteen of twenty "figures" were a card containing
prose, and the whole cast was one grey pill repeated under four names. The
269-check suite passed all of it, because it measured whether a figure was
correctly *produced*, never whether it was a *picture*.

Built this session:

- `tools/draw.py` — canvas, 55 colours, shaded solids, real font measurement,
  WCAG contrast, label collision
- `tools/people.py` — the character rig: 12 poses, 11 hairstyles, 6 skin
  tones, 8 garments, 5 expressions
- `tools/cast.py` — the eight people of Hill Road
- `tools/world.py` — shopfronts, counters, doorways, buses, 16 props, speech
- `tools/plates.py` — 22 figure types in five classes
- `tools/gate.py` — G1–G21, ceilings only, reading `spec/golden.yaml`
- `tools/check_visual.py` — V1–V7 and F1–F8
- `tools/build_unit.py` — DOCX and PDF with figures placed
- `spec/golden.yaml`, `spec/reference.docx`
- `units/a11-u01.md`, `keys/a11-u01-key.md`, `content/a11/u01_figures.py`
- `build/EFDL-A1.1-Unit01-Hello.{docx,pdf}` — 15 pages

Unit 1: 38 exercises, 22 figures, 1,012 words. Gate 21/21. Visual 15/15.

### Things that bit, so they do not bite twice

- **Pose joints must be signed per limb.** The first version multiplied by a
  sign at draw time and put eight characters' arms inside their own torsos.
- **Hair is two layers.** All-hair-last covered two characters' faces
  completely. `_hair_back` before the head, `_hair_front` after the face.
- **A person behind a counter must be drawn before the counter.** Nadia
  stood on top of it for the first three renders.
- **Speech tails must be clamped.** An unclamped tail to a distant mouth
  reads as a spear across the picture.
- **Inter has no IPA block.** `/eɪ/` silently became a tofu box. `draw.text`
  now routes anything above U+0250 to DejaVu. Unit 1 avoids IPA anyway —
  the alphabet is grouped under *ay, ee, e, eye, oh, you, ar*, which an A1
  learner can actually read.
- **A run of underscores is a markdown thematic break.** Inside a list item
  it eats the number and prints a black rule. `build_unit.py` escapes them.
- **The docx font lives in `word/theme/theme1.xml`,** not `styles.xml`.
  Patching styles.xml alone changes nothing.
- **A floor crept into HOUSE-STYLE.md in the first hour** — "2,400–3,600
  words". Unit 1 came in at 1,012 and is better for it. Removed. This is the
  mistake B1 paid three rejected drafts to learn, and I still made it.

### What the checks did not catch

Figure 14's bubble says *"Hello, Nadia. This is Omar"* and the first build
did not contain Omar. Every automated check passed. Found by looking at the
picture. This is the argument for the adjudication passes.


## 2026-10-11 (later) · Unit 2 built, and a third layer of checks

`units/a11-u02.md` — **In the Class**. 38 exercises, 22 figures, 1,058 words,
15 pages. Questions and short answers with *be*, the short negatives, *a/an*
by sound, *this/that*, classroom things, eleven to twenty.

Fatima teaches the evening class. She is the nurse from Unit 1, which is how
a small cast earns its keep: the learner already knows her, so the only new
thing on the page is the language.

New in the engine: thirteen props (pencil, notebook, ruler, rubber, bottle,
chair, desk, board, window, door, apple, orange, umbrella), a classroom, and
four plates — `object_cards`, `sort_two`, `doors`, `notice`,
`classroom_scene`.

`tools/cross.py` is new: X1 lexical, X3 duplication, X5 the ladder, run for
unit *u* against every earlier unit *p*. Unit 2 runs them once; unit 20 will
run them nineteen times.

Results: gate 21/21 on both units, visual 15/15 on both (616 figure passes),
cross-unit 8/8.

### Things that bit

- **Seated figures float.** `draw_person` treats `ybase` as the ground, and a
  seated figure's legs stop at the hip plus a lap. The seat height has to be
  solved backwards: `hip = ybase - 0.48H`, and the hip goes just below the
  desk top. Two versions had students hovering over the furniture.
- **I joined the file again.** `cross.py`'s first seven-gram check ran over
  the whole unit and reported three collisions, every one of them the tail of
  one rubric welded to the head of the next. *"a listen look at figure write
  the"* is not a phrase anybody wrote. This is the third time this exact
  mistake has been made in this repository — SAT Book 3 invented a typo the
  same way, and B1's gate produced nine false positives the same way.
  **Measure the pieces, never the pieces joined.**
- **Rubric repetition is not duplication.** Two units of one course are
  supposed to share their instructions. The n-gram check now reads content
  only — items, texts, word boxes — and rubric repetition has its own check
  with its own threshold (X3b, at most six).
- Once those two were fixed the check found something real: `Name: Lili Chen`
  was the seeded example in **both** units' 6A. Unit 2's is now Omar Haddad.

### What the checks did not catch, again

Figure 2.6 printed the job under each person, and exercise 1E asked the
learner to match the person to the job — answerable by copying the picture.
Unit 1's Figure 1.3 had the same fault. Every automated check passed both.
Found by reading the rendered page.

Unit 1's figure now carries **names**, so the job has to be read off the
depiction: the apron and tray, the tunic and badge, the uniform and
timetable, the book. Unit 2's keeps its job labels, because its declared job
is to supply those words — so exercise 1E changed instead, to match the job
to the place, which needs the figure for the jobs and Unit 1 for the places.

**Two units, two no-guess violations, both found by eye and neither by
machine.** A check for this is the next thing the toolchain needs.

## 2026-10-11 (later still) · Seated figures, and a drift tool

A reader looked at Figure 2.1 and said the sitting children had malformed
legs and misplaced bottoms. Both true, and both the same cause.

`draw_person` had a special case for the seated pose that ran the shin
straight down from the hip and then kicked the foot forward. That is a
**kneel**, not a sit. And nothing tied the hip to the chair, so the figure
hovered wherever the caller had guessed.

The fix is geometry, not nudging. A seated figure facing the reader is a
standing figure from the knee down: the hip rests on the seat and the leg
below it is short — **0.285H to the foot, against 0.452H standing** — with
the thigh foreshortened to nothing because the figure faces us, and the desk
hiding where it would be. So `sit` is now an ordinary entry in `POSES` with
ordinary leg offsets, the special case is deleted, and there is one leg path
for every pose in the engine.

The placement is then solved from the floor up rather than guessed:

    foot   = ybase - 0.195H        (0.52H to the hip, 0.285H of leg)
    ybase  = floor + 0.195H        feet on the floor
    hip    = floor - 0.285H        where the chair seat goes
    desk   = hip - 0.177H          28cm above a 45cm seat

`draw_person` now returns `foot_y` so no caller has to re-derive it.

### Two more defects found by eye in the same pass

- **Omar had a beard in every figure he appeared in.** The afro mass was
  drawn as a full ring of circles, and the bottom ones sat under his jaw.
  The ring now skips 48°–132° and the mass stops above the chin.
- **A notebook standing upright at chest height** is not a notebook on a
  desk. Removed.
- **`sixteenseventeeneighteen`.** `numbers()` drew its word with `text`, not
  `fit`, and *seventeen* at 26px is as wide as its cell. Ten of them printed
  as one run. Now fitted to the cell.

### tools/drift.py

New, and the reason the fix can be called complete rather than claimed
complete. It re-renders every figure of every unit from the current code and
diffs it byte-for-byte against the SVG on disk: `same`, `CHANGED`, or
`MISSING` (a figure with no file, or a file with no module entry).

Run after any edit to the **engine**, not just to a unit. A change to
`people.py` reaches every figure in the course that contains a person, and
rendering them all is the only way to know which moved.

It immediately earned its place. The seated-pose and afro fixes reported:

    CHANGED  u01 fig 10  Four voices
    CHANGED  u01 fig 14  Marek introduces Omar
    CHANGED  u02 fig  1  The evening class
    CHANGED  u02 fig 10  Four people in the class
    CHANGED  u02 fig 13  Asking in the class
    39 unchanged, 5 changed, 0 missing

Exactly the blast radius: every figure containing Omar, plus the two
classroom scenes. **Unit 1 was affected**, which a reader looking only at
Unit 2 would not have known — the afro reached two of its figures. Without
the tool I would have fixed Unit 2 and shipped a course with two Omars.

Final state: drift 44/44 byte-identical, 0 missing · gate 21/21 on both
units · visual 15/15 on both, 616 figure passes · cross-unit 8/8 · both
books rebuilt in DOCX and PDF.

## 2026-10-11 (third pass) · The sitting figures, properly

The second attempt was rejected too, and correctly: *"but now the children
aren't sitting."* They weren't. I had shortened the leg and left it
**vertical**, under a see-through table. A short vertical leg under an open
table is a short person standing behind it. Nothing in the picture said
sitting.

The reasoning that produced it — *"a seated figure facing the reader is a
standing figure from the knee down"* — is wrong. It is true of the
proportions and false of the reading, and a figure that measures correctly
and reads wrongly is wrong.

**Three cues say sitting.** Not one of them is proportion.

1. **The bend.** A thigh going forward to the knee and a shin dropping from
   it. An L, not a line. `sit` now carries that bend; `sit_l` mirrors it for
   a figure facing the other way.
2. **A chair you can see.** `world.chair_back()` draws a back behind the
   shoulders and a seat edge under the hips. Thin chair legs peeping out
   beside a body do not do it.
3. **Hands on the desk.** The new `at_desk` pose rests the forearms on the
   surface. The hand has to sit *above* the desk's top edge, since the desk
   is drawn after the person — a hand three pixels below the edge is a hand
   that does not exist.

And one thing that stops it reading: **a desk that hides the sitter.** The
first fix gave the desk a modesty panel to the floor, which boxed the
students in so completely that only their heads showed. The panel is now
shallow. The desk's job is to be a desk, not to hide the problem.

### Drift, twice

First sweep after the pose change: 5 changed, all expected. Second sweep
after the shoe-direction fix: **9 changed**, because the toe now points the
way the foot is going, and that touches every figure in the course
containing a person. Both sweeps named the files; both were checked by eye
before re-rendering; standing figures were compared before and after and are
unchanged but for a two-pixel shoe.

That is the whole argument for the tool. "I fixed the classroom" was true
and incomplete twice over.

Final: drift 44/44 byte-identical, 0 missing · gate 21/21 both units ·
visual 15/15 both, 616 figure passes · cross-unit 8/8 · both books rebuilt
in both formats.

## 2026-10-11 (fourth pass) · Units 3 to 10, and EFDL A1.1 as a volume

Volume one is complete. **Ten units, 380 exercises, 220 figures**, a
151-page Student Book and a 21-page Answer Key, both in DOCX and PDF.

The syllabus follows American Headway Starter's sequence — be, then
possessives and family, then there is/are, then the present simple split
across two units, then food, the town, can, and the past of be — rearranged
so every unit stands on Hill Road and uses the cast the learner already
knows. `spec/syllabus-a11.md` is the table.

New in the engine: 18 props, 7 plates (`family_tree`, `room_plan`, `clocks`,
`menu`, `town_map`, `tick_grid`, `then_now`), and `Canvas.clip()`.

### What the checks caught that I would not have

- **A caption ending in `?` breaks the caption pattern**, which wants
  `· text.` — so `Where is it?` silently cost two figures their captions in
  Unit 4. Six captions across four units had it. Fixed before those units'
  text was written, which is the only reason it cost minutes.
- **Nine words were taught as new twice.** A sweep over all ten wordlists
  found more than the pairwise check reported, because a word can be new in
  u04 and again in u08 without either being adjacent.
- **Three inline MCQ options eat six of the twelve-word item budget.** Four
  items broke the ceiling the moment I lengthened a stem.
- **An unanswerable item.** Unit 8's W1 asked "A doctor works here" against a
  map with no clinic on it. The gate passed it; reading the page did not.

### Two checks that were wrong, and were changed

- **X1b demanded that every unit recycle ten words of EVERY earlier unit.**
  No coursebook does that, and the spacing research does not ask for it:
  encounters cluster after a word is introduced and thin out. The bar now
  falls with the gap — 8 at one unit, 6 at two, 4 at three, 2 beyond — and
  the message says which bar it was held to. The failures that survived were
  real, and fixing them meant weaving earlier vocabulary into later units,
  which is the point.
- **X5a's tolerance was a quarter of a word.** Item length is a crude proxy
  for difficulty, and a unit whose grammar needs short items — *They ______
  at the park.* — is not a regression. Tightening the content to satisfy it
  would be padding sentences to hit a metric, which is the floors mistake
  again. The tolerance is 0.6 now: enough to catch a unit that is markedly
  easier, not enough to catch noise.

### Final state

drift 220/220 byte-identical, 0 missing · gate 210/210 over ten units ·
visual 150/150, 3,080 figure passes · cross-unit **360/360 over all 45
pairs** · Student Book and Answer Key built in both formats.

## 2026-10-11 (fifth pass) · Tiers 1 and 2 of the check recommendation

Seven checks built before starting A1.2, on the argument that a fault found
in ten units is cheaper than the same fault found in twenty.

### tools/mutate.py + tools/mutations.py

The thing the run plan promised at Unit 2 and I never built: *"The run does
not start writing unit 2 until every check has been proven able to fail."*
Thirty mutations, each a deliberate break that one named check must notice.
**30 live, 0 inert, on every one of units 2 to 10.**

It immediately found what it exists to find. **G20, "every figure is
referenced by an exercise", could never fail.** It counted references in the
caption lines too — and every figure has a caption — so the reference set was
always a superset of the figure set. The check had been reporting green for
ten units while testing nothing. Nothing but mutation testing would have
found that.

It also found that six of my first mutations were too weak or aimed at the
wrong unit, which matters just as much: *an inert mutation looks exactly like
an inert check*. The mutations now take the unit number and reach for the
right neighbour, so the suite is not unit-5-specific.

### tools/check_lexis.py — E4, never implemented until now

At A1 an unknown word is a wall. The first run reported 713 words outside
the Word File; nearly all was noise, and the real findings were buried. Three
rounds of making the instrument honest — inflection stripping, a visible
`spec/metalanguage.txt`, a `function.txt` for closed-class words, and
measuring the learner's page rather than the teacher's key — brought it to
**0 across ten units**, via about forty genuine omissions:

- the wordlists **did not contain the grammar words the units teach**: *am*,
  *are*, *and*, *at*, *there*, *was*. Unit 1's grammar point was not in Unit
  1's vocabulary.
- forty content words used in figures and items were never registered.
- **Unit 1's exercise 8A reviewed six objects the unit never taught** — ball,
  cup, phone, book. A review that reviews unteachable words is not a review.
  It is four of Unit 1's own people now.

### tools/check_coupling.py — the no-guess check

Canvas already records every string it draws, so a figure's printed text is
data and can be compared against the key. Two rules, LEAK and GAP, both
reports rather than hard failures, because the judgement at the end is a
reader's.

It found **Unit 10's exercise 1B asking "1 — ?" against a map printing names
and no numbers** — unanswerable, the same class as Unit 8's doctor, and the
first fault of that family caught by a machine rather than an eye.

Getting it there took two corrections worth recording. My SUPPLY and LOOKUP
patterns both matched "write the word", so every supply task fell through to
the lookup rule and 61 reported as unanswerable — *a classifier whose classes
intersect is not a classifier*. And a figure whose declared job is `contrast`
or `lexis` **is** the model: printing the forms is the point of it, the way a
Grammar Spot box prints the pattern. Only a `data` figure can leak.

### tools/check_keys.py — K1 to K7

The keys are hand-written, which breaks this project's own guard, *one source
for item and answer*. Until they are generated, these stand in: every
exercise keyed, answer count matching item count, the key's example matching
the unit's, matching letters that exist with a spare that is genuinely spare,
MCQ answers in range, letter balance, and **caption parity** — the printed
caption and the module's caption are two separate strings and nothing else
compared them.

71 checks, 0 failures, after fixing two keys whose format broke the parser.
K6 needed a minimum sample: six letters cannot test a 45% ceiling, and a
check that reports noise trains you to ignore it. Pooled over the volume,
`a` takes 40% of 75.

### tools/check_doc.py — family K, the artefact

Everything else checks the source. This checks what a learner holds, and it
found a fault that exists only there: **rubrics stranded at the foot of a
page with their figure overleaf**. `build_volume.py` now sets `keepNext` on
every exercise label and every paragraph next to an image, so a rubric, its
picture and its caption travel as one block. 600 paragraphs in the Student
Book, 380 in the Answer Key.

### State

drift 220/220 · gate 210/210 · visual 150/150 · cross 360/360 over 45 pairs ·
lexis 0 outside the Word File · keys 71/71 · document 7/7 · coupling 3 read
and judged sound, 0 gaps · **mutation 30 live, 0 inert**.

## 2026-10-11 (sixth pass) · Units 11 to 15

A1.2 is begun. **Fifteen units, 570 exercises, 330 figures**, a 236-page
Student Book and a 33-page Answer Key.

| | | |
|---|---|---|
| 11 | A Day Out | past simple, regular verbs |
| 12 | Last Year | past simple, irregular · questions with did |
| 13 | Right Now | present continuous, beside the simple |
| 14 | Next Week | going to |
| 15 | Bigger and Better | comparatives |

New in the engine: ten props (clothes, plane, train, boat, passport) and
three plates — `verb_change`, `calendar`, `compare_two`.

### What the new checks earned on their first real use

They were built on the argument that a fault found in ten units is cheaper
than the same fault found in twenty. Writing five more units is the first
test of that, and the answer is clear.

- **`check_lexis` found 56 words outside the Word File in the new units**,
  including `than` — the single most important word in a unit about
  comparatives — missing from Unit 15's own vocabulary. It also caught four
  forward references: `went` used in Unit 11 before Unit 12 teaches it,
  `train` in Unit 12 but registered to Unit 13, `later` and `soon` used two
  units before they are taught, and a deliberate wrong form, `goed`, built
  from a word the course never teaches.
- **`check_keys` held all 106 checks** across fifteen units with no drift
  between a caption in a unit and the caption its figure module declares.
- **`check_coupling` had nothing new to report** beyond one first-exposure
  noticing task (Unit 11 W1, where the past forms are in the speech bubbles
  and the learner transfers them) — judged sound, since the task also
  requires matching the right person to the right verb.
- **`mutate` stayed 30 live, 0 inert** when pointed at Unit 12, so the suite
  is not tuned to the units it was built on.
- **`check_doc` passed on the 236-page volume**, which is the same `keepNext`
  machinery holding at more than twice the page count.

### The engine fault worth recording

`verb_change` picks the changed ending out in amber, and the engine's own
contrast check refused it: **plain amber on deep teal is 2.6:1**. The fix
lightens the colour until it passes — but the first version of that fix was
an unbounded `while contrast < 4.5: lighten`, and it **never returned**,
because `shade()` converges on white asymptotically and integer truncation
stalls it a few points short. A loop that cannot reach its own exit
condition hangs the build. It is bounded now.

### State

drift 330/330 · gate 315/315 · visual 225/225 (4,620 figure passes) ·
cross **840/840 over 105 pairs** · lexis 0 outside the Word File ·
keys 106/106 · document 7/7 · mutation 30 live, 0 inert.

Units 16 to 20 remain.
