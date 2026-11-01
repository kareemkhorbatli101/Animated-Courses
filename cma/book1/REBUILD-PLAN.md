# Chapter 1 — audit of the pilot, and the plan to rebuild it

**Audit date:** 2026-11-01 · **Subject:** `cma/book1` as shipped 2026-10-31
**Verdict:** the criticism is correct on all four counts, and three of the four are worse than they look.

---

## Part 1 — The report

I measured rather than assumed. Every number below comes from a script against the built site or against
your chapter, both of which are now in the repo (`source/chapter-01.txt` is the chapter as you supplied it,
and is from now on the provenance baseline).

### 1.1 "Reading heavy" — confirmed, and the scale is the problem

| | Measured |
|---|---|
| Your chapter | **6,475 words** |
| The site I built | **20,100 words** — **3.1× the source** |
| Pure reading time | **101 minutes**, before a single exercise is attempted |
| Total scroll | **120,500 px** — 134 screens at 900 px |
| Worst page (§1.3) | **3,479 words, 21,040 px** — 23 screens of scrolling |
| Words before the first interactive element | **942–2,265 px down the page**; on the case page the learner reads 2.5 screens before touching anything |

Two thirds of what a learner reads on that site is **my prose, not yours**. I wrote a textbook on top of your
textbook. For a reader who already knows the accounting and is here for the English, that is close to the
worst possible failure mode.

### 1.2 "Visually cluttered" — confirmed, and it is structural

One exercise on §1.2 stacks **six separate text layers** before the learner can touch anything:

```
  badge        01
  title        "The ten elements: at a date, or during a period?"
  tag          "Drag and drop"
  instruction  "Three elements describe the balance sheet at one date. The other seven…"
  prompt       "Sort all ten elements. Two tiles are not elements at all."
  hint         "Drag each item into a box, or tap an item and then tap a box. Not every item…"
  + bin hints  "exactly three"      + drop hints  "drop here"
```

**64 words to read before the first draggable tile.** Measured on the same page: **17 distinct font sizes**
in the content area and **4 competing box background colours** (IFRS contrast, false friend, term bridge,
section check) all shouting at once.

The root cause is a design decision I got wrong: I treated every box in your book as a *slab on the page*.
Your book has those boxes because print has no other way to set something apart. A screen does — it can show
the trap *at the moment the learner falls into it*. I translated the print layout instead of translating the
teaching.

### 1.3 "Drag and drop is not visually intuitive" — confirmed

Specific failures, each checked in the DOM:

- **Chips carry no amount.** You drag a tile that says `Cash`, not `Cash 1,050`. So nothing numeric is
  visible while you are making the numeric decision. The one thing a financial statement is made of —
  amounts — is absent from the thing you are dragging.
- **No grab affordance.** The tile is a `<button>` with `cursor:grab` and nothing else. It does not look
  liftable. There is no handle, no lift shadow, no drag ghost.
- **The drop zone says `drop here`** and nothing about what belongs there until after you have failed.
- **No motion.** A chip teleports into the zone. Nothing snaps, nothing settles, so the action has no
  physical feedback.
- **Failure is reported far away.** You drop wrongly, then scroll down to a feedback block to find out why.
  The explanation is nowhere near the mistake.

### 1.4 "The statements are not complete" — confirmed, and this is the most serious one

This is what the site renders as the "balance sheet":

```
  Current assets           [chips]        1,774
  Total current assets                    1,774
  Non-current assets       [chips]        4,236
  Total assets                            6,010
  …
```

This is what your Figure F01-12 actually is:

```
  Cash                                     1,050
  Accounts receivable, net of the allowance  280
  Inventory                                  420
  Prepaid rent                                24
  Total current assets                     1,774
  Land                                       936
  Equipment, net of accumulated depreciation 3,300
  Total assets                             6,010
```

**The site has no line items and no per-line amounts — zero.** It is a set of buckets with totals, not a
statement. The learner never sees the line *"Accounts receivable, net of the allowance 280"*, which is the
single most examinable line in the whole chapter. Same for F01-11: no `Cost of goods sold (1,860)` line, no
`(520)`, no `(90)`.

So the exercise I described as the centrepiece does not actually show the learner the statement the chapter
is teaching. You are right, and this one is not cosmetic.

### 1.5 "The material does not seem to be fully from the chapter" — confirmed, and I owe you a correction

This is the finding I am least comfortable with, because I wrote in the original plan that augmentations
would "never add accounting doctrine, never invent a number, and never introduce a rule the book does not
state", and then I broke the spirit of it.

| | Count |
|---|---|
| Arabic terms taken from your Term Bridge boxes | **54** |
| **Arabic terms I generated myself** | **26** |
| Question/scenario prompts traceable to your chapter | 23 |
| **Prompts I wrote** | **56** |

**The 26 Arabic renderings I invented**, which are now sitting in your glossary looking exactly as
authoritative as yours:

> measure · record · present · predictive value · confirmatory value · comparability · verifiability ·
> timeliness · understandability · cost constraint · stewardship · comprehensive income · investments by
> owners · distributions to owners · contributed capital · depreciation · provision · allowance · accrued
> expense · accrued revenue · ASU · PCAOB · gross profit · operating income · working capital · current ratio

Your front matter says the book passed a **terminology lock**. I then added a third of a term bank outside
it. A reviewer reading the glossary cannot tell which Arabic is yours and which is mine. That is a real
problem for a book going to language review, and it is my error, not a judgement call.

I also invented content beyond the Arabic:

- **A merged scenario** on the review page: *"Orontes receives 60 for pastries it will deliver in March, and
  on the same day declares a dividend of 50"* — your chapter has the 60 advance (SC4-1, delivered in
  **January**) and the dividend (Jan 31) as **separate** facts. I fused and altered them.
- **Invented examples**: "selling a surplus plot of land at a loss" (your chapter has only the delivery-truck
  gain); the distractor "ASC 842-10-15" (your chapter names only ASC 606 and ASC 842); the word "reports" as
  a fifth verb distractor (your box has exactly five verbs).
- **Invented distractor options** in questions I wrote, e.g. "Depreciation was added back."

None of it contradicts your accounting. All of it is unsourced, which for a book under review is the same
problem.

### 1.6 What the audit says the real defect is

Not "too much text" on its own. The real defect is that **I built a reading site with exercises bolted on,
when the brief was an interactive site**. Every time the material needed to be taught, I wrote a paragraph
and then tested it. The teaching and the interaction are two separate things on the page, and the teaching
half is three times the size of your book.

The fix is not to trim prose. It is to **move the teaching inside the interactive object** so that
manipulating the object *is* the explanation.

---

## Part 2 — The plan

### 2.1 Five rules that govern the rebuild

1. **Nothing is taught that is not in `source/chapter-01.txt`.** Every Arabic term, number, example, company,
   scenario and rule traces to a line in that file. A build check fails the package otherwise. The 26
   invented Arabic terms are **removed** — those terms appear in English only, with an English gloss, until
   you supply Arabic for them. (You may want to; that is your call, not mine to invent.)
2. **One idea per screen.** A section is a sequence of *scenes*, not a scroll. Each scene is one viewport,
   one interactive object, and **at most 40 words** of visible text outside that object.
3. **The object is the explanation.** No scene has a paragraph followed by an exercise about the paragraph.
   The learner manipulates something and the consequence is the teaching. Where a sentence of your chapter
   must be read, it appears *inside* the object, at the moment it bites.
4. **Statements are complete statements.** Every line, every amount, in your figures' order and wording.
5. **A trap is sprung, not announced.** Your Exam Trap and False-Friend boxes stop being coloured slabs and
   become the consequence of a wrong move, shown at the point of the move.

**Target:** ~2,800 words of on-screen text for the whole chapter (down from 20,100), ~14 minutes of reading,
and no scene taller than one viewport.

### 2.2 The three objects that carry the chapter

Rather than 16 renderers, the rebuild is built on **three reusable interactive objects** plus small widgets.
This is what kills the clutter: the learner learns one interface and uses it for eleven scenes.

**OBJECT A — The Ledger Machine** (§1.2, §1.3, §1.6)
A posting surface: a journal line on the left, a live `A = L + E` bar in the middle, and four small statement
thumbnails on the right. Post an entry and all three react. It refuses to post an unbalanced entry. It
*generates* the effect grid (F01-05) row by row as you post, so the worked example becomes the thing the
learner builds rather than a table they read.

**OBJECT B — The Statement Sheet** (§1.6, §1.7, case)
A complete, line-itemised financial statement — every line and every amount from F01-10, F01-11 and F01-12,
in your order and your wording. Lines start blank and fill as accounts are placed. Subtotals compute live.
Contra lines (`Accounts receivable, net of the allowance`) only resolve when **both** the asset and its
contra are placed, which is the whole lesson made mechanical.

**OBJECT C — The Term Strip** (every section)
Replaces the Term Bridge tables. A thin persistent bar at the foot of the scene holding that section's terms
as bilingual chips with 🔊 on both languages. Always available, never a wall. Tapping one expands it in place.

### 2.3 Drag and drop, rebuilt

| Now | After |
|---|---|
| Tile reads `Cash` | Chip reads **`Cash  1,050`** — the amount travels with the account |
| No grab affordance | Grip glyph, lift shadow on pick-up, `grabbing` cursor, 4° tilt while dragging |
| Zone says `drop here` | Zone shows a **ghost of the line that belongs there** while you drag |
| Chip teleports | Chip **snaps** with a 140 ms settle; the subtotal counts up to its new value |
| Reason is in a block below | Wrong chip **springs back** and the reason appears **on the chip**, one line |
| Equal counts in some sets | Always ≥2 spare chips, drawn from your own wrong answers |
| Keyboard path exists but hidden | Visible: focus a chip, press Enter, targets highlight, Enter to drop |

### 2.4 Proposed contents — scene by scene

Notation: **DO** = manipulate, **SORT** = drag/classify, **DECIDE** = choose with visible consequence,
**CHECK** = your SC item verbatim. Word budgets are on-screen text outside the object.

---

#### §1.1 Who uses financial statements (7 scenes · ~340 words · was 1,931)

**Scene 1 — "The Table" (SEE/DO)** · *replaces F01-02 as a table*
> A round boardroom table, seven seats, each with a silhouette and a name. Three seats wear a gold ring.
> Clicking a seat turns the figure toward you; a speech bubble gives that user's **key question** verbatim
> from F01-02, their decision appears on a card in front of them, and the one-to-three statement icons at the
> table's edge light up for the statements they use most. The Managers seat is outside the table, holding a
> folder marked *internal reports*, and its bubble reads *"Not a primary user: can use internal reports."*
> **Interaction:** click all seven. **Teaching:** the entire F01-02 table, with zero prose.
> **On-screen text:** "Click each seat. Three wear a gold ring. Find out what the ring means." (14 words)

**Scene 2 — "Who can just ask?" (SORT)** · *teaches the primary-user rule by mechanism, not definition*
> One envelope labelled *General-purpose financial statements* and two trays: **"Depends on this envelope"**
> and **"Can simply ask the company for numbers"**. Nine chips: the seven users from F01-02, plus
> *internal auditors* and *the board of directors* (both lifted from SC1-1's distractors).
> **Consequence:** drop Managers into "Depends" and the manager silhouette holds up an internal report and
> the chip springs back with one line: *"They can get any internal information they need."*
> **Teaching:** *primary users = those who cannot demand special reports* — which is your chapter's actual
> reason, not a list to memorise. **Traps sprung:** `primary-user`.

**Scene 3 — "Three questions, three statements" (SORT)**
> Three statement covers face-down. Three question cards from your chapter ("What does the company have and
> what does it owe?"…). Drop a card on a cover and the cover flips to reveal the statement name.

**Scene 4 — "The Quality Podium" (SORT)** · *the layout is the lesson*
> A podium: **two tall steps at the top** labelled *Fundamental*, **four short steps below** labelled
> *Enhancing*, and a **separate side box** labelled *A constraint, not a quality*. Seven chips to place; the
> shape of the podium tells the learner there are exactly two and exactly four before they read a word.
> Relevance, once placed, **splits open** to show its three parts (predictive value, confirmatory value,
> materiality) as sub-chips to drop into it.
> **Trap sprung:** place Comparability on a top step and it will not stay — the step is only two wide.
> That physical refusal *is* your Exam Trap box. **Traps:** `fundamental-vs-enhancing`.

**Scene 5 — "Five Verbs, One Sale" (DO)** · *replaces the cloze*
> Orontes's sale travels left to right through five stations drawn as small icons: a tag *(give it a name and
> an amount)*, a scale *(decide the amount)*, a ledger book *(enter it in the accounts)*, a statement face
> *(show it on the face)*, a notes page *(explain it in the notes)*. Drag the five verbs onto the stations.
> As each lands, that clause of your chapter's Orontes sentence writes itself along the bottom, until the
> full sentence stands assembled. **Teaching:** your Language Focus box, built rather than read.

**Scene 6 — CHECK SC1-1** (verbatim, 4 options, your 4 explanations)
**Scene 7 — CHECK SC1-2** (verbatim)

*Term strip:* the 8 rows of your §1.1 Term Bridge, unchanged.

---

#### §1.2 Elements and the accounting equation (8 scenes · ~380 words · was 2,043)

**Scene 1 — "Ten Cards, Two Shelves" (SORT)**
> Ten element cards. Two shelves: **At a date** (exactly 3 slots, visibly) and **During a period** (7 slots).
> Each card, once correctly shelved, **flips to show your chapter's definition** — so the definitions are the
> reward for the sort, not a list beforehand.

**Scene 2 — "The Balance Beam" (DO)** · OBJECT A, first appearance
> `A = L + E` as a physical beam with a pivot. Equity is a stacked block: **contributed capital** above
> **retained earnings**. Six transaction cards from your January set. Drag one onto the beam: both sides
> animate to their new heights and the beam stays level. A toggle marked *"try to break it"* lets the learner
> put a one-sided entry on, and the beam tips and refuses — teaching *why* the equation always holds.

**Scene 3 — "Split the 1,500" (DO)** · *par value vs APIC, which your chapter states but never drills*
> 100,000 shares at $15, par $1. Two buckets: **Common stock** and **Additional paid-in capital**, and a
> draggable divider between them. The learner slides the divider until the split is right; it snaps at
> 100 / 1,400 and the par-value line appears. **Teaching:** contributed capital = par + APIC, by construction.

**Scene 4 — "The Retained Earnings Tank" (DO)** · *the dividend trap, sprung*
> A tank with inflow pipes (**revenues**, **gains**) and outflow pipes (**expenses**, **losses**,
> **dividends**). The learner opens valves and watches the level move. The dividend pipe runs out of the tank
> but is drawn in a different colour and, when the learner first tries to route it through the **income
> statement** panel beside the tank, the income statement **rejects it** with your sentence: *"It is a
> distribution to owners, so it never appears in the income statement."*
> **Traps:** `dividend-not-expense`. **This replaces three separate exercises and an Exam Trap slab.**

**Scene 5 — "Central or incidental?" (SORT)**
> Two lanes: *central, ongoing* → revenue/expense; *peripheral, incidental* → gain/loss. Only your chapter's
> examples: selling olive oil, paying plant workers, cost of the goods sold, selling the old delivery truck
> above carrying amount. No invented examples this time.

**Scene 6 — "Two Doors" (DECIDE)** · *the False-Friend box, as a game*
> A word appears on a sign — `stock`, `دخل`, `إيراد`, `résultat`, `charges`, `la balance`, `le bilan`.
> Two doors: **what it means where you learned it** and **what it means on the CMA exam**. Walk the word
> through both doors; the mismatch is the lesson. Each of the four bullets of your box is one round.
> **Traps:** `stock-means-shares`.

**Scene 7 — "The Name Switch" (DO)** · *the IFRS Contrast box, as one control*
> A small balance sheet with a single toggle: **U.S. GAAP ⇄ IFRS**. Flipping it relabels every line in place
> — balance sheet→statement of financial position, common stock→share capital, APIC→share premium. One
> control teaches all six pairs of your contrast table, and it is reused in §1.5.

**Scene 8 — CHECK SC2-1 and SC2-2**

---

#### §1.3 Double entry (10 scenes · ~520 words · was 3,479 and 21,040 px)

**Scene 1 — "Left and Right" (DO)**
> A bare T-account. Two labels, *debit* and *credit*, to drop on the two sides. Then a prompt that is the
> whole point: *"Which side increases it?"* — and the answer depends on the account type, so the learner is
> immediately shown that the question is incomplete.

**Scene 2 — "The Expanded Equation" (SORT)** · *the mnemonic made spatial*
> `Assets + Expenses + Dividends = Liabilities + Equity + Revenues` written large. Six account-type chips to
> drop onto the correct side. Once placed, a **↑ debit** or **↑ credit** stamp appears on each. The mnemonic
> is not stated — it is the board the learner is working on. This is F01-04.

**Scene 3 — "The Contra Overlay" (DO)** · *the single most examined idea in the chapter*
> Equipment drawn as a bar of 4,200. Accumulated depreciation is a **translucent subtracting overlay** of
> 900. Drag the overlay onto the equipment bar → the bar visibly shortens to **3,300** and a line appears:
> *Equipment, net of accumulated depreciation 3,300*. Drag it instead to the **liabilities** column → total
> assets stay at 4,200 and a red flag reads *"assets overstated by 900"*.
> **Traps:** `contra-netting`. Repeated for the allowance and receivables.

**Scene 4 — "The Posting Machine · January" (DO ×6)** · OBJECT A, full form
> For each of your six January transactions: the narrative sits at the top in your words; **amount chips** are
> supplied (`1,500`, `100`, `1,400`…); the learner drags accounts and amounts onto debit and credit lines.
> **It will not post unless debits equal credits** — the Post button stays dead and the two column totals are
> shown live, so the learner sees the imbalance rather than being told about it.
> On a successful post: the `A = L + E` bar moves, and **one row of the F01-05 effect grid writes itself**.
> By the sixth entry the learner has *built* F01-05. They then click any row to re-open its entry.
> **This replaces: 6 journal exercises + the worked-example table + the F01-05 figure + 1 MCQ + 1 numeric
> exercise = 9 separate blocks, in one object.**

**Scene 5 — "Read your own grid" (DECIDE ×3)**
> The grid the learner just built. Three one-click probes, each your reading point verbatim: *"Rows 1 and 2
> brought in 2,300 of cash. How much of it is revenue?"* → the two rows highlight, the revenue column reads
> zero, and your sentence appears: *Money from owners and lenders is financing. It is not income.*

**Scene 6 — "Prove the equation" (DO)**
> The grid totals are blank. The learner enters the three totals (2,380 / 850 / 1,530) and the equation bar
> locks closed when they tie. Your three Exam Trap bullets are the diagnostics on the wrong answers, shown on
> the field.

**Scene 7 — "The Posting Machine · February" (DO ×6)** · *the Your Turn, faded as your book fades it*
> Rows 1–3 already posted and visible in the grid; rows 4–6 blank. Same machine. The fading is literal.

**Scene 8 — "Three Words, One English" (DECIDE)** · *your Arabic False-Friend box*
> `استهلاك` `اهتلاك` `إهلاك` appear as three signs from three regions (Gulf / Levant / Egypt, as your box
> says). All three must be routed to a single English sign: **depreciation**. Then `مخصص` appears **twice**
> and must be routed to **two different** English signs — *allowance* (reduces an asset) and *provision* (a
> liability) — which is exactly the point your box makes. A bin marked *reserve for bad debts* is shown
> crossed out. **Traps:** `estihlak-depreciation`, `allowance-vs-provision`.

**Scene 9 — "Say it the exam's way" (DO)** · *your Language Focus box*
> One sentence about the January entries with four gaps: *an increase **in** assets **of** 2,380*;
> *equity increased **by** 1,530*. Four small word-chips. Short, and the only grammar drill in the chapter.

**Scene 10 — CHECK SC3-1 and SC3-2**

---

#### §1.4 Accrual basis and matching (6 scenes · ~300 words · was 1,549)

**Scene 1 — "Two Calendars" (DO)** · F01-07
> Two year-strips, **2025** and **2026**, one above the other: the top is *accrual*, the bottom is *cash*.
> A single sale token (ship Dec 20, invoice 90, cost 54, paid Jan 15). Dragging the playhead along the
> timeline drops the revenue into **2025** on the accrual strip and into **2026** on the cash strip, in front
> of the learner. The gross profit of 36 lands with it. **One object, your whole figure.**

**Scene 2 — "Which year?" (DECIDE)**
> The same two strips, now empty. Three questions from your text: how much revenue in fiscal 2025 under
> accrual (90), the gross profit belonging to 2025 (36), and what the January collection changes (nothing but
> which asset). Wrong answers get your own diagnostics (0 = cash-basis thinking; 36 = gross profit not
> revenue; 54 = the cost).

**Scene 3 — "Three Pipes" (SORT)** · the matching principle
> A cost enters at the top and must be routed down one of three pipes: **cause and effect**, **systematic and
> rational allocation**, **immediate recognition**. Five costs, all yours: cost of goods sold, depreciation of
> the Amman bottling line, advertising for a new product, office salaries, head-office rent.

**Scene 4 — "The Timing Grid" (DO)** · *generates the four names instead of listing them*
> An empty 2×2: rows **cash first / cash later**, columns **we owe goods or services / they owe us**. The
> learner drops the four February situations into the cells; **as each cell fills, the name of the adjustment
> appears in it** — prepaid expense, contract liability, accrued expense, accrued revenue — together with
> *an asset* or *a liability*. Your table, derived rather than memorised.
> **Trap sprung:** `cash-not-trigger` — drop the Dubai hotel advance into *revenue* and it bounces with your
> line: *the company must still deliver the goods or services.*

**Scene 5 — CHECK SC4-1**
**Scene 6 — CHECK SC4-2**

---

#### §1.5 Who writes the rules (5 scenes · ~260 words · was 1,319)

**Scene 1 — "Four Jobs" (SORT)** · F01-08
> Two columns, **United States** and **International**, each a small org chart with empty job plates:
> *legal authority over public-company reporting*, *writes the standards*, *holds all U.S. GAAP in one place*,
> *sets AUDITING standards*, *writes IFRS*, *the oversight body*. Six chips. The PCAOB plate is visibly in a
> different column of the chart — the *auditing* branch — so the distinction is structural.
> **Traps:** `four-bodies`.

**Scene 2 — "The ASC Shelf" (DO)**
> A shelf of numbered volumes. The learner is asked for revenue and for leases and pulls out **606** and
> **842**. An ASU slides in and **amends** a volume rather than sitting beside it, which is your sentence
> made physical.

**Scene 3 — "The Name Switch, again" (DO)**
> The same toggle object from §1.2, now with all six of your pairs, over a full statement.

**Scene 4 — CHECK SC5-1**
**Scene 5 — CHECK SC5-2**

---

#### §1.6 A first look at the four statements (7 scenes · ~360 words · was 1,888)

**Scene 1 — "Four Covers" (DO)**
> Four statement covers. Each carries either a **calendar pin** (a date) or a **clock** (a period) — the
> learner must tag each one before it opens. Only the balance sheet takes the pin. Opening a cover shows its
> question from your table.

**Scene 2 — "Wire the Statements" (DO)** · F01-09, as a task rather than a diagram
> The four statements sit as panels with small ports. The learner must **drag two wires**: from *net income*
> on the income statement to *retained earnings* on the statement of changes in equity, and from *net change
> in cash* to the *cash* line on the balance sheet. Wrong wires will not connect. Once both are in, the real
> January numbers flow down them (80 → retained earnings; 1,060 → cash).

**Scene 3 — "Net income is not cash" (DECIDE)**
> The two wires, now carrying **80** and **1,060**. One question: why are they different? The answer reveals
> the three cash categories as a small breakdown (−40 operating, −1,200 investing, +2,300 financing).

**Scene 4 — "The Trial Balance Reader" (DO)** · F01-10 complete, all 20 lines
> Your trial balance as a **real table with every line and both columns**. The learner runs a highlighter
> down it, tagging each line **IS / SCE / BS**. The table colours itself as they go, the debit and credit
> totals stay visible at 9,750, and the two contra lines are the ones that catch people.

**Scene 5 — "Cue words" (DECIDE)** · your Language Focus box
> Four exam stems, one at a time. The cue word (**MOST**, **NOT**, **EXCEPT**, *immediately after*) is tapped
> in the stem, and the stem then visibly rewrites itself into what it is really asking.

**Scene 6 — CHECK SC6-1**
**Scene 7 — CHECK SC6-2** (uses the trial balance from scene 4, still on screen)

---

#### §1.7 Extended Example 1A (8 scenes · ~420 words · was 1,696) — **the centrepiece, rebuilt**

This is where the "statements are not complete" fix lands. Every statement below is **the full figure from
your book: every line, in your wording, in your order, with its amount.**

**Scene 1 — "Sort by element first" (SORT)** · your step 1
> The 20 trial-balance lines as chips, five buckets: asset, contra-asset, liability, equity, revenue,
> expense. This is the step your Exam Trap box says to do first, so it *is* the first scene.

**Scene 2 — "Why this order?" (DO)** · your step 1 plan
> Three statement covers to put in order, with a visible dependency: the SCE cover shows a socket labelled
> *needs net income*, and the balance sheet cover shows one labelled *needs closing retained earnings*. The
> order is forced by the sockets, not by a rule to remember.

**Scene 3 — "Build the income statement" (DO)** · **complete F01-11**
> ```
>   Sales revenue                     ____
>   Cost of goods sold               (____)
>   Gross profit                      ====
>   Wages expense                    (____)
>   Depreciation expense             (____)
>   Operating income                  ====
>   Interest expense                 (____)
>   Net income                        ====
> ```
> Eight real lines in your order. Each blank takes a chip that carries **both the account name and its
> amount**. Brackets are already printed on the deduction lines, so the learner sees the convention. The
> three subtotal lines count up as the lines above them fill. Three distractor chips: dividends declared,
> accumulated depreciation, prepaid rent.

**Scene 4 — "Build the statement of changes in equity" (DO)**
> ```
>   Retained earnings, January 1      ____
>   Net income                      + ____
>   Dividends declared              − ____
>   Retained earnings, December 31    ====
> ```
> The closing figure, once correct, **detaches as a chip** and is carried into the next scene — which is the
> dependency your chapter describes, made literal.

**Scene 5 — "Build the balance sheet" (DO)** · **complete F01-12**
> ```
>   Cash                                        ____
>   Accounts receivable, net of the allowance   ____   ← resolves only when BOTH
>   Inventory                                   ____      receivables and the allowance
>   Prepaid rent                                ____      are placed on it
>   Total current assets                        ====
>   Land                                        ____
>   Equipment, net of accumulated depreciation  ____   ← same, with accumulated depreciation
>   Total assets                                ====
>   Accounts payable and dividends payable      ____
>   Notes payable (long-term)                   ____
>   Total liabilities                           ====
>   Common stock and additional paid-in capital ____
>   Retained earnings                           ____   ← the chip carried from scene 4
>   Total equity                                ====
>   Total liabilities and equity                ====
> ```
> Your figure exactly, including the two combined lines you print. **The two net lines are the lesson:** drop
> only `Accounts receivable 300` on the net line and it shows **300 in red with "gross"** beside it; add the
> allowance and it resolves to **280**. The learner cannot complete the statement without performing the
> netting, and the wrong figure they would otherwise reach (6,030 / 6,910 / 7,850 — your own case
> diagnostics) is what the total displays while it is wrong.

**Scene 6 — "Make it tie" (DO)** · your step 5
> Three tie lines as three locks. Each closes when its figure is right. The balance sheet gets a visible seal
> when all three are shut.

**Scene 7 — "What the lender sees" (DECIDE)** · your step 6
> Two gauges: **working capital 1,344** and **current ratio 4.13**, plus one bar comparing the long-term note
> (1,800) against equity (3,780). One question with your conclusion as the answer.

**Scene 8 — CHECK SC7-1, SC7-2, SC7-3**

*Your step 7 (why the cash flow statement cannot be built) becomes a single locked fourth cover on the
statement rack, with your sentence as its tooltip. No separate exercise.*

---

#### Back matter

| Page | Change |
|---|---|
| **Summary** | F01-13 as seven rule cards, each linking back to the scene that taught it. One recall exercise, not three. ~180 words. |
| **Term bank** | **54 terms only** — your Term Bridge rows, nothing else. Two drills, both directions. The 26 invented Arabic renderings are gone. |
| **Practice P01–P16** | Unchanged in content (these are yours verbatim) but one question per screen, not a 8,613 px scroll. |
| **Case** | Rebuilt on the complete Statement Sheet, and `C1-1` uses your six categories only — the duplicate `C1-1b` I invented is removed. |
| **Mixed review** | Kept, but every item drawn from the scenes rather than newly written. The merged Dec-28/dividend scenario is **deleted**. |
| **Answers** | Unchanged mechanism (generated from the live definitions), smaller because there is less invented material to answer for. |

### 2.5 What gets deleted

- **26 invented Arabic terms** → removed from the term bank and the glossary.
- **~17,000 words of my prose** → replaced by the objects above.
- **The merged review scenario**, the surplus-land example, the `ASC 842-10-15` distractor, the fifth verb
  "reports", the invented `C1-1b` exercise, and the invented "depreciation was added back" option.
- **The four coloured box slabs** → traps and false friends move inside the scenes where they bite.
- **`how-to-use.html`'s invented framing prose** → trimmed to your front matter plus a short key to the
  interface.

### 2.6 New build checks (added to `_qa.html`)

1. **Provenance lock.** Every Arabic string, every money amount, every company and person name, and every
   question stem in the site must be found in `source/chapter-01.txt`. Fails the build otherwise.
2. **Word budget.** No scene over 40 words of chrome text; no page over its section budget; chapter total
   under 3,200.
3. **Statement completeness.** F01-11 and F01-12 must render every line of the source figure, in order, with
   its amount. Diffed against the source file line by line.
4. **Viewport rule.** No scene taller than 100 vh at 1280×900.
5. **Drag affordance.** Every draggable has a grip, a lift state and an amount where the source has one.

### 2.7 Sequence and checkpoint

| | |
|---|---|
| **Step 1** | The three objects (Ledger Machine, Statement Sheet, Term Strip) + the scene shell + the new build checks. Nothing else. |
| **Step 2** | **§1.7 rebuilt first**, as the proof — it is the one you can judge fastest, because "is this the statement in my book?" is a yes/no question. **Checkpoint: I stop here and show you.** |
| **Step 3** | §1.3 (the Posting Machine), then §1.2, §1.4, §1.6, §1.1, §1.5. |
| **Step 4** | Back matter, provenance sweep, package. |

I would rather you saw §1.7 on its own than received another full build I was confident about.

---

## Part 3 — Two things I need from you

1. **The 26 terms with no Arabic in the chapter.** My plan is to show them in English only until you supply
   Arabic, since inventing them is what caused this. If you would rather I drop those terms from the term
   bank entirely, or you want to add the Arabic yourself, say which.

2. **The figures.** Your chapter references F01-01 through F01-13 as images that I have never seen — I only
   have their captions. Everything I built was inferred from the caption plus the surrounding text. If you
   can send the actual figures, the rebuilt scenes can follow your visual design instead of my guess at it.
   That is probably the single biggest remaining source of "this isn't quite my chapter".
