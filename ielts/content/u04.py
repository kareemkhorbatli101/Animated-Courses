# -*- coding: utf-8 -*-
"""Unit 4 - Environment and Conservation. IELTS Volume 1, band 5.0."""

_FLOW = dict(kind='line',
             title='River flow at two measuring points',
             sub='Ashfield and Harbledown, cubic metres a second, 2024',
             ylab='flow (m³/s)',
             x=['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
             series=[('Ashfield (upper)', [14.2, 11.8, 7.4, 3.1, 4.6,
                                           12.9]),
                     ('Harbledown (lower)', [19.6, 15.3, 8.2, 2.2, 3.4,
                                             16.8])])

UNIT = dict(
 n=4, vol=1, level='B1', band='5.0',
 theme='Environment and Conservation',
 opener=(
   'Four bins, a river, and a question that conservation has never '
   'settled: when there is money for one thing, should it be spent on a '
   'species or on the ground the species lives on? You will book a '
   'bulky waste collection, complain about a missed one, read what a '
   'river gauge actually measures, and meet the reason a nature reserve '
   'cannot protect what crosses its fence. The technique page is the '
   'keyword trap, which is the single commonest way candidates lose '
   'marks they had almost earned.'),

 cycles=[
  dict(
   sub='Recycling where you live',
   step=1,
   read=[
    dict(heading='Ashfield recycling: what goes in which bin',
         kind='Council notice',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A council notice is read for the exceptions',
                ['The general rule is in the first sentence of each '
                 'paragraph and is rarely tested. The exception is in '
                 'the second or third sentence and nearly always is.',
                 'Watch for the word "except". It appears once or twice '
                 'in every notice of this kind.']),
         paras=[
          'The green bin takes paper, card and cardboard, flattened. It does '
          'not take paper that has held food, so pizza boxes belong in the '
          'black bin even though they are card.',
          'The blue bin takes glass, tins, cans and plastic bottles. '
          'Lids may be left on bottles but must be removed from jars. '
          'Drinking glasses and window glass are not accepted, because '
          'they melt at a different temperature from bottle glass.',
          'The brown bin takes garden waste and raw vegetable peelings. '
          'Cooked food, meat and bones must not be put in it, as the '
          'material is composted in open heaps that would attract '
          'animals.',
          'The black bin takes everything else. It is collected weekly in '
          'summer and fortnightly from October to March, the opposite of the '
          'brown bin.',
          'Bins must be at the kerbside by 6.30 a.m. on the collection day '
          'and brought in by 8 p.m.',
          'A bin containing the wrong material is not emptied and is left '
          'with a sticker. One bag of the wrong thing can mean the whole '
          'lorry is rejected at the sorting centre.'],
         items=[
          ('Which bin takes a pizza box?',
           ['green', 'blue', 'brown', 'black'], 3,
           'Paragraph 1: card that has held food goes in the black '
           'bin.'),
          ('Which bin takes raw vegetable peelings?',
           ['green', 'blue', 'brown', 'black'], 2,
           'Paragraph 3, along with garden waste.'),
          ('Lids must be removed from ____________.', None, 'jars',
           'Paragraph 2, though they may be left on bottles.'),
          ('Why is window glass not accepted?', None,
           'it melts at a different temperature',
           'Paragraph 2, which also excludes drinking glasses.'),
          ('By what time must bins be at the kerbside?', None,
           '6.30 a.m.', 'Paragraph 5, and brought in by 8 p.m.'),
          ('What is left on a bin that is not emptied?', None,
           'a sticker',
           'Paragraph 6, explaining why it was rejected.')]),
    dict(heading='Bulky waste collections', kind='Procedure notice',
         task='Flow-chart completion', band='gt_short',
         qtype='Questions 7-10',
         paras=[
          'Book online or by telephone. You will be given a reference '
          'number and a collection date, usually within ten working '
          'days, though this rises to about three weeks in January.',
          'The charge is £22 for up to three items and £6 for each '
          'further item. Payment is taken at booking and is refunded '
          'only if the council cancels.',
          'Place the items in front of the property by 6 a.m. on the '
          'collection day, not in a rear garden or passageway, as crews '
          'do not enter private property.',
          'Fridges, freezers and mattresses are collected but must be '
          'declared when booking, because they travel on a different '
          'vehicle and are charged at £15 each.'],
         items=[
          ('Collection usually takes place within ____________ working '
           'days.', None, 'ten',
           'Paragraph 1, rising to about three weeks in January.'),
          ('The charge is £22 for up to ____________ items.', None,
           'three', 'Paragraph 2, then £6 for each extra item.'),
          ('Items must be placed in front of the ____________.', None,
           'property', 'Paragraph 3: crews do not enter private '
           'property.'),
          ('Fridges and mattresses must be ____________ when '
           'booking.', None, 'declared',
           'Paragraph 4, because they travel separately.')])],
   listen=[
    dict(heading='Booking a bulky collection', part='Part 1',
         task='A telephone call to a council', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Ashfield Council, waste services.'),
          ('Resident', 'I would like to book a bulky collection.'),
          ('Officer', 'Of course. What are the items?'),
          ('Resident', 'A sofa, two armchairs and a fridge.'),
          ('Officer', 'The fridge has to be separate, I am afraid. It '
           'goes on a different vehicle.'),
          ('Resident', 'So two bookings?'),
          ('Officer', 'One booking, two vehicles, two charges. Three '
           'items of furniture is twenty-two pounds, and the fridge is '
           'fifteen.'),
          ('Resident', 'Thirty-seven altogether, then.'),
          ('Officer', 'That is right. Can I take your address?'),
          ('Resident', 'Forty-one Culverhay Road.'),
          ('Officer', 'And a telephone number?'),
          ('Resident', 'Oh seven eight one, four four two, nine oh '
           'six.'),
          ('Officer', 'Thank you. The next date I have is the '
           'nineteenth.'),
          ('Resident', 'Nothing sooner?'),
          ('Officer', 'Not in January. It is our busiest month and we '
           'are running at about three weeks.'),
          ('Resident', 'The nineteenth is fine.'),
          ('Officer', 'Items in front of the house by six in the '
           'morning, please. Not down the side passage, because the crew '
           'will not go onto your property.'),
          ('Resident', 'Understood. What is my reference?'),
          ('Officer', 'B W four seven two. And if it rains heavily we '
           'may run late, but we will come that day.')],
         items=[
          ('Items: a sofa, two armchairs and a ____________', None,
           'fridge', 'Which has to travel on a different vehicle.'),
          ('Total charge: £____________', None, '37',
           'Twenty-two for the furniture and fifteen for the fridge.'),
          ('Address: ____________ Culverhay Road', None, '41',
           'Given to the officer during the call.'),
          ('Telephone: 0781 ____________ 906', None, '442',
           'The middle group of three digits.'),
          ('Collection date: the ____________', None, 'nineteenth',
           'About three weeks ahead, because January is busiest.'),
          ('Reference: BW____________', None, '472',
           'Given by the officer at the end of the call.')])],
   speak=dict(
    part='Part 1', focus='Rubbish and recycling at home',
    intro=('Two or three sentences each. Describe what you actually do '
           'rather than what people should do.'),
    qs=['Do you recycle at home?',
        'Is recycling easy where you live?',
        'What happens to rubbish in your area?',
        'Should people be fined for not recycling?'],
    shape=[('answer', 'Yes, though not as carefully as I pretend.'),
           ('support', 'We have four bins and I am never sure about '
            'the plastic.'),
           ('follow-up', 'The council leaflet is clearer than the bins '
            'are, which is the wrong way round.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking the council about a missed collection',
         prompt=('Your rubbish has not been collected. Write a letter '
                 'to the council. In your letter: say what was not '
                 'collected and when; explain what you have already '
                 'done; say what you would like the council to do. '
                 'Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing to report that the bulky waste collection booked '
          'for 19 January, reference BW472, did not take place.',
          'The items were a sofa, two armchairs and a fridge, and the '
          'charge of £37 was paid at the time of booking. I placed them '
          'in front of the house before six in the morning as '
          'instructed, and they remained there until I brought the '
          'furniture back inside on 21 January.',
          'I telephoned on the afternoon of the nineteenth and was told '
          'that the crew had recorded the address as "no items '
          'presented". I would like to say politely that this is not '
          'correct, and that two neighbours saw the items outside.',
          'I would be grateful if you could arrange a new collection '
          'within the next week and confirm the date in writing. If a '
          'collection cannot be arranged before the end of the month, I '
          'would prefer a refund so that I can make other '
          'arrangements.',
          'The fridge is still outside, which is why I am asking for a '
          'date rather than an apology.',
          'Yours faithfully,',
          'Teodora Vasquez-Olabode'],
         notes=[
          'The reference number and the date are in the first sentence, '
          'and every later fact is dated. A complaint that can be checked '
          'against a record is treated differently from one that cannot.',
          'The disagreement with the crew’s report is stated politely '
          'and supported by witnesses. "This is not correct" is stronger '
          'than anger and is much harder to dismiss.',
          'The letter asks for a date and names an alternative with a '
          'deadline. Complaints that end with "please look into this" '
          'produce apologies; complaints that end with two options '
          'produce a decision.'],
         criterion=[('Reference and dates in the first sentence',
                     'Task Achievement'),
                    ('A polite, supported contradiction',
                     'Task Response'),
                    ('An alternative with a deadline attached',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Passive for procedures: is collected, must be placed',
    explain=('Rules and procedures use the passive because the person '
             'doing the action is either obvious or unimportant.'),
    examples=['Bins must be placed at the kerbside by 6.30 a.m.',
              'Garden waste is collected fortnightly in summer.',
              'Payment is taken at the time of booking.',
              'A contaminated bin is not emptied and is left with a '
              'sticker.'],
    task='Rewrite each sentence in the passive.',
    items=[('You must put the bins out by half past six.',
            'Bins must be placed at the kerbside by 6.30 a.m.'),
           ('They collect garden waste every two weeks.',
            'Garden waste is collected fortnightly during the summer.'),
           ('We take payment when you book.',
            'Payment is taken at the time of booking.'),
           ('The crew does not empty a contaminated bin.',
            'A contaminated bin is not emptied.'),
           ('You must tell us about fridges in advance.',
            'Fridges must be declared at the time of booking.')]),
   vocab=[('wheelie bin', 'a bin on wheels collected from the street'),
          ('collection day', 'the day rubbish is taken away'),
          ('landfill', 'ground where waste is buried'),
          ('bulky waste', 'large items such as furniture'),
          ('sorting', 'separating waste into types'),
          ('compost', 'rotted plant material used on soil'),
          ('rejected load', 'a lorry refused at the sorting centre'),
          ('wrong material', 'items that do not belong in that bin')],
   expr=[('I am writing to report that it was not collected on',
          'the opening sentence of a complaint'),
         ('I placed them outside before six as instructed',
          'shows you kept your side of the arrangement'),
         ('I would like to say politely that this is not correct',
          'contradicts without anger'),
         ('I am asking for a date rather than an apology',
          'says what outcome you want')],
   trans=['moreover', 'in addition', 'accordingly', 'in the '
          'alternative'],
  ),

  dict(
   sub='Rivers and what goes into them',
   step=2,
   read=[
    dict(heading='Four volunteers on cleaning a river',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Anselm: We pull out about two tonnes a year and it is '
          'always the same things: tyres, trolleys and plastic bottles. '
          'What I have stopped saying is that it makes a difference to '
          'the water. It makes a difference to the look of the river, '
          'which is not nothing.',
          'B  Constance: The visible rubbish is not the problem and that '
          'is the hardest thing to explain to new volunteers. What harms '
          'the fish is what you cannot see: the field run-off after rain '
          'and the sewage released when the treatment works is '
          'overwhelmed.',
          'C  Ibrahim: I joined to clean up and I stayed to measure. We '
          'now take readings twice a week, and the record of those '
          'readings did more in one meeting with the water company than '
          'nine years of bags of rubbish.',
          'D  Marguerite: My reason is different from everybody '
          'else’s. I am there because thirty of us stand in a river on '
          'a Saturday morning and talk to each other. The river gets '
          'cleaner and that is honestly the second thing.'],
         items=[
          ('Which volunteer says the work changes how the river looks '
           'rather than its water?',
           ['Anselm', 'Constance', 'Ibrahim', 'Marguerite'], 0,
           'Two tonnes a year, and a difference to the look.'),
          ('Which volunteer points to pollution that cannot be seen?',
           ['Anselm', 'Constance', 'Ibrahim', 'Marguerite'], 1,
           'Field run-off and released sewage.'),
          ('Which volunteer describes a change in what the group does?',
           ['Anselm', 'Constance', 'Ibrahim', 'Marguerite'], 2,
           'Joined to clean and stayed to measure.'),
          ('Which volunteer gives a social reason for taking part?',
           ['Anselm', 'Constance', 'Ibrahim', 'Marguerite'], 3,
           'Thirty people standing in a river and talking.'),
          ('Ibrahim says the readings were more effective than the '
           'rubbish collection.', ['True', 'False', 'Not Given'], 0,
           'He compares one meeting with nine years of bags.'),
          ('Constance has explained the problem to the water company.',
           ['True', 'False', 'Not Given'], 2,
           'She mentions explaining it to new volunteers only.')])],
   listen=[
    dict(heading='A volunteer group leader', part='Part 2',
         task='A talk to new volunteers', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Leader', 'Welcome to the river group. Before the waders come '
           'out, ten minutes on what we actually do and why half of it '
           'is not what you expect.'),
          ('Leader', 'We clear rubbish on the first Saturday of the '
           'month, and we take about two tonnes a year out of four '
           'kilometres of river. Tyres, shopping trolleys, bottles. It '
           'is satisfying work and I want to be honest with you: it does '
           'very little for the fish.'),
          ('Leader', 'What harms the fish is invisible. Two things. '
           'First, run-off from fields after heavy rain, which carries '
           'soil and fertiliser into the water and takes the oxygen out '
           'of it. Second, sewage released when the treatment works '
           'cannot cope, which is legal and happens more often than '
           'anybody outside this group realises.'),
          ('Leader', 'So the second half of what we do is measurement. '
           'Six of us take readings twice a week at four points, and '
           'that record is the reason we were taken seriously by the '
           'water company last year, after nine years of being '
           'thanked.'),
          ('Leader', 'If you want to help with the readings, the '
           'training is one evening and the equipment is provided. You '
           'need to be able to get to the same point at roughly the same '
           'time twice a week, which is the only hard part.'),
          ('Leader', 'And the thing nobody tells new volunteers: the '
           'social side is most of why people stay. We have thirty '
           'members and the ones who last are the ones who come for the '
           'coffee afterwards.')],
         items=[
          ('The group clears rubbish on the first ____________ of the '
           'month.', None, 'Saturday',
           'Taking about two tonnes a year from four kilometres.'),
          ('Run-off from fields carries soil and ____________ into the '
           'water.', None, 'fertiliser',
           'Which takes the oxygen out of it.'),
          ('Sewage is released when the treatment works cannot '
           '____________.', None, 'cope',
           'Which he says is legal, and frequent.'),
          ('____________ members take readings twice a week.', None,
           'Six', 'At four points along the river.'),
          ('The readings record was what made the water company take '
           'them', ['seriously', 'quickly', 'legally', 'publicly'], 0,
           'After nine years of being thanked.'),
          ('He says the ____________ side is most of why people '
           'stay.', None, 'social',
           'The members who last come for the coffee afterwards.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Nature nearby',
    intro=('Short answers, then the long turn. Describe the place '
           'before you say why it matters to you.'),
    cue=('Describe a natural place you care about.',
         ['where it is', 'how often you go there',
          'what it is like', 'and explain why it matters to you']),
    qs=['Is there much green space where you live?',
        'Do you spend time outdoors?',
        'Now look at the card. You have one minute to make notes.',
        'Should towns have more parks?'],
    shape=[('answer', 'A stretch of river about a mile from my '
            'house.'),
           ('support', 'I go most Sundays and in summer two or three '
            'times a week.'),
           ('follow-up', 'It is shallow, with willows on one side and '
            'a path on the other.'),
           ('support', 'It matters to me partly because I helped clean '
            'it.'),
           ('follow-up', 'You look at a place differently when you have '
            'pulled a shopping trolley out of it.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Individuals or governments: who is responsible for '
                 'pollution?',
         prompt=('Some people believe that individuals should be '
                 'responsible for reducing pollution, while others '
                 'believe it is the job of governments. Discuss both '
                 'views and give your own opinion. Write at least 250 '
                 'words.'),
         model=[
          'Arguments about pollution usually become arguments about '
          'blame, which is why they go nowhere. The useful question is '
          'not who is at fault but who is able to act, and the answer '
          'differs completely depending on which kind of pollution is '
          'being discussed.',
          'Those who emphasise individual responsibility have a '
          'reasonable case for household waste. What goes into a bin is '
          'decided by a person, no law can inspect every kitchen, and '
          'recycling schemes fail where residents do not sort properly. '
          'Here, personal habits are the whole mechanism.',
          'Those who emphasise government have a stronger case for the '
          'pollution that actually harms rivers and air. The sewage '
          'released when a treatment works is overwhelmed is not '
          'released by residents, and the run-off from farmland after '
          'heavy rain cannot be prevented by any individual. These are '
          'decisions about how much to invest and what to permit, and '
          'they are made in offices rather than in homes.',
          'My own position follows from that division. Individuals '
          'should be responsible for what they control, which is mostly '
          'visible and mostly small. Governments should be responsible '
          'for what only they can change, which is mostly invisible and '
          'mostly large. The danger of the first argument is that it '
          'allows the second to be avoided: a country that talks about '
          'bottle tops is not talking about treatment works.',
          'In conclusion, both sides are right about different problems, '
          'and the test for any proposal should be simple. Ask who is '
          'able to prevent this particular pollution. The answer names '
          'the person responsible for it, and it is often not the person '
          'being asked to feel guilty.'],
         notes=[
          'Structure 6: two choices and then a choice. The essay avoids '
          'the usual trap by dividing the topic — household waste against '
          'river pollution — instead of weighing two abstractions.',
          'The fourth paragraph names the political consequence of the '
          'first argument. Noticing that one argument can be used to '
          'avoid another is a band-raising observation.',
          'The conclusion supplies a test rather than a summary, and it '
          'is a test a reader could apply to the next proposal they '
          'read.'],
         criterion=[('A division by kind of pollution rather than by '
                     'abstraction', 'Task Response'),
                    ('Noticing what one argument is used to avoid',
                     'Task Response'),
                    ('A conclusion that supplies a test',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Responsibility: be responsible for, be down to, be a matter '
          'for',
    explain=('Saying who should act needs a phrase that shows what kind '
             'of responsibility is meant.'),
    examples=['Much of it comes down to investment rather than to '
              'habits.',
              'Household waste is the responsibility of residents.',
              'Treatment works are a matter for the water company.',
              'Individuals cannot be held responsible for what they '
              'cannot control.'],
    task='Rewrite each sentence so that the kind of responsibility is '
         'clear.',
    items=[('People should recycle.',
            'Sorting household waste is the responsibility of residents, '
            'since nobody else can do it.'),
           ('The government should fix the sewers.',
            'Investment in treatment works is a matter for government '
            'rather than for households.'),
           ('It is the farmers’ fault.',
            'Run-off from farmland comes down to how land is managed '
            'rather than to any individual act.'),
           ('Nobody takes responsibility.',
            'Responsibility is divided between residents, companies and '
            'regulators, and each can point at the others.'),
           ('Blaming people is unfair.',
            'Individuals cannot reasonably be held responsible for '
            'pollution they have no means of preventing.')]),
   vocab=[('runoff', 'water that flows off land into a river'),
          ('discharge', 'the release of waste into water'),
          ('sewage', 'waste water from homes'),
          ('treatment works', 'the place where waste water is '
           'cleaned'),
          ('river bank', 'the land at the side of a river'),
          ('silt', 'fine soil carried by water'),
          ('oxygen level', 'how much oxygen the water holds'),
          ('fertiliser', 'chemicals added to soil to help crops')],
   expr=[('much of it comes down to, rather than to',
          'locates responsibility'),
         ('what harms the fish is what you cannot see',
          'the sentence this cycle turns on'),
         ('after nine years of being thanked',
          'describes polite inaction'),
         ('a country that talks about bottle tops',
          'names what an argument avoids')],
   trans=['on the one hand', 'on the other', 'on balance', 'in '
          'practice'],
  ),

  dict(
   sub='Measuring a river',
   step=3,
   read=[
    dict(heading='What a gauge actually measures',
         kind='Article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 29-34',
         figure=_FLOW,
         paras=[
          'The graph above shows the flow of one river at two points '
          'during a single year. The upper point, at Ashfield, is twelve '
          'kilometres above the lower point at Harbledown, and the two '
          'lines behave differently in a way that is worth '
          'understanding.',
          'For most of the year the lower reading is higher, which is '
          'what anybody would expect: a river collects water from the '
          'land as it travels, so it carries more at the bottom than at '
          'the top. In January the lower point carried about five cubic '
          'metres a second more.',
          'In July the order reverses. The lower reading falls below the '
          'upper one, which cannot happen naturally, and the explanation '
          'is that water is taken out between the two points. Two farms '
          'and a bottling plant hold licences to abstract water, and '
          'they use them most in the driest month.',
          'This is why a single reading tells you very little. A gauge '
          'measures the water passing one point at one moment, and the '
          'questions people actually ask — is the river healthy, is too '
          'much being taken out — need two gauges and a year.',
          'The second limitation is that flow is not quality. A river '
          'can run high and dirty or low and clean. The two gauges in '
          'this graph say nothing at all about what is dissolved in the '
          'water, which is measured separately and much less often.'],
         items=[
          ('Which paragraph explains why the lower reading is normally '
           'higher?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'A river collects water from the land as it travels.'),
          ('Which paragraph gives the reason for the reversal in '
           'July?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Water taken out by farms and a bottling plant.'),
          ('Which paragraph distinguishes how much water from how '
           'clean it is?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 3,
           'A river can run high and dirty or low and clean.'),
          ('The two measuring points are ____________ kilometres '
           'apart.', None, 'twelve',
           'Paragraph 1, Ashfield above Harbledown.'),
          ('In January the lower point carried about ____________ '
           'cubic metres a second more.', None, 'five',
           'Paragraph 2, which is the expected pattern.'),
          ('Two farms and a ____________ plant hold licences to take '
           'water out.', None, 'bottling',
           'Paragraph 3, used most in the driest month.')])],
   listen=[
    dict(heading='Two speakers discuss measuring a river', part='Part 3',
         task='A discussion between two volunteers', band='l3',
         qtype='Questions 35-40',
         figure=_FLOW,
         script=[
          ('Constance', 'Look at July. The lower gauge is below the '
           'upper one.'),
          ('Ibrahim', 'Which is impossible, unless something is taking '
           'water out.'),
          ('Constance', 'Two farms and the bottling plant. All three '
           'hold licences.'),
          ('Ibrahim', 'So it is legal.'),
          ('Constance', 'Entirely legal, and that is my point rather '
           'than an objection to it. The licences were issued in the '
           'nineteen sixties, when the river ran higher.'),
          ('Ibrahim', 'How much higher?'),
          ('Constance', 'Average summer flow then was about double what '
           'we measured this year. The licence says a quantity, not a '
           'proportion, so as the river falls the share taken rises.'),
          ('Ibrahim', 'That is exactly the sort of thing nobody '
           'notices for fifty years, because each individual year looks '
           'much like the one before it.'),
          ('Constance', 'Nobody did. And at three cubic metres a second '
           'you are close to the point where the fish cannot get past '
           'the shallows.'),
          ('Ibrahim', 'Can the licences be changed?'),
          ('Constance', 'At renewal, and two of the three come up in '
           'four years, which is why the readings matter now rather than '
           'later.'),
          ('Ibrahim', 'And our twice-weekly readings are good enough for '
           'that?'),
          ('Constance', 'They are the only continuous record anybody '
           'has. The official gauge at Harbledown broke in March and was '
           'repaired in August.'),
          ('Ibrahim', 'Five months.'),
          ('Constance', 'Five months covering exactly the period that '
           'matters, which is the most useful thing we have ever done by '
           'accident.')],
         items=[
          ('The July reversal shows that water is being taken '
           '____________ between the two points.', None, 'out',
           'By two farms and a bottling plant.'),
          ('The licences were issued in the ____________, when the '
           'river ran higher.', None, 'sixties',
           'Which is the core of her point.'),
          ('A licence states a quantity rather than a ____________.',
           None, 'proportion',
           'So the share taken rises as the river falls.'),
          ('At three cubic metres a second, fish cannot get past the',
           ['weir', 'shallows', 'bridge', 'bend'], 1,
           'Which is close to the summer reading.'),
          ('Two of the three licences come up for renewal in '
           '____________ years.', None, 'four',
           'Which is why the readings matter now.'),
          ('The official gauge was broken for ____________ months.',
           None, 'five',
           'From March until it was repaired in August.')])],
   speak=dict(
    part='Part 3', focus='Trusting a measurement',
    intro=('Three or four sentences. Say what a measurement can and '
           'cannot tell you.'),
    qs=['How do we know whether a river is healthy?',
        'Should companies be allowed to take water from rivers?',
        'Can ordinary people collect useful scientific data?',
        'Who should pay for monitoring the environment?'],
    shape=[('answer', 'Not from one measurement at one place.'),
           ('support', 'A gauge tells you how much water passes, not '
            'what is in it.'),
           ('follow-up', 'You need two points and a whole year before '
            'the picture means anything.'),
           ('support', 'Volunteers can do this well.'),
           ('follow-up', 'Near us a group kept the only record there '
            'was, because the official gauge was broken for five '
            'months.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='River flow at two measuring points across one year',
         prompt=('The graph below shows the flow of a river at two '
                 'measuring points during one year. Summarise the '
                 'information by selecting and reporting the main '
                 'features, and make comparisons where relevant. Write '
                 'at least 150 words.'),
         figure=_FLOW,
         model=[
          'The line graph compares the flow of one river at two '
          'measuring points, Ashfield upstream and Harbledown '
          'downstream, over a single year. Overall, both points followed '
          'the same seasonal shape, falling to a low point in July and '
          'recovering by November, but the lower point was higher for '
          'most of the year and lower in midsummer, when the two lines '
          'crossed.',
          'In January the flow at Harbledown was 19.6 cubic metres a '
          'second against 14.2 at Ashfield, a difference of over five. '
          'Both figures fell steadily through the spring, reaching 8.2 '
          'and 7.4 respectively in May, by which point the gap between '
          'them had almost closed.',
          'The lines crossed between May and July. At the July low point '
          'Harbledown carried only 2.2 cubic metres a second, below '
          'Ashfield’s 3.1, and the lower point remained the smaller of '
          'the two in September.',
          'Both recovered sharply in the autumn, and by November '
          'Harbledown had returned to 16.8 against 12.9 at Ashfield, '
          'restoring the original pattern.'],
         notes=[
          'The Overall statement describes the shape both lines share and '
          'then the thing that distinguishes them. On a two-line graph '
          'with a crossing, naming the crossing in the Overall is '
          'essential.',
          'The answer follows the year in order and stops at the crossing '
          'to say where it happened. Examiners look for the turning '
          'point, and so does any reader.',
          'Figures are given in pairs with the difference stated. Listing '
          'six numbers from one line and then six from the other makes '
          'the reader do the comparison you were asked to make.'],
         criterion=[('An Overall naming the shared shape and the '
                     'crossing', 'Task Achievement'),
                    ('The crossing located in time',
                     'Task Achievement'),
                    ('Figures given in pairs with the difference',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Relative clauses with which and where',
    explain=('A relative clause lets you attach a fact to a point in '
             'the data without starting a new sentence.'),
    examples=['The lines crossed in July, which cannot happen '
              'naturally.',
              'The point at which the two readings meet is in early '
              'summer.',
              'Harbledown, where the lower gauge stands, is twelve '
              'kilometres downstream.',
              'Flow fell to 2.2, the lowest figure recorded that '
              'year.'],
    task='Join each pair with a relative clause.',
    items=[('The lines crossed in July. This cannot happen naturally.',
            'The lines crossed in July, which cannot happen naturally '
            'without abstraction.'),
           ('Harbledown is twelve kilometres downstream. The lower gauge '
            'is there.',
            'Harbledown, where the lower gauge stands, is twelve '
            'kilometres downstream.'),
           ('Flow fell to 2.2 in July. That was the lowest figure.',
            'Flow fell to 2.2 cubic metres a second in July, which was '
            'the lowest figure of the year.'),
           ('The licences were issued in the 1960s. The river ran higher '
            'then.',
            'The licences were issued in the 1960s, when the river ran '
            'considerably higher.'),
           ('Two licences come up in four years. That is why the '
            'readings matter.',
            'Two of the licences come up for renewal in four years, which '
            'is why the readings matter now.')]),
   vocab=[('flow', 'how much water passes a point in a second'),
          ('measuring point', 'a place where a river is measured'),
          ('confluence', 'where two rivers join'),
          ('taking water out', 'removing water for farms or '
           'industry'),
          ('abstraction licence', 'permission to take water from a '
           'river'),
          ('shallows', 'a shallow part of a river'),
          ('rainfall', 'the amount of rain that falls'),
          ('time of year', 'the season a reading was taken in')],
   expr=[('the two readings diverge sharply after',
          'describes two lines separating'),
         ('which cannot happen naturally',
          'flags a result that needs explaining'),
         ('a licence states a quantity, not a proportion',
          'the sentence this cycle turns on'),
         ('flow is not quality',
          'separates two things a reader may confuse')],
   trans=['whereas', 'at which point', 'as a result', 'by November'],
  ),

  dict(
   sub='Why protecting one species is hard',
   step=3,
   read=[
    dict(heading='Habitat, corridors and what a reserve cannot do',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given and summary '
              'completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'The simplest way to protect a species is to buy the land it lives '
          'on and keep people off it, and for about a century that was very '
          'largely what conservation meant in practice. The approach works '
          'for some species and fails for others, and the reason it fails is '
          'about shape rather than about biology, which is why no amount of '
          'good work inside the fence can repair it.',
          'A reserve has edges, and the ground near an edge is not the same '
          'kind of place as the ground in the middle of it. Wind, light and '
          'dry air reach a hundred metres or more into a wood, and so do '
          'cats, rats and the seeds of plants from the fields outside it. A '
          'square reserve of one square kilometre contains very little '
          'ground that is more than four hundred metres from an edge, which '
          'means that a small reserve may be almost entirely edge, and a '
          'long narrow one may have no undisturbed interior whatever.',
          'The second difficulty is that a population has to be large enough '
          'to survive its bad years, and a small reserve by definition holds '
          'a small population. Below a certain size, a population is removed '
          'not by a trend but by an accident: a dry summer, a disease, a '
          'fire. A group of forty animals does not go down slowly towards '
          'nothing; it is simply not there one spring, and nobody can say '
          'which bad year did it. Many protected populations are at or below '
          'that size and are kept alive by occasional arrivals from '
          'elsewhere.',
          'This is why corridors matter so much. A strip of rough ground, a '
          'hedge or an unploughed river bank connecting two reserves lets '
          'animals move between them, which turns two small groups into one '
          'larger group for every purpose that matters here. Unless the '
          'corridors are kept open, the reserve is an island, and islands '
          'lose species steadily in a way that has been counted for a '
          'century on real islands and then found again on ones we have '
          'made.',
          'None of this is an argument against reserves, which remain the '
          'only instrument that reliably prevents land from being built on '
          'or ploughed. It argues against assuming that a boundary solves '
          'the problem by itself. The question that decides whether a '
          'reserve works is not how large it is but what surrounds it, and '
          'that is land the conservation body usually does not own and '
          'cannot control.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['A century of buying land', 'Why edges matter',
            'Populations and accidents', 'The land in between'], 1,
           'Wind, light, dryness and predators reaching inwards.'),
          ('Choose the best heading for paragraph 4.',
           ['What a corridor does', 'Small populations',
            'Islands and species', 'What reserves cannot do'], 0,
           'A strip of ground connecting two reserves.'),
          ('Choose the best heading for paragraph 5.',
           ['The case against reserves', 'What surrounds the reserve',
            'How large is large enough', 'Building on land'], 1,
           'The question is what surrounds it, not its size.'),
          ('The writer believes reserves should no longer be created.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 5 calls them the only reliable instrument '
           'against building.'),
          ('Effects from outside a wood can reach a hundred metres '
           'inside it.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 states this about wind, light and '
           'predators.'),
          ('Most conservation bodies own the land around their '
           'reserves.', ['True', 'False', 'Not Given'], 1,
           'The final sentence says they usually do not.'),
          ('A one-square-kilometre reserve contains little that is more '
           'than ____________ metres from an edge.', None, 'four '
           'hundred', 'Paragraph 2, which is why small reserves are '
           'almost all edge.'),
          ('Below a certain size, a population is removed by an '
           '____________ rather than a trend.', None, 'accident',
           'Paragraph 3: a dry summer, a disease, a fire.')])],
   listen=[
    dict(heading='A lecture on habitat fragmentation', part='Part 4',
         task='A lecture on reserves and corridors', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I am going to argue that the most important fact '
           'in conservation is a fact about shapes, and that it explains '
           'most of what goes wrong.'),
          ('Lecturer', 'Start with edges. Everything that makes the '
           'inside of a wood different from a field — the damp, the '
           'shade, the shelter — weakens near the boundary. Wind and '
           'light reach in about a hundred metres, and so do cats, rats '
           'and seeds from the land outside.'),
          ('Lecturer', 'Now do the arithmetic on a square reserve of one '
           'square kilometre. Take a hundred metres off every side and '
           'you have lost thirty-six per cent of it before you begin. '
           'Make the reserve long and thin and you may have no interior '
           'at all.'),
          ('Lecturer', 'Second fact: small populations die of accidents '
           'rather than of trends. A dry summer, a disease, a fire, a bad '
           'winter followed by a late frost. A population of forty does '
           'not decline gracefully towards zero over twenty years; it is '
           'simply absent one spring, and nobody can say afterwards '
           'exactly which of the four things did it.'),
          ('Lecturer', 'Which brings us to corridors. A hedge, a rough '
           'strip, an unploughed river bank. If two reserves are joined, '
           'two populations of forty behave like one population of '
           'eighty, and eighty survives what forty does not.'),
          ('Lecturer', 'And the sentence I want you to leave with. The '
           'thing that decides whether a reserve works is not its size '
           'but what surrounds it, and what surrounds it belongs to '
           'farmers, councils and developers. Conservation is therefore '
           'mostly a negotiation, and the people who are good at it are '
           'the ones who understand that.')],
         items=[
          ('Wind and light reach about ____________ metres into a '
           'wood.', None, 'a hundred',
           'Along with cats, rats and seeds from outside.'),
          ('Taking a hundred metres off every side of a square '
           'kilometre loses ____________ per cent of it.', None,
           'thirty-six', 'Before the reserve is even used.'),
          ('A long thin reserve may have no ____________ at all.',
           None, 'interior', 'Which is the point of the arithmetic.'),
          ('Small populations, he says, die of accidents rather than '
           'of', ['predators', 'trends', 'disease', 'hunting'], 1,
           'A dry summer, a disease, a fire.'),
          ('Joined by a corridor, two populations of forty behave like '
           'one of ____________.', None, 'eighty',
           'Which survives what forty does not.'),
          ('He says conservation is therefore mostly a '
           '____________.', None, 'negotiation',
           'Because the surrounding land belongs to other people.')])],
   speak=dict(
    part='Part 3', focus='Choosing what to protect',
    intro=('Four sentences. Give a reason that involves a '
           'consequence.'),
    qs=['Should governments protect land from building?',
        'Is it better to protect one famous animal or a whole area?',
        'Who should pay for conservation?',
        'Can farming and wildlife share the same land?'],
    shape=[('answer', 'The area, because the animal cannot survive '
            'without it.'),
           ('support', 'A reserve with nothing around it works like an '
            'island.'),
           ('follow-up', 'Islands lose species steadily, which has been '
            'measured for a century.'),
           ('support', 'What matters most is the land in between.'),
           ('follow-up', 'And that land belongs to farmers, so '
            'conservation ends up being a negotiation rather than a '
            'purchase.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: one species or the habitat?',
         prompt=('Should conservation money go to protecting individual '
                 'species or to protecting habitats? Brainstorm seven '
                 'ideas, cross out the ones that overlap, and write the '
                 'plan. Twelve minutes.'),
         plan=('Conservation money should go mainly to habitats, '
               'because a species cannot be kept alive on land that '
               'cannot support it, although money for single species is '
               'what raises the funds in the first place',
               [('A species without habitat cannot be saved',
                 ['small isolated populations are removed by accidents '
                  'rather than trends',
                  'a reserve with no corridors behaves like an island '
                  'and loses species']),
                ('Single-species appeals are how the money is raised',
                 ['the public gives to animals it recognises rather '
                  'than to land',
                  'famous species can be used to protect the ground '
                  'they stand on'])]),
         notes=[
          'This brainstorm produces overlapping ideas more than most. '
          '"Habitats support many species" and "protecting habitat is '
          'better value" are the same idea counted twice; keep one.',
          'The thesis concedes the strongest point for the other side in '
          'its final clause, which is a cheap and effective way to sound '
          'balanced without weakening your position.',
          'Notice that the second heading is an argument about fundraising '
          'rather than about biology. Mixing kinds of reason is allowed '
          'and often improves an essay, provided each is labelled.'],
         criterion=[('Overlapping ideas merged rather than listed',
                     'Task Response'),
                    ('A thesis that concedes in its last clause',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Conditional reasoning: unless, provided that, so long as',
    explain=('A condition states what has to be true for a claim to '
             'hold, and which way round the condition runs matters.'),
    examples=['Unless the corridors are kept open, the reserve becomes '
              'an island.',
              'A reserve works provided that the surrounding land is '
              'managed sympathetically.',
              'Small populations survive so long as animals can arrive '
              'from elsewhere.',
              'If the edge effect reaches a hundred metres, a small '
              'reserve is mostly edge.'],
    task='Rewrite each pair as a single conditional sentence.',
    items=[('The corridors must stay open. Otherwise the reserve is an '
            'island.',
            'Unless the corridors are kept open, the reserve becomes an '
            'island.'),
           ('Reserves work if the land around them is managed well.',
            'A reserve works provided that the land surrounding it is '
            'managed sympathetically.'),
           ('Small populations need arrivals from outside.',
            'Small populations persist so long as animals can arrive from '
            'neighbouring sites.'),
           ('The reserve is small. Most of it is edge.',
            'If a reserve is small, most of its area is affected by the '
            'edge.'),
           ('Nothing works without the neighbours.',
            'No reserve succeeds unless the neighbouring landowners agree '
            'to co-operate.')]),
   vocab=[('fragmentation', 'the breaking of habitat into pieces'),
          ('wildlife corridor', 'a strip of land joining two '
           'habitats'),
          ('nature reserve', 'land protected for wildlife'),
          ('effect near the boundary', 'the way conditions change at '
           'the edge'),
          ('habitat', 'the place a species lives'),
          ('species', 'one kind of plant or animal'),
          ('population', 'the animals of one species in one place'),
          ('fence line', 'the boundary of protected land')],
   expr=[('unless the corridors are kept open',
          'states a condition that decides the outcome'),
         ('a small reserve may be almost entirely edge',
          'the geometric fact this cycle rests on'),
         ('removed not by a trend but by an accident',
          'explains how small populations vanish'),
         ('what surrounds it, not how large it is',
          'the sentence worth remembering')],
   trans=['because of this', 'consequently', 'in other words',
          'as a result'],
  ),

  dict(
   sub='What a reserve cannot reach',
   step=4,
   read=[
    dict(heading='The threats that cross a fence',
         kind='Academic passage',
         task='Matching information, True/False/Not Given and short '
              'answer',
         band='acad', qtype='Questions 55-62',
         paras=[
          'A reserve is a line drawn on a map, and the value of drawing '
          'it depends entirely on whether the things that threaten the '
          'species respect the line. Some do. Building, ploughing and '
          'shooting can be stopped at a boundary, and that is a real '
          'achievement which should not be understated. Others cross it '
          'without noticing, and those are the threats that now do most '
          'of the damage.',
          'Water is the clearest example. A wetland reserve depends on water '
          'that falls, and is removed, outside its boundary. If the farms '
          'upstream drain their fields more efficiently or a town extends '
          'its supply, the reserve dries whatever happens inside the fence. '
          'Several famous wetlands have been lost in exactly this way while '
          'remaining fully protected on paper, with their management plans '
          'up to date and their signs repainted.',
          'Air carries a second set of threats. Nitrogen from farming and '
          'from vehicles falls on the ground everywhere, and it acts as a '
          'fertiliser. On poor soils, which is precisely where many rare '
          'plants grow, fertiliser is a disaster: fast-growing common '
          'species take over within a few seasons and the rare ones '
          'disappear. No fence affects this at all.',
          'Climate moves the problem in a different direction again. A '
          'reserve protects a place, and it cannot move, while the '
          'conditions a species needs are travelling across the map at '
          'something between two and five kilometres a year. A species whose '
          'only protected site stops suiting it has nowhere to go unless '
          'there is joined-up land in the direction the climate is moving.',
          'The common feature of these three is that the boundary drawn '
          'around the problem excluded the cause. That is not a mistake '
          'anybody made by being careless; it is what a boundary is for. A '
          'line that includes everything relevant to a wetland would include '
          'the whole catchment, every farm in it and the town that drinks '
          'from it, and no conservation body could manage that.',
          'What follows is less dramatic than either side of the usual '
          'argument. Reserves remain necessary and are not sufficient. The '
          'work that matters most now is on land nobody is protecting: the '
          'hedges, verges, field margins and river banks that connect '
          'protected sites to one another and let species move. That work is '
          'slow, unphotogenic and almost impossible to raise money for, '
          'which is a reasonable summary of why it is not being done at the '
          'scale required.'],
         items=[
          ('Which paragraph explains why fences cannot stop '
           'fertiliser?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 2,
           'Nitrogen from farming and vehicles falls everywhere.'),
          ('Which paragraph describes conditions moving across the '
           'map?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Two to five kilometres a year.'),
          ('Which paragraph says the boundary problem was not a '
           'mistake?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'It says this is what a boundary is for, not an error.'),
          ('The writer believes reserves are no longer worth '
           'creating.', ['True', 'False', 'Not Given'], 1,
           'The final paragraph calls them necessary but not '
           'sufficient.'),
          ('Some protected wetlands have dried out while still legally '
           'protected.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 states this about several famous '
           'wetlands.'),
          ('The writer believes conservation bodies should buy whole '
           'catchments.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 5 says no body could manage that.'),
          ('On which soils is extra nitrogen most damaging?', None,
           'poor soils', 'Paragraph 3, where many rare plants grow.'),
          ('The work that matters most is on land nobody is '
           '____________.', None, 'protecting',
           'The final paragraph: hedges, verges and field margins.')])],
   listen=[
    dict(heading='Two conservationists disagree', part='Part 4',
         task='A recorded discussion', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Dr Abeyratne manages reserves. Professor '
           'Lindqvist-Oyelaran works on species recovery. Each begins '
           'with the strongest point against their own position.'),
          ('Abeyratne', 'Mine is that I defend reserves and I know that '
           'two of mine are drying out for reasons entirely outside the '
           'fence. I manage the inside beautifully and the water is '
           'decided twelve kilometres away.'),
          ('Lindqvist-Oyelaran', 'And mine is that single-species work '
           'is how we raise money, and I pretend that is a scientific '
           'argument when it is a fundraising one. People give to birds '
           'they recognise. They do not give to field margins.'),
          ('Chair', 'So where do you disagree?'),
          ('Lindqvist-Oyelaran', 'On where the next ten million pounds '
           'goes. He says connect the sites. I say recover the species '
           'that are nearly gone, because once they are gone the '
           'connecting is pointless.'),
          ('Abeyratne', 'And I say if you recover a species into a '
           'landscape it cannot cross, you have bought it twenty '
           'years.'),
          ('Lindqvist-Oyelaran', 'Twenty years is not nothing. Twenty '
           'years is how long it took to change the farming rules last '
           'time.'),
          ('Abeyratne', 'That is the best argument you have made against '
           'me and I do not have an answer to it.'),
          ('Lindqvist-Oyelaran', 'May I say the thing we both avoid? '
           'Neither of us can do anything about nitrogen falling out of '
           'the air, and it is doing more damage than everything else we '
           'argue about.'),
          ('Abeyratne', 'Which is a question for farming policy and '
           'vehicle rules rather than for either of us.'),
          ('Lindqvist-Oyelaran', 'And so the thing that matters most is '
           'the thing neither profession works on. I find that harder to '
           'say in public than anything else.')],
         items=[
          ('The first speaker admits two of his reserves are '
           '____________ for reasons outside the fence.', None,
           'drying out', 'With the water decided twelve kilometres '
           'away.'),
          ('The second admits that single-species work is really a '
           '____________ argument.', None, 'fundraising',
           'Because people give to birds they recognise.'),
          ('They disagree about where the next ten million '
           '____________ should go.', None, 'pounds',
           'Connecting sites, or recovering species.'),
          ('He argues that recovering a species into a landscape it '
           'cannot cross buys it ____________ years.', None, 'twenty',
           'Which she says is not nothing.'),
          ('She says twenty years is how long it took to change the '
           '____________ rules.', None, 'farming',
           'Which he calls her best argument.'),
          ('They agree that neither profession works on the problem '
           'of', ['water', 'nitrogen', 'funding', 'climate'], 1,
           'Which they say does more damage than what they argue '
           'about.')])],
   speak=dict(
    part='Part 3', focus='Conservation and the people who live there',
    intro=('Four or five sentences. Say who has to agree for something '
           'to work.'),
    qs=['Should people be allowed to live and farm inside protected '
        'areas?',
        'Is conservation mainly a scientific or a political problem?',
        'How should conservation be paid for?',
        'What would you protect first where you live?'],
    shape=[('answer', 'Yes, because excluding them rarely works for '
            'long.'),
           ('support', 'The land around a reserve decides whether the '
            'reserve works.'),
           ('follow-up', 'That land belongs to farmers and councils '
            'rather than to conservation bodies.'),
           ('support', 'So most of the real work is negotiation.'),
           ('follow-up', 'A scheme that pays a farmer to keep a hedge '
            'does more than a fence does, and costs less than buying '
            'the field.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Habitats or individual species?',
         prompt=('Some people say conservation should focus on '
                 'protecting habitats rather than individual species. '
                 'Discuss both views and give your own opinion. Write '
                 'at least 250 words.'),
         model=[
          'Conservation has argued about this for fifty years, and the '
          'argument has lasted because each side is right about '
          'something the other cannot supply. One is right about '
          'biology and the other is right about money, and a policy that '
          'ignores either of them fails for a predictable reason.',
          'The case for habitats is the stronger scientific one. A '
          'species cannot be kept alive on land that will not support '
          'it, and a protected population that is small and isolated is '
          'removed not by a gradual decline but by an accident: a dry '
          'summer, a disease, a fire. Connecting two reserves with a '
          'hedge or an unploughed bank turns two small populations into '
          'one larger one, and larger populations survive bad years.',
          'The case for individual species is practical rather than '
          'biological. The public gives money to animals it recognises '
          'and does not give money to field margins, and that is '
          'unlikely to change. Campaigns for a single famous species '
          'have repeatedly been used to protect the ground it stands '
          'on, which is habitat protection wearing a more attractive '
          'coat.',
          'My own view is that the two should be separated by function. '
          'Single species should be used to raise money and to focus '
          'public attention, and habitat should decide where the money '
          'is spent. The mistake is to let the fundraising argument '
          'become the scientific one, which happens whenever a species '
          'is recovered into a landscape it cannot cross.',
          'In conclusion, I support habitat protection as the aim and '
          'single-species work as the method of paying for it. Neither '
          'side needs to lose the argument, but one of them has to stop '
          'deciding where the money goes.'],
         notes=[
          'Structure 3: two positions and then a third. The third '
          'position separates the two by function — one raises money, the '
          'other decides where it goes — which is more useful than '
          'splitting the difference.',
          'Each side is given the kind of reason it actually has: biology '
          'for habitat, fundraising for species. Naming what kind of '
          'argument you are making is a mark of control.',
          'The last sentence is direct and slightly uncomfortable, which '
          'is appropriate: a conclusion that refuses to please both sides '
          'reads as a view rather than a summary.'],
         criterion=[('A third position that separates by function',
                     'Task Response'),
                    ('Each side given the kind of reason it has',
                     'Task Response'),
                    ('A conclusion that takes a side',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Hedged disagreement: that may be so, it does not follow '
          'that',
    explain=('Disagreeing with part of an argument is clearer when you '
             'accept the rest of it first.'),
    examples=['That may be so, but it does not follow that the reserve '
              'is safe.',
              'The point is correct and it answers a different '
              'question.',
              'I accept the figure; I do not accept what is drawn from '
              'it.',
              'Twenty years is not nothing, although it is not a '
              'solution either.'],
    task='Rewrite each flat disagreement as a hedged one.',
    items=[('That is wrong.',
            'That may be so, but it does not follow that the species is '
            'protected.'),
           ('Species campaigns are pointless.',
            'Single-species campaigns raise money effectively; what they '
            'do not do is decide where it should be spent.'),
           ('Reserves do not work.',
            'Reserves work against building and ploughing, and they do '
            'not work against water, nitrogen or climate.'),
           ('Your figure is useless.',
            'I accept the figure. What I do not accept is the conclusion '
            'drawn from it.'),
           ('Twenty years is nothing.',
            'Twenty years is not nothing, although it is a delay rather '
            'than a recovery.')]),
   vocab=[('whole river basin', 'all the land draining into one '
           'river'),
          ('side effect', 'an unintended result of an action'),
          ('unintended', 'not planned or wanted'),
          ('field margin', 'the uncultivated edge of a field'),
          ('verge', 'the grass beside a road'),
          ('nitrogen', 'a nutrient that acts as a fertiliser'),
          ('connected land', 'ground that links two habitats'),
          ('on paper', 'in official records rather than in reality')],
   expr=[('the boundary drawn around the problem excluded the cause',
          'the sentence this unit ends on'),
         ('necessary and not sufficient',
          'accepts a thing and limits it'),
         ('protected on paper',
          'marks a gap between the record and reality'),
         ('slow, unphotogenic and almost impossible to fund',
          'explains why the right work is not done')],
   trans=['admittedly', 'and yet', 'on balance', 'in short'],
  ),
 ],
 technique=dict(
  title='The keyword trap, from a real paraphrase',
  body=('Every candidate is taught to find keywords in the question and '
        'look for them in the passage, and the examiners know it. The '
        'result is a trap that appears in almost every paper: a sentence '
        'in the passage contains the exact words of the question and is '
        'not the answer, while the real answer is three paragraphs away '
        'in completely different words. The trap works because the test '
        'is not a word-matching exercise; it is a test of whether you '
        'understood the meaning. Here is the habit that defeats it. '
        'When you find your keyword, do not answer. Read the whole '
        'sentence it sits in and ask whether that sentence actually says '
        'what the question claims. Half the time it says the opposite, '
        'or says it about a different group, or says somebody once '
        'believed it. Second, expect the real answer to be a paraphrase '
        'and prepare for it: before you search, spend five seconds '
        'thinking what other words could express the idea. If the '
        'question says "rose sharply", the passage may say "more than '
        'doubled". If the question says "the main reason", the passage '
        'may say "chiefly because". Third, remember that numbers and '
        'names are not paraphrased, so when a question contains one, '
        'that is the thing to search for rather than the idea words '
        'around it.'),
  panel=[('Finding the keyword is not finding the answer',
          'Read the whole sentence and test it against the claim.'),
         ('Expect a paraphrase',
          'Think of two other ways to say the idea before you look.'),
         ('Search names and numbers',
          'They are not paraphrased. Idea words are.'),
         ('Opposite, or about another group?',
          'The commonest trap sentence says one of those two.')],
  task='In the cycle 4 passage, find three sentences that contain words '
       'from a question and are not the answer, and write down why '
       'each one fails.',
  qs=['Does this sentence actually say what the question claims?',
      'Is it about the same group or the same time?',
      'What other words could express this idea?',
      'Is there a number or a name I should search for instead?',
      'Am I matching words or meaning?']),
 outlining=dict(
  title='Spot the overlap in a brainstormed list of seven ideas',
  body=('Unit 2 looked for the pair where one idea lives inside '
        'another. This page looks for a different fault, which is '
        'harder to see: two ideas that are genuinely different and '
        'overlap so much in their supporting evidence that they cannot '
        'be written separately. "Habitats support many species at once" '
        'and "protecting habitat is better value for money" are not the '
        'same idea, and every piece of evidence you would use for one is '
        'evidence for the other. If you give them separate paragraphs, '
        'you will write the same three facts twice and the examiner will '
        'read it as repetition. The test is to write the two supports '
        'you would use under each heading, before you commit to the '
        'plan. If the same fact appears under both, you have one '
        'paragraph and not two. Merging them is not a loss: a paragraph '
        'with four supports is better than two paragraphs with two '
        'each, because the extra space goes into developing rather than '
        'into a second topic sentence that says almost the same '
        'thing.'),
  frame=('Conservation money should go mainly to habitats, because a '
         'species cannot be kept alive on land that cannot support it, '
         'although single-species appeals are what raise the money',
         [('A species without habitat cannot be saved',
           ['small isolated populations are removed by accidents rather '
            'than trends',
            'a reserve with no corridors behaves like an island and '
            'loses species']),
          ('Single-species appeals are how the money is raised',
           ['the public gives to animals it recognises rather than to '
            'land',
            'famous species have been used to protect the ground they '
            'stand on'])]),
  task='Brainstorm seven ideas for the cycle 4 question, write two '
       'supports under each, and merge any pair that shares a support.',
  qs=['Which two headings would use the same fact?',
      'Can I write four sentences on each without repeating?',
      'Is one of these a reason and the other its consequence?',
      'After merging, how many main ideas are left?',
      'Does each remaining idea have its own evidence?'],
  answers=['the pair that shares evidence is one idea',
           'if not, merge them and develop the result',
           'if so, the consequence is a support, not a heading',
           'two or three is the right number for 250 words',
           'if not, cross it out now rather than at minute thirty']),
 candos=['I can read a council notice for its exceptions',
         'I can write a complaint that asks for a date rather than an '
         'apology',
         'I can describe two lines that cross on a graph',
         'I can avoid the keyword trap by reading the whole sentence',
         'I can merge two brainstormed ideas that share their '
         'evidence'],
 tip=('Finding your keyword in the passage is not finding the answer. '
      'Read the sentence it sits in and check that it really says what '
      'the question claims, because about half the time it does not.'),
)
