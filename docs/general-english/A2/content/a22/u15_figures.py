"""Unit 15 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener(
        15, 'Experiences',
        'The present perfect: ever and never',
        ['I can talk about things I have done, with no date.',
         'I can use ever, never, already and yet correctly.',
         'I can write about an experience in 50–70 words.'],
        ['plane', 'tent', 'island', 'book', 'clock'],
        alt='The opening page of Unit 15, Experiences: the grammar point is the '
            'present perfect with ever and never, and three things the learner will '
            'be able to do by the end of the unit.'),

 2: lambda: F.scene(
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

 3: lambda: F.category_set(
        [('Abroad', 'plane'), ('Camping', 'tent'), ('An island', 'island'),
         ('A festival', 'person'), ('A desert', 'sun'), ('An exhibition', 'book')],
        height=600,
        alt='Six kinds of experience, each on its own card: abroad, camping, an '
            'island, a festival, a desert and an exhibition.'),

 4: lambda: F.label_me(
        [('once', 0.313, 0.14), ('twice', 0.412, 0.33),
         ('never', 0.510, 0.52), ('already', 0.609, 0.71), ('yet', 0.695, 0.875)],
        height=620, draw=F.life_line,
        alt='One life drawn as a line running left to right, with four marks on it '
            'and an open bracket at the end: a single filled circle, two filled '
            'circles together, an empty circle with a line through it, a filled '
            'circle well before the end, and then the bracket where the line stops. '
            'Five numbered lines run to the right for the learner to write each '
            'word.'),

 5: lambda: F.grammar_contrast(
        ('I have been to Peru.', 'experience, no date',
         'Somewhere in a whole life.', [0.22, 0.46, 0.70]),
        ('I went there last year.', 'a finished time',
         'One point, and you can name it.', [0.34]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the present perfect for '
            'experience, with three marks spread across a whole life because no date '
            'is given. On the right the past simple for a finished time, with one '
            'mark on the exact point the speaker can name.'),

 6: lambda: F.timeline(
        [('long ago', 'slept outside once'), ('after that', 'went abroad'),
         ('then', 'four countries'), ('this year', 'already twice'),
         ('still', 'never flown')],
        height=460,
        alt='One life on a line: slept outside once long ago, then went abroad, then '
            'four countries, abroad already twice this year, and still never '
            'flown.'),

 7: lambda: F.speakers(
        [('Track 15.2', 'Yuki and Amina', 'plane', 'have you ever?'),
         ('Track 15.3', 'Maya and Dani', 'book', 'the lost travel papers'),
         ('Track 15.4', 'Amina', 'person', 'six people, six experiences')],
        height=560,
        alt='The three listenings in this unit: Yuki finds out that Amina has never '
            'flown and has never wanted to, Dani tells Maya how he lost his travel '
            'papers twice, and Amina describes what each of the six has done.'),

 8: lambda: F.cue_cards(
        ('Card A — asking', ['start with ever', 'ask again after a short answer',
                             'ask whether they wanted to', 'find something of your own'], 'person'),
        ('Card B — answering', ['answer in two words', 'let them ask again',
                                'say the surprising part', 'do not explain yourself'], 'cup'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: start with ever, '
            'ask again when the answer is short, ask whether they wanted to, find '
            'something of your own. Card B, answering: answer in two words, let them '
            'ask again, say the surprising part, do not explain yourself.'),

 9: lambda: F.process_strip(
        [('nine smooth days', 'sun'), ('two bad hours', 'moon'),
         ('the strongest moment', 'clock'), ('the last one', 'home'),
         ('the story you tell', 'person')],
        height=460,
        alt='How one holiday becomes one story, in five stages with an arrow to the '
            'next: nine smooth days, two bad hours, the strongest moment, the last '
            'one, and then the only story anybody tells afterwards.'),

 10: lambda: F.world_strip(
        [('Norway', 'moon', 'three nights of waiting, a third see nothing'),
         ('Kenya', 'sun', 'the animals do not know anybody is watching'),
         ('Peru', 'island', 'a train, a long walk, and nobody sure it is worth it')],
        height=460,
        alt='Three places people travel a long way to see: the north of Norway, '
            'where people wait three nights in the cold and about a third see '
            'nothing; Kenya, where the animals crossing the river do not know '
            'anybody is watching; and Peru, at the end of a train ride and a long '
            'walk that nobody is sure is worth it.'),

 11: lambda: F.writing_frame(
        [('What you have done', 'I have walked across a city at four in the morning.'),
         ('Once, and with who', 'Once, with two people I had known a week.'),
         ('What you have forgotten', 'I have taken better holidays and forgotten them.'),
         ('What you have not', 'I have never forgotten one street of that walk.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: '
            'what you have done, roughly when, what you have forgotten, and the one '
            'thing you have not.'),

 12: lambda: F.function_map(
        [('Have you ever done anything like that?', 'opening without your own story first'),
         ('I have, actually — once.', 'saying yes, and leaving room'),
         ('Never, and I am not sure I want to.', 'saying no, with your own opinion in it'),
         ('Go on, what happened then?', 'asking for the rest of the story')],
        height=580,
        alt='Four things people say about experiences, each with an arrow to what it '
            'does: opening the subject without telling your own story first, saying '
            'yes and leaving room for them to ask, saying no with your own opinion '
            'in it, and asking for the rest of the story.'),

 13: lambda: F.before_after(
        ('Two thousand years ago', ['a boat up the river', 'a guide and a long walk',
                                    'a name cut in the stone'], 'island'),
        ('Now', ['a plane', 'a guide and a long walk',
                 'a photograph'], 'plane'),
        height=520,
        alt='The same visit, two thousand years apart. Then: a boat up the river, a '
            'guide and a long walk in the heat, and a name cut into the stone. Now: '
            'a plane, a guide and the same long walk, and a photograph.'),

 14: lambda: F.progress_strip(
        [('I can talk about things I have done, with no date', False),
         ('I can use ever, never, already and yet correctly', False),
         ('I can ask somebody about their experiences', False),
         ('I can write about an experience in 50–70 words', False),
         ('I can tell a story to somebody who was not there', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
