"""Unit 1 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener(
        1, 'People and Routines',
        'Present simple and present continuous',
        ['I can name the people around me: neighbour, flatmate, colleague.',
         'I can use the present simple for routines and the present continuous for now.',
         'I can describe a person’s day in 50–70 words.'],
        ['person', 'clock', 'home', 'bus', 'shop'],
        alt='The opening page of Unit 1, People and Routines: the grammar point is '
            'the present simple and the present continuous, and three things the '
            'learner will be able to do by the end of the unit.'),

 2: lambda: F.scene(
        [('Maya', 'person', 'bookshop'), ('Tomas', 'nurse', 'hospital'),
         ('Amina', 'shop', 'corner shop'), ('Dani', 'book', 'student'),
         ('Mr Okonkwo', 'home', 'teacher'), ('Yuki', 'cup', 'works at home')],
        height=560,
        alt='The six people of 14 Alder Street at eight in the morning, each with '
            'the place they belong to: Maya and the bookshop, Tomas and the '
            'hospital, Amina and the corner shop, Dani the student, Mr Okonkwo the '
            'teacher, and Yuki who works at home.'),

 3: lambda: F.category_set(
        [('Nurse', 'nurse'), ('Shop assistant', 'shop'), ('Teacher', 'school'),
         ('Bus driver', 'bus'), ('Cook', 'kitchen'), ('Student', 'book')],
        height=600,
        alt='Six cards, each showing a job and the place that job is done: a nurse '
            'at a hospital, a shop assistant at a shop, a teacher at a school, a bus '
            'driver on a bus, a cook in a kitchen and a student with books.'),

 4: lambda: F.label_me(
        [('dawn', 0.10, 0.46), ('midday', 0.30, 0.56), ('afternoon', 0.50, 0.46),
         ('evening', 0.70, 0.56), ('midnight', 0.90, 0.46)],
        height=620, draw=F.day_column,
        alt='A single day drawn as a column of five bands, light at the top and dark '
            'at the bottom, with a sun, a clock and a moon beside it. Five numbered '
            'lines run to the right for the learner to write dawn, midday, '
            'afternoon, evening and midnight.'),

 5: lambda: F.grammar_contrast(
        ('Present simple', 'he works · she opens',
         'Maya works in a bookshop.', [0.12, 0.34, 0.56, 0.78]),
        ('Present continuous', 'am / is / are + -ing',
         'Tomas is working nights.', [0.5]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the present simple, with '
            'four marks spread across a timeline for something that happens again and '
            'again. On the right the present continuous, with one mark at now.'),

 6: lambda: F.timeline(
        [('6.30', 'Maya gets up'), ('8.10', 'she catches the bus'),
         ('9.00', 'she starts work'), ('11.00', 'a short break'),
         ('18.00', 'the shop closes')],
        height=400,
        alt='One weekday on a line, with five times marked: Maya gets up at half past '
            'six, catches the bus at ten past eight, starts work at nine, has a short '
            'break at eleven, and the shop closes at six.'),

 7: lambda: F.speakers(
        [('Track 1.2', 'Tomas', 'nurse', 'his week at the hospital'),
         ('Track 1.3', 'Amina and Yuki', 'shop', 'in the corner shop'),
         ('Track 1.4', 'Mr Okonkwo', 'home', 'a morning on Alder Street')],
        height=560,
        alt='The three listenings in this unit: Tomas talks about his week at the '
            'hospital, Amina and Yuki talk in the corner shop, and Mr Okonkwo '
            'describes a morning on Alder Street.'),

 8: lambda: F.cue_cards(
        ('Card A — Maya', ['greet', 'say your name and your floor',
                           'say where you work', 'ask two questions'], 'person'),
        ('Card B — Yuki', ['greet', 'say that you are new here',
                           'say what you do', 'ask about the shop and the bus'], 'cup'),
        height=560,
        alt='The two role-play cards side by side. Card A, Maya: greet, say your name '
            'and your floor, say where you work, ask two questions. Card B, Yuki: '
            'greet, say that you are new here, say what you do, ask about the shop '
            'and the bus.'),

 9: lambda: F.process_strip(
        [('Tomas finishes', 'nurse'), ('Amina opens', 'shop'),
         ('Maya catches the bus', 'bus'), ('Dani starts', 'school'),
         ('Mr Okonkwo watches', 'home')],
        height=460,
        alt='Five stages of one morning on Alder Street in order, each with an arrow '
            'to the next: Tomas finishes a night shift, Amina opens the shop, Maya '
            'catches the bus, Dani starts his class, Mr Okonkwo watches from his '
            'window.'),

 10: lambda: F.world_strip(
        [('Spain', 'sun', 'some shops close in the early afternoon'),
         ('Japan', 'bus', 'station staff help people onto the trains'),
         ('the north of Europe', 'moon', 'the working day finishes at four or five')],
        height=460,
        alt='The same day in three places: in Spain some shops close in the early '
            'afternoon, in Japan station staff help people onto the trains in the '
            'morning, and in the north of Europe the working day finishes at four or '
            'five.'),

 11: lambda: F.writing_frame(
        [('Who and when', 'Amina opens her shop at seven.'),
         ('First, then', 'First she puts the bread on the shelf, then she makes tea.'),
         ('Usually', 'She usually closes at six.'),
         ('At the moment', 'At the moment she is serving a new customer.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four steps: '
            'who and when, then first and then, then a usually sentence, and last one '
            'sentence about what is happening at the moment.'),

 12: lambda: F.function_map(
        [('You must be the new neighbour.', 'opening a conversation'),
         ('Let me show you where the post boxes are.', 'showing somebody around'),
         ('The shop closes early on Saturday.', 'giving useful local information'),
         ('Just knock if you need anything.', 'offering help')],
        height=580,
        alt='Four things a neighbour says, each with an arrow to what it does: '
            'opening a conversation, showing somebody around, giving useful local '
            'information, and offering help.'),

 13: lambda: F.before_after(
        ('Before', ['the alarm four times', 'ran for the train',
                    'arrived angry'], 'moon'),
        ('After', ['the phone in the kitchen', 'time for tea',
                   'ten pages on the train'], 'cup'),
        height=520,
        alt='Jun’s mornings before and after one small change. Before: he stopped the '
            'alarm four times, ran for the train and arrived angry. After: the phone '
            'in the kitchen, time for tea, and ten pages on the train.'),

 14: lambda: F.progress_strip(
        [('I can name the people around me', False),
         ('I can use the present simple and the present continuous', False),
         ('I can understand a short conversation between neighbours', False),
         ('I can describe a person’s day in 50–70 words', False),
         ('I can welcome somebody new and give them useful information', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
