"""EFDL A1.1 Unit 5 -- Every Day. Present simple I/you/we/they, time, days."""
from _common import make, runner, P, C

UNIT, BOOK = 5, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'A day on Hill Road',
    lambda: P.panels([('7.00', 'amber', 'nadia', 'stand', 'I get up at seven.'),
                      ('9.00', 'sky', 'lili', 'walk', 'I start work at nine.'),
                      ('18.30', 'indigo', 'sam', 'wave', 'I finish at half past six.')]))
fig(2, 'W', 'data', 'Five times',
    lambda: P.clocks([(7, 0, 1), (9, 0, 2), (12, 30, 3), (15, 0, 4), (18, 30, 5)]))

fig(3, '1', 'lexis', 'A day in six pictures',
    lambda: P.object_cards([(1, 'bed', 'sky'), (2, 'cup', None), (3, 'bag', 'brown'),
                            (4, 'bike', 'red'), (5, 'book', 'purple'), (6, 'clock', None)],
                           cols=6, h=320))
fig(4, '1', 'data', 'Five more times',
    lambda: P.clocks([(8, 0, 1), (10, 30, 2), (13, 0, 3), (16, 30, 4), (20, 0, 5)]))
fig(5, '1', 'contrast', 'at and on',
    lambda: P.blocks([[('I start', None), ('at', 'red'), ('nine.', None)],
                      [('I work', None), ('on', 'teal'), ('Monday.', None)],
                      [('We finish', None), ('at', 'red'), ('half past five.', None)]],
                     legend=[('a time', 'red'), ('a day', 'teal')]))
fig(6, '1', 'document', 'The days of the week',
    lambda: P.register('MY WEEK',
                       (['Day', 'Morning', 'Evening'], [0.34, 0.33, 0.33]),
                       [('Monday', 'work', 'school'), ('Tuesday', 'work', 'home'),
                        ('Saturday', 'home', 'the cafe'), ('Sunday', 'home', 'home')]))

fig(7, '2', 'contrast', 'I, you, we and they',
    lambda: P.blocks([[('I', 'red'), ('work', 'teal'), ('at the cafe.', None)],
                      [('You', 'red'), ('start', 'teal'), ('at nine.', None)],
                      [('We', 'red'), ('live', 'teal'), ('on Hill Road.', None)],
                      [('They', 'red'), ('finish', 'teal'), ('at six.', None)]],
                     legend=[('the person', 'red'), ('the same word', 'teal')]))
fig(8, '2', 'contrast', 'The negative',
    lambda: P.contraction([('do not', "don't", 'o')]))
fig(9, '2', 'contrast', 'Questions with do',
    lambda: P.qa_pairs([('Do you work on Monday?', 'Yes, I do.'),
                        ('Do they live here?', "No, they don't."),
                        ('What time do you start?', 'At nine.')]))

fig(10, '3', 'data', 'Four people, four times',
    lambda: P.clocks([(6, 30, 1), (8, 0, 2), (14, 0, 3), (19, 30, 4)]))
fig(11, '3', 'document', 'A week at the school',
    lambda: P.register('HILL ROAD SCHOOL · THIS WEEK',
                       (['Day', 'Class', 'Time'], [0.34, 0.34, 0.32]),
                       [('Monday', 'English 1A', '18.00'),
                        ('Wednesday', 'English 1A', '18.00'),
                        ('Friday', 'English 1B', '19.30'),
                        ('Saturday', 'Computers', '10.00')]))
fig(12, '3', 'data', 'Three people in a day',
    lambda: P.people_row([('nadia', '1', 'offer', 'tray'), ('sam', '2', 'stand',
                                                            'timetable'),
                          ('lili', '3', 'hold', 'book')], label_size=34))

fig(13, '4', 'data', 'Lili asks about the day',
    lambda: P.two_talk('cafe', 'lili', 'nadia', 'What time do you open?',
                       'We open at seven.', pose_a='stand', pose_b='offer'))
fig(14, '4', 'contrast', 'Ask about a day',
    lambda: P.qa_pairs([('What time do you get up?', 'At half past six.'),
                        ('Do you work on Sunday?', "No, I don't."),
                        ('When do you study?', 'In the evening.')]))

fig(15, '5', 'document', 'The cafe times',
    lambda: P.notice('THE CAFE · HILL ROAD', [
        ('Monday to Friday', '7.00 - 18.00'), ('Saturday', '8.00 - 16.00'),
        ('Sunday', 'closed'),
        'We open at seven on Monday.']))
fig(16, '5', 'document', 'Messages about a class',
    lambda: P.phone('Lili', [('them', 'Do you study on Monday?'), ('me', 'Yes, I do.'),
                             ('them', 'What time?'), ('me', 'At six in the evening.')]))

fig(17, '6', 'document', 'A form about your week',
    lambda: P.form('HILL ROAD SCHOOL · MY WEEK',
                   [('I get up at', None), ('I start at', None),
                    ('I finish at', None), ('My free day is', None)]))
fig(18, '6', 'data', 'Four lines about your day',
    lambda: P.writing_frame('My day', ['I get up at ', 'I start work at ',
                                       'I finish at ', 'On Sunday I ']))

fig(19, '7', 'document', 'The bus times',
    lambda: P.register('BUS 12 · HILL ROAD',
                       (['Bus', 'First', 'Last', 'Every'], [0.24, 0.26, 0.26, 0.24]),
                       [('12', '5.30', '23.30', '10 minutes'),
                        ('14', '6.00', '22.00', '20 minutes'),
                        ('20', '7.00', '19.00', '30 minutes')]))
fig(20, '7', 'data', 'Four clocks to read',
    lambda: P.clocks([(5, 30, 1), (11, 0, 2), (17, 30, 3), (23, 0, 4)]))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'clock', None), (2, 'bed', 'sky'), (3, 'cup', None),
                            (4, 'bike', 'green'), (5, 'bag', None), (6, 'book', 'red')],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what I do every day.',
                      'I can tell the time.',
                      'I can name the days of the week.',
                      'I can ask What time do you...?']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
