# Wayfinder 4 — Book 5

**Deliverable:** `../Wayfinder-4-Book5.docx` — the whole book as one Word file.
270 pages A4 · 77,100 authored words · 194 figures · 194 audio cues.

CEFR B1+. Set in Portmere four years after Wayfinder Starter, with the same cast.

## What is in the file

| Section | |
|---|---|
| Front matter | Title page, How to use this book, Contents, The people |
| **Starting Point** | Register: the same thing said four ways, and a tense review |
| **Units 1–12** | Who Are You? · In the News · On the Move · Career Steps · Safety Matters · People Skills · Budget Wise · Smart Shopper · Take Care · Get Involved · Living Online · How Am I Doing? |
| Back matter | Grammar reference · Audio index · Word list · **Academic word list** · Sources |

## What is new against Book 4

**Academic language, nine items per unit.** 108 in all — *to constitute*, *notwithstanding*,
*prima facie*, *insofar as*, *proximate cause*, *burden of proof*. These are the words that appear
in every policy, report and formal letter and almost never in conversation, which is why nobody
acquires them by living here. Each is boxed, glossed and used in its unit's reading text.

**Distance.** The grammar of this level is the grammar of not being the person you are
describing: the past passive, reported speech, *should have*, the present unreal conditional,
indirect questions, tag questions. Six of the twelve units require the learner to take something
somebody said and pass it on accurately.

**Three numbers that are hard to use.** This is the first book where the sources themselves are
the lesson. One figure's base is not stated anywhere in the published summaries. One is an
estimate for 2019 published in 2023 and is still the best figure that exists. One is repeated on
every staff-room poster under a heading it does not support. All three are printed, all three
carry their caveat in the text, and the tasks ask the learner about all three. Unit 11's task
teaches the sentence *we cannot tell from this*, which is a real answer and the hardest one to
say.

## Every number in this book is real

Twelve sources, checked by search while the book was written, listed in `../_series/SOURCES.md`
and in the book's own back matter: WEF, Reuters Institute, Eurobarometer, OECD, ILO, Eurostat,
the European Commission, WHO and International IDEA.

## Structure, for the website build

Identical to Books 1–4: every structural element is a named Word style, and every image carries
its alt text as image metadata and its figure id as the image title. Five books, one parser.

## Source and rebuild

```bash
python3 wayfinder/_build/render_book5.py && python3 wayfinder/_build/build_book5.py
```

| Path | |
|---|---|
| `text/*.md` | the text, one file per unit, plus `front.md` and `back.md` |
| `figures/*.png` | 194 rendered figures, in the Level 4 green |
| `../_build/spec_y1…y4.py` | what every figure contains |
| `../_build/build_book5.py` | the Book 5 build |

The art system added 16 icons for this level — a pallet, racking, a barrier, a clipboard, a star,
a review, a petition, a departure board, a chain, a bottleneck.

## Checks that pass on the finished file

Run `python3 wayfinder/_series/bookcheck.py wayfinder/level4`.

- 194 figures referenced, 194 rendered — exact match
- 194 audio cues, all well-formed `W5-uu-tt`, all unique, 16 per unit
- Every figure carries alt text
- No currency symbol, no US-only institution, no third-party brand
- No British token in the American base
- Every lesson carries at least three oral slots and at least one open question; no silent openers
- Reading texts: 12 of 12 scored, Flesch-Kincaid 4.9–8.2 against a document ceiling of 12.0

## Known gaps

The answer key belongs in the Teacher's Book. Teacher's notes exist for Starter Unit 1 only. Six
of the sixteen audio types per unit are deliberately not printed, and their scripts are in the
Teacher's Book. Three gates
still need a per-unit META spine and two are human reads by design.
