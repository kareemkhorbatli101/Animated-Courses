# -*- coding: utf-8 -*-
import figs

U = dict(
num=10,
title='What No System Can Do for a Manager’s Judgement',
gram='judgement, accountability and what cannot be delegated',
ai='what no system can do for a manager’s judgement',
strap='CEFR B2 · Grammar: judgement, accountability and what cannot be delegated · '
      'AI: what no system can do for a manager’s judgement',
cando=['separate the drafting from the deciding',
       'say what a signature means',
       'name the costs you are accepting on your own account',
       'hold a standard when nobody is checking',
       'write a six-line tasking for your own practice'],

hero=('A SYSTEM CAN DRAFT. IT CANNOT BE ACCOUNTABLE.',
      ['Everything in this book can be drafted for you.',
       'Nothing in it can be answered for you.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Sixty units, six hundred sentences, and one signature that means something.',

warm=['What have you delegated this month that you should not have?',
      'What does your signature mean on a document you did not write?',
      'What standard do you hold when nobody is checking?'],

vocab=[
 ('a judgement that cannot be delegated', 'the part of the work that is yours'),
 ('a task that should be delegated', 'the part that is somebody else’s or a system’s'),
 ('a system that drafts well', 'a tool that saves you the first version'),
 ('a system that cannot be accountable', 'the limit of every tool'),
 ('a signature that means something', 'a signature you would defend in public'),
 ('a signature that means nothing', 'a signature on a document you have not read'),
 ('a decision about one person', 'the decision that cannot be averaged'),
 ('a decision about a thousand people', 'the decision that must be'),
 ('a silence you choose to leave', 'the four seconds that produce an answer'),
 ('a sentence you choose to say first', 'the sentence that sets a conversation'),
 ('a cost you accept on your own account', 'the cost of a decision you own'),
 ('a cost you move to somebody else', 'the cost you must name out loud'),
 ('a loyalty to the organisation', 'the loyalty that pays your salary'),
 ('a loyalty to the person in front of you', 'the loyalty that makes the first worth having'),
 ('a thing you would do again', 'the decision that survives reflection'),
 ('a thing you would not', 'the decision that teaches you something'),
 ('a habit worth keeping for thirty years', 'a practice that compounds'),
 ('a habit worth losing', 'a practice you have outgrown'),
 ('a standard you hold when nobody checks', 'the only standard you actually have'),
 ('a career measured in sentences', 'what a manager leaves behind')],

read=[
 'Everything in these six books can be drafted by something other than you. The '
 'rota check, the leave answer, the business case, the board paper, the '
 'consultation, the five-year plan: all of them can arrive on your desk already '
 'written.',
 'None of them can be answered for you. When the family asks why, when the nurse '
 'asks whether she is in trouble, when the board asks for a date you do not have, '
 'there is a person in the room and the person is you.',
 'So the division is not between work a system does and work you do. It is '
 'between drafting and deciding, and between deciding and answering for the '
 'decision.',
 'Your signature is the whole of it. On a document you have read and understood '
 'it means that you will answer for every sentence; on a document you have not, '
 'it means nothing and everybody will eventually know that.',
 'And the standard is the one you hold when nobody is checking: the gap you mark '
 'on a Thursday, the figure you publish when it is worse, the name you put against '
 'a risk, the apology that says what you did.'],

dp1=('Accountability', 'Governance and professional guidance commonly distinguish '
     'the preparation of material from the decision taken upon it, and treat '
     'accountability as attaching to the individual who takes the decision '
     'regardless of how the material was produced. Delegation frameworks are set '
     'by the organisation.',
     'Source: general corporate governance guidance, 2025–2026.'),

c_a=[('What can be drafted by something other than you?', 'everything in the six books'),
     ('What cannot be done for you?', 'answering for it'),
     ('What three moments are given?', 'the family asking why, the nurse asking if she is in trouble, the board asking for a date'),
     ('What is the real division?', 'between drafting, deciding and answering for the decision'),
     ('What does a signature mean on a document you have read?', 'that you will answer for every sentence'),
     ('What is the only standard you have?', 'the one you hold when nobody is checking')],

c_b=[('Everything in the books can be drafted.', 'T'),
     ('The decisions can also be delegated.', 'F'),
     ('A signature on an unread document means nothing.', 'T'),
     ('Standards held under observation are the real ones.', 'F'),
     ('There is a person in the room, and it is you.', 'T'),
     ('Accountability attaches to the decision-maker.', 'T')],

c_c=[('Everything here ____________ be drafted for you.', 'can'),
     ('Nothing here ____________ be answered for you.', 'can'),
     ('The division ____________ between drafting and deciding.', 'is'),
     ('My signature ____________ that I will answer for every sentence.', 'means'),
     ('I ____________ held that standard when nobody was checking.', 'have'),
     ('The person in the room ____________ me.', 'is')],

c_d=[('Delegate ( the drafting / the deciding ).', ['the drafting', 'the deciding'], 0),
     ('Sign only ( what you have read / what has been checked ).',
      ['what you have read', 'what has been checked'], 0),
     ('Name ( the cost you move to others / the benefit you expect ).',
      ['the cost you move to others', 'the benefit you expect'], 0),
     ('Hold the standard ( when nobody checks / when it is audited ).',
      ['when nobody checks', 'when it is audited'], 0),
     ('Leave ( the silence / a reassurance ) after a hard question.',
      ['the silence', 'a reassurance'], 0)],

c_e=('Delegate it, decide it yourself, answer for it or refuse to do it at all? '
     'Decide what each is.',
     [('drafting the rota check against the gaps', 'delegate it'),
      ('whether to ask Nadia for a second late shift', 'decide it yourself'),
      ('the figure on the first line of a public board paper', 'answer for it'),
      ('writing a provisional cause into a first-day account', 'refuse to do it at all'),
      ('assembling three years of trend figures', 'delegate it'),
      ('promising a bus route you do not own', 'refuse to do it at all')],
     ['delegate it', 'decide it yourself', 'answer for it',
      'refuse to do it at all']),

v_fig_title='SIX WORDS OF A MANAGER’S JUDGEMENT',
v_fig=[('people', 'a judgement that cannot be delegated'), ('doc', 'a signature that means something'),
       ('key', 'a cost you accept on your own account'),
       ('scale', 'a standard you hold when nobody checks'),
       ('clock', 'a habit worth keeping for thirty years'),
       ('note', 'a career measured in sentences')],
v_fig_cap='Six words for sixty units and one signature.',

v_a=[('The part that is somebody else’s or a system’s is a task that should be ____________.', 'delegated'),
     ('The limit of every tool is a system that cannot be ____________.', 'accountable'),
     ('A signature on a document you have not read is a signature that means ____________.', 'nothing'),
     ('The decision that cannot be averaged is a decision about one ____________.', 'person'),
     ('The four seconds that produce an answer is a ____________ you choose to leave.', 'silence'),
     ('The cost you must name out loud is a cost you ____________ to somebody else.', 'move'),
     ('The loyalty that makes the first worth having is a loyalty to the person in front of ____________.', 'you'),
     ('What a manager leaves behind is a career measured in ____________.', 'sentences')],

v_b=[('A system that drafts well is a tool', 'that saves you the first version.'),
     ('A decision about a thousand people is the decision', 'that must be averaged.'),
     ('A thing you would not do again is the decision', 'that teaches you something.'),
     ('A habit worth keeping for thirty years is a practice', 'that compounds.'),
     ('A standard you hold when nobody checks is the only', 'standard you actually have.')],

g_title='Grammar: judgement, accountability and what cannot be delegated',
g_rule=['Use can be drafted and cannot be answered to draw the line: this paper '
        'can be drafted for me; it cannot be answered for me.',
        'Use my signature means to state what you are undertaking: my signature '
        'means that I have read every line and will answer for each of them.',
        'Use I am accepting and I am moving for costs: I am accepting the cost of '
        'the delay; I am moving the cost of the diversion to Marlowe General, and '
        'I am saying so.',
        'Use I should not have for the things you would not do again, in your own '
        'voice and without softening: I should not have written that sentence '
        'about the gap.'],
g_fig=('LOOSE',
       ['The system generated the draft and it was reviewed by the team.',
        'Appropriate assurance processes were followed throughout.',
        'Lessons will be reflected upon in the usual way.',
        'The matter was handled in line with established practice.'],
       'PRECISE',
       ['The draft was generated and I read every line of it before I signed.',
        'My signature means that I will answer for each of those lines.',
        'I am accepting the cost of eleven hours a month and I am saying so to the board.',
        'I should not have written that sentence, and I have told the family so myself.'],
       'four sentences in which nobody is present',
       'four sentences with a person in them'),
g_fig_cap='Can be drafted; cannot be answered. My signature means. I am accepting. I should not have.',

g_a=[('This paper ____________ be drafted for me.', 'can'),
     ('It ____________ be answered for me.', 'cannot'),
     ('My signature ____________ that I have read every line.', 'means'),
     ('And ____________ answer for each of them.', 'will'),
     ('I ____________ accepting the cost of eleven hours a month.', 'am'),
     ('And I ____________ moving the diversion cost to Marlowe.', 'am'),
     ('I ____________ not have written that sentence.', 'should'),
     ('And I ____________ told the family so myself.', 'have'),
     ('The person in the room ____________ me.', 'is')],

g_b=[('( the system generated the draft / this paper can be drafted for me but not answered for me ) — the line.', ['the system generated the draft', 'this paper can be drafted for me but not answered for me'], 1),
     ('( my signature means I will answer for each line / appropriate assurance was followed ) — the signature.',
      ['my signature means I will answer for each line', 'appropriate assurance was followed'], 0),
     ('( I am moving the cost to Marlowe General and saying so / risk was transferred as part of the process ) — the cost.',
      ['I am moving the cost to Marlowe General and saying so', 'risk was transferred as part of the process'], 0),
     ('( I should not have written that sentence / lessons will be reflected upon ) — the admission.',
      ['I should not have written that sentence', 'lessons will be reflected upon'], 0),
     ('( I have told the family so myself / the family were informed in the usual way ) — the person.',
      ['I have told the family so myself', 'the family were informed in the usual way'], 0),
     ('( I read every line before I signed / the draft was reviewed by the team ) — the reading.',
      ['I read every line before I signed', 'the draft was reviewed by the team'], 0)],

d1=dict(
 title='Drafted, decided, answered for',
 fig=(['Drafted in minutes.', 'Decided in hours.'],
      ['Answered for years.', 'One signature.']),
 cap='Margarida Pires and Amara Nwosu, operations manager, at the end of a year.',
 lines=[('Amara', 'Almost everything I write now arrives half written. The rota check, the staffing request, the budget note.'),
        ('Margarida', 'And has anything got worse?'),
        ('Amara', 'One thing. I signed a staffing paper in March that I had not read to the end, because it looked like all the others.'),
        ('Margarida', 'What was in the part you had not read?'),
        ('Amara', 'A figure that was eleven months old, which I then defended in a meeting because it was above my signature.'),
        ('Margarida', 'That is the whole lesson of the year, and it is worth more than the fifty things that went right.'),
        ('Amara', 'I have changed what I do. I read the last page first, because the last page is where the thing I have not thought about is.'),
        ('Margarida', 'What else have you kept?'),
        ('Amara', 'The four seconds. When somebody says they are fine, I say nothing for four seconds, and about half the time they tell me the real thing.'),
        ('Margarida', 'No system will ever do that for you.'),
        ('Amara', 'No. And none of them will stand in a room at six o’clock and tell a ward sister that I cannot move her nurse before April.'),
        ('Margarida', 'That sentence, said properly, is most of what this job is. Everything else is preparation for being the person who says it.')],
 a=[('What arrives half written now?', 'the rota check, the staffing request, the budget note'),
    ('What went wrong in March?', 'she signed a paper she had not read to the end'),
    ('What was in the unread part?', 'a figure eleven months old'),
    ('What has she changed?', 'she reads the last page first'),
    ('What has she kept?', 'the four seconds of silence')],
 b=[('It looked like all the ____________.', 'others'),
    ('Because it was above my ____________.', 'signature'),
    ('I read the last ____________ first.', 'page'),
    ('About half the ____________ they tell me the real thing.', 'time')]),

d2=dict(
 title='The signature that meant nothing',
 fig=(['Eleven signatures.', 'One document read.'],
      ['Figure wrong.', 'Nobody answerable.']),
 cap='Margarida Pires and Peter Lindqvist, non-executive director.',
 lines=[('Peter', 'The capital paper carried eleven signatures and the central figure was wrong by about four hundred thousand.'),
        ('Margarida', 'Eleven people signed and two of them had read it.'),
        ('Peter', 'Each of the other nine assumed that somebody earlier in the list had checked.'),
        ('Margarida', 'Which is what a long list of signatures is for, unfortunately. It distributes comfort rather than accountability.'),
        ('Peter', 'So what should the paper have carried?'),
        ('Margarida', 'One signature, from the person who will answer for the figure, and a line saying what the signature means.'),
        ('Peter', 'The other ten were there to show that the process had been followed.'),
        ('Margarida', 'And the process had been followed, and the figure was still wrong, which tells you what the process was worth.'),
        ('Peter', 'Some organisations would add a twelfth signature after this.'),
        ('Margarida', 'Many do. The honest response is to remove nine of them and tell the remaining two what they are undertaking.'),
        ('Peter', 'And if they then refuse to sign?'),
        ('Margarida', 'Then we have found out something important, and we have found it out before the money was committed rather than after.')],
 unresolved=True,
 a=[('How many signatures and how many readers?', 'eleven signatures, two readers'),
    ('What did the other nine assume?', 'that somebody earlier in the list had checked'),
    ('What does a long signature list distribute?', 'comfort rather than accountability'),
    ('What should the paper have carried?', 'one signature and a line saying what it means'),
    ('What happens if the remaining two refuse?', 'something important is found out before the money is committed')],
 b=[('Two of them ____________ read it.', 'had'),
    ('It distributes ____________ rather than accountability.', 'comfort'),
    ('Tell the remaining two what they are ____________.', 'undertaking'),
    ('Before the money ____________ committed.', 'was')]),

speak=[('Draft or decide',
        ['Your partner reads out twelve tasks from this series.',
         'Say which can be drafted and which must be decided by you.',
         'Six each, then swap.']),
       ('What my signature means',
        ['Your partner hands you six documents.',
         'Say in one sentence what signing each would mean.',
         'Three each, then swap.']),
       ('I should not have',
        ['Your partner describes six decisions you took badly.',
         'Say what you should not have done, without softening it.',
         'Three each, then swap.'])],

ext_title='What no system can do for a manager’s judgement',
ext_fig=figs.datatable('WHERE THE LINE FALLS',
                       ['Can be drafted', 'Cannot be delegated'],
                       [['the rota check', 'asking Nadia a second time'],
                        ['the leave answer', 'the condition you attach'],
                        ['the incident triage', 'the reply to the reporter'],
                        ['the board paper', 'the signature on it'],
                        ['the apology letter', 'the meeting it follows'],
                        ['the five-year plan', 'the judgement when it fails']]),
ext_fig_cap='Six pairs, and the right-hand column is the job.',
ext=[
 'What no system can do for a manager’s judgement is the last question in this '
 'series, and the answer is narrower and harder than it looks.',
 'Give it every task you now have drafted for you, the decisions each of those '
 'drafts leads to, and the moments in the last year when you had to say something '
 'nobody could say for you.',
 'Ask it to sort the list into what may be drafted, what must be decided by you, '
 'and what you must then answer for, which are three categories and not two.',
 'Ask it to name, for each decision, the cost you are accepting yourself and the '
 'cost you are moving to somebody else, because the second is the one that must '
 'be said out loud.',
 'Ask what your signature undertakes on each document, and refuse to sign '
 'anything whose last page you have not read.',
 'What it cannot do is be in the room. The four seconds of silence, the honest '
 'yes, the figure in the first line, the apology that names the act: those are a '
 'person, and after sixty units of preparation the person is still you.'],

dp2=('Judgement and tools', 'Management literature commonly reports that '
     'decision-support tools improve the consistency of preparation without '
     'transferring accountability, and that signature lists of more than two '
     'names are associated with reduced individual verification.',
     'Source: general management practice literature, 2025–2026.'),

e_a=[('What is the last question in the series?', 'what no system can do for a manager’s judgement'),
     ('What three things are given to it?', 'the drafted tasks, the decisions they lead to, and the moments only you could speak'),
     ('What three categories are used?', 'what may be drafted, what you must decide, and what you must answer for'),
     ('Which cost must be said out loud?', 'the cost you move to somebody else'),
     ('What must never be signed?', 'anything whose last page you have not read')],
e_b=[('The sort has three categories, not two.', 'T'),
     ('Costs moved to others are named aloud.', 'T'),
     ('It can be in the room.', 'F'),
     ('Nothing unread is signed.', 'T'),
     ('Tools improve consistency without transferring accountability.', 'T'),
     ('Long signature lists increase individual verification.', 'F')],

w_model='Purpose: so that I know which parts of my work may be prepared for me '
       'and which parts remain mine to decide and to answer for. Scope: my own '
       'practice as a manager; clinical judgements belong to clinicians, and '
       'nothing I delegate removes my accountability for what I sign. Inputs: '
       'every recurring task I now have drafted, the decision each draft leads to, '
       'the moments in the last year when only a person could have spoken, the '
       'documents I sign and what each signature undertakes, and the costs I have '
       'moved to other people. Criteria: each task sorted into drafted, decided '
       'and answered for; the cost I accept and the cost I move named separately '
       'for every decision; the undertaking stated for each signature; nothing '
       'signed whose last page I have not read; and one habit identified to keep '
       'and one to lose. Done: reviewed annually, in writing, and discussed with '
       'somebody who will tell me the truth. Fallback: where I find that I have '
       'signed something I did not read, I say so to whoever relied on it before '
       'anybody else discovers it.',
w_fig=figs.spec_card('SIX LINES FOR YOUR OWN PRACTICE',
                     [('Purpose', 'know what is yours to decide and answer for'),
                      ('Scope', 'my practice; delegation never moves accountability'),
                      ('Inputs', 'drafted tasks, decisions, moments, signatures, costs'),
                      ('Criteria', 'three categories, costs named, signatures stated'),
                      ('Done', 'reviewed annually with somebody honest'),
                      ('Fallback', 'signed unread: say so first')]),
w_fig_cap='Six lines, and the sixth one is the one that takes thirty years to keep.',
w_task='Write a six-line tasking for your own practice.',
w_steps=['Line 1: say what you must know about your own work.',
         'Line 2: say what is yours, and what delegation does not move.',
         'Line 3: say what you are giving it.',
         'Line 4: say how your work is sorted and what is named.',
         'Line 5: say how often you review it and with whom.',
         'Line 6: say what you do when you have signed something unread.'],
w_bank=['Purpose: so that I know which parts of my work may be prepared for me and which parts remain mine to decide and to answer for',
        'Scope: my own practice as a manager; clinical judgements belong to clinicians, and nothing I delegate removes my accountability for what I sign',
        'Inputs: every recurring task I now have drafted, the decision each draft leads to, the moments when only a person could have spoken, the documents I sign and what each signature undertakes, and the costs I have moved to others',
        'Criteria: each task sorted into drafted, decided and answered for; the cost I accept and the cost I move named separately; the undertaking stated for each signature; nothing signed unread; one habit to keep and one to lose',
        'Done: reviewed annually, in writing, and discussed with somebody who will tell me the truth',
        'Fallback: where I find that I have signed something I did not read, I say so to whoever relied on it before anybody else discovers it'],
w_check=['Are there three categories rather than two?',
         'Is the cost moved to others named?',
         'Is each signature’s undertaking stated?',
         'Is anything unread unsigned?'],

t_title='What no system can do for a manager’s judgement',
t_fig=figs.split('SIXTY UNITS AND ONE SIGNATURE',
                 'It can prepare',
                 ['every draft in this series',
                  'the sorting of your work',
                  'the costs on both sides',
                  'the signature undertakings'],
                 'It cannot be',
                 ['in the room',
                  'accountable',
                  'the four seconds of silence',
                  'the person who says it']),
t_fig_cap='It prepares everything. The person in the room is still you.',
t_body=[
 'Give it every task you have drafted, the decision each leads to, and the moments '
 'when only a person could speak.',
 'What no system can do for a manager’s judgement sorts your work into drafted, '
 'decided and answered for.',
 'Then ask what each of your signatures undertakes.'],
t_say=[('Can be drafted: ', 'The paper, the plan, the letter.'),
       ('Cannot be delegated: ', 'The signature and the conversation.'),
       ('I am moving: ', 'This cost to Marlowe, and saying so.')],
t_bound='It cannot be in the room, and after sixty units of preparation the four '
        'seconds of silence are still yours to leave.',
t_a=[('Give it every task you have ____________.', 'drafted'),
     ('And the decision each one ____________ to.', 'leads'),
     ('And the moments when only a ____________ could speak.', 'person'),
     ('Sort your work into drafted, decided and ____________ for.', 'answered'),
     ('And name the cost you ____________ to others.', 'move'),
     ('And what each ____________ undertakes.', 'signature')],
t_b_rubric='Say what the judgement work should do with each item.',
t_b=[('a board paper drafted in minutes', 'ask what your signature undertakes'),
     ('a diversion that moves risk elsewhere', 'name the cost you are moving'),
     ('a nurse asking whether she is in trouble', 'keep it; it cannot be delegated'),
     ('a paper whose last page you have not read', 'refuse to sign it')],

case=dict(
 title='The Decision Room · The eleven signatures',
 brief=[
  'A hospital required capital papers to be signed by every director whose '
  'department was affected, on the view that broad sign-off demonstrated '
  'assurance.',
  'Over four years, 23 capital papers were signed by a mean of nine directors. A '
  'review of 6 papers containing a material error found that a mean of 2 '
  'signatories had read the paper in full. In the largest case a figure wrong by '
  'about four hundred thousand pounds had been signed by eleven people. No '
  'individual was identified as accountable in any of the six cases.',
  'The requirement was changed to one signature, from the director accountable '
  'for the figure, above a line stating what the signature undertook. Material '
  'errors fell from 6 in 23 papers to 1 in 21.'],
 exhibit=figs.datatable('FOUR YEARS OF CAPITAL PAPERS',
                        ['Item', 'Before / After'],
                        [['papers signed', '23 / 21'],
                         ['mean signatories per paper', '9 / 1'],
                         ['papers with a material error', '6 / 1'],
                         ['mean signatories who had read it in full', '2 / 1'],
                         ['cases with an identified accountable individual', '0 of 6 / 1 of 1'],
                         ['largest error', '400,000 / 11,000']]),
 exhibit_cap='One signature that means something, instead of nine that mean nothing.',
 exhibit_note='Eleven people signed a paper containing a figure wrong by four '
              'hundred thousand pounds, and each of them believed that somebody '
              'earlier in the list had checked it.',
 voices=[('A director', 'about single signatures',
          'Reducing a capital paper to one signature concentrates risk on one person instead of sharing it properly.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Nine signatures on the four hundred thousand paper produced nobody who could be asked about it.'),
         ('A non-executive', 'about the change',
          'I now know, from the line above the signature, exactly what the person signing says they have done.')],
 steps=[('Find it', 'How many signatories had read each paper?'),
        ('Compare it', 'Signatories against identified accountability.'),
        ('Infer it', 'Why did many signatures reduce verification?'),
        ('Weigh it', 'Shared risk against nobody answerable.'),
        ('Decide', 'How many signatures, and what do they mean?')],
 analysis=[('Find it. How many?', 'a mean of 2 of 9'),
           ('Compare it. How many accountable?', 'none in six cases'),
           ('Infer it. Why?', 'because each signatory assumed an earlier one had checked'),
           ('Weigh it. What was traded?', 'shared comfort for an unchecked four hundred thousand'),
           ('Decide. How many?', 'one, with a line stating what it undertakes')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say how many signatures a paper carries.',
                 'Say what the signature means.',
                 'Say what may not be signed.',
                 'Say what happens when something unread has been signed.'],
 bank=['Every paper requiring approval carries the signature of one individual, who is the person accountable for the figures and recommendations in it.',
       'Above every signature a line states that the signatory has read the paper in full and will answer for each of its statements.',
       'No document is signed by any person who has not read it in full, including its appendices and its final page.',
       'Where a signatory discovers that they have signed a document they had not read, they inform everybody who has relied on it before the error is discovered elsewhere.'],
 outcome='The organisation adopts the four lines. Mean signatories per paper fall '
         'from nine to one, papers containing a material error from six in '
         'twenty-three to one in twenty-one, the largest error from four hundred '
         'thousand to eleven thousand, and every case now has an identified '
         'accountable individual.',
 outcome_q=[('What happened to the number of signatures?', 'it fell from nine to one'),
            ('What happened to material errors?', 'they fell from six in twenty-three to one in twenty-one'),
            ('What happened to the largest error?', 'it fell from four hundred thousand to eleven thousand'),
            ('What happened to accountability?', 'every case now has an identified individual'),
            ('How many signatories had read each paper before?', 'a mean of two of nine')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · In line with established practice',
 task=['This was the closing section of a year-end report by a manager on their '
       'own practice.',
       'This is what it said.'],
 draft=['The system generated the drafts and they were reviewed by the team.',
        'Appropriate assurance processes were followed throughout the year.',
        'A number of lessons have been identified for future consideration.',
        'Matters were handled in line with established practice.',
        'Lessons will be reflected upon in the usual way.',
        'The approach will continue to evolve as systems develop.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines about a manager’s own year in which no person appears.',
 asked=['appropriate assurance processes', 'a number of lessons',
        'in the usual way'],
 back=['a mean of 9 signatories per paper',
       '2 of whom had read it', 'an error of 400,000 signed by 11 people'],
 gap='Nobody could tell what this manager decided, what they signed, what it cost anybody, or what they would do differently.',
 back_cap='Six lines in which the passive voice has removed the author entirely.',
 back_note='“Matters were handled in line with established practice” is the '
           'sentence a manager writes instead of “I decided, and here is what it '
           'cost”.',
 diagnosis=[('“reviewed by the team”', 'unscoped set'),
            ('“appropriate assurance processes”', 'unscoped set'),
            ('“in the usual way”', 'unstated criterion'),
            ('“established practice”', 'unstated criterion'),
            ('“will be reflected upon”', 'undefined done'),
            ('“continue to evolve”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that a person appears in every sentence.',
 scaffold=['what you must know about your own work',
           'what is yours, and what delegation does not move',
           'what you are giving it',
           'how your work is sorted and what is named',
           'how often you review it and with whom',
           'what you do when you have signed something unread'],
 bank=['Purpose: so that I know which parts of my work may be prepared for me and which parts remain mine to decide and to answer for',
       'Scope: my own practice as a manager; clinical judgements belong to clinicians, and nothing I delegate removes my accountability for what I sign',
       'Inputs: every recurring task I now have drafted, the decision each draft leads to, the moments in the last year when only a person could have spoken, the documents I sign and what each signature undertakes, and the costs I have moved to other people',
       'Criteria: each task sorted into drafted, decided and answered for; the cost I accept and the cost I move named separately for every decision; the undertaking stated for each signature; nothing signed whose last page I have not read; and one habit identified to keep and one to lose',
       'Done: reviewed annually, in writing, and discussed with somebody who will tell me the truth',
       'Fallback: where I find that I have signed something I did not read, I say so to whoever relied on it before anybody else discovers it'],
 check=['Does a person appear in every sentence?',
        'Are the three categories separated?',
        'Are the costs named on both sides?',
        'Is one habit to lose identified?'],
 model=['so that I know which parts of my work may be prepared for me and which parts remain mine to decide and to answer for',
        'my own practice as a manager; clinical judgements belong to clinicians, and nothing I delegate removes my accountability for what I sign',
        'every recurring task I now have drafted, the decision each draft leads to, the moments in the last year when only a person could have spoken, the documents I sign and what each signature undertakes, and the costs I have moved to other people',
        'each task sorted into drafted, decided and answered for; the cost I accept and the cost I move named separately for every decision; the undertaking stated for each signature; nothing signed whose last page I have not read; and one habit identified to keep and one to lose',
        'reviewed annually, in writing, and discussed with somebody who will tell me the truth',
        'where I find that I have signed something I did not read, I say so to whoever relied on it before anybody else discovers it'],
 cost='A mean of 9 signatories of whom 2 had read the paper, and an error of 400,000 signed by 11 people.'),

lang=dict(
 title='The Unwelcome Number · Telling the board you signed something you had not read',
 setting=[
  'Margarida signed a paper in March whose final page contained a figure eleven '
  'months out of date, and she then defended the figure in a meeting.',
  'She has to say so to the board before the auditors do, and without '
  'distributing the fault among the people who prepared it.'],
 ladder=[('A manager with a good year', 'and one signature that meant nothing'),
         ('One figure', 'eleven months out of date'),
         ('Either let the auditors find it', 'or say it first and keep the signature worth something')],
 cap='One paper, one unread page, and one figure defended in good faith.',
 turns=[('Turn 1 · Margarida', 'I signed the March paper without reading its final page, and the figure I defended in this room was eleven months old.'),
        ('Turn 2 · Board member', 'The team prepared the paper. Surely the error is theirs rather than yours.'),
        ('Turn 3 · Margarida', 'They prepared it. I signed it, and my signature says that I have read it and will answer for it.')],
 holds=['Nobody else in the organisation should carry this, and I shall say so in writing.',
        'The figure has been corrected and the three decisions taken on it are being revisited.',
        'I have changed what I do: I read the last page first, because that is where what I have not considered sits.',
        'If the board wishes to record the matter formally, I shall not contest it.',
        'The alternative was for the auditors to find it in July, which would have cost the organisation more than it costs me tonight.',
        'And if my signature is to mean anything on the next paper, it has to mean something about this one.'],
 redline='Never sign a document you have not read to the last page, and never let '
         'the people who prepared it carry a failure of your own signature.',
 score=['Said it in the first sentence, unprompted.',
        'Refused to distribute the fault.',
        'Stated the correction and the consequences.',
        'Named the specific change in practice.',
        'Accepted a formal record without contest.'],
 a=[('What did Margarida sign?', 'the March paper, without reading its final page'),
    ('What was wrong with the figure?', 'it was eleven months out of date'),
    ('Whose fault is it?', 'hers, because her signature says she has read it'),
    ('What has she changed?', 'she reads the last page first'),
    ('What would the alternative have been?', 'the auditors finding it in July'),
    ('What is the redline?', 'never sign a document you have not read to the last page')]),

rev_fig=figs.split('A MANAGER’S JUDGEMENT',
                   'Say',
                   ['this can be drafted for me; it cannot be answered for me',
                    'my signature means I have read every line',
                    'I am moving this cost to Marlowe, and I am saying so',
                    'I should not have written that sentence'],
                   'Never say',
                   ['the system generated the draft',
                    'appropriate assurance was followed',
                    'matters were handled in line with practice',
                    'lessons will be reflected upon']),
rev_fig_cap='Four sentences with a person in them, and four in which nobody is present.',
rev=dict(
 read=[('What can be drafted?',
        ['everything in the six books', 'nothing',
         'only the routine documents', 'only the long documents'], 0),
       ('What cannot be done for you?',
        ['answering for it', 'drafting it', 'checking it', 'filing it'], 0),
       ('What does a signature on an unread document mean?',
        ['nothing', 'that the process was followed',
         'that somebody else checked', 'that it was urgent'], 0),
       ('What is the only standard you have?',
        ['the one you hold when nobody checks', 'the published policy',
         'the audited standard', 'the one your peers hold'], 0)],
 listen_text='Give it every task you have drafted, the decision each leads to, and '
             'the moments when only a person could speak. Sort your work into '
             'three categories.',
 listen=[('Give it every task you have ____________.', 'drafted'),
         ('And the decision each one ____________ to.', 'leads'),
         ('And the moments when only a ____________ could speak.', 'person'),
         ('Sort your work into drafted, decided and ____________ for.', 'answered')],
 speak=['Sort twelve tasks into drafted, decided and answered for.',
        'Then say what signing six documents would undertake.'],
 write='Write a six-line tasking for your own practice.',
 vocab=[('The part of the work that is yours is a judgement that cannot be ____________.', 'delegated'),
        ('A signature you would defend in public is a signature that means ____________.', 'something'),
        ('The sentence that sets a conversation is a sentence you choose to say ____________.', 'first'),
        ('A practice you have outgrown is a habit worth ____________.', 'losing')],
 gram=[('I read every line before I ____________ it.', 'signed'),
       ('And I ____________ told the family so myself.', 'have'),
       ('I ____________ accepting the cost of eleven hours a month.', 'am'),
       ('My signature ____________ that I have read every line.', 'means')]),

found=['Delegate the drafting; keep the deciding and the answering.',
       'Sign nothing whose last page you have not read.',
       'Name the cost you accept and the cost you move to others.',
       'Hold the standard when nobody is checking, because that is the only one you have.'],
end_line='Eleven people signed a paper containing a figure wrong by four hundred thousand pounds, and every one of them believed that somebody earlier in the list had read it.',
end_next='This is the end of the series. The rest is practice.')
