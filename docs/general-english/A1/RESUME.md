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
