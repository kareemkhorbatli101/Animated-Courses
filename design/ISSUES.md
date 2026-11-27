# What still needs fixing

**Books:** English for Dentists A2.1 *In the Chair* · English for Dental
Students A2.2 *The Mouth and the Clinic*
**Files these issues apply to:** the four `*_print.docx` delivered 27 Nov 2026
**Repository:** `kareemkhorbatli101/Animated-Courses`, branch
`claude/affectionate-franklin-ejx25i`, engine in `coursegen2/`

Both books are complete: ten units each, every unit passing the full gate set
with no warnings, teacher's book for each, 300 dpi, page fit measured so that no
part ends on more than 34pt of white.

The issues below are everything known to be wrong or missing. Issues 1 to 3 are
already **fixed in the committed code** and are wrong only in the delivered
files, which were built before the fix. Issues 4 to 9 are **not fixed anywhere**
and need doing. Issue 10 is the one process change worth keeping.

---

## Priority 1 — fixed in code, wrong in the delivered files

### 1. The case language box prints Python

**What you see.** In each of the thirty discussion cases per book, the box
headed SAY IT LIKE THIS prints this:

```
• ('Offering him the decision', ['It would take about twenty minutes.',
  'If it is difficult it takes an hour.', 'Would you rather I started, or
  booked you properly?'])
```

instead of a small green heading *Offering him the decision* with its three
sentences beneath it as bullets. Sixty boxes across the two volumes, in the
learner's books and the teacher's books alike. Present since part 9 became three
cases.

**Why.** `render.langbank()` (`render.py:213`) took a flat list of strings and
passed each item to `esc()`, which calls `str()`. A case's `language` field is
`[(heading, [line, ...]), ...]`, so each group was stringified into its own
repr. No gate reads the assembled document, and the data itself was correct, so
every gate passed every time.

**Status.** Fixed in commit `d902a75`. `langbank()` now renders a group as a
heading with its lines beneath and still accepts a flat list for the
first-edition builder. A guard was added at `render.py:69`: `run()` raises
`TypeError` on a list, tuple, dict or set rather than stringifying it.

**To get it into the books.** Rebuild — see §11.

---

### 2. Thirty-one exercises carry one visual where the design asks for two

**What you see.** Those exercises have their answer-bank table and no row of
picture cards. All of them are tasks whose answers are whole sentences: the
grammar task 4.3 in almost every unit, the reading post-tasks 7.2c, two of the
listening post-tasks in student unit 8.

**Why, twice over.** `check_exercise_figs` (`gates2.py:258`) keyed its counts by
the exercise label alone, and labels restart at every unit, so unit 1's `4.3`
and unit 10's `4.3` shared one counter and a thin exercise hid behind a
well-illustrated one in a different unit. Underneath that, `_terms_of()`
(`build2.py:140`) returns the words to draw by taking the answers and keeping
those between 3 and 33 characters — a sentence answer yields nothing, so the
picture half of the pair was dropped in silence.

**Status.** Fixed in commit `d902a75`. Counts are keyed `uNN label`
(`build2.py:64, 77, 111`). The picture visual falls back to four of the unit's
own core words, rotated by label so neighbouring exercises do not repeat
(`build2.py:181-195`). Dentists gains 13 figures, Dental Students 16.

**To get it into the books.** Rebuild — see §11.

---

### 3. A cross-reference to an exercise that exists in no unit

**What you see.** Nothing, in the book. It is a gate fault.

**Why.** The morphology figure in the previews of units 1 to 3 carried
`xref='2.3'`. There is no exercise 2.3 in any unit of either book — the preview
has one task, 2.1. The exercise-visual gate therefore counted a phantom exercise
that could never reach two visuals, which is why issue 2 stayed hidden even
after the keys were fixed.

**Status.** Fixed in commit `d902a75`; it now points at 2.1, the task it helps a
learner do.

---

## Priority 2 — not fixed anywhere

### 4. Five identical tooth icons in the student book

**What you see.** Eight case word-card rows in Dental Students units 1, 2 and 4
draw two or fewer distinct icons. Unit 2 case 1 is five tooth glyphs and one
form; unit 4 case 2 is four tooth glyphs and a book.

**Why it is not simply correct.** In units 2 and 4 every word genuinely is a
tooth or a tooth surface, so the picture is accurate. It is also uninformative:
four identical pictures beside *an incisor*, *a canine*, *a premolar*, *a molar*
tell a learner nothing that the words do not.

**The fix.** `figs2._tooth_glyph()` (`figs2.py:88`) already draws `molar`,
`premolar`, `canine` and `incisor` as different shapes — `dentition_map` uses
them. `icon_cards()` (`figs2.py:750`) cannot ask for them; it goes through
`pick_icon()` (`figs2.py:735`), which returns one flat name from `ICON_FOR`
(`figs2.py:672`). Let a card carry a tooth-type glyph, and map the four tooth
names to it, so unit 2's row shows four visibly different teeth.

**Cost.** Changes figure heights, so it needs a refit (§11).

**How to find them all again.**

```python
import figs2 as F
# for each unit, for each case: [F.pick_icon(w) for w in C['words']]
# flag any row where len(set(...)) <= 2
```

---

### 5. The picture-visual fallback is a safety net, not authorship

The thirty-one exercises in issue 2 now get four of the unit's core words,
rotated by label. That is better than a missing figure and worse than a chosen
set: the words are not the ones the exercise is about.

**The fix.** Give each of those exercises its own `pics=[...]` list of four
terms, picked for that exercise, in the unit file. The `odd` and `sort` tasks
already do this and are the pattern to copy. Mechanical; about an hour for all
thirty-one; needs a refit.

**How to list them.** Build with the fallback disabled — comment out the
`if not terms:` branch at `build2.py:183` — and the gate names every one.

---

### 6. Only the closing page of each part is measured

`fitpass.py` finds the page each part's closing figure lands on, measures the
white below it, and feeds that back as a height target. Nothing else on any
other page is measured. A part's *opening* page can still end with 200pt of
white under a figure that would not fit — page 743 of the Dentists book is an
example, and there are many.

**The fix.** Extend the measurement to every page, not only the 210 closing
pages. The machinery is there: `fitpass.py` already rasterises the whole PDF at
72 dpi and finds the lowest ink row. What is missing is a way to act on a figure
that is not a closing figure, because only closing figures have a height target
to grow into.

This is the single biggest remaining improvement to the printed object, and the
largest piece of work in this list.

---

### 7. No gate validates a cross-reference label

Issue 3 existed because nothing checks that an `xref` names a task that exists.
`check_figures` (`gates2.py:265`) warns when a figure has *no* cross-reference,
and says nothing about one that points at a task number no unit contains.

**The fix.** Collect every task label a unit really has — `_closed(U)` in
`gates2.py` already does most of this — and fail on any `xref` outside that set.
Twenty lines, no refit, and it would have caught issue 3 on the day it was
written.

---

### 8. The student book's subtitle no longer describes the book

*The Mouth and the Clinic* described a book whose second half was the clinic and
its rules. Units 6 to 10 are now the finding in one sentence, the periodontal
chart, caries, the radiograph and the whole examination. Something like *The
Mouth, the Chart and the Record* would be honest.

`dens/series.py:24`. Note that `sub` is part of the output filename, so renaming
changes what the built file is called.

The same drift caught the contents page earlier in this round: `make2.py` builds
it from `series.BOOKS[CODE]['units']`, which had held the phase-0 planned titles
while five units of each book had been written under different ones. Fixed for
these two books. **When the next book is written, update that list as the units
are written, not before.**

---

### 9. The photocopiable page is the only page with no figure on it

Every teacher's note ends with a photocopiable page built from plain text lines
(`teacher2.py:324`), and all twenty have `fig=None`. It is the page a teacher
actually hands to a class, and it is the only page in either book with nothing
drawn on it.

The field already accepts a figure — `photocopiable=dict(title=…, lines=[…],
fig=None, fig_cap='')`. It wants one per unit, chosen as the one thing worth
having on a desk during the lesson.

---

## 10. The process change worth keeping

Four rounds of gates, audits and reviews did not find issue 1. It was found by
converting a built book to PDF and reading pages — not looking for anything in
particular, just reading.

The PDF reads of the three previous rounds each went looking for a specific
defect and each found exactly that defect. This one went looking at a page and
found something nobody was looking for. **A check with a target finds what it
targets.**

Put this in the loop for every round, before the final build rather than after
it:

```bash
libreoffice -env:UserInstallation=file:///tmp/p --headless --convert-to pdf \
  --outdir /tmp/out <book>_print.docx
pdftoppm -r 100 -f 581 -l 581 -png /tmp/out/<book>_print.pdf /tmp/page
```

Then look at the image. Half a dozen pages from different parts of different
units, read as a learner would read them.

---

## 11. How to rebuild

Issues 1, 2, 4 and 5 all change block or figure heights, so the measured page
fit has to be re-run from scratch. It is never carried over.

```bash
cd coursegen2
U=1,2,3,4,5,6,7,8,9,10

bash fitbuild.sh den2 A21 $U        # ~50 min: four measured passes
bash fitbuild.sh dens A22 $U        # ~55 min
python3 teacher2.py den2 A21 --units $U
python3 teacher2.py dens A22 --units $U

# 300 dpi for print
for B in den2/out/English_for_Dentists_2e_A2-1_In_the_Chair \
         dens/out/English_for_Dental_Students_A2-2_The_Mouth_and_the_Clinic; do
  python3 slim.py "$B.docx"         "$B"_print.docx 300
  python3 slim.py "$B"_TEACHER.docx "$B"_TEACHER_print.docx 300
done
```

The fit converges 682 → 610 → 228 → 34pt. The final line of each `fitbuild.sh`
run must read `worst white: … 34pt` and the gate run must read `ALL CHECKS
PASS`. If either does not, do not ship the result.

A single unit builds in about a minute and is the right smoke test before
committing an engine change:

```bash
python3 make2.py den2 A21 --units 10
```

Note that it overwrites the full-size book, so do it before a full build, not
after.

---

## 12. What is not wrong

So that nobody spends time re-checking it:

* All twenty units pass `gates2.py` with zero failures and zero warnings:
  level, register, mean sentence length, reading and listening length bands,
  exercise variety, cognitive demand, answerability, review recycling, the
  fluency strand, own-practice tasks and gap chunking.
* All twenty teacher's notes pass `taudit.py`: a model for every open task, all
  eight core terms glossed in Syrian Arabic, five L1 traps each, three case
  notes each, eight of eight pronunciation notes.
* The contents page of both books lists the ten real unit titles.
* The page fit is measured, not assumed, and converged to 34pt.
* Tier A readings and cases carry their sources.
* Every figure is drawn from source at 300 dpi; none is stock.

---

## Addendum, found during the chapter-at-a-time pass

### A1. FIXED: a blank page after almost every part

Counting ink across a built volume showed 36 entirely blank pages in 206 — one
after nearly every part, in every book built since the measured fit was
introduced. The ten-unit volumes delivered earlier carry roughly 200 of them
each; about a fifth of their page count is blank paper.

The cause is the interaction of two correct things. The measured fit grows each
part's closing figure until the part ends flush with the page foot — that is
its whole purpose. The page break after the part was an empty paragraph at the
default size. On a flush page that paragraph has nowhere to stand: it spills
onto the next page as a single invisible line, and its break character then
starts a further page. The blank page is the spilled paragraph.

Fixed in `render.pagebreak()`: the break paragraph is now one point tall, so it
fits inside any slack the 34pt safety margin leaves. The two-unit volumes drop
from 200 and 206 pages to 161 and 170.

**Guard:** `fitpass.py` now counts ink on every page of every pass and prints
`BLANK PAGES: n at [...]`; in `--verify` mode a book with any blank page fails
the build. This also covers the part of §6 that was about pages nobody
measures: every page is now at least checked for being empty.

The ten-unit `*_print.docx` files delivered before this fix still contain their
blank pages. The fix reaches them with the next full rebuild (§11).
