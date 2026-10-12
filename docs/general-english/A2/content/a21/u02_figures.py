"""EFDL A2 Unit 2 -- Every Day and Right Now. Present simple vs continuous."""
from _common import make, runner, P, C

UNIT, BOOK = 2, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Nadia talks about her week',
    lambda: P.two_talk('cafe', 'lili', 'nadia', 'What are you doing?',
                       'I am making the bread. I do it every morning.',
                       pose_a='stand', pose_b='offer'))
fig(2, 'W', 'document', 'The cafe rota this week',
    lambda: P.rota('THE CAFE · THIS WEEK', ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                   [('Nadia', ['6-2', '6-2', '6-2', '', '6-2']),
                    ('Ben', ['', '2-8', '2-8', '2-8', '2-8']),
                    ('Lili', ['2-8', '', '', '2-8', ''])]))
fig(3, 'W', 'lexis', 'Six things at work',
    lambda: P.object_cards([(1, 'tray', None), (2, 'badge', 'blue'),
                            (3, 'clock', None), (4, 'notebook', None),
                            (5, 'shirt', 'teal'), (6, 'key', None)],
                           cols=6, h=320))

fig(4, '1', 'contrast', 'Every day and right now',
    lambda: P.then_now([('I make bread every morning.', 'I am making bread now.'),
                        ('She serves the coffee.', 'She is serving a customer.'),
                        ('They work on Tuesday.', 'They are working today.')],
                       left='EVERY DAY', right='RIGHT NOW'))
fig(5, '1', 'contrast', 'Adding ing to the verb',
    lambda: P.verb_change([('work', 'working', 'add'), ('serve', 'serving', 'add'),
                           ('sit', 'sitting', 'add'), ('carry', 'carrying', 'add')]))
fig(6, '1', 'data', 'Four people, four jobs now',
    lambda: P.people_row([('nadia', 'Nadia', 'offer', 'tray'),
                          ('ben', 'Ben', 'hold', 'phone'),
                          ('marek', 'Marek', 'hold', 'toolbox'),
                          ('fatima', 'Fatima', 'stand', None)], label_size=30))
fig(7, '1', 'contrast', 'The short forms with ing',
    lambda: P.contraction([('I am working', "I'm working", 'a'),
                           ('she is serving', "she's serving", 'i'),
                           ('they are waiting', "they're waiting", 'a')]))
fig(8, '1', 'document', 'The staff list',
    lambda: P.register('THE CAFE · STAFF',
                       (['Name', 'Role', 'Shift'], [0.30, 0.36, 0.34]),
                       [('Nadia', 'cook', 'early'), ('Ben', 'counter', 'late'),
                        ('Lili', 'tables', 'late'),
                        ('Marek', 'supervisor', 'early')]))
fig(9, '1', 'lexis', 'How often we say it',
    lambda: P.blocks([[('normally', 'teal'), ('almost every day', None)],
                      [('occasionally', 'amber'), ('once a month', None)],
                      [('rarely', 'purple'), ('almost never', None)],
                      [('hardly ever', 'red'), ('two or three times', None)]]))

fig(10, '2', 'contrast', 'Am, is, are, plus ing',
    lambda: P.blocks([[('I', 'red'), ('am', 'teal'), ('working.', 'purple')],
                      [('She', 'red'), ('is', 'teal'), ('serving.', 'purple')],
                      [('They', 'red'), ('are', 'teal'), ('waiting.', 'purple')]],
                     legend=[('the person', 'red'), ('am, is, are', 'teal'),
                             ('verb + ing', 'purple')]))
fig(11, '2', 'contrast', 'Questions about now',
    lambda: P.qa_pairs([('What are you doing?', 'I am cleaning the tables.'),
                        ('Is Ben working today?', 'Yes, he is.'),
                        ('Are they waiting outside?', "No, they aren't.")]))
fig(12, '2', 'data', 'Who is doing what now',
    lambda: P.tick_grid(['serving', 'cooking', 'cleaning'],
                        [('Nadia', [False, True, False]),
                         ('Ben', [True, False, True]),
                         ('Lili', [True, False, False])]))
fig(13, '2', 'contrast', 'Two kinds of verb',
    lambda: P.sort_two(('YOU CAN SEE IT', 'teal'), ('IT IS INSIDE YOU', 'purple'),
                       [('tray', None, 'carrying'), ('cup', None, 'drinking'),
                        ('book', 'teal', 'understanding'),
                        ('clock', None, 'waiting'), ('key', None, 'wanting'),
                        ('phone', None, 'believing')]))
fig(14, '2', 'contrast', 'Every day or at the moment',
    lambda: P.then_now([('We open at six.', 'We are opening late today.'),
                        ('He never works Monday.', 'He is working this Monday.')],
                       left='ALWAYS TRUE', right='TODAY ONLY'))
fig(15, '2', 'contrast', 'Mistakes with the two tenses',
    lambda: P.verb_change([('I am work now.', 'I am working now.', 'new'),
                           ('She serving a cup.', 'She is serving a cup.', 'new')],
                          size=28))

fig(16, '3', 'data', 'Four voices at the cafe',
    lambda: P.people_row([('ben', '1', 'hold', 'phone'),
                          ('lili', '2', 'offer', 'tray'),
                          ('rosa', '3', 'carry', 'basket'),
                          ('sam', '4', 'hold', 'timetable')], label_size=34))
fig(17, '3', 'document', 'What the supervisor wrote',
    lambda: P.register('MONDAY · THE SHIFT BOOK',
                       (['Time', 'Who', 'What happened'], [0.20, 0.26, 0.54]),
                       [('6.00', 'Nadia', 'she started the bread'),
                        ('9.30', 'Lili', 'she cleaned the tables'),
                        ('13.00', 'Ben', 'he counted the money'),
                        ('20.00', 'Marek', 'he locked the door')]))
fig(18, '3', 'document', 'The hours they worked',
    lambda: P.rota('LAST WEEK · HOURS', ['Mon', 'Tue', 'Wed', 'Thu'],
                   [('Nadia', ['8', '8', '8', '0']),
                    ('Ben', ['0', '6', '6', '6']),
                    ('Lili', ['6', '0', '0', '6'])]))
fig(19, '3', 'lexis', 'Four more things to hear',
    lambda: P.object_cards([(1, 'cup', None), (2, 'bread', None),
                            (3, 'coin', None), (4, 'board', None)],
                           cols=4, h=320))

fig(20, '4', 'data', 'Lili asks Ben about work',
    lambda: P.office('lili', 'ben', 'Are you busy at the moment?',
                     'Yes. I am counting the money.'))
fig(21, '4', 'contrast', 'Four questions about today',
    lambda: P.qa_pairs([('What are you doing today?', 'I am working until eight.'),
                        ('Do you work every Tuesday?', 'No, only this week.'),
                        ('Is Nadia cooking now?', 'Yes, she is.'),
                        ('When do you finish?', 'Normally at two.')]))
fig(22, '4', 'data', 'A morning in four moments',
    lambda: P.panels([('She opens the door.', 'blue', 'nadia', 'stand',
                       'Six o\'clock.'),
                      ('She is making bread.', 'teal', 'nadia', 'offer',
                       'Every morning!'),
                      ('Ben arrives at two.', 'green', 'ben', 'walk',
                       'Good afternoon.'),
                      ('They are closing now.', 'amber', 'ben', 'wave',
                       'See you tomorrow.')]))
fig(23, '4', 'data', 'Three workmates to ask',
    lambda: P.badges([('Marek', 'supervisor', 'the flats', 'lime'),
                      ('Ben', 'counter', 'the shop', 'orange'),
                      ('Lili', 'tables', 'the cafe', 'yellow')]))

fig(24, '5', 'document', 'Two notes about the shift',
    lambda: P.two_text(('FROM MAREK',
                        ['Ben, I am leaving early today.',
                         'Can you lock the door at eight?',
                         'I normally do it, but not tonight.'], 'navy'),
                       ('FROM BEN',
                        ['Yes, no problem.',
                         'I am working until eight anyway.'], 'teal')))
fig(25, '5', 'document', 'Messages at lunchtime',
    lambda: P.phone('Nadia', [('them', 'Are you busy?'),
                              ('me', 'Yes, I am serving lunch.'),
                              ('them', 'What time do you finish?'),
                              ('me', 'Normally at two, but not today.')]))
fig(26, '5', 'document', 'A notice for the staff',
    lambda: P.notice('THE CAFE · FOR THE STAFF', [
        ('Early shift', '6.00 - 14.00'), ('Late shift', '14.00 - 20.00'),
        ('Break', '30 minutes'), ('Overtime', 'ask Marek first'),
        'Tell your supervisor if you want to swap a shift.'], col='amber'))
fig(27, '5', 'document', 'The uniform rules',
    lambda: P.notice('WHAT TO WEAR AT WORK', [
        ('Shirt', 'the green one'), ('Badge', 'every day'),
        ('Shoes', 'flat and dark'), ('Hair', 'tied back in the kitchen'),
        'We wash the shirts here. Leave yours on Friday.'], col='teal'))

fig(28, '6', 'document', 'A form about your hours',
    lambda: P.form('MY WEEK AT WORK',
                   [('I start at', None), ('I finish at', None),
                    ('My day off is', None), ('Right now I am', None)]))
fig(29, '6', 'data', 'Four lines about your day',
    lambda: P.writing_frame('My day', ['Every morning I ', 'I normally ',
                                       'Right now I am ', 'Today I am ']))
fig(30, '6', 'document', 'A model day',
    lambda: P.two_text(('BEN WRITES',
                        ['I normally start at two.',
                         'I serve customers and I count the money.',
                         'Right now I am writing this at the counter.',
                         'Today is quiet, so I am cleaning the shelves.'],
                        'purple'),
                       ('THE FOUR LINES',
                        ['1 what you normally do',
                         '2 what your job is',
                         '3 what you are doing now',
                         '4 why today is different'], 'steel')))

fig(31, '7', 'document', 'A real work rota',
    lambda: P.rota('GREENFIELD CLINIC · ROTA', ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                   [('Fatima', ['8-4', '8-4', '', '12-8', '8-4']),
                    ('Dr Okafor', ['9-5', '', '9-5', '9-5', '']),
                    ('Reception', ['8-6', '8-6', '8-6', '8-6', '8-6'])]))
fig(32, '7', 'document', 'What the rota means',
    lambda: P.notice('HOW TO READ THE ROTA', [
        ('8-4', 'you start at eight'), ('A dash', 'you are not working'),
        ('12-8', 'a late day'), ('Swap', 'ask the supervisor first'),
        'The rota changes every month. Look at it on Friday.'], col='navy'))
fig(33, '7', 'data', 'Three places people work',
    lambda: P.signs([('THE CAFE', 'board', 'red'), ('THE CLINIC', 'post', 'teal'),
                     ('THE SHOP', 'board', 'green')]))

fig(34, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'clock', None), (2, 'tray', None),
                            (3, 'badge', 'red'), (4, 'shirt', 'green'),
                            (5, 'notebook', None), (6, 'cup', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'The two tenses in blocks',
    lambda: P.blocks([[('I work', 'teal'), ('every Tuesday.', None)],
                      [('I am working', 'purple'), ('at the moment.', None)]],
                     legend=[('a habit', 'teal'), ('right now', 'purple')]))
fig(36, '8', 'contrast', 'Four verbs to change',
    lambda: P.verb_change([('serve', 'serving', 'add'), ('run', 'running', 'add'),
                           ('make', 'making', 'add'), ('wait', 'waiting', 'add')]))
fig(37, '8', 'data', 'Four workers, four answers',
    lambda: P.people_row([('nadia', 'a', 'offer', 'tray'),
                          ('marek', 'b', 'hold', 'toolbox'),
                          ('fatima', 'c', 'stand', None),
                          ('ben', 'd', 'hold', 'phone')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what I do every day.',
                      'I can say what I am doing right now.',
                      'I can read a work rota.',
                      'I can ask a workmate what they are doing.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
