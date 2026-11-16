# -*- coding: utf-8 -*-
"""Foundation 2, Progress Test: Listening.

Four parts, six questions each, one hearing. The real paper's shape at
this book's length, one step up from Foundation 1: longer recordings,
twenty-four questions, and the same three habits that will still be
needed at forty - the answers come in order, the recording does not
wait, and the last thing a candidate does is copy the answers across
without being given time for it.
"""

LPAPER = dict(
 vol=8, level='A2-B1', band='4.0-4.5',
 title='Progress Test · Listening',
 intro=(
   'Four parts, twenty-four questions, each recording played once. Part '
   '1 is a conversation about an everyday arrangement, Part 2 one '
   'speaker describing something, Part 3 a discussion between two '
   'students and Part 4 a short talk. This is not a full IELTS '
   'Listening paper. It is the same shape at the length you can follow '
   'now, one step longer than the test at the end of Foundation 1, and '
   'every habit it asks for is one you will still need when the '
   'recordings are twice as long again.'),
 instruct=[
   'Read the questions for each part before the recording begins. You '
   'are given that time whether you use it or not.',
   'Predict the grammar of each gap as well as the kind of word: '
   'singular or plural, article or no article, which part of speech.',
   'Write your answers while the recording is still playing, and keep '
   'your eyes on the next question.',
   'If you miss one, put a dot beside it and go on. Fill in every dot '
   'at the end, and never leave a blank.',
   'Copy your answers onto the answer sheet at the end and time the '
   'copying. Nobody gives you extra minutes for it.'],
 parts=[
  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Joining a swimming pool',
       task='A conversation at a reception desk',
       qtype='Questions 1-6',
       blurb='A conversation about an arrangement. Listen for numbers, '
             'days and prices.',
       script=[
        ('Receptionist', 'Harbour Lane Pool, can I help?'),
        ('Visitor', 'I would like to swim regularly. What is the best '
         'way to pay?'),
        ('Receptionist', 'How often do you think you will come?'),
        ('Visitor', 'Twice a week, perhaps three times.'),
        ('Receptionist', 'Then a monthly pass, thirty-two pounds. It '
         'pays for itself at seven swims, so at eight or more you are '
         'ahead. I would not sell it to somebody coming once a week.'),
        ('Visitor', 'That is helpful. Are there times to avoid?'),
        ('Receptionist', 'Tuesday and Thursday evenings, seven until '
         'half past eight. Clubs have four of the six lanes, so it is '
         'crowded. The shallow end is normal, if you are not doing '
         'lengths.'),
        ('Visitor', 'And lockers?'),
        ('Receptionist', 'A one-pound coin, returned when you open it. '
         'Bring one. The change machine is by the door and it is the '
         'thing that breaks most often in this building.'),
        ('Visitor', 'One more thing. My daughter is seven. Can she come '
         'with me?'),
        ('Receptionist', 'Yes, but under eights cannot swim alone and '
         'one adult can bring two of them at most. People ask us to '
         'bend that and we cannot: our licence depends on it.'),
        ('Visitor', 'And the February closure I read about?'),
        ('Receptionist', 'Two weeks for maintenance. The dates go up in '
         'November and your pass is extended by the days lost, '
         'automatically, so there is nothing for you to do.')],
       items=[
        ('A monthly pass costs ____________ pounds.', None,
         'thirty-two', 'And pays for itself at seven swims.'),
        ('Clubs use ____________ of the six lanes on club '
         'evenings.', None, 'four',
         'On Tuesday and Thursday from seven until half past eight.'),
        ('Lockers need a ____________ coin.', None, 'one-pound',
         'Returned when the locker is opened again.'),
        ('What breaks most often in the building?', None,
         'the change machine',
         'Which is why the receptionist says to bring a coin.'),
        ('One adult may bring ____________ children under eight.',
         None, 'two', 'A limit the pool says its licence depends '
         'on.'),
        ('February closure dates go up in ____________.', None,
         'November', 'And passes are extended automatically.')]),
  dict(no=2, first=7, part='Part 2', band='l2',
       heading='A baker on a village oven',
       task='One speaker describing a building',
       qtype='Questions 7-12',
       blurb='One speaker describing something. Listen for figures and '
             'reasons.',
       script=[
        ('Speaker', 'I bake in an oven built in 1837 and rebuilt twice, '
         'and people assume it is kept for the romance of it. It is '
         'not. It does something a modern oven cannot.'),
        ('Speaker', 'It is a brick box. You burn wood inside it for '
         'about three hours, sweep the fire out, and bake with the heat '
         'stored in the brick. That heat is steady in a way no element '
         'is, and the first batch and the fourth come out the same.'),
        ('Speaker', 'The economics explains why these ovens were '
         'shared. Three hours of wood for four loaves is absurd. '
         'The same wood for thirty families is a thirtieth of the '
         'fuel per loaf, and fuel then cost more than flour.'),
        ('Speaker', 'What killed them was not taste. It was cheap coal '
         'and the iron range, which put an oven in a wall that was '
         'being heated anyway. Within two generations the village oven '
         'had gone from almost everywhere.'),
        ('Speaker', 'Ours survived because the building was also the '
         'place people met. There are minute books in the parish chest '
         'recording meetings held in it until 1951, and a building that '
         'is useful for two things is much harder to pull down than one '
         'that is useful for one.'),
        ('Speaker', 'I will not pretend it is convenient. I light it '
         'at four in the morning and in a wet winter I cannot bake '
         'at all. But I would not swap it.')],
       items=[
        ('Wood is burned in the oven for about ____________ '
         'hours.', None, 'three',
         'Then the fire is swept out before baking.'),
        ('The baking is done with heat stored in the '
         '____________.', None, 'brick',
         'Which the speaker says is steadier than any element.'),
        ('A shared oven uses a ____________ of the fuel per loaf.',
         None, 'thirtieth', 'When thirty families bake on one '
         'heating.'),
        ('In the eighteenth century fuel cost more than '
         '____________.', None, 'flour',
         'Which is the speaker’s explanation for sharing.'),
        ('What ended the village oven?', None,
         'cheap coal and the iron range',
         'Which put an oven in a wall heated anyway.'),
        ('Meetings were held in the building until ____________.',
         None, '1951', 'Recorded in minute books in the parish '
         'chest.')]),
  dict(no=3, first=13, part='Part 3', band='l3',
       heading='Two students on missed appointments',
       task='A discussion between two students',
       qtype='Questions 13-18',
       blurb='Two students and a tutor. Listen for who thinks what, '
             'and for the numbers each uses.',
       script=[
        ('Tutor', 'You are presenting the dental study. What is your '
         'headline?'),
        ('Ines', 'That the cheapest measure worked best, which is '
         'almost never the finding anybody expects.'),
        ('Theo', 'And mine is the finding nobody wanted. Charging for a '
         'missed appointment cut misses by a fifth and drove the '
         'poorest patients away altogether.'),
        ('Ines', 'Two practices withdrew the charge for that reason, '
         'which I think is the most honest thing in the report.'),
        ('Theo', 'Agreed. But I would be careful with your headline. '
         'The three measures were not tried separately, so you cannot '
         'rank them cleanly.'),
        ('Ines', 'The text message cut misses by a third against the '
         'charge’s fifth. That is a big enough gap to survive '
         'some untidiness.'),
        ('Theo', 'Fair. And the third measure is the one I keep '
         'thinking about, because it is a change to a sentence. Staff '
         'asked patients to say the day and time back, instead of '
         'telling them.'),
        ('Ines', 'A quarter fewer misses, at no cost.'),
        ('Theo', 'Which is the kind of finding that gets ignored '
         'because it does not look like a policy.'),
        ('Ines', 'Then say that in the presentation. It is the '
         'sentence I would want somebody to remember a week later.'),
        ('Tutor', 'Both of you should also say what eleven practices '
         'in one region cannot tell us, early, in one line, and then '
         'stop apologising for it.')],
       items=[
        ('Ines says the ____________ measure worked best.', None,
         'cheapest', 'Which she calls an unexpected finding.'),
        ('Charging cut misses by a ____________.', None, 'fifth',
         'While driving the poorest patients away.'),
        ('____________ practices withdrew the charge.', None, 'Two',
         'Which Ines calls the most honest thing in the report.'),
        ('Theo warns that the three measures were not tried '
         '____________.', None, 'separately',
         'So they cannot be ranked cleanly.'),
        ('The text message cut misses by a ____________.', None,
         'third', 'Against the charge’s fifth, Ines says.'),
        ('Asking patients to repeat the day and time cut misses by a '
         '____________.', None, 'quarter',
         'At no cost, which Theo says gets ignored.')]),
  dict(no=4, first=19, part='Part 4', band='l4',
       heading='A lecture on measuring small changes',
       task='A short talk to first-year students',
       qtype='Questions 19-24',
       blurb='A short talk. Listen for the steps of the method and the '
             'figures given.',
       script=[
        ('Speaker', 'Today I want to persuade you of something that '
         'sounds dull and is not: that most useful findings come from '
         'measuring something cheap, and that the expensive measure is '
         'usually the one that fails.'),
        ('Speaker', 'My first example is the dental study you have '
         'read. One appointment in eight missed, where the practices '
         'had guessed one in twenty. Notice that the first finding was '
         'about their own estimate, before any intervention at all. '
         'That is normal. People are wrong about their own numbers in a '
         'direction that flatters them.'),
        ('Speaker', 'Second, the bicycle hire scheme in your reading '
         'pack. The city thought it was short of bicycles. It was short '
         'of bicycles in the right place, and a van moving them four '
         'times a day doubled the journeys. The van cost less than one '
         'per cent of what more bicycles would have cost.'),
        ('Speaker', 'Third, free buses. Use rose fourteen per cent, car '
         'journeys fell three. The policy was sold as a way of taking '
         'cars off the road and it is a poor one. What it actually did '
         'was cut journey times by a tenth, because nobody was paying '
         'at the door.'),
        ('Speaker', 'There is a pattern in all three. Each '
         'measurement found an effect nobody had predicted, and '
         'each time that effect was larger than the intended one. '
         'Intended effects are estimated in advance by people with '
         'an interest in them; unintended ones are only ever found '
         'by measuring.'),
        ('Speaker', 'So, for your first essay: take any scheme, say '
         'what it intended, say what it was measured to do, and say '
         'which is bigger.')],
       items=[
        ('The practices had guessed one appointment in '
         '____________ was missed.', None, 'twenty',
         'Against the one in eight that was measured.'),
        ('The speaker says people are wrong about their own numbers '
         'in a direction that ____________ them.', None, 'flatters',
         'Which the speaker calls normal.'),
        ('The van moved bicycles ____________ times a day.', None,
         'four', 'And doubled the journeys made.'),
        ('The van cost less than ____________ per cent of what more '
         'bicycles would have cost.', None, 'one',
         'Which is the speaker’s point about cheap measures.'),
        ('Free buses cut journey times by a ____________.', None,
         'tenth', 'Because nobody was paying at the door.'),
        ('The speaker says unintended effects are only ever found by '
         '____________.', None, 'measuring',
         'While intended ones are estimated in advance.')])])
