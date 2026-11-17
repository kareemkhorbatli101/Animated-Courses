# -*- coding: utf-8 -*-
"""Volume 1 timed Writing paper: both Task 1 forks and one Task 2, 60 min."""

_WORK = dict(kind='bar',
             title='How people in one town travelled to work, 2005 and 2025',
             sub='percentage of all working adults',
             ylab='per cent',
             cats=['Car', 'Bus', 'Train', 'Bicycle', 'On foot'],
             series=[('2005', [58, 14, 9, 5, 14]),
                     ('2025', [41, 19, 15, 12, 13])])

WPAPER = dict(
 vol=1, band='5.0', level='B1',
 title='Writing Paper',
 intro=(
   'Sixty minutes, two tasks. Twenty minutes on Task 1 and forty on Task 2, '
   'because Task 2 carries twice the marks. Both Task 1 forks are printed '
   'below: candidates sitting Academic answer Task 1A and candidates '
   'sitting General Training answer Task 1GT. Everybody answers Task 2.'),
 keyintro=(
   'Nothing here can be marked for you, so what stands in for a score is a '
   'model written at band 5.0 and a list of things to check in your own '
   'script. A band 5.0 answer is not a clever answer. It does what the task '
   'asks, in sentences a reader understands first time, and it stops.'),
 instruct=[
  'Write 20 and 60 at the top of the page. At minute twenty you stop Task 1 '
  'and start Task 2, even in the middle of a sentence.',
  'Underline the two things the Task 2 prompt asks for before you write. '
  'Most lost marks at this band are for answering one of them.',
  'Find out before the exam how many lines of your handwriting make 150 '
  'words, and write to lines rather than counting words in the room.',
  'Leave three minutes at the end. Read only for the mistakes you know you '
  'make, which should be a list of three you can name.',
  'Do not copy the prompt into your answer. It does not count towards the '
  'word total and it costs you two minutes.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='How people in one town travelled to work, 2005 and 2025',
       figure=_WORK,
       prompt=('The chart below shows how people in one town travelled to '
               'work in 2005 and in 2025. Summarise the information by '
               'selecting and reporting the main features, and make '
               'comparisons where relevant. Write at least 150 words.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'The bar chart compares the ways working adults in one town '
        'travelled to work in 2005 and in 2025. It gives the share of all '
        'working adults for five kinds of journey.',
        'The clearest change is in car use. In 2005 the car was used by 58 '
        'per cent of workers, which was more than all the other ways put '
        'together. By 2025 this had fallen to 41 per cent, a drop of 17 '
        'percentage points, although the car was still the commonest way to '
        'travel.',
        'Every form of public transport grew. The bus rose from 14 to 19 per '
        'cent and the train from 9 to 15 per cent. The largest increase in '
        'relative terms was the bicycle, which more than doubled from 5 to '
        '12 per cent.',
        'Walking was the only category that barely moved, falling slightly '
        'from 14 to 13 per cent. Overall, the chart shows a town in which '
        'driving is still the first choice but is losing ground to the bus, '
        'the train and the bicycle.'],
       notes=[
        'The first paragraph says what the chart is and what the numbers '
        'mean, in two sentences. It does not say that the chart is '
        'interesting or that transport is important, which is the commonest '
        'way to lose two minutes at this band.',
        'The second paragraph takes the biggest change first. An examiner '
        'reading a Task 1 answer is looking for evidence that you can tell '
        'a large movement from a small one, and taking the car first is that '
        'evidence.',
        'Figures are grouped rather than listed one by one. "The bus rose '
        'from 14 to 19 per cent and the train from 9 to 15" puts two '
        'movements in one sentence because they are the same movement, and '
        'that is what selecting means in the rubric.',
        'The last sentence is an overview and contains no new number. It '
        'says what the chart as a whole shows, which is the one thing a '
        'band 5 answer most often leaves out.'],
       checks=[
        'Does your first paragraph say what the chart shows and what the '
        'units are, without repeating the prompt word for word?',
        'Have you written a sentence that gives an overall picture, with no '
        'new figures in it? Underline it. If you cannot, add it.',
        'Count your figures. Fewer than six and you have not reported '
        'enough; more than twelve and you are listing rather than '
        'selecting.',
        'Check every comparison word: more than, fell to, rose from, twice '
        'as many. Is each one true of the numbers you quoted beside it?',
        'Did you write at least 150 words? Count the lines, not the words, '
        'and know your own rate before the exam.']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='A letter about a sports centre',
       prompt=('You recently joined a sports centre near your home and one '
               'of its facilities is not what you expected. Write a letter '
               'to the manager of the centre. In your letter say why you '
               'joined, explain what the problem is, and say what you would '
               'like the manager to do. Write at least 150 words. Begin '
               'your letter Dear Sir or Madam.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'Dear Sir or Madam,',
        'I joined the Riverside Centre at the beginning of March. I chose it '
        'because it is five minutes from my flat and because the website '
        'said the swimming pool was open from seven in the morning until '
        'nine at night.',
        'The problem is that the pool has been closed to the public almost '
        'every evening since I joined. When I arrive at about seven, two of '
        'the three lanes are being used for lessons and the third is full. '
        'Last week I was turned away twice. I pay twenty-six pounds a month '
        'and the evening is the only time I am able to swim.',
        'I would be grateful if you could keep one lane free for members at '
        'all times, or publish the lesson timetable on the website so that '
        'members know which evenings are possible. If neither is possible, I '
        'would like to discuss a reduction in my membership, since I am '
        'paying for a facility I cannot use.',
        'I look forward to hearing from you.',
        'Yours faithfully,',
        'A. Mensah'],
       notes=[
        'The three bullets are answered in order and in separate '
        'paragraphs: why I joined, what is wrong, what I want. A General '
        'Training letter that answers all three in one paragraph loses marks '
        'for organisation even when the English is good.',
        'The tone is consistent. It opens Dear Sir or Madam and closes Yours '
        'faithfully, and nothing in between is informal. Mixing a formal '
        'opening with "it is really annoying" is the commonest register '
        'error at this band.',
        'The complaint is specific: a date, a price, a number of lanes, two '
        'refusals last week. Specifics are not decoration; they are what '
        'makes the request reasonable rather than a grumble.',
        'The request offers two options and a third if both fail. That is '
        'the move that turns a complaint into a letter somebody can act on, '
        'and it is easy to learn.'],
       checks=[
        'Have you answered all three bullets, and can you point to the '
        'paragraph where each one is answered?',
        'Is your opening matched to your closing? Dear Sir or Madam goes '
        'with Yours faithfully, and a name goes with Yours sincerely.',
        'Read your letter for one informal expression that does not belong. '
        'There is usually one, and it is usually in the middle.',
        'Does your letter say clearly what you want to happen? A letter '
        'that only describes a problem has not finished the task.',
        'Did you write at least 150 words, not counting the address or the '
        'greeting?']),

  dict(no=3, task='Task 2', fork=None, clock='40 minutes',
       heading='Learning a second language at school',
       prompt=('Some people believe that every student should have to study '
               'a second language at school. Others believe that it should '
               'be a choice. Discuss both these views and give your own '
               'opinion. Write at least 250 words.'),
       instruct='  Write at least 250 words. You have 40 minutes.',
       lines=20,
       criterion=[('Both views discussed and one position taken',
                   'Task Response'),
                  ('One idea for each paragraph, developed',
                   'Coherence and Cohesion'),
                  ('Everyday words used accurately',
                   'Lexical Resource'),
                  ('Simple and complex sentences mixed',
                   'Grammatical Range and Accuracy')],
       model=[
        'Whether a second language should be compulsory at school is argued '
        'about in many countries. I believe it should be, although the '
        'subject needs to be taught differently from the way it often is.',
        'Those who want languages to be optional have a reasonable case. A '
        'school timetable is not elastic, so every compulsory subject takes '
        'the place of something else, and a student who is forced to study a '
        'language they will never use may learn very little from it. There '
        'is also the argument that English is now used almost everywhere, so '
        'a student who already speaks it may feel that a third language is '
        'of no practical value.',
        'I still think a language should be required, for two reasons. The '
        'first is that nobody can know at fourteen which languages their '
        'adult life will need. A student who gives up languages at that age '
        'has closed a door that is very hard to open later, because adults '
        'have far less time. The second reason is that learning any language '
        'teaches something about how language itself works. My own English '
        'improved when I began Spanish, because I noticed for the first time '
        'that tenses are a choice rather than a rule.',
        'The real problem is not whether the subject is compulsory but how '
        'it is examined. A course that tests the ability to recite a list of '
        'words will produce students who dislike languages, and a course '
        'that tests whether they can order a meal or explain a problem will '
        'not.',
        'In conclusion, I would keep a second language compulsory and change '
        'what is tested in it. The subject is too useful to be optional and '
        'too badly examined to be left as it is.'],
       notes=[
        'The position is stated in the first paragraph and it is qualified: '
        'yes, but it must be taught differently. A qualified position is '
        'easier to argue for 250 words than a flat one, and it is still a '
        'clear answer to the question.',
        'The other side is given properly, with two arguments, before it is '
        'answered. "Discuss both these views" is an instruction, and an '
        'answer that gives the opposing view one dismissive sentence has not '
        'followed it.',
        'Each of the writer\'s own reasons is developed to three or four '
        'sentences, and the second one uses a personal example. At band 5 a '
        'real example is worth more than an abstract one, because it is '
        'easier to make specific.',
        'The fourth paragraph moves the argument on rather than repeating '
        'it, and the conclusion names both halves of the writer\'s position. '
        'Nothing new is introduced there.'],
       checks=[
        'Is your opinion stated in the first paragraph in one sentence a '
        'reader could quote back at you?',
        'Did you discuss both views, and does the view you disagree with get '
        'at least three sentences of honest argument?',
        'Does each body paragraph contain one idea? If a paragraph has two, '
        'split it; if it has none, cut it.',
        'Count the sentences in your longest paragraph. More than seven and '
        'it is two paragraphs that have not been separated.',
        'Does your conclusion repeat your position without adding a new '
        'argument? A new argument in the last line always reads as '
        'unfinished.',
        'Did you write at least 250 words, and did you finish inside forty '
        'minutes?']),
 ])
