# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='A Visa Enquiry That Is Not Simple',
gram='obligation and prohibition: must, have to, may not',
ai='live translation at a counter, and where it breaks',
strap='CEFR B1 · Grammar: obligation and prohibition: must, have to, may not · '
      'AI: live translation at a counter, and where it breaks',
cando=['explain what an applicant must, has to and may not do',
       'use must, have to and may not accurately',
       'conduct a counter conversation across a language barrier',
       'say when live translation must stop and an interpreter must be found',
       'write a six-line record of a counter conversation'],

hero=('ONE WORD IN THE MIDDLE OF A SENTENCE, AND A FILE THAT NEVER RECOVERED',
      ['He said he had been refused once, in 2019, by another country.',
       'The record said he had been refused entry, which he never said.'],
      [(720, 'teal', 'long'), (720, 'orange', 'short'), (720, 'grey', 'short')]),
hero_cap='A counter at half past eleven, with a telephone between two people who share no language.',

warm=['What do you do when somebody at a counter cannot explain their problem?',
      'Has a translation ever changed what you meant to say?',
      'What must an applicant always be allowed to check?'],

read=[
 'Not every visa enquiry is simple. Most are: the applicant has to complete a form, pay a '
 'fee and bring four documents. A few are not simple at all, and those few take most of the '
 'section’s time and produce almost all of its complaints.',
 'The hardest ones usually involve three things at once: a previous refusal somewhere, a '
 'family situation that does not fit the categories, and a language the officer does not '
 'speak. Any two of those are manageable. All three together are dangerous.',
 'Since February the counter has used live translation for short exchanges. An officer '
 'speaks, the device renders it, the applicant replies, the device renders that. For '
 'routine business it works well and it has shortened the queue.',
 'It works because routine business uses a small, repeated vocabulary. Opening hours, fees, '
 'which form, which window, come back on Thursday. These sentences are short and the '
 'consequences of a small error are small.',
 'In April a man explained that he had once been refused a visa by another country, in '
 '2019. The rendering said that he had been refused entry. Those are different facts, the '
 'second is far more serious, and the second went into the file.'],

dp1=('Where live translation is used', 'Services that allow machine translation at public '
     'counters commonly restrict it to routine transactional exchanges and require a '
     'qualified interpreter for any conversation that may affect a decision on a case.',
     'Source: reported consular practice, 2025–2026.'),

c_a=[('What does a routine applicant have to do?', 'complete a form, pay a fee and bring four documents'),
     ('Which three things make a case hard?', 'a previous refusal, an unusual family situation and a language barrier'),
     ('What has live translation been used for since February?', 'short exchanges at the counter'),
     ('Why does it work for routine business?', 'routine business uses a small, repeated vocabulary'),
     ('What did the man say?', 'that he had been refused a visa by another country in 2019'),
     ('What did the record say?', 'that he had been refused entry')],

c_b=[('Most visa enquiries are complicated.', 'F'),
     ('A language barrier alone is usually manageable.', 'T'),
     ('Live translation has lengthened the queue.', 'F'),
     ('Refused a visa and refused entry mean the same.', 'F'),
     ('The more serious version went into the file.', 'T'),
     ('Routine sentences are long and varied.', 'F')],

c_c=[('Applicants ____________ complete the form in English or in the local language.', 'must'),
     ('You ____________ to pay the fee before the interview.', 'have'),
     ('Visitors ____________ not record the conversation at the counter.', 'may'),
     ('An officer ____________ check a disputed sentence with an interpreter.', 'must'),
     ('We ____________ to ask for four documents, not five.', 'have'),
     ('Staff ____________ not give an opinion on the likely outcome.', 'may')],

c_d=[('Must usually expresses ( the speaker’s own rule / an outside requirement ).', ['the speaker’s own rule', 'an outside requirement'], 0),
     ('Have to usually expresses ( an outside requirement / a personal wish ).',
      ['an outside requirement', 'a personal wish'], 0),
     ('May not expresses ( prohibition / absence of obligation ).',
      ['prohibition', 'absence of obligation'], 0),
     ('Live translation suits ( short routine exchanges / case-deciding conversations ).',
      ['short routine exchanges', 'case-deciding conversations'], 0),
     ('Refused a visa and refused entry are ( different facts / the same fact ).',
      ['different facts', 'the same fact'], 0)],

c_e=('Obligation, prohibition or no obligation? Put each sentence in the right column.',
     [('You must sign the form yourself.', 'obligation'),
      ('You may not photograph the counter.', 'prohibition'),
      ('You do not have to bring the original today.', 'no obligation'),
      ('Applicants have to pay before the interview.', 'obligation'),
      ('Staff may not advise on the outcome.', 'prohibition'),
      ('You need not come in person.', 'no obligation')],
     ['obligation', 'prohibition', 'no obligation']),

v_fig_title='A VISA FILE AND ITS PARTS',
v_fig=[('doc', 'a supporting statement'), ('key', 'an entry clearance'), ('people', 'a sponsor'),
       ('clock', 'a processing centre'), ('chart', 'a refusal notice'), ('door', 'a right of appeal')],
v_fig_cap='Six words that decide what happens to a person who wants to travel.',

vocab=[
 ('a visa', 'the permission given by a state for a person to seek entry'),
 ('an entry clearance', 'the decision taken before travel that a person may seek entry'),
 ('a sponsor', 'a person or body that supports an application and accepts obligations'),
 ('an invitation letter', 'a letter from a host inviting a person to visit'),
 ('a purpose of travel', 'the stated reason for which a person wishes to travel'),
 ('a refusal notice', 'the written decision setting out why an application was refused'),
 ('an appeal', 'a formal challenge to a decision'),
 ('a maintenance requirement', 'the rule that an applicant must show funds to support themselves'),
 ('an immigration rule', 'one of the published rules governing entry and stay'),
 ('a supporting statement', 'a written explanation attached to an application'),
 ('a biometric appointment', 'the appointment at which fingerprints and a photograph are taken'),
 ('a decision maker', 'the officer who decides an application'),
 ('a credibility assessment', 'the judgement of whether an account is believable'),
 ('a previous refusal', 'an earlier decision refusing an application'),
 ('an overstay', 'remaining in a country after permission has expired'),
 ('a right of appeal', 'the legal entitlement to challenge a decision'),
 ('a representative', 'a person acting formally on behalf of an applicant'),
 ('a processing centre', 'the office at which applications are decided'),
 ('an interview record', 'the written account of what was asked and answered'),
 ('a discretionary decision', 'a decision an officer may take either way within the rules')],

v_a=[('The written decision setting out why an application failed is a refusal ____________.', 'notice'),
     ('The rule about showing funds is a ____________ requirement.', 'maintenance'),
     ('The appointment for fingerprints is a ____________ appointment.', 'biometric'),
     ('The judgement of whether an account is believable is a ____________ assessment.', 'credibility'),
     ('Remaining after permission has expired is an ____________.', 'overstay'),
     ('The written account of what was asked is an ____________ record.', 'interview'),
     ('A decision an officer may take either way is a ____________ decision.', 'discretionary'),
     ('The officer who decides an application is the decision ____________.', 'maker')],

v_b=[('A sponsor is a person or body that supports an application', 'and accepts obligations.'),
     ('An entry clearance is the decision taken before travel', 'that a person may seek entry.'),
     ('A right of appeal is the legal entitlement', 'to challenge a decision.'),
     ('A representative is a person acting formally', 'on behalf of an applicant.'),
     ('A supporting statement is a written explanation', 'attached to an application.')],

g_title='Grammar: obligation and prohibition: must, have to, may not',
g_rule=['must: a rule the speaker or the institution imposes. You must sign the form.',
        'have to: a requirement from outside. Applicants have to pay before the interview.',
        'may not / must not: prohibition. You may not record the conversation.',
        'do not have to / need not: no obligation. You do not have to bring the original.'],
g_fig=('WRONG',
       ['You must not to sign it yourself.',
        'You have not to bring the original.',
        'Applicants must to pay the fee.',
        'You mustn’t to record this.'],
       'RIGHT',
       ['You must sign it yourself.',
        'You do not have to bring the original.',
        'Applicants have to pay the fee.',
        'You may not record this.'],
       'four rules a learner will get wrong',
       'the same four, in the forms English actually uses'),
g_fig_cap='Must not is a prohibition. Do not have to is a freedom. They are opposites.',

g_a=[('You ____________ sign the form yourself. (must)', 'must'),
     ('Applicants ____________ to pay before the interview. (have)', 'have'),
     ('You ____________ not record the conversation. (may)', 'may'),
     ('You ____________ not have to bring the original today. (do)', 'do'),
     ('Officers ____________ not advise on the likely outcome. (may)', 'may'),
     ('We ____________ to ask for four documents. (have)', 'have'),
     ('The statement ____________ be signed and dated. (must)', 'must'),
     ('You ____________ not need an appointment for this. (do)', 'do'),
     ('Staff ____________ not accept cash. (may)', 'may')],

g_b=[('You ( must to sign / must sign ) it yourself.', ['must to sign', 'must sign'], 1),
     ('Applicants ( have to pay / have pay ) the fee.', ['have to pay', 'have pay'], 0),
     ('You ( may not / have not to ) record this.', ['may not', 'have not to'], 0),
     ('You ( do not have to / must not ) bring the original — it is optional.',
      ['do not have to', 'must not'], 0),
     ('Officers ( may not / do not have to ) advise on the outcome — it is forbidden.',
      ['may not', 'do not have to'], 0),
     ('The statement ( must be / must to be ) signed.', ['must be', 'must to be'], 0)],

d1=dict(
 title='Refused a visa, or refused entry?',
 fig=(['He said refused.', 'Refused what?'],
      ['The record says entry.', 'He never said entry.']),
 cap='Bassel Tannous and the counter officer, reading an interview record.',
 lines=[('Bassel', 'This record says the applicant was refused entry in 2019.'),
        ('Officer', 'That is what the translation said.'),
        ('Bassel', 'Refused entry means turned back at a border. Was he?'),
        ('Officer', 'I do not know. He said one sentence and the device rendered it.'),
        ('Bassel', 'Did you read the rendering back to him?'),
        ('Officer', 'No. The queue was long and he nodded.'),
        ('Bassel', 'He nodded at a sentence he could not read, in a language he does not have.'),
        ('Officer', 'So what should I have done?'),
        ('Bassel', 'Stopped. A previous refusal is a fact that decides cases. It needs an interpreter.'),
        ('Officer', 'And the queue?'),
        ('Bassel', 'The queue waits. The file lasts for years.'),
        ('Officer', 'I will ask him to come back with an interpreter on Thursday.')],
 a=[('What does the record say?', 'that he was refused entry in 2019'),
    ('What does refused entry mean?', 'turned back at a border'),
    ('What did the officer not do?', 'read the rendering back to him'),
    ('Why did the applicant nod?', 'he could not read the sentence'),
    ('What does a previous refusal need?', 'an interpreter')],
 b=[('He ____________ at a sentence he could not read.', 'nodded'),
    ('A previous refusal is a fact that ____________ cases.', 'decides'),
    ('The queue ____________.', 'waits'),
    ('The file lasts for ____________.', 'years')]),

d2=dict(
 title='Where it works and where it must stop',
 fig=(['It has shortened the queue.', 'On which sentences?'],
      ['Hours, fees, which form.', 'Those are the safe ones.']),
 cap='Rim Haddad and Bassel, after a month of counting.',
 lines=[('Rim', 'I counted. Live translation handled nine hundred exchanges last month.'),
        ('Bassel', 'With what error rate?'),
        ('Rim', 'On hours, fees and which window, almost none that mattered.'),
        ('Bassel', 'And on the rest?'),
        ('Rim', 'On anything about a person’s history, I found eleven renderings I would not sign.'),
        ('Bassel', 'Eleven out of how many?'),
        ('Rim', 'Forty-one. It is not bad. It is just not good enough for a fact that decides a case.'),
        ('Bassel', 'So we draw a line.'),
        ('Rim', 'Routine on one side. Anything that could appear in a decision on the other.'),
        ('Bassel', 'And the applicant always hears the rendering read back.'),
        ('Rim', 'In their own language, and they say yes or no to it.'),
        ('Bassel', 'And when the interpreter cannot come for nine days?')],
 unresolved=True,
 a=[('How many exchanges were handled?', 'nine hundred'),
    ('Where were errors rare?', 'on hours, fees and which window'),
    ('How many renderings would Rim not sign?', 'eleven out of forty-one'),
    ('Where is the line drawn?', 'between routine and anything that could appear in a decision'),
    ('What must the applicant always hear?', 'the rendering read back in their own language')],
 b=[('It is not bad. It is just not ____________ enough.', 'good'),
    ('Anything that could appear in a ____________.', 'decision'),
    ('The applicant always hears the rendering read ____________.', 'back'),
    ('They say yes or ____________ to it.', 'no')]),

speak=[('Must, have to, may not',
        ['Explain six rules of your own organisation to your partner.',
         'Two with must, two with have to, two with may not.',
         'Your partner asks which of the six are not really rules at all.']),
       ('Across a language',
        ['Explain one procedure to your partner using only short sentences.',
         'Your partner may ask only yes or no questions.',
         'Count how many exchanges it takes.']),
       ('Read it back',
        ['Student A states a fact about their history in one sentence.',
         'Student B writes it down and reads it back, changing one word.',
         'A must catch the change. Change roles.'])],

ext_title='Short transactional sentences translate well; facts that decide cases do not',
ext_fig=figs.datatable('NINE HUNDRED EXCHANGES IN A MONTH',
                       ['Kind of exchange', 'How many', 'Renderings not safe to sign'],
                       [['opening hours and fees', '410', '0'],
                        ['which form, which window', '298', '1'],
                        ['appointment times', '151', '0'],
                        ['personal history', '28', '8'],
                        ['family circumstances', '13', '3'],
                        ['total', '900', '12']]),
ext_fig_cap='Eight hundred and fifty-nine exchanges were safe. The forty-one that decide cases were not.',
ext=[
 'Live translation at a counter has made a real difference to queues. A short sentence '
 'about opening hours or fees is rendered accurately almost every time, in both directions, '
 'and the applicant leaves knowing what to do instead of leaving confused.',
 'The reason is structural rather than technical. Transactional language is short, '
 'repetitive and low in consequence. The vocabulary is small, the grammar is simple, and a '
 'small error produces a small problem that is noticed and corrected the same day.',
 'Case-deciding language is the opposite. It is about history, family and circumstance, it '
 'uses words that carry legal weight, and a small error produces a sentence that sits in a '
 'file for years and is read as the applicant’s own account.',
 'Refused a visa and refused entry differ by one word and by a great deal of law. Lived '
 'with and married to are not the same. Was asked to leave and was removed are not the '
 'same. No rendering marks which of these distinctions it has guessed at.',
 'So the line is drawn by consequence, not by difficulty. If a sentence could appear in a '
 'decision, it is taken through an interpreter and read back to the applicant in their own '
 'language, and they say yes or no to the words that will be recorded.'],

dp2=('Reading back is the safeguard', 'Interview practice commonly requires that any '
     'account recorded through interpretation be read back to the person and confirmed, '
     'because the person is the only participant who can know whether the record matches '
     'what they meant.',
     'Source: reported interview practice, 2025–2026.'),

e_a=[('Why does transactional language translate well?', 'it is short, repetitive and low in consequence'),
     ('What makes case-deciding language different?', 'it carries legal weight and lasts for years'),
     ('Give two pairs that differ by one word.', 'refused a visa and refused entry; asked to leave and removed'),
     ('What does a rendering not mark?', 'which distinctions it has guessed at'),
     ('Where is the line drawn?', 'by consequence, not by difficulty')],
e_b=[('Live translation has helped with queues.', 'T'),
     ('A small error in a fee is as serious as one in a history.', 'F'),
     ('Lived with and married to mean the same.', 'F'),
     ('A rendering shows where it was uncertain.', 'F'),
     ('Case-deciding sentences need an interpreter.', 'T'),
     ('The applicant confirms the recorded words.', 'T')],

w_model='Purpose: so that the applicant’s own account is what appears in the file. Scope: '
        'the counter conversation of 14 April with one applicant; the written application '
        'is separate. Inputs: the interpreter’s rendering, read back and confirmed. '
        'Criteria: 6 lines giving what was asked, what was answered, which language was '
        'used, who interpreted, what was read back, and what the applicant confirmed. Done: '
        '6 lines in the case file before the applicant leaves the building. Fallback: where '
        'no interpreter is available, no history is recorded and a second appointment is '
        'given.',
w_fig=figs.spec_card('SIX LINES THE APPLICANT HAS AGREED TO',
                     [('Purpose', 'the applicant’s own account is what is on file'),
                      ('Scope', 'the counter conversation of 14 April'),
                      ('Inputs', 'the interpreter’s rendering, read back'),
                      ('Criteria', 'asked, answered, language, interpreter, read back, confirmed'),
                      ('Done', 'in the file before the applicant leaves'),
                      ('Fallback', 'no interpreter: record no history, give a second appointment')]),
w_fig_cap='The last line is the one that makes the first five safe to rely on.',
w_task='Write a six-line record of a counter conversation held through interpretation.',
w_steps=['Line 1: what was asked, in the words used.',
         'Line 2: what was answered, in the applicant’s words as rendered.',
         'Line 3: the language used and the direction of interpretation.',
         'Line 4: who interpreted, and their status.',
         'Line 5: that the account was read back, and in which language.',
         'Line 6: what the applicant confirmed or corrected.'],
w_bank=['Asked: have you previously applied for a visa for any country?',
        'Answered (as rendered): … .',
        'Conducted in … , interpreted by … .',
        'The account was read back in … before it was recorded.',
        'The applicant confirmed the account, except that he corrected … .'],
w_check=['Does line 2 say as rendered?',
         'Is the interpreter named with a status?',
         'Does line 5 name the language of the read-back?',
         'Does line 6 record a correction, if any?'],

t_title='Live translation at a counter, and where it breaks',
t_fig=figs.split('AT THE COUNTER',
                 'Live translation is fine here',
                 ['the counter opens at 08:30',
                  'the fee is payable before the interview',
                  'you need form 4 and a photograph',
                  'please come back on Thursday'],
                 'An interpreter is required here',
                 ['have you been refused a visa before',
                  'who do you live with, and since when',
                  'why did you leave that country',
                  'anything that may appear in a decision']),
t_fig_cap='The line is drawn by consequence. A fee error is corrected; a history error is permanent.',
t_body=[
 'Use live translation for the business of the counter and it will shorten the queue '
 'without harming anybody. Hours, fees, forms, windows, appointments: these are short, '
 'repeated sentences with small consequences, and the rendering is reliable.',
 'Stop using it the moment the conversation turns to history, family or anything that could '
 'be quoted in a decision. These sentences carry legal weight in single words, and a '
 'rendering gives the same confident output whether it is certain or guessing.',
 'Then add the safeguard that costs one minute: read the recorded sentence back to the '
 'applicant in their own language and ask them to confirm or correct it. They are the only '
 'person in the room who can know whether the record says what they meant.'],
t_say=[('Mark the boundary: ', 'This part of the conversation needs an interpreter.'),
       ('Read it back: ', 'This is what I will write. Is it right?'),
       ('Record the correction: ', 'The applicant corrected the record to say …')],
t_bound='Live translation renders every sentence with the same confidence, so nothing in the '
        'output shows where a legal distinction was guessed at. It cannot tell you that '
        'refused a visa and refused entry were the same word in the source language.',
t_a=[('This part of the conversation needs an ____________.', 'interpreter'),
     ('This is what I will ____________. Is it right?', 'write'),
     ('The applicant ____________ the record.', 'corrected'),
     ('Nothing in the output shows where it was ____________.', 'guessing'),
     ('Refused a visa and refused ____________ are different facts.', 'entry'),
     ('Read the recorded sentence ____________ to the applicant.', 'back')],
t_b_rubric='Say whether live translation may be used, and why.',
t_b=[('The counter opens at half past eight.', 'yes: transactional, short, low consequence'),
     ('Have you ever been refused a visa?', 'no: the answer may decide the case'),
     ('The fee is payable before the interview.', 'yes: an error here is corrected the same day'),
     ('Who have you been living with since 2021?', 'no: family facts carry legal weight')],

case=dict(
 title='The Decision Room · One word, four years in a file',
 brief=[
  'In April an applicant explains at the counter, through live translation, that he was '
  'refused a visa by another country in 2019. The rendering says that he was refused entry. '
  'The officer records the rendering and the applicant, who cannot read it, nods.',
  'Refused entry means being turned back at a border and is treated far more seriously than '
  'a refused application. The sentence is quoted in a refusal notice in June and in a '
  'second application in the following year.',
  'In the second application the man’s representative points out that he has never been '
  'refused entry anywhere. The Mission has no recording, no interpreter and no read-back. '
  'It has only its own record of a sentence the applicant did not say.'],
 exhibit=figs.datatable('WHAT WAS SAID AND WHAT WAS KEPT',
                        ['Stage', 'The words', 'Weight'],
                        [['what he said', 'refused a visa, 2019, another country', 'ordinary'],
                         ['the rendering', 'refused entry in 2019', 'serious'],
                         ['the record', 'refused entry in 2019', 'serious'],
                         ['the refusal notice', 'previously refused entry', 'decisive'],
                         ['the second application', 'quoted again', 'decisive'],
                         ['the evidence', 'none kept', '—']]),
 exhibit_cap='One word changed at the first step, and every later step treated it as the applicant’s own account.',
 exhibit_note='Nothing was invented. A single legal distinction was collapsed in rendering, '
              'and no step in the procedure was designed to catch it.',
 voices=[('Bassel Tannous', 'consul',
          'Nine hundred exchanges a month and twelve renderings I would not sign. That is a good tool.'),
         ('Rim Haddad', 'consular assistant',
          'And the twelve are all in the forty-one conversations that decide whether a family travels.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'He nodded at a sentence he could not read. That is not confirmation; that is politeness.')],
 steps=[('Find it', 'Which word changed, and at which step?'),
        ('Compare it', 'What is the difference between the two facts?'),
        ('Infer it', 'Why did nodding not catch the error?'),
        ('Weigh it', 'One minute of reading back against four years of a wrong fact.'),
        ('Decide', 'Which conversations require an interpreter, and what must always happen?')],
 analysis=[('Find it. Which word changed?', 'visa became entry, at the rendering'),
           ('Compare it. What is the difference?', 'a refused application against being turned back at a border'),
           ('Infer it. Why did nodding not help?', 'he could not read the sentence he was nodding at'),
           ('Weigh it. What does a read-back cost?', 'about one minute'),
           ('Decide. Which conversations need an interpreter?', 'any that could appear in a decision')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say which conversations may use live translation.',
                 'Say which require an interpreter.',
                 'Say what happens before anything is recorded.',
                 'Say what is done when no interpreter is available.'],
 bank=['Live translation is used for transactional exchanges only.',
       'Any conversation that may appear in a decision is taken through an interpreter.',
       'Every recorded account is read back in the applicant’s language and confirmed.',
       'Where no interpreter is available, no history is recorded and a second appointment is given.'],
 outcome='The Mission writes to the processing centre and asks for the sentence to be struck '
         'from both files, which is done. Four lines go on the counter wall: live '
         'translation for transactions, an interpreter for anything that could appear in a '
         'decision, a read-back in the applicant’s own language before anything is '
         'recorded, and a second appointment where no interpreter can be found. The queue '
         'is nine minutes longer on an average morning.',
 outcome_q=[('What did the Mission ask the centre to do?', 'strike the sentence from both files'),
            ('What is live translation now used for?', 'transactional exchanges only'),
            ('What happens before anything is recorded?', 'a read-back in the applicant’s language'),
            ('What if no interpreter is available?', 'a second appointment is given'),
            ('How much longer is the queue?', 'about nine minutes')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Deal with the visa enquiries',
 task=['A new officer was given the counter’s visa enquiries for a month.',
       'This is the instruction as it was given, and what the month produced.'],
 draft=['Deal with the visa enquiries at the counter.',
        'Use the translation device where it helps.',
        'Record what people tell you.',
        'Ask the usual questions.',
        'Refer anything complicated.',
        'Keep the queue moving.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says where the device must stop, or what complicated means.',
 asked=['Enquiries handled', 'What people tell you, recorded', 'Complicated cases referred'],
 back=['41 history conversations through the device', '12 renderings not safe to sign', '0 read-backs'],
 gap='Nobody said which conversations need an interpreter, or that an account must be read back.',
 back_cap='Forty-one conversations about people’s histories, and not one of them read back.',
 back_note='Where it helps is a judgement made by a tired officer with a queue, and the '
           'device always helps with the queue, which is exactly the wrong test.',
 diagnosis=[('“the visa enquiries”', 'unscoped set'),
            ('“the usual questions”', 'unscoped set'),
            ('“where it helps”', 'unstated criterion'),
            ('“anything complicated”', 'unstated criterion'),
            ('“record what people tell you”', 'missing condition'),
            ('“keep the queue moving”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that no account is recorded without a read-back.',
 scaffold=['why the counter handles enquiries at all',
           'which enquiries, and which are referred on sight',
           'where live translation may be used and where it may not',
           'what must happen before any account is recorded',
           'what is written in the file, and by when',
           'what happens when no interpreter is available'],
 bank=['Purpose: so that applicants are told what to do and their accounts are recorded accurately',
       'Scope: counter enquiries between … and … ; appeals and representations are referred',
       'Inputs: live translation for transactional exchanges; an interpreter for everything else',
       'Criteria: no account is recorded until it has been read back and confirmed',
       'Done: 6-line record in the file before the applicant leaves the building',
       'Fallback: no interpreter available: no history recorded, second appointment given'],
 check=['Does it name where the device may be used?',
        'Does it require a read-back before recording?',
        'Is there a deadline tied to the applicant leaving?',
        'Does it say what to do with no interpreter?'],
 model=['so that applicants are told what to do and their accounts are recorded accurately',
        'counter enquiries only; appeals and written representations are referred to the processing centre',
        'live translation for transactional exchanges; an interpreter for anything affecting a decision',
        'no account is recorded until it has been read back in the applicant’s language and confirmed',
        'a 6-line record in the case file before the applicant leaves the building',
        'where no interpreter is available, no history is recorded and a second appointment is given'],
 cost='41 history conversations produced 12 renderings that could not be relied on, 1 of '
      'which was quoted in 2 decisions over 4 years. 41 read-backs would have cost 41 minutes.'),

feet=dict(
 title='On Your Feet · A long queue and a complicated case',
 setting=[
  'It is 11:30 and there are forty people behind the man at your window. His English is '
  'limited, he has a thick file of papers, and the first thing he says is that his '
  'application was refused last year and he wants to know why.',
  'You cannot discuss a previous refusal through a device, you cannot deal with an appeal '
  'at a counter, and you cannot simply send him away after he has waited two hours. You '
  'have about ninety seconds to get him to the right place without losing him.'],
 ladder=[('Why was I refused?', 'the question you cannot answer here'),
         ('Just tell me', 'the pressure of the queue behind him'),
         ('I waited two hours', 'the turn where fairness is at stake')],
 cap='Three turns, forty people waiting, and one conversation that does not belong at a counter.',
 turns=[('Turn 1 · Applicant', 'They refused me last year. You tell me why, please.'),
        ('Turn 2 · Applicant', 'You have the file in front of you. Just tell me what it says.'),
        ('Turn 3 · Applicant', 'I have waited two hours for this. Everybody else is being served.')],
 holds=['I cannot explain a refusal at this window, and I will tell you why.',
        'The reasons are in a notice that was sent to you, and you are entitled to a copy.',
        'For this conversation you must have an interpreter, and the Mission will arrange one.',
        'I am going to book you an appointment now, so that you do not queue again.',
        'You have not wasted the two hours: you will leave with a date and a reference.',
        'Would Thursday at nine suit you, with an interpreter present?'],
 redline='You must not discuss the reasons for a previous refusal through a translation '
         'device, you must not give an opinion on his chances, and you must not read parts '
         'of the file aloud to him across a counter in front of forty people.',
 score=['Said clearly, in the first sentence, what cannot happen here, and why.',
        'Named the document that does contain the answer.',
        'Converted the queue time into something concrete: an appointment and a reference.',
        'Required an interpreter without making it sound like an obstacle.',
        'Offered a specific day and hour rather than a promise to write.'],
 a=[('What can you not do at the window?', 'explain a previous refusal'),
    ('Which document holds the reasons?', 'the refusal notice sent to him'),
    ('What must the next conversation have?', 'an interpreter'),
    ('What does he leave with?', 'an appointment, a date and a reference'),
    ('What must you not give?', 'an opinion on his chances'),
    ('Why not read the file aloud?', 'forty people are listening')]),

rev_fig=figs.split('A COUNTER CONVERSATION',
                   'Record this and you will regret it',
                   ['He said he was refused entry.',
                    'He agreed with the summary.',
                    'He nodded.',
                    'The device rendered it.'],
                   'Record this instead',
                   ['Answered (as rendered): refused a visa, 2019.',
                    'Interpreted by … , read back in … .',
                    'The applicant confirmed the account.',
                    'He corrected the year to 2019.']),
rev_fig_cap='Every line on the right names the method as well as the words.',
rev=dict(
 read=[('How many exchanges were handled in a month?',
        ['nine hundred', 'forty-one', 'twelve', 'a hundred'], 0),
       ('How many renderings were not safe to sign?', ['twelve', 'nine', 'none', 'forty'], 0),
       ('What must happen before an account is recorded?',
        ['a read-back', 'a signature', 'a photograph', 'a fee'], 0),
       ('What is live translation used for now?',
        ['transactional exchanges', 'everything', 'histories', 'appeals'], 0)],
 listen_text='Use live translation for the business of the counter. Stop the moment the '
             'conversation turns to history or family. Then read the recorded sentence back '
             'in the applicant’s own language and ask them to confirm or correct it.',
 listen=[('Use live translation for the ____________ of the counter.', 'business'),
         ('Stop when the conversation turns to ____________.', 'history'),
         ('Read the recorded sentence ____________.', 'back'),
         ('Ask them to confirm or ____________ it.', 'correct')],
 speak=['Explain six rules to your partner using must, have to and may not.',
        'Then record one fact they tell you and read it back with one word changed.'],
 write='Write a six-line record of a counter conversation held through interpretation.',
 vocab=[('The written decision setting out why an application failed is a refusal ____________.', 'notice'),
        ('The appointment for fingerprints is a ____________ appointment.', 'biometric'),
        ('Remaining after permission expires is an ____________.', 'overstay'),
        ('A decision an officer may take either way is a ____________ decision.', 'discretionary')],
 gram=[('You ____________ sign the form yourself.', 'must'),
       ('Applicants ____________ to pay before the interview.', 'have'),
       ('You ____________ not record this conversation.', 'may'),
       ('You ____________ not have to bring the original.', 'do')]),

found=['Write the list of counter sentences that may never go through a device at your post.',
       'Practise reading an account back in one minute and asking for a correction.',
       'Find out how long an interpreter takes to arrange at your post, and write it down.',
       'Count how many of your recorded accounts were confirmed by the person who gave them.'],
end_line='Transactions through the device. Histories through a person, read back, and confirmed.',
end_next='Next: Working With Locally Engaged Staff')
