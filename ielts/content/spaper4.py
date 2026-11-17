# -*- coding: utf-8 -*-
"""Volume 4 timed Speaking paper: three parts, 11 to 14 minutes."""

SPAPER = dict(
 vol=4, band='6.5', level='B2',
 title='Speaking Paper',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is about '
   'you, Part 2 is a long turn from a card with a minute to prepare, Part 3 '
   'is a discussion of the same subject in general terms. At band 6.5 the '
   'examiner is listening for whether your answers are organised as well as '
   'fluent: whether the second sentence follows from the first rather than '
   'merely coming after it.'),
 keyintro=(
   'Record the paper before reading this. For each part there is the shape '
   'of an answer at band 6.5, a note on what it is doing, and a list of '
   'things to listen for. At this band the gains are no longer in '
   'vocabulary. They are in Part 3, in the habit of answering, developing, '
   'and then naming the limit of what you have said.'),
 instruct=[
  'Record the whole paper and listen the following day. You hear '
  'hesitation and repetition that you cannot hear while speaking.',
  'Two or three sentences in Part 1, four or five in Part 3, and the long '
  'turn kept going until you are stopped.',
  'Use the Part 2 minute on the last bullet. The first three are facts you '
  'already have; the fourth is the one you can plan.',
  'In Part 3, do not widen the question before you have answered it. The '
  'commonest band 6 habit is to answer a more comfortable question than '
  'the one asked.',
  'Leave a small grammatical slip alone. Correcting it mid-sentence costs '
  'fluency and buys almost nothing in accuracy.'],

 parts=[

  dict(no=1, part='Part 1', clock='4 to 5 minutes',
       focus='Things you own, and what you keep',
       blurb=('Questions about you, what you own and what you hold on to. '
              'Two or three sentences, with one detail that belongs to '
              'you.'),
       task='Answer each question in two or three sentences, with one '
            'specific detail.',
       qs=['Let’s talk about possessions. Is there something you have '
           'kept for a long time?',
           'Do you find it easy to throw things away?',
           'Do you prefer to buy something new or to repair what you have?',
           'Has the way you buy things changed in the last few years?',
           'Is there something you would like to own?'],
       shape=[('answer', 'A camera that belonged to my grandfather, which '
               'has not worked since about 2009.'),
              ('support', 'I have moved it between four flats and I have '
               'never once used it.'),
              ('follow-up', 'What I keep is clearly not the camera, which '
               'is the part I find slightly embarrassing.')],
       notes=[
        'The answer is a single object with a date attached to it, and the '
        'date does the work. "Has not worked since about 2009" tells the '
        'examiner this is a real object rather than a prepared topic.',
        'The support measures the keeping - four flats, never used - which '
        'is more interesting than any adjective would be and takes the same '
        'number of words.',
        'The follow-up turns the answer round on itself and admits a '
        'feeling. At 6.5 that kind of self-observation is what separates an '
        'answer from a report.',
        'Three sentences. Part 1 is not where length earns anything; it is '
        'where the examiner finds out how much effort listening to you '
        'takes.'],
       checks=[
        'Does each answer contain one sentence the question did not ask '
        'for?',
        'Is there a date, a number or a name in each first sentence?',
        'Count your filler openings. At this band they are the most '
        'audible weakness you have left.',
        'Did you repeat any structure, such as I think that, more than '
        'twice across five answers?',
        'Did any answer stop after one sentence? One short answer is fine; '
        'two begins to look like a limit.']),

  dict(no=2, part='Part 2', clock='1 minute to prepare, 1 to 2 minutes '
       'to speak',
       focus='The long turn',
       blurb=('A card, a minute of notes, up to two minutes of speech. The '
              'bullets are the outline. Spend the planning minute on the '
              'bullet that begins "and explain", because that is where the '
              'band is decided.'),
       task='Make notes for one minute, then speak for up to two minutes '
            'without stopping.',
       cue=('Describe something you learned to do that was harder than you '
            'expected.',
            ['what it was', 'why you decided to learn it',
             'what made it harder than you expected',
             'and explain what you would tell somebody starting now']),
       qs=['You have one minute to think about what you are going to say. '
           'You can make notes if you wish.',
           'Now, describe something you learned to do that was harder than '
           'you expected.',
           'Would you learn it the same way again?',
           'Do many people where you live do this?'],
       shape=[('answer', 'I learned to swim properly at twenty-nine, '
               'having been able to splash about since I was a child.'),
              ('support', 'I decided to because a friend drowned near where '
               'I grew up and I had never admitted I could not swim.'),
              ('follow-up', 'What made it hard was not the fitness. It was '
               'that I had to unlearn a stroke I had used for twenty '
               'years.'),
              ('support', 'For about three months I was slower than when I '
               'started, which nobody warns you about.'),
              ('follow-up', 'What I would tell somebody starting is to find '
               'a teacher who will stop you doing what you can already '
               'nearly do.'),
              ('support', 'Because the thing you nearly do is exactly the '
               'thing that will not improve.')],
       notes=[
        'The first sentence contains the whole shape of the story: learned '
        'properly at twenty-nine, having splashed since childhood. The '
        'contrast is set up in one breath and everything else elaborates '
        'it.',
        'The reason is personal and is given without dramatising. At 6.5 '
        'an examiner notices that a difficult fact has been stated plainly, '
        'because candidates usually either avoid it or perform it.',
        'The difficulty is reframed: not fitness but unlearning. Answering '
        'the third bullet with the thing that was not the problem, and then '
        'the thing that was, is a structure worth borrowing.',
        'The advice in the last two moves has a reason attached to it, and '
        'the reason is a general principle drawn from the story. That is '
        'what the "and explain" bullet is asking for and it is where the '
        'two minutes should end.'],
       checks=[
        'Time it. A minute and a half at least, and stopped only when you '
        'were stopped?',
        'Did the last bullet get at least a third of the time? Mark the '
        'second at which you reached it.',
        'Is your advice attached to a reason, or is it a list of '
        'instructions?',
        'Count pauses over three seconds and note whether each came while '
        'thinking or while reading notes.',
        'Did you reframe anything, or did you take all four bullets at face '
        'value? Reframing one is a reliable lift at this band.']),

  dict(no=3, part='Part 3', clock='4 to 5 minutes',
       focus='Learning as an adult, and who teaches',
       blurb=('The same subject in general terms. Answer, develop, limit. '
              'Four or five sentences, and the limit should be about '
              'substance rather than politeness.'),
       task='Answer each question in four or five sentences, developing '
            'before you qualify.',
       qs=['Why do adults often find it harder to learn a physical skill '
           'than children do?',
           'Is it better to be taught by somebody who found the skill easy '
           'or somebody who found it hard?',
           'Should adult education be paid for by the state?',
           'Does being good at one skill help with learning another?'],
       shape=[('answer', 'I suspect most of it is that adults arrive with '
               'habits and children arrive with nothing.'),
              ('support', 'A child learning to swim has no stroke to '
               'unlearn, and unlearning is slower than learning.'),
              ('follow-up', 'There is also the fact that an adult is '
               'embarrassed, and embarrassment makes you practise in '
               'private, which is where bad habits survive.'),
              ('support', 'The children in the pool near me are watched by '
               'four adults each and corrected constantly.'),
              ('follow-up', 'Although I would not push the habits argument '
               'too far, because adults are plainly better at anything that '
               'can be learned by reading about it first.')],
       notes=[
        'The answer is hedged with "I suspect", which is appropriate rather '
        'than weak: the question invites a hypothesis and the hedge signals '
        'that the speaker knows it is one.',
        'Two distinct mechanisms are given - unlearning and embarrassment - '
        'and the second is followed to a consequence about practising in '
        'private. Following one mechanism to its consequence is development '
        'in the sense the band descriptors mean.',
        'The fourth move is observed rather than asserted: four adults per '
        'child, corrected constantly. A detail from the speaker\'s own '
        'experience is always available and always better than an '
        'abstraction.',
        'The limit at the end is a real concession that names the kind of '
        'learning adults are better at. It restricts the claim instead of '
        'softening it, which is the difference between qualifying and '
        'retreating.'],
       checks=[
        'Is the first sentence of each answer an answer with a reason in '
        'it?',
        'Did you give two mechanisms anywhere, or one mechanism twice?',
        'Did you follow at least one claim to a consequence rather than '
        'stopping at it?',
        'Is each qualification about substance - what the claim does not '
        'cover - rather than about your confidence in it?',
        'Count answers under four sentences, and check whether each was '
        'short because you had answered the question or because you had '
        'answered an easier one.']),
 ])
