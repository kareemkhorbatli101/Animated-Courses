# -*- coding: utf-8 -*-
"""Foundation Unit 5 · A Day in Your Life.

Grammar: present continuous, and the difference between it and present simple.
Question spine: What are you doing?
"""

UNIT = dict(
    n=5, vol='F', level='A2',
    title='A Day in Your Life',
    icons=('clock', 'laptop', 'headphones'),
    subs=('A student’s routine', 'How people study', 'Free time'),
    grammar='present continuous · present continuous and present simple',
    field='routine, study, free time',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Dale', 'Patel', 'Oakfield',
           'Lena'),
    opener_line='Three sub-topics, three cycles in every skill. Now you can say what you '
                'do every day and what you are doing at this moment — two different '
                'things, two different tenses.',
    candos=[
        'say what I am doing now and what I do every day',
        'read a short notice about a computer room and find a rule',
        'understand a short text about how students really study',
        'follow a conversation about a day that is going wrong',
        'talk about my routine and my free time',
        'write an email about a problem with a deadline'],

    core=[
        ('breakfast', 'the first food of the day'),
        ('lunch', 'the food you eat in the middle of the day'),
        ('dinner', 'the main food of the evening'),
        ('wash', 'to clean with water'),
        ('shower', 'you stand under water to wash'),
        ('dress', 'to put your clothes on'),
        ('leave', 'to go away from a place'),
        ('arrive', 'to come to a place'),
        ('study', 'to learn something with books'),
        ('read', 'to look at words and understand them'),
        ('write', 'to put words on paper'),
        ('listen', 'to use your ears on purpose'),
        ('watch', 'to look at something for a time'),
        ('play', 'to do a game or music'),
        ('sleep', 'to close your eyes at night and rest'),
        ('bed', 'the thing you sleep in'),
        ('tired', 'needing sleep or rest'),
        ('busy', 'with a lot to do'),
        ('hobby', 'something you do because you like it'),
        ('music', 'what you hear when somebody sings or plays'),
        ('exercise', 'moving your body to stay well'),
        ('cook', 'to make food hot and ready'),
        ('homework', 'the work a teacher gives you for home'),
        ('together', 'with other people, not alone')],
    campus=[
        ('borrow', 'to take a thing for a time and give it back'),
        ('return', 'to give a thing back'),
        ('print', 'to put your work on paper with a machine'),
        ('password', 'the secret word that opens your account'),
        ('folder', 'where you keep papers or files together'),
        ('photocopy', 'a copy of a paper made by a machine'),
        ('notes', 'the short words you write in a class'),
        ('revision', 'reading your notes again before a test'),
        ('assignment', 'a piece of work with a deadline'),
        ('group work', 'work that three or four students do together'),
        ('computer room', 'the room in a college with computers in it'),
        ('log in', 'to put your name and password into a computer')],
    again=['routine', 'notes', 'revision', 'assignment', 'borrow', 'password',
           'tired', 'together'],
    vocab_talk=[
        'What do you usually eat for breakfast?',
        'What are you doing this evening?',
        'How many hours do you sleep on a normal night?',
        'What is your hobby, and when do you do it?'],

    r1=dict(
        sub='A student’s routine',
        skill=('The -ing ending', [
            'Add -ing to the plain verb: read, read-ing.',
            'A verb ending in -e loses the e: write, writ-ing; make, mak-ing.',
            'A short verb with one vowel doubles the last letter: sit, sitt-ing.',
            'Count the dashes. Three dashes is almost always -ing.']),
        guided_text='It is nine o’clock and the library is full. Mei is read--- at '
                    'the window. Two students are writ--- their notes together. Nobody is '
                    'talk---. The printer is work--- again, and two students are wait--- for it.',
        guided_hint='1  read---  →  ing  (reading)',
        guided=['ing', 'ing', 'ing', 'ing', 'ing'],
        exam_text='Every morning Ana get- up at seven and ha- breakfast with her roommate. '
                  'She leave- the flat at eight and arrive- at the college before nine. '
                  'Today is different. It is half past nine and she is still sitt--- on the '
                  'bus, because the traffic is bad. Her phone is ring--- and she is not '
                  'answer--- it. Her first class start- in ten minutes and the teacher '
                  'alway- call- the register at the start.',
        exam=['s', 's', 's', 's', 'ing', 'ing', 'ing', 's', 's', 's']),

    r2=dict(
        sub='How people study',
        skill=('Rules come in two kinds', [
            'A notice about a room gives you what you must do and what you must not do.',
            'Look for please, do not, only and always. The rule follows them.',
            'Times and numbers inside a rule change the rule. Read them.',
            'If two rules look the same, one of them has an exception in it.']),
        docs=[
            ('notice', 'Computer Room B12 — rules', [
                '# Logging in',
                '* Log in with your student number and your password.',
                '* The computers close down at ten at night.',
                '# Paper',
                '* Paper is not free in this room.',
                '* Put money on your card at the help desk, not at the printer.',
                '# Please',
                '* No food and no hot drinks in this room.',
                '* Group work in room B14, not here. This room is for quiet work.'], 'notice'),
            ('email', 'group.b@riverside.edu', 'j.patel@riverside.edu',
             '16/10/2025', 'Assignment 1 — what I want',
             ['Dear Group B,', '',
              'Assignment 1 is a short report of 400 words. The deadline is Friday at four.',
              'Work alone, not in a group. I am reading every one of them myself.',
              'Put your student number at the top, not your name.',
              '', 'Dr Patel'])],
        guided=[
            ('What do you need to log in?',
             ('your name and card', 'your student number and password', 'money',
              'a folder'), 1,
             'Log in with your student number and your password.'),
            ('Is paper free in room B12?',
             ('yes, always', 'no, it is not free', 'only for Group B',
              'only after ten'), 1,
             'Paper is not free in this room.'),
            ('Where do you put money on your card?',
             ('at the printer', 'at the help desk', 'in room B14', 'online'), 1,
             'Put money on your card at the help desk, not at the printer.'),
            ('How long is Assignment 1?',
             ('40 words', '400 words', '4 pages', '4 hours'), 1,
             'A short report of 400 words.')],
        exam=[
            ('When do the computers close down?',
             ('at four', 'at nine', 'at ten at night', 'at midnight'), 2,
             'The computers close down at ten at night.'),
            ('Where is group work?',
             ('room B12', 'room B14', 'the library', 'the help desk'), 1,
             'Group work in room B14, not here.'),
            ('What is not allowed in room B12?',
             ('quiet work', 'paper', 'food and hot drinks', 'logging in'), 2,
             'No food and no hot drinks in this room.'),
            ('When is the deadline for Assignment 1?',
             ('Thursday at four', 'Friday at four', 'Friday at ten', 'Monday at nine'), 1,
             'The deadline is Friday at four.'),
            ('Does Dr Patel want group work for this assignment?',
             ('yes', 'no', 'only for Group B', 'only in room B14'), 1,
             'Work alone, not in a group.'),
            ('What goes at the top of the report?',
             ('your name', 'your student number', 'the date', 'the word count'), 1,
             'Put your student number at the top, not your name.')]),

    r3=dict(
        sub='How people study',
        title='What Students Say, and What They Do',
        words=143,
        paras=[
            'Ask a student how long they study. The answer is usually four or five hours '
            'a day. Then watch the same student for a day. The real number is much '
            'smaller. Nobody is counting, and an hour at a desk feels like real work.',
            'The difference is not a lie. A student sits at a desk for four hours. He '
            'calls it four hours of study. But in those four hours the phone rings twice. '
            'A friend comes in. The same page stays open for forty minutes, and nothing '
            'goes into the head.',
            'Teachers have a name for the real number. They call it real study. Two '
            'hours of real study beats six hours at a desk. Try it for two weeks. The first '
            'week is hard. The second week is easy. The desk is not the work. The '
            'attention is the work.'],
        skill=('A text can argue with itself', [
            'Some texts give an idea and then take it apart.',
            'Watch for but, however and the real number. They mark the turn.',
            'A phrase in italics or quotes, like real study, is usually the key idea.',
            'The last sentence often states the key idea in the shortest words of all.']),
        guided=[
            ('How long do students say they study?',
             ('one hour', 'two hours', 'four or five hours', 'six hours'), 2,
             'The answer is usually four or five hours a day.'),
            ('What is the real number?',
             ('the same', 'much smaller', 'much bigger', 'six hours'), 1,
             'The real number is much smaller.'),
            ('What do teachers call it?',
             ('time at a desk', 'real study', 'revision', 'group work'), 1,
             'They call it real study.'),
            ('How long is the same page open for?',
             ('four minutes', 'fourteen minutes', 'forty minutes', 'four hours'), 2,
             'The same page is open for forty minutes.')],
        exam=[
            ('The writer says the difference is',
             ('a lie', 'not a lie', 'a mistake in the question', 'a joke'), 1,
             'The difference is not a lie.'),
            ('What happens twice in the four hours?',
             ('a friend comes in', 'the phone rings', 'the page turns', 'the student eats'), 1,
             'The phone rings twice.'),
            ('Two hours of real study',
             ('is not enough', 'beats six hours at a desk', 'is the same as six hours',
              'is only for teachers'), 1,
             'Two hours of real study beats six hours at a desk.'),
            ('What is the first week like?',
             ('easy', 'hard', 'easy', 'the same'), 1,
             'The first week is hard.'),
            ('What is the second week?',
             ('hard', 'easy', 'the same', 'four hours'), 1,
             'The second week is easy.'),
            ('The last sentence says the work is',
             ('the desk', 'the attention', 'the hours', 'the page'), 1,
             'The desk is not the work. The attention is the work.'),
            ('What is the big idea of the passage?',
             ('Students do not work.', 'Hours at a desk are not the same as study.',
              'Teachers do not understand.', 'Phones are bad.'), 1,
             'Every paragraph is about the gap between hours and real study.')]),

    l1=dict(
        sub='A student’s routine',
        caption='Two students talk on a morning that is going wrong',
        skill=('Now or every day?', [
            'Listen for am, is and are in front of an -ing word. That is happening now.',
            'Usually, always and every day mark the routine, not this moment.',
            'A problem conversation often holds both: I always catch the eight bus, but '
            'today I am sitting here.',
            'The question usually asks about today, not about the routine.']),
        warm=[
            ('Where are you?',
             ('At eight o’clock.', 'I am on the bus.', 'Yes, I am.', 'Every morning.'), 1,
             'Where asks for a place and the answer is happening now.'),
            ('What are you doing?',
             ('I am waiting for the printer.', 'At nine.', 'Yes, I do.', 'In the flat.'), 0,
             'What are you doing? asks about this moment, so the answer is are + -ing.'),
            ('Are you coming to the class?',
             ('Every Monday.', 'Yes, I am.', 'In room B12.', 'Four hours.'), 1,
             'Are you ...? takes Yes, I am.')],
        script=[
            ('Man', 'Ana, where are you? The class is starting.'),
            ('Woman', 'I am still on the bus. The traffic is terrible this morning.'),
            ('Man', 'You usually arrive before nine.'),
            ('Woman', 'I know. I always catch the eight o’clock bus, but today it is '
                      'not moving.'),
            ('Man', 'Dr Patel is calling the register now.'),
            ('Woman', 'Say that I am coming. I am ten minutes away.'),
            ('Man', 'All right. Are you doing the group work after?'),
            ('Woman', 'No, this assignment is alone. He is reading every one himself.'),
            ('Man', 'Right. I am going to room B14 anyway, because the printer here is '
                    'not working.'),
            ('Woman', 'Again? Wait for me. I am borrowing your notes.')],
        items=[
            ('Where is the woman?',
             ('in the class', 'on the bus', 'in room B14', 'at home'), 1,
             'I am still on the bus.'),
            ('Why is she late?',
             ('she is at home', 'the traffic is terrible', 'the bus is early',
              'she is in the library'), 1,
             'The traffic is terrible this morning.'),
            ('Which bus does she usually catch?',
             ('seven o’clock', 'eight o’clock', 'nine o’clock',
              'ten o’clock'), 1,
             'I always catch the eight o’clock bus.'),
            ('What is Dr Patel doing?',
             ('reading the assignment', 'calling the register', 'printing',
              'waiting at the door'), 1,
             'Dr Patel is calling the register now.'),
            ('Is the assignment group work?',
             ('yes', 'no', 'only for Group B', 'only in B14'), 1,
             'No, this assignment is alone.'),
            ('Why is the man going to room B14?',
             ('for group work', 'the printer here is not working', 'it is quiet',
              'to see Dr Patel'), 1,
             'The printer here is not working.')]),

    l2=dict(
        sub='How people study',
        caption='An announcement in the computer room',
        poster=['COMPUTER ROOM B12', 'Printers down 2 p.m. – 4 p.m.',
                'Use B14 or the library'],
        skill=('What is happening and what to do', [
            'An announcement about a machine says what is wrong and where to go.',
            'The where to go part is the one students miss.',
            'Listen for instead and or. The other place comes after them.',
            'A time window has two ends. Write both.']),
        warm=[
            ('Is the printer working?',
             ('No, it is not.', 'In room B14.', 'Five pages.', 'At ten.'), 0,
             'Is it ...? takes Yes, it is or No, it is not.'),
            ('What is happening at two o’clock?',
             ('The printers are going down.', 'In the library.', 'Yes, it is.',
              'Four hundred words.'), 0,
             'What is happening? asks about an event, so the answer is is + -ing.'),
            ('Where can I use a printer?',
             ('At four.', 'In room B14.', 'Yes, you can.', 'On your card.'), 1,
             'Where asks for a place.')],
        script=[('Woman', 'Good afternoon. This is an announcement for everybody working in '
                          'computer room B12. The printers in this room are going down '
                          'between two and four this afternoon, because a new machine is '
                          'arriving. You can use room B14 or the library, and the '
                          'cost there is the same. The computers themselves are working as '
                          'normal, so you can keep working. We are sorry for the trouble.')],
        items=[
            ('Which printers are going down?',
             ('the library printers', 'the printers in B12', 'the printers in B14',
              'all the printers'), 1,
             'The printers in this room, and the announcement is for room B12.'),
            ('When are they going down?',
             ('between one and three', 'between two and four', 'between four and six',
              'all day'), 1,
             'Between two and four this afternoon.'),
            ('Why are they going down?',
             ('they are broken', 'a new machine is arriving', 'there is no paper',
              'the room is closed'), 1,
             'Because a new machine is arriving.'),
            ('Where can students go for paper?',
             ('nowhere', 'room B14 or the library', 'only the library', 'only room B14'), 1,
             'You can use room B14 or the library.'),
            ('What about the computers?',
             ('they are going down too', 'they are working as normal', 'they are closed',
              'they are moving to B14'), 1,
             'The computers themselves are working as normal.')]),

    l3=dict(
        sub='Free time',
        caption='A short talk about free time and study',
        board=['FREE TIME', 'the empty evening problem',
               'a hobby = a fixed time', 'study fills the space it is given'],
        skill=('A talk that gives advice', [
            'A talk with advice starts with a problem, not with the advice.',
            'The advice usually comes after so, and then an example follows it.',
            'Count the pieces of advice. There are rarely more than two.',
            'The question why usually points back to the problem at the start.']),
        warm=[
            ('Are you doing anything this evening?',
             ('Yes, I am playing football.', 'In the library.', 'At eight.',
              'Four hours.'), 0,
             'Are you doing ...? asks about a plan, and the answer is am + -ing.'),
            ('What do you do in your free time?',
             ('I am reading now.', 'I play the piano.', 'Yes, I do.',
              'In the computer room.'), 1,
             'What do you do ...? asks about the routine, so the answer is present simple.'),
            ('Why is an empty evening a problem?',
             ('Because nothing fills it.', 'At seven.', 'Yes, it is.', 'In the hall.'), 0,
             'Why asks for a reason.')],
        script=[('Man', 'I want to talk about free time, and I know that sounds strange in '
                        'a study skills talk. Here is the problem. A student with an empty '
                        'evening does not study more. Study fills the space it is given, '
                        'so an evening with nothing in it becomes an evening of very slow '
                        'work and a phone. A student with football at seven studies hard '
                        'from four until half past six, because the clock is real. So my '
                        'advice is strange but it is true: put one fixed thing in your week '
                        'that is not study. Then the study around it gets better, not worse.')],
        items=[
            ('What is the talk about?',
             ('football', 'free time and study', 'the library', 'deadlines'), 1,
             'I want to talk about free time ... in a study skills talk.'),
            ('A student with an empty evening',
             ('studies more', 'does not study more', 'studies all night', 'plays football'), 1,
             'A student with an empty evening does not study more.'),
            ('What does study do?',
             ('fills the space it is given', 'always takes four hours',
               'happens in the morning', 'needs a desk'), 0,
             'Study fills the space it is given.'),
            ('Why does the student with football study well?',
             ('football is easy', 'the clock is real', 'the evening is empty',
              'the library closes'), 1,
             'Because the clock is real.'),
            ('What is the advice?',
             ('study more hours', 'put one fixed thing in your week',
              'stop playing football', 'work in the evening'), 1,
             'Put one fixed thing in your week that is not study.'),
            ('What happens to the study around it?',
             ('it gets worse', 'it gets better', 'it stops', 'it moves to the morning'), 1,
             'Then the study around it gets better, not worse.')]),

    sp=[
        dict(sub='A student’s routine',
             focus='the weak /ə/ in am, are and the -ing ending',
             skill=('Two words, one sound', [
                 'I am becomes I’m and you are becomes you’re. Say them joined.',
                 'The -ing ending is /ɪŋ/, not /iːn/. The g is not a hard g.',
                 'The strong word is the verb: I’m WAITing, not I AM waiting.',
                 'If you say every word strongly, you sound like a robot and you run out '
                 'of time.']),
             repeat=['I am waiting for the bus.', 'She is reading at the window.',
                     'We are working in room B14.',
                     'My roommate is cooking dinner this evening.',
                     'I usually get up at seven, but today I am late.',
                     'They are doing the group work without me.',
                     'He is printing his assignment and the printer is slow again.'],
             theme='your normal day',
             qs=['First, what time do you usually get up?',
                 'Tell me about your morning. What do you do before your first class?',
                 'Some people work best in the morning and some at night. Which are you, '
                 'and why?',
                 'Finally, is your day the same every day, or is every day different?'],
             frames=['I usually get up at ... .',
                     'First I ... , then I ... .',
                     'I work best in the ... , because ... .',
                     'My day is ... , because ... .'],
             model=[(1, 'I usually get up at half past six, and on Saturday at nine.'),
                    (2, 'First I have a shower, then I make coffee and read my messages. '
                        'I leave the flat at eight.'),
                    (3, 'I work best at night, because the flat is quiet and nobody writes '
                        'to me after eleven.'),
                    (4, 'My day is the same from Monday to Thursday, and then Friday is '
                        'different, because I work in a shop.')],
             selfcheck=['I used is or are with every -ing verb',
                        'I used the present simple for my routine',
                        'I gave a reason after my opinion']),
        dict(sub='How people study',
             focus='linking a word that ends in a consonant to a word that starts with a vowel',
             skill=('Words run together', [
                 'Native speakers join the end of one word to the start of the next.',
                 'An hour sounds like a-nour. In a minute sounds like i-na-minute.',
                 'This is why you cannot find the word you know in the sound you hear.',
                 'Practise joining on purpose. It helps your listening as much as your '
                 'speaking.']),
             repeat=['I am in a hurry.', 'She is at the printer.',
                     'We are in a group of four.',
                     'I am working on an assignment this week.',
                     'He is in the computer room until eight.',
                     'They are reading a report about student life.',
                     'I am taking notes in every class and reading them at home.'],
             theme='how you study',
             qs=['To start, where do you study best?',
                 'Tell me what you do when you do not understand something.',
                 'Some people study alone and some in a group. Which is better for you, '
                 'and why?',
                 'Finally, do you take notes by hand or on a computer? Say why.'],
             frames=['I study best ... , because ... .',
                     'When I do not understand, I ... .',
                     'I study ... , because ... .',
                     'I take notes ... , because ... .'],
             model=[(1, 'I study best in the library, because at home my bed is in the '
                        'same room as my desk.'),
                    (2, 'When I do not understand, I read the paragraph again out loud. If '
                        'that does not work I write a question in my notes and ask the '
                        'tutor.'),
                    (3, 'I study alone, because in a group we talk for twenty minutes and '
                        'work for ten.'),
                    (4, 'I take notes by hand, because my hand is slow and that makes me '
                        'choose the important words.')],
             selfcheck=['I joined my words instead of saying them one by one',
                        'I answered with a reason every time',
                        'I used a study word from this unit']),
        dict(sub='Free time',
             focus='sounding interested: the voice goes up and down',
             skill=('Flat is worse than wrong', [
                 'A flat voice sounds bored, and a bored answer scores lower.',
                 'Let your voice go up on the important word and down at the end.',
                 'Free-time questions are the easiest place to sound interested.',
                 'A smile changes the sound of your voice, even on a recording.']),
             repeat=['I play football on Sunday.', 'I am learning the piano.',
                     'My hobby is cooking.',
                     'On Saturday evening we watch a film together.',
                     'I am reading a long book about a family.',
                     'In my free time I walk by the river.',
                     'I am trying a new hobby, because my evenings are too quiet.'],
             theme='your free time',
             qs=['First, what do you do in your free time?',
                 'Tell me about a hobby you are doing at the moment.',
                 'Some people say students have no free time. Do you agree, and why?',
                 'Finally, is it important to have a hobby that is not study? Say why.'],
             frames=['In my free time I ... .',
                     'At the moment I am ... .',
                     'I ... agree, because ... .',
                     'A hobby is ... , because ... .'],
             model=[(1, 'In my free time I play football on Sunday morning and I cook for '
                        'my roommates in the evening.'),
                    (2, 'At the moment I am learning to play the piano. I am not good yet, but I '
                        'am playing every day for twenty minutes.'),
                    (3, 'I do not agree. Students have free time, but it is in small pieces '
                        'and the pieces are easy to lose.'),
                    (4, 'A hobby is important, because it puts a real clock in the week. '
                        'Everything else moves around it.')],
             selfcheck=['My voice went up and down, not flat',
                        'I used the present continuous for now',
                        'I gave an example in every answer'])],

    w1=dict(
        sub='A student’s routine',
        skill=('Questions in the present continuous', [
            'Am, is or are goes in front of the person: Are you working?',
            'The main verb keeps -ing and never changes.',
            'What are you doing? is the most common question of this kind in the test.',
            'Do not mix the two: *Are you work?* and *Do you working?* are both wrong.']),
        guided=[
            ('I am waiting for the bus.', ['are', 'you', 'waiting', 'for the bus', 'too'],
             'Are you waiting for the bus too?'),
            ('She is reading in the library.', ['where', 'is', 'she', 'reading', 'now'],
             'Where is she reading now?'),
            ('They are doing the group work.', ['what', 'are', 'they', 'doing', 'today'],
             'What are they doing today?')],
        exam=[
            ('He is printing his assignment.', ['what', 'is', 'he', 'printing', 'now'],
             'What is he printing now?'),
            ('The traffic is bad this morning.', ['why', 'are', 'you', 'late', 'today'],
             'Why are you late today?'),
            ('I usually get up at seven.', ['what time', 'do', 'you', 'get up', 'on Monday'],
             'What time do you get up on Monday?'),
            ('We are working in room B14.', ['where', 'are', 'you', 'working', 'today'],
             'Where are you working today?'),
            ('Dr Patel is calling the register.', ['is', 'he', 'calling', 'the register',
                                                   'now'],
             'Is he calling the register now?'),
            ('She studies every evening.', ['does', 'she', 'study', 'here', 'every evening'],
             'Does she study here every evening?'),
            ('I am borrowing your notes.', ['are', 'you', 'borrowing', 'my notes', 'again'],
             'Are you borrowing my notes again?')]),

    w2=dict(
        sub='How people study',
        to='j.patel@riverside.edu',
        date='17/10/2025',
        subject='Assignment 1',
        target=58,
        scenario=['You are writing Assignment 1 for Dr Patel. The deadline is Friday.',
                  'You are ill this week and your work is not ready. Write to Dr Patel.'],
        bullets=['say which assignment you mean',
                 'say what the problem is now',
                 'ask for two more days'],
        skill=('Ask for one thing, clearly', [
            'An email that asks for something must say exactly what it asks for.',
            'Two more days is clear. Some more time is not.',
            'Give the reason once, in the same sentence as the problem.',
            'Do not apologise three times. Once is polite; three times is noise.']),
        model=['Dear Dr Patel,', '',
               'My name is Ana Ruiz and I am in Group B. I am writing about Assignment 1.',
               'I am ill this week, so my report is not ready for Friday.',
               'Is it possible to give it to you on Sunday, two days late?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['The assignment is named in the first short paragraph.',
               'The problem and the reason are one sentence, joined with so.',
               'The request is exact: Sunday, two days late. The reader can say yes or no.',
               'It is short, and short is polite when you are asking for a favour.'],
        frame=['# Start', 'Dear Dr Patel,', '',
               '# Who you are and what this is about',
               'My name is ______________ . I am writing about ______________ .', '',
               '# The problem now — use the present continuous',
               'I am ______________ this week, so ______________ .', '',
               '# Your exact request',
               'Is it possible to ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='Free time',
        prof='Dr Patel',
        target=60,
        question='Some students fill every evening with study. Others keep two or three '
                 'evenings free. Which student does better work, and why?',
        posts=[('Yusuf', 'm', 'A student with no free evening does better work. '
                              'Time is time. If I am at my desk, something goes into my '
                              'head.'),
               ('Mei', 'w', 'I do not agree with that at all. I am studying every evening '
                            'this term and I am reading the same page three times.')],
        skill=('Use your own experience', [
            'A post with one real example from your own life is worth three opinions.',
            'Say what you are doing this term. That is the present continuous.',
            'Then say what you usually do. That is the present simple.',
            'Sixty words is five or six short sentences.']),
        starters=['I agree with Mei, because ...',
                  'This term I am ...',
                  'In my experience ...',
                  'The real problem is ...'],
        model=['I agree with Mei. A student with no free evening does worse work.',
               'This term I am keeping Wednesday and Sunday free. My notes from the other '
               'evenings are clear now, and I am not reading the same page twice.',
               'Yusuf is right that time at a desk matters. But a tired head at a desk is '
               'not study. It is sitting, and it feels like work.'],
        model_words=67,
        frame=['# Who you agree with',
               'I agree with ______________ . I think ______________ .', '',
               '# What you are doing this term — present continuous',
               'This term I am ______________ .', '',
               '# What you usually do — present simple',
               'I usually ______________ .', '',
               '# One sentence about the other post',
               '______________ is right that ______________ .']),

    gram=dict(
        title='present continuous · present continuous and present simple',
        headers=['Form', 'Example'],
        rows=[['am / is / are + -ing', 'I am waiting. She is reading. They are working.'],
              ['negative', 'I am not waiting. He is not working.'],
              ['question', 'Are you waiting? What is she reading?'],
              ['now, at the moment, today', 'I am reading a long book at the moment.'],
              ['present simple = routine', 'I read for an hour every evening.'],
              ['always, usually, every day', 'She usually arrives before nine.'],
              ['spelling', 'write → writing, sit → sitting, study → studying']],
        notes=['The present continuous is for now and for around now. I am learning the '
               'guitar is true this month, even if you are not holding it at this second.',
               'The present simple is for the routine and for facts. The two tenses answer '
               'two different questions: What are you doing? and What do you do?',
               'A few verbs almost never take -ing: know, want, like, need, understand. You '
               'say I know, not *I am knowing*.'],
        watch='Never put do or does with an -ing verb, and never leave am, is or are out. '
              '*Do you working?* and *You working?* are the two commonest mistakes here, '
              'and both of them come from the same missing word.',
        ex=[('Write the present continuous.', [
            'I __________ (wait) for the bus.',
            'She __________ (read) at the window.',
            'They __________ (do) the group work.',
            'He __________ (not answer) his phone.',
            'We __________ (work) in room B14.',
            'The printer __________ (not work) again.'],
            ['am waiting', 'is reading', 'are doing', 'is not answering', 'are working',
             'is not working']),
            ('Present simple or present continuous?', [
                'I __________ (get) up at seven every day.',
                'Today she __________ (sit) on the bus at half past nine.',
                'My roommate __________ (cook) dinner every Sunday.',
                'Listen — somebody __________ (knock) at the door.',
                'He __________ (study) in the library at the moment.',
                'The college __________ (open) at eight on weekdays.'],
             ['get', 'is sitting', 'cooks', 'is knocking', 'is studying', 'opens']),
            ('Write the -ing form.', [
                'write', 'sit', 'study', 'come'],
             ['writing', 'sitting', 'studying', 'coming'])],
        bas='Build a Sentence often gives you is or are and an -ing word. The moment you '
            'see both, the question order is fixed: question word, then is or are, then '
            'the person, then the -ing word.'),

    sound=dict(
        title='The -ing ending, and words that run together',
        intro='Two things make fast English hard to hear, and both of them are in this '
              'unit. The first is the -ing ending, which is one sound and not two. The '
              'second is linking: the end of one word joins the start of the next, and the '
              'word you know disappears into the word beside it.',
        rows=[('/ɪŋ/', ['reading', 'waiting', 'working'],
               'One sound at the end, made at the back of the mouth. There is no hard g '
               'after it.'),
              ('/ɪn/', ['readin’', 'waitin’'],
               'Very common in relaxed speech. You do not have to say it this way, but you '
               'do have to hear it.'),
              ('linking', ['an hour', 'in an hour', 'at eight'],
               'A consonant at the end joins a vowel at the start: a-nour, i-na-nour, '
               'a-teight.'),
              ('I’m / you’re', ['I’m late', 'you’re early'],
               'Two words said as one. In speech the full form sounds heavy and slow.'),
              ('is / are weak', ['she’s reading', 'they’re working'],
               'The verb almost disappears. The -ing word carries the meaning.'),
              ('/dʒ/ and /tʃ/', ['did you', 'what are you'],
               'Did you sounds like di-joo. What are you sounds like wo-cha. This is normal, '
               'not lazy.')],
        hear=[('Do you hear reading or readin’?', 'readin’'),
              ('Do you hear an hour or a flower?', 'an hour'),
              ('Do you hear I am or I’m?', 'I’m'),
              ('Do you hear she is or she’s?', 'she’s'),
              ('Do you hear working or walking?', 'working'),
              ('Do you hear at eight or a tape?', 'at eight')],
        say=['Say these joined: in an hour, at eight, on a Monday, for an exam.',
             'Say I’m, you’re, he’s, she’s, we’re, they’re.',
             'Say five -ing words slowly, then fast: reading, waiting, writing, sitting, '
             'studying.',
             'Say what you are doing right now, in one sentence.']),

    builder=dict(
        title='Finishing the sentence you started',
        rule='Half a sentence scores nothing, and at this level most half sentences have '
             'the same cause: the writer starts with a long opening phrase and forgets to '
             'put a verb after it. Read your sentence back and find the verb. If there is '
             'no verb, there is no sentence.',
        pairs=[['Because the traffic is bad this morning.',
                'I am late because the traffic is bad this morning.'],
               ['Students who study every evening.',
                'Students study every evening.'],
               ['In the computer room on the ground floor.',
                'The printer is in the computer room on the ground floor.'],
               ['I am waiting and.', 'I am waiting and she is coming.'],
               ['For example my brother.', 'For example, my brother studies at night.']],
        watch='A sentence that starts with because, when, if or although needs a second '
              'half. On its own it is a piece of a sentence, however long it is.',
        ex=[('Because I am ill this week.', 'I cannot come because I am ill this week.'),
            ('Working in the library every evening.', 'I work in the library every evening.'),
            ('When the printer is not working.',
             'I use room B14 when the printer is not working.'),
            ('My roommate, who cooks on Sunday.', 'My roommate cooks on Sunday.'),
            ('I am reading a long book about a family.',
             'yes — this one is already a sentence'),
            ('At half past nine on the bus.', 'At half past nine I am on the bus.')]),

    typing=dict(
        title='Typing a whole sentence without looking',
        intro='You know the three rows now. This week you put them together. The test is '
              'not a typing test, but every minute you spend looking for a key is a minute '
              'you do not spend thinking.',
        keys='qwertyuiopasdfghjklzxcvbnm',
        caption='The whole keyboard. Your fingers never leave the home row for long: they '
                'reach up to the top row, down to the bottom row, and come back. Look at '
                'the screen, not at your hands.',
        drill=['I am waiting for the bus and the traffic is bad.',
               'She is reading at the window in the library.',
               'The printer is not working, so I am going to room B14.'],
        target=12),

    study=dict(
        title='Notes you can actually use',
        intro='Most students write notes they never read again, and the reason is that the '
              'notes are a copy of the lesson. A copy is useless, because you already have '
              'the lesson. Useful notes are shorter than the lesson and they have your own '
              'questions in them.',
        steps=['Draw a line down the page one third from the left before the class starts.',
               'Write the notes on the right. Keep them short: words, not sentences.',
               'After the class, write your own questions in the narrow left column.',
               'To review, cover the right side and answer your own questions from the left.',
               'This takes ten minutes after a class and it turns notes into a test you '
               'can sit again and again.'],
        tip='Leave a gap when you miss something. Do not stop and do not try to catch up: '
            'you will lose the next two minutes as well. Mark the gap and fill it after '
            'the class from somebody else’s notes.'),

    rev=dict(
        vocab=[('the first food of the day', 'breakfast'),
               ('to take a thing and give it back later', 'borrow'),
               ('the secret word that opens your account', 'password'),
               ('a piece of work with a deadline', 'assignment'),
               ('reading your notes again before a test', 'revision'),
               ('to put your work on paper with a machine', 'print'),
               ('the short words you write in a class', 'notes'),
               ('work three or four students do together', 'group work'),
               ('something you do because you like it', 'hobby'),
               ('needing sleep or rest', 'tired'),
               ('to come to a place', 'arrive'),
               ('moving your body to stay well', 'exercise')],
        gram=[('I __________ (wait) for the bus now.', 'am waiting'),
              ('She __________ (read) at the window.', 'is reading'),
              ('I __________ (get) up at seven every day.', 'get'),
              ('Today she __________ (sit) on the bus.', 'is sitting'),
              ('__________ you working in room B14?', 'Are'),
              ('He __________ not answering his phone.', 'is'),
              ('My roommate __________ (cook) every Sunday.', 'cooks'),
              ('What __________ you doing?', 'are')],
        mini=[
            ('In room B12 the paper is',
             ('free', 'not free', 'only for groups', 'in the library'), 1,
             'Paper is not free in this room, in the notice.'),
            ('The woman is late because',
             ('she is at home', 'the traffic is terrible', 'the printer is broken',
              'the class is early'), 1,
             'The traffic is terrible this morning, in the conversation.'),
            ('Teachers call real study',
             ('revision', 'real study', 'group work', 'homework'), 1,
             'Teachers call this real study, in the passage.'),
            ('Which sentence is correct?',
             ('Do you working now?', 'You working now?', 'Are you working now?',
              'Are you work now?'), 2,
             'Are plus the -ing form, with are at the front for the question.'),
            ('Which sentence is correct?',
             ('I am knowing the answer.', 'I know the answer.', 'I am know the answer.',
              'I knowing the answer.'), 1,
             'Know is one of the verbs that almost never takes -ing.'),
            ('The advice in the talk is',
             ('study every evening', 'put one fixed thing in your week',
              'study in the morning', 'stop your hobby'), 1,
             'Put one fixed thing in your week that is not study.')]),

    tip='In Speaking, listen for the tense in the question and answer in the same one. '
        'What do you do? wants your routine. What are you doing? wants this week. Answering '
        'the wrong one is the fastest way to sound like you did not understand.',
)

# ---- the two academic cycles (field: People and the Mind) -----------------
from .fx05 import EXTRA as _X, SP_EXTRA as _SP   # noqa: E402
UNIT.update(_X)
UNIT['sp'] = list(UNIT['sp'])[:3] + list(_SP)
