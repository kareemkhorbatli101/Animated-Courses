# -*- coding: utf-8 -*-
"""Unit 1 - Education and Learning. IELTS Volume 1, band 5.0."""

_FREE = dict(kind='bar',
             title='Adults taking free online courses, by subject',
             sub='one town, 2024, thousands of people',
             ylab='people (thousands)',
             cats=['Computing', 'English', 'Business',
                   'Health and care', 'History'],
             series=[('Adults enrolling', [18.4, 14.1, 11.7, 9.3,
                                           3.8])])

UNIT = dict(
 n=1, vol=1, level='B1', band='5.0',
 theme='Education and Learning',
 opener=(
   'This is the first unit of the course, so it starts where most '
   'candidates start: with a form to fill in and a question you are not '
   'sure how to answer. You will enrol at a college, read what four '
   'students do the night before an exam, describe a bar chart, and '
   'finish with an argument about class size that has better evidence on '
   'both sides than most people think. The technique page is True, False '
   'or Not Given, which is the question type that loses the most marks in '
   'the whole paper.'),

 cycles=[
  dict(
   sub='Enrolling at a college',
   step=1,
   read=[
    dict(heading='Ashfield College: how to enrol',
         kind='Procedure notice',
         task='Flow-chart completion and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A notice is read for the order of the steps',
                ['Find the words that mark order: first, then, once, '
                 'after that, finally. They are the answers to a '
                 'flow-chart question almost every time.',
                 'One step in every notice has a condition on it. That '
                 'step is the one the questions ask about.']),
         paras=[
          'Apply online at least two weeks before your course starts. '
          'Paper forms are accepted but take longer and may not be '
          'processed in time.',
          'Once your application has been received, the college sends you '
          'a course code by email. Keep this code. You will need it at '
          'every later stage, and the office cannot find your file '
          'quickly without it.',
          'Then book an enrolment appointment. Appointments run from 9 to '
          '16 September, Monday to Friday, and there are evening '
          'appointments on Tuesdays for students who work during the '
          'day.',
          'Bring proof of your address and proof of your qualifications '
          'to the appointment. If you studied outside the United Kingdom, '
          'bring a translation as well as the original document. '
          'Photocopies are not accepted at this stage.',
          'At the appointment you pay the first part of the fee and have '
          'your photograph taken for your student card. The card is '
          'printed while you wait, so allow thirty minutes.',
          'Finally, collect your timetable from the department office. '
          'Timetables are not sent by email, because they change during '
          'the first week.'],
         items=[
          ('Apply online at least ____________ weeks before the course '
           'starts.', None, 'two',
           'Paragraph 1, and paper forms take longer than that.'),
          ('After applying, you receive a ____________ by email.', None,
           'course code', 'Paragraph 2, which you need at every later '
           'stage.'),
          ('Evening appointments are available on ____________.', None,
           'Tuesdays', 'Paragraph 3, for students who work in the day.'),
          ('What must students who studied abroad also bring?', None,
           'a translation',
           'Paragraph 4, as well as the original document.'),
          ('How long should you allow for the appointment?', None,
           'thirty minutes',
           'Paragraph 5, because the card is printed while you wait.'),
          ('Where do students collect their timetable?', None,
           'the department office',
           'Paragraph 6: timetables are not sent by email.')]),
    dict(heading='Fees, loans and hardship funds',
         kind='Information page', task='Matching features',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Full-time fees are £3,200 a year and may be paid in stages: '
          'half in September and half in January. Part-time fees are '
          '£1,450 a year and must be paid in full at enrolment.',
          'A student loan covers fees but not living costs. It is applied '
          'for through the national service and not through the college, '
          'and the college cannot speed up a decision that has been '
          'delayed.',
          'The hardship fund is different. It is college money, decided by '
          'the college, and it is for students whose situation has changed '
          'suddenly: a job lost, a family illness, a rise in rent. '
          'Payments are usually between £200 and £800.',
          'Students aged under 19 on 31 August pay no fees at all. This is '
          'decided by your age on that date and not by the date you '
          'enrol, which surprises several people every year.'],
         items=[
          ('Which may be paid in two parts?',
           ['full-time fees', 'part-time fees', 'the student loan',
            'the hardship fund'], 0,
           'Paragraph 1: half in September and half in January.'),
          ('Which is not applied for through the college?',
           ['full-time fees', 'part-time fees', 'the student loan',
            'the hardship fund'], 2,
           'Paragraph 2, through the national service instead.'),
          ('Which is for a situation that has changed suddenly?',
           ['full-time fees', 'part-time fees', 'the student loan',
            'the hardship fund'], 3,
           'Paragraph 3, such as a job lost or a family illness.'),
          ('Fees are not charged to students aged under 19 on '
           '____________.', None, '31 August',
           'Paragraph 4, which is decided by date rather than by '
           'enrolment.')])],
   listen=[
    dict(heading='Enrolling in person', part='Part 1',
         task='A conversation at a college office', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Clerk', 'Good morning. Are you enrolling?'),
          ('Student', 'Yes. I applied online last month.'),
          ('Clerk', 'Do you have your course code?'),
          ('Student', 'B D four one seven.'),
          ('Clerk', 'B D four one seven. That is Business Studies, '
           'part-time, evenings.'),
          ('Student', 'That is right.'),
          ('Clerk', 'Can I take your name?'),
          ('Student', 'Mariam Oduya-Clarke.'),
          ('Clerk', 'Could you spell the surname?'),
          ('Student', 'O-D-U-Y-A, then Clarke with an E.'),
          ('Clerk', 'Thank you. And your date of birth?'),
          ('Student', 'The ninth of March, two thousand and four.'),
          ('Clerk', 'So you were twenty on the thirty-first of August. '
           'That means you do pay fees, I am afraid. Under nineteen is '
           'free.'),
          ('Student', 'I expected that. How much is part-time?'),
          ('Clerk', 'One thousand four hundred and fifty pounds, and '
           'part-time has to be paid in full today.'),
          ('Student', 'Today? I thought I could pay in stages.'),
          ('Clerk', 'Only full-time students can do that. But if money is '
           'a problem, ask about the hardship fund at the desk by the '
           'door.'),
          ('Student', 'What is that for?'),
          ('Clerk', 'For people whose situation has changed suddenly. '
           'Payments are usually between two hundred and eight hundred '
           'pounds.'),
          ('Student', 'I will ask. When does the course start?'),
          ('Clerk', 'The twenty-third of September, at six o’clock, room '
           'C fourteen. And collect your timetable from the department '
           'office, not from here.')],
         items=[
          ('Course code: ____________', None, 'BD417',
           'Read back by the clerk as Business Studies, part-time.'),
          ('Surname: ____________', None, 'Oduya-Clarke',
           'Spelled out at the clerk’s request.'),
          ('Fee to pay today: £____________', None, '1450',
           'The part-time fee, payable in full.'),
          ('Hardship payments are usually between £200 and '
           '£____________.', None, '800',
           'For people whose situation has changed suddenly.'),
          ('Course starts: ____________ September', None, '23',
           'At six o’clock in the evening.'),
          ('Room: ____________', None, 'C14',
           'The room is given at the very end of the conversation.')])],
   speak=dict(
    part='Part 1', focus='Your studies and why you chose them',
    intro=('Two or three sentences for each answer. One real reason is '
           'better than three general ones.'),
    qs=['What are you studying at the moment?',
        'Why did you choose that subject?',
        'Do you prefer studying in the morning or the evening?',
        'What would you like to study in the future?'],
    shape=[('answer', 'Business studies, in the evenings, at a college '
            'near my home.'),
           ('support', 'I chose it because I work in a shop and I want '
            'to manage one.'),
           ('follow-up', 'The evening class suits me because I can keep '
            'my job while I study.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking the college to defer your place',
         prompt=('You have a place on a course but cannot start this '
                 'year. Write a letter to the college. In your letter: '
                 'say which course you have a place on; explain why you '
                 'cannot start; ask to keep your place for next year. '
                 'Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about my place on the part-time Business Studies '
          'course, code BD417, which starts on 23 September.',
          'I am sorry to say that I cannot start this year. My mother '
          'became ill in August and I am now looking after her in the '
          'evenings, which is when the course runs. Her treatment should '
          'finish in the spring, and my sister will be able to help from '
          'March.',
          'I would be grateful if you could confirm whether I can keep my '
          'place for next September. I understand that you may not be '
          'able to promise this, and I would still like to know what is '
          'possible.',
          'If my place cannot be kept, could you tell me when '
          'applications for next year open, so that I can apply again as '
          'early as possible? I would also like to know whether the fee I '
          'have already paid can be held or returned.',
          'Thank you for your help. I am sorry to give you this news so '
          'close to the start of term.',
          'Yours faithfully,',
          'Mariam Oduya-Clarke'],
         notes=[
          'The first sentence gives the course name and the code. A letter '
          'that makes the reader search for the file is answered more '
          'slowly and less helpfully.',
          'The reason is short and specific: when it started, why the '
          'evenings matter, when it will change. Three facts do more than '
          'a paragraph of apology.',
          'The writer asks a second question in case the answer to the '
          'first is no. That is the move that gets a useful reply from an '
          'office that cannot give you what you asked for.'],
         criterion=[('Course and code in the first sentence',
                     'Task Achievement'),
                    ('A reason given in three specific facts',
                     'Task Response'),
                    ('A second question in case the answer is no',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Indirect questions and polite requests',
    explain=('A question inside a statement is more polite, and the word '
             'order changes: no inversion and no auxiliary do.'),
    examples=['I would be grateful if you could confirm whether I can '
              'keep my place.',
              'Could you tell me when applications open?',
              'I would like to know whether the fee can be returned.',
              'I am writing to ask what documents I should bring.'],
    task='Rewrite each direct question as a polite indirect one.',
    items=[('Can I keep my place?',
            'I would be grateful if you could confirm whether I may keep '
            'my place.'),
           ('When do applications open?',
            'Could you tell me when applications for next year open?'),
           ('Will you give my money back?',
            'I would like to know whether the fee I have paid can be '
            'returned.'),
           ('What do I need to bring?',
            'I am writing to ask what documents I should bring to the '
            'appointment.'),
           ('Is there an evening class?',
            'Could you let me know whether an evening class is '
            'available?')]),
   vocab=[('defer', 'to put off until later'),
          ('prerequisite', 'something you must have done first'),
          ('pay in stages', 'to pay part of a cost at a time'),
          ('hardship fund', 'college money for students in difficulty'),
          ('registration', 'the act of joining a course officially'),
          ('timetable', 'a plan of what happens when'),
          ('semester', 'one of the parts a college year is divided '
           'into'),
          ('deadline', 'the last day something can be done')],
   expr=[('I would be grateful if you could confirm whether',
          'the polite request in a formal letter'),
         ('I am sorry to say that I cannot',
          'gives bad news clearly and politely'),
         ('if my place cannot be kept',
          'asks a second question in case the answer is no'),
         ('so that I can apply again as early as possible',
          'gives a reason for asking')],
   trans=['furthermore', 'in addition', 'however', 'finally'],
  ),

  dict(
   sub='How people study',
   step=2,
   read=[
    dict(heading='Four students, four ways of revising',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Tomasz: I read my notes again and again and I know now that '
          'it does not work. I feel as if I am learning because the page '
          'looks familiar. Familiar is not the same as known, and the exam '
          'finds out which one you have.',
          'B  Serena: I test myself. I cover the page and write down what '
          'I can remember, and the first time I do it the result is '
          'always worse than I expect. That bad feeling is the useful '
          'part, because it shows me exactly what to study.',
          'C  Olumide: I study with two friends and we explain things to '
          'each other. If I cannot explain it, I do not know it. The '
          'danger is that we talk about football for forty minutes '
          'first, so we now start with a timer.',
          'D  Priya: I work in short blocks of twenty-five minutes with my '
          'phone in another room. The phone is the whole trick. When it '
          'was on the desk I was studying for three hours and learning '
          'for one.'],
         items=[
          ('Which student says a method does not work?',
           ['Tomasz', 'Serena', 'Olumide', 'Priya'], 0,
           'Reading notes again and again, which only feels like '
           'learning.'),
          ('Which student finds an unpleasant result useful?',
           ['Tomasz', 'Serena', 'Olumide', 'Priya'], 1,
           'The bad feeling shows her what to study.'),
          ('Which student learns by explaining?',
           ['Tomasz', 'Serena', 'Olumide', 'Priya'], 2,
           'If he cannot explain it, he does not know it.'),
          ('Which student changed where something is kept?',
           ['Tomasz', 'Serena', 'Olumide', 'Priya'], 3,
           'The phone, now in another room.'),
          ('Olumide and his friends now use a timer.',
           ['True', 'False', 'Not Given'], 0,
           'He says they start with a timer because of the talking.',
           {1: 'False would need the text to say they stopped or never '
               'used one.', 2: 'Not Given is wrong because he says it in his own first '
               'sentence.'}),
          ('Priya studies for three hours every day.',
           ['True', 'False', 'Not Given'], 2,
           'She mentions three hours once, describing the past; no '
           'daily amount is given.',
           {0: 'True would need a daily figure; the three hours '
               'describe one past occasion.', 1: 'False would need the text to deny a daily amount, and '
               'it says nothing.'})])],
   listen=[
    dict(heading='Two students compare revision habits', part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 23-28',
         script=[
          ('Serena', 'How long did you revise last night?'),
          ('Tomasz', 'Four hours.'),
          ('Serena', 'And how much do you remember this morning?'),
          ('Tomasz', 'That is a cruel question.'),
          ('Serena', 'It is the only question. I did fifty minutes and I '
           'can tell you every heading.'),
          ('Tomasz', 'How?'),
          ('Serena', 'I close the book and write down what I remember. '
           'Then I open it and see what I missed.'),
          ('Tomasz', 'That sounds unpleasant, and it sounds slower '
           'than just reading the chapter.'),
          ('Serena', 'It is unpleasant, and that is why it works. Reading '
           'is comfortable, so it feels like learning, and it is mostly '
           'recognising.'),
          ('Tomasz', 'My real problem is that I never know where to '
           'start, so I start at page one every time.'),
          ('Serena', 'Start with the test, not with the notes. Try to '
           'answer a question first, badly, and then read to fix what you '
           'got wrong.'),
          ('Tomasz', 'Does it not waste time, getting it wrong?'),
          ('Serena', 'The opposite. You remember the correction much '
           'better than the first reading, and I only found that out this '
           'year.'),
          ('Tomasz', 'What about working with other people?'),
          ('Serena', 'Good for explaining, bad for discipline. Olumide '
           'and I lost forty minutes to football last Tuesday, so we use '
           'a timer now.'),
          ('Tomasz', 'And your phone?'),
          ('Serena', 'In the kitchen. Always, even when I am expecting '
           'a message. That is not willpower, it is distance.')],
         items=[
          ('Tomasz revised for ____________ hours the night before.',
           None, 'four', 'And he remembers very little of it this '
           'morning.'),
          ('Serena revised for ____________ minutes.', None, 'fifty',
           'And she can still name every heading from it.'),
          ('She says reading feels like learning but is mostly',
           ['guessing', 'recognising', 'copying', 'planning'], 1,
           'Which is why it is comfortable.'),
          ('She advises starting with the ____________ rather than the '
           'notes.', None, 'test',
           'Answering badly first and then reading to correct it.'),
          ('They lost ____________ minutes to football on Tuesday.',
           None, 'forty', 'Which is why they now use a timer.'),
          ('Serena keeps her phone in the ____________.', None,
           'kitchen', 'Which she calls distance rather than '
           'willpower.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Studying',
    longturn=[('The subject I want to talk about is statistics, which I '
               'studied in my second year at university. It was part of my '
               'course, so I could not avoid it.'),
              ('I studied it for two terms, from September until the following '
               'April, with one lecture and one practical class every week.'),
              ('It was difficult for two reasons. The first was the '
               'mathematics. I had not done any for three years, and the '
               'lecturer assumed we all remembered it. The second reason was '
               'worse: I could do the calculations without understanding what '
               'they were for. I could work out a number and then not be able '
               'to say what it told me.'),
              ('What I did about it was change the order I worked in. Instead '
               'of starting with the formula, I started with the question the '
               'data was supposed to answer, and only then looked for the '
               'method. I also found a study group, which helped more than '
               'anything, because explaining something badly to somebody else '
               'shows you exactly where the gap is. By the end of the year I '
               'was not brilliant at it, but I passed, and I still use some of '
               'it now.')],
    intro=('Short answers first, then the long turn. Say what was '
           'difficult before you say how you felt about it.'),
    cue=('Describe a subject you found difficult.',
         ['what the subject was', 'when you studied it',
          'why it was difficult',
          'and explain what you did about it']),
    qs=['Do you find studying easy?',
        'Where do you usually study?',
        'Now look at the card. You have one minute to make notes.',
        'Should schools teach students how to study?'],
    shape=[('answer', 'Mathematics, when I was about fifteen.'),
           ('support', 'It was difficult because each week depended on '
            'the week before.'),
           ('follow-up', 'If you missed one lesson you were lost for a '
            'month.'),
           ('support', 'What helped was doing problems instead of '
            'reading the book.'),
           ('follow-up', 'I still think I would have been fine if '
            'somebody had told me that two years earlier.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Studying alone or studying in a group',
         prompt=('Some students prefer to study alone and others prefer '
                 'to study in a group. Discuss both views and give your '
                 'own opinion. Write at least 250 words.'),
         model=[
          'Some students work best on their own, while others prefer to '
          'study in a group. I believe each way suits a different stage '
          'of learning, and that the mistake is to use only one of '
          'them.',
          'Those who prefer groups say that explaining something is the '
          'best way to find out whether you understand it. This is true '
          'in my experience. When I try to explain an idea to a friend '
          'and stop in the middle, I have learned something about my own '
          'knowledge that no amount of reading would have shown me. '
          'Groups also help with motivation, because it is harder to '
          'stop working when other people are there.',
          'Those who prefer working alone make a different point. A group '
          'is slow, and it is easy to spend an hour talking about other '
          'things. More importantly, the hardest part of learning is '
          'testing yourself, and that has to be done in silence. You '
          'cannot find out what you do not know while somebody else is '
          'explaining it to you.',
          'In my opinion both views are right about different stages. '
          'When I meet a subject for the first time, a group helps me '
          'understand it. When I am preparing for an examination, I have '
          'to be alone, with the book closed, writing down what I can '
          'remember.',
          'In conclusion, I would advise students to study in a group '
          'while they are learning something new, and alone while they '
          'are checking what they have learned. The two are not '
          'opposites; they belong at different points in the same '
          'week.'],
         notes=[
          'Structure 2: the other view first, then your own. Both sides '
          'are given a real reason rather than a sentence, which is what '
          'this structure needs to work.',
          'The writer’s position is not a compromise. It says the two '
          'methods belong at different stages, which answers the question '
          'instead of avoiding it.',
          'The conclusion gives advice a reader could follow this week. '
          'At this band that is worth more than a restatement of the '
          'introduction.'],
         criterion=[('Both views given a real reason',
                     'Task Response'),
                    ('A position that divides by stage, not by half',
                     'Task Response'),
                    ('A conclusion a reader could act on',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Linking contrast: whereas, while, on the other hand',
    explain=('A contrast between two groups or two ideas needs a linking '
             'word that shows which is which.'),
    examples=['Some students prefer to work alone, whereas others prefer '
              'a group.',
              'While a group helps with motivation, it is often slow.',
              'Reading feels comfortable. Testing yourself, on the other '
              'hand, does not.',
              'What works for me is testing; what works for my friend is '
              'explaining.'],
    task='Join each pair of sentences with a contrast link.',
    items=[('Some students study alone. Others study in groups.',
            'Some students prefer to study alone, whereas others prefer to '
            'study in a group.'),
           ('A group is good for explaining. A group is bad for '
            'discipline.',
            'While a group is useful for explaining ideas, it is less '
            'useful for keeping to a plan.'),
           ('Reading is comfortable. Testing yourself is not.',
            'Reading is comfortable; testing yourself, on the other hand, '
            'is not.'),
           ('I remember what I write. I forget what I read.',
            'I tend to remember what I write down, whereas I forget most '
            'of what I only read.'),
           ('He revised for four hours. She revised for fifty minutes.',
            'He revised for four hours, while she revised for only fifty '
            'minutes.')]),
   vocab=[('going over your notes', 'reading your class notes again'),
          ('memorise', 'to learn by heart'),
          ('study habit', 'the way a person usually studies'),
          ('distraction', 'something that takes your attention away'),
          ('retain', 'to keep in your memory'),
          ('motivation', 'the reason that keeps you working'),
          ('recognise', 'to know something when you see it again'),
          ('willpower', 'the ability to make yourself do something')],
   expr=[('what works for me is',
          'introduces a personal method'),
         ('I can see why some people',
          'accepts the other view before disagreeing'),
         ('familiar is not the same as known',
          'the sentence this cycle turns on'),
         ('that is not willpower, it is distance',
          'explains a habit by its design rather than by effort')],
   trans=['whereas', 'on the other hand', 'in contrast', 'even so'],
  ),

  dict(
   sub='Learning outside school',
   step=2,
   read=[
    dict(heading='Three things people learn without a teacher',
         kind='Article',
         task='Matching headings and sentence completion',
         band='gt_work', qtype='Questions 29-34',
         figure=_FREE,
         paras=[
          'Most adults who learn something new do it without a class. The '
          'three commonest examples are languages, computing and cooking, '
          'and the reasons people succeed or fail are surprisingly '
          'similar in all three.',
          'Languages are the subject most often started and most often '
          'stopped. The people who continue are usually those who have '
          'someone to speak to, which is a social reason rather than a '
          'learning one. An app on its own keeps very few people past the '
          'third month.',
          'Computing is the subject where free courses work best. The '
          'chart above shows how many adults in one town took a free '
          'online course in each subject last year, and computing is far '
          'ahead of the others. One reason is that the computer is both '
          'the subject and the tool, so practice costs nothing.',
          'Cooking is learned differently again. Almost nobody follows a '
          'course; people copy a video, cook the dish badly, and then '
          'cook it again. The feedback is immediate and it is honest, '
          'which is why cooking is learned faster than either of the '
          'other two.',
          'The common lesson is that people keep going when the subject '
          'gives something back quickly. A language gives nothing back '
          'for months unless somebody is talking to you. A meal gives an '
          'answer in forty minutes.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The commonest three subjects', 'Started most, stopped most',
            'Why computing works', 'Learning from a video'], 1,
           'Languages are begun more often than they are continued.'),
          ('Choose the best heading for paragraph 4.',
           ['Free online courses', 'Honest and immediate feedback',
            'A social reason', 'What the chart shows'], 1,
           'Cooking a dish badly and cooking it again.'),
          ('Choose the best heading for paragraph 5.',
           ['What the three have in common',
            'Why languages are difficult', 'The cost of practice',
            'Courses and classes'], 0,
           'People continue when the subject gives something back.'),
          ('People who continue with a language usually have someone to '
           '____________ to.', None, 'speak',
           'Paragraph 2, which is a social reason.'),
          ('In computing, the computer is both the subject and the '
           '____________.', None, 'tool',
           'Paragraph 3, so practice costs nothing.'),
          ('A meal gives an answer in ____________ minutes.', None,
           'forty', 'Paragraph 5, unlike a language.')])],
   listen=[
    dict(heading='A librarian on free courses', part='Part 2',
         task='A talk at a public library', band='l2',
         qtype='Questions 35-40',
         figure=_FREE,
         script=[
          ('Librarian', 'Good evening. I am going to talk about the free '
           'courses we offer, and I want to be honest about which ones '
           'people finish.'),
          ('Librarian', 'Last year about fifty-seven thousand adults in '
           'this town started a free online course. Computing was the '
           'biggest subject by a long way, at eighteen thousand four '
           'hundred, then English at fourteen thousand one hundred.'),
          ('Librarian', 'Business came third, at eleven thousand seven '
           'hundred. Health and care was nine thousand three hundred, and '
           'history was much the smallest, at three thousand eight '
           'hundred.'),
          ('Librarian', 'Now the number nobody puts on a poster. Across '
           'all subjects, about one person in seven finishes. That is not '
           'because the courses are bad. It is because starting is free '
           'and finishing is not: finishing costs you eight weeks.'),
          ('Librarian', 'Two things make a difference, and we have '
           'measured both. The first is a fixed time each week. People '
           'who book a slot finish about three times as often as people '
           'who plan to fit it in.'),
          ('Librarian', 'The second is another person. Come to the '
           'library on Thursday evenings and work in the same room as '
           'other people doing the same course. Nobody teaches, nobody '
           'checks your work, and the finishing rate in that room is '
           'about half.'),
          ('Librarian', 'So my advice is simple. Choose one course, not '
           'three. Put it in your week at a fixed time. And do it where '
           'somebody can see you.')],
         items=[
          ('The largest subject was computing, at ____________ '
           'thousand.', None, '18.4',
           'Ahead of English at 14.1 thousand.'),
          ('The smallest subject was ____________.', None, 'history',
           'At three thousand eight hundred.'),
          ('About one person in ____________ finishes a free course.',
           None, 'seven', 'Across all subjects, he says, and not '
           'because the courses are bad.'),
          ('He says finishing costs the learner ____________ weeks.',
           None, 'eight', 'Whereas starting costs nothing.'),
          ('People who book a fixed ____________ finish about three '
           'times as often.', None, 'slot',
           'Rather than fitting the course in.'),
          ('In the Thursday room, the finishing rate is about',
           ['a seventh', 'a quarter', 'a half', 'three quarters'], 2,
           'Although nobody teaches or checks the work.')])],
   speak=dict(
    part='Part 3', focus='Learning as an adult',
    intro=('Three or four sentences. Give a reason and then an example '
           'of it.'),
    qs=['Is it harder to learn something new as an adult?',
        'Why do people stop doing online courses?',
        'Should employers pay for training?',
        'What is the best way to learn a language?'],
    shape=[('answer', 'Harder in some ways and easier in others.'),
           ('support', 'Adults have less time but they know why they are '
            'learning.'),
           ('follow-up', 'My aunt learned Spanish at fifty because she '
            'had a reason to speak it.'),
           ('support', 'Most people who stop are stopping because '
            'nothing is pushing them.'),
           ('follow-up', 'A fixed evening and one other person seem to '
            'fix most of it.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Adults taking free online courses, by subject',
         prompt=('The chart below shows how many adults in one town took '
                 'a free online course in five subjects in 2024. '
                 'Summarise the information by selecting and reporting '
                 'the main features, and make comparisons where '
                 'relevant. Write at least 150 words.'),
         figure=_FREE,
         model=[
          'The bar chart shows the number of adults in one town who took '
          'a free online course in each of five subjects during 2024. '
          'Overall, computing was by far the most popular subject, while '
          'history attracted the fewest learners by a wide margin.',
          'Computing was taken by 18,400 adults, which was the highest '
          'figure of the five. English was second, at 14,100, and '
          'business third, at 11,700. These three subjects together '
          'accounted for most of the total.',
          'The remaining two subjects were considerably smaller. Health '
          'and care was taken by 9,300 people, which is about half the '
          'computing figure, and history by only 3,800, which is less '
          'than a quarter of it.',
          'The gap between neighbouring subjects is fairly small at the '
          'top of the chart, at around three thousand people between '
          'computing, English and business. The gap at the bottom is much '
          'larger: health and care was taken by more than twice as many '
          'adults as history.'],
         notes=[
          'The Overall statement names the highest and the lowest. On a '
          'chart with one series, that single sentence earns most of the '
          'Task Achievement mark.',
          'The figures are grouped rather than listed one by one: three '
          'large subjects, then two smaller ones. A chart described bar '
          'by bar reads as a list and scores lower.',
          'The last paragraph compares the gaps rather than the bars, '
          'which is the move that separates a band 6 answer from a band '
          '5 one on this task type.'],
         criterion=[('An Overall naming the highest and the lowest',
                     'Task Achievement'),
                    ('Bars grouped rather than listed',
                     'Coherence and Cohesion'),
                    ('A comparison of the gaps, not just the values',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Present perfect and past simple contrasted',
    fix=dict(
     text=('I have studied statistics in my second year at university, and it '
           'was difficult. Since three years I had not done any mathematics, '
           'and the lecturer assumed we all remembered it. I could do the '
           'calculations, but I did not understood what they were for. Last '
           'April I have passed the examination, and I still use some of it '
           'now.'),
     faults=[('I have studied statistics in my second year',
              'I studied statistics in my second year',
              ('A finished time such as my second year takes the past simple, '
               'not the present perfect.')),
             ('Since three years I had not done any mathematics',
              'For three years I had not done any mathematics',
              'Since marks a starting point; a length of time takes for.'),
             ('Last April I have passed the examination',
              'Last April I passed the examination',
              ('Last April is a finished time, so the present perfect cannot '
               'be used with it.'))]),
    explain=('The past simple says when; the present perfect says that '
             'it happened and connects it to now.'),
    examples=['In 2024, 18,400 adults took a computing course.',
              'The number of learners has risen since 2020.',
              'He started three courses last year and finished none of '
              'them.',
              'I have studied English for six years and I am still '
              'studying it.'],
    task='Put the verb in the past simple or the present perfect.',
    items=[('Last year 3,800 people (take) a history course.',
            'Last year 3,800 people took a history course.'),
           ('The library (offer) free courses since 2019.',
            'The library has offered free courses since 2019.'),
           ('I (start) a Spanish course in January and I am still doing '
            'it.',
            'I started a Spanish course in January and I am still doing '
            'it.'),
           ('She (never finish) an online course.',
            'She has never finished an online course.'),
           ('The number (fall) between 2022 and 2023.',
            'The number fell between 2022 and 2023.')]),
   vocab=[('self-taught', 'having learned without a teacher'),
          ('short course', 'a course lasting a few weeks'),
          ('evening class', 'a class held after working hours'),
          ('give up a course', 'to stop a course before the end'),
          ('comments on your work', 'what a teacher tells you about '
           'it'),
          ('learn on your own', 'to study without a class'),
          ('slot', 'a fixed time set aside for something'),
          ('practice', 'doing something repeatedly to improve')],
   expr=[('numbers rose steadily until, before levelling off',
          'describes a shape on a chart'),
         ('by far the most popular',
          'marks the largest value clearly'),
         ('which is about half the computing figure',
          'compares one bar with another'),
         ('starting is free and finishing is not',
          'the sentence this cycle turns on')],
   trans=['firstly', 'secondly', 'finally', 'in comparison'],
  ),

  dict(
   sub='Why some schools do better',
   step=3,
   read=[
    dict(heading='Class size, teaching and what the evidence shows',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given and summary '
              'completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'Parents choosing a school almost always ask about class size, and '
          'head teachers are well aware of it. A school with classes of '
          'twenty advertises the figure; a school with classes of thirty '
          'prefers not to mention them. The assumption that smaller classes '
          'produce higher achievement is among the most widely held beliefs '
          'in education, and it is shared by people who agree about very '
          'little else. The evidence supporting it is weaker, and much more '
          'interesting, than either side of the argument usually admits.',
          'The first difficulty is that schools with small classes differ '
          'from schools with large ones in several other respects. They '
          'tend to be located in wealthier districts, they frequently pay '
          'higher salaries, and they attract experienced teachers who '
          'have a genuine choice about where they work. Their pupils also '
          'arrive better prepared, because the families who select such '
          'schools are typically the families who read at home. If those '
          'pupils achieve more, class size may be the explanation, or it '
          'may merely be the feature that is easiest to measure.',
          'A small number of studies have avoided this difficulty by '
          'assigning class size at random. The best known put pupils into '
          'classes of about fifteen or about twenty-three by chance rather '
          'than by parental choice, and then tracked the same children for '
          'four years. Because the groups were formed at random, the family '
          'backgrounds and the neighbourhoods were equivalent on both sides '
          'of the comparison. Pupils in the smaller classes did better, and '
          'the advantage was most evident during the first two years of '
          'schooling and among children from the poorest households.',
          'That finding is genuine, and the advantage it describes is '
          'smaller than most people assume. Reducing a class from '
          'twenty-three to fifteen is an expensive business: it '
          'requires about half as many teachers again, and those '
          'teachers have to come from somewhere. Several studies have '
          'shown that the benefit of a smaller class disappears '
          'entirely if the only practical way to staff it is to employ '
          'less experienced teachers. That is invariably how it is '
          'staffed when the reduction is introduced quickly.',
          'The honest conclusion is therefore not that class size is '
          'unimportant. It is that class size matters much less than '
          'the quality of the person standing at the front of the '
          'room. The two are linked by money, since both are paid for '
          'from the same single budget. A government with a fixed sum '
          'to spend is in effect choosing between employing more '
          'teachers and paying present ones better, and the evidence '
          'points, uncomfortably for many parents, towards the second '
          'choice.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['What parents ask', 'Schools that differ in other ways',
            'Deciding class size by chance', 'The cost of smaller '
            'classes'], 1,
           'Wealthier areas, higher pay and teachers with a choice.'),
          ('Choose the best heading for paragraph 3.',
           ['A study that used chance', 'Why the gain disappears',
            'What head teachers advertise', 'A fixed budget'], 0,
           'Pupils put into classes of fifteen or twenty-three at '
           'random.'),
          ('Choose the best heading for paragraph 5.',
           ['The strongest belief in education',
            'Smaller classes in the first two years',
            'What the evidence really says', 'Employing new teachers'], 2,
           'Class size matters less than who teaches.'),
          ('Schools with small classes are often in wealthier areas.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 says exactly this.',
           {1: 'False would need a contradiction; paragraph 2 agrees '
               'with the statement.', 2: 'Not Given is wrong because paragraph 2 addresses it '
               'directly.'}),
          (
           'The study found no difference between the two class sizes.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 3 says the smaller classes did better.',
           {0: 'True would need the study to find nothing; it found '
               'the smaller classes ahead.', 2: 'Not Given is wrong because the result is stated in '
               'paragraph 3.'}),
          ('Most parents have read the studies on class size.',
           ['True', 'False', 'Not Given'], 2,
           'What parents have read is never mentioned.',
           {0: 'True would need a statement about what parents read, '
               'and there is none.', 1: 'False would need the text to deny it, and it never '
               'raises it.'}),
          ('In the study, the difference was clearest in the first '
           '____________ years of school.', None, 'two',
           'Paragraph 3, and among the poorest pupils.'),
          ('The gain is lost if the smaller classes are staffed with '
           'less ____________ teachers.', None, 'experienced',
           'Paragraph 4, which is the usual way of staffing them.')])],
   listen=[
    dict(heading='A lecture on measuring school performance',
         part='Part 4', task='A lecture on school results', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'Every country publishes a table of school '
           'results, and almost every table measures the wrong thing. I '
           'want to show you what it measures instead.'),
          ('Lecturer', 'A simple table ranks schools by examination '
           'results. The school at the top has the best results. It also, '
           'in almost every country, has the wealthiest pupils, and those '
           'two facts are very hard to separate.'),
          ('Lecturer', 'So a better measure was invented, and it is '
           'simpler than it sounds. Instead of asking how good the final '
           'results are, you ask how much the pupils improved between '
           'arriving and leaving. That is called a progress measure, and '
           'it changes the order of the table completely.'),
          ('Lecturer', 'When the progress measure was first published in '
           'England, about a third of the schools called outstanding on '
           'results were ordinary on progress, and a number of schools '
           'near the bottom of the old table were near the top of the new '
           'one.'),
          ('Lecturer', 'The progress measure has problems of its own, '
           'and I will give you the worst of them. It depends entirely on '
           'the test pupils take when they arrive, and a school that '
           'tests its new pupils on a wet Monday afternoon will look as '
           'though it has improved them more than a school that tests '
           'them properly.'),
          ('Lecturer', 'My point is not that measuring is pointless. It '
           'is that every measure answers one question, and the question '
           'is often not the one parents are asking. A parent wants to '
           'know what this school will do for this child, with this '
           'child’s particular difficulties, and no table that has ever '
           'been published answers that.')],
         items=[
          ('He says the school at the top of a results table usually has '
           'the wealthiest ____________.', None, 'pupils',
           'Which is hard to separate from its results.'),
          ('The better measure asks how much pupils ____________ '
           'between arriving and leaving.', None, 'improved',
           'Rather than how good their final results are.'),
          ('When progress was first published in England, about a '
           '____________ of outstanding schools were ordinary on '
           'progress.', None, 'third',
           'And some low-ranked schools rose to the top.'),
          ('The progress measure depends on the test pupils take when '
           'they', ['leave', 'arrive', 'apply', 'repeat'], 1,
           'Which can be affected by a bad day.'),
          ('He says every measure answers one ____________.', None,
           'question', 'Often not the one parents are asking.'),
          ('No table, he says, can tell a parent what a school will do '
           'for one ____________.', None, 'child',
           'Which is the question they actually have.')])],
   speak=dict(
    part='Part 3', focus='What makes a good school',
    intro=('Three or four sentences. Give the reason behind your '
           'opinion.'),
    qs=['What makes a school a good school?',
        'Are examination results a fair way to judge a school?',
        'Should parents be able to choose their child’s school?',
        'How important is the size of a class?'],
    shape=[('answer', 'The teachers, more than anything else.'),
           ('support', 'Results tables mostly show which school has the '
            'wealthiest families.'),
           ('follow-up', 'A fairer measure is how much the pupils '
            'improve while they are there.'),
           ('support', 'Class size matters less than people think.'),
           ('follow-up', 'A small class with a new teacher is not better '
            'than a larger one with an experienced teacher.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should class sizes be reduced?',
         prompt=('Should governments spend more on reducing class sizes? '
                 'Write down eight ideas, then use the six tests to '
                 'choose the ones worth keeping. Twelve minutes.'),
         plan=('Governments should not spend more on reducing class '
               'sizes, because the money buys a small gain and the same '
               'money spent on teachers buys a larger one',
               [('The gain from a smaller class is real but small',
                 ['the random studies found a difference mainly in the '
                  'first two years',
                  'the gain disappears if the new classes need less '
                  'experienced teachers']),
                ('The same money does more if it is spent on teachers',
                 ['a fixed budget is a choice between more teachers and '
                  'better paid ones',
                  'who stands at the front matters more than how many '
                  'pupils sit in front of them'])]),
         notes=[
          'The six tests are on the technique page opposite. Three of '
          'your eight ideas will fail the first test, which asks whether '
          'the idea answers the question that was actually asked.',
          'The thesis says what the money buys instead. An essay about '
          'spending is always stronger when it names the alternative, '
          'because every budget is a choice between two things.',
          'Both supports under each heading come from this unit, so you '
          'can write the essay in cycle 5 without inventing evidence.'],
         criterion=[('Ideas that answer the question asked',
                     'Task Response'),
                    ('A thesis that names what the money buys instead',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Hedged generalisation: tends to, is associated with',
    explain=('A general statement about evidence needs a verb that says '
             'how strong the link is.'),
    examples=['Smaller classes tend to produce slightly better '
              'results.',
              'Good results are associated with wealthy areas rather '
              'than caused by them.',
              'The evidence suggests that teaching matters more.',
              'In most cases the difference disappears after two '
              'years.'],
    task='Rewrite each flat claim as a hedged one.',
    items=[('Small classes produce better results.',
            'Smaller classes tend to produce slightly better results, '
            'especially in the early years.'),
           ('Rich areas have the best schools.',
            'Good examination results are associated with wealthier areas '
            'rather than caused by the schools alone.'),
           ('Class size does not matter.',
            'The evidence suggests that class size matters less than the '
            'experience of the teacher.'),
           ('New teachers are worse.',
            'Classes taught by less experienced teachers tend to make '
            'smaller gains.'),
           ('Tables show which schools are good.',
            'Results tables largely show which schools have the '
            'wealthiest pupils.')]),
   vocab=[('class size', 'the number of pupils in one class'),
          ('pupil', 'a child at school'),
          ('exam results', 'the marks pupils achieve'),
          ('progress measure', 'how much pupils improve while at a '
           'school'),
          ('goes together with', 'happens at the same time as'),
          ('other cause', 'a different reason for the same result'),
          ('league table', 'a published ranking of schools'),
          ('head teacher', 'the person in charge of a school')],
   expr=[('the evidence suggests that, rather than proving it',
          'marks the strength of a finding'),
         ('it may be the cause, or it may be the thing easiest to count',
          'names the difficulty in one sentence'),
         ('class size matters less than who is standing at the front',
          'the claim this cycle is built on'),
         ('every measure answers one question',
          'explains why tables mislead')],
   trans=['however', 'although', 'that said', 'in most cases'],
  ),

  dict(
   sub='What the evidence leaves out',
   step=4,
   read=[
    dict(heading='Why smaller classes may not be the answer',
         kind='Academic passage',
         task='Matching information, True/False, Yes/No and short '
              'answer',
         band='acad', qtype='Questions 55-62',
         paras=[
          'The argument for smaller classes is normally made as though the '
          'only real question were whether they are useful. There is a '
          'second question, and within a real school it is the more '
          'important of the two: what has to be given up in order to pay for '
          'them? Every pound spent on an extra teacher is a pound not spent '
          'on something else, and that alternative purpose is rarely named '
          'by anybody making the promise.',
          'Consider first the scale of the proposed change. Cutting a class '
          'of thirty to twenty-five sounds large and is not. The studies '
          'that identified a clear benefit compared classes of about fifteen '
          'with classes of about twenty-three, which represents a reduction '
          'of a third and about a doubling of cost. Small reductions produce '
          'effects too small to be measured reliably, and almost every '
          'political promise is for a small reduction, because a large one '
          'cannot be afforded by anybody who has examined the figures.',
          'There is then the question of where the extra teachers are '
          'to be found. A country reducing class sizes everywhere at '
          'once requires thousands of new teachers within a short '
          'period, and it gets them by relaxing the training it asks '
          'for. Several countries have tried precisely this and have '
          'measured the results. The benefit of the smaller class was '
          'cancelled out by the disadvantage of the less experienced '
          'teacher, and in two cases the pupils did slightly worse '
          'than before.',
          'There is also a consequence inside the school building that '
          'parents rarely observe. A school forced to create extra '
          'classes requires extra rooms. The rooms it takes are the '
          'music room, the library and the room in which pupils who '
          'have fallen behind receive support in small groups. Those '
          'rooms are small, which is precisely why they suit that work '
          'and precisely why they are taken first. The cost of a '
          'smaller class is frequently paid by the pupils who need the '
          'most help.',
          'None of this shows that class size is unimportant. It shows '
          'that the real question is not whether smaller classes help. '
          'The question is whether this is the most valuable purchase '
          'available for this money. Framed the second way, the '
          'evidence favours better paid teachers, improved training '
          'and targeted support for pupils who have fallen behind, in '
          'about that order of priority. None of those three can be '
          'reduced to a single figure on a poster, which accounts for '
          'a considerable part of why they lose the public argument.'],
         items=[
          ('Which paragraph explains why small reductions achieve '
           'little?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'The studies compared fifteen with twenty-three, a third '
           'fewer.'),
          ('Which paragraph describes a loss inside the school '
           'building?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'The music room, the library and the small-group space.'),
          ('Which paragraph lists what the evidence supports instead?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 3,
           'Better pay, more training and targeted help, in that '
           'order.'),
          ('The writer believes class size is unimportant.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says the opposite in its first '
           'sentence.',
           {0: 'Yes would need agreement; the first sentence of the '
               'final paragraph disagrees.', 2: 'Not Given is wrong because the writer states a view on '
               'exactly this.'}),
          (
           'In two countries, pupils did slightly worse after class '
           'sizes were reduced.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 3 states this about two of the countries '
           'studied.',
           {1: 'No would need the text to deny it; paragraph 3 asserts '
               'it.', 2: 'Not Given is wrong because two countries are named and '
               'counted.'}),
          (
           'The writer thinks parents should be told about the lost '
           'rooms.', ['Yes', 'No', 'Not Given'], 2,
           'He says parents rarely see it, but recommends nothing '
           'about telling them.',
           {0: 'Yes would need a recommendation; he reports what '
               'parents see, not what should be done.', 1: 'No would need him to argue against telling them, which '
               'he never does.'}),
          ('What is a reduction from twenty-three to fifteen described '
           'as, in terms of cost?', None, 'a doubling',
           'Paragraph 2, which also calls it a reduction of a '
           'third.'),
          (
           'According to the final paragraph, targeted support should '
           'go to pupils who are ____________.', None,
           'behind', 'After better pay and more training.')])],
   listen=[
    dict(heading='Two researchers disagree about class size',
         part='Part 4', task='A recorded discussion', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Dr Fenwick-Abara studies class size. Professor '
           'Lindqvist studies teacher training. Each begins with the '
           'strongest point against their own position.'),
          ('Fenwick-Abara', 'Mine is that the effect I spend my life '
           'measuring is small. It is real, it is clearest among poor '
           'pupils in the first two years, and it is small. I have '
           'sometimes let an audience think it was larger.'),
          ('Lindqvist', 'And mine is that training is easy to recommend '
           'and hard to deliver. I say spend the money on teachers, and '
           'some of the training that money buys is of very poor '
           'quality. I should say that more often than I do.'),
          ('Chair', 'So where do you disagree?'),
          ('Fenwick-Abara', 'On what to do in the first two years of '
           'school. She would spend everything on teachers. I would make '
           'the youngest classes smaller even at the cost of the '
           'older ones.'),
          ('Lindqvist', 'Which is a real disagreement, and it is much '
           'narrower than the one the newspapers report. We are arguing '
           'about two school years and about one group of children, not '
           'about whether class size matters at all.'),
          ('Fenwick-Abara', 'May I say what changed my mind this year? '
           'The room question, which I had never thought about at all. '
           'When a school makes extra classes it has to find extra rooms, '
           'and it takes the small ones, and the small rooms are exactly '
           'where the children who are behind get their help.'),
          ('Lindqvist', 'That is my strongest argument and you have just '
           'made it for me.'),
          ('Fenwick-Abara', 'I know. It does not change my view about '
           'five-year-olds, and it changes my view about everybody '
           'else.'),
          ('Lindqvist', 'Then we agree on more than the newspapers '
           'think.')],
         items=[
          ('The first speaker admits the effect she measures is',
           ['imaginary', 'small', 'temporary', 'disputed'], 1,
           'Real, clearest among poor pupils, and small.'),
          ('She says it is clearest in the first two years and among '
           'pupils who are ____________.', None, 'poor',
           'Which she has sometimes let audiences forget.'),
          ('The second speaker admits that some of the ____________ the '
           'money buys is of poor quality.', None, 'training',
           'Which she says she should admit more often.'),
          ('They disagree about what to do in the first ____________ '
           'years of school.', None, 'two',
           'A narrower disagreement than the public one.'),
          ('What changed the first speaker’s mind was the question of '
           '____________.', None, 'rooms',
           'Where extra classes come from inside a school.'),
          ('She says her view has changed about everybody except',
           ['teachers', 'five-year-olds', 'parents', 'researchers'], 1,
           'For whom she still wants smaller classes.')])],
   speak=dict(
    part='Part 3', focus='Spending money on education',
    sounds=[('Word stress moves when a word changes its job, and the examiner '
             'hears it: the noun is a RECord, the verb is to reCORD, and the '
             'same split runs through conflict, contrast, increase and '
             'decrease.'),
            ('Words ending in -ic and -ical put the stress one syllable before '
             'the ending: acaDEMic, staTIStical, eCOnomic. Say the ending '
             'quietly and the stress looks after itself.'),
            ('A long word is not a slow word. Practise university and '
             'examination at normal speed with only one strong syllable in '
             'each, because stretching every syllable equally is what makes a '
             'candidate sound like a learner.'),
            ('Read one of your Part 1 answers aloud and mark the one syllable '
             'in each sentence you want the examiner to notice. Then say it '
             'again and make everything else quieter than that syllable.'),
            ('Record yourself answering Do you work or study? Listen once for '
             'stress only, ignoring everything else. You are listening for a '
             'flat line, which is the most common fault at this level and the '
             'easiest to fix.')],
    intro=('Four sentences. Say what you would spend money on and what '
           'you would give up.'),
    qs=['How should a government spend money on schools?',
        'Is it better to have more teachers or better paid teachers?',
        'Should education be free for everyone?',
        'Do schools need more equipment or more staff?'],
    shape=[('answer', 'On teachers rather than on buildings or '
            'equipment.'),
           ('support', 'A budget is always a choice, and that is the '
            'part people forget.'),
           ('follow-up', 'Smaller classes need more teachers, and the '
            'new teachers are usually the least experienced.'),
           ('support', 'I would still make the youngest classes '
            'smaller.'),
           ('follow-up', 'That is where the evidence is strongest, and '
            'it is also where a child who falls behind stays '
            'behind.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should governments spend more on reducing class '
                 'sizes?',
         prompt=('Some people believe that governments should spend more '
                 'money on reducing class sizes in schools. To what '
                 'extent do you agree? Write at least 250 words.'),
         model=[
          'Smaller classes are popular with parents and with politicians, '
          'and the evidence for them is weaker than the promise suggests. '
          'I agree that very young children benefit from smaller classes, '
          'but I do not believe that reducing class sizes generally is '
          'the best use of the money.',
          'It is true that class size has an effect. In the studies that '
          'decided class size by chance, pupils in classes of about '
          'fifteen did better than pupils in classes of about '
          'twenty-three, and the difference was clearest in the first two '
          'years of school and among the poorest children. That is a real '
          'result and it should not be dismissed.',
          'The difficulty is the price. A reduction of that size doubles '
          'the number of teachers needed, and the new teachers have to '
          'come from somewhere. Several countries that have reduced class '
          'sizes quickly have had to lower what they ask of new teachers, '
          'and the gain from the smaller class was cancelled by the loss '
          'from the less experienced teacher. There is also a cost inside '
          'the school, because extra classes need extra rooms, and the '
          'rooms taken are usually the ones where pupils who have fallen '
          'behind are helped.',
          'My own view is therefore that the money should be spent on '
          'teachers rather than on numbers: better pay, better training, '
          'and extra help for pupils who are behind. The one exception is '
          'the first two years of school, where the evidence is strongest '
          'and where a child who falls behind tends to stay behind.',
          'In conclusion, I agree with smaller classes for the youngest '
          'children and disagree with them as a general policy, because '
          'the same money buys more when it is spent on who is teaching '
          'rather than on how many are taught.'],
         notes=[
          'Structure 9: a position, an objection to it, and a reply. The '
          'objection here is the evidence for the other side, stated '
          'properly, which is what makes the reply worth reading.',
          'The position is divided rather than total: yes for the '
          'youngest children, no as a general policy. A divided answer is '
          'easier to defend than a flat one and is read as judgement '
          'rather than as indecision.',
          'Every fact in this essay comes from the unit: the random '
          'studies, the doubling of cost, the less experienced teachers, '
          'the rooms. That is what the twelve-minute plan in cycle 4 was '
          'for.'],
         model65=[
                  'I agree that governments should spend more money on '
                  'reducing class sizes, but only to a point. In this '
                  'essay I will look at the advantages and then at the '
                  'problems.',
                  'The main advantage is that a teacher with fewer '
                  'children can give more attention to each one. In a '
                  'class of thirty, a child who does not understand '
                  'can stay silent for a whole lesson. In a class of '
                  'twenty, the teacher notices. Research also shows '
                  'that the effect is biggest for younger children and '
                  'for children who are behind, so the money is not '
                  'wasted.',
                  'But there are problems. Smaller classes need '
                  'more teachers, and if a school cannot find '
                  'experienced teachers it must employ weaker ones. '
                  'Some studies show that the benefit then disappears '
                  'completely. Schools also need more rooms, and the '
                  'rooms they take are often the library or the music '
                  'room.',
                  'I think class size matters less than the '
                  'quality of the teacher. So I think '
                  'governments should spend the money on training and '
                  'paying teachers first, and reduce class sizes only '
                  'where there are enough good teachers available. '
                  'This is a more useful way to use a limited budget.',
                  ],
         gap65=[
                'It compares the two purchases directly, asking which '
                'buys more learning for the same money, instead of '
                'listing advantages and then problems.',
                'It names the mechanism that makes the smaller class '
                'fail - the inexperienced teacher - and uses it to '
                'reach the conclusion, rather than mentioning it as '
                'one problem among several.',
                'Its final paragraph adds a test anybody could apply, '
                'where this one repeats the opinion in different '
                'words.',
                ],
         criterion=[('An objection stated at its strongest',
                     'Task Response'),
                    ('A divided position with a named exception',
                     'Task Response'),
                    ('Evidence used rather than invented',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Concession and rebuttal: it is true that... but',
    explain=('An argument is stronger when it admits what the other side '
             'is right about before answering it.'),
    examples=['It is true that smaller classes help, but the gain is '
              'small.',
              'Although the effect is real, it disappears when teachers '
              'are inexperienced.',
              'I accept that parents prefer small classes. The question '
              'is what the money buys.',
              'The difficulty with that argument is the price.'],
    task='Rewrite each pair as a concession followed by a rebuttal.',
    items=[('Smaller classes help. They are expensive.',
            'It is true that smaller classes help, but the cost of '
            'reducing them is very high.'),
           ('Parents want small classes. The evidence points '
            'elsewhere.',
            'Although parents understandably prefer small classes, the '
            'evidence points towards better teachers.'),
           ('The study was good. The effect was small.',
            'The study was well designed; the effect it found, however, '
            'was small.'),
           ('New teachers are needed. New teachers are less '
            'experienced.',
            'Reducing class sizes requires new teachers, but those '
            'teachers are necessarily the least experienced.'),
           ('Young children benefit. Older children benefit less.',
            'I accept that young children benefit from smaller classes, '
            'although the effect among older pupils is much weaker.')]),
   vocab=[('take for granted', 'to assume without checking'),
          ('something given up', 'what is lost by choosing something '
           'else'),
          ('slight', 'very small'),
          ('first call on money', 'what a budget pays for before '
           'anything else'),
          ('cancel out', 'to remove the effect of something'),
          ('targeted help', 'help given to the pupils who need it '
           'most'),
          ('one to one', 'one teacher with one pupil'),
          ('mixed ability', 'pupils of different levels in one class')],
   expr=[('it is often claimed that. The difficulty with that is',
          'concedes and then answers'),
         ('what is given up in order to pay for them',
          'the question this cycle adds'),
         ('is this the best thing to buy with this money',
          'reframes the argument'),
         ('a less attractive promise than a number on a poster',
          'explains why the evidence loses the argument')],
   trans=['admittedly', 'nevertheless', 'on balance', 'in short'],
  ),
 ],
 technique=dict(
  title='True / False / Not Given: predict the form, never the content',
  body=('This question type loses more marks than any other in the '
        'Reading paper, and almost always for the same reason: '
        'candidates answer from what they know rather than from what the '
        'passage says. The instruction is narrow. True means the passage '
        'says it. False means the passage says the opposite. Not Given '
        'means the passage does not say. Your own knowledge of the world '
        'is not evidence, and a statement that is obviously true in real '
        'life is Not Given if the passage is silent about it. Work like '
        'this. First, read the statement and underline the part that '
        'could be checked: a number, a comparison, a cause, a time. '
        'Second, predict the form of the sentence that would make it '
        'True — not the words, the form. "The passage would have to say '
        'that one thing caused the other." Third, find the part of the '
        'passage about that topic and read it slowly. If it says the '
        'same thing, True. If it says the opposite, False. If you have '
        'read the right part carefully and the thing you predicted is '
        'not there, the answer is Not Given, and you should write it '
        'without searching further. The statements come in passage '
        'order, so a statement you cannot find is usually between the '
        'one before it and the one after it.'),
  panel=[('Underline what can be checked',
          'A number, a comparison, a cause, a date.'),
         ('Predict the form, not the words',
          '"It would have to say that X caused Y."'),
         ('Same, opposite, or silent',
          'Same = True. Opposite = False. Silent = Not Given.'),
         ('Use the order',
          'Statements follow the passage. A missing one is between its '
          'neighbours.')],
  task='Answer the six True/False/Not Given items in cycles 4 and 5, and '
       'write, for each one, the sentence the passage would have needed '
       'for the answer to be True.',
  qs=['What exactly in this statement can be checked?',
      'What would the passage have to say for it to be True?',
      'Did you read the relevant part, or scan it?',
      'Is the passage silent, or does it say the opposite?',
      'Did you use your own knowledge anywhere?']),
 outlining=dict(
  title='The six tests for a main idea',
  body=('Planning an essay has two halves and most candidates only do '
        'the first. The first half is a brainstorm: write down eight or '
        'ten ideas as fast as you can, without judging any of them. The '
        'second half is choosing, and these are the six tests. One: does '
        'the idea answer the question that was actually asked? Two: can '
        'you support it with a fact or an example, rather than repeating '
        'it in other words? Three: is it separate from your other ideas, '
        'or is it a detail of one of them? Four: can you write five '
        'sentences about it? Five: is it specific enough to be argued '
        'with, or so general that nobody would disagree? Six: does it '
        'belong to your position, or are you including it because it is '
        'true? Ideas that pass all six become body paragraphs. Ideas '
        'that fail get crossed out on the plan, not discovered halfway '
        'through paragraph three. Expect about half your list to fail, '
        'and expect test one and test three to do most of the '
        'crossing-out.'),
  frame=('Governments should not spend more on reducing class sizes, '
         'because the money buys a small gain and the same money spent '
         'on teachers buys a larger one',
         [('The gain from a smaller class is real but small',
           ['the random studies found a difference mainly in the first '
            'two years',
            'the gain disappears if the new classes need less '
            'experienced teachers']),
          ('The same money does more if it is spent on teachers',
           ['a fixed budget is a choice between more teachers and better '
            'paid ones',
            'who stands at the front matters more than how many pupils '
            'sit in front of them'])]),
  task='Brainstorm eight ideas for the cycle 4 question, then apply the '
       'six tests and cross out the ones that fail.',
  qs=['Does the idea answer the question that was asked?',
      'Can you support it with a fact or an example?',
      'Is it separate from your other ideas?',
      'Can you write five sentences about it?',
      'Is it specific enough to be argued with?'],
  answers=['test one removes about two ideas from every list of eight',
           'if the support repeats the idea, the idea is too general',
           'test three usually finds one idea hiding inside another',
           'if you cannot, it is a sentence and not a paragraph',
           '"education is important" fails test five every time']),
 candos=['I can read a notice for the order of its steps',
         'I can write a polite letter asking for something',
         'I can describe a bar chart with five bars in 150 words',
         'I can answer True, False or Not Given from the passage alone',
         'I can choose which of my ideas are worth writing about'],
 tip=('Not Given is an answer, not a failure. If you have read the right '
      'part of the passage carefully and the thing the statement claims '
      'is simply not there, write Not Given and move on.'),
)
