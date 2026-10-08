"""Unit 9 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        9, 'Finding Your Way',
        'Prepositions of place, time and movement',
        ['I can say where places are, using prepositions of place.',
         'I can give simple directions from one place to another.',
         'I can write directions to my home in 50–70 words.'],
        ['sign', 'bridge', 'shop', 'bus', 'home'],
        alt='The opening page of Unit 9, Finding Your Way: the grammar point is '
            'prepositions of place, time and movement, and three things the learner '
            'will be able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Junction', 'junction'), ('Roundabout', 'roundabout'), ('Lane', 'lane'), ('Square', 'square'), ('Address', 'envelope')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: junction, '
            'roundabout, lane, square, address.'),

 3: lambda: F.bank_strip(
        [('address', 'envelope'), ('far', 'arrow_right'), ('towards', 'arrow_right'), ('lane', 'lane')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: address, far, towards, lane.'),

 4: lambda: F.scene(
        [('the junction', 'sign', 'four roads, no sign'),
         ('number 14', 'home', 'halfway along'),
         ('the shop', 'shop', 'on the ground floor'),
         ('the square', 'tree', 'a bench and two trees'),
         ('the health centre', 'hospital', 'behind the square'),
         ('the bridge', 'bridge', 'at the bottom')],
        height=560,
        alt='Alder Street from the junction at the top to the bridge at the bottom: '
            'the junction with four roads and no sign, number 14 halfway along, the '
            'shop on its ground floor, the square with a bench and two trees, the '
            'health centre behind the square, and the bridge at the bottom.'),

 5: lambda: F.word_grid(
        [('Junction', 'junction'), ('Roundabout', 'roundabout'), ('Lane', 'lane'), ('Square', 'square'), ('Address', 'envelope'), ('Towards', 'arrow_right'), ('Ahead', 'arrow_up')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: junction, '
            'roundabout, lane, square, address, towards, ahead, each with the '
            'thing it means drawn beside its number.'),

 6: lambda: F.annotated_lines(
        [('Turn left at the junction', 'at the'),
         ('Go straight ahead', 'a'),
         ('It is opposite the square', 'the'),
         ('Down to the bridge, then left', 'to the')],
        height=464,
        alt='Four phrases from this unit with the word that carries the beat '
            'ringed in each: at the, a, the, to the.'),

 7: lambda: F.category_set(
        [('A junction', 'sign'), ('A square', 'tree'), ('A roundabout', 'bus'),
         ('A lane', 'shop'), ('A bridge', 'bridge'), ('A block', 'school')],
        height=600,
        alt='Six kinds of place, each on its own card: a junction, a square, a '
            'roundabout, a lane, a bridge and a block.'),

 8: lambda: F.label_me(
        [('Between', 0.27, 0.32), ('Opposite', 0.60, 0.32),
         ('Next to', 0.64, 0.48), ('Behind', 0.80, 0.69),
         ('Below', 0.82, 0.90)],
        height=620, draw=F.street_plan,
        alt='A plan of one street seen from above: the road across the middle, '
            'three buildings in a row above it, two below it, a square with a bench, '
            'a low building behind the square, and on the right one building cut '
            'open to show a flat over a shop. Five numbered lines run to the right '
            'for the learner to write each word.'),

 9: lambda: F.bank_strip(
        [('ahead', 'arrow_up'), ('square', 'square'), ('junction', 'junction'), ('block', 'home')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: ahead, square, junction, block.'),
 10: lambda: F.writing_frame(
        [('Where you live', 'I live in a lane behind a square.'),
         ('What is near', 'The nearest junction is two minutes away.'),
         ('How people find you', 'My address is easy to write and hard to find.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- where you live, what is near, and how people find you -- with '
            'a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('The shop is on the corner.', 'on'),
         ('The health centre is behind the square.', 'behind'),
         ('Amina opens at seven.', 'at'),
         ('The bus goes along Alder Street and over the bridge.', 'along')],
        height=440,
        alt='Four lines from the notice with the preposition ringed in each: '
            'on, behind, at, along. Three of the four say where and one says '
            'when, which is the question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('at · on · in', 'a point, a line, a space',
         'at the junction, on Alder Street, in the square', [0.50]),
        ('along · towards · past', 'how you move',
         'Walk along the lane, towards the bridge.', [0.14, 0.86]),
        height=640,
        alt='The unit’s grammar as two columns. On the left at, on and in, for a '
            'point, a line and a space, with one mark for the one place they fix. On '
            'the right along, towards and past, for movement, with a mark at each '
            'end of the line somebody walks.'),

 13: lambda: F.timeline(
        [('the stop', 'get off by the bridge'), ('back', 'towards the junction'),
         ('second left', 'a lane with no sign'), ('the corner', 'a green shop'),
         ('above it', 'number 14')],
        height=460,
        alt='One walk as five steps on a line: get off at the stop by the bridge, '
            'walk back towards the junction, take the second road on the left into a '
            'lane with no sign, go on to the green shop on the corner, and number 14 '
            'is above it.'),

        # REVIEW: bins guessed as []; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['where', 'when', 'how'],
        ['at twenty past eight', 'across the square', 'above the shop',
         'on Saturday'],
        height=560,
        alt='The four phrases of this task as chips above three empty bins -- '
            'where, when and how. Which chip goes in which bin is the '
            'exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('The health centre is behind of the square.', 'The health centre is behind the square.'),
         ('The health centre is behind of the square.', None),
         ('Walk at the bridge and then turn left.', None),
         ('Amina opens the shop in seven.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 9.2', 'Yuki and Amina', 'shop', 'asking the way next door'),
         ('Track 9.3', 'Dani and a driver', 'bus', 'a driver who cannot find the door'),
         ('Track 9.4', 'Amina', 'person', 'five people, five ways')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Amina the way to the '
            'health centre, Dani talks a driver down the street by telephone, and '
            'Amina describes five people and five ways of finding the way.'),

 17: lambda: F.dialogue_strip(
        [('Driver', 'bus', 'I\u2019m at a junction with four roads and no sign.'),
         ('Dani', 'book', 'That\u2019s the top of our street.'),
         ('Driver', 'bus', 'Which way do I go?'),
         ('Dani', 'book', 'You come down the hill, towards the bridge.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Driver: I\u2019m at a junction with four roads and no sign. '
            'Dani: That\u2019s the top of our street. Driver: Which way do I go? '
            'Dani: You come down the hill, towards the bridge.'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['knows every back lane in the area',
         'gives directions by what is no longer',
         'walks with the map open and still turns',
         'writes it down and reads it at every',
         'asks the driver to wait at the corner'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('How do you find your way in a city you do not know?', 'cross'),
         ('Do you use a map, a sign, or a person?', 'person'),
         ('What is the hardest place you ever tried to find?', 'magnifier')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('the shop', 'pin')]),
        ('Student B', [('the shop is opposite', 'junction')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['say excuse me', 'name the place',
                             'ask how far', 'repeat the last step back'], 'person'),
        ('Card B — telling', ['ask where they came from', 'give two steps, not six',
                              'name one landmark', 'say how long it takes'], 'sign'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: say excuse me, '
            'name the place, ask how far, repeat the last step back. Card B, '
            'telling: ask where they came from, give two steps not six, name one '
            'landmark, say how long it takes.'),

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('your home', 1, 'home'),
         ('the first junction', 2, 'junction'),
         ('the landmark', 2, 'bridge'),
         ('the nearest shop', 1, 'shop')],
        height=420,
        alt='The one-minute talk as the four steps the task asks for, on a '
            'clock line, each block as wide as the share of the minute it '
            'should take: your home, the first junction, the landmark, and '
            'the nearest shop.'),

 23: lambda: F.process_strip(
        [('the same way', 'home'), ('one draws a line', 'sign'),
         ('one draws the area', 'book'), ('the road is closed', 'bus'),
         ('only one finds a new way', 'sun')],
        height=460,
        alt='Two ways of knowing one walk, in five stages with an arrow to the next: '
            'both people walk the same way home, one draws it as a line of turns, '
            'the other draws the whole area, then the road is closed, and only the '
            'second one finds a new way.'),

 24: lambda: F.word_grid(
        [('route', 'path'), ('survey', 'list'), ('landmark', 'bridge'), ('facing', 'arrow_right')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'route, survey, landmark, facing.'),

 25: lambda: F.world_strip(
        [('Tokyo', 'home', 'no street names; the area, then the block, then the building'),
         ('New York', 'school', 'two numbers fix a place exactly'),
         ('Venice', 'bridge', 'yellow signs, and every one points to the Rialto')],
        height=460,
        alt='Three cities and three ways of saying where you are: Tokyo, where the '
            'streets have no names and an address gives the area then the block then '
            'the building; New York, where two numbers fix a place exactly; and '
            'Venice, where small yellow signs all point to the Rialto.'),

 26: lambda: F.writing_frame(
        [('Where to get off', 'Get off at the stop by the bridge.'),
         ('Which way', 'Walk back towards the junction.'),
         ('One landmark', 'Look for the green shop on the corner.'),
         ('What too far looks like', 'If you reach the square, turn round.')],
        height=520,
        alt='The shape of the directions the learner is about to write, in four '
            'steps: where to get off, which way to walk, one landmark to look for, '
            'and what too far looks like.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'A person is better, and not because people.'),
         ('two or three reasons', 'A map gives everything at once.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('where it is', 'The bookshop where I work is hard to find.'),
         ('why people walk past', 'It sits in a lane behind the square.'),
         ('one preposition of place', 'The door is under a baker\u2019s sign.')],
        height=571,
        alt='The shape of the message in three steps -- where it is, why '
            'people walk past, one preposition of place -- with a line of the '
            'model beside each one.'),

 29: lambda: F.writing_frame(
        [('where you were', 'I got lost in the town I grew up.'),
         ('what went wrong', 'I was walking to the station and I turned one.'),
         ('what you did', 'Everything looked almost right for ten.')],
        height=571,
        alt='The shape of the reflection in three steps -- where you were, '
            'what went wrong, what you did -- with a line of the model beside '
            'each one.'),

 30: lambda: F.function_map(
        [('Excuse me, am I anywhere near the square?', 'asking without a map'),
         ('It is the third on your left, after the lights.', 'giving it in one line'),
         ('I am not from here either.', 'saying you cannot help'),
         ('Do you want me to walk you to the corner?', 'offering more than was asked')],
        height=580,
        alt='Four things people say when they ask or give the way, each with an '
            'arrow to what it does: asking without a map, giving it in one line, '
            'saying you cannot help, and offering more than was asked.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'Excuse me, is this the way to the health.'),
         ('Man', 'person', 'Yes, straight ahead, past the post office.'),
         ('Yuki', 'computer', 'Thank you.'),
         ('Woman', 'speech', 'You walked away from it.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: Excuse me, is this the way to the health. Man: Yes, '
            'straight ahead, past the post office. Yuki: Thank you. Woman: '
            'You walked away from it.'),

 32: lambda: F.sequence_steps(
        [('Say how long it takes on foot.', 'pin'),
         ('Give two steps, and no more.', 'stairs'),
         ('Tell them what to do if they go too far.', 'arrow_right'),
         ('Name one thing they cannot miss.', 'list')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 asking',
         ['say where you came from', 'name the place', 'ask how far', 'repeat the last step back'], 'question'),
        ('Card B \u2014 telling',
         ['ask where they are first', 'two steps only', 'one landmark', 'say what too far looks like'], 'speech'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 asking: say where '
            'you came from, name the place, ask how far, repeat the last step '
            'back. Card B \u2014 telling: ask where they are first, two steps '
            'only, one landmark, say what too far looks like.'),

 34: lambda: F.writing_frame(
        [('where they are now', 'You are at the top junction \u2014 four roads.'),
         ('which way to come', 'Come down the hill towards the bridge, slowly.'),
         ('one landmark', 'The first building with a shop in it is ours.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- where '
            'they are now, which way to come, one landmark -- with a line of '
            'the model beside each one.'),

 35: lambda: F.before_after(
        ('A sign with a name', ['a place name', 'you need the map', 'no use to a stranger'], 'sign'),
        ('A sign with a number', ['a number of two figures', 'the next numbers in each direction',
                                  'anybody able to count'], 'sign_number'),
        height=520,
        alt='Two kinds of sign. One carries a place name, which only helps somebody '
            'who already knows the map. The other carries a number of two figures '
            'and the next numbers in each direction, which helps anybody able to '
            'count.'),

 36: lambda: F.word_grid(
        [('network', 'network'), ('pole', 'sign'), ('junction', 'junction'), ('stranger', 'person')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'network, pole, junction, stranger.'),
 37: lambda: F.close_scene(
        [('number 8', 'door'), ('number 14', 'home'),
         ('the green shop', 'shop'), ('the top junction', 'junction')],
        height=460,
        alt='Alder Street drawn in the order its doors actually run: number '
            '8, then number 14 between it and number 20, then the window '
            'Amina painted GREEN SHOP across because it works better than any '
            'number, and the top junction where a car stood for eleven '
            'minutes.'),

 38: lambda: F.decision_fork(
        'Your street has no useful numbers. What do you do?',
        [('Ask the city',
          ['the whole street is numbered', 'eight years for one lamp'],
          'plaque'),
         ('Put up your own sign',
          ['one afternoon', 'it helps only at that junction'], 'sign'),
         ('Tell everybody the landmark',
          ['it works better than a number', 'you say it every time'],
          'speech')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: ask the city, which numbers the whole street but '
            'took eight years to repair one street lamp; put up your own sign '
            'at the junction, which costs one afternoon; or tell everybody '
            'the landmark instead.'),

 39: lambda: F.bank_strip(
        [('roundabout', 'roundabout'), ('lane', 'lane'), ('square', 'square'), ('address', 'envelope'), ('towards', 'arrow_right'), ('at', 'pin'), ('borrow', 'hands'), ('timetable', 'timetable')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'roundabout, lane, square, address, towards, at, borrow, '
            'timetable.'),

 40: lambda: F.progress_strip(
        [('I can say where places are, using prepositions of place', False),
         ('I can give simple directions from one place to another', False),
         ('I can understand somebody telling me the way', False),
         ('I can write directions to my home in 50–70 words', False),
         ('I can ask the way when I have no map', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('junction', 'junction'), ('roundabout', 'roundabout'), ('lane', 'lane'), ('square', 'square'), ('address', 'envelope'), ('block', 'home'), ('towards', 'arrow_right'), ('ahead', 'arrow_up'), ('below', 'arrow_down'), ('far', 'arrow_right')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 9 as picture cards on one page: '
            'junction, roundabout, lane, square, address, block, towards, '
            'ahead, below, far.'),
}
