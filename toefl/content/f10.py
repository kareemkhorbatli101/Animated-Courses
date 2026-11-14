# -*- coding: utf-8 -*-
"""Foundation Unit 10 · Study, Work and Your Plans.

Grammar: going to and will; comparatives; and, but, because, so.
Question spine: What are you going to ...? Will ...?

This is the bridge unit. Sixteen Academic Word List items arrive here so that
the list is not new when Volume 1 starts teaching four hundred and eighty of
them.
"""

UNIT = dict(
    n=10, vol='F', level='A2',
    title='Study, Work and Your Plans',
    icons=('chart', 'laptop', 'pen'),
    subs=('Choosing a subject', 'A part-time job', 'What you will do next'),
    grammar='going to and will · comparatives · and, but, because, so',
    field='plans, work, the future',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Patel', 'Oakfield', 'Lena',
           'Hartley', 'Volume'),
    opener_line='Three sub-topics, three cycles in every skill. The last unit of this book '
                'is about what comes next, and so is the last page of it.',
    candos=[
        'talk about my plans with going to and will',
        'read a job advertisement and find the hours and the pay',
        'understand a short text about choosing a subject',
        'follow a conversation about a part-time job',
        'compare two things with -er and more',
        'write an email applying for a job on campus'],

    core=[
        ('plan', 'what you decide to do before you do it'),
        ('future', 'the time after now'),
        ('hope', 'to want something to happen'),
        ('decide', 'to choose after thinking'),
        ('choose', 'to take one thing and not another'),
        ('career', 'the work a person does for many years'),
        ('job', 'the work you are paid for'),
        ('interview', 'a meeting where somebody asks you questions about a job'),
        ('apply', 'to ask for a job or a place, in writing'),
        ('experience', 'the knowledge a job or a life gives you'),
        ('skill', 'something you can do well because you learned it'),
        ('salary', 'the money a job pays you'),
        ('part-time', 'for only some of the hours of a week'),
        ('full-time', 'for all the normal hours of a week'),
        ('important', 'with a big effect; worth your time'),
        ('difficult', 'not easy'),
        ('succeed', 'to do what you set out to do'),
        ('fail', 'not to succeed'),
        ('try', 'to make an effort'),
        ('improve', 'to get better'),
        ('goal', 'the thing you are working towards'),
        ('shift', 'the hours of one piece of work: the evening shift'),
        ('wage', 'money paid for each hour of work'),
        ('employer', 'the person or company you work for')],
    campus=[
        ('university degree', 'what you get at the end of a university course'),
        ('subject', 'the thing you study: history, chemistry, law'),
        ('module', 'one part of a course, with its own exam'),
        ('exam', 'the test at the end of a module or a year'),
        ('grade', 'the mark you get for a piece of work'),
        ('result', 'what you get at the end of an exam'),
        ('certificate', 'the paper that proves you passed'),
        ('application form', 'the paper you fill in when you apply'),
        ('reference', 'a letter about you from a teacher or an employer'),
        ('careers service', 'the office that helps students find work'),
        ('internship', 'a short time working in a company to learn'),
        ('CV', 'the paper that lists your study and your work')],
    awl=[
        ('available', 'there to be used or taken'),
        ('data', 'facts and numbers you can work with'),
        ('environment', 'everything around a person or a thing'),
        ('establish', 'to start something that will last'),
        ('finance', 'money, and the management of money'),
        ('identify', 'to say exactly which one it is'),
        ('income', 'the money that comes in'),
        ('indicate', 'to show or point to'),
        ('individual', 'one single person'),
        ('issue', 'a subject people argue about'),
        ('major', 'large and important'),
        ('percent', 'in each hundred'),
        ('research', 'careful study to find out something new'),
        ('similar', 'almost the same'),
        ('source', 'the place a thing comes from'),
        ('structure', 'the way the parts of a thing are put together')],
    again=['plan', 'career', 'degree', 'experience', 'reference', 'research',
           'available', 'similar'],
    vocab_talk=[
        'What are you going to do after this course?',
        'Do you have a part-time job, or would you like one?',
        'Which subject is better for a job, and why?',
        'What is the hardest thing about choosing a career?'],

    r1=dict(
        sub='Choosing a subject',
        skill=('Comparative endings', [
            'A short adjective adds -er: cheap, cheap-er.',
            'An adjective ending in -y changes to -ier: easy, eas-ier.',
            'A short adjective with one vowel doubles the letter: big, bigg-er.',
            'A long adjective takes more in front and no ending at all.']),
        guided_text='A degree in law is long-- than a degree in business. The work is '
                    'hard-- and the reading is heav---. But the first salary is usually '
                    'high--, and the number of jobs is bigg--.',
        guided_hint='1  long--  →  er  (longer)',
        guided=['er', 'er', 'ier', 'er', 'er'],
        exam_text='Students choose a subject for three reasons, and money is only one of '
                  'them. A course with a high-- salary at the end is not always the '
                  'bett-- choice. A student on the wrong course works slow--, finds the '
                  'reading hard-- and leaves with a low-- grade. A student on the right '
                  'course works quick--, reads a lot and finishes strong--. The careers '
                  'service says the same thing every year: the easi--- question is what '
                  'pays well, and the hard--- question is what you will still read about '
                  'in ten years. The bett-- answer is almost never the '
                  'first one.',
        exam=['er', 'er', 'ly', 'er', 'er', 'ly', 'er', 'est', 'est', 'er']),

    r2=dict(
        sub='A part-time job',
        skill=('Hours and money together', [
            'A job advertisement has three numbers: the hours, the wage and the shift.',
            'Work out the week before you compare two jobs.',
            'Watch for per hour and per week. They are not the same number.',
            'The last line of an advertisement usually says how to apply.']),
        docs=[
            ('ad', 'Riverside College — student jobs', [
                '# Library assistant',
                '* 8 hours a week, evening shift, 6.00 – 10.00 Tuesday and Thursday',
                '* 11.50 per hour',
                '* No experience needed. Training in the first week.',
                '# Cafeteria assistant',
                '* 12 hours a week, 11.00 – 15.00 Monday, Wednesday and Friday',
                '* 11.00 per hour',
                '* Some experience is better, but it is not needed.',
                '# To apply',
                '* Send a CV and one reference to the careers service by 5 December.',
                '* Interviews are in the week of 8 December.'], 'ad'),
            ('email', 'group.b@riverside.edu', 'careers@riverside.edu',
             '28/11/2025', 'Before you apply',
             ['Dear students,', '',
              'Two things before you send an application.',
              'First, a job of more than 15 hours a week will damage your grades. The data '
              'from the last four years is very clear about this.',
              'Second, ask a teacher for a reference early. Nobody will write one well in '
              'a day.',
              '', 'The Careers Service'])],
        guided=[
            ('How many hours a week is the library job?',
             ('6', '8', '10', '12'), 1,
             '8 hours a week, evening shift.'),
            ('How much does the cafeteria job pay per hour?',
             ('11.00', '11.50', '12.00', '15.00'), 0,
             'Cafeteria assistant ... 11.00 per hour.'),
            ('Which job needs no experience?',
             ('the library job', 'the cafeteria job', 'both', 'neither'), 0,
             'Library assistant ... No experience needed.'),
            ('What do you send to apply?',
             ('a CV only', 'a CV and one reference', 'a certificate', 'an interview'), 1,
             'Send a CV and one reference to the careers service.')],
        exam=[
            ('Which job pays more in a week?',
             ('the library job', 'the cafeteria job', 'they are the same',
              'it does not say'), 1,
             '8 x 11.50 is 92. 12 x 11.00 is 132. The cafeteria job pays more.'),
            ('Which job pays more per hour?',
             ('the library job', 'the cafeteria job', 'they are the same',
              'it does not say'), 0,
             '11.50 is more than 11.00 per hour, even though the week is smaller.'),
            ('When is the deadline for an application?',
             ('1 December', '5 December', '8 December', '15 December'), 1,
             'Send a CV and one reference ... by 5 December.'),
            ('When are the interviews?',
             ('the week of 1 December', 'the week of 5 December',
              'the week of 8 December', 'in January'), 2,
             'Interviews are in the week of 8 December.'),
            ('How many hours a week will damage your grades?',
             ('more than 8', 'more than 12', 'more than 15', 'more than 20'), 2,
             'A job of more than 15 hours a week will damage your grades.'),
            ('What does the careers service say about a reference?',
             ('ask for it on the day', 'ask a teacher early', 'you do not need one',
              'the service writes it'), 1,
             'Ask a teacher for a reference early.')]),

    r3=dict(
        sub='What you will do next',
        title='The Question Nobody Can Answer For You',
        words=175,
        paras=[
            'Every careers service in the world gets the same question, and it is always '
            'the wrong one. Students ask which subject will get them a job. Nobody can '
            'answer that, because the jobs of the next ten years are not all here yet.',
            'The research indicates something more important. Across every subject, the '
            'student still interested in the third year finishes strongly. That is a '
            'smaller thing than a career plan and a much better '
            'source of energy. Interest keeps a person reading at eleven at night. A '
            'salary in six years does not.',
            'So the better question is simpler. Which of these subjects will you '
            'still want to read about when nobody is making you? The answer is individual '
            'and nobody else can give it to you. A careers service can show you the data, '
            'the income and the shape of a kind of work. It cannot tell you what will '
            'still interest you. That is the one factor it all turns on. It is also the '
            'one thing you already know about yourself.'],
        skill=('The question behind the question', [
            'A text that says students ask the wrong question will give you the right one.',
            'The right question is usually in the last paragraph.',
            'Watch for but, so and the better question. They mark the turn.',
            'A question about what a service cannot do points at the last two lines.']),
        guided=[
            ('What question do students ask?',
             ('how much will I earn', 'which subject will get me a job',
              'how long is the course', 'where should I study'), 1,
             'Students ask which subject will get them a job.'),
            ('Why can nobody answer it?',
             ('the service is busy', 'the jobs of the next ten years are not all here yet',
              'students do not listen', 'the data is wrong'), 1,
             'Because the jobs of the next ten years are not all here yet.'),
            ('Who finishes strongly?',
             ('students with a plan', 'students still interested in the third year',
              'the students with a job', 'the students with the best grades'), 1,
             'A student still interested in the third year finishes strongly.'),
            ('What keeps a person reading at eleven at night?',
             ('a salary', 'interest', 'a deadline', 'a careers service'), 1,
             'Interest keeps a person reading at eleven at night.')],
        exam=[
            ('A career plan is',
             ('a bigger thing than interest', 'a smaller thing than interest',
              'the same as interest', 'not mentioned'), 0,
             'Interest is a smaller thing than a career plan, so the plan is bigger.'),
            ('What is a better source of energy?',
             ('a salary', 'interest', 'a plan', 'a degree'), 1,
             'A much better source of energy.'),
            ('What is the better question?',
             ('which subject pays most', 'which subject will you still want to read about',
              'which subject is easiest', 'which subject is shortest'), 1,
             'Which of these subjects will you still want to read about?'),
            ('The answer to that question is',
             ('in the data', 'individual', 'the same for everybody', 'at the careers '
              'service'), 1,
             'The answer is individual and nobody else can give it to you.'),
            ('What can a careers service show you?',
             ('which subject will hold you', 'the data, the income and the structure',
              'your grades', 'your future'), 1,
             'A careers service can show you the data, the income and the structure.'),
            ('What can it not tell you?',
             ('the income', 'the structure', 'which subject will still hold you',
              'the data'), 2,
             'It cannot tell you which subject will still hold you in ten years.'),
            ('What is the one factor the whole thing turns on?',
             ('money', 'the course', 'interest', 'the careers service'), 2,
             'That is the one factor the whole thing turns on, about interest.')]),

    l1=dict(
        sub='A part-time job',
        caption='Two students talk about a job and an interview',
        skill=('Plans and promises', [
            'Going to is for a plan you have already made.',
            'Will is for a decision in the moment, or a promise.',
            'Listen for the difference: I am going to apply, I will send it tonight.',
            'A question about a plan wants the going to sentence.']),
        warm=[
            ('What are you going to do after the course?',
             ('I am going to work for a year.', 'At four.', 'Yes, I am.',
              'In the library.'), 0,
             'What are you going to ...? asks about a plan.'),
            ('Will you send the application today?',
             ('Yes, I will.', 'In December.', 'Twelve hours.', 'Yes, I am.'), 0,
             'Will you ...? takes Yes, I will or No, I will not.'),
            ('Which job is better?',
             ('The cafeteria one.', 'At eleven.', 'Yes, it is.', 'On Tuesday.'), 0,
             'Which ...? asks you to compare and choose one.')],
        script=[
            ('Woman', 'Are you going to apply for one of the college jobs?'),
            ('Man', 'I am going to apply for the library one. Eight hours is enough.'),
            ('Woman', 'The cafeteria job pays more in a week.'),
            ('Man', 'It does, but it is twelve hours and three of my modules have exams '
                    'in January.'),
            ('Woman', 'That is fair. The library one is quieter as well.'),
            ('Man', 'And I can read there. Have you sent your application yet?'),
            ('Woman', 'Not yet. I need a reference and Dr Patel is away until Monday.'),
            ('Man', 'The deadline is the fifth.'),
            ('Woman', 'I know. I will email her tonight and ask for it on Monday morning.'),
            ('Man', 'Good. The interviews are the week after, so there is time.'),
            ('Woman', 'Are you nervous about the interview?'),
            ('Man', 'A little. But they are going to ask about my experience, and I worked '
                    'in a shop for two years. I will be all right.')],
        items=[
            ('Which job is the man going to apply for?',
             ('the cafeteria job', 'the library job', 'both', 'neither'), 1,
             'I am going to apply for the library one.'),
            ('Why not the cafeteria job?',
             ('it pays less per hour', 'it is twelve hours and he has exams',
              'it is too far', 'it has no training'), 1,
             'It is twelve hours and three of my modules have exams in January.'),
            ('What else does he say about the library job?',
             ('it pays more', 'it is quieter and he can read', 'it is longer',
              'it needs experience'), 1,
             'The library one is quieter as well. And I can read there.'),
            ('Why has the woman not applied yet?',
             ('she is not interested', 'she needs a reference', 'the deadline is over',
              'she has a job'), 1,
             'I need a reference and Dr Patel is away until Monday.'),
            ('What will the woman do tonight?',
             ('send the application', 'email Dr Patel', 'go to the careers service',
              'nothing'), 1,
             'I will email her tonight.'),
            ('Why is the man not very nervous?',
             ('he knows the interviewer', 'he worked in a shop for two years',
              'the job is easy', 'he has a reference'), 1,
             'They are going to ask about my experience, and I worked in a shop for two '
             'years.')]),

    l2=dict(
        sub='Choosing a subject',
        caption='An announcement about choosing modules',
        poster=['MODULE CHOICE', 'Open 1 – 12 December',
                'Talk to your tutor first'],
        skill=('A deadline and a warning', [
            'An announcement about a choice gives a window and a consequence.',
            'The consequence is what happens if you do nothing. Listen for it.',
            'Advice in an announcement usually comes as should, not must.',
            'A question about what happens if you are late wants the last part.']),
        warm=[
            ('When does module choice open?',
             ('On the first of December.', 'In the library.', 'Yes, it does.',
              'Four modules.'), 0,
             'When asks for a date.'),
            ('Will the system close on the twelfth?',
             ('Yes, it will.', 'In Block C.', 'Three modules.', 'Yes, it is.'), 0,
             'Will it ...? takes Yes, it will.'),
            ('What should I do first?',
             ('Talk to your tutor.', 'At four.', 'Yes, you should.', 'In January.'), 0,
             'What should I do? asks for advice.')],
        script=[('Woman', 'This is an announcement about module choice for next year. The '
                          'system is open from the first until the twelfth of December. '
                          'You choose four modules and you can change them once before '
                          'the end of January. Talk to your tutor before you choose, '
                          'because some modules require a module from this year and the '
                          'system will not tell you that. If you choose nothing by the '
                          'twelfth, the office will choose for you, and the modules that '
                          'are still available in the middle of December are not the ones '
                          'you want.')],
        items=[
            ('When is the system open?',
             ('1 – 12 December', '1 – 12 January', '12 – 31 December',
              'all year'), 0,
             'The system is open from the first until the twelfth of December.'),
            ('How many modules do you choose?',
             ('two', 'three', 'four', 'five'), 2,
             'You choose four modules.'),
            ('When can you change them?',
             ('never', 'once before the end of January', 'twice', 'any time'), 1,
             'You can change them once before the end of January.'),
            ('Why should you talk to your tutor?',
             ('the tutor chooses', 'some modules require a module from this year',
              'the system is closed', 'the office is busy'), 1,
             'Some modules require a module from this year and the system will not tell '
             'you that.'),
            ('What happens if you choose nothing?',
             ('nothing', 'the office will choose for you', 'you repeat the year',
              'you lose your place'), 1,
             'The office will choose for you.')]),

    l3=dict(
        sub='What you will do next',
        caption='A short talk about plans after the course',
        board=['AFTER THIS COURSE', 'Volume 1 → B1 → B2',
               'the test is not the goal', 'what changes next'],
        skill=('A talk that looks forward', [
            'A talk about the future uses will and going to and a lot of numbers.',
            'The numbers here are levels and months, not money.',
            'The last part of a talk like this is usually advice for tomorrow.',
            'A question about what changes wants the list in the middle.']),
        warm=[
            ('Will the next book be harder?',
             ('Yes, it will.', 'In January.', 'Four modules.', 'Yes, it is.'), 0,
             'Will it ...? takes Yes, it will.'),
            ('Are you going to take the test this year?',
             ('No, I am not.', 'In the library.', 'Yes, I do.', 'Two hours.'), 0,
             'Are you going to ...? takes Yes, I am or No, I am not.'),
            ('What comes after this book?',
             ('Volume 1.', 'At four.', 'Yes, it does.', 'In December.'), 0,
             'What comes after ...? asks for the next thing.')],
        script=[('Man', 'You are at the end of this book, so let us be honest about where '
                        'you are. You are not ready to sit the TOEFL test, and you were '
                        'never going to be after ten units. What you are ready for is '
                        'Volume 1, and that is a real thing. From here the '
                        'road is clear. Volumes 1 and 2 will take you to B1, and that is the '
                        'level most people sit the test at. Volumes 3 and 4 will take you '
                        'to B2, and at B2 a good score becomes normal. Three '
                        'things will change in Volume 1. The reading passages will be '
                        'longer, at about two hundred and sixty-five words. The '
                        'vocabulary will come from the Academic Word List, not from the '
                        'general one. And nobody will give you a word bank. The '
                        'shape of every unit will not change at all, and that is the part you '
                        'already own.')],
        items=[
            ('What does the speaker say about the test?',
             ('you are ready', 'you are not ready to sit it', 'you should book it',
              'it is easy'), 1,
             'You are not ready to sit the TOEFL test.'),
            ('What are you ready for?',
             ('the test', 'Volume 1', 'Volume 3', 'a job'), 1,
             'What you are ready for is Volume 1.'),
            ('Volumes 1 and 2 take you to',
             ('A2', 'B1', 'B2', 'C1'), 1,
             'Volumes 1 and 2 will take you to B1.'),
            ('How long will the reading passages be?',
             ('about 110 words', 'about 175 words', 'about 265 words',
              'about 400 words'), 2,
             'At about two hundred and sixty-five words.'),
            ('Where will the vocabulary come from?',
             ('the general list', 'the Academic Word List', 'the glossary',
              'the careers service'), 1,
             'The words will come from the Academic Word List.'),
            ('What will not change?',
             ('the passages', 'the vocabulary', 'the shape of every unit', 'the word bank'), 2,
             'The shape of every unit will not change at all.')]),

    sp=[
        dict(sub='Choosing a subject',
             focus='the weak form of going to, and will',
             skill=('Gonna and I’ll', [
                 'Going to is almost always said as one squeezed word in speech.',
                 'Will is usually just ’ll: I’ll send it, she’ll be there.',
                 'The strong word is the verb after them, not the will itself.',
                 'Won’t is always strong, like cannot. That is how you hear it.']),
             repeat=['I am going to apply.', 'I will send it tonight.',
                     'She is going to study law.',
                     'I will email my tutor before Monday.',
                     'I am going to work for a year before the next course.',
                     'He will not change his modules, because the deadline is over.',
                     'I am going to choose the subject I still want to read about.'],
             theme='your plans',
             qs=['First, what are you going to do after this course?',
                 'Tell me about a plan you have for this year.',
                 'Some people plan five years ahead and some plan one month. Which are '
                 'you, and why?',
                 'Finally, what will you do if your plan does not work?'],
             frames=['After this course I am going to ... .',
                     'This year I am going to ... , because ... .',
                     'I plan about ... ahead, because ... .',
                     'If my plan does not work, I will ... .'],
             model=[(1, 'After this course I am going to start Volume 1 and take the test '
                        'in about two years.'),
                    (2, 'This year I am going to find a part-time job, because I want the '
                        'experience and I need the money.'),
                    (3, 'I plan about one year ahead, because five years ago I planned '
                        'five years and almost none of it happened.'),
                    (4, 'If my plan does not work, I will take a year, work, and start '
                        'again. A year is not a long time at my age.')],
             selfcheck=['I used going to for plans and will for decisions',
                        'I said going to quickly, not word by word',
                        'I gave a reason after my opinion']),
        dict(sub='A part-time job',
             focus='comparing two things out loud',
             skill=('Make the comparison clear', [
                 'Say both things: the cafeteria job is longer than the library job.',
                 'Do not drop the than. It is the word the listener waits for.',
                 'For long adjectives use more: more interesting, more difficult.',
                 'Never say *more longer*. One comparison per adjective.']),
             repeat=['This job is better.', 'The library job is quieter.',
                     'The cafeteria job pays more.',
                     'Eight hours is easier than twelve hours.',
                     'The evening shift is quieter than the lunch shift.',
                     'A job with fewer hours is better for a student with exams.',
                     'The library job pays more per hour, but the cafeteria job pays more '
                     'in a week.'],
             theme='work and study together',
             qs=['To start, do you have a job, or did you have one?',
                 'Tell me about the best job or the worst job you know about.',
                 'Some people say students should not work. Do you agree, and why?',
                 'Finally, what is better for a student, a quiet job or an interesting '
                 'one?'],
             frames=['I ... a job. It is ... .',
                     'The best job I know is ... , because ... .',
                     'I ... agree, because ... .',
                     'I think a ... job is better, because ... .'],
             model=[(1, 'I have a job in a shop on Saturday. It is eight hours and the '
                        'wage is not good, but the people are.'),
                    (2, 'The best job I know is my cousin’s. He works in a library '
                        'and he reads for two of his six hours.'),
                    (3, 'I do not agree. Students need the money, and a job teaches you '
                        'things a course cannot.'),
                    (4, 'I think a quiet job is better for a student, because an '
                        'interesting job takes your head as well as your hours.')],
             selfcheck=['I used than in every comparison',
                        'I used -er for short words and more for long ones',
                        'I answered all four questions']),
        dict(sub='What you will do next',
             focus='sounding sure about the future',
             skill=('Say the plan, then the reason', [
                 'A plan with a reason sounds like a plan. Without one it sounds like a '
                 'wish.',
                 'Use because, so and but to join the pieces.',
                 'If you do not know, say so and then say what you will do to find out.',
                 'Finish on the plan, not on the doubt.']),
             repeat=['I will start Volume 1 next month.',
                     'I am going to take the test next year.',
                     'My goal is four or more in the test.',
                     'I will read for thirty minutes every day, because that is what works.',
                     'I am going to ask my tutor about the next course in January.',
                     'If my grades improve, I will apply for the internship.',
                     'I am not sure yet, so I will talk to the careers service first.'],
             theme='the next two years',
             qs=['First, what is your goal for the next two years?',
                 'Tell me the first step you are going to take.',
                 'Some people say a plan without a date is only a wish. Do you agree?',
                 'Finally, who will you ask for help, and what will you ask them?'],
             frames=['My goal is ... , because ... .',
                     'The first step is ... . I am going to ... .',
                     'I ... agree, because ... .',
                     'I will ask ... , and I will ask them about ... .'],
             model=[(1, 'My goal is to finish Volume 2 and sit the test, because I need a '
                        'score for a university application.'),
                    (2, 'The first step is Volume 1. I am going to start it next Monday '
                        'and do two units a month.'),
                    (3, 'I agree. Every plan I kept had a date on it, and every plan I '
                        'did not keep was a nice idea.'),
                    (4, 'I will ask my tutor, and I will ask her the universities that take '
                        'my score, and about what else they want.')],
             selfcheck=['I gave a date or a number in my plan',
                        'I gave a reason after every plan',
                        'I finished on the plan, not on the doubt'])],

    w1=dict(
        sub='What you will do next',
        skill=('Questions about the future', [
            'Are you going to ...? uses the be question you learned in Unit 1.',
            'Will you ...? puts will in front of the person and nothing else moves.',
            'Question word first: What are you going to study? When will you apply?',
            'Never put do or does with will or going to.']),
        guided=[
            ('I am going to apply for the library job.',
             ['what', 'are', 'you', 'going to', 'apply', 'for'],
             'What are you going to apply for?'),
            ('I will send it tonight.', ['when', 'will', 'you', 'send', 'the application', 'exactly'],
             'When will you send the application exactly?'),
            ('The cafeteria job is longer.', ['which', 'job', 'is', 'longer', 'than',
                                              'the other'],
             'Which job is longer than the other?')],
        exam=[
            ('She is going to study law.', ['what', 'is', 'she', 'going to', 'study',
                                            'next year'],
             'What is she going to study next year?'),
            ('I will email my tutor on Monday.', ['who', 'will', 'you', 'email', 'on',
                                                  'Monday'],
             'Who will you email on Monday?'),
            ('The deadline is the fifth of December.', ['when', 'is', 'the deadline',
                                                        'for', 'the library',
                                                        'application'],
             'When is the deadline for the library application?'),
            ('The library job is quieter.', ['which', 'job', 'is', 'quieter', 'in',
                                             'your opinion'],
             'Which job is quieter in your opinion?'),
            ('I am going to work for a year.', ['are', 'you', 'going to', 'work', 'for',
                                                'a year'],
             'Are you going to work for a year?'),
            ('He will not change his modules.', ['will', 'he', 'change', 'his modules',
                                                 'before', 'January'],
             'Will he change his modules before January?'),
            ('Volume 1 is harder than this book.', ['how much', 'harder', 'is', 'Volume 1',
                                                    'than', 'this book'],
             'How much harder is Volume 1 than this book?')]),

    w2=dict(
        sub='A part-time job',
        to='careers@riverside.edu',
        date='02/12/2025',
        subject='Application — library assistant',
        target=72,
        scenario=['You want the library assistant job: 8 hours a week, evening shift.',
                  'You worked in a shop for two years. Write to the careers service.'],
        bullets=['say which job you are applying for',
                 'say what experience you have',
                 'say when you are available and ask about the interview'],
        skill=('An application is not a life story', [
            'Name the job in the first line. They have four jobs and a hundred emails.',
            'Give one piece of experience and say how long it was.',
            'Say when you are free. A good application saves the reader a question.',
            'End with one question, about the next step.']),
        model=['Dear Careers Service,', '',
               'My name is Ana Ruiz and I am in Group B. I would like to apply for the '
               'library assistant job.',
               'I worked in a shop for two years at home, so I have experience with '
               'people and with a till.',
               'I am available on Tuesday and Thursday evenings, and I am going to send '
               'my CV and a reference from Dr Patel this week.',
               'When will the interviews be?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['The job is named in the first three lines, where the reader looks.',
               'The experience is one job, with a length and a reason it is relevant.',
               'The days match the shift in the advertisement exactly.',
               'The question is about the next step, so the reply moves things forward.'],
        frame=['# Start', 'Dear Careers Service,', '',
               '# Who you are and which job',
               'My name is ______________ . I would like to apply for ______________ .', '',
               '# Your experience — one job, with a length',
               'I worked ______________ for ______________ , so I have experience with '
               '______________ .', '',
               '# When you are free, and what you will send',
               'I am available on ______________ , and I am going to send '
               '______________ .', '',
               '# Your question', 'When ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='Choosing a subject',
        prof='Dr Patel',
        target=85,
        question='Should students choose a subject because it leads to a well-paid job, or '
                 'because they are interested in it? Give one reason.',
        posts=[('Yusuf', 'm', 'Money. I am the first person in my family at a university '
                              'and I am not going to study something beautiful and no use. '
                              'A salary is not a small thing when nobody at home has one.'),
               ('Mei', 'w', 'Interest, but not for a romantic reason. Three of my friends '
                            'left a well-paid course in the second year. The course that '
                            'you find boring is the one you do not finish.')],
        skill=('A question with two good answers', [
            'Both posts here are serious. Do not choose one and ignore the other.',
            'Say what each one gets right, then say where you stand.',
            'Use will and going to for what you yourself plan to do.',
            'Eighty-five words is about eight short sentences.']),
        starters=['I agree with Mei, because ...',
                  'Yusuf is right that ...',
                  'In my own case I am going to ...',
                  'The real answer is probably ...'],
        model=['Yusuf is right that a salary matters. People say it does not matter, and '
               'they always have one.',
               'But Mei is right about the thing that decides it. A course you do not '
               'finish pays nothing at all.',
               'In my own case I am going to choose the subject I still read about when '
               'nobody is making me, and then look for the best-paid work inside it.',
               'The real answer is probably that the two questions are one question, and '
               'the order you ask them in is what changes.'],
        model_words=89,
        frame=['# What the first person gets right',
               '______________ is right that ______________ .', '',
               '# What the other person gets right',
               'But ______________ is right about ______________ .', '',
               '# Where you stand — use going to',
               'In my own case I am going to ______________ , because ______________ .', '',
               '# Your last line',
               'The real answer is probably ______________ .']),

    gram=dict(
        title='going to and will · comparatives · and, but, because, so',
        headers=['Form', 'Example'],
        rows=[['going to = a plan', 'I am going to apply for the library job.'],
              ['will = a decision now', 'I will email her tonight.'],
              ['question', 'Are you going to apply? Will you send it today?'],
              ['negative', 'I am not going to work. He will not change.'],
              ['short adjective + -er', 'cheap → cheaper, easy → easier'],
              ['long adjective + more', 'more difficult, more interesting'],
              ['joining words', 'and, but, because, so']],
        notes=['Going to looks back at a decision you already made. Will looks at this '
               'moment. Both talk about the future, and that is why they feel the same at '
               'first.',
               'A comparison needs than. Without it the sentence is only half said: this '
               'job is longer than that one, not *this job is longer*.',
               'Good and bad are irregular: good → better, bad → worse. These '
               'two come up constantly, so learn them on their own.'],
        watch='Never say *more longer* or *more easier*. Use -er or more, never both. And '
              'never put do or does with will: *Do you will come?* is not English.',
        ex=[('Write going to or will.', [
            'I __________ apply for the library job. (I decided last week)',
            'That is a good idea. I __________ do the same. (deciding now)',
            'She __________ study law next year. (her plan)',
            'The phone is ringing. I __________ answer it. (deciding now)',
            'We __________ move to a new flat in July. (our plan)',
            'I promise I __________ send it tonight.'],
            ['am going to', 'will', 'is going to', 'will', 'are going to', 'will']),
            ('Write the comparative.', [
                'This job is __________ (long) than that one.',
                'The library is __________ (quiet) than the canteen.',
                'This module is __________ (difficult) than the last one.',
                'Her grade is __________ (good) than mine.',
                'The cafeteria job is __________ (easy) to get.',
                'The weather today is __________ (bad) than yesterday.'],
             ['longer', 'quieter', 'more difficult', 'better', 'easier', 'worse']),
            ('Write and, but, because or so.', [
                'I applied for the library job __________ it is quieter.',
                'The job pays well, __________ it is twelve hours.',
                'I need a reference, __________ I will email my tutor tonight.',
                'I sent my CV __________ a reference.'],
             ['because', 'but', 'so', 'and'])],
        bas='Build a Sentence in the real test is full of future questions, because they '
            'move two or three words at once: What are you going to do? and When will you '
            'send it? Both of them follow the same rule you learned in Unit 1.'),

    sound=dict(
        title='Everything this book has taught you about sound, in one page',
        intro='This is the last Sound and Spelling page. It puts the nine before it in one '
              'place, because every one of them comes up in every minute of the Listening '
              'section, and because you will want one page to come back to.',
        rows=[('letters', ['A H J K', 'B C D E G P T V'],
               'Unit 1. People spell names at you and they do it fast.'),
              ('numbers', ['thirteen / thirty', 'fourteen / forty'],
               'Unit 2. The -teen is longer. Write the figure, not the word.'),
              ('-s endings', ['starts /s/', 'begins /z/', 'finishes /ɪz/'],
               'Unit 3. The third one is a whole extra syllable.'),
              ('word stress', ['FAMily', 'accomMOdation'],
               'Unit 4. One strong part in every long word, and -ation always takes it.'),
              ('-ed endings', ['stopped /t/', 'rained /d/', 'wanted /ɪd/'],
               'Unit 7. Again, only the third one adds a beat.'),
              ('weak forms', ['can /kən/', 'to /tə/', 'and /ən/'],
               'Units 5 and 9. The small words almost disappear, and the negatives do not.')],
        hear=[('Do you hear thirteen or thirty?', 'thirty'),
              ('Is the ending /s/, /z/ or /ɪz/? — finishes', '/ɪz/'),
              ('Is the ending /t/, /d/ or /ɪd/? — wanted', '/ɪd/'),
              ('Do you hear can or cannot?', 'can'),
              ('Do you hear will or won’t?', 'won’t'),
              ('Do you hear going to or gonna?', 'gonna')],
        say=['Spell your full name and your address out loud.',
             'Say the numbers 13 to 19, then 30 to 90.',
             'Say five past verbs with each of the three -ed sounds.',
             'Say your plan for next year in three sentences with going to.']),

    builder=dict(
        title='Joining two sentences into one',
        rule='Four words do almost all the joining in English: and adds, but turns, '
             'because gives the reason, so gives the result. A paragraph of five short '
             'sentences with no joining words reads like a list. A paragraph where every '
             'sentence is joined reads like one long breath. Mix them.',
        pairs=[['The job pays well. It is twelve hours.',
                'The job pays well, but it is twelve hours.'],
               ['I chose the library job. It is quieter.',
                'I chose the library job because it is quieter.'],
               ['I need a reference. I will email my tutor.',
                'I need a reference, so I will email my tutor.'],
               ['I sent my CV. I sent a reference.', 'I sent my CV and a reference.'],
               ['Because the deadline is the fifth.',
                'I will send it today because the deadline is the fifth.']],
        watch='Because gives a reason and so gives a result, and they point in opposite '
              'directions. I was late because the bus broke down. The bus broke down, so I '
              'was late. Same two facts, two different sentences.',
        ex=[('I applied for the job. It is quiet.', 'I applied for the job because it is quiet.'),
            ('The deadline is Friday. I will write it tonight.',
             'The deadline is Friday, so I will write it tonight.'),
            ('The job pays well. The hours are long.',
             'The job pays well, but the hours are long.'),
            ('I sent a CV. I sent a reference.', 'I sent a CV and a reference.'),
            ('I chose this subject because I am interested in it.',
             'yes — this one is already correct'),
            ('My tutor is away. I will ask her on Monday.',
             'My tutor is away, so I will ask her on Monday.')]),

    typing=dict(
        title='Typing an email in seven minutes',
        intro='This is the last typing page, and it is a test, not a lesson. In the real '
              'exam you have seven minutes for the email and ten for the discussion post, '
              'and nobody gives you more.',
        keys='qwertyuiopasdfghjklzxcvbnm',
        caption='Set a clock for seven minutes and type the model email from the Writing '
                'page of this unit. Do not correct your spelling until the end. Then count '
                'your words and write the number in the box below.',
        drill=['Dear Careers Service, I would like to apply for the library assistant job.',
               'I worked in a shop for two years, so I have experience with people.',
               'I am available on Tuesday and Thursday evenings. When will the interviews '
               'be?'],
        target=18),

    study=dict(
        title='How to use Volume 1',
        intro='You have finished this book, so here is the only study advice that matters '
              'now: the next book is built exactly like this one, and that is the whole '
              'point. You are not starting again. You are carrying on.',
        steps=['Do one unit a week. Sixteen pages is about five hours, and five hours a '
               'week is a real course.',
               'Read the academic passage twice before you look at a single question. In '
               'this book you could answer from memory. In Volume 1 you cannot.',
               'Keep the vocabulary notebook from Unit 1. The Academic Word List goes in '
               'the same three columns.',
               'Use the glossary of this book when a general word stops you. That is what '
               'it is for, and it is not cheating.',
               'When a unit is hard, do the Reading and the Listening and leave Speaking '
               'and Writing for the next day. Half a unit done well beats a whole unit '
               'done at midnight.'],
        tip='Read the first academic passage of Volume 1 Unit 1 now and count the words '
            'you do not know. Expect about twenty. Most of them will be words from the '
            'subject itself — ports, valleys, railroads — and not grammar. That '
            'is the gap this book does not close, and it is exactly what Foundation 2 '
            'is for.'),

    rev=dict(
        vocab=[('one part of a course, with its own exam', 'module'),
               ('a letter about you from a teacher', 'reference'),
               ('the paper that lists your study and work', 'CV'),
               ('a short time working in a company to learn', 'internship'),
               ('the office that helps students find work', 'careers service'),
               ('the money a job pays you', 'salary'),
               ('the knowledge a job or a life gives you', 'experience'),
               ('there to be used or taken', 'available'),
               ('facts and numbers you can work with', 'data'),
               ('almost the same', 'similar'),
               ('one single person', 'individual'),
               ('careful study to find out something new', 'research')],
        gram=[('I __________ apply tomorrow. (my plan)', 'am going to'),
              ('That is a good idea. I __________ do the same. (now)', 'will'),
              ('This job is __________ (long) than that one.', 'longer'),
              ('This module is __________ (difficult) than the last one.', 'more difficult'),
              ('Her grade is __________ (good) than mine.', 'better'),
              ('I applied __________ it is quieter.', 'because'),
              ('The job pays well, __________ the hours are long.', 'but'),
              ('I need a reference, __________ I will email my tutor.', 'so')],
        mini=[
            ('The library job is',
             ('8 hours a week', '12 hours a week', '15 hours a week', '6 hours a week'), 0,
             '8 hours a week, evening shift, in the advertisement.'),
            ('The cafeteria job pays more because',
             ('the wage is higher', 'the week is longer', 'it has training',
              'it needs experience'), 1,
             '11.00 for 12 hours is more in a week than 11.50 for 8.'),
            ('The passage says the better question is',
             ('which subject pays most', 'which subject will you still want to read about',
              'which subject is easiest', 'which subject is shortest'), 1,
             'Which of these subjects will you still want to read about?'),
            ('Which sentence is correct?',
             ('This job is more longer.', 'This job is longer than that one.',
              'This job is more long.', 'This job is longer that one.'), 1,
             'Use -er or more, never both, and never drop the than.'),
            ('Which sentence is correct?',
             ('Do you will come?', 'Will you come?', 'You will come?',
              'Are you will come?'), 1,
             'Will goes in front of the person and nothing else moves.'),
            ('After this book you are ready for',
             ('the TOEFL test', 'Volume 1', 'Volume 3', 'a job'), 1,
             'What you are ready for is Volume 1, in the talk.')]),

    tip='This is the last tip in this book, so it is the one about the book. Do not put it '
        'away. The glossary, the irregular verbs and the Sound and Spelling pages are the '
        'three things you will come back to all the way through Volume 1, and a book you '
        'have already read is the fastest reference you will ever own.',
)
