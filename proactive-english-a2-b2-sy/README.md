# Proactive English — A2 Book 2, Syria Edition (parallel track)

Units 13–24 of *Proactive English* (A2), continuing the Syria Edition from Book 1.
Built with the author's own Node/docx-js pipeline, not with the ESP toolchain in `books/`.

| path | what it is |
| --- | --- |
| `pipeline/` | my working copy of the author's pipeline: `lib.js` (frozen), `unitNN.js`, `akNN.js`, `bound.js`, `bible.js`, `build.sh` |
| `out/` | deliverables: unit .docx files, bound volumes, the handover and the bundle zip |
| `_incoming/` | the four handover files as received, plus text extractions used for continuity harvesting |

Build (one command per build, never a chain):

```
bash pipeline/build.sh unit13 PE-A2-B2-SY_Unit13_StudentsBook.docx "3 9 17"
bash pipeline/build.sh bound
bash pipeline/build.sh zip PE-A2-B2-SY_Bundle_TurnNN.zip
```

`build.sh` carries three absolute paths at the top (`P` pipeline, `O` out, `S` preview
scratchpad) — they are set for this environment. `lib.js` is shared and frozen across
both tracks; any change to it goes in the handover as a proposal, never as an edit.
