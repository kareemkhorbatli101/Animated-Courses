"""EFDL A2 Unit 1 -- Back on Hill Road. Tense review: be, present, past, will.

One figure per exercise, numbered to match: Figure 1.k belongs to the kth
exercise of the unit.
"""
from _common import make, runner, P, C

UNIT, BOOK = 1, 'a21'
FIGURES, fig = make(UNIT)

# ---------------------------------------------------------------- Warm Up
fig(1, 'W', 'data', 'Hill Road, a year later',
    lambda: P.street([('nadia', 150, 'wave', 0.4), ('ben', 330, 'stand', -0.3),
                      ('lili', 520, 'carry', 0.3), ('sam', 800, 'hold', -0.4),
                      ('fatima', 950, 'stand', 0.3), ('rosa', 1090, 'carry', -0.3),
                      ('omar', 1220, 'wave', -0.4)],
                     title='HILL ROAD'))
fig(2, 'W', 'data', 'Lili comes back',
    lambda: P.two_talk('cafe', 'lili', 'nadia', 'I came back last Friday.',
                       'Welcome home! You look well.',
                       pose_a='carry', pose_b='offer'))
fig(3, 'W', 'lexis', 'Six things in a suitcase',
    lambda: P.object_cards([(1, 'suitcase', None), (2, 'passport', None),
                            (3, 'camera', None), (4, 'book', 'teal'),
                            (5, 'envelope', None), (6, 'coat', 'navy')],
                           cols=6, h=320))

# ------------------------------------------------- Part 1 Words & Sounds
fig(4, '1', 'contrast', 'The three times, in one line',
    lambda: P.blocks([[('Last year', 'amber'), ('I lived in Spain.', None)],
                      [('Now', 'teal'), ('I live on Hill Road.', None)],
                      [('Next year', 'purple'), ('I will live here too.', None)]],
                     legend=[('before', 'amber'), ('today', 'teal'),
                             ('after', 'purple')]))
fig(5, '1', 'contrast', 'Now and then, four verbs',
    lambda: P.verb_change([('live', 'lived', 'add'), ('arrive', 'arrived', 'add'),
                           ('come', 'came', 'new'), ('go', 'went', 'new')]))
fig(6, '1', 'data', 'Four neighbours and their news',
    lambda: P.people_row([('lili', 'Lili', 'carry', 'suitcase'),
                          ('omar', 'Omar', 'carry', 'backpack'),
                          ('rosa', 'Rosa', 'carry', 'basket'),
                          ('marek', 'Marek', 'hold', 'toolbox')],
                         label_size=30))
fig(7, '1', 'contrast', 'The short forms we say',
    lambda: P.contraction([('I am', "I'm", 'a'), ('she is', "she's", 'i'),
                           ('we will', "we'll", 'wil'), ('did not', "didn't", 'o')]))
fig(8, '1', 'document', 'Who lives where now',
    lambda: P.register('HILL ROAD · THE FLATS',
                       (['Flat', 'Who', 'Since'], [0.22, 0.44, 0.34]),
                       [('11', 'Lili', 'last Friday'), ('12', 'Marek and Nadia',
                                                        'nine years'),
                        ('13', 'Ben', 'two years'), ('14', 'Rosa', 'twenty years')]))
fig(9, '1', 'lexis', 'Five words for coming back',
    lambda: P.blocks([[('abroad', 'teal'), ('in another country', None)],
                      [('arrival', 'green'), ('when you get there', None)],
                      [('departure', 'amber'), ('when you leave', None)],
                      [('reunion', 'purple'), ('friends meet again', None)],
                      [('familiar', 'blue'), ('you know it well', None)]]))

# ------------------------------------------------------- Part 2 Grammar
fig(10, '2', 'contrast', 'One line for each time',
    lambda: P.timeline([('I lived in Spain', 0.22, 'point'),
                        ('I came back on Friday', 0.80, 'point'),
                        ('I live here now', 0.86, 'span')]))
fig(11, '2', 'contrast', 'Where the question word goes',
    lambda: P.blocks([[('Where', 'red'), ('did', 'teal'), ('you', 'amber'),
                       ('live?', 'purple')],
                      [('What', 'red'), ('do', 'teal'), ('you', 'amber'),
                       ('do?', 'purple')]],
                     legend=[('question word', 'red'), ('did or do', 'teal'),
                             ('who', 'amber'), ('the verb', 'purple')]))
fig(12, '2', 'contrast', 'Asking and answering',
    lambda: P.qa_pairs([('Where did you live?', 'In Madrid, for a year.'),
                        ('Do you work there now?', 'No, I work here.'),
                        ('Will you go back?', 'Yes, I think so.')]))
fig(13, '2', 'contrast', 'Last year and next year',
    lambda: P.then_now([('I lived in Madrid.', 'I will live here.'),
                        ('I worked in a hotel.', 'I will work in the cafe.'),
                        ('I was a student.', 'I will be a teacher.')],
                       left='LAST YEAR', right='NEXT YEAR'))
fig(14, '2', 'data', 'Who did what last year',
    lambda: P.tick_grid(['moved', 'travelled', 'changed job'],
                        [('Lili', [True, True, True]),
                         ('Ben', [False, False, True]),
                         ('Rosa', [False, True, False])]))
fig(15, '2', 'contrast', 'After did, the verb goes back',
    lambda: P.verb_change([('Did you went?', 'Did you go?', 'new'),
                           ('She didn\'t came.', "She didn't come.", 'new')],
                          size=30))

# ----------------------------------------------------- Part 3 Listening
fig(16, '3', 'data', 'Four voices on the street',
    lambda: P.people_row([('nadia', '1', 'offer', 'tray'),
                          ('sam', '2', 'hold', 'timetable'),
                          ('fatima', '3', 'stand', None),
                          ('ben', '4', 'hold', 'phone')], label_size=34))
fig(17, '3', 'document', 'What Lili did in Spain',
    lambda: P.register('LILI · LAST YEAR',
                       (['When', 'Where', 'What'], [0.24, 0.32, 0.44]),
                       [('June', 'Madrid', ''),
                        ('October', 'a hotel', ''),
                        ('March', 'the coast', ''),
                        ('June', 'Hill Road', '')]))
fig(18, '3', 'document', 'The week she came back',
    lambda: P.rota('THAT WEEK', ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                   [('Lili', ['', '', 'packed', 'flew', 'arrived']),
                    ('Nadia', ['cafe', 'cafe', 'cafe', '', 'cafe']),
                    ('Omar', ['school', 'school', 'school', 'school', 'school'])]))
fig(19, '3', 'lexis', 'Four words you will hear',
    lambda: P.object_cards([(1, 'plane', None), (2, 'suitcase', None),
                            (3, 'phone', None), (4, 'key', None)],
                           cols=4, h=320))

# ------------------------------------------------------ Part 4 Speaking
fig(20, '4', 'data', 'Ben asks about the year',
    lambda: P.two_talk('street', 'ben', 'lili', 'What did you do in Spain?',
                       'I worked and I studied.', pose_a='hold', pose_b='stand'))
fig(21, '4', 'contrast', 'Four questions to ask',
    lambda: P.qa_pairs([('Where did you go?', 'I went to Spain.'),
                        ('How long were you there?', 'For a year.'),
                        ('What do you do now?', 'I work in the cafe.'),
                        ('Will you stay?', 'Yes, I will.')]))
fig(22, '4', 'data', 'A year in four pictures',
    lambda: P.panels([('She flew to Madrid.', 'blue', 'lili', 'carry',
                       'Here we go!'),
                      ('She worked in a hotel.', 'teal', 'lili', 'stand',
                       'Good morning!'),
                      ('She taught English.', 'green', 'lili', 'point',
                       'Open your books.'),
                      ('She came home.', 'amber', 'lili', 'wave',
                       "I'm back!")]))
fig(23, '4', 'data', 'Three neighbours to ask',
    lambda: P.badges([('Nadia', 'cook', 'the cafe', 'red'),
                      ('Sam', 'driver', 'bus 12', 'navy'),
                      ('Fatima', 'nurse', 'the clinic', 'teal')]))

# ------------------------------------------------------- Part 5 Reading
fig(24, '5', 'document', 'Two notes on the door',
    lambda: P.two_text(('A NOTE FROM MAREK',
                        ['Lili, welcome back!',
                         'Your key is with Rosa in flat 14.',
                         'The heating works now.'], 'navy'),
                       ('A NOTE FROM BEN',
                        ['I am at the shop until six.',
                         'Come and say hello.',
                         'I will make you a coffee.'], 'teal')))
fig(25, '5', 'document', 'A message about Friday',
    lambda: P.phone('Nadia', [('me', 'I arrive on Friday at four.'),
                              ('them', 'I will meet you at the stop.'),
                              ('me', 'Thank you! Is the cafe open?'),
                              ('them', 'Yes. We close at eight.')]))
fig(26, '5', 'document', 'A notice in the hall',
    lambda: P.notice('HILL ROAD FLATS · THIS MONTH', [
        ('Water off', 'Tuesday 9.00 - 12.00'), ('New locks', 'Thursday'),
        ('Rent day', 'the first of the month'),
        'Please tell Marek if you are away.'], col='amber'))
fig(27, '5', 'document', 'A postcard that arrived late',
    lambda: P.notice('A POSTCARD FROM MADRID', [
        ('To', 'Nadia, Hill Road'), ('From', 'Lili'),
        ('Sent', 'in April'), ('Arrived', 'in June'),
        'I will be home before this postcard!'], col='blue'))

# ------------------------------------------------------- Part 6 Writing
fig(28, '6', 'document', 'A form for the flats',
    lambda: P.form('HILL ROAD FLATS · NEW TENANT',
                   [('Name', None), ('Flat', None), ('Came from', None),
                    ('Phone', None), ('Works at', None)]))
fig(29, '6', 'data', 'Four lines about your year',
    lambda: P.writing_frame('My year', ['Last year I ', 'I lived in ',
                                        'Now I ', 'Next year I will ']))
fig(30, '6', 'document', 'A model to copy',
    lambda: P.two_text(('LILI WRITES',
                        ['Last year I lived in Madrid.',
                         'I worked in a hotel and I studied.',
                         'Now I am back on Hill Road.',
                         'Next year I will teach at the school.'], 'purple'),
                       ('THE FOUR PARTS',
                        ['1 where you were',
                         '2 what you did there',
                         '3 where you are now',
                         '4 what you will do'], 'steel')))

# --------------------------------------------- Part 7 Real-World File
fig(31, '7', 'document', 'A registration form',
    lambda: P.form('GREENFIELD LIBRARY · JOIN',
                   [('Family name', 'Chen'), ('First name', 'Lili'),
                    ('Address', '11 Hill Road'), ('Town', 'Greenfield'),
                    ('Date of birth', '14 May 2001')], filled=True))
fig(32, '7', 'document', 'What the library asks for',
    lambda: P.notice('TO JOIN THE LIBRARY', [
        ('Bring', 'one letter with your address'), ('Cost', 'free'),
        ('Books at one time', '8'), ('Keep a book for', '3 weeks'),
        'Tell us if you move to a new address.'], col='teal'))
fig(33, '7', 'data', 'Three forms, three places',
    lambda: P.signs([('LIBRARY', 'board', 'teal'), ('CLINIC', 'post', 'green'),
                     ('SCHOOL', 'board', 'blue')]))

# ------------------------------------------- Part 8 Review & Can-Do
fig(34, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'suitcase', None), (2, 'passport', None),
                            (3, 'key', None), (4, 'plane', None),
                            (5, 'camera', None), (6, 'envelope', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'The conversation, in blocks',
    lambda: P.blocks([[('Where', 'red'), ('were you?', None)],
                      [('What', 'red'), ('did you do?', None)],
                      [('How long', 'red'), ('will you stay?', None)]],
                     legend=[('the question word', 'red')]))
fig(36, '8', 'contrast', 'Four more verbs to change',
    lambda: P.verb_change([('work', 'worked', 'add'), ('stay', 'stayed', 'add'),
                           ('meet', 'met', 'new'), ('take', 'took', 'new')]))
fig(37, '8', 'data', 'Four people, four answers',
    lambda: P.people_row([('lili', 'a', 'stand', None), ('sam', 'b', 'hold',
                                                         'timetable'),
                          ('rosa', 'c', 'carry', 'basket'),
                          ('omar', 'd', 'walk', 'ball')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say where I was and what I did.',
                      'I can use the present, the past and will.',
                      'I can ask someone about their year.',
                      'I can fill in a form with my address.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
