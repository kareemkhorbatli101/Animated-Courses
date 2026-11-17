# -*- coding: utf-8 -*-
"""Volume 3 second timed Reading paper: Academic, 3 passages, 40 questions."""

PAPER = dict(
 vol=3, level='B2', band='6.0', form='a',
 title='Reading Paper 2 · Academic',
 intro=(
   'One hour. Forty questions. Three passages, totalling about two '
   'thousand two hundred words, which is within the range of the real '
   'paper. Sit this one at least a week after the first, and only once '
   'you have read every explanation in the first key.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you begin.',
  'Before you start, name the two question types that cost you most '
  'marks on the first paper, and be deliberately slower on those.',
  'Move on when your time is up. Passage 3 carries as many marks as '
  'Passage 1 and is the one candidates never reach.',
  'Answer every question, including the guesses. A blank is a mark '
  'given away.',
  'Mark this paper by question type, not by total. A total of 29 '
  'against a previous 27 tells you nothing you can act on.'],

 passages=[

  dict(no=1, first=1,
       heading='The first weather map',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, '
             'which are based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'A weather forecast requires two things that are easy to overlook. '
        'It requires measurements from many places at once, and it requires '
        'those measurements to arrive somewhere faster than the weather '
        'does. Until the middle of the nineteenth century the second '
        'condition could not be met, and so forecasting, in the modern '
        'sense, did not exist.',
        'Measurement was not the obstacle. Barometers had been accurate for '
        'two hundred years, and by 1800 there were observers across Europe '
        'recording pressure, temperature and wind several times a day. Their '
        'records were collected by post and published months later. They '
        'were excellent for the study of climate and useless for predicting '
        'anything, because by the time a reading from Paris reached London '
        'the weather it described had arrived, passed and been forgotten.',
        'The electric telegraph changed the arithmetic. From the '
        'eighteen-forties a reading taken at eight in the morning in one '
        'city could be in another within minutes. For the first time it was '
        'possible to draw a picture of the weather over a large area as it '
        'was at a single moment, and that picture is the thing we now call '
        'a weather map.',
        'The first person to make systematic use of this was Robert '
        'FitzRoy, who had earlier captained the ship that carried Charles '
        'Darwin. FitzRoy collected telegraphed readings from about twenty '
        'stations around the British coast, plotted them, and in 1861 began '
        'publishing what he called forecasts in the newspapers. He appears '
        'to have invented the word in its modern sense, and he chose it '
        'carefully: he wanted something weaker than prophecy.',
        'His method was pattern recognition rather than physics. Having '
        'plotted thousands of charts, he had learned which arrangements of '
        'pressure were followed by gales, and he issued warnings to ports '
        'when he saw one. Ships were advised to stay in harbour. By any '
        'measure that mattered to a sailor the system worked, and the '
        'number of vessels lost on the coast fell in the years it '
        'operated.',
        'It also made him enemies. Some scientists regarded the whole '
        'business as unsound, because he could not explain why his patterns '
        'held, and a prediction without a mechanism looked to them like '
        'fortune-telling with instruments. Shipowners objected for the '
        'opposite reason: a gale warning kept their vessels in port, and a '
        'warning that turned out to be wrong cost them money. Both groups '
        'complained loudly, and both were, in their own terms, correct.',
        'FitzRoy died in 1865, and his warning service was discontinued '
        'almost at once. It was restored four years later, after pressure '
        'from the ports rather than from the scientists, and it has run ever '
        'since. The scientific objection was eventually answered, but not '
        'until the twentieth century, when the mathematics of air movement '
        'made it possible to say why a given pattern of pressure produced a '
        'given wind.',
        'What the episode shows is a sequence that has repeated many times. '
        'A practical method works before anybody can say why, the people '
        'who benefit defend it, the people who want an explanation attack '
        'it, and the explanation arrives decades later and changes nothing '
        'about the practice. The forecast in a newspaper today is produced '
        'by equations FitzRoy would not have recognised, and it is doing '
        'the job he invented, for the reason he invented it.',
              ('It is worth recording one detail that is usually left out of '
               'the story, because it bears on how the dispute was eventually '
               'settled. FitzRoy kept every chart he drew, and he published '
               'the gale warnings with the date and the outcome beside them, '
               'so that anybody could count how often he had been right. That '
               'was unusual at the time and it is the reason historians can '
               'assess his record at all. The count is respectable rather than '
               'impressive: of the warnings issued in the first four years, a '
               'little over half were followed by a gale within a day, and '
               'about a fifth by nothing at all. A modern forecaster would '
               'regard that as poor. A shipowner comparing it with the '
               'alternative, which was a barometer on the harbour wall and a '
               'guess, regarded it as the difference between a fleet and a '
               'wreck, and it was the shipowners whose opinion restored the '
               'service.')],
       items=[
        ('Which paragraph explains why earlier observations could not be '
         'used for prediction?',
         ['Paragraph 1', 'Paragraph 2', 'Paragraph 4', 'Paragraph 7'], 1,
         'Paragraph 2 describes the postal delay that made the records '
         'useless for forecasting.'),
        ('Which paragraph describes two groups objecting for opposite '
         'reasons?',
         ['Paragraph 3', 'Paragraph 5', 'Paragraph 6', 'Paragraph 8'], 2,
         'Paragraph 6 gives the scientific objection and the commercial '
         'one.'),
        ('Barometers had been accurate for how long by 1800?',
         None, 'two hundred years',
         'Paragraph 2 makes the point that measurement was not the '
         'obstacle.'),
        ('The records collected by post were useful for the study of '
         'climate.', ['True', 'False', 'Not Given'], 0,
         'Paragraph 2 says they were excellent for that and useless for '
         'prediction.'),
        ('From which decade could a reading cross between cities in '
         'minutes?', None, 'eighteen-forties',
         'Paragraph 3 dates the change to the electric telegraph.'),
        ('What had FitzRoy done before his work on forecasts?',
         ['studied mathematics', 'captained Darwin’s ship',
          'worked for a newspaper', 'built barometers'], 1,
         'Paragraph 4 gives this one biographical detail.'),
        ('From about how many stations did FitzRoy collect readings?',
         None, 'twenty',
         'Paragraph 4 gives the figure for the coastal network.'),
        ('In which year did FitzRoy begin publishing forecasts?',
         None, '1861', 'Paragraph 4 gives the year and the newspapers.'),
        ('FitzRoy chose the word "forecast" because he wanted something',
         ['stronger than prophecy', 'weaker than prophecy',
          'shorter to print', 'more scientific sounding'], 1,
         'Paragraph 4 states his reason for the choice.'),
        ('FitzRoy could explain why his patterns held.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 6 says he could not, which was the scientific '
         'objection.'),
        ('Why did shipowners object to the warnings?',
         ['the warnings were too frequent',
          'a warning that proved wrong cost them money',
          'they did not understand the charts',
          'they preferred their own observations'], 1,
         'Paragraph 6 gives the commercial objection.'),
        ('Whose pressure led to the service being restored?',
         None, 'the ports',
         'Paragraph 7 contrasts this with pressure from the '
         'scientists.'),
        ('According to the last paragraph, the explanation arrived decades '
         'later and changed nothing about the ____________.',
         None, 'practice',
         'The final paragraph states the sequence the writer says has '
         'repeated often.')]),

  dict(no=2, first=14,
       heading='The fog that went away',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, '
             'which are based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'For about a century, the fog of London was so characteristic that '
        'it became a literary device. It appears in Dickens, in Conan Doyle '
        'and in a thousand lesser books, and readers who have never been to '
        'the city can describe it. It has been gone for sixty years, and '
        'the way it went is more interesting than the way it came.',
        'The fog was not weather. A natural fog is water vapour, it is '
        'white, and it does not kill anybody. The London fog was coal '
        'smoke held near the ground by a layer of warmer air above, and its '
        'colour, variously described as yellow, brown or green, came from '
        'sulphur compounds. It was produced by hundreds of thousands of '
        'domestic fires, not primarily by industry, which is the detail '
        'that made it so difficult to address.',
        'Its effects were well documented long before anything was done. '
        'Mortality figures from the eighteen-seventies onwards show deaths '
        'rising sharply during each prolonged fog and falling again '
        'afterwards, and the pattern was noticed at the time. Several '
        'parliamentary committees examined it. A smoke abatement exhibition '
        'was held in 1881. Nothing of consequence followed for seventy '
        'years.',
        'The reason for the delay was not ignorance but the location of the '
        'cost. An open coal fire was how an ordinary household kept warm, '
        'and no alternative existed that a poor family could afford. A law '
        'against domestic smoke was therefore a law against being warm, and '
        'no government was prepared to pass one. The committees understood '
        'this perfectly, which is why their recommendations concentrated on '
        'factory chimneys, which produced a minority of the smoke.',
        'What changed the politics was a single event. In December 1952 a '
        'period of still, cold weather trapped the smoke of the whole city '
        'for five days. Visibility fell to a few metres, transport stopped, '
        'and cattle at a market in the east of the city suffocated. The '
        'immediate official estimate of excess deaths was about four '
        'thousand. Later analysis of the mortality records put the figure '
        'at around twelve thousand.',
        'Even then the response was slow and was resisted. A bill was '
        'introduced by a backbench member rather than the government, and '
        'the Clean Air Act was not passed until 1956. Its central provision '
        'was not a prohibition but a subsidy: local authorities could '
        'declare smoke control areas, and householders in them were paid '
        'most of the cost of converting a grate to a smokeless fuel or to '
        'gas.',
        'That design is the reason it worked. The law did not ask poor '
        'households to choose between a fine and the cold; it paid for the '
        'alternative and then made the old practice illegal. Conversion '
        'took about fifteen years, area by area, and the fogs disappeared '
        'as the areas spread. The last serious one was in 1962.',
        'Two conclusions are usually drawn and only one of them is '
        'supported. The first, that evidence changes policy, is hard to '
        'defend here: the evidence was unambiguous for eighty years and '
        'changed nothing. The second, that a disaster changes policy, is '
        'closer but incomplete, because what the disaster actually did was '
        'make it possible to spend money on a problem everybody had '
        'understood for a lifetime. The barrier was never the science. It '
        'was that the cheapest solution would have been paid for by the '
        'people least able to pay.',
              ('There is a final point that explains why the London case is '
               'cited so often by people working on quite different problems. '
               'The pollution that killed twelve thousand people in 1952 was '
               'invisible as a political question for eighty years, not '
               'because it was hidden but because the only available remedy '
               'was unaffordable to the people who would have had to apply it. '
               'Once a remedy existed that somebody else could pay for, the '
               'argument took four years. The pattern recurs wherever a '
               'diffuse harm is produced by millions of individually '
               'reasonable decisions: the evidence accumulates, the committees '
               'report, and nothing moves until the cost of the alternative '
               'has been shifted off the household. Anybody designing a policy '
               'about heating, transport or farming is working on the same '
               'problem, and the Clean Air Act is the clearest case in which '
               'it was solved.')],
       items=[
        ('Which paragraph explains why earlier committees focused on '
         'factories?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 6'], 2,
         'Paragraph 4 explains that a law on domestic smoke was '
         'politically impossible.'),
        ('Which paragraph identifies the feature of the Act that made it '
         'effective?',
         ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'], 2,
         'Paragraph 7 says the law paid for the alternative before '
         'banning the practice.'),
        ('What gave the London fog its colour?',
         ['water vapour', 'sulphur compounds', 'industrial dust',
          'river mud'], 1,
         'Paragraph 2 names the compounds and lists the colours '
         'reported.'),
        ('Most of the smoke came from industry.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 2 says it came from domestic fires, not primarily '
         'from industry.'),
        ('From which decade do mortality figures show the pattern?',
         None, 'eighteen-seventies',
         'Paragraph 3 says deaths rose during each prolonged fog.'),
        ('In which year was a smoke abatement exhibition held?',
         None, '1881',
         'Paragraph 3 lists it among the things that led nowhere.'),
        ('The delay in acting was caused by ignorance of the effects.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 4 says the reason was not ignorance but the location '
         'of the cost.'),
        ('How long did the fog of December 1952 last?',
         None, 'five days',
         'Paragraph 5 describes the still, cold weather that trapped the '
         'smoke.'),
        ('What was the later estimate of excess deaths?',
         ['four thousand', 'twelve thousand', 'forty thousand',
          'one hundred thousand'], 1,
         'Paragraph 5 contrasts the official figure with the later '
         'analysis.'),
        ('Who introduced the bill that became the Clean Air Act?',
         ['the government', 'a backbench member', 'a local authority',
          'a committee of scientists'], 1,
         'Paragraph 6 makes the point that the government did not.'),
        ('In which year was the Clean Air Act passed?',
         None, '1956', 'Paragraph 6 gives the year, four years after the '
         'fog.'),
        ('Conversion of grates took about ____________ years.',
         None, 'fifteen',
         'Paragraph 7 says the fogs disappeared as the controlled areas '
         'spread.'),
        ('According to the writer, the barrier to action was never the '
         '____________.', None, 'science',
         'The last paragraph states what the barrier actually was.')]),

  dict(no=3, first=27,
       heading='What a census counts',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, '
             'which are based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'A census appears to be the least interesting kind of document: a '
        'count of people, carried out by officials, published as tables. In '
        'fact it is one of the most argued-over instruments any state '
        'possesses, because what it counts becomes what exists for every '
        'purpose that follows, and what it omits becomes invisible to '
        'policy for a decade.',
        'The mechanical problems are real and well understood. Some people '
        'are missed, and they are not missed at random: the undercount '
        'falls on young men, on recent migrants, on people in shared or '
        'temporary housing, and on anybody with a reason to avoid '
        'officials. Statistical offices now estimate the size of their own '
        'undercount by a second survey and adjust the published figures, '
        'which is an improvement and introduces an estimate into a document '
        'whose authority rests on being a count.',
        'The harder problems are not mechanical. Every question on a census '
        'form embodies a decision about which categories are real. A form '
        'that asks for a single ethnicity produces a population in which '
        'nobody is of mixed descent. A form that offers one box for '
        'religion produces a country with no agnostics. A form that asks '
        'for occupation and not for hours produces a workforce in which '
        'part-time work does not appear.',
        'These decisions are rarely made for statistical reasons. The '
        'British census added a question on religion in 2001 after thirty '
        'years of refusal, and the change followed a political campaign '
        'rather than a methodological argument. The question is voluntary, '
        'which was the condition of including it at all, and the resulting '
        'figures are therefore not comparable with the compulsory '
        'questions around them.',
        'What makes the categories consequential is that money follows '
        'them. Funding formulas for schools, health services and local '
        'government are built on census counts, and a group that is '
        'undercounted or uncategorised receives less. This produces an '
        'incentive that works in both directions: local authorities '
        'campaign for a high count in their own area, and national '
        'governments have occasionally been accused of designing questions '
        'whose answers would be convenient.',
        'Representation follows the same figures. Where parliamentary '
        'boundaries are drawn from census population, an undercount of a '
        'particular kind of neighbourhood reduces its representation for '
        'the life of the boundary, which may be twenty years. Several legal '
        'cases in the United States have turned on precisely this, and in '
        'each of them the statistical argument was conducted by lawyers '
        'because the stakes were political.',
        'There is a further difficulty that has grown recently. Response '
        'rates to voluntary surveys have fallen everywhere, and a census '
        'that is compulsory in law is not compulsory in practice unless '
        'somebody is prepared to prosecute. Several countries have '
        'therefore moved towards using administrative records instead: tax '
        'files, health registrations, school rolls. This is cheaper and '
        'more frequent, and it counts a different population, because '
        'administrative records contain the people who deal with '
        'institutions and miss the people who do not.',
        'The response to all of this should not be scepticism about '
        'counting. A country without a census is not a country with better '
        'information; it is a country where the same decisions are taken '
        'on the basis of impressions, which are also categorised and are '
        'nobody’s responsibility. The useful response is to read a '
        'census as a document with authors. Somebody chose the questions, '
        'somebody estimated the undercount, and both of those decisions '
        'are published. Almost no other number a government uses comes '
        'with that much of its own working shown.',
              ('One last observation belongs with that recommendation, because '
               'it changes what a careful reader should do with a census '
               'table. The published figures almost always come with a note '
               'stating which questions were voluntary, how the undercount was '
               'estimated and where the categories changed since the previous '
               'count. Those notes are the most informative part of the '
               'document and the part nobody reads, and a figure quoted in a '
               'newspaper has invariably been separated from them. A reader '
               'who goes back to the release will often find that the '
               'surprising number is surprising because of a change in '
               'definition, and that the change was announced, explained and '
               'ignored.')],
       items=[
        ('Which paragraph explains why an adjusted census figure is partly '
         'an estimate?',
         ['Paragraph 1', 'Paragraph 2', 'Paragraph 5', 'Paragraph 7'], 1,
         'Paragraph 2 describes the second survey used to measure the '
         'undercount.'),
        ('Which paragraph argues that administrative records count a '
         'different population?',
         ['Paragraph 3', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'], 3,
         'Paragraph 7 explains who such records contain and who they '
         'miss.'),
        ('Which paragraph states the writer’s own recommendation?',
         ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'], 3,
         'Paragraph 8 rejects scepticism and says how a census should be '
         'read.'),
        ('The census undercount falls randomly across the population.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 2 lists the specific groups it falls on.'),
        ('How do statistical offices estimate their own undercount?',
         None, 'a second survey',
         'Paragraph 2 says the published figures are then adjusted.'),
        ('A form offering one box for religion produces a country with no '
         '____________.', None, 'agnostics',
         'Paragraph 3 gives three parallel examples of categories '
         'creating a population.'),
        ('In which year did the British census add a question on '
         'religion?', None, '2001',
         'Paragraph 4 says it followed thirty years of refusal.'),
        ('The religion question was added for methodological reasons.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 4 says it followed a political campaign rather than '
         'a methodological argument.'),
        ('Why are the religion figures not comparable with the others?',
         ['they were collected later', 'the question is voluntary',
          'they were not published', 'the categories changed'], 1,
         'Paragraph 4 gives the condition on which the question was '
         'included.'),
        ('Funding formulas for schools and health services are built on '
         'census ____________.', None, 'counts',
         'Paragraph 5 explains why the categories are consequential.'),
        ('An undercount can reduce an area’s representation for as '
         'long as ____________ years.', None, 'twenty',
         'Paragraph 6 gives the possible life of a boundary.'),
        ('Legal cases about census counts have been argued by',
         ['statisticians', 'lawyers', 'local authorities',
          'parliamentary committees'], 1,
         'Paragraph 6 says the statistical argument was conducted by '
         'lawyers because the stakes were political.'),
        ('Using administrative records is cheaper and more ____________.',
         None, 'frequent',
         'Paragraph 7 gives both advantages before the drawback.'),
        ('What does the writer say a census shows more of than almost any '
         'other government number?',
         ['its cost', 'its own working', 'its authors’ names',
          'its margin of error'], 1,
         'The final sentence makes this the reason for reading it '
         'carefully rather than dismissing it.')]),
 ])
