# Wayfinder Starter — Book 1

**Deliverable:** `../Wayfinder-Starter-Book1.docx` — the whole book as one Word file.
219 pages A4 · 42,500 words · 183 figures · 174 tables · 195 audio cues.

## What is in the file

| Section | |
|---|---|
| Front matter | Title page, How to use this book, Contents, Scope and sequence |
| **Starting Point** | In class and online |
| **Units 1–12** | Six lessons each: Vocabulary · Real-life Reading · Grammar · Everyday Conversation · Writing · Team Up & Review |
| Back matter | Grammar reference (all 13 units), Audio index and scripts, Word list |

## Structure, for the website build

Every structural element is a named Word style, so the file can be parsed into a site without
re-authoring. Nothing relies on manual formatting.

| Style | What it marks |
|---|---|
| `WF Unit Number` / `WF Unit Title` / `WF Unit Sub` | unit header |
| `WF Lesson` | one of the six lessons |
| `WF Section` | a numbered section inside a lesson |
| `WF Box Head` | Unit goals, Remember?, Digital skills, Take It Outside, On the Job, Culture Check, Check Yourself, Think It Through, My Progress |
| `WF Rubric` | an exercise instruction (1A, 1B, 2A …) |
| `WF Body` / `WF Model` / `WF Dialogue` | prose · model text · conversation turn |
| `WF Audio` | a track cue, always `W1-uu-tt` |
| `WF Figure` / `WF Gloss` / `WF Note` | image · glossary line · tip |

Every image carries its alt text as image metadata (`descr`) and its figure id as `title`, so the
alt text travels into HTML automatically and nothing has to be re-written for accessibility.

## Source

The Word file is **generated**, not hand-made. Rebuild it with:

```bash
python3 wayfinder/_build/build_book.py
```

| Path | |
|---|---|
| `text/*.md` | the book's text, one file per unit, plus `front.md` and `back.md` |
| `figures/*.png` | 183 rendered figures |
| `../_build/art_core.py` | the character system — one figure, built from the same parts every time |
| `../_build/art_icons.py` | 139 vocabulary icons |
| `../_build/art_scenes.py` | scenes, charts, diagrams and realia templates |
| `../_build/spec_a/b/c.py` | what every figure contains, one entry per figure |
| `../_build/figgen.py` | the figure builders |
| `../_build/build_docx.py` | Markdown → Word, with the style system above |

## Checks that pass on the finished file

- 183 figures referenced, 183 rendered — exact match, none missing
- 195 audio cues, all well-formed `W1-uu-tt`, all unique, 16 per unit
- No currency symbol, no US-only institution, no third-party brand, no picture-dictionary reference
- No British token left in the American base (the variant layer holds them for a UK edition)
- Every model text inside the A1 word budget (55–75 words)
- Every figure carries alt text

## Known gaps

- **Answer key** is not in this file. It belongs in the Teacher's Book; Unit 1's full key already
  exists at `u01/AK_starter-u01.md` as the model.
- **Audio scripts** are indexed and the six non-printed track types are scripted in full. The
  tracks that simply read printed text are marked as such rather than duplicated.
- **Teacher's notes** exist for Unit 1 only (`u01/TN_starter-u01.md`).
- **Page numbers in Contents** are placeholders from the planned 14-page unit grid; the Word file
  flows to 219 A4 pages and would be repaginated at design.
