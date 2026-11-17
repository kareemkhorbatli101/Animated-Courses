# -*- coding: utf-8 -*-
"""Volume 2 timed Writing paper: both Task 1 forks and one Task 2, 60 min."""

_HOUSE = dict(kind='line',
              title='Households of one person, four countries',
              sub='as a percentage of all households, 1990 to 2020',
              ylab='per cent',
              x=['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
              series=[('Sweden', [32, 35, 38, 40, 41, 42, 44]),
                      ('Japan', [19, 22, 25, 29, 32, 34, 38]),
                      ('Spain', [11, 12, 15, 18, 22, 25, 27]),
                      ('Mexico', [5, 6, 7, 8, 10, 11, 13])])

WPAPER = dict(
 vol=2, band='5.5', level='B1+',
 title='Writing Paper',
 intro=(
   'Sixty minutes, two tasks, and the split is yours to enforce: twenty '
   'minutes on Task 1 and forty on Task 2, because Task 2 carries twice the '
   'marks. Both Task 1 forks are printed below. Candidates sitting Academic '
   'answer Task 1A and candidates sitting General Training answer Task 1GT. '
   'Everybody answers Task 2.'),
 keyintro=(
   'A model at band 5.5 and a list of things to check in your own script. '
   'The difference between 5.0 and 5.5 is rarely vocabulary. It is usually '
   'that the 5.5 answer has an overview in Task 1 and a stated position in '
   'Task 2, and that its sentences are the length the idea needs rather '
   'than the length the writer is comfortable with.'),
 instruct=[
  'Write 20 and 60 at the top of the page. At minute twenty you stop Task 1 '
  'and begin Task 2, even in the middle of a sentence.',
  'Spend two of the forty minutes on Task 2 outlining: position, two '
  'paragraphs named, one support under each.',
  'Learn your own handwriting rate before the exam. 150 words is a fixed '
  'number of lines for you and counting in the room wastes time.',
  'Keep three minutes at the end for both tasks together, and read only for '
  'the two or three errors you know you make.',
  'Do not copy the prompt. It is not counted towards the word total and it '
  'costs two minutes you will want later.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='Households of one person, four countries',
       figure=_HOUSE,
       prompt=('The graph below shows the percentage of households '
               'containing one person in four countries between 1990 and '
               '2020. Summarise the information by selecting and reporting '
               'the main features, and make comparisons where relevant. '
               'Write at least 150 words.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'The line graph shows what proportion of households consisted of a '
        'single person in Sweden, Japan, Spain and Mexico at five-year '
        'intervals from 1990 to 2020.',
        'The share rose in all four countries over the period, but the gap '
        'between them did not close. Sweden began highest, at 32 per cent, '
        'and ended highest at 44 per cent, an increase of twelve percentage '
        'points. Mexico began lowest at 5 per cent and ended lowest at 13, '
        'so the distance between the two countries was roughly thirty points '
        'at the start and thirty-one at the end.',
        'The sharpest change was in Japan, which almost doubled from 19 to '
        '38 per cent and overtook nothing but came within six points of '
        'Sweden by 2020. Spain more than doubled, from 11 to 27 per cent, '
        'with most of that growth after 2000.',
        'Overall, living alone became considerably more common everywhere in '
        'the thirty years shown, and the fastest growth was in the two '
        'countries that started from the middle rather than at either '
        'extreme.'],
       notes=[
        'The second paragraph does something a band 5 answer usually does '
        'not: it compares the gap at the start with the gap at the end. '
        'Reporting a trend is expected; reporting what happened to the '
        'distance between two lines is what moves the score.',
        'Figures are used to support a statement rather than to replace one. '
        '"Almost doubled from 19 to 38" is a claim with evidence; "19, 22, '
        '25, 29, 32, 34, 38" is a list and earns nothing.',
        'The final paragraph is an overview with one comparative '
        'observation in it and no new numbers. A Task 1 answer with no '
        'overview is capped below 6 whatever else it does.',
        'Nothing is explained. The graph does not say why people live alone, '
        'and a Task 1 answer that offers reasons is answering a question '
        'nobody asked.'],
       checks=[
        'Does your first sentence say what is measured, where and when, '
        'without copying the prompt?',
        'Underline your overview sentence. Does it contain a general '
        'statement and no new figures?',
        'Have you compared anything other than individual values: a gap, a '
        'rate of change, an order that did or did not alter?',
        'Check each figure against the graph. One wrong number in a Task 1 '
        'answer costs more than three clumsy sentences.',
        'Have you explained any cause? Delete it. Task 1 reports and does '
        'not interpret.']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='A letter about a course you cannot finish',
       prompt=('You have been attending an evening course and you have been '
               'offered a job that will make it impossible to continue. '
               'Write a letter to the course tutor. In your letter explain '
               'the situation, say what you have gained from the course, and '
               'ask about finishing it at a later date. Write at least 150 '
               'words. Begin your letter Dear Ms Alvarez.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'Dear Ms Alvarez,',
        'I am writing about the Tuesday evening bookkeeping course, which I '
        'have been attending since September. I have been offered a job at a '
        'warehouse in Halden, and the shift I have been given runs from four '
        'until eleven on Tuesdays and Thursdays. I have tried to swap it and '
        'the manager has told me that it is not possible before the spring.',
        'I am sorry to leave, because the course has been more useful than I '
        'expected. I came in order to understand the accounts at the shop '
        'where I was working, and I can now do the monthly figures myself, '
        'which took somebody else two hours a week before. The session on '
        'value added tax was the one I had dreaded and the one I use most.',
        'I would like to ask whether it is possible to complete the last six '
        'weeks in a later term, and whether the fee I have paid can be '
        'carried over. If the course runs in the autumn I would take the '
        'Thursday group if there is one.',
        'Thank you for your help this year.',
        'Yours sincerely,',
        'T. Haddad'],
       notes=[
        'The three bullets are answered in three paragraphs and in the order '
        'the task gives them. Examiners mark General Training letters '
        'against the bullets, so the structure of the letter is given to you '
        'and throwing it away is a decision.',
        'Dear Ms Alvarez is matched with Yours sincerely. A named recipient '
        'takes sincerely; Dear Sir or Madam takes faithfully. Getting this '
        'wrong is the cheapest mark in the paper to lose.',
        'The second paragraph is specific about what was gained: the monthly '
        'figures, two hours a week, the session on value added tax. A letter '
        'that says "I have learned a lot" has answered the bullet without '
        'earning anything for it.',
        'The request is two questions and an offer, not a complaint. This is '
        'a letter that gives the reader something to say yes to, which is '
        'what makes it read like a real one.'],
       checks=[
        'Have you answered all three bullets, in three identifiable places?',
        'Is your greeting matched to your sign-off? Check it before you '
        'check anything else.',
        'Is the reason you give specific enough that the reader could not '
        'ask an obvious follow-up question?',
        'Have you asked clearly for what you want, in a sentence the reader '
        'could answer with yes or no?',
        'Read the letter aloud in your head for one sentence that sounds '
        'like a text message. There is usually one.']),

  dict(no=3, task='Task 2', fork=None, clock='40 minutes',
       heading='Working from home',
       prompt=('Some people believe that most office work will be done from '
               'home in the future, and that this is a good thing. Others '
               'believe that people need to work together in the same '
               'place. Discuss both views and give your own opinion. Write '
               'at least 250 words.'),
       instruct='  Write at least 250 words. You have 40 minutes.',
       lines=20,
       criterion=[('A position stated and held to the end',
                   'Task Response'),
                  ('Each paragraph one idea, with a linking sentence',
                   'Coherence and Cohesion'),
                  ('Precise everyday vocabulary, few repetitions',
                   'Lexical Resource'),
                  ('Subordinate clauses used without losing control',
                   'Grammatical Range and Accuracy')],
       model=[
        'Since the pandemic, a great deal of office work has been done at '
        'home, and the argument about whether it should stay there is not '
        'settled. My own view is that the right arrangement is a mixture, '
        'and that the people who are hurt by working at home are not the '
        'people usually discussed.',
        'The case for home working is strong for anybody who already has a '
        'career. Two hours of commuting a day is two hours of unpaid time, '
        'and a quiet room is a better place to write a report than an open '
        'office where somebody is always on the telephone. Employers also '
        'save money on buildings, which is why many of them have accepted '
        'the change so readily.',
        'The case against it is about the beginning of a career rather than '
        'the middle of one. Most of what I know about my own work I learned '
        'by overhearing, by asking a stupid question across a desk, and by '
        'watching somebody experienced handle an angry customer. None of '
        'that is written down anywhere, and none of it happens on a video '
        'call with six people on it. A new employee at home is left to work '
        'out alone what a colleague would have told them in a minute.',
        'This is why I favour a mixture, and why I would not leave the '
        'choice entirely to the individual. If the experienced staff stay at '
        'home and the junior staff come in, the junior staff have nobody to '
        'learn from, which is the worst of the arrangements available.',
        'In conclusion, home working suits the work and the people it suits, '
        'and an office is still the cheapest way to teach somebody a job. A '
        'policy that recognises both of those will serve a company better '
        'than one that insists on either.'],
       notes=[
        'The position in the first paragraph is not just "a mixture", which '
        'anybody can say. It adds a claim about who is harmed, and that '
        'claim is what the whole essay then argues. A position with an edge '
        'is easier to sustain for 250 words than a neutral one.',
        'Both views are given in full paragraphs, and the second one is '
        'argued from experience rather than asserted. At band 5.5 a concrete '
        'mechanism - overhearing, asking across a desk - is what raises an '
        'idea above a generalisation.',
        'The fourth paragraph does new work: it draws out a consequence that '
        'neither side mentioned. An essay that only balances two given views '
        'can reach 5.5; one that adds an argument of its own goes further.',
        'The conclusion restates both halves in one sentence each and '
        'introduces nothing. Note that the final sentence is about policy, '
        'which is what the question implicitly asks for.'],
       checks=[
        'Can you underline one sentence in your first paragraph that states '
        'your position? If you can only underline two half-sentences, '
        'rewrite it.',
        'Does each body paragraph have one idea, stated in its first '
        'sentence?',
        'Is there one place where you give a concrete mechanism or example '
        'rather than a generalisation? At this band that is the single '
        'biggest lift available.',
        'Count your uses of the most repeated content word. More than four '
        'in an essay and you need a synonym or a rewritten sentence.',
        'Does your conclusion add a new argument? If so, move it up or cut '
        'it; a new point in the last line always reads as unfinished.',
        'Did you reach 250 words, and did you stop at forty minutes?']),
 ])
