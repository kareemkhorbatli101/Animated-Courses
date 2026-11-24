# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Checking at Scale',
gram='participle clauses',
ai='two systems, one task: cross-checking',
strap='CEFR B2 · Grammar: participle clauses · AI: two systems, one task',
cando=['use a participle clause to compress a condition or a reason',
       'reduce a long subordinate clause without losing its subject',
       'describe a cross-check and say what agreement between two runs establishes',
       'identify a fault that two independent checks would both miss',
       'say when running something twice is worth its cost and when it is not'],
hero=('THE SAME EIGHT HUNDRED ROWS, DONE TWICE',
      ['Two runs agreed on seven hundred and ninety-one.',
       'Both were wrong about the same nine, for the same reason.'],
      [(860, 'teal', 'short'), (1600, 'grey', 'long'), (2340, 'purple', 'short')]),
hero_cap='Cross-checking: powerful against carelessness, blind to anything shared.',

warm=['If two people check something separately and agree, what have you learned?',
      'How would you shorten "because it had been extracted twice, the row was flagged"?',
      'What kind of mistake would two independent checkers both make?'],
read=[
 'Having established that comparison checks cost almost nothing, Victor proposed running '
 'the invoice extraction twice by two different routes and comparing the results, on the '
 'theory that two independent attempts will rarely go wrong in the same place. Arclight ran '
 'it for a quarter on eight hundred rows a month.',
 'The arrangement caught a good deal. Transcription slips, rows where one route had read a '
 'figure from the wrong column, cases where a scanned page had been processed at an angle: '
 'all of these produced a disagreement, and a disagreement is cheap to investigate because '
 'it points at a specific row.',
 'In month three it missed something, and the way it missed it is the lesson of the unit. '
 'Nine invoices from one supplier carried the date in American order, with the month before '
 'the day. Both routes read them the same way, both got them wrong, and the cross-check '
 'reported agreement on all nine, which it did honestly.',
 'The principle at work is that two checks catch only the faults they do not share. '
 'Independent routes rarely make the same transcription slip, so slips are caught. Both '
 'routes, reading the same ambiguous date in the same convention, make the same error, and '
 'the agreement between them carries no information at all about whether it is right.',
 'What Arclight does now is cheaper and better. Rather than running everything twice, it '
 'runs a cross-check on the categories where independent failure is plausible and spends '
 'the saved effort on comparisons against something outside both routes: the supplier '
 'statement, the bank, the client’s own records. Agreement between two of your own '
 'attempts is reassuring. Agreement with somebody else’s record is evidence.'],
c_a=[('What did Victor propose?', 'running the extraction twice by two different routes and comparing'),
     ('Give two kinds of fault the cross-check caught.', 'transcription slips, and figures read from the wrong column'),
     ('What did it miss in month three?', 'nine invoices with dates in American order, which both routes read the same way'),
     ('State the principle.', 'two checks catch only the faults they do not share'),
     ('What does Arclight do now?', 'cross-checks only where independent failure is plausible, and compares against outside records')],
c_b=[('The cross-check caught transcription slips.', 'T'),
     ('The two routes disagreed about the nine invoices.', 'F'),
     ('The cross-check reported agreement dishonestly.', 'F'),
     ('Agreement between two of your own attempts is evidence.', 'F'),
     ('Arclight now runs everything twice.', 'F'),
     ('A disagreement points at a specific row.', 'T')],
c_c=[('Two independent attempts will rarely go wrong in the same ____________.', 'place'),
     ('A disagreement is cheap to ____________.', 'investigate'),
     ('Nine invoices carried the date in ____________ order.', 'American'),
     ('Two checks catch only the faults they do not ____________.', 'share'),
     ('Agreement with somebody else’s record is ____________.', 'evidence'),
     ('A scanned page had been processed at an ____________.', 'angle')],
c_d=[('A cross-check is blind to faults that are ( rare / shared ).', ['rare', 'shared'], 1),
     ('The nine date errors went undetected because', ['nobody looked', 'both routes used the same convention', 'the scan was poor', 'the supplier was new'], 1),
     ('Agreement between two of your own routes is best described as', ['evidence', 'reassuring', 'proof', 'irrelevant'], 1),
     ('The better use of the saved effort is comparison against', ['a third route', 'a record outside both routes', 'the same route again', 'nothing'], 1),
     ('A disagreement is cheap to investigate because it', ['is rare', 'points at a specific row', 'is automatic', 'is logged'], 1)],
c_e=('Full clause or participle clause? Put each one in the right column.',
     [('Having been extracted twice, the row was flagged.', 'Participle'),
      ('Because it had been extracted twice, the row was flagged.', 'Full clause'),
      ('Reading the date as American, both routes failed.', 'Participle'),
      ('Since both routes read it as American, they failed.', 'Full clause'),
      ('Compared with the bank, the total was 40 euros out.', 'Participle'),
      ('When it was compared with the bank, it was 40 out.', 'Full clause')],
     ['Participle', 'Full clause']),

v_fig_title='TWO ATTEMPTS AT ONE JOB',
v_fig=[('scale', 'concurrence'), ('chart', 'divergence'), ('doc', 'a parallel run'),
       ('bulb', 'common-mode'), ('bank', 'arbitration'), ('note', 'an outlier')],
v_fig_cap='Six words for what happens when you do the same work twice on purpose.',
vocab=[
 ('redundancy', 'deliberate duplication kept so that one failure is not fatal'),
 ('duplication', 'doing the same work more than once'),
 ('independent', 'not sharing a cause, so that one failing does not imply the other'),
 ('concurrence', 'agreement between two separate judgements'),
 ('divergence', 'the extent to which two results differ'),
 ('disagreement', 'a case where two checks give different answers'),
 ('arbitration', 'a decision by a third party when two disagree'),
 ('tie-break', 'the rule used to settle a disagreement between two'),
 ('consensus', 'general agreement among those involved'),
 ('parallel run', 'running two methods at once on the same work'),
 ('shadow run', 'running a new method alongside the old without acting on it'),
 ('correlated', 'tending to move together, so not independent'),
 ('uncorrelated', 'varying without reference to one another'),
 ('common-mode', 'affecting both routes at once, through a shared cause'),
 ('double marking', 'two people assessing the same work separately'),
 ('second opinion', 'an independent judgement sought to test the first'),
 ('reconciliation', 'bringing two records into agreement and explaining the difference'),
 ('variance', 'the amount by which something differs from what was expected'),
 ('outlier', 'a value lying far outside the usual range'),
 ('agreement rate', 'the proportion of cases on which two checks agree')],
v_a=[('A cause affecting both routes at once is ____________.', 'common-mode'),
     ('Running two methods at once on the same work is a ____________.', 'parallel run'),
     ('The rule used to settle a disagreement between two is a ____________.', 'tie-break'),
     ('Running a new method alongside the old without acting on it is a ____________.', 'shadow run'),
     ('The proportion of cases on which two checks agree is the ____________.', 'agreement rate'),
     ('A value lying far outside the usual range is an ____________.', 'outlier'),
     ('Tending to move together, and so not independent, is ____________.', 'correlated'),
     ('Deliberate duplication kept so one failure is not fatal is ____________.', 'redundancy')],
v_b=[('Independent means not sharing a cause,', 'so that one failing does not imply the other.'),
     ('Arbitration is a decision by a third party', 'when two disagree.'),
     ('Reconciliation means bringing two records into agreement', 'and explaining the difference.'),
     ('Variance is the amount by which something differs', 'from what was expected.'),
     ('Double marking is two people assessing the same work', 'separately.')],

g_title='Grammar: participle clauses',
g_rule=['A participle clause drops the subject and the finite verb: Reading the date as American, both failed.',
        'The subject of the participle must be the subject of the main clause, or the sentence misleads.',
        'Having + past participle marks an action completed before the main one.',
        'Past participles alone carry a passive sense: Compared with the bank, the total was out.'],
g_fig=('LOOSE',
       ['Because it had been extracted twice, it was flagged.',
        'When it was compared with the bank, it was out.',
        'Since both read it as American, both failed.',
        'After it had run for an hour, it stopped.'],
       'PRECISE',
       ['Having been extracted twice, it was flagged.',
        'Compared with the bank, it was 40 euros out.',
        'Reading the date as American, both failed.',
        'Having run for an hour, it stopped at item 211.'],
       'accurate and four words longer',
       'the same meaning, compressed'),
g_fig_cap='Participle clauses are compression. Compress carelessly and the subject goes missing.',
g_a=[('____________ been extracted twice, the row was flagged. (have)', 'Having'),
     ('____________ with the bank, the total was forty euros out. (compare)', 'Compared'),
     ('____________ the date as American, both routes failed. (read)', 'Reading'),
     ('____________ run for an hour, the process stopped. (have)', 'Having'),
     ('____________ by two routes, the figure was still wrong. (produce)', 'Produced'),
     ('____________ the tolerance, the error was never flagged. (be within)', 'Being within'),
     ('____________ no source, the sentence was marked. (carry)', 'Carrying'),
     ('____________ at an angle, the page was misread. (scan)', 'Scanned'),
     ('____________ agreed, the two routes were both wrong. (have)', 'Having')],
g_b=[('( Having been / Being ) extracted twice, the row was flagged.', ['Having been', 'Being'], 0),
     ('____ with the bank, the total was 40 euros out.', ['Comparing', 'Compared', 'Compare', 'To compare'], 1),
     ('____ the date as American, both routes failed.', ['Read', 'Reading', 'To read', 'Been reading'], 1),
     ('____ run for an hour, the process stopped.', ['Have', 'Having', 'Had', 'Being'], 1),
     ('____ at an angle, the page was misread.', ['Scanning', 'Scanned', 'Scan', 'To scan'], 1),
     ('____ no source, the sentence was marked.', ['Carried', 'Carrying', 'Carry', 'To carry'], 1)],

d1=dict(title='They agreed, and they were both wrong',
        fig=(['The two runs agreed on all nine.', 'So the nine are fine.'],
             ['The nine are all wrong.', 'Then what did the agreement tell us?']),
        cap='Victor and Jonas, in month three.',
        lines=[('Jonas', 'The cross-check reported agreement on seven hundred and ninety-one of eight hundred rows.'),
               ('Victor', 'And the nine rows the supplier queried were among the seven hundred and ninety-one.'),
               ('Jonas', 'All nine agreed, and all nine were wrong. I have been trying to work out what that means.'),
               ('Victor', 'It means the two routes share something, and what they share is the date convention.'),
               ('Jonas', 'Both read 03/04 as the third of April, and the supplier meant the fourth of March.'),
               ('Victor', 'Neither route had any reason to prefer one reading, so both took the same default.'),
               ('Jonas', 'Then the agreement between them told us nothing about those nine rows.'),
               ('Victor', 'Nothing at all. Two routes agreeing establishes only that they did not make '
                          'independent mistakes.'),
               ('Jonas', 'Which is still worth something for the rows where mistakes would be independent.'),
               ('Victor', 'It is worth a great deal there. It is worth precisely zero everywhere else, and '
                          'we had no way of telling the two apart.'),
               ('Jonas', 'So we need to know in advance which faults the two routes could share.'),
               ('Victor', 'Which is a question about how they were built, and I do not think anybody can answer it fully.')],
        a=[('How many rows did the two runs agree on?', 'seven hundred and ninety-one of eight hundred'),
           ('What was wrong with nine of them?', 'both routes read the date in the wrong convention'),
           ('What does agreement between two routes establish?', 'only that they did not make independent mistakes'),
           ('Where is a cross-check worth a great deal?', 'where mistakes between the routes would be independent'),
           ('What question does Victor say cannot be fully answered?', 'which faults the two routes could share, given how they were built')],
        b=[('What they share is the date ____________.', 'convention'),
           ('Both took the same ____________.', 'default'),
           ('It is worth precisely ____________ everywhere else.', 'zero'),
           ('A question about how they were ____________.', 'built')]),
d2=dict(title='Twice, or outside?',
        fig=(['Run it twice.', 'Or compare it with the bank once.'],
             ['The bank is slower.', 'The bank is somebody else.']),
        cap='Kenji and Victor, costing the alternatives.',
        lines=[('Kenji', 'Running everything twice doubles the cost of extraction, which is small, so I am '
                         'not objecting on price.'),
               ('Victor', 'The price is not the problem. The problem is what a second run of your own '
                          'tells you.'),
               ('Kenji', 'It tells me the two agree.'),
               ('Victor', 'It tells you two things you built agree. The bank statement is somebody else’s '
                          'record of the same events.'),
               ('Kenji', 'And it arrives three days later, which is why nobody uses it for this.'),
               ('Victor', 'Three days later and entirely independent, because the bank has no idea how we '
                          'read a date.'),
               ('Kenji', 'So the question is whether we want a fast answer that shares our assumptions or '
                          'a slow one that does not.'),
               ('Victor', 'For the monthly total, I would take the slow one every time.'),
               ('Kenji', 'And for the daily queue, where three days is useless?'),
               ('Victor', 'For the daily queue the cross-check is the only option, and I want everybody to '
                          'know what it does not cover.'),
               ('Kenji', 'Then write down what it does not cover, because that list is the useful part.'),
               ('Victor', 'I can write part of it. I am not confident I can write all of it, and that is '
                          'the honest position.')],
        a=[('Why is Kenji not objecting on price?', 'because the cost of extraction is small'),
           ('What does a second run of your own establish?', 'that two things you built agree'),
           ('Why is the bank independent?', 'because it is somebody else’s record and has no idea how Arclight reads a date'),
           ('What is the trade-off?', 'a fast answer that shares your assumptions against a slow one that does not'),
           ('What does Victor admit at the end?', 'that he can write part of the list of what a cross-check misses, but not all of it')],
        b=[('It tells you two things you ____________ agree.', 'built'),
           ('It arrives three ____________ later.', 'days'),
           ('For the monthly total, I would take the ____________ one.', 'slow'),
           ('That list is the ____________ part.', 'useful')]),

speak=[('Compress it',
        ['Student A: say four sentences beginning with because, when, after or since.',
         'Student B: compress each into a participle clause.',
         'Check that the subject of your participle is still the subject of the sentence.']),
       ('Spoken specification: design a cross-check',
        ['Choose work that could be done twice by two different routes.',
         'Brief it aloud, including what the two routes must not share.',
         'Your partner names one assumption both would make. Add it to the exclusion list.']),
       ('Inside or outside?',
        ['In pairs, name three records at your work that come from outside your organisation.',
         'For each, say what it could be used to check.',
         'Decide which would be worth waiting three days for.'])],

ext_title='Two checks catch only the faults they do not share',
ext_fig=figs.datatable('THREE MONTHS OF CROSS-CHECKING',
                       ['Fault type', 'Caught?', 'Why'],
                       [['transcription slip', 'yes', 'routes fail independently'],
                        ['wrong column read', 'yes', 'routes fail independently'],
                        ['page scanned at an angle', 'yes', 'only one route affected'],
                        ['date convention', 'no', 'both routes take the same default'],
                        ['tax treatment rule', 'no', 'both routes follow the same rule']]),
ext_fig_cap='The last two rows are not failures of the cross-check. They are its definition.',
ext=[
 'Doing a job twice and comparing the results is among the oldest quality devices there is, '
 'and it works for a specific and limited reason: two attempts that fail independently will '
 'rarely fail in the same way at the same place, so a disagreement localises a problem and '
 'an agreement is weak evidence that neither went wrong.',
 'The phrase that carries the whole argument is "fail independently", and it is almost '
 'always assumed rather than examined. Two routes built by the same people, following the '
 'same written rules, interpreting the same ambiguous conventions, are independent in the '
 'trivial sense that they are two pieces of work and not independent in the sense that '
 'matters. They share every assumption that neither of them was told to question.',
 'Arclight’s nine misread dates are a clean example because nothing went wrong in either '
 'route. Both encountered an ambiguous date, both applied the same reasonable default, and '
 'both produced the same answer, which the cross-check correctly reported as agreement. The '
 'arrangement did exactly what it was built to do and the information it returned was worth '
 'nothing for those rows.',
 'What follows is a rule about where to spend checking effort. Cross-checking is worth its '
 'cost where the plausible failures are independent: reading, transcription, mechanical '
 'handling. It is worth very little where the plausible failures come from a shared rule, '
 'a shared convention or a shared ambiguity in the source, because those are precisely the '
 'failures both routes will reproduce.',
 'Where you can get it, comparison against an external record beats cross-checking, because '
 'the external record was produced by somebody who does not share your assumptions. A bank '
 'statement has no view about date conventions; a supplier statement was prepared by the '
 'people who wrote the invoice; a client’s own ledger reflects what the client believes '
 'happened. Each is slower, and each carries information that two of your own runs never '
 'will.'],
dp1=('Shared-cause failure',
     'Reliability engineering has long distinguished independent failures from common-cause '
     'failures, and generally finds that duplicated systems reduce the first class '
     'substantially and the second hardly at all.',
     'Source: general reliability-engineering literature, 2026. Proportions depend on design.'),
e_a=[('Why does doing a job twice work at all?', 'because independent attempts rarely fail in the same way at the same place'),
     ('Which phrase carries the argument, and why is it risky?', '"fail independently", which is usually assumed rather than examined'),
     ('Why are two routes built by the same people not independent?', 'because they share every assumption neither was told to question'),
     ('Where is cross-checking worth its cost?', 'where plausible failures are independent, such as reading and transcription'),
     ('Why does an external record beat a cross-check?', 'because it was produced by somebody who does not share your assumptions')],
e_b=[('A disagreement localises a problem.', 'T'),
     ('Something went wrong inside one of the two routes on the nine dates.', 'F'),
     ('Cross-checking helps substantially against shared conventions.', 'F'),
     ('A bank statement has a view about date conventions.', 'F'),
     ('External comparison is usually slower.', 'T'),
     ('Duplicated systems reduce common-cause failures substantially.', 'F')],

w_model=(
 'Purpose: catch the extraction faults that two routes would not share, without pretending '
 'to catch the ones they would. Scope: the 800 monthly invoice rows; dates, tax treatment '
 'and currency are excluded from the cross-check because both routes apply the same rules '
 'to them. Inputs: the invoice folder and the 2 extraction routes. Criteria: both routes '
 'run on every row; disagreements are listed by row; agreement is recorded as agreement and '
 'not as correctness. Done: 1 agreement rate, 1 list of disagreeing rows, and 1 statement '
 'of the 3 excluded fields. Fallback: for the 3 excluded fields, compare the monthly totals '
 'against the supplier statements instead, accepting the 3-day delay.'),
w_fig=figs.handover('WHAT TWO ROUTES CANNOT TELL YOU',
                    ['Route A extracts', 'Route B extracts', 'Compare row by row'],
                    'For dates, tax and currency: compare with the supplier statement',
                    'Outside beats twice, wherever you can wait for it.'),
w_fig_cap='The fourth box exists because the first three share their assumptions.',
w_task='Design a cross-check, and write down what it cannot catch.',
w_steps=['Name the work and the two routes that will perform it.',
         'List what the two routes share: rules, conventions, defaults, sources.',
         'Exclude from the cross-check anything on that list.',
         'Say what agreement will be recorded as, in words.',
         'Name an external record that could check the excluded items.'],
w_bank=['Both routes run on … ; disagreements are …',
        'The following are excluded, because both routes …',
        'Agreement is recorded as … , not as …',
        'For the excluded fields, compare with …',
        'This accepts a delay of …'],
w_check=['Have you listed what the two routes share?',
         'Is everything on that list excluded from the cross-check?',
         'Does the output say "agreement" rather than "correct"?',
         'Have you named an external record for the excluded items?'],

t_title='Two systems, one task: cross-checking',
t_fig=figs.split('WHAT TWO ROUTES CATCH',
                 'Caught — independent failures',
                 ['a transcription slip',
                  'a figure read from the wrong column',
                  'a page scanned at an angle',
                  'a row skipped by one route'],
                 'Missed — shared causes',
                 ['an ambiguous date convention',
                  'a tax rule both follow',
                  'a currency default both apply',
                  'an error already in the source']),
t_fig_cap='Nothing in the right-hand column is a failure of the arrangement. It is the arrangement.',
t_body=[
 'Before building a cross-check, write down what the two routes share, because that list is '
 'the complete specification of what the arrangement cannot see. Shared written rules, '
 'shared defaults for ambiguous input, shared source documents, shared people who built '
 'them: anything on that list will be reproduced by both routes and will be reported as '
 'agreement.',
 'Then exclude those fields from the cross-check explicitly, rather than leaving them in and '
 'allowing the agreement rate to include them. An agreement rate that counts fields where '
 'agreement is guaranteed is not a measurement, and it will be quoted as though it were. '
 'Saying that dates, tax and currency are outside the cross-check is a sentence that costs '
 'nothing and prevents a recurring misunderstanding.',
 'Where you can tolerate the delay, prefer comparison against something produced outside '
 'your organisation. A supplier statement, a bank record or a client ledger shares none of '
 'your conventions and is therefore capable of disagreeing with you about the things two of '
 'your own routes never will. It is slower, it is sometimes awkward to obtain, and it is a '
 'different kind of evidence.'],
t_say=[('List what they share: ', 'Both routes apply the same date, tax and currency rules.'),
       ('Exclude it: ', 'Those three fields are outside the cross-check, by design.'),
       ('Prefer outside: ', 'Compare the monthly total with the supplier statement instead.')],
t_bound=('A cross-check establishes that two routes agree, which is not the same as either '
         'being right. Where both routes share a rule, a convention or a source, agreement '
         'between them carries no information whatever, and the agreement rate will not '
         'distinguish those rows from the ones where it does.'),
t_a=[('Both routes apply the same date, tax and ____________ rules.', 'currency'),
     ('Those three fields are outside the cross-check, by ____________.', 'design'),
     ('Compare the monthly total with the ____________ statement instead.', 'supplier'),
     ('That list is the complete specification of what the arrangement cannot ____________.', 'see'),
     ('An agreement rate counting guaranteed fields is not a ____________.', 'measurement'),
     ('A supplier statement shares none of your ____________.', 'conventions')],
t_b_rubric='Say whether a cross-check would catch each fault, and why.',
t_b=[('One route reads a figure from the wrong column.', 'yes; the other route is unlikely to make the same slip'),
     ('Both routes read 03/04 as 3 April.', 'no; they share the convention, so they will agree'),
     ('A page is scanned at an angle for one route only.', 'yes; only one route is affected'),
     ('The invoice itself states the wrong amount.', 'no; the error is in the shared source')],

case=dict(
 title='Decision Clinic · Cross-check, or wait for the statement?',
 brief=[
  'Arclight can either cross-check extraction daily, which costs almost nothing and misses '
  'anything the two routes share, or compare monthly totals against supplier statements, '
  'which catches shared faults and arrives three days after month end.',
  'Samuel Boateng pays suppliers on the fifth business day. A fault found on the eighth is '
  'found after the money has gone.',
  'Victor has proposed doing both. Kenji has asked what the second one costs, and the answer '
  'is about three hours a month plus the awkwardness of chasing eleven suppliers for '
  'statements they do not always send.'],
 exhibit=figs.datatable('WHAT EACH ARRANGEMENT WOULD HAVE CAUGHT',
                        ['Fault', 'Cross-check', 'Statement comparison', 'Value'],
                        [['9 misread dates', 'no', 'yes', '0 EUR, but a query'],
                         ['tax double-count', 'no', 'yes', '1,100 EUR'],
                         ['4 transcription slips', 'yes', 'yes', '86 EUR'],
                         ['1 duplicate invoice', 'yes', 'yes', '340 EUR'],
                         ['when available', 'daily', 'day 8', '—']]),
 exhibit_cap='The statement comparison catches everything, three days after the money leaves.',
 exhibit_note='Supplier statements are not contractual. Four of the eleven suppliers send '
              'them reliably; the others require a request each month.',
 voices=[('Victor Sandoval', 'operations and quality',
          'Both. The cross-check catches the cheap faults in time to act, and the statement '
          'comparison catches the expensive ones afterwards, which is still worth knowing.'),
         ('Kenji Watanabe', 'finance',
          'Finding an eleven-hundred-euro fault on day eight means recovering it from a '
          'supplier who has already been paid, which in my experience takes two months and '
          'sometimes does not work.'),
         ('Marta Olsen', 'risk and liability',
          'Then the question is not which check. It is whether Samuel should be paying on '
          'day five at all, which is a thing we chose and could unchoose.')],
 steps=[('Find it', 'Which faults does each arrangement catch, and when?'),
        ('Compare it', 'What is the difference between finding a fault on day 1 and on day 8?'),
        ('Infer it', 'Why does Marta reframe the question around the payment date?'),
        ('Weigh it', 'Three hours a month and eleven awkward requests against an 1,100 euro recovery.'),
        ('Decide', 'What is run, and does anything else change?')],
 analysis=[('Find it. Which arrangement catches the tax double-count?', 'only the statement comparison, on day eight'),
           ('Compare it. Why does day eight matter?', 'because Samuel pays on day five, so the money has gone'),
           ('Infer it. What is Marta questioning?', 'the payment date itself, which is a choice rather than a constraint'),
           ('Weigh it. What does recovery after payment cost?', 'about two months, and it sometimes fails entirely'),
           ('Decide. What single change would make the statement comparison useful?', 'moving the payment to after the comparison, if the suppliers accept it')],
 decision='Write the proposal to Samuel.',
 decision_steps=['Say what Arclight will run, and what each arrangement catches.',
                 'Say plainly what the current payment date means for the expensive faults.',
                 'Propose the change to the date, with the cost of not changing it.',
                 'Say what happens with suppliers who send no statement.'],
 bank=['We will run … daily and … monthly.',
       'Paying on day … means that …', 'If payment moved to day … , then …',
       'For the … suppliers who send no statement, …',
       'The cost of leaving this unchanged is about …'],
 outcome='Samuel moved supplier payment from day five to day nine for the seven suppliers '
         'who send statements, and kept day five for the four who do not. Over the following '
         'year the statement comparison caught three faults worth about 1,900 euros in '
         'total, all of them before payment. The four day-five suppliers produced one fault '
         'worth 210 euros, recovered after seven weeks. Marta’s reframing is the part Victor '
         'quotes, because neither he nor Kenji had treated the payment date as a variable.',
 outcome_q=[('Why was moving the payment date the effective change?', 'because it converted an after-the-fact recovery into a check before the money left'),
            ('What had both Victor and Kenji taken as fixed?', 'the payment date, which turned out to be a choice')],
 tags=[]),

lab=dict(
 title='Brief Lab · Run the extraction twice',
 task=['This is the brief that set up the cross-check, written in the enthusiasm of having '
       'discovered that comparison checks are nearly free.',
       'It is a good idea executed without the one paragraph that would have made its '
       'results interpretable: a statement of what the two routes have in common.'],
 draft=['Run the extraction twice using two different routes.',
        'Compare the results and flag anything that does not match.',
        'Report how much of it agrees.',
        'Treat agreement as a sign that the row is fine.',
        'Look into any serious disagreements.',
        'Do this for the invoice work generally.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A cross-check brief whose fourth line states the one thing a cross-check cannot establish.',
 asked=['Shared assumptions listed and excluded',
        'Agreement recorded as agreement, not correctness',
        'An external comparison for excluded fields'],
 back=['An agreement rate of 98.9 per cent',
       'Nine wrong rows reported as fine',
       'No external comparison at all'],
 gap='Line four instructs the arrangement to treat agreement as correctness, which is exactly '
     'the inference a cross-check does not support, and nothing anywhere names what the two '
     'routes share.',
 back_cap='Ninety-eight point nine per cent agreement, including nine rows that were wrong.',
 back_note='The agreement rate was quoted in three internal documents as a quality figure. '
           'It is a measure of how similar two routes are, which is not the same thing.',
 diagnosis=[('[1] "two different routes" — different in what respect?', 'unscoped set'),
            ('[2] "anything that does not match" — across which fields?', 'unscoped set'),
            ('[3] "how much of it agrees" — as a proportion of what?', 'unbounded quantity'),
            ('[4] "agreement means the row is fine" — except where both share a rule', 'unstated exception'),
            ('[5] "any serious disagreements" — serious above what difference?', 'unbounded quantity'),
            ('[6] "the invoice work generally" — including dates and tax?', 'unstated exception')],
 rewrite='Rewrite the brief so that what the two routes share is listed and excluded, and so '
         'that agreement is never reported as correctness.',
 scaffold=['Why two routes catch some faults and not others',
           'Which rows and which fields are inside the cross-check, and which are outside',
           'The invoice folder and the two routes, each named',
           'What is compared, what agreement is recorded as, and what the excluded fields get instead',
           'The agreement rate, the disagreement list and the statement of exclusions',
           'What to do about the fields the cross-check cannot cover'],
 bank=['Run … so that … are caught, without implying …',
       'Include … ; exclude … , because both routes …',
       'Work from … using routes … and …',
       'Compare … ; record agreement as … , never as …',
       'Return … , … and a statement of …',
       'For the excluded fields, …'],
 check=['Does the brief list what the two routes share?',
        'Are those fields excluded from the cross-check explicitly?',
        'Is agreement reported as agreement rather than as correctness?',
        'Is there an external comparison for the excluded fields?'],
 model=['Catch the extraction faults that 2 routes would not share, without implying anything about the ones they would',
        'All 800 monthly invoice rows; the date, tax-treatment and currency fields are excluded because both routes apply the same rules to them',
        'The invoice folder and the 2 extraction routes, A and B, documented on 9 June',
        'Both routes run on every row; disagreements are listed by row and by field; agreement is recorded as "the 2 routes agree" and never as "the row is correct"',
        '1 agreement rate over its denominator, 1 list of disagreeing rows, and 1 written statement of the 3 excluded fields',
        'For the 3 excluded fields, compare the monthly totals against the supplier statements instead, accepting the 3-day delay'],
 cost='9 wrong rows reported as agreeing, an agreement rate of 98.9 per cent quoted as a '
      'quality figure in 3 internal documents, and 3 months during which the date convention '
      'fault could not have been detected by anything Arclight was running.'),

rev_fig=figs.split('FULL CLAUSE AND PARTICIPLE',
                   'Full clause',
                   ['Because it had been extracted twice, it was flagged.',
                    'When it was compared with the bank, it was out.',
                    'Since both read it as American, both failed.',
                    'After it had run for an hour, it stopped.'],
                   'Participle clause',
                   ['Having been extracted twice, it was flagged.',
                    'Compared with the bank, it was 40 euros out.',
                    'Reading the date as American, both failed.',
                    'Having run for an hour, it stopped at item 211.']),
rev_fig_cap='The right-hand column is shorter. Check that the subject has not gone missing.',
rev=dict(
 read=[('A cross-check is blind to', ['rare faults', 'faults the two routes share', 'large faults', 'new faults'], 1),
       ('A participle clause takes its subject from', ['the participle itself', 'the main clause', 'the object', 'nowhere'], 1),
       ('Comparison against an external record is better because', ['it is faster', 'the record does not share your assumptions', 'it is cheaper', 'it is required'], 1),
       ('In the Clinic, what change made the statement comparison useful?', ['more suppliers', 'moving the payment date', 'a faster route', 'a third check'], 1)],
 listen_text='Before you build a cross-check, write down what the two routes have in common, '
             'because that list is exactly what the arrangement cannot see. Then exclude '
             'those fields from it, so that the agreement rate measures something. And where '
             'you can wait, prefer a record from outside your organisation, because a bank '
             'statement has no opinion about how you read a date.',
 listen=[('Write down what the two routes have in ____________.', 'common'),
         ('That list is exactly what the arrangement cannot ____________.', 'see'),
         ('Exclude those fields, so that the agreement ____________ measures something.', 'rate'),
         ('A bank statement has no opinion about how you read a ____________.', 'date')],
 speak=['Describe two ways the same job could be done at your work. Your partner names what they share.',
        'Decide which faults a comparison between them would miss.'],
 write='Write a cross-check brief with an exclusion list and an external comparison.',
 vocab=[('A cause affecting both routes at once is ____________.', 'common-mode'),
        ('Running two methods at once on the same work is a ____________.', 'parallel run'),
        ('The proportion of cases on which two checks agree is the ____________.', 'agreement rate'),
        ('A value lying far outside the usual range is an ____________.', 'outlier'),
        ('The rule used to settle a disagreement between two is a ____________.', 'tie-break')],
 gram=[('____________ been extracted twice, the row was flagged.', 'Having'),
       ('____________ with the bank, the total was forty euros out.', 'Compared'),
       ('____________ the date as American, both routes failed.', 'Reading'),
       ('____________ run for an hour, the process stopped.', 'Having'),
       ('____________ at an angle, the page was misread.', 'Scanned')]),

found=['Name two ways the same job is done at your work and list what they share.',
       'Find one record at your work that comes from outside your organisation.',
       'Work out what a comparison between two internal systems could never catch.',
       'Compress three sentences from your own writing into participle clauses.'],
end_line='Two routes agreed on all nine rows, and all nine rows were wrong.',
end_next='Next: What If It Is Wrong',
)
