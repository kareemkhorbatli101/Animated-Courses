"""EFDL A2 Unit 5 -- What Happened. Past simple vs past continuous."""
from _common import make, runner, P, C

UNIT, BOOK = 5, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Something happened on the stairs',
    lambda: P.two_talk('door', 'fatima', 'marek', 'What happened here?',
                       'Rosa slipped while she was carrying a box.',
                       pose_a='stand', pose_b='point'))
fig(2, 'W', 'contrast', 'One long action, one short',
    lambda: P.split_screen(('She was carrying a box.', 'box', 'teal'),
                           ('She slipped.', 'bottle', 'red'),
                           ('Marek helped her.', 'toolbox', 'green')))
fig(3, 'W', 'lexis', 'Six things after an accident',
    lambda: P.object_cards([(1, 'pill', None), (2, 'bottle', None),
                            (3, 'phone', None), (4, 'paper', None),
                            (5, 'bed', None), (6, 'key', None)],
                           cols=6, h=320))

fig(4, '1', 'contrast', 'Was and were, plus ing',
    lambda: P.blocks([[('I', 'red'), ('was', 'teal'), ('carrying a box.', 'purple')],
                      [('They', 'red'), ('were', 'teal'), ('waiting outside.',
                                                           'purple')]],
                     legend=[('who', 'red'), ('was or were', 'teal'),
                             ('verb + ing', 'purple')]))
fig(5, '1', 'contrast', 'When and while',
    lambda: P.blocks([[('While', 'amber'), ('she was carrying the box…', None)],
                      [('…when', 'red'), ('she slipped.', None)]],
                     legend=[('the long one', 'amber'), ('the short one', 'red')]))
fig(6, '1', 'data', 'Four people on that morning',
    lambda: P.people_row([('rosa', 'Rosa', 'carry', 'basket'),
                          ('marek', 'Marek', 'hold', 'toolbox'),
                          ('fatima', 'Fatima', 'stand', None),
                          ('sam', 'Sam', 'hold', 'timetable')], label_size=30))
fig(7, '1', 'contrast', 'The short forms in the past',
    lambda: P.contraction([('was not', "wasn't", 'was no'),
                           ('were not', "weren't", 'were no'),
                           ('did not', "didn't", 'did no')]))
fig(8, '1', 'document', 'The accident book',
    lambda: P.register('HILL ROAD FLATS · ACCIDENT BOOK',
                       (['Date', 'Who', 'What happened'], [0.22, 0.24, 0.54]),
                       [('3 May', 'Rosa', 'she slipped on the stairs'),
                        ('11 May', 'Omar', 'he cut his hand on a tin'),
                        ('2 June', 'Ben', 'he burned his arm at work')]))
fig(9, '1', 'lexis', 'Five words about an accident',
    lambda: P.blocks([[('a witness', 'teal'), ('a person who saw it', None)],
                      [('an ambulance', 'red'), ('it takes you to hospital', None)],
                      [('a bruise', 'purple'), ('a dark mark on the skin', None)],
                      [('a bandage', 'green'), ('it goes round a cut', None)],
                      [('an emergency', 'amber'), ('you act now, not later', None)]]))

fig(10, '2', 'contrast', 'The long one and the short one',
    lambda: P.timeline([('she was carrying the box', 0.30, 'span'),
                        ('she slipped', 0.46, 'point'),
                        ('the ambulance came', 0.66, 'point')]))
fig(11, '2', 'contrast', 'Asking what happened',
    lambda: P.qa_pairs([('What were you doing?', 'I was going downstairs.'),
                        ('What happened then?', 'I slipped and fell.'),
                        ('Was anybody with you?', 'No, I was alone.')]))
fig(12, '2', 'data', 'Who was where at nine',
    lambda: P.tick_grid(['at home', 'at work', 'on the stairs'],
                        [('Rosa', [False, False, True]),
                         ('Marek', [False, True, False]),
                         ('Ben', [True, False, False])]))
fig(13, '2', 'contrast', 'Two cut across by one',
    lambda: P.split_screen(('Ben was closing up.', 'board', 'teal'),
                           ('The glass broke.', 'bottle', 'red'),
                           ('He called Marek.', 'phone', 'green')))
fig(14, '2', 'contrast', 'Which verb takes the ing',
    lambda: P.then_now([('I was reading when he came.',
                         'He came while I was reading.'),
                        ('She was cooking when it happened.',
                         'It happened while she was cooking.')],
                       left='WHEN + SHORT', right='WHILE + LONG'))
fig(15, '2', 'contrast', 'Mistakes with the two pasts',
    lambda: P.verb_change([('I was slip.', 'I slipped.', 'new'),
                           ('While I ate, he came.',
                            'While I was eating, he came.', 'new')], size=26))

fig(16, '3', 'data', 'Four witnesses',
    lambda: P.people_row([('ben', '1', 'hold', 'phone'),
                          ('lili', '2', 'stand', None),
                          ('omar', '3', 'carry', 'backpack'),
                          ('nadia', '4', 'offer', 'tray')], label_size=34))
fig(17, '3', 'document', 'What each witness said',
    lambda: P.register('THE WITNESSES',
                       (['Who', 'Where they were', 'What they saw'],
                        [0.20, 0.32, 0.48]),
                       [('Ben', 'at the shop door', ''),
                        ('Lili', 'on the stairs', ''),
                        ('Omar', 'outside', ''),
                        ('Nadia', 'in the cafe', '')]))
fig(18, '3', 'document', 'The times that morning',
    lambda: P.rota('THAT MORNING', ['8.40', '8.55', '9.05', '9.20'],
                   [('Rosa', ['the shop', 'the stairs', 'sitting down', 'hospital']),
                    ('Marek', ['the yard', 'the stairs', 'the phone', 'the yard']),
                    ('Ambulance', ['', '', 'arrived', 'left'])]))
fig(19, '3', 'lexis', 'Four more things to hear',
    lambda: P.object_cards([(1, 'box', None), (2, 'bottle', None),
                            (3, 'chair', 'brown'), (4, 'bag', 'navy')],
                           cols=4, h=320))

fig(20, '4', 'data', 'Telling a friend what happened',
    lambda: P.two_talk('cafe', 'lili', 'nadia', 'I was walking home when it started.',
                       'Were you frightened?', pose_a='stand', pose_b='offer'))
fig(21, '4', 'contrast', 'Four questions about an accident',
    lambda: P.qa_pairs([('What were you doing?', 'I was carrying a box.'),
                        ('Where did it happen?', 'On the stairs.'),
                        ('Were you hurt?', 'Only a bruise.'),
                        ('Who helped you?', 'Marek did, immediately.')]))
fig(22, '4', 'data', 'The morning in four moments',
    lambda: P.panels([('She was carrying a box.', 'teal', 'rosa', 'carry',
                       'Nearly there.'),
                      ('She slipped.', 'red', 'rosa', 'reach',
                       'Oh!'),
                      ('Marek telephoned.', 'blue', 'marek', 'hold',
                       'Come quickly.'),
                      ('She was fine.', 'green', 'rosa', 'wave',
                       'Only a bruise.')]))
fig(23, '4', 'data', 'Three people who were there',
    lambda: P.badges([('Marek', 'caretaker', 'the stairs', 'lime'),
                      ('Lili', 'witness', 'flat 11', 'yellow'),
                      ('Fatima', 'nurse', 'the clinic', 'teal')]))

fig(24, '5', 'document', 'Two reports of the same morning',
    lambda: P.two_text(('MAREK WROTE',
                        ['At about nine I was in the yard.',
                         'I heard a shout and I ran to the stairs.',
                         'Rosa was sitting on the step.',
                         'I telephoned for an ambulance.'], 'navy'),
                       ('ROSA WROTE',
                        ['I was carrying a box down the stairs.',
                         'The light was not working.',
                         'I slipped on the fourth step.',
                         'Marek came immediately. I was lucky.'], 'teal')))
fig(25, '5', 'document', 'Messages from the hospital',
    lambda: P.phone('Fatima', [('them', 'How is Rosa?'),
                               ('me', 'She is fine. Only a bruise.'),
                               ('them', 'What was she doing?'),
                               ('me', 'She was carrying a box downstairs.')]))
fig(26, '5', 'document', 'What to do in an emergency',
    lambda: P.notice('IN AN EMERGENCY', [
        ('Telephone', '999'), ('Say', 'where you are, first'),
        ('Do not', 'move an injured person'), ('Then', 'tell the caretaker'),
        'Write it in the accident book on the same day.'], col='red'))
fig(27, '5', 'document', 'A safety notice',
    lambda: P.notice('THE STAIRS · PLEASE READ', [
        ('The light', 'on at all hours'), ('Boxes', 'never on the steps'),
        ('Wet steps', 'tell the caretaker'), ('Handrail', 'use it'),
        'Three people fell on these stairs last year.'], col='amber'))

fig(28, '6', 'document', 'An accident form',
    lambda: P.form('ACCIDENT REPORT',
                   [('Who', None), ('Where', None), ('What they were doing', None),
                    ('What happened', None), ('Who helped', None)]))
fig(29, '6', 'data', 'Four lines about what happened',
    lambda: P.writing_frame('What happened', ['I was ', 'Then suddenly ',
                                              'Luckily ', 'In the end ']))
fig(30, '6', 'document', 'A model report',
    lambda: P.two_text(('A MODEL REPORT',
                        ['I was going downstairs with a box.',
                         'The light was not working.',
                         'I slipped and I fell on the fourth step.',
                         'Marek telephoned and the ambulance came.'], 'purple'),
                       ('THE FOUR LINES',
                        ['1 what you were doing',
                         '2 what the problem was',
                         '3 what suddenly happened',
                         '4 what happened after that'], 'steel')))

fig(31, '7', 'document', 'A real incident report',
    lambda: P.form('GREENFIELD · INCIDENT REPORT',
                   [('Date', '3 May'), ('Place', 'the stairs, flat 14'),
                    ('Doing', 'carrying a box'), ('Result', 'a bruise'),
                    ('Reported by', 'M. Nowak')], filled=True))
fig(32, '7', 'document', 'What the form asks for',
    lambda: P.notice('HOW TO FILL IN THE REPORT', [
        ('Date', 'the day it happened'), ('Place', 'the exact place'),
        ('Doing', 'what the person was doing'), ('Result', 'the injury'),
        'Give the form to the caretaker within two days.'], col='navy'))
fig(33, '7', 'data', 'Three places to report it',
    lambda: P.signs([('OFFICE', 'board', 'navy'), ('CLINIC', 'post', 'teal'),
                     ('POLICE', 'board', 'blue')]))

fig(34, '8', 'lexis', 'Six things from this unit',
    lambda: P.object_cards([(1, 'box', None), (2, 'pill', None),
                            (3, 'bottle', None), (4, 'paper', None),
                            (5, 'phone', None), (6, 'bed', None)],
                           cols=6, h=320))
fig(35, '8', 'contrast', 'The two pasts in blocks',
    lambda: P.blocks([[('I was carrying', 'amber'), ('the box…', None)],
                      [('…when I', 'red'), ('slipped.', None)]],
                     legend=[('the long action', 'amber'),
                             ('the short action', 'red')]))
fig(36, '8', 'contrast', 'Four verbs in the past',
    lambda: P.verb_change([('slip', 'slipped', 'add'), ('carry', 'carried', 'add'),
                           ('fall', 'fell', 'new'), ('break', 'broke', 'new')]))
fig(37, '8', 'data', 'Four people, four accounts',
    lambda: P.people_row([('marek', 'a', 'hold', 'toolbox'),
                          ('rosa', 'b', 'carry', 'basket'),
                          ('fatima', 'c', 'stand', None),
                          ('ben', 'd', 'hold', 'phone')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say what I was doing when it happened.',
                      'I can use when and while.',
                      'I can tell someone about an accident.',
                      'I can fill in an incident report.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
