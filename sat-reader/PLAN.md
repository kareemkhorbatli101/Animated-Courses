# Reading the Five Fields — plan

A companion to *Words in Context*. Two hundred reading passages of 300 words that
build the background knowledge the SAT assumes but does not teach.

    5 fields  x  10 strands  x  4 levels  =  200 passages  =  60,000 words

## 1. Why a knowledge book at all

The research position, with its limits stated.

**Background knowledge does as much work as reading skill.** Recht and Leslie (1988,
*Journal of Educational Psychology*) sorted 64 junior-high students by reading ability
and by knowledge of baseball, had them read an account of a half-inning and reenact it.
Weak readers who knew baseball recalled more than strong readers who did not (reported
means 27.5 and 19.4 against 18.8 and 12.7). Timothy Shanahan argues the study is
routinely over-read, and a 2024 paper in *The Reading Teacher* notes the low-knowledge
group was disproportionately female. But a 2021 systematic review of 23 studies finds
the direction consistent: more domain knowledge, better comprehension of text in that
domain. Readers with weak skills can partly compensate from context; readers with weak
*knowledge* compensate much less well.

**For a second-language reader the knowledge only pays once the words are in place.**
The linguistic threshold hypothesis (Clarke, 1980) holds that an L2 reader can use
first-language reading skill and background knowledge only above a certain level of L2
proficiency. Work on L2 listening finds background knowledge helping only above a
vocabulary level the authors could not pin down exactly; learners below it got no
benefit from knowing the topic. Hu and Nation's coverage figures, as reported in the
secondary literature, are the usable version of this: about **98 per cent** of running
words known for unassisted reading, about **95 per cent** for minimally acceptable
comprehension.

**So the book has to do two things at once**: raise knowledge, and stay inside the
threshold while doing it. That is the whole design constraint, and 98 per cent of 300
words is where the arithmetic lands:

> **At most six words per passage may fall outside the level's assumed-known
> vocabulary, and at Levels 1 and 2 every one of them is glossed where it stands.**

Six words in three hundred is two per cent. The cap is not a style preference; it is
Hu and Nation's number applied to a 300-word passage, and `tools/checks.py` enforces it
against a frequency corpus rather than against taste.

**Caveat on the research.** All of the above reached me through secondary sources;
`satsuite.collegeboard.org` would not resolve from this machine, so the College Board's
own specification could not be read directly. Clarke 1980, Hu and Nation 2000 and
Recht and Leslie 1988 should be checked at source before any of these figures is
quoted in a classroom.

## 2. What the SAT actually puts in front of a student

From the College Board's public description, reached through secondary sources: the
Reading and Writing section is 54 questions in two 32-minute modules, each question
carrying its own short passage of 25 to 150 words, and the passages represent four
subject areas — **literature, history/social studies, the humanities, and science**.
No published source gives a split by subject, and no official Lexile band for the
digital test could be found. So the five fields of this book are a mapping, not a
quotation:

| This book | SAT subject area |
|---|---|
| History and Civics | history/social studies, and the founding-documents strand |
| Biology and Earth Science | science |
| Physical Science | science |
| Humanities | the humanities, and literature |
| Social Science | history/social studies, quantitative-evidence questions |

Two features of the test shape the content directly.

**The Great Global Conversation.** Prep sources (Magoosh, UWorld) describe a recurring
family of history passages: the Declaration, the Constitution, the Bill of Rights, the
Federalist papers, and the later texts that argue with them — Douglass, Truth,
Wollstonecraft, Burke, Gandhi, Lincoln, Roosevelt, King. The subjects are abolition,
suffrage, civil rights and the balance of power, and the test likes **paired texts
taking opposite sides on the same question**. The history strands here are built to
that shape, and Level 4 of each strand is where the disagreement lives.

**Science questions are about how science works.** Prep sources summarising the test
say science items place a premium on integrating main ideas, understanding how
procedures are designed, inferring to predict outcomes, and judging an author's
intent. A student is therefore not helped much by a list of facts. What helps is the
shape of a research report: question, method, result, limitation. Level 3 of every
strand in this book is that shape.

## 3. The grid

**5 fields x 10 strands.** A strand is a thread of content followed through all four
levels, so each strand gets 4 x 300 = 1,200 words of treatment. The book can be read
across (everything at Level 1) or down (one strand from Level 1 to Level 4).

### History and Civics
    S01 The Declaration and the claim of natural rights
    S02 The Constitution's machinery: powers divided and checked
    S03 Who counts as a citizen: the suffrage extended
    S04 Abolition: the argument against slavery
    S05 Reconstruction and the long retreat from it
    S06 Industry, labor and the regulating state
    S07 Civil rights: courts, statutes and the street
    S08 Empire and independence
    S09 War, emergency and civil liberty
    S10 The press, the vote and public opinion

### Biology and Earth Science
    S01 Natural selection and variation
    S02 Inheritance, from pea plants to genomes
    S03 The cell and its energy
    S04 Ecosystems: who eats whom, and how much
    S05 Populations: growth, limit and collapse
    S06 Microbes and disease
    S07 Plants, soil and the nitrogen cycle
    S08 Carbon, climate and the record of it
    S09 The restless Earth: plates, rock and deep time
    S10 Water, ocean and ice

### Physical Science
    S01 Measurement, error and uncertainty
    S02 Forces and motion
    S03 Energy: stored, moved and lost
    S04 Heat, gases and the second law
    S05 Electricity and the circuit
    S06 Waves, light and sound
    S07 Matter: atoms, bonds and reactions
    S08 Materials: strength, failure and choice
    S09 The nucleus, radiation and dating
    S10 Distance, light and the scale of the sky

### Humanities
    S01 Who is telling this: narrator and point of view
    S02 Character, motive, and the gap between them
    S03 Image, figure and the physical word
    S04 Form: the line, the stanza, the turn
    S05 The stage as a machine
    S06 Genre and what a reader expects
    S07 Painting and the trained eye
    S08 Music: pattern in time
    S09 Architecture and the shaped city
    S10 Criticism: how arguments about art are made

### Social Science
    S01 Asking people things: surveys and their traps
    S02 Experiment, control and the drawing of lots
    S03 Correlation, cause and confounding
    S04 Samples, averages and spread
    S05 Incentives and how people answer them
    S06 Norms, groups and conformity
    S07 Cities, movement and where people settle
    S08 Work, wages and the labor market
    S09 Inequality and how it is measured
    S10 Judgment under uncertainty

## 4. The depth ladder: what "graded in coverage" means

Within every strand the four levels do four different jobs, in the same order every
time. This is the grading of coverage, and it is declared per passage in a `move`
field that the checks verify against the level.

| Level | Move | What the passage does | What the student can do afterward |
|---|---|---|---|
| 1 Foundation | **phenomenon** | One concrete case, named and dated. What happens, who did it, what it looks like. | Recognize the thing when a test passage mentions it |
| 2 Developing | **mechanism** | How it works, and how much. Cause, comparison, magnitude. | Follow an explanation of it |
| 3 Target | **evidence** | How anyone knows: the study, the document, the measurement — and its limits. | Judge a claim made about it |
| 4 Stretch | **dispute** | What is contested: two readings of the same evidence, and the stance of the writer. | See that a passage has a position, and name it |

So Biology S05 runs: a crash in one hare population (phenomenon) ... the logistic curve
and what sets the ceiling (mechanism) ... the Hudson's Bay fur records and what a
trapping ledger can and cannot show (evidence) ... whether predators or food drives the
cycle, and who argues which (dispute).

## 5. The language ladder

Measured, not asserted. Bands below are targets; `tools/checks.py` enforces them and
`build/check-report.md` prints what was actually achieved.

These are the bands as finally calibrated and enforced. The first draft of this plan
guessed at them; §11 records what the measurement changed.

| | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| Words | 288–312 | 288–312 | 288–312 | 288–312 |
| Paragraphs | 3 | 3 | 3–4 | 3–4 |
| Sentences, at least | 12 | 11 | 10 | 9 |
| Mean sentence | 13–18 | 16–21 | 19–24 | 21–28 |
| Longest sentence | ≤ 34 | ≤ 40 | ≤ 46 | ≤ 52 |
| Flesch–Kincaid | 5.5–11 | 8–13 | 10.5–15 | 11.5–17.5 |
| Assumed known | top 16,000 | top 22,000 | top 30,000 | top 40,000 |
| Words above that (the 98% rule) | ≤ 6, all glossed | ≤ 6, all glossed | ≤ 6, glossed or inferable | ≤ 6 |
| Field terms introduced | ≤ 4 | ≤ 5 | ≤ 6 | ≤ 6 |

Frequency bands are form ranks in the `wordfreq` English corpus. That corpus is
general and subtitle-heavy, so ordinary concrete nouns rank far lower in it than
intuition suggests: *bark* is 8,895, *glacier* 13,358, *moth* 15,005, *elk* 15,157.
Specialist vocabulary sits well above that: *isotope* 23,875, *lichen* 38,474,
*seedling* 39,551, *nodule* 66,138. The bands are placed between those two measured
populations, so that a passage may use the concrete vocabulary of its subject freely
and must declare and gloss the specialist vocabulary. Proper nouns are exempt — a
student is not expected to know that Barrow is a town, only to read past it.

## 6. Two books, one course

Every one of the 200 target words from *Words in Context* appears in at least one
passage of this book, in the same field and at the same level, used in running prose.
A `vocab_link` field per passage declares which, and a book-level check proves that
all 200 are covered. A student can meet `attenuate` in a passage about whale song and
then meet it again as a question.

## 7. The 600 check passes

Three per passage, 200 passages, evenly distributed.

**Pass A — coverage and progression.**
Identifier well-formed and unique; field, strand and level agree with the filename;
`move` matches the level's prescribed move; `builds_on` names the same strand one level
down, and is empty only at Level 1; `advances` states in at least eight words what this
passage adds; three `anchors`, each with a quotation that appears verbatim in the
passage; no anchor quotation repeats one from the level below in the same strand;
`sat_frame` from the closed set; `facts` lists at least three checkable claims and each
appears in the passage.

**Pass B — language grading.**
Word count, paragraph count, mean sentence length, longest sentence and Flesch–Kincaid
inside the level's bands; the 98-per-cent rule — at most six running words outside the
level's assumed-known band, counting neither proper nouns nor declared field terms;
every term declared `glossed` is glossed where it stands (apposition, dash, "called",
"that is"); field-term count inside the level cap; declared `vocab_link` words present.

**Pass C — register and integrity.**
American spelling and usage throughout, against a list of British forms; no second
person; no contractions; title unique, 3–8 words, and not repeated as the passage's
first sentence; every paragraph at least 55 words; at least one date or quantity and at
least one proper noun, so no passage floats free of particulars; no bullet list, no
heading inside the passage, no rhetorical question; sentence count at least 12.

**Book-level checks**, reported separately because they are not per-passage: the
5 x 10 x 4 grid complete; 50 strands each with exactly four levels; 200 unique titles;
all 200 *Words in Context* words covered; Flesch–Kincaid, sentence length and rank
medians rising with every level; field-term glossary complete.

## 8. What the checks cannot do

They cannot tell whether a passage is **true**. Two hundred passages of factual content
were written from general knowledge; the figures are the standard published ones where
a figure is given at all, and `facts` lists the checkable claims per passage so that a
reviewer can go through them quickly. Nor can a check tell whether a passage is worth
reading. The document is read end to end before it is called finished, and that is
where defects of that kind get caught.

## 9. The document

US Letter, 11pt serif, the house style of *Words in Context*, so the two sit together.
One passage to a page: running head with field and strand, the title, the 300 words,
then a ruled box, **What this passage is for**, carrying the three anchors. Each field
opens with its strand map and each chapter with the level card. Appendices: A the
strand index, four levels across; B the glossary of every field term with its gloss
and where it appears; C the 200 *Words in Context* words and the passage each appears
in; D a reading log of 200 boxes. Expected length about 230 pages.

## 10. Build order

    data/spec.yaml            level bands, moves, fields, strands, closed sets
    data/strands.yaml         the 50 strands, with the four-level outline of each
    data/passages/<F>-L<n>.yaml   20 files, 10 passages each
    tools/validate.py         structural validation while writing
    tools/checks.py           the 600 passes + book-level checks
    tools/build.py            the .docx
    build/check-report.md     what passed

## 11. What the measurement changed in this plan

A plan written before the writing is a hypothesis. These are the places where the
built book differs from the plan above, and why. They are recorded rather than
quietly corrected because each one is a claim that did not survive contact with
measurement.

**Four anchors became three.** Four short takeaways per passage pushed the page past
one sheet at 11pt, and the fourth was usually a restatement of the third. Three fit
the page and each says something distinct. 600 checks stayed 600: three per passage is
the check count, not the anchor count.

**The frequency bands moved by a factor of three.** The plan guessed top-4,000 through
top-12,000. Measured against the `wordfreq` corpus, those bands flagged *bark*, *moth*,
*elk*, *willow* and *dough* as above-level words in Level 1 passages about peppered
moths and bread. The corpus is general and subtitle-heavy; it ranks the concrete
vocabulary of the physical world much lower than academic intuition does. Rather than
relax the rule case by case, the rank distributions of two populations were measured —
ordinary concrete nouns against genuinely specialist terms — and the bands were placed
between them. The arithmetic of the 98 per cent rule (six words per 300) did not move.

**The Level 4 readability floor came down from 12.0 to 11.5.** Flesch–Kincaid is a
function of sentence length and syllable count. Reaching 12.0 across all fifty Level 4
passages would have meant padding the prose with long words for no reason but the
formula. The measured outcome is L1 7.4, L2 10.1, L3 11.9, L4 13.1: the ladder rises at
every step, and L3 and L4 overlap more in readability than they do in cognitive
demand, which is the honest description of the difference between *evidence* and
*dispute*.

**Sentence-length ceilings rose.** The plan's ≤28 words at Level 1 forbade the ordinary
compound sentence; the enforced ceilings are 34, 40, 46 and 52. The *mean* is what
grades the level, and the mean bands held.

**Minimum sentence counts were added.** With only a word-count floor, a Level 4 passage
could meet its mean by running nine very long sentences together. A floor on sentence
count (12, 11, 10, 9) was added so that length and sentence shape are both bounded.

**Book 1 was americanized.** The cross-link check — every *Words in Context* target word
appearing in a passage at the matching field and level — failed on two words whose Book 1
spelling was British (*harbour*, *satirise*). That was a real defect for a test written
in American English, not an artifact of the check, so Book 1's items were corrected and
re-verified at 600/600 item passes and 25/25 book checks. A British-forms list now runs
over both books.

**Thirty-two missing possessive apostrophes were found by scanning, not by reading.**
The prose was written with few possessives, and in about thirty places a possessive
crept in without its apostrophe (*Newton law*, *Booth maps*, *the composer wish*). A
proper-noun bigram scan and an agent-noun scan found them. This is the class of defect
that 600 structural checks cannot see, and it is the argument for mechanical
proofreading passes alongside them.
