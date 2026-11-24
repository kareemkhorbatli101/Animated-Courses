# Build record — English for Commercial Correspondence (International Edition)

Generated 22 November 2026. Six books, ten units each, sixty units in all.

## 1. Measured output

| Book | Level | Words | Figures | Graded items | Answer-key blocks | Mean sentence | Over cap |
|------|-------|-------|---------|--------------|-------------------|---------------|----------|
| 1 | A2.1 | 56,946 | 153 | 840 | 260 | 11.17 (band 8.5–12.5) | 22 of 26+ (2.7%) |
| 2 | A2.2 | 57,968 | 153 | 840 | 260 | 11.41 (band 8.5–12.5) | 30 of 26+ (3.9%) |
| 3 | B1.1 | 61,147 | 153 | 840 | 260 | 12.70 (band 11.5–16.5) | 4 of 34+ (0.5%) |
| 4 | B1.2 | 61,696 | 153 | 840 | 260 | 12.87 (band 11.5–16.5) | 9 of 34+ (1.2%) |
| 5 | B2.1 | 64,118 | 153 | 840 | 260 | 16.93 (band 15.0–21.0) | 0 of 44+ (0.0%) |
| 6 | B2.2 | 63,929 | 153 | 840 | 260 | 15.87 (band 15.0–21.0) | 0 of 44+ (0.0%) |

**Series: 365,804 words · 918 figures · 5,040 graded items · 1,560 answer-key blocks ·
1,200 distinct vocabulary terms · 60 distinct grammar points · 60 distinct AI capabilities.**

PDFs: 196, 196, 196, 197, 198 and 197 A4 pages — 1,180 pages in all.

Register was not asserted, it was measured: every book's mean sentence length falls inside
its CEFR band, and sentences over the band's cap stay under the 5% ceiling in all six. The
two B2 books were measured at 13.94 and 14.2 on first assembly — below the B2 floor — and
were brought into band by joining short adjacent sentences in the reading, extended reading,
skill page, case briefs, voices and conversation settings, not by adding words.

## 2. How the books were generated

The series is written as data and assembled by a generator, so that the gates below can be
run against the finished book rather than against a draft.

* `series.py` — the series constants: the six books, the eleven-person cast on both sides
  of the deal, the invented firms, the port and market list, the fault vocabulary, the CEFR
  bands and caps, the word-count windows, the vocabulary and grammar and AI ladders.
* `units/<CODE>/uNN.py` — one module per unit, sixty in all, each holding the twelve parts
  of that unit as plain Python data: reading, twenty vocabulary terms, grammar rule and
  nine gaps and six choices, two twelve-line dialogues, three speaking tasks, a
  six-paragraph extended reading, a six-line guided-writing specification, the AI
  capability and its boundary line, the Decision Room case, the Brief Lab, the Money
  Conversation, the six-skill review, the can-do statements.
* `figs.py` / `art.py` — every figure drawn as SVG at 3,000 px wide and rasterised with
  cairosvg. No stock images; 153 figures per book, all generated.
* `render.py` / `build.py` — direct-formatting OOXML, no Word styles, so the files open the
  same everywhere.
* `make.py` — builds one book; `qa.py` — the gate suite, per book and across the series.

Per-unit working loop: `free.py` (clears a unit's twenty terms against the 1,200-term
ledger before drafting) → draft the module → `check.py` (the unit's own gates) → after the
tenth unit `fixcase.py`, `mcqfix.py`, `make.py`, `qa.py`, then `diag2.py` to clear
stem-repetition, duplication, thinness and length warnings.

## 3. Gates every book passed

Twenty-three per-book gates, then six series gates. `qa.py all` returns
**RESULT : ALL CHECKS PASS**.

Per book: unit count and part count; figure count; word window per level; mean sentence
length inside the CEFR band and long sentences under 5%; twenty vocabulary terms per unit
with no repeat anywhere in the series and no duplicate matching stem or ending; grammar
point unique across the series; nine gaps and six choices with exactly one defensible key;
answer-key completeness (260 blocks, every exercise); two dialogues of twelve lines each;
reading length window; **precision** (no model answer may use a vague quantifier without a
number); **no forecasting** (no claim about what a market, a buyer or a technology will do);
**no live political reference**; AI capability carried by the extended reading *and* the
skill page *and* the narrative, not asserted in one place; a boundary line of at least
fourteen words containing a negation, on every capability; four dialogues per book ending
on an objection nobody answers; the Money Conversation complete in all ten units with no
repair phrase reused more than twice.

Series gates:

* **Vocabulary** — 1,200 distinct terms, no term taught twice, none used before it is
  introduced.
* **Grammar** — 60 distinct points, in ascending order of difficulty.
* **AI** — 60 distinct capabilities, each with its own boundary line.
* **Fault ladder (gate 19)** — each of the eight precision faults diagnosed in at least
  twelve of the sixty Brief Labs: unscoped set 35, unbounded quantity 24, unstated
  criterion 40, undefined done 18, ambiguous referent 20, missing condition 15, unstated
  exception 13, hidden assumption 15.
* **Dissent (gate 22)** — across the sixty Decision Rooms, the manager or founder is wrong
  59 times (floor 20) and the sceptic is right and the plan is dropped 59 times (floor 12).
  The senior person in the room is not a device for delivering the answer.

## 4. Editorial rules held throughout

1. **Nobody's first language.** The series premise is that both sides are working in a
   second language, so every unit treats a misunderstanding as a drafting fault rather than
   a reading fault: the time zone that was not named, the figure quoted without its basis,
   the clause with two negatives, the four synonyms for one product.
2. **No forecasting.** The books teach how to write when a market, a bank, a rate or a
   route changes; they never say what any country, buyer or technology will do. Three
   drafted boundary lines were rewritten when gate 17 caught them.
3. **No live political reference.** Invented firms in real cities; no party, ministry or
   current office-holder. Export permission is treated where it belongs — as a licensing
   requirement that certain technical data carries, with no country named as a target.
4. **Precision has a vocabulary.** Eight named faults — unscoped set, unbounded quantity,
   unstated criterion, undefined done, ambiguous referent, missing condition, unstated
   exception, hidden assumption — taught in a ladder: three of them in Book 1, five by
   Book 2, six by Book 3, all eight from Book 4 on. Every Brief Lab diagnoses exactly three
   fault types, two phrases each. One consequence is visible in `ALIGNMENT.md`: Book 1 has
   only three faults in play and each lab must diagnose three, so all ten of its labs carry
   the same trio. The variety begins in Book 2 and is wide from Book 4 on. This is the
   ladder working, not a gap in it — a beginner meets the same three faults ten times before
   a fourth is added.
5. **The boundary line.** Each of the sixty AI capabilities is paired with the part of the
   work no system can be handed: what a courteous "that is understood" meant in the room,
   whether a signatory had authority to bind a company in his own market, which three
   exclusions this buyer has been burnt by before, whether a licence is required at all.
6. **The Money Conversation.** Part 10 of every unit is the spoken round that happens after
   writing has failed — a disputed discount, a rejected document, a claim out of time, an
   unauthorised disclosure, a minute somebody wants changed, a bid that was never opened —
   with a cap, a ladder, six things to hold, a red line and a five-point score.
7. **Authority is not the answer.** See gate 22 above.

## 5. Known limits

* Audio is specified but not recorded: listening tasks carry a transcript in the key.
* The figures are generated vector art, deliberately diagrammatic; they are not
  photographs of any firm.
* Document specimens (bills of lading, credits, certificates, tender dossiers, compliance
  questionnaires) are faithful in structure and field content but are set as teaching
  exhibits, not as reproductions of any bank's, carrier's or purchaser's actual form.
* Legal material — which law applies, which text prevails, force majeure, conditions
  precedent, agency compensation — is taught as correspondence practice, in the register a
  correspondent needs. It is not legal advice, and every unit that touches it says in the
  text that the question goes to a lawyer in the governing law's country.
