"""Unit 1 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        1, 'People and Routines',
        'Present simple and present continuous',
        ['I can name the people around me: neighbour, flatmate, colleague.',
         'I can use the present simple for routines and the present continuous for now.',
         'I can describe a person’s day in 50–70 words.'],
        ['person', 'clock', 'home', 'bus', 'shop'],
        alt='The opening page of Unit 1, People and Routines: the grammar point is '
            'the present simple and the present continuous, and three things the '
            'learner will be able to do by the end of the unit.'),

 3: lambda: F.bank_strip(
        [('busy', 'bus'), ('neighbour', 'home'), ('routine', 'clock'),
         ('works', 'shop')],
        height=400,
        alt='The four words of the word bank, in the order the task prints them, '
            'each with a picture: busy, neighbour, routine and works.'),
 2: lambda: F.word_grid(
        [('Neighbour', 'home'), ('Flatmate', 'person'), ('Colleague', 'nurse'),
         ('Routine', 'clock'), ('Shift', 'moon')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: a neighbour is '
            'drawn as the house next door, a flatmate as a person, a colleague '
            'as somebody at work, a routine as a clock and a shift as the hours '
            'worked at night.'),
 4: lambda: F.scene(
        [('Maya', 'person', 'bookshop'), ('Tomas', 'nurse', 'hospital'),
         ('Amina', 'shop', 'corner shop'), ('Dani', 'book', 'student'),
         ('Mr Okonkwo', 'home', 'teacher'), ('Yuki', 'cup', 'works at home')],
        height=560,
        alt='The six people of 14 Alder Street at eight in the morning, each with '
            'the place they belong to: Maya and the bookshop, Tomas and the '
            'hospital, Amina and the corner shop, Dani the student, Mr Okonkwo the '
            'teacher, and Yuki who works at home.'),

 6: lambda: F.sound_shape(
        [('routine', ['rou', 'tine'], 1), ('commute', ['com', 'mute'], 1),
         ('appointment', ['ap', 'point', 'ment'], 1),
         ('colleague', ['col', 'league'], 0),
         ('usually', ['u', 'su', 'al', 'ly'], 0),
         ('neighbour', ['neigh', 'bour'], 0)],
        height=710,
        alt='Where the stress falls in six words from this unit. Each word has a '
            'bar above every syllable, tall and dark where the stress falls and '
            'short and pale elsewhere, and the same pattern is repeated at the '
            'right as one large dot among small ones.'),
 5: lambda: F.word_grid(
        [('Shift', 'moon'), ('Commute', 'bus'), ('Appointment', 'notebook'),
         ('Colleague', 'nurse'), ('Flatmate', 'person'), ('Break', 'cup'),
         ('Weekday', 'clock')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: shift, '
            'commute, appointment, colleague, flatmate, break and weekday, each '
            'with the thing it means drawn beside the number.'),
 7: lambda: F.category_set(
        [('Nurse', 'nurse'), ('Shop assistant', 'shop'), ('Teacher', 'school'),
         ('Bus driver', 'bus'), ('Cook', 'kitchen'), ('Student', 'book')],
        height=600,
        alt='Six cards, each showing a job and the place that job is done: a nurse '
            'at a hospital, a shop assistant at a shop, a teacher at a school, a bus '
            'driver on a bus, a cook in a kitchen and a student with books.'),

 8: lambda: F.label_me(
        [('dawn', 0.10, 0.46), ('midday', 0.30, 0.56), ('afternoon', 0.50, 0.46),
         ('evening', 0.70, 0.56), ('midnight', 0.90, 0.46)],
        height=620, draw=F.day_column,
        alt='A single day drawn as a column of five bands, light at the top and dark '
            'at the bottom, with a sun, a clock and a moon beside it. Five numbered '
            'lines run to the right for the learner to write dawn, midday, '
            'afternoon, evening and midnight.'),

 11: lambda: F.annotated_lines(
        [('Maya works in a bookshop.', 'works'),
         ('Right now, she is waiting for the bus.', 'is waiting'),
         ('Tomas works at the hospital every week.', 'works'),
         ('This week, he is working nights.', 'is working')],
        height=440,
        alt='Four lines from the notice with the verb ringed in each: works, is '
            'waiting, works, is working. This is what a correct underlining of '
            'the verbs looks like.'),
 10: lambda: F.writing_frame(
        [('Your commute', 'My commute takes half an hour on two buses.'),
         ('Your break', 'I usually have a break at eleven.'),
         ('At the moment', 'At the moment I am starting work early.')],
        height=420,
        alt='The shape of the two or three sentences to write, in three steps: '
            'your commute, your break, and one sentence about what is happening '
            'at the moment, with a line of the model beside each.'),
 9: lambda: F.bank_strip(
        [('shift', 'moon'), ('commute', 'bus'), ('appointment', 'notebook'),
         ('break', 'cup')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each drawn: '
            'a shift as night hours, a commute as a bus, an appointment as a '
            'diary and a break as a cup of tea.'),
 12: lambda: F.grammar_contrast(
        ('Present simple', 'he works · she opens',
         'Maya works in a bookshop.', [0.12, 0.34, 0.56, 0.78]),
        ('Present continuous', 'am / is / are + -ing',
         'Tomas is working nights.', [0.5]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the present simple, with '
            'four marks spread across a timeline for something that happens again and '
            'again. On the right the present continuous, with one mark at now.'),

 13: lambda: F.timeline(
        [('6.30', 'Maya gets up'), ('8.10', 'she catches the bus'),
         ('9.00', 'she starts work'), ('11.00', 'a short break'),
         ('18.00', 'the shop closes')],
        height=400,
        alt='One weekday on a line, with five times marked: Maya gets up at half past '
            'six, catches the bus at ten past eight, starts work at nine, has a short '
            'break at eleven, and the shop closes at six.'),

 15: lambda: F.error_pairs(
        [('She work in a shop.', 'She works in a shop.'),
         ('Amina open the shop at seven.', None),
         ('Look! Maya wait for the bus.', None),
         ('He work at the hospital every night.', None)],
        height=500,
        alt='One correction worked through -- she work in a shop struck out and '
            'she works in a shop beside it -- and then three more sentences with '
            'an empty line for the learner to write the correct form.'),
 14: lambda: F.sort_bins(
        ['Present simple', 'Present continuous'],
        ['every morning', 'right now', 'usually', 'this week', 'every week'],
        height=540,
        alt='The five time words of this unit as chips above two empty bins, one '
            'for the present simple and one for the present continuous. Which '
            'chip goes in which bin is the exercise, so none of them is placed.'),
 16: lambda: F.speakers(
        [('Track 1.2', 'Tomas', 'nurse', 'his week at the hospital'),
         ('Track 1.3', 'Amina and Yuki', 'shop', 'in the corner shop'),
         ('Track 1.4', 'Mr Okonkwo', 'home', 'a morning on Alder Street')],
        height=560,
        alt='The three listenings in this unit: Tomas talks about his week at the '
            'hospital, Amina and Yuki talk in the corner shop, and Mr Okonkwo '
            'describes a morning on Alder Street.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('get up 6.30', 'alarm'), ('bookshop', 'book'),
                       ('by bus', 'bus'), ('evening class', 'school')]),
        ('Student B', [('get up 6.30', 'alarm'), ('hospital', 'nurse'),
                       ('by bike', 'bicycle'), ('working nights', 'moon')]),
        height=560,
        alt='Student A\u2019s routine on the left and Student B\u2019s on the right, with '
            'a fold line between them. Both get up at half past six. A works in a '
            'bookshop, travels by bus and has an evening class this week; B works '
            'in a hospital, travels by bike and is working nights. Three of the '
            'four facts differ, which is what the task asks the pair to find.'),
 19: lambda: F.question_cards(
        [('What time do you usually get up?', 'clock'),
         ('What are you doing this week?', 'pencil'),
         ('Who do you see every day?', 'person')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put on '
            'the table and take one at a time: what time you get up, what you are '
            'doing this week, and who you see every day.'),
 18: lambda: F.match_columns(
        [('Amina', 'shop'), ('Maya', 'person'), ('Tomas', 'nurse'),
         ('Dani', 'bag')],
        ['running for the bus', 'coming home from a night shift',
         'sleeping in the afternoon', 'opening her shop',
         'carrying a bag of rice'],
        height=640,
        alt='Four people on the left and five things happening on the right, for '
            'the learner to join. One of the five, sleeping in the afternoon, is '
            'not needed, and it is drawn so the spare option is visible.'),
 17: lambda: F.dialogue_strip(
        [('Amina', 'shop', 'Good morning, Yuki. You are new here.'),
         ('Yuki', 'computer', 'Yes, this is my first week.'),
         ('Amina', 'shop', 'I open every day except Sunday.'),
         ('Yuki', 'computer', 'I am working from home, so I am here a lot.')],
        height=560,
        alt='The corner shop conversation as four speech bubbles, Amina on one '
            'side and Yuki on the other: Amina welcomes her, Yuki says it is her '
            'first week, Amina says when she opens, and Yuki says she works from '
            'home.'),
 21: lambda: F.cue_cards(
        ('Card A — Maya', ['greet', 'say your name and your floor',
                           'say where you work', 'ask two questions'], 'person'),
        ('Card B — Yuki', ['greet', 'say that you are new here',
                           'say what you do', 'ask about the shop and the bus'], 'cup'),
        height=560,
        alt='The two role-play cards side by side. Card A, Maya: greet, say your name '
            'and your floor, say where you work, ask two questions. Card B, Yuki: '
            'greet, say that you are new here, say what you do, ask about the shop '
            'and the bus.'),

 22: lambda: F.talk_shape(
        [('who they are', 1, 'person'),
         ('what they usually do', 2, 'clock'),
         ('what they are doing at the moment', 2, 'bus')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block as '
            'wide as the share of the minute it should take: a short one for who '
            'the person is, then two longer ones for what they usually do and '
            'what they are doing at the moment.'),
 23: lambda: F.process_strip(
        [('Tomas finishes', 'nurse'), ('Amina opens', 'shop'),
         ('Maya catches the bus', 'bus'), ('Dani starts', 'school'),
         ('Mr Okonkwo watches', 'home')],
        height=460,
        alt='Five stages of one morning on Alder Street in order, each with an arrow '
            'to the next: Tomas finishes a night shift, Amina opens the shop, Maya '
            'catches the bus, Dani starts his class, Mr Okonkwo watches from his '
            'window.'),

 24: lambda: F.word_grid(
        [('commute', 'bus'), ('flexible', 'cloth'), ('habit', 'cup'),
         ('weekday', 'clock')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: commute '
            'drawn as the bus journey, flexible as cloth that bends, habit as the '
            'same cup every day, and weekday as the clock.'),
 25: lambda: F.world_strip(
        [('Spain', 'sun', 'some shops close in the early afternoon'),
         ('Japan', 'bus', 'station staff help people onto the trains'),
         ('the north of Europe', 'moon', 'the working day finishes at four or five')],
        height=460,
        alt='The same day in three places: in Spain some shops close in the early '
            'afternoon, in Japan station staff help people onto the trains in the '
            'morning, and in the north of Europe the working day finishes at four or '
            'five.'),

 26: lambda: F.writing_frame(
        [('Who and when', 'Amina opens her shop at seven.'),
         ('First, then', 'First she puts the bread on the shelf, then she makes tea.'),
         ('Usually', 'She usually closes at six.'),
         ('At the moment', 'At the moment she is serving a new customer.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four steps: '
            'who and when, then first and then, then a usually sentence, and last one '
            'sentence about what is happening at the moment.'),

 29: lambda: F.writing_frame(
        [('The morning', 'My perfect weekday starts late.'),
         ('Until two', 'I work until two, and then I stop.'),
         ('The afternoon', 'In the afternoon I read, and I cook.'),
         ('The evening', 'In the evening I see one friend.')],
        height=470,
        alt='Your perfect weekday as four times of day -- the morning, until two, '
            'the afternoon and the evening -- with a line of the model beside '
            'each one.'),
 28: lambda: F.writing_frame(
        [('Welcome her', 'Dear Yuki, Welcome to 14 Alder Street.'),
         ('Say where you live', 'I live on the second floor with Tomas.'),
         ('Two useful things', 'The post comes before nine.'),
         ('Offer help', 'If you need anything, knock on our door.')],
        height=470,
        alt='The four moves of the message to a new neighbour -- welcome her, say '
            'where you live, give two useful things, offer help -- with a line '
            'from the model beside each.'),
 27: lambda: F.writing_frame(
        [('Your opinion', 'I think a routine is a good thing.'),
         ('First reason', 'A routine saves time.'),
         ('Second reason', 'It also helps you sleep well.'),
         ('The other side', 'A routine that never changes is boring.')],
        height=470,
        alt='The shape of the opinion paragraph in four steps -- your opinion, a '
            'first reason, a second reason, and the other side -- with a line of '
            'the model beside each one.'),
 30: lambda: F.function_map(
        [('You must be the new neighbour.', 'opening a conversation'),
         ('Let me show you where the post boxes are.', 'showing somebody around'),
         ('The shop closes early on Saturday.', 'giving useful local information'),
         ('Just knock if you need anything.', 'offering help')],
        height=580,
        alt='Four things a neighbour says, each with an arrow to what it does: '
            'opening a conversation, showing somebody around, giving useful local '
            'information, and offering help.'),

 34: lambda: F.writing_frame(
        [('Welcome', 'Dear Yuki, Welcome to number 14.'),
         ('Fact one', 'The post comes before nine.'),
         ('Fact two', 'The shop is open every day except Sunday.'),
         ('Offer help', 'We are on the second floor.')],
        height=470,
        alt='The welcome note in four lines -- the welcome, the first fact, the '
            'second fact and the offer of help -- with a line of the model beside '
            'each one.'),
 33: lambda: F.cue_cards(
        ('Card A \u2014 Neighbour',
         ['open the conversation', 'say your name and floor',
          'give two useful facts', 'offer help'], 'home'),
        ('Card B \u2014 New arrival',
         ['say when you moved in', 'say what you do',
          'ask two questions about the area', 'thank them'], 'bag'),
        height=560,
        alt='The two 7D role-play cards side by side. Card A, the neighbour: open '
            'the conversation, say your name and floor, give two useful facts, '
            'offer help. Card B, the new arrival: say when you moved in, say what '
            'you do, ask two questions about the area, thank them.'),
 32: lambda: F.sequence_steps(
        [('Give one or two useful local facts.', 'notice'),
         ('Say your name and where you live.', 'person'),
         ('Offer help and say when you are usually in.', 'key'),
         ('Ask one question about them.', 'question')],
        height=500,
        alt='The four steps still to be numbered, in the order the task prints '
            'them and not in the right order, each with an empty box at the left '
            'for its number.'),
 31: lambda: F.dialogue_strip(
        [('Maya', 'person', 'Hello, you must be the new neighbour.'),
         ('Yuki', 'bag', 'Yes, I moved in on Saturday.'),
         ('Tomas', 'bed', 'Sorry, I am half asleep. I am working nights.'),
         ('Maya', 'person', 'The post comes before nine.')],
        height=560,
        alt='The 7B exchange as four speech bubbles: Maya opens the conversation, '
            'Yuki says she moved in on Saturday, Tomas says he is half asleep '
            'because he is working nights, and Maya gives the first useful fact '
            'about the post.'),
 35: lambda: F.before_after(
        ('Before', ['the alarm four times', 'ran for the train',
                    'arrived angry'], 'moon'),
        ('After', ['the phone in the kitchen', 'time for tea',
                   'ten pages on the train'], 'cup'),
        height=520,
        alt='Jun’s mornings before and after one small change. Before: he stopped the '
            'alarm four times, ran for the train and arrived angry. After: the phone '
            'in the kitchen, time for tea, and ten pages on the train.'),

 39: lambda: F.bank_strip(
        [('routine', 'clock'), ('shift', 'moon'), ('flatmate', 'person'),
         ('appointment', 'notebook'), ('present continuous', 'bus'),
         ('present simple', 'home'), ('neighbour', 'window'),
         ('usually', 'sun')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank on two rows, in bank '
            'order: routine, shift, flatmate, appointment, present continuous, '
            'present simple, neighbour and usually, each with a picture.'),
 38: lambda: F.decision_fork(
        'A new person moves in next week. What do you do?',
        [('Knock with a note',
          ['a shy person can read it later', 'it takes two minutes'],
          'envelope'),
         ('Wait on the stairs',
          ['you may never meet them', 'they work from home'], 'clock'),
         ('Use the group chat',
          ['all six people see it', 'nobody reads a group chat'], 'mobile')],
        height=580,
        alt='The decision task as one question and three branches, each with what '
            'it costs: knock with a note, which a shy person can read later and '
            'takes two minutes; wait on the stairs, where you may never meet '
            'somebody who works from home; or use the group chat, which everybody '
            'sees and nobody reads.'),
 37: lambda: F.close_scene(
        [('the top flat', 'home'), ('the shop', 'shop'),
         ('the street', 'street'), ('a short note', 'envelope')],
        height=460,
        alt='Yuki\u2019s first four days at number 14 drawn along one street: the top '
            'flat she moved into, the shop where she spoke only about bread, the '
            'street whose voices she did not know, and the short note Maya put '
            'through her door.'),
 36: lambda: F.word_grid(
        [('alarm', 'alarm'), ('swap', 'mobile'), ('habit', 'cup'),
         ('secret', 'key')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: the '
            'alarm that wakes you, the phone Jun swapped from one room to '
            'another, the habit of tea, and a secret drawn as a key.'),
 40: lambda: F.progress_strip(
        [('I can name the people around me', False),
         ('I can use the present simple and the present continuous', False),
         ('I can understand a short conversation between neighbours', False),
         ('I can describe a person’s day in 50–70 words', False),
         ('I can welcome somebody new and give them useful information', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
 41: lambda: F.glossary_grid(
        [('routine', 'clock'), ('shift', 'moon'), ('flatmate', 'person'),
         ('neighbour', 'home'), ('colleague', 'nurse'), ('commute', 'bus'),
         ('appointment', 'notebook'), ('busy', 'street'), ('usually', 'sun'),
         ('at the moment', 'speech')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 1 as picture cards on one page: '
            'routine, shift, flatmate, neighbour, colleague, commute, '
            'appointment, busy, usually and at the moment.'),
}
