"""Unit 3 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        3, 'A Day in the City',
        'Present continuous and present simple',
        ['I can name the main places and things in a city.',
         'I can use the present simple for facts and the present continuous for now.',
         'I can describe a place at two different hours in 50–70 words.'],
        ['bus', 'clock', 'shop', 'book', 'sun'],
        alt='The opening page of Unit 3, A Day in the City: the grammar point is the '
            'present continuous against the present simple, and three things the '
            'learner will be able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Market', 'market'), ('Bridge', 'bridge'), ('Crossing', 'crossing'), ('Bench', 'bench'), ('Library', 'library')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: market, '
            'bridge, crossing, bench, library.'),

 3: lambda: F.bank_strip(
        [('traffic', 'traffic'), ('crowd', 'crowd'), ('ticket', 'ticket'), ('park', 'bench')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: traffic, crowd, ticket, park.'),

 4: lambda: F.before_after(
        ('Eight in the morning', ['buses stop at the corner', 'the market is opening',
                                  'everybody is walking quickly'], 'sun'),
        ('Eight at night', ['the market is closed', 'two people on the bench',
                            'somebody is playing music'], 'moon'),
        height=520,
        alt='Alder Street at two hours. At eight in the morning buses stop at the '
            'corner, the market is opening and everybody is walking quickly. At eight '
            'at night the market is closed, two people are on the bench and somebody '
            'is playing music.'),

        # REVIEW: icon not in the map for ['Escalator'],

 5: lambda: F.word_grid(
        [('Timetable', 'timetable'), ('Crossing', 'crossing'), ('Escalator', 'escalator'), ('Traffic', 'traffic'), ('Crowd', 'crowd'), ('Market', 'market'), ('Bench', 'bench')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: '
            'timetable, crossing, escalator, traffic, crowd, market, bench, '
            'each with the thing it means drawn beside its number.'),

 6: lambda: F.sound_shape(
        [('traffic', ['tra', 'ffic'], 0),
         ('market', ['mar', 'ket'], 0),
         ('library', ['li', 'bra', 'ry'], 0),
         ('escalator', ['es', 'ca', 'la', 'tor'], 0),
         ('timetable', ['time', 'ta', 'ble'], 0),
         ('crossing', ['cro', 'ssing'], 0)],
        height=720,
        alt='Where the stress falls in six words of this unit. Each word has '
            'a bar above every syllable, tall and dark where the stress falls '
            'and short and pale elsewhere, and the same pattern again at the '
            'right as one large dot among small ones.'),

 7: lambda: F.category_set(
        [('Market', 'shop'), ('Library', 'book'), ('Station', 'bus'),
         ('Park', 'sun'), ('Bridge', 'home'), ('Bench', 'cup')],
        height=600,
        alt='Six places in a city, each on its own card: market, library, station, '
            'park, bridge and bench.'),

 8: lambda: F.label_me(
        [('bridge', 0.10, 0.50), ('traffic', 0.30, 0.46), ('crossing', 0.52, 0.54),
         ('bench', 0.74, 0.44), ('market', 0.92, 0.52)],
        height=620, draw=F.streetscape,
        alt='A street drawn from the side, with a bridge over it, traffic on the '
            'road, a crossing, a bench and a market. Five numbered lines run to the '
            'right for the learner to write each word.'),

 9: lambda: F.bank_strip(
        [('crowd', 'crowd'), ('traffic', 'traffic'), ('ticket', 'ticket'), ('library', 'library')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: crowd, traffic, ticket, library.'),
 10: lambda: F.writing_frame(
        [('Your city in the morning', 'My city is quiet in the morning.'),
         ('What happens every evening', 'The traffic stops near the bridge.'),
         ('What there is on Saturday', 'There is a small market on Saturday.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- your city in the morning, what happens there every evening, '
            'and what there is on Saturday -- with a line of the model beside '
            'each one.'),

 11: lambda: F.annotated_lines(
        [('The market opens at six every morning.', 'opens'),
         ('Right now it is opening, and the first van is arriving.', 'is opening'),
         ('Buses stop at this corner.', 'stop'),
         ('At the moment three buses are standing in a line.', 'are standing')],
        height=440,
        alt='Four lines from the notice with the verb ringed in each: opens, '
            'is opening, stop, are standing. Two are always true and two are '
            'happening now, and the ring is what a correct underlining looks '
            'like.'),

 12: lambda: F.grammar_contrast(
        ('Present simple', 'it opens · they stop',
         'The market opens at six.', [0.12, 0.34, 0.56, 0.78]),
        ('Present continuous', 'is / are + -ing',
         'It is opening now.', [0.5]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the present simple, with '
            'four marks across a timeline for a fact that holds every day. On the '
            'right the present continuous, with one mark at now.'),

 13: lambda: F.timeline(
        [('6.00', 'the market opens'), ('9.00', 'the library opens'),
         ('17.30', 'the traffic stops'), ('18.00', 'the city goes home'),
         ('23.30', 'the last train')],
        height=460,
        alt='One day in the city as a line: the market opens at six, the library at '
            'nine, the traffic stops at half past five, the city goes home at six, '
            'and the last train leaves at half past eleven.'),

        # REVIEW: bins guessed as ['opens', 'is opening', 'plays']; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['every day', 'right now'],
        ['every Saturday', 'Listen!', 'ten past eight', 'today'],
        height=540,
        alt='The four time cues of this task as chips above two empty bins, '
            'one for what happens every day and one for what is happening '
            'right now. Which chip goes in which bin is the exercise, so none '
            'of them is placed.'),

 15: lambda: F.error_pairs(
        [('The market is opening at six every day.', 'The market opens at six.'),
         ('The library is opening at nine every day.', None),
         ('Look! The traffic stop at the bridge.', None),
         ('I am wanting a ticket for the six o\u2019clock bus.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 3.2', 'Maya and Dani', 'bus', 'waiting at the bus stop'),
         ('Track 3.3', 'Yuki and the clerk', 'shop', 'buying a ticket'),
         ('Track 3.4', 'Mr Okonkwo', 'cup', 'the city at six')],
        height=560,
        alt='The three listenings in this unit: Maya and Dani wait at a bus stop, '
            'Yuki buys a ticket from a clerk, and Mr Okonkwo describes the city at '
            'six in the evening.'),

 17: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'One ticket to the centre, please.'),
         ('Clerk', 'person', 'Single or return?'),
         ('Yuki', 'computer', 'How much is the fare?'),
         ('Clerk', 'person', 'The next train leaves at ten past.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Yuki: One ticket to the centre, please. Clerk: Single or '
            'return? Yuki: How much is the fare? Clerk: The next train leaves '
            'at ten past.'),

 18: lambda: F.match_columns(
        [('A woman', 'person'), ('A runner', 'person'), ('Two students', 'book'), ('People on the bridge', 'pin')],
        ['running for a train',
         'selling flowers',
         'walking across',
         'buying a timetable',
         'eating and arguing about a film'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What is the busiest place in your city, and when is it busiest?', 'pin'),
         ('How do you travel across the city?', 'street'),
         ('What is happening in your street right now, do you think?', 'pin')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('the market is open', 'market'), ('four people', 'crowd'), ('a man is selling', 'notice'), ('it is raining', 'rain')]),
        ('Student B', [('the market is open', 'market'), ('two people are waiting', 'crowd'), ('a man is reading', 'book'), ('it is raining', 'rain')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
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

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('which place it is', 1, 'pin'),
         ('what happens there every day', 2, 'calendar'),
         ('what is happening there at the moment', 2, 'clock')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: a short one '
            'for which place it is, then two longer ones for what happens '
            'there every day and what is happening there at the moment.'),

 23: lambda: F.process_strip(
        [('the market opens', 'shop'), ('the library opens', 'book'),
         ('the traffic stops', 'bus'), ('the city goes home', 'person'),
         ('the last train', 'moon')],
        height=460,
        alt='One day in the city in five stages, each with an arrow to the next: the '
            'market opens, the library opens, the traffic stops, the city goes home, '
            'and the last train leaves.'),

        # REVIEW: icon not in the map for ['queue', 'deliver'],

 24: lambda: F.word_grid(
        [('rush hour', 'clock'), ('queue', 'crowd'), ('deliver', 'envelope'), ('timetable', 'timetable')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: rush '
            'hour, queue, deliver, timetable.'),

 25: lambda: F.world_strip(
        [('Tokyo', 'moon', 'quiet between the last train and the first'),
         ('Madrid', 'cup', 'still eating at eleven at night'),
         ('Cairo', 'shop', 'all-night bakeries and the smell of bread')],
        height=460,
        alt='Midnight in three cities: Tokyo is quiet between the last train and the '
            'first, Madrid is still eating at eleven, and Cairo has all-night '
            'bakeries and the smell of bread.'),

 26: lambda: F.writing_frame(
        [('The place and the fact', 'The market opens at six every morning.'),
         ('What is the same every day', 'The same four tables are there.'),
         ('At the moment', 'At the moment she is putting the boxes into a van.'),
         ('One more thing happening', 'Two people are still looking.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: the place and a fact about it, what is the same every day, what '
            'is happening at the moment, and one more thing happening now.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'I think walking is the best way to cross.'),
         ('two or three reasons', 'You see the shops that you pass every day.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('a place and a time', 'Hi Yuki.'),
         ('how to get there', 'Let\u2019s meet at the café by the library.'),
         ('one sentence about you', 'The 7 bus stops at the crossing outside.')],
        height=571,
        alt='The shape of the message in three steps -- a place and a time, '
            'how to get there, one sentence about you -- with a line of the '
            'model beside each one.'),

 29: lambda: F.writing_frame(
        [('an hour named', 'My favourite hour is seven in the morning.'),
         ('what is happening then', 'The shops are opening and nobody.'),
         ('a reason', 'One man is always washing the front.')],
        height=571,
        alt='The shape of the reflection in three steps -- an hour named, '
            'what is happening then, a reason -- with a line of the model '
            'beside each one.'),

 30: lambda: F.function_map(
        [('Excuse me, how do I get to the station?', 'asking the way'),
         ('Does this bus go to the centre?', 'checking you are on the right bus'),
         ('Sorry, could you say that again?', 'asking somebody to repeat'),
         ('Is there a later one?', 'asking about another time')],
        height=580,
        alt='Four things you say when you are lost, each with an arrow to what it '
            'does: asking the way, checking you are on the right bus, asking '
            'somebody to repeat, and asking about another time.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'Excuse me \u2014 the board says there is no ten.'),
         ('Staff', 'person', 'There is a problem on the line at the bridge.'),
         ('Yuki', 'computer', 'Is there a later one?'),
         ('Staff', 'person', 'It takes forty minutes, not twenty.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: Excuse me \u2014 the board says there is no ten. Staff: There '
            'is a problem on the line at the bridge. Yuki: Is there a later '
            'one? Staff: It takes forty minutes, not twenty.'),

 32: lambda: F.sequence_steps(
        [('Decide and go.', 'list'),
         ('Ask somebody who works there.', 'person'),
         ('Ask what the other ways are.', 'question'),
         ('Ask how long the other way takes.', 'question')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the traveller',
         ['say what you wanted', 'ask for another way', 'ask how long it takes', 'decide out loud'], 'person'),
        ('Card B \u2014 the staff',
         ['say what is wrong', 'offer two ways', 'say how long each takes', 'say which one is leaving now'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the traveller: '
            'say what you wanted, ask for another way, ask how long it takes, '
            'decide out loud. Card B \u2014 the staff: say what is wrong, offer '
            'two ways, say how long each takes, say which one is leaving now.'),

 34: lambda: F.writing_frame(
        [('an apology', 'Hi Maya, I am sorry \u2014 I am late.'),
         ('what happened', 'There is no ten past, because of a problem.'),
         ('how late you are', 'I am on the 12 bus instead and it is moving.'),
         ('what they should do', 'I think I am twenty minutes behind.')],
        height=734,
        alt='The shape of the Part 7 writing task in four steps -- an '
            'apology, what happened, how late you are, what they should do -- '
            'with a line of the model beside each one.'),

 35: lambda: F.before_after(
        ('The real city', ['lines are not straight', 'the real distance',
                           'you cannot read it'], 'home'),
        ('The diagram', ['straight lines', 'the same corners',
                         'which line, how many stops'], 'book'),
        height=520,
        alt='The underground map before and after. In the real city the lines are '
            'not straight and you cannot read it. The diagram has straight lines, the '
            'same corners, and tells you which line and how many stops.'),

        # REVIEW: icon not in the map for ['diagram', 'scale', 'underground', 'passenger'],

 36: lambda: F.word_grid(
        [('diagram', 'network'), ('scale', 'scales'), ('underground', 'network'), ('passenger', 'guest')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'diagram, scale, underground, passenger.'),
 37: lambda: F.close_scene(
        [('the corner', 'junction'), ('the shop', 'shop'),
         ('the main road', 'lane'), ('the bus stop', 'bus')],
        height=460,
        alt='The two hundred metres the bus stop moved, drawn along one '
            'street: the corner it used to stand on, the shop outside it '
            'where people waiting bought bread, the main road it moved to, '
            'and the stop itself.'),

 38: lambda: F.decision_fork(
        'The bus stop near you is moving. What do you do?',
        [('Accept it',
          ['the corner is clearer', 'two hundred metres with shopping'],
          'tick'),
         ('Ask the bus company',
          ['a company listens to eleven', 'their reason is about buses'],
          'coach'),
         ('Ask the people in your street',
          ['you learn what it costs them', 'you have to ask first'],
          'crowd')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: accept it and the corner is clearer but the walk '
            'is two hundred metres with shopping; ask the bus company, which '
            'listens to eleven people and not to one; or ask the people in '
            'your street what the stop was worth to them.'),

 39: lambda: F.bank_strip(
        [('timetable', 'timetable'), ('crossing', 'crossing'), ('traffic', 'traffic'), ('crowd', 'crowd'), ('opens', 'calendar'), ('is opening', 'door'), ('balcony', 'balcony'), ('commute', 'bus')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'timetable, crossing, traffic, crowd, opens, is opening, balcony, '
            'commute.'),

 40: lambda: F.progress_strip(
        [('I can name the main places and things in a city', False),
         ('I can use the present simple for facts and the continuous for now', False),
         ('I can understand a conversation at a bus stop or a station', False),
         ('I can describe a place at two different hours', False),
         ('I can ask about a journey when something goes wrong', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('market', 'market'), ('bridge', 'bridge'), ('crossing', 'crossing'), ('bench', 'bench'), ('library', 'library'), ('traffic', 'traffic'), ('crowd', 'crowd'), ('ticket', 'ticket'), ('timetable', 'timetable'), ('fare', 'coins')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 3 as picture cards on one page: '
            'market, bridge, crossing, bench, library, traffic, crowd, '
            'ticket, timetable, fare.'),
}
