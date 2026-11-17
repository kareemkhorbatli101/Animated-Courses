# -*- coding: utf-8 -*-
"""Foundation 1, Unit 10 - Weather and Seasons.

The last unit of the first book. A forecast, a packing list, a flood
warning, and then the two readings that close the course: why the coast
is milder than the hills, and what two people remember about winters
that the records say did not happen that way.
"""

_RAIN = dict(kind='line',
             title='Rain and temperature through one year',
             sub='one coastal town, monthly means',
             x=['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
             series=[('Rain, mm', [96.0, 64.0, 48.0, 42.0, 71.0, 103.0]),
                     ('Temperature, C', [6.0, 9.0, 14.0, 19.0, 16.0,
                                         9.0])],
             ylab='mm / degrees')

_WASTE = dict(kind='process',
              title='What happens to a bottle after the bin',
              sub='five stages, and two places it can leave the system',
              stages=[
               ('Collection', 'the bin is emptied into a lorry once a '
                'fortnight'),
               ('Sorting', 'glass, plastic and metal are separated at '
                'a depot'),
               ('Rejection', 'dirty or mixed items are taken out and '
                'burned'),
               ('Cleaning', 'the rest is washed and broken into small '
                'pieces'),
               ('Remaking', 'the pieces are melted and made into new '
                'containers')],
              phases=[('At the kerb', 0, 0), ('At the depot', 1, 3),
                      ('At the factory', 4, 4)])

UNIT = dict(
 n=10, vol=7, level='A1-A2', band='below 4.0',
 theme='Weather and Seasons',
 opener=(
   'This is the last unit of Foundation 1, and it ends outdoors. You '
   'will read a forecast and a packing list, follow a flood warning, '
   'learn why the coast is milder than the hills twenty kilometres '
   'inland, and finish with two people remembering winters that the '
   'records do not agree with. The technique page is the blind-reader '
   'test for your own chart descriptions, and the outlining page asks '
   'for eight sentences under three ideas, which is the shape Volume 1 '
   'begins with.'),

 cycles=[
  dict(
   sub='Talking about the weather',
   step=1,
   read=[
    dict(heading="This week's forecast",
         kind='Forecast chart', task='Note completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A forecast is read down the day you need',
                ['Find the day first, then the thing: rain, wind, '
                 'temperature.',
                 'The highest and the lowest of the week are the '
                 'commonest questions.']),
         paras=[
          'Monday and Tuesday: dry and bright, with a high of twelve '
          'degrees and a cold night on Monday, down to one.',
          'Wednesday: rain from the west, heavy at times, reaching the '
          'coast by the middle of the morning and clearing by evening. '
          'Warmer, at fifteen.',
          'Thursday to Saturday: dry again but considerably colder. '
          'Thursday night is the coldest of the week, at minus two, '
          'with ice on untreated roads and a strong wind from the '
          'north.'],
         items=[
          ('Monday night falls to ____________ degree(s).', None,
           'one', 'The high on Monday is twelve degrees.'),
          ('Rain arrives on ____________.', None, 'Wednesday',
           'From the west, heavy at times.'),
          ('The rain reaches the coast by the middle of the '
           '____________.', None, 'morning',
           'And it clears away by the evening.'),
          ('The warmest day is ____________.', None, 'Wednesday',
           'At fifteen degrees, the day the rain comes.'),
          ('The coldest night is ____________ night, at minus two.',
           None, 'Thursday', 'With ice forming on untreated roads.')])],
   listen=[
    dict(heading='What shall we wear?', part='Part 1',
         task='A conversation at home · note completion', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Ana', 'Have you looked at tomorrow?'),
          ('Sam', 'Rain in the morning, dry from about two.'),
          ('Ana', 'We are walking at eleven.'),
          ('Sam', 'Then we walk in it. It is only four kilometres and '
           'it is not cold, fifteen degrees.'),
          ('Ana', 'Fifteen is warm for March.'),
          ('Sam', 'It is the wind that will bother us, not the rain. '
           'From the west, and the path along the river is open the '
           'whole way.'),
          ('Ana', 'Shall we go the other way, through the wood?'),
          ('Sam', 'Longer, six kilometres, but out of the wind and the '
           'ground is better when it is wet.'),
          ('Ana', 'The wood, then. What time do we need to leave?'),
          ('Sam', 'Half past ten. The bus at twenty-five past will not '
           'get us there.'),
          ('Ana', 'And boots rather than shoes.'),
          ('Sam', 'Boots. And take the small bag, not the one that '
           'soaks through.'),
          ('Ana', 'I will put bread and cheese in.'),
          ('Sam', 'Then we are ready. Half past ten at the corner.')],
         items=[
          ('It will be dry from about ____________.', None, 'two',
           'With rain in the morning before that.'),
          ('The temperature will be ____________ degrees.', None,
           'fifteen', 'Which Ana says is warm for March.'),
          ('Sam says the ____________ will bother them, not the '
           'rain.', None, 'wind', 'The wind is coming from the west.'),
          ('The route through the wood is ____________ kilometres.',
           None, 'six', 'Against four kilometres along the river.'),
          ('They will leave at half past ____________.', None, 'ten',
           'Meeting at the corner, with boots.')])],
   speak=dict(
    part='Part 1', focus='Weather where you live',
    intro='Describe the usual, then the exception. Two sentences each '
          'time.',
    qs=['What is the weather like where you live?',
        'Which season do you prefer?',
        'Does the weather change your plans often?',
        'Has the weather changed since you were a child?'],
    shape=[('answer', 'It rains a great deal in winter and it is '
            'rarely very cold.'),
           ('support', 'In summer it is about twenty-five degrees, '
            'which most people find comfortable.'),
           ('follow-up', 'I prefer autumn, because the light is better '
            'and the town is quiet again.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Changing a plan because of the weather',
         prompt='You had arranged to meet a friend outdoors. The '
                'weather has changed. Write a note. In your note: say '
                'what the weather will be; suggest a different plan; '
                'say when you will confirm.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Hi Omar,',
          'The forecast for Saturday has changed. Heavy rain is now '
          'expected from the west all morning, clearing in the '
          'afternoon.',
          'Rather than walk along the river, which is open to the wind '
          'the whole way, shall we go through the wood instead? It is '
          'two kilometres further but it is sheltered, and the ground '
          'is better when it is wet. If the rain is still heavy at ten '
          'we could leave it until Sunday.',
          'I will look at the forecast again on Friday evening and tell '
          'you then.',
          'Ana'],
         notes=['The weather comes first and in detail, because it is '
                'the reason for everything else.',
                'The new plan is a suggestion with its advantage and '
                'its cost, not simply an instruction.',
                'The last line fixes when the decision will be made, '
                'which is what stops a note turning into six '
                'messages.'],
         criterion=[('The weather described first', 'Task '
                     'Achievement'),
                    ('A clear alternative suggested', 'Task '
                     'Achievement'),
                    ('A time to confirm', 'Task Response'),
                    ('Friendly, informal register', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='will and might for the weather',
    explain='Use will for what is expected and might for what is '
            'possible. Both take the plain verb.',
    examples=['It will rain in the morning.',
              'It might be colder on Thursday.',
              'The wind will come from the west.',
              'It might clear by two.'],
    items=[('It (will / rain) in the morning.',
            'It will rain in the morning.'),
           ('It (might / be) colder on Thursday.',
            'It might be colder on Thursday.'),
           ('The wind (will / come) from the west.',
            'The wind will come from the west.'),
           ('It (might / clear) by two.', 'It might clear by two.'),
           ('There (will / not / be) any snow.',
            'There will not be any snow.')],
    task='Write each sentence with will or might.'),
   vocab=[('river', 'a large natural flow of water'),
          ('above', 'higher than'),
          ('removed', 'taken away'),
          ('lower', 'further down'),
          ('bin', 'a container for rubbish'),
          ('metres', 'units of length'),
          ('property', 'something owned, or a building and its land'),
          ('items', 'single things in a list or group'),
          ('animals', 'living creatures that are not plants'),
          ('remain', 'to stay'),
          ('dry', 'without water'),
          ('below', 'lower than'),
          ('edge', 'the outside limit of something'),
          ('collection', 'the act of gathering things, or a set of '
           'them'),
          ('bottles', 'containers for liquid with a narrow neck')],
   expr=[('Have you looked at tomorrow?', 'asking about a forecast'),
         ('It is the wind, not the rain.', 'naming the real '
          'problem'),
         ('Shall we go the other way?', 'suggesting an alternative'),
         ('Then we are ready.', 'closing a plan')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Seasons and clothes',
   step=1,
   read=[
    dict(heading='What to pack: a list for a cold country',
         kind='Packing list', task='Short answer, note completion and matching features',
         band='gt_short', qtype='Questions 11-15',
         paras=[
          'Three thin layers are warmer than one thick one and they can '
          'be taken off. The thin layer next to the skin matters most, '
          'and it should not be cotton, which stays wet.',
          'Bring boots that are already worn in. New boots on the first '
          'day of a walking holiday ruin the second day, and nothing '
          'can be done about it once it has happened.',
          'Gloves, a hat and a scarf take almost no room and make more '
          'difference than any coat. Most heat is lost at the edges of '
          'the body, so cover the ends first.'],
         items=[
          ('How many thin layers are suggested?', None, 'three',
           'Warmer than one thick layer, and removable.'),
          ('The layer next to the skin should not be ____________.',
           None, 'cotton', 'Because it stays wet against the body.'),
          ('Boots should already be ____________.', None, 'worn in',
           'New boots ruin the second day of a holiday.'),
          ('Which three small items make the most difference?',
           ['boots, socks and a map', 'gloves, a hat and a scarf', 'a thick coat, a bag and a stick', 'a torch, a scarf and gloves'],
           1, 'They take almost no room in a bag and change the day.',
           {0: 'Boots matter, but socks and a map are not on the list.', 2: 'Paragraph 3 says these three beat any coat.', 3: 'A torch is not among the three items named.'}),
          ('Most heat is lost at the ____________ of the body.', None,
           'edges', 'Which is why the ends are covered first.')])],
   listen=[
    dict(heading='Packing for a cold country', part='Part 2',
         task='One speaker giving advice · note completion and short answer', band='l2',
         qtype='Questions 16-20',
         script=[
          ('Speaker', 'I have taken groups north for eleven years and '
           'the same four mistakes happen every time.'),
          ('Speaker', 'The first is one thick coat instead of three '
           'thin layers. A thick coat has one setting. Layers have '
           'four, and you will want all four in a single day.'),
          ('Speaker', 'The second is cotton next to the skin. It gets '
           'wet with your own sweat on the walk up and then it is cold '
           'against you for the rest of the day. Anything else is '
           'better.'),
          ('Speaker', 'The third is new boots. Every year somebody '
           'arrives with boots bought the week before, and by the '
           'second afternoon they are walking badly and the whole group '
           'is slower.'),
          ('Speaker', 'The fourth is bringing too much altogether. The '
           'bag is carried by you, up a hill, and the things you '
           'brought in case are the things you carry for a week without '
           'using.'),
          ('Speaker', 'What people forget, every single year, is '
           'gloves. They take no room, they cost very little, and they '
           'change the day more than anything else in the bag.')],
         items=[
          ('The speaker has taken groups north for ____________ '
           'years.', None, 'eleven', 'And sees the same four '
           'mistakes.'),
          ('A thick coat has one ____________, while layers have '
           'four.', None, 'setting',
           'And all four are wanted in a single day.'),
          ('Cotton gets wet from your own ____________.', None,
           'sweat', 'And is then cold against the skin.'),
          ('By the second ____________ new boots slow the whole '
           'group.', None, 'afternoon',
           'Somebody arrives with new boots every year.'),
          ('What do people forget every year?', None, 'gloves',
           'They take no room and change the day.')])],
   speak=dict(
    part='Part 1', focus='Clothes and seasons',
    intro='Give one habit, then one reason. Avoid listing clothes.',
    qs=['Do you dress differently in summer and winter?',
        'Do you enjoy shopping for clothes?',
        'Is it important to wear the right clothes for work?',
        'What is the most useful thing you own?'],
    shape=[('answer', 'Completely differently, because the winters '
            'here are wet rather than cold.'),
           ('support', 'A waterproof coat is worth more to me than a '
            'thick one.'),
           ('follow-up', 'The most useful thing I own is probably a '
            'pair of boots I have had for six years.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Rain and temperature through one year',
         figure=_RAIN,
         prompt='The graph shows rainfall and temperature in one '
                'coastal town through a year. Describe the graph and '
                'compare the two lines.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The graph shows average monthly rainfall and temperature in '
          'one coastal town.',
          'The two lines move in opposite directions for most of the '
          'year. Rainfall is highest in November at a hundred and three '
          'millimetres and lowest in July at forty-two, while '
          'temperature is highest in July at nineteen degrees and '
          'lowest in January at six.',
          'Rainfall falls steadily from January to July and then rises '
          'again, so the wettest months are at the two ends of the year '
          'and the driest in the middle.',
          'The town is therefore mild rather than extreme: the '
          'temperature range is only thirteen degrees across the whole '
          'year.'],
         notes=['The relationship between the lines is stated before '
                'any figure, which is what a two-line graph needs.',
                'Highest and lowest are given for both, with months.',
                'The closing sentence uses the range, which is a '
                'calculation rather than a copy.'],
         criterion=[('The relationship between the lines stated',
                     'Task Achievement'),
                    ('Highest and lowest for both', 'Task '
                     'Achievement'),
                    ('A range or other calculation', 'Task Response'),
                    ('Units given correctly', 'Grammatical Range and '
                     'Accuracy')])],
   gram=dict(
    point='Comparing with as...as and not as...as',
    explain='Use as plus adjective plus as for things that are equal, '
            'and not as...as for things that are not.',
    examples=['July is not as wet as November.',
              'The hills are not as mild as the coast.',
              'March is as wet as September.',
              'A thick coat is not as useful as three layers.'],
    items=[('July is (not / wet) November.',
            'July is not as wet as November.'),
           ('The hills are (not / mild) the coast.',
            'The hills are not as mild as the coast.'),
           ('March is (wet) September.',
            'March is as wet as September.'),
           ('A thick coat is (not / useful) three layers.',
            'A thick coat is not as useful as three layers.'),
           ('Cotton is (not / good) wool next to the skin.',
            'Cotton is not as good as wool next to the skin.')],
    task='Complete each comparison with as...as or not as...as.'),
   vocab=[('definition', 'a statement of what a word means'),
          ('glass', 'a hard clear material, or a container made of '
           'it'),
          ('summer', 'the warmest season'),
          ('garden', 'ground beside a house for plants'),
          ('spring', 'the season after winter'),
          ('depends', 'is decided by something else'),
          ('fence', 'a barrier round a piece of land'),
          ('drawn', 'past participle of draw'),
          ('fails', 'does not succeed or does not work'),
          ('graph', 'a drawing showing how numbers relate'),
          ('grow', 'to get bigger, or to make plants develop'),
          ('raise', 'to lift or to increase'),
          ('bottom', 'the lowest part'),
          ('example', 'one thing that shows what others are like'),
          ('nowhere', 'in no place')],
   expr=[('Three thin layers are warmer than one thick one.',
          'giving practical advice'),
         ('Nothing can be done once it has happened.',
          'warning about an unfixable mistake'),
         ('They take no room at all.', 'arguing for something '
          'small'),
         ('The things you brought in case.', 'naming what is never '
          'used')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='When the weather causes problems',
   step=2,
   read=[
    dict(heading='Flood warning: what to do',
         kind='Public notice', task='Note completion and short answer',
         band='gt_work', qtype='Questions 21-25',
         skill=('An emergency notice is read for the order of actions',
                ['Find what to do first and what never to do. Those '
                 'two are always asked.',
                 'Numbers matter: how deep, how long, which number to '
                 'ring.']),
         paras=[
          'A flood warning means flooding is expected within two hours. '
          'Move anything valuable above floor level, take medicines and '
          'documents upstairs, and move the car to higher ground before '
          'the water arrives, not after.',
          'Never walk or drive through moving water. Fifteen '
          'centimetres is enough to take a person off their feet and '
          'thirty centimetres will float a car. Most deaths in floods '
          'happen in vehicles, and almost all of them to people who '
          'thought the crossing was reasonable.',
          'Ring the number below for sandbags. They are free, and the '
          'collection point is the depot on Mill Lane.',
          'Afterwards, do not use the water supply until the council '
          'says it is safe, and photograph the damage before you '
          'remove anything.'],
         items=[
          ('A warning means flooding is expected within ____________ '
           'hours.', None, 'two',
           'Which is why the car is moved beforehand.'),
          ('____________ centimetres of moving water can take a person '
           'off their feet.', None, 'fifteen',
           'And thirty centimetres will float a car.'),
          ('Where do most deaths in floods happen?', None,
           'in vehicles',
           'Among people who thought the crossing was reasonable.'),
          ('Sandbags are collected from the depot on ____________ '
           'Lane.', None, 'Mill', 'The sandbags are free of charge.'),
          ('What should you do before removing anything afterwards?',
           None, 'photograph the damage',
           'And wait for the council on the water supply.')])],
   listen=[
    dict(heading='A flood warning announcement', part='Part 2',
         task='A public announcement · note completion', band='l2',
         qtype='Questions 26-30',
         script=[
          ('Announcer', 'This is a flood warning for properties on Mill '
           'Lane, River Road and the lower end of Fenton Street.'),
          ('Announcer', 'The river is expected to come over its banks '
           'between four and six this afternoon. Properties below the '
           'level of the old bridge are most at risk.'),
          ('Announcer', 'Sandbags are available now from the depot on '
           'Mill Lane. They are free. Take identification showing your '
           'address, because supplies are limited to the three streets '
           'named.'),
          ('Announcer', 'Move vehicles to the car park behind the '
           'school, which is eight metres above the river and has never '
           'flooded. Do this now rather than at four.'),
          ('Announcer', 'Do not walk through moving water. Thirty '
           'centimetres will move a car and fifteen will move you. If '
           'you need help to move somebody who cannot walk easily, ring '
           'the number on the card that was delivered this morning.'),
          ('Announcer', 'The next announcement will be at two o clock, '
           'or sooner if the river rises faster than expected.')],
         items=[
          ('The river is expected to come over its banks between four '
           'and ____________.', None, 'six',
           'This afternoon, the announcement says.'),
          ('Properties below the level of the old ____________ are '
           'most at risk.', None, 'bridge',
           'Along with the three named streets.'),
          ('To collect sandbags you must take ____________ showing '
           'your address.', None, 'identification',
           'Because supplies are limited to three streets.'),
          ('Vehicles should go to the car park behind the '
           '____________.', None, 'school',
           'Eight metres above the river, and never flooded.'),
          ('The next announcement is at ____________ o clock.', None,
           'two', 'Or sooner if the river rises faster.')])],
   speak=dict(
    part='Part 2', focus='A time the weather changed your plans',
    longturn=[('I am going to talk about a time when the weather changed my '
               'plans. It was my sister\'s birthday party.'),
              ('We planned a party in the park for about twenty people. It was '
               'in June, and we had food, two tables and a football. Her '
               'birthday is on the fourteenth, and we planned it for the '
               'Saturday after.'),
              ('The weather was terrible. It rained from eight in the morning '
               'until the evening, heavy rain, not light rain. We waited until '
               'eleven o\'clock, and then we knew it was not possible. My '
               'sister was very unhappy, and she cried a little.'),
              ('What we did instead was quite simple. We moved everything to '
               'my flat. My flat is small, so twenty people was too '
               'many, and about fourteen came. We put the tables '
               'together, we put the food in the kitchen, and the '
               'children played a game in the hall. In the end my '
               'sister said it was better than the park, because '
               'everybody talked to everybody. I am not sure that is '
               'true, but we tell the story every year now.')],
    intro='One minute to prepare, four short lines. Tell it as a '
          'story.',
    qs=['Describe a time when the weather changed your plans.',
        'Say what you had planned.',
        'Say what the weather did.',
        'Say what you did instead.'],
    shape=[('answer', 'Two winters ago we had planned a walk along the '
            'river on a Saturday.'),
           ('support', 'The river came over its banks on the Friday '
            'night and the path was under water.'),
           ('support', 'We went through the wood instead, which is '
            'longer and sheltered.'),
           ('follow-up', 'It turned out to be the better walk, and we '
            'have done it that way ever since.')]),
   write=[
    dict(task='Task 2',
         heading='Should people be made to prepare for floods?',
         prompt='In some places, people are required by law to prepare '
                'their homes for flooding. Others think this should be '
                'a personal choice. What do you think? Give your '
                'opinion and reasons.',
         instruct='  Write at least 130 months in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Requiring preparation is reasonable where the risk is '
               'known',
               [('The cost of not preparing falls on other people',
                 ['the rescue, the insurance and the road closure are '
                  'all paid by everybody',
                  'so it is not purely a personal choice']),
                ('Requirements only work if help comes with them',
                 ['an owner with no money cannot raise a floor',
                  'a rule without a grant simply fines the poorest'])]),
         model=[
          'In some places homeowners must prepare for flooding by law. '
          'I think a requirement is reasonable where the risk is known, '
          'but only if help is provided with it.',
          'The first reason is that the cost of not preparing is not '
          'paid by the owner alone. When a house floods, the rescue, '
          'the insurance and the closed road are paid for by everybody. '
          'A choice that sends the bill to other people is not a purely '
          'personal choice.',
          'The second reason is a limit on the first. An owner with no '
          'money cannot raise a floor or fit a barrier, and a rule '
          'without a grant simply fines the poorest people in the most '
          'dangerous houses. The requirement and the help have to '
          'arrive together.',
          'So I would require preparation in the streets that have '
          'flooded twice, and pay for it where the owner cannot.'],
         notes=['The position has a condition built into it from the '
                'first paragraph, which is more honest than a flat '
                'yes.',
                'The second reason limits the first rather than adding '
                'to it, which is a structure worth copying.',
                'The conclusion is specific: which streets, and who '
                'pays.'],
         criterion=[('A position with its condition', 'Task '
                     'Response'),
                    ('A reason about who bears the cost', 'Task '
                     'Response'),
                    ('A second reason that limits the first',
                     'Coherence and Cohesion'),
                    ('Conditionals used correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Imperatives and prohibitions in notices',
    fix=dict(
     text=('Please to keep off the grass after heavy rain. Do not to light '
           'fires in the park at any time. No swimming is allowed in the lake, '
           'because the water is cold and deep. Visitors must not to leave '
           'rubbish. In June we planned a party here, and it rained all day, '
           'so we moved everything to my flat.'),
     faults=[('Please to keep off the grass',
              'Please keep off the grass',
              ('An instruction uses the plain verb. Please does not change '
               'that.')),
             ('Do not to light fires',
              'Do not light fires',
              'After do not the verb has no to: do not light.'),
             ('Visitors must not to leave rubbish',
              'Visitors must not leave rubbish',
              'After must the verb has no to either.')]),
    explain='Notices use the plain verb for instructions and do not or '
            'never for prohibitions.',
    examples=['Move vehicles to higher ground.',
              'Do not walk through moving water.',
              'Never touch a wet electricity box.',
              'Take identification with you.'],
    items=[('(move) vehicles to higher ground.',
            'Move vehicles to higher ground.'),
           ('(not / walk) through moving water.',
            'Do not walk through moving water.'),
           ('(never / touch) a wet electricity box.',
            'Never touch a wet electricity box.'),
           ('(take) identification with you.',
            'Take identification with you.'),
           ('(not / use) the water until it is safe.',
            'Do not use the water until it is safe.')],
    task='Write each notice line as an instruction or prohibition.'),
   vocab=[('brown', 'the colour of earth or wood'),
          ('enter', 'to go into'),
          ('damage', 'harm that reduces value or use'),
          ('square', 'a shape with four equal sides, or an open '
           'space'),
          ('map', 'a drawing of an area from above'),
          ('approach', 'to come near, or a way of dealing with '
           'something'),
          ('naturally', 'in a natural way, or of course'),
          ('behave', 'to act in a particular way'),
          ('plastic', 'a light artificial material'),
          ('reasonable', 'fair and sensible'),
          ('rubbish', 'waste material'),
          ('elsewhere', 'in another place'),
          ('islands', 'pieces of land surrounded by water'),
          ('threats', 'things likely to cause harm'),
          ('rejected', 'refused or not accepted')],
   expr=[('Do this now rather than at four.', 'urging early action'),
         ('Supplies are limited to the three streets named.',
          'explaining a restriction'),
         ('Most deaths happen in vehicles.',
          'giving the fact that changes behaviour'),
         ('The next announcement will be at two.', 'closing a public '
          'notice')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='Why climates differ',
   step=2,
   read=[
    dict(heading='Why the coast is milder than the hills',
         kind='Short factual article',
         task='Note completion, short answer and matching information',
         band='acad', qtype='Questions 31-36',
         paras=[
          'Two towns twenty kilometres apart can have winters that '
          'differ by four degrees, and the reason is water. Water heats '
          'slowly and cools slowly, and the sea beside a coastal town '
          'holds the summer heat for months. In January that stored '
          'heat is released into the air, which is why the coast is '
          'milder in winter. The same property makes the coast cooler '
          'in summer, because the sea is still cold from the winter '
          'when the land is already warm.',
          'Height is the second cause, and it is more regular than '
          'people expect: temperature falls by roughly six degrees for '
          'every thousand metres of height. A town three hundred metres '
          'above the sea is therefore nearly two degrees colder than '
          'one at sea level before any other factor is counted. The '
          'wetland in a valley may add fog, which keeps a cold morning '
          'cold for hours longer.',
          'The third cause is the direction the wind comes from, and '
          'it is the one that varies most. A wind that has crossed '
          'water carries moisture; a wind that has crossed a mountain '
          'has left most of its rain on the far side and arrives dry. '
          'This is why two slopes of the same hill can have rainfall '
          'readings that differ by a factor of three. A careless '
          'comparison of two towns tells you almost nothing unless you '
          'know which way each of them faces.'],
         items=[
          ('Two towns ____________ kilometres apart can differ by four '
           'degrees.', None, 'twenty',
           'Paragraph 1, and the reason is water.'),
          ('The sea holds the ____________ heat for months.', None,
           'summer', 'Paragraph 1, releasing it in January.'),
          ('Temperature falls about ____________ degrees for every '
           'thousand metres.', None, 'six',
           'Paragraph 2, which is more regular than expected.'),
          ('What may a wetland in a valley add?', None, 'fog',
           'Paragraph 2, which keeps a cold morning cold.'),
          (
           'Which paragraph explains why two slopes differ in '
           'rainfall?',
           ['Paragraph 3', 'Paragraph 1', 'Paragraph 2'], 0,
           'Because of the direction the wind comes from.',
           {1: 'Paragraph 1 is about the sea and the land.', 2: 'Paragraph 2 is about height rather than direction.'}),
          ('Rainfall on two slopes can differ by a factor of '
           '____________.', None, 'three',
           'Paragraph 3, depending which way each faces.')])],
   listen=[
    dict(heading='A talk about rain and mountains', part='Part 4',
         task='A short lecture to first-year students · note completion', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'Here is a fact that sounds impossible. Two sides '
           'of the same hill, four kilometres apart, can have rainfall '
           'that differs by a factor of three. Nothing is wrong with '
           'the instruments.'),
          ('Speaker', 'Air carries moisture. When it is pushed up over '
           'a hill it cools, and cool air cannot hold as much, so the '
           'water falls as rain on the side the wind comes from. By the '
           'time the air comes down the other side it is dry, and it '
           'warms as it descends, which dries the land further.'),
          ('Speaker', 'This is why you can stand on one side of a range '
           'in a wetland and drive two hours to a place where almost '
           'nothing grows without irrigation.'),
          ('Speaker', 'Two other things change a local climate. Water '
           'beside you, which keeps winters mild and summers cool, and '
           'height, which takes about six degrees off for every '
           'thousand metres.'),
          ('Speaker', 'One practical consequence. If you are comparing '
           'readings from two places, the first question is not how far '
           'apart they are. It is which way each of them faces and how '
           'high each one is. Distance is the least useful of the '
           'three.')],
         items=[
          ('Rainfall on two sides of a hill can differ by a factor of '
           '____________.', None, 'three',
           'Although the sides are four kilometres apart.'),
          ('Cool air cannot hold as much ____________.', None,
           'moisture', 'So the water falls on the windward side.'),
          ('Air that descends the other side ____________ as it '
           'comes down.', None, 'warms',
           'And that dries the land still further.'),
          ('Height takes about ____________ degrees off for every '
           'thousand metres.', None, 'six',
           'And water nearby keeps winters mild.'),
          ('The speaker says ____________ is the least useful of the '
           'three.', None, 'distance',
           'Facing and height matter more.')])],
   speak=dict(
    part='Part 3', focus='Climate and place',
    intro='Explain the cause, then give the example. The explanation '
          'is what is being marked.',
    qs=['Why is the weather different in places that are close '
        'together?',
        'Do people choose where to live because of weather?',
        'Will the weather where you live change in your lifetime?'],
    shape=[('answer', 'The main reasons are water, height and the '
            'direction of the wind.'),
           ('support', 'The sea holds summer heat into January, which '
            'is why a coast is milder.'),
           ('support', 'Height takes about six degrees off for every '
            'thousand metres.'),
           ('follow-up', 'So two towns twenty kilometres apart can '
            'have winters four degrees different.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='What happens to a bottle after the bin',
         figure=_WASTE,
         prompt='The diagram shows what happens to a glass bottle after '
                'it is put in a recycling bin. Describe the process.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The diagram shows the five stages a glass bottle passes '
          'through after it is put into a recycling bin, grouped into '
          'three places.',
          'At the kerb, the bin is emptied into a lorry once a '
          'fortnight. The bottle is then taken to a depot, where three '
          'things happen: glass, plastic and metal are separated, dirty '
          'or mixed items are taken out and burned, and what remains is '
          'washed and broken into small pieces.',
          'In the final stage, at a factory, the pieces are melted and '
          'made into new containers.',
          'The only point at which material leaves the system is the '
          'rejection stage, which is why the state of the bottle when '
          'it goes into the bin decides whether it is recycled at '
          'all.'],
         notes=['The three phases are named, and the three depot '
                'stages are grouped inside one sentence.',
                'The passive is used throughout, as the diagram names '
                'no actors.',
                'The final sentence identifies the one stage where '
                'material is lost, which is the point of the '
                'diagram.'],
         criterion=[('All five stages covered', 'Task Achievement'),
                    ('The three phases used to organise the answer',
                     'Coherence and Cohesion'),
                    ('The passive throughout', 'Grammatical Range and '
                     'Accuracy'),
                    ('The exit point identified', 'Task Response')])],
   gram=dict(
    point='Cause and effect: because, so, which means',
    explain='Use because before the cause, so before the result, and '
            'which means to add the result to a sentence.',
    examples=['The coast is milder because the sea holds heat.',
              'The air cools, so the rain falls on that side.',
              'Height takes six degrees off, which means hills are '
              'colder.',
              'The bottle was dirty, so it was rejected.'],
    items=[('The coast is milder ____ the sea holds heat.',
            'The coast is milder because the sea holds heat.'),
           ('The air cools, ____ the rain falls there.',
            'The air cools, so the rain falls there.'),
           ('Hills are higher, ____ they are colder.',
            'Hills are higher, so they are colder.'),
           ('The bottle was dirty, ____ it was rejected.',
            'The bottle was dirty, so it was rejected.'),
           ('Cool air holds less water, ____ it rains.',
            'Cool air holds less water, so it rains.')],
    task='Join each pair with because or so.'),
   vocab=[('climate', 'the usual weather of a place'),
          ('careless', 'not paying enough attention'),
          ('readings', 'numbers taken from an instrument'),
          ('wetland', 'land that is always wet'),
          ('impossible', 'not able to happen'),
          ('green', 'the colour of grass; or environmentally '
           'friendly'),
          ('wind', 'air moving across the land'),
          ('dirty', 'not clean'),
          ('cross', 'to go from one side to the other'),
          ('waste', 'material that is thrown away'),
          ('famous', 'known by many people'),
          ('rain', 'water falling from clouds'),
          ('meat', 'the flesh of animals eaten as food'),
          ('belong', 'to be the property of, or to be part of'),
          ('bones', 'the hard parts inside a body')],
   expr=[('Nothing is wrong with the instruments.',
          'ruling out an explanation'),
         ('By the time the air comes down...', 'describing a '
          'sequence'),
         ('Distance is the least useful of the three.',
          'ranking factors'),
         ('Before any other factor is counted.', 'isolating one '
          'cause')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Weather that is changing',
   step=3,
   read=[
    dict(heading='Two people remember the winters',
         kind='Short factual article',
         task='Note completion and matching information',
         band='acad', qtype='Questions 42-47',
         paras=[
          'Ask anybody over sixty about the winters of their childhood '
          'and you will be told they were colder, with more snow that '
          'lay longer. Ask the records and the answer is more '
          'complicated. Winters have warmed, by about one and a half '
          'degrees in sixty years, so the memory is pointing at '
          'something real. But the particular winters people describe, '
          'the famous ones with snow for weeks, were unusual at the '
          'time too. That is why they are remembered: a typical winter '
          'is not stored, and a dramatic one is.',
          'Memory and measurement disagree in a second way that matters '
          'more. People remember events and instruments record means, '
          'and a mean can move without any single day feeling '
          'different. A summer one degree warmer than another summer '
          'does not feel warmer on any given afternoon; it contains '
          'more very hot days, which are remembered individually and '
          'not as a pattern. This is one reason a change that is '
          'obvious in the figures can be genuinely invisible to '
          'somebody living through it.',
          'The honest summary is that both sources are right about '
          'different things. The records are better evidence of the '
          'direction and size of a change. People are better evidence '
          'of what it does to a place: when the road floods, which '
          'month the garden can be used. A sensible account treats '
          'disagreement between them as information rather than as '
          'somebody being wrong.'],
         items=[
          (
           'Winters have warmed by about ____________ degrees in sixty '
           'years.', None, '1.5',
           'Paragraph 1, so the memory points at something real.'),
          (
           'The famous winters are remembered because they were '
           '____________ at the time.', None, 'unusual',
           'Paragraph 1: a typical winter is not stored.'),
          ('People remember events and instruments record '
           '____________.', None, 'means',
           'Paragraph 2, which is the second disagreement.'),
          ('A warmer summer contains more very ____________ days.',
           None, 'hot', 'Paragraph 2, remembered individually.'),
          (
           'Which paragraph says each source is better evidence of '
           'something different?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 2,
           'The records for the trend, people for the consequences.',
           {0: 'Paragraph 1 gives the measured record.', 1: 'Paragraph 2 gives what people remember.'}),
          ('Disagreement between the two should be treated as '
           '____________.', None, 'information',
           'Paragraph 3, rather than as somebody being wrong.')])],
   listen=[
    dict(heading='Two neighbours talk about hotter summers',
         part='Part 3',
         task='A discussion between two neighbours · note completion', band='l3',
         qtype='Questions 48-52',
         script=[
          ('Tutor', 'You have both lived on this street for decades. '
           'What has changed?'),
          ('Ivy', 'The garden. I plant three weeks earlier than my '
           'mother did and I lose less to frost.'),
          ('Hal', 'And the road floods. Twice in the last four years, '
           'and not once in the thirty before that.'),
          ('Tutor', 'Is that the rain or the drains?'),
          ('Hal', 'Both, and I would not pretend to separate them. The '
           'drain was built for a street of thirty houses and there are '
           'ninety now.'),
          ('Ivy', 'That is fair. But the rain comes differently too. It '
           'used to rain all day and now it rains very hard for an '
           'hour.'),
          ('Hal', 'Which is exactly what a drain cannot cope with, '
           'whatever its size.'),
          ('Tutor', 'What would you tell somebody reading the records '
           'rather than living here?'),
          ('Ivy', 'That the mean does not tell you when the water comes '
           'into the kitchen.'),
          ('Hal', 'And that we are not evidence of the trend. We are '
           'evidence of what it does.'),
          ('Tutor', 'That is the distinction the essay needs.')],
         items=[
          ('Ivy plants ____________ weeks earlier than her mother '
           'did.', None, 'three', 'And she loses less of it to frost.'),
          ('The road has flooded ____________ times in four years.',
           None, 'twice', 'And not once in the thirty years before.'),
          ('The drain was built for a street of ____________ houses.',
           None, 'thirty', 'There are ninety houses on it now.'),
          ('Ivy says it now rains very hard for an ____________.',
           None, 'hour', 'Rather than all day as it used to.'),
          ('Hal says they are evidence of what the trend '
           '____________, not of the trend.', None, 'does',
           'Which the tutor calls the distinction the essay needs.')])],
   speak=dict(
    part='Part 3', focus='Weather, memory and records',
    sounds=[('This is the last page on sounds in this book. Five things '
             'matter, and you have practised them all: word ends, stress, '
             'joining, breaks, and the voice going down.'),
            ('Before a test, record one answer from each part of the speaking '
             'exam. Listen three times, for one thing each time.'),
            ('Speak a little more slowly than feels normal, and a little '
             'louder. Under pressure most people do the opposite.'),
            ('Do not learn an answer by heart. Learn the shape of an answer '
             'and the useful phrases, and find the words on the day.'),
            ('Keep your first recording from unit 1. Listen to it next to '
             'today\'s recording. That is the only way to hear how far you have '
             'come.')],
    intro='Use both kinds of evidence and say what each is good for. '
          'That is the whole answer.',
    qs=['Do you think the weather has changed where you live?',
        'Should we trust what older people remember?',
        'What should a government do about flooding?'],
    shape=[('answer', 'I think it has, and I would use two different '
            'kinds of evidence to say so.'),
           ('support', 'The records show winters about one and a half '
            'degrees warmer over sixty years.'),
           ('support', 'People remember what that does: the road that '
            'floods, the garden that can be planted earlier.'),
           ('follow-up', 'So I would use the instruments for the trend '
            'and the people for the consequences.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing to the council about a flooded road',
         prompt='The road where you live floods regularly. Write to '
                'the council. In your letter: describe the problem; say '
                'what effect it has; ask what will be done.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Sir or Madam,',
          'River Road floods at its lower end after heavy rain. It has '
          'happened twice in the last four years, most recently on 14 '
          'November, when the water was about thirty centimetres deep '
          'for six hours.',
          'The effect is that the road is closed to cars and the bus is '
          'diverted, which leaves the houses at that end with no '
          'service at all. Two of the residents there cannot walk as '
          'far as the next stop.',
          'Could you tell me whether the drain is to be enlarged, and '
          'if so when? The street had thirty houses when it was built '
          'and now has ninety.',
          'Yours faithfully,',
          'H. Mercer'],
         notes=['The problem is given with dates, depth and duration, '
                'which is what an engineer needs.',
                'The effect names the people affected rather than '
                'calling it inconvenient.',
                'The last paragraph asks a question that can be '
                'answered, and supplies the fact that makes the case.'],
         criterion=[('The problem with dates and measurements',
                     'Task Achievement'),
                    ('A concrete effect on people', 'Task Response'),
                    ('An answerable question', 'Task Achievement'),
                    ('Formal register throughout', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='used to and now for contrast',
    explain='Use used to for the past habit and the present simple for '
            'now, in the same sentence.',
    examples=['It used to rain all day; now it rains hard for an '
              'hour.',
              'The street used to have thirty houses and now has '
              'ninety.',
              'We used to plant in May and now we plant in April.',
              'It never used to flood.'],
    items=[('It (rain) all day; now it rains for an hour.',
            'It used to rain all day; now it rains for an hour.'),
           ('The street (have) thirty houses.',
            'The street used to have thirty houses.'),
           ('We (plant) in May.', 'We used to plant in May.'),
           ('It (never / flood).', 'It never used to flood.'),
           ('They (not / salt) the roads.',
            'They did not use to salt the roads.')],
    task='Write each sentence with used to.'),
   vocab=[('pizza', 'a flat baked dish with a topping'),
          ('wood', 'the material trees are made of, or a small '
           'forest'),
          ('vehicle', 'a machine for carrying people or goods'),
          ('dramatic', 'sudden and noticeable'),
          ('fully', 'completely'),
          ('disaster', 'a very bad event causing great harm'),
          ('cats', 'small animals kept as pets'),
          ('drawing', 'a picture made with a pen or pencil'),
          ('temperature', 'how hot or cold something is'),
          ('raw', 'not cooked'),
          ('management', 'the controlling of something'),
          ('payment', 'money given for something'),
          ('threaten', 'to be likely to harm'),
          ('rear', 'the back part'),
          ('drain', 'a pipe that carries water away')],
   expr=[('I would not pretend to separate them.',
          'admitting two causes are mixed'),
         ('The mean does not tell you when the water comes in.',
          'contrasting a number with an experience'),
         ('We are evidence of what it does.',
          'defining what your evidence is good for'),
         ('Whatever its size.', 'dismissing a proposed fix')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='The blind-reader test: can somebody draw your chart?',
  body='This is the last technique page of Foundation 1, and it checks '
       'everything you have learned about Task 1. Write your '
       'description of a chart. Then give it to somebody who has not '
       'seen the chart and ask them to draw it. Do not help them. What '
       'they draw is what you actually wrote, as opposed to what you '
       'think you wrote, and the difference is usually large. Four '
       'faults show up every time. First, no overall shape: the reader '
       'does not know whether the line rises or falls, because you gave '
       'five numbers and no direction. Second, no scale: you said '
       '"high" and "low" and the reader has nothing to draw. Third, '
       'missing categories: you described three bars and there were '
       'four. Fourth, and the one nobody expects, invented information: '
       'your reader draws something that is not in the chart at all, '
       'because you explained why the line fell and the chart never '
       'said why. Do this test twice and your Task 1 answers change '
       'permanently. You begin writing the shape first and the numbers '
       'second, which is the order an examiner is looking for, and you '
       'stop explaining things the chart does not contain.',
  panel=[('Give them only your words', 'No pointing, no helping.'),
         ('Compare the drawing with the chart',
          'The difference is what your writing missed.'),
         ('Shape first, numbers second',
          'A reader cannot draw "high" and "low".'),
         ('Never explain what the chart does not say',
          'An invented reason shows up as an invented drawing.')],
  qs=['Did your reader get the overall direction right?',
      'Did they have numbers to work with?',
      'Did they draw every category?',
      'Did they draw anything that is not in the chart?',
      'What one sentence would have fixed the biggest error?'],
  task='Write the cycle 2 Task 1 answer, then give it to a partner who '
       'has not seen the graph and ask them to draw it. Compare, and '
       'rewrite the one sentence that caused the largest error.'),

 outlining=dict(
  title='Fill the outline: eight sentences, three main ideas',
  body='Every outlining page in this book has built the same shape one '
       'step at a time: two ideas, then support, then consequence. This '
       'last one adds the third idea, which is the shape Volume 1 '
       'begins with and the shape most Task 2 answers at band 5 and '
       'above actually use. Three ideas, each with a support and a '
       'consequence, is nine lines of plan and about two hundred words '
       'of answer, and the only new difficulty is keeping the three '
       'ideas genuinely separate. Use the two tests you already have. '
       'The overlap test from unit 3: would the support for idea one '
       'sit comfortably under idea two? The unequal test from unit 6: '
       'if idea one were false, would idea three still stand? A good '
       'set of three is usually one practical, one about people, and '
       'one about money or time, because those three rarely collapse '
       'into each other. Write the nine lines before you write a '
       'sentence of the answer, number them, and then write the answer '
       'using the numbers in order. If you reach the end and one idea '
       'has only two sentences while another has five, the short one '
       'was never a main idea, and in Volume 1 you will learn to cut it '
       'before you start rather than after.',
  frame=('Preparing homes for flooding should be required where the '
         'risk is known',
         [('The cost of not preparing falls on everybody',
           ['the rescue, the insurance and the closed road are shared '
            'costs',
            'so the choice is not purely a personal one']),
          ('A requirement without help fines the poorest',
           ['an owner with no money cannot raise a floor',
            'the rule and the grant have to arrive together']),
          ('The risk is now known street by street',
           ['flood maps show which houses have flooded twice',
            'so a requirement can be narrow instead of general'])]),
  qs=['Are your three ideas genuinely different in kind?',
      'Would the support for one sit under another?',
      'If one were false, would the others still stand?',
      'Does each idea have a support and a consequence?',
      'Which idea has the fewest sentences, and why?'],
  task='Plan the cycle 3 question in nine lines under three ideas, '
       'then write it. Count the sentences under each idea and look at '
       'the shortest one.',
  answers=['three ideas, each with support and consequence, is nine '
           'lines',
           'practical, people, and money rarely collapse together',
           'the shortest paragraph is usually the weakest idea',
           'the overlap and unequal tests both still apply',
           'this is the shape Volume 1 begins with']),

 candos=['I can read a forecast and find the warmest and coldest days',
         'I can follow an emergency notice and say what to do first',
         'I can describe a process diagram with three phases',
         'I can test my own chart description by having it drawn',
         'I can plan an answer with three separate main ideas'],

 tip=('Give your chart description to somebody who has not seen the '
      'chart and ask them to draw it. What they draw is what you '
      'actually wrote.'))
