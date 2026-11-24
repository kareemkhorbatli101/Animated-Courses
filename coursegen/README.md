# coursegen — the course generator and its series sources

Each subdirectory is one six-book course series. The generator itself is
identical in every one; only `series.py` differs.

| Dir | Series |
|---|---|
| `mgmt` | English for Management with AI |
| `mfa` | English for the Foreign Ministry with AI |
| `dip` | English for Diplomats |
| `intl` | English for Diplomats — International Edition |
| `comm` | English for Commercial Correspondence |
| `cci` | English for Commercial Correspondence — International Edition |
| `med` | English for Doctors |
| `nur` | English for Nurses |
| `hos` | English for Hospital Management |
| `pha` | English for Pharmacists |
| `den` | English for Dentists |
| `cyb` | English for Cybersecurity |
| `ngo` | English for NGOs — New Syria Edition |
| `col` | English for College Students — International Edition |

## The harness

| File | What it does |
|---|---|
| `series.py` | the only per-series file: field, world, cast, six books, two 60-point ladders |
| `build.py` | assembles one unit into document XML and its answer key |
| `make.py` | builds one book: `python3 make.py <CODE>` |
| `check.py` | per-unit check: `python3 check.py <CODE> uNN` |
| `qa.py` | the 23 per-book gates plus the 2 series gates: `python3 qa.py all` |
| `diag2.py` | duplicate-prose and over-cap-sentence diagnostic |
| `figs.py` | the figure library |
| `art.py` | the drawing primitives |
| `render.py` | figure rendering |
| `free.py` | pre-clears vocabulary against the whole-series ledger |
| `align.py` | writes the sixty-row alignment table |
| `fulltext.py` | exports a book as Markdown with its answer key |
| `fixcase.py` | normalises case in exercise heads |
| `mcqfix.py` | balances the printed answer-key distribution |
| `one.py`, `resent.py`, `fulltext.py` | single-unit and re-sentencing utilities |
| `../split.py` | splits over-cap sentences: run from the parent dir |

`units/<CODE>/uNN.py` is one unit: a single `U` dict of about 700 lines.
`out/` holds each series' plan, alignment table, build record and vocabulary
ledger. Built documents are not committed.

## Building a series

    cd <series>
    python3 free.py <CODE> "term, term, ..."     # pre-clear vocabulary
    # write units/<CODE>/uNN.py
    python3 check.py <CODE> uNN
    # after unit 10:
    rm -rf units/<CODE>/__pycache__ __pycache__
    python3 fixcase.py <CODE> && python3 mcqfix.py <CODE>
    python3 make.py <CODE> && python3 qa.py <CODE> && python3 diag2.py <CODE>
    cd .. && python3 split.py <series>/<CODE> <cap>
    # after book 6:
    python3 qa.py all && python3 align.py
