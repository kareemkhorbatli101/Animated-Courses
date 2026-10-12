"""EFDL A2 Unit 9 -- Feeling Better. should and shouldn't for advice."""
from _common import make, runner, P, C

UNIT, BOOK = 9, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Omar at the clinic',
    lambda: P.two_talk('clinic', 'omar', 'fatima',
                       'I have a sore throat and a cough.',
                       'When did the pain start?'))
fig(2, 'W', 'document', 'A note from the clinic',
    lambda: P.notice('GREENFIELD CLINIC · NOTE FOR OMAR', [
        ('Symptom', 'a sore throat, a cough'), ('Temperature', '38.4'),
        ('Treatment', 'rest, water, one tablet a day'),
        ('Come back', 'if the fever is still here on Friday'),
        'You should not go to school until Thursday.'], col='teal'))
fig(3, 'W', 'lexis', 'Four things in the medicine box',
    lambda: P.object_cards([(1, 'pill', None), (2, 'bottle', None),
                            (3, 'paper', None), (4, 'box', None)],
                           cols=4, h=320))

fig(4, '1', 'lexis', 'Six words for how you feel',
    lambda: P.blocks([[('dizzy', 'red'), ('the room seems to move', None)],
                      [('itchy', 'amber'), ('you want to scratch it', None)],
                      [('sore', 'teal'), ('it hurts when you use it', None)],
                      [('swollen', 'purple'), ('it is bigger than before', None)],
                      [('weak', 'blue'), ('you have no energy at all', None)],
                      [('sick', 'green'), ('you are not healthy', None)]],
                     size=29))
fig(5, '1', 'lexis', 'Inside the body',
    lambda: P.body_map('ben', [('the throat', 'l', 0.19, 0.00),
                               ('a lung', 'r', 0.29, 0.055),
                               ('the chest', 'l', 0.33, 0.05),
                               ('the heart', 'r', 0.41, 0.045),
                               ('a muscle', 'l', 0.60, 0.049),
                               ('a bone', 'r', 0.66, 0.055)], pose='both_up'))
fig(6, '1', 'contrast', 'Good for you, bad for you',
    lambda: P.then_now([('You should drink more water.',
                         'You should not drink coffee all day.'),
                        ('You should rest for two days.',
                         'You should not carry anything heavy.')],
                       left='GOOD FOR YOU', right='BAD FOR YOU'))
fig(7, '1', 'contrast', 'Where the stress falls in advice',
    lambda: P.blocks([[('You', 'steel'), ('should', 'steel'), ('REST', 'red'),
                       ('for', 'steel'), ('two', 'steel'), ('DAYS.', 'red')],
                      [('She', 'steel'), ('should', 'steel'), ('SEE', 'red'),
                       ('the', 'steel'), ('DOCtor.', 'red')]],
                     legend=[('say it strongly', 'red'),
                             ('say it weakly', 'steel')], size=30))
fig(8, '1', 'document', 'Who you see at the clinic',
    lambda: P.register('GREENFIELD CLINIC · WHO YOU SEE',
                       (['Problem', 'Who', 'Note'], [0.34, 0.26, 0.40]),
                       [('A cough', 'the nurse', 'no appointment, just come'),
                        ('An itchy rash', 'the nurse', 'no appointment, just come'),
                        ('A broken bone', 'the hospital', 'go the same day'),
                        ('A vaccine', 'the nurse', 'you must book it first')]))
fig(9, '1', 'lexis', 'Five words at the pharmacy',
    lambda: P.blocks([[('a prescription', 'teal'), ('what the doctor writes',
                                                    None)],
                      [('a pharmacy', 'green'), ('where you buy medicine', None)],
                      [('a tablet', 'amber'), ('you swallow it with water', None)],
                      [('a vaccine', 'purple'), ('it stops a disease', None)],
                      [('an injection', 'blue'), ('the nurse uses a needle',
                                                  None)]], size=29))

fig(10, '2', 'contrast', 'Advice for three problems',
    lambda: P.qa_pairs([('I have a headache.', 'You should drink water and rest.'),
                        ('My ankle is swollen.', 'You should not walk on it.'),
                        ('I feel dizzy every morning.',
                         'You should see the doctor today.')]))
fig(11, '2', 'contrast', 'Should, should not and must',
    lambda: P.blocks([[('You should', 'green'), ('rest for two days.', None)],
                      [('You should not', 'amber'), ('go to work today.', None)],
                      [('You must', 'red'), ('take the tablet with food.', None)]],
                     legend=[('a good idea', 'green'), ('a bad idea', 'amber'),
                             ('the rule on the label', 'red')]))
fig(12, '2', 'data', 'What three patients must do',
    lambda: P.tick_grid(['rest', 'drink water', 'see the doctor'],
                        [('Omar', [True, True, False]),
                         ('Rosa', [True, True, True]),
                         ('Lili', [False, True, False])]))
fig(13, '2', 'data', 'Days at home',
    lambda: P.bar_compare('DAYS AT HOME',
                          [('Omar', 3, 'teal'), ('Rosa', 7, 'amber'),
                           ('Marek', 1, 'navy')], unit=' d'))
fig(14, '2', 'contrast', 'The question and the advice',
    lambda: P.then_now([('Should I take a tablet now?', 'Yes, one with food.'),
                        ('Should he go to work today?',
                         'No, he should stay at home.')],
                       left='THE QUESTION', right='THE ADVICE'))
fig(15, '2', 'contrast', 'Mistakes with should',
    lambda: P.verb_change([('You should to rest.', 'You should rest.', 'new'),
                           ('He shoulds drink water.', 'He should drink water.',
                            'new')], size=27))

fig(16, '3', 'data', 'Four people at the clinic',
    lambda: P.people_row([('omar', '1', 'stand', None),
                          ('rosa', '2', 'carry', 'basket'),
                          ('marek', '3', 'hold', 'toolbox'),
                          ('lili', '4', 'stand', None)], label_size=34))
fig(17, '3', 'document', 'The clinic list on Thursday',
    lambda: P.register('GREENFIELD CLINIC · THURSDAY',
                       (['Time', 'Who', 'Room'], [0.24, 0.42, 0.34]),
                       [('09.10', 'O. Hassan', ''),
                        ('09.30', 'R. Alvarez', ''),
                        ('10.00', 'M. Nowak', '')]))
fig(18, '3', 'document', 'The card the nurse fills in',
    lambda: P.form('CLINIC CARD · THURSDAY',
                   [('Name', None), ('Symptom', None),
                    ('Temperature', None), ('Advice', None)]))
fig(19, '3', 'lexis', 'Four things in the pharmacy',
    lambda: P.object_cards([(1, 'envelope', None), (2, 'pill', 'amber'),
                            (3, 'bottle', 'teal'), (4, 'cup', None)],
                           cols=4, h=320))

fig(20, '4', 'data', 'Asking the nurse for advice',
    lambda: P.two_talk('clinic', 'rosa', 'fatima',
                       'My back is sore after the fall.',
                       'You should rest, and come back on Monday.'))
fig(21, '4', 'contrast', 'Four questions about feeling sick',
    lambda: P.qa_pairs([('Should I take a tablet?', 'Yes, one with food.'),
                        ('Should I stay at home?', 'Two days, then come back.'),
                        ('What should I eat?', 'Soup, bread, nothing heavy.'),
                        ('Who should I ring?', 'The pharmacy, they open at nine.')]))
fig(22, '4', 'data', 'Getting better in four days',
    lambda: P.panels([('Monday: he is weak.', 'red', 'omar', 'stand',
                       'My chest hurts.'),
                      ('He sees the nurse.', 'amber', 'omar', 'point',
                       'I have a fever.'),
                      ('He rests at home.', 'blue', 'omar', 'hold',
                       'One tablet a day.'),
                      ('Friday: he is well.', 'green', 'omar', 'walk',
                       'I can run again.')]))
fig(23, '4', 'data', 'Three people who can help you',
    lambda: P.badges([('Fatima', 'nurse', 'the clinic', 'teal'),
                      ('Ben', 'assistant', 'the pharmacy', 'lime'),
                      ('Rosa', 'neighbour', 'flat 3', 'navy')]))

fig(24, '5', 'document', 'Two notes about a cough',
    lambda: P.two_text(('A COUGH · WHAT TO DO',
                        ['Drink water every hour.',
                         'Rest for two or three days.',
                         'Take one tablet in the morning.',
                         'Ring us if the fever is still here.'], 'teal'),
                       ('A COUGH · WHAT NOT TO DO',
                        ['Do not smoke.',
                         'Do not carry anything heavy.',
                         'Do not take two tablets together.',
                         'Do not go to work with a fever.'], 'red')))
fig(25, '5', 'document', 'Messages about an appointment',
    lambda: P.phone('The Clinic',
                    [('them', 'Can you come on Thursday at 09.10?'),
                     ('me', 'Yes. Should I bring the old prescription?'),
                     ('them', 'Please bring it, and a list of your tablets.'),
                     ('me', 'I will confirm by email tonight.')]))
fig(26, '5', 'document', 'Before your vaccine',
    lambda: P.notice('BEFORE YOUR VACCINE', [
        ('Eat', 'something small an hour before'),
        ('Bring', 'your card and this letter'),
        ('Tell us', 'if you are allergic to anything'),
        ('After', 'sit down for fifteen minutes'),
        'You should not drive for an hour after the injection.'], col='navy'))
fig(27, '5', 'document', 'A letter about a test',
    lambda: P.notice('FROM GREENFIELD CLINIC', [
        ('To', 'R. Alvarez'), ('Test', 'blood, taken on 4 March'),
        ('Result', 'normal, no infection'),
        ('Advice', 'more exercise and more vitamins'),
        'You do not have to come back, but ring us if the pain returns.'],
        col='green'))

fig(28, '6', 'document', 'A form at the clinic',
    lambda: P.form('NEW PATIENT · GREENFIELD CLINIC',
                   [('Name', None), ('Allergy', None),
                    ('Tablets you take now', None), ('Why you came today', None)]))
fig(29, '6', 'data', 'Four lines of advice',
    lambda: P.writing_frame('Advice for a friend',
                            ['You should ', 'You should not ',
                             'You must ', 'You do not have to ']))
fig(30, '6', 'document', 'A model note to a friend',
    lambda: P.two_text(('ROSA WRITES',
                        ['I heard that you are sick. I am sorry.',
                         'You should rest and drink a lot of water.',
                         'You should not go to work this week.',
                         'Ring me if you need anything from the pharmacy.'],
                        'purple'),
                       ('THE FOUR LINES',
                        ['1 say that you heard',
                         '2 one thing to do',
                         '3 one thing not to do',
                         '4 an offer of help'], 'steel')))

fig(31, '7', 'document', 'A real pharmacy label',
    lambda: P.register('GREENFIELD PHARMACY · 4 MARCH',
                       (['Field', 'What it says'], [0.34, 0.66]),
                       [('Name', 'O. Hassan'),
                        ('Medicine', 'throat tablets, 250 mg'),
                        ('How many', 'one tablet, three times a day'),
                        ('Finish by', '18 March')]))
fig(32, '7', 'document', 'How to take the tablets',
    lambda: P.notice('HOW TO TAKE THEM', [
        ('With', 'food and a full glass of water'),
        ('Never', 'two tablets at the same time'),
        ('Keep', 'in the box, away from the light'),
        ('Stop', 'if you get an itchy rash'),
        'Finish every tablet, even when you feel better.'], col='amber'))
fig(33, '7', 'data', 'Three places to get help',
    lambda: P.signs([('THE PHARMACY', 'board', 'green'),
                     ('THE CLINIC', 'post', 'teal'),
                     ('THE HOSPITAL', 'board', 'red')]))

fig(34, '8', 'lexis', 'Six things for a sick day',
    lambda: P.object_cards([(1, 'pill', 'teal'), (2, 'bottle', None),
                            (3, 'bed', None), (4, 'cup', None),
                            (5, 'paper', None), (6, 'box', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'Should in blocks',
    lambda: P.blocks([[('You', 'red'), ('should', 'green'), ('rest today.',
                                                             'purple')],
                      [('You', 'red'), ('should not', 'amber'),
                       ('lift the box.', 'purple')]],
                     legend=[('who', 'red'), ('the advice', 'green'),
                             ('the warning', 'amber'), ('the verb', 'purple')]))
fig(36, '8', 'data', 'How many tablets a day',
    lambda: P.bar_compare('TABLETS A DAY',
                          [('Omar', 3, 'teal'), ('Rosa', 1, 'amber'),
                           ('Lili', 2, 'navy')]))
fig(37, '8', 'data', 'Four people, four problems',
    lambda: P.people_row([('omar', 'a', 'stand', None),
                          ('rosa', 'b', 'carry', 'basket'),
                          ('marek', 'c', 'hold', 'toolbox'),
                          ('lili', 'd', 'stand', None)], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say how I feel and name the symptom.',
                      'I can give advice with should and should not.',
                      'I can read a pharmacy label.',
                      'I can fill in a form at a clinic.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
