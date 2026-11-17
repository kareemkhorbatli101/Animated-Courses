# -*- coding: utf-8 -*-
"""Foundation 2 progress test, Speaking: three parts, 11 to 14 minutes."""

SPAPER = dict(
 vol=8, band='4.5', level='A2-B1',
 title='Progress Test · Speaking',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is '
   'questions about you. Part 2 is one card: a minute to prepare and then '
   'one to two minutes on your own. Part 3 is general questions on the same '
   'subject. This is the real test’s shape. What will be shorter than '
   'a band 6 candidate’s is your Part 3 answers, and that is the part '
   'to work on next.'),
 keyintro=(
   'Record the whole test before you read this. For each part there is an '
   'answer at about band 4.5, a note on what it is doing, and things to '
   'listen for. The difference between band 4 and band 4.5 is one sentence '
   'per answer: the sentence that gives a reason. Because, so and although '
   'are worth more to you than any new vocabulary.'),
 instruct=[
  'Record everything, including the questions. You cannot hear your own '
  'pauses while you are speaking.',
  'Two or three sentences in Part 1, three or four in Part 3, and keep '
  'talking in Part 2 until you are stopped.',
  'In the Part 2 minute, write three words next to each line on the card. '
  'Do not write sentences, because you will read them out.',
  'In Part 3, say what you think, then say why, then give an example. '
  'Three sentences in that order is a complete answer at this level.',
  'If you make a small mistake, carry on. Going back to fix it costs more '
  'than it saves.'],

 parts=[

  dict(no=1, part='Part 1', clock='4 to 5 minutes',
       focus='Where you work or study, and getting there',
       blurb=('Questions about you, your work or study and your journey. '
              'Two or three sentences each, with one real detail.'),
       task='Answer each question in two or three sentences, with one '
            'detail.',
       qs=['Let’s talk about your day. Do you work or are you a '
           'student?',
           'How do you get there?',
           'How long does the journey take?',
           'Do you like the journey?',
           'Would you change anything about it?'],
       shape=[('answer', 'I am a student. I am in the second year of a '
               'business course.'),
              ('support', 'I take two buses and it takes about fifty '
               'minutes each way.'),
              ('follow-up', 'I do not mind it, because I read on the second '
               'bus, although the first one is always full.')],
       notes=[
        'The first answer gives the course and the year. Two small facts '
        'are enough to turn a three-word answer into a real one.',
        'The second sentence gives a number, and a number is the easiest '
        'detail there is. Two buses, fifty minutes, each way.',
        'The third sentence uses because and although together. That is the '
        'sentence that takes this answer from band 4 to band 4.5, and it is '
        'the same shape every time: I feel this, because of that, although '
        'this other thing.',
        'Three sentences. Nothing difficult, nothing wrong, and no long '
        'pause at the start.'],
       checks=[
        'Did you give two or three sentences for each question?',
        'Is there a number in at least three of your five answers?',
        'Did you use because and although anywhere? Mark each one.',
        'Count the answers that were one word or one short sentence. Try to '
        'have none.',
        'Listen for a pause of more than three seconds before an answer. '
        'That is the thing to practise away.']),

  dict(no=2, part='Part 2', clock='1 minute to prepare, 1 to 2 minutes '
       'to speak',
       focus='The long turn',
       blurb=('One card, one minute of notes, then one to two minutes on '
              'your own. Take the lines in order. Give the last line the '
              'most time, because it asks you to explain.'),
       task='Make notes for one minute, then talk for one to two minutes '
            'without stopping.',
       cue=('Describe something you bought that was worth the money.',
            ['say what you bought', 'say when and where you bought it',
             'say how much it cost',
             'and explain why it was worth the money']),
       qs=['You have one minute to think about what you are going to say. '
           'You can make notes if you wish.',
           'Now, describe something you bought that was worth the money.',
           'Do you still have it?',
           'Do you usually think carefully before you buy something?'],
       shape=[('answer', 'About three years ago I bought a second-hand '
               'bicycle.'),
              ('support', 'I bought it from a shop near the market, and it '
               'cost ninety pounds.'),
              ('follow-up', 'At the time it was a lot of money for me, '
               'because I was working part-time.'),
              ('support', 'Now I use it every day, so the bus fare I do not '
               'pay is more than ninety pounds a year.'),
              ('follow-up', 'It was worth the money because it saves money, '
               'and also because I am outside for half an hour every '
               'morning.'),
              ('support', 'I have had to replace the tyres twice, and that '
               'is all.')],
       notes=[
        'The first sentence names the thing and when. No "there are many '
        'things I have bought", which costs ten seconds of your two '
        'minutes.',
        'The four lines on the card are answered in order, and the money is '
        'given as a number. Numbers are the easiest way to be specific and '
        'they are always available.',
        'The fourth sentence does an actual calculation: the fare not paid '
        'is more than the price. One small piece of arithmetic is worth '
        'three adjectives at this level.',
        'The last line gets two reasons, one about money and one about '
        'something else. Two reasons rather than one is the difference '
        'between a band 4 long turn and a band 4.5 one.'],
       checks=[
        'Time it. Did you reach at least a minute and a quarter?',
        'Did you talk about all four lines on the card? Mark where you '
        'reached each.',
        'Did the last line get the most time, and did you give two reasons '
        'for it?',
        'Did you read a sentence out from your notes? Listen for where '
        'your voice changes.',
        'Count pauses over three seconds. More than three in two minutes '
        'is the thing to work on.']),

  dict(no=3, part='Part 3', clock='4 to 5 minutes',
       focus='Money, saving and what things are worth',
       blurb=('General questions on the same subject. What you think, why, '
              'and an example. Three or four sentences, and try to add one '
              'sentence that says when you would not agree with '
              'yourself.'),
       task='Answer each question in three or four sentences: what you '
            'think, why, and an example.',
       qs=['Is it better to buy something cheap or to save for something '
           'better?',
           'Do people throw things away too quickly?',
           'Should children be taught about money at school?',
           'Are expensive things usually better?'],
       shape=[('answer', 'Usually it is better to save, but it depends on '
               'what the thing is.'),
              ('support', 'For something you use every day, like shoes or a '
               'bicycle, the cheap one breaks and you buy it twice.'),
              ('follow-up', 'My brother bought three cheap printers in two '
               'years and then one good one, which he still has.'),
              ('support', 'For something you use twice a year, I think the '
               'cheap one is the right answer.'),
              ('follow-up', 'Although if you have no money this week, '
               'saving is not really a choice, and people who say it is '
               'have usually never been in that position.')],
       notes=[
        'The answer says usually and then says what it depends on. That is '
        'more accurate than yes or no and it is just as easy to say.',
        'The reason is a mechanism: the cheap one breaks and you buy it '
        'twice. One clear mechanism is worth more than three general '
        'statements.',
        'The example is specific, with a number in it: three printers in '
        'two years. Examples from your own family are allowed and are the '
        'easiest kind to make specific.',
        'The last sentence says when the answer does not hold. At band 4.5 '
        'that sentence is the one that lifts the answer, and the word to '
        'learn for it is although.'],
       checks=[
        'Did you give a reason in every answer? Listen for because, so or '
        'that is why.',
        'Is there one example with a number or a name in each answer?',
        'Did you say although anywhere, and did what followed it limit your '
        'own answer?',
        'Count answers of one or two sentences. In Part 3 those are too '
        'short.',
        'Did you answer the question that was asked, or an easier one? '
        'Listen to the question and your first sentence together.']),
 ])
