# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='How Much to Check',
gram='quantifying evidence: the majority of, a minority, roughly',
ai='sampling: how much to check when you cannot check it all',
strap='CEFR B2 · Grammar: quantifying evidence · AI: sampling',
cando=['quantify evidence precisely using the majority of, a minority and proportions',
       'state a finding as a proportion of a named population rather than as an impression',
       'decide how many items to check when checking all of them is not possible',
       'explain why a sample has to be drawn in a way that does not choose itself',
       'say what a clean sample does and does not tell me about the rest'],
hero=('SIXTY ROWS OUT OF NINETEEN HUNDRED',
      ['Checking all of them would take eleven days.',
       'Checking none of them takes no time at all and tells you nothing.'],
      [(900, 'orange', 'long'), (1660, 'grey', 'short'), (2400, 'teal', 'long')]),
hero_cap='Sampling exists because the two obvious answers are both unaffordable.',

warm=['How many of something would you check before you believed the rest were fine?',
      'What is the difference between "most of them" and "the majority of them"?',
      'If you choose which items to check, what have you accidentally decided?'],
read=[
 'Arclight produces about nineteen hundred checkable outputs a month, and Victor established '
 'early that checking all of them would consume roughly eleven working days, which the '
 'company does not have and would not spend if it did. Checking none of them, which was the '
 'arrangement in place when he arrived, costs nothing and establishes nothing.',
 'Sampling is the only remaining answer, and it is worth being clear about what it is for. A '
 'sample does not tell you which outputs are wrong; it tells you roughly how many are, which '
 'is a different and often more useful piece of information. It converts an unknown quantity '
 'into an estimate with a stated range, and an estimate can be argued about.',
 'The number of items you need is smaller than most people expect and the way you choose '
 'them matters more than how many you take. Sixty rows drawn at random from nineteen hundred '
 'will give a usable estimate of the error rate; sixty rows that somebody chose because they '
 'looked interesting will give an estimate of nothing except what that person finds '
 'interesting.',
 'This is the part that Arclight got wrong twice. The first attempt sampled the first sixty '
 'rows of each month, which were consistently the oldest invoices and consistently the '
 'cleanest. The second attempt let whoever was doing the checking pick the sixty, with the '
 'predictable result that the difficult-looking ones were examined and the error rate came '
 'out higher than the truth rather than lower.',
 'What the company does now is draw the sixty by a rule nobody can influence, examine every '
 'one of them against its source, and publish the result as a proportion with the date and '
 'the population attached. In the month that produced three errors in sixty, the sentence '
 'written down was not "quality is good" but "3 of 60 sampled rows disagreed with their '
 'source, drawn from 1,870 rows produced in March".'],
c_a=[('How long would checking everything take?', 'roughly eleven working days a month'),
     ('What does a sample tell you?', 'roughly how many outputs are wrong, not which ones'),
     ('What matters more than the size of the sample?', 'the way the items are chosen'),
     ('What went wrong with the first attempt?', 'it sampled the first sixty rows, which were the oldest and cleanest'),
     ('How is the result now written down?', 'as a proportion with the date and the population attached')],
c_b=[('Arclight produces about nineteen hundred checkable outputs a month.', 'T'),
     ('A sample identifies which outputs are wrong.', 'F'),
     ('The second attempt produced an error rate lower than the truth.', 'F'),
     ('The sixty are now drawn by a rule nobody can influence.', 'T'),
     ('Checking nothing establishes very little.', 'T'),
     ('A larger sample matters more than how it is drawn.', 'F')],
c_c=[('Checking all of them would consume roughly eleven working ____________.', 'days'),
     ('It converts an unknown quantity into an ____________.', 'estimate'),
     ('The first sixty rows were consistently the ____________.', 'cleanest'),
     ('The error rate came out ____________ than the truth.', 'higher'),
     ('Draw the sixty by a ____________ nobody can influence.', 'rule'),
     ('3 of 60 sampled rows disagreed with their ____________.', 'source')],
c_d=[('A sample estimates ( which / how many ) outputs are wrong.', ['which', 'how many'], 1),
     ('The first attempt was biased because the rows chosen were', ['the newest', 'the oldest and cleanest', 'random', 'the largest'], 1),
     ('Letting checkers choose the sample produced an error rate that was', ['accurate', 'too high', 'too low', 'unchanged'], 1),
     ('The published sentence names', ['the proportion, date and population', 'only the proportion', 'only the date', 'the checker'], 0),
     ('Checking everything is rejected because it costs', ['too little', 'about eleven days a month', 'nothing', 'one day a year'], 1)],
c_e=('Precise or vague? Put each statement in the right column.',
     [('3 of 60 sampled rows were wrong.', 'Precise'),
      ('Most of them were fine.', 'Vague'),
      ('The majority of errors were under 5 euros.', 'Precise'),
      ('Quality is broadly good.', 'Vague'),
      ('Roughly 5 per cent, give or take 2.', 'Precise'),
      ('We rarely see problems.', 'Vague')],
     ['Precise', 'Vague']),

v_fig_title='TAKING SIXTY FROM NINETEEN HUNDRED',
v_fig=[('chart', 'a population'), ('basket', 'a subset'), ('scale', 'typical of the whole'),
       ('bulb', 'bias'), ('doc', 'an audit'), ('note', 'a spot check')],
v_fig_cap='Six words for the difference between looking at some of it and guessing.',
vocab=[
 ('sampling', 'examining part of a group in order to say something about the whole'),
 ('population', 'the complete set from which a sample is drawn'),
 ('subset', 'a smaller group taken from a larger one'),
 ('random', 'chosen in a way that gives every item the same chance'),
 ('typical of the whole', 'resembling the full set closely enough to stand for it'),
 ('stratified', 'divided into groups before sampling, so each is covered'),
 ('bias', 'a systematic tendency that pushes a result away from the truth'),
 ('coverage', 'how much of the whole a check actually reaches'),
 ('incidence', 'how often something new occurs in a period'),
 ('prevalence', 'how much of something is present at one time'),
 ('proportion', 'a part considered in relation to the whole'),
 ('ratio', 'the relation between two quantities, expressed by division'),
 ('rate', 'a quantity measured against another, such as errors per hundred'),
 ('interval', 'the gap between two points in a sequence or in time'),
 ('census', 'an examination of every item rather than a sample'),
 ('audit', 'a formal examination of records against a standard'),
 ('spot check', 'an unannounced examination of a small number of items'),
 ('skew', 'a lopsidedness that makes a result lean one way'),
 ('estimate', 'a figure arrived at from partial evidence'),
 ('inspection', 'the act of examining something closely for faults')],
v_a=[('The complete set a sample is drawn from is the ____________.', 'population'),
     ('A systematic tendency pushing a result from the truth is ____________.', 'bias'),
     ('An examination of every item rather than a part is a ____________.', 'census'),
     ('Divided into groups before sampling is ____________.', 'stratified'),
     ('How much of the whole a check reaches is its ____________.', 'coverage'),
     ('An unannounced examination of a few items is a ____________.', 'spot check'),
     ('A figure arrived at from partial evidence is an ____________.', 'estimate'),
     ('How much of something is present at one time is its ____________.', 'prevalence')],
v_b=[('Sampling is examining part of a group', 'in order to say something about the whole.'),
     ('Random means chosen so that every item', 'has the same chance.'),
     ('A rate is a quantity measured against another,', 'such as errors per hundred.'),
     ('Skew is a lopsidedness that makes a result', 'lean one way.'),
     ('An audit is a formal examination of records', 'against a standard.')],

g_title='Grammar: quantifying evidence',
g_rule=['The majority of takes a plural verb and means more than half, not merely many.',
        'A minority of means fewer than half; it does not mean a small number.',
        'Roughly, approximately and about attach to a figure; they do not replace one.',
        'A proportion is meaningless without its denominator: 3 of 60, not simply 3.'],
g_fig=('LOOSE',
       ['Most of them were fine.',
        'A few had problems.',
        'Errors are rare.',
        'It is mostly accurate.'],
       'PRECISE',
       ['57 of 60 matched their source.',
        'A minority, 3 of 60, did not.',
        'Roughly 5 per cent, give or take 2.',
        'The majority of errors were under 5 euros.'],
       'a proportion with no denominator',
       'a proportion of a named population'),
g_fig_cap='Every sentence on the right can be disagreed with. That is what makes it useful.',
g_a=[('The ____________ of the sampled rows matched their source. (major)', 'majority'),
     ('A ____________ of the errors were over fifty euros. (minor)', 'minority'),
     ('____________ five per cent of rows disagreed, give or take two. (rough)', 'Roughly'),
     ('Three ____________ sixty rows were wrong. (of)', 'of'),
     ('The majority of the errors ____________ under five euros. (be)', 'were'),
     ('A minority of clients ____________ ever complained. (have)', 'have'),
     ('____________ proportion of the whole is about one in twenty. (the)', 'The'),
     ('The error ____________ is five per hundred rows. (rate)', 'rate'),
     ('____________ of the 1,870 rows were examined. (sixty)', 'Sixty')],
g_b=[('The majority of the rows ( were / was ) correct.', ['were', 'was'], 0),
     ('A ____ of errors were over fifty euros.', ['minor', 'minority', 'minimum', 'minus'], 1),
     ('____ five per cent disagreed, give or take two.', ['Rough', 'Roughly', 'Roughness', 'Rougher'], 1),
     ('Three ____ sixty rows were wrong.', ['from', 'in', 'of', 'by'], 2),
     ('The error ____ is five per hundred rows.', ['ratio', 'rate', 'reason', 'range'], 1),
     ('A minority of clients ____ ever complained.', ['has', 'have', 'is', 'having'], 1)],

d1=dict(title='Who chose the sixty?',
        fig=(['Three in sixty. That is good.', 'Who chose the sixty?'],
             ['I did. The ones worth looking at.', 'Then it is not three in sixty.']),
        cap='Victor and Thomas, over the second month’s figures.',
        lines=[('Thomas', 'Three errors in sixty rows. About five per cent. That is not bad.'),
               ('Victor', 'Who chose the sixty?'),
               ('Thomas', 'I did. I went through and picked the ones worth looking at.'),
               ('Victor', 'What made a row worth looking at?'),
               ('Thomas', 'Odd amounts, unfamiliar suppliers, anything that caught my eye.'),
               ('Victor', 'So you selected for the rows most likely to be wrong.'),
               ('Thomas', 'Which is surely what you want. You want to find the errors.'),
               ('Victor', 'I want to know the error rate. Those are different jobs.'),
               ('Thomas', 'Then five per cent is too high.'),
               ('Victor', 'Almost certainly, and nobody can say by how much.'),
               ('Thomas', 'Which makes the number useless rather than merely wrong.'),
               ('Victor', 'Yes. A wrong number can be corrected. An unanchored one cannot.')],
        a=[('What result did Thomas report?', 'three errors in sixty rows, about five per cent'),
           ('How did he choose the rows?', 'he picked the ones that looked worth examining'),
           ('What did his selection favour?', 'rows most likely to be wrong'),
           ('What distinction does Victor draw?', 'between finding errors and knowing the error rate'),
           ('Why is the figure useless rather than merely wrong?', 'because nobody can say by how much it is out')],
        b=[('Anything that ____________ my eye.', 'caught'),
           ('You selected for the rows most likely to be ____________.', 'wrong'),
           ('I want to know the error ____________.', 'rate'),
           ('An ____________ number cannot be corrected.', 'unanchored')]),
d2=dict(title='Sixty of what?',
        fig=(['Sixty is enough.', 'Sixty of what, though?'],
             ['Of everything we produce.', 'Then you will learn about the commonest thing.']),
        cap='Marta and Victor, on how the population is defined.',
        lines=[('Marta', 'Sixty drawn at random from everything. You are satisfied with that?'),
               ('Victor', 'For an overall rate, yes. Sixty is enough for the purpose.'),
               ('Marta', 'Everything includes about fourteen hundred invoice rows.'),
               ('Victor', 'And about five hundred of everything else.'),
               ('Marta', 'So roughly forty-five of your sixty will be invoice rows.'),
               ('Victor', 'On average, yes.'),
               ('Marta', 'And in a month where you draw none of the credit notes?'),
               ('Victor', 'Then I learn nothing about credit notes that month.'),
               ('Marta', 'Credit notes are the irreversible ones. That is where I want the attention.'),
               ('Victor', 'Then we stratify: a fixed number from each kind, not sixty from the pile.'),
               ('Marta', 'That costs more rows in total.'),
               ('Victor', 'About ninety instead of sixty. I think it is worth it and I would like you to argue with me.')],
        a=[('How many rows does Victor propose drawing?', 'sixty at random from everything'),
           ('What proportion would be invoice rows?', 'about forty-five of the sixty, on average'),
           ('What is Marta’s objection?', 'that in some months no credit notes would be drawn at all'),
           ('Why do credit notes matter more?', 'because they are irreversible'),
           ('What do they agree?', 'to stratify: a fixed number from each kind, costing about ninety rows')],
        b=[('Sixty drawn at ____________ from everything.', 'random'),
           ('Roughly forty-five of your sixty will be ____________ rows.', 'invoice'),
           ('Credit notes are the ____________ ones.', 'irreversible'),
           ('About ninety instead of ____________.', 'sixty')]),

speak=[('Put a denominator on it',
        ['Student A: make four statements about your work using most, few or rarely.',
         'Student B: ask what the denominator is in each case.',
         'Rewrite the four as proportions of a named population.']),
       ('Spoken specification: brief a sample',
        ['Choose work that happens too often to check completely.',
         'Brief aloud: how many, drawn how, from what population, checked against what.',
         'Your partner asks who decides which items are drawn. If the answer is a person, start again.']),
       ('Find the bias',
        ['In pairs, invent three ways of choosing twenty items from a thousand.',
         'For each, say which items would be over-represented.',
         'Decide which of the three you would defend to a client, and why.'])],

ext_title='A sample tells you how many, never which',
ext_fig=figs.datatable('THREE WAYS OF DRAWING SIXTY',
                       ['Method', 'What it over-represents', 'Rate reported', 'Usable?'],
                       [['the first 60 rows', 'the oldest invoices', '0.8%', 'no'],
                        ['whatever looks odd', 'difficult cases', '5.0%', 'no'],
                        ['every 31st row', 'nothing in particular', '2.1%', 'yes'],
                        ['60 from each kind', 'nothing; each kind covered', '2.3%', 'yes'],
                        ['the true rate', '—', 'unknown', '—']]),
ext_fig_cap='Two methods gave numbers. Only two of the four gave numbers that meant anything.',
ext=[
 'Once the volume of work exceeds what anybody can examine, there are three possible '
 'arrangements and only one of them is sensible. You can check everything, which is '
 'honest and rapidly unaffordable. You can check nothing and rely on complaints, which is '
 'what most organisations do without describing it that way. Or you can check a part, '
 'chosen so that what you find in the part tells you something about the whole.',
 'The purpose of sampling is often misunderstood, including by people who do it. A sample '
 'is not a way of finding errors, although it finds some; it is a way of estimating how '
 'many errors there are. These are different objectives and they want different methods. If '
 'you want to find errors, you examine the items most likely to contain them. If you want '
 'to know the rate, that is precisely the thing you must not do.',
 'The size people worry about turns out to matter less than the selection they do not worry '
 'about. Sixty items drawn without human involvement will support a reasonable estimate of '
 'the rate in a population of a few thousand. Six hundred items chosen by somebody who '
 'thought about which ones to take will support nothing at all, because the number they '
 'produce reflects the chooser as much as the work.',
 'The practical rule is therefore that the selection must be made by something nobody can '
 'lean on. Every thirty-first row, every item arriving at a fixed minute, every file whose '
 'reference ends in a particular digit: the method does not matter provided that no human '
 'judgement enters it and that the rule is written down before the month begins.',
 'Where the population contains kinds of item that differ in how much a mistake costs, draw '
 'separately from each kind rather than from the pile. This costs more items in total and '
 'it buys something specific: an estimate for the small, dangerous category that a '
 'proportional sample would barely touch. Credit notes at Arclight are three per cent of '
 'volume and most of the irreversible risk.'],
dp1=('Sample size and selection',
     'Statistical practice generally holds that beyond a modest absolute size, the method of '
     'selection affects the reliability of an estimate more than further increases in sample size.',
     'Source: general sampling methodology, 2026. Required sizes depend on the precision sought.'),
e_a=[('What are the three possible arrangements?', 'check everything, check nothing, or check a part chosen to represent the whole'),
     ('What is a sample for?', 'estimating how many errors there are, not finding them'),
     ('Why must you not examine the most suspicious items for a rate?', 'because that method is designed to find errors and will overstate the rate'),
     ('What matters more than sample size?', 'the method of selection'),
     ('Why stratify?', 'to get an estimate for a small category where mistakes are expensive')],
e_b=[('Checking nothing is a common arrangement in practice.', 'T'),
     ('A sample identifies which items are wrong.', 'F'),
     ('Six hundred items chosen by a person beat sixty chosen at random.', 'F'),
     ('The selection rule should be written down before the month begins.', 'T'),
     ('Stratifying costs fewer items in total.', 'F'),
     ('Credit notes are a large share of Arclight’s volume.', 'F')],

w_model=(
 'Purpose: produce a defensible monthly estimate of how much outbound work disagrees with '
 'its source. Scope: the 1,870 checkable rows produced in March, stratified into 3 kinds: '
 'invoice rows, credit notes and client letters. Inputs: the output records and the source '
 'documents. Criteria: draw 30 from each kind using the written rule — every nth row by '
 'reference number, n set before the month begins; no row may be substituted once drawn; '
 'every drawn row is checked against its named source. Done: 3 rates, each stated as a '
 'count over its denominator, with the drawing rule and the date. Fallback: if a drawn row '
 'has no locatable source, record it as unverifiable and draw the next row by the rule; do '
 'not choose a replacement.'),
w_fig=figs.spec_card('A SAMPLING RULE THAT HOLDS',
                     [('Population', 'Named, counted and dated'),
                      ('Strata', 'Kinds that differ in what a mistake costs'),
                      ('Rule', 'Written before the month begins'),
                      ('No substitution', 'A drawn row cannot be swapped for another'),
                      ('Comparison', 'Each row checked against its named source'),
                      ('Reporting', 'A count over a denominator, with the date')]),
w_fig_cap='The fourth line is the one that keeps the other five honest.',
w_task='Design a sampling rule for work that cannot be checked completely.',
w_steps=['Name the population: what it contains, how many, and over what period.',
         'Decide whether it contains kinds that differ in what a mistake costs.',
         'Write the selection rule, and make sure no judgement enters it.',
         'Say what happens to a drawn item that cannot be checked.',
         'Say how the result will be written down, with its denominator.'],
w_bank=['Draw … from a population of … produced in …',
        'Stratify into … , … and …', 'Select by … , fixed before …',
        'A drawn item may not be …', 'Report as … of … , dated …'],
w_check=['Could anybody influence which items are drawn?',
         'Is the rule written down before the period it applies to?',
         'Does every reported figure carry a denominator?',
         'Is there an instruction for a drawn item with no source?'],

t_title='Sampling: how much to check when you cannot check it all',
t_fig=figs.split('TWO DIFFERENT JOBS',
                 'Finding errors',
                 ['look at the odd-looking ones',
                  'examine the largest amounts',
                  'check the new supplier',
                  'follow up a complaint'],
                 'Estimating the rate',
                 ['every 31st row, no exceptions',
                  '30 from each of 3 kinds',
                  'rule fixed before the month',
                  'no substitution of drawn rows']),
t_fig_cap='Both columns are legitimate. Using the left-hand method to answer a right-hand question is not.',
t_body=[
 'Decide first which question your sampling is answering, because the two questions want opposite '
 'methods and the confusion between them is the commonest fault in this area. Looking for '
 'errors means going where errors are likely. Estimating a rate means going nowhere in '
 'particular, deliberately, and accepting that most of what you examine will be fine.',
 'Then remove the human being from the selection, which is harder than it sounds because it '
 'feels wasteful. Somebody who knows the work will see a row that looks wrong and want to '
 'include it, and every time they do, the resulting number stops being an estimate of '
 'anything. Write the rule down before the period begins and allow no substitutions once a '
 'row has been drawn.',
 'Finally, stratify wherever a mistake costs very different amounts in different parts of '
 'the population. A proportional sample of Arclight’s work would contain about two credit '
 'notes, which supports no estimate at all for the category carrying most of the '
 'irreversible risk. Thirty from each kind costs more rows and answers the question you '
 'actually have.'],
t_say=[('Name the question: ', 'We want the rate, not the errors; the method differs.'),
       ('Fix the rule: ', 'Every 31st row by reference, set before the month begins.'),
       ('Stratify: ', 'Thirty from each of the three kinds, not sixty from the pile.')],
t_bound=('A sample estimates a rate; it does not clear the items it did not examine. Three '
         'errors in sixty says nothing whatever about any particular row among the remaining '
         'eighteen hundred, and a month with a clean sample can still contain the single '
         'expensive mistake that matters.'),
t_a=[('We want the rate, not the ____________; the method differs.', 'errors'),
     ('Every 31st row by reference, set before the ____________ begins.', 'month'),
     ('Thirty from each of the three ____________.', 'kinds'),
     ('Looking for errors means going where errors are ____________.', 'likely'),
     ('Allow no ____________ once a row has been drawn.', 'substitutions'),
     ('A proportional sample would contain about two ____________ notes.', 'credit')],
t_b_rubric='Say what is wrong with each sampling method, and what it would estimate.',
t_b=[('Check the first sixty rows each month.', 'they are the oldest and cleanest, so it understates the rate'),
     ('Check whatever looks unusual.', 'it selects for likely errors, so it overstates the rate'),
     ('Check every row from the biggest client.', 'it estimates that client only, not the population'),
     ('Check sixty drawn at random from everything.', 'it estimates the overall rate but may miss small categories')],

case=dict(
 title='Decision Clinic · A clean month, and a complaint',
 brief=[
  'The March sample came back at 1 error in 90 stratified rows, the best figure Arclight '
  'has recorded. Victor published it as "1 of 90, drawn 3 March, population 1,870".',
  'Eleven days later a client found an error in a row that had not been drawn: a credit '
  'note applied to the wrong account, worth 3,400 euros, which took a fortnight to unwind '
  'and cost Arclight the goodwill of a client it had held for two years.',
  'Dalia wants to know what the sample was for, if a month with the best sample in the '
  'company’s history contained the most expensive error in it.'],
 exhibit=figs.datatable('MARCH, AS MEASURED AND AS IT HAPPENED',
                        ['', 'Rows', 'Sampled', 'Errors found', 'Cost'],
                        [['invoice rows', '1,402', '30', '1', '14 EUR'],
                         ['client letters', '412', '30', '0', '0'],
                         ['credit notes', '56', '30', '0', '0'],
                         ['the one client found', '1', 'not drawn', '1', '3,400 EUR'],
                         ['total', '1,870', '90', '2', '3,414 EUR']]),
 exhibit_cap='Thirty of the fifty-six credit notes were examined. The costly one was among the other twenty-six.',
 exhibit_note='The sampling was performed exactly as specified. The bad credit note had no '
              'feature that would have marked it out had anybody looked at it in a list.',
 voices=[('Dalia Rahman', 'co-founder',
          'Our best month produced our worst error. I am not sure what we are buying with '
          'ninety rows if that can happen in the same month.'),
         ('Victor Sandoval', 'operations and quality',
          'The sample did what a sample does. It estimated a rate. It never promised to '
          'catch any particular item, and I should have said that more loudly when I '
          'published the figure.'),
         ('Marta Olsen', 'risk and liability',
          'Fifty-six credit notes a month and we examine thirty. For the one category where '
          'a mistake cannot be reversed, why are we sampling at all? Check all fifty-six.')],
 steps=[('Find it', 'How many credit notes were there, and how many were examined?'),
        ('Compare it', 'What does a sample promise, and what did people hear it promise?'),
        ('Infer it', 'Why did a clean sample and an expensive error occur together?'),
        ('Weigh it', 'The cost of examining all credit notes against one unwound in a fortnight.'),
        ('Decide', 'What changes for credit notes, and what stays sampled?')],
 analysis=[('Find it. How many credit notes were examined?', 'thirty of fifty-six'),
           ('Compare it. What did the published figure appear to promise?', 'that the month was clean, rather than that the rate was low'),
           ('Infer it. Why is there no contradiction?', 'because a rate says nothing about any particular item not examined'),
           ('Weigh it. What would a census of credit notes cost?', 'twenty-six more items a month, in the smallest category'),
           ('Decide. Where does sampling remain appropriate?', 'in the large categories where a single error is cheap and reversible')],
 decision='Write the revised checking policy.',
 decision_steps=['Say which categories are checked completely, and why those.',
                 'Say which remain sampled, and at what size.',
                 'Say how the figures will be published so nobody reads a rate as a clearance.',
                 'Put a cost on the change, in items and in hours.'],
 bank=['… are checked in full, because …',
       '… remain sampled at … of …', 'Figures are published as … , and state explicitly that …',
       'This adds about … items and … hours a month.',
       'This is reviewed if …'],
 outcome='Credit notes went to a full census: all fifty-six, every month, which costs about '
         'two hours. The other categories stayed sampled at thirty each. Victor rewrote the '
         'published sentence to end with the words "this estimates a rate and clears no '
         'individual item". In the following year the census caught three bad credit notes, '
         'worth about 5,900 euros between them, and the sampled categories produced the same '
         'rate as before.',
 outcome_q=[('What distinguished credit notes from the other categories?', 'the category is small and its errors are irreversible and expensive'),
            ('Why did the published wording need changing?', 'because readers had been treating a rate estimate as a clearance of the month')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Start checking the work',
 task=['This is the brief Ines gave Victor when the sorting exercise was finished and '
       'checking was about to begin. It is the one that produced the first biased sample.',
       'Victor wrote the selection rule himself a week later, after the first month’s '
       'figure came out at 0.8 per cent and he could not explain why it was so much better '
       'than anybody expected.'],
 draft=['Start checking a reasonable number of outputs each month.',
        'Take a good spread across the different kinds.',
        'Check them against whatever they came from.',
        'Report how much of the work is coming out right.',
        'Look more closely at anything that seems worth it.',
        'Keep doing that and we will see how it goes.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A sampling brief with no population, no size, no rule and an invitation to choose.',
 asked=['A named population with a count',
        'A written selection rule, fixed in advance',
        'Results as counts over denominators'],
 back=['The first 60 rows each month',
       'Selection made by whoever was checking',
       '"Quality is broadly good"'],
 gap='A reasonable number set no size, a good spread set no strata, and look more closely at '
     'anything worth it invited exactly the judgement that makes an estimate meaningless.',
 back_cap='Two months of figures, one too low and one too high, neither of them anchored.',
 back_note='The two months reported 0.8 per cent and 5.0 per cent. The true rate was '
           'somewhere between them and nobody could say where, because neither sample had a '
           'rule behind it.',
 diagnosis=[('[1] "a reasonable number" — how many, of what?', 'unbounded quantity'),
            ('[2] "a good spread across the kinds" — which kinds, how many each?', 'unscoped set'),
            ('[3] "whatever they came from" — and if the source cannot be found?', 'missing condition'),
            ('[4] "how much of the work is coming out right" — as a proportion of what?', 'unbounded quantity'),
            ('[5] "anything that seems worth it" — chosen by whom?', 'unscoped set'),
            ('[6] "we will see how it goes" — and if two months disagree?', 'missing condition')],
 rewrite='Rewrite the brief so that the population is named, the selection rule is fixed in '
         'advance, and no judgement can enter the drawing.',
 scaffold=['Why a rate is wanted rather than a list of errors',
           'The population, its kinds and its count for the period',
           'The output records and the source documents each one is checked against',
           'The number drawn from each kind, the rule for drawing, and the ban on substitution',
           'The figures that come back, each over its denominator, with the date',
           'What to do with a drawn item whose source cannot be located'],
 bank=['Estimate … so that … can be … .',
       'Population: … rows produced in … , in … kinds.',
       'Draw … from each kind, selecting by … , fixed before …',
       'A drawn item may not be … ; check each against …',
       'Report … as … of … , dated …',
       'If a drawn item has no locatable source, …'],
 check=['Is the population named, counted and dated?',
        'Is the selection rule written before the period it covers?',
        'Does the brief forbid substituting a drawn item?',
        'Does every figure come with its denominator?'],
 model=['Produce a defensible monthly estimate of how much outbound work disagrees with its source',
        'The 1,870 checkable rows produced in March, stratified into invoice rows, credit notes and client letters',
        'The output records for March and the source document named against each row',
        'Draw 30 from each kind by taking every nth row by reference number, with n fixed before the month begins; no drawn row may be substituted; each drawn row is checked against its named source',
        '3 rates, each stated as a count over its denominator, with the drawing rule and the date, by the 10th of the following month',
        'If a drawn row has no locatable source, record it as unverifiable and take the next row by the rule; never choose a replacement'],
 cost='2 months of figures that differed by a factor of 6, neither of them usable, about 14 '
      'hours of checking that answered no question, and a company that believed for 4 weeks '
      'that its error rate was 0.8 per cent.'),

rev_fig=figs.split('EVIDENCE, QUANTIFIED',
                   'No denominator',
                   ['Most of them were fine.',
                    'A few had problems.',
                    'Errors are rare.',
                    'Quality is broadly good.'],
                   'With a denominator',
                   ['57 of 60 matched their source.',
                    '3 of 60 did not.',
                    'Roughly 5 per cent, give or take 2.',
                    '1 of 90, population 1,870, March.']),
rev_fig_cap='The right-hand column can be wrong, which is the only way a figure can be useful.',
rev=dict(
 read=[('A sample is designed to estimate', ['which items are wrong', 'how many are wrong', 'who made the errors', 'the cost'], 1),
       ('"The majority of" takes', ['a singular verb always', 'a plural verb with a plural noun', 'no verb', 'the past tense'], 1),
       ('What matters more than sample size is', ['the checker', 'the selection method', 'the software', 'the month'], 1),
       ('In the Clinic, which category moved to a full census?', ['invoice rows', 'client letters', 'credit notes', 'none'], 2)],
 listen_text='Decide which question you are answering first, because finding errors and '
             'estimating a rate want opposite methods. Then take the human being out of the '
             'selection, write the rule down before the month begins and allow no '
             'substitutions. And stratify wherever a mistake costs very different amounts, '
             'because a proportional sample barely touches the small category that carries '
             'the risk.',
 listen=[('Finding errors and estimating a ____________ want opposite methods.', 'rate'),
         ('Take the ____________ being out of the selection.', 'human'),
         ('Write the rule down before the ____________ begins.', 'month'),
         ('A proportional sample barely touches the small ____________.', 'category')],
 speak=['Describe work you could not check completely. Your partner proposes a drawing rule.',
        'Find the way somebody could influence it, and close that.'],
 write='Write a sampling rule with a population, a size, a method and a no-substitution line.',
 vocab=[('The complete set a sample is drawn from is the ____________.', 'population'),
        ('A systematic tendency pushing a result from the truth is ____________.', 'bias'),
        ('An examination of every item rather than a part is a ____________.', 'census'),
        ('Divided into groups before sampling is ____________.', 'stratified'),
        ('An unannounced examination of a few items is a ____________.', 'spot check')],
 gram=[('The ____________ of the sampled rows matched their source.', 'majority'),
       ('A ____________ of the errors were over fifty euros.', 'minority'),
       ('____________ five per cent of rows disagreed, give or take two.', 'Roughly'),
       ('Three ____________ sixty rows were wrong.', 'of'),
       ('The majority of the errors ____________ under five euros.', 'were')]),

found=['Work out how many of one kind of output your team produces in a month.',
       'Write a selection rule for twenty of them that nobody could influence.',
       'Find a statement at your work that reports a proportion with no denominator.',
       'Identify the smallest category in your work where a mistake cannot be reversed.'],
end_line='The best sample in the company’s history, in the month of its most expensive error.',
end_next='Next: What Only a Person Can Do',
)
