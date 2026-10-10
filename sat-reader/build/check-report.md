wrote /home/user/Animated-Courses/sat-reader/build/check-report.md
eport.py`, which runs `tools/checks.py` and then measures the
passages. Every number below is measured from `data/passages/*.yaml`, not asserted.

## 1. The 600 passes

```
==========================================================================
PASSAGE-LEVEL CHECK PASSES: 600 (200 passages x 3)
  passed: 600   failed: 0
==========================================================================

BOOK-LEVEL CHECKS
ok   200 passages present                                         200
ok   5 fields x 4 levels x 10 passages                            20 cells
ok   50 strands, each with four levels                            50 strands
ok   every title distinct                                         200 distinct
ok   Flesch-Kincaid rises with every level                        7.5 < 10.1 < 11.9 < 13.1
ok   mean sentence length rises with every level                  15.4 < 18.4 < 20.7 < 23.5
ok   median word rank rises with every level                      107.8 < 126.1 < 130.8 < 133.4
ok   all 200 Words in Context words linked at the matching field and level 0 unlinked

SUMMARY: 600/600 passage-level passes, 8/8 book-level checks
```

## 2. The language ladder as achieved

| | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| Words, band enforced | 288–312 | 288–312 | 288–312 | 288–312 |
| Words, mean | 300.8 | 298.2 | 301.0 | 298.7 |
| Words, min | 289 | 289 | 288 | 288 |
| Words, max | 312 | 311 | 312 | 312 |
| Mean sentence, band | 13.0–18.0 | 16.0–21.0 | 19.0–24.0 | 21.0–28.0 |
| Mean sentence, mean | 15.4 | 18.4 | 20.7 | 23.5 |
| Mean sentence, min | 13.2 | 16.0 | 19.0 | 21.1 |
| Mean sentence, max | 17.8 | 20.7 | 24.0 | 26.8 |
| Longest sentence, cap | 34 | 40 | 46 | 52 |
| Longest sentence, max observed | 34 | 40 | 45 | 50 |
| Flesch–Kincaid, band | 5.5–11.0 | 8.0–13.0 | 10.5–15.0 | 11.5–17.5 |
| Flesch–Kincaid, mean | 7.5 | 10.1 | 11.9 | 13.1 |
| Flesch–Kincaid, min | 5.7 | 8.1 | 10.7 | 11.6 |
| Flesch–Kincaid, max | 9.1 | 12.9 | 13.4 | 15.0 |
| Sentences, floor | 12 | 11 | 10 | 9 |
| Sentences, min observed | 17 | 14 | 12 | 11 |
| Assumed-known band | 16,000 | 22,000 | 30,000 | 40,000 |
| Median word rank | 107.8 | 126.1 | 130.8 | 133.4 |
| Field terms per passage, mean | 1.16 | 1.80 | 1.80 | 1.80 |

The three monotonic ladders — readability, sentence length and median word rank —
rise at every step. Levels 3 and 4 are closer in readability (11.9 against 13.1) than
in what they ask of the reader, which is the honest description of the difference
between *evidence* and *dispute*.

## 3. The 98 per cent coverage rule

At most six running words per passage may fall outside the level's assumed-known
band, counting neither proper nouns nor declared field terms. Distribution of the
count of distinct above-band words, over all 200 passages:

| above-band words | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| passages | 44 | 62 | 43 | 26 | 14 | 5 | 6 |

The passages that sit at the ceiling, with the words counted:

- **PHY-S09-L2** (6): emitter, emitters, millimeter, radium, sievert, thousandths
- **PHY-S08-L1** (6): foundry, girders, rattling, stumps, workmen, wrought
- **PHY-S07-L1** (6): antoine, centimeters, ingot, millimeter, nine-volt, silo
- **HUM-S07-L1** (6): crumbs, glaze, johannes, jug, thickened, whitewashed
- **HUM-S04-L1** (6): hinge, sonnet, sonnets, syllables, undercut, wordsworth
- **BIO-S04-L1** (6): aspens, cottonwood, seedlings, songbirds, streamside, stumps
- **HUM-S10-L1** (5): barbarity, hissing, igor, laborious, puerile
- **HUM-S08-L3** (5): elegiac, facsimiles, metronome, sketchbooks, watermarks

A capitalized name that opens a sentence is counted here rather than exempted, so
the budget is spent conservatively: *antoine* in PHY-S07-L1 is Antoine Lavoisier.

## 4. What these checks do not establish

They are structural. They cannot tell whether a passage is true, and they cannot
tell whether it is worth reading. Each passage carries a `facts` list of at least
three checkable claims so that a reviewer can verify the content quickly; the
figures are the standard published ones where a figure is given at all. The five
fields and the fifty strands are a curricular judgment, not an official syllabus:
the College Board publishes no subject list and no reading list.
