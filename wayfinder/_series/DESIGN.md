# Wayfinder English — Design System

One visual system for 78 units, six levels, two themes and two language editions. Every value here
is a token. Nothing in a unit file names a raw color.

---

## 1. Level identity

Six accents, one per book. **Every value below was validated with the project's palette validator in
both themes — all six checks pass on the adjacent pairlist (the shelf-neighbor case) in light and in
dark.** The hues deliberately interleave warm and cool rather than running a warm-to-cool gradient:
a gradient put red-orange next to amber, which collide for deuteranopic readers (ΔE 1.9, a hard
fail). Interleaving lifts the worst adjacent pair to ΔE 16.1.

| Level | Hue | Light | Dark | Glyph |
|---|---|---|---|---|
| **Starter** | red-orange | `#c9452c` | `#e06243` | ● one dot |
| **1** | teal | `#0b96a4` | `#17a8b5` | ●● two dots |
| **2** | amber | `#ab7200` | `#b88210` | ●●● three dots |
| **3** | blue | `#1e6ac9` | `#2e7ddd` | ◆ one diamond |
| **4** | green | `#3d7a14` | `#5f9e24` | ◆◆ two diamonds |
| **5** | purple | `#9739ae` | `#b15ac9` | ◆◆◆ three diamonds |

**Color never carries level identity alone.** No six-hue set can clear the all-pairs CVD floor —
compared across the whole set rather than between neighbors, Starter's red and Level 4's green sit at
ΔE 6.4 for a protanopic reader. That is not a palette we can fix; it is a property of six hues. So
every spine, cover, running head and page footer carries the level **name and numeral in large type**
plus the glyph above. The color is the fast cue. The text is the true one.

Level 3's blue is deliberately *not* the data palette's series-1 blue (`#2a78d6`), so a chart on a
Level 3 page never reads as page furniture. Reinforced by a hard rule: **the level accent is withdrawn
from the interior of any chart.** Brand accent lives in chrome — headers, rules, tabs, spine. Series
color lives in marks. They never trade places.

---

## 2. Neutral spine (shared by all six levels)

| Token | Light | Dark |
|---|---|---|
| `--surface-1` (page) | `#fcfcfb` | `#1a1a19` |
| `--surface-2` (card) | `#f5f5f3` | `#232322` |
| `--surface-3` (sunken, input) | `#ebebe8` | `#2d2d2b` |
| `--text-primary` | `#0b0b0b` | `#f0efec` |
| `--text-secondary` | `#52514e` | `#c3c2b7` |
| `--text-muted` | `#76746e` | `#8f8d84` |
| `--rule` | `#dcdbd6` | `#383835` |
| `--rule-strong` | `#b9b7b0` | `#4e4e4a` |

Theme is declared three times — a media query for the OS setting, and a `data-theme` scope that wins
both ways — so the learner's toggle beats the OS and a light stamp beats OS-dark. Dark is **selected**,
never an automatic inversion: every dark value above was chosen against the dark surface.

---

## 3. Data graphics

**The series adopts the project's validated reference categorical palette unchanged.** This is a
deliberate refusal to invent one: the reference set is already validated across both themes, and a
hand-rolled ELT palette would be a worse palette with more work.

| Slot | Hue | Light | Dark |
|---|---|---|---|
| 1 | blue | `#2a78d6` | `#3987e5` |
| 2 | orange | `#eb6834` | `#d95926` |
| 3 | aqua | `#1baf7a` | `#199e70` |
| 4 | yellow | `#eda100` | `#c98500` |
| 5 | magenta | `#e87ba4` | `#d55181` |
| 6 | green | `#008300` | `#0ca30c` |

Sequential encoding uses the single blue ramp, light to dark. Diverging uses two poles and a **neutral
gray midpoint**, never a hue at the middle.

### 3.1 Rules for every chart in the series

1. **Pick the form from the data's job**, not from variety. A single number is a stat tile, not a
   chart. We are teaching learners to read data; a chart that misrepresents its data teaches the
   wrong lesson twice.
2. **Series cap of three** on scatter, bubble and small-multiple forms, where any two marks may be
   compared. Past three, fold the remainder into "Other" or facet. On bars, stacks and lines the full
   six are available because only neighbors are compared.
3. **Never two y-axes.** Two measures of different scale become two charts or are indexed to a common
   base.
4. **Color follows the entity, never its rank.** A filter that drops a series does not repaint the
   survivors.
5. **A legend is always present for two or more series**, and four or fewer are also directly
   labeled, so identity is never color-alone.
6. **Text wears text tokens**, never the series color.
7. **Thin marks, recessive grid.** 2px lines, markers at 8px or more, 4px rounded data-ends anchored
   to the baseline, a 2px surface gap between adjacent fills.
8. **Every chart has a table view.** For a course this is not a nicety: the table is often the
   comprehension exercise, and it is the accessibility path.
9. **Status colors are reserved** for good/warning/serious/critical and ship with an icon and a label.
   They are never "series 7".
10. **Numbers in a chart are the numbers in the text.** A learner who adds up the bars gets the total
    the article states. Checked by hand, every time.

---

## 4. Typography

| Role | Size / line | Weight | Notes |
|---|---|---|---|
| Unit title | 34/40 | 700 | Level accent |
| Lesson title | 26/32 | 700 | |
| Section head (1A, 2B) | 17/24 | 700 | Numeral in the accent, text in primary ink |
| Rubric | 16/24 | 600 | Imperative, 4–10 words |
| Body / item text | 16/26 | 400 | |
| Model text (*Real Lives*, articles) | 17/28 | 400 | Longer measure, max 66 characters |
| Realia body | 13–15/20 | 400 | Set in the document's own voice, not the book's |
| Box label (*Writer's Tip*) | 12/16 | 700, tracked | Uppercase |
| Gloss / footnote | 13/20 | 400 | |
| Audio track id | 12/16 | 600, tabular | |

Minimum body size anywhere in the series is 13px, and 16px for anything a learner reads at length.
Line length is capped at 66 characters for continuous prose — a learner decoding a second language
cannot afford a long return sweep.

Numerals are tabular wherever they align in a column: timetables, payslips, prices, scores.

---

## 5. Illustration system

- **One illustration grammar series-wide:** flat fills; a single structural line weight with a
  lighter detail weight; no gradients except a two-stop ambient wash; geometric character
  construction with a fixed head-to-body ratio per age band.
- **Characters are built once and reused.** A turnaround and expression sheet per named character per
  band (§2 of the Bible). This is what makes ~2,400 assets tractable and what makes the books feel
  authored rather than assembled.
- **Every asset exists in both themes**, defined in tokens rather than duplicated by hand.
- **Meaning never rides on color alone.** Every encoded distinction also carries a shape, a label or
  a position. Checked against WCAG AA contrast in both themes.
- **Every image carries authored alt text written as a teaching sentence**, not a caption — a learner
  using a screen reader is doing the same exercise, not a reduced one.
- **Realia is designed, not photographed.** Real layout, invented data: invented names, addresses and
  companies, and numbers that add up. Each document is typeset so the reading skill the slot teaches —
  finding a total, a date, a condition — is genuinely exercised by the layout rather than by a
  caption pointing at it.

### 5.1 Diagram taxonomy

A unit's diagram is chosen from this fixed set according to what the content *is*. A diagram that
matches none of these is decoration and does not ship.

| Type | Use it for | Must have |
|---|---|---|
| **Process** | ordered steps with one entry and one exit | numbered steps, a visible start and end |
| **Pathway** | branching routes with conditions | the condition written *on* the branch |
| **Cycle** | a loop whose repetition is the point | no false start node |
| **Comparison matrix** | 2–3 options against 3–4 criteria | criteria as rows, options as columns, one cell one fact |
| **Timeline** | tense contrast, life events, sequence | a now-marker when tense is the teaching point |
| **Part–whole** | count/noncount, budgets, composition | parts summing to the stated whole |
| **Ranked bar** | survey and poll data the class generates | sorted by value, not alphabetically |

The **timeline with a now-marker** is the series' workhorse: it is how Starter U9 shows present
continuous, how Level 2 U11 shows past continuous against simple past, and how Level 5 U1 shows
narrative tenses. One diagram type, re-earned at five levels.

---

## 6. Component inventory

Exercise shells, built once: `circle-the-words` · `gap-fill` · `match-to-picture` ·
`drag-to-category` · `mcq-bubble` · `true-false-ng` · `chart-sort` · `dialogue-frame` ·
`role-card-pair` · `checklist` · `self-assessment` · `survey-grid` · `audio-player` ·
`read-along` · `pronunciation-pair` · `writing-frame` · `editing-checklist` · `peer-review` ·
`realia-frame` · `data-figure` · `diagram-frame` · `phrase-bank` · `progress-log`.

Every shell takes its content from the unit's data file and knows nothing about the unit. Rubric,
items, keys and audio ids are data. This is what lets one unit be rendered to print, to the web
player, or to another platform without re-authoring, and what makes the gates in §8 of the plan
machinable.

---

## 7. Accessibility floor

Not a feature. A floor, checked per unit.

- Contrast AA for all text in both themes; 3:1 for all non-text indicators.
- Every image, diagram and realia asset has authored alt text; every chart has a table view.
- Every audio slot has a full transcript in the unit's `AUDIO` file, reachable from the page.
- Nothing is conveyed by color alone, anywhere.
- Every interactive shell is keyboard-operable with a visible focus ring, and hit targets are at
  least 44px.
- Text reflows to phone width with a 16px gutter and no horizontal scroll.
- Motion respects `prefers-reduced-motion`; no animation is required to complete a task.
