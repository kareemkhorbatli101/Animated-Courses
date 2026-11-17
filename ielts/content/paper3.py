# -*- coding: utf-8 -*-
"""Volume 3 timed Reading paper: Academic, 3 passages, 40 questions, 60 min."""

PAPER = dict(
 vol=3, level='B1+', band='6.0',
 title='Reading Paper · Academic',
 intro=(
   'One hour. Forty questions. Three passages of increasing difficulty, '
   'totalling a little over two thousand words. There is no extra time for '
   'transferring answers on the computer-delivered test: whatever is '
   'recorded at sixty minutes is your score.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you start. Those are '
  'the clock times by which each passage should be finished.',
  'Use the loop on every passage: thirty seconds on the title and first '
  'paragraph, two minutes loading the questions, then one paragraph at a '
  'time, underlining and moving on.',
  'The real arithmetic is about fifty seconds a question, not ninety. '
  'Eighteen minutes of this hour is reading and seven is orienting.',
  'A question you cannot close after reading its paragraph gets a mark in '
  'the margin and nothing else. Come back at the end.',
  'Answer every question. There is no penalty for a wrong answer, and a '
  'blank at minute fifty-nine is a mark given away.'],

 passages=[

  dict(no=1, first=1,
       heading='How the railways invented the time',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, which are '
             'based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'For most of human history every town kept its own time. Noon was '
        'the moment the sun stood highest over that particular place, and '
        'since the sun reaches its highest point four minutes later for '
        'every degree of longitude travelled westwards, a town fifty miles '
        'west of another was genuinely a few minutes behind it. Nobody was '
        'inconvenienced by this, because nobody could travel fast enough for '
        'the difference to matter.',
        'A coach covering fifty miles took the better part of a day. A '
        'traveller arriving in a town whose clocks differed by four minutes '
        'from the clocks at home had no way of noticing and no reason to '
        'care. Local time was not a quaint custom; it was the only kind of '
        'time that could be measured, since the measurement was made by '
        'looking at the sun.',
        'The railway destroyed this arrangement within about twenty years. A '
        'train could cover fifty miles in an hour, which meant that a '
        'timetable had to say what time the train left and what time it '
        'arrived, and those two statements were now being made in different '
        'time systems. Early railway timetables in Britain carried footnotes '
        'explaining that times at certain stations were four, seven or '
        'eleven minutes behind those at the terminus.',
        'This was more than an inconvenience. Two trains running towards '
        'each other on a single line were kept apart by a timetable, and a '
        'timetable interpreted in two different versions of the hour is not '
        'a safety system. Several collisions in the 1840s were attributed, '
        'at least in part, to confusion of this kind, and the companies '
        'responded by imposing a single time of their own.',
        'That time was the one kept at the company headquarters, and in '
        'Britain it was the time at Greenwich, distributed along the railway '
        'telegraph. By 1855 the great majority of public clocks in Britain '
        'showed railway time rather than local time, although the change was '
        'not legally recognised for another twenty-five years, and in the '
        'interval some town clocks carried two minute hands.',
        'Resistance was real and is usually misremembered as simple '
        'conservatism. Local time was not merely familiar; it was correct, '
        'in the sense that noon in a town was observably the moment the sun '
        'was highest there. Railway time required people to accept that '
        'their clocks would disagree with the sky, which is a considerable '
        'thing to ask on the authority of a railway company.',
        'The same process happened across the world over the following '
        'thirty years, and in most countries it was driven by railways '
        'rather than by governments. The United States, with a continental '
        'width and dozens of competing companies, had reached a position by '
        '1880 in which a single journey might involve several company times '
        'and no agreed way of relating them. The railroads themselves '
        'divided the country into four zones in 1883, a year before any '
        'international conference discussed the question.',
        'The international settlement, when it came, was an agreement about '
        'where to start counting rather than about how to tell the time. A '
        'conference in Washington in 1884 adopted the meridian through '
        'Greenwich as the point from which longitude and time would be '
        'measured, a decision reached on the practical ground that a large '
        'majority of the world’s shipping already used charts based on it.',
        'What remained, and remains, is the awkwardness the railways could '
        'not remove. Zones are an hour wide and the earth does not divide '
        'into neat hours, so the boundaries were drawn around rivers, '
        'borders and convenience rather than around longitude. Some zones '
        'are half an hour out of step with their neighbours, several '
        'countries that span four zones operate on one, and the result is a '
        'map that reflects administrative history rather than astronomy.',
        'It is worth noticing what was actually given up. Before the '
        'railways, time was a local measurement of a real phenomenon. '
        'Afterwards it became a convention agreed between distant parties '
        'for the coordination of movement, which is what it has been ever '
        'since. The change was not a technical improvement in clocks. It was '
        'a decision that being in step with other places mattered more than '
        'being in step with the sun.'],
       items=[
        ('Before the railways, noon in a town was',
         ['set by the government', 'the moment the sun was highest there',
          'the same everywhere', 'kept by the church'], 1,
         'Paragraph 1, which is why local time was the only measurable '
         'kind.'),
        ('Why did nobody mind local time before the railways?',
         ['Clocks were rare', 'Nobody could travel fast enough for the '
          'difference to matter', 'The differences were tiny',
          'Travel was forbidden'], 1,
         'Paragraph 1 and 2: a coach took most of a day to cover fifty '
         'miles.'),
        ('What made railway timetables confusing?',
         ['Trains were late', 'Departure and arrival were stated in '
          'different time systems', 'Clocks were inaccurate',
          'Passengers could not read'], 1,
         'Paragraph 3, which is why early timetables carried footnotes.'),
        ('The writer says a timetable in two versions of the hour is not',
         ['a legal document', 'a safety system', 'a commercial document',
          'readable'], 1,
         'Paragraph 4, where collisions in the 1840s are partly attributed '
         'to this.'),
        ('Railway time in Britain was distributed by',
         ['post', 'the telegraph', 'printed notices', 'ships'], 1,
         'Paragraph 5, carrying the time kept at Greenwich.'),
        ('The writer says resistance to railway time is usually '
         'misremembered as',
         ['political', 'simple conservatism', 'religious',
          'commercial'], 1,
         'Paragraph 6, because local time was in a real sense correct.'),
        ('In the United States, the four zones were created by',
         ['Congress', 'the railroads', 'an international conference',
          'the states'], 1,
         'Paragraph 7, in 1883, a year before any international '
         'conference.'),
        ('The 1884 conference chose the Greenwich meridian because',
         ['Britain insisted', 'most of the world’s shipping already used '
          'charts based on it', 'it was the oldest',
          'it was geographically central'], 1,
         'Paragraph 8, which the writer calls a practical ground.'),
        ('Time zone boundaries follow',
         ['lines of longitude exactly', 'rivers, borders and convenience',
          'ocean currents', 'population density'], 1,
         'Paragraph 9, producing a map reflecting administrative history.'),
        ('The gap between railway time and legal recognition in Britain was '
         'about ____________ years.', None, 'twenty-five',
         'Paragraph 5, during which some town clocks had two minute '
         'hands.'),
        ('The sun reaches its highest point four minutes later for every '
         '____________ of longitude travelled west.', None, 'degree',
         'Paragraph 1, which is why a town fifty miles west was genuinely '
         'behind.'),
        ('Railway time required people to accept that their clocks would '
         'disagree with the ____________.', None, 'sky',
         'Paragraph 6, on the authority of a railway company.'),
        ('The writer says time became a ____________ agreed between distant '
         'parties.', None, 'convention',
         'The final paragraph, replacing a local measurement of a real '
         'phenomenon.')]),

  dict(no=2, first=14,
       heading='Where a city puts its trees',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, which '
             'are based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'Street trees are among the few pieces of public infrastructure that '
        'almost nobody objects to in principle and a great many people '
        'object to outside their own house. They cool the air, intercept '
        'rain, absorb some pollution and are consistently associated with '
        'higher property values, and they also drop leaves, lift paving, '
        'block light and occasionally damage drains. How a city resolves '
        'that tension determines where its trees end up, and the answer is '
        'rarely where the benefits would be greatest.',
        'The cooling effect is the best measured of the benefits and the '
        'most unevenly distributed. A mature street tree reduces the '
        'temperature beneath it by several degrees on a hot day, partly by '
        'shade and partly by releasing water vapour. Measurements in '
        'European and North American cities find differences of up to eight '
        'degrees between a well-planted street and a bare one two hundred '
        'metres away, on the same afternoon with the same weather.',
        'That figure explains why tree planting has moved from being a '
        'matter of amenity to a matter of public health. Heat is the most '
        'lethal weather in most temperate countries, deaths during heatwaves '
        'fall most heavily on elderly people living alone in upper-floor '
        'flats, and the streets where such flats predominate are reliably '
        'the streets with fewest trees. The distribution of canopy within a '
        'city generally follows the distribution of income more closely than '
        'it follows any plan.',
        'There are four ordinary reasons for that pattern and none of them '
        'is a policy of neglect. The first is width: planting requires '
        'pavement, and the narrow streets of densely built areas often '
        'cannot accommodate a pit of the size a tree needs. The second is '
        'what is underneath. Gas, water, electricity and telecommunications '
        'cables run beneath pavements, and a street rebuilt several times is '
        'often full enough to leave no legal space for a root system.',
        'The third reason is tenure. Street trees are planted and maintained '
        'by an authority, but the request that brings a planting team to a '
        'particular street almost always comes from residents, and requests '
        'arrive disproportionately from streets of owner-occupiers who '
        'expect to be there in fifteen years. Where housing turnover is '
        'rapid, nobody asks, and a request-driven programme is therefore a '
        'programme that plants where it is already greenest.',
        'The fourth is maintenance cost, which is where most tree programmes '
        'actually fail. A newly planted street tree needs watering through '
        'at least two summers and ideally four, and a tree that is not '
        'watered in its second year dies at a rate of about one in three. '
        'The planting is a visible expenditure with a ceremony attached; the '
        'watering is an invisible one with no ceremony, and it is the line '
        'that is cut when a budget is reduced.',
        'The consequence is a pattern familiar to anybody who has looked at '
        'a city’s planting records. Large numbers of trees are planted in '
        'announcement years, a substantial fraction of them die within four '
        'years, and the net increase in canopy is a small fraction of the '
        'number planted. Several cities that have published both figures '
        'report net gains of under a third of what was put in the ground.',
        'The remedies are known and are unglamorous. Planting fewer trees '
        'with a funded maintenance commitment produces more canopy in ten '
        'years than planting many without one. Species choice matters more '
        'than quantity, because a tree suited to a hot, compacted, '
        'salt-affected street survives without heroic intervention. And '
        'planting into the streets that need it rather than the streets that '
        'ask for it requires replacing a request system with a heat map, '
        'which is a straightforward change that almost no city has made.',
        'There is one argument against street trees that deserves a serious '
        'answer, since it is usually dismissed. In some narrow streets a '
        'continuous canopy traps air at street level, and pollution from '
        'traffic can accumulate beneath it rather than dispersing. The '
        'effect is real, it has been measured in street canyons with '
        'buildings taller than the street is wide, and it means that the '
        'correct planting pattern in such a street is broken rather than '
        'continuous, with gaps that allow air to move.',
        'That qualification is a good illustration of the general point. The '
        'benefits of urban trees are substantial, well established and '
        'specific to circumstances, and the decisions that determine whether '
        'a city obtains them are mostly not decisions about trees. They are '
        'decisions about pavement widths, utility records, maintenance '
        'budgets and who is entitled to ask for things, which is why an '
        'ambitious planting target can be met in full and change very '
        'little.'],
       items=[
        ('The writer says street trees are objected to',
         ['in principle by most people', 'outside people’s own houses',
          'only by councils', 'only on narrow streets'], 1,
         'Paragraph 1, which is the tension the passage is about.'),
        ('Measurements find temperature differences of up to',
         ['three degrees', 'five degrees', 'eight degrees',
          'twelve degrees'], 2,
         'Paragraph 2, between a planted and a bare street two hundred '
         'metres apart.'),
        ('Deaths during heatwaves fall most heavily on',
         ['young children', 'elderly people in upper-floor flats',
          'outdoor workers', 'drivers'], 1,
         'Paragraph 3, on the streets that reliably have fewest trees.'),
        ('Which reason for the pattern concerns what lies beneath '
         'pavements?',
         ['The first', 'The second', 'The third', 'The fourth'], 1,
         'Paragraph 4: utilities often leave no legal space for roots.'),
        ('A request-driven planting programme tends to plant',
         ['where need is greatest', 'where it is already greenest',
          'at random', 'in parks'], 1,
         'Paragraph 5, because requests come from stable '
         'owner-occupied streets.'),
        ('The writer says most tree programmes actually fail because of',
         ['planting costs', 'maintenance cost', 'species choice',
          'public opposition'], 1,
         'Paragraph 6, where watering is the line cut from a reduced '
         'budget.'),
        ('Cities publishing both figures report net canopy gains of',
         ['almost all that was planted', 'about two thirds',
          'under a third', 'nothing at all'], 2,
         'Paragraph 7, after deaths within four years of planting.'),
        ('The writer takes seriously the argument that a continuous canopy '
         'can', ['damage drains', 'trap pollution at street level',
          'reduce property values', 'use too much water'], 1,
         'Paragraph 9, measured in street canyons taller than they are '
         'wide.'),
        ('In such a street the correct planting pattern is',
         ['continuous', 'broken, with gaps', 'on one side only',
          'none at all'], 1,
         'Paragraph 9, so that air can move.'),
        ('An unwatered tree in its second year dies at a rate of about one '
         'in ____________.', None, 'three',
         'Paragraph 6, which is why watering matters more than planting.'),
        ('The distribution of canopy follows the distribution of '
         '____________ more closely than any plan.', None, 'income',
         'Paragraph 3, which is the passage’s central observation.'),
        ('The writer says a request system should be replaced with a '
         '____________ map.', None, 'heat',
         'Paragraph 8, a change almost no city has made.'),
        ('The writer concludes that the decisive decisions are mostly not '
         'about trees but about pavement widths, utility records, budgets '
         'and who is entitled to ____________.', None, 'ask',
         'The final paragraph, which is why a target can be met and change '
         'little.')]),

  dict(no=3, first=27,
       heading='Measuring something that may not be one thing',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, which '
             'are based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'Governments have measured national income for about eighty years '
        'and have measured national wellbeing, in some form, for about '
        'twenty. The second project has produced a great deal of data, '
        'considerable public interest and an unresolved argument about what '
        'is being measured, and the argument is more interesting than either '
        'side usually allows.',
        'The standard instrument is a single question: on a scale of nought '
        'to ten, how satisfied are you with your life nowadays? It is asked '
        'of large representative samples, it is cheap, and it produces '
        'results that are stable over time and sensitive to events in ways '
        'that look reasonable. Unemployment lowers the average, bereavement '
        'lowers it sharply and temporarily, and long-term illness lowers it '
        'persistently.',
        'Those patterns are the strongest argument for the measure. A '
        'question that moved randomly, or that failed to register '
        'unemployment, could be dismissed. One that responds to '
        'circumstances in the directions almost everybody would predict is '
        'measuring something, and the burden shifts to the critic to say '
        'what.',
        'The first objection is about the scale. There is no reason to '
        'believe that the distance between four and five means the same '
        'thing as the distance between eight and nine, or that two people '
        'giving the same number are reporting the same state. The numbers '
        'are treated as though they can be averaged, and averaging requires '
        'an assumption about equal intervals that nothing in the data '
        'establishes.',
        'Defenders reply that this objection, while correct, is less '
        'damaging than it appears. Comparisons between groups are not '
        'invalidated by an unknown scale if the scale is used similarly by '
        'both groups, and much of the useful work consists of comparisons '
        'rather than levels. The claim that unemployment reduces '
        'satisfaction survives any reasonable transformation of the numbers, '
        'which is a stronger defence than it sounds.',
        'The second objection is harder and is about adaptation. People '
        'report returning towards their previous level of satisfaction after '
        'events that have not been reversed, including some severe '
        'disabilities. This is well documented and is read in two opposite '
        'ways: as evidence that the measure captures something admirable '
        'about human resilience, or as evidence that it fails to capture '
        'loss, since a person whose circumstances have permanently worsened '
        'reports as before.',
        'The dispute cannot be settled by more data, because the two '
        'readings are not disagreeing about what people report. They are '
        'disagreeing about whether a measure of wellbeing should track what '
        'people have or how they feel about what they have, and that is a '
        'question about the purpose of the measurement rather than about its '
        'accuracy.',
        'A third objection concerns what the question leaves out, and it is '
        'the one that has produced the most useful response. Life '
        'satisfaction is an evaluation, made in the moment of being asked, '
        'and it correlates imperfectly with the quality of experience as '
        'people live through it. Asking people how they felt during each '
        'activity of the previous day produces a different and sometimes '
        'contradictory picture: time spent caring for children, for example, '
        'is rated highly in evaluation and moderately in experience.',
        'The response has been to measure several things rather than one. '
        'Most national surveys now ask about satisfaction, about happiness '
        'yesterday, about anxiety yesterday and about whether life feels '
        'worthwhile, on the reasoning that these come apart in ways worth '
        'knowing. Treating wellbeing as four measures that disagree is more '
        'honest than treating it as one that does not, and it is also '
        'harder to use.',
        'That difficulty is the real reason the project has had less policy '
        'influence than its advocates expected. A minister can be given a '
        'single figure for national income and act on it. A minister given '
        'four figures that move in different directions is being given a '
        'research finding rather than an instruction, and the pressure to '
        'collapse the four into one comes from the people who have to '
        'decide, not from the people who measure.',
        'Where the measures have been used, they have been used best for a '
        'purpose their designers did not emphasise: comparing policies '
        'whose costs are known and whose benefits are not. Whether to spend '
        'on mental health provision or on road improvements is not answered '
        'by national income figures at all, and wellbeing data, for all its '
        'difficulties, at least addresses the question. The measure is a '
        'poor summary of a nation and a useful instrument for a choice, '
        'which is nearly the opposite of how it was originally sold.'],
       items=[
        ('The standard instrument for measuring wellbeing is',
         ['a long interview', 'a single question on a nought-to-ten scale',
          'an index of income', 'a diary'], 1,
         'Paragraph 2, asked of large representative samples.'),
        ('The strongest argument for the measure, according to the writer, '
         'is that it', ['is cheap', 'responds to circumstances as almost '
          'everybody would predict', 'is widely used',
          'is easy to understand'], 1,
         'Paragraph 3, which shifts the burden to the critic.'),
        ('The first objection concerns',
         ['sample size', 'the assumption of equal intervals on the scale',
          'the wording of the question', 'the cost'], 1,
         'Paragraph 4, which averaging requires and nothing establishes.'),
        ('How do defenders answer that objection?',
         ['They deny it', 'They argue comparisons survive an unknown scale',
          'They change the question', 'They use larger samples'], 1,
         'Paragraph 5, if both groups use the scale similarly.'),
        ('The second objection concerns',
         ['adaptation', 'sampling', 'translation', 'timing'], 0,
         'Paragraph 6: people return towards previous levels after '
         'unreversed events.'),
        ('The writer says the dispute about adaptation cannot be settled by',
         ['argument', 'more data', 'better questions', 'larger samples'], 1,
         'Paragraph 7, because the two readings agree about what people '
         'report.'),
        ('Which paragraph distinguishes evaluation from experience?',
         ['Paragraph 6', 'Paragraph 7', 'Paragraph 8', 'Paragraph 9'], 2,
         'Where caring for children is rated differently on the two '
         'measures.'),
        (
         'The writer believes the single life-satisfaction question is '
         'worthless.', ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 3 and the conclusion treat it as measuring '
         'something real.',
         {0: 'Yes would need worthlessness; paragraph 3 treats it as '
             'measuring something real.', 2: 'Not Given is wrong because the measure is rated.'}),
        (
         'The writer believes the adaptation finding settles whether '
         'the measure is adequate.',
         ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 7 says the question is about purpose rather than '
         'accuracy.',
         {0: 'Yes would need a settlement; paragraph 7 makes it a '
             'question of purpose.', 2: 'Not Given is wrong because adaptation is interpreted.'}),
        (
         'The writer believes wellbeing data is more useful for '
         'comparing policies than for summarising a nation.',
         ['Yes', 'No', 'Not Given'], 0,
         'The final paragraph states exactly this, calling it nearly '
         'the opposite of how it was sold.',
         {1: 'No would need the reverse ranking; the final paragraph '
             'gives this one.', 2: 'Not Given is wrong because the two uses are compared.'}),
        ('Most national surveys now ask about satisfaction, happiness, '
         'anxiety and whether life feels ____________.', None,
         'worthwhile',
         'Paragraph 9, on the reasoning that these come apart.'),
        ('The writer says four figures moving in different directions give '
         'a minister a research finding rather than an ____________.',
         None, 'instruction',
         'Paragraph 10, which explains the pressure to collapse them into '
         'one.'),
        ('Pressure to reduce the four measures to one comes from the people '
         'who have to ____________.', None, 'decide',
         'Paragraph 10, rather than from the people who measure.'),
        ('The writer says wellbeing data is best used for comparing '
         'policies whose costs are known and whose ____________ are not.',
         None, 'benefits',
         'The final paragraph, giving mental health provision against road '
         'improvements as the example.')]),
 ],
)
