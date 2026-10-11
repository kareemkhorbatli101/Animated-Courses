"""EFDL A1.2 Unit 14 -- Next Week. going to for plans."""
from _common import make, runner, P, C

UNIT, BOOK = 14, 'a11'
FIGURES, fig = make(UNIT)

DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

fig(1, 'W', 'document', "Lili's week",
    lambda: P.calendar('NEXT WEEK', DAYS,
                       {0: ['see Nadia'], 1: ['English class'],
                        2: ['the clinic', 'football'], 4: ['the beach']}))
fig(2, 'W', 'lexis', 'Six things for a trip',
    lambda: P.object_cards([(1, 'suitcase', None), (2, 'passport', None),
                            (3, 'plane', None), (4, 'timetable', None),
                            (5, 'coin', None), (6, 'bag', 'brown')],
                           cols=6, h=320))

fig(3, '1', 'contrast', 'going to and a verb',
    lambda: P.blocks([[('I', 'red'), ('am going to', 'teal'), ('visit Spain.', None)],
                      [('She', 'red'), ('is going to', 'teal'), ('fly on Monday.', None)],
                      [('We', 'red'), ('are going to', 'teal'), ('stay a week.', None)]],
                     legend=[('the person', 'red'), ('going to', 'teal')]))
fig(4, '1', 'lexis', 'Four ways to travel',
    lambda: P.object_cards([(1, 'plane', None), (2, 'train', 'green'),
                            (3, 'boat', 'red'), (4, 'car', 'blue')], cols=4, h=320))
fig(5, '1', 'data', 'Four people with plans',
    lambda: P.people_row([('sam', 'Sam', 'carry', 'suitcase'),
                          ('lili', 'Lili', 'hold', 'book'),
                          ('nadia', 'Nadia', 'offer', 'tray'),
                          ('ben', 'Ben', 'hold', 'phone')]))
fig(6, '1', 'document', 'When people are going',
    lambda: P.register('NEXT MONTH · PLANS',
                       (['Who', 'Where', 'When', 'How'], [0.24, 0.28, 0.24, 0.24]),
                       [('Sam', 'Nigeria', 'Monday', 'plane'),
                        ('Lili', 'the beach', 'Saturday', 'train'),
                        ('Rosa', 'Spain', 'Friday', 'plane'),
                        ('Ben', 'the city', 'Sunday', 'car')]))

fig(7, '2', 'contrast', 'The short forms',
    lambda: P.contraction([('I am going', "I'm going", 'a'),
                           ('She is going', "She's going", 'i'),
                           ('We are going', "We're going", 'a')]))
fig(8, '2', 'contrast', 'Questions about plans',
    lambda: P.qa_pairs([('Are you going to fly?', 'Yes, I am.'),
                        ('Is she going to stay?', "No, she isn't."),
                        ('When are you going?', 'On Monday.')]))
fig(9, '2', 'data', 'Who is going where',
    lambda: P.tick_grid(['by plane', 'by train', 'next week'],
                        [('Sam', [True, False, True]),
                         ('Lili', [False, True, False]),
                         ('Rosa', [True, False, True])]))

fig(10, '3', 'document', 'A week to complete',
    lambda: P.calendar('MY WEEK', DAYS,
                       {0: ['work'], 2: ['the clinic'], 4: ['the park']}))
fig(11, '3', 'data', 'Four voices with plans',
    lambda: P.people_row([('rosa', '1', 'carry', 'basket'),
                          ('marek', '2', 'hold', 'toolbox'),
                          ('omar', '3', 'walk', 'ball'),
                          ('fatima', '4', 'stand', None)], label_size=34))
fig(12, '3', 'document', 'The airport board',
    lambda: P.register('HILL AIRPORT · TOMORROW',
                       (['Flight', 'To', 'Time'], [0.30, 0.38, 0.32]),
                       [('HR 12', 'Lagos', '07.40'), ('HR 20', 'Madrid', '11.15'),
                        ('HR 31', 'Beijing', '21.00')]))

fig(13, '4', 'data', 'Sam packs a suitcase',
    lambda: P.two_talk('door', 'sam', 'marek', "I'm going to fly on Monday.",
                       'Are you going to Lagos?', pose_a='carry', pose_b='stand'))
fig(14, '4', 'contrast', 'Ask about a plan',
    lambda: P.qa_pairs([('What are you going to do?', "I'm going to visit Spain."),
                        ('When are you going?', 'Next week.'),
                        ('Are you going to fly?', 'Yes, I am.')]))

fig(15, '5', 'document', 'A plan on the board',
    lambda: P.notice('THE SCHOOL TRIP', [
        ('Where', 'the beach'), ('When', 'Saturday'),
        ('How', 'by train'), ('Price', '6.00'),
        'We are going to meet at the station.']))
fig(16, '5', 'document', 'Messages about a plan',
    lambda: P.phone('Sam', [('them', 'Are you going to the beach?'),
                            ('me', "Yes, I'm going on Saturday."),
                            ('them', 'Are you going to take the train?'),
                            ('me', "Yes. I'm going to book a ticket.")]))

fig(17, '6', 'document', 'A form about next week',
    lambda: P.form('NEXT WEEK',
                   [('I am going to', None), ('When', None), ('How', None),
                    ('With', None)]))
fig(18, '6', 'data', 'Four lines about your plan',
    lambda: P.writing_frame('My plan', ["Next week I'm going to ", "I'm going on ",
                                        "I'm going by ", "I'm going with "]))

fig(19, '7', 'document', 'The train to the beach',
    lambda: P.register('TRAIN · TO THE BEACH',
                       (['Day', 'Leaves', 'Arrives', 'Price'], [0.26, 0.24, 0.26,
                                                                0.24]),
                       [('Saturday', '08.10', '09.30', '6.00'),
                        ('Sunday', '09.10', '10.30', '6.00'),
                        ('Monday', 'no train', '-', '-')]))
fig(20, '7', 'document', 'A week to fill in',
    lambda: P.calendar('YOUR WEEK', DAYS, {}))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'plane', None), (2, 'passport', None),
                            (3, 'suitcase', None), (4, 'train', 'blue'),
                            (5, 'boat', 'green'), (6, 'timetable', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what I am going to do.',
                      'I can talk about next week.',
                      'I can ask When are you going?',
                      'I can name four ways to travel.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
