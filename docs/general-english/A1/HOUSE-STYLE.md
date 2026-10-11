# EFDL A1 house style

B1's house style, taken down to a beginner. Its rules survive; its numbers do
not. Where a number here differs from B1's it is **tighter**, never looser, and
`tools/gate.py` checks it.

The sentence B1 paid three rejected drafts to learn applies with more force at
A1 than anywhere else in the course:

> **A coursebook unit is not a piece of writing. It is a list of short tasks.**

And the correction that followed it:

> **There are no floors.** Not a minimum sentence length, not a minimum
> reading grade, not a minimum text length. A rule that makes a writer
> lengthen a sentence makes the coursebook worse. At A1 it makes it unusable.

---

## 1 · The shape of a unit

| | B1 | A1 |
|---|---|---|
| Numbered exercises | 59 | **38**, labelled `W1`–`W3`, `1A`–`1F`, `2A`–`2F`, `3A`–`3D`, `4A`–`4D`, `5A`–`5D`, `6A`–`6C`, `7A`–`7C`, `8A`–`8E` |
| Parts | 11 | **9** (Warm Up + eight) |
| Total words | 5,000–6,800 | **2,400–3,600** |
| Texts over 60 words | at most 5 | **at most 3** |
| Longest text | 190 words | **80 words** |
| Figures | 28 | **22**, two to four per part |
| New lexical items | — | **at most 42** |

`Exam Skills` and `At Work` are gone — neither is A1 material. `Real-World
File` stays, because a beginner who can read a real timetable has a reason to
come back.

```
**1C** Complete with a word from the box.

> **Words:** bus · train · taxi · bike

0. I go to work by bus. (bus) *(example)*

1. My sister goes to school by ______________.
```

## 2 · The language

| | B1 | A1 |
|---|---|---|
| Mean sentence | at most 12 words | **at most 8** |
| Longest sentence | at most 26 | **at most 14** |
| Flesch–Kincaid | at most 4.5 | **at most 2.0** |
| Clause depth | at most 2 | **at most 1** |
| Exercise item | mean ≤ 11, none > 22 | **mean ≤ 7, none > 12** |
| Rubric | at most 20 words | **at most 12** |

One clause is the A1 default. A second clause needs a reason, and *and* or
*but* is the only join a unit may use before it has taught another.

**Register.** The plainest sentence that carries the fact. No paradox, no
aphorism, no irony, no idiom the unit has not taught, no word outside the
cumulative Word File — not in a rubric, not in a caption, not in a figure
label, not in an answer key. `ledgers/clarity.yaml` holds the banned
constructions with a plainer alternative for each; A1 inherits B1's list and
adds to it.

**The Word File is absolute.** At B1 an unknown word is friction. At A1 it is a
wall. E4 fails an exercise for one word, anywhere in it, that the learner has
not met — and that includes the word in the picture.

## 3 · Every exercise

- **One seeded example**, numbered `0.`, answer in brackets, `*(example)*` at
  the end.
- **Three to eight items.**
- Matching prints one extra option and the line `One option is not needed.`
- Multiple choice has **three** options, `(a) (b) (c)`, inline.
- A rubric is an imperative of twelve words or fewer: *Match the word and the
  picture.* *Write* is *or* are*. *Listen and tick.*
- **No exercise can be answered without the thing it teaches.** A learner who
  knows every word but not the structure must not be able to score above
  chance. This is the one rule that decides whether the book teaches, and it is
  checked twice — as a design obligation before the exercise is written (P5)
  and as a property of the written exercise (E7).

## 4 · The task types a unit must carry

Variety comes from the *task*, never from a longer text. Required in every
unit: a **Word | Picture table** opening Part 1 and a **Word | Meaning table**
closing Part 8 · **word-box gap-fill** · **matching with a spare** ·
**three-option multiple choice** · **listen and tick** · **listen and number**
· **put in order** · **sort into two columns** · **odd one out** ·
**ask and answer** with a printed goal · **find the mistake** (one mistake,
one word) · **about you** · a **sound** exercise · a **real document** task ·
a **Can-Do** list.

A controlled drill is **blocked, not interleaved**. Mixed practice comes after
a unit has given the single form on its own first; interleaving before that
hurts exactly the learners this level is for.

## 5 · The pictures

At A1 the picture is not illustration. It is often the task.

- **Every figure has one of four jobs**: carry the task data, contrast two
  forms, supply the lexis, or show a real document. **Decoration is not a
  job.** A figure with no job does not get drawn.
- **Documents are drawn as documents** — a ticket, a form, a timetable, a
  price list, a phone screen. The learner should know what they are looking at
  before they read a word of it.
- **Every label in a figure is in the Word File.** A picture may not teach a
  word the unit has not met.
- **A caption is at most six words** and names the thing: *A ticket for the
  11:40 train.*
- **Colour is never the only channel**, text contrast is at least 4.5:1, and
  everything else at least 3:1.
- Icon grids are allowed in exactly one place: a picture-matching exercise.

## 6 · One thread, many tasks

One thread runs through the unit; the grammar point is what repeats. Practice
items may be generic and usually should be. Twenty units share one cast and one
world, and every fact either matches `ledgers/cast.yaml` or is a new, dated
entry that says what changed.

## 7 · What is not checked

The gate checks shape, length, the Word File and the banned list. It cannot
tell you a task is dull, a text is pointless or a picture is ugly. That stays
with the reader — and at A1 the reader is a person with forty words of English,
which is the hardest reader in the series to write for and the only one whose
judgement counts.
