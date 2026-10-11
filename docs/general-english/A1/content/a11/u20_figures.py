"""EFDL A1.2 Unit 20 -- See You Soon. Everything, together."""
from _common import make, runner, P, C

UNIT, BOOK = 20, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'Everyone on Hill Road',
    lambda: P.street([('nadia', 130, 'wave', 0.4), ('ben', 300, 'stand', -0.3),
                      ('lili', 470, 'walk', 0.3), ('sam', 790, 'hold', -0.4),
                      ('fatima', 935, 'stand', 0.3), ('rosa', 1080, 'carry', -0.3),
                      ('omar', 1200, 'wave', -0.4)],
                     title='HILL ROAD'))
fig(2, 'W', 'data', 'Saying goodbye',
    lambda: P.two_talk('stop', 'lili', 'nadia', 'I will miss everyone here.',
                       'Send us a postcard!', pose_a='wave', pose_b='wave'))
fig(3, '1', 'lexis', 'Words for a goodbye',
    lambda: P.blocks([[('I will miss you', 'teal'), ('you go away', None)],
                      [('Good luck!', 'green'), ('you start a new thing', None)],
                      [('See you soon', 'amber'), ('you will come back', None)],
                      [('Keep in touch', 'purple'), ('write to me', None)]]))
fig(4, '1', 'document', 'A postcard',
    lambda: P.notice('A POSTCARD FROM LILI', [
        ('To', 'Nadia, Hill Road'), ('From', 'Lili'),
        ('Where', 'the lake in the north'), ('Weather', 'hot and sunny'),
        'I am having a wonderful time. See you in June!'], col='blue'))
fig(5, '1', 'lexis', 'Post words',
    lambda: P.blocks([[('a stamp', 'red'), ('you buy it', None)],
                      [('an envelope', 'amber'), ('the letter goes in', None)],
                      [('a postcard', 'teal'), ('a picture and words', None)],
                      [('the news', 'purple'), ('what is new', None)]]))
fig(6, '1', 'contrast', 'Two ways to send news',
    lambda: P.sort_two(('BY POST', 'amber'), ('BY PHONE', 'teal'),
                       [('envelope', None, 'a letter'), ('phone', None, 'a message'),
                        ('coin', None, 'a stamp'), ('camera', None, 'a photo'),
                        ('paper', None, 'a postcard'), ('book', 'teal', 'a book')]))

fig(7, '2', 'contrast', 'The three times',
    lambda: P.blocks([[('Last year', 'amber'), ('I was at school.', None)],
                      [('Now', 'teal'), ('I am at work.', None)],
                      [('Next year', 'purple'), ('I will be in Spain.', None)]],
                     legend=[('before', 'amber'), ('today', 'teal'),
                             ('after', 'purple')]))
fig(8, '2', 'contrast', 'Then and next',
    lambda: P.then_now([('I lived in a small town.', 'I will live in a city.'),
                        ('I had one friend here.', 'I will have new friends.'),
                        ('I was a student.', 'I will be a teacher.')],
                       left='LAST YEAR', right='NEXT YEAR'))
fig(9, '2', 'contrast', 'Four questions from the book',
    lambda: P.qa_pairs([('Where are you from?', 'I am from Hill Road.'),
                        ('What did you do yesterday?', 'I worked in the cafe.'),
                        ('What will you do next week?', 'I will go to Spain.'),
                        ('Would you like a coffee?', 'Yes, please!')]))

# Names, not destinations. With the places printed the listening task was
# answerable with the sound off -- the same fault as Unit 18 Figure 12.
fig(10, '3', 'data', 'Four people and their plans',
    lambda: P.people_row([('lili', 'Lili', 'carry', 'suitcase'),
                          ('omar', 'Omar', 'hold', 'ball'),
                          ('ben', 'Ben', 'hold', 'phone'),
                          ('rosa', 'Rosa', 'carry', 'basket')],
                         label_size=30))
fig(11, '3', 'document', 'What they will do',
    lambda: P.register('NEXT MONTH · HILL ROAD',
                       (['Who', 'Where', 'When', 'How long'],
                        [0.24, 0.26, 0.24, 0.26]),
                       [('Lili', 'Spain', '3 June', 'one year'),
                        ('Omar', 'a new school', '1 September', 'four years'),
                        ('Ben', 'the same shop', 'every day', 'no end!'),
                        ('Rosa', 'the lake', 'in July', 'two weeks')]))
fig(12, '3', 'data', 'A year of plans',
    lambda: P.calendar('THE YEAR AHEAD', ['JUNE', 'JULY', 'SEPT', 'DEC'],
                       {0: ['Lili goes to Spain'], 1: ['Rosa at the lake'],
                        2: ['Omar starts school'], 3: ['everyone comes home']}))

fig(13, '4', 'data', 'A last word at the cafe',
    lambda: P.two_talk('cafe', 'marek', 'nadia', 'Good luck in your new job!',
                       'Thank you. I will miss you.',
                       pose_a='offer', pose_b='think'))
fig(14, '4', 'contrast', 'Things to say at the end',
    lambda: P.qa_pairs([('Good luck!', 'Thank you!'),
                        ('I will miss you.', 'I will miss you too.'),
                        ('Keep in touch.', 'I promise.'),
                        ('See you soon!', 'See you in June!')]))

fig(15, '5', 'document', 'A letter to everyone',
    lambda: P.notice('A LETTER FROM LILI', [
        ('To', 'everyone on Hill Road'), ('Day', '2 June'),
        ('News', 'a new job in Spain'), ('Back', 'next June'),
        'Thank you for a wonderful year. I will write every month.'],
        col='purple'))
fig(16, '5', 'document', 'Messages at the end',
    lambda: P.phone('Omar', [('them', 'I hope you have a good trip.'),
                             ('me', 'Thank you! I will send a postcard.'),
                             ('them', 'Good luck in Spain.'),
                             ('me', 'See you next June!')]))

fig(17, '6', 'document', 'A form for a postcard',
    lambda: P.form('MY POSTCARD',
                   [('To', None), ('Where I am', None), ('The weather', None),
                    ('What I did', None), ('From', None)]))
fig(18, '6', 'data', 'Five lines to write',
    lambda: P.writing_frame('My postcard', ['Dear ', 'I am in ',
                                            'The weather is ',
                                            'Yesterday I ', 'See you soon, ']))

fig(19, '7', 'document', 'On the envelope',
    lambda: P.form('THE ENVELOPE',
                   [('Name', 'Nadia Haddad'), ('Street', '14 Hill Road'),
                    ('Town', 'Greenfield'), ('Country', 'England')],
                   filled=True))
fig(20, '7', 'document', 'At the post office',
    lambda: P.notice('THE POST OFFICE', [
        ('A stamp for a letter', '1.20'), ('A stamp for a postcard', '0.95'),
        ('Open', '9.00 - 17.30'), ('Sunday', 'closed'),
        'Please write the country on the last line.'], col='red'))

fig(21, '8', 'lexis', 'Six things to send',
    lambda: P.object_cards([(1, 'envelope', None), (2, 'paper', None),
                            (3, 'phone', None), (4, 'camera', None),
                            (5, 'book', 'teal'), (6, 'suitcase', None)],
                           cols=6, h=320))

fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say goodbye to a friend.',
                      'I can write a short postcard.',
                      'I can talk about last year and next year.',
                      'I can use everything from this book.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
