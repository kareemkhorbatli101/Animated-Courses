# The Pharmacy Pair — series plan and domain inventory

Two books at the same levels as the finished dental pair, built on the same
coursegen2 engine, to the same gates, with the same chapter-at-a-time loop.

| | Practitioner volume | Student volume |
|---|---|---|
| Package | `phar2` | `phars` |
| Title | **English for Pharmacists** (Second Edition) | **English for Pharmacy Students** (First Edition) |
| Book built | A2.1 · Book 1 · *At the Counter* | A2.2 · Book 1 · *The Medicine and the Dispensary* |
| KIND | `P` (production bands) | `S` (reception bands, LEX_UP to B1) |
| Mirrors | den2 A21 *In the Chair* | dens A22 *The Mouth and the Clinic* |

Each book: ten units, a teacher's volume with Syrian Arabic glossing, the
same ten-part unit anatomy (warm-up · preview · vocabulary · grammar ·
listening ×3 · speaking ×3 · reading ×3 · writing ×3 · three cases ·
review + fluency), every part closing on a figure, measured page fit,
300 dpi print files.

## The publishability spine (inherited from the first-edition pharmacy series)

In pharmacy a sentence is a safety device. The books teach professional
communication, never therapeutics:

- **No named medicine, no dose, no strength, no regimen, no indication**
  appears anywhere. Medicines are classes of thing: *the tablets, the
  liquid medicine, the inhaler, the cream, the drops*.
- Every therapeutic decision belongs to a named prescriber; every clinical
  check belongs to the pharmacist's own judgement, not to a rule in a
  coursebook.
- Units touching supply law, registers, refusal or the cold chain say that
  local law and the pharmacy's own written procedures govern them.
- Pharmacies, surgeries and wholesalers are invented; no vendor, product
  or living person appears.

## English for Pharmacists — A2.1 · At the Counter

The patient encounter, from the prescription arriving to the bag handed
over — one visit, told across ten units. Protagonist: **Rosa Almeida**,
pharmacist, new to Millbrook Pharmacy.

1. **Good Morning. This Is the Pharmacy.** — greeting; who does what; the
   counter and the dispensary; taking a name and date of birth.
   Grammar: can you / would you like / I am going to (the dental U1 point,
   re-grounded at the counter).
2. **Taking In a Prescription** — receiving the paper or the screen; what
   you say while you read; "it will be about ten minutes."
3. **What Is Written, and What Is Missing** — the lines of a prescription
   as things to check, and the sentence you say when one is not there.
4. **The Three Questions at the Counter** — have you taken this before;
   anything else you take; any allergies. Asking without alarming.
5. **Handing It Over, and Hearing It Back** — the handover sentence; the
   patient repeats it back; what to do when they cannot.
6. **We Do Not Have It Today** — out of stock; what you can say and what
   you must not promise; the note you write.
7. **Telephoning the Surgery** — the query call: who you are, which
   patient, what you need, writing down the answer.
8. **The Label, and the Second Check** — reading a label back against the
   prescription; the second checker; saying "please check this."
9. **A Child's Medicine, and the Parent at the Counter** — speaking to the
   parent and to the child; the measuring spoon shown, not described.
10. **When You Cannot Supply Today** — saying no safely: the reason, the
    route, the note, and what the patient takes away instead.

**Cast** (invented, Millbrook Pharmacy):
- Rosa Almeida — pharmacist, new to the pharmacy
- Samir Haddad — pharmacy technician
- Grace Mensah — dispensing assistant
- Petra Horáková — pharmacy manager and second pharmacist
- Dr Anna Lindgren — a GP at Riverside Surgery (on the telephone)
- Tomás Vidal — delivery driver from the wholesaler
- Recurring patients: Mrs Ayşe Demir; Mr Viktor Petrov; Amal, aged six,
  with her father Mr Khalil.

## English for Pharmacy Students — A2.2 · The Medicine and the Dispensary

The first term's subject matter: the things, the words and the written
forms of the dispensary, learned before the first patient. Protagonist:
**Lina Petrova**, first-year pharmacy student at Northgate School of
Pharmacy.

1. **The Pharmacy, Part by Part** — counter, dispensary, shelves, fridge,
   the controlled-drugs cabinet (named, not opened), the bench.
2. **The Dose Forms, and How We Name Them** — tablet, capsule, liquid,
   cream, drops, inhaler, patch, suppository (receptive); what "form"
   means on paper.
3. **The Prescription, Line by Line** — who wrote it, for whom, what each
   line carries, the date and the signature.
4. **The Label, and What Each Line Does** — name, directions, warnings,
   the pharmacy's own line; why the label says what the prescription says.
5. **The Equipment on the Bench** — measuring cylinder, counting triangle,
   tablet counter, mortar and pestle, the balance; what each is for.
6. **The Instruction, in One Sentence** — writing one direction a patient
   can follow: verb, amount-in-words, when; no numbers invented by us.
7. **Storage: the Shelf, the Fridge and the Cabinet** — room temperature,
   the cold chain, the locked cabinet; the line you write when the fridge
   was off.
8. **Counting, Measuring and Checking** — counting tablets, measuring a
   liquid, the second check; why you never measure from memory.
9. **The Reference Shelf: Looking Something Up** — the formulary and the
   pharmacopoeia as kinds of book; what a reference line is evidence of;
   reading an entry without acting on it.
10. **The Whole Dispensing, from Basket to Bag** — the cycle end to end:
    take in, check, assemble, label, second check, hand over, record.

**Cast** (Northgate School of Pharmacy):
- Lina Petrova — first-year pharmacy student
- Marcus Oyelaran — first-year pharmacy student
- Dr Sofia Ricci — lecturer in pharmaceutics
- Petra Horáková — teaching pharmacist in the dispensing laboratory
  (shared with the practitioner book's cast, as dens shares Dr Rahman)
- Samir Haddad — technician, in the teaching dispensary

## Domain inventory (the `DOMAIN` wordlist each series.py declares)

Words the lexical gate admits beyond the CEFR band because they are the
profession's own, previewed and glossed where first taught:

**Places and people:** pharmacy, dispensary, counter, bench, shelf/shelves,
fridge, cabinet, wholesaler, surgery, prescriber, pharmacist, technician,
dispenser, locum.

**The paper:** prescription, label, directions, warnings, signature,
formulary, pharmacopoeia, register, record, requisition, owing (an owing
slip), repeat.

**The things:** medicine(s), tablet(s), capsule(s), liquid, cream,
ointment, drops, inhaler, patch, suppository, blister, pack, bottle,
carton, spoon, syringe (oral), cylinder, triangle, mortar, pestle,
balance, bag, basket, tote.

**The acts:** dispense/dispensed/dispensing, supply/supplied, label/
labelled/labelling, check/rechecked, count/counted, measure/measured,
hand over, take in, order/ordered, deliver/delivery, store/storage,
refrigerate/refrigerated, lock/locked, query/queried, endorse/endorsed.

**States and properties:** in stock, out of stock, in date, out of date,
expiry, batch, allergy/allergies/allergic, interaction (receptive, late),
dose form (as a names-of-things phrase), cold chain.

(The full list is in each series.py; it is trimmed or grown per unit as
gates demand, exactly as den2's was.)

## The glyph family (figs2 additions)

New honest drawn icons, in the house style (flat fills, LEAD strokes,
named colours): **pillbottle, blisterpack, capsule, tabletpill, liquidbottle,
dropper, inhaler, creamtube, patch, spoon5 (measuring spoon), oralsyringe,
cylinder (measuring), triangle (counting), mortar, balance, prescription
(paper with Rx corner), label (bordered label with lines), bag (pharmacy
bag), basket, shelfunit, fridge, cdcabinet (locked), van (delivery),
phone** (exists), plus remaps: medicine→pillbottle, tablet→tabletpill,
prescription→prescription, label→label, fridge→fridge, and the rest to
themselves. Existing generic glyphs (person, speech, tick, cross, clock,
door, form, card, calendar, book, envelope, send, phone, star, child,
parent, hand, ear, water) carry the non-domain load unchanged.

Scene figure: `counter_scene` (the pharmacy from the door: the counter,
the screen, the shelves behind, the dispensary hatch, the fridge) —
the pharmacy pair's analogue of `chair_scene`.

## Build integration

- `phar2/series.py`, `phars/series.py` — same shape as den2/dens, with
  `DOMAIN` lists.
- `phar2/units/A21/u01..u10.py + t01..t10.py`; `phars/units/A22/...`.
- `scratchpad/pchapter.sh <units> <label>` — the pharmacy clone of
  chapter.sh: fitbuild phar2 A21 + phars A22, teacher2 ×2, slim to
  `PUNITS<label>_*_print.docx`; final titles
  `English_for_Pharmacists_2e_A2-1_At_the_Counter*` and
  `English_for_Pharmacy_Students_A2-2_The_Medicine_and_the_Dispensary*`.
- Same loop per chapter: author u0N+t0N both books → `gate.py` 1..N both
  → `taudit.py` N → cumulative measured build → QA page read → commit →
  deliver.

## Order of work

1. ~~Plan + inventory~~ (this document).
2. Glyph family + counter_scene in figs2; series.py ×2; empty unit dirs.
3. Unit 1 of both books + teacher notes — the pilot that proves the fork;
   gates, taudit, build of UNITS1, QA, deliver.
4. Units 2–10 chapter by chapter, as the dental pair was done.
