# EFDL house style — measured from the source coursebook

Every rule here came off `source/PE_B2_U08_StudentBook.docx`. Nothing is taste.
Where a number appears, the measurement that produced it is beside it, and
`tools/gate.py` checks it.

Three earlier versions of B1 Unit 1 were rejected. The faults were, in order:
one topic hammered through eleven parts; pictures that restated their own
captions; and prose that was vague and unfocused. All three have the same
cause. The unit was written as a piece of writing. **A coursebook unit is not
a piece of writing. It is a list of short tasks.**

---

## 1 · The shape of a unit

| | Source | Rule |
|---|---|---|
| Numbered exercises | 59 | **55–62**, labelled `W1`–`W3`, `1A`–`1H`, `2A`–`2H`, `3A`–`3E`, `4A`–`4E`, `5A`–`5G`, `6A`–`6D`, `7A`–`7D`, `8A`–`8E`, `9A`–`9D`, `10A`–`10F` |
| Total words | 5,899 | **5,000–6,800** |
| Texts over 60 words | 4 | **at most 5** |
| Longest text | 176 words | **at most 190** |
| Figures | 28 | **28**, two to four per part |

A unit has eleven parts. Each part is a list of lettered exercises, and each
exercise is one bold label, one rubric of twenty words or fewer, and its items.

```
**1C** Complete with a word from the box.

> **Words:** depot · pavement · queue · card reader · battery

0. A lorry left a ___ outside the shop. (skip) *(example)*

1. The ______________ stood on the ______________ all weekend.
```

## 2 · The language

| | Source | Rule |
|---|---|---|
| Mean sentence | 9.9 words | **at most 12** |
| Longest sentence | 26 words | **at most 26** |
| Flesch–Kincaid | 3.25 | **at most 4.5** |
| Exercise item | 8.6 words | **mean at most 11, none over 22** |

**There are no floors.** The old spec had them — mean ≥ 12 words, FK ≥ 5.5 —
and they were the single worst thing in this project. They forced every
sentence to be longer and harder than a published B2 unit, and the suite
reported that as quality. A floor that makes a writer lengthen a sentence makes
the coursebook worse. They are gone, and nothing replaces them.

**Register.** Write the plainest sentence that carries the fact. No paradox, no
aphorism, no irony, no personified machines, no idiom the learner has not met.
`ledgers/clarity.yaml` lists the constructions that are banned outright, each
with the reason and a plainer alternative.

## 3 · Every exercise

- **One seeded example**, numbered `0.`, with its answer in brackets and
  `*(example)*` at the end. The source does this in all 59.
- **Three to eight items.** Never more.
- Matching tasks print one extra option and the line `One option is not needed.`
- Multiple choice has **three** options, `(a) (b) (c)`, inline.
- A rubric is an imperative of twenty words or fewer: *Choose the correct word.*
  *Complete with a word from the box.* *Match the problem (1–4) to the advice (a–e).*

## 4 · The task types a unit must carry

The source teaches by varying the *task*, not the *story*. It runs one thread
right through — Sofia, her conference, the weather — and gets its variety from
fourteen kinds of exercise, plus practice items that have nothing to do with
the story at all (*If you heat ice, it melts*).

Required in every unit: a **Word | Meaning table** opening Part 1 and another
closing Part 10 · **word-box gap-fills** · **matching with a spare option** ·
**three-option multiple choice** · **collocation choice** (*(miss / lose) a
train*) · **odd one out** · **put in order** · **sort into two columns** ·
**note completion** from a listening · **choose the better sentence** for
politeness · **find the mistake** · **about you** personal writing · an
**exam-skill** box and the exercises that practise it · a **Can-Do** list.

## 5 · The pictures

The source's figures are photographs of real things: a weather alert on a
screen, a departures board, a web page, a poster, a counter. Its captions are
four or five words.

- **A figure shows the thing the exercise is about.** Not an icon of the word
  under the word.
- **Documents are drawn as documents** — a browser window, a pinned notice, an
  email header, a lit board. The learner should know what they are reading
  before they read it.
- **A caption is at most eight words**, and names the thing: *A skip on the
  pavement.* *The queue at the bookshop.*
- Icon grids are allowed in exactly one place: a picture-matching exercise.

## 6 · One thread, many tasks

The theme runs through the unit. The grammar point is what repeats. Practice
items may be generic and often should be — the source's zero-conditional drill
is about ice, plants and paint, not about Sofia.

This replaces the "seven to nine distinct situations" rule, which was written
to fix the monotony of version 2 and fixed it by inventing a novel. The source
has one thread and is not monotonous, because no exercise is long enough to be.

## 7 · What is not checked

The gate checks shape, length and the banned list. It cannot tell you a task is
dull, a text is pointless or a picture is ugly. Those stay with the reader, and
the reader is the gate that matters.
