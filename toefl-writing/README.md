# TOEFL Writing — guide and offline practice site

Material for the **updated TOEFL iBT Writing section**, in force from
21 January 2026: three tasks, twelve items, about twenty-three minutes.
Integrated Writing has been removed from the test, and from this.

| Task | Items | Timing |
|---|---|---|
| Build a Sentence | 100, in 12 grammar families | 10 items, ~6½ min |
| Write an Email | 100 | 7 min |
| Write for an Academic Discussion | 100 | 10 min |

Every exercise carries a hidden teaching payload — one strategy, one
grammar point, one vocabulary set, one convention — drawn from a
300-item curriculum map, so nothing repeats and nothing is incidental.
Each has 3–5 preview questions to answer *before* seeing anything, a
band-5 model, a band-3 contrast, 3–5 follow-up questions that take the
model apart, and a written key for every question: **1,355 questions,
1,355 keys**, about 2,200 prompts once the lettered parts are counted.

## Layout

```
book/        the printed guide: engine, curriculum map, validators, 300 items
book/out/    the built .docx (685 pages; the PDF regenerates from it)
site/        the offline-site generator
practice/    the built site — open practice/index.html, nothing to install
```

## Building

```sh
cd book  && python3 build.py        # -> out/*.docx, *.pdf  (needs libreoffice)
cd site  && python3 build_site.py   # -> ../site_out/       (pure python)
cd site  && python3 test_rich.py    # rich-text renderer fixture test
cd site  && node smoke.js           # opens all 313 pages in headless chromium
```

`build_site.py` imports the book's own `build.py` and `validate.py`, so
the site cannot drift from the guide: anything that would fail the book's
gates fails the site build before a page is written.

## How the checking works

The site is honest about what a machine can mark, and says so on the
page:

- **Word tiles are machine-marked.** The assembled sentence is compared
  with the answer token by token, using the normaliser the book was
  validated with, and the first word out of place is marked. The site
  build additionally proves, by search over orderings, that every one of
  the 100 tile exercises is solvable — a stronger guarantee than the
  book's own gate, which only checks that the tiles and the answer use
  the same words.
- **Every preview and follow-up question reveals an authored key.** You
  answer, you check, you mark yourself Got it / Partly / Missed. The mark
  sets a review date (1 / 3 / 10 days) and the contents page offers the
  queue.
- **Your own email or discussion response is not graded.** Nothing
  offline can judge an argument. What is checked is mechanical and
  labelled as such: length against the floor, greeting and sign-off for
  an email, and — for a discussion — whether both classmates were
  actually engaged by name, which is the same gate the book applies to
  its own models. Then you compare your draft against the band-5 model.
- **Fault-finding is machine-marked.** Six statements, three true of the
  band-3 version in front of you, three belonging to a different task.
  The distractors are generated, with two guards: they are drawn from the
  other written task, and only used when they quote text that does not
  appear in this item's band-3 version.

## Provenance

The exercises are original. Task formats, timings and scoring bands
follow the official ETS description of the updated test. The band logic
throughout is taken from the two scored samples in that description:
both contain errors, and what separates a 4 from a 5 is whether an error
damages meaning, not how many there are.
