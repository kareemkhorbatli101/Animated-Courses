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

 16: lambda: F.speakers(
        [('Track 18.2', 'Yuki and Amina', 'bag', 'what we will do if the water comes up'),
         ('Track 18.3', 'Dani and Tomas', 'nurse', 'the call that comes when the roads are bad'),
         ('Track 18.4', 'Amina', 'person', 'six people, six plans')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Amina what will happen if '
            'the water comes up and ends up owning the list, Dani asks Tomas '
            'whether the hospital rings him when the roads are bad, and Amina says '
            'what each of the six will do.'),

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

 23: lambda: F.process_strip(
        [('the alarm', 'siren'), ('nobody moves', 'person'), ('they look up', 'clock'),
         ('the first to stand', 'person'), ('the rest move', 'home')],
        height=460,
        alt='What happens in a building in the first seconds of an alarm, in five '
            'stages with an arrow to the next: the alarm sounds, almost nobody '
            'moves, they look up and then at each other, the first person to stand '
            'decides it, and the rest move.'),

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

 40: lambda: F.progress_strip(
        [('I can say what I will do if something happens', False),
         ('I can use if, when and unless with the right tense', False),
         ('I can agree a plan with somebody else', False),
         ('I can write a plan for a bad day in 50–70 words', False),
         ('I can leave instructions for somebody while I am away', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
