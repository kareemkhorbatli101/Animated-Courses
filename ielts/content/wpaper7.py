# -*- coding: utf-8 -*-
"""Foundation 1 progress test, Writing: both Task 1 forks and a Task 2."""

_TRAVEL = dict(kind='bar',
               title='How students at one college travel to class',
               sub='number of students in each group, out of 200',
               ylab='students',
               cats=['Bus', 'Walk', 'Bicycle', 'Car', 'Train'],
               series=[('First year', [64, 52, 30, 34, 20]),
                       ('Third year', [48, 40, 46, 46, 20])])

WPAPER = dict(
 vol=7, band='4.0', level='A1-A2',
 title='Progress Test · Writing',
 intro=(
   'Sixty minutes and two tasks, in the shape of the real paper. Twenty '
   'minutes on Task 1 and forty on Task 2. Both Task 1 forks are printed: '
   'answer Task 1A if you will sit Academic and Task 1GT if you will sit '
   'General Training. Everybody answers Task 2. The real paper asks for 150 '
   'and 250 words. This one asks for less, because the point of it is the '
   'clock and the shape, not the length.'),
 keyintro=(
   'The models here are written at about band 4.0, which is where this book '
   'is aiming you and not where the exam will want you. They are short, the '
   'sentences are simple, and nothing in them is clever. What they do is '
   'answer the question, in order, with facts from the chart or the prompt. '
   'That is the whole skill at this stage.'),
 instruct=[
  'Write 20 and 60 at the top of the page. At twenty minutes you stop Task '
  '1 and start Task 2, even in the middle of a sentence.',
  'Read the task twice before you write. Underline what it asks you to '
  'do.',
  'Write short sentences. One idea in each one. A short sentence that is '
  'right is worth more than a long one that is not.',
  'Leave three minutes at the end. Check your full stops, your capital '
  'letters and your verb endings, in that order.',
  'Do not copy the question into your answer. It is not counted.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='How students at one college travel to class',
       figure=_TRAVEL,
       prompt=('The chart below shows how 200 first-year students and 200 '
               'third-year students at one college travel to class. '
               'Describe the main points and make comparisons where you '
               'can. Write at least 100 words.'),
       instruct='  Write at least 100 words. You have 20 minutes.',
       lines=10,
       model=[
        'The chart shows how 200 first-year students and 200 third-year '
        'students travel to class. There are five ways to travel.',
        'The bus is the most popular way for both groups. In the first year '
        '64 students take the bus. In the third year only 48 take it.',
        'Walking also falls, from 52 students to 40. The bicycle and the car '
        'both rise. The bicycle goes up from 30 to 46 students, and the car '
        'goes up from 34 to 46. The train does not change. Twenty students '
        'take the train in both years.',
        'In general, the older students use the bus and walk less. They use '
        'a bicycle or a car more.'],
       notes=[
        'The first two sentences say what the chart shows. They do not say '
        'that travel is important or that the chart is interesting. That '
        'kind of sentence takes two minutes and earns nothing.',
        'The numbers come from the chart and each one is attached to a '
        'word: 64 students, 48 students. A list of numbers with no words '
        'between them is not a description.',
        'The last paragraph says what the whole chart shows. It has no new '
        'numbers in it. This is the sentence that most answers at this '
        'level forget, and it is the easiest one to remember to write.',
        'Every sentence is short and in the present simple. Nothing here is '
        'difficult English. The marks are for doing the task, not for '
        'difficult English.'],
       checks=[
        'Does your first sentence say what the chart shows and who is in '
        'it?',
        'Have you used at least six numbers from the chart, each one next '
        'to a word that says what it counts?',
        'Is there a last sentence that says what the chart shows in '
        'general, with no new numbers in it?',
        'Check every number against the chart. One wrong number costs more '
        'than one clumsy sentence.',
        'Did you write at least 100 words, and did you stop at twenty '
        'minutes?']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='A letter about a lost bag',
       prompt=('You left a bag on a bus last week. Write a letter to the '
               'bus company. In your letter say when and where you lost the '
               'bag, describe the bag and what was in it, and ask the '
               'company what to do next. Write at least 100 words. Begin '
               'your letter Dear Sir or Madam.'),
       instruct='  Write at least 100 words. You have 20 minutes.',
       lines=10,
       model=[
        'Dear Sir or Madam,',
        'I left a bag on the number 12 bus last Tuesday. I got on at the '
        'station at about half past four and got off at Holm Road.',
        'The bag is dark green. It is quite big and it has a long strap. '
        'There is a yellow mark on the front, because my son drew on it. '
        'Inside there is a blue jacket, a book and a set of keys. The keys '
        'are the important thing.',
        'Please can you tell me if the bag is in your lost property office? '
        'Can you also tell me when the office is open? I can come any day '
        'after five o clock.',
        'Thank you for your help.',
        'Yours faithfully,',
        'L. Marino'],
       notes=[
        'The three things the task asks for are in three paragraphs: when '
        'and where, what the bag is like, what I want. The task gives you '
        'the plan and you should use it.',
        'The bag is described so that somebody could find it: dark green, '
        'long strap, yellow mark. "A nice bag" would not help anybody.',
        'The questions are short and direct. Please can you tell me is '
        'polite and simple, and it is the right level of politeness for a '
        'company you do not know.',
        'Dear Sir or Madam goes with Yours faithfully. Learn this pair and '
        'the pair for a name, and you will never lose a mark for it.'],
       checks=[
        'Have you written about all three things the task asks for?',
        'Could somebody find your bag from your description? Give a colour, '
        'a size and one special mark.',
        'Have you asked a clear question that the company can answer?',
        'Is Dear Sir or Madam at the top and Yours faithfully at the '
        'bottom?',
        'Did you write at least 100 words, not counting the greeting?']),

  dict(no=3, task='Task 2', fork=None, clock='40 minutes',
       heading='Should children learn to cook at school?',
       prompt=('Some people think that all children should learn to cook at '
               'school. Other people think that this is for the family to '
               'teach. What do you think? Give reasons and examples. Write '
               'at least 150 words.'),
       instruct='  Write at least 150 words. You have 40 minutes.',
       lines=14,
       criterion=[('The question answered, with reasons', 'Task Response'),
                  ('One idea in each paragraph', 'Coherence and Cohesion'),
                  ('Simple words used correctly', 'Lexical Resource'),
                  ('Short sentences with few mistakes',
                   'Grammatical Range and Accuracy')],
       model=[
        'I think children should learn to cook at school. I have two '
        'reasons.',
        'My first reason is that not every family can teach it. Some parents '
        'work long hours and some do not cook much themselves. My own mother '
        'worked nights and we ate the same three meals for years. If the '
        'school does not teach cooking, those children learn nothing about '
        'it.',
        'My second reason is that cooking is cheaper than buying food that '
        'is already made. A person who can cook rice and vegetables can eat '
        'well for very little money. This is useful when a young person '
        'leaves home for the first time.',
        'Some people say that there is no time at school, because children '
        'must learn mathematics and languages. I understand this. But one '
        'hour a week for one year is enough to learn six or seven meals, and '
        'that is enough for a lifetime.',
        'In conclusion, I think cooking should be taught at school. Families '
        'can teach it as well, but the school should not leave it to '
        'them.'],
       notes=[
        'The first paragraph says the answer and says how many reasons are '
        'coming. At this level that is the clearest plan available and it '
        'tells the reader where they are going.',
        'Each reason gets its own paragraph, and each one has an example. '
        'The example in the first reason is personal, which is allowed and '
        'is the easiest kind to make specific.',
        'The fourth paragraph says what other people think and then answers '
        'it. "I understand this. But..." is two short sentences doing the '
        'work that a complicated sentence would do badly.',
        'The conclusion says the answer again. It does not add a new '
        'reason. Every sentence in the model is short, and that is why '
        'there are very few mistakes in it.'],
       checks=[
        'Does your first paragraph say what you think, in one sentence?',
        'Does each paragraph have one reason and one example?',
        'Did you say what other people think, and did you answer it?',
        'Does your last paragraph say your answer again, with no new '
        'reason in it?',
        'Read your longest sentence aloud. If you lose your way in it, '
        'break it into two.',
        'Did you write at least 150 words, and did you stop at forty '
        'minutes?']),
 ])
