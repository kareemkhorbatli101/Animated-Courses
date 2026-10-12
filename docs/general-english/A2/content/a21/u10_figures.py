"""EFDL A2 Unit 10 -- The Way I Am. Adverbs of manner, frequency, not as ... as."""
from _common import make, runner, P, C

UNIT, BOOK = 10, 'a21'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Talking about a new flatmate',
    lambda: P.two_talk('cafe', 'lili', 'nadia',
                       'My new flatmate works very quietly.',
                       'Is she as friendly as the last one?'))
fig(2, 'W', 'document', 'Who the club needs',
    lambda: P.register('HILL ROAD CLUB · WE NEED THREE PEOPLE',
                       (['Job', 'The person we want', 'Day'],
                        [0.26, 0.48, 0.26]),
                       [('Reading', 'calm, gentle, speaks slowly', 'Monday'),
                        ('Football', 'cheerful, strong, not lazy', 'Wednesday'),
                        ('Money', 'sensible, careful, never late', 'Friday')]))
fig(3, 'W', 'lexis', 'Four words for a person',
    lambda: P.blocks([[('cheerful', 'amber'), ('always smiling', None)],
                      [('shy', 'blue'), ('quiet with new people', None)],
                      [('generous', 'green'), ('gives a lot away', None)],
                      [('lazy', 'red'), ('does not want to work', None)]],
                     size=30))

fig(4, '1', 'lexis', 'Six words for a character',
    lambda: P.blocks([[('confident', 'teal'), ('sure of what he can do', None)],
                      [('curious', 'amber'), ('asks about everything', None)],
                      [('jealous', 'red'), ('wants what you have', None)],
                      [('rude', 'purple'), ('says unkind things', None)],
                      [('strict', 'navy'), ('keeps every rule', None)],
                      [('thoughtful', 'green'), ('thinks of other people',
                                                 None)]], size=28))
fig(5, '1', 'lexis', 'The opposite with un- and dis-',
    lambda: P.then_now([('fair', 'unfair'), ('friendly', 'unfriendly'),
                        ('kind', 'unkind'), ('honest', 'dishonest')],
                       left='THE WORD', right='THE OPPOSITE'))
fig(6, '1', 'contrast', 'From adjective to adverb',
    lambda: P.verb_change([('quiet', 'quietly', 'ending'),
                           ('careful', 'carefully', 'ending'),
                           ('slow', 'slowly', 'ending'),
                           ('good', 'well', 'new')], size=34))
fig(7, '1', 'contrast', 'The weak sound in an adverb',
    lambda: P.blocks([[('CARE', 'teal'), ('ful', 'steel'), ('ly', 'steel')],
                      [('QUIET', 'teal'), ('ly', 'steel')],
                      [('GEN', 'teal'), ('er', 'steel'), ('ous', 'steel'),
                       ('ly', 'steel')]],
                     legend=[('the strong part', 'teal'),
                             ('the weak part', 'steel')], size=30))
fig(8, '1', 'document', 'A flatmate wanted',
    lambda: P.notice('ROOM FREE · 14 HILL ROAD', [
        ('The room', 'bright, comfortable, not messy'),
        ('We are', 'two students, quiet in the week'),
        ('We want', 'somebody tidy, friendly and calm'),
        ('Not for', 'anybody who smokes'),
        'Ring after six and ask for Lili.'], col='green'))
fig(9, '1', 'lexis', 'Five more words for a person',
    lambda: P.blocks([[('sensible', 'teal'), ('thinks before he acts', None)],
                      [('sensitive', 'purple'), ('feels things strongly', None)],
                      [('selfish', 'red'), ('thinks only of himself', None)],
                      [('talkative', 'amber'), ('talks and talks', None)],
                      [('calm', 'blue'), ('never gets excited', None)]],
                     size=29))

fig(10, '2', 'contrast', 'The verb and the adverb',
    lambda: P.blocks([[('He', 'steel'), ('drives', 'teal'), ('carefully.',
                                                             'green')],
                      [('She', 'steel'), ('speaks', 'teal'), ('quietly.',
                                                              'green')],
                      [('They', 'steel'), ('work', 'teal'), ('slowly.',
                                                             'green')]],
                     legend=[('who', 'steel'), ('what they do', 'teal'),
                             ('how they do it', 'green')], size=31))
fig(11, '2', 'data', 'How often they are late',
    lambda: P.tick_grid(['always', 'sometimes', 'never'],
                        [('Omar', [True, False, False]),
                         ('Rosa', [False, True, False]),
                         ('Marek', [False, False, True])]))
fig(12, '2', 'contrast', 'Not as … as',
    lambda: P.then_now([('Ben is not as calm as Rosa.', 'Rosa is calmer than Ben.'),
                        ('I am not as tidy as Marek.', 'Marek is tidier than me.')],
                       left='NOT AS … AS', right='THE SAME IDEA'))
fig(13, '2', 'data', 'Late this month',
    lambda: P.bar_compare('TIMES LATE THIS MONTH',
                          [('Omar', 6, 'red'), ('Rosa', 3, 'amber'),
                           ('Marek', 1, 'teal')]))
fig(14, '2', 'contrast', 'How often questions',
    lambda: P.qa_pairs([('How often is Omar late?', 'He is always late.'),
                        ('Does Rosa ever shout?', 'No, she never shouts.'),
                        ('Is Marek as talkative as Ben?',
                         'No, he is much quieter.')]))
fig(15, '2', 'contrast', 'Mistakes with adverbs',
    lambda: P.verb_change([('He drives careful.', 'He drives carefully.', 'new'),
                           ('She speaks very good.', 'She speaks very well.',
                            'new')], size=27))

fig(16, '3', 'data', 'Four people describe a friend',
    lambda: P.people_row([('nadia', '1', 'offer', 'tray'),
                          ('ben', '2', 'hold', 'phone'),
                          ('omar', '3', 'stand', None),
                          ('marek', '4', 'hold', 'toolbox')], label_size=34))
fig(17, '3', 'document', 'The club list on Saturday',
    lambda: P.register('HILL ROAD CLUB · SATURDAY',
                       (['Time', 'Who', 'Room'], [0.24, 0.42, 0.34]),
                       [('10.00', 'L. Chen', '1'),
                        ('11.30', 'O. Hassan', '2'),
                        ('14.00', 'M. Nowak', '1')]))
fig(18, '3', 'document', 'The note the landlord writes',
    lambda: P.form('NEW TENANT · 14 HILL ROAD',
                   [('Name', None), ('Character', None),
                    ('How often she is out', None), ('One thing to know', None)]))
fig(19, '3', 'lexis', 'Four things in her room',
    lambda: P.object_cards([(1, 'book', None), (2, 'guitar', None),
                            (3, 'ball', 'teal'), (4, 'plant', None)],
                           cols=4, h=320))

fig(20, '4', 'data', 'Two colleagues at the desk',
    lambda: P.office('ben', 'lili', 'Is the new supervisor strict?',
                     'Not as strict as the last one.'))
fig(21, '4', 'contrast', 'Four questions about a person',
    lambda: P.qa_pairs([('What is she like?', 'Calm, and very generous.'),
                        ('How does she work?', 'Slowly, but she never forgets.'),
                        ('How often does she chat?', 'Hardly ever in the week.'),
                        ('Is she as shy as Omar?', 'No, she is more confident.')]))
fig(22, '4', 'data', 'A day with a new flatmate',
    lambda: P.panels([('She arrives quietly.', 'blue', 'lili', 'carry',
                       'Is this my room?'),
                      ('She cooks for us.', 'green', 'lili', 'offer',
                       'I always cook.'),
                      ('She chats for an hour.', 'amber', 'lili', 'stand',
                       'Tell me about work.'),
                      ('She tidies up.', 'teal', 'lili', 'hold',
                       'I am very tidy.')]))
fig(23, '4', 'data', 'Three people to describe',
    lambda: P.badges([('Rosa', 'retired', 'flat 3', 'purple'),
                      ('Sam', 'driver', 'bus 12', 'navy'),
                      ('Nadia', 'cook', 'the cafe', 'red')]))

fig(24, '5', 'document', 'Two people in the club',
    lambda: P.two_text(('MAREK · FRIDAY',
                        ['He is quiet and very sensible.',
                         'He is never late, not once this year.',
                         'He works slowly and checks everything.',
                         'He is not as talkative as Ben.'], 'navy'),
                       ('NADIA · WEDNESDAY',
                        ['She is cheerful and talks to everybody.',
                         'She is sometimes late, but she rings first.',
                         'She works quickly and she hardly ever rests.',
                         'She is as generous as her mother.'], 'red')))
fig(25, '5', 'document', 'Messages about a flatmate',
    lambda: P.phone('Lili', [('them', 'What is the new flatmate like?'),
                             ('me', 'Calm, tidy, and she cooks for everybody.'),
                             ('them', 'Is she as friendly as Rosa?'),
                             ('me', 'Shy at first, but very kind.')]))
fig(26, '5', 'document', 'The rules of the club',
    lambda: P.notice('HILL ROAD CLUB · HOW WE WORK', [
        ('Always', 'greet a new person at the door'),
        ('Never', 'shout, even when you disagree'),
        ('Usually', 'we finish at nine'),
        ('Sometimes', 'we stay and tidy the room'),
        'We are not as strict as the old club, but we keep these four.'],
        col='teal'))
fig(27, '5', 'document', 'A letter about a flatmate',
    lambda: P.notice('FROM THE LANDLORD', [
        ('To', 'L. Chen'), ('About', 'the room at number 14'),
        ('The tenant', 'quiet, tidy, out most evenings'),
        ('One thing', 'she plays the guitar on Sunday'),
        'She is not as noisy as the last tenant, so we are pleased.'],
        col='amber'))

fig(28, '6', 'document', 'A form about you',
    lambda: P.form('ABOUT ME · CLUB FORM',
                   [('Three words about me', None), ('How I work', None),
                    ('How often I come', None), ('One thing I never do', None)]))
fig(29, '6', 'data', 'Four lines about a friend',
    lambda: P.writing_frame('My friend', ['My friend is ',
                                          'She always ', 'She never ',
                                          'She is not as ']))
fig(30, '6', 'document', 'A model paragraph',
    lambda: P.two_text(('BEN WRITES',
                        ['My friend Omar is quiet and very kind.',
                         'He always listens before he speaks.',
                         'He never says an unkind thing about anybody.',
                         'He is not as confident as me, but people trust him.'],
                        'purple'),
                       ('THE FOUR LINES',
                        ['1 two words about the person',
                         '2 something they always do',
                         '3 something they never do',
                         '4 one not as … as'], 'steel')))

fig(31, '7', 'document', 'A real personality quiz',
    lambda: P.register('WHAT ARE YOU LIKE? · FOUR QUESTIONS',
                       (['Question', 'A', 'B'], [0.52, 0.24, 0.24]),
                       [('At a party you', 'talk to everybody', 'stay with one friend'),
                        ('A new job makes you', 'excited', 'nervous'),
                        ('You work', 'quickly', 'slowly and carefully'),
                        ('A friend is late. You', 'ring at once', 'wait quietly')]))
fig(32, '7', 'document', 'What your answers mean',
    lambda: P.notice('YOUR RESULT', [
        ('Mostly A', 'confident, talkative, sometimes impatient'),
        ('Mostly B', 'calm, thoughtful, a little shy'),
        ('Two and two', 'relaxed with people, careful with work'),
        ('Remember', 'no answer here is better than another'),
        'A quiz is a game. Nobody is only one word.'], col='purple'))
fig(33, '7', 'data', 'Which answer is A or B',
    lambda: P.sort_two(('MOSTLY A', 'amber'), ('MOSTLY B', 'teal'),
                       [('phone', None, 'rings at once'),
                        ('book', None, 'reads quietly'),
                        ('ball', 'teal', 'plays with everybody'),
                        ('guitar', None, 'plays at a party'),
                        ('plant', None, 'waits quietly'),
                        ('clock', None, 'is never late')]))

fig(34, '8', 'lexis', 'Six words for a mood',
    lambda: P.blocks([[('bored', 'steel'), ('nothing is interesting', None)],
                      [('excited', 'amber'), ('you cannot sit still', None)],
                      [('nervous', 'purple'), ('before a test or a talk', None)],
                      [('proud', 'green'), ('you did something well', None)],
                      [('worried', 'red'), ('you think about a problem', None)],
                      [('relaxed', 'teal'), ('nothing is a problem', None)]],
                     size=28))
fig(35, '8', 'contrast', 'The adverb in blocks',
    lambda: P.blocks([[('Marek', 'steel'), ('works', 'teal'), ('slowly.',
                                                               'green')],
                      [('Nadia', 'steel'), ('always', 'amber'), ('smiles.',
                                                                 'teal')]],
                     legend=[('who', 'steel'), ('the verb', 'teal'),
                             ('how', 'green'), ('how often', 'amber')],
                     size=31))
fig(36, '8', 'data', 'Friends at the club',
    lambda: P.bar_compare('FRIENDS AT THE CLUB',
                          [('Nadia', 14, 'red'), ('Omar', 8, 'teal'),
                           ('Marek', 4, 'navy')]))
fig(37, '8', 'data', 'Four people, four characters',
    lambda: P.people_row([('nadia', 'a', 'offer', 'tray'),
                          ('ben', 'b', 'hold', 'phone'),
                          ('omar', 'c', 'stand', None),
                          ('marek', 'd', 'hold', 'toolbox')], label_size=34))
fig(38, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can describe a person with four or five words.',
                      'I can say how somebody does something.',
                      'I can say how often I do a thing.',
                      'I can read and answer a personality quiz.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
