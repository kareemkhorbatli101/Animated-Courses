# Unit model · both series

The data structure each unit fills. One Python module per unit, one `U` dict, as
now — but with the fields the First Edition lacked. Fields marked **[S]** are
student series only, **[P]** practitioner only; the rest are shared.

---

## Header

```
code            book code, e.g. DEN2-A21
num             1-10
title           the unit's own title
level           A2.1 … C1.1
threads         {'domain': [...], 'function': [...]}   what this unit advances
can_do          5 can-do statements, CEFR-shaped, professionally specific
prepares        the later units this feeds
recycles        the earlier units this recycles from
```

## Warm-up

```
warm            3 questions, answerable from the learner's own experience
warm_fig        one figure: the situation, not decoration
```

## Preview — the stage the First Edition had no concept of

```
set             productive core, 8-10 entries, each:
                  term, pos, definition, example, collocation, thread,
                  recycle_slots
receptive       up to 10-14 entries, same shape, recognition only
phrases         8-12 functional chunks, each: chunk, function, example,
                  register_note
morph    [S]    3-5 word parts: part, type (prefix/root/suffix), meaning,
                  two examples, the system it belongs to
preview_fig     the set as a labelled plate; the phrases as a usable box
preview_task    one recognition task before any text: match, label or sort
```

## Vocabulary · 4 tasks

```
v1              recognition against the plate
v2              matching term to definition
v3              collocation or word-part building
v4              controlled production in the unit's own context
```

## Grammar · 1 point, 4 tasks

```
g_point         the point, stated as a use not a label
g_source        which phrases in the bank it is drawn from
g_rule          3-4 lines, each with an example from this unit's world
g_fig           a contrast figure: loose vs precise, both professionally real
g1..g4          recognition, transformation, correction, production
```

## Listening ×3

Each of `l1 l2 l3`:

```
genre           [P] patient exchange | colleague handover | telephone
                [S] lecture extract | tutorial | clinical supervision
script          recording-ready: speakers, pacing marks, stage notes
markers  [S]    the importance/signposting markers this script exercises
pre             a gist task set before listening
while           a detail task done during
post            an inference or transfer task after
transcript      printed in the back matter, numbered to the tasks
fig             one figure supporting the task, not the topic
```

## Speaking ×3

Each of `s1 s2 s3`:

```
type            [P] scripted model | substitution drill | role-play with a task
                [S] present a structure | explain a process | be questioned
model           the exchange, written out in full
frame           the substitution table or prompt set
cards           role cards: who, what they want, what they will not say
checklist       what a good performance contains
fig             the stimulus the speaker works from
```

## Reading ×3

Each of `r1 r2 r3`:

```
genre           [P] notice | record or form | professional guidance extract
                [S] textbook passage | case | procedure
text            within the level's length band
pre             a prediction or vocabulary-activation task
while           comprehension, located in the text
post            transfer, comparison or critique
glossary        any term outside the unit's sets, glossed in place
fig             [S] a labelled figure the text refers to by number
source_tier     A, B or C per SOURCE_POLICY.md
```

## Writing ×3

Each of `w1 w2 w3`:

```
genre           [P] note | message | letter (the third referral-shaped)
                [S] definition | short exam answer | case report to a rubric
model           a complete model text
scaffold        the staged frame the learner fills
rubric          the task, in one imperative sentence
checklist       the success criteria, worded purpose-first
fig             the source material to write from
```

## Extras

```
data_box        one attributed fact box, with its source line and tier
ai_page         B1+: the capability, what to give it, what it drafts,
                and the boundary line - what it cannot do
brief_lab       B1.2+: a six-line real draft, 3 fault types x 2 entries,
                diagnosis, rewrite, model
decision_room   B2+: brief, exhibit, three voices, five stages, decision bank,
                outcome
precision_lab [S] the academic faults: circular definition, missing criterion,
                unstated assumption
```

## Review

```
rev_vocab       productive core, tested productively
rev_recycle     items from units n-3 and n-7, named
rev_grammar     the point in use
rev_can_do      self-assessment against the five can-do statements
```

## Apparatus

```
figures         every figure: id, type, caption, alt_text, cross_ref,
                licence_record (tier, source, attribution text)
sources         every Tier A claim: claim, source, year, verified
teacher         the pointer to this unit's teacher notes, which must exist
                before the unit is considered finished
```

---

## The rule that makes the model work

**No field may hold a phrase in place of a meaning.** `definition` is checked
for being a definition: it must not be a noun phrase that merely restates the
headword, must not begin with "and", and must be decodable at the book's level.
The First Edition's `('the day list', 'eleven people and one page')` fails all
three and could not be written here.
