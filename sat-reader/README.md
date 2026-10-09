# Reading the Five Fields

**200 graded passages that build what the SAT assumes.** A companion to *Words in
Context* (`../sat-vocabulary`).

The SAT does not test knowledge of history or science. It tests reading, using short
passages drawn from history, social studies, the humanities, literature and science.
A reader who has met the subject before reads such a passage faster, infers unknown
words better, and is not stopped by a name. This book supplies that prior meeting:
fifty strands of content, each followed through four levels, 300 words at a time.

- `PLAN.md` — the design, the research it rests on, the limits of that research, and
  §11, the record of what measurement changed in the plan.
- `build/check-report.md` — the 600 passes, and what the passages actually measure.
- `build/Reading-the-Five-Fields.pdf` — the book, 233 pages, US Letter.

## The grid

Five fields × ten strands × four levels = 200 passages of 300 words.

| | | |
|---|---|---|
| HIS | History and Civics | founding documents, suffrage, abolition, Reconstruction, labor, civil rights, empire, emergency powers, the press |
| BIO | Biology and Earth Science | selection, inheritance, cell energy, ecosystems, populations, microbes, nitrogen, carbon, plate tectonics, ice |
| PHY | Physical Science | measurement, forces, energy, heat, electricity, waves, matter, materials, the nucleus, cosmic distance |
| HUM | Humanities | narrator, character, image, poetic form, stage, genre, painting, music, architecture, criticism |
| SOC | Social Science | surveys, experiments, causation, averages, incentives, norms, cities, labor markets, inequality, judgment |

## What "graded in coverage" means

The levels are not the same content made harder. Within every strand they do four
different jobs, in the same order every time, declared per passage in a `move` field
that the checks verify against the level:

1. **Foundation — phenomenon.** One concrete case, named and dated.
2. **Developing — mechanism.** How it works and how much: cause, comparison, magnitude.
3. **Target — evidence.** How anyone knows: the study, the document, the measurement,
   and its limits.
4. **Stretch — dispute.** What is contested: two readings of one body of evidence, and
   the writer's stance.

Each strand therefore receives 1,200 words of treatment and can be read downward as
well as across.

## The language ladder, measured

| | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| Flesch–Kincaid, mean | 7.4 | 10.1 | 11.9 | 13.1 |
| Mean sentence, words | 15.4 | 18.4 | 20.7 | 23.5 |
| Median word rank | 107.8 | 126.1 | 130.8 | 133.4 |
| Assumed-known band | top 16,000 | top 22,000 | top 30,000 | top 40,000 |

Hu and Nation's coverage figure — about 98 per cent of running words known for
unassisted reading — is enforced as arithmetic rather than quoted as a principle: two
per cent of 300 words is six, so at most six running words per passage may fall
outside the level's assumed-known band, proper nouns and declared field terms
excluded. At Levels 1 and 2 every one of them is glossed where it stands.

## Cross-link to *Words in Context*

All 200 target words of Book 1 appear in a passage of this book at the matching field
and level, used in running prose. A `vocab_link` field declares which, and a
book-level check proves that none is missing. Appendix C is the index.

## Building it

```
python3 tools/validate.py     # structural validation of the YAML
python3 tools/checks.py       # the 600 passes + 8 book-level checks
python3 tools/report.py       # build/check-report.md
python3 tools/americanize.py data/passages/*.yaml data/strands.yaml data/spec.yaml
python3 tools/build.py        # build/Reading-the-Five-Fields.docx
soffice --headless --convert-to pdf --outdir build build/Reading-the-Five-Fields.docx
```

| file | what it is |
|---|---|
| `data/spec.yaml` | single source of truth: fields, moves, level bands, closed sets |
| `data/strands.yaml` | the 50 strands, with a one-line brief for each of the four levels |
| `data/passages/<FIELD>-L<n>.yaml` | 20 files, 10 passages each |
| `tools/lex.py` | word, sentence, syllable, readability and frequency-rank measurement |
| `tools/checks.py` | passes A, B and C, and the book-level checks |
| `tools/emit.py` | writes a passage block and prints its diagnostics in the same call |
| `tools/patch.py` | round-trip editing of a single passage without touching its neighbors |
| `tools/americanize.py` | British → American forms, case-preserving, over both books |
| `tools/build.py` | the .docx |

## What this is not

Not past papers, and not a syllabus. The College Board publishes no subject list and
no reading list, so the five fields and the fifty strands are a curricular judgment,
informed by what the test is described as covering. The checks are structural: they
cannot tell whether a passage is true. Each passage carries a `facts` list of at least
three checkable claims so a reviewer can verify the content quickly, and anyone who
intends to assert a particular figure in a classroom should verify it first. The
research figures in `PLAN.md` reached this book through secondary sources, because the
College Board's own pages were unreachable from the build environment; Clarke, Hu and
Nation, and Recht and Leslie should be checked at source before being quoted.
