# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='What If It Is Wrong',
gram='the second conditional',
ai='accepting an error rate on purpose, and pricing it',
strap='CEFR B2 · Grammar: the second conditional · AI: accepting an error rate, and pricing it',
cando=['use the second conditional to test a scenario that has not happened',
       'distinguish a hypothetical from a prediction in my own writing',
       'put a price on an error rate rather than describing it as acceptable',
       'decide an error rate deliberately instead of discovering it afterwards',
       'explain why zero errors is a price rather than a standard'],
hero=('THE TABLE NOBODY WANTED TO WRITE',
      ['If one letter in two hundred went to the wrong client,',
       'what would that cost, and who would pay it?'],
      [(880, 'orange', 'short'), (1620, 'purple', 'long'), (2360, 'grey', 'short')]),
hero_cap='Pricing an error rate is uncomfortable, and the alternative is having one anyway.',

warm=['What error rate does your work currently have? How do you know?',
      'What is the difference between "if it fails" and "if it failed"?',
      'When is it rational to accept a known error rate rather than remove it?'],
read=[
 'Arclight’s error rate on extraction settled at about two per cent of rows after Victor’s '
 'first year, which is to say roughly thirty-eight wrong rows a month out of nineteen '
 'hundred. Nobody had chosen that figure. It was the rate that happened to result from the '
 'checks that happened to exist, and for most of a year nobody had expressed it as a number '
 'at all.',
 'The conversation that changed things began when Kenji asked what it would cost to get the '
 'rate to zero. The answer, worked out over an afternoon, was that it could not be done, and '
 'that approaching it was extremely expensive: halving the rate would cost about four hours '
 'a week, and halving it again would cost roughly twenty.',
 'That shape is normal and it is worth understanding, because it recurs everywhere. The '
 'first checks are cheap and remove most of the errors. Each subsequent improvement costs '
 'several times what the previous one did and removes fewer errors than the one before, so '
 'the cost per error removed rises steeply while the benefit falls.',
 'What Arclight did next was the uncomfortable part. Victor built a table of what an error '
 'actually costs, by category, using the last two years of real incidents: a wrong figure '
 'in an internal report, about nine euros of somebody’s time; a wrong figure in a client '
 'letter, about ninety; a wrong credit note, about four hundred and twenty plus a '
 'relationship.',
 'With those numbers it became possible to say something that had previously been '
 'unsayable: that a two per cent rate on internal reports is cheaper to tolerate than to '
 'remove, and that a two per cent rate on credit notes is not. The rate is now different in '
 'different places, chosen deliberately, and written down with the reasoning beside it.'],
c_a=[('What was the extraction error rate?', 'about two per cent, roughly thirty-eight rows a month'),
     ('What did Kenji ask?', 'what it would cost to get the rate to zero'),
     ('What is the shape of the cost curve?', 'each improvement costs several times the last and removes fewer errors'),
     ('What did Victor build?', 'a table of what an error actually costs, by category, from two years of incidents'),
     ('What became sayable with those numbers?', 'that a two per cent rate is cheaper to tolerate on internal reports and not on credit notes')],
c_b=[('The two per cent rate had been chosen deliberately.', 'F'),
     ('Getting the rate to zero was found to be possible but expensive.', 'F'),
     ('Halving the rate would cost about four hours a week.', 'T'),
     ('A wrong credit note costs about nine euros.', 'F'),
     ('The error rate is now the same everywhere.', 'F'),
     ('The reasoning is written down beside the rates.', 'T')],
c_c=[('Roughly thirty-eight wrong rows a month out of nineteen ____________.', 'hundred'),
     ('It was the rate that happened to ____________ from the checks that happened to exist.', 'result'),
     ('Halving it again would cost roughly ____________.', 'twenty'),
     ('The cost per error removed rises ____________.', 'steeply'),
     ('A wrong credit note costs about four hundred and twenty plus a ____________.', 'relationship'),
     ('Chosen deliberately, and written down with the ____________ beside it.', 'reasoning')],
c_d=[('The two per cent rate had previously been ( inherited / chosen ).', ['inherited', 'chosen'], 0),
     ('Each successive improvement removes', ['more errors for less', 'fewer errors for more', 'the same number', 'all remaining errors'], 1),
     ('Victor’s table was built from', ['estimates', 'two years of real incidents', 'industry figures', 'a survey'], 1),
     ('The rate is now', ['zero everywhere', 'different in different places', 'two per cent everywhere', 'unmeasured'], 1),
     ('A wrong figure in a client letter costs about', ['9 euros', '90 euros', '420 euros', 'nothing'], 1)],
c_e=('Real or hypothetical? Put each sentence in the right column.',
     [('If a credit note is wrong, we reissue it.', 'Real — first conditional'),
      ('If the rate were zero, we would spend 20 hours a week.', 'Hypothetical — second'),
      ('If the export is stale, the run stops.', 'Real — first conditional'),
      ('If we checked everything, we would need four more people.', 'Hypothetical — second'),
      ('If a client complains, Fatima calls them.', 'Real — first conditional'),
      ('If errors cost nothing, we would not check at all.', 'Hypothetical — second')],
     ['Real — first conditional', 'Hypothetical — second']),

v_fig_title='PRICING WHAT GOES WRONG',
v_fig=[('coin', 'expected value'), ('scale', 'severity'), ('chart', 'residual risk'),
       ('bank', 'a provision'), ('doc', 'a write-off'), ('bulb', 'risk appetite')],
v_fig_cap='Six words that turn "acceptable" into a number somebody can disagree with.',
vocab=[
 ('risk appetite', 'the amount of loss an organisation has decided it will accept'),
 ('expected value', 'the average outcome, weighting each result by how likely it is'),
 ('probability', 'how likely something is, expressed as a proportion'),
 ('likelihood', 'the chance of something happening, stated loosely or precisely'),
 ('severity', 'how bad an outcome is if it occurs'),
 ('impact', 'the effect an event has when it happens'),
 ('mitigation', 'action taken to reduce the likelihood or the severity'),
 ('residual risk', 'what remains after everything you intend to do has been done'),
 ('insure', 'to pay a third party to carry a risk for you'),
 ('indemnity', 'an undertaking to make good somebody else’s loss'),
 ('write-off', 'an amount accepted as lost and removed from the books'),
 ('provision', 'money set aside in advance against an expected loss'),
 ('absorb', 'to take a cost without passing it on'),
 ('underwrite', 'to accept responsibility for a loss if it occurs'),
 ('premium', 'the price paid to transfer a risk to somebody else'),
 ('deductible', 'the first part of a loss that you carry yourself'),
 ('downside', 'what you stand to lose if things go badly'),
 ('upside', 'what you stand to gain if things go well'),
 ('break-even', 'the point at which gains and costs are equal'),
 ('tolerate', 'to accept something undesirable rather than remove it')],
v_a=[('The amount of loss an organisation has decided to accept is its ____________.', 'risk appetite'),
     ('What remains after everything you intend to do is ____________.', 'residual risk'),
     ('Money set aside in advance against an expected loss is a ____________.', 'provision'),
     ('The average outcome, weighted by likelihood, is the ____________.', 'expected value'),
     ('The first part of a loss you carry yourself is the ____________.', 'deductible'),
     ('An amount accepted as lost is a ____________.', 'write-off'),
     ('Action taken to reduce likelihood or severity is ____________.', 'mitigation'),
     ('The point at which gains and costs are equal is ____________.', 'break-even')],
v_b=[('To underwrite something is to accept responsibility', 'for a loss if it occurs.'),
     ('A premium is the price paid to transfer', 'a risk to somebody else.'),
     ('Severity is how bad an outcome is', 'if it occurs.'),
     ('To absorb a cost is to take it', 'without passing it on.'),
     ('An indemnity is an undertaking to make good', 'somebody else’s loss.')],

g_title='Grammar: the second conditional',
g_rule=['If + past simple, would + bare infinitive: if the rate were zero, we would spend 20 hours.',
        'It describes a situation that is not the case, and asks what would follow.',
        'Were is used with all subjects in careful writing: if it were cheaper.',
        'The first conditional describes what really happens; the second tests what does not.'],
g_fig=('LOOSE',
       ['Errors would be expensive.',
        'It would take a lot more time.',
        'We would need more people.',
        'That would be unacceptable.'],
       'PRECISE',
       ['If the rate were 1%, we would save 420 EUR a month.',
        'Halving it again would cost about 20 hours a week.',
        'If we checked everything, we would need 4 more people.',
        'A 2% rate on credit notes would cost 5,000 EUR a year.'],
       'a conditional with no condition in it',
       'a condition, a consequence and a number'),
g_fig_cap='A hypothetical without numbers is a feeling in the grammar of an argument.',
g_a=[('If the rate ____________ zero, we would spend twenty hours a week. (be)', 'were'),
     ('If we checked everything, we ____________ need four more people. (will)', 'would'),
     ('If errors cost nothing, we ____________ not check at all. (will)', 'would'),
     ('If the note ____________ wrong, it would cost about four hundred euros. (be)', 'were'),
     ('We would save four hundred a month if the rate ____________ one per cent. (be)', 'were'),
     ('If Samuel ____________ on day nine, the check would come first. (pay)', 'paid'),
     ('It ____________ be cheaper to tolerate than to remove. (will)', 'would'),
     ('If there ____________ no tolerance, sixty flags would be raised. (be)', 'were'),
     ('If we ____________ the rate, we could price it. (know)', 'knew')],
g_b=[('If the rate ( is / were ) zero, we would spend twenty hours a week.', ['is', 'were'], 1),
     ('If we checked everything, we ____ need four more people.', ['will', 'would', 'shall', 'are'], 1),
     ('If the note were wrong, it ____ cost about 400 euros.', ['will', 'would', 'had', 'did'], 1),
     ('We would save 400 a month if the rate ____ one per cent.', ['is', 'were', 'will be', 'has been'], 1),
     ('If Samuel ____ on day nine, the check would come first.', ['pays', 'paid', 'will pay', 'is paying'], 1),
     ('If we ____ the rate, we could price it.', ['know', 'knew', 'will know', 'had known'], 1)],

d1=dict(title='What would zero cost?',
        fig=(['What would it cost to get to zero?', 'More than the company is worth.'],
             ['Give me the shape of it.', 'Four hours, then twenty, then never.']),
        cap='Kenji and Victor, over an afternoon.',
        lines=[('Kenji', 'What would it cost us to get the extraction error rate to zero?'),
               ('Victor', 'It cannot be done, and I can tell you what the first two steps towards it cost.'),
               ('Kenji', 'Start with halving it. Two per cent to one.'),
               ('Victor', 'About four hours a week, mostly in comparing a second field on every row.'),
               ('Kenji', 'And from one per cent to a half?'),
               ('Victor', 'Roughly twenty hours a week, because what is left is the hard residue.'),
               ('Kenji', 'Five times the cost for half the benefit, and that is only the second step.'),
               ('Victor', 'It gets worse at every step after that, and the last few errors are the ones '
                          'nobody can describe in advance.'),
               ('Kenji', 'So zero is not a standard. It is a price nobody would pay.'),
               ('Victor', 'It is a price nobody would pay, and until this afternoon we had never once '
                          'written the price down.'),
               ('Kenji', 'Then write down what the errors cost as well, and we can have a real argument.'),
               ('Victor', 'That is the harder table and it is the only one that makes the first one mean anything.')],
        a=[('What does halving the rate cost?', 'about four hours a week'),
           ('What does halving it again cost?', 'roughly twenty hours a week'),
           ('What does Kenji conclude about zero?', 'that it is a price nobody would pay rather than a standard'),
           ('What had never been written down?', 'the price of reducing the error rate'),
           ('What does Victor say is the harder table?', 'what the errors cost')],
        b=[('About four hours a ____________.', 'week'),
           ('What is left is the hard ____________.', 'residue'),
           ('Zero is not a ____________.', 'standard'),
           ('The only one that makes the first one ____________ anything.', 'mean')]),
d2=dict(title='Two per cent of what',
        fig=(['Two per cent is fine.', 'Two per cent of credit notes?'],
             ['That is fifty-six a month.', 'So one bad one, every month.']),
        cap='Marta and Victor, once the cost table existed.',
        lines=[('Marta', 'You have written that two per cent is an acceptable rate. Acceptable where?'),
               ('Victor', 'On internal reports, where a wrong figure costs about nine euros of somebody’s time.'),
               ('Marta', 'And on credit notes, of which there are fifty-six a month?'),
               ('Victor', 'Two per cent of fifty-six is about one a month, at roughly four hundred and '
                          'twenty euros each.'),
               ('Marta', 'Plus whatever it does to a client who receives a credit note for the wrong amount.'),
               ('Victor', 'Which the table does not price, because I could not find a defensible way to.'),
               ('Marta', 'Then say that in the table rather than leaving it out, because a column of '
                          'numbers with a missing entry reads as a zero.'),
               ('Victor', 'That is a fair criticism and I will add a line saying the relationship cost is '
                          'not priced.'),
               ('Marta', 'And for credit notes specifically, I would like the rate to be as near zero as '
                          'the money allows, not two per cent.'),
               ('Victor', 'A full census on credit notes gets it to about a quarter of a per cent for '
                          'two hours a month.'),
               ('Marta', 'Then do that, and write down that we chose a quarter of a per cent and why.'),
               ('Victor', 'Written down with the reasoning beside it. That is the whole difference from last year.')],
        a=[('Where is two per cent acceptable?', 'on internal reports, where an error costs about nine euros'),
           ('How many credit notes are there a month?', 'fifty-six'),
           ('What does the table not price?', 'the effect on a client who receives a wrong credit note'),
           ('What is Marta’s criticism of leaving it out?', 'that a missing entry in a column of numbers reads as a zero'),
           ('What rate is chosen for credit notes?', 'about a quarter of a per cent, by a full census costing two hours a month')],
        b=[('Two per cent of fifty-six is about one a ____________.', 'month'),
           ('A column of numbers with a missing entry reads as a ____________.', 'zero'),
           ('As near zero as the ____________ allows.', 'money'),
           ('Written down with the ____________ beside it.', 'reasoning')]),

speak=[('If it were different',
        ['Student A: describe something at work that could not realistically change.',
         'Student B: ask what would follow if it did, using the second conditional.',
         'Put a number on each consequence, or admit that you cannot.']),
       ('Spoken specification: price the error',
        ['Choose a kind of mistake your work could make.',
         'Brief aloud what one instance costs: whose time, how much, and what else.',
         'Your partner asks what the part you did not price is worth. Answer honestly.']),
       ('Choose the rate',
        ['In pairs, pick three kinds of output at your work.',
         'For each, say what error rate you would choose and what it would cost to halve it.',
         'Find the one where you currently have no idea what the rate is.'])],

ext_title='Zero is a price, not a standard',
ext_fig=figs.datatable('WHAT AN ERROR COSTS, BY CATEGORY',
                       ['Kind of output', 'Per error', 'Volume a month', 'At 2%'],
                       [['internal report row', '9 EUR', '820', '148 EUR'],
                        ['client letter', '90 EUR', '412', '742 EUR'],
                        ['supplier total', '140 EUR', '11', '31 EUR'],
                        ['credit note', '420 EUR + trust', '56', '470 EUR + trust'],
                        ['total at 2%', '—', '1,299', '1,391 EUR + trust']]),
ext_fig_cap='The same rate costs very different amounts in the four rows, which is the entire argument.',
ext=[
 'Every organisation has an error rate and most of them have never said what it is. The rate '
 'is not chosen; it emerges from whatever checks were put in place for whatever reasons, and '
 'it drifts as volume changes. Describing it as acceptable, which is the usual formulation, '
 'conceals the fact that nobody has compared its cost with the cost of changing it.',
 'The first thing to establish is the shape of the cost curve, and it has the same shape '
 'nearly everywhere. The initial checks are cheap and remove the majority of errors. Each '
 'subsequent reduction costs several times what the previous one cost, because what remains '
 'is progressively harder to catch, and removes fewer errors than the step before. The cost '
 'per error removed therefore rises steeply, and it rises without limit.',
 'This means that zero is not a standard that a well-run organisation reaches and a badly '
 'run one does not. It is a point on a curve whose price is effectively infinite, and every '
 'organisation that appears to achieve it in some area has either defined errors narrowly or '
 'is spending a great deal more on that area than is visible from outside.',
 'What makes the conversation possible is pricing errors rather than ranking them. An error '
 'in an internal report consumes somebody’s time and nothing else; an error in a credit '
 'note costs money that has left the building and some amount of client confidence that '
 'nobody can price honestly. With those figures beside the cost of reduction, a rate can be '
 'chosen for each category rather than inherited for all of them.',
 'The part that requires discipline is recording what is not priced. Client confidence, '
 'staff morale and the slow erosion of a reputation are real and resist measurement, and a '
 'table of costs that silently omits them will be read as though they were zero. A line '
 'stating that they are excluded is worth more than a number somebody invented to fill the '
 'space.'],
dp1=('The cost of quality',
     'Quality-cost models in manufacturing and services generally show prevention and '
     'appraisal costs rising sharply as defect rates approach zero, with an optimum well '
     'above zero for most processes.',
     'Source: general quality-cost literature, 2026. Optima depend heavily on failure cost.'),
e_a=[('Why is "acceptable" an unhelpful description?', 'because it conceals the fact that nobody has compared costs'),
     ('What shape does the cost curve have?', 'each reduction costs several times the last and removes fewer errors'),
     ('Why is zero not a standard?', 'it is a point whose price is effectively infinite'),
     ('What makes the conversation possible?', 'pricing errors by category rather than ranking them'),
     ('Why record what is not priced?', 'because a silent omission will be read as a zero')],
e_b=[('Most organisations have stated their error rate.', 'F'),
     ('Later reductions cost about the same as earlier ones.', 'F'),
     ('Organisations appearing to reach zero may define errors narrowly.', 'T'),
     ('Client confidence can be priced honestly.', 'F'),
     ('A missing entry in a cost table is read as a zero.', 'T'),
     ('The optimum defect rate is usually zero.', 'F')],

w_model=(
 'Purpose: choose an error rate for each category instead of inheriting one for all of them. '
 'Scope: the 4 output categories produced in volume; one-off work is excluded. Inputs: 24 '
 'months of recorded incidents and the current check costs. Criteria: for each category, '
 'state the current rate over its denominator, the cost of 1 error, the cost of halving the '
 'rate, and the rate chosen; state explicitly what has not been priced. Done: 1 table of 4 '
 'rows with a chosen rate and a reason for each. Fallback: where fewer than 5 incidents '
 'exist in 24 months, mark the cost as unestimated rather than averaging 2 cases.'),
w_fig=figs.unitcost('THE COST OF REDUCING THE RATE',
                    [('From 2% to 1%', 'about 4 h a week', '1.0%', '19 errors removed'),
                     ('From 1% to 0.5%', 'about 20 h a week', '0.5%', '9 errors removed')],
                    'Five times the cost for half the benefit, and it steepens at every step after.'),
w_fig_cap='This curve is why zero is a price. It has the same shape in almost every setting.',
w_task='Price the errors in one part of your own work.',
w_steps=['Choose a category of output produced in volume.',
         'Find the real incidents from the last two years, not estimates.',
         'Work out what one error costs: whose time, how much money, what else.',
         'Estimate what halving the rate would cost in hours or in people.',
         'Choose a rate, write it down, and list what you have not priced.'],
w_bank=['The current rate is … of … , measured in …',
        'One error costs approximately … , comprising …',
        'Halving the rate would cost about …',
        'We have chosen a rate of … , because …',
        'The following are not priced: …'],
w_check=['Is your rate expressed over a denominator?',
         'Is the cost of one error built from real incidents rather than guesses?',
         'Have you stated what halving would cost?',
         'Have you listed what you could not price, rather than omitting it?'],

t_title='Accepting an error rate on purpose, and pricing it',
t_fig=figs.split('INHERITED AND CHOSEN',
                 'Inherited — the usual position',
                 ['The rate is about two per cent.',
                  'That seems acceptable.',
                  'We check what we have time for.',
                  'Nobody has priced an error.'],
                 'Chosen — with reasons beside it',
                 ['2% on internal rows, 0.25% on credit notes.',
                  'An error costs 9 EUR here and 420 EUR there.',
                  'Halving costs 4 h, then 20 h a week.',
                  'Client trust is not priced, deliberately.']),
t_fig_cap='The two columns describe the same company a year apart.',
t_body=[
 'Measure the rate before arguing about it, because almost every conversation about quality '
 'is conducted between people who do not know the number and are therefore arguing about '
 'their impressions. A rate over a denominator, from a sample drawn by a rule, converts the '
 'argument into one that can be settled.',
 'Then price an error in each category, using real incidents rather than estimates. The '
 'figures will be rough and they will still be transformative, because the difference '
 'between nine euros and four hundred and twenty is not a matter of estimation error. It is '
 'the difference between a category you should tolerate and one you should not, and nobody '
 'can see it without the numbers.',
 'And write down what you have not priced. Client confidence and reputation resist '
 'measurement, and the temptation is either to invent a number or to leave the cell empty. '
 'Leaving it empty is worse, because a table of costs is read as complete. One line saying '
 'that the relationship cost is excluded preserves the honesty of everything else in it.'],
t_say=[('Measure first: ', 'The rate is 3 of 90, drawn by rule, from 1,870.'),
       ('Price the error: ', 'One wrong credit note costs about 420 euros plus a relationship.'),
       ('Name the omission: ', 'Client confidence is not priced in this table, deliberately.')],
t_bound=('Pricing errors tells you what a known failure costs, not what an unknown one would. '
         'The table is built from incidents that have already happened, and the error that '
         'closes a client account has usually not happened yet, so it appears in no row and '
         'is worth more than every row combined.'),
t_a=[('The rate is 3 of 90, drawn by rule, from 1,870 ____________.', 'rows'),
     ('One wrong credit note costs about 420 euros plus a ____________.', 'relationship'),
     ('Client confidence is not priced in this table, ____________.', 'deliberately'),
     ('Almost every conversation about quality is conducted between people arguing about their ____________.', 'impressions'),
     ('The difference between nine euros and four hundred and twenty is not a matter of estimation ____________.', 'error'),
     ('A table of costs is read as ____________.', 'complete')],
t_b_rubric='Turn each judgement into a priced statement.',
t_b=[('Our error rate is acceptable.', 'the rate is 2 per cent; one error costs 9 euros here, so tolerating it costs 148 a month'),
     ('Credit note errors are serious.', 'one costs about 420 euros plus an unpriced relationship cost'),
     ('We should check more.', 'halving the rate costs about 4 hours a week and saves about 19 errors'),
     ('Zero errors is the goal.', 'zero is a point whose price is effectively unbounded; name a rate instead')],

case=dict(
 title='Decision Clinic · The rate nobody chose',
 brief=[
  'Arclight has operated at about two per cent across everything for most of a year. The '
  'cost table now shows that this costs roughly 1,391 euros a month, of which 470 sits in '
  'credit notes, which are three per cent of volume.',
  'Victor proposes a full census on credit notes, taking their rate to about a quarter of a '
  'per cent for two hours a month, and leaving the other categories alone.',
  'Dalia has asked a question nobody has an answer to: what is the rate on the work that '
  'leaves the company and is never checked at all, which is about four hundred items a month '
  'in categories nobody sampled because they produced no incidents.'],
 exhibit=figs.datatable('WHERE THE 1,391 EUROS A MONTH SITS',
                        ['Category', 'Volume', 'Rate', 'Cost a month', 'Sampled?'],
                        [['internal rows', '820', '2%', '148 EUR', 'yes'],
                         ['client letters', '412', '2%', '742 EUR', 'yes'],
                         ['supplier totals', '11', '2%', '31 EUR', 'yes'],
                         ['credit notes', '56', '2%', '470 EUR', 'yes'],
                         ['everything else', '~400', 'unknown', 'unknown', 'no']]),
 exhibit_cap='The last row has no rate, no cost and no sample, and it is a fifth of the volume.',
 exhibit_note='"Everything else" is a mixture of small categories, each too small to sample '
              'separately. None has produced a recorded incident in two years.',
 voices=[('Victor Sandoval', 'operations and quality',
          'Credit notes first. It is the clearest case in the table: four hundred and '
          'seventy euros a month for two hours of work.'),
         ('Dalia Rahman', 'co-founder',
          'The last row is four hundred items a month about which we know nothing, and the '
          'reason we know nothing is that nothing has gone wrong, which is also how the '
          'credit note problem looked in January.'),
         ('Kenji Watanabe', 'finance',
          'No incidents in two years across four hundred items a month is either a very low '
          'rate or a category where errors do not reach anybody who would report them. Those '
          'are extremely different and the table cannot tell them apart.')],
 steps=[('Find it', 'How much of the monthly cost is in credit notes, and how much is unknown?'),
        ('Compare it', 'What does the census buy, and what does sampling the last row buy?'),
        ('Infer it', 'Why does Kenji say the absence of incidents is ambiguous?'),
        ('Weigh it', 'A known 470 euros against an unknown quantity across 400 items.'),
        ('Decide', 'What happens first, and what is accepted in the meantime?')],
 analysis=[('Find it. How many items are in the unmeasured category?', 'about four hundred a month'),
           ('Compare it. What does the credit note census buy?', 'about 470 euros a month for two hours of work'),
           ('Infer it. What are the two explanations for no incidents?', 'a very low rate, or errors that never reach anybody who would report them'),
           ('Weigh it. Why is Dalia’s point uncomfortable?', 'because the credit note problem looked identical before it was measured'),
           ('Decide. What would distinguish the two explanations cheaply?', 'a single sample of the unmeasured category, which costs far less than either remedy')],
 decision='Write what Arclight does this quarter.',
 decision_steps=['Say what is done first, and what it costs.',
                 'Say what is measured, and by when.',
                 'State what rate is being accepted in the meantime, and in which categories.',
                 'Say what would change the decision.'],
 bank=['We will … first, at a cost of …',
       'We will sample … by … , to establish …',
       'In the meantime we accept a rate of … in … , costing about …',
       'This changes if …', 'What remains unpriced is …'],
 outcome='Both were done: the credit note census started immediately, and thirty items were '
         'drawn from the unmeasured category in the same month. The sample came back at '
         'about nine per cent, four and a half times the rate anywhere else, in a group '
         'consisting mostly of short internal confirmations that nobody read closely enough '
         'to notice. The cost per error was under two euros, so the category was left alone '
         'with its rate now written down, which Kenji describes as the first time Arclight '
         'has knowingly tolerated anything.',
 outcome_q=[('Why was the nine per cent rate acceptable?', 'because the cost per error was under two euros, so removing it would cost far more than it saved'),
            ('What changed, if the category was left alone?', 'the rate was measured and written down, so it is now a decision rather than an absence')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Decide what quality we are buying',
 task=['This is the brief Ines gave Victor when the cost conversation began, and it is the '
       'brief that produced the phrase "two per cent is acceptable" in a document that was '
       'quoted for nine months.',
       'It asks for a view on what quality level the company should aim for, without asking '
       'for a measurement or a price, so the only possible answer was a judgement.'],
 draft=['Work out what level of quality we should be aiming for.',
        'Take into account what we can reasonably afford.',
        'Give me a view on whether the current level is good enough.',
        'Consider the different kinds of work we do.',
        'Bear in mind that some mistakes matter more than others.',
        'Come back with a recommendation.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief asking for a judgement about numbers that nobody had collected.',
 asked=['A measured rate per category',
        'A cost per error from real incidents',
        'A chosen rate with its reasoning'],
 back=['"Two per cent is acceptable"',
       'No cost per error at all',
       'One rate applied to everything'],
 gap='"What we can reasonably afford" has no figure behind it, "some mistakes matter more" '
     'names no categories, and asking for a recommendation rather than a measurement '
     'guarantees that the answer is an opinion.',
 back_cap='One sentence that governed four categories for nine months.',
 back_note='The sentence "two per cent is acceptable" was true of one of the four categories '
           'and expensive in another. Nothing in the brief required the four to be '
           'distinguished.',
 diagnosis=[('[1] "what level of quality" — measured how, over what?', 'unbounded quantity'),
            ('[2] "what we can reasonably afford" — afford against what cost?', 'hidden assumption'),
            ('[3] "whether the current level is good enough" — and if it differs by category?', 'missing condition'),
            ('[4] "the different kinds of work" — which kinds, listed?', 'unbounded quantity'),
            ('[5] "some mistakes matter more" — by how much, in money?', 'hidden assumption'),
            ('[6] "come back with a recommendation" — and if the data does not exist?', 'missing condition')],
 rewrite='Rewrite the brief so that it asks for measurements and prices first, and for a '
         'chosen rate per category rather than a single verdict.',
 scaffold=['Why a single acceptable rate cannot be right for four different categories',
           'Which categories are covered, and what is excluded',
           'The incident record and the current check costs, both dated',
           'What must be established for each category before any rate is chosen',
           'The table that comes back, and what each row contains',
           'What to do where there are too few incidents to estimate a cost'],
 bank=['Choose a rate for each … rather than …',
       'Cover the … categories produced in volume; exclude …',
       'Work from … months of recorded incidents and …',
       'For each category, state … , … , … and …',
       'Return … rows, each with … and …',
       'Where fewer than … incidents exist, …'],
 check=['Does the brief ask for a measured rate before a judgement?',
        'Must the cost per error come from real incidents?',
        'Is a separate rate required for each category?',
        'Does the brief require unpriced items to be named rather than omitted?'],
 model=['Choose an error rate deliberately for each category, instead of inheriting one figure for all of them',
        'The 4 output categories produced in volume; one-off work and bespoke projects are excluded',
        '24 months of recorded incidents and the current cost of each check, as at 1 June',
        'For each category state the current rate over its denominator, the cost of 1 error built from real incidents, the cost of halving the rate, and the rate chosen with its reason; state explicitly what has not been priced',
        '1 table of 4 rows, each carrying a chosen rate and a written reason, by 30 June',
        'Where fewer than 5 incidents exist in 24 months, mark the cost as unestimated rather than averaging 2 cases'],
 cost='9 months during which one sentence governed 4 categories, about 470 euros a month '
      'tolerated in credit notes where 2 hours would have removed most of it, and a company '
      'that could not say what rate it was running at in any of them.'),

rev_fig=figs.split('FIRST AND SECOND CONDITIONAL',
                   'First — what really happens',
                   ['If a credit note is wrong, we reissue it.',
                    'If the export is stale, the run stops.',
                    'If a client complains, Fatima calls.',
                    'If two rules match, the higher wins.'],
                   'Second — testing what does not',
                   ['If the rate were zero, we would spend 20 hours.',
                    'If we checked everything, we would need 4 more people.',
                    'If errors cost nothing, we would not check.',
                    'If Samuel paid on day 9, the check would come first.']),
rev_fig_cap='Use the first for your process and the second for the argument about it.',
rev=dict(
 read=[('An error rate in most organisations is', ['chosen', 'inherited from existing checks', 'imposed by law', 'zero'], 1),
       ('The second conditional describes', ['what really happens', 'a situation that is not the case', 'the past', 'an obligation'], 1),
       ('Zero errors is best described as', ['a standard', 'a price', 'a legal duty', 'an average'], 1),
       ('In the Clinic, the unmeasured category turned out to have a rate of', ['2%', '0.25%', '9%', 'zero'], 2)],
 listen_text='Measure the rate before you argue about it, because most quality conversations '
             'are two people comparing impressions. Then price one error in each category '
             'from real incidents, because the difference between nine euros and four hundred '
             'is not estimation error, it is the difference between tolerating something and '
             'removing it. And write down what you could not price, because an empty cell '
             'reads as a zero.',
 listen=[('Measure the ____________ before you argue about it.', 'rate'),
         ('Price one error in each category from real ____________.', 'incidents'),
         ('It is the difference between tolerating something and ____________ it.', 'removing'),
         ('An empty cell reads as a ____________.', 'zero')],
 speak=['Name a kind of error at your work. Your partner asks what one instance costs.',
        'Then ask what halving the rate would cost. Note which question was harder.'],
 write='Write a row of a cost table: rate, cost per error, cost of halving, chosen rate.',
 vocab=[('The amount of loss an organisation has decided to accept is its ____________.', 'risk appetite'),
        ('What remains after everything you intend to do is ____________.', 'residual risk'),
        ('Money set aside in advance against an expected loss is a ____________.', 'provision'),
        ('The average outcome, weighted by likelihood, is the ____________.', 'expected value'),
        ('Action taken to reduce likelihood or severity is ____________.', 'mitigation')],
 gram=[('If the rate ____________ zero, we would spend twenty hours a week.', 'were'),
       ('If we checked everything, we ____________ need four more people.', 'would'),
       ('If the note ____________ wrong, it would cost about four hundred euros.', 'were'),
       ('We would save four hundred a month if the rate ____________ one per cent.', 'were'),
       ('If we ____________ the rate, we could price it.', 'knew')]),

found=['Find out what error rate one part of your work actually runs at.',
       'Price one error from a real incident rather than from an estimate.',
       'Work out what halving that rate would cost in hours.',
       'Write down one cost at your work that nobody has priced, and say so.'],
end_line='Nobody had chosen two per cent. It was the rate the existing checks happened to produce.',
end_next='Next: We Should Have Seen It',
)
