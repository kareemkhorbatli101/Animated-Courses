"""Unit 2 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        2, 'Home and Neighbourhood',
        'There is, there are, some, any, much, many',
        ['I can name the rooms and parts of a building.',
         'I can use there is and there are, and some, any, much and many.',
         'I can describe a room in 50–70 words.'],
        ['home', 'shop', 'book', 'cup', 'clock'],
        alt='The opening page of Unit 2, Home and Neighbourhood: the grammar point '
            'is there is and there are with some, any, much and many, and three '
            'things the learner will be able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Balcony', 'balcony'), ('Cupboard', 'cupboard'), ('Shelf', 'shelf'), ('Stairs', 'stairs'), ('Rent', 'coins')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: balcony, '
            'cupboard, shelf, stairs, rent.'),

 3: lambda: F.bank_strip(
        [('quiet', 'moon'), ('kitchen', 'kitchen'), ('upstairs', 'stairs'), ('garden', 'garden')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: quiet, kitchen, upstairs, garden.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'ground floor'), ('Dani', 'book', 'first floor'),
         ('Maya', 'person', 'second floor'), ('Tomas', 'nurse', 'second floor'),
         ('Mr Okonkwo', 'home', 'fourth floor'), ('Yuki', 'cup', 'top flat')],
        height=560,
        alt='Who lives on which floor of 14 Alder Street: Amina’s shop on the ground '
            'floor, Dani on the first, Maya and Tomas on the second, Mr Okonkwo on '
            'the fourth with the best view, and Yuki in the top flat.'),

 5: lambda: F.word_grid(
        [('Block', 'home'), ('Entrance', 'door'), ('Lift', 'lift'), ('Rent', 'coins'), ('Recycling', 'recycling'), ('View', 'window'), ('Roof', 'roof')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: block, '
            'entrance, lift, rent, recycling, view, roof, each with the thing '
            'it means drawn beside its number.'),

 6: lambda: F.sound_shape(
        [('balcony', ['bal', 'co', 'ny'], 0),
         ('cupboard', ['cup', 'board'], 0),
         ('upstairs', ['up', 'stairs'], 1),
         ('downstairs', ['down', 'stairs'], 1),
         ('recycling', ['re', 'cy', 'cling'], 1),
         ('entrance', ['en', 'trance'], 0)],
        height=720,
        alt='Where the stress falls in six words of this unit. Each word has '
            'a bar above every syllable, tall and dark where the stress falls '
            'and short and pale elsewhere, and the same pattern again at the '
            'right as one large dot among small ones.'),

 7: lambda: F.category_set(
        [('Kitchen', 'kitchen'), ('Bathroom', 'home'), ('Bedroom', 'moon'),
         ('Living room', 'book'), ('Balcony', 'sun'), ('Entrance', 'shop')],
        height=600,
        alt='Six rooms and places in a home, each on its own card: kitchen, '
            'bathroom, bedroom, living room, balcony and entrance.'),

 8: lambda: F.label_me(
        [('roof', 0.08, 0.50), ('balcony', 0.30, 0.56), ('stairs', 0.52, 0.44),
         ('entrance', 0.74, 0.52), ('garden', 0.92, 0.46)],
        height=620, draw=F.building,
        alt='A building drawn from the side, from the roof at the top to the garden '
            'at the bottom. Five numbered lines run to the right for the learner to '
            'write roof, balcony, stairs, entrance and garden.'),

 9: lambda: F.bank_strip(
        [('noisy', 'loudspeaker'), ('shelf', 'shelf'), ('balcony', 'balcony'), ('downstairs', 'stairs')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: noisy, shelf, balcony, downstairs.'),
 10: lambda: F.writing_frame(
        [('How many rooms', 'There are four rooms in my flat.'),
         ('What there is', 'There is a balcony, but it is not very big.'),
         ('What there is not', 'There is not much space for books.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- how many rooms there are, what there is, and what there is '
            'not -- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('There is a shop on the ground floor.', 'There is'),
         ('There are five flats above it.', 'There are'),
         ('There is no lift.', 'There is'),
         ('There are some plants on Yuki\u2019s balcony.', 'There are')],
        height=440,
        alt='Four lines from the notice with the target form ringed in each. '
            'This is what a correct underlining looks like.'),

 12: lambda: F.grammar_contrast(
        ('There is', 'one thing · you cannot count it',
         'There is a shop downstairs.', [0.5]),
        ('There are', 'more than one · you can count them',
         'There are five flats.', [0.18, 0.36, 0.54, 0.72, 0.90]),
        height=640,
        alt='The unit’s grammar as two columns. On the left there is, with one mark, '
            'for one thing or a thing you cannot count. On the right there are, with '
            'five marks, for things you can count.'),

 13: lambda: F.timeline(
        [('ground floor', 'a shop'), ('first floor', 'Dani'),
         ('second floor', 'Maya and Tomas'), ('fourth floor', 'Mr Okonkwo'),
         ('top flat', 'Yuki')],
        height=460,
        alt='The building floor by floor, as a line: a shop on the ground floor, '
            'Dani on the first, Maya and Tomas on the second, Mr Okonkwo on the '
            'fourth, and Yuki in the top flat.'),

        # REVIEW: bins guessed as ['some', 'any', 'much']; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['some', 'any', 'much', 'many'],
        ['plants', 'quiet nights', 'hot water', 'space', 'bread'],
        height=560,
        alt='The five things this task counts, as chips above four empty bins '
            '-- some, any, much and many. Which chip goes in which bin is the '
            'exercise, so none of them is placed. Three of the five cannot be '
            'counted one by one, and that is what the sort is for.'),

 15: lambda: F.error_pairs(
        [('There are a shop downstairs.', 'There is a shop downstairs.'),
         ('There are a garden behind the building.', None),
         ('There is not many flats on this floor.', None),
         ('Are there some lifts in the block?', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 2.2', 'Yuki and the agent', 'home', 'looking at the flat'),
         ('Track 2.3', 'Dani and Mr Okonkwo', 'book', 'a problem on the stairs'),
         ('Track 2.4', 'Amina', 'shop', 'five flats, five homes')],
        height=560,
        alt='The three listenings in this unit: Yuki and the agent look at the flat, '
            'Dani and Mr Okonkwo talk about a problem on the stairs, and Amina '
            'describes five flats and five homes.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'Sorry \u2014 is that your box on the landing?'),
         ('Mr Okonkwo', 'home', 'There is not much space in my flat, you see.'),
         ('Dani', 'book', 'I carry my bike down every day.'),
         ('Mr Okonkwo', 'home', 'There is a cupboard downstairs, I think.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: Sorry \u2014 is that your box on the landing? Mr Okonkwo: '
            'There is not much space in my flat, you see. Dani: I carry my '
            'bike down every day. Mr Okonkwo: There is a cupboard downstairs, '
            'I think.'),

 18: lambda: F.match_columns(
        [('Maya and Tomas', 'person'), ('Dani', 'book'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['one chair and a large bag of rice',
         'a balcony with two plants',
         'books on every shelf',
         'a new kitchen and a garden',
         'forty years of newspapers'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('How many rooms are there in your home?', 'stones'),
         ('Is there a garden, a balcony or neither?', 'cross'),
         ('What is there in your street that you use every week?', 'calendar')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('three rooms', 'chair'), ('a small balcony', 'balcony'), ('rent six hundred', 'coins'), ('quiet at night', 'moon')]),
        ('Student B', [('three rooms', 'chair'), ('no balcony', 'balcony'), ('rent six hundred', 'coins'), ('noisy on Fridays', 'loudspeaker')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — the flat', ['welcome them', 'say how many rooms',
                               'answer one question honestly',
                               'one good thing, one less good'], 'home'),
        ('Card B — looking', ['ask about storage', 'ask about noise',
                              'ask about the rent', 'say what you think'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A, the person showing the '
            'flat: welcome them, say how many rooms, answer one question honestly, '
            'one good thing and one less good thing. Card B, the person looking: ask '
            'about storage, about noise and about the rent, then say what you think.'),

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('what there is in it', 1, 'chair'),
         ('what there is not much of', 2, 'cross'),
         ('why you like it or do not', 2, 'speech')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: a short one '
            'for what there is in the room, then two longer ones for what '
            'there is not much of and why you like it.'),

 23: lambda: F.process_strip(
        [('an empty flat', 'home'), ('a bed and a table', 'moon'),
         ('a cupboard', 'kitchen'), ('plants and a photograph', 'sun'),
         ('a home', 'cup')],
        height=460,
        alt='From empty flat to home in five stages, each with an arrow to the next: '
            'an empty flat, then a bed and a table, then a cupboard, then plants and '
            'a photograph, and at the end a home.'),

 24: lambda: F.word_grid(
        [('storage', 'box'), ('furniture', 'chair'), ('settle in', 'home'), ('lamp', 'lamp')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'storage, furniture, settle in, lamp.'),

 25: lambda: F.world_strip(
        [('Brazil', 'home', 'tall blocks with a shared pool'),
         ('Morocco', 'sun', 'rooms built around a courtyard'),
         ('Sweden', 'moon', 'houses of wood with three doors')],
        height=460,
        alt='Three homes in three places: tall blocks with a shared pool in Brazil, '
            'rooms built around a courtyard in Morocco, and wooden houses with three '
            'doors in Sweden.'),

 26: lambda: F.writing_frame(
        [('What room', 'There are three things in Dani’s kitchen.'),
         ('There is / there are', 'a cupboard, a small table and one chair'),
         ('What there is not much of', 'There is not much space.'),
         ('Who uses it, and why', 'Dani cooks with the door open.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: which room, then what there is in it, then what there is not '
            'much of, and last who uses it and why.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'I think a good street is a quiet one.'),
         ('two or three reasons', 'There are not many places where you can buy.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('polite, not angry', 'Hello everybody.'),
         ('the problem said once', 'There is a large box on the second-floor.'),
         ('an offer', 'I think it belongs to one of us.')],
        height=571,
        alt='The shape of the message in three steps -- polite, not angry, '
            'the problem said once, an offer -- with a line of the model '
            'beside each one.'),

 29: lambda: F.writing_frame(
        [('three or four things named', 'In my ideal home there is one very large.'),
         ('one there is not', 'There are shelves on two walls.')],
        height=408,
        alt='The shape of the reflection in two steps -- three or four things '
            'named, one there is not -- with a line of the model beside each '
            'one.'),

 30: lambda: F.function_map(
        [('Is there any storage?', 'asking what there is'),
         ('The hot water is not working.', 'reporting a problem'),
         ('Does that include the water?', 'asking what the rent covers'),
         ('Could you look at it this week?', 'asking for a repair, politely')],
        height=580,
        alt='Four things you say about a home, each with an arrow to what it does: '
            'asking what there is, reporting a problem, asking what the rent covers, '
            'and asking for a repair politely.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'I am calling about flat 5 at number 14.'),
         ('Office', 'person', 'Since when?'),
         ('Yuki', 'computer', 'Since Monday.'),
         ('Office', 'person', 'Is there a problem with the heating too?')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: I am calling about flat 5 at number 14. Office: Since '
            'when? Yuki: Since Monday. Office: Is there a problem with the '
            'heating too?'),

 32: lambda: F.sequence_steps(
        [('Say when it started.', 'speech'),
         ('Say what the problem is.', 'speech'),
         ('Agree a day.', 'sun'),
         ('Answer their questions.', 'question')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the person in the flat',
         ['say who you are', 'say the problem', 'say when it started', 'agree a day'], 'person'),
        ('Card B \u2014 the office',
         ['ask since when', 'ask one more question', 'offer a day', 'say who comes'], 'computer'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the person in the '
            'flat: say who you are, say the problem, say when it started, '
            'agree a day. Card B \u2014 the office: ask since when, ask one more '
            'question, offer a day, say who comes.'),

 34: lambda: F.writing_frame(
        [('where you live', 'Good morning.'),
         ('the problem and when', 'I am writing about flat 3 at 14 Alder Street.'),
         ('a day you are free', 'There is no light on the stairs between.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- where you '
            'live, the problem and when, a day you are free -- with a line of '
            'the model beside each one.'),

 35: lambda: F.before_after(
        ('Before', ['eleven cars', 'nowhere to sit', 'no shade'], 'bus'),
        ('After', ['closed every Sunday', 'chairs and tables',
                   'four trees'], 'sun'),
        height=520,
        alt='Clara’s street in Brazil before and after. Before: eleven cars, nowhere '
            'to sit, no shade. After: closed every Sunday, chairs and tables, and '
            'four trees.'),

 36: lambda: F.word_grid(
        [('shade', 'tree'), ('council', 'plaque'), ('permission', 'tick'), ('square', 'square')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'shade, council, permission, square.'),
 37: lambda: F.close_scene(
        [('the empty flat', 'door'), ('the post', 'envelope'),
         ('the landing', 'stairs'), ('the shop', 'shop')],
        height=460,
        alt='The empty flat at number 14 drawn along one landing: the door '
            'nobody opens, the post that arrives for somebody who is not '
            'there, the landing where the pile grew, and the shop where Amina '
            'asked twice whether anybody knew the name.'),

 38: lambda: F.decision_fork(
        'A flat in your building is empty and the post is piling up?',
        [('Leave it alone',
          ['it costs nothing', 'the pile is bigger every week'], 'envelope'),
         ('Ask the other neighbours',
          ['somebody usually knows more', 'it is not official yet'], 'crowd'),
         ('Write to the council',
          ['they can find the owner', 'they ask questions you cannot answer'],
          'plaque')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: leave it alone and the pile is bigger every week; ask the other '
            'neighbours, because somebody usually knows more; or write to the '
            'council, who can find the owner but ask questions you cannot '
            'answer yet.'),

 39: lambda: F.bank_strip(
        [('balcony', 'balcony'), ('cupboard', 'cupboard'), ('neighbour', 'home'), ('there is', 'one_thing'), ('there are', 'many_things'), ('much', 'bottle'), ('many', 'stones'), ('commute', 'bus')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'balcony, cupboard, neighbour, there is, there are, much, many, '
            'commute.'),

 40: lambda: F.progress_strip(
        [('I can name the rooms and parts of a building', False),
         ('I can use there is and there are', False),
         ('I can understand somebody describing a flat', False),
         ('I can describe a room in 50–70 words', False),
         ('I can report a problem and ask for a repair', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('balcony', 'balcony'), ('cupboard', 'cupboard'), ('rent', 'coins'), ('entrance', 'door'), ('landing', 'stairs'), ('view', 'window'), ('roof', 'roof'), ('garden', 'garden'), ('furniture', 'chair'), ('lift', 'lift')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 2 as picture cards on one page: '
            'balcony, cupboard, rent, entrance, landing, view, roof, garden, '
            'furniture, lift.'),
}
