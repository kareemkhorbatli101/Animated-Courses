"""EFDL A1.2 Unit 16 -- Things I Like Doing. like/love/hate + ing."""
from _common import make, runner, P, C

UNIT, BOOK = 16, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Four people and four hobbies',
    lambda: P.tick_grid(['dancing', 'reading', 'cooking', 'swimming'],
                        [('Nadia', [True, False, True, False]),
                         ('Ben', [True, True, False, False]),
                         ('Lili', [False, True, False, True]),
                         ('Omar', [False, False, False, True])]))
fig(2, 'W', 'lexis', 'Six things to do',
    lambda: P.object_cards([(1, 'guitar', None), (2, 'book', 'purple'),
                            (3, 'ball', None), (4, 'camera', None),
                            (5, 'bike', 'red'), (6, 'cooker', None)],
                           cols=6, h=320))

fig(3, '1', 'contrast', 'The verb takes ing',
    lambda: P.verb_change([('dance', 'dancing', 'add'), ('sing', 'singing', 'add'),
                           ('swim', 'swimming', 'add'), ('paint', 'painting', 'add')]))
fig(4, '1', 'contrast', 'How much you like it',
    lambda: P.blocks([[('I love', 'green'), ('dancing.', None)],
                      [('I like', 'teal'), ('reading.', None)],
                      [("I don't like", 'amber'), ('running.', None)],
                      [('I hate', 'red'), ('waiting.', None)]],
                     legend=[('a lot', 'green'), ('yes', 'teal'),
                             ('no', 'amber'), ('never', 'red')]))
fig(5, '1', 'data', 'Four people doing things',
    lambda: P.people_row([('ben', 'Ben', 'hold', 'guitar'),
                          ('lili', 'Lili', 'hold', 'book'),
                          ('omar', 'Omar', 'walk', 'ball'),
                          ('rosa', 'Rosa', 'carry', 'basket')]))
fig(6, '1', 'document', 'The free time club',
    lambda: P.register('HILL ROAD · FREE TIME',
                       (['Club', 'Day', 'Who goes'], [0.32, 0.30, 0.38]),
                       [('Dancing', 'Monday', 'Nadia and Ben'),
                        ('Painting', 'Tuesday', 'Rosa'),
                        ('Swimming', 'Thursday', 'Lili and Omar'),
                        ('Chess', 'Friday', 'Marek')]))

fig(7, '2', 'contrast', 'like plus ing',
    lambda: P.blocks([[('I', 'red'), ('like', 'teal'), ('dancing.', 'purple')],
                      [('She', 'red'), ('likes', 'teal'), ('reading.', 'purple')],
                      [('They', 'red'), ('hate', 'teal'), ('waiting.', 'purple')]],
                     legend=[('the person', 'red'), ('like or hate', 'teal'),
                             ('verb + ing', 'purple')]))
fig(8, '2', 'contrast', 'Questions about free time',
    lambda: P.qa_pairs([('Do you like dancing?', 'Yes, I love it.'),
                        ('Does she like cooking?', "No, she doesn't."),
                        ('What do you like doing?', 'I like painting.')]))
fig(9, '2', 'data', 'Who likes what',
    lambda: P.tick_grid(['music', 'sport', 'films'],
                        [('Ben', [True, False, True]),
                         ('Omar', [False, True, True]),
                         ('Rosa', [True, False, False])]))

fig(10, '3', 'data', 'Four voices about hobbies',
    lambda: P.people_row([('nadia', '1', 'offer', 'tray'), ('marek', '2', 'hold',
                                                            'toolbox'),
                          ('fatima', '3', 'stand', None), ('sam', '4', 'stand',
                                                           'timetable')],
                         label_size=34))
fig(11, '3', 'document', 'A notice about the clubs',
    lambda: P.notice('FREE TIME AT HILL ROAD', [
        ('Dancing', 'Monday 19.00'), ('Painting', 'Tuesday 18.00'),
        ('Swimming', 'Thursday 17.30'), ('Chess', 'Friday 19.30'),
        'Everyone can come. It is free.']))
fig(12, '3', 'lexis', 'Four more things to do',
    lambda: P.object_cards([(1, 'camera', None), (2, 'guitar', None),
                            (3, 'bike', 'green'), (4, 'ball', None)],
                           cols=4, h=320))

fig(13, '4', 'data', 'Ben asks about free time',
    lambda: P.two_talk('cafe', 'ben', 'nadia', 'What do you like doing?',
                       'I love cooking.', pose_a='hold', pose_b='offer'))
fig(14, '4', 'contrast', 'Ask about free time',
    lambda: P.qa_pairs([('What do you like doing?', 'I like swimming.'),
                        ('Do you like music?', 'Yes, I love it.'),
                        ('Do you hate waiting?', 'Yes, I do.')]))

fig(15, '5', 'document', 'A letter about a hobby',
    lambda: P.notice('A NOTE FROM ROSA', [
        ('I love', 'painting'), ('I like', 'the garden'),
        ('I hate', 'shopping'), ('On Tuesday', 'the club'),
        'Painting is interesting. Shopping is boring.']))
fig(16, '5', 'document', 'Messages about a film',
    lambda: P.phone('Omar', [('them', 'Do you like films?'),
                             ('me', 'Yes, I love them.'),
                             ('them', 'There is one on Friday.'),
                             ('me', 'I hate waiting. I will come early.')]))

fig(17, '6', 'document', 'A form about free time',
    lambda: P.form('MY FREE TIME',
                   [('I love', None), ('I like', None), ('I hate', None),
                    ('My club', None)]))
fig(18, '6', 'data', 'Four lines about you',
    lambda: P.writing_frame('Free time', ['I love ', 'I like ', "I don't like ",
                                          'I hate ']))

fig(19, '7', 'document', 'The club prices',
    lambda: P.register('CLUBS · PRICES',
                       (['Club', 'Day', 'Price'], [0.36, 0.32, 0.32]),
                       [('Dancing', 'Monday', 'free'), ('Painting', 'Tuesday', '2.00'),
                        ('Swimming', 'Thursday', '3.00'), ('Chess', 'Friday', 'free')]))
fig(20, '7', 'data', 'How many people go',
    lambda: P.rank_three('THE MOST PEOPLE',
                         [('Swimming', 'ball', None, '24'),
                          ('Dancing', 'guitar', None, '18'),
                          ('Chess', 'book', 'purple', '6')]))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'guitar', None), (2, 'camera', None),
                            (3, 'ball', None), (4, 'book', 'green'),
                            (5, 'bike', 'purple'), (6, 'cooker', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what I like doing.',
                      'I can use love, like and hate.',
                      'I can add ing after like.',
                      'I can ask What do you like doing?']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
