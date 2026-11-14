# -*- coding: utf-8 -*-
"""Foundation Unit 3 · Days, Times and the Timetable.

Grammar: present simple, third-person -s, adverbs of frequency.
Question spine: Do / Does ...? When ...?
"""

UNIT = dict(
    n=3, vol='F', level='A2',
    title='Days, Times and the Timetable',
    icons=('clock', 'book', 'speech'),
    subs=('A week of classes', 'The clock and the calendar', 'Changing a time'),
    grammar='present simple · third-person -s · adverbs of frequency',
    field='time, days, routine',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Dale', 'Block', 'Patel'),
    opener_line='Three sub-topics, three cycles in every skill. Almost every Listening '
                'question in the real test turns on a time or a day. This unit is that.',
    candos=[
        'say and write the time in two ways',
        'read a timetable and find one class in it',
        'understand a short text about how a college week is built',
        'follow a conversation in which two people change a time',
        'say how often I do something',
        'write an email asking to change a time'],

    core=[
        ('day', 'Monday is a day'),
        ('week', 'seven days'),
        ('month', 'January is a month'),
        ('year', 'twelve months'),
        ('morning', 'the first part of the day'),
        ('afternoon', 'after twelve and before the evening'),
        ('evening', 'the end of the day, before night'),
        ('night', 'when it is dark'),
        ('early', 'before the usual time'),
        ('late', 'after the usual time'),
        ('clock', 'the thing on the wall that shows the time'),
        ('hour', 'sixty minutes'),
        ('minute', 'sixty seconds'),
        ('quarter', 'one of four equal parts; fifteen minutes'),
        ('past', 'after the hour: ten past three'),
        ('before', 'earlier than'),
        ('after', 'later than'),
        ('start', 'to begin'),
        ('finish', 'to end'),
        ('always', 'every time'),
        ('usually', 'most times'),
        ('sometimes', 'some times, not many'),
        ('never', 'no times at all'),
        ('often', 'many times')],
    campus=[
        ('timetable', 'the paper that shows your classes and their times'),
        ('lesson', 'one class, usually one hour'),
        ('break', 'a short time with no class'),
        ('term', 'one of the parts of the college year'),
        ('semester', 'half of a college year'),
        ('deadline', 'the last day you can give work in'),
        ('seminar', 'a class where students talk, not only the teacher'),
        ('workshop', 'a class where you do something with your hands'),
        ('attendance', 'how often you come to class'),
        ('register', 'the list of names the teacher calls'),
        ('schedule', 'a plan of times, like a timetable'),
        ('tutor', 'your own teacher: this person looks after your work')],
    again=['timetable', 'term', 'deadline', 'tutor', 'always', 'usually',
           'quarter', 'break'],
    vocab_talk=[
        'What time does your first class start on Monday?',
        'Are you an early person or a night person?',
        'How often do you look at your timetable?',
        'Which day of the week is the best one, and why?'],

    r1=dict(
        sub='A week of classes',
        skill=('The -s on the verb', [
            'He, she and it take -s on the verb: the class start-s at nine.',
            'I, you, we and they take no -s: the classes start at nine.',
            'A word ending in -ch, -sh, -ss or -o takes -es: finish-es, go-es.',
            'Count the dashes. One dash is s; two dashes are es or er.']),
        guided_text='My week start- on Monday. My first class begin- at nine and finish-- '
                    'at eleven. On Tuesday I have two seminar-. My tutor usually see- me on '
                    'Friday afternoon.',
        guided_hint='1  start-  →  s  (starts)',
        guided=['s', 's', 'es', 's', 's'],
        exam_text='The college week at Riverside start- on Monday morning. Most lesson- '
                  'begin at nine and the last one finish-- at five. There is a break of one '
                  'hour at one o’clock, and the canteen open- at half past twelve. '
                  'Every student ha- four lesson- a day. A seminar last- fifty minute- and '
                  'a workshop last- two hours. The tutor call- the register at the start of '
                  'every class.',
        exam=['s', 's', 'es', 's', 's', 's', 's', 's', 's', 's']),

    r2=dict(
        sub='The clock and the calendar',
        skill=('Read the row, then the column', [
            'A timetable has a day across the top and a time down the side.',
            'Put one finger on the day and one on the time, then move them together.',
            'Read the question twice: it usually names a day and a time.',
            'Watch for the words every and only. They change the answer.']),
        docs=[
            ('notice', 'Group B — Timetable, Term 1', [
                '# Monday',
                '09.00 – 11.00   English, room B204',
                '11.15 – 12.15   Seminar, room B110',
                '# Tuesday',
                '10.00 – 12.00   Business, room A305',
                '# Wednesday',
                'No classes. The library is open as normal.',
                '# Thursday',
                '09.00 – 10.00   Tutor hour, room C108',
                '14.00 – 16.00   Workshop, laboratory 2',
                '# Friday',
                '09.00 – 11.00   English, room B204'], 'notice'),
            ('email', 'group.b@riverside.edu', 'j.patel@riverside.edu',
             '29/09/2025', 'Thursday workshop — new room',
             ['Dear Group B,', '',
              'The Thursday workshop moves to laboratory 3 from this week.',
              'The time is the same: two o’clock until four.',
              'Please come five minutes early, because I call the register at two.',
              '', 'Dr Patel'])],
        guided=[
            ('What time does the Monday seminar start?',
             ('09.00', '11.00', '11.15', '12.15'), 2,
             '11.15 – 12.15   Seminar. The 12.15 is the end.'),
            ('Which day has no classes?',
             ('Monday', 'Tuesday', 'Wednesday', 'Friday'), 2,
             'Wednesday: No classes.'),
            ('Where is the Business class?',
             ('B204', 'B110', 'A305', 'C108'), 2,
             '10.00 – 12.00   Business, room A305.'),
            ('Which room does the workshop move to?',
             ('laboratory 2', 'laboratory 3', 'B204', 'C108'), 1,
             'The Thursday workshop moves to laboratory 3.')],
        exam=[
            ('How long is the English class on Monday?',
             ('one hour', 'two hours', 'three hours', 'half an hour'), 1,
             '09.00 – 11.00 is two hours.'),
            ('On which days is there an English class?',
             ('Monday and Tuesday', 'Monday and Friday', 'Tuesday and Thursday',
              'Thursday and Friday'), 1,
             'English, room B204 appears on Monday and on Friday.'),
            ('When is the tutor hour?',
             ('Monday 09.00', 'Tuesday 10.00', 'Thursday 09.00', 'Friday 09.00'), 2,
             'Thursday 09.00 – 10.00   Tutor hour.'),
            ('Does the workshop change its time?',
             ('yes, it starts later', 'yes, it starts earlier', 'no, the time is the same',
              'no, there is no workshop'), 2,
             'The time is the same: two o’clock until four.'),
            ('Why does Dr Patel ask students to come early?',
             ('the room is small', 'the register is at two', 'the laboratory is far',
              'the class is long'), 1,
             'Because I call the register at two.'),
            ('How many classes does Group B have on Thursday?',
             ('one', 'two', 'three', 'four'), 1,
             'Tutor hour and the workshop: two.')]),

    r3=dict(
        sub='A week of classes',
        title='Why a College Week Looks Like This',
        words=122,
        paras=[
            'A college week is not the same on every day. Monday and Tuesday are heavy. '
            'Wednesday is often free. Thursday and Friday are heavy again.',
            'There is a reason for the free day. Students need one day in the week for '
            'reading, and teachers need one day for their own work. A free Wednesday also '
            'gives the college a day for games and for clubs.',
            'The shape of the week is not the same in every country. In some places the '
            'week runs from Sunday to Thursday. In others the free day is Friday. But the '
            'idea behind it is always the same: a week needs a hole in the middle. A '
            'student with five heavy days does the work of four.'],
        skill=('Find the reason, not only the fact', [
            'A short text often gives a fact and then a reason for it.',
            'The reason usually starts with because, for or so.',
            'A question with why wants the reason, not the fact in front of it.',
            'The last sentence is often the idea the whole text is about.']),
        guided=[
            ('Which day is often free?',
             ('Monday', 'Tuesday', 'Wednesday', 'Friday'), 2,
             'Wednesday is often free, in the first paragraph.'),
            ('Why do students need a free day?',
             ('for games only', 'for reading', 'for the canteen', 'for the register'), 1,
             'Students need one day in the week for reading.'),
            ('Who else needs the free day?',
             ('the tutors and teachers', 'the office', 'the library', 'new students'), 0,
             'Teachers need one day for their own work.'),
            ('In some countries the week runs from',
             ('Monday to Friday', 'Sunday to Thursday', 'Tuesday to Saturday',
              'Wednesday to Sunday'), 1,
             'In some places the week runs from Sunday to Thursday.')],
        exam=[
            ('A college week is',
             ('the same on every day', 'not the same on every day', 'always five days',
              'always four days'), 1,
             'The first sentence says it is not the same on every day.'),
            ('Which days are heavy?',
             ('Monday and Wednesday', 'Wednesday and Thursday',
              'Monday, Tuesday, Thursday and Friday', 'only Friday'), 2,
             'Monday and Tuesday are heavy ... Thursday and Friday are heavy again.'),
            ('What else does the free day give the college?',
             ('a day for games and clubs', 'a day for lectures', 'a day for the canteen',
              'a day for the register'), 0,
             'A free Wednesday also gives the college a day for games and for clubs.'),
            ('In some countries the free day is',
             ('Monday', 'Wednesday', 'Friday', 'Sunday'), 2,
             'In others the free day is Friday.'),
            ('The idea behind every week is',
             ('five heavy days', 'a hole in the middle', 'no free day', 'four lessons'), 1,
             'A week needs a hole in the middle.'),
            ('A student with five heavy days',
             ('does the work of six', 'does the work of five', 'does the work of four',
              'does no work'), 2,
             'A student with five heavy days does the work of four.'),
            ('What is the writer’s opinion?',
             ('Free days waste time.', 'A week needs a free day.',
              'Wednesday is the best day.', 'Teachers work too much.'), 1,
             'Every paragraph builds to a week needs a hole in the middle.')]),

    l1=dict(
        sub='Changing a time',
        caption='Two students try to find a time to meet',
        skill=('Hold two times in your head', [
            'When people change a time, you hear the old time and the new one.',
            'Write both down. The question usually asks for the new one.',
            'Listen for but, sorry and what about. The time changes after those words.',
            'The last time in the conversation is usually the answer.']),
        warm=[
            ('What time does the seminar start?',
             ('In room B110.', 'At quarter past eleven.', 'On Wednesday.', 'Yes, it does.'), 1,
             'What time asks for a time.'),
            ('Do you have a class on Wednesday?',
             ('No, I do not.', 'At nine.', 'In the library.', 'It is free.'), 0,
             'Do you ...? takes Yes, I do or No, I do not.'),
            ('Is four o’clock all right for you?',
             ('In the canteen.', 'Yes, that is fine.', 'Two hours.', 'On Monday.'), 1,
             'A question about a time takes yes or no, then the time.')],
        script=[
            ('Woman', 'Yusuf, do you have time on Thursday morning?'),
            ('Man', 'Thursday morning? I have the tutor hour at nine.'),
            ('Woman', 'How long does it last?'),
            ('Man', 'One hour. So I am free at ten.'),
            ('Woman', 'Ten is not good for me. I always work in the shop on Thursday morning.'),
            ('Man', 'What about the afternoon? My workshop starts at two.'),
            ('Woman', 'Then we meet at one. We have the whole lunch break.'),
            ('Man', 'One o’clock in the canteen. That is fine.'),
            ('Woman', 'Good. I never remember these things, so I write it on my phone now.')],
        items=[
            ('When does the man have his tutor hour?',
             ('Thursday at nine', 'Thursday at ten', 'Thursday at one',
              'Thursday at two'), 0,
             'I have the tutor hour at nine, on Thursday morning.'),
            ('How long is the tutor hour?',
             ('half an hour', 'one hour', 'two hours', 'three hours'), 1,
             'How long does it last? One hour.'),
            ('Why is ten not good for the woman?',
             ('she has a class', 'she works in a shop', 'she is in the library',
              'she is late'), 1,
             'I always work in the shop on Thursday morning.'),
            ('What time do they meet?',
             ('nine', 'ten', 'one', 'two'), 2,
             'Then we meet at one.'),
            ('Where do they meet?',
             ('the library', 'the canteen', 'the workshop', 'room B110'), 1,
             'One o’clock in the canteen.'),
            ('What does the woman do at the end?',
             ('she writes it on her phone', 'she calls her tutor', 'she goes to work',
              'she looks at her timetable'), 0,
             'I write it on my phone now.')]),

    l2=dict(
        sub='The clock and the calendar',
        caption='An announcement about the end of term',
        poster=['END OF TERM 1', 'Last day of classes: Friday 12 December',
                'Deadline for work: Monday 15 December, 4 p.m.'],
        skill=('Dates are two pieces of news', [
            'A date has a day and a month. Catch both.',
            'A deadline usually comes with a time as well as a date.',
            'The word by means before and including: by Monday.',
            'If you only hear one date, it is usually the deadline, not the holiday.']),
        warm=[
            ('When is the last day of term?',
             ('In room B204.', 'On Friday the twelfth.', 'Yes, it is.', 'Two weeks.'), 1,
             'When asks for a day or a date.'),
            ('Do we have classes next week?',
             ('At four.', 'No, we do not.', 'In December.', 'It is a deadline.'), 1,
             'Do we ...? takes Yes, we do or No, we do not.'),
            ('Is the deadline on Monday?',
             ('Yes, it is.', 'In the canteen.', 'Four lessons.', 'On the timetable.'), 0,
             'Is it ...? takes Yes, it is.')],
        script=[('Man', 'Good morning. This is an announcement about the end of Term 1. The '
                        'last day of classes is Friday the twelfth of December. The college '
                        'is open in the week after that, but there are no lessons. The '
                        'deadline for your term work is Monday the fifteenth of December at '
                        'four in the afternoon. Term 2 starts on Monday the fifth of '
                        'January. Please check the dates on the noticeboard.')],
        items=[
            ('When is the last day of classes?',
             ('5 December', '12 December', '15 December', '5 January'), 1,
             'Friday the twelfth of December.'),
            ('What happens in the week after that?',
             ('the college is closed', 'the college is open with no lessons',
              'classes go on as normal', 'Term 2 starts'), 1,
             'The college is open in the week after that, but there are no lessons.'),
            ('When is the deadline for term work?',
             ('12 December', '15 December at four', '15 December at nine',
              '5 January'), 1,
             'Monday the fifteenth of December at four in the afternoon.'),
            ('When does Term 2 start?',
             ('15 December', '1 January', '5 January', '12 January'), 2,
             'Term 2 starts on Monday the fifth of January.'),
            ('Where are the dates?',
             ('on the timetable', 'on the noticeboard outside the office', 'in the library',
              'in an email'), 1,
             'Check the dates on the noticeboard outside the office.')]),

    l3=dict(
        sub='The clock and the calendar',
        caption='A short talk about how people tell the time',
        board=['TELLING THE TIME', '9.15 = quarter past nine',
               '9.45 = quarter to ten', '14.00 = two o’clock'],
        skill=('Two systems, one clock', [
            'English tells the time in two ways: nine fifteen, and quarter past nine.',
            'In the first half of the hour you say past. In the second half you say to.',
            'A timetable uses the twenty-four hour clock; a person usually does not.',
            'When you hear fourteen hundred, think two in the afternoon.']),
        warm=[
            ('What is the time?',
             ('On Monday.', 'Quarter past nine.', 'In room B204.', 'Yes, it is.'), 1,
             'What is the time? asks for the time.'),
            ('Does a timetable use the twenty-four hour clock?',
             ('Yes, it does.', 'At nine.', 'In December.', 'Two hours.'), 0,
             'Does it ...? takes Yes, it does.'),
            ('Sorry, what time?',
             ('Half past three.', 'In the canteen.', 'On Friday.', 'Yes, please.'), 0,
             'The speaker asks for the time again.')],
        script=[('Woman', 'This morning I want to say something about the clock, because it '
                          'costs students marks in the listening test. English has two '
                          'systems and it uses both. The first one is easy: nine fifteen, '
                          'nine thirty, nine forty-five. The second one cuts the hour in '
                          'half. Before the half hour you say past: quarter past nine. '
                          'After the half hour you say to, and you say the next hour: '
                          'quarter to ten. A timetable shows fourteen hundred. A person '
                          'says two o’clock. Both of them mean the same moment, and '
                          'the test uses both.')],
        items=[
            ('Why does the speaker talk about the clock?',
             ('it is interesting', 'it costs students marks', 'the timetable is new',
              'students are late'), 1,
             'Because it costs students marks in the listening test.'),
            ('How many systems does English use for the time?',
             ('one', 'two', 'three', 'four'), 1,
             'English has two systems and it uses both.'),
            ('Before the half hour you say',
             ('to', 'past', 'o’clock', 'hundred'), 1,
             'Before the half hour you say past.'),
            ('After the half hour you say',
             ('the same hour', 'the next hour', 'no hour', 'the hour before'), 1,
             'After the half hour you say to, and you say the next hour.'),
            ('What is quarter to ten?',
             ('9.15', '9.30', '9.45', '10.15'), 2,
             'Quarter to ten is 9.45, on the board.'),
            ('Fourteen hundred is',
             ('four in the afternoon', 'two in the afternoon', 'fourteen minutes',
              'two in the morning'), 1,
             'A timetable shows fourteen hundred. A person says two o’clock.')]),

    sp=[
        dict(sub='A week of classes',
             focus='the three sounds of the -s ending',
             skill=('/s/, /z/ and /ɪz/', [
                 'After a hard sound the -s is /s/: starts, finishes early.',
                 'After a soft sound the -s is /z/: begins, lives, days.',
                 'After s, sh, ch, x and ge the ending is a whole syllable: finishes.',
                 'Nobody learns these from a rule. Say the words until they feel right.']),
             repeat=['My week starts on Monday.', 'The lesson begins at nine.',
                     'My tutor finishes at four.',
                     'She usually works in the shop on Thursday.',
                     'The college opens early and closes late.',
                     'My timetable changes at the start of every term.',
                     'He always calls the register at the start of class.'],
             theme='your week',
             qs=['First, what do you do on a normal Monday?',
                 'Which day of the week is your busy day? Tell me about it.',
                 'Some people like a full week and some people like free days. Which are '
                 'you, and why?',
                 'Finally, does your college or school build the week well? Say why or why '
                 'not.'],
             frames=['On Monday I ... . Then I ... .',
                     'My busy day is ... . I have ... .',
                     'I like ... , because ... .',
                     'I think my college builds the week ... , because ... .'],
             model=[(1, 'On Monday I get up at seven and I take the bus at eight. My first '
                        'class starts at nine.'),
                    (2, 'My busy day is Thursday. I have a tutor hour in the morning and a '
                        'workshop in the afternoon.'),
                    (3, 'I like a full week, because then I work. On a free day I always '
                        'say I start in one hour, and the day goes.'),
                    (4, 'I think my college builds the week well, because the free day is '
                        'in the middle and not at the end.')],
             selfcheck=['I used the -s ending on he, she and it',
                        'I said a time in every answer',
                        'I gave a reason after my opinion']),
        dict(sub='The clock and the calendar',
             focus='saying times and dates out loud',
             skill=('Say the time the way people say it', [
                 'For 9.15 you can say nine fifteen or quarter past nine. Both are right.',
                 'For 9.45 say quarter to ten, not quarter to nine.',
                 'Dates: the fifth of January, or January the fifth.',
                 'Say the day first when it matters: Monday the fifth.']),
             repeat=['It is half past nine.', 'The class starts at two.',
                     'My deadline is on Monday.',
                     'Term 2 begins on the fifth of January.',
                     'The library closes at quarter to nine.',
                     'I always write the date and the time down.',
                     'My tutor hour is at ten past eleven on Thursday.'],
             theme='time in your life',
             qs=['To start, what time do you usually get up?',
                 'Tell me about one thing you do at the same time every day.',
                 'Some people are always early and some are always late. Which are you, '
                 'and why?',
                 'Finally, is it bad to be late in your country? Say what you think.'],
             frames=['I usually get up at ... .',
                     'Every day at ... I ... .',
                     'I am usually ... , because ... .',
                     'In my country ... , because ... .'],
             model=[(1, 'I usually get up at half past six, and at the weekend at eight.'),
                    (2, 'Every day at one o’clock I eat with the same three people in '
                        'the canteen.'),
                    (3, 'I am usually early, because I hate the feeling of a run to the '
                        'door.'),
                    (4, 'In my country ten minutes late is normal for friends. For a class '
                        'or for work it is not normal at all.')],
             selfcheck=['I said the time in a full sentence',
                        'I used past and to correctly',
                        'I answered all four questions']),
        dict(sub='Changing a time',
             focus='polite question forms with do and does',
             skill=('Ask, do not tell', [
                 'Do you have time on Thursday? is a question. You have time is not.',
                 'Do and does carry the question. The main verb stays plain.',
                 'Never say *Does he works?* The -s is on does already.',
                 'What about ...? is the easiest way to offer a new time.']),
             repeat=['Do you have time today?', 'Does the class finish at four?',
                     'What about Thursday afternoon?',
                     'Do you want to meet in the canteen?',
                     'Does your workshop start at two o’clock?',
                     'I am free after my seminar on Tuesday morning.',
                     'Do you remember the new time of the Thursday workshop?'],
             theme='meeting people and changing plans',
             qs=['First, how do you usually choose a time to meet a friend?',
                 'Tell me about a time when a plan changes at the last minute.',
                 'Some people plan every hour and some people plan nothing. Which is '
                 'better, do you think?',
                 'Finally, what do you do when somebody is late for you?'],
             frames=['I usually ... , because it is ... .',
                     'Sometimes my ... changes, and then I ... .',
                     'I think ... is better, because ... .',
                     'When somebody is late I ... .'],
             model=[(1, 'I usually send a message, because then the time is in writing and '
                        'nobody forgets it.'),
                    (2, 'Sometimes my workshop changes to another room, and then I run '
                        'across the campus with my bag.'),
                    (3, 'I think a plan for the big things is better. If I plan every hour, '
                        'one late bus breaks the whole day.'),
                    (4, 'When somebody is late I read on my phone for ten minutes. After '
                        'that I send one message and I go.')],
             selfcheck=['I used do and does correctly in my questions',
                        'I did not put -s on the verb after does',
                        'I gave an example, not only an opinion'])],

    w1=dict(
        sub='A week of classes',
        skill=('do and does make the question', [
            'I, you, we, they take do. He, she, it take does.',
            'The main verb has no -s in the question: Does the class start?',
            'The question word comes first: When does the class start?',
            'How often is one of the most common question openings in the test.']),
        guided=[
            ('The class starts at nine.', ['does', 'the class', 'start', 'when'],
             'When does the class start?'),
            ('I have a seminar on Tuesday.', ['do', 'you', 'have', 'a seminar'],
             'Do you have a seminar?'),
            ('She works on Thursday.', ['does', 'she', 'work', 'on Thursday'],
             'Does she work on Thursday?')],
        exam=[
            ('The library closes at nine.', ['does', 'the library', 'close', 'when'],
             'When does the library close?'),
            ('I always eat in the canteen.', ['do', 'you', 'eat', 'where'],
             'Where do you eat?'),
            ('He finishes at four.', ['does', 'he', 'finish', 'what time'],
             'What time does he finish?'),
            ('They have four lessons a day.', ['do', 'they', 'have', 'how many lessons'],
             'How many lessons do they have?'),
            ('The term starts in January.', ['does', 'the term', 'start', 'when'],
             'When does the term start?'),
            ('I look at my timetable every day.', ['do', 'you', 'look', 'how often'],
             'How often do you look?'),
            ('My tutor sees me on Friday.', ['your tutor', 'sees', 'you', 'on Friday'],
             'Your tutor sees you on Friday.')]),

    w2=dict(
        sub='Changing a time',
        to='j.patel@riverside.edu',
        date='02/10/2025',
        subject='Thursday workshop',
        target=46,
        scenario=['You cannot come to the Thursday workshop at two o’clock.',
                  'You work in a shop on Thursday afternoon. Write to Dr Patel.'],
        bullets=['say who you are and which workshop you mean',
                 'say why you cannot come at two',
                 'ask if there is another workshop on a different day'],
        skill=('Say the problem in one sentence', [
            'Do not write three sentences about the problem. One is enough.',
            'Give the reason with because. A reason makes a request polite.',
            'The question is the point of the email. Put it near the end.',
            'Keep the same subject line. It tells the reader what this is about.']),
        model=['Dear Dr Patel,', '',
               'My name is Ana Ruiz and I am in Group B.',
               'I cannot come to the Thursday workshop at two o’clock, because I work '
               'in a shop on Thursday afternoon.',
               'Is there another workshop on a different day?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['All three bullet points are there, in order.',
               'The reason comes after because, in the same sentence as the problem.',
               'The question is a real question with a question mark.',
               'It is short. A short, clear email gets a fast answer.'],
        frame=['# Start', 'Dear Dr Patel,', '',
               '# Who you are', 'My name is ______________ and I am in ______________ .', '',
               '# The problem and the reason — one sentence, with because',
               'I cannot come to ______________ , because ______________ .', '',
               '# Your question',
               'Is there ______________ on ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='A week of classes',
        prof='Dr Patel',
        target=50,
        question='Some colleges put all the classes into four long days and leave one day '
                 'free. Others spread the same classes over five days. Which is better for '
                 'students? Give one reason.',
        posts=[('Mei', 'w', 'Four long days are better. I live far from the college, so one '
                            'day at home is two hours of bus for me.'),
               ('Yusuf', 'm', 'I do not agree. After four hours of class I do not listen any '
                              'more. Five short days are better for my head.')],
        skill=('Agree with one person by name', [
            'Say which post you agree with. It shows you read them.',
            'Then say why, with because.',
            'Add one new idea the other two do not say.',
            'Fifty words is about four short sentences. Count them once, then stop counting.']),
        starters=['I agree with Mei, because ...',
                  'I do not agree with Yusuf, because ...',
                  'In my case ...',
                  'The problem with four long days is ...'],
        model=['I agree with Mei. Four long days are better for me, because the bus to the '
               'college takes an hour.',
               'Yusuf is right about the last hour of a long day. Nobody listens at four '
               'o’clock.',
               'But a free day is a day for the library, and the library is where I do my '
               'real work.'],
        model_words=56,
        frame=['# Your opinion — name a person',
               'I agree with ______________ . I think ______________ .', '',
               '# Your reason — use because',
               'This is better because ______________ .', '',
               '# One new idea',
               'The other thing is ______________ .']),

    gram=dict(
        title='present simple · third-person -s · adverbs of frequency',
        headers=['Form', 'Example'],
        rows=[['I / you / we / they', 'I start at nine. They start at nine.'],
              ['he / she / it + -s', 'He starts at nine. The class starts at nine.'],
              ['-es after ch, sh, ss, x, o', 'She finishes. He goes. It washes.'],
              ['negative', 'I do not work on Friday. He does not work on Friday.'],
              ['question', 'Do you work? Does he work?'],
              ['how often', 'always, usually, often, sometimes, never'],
              ['where the adverb goes', 'I always work. I am always late.']],
        notes=['The present simple is the tense of timetables, habits and facts. It is the '
               'tense almost all of this book is written in.',
               'The -s appears once in a sentence and only once. He works, but Does he '
               'work? and He does not work — the -s has moved to does.',
               'Adverbs of frequency go before the main verb but after the verb be: I '
               'always arrive early, but I am always early.'],
        watch='Never say *He don’t* or *Does she works?* These two are the most common '
              'mistakes at this level, and both of them are about the same -s.',
        ex=[('Write the verb with or without -s.', [
            'My week __________ (start) on Monday.',
            'The lessons __________ (begin) at nine.',
            'She __________ (finish) at four.',
            'My tutor __________ (see) me on Friday.',
            'We __________ (have) four lessons a day.',
            'He __________ (go) to the library every evening.'],
            ['starts', 'begin', 'finishes', 'sees', 'have', 'goes']),
            ('Write do or does.', [
                '__________ you have a class on Wednesday?',
                '__________ the library close at nine?',
                'He __________ not work on Thursday.',
                '__________ they call the register?',
                'She __________ not come on Friday.',
                '__________ your term start in January?'],
             ['Do', 'Does', 'does', 'Do', 'does', 'Does']),
            ('Put the adverb in the right place.', [
                'I am late. (never)', 'She works on Thursday. (usually)',
                'We have a seminar on Tuesday. (always)',
                'He is in the canteen at one. (often)'],
             ['I am never late.', 'She usually works on Thursday.',
              'We always have a seminar on Tuesday.', 'He is often in the canteen at one.'])],
        bas='Build a Sentence gives you do or does and a plain verb, and the only way to use '
            'them is the question order: question word, then do or does, then the person, '
            'then the verb with nothing on the end.'),

    sound=dict(
        title='The three sounds of -s, and the times of the day',
        intro='The -s ending is on half the words in this unit, and it has three different '
              'sounds. Nobody hears the difference at first, and nobody needs a rule — '
              'but you do need to notice that the third one is a whole extra syllable.',
        rows=[('/s/', ['starts', 'works', 'books', 'weeks'],
               'After a hard sound: t, k, p, f. The -s is quiet and quick.'),
              ('/z/', ['begins', 'days', 'lives', 'hours'],
               'After a soft sound or a vowel. The -s buzzes.'),
              ('/ɪz/', ['finishes', 'classes', 'watches', 'changes'],
               'After s, sh, ch, x and ge. Here -es adds a whole syllable: class, '
               'cla-sses.'),
              ('o’clock', ['one o’clock', 'two o’clock'],
               'Say it as one word, with the stress on clock.'),
              ('past / to', ['quarter past nine', 'quarter to ten'],
               'Both are weak and fast. The hour after them is the strong part.'),
              ('a.m. / p.m.', ['nine a.m.', 'four p.m.'],
               'Say the two letters: ay-em, pee-em. Stress the second one.')],
        hear=[('Is the ending /s/ or /z/? — starts', '/s/'),
              ('Is the ending /s/ or /z/? — begins', '/z/'),
              ('Is the ending one syllable or two? — finishes', 'two'),
              ('Do you hear past or to?', 'past'),
              ('Do you hear 9.15 or 9.50?', '9.15'),
              ('Do you hear a.m. or p.m.?', 'p.m.')],
        say=['Say these: starts, works, begins, lives, finishes, watches.',
             'Say these times: 7.30, 9.15, 10.45, 14.00, 16.20.',
             'Say today’s date in two ways.',
             'Say your timetable for Monday out loud, with the times.']),

    builder=dict(
        title='One idea, one sentence',
        rule='At this level the most common mistake in writing is not a wrong word. It is '
             'two sentences joined by a comma. English does not allow that. Use a full stop, '
             'or use and, but, because or so.',
        pairs=[['I get up at seven, I take the bus at eight.',
                'I get up at seven and I take the bus at eight.'],
               ['The class is at nine, I am always early.',
                'The class is at nine, so I am always early.'],
               ['I do not come on Thursday, I work.',
                'I do not come on Thursday because I work.'],
               ['My tutor is free on Friday, she is busy on Monday.',
                'My tutor is free on Friday but she is busy on Monday.'],
               ['It is late, I go home.', 'It is late. I go home.']],
        watch='And, but, so and because are not the same. And adds. But turns. So gives the '
              'result. Because gives the reason. Choosing the wrong one changes your meaning '
              'even when the grammar is right.',
        ex=[('The library closes at nine, I study at home.',
             'The library closes at nine, so I study at home.'),
            ('I like Monday, I do not like Tuesday.', 'I like Monday but I do not like Tuesday.'),
            ('She is late, the bus is late.', 'She is late because the bus is late.'),
            ('We have a seminar, we have a workshop.', 'We have a seminar and a workshop.'),
            ('I am never late. I always take the early bus.',
             'yes — these are two correct sentences'),
            ('My deadline is Monday, I start today.', 'My deadline is Monday, so I start today.')]),

    typing=dict(
        title='The bottom row and the full stop',
        intro='The bottom row is Z X C V B N M, and then the comma, the full stop and the '
              'question mark. These three are the keys you use most in writing, and they '
              'all live down here.',
        keys='zxcvbnm',
        caption='The bottom row. Reach down from the home row and come straight back. The '
                'comma, the full stop and the question mark are on the right of the M, and '
                'the question mark needs the shift key.',
        drill=['zxcv bnm zxcv bnm',
               'can we move, or can we not move?',
               'my class, my bus, my week; be brave, come back.'],
        target=10),

    study=dict(
        title='Review that is spaced, not frantic',
        intro='Most students review by reading everything the night before a test. That '
              'feels like work and it is almost useless. Your memory keeps what it meets '
              'again after it has started to forget it, not what it meets twice in one '
              'evening.',
        steps=['After a lesson, read your notes once the same evening. Five minutes.',
               'Read them again the next day. Three minutes.',
               'Read them again one week later. Three minutes.',
               'Read them again one month later. Two minutes.',
               'Thirteen minutes in a month beats two hours the night before, and it is not '
               'close.'],
        tip='Put the four dates at the top of every page of notes when you write it: today, '
            'tomorrow, next week, next month. Then review is not a decision you have to make '
            'every evening. It is a line you cross off.'),

    rev=dict(
        vocab=[('the paper that shows your classes', 'timetable'),
               ('the last day you can give work in', 'deadline'),
               ('one of the parts of the college year', 'term'),
               ('your own teacher, for your work', 'tutor'),
               ('the list of names the teacher calls', 'register'),
               ('a class where students talk', 'seminar'),
               ('a short time with no class', 'break'),
               ('fifteen minutes', 'quarter'),
               ('sixty minutes', 'hour'),
               ('every time', 'always'),
               ('no times at all', 'never'),
               ('after the usual time', 'late')],
        gram=[('My week __________ (start) on Monday.', 'starts'),
              ('The lessons __________ (begin) at nine.', 'begin'),
              ('She __________ (finish) at four.', 'finishes'),
              ('__________ you have a class today?', 'Do'),
              ('__________ the library close at nine?', 'Does'),
              ('He __________ not work on Thursday.', 'does'),
              ('I am __________ late. (never)', 'never'),
              ('She __________ works on Thursday. (usually)', 'usually')],
        mini=[
            ('The Monday seminar starts at',
             ('09.00', '11.00', '11.15', '12.15'), 2,
             '11.15 – 12.15   Seminar, on the timetable.'),
            ('The deadline for term work is',
             ('12 December', '15 December', '5 January', '1 January'), 1,
             'Monday the fifteenth of December, in the announcement.'),
            ('Quarter to ten is',
             ('9.15', '9.30', '9.45', '10.15'), 2,
             'After the half hour you say to and the next hour.'),
            ('Which sentence is correct?',
             ('He do not work on Friday.', 'Does she works on Friday?',
              'She does not work on Friday.', 'She not work on Friday.'), 2,
             'Does carries the question or the negative, and the verb stays plain.'),
            ('Which sentence is correct?',
             ('I always am late.', 'I am always late.', 'Always I am late.',
              'I am late always.'), 1,
             'An adverb of frequency goes after be and before other verbs.'),
            ('A college week often has a free day because',
             ('students need a day for reading', 'teachers are tired',
              'the canteen is closed', 'the library is full'), 0,
             'Students need one day in the week for reading, in the passage.')]),

    tip='Every time you hear a time in the Listening section, write the figures, not the '
        'words: 9.45, not quarter to ten. Figures take one second and words take four, and '
        'the audio does not wait for you.',
)
