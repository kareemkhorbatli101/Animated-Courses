# -*- coding: utf-8 -*-
"""English for Pharmacy Students - series parameters (academic)."""
KIND = 'S'
TITLE = 'English for Pharmacy Students'
EDITION = 'First Edition'
SERIES = 'ENGLISH FOR THE PHARMACY PROFESSIONS'
STRAP = 'The English of the lecture, the bench and the first prescription'
FILESTEM = 'English_for_Pharmacy_Students'
FIELD_PHRASE = 'pharmacy practice and pharmacy education'
CLINICIAN = 'a pharmacist'
ORDER = ['A22', 'B11', 'B12', 'B21', 'B22', 'C11']

CAST = [
 ('Lina Petrova', 'first-year pharmacy student'),
 ('Marcus Oyelaran', 'first-year pharmacy student'),
 ('Dr Sofia Ricci', 'lecturer in pharmaceutics'),
 ('Petra Horakova', 'teaching pharmacist, in the dispensing laboratory'),
 ('Samir Haddad', 'technician, in the teaching dispensary'),
]

SCHOOL = 'Northgate School of Pharmacy'

BOOKS = {
 'A22': dict(code='A22', level='A2', bandge='A2.2', book='BOOK 1', emblem='flask',
   cover_lines=['English for', 'Pharmacy Students'], sub='The Medicine and the Dispensary',
   blurb=['Book 1 is the first term. Lina Petrova learns the dispensary in',
          'English: its parts, the dose forms and their names, the lines of',
          'a prescription and of a label, the equipment on the bench and',
          'what each piece is for. Then she learns to write one instruction',
          'a patient can follow, to keep the fridge line honest, and to',
          'carry out a whole dispensing and write it down.'],
   units=['The Pharmacy, Part by Part',
          'The Dose Forms, and How We Name Them',
          'The Prescription, Line by Line',
          'The Label, and What Each Line Does',
          'The Equipment on the Bench',
          'The Instruction, in One Sentence',
          'Storage: the Shelf, the Fridge and the Cabinet',
          'Counting, Measuring and Checking',
          'The Reference Shelf: Looking Something Up',
          'The Whole Dispensing, from Basket to Bag']),
 'B11': dict(code='B11', level='B1', bandge='B1.1', book='BOOK 2', emblem='book',
   cover_lines=['English for', 'Pharmacy Students'], sub='How a Medicine Works, in Words',
   blurb=['Book 2 is pharmaceutics and pharmacology as language.'],
   units=['What a Tablet Is Made Of', 'How a Medicine Moves Through the Body',
          'Why Two Medicines Meet', 'The Dose, and Why It Is Not a Guess',
          'Reading a Reference Entry', 'Comparing Two Forms',
          'Why a Form Fails', 'The Laboratory Report',
          'A Process, Described', 'Answering a Short Examination Question']),
 'B12': dict(code='B12', level='B1', bandge='B1.2', book='BOOK 3', emblem='chart',
   cover_lines=['English for', 'Pharmacy Students'], sub='The Patient on Paper',
   blurb=['Book 3 is the written patient: charts, histories and queries.'],
   units=['A Medicines List, Read Closely', 'Taking a History',
          'The Chart, and the Line That Is Missing', 'A Query, Drafted',
          'Reading a Discharge Letter', 'An Interaction, Looked Up',
          'An Allergy, Recorded', 'A Calculation, Checked in Words',
          'Writing Up a Practical', 'The Case, Presented']),
 'B21': dict(code='B21', level='B2', bandge='B2.1', book='BOOK 4', emblem='door',
   cover_lines=['English for', 'Pharmacy Students'], sub='Your First Placements',
   blurb=['Book 4 is the move from the bench to the counter and the ward.'],
   units=['The First Day on Placement', 'Speaking to a Patient, Not a Tutor',
          'Asking Your Supervisor', 'Being Corrected in Front of a Patient',
          'The Handover You Give', 'Writing in the Record',
          'When You Are Out of Your Depth', 'The Near Miss You Saw',
          'Handing a Patient Over', 'The Placement Log']),
 'B22': dict(code='B22', level='B2', bandge='B2.2', book='BOOK 5', emblem='flask',
   cover_lines=['English for', 'Pharmacy Students'], sub='Evidence, Reading and Judgement',
   blurb=['Book 5 is reading the literature and arguing from it.'],
   units=['What a Paper Claims', 'What the Numbers Show',
          'What the Study Could Not Control', 'Two Papers That Disagree',
          'Guidelines, and Where They Come From', 'Writing a Literature Summary',
          'Citing Without Copying', 'A Poster and Its Three Minutes',
          'The Seminar Question', 'The Examined Essay']),
 'C11': dict(code='C11', level='C1', bandge='C1.1', book='BOOK 6', emblem='globe',
   cover_lines=['English for', 'Pharmacy Students'], sub='Becoming the Profession',
   blurb=['Book 6 is the student becoming the professional.'],
   units=['The Registration Examination, in English', 'The Interview',
          'The Reflective Account', 'Teaching a Junior Student',
          'The Research Proposal', 'The Ethics Form',
          'Presenting to a Mixed Room', 'Writing for the Public',
          'The First Disagreement With a Senior', 'The Oath You Sign Up To']),
}


# How each person is drawn, so that the same face appears in every unit.
CAST_LOOK = {
 'Lina Petrova':    dict(skin='1', hair='brown', style='tied',  tunic='teal'),
 'Marcus Oyelaran': dict(skin='5', hair='black', style='short', tunic='blue'),
 'Dr Sofia Ricci':  dict(skin='2', hair='dark',  style='long',  tunic='plum', glasses=True),
 'Petra Horakova':  dict(skin='1', hair='grey',  style='tied',  tunic='grey', glasses=True),
 'Samir Haddad':    dict(skin='4', hair='black', style='short', tunic='blue'),
}
COVER_PEOPLE = ['Lina Petrova', 'Marcus Oyelaran', 'Dr Sofia Ricci', 'Petra Horakova']

# Words this series is allowed to use above the band because they are its subject.
DOMAIN = """pharmacy pharmacies pharmacist pharmacists dispensary dispensaries
dispense dispenses dispensed dispensing dispenser dispensers
technician technicians assistant assistants
counter counters bench benches shelf shelves fridge fridges cabinet cabinets
wholesaler wholesalers surgery surgeries prescriber prescribers
prescription prescriptions label labels labelled labelling
medicine medicines tablet tablets capsule capsules liquid liquids
cream creams ointment ointments drops inhaler inhalers patch patches
suppository suppositories
blister blisters pack packs packet packets bottle bottles carton cartons
spoon spoons syringe syringes cylinder cylinders triangle triangles
mortar pestle spatula balance balances bag bags basket baskets
supply supplies supplied supplying stock stocks stocked
order orders ordered ordering delivery deliveries deliver delivers delivered
storage store stored storing refrigerate refrigerated refrigeration
expiry batch batches allergy allergies allergic
formulary formularies pharmacopoeia pharmacopoeias
register registers record records
requisition requisitions owing repeat repeats endorse endorsed endorsement
query queries queried
directions warnings signature signatures
dose doses dosage dosages form forms
pharmaceutical pharmaceutics pharmacology
checker rechecked recheck
identifier identifiers identification
practitioner supervisor lecturer laboratory
measuring counting weighed weighing
dissolve dissolves dissolved swallow swallows swallowed swallowing
inhale inhaled inhaler apply applied applying
external internal topical oral
millilitre millilitres gram grams litre litres
temperature thermometer
lid lids cap caps seal sealed
reference references entry entries
in-date out-of-date
cold-chain
sticker stickers
chemist chemists
van vans supervision route routes extract extracts daily
"""

DOMAIN = DOMAIN.split()

CAST_ROLE = {n: r for n, r in CAST}
for _n, _r in CAST_ROLE.items():
    CAST_LOOK.setdefault(_n, dict(skin='3', hair='black', style='short', tunic='teal'))
    CAST_LOOK[_n]['role'] = _r
