"""Unit 15 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        15, 'Experiences',
        'The present perfect: ever and never',
        ['I can talk about things I have done, with no date.',
         'I can use ever, never, already and yet correctly.',
         'I can write about an experience in 50–70 words.'],
        ['plane', 'tent', 'island', 'book', 'clock'],
        alt='The opening page of Unit 15, Experiences: the grammar point is the '
            'present perfect with ever and never, and three things the learner will '
            'be able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Abroad', 'plane'), ('Camping', 'tent'), ('Festival', 'concert'), ('Island', 'island'), ('Desert', 'sun')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: abroad, '
            'camping, festival, island, desert.'),

 3: lambda: F.bank_strip(
        [('experience', 'star'), ('memory', 'before_now'), ('tour', 'path'), ('adventure', 'mountain')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: experience, memory, tour, adventure.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'has never been on a plane'),
         ('Tomas', 'nurse', 'has slept in an airport three times'),
         ('Maya', 'book', 'has read a book in one day, twice'),
         ('Dani', 'kitchen', 'has lost his papers in two countries'),
         ('Mr Okonkwo', 'home', 'has lived in four cities'),
         ('Yuki', 'cup', 'has never found out what she ate')],
        height=560,
        alt='What each of the six people at number 14 has done: Amina has never been '
            'on a plane, Tomas has slept in an airport three times, Maya has read a '
            'book in one day twice, Dani has lost his papers in two countries, Mr '
            'Okonkwo has lived in four cities, and Yuki has never found out what she '
            'ate in a market.'),

 5: lambda: F.word_grid(
        [('Abroad', 'plane'), ('Adventure', 'mountain'), ('Exhibition', 'museum'), ('Tour', 'path'), ('Memory', 'before_now'), ('Island', 'island'), ('Festival', 'concert')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: abroad, '
            'adventure, exhibition, tour, memory, island, festival, each with '
            'the thing it means drawn beside its number.'),

        # REVIEW: pronunciation section not recognised
 6: lambda: F.sound_shape(
        [REVIEW],
        height=460,
        alt='The pronunciation point of this unit, drawn.'),

 7: lambda: F.category_set(
        [('Abroad', 'plane'), ('Camping', 'tent'), ('An island', 'island'),
         ('A festival', 'person'), ('A desert', 'sun'), ('An exhibition', 'book')],
        height=600,
        alt='Six kinds of experience, each on its own card: abroad, camping, an '
            'island, a festival, a desert and an exhibition.'),

 8: lambda: F.label_me(
        [('once', 0.313, 0.14), ('twice', 0.412, 0.33),
         ('never', 0.510, 0.52), ('already', 0.609, 0.71), ('yet', 0.695, 0.875)],
        height=620, draw=F.life_line,
        alt='One life drawn as a line running left to right, with four marks on it '
            'and an open bracket at the end: a single filled circle, two filled '
            'circles together, an empty circle with a line through it, a filled '
            'circle well before the end, and then the bracket where the line stops. '
            'Five numbered lines run to the right for the learner to write each '
            'word.'),

 9: lambda: F.bank_strip(
        [('desert', 'sun'), ('camping', 'tent'), ('memory', 'before_now'), ('festival', 'concert')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: desert, camping, memory, festival.'),
 10: lambda: F.writing_frame(
        [('What you have done', 'I have been camping exactly once.'),
         ('What you have never done', 'I have never done it again.'),
         ('What you remember', 'It is my only memory of that many stars.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- what you have done, what you have never done, and what you '
            'remember -- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('I have been to four countries.', 'have been'),
         ('She has never flown.', 'has never'),
         ('Have you ever slept outside?', 'Have'),
         ('They have not arrived yet.', 'have not')],
        height=440,
        alt='Four lines from the notice with have or has ringed in each. Two '
            'ask about a whole life and two say a thing never happened, which '
            'is the question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('I have been to Peru.', 'experience, no date',
         'Somewhere in a whole life.', [0.22, 0.46, 0.70]),
        ('I went there last year.', 'a finished time',
         'One point, and you can name it.', [0.34]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the present perfect for '
            'experience, with three marks spread across a whole life because no date '
            'is given. On the right the past simple for a finished time, with one '
            'mark on the exact point the speaker can name.'),

 13: lambda: F.timeline(
        [('long ago', 'slept outside once'), ('after that', 'went abroad'),
         ('then', 'four countries'), ('this year', 'already twice'),
         ('still', 'never flown')],
        height=460,
        alt='One life on a line: slept outside once long ago, then went abroad, then '
            'four countries, abroad already twice this year, and still never '
            'flown.'),
 14: lambda: F.sort_bins(
        ['experience', 'finished time'],
        ['to four countries', 'to Peru last year', 'has never flown',
         'arrived on Tuesday'],
        height=540,
        alt='The four sentences of this task as chips above two empty bins, '
            'one for an experience with no time on it and one for a finished '
            'time. Which chip goes in which bin is the exercise, so none of '
            'them is placed.'),

 15: lambda: F.error_pairs(
        [('I have been there last year.', 'I went there last year.'),
         ('I have been there last year.', None),
         ('Have you ever went to a festival?', None),
         ('She has never flied.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 15.2', 'Yuki and Amina', 'plane', 'have you ever?'),
         ('Track 15.3', 'Maya and Dani', 'book', 'the lost travel papers'),
         ('Track 15.4', 'Amina', 'person', 'six people, six experiences')],
        height=560,
        alt='The three listenings in this unit: Yuki finds out that Amina has never '
            'flown and has never wanted to, Dani tells Maya how he lost his travel '
            'papers twice, and Amina describes what each of the six has done.'),

 17: lambda: F.dialogue_strip(
        [('Maya', 'person', 'You have lost your papers twice?'),
         ('Dani', 'book', 'In two different countries.'),
         ('Maya', 'person', 'How?'),
         ('Dani', 'book', 'The first one went in a river.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Maya: You have lost your papers twice? Dani: In two '
            'different countries. Maya: How? Dani: The first one went in a '
            'river.'),

 18: lambda: F.match_columns(
        [('Tomas', 'nurse'), ('Maya', 'person'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['has lived in four cities and will',
         'has slept in an airport three times',
         'has read a whole book in a day, twice',
         'has never found out what she ate',
         'has crossed a desert on a bus'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('Have you ever slept somewhere strange?', 'question'),
         ('What have you never done that most people have?', 'crowd'),
         ('What is the best thing you have eaten abroad?', 'plane')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('been abroad', 'plane')]),
        ('Student B', [('been abroad', 'plane')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['start with ever', 'ask again after a short answer',
                             'ask whether they wanted to', 'find something of your own'], 'person'),
        ('Card B — answering', ['answer in two words', 'let them ask again',
                                'say the surprising part', 'do not explain yourself'], 'cup'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: start with ever, '
            'ask again when the answer is short, ask whether they wanted to, find '
            'something of your own. Card B, answering: answer in two words, let them '
            'ask again, say the surprising part, do not explain yourself.'),
 22: lambda: F.talk_shape(
        [('three things you have done', 3, 'star'),
         ('one you have never done', 1, 'cross')],
        height=420,
        alt='The one-minute talk as two beats on a clock line, each block as '
            'wide as the share of the minute it should take: three things you '
            'have done, then one you have never done.'),

 23: lambda: F.process_strip(
        [('nine smooth days', 'sun'), ('two bad hours', 'moon'),
         ('the strongest moment', 'clock'), ('the last one', 'home'),
         ('the story you tell', 'person')],
        height=460,
        alt='How one holiday becomes one story, in five stages with an arrow to the '
            'next: nine smooth days, two bad hours, the strongest moment, the last '
            'one, and then the only story anybody tells afterwards.'),

 24: lambda: F.word_grid(
        [('smooth', 'cloth'), ('peak', 'mountain'), ('ending', 'arrow_right'), ('habit', 'cup')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'smooth, peak, ending, habit.'),

 25: lambda: F.world_strip(
        [('Norway', 'moon', 'three nights of waiting, a third see nothing'),
         ('Kenya', 'sun', 'the animals do not know anybody is watching'),
         ('Peru', 'island', 'a train, a long walk, and nobody sure it is worth it')],
        height=460,
        alt='Three places people travel a long way to see: the north of Norway, '
            'where people wait three nights in the cold and about a third see '
            'nothing; Kenya, where the animals crossing the river do not know '
            'anybody is watching; and Peru, at the end of a train ride and a long '
            'walk that nobody is sure is worth it.'),

 26: lambda: F.writing_frame(
        [('What you have done', 'I have walked across a city at four in the morning.'),
         ('Once, and with who', 'Once, with two people I had known a week.'),
         ('What you have forgotten', 'I have taken better holidays and forgotten them.'),
         ('What you have not', 'I have never forgotten one street of that walk.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: '
            'what you have done, roughly when, what you have forgotten, and the one '
            'thing you have not.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'It is not, and the people with the most.'),
         ('two or three reasons', 'Two weeks somewhere teaches you the airport.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('what you have never done', 'I have never learned to ride a bicycle.'),
         ('why not', 'There was no moment when I decided.'),
         ('how you feel about it', 'By eleven it had become a thing I did not say.')],
        height=571,
        alt='The shape of the message in three steps -- what you have never '
            'done, why not, how you feel about it -- with a line of the model '
            'beside each one.'),

 29: lambda: F.writing_frame(
        [('what the memory is', 'I have kept, for about thirty years.'),
         ('how long you have had it', 'Nothing happened at that gate.'),
         ('why it is strange', 'I have forgotten the house.')],
        height=571,
        alt='The shape of the reflection in three steps -- what the memory '
            'is, how long you have had it, why it is strange -- with a line '
            'of the model beside each one.'),

 30: lambda: F.function_map(
        [('Have you ever done anything like that?', 'opening without your own story first'),
         ('I have, actually — once.', 'saying yes, and leaving room'),
         ('Never, and I am not sure I want to.', 'saying no, with your own opinion in it'),
         ('Go on, what happened then?', 'asking for the rest of the story')],
        height=580,
        alt='Four things people say about experiences, each with an arrow to what it '
            'does: opening the subject without telling your own story first, saying '
            'yes and leaving room for them to ask, saying no with your own opinion '
            'in it, and asking for the rest of the story.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'You have lived in four cities.'),
         ('Mr Okonkwo', 'home', 'I have.'),
         ('Yuki', 'computer', 'Which one did you like?'),
         ('Mr Okonkwo', 'home', 'Everybody asks me that.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: You have lived in four cities. Mr Okonkwo: I have. Yuki: '
            'Which one did you like? Mr Okonkwo: Everybody asks me that.'),

 32: lambda: F.sequence_steps(
        [('Say what you would do differently.', 'speech'),
         ('Say what went wrong.', 'before_now'),
         ('Say when and where it was.', 'pin'),
         ('Say what you remember most.', 'speech')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 asking',
         ['ask the obvious question', 'notice the answer is not one', 'ask once more', 'offer the time'], 'question'),
        ('Card B \u2014 holding back',
         ['answer in three words', 'say that everybody asks', 'give the reason, not the answer', 'decide whether to go on'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 asking: ask the '
            'obvious question, notice the answer is not one, ask once more, '
            'offer the time. Card B \u2014 holding back: answer in three words, '
            'say that everybody asks, give the reason, not the answer, decide '
            'whether to go on.'),

 34: lambda: F.writing_frame(
        [('what it was, in one', 'I have slept in an airport three times.'),
         ('when and where', 'In the third one, at about two in the morning.'),
         ('the one thing you remember', 'It stood there to look well.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- what it '
            'was, in one, when and where, the one thing you remember -- with '
            'a line of the model beside each one.'),

 35: lambda: F.before_after(
        ('Two thousand years ago', ['a boat up the river', 'a guide and a long walk',
                                    'a name cut in the stone'], 'island'),
        ('Now', ['a plane', 'a guide and a long walk',
                 'a photograph'], 'plane'),
        height=520,
        alt='The same visit, two thousand years apart. Then: a boat up the river, a '
            'guide and a long walk in the heat, and a name cut into the stone. Now: '
            'a plane, a guide and the same long walk, and a photograph.'),

 36: lambda: F.word_grid(
        [('ancient', 'temple'), ('temple', 'temple'), ('visitor', 'guest'), ('guide', 'notice')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'ancient, temple, visitor, guide.'),
 37: lambda: F.close_scene(
        [('the sea in winter', 'beach'), ('the restaurant', 'tray'),
         ('nine years', 'calendar'), ('one Saturday', 'door')],
        height=460,
        alt='The three things nobody at number 14 has done, drawn in a row: '
            'the sea in winter that Mr Okonkwo says is the only time worth '
            'going, the restaurant at the end of the street, the nine years '
            'it has been there while all six of them walk past it daily, and '
            'the one Saturday anybody went into another flat.'),

 38: lambda: F.decision_fork(
        'Everybody says yes to a plan and nobody picks a day?',
        [('Pick a day yourself',
          ['a plan with no date is not a plan', 'somebody has to say no'],
          'calendar'),
         ('Ask once more',
          ['nobody has to decide', 'you get another yes'], 'question'),
         ('Go alone',
          ['it happens at last', 'you go on your own'], 'person')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: pick a day yourself, because people find it '
            'easier to say no to a Thursday than to an idea; ask once more '
            'and get another yes; or go alone.'),

 39: lambda: F.bank_strip(
        [('island', 'island'), ('exhibition', 'museum'), ('memory', 'before_now'), ('festival', 'concert'), ('have been', 'before_now'), ('has never', 'before_now'), ('pain', 'pill'), ('guard', 'guard')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'island, exhibition, memory, festival, have been, has never, '
            'pain, guard.'),

 40: lambda: F.progress_strip(
        [('I can talk about things I have done, with no date', False),
         ('I can use ever, never, already and yet correctly', False),
         ('I can ask somebody about their experiences', False),
         ('I can write about an experience in 50–70 words', False),
         ('I can tell a story to somebody who was not there', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('experience', 'star'), ('abroad', 'plane'), ('adventure', 'mountain'), ('camping', 'tent'), ('festival', 'concert'), ('exhibition', 'museum'), ('tour', 'path'), ('memory', 'before_now'), ('island', 'island'), ('desert', 'sun')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 15 as picture cards on one page: '
            'experience, abroad, adventure, camping, festival, exhibition, '
            'tour, memory, island, desert.'),
}
