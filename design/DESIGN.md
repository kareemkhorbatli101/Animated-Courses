# Design document · English for the Dental and Pharmacy Professions

The architecture both series are built on. Written once, reused for Medicine,
Nursing and Hospital Management later. Every rule here exists because something
in the First Edition went wrong, or because the research in RESEARCH_NOTES.md
pointed at it.

---

## 1. Two populations, two syllabi, one inventory

| | Practitioner | Student |
|---|---|---|
| Who | qualified, linguistically weak, professionally expert | enrolled, linguistically weak **and** professionally novice |
| Their task | do the job in English | learn the subject in English, then do the job under supervision |
| Sequenced by | the patient visit and the working week | the curriculum |
| Levels | A2.1 → B2.2 | A2.2 → C1.1 (practitioner A2.1 is the shared on-ramp) |
| Dominant genres | consultation, instruction, record, letter, notice | lecture, textbook, definition, exam answer, case report, viva |
| Lexis | clinical lexis in use | clinical lexis **plus morphology as a decoding system** |

They share: one domain inventory per profession, one cast and world, one unit
skeleton, one set of level gates, one scaffolding standard, one recycling
schedule. They do not share a unit sequence, and no student unit is a
practitioner unit "made academic".

---

## 2. The unit skeleton

Identical stage order in both series; the content of each stage differs.

| # | Stage | Practitioner | Student |
|---|---|---|---|
| 1 | Warm-up | 3 questions from the learner's own practice | 3 from the lecture or clinic they are in |
| 2 | **Preview** | lexical set + phrase bank, defined, exemplified, collocated — **before any text** | the same, plus the morphology that generates more terms |
| 3 | Vocabulary | 4 tasks: recognition → matching → controlled production | 4 tasks, morphology-driven |
| 4 | Grammar | one point, drawn out of the phrase bank | the grammar of the discipline |
| 5 | **Listening ×3** | patient exchange · colleague handover · telephone | lecture extract · tutorial · clinical supervision |
| 6 | **Speaking ×3** | scripted model → substitution → role-play with a task | present a structure · explain a process · be questioned |
| 7 | **Reading ×3** | notice · record or form · professional guidance extract | textbook passage with labelled figure · case · procedure |
| 8 | **Writing ×3** | the note · the message · the letter | definition · short exam answer · case report to a rubric |
| 9 | Extras | data box · AI page with boundary line · Brief Lab (B1+) · Decision Room (B2) | the same, re-pointed at study work · Precision Lab |
| 10 | Review | unit check + spaced recycling from 3 and 7 units back | the same |

**Why Speaking sits before Reading.** The preview and listening give the
learner the language in the mouth first; the reading then consolidates it in
the eye and extends it. Writing comes last because it is the hardest output and
should draw on everything above it.

---

## 3. The two threads

Every unit advances both, and the data model records which items belong to
which so the gates can check coverage.

**Domain thread** — the physical and procedural world: anatomy and structures,
instruments, materials, equipment, imaging, prostheses, procedures, documents,
settings, roles.

**Communication thread** — the functions, across settings: greeting and
identifying · eliciting · explaining · instructing · warning · checking
understanding · reassuring · refusing · apologising · referring · handing over ·
recording · negotiating · reporting · defending a judgement.

A2 takes the concrete end of both and nothing else. Governance, accountability,
consent disputes and professional politics — the material that wrecked the First
Edition's A2 — begin at B1.2 and carry the B2 books.

---

## 4. Vocabulary architecture

Per unit, declared in the data:

- **productive core: 8–10 items.** Defined, exemplified in a sentence from the
  unit's own world, given with one collocation, practised in three task types,
  recycled on the schedule below, and assessed productively in the unit review
  and the progress test.
- **receptive set: up to 10–14 items.** Met in the texts, glossed in place and
  in the book glossary, assessed only for recognition.
- **phrase bank: 8–12 functional chunks**, treated as single items.
- **morphology (student series): 3–5 word parts** per unit from the first book,
  grouped by system.

Every item carries: headword, part of speech, a real definition in A2-plain
English, an example in use, one collocation, its set, its thread, its level of
first appearance, and its recycling slots. **An item whose "meaning" is an
aphorism rather than a definition cannot be expressed in this model, which is
the point.**

Book totals: 60–100 productive items per book is the design range, well under
the First Edition's 200 and far above its useful content.

---

## 5. Recycling schedule

Driven by the spacing evidence: three or more encounters, later gaps long,
interval *shape* deliberately not optimised.

| Encounter | Where |
|---|---|
| 1 | the unit's preview, then at least two of its tasks |
| 2 | the unit review |
| 3 | the review section of the unit 3 later |
| 4 | the review section of the unit 7 later |
| 5 | the book's end review and the progress test covering it |

The recycling gate counts encounters and measures gap length. It does not
enforce expanding intervals, because the evidence does not support one shape
over another.

---

## 6. Scaffolding standard

Every task in both series carries four things, enforced by gate:

1. **a rubric** — plain imperative, one sentence, saying exactly what to do;
2. **a worked example** — the first item done, visibly;
3. **a model** — an answer, a model text, or a model exchange;
4. **a checklist** — the success criteria the learner checks their own work against.

Nothing is left to "discuss the following". Directions name the number of items,
the form of the answer, and whether it is done alone, in pairs or in writing.

---

## 7. Level gates

Replacing gates that measured the wrong thing. Per book, per level:

| Gate | A2 | B1 | B2 | C1 |
|---|---|---|---|---|
| Mean sentence length | 8.5–12.5 | 11.5–16.5 | 15.0–21.0 | 18.0–25.0 |
| Sentence cap | 26 | 34 | 44 | 52 |
| **Concept load** | no abstract noun phrase as a headword; no governance topics | abstract permitted in one stage | unrestricted | unrestricted |
| **Lexical level** | productive items concrete and high-frequency | — | — | — |
| Dialogue turn (practitioner) | ≤ 12 words, yes/no answerable | ≤ 18 | ≤ 28 | ≤ 35 |
| Reading length ×3 (practitioner) | 220–320 words | 320–450 | 450–650 | — |
| Reading length ×3 (student) | 450–650 | 650–900 | 900–1,200 | 1,100–1,500 |
| Listening script ×3 | 180–260 | 260–400 | 400–600 | 550–800 |
| **Dissent** (an unresolved professional objection) | forbidden | from B1.2 | required | required |

Plus, at every level: the **preview gate** (no text before its set and phrases),
the **scaffolding gate** (rubric + example + model + checklist on every task),
the **recycling gate**, the **domain-coverage gate** (the inventory ticked off
across the book), the **figure gate** (count, non-decorative, captioned,
cross-referenced, alt text, licence recorded), the **3×3 gate** (three distinct
text types per skill), the **answer-key, transcript and glossary completeness
gates**, and the **Tier A sourcing gate** from SOURCE_POLICY.md.

---

## 8. What carries over from the First Edition

Kept: the harness (figure engine, answer-key assembly, rendering, ledger, QA
framework); the AI page with an explicit boundary line, from B1 up; the Brief
Lab and its eight precision faults, from B1.2 up; the Decision Room at B2; data
boxes with attributed sources; the invented-world rule.

Dropped: coined-phrase vocabulary with aphoristic glosses; A2 governance
content; the rule forcing an unresolved argument into every unit at every level;
essays about a step in place of scripted exchanges; gendered role glosses.

---

## 9. Open questions carried into the pilot

1. Whether 3 readings + 3 listenings + 3 writings + 3 speakings is teachable in
   the time a real class has, or whether the unit needs a declared core route.
   The teacher's book's two timing routes are the hedge; the pilot tests it.
2. Whether the student A2.2 reading-length band (450–650 words ×3) is too heavy
   at that level even with full preview support.
3. Whether the productive/receptive split lands at 8–10, or should be 6–8 at A2.

These are stated so the pilot can answer them with evidence rather than taste.

---

## 10. What the pilot established (measured, not projected)

Four units built end to end: Dentists 2e A2.1 units 1–2, Dental Students A2.2
units 1–2, each with teacher's notes written after it.

### The three open questions, answered

**1. Register bands must be split into production and reception.** The student
A2.2 unit failed the register gate at 14.51 words a sentence against the A2 band
of 8.5–12.5. Rewriting it into that band would have stopped it being textbook
prose, which is the thing the student series exists to teach. A learner reads
longer sentences than they produce, especially when every term has been
previewed and glossed. The gates now carry `BANDS_P` (production, the
practitioner series) and `BANDS_S` (reception, the student series), one step
wider at the same CEFR level, with a cap of 30 rather than 26 at A2. **This is
an architecture change, and it came from the pilot, not from taste.**

**2. 3×3×3×3 does not fit a ninety-minute lesson, and should not be made to.**
A unit is a bank, not a lesson plan. The teacher's book now carries two routes,
and the per-unit notes name *which* listening, reading and speaking to keep on
the short route and why. The three-of-each standard stays: it is what makes the
book usable across a term rather than a week.

**3. The productive core is right at 8–10.** Both A2 units carry eight and the
preview takes 20 minutes in the practitioner book and 22–25 in the student book.
Six would have been thin; twelve would not have fitted.

### Measurements that correct the plan's arithmetic

| | Planned | Measured |
|---|---|---|
| Words per practitioner unit | 6,000–7,000 | **6,460** |
| Words per student unit | 8,000–14,000 | **7,600** |
| Printed pages per unit | not estimated | **35** |
| Figures per unit | 24–30 | **18–20** |
| Teacher's notes per unit | 3,000–5,000 words | **1,800** |

Consequences: a ten-unit book runs to about **350 printed pages**, not the
First Edition's 200 — the skills core roughly doubles the extent. Teacher's
books are **lighter than planned**, around 20k words a title rather than 35–50k,
because the procedure is written tightly and the answer key is generated. The
student series is not dramatically longer than the practitioner series in words;
it is longer in *reading*, which is where its weight sits.

### The two timing tables

The practitioner preview takes 20 minutes; the student preview takes 22–25, for
the same eight items, because in the student series six of the eight are new
*concepts* and not only new words. The teacher's book front matter should carry
two timing tables, not one.

### What the loop caught that no gate could

Writing the teacher's notes after each unit found four things the gates passed:

- a figure sitting inside a speaking task that the task never asked anybody to
  look at (fixed: the task now requires pointing at it and naming a layer);
- a listening too long to play three times in the lesson it belongs to (fixed in
  the route, with the transcript given out on the third pass);
- a vocabulary task that asks learners to produce FDI numbers before the lecture
  that teaches the system (the rule is carried in the task instruction, so it
  works, but the numbering belongs on the preview page in the full book);
- the best text in a unit sitting third in the reading sequence, where a short
  route never reaches it.

This is the argument for the loop. Three of those four are invisible to any
automated check, and all four were found by writing down how the lesson runs.

### Carried forward as open

- the collision figure is now used in three places across two series; shared
  figures should live in one module, not be duplicated per series;
- "four six, not forty-six" is taught without its reason, and a safety point
  given without a reason is one learners drop when busy — it should become a
  line in the student book;
- three readings of 450–650 words at student A2.2 may still prove too much in
  practice; the route names one as the class text, which is the hedge.

---

## 11. Second pilot round: the visual and level standard

### What changed

**Every exercise now carries two visuals**, and both are generated from the
exercise itself so neither can drift from the answer key:

- an **answer bank** — the answers in no particular order, as a table, which is
  standard coursebook support and doubles as the shuffle for matching tasks;
- **picture cards** — the same answers as icons, so a learner can point before
  they can say.

A unit now carries about **100 figures**, and a two-unit build runs to 205. A
ten-unit book is about **650 printed pages**, against 350 in the first pilot
round and 200 in the First Edition. That is the price of the standard and it is
worth stating plainly before six books are written to it.

**Conversations are drawn.** Where a recording or a role-play has two speakers,
both appear with their faces, names and roles, and the first turns are shown in
speech bubbles. The cast is defined once per series, so the same person has the
same face in every unit of every book.

**Grammar has a mnemonic figure** before the rule list: three cards, each with
the form, the job it does, a picture and an example.

**Each of the ten parts ends on a page boundary**, closing with a figure that
teaches something rather than with white space.

**The review is balanced across the four skills** — reading, listening,
speaking, writing — with a visual on every activity, and the listening activity
sends the class back to a recording they have already met rather than adding a
new one.

### The level guard

Nothing a learner reads may sit above the book's band unless it is (1) taught in
that unit, (2) in the series' domain inventory, or (3) on the unit's short list
of deliberate challenge items, which is capped at eight. The guard strips
suffixes and prefixes, maps irregular forms, and splits compounds, so *lunchtime*
passes on *lunch* and *time*.

**When it fires, the fix is to paraphrase, never to thin.** Clearing it across
the four pilot units changed about twenty sentences and removed no content:
*collide* became *can be mixed up*; *symbol* became *sign*; *ambiguous* became
*can be read in two ways*; *a formality* became *a small thing you do quickly*;
*transposed the digits* became *wrote the two digits the wrong way round*.

Two principled extensions were needed for the student series, and only for it:

- **an academic set** — define, classify, describe, evidence, structure and the
  rest. A course whose job is to teach a student to define and classify cannot
  bar the words for doing so.
- **a lexical band one step above the production band**, for the same reason the
  register band was widened: the student reads textbook prose in which every
  term has been previewed and glossed.

The practitioner series keeps the production band exactly, with no academic set.

### Layout faults fixed

The strap line under a unit band was not aligned to the band and ran past the
measure; it now has its own indented style. The term and its example ran
together on the preview page; the term is now bold, followed by a dash and the
sentence. A speaker's name was printed on every line including consecutive lines
by the same speaker; it now prints only when the speaker changes. The cover
overflowed; it is rebuilt with every string fitted to the measure before it is
drawn, and the dead space is filled with an icon strip.

---

## 12  Third pilot round: the page, the case and the glossed teacher's book

This round answers a review of the second pilot that listed, in order: hair and
labels overlapping the drawn people; figure type too small against the body
text; speech lines falling outside their bubbles; part 9 vague; and white space
still left at the foot of a part. It adds the third unit of each book and
rewrites the teacher's book. Every point is recorded here with what was
actually changed, so that nothing is quietly dropped.

### 12.1  The drawn people

`art2.person()` was rewritten. Hair is no longer a free-floating shape near the
skull: `_arc_cap()` draws it along an arc of an ellipse concentric with the head,
so the two outlines cannot part company, and the hairline is a curve that meets
the skull at the temples. Everything that belongs behind the head — a plait, a
bun, a headscarf drape — is drawn before the head, so it can never land on a
cheek. The draw order is now: back hair, neck, tunic, collar, ears, skull,
front hair, face, mask, glasses.

`person_box(s, style)` returns the drawn extent of a person, and
`person_card()` is the single function every cast strip, conversation, case
panel and cover now goes through. A caller gets the body's real bottom edge and
places the name below it. **No caller can print a label across a tunic**, which
is what the review caught on the cast page and in the conversation figure.
Cards in a row are given a uniform height and the drawing is centred in it.

### 12.2  Figure type, measured in points

One SVG unit, at the printed width of a figure, is 0.1505 pt. The first round
set figure labels at 40 units, which prints at **6 pt** against 11 pt body text —
which is exactly the complaint that the matching choices looked larger than the
table they belonged to. `art2` now defines `pt()` and the named sizes
`FS_TITLE / FS_HEAD / FS_BODY / FS_SMALL / FS_NOTE`, and **no figure sets a bare
number any more**. Figure body text prints at 10 pt.

Alongside that, `wrap_w()` wraps by measured width instead of counting
characters, `fit()` shrinks a string until it provably fits, and `bubble2()`
sizes itself from its own wrapped text and returns its height. The pilot's
speech bubble drew a fixed 100-unit box and truncated to two lines; that is how
a third line ended up printed outside the border, and it cannot now happen.
`mini_table`, `icon_cards`, `set_plate`, `phrase_box`, `step_sequence`,
`contrast`, `morph_builder`, `grammar_mnemonic`, `form_annotated` and
`conversation` were all re-laid out against measured text.

### 12.3  Part 9: three cases, not one fact

"One thing worth knowing" was a fact in a box. A fact is not a task: it gave a
class nothing to do and nothing to disagree about. Part 9 is now **three cases**
per unit. Each has a situation at level, a drawn `case_panel` showing who is in
it and what is on the record, a second visual of the words the talk needs,
**three open discussion questions**, a language box of frames for holding a
position, and — where the case rests on professional practice — the cited
guidance that used to sit in the data box, so the sourcing survives.

`gates2.check_cases` enforces it: three cases, three questions each, no question
answerable yes/no, a situation of 45–140 words, one or two people, a non-empty
language box, at least four words named, and a closing point.

### 12.4  No page break without a figure, and the figure is measured to the page

The rule is now structural: **`endpart()` is the only function in `build2.py`
that writes a page break, and it always emits a closing figure first.**
`check_breaks` fails a build where the count of breaks and the count of closing
figures differ. Every one of the ten parts, and every listening, role-play,
reading, writing task and case inside them, ends on a recap figure built from
that part's own content.

How big that figure should be is not guessable, so it is measured:

* **Pass 0** builds the book with `--norecap`: the closing figures are left out
  and only their captions remain. `fitpass.py` converts the result to PDF,
  finds the page each caption landed on, rasterises it and measures the lowest
  row of ink. That gap is the room the part actually leaves.
* **Pass 1** rebuilds with each gap as a target height. `part_recap()` grows
  into it — type first, then pictures, then spacing — or compresses into it by
  dropping the icon strip and then the question strip.
* **Passes 2 and 3** re-measure and correct, and a final `--verify` pass writes
  what the printed pages look like. `check_fit` fails any part that still
  leaves more than 42 pt of white at the foot of its page.

A figure is capped at one page's printable height, and the picture paragraph
carries `w:keepNext` so a figure and its caption cannot be split.

### 12.5  The level guard, completed

Clearing three new units found real gaps in the word lists rather than real
drift. `levels._forms()` now strips affixes **to a fixed point** rather than
once, so a word carrying both a prefix and a suffix — *uncovered*, *rewritten* —
reaches the base the lists hold. The B1 list gained the ordinary English it was
missing (*alive, depth, overlap, vertical, award, parallel, heal, band, script,
whose, cells, numb, drill, socket, easily, continuous, simply, abroad, aloud*),
the student series' ACADEMIC set gained *composition, structural,
interchangeable, memorise, stimulus, consequence, examinable, scheme, marker,
clause, defensible, division, dictate*, and the dental DOMAIN gained *canal,
chamber, inflamed, recession, opposing, regrown, exposed, tubule, ligament,
mineral, gum, rinse, allergy, painkiller, mask*. `bit → bite` was added to the
irregular map.

The paraphrase-first rule held. Where the guard fired on content rather than on
a list gap, the sentence was rewritten and nothing was cut: *in one breath* →
*together, without stopping*; *could defend* → *could give good reasons for*;
*a patient whose mouth is open* → *a patient with an open mouth*; *saying
“unknown”* → *that says nothing at all*.

### 12.6  The teacher's book

Rewritten, and rewritten against the units rather than after them. Each unit's
notes now carry: a ninety-minute route as a drawn sequence; what to put on the
board before the class comes in; stage-by-stage procedure; **a bilingual
glossary with Syrian clinical usage first where it differs** from the standard
term; **the Arabic-speaker interference points** that this unit actually
produces, each with the wrong form, the right form, the reason and an Arabic
note; an expansion list that is never tested; five ways to run the material;
**a sample answer for every open task**, with Arabic where it helps; what they
get wrong; pronunciation; what else to do with the figures; a page for the
teacher who is not a clinician; **notes on all three cases** — what a class says
first, the positions that can be defended, where to push, the language to feed
in, an Arabic prompt for when the discussion stops, and a drawn opinion line for
a class that will not start; a marking table; homework; a photocopiable; and the
defects the writing of these notes found in the unit itself.

`render.py` gained `arun`, `ar_para`, `bilingual`, `gloss_table`,
`sample_answer` and `trap`, all setting Arabic as complex script so Word shapes
and orders it correctly whatever the Latin font around it.

The feedback loop is real and is printed. Writing the Dentists Unit 3 notes
showed that the unit's own model for 6.3 stopped before the saying-back, that
*an allergy from* was a predictable transfer the unit never warned about, that
the form had no box for a number of painkillers, and that three of the unit's
words turn on /p/, which Arabic does not have. All four were fixed in the
learner's book.


### 12.7  Two faults the built book showed that no gate could

Both were found by reading the finished PDF, which is why the PDF is read.

**Figure files collided across units.** A figure's filename was built from its
tag and its figure number, and the number restarts at every unit while the
tags repeat. Unit 3's case figure therefore overwrote Unit 1's on disk, and
because the archive is assembled at the end of the build, *both* references
resolved to whichever had been written last. Unit 1 of the Dentists book shipped
a panel headed with Unit 3's case. The filename now carries the unit number.
No gate could have caught this: every count, caption and cross-reference was
correct, and only the pixels were wrong.

**A term passed where an icon name was expected.** `part_recap` is given the
unit's own words as often as it is given icon names, and an unknown name fell
through to a lettered circle - so the recap after the preview showed four
circles each containing the letter T, for "the". `as_icon()` now resolves
anything through `pick_icon`, and an icon-name registry makes the test explicit.

### 12.8  What a closing figure does with a whole page

A part whose content ends near the foot of a page pushes its closing figure to
a page of its own, and the figure then has about 700 points to fill. Three
summary lines in that space is air, not design. The figure now spends the room
in this order: the type grows first, then the pictures, up to the width they
have to share, and what is left becomes **the part's own words as retrieval
cards** - eight for the preview and the review, the task answers for a
vocabulary or reading part, the checklist for a role-play or a writing task,
the case's words for a case. A full-page recap is therefore a retrieval page,
and the measurement loop reports 34 pt as the worst white at any part ending
in either book.

## 13  Fourth pilot round: studied as a learner, taught as a teacher, five units

The third round fixed how the page looks. This round asked a different
question: if somebody actually sat down and worked through the book, would the
work be worth doing? The books were studied unit by unit against eight
frameworks — Nation's four strands, Tomlinson's principles, Littlejohn's three
levels, Bloom revised, ICAP, CEFR, Cunningsworth's checklist and Dudley-Evans &
St John on ESP — and the teacher's books were read as a teacher would read them
the night before a first lesson. `design/EVALUATION.md` holds the measurements
and the plan; what follows is what the harness learnt from it.

### 13.1  Seven faults, each with a gate behind it

Every fault found by studying the book was turned into something `gates2.py`
can measure, because a fault that only a reader can see comes back.

| Fault, measured | Gate |
|---|---|
| Review sections reprinted earlier tasks verbatim — in all six units | `check_recycle` |
| Only three exercise types across a whole unit | `check_variety` (≥4 kinds, none above 55%) |
| 70–85% of questions sat at Bloom's remember level | `check_demand` (remember ≤60%, ≥3 above apply) |
| Nation's fourth strand — fluency — was absent entirely | `check_fluency` |
| Nothing after part 1 asked about the learner's own practice | `check_own` (≥2 own-practice tasks) |
| One while-task could not be answered from its own script | `check_answerable` |
| A gap asked for a fragment of a chunk taught whole | `check_gap_chunks` |

Two of these needed refining once they were running against real units, and
both refinements are the same lesson — a gate that fires on correct material is
worse than no gate, because it trains you to ignore it:

* `check_recycle` fired when the same terms came back in a *different*
  operation. Re-using *interproximal* in a sort after meeting it in a match is
  recycling, not reprinting. It now requires the same task kind, or at least
  half the answers in common.
* `check_gap_chunks` fired on `The ____ is used to feel a surface`, answer
  *probe*, because *a periodontal probe* is also taught in that unit. A word
  that is itself a taught item is never a fragment of a longer one, and the
  gate now says so.

### 13.2  What the fluency strand is, in a page of a book

Nation's fourth strand cannot be a new exercise type, because fluency is the
absence of new material. Every unit now ends part 6 with a task that is run
three times with three partners, at four minutes, then three, then two, on
content the learner already has. The content list, the words and the question
are the unit's own; nothing new is allowed in. The teacher's book carries a
page on why this is not a role-play, because the first instinct of a teacher
looking at it is to add something.

### 13.3  Five units, and what the fourth and fifth are for

Each pilot book now carries five units, written to the model this round
produced rather than retro-fitted to it. The fourth and fifth of each book were
chosen so that the two series diverge in the way the design document claims
they should:

* **Dentists A2.1** — *Saying What You Are Going to Do* (a plan in three steps,
  with a length and a cost) and *Agreeing How the Patient Stops You* (a stop
  signal, offered, shown, promised and practised). Both are language for a
  thing that happens in the next sixty seconds.
* **Dental Students A2.2** — *Surfaces, and How We Name Them* (eight terms from
  one principle and one exception) and *The Instruments on the Tray* (eight
  instruments and four purposes). Both are language for a thing that has to
  survive being written down and read by somebody else.

The measured demand profile of the new units is the point of the round:
remember-level questions fell from 70–85% to 19–44%, every unit now shows at
least four exercise kinds, and six or seven tasks per unit ask the learner
about their own practice.

### 13.4  Vocabulary added rather than content thinned

The level guard was hit about sixty times writing these four units. The rule
from the second round held: paraphrase into band, never delete the idea. Where
the word was genuinely ordinary (*bent*, *blade*, *glance*, *load*, *adjacent*,
*reference*) it went into the B1 list; where it was standard academic register
for a university student's reading (*ambiguity*, *infer*, *omission*,
*abbreviation*, *convention*) it went into `ACADEMIC`; where it was dental
(*cervical*, *excavate*) it went into the series' own `DOMAIN`. Everything else
was rewritten: *fortnight* → *two weeks*, *in all likelihood* → *very
probably*, *habitual* → *has become a habit*, *imprecision* → *not precise
enough*, *a want of precision* → *a term that is not precise enough*. The
readings were then rebalanced for mean sentence length, which is a gate in its
own right: the student book's A2.2 reception band is 12.0–16.5 words, and the
first draft of unit 4 came in at 18.01.
