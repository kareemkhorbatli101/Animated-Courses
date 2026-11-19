# English for the Workplace · Syria

A 72-hour programme in three courses (Pre-Intermediate, Intermediate, Upper-Intermediate),
36 sessions of two hours, classes of ten, live and in person.

| path | what it is |
| --- | --- |
| `pipeline/lib.js` | the series renderer, copied here with the footer parameterised |
| `pipeline/scheme-data.js` | the 36 sessions as data — the single source of truth |
| `pipeline/overview.js` | builds the programme overview for the head of centre |
| `pipeline/scheme.js` | builds the full scheme of work from `scheme-data.js` |
| `out/` | the two .docx deliverables |

Build:

```
cd pipeline
node overview.js ../out/01_Programme-Overview_for-the-Centre.docx
node scheme.js   ../out/02_Full-Scheme-of-Work.docx
```

The programme name is a placeholder. It is set in `TITLE` in each script and in the
footer argument of the `L.build(...)` call at the foot of each.
