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

 2: lambda: F.word_grid(
        [('Mix', 'mix'), ('Pour', 'pour'), ('Press', 'press'), ('Glue', 'glue'), ('Step', 'stairs')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: mix, pour, '
            'press, glue, step.'),

 3: lambda: F.bank_strip(
        [('carefully', 'magnifier'), ('finally', 'tick'), ('tidy', 'box'), ('layer', 'layer')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: carefully, finally, tidy, layer.'),

 4: lambda: F.scene(
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

 5: lambda: F.word_grid(
        [('Mix', 'mix'), ('Pour', 'pour'), ('Press', 'press'), ('Glue', 'glue'), ('Brush', 'brush'), ('Layer', 'layer'), ('Step', 'stairs')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: mix, '
            'pour, press, glue, brush, layer, step, each with the thing it '
            'means drawn beside its number.'),

 6: lambda: F.annotated_lines(
        [('Mix it well', 'Mix'),
         ('Don\u2019t press too hard', 'press'),
         ('Now pour it slowly', 'pour'),
         ('Finally, brush the edges', 'Finally')],
        height=464,
        alt='Four phrases from this unit with the word that carries the beat '
            'ringed in each: Mix, press, pour, Finally.'),

 7: lambda: F.category_set(
        [('A cake', 'kitchen'), ('A small book', 'book'), ('A shelf', 'home'),
         ('A pot of soup', 'cup'), ('A straight line', 'nurse'), ('A bowl', 'shop')],
        height=600,
        alt='Six things people make, each on its own card: a cake, a small book, a '
            'shelf, a pot of soup, a straight line and a bowl.'),

 8: lambda: F.label_me(
        [('bowl', 0.38, 0.11), ('spoon', 0.50, 0.30),
         ('layer', 0.58, 0.545), ('glue', 0.64, 0.785), ('brush', 0.72, 0.915)],
        height=620, draw=F.work_surface,
        alt='A work surface seen from above, with the things laid out in the order '
            'they are used: a bowl, a spoon, the work itself with one layer over '
            'another, a tube of glue and a brush. Five numbered lines run to the '
            'right for the learner to write each word.'),

 9: lambda: F.bank_strip(
        [('press', 'press'), ('pour', 'pour'), ('brush', 'brush'), ('glue', 'glue')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: press, pour, brush, glue.'),
 10: lambda: F.writing_frame(
        [('First', 'First, warm the teapot and pour the water away.'),
         ('Then', 'Put in one spoon of tea for each person.'),
         ('What not to do', 'Do not press the leaves, because it makes it bitter.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- first, then, and what not to do -- with a line of the model '
            'beside each one.'),

 11: lambda: F.annotated_lines(
        [('Mix it well.', 'Mix'),
         ('Do not press too hard.', 'press'),
         ('First, warm the teapot.', 'warm'),
         ('Then pour the water on.', 'pour')],
        height=440,
        alt='Four lines from the notice with the verb that gives the order '
            'ringed in each: mix, press, warm, pour. The words around them '
            'say when and how, which is what the task asks the learner to '
            'separate.'),

 12: lambda: F.grammar_contrast(
        ('Mix it well.', 'the verb alone, first',
         'Press it. Do not push it.', [0.50]),
        ('First… then… slowly', 'when, and how',
         'First warm it, then pour slowly.', [0.14, 0.86]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the imperative: the verb '
            'alone and first, with one mark for the single order it gives. On the '
            'right the order words and the -ly words, with a mark at each end for '
            'the sequence they carry.'),

 13: lambda: F.timeline(
        [('first', 'warm the teapot'), ('then', 'one spoon each'),
         ('after that', 'pour slowly'), ('wait', 'four minutes'),
         ('finally', 'pour it out')],
        height=460,
        alt='One job as five steps on a line: first warm the teapot, then one spoon '
            'for each person, after that pour the water on slowly, wait four '
            'minutes, and finally pour it out.'),

        # REVIEW: bins guessed as []; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['order', 'when', 'how'],
        ['Finally', 'slowly', 'Do not press', 'After that'],
        height=560,
        alt='The four words and phrases of this task as chips above three '
            'empty bins -- order, when and how. Which chip goes in which bin '
            'is the exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('Don\u2019t to press it.', 'Do not press it.'),
         ('You mix it well before you start.', None),
         ('Don\u2019t to press the leaves.', None),
         ('Pour the water careful.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 10.2', 'Amina and Yuki', 'kitchen', 'a first lesson in making something'),
         ('Track 10.3', 'Dani and Maya', 'clock', 'following a recipe badly'),
         ('Track 10.4', 'Amina', 'person', 'five people, five ways of working')],
        height=560,
        alt='The three listenings in this unit: Amina teaches Yuki to make '
            'something, Dani follows a recipe out of order while Maya watches, and '
            'Amina describes five people and five ways of working.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'It says warm the oven.'),
         ('Maya', 'person', 'Did you warm the oven?'),
         ('Dani', 'book', 'I am warming it now.'),
         ('Maya', 'person', 'Dani, it is step one.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: It says warm the oven. Maya: Did you warm the oven? '
            'Dani: I am warming it now. Maya: Dani, it is step one.'),

 18: lambda: F.match_columns(
        [('Mr Okonkwo', 'home'), ('Dani', 'book'), ('Maya', 'person'), ('Tomas', 'nurse')],
        ['reads the whole thing twice before',
         'works in the same order every time',
         'does it slowly and does it once',
         'does it fast and does it again later',
         'stops halfway and leaves it'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What is the last thing you made or repaired?', 'question'),
         ('Do you work quickly or slowly, and does it show?', 'shop'),
         ('What is the one step people always leave out?', 'crowd')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('measure, cut, glue', 'glue')]),
        ('Student B', [('measure, cut, press', 'glue')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — teaching', ['one step at a time', 'say how, not only what',
                               'say the one mistake', 'wait'], 'person'),
        ('Card B — learning', ['do each step', 'say what you see',
                               'ask when you are not sure', 'tidy as you go'], 'cup'),
        height=560,
        alt='The two role-play cards side by side. Card A, teaching: one step at a '
            'time, say how not only what, say the one mistake everybody makes, wait. '
            'Card B, learning: do each step, say what you see, ask when you are not '
            'sure, tidy as you go.'),

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('what you need', 1, 'basket'),
         ('the first two steps', 2, 'list'),
         ('the last two steps', 2, 'layer'),
         ('what to be careful about', 1, 'magnifier')],
        height=420,
        alt='The one-minute lesson as four beats on a clock line, each block '
            'as wide as the share of the minute it should take: what you '
            'need, the first two steps, the last two steps, and what to be '
            'careful about.'),

 23: lambda: F.process_strip(
        [('the expert writes it', 'book'), ('a step goes missing', 'moon'),
         ('a beginner reads it', 'person'), ('the hands stop', 'clock'),
         ('there is the step', 'sun')],
        height=460,
        alt='Why instructions go wrong, in five stages with an arrow to the next: '
            'the expert writes it down, a step goes missing because the hand does it '
            'without asking, a beginner reads it, the beginner’s hands stop, and the '
            'place where they stopped is the missing step.'),

 24: lambda: F.word_grid(
        [('expert', 'teacher'), ('obvious', 'magnifier'), ('assume', 'question'), ('draft', 'pencil')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'expert, obvious, assume, draft.'),

 25: lambda: F.world_strip(
        [('a flat-pack box', 'home', 'no words at all, only diagrams'),
         ('a recipe', 'kitchen', 'every thing first, in a list'),
         ('a safety card', 'bus', 'symbols, for somebody frightened')],
        height=460,
        alt='Three kinds of instruction and who each one is for: a flat-pack box '
            'with no words at all, only diagrams; a recipe that puts every thing '
            'first in a list; and a safety card of symbols, for somebody frightened '
            'and in a hurry.'),

 26: lambda: F.writing_frame(
        [('First', 'Warm the teapot and pour the water away.'),
         ('Then', 'One spoon of tea for each person.'),
         ('After that', 'Pour the water on slowly.'),
         ('Finally', 'Do not press the leaves. Pour it out.')],
        height=520,
        alt='The shape of the instructions the learner is about to write, in four '
            'steps marked first, then, after that and finally.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'Slowly, and I say that as somebody who works.'),
         ('two or three reasons', 'Every fast job I have is a job I did twice.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('what the instructions said', 'The shelf came with a page of pictures and no.'),
         ('what you did', 'Picture four showed two screws going in.'),
         ('what happened', 'It did not show which one goes in first.')],
        height=571,
        alt='The shape of the message in three steps -- what the instructions '
            'said, what you did, what happened -- with a line of the model '
            'beside each one.'),

 29: lambda: F.writing_frame(
        [('what you can make', 'I can repair a bicycle wheel.'),
         ('who taught you', 'My uncle taught me in an afternoon and said.'),
         ('how you work', 'I work slowly and I still get it wrong twice.')],
        height=571,
        alt='The shape of the reflection in three steps -- what you can make, '
            'who taught you, how you work -- with a line of the model beside '
            'each one.'),

 30: lambda: F.function_map(
        [('Show me the first step and I will copy it.', 'asking to be shown, not told'),
         ('Not that hard — press it like this.', 'correcting how, not what'),
         ('Wait, go back one step.', 'stopping somebody who has run ahead'),
         ('Do that part again and I will watch.', 'checking that it is learned')],
        height=580,
        alt='Four things people say while they teach or learn a job, each with an '
            'arrow to what it does: asking to be shown rather than told, correcting '
            'how rather than what, stopping somebody who has run ahead, and checking '
            'that it is learned.'),

 31: lambda: F.dialogue_strip(
        [('Mr Okonkwo', 'home', 'Hold it there.'),
         ('Yuki', 'computer', 'Like this?'),
         ('Mr Okonkwo', 'home', 'Press it, but not hard.'),
         ('Yuki', 'computer', 'What is the difference?')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. Mr '
            'Okonkwo: Hold it there. Yuki: Like this? Mr Okonkwo: Press it, '
            'but not hard. Yuki: What is the difference?'),

 32: lambda: F.sequence_steps(
        [('Watch their hands, not their face.', 'magnifier'),
         ('Let them do the first step alone.', 'stairs'),
         ('Break it into steps and name each one.', 'cup'),
         ('Ask them to do the hard step again.', 'stairs')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 teaching',
         ['show it once', 'one step at a time', 'correct the how, not the person', 'ask for it again'], 'person'),
        ('Card B \u2014 learning',
         ['copy, do not guess', 'say what you feel', 'ask the difference', 'tidy as you go'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 teaching: show it '
            'once, one step at a time, correct the how, not the person, ask '
            'for it again. Card B \u2014 learning: copy, do not guess, say what '
            'you feel, ask the difference, tidy as you go.'),

 34: lambda: F.writing_frame(
        [('the steps in order', 'Lay the two pieces flat with the good side.'),
         ('one thing said about how', 'Brush a thin layer of glue on one of them.'),
         ('one warning', 'Then press them together and put a heavy book.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- the steps '
            'in order, one thing said about how, one warning -- with a line '
            'of the model beside each one.'),

 35: lambda: F.before_after(
        ('A street by machine', ['one afternoon', 'cheaper', 'the same everywhere'], 'slab'),
        ('A street by hand', ['one stone at a time', 'six square metres a day',
                              'a wave, a ship, a star'], 'stones'),
        height=520,
        alt='Two ways a street goes down. By machine: one afternoon, cheaper, and '
            'the same street everywhere. By hand: one small stone at a time, about '
            'six square metres in a day, in a design of a wave, a ship or a star.'),

 36: lambda: F.word_grid(
        [('craft', 'needle'), ('design', 'pencil'), ('trade', 'hands'), ('level', 'stairs')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'craft, design, trade, level.'),
 37: lambda: F.close_scene(
        [('the sign', 'plaque'), ('the gate', 'door'),
         ('number 14', 'home'), ('Tuesday', 'calendar')],
        height=460,
        alt='The sign nobody turned, drawn where it hangs: the piece of wood '
            'Dani painted, the gate he tied it to in the dark, number 14 '
            'behind it, and the Tuesday Tomas noticed it and meant to fix it '
            'on the Wednesday.'),

 38: lambda: F.decision_fork(
        'Somebody did a job badly and it is still wrong?',
        [('Do it yourself',
          ['it takes two minutes', 'nobody has to hear about it'], 'spanner'),
         ('Tell the person who did it',
          ['they can turn it', 'the conversation takes a week'], 'speech'),
         ('Leave it',
          ['nothing to do', 'it is still upside down'], 'cross')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: do it yourself in two minutes and nobody has to '
            'hear about it; tell the person who did it and the conversation '
            'takes a week; or leave it, and it is still upside down.'),

 39: lambda: F.bank_strip(
        [('pour', 'pour'), ('press', 'press'), ('glue', 'glue'), ('layer', 'layer'), ('carefully', 'magnifier'), ('do not', 'cross'), ('junction', 'junction'), ('borrow', 'hands')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: pour, '
            'press, glue, layer, carefully, do not, junction, borrow.'),

 40: lambda: F.progress_strip(
        [('I can tell somebody how to make or repair something', False),
         ('I can use first, then, after that and finally in order', False),
         ('I can say how to do something, using adverbs', False),
         ('I can write instructions in 50–70 words', False),
         ('I can teach somebody a job one step at a time', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('step', 'stairs'), ('mix', 'mix'), ('pour', 'pour'), ('press', 'press'), ('glue', 'glue'), ('layer', 'layer'), ('brush', 'brush'), ('carefully', 'magnifier'), ('finally', 'tick'), ('tidy', 'box')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 10 as picture cards on one page: '
            'step, mix, pour, press, glue, layer, brush, carefully, finally, '
            'tidy.'),
}
