"""EFDL A1.1 Unit 6 -- She Works Here. Present simple he/she/it, does."""
from _common import make, runner, P, C

UNIT, BOOK = 6, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Four people at work',
    lambda: P.people_row([('nadia', 'Nadia', 'offer', 'tray'),
                          ('sam', 'Sam', 'stand', 'timetable'),
                          ('fatima', 'Fatima', 'point', None),
                          ('ben', 'Ben', 'hold', 'phone')]))
fig(2, 'W', 'lexis', 'Four places of work',
    lambda: P.town_map([('CAFE', 0.05, 0.08, 0.26, 0.26, 'red'),
                        ('CLINIC', 0.62, 0.08, 0.30, 0.26, 'teal'),
                        ('SCHOOL', 0.05, 0.64, 0.28, 0.26, 'blue'),
                        ('SHOP', 0.60, 0.64, 0.32, 0.26, 'green')]))

fig(3, '1', 'lexis', 'Six jobs',
    lambda: P.people_row([('fatima', 'a nurse', 'stand', None),
                          ('nadia', 'a cook', 'carry', 'tray'),
                          ('sam', 'a driver', 'stand', 'timetable'),
                          ('marek', 'a cleaner', 'hold', 'toolbox')]))
fig(4, '1', 'document', 'Who works where',
    lambda: P.register('HILL ROAD · AT WORK',
                       (['Name', 'Job', 'Place'], [0.32, 0.34, 0.34]),
                       [('Nadia', 'a cook', 'the cafe'), ('Sam', 'a driver', 'bus 12'),
                        ('Fatima', 'a nurse', 'the clinic'),
                        ('Ben', 'a shop assistant', 'the shop')]))
fig(5, '1', 'contrast', 'The sound of the s',
    lambda: P.sort_two(('works, starts', 'blue'), ('lives, opens', 'orange'),
                       [('clock', None, 'works'), ('bed', 'sky', 'sleeps'),
                        ('book', 'purple', 'reads'), ('cup', None, 'drinks'),
                        ('key', None, 'opens'), ('bike', 'red', 'rides')]))
fig(6, '1', 'lexis', 'How often it happens',
    lambda: P.blocks([[('always', 'green'), ('every day', None)],
                      [('often', 'teal'), ('four days', None)],
                      [('sometimes', 'amber'), ('one day', None)],
                      [('never', 'red'), ('no days', None)]],
                     legend=[('how often', 'green')]))

fig(7, '2', 'contrast', 'He, she and it',
    lambda: P.blocks([[('I', 'red'), ('work', 'teal'), ('here.', None)],
                      [('She', 'red'), ('works', 'purple'), ('here.', None)],
                      [('They', 'red'), ('live', 'teal'), ('here.', None)],
                      [('He', 'red'), ('lives', 'purple'), ('here.', None)]],
                     legend=[('the person', 'red'), ('no s', 'teal'), ('with s', 'purple')]))
fig(8, '2', 'contrast', 'The negative with does',
    lambda: P.contraction([('does not', "doesn't", 'o')]))
fig(9, '2', 'contrast', 'Questions with does',
    lambda: P.qa_pairs([('Does she work here?', 'Yes, she does.'),
                        ('Does he live on Hill Road?', "No, he doesn't."),
                        ('Where does Sam work?', 'On bus 12.')]))

fig(10, '3', 'data', 'Four workers',
    lambda: P.people_row([('ben', '1', 'offer', 'phone'), ('fatima', '2', 'stand', None),
                          ('nadia', '3', 'carry', 'tray'), ('marek', '4', 'hold',
                                                            'toolbox')],
                         label_size=34))
fig(11, '3', 'document', 'A week at the clinic',
    lambda: P.register('HILL ROAD CLINIC · FATIMA',
                       (['Day', 'Starts', 'Finishes'], [0.34, 0.33, 0.33]),
                       [('Monday', '8.00', '16.00'), ('Tuesday', '8.00', '16.00'),
                        ('Thursday', '14.00', '22.00'), ('Friday', 'free', 'free')]))
fig(12, '3', 'data', 'Who does what',
    lambda: P.tick_grid(['works here', 'drives', 'cooks'],
                        [('Nadia', [True, False, True]), ('Sam', [True, True, False]),
                         ('Ben', [True, False, False])]))

fig(13, '4', 'data', 'Lili asks about Fatima',
    lambda: P.two_talk('clinic', 'lili', 'fatima', 'Does Fatima work on Friday?',
                       "No, she doesn't.", pose_a='stand', pose_b='stand'))
fig(14, '4', 'contrast', 'Ask about a person',
    lambda: P.qa_pairs([('Where does she work?', 'At the clinic.'),
                        ('Does he start at eight?', 'Yes, he does.'),
                        ('What does Ben do?', "He's a shop assistant.")]))

fig(15, '5', 'document', 'A notice about the clinic',
    lambda: P.notice('HILL ROAD CLINIC', [
        ('Monday to Thursday', '8.00 - 22.00'), ('Friday', '8.00 - 16.00'),
        ('Saturday and Sunday', 'closed'),
        'Fatima works here. She starts at eight.']))
fig(16, '5', 'document', 'Messages about a job',
    lambda: P.phone('Ben', [('them', 'Does Nadia work on Sunday?'),
                            ('me', "No, she doesn't."),
                            ('them', 'When does the cafe open?'),
                            ('me', 'At seven every day.')]))

fig(17, '6', 'document', 'A form about a person',
    lambda: P.form('HILL ROAD · A PERSON I KNOW',
                   [('Name', None), ('Job', None), ('Place', None), ('Starts at', None)]))
fig(18, '6', 'data', 'Four lines about a friend',
    lambda: P.writing_frame('My friend', ['My friend is ', 'She works ',
                                          'She starts at ', 'She never ']))

fig(19, '7', 'document', 'Three places of work',
    lambda: P.badges([('Fatima Saleh', 'Nurse', 'HILL ROAD CLINIC', 'teal'),
                      ('Ben Wright', 'Shop assistant', 'THE SHOP', 'orange'),
                      ('Marek Nowak', 'Cleaner', 'THE FLATS', 'lime')]))
fig(20, '7', 'document', 'Hours at four places',
    lambda: P.register('HILL ROAD · OPEN HOURS',
                       (['Place', 'Opens', 'Closes'], [0.40, 0.30, 0.30]),
                       [('The cafe', '7.00', '18.00'), ('The shop', '8.00', '20.00'),
                        ('The clinic', '8.00', '22.00'), ('The school', '9.00', '21.00')]))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'tray', None), (2, 'timetable', None), (3, 'phone', None),
                            (4, 'toolbox', None), (5, 'badge', 'teal'), (6, 'clock', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what another person does.',
                      'I can add s to he, she and it.',
                      'I can ask Does she...?',
                      'I can say always, often and never.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
