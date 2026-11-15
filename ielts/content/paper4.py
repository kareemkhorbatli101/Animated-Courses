# -*- coding: utf-8 -*-
"""Volume 4 timed Reading paper: Academic, 3 passages, 40 questions, 60 min."""

PAPER = dict(
 vol=4, level='B2', band='6.5',
 title='Reading Paper · Academic',
 intro=(
   'One hour. Forty questions. Three passages of increasing difficulty, '
   'totalling about two thousand four hundred words. There is no extra time '
   'for transferring answers: whatever is on the paper at sixty minutes is '
   'your score.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you start. Those are '
  'the clock times by which each passage should be finished.',
  'Use the loop on every passage, including the third, including when you are '
  'behind: thirty seconds on the title and first paragraph, two minutes '
  'loading the questions, then one paragraph at a time.',
  'A question you cannot close after reading its paragraph gets a mark in the '
  'margin and nothing else. Come back at the end.',
  'Answer every question. There is no penalty for a wrong answer, and a blank '
  'at minute fifty-nine is a mark given away.'],

 passages=[

  dict(no=1, first=1,
       heading='The box that changed the world',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, which are '
             'based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'In 1956 a converted tanker left Newark carrying fifty-eight metal '
        'boxes to Houston. The cargo was unremarkable and the arrangement was '
        'not: for the first time, goods had been loaded into containers at a '
        'factory, lifted onto a ship without being touched, and lifted off at '
        'the other end still sealed. The cost of loading that ship was calculated afterwards at sixteen cents a ton, against five dollars and eighty-three cents for the loading of a conventional cargo vessel.',
        'That comparison is the whole story of the container, and it is '
        'usually told as a story about ships. It is better understood as a '
        'story about ports, railways, roads, insurance, trade unions and '
        'national customs services, all of which had to change before a metal '
        'box could produce the saving the arithmetic promised. The manufacture of the box itself was trivial, and almost nothing else about the system was.',
        'Before containerisation, the loading of a ship was performed by gangs of dockworkers who stowed individual items by hand: sacks of coffee, crates of '
        'machinery, barrels, bales. A vessel might call at a dozen ports and '
        'spend more time alongside than at sea. Ports were therefore located '
        'where labour was, which generally meant inside cities, and a '
        'substantial fraction of the population of every port city worked, '
        'directly or indirectly, on moving goods between ship and shore.',
        'The container removed almost all of that work, and the removal was the point of the exercise. Resistance from dock labour was immediate and well organised, and in several countries it delayed adoption by a decade, producing a confrontation whose settlement shaped the industry for a generation. Where agreements were eventually reached they '
        'typically traded guaranteed income for existing workers against '
        'unrestricted mechanisation, an arrangement that protected the '
        'generation that negotiated it and nobody after.',
        'A second obstacle was the box itself. Early containers came in '
        'incompatible sizes, with different corner fittings, so that a '
        'container loaded onto one company’s ship could not be lifted by '
        'another company’s crane. Standardisation took most of the 1960s and was fought over commercially, since each firm wanted the specification to confirm the dimensions of its own existing investment. The eventual agreement on '
        'eight-foot widths and twenty- and forty-foot lengths was a '
        'compromise that suited nobody exactly, which is the usual shape of a '
        'successful standard.',
        'The third obstacle was geography. A container port needs deep water, '
        'very large flat areas for stacking, and road and rail connections '
        'able to take the volume away quickly. Almost no established port had '
        'any of these, because established ports were in cities and cities had '
        'no spare land. The result was a wholesale relocation of maritime activity, and with it a redistribution of employment and of municipal revenue: New York’s traffic moved across the harbour to New Jersey, '
        'London’s moved twenty-five miles east to Tilbury and then to '
        'Felixstowe, and in both cases the old docks closed within a decade of '
        'the first container crane being installed elsewhere.',
        'The economic consequences of the change were larger than almost '
        'anybody predicted, and they were of a kind that is hard to see. '
        'Transport costs did not merely fall; they fell far enough to cease to be a consideration in decisions about the location of production. A '
        'manufacturer choosing between a factory nearby and a factory on '
        'another continent had previously faced a shipping cost that could '
        'exceed the wage difference. After containerisation that cost was '
        'often less than one per cent of the value of the goods.',
        'The transition also redistributed work instead of simply '
        'eliminating it. Jobs disappeared from the docks of old port cities '
        'and appeared in distribution parks forty miles inland, in haulage, '
        'and in the warehouses that a fast, predictable supply chain '
        'requires. The two sets of jobs were in different places, demanded '
        'different skills and were held by different people, which is why a '
        'change that raised total employment was experienced in Liverpool '
        'and Brooklyn as a catastrophe.',
        'What followed was not simply more trade but a different kind of '
        'trade. Production could be broken into stages and the stages placed '
        'wherever each was cheapest, with components crossing oceans several '
        'times before a finished article reached a shop. This is a pattern '
        'that depends entirely on transport being cheap and, equally '
        'importantly, reliable: a factory holding two days of stock cannot '
        'tolerate a ship arriving a week late, which is why the container’s '
        'predictability mattered as much as its price.',
        'Historians of the period have noted a further effect that was '
        'invisible at the time. Because the saving was in handling rather '
        'than in distance, the container reduced the cost of shipping a box a '
        'long way far more than it reduced the cost of shipping it a short '
        'way. Trade between distant countries therefore became cheaper '
        'relative to trade between neighbours, which is the reverse of what '
        'most transport improvements had done before and after.'],
       items=[
        ('Choose the best heading for paragraph 2.',
         ['The first voyage', 'A system, not an invention',
          'The end of dock labour', 'Agreeing a standard'], 1,
         'Paragraph 2 lists everything else that had to change: ports, '
         'railways, insurance, unions, customs.'),
        ('Choose the best heading for paragraph 5.',
         ['The end of dock labour', 'Agreeing a standard',
          'Ports in the wrong place', 'A different kind of trade'], 1,
         'Incompatible sizes and fittings, and a compromise that suited '
         'nobody exactly.'),
        ('Choose the best heading for paragraph 6.',
         ['Agreeing a standard', 'Ports in the wrong place',
          'A different kind of trade', 'The invisible effect'], 1,
         'Deep water, flat land and connections, which established city ports '
         'did not have.'),
        ('Choose the best heading for paragraph 8.',
         ['Ports in the wrong place', 'A different kind of trade',
          'The invisible effect', 'The first voyage'], 1,
         'Production broken into stages, components crossing oceans several '
         'times.'),
        ('Loading the 1956 ship cost sixteen cents a ton, against '
         '____________ for a conventional ship.', None, '$5.83',
         'Paragraph 1 gives five dollars and eighty-three cents, which is the '
         'comparison the whole passage turns on.'),
        ('Agreements with dock labour typically exchanged guaranteed income '
         'for unrestricted ____________.', None, 'mechanisation',
         'Paragraph 4, protecting the generation that negotiated and nobody '
         'after.'),
        ('London’s port traffic moved first to ____________.', None,
         'Tilbury', 'Paragraph 6, twenty-five miles east, and then to '
         'Felixstowe.'),
        ('After containerisation, shipping often cost less than one per cent '
         'of the ____________ of the goods.', None, 'value',
         'Paragraph 7, which is why transport stopped affecting location '
         'decisions.'),
        ('The container was first used on a converted tanker in 1956.',
         ['True', 'False', 'Not Given'], 0,
         'Paragraph 1: a converted tanker left Newark with fifty-eight '
         'boxes.'),
        ('Standardisation of container sizes was completed within two years.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 5 says it took most of the 1960s and was fought over '
         'commercially.'),
        ('Dock labour in every country accepted containerisation without '
         'dispute.', ['True', 'False', 'Not Given'], 1,
         'Paragraph 4: resistance was immediate and in several countries '
         'delayed adoption by a decade.'),
        ('Containers are now manufactured mainly in Asia.',
         ['True', 'False', 'Not Given'], 2,
         'Where containers are made is never mentioned anywhere in the '
         'passage.'),
        ('The container reduced the cost of long-distance trade more than '
         'short-distance trade.', ['True', 'False', 'Not Given'], 0,
         'Paragraph 9: the saving lay in handling, where distance was barely affected, which is the reverse of most transport improvements.')]),

  dict(no=2, first=14,
       heading='The invention of standard time',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, which are '
             'based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'For most of human history, noon was a local observation. The sun '
        'reached its highest point at a slightly different moment in every '
        'town, and every town set its clocks accordingly. A traveller moving '
        'west found that local time ran progressively behind the time they had '
        'left, by about four minutes for every degree of longitude, and '
        'nobody regarded this as a problem because nobody could travel fast '
        'enough for it to become one.',
        'The railway changed that in a single generation. A train leaving one '
        'city at ten and arriving in another at noon raised a question that '
        'had never needed an answer: whose noon? Timetables printed in local time were unusable across any distance, and the consequences extended well beyond inconvenience to questions of operational safety. Two trains on a single track, each running '
        'to its own town’s clock, could occupy the same stretch of line '
        'believing themselves to be minutes apart.',
        'The first solution was private rather than public. British railway '
        'companies adopted the time kept at Greenwich for their own '
        'operations from the 1840s, printing timetables in what they called '
        'railway time while the towns they served continued to keep their '
        'own. For some decades a station clock and a church clock a hundred '
        'metres apart showed different times, and several public buildings '
        'fitted clocks with two minute hands to show both.',
        'The transition from railway time to legal recognition took much longer and followed a different logic in each country, with the sequence of adoption, consolidation and legislation varying considerably. In Britain the change '
        'was effectively complete in practice by 1855 and was not given legal '
        'force until 1880, a gap of twenty-five years during which courts '
        'occasionally had to decide which time a contract or a licensing hour '
        'referred to. In the United States the railways imposed four time '
        'zones on themselves in 1883, and Congress did not legislate until '
        '1918.',
        'The international system of zones was proposed at a conference in '
        'Washington in 1884, which agreed that the meridian through Greenwich '
        'would be the prime meridian and that the day would begin at mean '
        'midnight there. The agreement was not universally welcomed: France '
        'abstained, and continued to define its legal time as Paris mean time '
        'retarded by nine minutes and twenty-one seconds, a formula that '
        'described Greenwich time without naming it, until 1911.',
        'What is striking about the whole episode is how small a part government decision made in it. The technical problem was solved by railway '
        'companies acting in their own interest; the international standard '
        'was agreed at a conference with no power to bind anybody; and '
        'national legislation, where it came, generally ratified what was '
        'already universal practice rather than imposing anything. Legal time '
        'followed actual time by between ten and thirty-five years in every '
        'country studied.',
        'The social reception of the change is harder to recover than the technical history, and considerably more interesting. Contemporary objections were '
        'not about inconvenience but about authority. Local time was derived '
        'from the sun, which is to say from nature; standard time was derived '
        'from an agreement, which is to say from other people. A number of '
        'nineteenth-century commentators regarded the substitution as a '
        'genuine loss, and the complaint was not as foolish as it sounds: '
        'something that had been a property of a place became a property of a '
        'network.',
        'Standard time also made possible a category of measurement that had '
        'not previously existed, which is simultaneity at a distance. Two '
        'events in different cities could be said to have happened at the '
        'same moment, and this could be verified. Financial markets, '
        'telegraphy, astronomy and later broadcasting all depend on it, and '
        'all of them developed in the decades immediately after the zones '
        'were agreed, which is unlikely to be a coincidence.',
        'There is a further strand to the story that is usually told '
        'separately and belongs with it. The same decades produced the '
        'telegraph, and a telegraph line makes the difference between two '
        'local times visible in a way that no previous technology had. An '
        'operator in one city could ask an operator in another what the time '
        'was and receive an answer that was both accurate and wrong, and the '
        'astronomers who ran the early time signals were among the first to '
        'insist that the question needed a convention to answer it.',
        'The final irony is that the precision the system was built on has '
        'since been abandoned. Modern civil time is derived from atomic clocks, where it was once derived from the rotation of the earth, and because that '
        'rotation is slightly irregular the two diverge. Leap seconds were '
        'introduced to keep them aligned, and in 2022 it was agreed to '
        'abandon them by 2035, accepting that civil time will drift away from '
        'the sun by a second or two per century. Noon will once again not be '
        'quite noon, for reasons exactly opposite to the original ones.'],
       items=[
        ('Which paragraph explains why local time was not a problem before '
         'railways?',
         ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 0,
         'Nobody could travel fast enough for the four minutes per degree to '
         'matter.'),
        ('Which paragraph describes buildings displaying two times at once?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'], 1,
         'Paragraph 3: clocks fitted with two minute hands while towns kept '
         'their own time.'),
        ('Which paragraph argues that governments were largely followers?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'], 2,
         'Paragraph 6: legislation ratified universal practice ten to '
         'thirty-five years later.'),
        ('Which paragraph describes a new kind of measurement becoming '
         'possible?',
         ['Paragraph 6', 'Paragraph 7', 'Paragraph 8', 'Paragraph 9'], 2,
         'Simultaneity at a distance, on which markets, telegraphy and '
         'astronomy depend.'),
        ('Local time changed by about four minutes for every degree of '
         '____________.', None, 'longitude',
         'Paragraph 1, which is why westward travel put a traveller behind.'),
        ('British railway companies printed timetables in what they called '
         '____________ time.', None, 'railway',
         'Paragraph 3, from the 1840s, while towns kept their own.'),
        ('American railways imposed ____________ time zones on themselves in '
         '1883.', None, 'four',
         'Paragraph 4, thirty-five years before Congress legislated.'),
        ('The 1884 conference agreed that the day would begin at mean '
         '____________ at Greenwich.', None, 'midnight',
         'Paragraph 5, together with the choice of the prime meridian.'),
        ('France defined its time by reference to Paris until ____________.',
         None, '1911',
         'Paragraph 5: Paris mean time retarded by nine minutes and '
         'twenty-one seconds.'),
        ('According to the writer, nineteenth-century objections to standard '
         'time concerned',
         ['inconvenience', 'cost', 'authority', 'accuracy'], 2,
         'Paragraph 7: time derived from an agreement, where it had come from the sun.'),
        ('The writer describes the complaint about losing local time as',
         ['foolish', 'not as foolish as it sounds', 'typical of the period',
          'economically motivated'], 1,
         'Something that had been a property of a place became a property of '
         'a network.'),
        ('Leap seconds are to be abandoned by',
         ['2022', '2030', '2035', '2100'], 2,
         'Paragraph 9, agreed in 2022, accepting a drift of a second or two '
         'per century.'),
        ('Modern civil time is derived from the rotation of the earth.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 9: it is derived from atomic clocks, and the two '
         'diverge.')]),

  dict(no=3, first=27,
       heading='What counts as a species',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, which are '
             'based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'Biology has a definition of species that most people learned at '
        'school and that most biologists regard as unusable. Two populations '
        'belong to different species, the definition runs, if they cannot '
        'interbreed to produce fertile offspring. It is clear, it is '
        'testable, and it fails on a large fraction of the living world.',
        'The failures are not marginal cases at the edge of an otherwise '
        'sound rule. Bacteria do not interbreed at all, their exchange of genetic material running sideways between organisms with no ancestral relationship, so the criterion cannot even be applied to the '
        'majority of life by number or by mass. Many plants hybridise freely '
        'across what every botanist treats as species boundaries, and some of '
        'the resulting hybrids are both fertile and ecologically distinct.',
        'A second difficulty is geographical. Consider a chain of populations '
        'encircling a mountain range, in which each population interbreeds '
        'with its neighbours on either side, but the two populations that '
        'meet after the circle closes do not. Every adjacent pair is the same '
        'species by the criterion; the two ends are different species by the '
        'same criterion. Such ring species are rare but they are not '
        'hypothetical, and they show that the relation the definition depends '
        'on is not transitive.',
        'A third problem is temporal and is the most awkward of the three, since the definition applies only to populations alive at the same time. It can say nothing '
        'about whether a fossil population belongs to the same species as its '
        'descendants, because the test cannot be run, and yet the whole '
        'notion of a species persisting or changing through time requires an '
        'answer. Palaeontologists therefore use morphological criteria that '
        'are explicitly different from the ones used on living organisms.',
        'Faced with these difficulties, biologists have produced a proliferation of alternative definitions, of which perhaps twenty-six remain in current use. Some define a species by shared ancestry, some by '
        'ecological role, some by the smallest cluster that can be '
        'diagnosed by a shared character, some by patterns of genetic '
        'similarity. Each works well in the domain it was built for, and the '
        'boundaries they draw do not coincide.',
        'The natural reaction is to ask which definition is correct, and the '
        'more defensible view is that the question is malformed. Species are '
        'not a kind of object that the world contains independently of our '
        'purposes, in the way that electrons are. They are a way of dividing '
        'a continuously varying and continuously changing set of populations '
        'into units that can be counted, compared and conserved.',
        'That position is not relativism, and the distinction matters. The underlying facts are perfectly objective: the identity of the populations that interbreed, the distribution of shared ancestry, which occupy which ecological '
        'role, which differ by how much in which genes. All of that is simply '
        'the case. What is not objective is which of those facts should '
        'determine the boundary, and that depends on what the boundary is '
        'for.',
        'The practical consequences are considerable, because the administration of conservation law operates almost entirely at the level of the species. Protection '
        'is granted to species; extinction is counted in species; funding '
        'follows designation. A reclassification that splits one species into '
        'three can create three endangered populations overnight, and a '
        'reclassification that merges three into one can remove protection '
        'from all of them without any change in the number of animals '
        'alive.',
        'This has produced an accusation, made periodically and usually '
        'without evidence, that taxonomists split species in order to '
        'generate protected status. The accusation is almost always unfounded '
        'as a description of motive, and it rests on a misunderstanding: '
        'splitting and merging have both increased in recent decades, for the '
        'straightforward reason that genetic data has become cheap and '
        'frequently contradicts classifications made on appearance alone.',
        'But the accusation points at something real. If the boundary is '
        'partly a decision, and if the decision has large consequences for '
        'funding and law, then the decision is not purely a scientific one, '
        'and treating it as though it were leaves the actual choice '
        'unexamined. The honest position is to say which criterion was '
        'applied and why, and to accept that a different purpose would '
        'legitimately have produced a different line.',
        'It is worth noticing that the same structure appears wherever a '
        'continuous reality is divided for administrative use. Poverty lines, '
        'diagnostic thresholds in medicine and the boundaries of electoral '
        'districts all draw a line across something that varies smoothly, and '
        'in each case the line has consequences that the underlying variation '
        'does not. The species debate is unusual only in that biologists have '
        'been arguing about it in public for a century and have therefore '
        'produced an unusually clear account of what such a line is.',
        'None of this is an argument for abandoning the category. A '
        'classification that is partly conventional can still be '
        'indispensable, as every system of measurement demonstrates: the '
        'metre is a convention and bridges do not fall down because of it. '
        'What the argument does require is that the convention be visible, '
        'because a decision mistaken for a discovery cannot be argued with by '
        'anybody who disagrees with it.'],
       items=[
        ('Which paragraph explains why the standard definition cannot apply '
         'to most organisms?',
         ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 1,
         'Bacteria do not interbreed and exchange material sideways.'),
        ('Which paragraph describes a case where the relation is not '
         'transitive?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'], 1,
         'Ring species: every adjacent pair interbreeds, the two ends do '
         'not.'),
        ('Which paragraph compares species boundaries with units of '
         'measurement?',
         ['Paragraph 8', 'Paragraph 9', 'Paragraph 10', 'Paragraph 11'], 3,
         'The metre is a convention and bridges do not fall down.'),
        ('Which paragraph explains why reclassification matters legally?',
         ['Paragraph 6', 'Paragraph 7', 'Paragraph 8', 'Paragraph 9'], 2,
         'Protection, extinction counts and funding all operate at species '
         'level.'),
        ('The writer believes the standard school definition is adequate for '
         'most purposes.', ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 1 says most biologists regard it as unusable and the '
         'failures are not marginal.'),
        ('The writer believes species boundaries are entirely arbitrary.',
         ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 7 explicitly says the position is not relativism and the '
         'underlying facts are objective.'),
        ('The writer believes taxonomists commonly split species to obtain '
         'funding.', ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 9 calls the accusation almost always unfounded as a '
         'description of motive.'),
        ('The writer believes the category of species should be abandoned.',
         ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 11 opens by saying none of this is an argument for '
         'abandoning it.'),
        ('The writer believes genetic data has made classification cheaper '
         'and more contested.', ['Yes', 'No', 'Not Given'], 0,
         'Paragraph 9: cheap genetic data frequently contradicts '
         'classifications made on appearance.'),
        ('Approximately how many species definitions are in current use?',
         ['Six', 'Twelve', 'Twenty-six', 'Over a hundred'], 2,
         'Paragraph 5, each working well in the domain it was built for.'),
        ('Palaeontologists use ____________ criteria instead of the '
         'interbreeding test.', None, 'morphological',
         'Paragraph 4, because the test cannot be run on fossils.'),
        ('The writer says species are a way of dividing populations into '
         'units that can be counted, compared and ____________.', None,
         'conserved',
         'Paragraph 6, which is the core of the writer’s own position.'),
        ('What does the writer say determines which facts should set a '
         'boundary?', None, 'what the boundary is for',
         'Paragraph 7, which is how the writer separates the position from '
         'relativism.'),
        ('A decision mistaken for a ____________ cannot be argued with.',
         None, 'discovery',
         'The final sentence, which is why the writer wants the convention '
         'made visible.')]),
 ],
)
