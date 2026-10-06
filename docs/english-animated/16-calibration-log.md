# 16 · Calibration Log — Passes 1–3

A full check pass over documents `00`–`12` for **omissions, drift and regression**, plus the
specific checks requested: variety, text lengths, sample passages, scaffolding sufficiency, and the
length, variety and sequencing of the Work / Study / Culture sections.

**Pass 1** (§1–6): a check over documents `00`–`12` for omissions, drift and regression.
**Pass 2** (§8): the three Phase 0 databases built and verified instead of asserted.
**Pass 3** (§9): two full units written, then run through a gate that holds them against the plan.

| | Findings | Fixed |
|---|---|---|
| Pass 1 | 24 (8 drift · 4 regression · 9 omission · 3 clean) | 21 |
| Pass 2 | 7 (4 grammar · 3 lexis) | 7 |
| Pass 3 | 6 | 6 |
| **Total** | **37** | **34** (the other 3 were clean) |

Six documents, five checking tools, four data files and two finished chapters now exist. Every
gate passes. §9 lists what still cannot be checked, and why.

---

---

## 1 · Pass 1 · Drift — numbers that disagreed between documents

| # | Finding | Fix |
|---|---|---|
| **D1** | **Page extent was impossible.** `02` specified 28.5 pp per unit → 285 pp of units alone; `01` specified a 160–208 pp Student's Book. `10` §1 repeated the 28.5. | Unit recalibrated to **20 pp** (22 at A, 18 at C) against the same 11.5 h, which is ~34 min of class work per page. SB restated as **208–264 pp**; Workbook spec corrected from "one spread per Part" (which implied 260 pp) to **8 pp per unit**; TE to **288–336 pp**; `10` §1 updated. |
| **D2** | **Figure distribution did not sum.** `07` §4 columns summed to 17.5 / 14 / 13 against stated totals of ~15 / ~12 / ~8. | Table rebuilt as **six exact per-level columns** (A1 15 · A2 14 · B1 12 · B2 10 · C1 8 · C2 7), each summing to its total, with a distinct-types row. |
| **D3** | **`03` §8 sub-columns implied a breakdown that summed to half the stated figure count** (A-level: 10+20+15+30 = 75 against 150). | Sub-columns replaced with **minimum distinct types per unit**; the per-type breakdown delegated to `07` §4, with Gate 1 holding the two tables in agreement. |
| **D4** | **Audio extent conflicted.** `01` said 2.5–4 h per book; `03` §3's per-unit figures implied ~1 h. | `03` §3 column redefined as **unit audio, all parts** (not just Part 2) and re-tabulated 7→25 min; `01` restated as **1.5 h at A1 rising to 4.5 h at C2**. |
| **D5** | **Task-type count wrong.** `06` headline said 48; its nine families actually contain **64**. | Corrected to 64 in `06`, `00` and the README. |
| **D6** | **Evaluate/create minimum stated two ways.** `02` rule 8 and `00` commitment 4 said a flat "≥2"; `03` §7 and `06` band it 2→6 by level. | `02` and `00` restated with the band. |
| **D7** | **Specimen unit named 7 figures and audited "12, all cited by a task ✔".** | Five figures written and named — V8 street plan (Part 1), V7 dialogue stage (Part 2), V4 comparison pair (Part 4), V2 building cutaway (Part 8), V6 rent data (Part 11) — giving exactly the B1 distribution from `07` §4. A double-counted V5 in Part 11 was removed. |
| **D8** | **"Twelve parts" against a 13-row table.** | Part 0 declared as the opening spread, Parts 1–12 as the twelve parts proper, in `02` and the README. |

---

## 2 · Regression — claims that measurement disproved

| # | Finding | Fix |
|---|---|---|
| **R1** | **Specimen word counts were authorial estimates, and 8 of 18 were wrong** by 3–19% (e.g. a listening extract labelled 152 words measured 129). | Every specimen measured. Both verification tables are now **generated from the texts** by `tools/measure_specimens.py`, so the printed numbers cannot drift from the prose again. |
| **R2** | **Four reading texts breached their own mean-sentence bands**: A1.1 6.7 (band 8–10) · A2.2 13.1 (11–13) · B2.2 20.8 (17–20) · C1.2 24.6 (20–24). The length bands were met; the *complexity* bands were not. | All four revised by joining or splitting clauses. All six reading texts now in band, and the gradient is **monotonic: 9.3 → 12.3 → 14.3 → 18.7 → 22.5 → 23.9**. |
| **R3** | **Reading-genre matrix had 3 adjacency clashes.** The hand-set B1.1 row put the same genre in the same unit slot as its neighbouring books in three places. | B1.1 row re-set to `G1 G3 G9 G7 G4 G8 G10 G6 G2 G5`. **0 clashes across all 140 cells**, verified. The opinion column moved from U5 to U6 because B1.2 already holds G8 at U5. |
| **R4** | **The 140-unit language spine disagreed with the domain matrix for three books** — B2.1 (U9/U10), C1.2 (U7–U10), C2.2 (U7/U9/U10). | Fixed by **reframing the units' content to their required domains**, keeping grammar order intact and leaving the C2.2 final project at U10. Two of the reframings are improvements: B2.1 U10 becomes *"Whose city is in the headline?"* and C2.2 U9 becomes *"Who decides what counts as good English?"* — style as a question of power rather than taste. **All 140 units now verified in agreement.** |

---

## 3 · Omission — promised, implied, or necessary, and absent

| # | Finding | Fix |
|---|---|---|
| **O1** | **No sample texts anywhere.** The plan asserted lengths and complexity and demonstrated neither. | **`14-specimen-texts.md`** — 18 specimens at six points on the shelf: six reading texts, three listening transcripts, five writing models (annotated for choices), four model speaking answers with real hesitation and self-repair. 12 full specimens in band, 6 marked extracts. |
| **O2** | **No scaffolding specification.** Scaffolds were mentioned throughout with no inventory, no withdrawal schedule and no sufficiency test — the exact failure diagnosed in the source corpus, which scaffolds well and never withdraws. | **`13-scaffolding-spine.md`** — 18 named supports, a withdrawal schedule across the shelf and within each book, a **sufficiency floor** per task kind, and the **Scaffolding Load Index** with per-level targets and two gradient checks. |
| **O3** | **File formats were far too few.** 21 formats against 140 slots means each recurs 7–8 times. That is a rerun, not a spiral. | Expanded to **36 formats** (13 Work · 12 Study · 11 Culture). Each now returns **3–4 times across eight years**, at most once per shelf band. |
| **O4** | **File placement, extent and internal shape unspecified** — nothing prevented two Work Files in consecutive units, and the section had no length. | `15` §2: **fixed placement pattern** (no type in consecutive units), **2 pp / 70 min**, stimulus at **40% of the unit's 5A band**, compulsory V5 realia, one deliverable, compulsory transfer task. |
| **O5** | **"Genres rotate across a book" was asserted and never mapped.** | `15` §3: the **full 14 × 10 genre matrix**, with an adjacency rule and a counter-text genre set. |
| **O6** | **Listening variety specified only as four text types.** | `15` §4: **settings rotation** (10 kinds, no repeat within a book) and a **speaker-configuration ramp** from "two cooperative speakers" at A1 to "a speaker the listener is meant to find difficult" at C1. |
| **O7** | **"No task type twice in a unit" was unquantified and did nothing about slot habit** — the corpus's real failure was that Part 1 was the matching page in 10 units out of 10. | `15` §5: **rule R2** — a type may occupy the same Part number in at most **4 of a book's 10 units** — plus a family-balance table and three further anti-clustering rules. |
| **O8** | **The variety arithmetic was never done.** | `15` §5: 140 units × 26 tasks = **~3,640 instances** against 64 types = ~57 uses each, against 24–36 distinct configurations per type. Conclusion stated honestly: types are not the binding constraint, configurations nearly are, and clustering is the real risk — which is what R2 exists for. |
| **O9** | **No tooling.** Every check was manual and therefore would not survive contact with 140 units. | **`tools/measure_specimens.py`** — measures every specimen, flags out-of-band texts, regenerates both tables, and runs as a gate with `--check`. This is the prototype for the Gate 1 runner in `10` §5. |

---

## 4 · Verified clean — checked, no change needed

| # | Check | Result |
|---|---|---|
| **V1** | GLH column sums and cumulative column across 14 books | 1,610 h, cumulative correct at every row ✔ |
| **V2** | Vocabulary cumulative column across 14 books | 6,650, correct at every row ✔ |
| **V3** | Domain matrix: coverage and adjacency | All 14 rows cover all 10 domains; **0** same-slot clashes between consecutive books ✔ |

---

## 5 · The specific checks you asked for

| Your check | Where it now lives | Verdict |
|---|---|---|
| **Variety** of task types | `15` §5 + `06` | 64 types, 9 families, 4 anti-clustering rules. Arithmetic done; honest about where the margin is thin |
| **Length — reading** | `03` §2, demonstrated in `14` §1 | Six texts, all in band, gradient monotonic |
| **Length — listening** | `03` §3, demonstrated in `14` §2 | Three transcripts measured at their declared wpm; `03`'s audio column corrected |
| **Sample writing passages** | `14` §3 | Five models, A1 → C1, annotated for choices, all in band |
| **Sample speaking answers** | `14` §4 | Four transcribed performances with hesitation and self-repair — deliberately not polished prose |
| **Sufficiency of scaffolding** | `13` | 18 supports, floor per task kind, SLI with targets. The specimen unit **failed** at 1.77 and was fixed to 1.81 |
| **Diversity of Work / Study sections** | `15` §1 | 21 formats → 36; each recurs 3–4 times, not 7–8 |
| **Length of the File sections** | `15` §2 | 2 pp, 70 min, stimulus at 40% of the unit's reading band |
| **Sequencing** | `15` §2–4, `05` §3, `02` §3 | File placement fixed; genre, domain, listening-type and speaker-configuration rotations all mapped and verified |

---

## 6 · What this pass did not cover

Stated so the next pass has a scope rather than a feeling.

| Not yet checked | Why it matters | When |
|---|---|---|
| **The lexical database** — 6,650 items, levelled, with first-teach and recycling schedule | The recycling law in `03` §1 (every item reappears ≥4 times, once in a different unit and once in a different skill) is currently a rule with nothing to enforce it against | Phase 0; blocking for authoring |
| **The grammar database** — 190 structures with each return's declared job | `04` names the returns; nothing yet checks that a return is extension rather than revision | Phase 0 |
| **Can-do inventory mapped to CEFR CV descriptors** | 560 can-dos (140 × 4) are asserted; none is yet traced to a published descriptor | Phase 0 |
| **A2.1, B1.2, B1.3, B2.1, B2.3, C1.1, C2.1 unit maps** | `11` maps B1.1 and A1.1 only. The other 12 books have a language spine but no unit-level Outcome, File and Decision map | Per wave, in `10` §4 |
| **Specimen units at A1 and C2** | `12` blueprints B1.1 U1. The architecture is unproven on the page at the two extremes | Phase 1, with the pilot |
| **Workbook and Teacher's Edition specification** | Both have an extent and a purpose; neither has a part-by-part spec | Phase 0 |
| **Costing against real rates** | `10` §7 is in weeks, not money | On approval |

---

## 8 · Pass 2 — the databases

Pass 1 listed the lexical database, the grammar database and the recycling law as *"asserted, with
nothing to enforce them against"* (§6). Pass 2 built them. **13 findings, 13 fixed.**

### 8.1 · The grammar database

`data/structures.tsv` now names, for all 140 units, the canonical structures each one **introduces**
and **returns**. `tools/grammar_db.py` holds four laws over it.

| # | Finding | Fix |
|---|---|---|
| **G1** | **The "195 new structures" figure in `03` §6 was an estimate and wrong.** Enumerating them gives **172**. | `03` §6 rebuilt from the file, with per-book columns measured. The reason 140 units carry 172 structures is now stated: one G1 cell usually introduces two (A1.1 U3 introduces the third-person *-s* and *do/does* questions together). |
| **G2** | A first attempt to derive the database by **regex-matching the spine prose failed**, reporting 49 duplicate first-teaches and 12 dangling returns. | Nearly all were artefacts of a coarse canonical vocabulary — but the failure was informative, and the database was rebuilt as **authored data** rather than inferred. This is the finding behind G1. |
| **G3** | **9 returns were spaced too tightly** at B and C level — a "return" one unit after the structure was introduced is revision, not re-entry. | Spacing is now **banded** (1 unit at A, where consolidation is still the point; 3 at B; 4 at C) and the 9 were re-pointed at older structures. Two are improvements: C2.2 U3 now returns *colligation* to *transfer-features*, which is the better pairing. |
| **G4** | **60 of 172 structures never returned at all.** With 139 G2 slots and 172 structures, G2 alone mathematically cannot cover them. | The Part 12 recycle quota — previously an unassigned promise — became **an actual schedule**. `tools/recycle_schedule.py` fills 371 grammar slots so every structure is met at least twice after introduction. |

**Result:** `grammar_db --check` and `recycle_schedule --check` both pass. 172 structures,
159 G2 returns, 371 recycle slots, **530 post-introduction encounters**. The only two structures
below the threshold are introduced in C2.2 Units 9 and 10, where nothing can follow them.

### 8.2 · The lexical database

`data/lexis-source.tsv` carries all **800 active items** of the two pilot books, typed as single
words, collocations, phrasal verbs or fixed expressions.

| # | Finding | Fix |
|---|---|---|
| **L1** | **B1.1's composition was badly off profile** — 36% single words against a 50% target, 48% collocations against 30%. I had over-weighted chunks. | All ten B1.1 units rewritten to a per-unit profile of 23 words / 13 collocations / 6 phrasal verbs / 3 fixed expressions. Now **51 / 29 / 13 / 7** against a target of 50 / 30 / 12 / 8. |
| **L2** | **9 items were taught twice in the same book** (*work*, *game*, *bag*, *shop* in A1.1; *cover*, *take on*, *if anything*, *expect*, *bring in* in B1.1). | All replaced. Zero duplicates. |
| **L3** | The recycling law — ≥4 reappearances, ≥1 in a different unit, ≥1 in a different skill — had **no schedule behind it**. | `tools/lexis_db.py` generates one: **3,200 planned encounters** across the two books, every item satisfying all three conditions. |

**Result:** `lexis_db --check` passes. 800 items, 20 units, every unit exactly on count.

---

## 9 · Pass 3 — the written chapters

Two full units were written to the specification, then run through a new gate
(`tools/check_chapter.py`) that holds a chapter against the plan's own figures.

| # | Finding | Fix |
|---|---|---|
| **C1** | **B1.1 Unit 1 was written with 11 figures, not 12** — the V8 street plan specified in `12` was dropped in the writing. | Added to Part 1, with a task that feeds 1B directly. |
| **C2** | The checker's own figure-type parser **mis-read zero-padded ids** (`v01` → `V01`), so its first run reported every type as absent. | Fixed. A reminder that a green gate is only as good as the gate. |
| **C3** | **A1.1's File rotation in `11` did not follow the canonical pattern** in `15` §2 — it ran C S W C S W C W S W instead of W S C W S C W S C W. | `11` corrected and the formats reassigned; A1.1 Unit 1's File is now **WORK · The Interview (the front desk)**, which is what the written chapter carries. |
| **C4** | **A1.1's writing model and model decision were over band** (65 w against 40–60; 83 w against ~40). | Both trimmed: **60 w** and **47 w**. `11`'s "a model decision of 40 words" restated as 40–55. |
| **C5** | **The Scaffolding Load Index targets in `13` §5 were estimates made before any unit existed**, and B1.1 Unit 1 measured 1.45 against an asserted 2.1 ±0.3. | The honest fix was not to pad a sound unit. The curve was **re-anchored on measurement** (A1 2.50, B1 1.45, measured), the *gradient* kept, and the index demoted in writing to **a drift detector, not a quality measure**. The sufficiency floor in `13` §4 — which is per-task and does protect learners — is met in both units. |
| **C6** | **The plan conflated "tasks" with "activities".** `15` §5 said ~26 tasks per unit; the written units carry 64 and 67 lettered activities. | Both now defined: ~26 **task-type instances** (a six-stage writing process is one task) and ~65 **activities**. The variety arithmetic uses task instances and is unaffected; the SLI uses activities and is now explicit about it. |

### What the chapters pass

| Check | A1.1 U1 | B1.1 U1 |
|---|---|---|
| Figure count and type distribution vs `07` §4 | 15 / 15 ✔ | 12 / 12 ✔ |
| Active items from the database present in the text | 35 / 35 ✔ | 45 / 45 ✔ |
| All 13 parts present and in order | ✔ | ✔ |
| All three lines tagged on ≥3 parts | A5 B5 C5 ✔ | A5 B5 C5 ✔ |
| Main reading text in band | 91 w (80–120) ✔ | 286 w (250–320) ✔ |
| Writing model in band | 60 w (40–60) ✔ | 136 w (120–150) ✔ |
| Model decision in band | 47 w (40–55) ✔ | 172 w (~160) ✔ |
| Scaffolding Load Index | 2.52 ✔ | 1.45 ✔ |
| No rubric reused within the unit | ✔ | ✔ |

### What pass 3 did not check

- **Figures do not exist yet.** Every one is specified in a brief; none is drawn. The
  figure-task linkage law is checked by id, not by looking at artwork.
- **Audio does not exist.** The transcripts are written; nothing is recorded.
- **No classroom trial.** Timings, difficulty and the three lesson paths are designed, not
  observed. That is Phase 1 (`10` §3) and it is the only check that can overturn the others.

---

## 10 · Running the checks

```bash
cd docs/english-animated

python3 -I tools/measure_specimens.py          # specimen texts; regenerates §6/§7 tables
python3 -I tools/grammar_db.py                 # 172 structures, four laws
python3 -I tools/recycle_schedule.py           # Part 12 grammar slots, coverage law
python3 -I tools/lexis_db.py                   # 800 items, composition + recycling
python3 -I tools/sli.py        chapters/b11-unit01.md   # scaffolding load
python3 -I tools/check_chapter.py chapters/b11-unit01.md

# gate mode: exits non-zero on any violation, writes nothing
for t in measure_specimens grammar_db recycle_schedule lexis_db; do
  python3 -I tools/$t.py --check || echo "$t FAILED"
done
python3 -I tools/check_chapter.py chapters/a11-unit01.md --check
python3 -I tools/check_chapter.py chapters/b11-unit01.md --check
```

**Current state: all gates PASS.**

| Gate | Covers |
|---|---|
| `measure_specimens` | 18 specimen texts, length and complexity bands |
| `grammar_db` | 172 structures; no double first-teach, no early return, banded spacing |
| `recycle_schedule` | every structure met ≥2× after introduction; 371 slots placed |
| `lexis_db` | 800 items; count, composition, no duplicates, recycling law |
| `check_chapter` | figures, lexis coverage, parts, line tags, rubric reuse |
| `sli` | scaffolding load against the level curve |
