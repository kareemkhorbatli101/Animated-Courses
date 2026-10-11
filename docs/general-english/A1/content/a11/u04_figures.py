"""EFDL A1.1 Unit 4 -- Where I Live. there is/are, rooms, prepositions."""
from _common import make, runner, P, C

UNIT, BOOK = 4, 'a11'
FIGURES, fig = make(UNIT)

PLAN = [('Kitchen', 0.00, 0.00, 0.44, 0.50, 'amber'),
        ('Bedroom', 0.44, 0.00, 0.56, 0.50, 'sky'),
        ('Bathroom', 0.00, 0.50, 0.32, 0.50, 'teal'),
        ('Living room', 0.32, 0.50, 0.68, 0.50, 'lime')]
THINGS = [('cooker', 0.14, 0.28, None), ('fridge', 0.30, 0.28, None),
          ('bed', 0.70, 0.26, 'blue'), ('lamp', 0.90, 0.28, None),
          ('sofa', 0.56, 0.78, 'teal'), ('tv', 0.86, 0.78, None)]

fig(1, 'W', 'data', 'A flat on Hill Road',
    lambda: P.room_plan(PLAN, THINGS))
fig(2, 'W', 'lexis', 'Six things in a home',
    lambda: P.object_cards([(1, 'bed', 'blue'), (2, 'sofa', 'teal'), (3, 'fridge', None),
                            (4, 'cooker', None), (5, 'lamp', None), (6, 'tv', None)],
                           cols=6, h=320))

fig(3, '1', 'lexis', 'Four rooms',
    lambda: P.room_plan(PLAN, None, h=520))
fig(4, '1', 'data', 'Eight things to name',
    lambda: P.object_cards([(1, 'bed', None), (2, 'chair', 'green'), (3, 'desk', None),
                            (4, 'door', None), (5, 'window', None), (6, 'lamp', None),
                            (7, 'tv', None), (8, 'sofa', 'red')], cols=4, h=460))
fig(5, '1', 'contrast', 'in, on and under',
    lambda: P.blocks([[('The cup is', None), ('on', 'red'), ('the table.', None)],
                      [('The bag is', None), ('under', 'teal'), ('the chair.', None)],
                      [('The milk is', None), ('in', 'purple'), ('the fridge.', None)]],
                     legend=[('on top', 'red'), ('below', 'teal'), ('inside', 'purple')]))
fig(6, '1', 'contrast', 'Kitchen or bedroom',
    lambda: P.sort_two(('in the kitchen', 'amber'), ('in the bedroom', 'sky'),
                       [('cooker', None, 'a cooker'), ('bed', 'blue', 'a bed'),
                        ('fridge', None, 'a fridge'), ('lamp', None, 'a lamp'),
                        ('milk', None, 'milk'), ('book', 'purple', 'a book')]))

fig(7, '2', 'contrast', 'There is and there are',
    lambda: P.blocks([[('There is', 'red'), ('a sofa.', None)],
                      [('There are', 'teal'), ('two chairs.', None)],
                      [('There is', 'red'), ('a bed in my room.', None)],
                      [('There are', 'teal'), ('four rooms.', None)]],
                     legend=[('one', 'red'), ('more than one', 'teal')]))
fig(8, '2', 'contrast', 'The short negative',
    lambda: P.contraction([('there is not', "there isn't", 'o'),
                           ('there are not', "there aren't", 'o')]))
fig(9, '2', 'contrast', 'Asking how many',
    lambda: P.qa_pairs([('Is there a garden?', "No, there isn't."),
                        ('Are there two beds?', 'Yes, there are.'),
                        ('How many rooms are there?', 'There are four.')]))

fig(10, '3', 'document', 'Four flats',
    lambda: P.register('HILL ROAD · THE FLATS',
                       (['Flat', 'Rooms', 'Floor', 'Who'], [0.22, 0.26, 0.26, 0.26]),
                       [('11', '2', 'first', 'Lili'), ('12', '4', 'first', 'Marek'),
                        ('13', '3', 'second', 'Ben'), ('14', '2', 'second', 'Rosa')]))
fig(11, '3', 'data', 'A plan with no words',
    lambda: P.room_plan([('1', 0.00, 0.00, 0.44, 0.50, 'amber'),
                         ('2', 0.44, 0.00, 0.56, 0.50, 'sky'),
                         ('3', 0.00, 0.50, 0.32, 0.50, 'teal'),
                         ('4', 0.32, 0.50, 0.68, 0.50, 'lime')], THINGS, h=520))
fig(12, '3', 'lexis', 'Six more things',
    lambda: P.object_cards([(1, 'cup', None), (2, 'bottle', None), (3, 'plant', None),
                            (4, 'clock', None), (5, 'key', None), (6, 'bag', 'brown')],
                           cols=6, h=320))

fig(13, '4', 'data', 'Marek shows the flat',
    lambda: P.two_talk('door', 'marek', 'lili', 'There are four rooms in my flat.',
                       'Is there a garden?', pose_a='point', pose_b='stand'))
fig(14, '4', 'contrast', 'Ask about a home',
    lambda: P.qa_pairs([('Where do you live?', 'In a flat on Hill Road.'),
                        ('How many rooms are there?', 'There are three.'),
                        ('Is there a balcony?', "No, there isn't.")]))

fig(15, '5', 'document', 'A flat for rent',
    lambda: P.notice('FLAT 13 · HILL ROAD', [
        ('Rooms', 'three'), ('Floor', 'second'), ('Kitchen', 'yes'),
        ('Garden', 'no'),
        'There is a big window in the living room.']))
fig(16, '5', 'document', 'Messages about a key',
    lambda: P.phone('Marek', [('them', 'Where is the key?'),
                              ('me', "It's under the plant."),
                              ('them', "There isn't a plant here!"),
                              ('me', 'It is on the table.')]))

fig(17, '6', 'document', 'A form about your home',
    lambda: P.form('HILL ROAD · MY HOME',
                   [('House or flat', None), ('How many rooms', None),
                    ('Floor', None), ('Garden', None)]))
fig(18, '6', 'data', 'Four lines about your home',
    lambda: P.writing_frame('My home', ['I live in ', 'There are ', 'There is ',
                                        "There isn't "]))

fig(19, '7', 'document', 'What is in the rooms',
    lambda: P.register('FLAT 12 · WHAT IS IN IT',
                       (['Room', 'There is', 'There are'], [0.34, 0.33, 0.33]),
                       [('Kitchen', 'a cooker', 'two chairs'),
                        ('Bedroom', 'a bed', 'three lamps'),
                        ('Living room', 'a sofa', 'two windows'),
                        ('Bathroom', 'a shower', 'no chairs')]))
fig(20, '7', 'document', 'Doors in the flats',
    lambda: P.doors([('FLAT 11', 'green'), ('FLAT 12', 'blue'), ('FLAT 13', 'amber')]))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'fridge', None), (2, 'bed', 'purple'), (3, 'tv', None),
                            (4, 'sofa', 'green'), (5, 'cooker', None), (6, 'lamp', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can name the rooms in a home.',
                      'I can say there is and there are.',
                      'I can use in, on and under.',
                      'I can ask How many?']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
