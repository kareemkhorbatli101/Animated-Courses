# -*- coding: utf-8 -*-
"""Volume 1 second timed Reading paper: Academic, 3 passages, 40 questions.

The first paper measures. This one measures again, after the first has been
marked and every explanation read, which is the only way a timed paper can
show whether anything was learned from it.
"""

PAPER = dict(
 vol=1, level='B1', band='5.0', form='a',
 title='Reading Paper 2 · Academic',
 intro=(
   'One hour. Forty questions. Three passages, totalling about fifteen '
   'hundred words. Sit this one at least a week after the first paper, '
   'and only after you have read every explanation in the first key. A '
   'second paper sat the same afternoon measures your stamina and '
   'nothing else.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you begin. Those '
  'are the clock times by which each passage should be finished.',
  'Before you start, write down the two question types that cost you '
  'most marks on the first paper. Those are the ones to be slow and '
  'careful on here.',
  'Move on when your time is up, even in the middle of a question. '
  'Passage 3 carries as many marks as Passage 1.',
  'Answer every question, including the ones you are guessing. A blank '
  'is a mark given away and there is no penalty for being wrong.',
  'When you mark this paper, compare the two scores question type by '
  'question type rather than as two totals. A total tells you almost '
  'nothing you can act on.'],

 passages=[

  dict(no=1, first=1,
       heading='The shipping forecast',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, '
             'which are based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'Four times a day, a radio station in Britain reads out a weather '
        'report for the sea. It lasts about ten minutes, it covers thirty-one '
        'areas of water, and it has been broadcast in more or less the same '
        'form since 1924. Most of the people who listen to it are not at '
        'sea.',
        'The forecast is read in a fixed order, always starting in the '
        'north-east and moving clockwise round the coast. For each area it '
        'gives four things in the same sequence: the wind, then the weather, '
        'then the visibility, and finally the state of the sea. A listener '
        'who knows the order can write the whole thing down at speaking '
        'speed, because there is no sentence to follow and nothing is ever '
        'explained.',
        'The language is unusual. There are almost no verbs. A typical entry '
        'runs "south-west five to seven, rain then showers, moderate or '
        'poor". The wording is also strictly limited: the forecasters may '
        'use about four hundred words in total, and every one of them has a '
        'defined meaning. "Moderate" visibility is between two and five '
        'nautical miles, not a matter of opinion. "Imminent" means within '
        'six hours.',
        'The reason for the limit is the length of the broadcast. The whole '
        'forecast must fit inside a fixed slot, and the slot cannot be '
        'extended on a bad night, which is exactly when the forecast is '
        'needed most. Writers at the forecasting office therefore work to a '
        'word count, and on a stormy evening they have to describe thirty-one '
        'areas of dangerous water in fewer words than this paragraph '
        'contains.',
        'Fishermen who use it describe it as reliable rather than detailed. '
        'A boat twenty miles out does not need to know the wind on any '
        'particular wave; it needs to know whether the wind will reach a '
        'strength at which it should turn for home, and roughly when. The '
        'forecast is built for that decision and for no other, which is why '
        'it is so short.',
        'Its other audience is harder to explain. Surveys of listeners '
        'repeatedly find that most of them have never been on a boat. The '
        'names of the sea areas, read slowly in the same order every night, '
        'have become something people listen to in order to go to sleep. '
        'When the broadcaster once proposed moving the late forecast by '
        'twelve minutes, it received thousands of complaints, almost none of '
        'them from sailors.',
        'The forecast has survived every technology that should have replaced '
        'it. A modern boat can download a detailed chart in seconds. The '
        'radio version continues because it needs no equipment, no signal '
        'and no power beyond a battery, and because a crew that has lost '
        'everything electrical can still hear it. It is kept, in other '
        'words, for the night when nothing else works.'],
       items=[
        ('How many areas of water does the forecast cover?',
         ['twenty-four', 'four hundred', 'thirty-one', 'thirty-one hundred'],
         2, 'Paragraph 1 gives the figure, and paragraph 4 repeats it.',
         {0: 'Twenty-four is not the number of sea areas.', 1: 'Four hundred is the size of the vocabulary.', 3: 'Thirty-one hundred is a hundred times the figure.'}),
        ('In what year did the forecast take its present form?',
         None, '1924',
         'Paragraph 1 says it has been broadcast in more or less the same '
         'form since then.'),
        (
         'The four items for each area are always given in the same '
         'order.', ['True', 'False', 'Not Given'], 0,
         'Paragraph 2 lists wind, weather, visibility and sea state in '
         'that sequence.',
         {1: 'Paragraph 2 gives the four items in a fixed sequence '
             'every time.', 2: 'The order is stated in paragraph 2, so it is not left '
             'out.'}),
        ('The forecast begins in the south and moves anticlockwise.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 2 says it starts in the north-east and moves '
         'clockwise.',
         {0: 'Paragraph 2 says the opposite: north-east, and '
             'clockwise.', 2: 'Both the starting point and the direction are given.'}),
        ('Listeners are told the reason for each forecast.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 2 says nothing is ever explained.',
         {0: 'Paragraph 2 says nothing is ever explained to listeners.', 2: 'The passage states the absence of explanation directly.'}),
        ('Approximately how many words may the forecasters use?',
         None, 'four hundred',
         'Paragraph 3 gives the limit on the whole vocabulary.'),
        ('What does the word "imminent" mean in the forecast?',
         ['within one hour', 'within a day', 'within six hours', 'at any time'],
         2,
         'Paragraph 3 gives the defined meaning, which is not the '
         'ordinary one.',
         {0: 'One hour is shorter than the defined period.', 1: 'A day is four times the defined period.', 3: 'The word has a defined period, not an open one.'}),
        ('Why is the vocabulary limited?',
         ['to make it sound official', 'because listeners complained', 'to save the forecasters work', 'to fit a fixed broadcast slot'],
         3,
         'Paragraph 4 gives the length of the broadcast as the reason.',
         {0: 'Sounding official is not the reason given.', 1: 'Complaints came about the timing, not the words.', 2: 'The limit makes the writing harder, not easier.'}),
        ('A fisherman mainly wants to know whether to ____________ for '
         'home.', None, 'turn',
         'Paragraph 5 describes the one decision the forecast is built '
         'for.'),
        ('Most listeners to the forecast have been to sea.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 6 says surveys find most have never been on a '
         'boat.',
         {0: 'Surveys in paragraph 6 find most listeners have never '
             'been on a boat.', 2: 'Paragraph 6 reports what the surveys found, so this is '
             'stated.'}),
        ('What did the broadcaster once propose?',
         ['ending the forecast', 'moving it by twelve minutes', 'reading it faster', 'adding more sea areas'],
         1,
         'Paragraph 6 reports the proposal and the complaints it '
         'produced.',
         {0: 'No proposal to end the forecast is reported.', 2: 'Reading speed is not what was proposed.', 3: 'No extra sea areas were proposed.'}),
        ('The complaints about the proposal came mainly from sailors.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 6 says almost none of them were from sailors.',
         {0: 'Paragraph 6 says almost none of the complaints came from '
             'sailors.', 2: 'The source of the complaints is given in paragraph 6.'}),
        ('The forecast is kept because it works when nothing else '
         '____________.', None, 'works',
         'The last sentence of the passage states the reason for keeping '
         'it.')]),

  dict(no=2, first=14,
       heading='Why maps put north at the top',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, '
             'which are based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'Almost every map printed today has north at the top. There is no '
        'reason in nature for this. The earth has no top, and a photograph '
        'taken from above the South Pole is not upside down. The habit is '
        'about five hundred years old, and like most habits it was never '
        'decided.',
        'Maps from earlier periods point in all directions. Medieval '
        'European maps usually put east at the top, because that was the '
        'direction of the places their makers thought most important. Several '
        'Arabic maps of the same centuries put south at the top. Chinese maps '
        'commonly faced south as well, which is why the Chinese compass was '
        'described as a south-pointing needle rather than a north-pointing '
        'one.',
        'Two things changed it. The first was the magnetic compass, which '
        'arrived in Europe in the twelfth century and gave sailors a line '
        'they could rely on. The needle pointed roughly north, and a chart '
        'drawn with that line up the page was easier to use at sea. The '
        'second was the printing press. Once maps were printed rather than '
        'drawn one at a time, a single orientation became much cheaper than '
        'several, and the orientation that was printed was the one the '
        'biggest publishers used.',
        'Those publishers were in northern Europe, and this is where the '
        'explanation becomes less comfortable. The mapmakers of the '
        'sixteenth century worked in Flanders, the Netherlands and Germany, '
        'and the lands they knew best sat in the upper half of a '
        'north-at-the-top map. It is difficult to show that anybody chose '
        'the orientation for that reason. It is equally difficult to believe '
        'it made no difference.',
        'The arrangement has consequences that are easy to miss. On a '
        'north-up map, moving north is drawn as moving up, and up carries '
        'meaning in almost every language. Studies of schoolchildren find '
        'that they reliably describe northern countries as above southern '
        'ones, and a surprising number also describe them as more '
        'developed. The map is not making the claim. It is providing a '
        'picture that the claim fits into.',
        'Attempts to change it have not gone well. A map with south at the '
        'top was published in Australia in the nineteen-seventies and sells '
        'steadily as a novelty. Several schools have used it to make exactly '
        'the point of the previous paragraph, and report that pupils find it '
        'genuinely difficult to read for the first ten minutes, which is '
        'itself the lesson.',
        'What the history shows is not that north-up is wrong. A shared '
        'orientation is extremely useful, and any shared one would do. It '
        'shows that a convention which everybody treats as a fact about the '
        'world is a fact about printing, trade and where the presses '
        'happened to be, and that such conventions are the hardest kind to '
        'notice.'],
       items=[
        ('How old is the habit of putting north at the top?',
         ['about one hundred years', 'about five hundred years', 'about a thousand years', 'nobody knows'],
         1, 'Paragraph 1 gives the approximate age of the convention.',
         {0: 'A hundred years is far too recent for the habit.', 2: 'A thousand years predates the convention.', 3: 'Paragraph 1 does give an approximate age.'}),
        ('Medieval European maps usually put which direction at the top?',
         None, 'east',
         'Paragraph 2 gives the direction and the reason for it.'),
        ('The Chinese compass was described as pointing which way?',
         None, 'south',
         'Paragraph 2 explains the name in terms of map orientation.'),
        ('The compass reached Europe in the twelfth century.',
         ['True', 'False', 'Not Given'], 0,
         'Paragraph 3 gives the century of its arrival.',
         {1: 'Paragraph 3 names the twelfth century as when it '
             'arrived.', 2: 'The century is stated, so this is not left out of the '
             'passage.'}),
        ('Printing made several orientations cheaper than one.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 3 says a single orientation became much cheaper '
         'than several.',
         {0: 'Paragraph 3 says one orientation became cheaper than '
             'several.', 2: 'The comparison of costs is made directly in paragraph 3.'}),
        ('The writer proves that publishers chose north deliberately.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 4 says it is difficult to show that anybody chose '
         'it for that reason.',
         {0: 'Paragraph 4 says the deliberate choice is hard to '
             'demonstrate.', 2: 'The writer discusses the difficulty, so the point is '
             'addressed.'}),
        ('Where were the leading sixteenth-century mapmakers based?',
         ['southern Europe', 'China', 'the Arab world', 'northern Europe'],
         3, 'Paragraph 4 names Flanders, the Netherlands and Germany.',
         {0: 'Southern Europe is not where paragraph 4 places them.', 1: 'Chinese maps faced south, in an earlier period.', 2: 'Arabic maps put south at the top, in earlier centuries.'}),
        ('What do studies of schoolchildren find?',
         ['that they cannot read maps', 'that they describe northern countries as above southern ones', 'that they prefer south-up maps', 'that they ignore orientation'],
         1,
         'Paragraph 5 reports the finding and the further one about '
         'development.',
         {0: 'The children can read maps; the finding is about '
             'description.', 2: 'No preference for south-up maps is reported.', 3: 'They attend to orientation, which is the point.'}),
        ('According to paragraph 5, the map provides a ____________ that '
         'the claim fits into.', None, 'picture',
         'The last sentence of paragraph 5 makes the distinction between '
         'claiming and picturing.'),
        ('Where was a south-at-the-top map published in the '
         'nineteen-seventies?', None, 'Australia',
         'Paragraph 6 names the country and says the map still sells.'),
        ('Pupils find the south-up map easy to read immediately.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 6 says they find it genuinely difficult for the '
         'first ten minutes.',
         {0: 'Paragraph 6 says they find it difficult for the first '
             'ten minutes.', 2: 'The ten minutes of difficulty are described in paragraph '
             '6.'}),
        ('What does the writer conclude?',
         ['north-up is wrong', 'any shared orientation would do', 'maps should be banned from schools', 'the convention will soon change'],
         1,
         'Paragraph 7 says a shared orientation is useful and any '
         'shared one would do.',
         {0: 'Paragraph 7 says north-up is not wrong.', 2: 'Nothing is said about banning maps from schools.', 3: 'He expects the convention to be hard to notice, not to '
             'change.'}),
        ('The writer says such conventions are the hardest kind to '
         '____________.', None, 'notice',
         'The final word of the passage completes the argument.')]),

  dict(no=3, first=27,
       heading='The windows of the Comet',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, '
             'which are based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'The windows on an aeroplane are rounded at the corners. Passengers '
        'rarely wonder why, and the answer is that in 1954 two aircraft came '
        'apart in the air and the investigation took three years.',
        'The aircraft was the de Havilland Comet, the first jet airliner in '
        'the world. It carried passengers from 1952, it flew twice as fast '
        'as anything else and it was a British success story. In January '
        '1954 one broke up shortly after leaving Rome. The fleet was '
        'grounded, inspected and returned to service. In April another broke '
        'up on almost the same route.',
        'The second accident ended the argument that the first had been bad '
        'luck. The whole fleet was grounded for good, and the government '
        'ordered an investigation with powers nobody had used before. Pieces '
        'of the first aircraft were recovered from the sea bed and laid out '
        'on a wooden frame the shape of the aeroplane.',
        'The investigators did something that had not been done at that '
        'scale. They took a complete Comet, put it inside a tank of water, '
        'and pumped the cabin up and down to imitate thousands of flights. '
        'Water was used because air at that pressure would have destroyed the '
        'building if the structure failed. After the equivalent of about three '
        'thousand flights the hull tore open.',
        'The tear began at the corner of a window. The cabin of a jet is '
        'pressurised, so every flight stretches the metal slightly and every '
        'landing lets it relax. A square corner concentrates that stress into '
        'a very small area, and metal that is stretched and relaxed at the '
        'same point will eventually crack, even at loads far below the ones '
        'it was designed to take. The phenomenon had a name, metal fatigue, '
        'and it was understood. What was not understood was how little '
        'stress was needed.',
        'There was a second finding, and it was about process rather than '
        'physics. The windows had been fastened with rivets driven through '
        'holes that were punched rather than drilled, and punching left tiny '
        'cracks around each hole. In the test aircraft, the tear ran from '
        'one of them. Neither the design nor the manufacturing method was '
        'thought unusual at the time.',
        'The results changed aircraft everywhere, and not only the windows. '
        'Rounded openings became standard, holes were drilled, and testing a '
        'structure for fatigue over a simulated lifetime became a legal '
        'requirement rather than an option. Aircraft built after 1960 are '
        'designed on the assumption that cracks will appear and must be '
        'found, which is a different assumption from the one the Comet was '
        'built on.',
        'The company did not recover. A later Comet flew safely for years, '
        'and by then American manufacturers had aircraft of their own and the '
        'market had moved. The engineers who ran the water tank, however, '
        'produced something more valuable than an aeroplane. Every passenger '
        'on every flight since has been carried inside the conclusions of '
        'that investigation, and almost none of them have heard of it.'],
       items=[
        ('In which year did the two accidents happen?',
         None, '1954',
         'Paragraph 1 gives the year and paragraph 2 gives the two '
         'months.'),
        ('What was the Comet?',
         ['the first jet airliner', 'a military aircraft', 'a type of window', 'an American aeroplane'],
         0,
         'Paragraph 2 describes it as the first jet airliner in the '
         'world.',
         {1: 'It carried passengers from 1952, not troops.', 2: 'The windows are a part of it, not the aircraft itself.', 3: 'It was a British aircraft, built by de Havilland.'}),
        ('The fleet returned to service after the first accident.',
         ['True', 'False', 'Not Given'], 0,
         'Paragraph 2 says it was grounded, inspected and returned to '
         'service.',
         {1: 'Paragraph 2 says the fleet was inspected and returned to '
             'service.', 2: 'The return to service is stated in paragraph 2.'}),
        (
         'The second accident happened on a different route from the '
         'first.', ['True', 'False', 'Not Given'], 1,
         'Paragraph 2 says it was almost the same route.',
         {0: 'Paragraph 2 says it was almost the same route as the '
             'first.', 2: 'The route of the second accident is given in paragraph '
             '2.'}),
        ('What were the recovered pieces laid out on?',
         None, 'a wooden frame',
         'Paragraph 3 describes the frame shaped like the aeroplane.'),
        ('Why was water used in the test tank?',
         ['it was cheaper', 'it imitated rain', 'air would have destroyed the building', 'the aircraft had been in the sea'],
         2, 'Paragraph 4 gives the reason and the pressure involved.',
         {0: 'Cost is not the reason paragraph 4 gives.', 1: 'Rain is not what the tank imitated.', 3: 'Sea recovery applied to the wreckage, not the test.'}),
        ('After the equivalent of how many flights did the hull tear?',
         ['three hundred', 'three thousand', 'thirty thousand', 'three million'],
         1,
         'Paragraph 4 gives the figure at which the test structure '
         'failed.',
         {0: 'Three hundred is a tenth of the figure given.', 2: 'Thirty thousand is ten times the figure given.', 3: 'Three million is far beyond any test figure.'}),
        ('Where did the tear begin?',
         None, 'a window corner',
         'Paragraph 5 identifies the starting point, which is the reason '
         'for rounded windows.'),
        ('Metal fatigue was unknown before the investigation.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 5 says the phenomenon had a name and was '
         'understood.',
         {0: 'Paragraph 5 says the phenomenon already had a name.', 2: 'What was known beforehand is stated in paragraph 5.'}),
        ('What had not been understood?',
         ['that metal could crack', 'that cabins were pressurised', 'how rivets worked', 'how little stress was needed'],
         3,
         'The last sentence of paragraph 5 states exactly what was '
         'new.',
         {0: 'Metal fatigue was already understood by name.', 1: 'Pressurisation was known and designed for.', 2: 'Rivets were understood; the punched holes were not '
             'unusual.'}),
        ('How had the rivet holes been made?',
         None, 'punched',
         'Paragraph 6 contrasts punching with drilling and explains what '
         'punching left behind.'),
        (
         'The manufacturing method was considered unusual at the time.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 6 says neither the design nor the method was '
         'thought unusual.',
         {0: 'Paragraph 6 says neither the design nor the method was '
             'unusual.', 2: 'Paragraph 6 addresses how the method was regarded at the '
             'time.'}),
        ('Aircraft built after 1960 assume that cracks will ____________.',
         None, 'appear',
         'Paragraph 7 states the changed design assumption.'),
        ('What does the writer say the engineers produced?',
         ['a successful aeroplane', 'something more valuable than an aeroplane', 'a new company', 'a legal case'],
         1,
         'The final paragraph makes the contrast between the aircraft '
         'and the conclusions.',
         {0: 'A later Comet flew safely but came too late.', 2: 'No new company came out of the investigation.', 3: 'No legal case is described in the passage.'})]),
 ])
