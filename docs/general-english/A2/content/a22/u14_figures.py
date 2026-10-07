"""Unit 14 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener(
        14, 'Health and Feeling Better',
        'Should and shouldn’t',
        ['I can say how I feel and how long it has been.',
         'I can give advice with should and shouldn’t.',
         'I can write advice for somebody ill in 50–70 words.'],
        ['thermometer', 'pill', 'bed', 'cup', 'person'],
        alt='The opening page of Unit 14, Health and Feeling Better: the grammar '
            'point is should and shouldn’t, and three things the learner will be '
            'able to do by the end of the unit.'),

 2: lambda: F.scene(
        [('Amina', 'shop', 'you should eat something'),
         ('Tomas', 'nurse', 'drink water and go to bed'),
         ('Maya', 'book', 'you should look it up'),
         ('Dani', 'kitchen', 'you shouldn’t worry'),
         ('Mr Okonkwo', 'home', 'go outside for ten minutes'),
         ('Yuki', 'cup', 'says nothing, brings soup')],
        height=560,
        alt='What each of the six people at number 14 says you should do: Amina says '
            'eat something, Tomas says drink water and go to bed, Maya says look it '
            'up, Dani says you shouldn’t worry, Mr Okonkwo says go outside for ten '
            'minutes, and Yuki says nothing and brings soup.'),

 3: lambda: F.category_set(
        [('A cold', 'thermometer'), ('A headache', 'person'), ('A tooth', 'home'),
         ('A cut', 'pill'), ('A fever', 'bed'), ('A throat', 'cup')],
        height=600,
        alt='Six everyday problems, each on its own card: a cold, a headache, a '
            'tooth, a cut, a fever and a throat.'),

 4: lambda: F.label_me(
        [('could', 0.78, 0.18), ('should', 0.62, 0.26),
         ('shouldn’t', 0.46, 0.34), ('must', 0.30, 0.42), ('now', 0.18, 0.88)],
        height=620, draw=F.advice_ladder,
        alt='Five rungs climbing from the bottom of the panel to the top, each wider '
            'and darker than the one below it, with an arrow up the right-hand side. '
            'The lowest rung is the lightest and the smallest. Five numbered lines '
            'run to the right for the learner to write each word.'),

 5: lambda: F.grammar_contrast(
        ('should', 'advice for doing it',
         'You should drink more water.', [0.72]),
        ('shouldn’t', 'advice against doing it',
         'You shouldn’t go to work.', [0.28]),
        height=640,
        alt='The unit’s grammar as two columns. On the left should, which advises '
            'doing a thing, with its mark towards the yes end. On the right '
            'shouldn’t, which advises against it, with its mark towards the no end.'),

 6: lambda: F.timeline(
        [('day one', 'rest and drink'), ('day two', 'stay at home'),
         ('day four', 'still a fever?'), ('day five', 'see somebody'),
         ('day ten', 'better')],
        height=460,
        alt='One cold on a line: rest and drink on the first day, stay at home on '
            'the second, ask on the fourth whether the fever is still there, see '
            'somebody on the fifth, and better by the tenth.'),

 7: lambda: F.speakers(
        [('Track 14.2', 'Yuki and Tomas', 'nurse', 'asking the nurse next door'),
         ('Track 14.3', 'Dani and a chemist', 'pill', 'at the chemist'),
         ('Track 14.4', 'Amina', 'person', 'six people, six kinds of advice')],
        height=560,
        alt='The three listenings in this unit: Tomas tells Yuki what he will and '
            'will not say on a staircase, a chemist gives Dani the cheap answer, and '
            'Amina describes the six kinds of advice she is given every week.'),

 8: lambda: F.cue_cards(
        ('Card A — asking', ['say the problem in four words', 'answer plainly',
                             'ask what you should take', 'ask when to worry'], 'person'),
        ('Card B — advising', ['ask two questions first', 'give the cheap answer too',
                               'say when to see somebody', 'do not frighten them'], 'pill'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: say the problem '
            'in four words, answer the questions plainly, ask what you should take, '
            'ask when to worry. Card B, advising: ask two questions first, give the '
            'cheap answer as well, say when they should see somebody, do not '
            'frighten them.'),

 9: lambda: F.process_strip(
        [('a small worry', 'moon'), ('a screen at night', 'book'),
         ('every answer at once', 'clock'), ('worse, not wiser', 'person'),
         ('how long is it now?', 'thermometer')],
        height=460,
        alt='One small worry in five stages with an arrow to the next: the worry, a '
            'screen at night, every possible answer listed at once, a person who '
            'feels worse rather than wiser, and the one question that sorts it: how '
            'long is it now?'),

 10: lambda: F.world_strip(
        [('soup', 'cup', 'warm water and salt, which is most of it'),
         ('steam', 'thermometer', 'nothing to the illness, twenty good minutes'),
         ('honey', 'pill', 'it coats a throat, and a child will take it')],
        height=460,
        alt='Three old remedies and what each one really does: soup, which gets warm '
            'water and salt into somebody who stopped drinking; steam, which does '
            'nothing to the illness and twenty good minutes to a blocked nose; and '
            'honey, which coats a throat that hurts and tastes good enough that a '
            'child will take it.'),

 11: lambda: F.writing_frame(
        [('What they should do', 'You should drink much more than you want to.'),
         ('What they shouldn’t', 'You shouldn’t go in tomorrow.'),
         ('When to see somebody', 'If the fever is still there after four days.'),
         ('One kind thing', 'And eat something, even if it is only toast.')],
        height=520,
        alt='The shape of the advice the learner is about to write, in four steps: '
            'what they should do, what they shouldn’t, when to see somebody, and one '
            'kind thing at the end.'),

 12: lambda: F.function_map(
        [('It started on Tuesday and it has not changed.', 'the length, which is the first question'),
         ('It is worse at night.', 'the one detail that changes the answer'),
         ('I have taken nothing for it.', 'what you have already tried'),
         ('I am not worried, I just want to check.', 'why you came')],
        height=580,
        alt='Four things a person says about how they feel, each with an arrow to '
            'what it does: giving the length, giving the one detail that changes the '
            'answer, saying what has already been tried, and saying why they came.'),

 13: lambda: F.before_after(
        ('Everybody to a doctor', ['one waiting room', 'three weeks for everybody',
                                   'the small and the bad together'], 'home'),
        ('A nurse on the line first', ['how long, how bad', 'most people sent to somebody else',
                                       'a chemist takes the minor list'], 'nurse'),
        height=520,
        alt='Two ways of answering the first question about health. Everybody to a '
            'doctor: one waiting room, three weeks for everybody, and the small '
            'problems sitting with the bad ones. A nurse on the line first: how '
            'long and how bad, most people sent to somebody other than a doctor, '
            'and a chemist handling the minor list.'),

 14: lambda: F.progress_strip(
        [('I can say how I feel and how long it has been', False),
         ('I can give advice with should and shouldn’t', False),
         ('I can ask for advice at a chemist or a surgery', False),
         ('I can write advice for somebody ill in 50–70 words', False),
         ('I can tell somebody they should see a doctor', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
