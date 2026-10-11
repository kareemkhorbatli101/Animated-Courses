"""EFDL A1.2 Unit 19 -- How Are You? have got, the body, advice."""
from _common import make, runner, P, C

UNIT, BOOK = 19, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'At the clinic',
    lambda: P.two_talk('clinic', 'ben', 'fatima', "I've got a headache.",
                       'Sit down. How long?', pose_a='stand', pose_b='point'))
fig(2, 'W', 'lexis', 'The parts of the body',
    lambda: P.body_map('omar', [('head', 'l', 0.09, 0.00),
                                ('ear', 'r', 0.22, 0.075),
                                ('hand', 'l', 0.285, 0.172),
                                ('arm', 'r', 0.39, 0.134),
                                ('stomach', 'l', 0.47, 0.02),
                                ('leg', 'r', 0.72, 0.06),
                                ('foot', 'l', 0.96, 0.07)],
                       pose='both_up'))
fig(3, '1', 'contrast', 'Have got and has got',
    lambda: P.blocks([[('I', 'teal'), ('have got', 'amber'), ('a cold.', None)],
                      [('She', 'purple'), ('has got', 'green'),
                       ('a headache.', None)]],
                     legend=[('I, you, we, they', 'teal'),
                             ('have got', 'amber'),
                             ('he, she, it', 'purple'), ('has got', 'green')]))
fig(4, '1', 'contrast', 'The short form',
    lambda: P.contraction([('I have got', "I've got", 'have'),
                           ('She has got', "She's got", 'has')]))
fig(5, '1', 'lexis', 'Five words for pain',
    lambda: P.blocks([[('a headache', 'red'), ('my head hurts', None)],
                      [('a toothache', 'amber'), ('my tooth hurts', None)],
                      [('a backache', 'purple'), ('my back hurts', None)],
                      [('a cold', 'teal'), ('I am ill', None)],
                      [('the flu', 'blue'), ('I am very ill', None)]]))
fig(6, '1', 'contrast', 'Ill and well',
    lambda: P.sort_two(('ILL', 'red'), ('WELL', 'green'),
                       [('pill', None, 'medicine'), ('bed', None, 'in bed'),
                        ('ball', None, 'football'), ('apple', None, 'fruit'),
                        ('bottle', None, 'hot water'), ('bike', None, 'a bike ride')]))

fig(7, '2', 'contrast', 'Asking and saying no',
    lambda: P.qa_pairs([('Have you got a temperature?', "Yes, I have."),
                        ('Has she got the flu?', "No, she hasn't."),
                        ("What's the matter?", "I've got a toothache.")]))
fig(8, '2', 'contrast', 'Giving advice',
    lambda: P.blocks([[('You should', 'green'), ('go to bed.', None)],
                      [("You shouldn't", 'red'), ('go to work.', None)],
                      [('Take', 'amber'), ('this medicine.', None)]],
                     legend=[('a good idea', 'green'), ('a bad idea', 'red'),
                             ('do it now', 'amber')]))
fig(9, '2', 'contrast', 'Have got and have not got',
    lambda: P.then_now([("I've got a cold.", "I haven't got the flu."),
                        ("She's got a headache.", "She hasn't got a temperature.")],
                       left='YES', right='NO'))

fig(10, '3', 'data', 'Four people at the clinic',
    lambda: P.people_row([('ben', '1', 'think', None),
                          ('lili', '2', 'stand', None),
                          ('rosa', '3', 'hold', 'basket'),
                          ('omar', '4', 'hold', 'ball')],
                         label_size=34))
fig(11, '3', 'document', 'What the nurse wrote',
    lambda: P.register('THE CLINIC · TODAY',
                       (['Who', 'The matter', 'Temperature', 'Advice'],
                        [0.22, 0.28, 0.22, 0.28]),
                       [('Ben', 'a headache', '37', 'drink water'),
                        ('Lili', 'a toothache', '37', 'see the dentist'),
                        ('Rosa', 'a cold', '38', 'go to bed'),
                        ('Omar', 'a backache', '36', 'no football')]))
fig(12, '3', 'document', 'The clinic times',
    lambda: P.notice('THE CLINIC · HILL ROAD', [
        ('Monday to Friday', '8.00 - 18.00'), ('Saturday', '9.00 - 13.00'),
        ('Sunday', 'closed'),
        'Please telephone for an appointment.'], col='teal'))

fig(13, '4', 'data', 'Asking how a friend is',
    lambda: P.two_talk('street', 'sam', 'nadia', 'How are you today?',
                       "I've got a cold.", pose_a='wave', pose_b='think'))
fig(14, '4', 'contrast', 'Four things to say',
    lambda: P.qa_pairs([('How are you?', 'Not very well.'),
                        ("What's the matter?", 'My ear hurts.'),
                        ('You should see a doctor.', 'Yes, I will.'),
                        ('Get well soon!', 'Thank you.')]))

fig(15, '5', 'document', 'A note from the school',
    lambda: P.notice('HILL ROAD SCHOOL · A NOTE', [
        ('Student', 'Lili Grant'), ('Day', 'Tuesday'),
        ('The matter', 'a temperature'), ('At home for', '2 days'),
        'Lili has got the flu. She should stay at home.'], col='blue'))
fig(16, '5', 'document', 'Messages about a cold',
    lambda: P.phone('Rosa', [('them', 'How are you today?'),
                             ('me', "I've got a bad cold."),
                             ('them', 'Have you got medicine?'),
                             ('me', 'Yes. I am in bed.')]))

fig(17, '6', 'document', 'A form at the clinic',
    lambda: P.form('THE CLINIC · ABOUT YOU',
                   [('Name', None), ('The matter', None),
                    ('How many days', None), ('Medicine', None)]))
fig(18, '6', 'data', 'Four lines for a note',
    lambda: P.writing_frame('A note to school', ['I am not well today. ',
                                                 "I've got ",
                                                 'I will be at home for ',
                                                 'Thank you, ']))

fig(19, '7', 'document', 'On the medicine box',
    lambda: P.notice('MEDICINE · FOR A HEADACHE', [
        ('How many', '1 pill'), ('How often', 'every 6 hours'),
        ('In one day', '4 pills'), ('For children', 'ask the doctor'),
        'Take this medicine with water after food.'], col='red'))
fig(20, '7', 'data', 'Three ways to get well',
    lambda: P.rank_three('THE BEST ADVICE FOR A COLD',
                         [('Drink water', 'bottle', None, 'very good'),
                          ('Go to bed', 'bed', None, 'good'),
                          ('Play football', 'ball', None, 'bad')]))

fig(21, '8', 'lexis', 'Six things at the clinic',
    lambda: P.object_cards([(1, 'pill', None), (2, 'bottle', None),
                            (3, 'bed', None), (4, 'clock', None),
                            (5, 'paper', None), (6, 'chair', 'blue')],
                           cols=6, h=320))

fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say how I feel.',
                      'I can use have got and has got.',
                      'I can name parts of the body.',
                      'I can give advice with should.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
