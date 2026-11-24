# -*- coding: utf-8 -*-
import figs

U = dict(
num=6,
title='A Public Meeting About a Change',
gram='a public meeting: plain words and a stated limit',
ai='a public explanation drafted in plain words with a stated limit',
strap='CEFR B2 · Grammar: a public meeting: plain words and a stated limit · '
      'AI: a public explanation drafted in plain words with a stated limit',
cando=['explain a change in words the room uses',
       'say what the meeting can and cannot change',
       'answer a hostile question without retreating into policy',
       'write to everybody who came',
       'write a six-line tasking for a public explanation'],

hero=('SAY WHAT THE MEETING CAN STILL CHANGE.',
      ['A room told that everything is open knows it is not.',
       'A room told what is open will work on that.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Ninety people, two hours, and one sentence about what is already decided.',

warm=['When did you last sit in a public meeting?',
      'What did the organisation say it could change?',
      'What did the room believe?'],

vocab=[
 ('a room of ninety people', 'a meeting that must be chaired to be fair'),
 ('a room of nine', 'a meeting that can be a conversation'),
 ('a question shouted from the back', 'a question that still deserves an answer'),
 ('a question written on a card', 'the question from somebody who will not shout'),
 ('a word nobody in the room uses', 'the word that loses a room'),
 ('a word everybody uses', 'the word to use instead'),
 ('a decision that cannot now be reversed', 'the thing to say in the first minute'),
 ('a decision the meeting can still affect', 'the reason to hold the meeting'),
 ('a promise you can keep in public', 'a commitment within your own control'),
 ('a promise you cannot', 'the sentence that will be played back to you'),
 ('a person who has waited two hours to speak', 'somebody owed the time they need'),
 ('a person who speaks for twelve minutes', 'a problem for the chair, not for the room'),
 ('a chair who cuts somebody off', 'a chair who has lost the room'),
 ('a chair who lets a room exhaust itself', 'a chair who has lost the evening'),
 ('a figure the room will check afterwards', 'a figure that must be right'),
 ('a figure nobody can check', 'a figure that will be assumed to be false'),
 ('an answer that admits a limit', 'the answer people remember as honest'),
 ('an answer that sounds like a policy', 'the answer that ends the conversation'),
 ('a note of what was asked', 'the record that makes the letter possible'),
 ('a letter sent to everybody who came', 'the proof that the meeting was not theatre')],

read=[
 'Ninety people are in a school hall because the inpatient unit at Harbourview is '
 'closing, and about sixty of them have used it.',
 'The first minute decides the evening. Say what has been decided and cannot now '
 'be reversed, say what the meeting can still affect, and say which of the two '
 'you are here to discuss.',
 'A room told that everything is still open spends two hours discovering that it '
 'is not, and goes home believing that it was lied to, which it was.',
 'Use the words the room uses. Nobody in a school hall says pathway, '
 'reconfiguration or estate; they say ward, closing and building, and so should '
 'you.',
 'And write to everybody who came, within a week, listing the questions asked and '
 'what has been done about each. The letter is what distinguishes a meeting from '
 'an evening of being shouted at.'],

dp1=('Public engagement', 'Engagement guidance commonly recommends stating what '
     'has been decided and what remains open, using language free of '
     'organisational terminology, recording questions raised, and responding in '
     'writing to attendees. Statutory consultation duties are set by law.',
     'Source: general public engagement guidance, 2025–2026.'),

c_a=[('How many people are in the hall, and how many have used the unit?',
      'ninety, about sixty of whom have used it'),
     ('What does the first minute decide?', 'the evening'),
     ('What three things are said at the start?',
      'what cannot be reversed, what can still be affected, and which is being discussed'),
     ('What happens to a room told everything is open?', 'it goes home believing it was lied to'),
     ('Which words are used?', 'ward, closing and building, not pathway or reconfiguration'),
     ('What is sent within a week?', 'a letter to everybody who came, listing the questions')],

c_b=[('About sixty of the ninety have used the unit.', 'T'),
     ('Everything should be presented as still open.', 'F'),
     ('The words the room uses are used.', 'T'),
     ('A letter follows within a week.', 'T'),
     ('Questions asked are recorded.', 'T'),
     ('“Reconfiguration” is a word for a school hall.', 'F')],

c_c=[('The ward ____________ closing on the thirtieth of June.', 'is'),
     ('That decision ____________ been taken and cannot be reversed.', 'has'),
     ('What this meeting ____________ affect is the transport.', 'can'),
     ('I ____________ write to everybody here within a week.', 'shall'),
     ('I ____________ promise that the bus route will change.', 'cannot'),
     ('Sixty of you ____________ used that ward.', 'have')],

c_d=[('Say in the first minute what ( cannot be reversed / is under review ).', ['cannot be reversed', 'is under review'], 0),
     ('Use ( the words the room uses / the words in the paper ).',
      ['the words the room uses', 'the words in the paper'], 0),
     ('Promise ( what you control / what you hope for ).',
      ['what you control', 'what you hope for'], 0),
     ('Record ( the questions asked / the general mood ).',
      ['the questions asked', 'the general mood'], 0),
     ('Write to ( everybody who came / those who left contact details ).',
      ['everybody who came', 'those who left contact details'], 0)],

c_e=('Decided, still open, a promise you can keep or a word to avoid? Decide what '
     'each is.',
     [('the ward closes on the thirtieth of June', 'decided'),
      ('where the outpatient clinics will be held', 'still open'),
      ('I shall write to everybody here within a week', 'a promise you can keep'),
      ('reconfiguration of the local estate', 'a word to avoid'),
      ('the bus route serving the new site', 'still open'),
      ('pathway redesign', 'a word to avoid')],
     ['decided', 'still open', 'a promise you can keep',
      'a word to avoid']),

v_fig_title='SIX WORDS OF A PUBLIC MEETING',
v_fig=[('people', 'a room of ninety people'), ('key', 'a decision that cannot now be reversed'),
       ('scale', 'a decision the meeting can still affect'),
       ('doc', 'a letter sent to everybody who came'),
       ('clock', 'a person who has waited two hours to speak'),
       ('note', 'an answer that admits a limit')],
v_fig_cap='Six words for ninety people and two hours.',

v_a=[('A meeting that can be a conversation is a room of ____________.', 'nine'),
     ('The question from somebody who will not shout is a question written on a ____________.', 'card'),
     ('The word that loses a room is a word nobody in the room ____________.', 'uses'),
     ('The sentence that will be played back to you is a promise you ____________.', 'cannot'),
     ('A problem for the chair, not for the room, is a person who speaks for ____________ minutes.', 'twelve'),
     ('A figure that will be assumed to be false is a figure nobody can ____________.', 'check'),
     ('The answer that ends the conversation is an answer that sounds like a ____________.', 'policy'),
     ('The record that makes the letter possible is a note of what was ____________.', 'asked')],

v_b=[('A question shouted from the back is a question', 'that still deserves an answer.'),
     ('A chair who cuts somebody off is a chair', 'who has lost the room.'),
     ('A chair who lets a room exhaust itself is a chair', 'who has lost the evening.'),
     ('An answer that admits a limit is the answer', 'people remember as honest.'),
     ('A letter sent to everybody who came is the proof', 'that the meeting was not theatre.')],

g_title='Grammar: a public meeting: plain words and a stated limit',
g_rule=['State the decision in the present continuous, which is both plain and '
        'final: the ward is closing on the thirtieth of June.',
        'State the limit with cannot and the reason: that decision has been taken '
        'by the board and I cannot reverse it this evening.',
        'State what is open with can still: what this meeting can still affect is '
        'the transport, the clinic times and where the equipment goes.',
        'Promise in the first person singular and only within your control: I '
        'shall write to everybody here within a week, with every question and what '
        'has been done about it.'],
g_fig=('LOOSE',
       ['We are here to discuss the reconfiguration of local service provision.',
        'No final decisions have been taken at this stage in the process.',
        'We are keen to hear the views of all our stakeholders this evening.',
        'Feedback will be taken into account as the proposals develop.'],
       'PRECISE',
       ['The ward is closing on the thirtieth of June, and I cannot change that this evening.',
        'What this meeting can still affect is the transport, the clinic times and where the equipment goes.',
        'Sixty of you have used that ward, and I am not going to pretend this is a small thing.',
        'I shall write to everybody here within a week, with every question asked and what has been done about it.'],
       'four sentences that lose a room in ninety seconds',
       'four sentences a room will work with'),
g_fig_cap='Is closing. I cannot. Can still affect. I shall write within a week.',

g_a=[('The ward ____________ closing on the thirtieth of June.', 'is'),
     ('And I ____________ change that this evening.', 'cannot'),
     ('What this meeting ____________ still affect is the transport.', 'can'),
     ('Sixty of you ____________ used that ward.', 'have'),
     ('I am not going to ____________ this is a small thing.', 'pretend'),
     ('I ____________ write to everybody here within a week.', 'shall'),
     ('____________ every question asked.', 'With'),
     ('And what ____________ been done about it.', 'has'),
     ('The decision ____________ taken by the board in March.', 'was')],

g_b=[('( we are here to discuss reconfiguration / the ward is closing on the thirtieth of June ) — the decision.', ['we are here to discuss reconfiguration', 'the ward is closing on the thirtieth of June'], 1),
     ('( I cannot change that this evening / no final decisions have been taken ) — the limit.',
      ['I cannot change that this evening', 'no final decisions have been taken'], 0),
     ('( what this meeting can still affect is the transport / we are keen to hear your views ) — the opening.',
      ['what this meeting can still affect is the transport', 'we are keen to hear your views'], 0),
     ('( I shall write to everybody within a week / feedback will be taken into account ) — the promise.',
      ['I shall write to everybody within a week', 'feedback will be taken into account'], 0),
     ('( sixty of you have used that ward / we understand this is a sensitive matter ) — the acknowledgement.',
      ['sixty of you have used that ward', 'we understand this is a sensitive matter'], 0),
     ('( the ward, closing, the building / the pathway, reconfiguration, the estate ) — the words.',
      ['the ward, closing, the building', 'the pathway, reconfiguration, the estate'], 0)],

d1=dict(
 title='Ninety people and one first minute',
 fig=(['Ninety people.', 'Sixty patients.'],
      ['One decision closed.', 'Three things open.']),
 cap='Margarida Pires and Siobhán Carrick, deputy chief executive, before a public meeting.',
 lines=[('Siobhán', 'The brief says we should avoid giving the impression that the decision is final.'),
        ('Margarida', 'The decision is final. The board took it in March and published the minute.'),
        ('Siobhán', 'Then the room will be angry in the first two minutes rather than the last ten.'),
        ('Margarida', 'Yes, and in the last ten they will be working on the transport, because they will know that the transport is real.'),
        ('Siobhán', 'And if somebody asks whether the campaign can still save the ward?'),
        ('Margarida', 'The answer is no, and that it is not within my power or this meeting’s, and that the route to challenge the board is through the commissioner and I shall give them the address.'),
        ('Siobhán', 'That is handing them a weapon.'),
        ('Margarida', 'It is handing them the truth, which they will find in a fortnight anyway, and finding it themselves is what makes people believe we lied.'),
        ('Siobhán', 'What words are you using?'),
        ('Margarida', 'Ward, closing, building, bus. Not pathway, not reconfiguration, not estate. I have taken four words out of the script that nobody in a school hall has ever said.'),
        ('Siobhán', 'And the letter afterwards?'),
        ('Margarida', 'Within a week, to everybody who signs in, with every question and what has happened to it. The letter is the only thing that makes this evening a meeting rather than a performance.')],
 a=[('When was the decision taken?', 'in March, by the board, with the minute published'),
    ('What will the room work on in the last ten minutes?', 'the transport'),
    ('What is the answer about saving the ward?', 'no, and the route to challenge the board is given'),
    ('Which four words are removed?', 'pathway, reconfiguration, estate and similar terms'),
    ('What makes it a meeting rather than a performance?', 'the letter within a week')],
 b=[('The decision ____________ final.', 'is'),
    ('They will be working on the ____________.', 'transport'),
    ('I shall give them the ____________.', 'address'),
    ('Nobody in a school hall has ever ____________ it.', 'said')]),

d2=dict(
 title='The promise about the bus',
 fig=(['Promised in the hall.', 'Not in our control.'],
      ['Bus unchanged.', 'Trust gone.']),
 cap='Margarida Pires and Amara Nwosu, operations manager, after a previous meeting.',
 lines=[('Amara', 'At the Elmfield meeting somebody promised that the bus route would be extended.'),
        ('Margarida', 'Who promised it?'),
        ('Amara', 'A director, under pressure, at about ten past nine, to a room that had been shouting for an hour.'),
        ('Margarida', 'And the bus route belongs to the county council and a commercial operator.'),
        ('Amara', 'Neither of whom was in the room.'),
        ('Margarida', 'So we made a promise about somebody else’s bus, and eleven months later the route is unchanged and we are liars.'),
        ('Amara', 'He was trying to give them something.'),
        ('Margarida', 'I know, and the instinct is human. The correct sentence was: I cannot change the bus route, and I shall write to the county council this week and send you their reply.'),
        ('Amara', 'That is a weaker thing to say in a hostile room.'),
        ('Margarida', 'It is weaker for ninety seconds and stronger for eleven months, which is the arithmetic of a public meeting.'),
        ('Amara', 'What do we do about it now?'),
        ('Margarida', 'We write to everybody who came, say that the promise should not have been made, say who owns the bus route, and enclose the letter we have sent them.')],
 unresolved=True,
 a=[('What was promised?', 'that the bus route would be extended'),
    ('Who owns the bus route?', 'the county council and a commercial operator'),
    ('How long has the route been unchanged?', 'eleven months'),
    ('What was the correct sentence?', 'that he could not change it, but would write to the council and send the reply'),
    ('What is done now?', 'a letter saying the promise should not have been made, with the letter to the council enclosed')],
 b=[('To a room that had been ____________ for an hour.', 'shouting'),
    ('A promise about somebody else’s ____________.', 'bus'),
    ('Weaker for ninety ____________.', 'seconds'),
    ('Say who ____________ the bus route.', 'owns')]),

speak=[('Decided or open',
        ['Your partner describes six changes.',
         'Say in one sentence each what is closed and what is open.',
         'Three each, then swap.']),
       ('Plain words',
        ['Your partner reads out six organisational sentences.',
         'Rewrite each in the words a school hall uses.',
         'Three each, then swap.']),
       ('I cannot, and I shall',
        ['Your partner demands six things from a hostile room.',
         'Refuse each and offer something you control.',
         'Three each, then swap.'])],

ext_title='A public explanation drafted in plain words with a stated limit',
ext_fig=figs.datatable('WHAT THE EXPLANATION CARRIES',
                       ['Line', 'Content'],
                       [['the decision', 'what is closed, and when it was taken'],
                        ['the limit', 'what cannot be changed this evening'],
                        ['what is open', 'the three things the meeting can affect'],
                        ['the words', 'the room’s vocabulary, not ours'],
                        ['the promise', 'one thing within your control'],
                        ['the follow-up', 'a letter to everybody, within a week']]),
ext_fig_cap='Six lines for the first minute, and the sixth one lasts a year.',
ext=[
 'A public explanation drafted in plain words with a stated limit tells a room in '
 'ninety seconds what it can usefully spend two hours on.',
 'Give it the decision with the date it was taken and by whom, the matters that '
 'genuinely remain open, the organisational vocabulary to be removed, and what '
 'you personally control.',
 'Ask it to replace every word that belongs to the organisation rather than to '
 'the room, and to list the words it has removed so you can check them.',
 'Ask for the limit to be stated in the first minute, with the route by which the '
 'decision can be challenged, since the room will find that route anyway.',
 'Ask for one promise that is entirely within your own control, and for every '
 'other request to be answered with what you will do rather than what you will '
 'achieve.',
 'What it cannot do is stand in front of ninety people at ten past nine and '
 'refuse to promise something about a bus. That is where the evening is won or '
 'lost, and no script survives it unless the person holding it has decided in '
 'advance.'],

dp2=('Engagement meetings', 'Engagement literature commonly reports that '
     'presenting settled decisions as open reduces subsequent trust, that '
     'organisational terminology reduces comprehension in public meetings, and '
     'that written follow-up to attendees is associated with higher confidence in '
     'the process.',
     'Source: general public engagement literature, 2025–2026.'),

e_a=[('What does the explanation tell a room?', 'what it can usefully spend two hours on'),
     ('What four things are given to it?', 'the decision with its date and author, the open matters, the vocabulary to remove, and what you control'),
     ('What is listed for checking?', 'the words it has removed'),
     ('What accompanies the limit?', 'the route by which the decision can be challenged'),
     ('How are other requests answered?', 'with what you will do rather than what you will achieve')],
e_b=[('Organisational words are replaced.', 'T'),
     ('The challenge route is given with the limit.', 'T'),
     ('It refuses the promise about the bus for you.', 'F'),
     ('One promise is entirely within your control.', 'T'),
     ('Presenting settled decisions as open reduces trust.', 'T'),
     ('Written follow-up reduces confidence.', 'F')],

w_model='Purpose: so that ninety people leave knowing what is settled, what they '
       'can still affect, and what I shall personally do. Scope: public '
       'explanation of operational and service change; clinical questions are '
       'answered by a clinician present, anything about an identifiable patient is '
       'declined with its reason, and I make no commitment on behalf of another '
       'organisation. Inputs: the decision with the date it was taken and by '
       'whom, the matters genuinely open, the organisational vocabulary to be '
       'removed, what lies within my own control, and the route by which the '
       'decision may be challenged. Criteria: the decision and its date in the '
       'first minute; the limit stated with the challenge route; the open matters '
       'named as three specific things; every organisational word replaced; one '
       'promise entirely within my control; and no commitment about anything owned '
       'by another body. Done: every question recorded, and a letter sent within '
       'one week to everybody who attended, listing each question and what has '
       'been done. Fallback: where I am pressed to promise something outside my '
       'control, I say that I cannot and that I shall write to whoever owns it and '
       'send the reply.',
w_fig=figs.spec_card('SIX LINES FOR A PUBLIC EXPLANATION',
                     [('Purpose', 'settled, open, and what I shall do'),
                      ('Scope', 'service change; no promises for other bodies'),
                      ('Inputs', 'decision and date, open matters, vocabulary, control'),
                      ('Criteria', 'first minute, challenge route, three open things'),
                      ('Done', 'questions recorded, letter within a week'),
                      ('Fallback', 'pressed: I cannot, and I shall write to whoever owns it')]),
w_fig_cap='Six lines, and the sixth one is weaker for ninety seconds and stronger for a year.',
w_task='Write a six-line tasking for a public explanation.',
w_steps=['Line 1: say what the room must leave knowing.',
         'Line 2: say what you may explain, and what you may not promise.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the first minute must contain.',
         'Line 5: say what is recorded and what follows.',
         'Line 6: say what you do when pressed for a promise you cannot make.'],
w_bank=['Purpose: so that ninety people leave knowing what is settled, what they can still affect, and what I shall personally do',
        'Scope: public explanation of operational and service change; clinical questions are answered by a clinician present and I make no commitment on behalf of another organisation',
        'Inputs: the decision with the date it was taken and by whom, the matters genuinely open, the organisational vocabulary to be removed, what lies within my own control, and the challenge route',
        'Criteria: the decision and its date in the first minute; the limit stated with the challenge route; the open matters named as three specific things; every organisational word replaced; one promise within my control; no commitment about anything owned by another body',
        'Done: every question recorded, and a letter sent within one week to everybody who attended, listing each question and what has been done',
        'Fallback: where I am pressed to promise something outside my control, I say that I cannot and that I shall write to whoever owns it and send the reply'],
w_check=['Is the decision and its date in the first minute?',
         'Is the challenge route given?',
         'Are the open matters three specific things?',
         'Is every promise within your control?'],

t_title='A public explanation drafted in plain words with a stated limit',
t_fig=figs.split('NINETY PEOPLE AND NINETY SECONDS',
                 'It can draft',
                 ['the decision and its date',
                  'the limit and challenge route',
                  'the three open matters',
                  'the plain-word substitutions'],
                 'It must not supply',
                 ['a promise about a bus',
                  'a commitment for another body',
                  'the nerve at ten past nine',
                  'the room’s forgiveness']),
t_fig_cap='It drafts the first minute. Holding the line at ten past nine is yours.',
t_body=[
 'Give it the decision with its date and author, the matters genuinely open, the '
 'vocabulary to remove and what you control.',
 'A public explanation drafted in plain words with a stated limit puts the '
 'decision and its limit in the first minute.',
 'Then ask it to list the organisational words it has removed.'],
t_say=[('The ward is closing: ', 'On the thirtieth of June.'),
       ('I cannot: ', 'Change that this evening.'),
       ('This meeting can affect: ', 'Transport, clinic times, equipment.')],
t_bound='It cannot stand in front of ninety people at ten past nine and refuse to '
        'promise something about a bus it does not own.',
t_a=[('Give it the decision with its ____________.', 'date'),
     ('And the matters genuinely ____________.', 'open'),
     ('And the vocabulary to ____________.', 'remove'),
     ('Put the decision and its ____________ in the first minute.', 'limit'),
     ('And list the ____________ words removed.', 'organisational'),
     ('And one promise within your ____________.', 'control')],
t_b_rubric='Say what the public explanation should do with each item.',
t_b=[('“no final decisions have been taken”', 'state the decision and its date'),
     ('“reconfiguration of local provision”', 'replace it with the room’s words'),
     ('a demand that the bus route change', 'refuse it and offer to write to the owner'),
     ('“feedback will be taken into account”', 'promise a letter within a week')],

case=dict(
 title='The Decision Room · The promise about somebody else’s bus',
 brief=[
  'A hospital held public meetings about service changes at which directors '
  'answered questions without a stated limit on what the meeting could change.',
  'Over four years, 14 public meetings were held. In 9 the organisation presented '
  'a settled decision as still open. In 4 a commitment was made about a service '
  'owned by another body, of which 1 was delivered. A survey of attendees found '
  '71 per cent saying the meeting had not been honest about what was already '
  'decided. Letters followed 3 of the 14 meetings.',
  'A rule was introduced that the decision and its date are stated in the first '
  'minute, that no commitment is made for another body, and that a letter follows '
  'within a week. Attendees saying the meeting was honest about decisions rose to '
  '64 per cent.'],
 exhibit=figs.datatable('FOUR YEARS OF PUBLIC MEETINGS',
                        ['Item', 'Before / After'],
                        [['public meetings held', '14 / 12'],
                         ['settled decisions presented as open', '9 / 0'],
                         ['commitments made for another body', '4 / 0'],
                         ['those commitments delivered', '1 of 4 / n/a'],
                         ['letters sent to attendees', '3 / 12'],
                         ['attendees saying the meeting was honest', '29 per cent / 64']]),
 exhibit_cap='The same decisions, stated at the start, and a letter every time.',
 exhibit_note='Three of four commitments made about other organisations’ services '
              'were never delivered. Each had been made in the last twenty minutes '
              'of a hostile meeting.',
 voices=[('A director', 'about stating the limit',
          'Telling a room in the first minute that the decision is made guarantees that the next two hours are hostile.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Seventy-one per cent of attendees said we had not been honest, and they were describing those nine meetings.'),
         ('A former patient', 'about the bus',
          'They promised the bus would come to the new hospital. It never did. I stopped going to the meetings.')],
 steps=[('Find it', 'How many meetings presented a settled decision as open?'),
        ('Compare it', 'Commitments made against commitments delivered.'),
        ('Infer it', 'Why did the meetings damage trust?'),
        ('Weigh it', 'A calmer first hour against seventy-one per cent.'),
        ('Decide', 'What must be said in the first minute?')],
 analysis=[('Find it. How many?', '9 of 14'),
           ('Compare it. How many delivered?', '1 of 4'),
           ('Infer it. Why the damage?', 'because a room discovers the truth afterwards and concludes it was lied to'),
           ('Weigh it. What was traded?', 'a calmer first hour for seventy-one per cent believing us dishonest'),
           ('Decide. What must be said?', 'the decision, its date, the limit and the challenge route')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what is said in the first minute.',
                 'Say what may not be promised.',
                 'Say what language is used.',
                 'Say what follows the meeting.'],
 bank=['Every public meeting begins by stating what has been decided, when and by whom, and what the meeting can and cannot change.',
       'No commitment is made at a public meeting in respect of a service owned by another organisation, and any such request is answered by an undertaking to write to the body concerned.',
       'Public explanations use the words used by those attending, and organisational terminology is removed before the meeting.',
       'Every attendee who gives contact details receives a letter within one week listing the questions raised and what has been done about each.'],
 outcome='The hospital adopts the four lines. Settled decisions presented as open '
         'fall from nine meetings to none, commitments for other bodies from four '
         'to none, letters to attendees rise from three meetings to twelve, and '
         'attendees saying the meeting was honest about decisions rise from '
         'twenty-nine per cent to sixty-four.',
 outcome_q=[('What happened to decisions presented as open?', 'there were none'),
            ('What happened to commitments for other bodies?', 'there were none'),
            ('What happened to letters?', 'they rose from three meetings to twelve'),
            ('What happened to perceived honesty?', 'it rose from twenty-nine per cent to sixty-four'),
            ('How many commitments about other bodies had been delivered?', 'one of four')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · No final decisions have been taken',
 task=['This was the opening script for a public meeting about a ward closure.',
       'This is what it said.'],
 draft=['We are here this evening to discuss the reconfiguration of local provision.',
        'No final decisions have been taken at this stage in the process.',
        'We are keen to hear the views of all our stakeholders.',
        'A range of options remains under active consideration.',
        'Feedback will of course be taken into account as proposals develop.',
        'We shall continue to engage with the community going forward.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines for a room that already knows the ward is closing.',
 asked=['reconfiguration of local provision', 'a range of options',
        'going forward'],
 back=['9 of 14 meetings presenting settled decisions as open',
       '3 of 4 commitments undelivered', '71 per cent saying it was dishonest'],
 gap='Nobody could tell what had been decided, when, by whom, or what the meeting could still change.',
 back_cap='Six lines that will be remembered as the evening we were lied to.',
 back_note='“No final decisions have been taken” was said four months after the '
           'board had resolved to close the ward and published the minute.',
 diagnosis=[('“reconfiguration of local provision”', 'unscoped set'),
            ('“all our stakeholders”', 'unscoped set'),
            ('“a range of options”', 'hidden assumption'),
            ('“no final decisions”', 'hidden assumption'),
            ('“taken into account”', 'undefined done'),
            ('“going forward”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that the room can use the evening.',
 scaffold=['what the room must leave knowing',
           'what you may explain, and what you may not promise',
           'what you are giving it',
           'what the first minute must contain',
           'what is recorded and what follows',
           'what you do when pressed for a promise you cannot make'],
 bank=['Purpose: so that ninety people leave knowing what is settled, what they can still affect, and what I shall personally do',
       'Scope: public explanation of operational and service change; clinical questions are answered by a clinician present, anything about an identifiable patient is declined with its reason, and I make no commitment on behalf of another organisation',
       'Inputs: the decision with the date it was taken and by whom, the matters genuinely open, the organisational vocabulary to be removed, what lies within my own control, and the route by which the decision may be challenged',
       'Criteria: the decision and its date in the first minute; the limit stated with the challenge route; the open matters named as three specific things; every organisational word replaced; one promise entirely within my control; and no commitment about anything owned by another body',
       'Done: every question recorded, and a letter sent within one week to everybody who attended, listing each question and what has been done',
       'Fallback: where I am pressed to promise something outside my control, I say that I cannot and that I shall write to whoever owns it and send the reply'],
 check=['Is the decision stated with its date?',
        'Is the limit given?',
        'Are three open things named?',
        'Is the language the room’s?'],
 model=['so that ninety people leave knowing what is settled, what they can still affect, and what I shall personally do',
        'public explanation of operational and service change; clinical questions are answered by a clinician present, anything about an identifiable patient is declined with its reason, and I make no commitment on behalf of another organisation',
        'the decision with the date it was taken and by whom, the matters genuinely open, the organisational vocabulary to be removed, what lies within my own control, and the route by which the decision may be challenged',
        'the decision and its date in the first minute; the limit stated with the challenge route; the open matters named as three specific things; every organisational word replaced; one promise entirely within my control; and no commitment about anything owned by another body',
        'every question recorded, and a letter sent within one week to everybody who attended, listing each question and what has been done',
        'where I am pressed to promise something outside my control, I say that I cannot and that I shall write to whoever owns it and send the reply'],
 cost='9 of 14 meetings presenting settled decisions as open, 3 of 4 commitments undelivered, and 71 per cent calling it dishonest.'),

lang=dict(
 title='The Unwelcome Number · Saying in the first minute that the ward is closing',
 setting=[
  'The communications brief advises against presenting the closure as settled. '
  'Margarida intends to say in the first minute that the board decided it in March.',
  'She has to overrule the brief, accept a hostile first hour, and give the room '
  'the route by which it may challenge the board.'],
 ladder=[('A brief protecting the evening', 'and a room that already knows'),
         ('Nine of fourteen meetings', 'presenting settled decisions as open'),
         ('Either keep the room calm', 'or say it and give them the address')],
 cap='Ninety people, ninety seconds, and one decision taken in March.',
 turns=[('Turn 1 · Margarida', 'I shall say in the first minute that the board decided in March to close the ward, and that I cannot change it tonight.'),
        ('Turn 2 · Adviser', 'Then the next two hours will be hostile and nothing useful will be discussed.'),
        ('Turn 3 · Margarida', 'Nine of our last fourteen meetings presented settled decisions as open, and seventy-one per cent of attendees said we had not been honest.')],
 holds=['The room already knows; the minute has been on our website since March.',
        'The last hour will be about transport and clinic times, which is what they can change.',
        'I shall give them the commissioner’s address, because they will find it anyway.',
        'I shall promise one thing only, and it is the letter within a week.',
        'I shall make no promise about the bus, whatever the room does at ten past nine.',
        'And if the evening goes badly and nothing useful is discussed, I shall say so in the board paper and you may say that you advised against it.'],
 redline='Never present a decision that has been taken as though it were still '
         'open, and never promise anything owned by another organisation.',
 score=['Stated what she would say in the first sentence.',
        'Gave the survey figure.',
        'Pointed out that the minute is already public.',
        'Limited her promise to the letter.',
        'Recorded the adviser’s dissent in advance.'],
 a=[('When did the board decide?', 'in March'),
    ('What will Margarida say in the first minute?', 'that the ward is closing and she cannot change it'),
    ('What did seventy-one per cent of attendees say?', 'that the meetings had not been honest'),
    ('What will the last hour be about?', 'transport and clinic times'),
    ('What single promise will she make?', 'the letter within a week'),
    ('What is the redline?', 'never present a taken decision as still open')]),

rev_fig=figs.split('A PUBLIC MEETING',
                   'Say',
                   ['the ward is closing on the thirtieth of June',
                    'I cannot change that this evening',
                    'this meeting can affect transport, clinic times and equipment',
                    'I shall write to everybody here within a week'],
                   'Never say',
                   ['we are here to discuss reconfiguration',
                    'no final decisions have been taken',
                    'we are keen to hear from stakeholders',
                    'feedback will be taken into account']),
rev_fig_cap='Four sentences a room will work with, and four that lose it in ninety seconds.',
rev=dict(
 read=[('How many people are in the hall?',
        ['ninety', 'sixty', 'nine', 'twelve'], 0),
       ('What does the first minute decide?',
        ['the evening', 'the decision', 'the agenda', 'the letter'], 0),
       ('Which words are used?',
        ['ward, closing, building', 'pathway, reconfiguration, estate',
         'provision, stakeholders, engagement', 'options, process, feedback'], 0),
       ('What is sent within a week?',
        ['a letter to everybody who came', 'a press release',
         'a board paper', 'a summary to the commissioner'], 0)],
 listen_text='Give it the decision with its date and author, the matters genuinely '
             'open, the vocabulary to remove and what you control. Put the '
             'decision in the first minute.',
 listen=[('Give it the decision with its ____________.', 'date'),
         ('And the matters genuinely ____________.', 'open'),
         ('And the vocabulary to ____________.', 'remove'),
         ('Put the decision and its ____________ in the first minute.', 'limit')],
 speak=['State what is closed and what is open for six changes.',
        'Then refuse six demands and offer something you control.'],
 write='Write a six-line tasking for a public explanation.',
 vocab=[('A meeting that must be chaired to be fair is a room of ____________ people.', 'ninety'),
        ('The reason to hold the meeting is a decision the meeting can still ____________.', 'affect'),
        ('A commitment within your own control is a promise you can keep in ____________.', 'public'),
        ('Somebody owed the time they need is a person who has waited two hours to ____________.', 'speak')],
 gram=[('The decision ____________ taken by the board in March.', 'was'),
       ('And what ____________ been done about it.', 'has'),
       ('____________ every question asked.', 'With'),
       ('I am not going to ____________ this is a small thing.', 'pretend')]),

found=['Say what has been decided, when, and by whom, in the first minute.',
       'Say what the meeting can still affect, as three specific things.',
       'Use the words the room uses, and remove your own.',
       'Promise only what you control, and write to everybody within a week.'],
end_line='Three of four promises about other organisations’ services were never delivered, and each had been made in the last twenty minutes of a hostile meeting.',
end_next='Next: A Consultation on Closing Something')
