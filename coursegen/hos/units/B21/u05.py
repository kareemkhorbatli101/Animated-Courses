# -*- coding: utf-8 -*-
import figs

U = dict(
num=5,
title='Telling Staff Something They Will Hate',
gram='telling staff bad news: what, when, and what is not decided',
ai='a message to staff drafted with what is and is not yet decided',
strap='CEFR B2 · Grammar: telling staff bad news: what, when, and what is not decided · '
      'AI: a message to staff drafted with what is and is not yet decided',
cando=['separate what is decided from what is still open',
       'say how many posts are affected rather than evading the number',
       'give a date on which people will know more',
       'avoid promises about jobs you cannot keep',
       'write a six-line tasking for a message to staff'],

hero=('“WHAT IS DECIDED, WHAT IS NOT, AND WHEN YOU WILL KNOW.”',
      ['People can live with bad news on a date.',
       'They cannot live with good news without one.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Eleven posts, one decision taken, four still open, and a date in three weeks.',

warm=['How did you last hear bad news at work?',
      'Who told you, and how long had they known?',
      'What did you want to be told that you were not?'],

vocab=[
 ('a decision already taken', 'the part you must not present as consultation'),
 ('a decision still open', 'the part where views can change the outcome'),
 ('a consultation that is genuine', 'a process that could alter the decision'),
 ('a consultation that is theatre', 'a process whose outcome is already fixed'),
 ('a message staff read as a threat', 'a message with an unexplained number in it'),
 ('a message staff read as honest', 'a message that admits what is not known'),
 ('a number of posts affected', 'the figure everybody will count themselves into'),
 ('a number nobody will confirm', 'the gap rumour fills'),
 ('a date on which people will know', 'the only comfort available on day one'),
 ('a date that keeps moving', 'the fastest way to lose a workforce'),
 ('a rumour that is accurate', 'what happens when the message is late'),
 ('a rumour that is wrong', 'what happens when the message is vague'),
 ('a trade union that must be informed', 'a statutory or agreed step'),
 ('a question you cannot answer in the room', 'a question deserving a written answer'),
 ('a question you must answer in writing', 'the follow-up that proves the honesty'),
 ('a meeting held in a corridor', 'how not to tell twenty people'),
 ('a meeting with chairs and time', 'the minimum respect a message requires'),
 ('a person who hears it secondhand', 'the failure that is remembered longest'),
 ('a promise about jobs you must not make', 'a reassurance you cannot guarantee'),
 ('a thing you will do for the people affected', 'the commitment that is yours to keep')],

read=[
 'The decision has been taken to close the inpatient unit at the Harbourview site '
 'and to move the service to the main hospital. Eleven posts are affected; nothing '
 'has been decided about which eleven.',
 'That is the message, and the order matters: what has been decided, what has not, '
 'how many people are affected, and the date on which they will know more.',
 'The temptation is to soften the first part and sharpen the last, which produces '
 'a message in which nothing has quite been decided and nobody is quite affected, '
 'and which everybody correctly reads as evasion.',
 'Give the number. Eleven people will count themselves into it whatever you say, '
 'and a withheld number is filled by a rumour that is usually larger and always '
 'worse.',
 'And promise only what is yours to keep: not that nobody will lose their job, '
 'which you cannot guarantee, but that you will meet every affected person '
 'individually within ten working days, which you can.'],

dp1=('Organisational change', 'Employment and change guidance commonly '
     'recommends distinguishing decisions taken from matters subject to '
     'consultation, informing recognised trade unions, stating the number of posts '
     'affected, and committing to dates. Consultation obligations are set by local '
     'law and by the organisation’s own agreements.',
     'Source: general employment practice guidance, 2025–2026.'),

c_a=[('What has been decided?', 'to close the inpatient unit at Harbourview and move the service'),
     ('What has not been decided?', 'which of the eleven posts are affected'),
     ('What is the order of the message?', 'what is decided, what is not, how many, and the date'),
     ('What does softening produce?', 'a message everybody reads as evasion'),
     ('Why give the number?', 'because a withheld number is filled by a worse rumour'),
     ('What may be promised?', 'an individual meeting with everybody affected within ten working days')],

c_b=[('Eleven posts are affected.', 'T'),
     ('It has been decided which eleven.', 'F'),
     ('The number should be withheld until it is certain.', 'F'),
     ('A date for more information is given.', 'T'),
     ('Promises about jobs are avoided.', 'T'),
     ('Trade unions are informed.', 'T')],

c_c=[('The decision ____________ been taken to close the unit.', 'has'),
     ('Eleven posts ____________ affected.', 'are'),
     ('Nothing ____________ been decided about which eleven.', 'has'),
     ('You ____________ know more by the twenty-first.', 'will'),
     ('I ____________ meet every affected person within ten days.', 'shall'),
     ('I cannot ____________ that nobody will lose a post.', 'promise')],

c_d=[('Give ( a range when it is firmer / the number ).', ['a range when it is firmer', 'the number'], 1),
     ('Say what is ( decided and what is not / under consideration ).',
      ['decided and what is not', 'under consideration'], 0),
     ('Promise ( what is yours to keep / that nobody will lose a job ).',
      ['what is yours to keep', 'that nobody will lose a job'], 0),
     ('Tell people ( in a room with chairs / as you meet them ).',
      ['in a room with chairs', 'as you meet them'], 0),
     ('Give ( a date / an assurance of early communication ).',
      ['a date', 'an assurance of early communication'], 0)],

c_e=('Decided, open to consultation, a date or a promise you must not make? Decide '
     'what each is.',
     [('the inpatient unit at Harbourview will close', 'decided'),
      ('which of the eleven posts are affected', 'open to consultation'),
      ('everybody affected will be met by the twenty-first', 'a date'),
      ('nobody will lose their job', 'a promise you must not make'),
      ('the service moves to the main hospital', 'decided'),
      ('how the rota will work on the new site', 'open to consultation')],
     ['decided', 'open to consultation', 'a date',
      'a promise you must not make']),

v_fig_title='SIX WORDS OF A MESSAGE TO STAFF',
v_fig=[('key', 'a decision already taken'), ('scale', 'a number of posts affected'),
       ('clock', 'a date on which people will know'),
       ('people', 'a meeting with chairs and time'),
       ('doc', 'a question you must answer in writing'),
       ('note', 'a thing you will do for the people affected')],
v_fig_cap='Six words for eleven posts and one afternoon.',

v_a=[('The part where views can change the outcome is a decision still ____________.', 'open'),
     ('A process whose outcome is already fixed is a consultation that is ____________.', 'theatre'),
     ('A message that admits what is not known is a message staff read as ____________.', 'honest'),
     ('The gap rumour fills is a number nobody will ____________.', 'confirm'),
     ('The fastest way to lose a workforce is a date that keeps ____________.', 'moving'),
     ('What happens when the message is vague is a rumour that is ____________.', 'wrong'),
     ('The failure that is remembered longest is a person who hears it ____________.', 'secondhand'),
     ('A reassurance you cannot guarantee is a promise about jobs you must not ____________.', 'make')],

v_b=[('A decision already taken is the part you must not', 'present as consultation.'),
     ('A message staff read as a threat is a message with', 'an unexplained number in it.'),
     ('A question you cannot answer in the room is a question', 'deserving a written answer.'),
     ('A meeting held in a corridor is how not', 'to tell twenty people.'),
     ('A thing you will do for the people affected is the', 'commitment that is yours to keep.')],

g_title='Grammar: telling staff bad news: what, when, and what is not decided',
g_rule=['State the decision in the present perfect passive, which is both formal '
        'and unambiguous: the decision has been taken to close the inpatient unit '
        'at Harbourview.',
        'State what is open with nothing has been decided about, which is stronger '
        'and more honest than no decisions have been made as yet: nothing has been '
        'decided about which posts are affected.',
        'State the number without qualification. Eleven posts are affected. Not '
        'approximately eleven, not up to eleven, and not a small number of posts.',
        'Promise in the first person singular and only what you control: I shall '
        'meet every affected member of staff individually by the twenty-first, and '
        'I shall answer in writing any question I cannot answer today.'],
g_fig=('LOOSE',
       ['We are entering a period of change across the organisation.',
        'Some reconfiguration of services is likely to be necessary.',
        'A small number of roles may potentially be affected.',
        'We shall of course communicate further in due course.'],
       'PRECISE',
       ['The decision has been taken to close the inpatient unit at Harbourview on the thirtieth of June.',
        'Eleven posts are affected, and nothing has been decided about which eleven.',
        'I shall meet every affected member of staff individually by the twenty-first of this month.',
        'I cannot promise that nobody will lose a post, and I shall not pretend otherwise today.'],
       'four sentences that produce a rumour by lunchtime',
       'four sentences people can take home'),
g_fig_cap='The decision has been taken. Nothing has been decided about. I shall. I cannot.',

g_a=[('The decision ____________ been taken to close the unit.', 'has'),
     ('____________ the thirtieth of June.', 'On'),
     ('Eleven posts ____________ affected.', 'are'),
     ('Nothing has been ____________ about which eleven.', 'decided'),
     ('I ____________ meet every affected member of staff.', 'shall'),
     ('____________ the twenty-first of this month.', 'By'),
     ('I ____________ promise that nobody will lose a post.', 'cannot'),
     ('And I ____________ not pretend otherwise.', 'shall'),
     ('The unions ____________ been informed this morning.', 'have')],

g_b=[('( the decision has been taken to close the unit on the thirtieth of June / we are entering a period of change ) — the decision.', ['the decision has been taken to close the unit on the thirtieth of June', 'we are entering a period of change'], 0),
     ('( eleven posts are affected / a small number of roles may be affected ) — the number.',
      ['eleven posts are affected', 'a small number of roles may be affected'], 0),
     ('( nothing has been decided about which eleven / no decisions have yet been made ) — what is open.',
      ['nothing has been decided about which eleven', 'no decisions have yet been made'], 0),
     ('( I shall meet everybody affected by the twenty-first / we shall communicate further ) — the date.',
      ['I shall meet everybody affected by the twenty-first', 'we shall communicate further'], 0),
     ('( I cannot promise that nobody will lose a post / we shall do everything we can ) — the limit.',
      ['I cannot promise that nobody will lose a post', 'we shall do everything we can'], 0),
     ('( the unions were informed this morning / we are working with our partners ) — the process.',
      ['the unions were informed this morning', 'we are working with our partners'], 0)],

d1=dict(
 title='Eleven posts, and which eleven',
 fig=(['One decision taken.', 'Four still open.'],
      ['Eleven posts.', 'Ten working days.']),
 cap='Siobhán Carrick and Grace Mbeki, head of nursing, before an announcement.',
 lines=[('Grace', 'The draft says a small number of roles may potentially be affected.'),
        ('Siobhán', 'How many is it?'),
        ('Grace', 'Eleven, and we know that precisely.'),
        ('Siobhán', 'Then it says eleven. Every one of the forty people in that room will otherwise count themselves in.'),
        ('Grace', 'Eleven will frighten people who are not affected.'),
        ('Siobhán', 'A small number frightens forty. Eleven frightens eleven, and some of the thirty-nine will sleep tonight.'),
        ('Grace', 'And when they ask which eleven?'),
        ('Siobhán', 'Nothing has been decided, which is true, and I shall say when it will be: the twenty-first.'),
        ('Grace', 'Can we hold the twenty-first?'),
        ('Siobhán', 'If we cannot hold it, we must not say it. A date that moves twice is worse than no date at all.'),
        ('Grace', 'Will you promise there will be no redundancies?'),
        ('Siobhán', 'No. I shall promise an individual meeting with everybody affected by the twenty-first, because that is the only thing in this entirely within my control.')],
 a=[('What does the draft say?', 'that a small number of roles may potentially be affected'),
    ('How many are affected?', 'eleven, known precisely'),
    ('Why give the number?', 'because otherwise forty people count themselves in'),
    ('What is said about which eleven?', 'that nothing has been decided, and that it will be by the twenty-first'),
    ('What is promised?', 'an individual meeting with everybody affected by the twenty-first')],
 b=[('Then it says ____________.', 'eleven'),
    ('Nothing has been ____________.', 'decided'),
    ('A date that ____________ twice is worse than none.', 'moves'),
    ('Entirely within my ____________.', 'control')]),

d2=dict(
 title='The consultation that was theatre',
 fig=(['Twelve weeks.', 'Nineteen responses.'],
      ['Nothing changed.', 'Trust gone.']),
 cap='Siobhán Carrick and Amara Nwosu, operations manager.',
 lines=[('Amara', 'The pathology reconfiguration consultation closed on Friday. Nineteen responses, and the plan is unchanged.'),
        ('Siobhán', 'Was there anything in the nineteen that could have changed it?'),
        ('Amara', 'Two good points about transport and one about the on-call rota.'),
        ('Siobhán', 'And were they capable of changing the decision, or only the implementation?'),
        ('Amara', 'Only the implementation. The decision was taken in February by the board.'),
        ('Siobhán', 'Then we should have said that in the document, and we did not.'),
        ('Amara', 'The document said we were consulting on the proposal.'),
        ('Siobhán', 'Which invited people to argue against a decision that had already been taken, and then to watch their arguments be noted.'),
        ('Amara', 'Nobody intended to mislead anybody.'),
        ('Siobhán', 'Nobody ever does. The effect is that nineteen people spent their evenings writing to us and have concluded that it was pointless.'),
        ('Amara', 'What do I write in the response document?'),
        ('Siobhán', 'That the closure decision was taken in February, that it was not within the scope of this consultation, that we were wrong not to say so, and what the two transport points have changed.')],
 unresolved=True,
 a=[('How many responses were received?', 'nineteen'),
    ('What could they have changed?', 'the implementation, not the decision'),
    ('When was the decision taken?', 'in February, by the board'),
    ('What should the document have said?', 'that the decision was taken and what was in scope'),
    ('What goes in the response document?', 'the date of the decision, the scope, the admission, and what the transport points changed')],
 b=[('Only the ____________.', 'implementation'),
    ('We should have ____________ that in the document.', 'said'),
    ('Watch their arguments be ____________.', 'noted'),
    ('What the two transport points have ____________.', 'changed')]),

speak=[('Decided or open',
        ['Your partner reads out twelve statements about a change.',
         'Sort them into decided and open to consultation.',
         'Six each, then swap.']),
       ('Give the number',
        ['Your partner offers six vague quantities.',
         'Replace each with the figure and say why.',
         'Three each, then swap.']),
       ('What I can promise',
        ['Your partner asks you for six reassurances.',
         'Promise only what you control, and say what you cannot.',
         'Three each, then swap.'])],

ext_title='A message to staff drafted with what is and is not yet decided',
ext_fig=figs.datatable('WHAT THE MESSAGE CARRIES',
                       ['Line', 'Content'],
                       [['the decision', 'what has been decided, and when'],
                        ['what is open', 'what is genuinely still to decide'],
                        ['the number', 'posts affected, exactly'],
                        ['the date', 'when people will know more'],
                        ['the commitment', 'what you can personally guarantee'],
                        ['the limit', 'what you cannot promise']]),
ext_fig_cap='Six lines, and the sixth is the one that makes the other five credible.',
ext=[
 'A message to staff drafted with what is and is not yet decided produces an '
 'announcement that a workforce can be angry about without concluding that it has '
 'been deceived.',
 'Give it the decision with its date and decision-maker, the matters genuinely '
 'still open, the exact number of posts affected, the dates you can hold, and the '
 'consultation obligations.',
 'Ask it to place every element on one side of the line between decided and open, '
 'and to refuse any phrase that presents a settled decision as a proposal.',
 'Ask for the number of posts to be stated exactly, since every vague formulation '
 'is read by everybody as including them.',
 'Ask it to replace every promise about jobs with a commitment you control, such '
 'as an individual meeting by a stated date.',
 'What it cannot do is stand in the room. The message will be judged on whether '
 'you answer the question you cannot answer, and on whether you are still there '
 'when the room empties.'],

dp2=('Change communication', 'Employment and change literature commonly reports '
     'that withheld numbers are replaced by larger informal estimates, that '
     'consultations presenting settled decisions as proposals reduce subsequent '
     'engagement, and that announced dates which move are associated with loss of '
     'confidence in management.',
     'Source: general employment practice literature, 2025–2026.'),

e_a=[('What does the message produce?', 'an announcement a workforce can be angry about without feeling deceived'),
     ('What five things are given to it?', 'the decision with its date and maker, the open matters, the exact number, the holdable dates and the consultation obligations'),
     ('Where does every element go?', 'on one side of the line between decided and open'),
     ('Why state the number exactly?', 'because every vague formulation is read as including everybody'),
     ('What replaces a promise about jobs?', 'a commitment you control, such as an individual meeting by a date')],
e_b=[('Settled decisions are not presented as proposals.', 'T'),
     ('The number of posts is exact.', 'T'),
     ('It stands in the room with you.', 'F'),
     ('Promises are limited to what you control.', 'T'),
     ('Withheld numbers are replaced by larger estimates.', 'T'),
     ('Moving announced dates builds confidence.', 'F')],

w_model='Purpose: so that people hear bad news from me, in a room, with a number '
       'and a date, rather than in a corridor from somebody else. Scope: '
       'operational and service change within my directorate; the decision itself '
       'belongs to whoever took it and is attributed to them, and individual '
       'employment consequences are handled under the organisation’s change '
       'policy. Inputs: the decision with its date and decision-maker, the matters '
       'genuinely still open, the exact number of posts affected, the dates I can '
       'hold without moving them, the consultation obligations, and the questions '
       'I already know I cannot answer. Criteria: the decision stated first with '
       'its date; what is open stated as nothing has been decided about; the exact '
       'number of posts given; a date on which people will know more; a '
       'commitment limited to what I control; and no promise about job security. '
       'Done: delivered in person in a room with chairs, followed in writing the '
       'same day to everybody including those absent, with the unions informed '
       'beforehand. Fallback: where I cannot answer a question in the room, I say '
       'so, write down the question, and answer it in writing within five working '
       'days.',
w_fig=figs.spec_card('SIX LINES FOR A MESSAGE TO STAFF',
                     [('Purpose', 'from me, in a room, with a number and a date'),
                      ('Scope', 'service change; the decision is attributed to its maker'),
                      ('Inputs', 'decision, open matters, exact number, holdable dates'),
                      ('Criteria', 'decision first, number exact, commitment controlled'),
                      ('Done', 'in person, then in writing the same day to all'),
                      ('Fallback', 'unanswerable in the room: written within five days')]),
w_fig_cap='Six lines, and the sixth one is what proves the first five were honest.',
w_task='Write a six-line tasking for a message to staff.',
w_steps=['Line 1: say how people must hear it.',
         'Line 2: say which changes are yours, and whose the decision is.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the message must state and in what order.',
         'Line 5: say how it is delivered and followed up.',
         'Line 6: say what you do with a question you cannot answer.'],
w_bank=['Purpose: so that people hear bad news from me, in a room, with a number and a date, rather than in a corridor from somebody else',
        'Scope: operational and service change within my directorate; the decision belongs to whoever took it and is attributed to them, and individual employment consequences follow the change policy',
        'Inputs: the decision with its date and decision-maker, the matters genuinely still open, the exact number of posts affected, the dates I can hold, the consultation obligations, and the questions I know I cannot answer',
        'Criteria: the decision stated first with its date; what is open stated as nothing has been decided about; the exact number given; a date on which people will know more; a commitment limited to what I control; no promise about job security',
        'Done: delivered in person in a room with chairs, followed in writing the same day to everybody including those absent, with the unions informed beforehand',
        'Fallback: where I cannot answer a question in the room, I say so, write the question down, and answer it in writing within five working days'],
w_check=['Is the decision stated first, with its date?',
         'Is the number exact?',
         'Is there a date people can hold?',
         'Is every promise within your control?'],

t_title='A message to staff drafted with what is and is not yet decided',
t_fig=figs.split('ELEVEN POSTS AND FORTY PEOPLE',
                 'It can draft',
                 ['the decision and its date',
                  'the line between decided and open',
                  'the exact number',
                  'the commitment you control'],
                 'It must not supply',
                 ['a promise about jobs',
                  'a date you cannot hold',
                  'the room itself',
                  'the answer you do not have']),
t_fig_cap='It drafts the message. Standing in the room afterwards is the whole of it.',
t_body=[
 'Give it the decision with its date and maker, the open matters, the exact '
 'number affected and the dates you can hold.',
 'A message to staff drafted with what is and is not yet decided puts the '
 'decision first and the number plainly.',
 'Then ask it to replace every promise about jobs with one you control.'],
t_say=[('Decided: ', 'The unit closes on the thirtieth of June.'),
       ('Not decided: ', 'Which of the eleven posts are affected.'),
       ('By the twenty-first: ', 'I shall have met everybody affected.')],
t_bound='It cannot stand in the room when somebody asks whether she will have a '
        'job in July, and it will not be there when the room empties.',
t_a=[('Give it the decision with its ____________.', 'date'),
     ('And the matters genuinely still ____________.', 'open'),
     ('And the ____________ number affected.', 'exact'),
     ('Put the ____________ first.', 'decision'),
     ('And the number ____________.', 'plainly'),
     ('And a commitment you ____________.', 'control')],
t_b_rubric='Say what the message work should do with each item.',
t_b=[('“a small number of roles may be affected”', 'state the exact number'),
     ('“no decisions have yet been made”', 'say what has been decided, and when'),
     ('“we shall do everything we can”', 'replace it with a commitment you control'),
     ('a consultation on a settled decision', 'state the decision and what is in scope')],

case=dict(
 title='The Decision Room · The small number of roles',
 brief=[
  'A hospital announced a service reconfiguration describing the staffing impact '
  'as a small number of roles, on advice that an exact figure would cause '
  'unnecessary alarm.',
  'Within four days the informal estimate circulating among staff was thirty-five '
  'posts; the actual figure was eleven. In the following six weeks 9 members of '
  'staff in unaffected posts resigned, 4 of them citing uncertainty. The '
  'consultation received 19 responses, none of which could change the decision, '
  'which had been taken by the board in February and was not stated in the '
  'document.',
  'Subsequent announcements stated the exact number, the date of the decision and '
  'what was in scope. Informal estimates matched the published figure, and '
  'resignations from unaffected posts fell to 1.'],
 exhibit=figs.datatable('TWO SERVICE CHANGES COMPARED',
                        ['Item', 'First / Second'],
                        [['posts actually affected', '11 / 14'],
                         ['figure announced', '“a small number” / 14'],
                         ['informal estimate after four days', '35 / 14'],
                         ['resignations from unaffected posts', '9 / 1'],
                         ['consultation responses', '19 / 46'],
                         ['responses capable of changing anything', '0 / 12']]),
 exhibit_cap='The same kind of change, with the number published and the scope stated.',
 exhibit_note='Nine people in posts that were never at risk resigned during the '
              'first reconfiguration, four of them saying they could not live with '
              'not knowing.',
 voices=[('A communications adviser', 'about publishing the figure',
          'Putting eleven in a public announcement guarantees that eleven people read it as a redundancy notice.'),
         ('Siobhán Carrick', 'deputy chief executive',
          'Not putting it in guaranteed that forty people did, and that nine of them left.'),
         ('A staff nurse who resigned', 'about the silence',
          'I was not affected at all. Nobody told me that for seven weeks, and by then I had another job.')],
 steps=[('Find it', 'What figure circulated after four days?'),
        ('Compare it', 'Announced description against informal estimate.'),
        ('Infer it', 'Why did unaffected staff resign?'),
        ('Weigh it', 'Avoiding alarm against nine resignations.'),
        ('Decide', 'What must an announcement state?')],
 analysis=[('Find it. What figure?', 'thirty-five, against an actual eleven'),
           ('Compare it. What was announced?', '“a small number of roles”'),
           ('Infer it. Why resign?', 'because an unnumbered risk includes everybody'),
           ('Weigh it. What was traded?', 'alarm among eleven for uncertainty among forty'),
           ('Decide. What must it state?', 'the exact number, the decision date and the scope')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what the announcement states about the decision.',
                 'Say what it states about numbers.',
                 'Say what it states about consultation.',
                 'Say what may not be promised.'],
 bank=['Every announcement of service change states what has been decided, the date on which it was decided and by whom.',
       'Every announcement states the exact number of posts affected, and states plainly what has not yet been decided about them.',
       'Every consultation document states what is within its scope and what has already been decided and is therefore outside it.',
       'No announcement contains an assurance about job security that the organisation cannot guarantee, and every commitment made is one the author controls.'],
 outcome='The hospital adopts the four lines. In the next reconfiguration the '
         'announced figure of fourteen matches the informal estimate, resignations '
         'from unaffected posts fall from nine to one, consultation responses rise '
         'from nineteen to forty-six, and twelve of those responses change '
         'elements within scope.',
 outcome_q=[('What happened to the informal estimate?', 'it matched the published figure'),
            ('What happened to resignations from unaffected posts?', 'they fell from nine to one'),
            ('What happened to consultation responses?', 'they rose from nineteen to forty-six'),
            ('How many changed something?', 'twelve'),
            ('What was the first actual figure?', 'eleven posts')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · A period of change across the organisation',
 task=['This was the message sent to staff announcing a service closure.',
       'This is what it said.'],
 draft=['We are entering a period of change across the organisation.',
        'Some reconfiguration of services is likely to prove necessary.',
        'A small number of roles may potentially be affected by this.',
        'We are of course consulting fully on the proposals.',
        'We shall do everything we can to support our valued staff.',
        'Further communication will follow in due course.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines in which nothing is decided and everybody is affected.',
 asked=['a small number of roles', 'consulting fully on the proposals',
        'everything we can'],
 back=['informal estimate of 35 against 11 actual',
       '9 resignations from unaffected posts', '19 consultation responses'],
 gap='Nobody could tell what had been decided, how many posts were affected, what was open, or when they would know.',
 back_cap='Six lines that produced a rumour of thirty-five by Thursday.',
 back_note='“Consulting fully on the proposals” described a consultation on a '
           'decision the board had taken in February.',
 diagnosis=[('“a small number of roles”', 'unbounded quantity'),
            ('“some reconfiguration”', 'unbounded quantity'),
            ('“everything we can”', 'unscoped set'),
            ('“our valued staff”', 'unscoped set'),
            ('“consulting fully on the proposals”', 'hidden assumption'),
            ('“likely to prove necessary”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that thirty-nine people can sleep tonight.',
 scaffold=['how people must hear it',
           'which changes are yours, and whose the decision is',
           'what you are giving it',
           'what the message must state and in what order',
           'how it is delivered and followed up',
           'what you do with a question you cannot answer'],
 bank=['Purpose: so that people hear bad news from me, in a room, with a number and a date, rather than in a corridor from somebody else',
       'Scope: operational and service change within my directorate; the decision itself belongs to whoever took it and is attributed to them, and individual employment consequences are handled under the organisation’s change policy',
       'Inputs: the decision with its date and decision-maker, the matters genuinely still open, the exact number of posts affected, the dates I can hold without moving them, the consultation obligations, and the questions I already know I cannot answer',
       'Criteria: the decision stated first with its date; what is open stated as nothing has been decided about; the exact number of posts given; a date on which people will know more; a commitment limited to what I control; and no promise about job security',
       'Done: delivered in person in a room with chairs, followed in writing the same day to everybody including those absent, with the unions informed beforehand',
       'Fallback: where I cannot answer a question in the room, I say so, write down the question, and answer it in writing within five working days'],
 check=['Is the decision stated with its date?',
        'Is the exact number given?',
        'Is the scope of consultation stated?',
        'Are promises limited to what you control?'],
 model=['so that people hear bad news from me, in a room, with a number and a date, rather than in a corridor from somebody else',
        'operational and service change within my directorate; the decision itself belongs to whoever took it and is attributed to them, and individual employment consequences are handled under the organisation’s change policy',
        'the decision with its date and decision-maker, the matters genuinely still open, the exact number of posts affected, the dates I can hold without moving them, the consultation obligations, and the questions I already know I cannot answer',
        'the decision stated first with its date; what is open stated as nothing has been decided about; the exact number of posts given; a date on which people will know more; a commitment limited to what I control; and no promise about job security',
        'delivered in person in a room with chairs, followed in writing the same day to everybody including those absent, with the unions informed beforehand',
        'where I cannot answer a question in the room, I say so, write down the question, and answer it in writing within five working days'],
 cost='An informal estimate of 35 against 11 actual, 9 resignations from unaffected posts, and 19 responses.'),

lang=dict(
 title='The Unwelcome Number · Publishing eleven against advice',
 setting=[
  'A communications adviser recommends describing the staffing impact as a small '
  'number of roles. Siobhán intends to publish the figure of eleven.',
  'She has to overrule the advice, protect the adviser’s standing, and accept that '
  'eleven people will read the number as being about them.'],
 ladder=[('An adviser protecting eleven people', 'and forty who will count themselves in'),
         ('Eleven', 'against an estimate of thirty-five'),
         ('Either soften the number', 'or publish it and hold the room')],
 cap='Eleven posts, forty people in the room, and one number.',
 turns=[('Turn 1 · Siobhán', 'The announcement will say eleven posts are affected.'),
        ('Turn 2 · Adviser', 'Then eleven people will read a public document as their own redundancy notice.'),
        ('Turn 3 · Siobhán', 'And if we say a small number, forty will, and last time the rumour reached thirty-five in four days.')],
 holds=['Nine people in unaffected posts resigned during the last reconfiguration.',
        'Four of them said they could not live with not knowing whether it was them.',
        'The eleven will be told individually by the twenty-first, which is the commitment I can keep.',
        'Your advice is sound in most organisations; it failed here because we withheld the figure for seven weeks.',
        'I shall say in the room that the decision to publish the number was mine.',
        'And if publishing it produces worse outcomes than last time, I shall say so at the next board and you may quote me.'],
 redline='Never withhold a number you already know from the people it is about, '
         'and never let an adviser carry a decision that is yours.',
 score=['Stated the decision in the first sentence.',
        'Gave the rumour figure and the resignations.',
        'Credited the advice as generally sound.',
        'Took ownership of the decision publicly.',
        'Accepted a test that could prove her wrong.'],
 a=[('What will the announcement say?', 'that eleven posts are affected'),
    ('What is the adviser’s objection?', 'that eleven people will read it as their own notice'),
    ('What did the last rumour reach?', 'thirty-five in four days'),
    ('How many unaffected staff resigned?', 'nine, four citing uncertainty'),
    ('What commitment can Siobhán keep?', 'individual meetings by the twenty-first'),
    ('What is the redline?', 'never withhold a number you already know from the people it is about')]),

rev_fig=figs.split('A MESSAGE TO STAFF',
                   'Say',
                   ['the decision has been taken to close the unit on the thirtieth',
                    'eleven posts are affected',
                    'nothing has been decided about which eleven',
                    'I shall meet everybody affected by the twenty-first'],
                   'Never say',
                   ['we are entering a period of change',
                    'a small number of roles may be affected',
                    'we shall do everything we can',
                    'further communication in due course']),
rev_fig_cap='Four sentences people can take home, and four that reach thirty-five by Thursday.',
rev=dict(
 read=[('What has been decided?',
        ['to close the unit and move the service', 'which posts are affected',
         'nothing yet', 'the new rota'], 0),
       ('How many posts are affected?',
        ['eleven', 'thirty-five', 'a small number', 'forty'], 0),
       ('Why give the number?',
        ['because a withheld number is filled by a worse rumour',
         'because the policy requires it',
         'because the unions insist',
         'because it reassures everybody'], 0),
       ('What may be promised?',
        ['an individual meeting by a stated date',
         'that nobody will lose a job',
         'that the decision may change',
         'that the date will not move'], 0)],
 listen_text='Give it the decision with its date and maker, the open matters, the '
             'exact number affected and the dates you can hold. Put the decision '
             'first.',
 listen=[('Give it the decision with its ____________.', 'date'),
         ('And the matters genuinely still ____________.', 'open'),
         ('And the ____________ number affected.', 'exact'),
         ('Put the ____________ first.', 'decision')],
 speak=['Sort twelve statements into decided and open.',
        'Then replace six reassurances with commitments you control.'],
 write='Write a six-line tasking for a message to staff.',
 vocab=[('A process that could alter the decision is a consultation that is ____________.', 'genuine'),
        ('The figure everybody will count themselves into is a number of posts ____________.', 'affected'),
        ('A statutory or agreed step is a trade union that must be ____________.', 'informed'),
        ('The minimum respect a message requires is a meeting with ____________ and time.', 'chairs')],
 gram=[('The unions ____________ been informed this morning.', 'have'),
       ('And I ____________ not pretend otherwise.', 'shall'),
       ('____________ the twenty-first of this month.', 'By'),
       ('____________ the thirtieth of June.', 'On')]),

found=['State the decision first, with its date and its author.',
       'Give the exact number of posts affected.',
       'Say what has not been decided, and when it will be.',
       'Promise only what you control, and say what you cannot.'],
end_line='Nine people in posts that were never at risk resigned during the first reconfiguration, four of them because nobody would tell them a number.',
end_next='Next: An Enquiry From a Journalist')
