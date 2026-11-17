# -*- coding: utf-8 -*-
"""Unit 14 - Language and Communication. IELTS Volume 2, band 5.5."""

_LANG = dict(kind='line',
             title='Students choosing four languages',
             sub='entries at age sixteen, thousands, 2000 to 2025',
             ylab='entries (thousands)',
             x=['2000', '2005', '2010', '2015', '2020', '2025'],
             series=[('French', [34, 28, 21, 15, 12, 10]),
                     ('German', [22, 17, 13, 9, 7, 6]),
                     ('Spanish', [9, 12, 14, 16, 17, 18]),
                     ('Mandarin', [1, 2, 5, 9, 13, 16])])

UNIT = dict(
 n=14, vol=2, level='B1+', band='5.5',
 theme='Language and Communication',
 opener=(
   'This unit is about learning languages and about losing them. It opens '
   'with the paperwork of enrolling on an evening course and closes with '
   'two attempts to bring a language back from almost nothing, one of '
   'which worked. The technique page is about scanning, and about the '
   'narrow set of questions where scanning is the right method rather '
   'than a habit that wastes your time.'),

 cycles=[
  dict(
   sub='Signing up for a language course',
   step=1,
   read=[
    dict(heading='Four evening language courses',
         kind='Course listing',
         task='Matching features and table completion',
         band='gt_short', qtype='Questions 1-6',
         skill=('A course listing is read by the column the question asks '
                'about',
                ['Four courses with five facts each is twenty facts, and '
                 'you will be asked about four of them. Read the question '
                 'first and then look only for that fact.',
                 'The course that differs from the other three is always '
                 'tested. Spot it on the first pass and you have answered '
                 'one question before reading any of them.']),
         paras=[
          'Spanish for Beginners. Tuesdays, 18.30 to 20.30, from 14 '
          'January. Twelve weeks. £185 including the course book. No '
          'previous study required and no test before joining.',
          'Intermediate Italian. Wednesdays, 19.00 to 21.00, from 15 '
          'January. Twelve weeks. £185 plus £24 for materials. Applicants '
          'must take a short placement interview by telephone.',
          'Mandarin, First Steps. Thursdays, 18.00 to 20.00, from 16 '
          'January. Ten weeks only. £165 including materials. Classes are '
          'capped at eight students rather than the usual sixteen.',
          'Conversational French. Mondays, 19.30 to 21.00, from 13 '
          'January. Twelve weeks. £150 plus £24 for materials. Suitable '
          'for students who have studied before but have not spoken '
          'recently.',
          'All courses are held at the Rosewood Centre. Enrolment closes '
          'one week before the first class, and a place is held for seven '
          'days from the date of booking without payment.'],
         items=[
          ('Which course runs for fewer than twelve weeks?',
           ['Spanish for Beginners', 'Intermediate Italian',
            'Mandarin, First Steps', 'Conversational French'], 2,
           'Ten weeks, and capped at eight students.'),
          ('Which course requires a test before joining?',
           ['Spanish for Beginners', 'Intermediate Italian',
            'Mandarin, First Steps', 'Conversational French'], 1,
           'A short placement interview by telephone.'),
          ('Which course is the cheapest before materials are added?',
           ['Spanish for Beginners', 'Intermediate Italian',
            'Mandarin, First Steps', 'Conversational French'], 3,
           'At £150, though materials add £24.'),
          ('Mandarin classes are capped at ____________ students.', None,
           'eight', 'Against the usual sixteen on other courses.'),
          (
           'Enrolment closes ____________ week before the first class.',
           None, 'one',
           'The final paragraph, which applies to all four courses.'),
          ('A place is held without payment for ____________ days.', None,
           'seven', 'From the date of booking, with payment due after that.')]),
    dict(heading='Placement and refunds',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Book the level you believe is right. Where a course requires a '
          'placement interview, the centre will telephone you within three '
          'working days of booking.',
          'The interview lasts about ten minutes and is not a test you can '
          'fail. Its only purpose is to place you, and the adviser may '
          'recommend a different class from the one you booked.',
          'If you are moved to another class, any difference in fee is '
          'adjusted automatically. If no suitable class is running, your '
          'payment is returned in full.',
          'After the course begins, you may change class once within the '
          'first two weeks. After the second week no change is possible '
          'and no money is returned, except on medical grounds supported '
          'by a letter.',
          'A place may be transferred to another person at any time '
          'before the third session. The centre must be told in writing '
          'and the new student takes the place at the level originally '
          'booked.'],
         items=[
          ('The centre telephones within ____________ working days of '
           'booking.', None, 'three',
           'Paragraph 1, where a placement interview is required.'),
          ('The interview lasts about ____________ minutes.', None, 'ten',
           'Paragraph 2, and cannot be failed.'),
          ('If no suitable class is running, the payment is returned in '
           '____________.', None, 'full',
           'Paragraph 3, as an alternative to adjusting the fee.'),
          ('After the second week, money is returned only on '
           '____________ grounds.', None, 'medical',
           'Paragraph 4, and a letter is required.')])],
   listen=[
    dict(heading='Taking a placement interview', part='Part 1',
         task='A telephone placement interview', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Adviser', 'Rosewood Centre. Is that Mr Achterberg?'),
          ('Student', 'Speaking.'),
          ('Adviser', 'You booked Intermediate Italian. This is the '
           'placement call, and it takes about ten minutes.'),
          ('Student', 'Should I be worried?'),
          ('Adviser', 'Not at all. You cannot fail it. Where did you study '
           'before?'),
          ('Student', 'Evening classes, about four years ago, for two '
           'terms.'),
          ('Adviser', 'And have you used it since?'),
          ('Student', 'Two holidays. Restaurants and directions, nothing '
           'longer.'),
          ('Adviser', 'That is a common pattern. Can you tell me, in '
           'Italian, what you did last weekend?'),
          ('Student', 'I can try. It will be slow.'),
          ('Adviser', 'Slow is fine.'),
          ('Student', 'Sono andato al mercato con mia sorella, e poi '
           'abbiamo mangiato.'),
          ('Adviser', 'Good. Your grammar is intermediate and your speed '
           'is beginner, which is exactly what two terms and two holidays '
           'produces.'),
          ('Student', 'So which class?'),
          ('Adviser', 'I would move you to Conversational Italian on '
           'Mondays rather than Intermediate on Wednesdays.'),
          ('Student', 'Is that a lower level?'),
          ('Adviser', 'It is a different one. Same grammar, far more '
           'talking. You do not need more rules, you need more '
           'minutes.'),
          ('Student', 'That sounds right. Does the fee change?'),
          ('Adviser', 'It is thirty-five pounds less, and we refund the '
           'difference automatically.'),
          ('Student', 'And materials?'),
          ('Adviser', 'Twenty-four pounds, the same.'),
          ('Student', 'Fine. When does it start?'),
          ('Adviser', 'Monday the thirteenth, half past seven. Your '
           'booking number is R as in romeo, six four two.'),
          ('Student', 'R six four two. Thank you.')],
         items=[
          ('Course originally booked: ____________ Italian', None,
           'Intermediate', 'Changed to another class after the placement interview.'),
          ('Previous study: evening classes for ____________ terms', None,
           'two', 'Evening classes taken about four years ago.'),
          ('The adviser says the student’s grammar is intermediate and '
           'the speed is ____________.', None, 'beginner',
           'Which she calls a common pattern.'),
          ('Class recommended instead: ____________ Italian', None,
           'Conversational',
           'Same grammar, far more talking.'),
          ('The fee is ____________ pounds less.', None, 'thirty-five',
           'Refunded automatically when the class is changed.'),
          ('Booking number: R-____________', None, '642',
           'Spelled out at the very end of the call.')])],
   speak=dict(
    part='Part 1', focus='Languages you speak or would like to',
    intro=('Two or three sentences each. Name the language and say '
           'something concrete about it.'),
    qs=['How many languages do you speak?',
        'Are you learning one at the moment?',
        'Which language would you most like to learn?',
        'Is learning a language useful where you live?'],
    shape=[('answer', 'Two properly and a third badly.'),
           ('support', 'The third is Italian, which I studied for two '
            'terms about four years ago.'),
           ('follow-up', 'I can still read it and I have almost no speed '
            'when I speak.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking to move to a different class',
         prompt=('You have joined a course and believe you are in the '
                 'wrong class. Write a letter to the course organiser. In '
                 'your letter: say which class you are in; explain why you '
                 'think it is wrong for you; say what you would like to '
                 'happen. Write at least 150 words.'),
         model=[
          'Dear Ms Hollingworth,',
          'I am writing about the Intermediate Italian class on Wednesday '
          'evenings, which I joined on 15 January. My booking number is '
          'R-642.',
          'I feel the class may not be the right level for me, and I want '
          'to be careful about why. The grammar is not the difficulty: I '
          'understood all of the first two sessions and completed the '
          'written work without trouble. The difficulty is speaking. The '
          'class moves at a pace that assumes recent practice, and I have '
          'not spoken Italian regularly for four years, so I spend the '
          'conversation exercises translating in my head while the other '
          'students answer.',
          'I understand from the course notice that a change of class is '
          'possible within the first two weeks, and we are in the second '
          'week now. I would like to move to the Conversational Italian '
          'class on Mondays, which I believe covers similar grammar with '
          'more speaking time.',
          'Could you confirm whether a place is available, and whether any '
          'difference in fee would be adjusted? I am happy to continue in '
          'the Wednesday class until the change takes effect.',
          'Yours sincerely,',
          'Lucien Achterberg'],
         notes=[
          'The second paragraph says what is not the problem before saying '
          'what is. A reader who has been told "the grammar is not the '
          'difficulty" understands the request immediately and does not '
          'reach for the obvious reply about going down a level.',
          'The rule about the two weeks is quoted and the writer says '
          'which week it is. Showing that you are inside the deadline, '
          'rather than leaving the reader to work it out, is what makes '
          'this an easy yes.',
          'The last sentence offers to stay put until the change happens. '
          'Removing the reader’s administrative worry costs one sentence '
          'and is the difference between a reply and a decision.'],
         criterion=[('Saying what the problem is not',
                     'Task Response'),
                    ('Quoting the rule and showing you are inside it',
                     'Task Achievement'),
                    ('Removing the reader’s difficulty',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Polite requests and reasons',
    explain=('A request is easier to grant when the reason comes first '
             'and the request is small. These patterns put them in that '
             'order.'),
    examples=['I feel the class may not be the right level because the '
              'pace assumes recent practice.',
              'I would like to move to the Monday class, if a place is '
              'available.',
              'Could you confirm whether any difference in fee would be '
              'adjusted?',
              'I am happy to continue on Wednesdays until the change '
              'takes effect.'],
    task='Rewrite each demand as a request with its reason in front.',
    items=[('Move me to another class.',
            'Because I have not spoken Italian for four years, I would '
            'like to move to the Monday class.'),
           ('Give me my money back.',
            'I understand that a difference in fee is adjusted '
            'automatically, and I should be grateful if that could be '
            'arranged.'),
           ('The class is too hard.',
            'I feel the class may not be the right level, although the '
            'grammar itself has not been the difficulty.'),
           ('Answer me quickly.',
            'As the two-week period ends on Friday, could you let me know '
            'before then?'),
           ('I will stop coming.',
            'I am happy to continue in the Wednesday class until a change '
            'can take effect.')]),
   vocab=[('placement interview', 'a short call to decide your level'),
          ('intermediate', 'between beginner and advanced'),
          ('materials', 'books and handouts for a course'),
          ('timetable clash', 'two commitments at the same time'),
          ('enrolment', 'the act of joining a course'),
          ('term', 'one part of a teaching year'),
          ('capped', 'limited to a maximum number'),
          ('beginner', 'someone starting from nothing')],
   expr=[('I feel the class may not be the right level because',
          'the central sentence of this request'),
         ('the grammar is not the difficulty; the difficulty is speaking',
          'says what the problem is not'),
         ('I understand from the course notice that',
          'shows you have read the rules'),
         ('I am happy to continue until the change takes effect',
          'removes the reader’s worry')],
   trans=['furthermore', 'in addition', 'for that reason', 'meanwhile'],
  ),

  dict(
   sub='Learning a language as an adult',
   step=2,
   read=[
    dict(heading='Four adult learners',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Ingeborg: I studied Portuguese in a classroom for two years '
          'and could not order a coffee. Then I spent five weeks in Porto '
          'and came back able to talk. I do not conclude that classes are '
          'useless. I think the two years were the reason the five weeks '
          'worked.',
          'B  Taavi: I learned entirely from an application on my '
          'telephone, fifteen minutes a day for three years. My reading is '
          'genuinely good. The first time somebody spoke to me I '
          'understood nothing at all, because nobody in the application '
          'ever interrupted themselves or coughed.',
          'C  Marguerite: I married into the language and learned it at '
          'the kitchen table. I speak quickly and I make the same four '
          'mistakes I made in year one, because nobody in a family '
          'corrects you. My husband says it would be rude.',
          'D  Casimiro: I did three evening courses and stopped each time '
          'after about eight weeks, and I know exactly when: the point '
          'where it stops being new. I have four beginner’s levels and no '
          'intermediate one.'],
         items=[
          ('Which learner believes earlier classroom study made later '
           'immersion work?',
           ['Ingeborg', 'Taavi', 'Marguerite', 'Casimiro'], 0,
           'Two years, then five weeks in Porto.'),
          ('Which learner reads well but could not understand speech?',
           ['Ingeborg', 'Taavi', 'Marguerite', 'Casimiro'], 1,
           'Nobody in the application interrupted themselves or '
           'coughed.'),
          ('Which learner speaks fluently but repeats the same errors?',
           ['Ingeborg', 'Taavi', 'Marguerite', 'Casimiro'], 2,
           'Because a family does not correct you.'),
          ('Which learner has stopped at the same stage several times?',
           ['Ingeborg', 'Taavi', 'Marguerite', 'Casimiro'], 3,
           'Four beginner’s levels and no intermediate one.'),
          ('Ingeborg believes classroom study is a waste of time.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says the opposite, explicitly.',
           {0: 'Yes would need dismissal; she argues the opposite '
               'explicitly.', 2: 'Not Given is wrong because she states her view of '
               'classroom study.'}),
          (
           'Marguerite\u2019s husband thinks correcting her would be '
           'impolite.', ['Yes', 'No', 'Not Given'], 0,
           'She reports that he says it would be rude.',
           {1: 'No would need him to think correction proper; she '
               'reports the opposite.', 2: 'Not Given is wrong because she reports what he says '
               'about it.'})])],
   listen=[
    dict(heading='A teacher on adult learners', part='Part 2',
         task='A talk to new language teachers', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Teacher', 'I have taught adults for twenty-two years and I '
           'want to give you the pattern that explains most of what you '
           'will see, including the thing that will frustrate you '
           'most.'),
          ('Teacher', 'Adults are better than children at everything '
           'measurable in the first six months. They learn rules faster, '
           'they have a bigger first language to hang new words on, and '
           'they study on purpose. Every early comparison favours them.'),
          ('Teacher', 'What they are worse at is tolerating the stage '
           'where nothing is new. Around week eight the novelty ends, the '
           'grammar becomes maintenance, and progress stops being visible '
           'from inside even though it continues. That is when adults '
           'leave, and they leave in large numbers.'),
          ('Teacher', 'So the attendance graph for every evening course '
           'I have ever run has the same shape. Full for six weeks, two '
           'thirds by week nine, and whoever is left at week twelve will '
           'still be there in year three.'),
          ('Teacher', 'The second pattern is the split between accuracy '
           'and speed. Classrooms produce students who are correct and '
           'slow. Living in the country produces speakers who are quick '
           'and wrong. Neither route produces both, and most people '
           'believe their own route produces both.'),
          ('Teacher', 'What I want you to do with that is simple. Tell '
           'them at week one that week eight exists. Name it before it '
           'arrives, and a third of the people who would have left will '
           'recognise it instead of concluding they have no talent.')],
         items=[
          ('Adults outperform children on everything measurable in the '
           'first ____________ months.', None, 'six',
           'Rules, vocabulary and deliberate study.'),
          ('Adults typically leave a course around week',
           ['four', 'eight', 'twelve', 'sixteen'], 1,
           'When the novelty ends and progress stops being visible.'),
          ('By week nine, attendance has fallen to about',
           ['a half', 'two thirds', 'three quarters', 'nine '
            'tenths'], 1,
           'And whoever remains at week twelve tends to stay for '
           'years.'),
          ('Classrooms produce students who are correct and '
           '____________.', None, 'slow',
           'While living in the country produces the opposite.')]),
    dict(heading='Two teachers on falling numbers', part='Part 3',
         task='A conversation between two language teachers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Ingeborg', 'French is down to ten thousand entries. It was '
           'thirty-four when I started.'),
          ('Casimiro', 'And everybody blames the students, which is the '
           'part I object to.'),
          ('Ingeborg', 'Who would you blame?'),
          ('Casimiro', 'The timetable. In most schools here a language '
           'competes directly with a second science. A sixteen-year-old '
           'choosing between French and chemistry is not making a '
           'judgement about French.'),
          ('Ingeborg', 'That is true and it does not explain Spanish. '
           'Spanish faces the same timetable and has risen every year '
           'since 2000.'),
          ('Casimiro', 'Fair. Spanish is the hole in my argument.'),
          ('Ingeborg', 'My explanation is grading. French and German were '
           'marked harder than other subjects for about fifteen years. '
           'Students talk, teachers talk, and a subject gets a reputation '
           'for costing you a grade.'),
          ('Casimiro', 'Is that documented or is it a staff-room '
           'belief?'),
          ('Ingeborg', 'Both, which is the honest answer. Three studies '
           'found it; the size differs; the examining boards dispute '
           'it.'),
          ('Casimiro', 'Then it does not explain Spanish either, because '
           'Spanish was graded on the same scale.'),
          ('Ingeborg', 'No. It does not.'),
          ('Casimiro', 'Can I offer the dull explanation that fits '
           'everything?'),
          ('Ingeborg', 'Please.'),
          ('Casimiro', 'Teacher supply. We could not recruit German '
           'teachers after about 2005, so schools dropped the course, so '
           'fewer students met it, so fewer trained to teach it. French '
           'is following the same curve eight years behind. Spanish still '
           'has teachers.'),
          ('Ingeborg', 'That is unglamorous and I think it is mostly '
           'right.'),
          ('Casimiro', 'It is also the only one of our three that '
           'predicts Mandarin, which has risen on the back of funded '
           'teacher recruitment and nothing else.'),
          ('Ingeborg', 'Then we should stop writing letters about '
           'enthusiasm and start writing them about recruitment, which is '
           'a duller letter and might work.')],
         items=[
          ('French entries have fallen from thirty-four thousand to',
           ['six', 'ten', 'sixteen', 'eighteen'], 1,
           'Over the period the two teachers are discussing.'),
          ('Casimiro first blames the ____________, which forces a choice '
           'against a science.', None, 'timetable',
           'Rather than blaming the students.'),
          ('Ingeborg objects that this does not explain',
           ['German', 'Spanish', 'Mandarin', 'French'], 1,
           'Which faces the same timetable and has risen.'),
          ('Ingeborg’s own explanation is that French and German were '
           'marked ____________ than other subjects.', None, 'harder',
           'For about fifteen years, according to three studies.'),
          ('Casimiro’s final explanation is a shortage of',
           ['students', 'teachers', 'textbooks', 'funding'], 1,
           'Beginning with German after about 2005.'),
          ('He says his explanation is the only one that also predicts',
           ['French', 'German', 'Spanish', 'Mandarin'], 3,
           'Which rose on funded teacher recruitment.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Learning',
    longturn=[('The skill I learned as an adult is driving. I passed my test '
               'at twenty-nine, which in my family was considered extremely '
               'late.'),
              ('I learned with an instructor, two hours a week for about five '
               'months, and then a further two months of practice with a '
               'patient friend before I took the test.'),
              ('Altogether it took about seven months, and I failed once, '
               'which I had not seriously considered as a possibility.'),
              ('What was different about learning it as an adult was that I '
               'knew exactly how bad I was. A sixteen-year-old thinks they are '
               'nearly there after four lessons. I could see every mistake I '
               'made, and I could see them while I was making them, which made '
               'the mistakes worse rather than better. The other difference '
               'was that I had no time to be bad at it. Children learn things '
               'in the hours nobody is using for anything else, and I had to '
               'take those hours from something. In the end the advantage was '
               'that I could be told something once and understand why it was '
               'true, so I did not have to be corrected twenty times. But it '
               'was much less enjoyable than anything I learned as a child.')],
    intro=('Short answers, then the long turn. The explanation bullet '
           'carries the band.'),
    cue=('Describe a skill you learned as an adult.',
         ['what the skill was', 'how you learned it',
          'how long it took',
          'and explain what was different about learning it as an '
          'adult']),
    qs=['Is it harder to learn new things as an adult?',
        'Have you ever given up learning something?',
        'Now look at the card. You have one minute to make notes.',
        'Should adults be given more chances to study?'],
    shape=[('answer', 'Swimming, at thirty-four.'),
           ('support', 'A class of six adults, once a week for a '
            'year.'),
           ('follow-up', 'I learned the technique in about six weeks and '
            'the confidence took the rest.'),
           ('support', 'What was different was that I knew why every '
            'instruction existed.'),
           ('follow-up', 'And also that I could not simply be careless '
            'about it, which is how children learn fastest.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='A class or the country?',
         prompt=('Some people believe the best way to learn a language is '
                 'in a classroom, while others believe it is by living '
                 'where it is spoken. Discuss both and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'The two methods are usually compared as if they produced the '
          'same thing in different amounts. They do not. They produce '
          'different abilities, and recognising that is what settles the '
          'question.',
          'A classroom produces correctness. Grammar is explained in an '
          'order, errors are corrected immediately, and a learner finds '
          'out that a sentence is wrong on the day they make it. The cost '
          'is speed. Classroom learners are typically accurate and slow, '
          'and speak as though translating, which is exactly what they are '
          'doing.',
          'Living where the language is spoken produces the opposite. '
          'Nobody corrects an adult in a family or a workplace, because '
          'it would be rude, so errors survive for years. What improves is '
          'everything a classroom cannot supply: speed, listening to '
          'people who interrupt themselves, and the confidence to begin a '
          'sentence without knowing how it ends.',
          'My own view is that the order matters more than the choice. A '
          'friend studied Portuguese for two years without being able to '
          'order a coffee, then spent five weeks in Porto and returned '
          'able to talk. She credits the five weeks and I would credit the '
          'two years, because the five weeks worked only because there '
          'was something there to activate.',
          'In conclusion, the useful question is not which method is '
          'better but which one a learner needs next. Somebody who is '
          'correct and silent should buy a ticket; somebody who is fluent '
          'and wrong should find a teacher. The method that helps is the '
          'one that supplies what the learner does not already have.'],
         notes=[
          'The introduction rejects the comparison the question invites '
          'and says why: the two methods produce different abilities. That '
          'single idea gives the essay its structure and its conclusion.',
          'Paragraph 3 explains why errors survive immersion: nobody '
          'corrects an adult because it would be rude. A mechanism is '
          'worth more than an assertion and is just as short.',
          'The conclusion turns the question into a rule that depends on '
          'the learner. Converting "which is better" into "which do you '
          'need next" is the move that lifts this essay above a balanced '
          'summary.'],
         criterion=[('Rejecting the comparison and saying why',
                     'Task Response'),
                    ('A mechanism rather than an assertion',
                     'Task Response'),
                    ('A conclusion that becomes a rule',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Comparative advantage structures',
    explain=('Comparing two methods needs structures that credit each '
             'with something, rather than ranking them. These are the '
             'ones examiners look for.'),
    examples=['Classrooms give you accuracy; the street gives you '
              'speed.',
              'What a classroom cannot supply is the confidence to '
              'begin.',
              'Immersion produces fluent speakers who are wrong in the '
              'same four ways.',
              'Neither route produces both, which is why the order '
              'matters.'],
    task='Rewrite each sentence so that both methods are credited.',
    items=[('Classes are better.',
            'Classes produce accuracy, which immersion rarely supplies, at '
            'the cost of speed.'),
           ('Living abroad works best.',
            'Living abroad produces speed and confidence, while leaving '
            'errors uncorrected for years.'),
           ('Apps do not work.',
            'An application builds reading faster than a class and '
            'prepares nobody for a speaker who coughs.'),
           ('You should do both.',
            'Each method supplies what the other lacks, so the useful '
            'question is which one a learner needs next.'),
           ('She learned in Porto.',
            'She learned to speak in Porto, on the basis of two years of '
            'classroom study that made those five weeks usable.')]),
   vocab=[('immersion', 'learning by living where a language is '
           'spoken'),
          ('speaking speed', 'how quickly somebody produces speech'),
          ('correctness', 'the absence of errors'),
          ('contact hours', 'time spent actually using a language'),
          ('self-study', 'learning alone without a teacher'),
          ('conversation partner', 'somebody you practise speaking '
           'with'),
          ('pronunciation', 'how words are said'),
          ('drop out', 'to leave a course before it ends')],
   expr=[('classrooms give you accuracy; the street gives you speed',
          'the sentence this cycle is built on'),
         ('nobody in a family corrects you, because it would be rude',
          'explains why errors survive immersion'),
         ('the five weeks worked because there was something to '
          'activate', 'puts two methods in an order'),
         ('name week eight before it arrives',
          'the teaching advice from the talk')],
   trans=['whereas', 'on the other hand', 'by contrast', 'in the end'],
  ),

  dict(
   sub='Which languages people learn',
   step=3,
   read=[
    dict(heading='What is studied and why',
         kind='Data article',
         task='Matching information and True/False/Not Given',
         band='gt_work', qtype='Questions 33-38',
         figure=_LANG,
         paras=[
          'The graph shows entries for four languages at age sixteen over '
          'twenty-five years. Two of the four fall throughout and two rise '
          'throughout, and the two pairs cross in the middle of the '
          'period, which is what makes the chart worth setting.',
          'French falls furthest. It begins as much the largest at 34 '
          'thousand and ends at 10, a fall of 24 thousand or about seventy '
          'per cent. German falls from 22 to 6, which is a smaller fall in '
          'thousands and a larger one in proportion.',
          'Spanish and Mandarin rise. Spanish doubles, from 9 to 18, '
          'rising a little in every period. Mandarin rises from almost '
          'nothing, 1 thousand, to 16, which is sixteenfold and the '
          'steepest change on the chart.',
          'The crossings are the events worth naming. Spanish overtakes '
          'German in about 2010 and French in about 2017. Mandarin passes '
          'German around 2016 and is within two thousand of French by the '
          'end.',
          'Three explanations are offered and each fails on one language. '
          'The timetable explanation says languages compete with sciences '
          'and lose, which does not explain Spanish. The grading '
          'explanation says French and German were marked harder, which '
          'also does not explain Spanish.',
          'The explanation that fits all four is teacher supply. German '
          'teachers became difficult to recruit after about 2005, schools '
          'dropped the course, fewer students met the subject and fewer '
          'trained to teach it. Mandarin is the same mechanism running '
          'forwards: its rise follows a funded recruitment programme '
          'almost exactly.'],
         items=[
          ('Which paragraph names the explanation that fits all four '
           'languages?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 3,
           'Teacher supply, running in both directions.'),
          ('Which paragraph identifies the crossings?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Spanish overtaking German and French, and Mandarin passing '
           'German.'),
          ('Which paragraph says two explanations both fail on the same '
           'language?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Neither the timetable nor the grading explanation covers '
           'Spanish.'),
          ('French fell by about ____________ per cent across the '
           'period.', None, 'seventy',
           'From 34 thousand to 10 thousand.'),
          ('German fell by more thousands of entries than French did.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 2 gives French a fall of 24 thousand and German '
           'one of 16.',
           {0: 'True reverses the comparison; German fell less in '
               'thousands and more in proportion.', 2: 'Not Given is wrong because both falls are given in '
               'thousands.'}),
          (
           'Mandarin changed more steeply than any other language on '
           'the chart.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 3 calls its sixteenfold rise the steepest change '
           'on the chart.',
           {1: 'False would need another language to be steeper, and '
               'paragraph 3 denies it.', 2: 'Not Given is wrong because paragraph 3 names the '
               'steepest change.'})])],
   listen=[
    dict(heading='A researcher on language uptake', part='Part 4',
         task='A lecture on why subjects rise and fall', band='l4',
         qtype='Questions 39-44',
         figure=_LANG,
         script=[
          ('Researcher', 'Four lines, two down and two up, and a '
           'satisfying crossing in the middle. I want to use it to show '
           'you how to test an explanation, because the chart does that '
           'better than anything I could invent.'),
          ('Researcher', 'The figures first. French thirty-four thousand '
           'to ten. German twenty-two to six. Spanish nine to eighteen. '
           'Mandarin one to sixteen.'),
          ('Researcher', 'Now, explanation one, which you will hear in '
           'every staff room: languages compete with sciences on the '
           'timetable and lose. Test it. If it were right, all four lines '
           'would fall. Two rose. The explanation is not wrong, and it '
           'cannot be the whole story.'),
          ('Researcher', 'Explanation two: French and German were graded '
           'harder than other subjects, so students avoided them. Three '
           'studies support it and the boards dispute it. Test it the same '
           'way. Spanish was graded on the identical scale and rose every '
           'year. Again: possibly true, and not sufficient.'),
          ('Researcher', 'Explanation three is the boring one and it is '
           'the one that survives. Teacher supply. German recruitment '
           'collapsed after 2005. A school that cannot staff a course '
           'drops it. Students who never meet a subject do not train to '
           'teach it, so the shortage deepens on a twenty-year cycle.'),
          ('Researcher', 'And it predicts the rises as well as the falls, '
           'which is the real test. Mandarin rose on the back of a funded '
           'recruitment programme. Spanish never lost its teachers. One '
           'mechanism, four lines, both directions.'),
          ('Researcher', 'So the method I want you to take away is not '
           'about languages. Any explanation of a four-line chart must '
           'explain all four lines. An explanation that covers the two '
           'that fall and not the two that rise has told you about half a '
           'chart and been accepted as though it told you about all of '
           'it.'),
          ('Researcher', 'And that is a cheap test. It takes ten seconds '
           'and it eliminates most of what gets said about this chart in '
           'public.')],
         items=[
          ('Mandarin entries rose from one thousand to ____________ '
           'thousand.', None, '16',
           'The steepest change on the chart.'),
          ('The timetable explanation fails because two of the lines',
           ['fell', 'rose', 'crossed', 'levelled'], 1,
           'If it were right, all four would fall.'),
          ('The grading explanation fails because Spanish was graded on '
           'the identical ____________.', None, 'scale',
           'And rose in every year measured.'),
          ('German teacher recruitment collapsed after',
           ['2000', '2005', '2010', '2015'], 1,
           'After which schools dropped the course.'),
          ('He says the shortage deepens on a ____________-year cycle.',
           None, 'twenty',
           'Because students who never meet a subject do not teach it.'),
          ('His general rule is that any explanation of a four-line chart '
           'must explain all ____________ lines.', None, 'four',
           'Rather than only the ones that move one way.')])],
   speak=dict(
    part='Part 3', focus='Languages and work',
    intro=('Four or five sentences. Give a reason and then test it '
           'once.'),
    qs=['Why do fewer students study languages in some countries?',
        'Is English enough for international work?',
        'Should schools require a language?',
        'Which languages will matter most in twenty years?'],
    shape=[('answer', 'Mostly because schools cannot staff the '
            'courses.'),
           ('support', 'German recruitment collapsed here about twenty '
            'years ago.'),
           ('follow-up', 'Schools dropped it, and fewer students then '
            'trained to teach it.'),
           ('support', 'I would test that against Spanish, which kept '
            'its teachers and rose.'),
           ('follow-up', 'Which is why I prefer it to the explanation '
            'about the timetable, since that would predict all four '
            'falling.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Students choosing four languages, 2000 to 2025',
         prompt=('The graph below shows the number of students choosing '
                 'four languages at age sixteen between 2000 and 2025. '
                 'Summarise the information by selecting and reporting the '
                 'main features, and make comparisons where relevant. '
                 'Write at least 150 words.'),
         figure=_LANG,
         model=[
          'The line graph shows entries for four languages at age sixteen '
          'between 2000 and 2025, in thousands. Overall, the four divide '
          'into two clear pairs: French and German fell throughout while '
          'Spanish and Mandarin rose throughout, and the two pairs changed '
          'places during the middle of the period.',
          'French and German declined steadily. French, much the largest '
          'at the start with 34 thousand entries, ended at 10, a fall of '
          '24 thousand. German fell from 22 to 6 and finished as the '
          'smallest of the four.',
          'Spanish and Mandarin rose in every period measured. Spanish '
          'doubled from 9 to 18, while Mandarin rose from 1 to 16, which '
          'is by far the steepest increase on the chart.',
          'The crossings mark the change. Spanish overtook German in about '
          '2010 and French in about 2017, and Mandarin passed German '
          'around 2016. By 2025 Spanish was the most popular of the four '
          'and German the least, exactly reversing the position at the '
          'start.'],
         notes=[
          'The Overall statement names two pairs and the reversal between '
          'them. On a four-line chart where the lines split cleanly, '
          'saying so is the single highest-value sentence available.',
          'Each pair shares a paragraph because each pair shares a shape. '
          'The crossings then get a paragraph of their own, with years '
          'attached, because they are events rather than trends.',
          'The last sentence closes the loop with the Overall statement: '
          'the order at the end exactly reverses the order at the start. '
          'A final sentence that answers the first one makes an answer '
          'feel finished.'],
         criterion=[('Naming the two pairs in the Overall statement',
                     'Task Achievement'),
                    ('Crossings given their own sentence, with years',
                     'Task Achievement'),
                    ('A last sentence that closes the first',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Trends that cross and reverse',
    fix=dict(
     text=('The number of pupils studying French fell from 2010, whereas '
           'Spanish rose. The two lines crossed in 2016, since when Spanish '
           'has been the more popular of the two. German, which had been the '
           'second choice in 2010, has fell to fourth place. By 2022 the '
           'position of the two languages had completely reversed.'),
     faults=[('since when Spanish has been the more popular of the two',
              'after which Spanish has been the more popular of the two',
              ('Since when opens a question. In a statement the link is after '
               'which.')),
             ('has fell to fourth place',
              'has fallen to fourth place',
              'After has the verb takes its past participle: fallen.'),
             ('the position of the two languages had completely reversed',
              'the positions of the two languages had completely reversed',
              'Two languages have two positions, so the noun is plural.')]),
    explain=('Lines that change order need language for the crossing '
             'itself, with a year attached, and for the reversal across '
             'the whole period.'),
    examples=['French fell steadily while Mandarin rose to overtake it in '
              '2024.',
              'Spanish overtook German in about 2010.',
              'By the end the order was exactly reversed.',
              'The two pairs changed places during the middle of the '
              'period.'],
    task='Rewrite each sentence so that it names the crossing and its '
         'year.',
    items=[('Spanish became more popular than German.',
            'Spanish overtook German in about 2010 and remained above it '
            'thereafter.'),
           ('Mandarin grew fast.',
            'Mandarin rose from 1 to 16 thousand, passing German around '
            '2016.'),
           ('French used to be the biggest.',
            'French began as much the largest at 34 thousand and ended '
            'third of the four.'),
           ('They swapped positions.',
            'By 2025 the order of the four languages exactly reversed the '
            'order in 2000.'),
           ('Two went up and two went down.',
            'French and German fell throughout while Spanish and Mandarin '
            'rose throughout, the pairs crossing in the middle of the '
            'period.')]),
   vocab=[('entries', 'the number of students taking a subject'),
          ('revival', 'a return to earlier popularity'),
          ('demand', 'how much something is wanted'),
          ('teacher supply', 'the number of teachers available'),
          ('recruitment', 'the work of finding staff'),
          ('overtake', 'to pass and go above'),
          ('entry requirement', 'what a course demands before you '
           'join'),
          ('option', 'a subject a student may choose')],
   expr=[('French fell steadily while Mandarin rose to overtake it in',
          'the crossing sentence for a line graph'),
         ('an explanation of a four-line chart must explain all four '
          'lines', 'the test this cycle teaches'),
         ('possibly true, and not sufficient',
          'rejects an explanation without calling it wrong'),
         ('one mechanism, four lines, both directions',
          'what a surviving explanation looks like')],
   trans=['whereas', 'at that point', 'overall', 'throughout'],
  ),

  dict(
   sub='Why languages disappear',
   step=3,
   read=[
    dict(heading='When the last speakers stop teaching their children',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'Of the roughly seven thousand languages spoken today, linguists '
          'expect between a third and a half to have no native speakers by '
          'the end of the century. The estimate is uncertain at the edges '
          'and the direction is not in doubt. The process by which it '
          'happens has been described closely enough that it can be set out '
          'as a sequence of stages, and the sequence is remarkably similar '
          'in communities that have nothing else in common.',
          'The sequence rarely begins with a ban. It begins when the smaller '
          'language becomes useless for something specific: a job, a market, '
          'a school. At that point adults become bilingual, which looks like '
          'gain rather than loss and is where almost every speaker of a '
          'dying language would locate the start of the trouble if asked. '
          'They are pointing one stage too early.',
          'The decisive stage comes next and is quiet. Bilingual parents '
          'speak the larger language to their children, usually for '
          'reasons they would defend: they want the child to do well at '
          'school. The generation that follows understands the smaller '
          'language and does not speak it, and the one after that does '
          'neither.',
          'This is why linguists describe the critical measure as '
          'transfer between generations rather than the number of '
          'speakers. A language with fifty thousand speakers, none of them '
          'under forty, is in a worse position than a language with two '
          'thousand speakers in which children are learning it at home.',
          'Published figures rarely show this, because a count of speakers '
          'is easy to obtain and an age profile is not. Two languages '
          'reported as having similar numbers may be twenty years apart in '
          'reality, and the one that looks healthier on the page is '
          'sometimes the one with no future at all. Anybody deciding where '
          'to direct effort on the basis of such a table is being misled by '
          'a figure that is perfectly accurate.',
          'What is lost has been argued about for decades and the argument '
          'has an awkward shape. The strongest claim, that each language '
          'carries a distinct way of thinking that disappears with it, is '
          'not well supported by evidence and is the one most often repeated '
          'in public. The weaker claims are better supported and are made '
          'far less often, which is the reverse of what one would expect.',
          'Those weaker claims are specific. A language is the only route '
          'to an oral literature that was never written down. It carries '
          'detailed knowledge of local plants, weather and navigation '
          'that has in several documented cases proved useful and was '
          'recorded only just in time. And for its speakers it is '
          'ordinarily tied to who they take themselves to be, which is a '
          'loss whether or not anybody else can measure it.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['How the sequence begins', 'The stage that decides it',
            'Counting speakers', 'What is actually lost'], 1,
           'Bilingual parents speaking the larger language to '
           'children.'),
          ('Choose the best heading for paragraph 5.',
           ['Transfer between generations',
            'Why published figures mislead', 'The strongest claim',
            'Oral literature'], 1,
           'Speaker counts are easy to obtain; age profiles are not.'),
          ('Choose the best heading for paragraph 7.',
           ['The strongest claim', 'The claims that are better '
            'supported', 'How languages are counted',
            'Bilingualism'], 1,
           'Oral literature, local knowledge and identity.'),
          (
           'The writer believes the strongest claim about lost ways of '
           'thinking is well supported.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says it is not well supported and most '
           'repeated.',
           {0: 'Yes would need support; paragraph 6 calls it the least '
               'supported.', 2: 'Not Given is wrong because the writer ranks the claims '
               'by evidence.'}),
          (
           'The writer believes a ban is the usual way the process '
           'begins.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says it rarely begins with a ban.',
           {0: 'Yes would need bans to be usual; paragraph 2 says they '
               'rarely begin it.', 2: 'Not Given is wrong because how the process begins is '
               'described.'}),
          ('The process usually begins when the smaller language becomes '
           '____________ for something.', None, 'useless',
           'Paragraph 2: a job, a market, a school.'),
          ('The critical measure is transfer between ____________.', None,
           'generations',
           'Paragraph 4, rather than the number of speakers.'),
          ('Knowledge of local plants, weather and ____________ has '
           'proved useful in several cases.', None, 'navigation',
           'Paragraph 7, recorded only just in time.')])],
   listen=[
    dict(heading='A linguist on language shift', part='Part 4',
         task='A lecture on how languages are lost', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Linguist', 'A language does not die when the last speaker '
           'dies. It dies about sixty years earlier, on an ordinary '
           'afternoon, when a parent decides to speak the other language '
           'to a child. Everything after that is arithmetic.'),
          ('Linguist', 'Here is the sequence. Stage one: the smaller '
           'language becomes useless for something. A job needs the other '
           'one. A school teaches in it. The market trades in it.'),
          ('Linguist', 'Stage two: adults become bilingual. And notice '
           'that this looks like gain. Nobody has lost anything. If you '
           'ask speakers where the trouble started, almost all of them '
           'point here, and almost all of them are pointing one stage too '
           'early.'),
          ('Linguist', 'Stage three is the one that decides it. Bilingual '
           'parents speak the big language to the children, for reasons '
           'they would defend in front of you: they want the child to do '
           'well. The children understand the small language and answer in '
           'the big one.'),
          ('Linguist', 'Stage four is just time passing. Those children '
           'have children, and this generation neither speaks nor '
           'understands. The last fluent speakers may live another forty '
           'years, and the language has already ended.'),
          ('Linguist', 'Which is why we do not count speakers. We ask '
           'about transfer between generations. Fifty thousand speakers, '
           'none under forty, is a worse position than two thousand '
           'speakers with children learning at home, and the published '
           'tables almost never show you which is which.'),
          ('Linguist', 'One last thing, and it matters for how you argue '
           'about this. The claim that each language is a unique way of '
           'thinking is weakly supported, and it is the one everybody '
           'uses. The claims about oral literature, about local knowledge '
           'of plants and weather, and about what it means to the '
           'speakers, are much better supported and much less used. Use '
           'the ones that survive contact with a sceptic.'),
          ('Linguist', 'Because you will be arguing with a finance '
           'ministry, not with a seminar, and the strong claim is the one '
           'they already know how to dismiss.')],
         items=[
          ('He says a language dies about ____________ years before its '
           'last speaker.', None, 'sixty',
           'On an ordinary afternoon, when a parent chooses.'),
          ('At stage two, adults become',
           ['monolingual', 'bilingual', 'literate', 'mobile'], 1,
           'Which he says looks like gain rather than loss.'),
          ('Speakers asked where the trouble started usually point one '
           'stage too ____________.', None, 'early',
           'That is, at bilingualism rather than at transmission.'),
          ('At stage three, children understand the small language and '
           'answer in the ____________ one.', None, 'big',
           'For reasons their parents would defend.'),
          ('Instead of counting speakers, linguists ask about transfer '
           'between', ['regions', 'generations', 'schools',
            'families'], 1,
           'Which published tables rarely show.'),
          ('He advises using the claims that survive contact with a',
           ['speaker', 'sceptic', 'government', 'journalist'], 1,
           'Rather than the strongest and least supported one.')])],
   speak=dict(
    part='Part 3', focus='Small languages',
    intro=('Four or five sentences. Try once to say what exactly is '
           'lost.'),
    qs=['Why do some languages disappear?',
        'Does it matter when a language is lost?',
        'Should children be taught a local language at school?',
        'Can anything stop the process?'],
    shape=[('answer', 'Usually because parents stop passing it on.'),
           ('support', 'Not because of a ban, in most cases.'),
           ('follow-up', 'The language becomes useless for a job or a '
            'school first.'),
           ('support', 'What is lost is less mysterious than people '
            'claim.'),
           ('follow-up', 'Oral literature and local knowledge of plants '
            'and weather, which have both proved useful, rather than a '
            'whole way of thinking.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should money be spent saving languages?',
         prompt=('Should money be spent saving languages with very few '
                 'speakers? Brainstorm ten ideas, then check that your '
                 'surviving points are genuinely distinct from one '
                 'another. Twelve minutes.'),
         plan=('Public money should be spent recording small languages '
               'in every case and on reviving them only where children '
               'are still learning them at home, because recording is '
               'cheap and final while revival depends on a condition no '
               'amount of money creates',
               [('Recording is cheap, permanent and should be universal',
                 ['an oral literature exists nowhere else',
                  'local knowledge of plants and weather has proved '
                  'useful']),
                ('Revival depends on transfer between generations',
                 ['teaching a language in school does not by itself '
                  'create speakers',
                  'the successful case had daily use outside the '
                  'classroom'])]),
         notes=[
          'The test this unit adds is distinctness. "It is part of our '
          'heritage" and "it is part of who we are" are one idea written '
          'twice, and a reader sees the repetition immediately even if the '
          'writer does not.',
          'Notice that the thesis gives two different answers for two '
          'different cases. A plan that splits the question is usually '
          'stronger than one that answers it as a whole, and it is easier '
          'to write.',
          'Each support is a fact rather than a feeling. The brainstorm '
          'probably produced several feelings; they belong in the essay as '
          'one clause, not as a heading.'],
         criterion=[('Points that are genuinely distinct',
                     'Task Response'),
                    ('A thesis that splits the question',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Describing a process of decline',
    explain=('A sequence of stages needs words for order and for the '
             'stage that decides the outcome, without implying anybody '
             'intended it.'),
    examples=['A language dies when it stops being passed on, not when it '
              'is forgotten.',
              'At that point adults become bilingual, which looks like '
              'gain.',
              'The decisive stage comes next and is quiet.',
              'Everything after that is arithmetic.'],
    task='Rewrite each sentence so that the stage and its order are '
         'clear.',
    items=[('The language died out.',
            'The language stopped being passed to children about sixty '
            'years before its last speaker died.'),
           ('People started speaking the other language.',
            'Adults became bilingual first, which looked like gain and '
            'was the stage before the decisive one.'),
           ('Parents chose the bigger language.',
            'At the decisive stage, bilingual parents spoke the larger '
            'language to their children for reasons they would defend.'),
           ('Nobody speaks it now.',
            'The generation after that neither speaks nor understands it, '
            'while fluent speakers remain alive.'),
           ('Counting speakers is misleading.',
            'A count of speakers conceals the age profile, which is what '
            'determines whether a language has a future.')]),
   vocab=[('language shift', 'a community changing which language it '
           'uses'),
          ('passing on', 'teaching a language to the next generation'),
          ('endangered', 'at risk of disappearing'),
          ('revitalise', 'to bring back into regular use'),
          ('bilingual', 'able to use two languages'),
          ('last speaker', 'the final person who speaks a language'),
          ('mother tongue', 'the language learned first at home'),
          ('oral literature', 'stories and songs never written down')],
   expr=[('a language dies when it stops being passed on, not when it is '
          'forgotten', 'the sentence this cycle is built on'),
         ('it looks like gain rather than loss',
          'why speakers misplace the start'),
         ('fifty thousand speakers, none under forty',
          'shows why a count misleads'),
         ('use the claims that survive contact with a sceptic',
          'advice about which argument to choose')],
   trans=['in turn', 'consequently', 'as a result', 'at that stage'],
  ),

  dict(
   sub='Whether a language can be revived',
   step=4,
   read=[
    dict(heading='Two revivals, one success and one not',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Only one language is generally agreed to have been brought back '
          'into daily use from a position of having no native speakers at '
          'all. Hebrew had been a language of religion, scholarship and '
          'correspondence for many centuries, and was nobody’s first '
          'language; today several million people speak it at home. The case '
          'is quoted constantly in support of revival programmes, and the '
          'conditions that produced it are quoted hardly ever.',
          'Those conditions were unusual. A population arriving from many '
          'countries had no shared language, so the revived one solved an '
          'immediate practical problem rather than serving a sentiment. It '
          'became the language of schools, of the army and of government '
          'within a single generation, and using it was tied to a political '
          'project that most of the population actively supported. Remove '
          'any one of those and the case looks much less like a model.',
          'Compare a second case. Irish has had state support since 1922, is '
          'compulsory in schools, is required for certain public posts and '
          'is supported by broadcasting and publishing. Almost every adult '
          'in the country has studied it for thirteen years, and a large '
          'majority tell surveys that they value it. The number using it '
          'daily outside education has nonetheless continued to fall in '
          'every decade measured.',
          'The contrast is instructive precisely because the second case is '
          'not a case of neglect. More money, more teaching hours and more '
          'official status have been applied to Irish than to almost any '
          'other minority language anywhere, and the measure that matters '
          'has not moved. Anybody arguing that revival fails only where it '
          'is underfunded has to explain this case first.',
          'What the successful case had and the second lacks is a set of '
          'situations in which the language is simply the easiest option '
          'available. In Israel one cannot conduct an ordinary day in '
          'another language; in Ireland one can, and almost everybody does, '
          'including people who speak Irish well and would prefer to use it.',
          'This points to a distinction that the policy debate usually '
          'blurs. Teaching a language and causing it to be used are '
          'different projects requiring different instruments. Schools can '
          'deliver the first reliably, and the Irish figures show they '
          'deliver it on a very large scale. Nothing in the evidence '
          'suggests they can deliver the second on their own, and no amount '
          'of additional teaching appears to change that.',
          'The practical conclusion drawn by most linguists is cautious '
          'and unwelcome to both camps. Documentation should be funded '
          'everywhere, because it is inexpensive, permanent and the only '
          'option that cannot fail. Revival programmes are worth funding '
          'where children still learn the language at home, because that '
          'is the condition the successful case had and no programme has '
          'been shown to create.'],
         items=[
          ('Which paragraph describes the conditions that made the '
           'successful case unusual?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'No shared language, and a political project.'),
          ('Which paragraph insists that the second case is not one of '
           'neglect?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'More money and teaching hours than almost any other '
           'language.'),
          ('Which paragraph separates teaching a language from causing it '
           'to be used?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'Different projects requiring different instruments.'),
          (
           'The writer believes Irish has failed because of '
           'insufficient support.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 says the opposite explicitly.',
           {0: 'Yes would need underfunding as the cause; paragraph 4 '
               'denies it.', 2: 'Not Given is wrong because the Irish case is '
               'explained.'}),
          (
           'The writer believes documentation should be funded '
           'everywhere.', ['Yes', 'No', 'Not Given'], 0,
           'The final paragraph, because it cannot fail.',
           {1: 'No would need opposition; the final paragraph '
               'recommends it.', 2: 'Not Given is wrong because the writer states what '
               'documentation can achieve.'}),
          ('In the successful case, the revived language solved an '
           'immediate practical ____________.', None, 'problem',
           'Paragraph 2: a population with no shared language.'),
          ('Almost every adult in the second country has studied the '
           'language for ____________ years.', None, 'thirteen',
           'Paragraph 3, and daily use has still fallen.'),
          ('Revival is worth funding where children still learn the '
           'language at ____________.', None, 'home',
           'The final paragraph, the condition no programme creates.')])],
   listen=[
    dict(heading='Two linguists disagree about revival', part='Part 4',
         task='A recorded discussion', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Ó Braonáin directs a revival programme. Professor '
           'Halvorsen studies documentation. Each begins with their own '
           'weakest point.'),
          ('Ó Braonáin', 'Mine is that I cannot point to a programme, '
           'mine included, that has raised daily use. I can show you '
           'learners, qualifications, broadcasting hours and attitude '
           'surveys. I cannot show you the number that matters.'),
          ('Halvorsen', 'And mine is that documentation is what you do '
           'when you have given up. I record a language from its last '
           'speakers and I tell myself it is science, and the speakers '
           'understand perfectly well what it means that I have come.'),
          ('Chair', 'So where do you disagree?'),
          ('Halvorsen', 'On what the money buys. Recording a language '
           'costs perhaps forty thousand and lasts forever. A revival '
           'programme costs that every year and may produce nothing '
           'measurable.'),
          ('Ó Braonáin', 'May produce nothing measurable by your measure. '
           'A child who learns the language and does not use it daily has '
           'still not lost the option, and their child may.'),
          ('Halvorsen', 'That is the strongest version of your case and '
           'it is untestable in our lifetimes.'),
          ('Ó Braonáin', 'It is. I accept that it is a bet.'),
          ('Halvorsen', 'Then may I propose the thing I think we actually '
           'agree on?'),
          ('Ó Braonáin', 'Go on.'),
          ('Halvorsen', 'Document everything, everywhere, now. It is '
           'cheap, it forecloses nothing, and it is the only action that '
           'cannot be wrong. Then argue about revival with what is '
           'left.'),
          ('Ó Braonáin', 'I would accept that in full, and I would add '
           'one condition. Document with the community rather than about '
           'them, because the recordings are also the material any later '
           'revival has to use.'),
          ('Halvorsen', 'That I accept, and it is not what my discipline '
           'did for most of its history.'),
          ('Ó Braonáin', 'Then let me say the thing I came to say. If '
           'you fund one of us, fund him. The recordings last and my '
           'programme may not, and I would rather be honest about that '
           'than funded on a misunderstanding.')],
         items=[
          ('Dr Ó Braonáin’s own weakest point is that he cannot show',
           ['learners', 'a rise in daily use', 'funding',
            'broadcasting'], 1,
           'Although he can show qualifications and attitudes.'),
          ('Professor Halvorsen says documentation is what you do when '
           'you have ____________.', None, 'given up',
           'And that the speakers understand this.'),
          ('Recording a language costs about ____________ thousand, he '
           'says.', None, 'forty',
           'And lasts permanently, unlike an annual programme.'),
          ('Ó Braonáin argues a child who learns but does not use the '
           'language has not lost the ____________.', None, 'option',
           'And that their own child may use it.'),
          ('He accepts that his strongest argument is',
           ['proven', 'a bet', 'expensive', 'unpopular'], 1,
           'Because it is untestable within their lifetimes.'),
          ('They agree that documentation should be done with the '
           '____________ rather than about them.', None, 'community',
           'Because the recordings are what any revival must use.')])],
   speak=dict(
    part='Part 3', focus='What is lost when a language goes',
    sounds=[('A dark l at the end of a word is made with the back of the '
             'tongue: well, skill, careful. It is not a vowel, but it is much '
             'closer to one than the l in listen.'),
            ('Where l and r meet in a word, slow down before you speed up: '
             'regularly, relatively, rarely, particularly. Say each one three '
             'times in a phrase you would really use.'),
            ('An r in British English is only pronounced before a vowel, so '
             'far is without it and far away has it. Adding an r where there '
             'is no vowel after it sounds effortful rather than careful.'),
            ('Practise a phrase with both sounds: I learned it relatively '
             'late, and it was clearly harder. Keep the l dark at the end of '
             'learned and clearly.'),
            ('Record ninety seconds on a skill you learned, then listen only '
             'for words ending in l. Decide whether each one ended with the '
             'back of your tongue or with a vowel.')],
    intro=('Five sentences. Try once to make a conditional claim and '
           'then limit it.'),
    qs=['Can a language be brought back once it has stopped being '
        'spoken?',
        'Should governments pay for this?',
        'Is it enough to record a language?',
        'Who should decide what happens to a small language?'],
    shape=[('answer', 'It has happened once, and the conditions were '
            'unusual.'),
           ('support', 'Hebrew came back where a population had no other '
            'shared language.'),
           ('follow-up', 'Irish has had schools and money for a century '
            'and daily use still falls.'),
           ('support', 'So teaching a language and causing it to be used '
            'are different jobs.'),
           ('follow-up', 'Which is why I would fund recording everywhere '
            'and revival only where children already learn it at '
            'home.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Funding the revival of dying languages',
         prompt=('Some people say governments should fund the revival of '
                 'dying languages. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'The argument about dying languages is usually conducted as if '
          'there were one question. There are two, and they have '
          'different answers: whether to record a language before it goes, '
          'and whether to try to bring it back into daily use.',
          'Those who support funding point to what disappears. A language '
          'is the only route to an oral literature that was never written '
          'down, and it frequently carries detailed knowledge of local '
          'plants, weather and navigation which has in several documented '
          'cases proved useful. For its speakers it is also tied to who '
          'they take themselves to be, which is a real loss whether or not '
          'others can measure it.',
          'Those who oppose it point to results. Irish has had state '
          'support since 1922, is compulsory in schools and is required '
          'for some public posts, and almost every adult has studied it '
          'for thirteen years. Daily use outside education has fallen '
          'throughout. This is not a case of neglect, which is what makes '
          'it the strongest argument the sceptics have.',
          'My own view separates the two questions. Recording should be '
          'funded everywhere: it costs perhaps forty thousand for a '
          'language, it is permanent, and it is the one action that cannot '
          'turn out to have been wasted. Revival is a different matter. '
          'The one clear success, Hebrew, occurred where a population had '
          'no other shared language and the revived one solved an '
          'immediate practical problem. No programme has been shown to '
          'create that condition.',
          'I would therefore fund documentation without exception, and '
          'revival where children are still learning the language at '
          'home. Spending on revival elsewhere is a bet, and governments '
          'should say so rather than describing it as a plan.'],
         notes=[
          'The introduction splits the question into two. Almost every '
          'strong essay on a contested topic does this, and it is the '
          'easiest way to produce a position that is neither of the two '
          'offered.',
          'The opposing case is given its best evidence, and the sentence '
          '"this is not a case of neglect" concedes the point that makes '
          'it strong. An essay that only reports the weak version of the '
          'other side scores lower even when its own view is correct.',
          'The last sentence names what the spending is: a bet. Ending '
          'with an honest word for something usually described in another '
          'way is a reliable way to finish at this band.'],
         model65=[
                  'Some people say governments should fund the revival '
                  'of dying languages. I agree in part, although I '
                  'think the aim should be chosen carefully.',
                  'There are good reasons to support this. A language '
                  'carries the history and culture of the people who '
                  'speak it, and when it disappears that record is '
                  'lost. Speakers often feel the loss personally. '
                  'Documentation is also cheap compared with most '
                  'government programmes, and once a language is '
                  'recorded it cannot be lost completely.',
                  'But reviving a language so that it is spoken daily '
                  'is much harder. Ireland has supported Irish for a '
                  'century with teaching, money and official status, '
                  'and the number of daily speakers has still fallen. '
                  'Money spent on revival may so produce '
                  'disappointment, and it competes with health and '
                  'education.',
                  'I think governments should always fund '
                  'documentation, because it is cheap and cannot fail, '
                  'and should fund revival where a community is '
                  'actively asking for it. Support that a community '
                  'does not want will not succeed, however much is '
                  'spent.',
                  ],
         gap65=[
                'It separates documentation from revival and gives the '
                'different success condition for each, where this '
                'answer treats them as degrees of the same policy.',
                'It explains why the Irish case is evidence about the '
                'method rather than about the effort.',
                'It states what a community asking for revival '
                'supplies that money cannot.',
                ],
         criterion=[('Splitting one question into two',
                     'Task Response'),
                    ('Conceding what makes the other side strong',
                     'Task Response'),
                    ('An honest name for the thing at the end',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Conditional claims and their limits',
    explain=('A claim about what would work needs a condition attached, '
             'and a sentence that says what happens when the condition '
             'is absent.'),
    examples=['It can be taught; whether it is then used is a different '
              'question.',
              'Revival works where children already learn the language at '
              'home.',
              'Where that condition is absent, no programme has been '
              'shown to create it.',
              'Schools deliver teaching reliably and use unreliably.'],
    task='Rewrite each claim so that its condition is explicit.',
    items=[('Revival programmes work.',
            'Revival programmes have worked where the language was still '
            'being learned at home.'),
           ('Schools can save a language.',
            'Schools can teach a language reliably; whether it is then '
            'used outside is a separate question.'),
           ('Hebrew proves it is possible.',
            'Hebrew shows it is possible where a population has no other '
            'shared language.'),
           ('Irish shows it cannot be done.',
            'Irish shows that teaching alone does not produce daily use, '
            'even with a century of support.'),
           ('Recording is the answer.',
            'Recording is worth funding everywhere because it is cheap and '
            'permanent, which is a different claim from saying it saves a '
            'language.')]),
   vocab=[('bringing back', 'returning a language to everyday use'),
          ('domain', 'an area of life where a language is used'),
          ('official status', 'legal recognition by a state'),
          ('symbolic', 'valued as a sign rather than used daily'),
          ('field recording', 'recording a language before it is lost'),
          ('daily use', 'speaking a language in ordinary life'),
          ('compulsory', 'required by rule'),
          ('forecloses', 'rules out a future possibility')],
   expr=[('it can be taught; whether it is then used is a different '
          'question', 'the distinction this cycle is built on'),
         ('this is not a case of neglect',
          'concedes the strength of the other side'),
         ('the one action that cannot turn out to have been wasted',
          'argues for documentation'),
         ('a bet, and governments should say so',
          'names something honestly')],
   trans=['admittedly', 'and yet', 'on balance', 'in either case'],
  ),
 ],
 technique=dict(
  title='Scanning: when the key really is rare and unique',
  body=('Scanning is the most over-used technique in IELTS preparation. It '
        'works on a narrow class of questions and wastes time on all the '
        'others, and knowing the difference is worth more than being fast '
        'at it. Scanning works when the question contains a key that is '
        'rare in the passage and unique: a year, a proper name, a figure, '
        'a technical term that appears once. "In which year did Spanish '
        'overtake German?" has a key you can find without reading. '
        'Scanning fails, and fails expensively, when the key is a common '
        'word, when the passage paraphrases rather than repeats, and on '
        'every question that asks what the writer thinks. Yes/No/Not Given '
        'cannot be scanned at all, because the thing you are looking for '
        'may be absent, and you cannot scan for an absence. So before you '
        'scan, look at the question and ask: is there a key, and would it '
        'be rare? If yes, scan. If no, go back to the loop and read the '
        'paragraph.'),
  panel=[('A key that is rare and unique',
          'A year, a name, a figure, a term used once. Not "students" or '
          '"language".'),
         ('Paraphrase defeats scanning',
          'If the passage says "entries fell" and the question says '
          '"fewer chose it", there is nothing to find.'),
         ('Opinion questions cannot be scanned',
          'What the writer thinks is spread across sentences, not '
          'printed in one.'),
         ('You cannot scan for an absence',
          'Not Given means nothing is there, so no amount of looking '
          'will produce it.')],
  task='Sort the forty questions in this unit into scannable and not, '
       'then check your sorting against how you actually answered them.',
  qs=['Which questions had a rare, unique key?',
      'Which ones did you scan for and should not have?',
      'How long did you spend on the longest unsuccessful scan?',
      'Which question types were never scannable?',
      'Did scanning ever give you a wrong answer by finding the wrong '
      'sentence?']),
 outlining=dict(
  title='Spot the intruder, then rebuild the plan',
  body=('Every brainstorm produces at least one idea that is about the '
        'topic and not about the question, and it is usually the idea the '
        'writer likes best. That is the intruder. On the question about '
        'saving dying languages, "many people in cities no longer know '
        'their grandparents’ language" is true, interesting, and answers '
        'nothing about whether money should be spent. The test is simple: '
        'read the idea and then read the question, and ask whether the '
        'idea pushes the answer in either direction. If it does not, it is '
        'background, and background belongs in one clause of the '
        'introduction or nowhere. Having removed the intruder, check the '
        'survivors for genuine distinctness — two ideas that always appear '
        'together in your head are usually one idea — and then rebuild: '
        'thesis, two headings that are claims, two supports under each, at '
        'least one of them a fact.'),
  frame=('Public money should be spent recording small languages in '
         'every case and on reviving them only where children are still '
         'learning them at home, because recording is cheap and final '
         'while revival depends on a condition no amount of money '
         'creates',
         [('Recording is cheap, permanent and should be universal',
           ['an oral literature exists nowhere else',
            'local knowledge of plants and weather has proved useful']),
          ('Revival depends on transfer between generations',
           ['teaching a language in school does not by itself create '
            'speakers',
            'the successful case had daily use outside the '
            'classroom'])]),
  task='Take your cycle 4 brainstorm, name the intruder, and rebuild the '
       'plan without it.',
  qs=['Which of your ideas was the intruder?',
      'Did it push the answer in either direction?',
      'Were two of your survivors really one idea?',
      'Is each heading a claim with a verb in it?',
      'Is at least one support under each heading a fact?'],
  answers=['it is usually the one you were most pleased with',
           'if it does not, it is background',
           'ideas that always appear together usually are',
           'a heading without a verb gives you nothing to write',
           'a figure, a country or a case; not another reason']),
 candos=['I can read a course listing for the option that differs',
         'I can decide whether a question is worth scanning for',
         'I can describe two pairs of lines that cross',
         'I can explain why a language dies before its last speaker',
         'I can attach a condition to a claim about what works'],
 tip=('Before you scan, ask whether the question contains a key that '
      'would be rare in the passage. If it does not, scanning is the '
      'slowest possible way to read, and on Not Given it cannot work at '
      'all.'),
)
