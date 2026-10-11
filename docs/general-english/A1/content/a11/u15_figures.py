"""EFDL A1.2 Unit 15 -- Bigger and Better. Comparatives."""
from _common import make, runner, P, C

UNIT, BOOK = 15, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Two bikes to choose',
    lambda: P.compare_two(('The red bike', 'bike', 'red'),
                          ('The green bike', 'bike', 'green'),
                          [('Price', '120', '85'), ('Size', 'big', 'small'),
                           ('Age', 'new', 'old')]))
fig(2, 'W', 'contrast', 'Add er to the word',
    lambda: P.verb_change([('big', 'bigger', 'add'), ('old', 'older', 'add'),
                           ('cheap', 'cheaper', 'add'), ('good', 'better', 'new')]))

fig(3, '1', 'contrast', 'Opposites',
    lambda: P.blocks([[('big', 'red'), ('small', 'teal')],
                      [('old', 'red'), ('young', 'teal')],
                      [('cheap', 'red'), ('expensive', 'teal')],
                      [('fast', 'red'), ('slow', 'teal')]],
                     legend=[('one way', 'red'), ('the other way', 'teal')]))
fig(4, '1', 'data', 'Two cars to compare',
    lambda: P.compare_two(('The blue car', 'car', 'blue'),
                          ('The red car', 'car', 'red'),
                          [('Price', '4000', '7500'), ('Age', '10 years', '2 years'),
                           ('Size', 'small', 'big')]))
fig(5, '1', 'contrast', 'Long words take more',
    lambda: P.blocks([[('cheap', None), ('cheaper', 'teal')],
                      [('expensive', None), ('more expensive', 'purple')],
                      [('easy', None), ('easier', 'teal')],
                      [('difficult', None), ('more difficult', 'purple')]],
                     legend=[('add er', 'teal'), ('put more in front', 'purple')]))
fig(6, '1', 'document', 'Four things and their prices',
    lambda: P.register('THE SHOP · THIS WEEK',
                       (['Thing', 'Price', 'Size'], [0.38, 0.30, 0.32]),
                       [('a bike', '85', 'small'), ('a coat', '40', 'big'),
                        ('a bag', '18', 'small'), ('a hat', '9', 'small')]))

fig(7, '2', 'contrast', 'than between the two',
    lambda: P.blocks([[('The red bike is', None), ('bigger', 'teal'),
                       ('than', 'red'), ('the green one.', None)],
                      [('Spain is', None), ('warmer', 'teal'), ('than', 'red'),
                       ('England.', None)]],
                     legend=[('the comparing word', 'teal'), ('than', 'red')],
                     size=30))
fig(8, '2', 'contrast', 'Questions about two things',
    lambda: P.qa_pairs([('Which bike is cheaper?', 'The green one.'),
                        ('Is Spain warmer than England?', 'Yes, it is.'),
                        ('Which is better?', 'I like the red one.')]))
fig(9, '2', 'data', 'Which one is which',
    lambda: P.tick_grid(['cheaper', 'bigger', 'newer'],
                        [('The red bike', [False, True, True]),
                         ('The green bike', [True, False, False])]))

fig(10, '3', 'data', 'Two coats',
    lambda: P.compare_two(('The brown coat', 'coat', 'brown'),
                          ('The navy coat', 'coat', 'navy'),
                          [('Price', '40', '65'), ('Size', 'big', 'small')]))
fig(11, '3', 'document', 'Two towns',
    lambda: P.register('TWO TOWNS',
                       (['', 'Hill Road', 'Green Town'], [0.34, 0.33, 0.33]),
                       [('People', '4000', '12000'), ('Shops', '12', '40'),
                        ('Schools', '1', '3'), ('Parks', '2', '1')]))
fig(12, '3', 'lexis', 'Four things to compare',
    lambda: P.object_cards([(1, 'bike', 'red'), (2, 'car', 'blue'),
                            (3, 'hat', 'green'), (4, 'coat', 'brown')],
                           cols=4, h=320))

fig(13, '4', 'data', 'Choosing in the shop',
    lambda: P.two_talk('street', 'lili', 'ben', 'Which bike is cheaper?',
                       'The green one is cheaper.', pose_a='stand', pose_b='offer'))
fig(14, '4', 'contrast', 'Ask and choose',
    lambda: P.qa_pairs([('Which one is bigger?', 'The red one.'),
                        ('Is this one cheaper?', 'Yes, it is.'),
                        ('Which do you like?', 'I like the green one.')]))

fig(15, '5', 'document', 'A notice in the shop',
    lambda: P.notice('THE SHOP · SALE', [
        ('The green bike', '85'), ('The red bike', '120'),
        ('A coat', '40'), ('A hat', '9'),
        'The green bike is cheaper than the red one.']))
fig(16, '5', 'document', 'Messages about a bike',
    lambda: P.phone('Ben', [('them', 'Which bike is better?'),
                            ('me', 'The red one is newer.'),
                            ('them', 'But it is more expensive.'),
                            ('me', 'The green one is cheaper.')]))

fig(17, '6', 'document', 'A form to compare two things',
    lambda: P.form('TWO THINGS',
                   [('Thing one', None), ('Thing two', None),
                    ('Which is cheaper', None), ('Which do I want', None)]))
fig(18, '6', 'data', 'Four lines comparing',
    lambda: P.writing_frame('Two things', ['One is ', 'The other is ',
                                           'The first one is ', 'I want the ']))

fig(19, '7', 'document', 'Two buses to the beach',
    lambda: P.register('TO THE BEACH',
                       (['', 'Bus 12', 'Train A12'], [0.34, 0.33, 0.33]),
                       [('Price', '6.00', '9.00'), ('Time', '90 minutes',
                                                    '40 minutes'),
                        ('Every', '2 hours', '1 hour')]))
fig(20, '7', 'data', 'Two hats in the window',
    lambda: P.compare_two(('The red hat', 'hat', 'red'),
                          ('The green hat', 'hat', 'green'),
                          [('Price', '9', '14'), ('Size', 'small', 'big')]))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'bike', 'purple'), (2, 'car', 'green'),
                            (3, 'coat', 'navy'), (4, 'hat', 'amber'),
                            (5, 'bag', 'red'), (6, 'coin', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can compare two things.',
                      'I can add er to a short word.',
                      'I can use more with a long word.',
                      'I can say which one I want.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
