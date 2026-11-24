# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='This Time Next Year',
gram='future perfect and future continuous',
ai='four people with the capacity of forty',
strap='CEFR C1 · Grammar: future perfect and continuous · AI: four people, forty people’s capacity',
cando=['use the future perfect for work completed by a point in the future',
       'use the future continuous for what will be in progress at that point',
       'project capacity without projecting it past the constraint',
       'describe what a small team can now absorb, and what it cannot',
       'state the condition on which a capacity projection depends'],
hero=('FOUR DESKS, FORTY DESKS’ WORTH OF WORK',
      ['By this time next year they will have processed ninety thousand items.',
       'And one person will still be reading every exception.'],
      [(800, 'teal', 'short'), (1500, 'orange', 'long'),
       (2180, 'purple', 'short'), (2800, 'grey', 'long')]),
hero_cap='Capacity is never a number on its own; it is a number and the thing it runs into.',

warm=['How much more work could your team absorb next year without more people?',
      'What would be in progress at the busiest hour of that year?',
      'What is the one thing that would stop the projection coming true?'],
read=[
 'The checking team at Arclight consists of four people and will, by the end of March, have '
 'processed rather more than ninety thousand document items in twelve months, a volume that '
 'in the firm’s fourth year would have required something close to forty. Nobody in the firm '
 'disputes the figure, which is why it has become the most misleading number Arclight owns.',
 'What the figure describes is throughput at one stage of a process. The four people, with '
 'the drafting and sorting work carried by systems, can handle a load that no team of four '
 'could previously have approached, and the quality measures have improved rather than '
 'deteriorated throughout. On any measure confined to that stage, the result is remarkable.',
 'The constraint sits immediately downstream and is a person. Every item the systems flag as '
 'an exception, about one in fourteen, reaches Victor Sandoval or one of two colleagues for '
 'judgement, and that judgement has not become faster, because it consists of knowing which '
 'discrepancies matter to which client and that knowledge does not compress. By March the '
 'three of them will have read something over six thousand exceptions between them.',
 'Kenji’s projection for the following year assumes the client book grows by forty per cent, '
 'which is slower than this year, and produces a figure of one hundred and twenty-six '
 'thousand items and eight thousand eight hundred exceptions. This time next year, on those '
 'numbers, Victor will be reading exceptions for rather more than six hours of every working '
 'day, which he has pointed out is not a job anybody would accept if it were advertised.',
 'The honest version of the capacity claim therefore has a condition attached, and Ines has '
 'insisted that the condition appear in the same sentence as the number. Four people can do '
 'the work of forty at that stage, provided the exception rate falls or the exception work '
 'is shared more widely; and neither of those has happened yet, which makes the projection a '
 'statement about intentions rather than about capacity.'],
c_a=[('How many items will the team have processed by the end of March?', 'rather more than ninety thousand'),
     ('What would that volume have required in the fourth year?', 'something close to forty people'),
     ('What proportion of items becomes an exception?', 'about one in fourteen'),
     ('Why has the judgement not become faster?', 'because it consists of knowing which discrepancies matter, which does not compress'),
     ('What condition does Ines insist appears with the number?', 'that the exception rate falls or the exception work is shared more widely')],
c_b=[('The team of four has worse quality measures than before.', 'F'),
     ('The constraint is in the checking stage itself.', 'F'),
     ('Three people read the exceptions.', 'T'),
     ('Kenji’s projection assumes faster growth than this year.', 'F'),
     ('Victor would be reading exceptions for over six hours a day.', 'T'),
     ('The exception rate has already fallen.', 'F')],
c_c=[('The most ____________ number Arclight owns.', 'misleading'),
     ('What the figure describes is ____________ at one stage.', 'completed volume'),
     ('That knowledge does not ____________.', 'compress'),
     ('Not a job anybody would accept if it were ____________.', 'advertised'),
     ('The honest version has a ____________ attached.', 'condition'),
     ('A statement about ____________ rather than about capacity.', 'intentions')],
c_d=[('The capacity figure is misleading because it ignores the ( constraint / quality ).', ['constraint', 'quality'], 0),
     ('The exception work has not got faster because', ['the team is small', 'the knowledge does not compress', 'volumes rose', 'systems are slow'], 1),
     ('Next year’s projection assumes book growth of', ['ten per cent', 'forty per cent', 'ninety per cent', 'none'], 1),
     ('On those numbers Victor would read exceptions for', ['one hour a day', 'six hours a day', 'two days a week', 'all day'], 1),
     ('Ines requires the number to appear with', ['a chart', 'its condition', 'a date', 'a name'], 1)],
c_e=('Future perfect or future continuous? Put each sentence in the right column.',
     [('By March we will have processed ninety thousand items.', 'future perfect'),
      ('This time next year Victor will be reading exceptions all morning.', 'future continuous'),
      ('By then the three of them will have read six thousand exceptions.', 'future perfect'),
      ('At nine tomorrow I will be briefing the board.', 'future continuous'),
      ('By the end of the year we will have hired nobody.', 'future perfect'),
      ('Next spring we will still be arguing about this.', 'future continuous')],
     ['future perfect', 'future continuous']),

v_fig_title='CAPACITY AND WHAT LIMITS IT',
v_fig=[('chart', 'completed volume'), ('scale', 'a constraint'), ('bank', 'spare capacity'),
       ('doc', 'a backlog'), ('bulb', 'slack'), ('coin', 'output per head')],
v_fig_cap='Six words for the difference between what a team can produce and what the process delivers.',
vocab=[
 ('span of control', 'the number of people or processes one person can actually oversee'),
 ('output per head', 'what one person produces in a period, as a figure'),
 ('a surge', 'a short, sharp rise in volume above the normal level'),
 ('a backlog', 'work that has arrived and has not yet been done'),
 ('completed volume', 'the quantity of work passing right through a stage'),
 ('spare capacity', 'the additional volume that could be absorbed without change'),
 ('elasticity', 'the degree to which capacity can stretch when it must'),
 ('to ramp up', 'to increase capacity deliberately over a short period'),
 ('a staffing model', 'the stated relationship between volume and people needed'),
 ('load', 'the quantity of work pressing on a stage at a given moment'),
 ('saturation', 'the point at which no further work can be taken on'),
 ('slack', 'unused capacity held deliberately rather than wasted'),
 ('a peak', 'the highest point reached by volume in a cycle'),
 ('a trough', 'the lowest point reached by volume in a cycle'),
 ('to absorb', 'to take on additional work without the process breaking'),
 ('strain', 'the visible cost of operating close to the limit'),
 ('to overstretch', 'to extend capacity past the point where it holds'),
 ('resilience', 'the capacity to keep operating when something goes wrong'),
 ('a bottleneck', 'the single stage that sets the pace of the whole process'),
 ('a constraint', 'the thing that limits output, whatever else is improved')],
v_a=[('The single stage that sets the pace of the whole process is the ____________.', 'bottleneck'),
     ('The additional volume that could be absorbed without change is ____________.', 'spare capacity'),
     ('Unused capacity held deliberately is ____________.', 'slack'),
     ('The point at which no further work can be taken on is ____________.', 'saturation'),
     ('The quantity of work passing right through a stage is ____________.', 'completed volume'),
     ('The number of processes one person can actually oversee is their ____________.', 'span of control'),
     ('To extend capacity past the point where it holds is to ____________.', 'overstretch'),
     ('The capacity to keep operating when something goes wrong is ____________.', 'resilience')],
v_b=[('A backlog is work that has arrived', 'and has not yet been done.'),
     ('A staffing model is the stated relationship', 'between volume and people needed.'),
     ('Elasticity is the degree to which capacity', 'can stretch when it must.'),
     ('Strain is the visible cost of operating', 'close to the limit.'),
     ('A constraint is the thing that limits output,', 'whatever else is improved.')],

g_title='Grammar: future perfect and future continuous',
g_rule=['Future perfect: will have + past participle, for work complete by a future point.',
        'Future continuous: will be + -ing, for what is in progress at that point.',
        'Both take a time marker: by March, by then, this time next year, at nine tomorrow.',
        'By is for the deadline; at and this time next year are for the moment itself.'],
g_fig=('LOOSE',
       ['By March we will process ninety thousand items.',
        'This time next year Victor will read exceptions all morning.',
        'By then they will be reading six thousand exceptions.',
        'By the end of the year we will be hiring nobody.'],
       'PRECISE',
       ['By March we will have processed ninety thousand items.',
        'This time next year Victor will be reading exceptions all morning.',
        'By then they will have read six thousand exceptions.',
        'By the end of the year we will have hired nobody.'],
       'four sentences with the wrong aspect',
       'four with the aspect the time marker requires'),
g_fig_cap='The time marker tells you which form to use; it is not a matter of taste.',
g_a=[('By March we ____________ (process) ninety thousand items.', 'will have processed'),
     ('This time next year Victor ____________ (read) exceptions all morning.', 'will be reading'),
     ('By then the three of them ____________ (read) six thousand exceptions.', 'will have read'),
     ('At nine tomorrow I ____________ (brief) the board.', 'will be briefing'),
     ('By the end of the year we ____________ (hire) nobody.', 'will have hired'),
     ('Next spring we ____________ (still/argue) about this.', 'will still be arguing'),
     ('By December the backlog ____________ (clear), on these numbers.', 'will have cleared'),
     ('This time next month Kenji ____________ (work) on the staffing model.', 'will be working'),
     ('By the time you read this, the rate ____________ (fall) or it ____________ (not).', 'will have fallen / will not')],
g_b=[('By March we ( will be processing / will have processed ) ninety thousand items.', ['will be processing', 'will have processed'], 1),
     ('This time next year Victor ____ exceptions all morning.', ['will have read', 'will be reading', 'reads', 'will read'], 1),
     ('By then they ____ six thousand exceptions.', ['will be reading', 'will have read', 'read', 'are reading'], 1),
     ('At nine tomorrow I ____ the board.', ['will have briefed', 'will be briefing', 'brief', 'will brief'], 1),
     ('By the end of the year we ____ nobody.', ['will be hiring', 'will have hired', 'hire', 'are hiring'], 1),
     ('Next spring we ____ about this.', ['will have argued', 'will still be arguing', 'argue', 'still argue'], 1)],

d1=dict(title='Six hours a day of exceptions',
        fig=(['Ninety thousand items. Four people.', 'It is a real number.'],
             ['And six thousand exceptions.', 'Which is also a real number.']),
        cap='Victor and Kenji, over the projection.',
        lines=[('Kenji', 'By the end of March the four of them will have processed ninety-one '
                         'thousand items. In year four that was forty people’s work.'),
               ('Victor', 'It is a true figure and I would like it to stop being quoted without the '
                          'next one.'),
               ('Kenji', 'Which is?'),
               ('Victor', 'Six thousand two hundred exceptions, read by three of us, and the reading '
                          'has not got faster by a single minute in three years.'),
               ('Kenji', 'Why not? Everything upstream has.'),
               ('Victor', 'Because what I am doing is remembering that this client treats a rounding '
                          'difference as serious and that one does not. That is not a procedure, it '
                          'is nine years of knowing them.'),
               ('Kenji', 'On next year’s growth you will be reading for six hours and ten minutes '
                         'of every working day.'),
               ('Victor', 'This time next year, if nothing changes, I will be doing nothing else at '
                          'all, and the firm will have a single point of failure with a pulse.'),
               ('Kenji', 'Then the projection is wrong.'),
               ('Victor', 'The projection is arithmetically correct and practically impossible, which '
                          'is the most dangerous kind of projection, because nobody can fault the '
                          'arithmetic.'),
               ('Kenji', 'What figure should I put in the paper?'),
               ('Victor', 'Put both, in the same sentence, with the word provided in the middle. Four '
                          'can do the work of forty provided the exceptions are spread or reduced.')],
        a=[('How many items will be processed by the end of March?', 'ninety-one thousand'),
           ('How many exceptions, and read by how many people?', 'six thousand two hundred, read by three'),
           ('Why has exception reading not got faster?', 'because it is nine years of knowing clients, not a procedure'),
           ('What would Victor be doing this time next year?', 'nothing but reading exceptions'),
           ('What does Victor want in the paper?', 'both figures in one sentence, joined by the word provided')],
        b=[('A single point of failure with a ____________.', 'pulse'),
           ('Arithmetically correct and practically ____________.', 'impossible'),
           ('Nobody can fault the ____________.', 'arithmetic'),
           ('With the word ____________ in the middle.', 'provided')]),
d2=dict(title='Spreading the exceptions',
        fig=(['Spread them to whom?', 'The four who do the checking.'],
             ['They have never made that call.', 'Then this time next year they will have.']),
        cap='Ines and Victor, the following week.',
        lines=[('Ines', 'Spread or reduce, you said. Take spreading first. Spread to whom?'),
               ('Victor', 'The four in the checking team. They see the items and they know the '
                          'formats better than I do.'),
               ('Ines', 'And the client knowledge?'),
               ('Victor', 'They have none, which is the whole difficulty. I cannot hand over a '
                          'judgement that consists of knowing somebody.'),
               ('Ines', 'You can hand over the cases where the knowledge is not needed. What '
                        'proportion is that?'),
               ('Victor', 'I went through four hundred exceptions last month and marked each one. '
                          'Two hundred and sixty-one needed nothing I know that they do not.'),
               ('Ines', 'That is sixty-five per cent, which solves the arithmetic on its own.'),
               ('Victor', 'It does, and it requires a rule for telling the two apart that they can '
                          'apply without me, which is the piece of work nobody has done.'),
               ('Ines', 'How long?'),
               ('Victor', 'Six weeks to write it from the four hundred I have already marked, and '
                          'then a quarter of running both in parallel to see where the rule is '
                          'wrong.'),
               ('Ines', 'So by this time next year the four of them will have been making that call '
                        'for nine months and we will know whether the rule holds.'),
               ('Victor', 'Yes. And I would rather spend the six weeks now than explain in March why '
                          'a figure everybody has been quoting turned out to need a footnote.')],
        a=[('Who does Victor propose spreading exceptions to?', 'the four in the checking team'),
           ('What do they lack?', 'the client knowledge'),
           ('What proportion of exceptions needed nothing Victor alone knows?', 'two hundred and sixty-one of four hundred, about sixty-five per cent'),
           ('What piece of work has nobody done?', 'a rule for telling the two kinds of exception apart'),
           ('What is the timetable?', 'six weeks to write the rule, then a quarter running both in parallel')],
        b=[('I cannot hand over a judgement that consists of knowing ____________.', 'somebody'),
           ('I went through four hundred exceptions and ____________ each one.', 'marked'),
           ('A rule they can apply without ____________.', 'me'),
           ('Why a figure everybody has been quoting turned out to need a ____________.', 'footnote')]),

speak=[('Say it correctly',
        ['Student A: make six projections about next year, three perfect and three continuous.',
         'Student B: check that the aspect matches the time marker.',
         'Find the one where changing the aspect changed the meaning materially.']),
       ('Spoken specification: the capacity claim with its condition',
        ['State what your team will have done by this time next year.',
         'Brief aloud the condition the figure depends on, in the same breath.',
         'Your partner asks what will be in progress at the busiest hour of that year.']),
       ('Find the constraint',
        ['In pairs, describe a process in your organisation stage by stage.',
         'Identify which stage sets the pace, and who sits in it.',
         'Find the case where improving an earlier stage would change nothing.'])],

ext_title='A capacity figure without its constraint is not a forecast, it is a slogan',
ext_fig=figs.capacity('WHAT FOUR PEOPLE CAN PRODUCE, AND WHAT ONE CAN REVIEW',
                      ('items the team can process', 126000),
                      ('items the review stage can absorb', 71000),
                      'The gap is 55,000 items, and it does not appear in the capacity claim.'),
ext_fig_cap='Both bars are real. Only the shorter one is the capacity of the process.',
ext=[
 'Claims of the form four people now do the work of forty are usually true and almost always '
 'incomplete, and the incompleteness is systematic rather than accidental. The figure '
 'describes throughput at one stage, measured where the improvement happened, and the '
 'capacity of a process is set not by its fastest stage but by its slowest, which is '
 'ordinarily the one that was not improved because it could not be.',
 'In professional work the unimproved stage is nearly always a person exercising judgement '
 'that rests on knowing something particular: a client’s habits, a market’s conventions, a '
 'history of what has gone wrong before. That knowledge does not compress, cannot be '
 'transferred by documentation alone, and is held by a small number of people whose working '
 'hours are the real ceiling on the firm. Improving everything upstream of them raises the '
 'rate at which work arrives at a door that opens at the same speed.',
 'The projection that follows has a characteristic and dangerous property: it is '
 'arithmetically sound and practically impossible, and nobody can fault the arithmetic. '
 'Volumes multiply, exception rates hold, and the resulting figure quietly commits one named '
 'individual to a working day of a length nobody would accept if it were offered as a job. '
 'Because the error is not in the calculation, review processes that check calculations do '
 'not catch it.',
 'Two remedies exist and they are not interchangeable. The exception rate can be reduced, '
 'which means the systems upstream must get better at the cases they currently refer; or the '
 'exception work can be spread, which means somebody must write down the rule that '
 'distinguishes the cases requiring particular knowledge from the cases merely requiring '
 'care. The second is almost always available and almost always undone, because it is weeks '
 'of unglamorous work by the busiest person in the firm.',
 'The discipline that prevents the whole failure is small and procedural. Any capacity figure '
 'quoted in any document must appear in the same sentence as the condition on which it '
 'depends, joined by provided that or as long as. Four people can do the work of forty '
 'provided the exception rate falls below a stated figure; without the second clause the '
 'first clause is a slogan, and slogans get into board papers and then into commitments.'],
dp1=('Constraints and process improvement',
     'Operations research consistently finds that improvements at non-constraint stages do '
     'not raise system output, and that unrecognised human-judgement stages are a common '
     'constraint in professional services.',
     'Source: general operations-management literature, 2026. Context-dependent.'),
e_a=[('What does a capacity figure usually describe?', 'throughput at one stage, measured where the improvement happened'),
     ('What sets the capacity of a process?', 'its slowest stage, not its fastest'),
     ('Why is the unimproved stage usually a person?', 'because it rests on particular knowledge that does not compress'),
     ('Why do review processes not catch the bad projection?', 'because the error is not in the arithmetic'),
     ('What are the two remedies?', 'reduce the exception rate, or write the rule that lets the work be spread')],
e_b=[('The claim that four do the work of forty is usually false.', 'F'),
     ('Process capacity is set by the fastest stage.', 'F'),
     ('Particular client knowledge can be transferred by documentation alone.', 'F'),
     ('The dangerous projection is arithmetically wrong.', 'F'),
     ('Spreading the work requires a written rule.', 'T'),
     ('A capacity figure should carry its condition in the same sentence.', 'T')],

w_model=(
 'Purpose: state the checking team’s capacity for next year together with the condition it '
 'depends on, so that no figure can be quoted without it. Scope: the checking process from '
 'intake to sign-off; advisory work is out of scope. Inputs: 12 months of item counts, the '
 'exception log, and the 400 exceptions Victor marked in April. Criteria: give items '
 'processed, exception count and exception rate for each of the 12 months; give the review '
 'hours implied for each of the 3 reviewers at 40 per cent growth; state the capacity figure '
 'and its condition in 1 sentence joined by provided that; exclude any month in which the '
 'intake process changed and name those months. Done: 1 table of 12 rows and 1 sentence of '
 'no more than 30 words carrying both halves. Fallback: where an exception was logged '
 'without a reviewer name, count it against the unallocated line and report that line '
 'separately rather than distributing it.'),
w_fig=figs.datatable('THE PROJECTION, WITH ITS SECOND CLAUSE',
                     ['', 'This year', 'Next year at +40%', 'If exceptions spread'],
                     [['items processed', '91,000', '126,000', '126,000'],
                      ['exception rate', '7.1%', '7.1%', '7.1%'],
                      ['exceptions', '6,200', '8,800', '8,800'],
                      ['read by Victor', '2,900', '4,100', '1,400'],
                      ['Victor hours a day', '4.3', '6.2', '2.1']]),
w_fig_cap='The fourth column is the same business with one rule written down.',
w_task='Write a capacity statement for your own team, with its condition attached.',
w_steps=['Give the volume figure and the period it covers.',
         'Identify the stage that sets the pace and the person sitting in it.',
         'Give the hours that stage implies at your projected growth.',
         'Write the capacity claim and its condition as one sentence.',
         'Say what is excluded from the figures and name the exclusions.'],
w_bank=['State … capacity for … together with the condition it depends on, so that …',
        'Cover … from … to … ; … is out of scope.',
        'Give … , … and … for each of the … months.',
        '… can do … provided that …',
        'Exclude any month in which … and name those months.'],
w_check=['Does the capacity claim carry its condition in the same sentence?',
         'Is the constraint stage named, with the person in it?',
         'Are the implied hours per reviewer given?',
         'Are exclusions named rather than merely counted?'],

t_title='Four people with the capacity of forty',
t_fig=figs.split('TWO WAYS OF QUOTING THE SAME FIGURE',
                 'The slogan — one clause',
                 ['four people do the work of forty',
                  '91,000 items with a team of four',
                  'tenfold output per head',
                  'quoted in the board paper'],
                 'The claim — two clauses',
                 ['four do the work of forty provided',
                  'the exception rate falls below 4%',
                  'or 65% of exceptions are spread',
                  'with the reviewer hours shown']),
t_fig_cap='The right-hand column is harder to say and is the only version that survives a year.',
t_body=[
 'Establish the constraint before you quote any capacity figure at all. Walk the process '
 'stage by stage, ask of each stage what sets its pace, and keep going until you reach the '
 'one that has not got faster. In professional work that stage is almost always a person '
 'whose judgement rests on knowing something particular, and everything you do upstream of '
 'them raises the rate at which work arrives at a door that opens at an unchanged speed.',
 'Then compute what your projection commits that person to, in hours of their day, and read '
 'the figure aloud. A projection that puts a named individual at six hours a day of a single '
 'activity is not a forecast but an undertaking nobody has given, and because its arithmetic '
 'is correct it will pass every review it is submitted to. The hours figure is the one that '
 'exposes it, and it takes two minutes to calculate.',
 'Finally, fix the habit that prevents the whole problem, which is a sentence pattern rather '
 'than an analysis. Never let a capacity figure appear without the clause it depends on: '
 'four people can do the work of forty provided the exception rate falls below four per cent. '
 'The second clause is where the work is, the first clause is what gets quoted, and keeping '
 'them joined is the only reliable defence against the first travelling alone.'],
t_say=[('Find the pace-setter: ', 'Which stage has not got faster?'),
       ('Convert to hours: ', 'What does that commit Victor to, per day?'),
       ('Join the clauses: ', 'Four can do forty’s work provided the rate falls below four per cent.')],
t_bound=('A capacity statement with its condition attached tells you what the process can '
         'carry if the condition holds. It cannot tell you whether the condition will hold, '
         'and it says nothing about what happens in a surge, when the constraint stage has no '
         'elasticity at all and the backlog forms in a week.'),
t_a=[('Which stage has not got ____________?', 'faster'),
     ('What does that commit Victor to, per ____________?', 'day'),
     ('Four can do forty’s work ____________ the rate falls below four per cent.', 'provided'),
     ('A door that opens at an ____________ speed.', 'unchanged'),
     ('An undertaking nobody has ____________.', 'given'),
     ('The second clause is where the ____________ is.', 'work')],
t_b_rubric='Rewrite each capacity claim so that it carries its condition.',
t_b=[('Four people now do the work of forty.', 'four people do the work of forty provided the exception rate stays below seven per cent'),
     ('We can handle twice the volume next year.', 'we can handle twice the volume provided sixty-five per cent of exceptions are spread'),
     ('Our output per head has risen tenfold.', 'output per head at the checking stage has risen tenfold; the review stage is unchanged'),
     ('There is plenty of headroom.', 'there is headroom of thirty-five thousand items at checking and none at review')],

case=dict(
 title='Decision Clinic · The figure that reached a client',
 brief=[
  'The capacity figure, four people doing the work of forty, appeared in a board paper, then '
  'in a renewal conversation, and then in a proposal to a prospective client who asked '
  'whether Arclight could absorb a book of eleven thousand items at four weeks’ notice.',
  'Fatima Zahra answered yes, on the strength of the figure. The checking stage can indeed '
  'absorb it. The review stage cannot: eleven thousand items at the current rate generate '
  'seven hundred and eighty exceptions, which is five weeks of Victor’s existing capacity '
  'and he has none spare.',
  'The proposal is out. The client is interested. Ines discovered the commitment three days '
  'after it was made, and the rule-writing work that would spread the exceptions has not '
  'started.'],
 exhibit=figs.datatable('WHAT WAS PROMISED AND WHAT EXISTS',
                        ['', 'Promised', 'Checking stage', 'Review stage'],
                        [['items at 4 weeks notice', '11,000', 'yes', '—'],
                         ['exceptions generated', '780', '—', 'no'],
                         ['reviewer weeks required', '5', '—', '0 spare'],
                         ['rule-writing work', '—', '—', 'not started'],
                         ['notice given to Victor', 'none', '—', '—']]),
 exhibit_cap='Every line of the promise is true of one stage and false of the process.',
 exhibit_note='The exception rate for a new client’s first quarter has historically run '
              'about a third higher than the steady-state figure used here.',
 voices=[('Fatima Zahra', 'client manager',
          'I quoted a figure the firm has been quoting internally for a year, in a paper '
          'signed off by two directors. If that figure needed a condition, the condition '
          'should have been attached to it before it reached me.'),
         ('Victor Sandoval', 'operations and quality',
          'It did need a condition and I said so in February, and I said it in a corridor '
          'rather than in writing, which on this evidence is the same as not saying it.'),
         ('Ines Carvalho', 'managing director',
          'This is mine. I let a one-clause version of a two-clause fact circulate for a '
          'year because the one-clause version was a very good sentence, and I am not going '
          'to pretend the failure happened further down.')],
 steps=[('Find it', 'What was promised, and what can each stage absorb?'),
        ('Compare it', 'How many reviewer weeks does the promise require?'),
        ('Infer it', 'Where did the failure actually occur?'),
        ('Weigh it', 'Withdrawing the proposal against accepting it and finding capacity.'),
        ('Decide', 'What is said to the client, and what changes internally?')],
 analysis=[('Find it. How many exceptions would eleven thousand items generate?', 'about seven hundred and eighty, probably more in a first quarter'),
           ('Compare it. How many reviewer weeks is that?', 'five, against none spare'),
           ('Infer it. Where did the failure occur?', 'in letting a one-clause figure circulate, not in the proposal'),
           ('Weigh it. What is the cost of withdrawing?', 'a lost client and an admission; against a commitment that cannot be met'),
           ('Decide. What would you do?', 'answers vary; any acceptance must come with a staged intake and the rule-writing started')],
 decision='Write what Arclight says to the client and what it changes internally.',
 decision_steps=['Say what is offered to the client now, with dates.',
                 'Say what is said about the original answer.',
                 'Say what changes about how capacity figures are quoted.',
                 'Say who is responsible for the rule-writing work and by when.'],
 bank=['We can take … items by … and the remainder by …',
       'Our earlier answer …',
       'From now on any capacity figure must …',
       '… is responsible for … by …',
       'This is reviewed at …'],
 outcome='Arclight accepted the client on a staged intake of four thousand items a month '
         'over three months, told them plainly why, and started the rule-writing work with '
         'six weeks of Victor’s time protected. The client accepted the staging without '
         'comment and mentioned later that two other suppliers had promised the full volume '
         'immediately, which was one of the reasons they chose Arclight. Ines has required '
         'that every capacity figure in any document carry its condition in the same sentence; '
         'Fatima has pointed out that the two-clause version is harder to say in a meeting and '
         'that she will sometimes get it wrong.',
 outcome_q=[('Why did the client choose Arclight?', 'partly because two other suppliers had promised the full volume immediately'),
            ('What reservation does Fatima raise about the new rule?', 'that the two-clause version is harder to say in a meeting and she will sometimes get it wrong')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Write the capacity paper',
 task=['This is the brief that produced the original capacity paper, written by Ines in '
       'February when the figure first became available.',
       'The paper it produced was accurate, well presented, and contained the one-clause '
       'sentence that was still travelling eleven months later.'],
 draft=['Write up what the checking team has achieved this year.',
        'Include the comparison with how many people it used to take.',
        'Project it forward for next year on sensible growth.',
        'Mention any issues at the review end.',
        'Leave out the months where the process was different.',
        'Make it something we can show people.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions, one of which quietly made the central problem optional.',
 asked=['Volume and exception figures month by month',
        'Reviewer hours implied at the projected growth',
        'The capacity claim and its condition in one sentence'],
 back=['A 4-page paper, annual figures only',
       'Review constraint in 1 sentence, page 3',
       'The one-clause capacity claim on page 1'],
 gap='"Mention any issues" makes the constraint a mention rather than a condition, "sensible '
     'growth" fixes no rate, "the months where the process was different" are not named, and '
     '"something we can show people" licenses the one-clause sentence that caused everything.',
 back_cap='A paper whose first page was quotable and whose third page was the actual finding.',
 back_note='The brief did not ask for the reviewer hours. Nobody computed them until '
           'November, and the calculation took two minutes.',
 diagnosis=[('[1] "what the team has achieved" — over what period, measured how?', 'unscoped set'),
            ('[2] "sensible growth" — what rate, from whose forecast?', 'missing condition'),
            ('[3] "mention any issues at the review end" — mention, or quantify?', 'missing condition'),
            ('[4] "the months where the process was different" — which months?', 'unstated exception'),
            ('[5] "something we can show people" — show to whom, quoted how?', 'unscoped set'),
            ('[6] no instruction about the capacity sentence itself', 'unstated exception')],
 rewrite='Rewrite the brief so that the reviewer hours are required, the exclusions are '
         'named, and the capacity claim must appear with its condition.',
 scaffold=['Why the paper exists and what must not be quotable without its condition',
           'Which process it covers, and what is out of scope',
           'The counts, logs and marked exceptions it is built from',
           'The figures each row carries, the implied reviewer hours, and the sentence rule',
           'How many rows and how long the sentence may be',
           'What to do with an exception logged without a reviewer name'],
 bank=['State … capacity for … together with the condition it depends on, so that …',
       'Cover … ; … is out of scope.',
       'Work from … months of … , … , and the … exceptions marked in …',
       'Give … for each of the … months; give the review hours implied for each of the … reviewers at … growth; state … in 1 sentence joined by provided that.',
       'Return … rows and 1 sentence of no more than … words.',
       'Where an exception was logged without … , … rather than …'],
 check=['Are the implied reviewer hours required by the brief?',
        'Are the excluded months to be named?',
        'Must the capacity claim and its condition share one sentence?',
        'Is there a rule for unallocated exceptions?'],
 model=['State the checking team’s capacity for next year together with the condition it depends on, so that no figure can be quoted without it',
        'The checking process from intake to sign-off; advisory work is out of scope',
        '12 months of item counts, the exception log, and the 400 exceptions Victor marked in April',
        'Items processed, exception count and exception rate for each of the 12 months; the review hours implied for each of the 3 reviewers at 40 per cent growth; the capacity figure and its condition in 1 sentence joined by provided that; exclude any month in which the intake process changed and name those months',
        '1 table of 12 rows and 1 sentence of no more than 30 words carrying both halves, by 28 February',
        'Where an exception was logged without a reviewer name, count it against the unallocated line and report that line separately rather than distributing it'],
 cost='Eleven months of a one-clause figure in circulation, 1 commitment to a client that '
      'could not be met as made, and a staged intake negotiated under pressure in 3 days.'),

rev_fig=figs.split('FUTURE PERFECT AND FUTURE CONTINUOUS',
                   'By — complete by then',
                   ['By March we will have processed 91,000.',
                    'By then they will have read 6,200.',
                    'By December the backlog will have cleared.',
                    'By year end we will have hired nobody.'],
                   'This time next year — in progress',
                   ['Victor will be reading exceptions.',
                    'We will still be arguing about this.',
                    'Kenji will be working on the model.',
                    'The four of them will be making the call.']),
rev_fig_cap='The left column needs a deadline; the right column needs a moment.',
rev=dict(
 read=[('Process capacity is set by', ['the fastest stage', 'the slowest stage', 'the average stage', 'the first stage'], 1),
       ('The dangerous projection is', ['arithmetically wrong', 'arithmetically sound and practically impossible', 'too cautious', 'undated'], 1),
       ('Spreading exception work requires', ['more people', 'a written rule for telling cases apart', 'faster systems', 'a new supplier'], 1),
       ('In the Clinic, where does Ines locate the failure?', ['with Fatima', 'with Victor', 'with herself', 'with the client'], 2)],
 listen_text='Establish the constraint before you quote any capacity figure. Walk the process '
             'stage by stage and keep going until you reach the one that has not got faster. '
             'Then compute what your projection commits that person to, in hours of their '
             'day, and read the figure aloud. And never let a capacity figure appear without '
             'the clause it depends on.',
 listen=[('Establish the ____________ before you quote any capacity figure.', 'constraint'),
         ('Keep going until you reach the one that has not got ____________.', 'faster'),
         ('In hours of their ____________.', 'day'),
         ('Without the ____________ it depends on.', 'clause')],
 speak=['State what your team will have completed by this time next year.',
        'Attach the condition in the same sentence, and say who sits in the constraint.'],
 write='Write your own capacity claim as a single sentence with provided that in the middle.',
 vocab=[('The single stage that sets the pace is the ____________.', 'bottleneck'),
        ('The volume that could be absorbed without change is ____________.', 'spare capacity'),
        ('Unused capacity held deliberately is ____________.', 'slack'),
        ('To extend capacity past the point where it holds is to ____________.', 'overstretch'),
        ('The point at which no further work can be taken on is ____________.', 'saturation')],
 gram=[('By March we ____________ (process) ninety thousand items.', 'will have processed'),
       ('This time next year Victor ____________ (read) exceptions all morning.', 'will be reading'),
       ('By then they ____________ (read) six thousand exceptions.', 'will have read'),
       ('At nine tomorrow I ____________ (brief) the board.', 'will be briefing'),
       ('By the end of the year we ____________ (hire) nobody.', 'will have hired')]),

found=['Walk one process in your organisation and find the stage that has not got faster.',
       'Name the person in it and compute the hours your growth commits them to.',
       'Rewrite your capacity claim as one sentence with its condition attached.',
       'Find out whether a one-clause version of it is already circulating.'],
end_line='Put both, in the same sentence, with the word provided in the middle.',
end_next='Next: What Had Already Happened',
)
