# -*- coding: utf-8 -*-
import figs

U = dict(
num=10,
title='What the Mission Cannot Do',
gram='verbs followed by to-infinitive and by -ing',
ai='what must never be put into a system at all',
strap='CEFR B1 · Grammar: verbs followed by to-infinitive and by -ing · '
      'AI: what must never be put into a system at all',
cando=['use verbs correctly with to-infinitive and with -ing',
       'explain the limits of what a mission may do',
       'decide what may never be typed into an outside system',
       'refuse a request without refusing the person',
       'write a six-line statement of limits'],

hero=('A NAME, A CASE NUMBER AND A HOSPITAL, PASTED INTO A SEARCH BOX',
      ['He wanted to help, and he had four minutes before the meeting.',
       'The box was not the Mission’s, and it does not forget.'],
      [(720, 'grey', 'short'), (720, 'blue', 'short'), (720, 'teal', 'long')]),
hero_cap='A screen at twenty past eight, with a consular case file open beside an outside service.',

warm=['What does your organisation promise never to do with information about people?',
      'Where does text go when you paste it into a service you do not control?',
      'How do you say no to a reasonable request from somebody you like?'],

read=[
 'Every mission has limits, and most complaints come from people discovering them late. A '
 'mission cannot overturn a court, cannot get a citizen out of prison, cannot pay a debt '
 'and cannot ask a host state to treat a national better than its own.',
 'Saying so early is kinder than saying so late. An officer who explains the limits in the '
 'first conversation is remembered as honest. An officer who avoids the subject and lets a '
 'family hope is remembered as something else.',
 'There is a second kind of limit, newer and less understood. Some information must never '
 'leave the Mission’s own systems, whatever the convenience. A consular case holds names, '
 'dates of birth, medical facts and the location of frightened people.',
 'In May an officer wanted to translate a short paragraph from a detention case. He pasted '
 'it into an outside service: a name, a case number, a hospital and a street. It took four '
 'seconds, it was well meant, and it cannot be undone.',
 'Nothing bad happened, so far as anybody knows. That is the usual outcome and it is not '
 'the point. The Mission promised that family that their information would stay inside the '
 'Mission, and for four seconds it did not.'],

dp1=('Why some text never leaves', 'Information security guidance commonly prohibits '
     'entering personal or case information into services outside an organisation’s own '
     'control, on the basis that such data cannot be recalled and its later handling cannot '
     'be verified.',
     'Source: reported information security practice, 2025–2026.'),

c_a=[('Name three things a mission cannot do.', 'overturn a court, free a prisoner, pay a debt'),
     ('Why is saying so early kinder?', 'the officer is remembered as honest'),
     ('What is the second kind of limit?', 'information that must never leave the Mission’s systems'),
     ('What did the officer paste?', 'a name, a case number, a hospital and a street'),
     ('How long did it take?', 'four seconds'),
     ('What was promised to the family?', 'that their information would stay inside the Mission')],

c_b=[('Most complaints come from limits discovered early.', 'F'),
     ('Explaining limits early is remembered well.', 'T'),
     ('A consular case holds medical facts.', 'T'),
     ('The officer acted maliciously.', 'F'),
     ('Something bad is known to have happened.', 'F'),
     ('The action can be undone.', 'F')],

c_c=[('He wanted ____________ help, and he had four minutes.', 'to'),
     ('She avoided ____________ (say) what the limits were.', 'saying'),
     ('We promised ____________ keep the information inside the Mission.', 'to'),
     ('He admitted ____________ (paste) the paragraph into the service.', 'pasting'),
     ('The family expected ____________ hear from us the same day.', 'to'),
     ('Officers must stop ____________ (use) outside services for case text.', 'using')],

c_d=[('Want, promise and expect are followed by ( to + verb / verb + ing ).', ['to + verb', 'verb + ing'], 0),
     ('Avoid, admit and stop are followed by ( verb + ing / to + verb ).',
      ['verb + ing', 'to + verb'], 0),
     ('The first kind of limit is about ( what a mission may do / where text goes ).',
      ['what a mission may do', 'where text goes'], 0),
     ('The officer’s motive was ( helpful / malicious ).', ['helpful', 'malicious'], 0),
     ('The usual outcome of such a paste is ( nothing visible / an immediate harm ).',
      ['nothing visible', 'an immediate harm'], 0)],

c_e=('To-infinitive or -ing? Put each verb in the right column.',
     [('want', 'to-infinitive'),
      ('avoid', '-ing'),
      ('promise', 'to-infinitive'),
      ('admit', '-ing'),
      ('expect', 'to-infinitive'),
      ('suggest', '-ing')],
     ['to-infinitive', '-ing']),

v_fig_title='THE EDGE OF WHAT WE MAY DO',
v_fig=[('key', 'a classification marking'), ('doc', 'a confidential record'), ('people', 'a third party'),
       ('chart', 'an audit trail'), ('clock', 'a disposal rule'), ('door', 'a boundary of service')],
v_fig_cap='Six words for the line a mission may not cross, in either direction.',

vocab=[
 ('a limitation', 'something an organisation is unable or not permitted to do'),
 ('a mandate', 'the formal authority under which a body acts'),
 ('a disclaimer', 'a statement limiting what somebody may rely on'),
 ('a boundary of service', 'the stated edge of what assistance will be given'),
 ('a third party', 'a person or body other than the two directly concerned'),
 ('a data transfer', 'the movement of information from one system or country to another'),
 ('a processor', 'a body that handles information on behalf of another'),
 ('a confidential record', 'a record that may be seen only by those entitled to see it'),
 ('a sensitive case', 'a case in which disclosure could cause particular harm'),
 ('a redaction', 'the removal or masking of part of a document before it is shown'),
 ('a need to know', 'the principle that information goes only to those who require it'),
 ('a secure system', 'a system approved for holding official information'),
 ('an approved tool', 'a service an organisation has formally permitted its staff to use'),
 ('an unapproved tool', 'any service outside that permission, however convenient'),
 ('a breach', 'an event in which information goes where it should not'),
 ('a breach report', 'the formal record of a breach and what was done about it'),
 ('a disposal rule', 'the rule stating when a record is destroyed'),
 ('a classification marking', 'the label showing how a document must be handled'),
 ('an audit trail', 'the record of who did what to a file and when'),
 ('a lawful basis', 'the legal ground on which information may be held or used')],

v_a=[('The stated edge of what assistance will be given is a ____________ of service.', 'boundary'),
     ('The removal of part of a document before showing it is a ____________.', 'redaction'),
     ('The principle that information goes only to those who require it is a ____________.', 'need to know'),
     ('Any service outside the permitted list is an ____________ tool.', 'unapproved'),
     ('The formal record of information going astray is a ____________ report.', 'breach'),
     ('The label showing how a document must be handled is a classification ____________.', 'marking'),
     ('The record of who did what to a file is an ____________ trail.', 'audit'),
     ('The legal ground for holding information is a lawful ____________.', 'basis')],

v_b=[('A mandate is the formal authority', 'under which a body acts.'),
     ('A processor is a body that handles information', 'on behalf of another.'),
     ('A sensitive case is a case in which disclosure', 'could cause particular harm.'),
     ('A disposal rule is the rule stating', 'when a record is destroyed.'),
     ('A data transfer is the movement of information', 'from one system or country to another.')],

g_title='Grammar: verbs followed by to-infinitive and by -ing',
g_rule=['to + verb after: want, hope, promise, expect, decide, refuse, agree, offer.',
        '-ing after: avoid, admit, suggest, consider, risk, finish, keep, stop (an activity).',
        'Some take either with a change of meaning: stop to rest, stop resting.',
        'After a preposition always use -ing: without asking, before sending, by pasting.'],
g_fig=('WRONG',
       ['He avoided to say what the limits were.',
        'We promised keeping it inside the Mission.',
        'She admitted to paste the paragraph.',
        'They decided sending it anyway.'],
       'RIGHT',
       ['He avoided saying what the limits were.',
        'We promised to keep it inside the Mission.',
        'She admitted pasting the paragraph.',
        'They decided to send it anyway.'],
       'four verbs followed by the wrong form',
       'the same four, in the pattern the verb requires'),
g_fig_cap='The verb chooses the form. Learn them in pairs, not in rules.',

g_a=[('He wanted ____________ (help) and had four minutes.', 'to help'),
     ('She avoided ____________ (say) what the limits were.', 'saying'),
     ('We promised ____________ (keep) it inside the Mission.', 'to keep'),
     ('He admitted ____________ (paste) the paragraph.', 'pasting'),
     ('The family expected ____________ (hear) from us.', 'to hear'),
     ('Officers must stop ____________ (use) unapproved services.', 'using'),
     ('She refused ____________ (give) an opinion on the outcome.', 'to give'),
     ('I suggest ____________ (ask) the register first.', 'asking'),
     ('He risked ____________ (lose) the family’s trust.', 'losing')],

g_b=[('He avoided ( to say / saying ) what the limits were.', ['to say', 'saying'], 1),
     ('We promised ( to keep / keeping ) it inside the Mission.',
      ['to keep', 'keeping'], 0),
     ('She admitted ( pasting / to paste ) the paragraph.', ['pasting', 'to paste'], 0),
     ('They decided ( to send / sending ) it anyway.', ['to send', 'sending'], 0),
     ('I suggest ( asking / to ask ) the register first.', ['asking', 'to ask'], 0),
     ('He refused ( to give / giving ) an opinion.', ['to give', 'giving'], 0)],

d1=dict(
 title='Four seconds, and it cannot be undone',
 fig=(['It was four seconds.', 'And it cannot be undone.'],
      ['Nothing happened.', 'Nothing we can see.']),
 cap='Bassel Tannous and the officer concerned, on the morning after.',
 lines=[('Officer', 'I wanted to understand one paragraph before the meeting.'),
        ('Bassel', 'I know. What did you paste?'),
        ('Officer', 'A name, a case number, the hospital and the street.'),
        ('Bassel', 'Into a service the Mission does not control.'),
        ('Officer', 'It took four seconds and nothing happened.'),
        ('Bassel', 'Nothing we can see. That is not the same sentence.'),
        ('Officer', 'I was trying to do the work properly.'),
        ('Bassel', 'You were. And the family was promised that this would stay inside the building.'),
        ('Officer', 'What do I do now?'),
        ('Bassel', 'You write a breach report today, with the exact words you pasted.'),
        ('Officer', 'That will go on my record.'),
        ('Bassel', 'It will. And a report that is written is a mistake. One that is hidden is a different thing.')],
 a=[('Why did he paste the paragraph?', 'to understand it before a meeting'),
    ('What exactly did he paste?', 'a name, a case number, the hospital and the street'),
    ('What does Bassel say about nothing happening?', 'nothing that can be seen'),
    ('What must the officer write?', 'a breach report, today'),
    ('What is the difference between a mistake and something else?', 'whether it is reported or hidden')],
 b=[('I wanted ____________ understand one paragraph.', 'to'),
    ('Nothing we can ____________ .', 'see'),
    ('You write a breach ____________ today.', 'report'),
    ('A report that is written is a ____________ .', 'mistake')]),

d2=dict(
 title='The convenience is the danger',
 fig=(['It is so much faster.', 'That is exactly the problem.'],
      ['Faster is bad?', 'Faster than thinking is bad.']),
 cap='Rim Haddad and Nour, writing the rule for the back office.',
 lines=[('Nour', 'Everybody understands that case files are confidential.'),
        ('Rim', 'Everybody does. And four seconds is shorter than remembering it.'),
        ('Nour', 'So the rule has to be about the action, not the principle.'),
        ('Rim', 'Yes. Never type a name, a number, an address or a medical fact into anything outside.'),
        ('Nour', 'And if the translation is genuinely needed?'),
        ('Rim', 'Replace the name with a letter. The grammar is the same; the person is gone.'),
        ('Nour', 'That takes twenty seconds.'),
        ('Rim', 'Twenty seconds is the price of the promise we made the family.'),
        ('Nour', 'And the approved tools inside the Mission?'),
        ('Rim', 'Use them freely. That is what they are for, and nobody should feel clever for avoiding them.'),
        ('Nour', 'So the rule is one sentence about four kinds of thing.'),
        ('Rim', 'And what happens when the approved tool is down for a week?')],
 unresolved=True,
 a=[('Why is four seconds dangerous?', 'it is shorter than remembering the principle'),
    ('What must the rule be about?', 'the action, not the principle'),
    ('What four things must never be typed outside?', 'a name, a number, an address or a medical fact'),
    ('What is the remedy for translation?', 'replacing the name with a letter'),
    ('What should officers do with approved tools?', 'use them freely')],
 b=[('The rule has to be about the ____________.', 'action'),
    ('Replace the name with a ____________ .', 'letter'),
    ('Twenty seconds is the price of the ____________ .', 'promise'),
    ('Use them ____________ .', 'freely')]),

speak=[('To or -ing',
        ['Make twelve sentences about your work with the verbs on the list.',
         'Your partner corrects any that use the wrong form.',
         'Then do six with a preposition and -ing.']),
       ('Saying what we cannot do',
        ['Explain four limits of your own organisation to your partner.',
         'Your partner pushes back on each one.',
         'Hold the limit without becoming cold.']),
       ('Four seconds',
        ['List five things you do quickly at a screen without thinking.',
         'Say which of them move information somewhere.',
         'Decide which one you would make slower on purpose.'])],

ext_title='Two kinds of limit: what we may not do, and where information may never go',
ext_fig=figs.datatable('WHAT MAY BE TYPED WHERE',
                       ['Content', 'Approved system', 'Outside service'],
                       [['a general legal question', 'yes', 'yes'],
                        ['a paragraph with a name in it', 'yes', 'never'],
                        ['a case number', 'yes', 'never'],
                        ['an address or a hospital', 'yes', 'never'],
                        ['a medical fact', 'yes', 'never'],
                        ['the same text with names replaced', 'yes', 'yes']]),
ext_fig_cap='One column is a tool. The other is a promise, and the promise is to a family.',
ext=[
 'A mission’s limits are not failures. They are the shape of the thing. A consulate that '
 'could overturn a court would not be a consulate; it would be a court. Saying what cannot '
 'be done, early and plainly, is one of the most useful services an officer provides.',
 'The second kind of limit is about information, and it is newer. Case files hold names, '
 'dates of birth, addresses, medical facts and the location of people who are frightened. '
 'The Mission promises that this stays inside the Mission.',
 'That promise is broken in four seconds. Not by a spy and not by carelessness in any '
 'ordinary sense, but by an officer who wants to do the work properly, needs a paragraph '
 'translated, and uses whatever is nearest.',
 'The convenience is the whole danger. Thinking takes longer than pasting. So the rule '
 'cannot be a principle to be remembered; it has to be a short list of things that are '
 'never typed outside: a name, a number, an address, a medical fact.',
 'And it must come with a remedy, because a rule without one is ignored. Replace the name '
 'with a letter. Ask the general question without the case. Use the approved tools freely '
 'and without embarrassment, because they exist precisely so that the promise can be kept.'],

dp2=('Rules people can follow at speed', 'Security guidance commonly recommends expressing '
     'prohibitions as short lists of specific items rather than as principles, because the '
     'decision to paste or not is made in seconds and under time pressure.',
     'Source: reported information security practice, 2025–2026.'),

e_a=[('Why are limits not failures?', 'they are the shape of what a consulate is'),
     ('What does a case file hold?', 'names, dates of birth, addresses, medical facts and locations'),
     ('How is the promise usually broken?', 'by an officer in a hurry trying to do the work properly'),
     ('What must the rule be?', 'a short list of things never typed outside'),
     ('What must accompany the rule?', 'a remedy, such as replacing the name with a letter')],
e_b=[('A consulate that could overturn a court would still be a consulate.', 'F'),
     ('Saying what cannot be done is useful.', 'T'),
     ('Breaches are usually malicious.', 'F'),
     ('Convenience is the main risk.', 'T'),
     ('A principle is easier to apply at speed than a list.', 'F'),
     ('Approved tools should be used freely.', 'T')],

w_model='Purpose: so that every officer knows in 2 seconds what may not be typed outside. '
        'Scope: all consular case material; general legal and language questions are not '
        'covered. Inputs: the Mission’s information security rule and the 4 categories '
        'agreed on 3 May. Criteria: 6 lines, 4 of them naming a category, 1 giving the '
        'remedy and 1 saying what to do after a mistake. Done: 6 lines beside every screen '
        'in the section, by 10 May. Fallback: where an approved tool is unavailable, the '
        'work waits or is done without the identifying details.',
w_fig=figs.spec_card('SIX LINES BESIDE A SCREEN',
                     [('Purpose', 'a 2-second decision, made correctly'),
                      ('Scope', 'all consular case material'),
                      ('Inputs', 'the security rule and the 4 agreed categories'),
                      ('Criteria', '4 categories, 1 remedy, 1 line on mistakes'),
                      ('Done', 'beside every screen by 10 May'),
                      ('Fallback', 'tool unavailable: wait, or work without identifying details')]),
w_fig_cap='A rule that is not beside the screen is a rule that is not in the four seconds.',
w_task='Write a six-line statement of what may never leave your own systems.',
w_steps=['Line 1: what the rule is for, in one sentence.',
         'Lines 2 to 4: three categories of content that never leave, named concretely.',
         'Line 5: the remedy, so that the work can still be done.',
         'Line 6: what to do if it happens anyway, and by when.'],
w_bank=['This rule protects what we promised the people whose cases we hold.',
        'Never type a name, a case number or an address into a service outside the Mission.',
        'Never type a medical fact, however short.',
        'Replace names with letters and ask the general question instead.',
        'If it happens, write a breach report the same day. It is a mistake, not a disgrace.'],
w_check=['Is every category concrete rather than general?',
         'Does line 5 let the work continue?',
         'Does line 6 give a time?',
         'Could the whole thing be read in ten seconds?'],

t_title='What must never be put into a system at all',
t_fig=figs.split('BEFORE YOU PASTE',
                 'This may go to any tool',
                 ['a general legal question',
                  'a grammar or phrasing question',
                  'a public text with no case attached',
                  'the same paragraph with names replaced'],
                 'This goes nowhere outside',
                 ['a name or a date of birth',
                  'a case number or a reference',
                  'an address, hospital or station',
                  'anything medical, however short']),
t_fig_cap='The right-hand column is four items long because four is what anybody can hold.',
t_body=[
 'Use the approved tools properly and often. Translation, drafting, summarising and sorting '
 'inside an approved system are exactly the uses this course has been teaching, and an '
 'officer who avoids them out of vague anxiety is slower and no safer.',
 'The rule is about where text goes, not about whether a tool is used. Four categories '
 'never leave the Mission’s own systems: a name, a reference, a place and a medical fact. '
 'That list is short enough to apply in the four seconds you actually have.',
 'And keep the remedy beside the rule. Replace the name with a letter. Ask the general '
 'question without the case attached. If the approved tool is down, the work waits, because '
 'the promise was made to a person and the deadline was not.'],
t_say=[('Name the four: ', 'No name, no reference, no place, nothing medical.'),
       ('Use the remedy: ', 'I will replace the names with letters and ask the general question.'),
       ('Report it plainly: ', 'I pasted four lines at 08:20. Here is exactly what they said.')],
t_bound='An outside service cannot unlearn what it has been given, and cannot tell you where '
        'the text went afterwards or who may see it. Nothing in its answer shows that '
        'anything was retained, and a reassuring reply is not evidence of anything.',
t_a=[('No name, no reference, no place, nothing ____________.', 'medical'),
     ('I will replace the names with ____________ .', 'letters'),
     ('I pasted four lines at ____________ .', '08:20'),
     ('An outside service cannot ____________ what it has been given.', 'unlearn'),
     ('Nothing in its answer shows that anything was ____________ .', 'retained'),
     ('The promise was made to a ____________ .', 'person')],
t_b_rubric='Say whether each may be typed into an outside service.',
t_b=[('What does the word remand mean in this country?', 'yes: it is a general question'),
     ('Translate: the patient at Marnach Central, case 4471.', 'no: a place and a reference'),
     ('Translate: the patient at X, case Y.', 'yes: the identifiers are gone'),
     ('Is this sentence grammatical?', 'yes, if no case text is attached')],

case=dict(
 title='The Decision Room · Four lines at twenty past eight',
 brief=[
  'At 08:20 an officer needs to understand one paragraph of a detention file before a '
  'meeting at nine. The Mission’s approved translation tool has been unavailable since '
  'Monday. He pastes four lines into an outside service.',
  'The four lines contain the detained person’s name, the case number, the hospital where '
  'he was taken and the street where he was arrested. The translation is good and the '
  'meeting goes well.',
  'He tells the consul at midday, unprompted. Nothing visible has happened. The question is '
  'what the Mission does now, what it tells the family, and what it changes so that an '
  'officer in a hurry does not have to rely on remembering a principle.'],
 exhibit=figs.datatable('WHAT LEFT THE BUILDING',
                        ['Item', 'In the pasted text', 'Could it have been removed?'],
                        [['the detainee’s name', 'yes', 'yes, replace with X'],
                         ['the case number', 'yes', 'yes, omit'],
                         ['the hospital', 'yes', 'yes, replace with a hospital'],
                         ['the street', 'yes', 'yes, omit'],
                         ['the legal terms', 'yes', 'these were the point'],
                         ['time taken to remove them', '—', 'about 20 seconds']]),
 exhibit_cap='Everything that mattered to the translation could have stayed. Everything that identified a person could have gone.',
 exhibit_note='The officer reported it himself within four hours, which is the behaviour the '
              'Mission most needs and the behaviour a harsh response destroys.',
 voices=[('Bassel Tannous', 'consul',
          'He told me before anybody asked. If I punish that, the next one will not tell me.'),
         ('Rim Haddad', 'consular assistant',
          'And the approved tool has been down since Monday. We built the trap and left it open.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'The family is owed the truth. Not a drama, and not silence either.')],
 steps=[('Find it', 'What exactly left the Mission?'),
        ('Compare it', 'What could have been removed without harming the work?'),
        ('Infer it', 'Why did an experienced officer do it?'),
        ('Weigh it', 'Twenty seconds of redaction against a promise made to a family.'),
        ('Decide', 'What is written down, what is told, and what is changed?')],
 analysis=[('Find it. What left the building?', 'a name, a case number, a hospital and a street'),
           ('Compare it. What could have gone?', 'all four identifiers, in about twenty seconds'),
           ('Infer it. Why did he do it?', 'the approved tool was down and he had forty minutes'),
           ('Weigh it. What was the cost?', 'a promise to a family was broken, invisibly'),
           ('Decide. What must change?', 'the rule becomes a short list beside the screen')],
 decision='Decide what happens, in four lines.',
 decision_steps=['Say what is recorded, and by when.',
                 'Say what the family is told.',
                 'Say what the rule becomes.',
                 'Say what happens when an approved tool is unavailable.'],
 bank=['A breach report is written the same day, with the exact text that was entered.',
       'The family is told in plain terms what left the Mission and what was done about it.',
       'The rule becomes 4 named categories, printed beside every screen.',
       'Where an approved tool is unavailable, the work waits or is done without identifiers.'],
 outcome='The officer writes a breach report the same afternoon with the exact four lines. '
         'The Mission tells the family in writing what happened, which is received better '
         'than anybody expected. Four categories are printed beside every screen, with the '
         'remedy underneath. The approved tool is restored on Thursday, and the consul '
         'records that it had been unavailable for four days, because that is the part the '
         'Mission could have prevented.',
 outcome_q=[('When was the breach report written?', 'the same afternoon'),
            ('What was the family told?', 'in writing, what happened and what was done'),
            ('What is printed beside every screen?', 'four categories and the remedy'),
            ('How long had the approved tool been down?', 'four days'),
            ('What did the consul record?', 'that the tool had been unavailable')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Use the tools sensibly',
 task=['A mission issued guidance on using drafting and translation tools.',
       'This is what it said, and what the following quarter produced.'],
 draft=['Use the tools sensibly.',
        'Be careful with confidential material.',
        'Use your judgement about what is appropriate.',
        'Avoid anything that could cause a problem.',
        'Follow the security rules.',
        'Ask if you are unsure.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of excellent advice, and not one of them can be applied in four seconds.',
 asked=['Sensible use', 'Care with confidential material', 'Judgement'],
 back=['3 breaches reported', '2 more found later', '0 officers who could state the rule'],
 gap='Nobody named the categories, gave a remedy, or said what to do when a tool is down.',
 back_cap='Five breaches in a quarter, and nobody in the section could say what the rule actually forbade.',
 back_note='Every line is true and none of it is operable. A rule applied in four seconds '
           'must be a list of nouns, not a standard of behaviour.',
 diagnosis=[('“use the tools sensibly”', 'unstated criterion'),
            ('“anything that could cause a problem”', 'unstated criterion'),
            ('“confidential material”', 'unscoped set'),
            ('“the security rules”', 'unscoped set'),
            ('“use your judgement”', 'undefined done'),
            ('“ask if you are unsure”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that the rule can be applied without thinking.',
 scaffold=['why the rule exists and whose promise it protects',
           'which material is covered and which is not',
           'the categories that never leave, named',
           'what may be done instead, so the work continues',
           'where the rule is kept and when it takes effect',
           'what happens when a mistake is made, or a tool is down'],
 bank=['Purpose: so that what we promised the people in our files stays inside the Mission',
       'Scope: all consular case material; general legal and language questions are not covered',
       'Inputs: the information security rule of … ',
       'Criteria: never type a …, a …, a … or a … into any service outside the Mission',
       'Done: the 6 lines printed beside every screen by … ',
       'Fallback: if an approved tool is unavailable, the work waits or identifiers are removed'],
 check=['Are the categories named as nouns?',
        'Is a remedy given?',
        'Is the rule placed where the decision is made?',
        'Does it say what to do after a mistake?'],
 model=['so that what we promised the people in our files stays inside the Mission',
        'all consular case material; general legal and language questions are not covered',
        'the Mission information security rule and the 4 categories agreed on 3 May',
        'never type a name, a case number, a place or a medical fact into an outside service',
        '6 lines printed beside every screen in the section by 10 May',
        'if an approved tool is unavailable, the work waits; a mistake is reported the same day'],
 cost='5 breaches in 1 quarter followed 6 lines of advice that nobody could apply. '
      '4 named categories beside a screen take 20 seconds to read once.'),

feet=dict(
 title='On Your Feet · Telling a family what the Mission cannot do',
 setting=[
  'A mother has come to the counter about her son, who is in custody and whose case is '
  'going slowly. She asks you to speak to the judge, to arrange a lawyer at the Mission’s '
  'expense, and to make sure he is moved to a better prison.',
  'You cannot do any of the three. She is not unreasonable; she is a frightened woman who '
  'has been told by somebody that consulates can do these things. You have about ninety '
  'seconds, and what you say will be repeated to the rest of the family tonight.'],
 ladder=[('Speak to the judge', 'refuse without sounding indifferent'),
         ('Pay for a lawyer', 'the second refusal, harder than the first'),
         ('You will not help us', 'the turn where refusing becomes abandonment')],
 cap='Three refusals in ninety seconds, and she must still believe you are on her side.',
 turns=[('Turn 1 · Mother', 'Please speak to the judge. One word from you and they will listen.'),
        ('Turn 2 · Mother', 'Then pay for a proper lawyer. We have nothing left.'),
        ('Turn 3 · Mother', 'So you will not help us at all. You are our own country and you will do nothing.')],
 holds=['I cannot speak to the judge, and I will tell you exactly why.',
        'If we could influence a court, the court would not be a court for anybody.',
        'We cannot pay for a lawyer. We can give you the list, and I will explain it with you.',
        'Here is what we will do, and I will write it down for you now.',
        'We will visit him, we will check his treatment, and we will tell you after every visit.',
        'I am not refusing you. I am telling you the truth early, because late is worse.'],
 redline='You must not imply that you could act if you chose to, you must not promise to '
         'try to influence anybody, and you must not let her leave without a written list '
         'of what the Mission will do. Do not say that your hands are tied, because that '
         'suggests somebody else tied them.',
 score=['Refused the first request plainly, with a reason, in one sentence.',
        'Explained the limit as a matter of what a consulate is, not of willingness.',
        'Replaced each refusal with something concrete the Mission will do.',
        'Wrote the undertakings down before she left.',
        'Did not suggest that influence was possible but withheld.'],
 a=[('What do you do with the first request?', 'refuse it plainly, with a reason'),
    ('How do you explain the limit?', 'as what a consulate is, not as unwillingness'),
    ('What follows each refusal?', 'something concrete the Mission will do'),
    ('What must she leave with?', 'a written list of undertakings'),
    ('What must you not imply?', 'that you could act if you chose to'),
    ('Why not say your hands are tied?', 'it suggests somebody else tied them')]),

rev_fig=figs.split('BEFORE YOU PRESS SEND',
                   'Never outside the Mission',
                   ['a name or a date of birth',
                    'a case number',
                    'a hospital, street or station',
                    'anything medical'],
                   'Always available instead',
                   ['the same text with X and Y',
                    'the general legal question',
                    'the approved tool, used freely',
                    'waiting until Thursday']),
rev_fig_cap='Four prohibitions and four remedies, printed where the decision is made.',
rev=dict(
 read=[('How long did the paste take?', ['four seconds', 'four minutes', 'an hour', 'a day'], 0),
       ('What four things were in the text?',
        ['a name, a number, a hospital, a street', 'only legal terms',
         'nothing identifying', 'a photograph'], 0),
       ('What does the officer write?',
        ['a breach report', 'a complaint', 'a cable', 'nothing'], 0),
       ('What is printed beside every screen?',
        ['four categories and the remedy', 'the security policy', 'a password', 'nothing'], 0)],
 listen_text='Four categories never leave the Mission’s own systems: a name, a reference, a '
             'place and a medical fact. Keep the remedy beside the rule. Replace the name '
             'with a letter, or ask the general question without the case.',
 listen=[('Four categories never leave the Mission’s own ____________.', 'systems'),
         ('A name, a reference, a place and a ____________ fact.', 'medical'),
         ('Keep the ____________ beside the rule.', 'remedy'),
         ('Replace the name with a ____________.', 'letter')],
 speak=['Explain four limits of your organisation to your partner, who pushes back each time.',
        'Then list the things you type at a screen without thinking.'],
 write='Write a six-line statement of what may never leave your own systems.',
 vocab=[('The stated edge of assistance is a ____________ of service.', 'boundary'),
        ('Any service outside the permitted list is an ____________ tool.', 'unapproved'),
        ('The record of who did what to a file is an ____________ trail.', 'audit'),
        ('The removal of part of a document is a ____________.', 'redaction')],
 gram=[('He wanted ____________ help. (to)', 'to'),
       ('She avoided ____________ what the limits were. (say)', 'saying'),
       ('We promised ____________ keep it inside. (to)', 'to'),
       ('He admitted ____________ the paragraph. (paste)', 'pasting')]),

found=['Write the four categories that must never leave your systems, and put them by your screen.',
       'Practise saying three of your organisation’s limits out loud, warmly.',
       'Find out what happens at your post when an approved tool is unavailable.',
       'Redact a real paragraph in twenty seconds and see whether the work still gets done.'],
end_line='Use the approved tools freely. Four categories never leave, and the remedy takes twenty seconds.',
end_next='Book 4: Out in the Country')
