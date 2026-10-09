# B1 — where it stands, and how to work on it

## 2026-10-09, final — B1 was rebuilt against a real coursebook

A reader rejected B1 Unit 1 three times: one topic through eleven parts, then
pictures that restated their own captions, then prose that was vague and
unfocused. The fourth message supplied a published unit,
`source/PE_B2_U08_StudentBook.docx`, and asked for a comparison. The comparison
is the finding:

| | the published B2 unit | B1 Unit 1 as it was |
|---|---|---|
| numbered exercises | **59** | 42 sub-sections, many of them prose |
| prose blocks over 60 words | **4** | **25** |
| mean sentence | **9.9 words** | 14.6 |
| Flesch-Kincaid | **3.25** | 5.98 |
| exercise item | **8.6 words** | about 18 |

**The old spec had FLOORS** — mean sentence at least 12 words, reading grade at
least 5.5 — and they were the single worst thing in this project. They forced
every sentence to be longer and harder than a published coursebook, and the
269-check suite reported that as quality. They are gone and nothing replaces
them.

**What B1 is now.** `tools/make_b1_spec.py` measures the supplied book and
writes `spec/golden.yaml` from it: 59 lettered exercises across eleven parts,
28 figures, four texts and none over 190 words, mean sentence at most 12,
reading grade at most 4.5, items at most 22 words. `HOUSE-STYLE.md` is that
spec in prose, with the measurement beside every rule. `tools/gate.py` checks
it — 29 checks, all of them a number off the book.

**The old suite is A2's.** `A2/tools/runner.py` now refuses a B1 book with a
message saying why. Families A-N stay exactly as they are and A2 stays green on
them; none of this touched A2's units, keys or content.

**Family M is retired for B1.** Its rule was seven to nine distinct situations
per unit, written to fix the monotony of version 2. The published book runs ONE
thread through the whole unit and is not monotonous, because no exercise is
long enough to be. Variety comes from the task type, not from the plot.
`HOUSE-STYLE.md` section 6 says so, and `ledgers/situations.yaml` is kept only
as the record of a wrong turn.

## Where it stands

| | B1.1 *Looking Back* | B1.2 |
|---|---|---|
| Units | 1 of 10 built | 0 of 10 |
| Gate | **29 of 29, 0 FAIL** | — |
| Exercises · words · figures | 59 · 5,268 · 28 | — |
| Mean sentence · reading grade | 7.5 · 3.98 (book: 7.9 · 3.3) | — |
| Pages | 36 (was 57) | — |

```
python3 tools/make_b1_spec.py     # re-measure the book, rewrite the spec
python3 tools/gate.py             # check units/b11-u01.md against HOUSE-STYLE.md
python3 tools/build_figures.py b11
python3 tools/build_docx.py b11 1
python3 tools/build_book.py b11 ; python3 tools/build_keys.py b11
python3 tools/make_release.py b11
```

## Writing Unit 2

Read `HOUSE-STYLE.md` first, then the source book, then write. Transcribe its
shape; do not invent one. The register this author reaches for by default is
magazine prose — elliptical, ironic, point-by-implication — and it has been
rejected four times. The gate catches the shape of that fault. It cannot catch
the rest.

## What is NOT done

- Units 2–20.
- Covers: `tools/build_covers.py` still reads the old can-do format.
- The three new figure jobs (`plate`, `document_card`, `board`) and the three
  Unit 1 scenes live in A2's shared `tools/figures.py`. They are additions; no
  existing drawing changed, and A2 is green.
