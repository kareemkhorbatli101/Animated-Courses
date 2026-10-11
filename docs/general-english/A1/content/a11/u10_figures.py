"""EFDL A1.1 Unit 10 -- Last Weekend. was / were, past time words."""
from _common import make, runner, P, C

UNIT, BOOK = 10, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'contrast', 'Last weekend and now',
    lambda: P.then_now([('I was at the beach.', 'I am at work.'),
                        ('We were happy.', 'We are tired.'),
                        ('It was sunny.', 'It is cold.')]))
fig(2, 'W', 'lexis', 'Six places and things',
    lambda: P.object_cards([(1, 'sun', None), (2, 'tree', None), (3, 'suitcase', None),
                            (4, 'car', 'red'), (5, 'cake', None), (6, 'ball', None)],
                           cols=6, h=320))

fig(3, '1', 'lexis', 'Four feelings',
    lambda: P.people_row([('nadia', 'happy', 'wave', None),
                          ('marek', 'tired', 'stand', 'toolbox'),
                          ('omar', 'hungry', 'stand', None),
                          ('rosa', 'fine', 'carry', 'basket')]))
fig(4, '1', 'data', 'Where people were',
    lambda: P.town_map([('PARK', 0.04, 0.08, 0.26, 0.26, 'green'),
                        ('MUSEUM', 0.60, 0.06, 0.32, 0.28, 'purple'),
                        ('CAFE', 0.06, 0.64, 0.24, 0.26, 'red'),
                        ('HOME', 0.58, 0.64, 0.30, 0.26, 'amber')]))
fig(5, '1', 'contrast', 'Yesterday and last week',
    lambda: P.blocks([[('yesterday', 'red'), ('one day ago', None)],
                      [('last night', 'teal'), ('the night before', None)],
                      [('last weekend', 'purple'), ('Saturday and Sunday', None)]],
                     legend=[('past time', 'red')]))
fig(6, '1', 'document', 'A weekend list',
    lambda: P.register('LAST WEEKEND',
                       (['Name', 'Where', 'Day'], [0.32, 0.36, 0.32]),
                       [('Nadia', 'at the cafe', 'Saturday'),
                        ('Omar', 'at the park', 'Saturday'),
                        ('Lili', 'at home', 'Sunday'),
                        ('Sam', 'at the beach', 'Sunday')]))

fig(7, '2', 'contrast', 'was and were',
    lambda: P.blocks([[('I', 'red'), ('was', 'teal'), ('at home.', None)],
                      [('He', 'red'), ('was', 'teal'), ('at work.', None)],
                      [('We', 'red'), ('were', 'purple'), ('at the park.', None)],
                      [('They', 'red'), ('were', 'purple'), ('happy.', None)]],
                     legend=[('the person', 'red'), ('one', 'teal'), ('more', 'purple')]))
fig(8, '2', 'contrast', 'The short negative',
    lambda: P.contraction([('was not', "wasn't", 'o'), ('were not', "weren't", 'o')]))
fig(9, '2', 'contrast', 'Questions about the past',
    lambda: P.qa_pairs([('Were you at home?', 'Yes, I was.'),
                        ('Was she at work?', "No, she wasn't."),
                        ('Where were they?', 'At the museum.')]))

fig(10, '3', 'data', 'Four people last weekend',
    lambda: P.people_row([('sam', '1', 'carry', 'suitcase'), ('nadia', '2', 'offer',
                                                              'tray'),
                          ('omar', '3', 'walk', 'ball'), ('rosa', '4', 'stand',
                                                          'basket')],
                         label_size=34))
fig(11, '3', 'data', 'Where everyone was',
    lambda: P.tick_grid(['at home', 'at work', 'at the park'],
                        [('Saturday', [False, True, False]),
                         ('Sunday', [True, False, True])]))
fig(12, '3', 'document', 'The weather last week',
    lambda: P.register('LAST WEEK · THE WEATHER',
                       (['Day', 'It was', 'We were'], [0.34, 0.33, 0.33]),
                       [('Friday', 'cold', 'at home'), ('Saturday', 'sunny', 'at the park'),
                        ('Sunday', 'cold', 'at the museum')]))

fig(13, '4', 'data', 'Nadia asks about the weekend',
    lambda: P.two_talk('cafe', 'lili', 'nadia', 'Where were you on Sunday?',
                       'I was at the beach.', pose_a='stand', pose_b='offer'))
fig(14, '4', 'contrast', 'Ask about the weekend',
    lambda: P.qa_pairs([('How was your weekend?', 'It was great.'),
                        ('Were you at home?', "No, I wasn't."),
                        ('Who were you with?', 'With my family.')]))

fig(15, '5', 'document', 'A note about a trip',
    lambda: P.notice('A TRIP ON SATURDAY', [
        ('Where', 'the beach'), ('Bus', 'number 12'), ('Time', '8.00'),
        ('Price', '6.00'),
        'It was sunny. We were very happy.']))
fig(16, '5', 'document', 'Messages after the weekend',
    lambda: P.phone('Sam', [('them', 'Were you at the beach?'), ('me', 'Yes, I was.'),
                            ('them', 'How was it?'), ('me', 'It was great!')]))

fig(17, '6', 'document', 'A form about your weekend',
    lambda: P.form('MY WEEKEND',
                   [('On Saturday I was', None), ('On Sunday I was', None),
                    ('I was with', None), ('It was', None)]))
fig(18, '6', 'data', 'Four lines about last weekend',
    lambda: P.writing_frame('Last weekend', ['On Saturday I was ', 'I was with ',
                                             'It was ', 'On Sunday we were ']))

fig(19, '7', 'document', 'The bus to the beach',
    lambda: P.register('BUS 12 · TO THE BEACH',
                       (['Day', 'First bus', 'Last bus', 'Price'], [0.26, 0.26, 0.24,
                                                                    0.24]),
                       [('Saturday', '8.00', '19.00', '6.00'),
                        ('Sunday', '9.00', '18.00', '6.00'),
                        ('Monday', 'no bus', 'no bus', '-')]))
fig(20, '7', 'contrast', 'Then and now',
    lambda: P.then_now([('The cafe was closed.', 'The cafe is open.'),
                        ('We were at the beach.', 'We are at school.')],
                       left='LAST SUNDAY', right='TODAY'))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'sun', None), (2, 'suitcase', None), (3, 'tree', None),
                            (4, 'car', 'teal'), (5, 'cake', None), (6, 'coin', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say where I was.',
                      'I can use was and were.',
                      'I can say yesterday and last weekend.',
                      'I can ask How was it?']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
