# -*- coding: utf-8 -*-
import figs

U = dict(
num=3,
title='A Strategy That Says What You Will Stop',
gram='strategy as subtraction: we shall stop, we shall not start',
ai='a strategy drafted as what will stop as well as what will start',
strap='CEFR B2 · Grammar: strategy as subtraction: we shall stop, we shall not start · '
      'AI: a strategy drafted as what will stop as well as what will start',
cando=['state what the organisation will stop doing',
       'name what you will not start, and why',
       'say who will object and who will be relieved',
       'sequence a stop with its dependencies',
       'write a six-line tasking for a strategy of subtraction'],

hero=('A STRATEGY WITH ELEVEN PRIORITIES HAS NONE.',
      ['The hard half of a strategy is the half',
       'that says what the organisation will stop doing.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Eleven priorities, three real ones, and four things that have to stop.',

warm=['What does your organisation’s strategy say it will stop?',
      'What has it actually stopped?',
      'Who would object if it stopped something?'],

vocab=[
 ('a strategy of eleven priorities', 'a document with no priorities in it'),
 ('a strategy of three', 'a document an organisation can act on'),
 ('a thing you will stop doing', 'the half of a strategy that costs something'),
 ('a thing you will not start', 'the discipline nobody gets credit for'),
 ('a service you will transfer to somebody else', 'a subtraction that is not a closure'),
 ('a building you will give up', 'a saving with a constituency attached'),
 ('a post you will not refill', 'a reduction with a human face'),
 ('a committee you will abolish', 'the easiest stop and the least valuable'),
 ('a report you will stop producing', 'a small stop that releases real hours'),
 ('a saving that comes from stopping', 'the only saving that is not a transfer'),
 ('a benefit nobody will notice', 'the usual result of a successful stop'),
 ('a loss somebody will notice immediately', 'the cost you must name in advance'),
 ('a constituency that will object', 'the group whose objection is legitimate'),
 ('a constituency that will be relieved', 'the group nobody consults'),
 ('a sequence that matters', 'the order in which stops must happen'),
 ('a dependency you cannot avoid', 'the thing that must exist before a stop'),
 ('a date by which the first stop happens', 'the test of whether the strategy is real'),
 ('a measure that tells you it worked', 'the figure that will be checked'),
 ('a strategy nobody can recite', 'a strategy that will not change behaviour'),
 ('a strategy a porter could recite', 'a strategy that might')],

read=[
 'The draft strategy has eleven priorities, four enabling themes and a diagram '
 'with nine boxes, and it does not say that the organisation will stop doing '
 'anything at all.',
 'A strategy that only adds is a wish list, because the staff who must deliver it '
 'are already fully stretched and the money is already committed.',
 'So the first discipline is subtraction. We shall stop producing the weekly '
 'theatre utilisation report. We shall transfer the community clinic to the '
 'community provider. We shall not start the digital records programme before '
 '2029.',
 'Each stop has a constituency. Name it in advance: the people who will object, '
 'the people who will be relieved, and the loss that somebody will notice in the '
 'first month.',
 'And every stop needs a date and a dependency. Stopping the report releases '
 'eleven hours a month, but only once the two figures somebody actually uses are '
 'in the monthly pack instead.'],

dp1=('Strategy', 'Strategic planning guidance commonly recommends limiting the '
     'number of priorities, specifying activities to be discontinued, identifying '
     'affected groups, and sequencing changes against their dependencies. '
     'Approaches are set by the organisation’s own planning framework.',
     'Source: general strategic management guidance, 2025–2026.'),

c_a=[('What does the draft strategy contain?', 'eleven priorities, four themes and a nine-box diagram'),
     ('What does it not say?', 'that anything will stop'),
     ('Why is an additive strategy a wish list?', 'because the staff are fully committed and the money is spent'),
     ('What are the three stops given?', 'the utilisation report, the community clinic transfer, and not starting the records programme'),
     ('What three things are named for each stop?', 'who objects, who is relieved, and the loss in the first month'),
     ('What does stopping the report release?', 'eleven hours a month')],

c_b=[('The draft strategy says nothing will stop.', 'T'),
     ('An additive strategy is deliverable as it stands.', 'F'),
     ('Each stop has a constituency.', 'T'),
     ('Stops need no dependencies.', 'F'),
     ('The report releases eleven hours a month.', 'T'),
     ('Two figures must move into the monthly pack first.', 'T')],

c_c=[('We ____________ stop producing the weekly report.', 'shall'),
     ('We ____________ not start the records programme before 2029.', 'shall'),
     ('We ____________ transfer the clinic to the community provider.', 'shall'),
     ('Stopping the report ____________ eleven hours a month.', 'releases'),
     ('But only ____________ the two figures are in the monthly pack.', 'once'),
     ('The estates team ____________ be relieved.', 'will')],

c_d=[('Limit the strategy to ( eleven / three priorities ).', ['eleven', 'three priorities'], 1),
     ('State ( what will stop / what will be reviewed ).',
      ['what will stop', 'what will be reviewed'], 0),
     ('Name ( who will object / the general risks ).',
      ['who will object', 'the general risks'], 0),
     ('Give each stop ( a date and a dependency / an aspiration ).',
      ['a date and a dependency', 'an aspiration'], 0),
     ('Write it so that ( a porter could recite it / it covers everything ).',
      ['a porter could recite it', 'it covers everything'], 0)],

c_e=('A stop, a non-start, a transfer or a dependency? Decide what each is.',
     [('we shall stop producing the weekly utilisation report', 'a stop'),
      ('we shall not start the digital records programme before 2029', 'a non-start'),
      ('the community clinic moves to the community provider', 'a transfer'),
      ('two figures must enter the monthly pack first', 'a dependency'),
      ('we shall not refill the second communications post', 'a non-start'),
      ('the deputy medical director’s committee is abolished', 'a stop')],
     ['a stop', 'a non-start', 'a transfer', 'a dependency']),

v_fig_title='SIX WORDS OF A STRATEGY OF SUBTRACTION',
v_fig=[('scale', 'a strategy of three'), ('key', 'a thing you will stop doing'),
       ('people', 'a constituency that will object'),
       ('clock', 'a date by which the first stop happens'),
       ('doc', 'a measure that tells you it worked'),
       ('note', 'a strategy a porter could recite')],
v_fig_cap='Six words for eleven priorities and four stops.',

v_a=[('A document with no priorities in it is a strategy of ____________ priorities.', 'eleven'),
     ('The discipline nobody gets credit for is a thing you will not ____________.', 'start'),
     ('A reduction with a human face is a post you will not ____________.', 'refill'),
     ('A small stop that releases real hours is a report you will stop ____________.', 'producing'),
     ('The only saving that is not a transfer is a saving that comes from ____________.', 'stopping'),
     ('The cost you must name in advance is a loss somebody will notice ____________.', 'immediately'),
     ('The thing that must exist before a stop is a ____________ you cannot avoid.', 'dependency'),
     ('A strategy that will not change behaviour is a strategy nobody can ____________.', 'recite')],

v_b=[('A service you will transfer to somebody else is a subtraction', 'that is not a closure.'),
     ('A committee you will abolish is the easiest stop', 'and the least valuable.'),
     ('A benefit nobody will notice is the usual result', 'of a successful stop.'),
     ('A constituency that will be relieved is the group', 'nobody consults.'),
     ('A sequence that matters is the order', 'in which stops must happen.')],

g_title='Grammar: strategy as subtraction: we shall stop, we shall not start',
g_rule=['Use we shall stop with a named activity and a date: we shall stop '
        'producing the weekly theatre utilisation report from the first of April.',
        'Use we shall not start for restraint, which is harder to write because '
        'nobody is thanked for it: we shall not start the digital records '
        'programme before 2029.',
        'Use only once for a dependency, which prevents a stop from becoming a '
        'gap: we shall stop the report only once the two figures the division uses '
        'appear in the monthly pack.',
        'Name constituencies with will, in both directions: the medical director '
        'will object; the information team will be relieved. Both belong in the '
        'document.'],
g_fig=('LOOSE',
       ['Our strategy is built around eleven key priorities for the coming period.',
        'We shall continue to focus on quality, people and sustainability.',
        'Resources will be aligned to support delivery of our ambitions.',
        'Difficult decisions may be required as the plan develops.'],
       'PRECISE',
       ['We shall stop producing the weekly theatre utilisation report from the first of April.',
        'We shall not start the digital records programme before 2029.',
        'We shall transfer the community clinic to the community provider by the thirtieth of September.',
        'The medical director will object to the first of these, and the information team will be relieved.'],
       'four sentences nobody can act on or oppose',
       'four sentences somebody will fight you over'),
g_fig_cap='We shall stop. We shall not start. Only once. Will object; will be relieved.',

g_a=[('We ____________ stop producing the weekly report.', 'shall'),
     ('____________ the first of April.', 'From'),
     ('We shall ____________ start the records programme before 2029.', 'not'),
     ('We shall ____________ the clinic to the community provider.', 'transfer'),
     ('____________ the thirtieth of September.', 'By'),
     ('Only ____________ the two figures appear in the pack.', 'once'),
     ('The medical director ____________ object.', 'will'),
     ('The information team ____________ be relieved.', 'will'),
     ('Both ____________ in the document.', 'belong')],

g_b=[('( we shall stop producing the weekly report from April / we shall continue to focus on quality ) — the stop.', ['we shall stop producing the weekly report from April', 'we shall continue to focus on quality'], 0),
     ('( we shall not start the records programme before 2029 / resources will be aligned ) — the restraint.',
      ['we shall not start the records programme before 2029', 'resources will be aligned'], 0),
     ('( only once the two figures appear in the monthly pack / subject to the usual caveats ) — the dependency.',
      ['only once the two figures appear in the monthly pack', 'subject to the usual caveats'], 0),
     ('( the medical director will object / difficult decisions may be required ) — the constituency.',
      ['the medical director will object', 'difficult decisions may be required'], 0),
     ('( the information team will be relieved / stakeholders will be engaged ) — the other constituency.',
      ['the information team will be relieved', 'stakeholders will be engaged'], 0),
     ('( three priorities / eleven key priorities ) — the number.',
      ['three priorities', 'eleven key priorities'], 0)],

d1=dict(
 title='Eleven priorities and four stops',
 fig=(['Eleven priorities.', 'Nine boxes.'],
      ['Three priorities.', 'Four stops.']),
 cap='Margarida Pires and Siobhán Carrick, deputy chief executive, over a draft strategy.',
 lines=[('Siobhán', 'Eleven priorities, four enabling themes, and a diagram I cannot read.'),
        ('Margarida', 'What does it say we shall stop doing?'),
        ('Siobhán', 'Nothing. It says we shall align resources.'),
        ('Margarida', 'Then it is a wish list, because every hour in this organisation is already spent.'),
        ('Siobhán', 'The executive will say that naming stops creates opposition before the strategy is approved.'),
        ('Margarida', 'It creates opposition from people whose objection is legitimate, which is cheaper before approval than after.'),
        ('Siobhán', 'What would you stop?'),
        ('Margarida', 'The weekly utilisation report, which eleven people produce and three read. The community clinic, which the community provider does better. And I would not start the records programme for four years.'),
        ('Siobhán', 'The medical director will fight the report.'),
        ('Margarida', 'He will, and the document should say so in a sentence, because a strategy that pretends nobody minds is read as dishonest by everybody who minds.'),
        ('Siobhán', 'And the relieved?'),
        ('Margarida', 'The information team, who have asked to stop producing it in three successive planning rounds and have never been asked whether anybody reads it.')],
 a=[('What does the draft contain?', 'eleven priorities, four themes and an unreadable diagram'),
    ('What does it say will stop?', 'nothing'),
    ('Why is it a wish list?', 'because every hour is already spent'),
    ('What three stops does Margarida propose?', 'the utilisation report, the community clinic, and not starting the records programme'),
    ('Who will be relieved?', 'the information team, who have asked three times')],
 b=[('It says we shall ____________ resources.', 'align'),
    ('Eleven people produce it and three ____________.', 'read'),
    ('The document should say so in a ____________.', 'sentence'),
    ('In three successive planning ____________.', 'rounds')]),

d2=dict(
 title='The stop that became a gap',
 fig=(['Report stopped.', 'Figures not moved.'],
      ['Division blind.', 'Report restarted.']),
 cap='Margarida Pires and Amara Nwosu, operations manager.',
 lines=[('Amara', 'We stopped the utilisation report in April and restarted it in July.'),
        ('Margarida', 'Because the two figures the division actually used went with it.'),
        ('Amara', 'Nobody realised they were in there. They were on page six of eleven.'),
        ('Margarida', 'So the stop was right and the sequence was wrong, which is the commonest way a subtraction fails.'),
        ('Amara', 'The division now believes that stopping anything is dangerous.'),
        ('Margarida', 'Which is the real cost. One badly sequenced stop has made the next ten harder.'),
        ('Amara', 'What should we have done?'),
        ('Margarida', 'Asked the three readers which figures they used, moved those into the monthly pack, run both for one month, and then stopped it.'),
        ('Amara', 'That is four months rather than one.'),
        ('Margarida', 'And it would have held. A stop that reverses is worse than no stop at all, because it spends the organisation’s appetite for subtraction.'),
        ('Amara', 'The executive wanted the saving in the first quarter.'),
        ('Margarida', 'Then the executive should have been told that the saving arrives in the third, which is a sentence somebody should have written in the strategy.')],
 unresolved=True,
 a=[('What happened to the report?', 'stopped in April, restarted in July'),
    ('Why?', 'the two figures the division used went with it'),
    ('Where were those figures?', 'on page six of eleven'),
    ('What should have happened?', 'ask the readers, move the figures, run both for a month, then stop'),
    ('What does a reversed stop cost?', 'the organisation’s appetite for subtraction')],
 b=[('The ____________ was wrong.', 'sequence'),
    ('Has made the next ten ____________.', 'harder'),
    ('Run both for one ____________.', 'month'),
    ('The saving arrives in the ____________.', 'third')]),

speak=[('What will you stop',
        ['Your partner describes six additive strategies.',
         'Name two stops and one non-start for each.',
         'Three each, then swap.']),
       ('Who objects, who is relieved',
        ['Your partner gives you six stops.',
         'Name both constituencies for each.',
         'Three each, then swap.']),
       ('Sequence it',
        ['Your partner gives you six stops with dependencies.',
         'Put each in order and say what must exist first.',
         'Three each, then swap.'])],

ext_title='A strategy drafted as what will stop as well as what will start',
ext_fig=figs.datatable('WHAT THE STRATEGY CARRIES',
                       ['Line', 'Content'],
                       [['the priorities', 'three, not eleven'],
                        ['the stops', 'named activities, with dates'],
                        ['the non-starts', 'what will not begin, and until when'],
                        ['the constituencies', 'who objects, who is relieved'],
                        ['the dependencies', 'what must exist before each stop'],
                        ['the measure', 'the figure that shows it worked']]),
ext_fig_cap='Six lines, and the second one is the half that costs something.',
ext=[
 'A strategy drafted as what will stop as well as what will start produces a '
 'document that can be delivered by people who are already fully committed.',
 'Give it the draft priorities, the current activity with the hours and money '
 'behind each, the dependencies between them, and the groups affected by any '
 'reduction.',
 'Ask it to reduce the priorities to three and to express each as something that '
 'will happen rather than something that will be focused upon.',
 'Ask for a named stop or non-start against each priority, with a date, since a '
 'priority that requires nothing to be given up is not a priority but a hope.',
 'Ask it to name both constituencies for every stop, because a strategy that '
 'records only the objections reads as defensive and one that records none reads '
 'as dishonest.',
 'What it cannot do is decide what the organisation is willing to lose. That is '
 'the whole of strategy, and it is a judgement about values rather than about '
 'activity.'],

dp2=('Strategic focus', 'Strategic management literature commonly reports that '
     'plans specifying activities to be discontinued are implemented more fully '
     'than plans of additions alone, and that reversed discontinuations reduce '
     'the likelihood of subsequent ones being attempted.',
     'Source: general strategic management literature, 2025–2026.'),

e_a=[('What does the strategy produce?', 'a document deliverable by people already fully committed'),
     ('What four things are given to it?', 'the draft priorities, the current activity with hours and money, the dependencies and the affected groups'),
     ('To how many priorities is it reduced?', 'three'),
     ('What accompanies each priority?', 'a named stop or non-start, with a date'),
     ('Why name both constituencies?', 'because recording only objections reads as defensive and none as dishonest')],
e_b=[('Priorities are reduced to three.', 'T'),
     ('Each priority carries a stop or non-start.', 'T'),
     ('It decides what the organisation will lose.', 'F'),
     ('Both constituencies are named.', 'T'),
     ('Plans with discontinuations are implemented more fully.', 'T'),
     ('A reversed stop makes later ones easier.', 'F')],

w_model='Purpose: so that the strategy can be delivered by people whose time is '
       'already fully committed. Scope: operational and corporate strategy for '
       'this organisation; clinical service models are the medical director’s and '
       'any change to a statutory service requires the board and the commissioner. '
       'Inputs: the draft priorities, the current activity with the hours and the '
       'money behind each, the dependencies between activities, the groups '
       'affected by any reduction, and what the organisation has previously '
       'stopped and restarted. Criteria: no more than three priorities; a named '
       'stop or non-start against each, with a date; every stop sequenced behind '
       'the dependency that must exist first; both constituencies named for each '
       'stop; and one measure per priority that will be checked. Done: published '
       'in a form a porter could recite, with the stops in the same document as '
       'the starts. Fallback: where a stop would leave a genuine gap, I sequence '
       'it behind the replacement and say when the saving actually arrives, rather '
       'than promising it in the first quarter.',
w_fig=figs.spec_card('SIX LINES FOR A STRATEGY OF SUBTRACTION',
                     [('Purpose', 'deliverable by people already fully committed'),
                      ('Scope', 'operational strategy; not clinical models'),
                      ('Inputs', 'priorities, activity with hours, dependencies, groups'),
                      ('Criteria', 'three priorities, a stop each, both constituencies'),
                      ('Done', 'recitable, with stops beside starts'),
                      ('Fallback', 'a gap: sequence it and say when the saving comes')]),
w_fig_cap='Six lines, and the sixth one is why a stop holds.',
w_task='Write a six-line tasking for a strategy of subtraction.',
w_steps=['Line 1: say what the strategy must be deliverable by.',
         'Line 2: say which strategy is yours, and what is not.',
         'Line 3: say what you are giving it.',
         'Line 4: say how many priorities and what each must carry.',
         'Line 5: say in what form it is published.',
         'Line 6: say what you do when a stop would leave a gap.'],
w_bank=['Purpose: so that the strategy can be delivered by people whose time is already fully committed',
        'Scope: operational and corporate strategy for this organisation; clinical service models are the medical director’s and statutory service changes require the board and the commissioner',
        'Inputs: the draft priorities, the current activity with the hours and money behind each, the dependencies between activities, the groups affected by any reduction, and what has previously been stopped and restarted',
        'Criteria: no more than three priorities; a named stop or non-start against each with a date; every stop sequenced behind its dependency; both constituencies named; one measure per priority',
        'Done: published in a form a porter could recite, with the stops in the same document as the starts',
        'Fallback: where a stop would leave a genuine gap, I sequence it behind the replacement and say when the saving actually arrives'],
w_check=['Are there three priorities or fewer?',
         'Has each a named stop with a date?',
         'Is every stop sequenced behind its dependency?',
         'Are both constituencies named?'],

t_title='A strategy drafted as what will stop as well as what will start',
t_fig=figs.split('ELEVEN PRIORITIES AND FOUR STOPS',
                 'It can draft',
                 ['three priorities',
                  'the stops and non-starts',
                  'the constituencies',
                  'the sequence and dependencies'],
                 'It must not decide',
                 ['what the organisation will lose',
                  'whose objection prevails',
                  'what a service is worth',
                  'when to spend the appetite']),
t_fig_cap='It drafts the subtraction. What you are willing to lose is the strategy.',
t_body=[
 'Give it the draft priorities, the current activity with hours and money, the '
 'dependencies and the affected groups.',
 'A strategy drafted as what will stop as well as what will start reduces eleven '
 'priorities to three.',
 'Then ask for a named stop against each, with a date.'],
t_say=[('We shall stop: ', 'The weekly utilisation report, from April.'),
       ('We shall not start: ', 'The records programme before 2029.'),
       ('Only once: ', 'Two figures are in the monthly pack.')],
t_bound='It cannot decide what the organisation is willing to lose, and that '
        'judgement is the whole of strategy.',
t_a=[('Give it the ____________ priorities.', 'draft'),
     ('And the current activity with its ____________.', 'hours'),
     ('And the ____________ between activities.', 'dependencies'),
     ('Reduce the priorities to ____________.', 'three'),
     ('And give each a named ____________.', 'stop'),
     ('And name both ____________.', 'constituencies')],
t_b_rubric='Say what the strategy work should do with each item.',
t_b=[('eleven priorities and four themes', 'reduce them to three priorities'),
     ('“resources will be aligned”', 'name a stop with a date'),
     ('a stop with no dependency stated', 'sequence it behind what must exist first'),
     ('a strategy recording no objections', 'name who will object and who will be relieved')],

case=dict(
 title='The Decision Room · The strategy that added eleven things',
 brief=[
  'A hospital published five-year strategies consisting of priorities to be '
  'advanced, with no activity identified for discontinuation.',
  'Across three successive strategies, a mean of 11 priorities was set. A review '
  'of delivery found that a mean of 3 priorities had been substantially achieved '
  'in each period. Staff survey responses on whether the strategy affected daily '
  'work ran at 14 per cent. In the same periods 2 activities were discontinued, '
  'both of them reversed within a year.',
  'The fourth strategy set three priorities, each with a named discontinuation '
  'and a date, with dependencies sequenced. Four of four stops held, and the '
  'proportion saying the strategy affected their work rose to 41 per cent.'],
 exhibit=figs.datatable('FOUR STRATEGIES COMPARED',
                        ['Item', 'First three / Fourth'],
                        [['priorities set', '11 / 3'],
                         ['priorities substantially achieved', '3 / 3'],
                         ['activities discontinued', '2 / 4'],
                         ['discontinuations reversed', '2 of 2 / 0 of 4'],
                         ['staff saying it affected their work', '14 per cent / 41'],
                         ['pages in the document', '46 / 6']]),
 exhibit_cap='A third of the priorities, all of them achieved, and four stops that held.',
 exhibit_note='Both earlier discontinuations were reversed within a year, and in '
              'each case the reversal was caused by a dependency nobody had '
              'sequenced.',
 voices=[('A director', 'about three priorities',
          'This organisation does eleven important things. A strategy naming three tells the other eight that they do not matter.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Eleven priorities produced three achievements and fourteen per cent of staff recognising any of them.'),
         ('A porter', 'asked what the strategy said',
          'I could tell you the three. The one about the corridor is the one we talk about.')],
 steps=[('Find it', 'How many priorities were set and achieved?'),
        ('Compare it', 'Discontinuations attempted against those that held.'),
        ('Infer it', 'Why did additive strategies under-deliver?'),
        ('Weigh it', 'Breadth against three achieved priorities.'),
        ('Decide', 'What must a strategy contain?')],
 analysis=[('Find it. How many?', '11 set, 3 achieved'),
           ('Compare it. How many held?', 'none of two, against four of four'),
           ('Infer it. Why?', 'because nothing was given up to make room'),
           ('Weigh it. What was traded?', 'the appearance of breadth for recognition by 41 per cent of staff'),
           ('Decide. What must it contain?', 'three priorities, each with a dated stop and its dependency')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say how many priorities a strategy may contain.',
                 'Say what each must carry.',
                 'Say how a stop is sequenced.',
                 'Say what is said about the people affected.'],
 bank=['A strategy contains no more than three priorities, each expressed as something that will happen rather than something that will be prioritised.',
       'Every priority is accompanied by at least one named activity that the organisation will stop or will not start, with the date on which that takes effect.',
       'No discontinuation takes effect before the dependency that replaces its necessary output is in place, and the date on which any saving arrives is stated.',
       'Every discontinuation names the groups that will object and the groups that will be relieved, and both appear in the published document.'],
 outcome='The organisation adopts the four lines. Priorities fall from eleven to '
         'three with the same number achieved, discontinuations rise from two to '
         'four with none reversed, staff saying the strategy affects their work '
         'rise from fourteen per cent to forty-one, and the document falls from '
         'forty-six pages to six.',
 outcome_q=[('What happened to the number of priorities?', 'it fell from eleven to three'),
            ('What happened to achievements?', 'they stayed at three'),
            ('What happened to discontinuations?', 'they rose from two to four, none reversed'),
            ('What happened to staff recognition?', 'it rose from fourteen per cent to forty-one'),
            ('What happened to the document?', 'it fell from forty-six pages to six')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Resources will be aligned',
 task=['This was the opening of a five-year strategy document.',
       'This is what it said.'],
 draft=['Our strategy is built around eleven key priorities for the period ahead.',
        'We shall continue to focus on quality, our people and sustainability.',
        'Resources will be aligned to support the delivery of our ambitions.',
        'We shall work in partnership across the wider health and care system.',
        'Difficult decisions may be required as the plan develops over time.',
        'Progress will be monitored through our established governance structures.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of strategy in which nothing stops and nobody loses anything.',
 asked=['eleven key priorities', 'resources will be aligned',
        'difficult decisions may be required'],
 back=['11 priorities with 3 achieved', '2 discontinuations, both reversed',
       '14 per cent of staff recognising it'],
 gap='Nobody could tell what would stop, what would not start, who would lose, or when anything would happen.',
 back_cap='Six lines that will be delivered by people who have no spare hours.',
 back_note='“Difficult decisions may be required” is the sentence a strategy uses '
           'instead of naming one.',
 diagnosis=[('“eleven key priorities”', 'hidden assumption'),
            ('“resources will be aligned”', 'undefined done'),
            ('“difficult decisions may be required”', 'hidden assumption'),
            ('“the wider health and care system”', 'unscoped set'),
            ('“established governance structures”', 'unscoped set'),
            ('“continue to focus”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that something stops.',
 scaffold=['what the strategy must be deliverable by',
           'which strategy is yours, and what is not',
           'what you are giving it',
           'how many priorities and what each must carry',
           'in what form it is published',
           'what you do when a stop would leave a gap'],
 bank=['Purpose: so that the strategy can be delivered by people whose time is already fully committed',
       'Scope: operational and corporate strategy for this organisation; clinical service models are the medical director’s and any change to a statutory service requires the board and the commissioner',
       'Inputs: the draft priorities, the current activity with the hours and the money behind each, the dependencies between activities, the groups affected by any reduction, and what the organisation has previously stopped and restarted',
       'Criteria: no more than three priorities; a named stop or non-start against each, with a date; every stop sequenced behind the dependency that must exist first; both constituencies named for each stop; and one measure per priority that will be checked',
       'Done: published in a form a porter could recite, with the stops in the same document as the starts',
       'Fallback: where a stop would leave a genuine gap, I sequence it behind the replacement and say when the saving actually arrives, rather than promising it in the first quarter'],
 check=['Are there three priorities?',
        'Does each carry a stop with a date?',
        'Are dependencies sequenced?',
        'Are both constituencies named?'],
 model=['so that the strategy can be delivered by people whose time is already fully committed',
        'operational and corporate strategy for this organisation; clinical service models are the medical director’s and any change to a statutory service requires the board and the commissioner',
        'the draft priorities, the current activity with the hours and the money behind each, the dependencies between activities, the groups affected by any reduction, and what the organisation has previously stopped and restarted',
        'no more than three priorities; a named stop or non-start against each, with a date; every stop sequenced behind the dependency that must exist first; both constituencies named for each stop; and one measure per priority that will be checked',
        'published in a form a porter could recite, with the stops in the same document as the starts',
        'where a stop would leave a genuine gap, I sequence it behind the replacement and say when the saving actually arrives, rather than promising it in the first quarter'],
 cost='11 priorities with 3 achieved, 2 discontinuations both reversed, and 14 per cent recognition.'),

lang=dict(
 title='The Unwelcome Number · Telling a director his eight priorities are coming out',
 setting=[
  'A director’s two priorities survive the cut to three; eight others, several of '
  'them his, do not appear in the strategy at all.',
  'Margarida has to explain the subtraction without implying that the work he '
  'leads is unimportant.'],
 ladder=[('A director with good work to defend', 'and a document with room for three'),
         ('Eleven priorities', 'and three achievements'),
         ('Either keep eleven', 'or name the three and say what the rest are')],
 cap='Eleven priorities, three achieved, fourteen per cent recognition.',
 turns=[('Turn 1 · Margarida', 'The strategy will name three priorities, and eight of the current eleven will not appear in it.'),
        ('Turn 2 · Director', 'Leaving my service out of the strategy tells my staff that nobody values what they do.'),
        ('Turn 3 · Margarida', 'The last three strategies named eleven and achieved three, and fourteen per cent of staff could name any of them.')],
 holds=['The eight are not stopping; they are continuing, and continuing is what most of an organisation does.',
        'What is going into the strategy is only what we are changing, and change needs room.',
        'Two of the three priorities are yours, and so is one of the four stops.',
        'I shall write a sentence into the document saying that the eight continue unchanged, and I shall sign it.',
        'If your staff are told that the strategy is a list of the only valuable work, that is a briefing problem and I shall fix it with you.',
        'And if after a year the three have not moved while the eight have suffered, I shall say so in the annual report.'],
 redline='Never let a strategy grow back to eleven priorities, and never let a '
         'subtraction be read as a judgement on the people doing the work.',
 score=['Stated the cut in the first sentence.',
        'Gave the achievement and recognition figures.',
        'Distinguished continuing from stopping.',
        'Offered a written assurance about the eight.',
        'Accepted an annual-report test.'],
 a=[('How many priorities will the strategy name?', 'three'),
    ('How many of the eleven will not appear?', 'eight'),
    ('What did the last three strategies achieve?', 'three priorities each, with fourteen per cent recognition'),
    ('What happens to the eight?', 'they continue unchanged'),
    ('What will Margarida write and sign?', 'a sentence saying the eight continue unchanged'),
    ('What is the redline?', 'never let a subtraction be read as a judgement on the people')]),

rev_fig=figs.split('A STRATEGY OF SUBTRACTION',
                   'Say',
                   ['we shall stop the weekly utilisation report from April',
                    'we shall not start the records programme before 2029',
                    'only once two figures are in the monthly pack',
                    'the medical director will object; the information team will be relieved'],
                   'Never say',
                   ['eleven key priorities',
                    'resources will be aligned',
                    'difficult decisions may be required',
                    'progress monitored through governance']),
rev_fig_cap='Four sentences somebody will fight you over, and four nobody can oppose.',
rev=dict(
 read=[('How many priorities does the draft have?',
        ['eleven', 'three', 'four', 'nine'], 0),
       ('Why is an additive strategy a wish list?',
        ['because the hours and money are already committed',
         'because boards dislike detail',
         'because staff resist change',
         'because priorities conflict'], 0),
       ('What does stopping the report release?',
        ['eleven hours a month', 'three hours a week',
         'a quarter of a post', 'nothing measurable'], 0),
       ('What does every stop need?',
        ['a date and a dependency', 'a consultation',
         'a board resolution', 'a saving'], 0)],
 listen_text='Give it the draft priorities, the current activity with hours and '
             'money, the dependencies and the affected groups. Reduce the '
             'priorities to three.',
 listen=[('Give it the ____________ priorities.', 'draft'),
         ('And the current activity with its ____________.', 'hours'),
         ('And the ____________ between activities.', 'dependencies'),
         ('Reduce the priorities to ____________.', 'three')],
 speak=['Name two stops and a non-start for six additive strategies.',
        'Then name both constituencies for each stop.'],
 write='Write a six-line tasking for a strategy of subtraction.',
 vocab=[('A document an organisation can act on is a strategy of ____________.', 'three'),
        ('A saving with a constituency attached is a building you will give ____________.', 'up'),
        ('The group whose objection is legitimate is a ____________ that will object.', 'constituency'),
        ('The figure that will be checked is a measure that tells you it ____________.', 'worked')],
 gram=[('Both ____________ in the document.', 'belong'),
       ('The information team ____________ be relieved.', 'will'),
       ('____________ the thirtieth of September.', 'By'),
       ('Only ____________ the two figures appear in the pack.', 'once')]),

found=['Keep three priorities, and express each as something that will happen.',
       'Name a stop or a non-start against each, with a date.',
       'Sequence every stop behind the dependency that must exist first.',
       'Name who will object and who will be relieved, in the document.'],
end_line='Both earlier discontinuations were reversed within a year, and each reversal was caused by a dependency nobody had sequenced.',
end_next='Next: A Partner Organisation and a Shared Problem')
