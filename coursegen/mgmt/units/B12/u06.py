# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='One Shape Every Time',
gram='the passive, present and past',
ai='templates and fixed output formats',
strap='CEFR B1 · Grammar: the passive, present and past · AI: templates and fixed output formats',
cando=['form the passive in the present and the past, and say when to use it',
       'decide when naming the doer matters and when it does not',
       'specify an output format so that two runs produce the same shape',
       'write a template with labelled slots rather than free space',
       'say what a fixed format does to the visibility of errors'],
hero=('THE SAME DOCUMENT, FOUR MONTHS RUNNING',
      ['The total has been bottom right since March.',
       'The month it was not, three people noticed in a minute.'],
      [(880, 'teal', 'short'), (1620, 'purple', 'long'), (2360, 'grey', 'short')]),
hero_cap='A fixed shape is not tidiness. It is where you put your attention.',

warm=['Which documents at your work look the same every time?',
      'Does it matter who did something, or only that it was done?',
      'How would you notice if a figure was missing from a familiar page?'],
read=[
 'Samuel Boateng’s reconciliation has had the same shape since March: seven columns in a '
 'fixed order, the summary in the top five lines, the unreconciled total bottom right. He '
 'does not read it. He looks at three places on it, in the same order, every month, and the '
 'whole thing takes him about forty seconds.',
 'In July the unreconciled total was missing. It had not been calculated, because a supplier '
 'had sent two files instead of one and a step had stopped early. Samuel noticed in the time '
 'it took him to look at the bottom right of the page and find nothing there.',
 'This is the argument for fixed formats that people usually miss. The tidy appearance is '
 'the least of it. The real value is that a fixed shape turns reading into looking, and '
 'looking is fast enough that an absence becomes visible. On a page whose layout changes '
 'each month, a missing total looks exactly like a different layout.',
 'The template Arclight uses is written as labelled slots rather than as a description. '
 'Not "include a summary at the top" but a block of five lines with labels on them, each '
 'of which must be filled or marked not available. An empty slot is a question. A slot that '
 'was never there is silence.',
 'The grammar that goes with this is the passive, which people are often told to avoid and '
 'which is exactly right here. The reconciliation is produced on the fifth business day. '
 'Nobody cares who produces it. What matters is that it is produced, that it is checked, '
 'and that the unreconciled total is shown, and the passive puts all three of those facts '
 'where the attention belongs.'],
c_a=[('How long does Samuel spend on the reconciliation?', 'about forty seconds'),
     ('What happened in July?', 'the unreconciled total was missing because a step stopped early'),
     ('Why did he notice so quickly?', 'because the total is always bottom right, so an absence is visible'),
     ('How is the template written?', 'as labelled slots that must be filled or marked not available'),
     ('Why is the passive right here?', 'because what matters is that the work is done, not who did it')],
c_b=[('Samuel reads the whole reconciliation each month.', 'F'),
     ('The missing total was caused by a supplier sending two files.', 'T'),
     ('A fixed layout mainly makes documents look tidy.', 'F'),
     ('An empty labelled slot is described as a question.', 'T'),
     ('The passive is wrong for this kind of writing.', 'F'),
     ('The summary sits in the top five lines.', 'T')],
c_c=[('Seven columns in a fixed ____________.', 'order'),
     ('The unreconciled total ____________ right.', 'bottom'),
     ('A fixed shape turns reading into ____________.', 'looking'),
     ('An empty slot is a ____________.', 'question'),
     ('A slot that was never there is ____________.', 'silence'),
     ('The reconciliation is ____________ on the fifth business day.', 'produced')],
c_d=[('A fixed format mainly buys ( visibility / tidiness ).', ['visibility', 'tidiness'], 0),
     ('The missing total was noticed because', ['Samuel read carefully', 'the place it lives was empty', 'a flag was raised', 'the file was late'], 1),
     ('Labelled slots are better than a description because', ['they are shorter', 'an empty one is visible', 'they look better', 'they are formal'], 1),
     ('The passive is recommended here because', ['it is more formal', 'who did it does not matter', 'it is shorter', 'it is traditional'], 1),
     ('A changing layout makes a missing figure look like', ['an error', 'another layout change', 'a flag', 'a delay'], 1)],
c_e=('Active or passive? Put each sentence in the right column.',
     [('Fatima produces the reconciliation.', 'Active'),
      ('The reconciliation is produced on the 5th.', 'Passive'),
      ('Somebody checked the totals.', 'Active'),
      ('The totals were checked on Thursday.', 'Passive'),
      ('We send the letters on Monday.', 'Active'),
      ('The letters are sent on Monday.', 'Passive')],
     ['Active', 'Passive']),

v_fig_title='A TEMPLATE, NOT A DESCRIPTION',
v_fig=[('doc', 'a template'), ('note', 'a placeholder'), ('scale', 'a layout'),
       ('chart', 'a column'), ('bank', 'a heading'), ('bulb', 'a deviation')],
v_fig_cap='Six words for the shape a document has before anything is written in it.',
vocab=[
 ('template', 'a fixed pattern that new documents are made from'),
 ('placeholder', 'a marked space showing where something must go'),
 ('slot', 'a defined space in a format, reserved for one named thing'),
 ('layout', 'the arrangement of parts on a page'),
 ('format', 'the agreed shape and order a document takes'),
 ('standardise', 'to make everything follow one agreed form'),
 ('variant', 'a version differing from the standard in some respect'),
 ('merge', 'to combine data with a template to produce a document'),
 ('populate', 'to fill the spaces in a format with real values'),
 ('blank', 'a space deliberately left empty'),
 ('heading', 'the title at the top of a section or a column'),
 ('footer', 'the text that appears at the bottom of every page'),
 ('column', 'a vertical division of a table'),
 ('row', 'a horizontal division of a table'),
 ('field name', 'a word saying what belongs in a particular place'),
 ('prefill', 'to put known values into a form before it is used'),
 ('consistent', 'the same each time, without unexplained variation'),
 ('deviation', 'a departure from the agreed form'),
 ('conform', 'to follow the agreed form exactly'),
 ('rigid', 'fixed, with no room to vary')],
v_a=[('A marked space showing where something must go is a ____________.', 'placeholder'),
     ('A fixed pattern new documents are made from is a ____________.', 'template'),
     ('To fill the spaces in a format with real values is to ____________ it.', 'populate'),
     ('A departure from the agreed form is a ____________.', 'deviation'),
     ('To combine data with a template is to ____________ them.', 'merge'),
     ('A version differing from the standard is a ____________.', 'variant'),
     ('To put known values in before the form is used is to ____________ it.', 'prefill'),
     ('To follow the agreed form exactly is to ____________.', 'conform')],
v_b=[('A slot is a defined space reserved', 'for one named thing.'),
     ('To standardise is to make everything follow', 'one agreed form.'),
     ('A footer is the text that appears', 'at the bottom of every page.'),
     ('Consistent means the same each time', 'without unexplained variation.'),
     ('A layout is the arrangement of parts', 'on a page.')],

g_title='Grammar: the passive, present and past',
g_rule=['Present passive: is or are + past participle. The report is produced on the fifth.',
        'Past passive: was or were + past participle. The totals were checked on Thursday.',
        'Use by only when the doer matters: the queue is released by Fatima.',
        'The passive puts the thing done first, which is usually what a process cares about.'],
g_fig=('LOOSE',
       ['We produce the reconciliation.',
        'Somebody checks the totals.',
        'Fatima sent the letters out.',
        'They have not signed it yet.'],
       'PRECISE',
       ['The reconciliation is produced by the 5th.',
        'The totals are checked before release.',
        'The letters were sent on 14 March.',
        'It has not been signed by Marta.'],
       'names the doer, loses the schedule',
       'names the act, the time and the signer'),
g_fig_cap='The passive is wrong in an essay and right in a process.',
g_a=[('The reconciliation ____________ produced on the fifth. (be)', 'is'),
     ('The totals ____________ checked before release. (be)', 'are'),
     ('The letters ____________ sent on 14 March. (be)', 'were'),
     ('The queue is ____________ by Fatima. (release)', 'released'),
     ('It has not ____________ signed yet. (be)', 'been'),
     ('Two files ____________ received instead of one. (be)', 'were'),
     ('The total ____________ shown bottom right. (be)', 'is'),
     ('The policy ____________ replaced in February. (be)', 'was'),
     ('Nothing ____________ sent without a signature. (be)', 'is')],
g_b=[('The reconciliation ( produces / is produced ) on the fifth.', ['produces', 'is produced'], 1),
     ('The letters ____ sent on 14 March.', ['was', 'were', 'are', 'is'], 1),
     ('It has not ____ signed yet.', ['be', 'being', 'been', 'was'], 2),
     ('The queue is released ____ Fatima.', ['from', 'with', 'by', 'of'], 2),
     ('Two files ____ received instead of one.', ['was', 'were', 'are', 'is'], 1),
     ('The policy ____ replaced in February.', ['is', 'was', 'were', 'has'], 1)],

d1=dict(title='Bottom right',
        fig=(['It took him forty seconds.', 'He did not read it.'],
             ['He looked at three places.', 'And one of them was empty.']),
        cap='Fatima and Thomas, after Samuel’s call.',
        lines=[('Fatima', 'Samuel rang within four minutes of the page arriving.'),
               ('Thomas', 'He cannot have read it in four minutes.'),
               ('Fatima', 'He never reads it. He looks at three places in the same order.'),
               ('Thomas', 'Which three?'),
               ('Fatima', 'Top line, the gaps column, and the unreconciled total bottom right.'),
               ('Thomas', 'And bottom right was empty.'),
               ('Fatima', 'Bottom right was empty, and he saw it the way you see a missing step.'),
               ('Thomas', 'If the layout moved every month he would never have seen that.'),
               ('Fatima', 'He would have assumed it had gone somewhere else on the page.'),
               ('Thomas', 'So the fixed shape is why we found out on the fifth and not in October.'),
               ('Fatima', 'It is. And I had been thinking of it as a presentation decision.'),
               ('Thomas', 'Most people do. It is a detection decision wearing a presentation hat.')],
        a=[('How quickly did Samuel ring?', 'within four minutes of the page arriving'),
           ('Which three places does he look at?', 'the top line, the gaps column and the unreconciled total'),
           ('What was wrong?', 'the unreconciled total, bottom right, was empty'),
           ('What would have happened with a changing layout?', 'he would have assumed the total had moved somewhere else'),
           ('How does Thomas describe a fixed shape?', 'a detection decision wearing a presentation hat')],
        b=[('He looks at three places in the same ____________.', 'order'),
           ('Bottom right was ____________.', 'empty'),
           ('He would have assumed it had gone somewhere ____________.', 'else'),
           ('A ____________ decision wearing a presentation hat.', 'detection')]),
d2=dict(title='How rigid is too rigid?',
        fig=(['Every page identical.', 'Even when it does not fit?'],
             ['Especially then.', 'Then we lose information.']),
        cap='Thomas and Fatima, on the next template.',
        lines=[('Thomas', 'Every client page identical. Same seven columns, same order, always.'),
               ('Fatima', 'Priya has no suppliers. Three of the seven columns are empty for her.'),
               ('Thomas', 'Then they are empty. Empty is information.'),
               ('Fatima', 'Empty is information the first time. By month four it is noise.'),
               ('Thomas', 'If we let her page be different, we lose the comparison across clients.'),
               ('Fatima', 'Do we ever compare across clients?'),
               ('Thomas', 'Kenji does, at quarter end.'),
               ('Fatima', 'Once a quarter, against twelve pages a month that carry dead columns.'),
               ('Thomas', 'So you want a variant, and a variant is how a standard starts dying.'),
               ('Fatima', 'One variant, with a written reason. That is not the same as drift.'),
               ('Thomas', 'It is how drift begins, and I have never once seen it stop at one.')],
        unresolved=True,
        a=[('What does Thomas want?', 'every client page identical, with the same seven columns in the same order'),
           ('What is the problem for Priya?', 'three of the seven columns are always empty for her'),
           ('Why does Thomas want to keep them?', 'to preserve comparison across clients, which Kenji uses at quarter end'),
           ('What does Fatima propose?', 'one variant, with a written reason'),
           ('Does Thomas accept it?', 'no; he says that is how drift begins and he has never seen it stop at one')],
        b=[('Empty is ____________.', 'information'),
           ('By month four it is ____________.', 'noise'),
           ('Kenji does, at ____________ end.', 'quarter'),
           ('A variant is how a standard starts ____________.', 'dying')]),

speak=[('Active or passive?',
        ['Student A: describe four things that happen in your workplace, actively.',
         'Student B: rewrite each in the passive and say what is gained or lost.',
         'Decide which two are better in the passive, and why.']),
       ('Spoken specification: fix the shape',
        ['Choose a document somebody produces for you regularly.',
         'Brief its shape aloud: how many sections, in what order, what sits where.',
         'Your partner names one thing you left free. That is next month’s variation.']),
       ('Where do you look?',
        ['In pairs, name a page each of you reads regularly at work.',
         'Say which two or three places you actually look at, in order.',
         'Decide whether those places are in the same spot every time.'])],

ext_title='A fixed shape is where you put your attention',
ext_fig=figs.datatable('THE SAME PAGE, TWO WAYS OF SPECIFYING IT',
                       ['Specified as', 'What you get', 'A missing total looks like'],
                       [['include a summary', 'a summary somewhere', 'a layout change'],
                        ['cover the main figures', 'most of them, in some order', 'an omission you may not see'],
                        ['7 named columns in order', 'the same table each time', 'an empty cell'],
                        ['total bottom right', 'a total bottom right', 'an empty bottom right'],
                        ['slots that must be filled', 'every slot filled or marked', 'the words not available']]),
ext_fig_cap='The last two rows are the only ones where an absence announces itself.',
ext=[
 'Fixing the format of a recurring document is usually presented as a matter of '
 'professionalism, and that is the least interesting reason to do it. The interesting '
 'reason is about human attention. A reader who has seen the same shape eleven times stops '
 'reading it and starts looking at it, and looking is about twenty times faster than '
 'reading and considerably better at noticing that something is not there.',
 'This only works if the shape really is the same. A page whose columns move, whose summary '
 'is sometimes at the top and sometimes at the bottom, and whose length varies cannot be '
 'looked at. It has to be read every time, which costs minutes rather than seconds and, '
 'more importantly, means that an omission is indistinguishable from a rearrangement.',
 'The way to specify a format so that it holds is as labelled slots rather than as a '
 'description of contents. A description says what should be included; a slot says where it '
 'goes and insists that something occupy the space. When a slot cannot be filled, the '
 'instruction is to write not available in it, which is a statement. A section that was '
 'quietly omitted is not a statement, and nobody can see it.',
 'There is a real cost, which the people who like standards tend to understate. A rigid '
 'format applied to cases it does not suit produces pages full of empty columns, and an '
 'empty column that is empty every month stops being information and becomes furniture. '
 'The second time somebody has to explain why three columns are always blank, the format '
 'has begun costing more than it saves.',
 'So the honest position is that format rigidity is a trade, not a virtue. Fix the shape '
 'wherever a reader has built a habit on it, because that is where the detection value '
 'lives. Allow variants where the standard shape carries nothing, write the reason down '
 'beside each variant, and accept that somebody will have to look at the list of variants '
 'once a year and kill the ones that have stopped making sense.'],
dp1=('Reading and looking',
     'Human-factors work on familiar documents generally reports that experienced readers '
     'shift from reading to targeted visual search, with large gains in speed and in the '
     'detection of missing values.',
     'Source: general human-factors research, 2026. Depends heavily on familiarity.'),
e_a=[('What is the interesting reason for a fixed format?', 'it lets a familiar reader look rather than read, which is faster and better at spotting absence'),
     ('What happens if the shape varies?', 'the page has to be read every time, and an omission looks like a rearrangement'),
     ('How should a format be specified?', 'as labelled slots that must be filled or marked not available'),
     ('What is the real cost of rigidity?', 'pages full of empty columns, which stop being information and become furniture'),
     ('What is the honest position?', 'that rigidity is a trade, fixed where readers have habits and varied where the shape carries nothing')],
e_b=[('Professionalism is the main reason for fixing a format.', 'F'),
     ('Looking is faster than reading a familiar page.', 'T'),
     ('A quietly omitted section is a statement.', 'F'),
     ('An always-empty column remains informative indefinitely.', 'F'),
     ('Variants should have a written reason beside them.', 'T'),
     ('Format rigidity is described as a virtue in itself.', 'F')],

w_model=(
 'Purpose: give each client a page that can be checked by looking rather than reading. '
 'Scope: the 11 monthly client reconciliations; Priya Menon’s page uses variant B, which '
 'omits the 3 supplier columns for the reason recorded on 4 July. Inputs: layout version 3 '
 'and the month folder. Criteria: 7 columns in the fixed order; the summary in the top 5 '
 'lines; the unreconciled total bottom right; every slot filled or marked "not available". '
 'Done: 11 pages, each 1 page long, by 10:00 on the 5th business day. Fallback: if a slot '
 'cannot be filled, write "not available" and the reason in it; do not omit the slot.'),
w_fig=figs.spec_card('SPECIFYING A SHAPE',
                     [('Sections', 'How many, in what order'),
                      ('Position', 'Where each named figure sits on the page'),
                      ('Length', 'One page, not "short"'),
                      ('Empty slots', 'Filled with "not available", never removed'),
                      ('Variants', 'Named, numbered, with a written reason'),
                      ('Review', 'The variant list is read once a year')]),
w_fig_cap='Six lines. The fourth is the one that makes an absence visible.',
w_task='Write the format specification for a recurring document.',
w_steps=['Name the document and who reads it, and say what they look at first.',
         'List the sections or columns in their fixed order.',
         'Say where each key figure sits, by position.',
         'Say what fills a slot that has no value this month.',
         'Say whether variants exist, and what is required before one is created.'],
w_bank=['The page is produced … , in … sections, in this order: …',
        'The … is shown … on the page, every time.',
        'Every slot is filled or marked …', 'Variant … applies to … , because …',
        'The variant list is reviewed …'],
w_check=['Does your specification say where things sit, not only that they are included?',
         'Is there an instruction for an empty slot?',
         'Have you said how long the document is, with a number?',
         'Does every variant have a written reason and a date?'],

t_title='Templates and fixed output formats',
t_fig=figs.handover('A PAGE THAT CAN BE CHECKED BY LOOKING',
                    ['Populate the 7 slots', 'Mark any empty slot', 'Place the total bottom right'],
                    'Samuel looks at 3 places and takes 40 seconds',
                    'The shape is what makes 40 seconds possible.'),
t_fig_cap='Everything in the first three boxes exists to make the fourth box fast.',
t_body=[
 'Specify position, not only content. Include a summary produces a summary somewhere, which '
 'is not the same document twice. The summary occupies the top five lines produces the same '
 'document twice, and the second one can be checked by somebody who is not reading it. '
 'Position is what turns a document into an instrument.',
 'Insist that empty slots are marked rather than removed. This is one line in a brief and it '
 'converts silence into a statement. A page with "not available" where the supplier total '
 'should be tells the reader something true and prompts a question. A page with that section '
 'quietly absent tells them nothing at all, and they will not notice for about four months.',
 'Then be honest about rigidity. A fixed shape is worth its cost wherever somebody has '
 'built a habit on it, and it is dead weight where nobody has. Allow a small number of '
 'named variants, write the reason beside each one, and put a date in the calendar to read '
 'the list, because the failure mode of variants is not that they exist but that nobody '
 'ever kills one.'],
t_say=[('Specify position: ', 'The unreconciled total is shown bottom right, every month.'),
       ('Mark the empty slot: ', 'Any slot with no value is filled with "not available" and a reason.'),
       ('Name the variant: ', 'Variant B omits the supplier columns, for the reason recorded on 4 July.')],
t_bound=('A fixed format does not make the figures in it right. A page can be perfectly '
         'shaped, with every slot filled and the total in its usual place, and carry a '
         'wrong total every month; the consistency will make it look more trustworthy, not '
         'less, and the habit of looking rather than reading is exactly what stops anybody '
         'checking.'),
t_a=[('The unreconciled total is shown bottom ____________, every month.', 'right'),
     ('Any slot with no value is filled with "not ____________".', 'available'),
     ('Variant B omits the supplier columns, for the reason recorded on 4 ____________.', 'July'),
     ('Position is what turns a document into an ____________.', 'instrument'),
     ('A quietly absent section tells them ____________ at all.', 'nothing'),
     ('The failure mode of variants is that nobody ever ____________ one.', 'kills')],
t_b_rubric='Rewrite each instruction so that the shape is fixed.',
t_b=[('Include a summary.', 'the summary occupies the top five lines of the page'),
     ('Show the main figures.', 'the 7 named columns appear in this order, every month'),
     ('Keep it short.', 'one page, with no continuation sheet'),
     ('Leave out anything that does not apply.', 'fill any slot that does not apply with "not available" and a reason')],

case=dict(
 title='Decision Clinic · One variant, or none?',
 brief=[
  'Priya Menon has no suppliers, so three of the seven columns on her reconciliation are '
  'empty every month. She has not complained. She mentioned once that she finds the page '
  '"a bit of a maze".',
  'Fatima wants a variant: a five-column page for clients with no suppliers, which is '
  'currently Priya and one other. Thomas opposes it on the grounds that a standard with '
  'exceptions is not a standard.',
  'Kenji compares across clients at quarter end and needs the same columns in the same '
  'order to do it. He does this four times a year and it takes him about an hour.'],
 exhibit=figs.datatable('SEVEN COLUMNS, ELEVEN CLIENTS',
                        ['', 'Clients', 'Empty columns', 'Reads the page how often'],
                        [['with suppliers', '9', '0', 'monthly'],
                         ['without suppliers', '2', '3 of 7', 'monthly'],
                         ['Kenji, comparing', '—', '—', '4 times a year'],
                         ['pages a year, 2 clients', '24', '72 empty columns', '—'],
                         ['Kenji’s hours a year', '—', '—', '4']]),
 exhibit_cap='Seventy-two empty columns a year, against four hours of comparison.',
 exhibit_note='Nobody has asked Kenji whether he could do the comparison from a five-column '
              'page with three columns treated as zero.',
 voices=[('Fatima Zahra', 'client manager',
          'Two clients get a page that is three-sevenths furniture, every month, so that '
          'Kenji can spend four hours a year not reformatting anything.'),
         ('Thomas Reed', 'service delivery',
          'One variant becomes four. I have watched this happen at two companies. Within a '
          'year the standard is a historical document and everybody has a special page.'),
         ('Kenji Watanabe', 'finance',
          'Nobody has asked me. I could compare from a five-column page in about the same '
          'time, provided the five columns are the same five and in the same order.')],
 steps=[('Find it', 'How many empty columns a year, and how many hours of comparison?'),
        ('Compare it', 'What does the single standard protect, and what does it cost?'),
        ('Infer it', 'Why had nobody asked Kenji until now?'),
        ('Weigh it', 'Thomas’s prediction about drift against a monthly cost to two clients.'),
        ('Decide', 'Is there a variant, and what stops it becoming four?')],
 analysis=[('Find it. How many empty columns do the two clients receive a year?', 'seventy-two'),
           ('Compare it. What did the standard appear to protect?', 'Kenji’s quarterly comparison, four hours a year'),
           ('Infer it. Why had nobody asked Kenji?', 'because the argument was being had between the two people who felt most strongly'),
           ('Weigh it. What is the weight of Thomas’s objection?', 'it is about the future pattern rather than this case, and he has evidence from two companies'),
           ('Decide. What rule would allow one variant and prevent four?', 'a cap on the number of variants and a requirement that each has a written reason and an annual review')],
 decision='Write the variant rule for the reconciliation format.',
 decision_steps=['Say whether variants exist at all, in the first sentence.',
                 'Put a number on how many may exist.',
                 'Say what must be recorded before one is created, and by whom.',
                 'Say when the list is read, and what happens to a variant nobody defends.'],
 bank=['Variants of this format…', 'No more than … may exist at any time.',
       'A variant requires … , recorded by …', 'The list is read every … by …',
       'A variant that cannot be justified at review is…'],
 outcome='Kenji’s answer settled it in about ninety seconds, which nobody had sought in '
         'three weeks of argument. Variant B was created with a cap of two variants in '
         'total and an annual review. Eighteen months later there were still two. Thomas '
         'says the cap is the only reason, and that he was right about the pattern and wrong '
         'about this company, which he describes as a distinction he does not enjoy making.',
 outcome_q=[('What ended the argument, and why had nobody found it?', 'asking Kenji, which nobody had done because the two people arguing felt most strongly about it'),
            ('Was Thomas wrong?', 'he was right about the general pattern and wrong about this case, and the cap is what made the difference')],
 tags=[]),

lab=dict(
 title='Brief Lab · Specify the client page',
 task=['This is the brief for the first version of the client reconciliation page, written '
       'in January before anybody had a habit built on it.',
       'Everything in it is about content and nothing about position. The result was a page '
       'that contained the right information in a different arrangement every month for four '
       'months.'],
 draft=['Produce a monthly page for each client.',
        'Include a summary and the main figures.',
        'Put things in a sensible order.',
        'Keep it to a reasonable length.',
        'Leave out anything that does not apply to that client.',
        'Make them look consistent.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A format specification containing no position, no length and no rule for an empty slot.',
 asked=['7 named columns in a fixed order',
        'Empty slots marked, never removed',
        'One page, total bottom right'],
 back=['Columns reordered each month',
       'Sections silently omitted',
       'Pages between 1 and 3 sides long'],
 gap='A sensible order chose itself afresh every month, a reasonable length produced three '
     'sides in June, and leave out anything that does not apply removed the very slots whose '
     'emptiness was the information.',
 back_cap='Four months, four arrangements, and one client who stopped looking at it.',
 back_note='In March the unreconciled total was absent for the first time. Nobody noticed '
           'until June, because the page had looked different in February too.',
 diagnosis=[('[1] "the main figures" — which figures, named?', 'unbounded quantity'),
            ('[2] "a sensible order" — sensible by what test?', 'unstated criterion'),
            ('[3] "a reasonable length" — how many pages?', 'unbounded quantity'),
            ('[4] "anything that does not apply" — and if it applies next month?', 'missing condition'),
            ('[5] "make them look consistent" — consistent with what?', 'unstated criterion'),
            ('[6] "for each client" — and if a client has no suppliers?', 'missing condition')],
 rewrite='Rewrite the brief so that the page has a fixed shape, a fixed length, and a rule '
         'for a slot with nothing in it.',
 scaffold=['Who reads the page and what they look at first',
           'Which clients receive it, and which use a named variant',
           'The layout version and the month folder it draws on',
           'The columns in order, the position of each key figure, and the page length',
           'How many pages come back and by what hour',
           'What goes into a slot that has no value this month'],
 bank=['Produce a page that can be … rather than …',
       'All … clients; … uses variant … for the reason recorded on …',
       'Follow layout version … exactly.',
       '… columns in this order; the … is shown … ; … page(s) only.',
       'Return … pages by … on …', 'If a slot has no value, …'],
 check=['Does the brief say where each key figure sits, not only that it appears?',
        'Is the page length a number?',
        'Is there an instruction for an empty slot that forbids omission?',
        'Are variants named, with a reason and a date?'],
 model=['Give each client a page that can be checked by looking at 3 places rather than read',
        'All 11 monthly client pages; Priya Menon and 1 other use variant B, which omits the 3 supplier columns for the reason recorded on 4 July',
        'Layout version 3 dated 4 July and the month folder',
        '7 columns in the layout order; the summary in the top 5 lines; the unreconciled total bottom right; 1 page, with no continuation sheet',
        '11 pages, each 1 page long, delivered by 10:00 on the 5th business day',
        'If a slot has no value this month, fill it with "not available" and the reason; never remove the slot'],
 cost='4 months of pages in 4 arrangements, 1 unreconciled total missing for 3 months before '
      'anybody saw it, a 2,400 euro supplier error found in June rather than March, and 1 '
      'client who had stopped looking at the page at all.'),

rev_fig=figs.split('ACTIVE AND PASSIVE',
                   'Active — the doer first',
                   ['Fatima produces the page.',
                    'Somebody checked the totals.',
                    'We send the letters on Monday.',
                    'Marta signs the credit notes.'],
                   'Passive — the act first',
                   ['The page is produced by the 5th.',
                    'The totals were checked on Thursday.',
                    'The letters are sent on Monday.',
                    'Credit notes are signed by Marta.']),
rev_fig_cap='The right-hand column is how a process describes itself.',
rev=dict(
 read=[('The main value of a fixed format is', ['tidiness', 'that absence becomes visible', 'speed of writing', 'formality'], 1),
       ('The present passive is formed with', ['is or are + past participle', 'have + past participle', 'be + -ing', 'did + verb'], 0),
       ('An empty slot should be', ['removed', 'marked not available', 'left blank', 'moved'], 1),
       ('In the Clinic, what ended the argument?', ['a vote', 'asking Kenji', 'a new standard', 'a cap'], 1)],
 listen_text='Specify position, not only content, because include a summary gives you a '
             'summary somewhere. Insist that empty slots are marked rather than removed, '
             'because a quietly absent section is silence and nobody sees silence. And be '
             'honest that rigidity is a trade: fix the shape where somebody has a habit, and '
             'allow a named variant where nobody has.',
 listen=[('Specify ____________, not only content.', 'position'),
         ('Insist that empty slots are ____________ rather than removed.', 'marked'),
         ('A quietly absent section is ____________.', 'silence'),
         ('Fix the shape where somebody has a ____________.', 'habit')],
 speak=['Describe a page you read often. Your partner asks where each figure sits.',
        'Decide whether you could notice one missing in under a minute.'],
 write='Write a format specification with positions, a length and an empty-slot rule.',
 vocab=[('A marked space showing where something must go is a ____________.', 'placeholder'),
        ('A departure from the agreed form is a ____________.', 'deviation'),
        ('To fill the spaces in a format with real values is to ____________ it.', 'populate'),
        ('A version differing from the standard is a ____________.', 'variant'),
        ('To follow the agreed form exactly is to ____________.', 'conform')],
 gram=[('The reconciliation ____________ produced on the fifth.', 'is'),
       ('The letters ____________ sent on 14 March.', 'were'),
       ('It has not ____________ signed yet.', 'been'),
       ('The queue is ____________ by Fatima.', 'released'),
       ('The policy ____________ replaced in February.', 'was')]),

found=['Name the three places you look at on a page you read regularly.',
       'Check whether those three places are in the same spot every time.',
       'Add an empty-slot rule to one document you produce.',
       'Find a variant at your work that nobody can justify any more.'],
end_line='He did not read it. He looked at three places, and one of them was empty.',
end_next='Next: Where Are We',
)
