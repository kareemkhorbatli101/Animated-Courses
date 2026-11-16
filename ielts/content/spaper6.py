# -*- coding: utf-8 -*-
"""Volume 6 timed Speaking paper: three parts, 11 to 14 minutes."""

SPAPER = dict(
 vol=6, band='7.5', level='C1',
 title='Speaking Paper',
 intro=(
   'Eleven to fourteen minutes, three parts, one examiner. Part 1 is four '
   'to five minutes of questions about yourself. Part 2 is a long turn: one '
   'minute to prepare, one to two minutes to speak, from a card. Part 3 is '
   'four to five minutes of discussion arising from the Part 2 topic, and '
   'it is where the band is decided. Record yourself. The only reliable way '
   'to hear your own hesitation, your own repeated word and your own '
   'two-sentence answers is to listen to them.'),
 keyintro=(
   'Nothing here is marked. What you get instead is the shape an answer at '
   'band 7.5 takes in each part, a note of what that shape is doing, and a '
   'checklist to run against your own recording. The shapes are not scripts '
   'and must not be learnt: they are the pattern of moves — answer, '
   'support, follow-up — that the four published criteria reward, and the '
   'content under them must be yours.'),
 instruct=[
  'Record the whole thing, including the examiner’s questions if somebody '
  'is asking them. An answer you only remember giving cannot be marked.',
  'Hold the two-to-five rule: two sentences in Part 1, five in Part 3, and '
  'the long turn kept going until you are stopped.',
  'In Part 2 you have exactly one minute to make notes. Write four words '
  'against each bullet and nothing else; a sentence written in that minute '
  'is a sentence you will read aloud.',
  'In Part 3 answer the question that was asked before you widen it. The '
  'commonest band 6 habit at this level is to answer a more comfortable '
  'question than the one put to you.',
  'Do not correct a small grammatical slip mid-sentence. Self-correction is '
  'rewarded when it changes the meaning and penalised, through hesitation, '
  'when it does not.'],

 parts=[

  dict(no=1, part='Part 1', focus='Where you live and getting around',
       clock='4 to 5 minutes',
       blurb='The examiner asks about you, your home and your daily life. '
             'Two or three sentences each. A real detail is worth more '
             'than a general comment.',
       task='Answer each question in two or three sentences, with one '
            'specific detail.',
       qs=['Let’s talk about where you live. Do you live in a house or '
           'an apartment?',
           'What do you like most about the area?',
           'How do you usually travel around your town or city?',
           'Has the way you travel changed in the last few years?',
           'Would you like to live somewhere else in the future?'],
       shape=[('answer', 'A flat, on the third floor, for about four '
               'years.'),
              ('support', 'What I like is that the market is underneath '
               'it on Saturdays.'),
              ('follow-up', 'Which is noisy and means I have never once '
               'planned a weekend shop.')],
       notes=[
        'The answer gives a specific — third floor, four years — in the '
        'first sentence. Examiners hear "a flat" two hundred times a day; '
        'the detail is what makes the rest of the answer sound like a '
        'person speaking rather than a candidate answering.',
        'The support does not repeat the question. "What I like is that the '
        'market is underneath it" answers a question about the area with a '
        'consequence of where the flat is, which is how a real conversation '
        'moves.',
        'The follow-up concedes something negative, which is the single '
        'most effective Part 1 move available. "Which is noisy and means I '
        'have never once planned a weekend shop" is two ideas held '
        'together, and it ends the turn rather than trailing off.',
        'Three sentences and under fifteen seconds. Part 1 is not where '
        'length earns marks: it is where the examiner decides whether you '
        'can be understood without effort.'],
       checks=[
        'Listen back: is there a specific detail — a number, a place, a '
        'day — in the first sentence of each answer?',
        'Did any answer run past four sentences? In Part 1 that is a fault, '
        'not a virtue, and it costs you time in Part 3.',
        'Count your one-sentence answers. More than one in five questions '
        'and the examiner has to work to keep the conversation going.',
        'Are you repeating the words of the question back before answering? '
        'Mark every instance; it is the commonest source of dead time.',
        'Did you ever say "it depends" without then saying what it depends '
        'on? That phrase is only worth anything when it is finished.']),

  dict(no=2, part='Part 2', focus='The long turn',
       clock='1 minute to prepare, 1 to 2 minutes to speak',
       blurb='You will have one minute to prepare and then one to two '
             'minutes to talk. You may make notes. The examiner will stop '
             'you and will not interrupt before the minute is up.',
       task='Make notes for one minute, then speak for up to two minutes '
            'without stopping.',
       cue=('Describe a journey you make regularly.',
            ['where you go and how often',
             'how you travel',
             'what the journey is like',
             'and explain whether you would change it if you could']),
       qs=['You have one minute to think about what you are going to say. '
           'You can make notes if you wish.',
           'Now, describe a journey you make regularly.',
           'Would you say most people in your city make a similar '
           'journey?'],
       shape=[('answer', 'The eleven-minute walk to my daughter’s school, '
               'twice a day, four days a week.'),
              ('support', 'Along a footpath beside a dyke, which is '
               'unpaved and floods in February.'),
              ('follow-up', 'The alternative is a road with no pavement '
               'for two hundred metres.'),
              ('support', 'So in February we go the long way and it takes '
               'twenty-five minutes.'),
              ('follow-up', 'What I would change is not the route but the '
               'surface, which has needed about four hundred pounds of '
               'gravel for six years.'),
              ('support', 'Everybody who uses it says so and nobody has '
               'ever written to the council.'),
              ('follow-up', 'Including me, which is the part I find '
               'difficult to defend.')],
       notes=[
        'Every bullet on the card is covered and the fourth gets the most '
        'time. The explanation bullet is where the band is decided, and a '
        'candidate who treats all four equally has spent half the turn on '
        'the easy ones.',
        'The answer to the last bullet is specific and unexpected — not '
        'the route but the surface, and a figure for what it would cost. '
        'Concrete, slightly surprising content is what makes a long turn '
        'sound unprepared in the right way.',
        'The turn ends on a self-criticism rather than a summary. "Which is '
        'the part I find difficult to defend" is a complete thought that '
        'closes the turn, and the examiner does not have to stop you '
        'mid-clause.',
        'Nothing in this shape is a memorised phrase. The moves are '
        'ordinary — a fact, a detail, a complication, a consequence — and '
        'the whole turn would collapse if the content were not the '
        'speaker’s own.'],
       checks=[
        'Time your recording. Under a minute and ten seconds means you '
        'stopped early, which costs you more than any grammatical error '
        'in the turn.',
        'Did you cover all four bullets, and did the explanation bullet get '
        'more time than any other one?',
        'Listen for the point where you ran out of material. What could '
        'you have added there — a number, a person, a second occasion?',
        'Count your fillers in the first fifteen seconds. That is where '
        'they cluster, and it is where the examiner forms an impression of '
        'your fluency.',
        'Did you read your notes aloud at any point? If a sentence in your '
        'notes appears word for word in the recording, write fewer '
        'words.']),

  dict(no=3, part='Part 3', focus='Transport, cities and public spending',
       clock='4 to 5 minutes',
       blurb='The examiner asks broader questions arising from Part 2. '
             'Five or six sentences each. Answer the question asked '
             'before widening it.',
       task='Answer each question in five or six sentences, taking a '
            'position and supporting it.',
       qs=['Why do you think people in many cities now travel further to '
           'work than they used to?',
           'Should governments spend more on public transport than on '
           'roads?',
           'Some people say cities should be designed so that cars are '
           'unnecessary. What do you think?',
           'How might the way people travel change in the next thirty '
           'years?',
           'Who should pay for improvements to local transport?'],
       shape=[('answer', 'Mostly because housing and work have moved in '
               'opposite directions.'),
              ('support', 'Where I live, the jobs went to a business park '
               'eight miles out and the affordable housing stayed in the '
               'town.'),
              ('follow-up', 'So the commute got longer without anybody '
               'choosing to travel further.'),
              ('support', 'And the bus service was built for the old '
               'pattern, which is why it runs into the centre.'),
              ('follow-up', 'I would distinguish two things people run '
               'together here: the distance is a planning outcome and the '
               'difficulty is a transport one.'),
              ('support', 'You could fix the second without touching the '
               'first, and most cities try the reverse.'),
              ('follow-up', 'Which is slower and more expensive, though I '
               'accept it is the only one that lasts.')],
       notes=[
        'The first sentence answers the question that was asked — why '
        'people travel further — before anything is widened. The commonest '
        'band 6 habit in Part 3 is answering a more comfortable question, '
        'and an examiner notices it immediately.',
        'The support is local and specific: a business park eight miles '
        'out, affordable housing left in the town. One concrete case '
        'carries more weight than three general claims and is also easier '
        'to produce under pressure.',
        'The fifth move draws a distinction — distance is planning, '
        'difficulty is transport — and says explicitly that people run the '
        'two together. Distinguishing two things inside one question is '
        'the single highest-value move available in Part 3.',
        'The turn ends by conceding the strength of the position it just '
        'argued against. "I accept it is the only one that lasts" costs '
        'nothing and demonstrates exactly the flexibility the criteria '
        'reward.'],
       checks=[
        'For each answer, does the first sentence answer the question that '
        'was actually asked, in the terms it was asked in?',
        'Did any answer stop at three sentences? Part 3 is where length '
        'earns marks, and five to six is the target.',
        'Did you draw a distinction anywhere — two things people confuse, '
        'separated? Aim for one per Part 3 answer.',
        'Did you concede anything to the other side? An answer with no '
        'concession in it sounds rehearsed even when it is not.',
        'Listen for abstraction without example. Any stretch of thirty '
        'seconds with no concrete noun in it is a stretch the examiner '
        'stops following.',
        'Note where you hesitated longest. Was it a word you did not have, '
        'or an idea you did not have? The two need different '
        'practice.']),
 ],
)
