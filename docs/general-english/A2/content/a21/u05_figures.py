"""Unit 5 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        5, 'Last Weekend',
        'Past simple: was, were and regular verbs',
        ['I can name places outside the city and talk about the weather.',
         'I can use was, were and regular past verbs.',
         'I can describe my last weekend in 50–70 words.'],
        ['sun', 'home', 'cup', 'person', 'moon'],
        alt='The opening page of Unit 5, Last Weekend: the grammar point is the past '
            'simple with was, were and regular verbs, and three things the learner '
            'will be able to do by the end of the unit.'),

 4: lambda: F.timeline(
        [('8.00', 'Amina opened the shop'), ('11.00', 'Yuki walked to the lake'),
         ('14.00', 'Amina closed'), ('17.00', 'Dani cooked'),
         ('21.00', 'the light went')],
        height=460,
        alt='Last Sunday on Alder Street as a line: Amina opened the shop at eight, '
            'Yuki walked to the lake at eleven, Amina closed at two, Dani cooked at '
            'five, and the light went at nine.'),

 7: lambda: F.category_set(
        [('Beach', 'sun'), ('Museum', 'home'), ('Forest', 'moon'),
         ('Lake', 'cup'), ('Village', 'shop'), ('Path', 'bus')],
        height=600,
        alt='Six places people go at the weekend, each on its own card: beach, '
            'museum, forest, lake, village and path.'),

 8: lambda: F.label_me(
        [('hill', 0.10, 0.48), ('forest', 0.32, 0.42), ('lake', 0.54, 0.54),
         ('path', 0.74, 0.46), ('village', 0.92, 0.50)],
        height=620, draw=F.landscape,
        alt='The countryside drawn from the side, with a hill, a forest, a lake, a '
            'path and a village. Five numbered lines run to the right for the '
            'learner to write each word.'),

 12: lambda: F.grammar_contrast(
        ('was / were', 'how something was',
         'Sunday was warm.', [0.22]),
        ('verb + -ed', 'what somebody did',
         'She opened the shop.', [0.16, 0.38, 0.60, 0.82]),
        height=640,
        alt='The unit’s grammar as two columns. On the left was and were, one mark '
            'back on the timeline, for how something was. On the right the regular '
            'past with -ed, four marks, for the things somebody did.'),

 13: lambda: F.world_strip(
        [('/t/', 'bus', 'walked · cooked · watched'),
         ('/d/', 'sun', 'stayed · opened · arrived'),
         ('/ɪd/', 'clock', 'rested · waited · wanted')],
        height=460,
        alt='The three sounds of the -ed ending: /t/ in walked, cooked and watched; '
            '/d/ in stayed, opened and arrived; and /ɪd/ in rested, waited and '
            'wanted, which is the only group that adds a beat.'),

 16: lambda: F.speakers(
        [('Track 5.2', 'Maya and Dani', 'person', 'what did you do?'),
         ('Track 5.3', 'Yuki and the clerk', 'bus', 'booking a trip'),
         ('Track 5.4', 'Amina', 'shop', 'five weekends')],
        height=560,
        alt='The three listenings in this unit: Maya and Dani ask each other what '
            'they did, Yuki books a trip with a clerk, and Amina describes five '
            'weekends in one building.'),

 21: lambda: F.cue_cards(
        ('Card A — the listener', ['ask what they did', 'ask about the weather',
                                   'ask who with', 'ask what happened next'],
         'person'),
        ('Card B — the teller', ['say where you went', 'say what the weather was like',
                                 'say who with',
                                 'finish with one thing that went wrong'], 'sun'),
        height=560,
        alt='The two role-play cards side by side. Card A, the listener: ask what '
            'they did, ask about the weather, ask who with, ask what happened next. '
            'Card B, the teller: say where you went, what the weather was like, who '
            'with, and finish with one thing that went wrong.'),

 23: lambda: F.process_strip(
        [('workers campaigned', 'person'), ('owners said no', 'home'),
         ('a factory tried it', 'shop'), ('the work still happened', 'clock'),
         ('five days and two', 'sun')],
        height=460,
        alt='How the weekend arrived, in five stages, each with an arrow to the '
            'next: workers campaigned, owners said no, one factory tried it, the '
            'work still happened, and five days and two became normal.'),

 25: lambda: F.world_strip(
        [('the Middle East', 'sun', 'Friday and Saturday are the days off'),
         ('Nepal', 'moon', 'one day off for a long time'),
         ('Iceland', 'clock', 'tested a four-day week for four years')],
        height=460,
        alt='The days off in three places: Friday and Saturday in much of the Middle '
            'East, one day off for a long time in Nepal, and a four-day week tested '
            'for four years in Iceland.'),

 26: lambda: F.writing_frame(
        [('When, and the weather', 'Last Saturday was grey and cold.'),
         ('So what you did', 'so I stayed in and cleaned the kitchen'),
         ('The other day', 'On Sunday the weather changed completely.'),
         ('How it ended', 'I arrived home tired and very pleased.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: when it was and what the weather was like, what you did as a '
            'result, the other day of the weekend, and how it ended.'),

 30: lambda: F.function_map(
        [('I am sorry, something came up.', 'saying you cannot come'),
         ('Could we do it next Saturday instead?', 'offering another day'),
         ('I waited an hour.', 'saying what it cost you, carefully'),
         ('Thank you for letting me know.', 'accepting it without a fight')],
        height=580,
        alt='Four things you say when a plan changes, each with an arrow to what it '
            'does: saying you cannot come, offering another day, saying what it cost '
            'you carefully, and accepting it without a fight.'),

 35: lambda: F.before_after(
        ('Forty hours', ['five days', 'tired workers',
                         'the same work'], 'clock'),
        ('Thirty-six', ['four days', 'the same pay',
                        'the same work'], 'sun'),
        height=520,
        alt='Iceland before and after the trial. Before: forty hours over five days, '
            'with tired workers. After: thirty-six hours over four days, on the '
            'same pay, and the same work got done.'),

 40: lambda: F.progress_strip(
        [('I can name places outside the city and talk about the weather', False),
         ('I can use was, were and regular past verbs', False),
         ('I can understand people talking about their weekend', False),
         ('I can describe my last weekend in 50–70 words', False),
         ('I can sort out a plan that did not happen', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
