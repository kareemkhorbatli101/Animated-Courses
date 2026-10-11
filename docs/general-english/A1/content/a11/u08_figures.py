"""EFDL A1.1 Unit 8 -- In the Town. Places, prepositions of place, directions."""
from _common import make, runner, P, C

UNIT, BOOK = 8, 'a11'
FIGURES, fig = make(UNIT)

TOWN = [('SCHOOL', 0.04, 0.08, 0.24, 0.26, 'blue'),
        ('PARK', 0.62, 0.06, 0.32, 0.28, 'green'),
        ('CAFE', 0.06, 0.64, 0.22, 0.26, 'red'),
        ('MUSEUM', 0.58, 0.64, 0.30, 0.26, 'purple'),
        ('SHOP', 0.30, 0.08, 0.12, 0.26, 'amber')]

fig(1, 'W', 'data', 'The map of the town',
    lambda: P.town_map(TOWN))
fig(2, 'W', 'lexis', 'Six places',
    lambda: P.object_cards([(1, 'book', 'blue'), (2, 'tree', None), (3, 'cup', None),
                            (4, 'basket', None), (5, 'car', 'red'), (6, 'bike', 'green')],
                           cols=6, h=320))

fig(3, '1', 'data', 'A map with numbers',
    lambda: P.town_map([('1', 0.04, 0.08, 0.24, 0.26, 'blue'),
                        ('2', 0.62, 0.06, 0.32, 0.28, 'green'),
                        ('3', 0.06, 0.64, 0.22, 0.26, 'red'),
                        ('4', 0.58, 0.64, 0.30, 0.26, 'purple'),
                        ('5', 0.30, 0.08, 0.12, 0.26, 'amber')]))
fig(4, '1', 'contrast', 'next to and opposite',
    lambda: P.blocks([[('The shop is', None), ('next to', 'red'), ('the school.', None)],
                      [('The cafe is', None), ('opposite', 'teal'), ('the museum.', None)],
                      [('The park is', None), ('behind', 'purple'), ('the shop.', None)]],
                     legend=[('beside it', 'red'), ('across the road', 'teal'),
                             ('at the back', 'purple')]))
fig(5, '1', 'lexis', 'First, second, third',
    lambda: P.blocks([[('the', None), ('first', 'red'), ('road', None)],
                      [('the', None), ('second', 'teal'), ('road', None)],
                      [('the', None), ('third', 'purple'), ('road', None)]],
                     legend=[('1', 'red'), ('2', 'teal'), ('3', 'purple')]))
fig(6, '1', 'document', 'Where the places are',
    lambda: P.register('THE TOWN',
                       (['Place', 'Road', 'Near'], [0.34, 0.33, 0.33]),
                       [('the school', 'Hill Road', 'the shop'),
                        ('the cafe', 'Hill Road', 'the bus stop'),
                        ('the park', 'Green Road', 'the school'),
                        ('the museum', 'Green Road', 'the cafe')]))

fig(7, '2', 'contrast', 'Telling someone the way',
    lambda: P.blocks([[('Go', 'red'), ('straight on.', None)],
                      [('Turn', 'red'), ('left at the bank.', None)],
                      [('Cross', 'red'), ('the road.', None)],
                      [('Take', 'red'), ('the second road.', None)]],
                     legend=[('tell someone to do it', 'red')]))
fig(8, '2', 'contrast', 'Asking if there is one',
    lambda: P.qa_pairs([('Is there a cafe near here?', 'Yes, on Hill Road.'),
                        ('Where is the museum?', 'Opposite the cafe.'),
                        ('Is it far?', "No, it isn't.")]))
fig(9, '2', 'data', 'What is on each road',
    lambda: P.tick_grid(['a cafe', 'a shop', 'a park'],
                        [('Hill Road', [True, True, False]),
                         ('Green Road', [False, False, True]),
                         ('New Road', [True, False, False])]))

fig(10, '3', 'data', 'A map to listen to',
    lambda: P.town_map(TOWN, h=560))
fig(11, '3', 'document', 'Four places and their times',
    lambda: P.register('THE TOWN · OPEN',
                       (['Place', 'Opens', 'Closes'], [0.40, 0.30, 0.30]),
                       [('the museum', '10.00', '17.00'),
                        ('the park', '7.00', '21.00'),
                        ('the shop', '8.00', '20.00'),
                        ('the school', '9.00', '21.00')]))
fig(12, '3', 'lexis', 'Six ways to travel',
    lambda: P.object_cards([(1, 'bike', 'red'), (2, 'car', 'blue'), (3, 'bag', None),
                            (4, 'key', None), (5, 'timetable', None), (6, 'coin', None)],
                           cols=6, h=320))

fig(13, '4', 'data', 'Sam tells Lili the way',
    lambda: P.two_talk('street', 'lili', 'sam', 'Where is the museum?',
                       'Take the second road.', pose_a='stand', pose_b='point'))
fig(14, '4', 'contrast', 'Ask the way',
    lambda: P.qa_pairs([('Excuse me, where is the park?', 'Go straight on.'),
                        ('Is the bank near here?', "Yes, it's opposite the shop."),
                        ('Thank you!', "You're welcome.")]))

fig(15, '5', 'document', 'A notice in the park',
    lambda: P.notice('GREEN PARK', [
        ('Open', '7.00 - 21.00'), ('Cafe', 'in the park'),
        ('Bus', 'number 12'),
        'The museum is opposite the park.']))
fig(16, '5', 'document', 'Messages about a meeting',
    lambda: P.phone('Sam', [('them', 'Where are you?'), ('me', 'At the cafe on Hill Road.'),
                            ('them', 'Is it near the school?'),
                            ('me', "Yes, it's next to it.")]))

fig(17, '6', 'document', 'A form about your town',
    lambda: P.form('MY TOWN',
                   [('My road', None), ('Near my home', None),
                    ('Opposite my home', None), ('My favourite place', None)]))
fig(18, '6', 'data', 'Four lines about your town',
    lambda: P.writing_frame('My town', ['I live on ', 'There is a ',
                                        'It is next to ', 'The park is ']))

fig(19, '7', 'document', 'Signs in the town',
    lambda: P.signs([('GREEN PARK', 'post', 'green'), ('MUSEUM', 'board', 'purple'),
                     ('HILL ROAD', 'post', 'blue')]))
fig(20, '7', 'data', 'Three doors in the town',
    lambda: P.doors([('MUSEUM', 'purple'), ('LIBRARY', 'amber'), ('BANK', 'green')]))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'tree', None), (2, 'car', 'red'), (3, 'bike', 'blue'),
                            (4, 'book', 'amber'), (5, 'cup', None), (6, 'coin', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can name places in a town.',
                      'I can say next to and opposite.',
                      'I can ask the way.',
                      'I can tell someone the way.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
