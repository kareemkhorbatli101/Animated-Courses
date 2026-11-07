# CARRY — shipping **CMA Part 1 Book 2** the way Book 1 was shipped

*Written for: the owner, and whoever executes this (likely a later session of me).*
Dated 2026-11-07. This is the **full ship plan**: ten phases from an unparameterised
toolchain to a reachable, gated, committed second book.

It stands on the analysis package beside it (`plan_book2_2026-11-06/`), which established
that Book 2 is the same book in the same house style. This package adds the half that one
did not have: **what shipping Book 1 actually produced**, measured today by
`tools/ship_facts.py` into `evidence/ship_facts.txt`.

Nothing here has been built. Every number below was measured, not recalled.

---

## 1. The target, measured from the thing itself

Book 1 is on disk and finished. That is the specification for Book 2.

| what Book 1 ships | measured |
|---|---|
| files in `cma/book1/` (plan packages excluded) | **686** |
| …total size | **24.6 MB** |
| chapters | **18** |
| chapter pages (`.html`) | **238** |
| chapter data files (`.js`) | **220** |
| `assets/` — shared renderers | **21** |
| `assets/` — per-chapter data files | **70** |
| `assets/figures/` — drawn figures | **104** |
| **graded exercises** | **1,102** |

The 21 shared renderers are the ones Book 2 must either copy or share:

```
answers-view.js  brief.js    figure.js   figures/   grid.js     hub.js
icons.js         ledger.js   lines.js    objects.js objects2.js objects3.js
objects4.js      objects5.js progress.js provenance.js  scene.js
site.css         source-text.js  speech.js  terms-merge.js
```

### A drift found while measuring, worth fixing in passing

`cma/book1/index.html` carries a table of per-chapter counts that **sums to 1,102**, and a
script that sums it at load and writes the total into the page. Two lines below, the prose
reads *"1,078 exercises over 203 pages"*. The literal `1,078` in the HTML is overwritten at
load, so **the live page says 1,102 and the sentence under it says 1,078** — a drift of 24.

This is the small version of the defect this whole plan is built to avoid: **a number typed
once and never re-derived.** Fix it in Phase 8 by deriving the sentence from the same table.

---

## 2. What Book 2 starts with

From `plan_book2_2026-11-06/evidence/`, re-read by `ship_facts.py` rather than retyped:

| | |
|---|---|
| file | `CMA_P1_Book2_volume_v1.0.docx` |
| sha256 | `dbb9d303bf5c1e5fedc82ce3951df8fd515a59c61f23c21946d79a73d886ea17` |
| chapters · sections | 18 · 116 |
| questions, all with the author's explanation | **522** |
| captioned figures (drawn / table) | 256 (106 / 150) |
| table-shaped figures the shipped dispatcher grades | **104 of 164**, zero errors |
| term rows, all with Arabic | 392 |
| case items | 126 |
| Your-turn answer pairs | 43 |

**Book 2 opens at roughly 800 graded exercises before any depth work** — against Book 1's
1,102 *after* a full depth pass. That is the gap Phase 7 exists to close.

---

## 3. The three couplings that make this a project and not a copy

`evidence/ship_facts.txt` §D measures the toolchain as it stands: **9,024 lines across five
tools and five gates**, and this is its relationship to Book 1.

| file | lines | takes `--book`? | `book1` pinned in |
|---|---|---|---|
| `cma_book.py` | 355 | yes — but a **path**, not a number | `BOOK` |
| `cma_terms.py` | 220 | no | `SITE` |
| `cma_scenes.py` | 5,929 | no | `SITE` |
| `cma_index.py` | 97 | no | `SITE` |
| `cma_ledger.py` | 269 | no | `SITE` |
| `cma_provenance.py` | 233 | no | `SITE` |
| `cma_render.py` | 399 | no | `SITE` |
| `cma_interactive.py` | 1,072 | no | `SITE` |
| `cma_depth.py` | 263 | no | — |
| `cma_crosstie.py` | 187 | no | `SITE` |

**The five gates take no arguments at all.** Each pins its own `SITE` to `…/cma/book1`.

On top of that path coupling sit the two couplings the analysis package measured:

1. **37 lines interpolate the chapter number into an id pattern.** Book 2 ids carry an extra
   `2` (`F207-01`, not `F07-01`), so each of those 37 lines matches **zero** — and zero is
   indistinguishable from clean. My first dry run printed `0 figures` for all eighteen
   chapters with no error.
2. **91 rows across 7 tables are keyed by a bare chapter number.** Left alone, Book 1
   chapter 5's row answers for Book 2 chapter 5, silently, in the author's own voice, so
   `cma_provenance` would pass it. The mechanism is `.get(n)` → `{}`: a missing row reads as
   *"nothing to add"*, never as *"wrong book"*.

**16 path couplings + 37 id regexes + 91 keyed rows = 144 places that assume one book.**

---

## 4. The finding that changes the shape of this plan

I checked whether a visitor can reach Book 1, instead of assuming it. `ship_facts.txt` §C:

```
files outside cma/book1 that link to it            : 0
catalogue.json courses (5): eam-b1, eam, efd, tours, alhasan
   'cma' present in catalogue                      : NO
occurrences of 'cma' in index.html                 : 0
occurrences of 'cma' in manifest.json              : 0
occurrences of 'cma' in sw.js                      : 0
cma/index.html (a landing for the course)          : does not exist
```

**Book 1 is published and unreachable.** Nothing on the site links to it, it is in no
catalogue, no manifest, and the service worker does not know it exists. It can be opened
only by typing `cma/book1/index.html`.

So the instruction *"ship Book 2 as we shipped Book 1"* has a trap in it: executed
literally, it produces a **second** unreachable book. Phase 8 therefore is not "add a second
book to the landing page" — it is **"build the landing neither book has"**, and it fixes
Book 1 at the same time. This is the one place where the plan deliberately does *not* copy
what was done before, and the reason is measured rather than aesthetic.

---

## 5. The ten phases

Ordered so that anything able to invalidate later work happens first. Each phase names its
deliverable and the check that is allowed to call it done.

### Phase 0 — the toolchain takes a book number *(blocking)*

1. `BOOK` → `BOOKS = {1: (path, sha256), 2: (path, sha256)}`; `--book N` on all five tools
   **and all five gates**, replacing the ten hardcoded `SITE`/`BOOK` constants.
2. One function `fid(book, n)` returning `""` or `"2"`, threaded through the **37** call
   sites. Thirty-seven call sites of one function, not thirty-seven edited literals.
3. Re-key the **7 tables** to `(book, chapter)` and **make a missing row raise**.
4. Outputs gain the book: `courses/cma/book2_chNN.json`, `cma/book2/assets/…`.

**Done when:**
- `figure_tables` returns a **positive** count for **every** chapter of **both** books.
  *Tooth:* restore the old regex — the check must go red.
- Book 1's 18 chapters re-extract **byte-identically** to the committed `book1_chNN.json`.
  Phase 0 edits the reader that all 686 shipped files descend from.
- a `(book, chapter)` lookup for an absent row **raises**. *Tooth:* reinstate a `.get`
  default — the check must go red.

### Phase 1 — extract and lock
`--book 2 --extract --verify-book --figures --baseline` × 18 → `book2_chNN.json`,
`source-text-chNN.js`, the 106 drawings. **Done when** the provenance chain
`.docx ↔ extract ↔ baseline ↔ site` closes for all 18, as Book 1's does.

### Phase 2 — terms, and the 166 icons
`cma_terms --book 2` → 392 rows, 100% Arabic, English/العربية/Français.
Then **166 new terms need an icon family** — about **20 families** at Book 1's measured
density of 8.3 terms per family.
**Done when** `Icons.census()` reports **tier-3 fallbacks = 0** for Book 2, as Book 1 reports
0. Shipping 166 typographic fallbacks would be a visible regression of a standard, not a gap.

### Phase 3 — generate the eighteen chapters
`cma_scenes --book 2 --chapter 1..18`.
Two differences from Book 1, both consequences of its history, not of this book:
- **Book 2 chapter 1 is generatable.** There is no hand-authored benchmark chapter to
  protect, so Book 2 carries no `BUILDABLE` refusal.
- **Book 2 has no 74%-built reference chapter**, so its depth floors will start lower.
  Compare them with Book 1's *generated* chapters (6–18), **never** with its chapter 1.

**Done when** 18 chapters generate with no dispatcher error and the two measured oddities
are resolved rather than assumed: `auto_fill` chosen **0** times (it took 13 of Book 1's
figures), and **32 of 164** table figures not dispatched at all. Census both by tag first.

### Phase 4 — the 18 hand rows per table
`CASE_RULES` is transcription of the author's own sentences, asserted verbatim, so a typo
fails the build. `BRIEF_ANIM_BY_CHAPTER`, `SUMMARY_CLOZE`, `TRAPS` are judgements about his
chapters. `EXTENDED_EXAMPLE` must carry the **varying** step lists (7–10 per chapter) from
`plan_book2_2026-11-06/evidence/structure.txt`.

### Phase 5 — the site shell and the 21 shared renderers
`cma/book2/index.html`, hub, 18 chapter folders.
**Disposition: copy the 21 shared files into `cma/book2/assets/`, and add a gate asserting
every copy is byte-identical to Book 1's.** Moving them to a shared `cma/assets/` is
cleaner and would rewrite script paths in 686 shipped files for no learner-visible gain;
copying *without* the gate is how two renderers become two behaviours silently. The gate is
the cheap half of the clean answer.

### Phase 6 — the five gates, and floors that are measured
All five on `--book 2`, including **A9** (no scene prints the figures another scene asks
for) **from the very first build** — it exists because that defect shipped in Book 1 and the
other four gates passed it.
Then `cma_depth --book 2 --raise` to **measure** Book 2's floors.
**Never type a floor.** Book 1's typed floors were wrong for 8 of 18 chapters.

### Phase 7 — the depth pass *(this is where 800 becomes ~1,100)*
Book 1 reached 1,102 through a depth pass. Book 2's equivalent is already written by the
author and is **richer**: every one of the eighteen Extended Examples ends with the same
four steps —

> **Tie line** · **Terms in three languages** · **How the exam asks it** · **Self-check**

`How the exam asks it` and `Self-check` are **authored exercise material in prose, in all
eighteen chapters**. `Tie line` is a ready-made `cma_crosstie` oracle.

**Census these two steps' shape across all eighteen chapters before building anything on
them.** Book 1's package concluded "Move 1 cannot be generated" from four honest
measurements and was wrong, because it was reading the drawn figure instead of the answer
key. The census goes in a tool that writes into `evidence/`.

### Phase 8 — index, catalogue, and making the course reachable
1. `cma_index --book 2` derives per-chapter counts from `gates.cma_interactive.run`, not by
   counting a second way.
2. **Build `cma/index.html`** — the landing that neither book has — listing Book 1 and
   Book 2.
3. Register `cma` in `catalogue.json`, `manifest.json` and `sw.js`.
4. Fix the 1,078 / 1,102 drift by deriving that sentence from the table above it.

**Done when** a visitor starting at the site root can reach both books by clicking, and no
exercise total appears anywhere as a typed literal.
Note: `app.js` owns the badge, subtitles and load order, and `publish_site` **whitelists
keys — a new key is dropped silently.** Check the published output, not the source.

### Phase 9 — package, check, commit, back up
A delivered-package with `00_CARRY.md`, `check_package.py` with a tooth per check, and
`evidence/` written by its own tools. Then commit, then `backup_to_drive` — the only second
copy is `E:\SVG_To_Video_Remote_Git`, and it requires the commit first.

---

## 6. Risks, each with the check that catches it

| # | risk | the check |
|---|---|---|
| R1 | the `2` prefix makes a pattern match zero, read as clean | positive-count assertion per chapter, **both** books |
| R2 | Book 1's chapter-`n` row answers for Book 2's | a missing `(book, n)` row **raises** |
| R3 | Phase 0 regresses the 18 shipped Book 1 chapters | re-extract Book 1, require byte-identical |
| R4 | 166 terms fall back to tier-3 marks | `Icons.census()` tier-3 must be **0** |
| R5 | a renderer copy drifts from Book 1's | byte-identity gate on all 21 shared files |
| R6 | an exhibit prints the answers of the exercise below it | A9 from the first build; the unit is the **page** |
| R7 | depth floors typed rather than measured | `--raise` only; a typed floor is a defect |
| R8 | `auto_fill`'s silent 0 hides a whole class of figures | census the 32 undispatched tags before building |
| R9 | **Book 2 ships unreachable, as Book 1 did** | a check that walks from the site root to both books by links alone |
| R10 | a count is stated in prose and drifts | every total derived at load from one table |

---

## 7. Cost, in the units this work is actually measured in

No wall-clock estimate is given, because none has been measured for this toolchain and an
invented one would be the same defect this plan is about. What *is* known:

- **Phase 0 is 144 coupling sites** (16 path, 37 id, 91 keyed) — mechanical, and the largest
  single block of edits.
- **Phase 2 is ~20 icon families** drawn by hand, the largest block of authored work.
- **Phase 4 is 18 rows × 7 tables = 126 hand rows**, of which `CASE_RULES` is transcription.
- **Phases 1, 3, 6 are machine time**, re-run per chapter.
- **Phase 7 is unscoped until the census in it is run**, and must not be scoped before.

Phase 0 is also what makes **Books 3 and 4 cheap** — both are in the same folder
(`CMA_P1_Book3_volume_v1.0.docx`, `CMA_P1_Book4_volume_v1.0.docx`).

---

## 8. What needs the owner before Phase 0 starts

1. **Two books or four?** Phase 0 is the work that makes Books 3 and 4 nearly free. Keying
   on `(book, chapter)` costs the same for 2 as for 4; deciding later costs a second pass
   over 144 sites.
2. **Phase 8 touches Book 1.** Making the course reachable edits shipped Book 1 files and
   the site root. Confirm that is wanted now rather than deferred — it is the difference
   between a book people can find and one they cannot.
3. **The 12 label↔description tables** are still only *shown* in Book 1 for want of a match
   instrument. Book 2's `shares`-heavy dispatch (30) suggests the same shape. Building the
   7-way `sort` once would serve both books — but it is a layout I have not seen, and adding
   it unverified is how the "five figures were answer keys" class of defect happened.
4. **Book 1 chapter 1 stays unbuildable** either way. Nothing here changes that.

---

## 9. How to check this package

```
python check_package.py            # every number re-derived from the world
python check_package.py --teeth    # a defect planted against each check; each must fail
```

Evidence is in `evidence/`, written by `tools/ship_facts.py`, **inside this package**.
