# Source data for the B1 band

Downloaded 2026-10-08 from `openlanguageprofiles/olp-en-cefrj`, the same repository
the A2 wordlists came from. Kept here, unmodified, so every number in
`00-MASTER-PLAN.md` can be re-derived rather than taken on trust.

| File | What | Rows |
|---|---|---|
| `vocab.csv` | CEFR-J Vocabulary Profile 1.5 — headword, part of speech, CEFR level | 7,799 |
| `grammar.csv` | CEFR-J Grammar Profile 20180315 — grammatical item, CEFR-J level, and the EGP / Core Inventory / GSELO level each framework gives it | 500 |

**Citation.** The CEFR-J Wordlist Version 1.5 and the CEFR-J Grammar Profile Version
20180315, compiled by Yukio Tono, Tokyo University of Foreign Studies. Retrieved via
Open Language Profiles. Copyright belongs to Tono Laboratory at TUFS. Free for
research and commercial use provided the dataset is cited; neither CEFR-J nor Open
Language Profiles is responsible for inaccuracies in it.

**What was counted, and how to re-count it.**

```
headwords by level   A1 1,164 · A2 1,411 · B1 2,446 · B2 2,778
A2 band (A1+A2)      2,575 raw -> 2,356 after splitting slash-variants
B1 band (A1+A2+B1)   5,021 raw -> 4,530 after splitting slash-variants  = 1.92x
B2-and-above         2,778 raw -> 2,765
B1 grammar           90 rows -> 69 distinct concepts once AFF/NEG/INT variants collapse
```

The derivation was validated against what A2 already ships: re-deriving
`A2/spec/wordlists/a2-and-below.txt` from `vocab.csv` reproduces **99.2%** of the file
on disk, and `b1-and-above.txt` reproduces at **100%**. The 0.8% difference is
multi-word entries (`bus stop`, `all right`) that A2's build dropped and single-word
forms it kept from elsewhere. That is why the B1 band is built the same way.

**Level is read with a fallback.** 330 of the 500 grammar rows leave `CEFR-J Level`
blank and carry a level only in `Core Inventory`, `EGP` or `GSELO`. Reading
`CEFR-J Level` alone finds 41 B1 items; reading it with that fallback finds 90. The
fallback is used, and it is why three of my own assumptions were wrong: past
progressive is A2 (and the A2 book never taught it), while past perfect progressive,
`wish` + conditional, `so that` and bare `enough` are all B2.
