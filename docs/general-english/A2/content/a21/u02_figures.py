"""Unit 2 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        2, 'Home and Neighbourhood',
        'There is, there are, some, any, much, many',
        ['I can name the rooms and parts of a building.',
         'I can use there is and there are, and some, any, much and many.',
         'I can describe a room in 50–70 words.'],
        ['home', 'shop', 'book', 'cup', 'clock'],
        alt='The opening page of Unit 2, Home and Neighbourhood: the grammar point '
            'is there is and there are with some, any, much and many, and three '
            'things the learner will be able to do by the end of the unit.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'ground floor'), ('Dani', 'book', 'first floor'),
         ('Maya', 'person', 'second floor'), ('Tomas', 'nurse', 'second floor'),
         ('Mr Okonkwo', 'home', 'fourth floor'), ('Yuki', 'cup', 'top flat')],
        height=560,
        alt='Who lives on which floor of 14 Alder Street: Amina’s shop on the ground '
            'floor, Dani on the first, Maya and Tomas on the second, Mr Okonkwo on '
            'the fourth with the best view, and Yuki in the top flat.'),

 7: lambda: F.category_set(
        [('Kitchen', 'kitchen'), ('Bathroom', 'home'), ('Bedroom', 'moon'),
         ('Living room', 'book'), ('Balcony', 'sun'), ('Entrance', 'shop')],
        height=600,
        alt='Six rooms and places in a home, each on its own card: kitchen, '
            'bathroom, bedroom, living room, balcony and entrance.'),

 8: lambda: F.label_me(
        [('roof', 0.08, 0.50), ('balcony', 0.30, 0.56), ('stairs', 0.52, 0.44),
         ('entrance', 0.74, 0.52), ('garden', 0.92, 0.46)],
        height=620, draw=F.building,
        alt='A building drawn from the side, from the roof at the top to the garden '
            'at the bottom. Five numbered lines run to the right for the learner to '
            'write roof, balcony, stairs, entrance and garden.'),

 12: lambda: F.grammar_contrast(
        ('There is', 'one thing · you cannot count it',
         'There is a shop downstairs.', [0.5]),
        ('There are', 'more than one · you can count them',
         'There are five flats.', [0.18, 0.36, 0.54, 0.72, 0.90]),
        height=640,
        alt='The unit’s grammar as two columns. On the left there is, with one mark, '
            'for one thing or a thing you cannot count. On the right there are, with '
            'five marks, for things you can count.'),

 13: lambda: F.timeline(
        [('ground floor', 'a shop'), ('first floor', 'Dani'),
         ('second floor', 'Maya and Tomas'), ('fourth floor', 'Mr Okonkwo'),
         ('top flat', 'Yuki')],
        height=460,
        alt='The building floor by floor, as a line: a shop on the ground floor, '
            'Dani on the first, Maya and Tomas on the second, Mr Okonkwo on the '
            'fourth, and Yuki in the top flat.'),

 16: lambda: F.speakers(
        [('Track 2.2', 'Yuki and the agent', 'home', 'looking at the flat'),
         ('Track 2.3', 'Dani and Mr Okonkwo', 'book', 'a problem on the stairs'),
         ('Track 2.4', 'Amina', 'shop', 'five flats, five homes')],
        height=560,
        alt='The three listenings in this unit: Yuki and the agent look at the flat, '
            'Dani and Mr Okonkwo talk about a problem on the stairs, and Amina '
            'describes five flats and five homes.'),

 21: lambda: F.cue_cards(
        ('Card A — the flat', ['welcome them', 'say how many rooms',
                               'answer one question honestly',
                               'one good thing, one less good'], 'home'),
        ('Card B — looking', ['ask about storage', 'ask about noise',
                              'ask about the rent', 'say what you think'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A, the person showing the '
            'flat: welcome them, say how many rooms, answer one question honestly, '
            'one good thing and one less good thing. Card B, the person looking: ask '
            'about storage, about noise and about the rent, then say what you think.'),

 23: lambda: F.process_strip(
        [('an empty flat', 'home'), ('a bed and a table', 'moon'),
         ('a cupboard', 'kitchen'), ('plants and a photograph', 'sun'),
         ('a home', 'cup')],
        height=460,
        alt='From empty flat to home in five stages, each with an arrow to the next: '
            'an empty flat, then a bed and a table, then a cupboard, then plants and '
            'a photograph, and at the end a home.'),

 25: lambda: F.world_strip(
        [('Brazil', 'home', 'tall blocks with a shared pool'),
         ('Morocco', 'sun', 'rooms built around a courtyard'),
         ('Sweden', 'moon', 'houses of wood with three doors')],
        height=460,
        alt='Three homes in three places: tall blocks with a shared pool in Brazil, '
            'rooms built around a courtyard in Morocco, and wooden houses with three '
            'doors in Sweden.'),

 26: lambda: F.writing_frame(
        [('What room', 'There are three things in Dani’s kitchen.'),
         ('There is / there are', 'a cupboard, a small table and one chair'),
         ('What there is not much of', 'There is not much space.'),
         ('Who uses it, and why', 'Dani cooks with the door open.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: which room, then what there is in it, then what there is not '
            'much of, and last who uses it and why.'),

 30: lambda: F.function_map(
        [('Is there any storage?', 'asking what there is'),
         ('The hot water is not working.', 'reporting a problem'),
         ('Does that include the water?', 'asking what the rent covers'),
         ('Could you look at it this week?', 'asking for a repair, politely')],
        height=580,
        alt='Four things you say about a home, each with an arrow to what it does: '
            'asking what there is, reporting a problem, asking what the rent covers, '
            'and asking for a repair politely.'),

 35: lambda: F.before_after(
        ('Before', ['eleven cars', 'nowhere to sit', 'no shade'], 'bus'),
        ('After', ['closed every Sunday', 'chairs and tables',
                   'four trees'], 'sun'),
        height=520,
        alt='Clara’s street in Brazil before and after. Before: eleven cars, nowhere '
            'to sit, no shade. After: closed every Sunday, chairs and tables, and '
            'four trees.'),

 40: lambda: F.progress_strip(
        [('I can name the rooms and parts of a building', False),
         ('I can use there is and there are', False),
         ('I can understand somebody describing a flat', False),
         ('I can describe a room in 50–70 words', False),
         ('I can report a problem and ask for a repair', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
