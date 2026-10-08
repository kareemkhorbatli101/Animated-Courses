"""Unit 17 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        17, 'How Things Are Made',
        'Active and passive',
        ['I can say what a thing is made of and where.',
         'I can use the passive in the present and the past.',
         'I can describe how something is made, in stages.'],
        ['factory', 'bowl', 'coat', 'bottle', 'needle'],
        alt='The opening page of Unit 17, How Things Are Made: the grammar point is '
            'the active against the passive, and three things the learner will be '
            'able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Factory', 'factory'), ('Material', 'cloth'), ('Metal', 'chain'), ('Plastic', 'bottle'), ('Wool', 'cloth')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: factory, '
            'material, metal, plastic, wool.'),

 3: lambda: F.bank_strip(
        [('factory', 'factory'), ('material', 'cloth'), ('metal', 'chain'), ('wool', 'cloth')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: factory, material, metal, wool.'),

 4: lambda: F.scene(
        [('Maya', 'book', 'makes small books by hand'),
         ('Yuki', 'bowl', 'has thrown four bowls away'),
         ('Tomas', 'needle', 'can sew a straight line'),
         ('Mr Okonkwo', 'coat', 'mends and buys almost nothing'),
         ('Amina', 'shop', 'painted her own window'),
         ('Dani', 'kitchen', 'has made nothing at all')],
        height=560,
        alt='What each of the six people at number 14 makes, mends or throws away: '
            'Maya makes small books by hand, Yuki has thrown four bowls away while '
            'learning, Tomas can sew a straight line because the hospital taught '
            'him, Mr Okonkwo mends and buys almost nothing, Amina painted her own '
            'shop window, and Dani has made nothing at all.'),

 5: lambda: F.word_grid(
        [('Factory', 'factory'), ('Material', 'cloth'), ('Metal', 'chain'), ('Plastic', 'bottle'), ('Wool', 'cloth'), ('Recycle', 'recycling'), ('Waste', 'bin')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: factory, '
            'material, metal, plastic, wool, recycle, waste, each with the '
            'thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('Somebody makes it', 'makes'),
         ('It is made', 'is'),
         ('They changed the buttons', 'changed'),
         ('The buttons were changed', 'were')],
        height=464,
        alt='Four phrases from this unit with the word that carries the sound '
            'ringed in each: makes, is, changed, were. The little word is the '
            'whole grammar and it is the quietest part of the line.'),

 7: lambda: F.category_set(
        [('A bottle', 'bottle'), ('A coat', 'coat'),
         ('A bowl', 'bowl'), ('A book', 'book')],
        height=460, cols=4,
        alt='The four things the table asks about, each on its own card: a bottle, a '
            'coat, a bowl and a book.'),

 8: lambda: F.label_me(
        [('Maya made this book', 0.293, 0.13),
         ('This book was made by hand', 0.388, 0.30),
         ('Somebody broke the window', 0.483, 0.47),
         ('The window was broken', 0.578, 0.64),
         ('The bowl is made of clay', 0.668, 0.80)],
        height=620, draw=F.voice_steps,
        alt='Five sentences drawn as five pairs of boxes stepping down to the right. '
            'The right-hand box, the thing being talked about, is the same in every '
            'pair. The left-hand box, the maker, empties out step by step: solid, '
            'then half full, then an outline, then three loose lines, and in the '
            'last pair it is not drawn at all. Five numbered lines run to the right '
            'for the learner to write each sentence.'),

 9: lambda: F.bank_strip(
        [('cloth', 'cloth'), ('produce', 'factory'), ('glass', 'bottle'), ('recycle', 'recycling')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: cloth, produce, glass, recycle.'),
 10: lambda: F.writing_frame(
        [('Where it was made', 'This cup was made in a factory.'),
         ('How a part was added', 'The handle was put on by a machine.'),
         ('What happened to a bad one', 'One with a bad handle was thrown away.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- where the thing was made, how a part was added, and what '
            'happened to a bad one -- with a line of the model beside each '
            'one.'),

 11: lambda: F.annotated_lines(
        [('Maya made this book.', 'made'),
         ('This book was made by hand.', 'was made'),
         ('Somebody changed the buttons.', 'changed'),
         ('The buttons were changed.', 'were changed')],
        height=440,
        alt='Four lines from the notice with the verb ringed in each. Two '
            'name the maker and two do not, which is the question the task '
            'asks.'),

 12: lambda: F.grammar_contrast(
        ('Maya made this book.', 'active — the maker is the point',
         'The maker is put in front of the verb.', [0.28]),
        ('This book was made by hand.', 'passive — the thing is the point',
         'The thing is put there instead, and be carries the grammar.',
         [0.28, 0.52, 0.76]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the active, with the '
            'maker standing in front of the verb. On the right the passive, with '
            'the thing standing in that place instead and the small word be '
            'carrying the whole of the grammar.'),

 13: lambda: F.timeline(
        [('first', 'the clay is shaped'), ('then', 'the foot is cut'),
         ('after that', 'it is dried slowly'), ('next', 'the glaze is put on'),
         ('last', 'it is sold')],
        height=460,
        alt='One cup from the clay to the shelf, on a line: the clay is shaped, the '
            'foot is cut, it is dried slowly, the glaze is put on, and it is sold.'),
 14: lambda: F.sort_bins(
        ['active', 'passive'],
        ['was made by hand', 'produces forty thousand',
         'were changed twice', 'broke the window'],
        height=540,
        alt='The four sentences of this task as chips above two empty bins, '
            'one for the sentences that name the maker and one for the '
            'sentences that do not. Which chip goes in which bin is the '
            'exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('This book was make by hand.', 'This book was made by hand.'),
         ('This book was make by hand.', None),
         ('The bowl made in a factory.', None),
         ('Forty thousand bowls is produced every week.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 17.2', 'Maya and Yuki', 'bowl', 'the four bowls thrown away'),
         ('Track 17.3', 'Dani and Mr Okonkwo', 'coat', 'the coat relined twice'),
         ('Track 17.4', 'Amina', 'person', 'six people, six things')],
        height=560,
        alt='The three listenings in this unit: Maya asks Yuki why four bowls were '
            'thrown away, Dani asks Mr Okonkwo how old his coat is and learns it '
            'has been relined twice, and Amina describes what each of the six makes '
            'or mends.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'How old is that coat?'),
         ('Mr Okonkwo', 'home', 'Older than you.'),
         ('Dani', 'book', 'It doesn\u2019t look it.'),
         ('Mr Okonkwo', 'home', 'It has been relined twice and the buttons.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: How old is that coat? Mr Okonkwo: Older than you. '
            'Dani: It doesn\u2019t look it. Mr Okonkwo: It has been relined twice '
            'and the buttons.'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Yuki', 'computer'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home')],
        ['is learning to make a bowl',
         'mends and buys almost nothing',
         'makes small books by hand',
         'sews, because the hospital taught him',
         'cooked one meal for eight people'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What is the oldest thing you own, and where was it made?', 'pin'),
         ('What in your home was made by hand?', 'before_now'),
         ('What do you mend, and what do you throw away?', 'needle')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('the bowls are made by', 'pin')]),
        ('Student B', [('the bowls are made by', 'crowd')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['ask what it is made of', 'ask whether it was made by hand',
                             'ask how long one takes', 'ask about the slow part'], 'person'),
        ('Card B — telling', ['name the material', 'say it was made by hand',
                              'give one length of time',
                              'explain the slow part'], 'bowl'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask what it is '
            'made of, ask whether it was made by hand, ask how long one takes, ask '
            'about the slow part. Card B, telling: name the material, say it was '
            'made by hand, give one length of time, explain the slow part.'),
 22: lambda: F.talk_shape(
        [('what you own', 1, 'cup'),
         ('what it is made of', 2, 'cloth'),
         ('how it was made', 2, 'factory')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: what the '
            'thing is, what it is made of, and how it was made.'),

 23: lambda: F.process_strip(
        [('the clay', 'bowl'), ('one factory', 'factory'), ('a second factory', 'factory'),
         ('a shop', 'shop'), ('your room', 'home')],
        height=460,
        alt='One cup in five stages with an arrow to the next: the clay, one '
            'factory, a second factory in another country, a shop, and finally the '
            'room it is used in — with no single person having held all of it.'),

 24: lambda: F.word_grid(
        [('machine', 'factory'), ('stage', 'concert'), ('hand-made', 'hands'), ('produce', 'factory')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'machine, stage, hand-made, produce.'),

 25: lambda: F.world_strip(
        [('Glass', 'bottle', 'melted and made again, and it can be done for ever'),
         ('Paper', 'book', 'turned into pulp, and the fibres are shortened each time'),
         ('Metal', 'bin', 'melted like glass, and it loses almost nothing')],
        height=460,
        alt='Three materials that are made twice: glass, which is melted and made '
            'again and can be for ever, because melting takes nothing out of it; '
            'paper, which is turned into pulp and loses a little of its fibre every '
            'time; and metal, which is melted like glass and loses almost nothing, '
            'which is why recycling it saves the most power.'),

 26: lambda: F.writing_frame(
        [('The material', 'Bread is made from four things.'),
         ('What is done first', 'The flour is mixed with water and salt.'),
         ('What is done next', 'The yeast is added last.'),
         ('The slow part', 'Then it is left alone.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: '
            'name the material, say what is done first, say what is done next, and '
            'name the slow part that cannot be hurried.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'They should, and almost nothing is.'),
         ('two or three reasons', 'A washing machine is now built to run.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('what you made or mended', 'I have mended one chair, badly.'),
         ('how it was done', 'The leg was glued and then it was screwed.'),
         ('how you feel about it', 'It holds.')],
        height=571,
        alt='The shape of the message in three steps -- what you made or '
            'mended, how it was done, how you feel about it -- with a line of '
            'the model beside each one.'),

 29: lambda: F.writing_frame(
        [('what it was', 'A wooden box was thrown out when I moved.'),
         ('why it was thrown away', 'I have wanted it about once a year since.'),
         ('why you wanted it', 'Nothing in it mattered.')],
        height=571,
        alt='The shape of the reflection in three steps -- what it was, why '
            'it was thrown away, why you wanted it -- with a line of the '
            'model beside each one.'),

 30: lambda: F.function_map(
        [('It is made of wool.', 'naming the material'),
         ('It was made by hand.', 'saying a person made it, not a machine'),
         ('It can be mended.', 'saying the thing still has a life in it'),
         ('It is not made any more.', 'saying nobody produces it now')],
        height=580,
        alt='Four things people say about how a thing was made, each with an arrow '
            'to what it does: naming the material, saying a person made it rather '
            'than a machine, saying the thing can still be mended, and saying that '
            'nobody produces it any more.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'Can it be mended?'),
         ('Mr Okonkwo', 'home', 'It can be opened.'),
         ('Yuki', 'computer', 'That isn\u2019t the same answer.'),
         ('Mr Okonkwo', 'home', 'No.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: Can it be mended? Mr Okonkwo: It can be opened. Yuki: That '
            'isn\u2019t the same answer. Mr Okonkwo: No.'),

 32: lambda: F.sequence_steps(
        [('Say what is done last.', 'speech'),
         ('Say where it is made.', 'pin'),
         ('Say what is done first.', 'speech'),
         ('Say which stage goes wrong.', 'concert')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the buyer',
         ['ask about the price', 'say they look the same', 'ask to be shown', 'agree out loud when you are shown'], 'person'),
        ('Card B \u2014 the seller',
         ['name how it was made', 'do not say the other one is bad', 'show one thing', 'give one length of time'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the buyer: ask '
            'about the price, say they look the same, ask to be shown, agree '
            'out loud when you are shown. Card B \u2014 the seller: name how it '
            'was made, do not say the other one is bad, show one thing, give '
            'one length of time.'),

 34: lambda: F.writing_frame(
        [('what is being mended', 'The washing machine has gone to be mended.'),
         ('one date', 'It was taken on Tuesday and it is promised.'),
         ('why it costs what it costs', 'The part is no longer produced and one.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- what is '
            'being mended, one date, why it costs what it costs -- with a '
            'line of the model beside each one.'),

 35: lambda: F.before_after(
        ('Water leaving', ['sewage', 'into the pipes', 'nobody drinks it'], 'bin'),
        ('Water coming back', ['through membranes', 'cleaned with light',
                               'cleaner than the reservoir'], 'water'),
        height=520,
        alt='Water leaving a city beside the same water coming back. Leaving: '
            'sewage, into the pipes, and nobody drinks it. Coming back: pushed '
            'through membranes with holes too small to see, cleaned again with '
            'light, and cleaner than the water already in the reservoir.'),

 36: lambda: F.word_grid(
        [('sewage', 'water'), ('membrane', 'cloth'), ('reservoir', 'water'), ('plant', 'garden')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'sewage, membrane, reservoir, plant.'),
 37: lambda: F.close_scene(
        [('the clay', 'bowl'), ('the foot', 'ruler'),
         ('the cloth', 'cloth'), ('the glaze', 'brush')],
        height=460,
        alt='The unfinished bowl on the table since March, drawn as the '
            'stages it got through and the one it did not: the clay shaped in '
            'one evening, the foot cut the week after, the cloth changed '
            'whenever it dries out, and the glaze Yuki says she cannot get '
            'right.'),

 38: lambda: F.decision_fork(
        'Something of yours is half made and has been for months?',
        [('Finish it badly',
          ['a finished thing can be used', 'it will not be good'], 'tick'),
         ('Throw it away',
          ['the table is clear', 'nothing is learned'], 'bin'),
         ('Leave it where it is',
          ['nothing to decide', 'the next one is still waiting'], 'cloth')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: finish it badly, because a bad finished thing '
            'can be used and a good half-made one cannot; throw it away and '
            'learn nothing; or leave it, and the next one goes on waiting for '
            'this one.'),

 39: lambda: F.bank_strip(
        [('material', 'cloth'), ('metal', 'chain'), ('plastic', 'bottle'), ('recycle', 'recycling'), ('was made', 'before_now'), ('is produced', 'factory'), ('century', 'calendar'), ('pain', 'pill')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'material, metal, plastic, recycle, was made, is produced, '
            'century, pain.'),

 40: lambda: F.progress_strip(
        [('I can say what a thing is made of and where', False),
         ('I can use the passive in the present and the past', False),
         ('I can describe how something is made, in stages', False),
         ('I can write about how a thing is made in 50–70 words', False),
         ('I can talk about why a thing cannot be mended', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('factory', 'factory'), ('material', 'cloth'), ('metal', 'chain'), ('plastic', 'bottle'), ('wool', 'cloth'), ('glass', 'bottle'), ('recycle', 'recycling'), ('waste', 'bin'), ('produce', 'factory'), ('cloth', 'cloth')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 17 as picture cards on one page: '
            'factory, material, metal, plastic, wool, glass, recycle, waste, '
            'produce, cloth.'),
}
