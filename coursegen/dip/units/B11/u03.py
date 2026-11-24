# -*- coding: utf-8 -*-
import figs

U = dict(
num=3,
title='Passports, Powers and Proof',
gram='the passive in procedure',
ai='checking a document against the signs of a forgery',
strap='CEFR B1 · Grammar: the passive in procedure · '
      'AI: checking a document against the signs of a forgery',
cando=['describe a document procedure using the passive',
       'name the parts of an identity document and what proves what',
       'explain the difference between a flag and a finding',
       'tell an applicant that a document cannot be accepted today',
       'write a six-line procedure for checking documents'],

hero=('A CERTIFICATE THAT WAS FLAGGED, AND A WIDOW WHO WAITED NINE WEEKS',
      ['The paper was the wrong weight, the system said.',
       'The paper was the paper that district used in 1994.'],
      [(720, 'grey', 'short'), (720, 'purple', 'long'), (720, 'blue', 'short')]),
hero_cap='A document on a counter, under a lamp, with two officers looking at it from different sides.',

warm=['How many documents did you need the last time you proved who you were?',
      'What would you do if an official said your certificate did not look right?',
      'Who decides whether a document is genuine?'],

read=[
 'Documents are checked, copied and returned. A passport is examined for its security '
 'features. A certificate is compared with the register that issued it. A signature is '
 'checked against a specimen. Nothing is decided by one officer alone, and nothing is kept '
 'without a receipt.',
 'The language of this work is passive for a reason. The applications are received, the '
 'documents are examined, the originals are returned. The procedure is the same whoever is '
 'behind the glass, and the passive says so.',
 'Forgery exists and is sometimes very good. The usual signs are small: a font that is '
 'almost right, a seal that is slightly too round, a date written in a format the issuing '
 'office never used, paper of the wrong weight.',
 'Since January the section has used a document-checking tool. It compares a scanned '
 'document against thousands of genuine examples and raises a flag where something differs. '
 'It has found two real forgeries in nine months, which is two more than were found before.',
 'In March it flagged a death certificate from a northern district. The paper was lighter '
 'than the national standard. The district had used lighter paper until 1996, as every '
 'registrar in that province knows and no database recorded.'],

dp1=('How document checks are used', 'Document examination guidance commonly treats an '
     'automated similarity check as an indicator that requires human examination, never as '
     'a determination, because genuine regional and historical variation is routinely '
     'scored as anomalous.',
     'Source: reported document examination practice, 2025–2026.'),

c_a=[('What happens to original documents?', 'they are examined and returned'),
     ('Why is the language passive?', 'the procedure is the same whoever carries it out'),
     ('Name two signs of forgery.', 'a seal slightly too round, a wrong date format'),
     ('How many forgeries has the tool found?', 'two in nine months'),
     ('What did it flag in March?', 'a death certificate from a northern district'),
     ('Why was the paper lighter?', 'the district used lighter paper until 1996')],

c_b=[('Documents are kept without a receipt.', 'F'),
     ('One officer decides alone.', 'F'),
     ('Forgeries are always obvious.', 'F'),
     ('The tool found two real forgeries.', 'T'),
     ('The flagged certificate was a forgery.', 'F'),
     ('Databases recorded the district’s old paper.', 'F')],

c_c=[('The documents ____________ examined at the counter.', 'are'),
     ('The originals ____________ returned the same day.', 'are'),
     ('A receipt ____________ given for anything retained.', 'is'),
     ('The certificate ____________ flagged by the system in March.', 'was'),
     ('Nothing ____________ decided by one officer alone.', 'is'),
     ('The register ____________ consulted before a refusal.', 'is')],

c_d=[('The passive is used here because ( it sounds formal / the procedure matters more than the person ).', ['it sounds formal', 'the procedure matters more than the person'], 1),
     ('A flag is ( an indicator / a finding ).', ['an indicator', 'a finding'], 0),
     ('The lighter paper was ( genuine regional practice / evidence of forgery ).',
      ['genuine regional practice', 'evidence of forgery'], 0),
     ('The tool has been ( useful and imperfect / useless ).',
      ['useful and imperfect', 'useless'], 0),
     ('Original documents are ( returned / kept ).', ['returned', 'kept'], 0)],

c_e=('Active or passive? Put each sentence in the right column.',
     [('The documents are examined at the counter.', 'passive'),
      ('An officer examines the documents.', 'active'),
      ('A receipt is given for anything retained.', 'passive'),
      ('The system flagged the certificate.', 'active'),
      ('The certificate was flagged in March.', 'passive'),
      ('We return the originals the same day.', 'active')],
     ['active', 'passive']),

v_fig_title='WHAT PROVES WHAT',
v_fig=[('doc', 'a certified true copy'), ('key', 'a security feature'), ('people', 'a notary'),
       ('chart', 'a civil register'), ('clock', 'a legalisation'), ('door', 'an attestation')],
v_fig_cap='Six words for the machinery of proving that a person is who they say they are.',

vocab=[
 ('a passport', 'the document issued by a state identifying a national for travel'),
 ('a travel document', 'any official document permitting a person to cross a border'),
 ('a birth certificate', 'the official record of a person’s birth'),
 ('a marriage certificate', 'the official record of a marriage'),
 ('a death certificate', 'the official record of a death'),
 ('an attestation', 'an official statement confirming that something is true'),
 ('a legalisation', 'the official confirmation that a document may be used in another state'),
 ('an apostille', 'a standard certificate used between states to accept a document'),
 ('a notary', 'an officer authorised to witness signatures and certify documents'),
 ('a sworn translation', 'a translation certified by an authorised translator'),
 ('a civil register', 'the official record of births, marriages and deaths'),
 ('an identity document', 'a document issued to prove who a person is'),
 ('a photocopy', 'a copy made by machine, with no official standing'),
 ('an original', 'the document itself, rather than a copy of it'),
 ('a certified true copy', 'a copy formally confirmed to match the original'),
 ('a stamp', 'an impression in ink showing that an office has acted'),
 ('a seal', 'a mark pressed or printed to show authenticity'),
 ('a signature specimen', 'an example of an official’s signature held for comparison'),
 ('a security feature', 'a part of a document designed to make copying difficult'),
 ('a tamper mark', 'a sign that a document has been altered after issue')],

v_a=[('An official statement confirming something is true is an ____________.', 'attestation'),
     ('The official record of births and deaths is a civil ____________.', 'register'),
     ('A copy confirmed to match the original is a certified true ____________.', 'copy'),
     ('An example of an official’s signature is a signature ____________.', 'specimen'),
     ('A sign that a document has been altered is a ____________ mark.', 'tamper'),
     ('A translation certified by an authorised translator is a ____________ translation.', 'sworn'),
     ('A part designed to make copying difficult is a ____________ feature.', 'security'),
     ('An officer who witnesses signatures is a ____________.', 'notary')],

v_b=[('A legalisation is the official confirmation that a document', 'may be used in another state.'),
     ('An apostille is a standard certificate used between states', 'to accept a document.'),
     ('A photocopy is a copy made by machine,', 'with no official standing.'),
     ('A seal is a mark pressed or printed', 'to show authenticity.'),
     ('A travel document is any official document', 'permitting a person to cross a border.')],

g_title='Grammar: the passive in procedure',
g_rule=['Form: be + past participle. The documents are examined. The copy was certified.',
        'Use the passive when the procedure matters more than the person carrying it out.',
        'Say by + the actor only when it matters: the certificate was flagged by the system.',
        'Keep tense: are examined (now), were examined (then), have been examined (so far).'],
g_fig=('ACTIVE, AND LESS USEFUL HERE',
       ['An officer examines your documents.',
        'Somebody gives you a receipt.',
        'We returned your originals.',
        'A clerk checked the register.'],
       'PASSIVE, AND CORRECT FOR A PROCEDURE',
       ['Your documents are examined at the counter.',
        'A receipt is given for anything retained.',
        'Your originals were returned the same day.',
        'The register was checked before any decision.'],
       'four sentences about who did it',
       'the same four, about what is done'),
g_fig_cap='The passive promises that the same thing happens whoever is on duty.',

g_a=[('The documents ____________ (examine) at the counter.', 'are examined'),
     ('A receipt ____________ (give) for anything retained.', 'is given'),
     ('Your originals ____________ (return) the same day.', 'are returned'),
     ('The certificate ____________ (flag) by the system in March.', 'was flagged'),
     ('The register ____________ (check) before any refusal.', 'is checked'),
     ('Nothing ____________ (decide) by one officer alone.', 'is decided'),
     ('Two forgeries ____________ (find) in nine months.', 'have been found'),
     ('The applicant ____________ (inform) in writing.', 'is informed'),
     ('The file ____________ (keep) for six years.', 'is kept')],

g_b=[('The documents ( are examined / examine ) at the counter.', ['are examined', 'examine'], 0),
     ('A receipt ( is given / gives ) for anything retained.', ['is given', 'gives'], 0),
     ('The certificate ( was flagged / was flag ) in March.', ['was flagged', 'was flag'], 0),
     ('Two forgeries ( have been found / have found ).',
      ['have been found', 'have found'], 0),
     ('Nothing ( is decided / decides ) by one officer alone.', ['is decided', 'decides'], 0),
     ('The file ( is kept / keeps ) for six years.', ['is kept', 'keeps'], 0)],

d1=dict(
 title='A flag is not a finding',
 fig=(['The system flagged it.', 'As what?'],
      ['As different.', 'Different is not false.']),
 cap='Bassel Tannous and a junior officer, over a flagged certificate.',
 lines=[('Officer', 'The system has flagged this death certificate.'),
        ('Bassel', 'Flagged it as what?'),
        ('Officer', 'As anomalous. The paper weight is below the national standard.'),
        ('Bassel', 'Different is not false. What does the register say?'),
        ('Officer', 'I have not asked the register.'),
        ('Bassel', 'Then we know nothing yet. A flag is an instruction to look, not a conclusion.'),
        ('Officer', 'The applicant is waiting at the counter.'),
        ('Bassel', 'She is told that a check is being made and that it takes three days.'),
        ('Officer', 'And if she asks why?'),
        ('Bassel', 'She is told that the document is being verified with the issuing office.'),
        ('Officer', 'Not that it was flagged.'),
        ('Bassel', 'Never. A flag is ours. An accusation would be hers to live with.')],
 a=[('What did the system flag?', 'a death certificate'),
    ('On what ground?', 'the paper weight was below the national standard'),
    ('What had not been done?', 'the register had not been asked'),
    ('What is a flag?', 'an instruction to look, not a conclusion'),
    ('What is the applicant told?', 'that the document is being verified with the issuing office')],
 b=[('Different is not ____________.', 'false'),
    ('A flag is an instruction to ____________.', 'look'),
    ('The document is being ____________ with the issuing office.', 'verified'),
    ('An accusation would be hers to ____________ with.', 'live')]),

d2=dict(
 title='The paper that district used in 1994',
 fig=(['Lighter than the standard.', 'In 1994?'],
      ['The standard is from 1996.', 'Then the paper is right and the standard is late.']),
 cap='Rim Haddad and Bassel, after the register replied.',
 lines=[('Rim', 'The register has confirmed it. The certificate is genuine.'),
        ('Bassel', 'And the paper?'),
        ('Rim', 'That district used lighter paper until 1996. Every registrar there knows it.'),
        ('Bassel', 'And no database does.'),
        ('Rim', 'Why would it? Nobody writes down what everybody knows.'),
        ('Bassel', 'So the tool was right that it was different and wrong about what that meant.'),
        ('Rim', 'It is not wrong. It does not say meanings. It says different.'),
        ('Bassel', 'We read different as suspicious.'),
        ('Rim', 'And a widow waited nine weeks for a pension while we read it that way.'),
        ('Bassel', 'The next time a document is flagged, the register is asked the same day.'),
        ('Rim', 'And the applicant is told what is happening, in a sentence she can repeat.'),
        ('Bassel', 'And when the register itself has lost its records from that year?')],
 unresolved=True,
 a=[('What did the register confirm?', 'that the certificate was genuine'),
    ('Why was the paper lighter?', 'that district used lighter paper until 1996'),
    ('Why is it in no database?', 'nobody writes down what everybody knows'),
    ('What did the officers read different as?', 'suspicious'),
    ('What is the new rule?', 'the register is asked the same day')],
 b=[('The register has ____________ it.', 'confirmed'),
    ('Nobody writes down what ____________ knows.', 'everybody'),
    ('It does not say ____________.', 'meanings'),
    ('A widow waited nine ____________.', 'weeks')]),

speak=[('Describe a procedure',
        ['Describe a procedure at your work in eight passive sentences.',
         'Your partner asks who does each step.',
         'Decide which steps need the actor named and which do not.']),
       ('Flag or finding',
        ['Your partner reads out six observations about a document.',
         'Say for each whether it is a flag or a finding, and why.',
         'Say what you would do next in each case.']),
       ('Telling the applicant',
        ['Student A must tell Student B that a document cannot be accepted today.',
         'A may not accuse, and B must leave knowing what happens next.',
         'Change roles, and make B more upset.'])],

ext_title='A similarity check finds difference; only a register finds falsehood',
ext_fig=figs.datatable('NINE MONTHS OF FLAGS',
                       ['Flag', 'How many', 'Outcome'],
                       [['wrong paper weight', '9', '1 forgery, 8 genuine'],
                        ['unusual date format', '7', '0 forgeries'],
                        ['seal geometry', '4', '1 forgery, 3 genuine'],
                        ['font difference', '11', '0 forgeries'],
                        ['tamper mark', '2', '0 forgeries, both water damage'],
                        ['total', '33', '2 forgeries']]),
ext_fig_cap='Thirty-three flags, two forgeries, and thirty-one people who had to wait.',
ext=[
 'Document fraud is real, it is sometimes very good, and a consular section is where it '
 'arrives. The usual signs are small and they are the kind of thing a machine notices '
 'faster than a person: a font that is nearly right, a seal a fraction too round.',
 'A checking tool compares a scanned document with thousands of genuine examples and raises '
 'a flag where something differs. In nine months this one found two forgeries that would '
 'almost certainly not have been found by eye.',
 'It also raised thirty-one flags on genuine documents. Old formats, regional variations, '
 'water damage, paper from a district that changed its supplier in 1996. The tool was '
 'accurate every time: all thirty-three were different from the standard.',
 'Difference is not falsehood, and this is the distinction the whole procedure turns on. A '
 'flag says look harder. Only the issuing register can say genuine or false, and asking it '
 'takes days rather than seconds.',
 'So the rule is procedural. A flag is never a refusal, never a finding and never told to '
 'the applicant as an accusation. The register is asked the same day, the applicant is told '
 'what is being done in a sentence she can repeat, and the file records both.'],

dp2=('Why flags are not findings', 'Services using automated document checks commonly '
     'require that an anomaly be recorded as an indicator only, that verification with the '
     'issuing authority be initiated the same day, and that the applicant be informed of '
     'the delay in neutral terms.',
     'Source: reported document examination practice, 2025–2026.'),

e_a=[('What does a checking tool compare?', 'a scanned document with thousands of genuine examples'),
     ('How many forgeries were found?', 'two in nine months'),
     ('How many genuine documents were flagged?', 'thirty-one'),
     ('What can only the register say?', 'whether a document is genuine or false'),
     ('What must a flag never be?', 'a refusal, a finding or an accusation')],
e_b=[('Document fraud is rare and always obvious.', 'F'),
     ('The tool was inaccurate about difference.', 'F'),
     ('Difference and falsehood are the same.', 'F'),
     ('Asking the register takes seconds.', 'F'),
     ('An applicant should be told a flag was raised.', 'F'),
     ('Both the flag and the verification go in the file.', 'T')],

w_model='Purpose: so that every flagged document is verified and no applicant is accused. '
        'Scope: documents presented at the Ostport counter; postal applications are covered '
        'separately. Inputs: the checking tool’s output and the issuing register’s reply. '
        'Criteria: 6 steps covering the scan, the flag, the register request, what the '
        'applicant is told, the time limits, and what is recorded. Done: the procedure on '
        'the counter wall and in the file, by 1 June. Fallback: where a register cannot '
        'reply, the case is referred to the consul, not refused.',
w_fig=figs.spec_card('SIX STEPS, NO ACCUSATIONS',
                     [('Purpose', 'every flag verified, no applicant accused'),
                      ('Scope', 'counter documents only'),
                      ('Inputs', 'the tool’s output and the register’s reply'),
                      ('Criteria', 'scan, flag, request, what is said, time limits, record'),
                      ('Done', 'on the wall and in the file by 1 June'),
                      ('Fallback', 'no reply: refer to the consul, do not refuse')]),
w_fig_cap='A written procedure is what stops an indicator becoming a verdict.',
w_task='Write a six-line procedure for checking a document.',
w_steps=['Line 1: what is examined, and by whom, in the passive.',
         'Line 2: what happens when nothing is flagged.',
         'Line 3: what happens when something is flagged, and within what time.',
         'Line 4: what the applicant is told, word for word.',
         'Line 5: what is recorded, and where.',
         'Line 6: what happens if no reply is received.'],
w_bank=['All original documents are examined at the counter and returned the same day.',
        'Where no anomaly is found, the application is processed normally.',
        'Where an anomaly is indicated, verification is requested from the issuing office within … hours.',
        'The applicant is told: your document is being verified with the office that issued it.',
        'Both the indication and the reply are recorded in the case file.'],
w_check=['Is every step in the passive?',
         'Is there a time limit in line 3?',
         'Is line 4 a sentence an applicant could repeat?',
         'Does line 6 avoid refusal?'],

t_title='Checking a document against the signs of a forgery',
t_fig=figs.split('A DOCUMENT CHECK',
                 'What the tool can tell you',
                 ['this differs from 4,000 examples',
                  'the seal geometry is unusual',
                  'the date format is not standard',
                  'the paper weight is below standard'],
                 'What only a register can tell you',
                 ['this certificate was issued',
                  'to this person, on this date',
                  'by this office',
                  'and has not been altered since']),
t_fig_cap='The left column is measurement. The right column is the only answer that matters.',
t_body=[
 'A checking tool is a very good second pair of eyes. It compares a document against '
 'thousands of genuine examples and notices differences no officer would see at a counter '
 'with eighty people waiting. Two forgeries in nine months is a real result.',
 'What it produces is an indicator. The sentence it can honestly say is this differs from '
 'the examples I hold. The sentence it cannot say is this is false, because falsehood is a '
 'fact about an issuing office, not about a scan.',
 'So treat every flag as an instruction to ask the register, and keep the applicant out of '
 'it. Tell them the document is being verified with the office that issued it, which is '
 'true, neutral and repeatable. Never tell them that a system found something wrong.'],
t_say=[('State what it is: ', 'This is an indicator, not a finding.'),
       ('Ask the register: ', 'Verification requested from the issuing office today.'),
       ('Tell the applicant: ', 'Your document is being verified with the office that issued it.')],
t_bound='A document-checking tool knows what the examples it holds look like, and nothing '
        'about regional practice, old formats or water damage. It reports difference from a '
        'standard and has no way of telling you that the standard arrived after the document did.',
t_a=[('This is an ____________, not a finding.', 'indicator'),
     ('Verification ____________ from the issuing office today.', 'requested'),
     ('Your document is being ____________ with the office that issued it.', 'verified'),
     ('It reports ____________ from a standard.', 'difference'),
     ('The standard arrived after the ____________ did.', 'document'),
     ('Falsehood is a fact about an issuing ____________.', 'office')],
t_b_rubric='Say what each observation entitles you to do.',
t_b=[('The paper is lighter than the standard.', 'ask the register; it may be regional practice'),
     ('The register says no such certificate was issued.', 'refuse, and record the register’s reply'),
     ('The seal geometry is unusual.', 'ask the register; old seals vary'),
     ('There is a tamper mark across the date.', 'ask the register and retain a copy, with a receipt')],

case=dict(
 title='The Decision Room · Nine weeks for a lighter sheet of paper',
 brief=[
  'A widow presents a death certificate issued in a northern district in 1994, in support '
  'of a pension claim that must be certified by the Mission. The checking tool flags the '
  'paper weight as below the national standard.',
  'The officer, following no written procedure, tells the applicant that the document '
  'cannot be accepted and that she should obtain a new one. She travels to the district, '
  'which no longer issues documents, and returns with nothing.',
  'Nine weeks later the register confirms that the certificate is genuine and that the '
  'district used lighter paper until 1996. The pension is certified. The widow has spent '
  'nine weeks and two journeys proving something that was never in doubt.'],
 exhibit=figs.datatable('NINE WEEKS, STEP BY STEP',
                        ['Week', 'What happened', 'What should have happened'],
                        [['1', 'document flagged', 'the same'],
                         ['1', 'applicant told to get a new one', 'register asked the same day'],
                         ['2', 'applicant travels north', '—'],
                         ['4', 'applicant returns, nothing', '—'],
                         ['7', 'consul hears of the case', 'week 1'],
                         ['9', 'register confirms, pension certified', 'week 2']]),
 exhibit_cap='The tool did its job in four seconds. The procedure around it did not exist.',
 exhibit_note='The flag was correct: the paper does differ from the standard. Everything '
              'that went wrong happened after the flag, and none of it was the tool’s doing.',
 voices=[('Bassel Tannous', 'consul',
          'In nine months it has found two forgeries we would never have seen. I am keeping it.'),
         ('Rim Haddad', 'consular assistant',
          'Keep it. Write down what a flag means first, because thirty-one people have now waited for one.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And the widow was told her document was not acceptable. She heard: you think I am a liar.')],
 steps=[('Find it', 'What exactly did the tool report?'),
        ('Compare it', 'What was done, and what should have been done in week one?'),
        ('Infer it', 'Why did the officer treat an indicator as a decision?'),
        ('Weigh it', 'Two real forgeries against thirty-one genuine documents delayed.'),
        ('Decide', 'What must follow a flag, and what must the applicant hear?')],
 analysis=[('Find it. What did the tool report?', 'that the paper differed from the national standard'),
           ('Compare it. What should have happened?', 'the register should have been asked the same day'),
           ('Infer it. Why was it treated as a decision?', 'no written procedure said what a flag meant'),
           ('Weigh it. What is the balance?', 'two forgeries found against thirty-one genuine delays'),
           ('Decide. What must the applicant hear?', 'that the document is being verified with the issuing office')],
 decision='Decide the procedure, in four lines.',
 decision_steps=['Say what a flag is, in one sentence.',
                 'Say what must be done, and within what time.',
                 'Say what the applicant is told.',
                 'Say what happens where a register cannot answer.'],
 bank=['A flag is an indicator that a document differs from the examples held; it is not a finding.',
       'Verification is requested from the issuing office on the day the flag is raised.',
       'The applicant is told that the document is being verified with the office that issued it.',
       'Where a register cannot answer within 20 working days, the case is referred to the consul.'],
 outcome='The section writes four lines and puts them on the counter wall. A flag is an '
         'indicator, never a finding. The register is asked the same day. The applicant '
         'hears one neutral sentence. A register that cannot answer within twenty working '
         'days sends the case to the consul, who decides rather than leaving an applicant '
         'to wait. The tool stays, and so does the widow’s letter of complaint, in the file.',
 outcome_q=[('How many lines are on the wall?', 'four'),
            ('When is the register asked?', 'the same day'),
            ('What does the applicant hear?', 'that the document is being verified with the issuing office'),
            ('What happens after twenty working days?', 'the case goes to the consul'),
            ('What else is kept in the file?', 'the widow’s letter of complaint')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Check these documents',
 task=['A new officer was asked to take over the document checks for the section.',
       'This is the instruction as it was given, and what the first month produced.'],
 draft=['Check these documents.',
        'Use the system on anything doubtful.',
        'Reject anything that fails.',
        'Tell the applicants the position.',
        'Keep the suspicious ones.',
        'Let me know if anything serious comes up.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says what fails means, or what an applicant is told.',
 asked=['Documents checked', 'Rejections where they fail', 'Applicants told the position'],
 back=['31 flags', '14 rejections, 13 of them wrong', '6 applicants told their papers were false'],
 gap='Nobody said that a flag is not a failure, or what may be said to the person holding the document.',
 back_cap='Fourteen rejections, thirteen of them wrong, and six people told they had produced false papers.',
 back_note='Reject anything that fails treats the tool’s output as a result. The tool does '
           'not produce results; it produces differences from the examples it holds.',
 diagnosis=[('“these documents”', 'unscoped set'),
            ('“anything doubtful”', 'unscoped set'),
            ('“anything that fails”', 'unstated criterion'),
            ('“anything serious”', 'unstated criterion'),
            ('“tell the applicants the position”', 'missing condition'),
            ('“keep the suspicious ones”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that no flag can become a refusal by itself.',
 scaffold=['why documents are checked at all',
           'which documents are checked, and which are not',
           'what the tool is used for, and what it is not',
           'what must happen after a flag, and within what time',
           'what is said to the applicant, and what is recorded',
           'what happens when the issuing office does not reply'],
 bank=['Purpose: so that genuine documents are accepted within 3 working days and false ones are identified',
       'Scope: originals presented at the counter between … and … ; copies are not checked',
       'Inputs: the checking tool as an indicator only; the issuing register as the authority',
       'Criteria: every flag produces a verification request within … hours; no refusal rests on a flag',
       'Done: the applicant is told …, and both the flag and the reply are recorded',
       'Fallback: no reply within … working days: refer to the consul, do not refuse'],
 check=['Does it say the tool is an indicator only?',
        'Is there a time limit for the verification request?',
        'Is the sentence to the applicant written out?',
        'Does it forbid refusal on a flag alone?'],
 model=['so that genuine documents are accepted within 3 working days and false ones are identified',
        'originals presented at the counter; photocopies and postal cases are excluded',
        'the checking tool as an indicator only; the issuing register as the authority',
        'every flag produces a verification request within 24 hours; no refusal rests on a flag alone',
        'the applicant is told the document is being verified with the issuing office; both are recorded',
        'no reply within 20 working days: the case is referred to the consul, not refused'],
 cost='14 rejections produced 13 wrong refusals, 6 accusations and 1 complaint that is still '
      'in the file. The 1 genuine refusal was confirmed by the register in 9 days.'),

feet=dict(
 title='On Your Feet · Telling a woman her certificate cannot be used today',
 setting=[
  'A woman in her sixties has travelled two hours to the counter with her husband’s death '
  'certificate. The checking tool has flagged it. The register will take days to reply. She '
  'needs the certification for a pension and she has already waited four months.',
  'You must tell her that today is not the day, without accusing her of anything, without '
  'pretending there is no problem, and without making her travel again for nothing. You '
  'have about ninety seconds, and she is tired.'],
 ladder=[('Why not today?', 'explain without accusing'),
         ('Are you saying it is false?', 'the question you must answer directly'),
         ('Four months', 'the turn where the system itself is the problem')],
 cap='Three turns, and the second one is the one she will repeat to her family.',
 turns=[('Turn 1 · Applicant', 'I have come two hours. Why can you not certify it today?'),
        ('Turn 2 · Applicant', 'Are you telling me my husband’s death certificate is false?'),
        ('Turn 3 · Applicant', 'I have been waiting four months already. What am I supposed to do?')],
 holds=['Your document is being verified with the office that issued it.',
        'That is a step we take, not a judgement about you or about it.',
        'No. I am not saying it is false, and nobody here has said that.',
        'Older certificates from some districts differ from the current standard, and that is common.',
        'You do not need to travel again. We will write to you, and I will telephone as well.',
        'I will ask the register today and I will call you on Friday either way.'],
 redline='You must not say that the document was flagged by a system, you must not say that '
         'it looks false, and you must not ask her to obtain a replacement before the '
         'register has answered. Do not let her leave without a date and a way to reach you.',
 score=['Gave the neutral sentence first, before any explanation.',
        'Answered the accusation question with a direct no.',
        'Named the ordinary reason — older documents differ — without technical detail.',
        'Removed the need for another journey.',
        'Gave a date, a method and a promise to call either way.'],
 a=[('What is the first sentence?', 'that the document is being verified with the issuing office'),
    ('How do you answer the second question?', 'with a direct no'),
    ('What ordinary reason may you give?', 'older documents from some districts differ from the standard'),
    ('What must you not mention?', 'that a system flagged it'),
    ('What must you not ask her to do?', 'obtain a replacement before the register answers'),
    ('What does she leave with?', 'a date, a method and a promise to call either way')]),

rev_fig=figs.split('A FLAGGED DOCUMENT',
                   'What must never be said',
                   ['The system says it is false.',
                    'Your certificate failed the check.',
                    'You will need a new one.',
                    'We cannot accept this.'],
                   'What is said instead',
                   ['Your document is being verified with the issuing office.',
                    'That is a step, not a judgement.',
                    'You do not need to travel again.',
                    'I will telephone you on Friday either way.']),
rev_fig_cap='Every sentence on the right is true, neutral and repeatable to a family.',
rev=dict(
 read=[('How many forgeries did the tool find?', ['two', 'thirty-one', 'none', 'fourteen'], 0),
       ('How many genuine documents were flagged?', ['thirty-one', 'two', 'nine', 'four'], 0),
       ('Who can say whether a document is genuine?',
        ['the issuing register', 'the tool', 'the officer', 'the applicant'], 0),
       ('When is the register asked?',
        ['the same day', 'within a month', 'after a refusal', 'never'], 0)],
 listen_text='A flag is an indicator that a document differs from the examples held. It is '
             'not a finding. Verification is requested from the issuing office on the same '
             'day, and the applicant is told that the document is being verified.',
 listen=[('A flag is an ____________.', 'indicator'),
         ('It is not a ____________.', 'finding'),
         ('Verification is requested on the same ____________.', 'day'),
         ('The applicant is told the document is being ____________.', 'verified')],
 speak=['Describe a document procedure in eight passive sentences.',
        'Your partner then tells an applicant, in three sentences, that a check is being made.'],
 write='Write a six-line procedure for checking a document.',
 vocab=[('A copy confirmed to match the original is a certified true ____________.', 'copy'),
        ('A sign that a document has been altered is a ____________ mark.', 'tamper'),
        ('The official record of births and deaths is a civil ____________.', 'register'),
        ('An official statement confirming something is true is an ____________.', 'attestation')],
 gram=[('The documents ____________ examined at the counter.', 'are'),
       ('A receipt ____________ given for anything retained.', 'is'),
       ('The certificate ____________ flagged in March.', 'was'),
       ('Two forgeries have ____________ found.', 'been')]),

found=['Write the one neutral sentence your section says when a document is being verified.',
       'Count how many of your flags last year turned out to be genuine documents.',
       'Learn three regional or historical variations in the documents you see most.',
       'Rewrite one of your procedures entirely in the passive and see whether it is clearer.'],
end_line='A flag says look harder. Only the register says genuine, and the applicant hears neither.',
end_next='Next: A Visa Enquiry That Is Not Simple')
