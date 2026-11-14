# -*- coding: utf-8 -*-
"""Foundation Unit 6 · Food, Prices and the Cafeteria.

Grammar: countable and uncountable nouns, some and any, much / many / a lot of.
Question spine: How much ...? How many ...?
"""

UNIT = dict(
    n=6, vol='F1', level='A2',
    title='Food, Prices and the Cafeteria',
    icons=('leaf', 'chart', 'speech'),
    subs=('The menu', 'Paying and change', 'What people eat'),
    grammar='countable and uncountable · some and any · much, many and a lot of',
    field='food, money, meals',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Patel', 'Oakfield', 'Dale',
           'Brazil', 'Hartley',
           'Spain', 'Britain', 'Asia'),
    opener_line='Three sub-topics, three cycles in every skill. Money and food are in every '
                'Listening conversation the test has ever written, and both of them turn on '
                'one grammar point: can you count it?',
    candos=[
        'say how much and how many of something there is',
        'read a menu and work out what a meal costs',
        'understand a short text about why student food is what it is',
        'follow a conversation about paying for something',
        'order food and ask about the price',
        'write an email about a mistake on a bill'],

    core=[
        ('food', 'what people eat'),
        ('sandwich', 'two pieces of bread with food between them'),
        ('water', 'the drink with no colour and no taste'),
        ('coffee', 'a hot brown drink that keeps you awake'),
        ('tea', 'a hot drink made from leaves'),
        ('milk', 'the white drink that comes from a cow'),
        ('bread', 'the food made from flour and baked'),
        ('rice', 'small white grains you cook in water'),
        ('meat', 'food from an animal'),
        ('fish', 'an animal from the water, and the food from it'),
        ('fruit', 'apples, bananas and oranges are fruit'),
        ('vegetable', 'a plant you cook and eat with the main dish'),
        ('egg', 'a hen gives you one of these every day'),
        ('sugar', 'the white thing that makes food sweet'),
        ('salt', 'the white thing that makes food salty'),
        ('salad', 'cold vegetables eaten together'),
        ('dish', 'one kind of cooked food; also the plate it is on'),
        ('fresh', 'new today, not old'),
        ('price', 'how much money a thing costs'),
        ('cost', 'to need an amount of money'),
        ('money', 'what you pay with'),
        ('pay', 'to give money for a thing'),
        ('change', 'the money you get back when you pay too much'),
        ('hungry', 'needing food')],
    campus=[
        ('cafeteria', 'a big self-service place to eat'),
        ('menu', 'the list of food and prices'),
        ('tray', 'the flat thing you carry your plates on'),
        ('queue', 'a line of people waiting'),
        ('till', 'the machine where you pay'),
        ('receipt', 'the small paper that shows what you pay'),
        ('self-service', 'you take the food yourself; nobody brings it'),
        ('vending machine', 'a machine that sells drinks and snacks'),
        ('snack', 'a small amount of food between meals'),
        ('portion', 'the amount of food on one plate'),
        ('cash', 'money as notes and paper, not a card'),
        ('card reader', 'the machine you put your card on to pay')],
    again=['menu', 'queue', 'till', 'receipt', 'price', 'cash', 'portion',
           'vending machine'],
    vocab_talk=[
        'How much fruit do you eat in a normal week?',
        'How many cups of coffee or tea do you drink a day?',
        'Do you usually pay with cash or with a card?',
        'What is a cheap meal in your country?'],

    r1=dict(
        sub='The menu',
        skill=('Plurals you can count', [
            'Countable words take a plural -s: two egg-, three snack-.',
            'Uncountable words never do: rice, bread, water, money.',
            'If the word in front is a number, the word needs its -s.',
            'Words ending in -y take -ies: one portion of berr---.']),
        guided_text='The cafeteria sell- four kind- of sandwich today. There are also two '
                    'soup- and three salad-. Most student- take a tray and queue at the '
                    'till.',
        guided_hint='1  sell-  →  s  (sells)',
        guided=['s', 's', 's', 's', 's'],
        exam_text='The Riverside cafeteria open- at eight and close- at six. In the morning '
                  'it sell- coffee, tea and egg- with bread. At lunch there are three hot '
                  'dish-- and a long table of salad-. A small portion cost- two pounds and '
                  'a large one cost- three. Students with a cash card pay- less, because '
                  'the college give- ten per cent back every month.',
        exam=['s', 's', 's', 's', 'es', 's', 's', 's', 's', 's']),

    r2=dict(
        sub='Paying and change',
        skill=('Add the numbers yourself', [
            'A menu question often asks for a total, not a price.',
            'Write the numbers down the side of the page and add them once.',
            'Watch for with and without. They change the price.',
            'An offer for students is always in the small print. Read it.']),
        docs=[
            ('notice', 'Riverside Cafeteria — Menu', [
                '# Hot food (12.00 – 14.30)',
                'Soup of the day   1.80',
                'Hot dish, small portion   2.00',
                'Hot dish, large portion   3.00',
                '# Cold food (all day)',
                'Sandwich   2.20',
                'Salad box   2.50',
                'Fruit   0.60',
                '# Drinks',
                'Tea or coffee   1.10',
                'Water   free, or 0.90 in a bottle',
                '# Students',
                '* Pay with a college cash card and take 10 per cent off.'], 'notice'),
            ('email', 'group.b@riverside.edu', 'cafeteria@riverside.edu',
             '23/10/2025', 'The till on Monday',
             ['Dear students,', '',
              'The card reader at till 2 is not working on Monday morning.',
              'Please use till 1, or pay with cash.',
              'If you pay too much, come back with your receipt and we give you the change.',
              '', 'The Cafeteria Team'])],
        guided=[
            ('How much is a sandwich?',
             ('1.80', '2.00', '2.20', '2.50'), 2,
             'Sandwich   2.20, in the cold food part.'),
            ('When can you buy hot food?',
             ('all day', '8.00 – 18.00', '12.00 – 14.30', 'only in the morning'), 2,
             'Hot food (12.00 – 14.30).'),
            ('How much is free water?',
             ('0.60', '0.90', '1.10', 'free'), 3,
             'Water   free, or 0.90 in a bottle.'),
            ('Which till is not working on Monday?',
             ('till 1', 'till 2', 'both tills', 'the vending machine'), 1,
             'The card reader at till 2 is not working on Monday morning.')],
        exam=[
            ('A soup and a coffee cost',
             ('2.20', '2.90', '3.10', '3.30'), 1,
             '1.80 and 1.10 make 2.90.'),
            ('A large hot dish and a fruit cost',
             ('3.00', '3.60', '3.80', '4.10'), 1,
             '3.00 and 0.60 make 3.60.'),
            ('What do students with a cash card get?',
             ('free water', '10 per cent off', 'a free fruit', 'a large portion'), 1,
             'Pay with a college cash card and take 10 per cent off.'),
            ('What is the difference between a small and a large hot dish?',
             ('0.50', '1.00', '1.20', '2.00'), 1,
             '2.00 and 3.00, so the difference is 1.00.'),
            ('What do students do on Monday morning?',
             ('wait', 'use till 1 or pay with cash', 'go to the vending machine',
              'eat outside'), 1,
             'Please use till 1, or pay with cash.'),
            ('What do you need if you pay too much?',
             ('your card', 'your receipt', 'your student number', 'a tray'), 1,
             'Come back with your receipt and we give you the change.')]),

    r3=dict(
        sub='What people eat',
        title='Why Student Food Is What It Is',
        words=151,
        paras=[
            'Walk into any student cafeteria and you find the same four things. There is rice or there is bread. There is one hot dish with meat and '
            'one without. There is a table of salad. There is a machine with cold drinks '
            'in it.',
            'The reason is money, and the reason is also time. A cafeteria has forty '
            'minutes to feed six hundred people. Rice and bread are cheap, they keep, and '
            'they fill a person up. A salad table needs no cook at all.',
            'Students say bad things about this food, and they are right about the taste. But '
            'they are often wrong about the price. A hot dish in the cafeteria costs two '
            'pounds. The same food from a shop near the college costs four. The shop also '
            'gives you less food, in a box you throw away. A cafeteria is many '
            'things, and one of them is cheap.'],
        skill=('Facts, then the reason, then the turn', [
            'A three-paragraph text often runs: what happens, why it happens, what people '
            'get wrong about it.',
            'The word but near the end marks the turn.',
            'Numbers in the last paragraph are usually the writer’s evidence.',
            'A question about the writer’s opinion belongs to the last paragraph.']),
        guided=[
            ('How many things are in every student cafeteria?',
             ('two', 'three', 'four', 'six'), 2,
             'You find the same four things.'),
            ('What are the two reasons?',
             ('money and time', 'taste and health', 'money and taste', 'time and space'), 0,
             'The reason is money, and the reason is also time.'),
            ('How long does a cafeteria have?',
             ('fourteen minutes', 'forty minutes', 'four hours', 'six hours'), 1,
             'A cafeteria has forty minutes to feed six hundred people.'),
            ('How many people does it feed?',
             ('sixty', 'six hundred', 'forty', 'four hundred'), 1,
             'Forty minutes to feed six hundred people.')],
        exam=[
            ('Why are rice and bread on every menu?',
             ('students like them', 'they are cheap and they fill a person up',
              'they are fresh', 'they need a cook'), 1,
             'Rice and bread are cheap, they keep, and they fill a person up.'),
            ('What needs no cook?',
             ('the hot dish', 'the salad table', 'the bread', 'the machine'), 1,
             'A salad table needs no cook at all.'),
            ('Students are right about',
             ('the price', 'the taste', 'the portion', 'the time'), 1,
             'They are right about the taste.'),
            ('Students are often wrong about',
             ('the price', 'the taste', 'the cook', 'the salad'), 0,
             'But they are often wrong about the price.'),
            ('A hot dish in a shop near the college costs',
             ('two pounds', 'three pounds', 'four pounds', 'six pounds'), 2,
             'The same food from a shop near the college costs four.'),
            ('What else does the shop give you?',
             ('more food', 'less food, in a box', 'a free drink',
              'a receipt'), 1,
             'The shop also gives you less food, in a box you throw away.'),
            ('What is the writer’s point in the last paragraph?',
             ('The food tastes bad.', 'The cafeteria is cheap for what it is.',
              'Shops are better.', 'Students should cook.'), 1,
             'The numbers at the end are there to show the cafeteria is cheap.')]),

    l1=dict(
        sub='Paying and change',
        caption='A student pays at the till in the cafeteria',
        skill=('Hold the running total', [
            'In a shop conversation the numbers come one at a time and then all together.',
            'Write each one down. The last number is almost always the total.',
            'Listen for all together, that comes to and that is.',
            'The change is the money back, not the money paid. Two different numbers.']),
        warm=[
            ('How much is that, all together?',
             ('At the till.', 'Four pounds twenty.', 'Yes, it is.', 'Two trays.'), 1,
             'How much ...? asks for an amount of money.'),
            ('Can I pay with a card?',
             ('Yes, of course.', 'In the queue.', 'Three salads.', 'At one o’clock.'), 0,
             'Can I ...? takes Yes, of course or No, sorry.'),
            ('Have you got any change?',
             ('Yes, here you are.', 'In the cafeteria.', 'It is hot.', 'At the till.'), 0,
             'Have you got ...? takes Yes or No.')],
        script=[
            ('Woman', 'Next, please. Is that everything?'),
            ('Man', 'Yes. A large hot dish and a bottle of water.'),
            ('Woman', 'Three pounds ninety, please.'),
            ('Man', 'Sorry, how much?'),
            ('Woman', 'Three ninety. The dish is three and the water is ninety.'),
            ('Man', 'Right. Can I pay with my college card?'),
            ('Woman', 'You can, and then it is ten per cent off. Three pounds fifty.'),
            ('Man', 'That is a good reason to carry it. Here you are.'),
            ('Woman', 'Thank you. Do you want a receipt?'),
            ('Man', 'Yes, please. This till takes too much money sometimes.'),
            ('Woman', 'Then always take the receipt. We give the money back, but we need '
                      'the paper.')],
        items=[
            ('What does the man buy?',
             ('a sandwich and tea', 'a large hot dish and water', 'a salad and fruit',
              'a small hot dish and coffee'), 1,
             'A large hot dish and a bottle of water.'),
            ('How much is it before the ten per cent?',
             ('3.00', '3.50', '3.90', '4.00'), 2,
             'Three pounds ninety.'),
            ('How much is the water?',
             ('free', '0.60', '0.90', '1.10'), 2,
             'The water is ninety.'),
            ('How much does he pay with the card?',
             ('3.00', '3.50', '3.90', '4.00'), 1,
             'Ten per cent off. Three pounds fifty.'),
            ('Why does he want a receipt?',
             ('to pay with a card', 'the till sometimes takes too much',
              'the food is cold', 'he wants a card'), 1,
             'This till takes too much money sometimes.'),
            ('What does the woman need to give money back?',
             ('the card', 'the paper', 'the tray', 'the student number'), 1,
             'We give the money back, but we need the paper.')]),

    l2=dict(
        sub='The menu',
        caption='An announcement in the cafeteria',
        poster=['CAFETERIA', 'No hot food Thursday 12.00 – 14.00',
                'Sandwiches and salad as normal'],
        skill=('What is off and what is still on', [
            'An announcement about food usually takes one thing away and leaves the rest.',
            'The things that stay are as important as the thing that goes.',
            'Listen for as normal, still and instead.',
            'An apology at the end is not information. Ignore it.']),
        warm=[
            ('Is there any hot food today?',
             ('No, there is not.', 'At the till.', 'Two pounds.', 'Yes, I am.'), 0,
             'Is there any ...? takes Yes, there is or No, there is not.'),
            ('How many sandwiches are there?',
             ('About forty.', 'At two o’clock.', 'Yes, there are.', 'In the queue.'), 0,
             'How many ...? asks for a number.'),
            ('Sorry for the trouble.',
             ('That is all right.', 'In the cafeteria.', 'Three pounds.', 'At the till.'), 0,
             'An apology takes That is all right.')],
        script=[('Man', 'Good morning from the cafeteria. We have a short announcement '
                        'about Thursday. There is no hot food between twelve and two, '
                        'because the big cooker is not working and a new one is on the way. '
                        'Sandwiches, salad boxes and fruit are all there as normal, and the '
                        'drinks machine is working. There is no queue for the cold food, so '
                        'Thursday is in fact the fastest day of the week. We are sorry for '
                        'the trouble.')],
        items=[
            ('What is not there on Thursday?',
             ('sandwiches', 'hot food between twelve and two', 'drinks', 'fruit'), 1,
             'There is no hot food between twelve and two.'),
            ('Why not?',
             ('no cook', 'the big cooker is not working', 'there is no food',
              'the cafeteria is closed'), 1,
             'Because the big cooker is not working.'),
            ('What is there as normal?',
             ('hot dishes', 'soup', 'sandwiches, salad and fruit', 'nothing'), 2,
             'Sandwiches, salad boxes and fruit are all there as normal.'),
            ('What does the speaker say about the queue?',
             ('it is long', 'there is no queue for the cold food', 'it is at till 2',
              'it starts at twelve'), 1,
             'There is no queue for the cold food.'),
            ('What does the speaker call Thursday?',
             ('the worst day', 'the fastest day of the week', 'a free day',
              'the busiest day'), 1,
             'Thursday is in fact the fastest day of the week.')]),

    l3=dict(
        sub='What people eat',
        caption='A short talk about meals in different countries',
        board=['MEALS', 'one big meal, or three?',
               'the time of the big meal', 'what the body does with it'],
        skill=('Compare without the word compare', [
            'A talk about countries moves from one to another with in, here and there.',
            'Each example usually gets one or two sentences only.',
            'The speaker’s point comes after all the examples, not before.',
            'A question about all countries wants the point, not an example.']),
        warm=[
            ('How many meals do you eat a day?',
             ('Three.', 'At the cafeteria.', 'Yes, I do.', 'With rice.'), 0,
             'How many ...? asks for a number.'),
            ('Is there much rice in your food at home?',
             ('Yes, a lot.', 'At seven.', 'Two plates.', 'In the shop.'), 0,
             'Is there much ...? asks about an amount you cannot count.'),
            ('Do you eat any meat?',
             ('No, I do not.', 'In the evening.', 'Three pounds.', 'At the till.'), 0,
             'Do you ...? takes Yes, I do or No, I do not.')],
        script=[('Woman', 'People eat the same things in very different ways, and the time '
                          'of the big meal is where countries are not the same. In Spain the '
                          'big meal is in the middle of the day and the evening meal is '
                          'small. In Britain it is the other way round. In many countries '
                          'in Asia there is rice at every meal, including breakfast, and a '
                          'breakfast with no rice in it does not feel like food. None of '
                          'this is right or wrong. But it matters for a student in a new '
                          'country, because the body keeps the old clock for about a month '
                          'and the new cafeteria keeps the new one.')],
        items=[
            ('What is the talk about?',
             ('prices', 'the time of the big meal', 'cooking', 'cafeterias'), 1,
             'The time of the big meal is where countries are not the same.'),
            ('In Spain the big meal is',
             ('in the morning', 'in the middle of the day', 'in the evening', 'at night'), 1,
             'In Spain the big meal is in the middle of the day.'),
            ('In Britain it is',
             ('the same as Spain', 'the other way round', 'in the middle of the day', 'with rice'), 1,
             'In Britain it is the other way round.'),
            ('In many countries in Asia there is rice',
             ('only at dinner', 'at every meal', 'never at breakfast', 'only on Sunday'), 1,
             'There is rice at every meal, including breakfast.'),
            ('What does the speaker say about right and wrong?',
             ('one way is right', 'none of it is right or wrong', 'rice is best',
              'Spain is right'), 1,
             'None of this is right or wrong.'),
            ('Why does it matter for a student in a new country?',
             ('food costs money', 'the body keeps the old clock for about a month',
              'the cafeteria is closed', 'rice is cheap'), 1,
             'The body keeps the old clock for about a month.')]),

    sp=[
        dict(sub='The menu',
             focus='the sounds in food words: /iː/, /ɪ/ and /e/',
             skill=('Three short sounds', [
                 'Eat and it are not the same vowel. Eat is long, it is short.',
                 'Bread and bed hold the short /e/. Beard does not.',
                 'A wrong vowel in a food word is the fastest way to be misunderstood.',
                 'Say the pair: eat / it, meat / mitt, bean / bin.']),
             repeat=['I eat lunch at one.', 'There is some bread.',
                     'I do not drink coffee.', 'How much is a cup of tea?',
                     'There are not many vegetables today.',
                     'I buy fruit and bread at the market.',
                     'There is not much rice left in the kitchen.'],
             theme='food and meals',
             qs=['First, what do you usually eat for lunch?',
                 'Tell me about a meal you like. What is in it?',
                 'Some students cook and some students buy food ready. Which do you do, '
                 'and why?',
                 'Finally, is the food at your college good? Say why or why not.'],
             frames=['For lunch I usually eat ... .',
                     'I like ... . There is ... in it and some ... .',
                     'I ... , because ... .',
                     'The food at my college is ... , because ... .'],
             model=[(1, 'For lunch I usually eat a sandwich and some fruit. On a cold day '
                        'I take the soup.'),
                    (2, 'I like the rice dish my mother cooks. There is chicken in it and '
                        'some vegetables, and a lot of salt.'),
                    (3, 'I cook, because it is cheap and because I know what is in the '
                        'food.'),
                    (4, 'The food at my college is not bad, because the portions are big. '
                        'But there is not much fresh fruit.')],
             selfcheck=['I used much with uncountable words and many with countable ones',
                        'I said a long vowel in eat, meat and tea',
                        'I gave a reason after my opinion']),
        dict(sub='Paying and change',
             focus='saying prices out loud',
             skill=('Prices have their own rhythm', [
                 'Three pounds fifty is normally said three fifty.',
                 'The pence part is a number, not a word: ninety, not ninety pence.',
                 'When you are not sure, repeat the number back: three fifty, yes?',
                 'Say the big part strongly and the small part fast.']),
             repeat=['How much is this?', 'I have no change.',
                     'The card reader is broken.',
                     'Can I pay with my card here?',
                     'The queue at the till is long.',
                     'I always keep a receipt for a week.',
                     'How many people are in front of us in the queue?'],
             theme='money and paying',
             qs=['To start, do you usually pay with cash or with a card?',
                 'Tell me about a time you pay too much for something.',
                 'Some people keep every receipt and some keep none. Which are you, and '
                 'why?',
                 'Finally, is a world with no cash a good thing? Say what you think.'],
             frames=['I usually pay with ... , because ... .',
                     'Once I pay ... for ... . It is ... .',
                     'I keep ... , because ... .',
                     'A world with no cash is ... , because ... .'],
             model=[(1, 'I usually pay with a card, because in the cafeteria a card is ten '
                        'per cent cheap for students.'),
                    (2, 'Once I pay four pounds for a bottle of water at a station. There '
                        'is free water in the next room.'),
                    (3, 'I keep every receipt for a month, because the till is wrong about '
                        'twice a year and then the paper is the only thing that helps.'),
                    (4, 'A world with no cash is not a good thing for everybody, because '
                        'some old people have no card and no phone.')],
             selfcheck=['I said the prices clearly, big part first',
                        'I used a money word from this unit in every answer',
                        'I answered all four questions']),
        dict(sub='What people eat',
             focus='the /l/ at the end of a word',
             skill=('Dark and clear l', [
                 'The l in like is at the front of the mouth. The l in meal is at the back.',
                 'Many learners drop the end l: meaw, salad bow. Keep the tongue up.',
                 'Words that matter here: meal, salt, milk, bottle, full, small.',
                 'Say the word, then the word plus a vowel: meal, a meal-at-one.']),
             repeat=['People eat rice here.', 'We have fish on Friday.',
                     'I do not eat meat.',
                     'My mother cooks with a lot of salt.',
                     'There is always fruit on the table.',
                     'In my country people eat late in the evening.',
                     'We never drink cold milk with a hot meal.'],
             theme='food in your country',
             qs=['First, what is the big meal of the day in your country?',
                 'Tell me about one dish people eat there.',
                 'Some people say food at home is always best. Do you agree, and why?',
                 'Finally, what surprises people from other countries about the food where '
                 'you live?'],
             frames=['In my country the big meal is ... .',
                     'One dish is ... . There is ... in it.',
                     'I ... agree, because ... .',
                     'People are surprised that ... .'],
             model=[(1, 'In my country the big meal is in the middle of the day, and the '
                        'evening meal is small and late.'),
                    (2, 'One dish is a soup with fish and rice. There is a lot of '
                        'salt in it, and people eat it with bread.'),
                    (3, 'I agree, but not because of the cooking. Food at home is best '
                        'because of the people at the table.'),
                    (4, 'People are surprised that we eat at ten in the evening. For them '
                        'that is the middle of the night.')],
             selfcheck=['I kept the l sound at the end of meal, salt and milk',
                        'I used some and any correctly',
                        'I gave an example, not only an opinion'])],

    w1=dict(
        sub='Paying and change',
        skill=('How much and how many', [
            'How much goes with things you cannot count: money, rice, water.',
            'How many goes with things you can count: eggs, people, pounds.',
            'Both come at the very front of the question.',
            'Is there any ...? and Are there any ...? follow the same rule.']),
        guided=[
            ('It costs three pounds.', ['how much', 'does', 'it', 'cost', 'here'],
             'How much does it cost here?'),
            ('There are four sandwiches.', ['how many', 'sandwiches', 'are', 'there',
                                            'today'],
             'How many sandwiches are there today?'),
            ('There is some rice.', ['is', 'there', 'any', 'rice', 'left'],
             'Is there any rice left?')],
        exam=[
            ('A coffee is one pound ten.', ['how much', 'is', 'a coffee', 'in', 'here'],
             'How much is a coffee in here?'),
            ('There are six people in the queue.', ['how many', 'people', 'are', 'in',
                                                    'the queue'],
             'How many people are in the queue?'),
            ('I have no change.', ['have', 'you', 'got', 'any', 'change'],
             'Have you got any change?'),
            ('The hot dish costs two pounds.', ['how much', 'does', 'the hot dish', 'cost', 'today'],
             'How much does the hot dish cost today?'),
            ('There is not much milk.', ['is', 'there', 'much', 'milk', 'left'],
             'Is there much milk left?'),
            ('Students take ten per cent off.', ['how much', 'do', 'students', 'take',
                                                 'off'],
             'How much do students take off?'),
            ('She wants a receipt.', ['does', 'she', 'want', 'a receipt', 'too'],
             'Does she want a receipt too?')]),

    w2=dict(
        sub='Paying and change',
        to='cafeteria@riverside.edu',
        date='24/10/2025',
        subject='Till 2 on Monday',
        target=60,
        scenario=['On Monday you pay at till 2 in the cafeteria.',
                  'The till takes four pounds, but your food is three pounds fifty.'],
        bullets=['say when and where you pay',
                 'say what the problem is, with both numbers',
                 'ask what you should do now'],
        skill=('Numbers make a complaint easy to answer', [
            'Give both numbers: what you pay and what it should be.',
            'Give the day, the time and the till. Nobody can check without them.',
            'Say you have the receipt. That is the fact that settles it.',
            'Ask one clear question at the end.']),
        model=['Dear Cafeteria Team,', '',
               'My name is Ana Ruiz and I am in Group B.',
               'On Monday at about one o’clock I pay at till 2. My food is three '
               'pounds fifty, but the till takes four pounds.',
               'I have the receipt with me.',
               'What should I do now?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['Both numbers are in one sentence, so the reader sees the gap at once.',
               'The day, the time and the till number are all there.',
               'The receipt is mentioned, because it is the proof.',
               'The question is short and it asks for an action, not for an apology.'],
        frame=['# Start', 'Dear Cafeteria Team,', '',
               '# Who you are', 'My name is ______________ and I am ______________ .', '',
               '# When and where — day, time, till',
               'On ______________ at about ______________ I pay at ______________ .', '',
               '# The problem — both numbers',
               'My food is ______________ , but the till takes ______________ .', '',
               '# Your question', 'What ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='What people eat',
        prof='Dr Patel',
        target=65,
        question='Should a college cafeteria sell cheap food of any kind, or only food '
                 'that is good for students? Give one reason.',
        posts=[('Mei', 'w', 'Only good food. A college is a place of learning, and the '
                            'cafeteria is part of it. If the college sells sugar all day, '
                            'the lesson is sugar.'),
               ('Yusuf', 'm', 'Cheap food of any kind. Some students have four pounds for '
                              'the whole day. A rule about good food is a rule for people '
                              'with money.')],
        skill=('Hold two true things at once', [
            'Both posts here are right about something. Say which part of each one is '
            'right.',
            'Then say what you think, with because.',
            'Sixty-five words is about six short sentences.',
            'A post that only repeats the question is not an answer.']),
        starters=['I agree with Yusuf, because ...',
                  'Mei is right that ...',
                  'In my cafeteria ...',
                  'The answer is probably ...'],
        model=['I agree with Yusuf. A cafeteria should sell cheap food of any kind, '
               'because a hungry student learns nothing at all.',
               'Mei is right that a college teaches with everything it does, and the '
               'cafeteria is part of that.',
               'In my cafeteria the cheapest meal is also the best one: rice, fish and a '
               'vegetable for two pounds. The answer is probably to make the good food the '
               'cheap food.'],
        model_words=70,
        frame=['# Who you agree with',
               'I agree with ______________ , because ______________ .', '',
               '# What the other person is right about',
               '______________ is right that ______________ .', '',
               '# Your own cafeteria',
               'In my cafeteria ______________ .', '',
               '# Your answer', 'The answer is probably ______________ .']),

    gram=dict(
        title='countable and uncountable · some and any · much, many and a lot of',
        headers=['Form', 'Example'],
        rows=[['countable', 'one egg, two eggs; a sandwich, four sandwiches'],
              ['uncountable', 'rice, bread, water, money, food (never *a rice*)'],
              ['some in a statement', 'There is some rice. There are some eggs.'],
              ['any in a question or negative', 'Is there any rice? There are not any eggs.'],
              ['much + uncountable', 'There is not much milk. How much money?'],
              ['many + countable', 'There are not many eggs. How many people?'],
              ['a lot of + both', 'a lot of rice, a lot of eggs']],
        notes=['The question is not what the thing is but how English treats it. Money is '
               'uncountable in English even though you can count coins.',
               'Much and many are most common in questions and negatives. In a positive '
               'sentence English usually says a lot of: There is a lot of rice.',
               'To count an uncountable thing, put a container in front of it: a bottle of '
               'water, two cups of tea, a piece of bread.'],
        watch='Never say *a bread*, *two rices* or *many money*. If you need the number, '
              'use a container: two pieces of bread, two bowls of rice, a lot of money.',
        ex=[('Write some or any.', [
            'There is __________ bread on the table.',
            'Is there __________ milk in the kitchen?',
            'There are not __________ eggs left.',
            'Can I have __________ water, please?',
            'Have you got __________ change?',
            'We need __________ fruit for the week.'],
            ['some', 'any', 'any', 'some', 'any', 'some']),
            ('Write much or many.', [
                'How __________ money have you got?',
                'How __________ people are in the queue?',
                'There is not __________ rice left.',
                'There are not __________ sandwiches today.',
                'How __________ does a coffee cost?',
                'How __________ cups of tea do you drink?'],
             ['much', 'many', 'much', 'many', 'much', 'many']),
            ('Countable or uncountable? Write C or U.', [
                'water', 'egg', 'money', 'sandwich'],
             ['U', 'C', 'U', 'C'])],
        bas='How much and how many open more Build a Sentence items than any other pair of '
            'words in this book. The order never changes: how much or how many, then the '
            'thing, then is or are or does.'),

    sound=dict(
        title='Long and short vowels, and the l at the end',
        intro='Two sounds decide whether a food word is understood. The first is the length '
              'of the vowel: eat and it are different words. The second is the l at the end '
              'of a word, which many learners drop without hearing it.',
        rows=[('/iː/ long', ['eat', 'meat', 'tea', 'cheese'],
               'Long, with a smile. The mouth is wide.'),
              ('/ɪ/ short', ['it', 'fish', 'milk', 'chicken'],
               'Short and relaxed. The mouth is nearly closed.'),
              ('/e/', ['bread', 'egg', 'fresh', 'vegetable'],
               'Short, with the mouth half open. Not the same as /ɪ/.'),
              ('/ʌ/', ['lunch', 'much', 'hungry', 'money'],
               'Short, from the middle of the mouth. Four very common words.'),
              ('dark l', ['meal', 'salt', 'milk', 'bottle', 'full'],
               'The tongue goes up at the back. Do not let the word end in a vowel.'),
              ('clear l', ['lunch', 'like', 'large', 'lemon'],
               'The l at the start of a word is easy. It is the end that goes missing.')],
        hear=[('Do you hear eat or it?', 'eat'),
              ('Do you hear meat or mitt?', 'meat'),
              ('Do you hear bread or bird?', 'bread'),
              ('Do you hear much or march?', 'much'),
              ('Do you hear meal or me?', 'meal'),
              ('Do you hear full or foo?', 'full')],
        say=['Say the pairs: eat/it, meat/mitt, bean/bin, sheep/ship.',
             'Say with a strong end: meal, salt, milk, bottle, full, small.',
             'Say these prices: 1.10, 2.20, 3.50, 0.90.',
             'Order a meal out loud: a hot dish, a bottle of water, and a fruit.']),

    builder=dict(
        title='A and the, and when a word needs neither',
        rule='Three choices face you in front of almost every noun in English: a, the, or '
             'nothing. Use a for one of many, the first time. Use the when both people '
             'know which one. Use nothing for uncountable things and for plurals in '
             'general.',
        pairs=[['I want a rice.', 'I want some rice.'],
               ['The students like a cheap food.', 'Students like cheap food.'],
               ['I buy bread at shop.', 'I buy bread at the shop.'],
               ['Can I have water, please?', 'Can I have some water, please?'],
               ['She eats a fruit every day.', 'She eats fruit every day.']],
        watch='Talking about things in general needs no article at all: Students like cheap '
              'food. Putting the in front of it narrows it to one particular group, and '
              'that is a different sentence.',
        ex=[('I want a bread.', 'I want some bread.'),
            ('He drinks a coffee every morning.',
             'He drinks coffee every morning.'),
            ('Money is important for student.', 'Money is important for students.'),
            ('Can I have a water?', 'Can I have some water?'),
            ('The cafeteria opens at eight.', 'yes — this one is already correct'),
            ('I eat sandwich at one.', 'I eat a sandwich at one.')]),

    typing=dict(
        title='Numbers and the money keys',
        intro='Prices, dates and times are typed with the number row, and the number row '
              'is the one place where touch typing really breaks down. The fingers reach '
              'up two rows, and most people look.',
        keys='1234567890',
        caption='The number row. Each finger reaches up two rows from the home row and '
                'comes straight back. The full stop in a price is on the bottom row, so '
                'the hand travels a long way for 3.50 — practise that one.',
        drill=['1234 5678 90 1234 5678 90',
               '1.80 2.00 2.20 2.50 0.60 1.10 3.00',
               'A soup is 1.80 and a coffee is 1.10, so that is 2.90.'],
        target=13),

    study=dict(
        title='Guessing a word from the words around it',
        intro='In the real test you will meet words you do not know, and you cannot look '
              'them up. This is not a problem if you can guess well, and guessing is a '
              'skill with steps, not a feeling.',
        steps=['Decide what job the word does. Is it a thing, an action or a description? '
               'The words around it tell you.',
               'Look for a word you know inside it: unhappy, cheaply, cooker.',
               'Decide if the meaning is good or bad from the sentence: the soup was '
               'inedible, so we left it.',
               'Put a simple word in its place and read the sentence again. If it still '
               'makes sense, your guess is good enough.',
               'Only then look it up, and only if the word comes up again.'],
        tip='A good guess does not need the exact meaning. In a reading test you need just '
            'enough meaning to answer the question, and the question almost never turns on '
            'the hard word itself.'),

    rev=dict(
        vocab=[('a big self-service place to eat', 'cafeteria'),
               ('the list of food and prices', 'menu'),
               ('the flat thing you carry plates on', 'tray'),
               ('a line of people waiting', 'queue'),
               ('the machine where you pay', 'till'),
               ('the small paper that shows what you pay', 'receipt'),
               ('a machine that sells drinks and snacks', 'vending machine'),
               ('the amount of food on one plate', 'portion'),
               ('money as notes, not a card', 'cash'),
               ('the money you get back', 'change'),
               ('needing food', 'hungry'),
               ('new today, not old', 'fresh')],
        gram=[('There is __________ bread on the table.', 'some'),
              ('Is there __________ milk in the kitchen?', 'any'),
              ('How __________ money have you got?', 'much'),
              ('How __________ people are in the queue?', 'many'),
              ('There is not __________ rice left.', 'much'),
              ('There are not __________ sandwiches today.', 'many'),
              ('I want __________ water, please.', 'some'),
              ('There is a __________ of fruit on the table.', 'lot')],
        mini=[
            ('A soup and a coffee cost',
             ('2.20', '2.90', '3.10', '3.30'), 1,
             '1.80 and 1.10 make 2.90, from the menu.'),
            ('The man pays with his college card and it costs',
             ('3.00', '3.50', '3.90', '4.00'), 1,
             'Ten per cent off. Three pounds and fifty.'),
            ('In many countries in Asia there is rice',
             ('only at dinner', 'at every meal', 'never at breakfast', 'only on Sunday'), 1,
             'There is rice at every meal, including breakfast.'),
            ('Which sentence is correct?',
             ('I want a rice.', 'I want some rice.', 'I want many rice.',
              'I want a lot rice.'), 1,
             'Rice is uncountable, so it takes some, not a.'),
            ('Which question is correct?',
             ('How many money have you got?', 'How much money have you got?',
              'How much people are there?', 'How many money is there?'), 1,
             'Much goes with money; many goes with things you can count.'),
            ('The cafeteria has forty minutes to feed',
             ('sixty people', 'six hundred people', 'four hundred people',
              'forty people'), 1,
             'Forty minutes to feed six hundred people, in the passage.')]),

    tip='Prices in the Listening section are said once and fast. Write the figures the '
        'moment you hear them, even if you do not yet know which question they belong to. '
        'A number on your paper is worth a mark; a number in your head is gone by the next '
        'sentence.',
)

# ---- the two academic cycles (field: Work, Trade and Money) ---------------
from .fx06 import EXTRA as _X, SP_EXTRA as _SP   # noqa: E402
UNIT.update(_X)
UNIT['sp'] = list(UNIT['sp'])[:3] + list(_SP)
