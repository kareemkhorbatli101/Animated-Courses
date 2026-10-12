"""EFDL A2 Unit 3 -- A Place of My Own. have got; too and enough."""
from _common import make, runner, P, C

UNIT, BOOK = 3, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Marek shows Lili the flat',
    lambda: P.two_talk('door', 'lili', 'marek', 'Has it got a balcony?',
                       'Yes, and a big wardrobe.', pose_a='stand', pose_b='point'))
fig(2, 'W', 'data', 'The flat from above',
    lambda: P.room_plan([('Living room', 0.00, 0.00, 0.55, 0.58, 'teal'),
                         ('Kitchen', 0.55, 0.00, 0.45, 0.58, 'amber'),
                         ('Bedroom', 0.00, 0.58, 0.55, 0.42, 'purple'),
                         ('Bathroom', 0.55, 0.58, 0.45, 0.42, 'blue')],
                        things=[('sofa', 0.26, 0.30, None),
                                ('cooker', 0.76, 0.26, None),
                                ('bed', 0.26, 0.80, None),
                                ('bottle', 0.76, 0.80, None)]))
fig(3, 'W', 'lexis', 'Six things in a flat',
    lambda: P.object_cards([(1, 'sofa', None), (2, 'fridge', None),
                            (3, 'lamp', None), (4, 'bed', None),
                            (5, 'tv', None), (6, 'plant', None)],
                           cols=6, h=320))

fig(4, '1', 'contrast', 'Have got and has got',
    lambda: P.blocks([[('I', 'teal'), ('have got', 'amber'), ('a balcony.', None)],
                      [('The flat', 'purple'), ('has got', 'green'),
                       ('two bedrooms.', None)]],
                     legend=[('I, you, we, they', 'teal'), ('have got', 'amber'),
                             ('he, she, it', 'purple'), ('has got', 'green')]))
fig(5, '1', 'contrast', 'The short forms of have got',
    lambda: P.contraction([('I have got', "I've got", 'have'),
                           ('it has got', "it's got", 'has'),
                           ('we have not got', "we haven't got", 'have no')]))
fig(6, '1', 'data', 'Four tenants and their rooms',
    lambda: P.people_row([('lili', 'Lili', 'stand', None),
                          ('ben', 'Ben', 'hold', 'phone'),
                          ('rosa', 'Rosa', 'carry', 'basket'),
                          ('omar', 'Omar', 'carry', 'backpack')],
                         label_size=30))
fig(7, '1', 'contrast', 'Too and enough',
    lambda: P.blocks([[('too small', 'red'), ('more than you want', None)],
                      [('big enough', 'green'), ('as much as you need', None)],
                      [('not big enough', 'amber'), ('less than you need', None)]]))
fig(8, '1', 'document', 'Three flats to rent',
    lambda: P.register('GREENFIELD · FLATS TO RENT',
                       (['Flat', 'Rooms', 'Rent', 'Deposit'],
                        [0.24, 0.24, 0.26, 0.26]),
                       [('Hill Road 11', '2', '600', '600'),
                        ('Park Street 4', '1', '450', '450'),
                        ('Station Road 9', '3', '820', '900')]))
fig(9, '1', 'lexis', 'Five words about a home',
    lambda: P.blocks([[('furnished', 'teal'), ('the furniture is there', None)],
                      [('spacious', 'green'), ('there is a lot of room', None)],
                      [('cosy', 'amber'), ('small and warm', None)],
                      [('bright', 'blue'), ('a lot of light comes in', None)],
                      [('deposit', 'purple'), ('money you get back', None)]]))

fig(10, '2', 'contrast', 'Asking with have got',
    lambda: P.qa_pairs([('Have you got a garage?', "No, I haven't."),
                        ('Has the flat got heating?', 'Yes, it has.'),
                        ('What has it got?', 'Two rooms and a balcony.')]))
fig(11, '2', 'data', 'What each flat has got',
    lambda: P.tick_grid(['balcony', 'garage', 'dishwasher'],
                        [('Hill Road 11', [True, False, False]),
                         ('Park Street 4', [False, False, True]),
                         ('Station Road 9', [True, True, True])]))
fig(12, '2', 'data', 'Two flats side by side',
    lambda: P.compare_two(('Hill Road 11', 'door', 'teal'),
                          ('Station Road 9', 'door', 'purple'),
                          [('Rooms', '2', '3'), ('Rent', '600', '820'),
                           ('Floor', 'first', 'fourth')]))
fig(13, '2', 'contrast', 'Not big enough, or too small',
    lambda: P.then_now([('The room is too small.', 'The room is not big enough.'),
                        ('The rent is too high.', 'I have not got enough money.')],
                       left='TOO + ADJECTIVE', right='NOT + ADJECTIVE + ENOUGH'))
fig(14, '2', 'contrast', 'Sorting too and enough',
    lambda: P.sort_two(('TOO MUCH', 'red'), ('RIGHT', 'green'),
                       [('bed', None, 'too big'), ('lamp', None, 'bright enough'),
                        ('fridge', None, 'too noisy'), ('sofa', None, 'big enough'),
                        ('tv', None, 'too loud'), ('plant', None, 'tall enough')]))
fig(15, '2', 'contrast', 'Mistakes with got and enough',
    lambda: P.verb_change([('It have got a view.', 'It has got a view.', 'new'),
                           ('It is enough big.', 'It is big enough.', 'new')],
                          size=28))

fig(16, '3', 'data', 'Four people looking for a flat',
    lambda: P.people_row([('sam', '1', 'hold', 'timetable'),
                          ('fatima', '2', 'stand', None),
                          ('lili', '3', 'carry', 'suitcase'),
                          ('marek', '4', 'hold', 'toolbox')], label_size=34))
fig(17, '3', 'document', 'What the landlord said',
    lambda: P.register('THE LANDLORD · ON THE PHONE',
                       (['Flat', 'Free from', 'Rent', 'Note'],
                        [0.26, 0.22, 0.20, 0.32]),
                       [('11', 'now', '600', 'furnished'),
                        ('4', 'June', '450', 'no garage'),
                        ('9', 'August', '820', 'very bright')]))
fig(18, '3', 'data', 'A second flat from above',
    lambda: P.room_plan([('Studio', 0.00, 0.00, 0.68, 1.00, 'green'),
                         ('Bathroom', 0.68, 0.00, 0.32, 0.50, 'blue'),
                         ('Storage', 0.68, 0.50, 0.32, 0.50, 'sand')],
                        things=[('bed', 0.20, 0.32, None),
                                ('cooker', 0.50, 0.70, None),
                                ('bottle', 0.84, 0.26, None)]))
fig(19, '3', 'lexis', 'Four more things to hear',
    lambda: P.object_cards([(1, 'window', None), (2, 'door', None),
                            (3, 'chair', 'brown'), (4, 'desk', None)],
                           cols=4, h=320))

fig(20, '4', 'data', 'Rosa asks about the rent',
    lambda: P.two_talk('door', 'rosa', 'marek', 'How much is the deposit?',
                       'One month of rent.',
                       pose_a='stand', pose_b='offer'))
fig(21, '4', 'contrast', 'Four questions about a flat',
    lambda: P.qa_pairs([('How many rooms has it got?', 'Two, and a balcony.'),
                        ('Is it furnished?', 'Yes, everything is there.'),
                        ('How much is the rent?', 'Six hundred a month.'),
                        ('When is it free?', 'From the first of June.')]))
fig(22, '4', 'data', 'Moving day in four moments',
    lambda: P.panels([('She signs the lease.', 'blue', 'lili', 'write',
                       'Where do I sign?'),
                      ('She gets the keys.', 'teal', 'marek', 'offer',
                       'Here you are.'),
                      ('The sofa arrives.', 'green', 'ben', 'carry',
                       'It is heavy!'),
                      ('She makes a coffee.', 'amber', 'lili', 'hold',
                       'Home at last.')]))
fig(23, '4', 'data', 'Three people to ask about home',
    lambda: P.badges([('Rosa', 'tenant', 'flat 14', 'purple'),
                      ('Marek', 'caretaker', 'the flats', 'lime'),
                      ('Lili', 'new tenant', 'flat 11', 'yellow')]))

fig(24, '5', 'document', 'Two flats in the paper',
    lambda: P.two_text(('HILL ROAD · FLAT 11',
                        ['Two rooms, furnished.',
                         'It has got a small balcony.',
                         'Rent 600 a month.',
                         'No garage, but there is storage.'], 'navy'),
                       ('PARK STREET · FLAT 4',
                        ['One room, unfurnished.',
                         'It has got a dishwasher.',
                         'Rent 450 a month.',
                         'The flat is bright but quite small.'], 'teal')))
fig(25, '5', 'document', 'Messages about a viewing',
    lambda: P.phone('Marek', [('me', 'Has flat 11 got heating?'),
                              ('them', 'Yes, and the radiators are new.'),
                              ('me', 'Can I see it on Tuesday?'),
                              ('them', 'Come at six. I will be there.')]))
fig(26, '5', 'document', 'The rules of the lease',
    lambda: P.notice('THE LEASE · WHAT IT SAYS', [
        ('Length', 'twelve months'), ('Rent day', 'the first'),
        ('Deposit', 'one month'), ('Pets', 'ask the landlord'),
        'Tell the caretaker before you change anything in the flat.'],
        col='amber'))
fig(27, '5', 'document', 'What is in the flat',
    lambda: P.notice('FLAT 11 · THE LIST', [
        ('Kitchen', 'cooker, fridge, microwave'), ('Living room', 'sofa, lamp, tv'),
        ('Bedroom', 'bed, wardrobe, curtains'), ('Bathroom', 'shower'),
        'Tell us in seven days if something is missing.'], col='teal'))

fig(28, '6', 'document', 'A form about your home',
    lambda: P.form('MY HOME',
                   [('Rooms', None), ('It has got', None),
                    ('It has not got', None), ('What I like', None)]))
fig(29, '6', 'data', 'Four lines about your home',
    lambda: P.writing_frame('My home', ['My flat has got ', 'It has not got ',
                                        'The kitchen is too ',
                                        'The living room is ']))
fig(30, '6', 'document', 'A model advert',
    lambda: P.two_text(('LILI WRITES AN ADVERT',
                        ['Two rooms on Hill Road.',
                         'It has got a balcony and new heating.',
                         'It has not got a garage.',
                         'The rent is 600 and the deposit is one month.'],
                        'purple'),
                       ('THE FOUR LINES',
                        ['1 how many rooms, and where',
                         '2 what it has got',
                         '3 what it has not got',
                         '4 the rent and the deposit'], 'steel')))

fig(31, '7', 'document', 'A rental advert',
    lambda: P.notice('TO RENT · 9 STATION ROAD', [
        ('Rooms', '3'), ('Rent a month', '820'), ('Deposit', '900'),
        ('Free from', '1 August'),
        'Furnished, with a garage. Telephone the agent before Friday.'],
        col='green'))
fig(32, '7', 'document', 'What it costs in a year',
    lambda: P.register('9 STATION ROAD · THE COSTS',
                       (['What', 'How often', 'How much'], [0.38, 0.30, 0.32]),
                       [('Rent', 'every month', '820'),
                        ('Electricity', 'every month', '60'),
                        ('Water', 'every three months', '90'),
                        ('Deposit', 'once', '900')]))
fig(33, '7', 'document', 'A form for the agent',
    lambda: P.form('THE AGENT · ABOUT YOU',
                   [('Name', 'Lili Chen'), ('Works at', 'the cafe'),
                    ('Can pay', '650 a month'),
                    ('Can move', '1 June')], filled=True))

fig(34, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'bed', None), (2, 'sofa', None),
                            (3, 'fridge', None), (4, 'lamp', None),
                            (5, 'window', None), (6, 'tv', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'Have got in blocks',
    lambda: P.blocks([[('It', 'red'), ('has got', 'teal'), ('a balcony.', 'purple')],
                      [('We', 'red'), ("haven't got", 'amber'),
                       ('a garage.', 'purple')]],
                     legend=[('who or what', 'red'), ('has got', 'teal'),
                             ("haven't got", 'amber'), ('the thing', 'purple')]))
fig(36, '8', 'contrast', 'Four short forms to write',
    lambda: P.contraction([('she has got', "she's got", 'has'),
                           ('they have got', "they've got", 'have'),
                           ('it has not got', "it hasn't got", 'has no')]))
fig(37, '8', 'data', 'Four homes, four answers',
    lambda: P.people_row([('rosa', 'a', 'carry', 'basket'),
                          ('lili', 'b', 'stand', None),
                          ('omar', 'c', 'walk', 'ball'),
                          ('sam', 'd', 'hold', 'timetable')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what my home has got.',
                      'I can use too and enough.',
                      'I can read an advert for a flat.',
                      'I can ask about rent and a deposit.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
