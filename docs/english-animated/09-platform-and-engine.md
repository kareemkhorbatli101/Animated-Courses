# 09 · Platform and Engine Integration

English Animated is not a book with a website. It is a book and a rendered animated course built
from one source, on the engine already in this repository.

---

## 1 · What already exists here

| Asset | State | Relevance |
|---|---|---|
| `scene/2` schema — sets, lighting rig, explicit camera shots, actors with `moves`/`looks`/`clips`/`mouth` viseme envelopes | Working, shipping | Renders the Dialogue Stage videos |
| `course/1` schema — multi-language titles, speech tracks, subtitle tracks, per-video defaults | Working | The catalogue layer for 14 new books |
| Content-addressed `lib/` (647 files, mp3 + json) | Working | Audio and scene data delivery |
| Published sets: `workshop`, `furniture_office`; registered-but-unused: `classroom`, `horseshoe`, `oilfield`, `restaurant` | Mixed (`RESIDUALS.md` J.2–J.3) | Two of the six are directly reusable; four need naming |
| Byte-identical browser/MP4 render gate | Working | Print-and-screen parity guarantee |
| `catalogueVariants: ["en","ar"]` | Working | The localisation layer of `01` §7 already has a home |

**The engine is the differentiator.** No competing series can render its listening texts as staged
3D scenes with lip-synced actors in a set the learner has already explored on the opening spread.

---

## 2 · Repository layout for the new series

```
courses/
  ea-a11/                     English Animated A1.1
    course.json               course/1 — titles, descriptions, 20 videos
    u01-dialogue/             the Part 2 listening, staged
      scene.json              scene/2
      manifest.json
      audio/
    u01-doc/                  the 90-120 s documentary short
    u02-dialogue/  …
docs/english-animated/        this plan
content/english-animated/     the single source of truth (below)
  a11/
    unit01.yaml               the unit, authored once
    figures/
      fig_a11_u01_p00_v01/
        source.svg            layered, per 07 §6.2
        _states.json          reveal order, hotspots, morph pairs
        alt.txt
```

---

## 3 · One source, five outputs

Every unit is authored once, in a structured file, and compiled:

```
content/english-animated/a11/unit01.yaml
        │
        ├─► print/PDF         Student's Book spread (figures at frame 1)
        ├─► Workbook          second-exposure practice, generated shell + authored items
        ├─► Teacher's Edition interleaved, with timings, staging and anticipated errors
        ├─► scene.json        Dialogue Stage + Documentary, rendered by the engine
        └─► platform course   interactive tasks, hotspots, recordings, Live Panel slot
```

The compile is the enforcement point for the gates in `03-grading-spine.md` §9 and
`02-unit-architecture.md` §7: a unit that violates a gate fails the build, exactly as the existing
render gate holds browser and MP4 to byte-identical agreement.

### Unit source schema (abbreviated)

```yaml
book: a11
unit: 1
domain: D1
question: "Who is in this room?"
outcome: "Introduce yourself and one other person to a group."
lines:
  world:       "Who the people around you are, and how they say so"
  system:      "be · subject pronouns · countries and nationalities · numbers"
  performance: "A 60-second introduction of yourself and a partner"
language:
  g1: {id: be-present, new: true,  parts: [3, 6]}
  g2: null                                   # A1.1 U1 has no returning target
  l1: {id: a11-names-countries, items: 22}
  l2: {id: a11-numbers-0-100,   items: 13}
  pron: {focus: word-stress, contrast: ["/ɪ/", "/iː/"]}
parts:
  - n: 0
    type: big-picture
    line: A
    figure: fig_a11_u01_p00_v01
    tasks: [{type: V1, items: 14}, {type: R1, items: 3}, {type: P1, record: true}]
  …
recycle:
  from_this_book: []                         # unit 1 has none
  from_previous_book: []
gates:
  active_items: 35
  eval_create_tasks: 2
  max_parts_per_language_point: 4
```

---

## 4 · The platform layer

| Feature | What it does |
|---|---|
| **Figure hotspots** | Tap any V1/V2/V5/V8 region: label, gloss, audio, example sentence |
| **Reveal playback** | V2/V9/V12 animate under narration, learner-controlled |
| **Record & replay** | The Part 0 / Part 12 comparison, stored in the portfolio |
| **Decoding clinic player** | 30–60 s loop with four task overlays and variable speed (0.75× / 1× / 1.25×) |
| **Transcript gate** | Transcripts unlock only after the task is submitted. This enforces the page-level rule in software |
| **Live Panel** | The quarterly-refreshed current example per unit (`05-topic-matrix.md` §4) |
| **Adaptive recycling queue** | Spaced retrieval of active items, scheduled from the lexical database, surfaced as 5-minute daily sets |
| **Portfolio** | Three anchors per book, all drafts retained, exportable |
| **Teacher analytics** | Per `08-assessment.md` §9 |
| **Offline** | The existing service worker (`sw.js`) already supports offline play; extended to task state |

---

## 5 · Sets required

Twelve new 3D sets cover all 14 books, each authored once and reused across the shelf:

**street · train carriage · market · newsroom · hospital ward · port/quayside · lecture theatre ·
open-plan office · kitchen · research station · hearing room · studio**

Plus the repository's existing `classroom` and `restaurant`, which English Animated puts to use for
the first time (`RESIDUALS.md` §J.3 notes they are built but unused — A1.1 and A2.1 need both).

**Every new set ships with a registered builder and a named object manifest on day one.**
`RESIDUALS.md` §J.2 records what happens otherwise: `furniture_office` has no builder, cannot be
named, and object-level questions must therefore degrade for `efd/unit01`. Hotspot and BUILD
animation states depend on named objects; **a set that cannot be named cannot carry a task**, and a
figure that cannot carry a task is banned by `07-visual-system.md` Law 1.

---

## 6 · Engine work required before authoring starts

| # | Item | Why |
|---|---|---|
| 1 | Twelve set builders + object manifests | §5; blocks all hotspot tasks |
| 2 | `_states.json` → scene compiler | Turns a layered figure into a REVEAL/TRAVERSE sequence |
| 3 | Bundle asset sweep | `RESIDUALS.md` §J.1 — stale cache-keyed copies accumulate; 14 books will multiply this |
| 4 | Colour convention correction | `RESIDUALS.md` §J.4 — stored values are one gamma step from authored; object colour naming is wrong until fixed, and English Animated teaches colour lexis at A1.1 |
| 5 | Task-state persistence in `sw.js` | Offline task completion and recording |
| 6 | Gate runner in the compile | Enforces `03` §9 and `02` §7 at build time |

Items 1, 2, 4 and 6 are **blocking** for the first pilot book. Items 3 and 5 can follow.
