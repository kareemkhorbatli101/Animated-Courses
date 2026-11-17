# -*- coding: utf-8 -*-
"""Volume 1 timed Speaking paper: three parts, 11 to 14 minutes."""

SPAPER = dict(
 vol=1, band='5.0', level='B1',
 title='Speaking Paper',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is four '
   'to five minutes of questions about you. Part 2 is the long turn: one '
   'minute to prepare and one to two minutes to speak from a card. Part 3 '
   'is four to five minutes of discussion about the same subject, in '
   'general rather than personal terms. You cannot fail by saying something '
   'the examiner disagrees with; you can only fail by not saying enough of '
   'it clearly.'),
 keyintro=(
   'Record yourself doing the whole paper before you read this. What '
   'follows is the shape of an answer at band 5.0 for each part, a note of '
   'what that answer is doing, and a list of things to listen for in your '
   'own recording. Nobody can rate their own speaking from memory, which is '
   'why the recording is not optional.'),
 instruct=[
  'Record the whole paper, including the questions if somebody is asking '
  'them. An answer you only remember giving cannot be checked.',
  'Hold the two-to-four rule: two or three sentences in Part 1, four or '
  'five in Part 3, and the long turn kept going until you are stopped.',
  'In Part 2 you have exactly one minute to make notes. Write three or four '
  'words against each bullet and nothing else.',
  'Answer the question you were asked before you widen it. At this band the '
  'commonest fault is answering a more comfortable question.',
  'Do not stop to correct a small mistake. Correct it only if the meaning '
  'has changed, because stopping costs more than the mistake does.'],

 parts=[

  dict(no=1, part='Part 1', clock='4 to 5 minutes',
       focus='Your studies, your work and your free time',
       blurb=('The examiner asks about you, your studies or your work, and '
              'what you do with your time. Two or three sentences each. One '
              'real detail is worth more than three general comments.'),
       task='Answer each question in two or three sentences, with one '
            'specific detail.',
       qs=['Let’s talk about what you do. Are you working or studying '
           'at the moment?',
           'What do you like most about it?',
           'Is there anything you would change about your day?',
           'What do you usually do in the evening?',
           'Do you prefer to spend your free time alone or with other '
           'people?'],
       shape=[('answer', 'I am studying accounting, in my second year.'),
              ('support', 'What I like is that the work is either right or '
               'wrong, which suits me.'),
              ('follow-up', 'Although it means I have no idea whether an '
               'essay I write is any good.')],
       notes=[
        'The answer gives a specific in the first sentence: accounting, '
        'second year. An examiner hears "I am a student" all day; the detail '
        'is what makes the next sentence sound like a person speaking.',
        'The support gives a reason rather than a repetition. "The work is '
        'either right or wrong, which suits me" answers what I like with '
        'something only this speaker would say.',
        'The follow-up concedes something, which is the strongest Part 1 '
        'move there is. It also ends the turn cleanly instead of trailing '
        'off into "and so on, yeah".',
        'Three sentences, about twelve seconds. Part 1 is not where length '
        'earns marks; it is where the examiner decides whether you can be '
        'understood without effort.'],
       checks=[
        'Listen back: is there a specific detail in the first sentence of '
        'each answer, such as a number, a place or a subject?',
        'Did any answer run past four sentences? In Part 1 that is a fault '
        'and it takes time away from Part 3.',
        'Count your one-sentence answers. More than one in five and the '
        'examiner is doing the work of keeping the conversation alive.',
        'Are you repeating the words of the question before answering? Mark '
        'every instance; it is the commonest source of dead time.',
        'Did you say "it depends" without saying what it depends on? The '
        'phrase is worth nothing until it is finished.']),

  dict(no=2, part='Part 2', clock='1 minute to prepare, 1 to 2 minutes '
       'to speak',
       focus='The long turn',
       blurb=('You are given a card, one minute to make notes, and then one '
              'to two minutes to speak without being interrupted. The '
              'bullets are your outline; take them in order and the time '
              'will look after itself.'),
       task='Make notes for one minute, then speak for up to two minutes '
            'without stopping.',
       cue=('Describe a place you often go to in your free time.',
            ['where it is', 'how often you go there',
             'what you do when you are there',
             'and explain why you keep going back']),
       qs=['You have one minute to think about what you are going to say. '
           'You can make notes if you wish.',
           'Now, describe a place you often go to in your free time.',
           'Do many people go there?',
           'Would you recommend it to a visitor?'],
       shape=[('answer', 'The place I go to most is the public library on '
               'Carter Street.'),
              ('support', 'It is about fifteen minutes from my flat and I go '
               'two or three evenings a week.'),
              ('follow-up', 'I started going because my flat is noisy, and I '
               'stayed because of the top floor.'),
              ('support', 'There are six desks up there under a window and '
               'almost nobody uses them.'),
              ('follow-up', 'I have done nearly all of my studying there for '
               'two years, and I would not work as well at home.'),
              ('support', 'I also take out two or three books a month, which '
               'I would not buy.')],
       notes=[
        'The first sentence names the place and nothing else. Starting with '
        '"well, there are many places I like" spends ten of your hundred and '
        'twenty seconds saying nothing.',
        'The bullets are taken in order: where, how often, what I do, why I '
        'go back. The card has written your outline for you, and the only '
        'skill is trusting it.',
        'The last two bullets get the most time, because the bullet that '
        'begins "and explain" is where the band is decided. Facts answer the '
        'first bullets; a reason answers the last one.',
        'Nothing is memorised. The speaker develops one idea - the quiet top '
        'floor - rather than listing five things about the library, and that '
        'is what fills two minutes without strain.'],
       checks=[
        'Time your recording. Did you speak for at least a minute and a '
        'half, and did you stop only when you were stopped?',
        'Did you cover all four bullets? Mark the second at which you '
        'reached each one; a bullet you never reached is a mark lost.',
        'Count your pauses longer than three seconds. More than two in two '
        'minutes and the fluency score is affected.',
        'Did you read your notes aloud? Listen for the change in rhythm '
        'where a written sentence is being recited.',
        'Did you develop one idea or list several? Listing is what a '
        'candidate does when the clock frightens them.']),

  dict(no=3, part='Part 3', clock='4 to 5 minutes',
       focus='Public places and who they are for',
       blurb=('The same subject, now in general terms. Four or five '
              'sentences: answer, reason, example, and a limit on what you '
              'have said. The limit is what separates this from Part 1.'),
       task='Answer each question in four or five sentences, giving a reason '
            'and an example.',
       qs=['Why do you think some public places are busier than others?',
           'Should a town council provide places for people to meet for '
           'free?',
           'Who tends to be left out when a public place is designed?',
           'Do you think people spend less time in public places than they '
           'used to?'],
       shape=[('answer', 'Mostly it is whether the place is useful for '
               'something, not whether it is attractive.'),
              ('support', 'The library near me is always full and it is an '
               'ugly building from the nineteen-seventies.'),
              ('follow-up', 'What it has is somewhere to sit for nothing, '
               'which is rarer than it sounds.'),
              ('support', 'The new square in the centre is much better '
               'looking and it is usually empty.'),
              ('follow-up', 'Although to be fair it is empty partly because '
               'there is no shade in the summer.')],
       notes=[
        'The answer comes first, in one sentence, and it answers the '
        'question that was asked. Part 3 answers that begin "that is a very '
        'interesting question" have spent four seconds on nothing.',
        'The support is a specific case, and the contrast between the ugly '
        'full library and the handsome empty square is doing the arguing. A '
        'band 5 answer with one real example beats a band 5 answer with '
        'three abstract nouns.',
        'The last move concedes a second explanation. Saying "to be fair" '
        'and then giving the other reason shows the examiner that you know '
        'your own answer is not the whole story, which is exactly what the '
        'criteria call for at this level.',
        'Five sentences, about thirty seconds. Part 3 answers do not need to '
        'be a speech; they need a position, a reason and an honest '
        'qualification.'],
       checks=[
        'Listen to the first five seconds of each answer. Is there a '
        'position in it, or a phrase buying time?',
        'Is there one specific example in each answer: a place, a number, a '
        'person you know?',
        'Did you ever qualify your own answer, with although, to be fair, or '
        'in most cases? Mark each one; this is the Part 3 habit worth '
        'building.',
        'Count the answers that ran under three sentences. In Part 3 that is '
        'short, and it is usually caused by answering a Part 1 version of '
        'the question.',
        'Did you answer the question asked, or a wider one you preferred? '
        'Play the question and your first sentence back together.']),
 ])
