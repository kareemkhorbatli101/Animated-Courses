# BUILD RECORD · English for Dentists — International Edition

Measured figures, not estimates. Word counts are of the source text of
each unit; figure and keyline counts are of the rendered book.

## Series

| Measure | Value |
|---------|-------|
| Books | 6 |
| Units | 60 |
| Figures | 918 |
| Keylines | 1,560 |
| PDF pages | 1,205 |
| Vocabulary terms (all distinct) | 1,200 |
| Grammar points (all distinct) | 60 |
| AI-use points (all distinct) | 60 |
| Per-book QA gates | 23 |
| Series QA gates | 2 |

## Books

| Book | CEFR | Title | Words | Pages | Figures | Keylines |
|------|------|-------|-------|-------|---------|----------|
| A21 | A2.1 | In the Chair | 55,080 | 196 | 153 | 260 |
| A22 | A2.2 | The Book, the Fees and the Record | 56,039 | 197 | 153 | 260 |
| B11 | B1.1 | Explaining, and Getting Consent | 58,135 | 198 | 153 | 260 |
| B12 | B1.2 | Referrals, Reports and the Laboratory | 57,287 | 198 | 153 | 260 |
| B21 | B2.1 | When Something Goes Wrong | 63,361 | 208 | 153 | 260 |
| B22 | B2.2 | The Practice and the Profession | 62,463 | 208 | 153 | 260 |
| | | **Series** | **381,685** | **1,205** | **918** | **1,560** |

## Calibration bands

| Level | Mean sentence length band | Sentence cap | Words per unit |
|-------|---------------------------|--------------|----------------|
| A2 | 8.5 – 12.5 | 26 | 3,500 – 4,700 |
| B1 | 11.5 – 16.5 | 34 | 4,000 – 5,200 |
| B2 | 15.0 – 21.0 | 44 | 4,400 – 5,600 |

Every book was accepted only when its measured mean sentence length fell
inside the band for its level and its over-cap sentence count was below
two per cent of all sentences.

## Units

### A21 · A2.1 · In the Chair

| Unit | Title |
|------|-------|
| 1 | Who Does What in a Dental Practice |
| 2 | Seating a Patient and Starting Well |
| 3 | Taking a History Before You Look |
| 4 | Saying What You Are Going to Do |
| 5 | Agreeing How the Patient Stops You |
| 6 | Asking About Pain While You Work |
| 7 | After-Care the Patient Can Repeat Back |
| 8 | Booking the Next Appointment |
| 9 | Writing the Notes for the Same Day |
| 10 | Closing the Surgery at the End of the Day |

### A22 · A2.2 · The Book, the Fees and the Record

| Unit | Title |
|------|-------|
| 1 | The Appointment Book and the Hour That Is Lost |
| 2 | A Written Estimate and What It Covers |
| 3 | A Patient Who Cannot Pay Today |
| 4 | Instruments, Stock and What Ran Out |
| 5 | The Decontamination Log |
| 6 | A Record That Must Be Complete |
| 7 | A Dental Nurse’s First Day |
| 8 | A Patient Back About a Filling |
| 9 | A Near Miss, Written Down |
| 10 | The Week in One Page |

### B11 · B1.1 · Explaining, and Getting Consent

| Unit | Title |
|------|-------|
| 1 | Setting Out the Options So a Patient Can Choose |
| 2 | What Happens If Nothing Is Done |
| 3 | Saying a Risk in Numbers |
| 4 | Saying the Cost Before the Chair Goes Back |
| 5 | A Signature That Means Something |
| 6 | A Patient Who Is Frightened |
| 7 | A Parent, a Child and Two Conversations |
| 8 | Explaining What You Are Looking At |
| 9 | A Patient Who Refuses What You Recommend |
| 10 | Putting a Case to the Team |

### B12 · B1.2 · Referrals, Reports and the Laboratory

| Unit | Title |
|------|-------|
| 1 | A Referral That Asks One Question |
| 2 | A Treatment Plan in Writing |
| 3 | A Laboratory Instruction That Cannot Be Read Two Ways |
| 4 | A Report With Its Limits Stated |
| 5 | An Estimate That Has to Change |
| 6 | A Request for a Patient’s Records |
| 7 | A Specialist’s Reply, and What You Do With It |
| 8 | A Claim and Its Supporting Evidence |
| 9 | An Audit of Clinical Records |
| 10 | A Paper for the Practice Meeting |

### B21 · B2.1 · When Something Goes Wrong

| Unit | Title |
|------|-------|
| 1 | A Treatment That Failed |
| 2 | Telling the Patient What Happened |
| 3 | The Wrong Tooth |
| 4 | Refusing to Treat, and Saying Why |
| 5 | A Patient in Pain at Six O’clock |
| 6 | A Complaint About a Crown |
| 7 | A Colleague Whose Work Is Not Safe |
| 8 | An Inspection of the Practice |
| 9 | A Complaint That Becomes a Case |
| 10 | A Decision Taken Alone, Recorded |

### B22 · B2.2 · The Practice and the Profession

| Unit | Title |
|------|-------|
| 1 | A Case for a Fourth Surgery |
| 2 | Chairing the Practice Meeting |
| 3 | A Policy That Says What Will Not Be Provided |
| 4 | A Referral Network and a Shared Problem |
| 5 | A Regulator’s Question, Answered Exactly |
| 6 | Explaining a Price Rise to Patients |
| 7 | A Consultation on Closing a Service |
| 8 | A Workforce Plan for a Dental Practice |
| 9 | A Figure the Partners Will Not Like |
| 10 | What No System Can Do for a Dentist’s Judgement |

## Fault distribution across the sixty Brief Labs

Series gate 19 requires each of the eight specification faults to appear
in at least twelve of the sixty labs. Measured distribution:

| Fault | Labs |
|-------|------|
| unscoped set | 42 |
| unbounded quantity | 40 |
| unstated criterion | 37 |
| ambiguous referent | 13 |
| undefined done | 12 |
| missing condition | 12 |
| unstated exception | 12 |
| hidden assumption | 12 |

## Dissent across the sixty Decision Rooms

| Measure | Required | Measured |
|---------|----------|----------|
| Clinics where a manager or principal is wrong on the figures | 20 | 60 |
| Clinics where a sceptic is right and the plan is changed | 12 | 60 |
| Second dialogues ending on an unresolved objection | 4 per book | 9–10 per book |

## Result

`qa.py all` — **ALL CHECKS PASS** across six books, twenty-three per-book
gates each and both series gates.
