"""Unit 6 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        6, 'Journeys and Mishaps',
        'Past simple: irregular verbs',
        ['I can name the main things you take and lose on a journey.',
         'I can use irregular past verbs and past time phrases.',
         'I can describe a journey that went wrong in 50–70 words.'],
        ['bus', 'clock', 'home', 'cup', 'moon'],
        alt='The opening page of Unit 6, Journeys and Mishaps: the grammar point is '
            'the past simple with irregular verbs, and three things the learner will '
            'be able to do by the end of the unit.'),

 2: lambda: F.timeline(
        [('7.00', 'he left the flat'), ('7.10', 'he forgot his wallet'),
         ('7.30', 'he missed the coach'), ('9.00', 'he woke up late'),
         ('9.30', 'the class was off')],
        height=460,
        alt='Dani’s Tuesday as a line: he left the flat at seven, forgot his wallet '
            'at ten past, missed the coach at half past, woke up two stops late at '
            'nine, and found at half past nine that the class was off.'),

 3: lambda: F.category_set(
        [('Suitcase', 'home'), ('Wallet', 'book'), ('Charger', 'clock'),
         ('Umbrella', 'moon'), ('Coach', 'bus'), ('Taxi', 'shop')],
        height=600,
        alt='Six things you take on a journey, each on its own card: suitcase, '
            'wallet, charger, umbrella, coach and taxi.'),

 4: lambda: F.label_me(
        [('gate', 0.10, 0.48), ('seat', 0.32, 0.44), ('luggage', 0.54, 0.52),
         ('coach', 0.74, 0.46), ('delay', 0.92, 0.50)],
        height=620, draw=F.station,
        alt='A station drawn from the side, with a gate, a seat, luggage, a coach '
            'and a board showing a delay. Five numbered lines run to the right for '
            'the learner to write each word.'),

 5: lambda: F.grammar_contrast(
        ('Regular', 'verb + -ed',
         'He missed the coach.', [0.16, 0.38, 0.60, 0.82]),
        ('Irregular', 'the middle sound changes',
         'He caught the next one.', [0.30]),
        height=640,
        alt='The unit’s grammar as two columns. On the left regular verbs, which all '
            'take -ed, shown as four even marks. On the right irregular verbs, where '
            'the middle sound changes and there is no rule, shown as one mark.'),

 6: lambda: F.world_strip(
        [('go → went', 'bus', 'leave → left · take → took'),
         ('catch → caught', 'clock', 'find → found · sleep → slept'),
         ('forget → forgot', 'moon', 'find → found · pay → paid')],
        height=460,
        alt='Nine irregular verbs in three groups: go went, leave left and take '
            'took; catch caught, find found and sleep slept; forget forgot and pay '
            'paid.'),

 7: lambda: F.speakers(
        [('Track 6.2', 'Maya and Dani', 'person', 'what happened to you?'),
         ('Track 6.3', 'Yuki and the staff', 'bus', 'lost property'),
         ('Track 6.4', 'Amina', 'shop', 'five journeys')],
        height=560,
        alt='The three listenings in this unit: Maya asks Dani what happened, Yuki '
            'reports a lost umbrella to station staff, and Amina tells five journey '
            'stories from one week.'),

 8: lambda: F.cue_cards(
        ('Card A — the listener', ['ask what happened', 'say something kind',
                                   'ask what happened next', 'ask how late'],
         'person'),
        ('Card B — the teller', ['say when you left', 'say what you forgot',
                                 'say what went wrong next',
                                 'finish with one good thing'], 'bus'),
        height=560,
        alt='The two role-play cards side by side. Card A, the listener: ask what '
            'happened, say something kind, ask what happened next, ask how late. '
            'Card B, the teller: say when you left, what you forgot, what went wrong '
            'next, and finish with one good thing.'),

 9: lambda: F.process_strip(
        [('you leave', 'home'), ('the first bus', 'bus'),
         ('the connection', 'clock'), ('the second bus', 'bus'),
         ('you arrive', 'shop')],
        height=460,
        alt='A journey in five stages, each with an arrow to the next: you leave, '
            'the first bus, the connection, the second bus, and you arrive. The '
            'connection is the link that breaks.'),

 10: lambda: F.world_strip(
        [('the Andes', 'home', 'eleven hours to climb what a car does in five'),
         ('Norway', 'cup', 'a ferry every half hour across the water'),
         ('Bangladesh', 'moon', 'a boat is faster when the road is under water')],
        height=460,
        alt='Three journeys that take longer than they look: eleven hours up into '
            'the Andes, a ferry every half hour in Norway, and a boat '
            'instead of a road in Bangladesh in the wet season.'),

 11: lambda: F.writing_frame(
        [('When you left', 'I left home at six for a train at seven.'),
         ('What went wrong', 'Then I found I had the wrong day on the ticket.'),
         ('What somebody did', 'The man at the window changed it.'),
         ('How it ended', 'I arrived two hours late and nobody minded.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: when you left, what went wrong, what somebody did about it, and '
            'how it ended.'),

 12: lambda: F.function_map(
        [('I left a bag on the ten past four.', 'saying what you lost and where'),
         ('It is black, with a red handle.', 'describing it so they can find it'),
         ('Who should I speak to about this?', 'finding the right person'),
         ('Could you hold it until Friday?', 'asking them to keep it for you')],
        height=580,
        alt='Four things you say when something is lost, each with an arrow to what '
            'it does: saying what you lost and where, describing it so they can find '
            'it, finding the right person, and asking them to keep it for you.'),

 13: lambda: F.before_after(
        ('At the coast', ['sea level', 'the ordinary air',
                          'five hours by car'], 'cup'),
        ('Four and a half thousand', ['oxygen in the carriages', 'zigzags up the mountain',
                                      'eleven hours by train'], 'home'),
        height=520,
        alt='The railway from Lima, at the bottom and at the top. At the coast: sea '
            'level, ordinary air, five hours by car. Four and a half thousand metres '
            'up: oxygen in the carriages, zigzags cut into the mountain, and eleven '
            'hours by train.'),

 14: lambda: F.progress_strip(
        [('I can name the things you take and lose on a journey', False),
         ('I can use irregular past verbs and past time phrases', False),
         ('I can understand somebody telling the story of a bad journey', False),
         ('I can describe a journey that went wrong in 50–70 words', False),
         ('I can report something lost and describe it well', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
