"""Unit 18 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        18, 'If and When',
        'The first conditional',
        ['I can say what I will do if something happens.',
         'I can use if, when and unless with the right tense.',
         'I can agree a plan with somebody else.'],
        ['cloud', 'siren', 'bag', 'key', 'clock'],
        alt='The opening page of Unit 18, If and When: the grammar point is the '
            'first conditional, and three things the learner will be able to do by '
            'the end of the unit.'),

 2: lambda: F.word_grid(
        [('Safe', 'tick'), ('Danger', 'warning'), ('Accident', 'siren'), ('Emergency', 'siren'), ('Luck', 'star')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: safe, danger, '
            'accident, emergency, luck.'),

 3: lambda: F.bank_strip(
        [('careful', 'magnifier'), ('chance', 'question'), ('jam', 'traffic'), ('risk', 'warning')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: careful, chance, jam, risk.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'will move the freezer first'),
         ('Tomas', 'nurse', 'will go in early'),
         ('Maya', 'book', 'will put her books on the top shelf'),
         ('Dani', 'bed', 'will sleep through it'),
         ('Mr Okonkwo', 'home', 'will do nothing at all'),
         ('Yuki', 'bag', 'has written a list')],
        height=560,
        alt='What each of the six people at number 14 will do if the water comes up '
            'again: Amina will move the freezer first, Tomas will go in early '
            'because the hospital rings him, Maya will put her books on the top '
            'shelf, Dani will sleep through it unless somebody wakes him, Mr '
            'Okonkwo will do nothing at all, and Yuki has written a list.'),

 5: lambda: F.word_grid(
        [('Chance', 'question'), ('Risk', 'warning'), ('Safe', 'tick'), ('Accident', 'siren'), ('Emergency', 'siren'), ('Careful', 'magnifier'), ('Jam', 'traffic')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: chance, '
            'risk, safe, accident, emergency, careful, jam, each with the '
            'thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('If it rains', 'If'),
         ('I will stay in', 'will'),
         ('If it rains, I will stay in', 'If'),
         ('I will stay in if it rains', 'if')],
        height=464,
        alt='Four phrases from this unit with the word that carries the sound '
            'ringed in each: If, will, If, if. The if half is not finished, '
            'and the voice says so by going up and waiting.'),

 7: lambda: F.category_set(
        [('It rains all day', 'rain'), ('The bus does not come', 'bus'),
         ('You wake up late', 'clock'), ('The power goes off', 'lamp')],
        height=460, cols=4,
        alt='The four things the table asks about, each on its own card: it rains '
            'all day, the bus does not come, you wake up late, and the power goes '
            'off.'),

 8: lambda: F.label_me(
        [('if', 0.293, 0.13), ('when', 0.388, 0.30), ('unless', 0.483, 0.47),
         ('as soon as', 0.578, 0.64), ('in case', 0.668, 0.80)],
        height=620, draw=F.branch_line,
        alt='One evening drawn as a line that forks five times, stepping down to '
            'the right. Two of the forks are solid, for the things that will '
            'happen; three are dashed with an open circle at the end, for the '
            'things that may happen and may not. Five numbered lines run to the '
            'right for the learner to write each joining word.'),

 9: lambda: F.bank_strip(
        [('luck', 'star'), ('safe', 'tick'), ('danger', 'warning'),
         ('emergency', 'siren')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: luck, safe, danger, emergency.'),
 10: lambda: F.writing_frame(
        [('What might go wrong', 'If the bus does not come at eight I will walk.'),
         ('What you will do', 'I will be late, and nobody will mind.'),
         ('What you are taking', 'I am taking the long coat in case.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- what might go wrong, what you will do then, and what you are '
            'taking in case -- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('If it rains, I will stay in.', 'will stay'),
         ('When the water comes up, Amina will move the freezer.', 'will move'),
         ('Unless somebody wakes him, Dani will sleep through it.', 'will sleep'),
         ('If the roads are bad, the hospital will ring Tomas.', 'will ring')],
        height=440,
        alt='Four lines from the notice with the will half ringed in each. '
            'The other half of every line is the condition, and it never '
            'takes will, which is what the task asks the learner to notice.'),

 12: lambda: F.grammar_contrast(
        ('If it rains,', 'the half that waits — the present',
         'It may happen, and no will is allowed here.', [0.28]),
        ('I will stay in.', 'the half that answers — will',
         'This is the half that takes will.', [0.28, 0.52, 0.76]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the if half, in the '
            'present tense, with one mark, because it may or may not happen. On the '
            'right the will half, with three marks running forward, because that is '
            'the only half of the sentence where the future is marked.'),

 13: lambda: F.timeline(
        [('at six', 'the rain comes'), ('at seven', 'the road floods'),
         ('at eight', 'Amina moves the freezer'), ('later', 'the hospital rings Tomas'),
         ('by ten', 'Dani will sleep through it')],
        height=460,
        alt='One evening on a line, hour by hour: the rain comes at six, the road '
            'floods at seven, Amina moves the freezer at eight, the hospital rings '
            'Tomas at nine, and by ten Dani will sleep through it.'),
 14: lambda: F.sort_bins(
        ['will happen', 'might happen'],
        ['when the rain stops', 'if the water comes up',
         'as soon as he gets home', 'unless somebody wakes him'],
        height=540,
        alt='The four openings of this task as chips above two empty bins, '
            'one for what will happen and one for what might. Which chip goes '
            'in which bin is the exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('If it will rain, I will stay in.', 'If it rains, I will stay in.'),
         ('If it will rain, I will stay in.', None),
         ('Unless it does not rain, I will walk.', None),
         ('When he will get home, he will ring you.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 18.2', 'Yuki and Amina', 'bag', 'what we will do if the water comes up'),
         ('Track 18.3', 'Dani and Tomas', 'nurse', 'the call that comes when the roads are bad'),
         ('Track 18.4', 'Amina', 'person', 'six people, six plans')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Amina what will happen if '
            'the water comes up and ends up owning the list, Dani asks Tomas '
            'whether the hospital rings him when the roads are bad, and Amina says '
            'what each of the six will do.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'Do they ring you, or do you ring them?'),
         ('Tomas', 'nurse', 'They ring me.'),
         ('Dani', 'book', 'Always?'),
         ('Tomas', 'nurse', 'When the roads are bad, they ring everybody.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: Do they ring you, or do you ring them? Tomas: They '
            'ring me. Dani: Always? Tomas: When the roads are bad, they ring '
            'everybody.'),

 18: lambda: F.match_columns(
        [('Tomas', 'nurse'), ('Maya', 'person'), ('Dani', 'book'), ('Mr Okonkwo', 'home')],
        ['will put the books up high',
         'will sit by the window and watch',
         'will go in early',
         'will sleep unless the water reaches',
         'will write a list and read it out'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What will you do if it rains all weekend?', 'arrow_right'),
         ('What will you take with you in case?', 'arrow_right'),
         ('What will you do as soon as you get home today?', 'arrow_right')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('ring your sister', 'water')]),
        ('Student B', [('ring your brother', 'water')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['ask what will happen', 'ask if there is no time',
                             'ask what comes first', 'ask about your own absence'], 'person'),
        ('Card B — deciding', ['name one thing you will do', 'give one thing up out loud',
                               'name the first thing',
                               'say what you will do alone'], 'bag'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask what will '
            'happen, ask about the case where there is no time, ask what comes '
            'first, ask what happens if you are out. Card B, deciding: name one '
            'thing you will do, give one thing up out loud, name the first thing, '
            'say what you will do alone.'),
 22: lambda: F.talk_shape(
        [('the ordinary thing', 1, 'calendar'),
         ('what might go wrong', 2, 'warning'),
         ('what you will do', 2, 'arrow_right')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: the ordinary '
            'thing, what might go wrong with it this week, and what you will '
            'do then.'),

 23: lambda: F.process_strip(
        [('the alarm', 'siren'), ('nobody moves', 'person'), ('they look up', 'clock'),
         ('the first to stand', 'person'), ('the rest move', 'home')],
        height=460,
        alt='What happens in a building in the first seconds of an alarm, in five '
            'stages with an arrow to the next: the alarm sounds, almost nobody '
            'moves, they look up and then at each other, the first person to stand '
            'decides it, and the rest move.'),

 24: lambda: F.word_grid(
        [('warning', 'warning'), ('alarm', 'alarm'), ('drill', 'spanner'), ('risk', 'warning')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'warning, alarm, drill, risk.'),

 25: lambda: F.world_strip(
        [('Four hours', 'clock', 'enough to move a car and a freezer'),
         ('Eleven minutes', 'rain', 'almost nothing, and people go back indoors'),
         ('One minute', 'crack', 'enough to stop a train and open a fire station door')],
        height=460,
        alt='Three warnings and the time each one buys: four hours, which is enough '
            'to empty a street because a car and a freezer can be moved; eleven '
            'minutes, which does almost nothing and in two cities made things worse '
            'because people went back indoors for their papers; and one minute, '
            'which is enough to stop a train and open a fire station door.'),

 26: lambda: F.writing_frame(
        [('The if half', 'If the trains stop…'),
         ('What you will do', 'I will walk to the bridge.'),
         ('The unless half', 'Unless it is raining hard…'),
         ('Who you will ring', 'I will ring Amina.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: '
            'the thing that might happen, what you will do, the one thing that '
            'would change it, and who you will ring.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'You should not, and the ones doing it are no.'),
         ('two or three reasons', 'A plan for everything is forty plans and you.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('what went wrong', 'I left a window open in October and came home.'),
         ('why you were lucky', 'Everything I own was in the dry corner.'),
         ('what you do now', 'If the wind turns on a day like.')],
        height=571,
        alt='The shape of the message in three steps -- what went wrong, why '
            'you were lucky, what you do now -- with a line of the model '
            'beside each one.'),

 29: lambda: F.writing_frame(
        [('which warning', 'The light on my car has been on since March.'),
         ('why you ignore it', 'I know what it means and I know.'),
         ('what would change it', 'If it makes a sound one day.')],
        height=571,
        alt='The shape of the reflection in three steps -- which warning, why '
            'you ignore it, what would change it -- with a line of the model '
            'beside each one.'),

 30: lambda: F.function_map(
        [('If it comes to that, ring me.', 'offering help only for the bad case'),
         ('I will take it in case.', 'getting ready for something unlikely'),
         ('Unless I hear from you, I will come.', 'making silence mean yes'),
         ('Let us hope it does not.', 'closing the subject without a plan')],
        height=580,
        alt='Four things people say about what might happen, each with an arrow to '
            'what it does: offering help only for the bad case, getting ready for '
            'something unlikely, turning the other person’s silence into a yes, and '
            'closing the subject without making a plan at all.'),

 31: lambda: F.dialogue_strip(
        [('Mr Okonkwo', 'home', 'So who decided the bag by the door?'),
         ('Yuki', 'computer', 'Nobody decided.'),
         ('Mr Okonkwo', 'home', 'And if there\u2019s no emergency?'),
         ('Yuki', 'computer', 'Then there is a bag by the door.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. Mr '
            'Okonkwo: So who decided the bag by the door? Yuki: Nobody '
            'decided. Mr Okonkwo: And if there\u2019s no emergency? Yuki: Then '
            'there is a bag by the door.'),

 32: lambda: F.sequence_steps(
        [('Say what you will do if there is no time.', 'arrow_right'),
         ('Say what you will do first.', 'arrow_right'),
         ('Agree who rings who.', 'person'),
         ('Say what you will give up.', 'arrow_right')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the planner',
         ['say what you have done', 'say what they should add', 'give one hard case', 'ask for a decision'], 'person'),
        ('Card B \u2014 the doubter',
         ['agree that you saw it', 'give your reason once', 'accept the hard case', 'agree halfway and say which half'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the planner: say '
            'what you have done, say what they should add, give one hard '
            'case, ask for a decision. Card B \u2014 the doubter: agree that you '
            'saw it, give your reason once, accept the hard case, agree '
            'halfway and say which half.'),

 34: lambda: F.writing_frame(
        [('two if sentences', 'If the heating stops, the small white button.'),
         ('one unless sentence', 'If water comes in under the back door it has.'),
         ('who to ring', 'Ring Amina before you ring me; she.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- two if '
            'sentences, one unless sentence, who to ring -- with a line of '
            'the model beside each one.'),

 35: lambda: F.before_after(
        ('Under the ground', ['the first small shake', 'three kilometres a second',
                              'through rock'], 'crack'),
        ('Above the ground', ['a message down the line', 'the loudspeakers sound',
                              'about sixty seconds'], 'siren'),
        height=520,
        alt='A shake under the ground beside a sound above it. Under the ground: '
            'the first small shake, travelling through rock at about three '
            'kilometres a second, travelling through rock. Above the '
            'ground: a message down a telephone line, far faster, the loudspeakers '
            'sounding, and about sixty seconds before the ground moves.'),

 36: lambda: F.word_grid(
        [('earthquake', 'crack'), ('loudspeaker', 'loudspeaker'), ('rehearse', 'concert'), ('sensor', 'screen')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'earthquake, loudspeaker, rehearse, sensor.'),
 37: lambda: F.close_scene(
        [('the bag by the door', 'bag'), ('a lamp', 'lamp'),
         ('six telephone numbers', 'list'), ('two sets of keys', 'key')],
        height=460,
        alt='The bag Yuki put by the front door one Saturday in April, drawn '
            'as what is in it: the bag itself, a lamp, a list of six '
            'telephone numbers, and two sets of spare keys. If nothing '
            'happens it was a wasted afternoon; if something does, it was the '
            'best one anybody spent that year.'),

 38: lambda: F.decision_fork(
        'Somebody made a plan for your home and did not ask you?',
        [('Join in',
          ['it costs one set of keys', 'you did not choose it'], 'key'),
         ('Say nothing and leave it',
          ['no work at all', 'you get the good and none of the work'],
          'cross'),
         ('Say it is too much',
          ['you said what you think', 'somebody has to be wrong first'],
          'speech')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: join in, which costs one set of keys you will '
            'never miss; say nothing, and get the good of it and none of the '
            'work; or say it is too much, when somebody has to be wrong '
            'first.'),

 39: lambda: F.bank_strip(
        [('emergency', 'siren'), ('century', 'calendar'),
         ('chance', 'question'), ('will stay', 'arrow_right'),
         ('safe', 'tick'), ('risk', 'warning'), ('rains', 'rain'),
         ('factory', 'factory')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'emergency, century, chance, will stay, safe, risk, rains, '
            'factory.'),

 40: lambda: F.progress_strip(
        [('I can say what I will do if something happens', False),
         ('I can use if, when and unless with the right tense', False),
         ('I can agree a plan with somebody else', False),
         ('I can write a plan for a bad day in 50–70 words', False),
         ('I can leave instructions for somebody while I am away', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('unless', 'question'), ('chance', 'question'), ('risk', 'warning'), ('safe', 'tick'), ('accident', 'siren'), ('emergency', 'siren'), ('danger', 'warning'), ('careful', 'magnifier'), ('luck', 'star'), ('jam', 'traffic')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 18 as picture cards on one page: '
            'unless, chance, risk, safe, accident, emergency, danger, '
            'careful, luck, jam.'),
}
