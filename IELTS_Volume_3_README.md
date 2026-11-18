# IELTS Preparation Course · Volume 3 (band 6.0) · complete

Everything in this package was built on 18 November 2026 and passes all
seventeen verification gates.

## Start here

**Teaching a class?** Open `IELTS_2026_B2_Volume_3A_Teachers_Edition.docx`
and give the students `IELTS_2026_B2_Volume_3A.docx`. Set the diagnostic in
the first session — it is a few pages into the student book, and its result
is a list of cycle numbers rather than a band.

**Working alone?** Open `IELTS_2026_B2_Volume_3A.docx`. Do the diagnostic,
read the cycles it names, then work the units in order. Finish 3A before
starting 3B: the sub-skill syllabus runs across both halves, and unit 30
answers unit 26.

**Want it all in one file?** `IELTS_2026_B2_Volume_3.docx`, 879 pages.

## What is in the package

| File | Pages | For |
|---|---|---|
| `IELTS_2026_B2_Volume_3A.docx` | 462 | Students · units 21–25 + practice test |
| `IELTS_2026_B2_Volume_3B.docx` | 462 | Students · units 26–30 + a second practice test |
| `IELTS_2026_B2_Volume_3A_Teachers_Edition.docx` | 519 | Teachers · 3A with notes, answers, scripts on the page |
| `IELTS_2026_B2_Volume_3B_Teachers_Edition.docx` | 508 | Teachers · 3B, the same |
| `IELTS_2026_B2_Volume_3.docx` | 879 | The complete volume in one file |
| `IELTS_2026_B2_Volume_3_Teachers_Edition.docx` | — | The complete volume, Teacher's Edition |
| `IELTS_Volume_3_Pilot_Report.md` | — | What was built, what was measured, what was not done |
| `IELTS_Textbook_Plan.md` | — | The plan this volume was built to |
| `IELTS_Visual_System.md` | — | The twenty pedagogic figure types and the rules for each |
| `IELTS_Series_Rebuild_Plan.md` | — | How the other seven books follow |

## What each unit looks like

Ten units, five cycles each. Every cycle runs the same eleven beats:
lead-in, preview input, vocabulary work, **Skills builder**, exam task,
exam-advice box, debrief, outside-the-exam line, grammar from this cycle's
own texts, the productive task, and a word list marking what is recycled.

The Skills builder is the part to look at first. There are fifty of them and
no sub-skill is taught twice: the slot is the same in every unit and the
thing taught in it is different each time.

## Two things to know

**The audio is a script, not a recording.** Every listening task has a full
script with named speakers, printed at the back of the student book and
beside the task in the Teacher's Edition. There are no sound files yet;
read the scripts aloud, or have a colleague do it.

**Units 81 and 82 are not built.** The plan describes two consolidation
units after unit 30. The ten themed units are complete with all apparatus;
those two are authoring still to do. The pilot report says why.

## Rebuilding from source

```
cd ielts
python3 book.py 3A              # one half
python3 book.py 3B --teacher    # the other half, Teacher's Edition
python3 book.py 3               # the single volume
bash runall.sh <phase>          # all seventeen gates
```
