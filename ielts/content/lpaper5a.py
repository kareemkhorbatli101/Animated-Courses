# -*- coding: utf-8 -*-
"""Volume 5 second timed Listening paper: four parts, 40 questions."""

LPAPER = dict(
 vol=5, level='B2+/C1', band='7.0', form='a',
 title='Listening Paper 2',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Sit this '
   'paper at least a week after the first, and only once you have read '
   'the whole of the first key and the scripts at the back.'),
 instruct=[
  'Read the questions for each part before the recording starts, and '
  'read the last one first.',
  'Name the two kinds of answer you got wrong last time: spellings, '
  'plurals, numbers, or distraction.',
  'Predict the form of each answer before you hear it.',
  'If you miss one, put a dash and move on within four seconds.',
  'In Parts 3 and 4 the speakers correct themselves. The answer is what '
  'they settle on, not what they said first.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Arranging a venue for a conference dinner',
       task='A telephone call to a hotel events office · note completion',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the notes. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Coordinator', 'Thornbury Hotel events, good afternoon.'),
        ('Caller', 'I am organising a dinner for a conference and I need '
         'to know what you can do for about a hundred and forty people.'),
        ('Coordinator', 'Two rooms would take that. The Assembly Room '
         'seats a hundred and sixty at round tables, and the Long Gallery '
         'seats a hundred and eighty but has a pillar in the middle, so I '
         'would not recommend it if there are speeches.'),
        ('Caller', 'There are two short speeches.'),
        ('Coordinator', 'The Assembly Room, then. Which date?'),
        ('Caller', 'Thursday the fourteenth of April.'),
        ('Coordinator', 'That is available. I should warn you that the '
         'hotel has a wedding in the other room that evening, so the car '
         'park will be full and your guests should be told to use the '
         'multi-storey on Bridge Street.'),
        ('Caller', 'What does it cost?'),
        ('Coordinator', 'For a three-course dinner, thirty-eight pounds a '
         'head on the standard menu, forty-six on the premium. There is no '
         'room charge if you take more than a hundred covers.'),
        ('Caller', 'And dietary requirements?'),
        ('Coordinator', 'We need the numbers ten days before, not the '
         'names. Vegetarian and vegan are included in the price. Anything '
         'requiring a separate preparation area, which in practice means '
         'severe allergies, is an extra four pounds and we need twenty-one '
         'days.'),
        ('Caller', 'Is there a deposit?'),
        ('Coordinator', 'Twenty per cent on booking, and the balance '
         'fourteen days before. Cancellation inside twenty-eight days '
         'forfeits the deposit; inside seven days the full amount is '
         'payable.'),
        ('Caller', 'Can we use the room beforehand for a reception?'),
        ('Coordinator', 'From seven, and the dinner has to be served by '
         'eight because the kitchen closes at ten. Drinks on arrival are '
         'six pounds a glass and we charge on consumption rather than on '
         'numbers.'),
        ('Caller', 'Is there a stage?'),
        ('Coordinator', 'A low platform, two metres by three, and a '
         'microphone. A lectern if you ask for one, and a projector is '
         'eighty-five pounds because we hire it in.'),
        ('Caller', 'My name is Thandiwe Castellanos-Burke.'),
        ('Coordinator', 'Spell the first part of the surname for me?'),
        ('Caller', 'C-A-S-T-E-L-L-A-N-O-S, then Burke, B-U-R-K-E.'),
        ('Coordinator', 'I will hold the room for five working days and '
         'send a contract this afternoon.')],
       items=[
        ('Room recommended: the ____________ Room', None, 'Assembly',
         'Because the Long Gallery has a pillar and there are speeches.'),
        ('Seating capacity of that room: ____________', None, '160',
         'At round tables, against a hundred and eighty in the other '
         'room.'),
        ('Guests should park in the multi-storey on ____________ Street',
         None, 'Bridge',
         'Because a wedding will fill the hotel car park.'),
        ('Standard menu: £____________ a head', None, '38',
         'Against forty-six on the premium menu.'),
        ('No room charge above ____________ covers', None, '100',
         'Which this booking of a hundred and forty exceeds '
         'comfortably.'),
        ('Dietary numbers needed ____________ days before',
         None, 'ten', 'Numbers rather than names, and twenty-one days for '
         'a separate preparation area.'),
        ('Separate preparation: extra £____________ a head',
         None, '4', 'With twenty-one days of notice required.'),
        ('Deposit: ____________ per cent on booking', None, '20',
         'With the balance fourteen days before the dinner.'),
        ('Dinner must be served by ____________ p.m.', None, '8',
         'Because the kitchen closes at ten.'),
        ('Projector hire: £____________', None, '85',
         'Because the hotel hires it in rather than owning it.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk about a river restoration scheme',
       task='A talk to a local wildlife group · multiple choice and note completion',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Speaker', 'I am going to describe what we have done to four '
         'kilometres of the Welland and, more usefully, what has not '
         'worked.'),
        ('Speaker', 'The river was straightened in the eighteen-sixties '
         'for drainage, which shortened it by about a third and roughly '
         'doubled the speed of the water. Fast water carries silt past '
         'instead of dropping it, so the bed became gravel scoured clean, '
         'and the fish that need silt and slack water disappeared within '
         'two generations.'),
        ('Speaker', 'The scheme has three elements. We have put back '
         'meanders on one kilometre, which is the expensive part at about '
         'four hundred thousand pounds. We have installed one hundred and '
         'twelve large pieces of dead wood, which cost almost nothing. And '
         'we have fenced two kilometres of bank from cattle.'),
        ('Speaker', 'Now the results, which are not what the business case '
         'predicted. The remeandering has worked hydrologically and the '
         'ecological response is slower than forecast: four years in, we '
         'have about half the invertebrate recovery we expected by year '
         'three.'),
        ('Speaker', 'The dead wood has been the surprise. Each piece '
         'creates slack water behind it, and the invertebrate counts '
         'around the wood are the highest anywhere on the reach. Per pound '
         'spent it has outperformed the remeandering by a factor of '
         'something like thirty.'),
        ('Speaker', 'The fencing is the awkward one. It has worked where '
         'the bank was already eroding and it has produced dense scrub '
         'elsewhere, which shades the water, and two of our target plants '
         'need light. We are now cutting half of it on a rotation, which '
         'means the fencing has created a management obligation that will '
         'not end.'),
        ('Speaker', 'Two general lessons. First, the cheap intervention '
         'should be tried first and almost never is, because a large grant '
         'is easier to obtain than a small one. Second, every one of these '
         'measures converts a one-off capital project into an annual '
         'commitment, and the funding we have runs for seven years.')],
       items=[
        ('When was the river straightened?',
         ['the eighteen-sixties', 'the nineteen-sixties', 'the seventeen-sixties'],
         0,
         'It was done for drainage and shortened the river by a third.',
         {1: 'The nineteen-sixties is a century later than the speaker '
             'says.', 2: 'The seventeen-sixties is a century earlier than she '
             'says.'}),
        ('Straightening roughly ____________ the speed of the water',
         None, 'doubled',
         'Which stopped silt being deposited on the bed.'),
        ('Cost of remeandering one kilometre: £____________ '
         'thousand', None, '400',
         'The expensive element of the three.'),
        ('Pieces of dead wood installed: ____________', None, '112',
         'At almost no cost, and this turned out to be the most '
         'effective element.'),
        ('Length of bank fenced: ____________ kilometres', None, 'two',
         'Out of the four kilometres of river covered by the scheme.'),
        ('Four years in, invertebrate recovery is about ____________ of '
         'what was expected', None, 'half',
         'And it had been forecast by year three.'),
        (
         'Dead wood has outperformed remeandering per pound by a '
         'factor of about', ['three', 'thirteen', 'thirty'], 2,
         'The speaker calls it the surprise of the scheme.',
         {0: 'Three is far below the factor the speaker gives.', 1: 'Thirteen is not the figure she quotes for the '
             'comparison.'}),
        ('Fencing has produced dense ____________ in places',
         None, 'scrub', 'Which shades water that two target plants need '
         'light in.'),
        ('The response is to cut half of it on a ____________',
         None, 'rotation',
         'Which creates a management obligation that will not end.'),
        ('Current funding runs for ____________ years', None, 'seven',
         'Against commitments the speaker describes as annual and '
         'permanent.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Three students discuss a conference abstract',
       task='A research group meeting · note completion and multiple choice',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Supervisor', 'The abstract deadline is the ninth. Who has '
         'written something?'),
        ('Ravindra', 'I have two hundred and eighty words. The limit is '
         'two hundred and fifty.'),
        ('Supervisor', 'Then thirty words have to go, and I can tell you '
         'where they are. Read me your first sentence.'),
        ('Ravindra', 'Recent years have seen growing interest in the '
         'effect of shift patterns on recovery time.'),
        ('Supervisor', 'That is nine words of nothing. Nobody has ever '
         'read an abstract and been told that recent years have seen '
         'growing interest. What did you find?'),
        ('Ravindra', 'That recovery time is longer after the second night '
         'shift than after the fourth.'),
        ('Supervisor', 'Then that is your first sentence. Anneliese, you '
         'are second author. What is the objection a reviewer will '
         'make?'),
        ('Anneliese', 'Sample size. We have thirty-one participants.'),
        ('Supervisor', 'So say thirty-one in the abstract. If you hide it, '
         'a reviewer finds it on page four and stops trusting the rest. '
         'Stated plainly in the abstract, it is a limitation; discovered, '
         'it is a concealment.'),
        ('Mateusz', 'Should we give the p-value in the abstract, or '
         'leave it for the paper?'),
        ('Supervisor', 'Give the effect size and the interval. A p-value '
         'in an abstract tells a reader whether you crossed a line, and '
         'the interval tells them how big the thing is and how sure you '
         'are, which is what they want to know.'),
        ('Anneliese', 'There is a conflict with the Strand paper, which '
         'found the opposite.'),
        ('Supervisor', 'Then that goes in the abstract too, in one clause. '
         'A reviewer who knows that paper and does not see it mentioned '
         'assumes you have not read it.'),
        ('Mateusz', 'And what about the title? We have written it as a '
         'question at the moment.'),
        ('Supervisor', 'A statement, not a question. Questions in titles '
         'are cited less often and the reason is simple: a title that '
         'states the finding can be quoted by somebody who has not read '
         'the paper, and that is how citations happen.'),
        ('Ravindra', 'Do we have to mention the funder anywhere in the '
         'abstract itself?'),
        ('Supervisor', 'In the declaration, not the abstract. And submit '
         'on the seventh, because the system goes down on deadline day '
         'every year, and the committee has never once extended it.')],
       items=[
        ('The abstract word limit is ____________', None, '250',
         'And Ravindra has written two hundred and eighty.'),
        ('The supervisor says the opening sentence is',
         ['too technical', 'nine words of nothing', 'too long'], 1,
         'Because nobody reads an abstract to be told interest is '
         'growing.',
         {0: 'The objection is not that the sentence is technical.', 2: 'Its length is not what the supervisor criticises.'}),
        ('Recovery is longer after the ____________ night shift',
         None, 'second', 'Than after the fourth, which is the finding.'),
        ('Number of participants: ____________', None, '31',
         'Which the supervisor says must appear in the abstract.'),
        ('Stated plainly it is a limitation; discovered it is a '
         '____________', None, 'concealment',
         'Which is the supervisor’s reason for stating it.'),
        ('Instead of a p-value the abstract should give the effect size '
         'and the ____________', None, 'interval',
         'Because that tells a reader how big the effect is.'),
        ('The conflicting paper should be mentioned in',
         ['a footnote', 'one clause of the abstract', 'the discussion only'],
         1,
         'A reviewer who knows it assumes otherwise that it was not '
         'read.',
         {0: 'A footnote is not available in an abstract.', 2: 'Leaving it to the discussion is what the supervisor '
             'warns against.'}),
        ('The title should be',
         ['a question', 'a statement', 'a single word'], 1,
         'Because a title that states the finding can be quoted by '
         'somebody who has not read the paper.',
         {0: 'A question cannot be quoted as a finding.', 2: 'A single word is not what the supervisor asks for.'}),
        ('The funder should be named in the ____________',
         None, 'declaration', 'Rather than in the abstract itself.'),
        ('The group should submit on the ____________', None, 'seventh',
         'Because the system fails on deadline day and no extension is '
         'ever given.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on why infrastructure projects run late',
       task='A lecture on project estimation · note completion',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write NO MORE '
             'THAN TWO WORDS AND/OR A NUMBER for each answer.',
       script=[
        ('Lecturer', 'I want to look at why large infrastructure '
         'projects overrun, because the pattern is so consistent across '
         'countries and decades that it needs a structural explanation '
         'rather than a list of excuses about particular schemes.'),
        ('Lecturer', 'The figures first. Across a database of some two '
         'thousand four hundred projects, the average cost overrun on '
         'rail is about forty-four per cent and on roads about twenty. '
         'Those figures have not improved since the nineteen-thirties, '
         'which is the single most important fact in the field, because '
         'it rules out explanations based on any particular '
         'technology.'),
        ('Lecturer', 'The first mechanism is optimism bias, which is '
         'well documented and which I think is the least interesting. '
         'People underestimate duration and cost systematically, and '
         'experienced people do it almost as much as inexperienced '
         'ones.'),
        ('Lecturer', 'The second is strategic misrepresentation, which is '
         'a polite phrase for a competition in which the lowest estimate '
         'wins the funding. If four promoters bid for one budget, the one '
         'whose figures are least realistic is selected, and nobody has '
         'lied: a selection process has chosen the most optimistic of '
         'four honest guesses. That mechanism explains why the overruns '
         'do not improve with experience.'),
        ('Lecturer', 'The third is scope change, and it is partly a '
         'consequence of duration. A project lasting eleven years will '
         'meet three governments, two changes of regulation and one '
         'recession, and each of those produces a change to what is being '
         'built. The original estimate was for a different object.'),
        ('Lecturer', 'The remedy with the best evidence behind it is '
         'reference class forecasting. Instead of estimating from the '
         'project’s own plan, you take the distribution of outcomes '
         'from similar completed projects and apply it. In the one '
         'jurisdiction that has required this by law since 2004, the '
         'overruns on new projects fell by about a third.'),
        ('Lecturer', 'The objection to it is instructive. Promoters say, '
         'correctly, that their project is different. Reference class '
         'forecasting replies that every project is different and that '
         'the distribution of differences is the thing being estimated, '
         'which is a statistical point that almost nobody accepts about '
         'their own work.'),
        ('Lecturer', 'A final warning about the figures themselves. The '
         'overrun is measured against the estimate at the point of '
         'funding approval, and that is a choice. Measured from the first '
         'published figure, which is usually earlier and lower, the '
         'overruns are considerably larger. Measured from the final '
         'business case, they are smaller. The number quoted in any '
         'particular argument tells you which baseline somebody '
         'chose.')],
       items=[
        ('Projects in the database: about ____________ thousand',
         None, 'two', 'Two thousand four hundred in total.'),
        ('Average cost overrun on rail: ____________ per cent',
         None, '44', 'Against about twenty on roads.'),
        ('The figures have not improved since the ____________',
         None, 'nineteen-thirties',
         'Which rules out explanations based on particular '
         'technologies.'),
        ('First mechanism: ____________ bias', None, 'optimism',
         'Which the lecturer calls the least interesting of the three.'),
        ('Second mechanism: strategic ____________',
         None, 'misrepresentation',
         'A polite phrase for a competition the lowest estimate wins.'),
        ('The selection process chooses the most ____________ of several '
         'honest guesses', None, 'optimistic',
         'Which explains why overruns do not improve with experience.'),
        ('Third mechanism: ____________ change', None, 'scope',
         'Partly a consequence of how long projects last.'),
        ('The remedy with the best evidence: ____________ class '
         'forecasting', None, 'reference',
         'Using the distribution of outcomes from similar completed '
         'projects.'),
        ('Required by law since ____________ in one jurisdiction',
         None, '2004', 'Where overruns on new projects fell by about a '
         'third.'),
        ('The overrun is measured against the estimate at ____________ '
         'approval', None, 'funding',
         'And the lecturer says the choice of baseline changes the '
         'figure.')]),
 ])
