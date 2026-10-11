"""EFDL A1.2 Unit 18 -- The Best in Town. Superlatives."""
from _common import make, runner, P, C

UNIT, BOOK = 18, 'a11'
FIGURES, fig = make(UNIT)

fig(1, 'W', 'data', 'The best cafe in town',
    lambda: P.two_talk('cafe', 'omar', 'nadia', 'This is the best cafe in town!',
                       'Thank you! Our cake is the nicest.',
                       pose_a='stand', pose_b='offer'))
fig(2, 'W', 'data', 'Three cafes in town',
    lambda: P.rank_three('THE BUSIEST CAFE',
                         [('The Hill Road Cafe', 'cup', 'red', '90 people'),
                          ('The Park Cafe', 'cup', 'teal', '60 people'),
                          ('The Station Cafe', 'cup', 'amber', '30 people')]))
fig(3, 'W', 'lexis', 'Six things in town',
    lambda: P.object_cards([(1, 'tree', None), (2, 'mountain', None),
                            (3, 'boat', None), (4, 'train', None),
                            (5, 'plane', None), (6, 'car', 'red')],
                           cols=6, h=320))

fig(4, '1', 'contrast', 'Big, bigger, biggest',
    lambda: P.blocks([[('big', 'teal'), ('a big shop', None)],
                      [('bigger', 'amber'), ('bigger than my shop', None)],
                      [('the biggest', 'purple'), ('the biggest in town', None)]],
                     legend=[('one thing', 'teal'), ('two things', 'amber'),
                             ('all the things', 'purple')]))
fig(5, '1', 'contrast', 'Adding the ending',
    lambda: P.verb_change([('old', 'oldest', 'add'), ('new', 'newest', 'add'),
                           ('cheap', 'cheapest', 'add'),
                           ('long', 'longest', 'add')]))
fig(6, '1', 'contrast', 'Words that change',
    lambda: P.verb_change([('good', 'best', 'new'), ('bad', 'worst', 'new'),
                           ('busy', 'busiest', 'new'),
                           ('beautiful', 'most beautiful', 'new')]))
fig(7, '2', 'contrast', 'The word the',
    lambda: P.blocks([[('It is', None), ('the oldest', 'purple'),
                       ('shop in town.', None)],
                      [('She is', None), ('the busiest', 'purple'),
                       ('person here.', None)]],
                     legend=[('the + -est, always', 'purple')]))
fig(8, '2', 'contrast', 'Asking which is best',
    lambda: P.qa_pairs([('Which shop is the cheapest?', 'The one on Hill Road.'),
                        ('Who is the busiest?', 'Nadia is.'),
                        ('What is the best day?', 'Saturday is the best.')]))
fig(9, '2', 'contrast', 'Two things and all things',
    lambda: P.then_now([('My bag is bigger than yours.',
                         'My bag is the biggest.'),
                        ('Monday is busier than Sunday.',
                         'Monday is the busiest day.')],
                       left='TWO THINGS', right='ALL THE THINGS'))

fig(10, '3', 'data', 'Three buildings',
    lambda: P.compare_two(('The school', 'board', 'blue'),
                          ('The clinic', 'plant', 'teal'),
                          [('How old', '80 years', '12 years'),
                           ('How tall', '14 metres', '8 metres'),
                           ('How busy', '400 people', '90 people')]))
fig(11, '3', 'document', 'A table of places',
    lambda: P.register('HILL ROAD · THE PLACES',
                       (['Place', 'Opened', 'People a day', 'Price'],
                        [0.31, 0.21, 0.26, 0.22]),
                       [('The Cafe', '1998', '90', 'cheap'),
                        ('The Shop', '1975', '220', 'cheapest'),
                        ('The School', '1946', '400', 'free')]))
# The distances used to be printed under each face, which made the listening
# task answerable with the sound off. The picture now says only who the four
# people are; how far each one lives comes from the audio.
fig(12, '3', 'data', 'Four people who live near',
    lambda: P.people_row([('nadia', 'Nadia', 'stand', None),
                          ('sam', 'Sam', 'hold', 'timetable'),
                          ('lili', 'Lili', 'carry', 'backpack'),
                          ('ben', 'Ben', 'hold', 'phone')],
                         label_size=32))

fig(13, '4', 'data', 'Talking about the town',
    lambda: P.two_talk('street', 'rosa', 'marek',
                       'Which street is the quietest?',
                       'Park Street is.',
                       pose_a='point', pose_b='stand'))
fig(14, '4', 'contrast', 'Four questions to ask',
    lambda: P.qa_pairs([('What is the best shop?', 'The one by the school.'),
                        ('What is the worst day?', 'Monday, I think.'),
                        ('Who is the oldest here?', 'Rosa is.'),
                        ('Which bus is the fastest?', 'The number 12.')]))

fig(15, '5', 'document', 'A page about one country',
    lambda: P.notice('MY COUNTRY · THE BIGGEST THINGS', [
        ('The longest river', '320 km'), ('The highest mountain', '2,100 m'),
        ('The biggest lake', '40 km'), ('The oldest building', '900 years'),
        'The most famous place is the old bridge in the north.'], col='teal'))
fig(16, '5', 'document', 'Three islands',
    lambda: P.register('THREE ISLANDS',
                       (['Island', 'How big', 'People', 'Weather'],
                        [0.26, 0.24, 0.24, 0.26]),
                       [('Green Island', '12 km', '400', 'cold'),
                        ('Long Island', '40 km', '9,000', 'warm'),
                        ('Sun Island', '8 km', '120', 'hot')]))

fig(17, '6', 'document', 'A form about your town',
    lambda: P.form('THE BEST IN MY TOWN',
                   [('The best place', None), ('The oldest building', None),
                    ('The busiest street', None), ('The nicest food', None)]))
fig(18, '6', 'data', 'Four lines to write',
    lambda: P.writing_frame('My town', ['The best place is ',
                                        'It is the oldest ',
                                        'The busiest street is ',
                                        'I like it because ']))

fig(19, '7', 'document', 'A town notice board',
    lambda: P.signs([('OLD TOWN', 'post', 'brown'),
                     ('BEST CAKE IN TOWN', 'board', 'red'),
                     ('QUIET STREET', 'post', 'teal')]))
fig(20, '7', 'data', 'A map of the town',
    lambda: P.town_map([('The School', 0.06, 0.08, 0.26, 0.24, 'blue'),
                        ('The Cafe', 0.60, 0.07, 0.22, 0.22, 'red'),
                        ('The Shop', 0.08, 0.68, 0.24, 0.22, 'green'),
                        ('The Clinic', 0.62, 0.66, 0.26, 0.24, 'teal'),
                        ('The Park', 0.86, 0.30, 0.12, 0.34, 'leaf')]))

fig(21, '8', 'lexis', 'Three pairs to sort',
    lambda: P.sort_two(('SMALL', 'teal'), ('BIG', 'amber'),
                       [('coin', None, 'a coin'), ('mountain', None, 'a mountain'),
                        ('apple', None, 'an apple'), ('plane', None, 'a plane'),
                        ('key', None, 'a key'), ('train', None, 'a train')]))

fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can say which thing is the best.',
                      'I can add -est to a short word.',
                      'I can use the before the word.',
                      'I can ask which place is the cheapest.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
