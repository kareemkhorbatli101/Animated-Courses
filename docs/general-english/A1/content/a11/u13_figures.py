"""EFDL A1.2 Unit 13 -- Right Now. Present continuous, beside the simple."""
from _common import make, runner, P, C

UNIT, BOOK = 13, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'The class right now',
    lambda: P.classroom_scene('fatima', 'lili', 'What are you doing?',
                              "I'm writing.", sitting=['omar', 'rosa'],
                              pose_a='point', pose_b='stand'))
fig(2, 'W', 'lexis', 'Six things people wear',
    lambda: P.object_cards([(1, 'shirt', 'sky'), (2, 'coat', 'brown'),
                            (3, 'hat', 'red'), (4, 'shoes', None),
                            (5, 'dress', 'pink'), (6, 'trousers', 'blue')],
                           cols=6, h=320))

fig(3, '1', 'contrast', 'Adding ing',
    lambda: P.verb_change([('work', 'working', 'add'), ('read', 'reading', 'add'),
                           ('wait', 'waiting', 'add'), ('sit', 'sitting', 'add')]))
fig(4, '1', 'data', 'Four people doing things',
    lambda: P.people_row([('nadia', 'Nadia', 'carry', 'tray'),
                          ('ben', 'Ben', 'hold', 'phone'),
                          ('rosa', 'Rosa', 'carry', 'basket'),
                          ('marek', 'Marek', 'hold', 'toolbox')]))
fig(5, '1', 'lexis', 'What they are wearing',
    lambda: P.object_cards([(1, 'hat', 'green'), (2, 'coat', 'navy'),
                            (3, 'dress', 'purple'), (4, 'shirt', 'amber')],
                           cols=4, h=320))
fig(6, '1', 'document', 'Who is doing what',
    lambda: P.register('HILL ROAD · RIGHT NOW',
                       (['Who', 'Where', 'What'], [0.28, 0.32, 0.40]),
                       [('Nadia', 'the cafe', 'is cooking'),
                        ('Sam', 'bus 12', 'is driving'),
                        ('Lili', 'the school', 'is writing'),
                        ('Omar', 'the park', 'is running')]))

fig(7, '2', 'contrast', 'be plus ing',
    lambda: P.blocks([[('I', 'red'), ('am', 'teal'), ('reading.', 'purple')],
                      [('She', 'red'), ('is', 'teal'), ('reading.', 'purple')],
                      [('They', 'red'), ('are', 'teal'), ('reading.', 'purple')]],
                     legend=[('the person', 'red'), ('be', 'teal'),
                             ('verb + ing', 'purple')]))
fig(8, '2', 'contrast', 'Every day and right now',
    lambda: P.then_now([('I work at the cafe.', "I'm working now."),
                        ('She reads every day.', "She's reading now."),
                        ('They play on Monday.', "They're playing now.")],
                       left='EVERY DAY', right='RIGHT NOW'))
fig(9, '2', 'contrast', 'Questions about now',
    lambda: P.qa_pairs([('What are you doing?', "I'm waiting."),
                        ('Is she working?', 'Yes, she is.'),
                        ('Are they eating?', "No, they aren't.")]))

fig(10, '3', 'data', 'Four people to find',
    lambda: P.people_row([('lili', '1', 'hold', 'book'), ('sam', '2', 'stand',
                                                          'timetable'),
                          ('omar', '3', 'walk', 'ball'), ('nadia', '4', 'offer',
                                                          'tray')],
                         label_size=34))
fig(11, '3', 'data', 'A moment in the class',
    lambda: P.classroom_scene('fatima', 'omar', 'Omar, are you listening?',
                              'Yes, I am.', sitting=['lili', 'rosa'],
                              pose_a='point', pose_b='stand'))
fig(12, '3', 'document', 'Where everyone is',
    lambda: P.register('AT TWO O CLOCK',
                       (['Who', 'Where'], [0.42, 0.58]),
                       [('Ben', 'in the shop'), ('Fatima', 'at the clinic'),
                        ('Marek', 'on the stairs'), ('Rosa', 'in the park')]))

fig(13, '4', 'data', 'Ben on the phone',
    lambda: P.two_talk('street', 'ben', 'lili', 'What are you doing?',
                       "I'm waiting for the bus.", pose_a='hold', pose_b='stand'))
fig(14, '4', 'contrast', 'Ask what is happening',
    lambda: P.qa_pairs([('What are you doing?', "I'm cooking."),
                        ('Where are you going?', 'To the shop.'),
                        ('Are you working today?', 'Yes, I am.')]))

fig(15, '5', 'document', 'A notice on the door',
    lambda: P.notice('THE CAFE IS OPEN', [
        ('Nadia', 'is cooking'), ('Ben', 'is helping'),
        ('The kitchen', 'is working'),
        'We are waiting for you. Come in!']))
fig(16, '5', 'document', 'Messages right now',
    lambda: P.phone('Lili', [('them', 'What are you doing?'),
                             ('me', "I'm reading at home."),
                             ('them', "I'm waiting at the bus stop."),
                             ('me', "I'm coming now.")]))

fig(17, '6', 'document', 'A form about right now',
    lambda: P.form('RIGHT NOW',
                   [('I am', None), ('I am wearing', None),
                    ('Near me there is', None), ('Outside it is', None)]))
fig(18, '6', 'data', 'Four lines about now',
    lambda: P.writing_frame('Right now', ["I'm sitting in ", "I'm wearing ",
                                          'Near me, people are ', 'Outside it is ']))

fig(19, '7', 'document', 'The board at the station',
    lambda: P.register('HILL ROAD STATION',
                       (['Train', 'To', 'Time', 'Now'], [0.22, 0.28, 0.24, 0.26]),
                       [('A12', 'the city', '14.05', 'waiting'),
                        ('B40', 'the beach', '14.20', 'coming'),
                        ('C07', 'the airport', '14.45', 'late')]))
fig(20, '7', 'lexis', 'Three ways to travel now',
    lambda: P.object_cards([(1, 'train', 'green'), (2, 'bus', None)
                            if False else (2, 'car', 'blue'), (3, 'bike', 'red')],
                           cols=3, h=320))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'shirt', 'teal'), (2, 'hat', 'amber'),
                            (3, 'shoes', None), (4, 'coat', 'green'),
                            (5, 'dress', 'red'), (6, 'trousers', 'slate')],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what is happening now.',
                      'I can add ing to a verb.',
                      'I can ask What are you doing?',
                      'I can name six things people wear.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
