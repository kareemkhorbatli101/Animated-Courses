"""Unit 11 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        11, 'Plans and Arrangements',
        'Going to, and the present continuous for arrangements',
        ['I can talk about arrangements using the present continuous.',
         'I can talk about decisions using going to.',
         'I can write an invite in 50–70 words.'],
        ['clock', 'book', 'home', 'person', 'cup'],
        alt='The opening page of Unit 11, Plans and Arrangements: the grammar point '
            'is going to and the present continuous for arrangements, and three '
            'things the learner will be able to do by the end of the unit.'),

 4: lambda: F.scene(
        [('Maya', 'person', 'is meeting her sister at nine'),
         ('Tomas', 'nurse', 'is working, as always'),
         ('Amina', 'shop', 'is closing at two'),
         ('Dani', 'kitchen', 'is going to cook for eight'),
         ('Mr Okonkwo', 'home', 'is doing nothing, as a plan'),
         ('Yuki', 'cup', 'is going to ask everybody')],
        height=560,
        alt='What each of the six people at number 14 is doing on Saturday: Maya is '
            'meeting her sister at nine, Tomas is working, Amina is closing the shop '
            'at two, Dani is going to cook for eight, Mr Okonkwo is doing nothing as '
            'a plan, and Yuki is going to ask everybody to come.'),

 7: lambda: F.category_set(
        [('A train at nine', 'bus'), ('Dinner on Friday', 'kitchen'),
         ('Learning to drive', 'bus'), ('Moving one day', 'home'),
         ('A meeting at work', 'book'), ('A holiday', 'sun')],
        height=600,
        alt='Six plans, each on its own card: a train at nine, dinner on Friday, '
            'learning to drive, moving one day, a meeting at work, and a holiday.'),

 8: lambda: F.label_me(
        [('arranged', 0.22, 0.46), ('decided', 0.37, 0.52),
         ('a hope', 0.52, 0.58), ('every week', 0.66, 0.74), ('open', 0.84, 0.86)],
        height=620, draw=F.week_page,
        alt='One week in a diary seen as a page. The first row carries a solid block '
            'with a time and another person in it, the second an empty outline, the '
            'third three small faint marks, the fourth three blocks that repeat every '
            'week, and the fifth nothing at all. Five numbered lines run to the right '
            'for the learner to write each word.'),

 12: lambda: F.grammar_contrast(
        ('I am meeting him at nine.', 'arranged, with a time',
         'The day and the person are fixed.', [0.72]),
        ('I am going to ask them.', 'decided, nothing booked',
         'Only you have agreed to it.', [0.30]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the present continuous '
            'for an arrangement, with one mark close to the day it happens. On the '
            'right going to for a decision, with a mark further back, because '
            'nothing is fixed yet.'),

 13: lambda: F.timeline(
        [('Monday', 'a meeting at ten'), ('Wednesday', 'nothing'),
         ('Friday', 'dinner at eight'), ('Saturday', 'seven at number 14'),
         ('this year', 'learning to drive')],
        height=460,
        alt='One week on a line: a meeting at ten on Monday, nothing on Wednesday, '
            'dinner at eight on Friday, seven o’clock at number 14 on Saturday, and '
            'somewhere beyond the week, learning to drive this year.'),

 16: lambda: F.speakers(
        [('Track 11.2', 'Yuki and Amina', 'shop', 'arranging an evening'),
         ('Track 11.3', 'Dani and a clerk', 'home', 'a booking that went wrong'),
         ('Track 11.4', 'Amina', 'person', 'six people, six Saturdays')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Amina about Saturday '
            'evening, Dani finds that a hotel cannot find his booking, and Amina '
            'describes what all six of them are doing on Saturday.'),

 21: lambda: F.cue_cards(
        ('Card A — arranging', ['ask before you explain', 'give the day and the time',
                                'say who else is coming', 'accept help'], 'person'),
        ('Card B — answering', ['say what you are doing', 'ask one question',
                                'say yes or no plainly', 'offer one thing'], 'cup'),
        height=560,
        alt='The two role-play cards side by side. Card A, arranging: ask before you '
            'explain, give the day and the time, say who else is coming, accept '
            'help. Card B, answering: say what you are doing, ask one question, say '
            'yes or no plainly, offer one thing.'),

 23: lambda: F.process_strip(
        [('the idea', 'moon'), ('the asking', 'person'),
         ('who is coming', 'book'), ('the cooking', 'kitchen'),
         ('seven o’clock', 'clock')],
        height=460,
        alt='One invite in five stages with an arrow to the next: the idea, the '
            'asking, finding out who is coming, the cooking, and seven o’clock on the '
            'evening itself.'),

 25: lambda: F.world_strip(
        [('a paper diary', 'book', 'holds what one person can really do'),
         ('a shared calendar', 'clock', 'anybody can put something in it'),
         ('a phone reminder', 'shop', 'kindest to the forgetful, worst after that')],
        height=460,
        alt='Three ways people keep a week: a paper diary, which holds about what '
            'one person can really do because the page runs out; a shared calendar '
            'at work, where anybody can put something in; and a phone reminder, '
            'kindest to a forgetful person and worst for anybody who then stops '
            'remembering at all.'),

 26: lambda: F.writing_frame(
        [('Who you are', 'This is Yuki from the top flat.'),
         ('The day and the time', 'Saturday at seven.'),
         ('What you are doing', 'I am going to cook.'),
         ('A way out', 'Tell me today if Saturday is wrong.')],
        height=520,
        alt='The shape of the message the learner is about to write, in four steps: '
            'who you are, the day and the time, what you are doing, and a way out '
            'for the reader.'),

 30: lambda: F.function_map(
        [('Are you doing anything on Saturday?', 'asking before you explain'),
         ('I can do Thursday, but not before seven.', 'saying yes to part of it'),
         ('Something has come up, I am sorry.', 'changing it, without the detail'),
         ('Shall we say the week after?', 'offering a new day')],
        height=580,
        alt='Four things people say when they arrange or change something, each with '
            'an arrow to what it does: asking before you explain, saying yes to part '
            'of it, changing it without giving the detail, and offering a new day.'),

 35: lambda: F.before_after(
        ('A booked bed', ['a name on a list', 'paid in advance', 'yours alone'], 'book'),
        ('A bed nobody booked', ['one key for the whole chain', 'move up when it fills',
                                 'the wet and late one first'], 'home'),
        height=520,
        alt='Two ways of getting a bed for the night. A booked bed: a name on a list, '
            'paid in advance, and yours alone. A bed nobody booked: one key that '
            'opens the whole chain, everybody moves up when it fills, and the person '
            'who arrives wet and late gets it first.'),

 40: lambda: F.progress_strip(
        [('I can talk about arrangements using the present continuous', False),
         ('I can talk about decisions using going to', False),
         ('I can invite somebody, and answer when I am invited', False),
         ('I can write an invite in 50–70 words', False),
         ('I can change an arrangement politely', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
