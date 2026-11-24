# -*- coding: utf-8 -*-
import figs

U = dict(
num=9,
title='A Figure the Board Will Not Like',
gram='presenting an unwelcome figure: lead, cause, action',
ai='an unwelcome figure prepared as lead, cause and action',
strap='CEFR B2 · Grammar: presenting an unwelcome figure: lead, cause, action · '
      'AI: an unwelcome figure prepared as lead, cause and action',
cando=['lead with the unwelcome figure',
       'distinguish a cause you can demonstrate from one you suspect',
       'say what has already been done and what needs the board',
       'give a recovery date you can defend',
       'write a six-line tasking for an unwelcome figure'],

hero=('LEAD WITH IT. YOU WILL NOT GET A BETTER MOMENT.',
      ['A bad figure on page nine is a bad figure',
       'plus the discovery that you buried it.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='One figure, ninety seconds, and a date the board will hold you to.',

warm=['What was the last bad figure you had to present?',
      'Where was it in the paper?',
      'What did the board ask first?'],

vocab=[
 ('a figure that is worse than last month', 'a movement that must be explained'),
 ('a figure that is worse than it looks', 'a figure with a deteriorating trend behind it'),
 ('a figure that is better than it looks', 'a figure improved by something temporary'),
 ('a cause you can demonstrate', 'a cause with evidence attached'),
 ('a cause you suspect', 'a cause to label as a suspicion'),
 ('an action already taken', 'the thing that shows you were not waiting'),
 ('an action that needs the board', 'the reason the item is on the agenda'),
 ('a figure presented in the first line', 'a figure presented honestly'),
 ('a figure found on page nine', 'a figure that will define the meeting'),
 ('a comparison with the same month last year', 'the comparison that survives seasonality'),
 ('a comparison with the best month ever', 'the comparison that destroys credibility'),
 ('a board that asks who is accountable', 'a board looking for a person'),
 ('a board that asks what is being done', 'a board looking for a plan'),
 ('an executive who explains for nine minutes', 'an executive who has lost the room'),
 ('an executive who explains in ninety seconds', 'an executive who has kept it'),
 ('a question you anticipated', 'the question you have an answer to'),
 ('a question you did not', 'the question to answer in writing'),
 ('a recovery date you can defend', 'a date with a mechanism behind it'),
 ('a recovery date you invented', 'a date that will be quoted in March'),
 ('a figure that will be worse next month', 'the thing to say before you are asked')],

read=[
 'Delayed discharges are thirty-one against a plan of nineteen, and the figure '
 'will be worse next month. The board meets on Thursday.',
 'Lead with it. The first line of the paper and the first sentence you speak are '
 'the only moments at which you choose how this is received.',
 'Then separate what you can demonstrate from what you suspect. Two causes are '
 'evidenced: the assessment backlog and the loss of eleven care home places. A '
 'third, the new referral form, is a suspicion and must be labelled as one.',
 'Then say what has been done without the board and what needs the board. Those '
 'are different lists and merging them is how a board concludes that nothing has '
 'happened.',
 'And give a recovery date only if you can describe the mechanism. A date without '
 'a mechanism is a hostage, and in March somebody will read it out.'],

dp1=('Performance reporting', 'Governance guidance commonly recommends presenting '
     'adverse figures prominently, distinguishing evidenced from suspected '
     'causes, separating actions taken from decisions required, and supporting any '
     'recovery date with a described mechanism. Reporting conventions are set by '
     'the organisation.',
     'Source: general corporate governance guidance, 2025–2026.'),

c_a=[('What is the figure?', 'thirty-one against a plan of nineteen'),
     ('What will happen next month?', 'it will be worse'),
     ('Which two moments decide the reception?', 'the first line of the paper and the first sentence spoken'),
     ('What two causes are evidenced?', 'the assessment backlog and the loss of eleven care home places'),
     ('What is the third cause?', 'the new referral form, which is a suspicion'),
     ('When may a recovery date be given?', 'only if the mechanism can be described')],

c_b=[('The figure is thirty-one against a plan of nineteen.', 'T'),
     ('Next month will be better.', 'F'),
     ('Two causes are evidenced and one suspected.', 'T'),
     ('Actions taken and decisions required are one list.', 'F'),
     ('A recovery date needs a mechanism.', 'T'),
     ('A bad figure is led with.', 'T')],

c_c=[('Delayed discharges ____________ thirty-one against a plan of nineteen.', 'are'),
     ('The figure ____________ be worse next month.', 'will'),
     ('Two causes ____________ evidenced.', 'are'),
     ('The third ____________ a suspicion and I label it as one.', 'is'),
     ('We ____________ already opened eleven interim places.', 'have'),
     ('What I ____________ from the board is the funding for four assessors.', 'need')],

c_d=[('Lead with ( the context / the figure ).', ['the context', 'the figure'], 1),
     ('Label ( a suspicion as a suspicion / every cause equally ).',
      ['a suspicion as a suspicion', 'every cause equally'], 0),
     ('Separate ( actions taken from decisions needed / causes from effects ).',
      ['actions taken from decisions needed', 'causes from effects'], 0),
     ('Give a recovery date ( with its mechanism / to reassure the board ).',
      ['with its mechanism', 'to reassure the board'], 0),
     ('Say that next month ( will be worse / may be challenging ).',
      ['will be worse', 'may be challenging'], 0)],

c_e=('An evidenced cause, a suspicion, an action taken or a decision needed? '
     'Decide what each is.',
     [('the assessment backlog, with its waiting times', 'an evidenced cause'),
      ('the new referral form may be deterring referrals', 'a suspicion'),
      ('eleven interim places opened last week', 'an action taken'),
      ('funding for four assessors for two quarters', 'a decision needed'),
      ('the loss of eleven care home places in January', 'an evidenced cause'),
      ('authority to vary the care home contract', 'a decision needed')],
     ['an evidenced cause', 'a suspicion', 'an action taken',
      'a decision needed']),

v_fig_title='SIX WORDS OF AN UNWELCOME FIGURE',
v_fig=[('scale', 'a figure presented in the first line'), ('key', 'a cause you can demonstrate'),
       ('doc', 'an action already taken'),
       ('people', 'an action that needs the board'),
       ('clock', 'a recovery date you can defend'),
       ('note', 'a figure that will be worse next month')],
v_fig_cap='Six words for one figure and ninety seconds.',

v_a=[('A figure with a deteriorating trend behind it is a figure that is worse than it ____________.', 'looks'),
     ('A figure improved by something temporary is a figure that is ____________ than it looks.', 'better'),
     ('A cause to label as a suspicion is a cause you ____________.', 'suspect'),
     ('The reason the item is on the agenda is an action that needs the ____________.', 'board'),
     ('A figure that will define the meeting is a figure found on page ____________.', 'nine'),
     ('The comparison that destroys credibility is a comparison with the ____________ month ever.', 'best'),
     ('An executive who has lost the room is an executive who explains for ____________ minutes.', 'nine'),
     ('A date that will be quoted in March is a recovery date you ____________.', 'invented')],

v_b=[('A comparison with the same month last year is the comparison', 'that survives seasonality.'),
     ('A board that asks who is accountable is a board', 'looking for a person.'),
     ('A board that asks what is being done is a board', 'looking for a plan.'),
     ('A question you did not anticipate is the question', 'to answer in writing.'),
     ('A recovery date you can defend is a date', 'with a mechanism behind it.')],

g_title='Grammar: presenting an unwelcome figure: lead, cause, action',
g_rule=['Lead with the figure and the plan in one sentence: delayed discharges '
        'were thirty-one in October against a plan of nineteen.',
        'Grade the causes with are evidenced and I suspect: two causes are '
        'evidenced; a third, the new referral form, I suspect but cannot yet '
        'demonstrate.',
        'Split the actions with we have and I need: we have opened eleven interim '
        'places; what I need from the board is funding for four assessors.',
        'Give the recovery date with its mechanism or not at all: the figure '
        'returns to nineteen in February if the four assessors are in post by the '
        'ninth of December.'],
g_fig=('LOOSE',
       ['Performance in this area has been challenging in recent months.',
        'A number of factors have contributed to the current position.',
        'A range of mitigating actions is being progressed at pace.',
        'We expect to see improvement in the coming period.'],
       'PRECISE',
       ['Delayed discharges were thirty-one in October against a plan of nineteen, and November will be worse.',
        'Two causes are evidenced: the assessment backlog and the loss of eleven care home places in January.',
        'We have opened eleven interim places; what I need from the board is funding for four assessors.',
        'The figure returns to nineteen in February if those assessors are in post by the ninth of December.'],
       'four sentences that produce an hour of questions',
       'four sentences that produce a decision'),
g_fig_cap='The figure against plan. Two causes are evidenced. We have; I need. Returns if.',

g_a=[('Delayed discharges ____________ thirty-one in October.', 'were'),
     ('____________ a plan of nineteen.', 'Against'),
     ('And November ____________ be worse.', 'will'),
     ('Two causes ____________ evidenced.', 'are'),
     ('A third I ____________ but cannot demonstrate.', 'suspect'),
     ('We ____________ opened eleven interim places.', 'have'),
     ('What I ____________ from the board is funding for four assessors.', 'need'),
     ('The figure ____________ to nineteen in February.', 'returns'),
     ('____________ those assessors are in post by December.', 'If')],

g_b=[('( delayed discharges were thirty-one against a plan of nineteen / performance has been challenging ) — the figure.', ['delayed discharges were thirty-one against a plan of nineteen', 'performance has been challenging'], 0),
     ('( two causes are evidenced: the backlog and eleven lost places / a number of factors have contributed ) — the causes.',
      ['two causes are evidenced: the backlog and eleven lost places', 'a number of factors have contributed'], 0),
     ('( a third I suspect but cannot demonstrate / the referral form is also a factor ) — the suspicion.',
      ['a third I suspect but cannot demonstrate', 'the referral form is also a factor'], 0),
     ('( we have opened eleven interim places / mitigating actions are being progressed ) — the action taken.',
      ['we have opened eleven interim places', 'mitigating actions are being progressed'], 0),
     ('( what I need from the board is funding for four assessors / further support would be welcome ) — the ask.',
      ['what I need from the board is funding for four assessors', 'further support would be welcome'], 0),
     ('( returns to nineteen in February if the assessors are in post by December / we expect improvement in the coming period ) — the recovery.',
      ['returns to nineteen in February if the assessors are in post by December', 'we expect improvement in the coming period'], 0)],

d1=dict(
 title='Thirty-one against nineteen',
 fig=(['Plan: 19.', 'Actual: 31.'],
      ['Two causes.', 'One ask.']),
 cap='Margarida Pires and Siobhán Carrick, deputy chief executive, before a board meeting.',
 lines=[('Siobhán', 'Thirty-one against a plan of nineteen, and the draft has it in the performance appendix.'),
        ('Margarida', 'Then it goes in the first line of the paper and the first sentence I say.'),
        ('Siobhán', 'That will take the whole item.'),
        ('Margarida', 'It will take ninety seconds, and then the item is about the four assessors, which is what I actually want.'),
        ('Siobhán', 'And the causes?'),
        ('Margarida', 'Two I can show: the assessment backlog, with the waiting times, and eleven care home places lost in January.'),
        ('Siobhán', 'The referral form is the third.'),
        ('Margarida', 'I suspect it and I cannot show it, so I shall say exactly that. A suspicion offered as a cause is the thing a board remembers when it turns out to be wrong.'),
        ('Siobhán', 'Do you give them a recovery date?'),
        ('Margarida', 'February, if four assessors are in post by the ninth of December. The date has a mechanism, which means I can be held to it.'),
        ('Siobhán', 'And November?'),
        ('Margarida', 'Will be worse, and I shall say so before anybody asks, because being told in December that I knew in November is the only version of this that costs me the board.')],
 a=[('Where is the figure in the draft?', 'in the performance appendix'),
    ('Where will it go?', 'in the first line and the first sentence'),
    ('What two causes can be shown?', 'the assessment backlog and eleven lost care home places'),
    ('How is the referral form treated?', 'as a suspicion that cannot be shown'),
    ('What is the recovery date and its mechanism?', 'February, if four assessors are in post by the ninth of December')],
 b=[('It goes in the ____________ line.', 'first'),
    ('Two I can ____________.', 'show'),
    ('The date has a ____________.', 'mechanism'),
    ('I shall say so before anybody ____________.', 'asks')]),

d2=dict(
 title='The recovery date that was invented',
 fig=(['Date given: March.', 'No mechanism.'],
      ['March missed.', 'Credibility gone.']),
 cap='Margarida Pires and Peter Lindqvist, non-executive director.',
 lines=[('Peter', 'In September we were told the figure would recover by March. It is May.'),
        ('Margarida', 'The March date had no mechanism behind it. It was given because the board asked for a date.'),
        ('Peter', 'We did ask.'),
        ('Margarida', 'You did, and the right answer was that there was no date until the assessors were funded, which is a worse answer and a true one.'),
        ('Peter', 'A board that is told there is no date tends to ask harder questions.'),
        ('Margarida', 'It does, and those questions would have produced the assessors in October instead of February.'),
        ('Peter', 'So the invented date protected the executive and cost the service.'),
        ('Margarida', 'It protected one afternoon and cost four months, which is the usual exchange rate.'),
        ('Peter', 'What should I do when I ask for a date and get a mechanism instead?'),
        ('Margarida', 'Take the mechanism, fund it or refuse it, and hold whoever gave it to the date that follows. That is a board doing its work.'),
        ('Peter', 'And if nobody can give me a mechanism at all?'),
        ('Margarida', 'Then there is no recovery plan, and the paper should say so in those words rather than offering you a month.')],
 unresolved=True,
 a=[('What was promised in September?', 'recovery by March'),
    ('What was behind the date?', 'no mechanism'),
    ('What was the right answer?', 'that there was no date until the assessors were funded'),
    ('What would the harder questions have produced?', 'the assessors in October instead of February'),
    ('What should a paper say when no mechanism exists?', 'that there is no recovery plan, in those words')],
 b=[('The March date had no ____________ behind it.', 'mechanism'),
    ('A worse answer and a ____________ one.', 'true'),
    ('It protected one ____________.', 'afternoon'),
    ('Rather than offering you a ____________.', 'month')]),

speak=[('Lead with it',
        ['Your partner gives you six unwelcome figures.',
         'Open each with the figure and the plan in one sentence.',
         'Three each, then swap.']),
       ('Shown or suspected',
        ['Your partner gives you six causes.',
         'Say which you could demonstrate and which you would label.',
         'Three each, then swap.']),
       ('Date or mechanism',
        ['Your partner asks you for six recovery dates.',
         'Give a date with its mechanism, or refuse the date.',
         'Three each, then swap.'])],

ext_title='An unwelcome figure prepared as lead, cause and action',
ext_fig=figs.datatable('WHAT THE PREPARATION CARRIES',
                       ['Line', 'Content'],
                       [['the figure', 'against plan, in the first line'],
                        ['next month', 'stated before anybody asks'],
                        ['evidenced causes', 'with the evidence named'],
                        ['suspected causes', 'labelled as suspicions'],
                        ['actions taken', 'what has been done already'],
                        ['the ask', 'what is needed from the board']]),
ext_fig_cap='Six lines in ninety seconds, and the second one buys you the rest.',
ext=[
 'An unwelcome figure prepared as lead, cause and action turns the worst item on '
 'the agenda into the one the board can act on.',
 'Give it the figure against plan with its trend, the causes with whatever '
 'evidence exists for each, what has already been done, and what you need the '
 'board to decide.',
 'Ask for the figure and the plan in the first sentence, and for next month’s '
 'likely direction in the second.',
 'Ask it to grade every cause as evidenced or suspected, and to label the '
 'suspicions as suspicions in the text rather than in a footnote.',
 'Ask for actions already taken to be separated from decisions required, since a '
 'merged list reads as though nothing has happened without the board.',
 'What it cannot do is invent a recovery date. A date with no mechanism behind it '
 'protects one afternoon and costs four months, and only a person can decide to '
 'refuse to give one.'],

dp2=('Adverse reporting', 'Governance literature commonly reports that adverse '
     'figures presented prominently attract fewer accountability questions than '
     'those discovered later in a paper, and that recovery dates without a '
     'described mechanism are frequently missed.',
     'Source: general corporate governance literature, 2025–2026.'),

e_a=[('What does the preparation turn the worst item into?', 'the one the board can act on'),
     ('What four things are given to it?', 'the figure against plan with its trend, the causes with evidence, the actions taken, and the decision needed'),
     ('What goes in the first two sentences?', 'the figure against plan, and next month’s direction'),
     ('How is every cause graded?', 'as evidenced or suspected'),
     ('Why separate actions from decisions?', 'because a merged list reads as though nothing has happened')],
e_b=[('The figure and the plan come first.', 'T'),
     ('Suspicions are labelled in the text.', 'T'),
     ('It invents a recovery date.', 'F'),
     ('Actions taken are separated from decisions required.', 'T'),
     ('Prominent adverse figures attract fewer accountability questions.', 'T'),
     ('Dates without mechanisms are usually met.', 'F')],

w_model='Purpose: so that the worst figure in the pack is the item the board can '
       'act on rather than the item that defines the meeting. Scope: operational '
       'performance figures I am accountable for; clinical outcome figures are the '
       'medical director’s, and no cause involving another director’s service is '
       'stated without their agreement. Inputs: the figure against plan with '
       'twelve months of trend, every candidate cause with the evidence that '
       'exists for it, what has already been done and when, what the board is '
       'being asked to decide, and the mechanism for any recovery. Criteria: the '
       'figure and the plan in the first sentence; the likely direction next month '
       'in the second; causes graded as evidenced or suspected with suspicions '
       'labelled in the text; actions taken separated from decisions required; '
       'and a recovery date given only where its mechanism is described. Done: '
       'presented in ninety seconds, with questions I cannot answer recorded and '
       'answered in writing within five working days. Fallback: where no mechanism '
       'exists, I say that there is no recovery plan in those words rather than '
       'offering a month.',
w_fig=figs.spec_card('SIX LINES FOR AN UNWELCOME FIGURE',
                     [('Purpose', 'actionable, not meeting-defining'),
                      ('Scope', 'my own figures; no causes in others’ services'),
                      ('Inputs', 'figure against plan, trend, causes, actions, mechanism'),
                      ('Criteria', 'figure first, next month second, causes graded'),
                      ('Done', 'ninety seconds, unanswered questions in writing'),
                      ('Fallback', 'no mechanism: say there is no recovery plan')]),
w_fig_cap='Six lines, and the sixth one is the sentence nobody wants to say.',
w_task='Write a six-line tasking for an unwelcome figure.',
w_steps=['Line 1: say what the worst figure must become.',
         'Line 2: say which figures are yours, and whose causes you may not state.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the first two sentences contain and how causes are graded.',
         'Line 5: say how long you speak and what follows.',
         'Line 6: say what you do when there is no mechanism.'],
w_bank=['Purpose: so that the worst figure in the pack is the item the board can act on rather than the item that defines the meeting',
        'Scope: operational performance figures I am accountable for; clinical outcome figures are the medical director’s and no cause in another director’s service is stated without their agreement',
        'Inputs: the figure against plan with twelve months of trend, every candidate cause with its evidence, what has been done and when, what the board must decide, and the mechanism for any recovery',
        'Criteria: the figure and plan in the first sentence; next month’s direction in the second; causes graded as evidenced or suspected with suspicions labelled in the text; actions taken separated from decisions required; a recovery date only with its mechanism',
        'Done: presented in ninety seconds, with questions I cannot answer recorded and answered in writing within five working days',
        'Fallback: where no mechanism exists, I say that there is no recovery plan in those words rather than offering a month'],
w_check=['Is the figure in the first sentence?',
         'Is next month stated?',
         'Are suspicions labelled?',
         'Has any date a mechanism?'],

t_title='An unwelcome figure prepared as lead, cause and action',
t_fig=figs.split('THIRTY-ONE AGAINST NINETEEN',
                 'It can prepare',
                 ['the figure against plan',
                  'the graded causes',
                  'actions taken and needed',
                  'the mechanism test'],
                 'It must not supply',
                 ['a recovery date',
                  'a cause you cannot show',
                  'a cause in another service',
                  'the ninety seconds']),
t_fig_cap='It prepares the item. Refusing to invent a date is a decision.',
t_body=[
 'Give it the figure against plan with its trend, the causes with their evidence, '
 'what has been done and what the board must decide.',
 'An unwelcome figure prepared as lead, cause and action puts the figure and the '
 'plan in the first sentence.',
 'Then ask it to grade every cause as evidenced or suspected.'],
t_say=[('The figure: ', 'Thirty-one, against a plan of nineteen.'),
       ('Next month: ', 'Will be worse.'),
       ('I need: ', 'Funding for four assessors.')],
t_bound='It cannot invent a recovery date, and a date without a mechanism '
        'protects one afternoon and costs four months.',
t_a=[('Give it the figure against ____________.', 'plan'),
     ('And the causes with their ____________.', 'evidence'),
     ('And what the board must ____________.', 'decide'),
     ('Put the figure and the plan in the ____________ sentence.', 'first'),
     ('And next month in the ____________.', 'second'),
     ('And grade every cause as evidenced or ____________.', 'suspected')],
t_b_rubric='Say what the preparation should do with each item.',
t_b=[('a bad figure in the performance appendix', 'move it to the first line'),
     ('“a number of factors have contributed”', 'grade the causes as shown or suspected'),
     ('a merged list of actions and asks', 'separate what is done from what is needed'),
     ('a recovery date with no mechanism', 'refuse the date and say there is no plan')],

case=dict(
 title='The Decision Room · The date that was given because the board asked',
 brief=[
  'A hospital board received monthly performance reports in which adverse figures '
  'appeared in appendices and recovery dates were given in response to questions '
  'in the meeting.',
  'Over three years, 36 reports contained an adverse figure against plan. In 24 '
  'the figure first appeared after page five. Recovery dates were given for 19 '
  'adverse figures; 14 of those dates were missed, and in 11 of the 14 no '
  'mechanism had been described when the date was given. In 6 meetings the board '
  'asked who was accountable before it asked what was being done.',
  'A rule was introduced that adverse figures appear in the first line with next '
  'month’s direction, and that no recovery date is given without a described '
  'mechanism. Dates missed fell to 2 of 11.'],
 exhibit=figs.datatable('THREE YEARS OF PERFORMANCE REPORTING',
                        ['Item', 'Before / After'],
                        [['reports with an adverse figure', '36 / 33'],
                         ['figures first appearing after page five', '24 / 0'],
                         ['recovery dates given', '19 / 11'],
                         ['recovery dates missed', '14 / 2'],
                         ['dates given without a mechanism', '11 / 0'],
                         ['meetings asking who before what', '6 / 1']]),
 exhibit_cap='Fewer dates, described mechanisms, and two misses instead of fourteen.',
 exhibit_note='Eleven of fourteen missed recovery dates had been given without any '
              'mechanism, usually in answer to a question in the meeting.',
 voices=[('An executive', 'about giving dates',
          'A board that is told there is no recovery date concludes that the executive has no grip.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Fourteen of nineteen dates were missed, and eleven of those were invented in the room.'),
         ('A non-executive', 'about the appendix',
          'I found the figure on page nine. From that moment the meeting was about why it was on page nine.')],
 steps=[('Find it', 'How many figures appeared after page five?'),
        ('Compare it', 'Dates given against dates missed.'),
        ('Infer it', 'Why were dates given in the room missed?'),
        ('Weigh it', 'The appearance of grip against fourteen missed dates.'),
        ('Decide', 'Where does an adverse figure appear, and when is a date given?')],
 analysis=[('Find it. How many?', '24 of 36'),
           ('Compare it. How many missed?', '14 of 19'),
           ('Infer it. Why?', 'because a date answered a question rather than describing a mechanism'),
           ('Weigh it. What was traded?', 'one comfortable afternoon for fourteen missed commitments'),
           ('Decide. Where and when?', 'in the first line, and only with a mechanism')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say where an adverse figure appears.',
                 'Say what accompanies it.',
                 'Say how causes are expressed.',
                 'Say when a recovery date may be given.'],
 bank=['Every figure adverse to plan appears in the first line of the paper and in the first sentence spoken to it.',
       'Every adverse figure is accompanied by the expected direction of the figure in the following month.',
       'Causes are stated as evidenced or suspected, and any suspected cause is labelled as such in the text of the paper.',
       'No recovery date is given unless the mechanism by which recovery will occur is described in the same paper.'],
 outcome='The board adopts the four lines. Adverse figures first appearing after '
         'page five fall from twenty-four to none, recovery dates given fall from '
         'nineteen to eleven while dates missed fall from fourteen to two, no date '
         'is given without a mechanism, and meetings asking who before what fall '
         'from six to one.',
 outcome_q=[('What happened to buried figures?', 'there were none'),
            ('What happened to missed dates?', 'they fell from fourteen to two'),
            ('What happened to dates without mechanisms?', 'there were none'),
            ('What happened to accountability-first meetings?', 'they fell from six to one'),
            ('How many dates were given afterwards?', 'eleven')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Performance has been challenging',
 task=['This was the performance narrative in a board paper, with the figure in an '
       'appendix.',
       'This is what it said.'],
 draft=['Performance in this area has been challenging in recent months.',
        'A number of factors have contributed to the current position.',
        'A range of mitigating actions is being progressed at pace.',
        'We are working closely with partners to address the issues.',
        'We expect to see improvement in the coming period.',
        'Detailed figures are set out at appendix four.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines about a figure that appears on page nine.',
 asked=['challenging in recent months', 'a number of factors',
        'at pace'],
 back=['24 of 36 figures appearing after page five',
       '14 of 19 recovery dates missed', '11 given without a mechanism'],
 gap='Nobody could tell what the figure is, what the plan was, which causes are evidenced, what has been done, or what is needed.',
 back_cap='Six lines that will make the meeting about why the figure was on page nine.',
 back_note='“We expect to see improvement in the coming period” was written in a '
           'month everybody knew would be worse than the one reported.',
 diagnosis=[('“a number of factors”', 'unscoped set'),
            ('“a range of mitigating actions”', 'unscoped set'),
            ('“challenging”', 'unstated criterion'),
            ('“at pace”', 'unstated criterion'),
            ('“we expect to see improvement”', 'hidden assumption'),
            ('“the coming period”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that the board can decide something.',
 scaffold=['what the worst figure must become',
           'which figures are yours, and whose causes you may not state',
           'what you are giving it',
           'what the first two sentences contain and how causes are graded',
           'how long you speak and what follows',
           'what you do when there is no mechanism'],
 bank=['Purpose: so that the worst figure in the pack is the item the board can act on rather than the item that defines the meeting',
       'Scope: operational performance figures I am accountable for; clinical outcome figures are the medical director’s, and no cause involving another director’s service is stated without their agreement',
       'Inputs: the figure against plan with twelve months of trend, every candidate cause with the evidence that exists for it, what has already been done and when, what the board is being asked to decide, and the mechanism for any recovery',
       'Criteria: the figure and the plan in the first sentence; the likely direction next month in the second; causes graded as evidenced or suspected with suspicions labelled in the text; actions taken separated from decisions required; and a recovery date given only where its mechanism is described',
       'Done: presented in ninety seconds, with questions I cannot answer recorded and answered in writing within five working days',
       'Fallback: where no mechanism exists, I say that there is no recovery plan in those words rather than offering a month'],
 check=['Is the figure in the first line?',
        'Is next month’s direction given?',
        'Are causes graded?',
        'Is any date supported by a mechanism?'],
 model=['so that the worst figure in the pack is the item the board can act on rather than the item that defines the meeting',
        'operational performance figures I am accountable for; clinical outcome figures are the medical director’s, and no cause involving another director’s service is stated without their agreement',
        'the figure against plan with twelve months of trend, every candidate cause with the evidence that exists for it, what has already been done and when, what the board is being asked to decide, and the mechanism for any recovery',
        'the figure and the plan in the first sentence; the likely direction next month in the second; causes graded as evidenced or suspected with suspicions labelled in the text; actions taken separated from decisions required; and a recovery date given only where its mechanism is described',
        'presented in ninety seconds, with questions I cannot answer recorded and answered in writing within five working days',
        'where no mechanism exists, I say that there is no recovery plan in those words rather than offering a month'],
 cost='24 of 36 figures buried after page five, 14 of 19 recovery dates missed, and 11 given with no mechanism.'),

lang=dict(
 title='The Unwelcome Number · Refusing the board a recovery date',
 setting=[
  'The board has asked for the month in which delayed discharges will return to '
  'plan. Margarida has no mechanism until four assessors are funded.',
  'She has to refuse the date, keep the board’s confidence in her grip on the '
  'problem, and get the assessors funded tonight rather than in February.'],
 ladder=[('A board that wants a date', 'and no mechanism to give one'),
         ('Fourteen of nineteen', 'dates missed, eleven without mechanisms'),
         ('Either give them March', 'or refuse and ask for the assessors')],
 cap='Thirty-one against nineteen, four assessors, and one date refused.',
 turns=[('Turn 1 · Margarida', 'I cannot give you a recovery date tonight, because the only mechanism I have requires four assessors who are not funded.'),
        ('Turn 2 · Board member', 'Then we have an executive with no plan and no date, which is worse than a date we might miss.'),
        ('Turn 3 · Margarida', 'Fourteen of our last nineteen recovery dates were missed, and eleven of those were given in this room without a mechanism.')],
 holds=['If you fund four assessors tonight, the figure returns to nineteen in February and I shall be held to that.',
        'If you do not, there is no recovery plan, and the paper should say so in those words.',
        'Two causes are evidenced and I have put the evidence in the appendix.',
        'The third cause is a suspicion and I have labelled it as one, because I shall not be quoted on it in March.',
        'November will be worse than October, and I am telling you that before you ask.',
        'And if the assessors are funded and February is missed, that is mine, and you should treat it as mine.'],
 redline='Never give a recovery date that has no mechanism behind it, and never '
         'let a board believe a date it has asked for into existence.',
 score=['Refused the date in the first sentence.',
        'Gave the historical miss rate.',
        'Offered a conditional date with its mechanism.',
        'Separated evidence from suspicion.',
        'Accepted personal accountability for the funded case.'],
 a=[('Why can no date be given?', 'the only mechanism requires four unfunded assessors'),
    ('How many recent dates were missed?', 'fourteen of nineteen'),
    ('How many of those had no mechanism?', 'eleven'),
    ('What happens if the assessors are funded?', 'the figure returns to nineteen in February'),
    ('What is said about November?', 'that it will be worse'),
    ('What is the redline?', 'never give a recovery date with no mechanism')]),

rev_fig=figs.split('AN UNWELCOME FIGURE',
                   'Say',
                   ['thirty-one in October against a plan of nineteen',
                    'November will be worse',
                    'two causes are evidenced; a third I suspect',
                    'it returns to nineteen in February if four assessors start in December'],
                   'Never say',
                   ['performance has been challenging',
                    'a number of factors have contributed',
                    'mitigating actions are being progressed at pace',
                    'we expect improvement in the coming period']),
rev_fig_cap='Four sentences that produce a decision, and four that produce an hour of questions.',
rev=dict(
 read=[('What is the figure against plan?',
        ['thirty-one against nineteen', 'nineteen against thirty-one',
         'eleven against four', 'fourteen against nineteen'], 0),
       ('Where does an adverse figure go?',
        ['the first line', 'the performance appendix',
         'the executive summary', 'the covering email'], 0),
       ('How many causes are evidenced?',
        ['two', 'three', 'one', 'none'], 0),
       ('When may a recovery date be given?',
        ['only with a described mechanism', 'when the board asks',
         'when the trend improves', 'at the year end'], 0)],
 listen_text='Give it the figure against plan with its trend, the causes with '
             'their evidence, what has been done and what the board must decide. '
             'Put the figure first.',
 listen=[('Give it the figure against ____________.', 'plan'),
         ('And the causes with their ____________.', 'evidence'),
         ('And what the board must ____________.', 'decide'),
         ('Put the figure and the plan in the ____________ sentence.', 'first')],
 speak=['Open six unwelcome figures with the figure and the plan.',
        'Then grade six causes as evidenced or suspected.'],
 write='Write a six-line tasking for an unwelcome figure.',
 vocab=[('A movement that must be explained is a figure that is worse than last ____________.', 'month'),
        ('The thing that shows you were not waiting is an action already ____________.', 'taken'),
        ('A figure presented honestly is a figure presented in the first ____________.', 'line'),
        ('An executive who has kept the room is an executive who explains in ninety ____________.', 'seconds')],
 gram=[('____________ those assessors are in post by December.', 'If'),
       ('The figure ____________ to nineteen in February.', 'returns'),
       ('What I ____________ from the board is funding for four assessors.', 'need'),
       ('A third I ____________ but cannot demonstrate.', 'suspect')]),

found=['Lead with the figure and the plan, in one sentence.',
       'Say what next month will do before anybody asks.',
       'Grade every cause as evidenced or suspected.',
       'Give a recovery date only with its mechanism, or refuse to give one.'],
end_line='Eleven of fourteen missed recovery dates had been invented in the room, in answer to a board that had asked for a month.',
end_next='Next: What No System Can Do for a Manager’s Judgement')
