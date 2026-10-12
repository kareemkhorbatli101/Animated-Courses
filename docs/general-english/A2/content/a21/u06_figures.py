"""EFDL A2 Unit 6 -- Getting There. Prepositions of movement; have to."""
from _common import make, runner, P, C

UNIT, BOOK = 6, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Sam explains the route',
    lambda: P.two_talk('stop', 'lili', 'sam', 'Do I have to change?',
                       'Yes, at the station.',
                       pose_a='stand', pose_b='point'))
fig(2, 'W', 'data', 'The town and the routes',
    lambda: P.town_map([('Station', 0.06, 0.08, 0.26, 0.24, 'navy'),
                        ('Airport', 0.62, 0.06, 0.28, 0.22, 'blue'),
                        ('Market', 0.08, 0.68, 0.24, 0.22, 'green'),
                        ('Hill Road', 0.60, 0.66, 0.30, 0.24, 'red'),
                        ('Park', 0.88, 0.32, 0.11, 0.34, 'leaf')]))
fig(3, 'W', 'lexis', 'Six ways to travel',
    lambda: P.object_cards([(1, 'train', 'green'), (2, 'car', 'blue'),
                            (3, 'bike', 'red'), (4, 'plane', None),
                            (5, 'boat', 'amber'), (6, 'ticket', None)],
                           cols=6, h=320))

fig(4, '1', 'contrast', 'Across, along, through, past',
    lambda: P.blocks([[('across', 'teal'), ('the road', None)],
                      [('along', 'amber'), ('the river', None)],
                      [('through', 'purple'), ('the tunnel', None)],
                      [('past', 'green'), ('the market', None)]]))
fig(5, '1', 'contrast', 'Have to and do not have to',
    lambda: P.blocks([[('I have to', 'red'), ('change at the station.', None)],
                      [('I do not have to', 'green'), ('buy a ticket today.', None)]],
                     legend=[('there is no choice', 'red'),
                             ('it is not necessary', 'green')]))
fig(6, '1', 'data', 'Four travellers this morning',
    lambda: P.people_row([('sam', 'Sam', 'hold', 'timetable'),
                          ('lili', 'Lili', 'carry', 'suitcase'),
                          ('omar', 'Omar', 'carry', 'backpack'),
                          ('rosa', 'Rosa', 'carry', 'basket')], label_size=30))
fig(7, '1', 'contrast', 'Linking the words together',
    lambda: P.contraction([('have to', 'hafto', 've t'),
                           ('has to', 'hasto', 's t'),
                           ('going to', 'gonna', 'ing t')]))
fig(8, '1', 'document', 'The timetable at the stop',
    lambda: P.register('BUS 12 · GREENFIELD',
                       (['Leaves', 'Station', 'Market', 'Hill Road'],
                        [0.24, 0.26, 0.24, 0.26]),
                       [('07.10', '07.22', '07.34', '07.41'),
                        ('07.40', '07.52', '08.04', '08.11'),
                        ('08.10', '08.22', '08.34', '08.41')]))
fig(9, '1', 'lexis', 'Five words on a journey',
    lambda: P.blocks([[('a platform', 'teal'), ('you wait there for a train', None)],
                      [('a delay', 'red'), ('it comes late', None)],
                      [('a transfer', 'amber'), ('you change to another one', None)],
                      [('luggage', 'purple'), ('the bags you take', None)],
                      [('a fare', 'green'), ('what the journey costs', None)]]))

fig(10, '2', 'contrast', 'Asking about the rules',
    lambda: P.qa_pairs([('Do I have to change?', 'Yes, at the station.'),
                        ('Do we have to book?', 'No, you do not have to.'),
                        ('Does he have to pay?', 'No, children travel free.')]))
fig(11, '2', 'data', 'Who has to do what',
    lambda: P.tick_grid(['book a seat', 'show a card', 'pay the fare'],
                        [('Lili', [True, False, True]),
                         ('Omar', [False, True, False]),
                         ('Rosa', [False, True, False])]))
fig(12, '2', 'data', 'Three ways to the airport',
    lambda: P.bar_compare('MINUTES TO THE AIRPORT',
                          [('By bus', 55, 'teal'), ('By train', 28, 'amber'),
                           ('By taxi', 22, 'navy')], unit=' min'))
fig(13, '2', 'contrast', 'Cannot and do not have to',
    lambda: P.then_now([('You do not have to run.', 'You cannot run here.'),
                        ('You do not have to pay here.',
                         'You cannot smoke here.')],
                       left='IT IS YOUR CHOICE', right='IT IS NOT ALLOWED'))
fig(14, '2', 'data', 'A four-day trip',
    lambda: P.itinerary('FOUR DAYS AWAY',
                        [('Monday', 'the station', 'We take the 07.10 train.'),
                         ('Tuesday', 'the coast', 'We walk along the beach.'),
                         ('Wednesday', 'the island', 'We go across by ferry.'),
                         ('Thursday', 'home', 'The last train is at eight.')]))
fig(15, '2', 'contrast', 'Mistakes with have to',
    lambda: P.verb_change([('I have to going.', 'I have to go.', 'new'),
                           ('He have to pay.', 'He has to pay.', 'new')], size=28))

fig(16, '3', 'data', 'Four passengers',
    lambda: P.people_row([('ben', '1', 'hold', 'phone'),
                          ('fatima', '2', 'stand', None),
                          ('marek', '3', 'hold', 'toolbox'),
                          ('nadia', '4', 'offer', 'tray')], label_size=34))
fig(17, '3', 'document', 'What the announcement said',
    lambda: P.register('GREENFIELD STATION · TODAY',
                       (['Time', 'To', 'Platform', 'Note'],
                        [0.20, 0.28, 0.22, 0.30]),
                       [('09.15', 'the coast', '2', 'on time'),
                        ('09.40', 'the city', '1', 'ten minutes late'),
                        ('10.05', 'the airport', '4', 'cancelled')]))
fig(18, '3', 'document', 'The week of travel',
    lambda: P.rota('TRAVEL THIS WEEK', ['Mon', 'Tue', 'Wed', 'Thu'],
                   [('Sam', ['bus 12', 'bus 12', 'bus 12', 'bus 12']),
                    ('Lili', ['walk', 'bus 12', 'walk', 'train']),
                    ('Omar', ['bike', 'bike', '', 'bike'])]))
fig(19, '3', 'lexis', 'Four more things to hear',
    lambda: P.object_cards([(1, 'suitcase', None), (2, 'passport', None),
                            (3, 'ticket', None), (4, 'bag', 'navy')],
                           cols=4, h=320))

fig(20, '4', 'data', 'Asking the way at the station',
    lambda: P.two_talk('stop', 'rosa', 'sam', 'Which platform?',
                       'Two. Through the tunnel.',
                       pose_a='stand', pose_b='point'))
fig(21, '4', 'contrast', 'Four questions on a journey',
    lambda: P.qa_pairs([('How long does it take?', 'About fifty minutes.'),
                        ('Do I have to change?', 'Only once, at the station.'),
                        ('How much is the fare?', 'Four fifty, one way.'),
                        ('Where do I get off?', 'At the market.')]))
fig(22, '4', 'data', 'A journey in four moments',
    lambda: P.panels([('She buys a ticket.', 'blue', 'lili', 'offer',
                       'One to the coast.'),
                      ('She waits on the platform.', 'teal', 'lili', 'stand',
                       'Ten minutes.'),
                      ('She gets on.', 'green', 'lili', 'carry',
                       'Just in time.'),
                      ('She arrives at the coast.', 'amber', 'lili', 'wave',
                       'The sea!')]))
fig(23, '4', 'data', 'Three people to ask about travel',
    lambda: P.badges([('Sam', 'driver', 'bus 12', 'navy'),
                      ('Omar', 'cyclist', 'to school', 'sky'),
                      ('Lili', 'passenger', 'the train', 'yellow')]))

fig(24, '5', 'document', 'Two ways to get there',
    lambda: P.two_text(('BY TRAIN',
                        ['Leaves every half hour.',
                         'Twenty-eight minutes to the airport.',
                         'You do not have to book.',
                         'The fare is eleven pounds.'], 'navy'),
                       ('BY BUS',
                        ['Leaves every hour.',
                         'Fifty-five minutes, through the town.',
                         'You have to pay the driver.',
                         'The fare is four fifty.'], 'teal')))
fig(25, '5', 'document', 'Messages about a delay',
    lambda: P.phone('Sam', [('me', 'The 09.40 is ten minutes late.'),
                            ('them', 'Do I have to wait on platform one?'),
                            ('me', 'Yes. The 10.05 is cancelled.'),
                            ('them', 'Then I will take the bus instead.')]))
fig(26, '5', 'document', 'The rules on the train',
    lambda: P.notice('ON THIS TRAIN', [
        ('Tickets', 'show them to the conductor'), ('Luggage', 'on the shelf'),
        ('Seats with a card', 'booked'), ('Eating', 'in carriage 4 only'),
        'You do not have to leave your seat at the station.'], col='navy'))
fig(27, '5', 'document', 'At the airport',
    lambda: P.notice('GREENFIELD AIRPORT', [
        ('Be there', 'two hours early'), ('Luggage', '23 kilos'),
        ('Security', 'no bottles over 100 ml'), ('Gate', 'closes 20 minutes before'),
        'You have to show a passport at the gate, not only at security.'],
        col='teal'))

fig(28, '6', 'document', 'A form for a journey',
    lambda: P.form('MY JOURNEY TO WORK',
                   [('How I travel', None), ('How long it takes', None),
                    ('What I have to do', None), ('The fare', None)]))
fig(29, '6', 'data', 'Four lines about getting there',
    lambda: P.writing_frame('Getting there', ['I go ', 'I have to ',
                                              'I do not have to ',
                                              'It takes about ']))
fig(30, '6', 'document', 'A model set of directions',
    lambda: P.two_text(('DIRECTIONS TO MY HOME',
                        ['Take the 12 from the station.',
                         'Go past the market and across the bridge.',
                         'Get off at the fourth stop.',
                         'You do not have to walk far. It is on the left.'],
                        'purple'),
                       ('THE FOUR LINES',
                        ['1 which bus or train',
                         '2 what you go past',
                         '3 where you get off',
                         '4 what you do not have to do'], 'steel')))

fig(31, '7', 'document', 'A real timetable',
    lambda: P.register('TRAINS TO THE AIRPORT',
                       (['Leaves', 'Arrives', 'Change', 'Fare'],
                        [0.24, 0.24, 0.26, 0.26]),
                       [('06.42', '07.10', 'no', '11.00'),
                        ('07.12', '07.48', 'at the city', '9.50'),
                        ('07.42', '08.10', 'no', '11.00'),
                        ('08.12', '08.48', 'at the city', '9.50')]))
fig(32, '7', 'document', 'How to read the timetable',
    lambda: P.notice('READING A TIMETABLE', [
        ('Leaves', 'from Greenfield'), ('Arrives', 'at the airport'),
        ('Change', 'no means a direct train'), ('Fare', 'one way, not return'),
        'A direct train costs more and takes less time.'], col='amber'))
fig(33, '7', 'data', 'Three signs on the way',
    lambda: P.signs([('STATION', 'post', 'navy'), ('AIRPORT', 'board', 'blue'),
                     ('MARKET', 'post', 'green')]))

fig(34, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'train', 'navy'), (2, 'ticket', None),
                            (3, 'suitcase', None), (4, 'passport', None),
                            (5, 'bike', 'green'), (6, 'plane', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'Have to in blocks',
    lambda: P.blocks([[('I', 'red'), ('have to', 'teal'), ('change.', 'purple')],
                      [('He', 'red'), ('has to', 'teal'), ('pay.', 'purple')]],
                     legend=[('who', 'red'), ('have or has to', 'teal'),
                             ('the verb', 'purple')]))
fig(36, '8', 'data', 'Three journeys compared',
    lambda: P.bar_compare('MINUTES TO THE COAST',
                          [('Train', 40, 'navy'), ('Bus', 75, 'teal'),
                           ('Car', 50, 'amber')], unit=' min'))
fig(37, '8', 'data', 'Four travellers, four answers',
    lambda: P.people_row([('sam', 'a', 'hold', 'timetable'),
                          ('omar', 'b', 'walk', 'ball'),
                          ('lili', 'c', 'carry', 'suitcase'),
                          ('rosa', 'd', 'carry', 'basket')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say how I get to work or school.',
                      'I can use have to and do not have to.',
                      'I can read a timetable and find a platform.',
                      'I can ask about a fare and a change.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
