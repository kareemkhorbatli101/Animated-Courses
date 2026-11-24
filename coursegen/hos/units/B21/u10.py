# -*- coding: utf-8 -*-
import figs

U = dict(
num=10,
title='A Decision Made in Nine Minutes, Recorded',
gram='reconstructing a decision taken under pressure',
ai='a pressured decision reconstructed into a record with its basis',
strap='CEFR B2 · Grammar: reconstructing a decision taken under pressure · '
      'AI: a pressured decision reconstructed into a record with its basis',
cando=['record what you knew at the time, not what you know now',
       'list the options you considered and rejected',
       'name the risk you accepted knowingly',
       'separate a bad decision from a bad outcome',
       'write a six-line tasking for a decision record'],

hero=('RECORD WHAT YOU KNEW AT TWENTY PAST TWO.',
      ['A decision is judged on the information you had,',
       'but only if you wrote down what that was.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Nine minutes, three options, one accepted risk, and an evening to write it down.',

warm=['What decision have you taken in under ten minutes?',
      'What did you know at the time?',
      'Where is that written down?'],

vocab=[
 ('a decision taken in nine minutes', 'a decision made under real pressure'),
 ('a decision that could have waited an hour', 'a decision whose haste was a choice'),
 ('a record written the same evening', 'a record of what you knew'),
 ('a record written three weeks later', 'a record of what you have since learned'),
 ('the information you actually had', 'the only proper basis for judgement'),
 ('the information you wished you had', 'what makes hindsight unfair'),
 ('an option you considered and rejected', 'evidence that you were deciding'),
 ('an option nobody mentioned at the time', 'the option an inquiry will raise'),
 ('a person who was in the room', 'a witness and a participant'),
 ('a person who should have been', 'an omission to record honestly'),
 ('a risk you accepted knowingly', 'the decision stated as a decision'),
 ('a risk you did not see', 'the gap to admit without defending'),
 ('a decision that was right on the information', 'a defensible decision'),
 ('a decision that was wrong on the information', 'a decision to own plainly'),
 ('an outcome that was bad anyway', 'the thing a good decision cannot prevent'),
 ('a reconstruction that flatters you', 'a record nobody will believe twice'),
 ('a reconstruction you can defend', 'a record with its limits in it'),
 ('a note of who you consulted', 'the trail of a decision taken properly'),
 ('a note of who you could not reach', 'the constraint that shaped the decision'),
 ('a lesson that is actually transferable', 'the finding worth a change')],

read=[
 'At twenty past two you decided to divert ambulances for four hours. You had '
 'nine minutes, two colleagues on the telephone and a bed state that was twenty '
 'minutes old.',
 'Write it down the same evening, because by the end of the week you will know '
 'things you did not know at twenty past two, and your memory will quietly fold '
 'them into the decision.',
 'Record four things: what you knew, what you did not know and had tried to find '
 'out, the options you considered and why you rejected them, and the risk you '
 'accepted knowingly.',
 'The last of those is the one people omit. Diverting moved risk to another '
 'hospital and to the patients in those ambulances, and writing that down is the '
 'difference between a decision and an accident.',
 'And separate the decision from the outcome. If the outcome was bad and the '
 'decision was right on what you had, say both; if the decision was wrong on what '
 'you had, say that, and say it before anybody else does.'],

dp1=('Decision records', 'Governance guidance commonly recommends recording '
     'decisions taken under pressure contemporaneously, including the information '
     'available, the options considered, the risks accepted and the people '
     'consulted, and assessing decisions against the information available at the '
     'time. Requirements are set by the organisation’s own policy.',
     'Source: general corporate governance guidance, 2025–2026.'),

c_a=[('What was decided, and in how long?', 'to divert ambulances for four hours, in nine minutes'),
     ('What was available?', 'two colleagues on the telephone and a bed state twenty minutes old'),
     ('When is it written?', 'the same evening'),
     ('What four things are recorded?', 'what you knew, what you did not, the options, and the risk accepted'),
     ('Which is omitted most often?', 'the risk accepted knowingly'),
     ('What must be separated?', 'the decision from the outcome')],

c_b=[('The decision took nine minutes.', 'T'),
     ('The bed state was current.', 'F'),
     ('The record is written the same evening.', 'T'),
     ('A bad outcome means a bad decision.', 'F'),
     ('The options rejected are recorded.', 'T'),
     ('Diversion moved risk elsewhere.', 'T')],

c_c=[('____________ twenty past two I decided to divert.', 'At'),
     ('I ____________ a bed state twenty minutes old.', 'had'),
     ('I ____________ not reach the medical director.', 'could'),
     ('I considered three options and ____________ two.', 'rejected'),
     ('I ____________ the risk to the receiving hospital knowingly.', 'accepted'),
     ('The outcome ____________ bad; the decision was defensible.', 'was')],

c_d=[('Write the record ( the same evening / when the review asks ).', ['the same evening', 'when the review asks'], 0),
     ('Record ( what you knew / what you have since learned ).',
      ['what you knew', 'what you have since learned'], 0),
     ('List ( the options rejected / the option you took ).',
      ['the options rejected', 'the option you took'], 0),
     ('Name ( the risk you accepted / the risk that materialised ).',
      ['the risk you accepted', 'the risk that materialised'], 0),
     ('Separate ( decision from outcome / fact from opinion ).',
      ['decision from outcome', 'fact from opinion'], 0)],

c_e=('What you knew, what you could not find out, an option rejected or a risk '
     'accepted? Decide what each is.',
     [('a bed state twenty minutes old', 'what you knew'),
      ('the medical director did not answer', 'what you could not find out'),
      ('opening the day unit overnight', 'an option rejected'),
      ('the receiving hospital would take four extra ambulances', 'a risk accepted'),
      ('two colleagues on the telephone', 'what you knew'),
      ('patients in diverted ambulances travelling further', 'a risk accepted')],
     ['what you knew', 'what you could not find out', 'an option rejected',
      'a risk accepted']),

v_fig_title='SIX WORDS OF A DECISION RECORD',
v_fig=[('clock', 'a decision taken in nine minutes'), ('doc', 'a record written the same evening'),
       ('scale', 'the information you actually had'),
       ('key', 'a risk you accepted knowingly'),
       ('people', 'a note of who you could not reach'),
       ('note', 'a reconstruction you can defend')],
v_fig_cap='Six words for nine minutes and one evening.',

v_a=[('A decision whose haste was a choice is a decision that could have waited an ____________.', 'hour'),
     ('A record of what you have since learned is a record written three weeks ____________.', 'later'),
     ('What makes hindsight unfair is the information you ____________ you had.', 'wished'),
     ('The option an inquiry will raise is an option nobody ____________ at the time.', 'mentioned'),
     ('An omission to record honestly is a person who ____________ have been.', 'should'),
     ('The gap to admit without defending is a risk you did not ____________.', 'see'),
     ('A record nobody will believe twice is a reconstruction that ____________ you.', 'flatters'),
     ('The finding worth a change is a lesson that is actually ____________.', 'transferable')],

v_b=[('An option you considered and rejected is evidence', 'that you were deciding.'),
     ('A risk you accepted knowingly is the decision', 'stated as a decision.'),
     ('An outcome that was bad anyway is the thing', 'a good decision cannot prevent.'),
     ('A note of who you consulted is the trail', 'of a decision taken properly.'),
     ('A reconstruction you can defend is a record', 'with its limits in it.')],

g_title='Grammar: reconstructing a decision taken under pressure',
g_rule=['Open with the time and the decision: at fourteen twenty I decided to '
        'divert ambulances until eighteen hundred. The clock makes everything that '
        'follows a record rather than an argument.',
        'State what you had with I had: I had a bed state timed at fourteen '
        'hundred, two telephone conversations and no view from the medical '
        'director.',
        'State what you could not get with I could not: I could not reach the '
        'medical director, and I decided not to wait. The second clause is the '
        'decision inside the decision.',
        'State the accepted risk with I accepted: I accepted that diversion '
        'transferred risk to Marlowe General and to the patients travelling '
        'further. Never I had no choice, which is almost never true.'],
g_fig=('LOOSE',
       ['The situation that afternoon was extremely challenging.',
        'With hindsight a different approach might have been taken.',
        'Every effort was made to consult appropriately.',
        'The decision was taken in the best interests of patients.'],
       'PRECISE',
       ['At fourteen twenty I decided to divert ambulances until eighteen hundred.',
        'I had a bed state timed at fourteen hundred and could not reach the medical director.',
        'I considered opening the day unit and rejected it because no nursing staff were available.',
        'I accepted that diversion transferred risk to Marlowe General and to patients travelling further.'],
       'four sentences that will not survive a review',
       'four sentences that are a record'),
g_fig_cap='At fourteen twenty I decided. I had. I could not. I accepted.',

g_a=[('____________ fourteen twenty I decided to divert.', 'At'),
     ('____________ eighteen hundred.', 'Until'),
     ('I ____________ a bed state timed at fourteen hundred.', 'had'),
     ('And ____________ not reach the medical director.', 'could'),
     ('I considered opening the day unit and ____________ it.', 'rejected'),
     ('Because no nursing staff ____________ available.', 'were'),
     ('I ____________ that diversion transferred risk.', 'accepted'),
     ('To Marlowe General and to patients travelling ____________.', 'further'),
     ('I ____________ written this the same evening.', 'have')],

g_b=[('( the situation was extremely challenging / at fourteen twenty I decided to divert until eighteen hundred ) — the decision.', ['the situation was extremely challenging', 'at fourteen twenty I decided to divert until eighteen hundred'], 1),
     ('( I had a bed state timed at fourteen hundred / information was limited ) — what you had.',
      ['I had a bed state timed at fourteen hundred', 'information was limited'], 0),
     ('( I could not reach the medical director / every effort was made to consult ) — the constraint.',
      ['I could not reach the medical director', 'every effort was made to consult'], 0),
     ('( I considered opening the day unit and rejected it / alternatives were considered ) — the option.',
      ['I considered opening the day unit and rejected it', 'alternatives were considered'], 0),
     ('( I accepted that risk transferred to Marlowe General / the decision was in patients’ best interests ) — the risk.',
      ['I accepted that risk transferred to Marlowe General', 'the decision was in patients’ best interests'], 0),
     ('( the outcome was bad and the decision was defensible / with hindsight another approach might have been taken ) — the separation.',
      ['the outcome was bad and the decision was defensible', 'with hindsight another approach might have been taken'], 0)],

d1=dict(
 title='Nine minutes, written the same evening',
 fig=(['Nine minutes.', 'Three options.'],
      ['One risk accepted.', 'One evening to write.']),
 cap='Siobhán Carrick and Peter Lindqvist, non-executive director, two days later.',
 lines=[('Peter', 'You diverted for four hours on Tuesday. The review will ask why you did not wait for the medical director.'),
        ('Siobhán', 'Because I could not reach her, and I decided not to wait. Both halves of that are in the record I wrote that evening.'),
        ('Peter', 'Most people write it when the review asks.'),
        ('Siobhán', 'By then they are recording what they have since learned, and they genuinely cannot tell the difference.'),
        ('Peter', 'What is in yours?'),
        ('Siobhán', 'The bed state and its timestamp, the two people I spoke to, the one I could not reach, three options, and the risk I accepted.'),
        ('Peter', 'Which was?'),
        ('Siobhán', 'That four ambulances would travel further, to a hospital that was also full, and that somebody in one of them might come to harm.'),
        ('Peter', 'That is an uncomfortable sentence to have written down.'),
        ('Siobhán', 'It is the sentence that makes it a decision rather than an accident. Without it I was simply overwhelmed and something happened.'),
        ('Peter', 'And if the review finds you were wrong?'),
        ('Siobhán', 'Then it will find that I was wrong on the information I had, which is a finding I can live with, and the record will let them make it properly.')],
 a=[('Why did Siobhán not wait?', 'she could not reach the medical director and decided not to wait'),
    ('What is wrong with writing later?', 'you record what you have since learned without noticing'),
    ('What is in the record?', 'the bed state with its timestamp, who she spoke to, who she could not reach, three options and the risk accepted'),
    ('What was the risk accepted?', 'that four ambulances would travel further to a hospital also full'),
    ('What does that sentence make it?', 'a decision rather than an accident')],
 b=[('I ____________ not reach her.', 'could'),
    ('Recording what they have ____________ learned.', 'since'),
    ('The bed state and its ____________.', 'timestamp'),
    ('Wrong on the information I ____________.', 'had')]),

d2=dict(
 title='The record written in March',
 fig=(['Decision in January.', 'Record in March.'],
      ['Options added.', 'Nobody believed it.']),
 cap='Siobhán Carrick and Dr Leila Rahman, medical director.',
 lines=[('Leila', 'The January decision record was written on the eleventh of March, after the investigation began.'),
        ('Siobhán', 'And it lists five options considered, one of which nobody in that room has any memory of discussing.'),
        ('Leila', 'He may genuinely remember considering it.'),
        ('Siobhán', 'He may. He read about it in February in somebody else’s report, and by March it was a memory.'),
        ('Leila', 'That is a serious thing to say about a colleague.'),
        ('Siobhán', 'It is a universal thing to say about memory, which is why we write records on the day and not in March.'),
        ('Leila', 'The investigation has treated the whole record as unreliable.'),
        ('Siobhán', 'Including the four options he certainly did consider, which is the cost of the fifth.'),
        ('Leila', 'So what do we do about January?'),
        ('Siobhán', 'He writes a second note saying when it was written and why, and the investigation weighs it accordingly.'),
        ('Leila', 'And in future?'),
        ('Siobhán', 'A decision above a stated threshold is recorded before the end of the shift, in four headings, or it is recorded as not having been recorded.')],
 unresolved=True,
 a=[('When was the January record written?', 'on the eleventh of March'),
    ('What does it list?', 'five options, one of which nobody remembers discussing'),
    ('Where had he read about that option?', 'in somebody else’s report in February'),
    ('What has the investigation done?', 'treated the whole record as unreliable'),
    ('What is the new rule?', 'a decision above a threshold is recorded before the end of the shift')],
 b=[('Written on the ____________ of March.', 'eleventh'),
    ('By March it was a ____________.', 'memory'),
    ('The cost of the ____________.', 'fifth'),
    ('Before the end of the ____________.', 'shift')]),

speak=[('At what time',
        ['Your partner describes six pressured decisions.',
         'Record each as time, decision, what you had, what you could not get.',
         'Three each, then swap.']),
       ('The risk I accepted',
        ['Your partner gives you six decisions.',
         'Name the risk knowingly accepted in each.',
         'Three each, then swap.']),
       ('Decision or outcome',
        ['Your partner describes six bad outcomes.',
         'Say whether the decision was defensible on what was known.',
         'Three each, then swap.'])],

ext_title='A pressured decision reconstructed into a record with its basis',
ext_fig=figs.datatable('WHAT THE RECORD CARRIES',
                       ['Line', 'Content'],
                       [['the decision', 'the time and what was decided'],
                        ['what you had', 'information, with timestamps'],
                        ['what you could not get', 'who you could not reach'],
                        ['options', 'considered and rejected, with reasons'],
                        ['the accepted risk', 'stated as accepted'],
                        ['when written', 'the date and hour of the record itself']]),
ext_fig_cap='Six lines before the end of the shift, and the sixth dates the other five.',
ext=[
 'A pressured decision reconstructed into a record with its basis lets a decision '
 'be judged on what was known rather than on what happened.',
 'Give it the decision with its time, the information you had with the timestamp '
 'of each item, the people you reached and could not reach, and the options you '
 'considered.',
 'Ask for every option to be recorded with the reason it was rejected, since an '
 'unrecorded option becomes, in an inquiry, an option nobody thought of.',
 'Ask for the risk you accepted to be stated as accepted rather than as '
 'unavoidable, because I had no choice is almost never true and never survives '
 'examination.',
 'Ask for the record to carry the date and hour at which it was written, which is '
 'the single fact that determines how much weight it can bear.',
 'What it cannot do is remember for you. Anything not written before the end of '
 'the shift is a reconstruction, and after three weeks it is a reconstruction that '
 'flatters you without your knowing.'],

dp2=('Memory and records', 'Governance and human factors literature commonly '
     'reports that accounts written after an outcome is known incorporate '
     'subsequently acquired information, and that contemporaneous records are '
     'given greater weight in investigations and inquiries.',
     'Source: general corporate governance literature, 2025–2026.'),

e_a=[('What does the record allow?', 'a decision to be judged on what was known'),
     ('What four things are given to it?', 'the decision with its time, the information with timestamps, who was reached, and the options'),
     ('Why record a rejected option?', 'because an unrecorded option becomes one nobody thought of'),
     ('How is the risk stated?', 'as accepted, rather than as unavoidable'),
     ('What determines the record’s weight?', 'the date and hour it was written')],
e_b=[('Rejected options carry their reasons.', 'T'),
     ('The accepted risk is stated as accepted.', 'T'),
     ('It remembers for you.', 'F'),
     ('The record carries the time it was written.', 'T'),
     ('Later accounts absorb later information.', 'T'),
     ('Contemporaneous records carry less weight.', 'F')],

w_model='Purpose: so that a decision I take in nine minutes can be judged on what '
       'I knew at the time rather than on what happened afterwards. Scope: '
       'operational decisions I take or authorise, including diversion, escalation '
       'and closure; clinical decisions are recorded by the clinician who takes '
       'them, and nothing in my record characterises anybody else’s clinical '
       'judgement. Inputs: the time of the decision, every piece of information I '
       'had with the time it was produced, the people I consulted and those I '
       'could not reach, the options I considered, and the risks I knowingly '
       'accepted. Criteria: the time and the decision in the first line; '
       'information listed with timestamps; whoever I could not reach named, with '
       'whether I decided to wait; every option recorded with the reason for '
       'rejection; the accepted risk stated as accepted and never as unavoidable; '
       'and the date and hour of writing recorded. Done: written before the end '
       'of the shift in which the decision was taken, and filed unaltered. '
       'Fallback: where I cannot write it before the end of the shift, I record '
       'that fact and the date I did write it, and I accept that it carries less '
       'weight.',
w_fig=figs.spec_card('SIX LINES FOR A DECISION RECORD',
                     [('Purpose', 'judged on what I knew, not what happened'),
                      ('Scope', 'operational decisions; not clinical judgements'),
                      ('Inputs', 'time, information with timestamps, people, options'),
                      ('Criteria', 'time first, options with reasons, risk as accepted'),
                      ('Done', 'before the end of the shift, filed unaltered'),
                      ('Fallback', 'later: say when, and accept the lesser weight')]),
w_fig_cap='Six lines, and the sixth one is the honest price of a late record.',
w_task='Write a six-line tasking for a decision record.',
w_steps=['Line 1: say what the record must make possible.',
         'Line 2: say which decisions are yours, and whose the others are.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the record must contain and in what order.',
         'Line 5: say when it is written and how it is kept.',
         'Line 6: say what you do when you cannot write it in time.'],
w_bank=['Purpose: so that a decision I take in nine minutes can be judged on what I knew at the time rather than on what happened afterwards',
        'Scope: operational decisions I take or authorise, including diversion, escalation and closure; clinical decisions are recorded by the clinician who takes them',
        'Inputs: the time of the decision, every piece of information I had with the time it was produced, the people I consulted and could not reach, the options I considered, and the risks I knowingly accepted',
        'Criteria: the time and the decision in the first line; information with timestamps; whoever I could not reach named with whether I chose to wait; every option with its reason for rejection; the accepted risk stated as accepted; the date and hour of writing recorded',
        'Done: written before the end of the shift in which the decision was taken, and filed unaltered',
        'Fallback: where I cannot write it before the end of the shift, I record that fact and the date I did write it, and I accept that it carries less weight'],
w_check=['Is the time of the decision first?',
         'Has every item of information a timestamp?',
         'Is every rejected option reasoned?',
         'Is the risk stated as accepted?'],

t_title='A pressured decision reconstructed into a record with its basis',
t_fig=figs.split('NINE MINUTES AND ONE EVENING',
                 'It can assemble',
                 ['the time and the decision',
                  'information with timestamps',
                  'options with their reasons',
                  'the accepted risk'],
                 'It must not supply',
                 ['a memory you do not have',
                  'an option you did not consider',
                  'a justification after the event',
                  'the weight a late record lacks']),
t_fig_cap='It assembles the record. Writing it tonight is what gives it weight.',
t_body=[
 'Give it the time of the decision, the information with its timestamps, the '
 'people reached and not reached, and the options.',
 'A pressured decision reconstructed into a record with its basis puts the time '
 'and the decision in the first line.',
 'Then ask for the accepted risk, stated as accepted.'],
t_say=[('At fourteen twenty: ', 'I decided to divert until eighteen hundred.'),
       ('I had: ', 'A bed state timed at fourteen hundred.'),
       ('I accepted: ', 'Risk transferred to Marlowe General.')],
t_bound='It cannot remember for you, and after three weeks it will help you write '
        'a record that flatters you without your noticing.',
t_a=[('Give it the ____________ of the decision.', 'time'),
     ('And the information with its ____________.', 'timestamps'),
     ('And the people reached and not ____________.', 'reached'),
     ('Put the time and the decision in the ____________ line.', 'first'),
     ('And every option with its ____________.', 'reason'),
     ('And the risk stated as ____________.', 'accepted')],
t_b_rubric='Say what the decision record should do with each item.',
t_b=[('“the situation was extremely challenging”', 'give the time and the decision'),
     ('“information was limited”', 'list what you had, with timestamps'),
     ('“I had no choice”', 'state the risk you accepted'),
     ('a record written three weeks later', 'record the date of writing and the lesser weight')],

case=dict(
 title='The Decision Room · The five options remembered in March',
 brief=[
  'A hospital required decision records for diversions and escalation closures '
  'but set no deadline for writing them.',
  'Over three years, 54 such decisions were recorded. 31 records were written more '
  'than a fortnight after the decision. An independent review of 12 of those 31 '
  'found that 9 referred to information that had not been available at the time, '
  'and 4 listed options that other participants did not recall being discussed. '
  'In two investigations the entire record was set aside as unreliable.',
  'A requirement to record before the end of the shift was introduced, with a '
  'four-heading form. Records written within the shift rose to 49 of 52, and no '
  'record was set aside.'],
 exhibit=figs.datatable('THREE YEARS OF DECISION RECORDS',
                        ['Item', 'Before / After'],
                        [['decisions recorded', '54 / 52'],
                         ['records written within the shift', '9 / 49'],
                         ['records written over a fortnight later', '31 / 1'],
                         ['records citing later information', '9 of 12 reviewed / 0'],
                         ['records set aside as unreliable', '2 / 0'],
                         ['records naming an accepted risk', '14 / 48']]),
 exhibit_cap='The same decisions, written down while they were still what happened.',
 exhibit_note='Four records listed options that nobody else in the room '
              'remembered. In each case the manager had read about the option in '
              'a later report and remembered it as a thought.',
 voices=[('A site manager', 'about writing within the shift',
          'At the end of a shift like that I can barely stand up. Twenty minutes of writing is not reasonable.'),
         ('Siobhán Carrick', 'deputy chief executive',
          'Two records were set aside entirely, which left those managers with no account of their own decisions.'),
         ('An investigator', 'about late records',
          'A record written after the outcome is known tells me about the outcome, not about the decision.')],
 steps=[('Find it', 'How many records were written late?'),
        ('Compare it', 'Late records against records citing later information.'),
        ('Infer it', 'Why did late records fail?'),
        ('Weigh it', 'Twenty minutes at the end of a shift against two records set aside.'),
        ('Decide', 'When must a decision be recorded?')],
 analysis=[('Find it. How many?', '31 of 54'),
           ('Compare it. How many cited later information?', '9 of the 12 reviewed'),
           ('Infer it. Why did they fail?', 'because memory absorbs what you learn afterwards'),
           ('Weigh it. What was traded?', 'twenty minutes for two managers left with no account of their own decisions'),
           ('Decide. When recorded?', 'before the end of the shift in which it was taken')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say when a decision is recorded.',
                 'Say what the record contains.',
                 'Say how the risk is expressed.',
                 'Say what happens when the record is late.'],
 bank=['Every operational decision of a kind specified in the policy is recorded before the end of the shift in which it was taken.',
       'Every record states the time of the decision, the information available with the time each item was produced, the people consulted and those who could not be reached, and every option considered with the reason it was rejected.',
       'Every risk knowingly accepted is recorded as having been accepted, and no record states that there was no alternative.',
       'A record written after the shift states the date and hour on which it was written, and is treated as carrying less weight than a contemporaneous record.'],
 outcome='The hospital adopts the four lines. Records written within the shift '
         'rise from nine to forty-nine of fifty-two, records citing information '
         'not then available fall to none, records naming an accepted risk rise '
         'from fourteen to forty-eight, and no record is set aside as unreliable.',
 outcome_q=[('What happened to records written within the shift?', 'they rose from nine to forty-nine of fifty-two'),
            ('What happened to records citing later information?', 'there were none'),
            ('What happened to records naming an accepted risk?', 'they rose from fourteen to forty-eight'),
            ('What happened to records set aside?', 'there were none'),
            ('Over what period?', 'three years')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · The situation was extremely challenging',
 task=['This was the record of a decision to divert ambulances, written five weeks '
       'afterwards.',
       'This is what it said.'],
 draft=['The situation that afternoon was extremely challenging.',
        'Information available at the time was necessarily limited.',
        'Every effort was made to consult appropriately with colleagues.',
        'A number of alternative approaches were carefully considered.',
        'The decision was taken in the best interests of patients.',
        'With hindsight a slightly different approach might have been possible.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines about a decision, with no time, no information and no risk in them.',
 asked=['extremely challenging', 'a number of alternative approaches',
        'in the best interests of patients'],
 back=['31 of 54 records written late',
       '9 of 12 citing later information', '2 records set aside'],
 gap='Nobody could tell when the decision was taken, what was known, who was consulted, which options were rejected, or what risk was accepted.',
 back_cap='Six lines that an investigator will read as being about the outcome.',
 back_note='“In the best interests of patients” appears in forty-one of '
           'fifty-four records and distinguishes none of them.',
 diagnosis=[('“extremely challenging”', 'unstated criterion'),
            ('“necessarily limited”', 'unstated criterion'),
            ('“a number of alternative approaches”', 'unbounded quantity'),
            ('“every effort”', 'unbounded quantity'),
            ('“in the best interests of patients”', 'hidden assumption'),
            ('“with hindsight”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines as a record written the same evening.',
 scaffold=['what the record must make possible',
           'which decisions are yours, and whose the others are',
           'what you are giving it',
           'what the record must contain and in what order',
           'when it is written and how it is kept',
           'what you do when you cannot write it in time'],
 bank=['Purpose: so that a decision I take in nine minutes can be judged on what I knew at the time rather than on what happened afterwards',
       'Scope: operational decisions I take or authorise, including diversion, escalation and closure; clinical decisions are recorded by the clinician who takes them, and nothing in my record characterises anybody else’s clinical judgement',
       'Inputs: the time of the decision, every piece of information I had with the time it was produced, the people I consulted and those I could not reach, the options I considered, and the risks I knowingly accepted',
       'Criteria: the time and the decision in the first line; information listed with timestamps; whoever I could not reach named, with whether I decided to wait; every option recorded with the reason for rejection; the accepted risk stated as accepted and never as unavoidable; and the date and hour of writing recorded',
       'Done: written before the end of the shift in which the decision was taken, and filed unaltered',
       'Fallback: where I cannot write it before the end of the shift, I record that fact and the date I did write it, and I accept that it carries less weight'],
 check=['Is the time of the decision given?',
        'Are the information items timestamped?',
        'Are rejected options reasoned?',
        'Is the accepted risk named?'],
 model=['so that a decision I take in nine minutes can be judged on what I knew at the time rather than on what happened afterwards',
        'operational decisions I take or authorise, including diversion, escalation and closure; clinical decisions are recorded by the clinician who takes them, and nothing in my record characterises anybody else’s clinical judgement',
        'the time of the decision, every piece of information I had with the time it was produced, the people I consulted and those I could not reach, the options I considered, and the risks I knowingly accepted',
        'the time and the decision in the first line; information listed with timestamps; whoever I could not reach named, with whether I decided to wait; every option recorded with the reason for rejection; the accepted risk stated as accepted and never as unavoidable; and the date and hour of writing recorded',
        'written before the end of the shift in which the decision was taken, and filed unaltered',
        'where I cannot write it before the end of the shift, I record that fact and the date I did write it, and I accept that it carries less weight'],
 cost='31 of 54 records written late, 9 of 12 citing later information, and 2 set aside entirely.'),

lang=dict(
 title='The Unwelcome Number · Telling a manager his record cannot be relied on',
 setting=[
  'A site manager wrote his January decision record in March, after the '
  'investigation began, and it lists an option nobody else recalls discussing.',
  'Siobhán has to tell him that the whole record is now of little use, without '
  'suggesting that he invented anything.'],
 ladder=[('A manager who recorded in good faith', 'and a memory formed in February'),
         ('Five options', 'one of which nobody else recalls'),
         ('Either defend the record', 'or say what it is worth and why')],
 cap='One decision in January, one record in March, five options, four believed.',
 turns=[('Turn 1 · Siobhán', 'The investigation has set your January record aside, because it was written on the eleventh of March.'),
        ('Turn 2 · Manager', 'Everything in it is true. I remember that afternoon better than I remember yesterday.'),
        ('Turn 3 · Siobhán', 'I believe you, and one of the five options you list appeared first in a report you read in February.')],
 holds=['Nobody thinks you invented it; that is how memory works in everybody, including me.',
        'Nine of twelve late records we reviewed contained information that was not available at the time.',
        'The cost is that the four options you certainly did consider have gone with the fifth.',
        'You now write a short note saying when the record was written and why, and nothing else.',
        'From Monday the form is four headings and takes about eleven minutes before the end of the shift.',
        'And if eleven minutes at the end of a shift like January’s is genuinely impossible, tell me and I shall find somebody to write it with you.'],
 redline='Never write a decision record after an outcome is known and present it '
         'as contemporaneous, and never let a colleague be called dishonest for '
         'how memory works.',
 score=['Gave the reason it was set aside in the first sentence.',
        'Believed the manager explicitly.',
        'Gave the review proportion.',
        'Named the real cost to him.',
        'Offered practical help with the new form.'],
 a=[('When was the record written?', 'on the eleventh of March'),
    ('What has the investigation done?', 'set it aside'),
    ('Where did the fifth option come from?', 'a report he read in February'),
    ('What proportion of late records had this problem?', 'nine of twelve reviewed'),
    ('What does the new form take?', 'about eleven minutes before the end of the shift'),
    ('What is the redline?', 'never present a later record as contemporaneous')]),

rev_fig=figs.split('A DECISION RECORD',
                   'Say',
                   ['at fourteen twenty I decided to divert until eighteen hundred',
                    'I had a bed state timed at fourteen hundred',
                    'I could not reach the medical director and chose not to wait',
                    'I accepted that risk transferred to Marlowe General'],
                   'Never say',
                   ['the situation was extremely challenging',
                    'information was necessarily limited',
                    'every effort was made to consult',
                    'the decision was in patients’ best interests']),
rev_fig_cap='Four sentences that are a record, and four that are a defence.',
rev=dict(
 read=[('How long did the decision take?',
        ['nine minutes', 'an hour', 'four hours', 'twenty minutes'], 0),
       ('When is the record written?',
        ['the same evening', 'when the review asks',
         'within a fortnight', 'in March'], 0),
       ('Which element is most often omitted?',
        ['the risk accepted knowingly', 'the time of the decision',
         'the people consulted', 'the options'], 0),
       ('What must be separated?',
        ['the decision from the outcome', 'fact from opinion',
         'clinical from operational', 'cause from effect'], 0)],
 listen_text='Give it the time of the decision, the information with its '
             'timestamps, the people reached and not reached, and the options. Put '
             'the time first.',
 listen=[('Give it the ____________ of the decision.', 'time'),
         ('And the information with its ____________.', 'timestamps'),
         ('And the people reached and not ____________.', 'reached'),
         ('Put the time and the decision in the ____________ line.', 'first')],
 speak=['Record six pressured decisions as time, decision and basis.',
        'Then name the risk accepted in each.'],
 write='Write a six-line tasking for a decision record.',
 vocab=[('A decision made under real pressure is a decision taken in nine ____________.', 'minutes'),
        ('The only proper basis for judgement is the information you actually ____________.', 'had'),
        ('A witness and a participant is a person who was in the ____________.', 'room'),
        ('A decision to own plainly is a decision that was ____________ on the information.', 'wrong')],
 gram=[('I ____________ written this the same evening.', 'have'),
       ('To Marlowe General and to patients travelling ____________.', 'further'),
       ('Because no nursing staff ____________ available.', 'were'),
       ('____________ eighteen hundred.', 'Until')]),

found=['Record the time and the decision in the first line.',
       'List what you knew, with the timestamp of each item.',
       'Record every option you rejected, and why.',
       'State the risk you accepted as accepted, and write it tonight.'],
end_line='Four records listed options nobody else remembered, and in each case the manager had read about the option in a later report and remembered it as a thought.',
end_next='Book 6 · The Board, the System and the Public')
