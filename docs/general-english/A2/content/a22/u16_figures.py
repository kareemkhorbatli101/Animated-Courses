"""Unit 16 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        16, 'Then and Now',
        'Present perfect and past simple',
        ['I can say when something finished and when something still runs.',
         'I can use since and for correctly.',
         'I can describe a place as it was and as it is.'],
        ['clock', 'camera', 'record', 'shop', 'home'],
        alt='The opening page of Unit 16, Then and Now: the grammar point is the '
            'present perfect against the past simple, and three things the learner '
            'will be able to do by the end of the unit.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'has not changed the shelves'),
         ('Tomas', 'nurse', 'has worked nights since twenty-four'),
         ('Maya', 'home', 'has lived in three of the five flats'),
         ('Dani', 'kitchen', 'has changed nothing at all'),
         ('Mr Okonkwo', 'person', 'has seen off two owners'),
         ('Yuki', 'cup', 'has learned all of their names')],
        height=560,
        alt='What has changed for each of the six people at number 14, and what has '
            'not: Amina has not changed the shelves of her shop in eleven years, '
            'Tomas has worked nights since he was twenty-four, Maya has lived in '
            'three of the five flats, Dani has changed nothing at all, Mr Okonkwo '
            'has seen off two owners, and Yuki has learned all of their names.'),

 7: lambda: F.category_set(
        [('A letter', 'notice'), ('A camera', 'camera'),
         ('A map', 'sign'), ('A telephone', 'mobile')],
        height=460, cols=4,
        alt='The four things the table asks about, each on its own card: a letter, a '
            'camera, a map and a telephone.'),

 8: lambda: F.label_me(
        [('in March', 0.293, 0.13), ('since March', 0.388, 0.30),
         ('for four years', 0.483, 0.47), ('four years ago', 0.578, 0.64),
         ('this year', 0.668, 0.80)],
        height=620, draw=F.change_line,
        alt='One street’s time drawn as a line running left to right, with five '
            'different marks on it: a closed box for a finished month, a circle '
            'with the line carrying on past it for a starting point, a bar capped '
            'at both ends for a measured length, a circle with a stem for one point '
            'counted back from now, and an open bracket for a period that has not '
            'finished. Five numbered lines run to the right for the learner to '
            'write each time phrase.'),

 12: lambda: F.grammar_contrast(
        ('She opened the shop eleven years ago.', 'a finished time you can name',
         'One point, and the sentence names it.', [0.28]),
        ('She has not changed it since.', 'from then until now',
         'A line that starts and reaches now.', [0.28, 0.52, 0.76]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the past simple for a '
            'finished time, with one mark on the exact point the sentence names. On '
            'the right the present perfect, with three marks running from that '
            'point up to now, because no time is named and the line is still open.'),

 13: lambda: F.timeline(
        [('eleven years ago', 'Amina opened the shop'),
         ('at twenty-four', 'Tomas started at the hospital'),
         ('four years ago', 'Maya moved in'),
         ('in the spring', 'the market moved'),
         ('this morning', 'the square is still quiet')],
        height=460,
        alt='One street on a line, from eleven years ago to this morning: Amina '
            'opened the shop eleven years ago, Tomas started at the hospital at '
            'twenty-four, Maya moved in four years ago, the market moved in the '
            'spring, and the square is still quiet this morning.'),

 16: lambda: F.speakers(
        [('Track 16.2', 'Yuki and Mr Okonkwo', 'shop', 'what the street used to be'),
         ('Track 16.3', 'Dani and Maya', 'camera', 'the camera that still works'),
         ('Track 16.4', 'Amina', 'person', 'six people, six changes')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Mr Okonkwo what was on the '
            'street before, Dani asks Maya why she still uses a camera that takes '
            'film, and Amina describes what has changed for each of the six.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['ask what was there before', 'ask again, further back',
                             'ask about one more thing', 'say what you think'], 'person'),
        ('Card B — telling', ['name the thing that was there', 'give one finished date',
                              'give one thing that still runs',
                              'do not say whether it is better'], 'shop'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask what was there '
            'before, ask again further back, ask about one more thing, say what you '
            'think. Card B, telling: name the thing that was there, give one '
            'finished date, give one thing that still runs, do not say whether it is '
            'better.'),

 23: lambda: F.process_strip(
        [('looks wrong', 'cloud'), ('dated', 'camera'), ('thirty years', 'clock'),
         ('a period', 'book'), ('history', 'home')],
        height=460,
        alt='How a recent thing becomes an old thing, in five stages with an arrow to '
            'the next: it looks wrong, it looks dated, about thirty years pass, it '
            'becomes a period, and in the end it reads as history.'),

 25: lambda: F.world_strip(
        [('Records', 'record', 'back thirty years later, because they are slow'),
         ('Trams', 'tram', 'hard to move, which is why they went and why they return'),
         ('The bicycle lane', 'bicycle', 'kept in the Netherlands, and back out of it')],
        height=460,
        alt='Three things people threw away and then wanted again: records, which '
            'came back thirty years later because they are slow and you have to '
            'choose; trams, which are hard to move, the reason they were taken out '
            'and the reason they are being laid again; and bicycle lanes, which the '
            'Dutch cities kept and which have travelled back out of the Netherlands '
            'to the countries that invented them.'),

 26: lambda: F.writing_frame(
        [('The finished time', 'The market moved in the spring.'),
         ('The line to now', 'The square has been quiet ever since.'),
         ('One thing before', 'There was a shoe shop on the corner until ten years ago.'),
         ('One thing unchanged', 'The school has not changed.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: one '
            'finished time, one line that runs to now, one thing that was there '
            'before, and one thing that has not changed at all.'),

 30: lambda: F.function_map(
        [('There used to be a market here.', 'saying what was there before'),
         ('It has been like this since the spring.', 'giving a starting point for now'),
         ('It was better, and I would say that anyway.',
          'admitting your opinion may be wrong'),
         ('I have not been back for years.', 'saying your information is old')],
        height=580,
        alt='Four things people say about change, each with an arrow to what it does: '
            'saying what was there before, giving a starting point for now, admitting '
            'your own opinion may be wrong, and saying that your information is old.'),

 35: lambda: F.before_after(
        ('The painting', ['every window', 'every sign', 'paid by the detail'], 'painting'),
        ('The street', ['the same window', 'the same sign',
                        'not the memory of anybody living'], 'home'),
        height=520,
        alt='A painting on a wall beside a street built to match it. The painting has '
            'every window and every sign in it, because the man who painted it was '
            'paid by the detail. The street repeats the same windows and the same '
            'signs, because the ones rebuilding it went back to the painting and not '
            'to the memory of anybody living.'),

 40: lambda: F.progress_strip(
        [('I can say when something finished and when something still runs', False),
         ('I can use since and for correctly', False),
         ('I can describe a place as it was and as it is', False),
         ('I can write about a change in 50–70 words', False),
         ('I can correct somebody about the past without arguing', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
