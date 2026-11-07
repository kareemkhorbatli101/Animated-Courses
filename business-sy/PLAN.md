# Business English — Syria

## A 100% clone of the TOEFL iBT 2026 course, with new content

The engine, the interaction model, the Explain popup, the Arabic layer, the
audio, the spaced-review spine, the six derived diagrams and the whole QA
toolchain are kept. The subject matter is replaced.

This plan is written against the real code, not from memory. Every count in
section 1 was measured today.

---

## 0. The four decisions

| | Decision |
|---|---|
| Measurement authority | Cambridge Business English handbooks — B1 Business Preliminary, B2 Business Vantage, C1 Business Higher |
| Target band | **B1–B2** |
| Interface | English chrome, Arabic Explain overlay (as the TOEFL build) |
| Scope | Full 12 × 7 parity, delivered in three phased slices |

Consequences of each are in sections 4, 5, 8 and 9.

---

## 1. What is being cloned, measured

`toefl/app` is standalone and self-contained. It is *not* part of the
`courses/*` catalogue platform at the repository root — that is an older,
JSON-driven generation that shares none of this engine. So the clone is a
sibling directory, not a catalogue entry.

Measured today:

| | |
|---|---|
| Engine | 29 JS files, 7,736 lines, + `ui.css` |
| Renderers | **37** exercise kinds |
| Pages | 84 lesson pages (12 units × 7 blocks) |
| Data files | 84 (`u01/data/l1.js` … `u12/data/tw.js`) |
| Scenes | 756 |
| Tools | 18 |
| Gate | 2,945 checks, 0 failing |
| Solver | 756/756 scenes operated through their own click path |
| Accessibility | 794/794 scenes clean in both motion modes |
| Coverage | 10,397/10,995 cells of the 52-fix matrix (95%) |
| Images | 1,809 SVGs rendered at scene start; 80 more on grading; zero rasters |
| Package | 1.1 MB, runs from `file://`, no server, no internet |

### Budget convention

`book.js` carries two budgets: `BUDGET` (59 items per unit, the published
exam figure) and `BUDGET2` (106, doubled for practice volume). Every unit
sets `doubled: true`, so the gate's per-unit budget lock enforces 106. The
clone keeps this two-budget shape: an *authority* number and a *practice*
number, with the gate locking the practice number and the authority number
as its source.

---

## 2. The clone boundary, file by file

Three categories. Nothing is in a fourth.

### 2a. Verbatim — copied unchanged (23 files, ~6,900 lines)

`deck.js` · `drag.js` · `docs.js` · `audio.js` · `speech.js` · `speak.js` ·
`write.js` · `progress.js` · `motion.js` · `features.js` · `charts.js` ·
`diagrams.js` · `explain.js` · `items.js` · `items2.js` · `items3.js` ·
`items4.js` · `items5.js` · `items6.js` · `ws.js` · `gram.js` · `learn.js` ·
`ui.css`

These contain no subject matter. Checked specifically:

- `explain.js`'s `KIND` table is keyed by renderer kind (`cloze`, `tfni`,
  `orderset`), not by topic. All 37 entries port.
- `learn.js`'s `HINTS` table is likewise per-kind. Ports.
- `diagrams.js`'s `PLACE` / `MANNER` / `VOICED` tables are English
  phonetics and its `TIME` table is English tense semantics. Both are
  properties of the language, not of the course. Port.
- `gram.js`'s `JOBS` table is subject/verb/object/adverbial/linker/
  complement. Ports.
- `charts.js`'s nine renderers (bar, line, pie, piePair, scatter, bubble,
  flow, table, compareTable) are exactly what business reporting needs.
  Port with no change.

Comments in `items2.js`, `items4.js`, `items5.js` and `features.js` name ETS
task types as provenance ("ETS writing; the book's Correct the sentence").
These are load-bearing documentation, not code. They get re-pointed at the
Cambridge equivalents in a single comment pass — no behaviour changes.

### 2b. Table swap — engine kept, content table rewritten (5 files)

| File | What stays | What is rewritten |
|---|---|---|
| `icons.js` | the 24×24 stroke-only drawing mechanism, `ALIAS` resolution, `badge()` | the `P` table of 24 concept drawings; the five that recur in every unit |
| `scenes.js` | the 1000×600 parts-on-a-stage composer, one drawing style | the `P` table of 34 primitives (campus → workplace) |
| `cast.js` | the parametric portrait builder (skin / hair / hairstyle / clothes) | the `PEOPLE` table of 6 |
| `rl.js` | all 794 lines of reading/listening behaviour | one constant: the words-per-minute pace band, re-anchored (§4) |
| `ar.js` | **everything** | nothing — see below |

**`ar.js` ports unchanged.** Verified: all 76 keys are generic interface
chrome — "Check Answers", "Try again", "Explain", "Play this page", "Hear it
slowly", "Rate your own answer". There is no TOEFL-specific string in the
file. The Arabic layer is free.

### 2c. Authored from nothing (2 engine files + 84 data files + research)

| File | Note |
|---|---|
| `spec.js` | the authority, rebuilt on Cambridge (§4) |
| `book.js` | blocks, budgets and the twelve units (§5) |
| `u*/data/*.js` | 84 files, 756 scenes — the actual work |
| `research/baseline.md` | Cambridge figures with verbatim extracts |
| `research/sf3-anatomy.md` | **ports unchanged** — the 7-block architecture is unchanged, so baseline B is unchanged |

---

## 3. The one real engine change: namespacing

Ten `localStorage` keys are hard-coded to a `toefl.` prefix:

```
assets/ar.js:19        "toefl.ui.lang"
assets/deck.js:88,100  "toefl.theme"
assets/items6.js:119   "toefl.cards."
assets/learn.js:30     "toefl.learn."
assets/progress.js:17  "toefl.v1"
assets/rl.js:29        "toefl.rl."
assets/speech.js:33    "toefl.voice."
assets/write.js:122,195 "toefl.draft."
```

Served from one origin, two courses would share theme, progress, flashcard
state, saved drafts and spaced-review schedule. A learner's business-course
progress would overwrite their TOEFL progress.

Fix: a new `assets/course.js`, first in the `SCRIPTS` order in
`tools/build.js`, declaring

```js
root.COURSE = { id: "bes-sy", ns: "bes.", title: "Business English — Syria" };
```

and the ten sites become `COURSE.ns + "theme"` and so on.

**This change must also be applied to the TOEFL build and re-gated there.**
That is an honest cost of the clone, not something to hide: one commit in
`toefl/app`, 10 call sites, then `check.js` / `solve.js` / `a11y.js` re-run.
Without it the two courses are not independent. Migration for existing
TOEFL learners: read the old `toefl.*` key once if the namespaced key is
absent, then write under the new one.

---

## 4. The new authority

Today `spec.js` opens with "Source: ETS, TOEFL iBT Test Blueprint and
Specifications Document (2026) … Nothing here is a guess: if a field is
unknown it is null, not invented." That discipline is the reason the gate
means anything, and it is the property most easily lost in a clone.

`check.js` reads `SPEC` in 9 places. Those are the rules that must
re-anchor:

| Gate rule | Reads | Needs from Cambridge |
|---|---|---|
| unknown task id | `SPEC.TASKS` | the task inventory |
| CEFR band | `SPEC.bandOk` | per-task CEFR range |
| reading length | `LIMITS.readingWordsEasy` / `readingWordsComplex` | published word counts |
| readability | `LIMITS.fkHigh` | the band to hold passages inside |
| audio length | `LIMITS.audioIntermediate` / `audioExtendedMax` | published listening lengths |
| per-unit budget | `BOOK.budgetFor` | items per task |

### Phase 0 is sourcing, not coding

Before any content is written, `business-sy/research/baseline.md` is built
the way `toefl/research/baseline.md` was: the published Cambridge handbooks
for B1 Business Preliminary and B2 Business Vantage, with the task
inventory, item counts, timings and word limits extracted verbatim into a
table, each with its source URL and extraction date. C1 Business Higher is
recorded as the ceiling reference but not targeted.

Where Cambridge publishes no figure — readability bands in particular, which
ETS gave and Cambridge may not — the field is `null` and the gate rule is
either dropped or replaced with an internal consistency rule that does not
claim an outside source. **It is not back-filled with a plausible number.**
If Flesch-Kincaid bands turn out to be unavailable, the honest substitute is
a *relative* rule: no passage in a unit may exceed the unit's longest by
more than X%, which is checkable without inventing an authority.

The same two-baseline structure as the TOEFL build:

- **A. Authoritative** — Cambridge Business English handbooks → `spec.js`
- **B. Pedagogical anatomy** — Step Forward 3rd ed.'s 7-block unit
  architecture → `book.js` `BLOCKS`. Unchanged from the TOEFL build, so
  `research/sf3-anatomy.md` is copied as-is.

No publisher text or artwork is reproduced, here or anywhere in the
project — the same rule `baseline.md` already states.

---

## 5. The book

### 5a. Blocks — ids identical, names changed

Block ids stay `l1 l2 l3 l4 l5 oc tw`, so every tool, path, page filename
and data filename is unchanged. Only display names move:

| id | TOEFL | Business English — Syria |
|---|---|---|
| `l1` | Vocabulary | Vocabulary |
| `l2` | Writing | Writing |
| `l3` | Grammar | Grammar |
| `l4` | Everyday Conversation | **Meetings & Calls** |
| `l5` | Reading | **Reading at Work** |
| `oc` | On Campus | **At Work** |
| `tw` | Teamwork & Language Review | Teamwork & Language Review |

`book.js`'s `banner()` builds "LESSON 5  READING" / "ON CAMPUS" from these,
so the banner follows for free. The `oc` block's `kind` changes from
`"campus"` to `"work"`; one string, and `coverage.js` does not read it.

### 5b. The twelve units

**The grammar, affix, pronunciation and chart spine is kept exactly.** It is
Step Forward's sequence, it is already proven, and it is locked by the gate.
Only the topic each unit hangs on changes — chosen, as in the TOEFL build,
*because that unit's grammar is native to it*.

| # | Title | Domain | Grammar (unchanged) | Chart | At Work |
|---|---|---|---|---|---|
| 1 | Introducing the Business | SME company profile | present & past verb forms · yes/no questions · adjectives and adverbs | line | show you are following a briefing |
| 2 | Plans, Quotes and Promises | quotation and order confirmation | be going to & will · plans, promises, predictions · would rather | pie | disagree politely in a planning meeting |
| 3 | Comparing Suppliers | procurement and tender comparison | comparatives · superlatives | bar | ask for the evidence behind a claim |
| 4 | Order Status and Progress | logistics, order tracking | present perfect · for and since · contractions | flow | ask for help without losing face |
| 5 | Following Up and Payment | invoices and receivables | yes/no Qs with present perfect · ever, already, yet · past vs present perfect | scatter | give a helpful suggestion in a team task |
| 6 | Calls and Handovers | reception, scheduling, shift handover | separable & inseparable phrasal verbs · possessive pronouns | table | check that you have understood |
| 7 | Terms and Negotiation | contract terms, discount ladders | real conditionals · questions with them · future time clauses | pie-key | ask a procedural question at an office |
| 8 | How the Business Has Changed | relocation, market shift, rebuilding | used to · used to in Qs/As · present perfect continuous | pie-pair | report a problem to a supervisor |
| 9 | Meetings and Minutes | agendas, minutes, action points | time clauses · comparing them · and…too / not either / but | compare-table | ask for directions in an unfamiliar building |
| 10 | Records and Responsibility | documentation, licensing, audit | gerunds as subjects · gerunds vs present continuous · infinitives and gerunds | line | take a position in a discussion |
| 11 | Reports and Processes | QC, inspection, incident reports | present passive · active & passive · passive with by · be able to | bubble | acknowledge a colleague's contribution |
| 12 | Clients and Proposals | proposals, pitches, tenders | verbs + infinitives · verbs + gerunds or infinitives | pie | help someone else understand |

Why each grammar slot lands where it does:

- **U2** `will` / `going to` *is* the language of quoting and committing to a
  delivery date.
- **U3** comparatives and superlatives *are* procurement language — better
  price, shortest lead time, most reliable supplier.
- **U4** the present perfect is the tense of status reporting: "we have
  shipped", "since March".
- **U5** `ever` / `already` / `yet` is literally follow-up language: "have
  you received the invoice yet?"
- **U6** workplace phone and admin English is phrasal-verb dense — set up,
  call back, follow up, hand over, fill in, take on. The unit's
  pronunciation slot is already *linking in phrasal verbs*.
- **U7** conditionals *are* negotiation: "if you order 500 units, we reduce
  the unit price."
- **U8** `used to` + present perfect continuous is how a firm narrates
  change — and for Syrian businesses, change is the real subject matter.
- **U9** time clauses are the backbone of minutes and process description.
- **U10** gerunds as subjects is the register of policy writing: "keeping
  records is required."
- **U11** the passive is the voice of process and report writing: "the goods
  are inspected at the port."
- **U12** the affix slot is *word stress in nouns and verbs* — and the
  business vocabulary is perfect for it: EXport/exPORT,
  CONtract/conTRACT, REcord/reCORD, INcrease/inCREASE,
  PROduce/proDUCE, TRANSport/transPORT. This is the single luckiest
  alignment in the mapping.

Affix slots re-filled with business-native words: `dis-` → discount,
dispatch, disclose, dissatisfied · `-ful` → successful, careful · `-tion` →
negotiation, quotation, production, distribution · `inter-` →
international, intermediary · `un-` → unpaid, unsettled · `-al` →
contractual, commercial, financial · `re-` → rebuild, relocate,
restructure, reorder · `-er/-or` → supplier, distributor, contractor,
auditor · `-ment` → document, requirement, agreement, shipment.

---

## 6. Cast, scenes, icons

### 6a. Cast — `cast.js` `PEOPLE`

Six, as today, spanning the chain so any scene has a plausible speaker:

| key | name | role |
|---|---|---|
| `nour` | Nour Haddad | operations manager |
| `samer` | Samer Khoury | export coordinator |
| `lina` | Lina Al-Masri | finance and accounts |
| `fadi` | Fadi Barakat | warehouse supervisor |
| `rana` | Rana Darwish | client-side buyer |
| `you` | You | the learner |

**Honest note on the `accent` field.** It selects a Web Speech API voice,
and the available voices are `en-GB` / `en-US` / `en-AU`. There is no
Arabic-accented English voice in the browser. The field is therefore chosen
to keep the six voices *distinguishable from each other*, and the course
must not imply it represents how these characters would really sound. The
TOEFL build has the same constraint; it is worth stating in the README
rather than leaving implied.

### 6b. Scenes — `scenes.js` `P`

Of the 34 primitives, 24 are generic and port: wall, floor, window, door,
screen, desk, longdesk, chair, shelf, bench, counter, plant, clock, laptop,
paper, pen, globe, mic, phone, sign, building, path, person, seated, pair.

Six are campus-specific and are replaced: `podium` → `pallet` · `flask` →
`crate` · `microscope` → `scales` · `books`/`book` → `ledger`/`binder` ·
`teacher` → `manager` (standing, presenting) · `tree` stays (street scenes).

Eight are added: `container`, `forklift`, `van`, `invoice` (document
stack), `stamp` (seal), `handshake`, `headset`, `projector`.

Result ≈ 36 primitives, one drawing style, same composer. `whiteboard` is
the existing `board` renamed in data only.

### 6c. Icons — `icons.js` `P`

Eighteen of the 24 concept drawings are domain-neutral and port: time,
place, people, money, question, word, sound, write, listen, speak, read,
recall, spacing, card, error, correct, sequence, cause.

The five that **recur in every unit** are the ones that carry F50 — the same
idea takes the same icon in all twelve units, so an icon becomes a retrieval
cue. For TOEFL those were measurement, comparison, evidence, inference,
claim. For business they become:

**cost · deadline · agreement · risk · deliverable**

Plus six added: `invoice`, `delivery`, `supplier`, `approval`,
`escalation`, `margin`. Result ≈ 29 drawings; `ALIAS` grows to map business
synonyms (quote → cost, lead-time → deadline, contract → agreement, PO →
invoice) so a data file can say what it *means* rather than what to draw.

---

## 7. Audio and speech

The course generates its audio from the Web Speech API at runtime and keeps
an optional manifest of pre-recorded files keyed by content hash
(`tools/audio-manifest.js`, `assets/audio.js`'s `fileFor`/`hash`). Two
manifest files exist; no recordings are required for the course to work.

So the clone needs **no recording session**. Every `listen`, `talk`,
`interview`, `repeat`, `dictation` and `minimal-pairs` scene speaks from
its own text. If recordings are wanted later, the manifest accepts them
without a code change.

One content consequence: the `minimal-pairs` kind and the `mouthPair`
diagram need *sound* pairs, and six of the TOEFL course's twelve such
scenes turned out to be confusable *words* instead. Business English has
excellent material for both: sound pairs for Arabic-L1 learners (`p`/`b` in
*port*/*board*, `v`/`f` in *vat*/*fat*, `ʃ`/`tʃ` in *ship*/*chip*) and word
pairs that cost money (*principal*/*principle*, *assure*/*ensure*/*insure*,
*discreet*/*discrete*, *compliment*/*complement*, *stationary*/
*stationery*). Plan for ~8 sound-pair scenes so the mouth diagrams earn
their place, and 4 word-pair scenes.

---

## 8. Arabic

`ar.js` ports unchanged (§2b). The Explain popup's Arabic translations of
key terms are per-scene content and are authored with the scenes — this is
where the real Arabic work is, and for a Syrian audience it is the most
valuable single feature in the course.

Business terminology needs decided Arabic equivalents, fixed once in a
glossary and used consistently: invoice (فاتورة), quotation (عرض سعر),
purchase order (أمر شراء), lead time (مدة التوريد), terms of payment (شروط
الدفع), bill of lading (بوليصة شحن), letter of credit (اعتماد مستندي),
deliverable (مُخرَج), stakeholder (جهة معنية). A one-page
`business-sy/GLOSSARY-AR.md` written in Phase 0 and enforced by a new gate
rule (an Arabic gloss for a term must match the glossary) prevents the same
term drifting across twelve units.

Full RTL mirroring is **not** in this plan, per the decision in §0. If it is
wanted later it is a phase of its own: 37 renderers, drag-and-drop zones,
the dot stepper, nine chart kinds and six diagrams all mirror, and the
screenshot sweep doubles.

---

## 9. Phases

Each phase ends at the same gate the TOEFL build uses. A phase is not done
until all four are green.

```
node tools/check.js        # structure, budget, authority, reserved names
node tools/solve.js --lab  # every exercise operated through its own click path
node tools/a11y.js --lab   # keyboard and screen reader, both motion modes
node tools/shots.js        # screenshot sweep, no clipping
node tools/coverage.js     # the 52-fix matrix
```

| Phase | Work | Exit |
|---|---|---|
| **0. Authority** | Source the Cambridge handbooks into `research/baseline.md` with verbatim extracts. Write `spec.js`. Write `GLOSSARY-AR.md`. Copy `sf3-anatomy.md`. | `spec.js` has no invented field; every unknown is `null` |
| **1. Skeleton** | `course.js`; namespace the 10 sites **in both courses**; `book.js` blocks + budgets + 12 units; re-anchor the 9 `check.js` rules; recompute `coverage.js` denominators. | TOEFL course still 2945/0 after namespacing; new gate runs on an empty book |
| **2. Vocabulary of the world** | `cast.js`, `scenes.js` primitives, `icons.js` concepts + aliases. | A `match` scene and a `discussion` scene render with the new cast and furniture |
| **3. Units 1–4** | 28 pages, ~252 scenes. | Full gate green; package built and verified from clean extraction |
| **4. Units 5–8** | 28 pages, ~252 scenes. | Full gate green |
| **5. Units 9–12** | 28 pages, ~252 scenes. | Full gate green |
| **6. Report** | `INTERACTIVE-REPORT.md` equivalent: coverage, counts, what was deliberately left undone. | Honest numbers, including every gap and its reason |

Phase 1's TOEFL re-gate is the one step that touches shipped work. It goes
first in its own commit so a regression there is unambiguous.

---

## 10. What ports for free — verified, not assumed

This is the reason a clone is worth doing rather than a rebuild.

- **All 37 renderers.** No renderer reads a topic, a task id or a unit.
- **The entire 52-fix QA matrix.** `coverage.js` was audited today: it has
  **no** reference to any TOEFL task id. One predicate reads
  `s.task != null` — existence, not identity. All other predicates key on
  `s.kind` or on scene fields. The matrix ports unchanged; only its
  denominators recompute.
- **The Explain popup**, all four panels, generated per scene.
- **The Arabic interface layer**, all 76 chrome strings.
- **The six derived diagrams** — timeline, mouthPair, setDiagram, flow,
  slots, twin. They derive from scene data, so they appear in the new course
  automatically wherever the data states the same relation. Business content
  should *feed* them: `flow` wants the order-to-delivery process, `slots`
  wants sentence-shape work in every `orderset`, `timeline` wants the tense
  units (2, 4, 5, 8), `twin` wants paraphrase of client correspondence.
- **The nine chart renderers** — and business reporting uses bar, line, pie
  and table more heavily than academic content did.
- **The spaced-review spine** (`progress.js`), calibration, worked
  examples, fading support, miss logging (`learn.js`).
- **The whole toolchain**: 18 tools, including the three-tool discipline of
  build / check / solve, plus `a11y`, `coverage`, `shots`, `pack`.
- **The packaging**: 1.1 MB, `file://`, no server, no external request.

Engine lines that change: **~10** (the namespace sites), plus one `rl.js`
constant and a comment pass. Out of 7,736.

---

## 11. Editorial guardrails

These are content rules, and they belong in the plan because getting them
wrong is the way this project could do harm.

1. **Compliance, never evasion.** Unit 10 (Records and Responsibility) and
   Unit 7 (Terms) touch export documentation, licensing and declarations.
   The course teaches how to *complete paperwork correctly, declare
   accurately and ask a regulator a clear question*. It does not teach
   workarounds, mis-declaration, or how to structure a transaction to avoid
   a control. If a scene cannot be written without implying the latter, it
   is cut.
2. **No politics in the business content.** Units describe trade, logistics,
   invoicing and meetings. Scenes do not take positions on the conflict, on
   any party to it, or on sanctions policy. Place names are used as
   logistics facts (a port, a border crossing, a city) and nothing more.
3. **Realistic without being bleak.** Syrian business English should reflect
   real conditions — currency volatility, long lead times, cash and
   remittance, rebuilding, intermittent power — because that is what makes
   it useful rather than generic. It should do so as ordinary commercial
   problem-solving, which is what it is for the people doing it.
4. **No publisher text or artwork**, here or anywhere, same as
   `toefl/research/baseline.md` already states. Structural facts only from
   the Cambridge handbooks.
5. **Named people are fictional.** The six cast members are invented. No
   scene uses a real company, official, or institution as a character.
6. **Arabic is checked by a speaker.** Machine-translated business
   terminology is the most likely source of an embarrassing error in the
   finished course. The glossary (§8) must be reviewed by a native Syrian
   Arabic speaker with business exposure before Phase 3 ships.

---

## 12. Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Cambridge publishes fewer hard figures than ETS | the gate's budget lock and readability rules lose their source | Phase 0 finds out *before* content is written; unknown fields go `null` and the rule becomes a relative-consistency rule rather than an invented absolute |
| Namespacing regresses the TOEFL course | shipped work breaks | Its own commit, first, with all four gates re-run on `toefl/app` |
| Business content drifts into generic "international business English" | the Syria framing is the whole point and the easiest thing to lose | Each unit's `domain` column in §5b is a contract; a scene that would work unchanged in any country is a scene to rewrite |
| 756 scenes of new content is the bulk of the work | everything else is ~2 weeks of engineering and this is not | Phased 4 units at a time, each slice fully gated, so partial work is always shippable |
| Arabic glossary inconsistency across 12 units | a term drifting undermines the course's most valuable feature | `GLOSSARY-AR.md` plus a gate rule binding scene glosses to it |
| The six derived diagrams get fewer scenes than in TOEFL | F5c regresses | Write data that *states relations* — processes, orders, memberships, time — so the diagrams derive. Target: beat the TOEFL course's 90 diagram-bearing scenes |

---

## 13. Deliverables

- `business-sy/app/` — the course, same shape as `toefl/app`
- `business-sy/research/baseline.md` · `sf3-anatomy.md`
- `business-sy/GLOSSARY-AR.md`
- `business-sy/UNIT-MAP.md` — the §5b table expanded per block
- `business-sy/REPORT.md` — final honest numbers
- `business-sy/business-english-syria.zip` — 1-click, offline, ~1.1 MB
- One commit in `toefl/app` namespacing storage, re-gated

