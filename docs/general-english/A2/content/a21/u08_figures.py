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

 2: lambda: F.word_grid(
        [('Lend', 'hands'), ('Borrow', 'hands'), ('Favour', 'hands'), ('Lesson', 'teacher'), ('Beginner', 'book')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: lend, borrow, '
            'favour, lesson, beginner.'),

 3: lambda: F.bank_strip(
        [('lend', 'hands'), ('patient', 'clock'), ('instrument', 'guitar'),
         ('beginner', 'book')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: lend, patient, instrument, beginner.'),

 4: lambda: F.scene(
        [('Tomas', 'nurse', 'can take blood'), ('Amina', 'shop', 'can add in her head'),
         ('Mr Okonkwo', 'home', 'can play the piano'), ('Maya', 'book', 'can find any book'),
         ('Dani', 'kitchen', 'can cook for twelve'), ('Yuki', 'cup', 'is learning')],
        height=560,
        alt='What each of the six people at number 14 can do: Tomas can take '
            'blood, Amina can add in her head, Mr Okonkwo can play the piano, Maya '
            'can find any book, Dani can cook for twelve, and Yuki is learning.'),

 5: lambda: F.word_grid(
        [('Favour', 'hands'), ('Lend', 'hands'), ('Advice', 'speech'), ('Course', 'certificate'), ('Patient', 'clock'), ('Instrument', 'guitar'), ('Beginner', 'book')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: favour, '
            'lend, advice, course, patient, instrument, beginner, each with '
            'the thing it means drawn beside its number.'),

 6: lambda: F.annotated_lines(
        [('I can swim', 'can'),
         ('I can\u2019t swim', 'can\u2019t'),
         ('Can you help?', 'can')],
        height=378,
        alt='Three phrases from this unit with the word that carries the beat '
            'ringed in each: can, can\u2019t, can.'),

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

 9: lambda: F.bank_strip(
        [('favour', 'hands'), ('advice', 'speech'), ('course', 'certificate'), ('borrow', 'hands')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: favour, advice, course, borrow.'),
 10: lambda: F.writing_frame(
        [('What you can do', 'I can cook about six things and I can cook them well.'),
         ('What you cannot do', 'I cannot follow the steps in a book.'),
         ('Who was patient with you', 'My father was patient with me for two years.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- what you can do, what you cannot do, and who was patient with '
            'you -- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('Amina can add four prices in her head.', 'can'),
         ('Yuki can\u2019t swim, but she could float when she was eight.', 'can\u2019t'),
         ('Can you lend me a pen?', 'Can'),
         ('Could you watch the shop for ten minutes?', 'Could')],
        height=440,
        alt='Four lines from the notice with can, cannot or could ringed in '
            'each. Two of the four tell you about ability and two ask for '
            'something, which is the question the task asks.'),

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

        # REVIEW: bins guessed as []; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['ability', 'request'],
        ['Could you lend me a pen', 'Dani can cook rice',
         'Can you carry this box', 'Mr Okonkwo could run'],
        height=540,
        alt='The four sentences of this task as chips above two empty bins, '
            'one for ability and one for a request. Which chip goes in which '
            'bin is the exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('He cans swim.', 'He can swim.'),
         ('He cans play the piano.', None),
         ('Can you to help me with this box?', None),
         ('Yuki can\u2019t to swim yet.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 8.2', 'Dani and Amina', 'shop', 'asking a favour'),
         ('Track 8.3', 'Yuki and the teacher', 'cup', 'the first lesson'),
         ('Track 8.4', 'Amina', 'person', 'five people, five favours')],
        height=560,
        alt='The three listenings in this unit: Dani asks Amina a favour, Yuki has '
            'her first swimming lesson, and Amina describes five people and the '
            'favours they ask.'),

 17: lambda: F.dialogue_strip(
        [('Teacher', 'teacher', 'Can you swim at all?'),
         ('Yuki', 'computer', 'No.'),
         ('Teacher', 'teacher', 'That\u2019s more than most people start with.'),
         ('Yuki', 'computer', 'I can, but I don\u2019t like it.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Teacher: Can you swim at all? Yuki: No. Teacher: That\u2019s '
            'more than most people start with. Yuki: I can, but I don\u2019t like '
            'it.'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['asks Dani, because he cannot cook',
         'asks nothing of anybody',
         'asks Tomas, because he can reach',
         'asks for a lift to the station',
         'asks politely for very small things'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What can you do that most people cannot?', 'tick'),
         ('What could you do as a child that you cannot do now?', 'tick'),
         ('What do you want to learn, and what stops you?', 'question')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('swim, cook well', 'kitchen')]),
        ('Student B', [('swim, drive', 'bottle')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

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

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('what you learned', 1, 'book'),
         ('what you could not do at first', 2, 'cross'),
         ('what you can do now', 2, 'tick')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: a short one '
            'for what you learned, then two longer ones for what you could '
            'not do at first and what you can do now.'),

 23: lambda: F.process_strip(
        [('week one', 'moon'), ('clearly bad', 'person'),
         ('week six', 'clock'), ('a little better', 'cup'),
         ('one year', 'sun')],
        height=460,
        alt='Learning a skill in five stages, each with an arrow to the next: week '
            'one, being clearly bad, week six, a little better, and one year. The '
            'first six weeks are the part most adults never get past.'),

 24: lambda: F.word_grid(
        [('progress', 'arrow_up'), ('avoid', 'cross'), ('audience', 'crowd'), ('explanation', 'speech')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'progress, avoid, audience, explanation.'),

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

 27: lambda: F.writing_frame(
        [('a clear opinion', 'It is not harder, it is more embarrassing.'),
         ('two or three reasons', 'A child can be bad at something in front.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('the favour said plainly', 'Tomas, could you do me a favour on Thursday?.'),
         ('when', 'I have a box coming between nine and one.'),
         ('a way out for them', 'Could you take it in if you are back from.')],
        height=571,
        alt='The shape of the message in three steps -- the favour said '
            'plainly, when, a way out for them -- with a line of the model '
            'beside each one.'),

 29: lambda: F.writing_frame(
        [('what you cannot do', 'I cannot read music.'),
         ('why you want it', 'I can play three songs on a guitar by copying.'),
         ('what stops you', 'I would like to open a page and hear it.')],
        height=571,
        alt='The shape of the reflection in three steps -- what you cannot '
            'do, why you want it, what stops you -- with a line of the model '
            'beside each one.'),

 30: lambda: F.function_map(
        [('Could you give me a hand with this?', 'asking for help'),
         ('I can do Tuesday, but not Monday.', 'saying yes to part of it'),
         ('I’m sorry, I can’t this week.', 'saying no, clearly and kindly'),
         ('Ask me again if nobody else can.', 'leaving the door open')],
        height=580,
        alt='Four things you say when you ask or refuse, each with an arrow to what '
            'it does: asking for help, saying yes to part of it, saying no clearly '
            'and kindly, and leaving the door open.'),

 31: lambda: F.dialogue_strip(
        [('Maya', 'person', 'Tomas, could you take a box on Thursday?'),
         ('Tomas', 'nurse', 'What time?'),
         ('Maya', 'person', 'Between nine and one.'),
         ('Tomas', 'nurse', 'I\u2019m sorry, I can\u2019t.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Maya: Tomas, could you take a box on Thursday? Tomas: What time? '
            'Maya: Between nine and one. Tomas: I\u2019m sorry, I can\u2019t.'),

 32: lambda: F.sequence_steps(
        [('Thank them, whatever they say.', 'speech'),
         ('Say exactly what you need and when.', 'speech'),
         ('Say what happens if they cannot.', 'speech'),
         ('Wait for an honest answer.', 'speech')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 asking',
         ['ask carefully', 'give the detail', 'accept the no', 'ask the next question'], 'question'),
        ('Card B \u2014 refusing',
         ['ask one question first', 'say no clearly', 'give the real reason', 'offer somebody else'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 asking: ask '
            'carefully, give the detail, accept the no, ask the next '
            'question. Card B \u2014 refusing: ask one question first, say no '
            'clearly, give the real reason, offer somebody else.'),

 34: lambda: F.writing_frame(
        [('who you are', 'Hello \u2014 this is Yuki from the top flat.'),
         ('the favour, in one', 'I am sorry to ask when we only met twice.'),
         ('a clear way out for them', 'I have a box coming on Friday afternoon and I.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- who you '
            'are, the favour, in one, a clear way out for them -- with a line '
            'of the model beside each one.'),

 35: lambda: F.before_after(
        ('A library then', ['books', 'a card', 'quiet'], 'book'),
        ('A library now', ['a drill, a bike, a ladder', 'a small membership',
                           'somebody teaches you'], 'home'),
        height=520,
        alt='What a library used to lend and what it lends now. Then: books, a card '
            'and quiet. Now: a drill, a bike or a ladder, a small membership, and '
            'somebody who teaches you how to use it.'),

 36: lambda: F.word_grid(
        [('tool', 'spanner'), ('membership', 'certificate'), ('ladder', 'ladder'), ('storage', 'box')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'tool, membership, ladder, storage.'),
 37: lambda: F.close_scene(
        [('a chair he can mend', 'chair'), ('four floors', 'stairs'),
         ('two light bags', 'bag'), ('the stairs on Friday', 'hands')],
        height=460,
        alt='What Mr Okonkwo can and cannot do, drawn along one Friday: the '
            'chair he can mend, the four floors he cannot carry a heavy bag '
            'up any more, the two light bags Amina started packing instead, '
            'and Dani on the stairs at about the right time with a reason.'),

 38: lambda: F.decision_fork(
        'Somebody near you needs help and does not ask?',
        [('Offer directly',
          ['they have to say it out loud', 'you know they understood'],
          'speech'),
         ('Help without saying anything',
          ['it costs them nothing', 'they may not notice'], 'hands'),
         ('Wait until they ask',
          ['nothing to say', 'the ones in most need ask last'], 'clock')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: offer directly and make somebody say out loud '
            'that they need help; help without saying anything, which costs '
            'them nothing; or wait until they ask, when the ones in most need '
            'ask last of all.'),

 39: lambda: F.bank_strip(
        [('patient', 'clock'), ('suitcase', 'suitcase'), ('lend', 'hands'),
         ('could', 'tick'), ('beginner', 'book'), ('borrow', 'hands'),
         ('can', 'tick'), ('quality', 'star')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: patient, '
            'suitcase, lend, could, beginner, borrow, can, quality.'),

 40: lambda: F.progress_strip(
        [('I can talk about what people can and cannot do', False),
         ('I can use can, can’t and could correctly', False),
         ('I can understand somebody asking a favour and somebody refusing', False),
         ('I can write about something I can do in 50–70 words', False),
         ('I can ask a favour of somebody I do not know well', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('favour', 'hands'), ('lend', 'hands'), ('borrow', 'hands'), ('advice', 'speech'), ('course', 'certificate'), ('lesson', 'teacher'), ('beginner', 'book'), ('patient', 'clock'), ('instrument', 'guitar'), ('able', 'tick')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 8 as picture cards on one page: '
            'favour, lend, borrow, advice, course, lesson, beginner, patient, '
            'instrument, able.'),
}
