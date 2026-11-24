# -*- coding: utf-8 -*-
import figs

U = dict(
num=9,
title='An Estates Problem That Is Clinical',
gram='a fault with a consequence: because of this, we cannot',
ai='an estates fault escalated with its clinical consequence named',
strap='CEFR B1 · Grammar: a fault with a consequence: because of this, we cannot · '
      'AI: an estates fault escalated with its clinical consequence named',
cando=['name the consequence of a fault, not only the fault',
       'have the clinical consequence stated by a clinician',
       'escalate with what cannot happen, and from when',
       'record who has accepted a risk, in writing',
       'write a six-line tasking for an estates escalation'],

hero=('A BROKEN TAP IS NOT A FAULT. IT IS A CLOSED THEATRE.',
      ['Report the fault and you join a queue.',
       'Report the consequence and the queue reorders itself.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='One tap, one theatre, four lists, and a clinician who must say so.',

warm=['What estates fault where you work has a clinical consequence?',
      'Who decides what that consequence is?',
      'Who signs when a risk is accepted?'],

vocab=[
 ('a fault that is only an inconvenience', 'a fault that changes nothing clinical'),
 ('a fault that stops a list', 'a fault with a measurable consequence'),
 ('a fault that closes beds', 'a fault with a capacity consequence'),
 ('a consequence named by a clinician', 'the only clinical consequence you may quote'),
 ('a consequence a manager invented', 'an exaggeration that will be found out'),
 ('a temperature outside a range', 'a measurable breach of a standard'),
 ('a water supply to a theatre', 'a dependency with a clinical effect'),
 ('a ventilation system in an isolation room', 'a system whose failure moves patients'),
 ('a lift that serves a theatre', 'a route with no alternative'),
 ('a repair with a part on order', 'a delay with a delivery date'),
 ('a repair that needs a shutdown', 'a repair needing a planned closure'),
 ('a workaround that is safe', 'an interim measure somebody has assessed'),
 ('a workaround nobody has assessed', 'an interim measure that is a risk'),
 ('a risk accepted in writing', 'a decision with a name against it'),
 ('a risk accepted by nobody', 'a risk that will become somebody’s fault later'),
 ('an escalation to the estates director', 'the route for resources'),
 ('an escalation to the executive on call', 'the route out of hours'),
 ('a thing you must not promise a ward', 'a repair date you do not control'),
 ('a date for the repair', 'what estates have committed to'),
 ('a date for the next update', 'what you can always commit to')],

read=[
 'The hot water supply to theatre three has failed. Reported as a plumbing '
 'fault, it joins a list with a broken door handle on it.',
 'Reported as a consequence, it is a different object: theatre three cannot run '
 'from tomorrow morning, which is four lists and about sixteen patients a week.',
 'But the clinical part of that sentence is not yours. Ask the surgeon or the '
 'theatre matron to state what cannot be done, and quote them by name.',
 'Then say what you need and by when, separating the repair date, which estates '
 'control, from the update date, which you control and can always promise.',
 'And if a risk is to be accepted, get a name against it in writing. A risk '
 'accepted by nobody becomes, six months later, a risk somebody should have '
 'escalated.'],

dp1=('Escalation', 'Estates and safety guidance commonly recommends recording the '
     'consequence of a fault as well as the fault, obtaining clinical '
     'determination of clinical impact, naming the person accepting any residual '
     'risk, and distinguishing committed repair dates from update commitments. '
     'Arrangements are set by the organisation’s own policy.',
     'Source: general healthcare estates guidance, 2025–2026.'),

c_a=[('What has failed?', 'the hot water supply to theatre three'),
     ('What happens if it is reported as a plumbing fault?', 'it joins a list with a broken door handle on it'),
     ('What is the consequence?', 'theatre three cannot run from tomorrow, which is four lists and sixteen patients a week'),
     ('Who states the clinical part?', 'the surgeon or the theatre matron'),
     ('Which two dates are separated?', 'the repair date and the update date'),
     ('What must a risk have?', 'a name against it in writing')],

c_b=[('A fault reported as a consequence is treated differently.', 'T'),
     ('A manager may state the clinical consequence.', 'F'),
     ('The clinician is quoted by name.', 'T'),
     ('The repair date is controlled by the manager.', 'F'),
     ('The update date can always be promised.', 'T'),
     ('An accepted risk carries a name.', 'T')],

c_c=[('____________ of this, theatre three cannot run tomorrow.', 'Because'),
     ('We ____________ run four lists from tomorrow.', 'cannot'),
     ('About sixteen patients ____________ week.', 'a'),
     ('Dr Osei ____________ that the list cannot proceed.', 'states'),
     ('The part is ____________ order until Thursday.', 'on'),
     ('The risk ____________ been accepted by the estates director.', 'has')],

c_d=[('Report ( the fault / the consequence ) when escalating.', ['the fault', 'the consequence'], 1),
     ('Have the clinical consequence stated by ( a clinician / the ward manager ).',
      ['a clinician', 'the ward manager'], 0),
     ('Promise ( the update date / the repair date ).',
      ['the update date', 'the repair date'], 0),
     ('Get ( a name against the risk / a verbal assurance ).',
      ['a name against the risk', 'a verbal assurance'], 0),
     ('Have a workaround ( assessed / improvised ).',
      ['assessed', 'improvised'], 0)],

c_e=('A fault, a consequence, a clinical determination or a risk acceptance? '
     'Decide what each statement is.',
     [('the hot water supply to theatre three has failed', 'a fault'),
      ('four lists cannot run from tomorrow morning', 'a consequence'),
      ('“this list cannot proceed without hot water”, Dr Osei', 'a clinical determination'),
      ('the estates director accepts the risk until Thursday', 'a risk acceptance'),
      ('the ventilation in isolation room two is below range', 'a fault'),
      ('two isolation patients must be moved today', 'a consequence')],
     ['a fault', 'a consequence', 'a clinical determination',
      'a risk acceptance']),

v_fig_title='SIX WORDS OF AN ESTATES ESCALATION',
v_fig=[('key', 'a fault that stops a list'), ('people', 'a consequence named by a clinician'),
       ('scale', 'a temperature outside a range'),
       ('doc', 'a risk accepted in writing'),
       ('clock', 'a date for the next update'),
       ('note', 'a workaround that is safe')],
v_fig_cap='Six words for one tap and four lists.',

v_a=[('A fault that changes nothing clinical is a fault that is only an ____________.', 'inconvenience'),
     ('A fault with a capacity consequence is a fault that ____________ beds.', 'closes'),
     ('An exaggeration that will be found out is a consequence a manager ____________.', 'invented'),
     ('A system whose failure moves patients is a ____________ system in an isolation room.', 'ventilation'),
     ('A route with no alternative is a ____________ that serves a theatre.', 'lift'),
     ('An interim measure that is a risk is a workaround nobody has ____________.', 'assessed'),
     ('A risk that will become somebody’s fault later is a risk accepted by ____________.', 'nobody'),
     ('A repair date you do not control is a thing you must not ____________ a ward.', 'promise')],

v_b=[('A repair with a part on order is a delay', 'with a delivery date.'),
     ('A repair that needs a shutdown is a repair', 'needing a planned closure.'),
     ('An escalation to the executive on call is the route', 'out of hours.'),
     ('A date for the repair is what estates', 'have committed to.'),
     ('A water supply to a theatre is a dependency', 'with a clinical effect.')],

g_title='Grammar: a fault with a consequence: because of this, we cannot',
g_rule=['State the fault in one clause and the consequence in the next, joined by '
        'because of this: the hot water supply has failed; because of this, '
        'theatre three cannot run from tomorrow.',
        'Use we cannot rather than it would be difficult. Cannot is a fact about '
        'capacity; difficult is a feeling, and feelings do not reorder a repair '
        'queue.',
        'Attribute the clinical part: Dr Osei states that the list cannot proceed '
        'without hot water. Your sentence carries her judgement, not yours.',
        'Separate the two dates with different verbs: estates have committed to '
        'repair by Thursday; I shall update you at four o’clock each day until '
        'then.'],
g_fig=('LOOSE',
       ['There is an ongoing issue with the water in theatre three.',
        'This is obviously quite disruptive for the department.',
        'Estates are aware and are looking into it.',
        'We shall keep everyone posted as things develop.'],
       'PRECISE',
       ['The hot water supply to theatre three failed at six this morning.',
        'Because of this, four lists cannot run from tomorrow: about sixteen patients a week.',
        'Dr Osei states that these lists cannot proceed without hot water at the scrub sinks.',
        'Estates have committed to repair by Thursday; I shall update the department at four each day.'],
       'four sentences that join a queue',
       'four sentences that reorder one'),
g_fig_cap='The fault. Because of this, we cannot. The clinician states. Two dates.',

g_a=[('The supply ____________ at six this morning.', 'failed'),
     ('____________ of this, four lists cannot run.', 'Because'),
     ('About sixteen patients ____________ week.', 'a'),
     ('Dr Osei ____________ that the lists cannot proceed.', 'states'),
     ('____________ hot water at the scrub sinks.', 'Without'),
     ('Estates ____________ committed to repair by Thursday.', 'have'),
     ('I ____________ update the department at four each day.', 'shall'),
     ('The risk ____________ accepted in writing.', 'is'),
     ('We ____________ run the lists from tomorrow.', 'cannot')],

g_b=[('( the hot water supply failed at six this morning / there is an ongoing issue ) — the fault.', ['the hot water supply failed at six this morning', 'there is an ongoing issue'], 0),
     ('( because of this, four lists cannot run / this is quite disruptive ) — the consequence.',
      ['because of this, four lists cannot run', 'this is quite disruptive'], 0),
     ('( Dr Osei states that the lists cannot proceed / clinically this is a problem ) — the attribution.',
      ['Dr Osei states that the lists cannot proceed', 'clinically this is a problem'], 0),
     ('( estates have committed to repair by Thursday / estates are looking into it ) — the repair date.',
      ['estates have committed to repair by Thursday', 'estates are looking into it'], 0),
     ('( I shall update at four each day / we shall keep everyone posted ) — the update.',
      ['I shall update at four each day', 'we shall keep everyone posted'], 0),
     ('( the estates director accepts the risk until Thursday / the risk is understood ) — the acceptance.',
      ['the estates director accepts the risk until Thursday', 'the risk is understood'], 0)],

d1=dict(
 title='Because of this, we cannot',
 fig=(['One tap.', 'Four lists.'],
      ['Sixteen patients.', 'One name.']),
 cap='Hana Kowalczyk and Viktor Novák, estates, on a Tuesday morning.',
 lines=[('Viktor', 'The theatre three hot water job is on the list. It is behind eleven others.'),
        ('Hana', 'What does the ticket say?'),
        ('Viktor', 'Hot water supply fault, theatre three.'),
        ('Hana', 'Then it is behind a door handle, correctly. The ticket does not say what it stops.'),
        ('Viktor', 'What does it stop?'),
        ('Hana', 'Four lists from tomorrow, about sixteen patients a week. Dr Osei has written that the lists cannot proceed without hot water at the scrub sinks.'),
        ('Viktor', 'That changes it to first.'),
        ('Hana', 'It does, and I am not asking you to take anybody’s word for it. Her sentence is in the ticket.'),
        ('Viktor', 'The part is on order until Thursday.'),
        ('Hana', 'Then I need two things in writing: Thursday as the repair date, and somebody’s name against accepting the risk until then.'),
        ('Viktor', 'That is the estates director, and he will sign it today.'),
        ('Hana', 'And I shall update the department at four each day, because that is the only date I control.')],
 a=[('Where was the job on the list?', 'behind eleven others'),
    ('What did the ticket say?', 'hot water supply fault, theatre three'),
    ('What does it stop?', 'four lists from tomorrow, about sixteen patients a week'),
    ('Who wrote the clinical sentence?', 'Dr Osei'),
    ('What two things does Hana need in writing?', 'Thursday as the repair date and a name accepting the risk')],
 b=[('____________ of this, four lists cannot run.', 'Because'),
    ('Her ____________ is in the ticket.', 'sentence'),
    ('The part is ____________ order until Thursday.', 'on'),
    ('The only date I ____________.', 'control')]),

d2=dict(
 title='The consequence nobody could support',
 fig=(['Escalated as urgent.', 'Clinically trivial.'],
      ['Credibility spent.', 'Next one ignored.']),
 cap='Hana Kowalczyk and Dr Leila Rahman, medical director.',
 lines=[('Leila', 'Your colleague escalated a corridor light as a patient safety emergency last month.'),
        ('Hana', 'And when the ventilation failure came three weeks later, estates treated it as the same category.'),
        ('Leila', 'Which it was not. That one moved two patients.'),
        ('Hana', 'The light mattered. It was not a safety emergency, and no clinician had said it was.'),
        ('Leila', 'He was trying to get something fixed that had been outstanding for five months.'),
        ('Hana', 'I know, and the five months were a real failure. The exaggeration cost us the next escalation.'),
        ('Leila', 'So what should he have done?'),
        ('Hana', 'Escalated the delay as a delay, with the five months in it, and kept safety for safety.'),
        ('Leila', 'He will say nobody listens to a delay.'),
        ('Hana', 'Often true, and the answer is a named clinical consequence when there is one, not a borrowed one when there is not.'),
        ('Leila', 'And when a manager genuinely believes something is unsafe but no clinician will say so?'),
        ('Hana', 'Then he writes exactly that: I believe this is unsafe, no clinician has assessed it, and I am asking for an assessment.')],
 unresolved=True,
 a=[('What was escalated as an emergency?', 'a corridor light'),
    ('What happened three weeks later?', 'a ventilation failure was treated as the same category'),
    ('What did the exaggeration cost?', 'the next escalation'),
    ('How should the light have been escalated?', 'as a delay, with the five months in it'),
    ('What should a manager write without clinical support?', 'that he believes it unsafe, that no clinician has assessed it, and that he is asking for an assessment')],
 b=[('No clinician had ____________ it was.', 'said'),
    ('The exaggeration ____________ us the next escalation.', 'cost'),
    ('Keep safety ____________ safety.', 'for'),
    ('I am asking for an ____________.', 'assessment')]),

speak=[('Because of this',
        ['Your partner reads out eight faults.',
         'Add the consequence, with a number, to each.',
         'Four each, then swap.']),
       ('Whose sentence',
        ['Your partner gives you six clinical consequences.',
         'Say who must state each, and how you would quote them.',
         'Three each, then swap.']),
       ('Two dates',
        ['Your partner gives you six repairs.',
         'Separate the repair date from the update date for each.',
         'Three each, then swap.'])],

ext_title='An estates fault escalated with its clinical consequence named',
ext_fig=figs.datatable('WHAT THE ESCALATION CARRIES',
                       ['Line', 'Content'],
                       [['the fault', 'what failed, where and when'],
                        ['the consequence', 'what cannot happen, from when'],
                        ['the attribution', 'the clinician who states it'],
                        ['the numbers', 'lists, beds or patients affected'],
                        ['the dates', 'repair committed, update promised'],
                        ['the risk', 'who accepts it, in writing']]),
ext_fig_cap='Six lines, and the third is the one that makes the second credible.',
ext=[
 'An estates fault escalated with its clinical consequence named turns a line on a '
 'maintenance list into a decision somebody has to take today.',
 'Give it the fault with its time, the clinical statement from the clinician who '
 'made it, the activity affected, and the repair position from estates.',
 'Ask for the fault and the consequence in separate clauses, so that neither is '
 'buried in the other.',
 'Ask it to attribute every clinical consequence to the named clinician who '
 'stated it, and to leave the consequence out where none has.',
 'Ask for the repair date and the update date to be stated separately, because one '
 'belongs to estates and the other belongs to you.',
 'What it cannot do is decide whether a theatre can run. That is a clinical '
 'judgement, and borrowing it when nobody has made it costs you the next '
 'escalation.'],

dp2=('Escalating faults', 'Estates literature commonly reports that faults '
     'reported with their operational consequence are prioritised differently from '
     'those reported as defects alone, and that escalations later found '
     'disproportionate reduce the credibility of subsequent reports.',
     'Source: general healthcare estates literature, 2025–2026.'),

e_a=[('What does the escalation turn a maintenance line into?', 'a decision somebody has to take today'),
     ('What four things are given to it?', 'the fault with its time, the clinical statement, the activity affected and the repair position'),
     ('How are fault and consequence written?', 'in separate clauses'),
     ('What happens where no clinician has stated a consequence?', 'the consequence is left out'),
     ('Why separate the two dates?', 'because one belongs to estates and the other to you')],
e_b=[('Fault and consequence are separate clauses.', 'T'),
     ('Clinical consequences are attributed by name.', 'T'),
     ('It decides whether a theatre can run.', 'F'),
     ('Repair and update dates are stated separately.', 'T'),
     ('Faults with consequences are prioritised differently.', 'T'),
     ('Disproportionate escalations have no later cost.', 'F')],

w_model='Purpose: so that a fault with a clinical consequence is treated as a '
       'clinical matter and one without is not dressed up as one. Scope: estates '
       'and facilities faults affecting the areas I manage; the clinical '
       'consequence of any fault is determined by the responsible clinician, and '
       'the repair itself is the estates director’s. Inputs: the fault with the '
       'time it was identified, the clinician’s written statement of clinical '
       'consequence where one exists, the activity affected in lists, beds or '
       'patients, the repair position including any part on order, and the '
       'out-of-hours escalation route. Criteria: fault and consequence in separate '
       'clauses; every clinical consequence attributed to the clinician who stated '
       'it; the activity affected given as a number; the repair date attributed to '
       'estates and the update date promised by me; and the name of whoever '
       'accepts any residual risk. Done: sent to the estates director with the '
       'clinician copied, and recorded on the risk register where a risk is '
       'accepted. Fallback: where I believe a fault is unsafe and no clinician has '
       'assessed it, I say exactly that and ask for an assessment rather than '
       'asserting a consequence.',
w_fig=figs.spec_card('SIX LINES FOR AN ESTATES ESCALATION',
                     [('Purpose', 'clinical faults treated clinically, others not dressed up'),
                      ('Scope', 'faults in my areas; consequence is the clinician’s'),
                      ('Inputs', 'fault and time, clinical statement, activity, repair position'),
                      ('Criteria', 'separate clauses, attribution, numbers, two dates, a name'),
                      ('Done', 'to the estates director, clinician copied, risk recorded'),
                      ('Fallback', 'no clinical assessment: ask for one, assert nothing')]),
w_fig_cap='Six lines, and the sixth one is what keeps your escalations believed.',
w_task='Write a six-line tasking for an estates escalation.',
w_steps=['Line 1: say what the escalation must achieve.',
         'Line 2: say which faults are yours, and whose the consequence is.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the escalation must state and attribute.',
         'Line 5: say who it goes to and what is recorded.',
         'Line 6: say what you do when no clinician has assessed it.'],
w_bank=['Purpose: so that a fault with a clinical consequence is treated as a clinical matter and one without is not dressed up as one',
        'Scope: estates and facilities faults affecting the areas I manage; clinical consequence is determined by the responsible clinician and the repair is the estates director’s',
        'Inputs: the fault with the time identified, the clinician’s written statement where one exists, the activity affected in lists, beds or patients, the repair position including parts on order, and the out-of-hours route',
        'Criteria: fault and consequence in separate clauses; every clinical consequence attributed to the clinician who stated it; the activity affected as a number; the repair date attributed to estates and the update date promised by me; the name of whoever accepts any residual risk',
        'Done: sent to the estates director with the clinician copied, and recorded on the risk register where a risk is accepted',
        'Fallback: where I believe a fault is unsafe and no clinician has assessed it, I say exactly that and ask for an assessment rather than asserting a consequence'],
w_check=['Are fault and consequence separate?',
         'Is the clinician named?',
         'Is the activity given as a number?',
         'Is the risk acceptance named?'],

t_title='An estates fault escalated with its clinical consequence named',
t_fig=figs.split('ONE TAP AND FOUR LISTS',
                 'It can draft',
                 ['the fault and its time',
                  'the consequence as a number',
                  'the two dates',
                  'the risk acceptance line'],
                 'It must not supply',
                 ['the clinical judgement',
                  'a consequence nobody stated',
                  'the repair date',
                  'the name that accepts a risk']),
t_fig_cap='It drafts the escalation. The clinical sentence belongs to a clinician.',
t_body=[
 'Give it the fault with its time, the clinician’s written statement, the activity '
 'affected and the repair position.',
 'An estates fault escalated with its clinical consequence named returns the fault '
 'and the consequence in separate clauses.',
 'Then ask for the repair date and the update date, separately attributed.'],
t_say=[('The fault: ', 'Hot water failed at six this morning.'),
       ('Because of this: ', 'Four lists cannot run from tomorrow.'),
       ('Dr Osei states: ', 'The lists cannot proceed without hot water.')],
t_bound='It cannot decide whether a theatre can run, and it will not know that '
        'last month’s corridor light escalation spent your credibility.',
t_a=[('Give it the fault with its ____________.', 'time'),
     ('And the clinician’s written ____________.', 'statement'),
     ('And the activity ____________.', 'affected'),
     ('Ask for fault and consequence in separate ____________.', 'clauses'),
     ('And the activity as a ____________.', 'number'),
     ('And the two dates separately ____________.', 'attributed')],
t_b_rubric='Say what the escalation should do with each item.',
t_b=[('“hot water supply fault, theatre three”', 'add the consequence as a number'),
     ('“clinically this is a problem”', 'attribute it to the clinician who said so'),
     ('a corridor light escalated as a safety emergency', 'escalate the delay as a delay'),
     ('a risk accepted verbally', 'get a name against it in writing')],

case=dict(
 title='The Decision Room · The ventilation treated as a door handle',
 brief=[
  'A hospital’s maintenance system recorded faults without their operational or '
  'clinical consequence, and prioritised by category and age.',
  'Over two years, 41 faults with a clinical or capacity consequence were reported '
  'in the same terms as defects without one. The mean time to repair was 19 days '
  'for both groups. In 6 cases activity was lost: 14 theatre lists and 48 bed days. '
  'In 3 cases a manager had escalated a trivial fault in safety language in the '
  'preceding year.',
  'A requirement was introduced that any fault with a consequence state it, with '
  'clinical consequences attributed to a named clinician. Mean repair time for '
  'that group fell to 3 days and lost activity to 2 lists.'],
 exhibit=figs.datatable('TWO YEARS OF ESTATES FAULTS',
                        ['Item', 'Before / After'],
                        [['faults with a consequence', '41 / 38'],
                         ['mean days to repair, that group', '19 / 3'],
                         ['theatre lists lost', '14 / 2'],
                         ['bed days lost', '48 / 6'],
                         ['consequences attributed to a clinician', '4 / 36'],
                         ['escalations later found disproportionate', '3 / 0']]),
 exhibit_cap='The same faults, with the consequence written next to them.',
 exhibit_note='Fourteen theatre lists were lost to faults that sat in a queue '
              'because the ticket said what had broken rather than what had '
              'stopped.',
 voices=[('An estates supervisor', 'about prioritisation',
          'Every ward tells me their fault is urgent. If everything is clinical, nothing is.'),
         ('Hana Kowalczyk', 'people manager',
          'Which is why a clinician names the consequence and signs it, and nobody else does.'),
         ('A theatre matron', 'about the lost lists',
          'I told estates the sinks had no hot water. I did not know I had to say that four lists would cancel.')],
 steps=[('Find it', 'How many faults had a consequence?'),
        ('Compare it', 'Repair times before and after.'),
        ('Infer it', 'Why did consequential faults sit in the queue?'),
        ('Weigh it', 'A longer ticket against fourteen lists.'),
        ('Decide', 'What must a fault report state?')],
 analysis=[('Find it. How many?', '41 over two years'),
           ('Compare it. How long?', '19 days against 3'),
           ('Infer it. Why?', 'because the ticket described the defect, not what it stopped'),
           ('Weigh it. What was traded?', 'a longer ticket for fourteen lists and forty-eight bed days'),
           ('Decide. What must it state?', 'the consequence, with clinical consequences named by a clinician')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what every fault report states.',
                 'Say who determines a clinical consequence.',
                 'Say what two dates are given.',
                 'Say what happens when a risk is accepted.'],
 bank=['Every fault report states what has failed and, separately, what cannot now happen and from when.',
       'Any clinical consequence is stated by the responsible clinician and attributed to them by name in the report.',
       'Every escalation distinguishes the repair date committed by estates from the date on which the reporter will next provide an update.',
       'Where a residual risk is accepted pending repair, the name of the person accepting it is recorded in writing on the risk register.'],
 outcome='The hospital adopts the four lines. Mean repair time for faults with a '
         'consequence falls from nineteen days to three, theatre lists lost from '
         'fourteen to two, bed days lost from forty-eight to six, consequences '
         'attributed to a clinician rise from four to thirty-six, and no '
         'escalation is later found disproportionate.',
 outcome_q=[('What happened to repair time?', 'it fell from nineteen days to three'),
            ('What happened to lost lists?', 'they fell from fourteen to two'),
            ('What happened to attribution?', 'it rose from four cases to thirty-six'),
            ('What happened to disproportionate escalations?', 'there were none'),
            ('Over what period?', 'two years')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · There is an ongoing issue with the water',
 task=['This was the escalation email sent about a theatre water supply.',
       'This is what it said.'],
 draft=['There is an ongoing issue with the water in theatre three.',
        'This is obviously quite disruptive for the department.',
        'Estates are aware and are looking into it.',
        'Clinically this is clearly a significant problem.',
        'Could this please be treated as a priority.',
        'We shall keep everyone posted as things develop.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of escalation with no number, no clinician and no date.',
 asked=['quite disruptive', 'clinically significant',
        'treated as a priority'],
 back=['19 mean days to repair', '14 theatre lists lost',
       '3 escalations later found disproportionate'],
 gap='Nobody could tell what cannot happen, from when, how many patients, or who said it was clinically significant.',
 back_cap='Six lines that will sit behind a door handle in the queue.',
 back_note='“Clinically this is clearly a significant problem” is a clinical '
           'judgement made by somebody who is not a clinician.',
 diagnosis=[('“quite disruptive”', 'unbounded quantity'),
            ('“as things develop”', 'unbounded quantity'),
            ('“clinically significant”', 'hidden assumption'),
            ('“obviously”', 'hidden assumption'),
            ('“a priority”', 'unstated exception'),
            ('“looking into it”', 'unstated exception')],
 rewrite='Rewrite it on the six lines so that the repair queue reorders itself.',
 scaffold=['what the escalation must achieve',
           'which faults are yours, and whose the consequence is',
           'what you are giving it',
           'what the escalation must state and attribute',
           'who it goes to and what is recorded',
           'what you do when no clinician has assessed it'],
 bank=['Purpose: so that a fault with a clinical consequence is treated as a clinical matter and one without is not dressed up as one',
       'Scope: estates and facilities faults affecting the areas I manage; the clinical consequence of any fault is determined by the responsible clinician, and the repair itself is the estates director’s',
       'Inputs: the fault with the time it was identified, the clinician’s written statement of clinical consequence where one exists, the activity affected in lists, beds or patients, the repair position including any part on order, and the out-of-hours escalation route',
       'Criteria: fault and consequence in separate clauses; every clinical consequence attributed to the clinician who stated it; the activity affected given as a number; the repair date attributed to estates and the update date promised by me; and the name of whoever accepts any residual risk',
       'Done: sent to the estates director with the clinician copied, and recorded on the risk register where a risk is accepted',
       'Fallback: where I believe a fault is unsafe and no clinician has assessed it, I say exactly that and ask for an assessment rather than asserting a consequence'],
 check=['Is the consequence stated with a number?',
        'Is the clinician named?',
        'Are the two dates separate?',
        'Is the risk acceptance recorded?'],
 model=['so that a fault with a clinical consequence is treated as a clinical matter and one without is not dressed up as one',
        'estates and facilities faults affecting the areas I manage; the clinical consequence of any fault is determined by the responsible clinician, and the repair itself is the estates director’s',
        'the fault with the time it was identified, the clinician’s written statement of clinical consequence where one exists, the activity affected in lists, beds or patients, the repair position including any part on order, and the out-of-hours escalation route',
        'fault and consequence in separate clauses; every clinical consequence attributed to the clinician who stated it; the activity affected given as a number; the repair date attributed to estates and the update date promised by me; and the name of whoever accepts any residual risk',
        'sent to the estates director with the clinician copied, and recorded on the risk register where a risk is accepted',
        'where I believe a fault is unsafe and no clinician has assessed it, I say exactly that and ask for an assessment rather than asserting a consequence'],
 cost='19 mean days to repair, 14 theatre lists and 48 bed days lost, and 3 escalations found disproportionate.'),

lang=dict(
 title='The Unwelcome Number · Telling a colleague his escalation cost the next one',
 setting=[
  'A manager escalated a corridor light as a patient safety emergency. Three weeks '
  'later a ventilation failure was treated in the same category and two patients '
  'were moved late.',
  'Hana has to say so, without suggesting he was dishonest or that the five-month '
  'delay he was fighting did not matter.'],
 ladder=[('A manager fighting a real delay', 'and a word he should not have used'),
         ('Three weeks later', 'a ventilation failure in the same queue'),
         ('Either let it go', 'or name the cost and keep safety for safety')],
 cap='One corridor light, one ventilation failure, and two patients moved late.',
 turns=[('Turn 1 · Hana', 'The light was escalated as a patient safety emergency, and three weeks later the ventilation failure was treated as the same category.'),
        ('Turn 2 · Manager', 'That light had been outstanding for five months and nobody would look at it.'),
        ('Turn 3 · Hana', 'The five months were a real failure, and the word emergency is what we spent getting them to look.')],
 holds=['Nobody thinks you invented anything; you used the only language that moved the queue.',
        'A delay is escalable as a delay: five months, eleven chases, named owner.',
        'When a clinician will name a consequence, we have the strongest escalation there is.',
        'When none will, we say so and ask for an assessment, which is also a strong letter.',
        'I shall take the five-month delay to the estates director myself this week.',
        'And if delays still go unanswered when escalated honestly, bring them to me and I shall escalate higher.'],
 redline='Never borrow clinical language for a fault no clinician has assessed, '
         'and never leave a five-month delay unescalated because the honest words '
         'feel weaker.',
 score=['Named the sequence in the first sentence.',
        'Accepted the underlying delay as real.',
        'Gave the honest alternative wording.',
        'Took the delay on himself this week.',
        'Offered a route if honesty does not work.'],
 a=[('How was the light escalated?', 'as a patient safety emergency'),
    ('What happened three weeks later?', 'the ventilation failure was treated as the same category'),
    ('How long had the light been outstanding?', 'five months'),
    ('What is the honest escalation for a delay?', 'five months, eleven chases and a named owner'),
    ('What will Hana do this week?', 'take the five-month delay to the estates director'),
    ('What is the redline?', 'never borrow clinical language for a fault no clinician has assessed')]),

rev_fig=figs.split('AN ESTATES ESCALATION',
                   'Say',
                   ['the hot water failed at six this morning',
                    'because of this, four lists cannot run from tomorrow',
                    'Dr Osei states that they cannot proceed without it',
                    'repair by Thursday; I shall update at four daily'],
                   'Never say',
                   ['there is an ongoing issue',
                    'this is quite disruptive',
                    'clinically significant',
                    'we shall keep everyone posted']),
rev_fig_cap='Four sentences that reorder a queue, and four that join it.',
rev=dict(
 read=[('What does a fault reported as a defect join?',
        ['a list with a door handle on it', 'the urgent queue',
         'the risk register', 'the clinical agenda'], 0),
       ('Who states the clinical consequence?',
        ['the responsible clinician', 'the operations manager',
         'the estates supervisor', 'the ward clerk'], 0),
       ('Which date can you always promise?',
        ['the update date', 'the repair date',
         'the part delivery date', 'the shutdown date'], 0),
       ('What must an accepted risk carry?',
        ['a name, in writing', 'a verbal assurance',
         'a review date', 'a cost estimate'], 0)],
 listen_text='Give it the fault with its time, the clinician’s written statement, '
             'the activity affected and the repair position. Ask for separate '
             'clauses.',
 listen=[('Give it the fault with its ____________.', 'time'),
         ('And the clinician’s written ____________.', 'statement'),
         ('And the activity ____________.', 'affected'),
         ('Ask for fault and consequence in separate ____________.', 'clauses')],
 speak=['Add a numbered consequence to eight faults.',
        'Then separate the repair date from the update date.'],
 write='Write a six-line tasking for an estates escalation.',
 vocab=[('A fault with a measurable consequence is a fault that stops a ____________.', 'list'),
        ('A measurable breach of a standard is a ____________ outside a range.', 'temperature'),
        ('An interim measure somebody has assessed is a ____________ that is safe.', 'workaround'),
        ('The route for resources is an escalation to the ____________ director.', 'estates')],
 gram=[('We ____________ run the lists from tomorrow.', 'cannot'),
       ('The risk ____________ accepted in writing.', 'is'),
       ('I ____________ update the department at four each day.', 'shall'),
       ('____________ hot water at the scrub sinks.', 'Without')]),

found=['Report the consequence as well as the fault, in separate clauses.',
       'Let a clinician state any clinical consequence, and quote them by name.',
       'Separate the repair date from the update date.',
       'Get a name in writing against any accepted risk.'],
end_line='Fourteen theatre lists were lost to faults that waited in a queue because every ticket said what had broken rather than what had stopped.',
end_next='Next: A Service Agreement Nobody Has Read')
