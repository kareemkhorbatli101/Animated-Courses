# -*- coding: utf-8 -*-
import figs

U = dict(
num=9,
title='An Apology From an Organisation',
gram='an organisational apology: what we did, what we are changing',
ai='an organisational apology drafted as act, effect and change',
strap='CEFR B2 · Grammar: an organisational apology: what we did, what we are changing · '
      'AI: an organisational apology drafted as act, effect and change',
cando=['apologise for an act rather than for a feeling',
       'name the effect on a particular person',
       'say what has changed and what has not yet',
       'put a name and a date against every change',
       'write a six-line tasking for an organisational apology'],

hero=('“WE ARE SORRY THAT YOU FEEL” IS NOT AN APOLOGY.',
      ['Apologise for what the organisation did,',
       'to the person it was done to, and name the change.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='One act, one family, two changes made and one still outstanding.',

warm=['What was the last apology you received from an organisation?',
      'What did it apologise for?',
      'What changed afterwards?'],

vocab=[
 ('an apology for an act', 'an apology for something the organisation did'),
 ('an apology for a feeling', 'an apology that transfers the fault to the reader'),
 ('a thing the organisation did', 'the act to be named'),
 ('a thing the organisation failed to do', 'the omission to be named'),
 ('an effect on one person', 'what the act did to a named individual'),
 ('an effect on a family', 'the consequences beyond the patient'),
 ('a word that accepts responsibility', 'we did, we failed, we should have'),
 ('a word that avoids it', 'errors occurred, lessons were learned'),
 ('a change already made', 'a change with a date in the past'),
 ('a change promised but not made', 'a promise you must report honestly'),
 ('a date by which a change will be made', 'the commitment that makes an apology real'),
 ('a person who will own the change', 'the name beside the date'),
 ('an apology issued too early', 'an apology that may be withdrawn'),
 ('an apology issued too late', 'an apology that arrives after the trust has gone'),
 ('an apology somebody has to approve', 'the delay you must plan for'),
 ('an apology lawyers have improved', 'a text with the apology removed from it'),
 ('a sentence a family will read twice', 'the sentence that names the act'),
 ('a sentence that reads as a defence', 'the sentence that undoes the rest'),
 ('a meeting at which it is said aloud', 'the apology that counts'),
 ('a letter that follows the meeting', 'the record the family keeps')],

read=[
 'An apology from an organisation has three parts and nothing else: what we did, '
 'what it did to you, and what we have changed.',
 'The first part must name an act or an omission in the active voice. We did not '
 'check the second pump. We did not tell you for nine days. Not errors occurred '
 'in the escalation process, which has no subject and no verb anybody can own.',
 'The second part must be about a particular person. Your mother spent her last '
 'night in a corridor, and you learned about the drug error from a letter rather '
 'than from a doctor.',
 'The third part separates what has changed from what has not. Two changes are '
 'made and dated; one is promised for March, with a name against it; and one '
 'thing they asked for is not going to happen, and the letter says so.',
 'And it is said aloud before it is written. A letter that arrives before anybody '
 'has sat in a room with a family is a document about the organisation’s process '
 'rather than an apology to a person.'],

dp1=('Apologies', 'Guidance on candour commonly recommends apologising for the '
     'act or omission rather than for distress experienced, identifying the '
     'specific effects, distinguishing completed from planned changes, and giving '
     'the apology in person before confirming it in writing. Statutory duties are '
     'set by law and by the organisation’s own policy.',
     'Source: general healthcare candour guidance, 2025–2026.'),

c_a=[('What three parts does an apology have?', 'what we did, what it did to you, and what we have changed'),
     ('In what voice is the act named?', 'the active voice'),
     ('What is wrong with “errors occurred”?', 'it has no subject and no verb anybody can own'),
     ('What must the second part be about?', 'a particular person'),
     ('What does the third part separate?', 'what has changed from what has not'),
     ('What comes before the letter?', 'the apology said aloud in a room')],

c_b=[('An apology has three parts.', 'T'),
     ('“Errors occurred” names an act.', 'F'),
     ('The effects are specific to a person.', 'T'),
     ('All promised changes may be reported as made.', 'F'),
     ('Something they asked for may be refused in the letter.', 'T'),
     ('The apology is said aloud first.', 'T')],

c_c=[('We ____________ not check the second pump.', 'did'),
     ('We ____________ have told you within a day.', 'should'),
     ('We ____________ not tell you for nine days.', 'did'),
     ('Your mother ____________ her last night in a corridor.', 'spent'),
     ('Two changes ____________ been made.', 'have'),
     ('One ____________ be made by the ninth of March.', 'will')],

c_d=[('Apologise for ( how you feel / what we did ).', ['how you feel', 'what we did'], 1),
     ('Name the effect on ( a particular person / patients generally ).',
      ['a particular person', 'patients generally'], 0),
     ('Separate ( changes made from changes promised / causes from effects ).',
      ['changes made from changes promised', 'causes from effects'], 0),
     ('Put ( a name and a date / an intention ) against a change.',
      ['a name and a date', 'an intention'], 0),
     ('Say it ( aloud first / in writing first ).',
      ['aloud first', 'in writing first'], 0)],

c_e=('An act, an effect, a change made or a change promised? Decide what each is.',
     [('we did not check the second pump', 'an act'),
      ('your mother spent her last night in a corridor', 'an effect'),
      ('both pumps are now checked at every handover, from January', 'a change made'),
      ('the escalation area will close by the ninth of March', 'a change promised'),
      ('we did not tell you for nine days', 'an act'),
      ('you learned of it from a letter rather than a doctor', 'an effect')],
     ['an act', 'an effect', 'a change made', 'a change promised']),

v_fig_title='SIX WORDS OF AN ORGANISATIONAL APOLOGY',
v_fig=[('key', 'a thing the organisation did'), ('people', 'an effect on one person'),
       ('doc', 'a change already made'),
       ('clock', 'a date by which a change will be made'),
       ('scale', 'a word that accepts responsibility'),
       ('note', 'a meeting at which it is said aloud')],
v_fig_cap='Six words for one act, one family and three changes.',

v_a=[('An apology that transfers the fault to the reader is an apology for a ____________.', 'feeling'),
     ('The omission to be named is a thing the organisation failed to ____________.', 'do'),
     ('The consequences beyond the patient is an effect on a ____________.', 'family'),
     ('A promise you must report honestly is a change promised but not ____________.', 'made'),
     ('The name beside the date is a person who will ____________ the change.', 'own'),
     ('An apology that arrives after the trust has gone is an apology issued too ____________.', 'late'),
     ('A text with the apology removed from it is an apology ____________ have improved.', 'lawyers'),
     ('The sentence that undoes the rest is a sentence that reads as a ____________.', 'defence')],

v_b=[('A word that avoids responsibility is errors', 'occurred, lessons were learned.'),
     ('An apology issued too early is an apology', 'that may be withdrawn.'),
     ('An apology somebody has to approve is the delay', 'you must plan for.'),
     ('A sentence a family will read twice is the sentence', 'that names the act.'),
     ('A letter that follows the meeting is the record', 'the family keeps.')],

g_title='Grammar: an organisational apology: what we did, what we are changing',
g_rule=['Name the act with we and a past simple verb: we did not check the second '
        'pump; we did not tell you for nine days. The subject is always we.',
        'Name the omission with we should have: we should have told you within a '
        'day, and we did not. The construction admits the standard and the '
        'failure in one clause.',
        'Name the effect with the person as subject: your mother spent her last '
        'night in a corridor. Not there were capacity pressures that evening, '
        'which describes the hospital rather than her.',
        'Separate made from promised by tense: both pumps are now checked at every '
        'handover; the escalation area will close by the ninth of March, and Amara '
        'Nwosu is responsible for it.'],
g_fig=('LOOSE',
       ['We are sorry that you feel you were not kept informed.',
        'Errors occurred in the escalation process on this occasion.',
        'Lessons have been learned and shared across the organisation.',
        'We are committed to ensuring this does not happen again.'],
       'PRECISE',
       ['We did not tell you for nine days, and we should have told you within one.',
        'Your mother spent her last night in a corridor rather than in a bed.',
        'Both pumps are now checked at every handover; that change was made in January.',
        'The escalation area will close by the ninth of March, and Amara Nwosu is responsible for it.'],
       'four sentences a family will read as a defence',
       'four sentences a family will keep'),
g_fig_cap='We did. We should have. Your mother. Made in January; by the ninth of March.',

g_a=[('We ____________ not tell you for nine days.', 'did'),
     ('We ____________ have told you within one.', 'should'),
     ('Your mother ____________ her last night in a corridor.', 'spent'),
     ('Rather ____________ in a bed.', 'than'),
     ('Both pumps ____________ now checked at every handover.', 'are'),
     ('That change ____________ made in January.', 'was'),
     ('The area ____________ close by the ninth of March.', 'will'),
     ('Amara Nwosu ____________ responsible for it.', 'is'),
     ('One thing you asked for ____________ not going to happen.', 'is')],

g_b=[('( we did not tell you for nine days / errors occurred in the escalation process ) — the act.', ['we did not tell you for nine days', 'errors occurred in the escalation process'], 0),
     ('( we should have told you within one day / communication could have been better ) — the standard.',
      ['we should have told you within one day', 'communication could have been better'], 0),
     ('( your mother spent her last night in a corridor / there were capacity pressures that evening ) — the effect.',
      ['your mother spent her last night in a corridor', 'there were capacity pressures that evening'], 0),
     ('( both pumps are now checked, from January / lessons have been learned ) — the change made.',
      ['both pumps are now checked, from January', 'lessons have been learned'], 0),
     ('( the area will close by the ninth of March, owned by Amara Nwosu / we are committed to improvement ) — the change promised.',
      ['the area will close by the ninth of March, owned by Amara Nwosu', 'we are committed to improvement'], 0),
     ('( one thing you asked for is not going to happen / we shall consider all your suggestions ) — the refusal.',
      ['one thing you asked for is not going to happen', 'we shall consider all your suggestions'], 0)],

d1=dict(
 title='What we did, and what we have changed',
 fig=(['Nine days.', 'One corridor.'],
      ['Two changes made.', 'One refused.']),
 cap='Siobhán Carrick and Dr Leila Rahman, medical director, over a draft letter.',
 lines=[('Leila', 'The draft says we are sorry that the family feel they were not kept informed.'),
        ('Siobhán', 'They were not kept informed. That is not a feeling, it is nine days.'),
        ('Leila', 'Legal prefer the softer form.'),
        ('Siobhán', 'Legal can have every other sentence. The first one says we did not tell you for nine days, and we should have told you within one.'),
        ('Leila', 'And the corridor?'),
        ('Siobhán', 'Her mother spent her last night in a corridor. The daughter has said that twice in two meetings and we have not once written it down.'),
        ('Leila', 'What do we say we have changed?'),
        ('Siobhán', 'Two things that are done, with dates. Both pumps checked at every handover since January, and the notification rule changed in February.'),
        ('Leila', 'And the escalation area?'),
        ('Siobhán', 'Promised for the ninth of March, with Amara’s name against it, and if it slips she hears from me before she reads about it.'),
        ('Leila', 'They also asked for the nurse to be dismissed.'),
        ('Siobhán', 'Which is not going to happen, and the letter says so in one sentence, because a refusal buried in a paragraph is a second injury.')],
 a=[('What does the draft apologise for?', 'that the family feel they were not kept informed'),
    ('What is the fact?', 'they were not told for nine days'),
    ('What has the daughter said twice?', 'that her mother spent her last night in a corridor'),
    ('What two changes are made?', 'both pumps checked since January, and the notification rule changed in February'),
    ('What is refused?', 'the dismissal of the nurse, in one sentence')],
 b=[('That is not a ____________, it is nine days.', 'feeling'),
    ('We have not once written it ____________.', 'down'),
    ('With Amara’s ____________ against it.', 'name'),
    ('A refusal buried in a paragraph is a second ____________.', 'injury')]),

d2=dict(
 title='The apology that was improved',
 fig=(['Draft: we did not.', 'Final: errors occurred.'],
      ['Family complained.', 'Second apology needed.']),
 cap='Siobhán Carrick and Margarida Pires, communications director.',
 lines=[('Margarida', 'The letter that went out is not the letter you signed off.'),
        ('Siobhán', 'Which sentence changed?'),
        ('Margarida', '“We did not check the second pump” became “errors occurred in the checking process”.'),
        ('Siobhán', 'Who made that change?'),
        ('Margarida', 'Nobody will say. It was in the version that came back from the final review.'),
        ('Siobhán', 'Then the final review has rewritten an apology into a description of weather.'),
        ('Margarida', 'The family wrote back within a week asking who had failed to check the pump.'),
        ('Siobhán', 'Which is the question the original sentence answered, and which we shall now answer twice as expensively.'),
        ('Margarida', 'The reviewers were trying to protect the organisation.'),
        ('Siobhán', 'They produced a second complaint and a letter that will be quoted at the inquest. That is not protection.'),
        ('Margarida', 'What do you want for next time?'),
        ('Siobhán', 'That the sentence naming the act is not alterable by anybody except me, and that whoever wants it altered tells me why in person.')],
 unresolved=True,
 a=[('What sentence changed?', '“we did not check the second pump” became “errors occurred in the checking process”'),
    ('Who made the change?', 'nobody will say'),
    ('What did the family ask?', 'who had failed to check the pump'),
    ('What did the reviewers intend?', 'to protect the organisation'),
    ('What does Siobhán want?', 'that the sentence naming the act is alterable only by her, in person')],
 b=[('An apology into a description of ____________.', 'weather'),
    ('The question the original sentence ____________.', 'answered'),
    ('Twice as ____________.', 'expensively'),
    ('Tells me why in ____________.', 'person')]),

speak=[('Act, not feeling',
        ['Your partner reads out six soft apologies.',
         'Rewrite each as what the organisation did.',
         'Three each, then swap.']),
       ('Made or promised',
        ['Your partner gives you six changes.',
         'Say which are made, with dates, and which are promised, with owners.',
         'Three each, then swap.']),
       ('The refusal',
        ['Your partner makes six requests you cannot meet.',
         'Refuse each in one sentence, in a letter of apology.',
         'Three each, then swap.'])],

ext_title='An organisational apology drafted as act, effect and change',
ext_fig=figs.datatable('WHAT THE APOLOGY CARRIES',
                       ['Line', 'Content'],
                       [['the act', 'what we did, in the active voice'],
                        ['the standard', 'what we should have done'],
                        ['the effect', 'on this person, named'],
                        ['changes made', 'with the date of each'],
                        ['changes promised', 'with an owner and a date'],
                        ['the refusal', 'what will not happen, in one sentence']]),
ext_fig_cap='Six lines, and the first one is the one reviewers rewrite.',
ext=[
 'An organisational apology drafted as act, effect and change produces a letter '
 'that answers the question a family is actually asking.',
 'Give it the established facts, the family’s own words about what it did to '
 'them, the changes already made with their dates, the changes planned with '
 'owners, and anything they have asked for that will not happen.',
 'Ask for the act in the active voice with we as the subject, and refuse every '
 'formulation in which an error occurs without anybody having made it.',
 'Ask for the effect to be stated in the family’s own terms, since they have '
 'usually already told you the sentence that matters and nobody has written it '
 'down.',
 'Ask it to separate changes made from changes promised, and to put a name and a '
 'date on every promise, because an apology without a dated change is a '
 'condolence.',
 'What it cannot do is sit in the room and say it. The letter is the record of an '
 'apology, not the apology, and a family that receives the record without the '
 'conversation has been sent a document about us.'],

dp2=('Candour in practice', 'Candour literature commonly reports that apologies '
     'framed as regret for distress rather than for acts are associated with '
     'further complaints, and that changes stated without owners or dates are '
     'frequently not implemented.',
     'Source: general healthcare candour literature, 2025–2026.'),

e_a=[('What does the apology answer?', 'the question the family is actually asking'),
     ('What five things are given to it?', 'the facts, the family’s own words, changes made with dates, changes planned with owners, and what will not happen'),
     ('In what voice is the act stated?', 'the active voice, with we as the subject'),
     ('Why use the family’s own terms?', 'because they have usually already said the sentence that matters'),
     ('What makes a promise real?', 'a name and a date')],
e_b=[('The act is in the active voice.', 'T'),
     ('The effect uses the family’s own terms.', 'T'),
     ('It sits in the room and says it.', 'F'),
     ('Changes promised carry owners and dates.', 'T'),
     ('Regret-for-distress apologies attract further complaints.', 'T'),
     ('Changes without owners are usually implemented.', 'F')],

w_model='Purpose: so that a family receives an apology for what we did rather '
       'than for how they feel, and a change they can hold us to. Scope: '
       'organisational acts and omissions within my authority to acknowledge; '
       'clinical findings come from the completed investigation, individual '
       'conduct is dealt with separately and never discussed in the letter, and '
       'any legal liability is for the legal team to address elsewhere. Inputs: '
       'the established facts from the investigation, the family’s own words about '
       'the effect on them, the changes already made with the date of each, the '
       'changes planned with an owner and a date, and anything they have asked for '
       'that will not happen. Criteria: the act or omission stated in the active '
       'voice with we as subject; what we should have done stated alongside it; '
       'the effect expressed as it affected the named person; changes made '
       'separated from changes promised; every promise carrying a name and a date; '
       'and any refusal given in one sentence of its own. Done: said aloud in a '
       'meeting first, then confirmed in a letter in the same words within five '
       'working days. Fallback: where a promised change slips, the family hears '
       'from me before the date passes, not afterwards.',
w_fig=figs.spec_card('SIX LINES FOR AN APOLOGY',
                     [('Purpose', 'an apology for the act, and a change they can hold'),
                      ('Scope', 'organisational acts; not conduct, not liability'),
                      ('Inputs', 'facts, their words, changes made and planned, refusals'),
                      ('Criteria', 'active voice, named effect, dated promises'),
                      ('Done', 'said aloud first, then the same words in writing'),
                      ('Fallback', 'a slipping promise: they hear before the date')]),
w_fig_cap='Six lines, and the sixth one is the one that makes the fifth believable.',
w_task='Write a six-line tasking for an organisational apology.',
w_steps=['Line 1: say what the family must receive.',
         'Line 2: say what is yours to acknowledge, and what is not.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the apology must state and how.',
         'Line 5: say how it is given and confirmed.',
         'Line 6: say what you do when a promised change slips.'],
w_bank=['Purpose: so that a family receives an apology for what we did rather than for how they feel, and a change they can hold us to',
        'Scope: organisational acts and omissions within my authority to acknowledge; clinical findings come from the investigation, individual conduct is dealt with separately, and legal liability is for the legal team',
        'Inputs: the established facts, the family’s own words about the effect, the changes already made with dates, the changes planned with an owner and a date, and anything they have asked for that will not happen',
        'Criteria: the act stated in the active voice with we as subject; what we should have done stated alongside; the effect as it affected the named person; changes made separated from promised; every promise with a name and a date; any refusal in one sentence of its own',
        'Done: said aloud in a meeting first, then confirmed in a letter in the same words within five working days',
        'Fallback: where a promised change slips, the family hears from me before the date passes, not afterwards'],
w_check=['Is the act in the active voice?',
         'Is the effect about a named person?',
         'Has every promise an owner and a date?',
         'Is any refusal given plainly?'],

t_title='An organisational apology drafted as act, effect and change',
t_fig=figs.split('ONE ACT AND ONE FAMILY',
                 'It can draft',
                 ['the act in the active voice',
                  'the standard we failed',
                  'the effect in their words',
                  'changes made and promised'],
                 'It must not supply',
                 ['the conversation',
                  'a clinical finding',
                  'a judgement on an individual',
                  'a promise without an owner']),
t_fig_cap='It drafts the letter. The letter is the record; the room is the apology.',
t_body=[
 'Give it the established facts, the family’s own words, the changes made with '
 'dates and the changes planned with owners.',
 'An organisational apology drafted as act, effect and change states the act in '
 'the active voice.',
 'Then ask for every refusal in one sentence of its own.'],
t_say=[('We did: ', 'Not tell you for nine days.'),
       ('We should have: ', 'Told you within one.'),
       ('Made in January: ', 'Both pumps checked at every handover.')],
t_bound='It cannot sit in the room and say it, and a family that gets the letter '
        'without the meeting has been sent a document about us.',
t_a=[('Give it the established ____________.', 'facts'),
     ('And the family’s own ____________.', 'words'),
     ('And the changes made with ____________.', 'dates'),
     ('State the act in the ____________ voice.', 'active'),
     ('And the effect as it affected the ____________ person.', 'named'),
     ('And every refusal in one ____________ of its own.', 'sentence')],
t_b_rubric='Say what the apology work should do with each item.',
t_b=[('“we are sorry that you feel”', 'name what we did, in the active voice'),
     ('“errors occurred in the process”', 'give the sentence a subject'),
     ('“lessons have been learned”', 'state the change, its date and its owner'),
     ('a request that cannot be met', 'refuse it in one sentence of its own')],

case=dict(
 title='The Decision Room · The sentence that was softened',
 brief=[
  'A hospital’s apology letters were reviewed by a panel before issue, which '
  'commonly replaced active statements of fault with passive formulations.',
  'Over three years, 34 letters of apology were issued following serious '
  'incidents. In 21 the draft contained an active statement of what the '
  'organisation had done; in 17 of those 21 the issued version did not. 12 '
  'families wrote again asking who had been responsible, and 7 complaints were '
  'reopened.',
  'A rule was introduced that the sentence naming the act may not be altered '
  'except by the executive signing the letter. Letters in which the act was named '
  'rose to 29 of 31, families writing again fell to 2, and no complaint was '
  'reopened.'],
 exhibit=figs.datatable('THREE YEARS OF APOLOGY LETTERS',
                        ['Item', 'Before / After'],
                        [['letters issued', '34 / 31'],
                         ['drafts naming the act', '21 / 29'],
                         ['issued versions naming the act', '4 / 29'],
                         ['families writing again to ask who', '12 / 2'],
                         ['complaints reopened', '7 / 0'],
                         ['changes stated with an owner and a date', '9 / 31']]),
 exhibit_cap='The same facts, with the subject restored to the sentence.',
 exhibit_note='Seventeen of twenty-one drafts had the act removed before issue. '
              'Twelve families then asked the question the original sentence had '
              'already answered.',
 voices=[('A legal adviser', 'about active statements',
          'An admission in a letter is quoted in litigation. My job is to reduce what can be quoted.'),
         ('Siobhán Carrick', 'deputy chief executive',
          'Seven complaints were reopened and every one of them cost more than the admission would have.'),
         ('A bereaved son', 'about the letter he received',
          'Errors occurred. I read it four times. Nobody had done anything, apparently; things had simply occurred.')],
 steps=[('Find it', 'How many drafts named the act?'),
        ('Compare it', 'Drafts against issued versions.'),
        ('Infer it', 'Why did softening produce more work?'),
        ('Weigh it', 'Reducing quotable admissions against seven reopened complaints.'),
        ('Decide', 'Who may alter the sentence naming the act?')],
 analysis=[('Find it. How many?', '21 of 34 drafts'),
           ('Compare it. How many survived?', '4 of the 21'),
           ('Infer it. Why more work?', 'because the question remains and is asked again'),
           ('Weigh it. What was traded?', 'quotable admissions for twelve letters and seven reopened complaints'),
           ('Decide. Who may alter it?', 'only the executive signing the letter')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say how the act is stated.',
                 'Say how the effect is stated.',
                 'Say how changes are stated.',
                 'Say who may alter the sentence naming the act.'],
 bank=['Every apology states what the organisation did or failed to do, in the active voice and with the organisation as the subject of the sentence.',
       'Every apology states the effect on the individual concerned, in terms the patient or family have themselves used.',
       'Changes already made are stated with the date each was made, and changes not yet made are stated with the name of the person responsible and the date by which they will be made.',
       'The sentence naming the act may not be altered after drafting except by the executive director signing the letter, who records the reason for any alteration.'],
 outcome='The hospital adopts the four lines. Issued letters naming the act rise '
         'from four to twenty-nine, families writing again to ask who was '
         'responsible fall from twelve to two, reopened complaints from seven to '
         'none, and changes stated with an owner and a date from nine to '
         'thirty-one.',
 outcome_q=[('What happened to letters naming the act?', 'they rose from four to twenty-nine'),
            ('What happened to families writing again?', 'they fell from twelve to two'),
            ('What happened to reopened complaints?', 'they fell from seven to none'),
            ('What happened to dated changes with owners?', 'they rose from nine to thirty-one'),
            ('Over what period?', 'three years')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Sorry that you feel',
 task=['This was the letter of apology sent to a family after a serious incident.',
       'This is what it said.'],
 draft=['We are sorry that you feel you were not kept fully informed.',
        'Errors occurred in the escalation process on this occasion.',
        'A number of contributory factors have been identified.',
        'Lessons have been learned and shared across the organisation.',
        'We remain committed to ensuring that this does not happen again.',
        'Please do not hesitate to contact us should you wish to discuss.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of apology in which nobody does anything.',
 asked=['sorry that you feel', 'errors occurred',
        'lessons have been learned'],
 back=['17 of 21 drafts had the act removed',
       '12 families wrote again', '7 complaints reopened'],
 gap='Nobody could tell what the organisation did, what it did to this family, what has changed, or who owns what remains.',
 back_cap='Six lines that will be read four times and answered with a question.',
 back_note='“Errors occurred” is a sentence with no subject, which is exactly why '
           'it was chosen and exactly why it failed.',
 diagnosis=[('“a number of contributory factors”', 'unbounded quantity'),
            ('“lessons have been learned”', 'undefined done'),
            ('“committed to ensuring”', 'undefined done'),
            ('“errors occurred”', 'hidden assumption'),
            ('“sorry that you feel”', 'hidden assumption'),
            ('“should you wish to discuss”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that it answers the family’s question.',
 scaffold=['what the family must receive',
           'what is yours to acknowledge, and what is not',
           'what you are giving it',
           'what the apology must state and how',
           'how it is given and confirmed',
           'what you do when a promised change slips'],
 bank=['Purpose: so that a family receives an apology for what we did rather than for how they feel, and a change they can hold us to',
       'Scope: organisational acts and omissions within my authority to acknowledge; clinical findings come from the completed investigation, individual conduct is dealt with separately and never discussed in the letter, and any legal liability is for the legal team to address elsewhere',
       'Inputs: the established facts from the investigation, the family’s own words about the effect on them, the changes already made with the date of each, the changes planned with an owner and a date, and anything they have asked for that will not happen',
       'Criteria: the act or omission stated in the active voice with we as subject; what we should have done stated alongside it; the effect expressed as it affected the named person; changes made separated from changes promised; every promise carrying a name and a date; and any refusal given in one sentence of its own',
       'Done: said aloud in a meeting first, then confirmed in a letter in the same words within five working days',
       'Fallback: where a promised change slips, the family hears from me before the date passes, not afterwards'],
 check=['Does a sentence say what we did?',
        'Is the effect about this family?',
        'Are changes dated and owned?',
        'Is the refusal plain?'],
 model=['so that a family receives an apology for what we did rather than for how they feel, and a change they can hold us to',
        'organisational acts and omissions within my authority to acknowledge; clinical findings come from the completed investigation, individual conduct is dealt with separately and never discussed in the letter, and any legal liability is for the legal team to address elsewhere',
        'the established facts from the investigation, the family’s own words about the effect on them, the changes already made with the date of each, the changes planned with an owner and a date, and anything they have asked for that will not happen',
        'the act or omission stated in the active voice with we as subject; what we should have done stated alongside it; the effect expressed as it affected the named person; changes made separated from changes promised; every promise carrying a name and a date; and any refusal given in one sentence of its own',
        'said aloud in a meeting first, then confirmed in a letter in the same words within five working days',
        'where a promised change slips, the family hears from me before the date passes, not afterwards'],
 cost='17 of 21 drafts stripped of the act, 12 families writing again, and 7 complaints reopened.'),

lang=dict(
 title='The Unwelcome Number · Insisting on the sentence legal want removed',
 setting=[
  'The review panel has replaced “we did not check the second pump” with “errors '
  'occurred in the checking process”. Siobhán intends to restore the original '
  'sentence and sign the letter.',
  'She has to overrule the legal advice, keep the adviser’s confidence, and accept '
  'that the sentence may be quoted against the trust.'],
 ladder=[('An adviser reducing what can be quoted', 'and a family asking who'),
         ('Seventeen of twenty-one', 'drafts with the act removed'),
         ('Either accept the passive', 'or restore the sentence and sign it')],
 cap='One sentence, one subject, and twelve families who asked again.',
 turns=[('Turn 1 · Siobhán', 'The letter will say that we did not check the second pump, and I shall sign it.'),
        ('Turn 2 · Legal adviser', 'That sentence will be read out in any claim, and my job is to limit that.'),
        ('Turn 3 · Siobhán', 'It will be read out either way, because the investigation says it in the same words.')],
 holds=['Twelve families wrote back asking who had failed to check, and seven complaints were reopened.',
        'Each reopening cost more management and legal time than the admission would have.',
        'Your advice is right about the rest of the letter, and I shall take it there.',
        'The sentence names the organisation, not the nurse, and the letter says nothing about her.',
        'I shall record that I restored the sentence against your advice, with your reasons.',
        'And if a claim turns on this sentence rather than on the investigation, I shall say at the board that the decision was mine.'],
 redline='Never remove the subject from the sentence that names what the '
         'organisation did, and never let a family have to ask who.',
 score=['Stated the decision and the signature in the first sentence.',
        'Met the litigation point with the investigation’s own wording.',
        'Gave the reopening figures.',
        'Protected the individual from the letter.',
        'Recorded the adviser’s dissent.'],
 a=[('What will the letter say?', 'that we did not check the second pump'),
    ('What is the adviser’s objection?', 'that the sentence will be read out in a claim'),
    ('Why is that unavoidable?', 'because the investigation says it in the same words'),
    ('How many families wrote back?', 'twelve, and seven complaints were reopened'),
    ('Who does the sentence name?', 'the organisation, not the nurse'),
    ('What is the redline?', 'never remove the subject from the sentence naming the act')]),

rev_fig=figs.split('AN ORGANISATIONAL APOLOGY',
                   'Say',
                   ['we did not tell you for nine days',
                    'we should have told you within one',
                    'your mother spent her last night in a corridor',
                    'both pumps are checked at every handover, from January'],
                   'Never say',
                   ['we are sorry that you feel',
                    'errors occurred',
                    'lessons have been learned',
                    'committed to ensuring this never happens again']),
rev_fig_cap='Four sentences a family keeps, and four they read as a defence.',
rev=dict(
 read=[('What three parts does an apology have?',
        ['what we did, the effect, and what we have changed',
         'regret, explanation and reassurance',
         'the facts, the cause and the apology',
         'the act, the law and the remedy'], 0),
       ('What is wrong with “errors occurred”?',
        ['it has no subject anybody can own', 'it is too blunt',
         'it names an individual', 'it is legally risky'], 0),
       ('Whose words describe the effect?',
        ['the family’s own', 'the investigator’s',
         'the clinician’s', 'the lawyer’s'], 0),
       ('What makes a promised change real?',
        ['a name and a date', 'a board decision',
         'an action plan', 'a published policy'], 0)],
 listen_text='Give it the established facts, the family’s own words, the changes '
             'made with dates and the changes planned with owners. State the act '
             'in the active voice.',
 listen=[('Give it the established ____________.', 'facts'),
         ('And the family’s own ____________.', 'words'),
         ('And the changes made with ____________.', 'dates'),
         ('State the act in the ____________ voice.', 'active')],
 speak=['Rewrite six soft apologies as statements of what was done.',
        'Then separate six changes into made and promised.'],
 write='Write a six-line tasking for an organisational apology.',
 vocab=[('An apology for something the organisation did is an apology for an ____________.', 'act'),
        ('We did, we failed, we should have, is a word that ____________ responsibility.', 'accepts'),
        ('A change with a date in the past is a change already ____________.', 'made'),
        ('The apology that counts is a meeting at which it is said ____________.', 'aloud')],
 gram=[('One thing you asked for ____________ not going to happen.', 'is'),
       ('Amara Nwosu ____________ responsible for it.', 'is'),
       ('That change ____________ made in January.', 'was'),
       ('Rather ____________ in a bed.', 'than')]),

found=['Apologise for what the organisation did, with we as the subject.',
       'Say what we should have done, in the same breath.',
       'Name the effect on the person, in their own words.',
       'Date every change made, and name an owner for every change promised.'],
end_line='Seventeen of twenty-one drafts had the act removed before issue, and twelve families then asked the question the original sentence had already answered.',
end_next='Next: A Decision Made in Nine Minutes, Recorded')
