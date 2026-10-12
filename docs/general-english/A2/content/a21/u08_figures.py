"""EFDL A2 Unit 8 -- At Work. must, mustn't, should."""
from _common import make, runner, P, C

UNIT, BOOK = 8, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'The first day at the office',
    lambda: P.office('lili', 'ben', 'What must I do first?',
                     'You must read the safety rules.'))
fig(2, 'W', 'document', 'A job advert',
    lambda: P.notice('GREENFIELD CAFE · WE NEED YOU', [
        ('Job', 'assistant, part-time'), ('Hours', '20 a week'),
        ('Pay', '12.40 an hour'), ('Start', '1 September'),
        'You must be eighteen. Experience is useful but not necessary.'],
        col='green'))
fig(3, 'W', 'lexis', 'Six things in an office',
    lambda: P.object_cards([(1, 'desk', None), (2, 'notebook', None),
                            (3, 'phone', None), (4, 'board', None),
                            (5, 'badge', 'navy'), (6, 'clock', None)],
                           cols=6, h=320))

fig(4, '1', 'contrast', 'Must, must not and should',
    lambda: P.blocks([[('You must', 'red'), ('wear a badge.', None)],
                      [('You must not', 'purple'), ('smoke here.', None)],
                      [('You should', 'green'), ('arrive five minutes early.',
                                                 None)]],
                     legend=[('a rule', 'red'), ('never do it', 'purple'),
                             ('a good idea', 'green')]))
fig(5, '1', 'contrast', 'Must and have to',
    lambda: P.then_now([('You must wear a badge.', 'You have to wear a badge.'),
                        ('You must not be late.', 'You cannot be late.')],
                       left='THE RULE ITSELF', right='THE SAME, SPOKEN'))
fig(6, '1', 'data', 'Four jobs on Hill Road',
    lambda: P.people_row([('fatima', 'Fatima', 'stand', None),
                          ('sam', 'Sam', 'hold', 'timetable'),
                          ('nadia', 'Nadia', 'offer', 'tray'),
                          ('marek', 'Marek', 'hold', 'toolbox')],
                         label_size=28))
fig(7, '1', 'contrast', 'Where the stress falls',
    lambda: P.contraction([('must not', "mustn't", 'must no'),
                           ('should not', "shouldn't", 'should no'),
                           ('cannot', "can't", 'anno')]))
fig(8, '1', 'document', 'What the job needs',
    lambda: P.register('ASSISTANT · WHAT WE ASK FOR',
                       (['What', 'Necessary?', 'Note'], [0.34, 0.26, 0.40]),
                       [('Age over 18', 'yes', 'we check it'),
                        ('Experience', 'no', 'we will train you'),
                        ('English', 'yes', 'you talk to customers'),
                        ('A car', 'no', 'the bus stops outside')]))
fig(9, '1', 'lexis', 'Five words about a job',
    lambda: P.blocks([[('experience', 'teal'), ('the work you did before', None)],
                      [('a reference', 'green'), ('a letter about you', None)],
                      [('a qualification', 'amber'), ('what you studied for',
                                                      None)],
                      [('reliable', 'purple'), ('you always come', None)],
                      [('a promotion', 'blue'), ('a better job, same place',
                                                 None)]]))

fig(10, '2', 'contrast', 'Asking about the rules at work',
    lambda: P.qa_pairs([('Must I wear the shirt?', 'Yes, every day.'),
                        ('Can I eat at my desk?', 'No, you must not.'),
                        ('Should I arrive early?', 'It is a good idea.')]))
fig(11, '2', 'data', 'What each job asks for',
    lambda: P.tick_grid(['a badge', 'a licence', 'a uniform'],
                        [('nurse', [True, False, True]),
                         ('driver', [True, True, True]),
                         ('cook', [False, False, True])]))
fig(12, '2', 'contrast', 'Not allowed, or your choice',
    lambda: P.blocks([[('You must not', 'red'), ('use your phone here.', None)],
                      [('You do not have to', 'green'), ('work on Sunday.', None)]],
                     legend=[('it is not allowed', 'red'),
                             ('it is your choice', 'green')]))
fig(13, '2', 'data', 'Three jobs and their pay',
    lambda: P.bar_compare('POUNDS AN HOUR',
                          [('Assistant', 12, 'teal'), ('Driver', 16, 'amber'),
                           ('Nurse', 21, 'navy')]))
fig(14, '2', 'contrast', 'Should and should not',
    lambda: P.then_now([('You should ask your supervisor.',
                         'You should not decide alone.'),
                        ('You should write it down.',
                         'You should not forget the deadline.')],
                       left='A GOOD IDEA', right='A BAD IDEA'))
fig(15, '2', 'contrast', 'Mistakes with must and should',
    lambda: P.verb_change([('You must to wear it.', 'You must wear it.', 'new'),
                           ('He musts arrive early.', 'He must arrive early.',
                            'new')], size=27))

fig(16, '3', 'data', 'Four people about their work',
    lambda: P.people_row([('ben', '1', 'hold', 'phone'),
                          ('rosa', '2', 'carry', 'basket'),
                          ('lili', '3', 'stand', None),
                          ('omar', '4', 'carry', 'backpack')], label_size=34))
fig(17, '3', 'document', 'The interview times',
    lambda: P.register('INTERVIEWS · FRIDAY',
                       (['Time', 'Who', 'For', 'Room'],
                        [0.20, 0.28, 0.30, 0.22]),
                       [('09.30', 'A. Silva', 'assistant', '2'),
                        ('10.15', 'L. Chen', 'assistant', '2'),
                        ('11.00', 'J. Kowalski', 'driver', '4')]))
fig(18, '3', 'document', 'The rules on the board',
    lambda: P.rota('THE STAFF BOARD', ['Must', 'Must not', 'Should'],
                   [('Everyone', ['wear a badge', 'smoke inside',
                                  'arrive early']),
                    ('Kitchen', ['wash hands', 'use a phone', 'tie hair back']),
                    ('Drivers', ['carry a licence', 'use a phone',
                                 'check the oil'])]))
fig(19, '3', 'lexis', 'Four more things to hear',
    lambda: P.object_cards([(1, 'paper', None), (2, 'card', None),
                            (3, 'key', None), (4, 'shirt', 'teal')],
                           cols=4, h=320))

fig(20, '4', 'data', 'Asking a new colleague',
    lambda: P.office('ben', 'lili', 'Should I send the email today?',
                     'Yes, before the deadline.', pose_a='stand'))
fig(21, '4', 'contrast', 'Four questions on the first day',
    lambda: P.qa_pairs([('What time must I start?', 'Eight, with the early shift.'),
                        ('Where should I put my coat?', 'In the room behind you.'),
                        ('Must I wear a uniform?', 'Only in the kitchen.'),
                        ('Who should I ask?', 'Marek, he is the supervisor.')]))
fig(22, '4', 'data', 'A first day in four moments',
    lambda: P.panels([('She arrives early.', 'blue', 'lili', 'walk',
                       'Ten to eight.'),
                      ('She reads the rules.', 'teal', 'lili', 'hold',
                       'No phones.'),
                      ('She asks a question.', 'green', 'lili', 'point',
                       'Where is the key?'),
                      ('She writes it down.', 'amber', 'lili', 'write',
                       'I will remember.')]))
fig(23, '4', 'data', 'Three people to ask about work',
    lambda: P.badges([('Marek', 'supervisor', 'the flats', 'lime'),
                      ('Fatima', 'nurse', 'the clinic', 'teal'),
                      ('Sam', 'driver', 'bus 12', 'navy')]))

fig(24, '5', 'document', 'Two job adverts',
    lambda: P.two_text(('ASSISTANT · THE CAFE',
                        ['Twenty hours a week.',
                         '12.40 an hour.',
                         'You must be eighteen.',
                         'No experience necessary.'], 'navy'),
                       ('DRIVER · GREENFIELD BUSES',
                        ['Thirty-five hours a week.',
                         '16.00 an hour.',
                         'You must have a licence.',
                         'Two years of experience, please.'], 'teal')))
fig(25, '5', 'document', 'Messages about an interview',
    lambda: P.phone('The Cafe', [('them', 'Can you come on Friday at 10.15?'),
                                 ('me', 'Yes. What should I bring?'),
                                 ('them', 'A reference and your passport.'),
                                 ('me', 'I will confirm by email today.')]))
fig(26, '5', 'document', 'The safety rules',
    lambda: P.notice('THE KITCHEN · SAFETY', [
        ('Hands', 'wash before you start'), ('Hair', 'tied back'),
        ('Phones', 'not in the kitchen'), ('A cut', 'tell the supervisor'),
        'You must report an accident on the same day.'], col='red'))
fig(27, '5', 'document', 'A letter about a job',
    lambda: P.notice('FROM GREENFIELD CAFE', [
        ('To', 'L. Chen'), ('About', 'the assistant job'),
        ('Result', 'we would like to offer it to you'),
        ('Start', 'Monday 1 September'),
        'Please reply before Friday and bring your passport.'], col='green'))

fig(28, '6', 'document', 'An application form',
    lambda: P.form('APPLICATION · ASSISTANT',
                   [('Name', None), ('Experience', None),
                    ('Why you want the job', None), ('When you can start', None)]))
fig(29, '6', 'data', 'Four lines about a job',
    lambda: P.writing_frame('My job', ['In my job I must ',
                                       'I must not ', 'I should ',
                                       'I do not have to ']))
fig(30, '6', 'document', 'A model application',
    lambda: P.two_text(('LILI WRITES',
                        ['I worked in a hotel in Madrid for a year.',
                         'I served customers and I took bookings.',
                         'I want this job because I like the cafe.',
                         'I can start on the first of September.'], 'purple'),
                       ('THE FOUR LINES',
                        ['1 what you did before',
                         '2 what the work was',
                         '3 why you want this job',
                         '4 when you can start'], 'steel')))

fig(31, '7', 'document', 'A real job advert',
    lambda: P.register('GREENFIELD CLINIC · RECEPTION',
                       (['Field', 'What it says'], [0.34, 0.66]),
                       [('Hours', '30 a week, Monday to Friday'),
                        ('Pay', '13.80 an hour'),
                        ('You must have', 'good English and a reference'),
                        ('Closing date', '20 August')]))
fig(32, '7', 'document', 'How to apply',
    lambda: P.notice('HOW TO APPLY', [
        ('Send', 'the form and one reference'), ('By', 'email or by post'),
        ('Before', '20 August, 17.00'), ('Interviews', 'the last week of August'),
        'We will not reply to a form that arrives after the closing date.'],
        col='navy'))
fig(33, '7', 'data', 'Three places that are hiring',
    lambda: P.signs([('THE CAFE', 'board', 'red'), ('THE CLINIC', 'post', 'teal'),
                     ('THE BUSES', 'board', 'navy')]))

fig(34, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'badge', 'navy'), (2, 'desk', None),
                            (3, 'card', None), (4, 'shirt', 'green'),
                            (5, 'clock', None), (6, 'notebook', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'Must and should in blocks',
    lambda: P.blocks([[('You', 'red'), ('must', 'teal'), ('wear a badge.',
                                                          'purple')],
                      [('You', 'red'), ('should', 'green'), ('arrive early.',
                                                             'purple')]],
                     legend=[('who', 'red'), ('the rule', 'teal'),
                             ('the advice', 'green'), ('the verb', 'purple')]))
fig(36, '8', 'data', 'Three jobs, three weeks',
    lambda: P.bar_compare('HOURS A WEEK',
                          [('Assistant', 20, 'teal'), ('Reception', 30, 'amber'),
                           ('Driver', 35, 'navy')], unit=' h'))
fig(37, '8', 'data', 'Four workers, four rules',
    lambda: P.people_row([('fatima', 'a', 'stand', None),
                          ('sam', 'b', 'hold', 'timetable'),
                          ('nadia', 'c', 'offer', 'tray'),
                          ('marek', 'd', 'hold', 'toolbox')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what I must and must not do at work.',
                      'I can give advice with should.',
                      'I can read a job advert.',
                      'I can fill in an application form.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
