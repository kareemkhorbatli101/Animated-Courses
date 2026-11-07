# CARRY — **CMA Part 1 Book 2, *Cost Management*, delivered**

*Written for: the owner, and whoever maintains this next.*
Dated 2026-11-07. This is the delivered package for the ship plan beside it
(`plan_ship_book2_2026-11-07/`), executed to the end.

Every number below is re-derived from the world by `check_package.py`, which also parses them
back out of **this file's own prose** and fails if the two disagree. That is deliberate: the
defect this whole piece of work kept finding was a number typed once and never re-derived, and a
write-up is not exempt from it.

```
python check_package.py            # 24 checks, every number measured
python check_package.py --teeth    # a defect planted against each; each must fail
```

---

## 1. What was delivered

**683** files, 18.0 MB, under `cma/book2/`.

| | Book 2 | Book 1, for scale |
|---|---|---|
| chapters | 18 | 18 |
| **242** chapter pages | 242 | 238 |
| chapter data files | 224 | 220 |
| **106** drawings, the author's own | 106 | 104 |
| **392** term rows, 100% Arabic and 100% French | 392 | 392 |
| **961** graded exercises | 961 | 1,102 |
| shared renderers, byte-identical | 19 | — |

The exercise count is written into `index.html` by `tools/cma_index`, which asks
`gates.cma_interactive`'s browser walk rather than counting a second way, and every total the page
shows is summed from those rows at load. There is no figure on it that can drift from the table
above it.

**961 against Book 1's 1,102** is the honest comparison and it is not a shortfall in the build:
Book 1 reached 1,102 *through* a depth pass, and 961 is what Book 2's own eighteen chapters
contain. The ship plan predicted "roughly 800 before any depth work"; the dispatcher found more
than that, and the measured depth floors are in `gates/cma_depth` for the next pass to ratchet
against.

## 2. The hand-authored work

| | |
|---|---|
| **108** case rules | six per chapter, each *quoted* from the section that teaches the item |
| 18 summary clozes | five phrases cut from the chapter's own closing paragraph, in document order |
| **17** hand-written traps | the shortfall between the author's 37 EXAM TRAP boxes and the gate's four a chapter — one for each of sixteen chapters, two for chapter 8, none for chapters 4 and 7 which already had four |
| **25** icon families, 166 terms | **66** icon families in all; **0** typographic fallbacks |
| **24** Brief drawings | **188** pages name a drawing |

Nothing in those tables was retyped. Each sentence was *chosen* among candidates a tool found in
the chapter, and the tool wrote out the author's exact text — because the generator asserts every
one of them verbatim, and a plausible near-miss would be a sentence he never wrote, printed as
his.

## 3. The gates

All five of the original gates pass on Book 2, and **four new ones** were written for the
problems a second volume creates.

| gate | Book 2 | what it is for |
|---|---|---|
| `cma_provenance` | PASS | every chapter verbatim against the `.docx`; every word on screen is in *that* chapter |
| `cma_render` | **1758/1758 checks** | every page drives, every exercise marks |
| `cma_interactive` | PASS, 961 exercises | decide, do not reveal — including A9 from the first build |
| `cma_crosstie` | PASS | all 18 chapters' own "Everything ties" boxes hold |
| `cma_depth` | PASS | floors **measured** by `--raise`, never typed |
| `cma_volume` (new) | 11 checks, 11 teeth | the toolchain takes a book number and did not keep building the first |
| `cma_icons` (new) | 6 checks, 6 teeth | a drawn mark for every term, lighting a part its family can light |
| `cma_brief` (new) | 5 checks, 5 teeth | every named drawing exists and belongs to *this* volume |
| `cma_shared` (new) | 6 checks, 6 teeth | the shared renderers are one file; Book 1 changed only where meant |
| `cma_reach` (new) | 6 checks, 6 teeth | a visitor can reach every built book by clicking |

**Book 1 still passes all three of its browser gates** — provenance, interactive (1,102
exercises) and render (1734/1734) — after 241 of its published lines were corrected.

## 4. The toolchain now takes a book number

`tools/cma_vol.py` is the only place a volume number lives: the paths, the sha256s, the output
names, the site directories, the id grammar, the per-volume tables and the part structure. The
144 coupling sites the plan counted are gone, and the work was done for **all four** volumes, so
Books 3 and 4 need content and not plumbing.

Two decisions in it are worth knowing before touching it:

* **The id grammar is DATA, measured per volume, not a formula.** Figures prefix with the book
  digit (`F07-01` → `F207-01`) and so, it turns out, do cases — but cases also widen, from
  Book 1's `C7-1` to Book 2's `C207-1`. A prefix rule derived from the figures would have
  produced `C27-` and matched nothing. Section headings are bare (`7.1`) in all four volumes.
* **The volume is derived from the data, not passed alongside it.** An extracted chapter records
  the `.docx` it came from and that file's sha256, so `V.book_of(d)` reads the book off the
  chapter being built. It cannot disagree with it, and there is no order of operations to get
  wrong.

## 5. What was found that nobody was looking for

Fourteen defects, in three groups. The full account with evidence is in `BUILD_NOTES.md`.

**Would have shipped in Book 2.** The storage prefix — `CHAPTER_ID` keys localStorage and both
books are served from one origin, so Book 2 shipping `ch07` would have shown a learner their
*Book 1* chapter 7 progress and had "Reset" wipe both. Two caches keyed by chapter alone would
have returned Book 1's section count for Book 2, and that count becomes the page list.
`gloss_for` cached `(chapter, term)`, so Book 1's definitions would have answered for Book 2.
`EXTRA_BY_CHAPTER` handed Book 2's chapters 2–5 Book 1's hand-written scene builders — caught by
the verbatim assertion, which is the system working.

**Already shipped in Book 1, and only visible once there was a second volume to compare with.**
Its hub named *"Part I · Foundations and the four financial statements"* on all eighteen
chapters, thirteen of which are in Parts II–IV. Its case pages were all titled *"Case question ·
Barada Wholesale"* — wrong for twelve of seventeen; the author titles each chapter's case
himself. Its contents page said *"1,078 exercises over 203 pages"* under a table summing to
1,102. Its gloss for "lease" was defining *lease term*. All corrected here.

**In the gates themselves, every one latent in Book 1.** `cma_depth`'s three ratchets tested
`if n in FLOORS` after `FLOORS` gained a book dimension, so they compared no chapter against any
floor **and reported PASS**. `cma_crosstie` fell back to `String(a) === String(b)`, making
`"undefined" === "undefined"` a pass — eleven ties went green reporting that two figures agree
when neither was found. `cma_render`'s option matcher took the *first* option whose text prefixes
a label, so with options `$3, $12, $30, $36` the label "$30" was attributed to "$3" and the gate
reported "no right option on screen" for sound data; it held for 1,758 checks and failed on the
1,759th. And a sweep found `F\d\d-\d\d` — a pattern that cannot match `F207-02` — at five more
sites, each finding zero and finding it quietly.

**Two of my own, worth recording.** `V.rows(..., default=None)` returned `{}` because the
sentinel for "no default" *was* `None`, so eighteen chapters raised instead of taking a fallback.
And I had assumed the cloze *reasons* were not audited as content; the provenance lock checks
every word the site shows against the chapter it is shown in, and eight of my explanatory
sentences used words their chapter never uses.

## 6. Reachability — the finding that reshaped Phase 8

Book 1 was published, gated by five gates, and **unreachable**: nothing on the site linked to it
and `cma/index.html` did not exist. Measured by walking links from the site root, **one** page
was reachable before this work — the root page itself. After it: **266** pages reachable, with
all 18 chapters of both books reachable by clicking.

The plan said to register `cma` in `catalogue.json`, `manifest.json` and `sw.js`. Measured, two
of those are not registries: `sw.js` caches only content-addressed blobs by explicit design, and
the root `manifest.json` is a `bundle/2` lesson manifest for a single video. `catalogue.json` is
a registry of **video** courses — the player reads `c.videos` for every entry — so a textbook
there renders as an empty row. Reachability is a link from the root page to a real course
landing, which is what the plan's own "done when" asks for.

## 7. What is owed

1. **A depth pass.** 961 exercises, and the floors are now measured. The targets Book 2 is still
   under are reported by `cma_depth` every run: 45% of the author's figures asked against a
   target of 70%, 30% of exercises built as instruments against 45%, and twelve chapters under
   ten instrument kinds.
2. **Books 3 and 4** need content only. Their id grammar is already measured and recorded, their
   `BUILDABLE`, `FLOORS`, `LEDGER_ALL` and table slots exist, and `check_stems` verifies the
   grammar against the books on demand.
3. **The 12 label↔description tables** are still only *shown*, in both books, for want of a
   7-way `sort` instrument. Unchanged by this work, and deliberately: adding a layout I have not
   seen is how the "five figures were answer keys" class of defect happened.
4. **Book 1 chapter 1** stays hand-authored and outside the generator. Nothing here changes that.
5. **The rendered pages have not been looked at.** Every check here is programmatic or
   browser-driven. No human has opened a Book 2 page and read it, and the one defect in this
   family that shipped in Book 1 — an exhibit printing the answers below it — was found by taking
   a screenshot and reading it.

## 8. How to check this package

```
python check_package.py --teeth
```

Evidence is in `evidence/`, written by the tools and gates themselves as the build ran;
`BUILD_NOTES.md` is the full account, phase by phase.
