# -*- coding: utf-8 -*-
"""English for Dentists, Second Edition - series parameters (practitioner)."""
KIND = 'P'
TITLE = 'English for Dentists'
EDITION = 'Second Edition'
SERIES = 'ENGLISH FOR THE DENTAL PROFESSIONS'
STRAP = 'The English of the chair, the record and the person in front of you'
FILESTEM = 'English_for_Dentists_2e'
ORDER = ['A21', 'A22', 'B11', 'B12', 'B21', 'B22']

CAST = [
 ('Nadia Haddad', 'dentist, new to the practice'),
 ('Mei-Ling Chen', 'dental nurse'),
 ('Hugo Lindqvist', 'dental hygienist'),
 ('Beatriz Alves', 'practice manager'),
 ('Tomas Varga', 'dental technician, at the laboratory'),
 ('Amara Okonkwo', 'receptionist'),
 ('Dr Yusuf Rahman', 'principal dentist'),
]

PRACTICE = 'Fairgate Dental Practice'
LAB = 'Northgate Dental Laboratory'

BOOKS = {
 'A21': dict(code='A21', level='A2', bandge='A2.1', book='BOOK 1', emblem='chair',
   cover_lines=['English for', 'Dentists'], sub='In the Chair',
   blurb=['Book 1 is the patient visit, from the first word to the last.',
          'Nadia Haddad meets the patient, seats them, looks in the mouth,',
          'says what she is going to do, agrees how the patient stops her,',
          'asks about pain while she works, gives after-care the patient can',
          'repeat back, books the next appointment and writes the notes.'],
   units=['Good Morning. My Name Is.',
          'Open Wide: Looking in the Mouth',
          'Taking a History Before You Look',
          'Saying What You Are Going to Do',
          'Agreeing How the Patient Stops You',
          'Asking About Pain While You Work',
          'After-Care the Patient Can Repeat Back',
          'Booking the Next Appointment',
          'Writing the Notes the Same Day',
          'Closing the Surgery']),
 'A22': dict(code='A22', level='A2', bandge='A2.2', book='BOOK 2', emblem='tray',
   cover_lines=['English for', 'Dentists'], sub='The Procedure and the Week',
   blurb=['Book 2 is the work itself and the week around it.'],
   units=['The Tray for the Job', 'A Filling, Step by Step',
          'Isolation and Suction', 'The Decontamination Cycle',
          'The Appointment Book', 'A Written Estimate',
          'Stock, and What Ran Out', 'A Patient Who Cannot Pay Today',
          'The Record That Must Be Complete', 'The Week in One Page']),
 'B11': dict(code='B11', level='B1', bandge='B1.1', book='BOOK 3', emblem='speech',
   cover_lines=['English for', 'Dentists'], sub='Explaining, Consenting, Instructing',
   blurb=['Book 3 is the language of explanation and agreement.'],
   units=['Explaining What You Found', 'Explaining the Options',
          'The Cost, and What It Covers', 'Consent, and What It Is Not',
          'Explaining a Radiograph', 'Instructions a Patient Will Follow',
          'Saying No to a Request', 'Breaking Bad News Gently',
          'The Anxious Patient', 'The Patient Who Does Not Come Back']),
 'B12': dict(code='B12', level='B1', bandge='B1.2', book='BOOK 4', emblem='form',
   cover_lines=['English for', 'Dentists'], sub='Referrals, the Laboratory and the Record',
   blurb=['Book 4 is the written side of the practice.'],
   units=['A Referral Letter', 'A Laboratory Prescription',
          'Reading a Report Back', 'Charting Without Ambiguity',
          'The Treatment Plan in Writing', 'A Letter to a Medical Colleague',
          'Scope of Practice, in Writing', 'The Radiograph Report',
          'Notes Somebody Else Must Read', 'A Year of Records']),
 'B21': dict(code='B21', level='B2', bandge='B2.1', book='BOOK 5', emblem='alert',
   cover_lines=['English for', 'Dentists'], sub='When Something Goes Wrong',
   blurb=['Book 5 is the worst week.'],
   units=['The First Ten Minutes', 'A Medical Emergency in the Chair',
          'Telling a Patient Something Went Wrong', 'Correcting a Record',
          'A Complaint at the Desk', 'A Complaint in Writing',
          'The Investigation Interview', 'Causes Without a Culprit',
          'An Inspector in the Practice', 'Telling the Team']),
 'B22': dict(code='B22', level='B2', bandge='B2.2', book='BOOK 6', emblem='globe',
   cover_lines=['English for', 'Dentists'], sub='The Practice, the Profession and the Public',
   blurb=['Book 6 is the practice inside a profession and a community.'],
   units=['A Practice Meeting That Decides Something', 'A Policy for the Practice',
          'An Associate and a Shared Problem', 'Answering the Regulator Exactly',
          'The Community Outside the Door', 'Consulting on a Change',
          'A Training Plan for the Team', 'A Figure the Partners Will Not Like',
          'Teaching Somebody Else', 'What No System Can Do for a Clinical Judgement']),
}


# How each person is drawn, so that the same face appears in every unit.
CAST_LOOK = {
 'Nadia Haddad':    dict(skin='3', hair='black', style='tied',      tunic='teal'),
 'Mei-Ling Chen':   dict(skin='2', hair='black', style='short',     tunic='blue'),
 'Hugo Lindqvist':  dict(skin='1', hair='fair',  style='short',     tunic='green'),
 'Beatriz Alves':   dict(skin='4', hair='brown', style='long',      tunic='plum'),
 'Tomas Varga':     dict(skin='2', hair='grey',  style='short',     tunic='sand'),
 'Amara Okonkwo':   dict(skin='5', hair='black', style='headscarf', tunic='plum'),
 'Dr Yusuf Rahman': dict(skin='4', hair='grey',  style='bald',      tunic='grey', glasses=True),
 'Thandiwe Mabaso': dict(skin='5', hair='black', style='long',      tunic='plum'),
 'Marco Alvarez':   dict(skin='2', hair='dark',  style='short',     tunic='sand'),
 'Mrs Patel':       dict(skin='4', hair='black', style='long',      tunic='plum'),
}
COVER_PEOPLE = ['Nadia Haddad', 'Mei-Ling Chen', 'Amara Okonkwo', 'Hugo Lindqvist']

# Words this series is allowed to use above the band because they are its subject.
DOMAIN = """excavate excavates excavated cervical dental dentist dentistry dentition hygienist technician receptionist
surgery chair headrest bracket spittoon bowl bib suction aspirator autoclave
sterilise sterilisation decontamination instrument mirror probe explorer tweezers
excavator scaler elevator forceps handpiece bur matrix wedge dam clamp
tooth teeth molar premolar incisor canine quadrant midline mesial distal occlusal
buccal lingual labial palatal enamel dentine pulp cementum gingiva gingival
mucosa mucosal keratinised periodontal periodontium alveolar frenum frena
vestibule palate uvula saliva salivary tongue cheek jaw maxilla mandible
caries decay cavity plaque calculus tartar abscess pulpitis gingivitis
periodontitis stomatitis erosion abrasion attrition bruxism lesion
filling restoration crown bridge veneer inlay onlay denture implant brace
retainer radiograph radiographic bitewing periapical panoramic notation FDI ISO
amalgam composite ionomer anaesthetic anaesthesia fluoride varnish sealant
alginate impression occlusion eruption deciduous permanent primary supervisor
clinician practitioner chairside charting chart identifier identifiers
appointment record notation laboratory prescription referral consent
odont odontics endodontics orthodontics prosthodontics periodontics
interdental interproximal preoperative sublingual orofacial masticatory
palpate palpation bimanual inspection identification examination
hygiene hygienic occlusally interdentally sterile
finding findings swelling swollen toothpaste toothbrush notation
quadrants surfaces dentures implants braces radiographs
digit digits central lateral anterior posterior
bleed bleeds bleeding bled anatomy anatomical bony chew chews chewed chewing
duct ducts cusp cusps erupt erupts erupted extract extracted extraction
abnormal elastic chin elbow swallow swallows swallowed swallowing
clinic clinics clinical clinically tissue tissues organ organs
crown crowns root roots neck margin margins attached attachment
gum gums rinse rinses rinsed rinsing spit spits allergy allergies
canal canals chamber chambers inflamed inflammation recede recedes
receded recession opposing regrow regrown regrows exposed exposure
tubule tubules histology ligament ligaments mineral minerals
probe probes probed numbness anaesthetise anaesthetised
mask masks gown gowns glove gloves reception receptionist estimate
estimates anaesthetic anaesthetics dressing dressings
allergic painkiller painkillers
sound unsound bite bites biting keratin keratinise keratinised ligament
millimetre millimetres moist muscle muscles opening openings receptor receptors
seal seals sealed tender tough firm firmer stiff crush crushes crushing
grind grinds grinding oral curve curves lip lips
""".split()

CAST_ROLE = {n: r for n, r in CAST}
CAST_ROLE.update({'Thandiwe Mabaso': 'patient', 'Marco Alvarez': 'patient',
                  'Mrs Patel': 'patient'})
for _n, _r in CAST_ROLE.items():
    CAST_LOOK.setdefault(_n, dict(skin='3', hair='black', style='short', tunic='teal'))
    CAST_LOOK[_n]['role'] = _r
