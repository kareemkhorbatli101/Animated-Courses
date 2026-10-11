"""EFDL A1.1 Unit 9 -- I Can Do That. can / can't, activities."""
from _common import make, runner, P, C

UNIT, BOOK = 9, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Four people and four things',
    lambda: P.tick_grid(['swim', 'drive', 'cook', 'sing'],
                        [('Nadia', [True, False, True, False]),
                         ('Sam', [False, True, False, True]),
                         ('Lili', [True, True, False, True]),
                         ('Omar', [True, False, False, True])]))
fig(2, 'W', 'lexis', 'Six things people do',
    lambda: P.object_cards([(1, 'bike', 'red'), (2, 'car', 'blue'), (3, 'guitar', None),
                            (4, 'ball', None), (5, 'book', 'green'), (6, 'cooker', None)],
                           cols=6, h=320))

fig(3, '1', 'lexis', 'Four people doing things',
    lambda: P.people_row([('nadia', 'cook', 'carry', 'tray'),
                          ('sam', 'drive', 'stand', 'timetable'),
                          ('ben', 'play', 'hold', 'guitar'),
                          ('omar', 'run', 'walk', 'ball')]))
fig(4, '1', 'contrast', 'Well or a little',
    lambda: P.blocks([[('I can sing', None), ('well', 'green')],
                      [('I can cook', None), ('a little', 'amber')],
                      [('I', None), ("can't", 'red'), ('drive', None)]],
                     legend=[('very good', 'green'), ('not much', 'amber'),
                             ('not at all', 'red')]))
fig(5, '1', 'data', 'Six things to try',
    lambda: P.object_cards([(1, 'guitar', None), (2, 'bike', 'green'), (3, 'ball', None),
                            (4, 'pen', None), (5, 'cooker', None), (6, 'phone', None)],
                           cols=6, h=320))
fig(6, '1', 'document', 'A club list',
    lambda: P.register('HILL ROAD · CLUBS',
                       (['Club', 'Day', 'Time', 'Room'], [0.28, 0.26, 0.24, 0.22]),
                       [('Football', 'Monday', '17.00', 'park'),
                        ('Music', 'Tuesday', '18.00', '14'),
                        ('Cooking', 'Thursday', '18.30', '11'),
                        ('Swimming', 'Saturday', '10.00', 'pool')]))

fig(7, '2', 'contrast', 'can and cannot',
    lambda: P.blocks([[('I', 'red'), ('can', 'teal'), ('swim.', None)],
                      [('She', 'red'), ('can', 'teal'), ('drive.', None)],
                      [('He', 'red'), ("can't", 'purple'), ('cook.', None)],
                      [('They', 'red'), ('can', 'teal'), ('sing.', None)]],
                     legend=[('the person', 'red'), ('yes', 'teal'), ('no', 'purple')]))
fig(8, '2', 'contrast', 'The short form',
    lambda: P.contraction([('cannot', "can't", 'n')]))
fig(9, '2', 'contrast', 'Questions with can',
    lambda: P.qa_pairs([('Can you swim?', 'Yes, I can.'),
                        ('Can he drive?', "No, he can't."),
                        ('Can I have some water?', 'Of course.')]))

fig(10, '3', 'data', 'Four voices to match',
    lambda: P.people_row([('lili', '1', 'hold', 'book'), ('ben', '2', 'hold', 'guitar'),
                          ('rosa', '3', 'carry', 'basket'), ('sam', '4', 'stand',
                                                             'timetable')],
                         label_size=34))
fig(11, '3', 'data', 'A grid to complete',
    lambda: P.tick_grid(['ride a bike', 'play music', 'swim'],
                        [('Ben', [True, True, False]), ('Rosa', [False, False, True]),
                         ('Omar', [True, False, True])]))
fig(12, '3', 'document', 'Who is in which club',
    lambda: P.register('CLUBS · WHO IS IN THEM',
                       (['Name', 'Club', 'Day'], [0.34, 0.34, 0.32]),
                       [('Omar', 'Football', 'Monday'), ('Ben', 'Music', 'Tuesday'),
                        ('Nadia', 'Cooking', 'Thursday'), ('Lili', 'Swimming',
                                                           'Saturday')]))

fig(13, '4', 'data', 'Ben asks Omar',
    lambda: P.two_talk('street', 'ben', 'omar', 'Can you play football?',
                       'Yes, I can!', pose_a='stand', pose_b='wave'))
fig(14, '4', 'contrast', 'Ask a friend',
    lambda: P.qa_pairs([('Can you cook?', 'A little.'),
                        ('Can you speak Spanish?', "No, I can't."),
                        ('Can you help me?', 'Yes, of course.')]))

fig(15, '5', 'document', 'A notice about the clubs',
    lambda: P.notice('CLUBS AT HILL ROAD', [
        ('Football', 'Monday 17.00'), ('Music', 'Tuesday 18.00'),
        ('Cooking', 'Thursday 18.30'),
        'You can come on any day. It is free.']))
fig(16, '5', 'document', 'Messages about a club',
    lambda: P.phone('Omar', [('them', 'Can you play football?'), ('me', 'Yes, I can.'),
                             ('them', 'The club is on Monday.'),
                             ('me', "Great. I can come.")]))

fig(17, '6', 'document', 'A form for a club',
    lambda: P.form('HILL ROAD · CLUB FORM',
                   [('Name', None), ('Club', None), ('I can', None),
                    ("I can't", None)]))
fig(18, '6', 'data', 'Four lines about you',
    lambda: P.writing_frame('What I can do', ['I can ', 'I can ', "I can't ",
                                              'I want to ']))

fig(19, '7', 'document', 'A club card',
    lambda: P.badges([('Omar Haddad', 'Football club', 'HILL ROAD', 'green'),
                      ('Ben Wright', 'Music club', 'HILL ROAD', 'purple')]))
fig(20, '7', 'document', 'The pool times',
    lambda: P.register('THE POOL',
                       (['Day', 'Opens', 'Closes', 'Price'], [0.26, 0.24, 0.24, 0.26]),
                       [('Monday', '7.00', '21.00', '3.00'),
                        ('Saturday', '8.00', '18.00', '4.00'),
                        ('Sunday', '9.00', '16.00', '4.00')]))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'guitar', None), (2, 'ball', None), (3, 'bike', 'purple'),
                            (4, 'car', 'green'), (5, 'cooker', None), (6, 'book', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what I can do.',
                      "I can say what I can't do.",
                      'I can ask Can you...?',
                      'I can say well and a little.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
