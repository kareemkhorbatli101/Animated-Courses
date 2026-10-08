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

 2: lambda: F.word_grid(
        [('Diary', 'notebook'), ('Booking', 'book'), ('Meeting', 'crowd'), ('Host', 'guest'), ('Invite', 'envelope')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: diary, '
            'booking, meeting, host, invite.'),

 3: lambda: F.bank_strip(
        [('holiday', 'tent'), ('remind', 'alarm'), ('prepare', 'list'), ('hotel', 'home')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: holiday, remind, prepare, hotel.'),

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

 5: lambda: F.word_grid(
        [('Diary', 'notebook'), ('Booking', 'book'), ('Meeting', 'crowd'), ('Host', 'guest'), ('Remind', 'alarm'), ('Prepare', 'list'), ('Holiday', 'tent')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: diary, '
            'booking, meeting, host, remind, prepare, holiday, each with the '
            'thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('I\u2019m going to ask them', 'going to'),
         ('He\u2019s going to cook', 'going to'),
         ('We\u2019re going to the station', 'going to'),
         ('Are you going to come?', 'going to')],
        height=464,
        alt='Four phrases from this unit with the word that carries the sound '
            'ringed in each: going to, going to, going to, going to.'),

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

 9: lambda: F.bank_strip(
        [('invite', 'envelope'), ('diary', 'notebook'), ('meeting', 'crowd'), ('party', 'concert')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: invite, diary, meeting, party.'),
 10: lambda: F.writing_frame(
        [('One day in your diary', 'I am at the hospital on Tuesday.'),
         ('Who you are meeting', 'On Thursday I am meeting a friend.'),
         ('The weekend', 'At the weekend I am doing nothing at all.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- one day in your diary, who you are meeting, and the weekend '
            '-- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('Maya is meeting her sister at nine.', 'is meeting'),
         ('Dani is going to cook for eight people.', 'is going to cook'),
         ('Yuki is asking them all today.', 'is asking'),
         ('Amina is going to close early.', 'is going to close')],
        height=440,
        alt='Four lines from the notice with the plan ringed in each. Two are '
            'arranged with somebody and two are only decided, which is the '
            'question the task asks.'),

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
 14: lambda: F.sort_bins(
        ['arranged', 'decided'],
        ['learn to drive', 'dinner at eight', 'ask for more money',
         'working on Saturday'],
        height=540,
        alt='The four plans of this task as chips above two empty bins, one '
            'for what is arranged with somebody and one for what is only '
            'decided. Which chip goes in which bin is the exercise, so none '
            'of them is placed.'),

 15: lambda: F.error_pairs(
        [('I going to cook.', 'I am going to cook.'),
         ('I going to cook for eight people.', None),
         ('She is going to meeting her sister at nine.', None),
         ('We are have dinner at eight on Friday.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 11.2', 'Yuki and Amina', 'shop', 'arranging an evening'),
         ('Track 11.3', 'Dani and a clerk', 'home', 'a booking that went wrong'),
         ('Track 11.4', 'Amina', 'person', 'six people, six Saturdays')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Amina about Saturday '
            'evening, Dani finds that a hotel cannot find his booking, and Amina '
            'describes what all six of them are doing on Saturday.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'I\u2019ve a booking at this hotel for two nights.'),
         ('Clerk', 'person', 'I\u2019m sorry, I\u2019m not finding it.'),
         ('Dani', 'book', 'I made it on the telephone on Monday.'),
         ('Clerk', 'person', 'Who did you speak to?')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: I\u2019ve a booking at this hotel for two nights. Clerk: '
            'I\u2019m sorry, I\u2019m not finding it. Dani: I made it on the telephone '
            'on Monday. Clerk: Who did you speak to?'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['is going to ask everybody to come',
         'is working, as always',
         'is meeting her sister off the nine',
         'is doing nothing, and plans it like',
         'is going away for the weekend'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What are you doing this weekend?', 'calendar'),
         ('What are you going to do this year that you have not started?', 'question'),
         ('Who arranges things in your family, and how far ahead?', 'person')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('Monday meeting at ten', 'crowd')]),
        ('Student B', [('Monday meeting at ten', 'crowd')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

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
 22: lambda: F.talk_shape(
        [('which week', 1, 'calendar'),
         ('three things in it', 2, 'list'),
         ('one thing you did not book', 2, 'question')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: which week it '
            'is, three things arranged in it, and one thing you decided but '
            'did not book.'),

 23: lambda: F.process_strip(
        [('the idea', 'moon'), ('the asking', 'person'),
         ('who is coming', 'book'), ('the cooking', 'kitchen'),
         ('seven o’clock', 'clock')],
        height=460,
        alt='One invite in five stages with an arrow to the next: the idea, the '
            'asking, finding out who is coming, the cooking, and seven o’clock on the '
            'evening itself.'),

 24: lambda: F.word_grid(
        [('spontaneous', 'star'), ('notice', 'notice'), ('compliment', 'speech'), ('calendar', 'calendar')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'spontaneous, notice, compliment, calendar.'),

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

 27: lambda: F.writing_frame(
        [('a clear opinion', 'Far ahead, and I say that as somebody who.'),
         ('two or three reasons', 'A plan made on the day only works when.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('the apology first', 'I am sorry about Saturday.'),
         ('the real reason', 'I said yes three weeks ago and I am now.'),
         ('a new day offered', 'I am not going to pretend I am ill.')],
        height=571,
        alt='The shape of the message in three steps -- the apology first, '
            'the real reason, a new day offered -- with a line of the model '
            'beside each one.'),

 29: lambda: F.writing_frame(
        [('what you are going to do', 'I am going to learn to swim.'),
         ('how long you have said it', 'I said this every January for nine years.'),
         ('what stops you', 'I know where the pool is and I know what.')],
        height=571,
        alt='The shape of the reflection in three steps -- what you are going '
            'to do, how long you have said it, what stops you -- with a line '
            'of the model beside each one.'),

 30: lambda: F.function_map(
        [('Are you doing anything on Saturday?', 'asking before you explain'),
         ('I can do Thursday, but not before seven.', 'saying yes to part of it'),
         ('Something has come up, I am sorry.', 'changing it, without the detail'),
         ('Shall we say the week after?', 'offering a new day')],
        height=580,
        alt='Four things people say when they arrange or change something, each with '
            'an arrow to what it does: asking before you explain, saying yes to part '
            'of it, changing it without giving the detail, and offering a new day.'),

 31: lambda: F.dialogue_strip(
        [('Dani', 'book', 'The name is Rossi, two nights.'),
         ('Clerk', 'person', 'And you booked when?'),
         ('Dani', 'book', 'Monday, on the telephone.'),
         ('Clerk', 'person', 'I have a Rossi for next month.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Dani: The name is Rossi, two nights. Clerk: And you booked when? '
            'Dani: Monday, on the telephone. Clerk: I have a Rossi for next '
            'month.'),

 32: lambda: F.sequence_steps(
        [('Write the number down where you can find it.', 'pin'),
         ('Give your name and spell it.', 'list'),
         ('Ask for a booking number.', 'question'),
         ('Ask them to read it all back to you.', 'question')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 changing',
         ['apologise first', 'give the real reason', 'offer a new day', 'promise one thing'], 'person'),
        ('Card B \u2014 answering',
         ['ask once', 'do not make them explain twice', 'take the new day or offer another', 'end it warmly'], 'speech'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 changing: '
            'apologise first, give the real reason, offer a new day, promise '
            'one thing. Card B \u2014 answering: ask once, do not make them '
            'explain twice, take the new day or offer another, end it warmly.'),

 34: lambda: F.writing_frame(
        [('the day, the date', 'Saturday the fourteenth, seven o\u2019clock.'),
         ('what people have to do', 'I am cooking, so I need to know numbers by.'),
         ('one thing about one person', 'Tomas, I know you are on nights.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- the day, '
            'the date, what people have to do, one thing about one person -- '
            'with a line of the model beside each one.'),

 35: lambda: F.before_after(
        ('A booked bed', ['a name on a list', 'paid in advance', 'yours alone'], 'book'),
        ('A bed nobody booked', ['one key for the whole chain', 'move up when it fills',
                                 'the wet and late one first'], 'home'),
        height=520,
        alt='Two ways of getting a bed for the night. A booked bed: a name on a list, '
            'paid in advance, and yours alone. A bed nobody booked: one key that '
            'opens the whole chain, everybody moves up when it fills, and the person '
            'who arrives wet and late gets it first.'),

 36: lambda: F.word_grid(
        [('shelter', 'tent'), ('chain', 'chain'), ('trust', 'hands'), ('stranger', 'person')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'shelter, chain, trust, stranger.'),
 37: lambda: F.close_scene(
        [('the Tuesday', 'calendar'), ('three yeses', 'tick'),
         ('one maybe', 'question'), ('half past nine', 'clock')],
        height=460,
        alt='The week between the asking and the Saturday, drawn along one '
            'line: the Tuesday Yuki asked all five of them, the three yeses '
            'by Wednesday evening, the one maybe, and the half past nine on '
            'Saturday when Tomas arrived straight off a shift.'),

 38: lambda: F.decision_fork(
        'You want to ask six neighbours and two have never spoken to you?',
        [('Ask everybody at once',
          ['nobody is an afterthought', 'you ask two you have not met'], 'crowd'),
         ('Ask the ones you know first',
          ['the easy ones say yes', 'the others can tell'], 'person'),
         ('Put a note through every door',
          ['nobody has to answer you', 'a note is easy to put down'],
          'envelope')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: ask everybody at once and nobody is an '
            'afterthought; ask the ones you know first and the others can '
            'tell; or put a note through every door, which is easy to put '
            'down and never answer.'),

 39: lambda: F.bank_strip(
        [('booking', 'book'), ('meeting', 'crowd'), ('host', 'guest'), ('remind', 'alarm'), ('holiday', 'tent'), ('am meeting', 'calendar'), ('am going to', 'arrow_right'), ('junction', 'junction')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'booking, meeting, host, remind, holiday, am meeting, am going '
            'to, junction.'),

 40: lambda: F.progress_strip(
        [('I can talk about arrangements using the present continuous', False),
         ('I can talk about decisions using going to', False),
         ('I can invite somebody, and answer when I am invited', False),
         ('I can write an invite in 50–70 words', False),
         ('I can change an arrangement politely', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('diary', 'notebook'), ('booking', 'book'), ('meeting', 'crowd'), ('invite', 'envelope'), ('host', 'guest'), ('party', 'concert'), ('holiday', 'tent'), ('remind', 'alarm'), ('prepare', 'list'), ('hotel', 'home')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 11 as picture cards on one page: '
            'diary, booking, meeting, invite, host, party, holiday, remind, '
            'prepare, hotel.'),
}
