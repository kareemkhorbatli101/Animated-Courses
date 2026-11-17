# -*- coding: utf-8 -*-
"""Unit 6 - Travel and Tourism. IELTS Volume 1, band 5.0."""

_VIS = dict(kind='line',
            title='Monthly visitors to two towns',
            sub='thousands of visitors, 2024',
            ylab='visitors (thousands)',
            x=['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
            series=[('Carrowmoor (coast)', [4.1, 9.6, 26.3, 61.4, 22.8,
                                            5.2]),
                    ('Brantwell (city)', [18.4, 24.1, 31.7, 38.2, 33.6,
                                          21.9])])

UNIT = dict(
 n=6, vol=1, level='B1', band='5.0',
 theme='Travel and Tourism',
 opener=(
   'Two towns, one on the coast and one inland, and the same question '
   'asked of both: who actually gains when visitors arrive? You will '
   'book a walking holiday, read four residents of a tourist town who '
   'disagree with each other, describe two lines with very different '
   'shapes, and finish with four towns that tried to limit visitor '
   'numbers and got four different results. The technique page is the '
   'whole reading method, timed, on one passage.'),

 cycles=[
  dict(
   sub='Arranging a trip',
   step=1,
   read=[
    dict(heading='Hillcrest Tours: four walking holidays',
         kind='Brochure',
         task='Matching features and table completion',
         band='gt_short', qtype='Questions 1-6',
         skill=('A brochure is read for the grade and the '
                'supplements',
                ['Four holidays with five facts each is twenty facts '
                 'and you will be asked about four. Find the column the '
                 'question names.',
                 'The single-room supplement and the insurance line are '
                 'in every brochure and are tested more often than the '
                 'price.']),
         paras=[
          'Hillcrest A: the Low Fells, five days, grade 2, £645. Average '
          'nine kilometres a day on paths and farm tracks. Luggage is '
          'moved between hotels each morning.',
          'Hillcrest B: the High Fells, seven days, grade 4, £920. '
          'Average sixteen kilometres a day with sustained ascent, and '
          'two days above six hundred metres. Walkers must have '
          'completed a grade 3 holiday or equivalent.',
          'Hillcrest C: the Coast Path, six days, grade 3, £780. Average '
          'fourteen kilometres a day. This is the only holiday with no '
          'rest day, as the distances between villages cannot be '
          'shortened.',
          'Hillcrest D: the River Valleys, four days, grade 1, £510. '
          'Average seven kilometres a day, all on level ground, and the '
          'only holiday suitable for walkers who have not walked '
          'regularly before.',
          'All prices are per person sharing. A single room is charged '
          'at a supplement of £28 a night on every holiday. Dinner is '
          'included on all nights except the last.',
          'Insurance is not included and is compulsory. Walkers must '
          'send a certificate of cover at least fourteen days before '
          'departure, or the booking is cancelled without refund.'],
         items=[
          ('Which holiday has no rest day?',
           ['A', 'B', 'C', 'D'], 2,
           'Paragraph 3: the distances cannot be shortened.'),
          ('Which holiday requires previous experience?',
           ['A', 'B', 'C', 'D'], 1,
           'Paragraph 2: a grade 3 holiday or equivalent.'),
          ('Which holiday suits a walker who has not walked before?',
           ['A', 'B', 'C', 'D'], 3,
           'Paragraph 4, seven kilometres a day on level ground.'),
          ('The single-room supplement is £____________ a night.',
           None, '28', 'Paragraph 5, on every holiday.'),
          ('Dinner is included on all nights except the '
           '____________.', None, 'last',
           'Paragraph 5, with prices per person sharing.'),
          ('Proof of insurance must be sent at least ____________ days '
           'before departure.', None, 'fourteen',
           'Paragraph 6, or the booking is cancelled.')]),
    dict(heading='What is and is not included', kind='Terms notice',
         task='Short answer', band='gt_short', qtype='Questions 7-10',
         paras=[
          'The price includes accommodation, breakfast, dinner except on '
          'the final night, luggage transfer between hotels and a '
          'detailed route description for each day.',
          'It does not include travel to the starting point, lunch, drinks, '
          'or entry to any attraction along the route. A guide accompanies '
          'the group only on grade 4 holidays, and on all other grades '
          'walkers follow the route description themselves.',
          'Bookings may be changed once without charge if more than '
          'eight weeks remain before departure. Within eight weeks a '
          'change is treated as a cancellation and the usual charges '
          'apply.',
          'Cancellation charges are 30 per cent of the price within '
          'eight weeks, 60 per cent within four weeks, and the full '
          'price within ten days of departure.'],
         items=[
          ('What is transferred between hotels?', None, 'luggage',
           'Paragraph 1, along with a route description each day.'),
          ('On which holidays does a guide accompany the group?', None,
           'grade 4', 'Paragraph 2, and on no others.'),
          (
           'A booking can be changed free of charge more than '
           '____________ weeks before departure.', None,
           'eight',
           'Paragraph 3, after which it counts as a cancellation.'),
          ('What percentage is charged for cancelling within four '
           'weeks?', None, '60 per cent',
           'Paragraph 4, rising to the full price within ten days.')])],
   listen=[
    dict(heading='Booking a walking holiday', part='Part 1',
         task='A telephone call to a tour company', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Agent', 'Hillcrest Tours, good morning.'),
          ('Caller', 'I would like to book the Coast Path for two '
           'people.'),
          ('Agent', 'That is grade 3, six days, seven hundred and eighty '
           'pounds each. Have either of you walked with us before?'),
          ('Caller', 'My sister has. I have done a grade 2 with another '
           'company.'),
          ('Agent', 'That is fine for grade 3. It is grade 4 that '
           'requires previous experience with us.'),
          ('Caller', 'Good. We want the May departure.'),
          ('Agent', 'There are two in May. The eleventh and the '
           'twenty-fifth.'),
          ('Caller', 'The twenty-fifth.'),
          ('Agent', 'Two people sharing?'),
          ('Caller', 'Separate rooms, please.'),
          ('Agent', 'Then there is a supplement of twenty-eight pounds a '
           'night each, so for five nights that is a hundred and forty '
           'extra per person.'),
          ('Caller', 'That is more than I expected, but yes.'),
          ('Agent', 'Insurance is compulsory and not included. We need '
           'the certificate at least fourteen days before you '
           'travel.'),
          ('Caller', 'We have annual policies.'),
          ('Agent', 'That is usually fine. Check that it covers walking '
           'above three hundred metres, because about one policy in '
           'five does not.'),
          ('Caller', 'I will. What about dinner?'),
          ('Agent', 'Included every night except the last. And your '
           'booking reference is H C eight one three.'),
          ('Caller', 'Thank you.')],
         items=[
          ('Holiday booked: the ____________ Path', None, 'Coast',
           'Grade 3, six days, at £780 each.'),
          ('Departure date: ____________ May', None, '25',
           'The later of the two May departures.'),
          ('Room supplement per person: £____________', None, '140',
           'Five nights at £28 a night, each person.'),
          ('Insurance certificate due ____________ days before '
           'travel.', None, 'fourteen',
           'Compulsory and not included in the price.'),
          ('Policies must cover walking above ____________ metres.',
           None, 'three hundred',
           'About one policy in five does not.'),
          ('Booking reference: HC____________', None, '813',
           'Given by the agent at the end of the call.')])],
   speak=dict(
    part='Part 1', focus='Places you have travelled to',
    intro=('Two or three sentences each. Name the place and say one '
           'specific thing about it.'),
    qs=['Have you travelled much within your country?',
        'Do you prefer cities or the countryside?',
        'What kind of holiday do you enjoy?',
        'Would you like to travel more in the future?'],
    shape=[('answer', 'Not as much as I would like, mostly the coast '
            'in summer.'),
           ('support', 'We go to the same town every year because my '
            'grandmother lives there.'),
           ('follow-up', 'It is quiet in June and almost unusable in '
            'August, which has taught me to go early.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a tour company to change your booking',
         prompt=('You have booked a holiday but need to change it. '
                 'Write a letter to the company. In your letter: give '
                 'the details of your booking; explain why you need to '
                 'change it; ask what can be done. Write at least 150 '
                 'words.'),
         model=[
          'Dear Sir or Madam,',
          'I am booked on the Coast Path walking holiday departing on 25 '
          'May, reference HC813, for two people in separate rooms.',
          'I am writing to enquire whether the booking can be moved to '
          'the departure on 11 May. My sister, who is travelling with '
          'me, has been given a date for an operation on 28 May, which '
          'we were told would be in August. We would rather travel two '
          'weeks earlier than cancel.',
          'I understand from your terms that a booking may be changed '
          'once without charge when more than eight weeks remain, and '
          'that we are now inside that period. I am asking whether an '
          'exception can be made, and I am happy to provide the hospital '
          'letter.',
          'If a change is not possible, could you tell me whether the '
          'booking may be transferred to another walker instead? A '
          'colleague has said she would take my sister’s place, and '
          'she has walked the Coast Path before.',
          'I should be grateful for a reply by Friday, as the '
          'cancellation charge rises to 60 per cent after that.',
          'Yours faithfully,',
          'Rosamund Delacroix-Appiah'],
         notes=[
          'The writer states the rule that is against her before asking '
          'for the exception. A request that pretends the rule does not '
          'exist is refused by return of post.',
          'The second request — transferring the place to somebody else '
          '— is a different kind of solution, not a smaller version of '
          'the first. Offering the company a way to keep the money is '
          'what gets a yes.',
          'The deadline is justified by the company’s own charging '
          'structure, which the writer has read. That is the sentence '
          'that makes this letter arrive on the right desk.'],
         criterion=[('Stating the rule before asking for an '
                     'exception', 'Task Response'),
                    ('A second request of a different kind',
                     'Task Achievement'),
                    ('A deadline justified by the company’s own '
                     'terms', 'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Future arrangements and conditions',
    explain=('Arrangements already made take the present continuous; '
             'what depends on an answer takes a conditional.'),
    examples=['We are travelling on 25 May, if the booking stands.',
              'If the change is not possible, we will transfer the '
              'place.',
              'My sister is having an operation on 28 May.',
              'Should you be unable to move the booking, please let me '
              'know by Friday.'],
    task='Rewrite each sentence as an arrangement or a condition.',
    items=[('Our holiday is on 25 May.',
            'We are travelling on the Coast Path holiday on 25 May.'),
           ('Maybe you cannot change it. Then we will send somebody '
            'else.',
            'If the booking cannot be changed, we will transfer the place '
            'to another walker.'),
           ('My sister has an operation. It is on 28 May.',
            'My sister is having an operation on 28 May.'),
           ('Tell me by Friday.',
            'Should you be unable to help, I should be grateful to know '
            'by Friday.'),
           ('We do not want to cancel.',
            'We would rather travel two weeks earlier than cancel the '
            'holiday altogether.')]),
   vocab=[('itinerary', 'the plan of a journey day by day'),
          ('grade', 'a rating of how difficult something is'),
          ('supplement', 'an extra charge added to a price'),
          ('insurance', 'cover bought against accident or loss'),
          ('departure', 'the day a trip begins'),
          ('pass on a booking', 'to give a booking to somebody '
           'else'),
          ('cancellation charge', 'money kept when a booking ends'),
          ('route description', 'written directions for a walk')],
   expr=[('I am booked on, and would like to enquire whether',
          'the opening sentence of a request'),
         ('I understand from your terms that',
          'shows you have read the conditions'),
         ('if a change is not possible, could you tell me whether',
          'offers a second route to a solution'),
         ('I should be grateful for a reply by Friday',
          'sets a deadline with a reason')],
   trans=['furthermore', 'in addition', 'alternatively', 'in that '
          'case'],
  ),

  dict(
   sub='Visitors and residents',
   step=2,
   read=[
    dict(heading='Four residents of a tourist town',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Perpetua: I run the bakery and I take sixty per cent of my '
          'year between July and September. Everybody says tourism is '
          'seasonal as though it were an insult. So is farming, and nobody '
          'tells a farmer to find a proper job.',
          'B  Lysander: The buses are the whole argument for me. Four a '
          'day in February, eleven a day in August, and the ones in '
          'August are full of visitors so my mother cannot get to the '
          'hospital. Nobody at the council will admit those two facts '
          'are connected.',
          'C  Oyelaran: I grew up here and I cannot afford to live here, '
          'which is a sentence I have heard from every person my age '
          'who stayed. Half the houses on my street are let to '
          'visitors. The rent on the other half went up because of '
          'it.',
          'D  Thomasina: I moved here for the quiet and I complain about the '
          'crowds, which means I am one of the people who came. The '
          'difference between a visitor and a resident is about fifteen '
          'years, and I cannot defend treating them differently.'],
         items=[
          ('Which resident defends tourism against a common '
           'criticism?',
           ['Perpetua', 'Lysander', 'Oyelaran', 'Thomasina'], 0,
           'Seasonal work compared with farming.'),
          ('Which resident describes a service problem?',
           ['Perpetua', 'Lysander', 'Oyelaran', 'Thomasina'], 1,
           'Buses full of visitors in August.'),
          ('Which resident is concerned about housing?',
           ['Perpetua', 'Lysander', 'Oyelaran', 'Thomasina'], 2,
           'Half the street let to visitors, rents rising on the '
           'rest.'),
          ('Which resident admits to inconsistency?',
           ['Perpetua', 'Lysander', 'Oyelaran', 'Thomasina'], 3,
           'She moved there herself and complains about crowds.'),
          (
           'Lysander says the council has refused to discuss the bus '
           'problem.', ['True', 'False', 'Not Given'], 2,
           'He says nobody will admit the two facts are connected; a '
           'refusal to discuss is not stated.',
           {0: 'True would need a refusal; he says nobody will admit '
               'the connection.', 1: 'False would need him to say they have discussed it, '
               'and he does not.'}),
          ('Perpetua earns most of her income in three months.',
           ['True', 'False', 'Not Given'], 0,
           'Sixty per cent between July and September.',
           {1: 'False would need the earnings spread; she gives sixty '
               'per cent in three months.', 2: 'Not Given is wrong because she gives the figure '
               'herself.'})])],
   listen=[
    dict(heading='A town meeting on visitor numbers', part='Part 2',
         task='A talk at a town meeting', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Officer', 'Good evening. Before anybody argues, I am going '
           'to put the figures up, because half of this argument is '
           'people using different numbers.'),
          ('Officer', 'We had four hundred and ten thousand visitors '
           'last year in a town of six thousand people. Sixty-one '
           'thousand of them came in August alone.'),
          ('Officer', 'Here is the figure nobody expects. Eighty-four '
           'per cent of those visitors were day visitors. They arrive at '
           'eleven, leave at five, and spend on average eleven pounds '
           'each. An overnight visitor spends ninety-four.'),
          ('Officer', 'So the day visitors are four fifths of the '
           'crowding and less than a third of the money. That single '
           'fact changes what a sensible policy looks like, and it is '
           'why I am not asking you tonight to support fewer '
           'visitors.'),
          ('Officer', 'The costs are real and I will list them. Buses '
           'full in August. Car parks full by half past ten. Twenty-two '
           'per cent of our housing stock now let to visitors, and rents '
           'in the rest up by about a third in five years.'),
          ('Officer', 'The benefits are also real. Two hundred and '
           'eighty jobs, which is one in five of everybody working here, '
           'and the bus service that your mother uses in February exists '
           'because of the fares paid in August.'),
          ('Officer', 'What I am proposing is not a limit on numbers. '
           'It is a charge on coaches and on day parking, and free '
           'parking for anybody staying two nights or more. Shift the '
           'mix rather than the total.')],
         items=[
          ('The town had ____________ thousand visitors last year.',
           None, '410', 'In a town of six thousand residents.'),
          ('____________ per cent of visitors were day visitors.',
           None, 'Eighty-four',
           'Arriving at eleven and leaving at five.'),
          ('A day visitor spends about £____________.', None, '11',
           'Against ninety-four for an overnight visitor.'),
          ('____________ per cent of housing is now let to visitors.',
           None, 'Twenty-two',
           'With rents in the rest up about a third in five years.'),
          ('Tourism supports ____________ jobs in the town.', None,
           '280', 'About one in five of those working there.'),
          ('He proposes to shift the ____________ rather than the '
           'total.', None, 'mix',
           'Through charges on coaches and day parking.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Visiting',
    intro=('Short answers, then the long turn. Describe the place '
           'before and after.'),
    cue=('Describe a place that was changed by visitors.',
         ['where it is', 'what it was like before',
          'what changed', 'and explain whether the change was good '
          'or bad']),
    qs=['Do many tourists visit your area?',
        'Have you been somewhere very crowded?',
        'Now look at the card. You have one minute to make notes.',
        'Should towns control how many visitors they accept?'],
    shape=[('answer', 'A fishing village on the coast, about an hour '
            'from us.'),
           ('support', 'Ten years ago it had two cafés and a shop '
            'selling nets.'),
           ('follow-up', 'Now there are nine cafés and the shop sells '
            'postcards.'),
           ('support', 'The village is busier and better off and much '
            'emptier in winter.'),
           ('follow-up', 'Half the houses are empty from October, so '
            'the school lost a class, which is the part nobody '
            'photographs.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Does tourism do more good than harm to a small '
                 'town?',
         prompt=('Some people believe tourism does more harm than good '
                 'to small towns. Discuss the advantages and '
                 'disadvantages and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'Whether tourism helps or harms a small town depends almost '
          'entirely on what kind of visitor arrives, which is why the '
          'argument is usually conducted at cross purposes. The '
          'advantages and the disadvantages do not attach to the same '
          'people.',
          'The advantages are easy to measure and are usually '
          'understated by opponents. In a coastal town I know of six '
          'thousand residents, tourism supports two hundred and eighty '
          'jobs, which is one working person in five. It also pays for '
          'services that the residents use all year: the bus that runs '
          'four times a day in February exists because of the fares '
          'collected in August.',
          'The disadvantages fall on different residents from the '
          'benefits. Twenty-two per cent of the housing in that town is '
          'now let to visitors, and the rent on the remainder has risen '
          'by about a third in five years, which means that the people '
          'who grew up there cannot stay. Buses and car parks are full '
          'in the season, so an elderly resident cannot reach the '
          'hospital in August.',
          'My own view is that the useful question is not how many '
          'visitors but which kind. In the same town, eighty-four per '
          'cent of visitors come for the day, spending about eleven '
          'pounds each, while an overnight visitor spends ninety-four. '
          'Day visitors are therefore four fifths of the crowding and '
          'less than a third of the income.',
          'In conclusion, tourism does more good than harm where the '
          'town captures the money and controls the crowding, and more '
          'harm than good where it takes the crowding and sells eleven '
          'pounds of sandwiches. The policy that follows is not a limit '
          'on numbers but a charge on the visitors who contribute '
          'least.'],
         notes=[
          'Structure 5 with a thesis that reframes the question: not how '
          'many visitors but which kind. The reframing is supported by '
          'one statistic that the reader cannot argue with.',
          'The third paragraph names who bears the costs. Advantages and '
          'disadvantages that fall on different people is the real shape '
          'of this topic, and saying so is what lifts the essay.',
          'The conclusion converts the analysis into a policy, which is '
          'more than a summary and shows the examiner that the argument '
          'was going somewhere.'],
         criterion=[('A thesis that reframes the question',
                     'Task Response'),
                    ('Naming who bears the costs',
                     'Task Response'),
                    ('A conclusion that produces a policy',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Balanced comparison: on the whole, in the main',
    explain=('Weighing two sides needs phrases that mark where the '
             'balance falls without pretending the other side does not '
             'exist.'),
    examples=['On the whole the town gains, although not every '
              'resident does.',
              'For the shops it is a good season; for residents it is a '
              'difficult one.',
              'In the main, the costs fall on people who do not receive '
              'the benefits.',
              'Taken together, the gains are larger and are shared '
              'unevenly.'],
    task='Rewrite each one-sided statement as a balanced one.',
    items=[('Tourism is good for the town.',
            'On the whole the town gains from tourism, although the gains '
            'are unevenly shared.'),
           ('Tourism ruins small towns.',
            'Tourism imposes real costs on residents, particularly in '
            'housing and transport, while supporting one job in five.'),
           ('The shops do well.',
            'For the shops the season is profitable; for residents '
            'without a connection to it, it is mainly an '
            'inconvenience.'),
           ('Rents went up.',
            'Rents have risen by about a third, chiefly because a fifth '
            'of the housing is now let to visitors.'),
           ('Day visitors are the problem.',
            'Day visitors account for most of the crowding and a small '
            'share of the spending, which is the imbalance at the heart '
            'of the issue.')]),
   vocab=[('day visitor', 'somebody who arrives and leaves the same '
           'day'),
          ('overnight stay', 'a visit that includes a night'),
          ('holiday let', 'a house rented to visitors'),
          ('second home', 'a house owned but not lived in all year'),
          ('crowding', 'too many people in one place'),
          ('guesthouse', 'a small place to stay'),
          ('coach party', 'a group arriving together by bus'),
          ('seasonal employment', 'work that exists only part of the '
           'year')],
   expr=[('for the shops it is, whereas for residents',
          'separates two experiences of one thing'),
         ('four fifths of the crowding and less than a third of the '
          'money', 'the imbalance this unit is built on'),
         ('the bus in February exists because of the fares in August',
          'connects a benefit to its source'),
         ('the difference between a visitor and a resident is fifteen '
          'years', 'admits an inconsistency')],
   trans=['on the one hand', 'on the other', 'on balance', 'taken '
          'together'],
  ),

  dict(
   sub='When visitors arrive',
   step=2,
   read=[
    dict(heading='A year of arrivals in two towns',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 29-34',
         figure=_VIS,
         paras=[
          'The graph above shows monthly visitor numbers to two towns in '
          'the same county during one year. The totals are not very '
          'different, at about three hundred and fifty thousand for '
          'each, and the shapes are almost opposites.',
          'Carrowmoor is on the coast and has what tourism officers call '
          'a sharp season. It receives four thousand visitors in January '
          'and sixty-one thousand in July, a difference of more than '
          'fifteen times, and nearly half its year arrives in two '
          'months.',
          'Brantwell is a city twenty miles inland with a cathedral, two '
          'museums and a university. Its lowest month is eighteen '
          'thousand and its highest thirty-eight thousand, so the summer '
          'peak is real and modest, and no month is empty.',
          'The difference matters more than the totals. A hotel in '
          'Brantwell can employ people all year and can borrow money '
          'against a predictable income. A hotel in Carrowmoor earns in '
          'twelve weeks what it must live on for fifty-two, and employs '
          'staff who leave in October.',
          'This is why most tourism policy is about the shape rather '
          'than the size of the season. Moving ten thousand visitors '
          'from July to May helps a coastal town more than adding ten '
          'thousand in July, and costs the town nothing except the '
          'advertising.'],
         items=[
          ('Which paragraph explains why the shape matters more than '
           'the total?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Employment all year and borrowing against predictable '
           'income.'),
          ('Which paragraph describes a town with no empty month?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Brantwell, between eighteen and thirty-eight thousand.'),
          ('Which paragraph gives the aim of most tourism policy?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 3,
           'Moving visitors from July to May.'),
          ('Carrowmoor receives nearly half its visitors in '
           '____________ months.', None, 'two',
           'Paragraph 2, where July alone brings sixty-one '
           'thousand.'),
          ('A hotel in Carrowmoor earns in ____________ weeks what it '
           'must live on for a year.', None, 'twelve',
           'Paragraph 4, and loses its staff in October.'),
          ('Moving visitors to May costs a town nothing except the '
           '____________.', None, 'advertising',
           'Paragraph 5, which is why policy aims at the shape.')])],
   listen=[
    dict(heading='A tourism officer on the season', part='Part 3',
         task='A discussion with a tourism officer', band='l3',
         qtype='Questions 35-40',
         figure=_VIS,
         script=[
          ('Lysander', 'You keep saying the season is the problem. '
           'Explain that, because the busy months are when we make the '
           'money.'),
          ('Officer', 'They are, and that is exactly the problem. Look '
           'at the two lines. Carrowmoor goes from four thousand in '
           'January to sixty-one thousand in July.'),
          ('Lysander', 'And Brantwell?'),
          ('Officer', 'Eighteen to thirty-eight. Same annual total, '
           'completely different business.'),
          ('Lysander', 'Why does that follow?'),
          ('Officer', 'Because a hotel in Brantwell can keep a chef in '
           'February. Ours cannot. We train somebody in May and they '
           'are gone in October, so we train somebody new next May, for '
           'ever.'),
          ('Lysander', 'That is a real cost.'),
          ('Officer', 'It is about nine per cent of turnover in this '
           'town, according to the figures the hotels gave me, and it is '
           'invisible in every argument about visitor numbers.'),
          ('Lysander', 'So what do you want? Fewer in August?'),
          ('Officer', 'More in May. The capacity exists in May. Every '
           'bed is empty, every table is free, and the roads are '
           'passable.'),
          ('Lysander', 'Can you move people?'),
          ('Officer', 'A little. Two towns on this coast have shifted '
           'about eight per cent of their season by advertising and by '
           'pricing. That is not nothing when the alternative is '
           'nothing.'),
          ('Lysander', 'And it costs?'),
          ('Officer', 'The advertising. No new car park, no new road, no '
           'argument with anybody about numbers. It is the cheapest '
           'thing on my list and the hardest to get anyone excited '
           'about.')],
         items=[
          ('Carrowmoor rises from four thousand in January to '
           '____________ thousand in July.', None, 'sixty-one',
           'Against eighteen to thirty-eight in Brantwell.'),
          ('A Brantwell hotel can keep a ____________ in February.',
           None, 'chef', 'Which a Carrowmoor hotel cannot.'),
          ('Retraining staff each year costs about ____________ per '
           'cent of turnover.', None, 'nine',
           'According to figures the hotels supplied.'),
          ('He wants more visitors in', ['August', 'May', 'January',
            'October'], 1,
           'Because the capacity already exists then.'),
          ('Two towns have shifted about ____________ per cent of '
           'their season.', None, 'eight',
           'By advertising and by pricing.'),
          ('The only cost of the approach, he says, is the '
           '____________.', None, 'advertising',
           'No new roads or car parks are needed.')])],
   speak=dict(
    part='Part 3', focus='Spreading visitors through the year',
    intro=('Three or four sentences. Name a cost that is not '
           'obvious.'),
    qs=['Why do most people travel at the same time of year?',
        'How could towns attract visitors outside the summer?',
        'Is seasonal work a problem?',
        'Should prices be higher in the busiest season?'],
    shape=[('answer', 'Mostly because of school holidays rather than '
            'the weather.'),
           ('support', 'Our coast is better in May than in August and '
            'nearly empty.'),
           ('follow-up', 'The hidden cost of a short season is '
            'training.'),
           ('support', 'Hotels train staff in May and lose them in '
            'October.'),
           ('follow-up', 'That costs about nine per cent of turnover '
            'where I live, and nobody mentions it in the argument about '
            'crowds.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Monthly visitor numbers to two towns',
         prompt=('The graph below shows the number of visitors to two '
                 'towns in each month of one year. Summarise the '
                 'information by selecting and reporting the main '
                 'features, and make comparisons where relevant. Write '
                 'at least 150 words.'),
         figure=_VIS,
         model=[
          'The line graph compares monthly visitor numbers to '
          'Carrowmoor, a coastal town, and Brantwell, an inland city, '
          'across one year. Overall, both received most visitors in the '
          'summer, but Carrowmoor’s season was far sharper: its figures '
          'varied by a factor of fifteen across the year, while '
          'Brantwell’s never fell below half of its peak.',
          'Carrowmoor began the year with only 4,100 visitors in January '
          'and rose steeply through the spring, reaching 26,300 in May '
          'and peaking at 61,400 in July. The fall afterwards was '
          'equally sharp, to 22,800 in September and 5,200 by November.',
          'Brantwell followed a much flatter path. It started at 18,400 '
          'in January, which was already more than four times '
          'Carrowmoor’s figure, and rose gradually to a July peak of '
          '38,200 before declining to 21,900 in November.',
          'The two lines crossed twice. Carrowmoor was below Brantwell '
          'from January until some point between May and July, above it '
          'during the summer peak, and below it again by September. '
          'Brantwell was therefore the busier town for most of the year '
          'despite having the lower maximum.'],
         notes=[
          'The Overall statement compares the shapes rather than the '
          'values: one sharp season, one flat year. On a graph like this, '
          'that is the comparison being tested.',
          'The crossings are reported together in the final paragraph, '
          'with the consequence drawn: the lower peak belongs to the '
          'busier town. A reader could not work that out from the '
          'figures alone.',
          'Each town gets one paragraph and the comparison gets a third. '
          'Alternating between the two every sentence is harder to read '
          'and usually produces repetition.'],
         criterion=[('An Overall comparing shapes, not values',
                     'Task Achievement'),
                    ('The crossings reported with their consequence',
                     'Task Achievement'),
                    ('One paragraph each, then a comparison',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing peaks, troughs and plateaux',
    explain=('A line graph needs words for the shape as well as the '
             'direction, and the shape words are what distinguish two '
             'series.'),
    examples=['Both peak in August, but Brantwell holds its numbers '
              'through the autumn.',
              'Carrowmoor rose steeply from March and fell away after '
              'July.',
              'Brantwell’s line is comparatively flat throughout.',
              'Numbers bottomed out in January before recovering.'],
    task='Rewrite each flat description with shape words.',
    items=[('Carrowmoor had more visitors in summer.',
            'Carrowmoor rose steeply through the spring to a sharp peak '
            'of 61,400 in July.'),
           ('Brantwell did not change much.',
            'Brantwell’s numbers remained comparatively flat, between '
            '18,400 and 38,200.'),
           ('Both were highest in July.',
            'Both towns peaked in July, though Carrowmoor’s peak was '
            'far more pronounced.'),
           ('Carrowmoor was very low in January.',
            'Carrowmoor bottomed out at 4,100 in January before rising '
            'from March onwards.'),
           ('Numbers fell after the summer.',
            'Numbers fell away sharply after July in Carrowmoor and '
            'declined gradually in Brantwell.')]),
   vocab=[('busiest month', 'the month with the most visitors'),
          ('shoulder season', 'the months either side of the peak'),
          ('off-season', 'the quiet part of the year'),
          ('sharp season', 'a season concentrated into a few weeks'),
          ('money taken', 'what a business receives in a year'),
          ('room to take more', 'spare space for extra visitors'),
          ('retraining', 'training new staff to replace those who '
           'left'),
          ('predictable income', 'money that arrives at a known '
           'rate')],
   expr=[('both peak in August, but the second holds its numbers',
          'compares two shapes in one sentence'),
         ('earns in twelve weeks what it must live on for fifty-two',
          'the sentence this cycle turns on'),
         ('the capacity exists in May',
          'states the opportunity precisely'),
         ('the cheapest thing on my list and the hardest to get anyone '
          'excited about', 'explains why good policy is ignored')],
   trans=['whereas', 'by contrast', 'overall', 'in the same period'],
  ),

  dict(
   sub='What tourism does to a place',
   step=3,
   read=[
    dict(heading='Jobs, prices and the people who leave',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given and summary '
              'completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'Tourism is unusual among large industries in that its '
          'customers come to the factory rather than the other way '
          'about. Everything that follows from that sentence explains '
          'why the arguments about it are so bitter. The production '
          'and the consumption happen in the place where people live. '
          'The costs and the benefits are experienced by the same '
          'residents in quite different proportions, and no accounting '
          'exercise can separate them.',
          'The benefits are straightforward, easy to measure, and usually '
          'understated by the people who dislike the industry most. Tourism '
          'employs about one worker in ten worldwide, and in small towns '
          'with few other employers the proportion is often closer to one in '
          'five. The jobs appear quickly, need less formal training than '
          'most, and arrive in places that have few alternatives, which is '
          'precisely where they are most needed. A coastal town losing its '
          'fishing industry has very little else to put in its place.',
          'The costs appear more slowly and are mostly about housing. '
          'A house let to visitors earns three or four times what the '
          'same house earns from a resident tenant. Owners therefore '
          'convert, the supply of ordinary housing falls, and rents '
          'rise for everybody who is not already an owner. In several '
          'studied towns, a fifth of the housing moved to visitor '
          'letting within a decade and rents on the remainder rose by '
          'about a third. Nobody in that chain behaves badly: each '
          'owner is responding to a difference in income too large to '
          'ignore.',
          'The second cost is the shape of the work rather than its '
          'quantity. Seasonal employment pays for twelve weeks and has '
          'to support fifty-two of them. The hotels that provide it '
          'train new staff every spring, because the previous year\u2019s '
          'staff left in October and found work elsewhere. The cost of '
          'that retraining has been estimated at close to a tenth of '
          'takings in sharply seasonal towns, and it never appears in '
          'any public argument about visitor numbers.',
          'What makes the argument intractable is that these two lists fall '
          'on different people. The jobs go to the people who need them '
          'most; the higher rents are paid by that same group. The owner who '
          'converts a house gains, the tenant who can no longer find one '
          'loses, and the two of them live on the same street and attend the '
          'same public meeting. Neither list is dishonest, and neither '
          'answers the other.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Customers come to the factory',
            'The benefits, understated', 'Housing and rents',
            'Why the argument cannot be settled'], 1,
           'One worker in ten, one in five in small towns.'),
          ('Choose the best heading for paragraph 3.',
           ['The housing cost', 'Seasonal work',
            'Jobs that need little training', 'Different people'], 0,
           'Houses converted to visitor letting, and rents rising.'),
          ('Choose the best heading for paragraph 5.',
           ['Two lists, different people', 'What critics understate',
            'The cost of retraining', 'Where the jobs appear'], 0,
           'The owner gains and the tenant loses on the same street.'),
          ('Tourism employs about one in five workers worldwide.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 2 says one in ten worldwide and one in five in '
           'small towns.',
           {0: 'True would need one in five worldwide; paragraph 2 '
               'gives one in ten.', 2: 'Not Given is wrong because both figures are stated.'}),
          (
           'A house let to visitors earns more than one let to a '
           'resident.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 3 says three or four times as much.',
           {1: 'False would need the reverse; paragraph 3 says three '
               'or four times as much.', 2: 'Not Given is wrong because the comparison is made '
               'directly.'}),
          (
           'The writer believes tourism should be discouraged in small '
           'towns.', ['True', 'False', 'Not Given'], 2,
           'No recommendation of that kind is made.',
           {0: 'Yes would need that recommendation, and none is made.', 1: 'No would need him to argue for tourism, which he does '
               'not.'}),
          ('In several studied towns, a ____________ of the housing '
           'stock moved to visitor letting in a decade.', None,
           'fifth', 'Paragraph 3, with rents rising by a third.'),
          ('Retraining has been estimated at close to a ____________ '
           'of turnover.', None, 'tenth',
           'Paragraph 4, in sharply seasonal towns.')])],
   listen=[
    dict(heading='A lecture on tourism economics', part='Part 4',
         task='A lecture on who gains from tourism', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'Tourism is the only major industry where the '
           'customer comes to the factory, and almost everything '
           'difficult about it follows from that one sentence.'),
          ('Lecturer', 'Start with the benefits, because the people who '
           'dislike tourism habitually understate them. One worker in '
           'ten worldwide, one in five in a small town. Jobs that appear '
           'within a season, need little formal training, and arrive '
           'exactly where there are no alternatives.'),
          ('Lecturer', 'Now the costs, and the first is housing. A house '
           'let to visitors earns three to four times what a resident '
           'tenant pays. No landlord is behaving badly by converting; '
           'they are responding to a difference that large. Supply '
           'falls, rents rise, and the people who serve the visitors '
           'cannot afford to live near them.'),
          ('Lecturer', 'The second cost is seasonality, and it is the '
           'one economists find most interesting. Twelve weeks of income '
           'supporting fifty-two weeks of life, and a workforce that '
           'turns over completely every year. Retraining costs close to '
           'a tenth of turnover in the sharpest towns.'),
          ('Lecturer', 'And here is what makes the argument impossible '
           'to settle in a public meeting. Both lists are true, and they '
           'describe different people. The man whose bakery takes sixty '
           'per cent of its income in eight weeks and the woman who '
           'cannot rent a flat are both correct, and they are not '
           'discussing the same question.'),
          ('Lecturer', 'So the policies that work are not about the '
           'total number of visitors at all. They are about which '
           'visitors, in which months, and what happens to the housing. '
           'Those three questions have answers. "Is tourism good?" does '
           'not.')],
         items=[
          ('He says tourism is the only major industry where the '
           '____________ comes to the factory.', None, 'customer',
           'From which everything difficult follows.'),
          ('Tourism employs one worker in ____________ worldwide.',
           None, 'ten', 'And one in five in a small town.'),
          ('A house let to visitors earns three to four times what a '
           'resident ____________ pays.', None, 'tenant',
           'Which is why so many owners convert them.'),
          ('He says no landlord is behaving ____________ by '
           'converting.', None, 'badly',
           'They are responding to a large difference.'),
          ('Retraining costs close to a ____________ of turnover in '
           'the sharpest towns.', None, 'tenth',
           'Because the workforce changes completely each year.'),
          ('The question that he says has no answer is',
           ['which visitors', 'which months', 'is tourism good',
            'what about housing'], 2,
           'Unlike the three specific questions he lists.')])],
   speak=dict(
    part='Part 3', focus='Who gains from tourism',
    intro=('Four sentences. Say who gains and who pays.'),
    qs=['Who benefits most from tourism in a town?',
        'Should local people get priority for housing?',
        'Is seasonal work worth having?',
        'How should tourism money be spent?'],
    shape=[('answer', 'The people who own something and the people who '
            'serve, in that order.'),
           ('support', 'A house let to visitors earns three or four '
            'times what a tenant pays.'),
           ('follow-up', 'So owners convert, and the staff who serve '
            'the visitors cannot afford to live there.'),
           ('support', 'Both of those are true at once.'),
           ('follow-up', 'Which is why the town meeting never settles '
            'anything, because the two sides are answering different '
            'questions.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should towns limit visitor numbers?',
         prompt=('Should towns limit the number of visitors they '
                 'accept? Brainstorm eight ideas and keep only those '
                 'you can develop in four sentences. Twelve minutes.'),
         plan=('Towns should not limit total visitor numbers and should '
               'change which visitors come and what happens to housing, '
               'because the crowding and the income come from different '
               'groups of visitors',
               [('The total is the wrong thing to control',
                 ['day visitors are four fifths of the crowding and '
                  'under a third of the spending',
                  'a limit removes income and crowding in the same '
                  'proportion']),
                ('What can be controlled works better',
                 ['charges on coaches and day parking shift the mix '
                  'without reducing the total',
                  'rules on converting housing address the cost that '
                  'actually drives people out'])]),
         notes=[
          'The test on this page is development. "Tourists cause litter" '
          'is true and you cannot write four sentences about it that an '
          'examiner would value; cross it out even though it is '
          'correct.',
          'The thesis rejects the instrument in the question and names '
          'two that would work instead. Rejecting the proposed '
          'instrument is the strongest answer available to a "should X" '
          'question when the evidence supports it.',
          'Every support is a figure from this unit. A plan made from '
          'figures is quick to write from, because each support already '
          'contains its own example.'],
         criterion=[('Ideas kept only if they can be developed',
                     'Task Response'),
                    ('A thesis that names the better instrument',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Cause and consequence in an economy',
    explain=('An economic chain needs each step joined to the next, or '
             'the reader supplies a different chain.'),
    examples=['Because visitor lets earn more, owners convert, so '
              'supply falls and rents rise.',
              'The gain is real but it is not evenly distributed.',
              'Seasonal work leads to annual retraining, which costs '
              'about a tenth of turnover.',
              'Rising rents drive out the people who staff the '
              'hotels.'],
    task='Join each pair into a chain with its steps shown.',
    items=[('Visitor lets earn more. Rents rise.',
            'Because a visitor let earns three or four times as much, '
            'owners convert, the supply of housing falls and rents '
            'rise.'),
           ('The season is short. Hotels retrain every year.',
            'A short season means staff leave in October, so hotels '
            'retrain new people every spring.'),
           ('Rents rise. Staff cannot live there.',
            'As rents rise, the people who staff the hotels can no longer '
            'afford to live in the town they work in.'),
           ('Tourism creates jobs. Not everybody benefits.',
            'Tourism creates jobs where there are few alternatives, '
            'although the gain is not evenly distributed.'),
           ('Day visitors are many. They spend little.',
            'Day visitors make up most of the crowding while contributing '
            'a small share of the spending.')]),
   vocab=[('rent', 'the money paid to live in a property'),
          ('homes in the town', 'all the housing in one place'),
          ('convert a property', 'to change what a house is used '
           'for'),
          ('resident tenant', 'somebody who rents a home to live in'),
          ('staff leaving', 'the rate at which workers go'),
          ('low season', 'the quietest part of the year'),
          ('local alternatives', 'other work available in the area'),
          ('priced out', 'unable to afford to stay somewhere')],
   expr=[('the gain is real but it is not evenly distributed',
          'the sentence this cycle is built on'),
         ('the customer comes to the factory',
          'explains why tourism is different'),
         ('both lists are true and they describe different people',
          'why the argument cannot be settled'),
         ('those three questions have answers',
          'replaces an unanswerable question with answerable ones')],
   trans=['consequently', 'in turn', 'as a result', 'which means '
          'that'],
  ),

  dict(
   sub='Whether limits would work',
   step=4,
   read=[
    dict(heading='Four towns that tried to cap visitors',
         kind='Academic passage',
         task='Matching information, True/False/Not Given and short '
              'answer',
         band='acad', qtype='Questions 55-62',
         paras=[
          'Four towns in Europe have tried, within the last fifteen years, '
          'to limit the number of visitors they accept. The results are '
          'different enough to be instructive and similar enough to suggest '
          'a rule, and the rule turns out not to be the one that either side '
          'of the argument expected to find.',
          'The first town limited the number of cruise passengers who could '
          'come ashore on any one day, which was the measure its residents '
          'had asked for. Arrivals fell by the intended amount, and the '
          'ships moved to a port forty kilometres away whose own arrivals '
          'rose by almost the same number. The passengers still visited, '
          'arriving by coach from the other port, and spent slightly less '
          'than before because they now had less time in the town.',
          'The second town charged an entry fee on day visitors at the '
          'busiest periods. Day numbers fell by about eleven per cent, '
          'overnight numbers were unaffected, and total spending rose, '
          'because the composition of the crowd shifted towards people '
          'who were staying. This is the result most often quoted by '
          'supporters of limits. It is worth noticing that it is the '
          'only one of the four that did what was intended by the '
          'people who introduced it.',
          'The third town capped the number of beds available by refusing '
          'new licences for visitor letting. The number of licensed beds '
          'duly stopped rising; the number of unlicensed ones rose instead, '
          'and the town found itself enforcing the rule against its own '
          'residents rather than against any visitor. That proved '
          'politically unsustainable and the policy was abandoned after '
          'three years.',
          'The fourth town did not cap anything. It raised the price of '
          'parking in the centre, put the money into a park-and-ride '
          'service, and advertised heavily in the two months either side '
          'of the peak. Its peak month fell by six per cent and its '
          'shoulder months rose by nineteen, with no limit, no '
          'enforcement and no argument in the local newspaper.',
          'The pattern across the four is that limits on the thing you can '
          'count move the thing you cannot. Capping numbers moved the '
          'problem rather than solving it in two of the four cases, and the '
          'two approaches that worked both changed the price of something '
          'rather than forbidding it. That is a conclusion about how people '
          'respond to rules rather than a conclusion about tourism, and it '
          'holds well beyond this subject.'],
         items=[
          ('Which paragraph describes a measure that moved visitors to '
           'another port?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 0,
           'Cruise passengers landing forty kilometres away.'),
          ('Which paragraph describes enforcement against residents?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Unlicensed beds after new licences were refused.'),
          ('Which paragraph describes a town that capped nothing?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Parking prices, park-and-ride and advertising.'),
          ('All four measures achieved what was intended.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 3 says only one of the four did.',
           {0: 'True would need all four to work; paragraph 3 says one '
               'did.', 2: 'Not Given is wrong because each of the four is '
               'assessed.'}),
          ('In the second town, overnight visitor numbers fell.',
           ['True', 'False', 'Not Given'], 1,
           'Overnight numbers were unaffected by the charge.',
           {0: 'True would need a fall; the charge left overnight '
               'numbers unaffected.', 2: 'Not Given is wrong because the second town is reported '
               'in detail.'}),
          ('The third town\u2019s policy was unpopular with visitors.',
           ['True', 'False', 'Not Given'], 2,
           'It was unsustainable politically because of residents, not '
           'visitors.',
           {0: 'True would need visitor opinion; the objection came '
               'from residents.', 1: 'False would need the text to say visitors liked it, '
               'and it does not.'}),
          ('By how much did day numbers fall in the second town?',
           None, '11 per cent',
           'Paragraph 3, while total spending rose.'),
          ('In the fourth town, shoulder months rose by ____________ '
           'per cent.', None, 'nineteen',
           'Paragraph 5, while the peak fell by six.')])],
   listen=[
    dict(heading='Two officials disagree about caps', part='Part 4',
         task='A recorded discussion', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Ms Vasquez-Hollander introduced a visitor cap in '
           'her town. Mr Obafemi-Lindqvist opposed one in his. Each '
           'begins with the strongest point against their own '
           'position.'),
          ('Vasquez-Hollander', 'Mine is that our cap moved about a '
           'third of the problem to the next town along the coast, and '
           'I knew it would. I said at the time that it was not my '
           'responsibility, which was true and was not an answer.'),
          ('Obafemi-Lindqvist', 'And mine is that I opposed a cap and '
           'offered nothing for four years. Pricing and advertising '
           'eventually worked for us, and in the meantime my residents '
           'had four bad summers while I explained that caps do not '
           'work.'),
          ('Chair', 'Thank you both. So after those admissions, where '
           'does the disagreement actually lie?'),
          ('Vasquez-Hollander', 'On what a town does when it has no time '
           'left. His approach took five years. Mine worked in one '
           'season, badly.'),
          ('Obafemi-Lindqvist', 'Which is the honest version of the '
           'argument for caps and the one that is never made. It is not '
           'that they work; it is that they work immediately.'),
          ('Vasquez-Hollander', 'And a council that has had three '
           'hundred complaints this August cannot say "come back in five '
           'years".'),
          ('Obafemi-Lindqvist', 'May I say the thing we have both '
           'learned, since it is the only part of this worth printing? '
           'Every measure that worked anywhere changed a price. Every '
           'measure that failed forbade something, and the thing it '
           'forbade simply moved.'),
          ('Vasquez-Hollander', 'That is true of all four towns in the '
           'study, including mine, and I would put it on the wall of '
           'every council chamber in Europe.')],
         items=[
          ('The first official admits her cap moved about a '
           '____________ of the problem to the next town.', None,
           'third', 'Which she admits she knew at the time.'),
          ('She says her reply at the time was true and was not an '
           '____________.', None, 'answer',
           'That it was not her responsibility.'),
          ('The second official admits he offered nothing for '
           '____________ years.', None, 'four',
           'While explaining that caps do not work.'),
          ('He says the honest argument for caps is that they work',
           ['cheaply', 'immediately', 'locally', 'permanently'], 1,
           'Rather than that they work well.'),
          ('Measures that worked changed a ____________.', None,
           'price', 'While measures that failed forbade something.'),
          ('She says that pattern holds for all ____________ towns in '
           'the study.', None, 'four',
           'Including her own town, she says.')])],
   speak=dict(
    part='Part 3', focus='Rules that change behaviour',
    intro=('Four or five sentences. Compare forbidding with pricing.'),
    qs=['Do rules or prices change behaviour more effectively?',
        'Should visitors pay a tax to enter popular places?',
        'What happens when one town restricts something?',
        'Who should decide these rules?'],
    shape=[('answer', 'Prices, in almost every case I have read '
            'about.'),
           ('support', 'Four towns tried to limit visitors and only '
            'the pricing ones worked.'),
           ('follow-up', 'The ones that forbade something moved the '
            'problem somewhere else.'),
           ('support', 'A cap on cruise passengers sent the ships '
            'forty kilometres away.'),
           ('follow-up', 'The visitors still came by coach, spent less '
            'and the next town got the crowds, which helps '
            'nobody.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should towns limit the number of visitors?',
         prompt=('Some towns have limited the number of visitors they '
                 'accept. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Towns that limit visitor numbers are usually responding to a '
          'real problem with the wrong instrument. My view is that the '
          'crowding is genuine and the cap is the least effective answer '
          'to it, with one exception that supporters rarely state '
          'openly.',
          'The case for limits is easy to understand. A town of six '
          'thousand people receiving four hundred thousand visitors has '
          'full buses, full car parks and residents who cannot reach a '
          'hospital in August. Those are not complaints about atmosphere; '
          'they are failures of ordinary services, and the people '
          'affected are entitled to a remedy that works this year.',
          'The case against rests on what actually happened in the towns '
          'that tried. One capped cruise landings and the ships docked '
          'forty kilometres away, so the passengers arrived by coach, '
          'stayed for less time and spent less money. Another refused '
          'new letting licences and found itself enforcing against its '
          'own residents, which it abandoned after three years. In both '
          'cases the problem moved rather than disappearing.',
          'What worked was pricing. One town charged day visitors at '
          'peak times, saw day numbers fall by about a tenth and total '
          'spending rise. Another raised parking charges, funded a '
          'park-and-ride and advertised the quieter months, reducing its '
          'peak by six per cent and raising its shoulder months by '
          'nineteen.',
          'In conclusion, I would use charges rather than caps, while '
          'accepting the one honest argument for a cap: it works '
          'immediately, and a council facing three hundred complaints '
          'this August cannot tell its residents to wait five years. '
          'That is a reason to act quickly, not a reason to act '
          'badly.'],
         notes=[
          'Structure 3 with a third position built from evidence rather '
          'than from compromise. Each side is given the strongest version '
          'of its case, and the decision is made on what the four towns '
          'actually did.',
          'The conclusion concedes the opponents’ best argument — '
          'immediacy — and then limits it in one sentence. Conceding '
          'something real at the end is far stronger than conceding '
          'nothing.',
          'Numbers do most of the work here: eleven per cent, six, '
          'nineteen, forty kilometres. A discussion essay with figures '
          'reads as knowledge rather than as opinion.'],
         criterion=[('A third position built from evidence',
                     'Task Response'),
                    ('The opponents’ best argument conceded and '
                     'limited', 'Task Response'),
                    ('Figures used rather than adjectives',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Hypothetical past: had they not capped numbers',
    explain=('Talking about what would have happened needs the third '
             'conditional, and the inverted form is more formal.'),
    examples=['Had the town not capped arrivals, the ships would have '
              'stayed.',
              'If they had raised prices instead, the problem would not '
              'have moved.',
              'The policy would have worked if the next port had done '
              'the same.',
              'Had I acted sooner, my residents would have had three '
              'better summers.'],
    task='Rewrite each sentence as a third conditional.',
    items=[('They capped arrivals and the ships left.',
            'Had the town not capped arrivals, the ships would not have '
            'moved to another port.'),
           ('They refused licences and unlicensed beds appeared.',
            'If the town had not refused new licences, unlicensed letting '
            'would not have increased so sharply.'),
           ('He opposed a cap and did nothing for four years.',
            'Had he proposed pricing earlier, his residents would have '
            'avoided four difficult summers.'),
           ('They raised parking charges and the peak fell.',
            'If they had not raised parking charges, the peak month would '
            'not have fallen by six per cent.'),
           ('The next town did not cap, so the problem moved.',
            'Had the neighbouring port imposed the same limit, the '
            'problem would not simply have moved along the coast.')]),
   vocab=[('visitor levy', 'a charge paid by visitors'),
          ('park-and-ride', 'a car park served by buses into town'),
          ('cruise ship', 'a large passenger ship'),
          ('moved the problem', 'sent a difficulty somewhere else'),
          ('unlicensed', 'operating without official permission'),
          ('politically unsustainable', 'impossible to keep doing and '
           'stay elected'),
          ('shoulder months', 'the months either side of the busiest'),
          ('residents parking', 'parking reserved for local people')],
   expr=[('capping numbers moved the problem rather than solving it',
          'the sentence this unit ends on'),
         ('limits on the thing you can count move the thing you '
          'cannot', 'states the general rule'),
         ('every measure that worked changed a price',
          'the finding worth remembering'),
         ('a reason to act quickly, not a reason to act badly',
          'concedes and limits in one line')],
   trans=['admittedly', 'and yet', 'on balance', 'in short'],
  ),
 ],
 technique=dict(
  title='The two routes, timed, on a 500-word passage',
  body=('You have now met both ways of working through a passage, and '
        'this page asks you to time them on the same text so that you '
        'know your own numbers rather than somebody else’s. Route one '
        'is the loop: thirty seconds on the title and the first '
        'paragraph, two minutes loading the questions, then one '
        'paragraph at a time, answering what each paragraph gives you '
        'and underlining as you go. Route two is read-then-answer: read '
        'the whole passage once at your natural speed, then work '
        'through the questions, returning to the text for each. Do the '
        'cycle 4 passage by route one and the cycle 5 passage by route '
        'two, and write down two numbers each time: the minutes taken '
        'and the marks scored. Most candidates at this level find the '
        'loop faster by three or four minutes and about the same for '
        'accuracy, which is why this course teaches it. Some find the '
        'opposite, and those people should use what works for them '
        'rather than what a book recommends. What nobody should do is '
        'arrive at the exam without having timed either, because the '
        'paper gives you twenty minutes a passage and the decision '
        'about method has to be made before you sit down, not at minute '
        'nine with the clock running.'),
  panel=[('Route one: the loop',
          'Orient, load the questions, then one paragraph at a time.'),
         ('Route two: read, then answer',
          'One full read at natural speed, then the questions.'),
         ('Time both, on real passages',
          'Two numbers each: minutes taken, marks scored.'),
         ('Decide before the exam',
          'Not at minute nine with the clock running.')],
  task='Do the cycle 4 passage by the loop and the cycle 5 passage by '
       'reading first, timing both, and write down the four numbers.',
  qs=['How long did the loop take, and how many marks?',
      'How long did read-then-answer take, and how many marks?',
      'Which felt more comfortable, and which was faster?',
      'Did you finish either within twenty minutes?',
      'Which will you use in the exam, and why?']),
 outlining=dict(
  title='Passage to outline, then outline to essay, same topic',
  body=('This page joins the two halves of what you have practised. '
        'First, take the cycle 5 passage and reconstruct its outline: '
        'the position in one sentence, the main ideas in order, the '
        'evidence under each. That gives you a model of how a good '
        'argument on this topic is built. Then put it away and write '
        'your own plan for the cycle 5 essay question, which is the '
        'same topic. Finally, compare the two plans side by side. The '
        'comparison usually shows three things. The passage has fewer '
        'main ideas than your plan. Its evidence is more specific than '
        'yours, usually because it uses numbers where you used '
        'adjectives. And its final section does something your plan '
        'probably does not: it draws a general conclusion that reaches '
        'beyond the topic, in this case a claim about forbidding and '
        'pricing that would be true of many other subjects. That last '
        'move is what lifts the end of an essay, and it can be planned '
        'rather than hoped for.'),
  frame=('Towns should not limit total visitor numbers and should '
         'change which visitors come and what happens to housing, '
         'because the crowding and the income come from different '
         'groups',
         [('The total is the wrong thing to control',
           ['day visitors are four fifths of the crowding and under a '
            'third of the spending',
            'a cap removes income and crowding in the same '
            'proportion']),
          ('What can be controlled works better',
           ['charges on coaches and day parking shift the mix without '
            'cutting the total',
            'two towns that changed prices succeeded where two that '
            'forbade things failed'])]),
  task='Reconstruct the outline of the cycle 5 passage, write your own '
       'plan for the same question, and compare them.',
  qs=['How many main ideas does the passage have, and how many does '
      'your plan?',
      'Where did the passage use a number and you used an adjective?',
      'What does its last section do that your plan does not?',
      'Could you borrow that move for your own conclusion?',
      'Which of your main ideas would you now cut?'],
  answers=['usually three against your five',
           'almost everywhere; that is the commonest difference',
           'it generalises beyond the topic',
           'yes, and it can be planned in one line',
           'the one you could not find evidence for']),
 candos=['I can read a brochure for the grade and the supplements',
         'I can ask for a change to a booking and offer an alternative',
         'I can describe two lines with very different seasonal shapes',
         'I can time both reading methods and know which suits me',
         'I can explain why a limit can move a problem instead of '
         'solving it'],
 tip=('Time both reading routes on a real passage before the exam. The '
      'decision about which to use is made in advance, not at minute '
      'nine of Passage 1 with thirteen questions left.'),
)
