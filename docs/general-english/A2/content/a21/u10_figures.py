"""Unit 10 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        10, 'Doing and Making',
        'Imperatives, order words and adverbs',
        ['I can tell somebody how to make or repair something.',
         'I can use first, then, after that and finally in order.',
         'I can write instructions in 50–70 words.'],
        ['kitchen', 'book', 'home', 'clock', 'cup'],
        alt='The opening page of Unit 10, Doing and Making: the grammar point is '
            'imperatives, order words and adverbs, and three things the learner will '
            'be able to do by the end of the unit.'),

 2: lambda: F.scene(
        [('Mr Okonkwo', 'home', 'repairs slowly and once'),
         ('Amina', 'shop', 'builds her display quickly'),
         ('Dani', 'kitchen', 'cooks fast and loudly'),
         ('Maya', 'book', 'makes small books by hand'),
         ('Tomas', 'nurse', 'can sew a straight line'),
         ('Yuki', 'cup', 'is learning to make a bowl')],
        height=560,
        alt='What each of the six people at number 14 makes or repairs, and how: Mr '
            'Okonkwo repairs slowly and once, Amina builds her display quickly, Dani '
            'cooks fast and loudly, Maya makes small books by hand, Tomas can sew a '
            'straight line, and Yuki is learning to make a bowl.'),

 3: lambda: F.category_set(
        [('A cake', 'kitchen'), ('A small book', 'book'), ('A shelf', 'home'),
         ('A pot of soup', 'cup'), ('A straight line', 'nurse'), ('A bowl', 'shop')],
        height=600,
        alt='Six things people make, each on its own card: a cake, a small book, a '
            'shelf, a pot of soup, a straight line and a bowl.'),

 4: lambda: F.label_me(
        [('bowl', 0.38, 0.11), ('spoon', 0.50, 0.30),
         ('layer', 0.58, 0.545), ('glue', 0.64, 0.785), ('brush', 0.72, 0.915)],
        height=620, draw=F.work_surface,
        alt='A work surface seen from above, with the things laid out in the order '
            'they are used: a bowl, a spoon, the work itself with one layer over '
            'another, a tube of glue and a brush. Five numbered lines run to the '
            'right for the learner to write each word.'),

 5: lambda: F.grammar_contrast(
        ('Mix it well.', 'the verb alone, first',
         'Press it. Do not push it.', [0.50]),
        ('First… then… slowly', 'when, and how',
         'First warm it, then pour slowly.', [0.14, 0.86]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the imperative: the verb '
            'alone and first, with one mark for the single order it gives. On the '
            'right the order words and the -ly words, with a mark at each end for '
            'the sequence they carry.'),

 6: lambda: F.timeline(
        [('first', 'warm the teapot'), ('then', 'one spoon each'),
         ('after that', 'pour slowly'), ('wait', 'four minutes'),
         ('finally', 'pour it out')],
        height=460,
        alt='One job as five steps on a line: first warm the teapot, then one spoon '
            'for each person, after that pour the water on slowly, wait four '
            'minutes, and finally pour it out.'),

 7: lambda: F.speakers(
        [('Track 10.2', 'Amina and Yuki', 'kitchen', 'a first lesson in making something'),
         ('Track 10.3', 'Dani and Maya', 'clock', 'following a recipe badly'),
         ('Track 10.4', 'Amina', 'person', 'five people, five ways of working')],
        height=560,
        alt='The three listenings in this unit: Amina teaches Yuki to make '
            'something, Dani follows a recipe out of order while Maya watches, and '
            'Amina describes five people and five ways of working.'),

 8: lambda: F.cue_cards(
        ('Card A — teaching', ['one step at a time', 'say how, not only what',
                               'say the one mistake', 'wait'], 'person'),
        ('Card B — learning', ['do each step', 'say what you see',
                               'ask when you are not sure', 'tidy as you go'], 'cup'),
        height=560,
        alt='The two role-play cards side by side. Card A, teaching: one step at a '
            'time, say how not only what, say the one mistake everybody makes, wait. '
            'Card B, learning: do each step, say what you see, ask when you are not '
            'sure, tidy as you go.'),

 9: lambda: F.process_strip(
        [('the expert writes it', 'book'), ('a step goes missing', 'moon'),
         ('a beginner reads it', 'person'), ('the hands stop', 'clock'),
         ('there is the step', 'sun')],
        height=460,
        alt='Why instructions go wrong, in five stages with an arrow to the next: '
            'the expert writes it down, a step goes missing because the hand does it '
            'without asking, a beginner reads it, the beginner’s hands stop, and the '
            'place where they stopped is the missing step.'),

 10: lambda: F.world_strip(
        [('a flat-pack box', 'home', 'no words at all, only diagrams'),
         ('a recipe', 'kitchen', 'every thing first, in a list'),
         ('a safety card', 'bus', 'symbols, for somebody frightened')],
        height=460,
        alt='Three kinds of instruction and who each one is for: a flat-pack box '
            'with no words at all, only diagrams; a recipe that puts every thing '
            'first in a list; and a safety card of symbols, for somebody frightened '
            'and in a hurry.'),

 11: lambda: F.writing_frame(
        [('First', 'Warm the teapot and pour the water away.'),
         ('Then', 'One spoon of tea for each person.'),
         ('After that', 'Pour the water on slowly.'),
         ('Finally', 'Do not press the leaves. Pour it out.')],
        height=520,
        alt='The shape of the instructions the learner is about to write, in four '
            'steps marked first, then, after that and finally.'),

 12: lambda: F.function_map(
        [('Show me the first step and I will copy it.', 'asking to be shown, not told'),
         ('Not that hard — press it like this.', 'correcting how, not what'),
         ('Wait, go back one step.', 'stopping somebody who has run ahead'),
         ('Do that part again and I will watch.', 'checking that it is learned')],
        height=580,
        alt='Four things people say while they teach or learn a job, each with an '
            'arrow to what it does: asking to be shown rather than told, correcting '
            'how rather than what, stopping somebody who has run ahead, and checking '
            'that it is learned.'),

 13: lambda: F.before_after(
        ('A street by machine', ['one afternoon', 'cheaper', 'the same everywhere'], 'slab'),
        ('A street by hand', ['one stone at a time', 'six square metres a day',
                              'a wave, a ship, a star'], 'stones'),
        height=520,
        alt='Two ways a street goes down. By machine: one afternoon, cheaper, and '
            'the same street everywhere. By hand: one small stone at a time, about '
            'six square metres in a day, in a design of a wave, a ship or a star.'),

 14: lambda: F.progress_strip(
        [('I can tell somebody how to make or repair something', False),
         ('I can use first, then, after that and finally in order', False),
         ('I can say how to do something, using adverbs', False),
         ('I can write instructions in 50–70 words', False),
         ('I can teach somebody a job one step at a time', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
