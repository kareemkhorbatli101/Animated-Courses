# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='Accreditation and the Host Ministry',
gram='can, could and may for requests and permission',
ai='forms and fields: what a system may fill in for you',
strap='CEFR A2 · Grammar: can, could and may for requests and permission · '
      'AI: forms and fields: what a system may fill in for you',
cando=['make a polite request with could and may',
       'say what I am and am not permitted to do at a post',
       'name the main documents in an accreditation file',
       'decide which fields on a form a system may fill in',
       'write a short note asking the protocol department for something'],

hero=('ONE FILE, NINE DOCUMENTS, AND A CLERK WHO HAS SEEN IT ALL',
      ['May I ask what is missing? asks Nour, at the protocol counter.',
       'Three things, says the clerk, and two of them are the same thing.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='The protocol department of the host ministry, a Tuesday, ten past nine.',

warm=['What documents did you need the last time you moved to a new country?',
      'Which is more polite in your language: can I, could I, or may I?',
      'Who decides what an official visitor is allowed to do in your country?'],

read=[
 'Accreditation is the act by which a host state accepts an officer. Until it is complete, '
 'an officer is in the country but not yet recognised in a diplomatic capacity. Nour arrives '
 'on a Sunday. Her accreditation takes seven weeks.',
 'The file has nine documents. There is a note verbale from the Mission. There is a form '
 'with twenty-two fields. There are two photographs, a copy of her passport, a copy of her '
 'appointment letter, and a certified translation of the last of these.',
 'At the counter the clerk is patient and exact. Three items are wrong. The photograph is '
 'the wrong size. The form has a field left empty. The certified copy is certified by the '
 'wrong office, and nobody at the Mission knew there were two offices.',
 'May I correct them here? Nour asks. The clerk says she may correct one of them at the '
 'counter and must return with the other two. Could I come tomorrow? Tomorrow is possible, '
 'the clerk says, but the file will then be looked at in the following week.',
 'That evening Nour asks a system to help with the twenty-two fields. It fills nineteen of '
 'them from the documents she gives it. It also fills two fields with reasonable, confident '
 'and wrong answers, and it does not mark them as different from the other nineteen.'],

dp1=('Where accreditation files fail', 'Protocol departments commonly report that most '
     'returned accreditation files fail on photograph format, an unsigned field or a '
     'certification issued by the wrong authority, rather than on anything substantive.',
     'Source: reported protocol practice, 2025–2026.'),

c_a=[('What is accreditation?', 'the act by which a host state accepts an officer'),
     ('How long did Nour’s accreditation take?', 'seven weeks'),
     ('How many documents are in the file?', 'nine'),
     ('How many fields does the form have?', 'twenty-two'),
     ('What three things were wrong?', 'the photograph, an empty field and the certification'),
     ('How many fields did the system fill wrongly?', 'two')],

c_b=[('An officer is recognised in a diplomatic capacity on arrival.', 'F'),
     ('The file contains two photographs.', 'T'),
     ('Nour may correct all three items at the counter.', 'F'),
     ('There are two certifying offices.', 'T'),
     ('The system filled nineteen fields from her documents.', 'T'),
     ('The system marked its two guesses clearly.', 'F')],

c_c=[('____________ I correct them here? asks Nour.', 'May'),
     ('She ____________ correct one of them at the counter.', 'may'),
     ('____________ I come tomorrow?', 'Could'),
     ('The file ____________ then be looked at next week.', 'will'),
     ('A certified ____________ was issued by the wrong office.', 'copy'),
     ('Accreditation ____________ seven weeks.', 'took')],

c_d=[('May I is ( more / less ) formal than can I.', ['more', 'less'], 0),
     ('Nour may correct ( one / all three ) items at the counter.', ['one', 'all three'], 0),
     ('Coming tomorrow moves the file to ( the following week / the same day ).',
      ['the following week', 'the same day'], 0),
     ('The system’s two wrong fields looked ( the same as the others / obviously different ).',
      ['the same as the others', 'obviously different'], 0),
     ('Most files fail on ( format and certification / policy ).',
      ['format and certification', 'policy'], 0)],

c_e=('Permission or request? Put each sentence in the right column.',
     [('May I leave the file with you?', 'request for permission'),
      ('Could you check the photograph?', 'request for help'),
      ('You may not drive on these plates yet.', 'statement of permission'),
      ('Can I take a copy?', 'request for permission'),
      ('Would you be able to date-stamp it?', 'request for help'),
      ('Officers may collect cards after ten.', 'statement of permission')],
     ['request for permission', 'request for help', 'statement of permission']),

v_fig_title='THE ACCREDITATION FILE',
v_fig=[('doc', 'a note verbale'), ('key', 'a residence permit'), ('people', 'a protocol department'),
       ('clock', 'a processing time'), ('chart', 'a reference number'), ('flag', 'a diplomatic capacity')],
v_fig_cap='Six words that stand between an officer and a working life.',

vocab=[
 ('accreditation', 'the act by which a host state accepts an officer of another state'),
 ('a note verbale', 'an unsigned formal letter between a mission and a ministry, in the third person'),
 ('a protocol department', 'the part of a host ministry that handles missions and their officers'),
 ('a diplomatic capacity', 'the recognised status in which an officer acts'),
 ('a residence permit', 'the document allowing a person to live in the host country'),
 ('a certified copy', 'a copy formally confirmed as true by an authorised office'),
 ('a supporting document', 'a document attached to prove something in an application'),
 ('a field', 'one box or line on a form, asking for one thing'),
 ('a processing time', 'the period an office needs to deal with an application'),
 ('a reference number', 'the number by which an office finds a file again'),
 ('an acknowledgement', 'a short reply confirming that something has been received'),
 ('a fee waiver', 'a decision that a payment is not required in this case'),
 ('a vehicle registration', 'the official record of a car and the plates issued for it'),
 ('a tax exemption', 'a formal release from paying a particular tax'),
 ('a customs franchise', 'the right to import certain goods without duty'),
 ('a work permit', 'the document allowing a person to take employment'),
 ('an appointment letter', 'the letter from a service appointing an officer to a post'),
 ('an authorised office', 'the office formally allowed to issue or certify something'),
 ('a submission', 'the act of giving an application to an office, and the file given'),
 ('an entitlement card', 'the card that shows what an officer is allowed to receive')],

v_a=[('The act by which a host state accepts an officer is ____________.', 'accreditation'),
     ('An unsigned formal letter in the third person is a ____________.', 'note verbale'),
     ('A copy confirmed as true is a ____________ copy.', 'certified'),
     ('One box on a form is a ____________.', 'field'),
     ('The period an office needs is the ____________ time.', 'processing'),
     ('A short reply confirming receipt is an ____________.', 'acknowledgement'),
     ('A decision that no payment is required is a fee ____________.', 'waiver'),
     ('The document allowing a person to live here is a ____________ permit.', 'residence')],

v_b=[('A protocol department is the part of a host ministry', 'that handles missions and their officers.'),
     ('A supporting document is a document attached', 'to prove something in an application.'),
     ('A customs franchise is the right to import certain goods', 'without duty.'),
     ('An authorised office is the office formally allowed', 'to issue or certify something.'),
     ('An entitlement card shows what an officer', 'is allowed to receive.')],

g_title='Grammar: can, could and may for requests and permission',
g_rule=['Can I …? is normal and direct. Use it with colleagues.',
        'Could I …? is more polite. Use it with an official you do not know.',
        'May I …? is the most formal. Use it at a counter and in writing.',
        'For permission given: you may, you are permitted to. For refusal: you may not.'],
g_fig=('TOO DIRECT FOR A COUNTER',
       ['Give me the form.',
        'I want to correct this now.',
        'I need the file today.',
        'Tell me the processing time.'],
       'RIGHT FOR A COUNTER',
       ['May I have the form, please?',
        'Could I correct this now?',
        'May I ask whether the file can be seen today?',
        'Could you tell me the processing time?'],
       'four sentences that make a clerk slower',
       'the same four, which make a clerk faster'),
g_fig_cap='Could and may cost one second and buy a great deal of goodwill.',

g_a=[('____________ I have the form, please? (may)', 'May'),
     ('____________ you tell me the processing time? (could)', 'Could'),
     ('Officers ____________ collect their cards after ten. (may)', 'may'),
     ('You ____________ not drive on those plates yet. (may)', 'may'),
     ('____________ I leave the file with you? (can)', 'Can'),
     ('____________ we submit the two copies tomorrow? (could)', 'Could'),
     ('Visitors ____________ not enter without a pass. (may)', 'may'),
     ('____________ you check the photograph size? (could)', 'Could'),
     ('I ____________ correct one field here. (may)', 'may')],

g_b=[('( I want to / May I ) see the file, please?', ['I want to', 'May I'], 1),
     ('( Could you / Tell me ) confirm the reference number?', ['Could you', 'Tell me'], 0),
     ('You ( may not / can not never ) drive on these plates.', ['may not', 'can not never'], 0),
     ('( Can I / May I ) borrow your pen? — to a colleague.', ['Can I', 'May I'], 0),
     ('Officers ( may / could ) collect cards after ten.', ['may', 'could'], 0),
     ('( Could I / I will ) come back tomorrow morning?', ['Could I', 'I will'], 0)],

d1=dict(
 title='May I correct it here?',
 fig=(['Three things are wrong.', 'May I correct them here?'],
      ['One of them, yes.', 'The other two need an office.']),
 cap='Nour and the protocol clerk, at the counter, Tuesday morning.',
 lines=[('Clerk', 'Three items are wrong. The photograph, a field and the certification.'),
        ('Nour', 'May I correct them here?'),
        ('Clerk', 'You may correct the field here. I can lend you a pen.'),
        ('Nour', 'And the photograph?'),
        ('Clerk', 'The photograph must be 35 by 45 millimetres. Yours is 40 by 50.'),
        ('Nour', 'Could you tell me where I can have one taken?'),
        ('Clerk', 'There is a shop on the corner. They know the size.'),
        ('Nour', 'And the certification?'),
        ('Clerk', 'Certified by the wrong office. It must be the central office, not the district one.'),
        ('Nour', 'Could I bring both tomorrow?'),
        ('Clerk', 'You may. Then the file is looked at next week, not this week.'),
        ('Nour', 'Then I will bring them this afternoon.')],
 a=[('How many items are wrong?', 'three'),
    ('Which one may she correct at the counter?', 'the empty field'),
    ('What size must the photograph be?', '35 by 45 millimetres'),
    ('Which office must certify the copy?', 'the central office'),
    ('What happens if she comes tomorrow?', 'the file waits until next week')],
 b=[('____________ I correct them here?', 'May'),
    ('I can ____________ you a pen.', 'lend'),
    ('____________ you tell me where to have one taken?', 'Could'),
    ('Then the file is looked at ____________ week.', 'next')]),

d2=dict(
 title='Nineteen right, two wrong, and no difference between them',
 fig=(['It filled nineteen fields.', 'And the other three?'],
      ['One empty, two invented.', 'Which two? That is the whole problem.']),
 cap='Nour and Firas Obeid, over the twenty-two-field form, in the evening.',
 lines=[('Nour', 'It filled nineteen of the twenty-two fields in four seconds.'),
        ('Firas', 'From what?'),
        ('Nour', 'From my passport, my appointment letter and the Mission’s note.'),
        ('Firas', 'Good. Those are facts you gave it. And the other three?'),
        ('Nour', 'One it left empty. Two it filled from nowhere.'),
        ('Firas', 'Filled with what?'),
        ('Nour', 'A purpose of stay and a category of permit. Both plausible. Both wrong.'),
        ('Firas', 'Did it mark them differently from the nineteen?'),
        ('Nour', 'No. They look exactly like the fields it took from documents.'),
        ('Firas', 'That is the danger. Not the guessing. The fact that guessing looks like knowing.'),
        ('Nour', 'So I check all twenty-two every time?')],
 unresolved=True,
 a=[('How many fields did it fill?', 'nineteen'),
    ('Where did those nineteen come from?', 'her passport, appointment letter and the note'),
    ('How many did it leave empty?', 'one'),
    ('Which two were invented?', 'the purpose of stay and the permit category'),
    ('What is the real danger?', 'guessing looks exactly like knowing')],
 b=[('It filled ____________ of the twenty-two fields.', 'nineteen'),
    ('Both plausible. Both ____________.', 'wrong'),
    ('Did it ____________ them differently?', 'mark'),
    ('Guessing looks like ____________.', 'knowing')]),

speak=[('Three levels of politeness',
        ['Say the same request three ways: can I, could I, may I.',
         'Your partner says which one belongs at a counter.',
         'Do it for five different requests.']),
       ('What am I permitted to do?',
        ['List five things an officer at a post may do.',
         'List three things an officer may not do.',
         'Your partner asks who decides each one.']),
       ('At the counter',
        ['Student A is a clerk and refuses one item politely.',
         'Student B asks two questions and leaves with a next step.',
         'Change roles. The clerk refuses a different item.'])],

ext_title='A form is a set of questions somebody else wrote, and every field is a decision',
ext_fig=figs.datatable('TWENTY-TWO FIELDS, THREE KINDS',
                       ['Kind of field', 'How many', 'Who may fill it'],
                       [['copied from a document', '14', 'a system, then checked'],
                        ['a fixed fact about the post', '5', 'a system, then checked'],
                        ['a legal category', '2', 'only a person'],
                        ['a signature', '1', 'only the officer'],
                        ['left blank by design', '0', 'nobody'],
                        ['total', '22', '—']]),
ext_fig_cap='Nineteen fields can be drafted in seconds. Three decide what the file is.',
ext=[
 'An application form looks like typing. It is not. A form is a list of questions written by '
 'an office that will use the answers to put your file into one category rather than '
 'another, and the categories carry different rights.',
 'Most fields are simply copying. A passport number, a date of birth, an address, a post, a '
 'rank: these exist already in documents. Copying them is slow, boring work, and it is '
 'exactly the kind of work a system does quickly and accurately.',
 'A few fields are not copying at all. Purpose of stay, category of permit, and the '
 'description of a dependant are legal questions. The answer decides which rules apply. '
 'Getting one of them wrong does not produce a small error; it produces the wrong file.',
 'This is the useful division. A system may fill any field whose answer is already written '
 'in a document you have given it. A system may not choose a category, because the right '
 'category depends on law and on practice at this ministry this year.',
 'So ask for the nineteen and refuse the three. Give the documents, ask the system to fill '
 'only from them, and ask it to list every field it could not fill from a document. That '
 'list is short, and it is the part of the form that actually needs you.'],

dp2=('Why category fields are kept human', 'Services that allow drafting assistance on '
     'administrative forms commonly restrict it to fields copied from source documents, '
     'and require an officer to complete category and status fields personally.',
     'Source: reported practice in diplomatic administration, 2025–2026.'),

e_a=[('What does a form actually do?', 'it puts a file into a category'),
     ('What kind of field is a passport number?', 'copying from a document'),
     ('Which fields are legal questions?', 'purpose of stay, permit category, dependants'),
     ('What may a system fill?', 'any field already written in a document given to it'),
     ('What should you ask the system to list?', 'every field it could not fill from a document')],
e_b=[('A form is mostly typing.', 'F'),
     ('Categories carry different rights.', 'T'),
     ('Copying is work a system does well.', 'T'),
     ('A wrong category produces a small error.', 'F'),
     ('A system should choose the permit category.', 'F'),
     ('The list of unfilled fields is usually short.', 'T')],

w_model='Purpose: ask the protocol department to accept two corrected documents today. '
        'Scope: my own file, reference 4471; no other officer’s file. Inputs: the returned '
        'file of 14 October and the central office certification of 15 October. Criteria: 4 '
        'lines naming the reference, the two corrected items, the date of return and the '
        'request. Done: 4 lines, delivered by hand by 15:00 today. Fallback: if the file has '
        'already moved to the next stage, ask for the new reference and the expected date.',
w_fig=figs.spec_card('A NOTE THAT ASKS FOR ONE THING',
                     [('Purpose', 'ask protocol to accept two corrected documents today'),
                      ('Scope', 'file 4471 only'),
                      ('Inputs', 'the returned file and the new certification'),
                      ('Criteria', '4 lines: reference, items, date, request'),
                      ('Done', 'delivered by hand by 15:00 today'),
                      ('Fallback', 'already moved: ask for the new reference and date')]),
w_fig_cap='A request with a reference number is answered. One without it is filed.',
w_task='Write a four-line note to a protocol department asking for one thing.',
w_steps=['Line 1: the file and its reference number.',
         'Line 2: what was returned, and on what date.',
         'Line 3: what you now attach, and who issued it.',
         'Line 4: the request, with could or may, and a time.',
         'Use one polite modal in line 4 and nowhere else.'],
w_bank=['With reference to file …, returned on …',
        'The Mission now attaches …, issued by …',
        'Could the corrected file be accepted today?',
        'May I ask for an acknowledgement with the new reference?',
        'The Mission is grateful for the assistance of the Department.'],
w_check=['Is the reference number in line 1?',
         'Are both dates given?',
         'Is the issuing office named?',
         'Is there exactly one polite modal in the note?'],

t_title='Forms and fields: what a system may fill in for you',
t_fig=figs.split('TWENTY-TWO FIELDS',
                 'A system may fill these',
                 ['passport number, from the passport',
                  'date of appointment, from the letter',
                  'the Mission’s address, from the note',
                  'rank, from the accreditation request'],
                 'Only a person may fill these',
                 ['purpose of stay',
                  'category of permit',
                  'the status of a dependant',
                  'anything that needs a signature']),
t_fig_cap='The test is simple: is the answer already written in a document I supplied?',
t_body=[
 'Give the system the documents, not the task. Attach the passport, the appointment letter '
 'and the Mission’s note, and ask it to fill only those fields whose answers appear in '
 'them. This is fast, accurate and genuinely saves an hour on a twenty-two-field form.',
 'Then ask for the opposite list. Ask it to name every field it could not fill from a '
 'document, and to say for each one which document would have contained the answer. The '
 'list that comes back is the part of the form that needs an officer.',
 'The rule to keep is this. A system may copy. A system may not categorise. Purpose of '
 'stay, permit class and status are legal choices with different consequences, and a '
 'plausible answer in one of those fields is more dangerous than an empty one.'],
t_say=[('Supply the sources: ', 'Fill only from the three documents attached.'),
       ('Ask for the gaps: ', 'List every field you could not fill from a document.'),
       ('Hold the line: ', 'Do not choose a category; leave category fields empty.')],
t_bound='A form-filling system does not know the categories this ministry is using this '
        'year, and it does not distinguish between a field it copied and a field it '
        'guessed. Both arrive looking equally finished.',
t_a=[('Fill only from the documents ____________.', 'attached'),
     ('List every field you could not fill from a ____________.', 'document'),
     ('Do not choose a ____________.', 'category'),
     ('A system may ____________.', 'copy'),
     ('A plausible answer is more dangerous than an ____________ one.', 'empty'),
     ('Both arrive looking equally ____________.', 'finished')],
t_b_rubric='Say whether a system may fill each field, and why.',
t_b=[('Passport number.', 'yes: it is written in a document supplied'),
     ('Purpose of stay.', 'no: it is a legal category with different consequences'),
     ('The Mission’s telephone number.', 'yes: it is a fixed fact in the note verbale'),
     ('Status of a dependant.', 'no: status is a legal choice and needs an officer')],

case=dict(
 title='The Decision Room · The field that chose the wrong permit',
 brief=[
  'A new administrative officer arrives with a spouse. The accreditation form has a field '
  'called purpose of stay. A system fills it with the phrase accompanying family member, '
  'which is reasonable, common and used in many countries.',
  'In this host state that phrase places the spouse in a category which does not permit '
  'employment. The correct phrase for a spouse who may seek work is different, and it is '
  'known to the protocol department and to nobody else.',
  'The form is submitted on 2 October. The permit arrives on 21 November. The spouse has a '
  'job offer that begins on 1 December. Changing a category after issue takes, the clerk '
  'says, between four and six months.'],
 exhibit=figs.datatable('ONE FIELD, TWO OUTCOMES',
                        ['Field', 'What was written', 'Category', 'Right to work'],
                        [['purpose of stay', 'accompanying family member', 'C2', 'none'],
                         ['purpose of stay', 'accompanying spouse, bilateral arrangement', 'C1', 'permitted'],
                         ['relationship', 'spouse', 'both', '—'],
                         ['supporting document', 'marriage certificate', 'both', '—'],
                         ['submitted', '2 October', '—', '—'],
                         ['issued', '21 November', 'C2', 'none']]),
 exhibit_cap='The two rows differ by four words, and the four words are the whole decision.',
 exhibit_note='Everything else in the file was correct. One phrase, written confidently by '
              'something that had never seen this ministry’s categories, decided the rest.',
 voices=[('Firas Obeid', 'administration',
          'It filled the field exactly as nineteen other fields were filled. It looked the same.'),
         ('Tarek Sabbagh', 'protocol and liaison',
          'The phrase it used is correct in four countries I know. Not in this one.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'We blamed the sentence. The failure was that nobody was required to read it.')],
 steps=[('Find it', 'Which field decided the outcome?'),
        ('Compare it', 'What is the difference between the two phrases?'),
        ('Infer it', 'Why did nobody at the Mission notice before submission?'),
        ('Weigh it', 'A job offer in December against four to six months of correction.'),
        ('Decide', 'Which fields must a person complete, from now on?')],
 analysis=[('Find it. Which field decided the category?', 'purpose of stay'),
           ('Compare it. How many words separate the two phrases?', 'four'),
           ('Infer it. What right did category C2 withhold?', 'the right to work'),
           ('Weigh it. Why did the error pass unseen?', 'it looked like the nineteen copied fields'),
           ('Decide. How long does a change after issue take?', 'four to six months')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say which fields an officer must complete personally.',
                 'Say what the Mission does before any form is submitted.',
                 'Say where the approved phrases for this host state are kept.',
                 'Say what happens when a required phrase is not known.'],
 bank=['Category, status and purpose fields are completed by an officer, never drafted.',
       'Every form is read against the field list before submission.',
       'The approved phrases for this host state are kept in the registry.',
       'Where a phrase is not known, protocol is asked in writing before submission.'],
 outcome='Dr Kanaan makes three fields officer-only: purpose of stay, category and status. '
         'Everything else may be drafted from documents and is then checked. The approved '
         'phrases live in the registry and Tarek adds to them whenever the department uses '
         'a new one. The spouse’s category is corrected in nineteen weeks, and the job '
         'offer does not wait.',
 outcome_q=[('How many fields became officer-only?', 'three'),
            ('What may still be drafted?', 'fields copied from documents'),
            ('Where do the approved phrases live?', 'in the registry'),
            ('Who adds new phrases?', 'Tarek'),
            ('How long did the correction take?', 'nineteen weeks')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Fill in the forms for the new arrivals',
 task=['Three officers were arriving in the same month and all needed accreditation.',
       'This is the instruction Firas was given, and what he received on Friday.'],
 draft=['Fill in the forms for the new arrivals.',
        'Use the documents in the folder.',
        'Do the standard fields.',
        'Leave anything difficult.',
        'Make them ready to go.',
        'I would like them this week.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says which arrivals, which fields, or which day.',
 asked=['Forms for the new arrivals', 'The standard fields', 'Ready to go'],
 back=['7 forms, including 4 for last year', 'Every field filled, 6 invented', 'Nothing signed'],
 gap='Nobody said which three officers, which fields are standard, or what ready means.',
 back_cap='Seven forms came back because nobody said three.',
 back_note='The folder held every arrival since January, and nothing in the instruction '
           'said that only officers arriving in October were wanted.',
 diagnosis=[('“the new arrivals”', 'unscoped set'),
            ('“the documents in the folder”', 'unscoped set'),
            ('“the standard fields”', 'unstated criterion'),
            ('“anything difficult”', 'unstated criterion'),
            ('“ready to go”', 'unbounded quantity'),
            ('“this week”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that only one set of forms can come back.',
 scaffold=['why the forms are needed',
           'which officers, by name and arrival date',
           'which documents each field may be drawn from',
           'which fields are filled and which are left for an officer',
           'what finished means, and the day and hour',
           'what to do when a field cannot be filled from a document'],
 bank=['Purpose: so that … can be accredited before …',
       'Scope: the … officers arriving between … and …; earlier arrivals excluded',
       'Inputs: each officer’s passport, appointment letter and the Mission’s note',
       'Criteria: fields … to … filled from documents; category fields left empty',
       'Done: … forms, unsigned, on my desk by … on …',
       'Fallback: a field with no source document is listed, not guessed'],
 check=['Is there a number of officers?',
        'Are the arrival dates given?',
        'Does it say which fields are left empty?',
        'Is there a day and an hour?'],
 model=['so that the 3 October arrivals can be accredited before 15 November',
        'the 3 officers arriving between 1 and 31 October; earlier arrivals excluded',
        'each officer’s passport, appointment letter and the Mission’s note verbale',
        'the 19 document fields filled; purpose, category and status left empty',
        '3 forms, unsigned, on my desk by 16:00 on Thursday',
        'a field with no source document is listed on a separate sheet, not guessed'],
 cost='7 forms were produced and 3 were used. 6 invented answers had to be found and '
      'removed, which took 2 hours longer than filling the forms by hand.'),

feet=dict(
 title='On Your Feet · The counter says come back next month',
 setting=[
  'You are at the protocol department counter at 11:40. The clerk tells you that your '
  'Mission’s submission is incomplete and that the next submission window is in four weeks. '
  'The officer whose file it is starts work on Monday and cannot drive, bank or sign a lease '
  'until the file is accepted.',
  'The clerk is correct, polite and not responsible for the rule. There are people behind '
  'you. You want an answer today, or a named person and a date. You have about ninety '
  'seconds, and the counter closes at twelve.'],
 ladder=[('Incomplete', 'ask exactly what is missing, item by item'),
         ('Next window', 'find out whether a window has an exception'),
         ('Not my decision', 'the turn where you need a name, not an answer')],
 cap='Three turns. By the third you are no longer asking this clerk to decide.',
 turns=[('Turn 1 · Clerk', 'I am sorry. The submission is incomplete, so I cannot register it.'),
        ('Turn 2 · Clerk', 'The next submission window opens in four weeks. That is the rule.'),
        ('Turn 3 · Clerk', 'I understand your difficulty, but it is not my decision to make.')],
 holds=['May I ask you to list exactly what is missing, so I bring all of it at once?',
        'Could you write the item numbers down for me?',
        'I understand the window. May I ask whether there is a procedure for urgent cases?',
        'I am not asking you to decide. I am asking who decides.',
        'Could you give me the name of the section, and the best time to call?',
        'May I leave the file with you so that the date of receipt is today?'],
 redline='You must not suggest that the rule does not apply to your Mission, you must not '
         'ask the clerk to make an exception personally, and you must not say that the '
         'Ambassador will telephone the Director, because that is a threat and it will be '
         'remembered for the rest of your tour.',
 score=['Asked for a complete list of defects rather than arguing about one.',
        'Separated the rule from the person applying it.',
        'Asked for a name and a time instead of a different answer.',
        'Protected the date of receipt where that was possible.',
        'Left the clerk able to help you next time.'],
 a=[('What should the first question ask for?', 'an exact list of what is missing'),
    ('What do you ask to have written down?', 'the item numbers'),
    ('What do you ask about the window?', 'whether there is a procedure for urgent cases'),
    ('What do you want from the third turn?', 'a name, not a decision'),
    ('What must you never threaten?', 'a telephone call from the Ambassador'),
    ('Why ask to leave the file?', 'so that the date of receipt is today')]),

rev_fig=figs.split('AT A COUNTER',
                   'Makes the clerk slower',
                   ['I need this today.', 'This is urgent for us.',
                    'Can you make an exception?', 'Your rule is unusual.'],
                   'Makes the clerk faster',
                   ['May I have the full list of what is missing?',
                    'Could you write the item numbers down?',
                    'Who decides urgent cases, and when may I call?',
                    'May I leave the file so the date of receipt is today?']),
rev_fig_cap='Every sentence on the right asks for something the clerk is able to give.',
rev=dict(
 read=[('How long did accreditation take?', ['seven weeks', 'four weeks', 'two weeks', 'a year'], 0),
       ('How many fields may a system fill from documents?',
        ['nineteen', 'twenty-two', 'three', 'none'], 0),
       ('Which field decided the permit category?',
        ['purpose of stay', 'passport number', 'rank', 'address'], 0),
       ('How long does a change after issue take?',
        ['four to six months', 'four days', 'one week', 'a year'], 0)],
 listen_text='A system may fill any field whose answer is written in a document you gave '
             'it. It may not choose a category. Purpose of stay, permit class and status '
             'are legal choices, and a plausible answer there is worse than an empty one.',
 listen=[('A system may fill any field written in a ____________.', 'document'),
         ('It may not choose a ____________.', 'category'),
         ('Purpose of stay is a ____________ choice.', 'legal'),
         ('A plausible answer is worse than an ____________ one.', 'empty')],
 speak=['Ask your partner for five things using could and may, at a counter.',
        'Your partner refuses two of them politely and offers an alternative.'],
 write='Write a four-line note to a protocol department asking for one thing.',
 vocab=[('An unsigned formal letter in the third person is a ____________.', 'note verbale'),
        ('A copy confirmed as true is a ____________ copy.', 'certified'),
        ('One box on a form is a ____________.', 'field'),
        ('The number by which an office finds a file is a ____________ number.', 'reference')],
 gram=[('____________ I have the form, please?', 'May'),
       ('____________ you tell me the processing time?', 'Could'),
       ('Officers ____________ collect cards after ten.', 'may'),
       ('You ____________ not drive on those plates yet.', 'may')]),

found=['Write the list of fields on your own forms that only a person may complete.',
       'Collect the approved phrases your host ministry uses, and keep them in one file.',
       'Practise five counter requests with could and may until they sound ordinary.',
       'Ask a system to list what it could not answer, and keep that habit for a month.'],
end_line='A system may copy. It may not categorise. The difference is the whole file.',
end_next='Next: A Flat, a Bank and a Signature')
