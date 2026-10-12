"""EFDL A2 Unit 7 -- Making Plans. will, going to, present continuous."""
from _common import make, runner, P, C

UNIT, BOOK = 7, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Nadia plans the party',
    lambda: P.two_talk('cafe', 'nadia', 'lili', 'We are having a party on Friday.',
                       'I will bring the cake.', pose_a='offer', pose_b='stand'))
fig(2, 'W', 'document', 'The week ahead',
    lambda: P.calendar('THIS WEEK', ['MON', 'TUE', 'WED', 'THU', 'FRI'],
                       {0: ['dentist 9.00'], 2: ['meeting 14.00'],
                        4: ['the party 19.00']}))
fig(3, 'W', 'lexis', 'Six things for a party',
    lambda: P.object_cards([(1, 'cake', None), (2, 'cup', None),
                            (3, 'guitar', None), (4, 'camera', None),
                            (5, 'envelope', None), (6, 'flag', 'red')],
                           cols=6, h=320))

fig(4, '1', 'contrast', 'Three ways to talk ahead',
    lambda: P.blocks([[('I am having', 'teal'), ('a party on Friday.', None)],
                      [('I am going to', 'amber'), ('cook all morning.', None)],
                      [('I will', 'purple'), ('bring the cake.', None)]],
                     legend=[('it is arranged', 'teal'), ('I decided before', 'amber'),
                             ('I decide now', 'purple')]))
fig(5, '1', 'contrast', 'The short form of will',
    lambda: P.contraction([('I will', "I'll", 'wil'), ('she will', "she'll", 'wil'),
                           ('will not', "won't", 'will no')]))
fig(6, '1', 'data', 'Four people with plans',
    lambda: P.people_row([('nadia', 'Nadia', 'offer', 'tray'),
                          ('lili', 'Lili', 'carry', 'basket'),
                          ('ben', 'Ben', 'hold', 'phone'),
                          ('omar', 'Omar', 'walk', 'ball')], label_size=30))
fig(7, '1', 'contrast', 'Going to, said quickly',
    lambda: P.contraction([('going to rain', 'gonna rain', 'oing t'),
                           ('going to be late', 'gonna be late', 'oing t')]))
fig(8, '1', 'document', 'The invitation',
    lambda: P.notice('YOU ARE INVITED', [
        ('What', "Nadia's birthday"), ('When', 'Friday, 19.00'),
        ('Where', 'the cafe, Hill Road'), ('Bring', 'nothing at all'),
        'Tell Nadia before Wednesday if you are coming.'], col='red'))
fig(9, '1', 'lexis', 'Five words about plans',
    lambda: P.blocks([[('an arrangement', 'teal'), ('you fixed it with somebody',
                                                    None)],
                      [('a deadline', 'red'), ('the last day it can be', None)],
                      [('to postpone', 'amber'), ('to move it later', None)],
                      [('to confirm', 'green'), ('to say yes again', None)],
                      [('a venue', 'purple'), ('the place it happens', None)]]))

fig(10, '2', 'contrast', 'Which future for which job',
    lambda: P.then_now([('I am meeting Ben at six.', 'I think it will rain.'),
                        ('We are flying on Monday.', 'I will help you with that.')],
                       left='ARRANGED ALREADY', right='DECIDED JUST NOW'))
fig(11, '2', 'contrast', 'Asking about plans',
    lambda: P.qa_pairs([('What are you doing on Friday?', 'I am going to the party.'),
                        ('Are you going to cook?', 'Yes, all morning.'),
                        ('Will you be late?', 'No, I will come at seven.')]))
fig(12, '2', 'data', 'Who is doing what on Friday',
    lambda: P.tick_grid(['coming', 'bringing food', 'staying late'],
                        [('Lili', [True, True, False]),
                         ('Ben', [True, False, True]),
                         ('Sam', [False, False, False])]))
fig(13, '2', 'contrast', 'Going to and will',
    lambda: P.blocks([[('Look at the sky.', None), ('It is going to rain.', 'amber')],
                      [('The phone is ringing.', None), ('I will answer it.', 'purple')]],
                     legend=[('you can see it coming', 'amber'),
                             ('you decide as you speak', 'purple')]))
fig(14, '2', 'data', 'Four days of arrangements',
    lambda: P.itinerary('NEXT WEEK',
                        [('Monday', 'the dentist', 'I am seeing her at nine.'),
                         ('Wednesday', 'the office', 'We are having a meeting.'),
                         ('Friday', 'the cafe', 'Nadia is having a party.'),
                         ('Sunday', 'the coast', 'We are going to swim.')]))
fig(15, '2', 'contrast', 'Mistakes with the future',
    lambda: P.verb_change([('I will to come.', 'I will come.', 'new'),
                           ('I am go to cook.', 'I am going to cook.', 'new')],
                          size=28))

fig(16, '3', 'data', 'Four replies to the invitation',
    lambda: P.people_row([('rosa', '1', 'carry', 'basket'),
                          ('marek', '2', 'hold', 'toolbox'),
                          ('fatima', '3', 'stand', None),
                          ('sam', '4', 'hold', 'timetable')], label_size=34))
fig(17, '3', 'document', 'Who said yes and no',
    lambda: P.register('THE PARTY · REPLIES',
                       (['Who', 'Coming?', 'Bringing', 'Note'],
                        [0.22, 0.22, 0.26, 0.30]),
                       [('Rosa', 'yes', 'a cake', 'she will come early'),
                        ('Marek', 'yes', 'nothing', 'he is working until eight'),
                        ('Fatima', 'no', '', 'she is on the late shift'),
                        ('Sam', 'no', '', 'he is driving that evening')]))
fig(18, '3', 'document', 'The diary for the week',
    lambda: P.rota('THE DIARY', ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                   [('Nadia', ['', 'cafe', '', 'cooking', '']),
                    ('Lili', ['', 'cafe', '', 'cafe', '']),
                    ('Ben', ['', 'shop', '', 'shop', ''])]))
fig(19, '3', 'lexis', 'Four more things to hear',
    lambda: P.object_cards([(1, 'cake', None), (2, 'clock', None),
                            (3, 'envelope', None), (4, 'phone', None)],
                           cols=4, h=320))

fig(20, '4', 'data', 'Fixing a time at work',
    lambda: P.office('lili', 'ben', 'Are you free on Wednesday?',
                     'I am seeing a client at two.'))
fig(21, '4', 'contrast', 'Four ways to arrange a time',
    lambda: P.qa_pairs([('Are you free on Friday?', 'Yes, after six.'),
                        ('Shall we say seven?', 'Seven is fine.'),
                        ('Can we postpone it?', 'Of course. Next week?'),
                        ('Will you confirm by email?', 'I will do it today.')]))
fig(22, '4', 'data', 'The party in four moments',
    lambda: P.panels([('She sends the invitation.', 'blue', 'nadia', 'write',
                       'Friday at seven.'),
                      ('They reply.', 'teal', 'lili', 'hold',
                       'I will come!'),
                      ('She is cooking.', 'green', 'nadia', 'offer',
                       'All morning.'),
                      ('Everybody arrives.', 'amber', 'ben', 'wave',
                       'Happy birthday!')]))
fig(23, '4', 'data', 'Three people to invite',
    lambda: P.badges([('Rosa', 'neighbour', 'flat 14', 'purple'),
                      ('Marek', 'caretaker', 'the flats', 'lime'),
                      ('Fatima', 'nurse', 'the clinic', 'teal')]))

fig(24, '5', 'document', 'Two replies to the same invitation',
    lambda: P.two_text(('ROSA WRITES',
                        ['Thank you for the invitation.',
                         'I am coming, and I will bring a cake.',
                         'I will arrive early to help.',
                         'See you on Friday.'], 'navy'),
                       ('SAM WRITES',
                        ['Thank you, but I am working.',
                         'I am driving the late bus that evening.',
                         'I will come to the next one.',
                         'Have a wonderful time.'], 'teal')))
fig(25, '5', 'document', 'Messages about a change',
    lambda: P.phone('Ben', [('me', 'Can we move the meeting to Thursday?'),
                            ('them', 'I am seeing a client on Thursday.'),
                            ('me', 'Friday morning then?'),
                            ('them', 'Friday is fine. I will confirm by email.')]))
fig(26, '5', 'document', 'A notice about the party',
    lambda: P.notice('THE CAFE · FRIDAY EVENING', [
        ('Closing early', '17.00'), ('The party starts', '19.00'),
        ('Open again', 'Saturday 08.00'), ('Staff', 'all welcome'),
        'We are not taking bookings for Friday evening.'], col='amber'))
fig(27, '5', 'document', 'A conference invitation',
    lambda: P.notice('GREENFIELD · ENGLISH DAY', [
        ('Date', 'Saturday 14 June'), ('Time', '10.00 - 16.00'),
        ('Venue', 'the school hall'), ('Cost', 'free for students'),
        'Confirm your place before 1 June. Lunch is not included.'], col='navy'))

fig(28, '6', 'document', 'A form for an invitation',
    lambda: P.form('MY INVITATION',
                   [('What', None), ('When', None), ('Where', None),
                    ('Reply before', None)]))
fig(29, '6', 'data', 'Four lines about next week',
    lambda: P.writing_frame('Next week', ['On Monday I am ', 'I am going to ',
                                          'I think I will ', 'I will not ']))
fig(30, '6', 'document', 'A model reply',
    lambda: P.two_text(('A MODEL REPLY',
                        ['Thank you for the invitation.',
                         'I am coming on Friday.',
                         'I am going to bring some bread.',
                         'I will arrive at about seven.'], 'purple'),
                       ('THE FOUR LINES',
                        ['1 thank them',
                         '2 say yes or no, with the arrangement',
                         '3 say what you decided before',
                         '4 say what you decide now'], 'steel')))

fig(31, '7', 'document', 'A calendar invitation',
    lambda: P.register('MEETING · INVITATION',
                       (['Field', 'What it says'], [0.34, 0.66]),
                       [('Subject', 'June plan'), ('When', 'Wed 4 June, 14.00'),
                        ('Where', 'the office, room 2'),
                        ('Reply by', 'Tuesday 12.00')]))
fig(32, '7', 'document', 'What the buttons mean',
    lambda: P.notice('ANSWERING AN INVITATION', [
        ('Accept', 'you are coming'), ('Decline', 'you are not coming'),
        ('Maybe', 'you will confirm later'), ('Propose a time',
                                              'you ask to postpone'),
        'If you decline, write one line to say why.'], col='teal'))
fig(33, '7', 'data', 'Three places to meet',
    lambda: P.signs([('THE OFFICE', 'board', 'navy'), ('THE CAFE', 'post', 'red'),
                     ('THE HALL', 'board', 'blue')]))

fig(34, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'cake', None), (2, 'envelope', None),
                            (3, 'clock', None), (4, 'camera', None),
                            (5, 'cup', None), (6, 'guitar', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'The three futures in blocks',
    lambda: P.blocks([[('I am meeting', 'teal'), ('him at six.', None)],
                      [('I am going to', 'amber'), ('cook.', None)],
                      [('I will', 'purple'), ('help you.', None)]],
                     legend=[('arranged', 'teal'), ('decided before', 'amber'),
                             ('decided now', 'purple')]))
fig(36, '8', 'contrast', 'Four short forms with will',
    lambda: P.contraction([('we will', "we'll", 'wil'),
                           ('they will', "they'll", 'wil'),
                           ('will not', "won't", 'will no')]))
fig(37, '8', 'data', 'Four people, four plans',
    lambda: P.people_row([('nadia', 'a', 'offer', 'tray'),
                          ('sam', 'b', 'hold', 'timetable'),
                          ('lili', 'c', 'carry', 'basket'),
                          ('marek', 'd', 'hold', 'toolbox')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can talk about an arrangement I made.',
                      'I can use going to and will.',
                      'I can accept or decline an invitation.',
                      'I can ask somebody to postpone a meeting.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
