# -*- coding: utf-8 -*-
"""Volume 3 timed Speaking paper, second form: three parts, 11 to 14 min.

The second half of the split edition needs its own complete practice test,
and the Speaking paper is the one part of that test a candidate can sit
alone with a recorder. This form is set on the subjects units 26 to 30
teach, so its Part 3 asks about things the book has just given the
candidate the vocabulary for.

Part 3 here ends on a question about standards, which is the move unit 30
cycle 5 teaches for Writing and which transfers to Speaking in four words:
it depends what you mean. That transfer is the reason the two papers are
not interchangeable.
"""

SPAPER = dict(
 vol=3, band='6.0', level='B2',
 title='Speaking Paper · second form',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is four '
   'to five minutes about you, Part 2 a long turn from a card with a minute '
   'to prepare, and Part 3 four to five minutes on the general question '
   'behind Part 2. Record yourself and keep the recording: this form is '
   'only worth sitting if you listen to it afterwards, and the gap between '
   'what you meant to say and what you said is exactly what an examiner '
   'hears.'),
 keyintro=(
   'An answer shape for each part, notes on what each shape is doing, and '
   'checks to apply to your own recording. The shapes are not scripts. A '
   'learnt answer is audible inside two sentences and it makes an examiner '
   'discount the fluency it was meant to show.'),
 instruct=[
  'Record the whole thing in one take, including the parts that go badly. '
  'A recording you stopped and restarted tells you nothing about fluency.',
  'Part 1: two or three sentences an answer. Three words is a candidate who '
  'cannot say more; ninety seconds is a candidate who will be interrupted.',
  'Part 2: use the minute on the last line of the card, not the first, and '
  'write four words rather than sentences. Speak until you are stopped.',
  'Part 3: answer, develop, then limit. Half-agreement is the most useful '
  'habit in this part and the one most candidates arrive without.',
  'Listen to the recording once for content and a second time only for '
  'hesitation. Count the pauses that fall inside a clause rather than '
  'between sentences: those are the ones that cost the band.'],

 parts=[

  dict(no=1, part='Part 1', clock='4 to 5 minutes',
       focus='Where you live, and getting about',
       blurb='Questions about you and the place you live in. Two or three '
             'sentences each, with one detail that could only be yours.',
       task='Answer each question in two or three sentences, with one '
            'specific detail.',
       qs=['Where do you live, and how long have you lived there?',
           'What is the best thing about the area you live in?',
           'How do you usually get around - on foot, by bike, by car?',
           'Has the way you travel changed in the last few years?',
           'Is there anything about your area you would change?'],
       shape=[('answer', 'In Marhaven, on the coast, for about eleven '
               'years now.'),
              ('support', 'I moved for work and stayed for the walk to '
               'it, which is twenty minutes along the sea front.'),
              ('follow-up', 'What I would change is the bus service on '
               'Sundays, which is the one day I would use it.')],
       notes=[
        'Two sentences, and the second carries a detail that nobody could '
        'have prepared: the walk, the sea front, the twenty minutes. A '
        'specific noun from your own life is the cheapest Lexical Resource '
        'mark in the test.',
        'The answer to the first question is eleven words and it is '
        'complete. Part 1 does not reward length; it rewards an answer '
        'followed by something.',
        'The third line shows how to answer a question about change '
        'without a learnt phrase: name the thing, then name the day. '
        'Concrete beats general at every band in Part 1.',
        'Nothing here is impressive and that is deliberate. A candidate '
        'reaching for an impressive answer in Part 1 sounds rehearsed in '
        'the part of the test where sounding rehearsed costs most.'],
       checks=[
        'Is every answer two or three sentences - not one, and not eight?',
        'Does each answer contain one detail that is specifically yours: a '
        'place, a time, a number, a name?',
        'Listen for a sentence you have said before in this form. If you '
        'recognise it, the examiner will too.',
        'Did you answer the question you were asked, or the one next to '
        'it? Has the way you travel changed is not the same question as '
        'how do you travel.',
        'Count your fillers. Three er or hmm in a minute is what the '
        'descriptors call noticeable hesitation.']),

  dict(no=2, part='Part 2',
       clock='1 minute to prepare, 1 to 2 minutes to speak',
       focus='The long turn',
       blurb='A card, a minute of notes, and up to two minutes without '
             'interruption. Take the bullets in order and keep going until '
             'you are stopped.',
       task='Make notes for one minute, then speak for up to two minutes '
            'without stopping.',
       cue=('Describe a place in your town that has changed.',
            ['what the place is',
             'what it was like before',
             'what it is like now',
             'and explain whether you think the change was an '
             'improvement']),
       qs=['What the place is',
           'What it was like before',
           'What it is like now',
           'Whether the change was an improvement, and why'],
       shape=[('answer', 'The old fish market at the end of the harbour, '
               'which is now a row of about a dozen small shops.'),
              ('support', 'For most of my childhood it was a working '
               'market, open from five in the morning, concrete floor, '
               'and you could smell it from the bus stop.'),
              ('support', 'It closed about eight years ago when the boats '
               'stopped landing there, and it stood empty for three '
               'winters, which is what people forget when they talk '
               'about what it used to be.'),
              ('support', 'Now it has a bakery, two cafes, a bike repair '
               'place and some shops I have never been into, and on a '
               'Saturday it is busier than the market ever was.'),
              ('follow-up', 'Whether it is an improvement depends on who '
               'you ask, and I think the honest answer is that it is '
               'better for the town and worse for about thirty families.'),
              ('follow-up', 'If I had to choose I would say yes, because '
               'three empty winters taught everybody what the '
               'alternative actually was.')],
       notes=[
        'The last line of the card gets two of the six moves. That line is '
        'where the development marks are, and it is the line candidates '
        'run out of time to reach.',
        'The answer is specific and small: the fish market, five in the '
        'morning, the smell from the bus stop, three empty winters. A '
        'remembered place produces detail; an impressive invented one '
        'produces generalities and dries up at forty seconds.',
        'The third empty winter is doing argumentative work, not '
        'decorative work: it is the fact that answers the improvement '
        'question, and it was set up two moves earlier.',
        'The final judgement is qualified and then resolved - better for '
        'the town, worse for thirty families, and then a choice. Two '
        'minutes is long enough to change your mind once, and doing it on '
        'purpose reads as thinking.'],
       checks=[
        'Did you speak until you were stopped, or did you finish early? '
        'Seventy seconds is the commonest Part 2 and it costs a band.',
        'Did you answer the last line of the card, and give it more than '
        'one sentence?',
        'Is your example a real one? Listen for the moment the detail '
        'stops, because that is the moment the invention started.',
        'Count your signposts. Three or four in two minutes is enough '
        'structure for the examiner to follow and for you to find your way '
        'back.',
        'Did you narrate consistently in the past, and move to the present '
        'only when you reached what the place is like now?']),

  dict(no=3, part='Part 3', clock='4 to 5 minutes',
       focus='Change, who pays for it, and what counts as better',
       blurb='The same subject in general terms. Answer, develop, limit. '
             'Four or five sentences, and the limit is what earns the next '
             'question.',
       task='Answer each question in four or five sentences, developing '
            'before you qualify.',
       qs=['Why do people often oppose change in the places they live?',
           'Who should decide what happens to a building nobody is using?',
           'Some people say tourism saves small towns and others say it '
           'empties them. What do you think?',
           'Is it possible to say whether a town has got better or worse?'],
       shape=[('answer', 'Mostly because the costs of a change are '
               'specific and the benefits are general.'),
              ('support', 'The people who lose a market know exactly what '
               'they have lost, and the people who gain a bakery do not '
               'know they have gained anything until it is there.'),
              ('support', 'So opposition is concentrated and support is '
               'diffuse, which is true of almost every planning dispute '
               'anywhere and has very little to do with how '
               'conservative people are.'),
              ('follow-up', 'Where I would qualify that is in places '
               'where the same change has already happened badly nearby. '
               'That is not vague resistance; that is evidence.'),
              ('follow-up', 'On whether a town has got better, I think it '
               'depends what you mean by better, and most arguments about '
               'it are really arguments about which standard to use '
               'rather than about the facts.')],
       notes=[
        'The first sentence is a position and it is nine words. Part 3 '
        'rewards an answer followed by reasoning, and the reasoning cannot '
        'start until the answer has finished.',
        'The qualification in the fourth move is the move that earns the '
        'next question: it concedes something real and names why it is not '
        'the same case. Up to a point, in some contexts and that is true '
        'of X but not of Y are the three phrases to arrive with.',
        'The last move transfers the Writing skill from unit 30 into '
        'Speaking in four words - it depends what you mean by better - and '
        'then says what the disagreement is actually about. It is the '
        'highest-scoring sentence in the shape and the shortest to learn.',
        'Nothing in this part is about the candidate’s own town. Part 3 '
        'has left your life behind, and an answer that returns to it is '
        'answering Part 1 again.'],
       checks=[
        'Does each answer begin with a position rather than with a '
        'preamble about how interesting the question is?',
        'Is there a qualification in each answer - a limit, an exception, '
        'a context where it would not hold?',
        'Did you answer in general terms, or did you go back to your own '
        'street? Part 3 is the general question.',
        'Where the question was hypothetical, did you use a conditional? '
        'If sport were free, more children play is an error in the one '
        'place the examiner is listening for the structure.',
        'Find one answer where you said what the question depends on. If '
        'there is none, you have left the easiest band on the table.']),
 ])
