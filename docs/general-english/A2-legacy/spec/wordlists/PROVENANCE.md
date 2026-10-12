# Word-list provenance

Named exactly, so no claim here is bigger than the source behind it.

| File | Source | Licence | Used for |
|---|---|---|---|
| `a2-and-below.txt` | **CEFR-J Vocabulary Profile 1.5**, Open Language Profiles (`openlanguageprofiles/olp-en-cefrj`), A1 + A2 headwords, slash-variants split | CC BY-SA | check **E01** — the A2 band |
| `b1-and-above.txt` | Same source, B1 + B2 headwords | CC BY-SA | check **E26** — words that must be glossed if used |
| `high-frequency-2000.txt` | `hermitdave/FrequencyWords` en_50k (OpenSubtitles 2018), top 2,000 | CC BY-SA 4.0 | tolerance band for function words and inflections the CEFR-J list lemmatises away |

**Not used, and not claimed:** the English Vocabulary Profile. It is not openly
licensed and I do not have it. The plan said I would say so rather than pretend
otherwise; this is that.

**How E01 scores a text.** A running word passes if it is (a) in `a2-and-below.txt`,
or (b) a regular inflection of a word in it (`-s -es -ed -ing -er -est -ly`,
consonant doubling, `y→ie`), or (c) in `high-frequency-2000.txt`, or (d) in the
unit's own `Gloss:` or `Glossary`, or (e) a proper noun on the cast or place list.
Everything else is off-band, and the unit fails unless off-band words are ≤ 10%.
