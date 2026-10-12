"""Unit 4 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        4, 'Food and Shopping',
        'Countable and uncountable, a, an, the',
        ['I can name the main things in a food shop.',
         'I can use a, some, a few and a little.',
         'I can describe a meal I cook in 50–70 words.'],
        ['shop', 'kitchen', 'cup', 'person', 'clock'],
        alt='The opening page of Unit 4, Food and Shopping: the grammar point is '
            'countable and uncountable nouns with a, an and the, and three things '
            'the learner will be able to do by the end of the unit.'),

        # REVIEW: icon not in the map for ['Flour'],

 2: lambda: F.word_grid(
        [('Bottle', 'bottle'), ('Slice', 'slice'), ('Basket', 'basket'), ('Receipt', 'receipt'), ('Flour', 'sugar')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: bottle, slice, '
            'basket, receipt, flour.'),

 3: lambda: F.bank_strip(
        [('vegetables', 'vegetable'), ('dish', 'bowl'), ('sugar', 'sugar'),
         ('fresh', 'apple')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: vegetables, dish, sugar, fresh.'),

 4: lambda: F.scene(
        [('Bread', 'shop', 'by the door'), ('Milk', 'cup', 'the fridge'),
         ('Rice', 'kitchen', 'the second aisle'), ('Tea', 'cup', 'next to the coffee'),
         ('Tins', 'home', 'the back shelf'), ('Onions', 'sun', 'a basket by the door')],
        height=560,
        alt='What Amina sells and where it is: bread by the door, milk in the fridge, '
            'rice in the second aisle, tea next to the coffee, tins on the back shelf, '
            'and a basket of onions by the door.'),

        # REVIEW: icon not in the map for ['Change'],

 5: lambda: F.word_grid(
        [('Receipt', 'receipt'), ('Basket', 'basket'), ('Aisle', 'aisle'), ('Change', 'coins'), ('Weigh', 'scales'), ('Fresh', 'apple'), ('Slice', 'slice')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: receipt, '
            'basket, aisle, change, weigh, fresh, slice, each with the thing '
            'it means drawn beside its number.'),

 6: lambda: F.sound_shape(
        [('receipt', ['re', 'ceipt'], 1),
         ('vegetable', ['veg', 'ta', 'ble'], 0),
         ('basket', ['bas', 'ket'], 0),
         ('expensive', ['ex', 'pen', 'sive'], 1),
         ('sugar', ['su', 'gar'], 0),
         ('aisle', ['aisle'], 0)],
        height=720,
        alt='Where the stress falls in six words of this unit. Each word has '
            'a bar above every syllable, tall and dark where the stress falls '
            'and short and pale elsewhere, and the same pattern again at the '
            'right as one large dot among small ones.'),

 7: lambda: F.category_set(
        [('Basket', 'shop'), ('Till', 'home'), ('Receipt', 'book'),
         ('Change', 'cup'), ('Aisle', 'bus'), ('Bottle', 'kitchen')],
        height=600,
        alt='Six things you meet in a food shop, each on its own card: basket, till, '
            'receipt, change, aisle and bottle.'),

 8: lambda: F.label_me(
        [('basket', 0.12, 0.46), ('till', 0.32, 0.54), ('receipt', 0.52, 0.44),
         ('change', 0.72, 0.52), ('bag', 0.90, 0.46)],
        height=620, draw=F.counter,
        alt='A shop counter drawn from the front, with a basket, a till, a receipt, '
            'change and a bag. Five numbered lines run to the right for the learner '
            'to write each word.'),

 9: lambda: F.bank_strip(
        [('weigh', 'scales'), ('receipt', 'receipt'), ('basket', 'basket'),
         ('aisle', 'aisle')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: weigh, receipt, basket, aisle.'),
 10: lambda: F.writing_frame(
        [('Where you buy food', 'I buy most things in a small shop.'),
         ('What you take', 'I take a basket, because a big one is too much.'),
         ('What is always fresh', 'The bread there is always fresh.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- where you buy food, what you take with you, and what is '
            'always fresh -- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('There is a basket of onions by the door.', 'onions'),
         ('There are three tins on the shelf.', 'tins'),
         ('There is bread, and there is milk.', 'bread'),
         ('Amina sells a few eggs and a little cheese.', 'eggs')],
        height=440,
        alt='Four lines from the notice with the food word ringed in each: '
            'onions, tins, bread, eggs. Three of the four can be counted one '
            'by one and one cannot, which is the question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('Countable', 'a tin · three tins · a few',
         'There are three tins.', [0.14, 0.38, 0.62, 0.86]),
        ('Uncountable', 'milk · bread · a little',
         'There is milk.', [0.5]),
        height=640,
        alt='The unit’s grammar as two columns. On the left countable nouns, with '
            'four separate marks, taking a, three and a few. On the right '
            'uncountable nouns, one unbroken amount, taking a little.'),

 13: lambda: F.timeline(
        [('a bottle', 'of milk'), ('a slice', 'of bread'),
         ('a kilo', 'of rice'), ('a packet', 'of tea'),
         ('a bottle', 'of water')],
        height=460,
        alt='Five ways English counts the things it cannot count: a bottle of milk, '
            'a slice of bread, a kilo of rice, a packet of tea and a bottle of water.'),

        # REVIEW: bins guessed as ['a few', 'a little']; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['a few', 'a little'],
        ['tins', 'eggs', 'sugar', 'money', 'slices'],
        height=540,
        alt='The five things this task counts, as chips above two empty bins, '
            'one for a few and one for a little. Which chip goes in which bin '
            'is the exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('I want a bread.', 'I want some bread.'),
         ('I would like a bread, please.', None),
         ('There are a little onions in the basket.', None),
         ('Amina sells a few cheese and a lot of bread.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 4.2', 'Dani and Amina', 'shop', 'in the corner shop again'),
         ('Track 4.3', 'Yuki and the stallholder', 'sun', 'at the market'),
         ('Track 4.4', 'Amina', 'cup', 'five people, five baskets')],
        height=560,
        alt='The three listenings in this unit: Dani and Amina in the corner shop, '
            'Yuki buying from a stallholder at the market, and Amina on what five '
            'baskets tell her about five people.'),

 17: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'How much are the tomatoes?'),
         ('Stallholder', 'person', 'How many do you want?'),
         ('Yuki', 'computer', 'And a little parsley.'),
         ('Stallholder', 'person', 'Parsley\u2019s free with the tomatoes.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Yuki: How much are the tomatoes? Stallholder: How many do '
            'you want? Yuki: And a little parsley. Stallholder: Parsley\u2019s '
            'free with the tomatoes.'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['a lot of rice and a lot of tins',
         'the same seven things every Friday',
         'fruit and coffee, nothing to cook',
         'one meal, and back tomorrow',
         'things the shop does not sell'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('How often do you shop for food, and where?', 'bowl'),
         ('What is always in your kitchen, and what do you never buy?', 'pin'),
         ('Is there a food from your country that is hard to find here?', 'bowl')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('six eggs', 'notice'), ('fresh bread', 'bread'), ('a little milk', 'bottle'), ('three lemons', 'notice')]),
        ('Student B', [('six eggs', 'notice'), ('no bread', 'bread'), ('a lot of milk', 'bottle'), ('one lemon', 'notice')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — the customer', ['ask the price', 'ask for an amount',
                                   'ask for one more thing',
                                   'pay and take the change'], 'person'),
        ('Card B — the stallholder', ['give a price', 'ask how much or how many',
                                      'add up', 'give the change and the receipt'],
         'shop'),
        height=560,
        alt='The two role-play cards side by side. Card A, the customer: ask the '
            'price, ask for an amount, ask for one more thing, pay and take the '
            'change. Card B, the stallholder: give a price, ask how much or how '
            'many, add up, give the change and the receipt.'),

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('which meal you cook', 1, 'bowl'),
         ('what you need a lot of', 2, 'basket'),
         ('what you need a little of', 2, 'sugar'),
         ('who you cook it for', 1, 'guest')],
        height=420,
        alt='The one-minute talk as four beats on a clock line, each block as '
            'wide as the share of the minute it should take: which meal you '
            'cook, what you need a lot of, what you need a little of, and who '
            'you cook it for.'),

 23: lambda: F.process_strip(
        [('on the farm', 'sun'), ('to the market', 'bus'), ('to the shop', 'shop'),
         ('in the basket', 'kitchen'), ('on the table', 'cup')],
        height=460,
        alt='Food in five stages from the field to the table, each with an arrow to '
            'the next: grown, to the market, to the shop, into the basket, and on '
            'the table.'),

        # REVIEW: icon not in the map for ['stock', 'credit', 'choice'],

 24: lambda: F.word_grid(
        [('supermarket', 'aisle'), ('stock', 'box'), ('credit', 'wallet'), ('choice', 'question')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'supermarket, stock, credit, choice.'),

 25: lambda: F.world_strip(
        [('Europe', 'cup', 'bread, butter and something sweet'),
         ('Japan', 'kitchen', 'rice, as normal at eight as at night'),
         ('Egypt', 'sun', 'beans with oil and bread')],
        height=460,
        alt='The first meal of the day in three places: bread, butter and something '
            'sweet in much of Europe; rice in Japan, as normal at eight in the '
            'morning as at night; and beans with oil and bread in Egypt.'),

 26: lambda: F.writing_frame(
        [('What you cook, how often', 'Dani cooks rice three times a week.'),
         ('A lot of', 'He needs a lot of rice.'),
         ('A few and a little', 'a few onions and a little oil'),
         ('Who eats it, and where', 'He eats it on the floor with the radio on.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: what you cook and how often, what you need a lot of, what you '
            'need a few and a little of, and who eats it and where.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'I buy most things in the big shop.'),
         ('two or three reasons', 'But I buy bread and milk at the corner.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('three things with amounts', 'Hi Tomas, if you are passing Amina\u2019s.'),
         ('what to do if', 'A kilo of rice, half a litre of milk.'),
         ('polite', 'There are usually eggs; six if there are six.')],
        height=571,
        alt='The shape of the message in three steps -- three things with '
            'amounts, what to do if, polite -- with a line of the model '
            'beside each one.'),

 29: lambda: F.writing_frame(
        [('the food named', 'I cannot buy good tomatoes here between.'),
         ('why it is hard to find', 'There are tomatoes in every shop.'),
         ('what you did with it', 'At home we ate them with salt and bread.')],
        height=571,
        alt='The shape of the reflection in three steps -- the food named, '
            'why it is hard to find, what you did with it -- with a line of '
            'the model beside each one.'),

 30: lambda: F.function_map(
        [('How much is this?', 'asking the price'),
         ('Have you got any rice?', 'asking whether the shop has something'),
         ('I think the change is wrong.', 'saying there is a problem, carefully'),
         ('Could I have a bag, please?', 'asking politely for something')],
        height=580,
        alt='Four things you say in a shop, each with an arrow to what it does: '
            'asking the price, asking whether the shop has something, saying there '
            'is a problem carefully, and asking politely for something.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'Sorry \u2014 I think the change is wrong.'),
         ('Assistant', 'person', 'What did you give me?'),
         ('Yuki', 'computer', 'And it was eleven forty.'),
         ('Assistant', 'person', 'I gave you change from a ten.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: Sorry \u2014 I think the change is wrong. Assistant: What did '
            'you give me? Yuki: And it was eleven forty. Assistant: I gave '
            'you change from a ten.'),

 32: lambda: F.sequence_steps(
        [('Thank them.', 'list'),
         ('Say what you gave and what it cost.', 'pricetag'),
         ('Wait while they check.', 'tick'),
         ('Take the right change.', 'coins')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the customer',
         ['say there is a problem, politely', 'say what you gave', 'wait', 'thank them'], 'person'),
        ('Card B \u2014 the assistant',
         ['ask what they gave', 'check', 'say sorry', 'put it right'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the customer: say '
            'there is a problem, politely, say what you gave, wait, thank '
            'them. Card B \u2014 the assistant: ask what they gave, check, say '
            'sorry, put it right.'),

 34: lambda: F.writing_frame(
        [('when you shopped', 'Good afternoon.'),
         ('what the mistake is', 'I shopped at your till at about half past.'),
         ('how much', 'The tomatoes went through twice.'),
         ('a calm tone', 'I am not worried about.')],
        height=734,
        alt='The shape of the Part 7 writing task in four steps -- when you '
            'shopped, what the mistake is, how much, a calm tone -- with a '
            'line of the model beside each one.'),

 35: lambda: F.before_after(
        ('The old market', ['you ask, they say a number', 'a neighbour pays less',
                            'the talking is the point'], 'sun'),
        ('The big shop', ['a label on everything', 'the same price for everybody',
                          'faster, and nothing to say'], 'shop'),
        height=520,
        alt='The old market and the big shop. In the market you ask and they say a '
            'number, a neighbour pays less, and the talking is the point. In the big '
            'shop there is a label on everything, the same price for everybody, and '
            'it is faster with nothing to say.'),

        # REVIEW: icon not in the map for ['haggle', 'label', 'stranger'],

 36: lambda: F.word_grid(
        [('haggle', 'speech'), ('fixed price', 'pricetag'), ('label', 'plaque'), ('stranger', 'person')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'haggle, fixed price, label, stranger.'),
 37: lambda: F.close_scene(
        [('the till', 'coins'), ('the notebook', 'notebook'),
         ('bread and milk', 'bread'), ('Friday', 'calendar')],
        height=460,
        alt='The notebook under the till, drawn as the week it runs on: the '
            'till it lives under, the book of names and small numbers, the '
            'bread and milk a man takes with no money, and the Friday when '
            'Amina crosses the line out.'),

 38: lambda: F.decision_fork(
        'You run a small shop. Do you keep a book like this?',
        [('Keep the book',
          ['it costs very little', 'people come back'], 'notebook'),
         ('Take only money',
          ['nobody moves away owing', 'the shop is the same as every other'],
          'coins'),
         ('Only for people you know',
          ['you know who comes back', 'a stranger has no page'], 'person')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: keep the book, which costs very little and '
            'brings people back; take only money, and the shop is the same as '
            'every other shop; or keep it only for people you have known a '
            'long time.'),

 39: lambda: F.bank_strip(
        [('change', 'coins'), ('balcony', 'balcony'), ('basket', 'basket'),
         ('a little', 'bottle'), ('fresh', 'apple'), ('aisle', 'aisle'),
         ('a few', 'stones'), ('timetable', 'timetable')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'change, balcony, basket, a little, fresh, aisle, a few, '
            'timetable.'),

 40: lambda: F.progress_strip(
        [('I can name the main things in a food shop', False),
         ('I can use a, some, a few and a little', False),
         ('I can understand somebody buying food at a shop or a market', False),
         ('I can describe a meal I cook in 50–70 words', False),
         ('I can say politely that something is wrong and sort it out', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('basket', 'basket'), ('aisle', 'aisle'), ('receipt', 'receipt'), ('fridge', 'fridge'), ('weigh', 'scales'), ('fresh', 'apple'), ('slice', 'slice'), ('bottle', 'bottle'), ('kilo', 'scales'), ('sugar', 'sugar')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 4 as picture cards on one page: '
            'basket, aisle, receipt, fridge, weigh, fresh, slice, bottle, '
            'kilo, sugar.'),
}
