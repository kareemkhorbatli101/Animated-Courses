# -*- coding: utf-8 -*-
"""Foundation 1, Unit 7 - School and Study.

Enrolling, classroom rules, deadlines, and then the two readings that
carry Volume 1's largest single block of vocabulary: how people actually
remember things, and why schools in different countries start at
different ages. This unit teaches seventy-five head words, more than any
other in the book, because education is the subject Volume 1 opens with.
"""

_HOURS = dict(kind='bar',
              title='Hours of study a week, by subject',
              sub='one evening class, thirty students',
              cats=['English', 'Maths', 'Computing', 'Science'],
              series=[('Hours a week', [6.5, 4.0, 5.5, 3.0])],
              ylab='hours')

_START = dict(kind='bar',
              title='The age children start school in four countries',
              sub='age in years, and hours of lessons a week at age 7',
              cats=['Country A', 'Country B', 'Country C', 'Country D'],
              series=[('Starting age', [5.0, 6.0, 7.0, 6.0]),
                      ('Lesson hours at 7', [22.0, 20.0, 18.0, 25.0])],
              ylab='years / hours')

UNIT = dict(
 n=7, vol=7, level='A1-A2', band='below 4.0',
 theme='School and Study',
 opener=(
   'This unit is about learning, and it teaches more new words than any '
   'other in the book, because this is the subject the next volume '
   'opens with. You will enrol on an evening class, read a classroom '
   'poster, ask for more time on a piece of work, study what actually '
   'helps memory, and compare schools in four countries. The technique '
   'page is the keyword trap: the paragraph that contains all the words '
   'of the question and none of the answer.'),

 cycles=[
  dict(
   sub='Joining a class',
   step=1,
   read=[
    dict(heading='Evening classes: a course list',
         kind='Course list', task='Table completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A course list is read down the column you need',
                ['Decide first whether the question is about the day, '
                 'the price or the room. Then read that column only.',
                 'Any course with two lines has a condition on the '
                 'second. That is where most questions are.']),
         paras=[
          'English for Work. Tuesday, six until eight, room 12. Thirty '
          'pounds for ten weeks. Class size is limited to fifteen.',
          'Maths, stage one. Wednesday, six until half past seven, room '
          '4. Free to anybody who left school before sixteen, and '
          'twenty pounds otherwise.',
          'Computing for beginners. Thursday, seven until nine, room '
          '12. Forty pounds, which includes a book. You must be able to '
          'use a mouse; absolute beginners are accepted on the Saturday '
          'course instead.'],
         items=[
          ('English for Work is on ____________.', None, 'Tuesday',
           'From six until eight, in room 12.'),
          ('The English class is limited to ____________ students.',
           None, 'fifteen', 'The last line of that entry in the list.'),
          ('Maths stage one is free to anybody who left school before '
           '____________.', None, 'sixteen',
           'Otherwise it costs twenty pounds.'),
          ('The computing course costs ____________ pounds.', None,
           'forty', 'And that price includes a book.'),
          ('Absolute beginners should take the ____________ course.',
           None, 'Saturday',
           'Because the Thursday class assumes you can use a mouse.')])],
   listen=[
    dict(heading='Enrolling on a course', part='Part 1',
         task='A conversation at a college desk', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Clerk', 'Which course is it?'),
          ('Student', 'English for Work, the Tuesday one.'),
          ('Clerk', 'There are two spaces left. Have you studied with '
           'us before?'),
          ('Student', 'No, never.'),
          ('Clerk', 'Then I need an address and proof of it. A bill or '
           'a bank letter from the last three months.'),
          ('Student', 'I have a bill here. Is a photograph of one '
           'enough?'),
          ('Clerk', 'A photograph is fine. The fee is thirty pounds. '
           'Are you working at the moment?'),
          ('Student', 'Part-time, sixteen hours.'),
          ('Clerk', 'Then it is still thirty. Under twelve hours it '
           'would be free.'),
          ('Student', 'When does it start?'),
          ('Clerk', 'The fourteenth, which is next Tuesday. Room 12, '
           'upstairs, at the end.'),
          ('Student', 'And if I miss a week?'),
          ('Clerk', 'Tell the teacher by email. Three absences without '
           'a reason and the place goes to somebody on the list.'),
          ('Student', 'Understood. Can I pay by card?'),
          ('Clerk', 'Card or cash, but not in instalments for a '
           'ten-week course.')],
         items=[
          ('There are ____________ spaces left on the course.', None,
           'two', 'The clerk checks this at the start.'),
          ('Proof of address must be from the last ____________ '
           'months.', None, 'three',
           'A bill or a bank letter is accepted.'),
          ('The course would be free if the student worked under '
           '____________ hours.', None, 'twelve',
           'At sixteen hours the fee is still thirty pounds.'),
          ('The course starts on the ____________.', None,
           'fourteenth', 'Which is next Tuesday, in room 12.'),
          ('____________ absences without a reason lose the place.',
           None, 'Three', 'The place then goes to somebody waiting.')])],
   speak=dict(
    part='Part 1', focus='Studying',
    intro='Say what, then say when and why. Two or three sentences.',
    qs=['Are you studying anything at the moment?',
        'When do you study best?',
        'Do you prefer to study alone or with others?',
        'What would you like to learn next?'],
    shape=[('answer', 'I am taking an English class on Tuesday '
            'evenings.'),
           ('support', 'I study best early in the morning, before '
            'anybody is awake.'),
           ('follow-up', 'I prefer studying alone, but I test myself '
            'with a friend once a week.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a college about a course',
         prompt='You want to join a course. Write a note to the '
                'college. In your note: say which course; ask two '
                'questions about it; say when you could come in.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Sir or Madam,',
          'I would like to join the Tuesday evening course in English '
          'for Work, which starts on the fourteenth.',
          'Could you tell me two things before I enrol? First, whether '
          'there is a test at the end, and second, whether the fee of '
          'thirty pounds covers the book or whether that is extra.',
          'I work until five every day except Friday, so I could come '
          'in on Friday afternoon or on any day after half past five.',
          'Thank you for your help.',
          'Yours faithfully,',
          'Dev Patel'],
         notes=['The course is named with its day and start date, so '
                'nobody has to look it up.',
                'The two questions are numbered inside the sentence, '
                'which makes them impossible to miss.',
                'The availability is given as a rule plus an '
                'exception, which is shorter than listing days.'],
         criterion=[('The course named exactly', 'Task Achievement'),
                    ('Two clear questions', 'Task Achievement'),
                    ('Availability given', 'Task Response'),
                    ('Formal and short', 'Coherence and Cohesion')])],
   gram=dict(
    point='Questions with which, what and how much',
    explain='Use which when there is a small set to choose from, what '
            'when the set is open, and how much for price.',
    examples=['Which course is it?',
              'What time does it start?',
              'How much is the fee?',
              'Which room are we in?'],
    items=[('____ course do you want?', 'Which course do you want?'),
           ('____ time does it start?', 'What time does it start?'),
           ('____ is the fee?', 'How much is the fee?'),
           ('____ room is it in?', 'Which room is it in?'),
           ('____ do I need to bring?', 'What do I need to bring?')],
    task='Complete each question with which, what or how much.'),
   vocab=[('size', 'how big something is'),
          ('online', 'using the internet'),
          ('precisely', 'exactly'),
          ('teachers', 'people whose job is to teach'),
          ('fifteen', 'the number 15'),
          ('large', 'big'),
          ('support', 'help given to somebody'),
          ('studies', 'the work of learning a subject'),
          ('college', 'a place of study after school'),
          ('whose', 'belonging to which person'),
          ('everywhere', 'in all places'),
          ('extra', 'more than the usual amount'),
          ('assume', 'to think something is true without checking'),
          ('accepted', 'taken or agreed to'),
          ('thirty', 'the number 30')],
   expr=[('I would like to join the course.', 'opening an enquiry'),
         ('Could you tell me two things?', 'introducing questions'),
         ('Is a photograph enough?', 'checking what proof is '
          'accepted'),
         ('Can I pay by card?', 'asking about payment')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='In the classroom',
   step=1,
   read=[
    dict(heading='Classroom rules: a poster',
         kind='Poster', task='Matching and short answer',
         band='gt_short', qtype='Questions 11-15',
         paras=[
          'Telephones go in the box by the door. You may take yours out '
          'at the break. If you are expecting an urgent call, tell the '
          'teacher at the start and keep it on the desk.',
          'Work handed in late is marked but not graded, unless you '
          'have agreed a new date beforehand. Agreeing a date is '
          'allowed twice a term and takes one email.',
          'Speak in English from the moment you come through the door. '
          'This rule is for your benefit and it is the one students '
          'break most. Nobody is ever corrected for an accent, only for '
          'not trying.'],
         items=[
          ('Telephones go in the box by the ____________.', None,
           'door', 'And they are taken out at the break.'),
          ('What should you do if you expect an urgent call?', None,
           'tell the teacher',
           'At the start, and keep the telephone on the desk.'),
          ('Late work is marked but not ____________.', None, 'graded',
           'Unless a new date was agreed beforehand.'),
          ('A new date may be agreed ____________ a term.', None,
           'twice', 'And it takes one email to arrange.'),
          ('Students are never corrected for an ____________.', None,
           'accent', 'Only for not trying to speak English.')])],
   listen=[
    dict(heading='The first lesson', part='Part 2',
         task='A teacher speaking to a new class', band='l2',
         qtype='Questions 16-20',
         script=[
          ('Teacher', 'Welcome. Four things, and then we start '
           'properly.'),
          ('Teacher', 'First, we speak English in this room from the '
           'door. Not perfectly. From the door. If that feels '
           'uncomfortable for three weeks, that is normal and it '
           'passes.'),
          ('Teacher', 'Second, the work. One piece a week, handed in by '
           'Monday. If you need more time, email me before Monday, not '
           'after it. Before Monday it is a change of plan. After '
           'Monday it is an excuse, and I treat the two differently.'),
          ('Teacher', 'Third, I will not correct every mistake you '
           'make. I will correct the mistake that stops me '
           'understanding you, and I will correct the same mistake '
           'repeatedly until it goes. Everything else can wait.'),
          ('Teacher', 'Fourth, and this is the one that surprises '
           'people. The test at the end of the term is not what we are '
           'working towards. You are here because you want the language '
           'at work, so the test is a check, not a purpose.'),
          ('Teacher', 'Now. Tell the person next to you what you do and '
           'why you came. Three minutes, in English, mistakes and '
           'all.')],
         items=[
          ('Students speak English from the ____________.', None,
           'door', 'Not perfectly, but from the door.'),
          ('Work is handed in by ____________.', None, 'Monday',
           'One piece a week, the teacher says.'),
          ('An email asking for more time must come ____________ '
           'Monday.', None, 'before',
           'After Monday it is an excuse, not a plan.'),
          ('The teacher corrects the mistake that stops her '
           '____________.', None, 'understanding',
           'Everything else can wait, she says.'),
          ('The test at the end of term is a check, not a '
           '____________.', None, 'purpose',
           'Because students want the language for work.')])],
   speak=dict(
    part='Part 1', focus='Learning in a class',
    intro='Say what you like or dislike, then why. One reason is '
          'enough.',
    qs=['Do you like learning in a class?',
        'What makes a good teacher?',
        'Do you ask questions in class?',
        'Is homework useful?'],
    shape=[('answer', 'I like classes more than studying alone.'),
           ('support', 'Hearing other people make the mistake I was '
            'about to make saves me a week.'),
           ('follow-up', 'I do ask questions now, although I did not '
            'for the first year.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Hours of study a week, by subject',
         figure=_HOURS,
         prompt='The chart shows how many hours a week thirty students '
                'spend on four subjects. Describe the chart and make '
                'one comparison.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows the average number of hours a week that '
          'thirty evening students spend on each of four subjects.',
          'English takes the most time at six and a half hours, '
          'followed by computing at five and a half. Maths takes four '
          'hours and science the least at three.',
          'The gap between the highest and the lowest is three and a '
          'half hours, so students spend more than twice as long on '
          'English as on science.',
          'The two language and computer subjects together account for '
          'twelve hours, which is well over half of the nineteen hours '
          'studied in total.'],
         notes=['The subjects are given in order of size, which makes '
                'the shape clear in one reading.',
                'The comparison uses a multiple, and the total is '
                'calculated rather than copied.',
                'No reason is suggested for the pattern, because the '
                'chart does not contain one.'],
         criterion=[('All four subjects with figures', 'Task '
                     'Achievement'),
                    ('A comparison using a multiple', 'Task '
                     'Response'),
                    ('A total or grouping', 'Task Response'),
                    ('Half-hours written correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Modals of obligation: must, have to, do not have to',
    explain='Must and have to say something is necessary. Do not have '
            'to says it is not necessary, which is different from must '
            'not.',
    examples=['You must speak English in this room.',
              'You have to hand the work in by Monday.',
              'You do not have to buy the book.',
              'You must not use a telephone in class.'],
    items=[('You (must / speak) English here.',
            'You must speak English here.'),
           ('We (have to / hand in) the work on Monday.',
            'We have to hand in the work on Monday.'),
           ('You (not have to / buy) the book.',
            'You do not have to buy the book.'),
           ('You (must not / use) your telephone.',
            'You must not use your telephone.'),
           ('She (have to / email) before Monday.',
            'She has to email before Monday.')],
    task='Write each sentence with the right modal.'),
   vocab=[('email', 'a message sent by computer'),
          ('proof', 'something that shows a thing is true'),
          ('similar', 'nearly the same'),
          ('compared', 'looked at beside something else'),
          ('rarely', 'almost never'),
          ('cancelled', 'stopped before it happened'),
          ('fees', 'money paid for a service or course'),
          ('computer', 'a machine for storing and working with data'),
          ('address', 'where somebody lives or a message is sent'),
          ('allow', 'to let somebody do something'),
          ('stage', 'one step in a process, or a level'),
          ('among', 'in the middle of a group'),
          ('towards', 'in the direction of'),
          ('students', 'people who study'),
          ('cook', 'to prepare food with heat')],
   expr=[('From the door, not perfectly.', 'setting a rule with a '
          'limit'),
         ('That is normal and it passes.', 'reassuring a learner'),
         ('Before Monday it is a plan; after Monday it is an excuse.',
          'drawing a sharp line'),
         ('Mistakes and all.', 'telling somebody to try anyway')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Homework and deadlines',
   step=2,
   read=[
    dict(heading='When you cannot hand work in on time',
         kind='Notice', task='Short answer and matching',
         band='gt_work', qtype='Questions 21-25',
         skill=('A deadline policy is read for the word before',
                ['Nearly every rule here turns on whether you asked '
                 'before or after the date.',
                 'Find the sentence with a number of days in it. That '
                 'is where the questions live.']),
         paras=[
          'Ask for extra time before the deadline, not afterwards. A '
          'request made before is a change of plan and is almost always '
          'agreed. A request made after is an explanation, and the work '
          'is marked but not graded.',
          'Each student may agree a new date twice a term. The new date '
          'is usually seven days later. A third request is possible but '
          'goes to the department, and the department rarely refuses '
          'it if there is a genuine reason.',
          'Work that is handed in more than twenty-three days late '
          'cannot be marked at all, because by then the whole class has '
          'seen the answers. This is the one rule with no exception.'],
         items=[
          ('A request made before the deadline is treated as a change '
           'of ____________.', None, 'plan',
           'A plan, and it is almost always agreed.'),
          ('Work handed in late without asking is marked but not '
           '____________.', None, 'graded',
           'The request afterwards counts only as an explanation.'),
          ('A new date may be agreed ____________ a term.', None,
           'twice', 'A third request goes to the department.'),
          ('The new date is usually ____________ days later.', None,
           'seven', 'Agreed with the teacher directly.'),
          ('Work more than ____________ days late cannot be marked.',
           None, 'twenty-three',
           'Because the class has seen the answers by then.')])],
   listen=[
    dict(heading='Asking for more time', part='Part 1',
         task='A conversation with a teacher', band='l1',
         qtype='Questions 26-30',
         script=[
          ('Student', 'Could I ask for more time on the writing?'),
          ('Teacher', 'When is it due?'),
          ('Student', 'Monday. My mother has been in hospital since '
           'Thursday.'),
          ('Teacher', 'I am sorry. Of course. How long do you need?'),
          ('Student', 'A week would be enough.'),
          ('Teacher', 'Then the following Monday, the twenty-fifth. '
           'That is your first extension this term.'),
          ('Student', 'Does it count against me?'),
          ('Teacher', 'Not at all. Asking before the date is exactly '
           'what the rule is for. What costs you marks is silence.'),
          ('Student', 'Should I email as well?'),
          ('Teacher', 'Yes, one line, so there is a record. Send it '
           'today while we both remember.'),
          ('Student', 'And the reading for Wednesday?'),
          ('Teacher', 'Do what you can. If you only manage the first '
           'two pages, come anyway. Coming with half the work beats not '
           'coming.'),
          ('Student', 'Thank you.'),
          ('Teacher', 'And tell me on Wednesday how she is.')],
         items=[
          ('The work is due on ____________.', None, 'Monday',
           'The student asks before that date.'),
          ('The new date is the ____________.', None, 'twenty-fifth',
           'A week later, the following Monday.'),
          ('This is the student’s ____________ extension this '
           'term.', None, 'first', 'Two extensions are allowed each term.'),
          ('The teacher says what costs marks is ____________.', None,
           'silence', 'That is, not asking for more time at all.'),
          ('The student should send an email so there is a '
           '____________.', None, 'record',
           'One line, sent today, the teacher says.')])],
   speak=dict(
    part='Part 2', focus='Something you had to finish',
    longturn=[('I am going to talk about something I had to finish by a '
               'certain time. It was a report for my course.'),
              ('The report was about water in my city, and it had to be two '
               'thousand words. I had six weeks, and the last day was the '
               'twelfth of March.'),
              ('It was difficult for two reasons. The first reason is that I '
               'started late: I did almost nothing for four weeks. The '
               'second reason is that I could not find the numbers. '
               'The city website had old figures.'),
              ('In the end I finished it, but not well. I worked for three '
               'evenings and one whole Saturday. I sent it at half '
               'past eleven at night, on the last day. I passed with a '
               'low mark, and my teacher wrote that the ideas were '
               'good but the end was too short. She was right. Now I '
               'make a plan in the first week and write a little every '
               'few days. It is not a perfect system, but it is much '
               'better than one long Saturday.')],
    intro='One minute to prepare. Keep to the story: what, when, how '
          'it ended.',
    qs=['Describe something you had to finish by a certain time.',
        'Say what it was.',
        'Say why it was difficult.',
        'Say how it ended.'],
    shape=[('answer', 'Last term I had to finish a piece of written '
            'work while my mother was ill.'),
           ('support', 'It was due on the Monday and she went into '
            'hospital on the Thursday before.'),
           ('support', 'I asked the teacher for more time before the '
            'date rather than afterwards.'),
           ('follow-up', 'I had an extra week, I handed it in, and I '
            'learned that asking early costs nothing.')]),
   write=[
    dict(task='Task 2', heading='Should students have homework?',
         prompt='Some people think students should be given homework. '
                'Others think the school day is long enough. What do '
                'you think? Give your opinion and reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Homework is useful if it is short and spaced out',
               [('Practice after a gap is what fixes learning',
                 ['twenty minutes two days later beats an hour the '
                  'same evening',
                  'the gap is what makes the brain work to recall it']),
                ('Long homework mostly measures the home',
                 ['a child with a quiet room finishes; a child sharing '
                  'one does not',
                  'so long tasks measure the house and not the '
                  'child'])]),
         model=[
          'Some people want more homework and others want none. I think '
          'the amount matters less than the kind: short tasks spaced '
          'out are useful, and long ones are not.',
          'The reason is how memory works. Twenty minutes of practice '
          'two days after a lesson is worth more than an hour on the '
          'same evening, because the gap forces the brain to recall '
          'the material instead of merely reading it again. A short '
          'task on Wednesday for Monday’s lesson does more than a '
          'long one on Monday night.',
          'Long homework also measures the wrong thing. A student with '
          'a quiet room and a parent who can help will finish it; a '
          'student sharing a room with two brothers will not. The marks '
          'then describe the house rather than the student.',
          'So I would set homework three times a week, twenty minutes '
          'each time, and never more than that.'],
         notes=['The answer refuses the question as asked and gives a '
                'better one, which is allowed if it is done in the '
                'first paragraph.',
                'The first reason explains a mechanism rather than '
                'stating a preference.',
                'The conclusion is a specific proposal, which is much '
                'stronger than repeating the opinion.'],
         criterion=[('A clear position in the first paragraph',
                     'Task Response'),
                    ('A mechanism, not just a preference', 'Task '
                     'Response'),
                    ('A specific proposal at the end', 'Coherence and '
                     'Cohesion'),
                    ('Comparatives used correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Conditionals with if for rules',
    explain='Use if plus the present simple, then will or a modal, for '
            'a rule or a likely result.',
    examples=['If you ask before the date, it is agreed.',
              'If you hand it in late, it will be marked but not '
              'graded.',
              'If you miss three classes, you lose the place.',
              'If you need more time, email me.'],
    items=[('If you (ask) before the date, it is agreed.',
            'If you ask before the date, it is agreed.'),
           ('If you (hand in) late, it (be) marked only.',
            'If you hand it in late, it will be marked only.'),
           ('If you (miss) three classes, you (lose) the place.',
            'If you miss three classes, you will lose the place.'),
           ('If you (need) more time, (email) me.',
            'If you need more time, email me.'),
           ('If the room (be) full, we (use) room 4.',
            'If the room is full, we will use room 4.')],
    task='Complete each rule with the right verb forms.'),
   vocab=[('lesson', 'a period of teaching'),
          ('advantage', 'something that helps you do better'),
          ('effect', 'a change produced by something'),
          ('fallen', 'past participle of fall'),
          ('explanation', 'a statement of why or how'),
          ('valuable', 'worth a lot'),
          ('merely', 'only'),
          ('comparison', 'the act of looking at differences'),
          ('twenty-five', 'the number 25'),
          ('weaker', 'less strong'),
          ('differ', 'to be unlike'),
          ('reducing', 'making smaller'),
          ('twenty-three', 'the number 23'),
          ('continue', 'to go on'),
          ('department', 'one part of a large organisation')],
   expr=[('Could I ask for more time?', 'opening a request politely'),
         ('What costs you marks is silence.', 'naming the real '
          'danger'),
         ('Do what you can and come anyway.', 'practical advice'),
         ('So there is a record.', 'explaining why to write it down')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How people learn',
   step=2,
   read=[
    dict(heading='Three things that help memory',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 31-36',
         paras=[
          'Almost everything students believe about studying is wrong, '
          'and it is wrong in the same direction: the methods that feel '
          'most productive work least. Reading a page again feels like '
          'learning because the page becomes familiar, and familiarity '
          'is mistaken for knowledge. The three methods that actually '
          'work all feel worse while you are doing them, which is why '
          'they have to be taught rather than discovered.',
          'The first is testing yourself. Closing the book and writing '
          'down what you remember produces far more learning than '
          'reading the same material again. The comparison is not '
          'close. In repeated studies the gap is roughly the '
          'difference between one lesson and two. The second is '
          'spacing. The same twenty minutes, split across three days, '
          'teaches more than twenty minutes in one block, because each '
          'gap forces a recall that the block does not.',
          'The third is mixing. Some students practise one kind of '
          'problem until they can do it, then move to the next kind. '
          'They perform better in the lesson and worse in the '
          'examination than students who mix the kinds up from the '
          'start. The reason is that an examination does not tell you '
          'which kind of problem you are looking at, and choosing the '
          'method is most of the skill. Mixing feels like failure '
          'while you are doing it, which is a genuine cost and the '
          'main reason the '
          'method is rarely used.'],
         items=[
          ('The methods that feel most productive work ____________.',
           None, 'least', 'Paragraph 1, which is the whole problem.'),
          ('Familiarity is mistaken for ____________.', None,
           'knowledge', 'Paragraph 1, when a page is read again.'),
          ('What is the first method that works?', None,
           'testing yourself',
           'Paragraph 2: closing the book and writing what you '
           'remember.'),
          ('Splitting study across three days is called '
           '____________.', None, 'spacing',
           'Paragraph 2, and each gap forces a recall.'),
          (
           'Which paragraph explains why mixing helps in an '
           'examination?',
           ['Paragraph 3', 'Paragraph 1', 'Paragraph 2'], 0,
           'An examination does not tell you which kind of problem it '
           'is.',
           {1: 'Paragraph 1 is about testing yourself rather than '
               'mixing.', 2: 'Paragraph 2 is about spacing the practice out.'}),
          ('Mixing feels like ____________ while you do it.', None,
           'failure', 'Paragraph 3, which is why it is rarely used.')])],
   listen=[
    dict(heading='A talk about remembering', part='Part 4',
         task='A short lecture to new students', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'I am going to tell you three things about '
           'memory, and all three will feel wrong. That is not a '
           'problem with the advice. It is the point of it.'),
          ('Speaker', 'One: test yourself instead of reading again. '
           'Close the book and write down what you remember. It is '
           'uncomfortable, it shows you what you do not know, and in '
           'the studies it is worth roughly a whole extra lesson.'),
          ('Speaker', 'Two: spread the work out. Twenty minutes on '
           'three days beats an hour on one. The gap is not wasted '
           'time; the gap is the mechanism. Every time you come back '
           'you have to recall, and recalling is what builds the '
           'memory.'),
          ('Speaker', 'Three, and this is the hardest to accept. Mix '
           'the kinds of question up instead of doing twenty of the '
           'same. You will perform worse in the practice and better in '
           'the examination, because the examination never tells you '
           'which kind you are looking at.'),
          ('Speaker', 'Now, the reason I started by warning you. Every '
           'one of these feels less productive than highlighting a '
           'page. If you judge a method by how it feels, you will '
           'choose the three worst methods available to you, and you '
           'will do it confidently.')],
         items=[
          ('The first method is to ____________ yourself.', None,
           'test', 'Instead of reading the material again.'),
          ('Testing is worth roughly a whole extra ____________.',
           None, 'lesson', 'According to the studies, the speaker '
           'says.'),
          ('Twenty minutes on ____________ days beats an hour on one.',
           None, 'three', 'Because each gap forces a recall.'),
          ('Mixing makes you perform worse in practice and better in '
           'the ____________.', None, 'examination',
           'Which never says which kind of question it is.'),
          ('If you judge a method by how it ____________, you choose '
           'the worst ones.', None, 'feels',
           'And do it confidently, the speaker adds.')])],
   speak=dict(
    part='Part 3', focus='Learning and memory',
    intro='Give the method, then why it works. Avoid listing more than '
          'two.',
    qs=['What is the best way to learn something new?',
        'Do examinations measure learning well?',
        'Should schools teach students how to study?'],
    shape=[('answer', 'The best method I know is testing yourself '
            'rather than reading again.'),
           ('support', 'Closing the book shows you what you do not '
            'know, which reading never does.'),
           ('support', 'It feels worse, and that is exactly why people '
            'avoid it.'),
           ('follow-up', 'Schools should teach this directly, because '
            'almost nobody discovers it alone.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='The age children start school in four countries',
         figure=_START,
         prompt='The chart shows the age children start school in four '
                'countries and the hours of lessons they have at age '
                'seven. Describe the chart and compare the countries.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows two things for four countries: the age at '
          'which children start school, and how many hours of lessons '
          'they have each week at the age of seven.',
          'Children start earliest in Country A, at five, and latest in '
          'Country C, at seven. Countries B and D both start at six.',
          'The hours do not follow the starting age. Country D starts '
          'at six but has the most lessons at twenty-five hours, while '
          'Country C starts latest and has the fewest at eighteen.',
          'Country A therefore has both an early start and a high '
          'number of hours, and Country C has neither, so the two '
          'measures are related but not tied together.'],
         notes=['The answer says what the two series are before '
                'describing either.',
                'The key observation is that the two measures do not '
                'move together, which is the point of a two-series '
                'chart.',
                'No country is praised or criticised, because the '
                'chart gives no outcomes.'],
         criterion=[('Both series explained', 'Task Achievement'),
                    ('The relationship between them stated', 'Task '
                     'Response'),
                    ('All four countries covered', 'Task '
                     'Achievement'),
                    ('No judgement given', 'Task Response')])],
   gram=dict(
    point='Comparatives and superlatives together',
    explain='Use the comparative for two and the superlative for three '
            'or more. The superlative takes the.',
    examples=['Country A starts earliest.',
              'Country C starts later than Country B.',
              'Country D has the most lessons.',
              'Science takes the least time.'],
    items=[('Country A starts (early) of all.',
            'Country A starts earliest of all.'),
           ('Country C starts (late) than Country B.',
            'Country C starts later than Country B.'),
           ('Country D has (many) lessons of the four.',
            'Country D has the most lessons of the four.'),
           ('Science takes (little) time.',
            'Science takes the least time.'),
           ('English takes (much) time than maths.',
            'English takes more time than maths.')],
    task='Write each sentence with a comparative or superlative.'),
   vocab=[('purpose', 'the reason something is done'),
          ('football', 'a game played with a ball and two teams'),
          ('familiar', 'well known to you'),
          ('political', 'to do with government and power'),
          ('receive', 'to get something that is given'),
          ('shown', 'past participle of show'),
          ('apply', 'to make a formal request'),
          ('succeed', 'to do what you were trying to do'),
          ('random', 'without any pattern or plan'),
          ('pound', 'a unit of money or of weight'),
          ('introduced', 'brought in for the first time'),
          ('practical', 'useful in real situations'),
          ('located', 'placed or situated'),
          ('genuine', 'real, not false'),
          ('choosing', 'deciding between things')],
   expr=[('It feels wrong, and that is the point.',
          'warning about advice that is uncomfortable'),
         ('The gap is the mechanism.', 'naming what does the work'),
         ('Worse in practice, better in the examination.',
          'describing a trade-off'),
         ('Almost nobody discovers it alone.', 'arguing something '
          'must be taught')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='School in different countries',
   step=3,
   read=[
    dict(heading='Starting school at five, six or seven',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 42-47',
         paras=[
          'Children begin formal school at five in some countries, at '
          'six in most, and at seven in a few. The argument for '
          'starting early is simple and feels obvious: more years of '
          'teaching should produce more learning. The argument for '
          'starting late is less obvious and better supported. Children '
          'who start at seven are behind at eight and level by eleven, '
          'and in several careful comparisons they are ahead by '
          'fifteen, particularly in reading for pleasure.',
          'Why would a late start help? The leading explanation is '
          'that what happens before school matters more than what a '
          'reading lesson at five can add. A five-year-old in a '
          'classroom is not playing, and play is where a great deal of '
          'language is learned. The effect is strongest for the '
          'children who most need it. That is the finding that changed '
          'the political argument. An early start appears to widen the '
          'gap between children rather than reduce it.',
          'None of this means a country should simply move its date. '
          'The countries that start at seven have long, well-paid '
          'pre-school systems, and the start age is one part of a '
          'whole that includes those years. A country that moved the '
          'age without building that would get the costs of a late '
          'start and none of its advantages. That is roughly what '
          'happened in two attempts in the last twenty years.'],
         items=[
          ('Children who start at seven are level by ____________.',
           None, 'eleven', 'Paragraph 1, and ahead by fifteen.'),
          ('They are particularly ahead in reading for '
           '____________.', None, 'pleasure',
           'Paragraph 1, in several careful comparisons.'),
          ('Which paragraph explains why a late start may help?',
           ['Paragraph 1', 'Paragraph 3', 'Paragraph 2'], 2,
           'Play is where a great deal of language is learned.',
           {0: 'Paragraph 1 is about what the research agrees on.', 1: 'Paragraph 3 is about countries that moved the age.'}),
          ('An early start appears to ____________ the gap between '
           'children.', None, 'widen',
           'Paragraph 2, which changed the political argument.'),
          ('Countries starting at seven have long ____________ '
           'systems.', None, 'pre-school',
           'Paragraph 3: the start age is one part of a whole.'),
          ('What would a country get if it moved the age alone?',
           ['both advantages', 'the costs and none of the advantages',
            'neither cost nor advantage', 'a smaller gap'],
           1, 'Paragraph 3, as happened twice recently.')])],
   listen=[
    dict(heading='Two students compare their schools', part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 48-52',
         script=[
          ('Tutor', 'You went to school in two different systems. Start '
           'with the biggest difference.'),
          ('Mei', 'The starting age. I began at seven and Luka began at '
           'five.'),
          ('Luka', 'And I was ahead of her at eight, which proves '
           'nothing, because she caught up by eleven.'),
          ('Tutor', 'What did you do before seven, Mei?'),
          ('Mei', 'Pre-school, every day, free, with trained staff. It '
           'was not school. There were no lessons. But it was not '
           'nothing either.'),
          ('Luka', 'That is the part people miss when they quote the '
           'comparison. They hear "start at seven" and imagine four '
           'years at home.'),
          ('Tutor', 'What about the hours once school started?'),
          ('Mei', 'Shorter. Eighteen hours a week at seven, against '
           'twenty-five in Luka’s country, and longer holidays.'),
          ('Luka', 'I had more hours and I would not say I learned '
           'more. I would say I was tired more.'),
          ('Mei', 'Although we should be careful. Two people is not '
           'evidence.'),
          ('Tutor', 'Quite right. Use the published comparisons in the '
           'essay and keep your own experience for the introduction.')],
         items=[
          ('Mei began school at ____________.', None, 'seven',
           'Luka began at five, two years earlier.'),
          ('Mei caught up with Luka by the age of ____________.',
           None, 'eleven', 'Luka had been ahead of her at eight.'),
          ('Before school Mei attended ____________ every day.', None,
           'pre-school', 'Free, with trained staff, and no lessons.'),
          ('Mei had ____________ hours of lessons a week at seven.',
           None, 'eighteen', 'Against twenty-five in Luka’s '
           'country.'),
          ('The tutor says to keep their own experience for the '
           '____________.', None, 'introduction',
           'And to use published comparisons for the argument.')])],
   speak=dict(
    part='Part 3', focus='Schools in different countries',
    sounds=[('A long sentence needs breaks. Breathe after about five or six '
             'words, and never in the middle of a group like my English '
             'course.'),
            ('Say this sentence with one break: I had six weeks, and the last '
             'day was the twelfth of March.'),
            ('Study words put the stress at the front: HOMEwork, TEAcher, '
             'EXercise. Report and exam take the second part.'),
            ('Say dates clearly: the twelfth of March, the first of June, the '
             'twenty-third of May.'),
            ('Record yourself describing something you had to finish. Mark '
             'where you breathed, and check that no break came in the middle '
             'of a group.')],
    intro='Compare, then judge. Say what evidence would change your '
          'view if you can.',
    qs=['Should children start school at five or later?',
        'Are long school days better?',
        'What is the purpose of school?'],
    shape=[('answer', 'I think later is better, provided there is good '
            'pre-school before it.'),
           ('support', 'Children who start at seven catch up by eleven '
            'and read more for pleasure at fifteen.'),
           ('support', 'But the comparison only holds where the '
            'pre-school years are properly funded.'),
           ('follow-up', 'What would change my mind is evidence from a '
            'country that moved the age without that funding.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing to a friend about a course you have finished',
         prompt='You have finished a course. Write to a friend. In your '
                'letter: say what the course was; say what was good and '
                'what was not; say what you will do next.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Sara,',
          'I finished the English for Work course last Tuesday. Ten '
          'weeks, two hours each time, and thirty pounds for the '
          'whole thing.',
          'The best part was that we spoke English from the door of the '
          'room, which was uncomfortable for about three weeks and then '
          'became normal. The weakest part was the writing: we did it '
          'at home and only got it back a fortnight later, by which '
          'time I had forgotten what I wrote.',
          'I am going to take the stage two course in September, and '
          'before then I am going to read one short article a day.',
          'How is your Spanish going?',
          'Dana'],
         notes=['The facts come first and briefly: what, how long, how '
                'much.',
                'The good and the bad are both specific. "It was great" '
                'is worth no marks at all.',
                'The plan for next has a date and a daily habit, not '
                'only an intention.'],
         criterion=[('The course described with facts', 'Task '
                     'Achievement'),
                    ('One good point and one weak point', 'Task '
                     'Achievement'),
                    ('A specific next step', 'Task Response'),
                    ('An informal, friendly register', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='although and but',
    explain='Although joins two clauses in one sentence and can start '
            'it. But joins two clauses in the middle only.',
    examples=['Although I started late, I caught up.',
              'I started late but I caught up.',
              'Although the hours were long, I did not learn more.',
              'The course was short although it was useful.'],
    items=[('I started late. I caught up. (although)',
            'Although I started late, I caught up.'),
           ('The hours were long. I did not learn more. (although)',
            'Although the hours were long, I did not learn more.'),
           ('The course was cheap. It was useful. (but)',
            'The course was cheap but it was useful.'),
           ('She was tired. She came anyway. (although)',
            'Although she was tired, she came anyway.'),
           ('We had less time. We read more. (but)',
            'We had less time but we read more.')],
    task='Join each pair with although or but.'),
   vocab=[('attract', 'to make somebody come or be interested'),
          ('examined', 'looked at carefully, or tested'),
          ('aged', 'of the age of'),
          ('achievement', 'something done successfully'),
          ('equivalent', 'equal in value or meaning'),
          ('frequently', 'often'),
          ('unimportant', 'not important'),
          ('suddenly', 'quickly and without warning'),
          ('suit', 'to be right or convenient for'),
          ('mention', 'to say something briefly'),
          ('video', 'a recording of moving pictures'),
          ('danger', 'the chance of harm'),
          ('consider', 'to think about carefully'),
          ('file', 'a set of papers or data kept together'),
          ('copy', 'a thing made to be the same as another')],
   expr=[('Two people is not evidence.', 'limiting your own '
          'experience'),
         ('That proves nothing, because...', 'rejecting a weak '
          'argument'),
         ('It was not school, but it was not nothing.',
          'describing something in between'),
         ('What would change my mind is...', 'naming the evidence you '
          'would accept')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='The keyword trap: the words of the question, not the answer',
  body='The test builds a trap in nearly every reading passage, and it '
       'works on almost everybody the first time. A question asks about '
       '"the cost of starting school early". You scan the passage and '
       'find a paragraph that contains the words cost, starting and '
       'early, all three, close together. You read it, you take an '
       'answer from it, and the answer is wrong, because that paragraph '
       'is about something else that happens to use the same words. The '
       'right paragraph, two down, says the same idea in completely '
       'different words and contains none of the words of the question. '
       'This is not bad luck. The paper is designed this way, because '
       'matching words is not reading and the test is a test of '
       'reading. Two defences. The first is the loop: if you are '
       'reading the whole passage one paragraph at a time, you meet the '
       'right paragraph in its turn and the trap never gets a chance. '
       'The second, for when you do have to search, is to decide what '
       'the answer would look like before you look for it. "It will be '
       'a disadvantage, and it will be about young children." Then scan '
       'for the idea, not the words. If you find a paragraph with all '
       'the words of the question in it, be more careful rather than '
       'less: in this test, that is a warning sign.',
  panel=[('The words of the question are bait',
          'The right paragraph usually uses different words.'),
         ('Decide what the answer looks like first',
          'A disadvantage? A number? A cause?'),
         ('Scan for the idea, not the words',
          'Matching words is not reading.'),
         ('All the words together is a warning',
          'Be more careful there, not less.')],
  qs=['What kind of answer am I looking for?',
      'Did this paragraph answer it, or only contain the words?',
      'Does another paragraph say it in different words?',
      'Am I matching words or meaning?',
      'Would the loop have found this without searching?'],
  task='In the cycle 4 and cycle 5 passages, find, for each question '
       'you got wrong, the paragraph that contains the words of the '
       'question. Then find the paragraph that contains the answer, and '
       'compare them.'),

 outlining=dict(
  title='Passage to outline: three lines for a whole passage',
  body='This page turns a reading passage into a plan, and it does two '
       'jobs at once: it proves you understood the passage, and it '
       'gives you the shape of a good essay to copy. Take the cycle 4 '
       'passage on memory. In three lines, write the position and the '
       'main idea of each paragraph, in your own words, with no detail '
       'at all. The position: the methods that feel productive work '
       'least. Idea one: testing yourself beats re-reading. Idea two: '
       'spacing and mixing beat blocking. That is the whole passage in '
       'three lines, and anybody who can write those three lines has '
       'understood it better than somebody who can quote four numbers '
       'from it. Notice what a well-built passage looks like when it is '
       'reduced this way: a position, then two or three ideas, each '
       'with support underneath. That is exactly the shape you have '
       'been planning your own answers in since unit 1. The test is '
       'always the same: if your three lines contain a detail, cross it '
       'out and write the idea the detail belongs to instead. If you '
       'cannot write a line for a paragraph, read that paragraph again, '
       'because that is the one you did not follow.',
  frame=('The study methods that feel most productive work least',
         [('Testing yourself beats reading again',
           ['closing the book shows what you do not know',
            'worth about one extra lesson in the studies']),
          ('Spacing and mixing beat doing one block',
           ['each gap forces a recall that a block does not',
            'mixing feels like failure and prepares you for the '
            'examination'])]),
  qs=['What is the position, in one line?',
      'What is the main idea of each paragraph?',
      'Have you written a detail where an idea belongs?',
      'Which paragraph could you not summarise?',
      'Does the passage have the shape you plan your own answers in?'],
  task='Reduce the cycle 4 passage to three lines, then do the same '
       'for cycle 5. Compare the two shapes.',
  answers=['a position and two or three ideas is the shape of both',
           'a detail in your summary means you have not found the '
           'idea',
           'the paragraph you cannot summarise is the one to reread',
           'your own plans have the same shape as a published passage',
           'three lines is enough for a whole passage at this level']),

 candos=['I can read a course list and find the condition on a course',
         'I can ask for more time before a deadline, in speech and in '
         'writing',
         'I can describe a chart with two different measures',
         'I can avoid a paragraph that only contains the words of the '
         'question',
         'I can reduce a whole passage to three lines'],

 tip=('If one paragraph contains every word of the question, be more '
      'careful rather than less. In this test that is usually the '
      'trap, and the real answer is somewhere else in different '
      'words.'))
