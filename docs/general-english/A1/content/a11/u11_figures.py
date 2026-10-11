"""EFDL A1.2 Unit 11 -- A Day Out. Past simple, regular verbs."""
from _common import make, runner, P, C

UNIT, BOOK = 11, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'A day out',
    lambda: P.panels([('Morning', 'amber', 'lili', 'walk', 'I walked to the park.'),
                      ('Afternoon', 'sky', 'omar', 'stand', 'We played football.'),
                      ('Evening', 'indigo', 'nadia', 'offer', 'I cooked dinner.')]))
fig(2, 'W', 'lexis', 'Six things from the day',
    lambda: P.object_cards([(1, 'ball', None), (2, 'bike', 'red'), (3, 'cup', None),
                            (4, 'tree', None), (5, 'cake', None), (6, 'sun', None)],
                           cols=6, h=320))

fig(3, '1', 'contrast', 'Add the ending',
    lambda: P.verb_change([('walk', 'walked', 'add'), ('play', 'played', 'add'),
                           ('watch', 'watched', 'add'), ('cook', 'cooked', 'add')]))
fig(4, '1', 'contrast', 'Two endings to hear',
    lambda: P.sort_two(('walked, watched', 'blue'), ('played, opened', 'orange'),
                       [('clock', None, 'worked'), ('ball', None, 'played'),
                        ('cup', None, 'washed'), ('door', None, 'opened'),
                        ('book', 'purple', 'liked'), ('car', 'red', 'arrived')]))
fig(5, '1', 'data', 'Four people yesterday',
    lambda: P.people_row([('lili', 'Lili', 'walk', 'backpack'),
                          ('nadia', 'Nadia', 'offer', 'tray'),
                          ('marek', 'Marek', 'hold', 'toolbox'),
                          ('omar', 'Omar', 'stand', 'ball')]))
fig(6, '1', 'document', 'What happened and when',
    lambda: P.register('YESTERDAY · HILL ROAD',
                       (['Time', 'Who', 'What'], [0.24, 0.30, 0.46]),
                       [('9.00', 'Lili', 'walked to the park'),
                        ('11.00', 'Omar', 'played football'),
                        ('14.00', 'Marek', 'washed the stairs'),
                        ('18.00', 'Nadia', 'cooked dinner')]))

fig(7, '2', 'contrast', 'The form does not change',
    lambda: P.blocks([[('I', 'red'), ('walked', 'teal'), ('home.', None)],
                      [('She', 'red'), ('walked', 'teal'), ('home.', None)],
                      [('We', 'red'), ('walked', 'teal'), ('home.', None)],
                      [('They', 'red'), ('walked', 'teal'), ('home.', None)]],
                     legend=[('the person', 'red'), ('one past form', 'teal')]))
fig(8, '2', 'contrast', 'The short negative',
    lambda: P.contraction([('did not', "didn't", 'o')]))
fig(9, '2', 'contrast', 'Questions about yesterday',
    lambda: P.qa_pairs([('Did you walk home?', 'Yes, I did.'),
                        ('Did she play football?', "No, she didn't."),
                        ('What did you cook?', 'I cooked fish.')]))

fig(10, '3', 'data', 'Four voices',
    lambda: P.people_row([('ben', '1', 'hold', 'phone'), ('rosa', '2', 'carry',
                                                          'basket'),
                          ('sam', '3', 'stand', 'timetable'),
                          ('fatima', '4', 'stand', None)], label_size=34))
fig(11, '3', 'document', 'The day at the clinic',
    lambda: P.register('THE CLINIC · YESTERDAY',
                       (['Time', 'What happened'], [0.28, 0.72]),
                       [('8.00', 'Fatima started work'),
                        ('10.30', 'she helped a family'),
                        ('13.00', 'she stopped for lunch'),
                        ('16.00', 'she finished')]))
fig(12, '3', 'data', 'Four times to hear',
    lambda: P.clocks([(8, 0, 1), (10, 30, 2), (13, 0, 3), (16, 0, 4)]))

fig(13, '4', 'data', 'Lili talks about the day',
    lambda: P.two_talk('cafe', 'lili', 'nadia', 'I walked to the park.',
                       'Did you play football?', pose_a='stand', pose_b='offer'))
fig(14, '4', 'contrast', 'Ask about yesterday',
    lambda: P.qa_pairs([('What did you do?', 'I watched a film.'),
                        ('Did you work?', "No, I didn't."),
                        ('Where did you go?', 'To the park.')]))

fig(15, '5', 'document', 'A note about the trip',
    lambda: P.notice('THE PARK TRIP', [
        ('We walked', '9.00'), ('We played', '11.00'), ('We cooked', '13.00'),
        ('We arrived home', '18.00'),
        'It was sunny. Everybody liked it.']))
fig(16, '5', 'document', 'Messages after the day',
    lambda: P.phone('Omar', [('them', 'Did you play football?'), ('me', 'Yes, I did.'),
                             ('them', 'Who won?'), ('me', 'We all played. It was fun.')]))

fig(17, '6', 'document', 'A form about yesterday',
    lambda: P.form('MY DAY YESTERDAY',
                   [('In the morning I', None), ('In the afternoon I', None),
                    ('In the evening I', None), ('It was', None)]))
fig(18, '6', 'data', 'Four lines about yesterday',
    lambda: P.writing_frame('Yesterday', ['Yesterday I ', 'Then I ',
                                          'In the evening I ', 'It was ']))

fig(19, '7', 'document', 'The ticket for the park',
    lambda: P.register('GREEN PARK · TICKETS',
                       (['Ticket', 'Price', 'Time'], [0.36, 0.32, 0.32]),
                       [('one adult', '4.00', 'all day'),
                        ('one child', '2.00', 'all day'),
                        ('a family', '9.00', 'all day')]))
fig(20, '7', 'contrast', 'Yesterday and today',
    lambda: P.then_now([('I walked to work.', 'I take the bus.'),
                        ('We cooked at home.', 'We eat at the cafe.')],
                       left='YESTERDAY', right='TODAY'))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'ball', None), (2, 'sun', None), (3, 'cake', None),
                            (4, 'bike', 'green'), (5, 'tree', None), (6, 'cup', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what I did yesterday.',
                      'I can add ed to a verb.',
                      "I can use didn't.",
                      'I can ask Did you...?']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
