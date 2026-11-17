# -*- coding: utf-8 -*-
"""Volume 5 timed Speaking paper: three parts, 11 to 14 minutes."""

SPAPER = dict(
 vol=5, band='7.0', level='B2+/C1',
 title='Speaking Paper',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is about '
   'you, Part 2 is a long turn from a card, Part 3 is a discussion of the '
   'same subject in general terms. At band 7 the examiner is listening for '
   'whether you can speak at length without noticeable effort, and whether '
   'what you say is organised while you are saying it rather than '
   'afterwards.'),
 keyintro=(
   'Record the paper first. For each part there is the shape of an answer '
   'at band 7.0, a note on what it is doing, and what to listen for. The '
   'gains at this band are almost all in Part 3 and they are about '
   'structure: a claim, the mechanism behind it, a case, and an honest '
   'statement of what the claim does not cover.'),
 instruct=[
  'Record the whole paper and listen to it a day later. Hesitation is '
  'inaudible to the person hesitating.',
  'Two or three sentences in Part 1, five or six in Part 3, and the long '
  'turn kept going until you are stopped.',
  'Spend the Part 2 minute on the last bullet and on one concrete detail '
  'for each of the others. Four words a bullet is enough.',
  'In Part 3, answer the question asked, give the mechanism, then limit the '
  'claim. Limiting before developing sounds evasive; after it sounds '
  'considered.',
  'Do not repair a small slip. At band 7 a self-correction that changes '
  'nothing is more audible than the slip was.'],

 parts=[

  dict(no=1, part='Part 1', clock='4 to 5 minutes',
       focus='News, information and what you follow',
       blurb=('Questions about you and the information you take in. Two or '
              'three sentences each, with one detail that is yours.'),
       task='Answer each question in two or three sentences, with one '
            'specific detail.',
       qs=['Let’s talk about news. How do you usually find out what is '
           'happening?',
           'Has that changed in the last few years?',
           'Do you talk about the news with the people around you?',
           'Is there any kind of news you avoid?',
           'Do you think you follow the news more closely than most '
           'people?'],
       shape=[('answer', 'Mostly a radio programme at seven in the morning '
               'and one newsletter on a Saturday.'),
              ('support', 'I stopped looking at anything on a telephone '
               'about two years ago, which took three attempts.'),
              ('follow-up', 'I am better informed and I am noticeably '
               'slower to hear about anything.')],
       notes=[
        'Two specific sources and a time. Band 7 Part 1 answers sound '
        'particular; a candidate who says "I follow the news online" has '
        'given the examiner nothing to listen to.',
        'The support includes a failure - three attempts - which is both '
        'honest and the kind of detail nobody prepares. It also answers the '
        'next question before it is asked, which is efficient.',
        'The follow-up holds a gain and a loss in one sentence without '
        'linking words. That balance is the single most useful habit for '
        'Part 3 and it is worth practising here where the stakes are low.',
        'Three sentences, about fourteen seconds. Everything saved here is '
        'available later, and Part 3 is where it is needed.'],
       checks=[
        'Is every answer particular enough that it could not have been '
        'given by somebody else?',
        'Did any answer contain a gain and a cost in the same breath?',
        'Count your filler openings and your uses of actually and '
        'basically. At band 7 these are the loudest thing left.',
        'Did you answer a later question early? That is efficient, not a '
        'fault, provided you do not repeat yourself when it arrives.',
        'Is there any answer where you spoke for more than twenty seconds? '
        'In Part 1 that is a sign of nerves.']),

  dict(no=2, part='Part 2', clock='1 minute to prepare, 1 to 2 minutes '
       'to speak',
       focus='The long turn',
       blurb=('A card, a minute of notes, up to two minutes of speech. The '
              'bullets are the outline; the last one is where the band is '
              'decided, so plan it and let the others look after '
              'themselves.'),
       task='Make notes for one minute, then speak for up to two minutes '
            'without stopping.',
       cue=('Describe a time you changed your mind about something '
            'important.',
            ['what you had believed', 'what changed it',
             'how long the change took',
             'and explain how you feel about having been wrong']),
       qs=['You have one minute to think about what you are going to say. '
           'You can make notes if you wish.',
           'Now, describe a time you changed your mind about something '
           'important.',
           'Did you tell anybody at the time?',
           'Do people change their minds often, in your experience?'],
       shape=[('answer', 'I used to believe that the best way to help a '
               'struggling student was to give them more time.'),
              ('support', 'I taught for four years on that assumption and '
               'the results were not good, which I explained away each '
               'time.'),
              ('follow-up', 'What changed it was a colleague who asked me '
               'to list the students who had improved, which took about '
               'nine seconds.'),
              ('support', 'All of them were the ones I had given harder '
               'work to and less time, and I had never put the two facts '
               'beside each other.'),
              ('follow-up', 'It took about a term to accept and another '
               'year to teach differently, and the gap between those two '
               'is the part I think about.'),
              ('support', 'I am not embarrassed about being wrong; I am '
               'embarrassed that I had the evidence for four years and did '
               'not look at it.')],
       notes=[
        'The belief is stated as a belief, in the first sentence, with no '
        'preamble. Everything after it is evidence, and the structure is '
        'visible from the first ten words.',
        'The third and fourth moves give the turning point as an event with '
        'a duration in it - nine seconds - which is what makes a story of '
        'changing one\'s mind concrete rather than reflective.',
        'The fifth move distinguishes two timescales, accepting and acting, '
        'and names the gap between them as the interesting thing. At band 7 '
        'that kind of distinction inside an answer is what "fully developed" '
        'means.',
        'The last move answers the final bullet by refusing the obvious '
        'answer: not embarrassed about being wrong, embarrassed about not '
        'looking. Ending on a distinction is better than ending on a '
        'feeling.'],
       checks=[
        'Time it. Did you reach a minute and a half, and did you stop only '
        'when stopped?',
        'Did the final bullet get at least a third of the time, and does '
        'your answer to it contain a distinction rather than a feeling?',
        'Is there a duration, a count or a date in each of the first three '
        'bullets?',
        'Count pauses over three seconds. At band 7 two in two minutes is '
        'the most that goes unnoticed.',
        'Did you tell a story or describe a state? A story fills two '
        'minutes; a state has to be padded.']),

  dict(no=3, part='Part 3', clock='4 to 5 minutes',
       focus='Evidence, belief and changing a mind',
       blurb=('The same subject in general terms. Claim, mechanism, case, '
              'limit. Five or six sentences, and the limit should name what '
              'the claim does not cover.'),
       task='Answer each question in five or six sentences: a claim, the '
            'reason behind it, a case, and a limit.',
       qs=['Why do people hold on to beliefs after the evidence has '
           'changed?',
           'Is it possible to change somebody else’s mind by arguing '
           'with them?',
           'Should public figures be criticised for changing their '
           'position?',
           'How should children be taught to handle evidence that '
           'contradicts them?'],
       shape=[('answer', 'Partly because abandoning a belief usually means '
               'admitting that something you did for years was wrong.'),
              ('support', 'The cost is not the belief, which is cheap, but '
               'the decisions attached to it, which are not.'),
              ('follow-up', 'That is why people change their minds most '
               'easily about things they have never acted on.'),
              ('support', 'I notice I argue hardest about the methods I '
               'have taught and barely at all about the ones I only read '
               'about.'),
              ('follow-up', 'Although I would not put all of it down to '
               'cost, because some beliefs are held for company rather '
               'than for conviction, and those are given up the moment the '
               'company changes.'),
              ('support', 'Which suggests the two kinds need to be '
               'argued with differently, and that most arguing fails '
               'because it treats them alike.')],
       notes=[
        'The claim is a mechanism from the first sentence: the cost of '
        'abandonment is the decisions, not the belief. At band 7 the first '
        'sentence of a Part 3 answer should contain the reason, not '
        'promise it.',
        'The third move derives a prediction from the mechanism - people '
        'change their minds easily about things they never acted on - and '
        'the fourth tests it against the speaker\'s own behaviour. Claim, '
        'prediction, test is a structure worth having ready.',
        'The limit introduces a second mechanism rather than softening the '
        'first. Beliefs held for company is a different explanation, and '
        'naming it strengthens the answer instead of hedging it.',
        'The last move draws a consequence for the question that was asked '
        'next, which is allowed and efficient. Six sentences, about fifty '
        'seconds, and nothing in it is filler.'],
       checks=[
        'Does the first sentence of each answer contain the reason, or does '
        'it announce that a reason is coming?',
        'Did you derive anything from your own claim - a prediction, a '
        'consequence - and then test it?',
        'Is your limit a second explanation, or is it a softening phrase? '
        'Only the first earns anything at this band.',
        'Count your answers of five or more sentences. In Part 3 at band 7 '
        'that should be most of them.',
        'Listen for the point where an answer stopped developing and began '
        'repeating. That point is where your preparation ran out, and it is '
        'the thing to work on.']),
 ])
