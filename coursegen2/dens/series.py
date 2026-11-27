# -*- coding: utf-8 -*-
"""English for Dental Students - series parameters (academic)."""
KIND = 'S'
TITLE = 'English for Dental Students'
EDITION = 'First Edition'
SERIES = 'ENGLISH FOR THE DENTAL PROFESSIONS'
STRAP = 'The English of the lecture, the laboratory and the first patient'
FILESTEM = 'English_for_Dental_Students'
ORDER = ['A22', 'B11', 'B12', 'B21', 'B22', 'C11']

CAST = [
 ('Leila Mansour', 'first-year dental student'),
 ('Daniel Owusu', 'first-year dental student'),
 ('Dr Petra Nilsen', 'lecturer in oral biology'),
 ('Dr Yusuf Rahman', 'clinical supervisor'),
 ('Mei-Ling Chen', 'dental nurse, in the teaching clinic'),
 ('Tomas Varga', 'dental technician'),
]

SCHOOL = 'Northgate School of Dentistry'

BOOKS = {
 'A22': dict(code='A22', level='A2', bandge='A2.2', book='BOOK 1', emblem='tooth',
   cover_lines=['English for', 'Dental Students'], sub='The Mouth and the Clinic',
   blurb=['Book 1 is the first term. Leila Mansour learns the mouth in English:',
          'its parts, its surfaces, the dentition and how it is numbered, the',
          'instruments on a tray, the rules of a clinic, and how to follow a',
          'lecture, read a textbook page and write a definition that would',
          'survive an examiner.'],
   units=['The Mouth, Part by Part',
          'The Dentition, and How We Number It',
          'The Tooth in Section',
          'Surfaces, and How We Name Them',
          'The Instruments on the Tray',
          'The Clinic, and Its Rules',
          'Hard Tissue and Soft Tissue',
          'How a Tooth Comes Through',
          'Reading a Textbook Page',
          'Writing a Definition That Survives an Examiner']),
 'B11': dict(code='B11', level='B1', bandge='B1.1', book='BOOK 2', emblem='flask',
   cover_lines=['English for', 'Dental Students'], sub='Structure and Material',
   blurb=['Book 2 is oral histology, anatomy and dental materials.'],
   units=['Enamel', 'Dentine and Pulp', 'The Periodontium',
          'The Head and the Neck', 'Saliva',
          'Comparing Two Materials', 'Why a Material Fails',
          'The Laboratory Report', 'A Process, Described',
          'Answering a Short Examination Question']),
 'B12': dict(code='B12', level='B1', bandge='B1.2', book='BOOK 3', emblem='chart',
   cover_lines=['English for', 'Dental Students'], sub='Disease and the Procedures That Answer It',
   blurb=['Book 3 is pathology, and the preclinical procedures that answer it.'],
   units=['How Caries Begins', 'The Periodontal Pocket', 'Pulpitis',
          'Infection, and How It Spreads', 'Reading a Radiograph',
          'A Cavity, Prepared', 'A Filling, Placed',
          'Extraction, in Principle', 'Writing Up a Preclinical Exercise',
          'The Case, Presented']),
 'B21': dict(code='B21', level='B2', bandge='B2.1', book='BOOK 4', emblem='chair',
   cover_lines=['English for', 'Dental Students'], sub='Your First Patients, Under Supervision',
   blurb=['Book 4 is the move from the bench to the chair.'],
   units=['The First Appointment You Run', 'Taking a History Yourself',
          'Explaining to a Patient, Not a Tutor', 'Asking Your Supervisor',
          'Being Corrected in Front of a Patient', 'Writing the Clinical Record',
          'Consent, and Your Part in It', 'When You Are Out of Your Depth',
          'Handing a Patient Over', 'The Clinic Log']),
 'B22': dict(code='B22', level='B2', bandge='B2.2', book='BOOK 5', emblem='book',
   cover_lines=['English for', 'Dental Students'], sub='Evidence, Reading and Judgement',
   blurb=['Book 5 is reading the literature and arguing from it.'],
   units=['What a Paper Claims', 'What the Numbers Show',
          'What the Study Could Not Control', 'Two Papers That Disagree',
          'Guidelines, and Where They Come From', 'Writing a Literature Summary',
          'Citing Without Copying', 'A Poster and Its Three Minutes',
          'Defending a Reading in a Seminar', 'When the Evidence Runs Out']),
 'C11': dict(code='C11', level='C1', bandge='C1.1', book='BOOK 6', emblem='globe',
   cover_lines=['English for', 'Dental Students'], sub='The Case, the Viva and What Comes Next',
   blurb=['Book 6 is the end of the degree and the start of the work.'],
   units=['The Case Report', 'The Long Case', 'The Viva: Being Asked Why',
          'Defending a Treatment Plan', 'Admitting the Limits of Your Case',
          'The Reflective Account', 'Applying for a Post',
          'The Interview', 'Your First Month in Practice',
          'What No System Can Do for a Clinical Judgement']),
}


# How each person is drawn, so that the same face appears in every unit.
CAST_LOOK = {
 'Leila Mansour':   dict(skin='4', hair='black', style='headscarf', tunic='blue'),
 'Daniel Owusu':    dict(skin='6', hair='black', style='short',     tunic='teal'),
 'Dr Petra Nilsen': dict(skin='1', hair='fair',  style='tied',      tunic='plum', glasses=True),
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
COVER_PEOPLE = ['Leila Mansour', 'Daniel Owusu', 'Dr Petra Nilsen', 'Dr Yusuf Rahman']

# Words this series is allowed to use above the band because they are its subject.
DOMAIN = """injection injections drill drills drilled
antibiotic antibiotics surgical specialist specialists
relief relieve relieves relieved
acid acids pressure numb numbness ligament ligaments
cavitation cavitated cavitations
distobuccal distolingual mesiobuccal mesiolingual site sites
diagnosis diagnoses
gauze scale scaled scaling polish polished polishing
excavate excavates excavated cervical dental dentist dentistry dentition hygienist technician receptionist
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
CAST_ROLE.update({'Mrs Patel': 'patient', 'Thandiwe Mabaso': 'patient'})
for _n, _r in CAST_ROLE.items():
    CAST_LOOK.setdefault(_n, dict(skin='3', hair='black', style='short', tunic='teal'))
    CAST_LOOK[_n]['role'] = _r
