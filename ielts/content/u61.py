# -*- coding: utf-8 -*-
"""Foundation 1, Unit 1 - Food and Eating.

The first unit of the first book. It starts in a cafe, because that is
where a student at this level first has to read English and get it right,
and it ends on a farm, because that is where the unit's longer reading
has to go to be worth reading at all.

The fourteen words a cycle rule does not apply here: the ledger says this
unit's share of the gap into Volume 1 is forty words, eight a cycle, and
every one of them is used in the text of the cycle that teaches it.
"""

_SPEND = dict(kind='bar',
              title='What four friends spend on food each week',
              sub='pounds a week, one term',
              cats=['Ana', 'Bilal', 'Chen', 'Dalia'],
              series=[('Pounds a week', [31.0, 44.0, 25.0, 38.0])],
              ylab='pounds')

_BREAD = dict(kind='process',
              title='How bread reaches the shop',
              sub='four stages, from the field to the shelf',
              stages=[
               ('Growing', 'wheat grows in a field for about nine months'),
               ('Harvest', 'the grain is cut and dried in late summer'),
               ('Milling', 'the grain is ground into flour at a mill'),
               ('Baking', 'the flour is baked and sent to shops the same '
                'day')])

UNIT = dict(
 n=1, vol=7, level='A1-A2', band='below 4.0',
 theme='Food and Eating',
 opener=(
   'This is the first unit of the first book, and it begins with the '
   'kind of English you have to read correctly on a normal day: a menu, '
   'a price list and a recipe. Then it goes to a farm, because the '
   'reading in the test is not about menus. You will listen four times, '
   'speak about your own meals, and write a note, a chart description, '
   'a short opinion and an email. The technique page is the three moves '
   'you make before every recording, and you will use it in every unit '
   'after this one.'),

 cycles=[
  dict(
   sub='Ordering in a cafe',
   step=1,
   read=[
    dict(heading='The Corner Cafe: menu and opening times',
         kind='Menu and notice',
         task='True/False/Not Given, sentence completion and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A menu is read for the number beside the word',
                ['Read the question first. It tells you whether you are '
                 'looking for a price, a time or a food.',
                 'The answer is almost always a number or two words. '
                 'Long answers are usually wrong at this stage.']),
         paras=[
          'The Corner Cafe is open from seven in the morning until four '
          'in the afternoon, Monday to Saturday. On Sunday we open at '
          'nine.',
          'Breakfast is served until eleven. Eggs on toast cost three '
          'pounds forty. A bowl of soup with bread costs four pounds, '
          'and the soup changes every day.',
          'Hot drinks are one pound fifty. A glass of milk is ninety '
          'pence. Children under five eat free with an adult, and we '
          'have several high chairs.'],
         items=[
          ('The cafe opens at the same time every day.',
           ['True', 'False', 'Not Given'], 1,
           'Seven on Monday to Saturday, and nine on Sunday.',
           {0: 'The text gives two different opening times, not one.', 2: 'Both opening times are stated, so this is not left '
               'out.'}),
          ('Breakfast is served until ____________.', None, 'eleven',
           'Paragraph 2, which is the first line about breakfast.'),
          ('How much is a bowl of soup with bread?', None, 'four pounds',
           'Paragraph 2. The soup changes daily, but the price does '
           'not.'),
          ('A glass of milk costs less than a hot drink.',
           ['True', 'False', 'Not Given'], 0,
           'Hot drinks are one pound fifty and a glass of milk is '
           'ninety pence.',
           {1: 'False would need milk to cost more, and both prices '
               'are given.', 2: 'Not Given is wrong because the text gives both prices.'}),
          ('The cafe is open on Sunday afternoons.',
           ['True', 'False', 'Not Given'], 2,
           'The text gives the Sunday opening time and not the Sunday '
           'closing time.',
           {0: 'True would need a Sunday closing time, which is never '
               'given.', 1: 'No closing time for Sunday appears, so False cannot be '
               'shown either.'})]),
    ],
   listen=[
    dict(heading='Ordering lunch for two', part='Part 1',
         task='A conversation in a cafe · note completion', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Waiter', 'Good afternoon. Are you ready to order?'),
          ('Customer', 'Yes, please. Two soups, and one of them without '
           'bread.'),
          ('Waiter', 'Two soups, one without bread. Today it is tomato.'),
          ('Customer', 'That is fine. And eggs on toast for my friend.'),
          ('Waiter', 'Eggs on toast. Anything to drink?'),
          ('Customer', 'A glass of milk and a tea, please.'),
          ('Waiter', 'So that is two soups, eggs on toast, one milk and '
           'one tea.'),
          ('Customer', 'Yes. How long will it be?'),
          ('Waiter', 'About ten minutes. We are a little busy.'),
          ('Customer', 'That is all right. Can we sit by the window?'),
          ('Waiter', 'Of course. Table four. Can I take a name?'),
          ('Customer', 'Hassan. H-A-S-S-A-N.'),
          ('Waiter', 'Thank you, Hassan. Table four, by the window.'),
          ('Customer', 'And can we pay at the end?'),
          ('Waiter', 'Yes. Pay at the desk when you leave.')],
         items=[
          ('The customer orders ____________ soups.', None, 'two',
           'The first order line, and one is without bread.'),
          ("Today's soup is ____________.", None, 'tomato',
           'The waiter says it after repeating the order.'),
          ('They order one glass of milk and one ____________.', None,
           'tea', 'The drinks line of the conversation.'),
          ('The food will take about ____________ minutes.', None, 'ten',
           'The waiter explains the cafe is a little busy.'),
          ('The name for the table is ____________.', None, 'Hassan',
           'He spells it, which is why it is the answer.')])],
   speak=dict(
    part='Part 1', focus='Meals you eat in a normal week',
    intro='Answer with two sentences. One sentence is too short, and '
          'five is too many in Part 1.',
    qs=['What do you usually eat in the morning?',
        'Do you eat lunch at home or outside?',
        'Who cooks in your family?',
        'What is your favourite meal of the day?'],
    shape=[('answer', 'I usually have bread and tea in the morning.'),
           ('support', 'I leave the house at seven, so I eat quickly.'),
           ('follow-up', 'At the weekend I have more time and I cook '
            'eggs.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Where shall we meet for lunch?',
         prompt='A friend is coming to your town on Saturday. Write a '
                'short note to your friend. In your note: say where to '
                'meet; say what time; say what the place is like.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Hi Nadia,',
          'Let us meet at the Corner Cafe on Saturday. It is on Green '
          'Street, next to the library, and the bus from the station '
          'stops directly outside.',
          'Can we meet at one o clock? The cafe is busy from twelve '
          'until one, so we will get a table by the window if we come a '
          'little later.',
          'The food is simple and cheap. The soup is good and it changes '
          'every day, and a bowl with bread costs four pounds.',
          'See you on Saturday,',
          'Mina'],
         notes=['The note answers all three bullets and nothing else. At '
                'this level, an answer that adds a fourth idea usually '
                'loses control of the first three.',
                'The time has a reason beside it. "At one" is an answer; '
                '"at one, because it is quiet then" is a better one.',
                'It ends the way a note ends, with a short line and a '
                'name.'],
         criterion=[('All three bullets answered', 'Task Achievement'),
                    ('A reason beside the time', 'Task Response'),
                    ('Short sentences that are complete',
                     'Grammatical Range and Accuracy'),
                    ('An opening and a closing line', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present simple for times, prices and habits',
    explain='Use the present simple for things that are always true and '
            'for things that happen again and again. Add -s after he, '
            'she and it.',
    examples=['The cafe opens at seven.',
              'Breakfast is served until eleven.',
              'I usually eat at home.',
              'The soup changes every day.'],
    items=[('The cafe (open) at seven.', 'The cafe opens at seven.'),
           ('A glass of milk (cost) ninety pence.',
            'A glass of milk costs ninety pence.'),
           ('I (eat) bread in the morning.', 'I eat bread in the '
            'morning.'),
           ('My brother (cook) on Sunday.', 'My brother cooks on '
            'Sunday.'),
           ('The soup (change) every day.', 'The soup changes every '
            'day.')],
    task='Write each sentence with the present simple.'),
   vocab=[('several', 'more than two, but not many'),
          ('farm', 'land where food is grown or animals are kept'),
          ('field', 'one piece of land on a farm'),
          ('forty', 'the number 40'),
          ('hundred', 'the number 100'),
          ('soil', 'the earth that plants grow in'),
          ('milk', 'the white drink that comes from cows'),
          ('supermarket', 'a large shop that sells food of every kind')],
   expr=[('Are you ready to order?', 'what the waiter asks first'),
         ('Could I have the soup, please?', 'ordering politely'),
         ('Can we pay at the end?', 'asking how payment works'),
         ('That is fine.', 'accepting what you have been offered')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Shopping for food',
   step=1,
   read=[
    dict(heading="Greenway Market: this week's prices",
         kind='Price list', task='Multiple choice, short answer and sentence completion',
         band='gt_short', qtype='Questions 11-15',
         paras=[
          'Potatoes are sixty pence a kilogram this week, down from '
          'eighty. Carrots are the same price as last week.',
          'A bunch of bananas is one pound twenty. Apples from the farm '
          'at Ashbury are two pounds a bag, and the bag holds roughly a '
          'kilogram and a half.',
          'We take cash and cards. There is no minimum for a card '
          'payment, but a card machine is slow on Saturday morning, when '
          'the queue is long and the market is busy.'],
         items=[
          ('Potatoes this week cost',
           ['eighty pence a kilogram', 'sixty pence a kilogram', 'one pound twenty a kilogram', 'ninety pence a kilogram'],
           1, 'Down from eighty, the first line says.',
           {0: 'Eighty pence was last week\'s price, not this week\'s.', 2: 'One pound twenty is the price of a bunch of bananas.', 3: 'Ninety pence is not a price given in this text.'}),
          ('Which vegetable has not changed in price?', None, 'carrots',
           'Paragraph 1, the same price as last week.'),
          ('A bunch of bananas costs',
           ['sixty pence', 'one pound twenty', 'two pounds', 'one pound fifty'],
           1, 'Paragraph 2, the first item in it.',
           {0: 'Sixty pence is the price of a kilogram of potatoes.', 2: 'Two pounds is the price of a bag of apples.', 3: 'One pound fifty is not a price in this text.'}),
          ('A bag of apples holds roughly ____________ kilograms.',
           None, '1.5',
           'Paragraph 2: roughly a kilogram and a half, so 1.5.'),
          ('The card machine is slow',
           ['every morning', 'on Saturday morning', 'when there is no minimum', 'on Sunday'],
           1, 'When the queue is long and the market is busy.',
           {0: 'The text names one morning, not every morning.', 2: 'Having no minimum is a separate fact about cards.', 3: 'Sunday is not mentioned in this text at all.'})])],
   listen=[
    dict(heading='At the market stall', part='Part 1',
         task='A conversation at a market · short answer and sentence completion', band='l1',
         qtype='Questions 16-20',
         script=[
          ('Seller', 'Morning. What can I get you?'),
          ('Shopper', 'Two kilograms of potatoes, please.'),
          ('Seller', 'Two kilos. That is one pound twenty.'),
          ('Shopper', 'And a bunch of bananas.'),
          ('Seller', 'One twenty for those as well. So two forty.'),
          ('Shopper', 'Do you have apples?'),
          ('Seller', 'Yes, from the farm at Ashbury. Two pounds a bag.'),
          ('Shopper', 'I will take one bag. Are they picked this week?'),
          ('Seller', 'Picked on Tuesday. They come directly from the '
           'farm, not through a warehouse.'),
          ('Shopper', 'Good. So four pounds forty in total?'),
          ('Seller', 'Four forty. Cash or card?'),
          ('Shopper', 'Cash. Here is five.'),
          ('Seller', 'And sixty pence back. Thank you.'),
          ('Shopper', 'Are you here on Sunday?'),
          ('Seller', 'No. Tuesday to Saturday only. Sunday is the one '
           'day the whole market is closed, so people come on Saturday '
           'and the queue is long all morning.'),
          ('Shopper', 'I will come early next week, then.'),
          ('Seller', 'Before ten is best. After that the good potatoes '
           'have gone and we are left with the small ones.'),
          ('Shopper', 'Thank you. See you on Tuesday.'),
          ('Seller', 'See you Tuesday.')],
         items=[
          ('How many kilograms of potatoes does the shopper buy?',
           None, 'two', 'The first thing asked for in the conversation.'),
          ('Which farm do the apples come from?', None, 'Ashbury',
           'The seller names the farm when asked.'),
          ('The apples were picked on ____________.', None, 'Tuesday',
           'The seller says so when asked if they are fresh.'),
          ('The total is ____________ pounds forty.', None, 'four',
           'The shopper adds it up and the seller agrees.'),
          ('On which day is the stall closed?', None, 'Sunday',
           'The last line: it is closed on Sunday.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Where you buy your food',
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: say where, then say why. The second '
           'sentence is the one that is worth marks.'),
    cue=('Describe a shop or a market you go to.',
         ['say where it is',
          'say what it sells',
          'say how often you go',
          'and explain why you go there']),
    qs=['Where do you buy most of your food?',
        'Do you go to a market or a supermarket?',
        'How often do you shop for food?',
        'Is food expensive where you live?',
        'Now look at the card. You have one minute to make notes.',
        'Is it busy when you go?',
        'Who do you usually go with?'],
    shape=[('answer', 'I buy most of my food at a small supermarket '
            'near my flat.'),
           ('support', 'It is two minutes away, so I can shop after '
            'work.'),
           ('follow-up', 'For fruit I go to the market on Saturday, '
            'because it is cheaper there.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='What four friends spend on food each week',
         figure=_SPEND,
         prompt='The chart shows what four friends spend on food each '
                'week. Describe the chart. Give the highest and the '
                'lowest, and compare them.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows how much four friends spend on food in one '
          'week.',
          'Bilal spends the most, at forty-four pounds. Chen spends the '
          'least, at twenty-five pounds. The difference between them is '
          'nineteen pounds, which is roughly three quarters of what Chen '
          'spends in the whole week.',
          'Ana and Dalia are between the two, at thirty-one and '
          'thirty-eight pounds. Dalia is closer to Bilal than to Ana.',
          'Nobody in the group spends less than twenty-five pounds or '
          'more than forty-five.'],
         notes=['The first sentence says what the chart shows, in '
                'different words from the question.',
                'The highest and the lowest come next, with their '
                'numbers. At this level that is most of the task.',
                'The last sentence gives the range, which is a '
                'comparison and not a list.'],
         criterion=[('An opening sentence in your own words',
                     'Task Achievement'),
                    ('Highest and lowest, with numbers', 'Task '
                     'Achievement'),
                    ('One real comparison', 'Task Response'),
                    ('No opinion anywhere in the answer', 'Task '
                     'Response')])],
   gram=dict(
    point='How much and how many',
    explain='Use how many with things you can count, and how much with '
            'things you cannot count or with money.',
    examples=['How many apples do you want?',
              'How much is a bag of apples?',
              'How much milk is left?',
              'How many bags did you buy?'],
    items=[('____ bananas are in a bunch?', 'How many bananas are in a '
            'bunch?'),
           ('____ are the potatoes?', 'How much are the potatoes?'),
           ('____ money do you have?', 'How much money do you have?'),
           ('____ people work at the market?',
            'How many people work at the market?'),
           ('____ soup is in the bowl?', 'How much soup is in the '
            'bowl?')],
    task='Complete each question with how much or how many.'),
   vocab=[('shop', 'a place where things are sold'),
          ('directly', 'with nothing in between'),
          ('production', 'the making or growing of something'),
          ('roughly', 'about, not exactly'),
          ('hectare', 'a piece of land 100 metres by 100 metres'),
          ('cash', 'money as notes and coins'),
          ('taught', 'past of teach: showed somebody how'),
          ('defined', 'said exactly what something means')],
   expr=[('What can I get you?', 'what a seller asks first'),
         ('I will take one bag.', 'deciding to buy'),
         ('How much is that in total?', 'asking for the whole price'),
         ('Cash or card?', 'the question at the moment of paying')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Cooking at home',
   step=2,
   read=[
    dict(heading='Egg and tomato rice: a recipe card',
         kind='Recipe', task='Matching headings, short answer and sentence completion',
         band='gt_work', qtype='Questions 21-25',
         skill=('A recipe is read for order and for amounts',
                ['The verbs at the start of each line are the steps. '
                 'Number them before you look at the questions.',
                 'Amounts and times are the answers. Underline every '
                 'number as you read.']),
         paras=[
          'This is a meal for two people and it takes twenty minutes. '
          'You need two cups of rice, four eggs, three tomatoes, oil and '
          'salt.',
          'Wash the rice in cold water until the water is clear. Boil '
          'it for twelve minutes. Do not lift the lid, otherwise the '
          'rice stays hard in the middle.',
          'While the rice cooks, cut the tomatoes and fry them in oil '
          'for three minutes. Break the eggs into the pan and mix them '
          'until they are firm.',
          'Put the rice on two plates and the eggs on top. Eat it hot, '
          'and cook only what you need.'],
         items=[
          ('Which is the best heading for paragraph 2?',
           ['Cooking the rice', 'What you need', 'Serving the meal', 'How long it takes'],
           0, 'Paragraph 2 washes the rice and boils it.',
           {1: 'What you need is paragraph 1, before the method '
               'begins.', 2: 'Serving the meal is the last paragraph.', 3: 'The time is given in paragraph 1 with the ingredients.'}),
          ('How many eggs do you need?', None, 'four',
           'Paragraph 1, in the list of what you need.'),
          ('Which is the best heading for paragraph 3?',
           ['Washing the rice', 'The tomatoes and the eggs', 'What to buy', 'Eating it hot'],
           1, 'Paragraph 3 cuts, fries and mixes them.',
           {0: 'Washing the rice is paragraph 2.', 2: 'What to buy is the list in paragraph 1.', 3: 'Eating it hot is the last line of paragraph 4.'}),
          ('Boil the rice for ____________ minutes.', None, 'twelve',
           'Paragraph 2, and the lid stays on.'),
          ('Which is the best heading for paragraph 4?',
           ['Putting it together', 'Boiling the rice', 'The list of ingredients', 'Frying the tomatoes'],
           0, 'Paragraph 4 plates it and says to eat it hot.',
           {1: 'Boiling the rice is paragraph 2.', 2: 'The list of ingredients is paragraph 1.', 3: 'Frying the tomatoes is paragraph 3.'})])],
   listen=[
    dict(heading='How I make my soup', part='Part 2',
         task='One speaker describing a method · sentence completion and short answer', band='l2',
         qtype='Questions 26-30',
         script=[
          ('Speaker', 'People think soup is difficult. It is not. I make '
           'the same soup every week and it costs under two pounds.'),
          ('Speaker', 'I start with an onion and two carrots, cut small. '
           'I fry them in oil for five minutes, no longer, because the '
           'onion goes bitter if it browns.'),
          ('Speaker', 'Then I add whatever vegetable is cheap that week. '
           'In winter that is usually potatoes. In summer it might be a '
           'bunch of green beans from the market.'),
          ('Speaker', 'I add a litre of water and boil it for twenty '
           'minutes. Then I stop. Many people boil soup for an hour and '
           'the taste goes flat.'),
          ('Speaker', 'At the end I add salt, pepper and a little milk. '
           'The milk makes it softer. My mother taught me that and I '
           'have never changed it.'),
          ('Speaker', 'It keeps for three days in the fridge, and it is '
           'better on the second day than on the first.')],
         items=[
          ('The soup costs under ____________ pounds.', None, 'two',
           'The first thing the speaker says about it.'),
          ('Fry the onion and carrots for ____________ minutes.', None,
           'five', 'Longer than that and the onion goes bitter.'),
          ('In winter the extra vegetable is usually ____________.',
           None, 'potatoes', 'In summer it is green beans instead.'),
          ('Boil the soup for ____________ minutes.', None, 'twenty',
           'The speaker says an hour makes the taste flat.'),
          ('What is added at the end to make the soup softer?', None,
           'milk', 'With salt and pepper, and the speaker learned it '
           'from her mother.')])],
   speak=dict(
    part='Part 2', focus='Cooking',
    longturn=[('I am going to talk about a meal I can cook. It is a rice dish '
               'with chicken and vegetables.'),
              ('In it there is rice, chicken, one onion, two carrots and some '
               'peas. I also put in salt, pepper and a little oil. Sometimes I '
               'add an egg at the end.'),
              ('I cook it about once a week, usually on a Sunday evening. It '
               'takes about forty minutes. I often make a lot, because then I '
               'have lunch for Monday as well.'),
              ('I like it for three reasons. First, it is cheap. The chicken '
               'is the only expensive part, and I use a small amount. Second, '
               'it is easy. I do not have to watch it all the time, so I can '
               'do other things in the kitchen. Third, my family likes it. My '
               'brother always asks for it when he comes to my flat, and I am '
               'happy that there is one meal I can cook well. My mother taught '
               'me this dish when I was about sixteen, so it also reminds me '
               'of home.')],
    intro=('One minute to prepare, two minutes to speak. Use the four '
           'bullets in order and you will not stop early.'),
    cue=('Describe a meal you can cook.',
         ['say what is in it',
          'say when you cook it',
          'say why you like it',
          'and explain who you usually cook it for']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Who taught you to cook it?',
        'Do you cook it often?'],
    shape=[('answer', 'The meal I can cook best is rice with eggs and '
            'tomatoes.'),
           ('support', 'It needs five things and all of them are cheap.'),
           ('support', 'I cook it on the evenings when I come home '
            'late.'),
           ('follow-up', 'I like it because it takes twenty minutes and '
            'I never have to think about it.')]),
   write=[
    dict(task='Task 2', heading='Is it better to cook at home or to eat '
         'out?',
         prompt='Some people cook at home every day. Others eat in '
                'restaurants and cafes. Which is better? Give your '
                'opinion and reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Cooking at home is better, for two reasons',
               [('It costs much less',
                 ['a meal at home costs under two pounds',
                  'the same meal in a cafe costs eight']),
                ('You know what is in it',
                 ['you choose the salt and the oil yourself',
                  'a cafe cooks for taste, not for your health'])]),
         model=[
          'Some people cook at home and some people eat out. I think '
          'cooking at home is better, for two reasons.',
          'The first reason is money. A meal of rice, eggs and tomatoes '
          'costs under two pounds at home. The same meal in a cafe costs '
          'about eight pounds. If you eat out four times a week, that is '
          'a lot of money for the same food.',
          'The second reason is that you know what is in the food. At '
          'home you choose how much salt and oil you use. A cafe cooks '
          'for taste, because it wants you to come back, so it often '
          'uses more of both.',
          'Eating out is better when you want to meet friends. But for a '
          'normal day, I believe cooking at home is cheaper and '
          'healthier.'],
         notes=['The opinion is in the first paragraph, not saved for '
                'the end. The examiner should not have to wait.',
                'Each body paragraph has one reason and a number or an '
                'example. Two reasons done properly beat four listed.',
                'The last paragraph admits the other side in one '
                'sentence, then returns to the opinion.'],
         criterion=[('An opinion in the first paragraph', 'Task '
                     'Response'),
                    ('Two reasons, each with support', 'Task Response'),
                    ('The other side in one sentence', 'Coherence and '
                     'Cohesion'),
                    ('Simple sentences that are correct', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Imperatives for instructions',
    fix=dict(
     text=('First, wash the rice in cold water. Then you put the oil in the '
           'pan and heat it. Cut the onion and the carrots small. When the oil '
           'is hot, add the onion and cook it for two minutes. Not add the '
           'rice yet. Add the water, and then you waiting for twenty minutes. '
           'At the end, add salt and pepper.'),
     faults=[('Then you put the oil in the pan',
              'Then put the oil in the pan',
              ('An instruction has no subject. Say put, not you put, in a set '
               'of directions like this one.')),
             ('Not add the rice yet',
              'Do not add the rice yet',
              ('A negative instruction needs do not in front of the verb. Not '
               'on its own is not enough.')),
             ('then you waiting for twenty minutes',
              'then wait for twenty minutes',
              ('Two faults in three words: the subject again, and waiting '
               'instead of the plain verb.'))]),
    explain='For an instruction, use the verb with no subject. For a '
            'negative instruction, put do not in front of it.',
    examples=['Wash the rice in cold water.',
              'Do not lift the lid.',
              'Boil it for twelve minutes.',
              'Add salt at the end.'],
    items=[('(wash) the rice first.', 'Wash the rice first.'),
           ('(not / lift) the lid while it cooks.',
            'Do not lift the lid while it cooks.'),
           ('(cut) the tomatoes small.', 'Cut the tomatoes small.'),
           ('(not / boil) the soup for an hour.',
            'Do not boil the soup for an hour.'),
           ('(eat) it hot.', 'Eat it hot.')],
    task='Write each instruction with an imperative.'),
   vocab=[('kilogram', 'a weight of 1,000 grams'),
          ('otherwise', 'if you do not, this will happen'),
          ('bunch', 'a group of things held together'),
          ('credit', 'paying later instead of now'),
          ('eggs', 'what hens lay, used in cooking'),
          ('wherever', 'in any place that'),
          ('silent', 'making no sound'),
          ('stock', 'the goods a shop has to sell')],
   expr=[('First, then, after that', 'the order of a method'),
         ('It takes about twenty minutes.', 'saying how long'),
         ('If you have no tomatoes, use a tin.', 'giving an '
          'alternative'),
         ('My mother taught me that.', 'saying where you learned it')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='Where our food comes from',
   step=2,
   read=[
    dict(heading='From the field to the shop',
         kind='Short factual article',
         task='Note completion, matching features and multiple choice',
         band='acad', qtype='Questions 31-36',
         skill=('A process text is read for the order of its stages',
                ['Find the stage words first: grown, cut, sent, sold. '
                 'They are the shape of the whole text.',
                 'Then read for the number beside each stage: days, '
                 'degrees, kilometres.']),
         qkind=('note/table/flow-chart completion',),
         paras=[
          'Most of the food in a British supermarket has passed through '
          'four stages, and the whole journey is shorter than people '
          'think. The food is grown on a farm, collected by a lorry, '
          'kept in a large cold building, and then sent to shops. For '
          'milk and bread the four stages take about two days. For '
          'potatoes they can take six months, because potatoes are '
          'stored and sold slowly through the winter.',
          'The cold building is the stage people never see. It is kept '
          'at four degrees, and nearly all fresh food in the country '
          'passes through one. A lorry arrives at night, is emptied in '
          'forty minutes, and leaves again. Each box carries a label '
          'with the farm name, the date and a number, so that any box on '
          'any shelf can be traced back to the field it came from.',
          'Tracing matters more than it sounds. If something goes wrong '
          'with one box of eggs, the label is how the shop finds the '
          'other boxes from the same farm on the same day. Agriculture '
          'is now a system of records as much as a system of fields, and '
          'a farm that cannot keep records cannot sell to a supermarket '
          'at all.'],
         items=[
          ('Food is grown on a farm and then collected by a '
           '____________.', None, 'lorry',
           'Paragraph 1, the second of the four stages.'),
          ('For milk and bread, the four stages take about '
           '____________.', None, 'two days',
           'Paragraph 1. Potatoes take much longer.'),
          ('Potatoes can take ____________ months.', None, 'six',
           'Paragraph 1: they are stored and sold through the winter.'),
          ('The cold building is kept at ____________ degrees.', None,
           'four', 'Paragraph 2, the stage people never see.'),
          ('Which is on every box?',
           ['the price', 'the label', 'the shelf', 'the lorry'], 1,
           'Paragraph 2: the farm name, the date and a number.',
           {0: 'The price is on the shelf, not the box.', 2: 'The shelf is in the shop, not on the box.', 3: 'The lorry carries the boxes; it is not on them.'}),
          ('What can a label be used to do?',
           ['lower the price', 'trace the food back to the farm', 'keep the food cold', 'sell the food faster'],
           1, 'Paragraph 3, which is why records matter.',
           {0: 'A label does not change the price.', 2: 'The cold building keeps the food cold.', 3: 'A label does not make the food sell faster.'})])],
   listen=[
    dict(heading='A talk at the school farm', part='Part 4',
         task='A short talk to visiting students · multiple choice and short answer', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'Welcome to the school farm. We have forty '
           'hectares here, which is small, and we grow four things: '
           'wheat, potatoes, apples and grass for the animals.'),
          ('Speaker', 'Start with the soil, because everything else '
           'follows from it. Good soil is not dead earth. A handful of '
           'it holds more living organisms than there are people on the '
           'planet, and those organisms are what feed the plant.'),
          ('Speaker', 'We test the soil in every field twice a year. If '
           'one field is tired, we plant grass there for two consecutive '
           'seasons and let it rest. That costs us money in the short '
           'term and saves it later.'),
          ('Speaker', 'Our eggs are free-range, which means the hens go '
           'outside every day. People ask whether the eggs taste '
           'different. Honestly, most people cannot tell in a test. What '
           'changes is the life of the hen, and that is a fair reason on '
           'its own.'),
          ('Speaker', 'Last year we sold directly to shops for the first '
           'time, instead of through a company. We earn more that way, '
           'but one of us now spends a day a week on paperwork, so it is '
           'not free money.')],
         items=[
          ('The school farm is',
           ['four hectares', 'forty hectares', 'fourteen hectares', 'four hundred hectares'],
           1, 'The first line of the talk, and he calls it small.',
           {0: 'Four hectares is much smaller than the number he '
               'gives.', 2: 'Fourteen sounds close to it but is not the number.', 3: 'Four hundred would not be a small farm, and he says it '
               'is small.'}),
          ('How many things does the farm grow?', None, 'four',
           'Wheat, potatoes, apples and grass.'),
          ('The soil is tested',
           ['once a year', 'twice a year', 'every month', 'every two years'],
           1, 'In every field, the speaker says.',
           {0: 'Once is half the number of times he gives.', 2: 'No month is mentioned anywhere in the talk.', 3: 'Every two years is less often than he says.'}),
          ('What is a tired field planted with for two seasons?', None,
           'grass', 'So that the tired field can rest for a season.'),
          ('Selling the food directly costs the farm',
           ['a day a week in paperwork', 'nothing at all', 'a day a month', 'two extra workers'],
           0, 'Which is why he calls it money that is not free.',
           {1: 'He says in the same breath that it is not free money.', 2: 'He says a week, not a month.', 3: 'No extra workers are mentioned in the talk.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Food that comes from other countries',
    intro=('Take the card first. One minute to make notes, then one to two '
           'minutes of talk, and the bullets are the order to take them '
           'in. Then the discussion: part 3 answers are longer. Give an '
           'opinion and one reason, then an example.'),
    cue=('Describe a food from another country that you like.',
         ['say what it is',
          'say where it comes from',
          'say when you first tried it',
          'and explain why you like it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Can you buy it easily?',
        'Is it expensive where you live?',
        'Is it a good thing that food comes from other countries?',
        'Should people buy food grown near their home?',
        'Will farms be different in fifty years?'],
    shape=[('answer', 'I think it is mostly a good thing, but not '
            'always.'),
           ('support', 'It means we can eat fruit in winter that does '
            'not grow here.'),
           ('support', 'The problem is the cost of moving it, which is '
            'paid by somebody.'),
           ('follow-up', 'So I buy food from other countries, but not '
            'things my own country grows well.')]),
   write=[
    dict(task='Task 1', fork='A', heading='How bread reaches the shop',
         figure=_BREAD,
         prompt='The diagram shows how bread reaches the shop. Describe '
                'the four stages. Write about the process, not about '
                'your opinion of it.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The diagram shows the four stages between a field of wheat '
          'and a loaf of bread in a shop.',
          'In the first stage, wheat is grown in a field for about nine '
          'months. In the second, it is cut and dried in late summer. '
          'This is called the harvest.',
          'The grain is then ground into flour at a mill. In the last '
          'stage the flour is baked, and the bread is sent to shops on '
          'the same day.',
          'The whole process is linear: each stage must be finished '
          'before the next one can start.'],
         notes=['Every sentence uses the passive, because the diagram '
                'does not say who does the work.',
                'The stages are given in order, with the ordering words '
                'first, then and in the last stage.',
                'The final sentence says something about the shape of '
                'the process, which lifts the answer above a list.'],
         criterion=[('All four stages described', 'Task Achievement'),
                    ('The passive used throughout', 'Grammatical Range '
                     'and Accuracy'),
                    ('Ordering words between stages', 'Coherence and '
                     'Cohesion'),
                    ('No opinion anywhere', 'Task Response')])],
   gram=dict(
    point='Present simple passive: is grown, is sent',
    explain='Use is or are with the past participle when who does the '
            'action does not matter or is not known.',
    examples=['Wheat is grown in a field.',
              'The grain is cut in late summer.',
              'The boxes are kept at four degrees.',
              'The bread is sent to shops.'],
    items=[('Somebody grows wheat in that field.',
            'Wheat is grown in that field.'),
           ('They cut the grain in August.',
            'The grain is cut in August.'),
           ('Somebody tests the soil twice a year.',
            'The soil is tested twice a year.'),
           ('They send the bread to shops.',
            'The bread is sent to shops.'),
           ('Somebody puts a label on every box.',
            'A label is put on every box.')],
    task='Write each sentence in the passive.'),
   vocab=[('degrees', 'units for measuring how hot or cold'),
          ('potatoes', 'a vegetable that grows under the ground'),
          ('label', 'a small piece of paper giving information'),
          ('shelf', 'a flat board where goods are put'),
          ('agriculture', 'the work of farming'),
          ('consecutive', 'one after another, with none missing'),
          ('diagram', 'a drawing that explains something'),
          ('free-range', 'kept with room to go outside')],
   expr=[('It is grown in...', 'saying where food comes from'),
         ('It comes directly from the farm.', 'saying there is nobody '
          'in between'),
         ('The whole journey takes two days.', 'saying how long a '
          'process is'),
         ('That is a fair reason on its own.', 'accepting a reason you '
          'did not expect')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Why people eat different things',
   step=3,
   read=[
    dict(heading='Different countries, different meals',
         kind='Short factual article',
         task='Matching information, sentence completion and short answer',
         band='acad', qtype='Questions 42-47',
         paras=[
          'Ask why people in one country eat rice and people in another '
          'eat bread, and the first answer is usually weather. That is '
          'part of it. Rice needs warm weather and a great deal of '
          'water, so it is grown where the rain is heavy and the summer '
          'is long. Wheat grows in cooler and drier places. Nobody chose '
          'these meals. The weather chose them first, and people built '
          'their cooking on what would grow.',
          'The second reason is what can be kept. Before fridges, a food '
          'that would last the winter was worth more than a food that '
          'tasted better. Dried fish, salted meat, hard cheese and dried '
          'beans are all answers to the same problem, invented in places '
          'that have little in common except a cold season. The taste we '
          'now call traditional began as a way of stopping food from '
          'dying in a store.',
          'The third reason is the one people forget: money and time. A '
          'meal that is cooked slowly belongs to a household where '
          'somebody is at home. In the twentieth century, when more '
          'people worked away from the house, meals in many countries '
          'became faster and simpler, and the slow dishes moved to '
          'Sundays and holidays. That change had nothing to do with '
          'taste, and it happened almost everywhere at once.'],
         items=[
          (
           'Which paragraph explains why rice is grown in some places '
           'and not others?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 0,
           'The weather chose first, the text says.',
           {1: 'Paragraph 2 is about keeping food through a cold '
               'season.', 2: 'Paragraph 3 is about a change that came later, in many '
               'countries at once.'}),
          (
           'Which paragraph is about keeping food through a cold '
           'season?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 1,
           'Dried fish, salted meat and hard cheese.',
           {0: 'Paragraph 1 is about what the weather allows a country '
               'to grow.', 2: 'Paragraph 3 is about people working away from the '
               'house.'}),
          (
           'Which paragraph explains a change that happened in many '
           'countries at the same time?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 2,
           'More people worked away from the house.',
           {0: 'Paragraph 1 is about climate, which does not change in '
               'a generation.', 1: 'Paragraph 2 is about preserving food, not about who '
               'cooks it.'}),
          ('Rice needs warm weather and a lot of ____________.', None,
           'water', 'Paragraph 1, which is why it follows the rain.'),
          ('Name one food invented to last the winter.', None,
           'dried fish', 'Paragraph 2 gives four; any one of them is '
           'correct.'),
          ('In the twentieth century, meals in many countries became '
           'faster and ____________.', None, 'simpler',
           'Paragraph 3, as more people worked away from home.')])],
   listen=[
    dict(heading='Two students talk about meals at home', part='Part 3',
         task='A discussion between two students · matching', band='l3',
         qtype='Questions 48-52',
         bank=['A', 'B', 'C'],
         reuse=True,
         banklabel='A  Leo    B  Mei    C  the tutor',
         script=[
          ('Tutor', 'You were both looking at family meals. What did you '
           'find?'),
          ('Leo', 'I asked thirty people how often they eat with their '
           'family. The answer was usually once a week, not every day.'),
          ('Mei', 'Mine was similar, but the reason surprised me. It was '
           'not work. It was that people eat at different times.'),
          ('Tutor', 'Different times rather than no time?'),
          ('Mei', 'Yes. The food is there, in the fridge. People just '
           'take it at seven, at eight, at ten.'),
          ('Leo', 'I found the same thing, and the television was '
           'silent in most houses by then. People eat with a phone '
           'instead.'),
          ('Tutor', 'Did anyone say they felt guilty about it?'),
          ('Leo', 'Several did. They thought a family should eat '
           'together, and then they said their own week made it '
           'impossible.'),
          ('Mei', 'The one group that still ate together every day was '
           'families with small children, because small children eat '
           'early and somebody has to sit with them.'),
          ('Tutor', 'That is a useful distinction. So the meal is not '
           'disappearing; it is moving.'),
          ('Mei', 'That is what we will say in the report.')],
         items=[
          ('Asked thirty people about meals at home.', None, 'A',
           'He gives the number at the start.'),
          ('Says most people eat with their family about once a week.',
           None, 'A', 'Which is not what he expected to find.'),
          ('Was surprised that the reason was different mealtimes.',
           None, 'B', 'She had expected the reason to be work.'),
          ('Says small children still eat together every day.', None,
           'B', 'Because they eat early, she says.'),
          ('Says the family meal is moving rather than disappearing.',
           None, 'C', 'The summary at the end of the discussion.')])],
   speak=dict(
    part='Part 3', focus='Why food is different from place to place',
    sounds=[('Say each word to the end. In English the end of a word carries '
             'information: cooks is not cook, and cooked is not cook.'),
            ('Food words in this unit have the stress at the front: '
             'VEgetables, CHICken, DINner, BREAKfast. Say the first part '
             'clearly and the rest more quietly.'),
            ('Say these three words slowly, then at normal speed: vegetables, '
             'restaurant, comfortable. In normal speech each one is shorter '
             'than it looks.'),
            ('Practise one sentence until it is easy: I cook it about once a '
             'week. Do not stop between the words.'),
            ('Record yourself answering one Part 1 question. Listen once. You '
             'are only listening for the ends of words.')],
    intro='Give the reason first, then the example. If you start with '
          'the example you often forget the reason.',
    qs=['Why do people in different countries eat different food?',
        'Is it good that young people eat food from other countries?',
        'Do families eat together less than before?'],
    shape=[('answer', 'The main reason is what grows in that place.'),
           ('support', 'Rice needs heavy rain, so it is eaten where the '
            'rain is heavy.'),
           ('support', 'Before fridges, people also ate what could be '
            'kept all winter.'),
           ('follow-up', 'So the old meals of a country are really a '
            'list of what it could grow and store.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Inviting a friend to a meal at your home',
         prompt='You want to invite a friend to a meal at your home. '
                'Write an email. In your email: invite your friend; say '
                'what you will cook; say how to get to your home.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Sam,',
          'Would you like to come to my home for a meal on Friday '
          'evening? It would be good to see you before you start your '
          'new job.',
          'I am going to cook rice with eggs and tomatoes. It is a '
          'simple meal, but I make it well, and there will be fresh '
          'bread from the market. Tell me if there is anything you do '
          'not eat.',
          'I live at 14 Green Street, above the shop. The number 7 bus '
          'stops outside, and it is about ten minutes from the station.',
          'Let me know if Friday is difficult.',
          'Best wishes,',
          'Dana'],
         notes=['The invitation is the first sentence. An email that '
                'reaches the invitation in line four has wasted the '
                'opening.',
                'Each bullet gets its own short paragraph, which is what '
                'makes the answer easy to mark.',
                'The last line offers a way out, which is what a real '
                'invitation does.'],
         criterion=[('The invitation in the first sentence', 'Task '
                     'Achievement'),
                    ('All three bullets answered', 'Task Achievement'),
                    ('One paragraph for each bullet', 'Coherence and '
                     'Cohesion'),
                    ('A friendly closing line', 'Task Response')])],
   gram=dict(
    point='like, prefer and love with a noun or -ing',
    explain='After like, prefer and love, use a noun or the -ing form '
            'of a verb.',
    examples=['I like rice.',
              'I like cooking at the weekend.',
              'I prefer eating at home.',
              'She loves fresh bread.'],
    items=[('I like (cook) at the weekend.',
            'I like cooking at the weekend.'),
           ('He prefers (eat) early.', 'He prefers eating early.'),
           ('They love (go) to the market.',
            'They love going to the market.'),
           ('I do not like (wait) for a table.',
            'I do not like waiting for a table.'),
           ('We prefer (cook) together.', 'We prefer cooking '
            'together.')],
    task='Write each sentence with the -ing form.'),
   vocab=[('organisms', 'living things, often very small'),
          ('programmes', 'plans of work, or shows on television'),
          ('twentieth', 'number 20 in an order'),
          ('planet', 'a world such as the Earth'),
          ('fat', 'the oily part of food'),
          ('guilty', 'feeling bad about something you did'),
          ('fresh', 'made or picked a very short time ago')],
   expr=[('I prefer... because...', 'giving a preference with a '
          'reason'),
         ('I do not really like...', 'saying no politely'),
         ('Would you like to come?', 'inviting somebody'),
         ('Let me know if that is difficult.', 'leaving a way out')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='The three moves: preview, questions, listen',
  body='Every recording in this book, and every recording in the test, '
       'is played once. That one fact decides how you work. You cannot '
       'go back, so everything you are going to do must be done before '
       'the recording starts. There are three moves, and they take less '
       'than a minute. First, preview: read the title and the heading '
       'and decide what the recording is about and who is speaking. A '
       'conversation in a cafe and a talk at a farm sound different '
       'from the first second, and knowing which one you are about to '
       'hear is worth a mark on its own. Second, read the questions, '
       'and underline the word in each one that tells you what kind of '
       'answer it is: a number, a time, a name, a food. If the question '
       'says "how many", you are listening for a number and you can '
       'ignore everything that is not one. Third, listen for the '
       'question you are on and the one after it. The answers come in '
       'order. If you miss one, do not stop: go to the next question, '
       'because stopping to think about a missed answer is how '
       'candidates lose three marks instead of one. These three moves '
       'are used in every unit of this book, and in Volume 1 they '
       'become the same three moves in Reading.',
  panel=[('Preview', 'Who is speaking, and where? Read the heading.'),
         ('Underline the question word',
          'How many, what time, which place, who.'),
         ('Listen one question ahead', 'The answers come in order.'),
         ('Never stop for a missed answer',
          'One lost mark becomes three if you stop.')],
  qs=['What is this recording about, before it starts?',
      'What kind of answer does each question want?',
      'Which question are you on right now?',
      'Did you keep going after you missed one?',
      'Did you write your answer while they were still talking?'],
  task='Do the five listening sections in this unit. Before each one, '
       'write down who is speaking and what kind of answer each '
       'question wants. Compare your notes with the answer key.'),

 outlining=dict(
  title='Fill the outline: four sentences under two main ideas',
  body='A short opinion answer has a shape, and the shape is decided '
       'before you write, not while you write. Take the question "Is it '
       'better to cook at home or to eat out?" Your answer has two main '
       'ideas and nothing else. Write them down first, in four or five '
       'words each: "cheaper" and "you know what is in it". Those are '
       'the two paragraphs. Then put two sentences under each one: a '
       'sentence that says the idea, and a sentence that supports it '
       'with a number or an example. That is four sentences in total, '
       'and with an opening and a closing line you have a complete '
       'answer of about 130 words. The mistake at this level is not '
       'having too few ideas. It is having six ideas and one sentence '
       'about each, which reads like a list and scores like one. Two '
       'ideas with support beat six without it, every time. In Volume 1 '
       'you will brainstorm eight ideas and choose from them. Here you '
       'choose two and support them properly, which is the skill the '
       'choosing is for.',
  frame=('Cooking at home is better than eating out',
         [('It costs much less',
           ['a meal at home costs under two pounds',
            'the same meal in a cafe costs about eight']),
          ('You know what is in the food',
           ['you choose the salt and the oil yourself',
            'a cafe cooks for taste, because it wants you to return'])]),
  qs=['What are your two ideas, in five words each?',
      'What number or example supports the first one?',
      'What number or example supports the second one?',
      'Does your first sentence say what you think?',
      'Is anything in your plan a repeat of something else?'],
  task='Plan the cycle 3 question in two ideas with two sentences each, '
       'then write it. Count your sentences before you start writing.',
  answers=['two ideas, not six, is the whole point of the frame',
           'a number is the easiest support to write at this level',
           'the second idea must not be the first one again',
           'the opinion belongs in the first sentence',
           'a list of six ideas reads like a list and scores like one']),

 candos=['I can read a menu and a price list for numbers and times',
         'I can follow a recipe and answer questions about its order',
         'I can preview a recording before it starts',
         'I can describe a simple bar chart with four bars',
         'I can plan a short opinion answer with two supported ideas'],

 tip=('The recording is played once, so everything you can do before it '
      'starts is worth more than anything you can do while it plays. '
      'Read the questions. Underline the question word. Then listen.'))
