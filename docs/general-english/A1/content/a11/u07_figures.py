"""EFDL A1.1 Unit 7 -- Food and Drink. some/any, countable, like, prices."""
from _common import make, runner, P, C

UNIT, BOOK = 7, 'a11'
FIGURES, fig = make(UNIT)

MENU = [('Food', [('a sandwich', '3.50'), ('soup', '4.00'), ('a cake', '2.50'),
                  ('an egg', '1.20')]),
        ('Drink', [('tea', '1.50'), ('coffee', '2.00'), ('milk', '1.00'),
                   ('water', '0.80')])]

fig(1, 'W', 'data', 'A morning at the cafe',
    lambda: P.two_talk('cafe', 'lili', 'nadia', 'A coffee, please.',
                       'Here you are. Two pounds.', pose_a='stand', pose_b='offer'))
fig(2, 'W', 'lexis', 'Eight things to eat and drink',
    lambda: P.object_cards([(1, 'bread', None), (2, 'milk', None), (3, 'egg', None),
                            (4, 'fish', 'sky'), (5, 'cake', None), (6, 'apple', None),
                            (7, 'orange', None), (8, 'cup', None)], cols=4, h=460))

fig(3, '1', 'document', 'The cafe menu',
    lambda: P.menu('THE CAFE', MENU))
fig(4, '1', 'contrast', 'One or not one',
    lambda: P.sort_two(('an apple, two eggs', 'blue'), ('bread, milk', 'orange'),
                       [('apple', None, 'apple'), ('milk', None, 'milk'),
                        ('egg', None, 'egg'), ('bread', None, 'bread'),
                        ('orange', None, 'orange'), ('fish', 'sky', 'fish')]))
fig(5, '1', 'contrast', 'some and any',
    lambda: P.blocks([[('I have', None), ('some', 'teal'), ('bread.', None)],
                      [('I do not have', None), ('any', 'red'), ('milk.', None)],
                      [('Do you have', None), ('any', 'red'), ('tea?', None)]],
                     legend=[('yes', 'teal'), ('no or question', 'red')]))
fig(6, '1', 'lexis', 'Four prices',
    lambda: P.object_cards([(1, 'coin', None), (2, 'cup', None), (3, 'cake', None),
                            (4, 'bread', None)], cols=4, h=320))

fig(7, '2', 'contrast', 'like and do not like',
    lambda: P.blocks([[('I', 'red'), ('like', 'teal'), ('tea.', None)],
                      [('I', 'red'), ("don't like", 'purple'), ('coffee.', None)],
                      [('She', 'red'), ('likes', 'teal'), ('cake.', None)],
                      [('He', 'red'), ("doesn't like", 'purple'), ('fish.', None)]],
                     legend=[('the person', 'red'), ('yes', 'teal'), ('no', 'purple')]))
fig(8, '2', 'contrast', 'Asking the price',
    lambda: P.qa_pairs([('How much is a cake?', "It's 2.50."),
                        ('Do you like fish?', "No, I don't."),
                        ('Would you like tea?', 'Yes, please.')]))
fig(9, '2', 'data', 'Who likes what',
    lambda: P.tick_grid(['tea', 'coffee', 'cake', 'fish'],
                        [('Nadia', [True, True, True, False]),
                         ('Omar', [False, False, True, True]),
                         ('Rosa', [True, False, False, True])]))

fig(10, '3', 'data', 'Four orders',
    lambda: P.object_cards([(1, 'cup', None), (2, 'cake', None), (3, 'bread', None),
                            (4, 'milk', None)], cols=4, h=320))
fig(11, '3', 'document', 'What the cafe sells',
    lambda: P.register('THE CAFE · TODAY',
                       (['Thing', 'Price', 'How many'], [0.40, 0.30, 0.30]),
                       [('a sandwich', '3.50', '12'), ('a cake', '2.50', '8'),
                        ('tea', '1.50', 'a lot'), ('fish', '5.00', '0')]))
fig(12, '3', 'document', 'A shopping list',
    lambda: P.notice('SHOPPING', [
        ('bread', 'one'), ('milk', 'two'), ('eggs', 'six'), ('apples', 'four'),
        'We do not have any fish.']))

fig(13, '4', 'data', 'Omar orders',
    lambda: P.two_talk('cafe', 'omar', 'nadia', 'Can I have a cake, please?',
                       'Of course. Anything to drink?', pose_a='stand', pose_b='offer'))
fig(14, '4', 'contrast', 'At the counter',
    lambda: P.qa_pairs([('Can I have a tea, please?', 'Here you are.'),
                        ('How much is that?', "That's 1.50."),
                        ('Do you have any cake?', "Yes, we've got some.")]))

fig(15, '5', 'document', 'A longer menu',
    lambda: P.menu('THE CAFE · ALL DAY',
                   [('Food', [('soup and bread', '4.50'), ('fish and rice', '6.00'),
                              ('a cheese sandwich', '3.50')]),
                    ('Drink', [('coffee', '2.00'), ('juice', '1.80')])]))
fig(16, '5', 'document', 'Messages about lunch',
    lambda: P.phone('Lili', [('them', 'Do you like fish?'), ('me', "No, I don't."),
                             ('them', 'There is soup today.'), ('me', 'I like soup!')]))

fig(17, '6', 'document', 'A form for your order',
    lambda: P.form('THE CAFE · MY ORDER',
                   [('Food', None), ('Drink', None), ('How much', None), ('Name', None)]))
fig(18, '6', 'data', 'Four lines about food',
    lambda: P.writing_frame('Food I like', ['I like ', "I don't like ",
                                            'In the morning I have ', 'I never eat ']))

fig(19, '7', 'document', 'Prices in the shop',
    lambda: P.register('THE SHOP · PRICES',
                       (['Thing', 'Price', 'How many'], [0.40, 0.30, 0.30]),
                       [('bread', '1.20', 'one'), ('milk', '1.00', 'two'),
                        ('six eggs', '2.40', 'one box'), ('apples', '0.50', 'each')]))
fig(20, '7', 'lexis', 'Money and food',
    lambda: P.object_cards([(1, 'coin', None), (2, 'basket', None), (3, 'milk', None),
                            (4, 'egg', None), (5, 'apple', None), (6, 'bread', None)],
                           cols=6, h=320))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'cake', None), (2, 'fish', 'teal'), (3, 'milk', None),
                            (4, 'orange', None), (5, 'cup', None), (6, 'coin', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can name food and drink.',
                      'I can use some and any.',
                      'I can say what I like.',
                      'I can order and ask the price.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
