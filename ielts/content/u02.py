# -*- coding: utf-8 -*-
"""Unit 2 - Work and Careers. IELTS Volume 1, band 5.0."""

_HOURS = dict(kind='bar',
              title='Average weekly hours worked, five countries',
              sub='full-time employees, 2024',
              ylab='hours a week',
              cats=['Mexico', 'Japan', 'United Kingdom', 'France',
                    'Netherlands'],
              series=[('Hours a week', [43.1, 38.4, 36.2, 34.7,
                                        31.5])])

UNIT = dict(
 n=2, vol=1, level='B1', band='5.0',
 theme='Work and Careers',
 opener=(
   'This unit follows a job from the advertisement to the first week and '
   'then asks a harder question: what happens to work when machines can '
   'do more of it? You will read three job adverts and find out what '
   '"essential" means, listen to a manager explaining a probation '
   'period, describe a chart of working hours in five countries, and '
   'read two passages about automation that disagree with each other '
   'without either of them being wrong. The technique page is Matching '
   'Headings.'),

 cycles=[
  dict(
   sub='Applying for a job',
   step=1,
   read=[
    dict(heading='Three posts at Marchfield Council',
         kind='Job adverts',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A job advert is read for the word "essential"',
                ['Every advert separates what you must have from what '
                 'they would like you to have. The questions are almost '
                 'always about the first list.',
                 'The closing date and the interview date are the two '
                 'facts most often asked for, and they are usually in '
                 'the last two lines.']),
         paras=[
          'Post A: Library Assistant, 22 hours a week, £13,400. Essential: '
          'experience of dealing with the public. Desirable: a second '
          'language. Saturday work is required one week in three. Closing '
          'date 14 March.',
          'Post B: Parks Maintenance Operative, 37 hours, £21,800. '
          'Essential: a full driving licence and the ability to work '
          'outdoors in all weathers. No qualifications are required and '
          'training is provided. Closing date 7 March.',
          'Post C: Finance Officer, 37 hours, £28,600. Essential: a '
          'recognised accounting qualification and two years of relevant '
          'experience. Desirable: experience of local government. Closing '
          'date 21 March.',
          'All three posts are subject to a six-month probation period. '
          'Applicants should give the names of two referees, one of whom '
          'must be a current or most recent employer.',
          'Interviews for Post B will be held on 15 March and for Post A '
          'on 22 March. The date for Post C has not yet been arranged '
          'and will be confirmed with the candidates who are '
          'shortlisted.',
          'Applications must be made on the council form. Curricula vitae '
          'are not accepted alone, because the panel compares applicants '
          'against the same headings.'],
         items=[
          ('Which post requires a driving licence?',
           ['Post A', 'Post B', 'Post C', 'all three'], 1,
           'Paragraph 2: essential for Parks Maintenance.'),
          ('Which post requires a formal qualification?',
           ['Post A', 'Post B', 'Post C', 'none of them'], 2,
           'Paragraph 3: a recognised accounting qualification.'),
          ('Which post involves working some Saturdays?',
           ['Post A', 'Post B', 'Post C', 'all three'], 0,
           'Paragraph 1: one week in three.'),
          ('How long is the probation period?', None, 'six months',
           'Paragraph 4, and it applies to all three posts.'),
          ('One referee must be a current or most recent '
           '____________.', None, 'employer',
           'Paragraph 4, where two referees are required.'),
          (
           'Curricula vitae are not accepted alone because they cannot '
           'be ____________.', None, 'compared',
           'Paragraph 6: the panel compares applicants against the '
           'same headings.')]),
    dict(heading='How we shortlist', kind='Procedure notice',
         task='Flow-chart completion', band='gt_short',
         qtype='Questions 7-10',
         paras=[
          'When the closing date has passed, every application is checked '
          'against the essential requirements. An application that does '
          'not meet all of them is not read further, whatever else it '
          'contains.',
          'The remaining applications are then scored by two officers '
          'working separately. Each gives a mark out of four for every '
          'heading on the person specification, and the two sets of marks '
          'are compared afterwards.',
          'Where the two officers disagree by more than one point, a '
          'third officer reads the application and the three discuss it. '
          'This happens in about one application in eight.',
          'The highest-scoring applicants are then invited to interview, '
          'normally six for each post. Applicants who are not invited are '
          'told within five working days and may ask for their scores.'],
         items=[
          ('Applications are first checked against the ____________ '
           'requirements.', None, 'essential',
           'Paragraph 1: those that fail are not read further.'),
          ('Applications are scored by ____________ officers working '
           'separately.', None, 'two',
           'Paragraph 2, out of four for each heading.'),
          ('A third officer reads the application when the two disagree '
           'by more than ____________ point.', None, 'one',
           'Paragraph 3, in about one application in eight.'),
          ('Normally ____________ applicants are invited to interview '
           'for each post.', None, 'six',
           'Paragraph 4, and the rest are told within five days.')])],
   listen=[
    dict(heading='A call about an application', part='Part 1',
         task='A telephone call from a council office', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Good afternoon. Is that Mr Haruna-Petrov?'),
          ('Applicant', 'Speaking.'),
          ('Officer', 'This is Marchfield Council. I am calling about '
           'your application for the Parks Maintenance post.'),
          ('Applicant', 'Yes, I applied last week.'),
          ('Officer', 'We have shortlisted you. Can I confirm your '
           'application reference? It should be at the top of the '
           'email.'),
          ('Applicant', 'P M three three nine.'),
          ('Officer', 'P M three three nine. That is right. The '
           'interviews are on the fifteenth of March.'),
          ('Applicant', 'What time?'),
          ('Officer', 'We have a slot at ten fifteen and one at two '
           'thirty.'),
          ('Applicant', 'The afternoon one, please. I work in the '
           'morning.'),
          ('Officer', 'Two thirty, then. The interview lasts about forty '
           'minutes and there is a short practical task before it.'),
          ('Applicant', 'What sort of task?'),
          ('Officer', 'Reversing a small trailer. Nothing difficult, but '
           'bring your driving licence, both parts if you still have the '
           'paper one.'),
          ('Applicant', 'I will. Where do I come?'),
          ('Officer', 'The depot on Shawcross Lane, not the main offices. '
           'People go to the wrong place every year.'),
          ('Applicant', 'Shawcross Lane. And who should I ask for?'),
          ('Officer', 'Ask for Delphine Achterberg, who chairs the '
           'panel.'),
          ('Applicant', 'Thank you. One question: when will you let me '
           'know?'),
          ('Officer', 'The same evening, by telephone, and in writing '
           'within five working days.')],
         items=[
          ('Application reference: ____________', None, 'PM339',
           'Read back by the officer from the email.'),
          ('Interview date: ____________ March', None, '15',
           'As stated in the advertisement for that post.'),
          ('Interview time chosen: ____________', None, '2.30',
           'The afternoon slot, because he works in the morning.'),
          ('Document to bring: ____________', None, 'driving licence',
           'Both parts if he still has the paper one.'),
          ('Location: the depot on ____________ Lane', None,
           'Shawcross', 'The depot, not the main council offices.'),
          ('Ask for: ____________', None, 'Delphine Achterberg',
           'The person who chairs the interview panel.')])],
   speak=dict(
    part='Part 1', focus='Work you do or would like to do',
    intro=('Two or three sentences each. Name the job and then say one '
           'true thing about it.'),
    qs=['Do you work at the moment?',
        'What job would you like to do in the future?',
        'Is it easy to find work where you live?',
        'Would you prefer to work indoors or outdoors?'],
    shape=[('answer', 'I work part-time in a garden centre.'),
           ('support', 'It is outdoor work, which suits me in summer '
            'and less so in January.'),
           ('follow-up', 'I would like to do the same work for the '
            'council, because the hours are steadier.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Applying for a post and asking one question',
         prompt=('You have seen a job advertised that you want to apply '
                 'for. Write a letter to the employer. In your letter: '
                 'say which post you are applying for and where you saw '
                 'it; describe your relevant experience; ask one '
                 'question about the post. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing to apply for the post of Parks Maintenance '
          'Operative, reference PM339, as advertised on the council '
          'website on 1 March.',
          'I have worked outdoors for the last four years, most recently '
          'at Brambleton Garden Centre, where I am responsible for the '
          'planting areas and for the small machinery. I hold a full '
          'driving licence and I have towed a trailer regularly in that '
          'job. Before this I spent two years as a groundsman at a '
          'school, where I worked alone for most of the week.',
          'I am applying because I would like to do this work for a '
          'public employer, and because the post offers the training '
          'that a garden centre cannot.',
          'Could you tell me whether the post involves weekend work? The '
          'advertisement does not say, and I ask because I currently work '
          'alternate Saturdays and would need to give notice.',
          'I enclose the completed application form and the names of two '
          'referees, including my present employer.',
          'Yours faithfully,',
          'Ibrahim Haruna-Petrov'],
         notes=[
          'The first sentence gives the post, the reference and where the '
          'advertisement was seen. An employer receiving sixty letters '
          'sorts them by that line alone.',
          'The experience paragraph answers the essential requirements in '
          'the order the advert listed them: outdoor work, then the '
          'driving licence. That is not an accident and the reader '
          'notices it.',
          'The question has a reason attached. "Does it involve weekend '
          'work?" gets a yes or no; the same question with "because I '
          'would need to give notice" gets a useful answer and shows the '
          'writer is serious.'],
         criterion=[('Post, reference and source in the first sentence',
                     'Task Achievement'),
                    ('Experience given in the advert’s own order',
                     'Task Response'),
                    ('A question with its reason attached',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Present perfect for experience: I have worked on',
    explain=('Experience that is still relevant takes the present '
             'perfect; a finished period with a date takes the past '
             'simple.'),
    examples=['I have worked outdoors for the last four years.',
              'I have towed a trailer regularly in that job.',
              'Before this I spent two years as a groundsman.',
              'I have not used that machine, although I have used a '
              'similar one.'],
    task='Choose the present perfect or the past simple.',
    items=[('I (work) at the garden centre since 2021.',
            'I have worked at the garden centre since 2021.'),
           ('I (leave) my previous job in March 2023.',
            'I left my previous job in March 2023.'),
           ('I (never use) that type of mower.',
            'I have never used that type of mower.'),
           ('I (be) responsible for the planting areas for two years '
            'now.',
            'I have been responsible for the planting areas for two years '
            'now.'),
           ('Last summer I (train) two new members of staff.',
            'Last summer I trained two new members of staff.')]),
   vocab=[('job advert', 'a notice that a post is available'),
          ('vacancy', 'a post that needs filling'),
          ('drawn up a short list', 'chosen the applicants to '
           'interview'),
          ('referee', 'a person who writes about your work'),
          ('must have', 'something an applicant is required to have'),
          ('nice to have', 'something useful but not required'),
          ('covering letter', 'the letter sent with an application'),
          ('interview panel', 'the group who interview applicants')],
   expr=[('I am writing to apply for, as advertised in',
          'the opening sentence of an application'),
         ('I have worked outdoors for the last four years',
          'states experience in one line'),
         ('I ask because I would need to give notice',
          'attaches a reason to a question'),
         ('I enclose the completed application form',
          'closes a formal application')],
   trans=['furthermore', 'in addition', 'before this', 'most recently'],
  ),

  dict(
   sub='The first weeks in a job',
   step=2,
   read=[
    dict(heading='Four people remember starting work',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Esperanza: Nobody told me where anything was and I was too '
          'embarrassed to ask. I spent my first week looking for the '
          'stationery cupboard and pretending I was busy. One sentence on '
          'my first morning would have saved all of it.',
          'B  Kwabena: My manager gave me one job for the whole first '
          'week and checked it on Friday. It felt slow at the time and I '
          'now think it was the best thing anybody has done for me, '
          'because I learned one process properly instead of five '
          'badly.',
          'C  Marisol: I had a mentor, which sounds excellent and was '
          'mostly a name on a form. She was in another building and we '
          'met twice. The scheme existed; the help did not.',
          'D  Teodor: I was given a long list of training videos and no '
          'time in which to watch them. I watched three in my own '
          'evenings and then stopped, which I do not regret.'],
         items=[
          ('Which person was afraid to ask questions?',
           ['Esperanza', 'Kwabena', 'Marisol', 'Teodor'], 0,
           'She spent a week pretending to be busy.'),
          ('Which person was given one task to learn properly?',
           ['Esperanza', 'Kwabena', 'Marisol', 'Teodor'], 1,
           'One job for the whole first week, checked on Friday.'),
          ('Which person describes help that existed only on paper?',
           ['Esperanza', 'Kwabena', 'Marisol', 'Teodor'], 2,
           'The scheme existed; the help did not.'),
          ('Which person was given training but no time for it?',
           ['Esperanza', 'Kwabena', 'Marisol', 'Teodor'], 3,
           'A long list of videos and no time to watch them.'),
          ('Kwabena thought his first week was slow at the time.',
           ['True', 'False', 'Not Given'], 0,
           'He says it felt slow and he now values it.',
           {1: 'False would need him to say it felt fast; he says the '
               'opposite.', 2: 'Not Given is wrong because he describes how it felt at '
               'the time.'}),
          ('Teodor complained to his manager about the videos.',
           ['True', 'False', 'Not Given'], 2,
           'He says he stopped watching them; no complaint is '
           'mentioned.',
           {0: 'True would need a complaint; he only stopped watching.', 1: 'False would need the text to rule a complaint out, and '
               'it is silent.'})])],
   listen=[
    dict(heading='A manager briefs a new starter', part='Part 2',
         task='A talk to a new employee', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Manager', 'Welcome. I am going to spend ten minutes telling '
           'you how the first three months work, because most people '
           'leave this conversation with the wrong idea about '
           'probation.'),
          ('Manager', 'Your probation period is six months, not three. '
           'There is a review at six weeks, another at three months and a '
           'final one at six. The six-week one is the important one, '
           'because that is where anything that is going wrong can still '
           'be fixed easily.'),
          ('Manager', 'During probation your notice period is one week on '
           'either side. After it, yours becomes four weeks and ours '
           'becomes eight. People often think probation means we can '
           'dismiss you without a reason, and that is not the case: we '
           'give a reason and you can reply to it.'),
          ('Manager', 'You have been assigned a mentor, Oyelaran in the '
           'depot. He is not your manager and nothing you say to him '
           'comes back to me, which is the whole point of the '
           'arrangement.'),
          ('Manager', 'The induction course runs on Tuesday and Thursday '
           'of next week and it is compulsory. The rest of the training '
           'is a list of videos that I am going to be honest about: watch '
           'the three on machinery, which are genuinely useful, and the '
           'others when you have nothing better to do.'),
          ('Manager', 'One rule that matters more than it sounds. If you '
           'do not know how to do something, ask on the same day. Every '
           'serious mistake I have seen here was made by somebody who '
           'guessed on a Monday and told nobody until Friday.')],
         items=[
          ('The probation period lasts ____________ months.', None,
           'six', 'Not three, which is what people assume.'),
          ('The most important review takes place at ____________ '
           'weeks.', None, 'six',
           'Because problems can still be fixed easily then.'),
          ('During probation, the notice period is ____________ week on '
           'each side.', None, 'one',
           'Rising to four and eight afterwards.'),
          ('The mentor works in the ____________.', None, 'depot',
           'And is not the new starter’s manager.'),
          ('The induction course is described as',
           ['optional', 'compulsory', 'online', 'monthly'], 1,
           'Running on Tuesday and Thursday of the following week.'),
          ('His rule is to ask on the same ____________ if you do not '
           'know something.', None, 'day',
           'Because serious mistakes come from guessing and waiting.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Starting something new',
    intro=('Short answers, then the long turn. Describe what happened '
           'before you say how you felt.'),
    cue=('Describe a time when you started something new.',
         ['what it was', 'when it was', 'how you felt at the start',
          'and explain what made it easier']),
    qs=['Do you enjoy starting new things?',
        'Is it difficult to join a group of people who know each '
        'other?',
        'Now look at the card. You have one minute to make notes.',
        'Should employers do more to help new staff?'],
    shape=[('answer', 'Starting at the garden centre, four years ago.'),
           ('support', 'It was my first job after school and I knew '
            'nobody there.'),
           ('follow-up', 'For the first fortnight I was frightened of '
            'asking anything.'),
           ('support', 'What made it easier was one colleague who '
            'explained things without being asked.'),
           ('follow-up', 'I try to do the same now when somebody new '
            'arrives, which I think is how it is supposed to '
            'work.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should employers give new staff more training?',
         prompt=('Some people believe employers should give new '
                 'employees more training. To what extent do you agree? '
                 'Write at least 250 words.'),
         model=[
          'I agree that employers should train new staff more than they '
          'currently do, and I would add that the quantity of training '
          'matters less than when it is given and whether there is time '
          'to use it.',
          'The first reason is that a badly trained start is expensive '
          'for the employer, not only for the employee. A new worker who '
          'guesses rather than asks will eventually make an error that '
          'costs more than the training would have done, and in some '
          'industries that error is dangerous rather than merely '
          'costly.',
          'The second reason is that training decides who stays. Most '
          'people who leave a job in the first year leave in the first '
          'three months, and the common feature of those months is '
          'confusion rather than difficulty. Replacing an employee costs '
          'several months of salary, which makes a week of proper '
          'training a cheap investment.',
          'The third reason concerns fairness. Confident employees ask '
          'questions and are helped; quieter ones do not and are judged '
          'later for mistakes that proper training would have prevented. '
          'A formal programme reaches both kinds of person, and informal '
          'help reaches only the first.',
          'There is a qualification I would make. Training given as a '
          'list of videos with no time set aside is worse than useless, '
          'because it looks like support while leaving the employee to '
          'watch them in the evening or not at all. Time must be part of '
          'the offer.',
          'In conclusion, employers should provide structured training in '
          'the first weeks and should protect the hours needed for it. '
          'The question is not how much training is offered, but whether '
          'anybody is given time to take it.'],
         notes=[
          'Structure 1: one point of view with three reasons. The reasons '
          'are genuinely different — cost, retention, fairness — rather '
          'than the same reason three times, which is what makes this '
          'structure work.',
          'The fifth paragraph is a qualification rather than a '
          'counter-argument. It strengthens the position by naming the '
          'form of training that does not help.',
          'The conclusion restates the position as a distinction between '
          'the amount of training and the time to use it, which is more '
          'than the introduction said.'],
         criterion=[('Three reasons that are genuinely different',
                     'Task Response'),
                    ('A qualification that strengthens the position',
                     'Task Response'),
                    ('A conclusion that adds a distinction',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Modal verbs for expectation: are expected to, are supposed '
          'to',
    explain=('Rules and expectations at work need a modal that says how '
             'strong the obligation is.'),
    examples=['New staff are expected to attend the induction course.',
              'You are supposed to ask on the same day.',
              'Employees must give four weeks’ notice after '
              'probation.',
              'You are not required to watch every video.'],
    task='Rewrite each sentence with a suitable modal expression.',
    items=[('The induction course is compulsory.',
            'New employees are required to attend the induction course.'),
           ('Ask on the same day.',
            'You are expected to ask on the same day if you are '
            'unsure.'),
           ('The mentor does not report to the manager.',
            'The mentor is not supposed to pass anything back to the '
            'manager.'),
           ('Four weeks of notice after probation.',
            'After probation, employees must give four weeks’ '
            'notice.'),
           ('The other videos are optional.',
            'You are not required to watch the remaining videos.')]),
   vocab=[('probation', 'a trial period in a new job'),
          ('trial period', 'a first period during which work is '
           'judged'),
          ('induction', 'the first training in a new job'),
          ('mentor', 'an experienced person who advises a newcomer'),
          ('someone to ask', 'a colleague you can go to for help'),
          ('take over from', 'to continue work another person was '
           'doing'),
          ('notice period', 'how long before leaving you must tell an '
           'employer'),
          ('line manager', 'the person who manages you directly')],
   expr=[('what helped most was',
          'names the thing that made a difference'),
         ('it took me about a month before I',
          'describes how long something took'),
         ('the scheme existed; the help did not',
          'the sentence this cycle turns on'),
         ('ask on the same day',
          'the rule from the manager’s talk')],
   trans=['at first', 'after a while', 'eventually', 'in the end'],
  ),

  dict(
   sub='Working hours',
   step=2,
   read=[
    dict(heading='The four-day week: three trials',
         kind='Article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 29-34',
         figure=_HOURS,
         paras=[
          'Working hours differ widely between countries, as the chart '
          'above shows, and the differences are much larger than most '
          'people assume. Full-time employees in Mexico work about '
          'eleven and a half hours a week more than full-time employees '
          'in the Netherlands, which is more than an extra working day.',
          'That comparison has encouraged several employers to test a '
          'shorter week. The best-known trial, in the United Kingdom, '
          'involved sixty-one companies and about 2,900 employees, who '
          'moved to four days with no reduction in pay.',
          'The results were measured against the same companies in the '
          'previous year. Output stayed roughly the same, the number of '
          'staff leaving fell by more than half, and the number of days '
          'lost to sickness fell by about two-thirds. Fifty-six of the '
          'sixty-one companies continued afterwards.',
          'A second trial in Iceland was much larger and worked '
          'differently, reducing the week to thirty-five or thirty-six '
          'hours rather than to four days. A third, in Japan, was run '
          'inside one company and reported higher output per hour and '
          'sharply lower printing and electricity costs.',
          'The obvious objection is that the companies volunteered, which '
          'means they were the ones most likely to succeed. That is true, '
          'and it is why no trial so far tells us what would happen if '
          'every employer were required to do the same thing.'],
         items=[
          ('Which paragraph describes the objection to the evidence?',
           ['Paragraph 1', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 3,
           'The companies volunteered, so they were the likeliest to '
           'succeed.'),
          ('Which paragraph gives results measured against an earlier '
           'year?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Output, staff leaving and days lost to sickness.'),
          ('Which paragraph describes a trial that shortened hours '
           'rather than days?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Iceland, to thirty-five or thirty-six hours.'),
          ('The United Kingdom trial involved about ____________ '
           'employees.', None, '2,900',
           'Paragraph 2, across sixty-one companies.'),
          ('Days lost to sickness fell by about ____________.', None,
           'two-thirds', 'Paragraph 3, measured against the previous '
           'year.'),
          ('____________ of the sixty-one companies continued after the '
           'trial.', None, 'Fifty-six',
           'Paragraph 3, which is the clearest single result.')])],
   listen=[
    dict(heading='Two employees discuss shorter hours', part='Part 3',
         task='A discussion between two colleagues', band='l3',
         qtype='Questions 35-40',
         script=[
          ('Marisol', 'Did you read the note about the four-day week '
           'trial?'),
          ('Kwabena', 'I read it twice and I still have a question. Is '
           'the pay the same?'),
          ('Marisol', 'The same. Four days, same money, same targets.'),
          ('Kwabena', 'Then the targets are the part I am worried '
           'about.'),
          ('Marisol', 'Why? If the work gets done in four days, the fifth '
           'was never needed.'),
          ('Kwabena', 'That is true for your job and not for mine. You '
           'write reports. I answer the phone, and the phone does not '
           'ring less because we are open four days.'),
          ('Marisol', 'That is a fair point and the note does not deal '
           'with it.'),
          ('Kwabena', 'So either they employ more people on the phones, '
           'which costs money, or four of us cover five days and nobody '
           'actually gets a four-day week.'),
          ('Marisol', 'In the trials, the firms that managed it best were '
           'the ones that cut meetings first. One company cut its '
           'meetings by about forty per cent and lost nothing.'),
          ('Kwabena', 'Again, that is office work. I have no meetings to '
           'cut.'),
          ('Marisol', 'Then what would you ask for instead?'),
          ('Kwabena', 'Shorter days rather than fewer. Seven hours '
           'instead of eight, five days a week. The phone is covered and '
           'I still get my evenings.'),
          ('Marisol', 'That is what Iceland did, in fact, and it worked '
           'better for exactly the jobs like yours.'),
          ('Kwabena', 'Then I would support that version tomorrow. I am '
           'not against the idea. I am against being given a policy '
           'designed for somebody else’s job.')],
         items=[
          ('Under the proposal, pay and targets would be',
           ['reduced', 'the same', 'reviewed', 'increased'], 1,
           'Four days, same money, same targets.'),
          ('Kwabena says his job differs because he answers the '
           '____________.', None, 'phone',
           'Which does not ring less for being open four days.'),
          ('He says the alternatives are employing more people or '
           '____________ of them covering five days.', None, 'four',
           'In which case nobody gets a four-day week.'),
          ('In the trials, the firms that managed best cut '
           '____________ first.', None, 'meetings',
           'One company cut them by about forty per cent.'),
          ('Kwabena would prefer days of ____________ hours.', None,
           'seven', 'Five days a week rather than four.'),
          ('He says he is against being given a policy designed for '
           'somebody else’s ____________.', None, 'job',
           'Rather than against the idea itself.')])],
   speak=dict(
    part='Part 3', focus='Hours and the rest of life',
    intro=('Three or four sentences. Compare two situations if you '
           'can.'),
    qs=['Do people in your country work long hours?',
        'Would a four-day week work for every job?',
        'Is it better to be paid more or to work fewer hours?',
        'Should employers decide working hours, or governments?'],
    shape=[('answer', 'Longer than our neighbours and shorter than they '
            'used to be.'),
           ('support', 'A full-time week here is about thirty-six '
            'hours.'),
           ('follow-up', 'In Mexico it is over forty-three, which is '
            'more than an extra day.'),
           ('support', 'A four-day week would suit office jobs better '
            'than service jobs.'),
           ('follow-up', 'If the phone has to be answered five days, '
            'somebody is working five days whatever the policy '
            'says.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Average weekly hours worked in five countries',
         prompt=('The chart below shows the average number of hours '
                 'worked each week by full-time employees in five '
                 'countries in 2024. Summarise the information by '
                 'selecting and reporting the main features, and make '
                 'comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_HOURS,
         model=[
          'The bar chart shows the average number of hours worked each '
          'week by full-time employees in five countries in 2024. '
          'Overall, Mexico had by far the longest working week and the '
          'Netherlands the shortest, with a difference of almost twelve '
          'hours between them.',
          'Employees in Mexico worked 43.1 hours a week, which was nearly '
          'five hours more than in Japan, the second highest at 38.4 '
          'hours. These two countries stood clearly above the other '
          'three.',
          'The United Kingdom and France formed a middle group, at 36.2 '
          'and 34.7 hours respectively, a difference of only about an '
          'hour and a half. The Netherlands was lowest at 31.5 hours, '
          'about five hours below the United Kingdom.',
          'The gaps are not evenly spread. The distance between the '
          'highest and the second highest is almost five hours, while '
          'the three European countries lie within five hours of one '
          'another. Mexico is therefore the clearest exception rather '
          'than the top of a gradual scale.'],
         notes=[
          'The Overall statement names the highest, the lowest and the '
          'size of the gap between them. Three facts in one sentence, and '
          'the rest of the answer can then group.',
          'The countries are grouped — two high, two middle, one low — '
          'rather than listed from top to bottom. Grouping is the single '
          'move that lifts this task type.',
          'The last paragraph says something about the shape of the data '
          'rather than repeating values, which is where the higher marks '
          'on Task 1 are found.'],
         criterion=[('An Overall with highest, lowest and the gap',
                     'Task Achievement'),
                    ('Countries grouped rather than listed',
                     'Coherence and Cohesion'),
                    ('A comment on the shape of the data',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Comparative and superlative with data',
    explain=('Comparisons of figures need the measure as well as the '
             'direction: how much more, not simply more.'),
    examples=['Employees in Mexico worked nearly five hours more than '
              'in Japan.',
              'The Netherlands had the shortest working week of the '
              'five.',
              'France and the United Kingdom differed by about an hour '
              'and a half.',
              'Mexico worked almost twelve hours a week more than the '
              'Netherlands.'],
    task='Rewrite each sentence so that the size of the difference is '
         'given.',
    items=[('Mexico works more than Japan.',
            'Employees in Mexico worked nearly five hours a week more '
            'than those in Japan.'),
           ('The Netherlands is the lowest.',
            'The Netherlands had the shortest working week of the five '
            'countries, at 31.5 hours.'),
           ('France and the UK are similar.',
            'France and the United Kingdom differed by only about an hour '
            'and a half.'),
           ('Sickness fell a lot.',
            'Days lost to sickness fell by about two-thirds during the '
            'trial.'),
           ('Most companies kept the policy.',
            'Fifty-six of the sixty-one companies continued with the '
            'shorter week afterwards.')]),
   vocab=[('overtime', 'hours worked beyond the normal week'),
          ('extra hours', 'time worked above the contract'),
          ('productivity', 'how much is produced in an hour of work'),
          ('work done per hour', 'output measured against time'),
          ('flexible', 'able to be varied to suit people'),
          ('burnout', 'exhaustion caused by long-term overwork'),
          ('four-day week', 'a working week of four days'),
          ('shift', 'a fixed period of work in a day')],
   expr=[('the longest hours are worked in, at just over',
          'opens a description of a chart'),
         ('which is more than an extra working day',
          'turns a number into something a reader can picture'),
         ('a policy designed for somebody else’s job',
          'names an objection in six words'),
         ('output stayed roughly the same',
          'reports a result that did not change')],
   trans=['whereas', 'by contrast', 'overall', 'respectively'],
  ),

  dict(
   sub='What automation does to work',
   step=3,
   read=[
    dict(heading='The machines and the jobs they replaced',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given and summary '
              'completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'The fear that machines will take the work is older than the '
          'machines most people worry about. It appeared in the textile '
          'towns of the early nineteenth century, returned with the '
          'tractor, again with the computer, and has returned once more '
          'with software that can write and summarise. Each time, the '
          'fear has been partly justified and the predicted collapse of '
          'employment has failed to arrive. That record is worth '
          'examining closely, because it is quoted by both sides of the '
          'present argument and neither side quotes all of it.',
          'The pattern so far has been consistent and uncomfortable. '
          'Machines replace tasks rather than occupations. A cash '
          'machine removed most of the counting that bank clerks did. '
          'Banks responded by opening more branches with fewer clerks '
          'in each, so that the number of clerks fell slowly while the '
          'number of branches rose sharply. The task disappeared; the '
          'job changed; and the clerks who remained spent their time '
          'selling rather than counting.',
          'The second regular feature is that the new work is not '
          'where the old work was. Agricultural employment in Britain '
          'fell from about a fifth of all workers to under two per '
          'cent across a century, and the new jobs appeared in cities, '
          'in factories and later in offices. For an individual farm '
          'worker of fifty, the fact that employment rose nationally '
          'was no comfort at all. The gap between the national figure '
          'and his own situation is the thing that most arguments '
          'about automation leave out.',
          'The third feature is the one economists argue about. '
          'Average wages rose through every previous wave of '
          'automation, but they did not rise for everyone at the same '
          'time, and in some regions they did not rise for a '
          'generation. The aggregate figure and the individual '
          'experience can point in opposite directions for thirty '
          'years, and both numbers are honest. That is why two people '
          'can quote accurate figures at each other and reach opposite '
          'conclusions.',
          'What is different about the present wave is the kind of task '
          'being automated. Earlier machines replaced physical and '
          'routine work; recent software replaces parts of jobs that '
          'require judgement, including writing, translating and '
          'diagnosis. Whether that difference changes the pattern or '
          'merely moves it to a different set of workers is the question '
          'now being argued, and nobody honest claims to know the answer '
          'yet. What can be said is that the people affected this time '
          'are better placed to argue about it in public.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['An old fear returns', 'Tasks replaced, not jobs',
            'Where the new work appears', 'The present wave'], 1,
           'The cash machine example: the task went, the job '
           'changed.'),
          ('Choose the best heading for paragraph 3.',
           ['The farm and the city', 'Average wages',
            'What software can do', 'The textile towns'], 0,
           'New jobs appeared in cities rather than where the old ones '
           'were.'),
          ('Choose the best heading for paragraph 5.',
           ['Why the fear is groundless',
            'What is different this time', 'Wages and regions',
            'A century of agriculture'], 1,
           'Software replacing work that requires judgement.'),
          (
           'The writer believes employment has collapsed in previous '
           'waves of automation.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 1 says the predicted collapse failed to arrive.',
           {0: 'Yes would need agreement; paragraph 1 says the '
               'collapse failed to arrive.', 2: 'Not Given is wrong because the writer states a view on '
               'earlier waves.'}),
          (
           'The number of bank branches rose while the number of '
           'clerks in each fell.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 states this about the cash machine.',
           {1: 'No would need a contradiction; paragraph 2 states both '
               'movements.', 2: 'Not Given is wrong because the cash-machine example '
               'gives both figures.'}),
          (
           'The writer believes the present wave will reduce total '
           'employment.', ['True', 'False', 'Not Given'], 2,
           'Paragraph 5 says nobody honest claims to know.',
           {0: 'Yes would need a prediction; paragraph 5 declines to '
               'make one.', 1: 'No would need him to rule it out, and he says nobody '
               'honest knows.'}),
          ('Agricultural employment in Britain fell to under '
           '____________ per cent of all workers.', None, 'two',
           'Paragraph 3, from about a fifth.'),
          ('In some regions wages did not rise for a ____________.',
           None, 'generation',
           'Paragraph 4, although average wages rose.')])],
   listen=[
    dict(heading='A lecture on technology and employment',
         part='Part 4', task='A lecture on automation', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I want to give you three facts about automation '
           'that are all true at once, because almost every argument you '
           'will read uses one of them and hides the other two.'),
          ('Lecturer', 'Fact one. In two hundred years of machines, '
           'total employment has risen, not fallen. Every generation has '
           'predicted the end of work, every generation has been wrong '
           'about the total, and the people predicting it were not '
           'foolish. They could see the jobs going and they could not '
           'yet see what would replace them.'),
          ('Lecturer', 'Fact two. The jobs that went did not come back, '
           'and the people who lost them mostly did not get the new ones. '
           'When farm work collapsed in Britain, from about a fifth of '
           'all workers to under two per cent, the new work was in '
           'cities, and a fifty-year-old farm labourer did not move to a '
           'city and become a clerk.'),
          ('Lecturer', 'Fact three, which is the one that matters for '
           'policy. The gap between those two facts is measured in '
           'decades. Average wages recovered, and in some regions they '
           'took forty years to recover, which is longer than a working '
           'life.'),
          ('Lecturer', 'So when somebody tells you automation creates '
           'more jobs than it destroys, ask two questions. Over what '
           'period? And for whom? Both answers are usually missing, and '
           'the sentence is useless without them.'),
          ('Lecturer', 'What is genuinely new now is the type of task. '
           'Machines used to take routine work. The present software '
           'takes parts of jobs that involve judgement: drafting, '
           'translating, reading a scan. The pattern may still hold. It '
           'will hold for a different set of people, and some of them are '
           'in this room.')],
         items=[
          ('Fact one is that total employment has ____________ over two '
           'hundred years.', None, 'risen',
           'Despite every generation predicting the end of work.'),
          ('Farm work in Britain fell from about a ____________ of all '
           'workers.', None, 'fifth',
           'To under two per cent across about a century.'),
          ('He says the gap between the first two facts is measured in',
           ['months', 'years', 'decades', 'centuries'], 2,
           'With some regions taking forty years.'),
          ('In some regions, wages took ____________ years to '
           'recover.', None, 'forty',
           'Which he says is longer than a working life.'),
          ('The two questions he says to ask are over what period and '
           'for ____________.', None, 'whom',
           'Both usually missing from the claim.'),
          ('What is new, he says, is the type of ____________ being '
           'automated.', None, 'task',
           'Work involving judgement rather than routine work.')])],
   speak=dict(
    part='Part 3', focus='Jobs machines can and cannot do',
    intro=('Four sentences. Name a job and then the part of it a '
           'machine could do.'),
    qs=['Which jobs could machines do in the future?',
        'Which jobs will always need people?',
        'Should companies be allowed to replace workers with '
        'machines?',
        'How should people prepare for these changes?'],
    shape=[('answer', 'Parts of most jobs rather than whole jobs.'),
           ('support', 'A machine can read a scan and cannot tell a '
            'patient what it means.'),
           ('follow-up', 'So the job changes rather than '
            'disappearing.'),
           ('support', 'The difficulty is that the change is not kind '
            'to the person it happens to.'),
           ('follow-up', 'Telling a fifty-year-old that employment will '
            'recover in twenty years is not an answer to his '
            'problem.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: will automation reduce the number of jobs?',
         prompt=('Will automation reduce the number of jobs? Brainstorm '
                 'eight ideas, apply the six tests from unit 1, and '
                 'write the plan. Twelve minutes.'),
         plan=('Automation is unlikely to reduce the total number of '
               'jobs and is very likely to destroy particular jobs in '
               'particular places, which is why the honest answer '
               'depends on whether the question is about the total or '
               'about people',
               [('The total has risen through every previous wave',
                 ['machines have replaced tasks rather than whole '
                  'occupations',
                  'employment rose while farm work fell from a fifth to '
                  'two per cent']),
                ('The people and places that lost were not the ones that '
                 'gained',
                 ['the new work appeared in cities rather than where the '
                  'old work was',
                  'in some regions wages took about forty years to '
                  'recover'])]),
         notes=[
          'This question contains two questions, and the first job of the '
          'plan is to notice that. "The number of jobs" can mean the '
          'national total or the jobs of particular people, and the '
          'evidence answers the two differently.',
          'Test three from unit 1 does most of the work on this topic. '
          'Ideas such as "robots are expensive" and "machines need '
          'maintenance" are details of one another and should be merged '
          'or crossed out.',
          'Both supports under each heading are facts from this unit, so '
          'the essay in cycle 5 can be written without inventing '
          'evidence.'],
         criterion=[('Noticing that the question contains two '
                     'questions', 'Task Response'),
                    ('Main ideas that are separate from one another',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Future forms for prediction: is likely to, is expected to',
    explain=('A prediction needs a form that shows how confident the '
             'claim is and what it is based on.'),
    examples=['Automation is likely to change many jobs rather than '
              'remove them.',
              'Employment is expected to rise overall.',
              'Some regions may not recover for a generation.',
              'The pattern will probably hold, although for different '
              'workers.'],
    task='Rewrite each flat prediction with a hedged future form.',
    items=[('Machines will take all the jobs.',
            'Machines are likely to take over particular tasks rather '
            'than whole occupations.'),
           ('Employment will rise.',
            'Total employment is expected to continue rising, as it has '
            'in previous waves.'),
           ('Wages will recover.',
            'Average wages will probably recover, although in some '
            'regions this may take decades.'),
           ('Nobody will lose their job.',
            'Many individual workers are likely to lose their jobs even '
            'if the total does not fall.'),
           ('This time is different.',
            'The present wave may prove different, because the tasks '
            'being automated involve judgement.')]),
   vocab=[('replace a job', 'to remove the need for a worker'),
          ('help a worker do more', 'to increase what one person can '
           'produce'),
          ('same task every day', 'work that does not vary'),
          ('learn a new trade', 'to train for different work'),
          ('new technology', 'recently invented machines or software'),
          ('the whole market', 'all employers and workers together'),
          ('jobs lost', 'posts that no longer exist'),
          ('moving between jobs', 'changing from one kind of work to '
           'another')],
   expr=[('the pattern so far has been that',
          'introduces evidence from the past'),
         ('the task disappeared; the job changed',
          'the sentence this cycle turns on'),
         ('over what period, and for whom',
          'the two questions to ask about any prediction'),
         ('no comfort at all to an individual worker',
          'separates the total from the person')],
   trans=['historically', 'more recently', 'in future', 'so far'],
  ),

  dict(
   sub='Why the fear keeps returning',
   step=4,
   read=[
    dict(heading='Two centuries of predicting the end of work',
         kind='Academic passage',
         task='Matching information, True/False/Not Given and short '
              'answer',
         band='acad', qtype='Questions 55-62',
         paras=[
          'Every generation since 1800 has produced a confident '
          'prediction that machines were about to end paid work. Every '
          'one of those predictions has been wrong about the total '
          'while being right about something else. Understanding what '
          'they were right about is considerably more useful than '
          'counting how often they were wrong. It explains why the '
          'same fear returns in each generation rather than dying with '
          'the one before.',
          'They were right, first, about the speed of the loss. When a '
          'machine replaces a task, it replaces it everywhere within a '
          'few years, because any employer who does not adopt it is '
          'undercut by one who does. The jobs vanish quickly and the '
          'replacement work appears slowly, over a decade or more. '
          'There is always a period during which the gloomiest '
          'predictions look entirely correct and their authors are '
          'widely believed.',
          'They were right, second, about who pays. The people whose '
          'work is replaced are rarely the people who get the new work. '
          'They are older, they live in the wrong region, and the skill '
          'that made them valuable is precisely the skill that has been '
          'automated. A national recovery over twenty years is '
          'irrelevant to a worker of fifty-five.',
          'Where they were wrong was in treating the quantity of work '
          'as fixed. If there is a certain amount of work to be done, '
          'a machine that does half of it leaves half as much for '
          'people. But demand is not fixed. Cheaper production has '
          'repeatedly created new goods, new services and whole '
          'industries that nobody had previously thought to want, and '
          'those industries employ people in numbers that nobody could '
          'have forecast beforehand.',
          'This is why the honest answer to "will automation destroy '
          'jobs?" is that it depends entirely on which question is being '
          'asked. The total number of jobs is unlikely to fall. The '
          'particular jobs held by particular people in particular towns '
          'will certainly disappear, and many of them have disappeared '
          'already. Both statements are supported by the same evidence, '
          'and anybody quoting only one of them is making an argument '
          'rather than reporting a finding.',
          'The policy conclusion follows from the distinction rather than '
          'from the forecast. Arguing about whether the total will fall '
          'is almost useless, because the answer arrives too late to help '
          'anybody. Arguing about how a fifty-five-year-old in a town '
          'with one employer is supported through a transition is useful, '
          'and it is a question about money and training rather than '
          'about technology.'],
         items=[
          ('Which paragraph explains why jobs disappear faster than new '
           'ones appear?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Any employer who does not adopt the machine is undercut.'),
          ('Which paragraph identifies the mistake in the old '
           'predictions?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Treating the quantity of work as a fixed amount.'),
          ('Which paragraph says the useful argument is about support '
           'rather than forecasting?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 3,
           'A question about money and training rather than '
           'technology.'),
          (
           'The writer believes previous predictions were entirely '
           'wrong.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 1 says they were right about something else.',
           {0: 'Yes would need the whole claim; he says they were '
               'right about something else.', 2: 'Not Given is wrong because paragraph 1 judges the '
               'predictions.'}),
          (
           'The writer believes the total number of jobs is likely to '
           'fall.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 5 says it is unlikely to fall.',
           {0: 'Yes would need agreement; paragraph 5 calls a fall '
               'unlikely.', 2: 'Not Given is wrong because the writer gives his '
               'expectation.'}),
          (
           'The writer believes governments should slow down the '
           'adoption of machines.',
           ['True', 'False', 'Not Given'], 2,
           'No view on slowing adoption is expressed anywhere.',
           {0: 'Yes would need a recommendation about policy, and none '
               'is made.', 1: 'No would need him to argue against slowing it, which '
               'he never does.'}),
          ('The predictions treat the ____________ of work as fixed.',
           None, 'quantity',
           'Paragraph 4, which is where they go wrong.'),
          ('The useful question concerns how a worker is supported '
           'through a ____________.', None, 'transition',
           'The final paragraph, which calls it a question about money '
           'and training.')])],
   listen=[
    dict(heading='Two economists disagree about automation',
         part='Part 4', task='A recorded discussion', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Dr Oyelaran-Vance expects automation to create more '
           'jobs than it destroys. Professor Ingerson expects the '
           'opposite. Each begins with the strongest point against their '
           'own position.'),
          ('Oyelaran-Vance', 'Mine is that I quote the two-hundred-year '
           'record, and a record is not a law. Nothing guarantees that '
           'the next wave behaves like the last five. I say "history '
           'shows" when I mean "history so far shows".'),
          ('Ingerson', 'And mine is that I have predicted falling total '
           'employment three times in my career and been wrong three '
           'times. I think the reasons are different now. I am also aware '
           'that everybody who was wrong before thought that too.'),
          ('Chair', 'So where is the disagreement?'),
          ('Ingerson', 'On whether judgement work is different in kind. '
           'He thinks software will take tasks inside those jobs. I think '
           'it takes enough of them that the job stops being worth '
           'paying for.'),
          ('Oyelaran-Vance', 'Which is a real disagreement and it is '
           'about degree rather than principle.'),
          ('Ingerson', 'May I say what we agree about, because it matters '
           'more than the argument? Neither of us thinks the total '
           'figure is the right thing to argue about.'),
          ('Oyelaran-Vance', 'Agreed. If employment rises by two per cent '
           'and a town loses its only employer, the national figure has '
           'told you nothing about that town.'),
          ('Ingerson', 'And the support for the people in it is a '
           'political choice, not a consequence of the technology. That '
           'is the part both sides leave out when they quote numbers at '
           'each other.'),
          ('Oyelaran-Vance', 'Then we have agreed on the only thing '
           'anybody can act on, which is more than the chair was '
           'expecting.')],
         items=[
          ('The first economist admits that a record is not a '
           '____________.', None, 'law',
           'And that he says "history shows" for "history so far '
           'shows".'),
          ('The second admits she has predicted falling employment and '
           'been wrong ____________ times.', None, 'three',
           'In the course of her career, she says.'),
          ('They disagree about whether ____________ work is different '
           'in kind.', None, 'judgement',
           'And he says software takes only tasks inside those jobs.'),
          ('He calls the disagreement one about',
           ['principle', 'degree', 'evidence', 'timing'], 1,
           'Rather than about principle, he says.'),
          ('They agree that the ____________ figure is not the right '
           'thing to argue about.', None, 'total',
           'Because it tells you nothing about one town.'),
          ('Support for affected workers, she says, is a '
           '____________ choice.', None, 'political',
           'Rather than a consequence of the technology.')])],
   speak=dict(
    part='Part 3', focus='Preparing for work that does not exist yet',
    intro=('Four or five sentences. Say what you would do rather than '
           'what should happen.'),
    qs=['How can people prepare for jobs that do not exist yet?',
        'Should schools teach different subjects because of '
        'automation?',
        'Whose responsibility is retraining: the worker, the employer '
        'or the state?',
        'Are you optimistic about the future of work?'],
    shape=[('answer', 'By learning the things that transfer rather than '
            'the things that are current.'),
           ('support', 'Any specific tool I learn now may be gone in '
            'ten years.'),
           ('follow-up', 'Writing clearly and understanding numbers '
            'have survived every wave so far.'),
           ('support', 'Retraining has to be paid for by somebody other '
            'than the person who has just lost a job.'),
           ('follow-up', 'A fifty-five-year-old with a mortgage cannot '
            'take two unpaid years, and that is the whole problem in '
            'one sentence.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Will automation create more jobs than it destroys?',
         prompt=('Some people believe that automation will create more '
                 'jobs than it destroys, while others believe it will '
                 'reduce the amount of work available. Discuss both '
                 'views and give your own opinion. Write at least 250 '
                 'words.'),
         model=[
          'Both of these views are supported by real evidence, which is '
          'unusual in an argument of this kind. My own position is that '
          'they answer different questions: one is about the national '
          'total and the other is about particular people, and the '
          'evidence says yes to the first and no to the second.',
          'Those who expect automation to create jobs point to two '
          'hundred years of machines. Total employment has risen through '
          'every previous wave, because machines have replaced tasks '
          'rather than whole occupations and because cheaper production '
          'has created industries that nobody had previously imagined. '
          'The cash machine reduced the counting work of bank clerks and '
          'banks responded by opening more branches.',
          'Those who expect the opposite point to the people inside those '
          'figures. When agricultural employment in Britain fell from '
          'about a fifth of all workers to under two per cent, the new '
          'jobs appeared in cities, and a farm worker of fifty did not '
          'become a clerk. In some regions, average wages took around '
          'forty years to recover, which is longer than a working '
          'life.',
          'My own view is that the argument about the total is almost '
          'useless, because the answer arrives too late to help anybody '
          'affected. What matters is the speed of the loss against the '
          'speed of the replacement, and that gap is where the damage '
          'sits. A country that accepts automation and does nothing for '
          'the towns it empties has chosen that outcome; the technology '
          'did not choose it.',
          'In conclusion, automation is unlikely to reduce the total '
          'number of jobs and is certain to destroy particular ones. The '
          'useful question is not which side is right but what is owed to '
          'the people on the losing side of a change that benefits '
          'everybody else.'],
         notes=[
          'Structure 3: two positions and then a third. The third '
          'position here is not a compromise; it says the two sides are '
          'answering different questions, which is a stronger move and '
          'is supported by the unit’s evidence.',
          'Each body paragraph carries one concrete example — the cash '
          'machine, the farm worker, the forty years. A discussion essay '
          'without examples becomes two paragraphs of opinion.',
          'The final sentence turns the question into one about '
          'obligation rather than prediction, which is where the '
          'argument actually matters and where the reader is left with '
          'something to think about.'],
         criterion=[('A third position that separates two questions',
                     'Task Response'),
                    ('One concrete example in each body paragraph',
                     'Task Response'),
                    ('A conclusion that reframes the question',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Reporting and distancing: it is argued that',
    explain=('A claim you are reporting rather than making needs a '
             'phrase that marks the distance.'),
    examples=['It is often argued that automation creates more jobs '
              'than it destroys.',
              'Supporters of this view point to two hundred years of '
              'machines.',
              'True of the market as a whole, perhaps; false of the '
              'worker.',
              'The claim is said to be supported by the historical '
              'record.'],
    task='Rewrite each claim so that it is reported rather than '
         'asserted.',
    items=[('Automation creates more jobs than it destroys.',
            'It is often argued that automation creates more jobs than it '
            'destroys.'),
           ('History proves this.',
            'Supporters of this view point to the historical record, '
            'which so far supports them.'),
           ('The total will not fall.',
            'Most economists expect the total number of jobs to continue '
            'rising.'),
           ('Workers will be fine in the end.',
            'It is claimed that affected workers eventually find other '
            'employment, although in some regions this has taken '
            'decades.'),
           ('This time is different.',
            'It is argued that the present wave differs because the tasks '
            'automated involve judgement.')]),
   vocab=[('who gains and who loses', 'how an effect is shared out'),
          ('aggregate figure', 'the total for a whole country'),
          ('period of change', 'the years between an old job and a new '
           'one'),
          ('out of work', 'without a job'),
          ('contract', 'the agreement between worker and employer'),
          ('starting salary', 'the pay in the first year of a job'),
          ('work-life balance', 'how work and the rest of life fit '
           'together'),
          ('exhaustion', 'the state of being completely tired')],
   expr=[('true of the market as a whole, perhaps; false of the worker',
          'the sentence this unit ends on'),
         ('the answer arrives too late to help anybody',
          'explains why a forecast is useless'),
         ('the technology did not choose it',
          'places responsibility where it belongs'),
         ('what is owed to the people on the losing side',
          'turns a prediction into a question about obligation')],
   trans=['admittedly', 'and yet', 'on balance', 'in short'],
  ),
 ],
 technique=dict(
  title='Matching Headings: the two parts, and the contamination trap',
  body=('A heading is not a summary of everything in the paragraph. It '
        'is a name for the one thing the paragraph is doing, and the '
        'wrong answers are built from the other things. Work in two '
        'separate parts. Part one: read the paragraph and say to '
        'yourself, in your own words, what it is about — one phrase, '
        'before you look at the list. Part two: only now read the '
        'headings and find the one closest to your phrase. Candidates '
        'who read the headings first lose marks to what is called '
        'contamination: once you have read eight headings, you start '
        'seeing all eight in every paragraph, because each of them '
        'mentions something the passage mentions somewhere. The second '
        'habit is to start with the paragraphs you are sure about and '
        'cross those headings off the list. Each one you remove makes '
        'the rest easier, which is why this task gets faster as you go '
        'rather than slower. And watch the first and last sentences: in '
        'academic prose the topic of a paragraph is usually announced in '
        'one of them, and a heading that matches only the middle of a '
        'paragraph is usually matching an example rather than the '
        'point.'),
  panel=[('Say it in your own words first',
          'One phrase, before you look at the list of headings.'),
         ('Then read the headings',
          'Reading them first makes you see all of them everywhere.'),
         ('Start with the ones you are sure of',
          'Cross each used heading off. The task speeds up.'),
         ('First and last sentences',
          'The topic is usually announced in one of them.')],
  task='Do the three Matching Headings items in cycle 4 by writing your '
       'own phrase for each paragraph first, before looking at the '
       'options.',
  qs=['What is this paragraph doing, in your own words?',
      'Which heading is closest to your phrase?',
      'Have you crossed off the headings you have used?',
      'Does your heading match the whole paragraph or one example?',
      'Did you read the first and last sentences carefully?']),
 outlining=dict(
  title='Spot the unequal: a main idea that is a detail of another',
  body=('Unit 1 gave you six tests for choosing ideas. This page is '
        'about the third of them, which is the one that causes the most '
        'damage when it is skipped. Two of the ideas in almost every '
        'brainstorm are not two ideas: one of them lives inside the '
        'other. If your list contains "machines are expensive to buy" '
        'and "small companies cannot afford automation", the second is '
        'where the first one leads, and giving them separate paragraphs '
        'produces an essay that says the same thing twice in different '
        'words. The examiner reads that as poor organisation rather than '
        'as two weak points. The test is a question you ask of every '
        'pair: could I write the second one as a sentence inside the '
        'first paragraph? If yes, that is where it belongs, and you have '
        'just found a support rather than a main idea. Main ideas should '
        'be roughly equal in weight, and a plan where one paragraph '
        'needs five sentences and another needs one is telling you that '
        'the second is a detail wearing a heading.'),
  frame=('Automation is unlikely to reduce the total number of jobs and '
         'is very likely to destroy particular jobs in particular '
         'places, so the honest answer depends on which question is '
         'being asked',
         [('The total has risen through every previous wave',
           ['machines have replaced tasks rather than whole '
            'occupations',
            'employment rose while farm work fell from a fifth to two '
            'per cent']),
          ('The people who lost were not the people who gained',
           ['the new work appeared in cities rather than where the old '
            'work was',
            'in some regions wages took about forty years to '
            'recover'])]),
  task='Brainstorm eight ideas for the cycle 4 question, then find the '
       'pair where one idea lives inside the other and merge them.',
  qs=['Could this idea be a sentence inside another paragraph?',
      'Are my main ideas roughly equal in weight?',
      'Which pair is really one idea?',
      'Does each heading need at least four sentences?',
      'Have I crossed out the ideas that failed the tests?'],
  answers=['if yes, it is a support and not a main idea',
           'a one-sentence paragraph is a detail wearing a heading',
           'almost every brainstorm of eight contains one such pair',
           'if it needs fewer, merge it with its neighbour',
           'cross them out on the plan, not in paragraph three']),
 candos=['I can read a job advert for what is essential',
         'I can write a letter of application with a question in it',
         'I can compare five bars and say how big the gaps are',
         'I can match headings to paragraphs without contaminating my '
         'reading',
         'I can tell a main idea from a detail of another idea'],
 tip=('On Matching Headings, say what the paragraph is doing in your '
      'own words before you look at the list. Reading the headings '
      'first is how candidates end up seeing every heading in every '
      'paragraph.'),
)
