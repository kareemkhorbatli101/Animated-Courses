# English Animated
## A general English course, A1 → C2 — series plan

**Status:** proposal, for approval.
**Prepared from:** a structural analysis of five commissioned ESP books (AlHasan International 1 & 2,
EAM, EAT, EFD) — 50 units, ~292,000 words, 635 figures — plus current CEFR and coursebook practice.
**Date:** October 2026.

---

## What this is

A plan for **14 books** spanning A1 to C2: 140 units, ~1,610 guided hours, ~6,650 active headwords,
with a book-plus-animation production model built on the XML→video engine already in this
repository.

It is designed as a direct answer to three things in the brief:

1. **"Each unit has too narrow a focus and too much iteration through the same stuff."**
   → Three declared lines per unit, and a hard rule that no language point may own more than 4 of
   the 12 parts. See `02`.
2. **"Topics must be current, interesting, varied — and general, not local."**
   → Ten permanent domains, each revisited once per book at rising altitude; a rotating
   international setting; a localisation layer; a quarterly-refreshed Live Panel so print never
   goes stale. See `05` and `01` §6–7.
3. **"Sophisticated illustrations with more realistic detail and more pedagogical use."**
   → Twelve specified figure types, four production laws (including *no figure without a task*),
   and an eight-state animation layer rendered by this repo's engine. See `07`.

---

## The documents

| | Document | What it settles |
|---|---|---|
| **00** | [Diagnosis](00-diagnosis.md) | What the five source books do well, what fails, with counts — and the eleven commitments that follow |
| **01** | [Series Architecture](01-series-architecture.md) | 14 books, why 2/2/3/3/2/2, hours, components, cast and setting system, localisation |
| **02** | [Unit Architecture](02-unit-architecture.md) | **The three lines and the twelve parts.** The structural heart of the series |
| **03** | [Grading Spine](03-grading-spine.md) | Every number: vocabulary, text length, audio speed, output length, task cognition, figure density |
| **04** | [Language Spine](04-language-spine.md) | All 140 units: grammar targets, lexical sets, pronunciation, function |
| **05** | [Topic Matrix](05-topic-matrix.md) | Ten domains × 14 books; how topicality is kept current without reprinting |
| **06** | [Task Taxonomy](06-task-taxonomy.md) | 64 task types in nine families, with rules of use and difficulty dials |
| **07** | [Visual System](07-visual-system.md) | Twelve figure types, production standards, the animation layer, the brief template |
| **08** | [Assessment](08-assessment.md) | Six layers from placement to portfolio; exam mapping; teacher analytics |
| **09** | [Platform & Engine](09-platform-and-engine.md) | One source, five outputs; repository layout; the engine work that blocks the pilot |
| **10** | [Production Plan](10-production-plan.md) | Phases, waves, five QA gates, team, costing, risk register |
| **11** | [Pilot Books](11-pilot-books.md) | **Recommendation: B1.1 + A1.1, plus one C2.2 calibration unit** — with full unit maps |
| **12** | [Specimen Unit](12-specimen-unit.md) | B1.1 Unit 1 blueprinted part by part, with its gate audit |
| **13** | [Scaffolding Spine](13-scaffolding-spine.md) | 18 supports, the withdrawal schedule, the sufficiency floor and the Scaffolding Load Index |
| **14** | [Specimen Texts](14-specimen-texts.md) | 18 real specimens — reading, listening, writing models, speaking answers — measured against band |
| **15** | [Rotation Maps](15-rotation-maps.md) | 36 File formats across 140 slots; genre, listening and task-variety rotations, with the arithmetic |
| **16** | [Calibration Log](16-calibration-log.md) | **Pass 1: 24 findings, 21 fixed.** What drifted, what regressed, what was missing, and what is still unchecked |

**If you read three:** `02` (the architecture), `11` (what to build first), `12` (what it looks like
on the page). **If you want to know whether it holds up:** `16` (the calibration log) and `14` (the
texts, measured).

---

## Calibration state

Pass 1 complete — see `16`. 24 findings: 8 drift, 4 regression, 9 omission, 3 verified clean.
All 21 defects fixed; three documents and one checking tool added.

| Check | State |
|---|---|
| Specimen texts in band (18) | **PASS** — `tools/measure_specimens.py --check` |
| Reading complexity gradient monotonic A1→C2 | **PASS** — 9.3 · 12.3 · 14.3 · 18.7 · 22.5 · 23.9 |
| Domain matrix: 14 rows × 10 domains, 0 adjacency clashes | **PASS** |
| Genre matrix: 14 rows × 10 genres, 0 adjacency clashes | **PASS** |
| 140-unit spine agrees with the domain matrix | **PASS** |
| Figure distribution sums to the stated totals | **PASS** |
| Specimen unit Scaffolding Load Index ≥ B1 floor | **PASS** — 1.81 against a floor of 1.8 |
| Lexical database, grammar database, can-do inventory | **not yet built** — Phase 0, blocking (`16` §6) |

---

## The shelf

| Shelf | Books | CEFR | Hours | Cum. active vocabulary |
|---|---|---|---|---|
| **Foundation** | A1.1 · A1.2 · A2.1 · A2.2 | A1–A2 | 380 | 1,500 |
| **Independence** | B1.1 · B1.2 · B1.3 · B2.1 · B2.2 · B2.3 | B1–B2 | 690 | 4,350 |
| **Mastery** | C1.1 · C1.2 · C2.1 · C2.2 | C1–C2 | 540 | 6,650 |

B1 and B2 get three books each because those bands are twice the width of A1. Giving every level
two books is the standard mis-grading that produces the "B1 cliff".

---

## The twelve parts of a unit

Part 0 is the opening spread; Parts 1–12 are the twelve parts proper.

| | Part | Line |
|---|---|---|
| 0 | The Big Picture | ◆ World |
| 1 | Vocabulary Lab 1 | ◆ System |
| 2 | Listening | ◆ World |
| 3 | Grammar Lab 1 | ◆ System |
| 4 | Speaking | ◆ Performance |
| 5 | Reading | ◆ World |
| 6 | Vocabulary / Grammar Lab 2 | ◆ System |
| 7 | Pronunciation & Fluency Lab | ◆ System |
| 8 | Writing | ◆ Performance |
| 9 | **The File** — Work / Study / Culture | ◆ World + Performance |
| 10 | Mediation & Interaction | ◆ Performance |
| 11 | The Decision | ◆ Performance |
| 12 | Landing — review, recycle, can-do | all three |

---

## Decisions needed

1. Approve the **three-line / twelve-part architecture** (`02`) — everything else is downstream.
2. Approve the **shelf shape**: 14 books, 2/2/3/3/2/2 (`01` §2).
3. Confirm the **pilot pair**: B1.1 + A1.1, plus the C2.2 calibration unit (`11`).
4. Confirm the **engine budget**: twelve 3D sets and four blocking engine items (`09` §6).
5. Tell me any constraint not reflected here — market, licensing, page extent, regional requirement.

On approval, the next deliverable is **B1.1 Unit 1, written complete** against `12`.
