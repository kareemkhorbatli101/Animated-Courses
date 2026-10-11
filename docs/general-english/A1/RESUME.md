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
