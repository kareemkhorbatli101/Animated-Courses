# 10 · Production Plan

---

## 1 · The unit of production

One unit = 28.5 pp of Student's Book + 6 pp Workbook + 8 pp Teacher's Edition + ~12 figures +
~8 audio tracks + 2 videos + 1 platform build. Fourteen books × 10 units = **140 units**.

Nothing is written until the **Series Bible** (§2) is signed off. The single largest cause of
failure in a multi-level course is level 1 defining the architecture that level 6 then has to live
inside.

---

## 2 · Phase 0 — Series Bible *(before any unit is written)*

| Deliverable | Extent | Owner |
|---|---|---|
| This plan, approved | 12 documents | Series Editor |
| **Lexical database** — all 6,650 active items, levelled, with first-teach unit and recycling schedule | database | Lexicographer |
| **Grammar database** — 190 structures, first-teach and every return, with the job of each return | database | Grammar Editor |
| **Can-do inventory** — all 140 units × 4, mapped to CEFR CV descriptors | database | Series Editor |
| **Style guide** — voice, register, punctuation, rubric wording, name policy, number policy | 40 pp | Series Editor |
| **Visual style guide** — the twelve types, palette, line weights, the nine grammar shapes, character sheets per book | 60 pp | Art Director |
| **Audio style guide** — accent bands, speed bands, scripting ramp, casting policy | 20 pp | Audio Producer |
| **Unit source schema + gate runner** | code | Engineering |
| **12 set builders + object manifests** | code + assets | Engineering (`09` §6) |

**Duration: 16 weeks.** It is tempting to compress this. Do not.

---

## 3 · Phase 1 — Pilot *(the first books)*

See `11-pilot-books.md` for the recommendation and the full unit maps.

| Stage | Weeks | Output |
|---|---|---|
| Specimen unit written to spec | 4 | B1.1 Unit 1 complete, all components (`12-specimen-unit.md`) |
| Specimen reviewed and revised | 3 | Approved template for everything after it |
| Pilot Book 1 authored | 20 | 10 units |
| Pilot Book 2 authored in parallel | 20 | 10 units |
| Art, audio, video, platform | concurrent | Full component set |
| **Classroom trial** — 6 centres, 3 continents, ≥180 learners, 1 term | 14 | Data, not opinions |
| Revision from trial | 6 | Final pilot books |

**Duration: ~44 weeks** to two finished, trialled books.

---

## 4 · Phase 2 — Rollout

Books are authored in pairs, with a one-book overlap so the writing team never starts cold.

| Wave | Books | Weeks | Cumulative |
|---|---|---|---|
| 1 (pilot) | B1.1, A1.1 | 44 | 44 |
| 2 | A1.2, B1.2 | 26 | 70 |
| 3 | A2.1, B1.3 | 26 | 96 |
| 4 | A2.2, B2.1 | 26 | 122 |
| 5 | B2.2, B2.3 | 26 | 148 |
| 6 | C1.1, C1.2 | 30 | 178 |
| 7 | C2.1, C2.2 | 30 | 208 |

**Full shelf: ~4 years.** Shippable product from month 11, a complete A1–B1 path by month 24, a
complete A1–B2 path by month 34.

The pairing rule — one Foundation book and one Independence book per wave until the shelf meets in
the middle — means the series is **sellable as a path** from the earliest possible date, and the
grading between distant levels is tested continuously rather than discovered at the end.

---

## 5 · Quality gates

Every unit passes all five gates before it moves. A failed gate returns the unit to its author; it
is never waived.

### Gate 1 — Machine (automated, on commit)

| Check | Rule |
|---|---|
| Active item count | within band ±10% (`03` §1) |
| Off-list vocabulary in graded texts | within tolerance |
| Text and audio lengths | within band (`03` §2–3) |
| Mean sentence length, clauses/sentence | within band ±15% |
| Writing output targets | within band (`03` §5) |
| Language-point saturation | ≤4 of 12 parts (`02` §7 rule 2) |
| Evaluate/create task count | ≥ minimum (`03` §7) |
| Figure-task linkage | every figure cited (`07` Law 1) |
| Rubric reuse | flagged if a rubric string repeats within a book |
| Distractor reuse | flagged if a distractor repeats anywhere in the series |
| Recycling quota | Part 12 carries 4 from this book + 2 from the previous |
| Figure overflow | bounding-box check, zero tolerance |
| Alt text | present for every figure |
| Contrast | WCAG 2.2 AA |

> The distractor-reuse check exists because **"a mistake in the code" appears 29 times verbatim**
> across the five source books (`00-diagnosis.md` §3.3). A machine catches this; a human editor,
> working book by book, does not.

### Gate 2 — Pedagogical review
Three declared lines present and tagged · two grammar targets, two lexical sets · no grammar
delivered by a dialogue character · guided discovery precedes every rule · the Outcome Task is
achievable with what the unit teaches and nothing else.

### Gate 3 — Editorial review
Voice consistent with the style guide · every rubric freshly written · every text worth reading on
its own terms · no text is a vehicle for a structure.

### Gate 4 — Cultural and accessibility review
Reciprocal Culture File · no norm presented as universal · representation audit passed · no unit
requires a learner to disclose anything they may not wish to · alt text is descriptive, not
decorative · every task has a non-visual and a non-auditory route.

### Gate 5 — Classroom trial
Every unit of every pilot book is taught by a teacher who did not write it, to real learners, and
reported on against: timing actual vs planned · where learners disengaged · which rubrics were
misread · which tasks over- or under-ran · what the teacher added or skipped.

---

## 6 · Team

| Role | FTE | Responsibility |
|---|---|---|
| Series Editor | 1.0 | Architecture, bible, final sign-off |
| Level Editors | 3.0 | One per shelf; grading within a shelf |
| Authors | 6.0 | Two per shelf, rotating pairs |
| Lexicographer | 0.5 | Lexical database, levelling, recycling schedule |
| Grammar Editor | 0.5 | Grammar database, return jobs, Grammar Lab consistency |
| Art Director | 1.0 | Visual style guide, briefs, studio direction |
| Illustrators | 3.0 | ~1,500 figures across the shelf |
| Information designer | 0.5 | V5 realia, V6 data, V9 grammar shapes, V12 synthesis |
| Audio Producer | 0.5 | Casting, recording, accent bands |
| Video / Engine | 1.5 | Sets, scene compilation, render pipeline |
| Platform Engineering | 2.0 | Compile, gates, platform, analytics |
| Assessment Specialist | 0.5 | Six layers, rubrics, exam mapping |
| Accessibility & Inclusion | 0.3 | Gate 4 |
| Trial Coordinator | 0.5 | Six centres, data |
| **Total** | **~21 FTE** | |

---

## 7 · Costing model

Order-of-magnitude, per book, for planning not procurement:

| Line | Cost unit | Per book |
|---|---|---|
| Authoring | 10 units × 4 author-weeks | 40 author-weeks |
| Editing | 3 passes | 12 editor-weeks |
| Art | 120 figures | 120 figure-briefs + studio |
| Audio | 90 tracks, 8 voices | 4 studio days |
| Video | 20 renders | 6 engine-weeks |
| Platform | 1 course build | 4 engineer-weeks |
| Assessment | diagnostic + 2 milestones + exit | 3 specialist-weeks |
| Trial | pilot books only | 1 term × 6 centres |

Phase 0 is a fixed cost amortised across 14 books; the per-book cost falls ~35% after Wave 2 as
the databases, style guides, sets and compile mature.

---

## 8 · Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Phase 0 compressed under schedule pressure | High | Severe — the whole series is mis-graded | Bible sign-off is a contractual milestone, not a target |
| Grading drifts between shelves | Medium | High | Level Editors cross-review one unit from each adjacent shelf per wave; Gate 1 is numeric |
| Art becomes the bottleneck | High | Medium | Brief in Phase 0; author figure briefs *with* the unit, not after; three illustrators from Wave 1 |
| The twelve 3D sets slip | Medium | High | Engine work is Phase 0, blocking (`09` §6); sets precede authoring |
| Topics date | Certain | Low | Live Panel absorbs it (`05` §4); print never carries the perishable layer |
| Teachers use only the Standard path | High | Low | Three paths printed in the TE; Fast path is a complete course |
| C-level authored by B-level habits | Medium | High | C-shelf authors write the C2.2 specimen unit *before* C1.1 Unit 1 |
| Localisation requests fragment the core | Medium | Medium | The localisation layer is specified and bounded (`01` §7) |

---

## 9 · Definition of done, per book

- [ ] 10 units through all five gates
- [ ] 2 Milestone spreads
- [ ] Workbook with full key
- [ ] Teacher's Edition with three lesson paths and anticipated-error notes
- [ ] ~120 figures: layered source, `_states.json`, still export, alt text, light + dark
- [ ] ~90 audio tracks, accent-banded, with transcripts in back matter only
- [ ] 20 videos rendered and catalogued under `courses/ea-<book>/`
- [ ] Diagnostic, 10 unit quizzes, 2 milestone checks, exit test, rubrics
- [ ] Platform course live, Live Panel slots populated
- [ ] Lexical and grammar databases updated with this book's first-teaches and returns
- [ ] Recycling obligations for the *next* book registered
- [ ] Representation and accessibility audit signed
