# Build record — English for Pharmacists, International Edition

## Result

Six books, sixty units, **374,807 words**, **1,200 pages**, **918 figures**,
**1,200 vocabulary terms**, **60 grammar points**, **60 AI capabilities**.

`qa.py all` → **ALL CHECKS PASS** on 23 per-book gates × 6 books and both
series gates. `diag2.py` clean on all six books.

## Per book

| Code | Level | Title | Words | Figures | Keylines | MSL | Over cap | Pages |
|------|-------|-------|-------|---------|----------|-----|----------|-------|
| A21 | A2.1 | At the Counter and in the Dispensary | 58,606 | 153 | 260 | 10.20 | 11 (1.5%) | 196 |
| A22 | A2.2 | The Week, the Stock and the Record | 58,603 | 153 | 260 | 10.78 | 11 (1.5%) | 196 |
| B11 | B1.1 | On the Ward | 61,905 | 153 | 260 | 12.67 | 10 (1.5%) | 197 |
| B12 | B1.2 | Supply, Shortage and the Written Answer | 61,081 | 153 | 260 | 12.72 | 10 (1.5%) | 197 |
| B21 | B2.1 | When Something Goes Wrong | 67,731 | 153 | 260 | 16.89 | 8 (1.2%) | 207 |
| B22 | B2.2 | The Profession and the System | 66,881 | 153 | 260 | 17.26 | 6 (0.9%) | 207 |

Keylines are the vocabulary table rows, exercise items and figure captions
counted separately from prose.

## Per-book gates (23)

1 structure · 2 twelve parts present · 3 vocabulary table integrity ·
4 vocabulary exercise targets inside the unit table · 5 grammar rule and
figure parity · 6 exercise answer integrity · 7 MCQ distractor integrity ·
8 CEFR calibration (MSL band, cap, prose volume) · 9 reading-length band ·
10 dialogue and task parity · 11 case clinic structure · 12 Brief Lab
integrity (6 diagnosis entries = 3 fault types × 2, cost line with a
number) · 13 fault ladder within level · 14 model answer precision (no
vague quantifier in any model answer) · 15 figure integrity · 16 figure
caption integrity · 17 vocabulary ledger (no term reused across the series) ·
18 grammar ladder · 19 fault ladder · 20 AI ladder · 21 boundary line on
every capability · 22 dissent · 23 The Question You Have to Ask.

## Series gates (2)

**Gate 19 — fault ladder across 60 labs.** Each of the eight fault types must
appear in at least 12 of the 60 Brief Labs, and only within the set permitted
at that level (A2.1 three types, A2.2 five, B1.1 six, B1.2 and above all
eight). Final distribution:

| Fault | Labs |
|-------|------|
| unscoped set | 33 |
| unbounded quantity | 33 |
| unstated criterion | 33 |
| ambiguous referent | 24 |
| undefined done | 18 |
| missing condition | 13 |
| unstated exception | 13 |
| hidden assumption | 13 |

**Gate 22 — dissent across 60 clinics.** The Decision Room must not always
vindicate management. Across the 60 clinics the manager or founder is wrong
60 times and the sceptic right 60 times, against thresholds of 20 and 12.

## Build sequence

1. `series.py` written for the field: cast, sites, six book titles and icons,
   the Part 10 signature (*The Question You Have to Ask*), and the four
   standing rules.
2. Per unit: `free.py <CODE> "<20 terms>"` to pre-clear vocabulary against the
   series ledger; unit source written; `check.py <CODE> uNN`.
3. Per book: `fixcase.py`, `mcqfix.py`, `make.py`, `qa.py <CODE>`,
   `diag2.py <CODE>`; `split.py` and `join.py` where sentence length needed
   adjustment.
4. Series: `rebal.py` to rebalance the fault ladder (22 swaps across B1.1,
   B1.2 and B2.1), then `qa.py all`, `align.py`, `fulltext.py` × 6,
   `soffice --headless --convert-to pdf` × 6, `pdfinfo` for page counts.

## Place in the set

Tenth series built on this harness, after Business English, English for Life,
Management, Foreign Ministry (two editions), Commercial Correspondence (two
editions), Doctors, Nurses and Hospital Management. The harness files are
shared unchanged; only `series.py` and the sixty unit files are written per
series.
