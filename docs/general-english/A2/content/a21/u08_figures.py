"""Unit 8 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        8, 'Help and Ability',
        'Can, can’t and could',
        ['I can talk about what people can and cannot do.',
         'I can use can, can’t and could correctly.',
         'I can write about something I can do in 50–70 words.'],
        ['person', 'nurse', 'book', 'kitchen', 'cup'],
        alt='The opening page of Unit 8, Help and Ability: the grammar point is can, '
            'can’t and could, and three things the learner will be able to do by the '
            'end of the unit.'),

 4: lambda: F.scene(
        [('Tomas', 'nurse', 'can take blood'), ('Amina', 'shop', 'can add in her head'),
         ('Mr Okonkwo', 'home', 'can play the piano'), ('Maya', 'book', 'can find any book'),
         ('Dani', 'kitchen', 'can cook for twelve'), ('Yuki', 'cup', 'is learning')],
        height=560,
        alt='What each of the six people at number 14 can do: Tomas can take '
            'blood, Amina can add in her head, Mr Okonkwo can play the piano, Maya '
            'can find any book, Dani can cook for twelve, and Yuki is learning.'),

 7: lambda: F.category_set(
        [('Swimming', 'cup'), ('Driving', 'bus'), ('Cooking', 'kitchen'),
         ('A language', 'book'), ('An instrument', 'home'), ('Sewing', 'shop')],
        height=600,
        alt='Six things people learn, each on its own card: swimming, driving, '
            'cooking, a language, an instrument and sewing.'),

 8: lambda: F.label_me(
        [('Can you…?', 0.10, 0.46), ('Could you…?', 0.32, 0.52),
         ('Would you mind…?', 0.54, 0.44), ('I was wondering…', 0.74, 0.50),
         ('Give me…', 0.92, 0.46)],
        height=620, draw=F.politeness_ladder,
        alt='A ladder of ways to ask for something, from the plainest at the bottom '
            'to the politest at the top. Five numbered lines run to the right for '
            'the learner to write each one.'),

 12: lambda: F.grammar_contrast(
        ('can · can’t', 'ability now',
         'She can swim. He can’t drive.', [0.72]),
        ('could', 'ability in the past',
         'She could float at eight.', [0.18]),
        height=640,
        alt='The unit’s grammar as two columns. On the left can and can’t, with a '
            'mark near now, for what somebody is able to do today. On the right '
            'could, with a mark far back, for what somebody was able to do then.'),

 13: lambda: F.timeline(
        [('age 8', 'she could float'), ('age 9', 'she stopped'),
         ('now', 'she can’t swim'), ('week 6', 'she can float again'),
         ('one year', 'she can swim')],
        height=460,
        alt='Yuki’s swimming on a line: she could float at eight, stopped at nine, '
            'cannot swim now, can float again by week six, and can swim after a '
            'year.'),

 16: lambda: F.speakers(
        [('Track 8.2', 'Dani and Amina', 'shop', 'asking a favour'),
         ('Track 8.3', 'Yuki and the teacher', 'cup', 'the first lesson'),
         ('Track 8.4', 'Amina', 'person', 'five people, five favours')],
        height=560,
        alt='The three listenings in this unit: Dani asks Amina a favour, Yuki has '
            'her first swimming lesson, and Amina describes five people and the '
            'favours they ask.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['ask carefully', 'say exactly what you want',
                             'say how long', 'thank them'], 'person'),
        ('Card B — asked', ['do not say yes at once', 'say what you can and cannot do',
                            'set one condition', 'agree'], 'shop'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask carefully, '
            'say exactly what you want, say how long, thank them. Card B, asked: do '
            'not say yes at once, say what you can and cannot do, set one condition, '
            'agree.'),

 23: lambda: F.process_strip(
        [('week one', 'moon'), ('clearly bad', 'person'),
         ('week six', 'clock'), ('a little better', 'cup'),
         ('one year', 'sun')],
        height=460,
        alt='Learning a skill in five stages, each with an arrow to the next: week '
            'one, being clearly bad, week six, a little better, and one year. The '
            'first six weeks are the part most adults never get past.'),

 25: lambda: F.world_strip(
        [('language exchange', 'person', 'thirty minutes each, nobody pays'),
         ('Finland', 'book', 'an evening college in almost every town'),
         ('Canada', 'home', 'libraries lend a bike, a drill, an hour with a tutor')],
        height=460,
        alt='Three ways people teach each other: a language exchange where each '
            'speaks for thirty minutes and nobody pays, an evening college in almost '
            'every town in Finland, and libraries in Canada that lend a bike, a '
            'drill or an hour with a tutor.'),

 26: lambda: F.writing_frame(
        [('What you can do', 'I can swim, but only slowly.'),
         ('How you learned it', 'I learned at thirty-four, with a patient teacher.'),
         ('What you can do now', 'I can swim half a kilometre.'),
         ('What you still cannot do', 'I cannot jump in yet.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: what you can do, how you learned it, what you can do now, and '
            'what you still cannot do.'),

 30: lambda: F.function_map(
        [('Could you give me a hand with this?', 'asking for help'),
         ('I can do Tuesday, but not Monday.', 'saying yes to part of it'),
         ('I’m sorry, I can’t this week.', 'saying no, clearly and kindly'),
         ('Ask me again if nobody else can.', 'leaving the door open')],
        height=580,
        alt='Four things you say when you ask or refuse, each with an arrow to what '
            'it does: asking for help, saying yes to part of it, saying no clearly '
            'and kindly, and leaving the door open.'),

 35: lambda: F.before_after(
        ('A library then', ['books', 'a card', 'quiet'], 'book'),
        ('A library now', ['a drill, a bike, a ladder', 'a small membership',
                           'somebody teaches you'], 'home'),
        height=520,
        alt='What a library used to lend and what it lends now. Then: books, a card '
            'and quiet. Now: a drill, a bike or a ladder, a small membership, and '
            'somebody who teaches you how to use it.'),

 40: lambda: F.progress_strip(
        [('I can talk about what people can and cannot do', False),
         ('I can use can, can’t and could correctly', False),
         ('I can understand somebody asking a favour and somebody refusing', False),
         ('I can write about something I can do in 50–70 words', False),
         ('I can ask a favour of somebody I do not know well', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
