# -*- coding: utf-8 -*-
"""Volume 2 timed Speaking paper: three parts, 11 to 14 minutes."""

SPAPER = dict(
 vol=2, band='5.5', level='B1+',
 title='Speaking Paper',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is four '
   'to five minutes about you. Part 2 is the long turn: a card, one minute '
   'to prepare, one to two minutes to speak. Part 3 is four to five minutes '
   'of discussion on the same subject in general terms. The examiner is not '
   'listening for opinions they agree with. They are listening for whether '
   'you can keep going, be understood, and finish a thought.'),
 keyintro=(
   'Record the paper before you read this. What follows is the shape of an '
   'answer at band 5.5 for each part, a note of what it is doing, and what '
   'to listen for in your own recording. The step from 5.0 to 5.5 is '
   'usually made in Part 3, by adding one sentence that limits what you '
   'have just claimed.'),
 instruct=[
  'Record the whole paper, questions included. An answer you only remember '
  'giving cannot be marked.',
  'Hold the two-to-five rule: two or three sentences in Part 1, four or '
  'five in Part 3, and the long turn kept going until you are stopped.',
  'Use the Part 2 minute for three or four words against each bullet. A '
  'sentence written in that minute is a sentence you will read aloud, and it '
  'will sound like it.',
  'In Part 3, answer and then qualify. Although, in most cases, and to be '
  'fair are the three most useful words in the paper.',
  'Do not stop for a small slip. Self-correction is rewarded when it '
  'changes the meaning and penalised, through hesitation, when it does '
  'not.'],

 parts=[

  dict(no=1, part='Part 1', clock='4 to 5 minutes',
       focus='Where you live, and the people near you',
       blurb=('Questions about you, your home and the people around you. '
              'Two or three sentences each, with one detail that could only '
              'come from you.'),
       task='Answer each question in two or three sentences, with one '
            'specific detail.',
       qs=['Let’s talk about where you live. How long have you lived '
           'there?',
           'Do you know your neighbours?',
           'What is the best thing about your area?',
           'Is there anything you would change about it?',
           'Would you like to live in the same place in ten years?'],
       shape=[('answer', 'Four years in the same flat, which is the longest '
               'I have lived anywhere.'),
              ('support', 'I know two of my neighbours well enough to leave '
               'a key with.'),
              ('follow-up', 'The rest I would recognise and could not name, '
               'which I suspect is normal.')],
       notes=[
        'The first sentence gives a number and a comparison, and the '
        'comparison costs nothing: "which is the longest I have lived '
        'anywhere" turns a fact into something a person is saying.',
        'The support is a test rather than a claim. "Well enough to leave a '
        'key with" is a precise measure of knowing a neighbour and it is '
        'the kind of phrase that cannot be prepared in advance.',
        'The follow-up admits the limit of the answer, and adds a light '
        'judgement on it. At 5.5 that admission is worth more than a third '
        'fact would be.',
        'Three sentences, no filler at the front. Part 1 answers are short '
        'and the saved time is spent in Part 3, where the marks are.'],
       checks=[
        'Is there a number, a place or a name in the first sentence of each '
        'answer?',
        'Did any answer go past four sentences? In Part 1 that is a fault '
        'and it borrows time from Part 3.',
        'Count the answers that began by repeating the question. Each one is '
        'about three seconds of nothing.',
        'Did you use any phrase more than twice across the five answers? '
        'Mark it; the examiner hears repetition more clearly than you do.',
        'Is there one answer in which you admitted you did not know '
        'something? That is a strength here, not a weakness.']),

  dict(no=2, part='Part 2', clock='1 minute to prepare, 1 to 2 minutes '
       'to speak',
       focus='The long turn',
       blurb=('A card, one minute of notes, and up to two minutes without '
              'interruption. Take the bullets in order. The bullet that '
              'begins "and explain" is where the band is decided, so leave '
              'it time.'),
       task='Make notes for one minute, then speak for up to two minutes '
            'without stopping.',
       cue=('Describe a change that was made where you live.',
            ['what the change was', 'when it happened',
             'who it affected most',
             'and explain whether you think it was an improvement']),
       qs=['You have one minute to think about what you are going to say. '
           'You can make notes if you wish.',
           'Now, describe a change that was made where you live.',
           'Did many people agree with it?',
           'Would you change anything else about the area?'],
       shape=[('answer', 'They closed our road to through traffic about '
               'three years ago.'),
              ('support', 'It was a trial at first and then it was made '
               'permanent after a vote.'),
              ('follow-up', 'The people it affected most were the shops at '
               'the top of the road.'),
              ('support', 'Two of them said they lost trade and one of them '
               'closed the following year.'),
              ('follow-up', 'I think it was an improvement, and I would not '
               'say that to the woman who had the shop.'),
              ('support', 'What it gave us was children on bicycles, which '
               'had never happened before.')],
       notes=[
        'The card is answered from the first second. No "let me think" and '
        'no list of possible changes: one change, named, and then the '
        'bullets in order.',
        'The third and fourth moves do one bullet between them: who was '
        'affected, and the evidence. Giving a number of shops and what '
        'happened to one of them is what makes the answer concrete enough '
        'to fill two minutes.',
        'The judgement in the fifth move is held together with its cost. '
        '"I think it was an improvement, and I would not say that to the '
        'woman who had the shop" is two ideas in one breath and is the '
        'strongest sentence in the turn.',
        'The last move returns to the positive side with a detail rather '
        'than an abstraction. Children on bicycles is a picture; "improved '
        'quality of life" is a phrase from a brochure.'],
       checks=[
        'Time it. At least a minute and a half, and stopped only when you '
        'were stopped?',
        'Mark the second at which you reached each bullet. Did the fourth '
        'bullet get at least a third of the time?',
        'Count pauses longer than three seconds. More than two and your '
        'fluency mark is affected.',
        'Did you read a written sentence aloud from your notes? Listen for '
        'the change of rhythm where it happens.',
        'Did you give one detail that an examiner could not have predicted? '
        'That is what the band description means by extended and '
        'developed.']),

  dict(no=3, part='Part 3', clock='4 to 5 minutes',
       focus='Change in a neighbourhood, and who decides',
       blurb=('The same subject in general terms. Answer, reason, example, '
              'and then a limit on what you have said. The limit is what '
              'separates Part 3 from Part 1.'),
       task='Answer each question in four or five sentences, with a reason '
            'and a qualification.',
       qs=['Why do people often object to changes in their own area?',
           'Who should decide what happens to a street: the residents or '
           'the council?',
           'Are there changes that should be made even if most people are '
           'against them?',
           'How could a council find out what people really think?'],
       shape=[('answer', 'Partly because the people who lose from a change '
               'know exactly what they lose.'),
              ('support', 'The gain is usually spread out and nobody can '
               'point to their share of it.'),
              ('follow-up', 'With our road closure, the shopkeeper could '
               'name the money and I could not name my benefit.'),
              ('support', 'So she went to the meeting and I did not, which '
               'is how these things are usually decided.'),
              ('follow-up', 'Although I would not say the objectors are '
               'always wrong, because sometimes they are the only people '
               'who have noticed a real problem.')],
       notes=[
        'The answer is a mechanism, not a sentiment: concentrated loss '
        'against diffuse gain. At 5.5 an examiner is listening for whether '
        'you can explain why something happens rather than report that it '
        'does.',
        'The example is the speaker\'s own, carried over from Part 2, which '
        'is allowed and is efficient. Reusing the material you have already '
        'made specific saves the invention time Part 3 does not give you.',
        'The fourth move draws the consequence: she went to the meeting and '
        'I did not. One sentence of consequence is worth two of '
        'description.',
        'The qualification at the end is genuine and not a formula. It '
        'concedes that the other side may be right for a reason, which is '
        'the move that lifts a Part 3 answer out of band 5.'],
       checks=[
        'Listen to the first sentence of each answer. Is it an answer, or a '
        'phrase buying time?',
        'Is there one explanation of why in each answer, rather than only '
        'what?',
        'Did you qualify your own claim at least twice in the four answers? '
        'Mark each one.',
        'Count answers under three sentences. In Part 3 that usually means '
        'you answered a Part 1 version of the question.',
        'Did you use the same example twice without adding anything? Once '
        'is efficient; twice unchanged sounds like the end of your '
        'material.']),
 ])
