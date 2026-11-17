# -*- coding: utf-8 -*-
"""Foundation 1 progress test, Speaking: three parts, 11 to 14 minutes."""

SPAPER = dict(
 vol=7, band='4.0', level='A1-A2',
 title='Progress Test · Speaking',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is '
   'questions about you. Part 2 is one card: you get a minute to prepare '
   'and then you talk on your own for one to two minutes. Part 3 is '
   'questions about the same subject in general. This is the shape of the '
   'real test. The answers you give will be shorter than a band 6 '
   'candidate’s, and that is expected at this stage.'),
 keyintro=(
   'Record yourself doing the whole test before you read this. For each '
   'part there is an answer at about band 4.0, a note on what it is doing, '
   'and some things to listen for. A band 4 answer is short, simple and '
   'true. The way to get past band 4 is to add one more sentence to each '
   'answer, not to use harder words.'),
 instruct=[
  'Record the whole test. You cannot hear your own pauses while you are '
  'talking.',
  'In Part 1, say two sentences. One sentence is too short. Four is too '
  'many.',
  'In Part 2, use the minute to write three words next to each line on the '
  'card. Do not write sentences.',
  'In Part 3, say what you think and then give one reason. Because is the '
  'most useful word in this part.',
  'If you make a small mistake, keep going. Stopping to fix it costs you '
  'more than the mistake does.'],

 parts=[

  dict(no=1, part='Part 1', clock='4 to 5 minutes',
       focus='Your home and your day',
       blurb=('The examiner asks about you, your home and what you do in a '
              'normal day. Two sentences each. Say one real thing.'),
       task='Answer each question in two sentences. Add one detail.',
       qs=['Let’s talk about your home. Do you live in a house or a '
           'flat?',
           'Who do you live with?',
           'What do you do in the evening?',
           'Do you cook at home?',
           'What is your favourite room?'],
       shape=[('answer', 'I live in a flat, on the second floor.'),
              ('support', 'I live with my sister and her two children.'),
              ('follow-up', 'It is small, but the children are at school '
               'all day, so it is quiet.')],
       notes=[
        'The first sentence answers the question and adds one small fact: '
        'on the second floor. One small fact turns a two-word answer into a '
        'real one.',
        'The second sentence answers the next question before it is asked. '
        'That is not a problem. If the examiner asks it anyway, you can say '
        'a little more.',
        'The third sentence says something good and something not so good '
        'together. "It is small, but it is quiet" is a very useful shape '
        'and you can use it with almost any question.',
        'Three short sentences. Nothing difficult. Nothing wrong.'],
       checks=[
        'Did you say two sentences for each question, not one?',
        'Did you add one fact in each answer: a number, a place or a '
        'name?',
        'Count the questions you answered with one word. Try to have none '
        'of these.',
        'Did you use but or because anywhere? Those two words make a short '
        'answer into a better one.',
        'Listen for long pauses before you start an answer. One or two '
        'seconds is normal; five is too long.']),

  dict(no=2, part='Part 2', clock='1 minute to prepare, 1 to 2 minutes '
       'to speak',
       focus='The long turn',
       blurb=('One card and one minute to prepare. Then you talk on your '
              'own. Use the lines on the card in order and you will not '
              'stop early.'),
       task='Make notes for one minute, then talk for one to two minutes.',
       cue=('Describe a meal you like.',
            ['say what the meal is', 'say who makes it',
             'say when you eat it',
             'and explain why you like it']),
       qs=['You have one minute to think about what you are going to say. '
           'You can make notes if you wish.',
           'Now, describe a meal you like.',
           'Do you eat it often?',
           'Is it easy to cook?'],
       shape=[('answer', 'The meal I like best is rice with beans and '
               'fried plantain.'),
              ('support', 'My aunt makes it. She uses a lot of pepper.'),
              ('follow-up', 'We eat it on Sunday, because that is the day '
               'everybody is at home.'),
              ('support', 'It takes about an hour, and most of that is the '
               'rice.'),
              ('follow-up', 'I like it because it tastes the same every '
               'time, and because the house smells of it.'),
              ('support', 'I have tried to make it myself twice and it was '
               'not the same.')],
       notes=[
        'The first sentence names the meal. Do not start with "there are '
        'many meals I like". That takes ten seconds and says nothing.',
        'The four lines on the card are answered in order: what, who, when, '
        'why. The card has made your plan for you.',
        'The why gets two sentences, because it is the line that is worth '
        'the most. The reasons are simple and real: it tastes the same, the '
        'house smells of it.',
        'The last sentence is a small extra story. It fills the last twenty '
        'seconds and it is more interesting than saying the same thing '
        'again.'],
       checks=[
        'Time yourself. Did you talk for at least one minute?',
        'Did you talk about all four lines on the card?',
        'Did you stop early? If you did, say one more sentence about the '
        'last line.',
        'Did you read out a whole sentence from your notes? Write words, '
        'not sentences, in the minute.',
        'Count your pauses longer than three seconds.']),

  dict(no=3, part='Part 3', clock='4 to 5 minutes',
       focus='Food, families and eating together',
       blurb=('The same subject, but general questions now, not about you. '
              'Say what you think and then say why. Three sentences is '
              'enough at this level.'),
       task='Answer each question in three sentences: what you think, why, '
            'and one example.',
       qs=['Do families in your country eat together?',
           'Is it important to eat together?',
           'Do young people cook less than their parents did?',
           'Will people cook more or less in the future?'],
       shape=[('answer', 'Not every day, but most families eat together at '
               'the weekend.'),
              ('support', 'In the week people finish work at different '
               'times, so it is difficult.'),
              ('follow-up', 'In my family we eat together on Sunday and '
               'nobody eats together on a Tuesday.'),
              ('support', 'I think it is important, because that is when '
               'people talk.'),
              ('follow-up', 'My cousin tells us everything on Sunday and '
               'almost nothing in the week.')],
       notes=[
        'The answer is not yes or no. "Not every day, but at the weekend" '
        'is more accurate and it is just as easy to say.',
        'The reason comes next, with so. People finish work at different '
        'times, so it is difficult. That is a complete reason in eleven '
        'words.',
        'The example is from the speaker’s own family. You are allowed '
        'to use your own life in Part 3, and it is the easiest way to be '
        'specific.',
        'Five short sentences. Part 3 answers are longer than Part 1 '
        'answers, but at this level they do not need to be long. They need '
        'a reason.'],
       checks=[
        'Did you say why in every answer? Listen for because or so.',
        'Did you give one example in each answer?',
        'Did any answer stop after one sentence? In Part 3 that is too '
        'short.',
        'Did you say yes or no and then stop? Add the reason; it is where '
        'the marks are.',
        'Listen for the same word used many times. Try to find one other '
        'word for it.']),
 ])
