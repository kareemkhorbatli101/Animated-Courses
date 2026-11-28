# -*- coding: utf-8 -*-
"""English for Pharmacists, Second Edition - series parameters (practitioner)."""
KIND = 'P'
TITLE = 'English for Pharmacists'
EDITION = 'Second Edition'
SERIES = 'ENGLISH FOR THE PHARMACY PROFESSIONS'
STRAP = 'The English of the counter, the label and the person the medicine is for'
FILESTEM = 'English_for_Pharmacists_2e'
ORDER = ['A21', 'A22', 'B11', 'B12', 'B21', 'B22']

CAST = [
 ('Rosa Almeida', 'pharmacist, new to the pharmacy'),
 ('Samir Haddad', 'pharmacy technician'),
 ('Grace Mensah', 'dispensing assistant'),
 ('Petra Horakova', 'pharmacy manager and second pharmacist'),
 ('Dr Anna Lindgren', 'a doctor at Riverside Surgery'),
 ('Tomas Vidal', 'delivery driver from the wholesaler'),
]

PHARMACY = 'Millbrook Pharmacy'
SURGERY = 'Riverside Surgery'
WHOLESALER = 'Castlegate Wholesale'

BOOKS = {
 'A21': dict(code='A21', level='A2', bandge='A2.1', book='BOOK 1', emblem='door',
   cover_lines=['English for', 'Pharmacists'], sub='At the Counter',
   blurb=['Book 1 is the patient at the counter, from the first word to the',
          'bag handed over. Rosa Almeida greets the person, takes in a',
          'prescription, finds what is not written on it, asks the three',
          'questions, hands the medicine over so that it can be repeated',
          'back, says that something is not there today, telephones the',
          'surgery, checks a label twice, helps a child and a parent, and',
          'says no when the answer has to be no.'],
   units=['Good Morning. This Is the Pharmacy.',
          'Taking In a Prescription',
          'What Is Written, and What Is Missing',
          'The Three Questions at the Counter',
          'Handing It Over, and Hearing It Back',
          'We Do Not Have It Today',
          'Telephoning the Surgery',
          'The Label, and the Second Check',
          'A Child’s Medicine, and the Parent at the Counter',
          'When You Cannot Supply Today']),
 'A22': dict(code='A22', level='A2', bandge='A2.2', book='BOOK 2', emblem='clock',
   cover_lines=['English for', 'Pharmacists'], sub='The Week, the Stock and the Record',
   blurb=['Book 2 is the week behind the counter.'],
   units=['The Rota and the Second Pharmacist', 'A Repeat That Is Not Due',
          'Ordering, and What Arrives Instead', 'A Stock Count That Does Not Add Up',
          'A Fridge That Went Off in the Night', 'The Register That Must Balance',
          'Somebody’s First Day in the Dispensary', 'A Patient Who Comes Back Angry',
          'A Near Miss, Written Down', 'The Week in One Page']),
 'B11': dict(code='B11', level='B1', bandge='B1.1', book='BOOK 3', emblem='speech',
   cover_lines=['English for', 'Pharmacists'], sub='Explaining, Checking, Advising',
   blurb=['Book 3 is the language of explanation at the counter.'],
   units=['Explaining What a Medicine Is For', 'Explaining How to Take It',
          'The Question Behind the Question', 'Advising Without Prescribing',
          'Explaining a Delay', 'Instructions a Patient Will Follow',
          'Saying No to a Request', 'A Worried Person at the Counter',
          'The Patient Who Does Not Understand', 'The Patient Who Does Not Come Back']),
 'B12': dict(code='B12', level='B1', bandge='B1.2', book='BOOK 4', emblem='form',
   cover_lines=['English for', 'Pharmacists'], sub='Queries, Records and the Written Answer',
   blurb=['Book 4 is the written side of the pharmacy.'],
   units=['A Query to a Prescriber', 'An Intervention, Recorded',
          'Reading a Discharge List', 'Endorsing Without Ambiguity',
          'The Owing Slip and the Promise', 'A Letter to a Surgery',
          'Scope of Practice, in Writing', 'The Incident Form',
          'Notes Somebody Else Must Read', 'A Year of Records']),
 'B21': dict(code='B21', level='B2', bandge='B2.1', book='BOOK 5', emblem='alert',
   cover_lines=['English for', 'Pharmacists'], sub='When Something Goes Wrong',
   blurb=['Book 5 is the worst week.'],
   units=['The First Ten Minutes', 'A Dispensing Error, Found',
          'Telling a Patient Something Went Wrong', 'Correcting a Record',
          'A Complaint at the Counter', 'A Complaint in Writing',
          'The Investigation Interview', 'Causes Without a Culprit',
          'An Inspector in the Pharmacy', 'Telling the Team']),
 'B22': dict(code='B22', level='B2', bandge='B2.2', book='BOOK 6', emblem='globe',
   cover_lines=['English for', 'Pharmacists'], sub='The Pharmacy, the Profession and the Public',
   blurb=['Book 6 is the pharmacy inside a profession and a community.'],
   units=['A Team Meeting That Decides Something', 'A Procedure for the Pharmacy',
          'A Locum and a Shared Problem', 'Answering the Regulator Exactly',
          'The Community Outside the Door', 'Consulting on a Change',
          'A Training Plan for the Team', 'A Figure the Owner Will Not Like',
          'Teaching Somebody Else', 'What No System Can Do for a Judgement']),
}


# How each person is drawn, so that the same face appears in every unit.
CAST_LOOK = {
 'Rosa Almeida':     dict(skin='3', hair='brown', style='tied',      tunic='teal'),
 'Samir Haddad':     dict(skin='4', hair='black', style='short',     tunic='blue'),
 'Grace Mensah':     dict(skin='5', hair='black', style='short',     tunic='green'),
 'Petra Horakova':   dict(skin='1', hair='grey',  style='tied',      tunic='grey', glasses=True),
 'Dr Anna Lindgren': dict(skin='1', hair='fair',  style='long',      tunic='plum'),
 'Tomas Vidal':      dict(skin='2', hair='dark',  style='short',     tunic='sand'),
 'Mrs Ayse Demir':   dict(skin='3', hair='grey',  style='headscarf', tunic='plum'),
 'Viktor Petrov':    dict(skin='1', hair='grey',  style='bald',      tunic='sand'),
 'Mr Khalil':        dict(skin='4', hair='black', style='short',     tunic='plum'),
}
COVER_PEOPLE = ['Rosa Almeida', 'Samir Haddad', 'Grace Mensah', 'Petra Horakova']

# Words this series is allowed to use above the band because they are its subject.
DOMAIN = """pharmacy pharmacies pharmacist pharmacists dispensary dispensaries
dispense dispenses dispensed dispensing dispenser dispensers
technician technicians assistant assistants locum locums
counter counters bench shelf shelves fridge fridges cabinet cabinets
wholesaler wholesalers surgery surgeries prescriber prescribers
prescription prescriptions label labels labelled labelling
medicine medicines tablet tablets capsule capsules liquid liquids
cream creams ointment ointments drops inhaler inhalers patch patches
blister blisters pack packs packet packets bottle bottles carton cartons
spoon spoons syringe syringes cylinder cylinders triangle triangles
mortar pestle balance bag bags basket baskets tote totes
supply supplies supplied supplying stock stocks stocked
order orders ordered ordering delivery deliveries deliver delivers delivered
storage store stored storing refrigerate refrigerated refrigeration
expiry batch batches allergy allergies allergic
formulary pharmacopoeia register registers record records
requisition requisitions owing repeat repeats endorse endorsed endorsement
query queries queried
directions warnings signature signatures
dose doses dosage form forms
pharmaceutical pharmaceutics
checker rechecked recheck
identifier identifiers identification appointment
practitioner supervisor receptionist
in-date out-of-date
measuring counting
hatch screen till
collect collects collected collection collecting
sticker stickers
chemist chemists
van vans
"""

DOMAIN = DOMAIN.split()

CAST_ROLE = {n: r for n, r in CAST}
CAST_ROLE.update({'Mrs Ayse Demir': 'patient', 'Viktor Petrov': 'patient',
                  'Mr Khalil': 'parent of a patient'})
for _n, _r in CAST_ROLE.items():
    CAST_LOOK.setdefault(_n, dict(skin='3', hair='black', style='short', tunic='teal'))
    CAST_LOOK[_n]['role'] = _r
