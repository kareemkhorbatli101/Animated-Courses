# English for International Journalists — B1
## The plan, the format specification, and the transposition rules

This document is the contract for the new title. Everything in it is measured from
books already published on this site, not asserted from taste. Where a number
appears, it was counted; the counting command is given so it can be re-run.

---

## 1. What is being made

| | Source | Target |
|---|---|---|
| Title | English for Journalism (Syrian content) | **English for International Journalists** |
| Level | CEFR B1 | CEFR B1 (unchanged) |
| Audience | Journalists working in Syria, in Arabic, needing English | Journalists working anywhere, in any first language, needing English for cross-border work |
| Book | 10 units, 20 screens per unit, two tracks | 10 units, 20 screens per unit, two tracks (unchanged) |
| Setting | Syrian outlets, Syrian datelines | **Crosswire**, an international news agency, and a rotating dateline per unit |
| Part 9 | Syria in Focus | **Field Focus** — a different dateline each unit |
| Part 11 | (the Syrian edition's home-ground screen) | **Your Newsroom in Focus** — the reader's own country is the home ground |

### The honest note on the source

The Syrian journalism book is not reachable from this session: it is not in this
repository and not in the connected Drive. The user's instruction was to
reconstruct the baseline from the series template. That is a stronger position
than it sounds, because this repository holds **six** finished books in the same
series, one of which is already an international edition of a national one:

| Title | Dir | Units | Screens/unit | Notes |
|---|---|---|---|---|
| English for Banking B1 | `banking/b1` | 10 | 20 | Two tracks, Global Case + rotating city case + Syria in Focus |
| English for Accountants B1 · International Edition | `accountants-intl/b1` | 10 | 22 | **A national book already taken international** |
| English for Accountants B1 | `accounting/b1` | 5 | 21 | The national original |
| English for the Hospitality Industry (Syria) | `hospitality/b1` | 10 | 16 | |
| English for Auto Maintenance B1 | `eam/b1` | 10 | 21 | Richest `why`-prose in the series |
| English for Foreign Ministry Staff B1.1 | `fms/b1` | 5 | 22 | |

**`banking/b1` is the baseline.** It is the closest sibling to a journalism book:
a professional (not trade) B1 title, ten units, two tracks, a Management File for
practitioners, a Global Case Study, a rotating-city case study, and a
home-ground screen. A journalism book in this series would be built on it. Every
measured figure below comes from `banking/b1/assets/data/unit1`.

**`accountants-intl/b1` is the transposition precedent.** It shows how this house
takes a national book international: the subtitle gains *International Edition*,
the setting becomes one named multinational organisation with named city
bureaux, and the cast becomes multinational. The new title follows it.

---

## 2. Transposition rules

The rule that governs everything: **structure, sequencing and exercise grammar
are invariant; only the content's centre of gravity moves.** A reader who knows
the Syrian book must find every screen where they left it.

### 2.1 Invariant — do not touch

1. Ten units.
2. Twenty screens per unit, in the same order, with the same `ord`.
3. Parts 0–10 (+11), same names, same boundaries: Warm-Up, Vocabulary ×2,
   Grammar ×2, Listening ×2, Speaking ×2, Reading ×2, Writing ×2,
   Management File ×2, Global Case ×2, Field Focus, Your Newsroom, Review.
4. Four tracks: `warmup`, `operator`, `practitioner`, `review` (+ the home-ground
   screen's own track).
5. The grammar syllabus and its order. A B1 spiral cannot be reshuffled without
   breaking its own revision: Unit 9 revises Unit 1's tenses on purpose.
6. The card-type palette and its distribution (§4.3).
7. Item counts per card type (§4.4).
8. Word ranges for productive tasks: 30–40, 40–60, 50–70, 60–80.
9. One visual per screen, on card 1, drawn in code, zero image files.
10. The ref scheme: `W-A…`, `1A…`, `2A…`, …, `10A…`, and `S-A…` for the
    home-ground screen.
11. Every receptive item carries a `why`; every productive task carries a model.

### 2.2 Moved — the content's centre of gravity

| Dimension | Syrian edition | International edition |
|---|---|---|
| Organisation | a Syrian outlet | **Crosswire**, an international agency with city bureaux |
| Dateline | Damascus, Aleppo, Homs | one dateline per unit, ten in all (§5.3) |
| Cast first language | Arabic speakers | multinational; Arabic among many |
| The L1-contrast problem | Arabic→English interference, named | **first-language-neutral**: the interference points are taught as *common B1 errors*, not as Arabic errors |
| Part 9 | Syria in Focus | Field Focus — a rotating dateline |
| Part 11 | the home ground is Syria | **the home ground is the reader's own country** |
| Glossed support | Arabic glosses (`ar.js`) | no second language assumed; the glossary defines in plain English |
| Institutional references | Syrian ministries, Syrian press law | international and comparative: accreditation regimes, codes of conduct, press-freedom instruments |
| Cultural frame | one culture, described | several cultures, **compared** — the comparison task replaces the description task |

### 2.3 The one structural substitution, and why

The Syrian book's Part 11 does two jobs: it gives a case on the edition's home
ground, and it ends *"compare with where you work."* Those jobs come apart when
the audience is international, because there is no single home ground.

The substitution keeps both jobs and changes only whose ground it is:

- **Part 9 · Field Focus** — a named dateline, different every unit. Somebody
  else's ground, read and judged. (This is not an invention: `banking/b1`
  already runs exactly this screen as *"Branch Case Study — Nairobi in Focus"*,
  with datelines rotating across Nairobi, Manila, Istanbul, São Paulo, Warsaw
  and Rotterdam.)
- **Part 11 · Your Newsroom in Focus** — the reader's own ground, described by
  the reader, then compared. The screen the Syrian reader answered about Syria,
  the Kenyan reader answers about Kenya.

Nothing is deleted. The screen count stays at 20.

---

## 3. The measured source profile

Run from the repository root:

```sh
node tools/spec_profile.js banking/b1/assets/data/unit1 BNK      # the baseline
node tools/spec_profile.js journalists-intl/b1/assets/data/unit1 JRN
```

Both columns are produced by the same program over the same definitions, so the
comparison is exact rather than impressionistic. The **Built** column is Unit 1
of this book as it now stands.

| Measure | `banking/b1` U1 (baseline) | Target | Built |
|---|---|---|---|
| Screens | 20 | 20 | **20** |
| Cards | 54 | 58–60 | **59** |
| Visuals (one per screen, card 1) | 20 | 20 | **20** |
| Distinct drawn spots registered in the title | 17 | 18–20 | **20** |
| Distinct spots used in Unit 1 | 6 | 10–12 | **11** |
| Gap-fill items (`cloze`) | 45 | 42–48 | **45** |
| True/False/Not Given items | 11 | 10–12 | **11** |
| Error-correction items | 5 | 5 | **5** |
| Discussion questions | 22 | 20–26 | **22** |
| Productive tasks (`writer` + `report`) | 15 | 15 | **15** |
| `cloze` cards | 9 | 8–10 | **9** |
| `discuss` cards | 8 | 7–9 | **8** |
| `dragmatch` cards | 8 | 7–9 | **8** |
| `writer` cards | 8 | 7–9 | **8** |
| `report` cards | 7 | 6–8 | **7** |
| `quizset` cards | 3 | 3 | **3** |
| `editor` cards | 1 | 1 | **1** |
| `checklist` cards | 1 | 1 | **1** |
| `study` cards | 9 | 13–15 | **14** |
| Scripted dialogue lines | 19 across 4 cards (3–22 words, median 9) | 3–28 words | **25 across 5 cards** (3–26, median 9) |
| Reading texts printed in full | 0 of 2 | 2 of 2 | **2 of 2** |
| Case texts printed in full | 1 of 3 | 3 of 3 | **3 of 3** |
| Word ranges | 30–40, 40–60, 50–70, 60–80 | identical | **identical** |
| Glossary terms | 12 defined, 10 printed | 12 / 10 | **12 / 10** |
| Can-Do statements | 8 operator + 5 practitioner | 8 + 5 | **8 + 5** |
| Objectives | 1 per Part, repeated per screen | identical | **identical** |

**Where the two differ, and why.** Every count above matches the baseline
exactly except `study` cards, and therefore the card total. The baseline spends
9 `study` cards; this book spends 14. The five extra are precisely the texts the
baseline asks questions about without printing: the long listening script (the
5th script card, and the reason this book has 25 scripted lines to the
baseline's 19), the agency profile, the staff profile, the global case and the
field case (§3.1).
Printing a text costs a card, and the house's own way of printing one is a
`study` card — which is what `banking/b1` does for the single case it *does*
print. So the five extra cards are the format applied without the gap, not a
departure from it.

**An earlier draft of this table guessed.** It put discussion questions at 33
and gaps at 41, from a first count that wrongly swept `quizset` items in with
`discuss` questions. Measured properly, the baseline has 22 and 45. The targets
above are set from the measurement, and the band for each is the baseline value
with a tolerance, not a number chosen to flatter the result.

### 3.1 A defect in the baseline that this book fixes

`banking/b1` Unit 1 asks questions about a reading text — *"Welcome to Harbour
Bank"* — that the screens never print. The same was true of the hospitality
book's Part 9 until commit `d4122ba0`, *"Hospitality Part 9: the case the page
never showed."* The house is fixing these as it finds them.

This book prints every text it questions, on the screen that questions it.
That is not a departure from the format; it is the format's own standard,
applied without the gap.

---

## 4. The format specification

Sixty-four criteria, grouped. Each is a checkable assertion about the finished
book, and §8 says which check pass proves it.

### 4.1 Book-level (1–10)

1. Ten units, `unit1`…`unit10`.
2. One `meta.js`, `map.js`, `glossary.js`, `index.json` per unit.
3. Twenty screen files per unit, named `sNN-<part>-<n>.js`.
4. Twenty screen pages per unit, named to match, plus `unit1/index.html`.
5. A course `index.html` with the title, blurb, unit list and screen count.
6. Engine namespace `JRN`, one global, no leakage of another title's namespace.
7. Zero image files. All art drawn in `art-journalism.js` via `A.addSpot`.
8. Subtitle on every unit: `English for International Journalists — B1`.
9. `cefr: 'CEFR B1'` on every unit.
10. Every unit declares its grammar point in `meta.grammar`.

### 4.2 Unit-level (11–22)

11. Unit title names the journalistic situation, not the grammar.
12. `blurb` of 30–45 words: what the reader will be able to do, then the grammar.
13. Eight operator Can-Dos, five practitioner Can-Dos.
14. Each Can-Do is a sentence beginning `I can`, naming a performance, not a topic.
15. `cast` lists every named person in the unit, alphabetically.
16. Twelve glossary terms, each with a one-clause plain-English definition.
17. Ten of the twelve printed in the Review screen's glossary card.
18. Every glossary term is taught somewhere in the unit before the Review.
19. One objective per Part, repeated verbatim on every screen of that Part.
20. Parts in fixed order with fixed `part` codes: `0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,11,10`.
21. Tracks assigned: `warmup`(1), `operator`(12), `practitioner`(5), field/home(1), `review`(1).
22. Track labels verbatim from the house set (§4.8).

### 4.3 Card-type distribution (23–31)

Measured from the baseline; the target book matches within ±1 per type.

| Type | Baseline | Target |
|---|---|---|
| `cloze` | 9 | 8–10 |
| `study` | 9 | 8–10 |
| `dragmatch` | 8 | 7–9 |
| `discuss` | 8 | 7–9 |
| `writer` | 8 | 7–9 |
| `report` | 7 | 6–8 |
| `quizset` | 3 | 3 |
| `editor` | 1 | 1 |
| `checklist` | 1 | 1 |

23. No card type is used that the engine's `EX` registry does not implement.
24. The nine types above account for every card.
25. `cloze` cards carry `answers`, `bank` and `why`, one `why` per gap.
26. `dragmatch` cards carry exactly one chip labelled `(extra)`.
27. Every `dragmatch` target's `accept` names a chip that exists.
28. `quizset` items offer True / False / Not Given, exactly one `ok: true`.
29. Every `quizset` option carries the same `why` — the reason is the item's,
    not the option's.
30. `editor` items carry `wrong`, `accept` (an array) and `why`.
31. `writer` cards carry `minWords`, a `paras` purpose naming the word range,
    a `model`, and — where the task has a checklist — a `coach`.

### 4.4 Item counts (32–38)

32. Vocabulary match: 7 targets, 8 chips (1 extra).
33. Vocabulary gap-fill: 9 gaps, word bank of 9.
34. Collocation match: 5 targets, 6 chips.
35. Grammar controlled practice: 6 gaps.
36. Error correction: 5 items.
37. Spiral review: 8 gaps, mixing lexis and both tenses, each tagged `(role)`,
    `(word)`, `(routine)` or a bracketed verb.
38. Every `discuss` card asks 2–4 questions, `minWords: 6`, `rows: 2`.

### 4.5 Language control (39–48)

39. CEFR B1 throughout: no word outside B1 unless it is a unit glossary term
    taught on the screen that uses it.
40. British English spelling and punctuation (`organise`, `-ise`, single quotes
    inside doubles), matching the baseline.
41. Curly quotes and apostrophes in all learner-facing prose.
42. Sentence length in instructions: 8–22 words; no instruction over 3 sentences
    before a `<br>`.
43. Scripted dialogue turns: 1–2 sentences, 8–18 words.
44. Reading texts: 150–200 words, 4–6 paragraphs.
45. Case texts: 120–180 words.
46. Models for productive tasks sit inside their stated word range, counted.
47. No Syrian-specific referent anywhere, and no Arabic-specific contrast.
48. No real news organisation, real journalist, or real current event is named
    as a source of claims; institutions are described generically or fictionally.

### 4.6 Pedagogy (49–58)

49. Pre-teach before use: a word is defined before a task requires producing it.
50. Notice before rule: the grammar Part opens with a script and a noticing task,
    and only then states the rule.
51. Controlled → freer: every Part moves from recognition to production.
52. Every receptive item explains itself. A `why` names the evidence, not just
    the answer.
53. One worked example per exercise where the baseline gives one (`given`,
    *"Here is an example"*, *"done for you"*).
54. The grammar taught is the grammar the unit's reading and listening carry, and
    the Part 2 screens say where it will reappear.
55. Spiral: the Review re-asks the unit's lexis and grammar with no prompting.
56. Can-Do checklist in the Review, with the unit's five headline performances.
57. Practitioner track is optional and labelled as such; the operator track is
    complete without it.
58. Speaking tasks name the pair roles and give useful language.

### 4.7 Visuals (59–62)

59. Twenty visuals per unit, one per screen, on card 1.
60. Each is a named `spot` registered in `art-journalism.js`.
61. Each shows the domain's own object or structure — a dateline, an inverted
    pyramid, a press card, a fact-check grid — never a decorative icon.
62. Each reads in light and dark theme, and carries a caption of 2–5 words.

### 4.8 House strings (63–64)

63. Track labels, verbatim:
    - `In-class starter · speak before you read`
    - `Pre-class input`
    - `Pre-class input · scripts printed below`
    - `In-class output`
    - `In-class / homework output`
    - `Practitioner track (optional for beginners) · experienced staff`
    - `Practitioner track · read then discuss`
    - `Practitioner track · read then decide`
    - `International edition · compare with where you work`
    - `Homework / self-study`
64. Card furniture, verbatim: `Click a meaning, then click the item it belongs
    to.` / `What each one means` / `How each gap is decided` / `Your answers are
    saved — this one is a discussion, so the book prints no single answer.` /
    `I have listened` / `I have read this` / `I know these` /
    `Listen to each line, or read the script. Every word is the book's own.`

---

## 5. The book

### 5.1 Setting and cast

**Crosswire** is an international news agency. It runs a head-office desk and
bureaux in ten cities. Its people are the book's cast, and they recur, so that
by Unit 10 the reader knows the newsroom the way the auto-maintenance reader
knows Cham Motors.

| Person | Role | Function in the book |
|---|---|---|
| Aisha Bello | junior reporter, new | the learner's avatar — the one being shown |
| Nadia Osman | bureau chief, Nairobi | the manager — the Management File's voice |
| Tomás Oliveira | desk editor | the one who asks *where did this come from?* |
| Yuki Tanaka | correspondent | the one in the field |
| Priya Menon | data journalist | numbers, Units 3 and 9 |
| Sofia Marchetti | standards editor | attribution and ethics, Units 5 and 8 |
| Daniel Kaufmann | picture editor | Units 4 and 7 |
| Marek Zieliński | producer / fixer | access and safety, Units 2 and 7 |
| Omar Darwish | stringer | the freelance view, Units 7 and 10 |

### 5.2 The ten units

The grammar sequence is the house B1 sequence, unchanged from the sibling book.
Each unit's topic is the place where that grammar actually lives in journalism —
which is why reported speech is Unit 10 and the passive is Unit 5.

| # | Unit title | Grammar | Journalistic core |
|---|---|---|---|
| 1 | Inside the Newsroom | Present simple vs present continuous | Who does what; what you are working on now |
| 2 | Getting Access | Modals for requests and offers: can / could / may | Asking for an interview, accreditation, permission |
| 3 | Numbers in the News | Quantifiers: much, many, a few, a little | Figures that change; what you can and cannot claim |
| 4 | What Makes a Story Bigger | Comparatives and superlatives | News value, running order, the lead |
| 5 | Attribution | Active and passive voice | *Who said it* — and what the passive hides |
| 6 | The Interview | Indirect questions | Asking hard things politely; the follow-up |
| 7 | Working Safely in the Field | Zero and first conditionals | Risk assessment; if–then planning |
| 8 | Law, Ethics and the Code | Obligation: must, have to, mustn't, don't have to | What a journalist must and must not do |
| 9 | The Running Story | Present perfect and past simple | Breaking news; what *has happened* and what *happened* |
| 10 | Quoting and Reporting | Reported speech | On the record, off the record, the contested quote |

### 5.3 Field Focus datelines, and the two case studies

| # | Part 8 · Global Case Study | Part 9 · Field Focus | Part 11 · Your Newsroom |
|---|---|---|---|
| 1 | Staffing a 24-hour cycle | **Nairobi** — the morning conference | your own newsroom's roles |
| 2 | An access desk at a global broadcaster | **Brussels** — accreditation for a summit | access where you work |
| 3 | A data team that checks every number | **Jakarta** — a flood figure that keeps moving | whose numbers you trust |
| 4 | How a global outlet chooses its lead | **Mexico City** — two stories, one front page | your own running order |
| 5 | A standards desk and the word *alleged* | **Johannesburg** — a contested arrest | attribution rules where you work |
| 6 | An interview that changed a policy | **Seoul** — the official who will not answer | your hardest interview |
| 7 | A safety department for freelancers | **Beirut** — a protest assignment | your own risk assessment |
| 8 | A global code of conduct | **Manila** — a court order and a name | your own code |
| 9 | A live blog that ran nine days | **Reykjavík** — an eruption, hour by hour | your last breaking story |
| 10 | A quote desk and the rules of the record | **Buenos Aires** — a quote denied | going on the record where you work |

### 5.4 The unit's twenty screens

Fixed for all ten units. Unit 1's content is given as the worked instance.

| § | File | Part | Track | Cards | Unit 1 content |
|---|---|---|---|---|---|
| 1 | `s01-warm-up-1` | 0 | warmup | 3 | Roles and jobs brainstorm; news where you live; a story you followed |
| 2 | `s02-vocabulary-1` | 1 | operator | 3 | 7 newsroom roles matched; 9-gap context fill; 5 collocations |
| 3 | `s03-vocabulary-2` | 1 | operator | 2 | Field or desk?; write 40–60 words on a newsroom you know |
| 4 | `s04-grammar-1` | 2 | operator | 4 | Script; notice routine/now; 6-gap practice; 5-item error correction |
| 5 | `s05-grammar-2` | 2 | operator | 2 | Write your own day; freer pair practice |
| 6 | `s06-listening-1` | 3 | operator | 5 | Predict; Dialogue 1 + T/F/NG; Dialogue 2 + T/F/NG |
| 7 | `s07-listening-2` | 3 | operator | 2 | Longer listening T/F/NG ×5; who is doing what now |
| 8 | `s08-speaking-1` | 4 | operator | 3 | Self-introduction; role play; information gap |
| 9 | `s09-speaking-2` | 4 | operator | 2 | The press-room mingle; newsroom small talk |
| 10 | `s10-reading-1` | 5 | operator | 3 | **Agency profile, printed**; vocab in context; grammar in context |
| 11 | `s11-reading-2` | 5 | operator | 1 | Compare with a newsroom you know |
| 12 | `s12-writing-1` | 6 | operator | 3 | Parts of a pitch email; guided completion; write your own 50–70 |
| 13 | `s13-writing-2` | 6 | operator | 3 | Colleague profile 40–60; peer check; improve the email |
| 14 | `s14-management-1` | 7 | practitioner | 4 | Editor's phrase bank; day-one script; questions; induction checklist |
| 15 | `s15-management-2` | 7 | practitioner | 2 | Brief a new reporter; noticeboard bio 60–80 |
| 16 | `s16-global-case-1` | 8 | practitioner | 3 | **Case printed**; comprehension; vocabulary; discussion |
| 17 | `s17-global-case-2` | 8 | practitioner | 1 | Your view, 30–40 words |
| 18 | `s18-field-focus-1` | 9 | practitioner | 2 | **Nairobi case printed**; decision task 40–60 |
| 19 | `s19-your-newsroom-1` | 11 | intl | 3 | Read the comparison case; answer; compare with your own |
| 20 | `s20-review-1` | 10 | review | 3 | 8-gap spiral; Can-Do checklist; unit glossary |

---

## 6. What this book does better than its baseline

Four places where the baseline is thin and the spec raises it. None changes the
structure; each fills a slot the structure already has.

1. **Texts are printed.** Every reading and every case appears in full on the
   screen that questions it (§3.1).
2. **`why` prose carries the reasoning.** The baseline often writes
   `why: '<b>teller</b>.'` — the answer restated. The richest book in the series,
   `eam/b1`, writes a paragraph that names the evidence and the trap. This book
   follows `eam/b1`.
3. **The extra distractor is explained.** Where a `dragmatch` has an extra chip,
   the `why` says what it would have matched, so the distractor teaches.
4. **One worked example per exercise**, as `eam/b1` does with `given`.

---

## 7. Build order

1. `PLAN.md` — this document. ✅
2. Engine: `assets/js`, `assets/css`, namespace `JRN`, `art-journalism.js`.
3. Unit 1 data: `meta.js`, `map.js`, `glossary.js`, `index.json`, 20 screens.
4. Pages: 20 screen pages, `unit1/index.html`, `b1/index.html`.
5. Check passes (§8).
6. Units 2–10, same order, one unit at a time.

## 8. Check passes

`tools/jrn_check.py` asserts the specification against the built files.

Run them with:

```sh
node   tools/jrn_check.js        journalists-intl/b1 unit1   # A–F, I
python3 -I tools/jrn_lang_check.py journalists-intl/b1 unit1 JRN  # G, H
node   tools/jrn_render_check.js journalists-intl/b1 unit1   # J, in Chromium
```

| Pass | Asserts | Criteria |
|---|---|---|
| A · Schema | Every screen parses; every card has `id`, `ref`, `bookRef`, `type`, `title` | 23–24 |
| B · Type contracts | Per-type required fields present and well formed | 25–31 |
| C · Answer integrity | Every gap has answer + bank + why; every match target's chip exists; exactly one extra; exactly one `ok: true` per quizset item | 25–30 |
| D · Counts | Screens, cards, visuals, gaps, items against §3 and §4.4 | 1–5, 32–38 |
| E · Visuals | Every `spot` is registered; one per screen, on card 1 | 59–62 |
| F · Strings | Track labels and card furniture byte-identical to the house set | 63–64 |
| G · Language | British spelling; curly quotes; instruction and turn lengths; model word counts inside stated ranges; B1 word list | 39–46 |
| H · Content | No Syrian referent; no Arabic contrast; no real outlet or event named as a source | 47–48 |
| I · Pedagogy | Glossary terms taught before Review; objectives repeated per Part; Can-Do counts; worked example present | 16–22, 49–58 |
| J · Render | Every page loads its own data and renders without console error | 1–7 |

A pass that fails names the file, the card and the criterion.
