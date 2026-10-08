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

 4: lambda: F.scene(
        [('Bread', 'shop', 'by the door'), ('Milk', 'cup', 'the fridge'),
         ('Rice', 'kitchen', 'the second aisle'), ('Tea', 'cup', 'next to the coffee'),
         ('Tins', 'home', 'the back shelf'), ('Onions', 'sun', 'a basket by the door')],
        height=560,
        alt='What Amina sells and where it is: bread by the door, milk in the fridge, '
            'rice in the second aisle, tea next to the coffee, tins on the back shelf, '
            'and a basket of onions by the door.'),

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

 16: lambda: F.speakers(
        [('Track 4.2', 'Dani and Amina', 'shop', 'in the corner shop again'),
         ('Track 4.3', 'Yuki and the stallholder', 'sun', 'at the market'),
         ('Track 4.4', 'Amina', 'cup', 'five people, five baskets')],
        height=560,
        alt='The three listenings in this unit: Dani and Amina in the corner shop, '
            'Yuki buying from a stallholder at the market, and Amina on what five '
            'baskets tell her about five people.'),

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

 23: lambda: F.process_strip(
        [('on the farm', 'sun'), ('to the market', 'bus'), ('to the shop', 'shop'),
         ('in the basket', 'kitchen'), ('on the table', 'cup')],
        height=460,
        alt='Food in five stages from the field to the table, each with an arrow to '
            'the next: grown, to the market, to the shop, into the basket, and on '
            'the table.'),

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

 30: lambda: F.function_map(
        [('How much is this?', 'asking the price'),
         ('Have you got any rice?', 'asking whether the shop has something'),
         ('I think the change is wrong.', 'saying there is a problem, carefully'),
         ('Could I have a bag, please?', 'asking politely for something')],
        height=580,
        alt='Four things you say in a shop, each with an arrow to what it does: '
            'asking the price, asking whether the shop has something, saying there '
            'is a problem carefully, and asking politely for something.'),

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

 40: lambda: F.progress_strip(
        [('I can name the main things in a food shop', False),
         ('I can use a, some, a few and a little', False),
         ('I can understand somebody buying food at a shop or a market', False),
         ('I can describe a meal I cook in 50–70 words', False),
         ('I can say politely that something is wrong and sort it out', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
