# -*- coding: utf-8 -*-
"""Volume 3 timed Speaking paper: three parts, 11 to 14 minutes."""

SPAPER = dict(
 vol=3, band='6.0', level='B2',
 title='Speaking Paper',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is four '
   'to five minutes about you, Part 2 a long turn from a card with one '
   'minute to prepare, Part 3 four to five minutes of discussion on the '
   'same subject in general terms. At band 6 the examiner is listening for '
   'whether you can develop an answer without being prompted, and whether a '
   'listener ever has to work to follow you.'),
 keyintro=(
   'Record the paper first. What follows is the shape of an answer at band '
   '6.0 for each part, a note of what it is doing, and what to listen for '
   'afterwards. The step to band 6 is made by developing: every answer '
   'should contain a sentence the question did not ask for.'),
 instruct=[
  'Record the whole paper, questions included, and listen to it the next '
  'day rather than the same hour. You hear different things.',
  'Two or three sentences in Part 1, four or five in Part 3, and the long '
  'turn kept going until you are stopped.',
  'In the Part 2 minute, write three or four words against each bullet and '
  'put a mark against the one you will spend longest on.',
  'In Part 3 answer the question that was asked, then develop, then limit. '
  'Developing before limiting is the order that sounds considered rather '
  'than evasive.',
  'Correct a slip only if it changed the meaning. Hesitation costs more '
  'than a wrong article does.'],

 parts=[

  dict(no=1, part='Part 1', clock='4 to 5 minutes',
       focus='Work, study and how you organise a day',
       blurb=('Questions about you and your routine. Two or three sentences '
              'each, with a detail that belongs to you and not to '
              'everybody.'),
       task='Answer each question in two or three sentences, with one '
            'specific detail.',
       qs=['Let’s talk about your day. When do you do your best work?',
           'Has that changed since you were younger?',
           'Do you keep a list of things to do?',
           'How do you decide what to do first?',
           'Is there a time of day you avoid difficult work?'],
       shape=[('answer', 'Between about six and nine in the morning, which '
               'took me years to admit.'),
              ('support', 'I used to work late because that is what '
               'everybody around me did at university.'),
              ('follow-up', 'Now I get up at half past five and I am '
               'useless by four in the afternoon.')],
       notes=[
        'The answer carries a small confession - it took years to admit - '
        'which is the cheapest way to make a Part 1 answer sound like '
        'speech. It also gives a precise window rather than "the morning".',
        'The support explains the earlier state, which the question did not '
        'ask for. At band 6 that unprompted extra sentence is the whole '
        'difference from band 5.',
        'The follow-up gives both ends of the fact: up at half past five, '
        'useless by four. Holding a cost beside a benefit is a habit to '
        'build here because Part 3 depends on it.',
        'Three sentences and no preamble. Part 1 is where the examiner '
        'decides how hard you are to listen to, and the saved seconds are '
        'spent in Part 3.'],
       checks=[
        'Does each answer contain one sentence the question did not ask '
        'for?',
        'Is there a specific in the first sentence: a time, a number, a '
        'place?',
        'Count the answers that began with a filler phrase. Each one is '
        'three seconds you needed later.',
        'Did you repeat any content word more than twice across the five '
        'answers?',
        'Did any answer run past four sentences? That is a fault in Part 1 '
        'and it is almost always caused by nervousness rather than by '
        'having more to say.']),

  dict(no=2, part='Part 2', clock='1 minute to prepare, 1 to 2 minutes '
       'to speak',
       focus='The long turn',
       blurb=('A card, a minute of notes, and up to two minutes without '
              'interruption. Take the bullets in order and give the "and '
              'explain" bullet at least a third of the time.'),
       task='Make notes for one minute, then speak for up to two minutes '
            'without stopping.',
       cue=('Describe a decision you made that you are glad about.',
            ['what the decision was', 'when you made it',
             'what the alternative was',
             'and explain why you are glad you decided as you did']),
       qs=['You have one minute to think about what you are going to say. '
           'You can make notes if you wish.',
           'Now, describe a decision you made that you are glad about.',
           'Was it a difficult decision at the time?',
           'Do you usually decide things quickly?'],
       shape=[('answer', 'I turned down a place on a master’s course '
               'four years ago.'),
              ('support', 'I had been offered a job at the same time and I '
               'could not do both.'),
              ('follow-up', 'The alternative was a year of study paid for '
               'with a loan and a better title at the end of it.'),
              ('support', 'What I took instead was two years of being the '
               'only person in a small office who could do the thing.'),
              ('follow-up', 'I am glad because I learned faster being out '
               'of my depth than I would have in a seminar.'),
              ('support', 'And I would probably say the opposite if the job '
               'had gone badly, which I try to remember.')],
       notes=[
        'The decision is named in eight words. There is no preamble and no '
        'list of candidate decisions, which is where ten of the hundred and '
        'twenty seconds usually go.',
        'The third move does the alternative bullet properly, with the loan '
        'and the title, because a decision is only interesting beside the '
        'thing that was refused.',
        'The explanation names a mechanism: learned faster being out of my '
        'depth. At band 6 the "and explain" bullet needs a reason of this '
        'kind rather than a feeling.',
        'The last move concedes that the judgement depends on how things '
        'turned out. That sentence is unprompted, honest and exactly what '
        'the band descriptors mean by developing an answer.'],
       checks=[
        'Time it. A minute and a half minimum, and stopped only when you '
        'were stopped?',
        'Mark where you reached each bullet. Did the last bullet get at '
        'least a third of the time?',
        'Count pauses over three seconds, and mark whether each one came '
        'while you were thinking or while you were looking at your notes.',
        'Is there a mechanism in your explanation, or only a feeling? '
        'Because it was good is not a reason.',
        'Did you concede anything? One honest limitation in the long turn is '
        'worth more than a fourth example.']),

  dict(no=3, part='Part 3', clock='4 to 5 minutes',
       focus='Choices, risk and what people regret',
       blurb=('The same subject in general terms. Answer, develop, limit. '
              'Four or five sentences, and the limit is what makes it a '
              'band 6 answer rather than a confident band 5 one.'),
       task='Answer each question in four or five sentences, developing '
            'before you qualify.',
       qs=['Why do people often regret decisions that turned out well?',
           'Is it better to decide quickly or to wait for more '
           'information?',
           'Should young people be encouraged to take more risks than they '
           'do?',
           'How much can anybody learn from somebody else’s decision?'],
       shape=[('answer', 'Because we compare what happened with an imagined '
               'version that has had all the problems removed from it.'),
              ('support', 'The road not taken never has a difficult '
               'colleague in it or a year of being broke.'),
              ('follow-up', 'So the comparison is not between two outcomes '
               'but between one outcome and an advertisement.'),
              ('support', 'I think that is why people regret leaving a city '
               'more often than they regret arriving in one.'),
              ('follow-up', 'Although some regret is just accurate, and '
               'pretending otherwise is its own kind of comfort.')],
       notes=[
        'The answer is a mechanism in a single sentence, and it is the '
        'sentence the question was asking for. Nothing is spent on "that is '
        'an interesting question".',
        'The support is concrete and slightly funny, which is allowed. '
        '"Never has a difficult colleague in it" is the kind of detail that '
        'shows a listener you are thinking rather than retrieving.',
        'The fourth move extends the idea to a new case - leaving a city '
        'against arriving in one - which is development in the sense the '
        'band descriptors mean: the answer goes somewhere.',
        'The qualification is not a formula. It concedes that some regret is '
        'well founded, which keeps the answer honest and ends the turn on a '
        'clean full stop.'],
       checks=[
        'Is the first sentence of each answer an answer, and does it contain '
        'a reason?',
        'Does each answer go somewhere the question did not: a second case, '
        'a consequence, a comparison?',
        'Did you qualify at least twice across the four answers, and was '
        'the qualification about substance rather than politeness?',
        'Count the answers under four sentences. In Part 3 that is short, '
        'and it is usually a sign you answered the easier version of the '
        'question.',
        'Listen for sentences that ran on past their meaning. At band 6 one '
        'long sentence that stays under control helps; two that do not '
        'hurt.']),
 ])
