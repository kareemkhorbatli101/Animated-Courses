# Al-Hasan International — Student Book 2 (CEFR B1)

Generator for `AlHasan_International_StudentBook_2.docx`.

The book is produced entirely from source: the 223 illustrations are drawn as SVG and
rendered to PNG through headless Chromium, and the .docx is written as raw OOXML that
reproduces Book 1's exact paragraph, table and section formatting.

    python3 book.py ../AlHasan_International_StudentBook_2.docx   # build the whole book
    UNITS=1,2 python3 book.py out.docx                            # build selected units
    python3 check.py                                              # structural checks
    python3 preview_docx.py out.docx page.png 30 180              # render a page preview

## Files

| File | What it is |
| --- | --- |
| `art.py` | palette sampled from Book 1, flat-vector people and icons, the Chromium renderer |
| `frames.py` | the fifteen figure frames (covers, scenes, grammar cards, document cards, …) |
| `cast.py` | the shared cast and the ten unit titles |
| `docxw.py` | the OOXML writer — Book 1's 28 paragraph signatures and 4 table signatures |
| `content/uNN.py` | one unit each: blocks, target terms, answer key, next-unit teaser |
| `book.py` | assembles covers, units, irregular verbs, glossary and answer keys |
| `check.py` | asserts the template: 22 figures, the exercise runs, key labels, term counts |
| `skel/` | `styles.xml`, `numbering.xml`, `fontTable.xml` carried over from Book 1 |

## The template each unit holds

Warm Up A–D · Part 1 A–H · Part 2 A–J · Part 3 (D1 A–C, D2 A–B) · Part 4 A–D ·
Part 5 A–F · Part 6 A–D · Part 7 A–D · Part 8 A–D · Part 9 three cases ·
Part 10 A–I + Can-Do · Part 11 A–C + study terms, then the end card and the teaser.

Every unit runs two strands — the import side facing a supplier abroad, and the market
side facing Syria — and they never share a block: Dialogue 1 is strand A, Dialogue 2 is
strand B, with different speakers, a different document and a different register.
