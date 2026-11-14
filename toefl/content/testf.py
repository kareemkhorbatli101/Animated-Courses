# -*- coding: utf-8 -*-
"""Progress Test F.

The real order and the real task names, one module in each section.
Reading 20 + Listening 16 + Writing 12 + Speaking 11 = 59 items.

Two counts are not reduced. Build a Sentence is ten because the real task is
ten. Speaking is seven repeats and four interview questions because that is
the task, and a shorter one would be a different task.
"""

TEST = dict(
    n='F', a2=True,

    reading=[dict(
        gap_text='Riverside College is a small campus with six building-. The library '
                 'open- at eight every morning and close- at nine. In the canteen a hot '
                 'dish cost- two pounds and a sandwich cost- two twenty. Last term the '
                 'college clos-- the gym for a week, because a storm damag-- the roof. '
                 'The staff clean-- the sports field and open-- it again on the Tuesday. '
                 'Most student- walk to the college.',
        gap_ans=['s', 's', 's', 's', 's', 'ed', 'ed', 'ed', 'ed', 's'],
        docs=[
            ('notice', 'Riverside College — the week of 8 December', [
                '# Monday',
                '09.00 – 11.00   English, room B204',
                '14.00 – 16.00   Workshop, laboratory 2',
                '# Tuesday',
                'No classes. Module choice closes at five.',
                '# Wednesday',
                '10.00 – 12.00   Business, room A305',
                '# Notes',
                '* The library is open until nine every day this week.',
                '* The canteen closes at two on Tuesday.'], 'notice'),
            ('email', 'group.b@riverside.edu', 'careers@riverside.edu',
             '05/12/2025', 'Interviews next week',
             ['Dear students,', '',
              'Interviews for the library job are on Thursday, from ten until four.',
              'Bring your student card. You do not need your CV again.',
              'If you cannot come on Thursday, email us before Tuesday.',
              '', 'The Careers Service'])],
        daily=[
            ('Where is the English class on Monday?',
             ('A305', 'B204', 'laboratory 2', 'the library'), 1,
             '09.00 – 11.00   English, room B204.'),
            ('What time does module choice close?',
             ('two', 'four', 'five', 'nine'), 2,
             'Module choice closes at five, on Tuesday.'),
            ('When does the canteen close on Tuesday?',
             ('at two', 'at four', 'at five', 'at nine'), 0,
             'The canteen closes at two on Tuesday.'),
            ('When are the interviews?',
             ('Tuesday', 'Wednesday', 'Thursday', 'Friday'), 2,
             'Interviews for the library job are on Thursday.'),
            ('What do students bring to the interview?',
             ('a CV', 'a student card', 'a reference', 'nothing'), 1,
             'Bring your student card. You do not need your CV again.')],
        passage=('Why a College Week Has a Hole in It', [
            'A college week is not the same on every day. Monday and Tuesday are heavy. '
            'Wednesday is often free. Thursday and Friday are heavy again.',
            'There is a reason for the free day. Students need one day for reading. '
            'Teachers need one day for their own work. A free Wednesday also gives the '
            'college a day for games and for clubs.',
            'The shape is not the same in every country. In some places the week runs '
            'from Sunday to Thursday. But the idea is always the same. A week needs a '
            'hole in the middle, and a student with five heavy days does the work of '
            'four.'], 117),
        academic=[
            ('Which day is often free?',
             ('Monday', 'Tuesday', 'Wednesday', 'Friday'), 2,
             'Wednesday is often free.'),
            ('Why do students need the free day?',
             ('for games', 'for reading', 'for the canteen', 'for clubs'), 1,
             'Students need one day for reading.'),
            ('What else does the free day give the college?',
             ('a day for games and clubs', 'a day for exams', 'a day for the library',
              'a day for work'), 0,
             'A free Wednesday also gives the college a day for games and for clubs.'),
            ('In some places the week runs from',
             ('Monday to Friday', 'Sunday to Thursday', 'Tuesday to Saturday',
              'Wednesday to Sunday'), 1,
             'In some places the week runs from Sunday to Thursday.'),
            ('A student with five heavy days does the work of',
             ('six', 'five', 'four', 'three'), 2,
             'A student with five heavy days does the work of four.')])],

    listening=[dict(
        warm=[
            ('Excuse me, is there a canteen in this building?',
             ('At four o’clock.', 'Yes, on the ground floor.', 'Two pounds.',
              'He is a teacher.'), 1,
             'Is there ...? takes Yes, there is, or the place itself.'),
            ('Did you take the early bus?',
             ('No, I missed it.', 'At the barrier.', 'Two zones.', 'Yes, I am.'), 0,
             'Did you ...? takes a past answer.'),
            ('What are you going to do after this course?',
             ('I am going to work for a year.', 'At nine.', 'Yes, I do.',
              'In the library.'), 0,
             'What are you going to ...? asks about a plan.')],
        convos=[([
            ('Man', 'Ana, where are you? The class starts in five minutes.'),
            ('Woman', 'I am still on the bus. The traffic is bad this morning.'),
            ('Man', 'You usually arrive before nine.'),
            ('Woman', 'I know. I always take the eight o\u2019clock bus, but today it is '
                      'not moving.'),
            ('Man', 'Dr Patel is calling the register now.'),
            ('Woman', 'Say that I am coming. What are you doing?'),
            ('Man', 'I am printing my work in room B14. The printer here is slow.'),
            ('Woman', 'Are you free at lunch?'),
            ('Man', 'I am. Then we meet at one in the canteen.'),
            ('Woman', 'Good. See you there.')], [
            ('Where is the woman at the start of the conversation?',
             ('in the class', 'on the bus', 'in the library', 'at home'), 1,
             'She says I am still on the bus.'),
            ('Why is she late?',
             ('she is ill', 'the traffic is bad', 'the bus is early',
              'she is in the canteen'), 1,
             'The traffic is bad this morning.'),
            ('Which bus does she usually take?',
             ('seven o’clock', 'eight o’clock', 'nine o’clock',
              'ten o’clock'), 1,
             'I always take the eight o’clock bus.'),
            ('What is the man doing now?',
             ('waiting at the door', 'printing his work', 'calling the register',
              'eating lunch'), 1,
             'I am printing my work in room B14.'),
            ('What do they decide?',
             ('to meet at one in the canteen', 'to meet at ten', 'to go home',
              'to call the tutor'), 0,
             'Then we meet at one in the canteen.')])],
        poster=['CAFETERIA', 'No hot food Thursday 12.00 – 14.00',
                'Sandwiches and salad as normal'],
        announce=([('Man', 'Good morning from the cafeteria. We have a short announcement '
                           'about Thursday. There is no hot food between twelve and two, '
                           'because the big cooker is not working. Sandwiches, salad boxes '
                           'and fruit are all there as normal, and the drinks machine is '
                           'working. There is no queue for the cold food, so Thursday is '
                           'in fact the fastest day of the week.')], [
            ('What is not there on Thursday?',
             ('sandwiches', 'hot food between twelve and two', 'drinks', 'fruit'), 1,
             'There is no hot food between twelve and two.'),
            ('Why not?',
             ('no cook', 'the big cooker is not working', 'the cafeteria is closed',
              'there is no food'), 1,
             'Because the big cooker is not working.'),
            ('What is there as normal?',
             ('hot dishes', 'soup', 'sandwiches, salad and fruit', 'nothing'), 2,
             'Sandwiches, salad boxes and fruit are all there as normal.'),
            ('What does the speaker say about the queue?',
             ('it is long', 'there is no queue for the cold food', 'it starts at twelve',
              'it is at till 2'), 1,
             'There is no queue for the cold food.')]),
        board=['WEEK THREE', 'new people + bad sleep + new food',
               'a body with no strength', 'what helps'],
        talk=([('Woman', 'Three weeks into every first term, this health centre runs out '
                         'of chairs. The same thing happens in January, three weeks after '
                         'the winter break. The reason is not bad luck. A new student '
                         'meets a lot of new people in one month. They sleep badly in a '
                         'new bed, and they eat at new times. Each one is a small thing. '
                         'Put them together and you create a body with no strength. Now '
                         'the important part. Register with a doctor in your first week, '
                         'while the waiting room is empty. Then in week three, go to bed '
                         'early for four nights. Those two things beat anything in our '
                         'pharmacy.')], [
            ('What fills up in week three?',
             ('the library', 'the waiting room at the health centre', 'the canteen',
              'the gym'), 1,
             'In the third week the waiting room fills up.'),
            ('Is the reason bad luck?',
             ('yes', 'no', 'sometimes', 'only in winter'), 1,
             'The reason is not bad luck.'),
            ('What is the first piece of advice?',
             ('take medicine', 'register with a doctor in your first week',
              'eat more', 'stay in your room'), 1,
             'Register with a doctor in your first week.'),
            ('What is the second?',
             ('go to bed early for four nights', 'drink more water', 'do more exercise',
              'see a doctor'), 0,
             'In week three, go to bed early for four nights.')]))],

    writing=dict(
        build=[
            ('I am a new student.', ['are', 'you', 'a', 'student', 'here'],
             'Are you a student here?'),
            ('The office is in Block C.', ['where', 'is', 'the office', 'exactly'],
             'Where is the office exactly?'),
            ('There are six blocks.', ['how many', 'blocks', 'are', 'there'],
             'How many blocks are there?'),
            ('The class starts at nine.', ['when', 'does', 'the class', 'start'],
             'When does the class start?'),
            ('I have got one brother.', ['have', 'you', 'got', 'any', 'brothers'],
             'Have you got any brothers?'),
            ('She is reading in the library.', ['what', 'is', 'she', 'reading', 'now'],
             'What is she reading now?'),
            ('A coffee is one pound ten.', ['how much', 'is', 'a coffee', 'in here'],
             'How much is a coffee in here?'),
            ('There was a storm on Friday.', ['was', 'there', 'a storm', 'on Friday'],
             'Was there a storm on Friday?'),
            ('I took the early bus.', ['did', 'you', 'take', 'the early bus', 'today'],
             'Did you take the early bus today?'),
            ('I am going to apply for the job.',
             ['what', 'are', 'you', 'going to', 'apply', 'for'],
             'What are you going to apply for?')],
        email=dict(
            to='library@riverside.edu',
            date='09/12/2025',
            subject='A study room on Saturday',
            scenario=['You want a study room in the library on Saturday morning.',
                      'You do not know if the library is open. Write to the library.'],
            bullets=['say who you are and which group you are in',
                     'ask about Saturday opening times',
                     'ask how to take a study room']),
        disc=dict(
            prof='Dr Patel',
            question='Some students take a part-time job while they study. Others do not. '
                     'Is a part-time job a good thing for a student? Give one reason.',
            posts=[('Mei', 'w', 'It is a good thing. I work eight hours a week in the '
                                'library and I read for two of them. The money is not the '
                                'only benefit.'),
                   ('Yusuf', 'm', 'It depends on the hours. Eight is fine. Twelve was too '
                                  'many for me last term, and my grades showed it.')])),

    speaking=dict(
        repeat=['My name is Ana.', 'I am a student here.',
                'I take the bus every morning.',
                'There are fifteen students in my class.',
                'Last winter was long and very cold.',
                'I am going to apply for a part-time job this term.',
                'I took the early train, but the barrier did not open for my card.'],
        interview=('your life as a student', [
            'Thank you for talking to me. First, where do you study, and how do you get '
            'there every day?',
            'Tell me about a normal day for you. What do you do before your first class?',
            'Some students work while they study and some do not. Which is better for a '
            'student, do you think, and why?',
            'Finally, what are you going to do after this course? Tell me your plan and '
            'one reason for it.'])),
)
