"""EFDL A1.2 Unit 12 -- Last Year. Past simple, irregular verbs."""
from _common import make, runner, P, C

UNIT, BOOK = 12, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'contrast', 'Some verbs change',
    lambda: P.verb_change([('go', 'went', 'new'), ('see', 'saw', 'new'),
                           ('have', 'had', 'new'), ('walk', 'walked', 'add')]))
fig(2, 'W', 'lexis', 'Six things from last year',
    lambda: P.object_cards([(1, 'cake', None), (2, 'suitcase', None),
                            (3, 'passport', None), (4, 'plane', None),
                            (5, 'coin', None), (6, 'guitar', None)], cols=6, h=320))

fig(3, '1', 'contrast', 'Eight new past forms',
    lambda: P.verb_change([('come', 'came', 'new'), ('get', 'got', 'new'),
                           ('take', 'took', 'new'), ('give', 'gave', 'new')]))
fig(4, '1', 'contrast', 'Add it or change it',
    lambda: P.sort_two(('add ed', 'blue'), ('a new word', 'orange'),
                       [('clock', None, 'work'), ('plane', None, 'go'),
                        ('cup', None, 'drink'), ('book', 'purple', 'read'),
                        ('car', 'red', 'arrive'), ('cake', None, 'eat')]))
fig(5, '1', 'data', 'Four people last year',
    lambda: P.people_row([('sam', 'Sam', 'carry', 'suitcase'),
                          ('ben', 'Ben', 'hold', 'guitar'),
                          ('rosa', 'Rosa', 'carry', 'basket'),
                          ('lili', 'Lili', 'hold', 'book')]))
fig(6, '1', 'document', 'Where people went',
    lambda: P.register('LAST YEAR',
                       (['Who', 'Where', 'When'], [0.30, 0.38, 0.32]),
                       [('Sam', 'went to Nigeria', 'in June'),
                        ('Lili', 'went to China', 'in August'),
                        ('Ben', 'stayed at home', 'all year'),
                        ('Rosa', 'went to Spain', 'in May')]))

fig(7, '2', 'contrast', 'Did and the plain verb',
    lambda: P.blocks([[('I', 'red'), ('went', 'purple'), ('to Spain.', None)],
                      [('Did', 'teal'), ('you', 'red'), ('go', 'purple'),
                       ('to Spain?', None)],
                      [('I', 'red'), ("didn't", 'teal'), ('go', 'purple'),
                       ('to Spain.', None)]],
                     legend=[('the person', 'red'), ('did', 'teal'),
                             ('the verb', 'purple')]))
fig(8, '2', 'contrast', 'Questions and answers',
    lambda: P.qa_pairs([('Did you go to Spain?', 'Yes, I did.'),
                        ('Did she see the sea?', "No, she didn't."),
                        ('Where did they go?', 'To Nigeria.')]))
fig(9, '2', 'data', 'Who did what',
    lambda: P.tick_grid(['went away', 'saw the sea', 'took a plane'],
                        [('Sam', [True, True, True]),
                         ('Lili', [True, False, True]),
                         ('Ben', [False, False, False])]))

fig(10, '3', 'data', 'Four voices about last year',
    lambda: P.people_row([('nadia', '1', 'offer', 'tray'),
                          ('marek', '2', 'hold', 'toolbox'),
                          ('omar', '3', 'walk', 'ball'),
                          ('fatima', '4', 'stand', None)], label_size=34))
fig(11, '3', 'document', 'A birthday last year',
    lambda: P.notice("OMAR'S BIRTHDAY", [
        ('He got', 'a bike'), ('We ate', 'a big cake'),
        ('We gave him', 'a card'), ('He was', 'eight'),
        'Everybody came to the party.']))
fig(12, '3', 'lexis', 'Four ways to travel',
    lambda: P.object_cards([(1, 'plane', None), (2, 'train', 'green'),
                            (3, 'boat', 'red'), (4, 'car', 'blue')], cols=4, h=320))

fig(13, '4', 'data', 'Sam talks about last year',
    lambda: P.two_talk('street', 'lili', 'sam', 'Where did you go last year?',
                       'I went to Nigeria.', pose_a='stand', pose_b='point'))
fig(14, '4', 'contrast', 'Ask about last year',
    lambda: P.qa_pairs([('Where did you go?', 'I went to Spain.'),
                        ('Did you take a plane?', 'Yes, I did.'),
                        ('What did you see?', 'I saw the sea.')]))

fig(15, '5', 'document', 'A letter about a trip',
    lambda: P.notice('A LETTER FROM SAM', [
        ('I went to', 'Nigeria'), ('I took', 'a plane'),
        ('I saw', 'my family'), ('I came home', 'in July'),
        'I had a very good time.']))
fig(16, '5', 'document', 'Messages about a party',
    lambda: P.phone('Rosa', [('them', 'Did you come to the party?'),
                             ('me', "No, I didn't."),
                             ('them', 'We ate cake and sang.'),
                             ('me', 'I was at work!')]))

fig(17, '6', 'document', 'A form about last year',
    lambda: P.form('LAST YEAR',
                   [('I went to', None), ('I saw', None), ('I ate', None),
                    ('It was', None)]))
fig(18, '6', 'data', 'Four lines about last year',
    lambda: P.writing_frame('Last year', ['Last year I went ', 'I saw ',
                                          'I ate ', 'It was ']))

fig(19, '7', 'document', 'A plane ticket',
    lambda: P.register('FLIGHT · HILL AIRPORT',
                       (['Flight', 'To', 'Day', 'Time'], [0.22, 0.28, 0.26, 0.24]),
                       [('HR 12', 'Lagos', 'Monday', '07.40'),
                        ('HR 20', 'Madrid', 'Tuesday', '11.15'),
                        ('HR 31', 'Beijing', 'Friday', '21.00')]))
fig(20, '7', 'contrast', 'Then and now',
    lambda: P.then_now([('I went by plane.', 'I go by bus.'),
                        ('We ate at home.', 'We eat at the cafe.')],
                       left='LAST YEAR', right='THIS YEAR'))

fig(21, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'passport', None), (2, 'plane', None),
                            (3, 'cake', None), (4, 'suitcase', None),
                            (5, 'train', 'red'), (6, 'boat', 'blue')],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can use went, saw, had and got.',
                      'I can ask Did you...?',
                      'I can say what I did last year.',
                      'I can tell a friend about a trip.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
