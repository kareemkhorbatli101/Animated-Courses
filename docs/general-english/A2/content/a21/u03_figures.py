"""Unit 3 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener(
        3, 'A Day in the City',
        'Present continuous and present simple',
        ['I can name the main places and things in a city.',
         'I can use the present simple for facts and the present continuous for now.',
         'I can describe a place at two different hours in 50–70 words.'],
        ['bus', 'clock', 'shop', 'book', 'sun'],
        alt='The opening page of Unit 3, A Day in the City: the grammar point is the '
            'present continuous against the present simple, and three things the '
            'learner will be able to do by the end of the unit.'),

 2: lambda: F.before_after(
        ('Eight in the morning', ['buses stop at the corner', 'the market is opening',
                                  'everybody is walking quickly'], 'sun'),
        ('Eight at night', ['the market is closed', 'two people on the bench',
                            'somebody is playing music'], 'moon'),
        height=520,
        alt='Alder Street at two hours. At eight in the morning buses stop at the '
            'corner, the market is opening and everybody is walking quickly. At eight '
            'at night the market is closed, two people are on the bench and somebody '
            'is playing music.'),

 3: lambda: F.category_set(
        [('Market', 'shop'), ('Library', 'book'), ('Station', 'bus'),
         ('Park', 'sun'), ('Bridge', 'home'), ('Bench', 'cup')],
        height=600,
        alt='Six places in a city, each on its own card: market, library, station, '
            'park, bridge and bench.'),

 4: lambda: F.label_me(
        [('bridge', 0.10, 0.50), ('traffic', 0.30, 0.46), ('crossing', 0.52, 0.54),
         ('bench', 0.74, 0.44), ('market', 0.92, 0.52)],
        height=620, draw=F.streetscape,
        alt='A street drawn from the side, with a bridge over it, traffic on the '
            'road, a crossing, a bench and a market. Five numbered lines run to the '
            'right for the learner to write each word.'),

 5: lambda: F.grammar_contrast(
        ('Present simple', 'it opens · they stop',
         'The market opens at six.', [0.12, 0.34, 0.56, 0.78]),
        ('Present continuous', 'is / are + -ing',
         'It is opening now.', [0.5]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the present simple, with '
            'four marks across a timeline for a fact that holds every day. On the '
            'right the present continuous, with one mark at now.'),

 6: lambda: F.timeline(
        [('6.00', 'the market opens'), ('9.00', 'the library opens'),
         ('17.30', 'the traffic stops'), ('18.00', 'the city goes home'),
         ('23.30', 'the last train')],
        height=460,
        alt='One day in the city as a line: the market opens at six, the library at '
            'nine, the traffic stops at half past five, the city goes home at six, '
            'and the last train leaves at half past eleven.'),

 7: lambda: F.speakers(
        [('Track 3.2', 'Maya and Dani', 'bus', 'waiting at the bus stop'),
         ('Track 3.3', 'Yuki and the clerk', 'shop', 'buying a ticket'),
         ('Track 3.4', 'Mr Okonkwo', 'cup', 'the city at six')],
        height=560,
        alt='The three listenings in this unit: Maya and Dani wait at a bus stop, '
            'Yuki buys a ticket from a clerk, and Mr Okonkwo describes the city at '
            'six in the evening.'),

 8: lambda: F.cue_cards(
        ('Card A — the visitor', ['ask the way to one place', 'ask about the bus',
                                  'ask about opening times', 'thank them'], 'person'),
        ('Card B — the local', ['give two directions', 'say how long it takes',
                                'say what is happening now',
                                'answer the opening question'], 'home'),
        height=560,
        alt='The two role-play cards side by side. Card A, the visitor: ask the way '
            'to one place, ask about the bus, ask about opening times, thank them. '
            'Card B, the local: give two directions, say how long it takes, say what '
            'is happening now, answer the opening question.'),

 9: lambda: F.process_strip(
        [('the market opens', 'shop'), ('the library opens', 'book'),
         ('the traffic stops', 'bus'), ('the city goes home', 'person'),
         ('the last train', 'moon')],
        height=460,
        alt='One day in the city in five stages, each with an arrow to the next: the '
            'market opens, the library opens, the traffic stops, the city goes home, '
            'and the last train leaves.'),

 10: lambda: F.world_strip(
        [('Tokyo', 'moon', 'quiet between the last train and the first'),
         ('Madrid', 'cup', 'still eating at eleven at night'),
         ('Cairo', 'shop', 'all-night bakeries and the smell of bread')],
        height=460,
        alt='Midnight in three cities: Tokyo is quiet between the last train and the '
            'first, Madrid is still eating at eleven, and Cairo has all-night '
            'bakeries and the smell of bread.'),

 11: lambda: F.writing_frame(
        [('The place and the fact', 'The market opens at six every morning.'),
         ('What is the same every day', 'The same four tables are there.'),
         ('At the moment', 'At the moment she is putting the boxes into a van.'),
         ('One more thing happening', 'Two people are still looking.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: the place and a fact about it, what is the same every day, what '
            'is happening at the moment, and one more thing happening now.'),

 12: lambda: F.function_map(
        [('Excuse me, how do I get to the station?', 'asking the way'),
         ('Does this bus go to the centre?', 'checking you are on the right bus'),
         ('Sorry, could you say that again?', 'asking somebody to repeat'),
         ('Is there a later one?', 'asking about another time')],
        height=580,
        alt='Four things you say when you are lost, each with an arrow to what it '
            'does: asking the way, checking you are on the right bus, asking '
            'somebody to repeat, and asking about another time.'),

 13: lambda: F.before_after(
        ('The real city', ['lines are not straight', 'the real distance',
                           'you cannot read it'], 'home'),
        ('The diagram', ['straight lines', 'the same corners',
                         'which line, how many stops'], 'book'),
        height=520,
        alt='The underground map before and after. In the real city the lines are '
            'not straight and you cannot read it. The diagram has straight lines, the '
            'same corners, and tells you which line and how many stops.'),

 14: lambda: F.progress_strip(
        [('I can name the main places and things in a city', False),
         ('I can use the present simple for facts and the continuous for now', False),
         ('I can understand a conversation at a bus stop or a station', False),
         ('I can describe a place at two different hours', False),
         ('I can ask about a journey when something goes wrong', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
