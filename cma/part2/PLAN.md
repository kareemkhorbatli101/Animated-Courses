# CMA Part 2 — build plan

**Written:** 2026-11-18 · **Status:** plan only, nothing built
**Predecessor:** `cma/book1` (CMA Part 1, Section A, Chapter 1) — built, audited, rebuilt, gated

---

## 0. The two things you asked me to confirm first

You asked me to confirm I have the formal LOS, and the Part 1 books. Both answers
are **no**, and the second one is not what you remembered.

### 0.1 The books

There is **one chapter of one book** in this repo, not four books:

```
cma/book1/              CMA Part 1, Section A — Chapter 1 only
  source/chapter-01.txt   your chapter, 9,313 words — the provenance baseline
  ch01/                   18 pages, 92 scenes, built from it
  assets/                 4,156 lines of engine
  rebuild-plan.md         709 lines: the audit, the rebuild, the verification
cma/unit1/              an earlier prototype of the same chapter, superseded
```

Your Part 1 book's own front matter says it runs to **18 chapters in four parts**
and covers "every Learning Outcome Statement in CMA Part 1, Section A". So what
exists is chapter 1 of 18, of one section. If four Part 1 books exist, they are
not here — they would be on your machine or in another account.

### 0.2 The Learning Outcome Statements

Not on disk for Part 2, and **I cannot fetch them**: `www.imanet.org` fails DNS
resolution from this container, which is a network-policy block rather than a
site outage. I checked rather than assumed.

That matters less than it sounds, because of how Part 1 actually worked. The LOS
did not come from ICMA — **they came from your chapter**, which prints them in a
table with the official wording:

```
LOS | Official statement (ICMA, 2024) | In plain words | Depth here
A.1.a | identify the users of these financial statements and their needs | ...
```

So the established method is: **your book is the authority, and the LOS arrive
inside it.** I would keep that for Part 2. If you also want an independent
cross-check that every LOS is covered, I can ask you to approve adding
`imanet.org` to this environment's allowed hosts — but it is a cross-check, not
a dependency.

### 0.3 What I do not have, and must have

1. **Your CMA Part 2 book** — the chapter text, as you supplied `chapter-01.txt`.
   Without it there is nothing to build from, because of rule 1 below.
2. **The figures.** Still the biggest unresolved gap from Part 1: F01-01 … F01-13
   were never sent, so every Part 1 scene was inferred from a caption. For Part 2
   this gets worse, not better — see §4.
3. **A decision on structure** — see §5.

---

## 1. What Part 1 proved, and what carries over

The Part 1 pilot was built, criticised by you on four counts, audited against
those counts, and rebuilt. The audit found all four criticisms correct. What came
out of it is a doctrine worth reusing verbatim.

**The five rules.**

1. Nothing is taught that is not in the author's source file.
2. One idea per screen — a scene, not a scroll, max ~40 words of chrome.
3. The object is the explanation — never a paragraph followed by a question about
   the paragraph.
4. Statements are complete statements — every line, every amount, in your order.
5. A trap is sprung, not announced — the learner falls into it and sees why.

**What those rules did to the numbers**, measured on chapter 1:

| | pilot | after rebuild |
| --- | ---: | ---: |
| on-screen words | 20,100 | 1,879 |
| multiple of source length | 3.1× | 0.20× |
| scenes | — | 92 |
| coloured box slabs | 4 per page | 0 |
| invented Arabic terms | 26 | 0 |
| QA checks passing | — | 51 / 51 |

**The reusable engine**, 4,156 lines, with 23 registered scene kinds
(`post`, `sort`, `statement`, `contra`, `split`, `timeline2`, `gauges`, `traps`,
`cloze`, `order`, `wire`, `tank`, `beam`, …):

- `provenance.js` — classifies every string as CONTENT or CHROME and fails the
  build if a taught word is not in the author's text. This is the thing that
  makes the whole approach trustworthy, and it transfers unchanged.
- `scene.js`, `objects.js`, `objects2.js` — the scene runtime and the objects.
- `ledger.js` — the posting engine and the `A = L + E` tie.
- `speech.js`, `progress.js`, `answers-view.js`, `terms-*.js`, `site.css`.

**Two of the three Part 1 objects transfer directly to Part 2:**

- **Object B — The Statement Sheet.** A complete, line-itemised statement whose
  subtotals compute live. Part 2 Section A is *about* these statements, so this
  object becomes the foundation rather than a chapter-5 payoff.
- **Object C — The Term Strip.** The persistent bilingual term bar. Unchanged.

**Object A — The Ledger Machine** is largely done with after Part 1. Part 2 does
not post journal entries; it reads finished statements and decides things.

---

## 2. Why Part 2 is a different build, not a bigger one

This is the part worth arguing about before any code is written.

Part 1 Section A teaches **classification and articulation**: which element is
this, which statement does it hit, how does one transaction ripple into four
statements. Every error is a misplacement. That is why a posting machine and a
statement sheet carried the whole chapter — the teaching move is *place it
correctly and watch the statement resolve*.

Part 2 teaches **judgement under quantitative models**. The learner is not
placing things; they compute a number and then decide something with it. The
error modes are completely different: a formula applied to the wrong line, a
decision rule that contradicts another decision rule, a cost that should have
been ignored.

So the objects have to change. Four distinct cognitive shapes run through Part 2,
and each needs its own object.

### (a) Relationship reading — Financial Statement Analysis

A ratio is two statement lines in a relationship. The failure mode is memorising
formulas without knowing which lines feed them, and without knowing what moves
them.

> **OBJECT D — The Ratio Lens.** Built on Object B, so the learner is working on
> a real, complete statement, not a stripped-down panel. Drag a line into the
> numerator, another into the denominator; the ratio computes and names itself.
> Then the second mode, which is the actual teaching: *make this ratio improve*.
> The learner changes a statement line and watches **the other ratios react**.
> Stretching payables improves the cash conversion cycle and damages the current
> ratio, in front of them, as a consequence of their own move. That is rule 5
> applied to ratio analysis, and it is the thing a formula sheet cannot do.

### (b) Time-value decisions — Corporate Finance, Investment Decisions

> **OBJECT E — The Decision Board.** A timeline the learner places cash flows on,
> a discount-rate dial, a live NPV, and an NPV profile curve drawn as the dial
> moves. IRR is not a formula here; it is *the point where the curve crosses
> zero*, visible. The classic trap — NPV and IRR ranking two mutually exclusive
> projects differently — is sprung by having the learner rank them, then turn the
> dial until the ranking flips under their hand.

### (c) Decomposition — Decision Analysis, variance, relevant cost

> **OBJECT F — The Bridge.** A waterfall from one number to another: budget to
> actual, or revenue to operating income. The learner splits a bar into its
> causes. **The bridge refuses to close if the decomposition does not reconcile**
> — a price variance misattributed to quantity leaves a visible gap that will not
> go away. Rule 5 again, and a near-perfect fit for variance analysis.
>
> **OBJECT G — The Margin Plane.** CVP as a place on a chart rather than an
> algebraic rearrangement. Drag fixed cost, price, or variable cost per unit;
> break-even moves; the margin of safety resizes. Relevant-cost problems run on
> the same surface by letting the learner *strike out* a cost and see whether the
> decision changes — which is the only definition of "relevant" that sticks.

### (d) Risk and judgement — Risk Management, Professional Ethics

> **OBJECT H — The Consequence Path.** A branching decision where the outcome is
> revealed only after commitment. For risk: the learner builds a tornado chart by
> ranging each input and seeing which one actually dominates. For ethics: a
> situation, a choice, and then the consequence — including the consequences of
> the defensible-looking option. Ethics taught as a multiple-choice quiz is the
> one thing guaranteed not to transfer, and this is the honest alternative.

**Net: five new objects (D–H), two carried over (B, C), one retired (A).**
Part 2 is more engineering than Part 1, not less. Anyone who tells you it is
"the same build with different content" has not looked at the material.

---

## 3. A provenance problem that Part 1 did not have

`provenance.js` is **word-based**: it fails the build if a taught word is not in
the author's chapter. That works when the content is terms, rules and statement
lines.

Part 2 is arithmetic. Object D computes a ratio the author never printed. Object
E computes an NPV at a discount rate the learner chose. Those numbers are
**derived**, not quoted — and a word-based lock either rejects all of them or is
switched off, and switching it off is how the Part 1 pilot went wrong.

**The fix, planned now rather than discovered in week three:** extend the lock
with a *numeric provenance* rule. Every number on screen must be one of —

1. **Quoted** — appears in the source, verbatim; or
2. **Derived** — produced by a declared operation over quoted inputs, where the
   object records the operation and the gate re-executes it and compares; or
3. **Learner-entered** — supplied by the learner, and never taught back as fact.

Anything else fails the build. This is a real addition to `provenance.js`,
roughly a day's work, and it is what keeps Part 2 as trustworthy as Part 1.

---

## 4. The figures problem gets worse

In Part 1 I never saw F01-01 … F01-13 and built every scene from the caption plus
surrounding prose. The audit named that as "the single biggest remaining source
of *this isn't quite my chapter*", and it is still open.

Part 2 is far more figure-dense than Part 1 Section A: ratio tables, NPV profiles,
CVP charts, variance bridges, decision trees, tornado diagrams. If I build those
from captions, I will be *inventing the visual design of your book* at scale, and
the mismatch will be much more obvious than it was in chapter 1.

**I would not start a Part 2 pilot without at least one chapter's figures.** This
is the one input I would push hardest for.

---

## 5. Structure and sizing — and the open decision

### What I know about Part 2

Part 2 is *Strategic Financial Management*, six sections. My understanding of the
section titles is below, but **I have flagged it as unconfirmed because I could
not reach ICMA**, and I am not going to present recalled information as sourced:

> A — Financial Statement Analysis · B — Corporate Finance ·
> C — Decision Analysis · D — Risk Management ·
> E — Investment Decisions · F — Professional Ethics

Your book's front matter will settle both the titles and the exam weightings, as
Part 1's did. **I am deliberately not stating weightings from memory** — they
drive how much is built per section, and a wrong number there corrupts the whole
estimate.

### Sizing, from the one measurement I actually have

Chapter 1 of Part 1: **9,313 source words → 92 scenes, 1,879 on-screen words.**

That gives two ratios worth planning against:

- **~1 scene per 100 source words**
- **on-screen text ≈ 0.20× source**

If a Part 2 book runs like your Part 1 book — 18 chapters, ~9,000 words each —
then one book is roughly **160,000 source words → on the order of 1,600 scenes**.
That is a very large number, and I would rather you see it now than in month
four. It is also why §6 does not propose building all of Part 2 at once.

### The decision I need from you

**Option 1 — Pilot one chapter (my recommendation).** Pick the chapter you care
most about, ideally one that exercises a *new* object: a ratio chapter (Object D)
or a capital-budgeting chapter (Object E). Build it to the five rules, gate it,
and you audit it exactly as you audited Part 1. Then we scale with the objects
proven.

This is the recommendation because the Part 1 pilot was wrong in four ways that
only became visible once you had it in your hands, and the cost of finding that
out on one chapter was a week. The cost of finding it out on eighteen is a month.

**Option 2 — Build Section A end to end.** Defensible if Part 1's doctrine is
settled enough in your mind that you do not need another pilot. Higher risk,
because Objects D–H are all unproven.

**Option 3 — Engine first.** Build and gate Objects D–H against small synthetic
cases, then take your chapters. Lowest content risk, but you see nothing
teachable for the longest stretch.

---

## 6. Phases, assuming Option 1

| Phase | Work | Exit test |
| --- | --- | --- |
| **0. Inputs** | Your chapter text and its figures land in `cma/part2/source/`. The LOS table inside it becomes the coverage baseline. | Source file committed; figures viewable |
| **1. Lock** | Extend `provenance.js` with the numeric rule (§3). Port `scene.js`, `objects*.js`, `speech.js`, `progress.js`, `site.css`. | Lock rejects a planted undeclared number |
| **2. Objects** | Build whichever of D–H that chapter needs. One object at a time, each with its own QA group. | Each object solvable through its real click path |
| **3. Scenes** | Write the chapter as scenes to the five rules. | On-screen words ≤ 0.25× source; no scene over 45 words of chrome |
| **4. Gate** | Extend `_qa.html`: provenance, numeric provenance, coverage against the LOS table, scene rules, statement completeness, offline. | All checks pass; every scene solved from `file://` |
| **5. Package** | Zip, extract to a clean directory, re-run the gate from the extracted copy. | Gate clean from the extracted zip |
| **6. Your audit** | You use it and tell me what is wrong, as you did in Part 1. | Written audit, like `rebuild-plan.md` Part 1 |

Phase 6 is not a formality. It is the phase that produced everything good about
the Part 1 build.

---

## 7. Carried-forward defects from Part 1

These are open now and will be open in Part 2 unless addressed:

- **26 terms have no Arabic** in chapter 1. They render English-only, labelled
  *awaiting the author*. They need your Arabic, or your instruction to drop them.
- **The Windows local-voice path** for pronunciation has never been exercised —
  this container is Linux with no installed voices, so only the degraded path
  (dimmed icon plus install instructions) has been tested.
- **`cma/unit1/`** is a superseded prototype still sitting in the repo, pending
  your decision to delete it.
- **The figures**, as above.

---

## 8. What I am asking for

1. **Your CMA Part 2 book**, or one chapter of it, as text.
2. **The figures for that chapter**, in any form — photographs of the page are
   fine. This is the one that most improves the result.
3. **Which option** in §5, and if Option 1, which chapter.
4. Optionally: whether to request network access to `imanet.org` so that LOS
   coverage can be cross-checked against ICMA rather than against your book alone.

Nothing here is built. On your word, and your chapter, Phase 0 starts.
