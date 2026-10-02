# -*- coding: utf-8 -*-
"""Unit 7 · Geology and the Earth."""

UNIT = dict(
    n=7, vol=1, title='Geology and the Earth',
    icons=('rock', 'globe', 'chart'),
    subs=('What a rock records', 'A weekend field trip', 'Volcanoes and plates'),
    grammar='Quantifiers and measurement',
    field='formation, layers, time',
    opener_line='Geology is a subject of quantities: how much, how many, how long, how deep. '
                'That is the grammar of this unit and the question words of its Build a '
                'Sentence page.',

    candos=[
        'complete word endings in a text about how rock is formed',
        'read a kit list and a practical email and find the one detail I need',
        'follow a passage that explains why something happens where it does',
        'understand two people working out what to take somewhere',
        'talk about amounts and measurements without preparing',
        'write an email asking to join something late, and a post about priorities',
    ],

    acad=[
        ('core', 'the central part of something'),
        ('compound', 'a substance made of two or more elements'),
        ('erode', 'to wear away slowly'),
        ('accumulate', 'to collect over time'),
        ('sequence', 'a set of things in a particular order'),
        ('duration', 'the length of time something lasts'),
        ('phase', 'one stage in a longer process'),
        ('rigid', 'stiff and not easily bent'),
        ('adjacent', 'next to something'),
        ('overlap', 'to cover part of something else'),
        ('exceed', 'to be greater than'),
        ('expose', 'to uncover something'),
        ('undergo', 'to experience a process or change'),
        ('collapse', 'to fall down suddenly'),
        ('trigger', 'to make something start'),
        ('volume', 'the amount of space something fills'),
        ('aggregate', 'a total formed from many parts'),
        ('deviate', 'to move away from an expected course'),
        ('persist', 'to continue for a long time'),
        ('precede', 'to come before'),
        ('ongoing', 'still continuing'),
        ('site', 'a place where something is or happens'),
        ('domain', 'an area of knowledge or activity'),
        ('scope', 'how far something reaches'),
    ],
    campus=[
        ('boots', 'strong shoes that cover the ankle'),
        ('waterproof', 'a coat that keeps rain out'),
        ('rucksack', 'a bag carried on the back'),
        ('packed lunch', 'food you bring with you'),
        ('meeting point', 'the place where a group gathers'),
        ('map', 'a drawing of an area'),
        ('sample bag', 'a bag for carrying specimens'),
        ('hammer', 'a tool for breaking rock'),
        ('risk form', 'a form about safety that must be signed'),
        ('headcount', 'a count of how many people are present'),
        ('minibus', 'a small bus for about fifteen people'),
        ('shelter', 'a place that protects you from weather'),
    ],
    vocab_talk=[
        'What is the longest duration you have ever spent travelling in one go?',
        'Name something near you that is slowly eroding. What is wearing it away?',
        'Describe a sequence of events that led to a decision you made.',
        'Which domain of study interests you most, and what is its scope?',
    ],
    again=['structure', 'process', 'estimate', 'vary', 'significant', 'convert', 'stable', 'impact'],

    r1=dict(
        sub='What a rock records',
        skill=('Trust the first half of the word',
               ['The letters before the dashes are the stem. Your brain finishes it faster '
                'than your pen.',
                'Noun endings in this field: -ion, -ure, -ment, -ness.',
                'A gap after a number is almost always a plural: layers, years, metres.',
                'Count the dashes before you commit — -ies and -ed look alike in a hurry.']),
        guided_text='A cliff is a calendar. Each band of rock is one layer of sediment that '
                    'sett--- on the sea floor, and the bands below are always ol--- than the '
                    'bands above. Count the layers and you can count the ye---. Where a layer is '
                    'miss---, something has eroded it aw--.',
        guided_hint='1  sett---  →  led  (settled)',
        guided=['led', 'der', 'ars', 'ing', 'ay'],
        exam_text='Hold a piece of sandstone and you are holding a sum of time. The grains in it '
                  'were once a be--- somewhere, and they settled grain by grain over a period '
                  'that may have exce---- a million years. The layers above press down, water '
                  'carries dissolved minerals between the grains, and gradually the sediment '
                  'bec---- rock. Geologists read these layers like p----, from the bottom '
                  'upwards. A thick layer means a long qu--- period; a thin one means a short '
                  'one, or a slow sup--- of material. A sudden coarse layer in the middle of '
                  'fine ones usually means a st---: a river in flood dumped its load in a single '
                  'week and then went quiet again. Nothing in the rock is wri---- down, and yet '
                  'the sequ---- is unambiguous, because the bottom was always there fi---.',
        exam=['ach', 'eded', 'omes', 'ages', 'iet', 'ply', 'orm', 'tten', 'ence', 'rst'],
    ),

    r2=dict(
        sub='A weekend field trip',
        skill=('Match the item to the rule',
               ['A kit list is a set of short rules. A question names one item; find its line.',
                'Essential and optional are different categories. Note which is which.',
                'Times in an email override times on a list. Read both.',
                'A warning (you will be sent back, you cannot join) is almost always a question.']),
        docs=[
            ('notice', 'Earth Sciences · Hollowdale field trip, 14–15 March', [
                '# Essential — you will be sent back without these',
                '* Walking boots that cover the ankle. Trainers are not accepted.',
                '* A waterproof coat with a hood. Umbrellas are useless on the ridge.',
                '* The signed risk form, handed in by Wednesday 11 March.',
                '# Bring if you can',
                '* A hand lens, a sample bag, a hammer. A few of each are available to borrow.',
                '* A packed lunch for Saturday. Sunday lunch is provided at the field centre.',
                '# Practical',
                '* Minibuses leave from the Science car park at 07.30 sharp. Headcount at 07.20.',
                '* Phone signal in the valley is poor. The field centre number is on your form.',
            ], 'notice'),
            ('email', 'earth2@brookfield.edu', 'd.ferreira@brookfield.edu',
             '09/03/2026', 'Hollowdale — change of departure point', [
                 'Dear all,',
                 '',
                 'One change. The Science car park is being resurfaced, so the minibuses',
                 'will leave from the Arnold Building instead. Same time: 07.30, with the',
                 'headcount at 07.20. The Arnold Building is eight minutes further from',
                 'the halls of residence, so set your alarm accordingly.',
                 '',
                 'Risk forms: eleven of you have still not handed one in. Without it you',
                 'cannot get on the bus, and I cannot make an exception, because the form',
                 'is what the insurance rests on.',
                 '',
                 'Finally, the forecast is poor. Waterproofs are not a suggestion.',
                 '',
                 'Dr Ferreira',
             ]),
        ],
        guided=[
            ('What kind of shoes must students wear?',
             ('Trainers', 'Walking boots that cover the ankle', 'Any strong shoe',
              'Waterproof shoes'), 1,
             'Trainers are specifically ruled out in the same line.'),
            ('Which item must be handed in before the trip?',
             ('The kit list', 'The signed risk form', 'A sample bag', 'A map'), 1,
             'Handed in by Wednesday 11 March, under Essential.'),
            ('Which lunch do students have to bring?',
             ('Saturday’s', 'Sunday’s', 'Both', 'Neither'), 0,
             'A packed lunch for Saturday; Sunday lunch is provided.'),
            ('What time is the headcount?',
             ('07.00', '07.20', '07.30', '08.00'), 1,
             'Headcount at 07.20, ten minutes before departure.'),
        ],
        exam=[
            ('What is the main purpose of the email?',
             ('To cancel the trip', 'To announce a new departure point',
              'To change the date', 'To ask for volunteers'), 1,
             'One change, and it is the place the minibuses leave from.'),
            ('Why has the departure point changed?',
             ('The car park is full', 'The car park is being resurfaced',
              'The Arnold Building is closer', 'There are more students'), 1,
             'Given as the reason in the same sentence as the change.'),
            ('What has not changed?',
             ('The departure time', 'The departure place', 'The lunch arrangements',
              'The weather forecast'), 0,
             'Same time: 07.30, with the headcount at 07.20.'),
            ('Why can Dr Ferreira not make an exception about the risk form?',
             ('The forms are already sent', 'The insurance depends on it',
              'There is no time to sign one', 'The field centre requires it'), 1,
             'The form is what the insurance rests on — the reason is given with because.'),
            ('What does "Waterproofs are not a suggestion" mean?',
             ('Waterproofs are optional', 'Waterproofs are compulsory',
              'Waterproofs will be provided', 'Umbrellas are better'), 1,
             'It restates the Essential rule in stronger terms because the forecast is poor.'),
            ('A student who lives in the halls should',
             ('leave eight minutes earlier than before', 'go to the Science car park',
              'arrive at 07.30', 'wait for a text message'), 0,
             'The Arnold Building is eight minutes further, and the time has not changed.'),
        ],
    ),

    r3=dict(
        sub='Volcanoes and plates',
        title='Why Volcanoes Sit Where They Do',
        words=275,
        paras=[
            'Mark every volcano on a world map and you do not get a scatter. You get lines. '
            'Almost all of them fall along a few narrow bands, and one of those bands runs '
            'nearly all the way round the Pacific Ocean. For most of the nineteenth century '
            'nobody could say why. The pattern was obvious and the explanation was missing, '
            'which is an uncomfortable position for a science.',
            'The answer, agreed only in the 1960s, is that the surface of the Earth is broken '
            'into rigid plates that move a few centimetres a year — about the speed at which a '
            'fingernail grows. Where two plates pull apart, hot material rises to fill the gap '
            'and a line of volcanoes forms along the join. Where one plate is pushed beneath '
            'another, the descending plate carries water down with it, and water lowers the '
            'melting point of the rock above. Melted rock is lighter than solid rock, so it '
            'rises, and a second kind of volcano appears, parallel to the edge but a hundred '
            'kilometres inland.',
            'The two kinds behave very differently, and the difference matters to anyone living '
            'near one. Volcanoes at a spreading join erupt often and quietly; their lava is '
            'runny and flows away. Volcanoes above a descending plate erupt rarely and violently, '
            'because their magma is thick and traps gas until the pressure exceeds the strength '
            'of the rock above it. The dangerous ones, in other words, are the ones that have '
            'been quiet for a long time.',
        ],
        skill=('Hold two categories apart',
               ['When a passage describes two types, make two columns in your head and fill '
                'both.',
                'The question will usually ask which type does what, so the labels matter.',
                'A comparison of behaviour (often/rarely, quietly/violently) is always tested.',
                'The final sentence of a passage like this is usually the one worth remembering.']),
        guided=[
            ('What is the passage mainly about?',
             ('How plates were discovered', 'Why volcanoes form in lines, and in two kinds',
              'How lava flows', 'Why the Pacific is large'), 1,
             'The pattern is set out in paragraph 1, explained in 2 and divided into two kinds '
             'in 3.'),
            ('According to paragraph 1, what did nineteenth-century scientists lack?',
             ('Accurate maps', 'An explanation for an obvious pattern',
              'A way to measure eruptions', 'Agreement about the Pacific'), 1,
             'The pattern was obvious and the explanation was missing.'),
            ('How fast do the plates move?',
             ('A few metres a year', 'A few centimetres a year',
              'A few kilometres a year', 'Too slowly to measure'), 1,
             'About the speed at which a fingernail grows — the comparison is there to fix the '
             'figure.'),
            ('Why does melted rock rise?',
             ('It is hotter', 'It is lighter than solid rock', 'It contains water',
              'It is pushed by the plate'), 1,
             'Melted rock is lighter than solid rock, so it rises.'),
        ],
        exam=[
            ('What does the descending plate carry down with it?',
             ('Lava', 'Gas', 'Water', 'Sediment'), 2,
             'And that water lowers the melting point of the rock above, which is what makes the '
             'second kind of volcano.'),
            ('Where does the second kind of volcano appear?',
             ('At the plate edge', 'About a hundred kilometres inland',
              'In the middle of an ocean', 'Only in the Pacific'), 1,
             'Parallel to the edge but a hundred kilometres inland.'),
            ('All of the following are true of volcanoes at a spreading join EXCEPT:',
             ('They erupt often', 'They erupt quietly', 'Their lava is runny',
              'Their magma traps gas'), 3,
             'Trapping gas belongs to the other kind, which is why those erupt violently.'),
            ('Why are the violent volcanoes dangerous?',
             ('They are taller', 'Their magma is thick and traps gas',
              'They are closer to cities', 'They erupt without warning signs'), 1,
             'The pressure builds until it exceeds the strength of the rock above.'),
            ('What can be inferred from the last sentence?',
             ('A long quiet period is reassuring', 'A long quiet period is a warning sign',
              'Quiet volcanoes are extinct', 'All volcanoes erupt eventually'), 1,
             'The dangerous ones are the ones that have been quiet for a long time — the author '
             'puts it as a paradox deliberately.'),
            ('The word "exceeds" in paragraph 3 is closest in meaning to',
             ('becomes greater than', 'falls below', 'matches exactly', 'destroys'), 0,
             'The pressure passes the strength of the rock, which is when the eruption happens.'),
            ('Which best states the main idea of paragraph 2?',
             ('Plates move very slowly', 'Two plate movements produce two kinds of volcano',
              'Water is found deep underground', 'The 1960s were important for science'), 1,
             'Pulling apart gives one kind; one plate going under another gives the second.'),
        ],
    ),

    l1=dict(
        sub='A weekend field trip',
        caption='Two students work out what to pack',
        skill=('Count what is said',
               ['Conversations about packing are full of numbers and items. Note both.',
                'Listen for what is borrowed, shared or already owned — that is usually the '
                'question.',
                'A correction (actually, no, I thought so too) marks the testable fact.',
                'The last line often contains the plan.']),
        warm=[
            ('Man: Have you got boots?',
             ('They cover the ankle.', 'I’ve got some, but they’re trainers.',
              'In the Science car park.', 'Yes, it’s cold.'), 1,
             'A yes/no question about possession; the answer qualifies it usefully.'),
            ('Woman: How many of us are going?',
             ('Two minibuses.', 'Twenty-six, I think.', 'On Saturday morning.',
              'From the Arnold Building.'), 1,
             'How many wants a number of people.'),
            ('Man: Do we need to bring lunch?',
             ('At the field centre.', 'For Saturday, yes.', 'It’s a packed lunch.',
              'Twelve o’clock.'), 1,
             'The answer both answers the question and narrows it to the right day.'),
        ],
        script=[
            ('Woman', 'Right. Boots, waterproof, lunch. What else?'),
            ('Man', 'Hand lens, sample bag, hammer. Although the list says a few are available '
                    'to borrow.'),
            ('Woman', 'How many is a few?'),
            ('Man', 'He said six hammers for twenty-six people, so realistically, bring one if '
                    'you own one.'),
            ('Woman', 'I don’t. I’ll share with you.'),
            ('Man', 'Fine. Have you handed in the risk form?'),
            ('Woman', 'Last week. You?'),
            ('Man', 'Ah.'),
            ('Woman', 'Daniel. He sent an email about this. Eleven people hadn’t.'),
            ('Man', 'I thought it was the kind of thing you could do on the day.'),
            ('Woman', 'It isn’t. He said he can’t make exceptions because the insurance depends '
                      'on it. The office closes at four.'),
            ('Man', 'Then I’m going now.'),
        ],
        items=[
            ('What are the speakers mainly doing?',
             ('Choosing a field trip', 'Working out what to take',
              'Complaining about the weather', 'Arranging transport'), 1,
             'The woman opens with a list and they work through it.'),
            ('How many hammers are available to borrow?',
             ('Three', 'Six', 'Eleven', 'Twenty-six'), 1,
             'Six hammers for twenty-six people — the two numbers are given together.'),
            ('What will the woman do about a hammer?',
             ('Buy one', 'Borrow one from the department', 'Share with the man',
              'Go without'), 2,
             'I don’t. I’ll share with you.'),
            ('What is the man’s problem?',
             ('He has no boots', 'He has not handed in the risk form',
              'He missed the email', 'He cannot get to the car park'), 1,
             'His Ah and the woman’s reply make it clear, and she reminds him of the email.'),
            ('Why can the form not be handed in on the day?',
             ('The office is closed at weekends', 'The insurance depends on it',
              'There are too many students', 'It must be signed by a doctor'), 1,
             'The woman quotes the reason the lecturer gave.'),
            ('What will the man do next?',
             ('Email Dr Ferreira', 'Go to the office before four', 'Borrow a hammer',
              'Buy walking boots'), 1,
             'She says the office closes at four and he replies that he is going now.'),
        ],
    ),

    l2=dict(
        sub='A weekend field trip',
        caption='A briefing about the field trip',
        poster=['Minibuses: Arnold Building, 07.30',
                'Headcount 07.20 — we do not wait',
                'No risk form, no bus'],
        skill=('Note what is non-negotiable',
               ['A briefing separates advice from rules. Only the rules get tested as rules.',
                'Listen for we cannot, there is no, you will not be able to.',
                'A time repeated twice is a time you will be asked about.',
                'A safety instruction at the end is the speaker’s real priority.']),
        warm=[
            ('Woman: Where do we meet now?',
             ('At twenty past seven.', 'Outside the Arnold Building.',
              'Because of the resurfacing.', 'Two minibuses.'), 1,
             'Where wants a place.'),
            ('Man: What happens if I’m late?',
             ('The bus leaves without you.', 'At half past seven.',
              'It’s eight minutes away.', 'Yes, you can.'), 0,
             'A what-happens-if question wants a consequence.'),
            ('Woman: Is there phone signal there?',
             ('The field centre number is on the form.', 'Not really, no.',
              'In the valley.', 'Yes, bring your phone.'), 1,
             'A yes/no question about signal; only one option answers it directly.'),
        ],
        script=[
            ('Man', 'Hollowdale briefing, three minutes. The minibuses now leave from the Arnold '
                    'Building, not the Science car park, which is being resurfaced. Headcount at '
                    'twenty past seven, buses move at half past, and I want to be very clear '
                    'that we do not wait. Last year we waited eleven minutes for one person and '
                    'missed our slot at the quarry, which meant the whole group lost a morning. '
                    'Risk forms. If yours is not in by Wednesday afternoon you cannot travel. '
                    'That is not me being difficult — the insurance is written against those '
                    'forms, so a student without one is not covered and legally cannot be on the '
                    'bus. Kit: boots over the ankle, not trainers, and a waterproof with a hood. '
                    'The forecast is wet and the ridge has no shelter at all. Last thing, and '
                    'this is the important one: phone signal in the valley is almost nothing. If '
                    'you get separated from the group, do not walk on to find us. Stay where you '
                    'are and we will come back along the path. We always find people who stay '
                    'still.'),
        ],
        items=[
            ('What is the main purpose of the briefing?',
             ('To describe the geology of Hollowdale', 'To give the arrangements and the rules',
              'To cancel part of the trip', 'To collect risk forms'), 1,
             'Departure, forms, kit and safety — the briefing is the practical information.'),
            ('Why does the speaker mention last year?',
             ('To praise the group', 'To explain why the buses will not wait',
              'To describe the quarry', 'To compare the weather'), 1,
             'Eleven minutes of waiting cost the whole group a morning.'),
            ('Why is the risk form compulsory?',
             ('The field centre asks for it', 'The insurance is written against it',
              'It records allergies', 'It confirms numbers'), 1,
             'A student without one is not covered and legally cannot be on the bus.'),
            ('What does the speaker say about the ridge?',
             ('It is slippery', 'It has no shelter', 'It is closed in bad weather',
              'It has good phone signal'), 1,
             'Which is why a waterproof with a hood is compulsory rather than advisable.'),
            ('What should a separated student do?',
             ('Walk on to find the group', 'Phone the field centre', 'Stay where they are',
              'Return to the minibus'), 2,
             'Do not walk on — stay where you are, and we always find people who stay still.'),
        ],
    ),

    l3=dict(
        sub='What a rock records',
        caption='A talk on dating a layer',
        board=['Relative: which is older?', 'Absolute: how many years?',
               'Radiometric clocks — start at zero', 'Index fossils — short-lived, widespread'],
        skill=('Separate two questions the talk answers',
               ['A talk that contrasts two methods will define both and then say when each '
                'is used.',
                'Listen for the limitation of each. That is almost always a question.',
                'An example given twice is the one the speaker thinks is important.',
                'The conclusion usually says how the two methods work together.']),
        warm=[
            ('Man: What is an index fossil?',
             ('About five hundred million years.', 'A species that lived briefly and spread '
              'widely.', 'In the lower layers.', 'Yes, we saw one.'), 1,
             'A what-is question wants a definition.'),
            ('Woman: Can you date every rock that way?',
             ('No — only ones with the right minerals.', 'It takes a long time.',
              'They are on the board.', 'Yes, every rock.'), 0,
             'A can-you question about scope, and the answer gives the limit.'),
            ('Man: Which method is older?',
             ('Relative dating, by a long way.', 'About two hundred years.',
              'Both are useful.', 'Yes, it is.'), 0,
             'Which wants one of the two methods named.'),
        ],
        script=[
            ('Professor', 'There are two completely different questions you can ask a rock, and '
                          'students mix them up constantly. The first is relative: is this layer '
                          'older or younger than that one? You can answer that with your eyes, '
                          'because the bottom was there first, and geologists were answering it a '
                          'century before anyone could answer the second question. The second is '
                          'absolute: how many years? For that you need a clock that started at '
                          'zero when the rock formed, and radioactive minerals give you exactly '
                          'that. But — and this is the limitation people forget — only some '
                          'rocks contain the right minerals. Sandstone, the rock you will spend '
                          'all Saturday looking at, generally does not. So how do we date '
                          'sandstone? With fossils, and with a particular kind: a species that '
                          'existed for a geologically short time but spread over a very wide '
                          'area. If you find that species, you know the age of the layer '
                          'wherever in the world you are standing. We call them index fossils, '
                          'and the best of them are small, common and frankly rather dull to '
                          'look at. Notice how the two methods work together. The radiometric '
                          'clocks date the fossil-bearing sequences once, somewhere the minerals '
                          'do occur, and then the fossils carry that date everywhere else.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Radiometric dating is the most accurate method',
              'Two different dating questions need two different methods that support each other',
              'Sandstone is difficult to study', 'Fossils are more useful than minerals'), 1,
             'The talk defines both questions, gives each method its limitation, and ends on how '
             'they work together.'),
            ('What is relative dating?',
             ('Measuring how many years old a rock is', 'Deciding which layer is older',
              'Identifying a fossil species', 'Counting radioactive minerals'), 1,
             'Is this layer older or younger than that one — the speaker defines it at once.'),
            ('Why can radiometric dating not be used on all rocks?',
             ('It is too expensive', 'Only some rocks contain the right minerals',
              'It damages the sample', 'It only works on young rocks'), 1,
             'And this is the limitation people forget.'),
            ('What makes a good index fossil?',
             ('It is large and rare', 'It lived briefly and spread widely',
              'It is found only in sandstone', 'It is beautiful'), 1,
             'A species that existed for a short time but spread over a wide area.'),
            ('Why does the speaker mention sandstone?',
             ('It is the rock they will see on Saturday and it cannot be dated radiometrically',
              'It is the oldest rock', 'It contains the most fossils',
              'It is easy to break'), 0,
             'Both reasons are given in the same breath, which is why it leads into the fossil '
             'method.'),
            ('How do the two methods work together?',
             ('Fossils check the radiometric clocks', 'Radiometric dates are carried everywhere '
              'by fossils', 'Both are used on the same rock', 'Neither is used alone'), 1,
             'The clocks date a sequence once, and the fossils carry that date everywhere else.'),
        ],
    ),

    sp=[
        dict(sub='What a rock records', focus='numbers, fractions and units',
             skill=('Say the unit, every time',
                    ['A number without a unit is not an answer. Say centimetres, million years, '
                     'per cent.',
                     'Fractions: two thirds, three quarters, a half — practise them as whole '
                     'phrases.',
                     'Large numbers in groups: a hundred and sixty, not one six zero.',
                     'If you misread a number, correct it in one word and keep going.']),
             repeat=['The layer is two metres thick.',
                     'Plates move a few centimetres a year.',
                     'About two thirds of the energy is lost as heat.',
                     'The sequence took more than a million years to form.',
                     'The minibuses leave at half past seven from the Arnold Building.',
                     'Six hammers were available for a group of twenty-six students.',
                     'A layer that took a million years to settle can be read in about a minute by somebody who knows what the grains mean.'],
             theme='the landscape where you grew up',
             qs=['First, what is the landscape like where you grew up?',
                 'Landscapes affect people differently. How did yours affect you, and why do you '
                 'think that is?',
                 'Some people say that everyone should spend time outdoors as part of their '
                 'education. Do you agree? Why or why not?',
                 'Finally, should countries protect natural landscapes even when there is '
                 'valuable rock or oil underneath? Why or why not?'],
             model=[(1, 'Very flat, actually. Fields in every direction and one hill that '
                        'everybody called a mountain, which it was not.'),
                    (3, 'I agree. One reason is that you cannot understand a map until you have '
                        'walked across something it describes.')],
             selfcheck=['I said the unit after every number',
                        'I said fractions as whole phrases',
                        'I kept going after any mistake']),
        dict(sub='A weekend field trip', focus='talking about quantity',
             skill=('Choose the right quantifier out loud',
                    ['Countable: many, a few, several, fewer. Uncountable: much, a little, less.',
                     'Enough goes after an adjective (warm enough) and before a noun (enough '
                     'time).',
                     'Too many and too much both mean a problem. Say which.',
                     'One quantity, one example. That is a complete answer here.']),
             repeat=['There is not much time.',
                     'Only a few hammers are available.',
                     'We have enough waterproofs for everybody.',
                     'Too many people arrived after the headcount had finished.',
                     'There is very little phone signal anywhere in the valley.',
                     'Several students had not handed in a form, and none of them could travel.',
                     'There were six hammers for twenty-six people, which is not nearly enough unless most of us share.'],
             theme='trips and how they are organised',
             qs=['To start, have you ever been on a school or university trip?',
                 'Organised trips suit some people and not others. How do you find them, and why?',
                 'Some people argue that field trips are too expensive to justify. Do you agree? '
                 'Why or why not?',
                 'Last question. Should a university pay the full cost of a compulsory trip? Why '
                 'or why not?'],
             model=[(2, 'I like them more than I expect to. The organisation annoys me and then '
                        'the day itself is always the part I remember.'),
                    (4, 'Yes, if it is compulsory. If a student cannot pay, the trip stops being '
                        'compulsory for them and starts being a filter.')],
             selfcheck=['I used many and much correctly',
                        'I gave a quantity with an example',
                        'I finished every sentence']),
        dict(sub='Volcanoes and plates', focus='academic register',
             skill=('State a mechanism, then its consequence',
                    ['Use the unit’s words: trigger, exceed, persist, rigid, undergo.',
                     'Say what causes what: water lowers the melting point, so rock melts, so it '
                     'rises.',
                     'Three short clauses in a chain beat one long sentence.',
                     'Mark yourself against the three statements below.']),
             repeat=['Plates are rigid and move slowly.',
                     'Water lowers the melting point of the rock.',
                     'Pressure builds until it exceeds the strength above.',
                     'Volcanoes at a spreading join erupt often and quietly.',
                     'A descending plate triggers melting a hundred kilometres inland.',
                     'Magma that is thick traps gas, and trapped gas is what makes an eruption violent.',
                     'The volcanoes that have persisted in silence for the longest period are usually the ones that present the greatest danger.'],
             theme='living with natural risk',
             qs=['First, does your country have earthquakes, floods or storms?',
                 'People respond to natural risk in different ways. How do people where you live '
                 'respond, and why?',
                 'Some people argue that nobody should be allowed to build near an active '
                 'volcano. Do you agree? Why or why not?',
                 'Finally, who should pay to rebuild after a natural disaster — the government, '
                 'insurers, or the people who chose to live there? Why?'],
             model=[(3, 'I disagree, mostly. The soil near volcanoes is the best farmland there '
                        'is, which is exactly why people are there, and a rule that ignores that '
                        'will simply be broken.'),
                    (4, 'The government, with insurance behind it. One reason is that nobody '
                        'chooses where they are born.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I stated a mechanism and then its consequence',
                        'I gave an example in my last answer']),
    ],

    w1=dict(
        sub='What a rock records',
        skill=('Find the measurement word',
               ['How much, how many, how long, how deep, how old — these open most items here.',
                'How much goes with uncountables, how many with countables.',
                'In an embedded question, how many keeps statement order: do you know how many '
                'there are.',
                'Use every tile exactly once.']),
        guided=[
            ('The layer is two metres thick.',
             ['thick', 'how', 'is', 'the', 'layer'],
             'How thick is the layer?'),
            ('Six hammers are available.',
             ['hammers', 'how', 'many', 'are', 'available'],
             'How many hammers are available?'),
            ('The sequence took a million years.',
             ['know', 'you', 'do', 'how', 'long', 'it', 'took'],
             'Do you know how long it took?'),
        ],
        exam=[
            ('Plates move a few centimetres a year.',
             ['fast', 'how', 'do', 'the', 'plates', 'move'],
             'How fast do the plates move?'),
            ('Twenty-six students are going on the trip.',
             ['tell', 'can', 'you', 'me', 'how', 'many', 'students', 'are', 'going'],
             'Can you tell me how many students are going?'),
            ('The minibuses leave at half past seven.',
             ['time', 'what', 'do', 'the', 'minibuses', 'leave'],
             'What time do the minibuses leave?'),
            ('There is very little phone signal in the valley.',
             ['much', 'how', 'signal', 'is', 'there'],
             'How much signal is there?'),
            ('The fossil that spread widely is the useful one.',
             ['the', 'fossil', 'that', 'spread', 'widely', 'is', 'the', 'useful', 'one'],
             'The fossil that spread widely is the useful one.'),
            ('Students without a form cannot travel.',
             ['know', 'do', 'you', 'whether', 'I', 'can', 'travel'],
             'Do you know whether I can travel?'),
            ('The rock is about five hundred million years old.',
             ['old', 'how', 'is', 'the', 'rock'],
             'How old is the rock?'),
        ],
    ),
    w2=dict(
        sub='A weekend field trip',
        to='d.ferreira@brookfield.edu',
        date='10/03/2026',
        subject='Hollowdale — late risk form and a question about boots',
        scenario=[
            'You have not handed in your risk form for the Hollowdale trip and the deadline is '
            'tomorrow afternoon. You also own walking boots that come to just below the ankle, '
            'and the kit list says boots must cover the ankle.',
            'Write an email to Dr Ferreira.',
        ],
        bullets=['Say when you will hand in the form.',
                 'Ask about the boots, giving enough detail to be answered.',
                 'Say what you will do if the answer is no.'],
        skill=('Do not ask a question that cannot be answered',
               ['Are my boots all right? cannot be answered. Describe them and the answer '
                'becomes possible.',
                'Say what you will do in either case. It saves a second email.',
                'Keep the apology to one clause. Then move on to the practical part.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Dr Ferreira,',
            'Apologies — I am one of the eleven. I will bring my risk form to the office '
            'tomorrow morning, well before four, and I understand that I cannot travel without '
            'it.',
            'I also have a question about boots. Mine are walking boots with a stiff sole, but '
            'they stop about two centimetres below the ankle bone rather than above it. Would '
            'those be acceptable for the ridge, or do you want boots that cover the ankle '
            'completely?',
            'If they are not acceptable, I can borrow a pair from my housemate, who takes the '
            'same size. I would rather know tomorrow than find out at the headcount, which is '
            'why I am asking now.',
            'Thank you,',
            'Hana Takeda',
        ],
        notes=['The apology is one clause and the commitment is specific: tomorrow morning, '
               'before four.',
               'The boots are described in enough detail (stiff sole, two centimetres below the '
               'ankle) for a yes or a no.',
               'The writer gives the fallback, so the reply can be one word.',
               'I would rather know tomorrow than at the headcount shows the reader why the '
               'question is worth answering now.'],
    ),
    w3=dict(
        sub='Volcanoes and plates',
        prof='Dr Ferreira',
        question='About eight hundred million people live within a hundred kilometres of an '
                 'active volcano, often because the soil there is exceptionally good. Should '
                 'governments discourage people from living in these places, or help them live '
                 'there more safely? Why?',
        posts=[('Nadia', 'h',
                'Help them live there safely. People are not there by accident — volcanic soil '
                'is the most productive farmland on Earth, and telling a farming family to move '
                'somewhere with worse soil is telling them to be poorer. Spend the money on '
                'monitoring and on evacuation routes.'),
               ('Felix', 'm',
                'Monitoring is not enough when the dangerous volcanoes are precisely the ones '
                'that have been quiet for centuries. People build, generations pass, nobody '
                'remembers the last eruption, and then eighty thousand people have to move in '
                'two days. At some point you have to say no.')],
        skill=('Use the science in the question',
               ['The passage gave you a fact that bears on this: the quiet ones are the '
                'dangerous ones.',
                'A post that uses that fact beats one that only has an opinion.',
                'Name a classmate and take their best point seriously.',
                'At least 100 words in ten minutes.']),
        starters=['Felix’s point about forgetting is the one that worries me, because…',
                  'Nadia is right about the soil, but that is an argument for…',
                  'The passage gives a reason neither post uses:…',
                  'I would therefore…'],
        model=[
            'Felix has found the real difficulty, and it is not geological. It is that memory is '
            'shorter than the gap between eruptions.',
            'Nadia is right about the soil, and I do not think anyone will move away from the '
            'best farmland in the world because of a warning. But the passage gives a reason '
            'that neither post uses. The volcanoes that erupt often are the quiet, runny ones; '
            'the violent ones are quiet for centuries first. So the places that feel safest are '
            'exactly the ones where nobody alive has seen an eruption, and that is where '
            'discouragement would be hardest to sell and most needed.',
            'What I would fund, then, is neither moving people nor monitoring alone. It is '
            'keeping the memory. Mark the old flow lines in the streets. Teach the last eruption '
            'in every local school. A town that remembers evacuates in hours.',
        ],
        model_words=167,
    ),

    gram=dict(
        title='Quantifiers and measurement',
        headers=['Form', 'Example'],
        rows=[
            ['many / few / fewer (countable)', 'few hammers, fewer students'],
            ['much / little / less (uncountable)', 'little signal, less time'],
            ['a few = some; few = not many', 'A few came. Few came.'],
            ['enough + noun / adjective + enough', 'enough time; warm enough'],
            ['too many / too much', 'too many people; too much rain'],
            ['How much / How many questions', 'How much signal is there?'],
            ['Measurement as an adjective', 'a two-metre layer; two metres thick'],
        ],
        notes=[
            'Countable nouns have a plural: hammers, students, layers. Uncountable nouns do '
            'not: signal, time, rain, information.',
            'A few is positive (some, enough to matter). Few is negative (hardly any). The same '
            'applies to a little and little.',
            'When a measurement comes before a noun it loses its plural: a two-metre layer, a '
            'ten-minute walk, a five-year study.',
        ],
        watch='Never write *less students* or *many informations*. It is fewer students, and '
              'information has no plural at all.',
        ex=[
            ('Complete with much, many, few, little, fewer or less.',
             ['There were very __________ hammers for the group.',
              'There is not __________ phone signal in the valley.',
              '__________ students handed in the form late this year than last.',
              'How __________ people are going on the trip?',
              'We have __________ time than we thought.',
              'Only a __________ of them had the right boots.'],
             ['few', 'much', 'Fewer', 'many', 'less', 'few']),
            ('Rewrite using a measurement before the noun.',
             ['a layer of two metres → __________',
              'a walk of ten minutes → __________',
              'a study lasting five years → __________',
              'a delay of eleven minutes → __________'],
             ['a two-metre layer', 'a ten-minute walk', 'a five-year study',
              'an eleven-minute delay']),
            ('Correct the mistake in each sentence.',
             ['There were less students than last year.',
              'We did not have many time.',
              'It is a two-metres layer.'],
             ['fewer students', 'much time', 'a two-metre layer']),
        ],
        bas='Build a Sentence uses measurement questions constantly: How much track was laid? '
            'How many works are chosen? Choose much or many from the noun that follows, not '
            'from the size of the answer.',
    ),

    rev=dict(
        vocab=[
            ('to wear away slowly', 'erode'),
            ('to collect over time', 'accumulate'),
            ('a set of things in a particular order', 'sequence'),
            ('the length of time something lasts', 'duration'),
            ('to be greater than', 'exceed'),
            ('to make something start', 'trigger'),
            ('to continue for a long time', 'persist'),
            ('to come before', 'precede'),
            ('still continuing', 'ongoing'),
            ('next to something', 'adjacent'),
            ('a form about safety that must be signed', 'risk form'),
            ('the place where a group gathers', 'meeting point'),
        ],
        gram=[
            ('There were very __________ hammers for the group.', 'few'),
            ('There is not __________ phone signal in the valley.', 'much'),
            ('__________ students handed in the form than last year.', 'Fewer'),
            ('How __________ people are travelling?', 'many'),
            ('We have __________ time than we thought.', 'less'),
            ('It is a __________ (two metres) layer.', 'two-metre'),
            ('Only a __________ of them had the right boots.', 'few'),
            ('There was __________ (too much / too many) rain on the ridge.', 'too much'),
        ],
        mini=[
            ('According to the passage on page 114, the dangerous volcanoes are the ones that',
             ('erupt most often', 'have been quiet for a long time',
              'sit on a spreading join', 'have runny lava'), 1,
             'Thick magma traps gas over a long quiet period, and that is what produces a violent '
             'eruption.'),
            ('In the talk, sandstone usually cannot be dated radiometrically because',
             ('it is too young', 'it lacks the right minerals', 'it contains too many fossils',
              'it erodes too quickly'), 1,
             'Only some rocks contain the right minerals, and sandstone generally does not.'),
            ('Which sentence is correct?',
             ('There were less students this year.', 'We did not have many time.',
              'It is a two-metre layer.', 'How much people are coming?'), 2,
             'The measurement loses its plural before a noun; the others confuse countable and '
             'uncountable.'),
            ('A student who has not handed in a risk form',
             ('pays a fee', 'cannot travel', 'travels in a separate bus',
              'signs one on the day'), 1,
             'The insurance is written against the forms, so there is no exception.'),
            ('In Complete the Words, a gap after a number is most likely',
             ('a plural ending', 'a past tense ending', 'an adverb ending',
              'a comparative ending'), 0,
             'Numbers are followed by plural nouns: layers, years, metres.'),
            ('A question beginning "All of the following are true EXCEPT" wants',
             ('the one statement the text supports', 'the one statement the text does not support',
              'the main idea', 'a vocabulary meaning'), 1,
             'Tick off the three the text does support, and the remaining one is the answer.'),
        ],
    ),
    tip='Skim the whole Reading passage once before you look at the questions. At this level it '
        'is only about 250 words, so a first pass costs you under a minute and it tells you '
        'where everything is — which is most of what the detail questions are asking.',
)
