# Volume 3 — does this book teach, or does it only test?

An audit against fifteen factors that separate a language textbook from a
technical reference. It was written because a reader's verdict on Volume 3
was that it "feels like reading a technical guide, not a textbook for a
language series — little contextualisation and guidance and flow,
introduction or previews and follow-up, very dry."

**The verdict is upheld on fourteen of the fifteen factors.** This
document is the evidence, not the agreement. Every number comes from
`ielts/pedagogy.py`, which counts things in the content modules and can
be re-run; where a factor cannot be counted without reading prose, it
counts a stated proxy and says so.

```
python3 ielts/pedagogy.py 3
```

---

## The number that contains the complaint

| | |
|---|---|
| Volume 3 | 569 pages, 10 units, 50 cycles, 78,947 words |
| Input text (passages, scripts) | 44,102 words — 55.9% |
| Task text (questions, prompts, models) | 22,932 words — 29.0% |
| **Teaching prose — anybody speaking to the learner** | **11,913 words — 15.1%** |
| Teaching prose per cycle | **238 words** |
| Pages per cycle | 11.4 |

A learner works 11.4 pages and is spoken to for 238 words. The rest is
text to process and tasks to perform. That ratio is the complaint, stated
as a measurement: **the book is 85% material and 15% teaching.**

A comparable commercial coursebook unit runs 35–50% teaching prose —
lead-ins, rubric with rationale, worked examples, feedback, reflection —
because the explaining is the product and the material is the vehicle.
This series has it the other way round.

---

## The fifteen factors

### 1. No contents page. None of the eight books has one.

`pedagogy.py` searches the renderer for a contents or TOC function and
finds nothing. A 569-page book opens on a cover, a title page, "How to
use this book", "The test at a glance" and a study planner, and then
begins Unit 21. **There is no page anywhere that lists what is in the
book.** A learner cannot find out what Unit 26 contains without turning
to page 280, and cannot see the shape of the volume at all.

This is the single largest defect in the audit and the cheapest to fix.

### 2. The cycle begins with no preparation. 2 of 124 input blocks

| | |
|---|---|
| reading blocks with a strategy box before the passage | **11 of 61** |
| listening blocks with a strategy box | **1 of 63** |
| input blocks with a lead-in **task** of any kind | **0 of 124** (no such field exists) |

A learner meets 113 of the 124 texts and recordings in this volume with
nothing in front of them: no lead-in question, no prediction task, no
"look at the title and the chart — what do you expect this to say", no
pre-teaching of the two words that will block comprehension. The cycle
bar prints the sub-topic and the passage starts.

The eleven strategy boxes that do exist are good, and they are
strategy — *how to attack a notice* — not contextualisation. They tell a
learner what to do. Nothing tells them what they are about to read, or
activates what they already know about it.

### 3. Nothing happens after a task either

There is no field in the data, and no step in the renderer, between the
end of a question set and the start of the next skill. No check-your-
answers step, no "look again at question 4", no discussion of why a
distractor attracted you. The wrong-option lines exist and are good — all
7,475 of them — but they are **at the back of the book**, 300 pages away
from the question. The learner's feedback loop is a page-turn to an
appendix.

### 4. Grammar: 28 words of explanation, then five items

| | |
|---|---|
| explanation, mean | **28.3 words** |
| example sentences, mean | 4.0 |
| practice items, mean | **5.0** |
| grammar sets whose examples echo their own cycle's text | 46 of 50 ✅ |

The last row is a genuine strength and worth keeping: the grammar is
nearly always drawn from the text the learner has just read, which is
exactly right. Everything else about the slot is thin. **A sentence and a
half of explanation, four examples, five items, no staged practice, no
recognition stage before the production stage, no second exposure.** The
"Find the fault" set added in an earlier phase is the only thing in the
slot that asks a learner to do something other than rewrite five
sentences.

### 5. The learner is told why 58 times out of 212

212 passages of teaching prose exist in the volume. **58 of them mention
the test at all** — a band, an examiner, a Part, a Task, a mark, the
clock. So three-quarters of the teaching in this book does not connect
what the learner is doing to the exam they are doing it for. The sub-topic
"Why yield is not the whole story" is a fine topic for a passage; nothing
on the page says it is there because Academic Reading Passage 3 is almost
always an argument whose evidence undercuts its own headline.

### 6. There are no teacher notes, and no field for them

The series has no place to record why a cycle exists. That absence is
why factor 5 reads as it does: nothing in the data model ever forced the
question *what is this cycle for, and how does it serve the test?* to be
answered.

### 7. Two cross-references in a 569-page book

`pedagogy.py` counts phrases that tie one part of the book to another —
"in cycle 3", "the passage you read earlier", "as you saw above". Across
10 units and 50 cycles it finds **2**. Cycle 5 is designed to answer
cycle 4, and the front matter says so; **no page inside any unit says
so.** The cycles are five separate lessons in a row that happen to share
a theme.

### 8. Taught vocabulary is abandoned: 50 of 400 words come back

400 words are taught in Volume 3, eight a cycle, each with a gloss. **50
of them appear again anywhere later in the same unit** — 12.5%. The other
350 are met once, glossed once, listed again in the back-matter glossary,
and never encountered in a text again. That is a word list, not a
vocabulary syllabus. No cycle recycles the previous cycle's words into
its own passage, and nothing asks the learner to use them.

### 9. The unit opens with 56 words

The mean unit opener is **56 words** for a 57-page unit. It is a good
paragraph — it names what is coming and ends on the unit's question — but
it is a paragraph. There is no unit preview: no map of the five cycles, no
statement of what the learner will be able to do, no indication of which
test tasks appear where, no estimate of how long the unit takes.

### 10. Review is a five-item checklist

Each unit ends with 5 can-do statements and a tip. **There is no review
exercise anywhere in the volume** — nothing that re-tests the unit's
grammar, re-uses its vocabulary, or asks a learner to redo a task type
they failed. 10 checklists, 50 statements, 0 exercises.

### 11. The register is impersonal: 1.5 "you" per 100 words

Across 11,913 words of teaching prose the word *you* and its forms appear
**1.5 times per 100 words**. For comparison, this is the register of a
reference manual. The prose is good prose — dense, specific, confident —
and it is written *about* the exam rather than *to* a candidate.

### 12. Volume 3 is Volume 1's topic list for a second time

| Volume 1 | Volume 3 |
|---|---|
| Education and Learning | Education: Access and Outcomes |
| Work and Careers | Work: Automation and Skills |
| Health and Medicine | Public Health |
| Environment and Conservation | Climate and Adaptation |
| Technology and Computing | Technology and Privacy |
| Travel and Tourism | Tourism and Its Costs |
| Cities and Housing | Urban Planning |
| Food and Agriculture | Food Security |
| Media and Communication | Media and Trust |
| Sport and Fitness | Sport: Money and Ethics |

Ten for ten. A learner who has done Volume 1 and Volume 2 meets, in
Volume 3, the ten topics of Volume 1 again — and meets **none** of the ten
Volume 2 introduced (family, money, crime, language, history, energy,
design, science, transport, music).

### 13. And all ten of them are the same kind of question

Every unit of Volume 3 is a social-policy question about a measurement.
The cycle-5 sub-topics are the proof: *Whether spending can close it ·
True of the market, false of the worker · One number for a population
that is not one population · What attribution cannot settle · Whether
rules can keep up · Whether a cap would help · What the modelling leaves
out · Whether less intensive farming can feed people · Whether correction
works · Whether rules can hold.*

That is one intellectual move, performed fifty times. It is a good move
and it is band-appropriate. But a real Academic Reading paper puts an
archaeology passage next to one on insect navigation next to one on
workplace psychology. **Volume 3 contains no natural science, no
archaeology or ancient history, no psychology of the individual, no
business or enterprise, no art, architecture or music, and no astronomy.**
The reading-genre spread is good (17 distinct text kinds, 20 academic
passages, 10 four-text sets, 8 procedure notices); the *subject* spread is
a monoculture.

### 14. The exercise rubric is 76 distinct strings for 124 exercises ✅

This is the one factor that passes. The rubrics vary, they describe the
task, and they are not boilerplate. Keep them.

### 15. What the book does not tell a learner about itself

Pulling factors 1, 6, 9 and 10 together: there is no page in Volume 3
that states its own pedagogy. Why five cycles. Why read-listen-speak-
write in that order. Why cycle 4 and cycle 5 are a pair. Why the grammar
comes after the writing rather than before. Why the vocabulary is at the
back. All of those decisions were made, and several are defended in
commit messages and in `IELTS_Series_Plan.md` — **none of them is
defended to the learner on the page.**

---

## What is already good, and must survive the fix

An audit that lists only faults produces a plan that destroys what works.
Five things in Volume 3 are better than the commercial competition and
are not to be touched:

1. **The wrong-option lines.** Every printed option in the volume has a
   line explaining why it is wrong, keyed to the text. 1,199 of them in
   this book. Almost no coursebook does this.
2. **The grammar comes from the cycle's own text** in 46 of 50 cycles.
3. **The band-6.5 second model** on every cycle-5 Task 2, with a list of
   what the band-9 answer does that it does not.
4. **The question-type coverage**, gated: all eleven reading and six
   listening types taught as sets, no type over its ceiling.
5. **The register of the prose itself.** It is dry because it is
   impersonal, not because it is vague. It is specific, numerate and
   confident, and the fix is to add address and connective tissue, not to
   soften the content into coursebook mush.

---

## Summary

| # | factor | verdict |
|---|---|---|
| 1 | contents page | ❌ none in any of the eight books |
| 2 | preparation before input | ❌ 113 of 124 blocks have none |
| 3 | follow-up after a task | ❌ no step exists |
| 4 | grammar explanation and practice | ❌ 28 words, 5 items |
| 5 | stated link to the test | ❌ 58 of 212 teaching passages |
| 6 | teacher notes / pedagogic rationale | ❌ no field |
| 7 | cross-references between cycles | ❌ 2 in the volume |
| 8 | vocabulary recycling | ❌ 50 of 400 words |
| 9 | unit preview | ❌ 56 words |
| 10 | review and consolidation | ❌ 0 exercises |
| 11 | learner address | ❌ 1.5 "you" per 100 words |
| 12 | topic progression across volumes | ❌ repeats Volume 1 ten for ten |
| 13 | subject diversity within the volume | ❌ policy monoculture |
| 14 | rubric variety | ✅ 76 distinct of 124 |
| 15 | the book explaining itself | ❌ nowhere on the page |

The fix plan is `IELTS_Textbook_Plan.md`.
