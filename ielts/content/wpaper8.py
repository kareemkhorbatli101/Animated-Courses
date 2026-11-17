# -*- coding: utf-8 -*-
"""Foundation 2 progress test, Writing: both Task 1 forks and a Task 2."""

_PHONE = dict(kind='line',
              title='How long people spend reading on paper and on a screen',
              sub='minutes a day, one survey, 2010 to 2025',
              ylab='minutes',
              x=['2010', '2015', '2020', '2025'],
              series=[('On paper', [48, 36, 25, 19]),
                      ('On a screen', [22, 41, 66, 78])])

WPAPER = dict(
 vol=8, band='4.5', level='A2-B1',
 title='Progress Test · Writing',
 intro=(
   'Sixty minutes and two tasks, in the shape of the real paper. Twenty '
   'minutes on Task 1 and forty on Task 2, because Task 2 is worth twice as '
   'much. Both Task 1 forks are printed: answer Task 1A if you will sit '
   'Academic and Task 1GT if you will sit General Training. Everybody '
   'answers Task 2. The word counts here are a little below the real '
   'paper’s, because the purpose is the clock and the shape.'),
 keyintro=(
   'The models are written at about band 4.5. They are simple and they are '
   'complete, which is the right order to get those two things in. Notice '
   'what they do that a band 4 answer does not: Task 1 ends with a sentence '
   'about the whole chart, and Task 2 says what other people think before '
   'it disagrees with them.'),
 instruct=[
  'Write 20 and 60 at the top of the page. At twenty minutes you stop Task '
  '1 and start Task 2.',
  'Underline the two things the Task 2 question asks for before you write '
  'anything. Most lost marks here are for answering only one of them.',
  'Plan Task 2 for two minutes: your answer, two reasons, and what other '
  'people say.',
  'Leave three minutes at the end. Check verb endings, plurals and full '
  'stops, in that order.',
  'Do not copy the question into your answer. It does not count and it '
  'costs you time.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='How long people spend reading on paper and on a screen',
       figure=_PHONE,
       prompt=('The graph below shows how many minutes a day people in one '
               'survey spent reading on paper and reading on a screen '
               'between 2010 and 2025. Summarise the information by '
               'selecting and reporting the main features, and make '
               'comparisons where relevant. Write at least 130 words.'),
       instruct='  Write at least 130 words. You have 20 minutes.',
       lines=12,
       model=[
        'The graph shows how many minutes a day people spent reading on '
        'paper and on a screen in four years between 2010 and 2025.',
        'The two lines cross. In 2010 people read for 48 minutes a day on '
        'paper and only 22 minutes on a screen. By 2025 this had turned '
        'round completely: 19 minutes on paper and 78 minutes on a screen.',
        'Reading on paper fell in every period, from 48 to 36, then to 25, '
        'and then to 19 minutes. Reading on a screen rose in every period '
        'and the rise was fastest between 2015 and 2020, when it went up by '
        '25 minutes.',
        'The total time spent reading also went up, from 70 minutes a day '
        'to 97. Overall, people in this survey read for longer in 2025 than '
        'in 2010, but they read much less of it on paper.'],
       notes=[
        'The second paragraph finds the most important thing in the graph: '
        'the lines cross. A band 4 answer describes each line separately; a '
        'band 4.5 answer notices the relationship between them.',
        'The total is added up by the writer. It is not printed on the '
        'graph, and working it out is exactly what the rubric means by '
        'selecting and reporting.',
        'The last sentence says what the whole graph shows, with but in the '
        'middle. It has no new numbers in it. An answer without this '
        'sentence cannot go above band 5 however correct the rest is.',
        'The sentences are short and mostly in the past simple, which is '
        'right for a graph about finished years. Nothing is explained, '
        'because the graph does not say why.'],
       checks=[
        'Did you find the most important thing in the graph before you '
        'started writing, or did you describe one line and then the other?',
        'Did you work out any number that is not printed, such as a total '
        'or a difference?',
        'Is there a last sentence about the whole graph, with no new '
        'numbers in it?',
        'Check every number and every word like rose, fell and fastest '
        'against the graph.',
        'Did you explain why? Take it out. Task 1 reports and does not '
        'explain.']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='A letter asking for time off',
       prompt=('You need two weeks off work at a busy time of year for a '
               'family reason. Write a letter to your manager. In your '
               'letter explain why you need the time, say what you have '
               'done to reduce the problem for your team, and ask for a '
               'decision. Write at least 130 words. Begin your letter Dear '
               'Ms Dube.'),
       instruct='  Write at least 130 words. You have 20 minutes.',
       lines=12,
       model=[
        'Dear Ms Dube,',
        'I am writing to ask for two weeks of leave from 8 to 19 December. '
        'My mother is having an operation on 9 December and she will not be '
        'able to walk for about ten days. I am the only person in the family '
        'who lives near her.',
        'I know that December is our busiest month, so I have tried to make '
        'it easier. Samuel has agreed to cover the Tuesday and Thursday '
        'deliveries, and I have already written the January orders so that '
        'nobody has to do them while I am away. I have also asked Aisha if '
        'she can swap her January leave with mine, and she said yes.',
        'Could you let me know by the end of next week? The hospital needs '
        'to know whether somebody will be at home when she is discharged.',
        'Thank you for considering this.',
        'Yours sincerely,',
        'P. Novak'],
       notes=[
        'The reason is given with dates and one fact that explains why it '
        'must be this person: the only one who lives near her. A letter '
        'that says "for family reasons" has answered the bullet without '
        'earning anything.',
        'The second paragraph is the one that gets the answer yes. It names '
        'three things the writer has already done, with names, and each of '
        'them removes work from somebody else.',
        'The request has a deadline and a reason for the deadline. Asking '
        'by when, and saying why, is more effective than asking politely '
        'twice.',
        'Dear Ms Dube takes Yours sincerely. The letter is formal all the '
        'way through, and nothing in it would look wrong if it were kept on '
        'a file.'],
       checks=[
        'Does your reason include dates and one fact that explains why it '
        'has to be you?',
        'Did you say what you have done to make it easier, with names or '
        'specific tasks?',
        'Did you ask for a decision by a particular time, and give a reason '
        'for that time?',
        'Is your greeting matched to your sign-off, and is there anything '
        'informal in the middle?',
        'Did you answer all three bullets, and reach 130 words?']),

  dict(no=3, task='Task 2', fork=None, clock='40 minutes',
       heading='Reading on paper and reading on a screen',
       prompt=('Some people say that children should read printed books '
               'rather than read on a screen. Others say that it makes no '
               'difference. Discuss both views and give your own opinion. '
               'Write at least 200 words.'),
       instruct='  Write at least 200 words. You have 40 minutes.',
       lines=16,
       criterion=[('Both views given, and your own opinion clear',
                   'Task Response'),
                  ('One idea in each paragraph, in a sensible order',
                   'Coherence and Cohesion'),
                  ('Everyday words used accurately',
                   'Lexical Resource'),
                  ('Simple and complex sentences, mostly correct',
                   'Grammatical Range and Accuracy')],
       model=[
        'People argue about whether children should read printed books or '
        'read on a screen. I think the screen is not the problem, but what '
        'is on the screen usually is.',
        'The people who prefer printed books have one strong argument. A '
        'book does nothing except be a book. A tablet has messages, games '
        'and videos on it, and a child who is reading on one is three '
        'seconds away from something easier. In my own house, my nephew '
        'reads for forty minutes with a book and about ten with a tablet, '
        'and he is not a different child.',
        'The people on the other side say that reading is reading, and they '
        'are right about the words. A story is the same story in both '
        'places. A screen is also cheaper for a family with little money, '
        'because one tablet holds a hundred books, and it is better for a '
        'child who needs large letters.',
        'My opinion is that both sides are describing the same thing from '
        'different places. The question is not paper or screen. It is '
        'whether the child can be interrupted. A tablet with nothing on it '
        'except books would work as well as paper, and a printed book in a '
        'room with a television does not work very well either.',
        'In conclusion, I would give children books when the house is busy '
        'and a screen when money is short, and I would worry much more '
        'about interruption than about paper.'],
       notes=[
        'The opinion in the first paragraph is not one of the two views '
        'offered. It names a third thing - what is on the screen - and the '
        'whole essay then argues for it. That is allowed and it is '
        'stronger than choosing a side.',
        'Both views get a full paragraph and both are given honestly. The '
        'second one includes two points the writer agrees with, which is '
        'what "discuss both views" asks for.',
        'The fourth paragraph reaches the real question: whether the child '
        'can be interrupted. Rewriting the question is the move that lifts '
        'this above band 4, and it is a thinking move, not a language '
        'one.',
        'The conclusion gives advice that fits both halves of the argument '
        'and adds nothing new. Note the sentence lengths: they vary, and '
        'the shortest one carries the main idea.'],
       checks=[
        'Is your opinion in the first paragraph, in one sentence?',
        'Did you give both views, and did the one you disagree with get a '
        'real argument rather than one line?',
        'Does each paragraph have one idea? Read the first sentence of '
        'each and see.',
        'Is there one specific example anywhere: a person, a number, a '
        'place?',
        'Does your conclusion repeat your opinion without adding a new '
        'reason?',
        'Did you write at least 200 words, and did you stop at forty '
        'minutes?']),
 ])
