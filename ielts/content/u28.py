# -*- coding: utf-8 -*-
"""Unit 28 - Food Security. IELTS Volume 3, band 6.0."""

_CROPS = dict(kind='bar', teaches='data', title='Domestic production and imports, four crops',
              sub='thousand tonnes, 2003 and 2023',
              cats=['Wheat', 'Oilseed', 'Fruit', 'Vegetables'],
              series=[('Produced 2003', [720, 310, 190, 540]),
                      ('Produced 2023', [740, 290, 120, 430]),
                      ('Imported 2023', [180, 460, 610, 520])])

_SHARE = dict(kind='line', teaches='data', title='Share of consumption met by imports',
              sub='per cent, all four crops combined',
              ylab='',
              x=['2003', '2008', '2013', '2018', '2023'],
              series=[('Import share', [21, 27, 34, 42, 49])])

UNIT = dict(
 n=28, vol=3, level='B2', band='6.0',
 theme='Food Security',
 opener=(
   'Allotment rules, a week of empty shelves, and the second hybrid Task 1 '
   'of this volume. The unit ends on the question the yield figures cannot '
   'answer: whether a harvest that was paid for out of the soil counts as '
   'production at all.'),

 field='food',
 unitmap={'kind': 'unitmap', 'teaches': 'navigation', 'n': 28, 'theme': 'Food Security', 'rows': [('Allotments and growing space', 'Note completion: numbers, units and what gets spelled', 'Multiple choice · sentence completion · note completion · Parts 1-2'), ('What a shortage looks like', 'Matching features: the source that changes its mind', 'Yes/No/Not Given · matching features · Part 2'), ('What a country grows and buys', 'Task 1: two charts without saying it twice', 'Matching information · sentence completion · Task 1 Academic'), ('Why yield is not the whole story', 'Matching headings: the paragraph whose job is to measure', 'Matching headings · Yes/No/Not Given · Part 4'), ('Whether less intensive farming can feed people', 'Task 2: other things being equal', 'Matching information · Yes/No/Not Given · Task 2')], 'note': 'The unit runs from one allotment to a national balance sheet and back to a field trial. Cycles 1, 3 and 5 open with a reading preview and 2 and 4 with a listening one.'},
 sceneintro='Eight things from a growing site, and the words for them. Six are used in cycle 1 and four come back in cycle 5, where the subject is a field trial rather than a plot.',
 scene={'kind': 'scene', 'teaches': 'activate', 'title': 'Unit 28 · an allotment site', 'instr': 'Write the number of each thing beside its word. Two words in the bank are not in the picture.', 'cells': [('leaf', 'plot'), ('brief', 'tenancy agreement'), ('people', 'waiting list'), ('note', 'cultivation rule'), ('clock', 'letting season'), ('coin', 'annual rent'), ('city', 'clearance'), ('chart', 'yield record')], 'bank': ['plot', 'tenancy agreement', 'waiting list', 'cultivation rule', 'letting season', 'annual rent', 'clearance', 'yield record', 'rotation', 'skip'], 'answers': ['plot', 'tenancy agreement', 'waiting list', 'cultivation rule', 'letting season', 'annual rent', 'clearance', 'yield record'], 'note': 'Answers: 1 plot · 2 tenancy agreement · 3 waiting list · 4 cultivation rule · 5 letting season · 6 annual rent · 7 clearance · 8 yield record. Not in the picture: rotation, skip.'},
 puzzle={'kind': 'puzzle', 'teaches': 'curiosity', 'title': 'How much of this country’s food comes from this country?', 'question': 'One of these is the figure almost everybody quotes and one is the figure that matters in a shortage. Which, and why would they differ?', 'bars': [('All food, by value', 61), ('All food, by calories', 54), ('Fresh vegetables', 53), ('Fresh fruit', 16), ('Cereals', 88)], 'mark': 1, 'ylab': '% produced domestically', 'note': 'Cycle 3 is about why these five numbers describe the same country, and cycle 2 is about which of them you would want in a bad winter. Write your guess in the margin now.'},
 cycles=[
  dict(
   sub='Allotments and growing space',
   step=1,
   notes=dict(
    serves='Multiple choice and sentence completion, Reading Parts 1-2; note and table completion in Listening Parts 1-2',
    because='Note completion is lost on the form of the answer rather than on hearing it: a candidate hears twelve pounds fifty and writes £12.50 into a gap that already has a pound sign printed in front of it',
    skill='Writing a listening answer in the form the gap has already specified - its units, its article, its number format',
    evidence='Unit 24 cycle 1 taught using the recording’s own signals; this is the other half, which is reading what the notes have already supplied',
    watch='In question 12 the notes print "per plot" after the gap and learners write the unit again. Expect it',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='A quarter of an acre and a waiting list',
    body='An allotment is a plot of council land let to a household to grow food on, usually for about the price of a takeaway meal a year, and in most towns the waiting list is longer than the number of plots. That combination - almost free, and unobtainable - makes the paperwork around it unusually precise, which is why it is a good place to practise the listening skill this cycle is about.',
    task='Answer these from where you live. Three or four sentences each.',
    qs=[
        'Have you or your family ever grown food? What, and where?',
        'Should a city keep land for growing when housing is short?',
        'If the waiting list is nine years, how should the plots be given out?',
        'Is growing your own food a serious contribution to anything, or a hobby?',
       ]),
   vocabwork=dict(
    title='The language of a tenancy',
    body='Sixteen words from the documents a growing site produces. The register is institutional and by unit 28 it should be almost automatic; what is new is the vocabulary of cultivation itself, which returns in cycle 5 when the subject is a field trial.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'an allotment, and the rules about it', 'sub': 'cycle 1 · and four of these return in cycle 5', 'branches': [('the land', ['plot', 'rod', 'holding', 'clearance']), ('the agreement', ['tenancy', 'letting season', 'annual rent', 'notice to quit']), ('the rules', ['cultivation rule', 'uncultivated', 'subletting', 'inspection']), ('the growing', ['rotation', 'dwarfing stock', 'perennial', 'yield'])], 'note': 'A rod is an old unit of area still used for allotments: about 25 square metres, and a standard plot is ten rods. A listening gap will give you the number and expect the unit, or print the unit and expect the number.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 1 · and two of these change stress', 'rows': [(('cul-ti-vate', 1), ('cul-ti-va-tion', 3), '', ('cul-ti-va-ted', 1), ''), (('ten-ant', 1), ('ten-an-cy', 1), ('ten-ant', 1), '', ''), (('pro-duce', 2), ('prod-uce', 1), ('pro-duc-er', 2), ('pro-duc-tive', 2), ''), (('har-vest', 1), ('har-vest', 1), '', '', ''), (('ro-tate', 2), ('ro-ta-tion', 2), '', ('ro-ta-tion-al', 2), '')], 'note': 'proDUCE is the verb and PRODuce is the noun meaning the things grown, and the pair is tested in both papers. Harvest is both verb and noun with the same stress, which is the easier case.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('The piece of land let to one household is a ____________.', None,
      'plot'),
     ('The agreement under which it is held is the ____________.', None,
      'tenancy'),
     ('Land not being worked is ____________.', None,
      'uncultivated'),
     ('Letting your plot to somebody else is ____________.', None,
      'subletting'),
     ('Changing what is grown where each year is ____________.', None,
      'rotation'),
     ('The noun meaning the things grown, stressed on the first syllable, is ____________.', None,
      'produce'),
     ('The old unit of area, about 25 square metres, is a ____________.', None,
      'rod'),
     ('A formal letter ending a tenancy is a notice to ____________.', None,
      'quit'),
    ]),
   builder=dict(
    skill='Note completion: the gap has already told you the form',
    qkind='skill',
    explain='In Listening, the notes you are filling in are not blank space - they are a specification, and most of the marks lost on this task are lost to writing the right answer in the wrong form. Four things the gap has already supplied, and you must not repeat any of them. The unit: if the notes print "per plot" after the gap, write the number alone; if they print £ before it, write the figure without a pound sign. The article: a gap after "the" does not take another the. The number format: a gap printed as "____ metres" wants a figure and a gap printed as "____ in length" may want a figure and a unit. And the word class, which is the same specification you learned to read in unit 22 cycle 1 and which applies identically here. Spend the thirty seconds before the recording reading what the notes already say, and you will stop writing twelve pounds fifty into a gap that begins with a pound sign.',
    worked=[
      'The notes: “Annual rent: £____________ per ten-rod plot.”',
      'The gap has given you the currency and the unit. It wants a figure and nothing else.',
      'The recording: “...it is twelve pounds fifty a year for a full ten-rod plot, which has not changed since 2019.”',
      'The answer is 12.50. Not £12.50, which repeats the currency; not twelve pounds fifty, which repeats it in words; not 12.50 per plot, which repeats the unit.',
      'Three ways of writing the right answer wrongly, and all three are avoidable by reading the gap first.',
     ],
    figure={'kind': 'anatomy', 'teaches': 'question-anatomy', 'qtype': 'Note completion', 'sub': 'cycle 1, question 12', 'stem': 'Annual rent: £____________ per ten-rod plot', 'options': ['12.50', '£12.50', 'twelve pounds fifty', '12.50 per plot'], 'answer': 0, 'why': 'The notes have already printed the currency symbol and the unit, so the gap wants the figure alone.', 'trap': (1, 'The commonest wrong answer in this whole task type. It is the right amount, written out as a candidate would write it on a form rather than into a gap that already has a pound sign in front of it.'), 'note': 'All four options convey the correct amount. Three of them score zero, and the difference is entirely in what the notes had already supplied.'},
    task='For each gap, say what form the answer should take.',
    items=[
     ('Annual rent: £____________ per plot', None,
      'a figure only'),
     ('Plot size: ____________ rods', None,
      'a number only'),
     ('Length of waiting list: ____________', None,
      'a number and unit'),
     ('Inspections take place every ____________', None,
      'a period of time'),
     ('Site secretary: ____________ (surname)', None,
      'a surname, spelled'),
     ('The plot must be ____________ cultivated', None,
      'an adverb'),
    ],
    note='Not one of these required you to hear anything. All six were answerable from the printed notes, in about twenty seconds, before the recording began - which is exactly when you should do it.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 1 · six moves the questions make', 'pairs': [('land not being worked', 'uncultivated', 'negation'), ('letting it to somebody else', 'subletting', 'nominalisation'), ('they check the plots', 'inspections are carried out', 'voice'), ('the rent for a year', 'the annual rent', 'reformulation'), ('beans, onions and potatoes', 'produce', 'hypernym'), ('told to leave', 'served notice to quit', 'synonym')], 'note': 'The third is the one the note-completion gaps are built on: an active phrase in the question and a passive noun phrase in the recording.'},
   ],
   advice='In the thirty seconds before each Listening section, read the gaps and not the questions. Note what each gap already supplies - a currency, a unit, an article - and what class of word it needs. That half-minute is the only preparation the paper gives you and it is worth two or three marks a section, which over four sections is most of a band.',
   debrief=dict(
    read=[
      'Question 6 asks what a tenant must do and an option says what a tenant may do. Modal verbs again, from unit 26 cycle 1.',
      'Question 9 wants the noun and the notice uses the verb. The word-family table in this cycle has the pair, and the stress moves.',
      'In the matching set two sources mention the waiting list and only one proposes anything about it.',
     ],
    listen=[
      'The secretary gives the rent with the currency in words and the notes print the symbol. Write the figure.',
      'Question 15 asks for a surname and it is spelled once, after being said once. The spelling is the answer.',
     ]),
   outside='Reading what a form has already told you before you fill it in is a small habit with a large return, and it is the reason some people’s applications come back and others do not. Almost every rejected form was rejected for its form rather than its content.',
   recycled=[
      'tenancy',
      'eligible',
      'criteria',
      'evidence',
      'rotation',
      'cultivation',
     ],
   read=[
    dict(preview=True,
         heading='Three words from an allotment agreement',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before four hundred. The third of these is the one that ends tenancies.',
         paras=[
          'A plot is the unit of land let to one household, and the standard size is ten rods - about 250 square metres, or a quarter of a tennis court and a half. Half-plots are increasingly common because the waiting lists are long and because ten rods is more work than most households expect.',
          'The letting season is the period during which plots are allocated and rents fall due, and it is not the calendar year: most sites run from autumn, so that a new tenant has the winter to clear the ground before anything needs planting.',
          'A cultivation rule is the condition that the plot must actually be worked. Typically three-quarters of it must be in cultivation, inspected twice a year, and failure brings a warning and then a notice to quit. This is the clause almost every dispute is about, because what counts as cultivated is a judgement and the person making it is a volunteer.',
          'Three words, one of which is a size, one a calendar and one a condition - and the condition is the one that decides who keeps their plot.',
         ],
         items=[
          ('The standard plot is ten ____________.',
           None, 'rods',
           'Paragraph 1: about 250 square metres.'),
          ('Most sites run their letting season from ____________.',
           None, 'autumn',
           'Paragraph 2, so a new tenant has the winter to clear the ground.'),
          ('The condition that the plot must be worked is the ____________ rule.',
           None, 'cultivation',
           'Paragraph 3: typically three-quarters, inspected twice a year.'),
         ]),
    dict(heading='Allotment rules and the waiting list',
         kind='Council notice', task='Multiple choice and sentence completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A rules notice is read for the conditions that end the '
                'agreement',
                ['Any notice setting out rules for something you rent has a '
                 'short list of things that will end the arrangement.',
                 'Mark that list as you read. Those sentences carry more of '
                 'the questions than anything else in the notice, and more '
                 'of the consequences in real life.']),
         paras=[
          'The council maintains four allotment sites with a total of three '
          'hundred and twelve plots. A full plot measures approximately 250 '
          'square metres; half plots are available at all four sites and are '
          'now the more common letting, because most new tenants find a full '
          'plot more than they can manage.',
          'The annual rent is £62 for a full plot and £35 for a half plot, '
          'payable each October. A reduction of one third applies to tenants '
          'over sixty-five and to those receiving certain benefits, and the '
          'reduction must be claimed each year rather than once.',
          'Plots must be kept in cultivation. A plot is considered '
          'uncultivated where more than a quarter of it is under weeds in '
          'the growing season. Tenants are sent one written warning and have '
          'twenty-eight days to respond; the agreement is ended only after a '
          'second inspection.',
          'Sheds are permitted up to six square metres and must be '
          'removable. Trees are not permitted, with the exception of fruit '
          'trees on dwarfing stock, which have to be approved in advance '
          'because of the shade they cast on neighbouring plots.',
          'The waiting list currently stands at one hundred and ninety names '
          'across the four sites, with an average wait of two years and nine '
          'months. Applicants may name a preferred site but will be offered '
          'any plot that becomes available, and refusing two offers returns '
          'an applicant to the end of the list.'],
         items=[
          (
           'A plot is considered uncultivated when weeds cover more '
           'than',
           ['a tenth of it', 'a quarter of it', 'half of it', 'all of it'],
           1, 'Paragraph 3, during the growing season.',
           {0: 'Less than the share paragraph 3 sets as the threshold.', 2: 'More than the proportion that triggers a warning.', 3: 'A quarter is enough, so total cover is not required.'}),
          ('The rent reduction for older tenants must be',
           ['applied once', 'claimed each year', 'requested in writing only', 'agreed by the committee'],
           1, 'Paragraph 2, which gives a reduction of one third.',
           {0: 'Paragraph 2 says it must be claimed each year, not '
               'once.', 2: 'The form of the claim is not specified in paragraph 2.', 3: 'No committee decision is mentioned for the reduction.'}),
          ('Refusing two offers of a plot means an applicant',
           ['loses the reduction', 'returns to the end of the list', 'waits six months', 'must reapply in writing'],
           1,
           'Paragraph 5, where the average wait is two years nine '
           'months.',
           {0: 'The reduction applies to tenants, not to applicants.', 2: 'No six-month penalty appears in paragraph 5.', 3: 'Nothing in paragraph 5 requires a new written '
               'application.'}),
          ('Half plots are now the more common ____________.', None,
           'letting',
           'Paragraph 1, because new tenants find a full plot too much.'),
          ('Only fruit trees on ____________ stock may be planted.', None,
           'dwarfing',
           'Paragraph 4, and these must be approved in advance.')]),
    dict(heading='Applying for a plot',
         kind='Procedure notice', task='Sentence completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Apply online, naming a preferred site. There is no charge to join '
          'the list and no advantage in applying to more than one council, '
          'since the four sites are administered together and a duplicate '
          'application is removed.',
          'You will be sent a confirmation with your position on the list. '
          'That position is reviewed each January, and it is worth checking, '
          'because about a fifth of people on the list have moved away and '
          'are removed at the review, which moves everybody else up.',
          'When a plot becomes available you will be telephoned and will have '
          'seven days to view it and accept. A plot that has been empty for a '
          'season is usually in poor condition, and you may ask for the '
          'council to clear it once before you take it on.',
          'On accepting, you sign a tenancy agreement and pay the rent for '
          'the remainder of the year, calculated by quarter. Keys to the site '
          'gate are issued by the site secretary and not by the council '
          'office, which is the part people find confusing.'],
         items=[
          ('There is no advantage in applying to more than one '
           '____________.', None, 'council',
           'Paragraph 1, because the four sites are administered together.'),
          ('List positions are reviewed each ____________.', None,
           'January', 'Paragraph 2, when about a fifth of names are '
           'removed.'),
          ('You have ____________ days to view and accept a plot.', None,
           'seven', 'Paragraph 3, after being telephoned.'),
          ('Gate keys are issued by the site ____________.', None,
           'secretary', 'Paragraph 4, rather than by the council office.')])],
   listen=[
    dict(heading='Applying for an allotment', part='Part 1',
         task='A call to an allotments office · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Officer', 'Allotments, Priyanka speaking.'),
          ('Caller', 'Hello. I would like to go on the waiting list.'),
          ('Officer', 'Of course. Full plot or half?'),
          ('Caller', 'A full one, I think. I have grown vegetables in the '
           'garden for years.'),
          ('Officer', 'May I talk you out of that? A full plot is two hundred '
           'and fifty square metres, which is about four times a large '
           'garden bed, and roughly half of our new full-plot tenants give up '
           'in the second summer.'),
          ('Caller', 'That is more than I expected.'),
          ('Officer', 'It is the weeds rather than the growing. A half plot '
           'is thirty-five pounds instead of sixty-two, and you can always '
           'ask for the other half later, which comes up more often than you '
           'would think.'),
          ('Caller', 'A half plot, then. How long is the wait?'),
          ('Officer', 'Two years and nine months on average across the four '
           'sites. Which site would you prefer?'),
          ('Caller', 'Marlow Road, if possible. It is nearest.'),
          ('Officer', 'Noted as a preference, but I should say you will be '
           'offered whatever comes up first, and refusing two offers puts you '
           'back at the end.'),
          ('Caller', 'Then I will take anything.'),
          ('Officer', 'Sensible. One other thing: check your position each '
           'January, because about a fifth of the list has moved away and is '
           'removed at the review. People wait three years without knowing '
           'they have been at the top since February.'),
          ('Caller', 'I would never have thought to check.'),
          ('Officer', 'Nobody does. And when you are offered a plot, ask us '
           'to clear it once before you sign. We will, and almost nobody '
           'asks.')],
         items=[
          ('A full plot measures about ____________ square metres.', None,
           '250', 'Which the officer says is too much for most new '
           'tenants.'),
          ('Half plot rent: £____________', None, '35',
           'Against £62 a year for a full plot.'),
          ('Average wait: two years and ____________ months', None, 'nine',
           'The average wait across all four sites.'),
          ('Preferred site: ____________ Road', None, 'Marlow',
           'Recorded as a preference only.'),
          ('List positions are reviewed each ____________.', None,
           'January', 'When about a fifth of names are removed.')]),
    dict(heading='A short talk: what a shortage looks like', part='Part 2',
         task='A talk at a supply management seminar · sentence completion and multiple choice', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I managed fresh produce buying for a supermarket chain '
           'for eleven years, and I want to describe what a shortage actually '
           'is, because the public version of it is wrong in a way that '
           'matters.'),
          ('Speaker', 'A shortage is almost never a lack of food. In the weeks '
           'people remember, there was food in the country and it was in the '
           'wrong place, in the wrong size of box, or two days later than the '
           'shelf needed it. We had tomatoes in a warehouse eleven miles from '
           'empty shelves.'),
          ('Speaker', 'The reason is that the whole system runs with almost '
           'no slack. A store holds a day and a half of stock and no more, '
           'because holding stock costs money and spoils fruit. That is a '
           'genuinely good design nine hundred and ninety days out of a '
           'thousand, and on the other ten it fails completely rather than '
           'partly.'),
          ('Speaker', 'The second thing nobody expects is that buying '
           'behaviour does most of the damage. A normal week has about two '
           'per cent of households buying any given item. Put an empty shelf '
           'on the news and that goes to six, which is three times the '
           'demand against a system with a day and a half of cover. The '
           'shortage then becomes real, and it was caused by the reporting of '
           'a shortage that was not.'),
          ('Speaker', 'Which gives you the awkward conclusion I have argued '
           'about for a decade. The honest advice to the public during a '
           'supply problem is to buy normally, and telling people there is a '
           'problem makes them stop buying normally. I have never found a way '
           'round that and I no longer think there is one.'),
          ('Speaker', 'What does work is dull and nobody campaigns for it: '
           'two suppliers for every line instead of one, a week of buffer on '
           'twenty staple items rather than a day and a half, and the '
           'willingness to pay for both in the years when neither is '
           'needed.')],
         items=[
          (
           'The speaker says a shortage is almost never a ____________ '
           'of food.', None, 'lack',
           'The food was in the wrong place or arrived two days late.'),
          (
           'A store typically holds a day and a ____________ of stock.',
           None, 'half',
           'Because holding stock costs money and spoils fruit.'),
          (
           'In a normal week, ____________ per cent of households buys '
           'a given item.', None, 'two',
           'Rising to six per cent once a shortage is reported.'),
          ('What does the speaker say actually works?',
           ['Better forecasting', 'Two suppliers per line and a week of buffer', 'Price rises', 'Public information'],
           1, 'Paid for in the years when neither is needed.',
           {0: 'Forecasting is not among the measures he endorses.', 2: 'Price rises are not part of his answer.', 3: 'Public information is what he says makes things worse.'})])],
   speak=dict(
    part='Part 1', focus='Growing or buying food',
    intro=('Two or three sentences each. Concrete food beats general '
           'opinion.'),
    qs=['Do you or your family grow any food?',
        'Where do you usually buy food?',
        'Has the way you shop for food changed?',
        'Do you cook much at home?'],
    shape=[('answer', 'Tomatoes and far too much mint.'),
           ('support', 'My father keeps a half plot ten minutes away.'),
           ('follow-up', 'Which produces about four weeks of vegetables and '
            'a great deal of satisfaction.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking the council to open more allotments',
         prompt=('You would like your council to provide more allotments. '
                 'Write a letter to the council. In your letter: explain why '
                 'more are needed; suggest where they could be; say what you '
                 'would be willing to do. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about the allotment waiting list, and to propose a '
          'specific site which I believe could be brought back into use at '
          'very little cost.',
          'The need is measurable. The list stands at one hundred and ninety '
          'names for three hundred and twelve plots, and the average wait is '
          'two years and nine months. A wait of that length means that most '
          'applicants are offered a plot at a different stage of life from '
          'the one in which they applied.',
          'I should like to propose that the disused site at Fennimore Lane '
          'be brought back into cultivation. It was let as allotments until '
          '2011, the water supply is still connected according to the water '
          'company, and the land is council-owned and shown as open space in '
          'the local plan. It would provide, on my own measurement, about '
          'twenty-four half plots.',
          'I recognise that the obstacle is the cost of clearance rather '
          'than the principle. I am therefore writing on behalf of eleven '
          'people on the waiting list who have agreed to clear the site '
          'themselves over two weekends if the council will provide a skip '
          'and confirm the boundary. We would also take on the site '
          'secretary role from the first season.',
          'I would be glad to meet an officer on the site.',
          'Yours faithfully,',
          'H. Vanterpool-Oyelaran'],
         notes=[
          'The need is given as three numbers and then as one consequence: '
          'applicants are offered a plot at a different stage of life. A '
          'sentence like that is what a committee quotes back.',
          'The proposed site arrives with its three likely objections '
          'already answered — ownership, water, planning status — which is '
          'what turns a suggestion into a proposal.',
          'The final offer identifies the real obstacle, which is cost, and '
          'removes it. Offering labour rather than requesting money is the '
          'single most effective move available in a letter of this kind.'],
         criterion=[('Need as numbers plus one consequence',
                     'Task Achievement'),
                    ('Objections answered before they are raised',
                     'Task Response'),
                    ('Identifying and removing the real obstacle',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L27',
    context=[
      'From the letter in this cycle:',
      'I am writing on behalf of the Mill Lane plot-holders to propose that the uncultivated strip along the eastern boundary be brought back into use. Eleven households on the waiting list have agreed to clear it themselves, and we would undertake to meet the cost of a skip. I should be grateful if you could let me know whether the committee would consider this at its next meeting.',
     ],
    notice=[
     ('The writer asks for something and offers something. Copy out the offer.', None,
      'Eleven households have agreed to clear it themselves, and we would undertake to meet the cost of a skip'),
     ('Why "would consider" rather than "will agree"?', None,
      'it asks the committee to look at the proposal rather than to accept it, which is what a committee can actually do at a meeting'),
    ],
    noticetask='Answer both from the letter above, which you read earlier in this cycle.',
    contrast='A proposal letter has four parts in a fixed order - what you want, why it is reasonable, what you will do, what you are asking the reader to do - and the third is the one learners omit. A request with an offer attached is a partnership and a request without one is a demand, however politely it is phrased, and General Training Task 1 is marked on exactly that difference. Note also the modesty of the ask: would consider, rather than will agree, because asking somebody to do something they cannot do at that meeting is how a reasonable proposal gets refused.',
    task2='Rewrite each request so that it offers something and asks for what the reader can actually give.',
    items2=[
     ('Clear the strip for us.', None,
      'We would undertake to clear the strip ourselves if the committee would permit it.'),
     ('Correct: I am writing for propose a change.', None,
      'I am writing to propose a change.'),
     ('You must shorten the waiting list.', None,
      'I should be grateful if you could let me know whether a half-plot scheme could be considered.'),
     ('Correct: we would undertake meeting the cost.', None,
      'we would undertake to meet the cost'),
    ],
    task3='Now write the proposal. You want something changed where you live and you can offer something in return. Write the proposal, the justification and the offer, about eighty words, and ask for what the reader can actually give.',
    items3=8,
    point='Proposal and justification in a formal letter',
    explain=('A proposal needs three things in order: the need, the '
             'suggestion, and what you will do about it. The subjunctive '
             '"that X be done" is the standard formal register for the '
             'middle one.'),
    examples=['I should like to propose that the disused site at Fennimore '
              'Lane be brought back into cultivation.',
              'I would ask that the boundary be confirmed before work '
              'begins.',
              'I recognise that the obstacle is the cost rather than the '
              'principle.',
              'Eleven people have agreed to clear the site themselves.'],
    task='Rewrite each request as a formal proposal.',
    items=[('You should open the old site again.',
            'I should like to propose that the former site at Fennimore Lane '
            'be reopened.'),
           ('Clear the land.',
            'I would ask that the land be cleared, or that we be permitted to '
            'clear it ourselves.'),
           ('We need more plots.',
            'I should like to propose that additional half plots be provided '
            'at the two largest sites.'),
           ('Tell us where the boundary is.',
            'I would be grateful if the boundary could be confirmed before '
            'any work begins.'),
           ('We will help.',
            'Eleven applicants have agreed to carry out the clearance '
            'themselves over two weekends.')]),
   vocab=[('allotment', 'a small plot of rented land for growing food'),
          ('cultivation', 'the active growing of crops on land'),
          ('plot', 'a measured piece of ground'),
          ('letting', 'an arrangement by which land is rented'),
          ('dwarfing stock', 'a root that keeps a fruit tree small'),
          ('waiting list', 'an ordered list of people waiting'),
          ('clearance', 'removing vegetation and rubbish from land'),
          ('skip', 'a large open container for rubbish')],
   expr=[('I should like to propose that X be brought back',
          'the formal register for a proposal'),
         ('The need is measurable',
          'signals that figures are about to follow'),
         ('the obstacle is the cost rather than the principle',
          'identifies the real objection'),
         ('May I talk you out of that?',
          'offers unwelcome advice politely')],
   trans=['furthermore', 'in this connection', 'I should like to propose',
          'I recognise that'],
  ),

  dict(
   sub='What a shortage looks like',
   step=2,
   notes=dict(
    serves='Yes/No/Not Given and matching features, Reading Part 2; sentence completion and short answer in Listening Part 2',
    because='In a matching-features set one source almost always changes position during its own text, and candidates attribute whichever half they read first, because nothing has told them a source can hold two views in sequence',
    skill='Tracking a source that shifts, and attributing its settled position rather than its opening one',
    evidence='Unit 24 cycle 2 taught this for Part 3 listening, where speakers change their minds aloud; in reading it is harder, because the shift is silent and the paragraph does not announce it',
    watch='Learners will give source B the position in its first sentence. B spends the next four lines abandoning it. Expect it',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='There was more flour than the month before',
    body='Almost every shortage you will live through is not a shortage of the thing. It is a shortage of the thing in the form you want it, at the moment you want it, in the place you are. Flour exists; flour in one-kilo bags, this week, in this shop does not. The word for what has been removed is slack, and the argument in this cycle is about whether removing it was a mistake or merely a bet.',
    task='Answer these before you read, and mark which of the four sources you expect to agree with.',
    qs=[
        'Have you lived through a shortage? What was actually missing?',
        'Who should pay for spare capacity that is unused for nine years out of ten?',
        'Is a system that fails once a decade badly designed, or efficiently designed?',
        'What would you want kept in reserve, if somebody had to pay for it?',
       ]),
   vocabwork=dict(
    title='The vocabulary of a system under strain',
    body='Thirteen words about why things run out. They are the vocabulary of any supply chain - food, medicine, components, staff - and five of them you met in unit 22 cycle 4, where the subject was a labour market absorbing a shock. The structure of the argument is identical.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'why a system runs out', 'sub': 'cycle 2 · five of these are from unit 22 cycle 4', 'branches': [('the design', ['just-in-time', 'slack', 'buffer', 'reserve']), ('the shock', ['disruption', 'surge', 'hoarding', 'bottleneck']), ('the goods', ['perishable', 'packer', 'staple', 'substitution']), ('the response', ['rationing', 'allocation', 'resilience', 'redundancy'])], 'note': 'Redundancy here means deliberate spare capacity, not dismissal. Two systems with the same output and different redundancy behave identically for years and differently for one week, and the week is the whole argument.'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How much spare is there?', 'sub': 'cycle 2 · the language of capacity', 'left': 'running at the limit', 'right': 'heavily over-provided', 'items': [('at capacity', 0.04), ('close to capacity', 0.2), ('with little headroom', 0.34), ('with some slack', 0.56), ('comfortably within capacity', 0.76), ('substantially under-used', 0.94)], 'note': 'At capacity sounds like a success and is a description of a system with no answer to a bad week. Three of the matching questions in this cycle turn on which end of this line each source thinks is correct.'},
    task='Complete each with a word or phrase from this cycle.',
    items=[
     ('Spare capacity kept deliberately is ____________.', None,
      'slack'),
     ('A stock held against a shortage is a ____________.', None,
      'reserve'),
     ('The narrowest point in a supply chain is the ____________.', None,
      'bottleneck'),
     ('Buying more than you need because others might is ____________.', None,
      'hoarding'),
     ('Food that does not keep is ____________.', None,
      'perishable'),
     ('Deliberate duplication so that one failure is survivable is ____________.', None,
      'redundancy'),
     ('The phrase on the cline for no spare at all: at ____________.', None,
      'capacity'),
     ('The ability to take a shock and recover is ____________.', None,
      'resilience'),
    ]),
   builder=dict(
    skill='Matching features: the source that changes its mind',
    qkind='skill',
    explain='A matching-features set is built on four or five short texts, and in almost every set one of them moves. It opens with a position, meets an objection it takes seriously, and finishes somewhere else - and because the text is short and the shift is silent, a candidate who reads the first sentence and moves on will attribute the abandoned view. Three signals mark the turn and all three are worth watching for. A concession that is too generous: I used to think, there is more to this than, I was wrong about. An explicit revision: on reflection, having looked at the figures, since writing the above. And a final sentence that contradicts the opening one without acknowledging it, which is the hardest and the commonest. The rule is simple once you expect it: read every source to its last sentence before attributing anything, and when a source has moved, attribute where it ended. The examiner wrote the shift deliberately and the mark is for noticing it.',
    worked=[
      'SOURCE B: “The retailers were plainly at fault; nobody was short of flour and the shelves were empty. Having looked at the packing figures, I would put it differently now. The lines were at capacity before the surge and nothing short of idle plant would have met it. The fault, if there is one, is a decade old and belongs to whoever decided that idle plant is waste.”',
      'The opening position: the retailers were at fault.',
      'The signal: "Having looked at the packing figures, I would put it differently now."',
      'The settled position: the fault is a decade old and is about capacity decisions, not retailers.',
      'A statement reading "the retailers were responsible" therefore does NOT match B, although B contains that sentence almost word for word in its first line.',
     ],
    figure={'kind': 'listenmap', 'teaches': 'listening-shape', 'title': 'One source, two positions', 'sub': 'cycle 2 · where source B actually ends up', 'speakers': ['Source B'], 'turns': [(0, 'opens: retailers', False), (0, 'the signal', True), (0, 'the figures', False), (0, 'settles: capacity', True)], 'note': 'Two of the four moves carry the answer and neither is the first. A short text can have a shape as much as a recording can, and this one has exactly the shape of a Part 3 discussion compressed into eighty words.'},
    task='For each extract say OPENING or SETTLED, and give the signal if there is one.',
    items=[
     ('“The retailers were plainly at fault.”', None,
      'opening'),
     ('“Having looked at the figures, I would put it differently.”', None,
      'settled, having looked'),
     ('“I used to think this was about hoarding.”', None,
      'opening, I used to think'),
     ('“The fault is a decade old.”', None,
      'settled'),
     ('“On reflection the packers were doing what they were paid to do.”', None,
      'settled, on reflection'),
     ('“Nobody was short of flour.”', None,
      'opening'),
    ],
    note='Three of the six carry an explicit signal and three do not. The three without are the ones that matter, and the only defence against them is reading the source to its last sentence, which takes about fifteen seconds a source.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 2 · the matching set turns on these', 'pairs': [('there was spare capacity', 'the lines had headroom', 'reformulation'), ('they buy more than they need', 'hoarding occurs', 'nominalisation'), ('nothing was left over', 'the system ran at capacity', 'negation'), ('flour, rice and pasta', 'staples', 'hypernym'), ('the shops were blamed', 'fault was attributed to retailers', 'voice'), ('it cannot absorb a shock', 'the system lacks resilience', 'synonym')], 'note': 'The third is the one that catches readers: a negative in the statement and a positive technical phrase in the text, describing the same fact.'},
   ],
   advice='Read every source to its last sentence before you attribute anything. In almost every matching-features set one source has moved during its own text, and the examiner is testing whether you read to the end. Fifteen seconds a source is the cost and it is cheaper than the two minutes you will spend reconciling an attribution that will not fit.',
   debrief=dict(
    read=[
      'Source B opens by blaming retailers and ends by blaming a capacity decision ten years earlier. The signal is "having looked at the packing figures".',
      'Statement 24 matches source B’s first sentence and matches nobody’s settled view.',
      'The Yes/No/Not Given statement about hoarding is one the passage reports and then measures, finding it smaller than claimed. Reported, then answered with a figure.',
     ],
    listen=[
      'Ms Okafor says "it was packaging" is the interviewer’s word and corrects it to slack. The correction is the answer.',
      'She gives two percentages and one of them is about bakeries rather than households.',
     ]),
   outside='People change their minds in the middle of saying things, and reading only the beginning of what somebody wrote is how most misquotation happens. Reading to the last sentence is a courtesy and a defence at the same time.',
   recycled=[
      'slack',
      'resilience',
      'evidence',
      'capacity',
      'disruption',
      'allocation',
     ],
   read=[
    dict(heading='Four shoppers in a week of empty shelves',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Perpetua: I bought four packets of flour and I knew while I was '
          'doing it that I was part of the problem. There was no shortage of '
          'flour on the Tuesday. By Thursday there was, and about a tenth of '
          'the reason was me, which is an uncomfortable thing to be able to '
          'calculate.',
          'B  Ruairi: I noticed nothing and I would like to put that on '
          'record, because everybody now remembers a crisis. I cook from '
          'whatever is there, so a shelf without tomatoes is a week of '
          'something else. It only becomes a shortage if you have decided in '
          'advance what you are having.',
          'C  Jacinta: What struck me was how local it was. Our shop had no '
          'eggs for nine days and the shop four streets away had them '
          'throughout. That told me the problem was delivery rather than '
          'supply, which the news was not saying at any point that week.',
          'D  Olamide: I run a cafe and I switched suppliers twice in ten '
          'days. The thing nobody mentions is that a small business can do '
          'that and a supermarket cannot, because their systems are built '
          'for one lorry at one hour. Being small was the whole of my '
          'advantage and it is usually my problem.'],
         items=[
          ('Which person admits to contributing to the shortage?',
           ['Perpetua', 'Ruairi', 'Jacinta', 'Olamide'], 0,
           'She calculates her own share of the cause at about a '
           'tenth.',
           {1: 'Ruairi noticed nothing unusual.', 2: 'Jacinta inferred the cause from a local difference.', 3: 'Olamide benefited from being able to change suppliers.'}),
          ('Which person noticed nothing unusual?',
           ['Perpetua', 'Ruairi', 'Jacinta', 'Olamide'], 1,
           'He cooks from whatever is available.',
           {0: 'Perpetua admits to contributing to the shortage.', 2: 'Jacinta inferred the cause from a local difference.', 3: 'Olamide benefited from being able to change suppliers.'}),
          ('Which person inferred the cause from a local difference?',
           ['Perpetua', 'Ruairi', 'Jacinta', 'Olamide'], 2,
           'One shop had no eggs for nine days and another nearby had '
           'them throughout.',
           {0: 'Perpetua admits to contributing to the shortage.', 1: 'Ruairi noticed nothing unusual.', 3: 'Olamide benefited from being able to change suppliers.'}),
          (
           'Which person benefited from being able to change '
           'suppliers?',
           ['Perpetua', 'Ruairi', 'Jacinta', 'Olamide'], 3,
           'A small business can switch and a supermarket cannot.',
           {0: 'Perpetua admits to contributing to the shortage.', 1: 'Ruairi noticed nothing unusual.', 2: 'Jacinta inferred the cause from a local difference.'}),
          (
           'Ruairi believes other people are exaggerating what '
           'happened.', ['Yes', 'No', 'Not Given'], 0,
           'He says everybody now remembers a crisis and wants his own '
           'experience on record.',
           {1: 'No would need him to accept their account; he wants '
               'his own on record.', 2: 'Not Given is wrong because he comments on what '
               'everybody now remembers.'}),
          ('Jacinta complained to her shop about the eggs.',
           ['Yes', 'No', 'Not Given'], 2,
           'She describes what she noticed and inferred; no complaint '
           'is mentioned.',
           {0: 'Yes would need a complaint, and none is mentioned.', 1: 'No would need her to say she did not, and she never '
               'raises it.'})])],
   listen=[
    dict(preview=True,
         heading='A buyer explaining why the shelves were empty',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The Part 2 you are about to hear is about a shortage that was not a shortage. Ninety seconds on the mechanism.',
         script=[
          ('Interviewer',
           'There was no flour for three weeks. Was there no flour?'),
          ('Ms Okafor',
           'There was more flour in the country that month than the month before. What there was not was flour in small bags.'),
          ('Interviewer',
           'Explain that.'),
          ('Ms Okafor',
           'Ninety per cent of flour goes to bakeries in sixteen-kilo sacks. The packing lines for one-kilo retail bags run at about capacity all year, because nobody builds capacity they do not use. Households doubled their buying in a fortnight. The packing lines could not double.'),
          ('Interviewer',
           'So it was packaging.'),
          ('Ms Okafor',
           'It was the absence of slack. Every efficient system removes slack, because slack costs money every day and earns nothing until the week you need it. We had optimised the packing lines for a world where demand does not move.'),
          ('Interviewer',
           'And the lesson?'),
          ('Ms Okafor',
           'That resilience is a cost, not a benefit, and anyone who tells you it is free is selling you something that will fail quietly at the worst moment.'),
         ],
         items=[
          ('Ms Okafor says what was missing was flour in small ____________.',
           None, 'bags',
           'Her first answer: there was more flour than the month before.'),
          ('Ninety per cent of flour goes to bakeries in ____________-kilo sacks.',
           None, 'sixteen',
           'Her second answer, which explains the packing lines.'),
          ('She says the real problem was the absence of ____________.',
           None, 'slack',
           'Her third answer, and the thesis of the whole cycle.'),
         ]),
    dict(heading='Two buyers on supply problems', part='Part 3',
         task='A conversation between two food buyers · short answer and sentence completion', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Esperanza', 'How bad was yours?'),
          ('Kwabena', 'Nine days on eggs, two on tomatoes, and a fortnight '
           'of being shouted at.'),
          ('Esperanza', 'We had almost nothing, and I have been trying to '
           'work out why, because we buy from the same two packers you do.'),
          ('Kwabena', 'Do you still hold three days on the staples?'),
          ('Esperanza', 'Five, since 2021. It costs us about eighty thousand '
           'a year in stock and space, and my finance director raises it '
           'every single budget.'),
          ('Kwabena', 'Then that is your answer and it is also the argument I '
           'keep losing. We went to a day and a half because the saving is '
           'visible every month and the cost of not having it appears once in '
           'four years.'),
          ('Esperanza', 'Which makes it an impossible case to win in a '
           'budget meeting.'),
          ('Kwabena', 'It is worse than impossible. The person who argued '
           'for the buffer gets nothing when it works, because nothing '
           'happens, and the person who cut it has four years of savings on '
           'their record before the bill arrives.'),
          ('Esperanza', 'I would push back on one thing, though. Buffer is '
           'not the whole story for us. The bigger change was two packers '
           'instead of one on every line.'),
          ('Kwabena', 'Which costs you how much?'),
          ('Esperanza', 'Three to four per cent on price, because neither '
           'gets the whole volume. And it is the thing I would protect if I '
           'had to choose, because a buffer runs out and a second supplier '
           'does not.'),
          ('Kwabena', 'That is a better argument than the one I have been '
           'making. Can I quote you to my board?'),
          ('Esperanza', 'Quote the number. Three to four per cent against a '
           'fortnight of empty shelves is the only version of this they will '
           'hear.'),
          ('Kwabena', 'And if they ask what it cost you in the years when '
           'it worked?'),
          ('Esperanza', 'Tell them nothing visible happened, which is the '
           'problem with this whole subject. The year our competitors had '
           'nine days without eggs we had two, and no board paper anywhere '
           'records that as a success.')],
         items=[
          ('How long was Kwabena short of eggs?', None, 'nine days',
           'With two days on tomatoes and a fortnight of complaints.'),
          ('Esperanza holds ____________ days of stock on staples.',
           None, 'five', 'At a cost of about eighty thousand a year.'),
          (
           'The buffer argument is hard to win because its benefit is '
           '____________ when it works.', None, 'invisible',
           'While the saving from cutting it shows every month.'),
          (
           'Esperanza says what mattered more than the buffer was two '
           '____________ on every line.', None, 'packers',
           'At a cost of three to four per cent on price.'),
          (
           'She would protect that first because a buffer runs '
           '____________ and a second supplier does not.',
           None, 'out',
           'Which Kwabena calls a better argument than his own.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Shortage',
    longturn=[('The thing I needed and could not get was a particular '
               'antibiotic, prescribed for an infection after a small '
               'operation.'),
              ('I needed it because the first one had not worked and the '
               'surgeon had changed it, and the new prescription had to start '
               'that day rather than at some convenient point later in the '
               'week.'),
              ('What I did instead took most of an afternoon. The nearest '
               'pharmacy had none, the second said three days, and the third '
               'phoned round four others for me, which was far beyond what I '
               'could have asked for. In the end a pharmacy two towns away had '
               'two boxes, and I took two buses and collected them. The '
               'shortage, it turned out, was national and had been going on '
               'for weeks, and nobody had mentioned it when the prescription '
               'was written.'),
              ('What it changed is small and permanent. I now ask, when '
               'anything is prescribed, whether it is actually available, '
               'which I had never thought to ask before because I had assumed '
               'availability was somebody else\'s problem. More generally I '
               'stopped thinking of supply as a background condition. A thing '
               'can be manufactured, approved, prescribed and paid for, and '
               'still not be in the building, and the whole chain is invisible '
               'until one link in it fails.')],
    intro=('Short answers, then the long turn. Keep the four bullets in '
           'order and give the fourth one real weight.'),
    cue=('Describe a time something you needed was unavailable.',
         ['what it was', 'why you needed it', 'what you did instead',
          'and explain how the experience changed what you do now']),
    qs=['Is it ever difficult to buy what you need where you live?',
        'Do people in your country keep food at home?',
        'Now look at the card. You have one minute to make notes.',
        'Should governments keep stores of food?'],
    shape=[('answer', 'Bread flour, for about three weeks.'),
           ('support', 'I had started baking and it had become the week’s '
            'one reliable thing.'),
           ('follow-up', 'I used a mix of plain flour and semolina, which '
            'was worse but edible.'),
           ('support', 'What changed is that I now keep two kilos ahead.'),
           ('follow-up', 'Which is exactly the behaviour that caused the '
            'shortage, and I do it anyway.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should countries produce all their own food?',
         prompt=('Some people believe every country should aim to produce '
                 'all the food it needs. Others think trade is a better way '
                 'to ensure supply. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Both positions in this argument are really claims about which risk '
          'is worse: depending on a harvest, or depending on a border. Put '
          'that way, the answer is unlikely to be all of one and none of the '
          'other, and the interesting question is which items belong in which '
          'category.',
          'The case for producing your own food is a case about control. A '
          'country growing its own staples is not exposed to an export ban, a '
          'closed strait or a currency collapse, and these are not '
          'hypothetical events; several have happened in the last five '
          'years.',
          'The case for trade is a case about diversification, and it is '
          'usually stated badly as a case about cost. A country relying on '
          'its own harvest has one weather system. A country buying from five '
          'regions has five, and a drought in any one of them raises its '
          'prices rather than emptying its shelves. Self-sufficiency '
          'concentrates risk in exactly the way that insurance exists to '
          'prevent.',
          'My own view is that the two arguments apply to different foods, '
          'which is why the general question cannot be answered. For staples '
          'that store — grain, oils, pulses — domestic production plus a '
          'real reserve is worth paying for, because these are what a '
          'population cannot do without for a season. For perishables, and '
          'for anything whose climate the country does not have, trade is not '
          'merely cheaper but more reliable.',
          'What matters more than either, and appears in neither version of '
          'the argument, is slack. A system with two suppliers for every item '
          'and a fortnight of reserve survives most disruptions whether the '
          'food came from inside the country or outside it. Slack is cheap to '
          'buy in advance, expensive to acquire in a crisis, and politically '
          'invisible, which is a good explanation of why so little of it '
          'exists.'],
         notes=[
          'The introduction reduces both positions to one comparison: a '
          'harvest against a border. Finding the comparison the prompt is '
          'really about is the quickest way into a strong essay.',
          'Paragraph 3 improves the opposing case before answering it, '
          'replacing the cost argument with the diversification argument. '
          'This is the same move as in unit 27 and it works every time.',
          'The resolution splits the question by type of food, and then the '
          'final paragraph names something neither side discussed. An essay '
          'that ends by adding a term rather than by summarising reads as '
          'thinking rather than organising.'],
         criterion=[('Reducing both positions to one comparison',
                     'Task Response'),
                    ('Improving the opposing case before answering it',
                     'Task Response'),
                    ('Ending by adding a term rather than summarising',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    ref='L24',
    context=[
      'From text D, which you have just read:',
      'Had the packing lines been running at eighty per cent rather than at capacity, the fortnight would have passed unnoticed. Were such headroom to be required by regulation, somebody would have to pay for it in every year in which nothing happened - which is to say in almost every year. That is not an argument against doing it. It is a statement of what doing it costs.',
     ],
    notice=[
     ('The writer uses two inverted conditionals. Copy both out.', None,
      'Had the packing lines been running at eighty per cent; Were such headroom to be required'),
     ('What does the last pair of sentences do that the conditionals do not?', None,
      'it separates the cost of the measure from the case against it'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='You met the inverted conditional in unit 26 cycle 5. Here it is doing a second job: building a chain from a counterfactual past (had X been) to a hypothetical future (were X to be), which is exactly the shape of any argument about preparing for something. Note the forms: Had plus past participle for the unreal past, Were plus subject plus to-infinitive for the hypothetical future. And note the move at the end, which is worth more than the grammar: naming a cost without conceding the argument is how you stay honest and stay persuasive at the same time.',
    task2='Build the chain. Write the counterfactual past and then the hypothetical future.',
    items2=[
     ('If the lines had had headroom, nothing would have happened.', None,
      'Had the lines had headroom, nothing would have happened.'),
     ('If headroom were required by law, somebody would pay.', None,
      'Were headroom to be required by law, somebody would pay for it.'),
     ('Correct: If were the rule introduced, costs would rise.', None,
      'Were the rule introduced, costs would rise.'),
     ('Correct: Had the rule been introduced, costs will rise.', None,
      'Had the rule been introduced, costs would have risen.'),
    ],
    task3='Now write it. Take the shortage in this cycle, say what would have happened had there been slack, say what would follow were slack to be required, and then name the cost without conceding the argument. Eighty to a hundred words.',
    items3=10,
    point='Conditional and consequence chains',
    explain=('Supply arguments are chains: if this, then that, and therefore '
             'the other. English needs the links marked, and the chain has '
             'to stay short enough for a reader to carry.'),
    examples=['A system with no slack is cheap until the week it is not.',
              'If a store holds a day and a half, a doubling of demand empties '
              'it.',
              'Had there been a second supplier, the gap would have lasted two '
              'days.',
              'The saving appears monthly; the cost appears once in four '
              'years.'],
    task='Rewrite each pair as a conditional or consequence chain.',
    items=[('Stocks were low. The shelves emptied.',
            'Because stocks stood at a day and a half, a small rise in '
            'demand emptied the shelves within two days.'),
           ('There was one supplier. The gap lasted nine days.',
            'Had there been a second supplier, the nine-day gap would have '
            'been a two-day one.'),
           ('Holding stock costs money. Companies hold little.',
            'Since holding stock costs money every month, companies hold as '
            'little as they can and fail completely when they fail.'),
           ('People bought more. The shortage became real.',
            'Once buying trebled, a shortage that had not existed became a '
            'real one.'),
           ('Slack is expensive. Nobody buys it.',
            'Slack costs money in good years and is therefore bought by '
            'almost nobody until it is unobtainable.')]),
   vocab=[('resilience', 'the ability to withstand a shock'),
          ('just-in-time', 'delivering stock only as it is needed'),
          ('buffer', 'a reserve held against disruption'),
          ('slack', 'spare capacity in a system'),
          ('packer', 'a firm that packages food for sale'),
          ('perishable', 'food that will not keep'),
          ('disruption', 'an interruption to normal operation'),
          ('reserve', 'a store kept for emergencies')],
   expr=[('cheap until the week it is not',
          'states a risk hidden by an average'),
         ('the person who argued for the buffer gets nothing when it works',
          'names a problem of incentives'),
         ('a buffer runs out and a second supplier does not',
          'compares two defences by their failure mode'),
         ('three to four per cent against a fortnight of empty shelves',
          'puts a cost beside the thing it buys')],
   trans=['whereas', 'that said', 'once', 'had there been'],
  ),

  dict(
   sub='What a country grows and buys',
   step=3,
   notes=dict(
    serves='Matching information and sentence completion, Reading Parts 2-3; Task 1 Academic, two charts of the same thing',
    because='When a Task 1 gives two charts of the same quantity, the band 6 answer describes the first and then describes the second in the same words, producing 180 words of which 90 are a repetition',
    skill='Describing a second chart by its difference from the first, rather than from the beginning',
    evidence='Unit 26 cycle 3 taught joining two different visuals; this is the harder case where the two are the same quantity differently measured, and repetition is the trap',
    watch='Learners will write two parallel paragraphs with the same verbs. Ask which sentences of the second could be deleted without losing anything',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Sixty-one per cent of what?',
    body='The chart at the front of this unit gives five self-sufficiency figures for one country and they run from sixteen per cent to eighty-eight. All five are correct and they are answers to different questions: by value or by calories, all food or one category. Cycle 2 was about a shortage that was not one; this cycle is about the numbers that are quoted in every argument about whether a country can feed itself, and about why no two of them agree.',
    task='Answer these before you look at the charts.',
    qs=[
        'Does your country grow most of its own food? How do you know?',
        'Which would you rather have in a crisis - the calories or the value?',
        'Why might fruit be the lowest figure on the chart?',
        'Is self-sufficiency something to aim at, or just something to measure?',
       ]),
   vocabwork=dict(
    title='The vocabulary of what a country grows',
    body='Twelve words. Six are about production and six about the measuring of it, and the measuring half is the half that carries the marks - divisor, basis, by value, per calorie. You have now met the "of what?" question in four units with four different subjects, and this is the last of them.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'what a country grows and buys', 'sub': 'cycle 3 · the fourth time this book asks "of what?"', 'branches': [('producing', ['yield', 'holding', 'staple', 'harvest']), ('trading', ['import dependence', 'net importer', 'trade balance', 'tariff']), ('measuring', ['by value', 'by calorie', 'divisor', 'basis']), ('the gap', ['consumption', 'production', 'self-sufficiency', 'shortfall'])], 'note': 'The divisor is whatever you divided by, and naming it is the whole of honest statistics. Per hectare, per calorie, per farm, per head: four divisors, four different rankings, one set of underlying facts.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 3 · and one of these moves its stress', 'rows': [(('pro-duce', 2), ('pro-duc-tion', 2), ('pro-du-cer', 2), ('pro-duc-tive', 2), ''), (('con-sume', 2), ('con-sump-tion', 2), ('con-su-mer', 2), '', ''), (('im-port', 2), ('im-port', 1), ('im-por-ter', 2), '', ''), (('de-pend', 2), ('de-pend-ence', 2), '', ('de-pen-dent', 2), ''), (('suf-fice', 2), ('suf-fi-cien-cy', 2), '', ('suf-fi-cient', 2), '')], 'note': 'imPORT is the verb and IMport is the noun, exactly as with produce in cycle 1. English does this with about forty pairs and four of them are in this unit.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('The share of consumption that is home-produced is ____________.', None,
      'self-sufficiency'),
     ('Whatever you divided by is the ____________.', None,
      'divisor'),
     ('A country that buys more than it sells is a net ____________.', None,
      'importer'),
     ('The noun from consume meaning the amount used is ____________.', None,
      'consumption'),
     ('The staple crops of a country are its ____________.', None,
      'staples'),
     ('The amount by which production falls short is the ____________.', None,
      'shortfall'),
     ('The noun from import, stressed on the first syllable, is ____________.', None,
      'import'),
     ('Reliance on other countries for food is import ____________.', None,
      'dependence'),
    ]),
   builder=dict(
    skill='Task 1: two charts of the same thing',
    qkind='skill',
    explain='When a Task 1 gives you two charts of the same quantity - the same countries by value and by calories, the same years for two regions, the same categories in two different years - the temptation is to describe the first and then describe the second, and the result is an answer half of which is a repetition of the other half in identical words. The examiner is looking for the comparison, which means the second chart should be described by its difference from the first and not from scratch. Three sentences carry it. Describe the first chart fully but briefly, naming the measure. Then say in one sentence how the second differs in SHAPE: the same ranking with smaller gaps, the same gaps with a different order, or the same picture entirely. Then name only the exceptions - the categories where the two charts disagree most - because those are the whole reason there are two charts. Done this way, the second half of your answer is about sixty words rather than ninety, and every one of them is new.',
    worked=[
      'The charts: self-sufficiency for five food categories, by value and by calories.',
      'The first, briefly and with the measure named: “Measured by value, self-sufficiency ranges from sixteen per cent for fresh fruit to eighty-eight for cereals, with all food at sixty-one.”',
      'The second, by its difference in shape: “The calorie measure gives the same ranking throughout but compresses it, with every category except fruit moving towards the middle.”',
      'The exception, which is the point: “The largest divergence is in fresh vegetables, where the two measures differ by eleven points - a reflection of a crop that is bulky, cheap and low in calories.”',
      'What not to write: a second paragraph beginning “Measured by calories, self-sufficiency ranges from...” and repeating all five figures.',
     ],
    figure={'kind': 'ladder', 'teaches': 'band-move', 'criterion': 'Task Achievement, on two charts of one quantity', 'sub': 'cycle 3 · the second chart, three bands', 'rungs': [('5.5', 'Measured by calories, fruit is 14, vegetables 42, cereals 91, all food 54.', ''), ('6.5', 'The calorie figures follow the same pattern, though the gaps between categories are smaller.', 'the second chart described as a difference rather than from scratch'), ('7.5', 'The calorie measure preserves the ranking and compresses it, the one substantial divergence being fresh vegetables, where the two measures differ by eleven points.', 'the shape named, and the exception given as the point')], 'note': 'The third rung is shorter than the first and contains one figure rather than four. It also says something the first does not say at all.'},
    task='For each pair of observations, write the one sentence describing the second chart by its difference.',
    items=[
     ('Same order; gaps smaller.', None,
      'the same ranking, compressed'),
     ('Same gaps; order changed.', None,
      'the same spread in a different order'),
     ('Identical in all but one.', None,
      'the same picture except for fruit'),
     ('All lower by about ten.', None,
      'uniformly about ten points lower'),
     ('Two categories swap places.', None,
      'the ranking holds except that two swap'),
     ('No relation at all.', None,
      'the two measures give unrelated pictures'),
    ],
    note='Every one of the six is a statement about shape and none of them contains a figure. Shape first, then the one or two figures that prove it - which is the same instruction as unit 22 cycle 3, unit 23 cycle 3 and unit 24 cycle 3, and the reason it keeps coming back is that it is most of Task Achievement.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 3 · what the questions do to the article', 'pairs': [('how much it grows of what it eats', 'self-sufficiency', 'nominalisation'), ('measured in money', 'by value', 'reformulation'), ('it buys more than it sells', 'it is a net importer', 'synonym'), ('it does not grow enough', 'there is a shortfall', 'negation'), ('wheat, barley and oats', 'cereals', 'hypernym'), ('the country imports it', 'it is imported', 'voice')], 'note': 'The fourth is the pattern this book has now set eleven times: a negative in the question and a noun in the passage.'},
   ],
   advice='When two charts show the same quantity, describe the first properly and the second only by its difference. The examiner is reading for the comparison, and an answer whose second half repeats its first in different numbers has written one hundred and eighty words and said ninety words worth of things.',
   debrief=dict(
    read=[
      'The sentence-completion gap in question 37 wants the divisor and the passage names it once, in a subordinate clause.',
      'Two paragraphs give self-sufficiency figures and only one says which basis it is using. The matching question asks for the one that does.',
      'Question 39 says "measured in money" and the article says "by value". The bridge has the pair.',
     ],
    listen=[
      'The speaker gives a figure by value and then the same category by calories. The gap names the basis.',
      'In the matching task one speaker revises a figure after being corrected by another.',
     ]),
   outside='Any two measurements of the same quantity are an invitation to ask what the divisor was, and the answer usually explains the disagreement entirely. Per head, per hectare, per pound, per calorie: four rankings of the same world.',
   recycled=[
      'self-sufficiency',
      'divisor',
      'proportion',
      'evidence',
      'consumption',
      'staple',
     ],
   read=[
    dict(preview=True,
         heading='Self-sufficiency, and what it is a share of',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The two charts in this cycle both say self-sufficiency and mean different things. Two hundred words.',
         paras=[
          'Self-sufficiency is the share of what a country consumes that it also produces. Sixty-one per cent means that of all the food eaten here, the equivalent of sixty-one per cent was grown here - not that sixty-one per cent of every meal was.',
          'It can be measured by value or by calories, and the two numbers differ by about seven points in most countries because the things a temperate country grows well are cheap and heavy and the things it imports are expensive and light. Measured by value, imports loom larger; measured by calories, home production does.',
          'Neither is more honest. In a trade dispute the value figure is the relevant one, because that is what has to be paid for. In a blockade the calorie figure is, because that is what people eat. A chart that does not say which it is using is unreadable, and most published charts do not.',
          'So the Task 1 rule is the one you have met three times already: name the measure in the first sentence, keep naming it, and never compare a value figure with a calorie figure as though they were the same number.',
         ],
         items=[
          ('Self-sufficiency is the share of what a country consumes that it also ____________.',
           None, 'produces',
           'Paragraph 1, which warns it is not about every meal.'),
          ('It can be measured by value or by ____________.',
           None, 'calories',
           'Paragraph 2: the two differ by about seven points.'),
          ('In a blockade the relevant figure is the ____________ one.',
           None, 'calorie',
           'Paragraph 3: because that is what people eat.'),
         ]),
    dict(heading='Production, imports and the gap between',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 30-35',
         figure=_CROPS, figure2=_SHARE,
         paras=[
          'The two charts describe the same twenty years from different '
          'angles. The first is organised by crop and compares what the '
          'country produced in 2003 and 2023 with what it imported in 2023. '
          'The second collapses all four crops into one line: the share of '
          'consumption met by imports.',
          'Wheat is the only crop whose production rose, and barely: from 720 '
          'to 740 thousand tonnes. Oilseed fell slightly, from 310 to 290. '
          'The two large falls are in fruit, from 190 to 120, and in '
          'vegetables, from 540 to 430.',
          'Imports now exceed domestic production in two of the four '
          'categories. Fruit imports stand at 610 thousand tonnes against '
          '120 produced, and oilseed at 460 against 290. Wheat remains the '
          'reverse: 740 produced against 180 imported.',
          'The second chart shows that the change has been continuous rather '
          'than sudden. The import share rose from 21 per cent in 2003 to 49 '
          'in 2023, and the increase in each five-year period was between six '
          'and eight points. Nothing in the line corresponds to any of the '
          'events to which the change is usually attributed.',
          'That steadiness is the most informative feature of the pair. A '
          'shift produced by a crisis would show a step; a shift produced by '
          'relative costs, planting decisions and the retirement of growers '
          'shows a slope. This is a slope, which means it was not caused by '
          'anything in the news and will not be reversed by anything there '
          'either.',
          'For the four crops together, consumption rose by about a fifth '
          'across the period while production fell by about a tenth. Both '
          'movements push the import share in the same direction, and the '
          'chart cannot tell you how much of the rise came from each. A '
          'country aiming to reduce the share would have to know that, and '
          'neither chart contains it.'],
         items=[
          (
           'Which paragraph gives the figures for the two largest '
           'falls in production?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           0, 'Fruit from 190 to 120 and vegetables from 540 to 430.',
           {1: 'Paragraph 3 compares imports with domestic production.', 2: 'Paragraph 4 describes the import share line.', 3: 'Paragraph 5 explains why the shape of the line '
               'matters.'}),
          (
           'Which paragraph explains why the shape of the line '
           'matters?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2, 'A crisis would show a step; this is a slope.',
           {0: 'Paragraph 3 compares imports with domestic production.', 1: 'Paragraph 4 describes the import share line.', 3: 'Paragraph 6 names something the charts cannot tell '
               'you.'}),
          (
           'Which paragraph names something the charts cannot tell '
           'you?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 2'],
           2,
           'How much of the rise in import share came from each cause.',
           {0: 'Paragraph 4 describes the import share line.', 1: 'Paragraph 5 explains why the shape of the line '
               'matters.', 3: 'Paragraph 2 gives the figures for the two largest '
               'falls in production.'}),
          ('Fruit: produced in 2023, ____________ thousand tonnes', None,
           '120', 'Paragraph 2, down from 190 in 2003.'),
          ('Oilseed: imported in 2023, ____________ thousand tonnes', None,
           '460', 'Paragraph 3, against 290 produced.'),
          ('Import share in 2023: ____________ per cent', None, '49',
           'Paragraph 4, up from 21 per cent in 2003.')])],
   listen=[
    dict(heading='An analyst on self-sufficiency', part='Part 4',
         task='A talk on production and imports · matching, sentence completion and multiple choice', band='l4',
         qtype='Questions 36-41',
         figure=_CROPS, figure2=_SHARE,
         script=[
          ('Analyst', 'Two charts and one argument. The charts are honest, '
           'the argument people make from them is not, and I want to show you '
           'where the dishonesty gets in.'),
          ('Analyst', 'Chart one, by crop. Wheat production is flat: seven '
           'twenty to seven forty over twenty years. Oilseed down slightly. '
           'And then the two real falls, fruit from a hundred and ninety down '
           'to a hundred and twenty, vegetables from five forty to four '
           'thirty. Imports now exceed home production in fruit and oilseed, '
           'and wheat is the only one still comfortably the other way '
           'round.'),
          ('Analyst', 'Chart two is the same story with the crops added '
           'together: the import share, twenty-one per cent in 2003 and '
           'forty-nine in 2023. And here is the part that matters, which is '
           'the shape. Every five-year period added between six and eight '
           'points. There is no step anywhere in that line.'),
          ('Analyst', 'That is why I say the usual argument is dishonest. '
           'This shift is attributed to whichever event the speaker dislikes, '
           'and a shift caused by an event leaves a step. A smooth slope over '
           'twenty years is relative prices, planting decisions and growers '
           'retiring without anybody taking the holding on. It is the '
           'accumulation of a thousand individual decisions, which is both '
           'harder to campaign about and much harder to reverse.'),
          ('Analyst', 'Second thing the charts do not tell you, and I would '
           'want this said in any briefing. Consumption rose about a fifth '
           'over the period and production fell about a tenth. Both push the '
           'import share up, and nothing here separates them. If you want to '
           'cut the share you need to know whether you are fighting your own '
           'appetite or your own output, and those need opposite policies.'),
          ('Analyst', 'So my advice when somebody puts the forty-nine per '
           'cent figure in front of you is to ask two questions. What is the '
           'shape, and what is the denominator doing? You will find that the '
           'answer to the second one has been left out of about nine '
           'briefings in ten, in my experience of reading them.'),
          ('Analyst', 'And one warning about where this argument tends to '
           'go. A forty-nine per cent import share is not by itself a '
           'danger, because it matters enormously whether it arrives from '
           'five regions or from one. Neither chart says, and that is the '
           'figure I would want before writing a word of policy.')],
         items=[
          ('Which crop\u2019s production was essentially flat?',
           ['Wheat', 'Oilseed', 'Fruit', 'Vegetables'], 0,
           '720 to 740 thousand tonnes over twenty years.',
           {1: 'Oilseed fell slightly, from 310 to 290.', 2: 'Fruit fell from 190 to 120, one of the two large '
               'falls.', 3: 'Vegetables fell from 540 to 430, the other large fall.'}),
          ('Imports exceed home production in fruit and ____________.',
           None, 'oilseed',
           'Fruit 610 against 120, oilseed 460 against 290.'),
          (
           'Each five-year period added how many points to the import '
           'share?',
           ['Two to three', 'Six to eight', 'Ten to twelve', 'None'], 1,
           'Taking it from 21 per cent to 49 with no step anywhere.',
           {0: 'Smaller than the increase in each five-year period.', 2: 'Larger than any five-year step he reports.', 3: 'Every period added points, which is his argument.'}),
          (
           'The usual argument is dishonest because a shift caused by '
           'an event would leave a ____________.', None,
           'step',
           'A smooth slope indicates prices, planting and retirement.'),
          (
           'The charts do not separate rising consumption from falling '
           '____________.', None, 'production',
           'And the two require opposite policies.'),
          ('What two questions does he recommend asking?',
           ['Who collected it and when', 'What is the shape, and what is the denominator doing', 'How much and how fast', 'Which crops and which years'],
           1, 'The second being left out of nine briefings in ten.',
           {0: 'Provenance of the data is not what he tells you to '
               'ask.', 2: 'Size and speed are what the figure already gives.', 3: 'Crops and years are both labelled on the charts.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Importing food',
    intro=('The card comes first. Make your notes inside the minute you '
           'are given, speak until you are stopped, and let the last '
           'bullet carry the weight. Then the discussion: four or five '
           'sentences. Try once to describe the shape of a change rather '
           'than its size.'),
    cue=('Describe a food you eat that comes from another country.',
         ['what it is',
          'where it comes from',
          'how often you eat it',
          'and explain whether you could do without it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Could it be grown nearer?',
        'Would you pay more for a local one?',
        'Is it a problem for a country to import much of its food?',
        'Why might domestic production fall?',
        'Should governments support farmers?',
        'What would make a food supply more secure?'],
    shape=[('answer', 'It depends on the shape of the change more than the '
            'level.'),
           ('support', 'Our import share went from twenty-one to '
            'forty-nine per cent.'),
           ('follow-up', 'But in a steady slope, with no step anywhere.'),
           ('support', 'Which means prices and retiring growers, not any '
            'single event.'),
           ('follow-up', 'And a slope is much harder to reverse than a '
            'step.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Production and imports of four crops',
         prompt=('The charts below show domestic production and imports of '
                 'four crops, and the share of consumption met by imports '
                 'over twenty years. Summarise the information by selecting '
                 'and reporting the main features, and make comparisons '
                 'where relevant. Write at least 150 words.'),
         figure=_CROPS, figure2=_SHARE,
         model=[
          'The first chart compares domestic production of four crops in 2003 '
          'and 2023 with the quantities imported in 2023, while the second '
          'shows the share of total consumption met by imports across the '
          'same period. Overall, production fell in three of the four crops '
          'and the import share roughly doubled, rising steadily rather than '
          'in any single jump.',
          'Taking the first chart by crop, wheat was the only one in which '
          'production rose, and only marginally, from 720 to 740 thousand '
          'tonnes; it also remains the one crop where production '
          'substantially exceeds imports, at 740 against 180. Oilseed fell '
          'slightly, from 310 to 290, while the largest falls were in fruit, '
          'from 190 to 120, and vegetables, from 540 to 430.',
          'Imports in 2023 exceeded domestic production in two categories. '
          'Fruit imports reached 610 thousand tonnes, five times the amount '
          'produced, and oilseed imports stood at 460 against 290.',
          'The second chart shows this change as a continuous trend. The '
          'import share rose from 21 per cent in 2003 to 49 per cent in 2023, '
          'gaining between six and eight points in every five-year interval, '
          'with no interruption at any point in the period.'],
         notes=[
          'The first chart is organised by crop and the second by period, '
          'because that is what each one is for. The hybrid lesson from unit '
          '26 applies unchanged: let each visual choose its own dimension.',
          'The Overall statement covers both visuals and names the steadiness '
          'of the trend. On a line this smooth, the absence of a step is the '
          'main feature and most candidates describe only the endpoints.',
          'Note the use of a ratio — "five times the amount produced" — '
          'alongside the absolute figures. One proportional comparison per '
          'answer is almost always worth including and almost never '
          'overdone.'],
         criterion=[('Each visual organised by its own dimension',
                     'Coherence and Cohesion'),
                    ('An Overall statement naming the steadiness',
                     'Task Achievement'),
                    ('One proportional comparison alongside the absolutes',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L6',
    context=[
      'From the article in this cycle:',
      'Measured by value, self-sufficiency in fresh vegetables stands at fifty-three per cent; measured by calories, at forty-two. The eleven-point gap is not a disagreement between the two figures but a fact about the crop: vegetables are bulky, cheap and low in energy, so they weigh more in a money total than in a calorie one. Cereals show the opposite pattern and for the opposite reason.',
     ],
    notice=[
     ('The writer gives two figures for one thing and then explains the gap. What is the explanation?', None,
      'vegetables are bulky, cheap and low in energy'),
     ('What does the last sentence save the writer from having to write?', None,
      'a second full explanation for cereals'),
    ],
    noticetask='Answer both from the paragraph above, which is from the passage you read earlier in this cycle.',
    contrast='Comparing two measures of one quantity needs the comparison vocabulary you already have, plus one thing: a way of not saying everything twice. The useful devices are the opposite pattern (cereals show the opposite pattern and for the opposite reason), the same holds (the same holds for potatoes), and ellipsis after a semicolon (measured by value, fifty-three; by calories, forty-two). All three let you make a second comparison in half the words, which in a 170-word answer is the difference between covering the chart and running out of room.',
    task2='Rewrite each so the second half is not a repetition.',
    items2=[
     ('Vegetables are 53 by value and 42 by calories. Cereals are 88 by value and 91 by calories.', None,
      'Vegetables stand at 53 per cent by value and 42 by calories; cereals show the opposite pattern.'),
     ('Fruit is low on both measures. Nuts are low on both measures.', None,
      'Fruit is low on both measures, as are nuts.'),
     ('Correct: measured by value is 53, measured by calories is at 42.', None,
      'measured by value, 53 per cent; by calories, 42'),
     ('Wheat behaves like barley.', None,
      'The same holds for wheat as for barley.'),
    ],
    task3='Now write the second half of a Task 1 answer from the two charts in this cycle: describe the calorie chart only by its difference from the value chart, naming the shape and the one exception. About fifty words, and no figure you do not need.',
    items3=8,
    point='Comparing two charts without repeating yourself',
    fix=dict(
     text=('The first chart shows yield per hectare and the second shows the '
           'area farmed. Yield rose by 40 per cent, whereas the area farmed '
           'fell. As the first chart, the second shows a change after 2010. '
           'Total production therefore rose less than the yield figure alone '
           'would suggest, because there was fewer land in use.'),
     faults=[('As the first chart, the second shows a change after 2010',
              'Like the first chart, the second shows a change after 2010',
              ('A comparison between two things takes like. As needs a clause '
               'after it.')),
             ('there was fewer land in use',
              'there was less land in use',
              'Land is not counted one by one, so the word is less.'),
             ('Yield rose by 40 per cent, whereas the area farmed fell',
              ('Yield rose by 40 per cent while the area farmed fell by 15 per '
               'cent'),
              ('The second half of the contrast gives no figure, so the two '
               'cannot be weighed against each other.'))]),
    explain=('With two visuals describing one subject, the danger is saying '
             'the same thing twice in different units. The repair is to give '
             'the second chart a different job: shape, share or trend rather '
             'than level.'),
    examples=['Production is flat while imports treble, which means the gap '
              'is filled from outside.',
              'The second chart shows this change as a continuous trend.',
              'Fruit imports reached five times the amount produced.',
              'The share gained between six and eight points in every '
              'interval.'],
    task='Rewrite each sentence so that it does not repeat the other '
         'chart.',
    items=[('Imports of fruit are 610 and production is 120.',
            'Fruit imports now run at roughly five times domestic '
            'production.'),
           ('The import share rose from 21 to 49 per cent.',
            'The import share rose steadily, adding six to eight points in '
            'each five-year interval.'),
           ('Production fell and imports rose.',
            'Production fell by about a tenth while consumption rose by about '
            'a fifth, so the gap widened from both ends.'),
           ('Wheat production was 720 and then 740.',
            'Wheat was the only crop in which production did not fall.'),
           ('Vegetables fell from 540 to 430.',
            'Vegetables showed the second largest fall, of a fifth of their '
            '2003 output.')]),
   vocab=[('self-sufficiency', 'producing all of what you consume'),
          ('import dependence', 'reliance on food grown elsewhere'),
          ('staple', 'a basic food eaten in large quantities'),
          ('yield', 'the quantity harvested per unit of land'),
          ('consumption', 'the total amount used or eaten'),
          ('tonne', 'a thousand kilograms'),
          ('holding', 'a farm considered as a unit of land'),
          ('divisor', 'the figure a share is divided by')],
   expr=[('there is no step anywhere in that line',
          'rules out a single cause'),
         ('the accumulation of a thousand individual decisions',
          'explains a trend nobody chose'),
         ('what is the denominator doing',
          'asks about the other half of a share'),
         ('neither chart contains it',
          'states a limit of the evidence shown')],
   trans=['while', 'on the other hand', 'taken together',
          'the second chart'],
  ),

  dict(
   sub='Why yield is not the whole story',
   step=4,
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on a seven-hundred-word passage; multiple choice and short answer in Listening Part 4',
    because='A passage arguing that a metric is incomplete contains several paragraphs whose job is to measure something, and they look alike: a reader who has learned to name functions still cannot tell "defines the metric" from "shows what the metric omits"',
    skill='Distinguishing the paragraph that defines a measure from the one that tests it and the one that replaces it',
    evidence='Unit 22 taught defining against illustrating and unit 27 taught general against particular; this is the third and hardest pair, two paragraphs that are both about measurement',
    watch='Learners will give the heading about what yield leaves out to the paragraph defining yield, because that paragraph says what yield is. Expect it',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Eleven tonnes this year and nine in twenty',
    body='Yield went up fourfold in a century and that is the single most quoted fact in agriculture. It is also tonnes per hectare per year, which is a flow, measured on land whose organic matter is a stock that nobody weighs annually. A field can produce more every year for two decades and be worth less at the end of them. This cycle is about what a number leaves out, which is the question you have now asked of a median, a share, an average and a self-sufficiency figure.',
    task='Answer these before you read, and keep them for the unit review.',
    qs=[
        'What does yield measure, exactly? Per what?',
        'Can a farm produce more each year and be getting poorer?',
        'What would you measure instead, if you could measure one more thing?',
        'Who benefits from the measure that is currently used?',
       ]),
   vocabwork=dict(
    title='The vocabulary of soil, and of a stock',
    body='Fourteen words. Half are about soil itself and half are the general vocabulary of stocks and flows, which applies to pensions, fisheries, groundwater and anything else that can be run down while the annual figures improve. That second half is the transferable part and is worth the whole cycle.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'what yield does not count', 'sub': 'cycle 4 · the second branch applies to anything at all', 'branches': [('the soil', ['organic matter', 'erosion', 'tillage', 'compaction']), ('stocks and flows', ['stock', 'flow', 'drawdown', 'depletion']), ('the measuring', ['per hectare', 'per litre', 'per unit of input', 'boundary of the metric']), ('the alternatives', ['land sparing', 'land sharing', 'total factor productivity', 'infiltration'])], 'note': 'Drawdown is the quiet word in this unit: taking from a stock faster than it is replaced, while every annual figure looks healthy. It applies to soil, to aquifers, to fish, to pension funds and to goodwill.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 4 · and the two nouns that have no verb', 'rows': [(('e-rode', 2), ('e-ro-sion', 2), '', ('e-ro-ded', 2), ''), (('de-plete', 2), ('de-ple-tion', 2), '', ('de-ple-ted', 2), ''), (('com-pact', 2), ('com-pac-tion', 2), '', ('com-pac-ted', 2), ''), ('', ('till-age', 1), '', '', ''), (('in-fil-trate', 1), ('in-fil-tra-tion', 3), '', '', '')], 'note': 'Compact as a verb takes the stress on the second syllable and as an adjective on the first, which is the fifth such pair in this volume. The pattern - verb on the second, noun or adjective on the first - is reliable enough to guess with.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('The part of soil made of decayed plants is organic ____________.', None,
      'matter'),
     ('Taking from a stock faster than it refills is ____________.', None,
      'drawdown'),
     ('Soil squeezed so water cannot enter has been ____________.', None,
      'compacted'),
     ('A quantity measured at one moment is a ____________.', None,
      'stock'),
     ('A quantity measured over a period is a ____________.', None,
      'flow'),
     ('The ploughing and turning of soil is ____________.', None,
      'tillage'),
     ('Water entering the soil rather than running off is ____________.', None,
      'infiltration'),
     ('The noun from deplete is ____________.', None,
      'depletion'),
    ]),
   builder=dict(
    skill='Matching headings: three kinds of measurement paragraph',
    qkind='skill',
    explain='A passage arguing that a metric is incomplete will contain three paragraphs about measurement and they are easy to confuse because all three use the same nouns. The first defines the measure: yield is tonnes per hectare per year. The second tests it, by showing what it omits or what happens when you hold it constant and look at something else. The third proposes a replacement, or explains why none is available. The headings for the three sound almost identical - "what yield measures", "what yield leaves out", "measuring what matters" - and the examiner knows it. Two questions sort them. Does the paragraph tell you how the number is calculated? Then it defines. Does it hold the number constant and show something else moving? Then it tests. Does it name a different number? Then it replaces. And the reliable tell: a defining paragraph has a formula or a unit in it, a testing paragraph has a comparison, and a replacing paragraph has a new noun that has not appeared before.',
    worked=[
      'Paragraph B: “Yield is tonnes per hectare per year. The denominator is land and the period is a season.”',
      'Paragraph D: “Across the same thirty fields, yield rose by a fifth while organic matter fell by a third. Neither figure contradicts the other.”',
      'Paragraph F: “Total factor productivity counts every input, which is why it is honest and why almost nobody publishes it.”',
      'B has a unit and defines. D has a comparison and tests. F has a new noun and replaces.',
      'The heading "What the figure leaves out" belongs to D, not to B - although B is the paragraph that tells you what yield is, and is therefore the one a reader thinks of when the heading says "the figure".',
     ],
    figure={'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Seven hundred words, and three measurement paragraphs', 'sub': 'cycle 4 · mark B, D and F before you look at the headings', 'paras': [('A', 'context', 'The fourfold rise, and who quotes it'), ('B', 'definition', 'What yield is: tonnes per hectare per year'), ('C', 'claim', 'A flow reported, a stock ignored'), ('D', 'evidence', 'Thirty fields: yield up, matter down'), ('E', 'concession', 'Why yield is still the right measure for its own question'), ('F', 'consequence', 'Total factor productivity, and why nobody uses it')], 'note': 'B defines, D tests, F replaces, and all three are about measurement. E is the concession and it is generous - the passage never claims yield is a bad measure, only that it is being asked the wrong question.'},
    task='For each paragraph opening write DEFINES, TESTS or REPLACES.',
    items=[
     ('“Yield is tonnes per hectare per year.”', None,
      'defines'),
     ('“Across thirty fields, yield rose and organic matter fell.”', None,
      'tests'),
     ('“Total factor productivity counts every input.”', None,
      'replaces'),
     ('“The denominator is land and the period is a season.”', None,
      'defines'),
     ('“Hold yield constant and the water figure moves sharply.”', None,
      'tests'),
     ('“Infiltration rate is the measure a soil scientist would choose.”', None,
      'replaces'),
    ],
    note='Items one and four both define and are the same paragraph. Items two and five both test by holding something constant, which is the reliable signature of a testing paragraph and the thing to scan for.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 4 · the Yes/No/Not Given set turns on these', 'pairs': [('taking more than is replaced', 'drawdown', 'nominalisation'), ('the soil is getting worse', 'organic matter is declining', 'reformulation'), ('yield is not a bad measure', 'yield measures what it measures well', 'negation'), ('water, nitrogen and labour', 'inputs', 'hypernym'), ('farmers plough less', 'tillage has been reduced', 'voice'), ('counted over a year', 'an annual flow', 'synonym')], 'note': 'The third is the concession, and it is the statement most candidates get wrong because the passage is plainly critical of how yield is used.'},
   ],
   advice='In a passage about measurement, mark the paragraph with a unit in it, the paragraph with a comparison in it and the paragraph with a new noun in it before you read the headings. Those three are defines, tests and replaces, and the headings for them will sound almost identical. Two marks a set turn on this and they are invisible to anybody matching nouns.',
   debrief=dict(
    read=[
      'The heading "What the figure leaves out" belongs to D, which tests, and not to B, which defines. Both are about yield and only one holds something constant.',
      'Statement 50 says the passage regards yield as a bad measure. Paragraph E says the opposite in the writer’s own voice, which makes it NO rather than NOT GIVEN.',
      'One statement is stronger than the passage: the passage says "on two of those three" and the statement says "on all measures". Scope, from unit 23 cycle 4.',
     ],
    listen=[
      'Dr Mwangi names three divisors and says the trend is flat or downward on two. The question asks which two.',
      'She says "yield is an excellent measure" late in the lecture, after twenty minutes of criticism. It is not irony and it is the answer.',
     ]),
   outside='Any number reported annually about something that accumulates - soil, savings, skill, goodwill, trust - can improve for years while the thing itself is being spent. Asking whether you are being shown a flow or a stock is one question with a very large number of uses.',
   recycled=[
      'yield',
      'drawdown',
      'evidence',
      'divisor',
      'depletion',
      'organic matter',
     ],
   read=[
    dict(heading='The soil that paid for the harvest',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Yield is the measure on which almost every argument about farming '
          'is conducted, and it is a good measure of one thing: how much food '
          'left a field in a season. It is silent about everything the field '
          'had when the season began and does not have now, which is where '
          'the disagreement between intensive and less intensive farming '
          'actually lies. Both sides of that argument quote yields at each '
          'other, which guarantees that the disagreement cannot be '
          'resolved.',
          'A soil is not a container that holds plants upright. It is a '
          'living system with a stock of organic matter, a structure of pores '
          'and aggregates that lets water in and air through, and a '
          'population of organisms that makes nutrients available. All three '
          'can be drawn down to raise a harvest, and none of the three '
          'appears in a yield figure. A farmer can read a rising yield '
          'every year while two of the three decline, and there is no '
          'instrument on the farm that would say so.',
          'Organic matter is the clearest case. Soils under continuous '
          'cultivation without return of organic material lose it steadily, '
          'typically a fifth to a third over four decades, and the loss '
          'raises yields in the short run as the material breaks down and '
          'releases nitrogen. A farm can therefore record rising yields for '
          'several years precisely because it is consuming the asset that '
          'produced them. The effect is largest in the first decade after '
          'a change of practice, which is exactly the period most '
          'comparisons cover.',
          'Structure fails more suddenly. Heavy machinery on wet ground '
          'compacts the layer below the depth of cultivation, and a compacted '
          'layer is not visible from the surface, does not show up in a soil '
          'test of the kind usually bought, and reduces both water '
          'infiltration and root depth. Its effects appear as a bad year in a '
          'dry summer, which is attributed to the weather. Compaction is also '
          'expensive and slow to undo, so by the time it is diagnosed the '
          'cheapest response is usually to live with it.',
          'Erosion is the loss that is easiest to measure and hardest to see '
          'happening. Rates of one to two tonnes per hectare per year are '
          'common on cultivated slopes and would be unremarkable to any '
          'observer, while soil forms at perhaps a tenth of that rate. The '
          'arithmetic is not controversial and is usually described in '
          'centuries, which is a length of time no farm business plan '
          'contains. A tenant farmer on a five-year agreement is being '
          'asked to carry a cost that will fall on somebody not yet '
          'born.',
          'Against all this, the case for intensive systems is not simply '
          'that they produce more now. Higher yields on existing farmland '
          'leave more land uncultivated, and uncultivated land stores carbon '
          'and supports species that no farming system does. This is a real '
          'argument and it is the strongest one available, which is why the '
          'comparison cannot be settled by looking at soil alone.',
          'What follows is a measurement problem rather than a philosophical '
          'one. If yield omits the drawdown of the asset, then a comparison '
          'of two systems by yield is a comparison of their revenues with '
          'nobody looking at their balance sheets. Several long-term trials '
          'now report both, and where they do the gap between systems narrows '
          'and does not close.',
          'The honest formulation is therefore narrow. Intensive systems '
          'produce more food per hectare per year and in most measured cases '
          'lose soil faster; less intensive systems reverse both. Which is '
          'preferable depends on how long a period you are measuring over and '
          'on whether the land spared by higher yields is in fact spared, '
          'which is an empirical question about policy and not about '
          'agronomy.',
                ('It is worth adding what would be needed to settle the '
                 'question, since the answer is not more argument. A '
                 'comparison of two systems over a single season measures '
                 'revenue. A comparison over thirty years, on the same soil, '
                 'with the organic carbon measured at the start and the end, '
                 'measures something closer to profit. Fewer than a dozen such '
                 'experiments exist anywhere, and most of them were begun for '
                 'other reasons by people who are no longer alive. That is the '
                 'real constraint on this literature, and no amount of '
                 'modelling removes it.')],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['What a soil is', 'Organic matter', 'Structure', 'Erosion'],
           1,
           'Losses of a fifth to a third over four decades, which '
           'raise yields briefly.',
           {0: 'What a soil is, is paragraph 2, before the three '
               'losses.', 2: 'Structure is the heading for paragraph 4.', 3: 'Erosion is paragraph 5, with the tonnes per hectare.'}),
          ('Choose the best heading for paragraph 4.',
           ['Organic matter', 'Structure', 'Erosion', 'The case for intensive systems'],
           1,
           'Compaction below the depth of cultivation, invisible from '
           'the surface.',
           {0: 'Organic matter is the heading for paragraph 3.', 2: 'Erosion is paragraph 5, with the tonnes per hectare.', 3: 'The case for intensive systems is the heading for '
               'paragraph 6.'}),
          ('Choose the best heading for paragraph 6.',
           ['Erosion', 'The case for intensive systems', 'A measurement problem', 'The honest formulation'],
           1, 'Higher yields leave more land uncultivated.',
           {0: 'Erosion is paragraph 5, with the tonnes per hectare.', 2: 'The measurement problem is paragraph 7, on balance '
               'sheets.', 3: 'The honest formulation is paragraph 8, the narrow '
               'statement.'}),
          ('The writer believes yield is a useless measure.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls it a good measure of how much food left '
           'a field.',
           {0: 'Yes would need uselessness; paragraph 1 calls it a '
               'good measure of one thing.', 2: 'Not Given is wrong because yield is defined and rated.'}),
          (
           'The writer believes the comparison between the two systems '
           'is settled.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph makes it depend on the period and on '
           'policy.',
           {0: 'Yes would need a settlement; the final paragraph makes '
               'it depend on period and policy.', 2: 'Not Given is wrong because the comparison is weighed.'}),
          ('Comparing two systems by yield compares their revenues without '
           'their ____________ sheets.', None, 'balance',
           'Paragraph 7, which is why long-term trials report both.'),
          ('Soil forms at about a ____________ of common erosion rates.',
           None, 'tenth',
           'Paragraph 5, where erosion of one to two tonnes per hectare is '
           'common.')])],
   listen=[
    dict(preview=True,
         heading='A soil scientist on the word yield',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear is an argument that one number has been doing too much work. Ninety seconds on which number.',
         script=[
          ('Student',
           'Yield went up fourfold in a century. That is the whole story, surely.'),
          ('Dr Mwangi',
           'It is one number from one field in one year, repeated enough times to feel like a law. Ask it two questions and it stops being the whole story.'),
          ('Student',
           'Which questions?'),
          ('Dr Mwangi',
           'Per what, and for how long. Yield is tonnes per hectare per year. It says nothing about tonnes per litre of water, or per unit of nitrogen, or per hour of labour - and on two of those three the trend is flat or downward.'),
          ('Student',
           'And for how long?'),
          ('Dr Mwangi',
           'A field can be farmed in a way that produces eleven tonnes this year and nine in twenty years, because the organic matter is being drawn down and nobody measures organic matter annually. Yield is a flow. Soil is a stock. Reporting the flow and not the stock is how you run a business into the ground while the accounts look excellent.'),
          ('Student',
           'So yield is the wrong measure.'),
          ('Dr Mwangi',
           'Yield is an excellent measure of exactly what it measures. It is being asked a question it was never built to answer.'),
         ],
         items=[
          ('Dr Mwangi says the two questions to ask are per what, and for how ____________.',
           None, 'long',
           'Her first long answer, which names both.'),
          ('She says yield is a flow and soil is a ____________.',
           None, 'stock',
           'Her third answer, with the eleven tonnes and the nine.'),
          ('She says yield is being asked a question it was never built to ____________.',
           None, 'answer',
           'Her last turn, which is the thesis of the lecture.'),
         ]),
    dict(heading='A lecture on soil and productivity', part='Part 4',
         task='A lecture on what yield omits · sentence completion, matching, short answer and multiple choice', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'Yield measures what leaves the field. It says nothing '
           'about what the field has left, and that single omission is most '
           'of the argument about farming systems, dressed up for forty years '
           'as an argument about ideology.'),
          ('Lecturer', 'Three things in a soil can be spent to raise a '
           'harvest. Organic matter, structure, and the organisms that make '
           'nutrients available. None of the three is in a yield figure and '
           'all three can be drawn down for a decade before anybody '
           'notices.'),
          ('Lecturer', 'Organic matter is the one I would start with, because '
           'it has the perverse property. A soil losing organic matter '
           'releases nitrogen as that material breaks down, so yields go up '
           'while the asset goes down. A farm can have four good years '
           'because of a process that is impoverishing it, and the accounts '
           'will show those four years as success.'),
          ('Lecturer', 'Structure fails differently: suddenly, invisibly, and '
           'usually blamed on the weather. Machinery on wet ground compacts '
           'the layer below where you cultivate. You cannot see it, the '
           'standard soil test does not find it, and its effect shows up as a '
           'bad harvest in the first dry summer, which everybody attributes '
           'to the drought.'),
          ('Lecturer', 'Erosion is the easiest to quantify. One to two tonnes '
           'per hectare per year is ordinary on a cultivated slope. Soil '
           'forms at about a tenth of that. Nobody disputes those numbers and '
           'nobody acts on them, because the consequence arrives in centuries '
           'and the business plan runs for seven years.'),
          ('Lecturer', 'Now I want to give the other side its strongest '
           'argument, because I think my own field states it badly. High '
           'yields spare land, and spared land stores carbon and holds '
           'species that no farm does. If intensive farming on half the area '
           'leaves the other half alone, that may be better than gentle '
           'farming everywhere. Whether the land is actually spared is a '
           'question about policy, and the honest answer is that in most '
           'countries it has not been.'),
          ('Lecturer', 'So the question I would set in an examination is '
           'not which system is better. It is which of the two measures you '
           'are willing to be judged on, and over what period, because '
           'every answer anybody has given me in thirty years is a choice '
           'of measure dressed up as a finding.')],
         items=[
          (
           'The lecturer says yield omits what the ____________ has '
           'left.', None, 'field',
           'Which he calls most of the argument about farming systems.'),
          ('Which property of organic matter does he call perverse?',
           ['It cannot be measured', 'Losing it raises yields in the short run', 'It builds up quickly', 'It has no effect'],
           1, 'As the material breaks down and releases nitrogen.',
           {0: 'Organic matter is measurable, which is why the trials '
               'work.', 2: 'It builds up slowly, which is part of the problem.', 3: 'Its effect is large, in both directions.'}),
          ('Compaction occurs below the depth of ____________.', None,
           'cultivation', 'And is not found by a standard soil test.'),
          (
           'Compaction damage is usually attributed to the '
           '____________.', None, 'weather',
           'Because it shows up as a bad harvest in a dry summer.'),
          (
           'Soil forms at about what proportion of common erosion '
           'rates?', None, 'a tenth',
           'Against one to two tonnes per hectare per year.'),
          (
           'What does he call the other side\u2019s strongest argument?',
           ['Lower prices', 'That high yields spare land', 'Better nutrition', 'Less labour'],
           1,
           'Though whether land is actually spared is a policy '
           'question.',
           {0: 'Prices are not part of the argument he credits.', 2: 'Nutrition is not raised in the lecture.', 3: 'Labour is not among the comparisons he makes.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Producing more without losing more',
    followup=[(('You say we should measure soil rather than yield. Is that '
                'practical?'),
               ('It is practical at the points where land changes hands, '
                'because somebody is already paying for a survey. Measuring '
                'every field every year is not, and schemes that tried it '
                'collapsed under the cost. So I would measure at transactions '
                'and on a sample, and accept that the picture is coarser than '
                'a yield figure and about something that actually matters.')),
              ('Should farmers be paid for looking after soil?',
               ('Yes, because it is a public good they currently provide for '
                'nothing, and a tenant with a five-year lease has every reason '
                'not to. What I would avoid is paying for actions that are '
                'easy to verify and loosely related to the outcome, which is '
                'how the existing schemes ended up rewarding hedge planting '
                'rather than soil carbon.')),
              ('Who should decide how land is farmed?',
               ('The farmer, within limits set by whoever bears the '
                'consequences downstream. Soil and water leave the farm, so '
                'the effects are not private, and that is what justifies a '
                'rule. But a rule written far away tends to be wrong about '
                'particular fields, so I would set the obligation centrally '
                'and leave the method local.'))],
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: four or five sentences. Try '
           'once to say what a measurement leaves out.'),
    cue=('Describe a garden, an allotment or a field you have worked on.',
         ['where it was',
          'what grew there',
          'what work it needed',
          'and explain what you learned from it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was the soil any good?',
        'Would you do it again?',
        'How should we judge whether a farming system is successful?',
        'Is it possible to produce more food without damaging land?',
        'Should farmers be paid for looking after soil?',
        'Who should decide how land is farmed?'],
    shape=[('answer', 'Not by yield alone, because yield measures only what '
            'leaves the field.'),
           ('support', 'A soil losing organic matter releases nitrogen and '
            'yields rise.'),
           ('follow-up', 'So four good years can mean the farm is being '
            'spent.'),
           ('support', 'What I would want measured is the soil at the start '
            'and the end.'),
           ('follow-up', 'Which a few long-term trials do and almost no '
            'farm does.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Six tests, and the strongest idea last',
         prompt=('Should farming be made less intensive even if yields fall? '
                 'Brainstorm, run the six tests, then order the survivors so '
                 'that the strongest comes last. Do not write the essay '
                 'yet.'),
         plan=('Less intensive farming is justified where the land spared by '
               'high yields is not in fact spared, which makes this a '
               'question about policy rather than about agronomy',
               [('Yield omits the drawdown of the soil, so the usual '
                 'comparison is incomplete',
                 ['organic matter loss raises yields while impoverishing '
                  'the farm',
                  'long-term trials that measure both find a narrower gap']),
                ('The land-sparing argument is the strongest case for '
                 'intensity and depends on a policy that mostly does not '
                 'exist',
                 ['spared land stores carbon and holds species',
                  'in most countries higher yields have not reduced the '
                  'area farmed'])]),
         notes=[
          'Ordering so that the strongest idea comes last is the opposite of '
          'the advice in unit 26, and both are right for their own structure. '
          'In a to-what-extent essay you build; in a discuss-both-views essay '
          'you establish fairness first.',
          'The strongest idea here is the opposing side’s own best '
          'argument, examined. An essay whose final body paragraph takes the '
          'other side’s best case seriously reads as confident rather than '
          'balanced.',
          'Notice that the thesis converts a scientific question into a '
          'policy one. Identifying which discipline a question actually '
          'belongs to is a move worth looking for in every prompt.'],
         criterion=[('Ordering so the strongest argument comes last',
                     'Coherence and Cohesion'),
                    ('Identifying which discipline the question belongs to',
                     'Task Response')],
         instruct='  Produce the brainstorm, the tests and the ordered '
                  'outline. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    ref='L12',
    context=[
      'From the passage you have just read:',
      'What yield measures is output per hectare per season, and it measures it well. What it does not measure is the state of the hectare at the end of the season. The figure is a flow and the soil is a stock, and a flow reported without its stock is an income statement with no balance sheet attached.',
     ],
    notice=[
     ('The writer uses the same structure twice to set two things against each other. Copy both openings.', None,
      'What yield measures is; What it does not measure is'),
     ('What comparison does the last sentence use to make the point concrete?', None,
      'an income statement with no balance sheet'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='You met the what-clause in unit 21 cycle 2, where it was used to say what a measure actually measures. Here it is doubled, and the doubling is the point: what X measures is A; what it does not measure is B. The parallel does the contrasting work without a but or a however, and because both halves are the same shape the reader cannot miss which is which. Remember the verb agreement - the subject is the whole clause, so it is what yield measures IS, however plural the thing that follows. And remember that twice in an essay is the limit: a third use and the structure stops being emphatic.',
    task2='Rewrite each as a doubled what-clause.',
    items2=[
     ('Yield measures output per hectare. It does not measure soil condition.', None,
      'What yield measures is output per hectare; what it does not measure is the condition of the soil.'),
     ('The test measures recall, not understanding.', None,
      'What the test measures is recall; what it does not measure is understanding.'),
     ('Correct: What the figures show are two separate things.', None,
      'What the figures show is two separate things.'),
     ('The chart shows arrivals, not presence.', None,
      'What the chart shows is arrivals; what it does not show is presence.'),
    ],
    task3='Now write it. Take any measure from this volume - yield, self-sufficiency, uptake, density, occupancy - and write sixty to eighty words saying what it measures and what it does not, using the doubled structure once and giving a concrete comparison at the end.',
    items3=8,
    point='Measuring what a metric omits',
    explain=('Saying that a measure leaves something out is a specific move '
             'with its own patterns. The strongest version names what is '
             'measured, what is not, and why the omission matters.'),
    examples=['Yield measures what leaves the field, not what the field has '
              'left.',
              'It compares their revenues with nobody looking at the balance '
              'sheets.',
              'The figure is silent about the stock from which it was '
              'drawn.',
              'None of the three appears in a yield figure.'],
    task='Rewrite each sentence so that it names what the measure omits.',
    items=[('Yield is a poor measure.',
            'Yield records the harvest and omits the soil the harvest was '
            'drawn from.'),
           ('GDP does not measure everything.',
            'GDP counts transactions and is silent about what was consumed to '
            'produce them.'),
           ('Exam results are limited.',
            'Exam results measure performance on a day and omit everything '
            'that made the day possible.'),
           ('The test missed the problem.',
            'A standard soil test measures nutrients at the surface and does '
            'not detect compaction below it.'),
           ('Profit is not the whole picture.',
            'Profit records income against costs and does not record assets '
            'consumed to earn it.')]),
   vocab=[('organic matter', 'decayed material held in a soil'),
          ('erosion', 'the loss of soil by wind or water'),
          ('tillage', 'the mechanical working of soil'),
          ('depletion', 'the using up of a stock'),
          ('compaction', 'soil pressed so hard that water cannot pass'),
          ('infiltration', 'water soaking into the ground'),
          ('drawdown', 'the reduction of a stock over time'),
          ('land sparing', 'leaving land uncultivated by farming others '
           'harder')],
   expr=[('Yield measures what leaves the field, not what the field has '
          'left', 'names what a metric omits'),
         ('consuming the asset that produced them',
          'describes a gain funded by a loss'),
         ('which everybody attributes to the drought',
          'notes a misattributed cause'),
         ('the business plan runs for seven years',
          'explains inaction by a mismatch of timescales')],
   trans=['consequently', 'which in turn', 'as a result', 'against all '
          'this'],
  ),

  dict(
   sub='Whether less intensive farming can feed people',
   step=5,
   notes=dict(
    serves='Matching information and Yes/No/Not Given, Reading Part 3; Task 2, discuss both views and give your own opinion',
    because='The commonest overclaim in Task 2 is a comparison with no conditions attached - organic farming is less productive, full stop - and the correction is one clause long and almost never written',
    skill='Attaching a scope statement to a comparison, so the claim is the size the evidence supports',
    evidence='Phase 4: the band 9 models attach a condition to almost every comparative claim and the band 6.5 models attach none, which is most of the Task Response gap on evidence-based prompts',
    watch='Learners will write "organic yields are lower". Ask lower per what, on what land, over what period, and watch the sentence get better three times',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Lower per what, over how long?',
    body='This is the last cycle of the unit and of the first ten units of this book. The question is whether less intensive farming could feed a population, and every honest answer to it has a clause attached: per hectare or per calorie, on comparable soil or across all soils, in one season or over a rotation. Take the clause away and the sentence is still grammatical, still fluent and no longer true. That is the last thing this unit teaches and it is the thing most worth keeping.',
    task='Answer these before you read, and compare them with what you wrote at the start of cycle 1.',
    qs=[
        'Could a country feed itself with less intensive farming? What would you need to know?',
        'Is a lower yield acceptable if the soil lasts longer? Who decides?',
        'What would change your mind about this, in either direction?',
        'Has anything in this unit changed what you thought at the start of it? Which cycle did it?',
       ]),
   vocabwork=dict(
    title='The vocabulary of an honest comparison',
    body='The last set of the unit, and the shortest. Twelve words and phrases that attach a condition to a claim, and they are the same twelve whatever the subject: you will use them in unit 29 about media and in unit 30 about sport without changing one of them.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'a comparison with conditions', 'sub': 'cycle 5 · and these twelve work on any subject at all', 'branches': [('holding things equal', ['other things being equal', 'like for like', 'on comparable land', 'in the same season']), ('naming the measure', ['per hectare', 'per calorie', 'per unit of input', 'on this basis']), ('naming the scope', ['for cereals', 'in this climate', 'over a single season', 'at this scale']), ('naming what is untested', ['has not been tested for', 'no trial has examined', 'the evidence is silent on', 'at scale'])], 'note': 'The fourth branch is the one that turns a hedge into a contribution. Saying what has not been tested is more useful than saying you are uncertain, because it tells somebody what to do next.'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How wide is the claim?', 'sub': 'cycle 5 · from one plot to the world', 'left': 'on these plots', 'right': 'universally', 'items': [('on the plots examined', 0.04), ('on comparable soil', 0.2), ('in temperate systems', 0.42), ('for cereal crops generally', 0.6), ('across farming as a whole', 0.8), ('without qualification', 0.96)], 'note': 'The passage in this cycle makes claims from the first two positions and the press coverage quoted in paragraph E makes them from the last. Three questions turn on that gap, and it is the same gap as unit 24 cycle 4.'},
    task='Complete each with a phrase from this cycle.',
    items=[
     ('The clause that holds everything else still: other things being ____________.', None,
      'equal'),
     ('A comparison on the same terms is ____________ for like.', None,
      'like'),
     ('Saying which measure you used: on this ____________.', None,
      'basis'),
     ('Limiting a claim to one crop: for ____________.', None,
      'cereals'),
     ('Limiting it to one duration: over a single ____________.', None,
      'season'),
     ('Saying what nobody has looked at: no trial has ____________ it.', None,
      'examined'),
     ('Limiting it to small trials: not yet at ____________.', None,
      'scale'),
     ('The phrase on the far right of the cline: without ____________.', None,
      'qualification'),
    ]),
   builder=dict(
    skill='Task 2: other things being equal',
    qkind='skill',
    explain='Almost every comparative claim in an evidence-based essay needs a clause saying what was held constant, and almost no band 6 essay has one. Organic yields are lower is a sentence that is true, false and meaningless depending on three things it does not say: per what, on what, over how long. Adding them costs about seven words and moves the claim from an opinion to a finding. The three are always the same. The measure: per hectare, per calorie, per unit of input - and a claim that is true per hectare may reverse per calorie. The conditions: on comparable soil, in the same season, like for like - because a comparison across different places measures the places. And the duration: in one season, over a rotation, at scale - because a system that wins in year one may lose over seven. Write the bare claim first and then attach exactly the clauses your evidence supports, and stop: a claim with four qualifications is as unusable as one with none.',
    worked=[
      'The bare claim: organic yields are lower.',
      'Add the measure: organic yields are lower per hectare. True, and the per-calorie figure is closer.',
      'Add the conditions: on comparable soil and in the same season, organic yields are lower per hectare. True, and now it is a finding rather than a slogan.',
      'Add the duration: ...in a single season. True, and it flags that the rotation question is open.',
      'The finished sentence: “On comparable soil and in the same season, organic yields are lower per hectare, by about a fifth in the paired-plot trials; what happens over a full rotation has not been tested at scale.” Thirty-four words, and nobody can argue with it except by producing evidence, which is exactly the position you want to be in.',
     ],
    figure={'kind': 'matrix', 'teaches': 'comparison', 'title': 'Three clauses, and what each prevents', 'sub': 'cycle 5 · fill the right-hand column', 'cols': ['The clause', 'What it prevents', 'Your version'], 'rows': ['The measure', 'The conditions', 'The duration', 'What is untested'], 'cells': [['per hectare or per calorie', 'a claim that reverses on the other measure', ''], ['on comparable soil', 'measuring the place instead of the method', ''], ['in a single season', '', ''], ['no trial at scale', '', '']], 'note': 'Five blanks. Fill them for any comparison you are about to make, and the sentence writes itself at about band 7.'},
    task='Add the missing clause to each claim. One clause only.',
    items=[
     ('Organic yields are lower.', None,
      'per hectare'),
     ('Yields are lower per hectare.', None,
      'on comparable soil'),
     ('On comparable soil, yields are lower per hectare.', None,
      'in a single season'),
     ('The system works.', None,
      'at this scale'),
     ('Rotation closes the gap.', None,
      'over seven years'),
     ('The difference is about a fifth.', None,
      'in the paired-plot trials'),
    ],
    note='Each item adds exactly one clause to the one before, and by the sixth the sentence is a finding. Notice that nothing was hedged: no may, no possibly, no it could be argued. Scope is not hedging. It is saying what you actually measured, which is the opposite of vagueness, and it is the reason an examiner can tell a candidate who has understood evidence from one who has read about it. The habit is worth more than the vocabulary that carries it: if you can only remember one thing from this unit, remember to ask per what, on what, and for how long.'),
   figures=[
    {'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Six hundred words, six functions', 'sub': 'cycle 5 · the last passage of the first ten units', 'paras': [('A', 'context', 'The question, and why it is asked badly'), ('B', 'definition', 'What a paired plot trial does'), ('C', 'evidence', 'Four trials, four conditions, one figure'), ('D', 'qualification', 'What happens over a rotation, and what is unknown'), ('E', 'counter-claim', 'How the press reported the same trials'), ('F', 'consequence', 'What would settle it, and what it would cost')], 'note': 'D is a qualification rather than a concession, and the difference matters: a concession grants the other side a point, a qualification limits your own. Headings for the two sound alike.'},
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 5 · the matching set turns on these', 'left': 'THE QUESTION SAYS', 'right': 'THE PASSAGE WROTE', 'pairs': [('half a field farmed two ways', 'a paired plot trial', 'nominalisation'), ('nobody has tried it on a whole farm', 'untested at scale', 'negation'), ('about twenty per cent', 'approximately a fifth', 'reformulation'), ('newspapers said', 'the trials were reported as', 'voice'), ('wheat, barley and oats', 'cereal crops', 'hypernym'), ('with everything else held still', 'other things being equal', 'synonym')], 'note': 'The second is the one that decides two questions: a negative in the question and a two-word technical phrase in the passage.'},
   ],
   advice='Attach the measure, the conditions and the duration to every comparative claim you make in Task 2, and say what has not been tested. It costs about ten words and it is the single clearest signal to an examiner that you know what evidence is. Four qualifications is too many: three clauses and a sentence saying what is unknown is the shape to aim at.',
   debrief=dict(
    read=[
      'The matching-information question about the press coverage sends you to E, which reports it, and not to C, which contains the figure the press used. Where a passage reports what somebody else said about its own evidence, the reporting paragraph and the evidence paragraph will both match several questions, and the question always says which it wants: contains the figure, or describes how it was reported.',
      'The statement that organic farming cannot feed a population is NOT GIVEN: the passage gives a figure for paired plots and says explicitly that the scale question is open.',
      'One statement repeats paragraph D as the writer’s conclusion. D is a qualification of the writer’s own claim, which is a different thing again from a concession.',
     ],
    listen=[
      'The speaker gives a figure and then the conditions under which it holds. The gap wants the conditions.',
      'She says "at this scale" twice and the second one is about a different trial.',
     ]),
   outside='Saying exactly what you measured, under what conditions and for how long is the difference between a finding and an opinion, and it is why some people are believed about things they are wrong about and others are not believed about things they are right about.',
   recycled=[
      'yield',
      'evidence',
      'scope',
      'paired plot',
      'rotation',
      'at scale',
      'other things being equal',
     ],
   read=[
    dict(preview=True,
         heading='What a paired plot is',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The last passage of the unit rests on one piece of method, and it is the same idea as the control group in unit 21. Two hundred words.',
         paras=[
          'A paired plot trial splits one field in two and farms the halves differently. Both halves have the same soil, the same weather and the same year, so anything that differs at harvest is caused by the one thing that was changed.',
          'This matters because farm comparisons are otherwise almost useless. An organic farm in Kent and a conventional farm in Lincolnshire differ in soil, rainfall, altitude, crop and farmer, and comparing their yields tells you about all five at once. Paired plots hold four of them still.',
          'The cost is that a half-field is not a farm. A system that works on half a field may fail at scale, because a real farm has to rotate, to find labour, and to sell what it grows; and a paired plot measures none of that. The method buys you certainty about a small question.',
          'So the honest sentence is always double: on paired plots, under these conditions, the difference was about a fifth - and what happens on a whole farm over a rotation is a separate question with a separate answer.',
         ],
         items=[
          ('A paired plot trial splits one ____________ in two.',
           None, 'field',
           'Paragraph 1: same soil, same weather, same year.'),
          ('Comparing farms in different places tells you about everything at ____________.',
           None, 'once',
           'Paragraph 2, which lists five things that differ.'),
          ('The method buys certainty about a ____________ question.',
           None, 'small',
           'Paragraph 3: a half-field is not a farm.'),
         ]),
    dict(heading='Two systems compared over thirty years',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 55-61',
         paras=[
          'The claim that organic farming cannot feed the world is made and '
          'denied with a confidence neither position has earned, and the '
          'reason is that almost every figure quoted on either side comes '
          'from a comparison that was not designed to answer the question. The '
          'few comparisons that were designed properly are less dramatic '
          'than either campaign would like, and they exist.',
          'The long-term trials are the best evidence available. A handful of '
          'sites have run paired plots under intensive and organic management '
          'on the same soil for thirty years or more, measuring harvest, '
          'inputs and the state of the soil throughout. Their results are '
          'consistent enough to be worth stating plainly, and plainly is '
          'how they are almost never stated.',
          'On yield, the intensive plots win. Across crops and sites the '
          'organic plots produce between seventy and ninety per cent as much '
          'per hectare per year, with the gap largest in cereals and smallest '
          'in legumes and in dry years, when the better soil structure of the '
          'organic plots partly compensates. That detail is the opposite '
          'of what most people predict, and it has been found at every '
          'site that has had a drought.',
          'On soil, the organic plots win by a wider margin than they lose on '
          'yield. Organic matter is typically higher by a quarter to a half '
          'after thirty years, erosion rates are lower, and water '
          'infiltration is faster, which is also why the yield gap narrows in '
          'droughts rather than widening as one might expect.',
          'Two comparisons are therefore available from the same data and '
          'both are honest. Per hectare the organic system loses; per unit of '
          'soil retained, or per unit of fossil energy used, it does not. '
          'Which comparison is the right one depends on what is scarce, and '
          'what is scarce differs between countries and over time. A country '
          'with abundant land and expensive energy should answer this '
          'differently from one with the reverse, and both are told the '
          'same thing by the same campaigns.',
          'The argument that gets least attention concerns what the '
          'comparison holds constant. The trials compare an organic system '
          'with an intensive system on the same farm, in the same rotation '
          'length, at the same scale, serving the same market. A food system '
          'built around less intensive production would differ in diet, '
          'waste, livestock numbers and the share of grain fed to animals, '
          'and those differences are larger than the yield gap being '
          'debated. Holding them constant is correct experimental practice '
          'and it is also what makes the trials unable to answer the '
          'question people ask of them.',
          'That is the strongest argument on the organic side and it is '
          'rarely made, perhaps because it concedes the yield point entirely '
          'and relocates the question. If a third of cereal production feeds '
          'animals and a third of food is wasted, then a system producing '
          'twenty per cent less per hectare is not obviously unable to feed '
          'anybody; it is a system requiring changes nobody has agreed to. '
          'Those are two very different findings and they are routinely '
          'reported as though they were the same one.',
          'The honest conclusion is a scope statement rather than an answer. '
          'Organic methods cannot feed the current population on the current '
          'land with the current diet and the current waste, which is what '
          'the question usually means and is the reason the answer is usually '
          'no. Whether they could feed that population under a different '
          'diet and a lower waste rate is a question nobody has studied '
          'properly, and it is the only version of the question that '
          'describes a choice anyone could actually make.'],
         items=[
          ('Which paragraph gives the yield comparison?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Organic plots at seventy to ninety per cent per hectare '
           'per year.',
           {0: 'Paragraph 2 describes the trials themselves.', 2: 'Paragraph 4 gives the soil comparison.', 3: 'Paragraph 5 sets out the two honest comparisons.'}),
          ('Which paragraph explains what the trials hold constant?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           2, 'Same farm, rotation, scale and market.',
           {0: 'Paragraph 4 gives the soil comparison.', 1: 'Paragraph 5 sets out the two honest comparisons.', 3: 'Paragraph 7 calls it the strongest organic argument.'}),
          (
           'Which paragraph states the conclusion as a scope '
           'statement?',
           ['Paragraph 6', 'Paragraph 7', 'Paragraph 8', 'Paragraph 5'],
           2, 'Current population, land, diet and waste.',
           {0: 'Paragraph 6 explains what the trials hold constant.', 1: 'Paragraph 7 calls it the strongest organic argument.', 3: 'Paragraph 5 sets out the two honest comparisons.'}),
          (
           'The writer believes organic farming matches intensive '
           'farming on yield.', ['Yes', 'No', 'Not Given'],
           1,
           'Paragraph 3 reports seventy to ninety per cent per '
           'hectare.',
           {0: 'Yes would need parity; paragraph 3 gives seventy to '
               'ninety per cent.', 2: 'Not Given is wrong because the yield gap is '
               'quantified.'}),
          (
           'The writer believes the question as usually asked can be '
           'answered yes.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says the usual meaning of the question '
           'gets the answer no.',
           {0: 'Yes would need that answer; the final paragraph '
               'answers no to the usual meaning.', 2: 'Not Given is wrong because the writer answers the '
               'question.'}),
          ('The yield gap is smallest in legumes and in ____________ '
           'years.', None, 'dry',
           'Paragraph 3, because better soil structure partly compensates.'),
          (
           'Differences in diet, waste and ____________ are larger '
           'than the yield gap being debated.', None,
           'livestock',
           'Paragraph 6, in a food system built around less intensive '
           'production.')])],
   listen=[
    dict(heading='Two agronomists disagree', part='Part 4',
         task='A recorded exchange · multiple choice and sentence completion', band='l4', qtype='Questions 62-67',
         script=[
          ('Chair', 'Dr Oyinlola-Brandt works on long-term trials. Professor '
           'Marchetti works on food systems.'),
          ('Oyinlola-Brandt', 'I will give you the numbers from the trials '
           'and I will give them to you straight, because I am tired of being '
           'quoted selectively by both sides. Per hectare per year, organic '
           'plots produce between seventy and ninety per cent of what the '
           'intensive plots produce. That is a real gap and it has not closed '
           'in thirty years.'),
          ('Marchetti', 'I accept the number. I accept it more readily than '
           'most people on my side of this do.'),
          ('Oyinlola-Brandt', 'Then let me finish the honest version. On '
           'soil, the organic plots are ahead by more than they are behind on '
           'yield. Organic matter a quarter to a half higher after thirty '
           'years, lower erosion, faster infiltration. And that is why the '
           'yield gap narrows in a dry year rather than widening, which '
           'surprised everybody including me.'),
          ('Marchetti', 'My argument does not dispute any of that, and I '
           'think it is the argument my side should be making. Your trials '
           'hold the food system constant. Same farm, same rotation, same '
           'market, same diet at the other end. A world farming less '
           'intensively would not have the same diet or the same waste.'),
          ('Oyinlola-Brandt', 'Go on, because this is the part I want to push '
           'on.'),
          ('Marchetti', 'A third of cereal production feeds animals. About a '
           'third of food is wasted. Against numbers of that size, a twenty '
           'per cent yield gap is not a demonstration that the system cannot '
           'feed people. It is a demonstration that it requires changes '
           'nobody has consented to.'),
          ('Oyinlola-Brandt', 'And that is where I will push back, because '
           '"requires changes nobody has consented to" is doing a great deal '
           'of quiet work in that sentence. Those are not agronomic changes. '
           'I can grow a crop. I cannot change what a hundred million people '
           'choose to eat.'),
          ('Marchetti', 'No, and neither can I, and I notice that my argument '
           'is strongest precisely where it is least actionable. That is an '
           'uncomfortable thing to have noticed out loud.'),
          ('Oyinlola-Brandt', 'Then let us publish the scope statement '
           'together. Not at the current diet and the current waste; '
           'unstudied at a different diet and a lower waste. That is the true '
           'sentence and it is the one neither campaign wants.')],
         items=[
          ('The organic plots produce what proportion per hectare?',
           ['Fifty to seventy per cent', 'Seventy to ninety per cent', 'Ninety to a hundred per cent', 'More than the intensive plots'],
           1, 'A gap that has not closed in thirty years.',
           {0: 'Lower than the range the trials report.', 2: 'Higher than the range she gives.', 3: 'She says plainly that there is a real gap.'}),
          (
           'On soil, the organic plots show organic matter higher by a '
           'quarter to a ____________.', None, 'half',
           'With lower erosion and faster infiltration.'),
          ('Why does the yield gap narrow in a dry year?',
           ['Less irrigation is used', 'Better soil structure partly compensates', 'Crops are different', 'Yields are estimated'],
           1, 'Which Oyinlola-Brandt says surprised everybody.',
           {0: 'Irrigation is not mentioned by either agronomist.', 2: 'The same crops are grown on both plots.', 3: 'The yields are measured, not estimated.'}),
          (
           'Marchetti\u2019s argument is that the trials hold constant the '
           'food ____________.', None, 'system',
           'Same farm, rotation, market and diet.'),
          ('What does Oyinlola-Brandt object to in his argument?',
           ['The numbers', 'That the required changes are not agronomic', 'The trial design', 'The timescale'],
           1, 'She can grow a crop and cannot change what people eat.',
           {0: 'She accepts his numbers on waste and animal feed.', 2: 'The trial design is hers and she defends it.', 3: 'Timescale is not what she objects to.'}),
          ('What do they agree to publish?',
           ['A new trial', 'A joint scope statement', 'A correction', 'Nothing'],
           1,
           'Not at the current diet and waste; unstudied at a '
           'different one.',
           {0: 'No new trial is proposed in the exchange.', 2: 'Nothing is being corrected; the numbers stand.', 3: 'They agree on a specific joint statement.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Feeding more people',
    sounds=[('Common chunks lose sounds in fluent speech, and the losses are '
             'regular. Next to sounds like neks to, used to like yoostoo, '
             'going to like gonna in speech and never in writing.'),
            ('Assimilation changes a sound rather than dropping it: ten '
             'minutes becomes tem minutes, good boy becomes gub boy. Both are '
             'normal and neither is careless.'),
            ('This matters for listening as much as for speaking. The reason a '
             'recording sounds too fast is usually that you are waiting for '
             'sounds the speaker has already simplified.'),
            ('Practise the supply phrases of this unit at speed: ran out of, '
             'had to go without, was unable to get hold of. Each should be one '
             'unit of sound.'),
            ('Record yourself on judging a farming system, then write down '
             'what you hear rather than what you said. The difference is the '
             'elision.')],
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: the hardest turn in the unit. Try once to '
           'state the scope within which a claim is true.'),
    cue=('Describe a change you have made to what you eat.',
         ['what you changed',
          'why you changed it',
          'how long ago it was',
          'and explain whether you have kept it up']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Did anybody else notice?',
        'Was it cheaper or dearer?',
        'Can the world be fed by less intensive farming?',
        'Should people eat less meat?',
        'How much food is wasted where you live?',
        'Who should decide what a country grows?'],
    shape=[('answer', 'Not at the current diet and the current waste '
            'rate.'),
           ('support', 'Organic plots yield seventy to ninety per cent per '
            'hectare.'),
           ('follow-up', 'But a third of cereals feed animals and a third '
            'of food is thrown away.'),
           ('support', 'So against those numbers the yield gap is not the '
            'binding constraint.'),
           ('follow-up', 'Which turns it into a question about diet, and '
            'nobody has studied that version.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Can organic farming feed the world?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say organic farming cannot feed the '
                 'world. To what extent do you agree? Write at least 250 '
                 'words.'),
         model=[
          'I agree with this claim as it is usually meant and disagree with '
          'it as it is usually stated, and the difference between those two '
          'things is the whole of what I have to say.',
          'The yield evidence is not in dispute and I will concede it '
          'immediately. Long-term trials running paired plots for thirty '
          'years find organic production at between seventy and ninety per '
          'cent of intensive production per hectare per year, with the gap '
          'largest in cereals. That gap has not closed over three decades of '
          'improvement on both sides, and anybody arguing that it does not '
          'exist is arguing against the best evidence there is.',
          'What the same trials also show is that the comparison by yield is '
          'incomplete. The organic plots hold a quarter to a half more '
          'organic matter after thirty years, lose less soil, and absorb '
          'water faster, which is why their yield gap narrows in dry years '
          'rather than widening. A system producing less per hectare while '
          'retaining the asset it produces from is not straightforwardly '
          'worse; it is worse on one measure and better on another.',
          'My disagreement is with the question rather than the answer. The '
          'trials hold the food system constant, and a world farming less '
          'intensively would not eat as we do. Roughly a third of cereal '
          'production is fed to animals and roughly a third of food is '
          'wasted. Against numbers of that size, a twenty per cent yield gap '
          'is not evidence that a system cannot feed people; it is evidence '
          'that it would require changes to diet and waste that nobody has '
          'agreed to.',
          'So my answer is a scope statement. Organic methods cannot feed the '
          'present population on the present land with the present diet and '
          'the present level of waste, which is what the claim means and why '
          'it is right. Whether they could do so under a different diet is '
          'unstudied, and it is the only version of the question that '
          'describes a decision anybody could take.'],
         notes=[
          'Conceding the strongest opposing evidence in paragraph 2, without '
          'hedging, buys the authority to reframe in paragraph 4. A reader '
          'who sees you concede fairly believes your later moves.',
          'Paragraph 4 relocates the question from agronomy to diet and '
          'waste, and gives two figures to do it. The reframing works because '
          'the numbers are larger than the gap being argued about — '
          'reframing without a quantity is just assertion.',
          'The conclusion is deliberately not a verdict but a scope '
          'statement. For "to what extent" prompts, specifying the conditions '
          'under which the claim holds is the highest-scoring kind of '
          'answer.'],
         model65=[
                  'Some people say organic farming cannot feed the '
                  'world. I think this is true as the question is '
                  'usually asked, but the question is not a good one.',
                  'The yield evidence is reasonably clear. Organic '
                  'systems produce about seventy to ninety per cent of '
                  'the output of intensive systems per hectare, with '
                  'the gap larger for cereals. If the world ate as it '
                  'does now, a complete switch would require more '
                  'land, and land is what forests and wetlands occupy.',
                  'But food supply is not only about yield. A large '
                  'share of what is grown is fed to animals or wasted. '
                  'Diet and waste change the arithmetic more than '
                  'farming method does, and intensive farming carries '
                  'costs, such as declining soil and polluted water, '
                  'that yield figures do not show.',
                  'I think organic farming cannot replace intensive '
                  'farming at present diets, but the honest answer is '
                  'that the question depends on what we eat and how '
                  'much we waste. Those are the variables with the '
                  'largest effect, and they are rarely included in the '
                  'comparison.',
                  ],
         gap65=[
                'It states what the comparison holds constant, which '
                'is where the usual answer goes wrong.',
                'It quantifies the two larger variables rather than '
                'naming them.',
                'It says what each system measures well, so the reader '
                'can see why the two sides cite different numbers.',
                ],
         criterion=[('Conceding the strongest evidence without hedging',
                     'Task Response'),
                    ('Reframing with a quantity larger than the gap',
                     'Task Response'),
                    ('A conclusion that states scope rather than a verdict',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    ref='L28',
    context=[
      'From the passage you have just read:',
      'Other things being equal, organic yields in these trials were about a fifth lower per hectare. Three clauses in that sentence are doing work. Other things being equal rules out the soil and the weather; in these trials rules out everywhere else; per hectare rules out the measure on which the gap is narrower. Remove any of the three and the sentence says more than the evidence does.',
     ],
    notice=[
     ('The writer names three clauses and says what each rules out. Copy the second and what it rules out.', None,
      'in these trials - it rules out everywhere else'),
     ('Why "other things being equal" and not "other things are equal"?', None,
      'it is a participle clause, which has no finite verb of its own'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='A scope clause is not a hedge and the difference matters for marks. A hedge weakens a claim - it may be that yields are lower. A scope clause says exactly which claim you are making - on comparable soil, in a single season, per hectare - and the claim inside it is then made without any weakening at all. Examiners read the first as caution and the second as precision, and precision is what Task Response rewards. Note the grammar of the commonest one: other things being equal is a participle clause and takes no verb; writing other things are being equal is the error at this band.',
    task2='Add the scope and remove the hedge.',
    items2=[
     ('It may be that organic yields are somewhat lower.', None,
      'Other things being equal, organic yields are about a fifth lower per hectare.'),
     ('Correct: other things are being equal, the costs are similar.', None,
      'other things being equal, the costs are similar'),
     ('Perhaps the system works at larger scale.', None,
      'Whether the system works at scale has not been tested.'),
     ('The gap is probably smaller by calories.', None,
      'Measured per calorie, the gap is smaller.'),
    ],
    task3='Now write it. Take the claim that less intensive farming could feed a population, state it with its measure, its conditions and its duration, and then name what has not been tested. Eighty to a hundred words, and no hedges.',
    items3=10,
    point='Scope, other things equal, and the honest comparison',
    explain=('Comparisons are only true within the conditions that were held '
             'constant. Naming those conditions is what separates a careful '
             'claim from a slogan, and examiners reward it under Task '
             'Response.'),
    examples=['Per hectare it loses; per unit of soil kept it does not.',
              'The trials hold the food system constant.',
              'Other things equal, the intensive plot produces more.',
              'Not at the current diet and the current level of waste.'],
    task='Rewrite each claim so that its scope is stated.',
    items=[('Organic farming produces less.',
            'Organic farming produces less per hectare per year, at the same '
            'rotation length and on the same soil.'),
           ('Intensive farming is better.',
            'Intensive farming yields more per hectare and loses soil faster '
            'in most measured cases.'),
           ('It cannot feed the world.',
            'It cannot feed the present population at the present diet and '
            'waste rate.'),
           ('The gap is twenty per cent.',
            'The gap is between ten and thirty per cent depending on crop, '
            'and smallest in dry years.'),
           ('Soil is better under organic management.',
            'Organic matter is a quarter to a half higher after thirty years '
            'on the same starting soil.')]),
   vocab=[('paired plot', 'two plots compared side by side'),
          ('rotation', 'the sequence of crops grown in turn'),
          ('legume', 'a plant that fixes nitrogen, such as a pea'),
          ('cereal', 'a grain crop such as wheat or maize'),
          ('input', 'something added to a field, such as fertiliser'),
          ('scope statement', 'a statement of the conditions under which a '
           'claim holds'),
          ('implementable', 'able to be put into practice by somebody'),
          ('limiting factor', 'the thing that actually caps an outcome')],
   expr=[('Per hectare it loses; per unit of soil kept it does not',
          'two honest comparisons from one dataset'),
         ('your trials hold the food system constant',
          'names what a comparison assumed'),
         ('my argument is strongest precisely where it is least actionable',
          'concedes a weakness in your own position'),
         ('the sentence neither campaign wants',
          'marks a true claim that suits nobody')],
   trans=['admittedly', 'nevertheless', 'in short', 'against numbers of that '
          'size'],
  ),
 ],
 technique=dict(
  title='Two charts, two shapes: the hybrid answer',
  body=('This is the second hybrid question in the volume and the harder '
        'version, because here the two visuals describe the same subject. '
        'When that happens the danger is not disorganisation but repetition: '
        'saying the import figures twice, once in tonnes and once as a '
        'percentage, and calling it two paragraphs. The repair is to give the '
        'second visual a different job. If the first gives levels, the second '
        'gives shape, share or trend. Write down which job each one has '
        'before you start, and if you cannot name two different jobs, you are '
        'about to write the same paragraph twice.'),
  panel=[('Name the job of each visual',
          'Levels, shares, trend, shape. Two visuals, two different jobs, '
          'written down before you begin.'),
         ('One Overall for both',
          'As in unit 26. A single sentence covering both, naming the thing '
          'neither alone would show.'),
         ('Describe shape, not just endpoints',
          'A smooth slope and a sudden step are different findings from the '
          'same two endpoints.'),
         ('One proportional comparison',
          '"Five times the amount produced" does work that two absolute '
          'figures cannot.')],
  task='Take the two charts in cycle 3. Write the job of each, the Overall '
       'statement, and one sentence about shape that endpoints alone would '
       'not support.',
  qs=['What is the job of the first chart, in three words?',
      'What is the job of the second?',
      'Write the Overall statement covering both.',
      'What shape does the line have, and what does the shape imply?',
      'Write one proportional comparison.']),
 outlining=dict(
  title='Spot the intruder and the unequal on one list',
  body=('Two faults turn up in almost every brainstorm and both are easier '
        'to see in somebody else’s. The intruder is an idea that answers a '
        'neighbouring question rather than this one: it is true, it is '
        'interesting, and it belongs in a different essay. The unequal is a '
        'list that looks balanced and is not, where one idea carries four '
        'supports and another carries half of one. Read your own list twice, '
        'once asking of each idea "does this answer the exact words of the '
        'prompt", and once counting supports. The intruder goes; the unequal '
        'is either developed or merged into its neighbour.'),
  frame=('Less intensive farming is justified where the land spared by high '
         'yields is not in fact spared, which makes this a question about '
         'policy rather than about agronomy',
         [('Yield omits the drawdown of the soil, so the usual comparison is '
           'incomplete',
           ['organic matter loss raises yields while impoverishing the farm',
            'long-term trials measuring both find a narrower gap']),
          ('The land-sparing argument is the strongest case for intensity '
           'and depends on a policy that mostly does not exist',
           ['spared land stores carbon and holds species',
            'higher yields have not reduced the area farmed'])]),
  task='Take your brainstorm for the cycle 4 prompt. Mark every intruder, '
       'count the supports under each surviving idea, and write what you did '
       'about any inequality.',
  qs=['Which idea answered a neighbouring question rather than this one?',
      'Which idea had the most supports, and which the fewest?',
      'Did you develop the weak one or merge it?',
      'Does each surviving idea use the exact words of the prompt '
      'somewhere?'],
  answers=['usually something about animal welfare or about prices',
           'the soil argument is easy to support; land sparing needs '
           'research',
           'merging is usually right where two ideas share a mechanism',
           'if not, the idea is answering a question you were not asked']),
 candos=['I can read a rules notice for what would end my agreement',
         'I can give two charts of one subject two different jobs',
         'I can explain what a yield figure leaves out',
         'I can find the intruder and the unequal in my own brainstorm',
         'I can answer a to-what-extent prompt with a scope statement'],
 tip=('When two charts describe the same subject, write down the job of each '
      'before you write a sentence. If you cannot name two different jobs, '
      'you are about to write one paragraph twice.'),
)
