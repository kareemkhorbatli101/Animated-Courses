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

 2: lambda: F.scene(
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

 3: lambda: F.category_set(
        [('A bottle', 'bottle'), ('A coat', 'coat'),
         ('A bowl', 'bowl'), ('A book', 'book')],
        height=460, cols=4,
        alt='The four things the table asks about, each on its own card: a bottle, a '
            'coat, a bowl and a book.'),

 4: lambda: F.label_me(
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

 5: lambda: F.grammar_contrast(
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

 6: lambda: F.timeline(
        [('first', 'the clay is shaped'), ('then', 'the foot is cut'),
         ('after that', 'it is dried slowly'), ('next', 'the glaze is put on'),
         ('last', 'it is sold')],
        height=460,
        alt='One cup from the clay to the shelf, on a line: the clay is shaped, the '
            'foot is cut, it is dried slowly, the glaze is put on, and it is sold.'),

 7: lambda: F.speakers(
        [('Track 17.2', 'Maya and Yuki', 'bowl', 'the four bowls thrown away'),
         ('Track 17.3', 'Dani and Mr Okonkwo', 'coat', 'the coat relined twice'),
         ('Track 17.4', 'Amina', 'person', 'six people, six things')],
        height=560,
        alt='The three listenings in this unit: Maya asks Yuki why four bowls were '
            'thrown away, Dani asks Mr Okonkwo how old his coat is and learns it '
            'has been relined twice, and Amina describes what each of the six makes '
            'or mends.'),

 8: lambda: F.cue_cards(
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

 9: lambda: F.process_strip(
        [('the clay', 'bowl'), ('one factory', 'factory'), ('a second factory', 'factory'),
         ('a shop', 'shop'), ('your room', 'home')],
        height=460,
        alt='One cup in five stages with an arrow to the next: the clay, one '
            'factory, a second factory in another country, a shop, and finally the '
            'room it is used in — with no single person having held all of it.'),

 10: lambda: F.world_strip(
        [('Glass', 'bottle', 'melted and made again, and it can be done for ever'),
         ('Paper', 'book', 'turned into pulp, and the fibres are shortened each time'),
         ('Metal', 'bin', 'melted like glass, and it loses almost nothing')],
        height=460,
        alt='Three materials that are made twice: glass, which is melted and made '
            'again and can be for ever, because melting takes nothing out of it; '
            'paper, which is turned into pulp and loses a little of its fibre every '
            'time; and metal, which is melted like glass and loses almost nothing, '
            'which is why recycling it saves the most power.'),

 11: lambda: F.writing_frame(
        [('The material', 'Bread is made from four things.'),
         ('What is done first', 'The flour is mixed with water and salt.'),
         ('What is done next', 'The yeast is added last.'),
         ('The slow part', 'Then it is left alone.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: '
            'name the material, say what is done first, say what is done next, and '
            'name the slow part that cannot be hurried.'),

 12: lambda: F.function_map(
        [('It is made of wool.', 'naming the material'),
         ('It was made by hand.', 'saying a person made it, not a machine'),
         ('It can be mended.', 'saying the thing still has a life in it'),
         ('It is not made any more.', 'saying nobody produces it now')],
        height=580,
        alt='Four things people say about how a thing was made, each with an arrow '
            'to what it does: naming the material, saying a person made it rather '
            'than a machine, saying the thing can still be mended, and saying that '
            'nobody produces it any more.'),

 13: lambda: F.before_after(
        ('Water leaving', ['sewage', 'into the pipes', 'nobody drinks it'], 'bin'),
        ('Water coming back', ['through membranes', 'cleaned with light',
                               'cleaner than the reservoir'], 'water'),
        height=520,
        alt='Water leaving a city beside the same water coming back. Leaving: '
            'sewage, into the pipes, and nobody drinks it. Coming back: pushed '
            'through membranes with holes too small to see, cleaned again with '
            'light, and cleaner than the water already in the reservoir.'),

 14: lambda: F.progress_strip(
        [('I can say what a thing is made of and where', False),
         ('I can use the passive in the present and the past', False),
         ('I can describe how something is made, in stages', False),
         ('I can write about how a thing is made in 50–70 words', False),
         ('I can talk about why a thing cannot be mended', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
