# -*- coding: utf-8 -*-
"""Chapter 14 - rhetorical synthesis. Home domain HUM.

Key plans: HIS CABDCBADBD, BIO DBCADCBACA, PHY ACDBADCBDB, HUM BDACBADCAC,
SOC CABDCBADBD.

Each exercise gives three to five notes and one stated goal, and exactly one
of the four sentences serves that goal using what the notes contain. The five
moves are the five ways a sentence fails: it serves a different goal, it is
true of the notes but not of the goal, it brings in a fact the notes do not
hold, it says less than the notes allow, or it claims more than they support.

None of the five can carry a machine predicate. What a sentence does for a
stated purpose is not a property of its form, and the chapter says so rather
than inventing a detector. The span rule and the end-to-end read carry it.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 14

AR = dict(
    qaida="التأليف البلاغي: تُعطى ملاحظات مبعثرة ويُعطى هدف مصرّح به، فالمطلوب جملة واحدة "
          "تخدم ذلك الهدف بما في الملاحظات. والهدف هو الحاكم: فالجملة الصحيحة ليست أصدق "
          "الجمل ولا أطولها، بل التي تفعل ما طُلب فعله.",
    kayf="يصرّح اختبار سات بالهدف في نصّ السؤال: أن تُبرز فرقاً، أو تفسّر سبباً، أو تعرّف "
         "بالموضوع، أو تقارن، أو تذكر ما وجده البحث، أو تذكر حدّاً من حدوده. فاقرأ الهدف "
         "أوّلاً ثمّ الملاحظات، ثمّ اسأل عن كلّ خيار: هل يفعل هذا؟",
    fakh="الفخّ الأوّل جملة صادقة لا تخدم الهدف، وهي أخطر الخيارات لأن الطالب يتحقّق من "
         "صدقها فيختارها. والفخّ الثاني جملة تخدم هدفاً آخر، والثالث جملة تزيد على "
         "الملاحظات ما ليس فيها.",
    sila="هذا الباب يأتي في اختبار سات في آخر أسئلة القسم الكتابيّ، وهو أقرب أبواب الكتاب "
         "إلى الكتابة نفسها، لأن الطالب فيه يحكم على جملة بمقياس الغرض لا بمقياس "
         "القواعد.",
)

HIS = dict(domain='HIS', note_ar=(
    "ملاحظات التاريخ والنظام المدني تجمع التواريخ والأرقام والنصوص، فيكثر فيها الخيار "
    "الصادق الذي لا يخدم الهدف: تاريخ صحيح أو رقم صحيح في غير موضعه من السؤال."), xs=[
    dict(strand='HIS-S01', pos=1,
         notes=['In 1790 the first federal census counted 3.9 million people.',
                'Nearly one in five of them was enslaved.',
                'The census asked six questions of each household.',
                'It took eighteen months to complete.'],
         goal_text='state what the first census found about the size of the population',
         rule='goal_finding',
         rule_span='counted 3.9 million people in the United States',
         opts=['The first federal census asked only six questions of each household.',
               'The first federal census counted a large number of people.',
               'The first federal census of 1790 counted 3.9 million people in the United '
               'States.',
               'The first census counted 3.9 million people, a figure most historians now '
               'think too low.'], key='C',
         faults={'A': ('true_not_asked', 'asked only six questions of each household'),
                 'B': ('underreach', 'counted a large number of people'),
                 'D': ('imported', 'a figure most historians now think too low')},
         why="The goal asks what the census found about the size of the population, and "
             "only one sentence gives the figure the census returned.",
         trap="B names no number at all, so it says less than the notes have already "
              "said."),
    dict(strand='HIS-S02', pos=2,
         notes=['The Federalist was a series of 85 newspaper essays.',
                'They appeared in New York papers in 1787 and 1788.',
                'Hamilton, Madison and Jay wrote them under the name Publius.',
                'They argued for ratifying the Constitution.'],
         goal_text='introduce The Federalist to an audience unfamiliar with it',
         rule='goal_introduce',
         rule_span='a series of 85 essays, published in New York newspapers in 1787 and '
                   '1788',
         opts=['The Federalist is a series of 85 essays, published in New York newspapers '
               'in 1787 and 1788, arguing for ratification of the Constitution.',
               'Hamilton, Madison and Jay signed the essays with the single name Publius.',
               'The Federalist was a group of essays printed in newspapers.',
               'The Federalist persuaded New York to ratify the Constitution.'], key='A',
         faults={'B': ('true_not_asked', 'signed the essays with the single name Publius'),
                 'C': ('underreach', 'a group of essays printed in newspapers'),
                 'D': ('overreach', 'persuaded New York to ratify the Constitution')},
         why="To introduce the essays is to say what they were, where they appeared and "
             "what they argued, which is what one sentence here does and no other.",
         trap="D claims an effect the notes do not record: that the essays changed the "
              "vote in New York."),
    dict(strand='HIS-S03', pos=3,
         notes=['The 1785 ordinance surveyed the Northwest into six-mile townships.',
                'Each township was divided into 36 sections of 640 acres.',
                'Land in the South was often claimed by metes and bounds.',
                'Metes and bounds followed streams, trees and rocks.'],
         goal_text='emphasize a difference between the two ways of describing land',
         rule='goal_contrast',
         rule_span='Southern land was often claimed by metes and bounds that followed '
                   'streams and trees',
         opts=['Because the Northwest was surveyed into townships, its sections ran to 640 '
               'acres each.',
               'Where the Northwest was surveyed into square six-mile townships, Southern '
               'land was often claimed by metes and bounds that followed streams and '
               'trees.',
               'Each township of the 1785 survey held thirty-six sections of 640 acres.',
               'Square townships proved easier to sell at auction in a distant city, '
               'which is the reason the federal land office preferred them to any system '
               'that rested on local landmarks.'], key='B',
         faults={'A': ('wrong_goal', 'Because the Northwest was surveyed into townships'),
                 'C': ('true_not_asked', 'held thirty-six sections of 640 acres'),
                 'D': ('imported', 'proved easier to sell at auction in a distant '
                       'city')},
         why="The goal is a contrast, so the sentence has to put the two systems side by "
             "side, which only one of the four does.",
         trap="A explains one system instead of setting the two against each other, which "
              "is a different goal altogether."),
    dict(strand='HIS-S04', pos=4,
         notes=['The Confederation could requisition money from the states.',
                'It could not compel payment.',
                'By 1786 the states had paid about a third of what was asked.',
                'Congress defaulted on the interest owed to its foreign creditors.'],
         goal_text='explain why the Confederation defaulted on its foreign interest',
         rule='goal_cause',
         rule_span='because it could only ask the states for money and the states paid '
                   'about a third of what was asked',
         opts=['Unlike the states, the Confederation could requisition money but could not '
               'collect it.',
               'The Confederation had trouble getting money out of the states.',
               'No government that must ask its members for money can pay its debts.',
               'The Confederation defaulted on its foreign interest because it could only '
               'ask the states for money and the states paid about a third of what was '
               'asked.'], key='D',
         faults={'A': ('wrong_goal', 'Unlike the states, the Confederation could '
                       'requisition money'),
                 'B': ('underreach', 'had trouble getting money out of the states'),
                 'C': ('overreach', 'No government that must ask its members for money')},
         why="The goal is to explain the default, so the sentence must join the two notes "
             "that caused it to the default itself.",
         trap="C turns one government's failure into a law about all governments, which "
              "the notes cannot support."),
    dict(strand='HIS-S05', pos=5,
         notes=['A study counted petitions sent to Congress between 1831 and 1844.',
                'More than 130,000 arrived in the session of 1837 and 1838 alone.',
                'Most of them carried the signatures of women.',
                'The House adopted a gag rule in 1836 to table them unread.'],
         goal_text='state what the study found about who signed the petitions',
         rule='goal_finding',
         rule_span='most of the petitions sent to Congress in those years carried the '
                   'signatures of women',
         opts=['The House adopted a gag rule in 1836 that tabled every petition on the '
               'subject without reading it, and more than 130,000 petitions arrived in a '
               'single session in spite of the rule.',
               'The study found that many people signed the petitions.',
               'The study found that most of the petitions sent to Congress in those years '
               'carried the signatures of women.',
               'Most of the petitions were signed by women, who could not vote in any '
               'state.'], key='C',
         faults={'A': ('true_not_asked', 'tabled every petition on the subject without '
                       'reading it'),
                 'B': ('underreach', 'that many people signed the petitions'),
                 'D': ('imported', 'who could not vote in any state')},
         why="The goal asks what the study found about the signers, so the sentence has to "
             "report that finding and nothing else.",
         trap="A is the longest and best-made sentence of the four, and every word of it is "
              "true, but the goal asked who signed."),
    dict(strand='HIS-S06', pos=6,
         notes=['The Erie Canal opened in 1825 and ran 363 miles.',
                'It cost about seven million dollars.',
                'The Chesapeake and Ohio Canal opened in 1831.',
                'It reached 184 miles and cost about eleven million dollars.'],
         goal_text='compare the two canals on their length and their cost',
         rule='goal_compare',
         rule_span='ran 363 miles and cost about seven million dollars',
         opts=['The Erie Canal was the better investment of the two.',
               'The Erie Canal ran 363 miles and cost about seven million dollars, while '
               'the Chesapeake and Ohio ran 184 miles and cost about eleven million.',
               'The Chesapeake and Ohio Canal opened six years after the Erie.',
               'The two canals differed in length and in cost.'], key='B',
         faults={'A': ('overreach', 'was the better investment of the two'),
                 'C': ('true_not_asked', 'opened six years after the Erie'),
                 'D': ('underreach', 'differed in length and in cost')},
         why="To compare the canals is to set the two lengths and the two costs against "
             "each other, which one sentence does with all four figures.",
         trap="D announces that the canals differed and gives not one of the four numbers "
              "the notes provide."),
    dict(strand='HIS-S07', pos=7,
         notes=["Chicago's population rose from 30,000 in 1850 to 300,000 in 1870.",
                'Eleven railroads met in the city by 1856.',
                'Grain elevators let wheat be graded and sold by the carload.',
                'The Board of Trade began trading grain contracts in 1859.'],
         goal_text='explain why Chicago grew so quickly in those twenty years',
         rule='goal_cause',
         rule_span='because eleven railroads met there and its elevators let grain be '
                   'graded and sold by the carload',
         opts=['Chicago grew tenfold between 1850 and 1870 because eleven railroads met '
               'there and its elevators let grain be graded and sold by the carload.',
               'The Chicago Board of Trade began trading contracts in grain in 1859.',
               'Chicago grew quickly in the middle of the nineteenth century.',
               'Chicago grew because the fire of 1871 cleared the old wooden city away '
               'and let the architects of the next generation build in steel on ground '
               'that nobody owned.'], key='A',
         faults={'B': ('true_not_asked', 'began trading contracts in grain in 1859'),
                 'C': ('underreach', 'grew quickly in the middle of the nineteenth '
                       'century'),
                 'D': ('imported', 'cleared the old wooden city away')},
         why="The goal is to explain the growth, so the sentence must name the two notes "
             "that account for it and tie them to the figures.",
         trap="D supplies a cause from outside the notes, and a fire in 1871 cannot "
              "explain growth that ended in 1870."),
    dict(strand='HIS-S08', pos=8,
         notes=['A historian counted runaway advertisements in 1,200 newspapers.',
                'The count covers the years from 1790 to 1860.',
                'Only newspapers that survive in libraries could be counted.',
                'Perhaps a third of the papers printed in the period survive.'],
         goal_text="state a limitation of the historian's count",
         rule='goal_limitation',
         rule_span='the count reaches only part of the advertisements that were published',
         opts=['The historian counted runaway advertisements in 1,200 newspapers printed '
               'between 1790 and 1860.',
               'The count covers the seventy years between 1790 and 1860.',
               'The count tells us nothing at all about the number of people who ran '
               'away.',
               'Because only about a third of the newspapers printed in those years '
               'survive, the count reaches only part of the advertisements that were '
               'published.'], key='D',
         faults={'A': ('wrong_goal', 'counted runaway advertisements in 1,200 newspapers '
                       'printed'),
                 'B': ('true_not_asked', 'covers the seventy years between 1790 and 1860'),
                 'C': ('overreach', 'tells us nothing at all about the number of people')},
         why="A limitation is what the method cannot reach, and only one sentence names "
             "the surviving third and what follows from it.",
         trap="C turns a limitation into a dismissal: a count of a third of the papers is "
              "partial, not worthless."),
    dict(strand='HIS-S09', pos=9,
         notes=['In 1860 the South had about 9,000 miles of railroad.',
                'The North had about 22,000 miles.',
                'Southern lines used five different track gauges.',
                'Northern lines had mostly settled on a single gauge by 1860.'],
         goal_text='compare the two railroad networks on how easily goods crossed them',
         rule='goal_compare',
         rule_span='which meant more changes of car for goods crossing the South',
         opts=['The South lost the war because its railroads ran on five gauges, which '
               'made it impossible to move men and supplies at the speed the Northern '
               'lines managed on one.',
               'The North had about 22,000 miles of railroad on mostly one gauge and the '
               'South about 9,000 on five, which meant more changes of car for goods '
               'crossing the South.',
               'The South had about 9,000 miles of railroad in 1860 and the North about '
               '22,000.',
               'The two railroad networks were not alike in 1860.'], key='B',
         faults={'A': ('overreach', 'lost the war because its railroads ran on five '
                       'gauges, which made it impossible'),
                 'C': ('true_not_asked', 'had about 9,000 miles of railroad in 1860'),
                 'D': ('underreach', 'were not alike in 1860')},
         why="The goal is to compare the networks on the movement of goods, so the "
             "sentence has to bring the gauges in and say what they cost a shipment.",
         trap="C compares the two networks on mileage alone, which is true and is not what "
              "the goal asked for."),
    dict(strand='HIS-S10', pos=10,
         notes=['A study used city directories to track where free black families lived in '
                '1850.',
                'Directories listed the heads of household who paid for an entry.',
                'Boarders and lodgers were seldom listed.',
                'In some wards a third of the adults were boarders.'],
         goal_text='state a limitation of using city directories for this purpose',
         rule='goal_limitation',
         rule_span='the study misses the boarders and lodgers who made up as much as a '
                   'third of the adults in some wards',
         opts=['The study used city directories to find where free black families lived in '
               '1850.',
               'City directories are useless as a source for the history of free black '
               'communities.',
               'In some wards of the city a third of the adults were boarders or lodgers.',
               'Because the directories listed only heads of household who paid for an '
               'entry, the study misses the boarders and lodgers who made up as much as a '
               'third of the adults in some wards.'], key='D',
         faults={'A': ('wrong_goal', 'used city directories to find where free black '
                       'families lived'),
                 'B': ('overreach', 'are useless as a source for the history'),
                 'C': ('true_not_asked', 'a third of the adults were boarders or lodgers')},
         why="The goal is a limitation of the source, so the sentence must join who the "
             "directories left out to what the study therefore cannot see.",
         trap="C gives the fact that makes the limitation serious but never says it is a "
              "limitation of anything."),
])

BIO = dict(domain='BIO', note_ar=(
    "ملاحظات الأحياء وعلوم الأرض تذكر طريقة القياس وحدوده، فيكثر فيها هدف ذكر الحدّ: "
    "أن يُطلب من الطالب أن يقول ما لا يبلغه المنهج لا ما وجده."), xs=[
    dict(strand='BIO-S01', pos=1,
         notes=['Tardigrades are animals less than a millimeter long.',
                'They live in moss, in soil and in the sea.',
                'In dry conditions they lose almost all their water and stop '
                'metabolizing.',
                'In that state they survive heat, cold and vacuum.'],
         goal_text='introduce tardigrades to a reader who has not heard of them',
         rule='goal_introduce',
         rule_span='animals less than a millimeter long that live in moss, in soil and in '
                   'the sea',
         opts=['In dry conditions a tardigrade loses almost all of its water and stops '
               'metabolizing.',
               'Tardigrades are very small animals that are found in a number of '
               'different places.',
               'Tardigrades are the hardiest animals that have ever been found anywhere '
               'on earth.',
               'Tardigrades are animals less than a millimeter long that live in moss, in '
               'soil and in the sea, and that survive heat, cold and vacuum by losing '
               'almost all their water.'], key='D',
         faults={'A': ('true_not_asked', 'loses almost all of its water and stops '
                       'metabolizing'),
                 'B': ('underreach', 'are very small animals that are found in a number '
                       'of different places'),
                 'C': ('overreach', 'the hardiest animals that have ever been found')},
         why="To introduce an animal is to say what it is, where it lives and what is "
             "remarkable about it, which one sentence here does and the others do not.",
         trap="C makes a claim of rank that the notes never offer: hardy in three ways is "
              "not hardiest of all."),
    dict(strand='BIO-S02', pos=2,
         notes=['A survey of a Costa Rican forest counted 9,000 beetle species.',
                'Sixty of them lived only in the canopy of a single species of tree.',
                'The survey took six years.',
                'Specimens were collected by fogging the canopy with insecticide.'],
         goal_text='state what the survey found about where the beetle species lived',
         rule='goal_finding',
         rule_span='sixty of the 9,000 beetle species it counted lived only in the canopy '
                   'of one species of tree',
         opts=['The specimens were collected over six years by fogging the canopy of the '
               'forest with insecticide.',
               'The survey found that sixty of the 9,000 beetle species it counted lived '
               'only in the canopy of one species of tree.',
               'The survey found beetles living in the canopy.',
               'Sixty beetle species lived only in one tree canopy, a finding that '
               'overturned every textbook estimate of the number of insect species on '
               'earth.'], key='B',
         faults={'A': ('true_not_asked', 'collected over six years by fogging the canopy'),
                 'C': ('underreach', 'found beetles living in the canopy'),
                 'D': ('imported', 'overturned every textbook estimate')},
         why="The goal asks what the survey found about where the species lived, so the "
             "sentence has to carry both the sixty and the single tree.",
         trap="D is the longest sentence of the four and its last clause appears nowhere in "
              "the notes."),
    dict(strand='BIO-S03', pos=3,
         notes=['The cane toad was brought to Queensland in 1935 to eat beetles.',
                'It carries poison glands on its shoulders.',
                'Australian predators had never met a poisonous toad.',
                'Goanna and quoll numbers fell sharply as the toad spread.'],
         goal_text='explain why the toad caused the fall in predator numbers',
         rule='goal_cause',
         rule_span='because Australian predators had never met a poisonous animal of the '
                   'kind and ate the toads anyway',
         opts=['Unlike the beetles it was brought to eat, the cane toad carries poison '
               'glands on its shoulders.',
               'The cane toad was bad for Australian predators.',
               'Goanna and quoll numbers fell as the cane toad spread because Australian '
               'predators had never met a poisonous animal of the kind and ate the toads '
               'anyway.',
               'Every species introduced to a new continent destroys the predators that '
               'live there.'], key='C',
         faults={'A': ('wrong_goal', 'Unlike the beetles it was brought to eat'),
                 'B': ('underreach', 'was bad for Australian predators'),
                 'D': ('overreach', 'Every species introduced to a new continent')},
         why="The goal is to explain the fall, so the sentence must join the toad's poison "
             "and the predators' inexperience to the numbers that fell.",
         trap="A sets the toad against the beetles, which is a contrast and not the "
              "explanation the goal asked for."),
    dict(strand='BIO-S04', pos=4,
         notes=['A C3 plant fixes carbon directly in the cells of its leaf.',
                'C3 plants lose water through open pores in hot weather.',
                'A C4 plant fixes carbon twice, in two kinds of cell.',
                'C4 plants can keep their pores closed for longer in the heat.'],
         goal_text='emphasize a difference between the two kinds of plant in hot weather',
         rule='goal_contrast',
         rule_span='a C4 plant fixes carbon twice and can keep its pores closed for longer',
         opts=['Where a C3 plant must keep its pores open and lose water in the heat, a C4 '
               'plant fixes carbon twice and can keep its pores closed for longer.',
               'A C3 plant fixes carbon directly in the cells of its leaf.',
               'C4 photosynthesis arose more than sixty times in separate plant families, '
               'which is why maize and sugar cane share a chemistry that wheat and rice do '
               'not.',
               'The two kinds of plant behave differently in the heat.'], key='A',
         faults={'B': ('true_not_asked', 'fixes carbon directly in the cells of its leaf'),
                 'C': ('imported', 'arose more than sixty times in separate plant '
                       'families'),
                 'D': ('underreach', 'behave differently in the heat')},
         why="The goal is a contrast in hot weather, so the sentence has to put the open "
             "pores of the one against the closed pores of the other.",
         trap="D announces a difference and names neither side of it, which is the emptiest "
              "kind of true sentence."),
    dict(strand='BIO-S05', pos=5,
         notes=['A blue whale calf gains about ninety kilograms a day.',
                'It drinks about two hundred liters of milk a day.',
                'A human infant gains about twenty-five grams a day.',
                'Whale milk is about half fat; human milk about four per cent.'],
         goal_text='compare the two kinds of milk on their fat content',
         rule='goal_compare',
         rule_span='Whale milk is about half fat while human milk is about four per cent',
         opts=['Human milk could never support the growth of a whale calf, and no '
               'mammal that lives on land produces milk that is anything like as '
               'rich.',
               'A blue whale calf drinks about two hundred liters of milk a day.',
               'The two kinds of milk are not the same in the things that they contain.',
               'Whale milk is about half fat while human milk is about four per cent, '
               'which is how a blue whale calf gains ninety kilograms in a day.'],
         key='D',
         faults={'A': ('overreach', 'could never support the growth of a whale '
                       'calf, and no mammal that lives on land'),
                 'B': ('true_not_asked', 'drinks about two hundred liters of milk a day'),
                 'C': ('underreach', 'are not the same in the things that they '
                       'contain')},
         why="To compare the milks on fat is to set the two percentages side by side, and "
             "only one sentence does it.",
         trap="A draws a conclusion about what human milk could do, which is a claim beyond "
              "anything the four notes contain."),
    dict(strand='BIO-S06', pos=6,
         notes=['A study tagged a hundred loggerhead turtles hatched on one Florida beach.',
                'Ninety of the tags were never recovered.',
                'Of the ten recovered, eight came from the Azores.',
                'The journey is about six thousand kilometers.'],
         goal_text='state what the study found about where the hatchlings went',
         rule='goal_finding',
         rule_span='eight came from the Azores, some six thousand kilometers from the beach '
                   'where the turtles hatched',
         opts=['Ninety of the hundred tags that the study attached to loggerhead '
               'hatchlings on the Florida beach were never recovered from anywhere at '
               'all.',
               'The study found that the hatchlings traveled a long way from the beach.',
               'Of the ten tags the study recovered, eight came from the Azores, some six '
               'thousand kilometers from the beach where the turtles hatched.',
               'Eight of the ten tags came from the Azores, where the hatchlings ride the '
               'Gulf Stream for as long as ten years.'], key='C',
         faults={'A': ('true_not_asked', 'were never recovered from anywhere at all'),
                 'B': ('underreach', 'traveled a long way from the beach'),
                 'D': ('imported', 'ride the Gulf Stream for as long as ten years')},
         why="The goal asks where the hatchlings went, and what the study found is the "
             "eight tags from the Azores and the distance they imply.",
         trap="A is true, and is the longest option, and answers a question about the "
              "method rather than about the turtles."),
    dict(strand='BIO-S07', pos=7,
         notes=['A team measured ice loss in Greenland from satellite gravity data.',
                'The satellites were in orbit from 2002 to 2017.',
                'Gravity data cannot separate ice loss from the slow rise of bedrock.',
                'The correction for the bedrock comes from a model.'],
         goal_text='state a limitation of the measurement',
         rule='goal_limitation',
         rule_span='the figure depends on a model of that rise rather than on a '
                   'measurement of it',
         opts=['The team measured the loss of ice in Greenland from satellite gravity data '
               'gathered between 2002 and 2017.',
               'Because the gravity data cannot separate the loss of ice from the slow '
               'rise of the bedrock beneath it, the figure depends on a model of that rise '
               'rather than on a measurement of it.',
               'Satellite gravity data cannot tell us anything about how much ice '
               'Greenland has lost.',
               'The satellites that gathered the data were in orbit from 2002 until 2017.'],
         key='B',
         faults={'A': ('wrong_goal', 'measured the loss of ice in Greenland from satellite '
                       'gravity data'),
                 'C': ('overreach', 'cannot tell us anything about how much ice'),
                 'D': ('true_not_asked', 'were in orbit from 2002 until 2017')},
         why="A limitation is what the method cannot do, so the sentence has to name the "
             "two quantities the data cannot separate.",
         trap="C turns a dependence on one model into a verdict that the data are useless."),
    dict(strand='BIO-S08', pos=8,
         notes=['The 1988 Yellowstone fires burned thirty-six per cent of the park.',
                'Fires had been suppressed there for most of the century.',
                'Suppression let dead wood build up on the forest floor.',
                'The summer of 1988 was the driest on record in the park.'],
         goal_text='explain why the 1988 fires burned so much of the park',
         rule='goal_cause',
         rule_span='because decades of suppression had left dead wood on the forest floor '
                   'and the summer was the driest on record',
         opts=['The fires of 1988 burned more than a third of Yellowstone because decades '
               'of suppression had left dead wood on the forest floor and the summer was '
               'the driest on record.',
               'The fires of 1988 burned thirty-six per cent of the area of the park.',
               'Conditions in the park in the summer of 1988 were right for a fire of '
               'that size.',
               'The fires burned a third of the park because the policy of putting out '
               'every fire had been written in 1886 by the cavalry officers who were then '
               'running it.'], key='A',
         faults={'B': ('true_not_asked', 'burned thirty-six per cent of the area of the '
                       'park'),
                 'C': ('underreach', 'were right for a fire of that size'),
                 'D': ('imported', 'written in 1886 by the cavalry officers')},
         why="The goal is to explain the extent of the fires, so the sentence must carry "
             "both the fuel and the drought.",
         trap="D supplies a date and an author for the suppression policy that the notes "
              "say nothing about."),
    dict(strand='BIO-S09', pos=9,
         notes=['A study of bird song used recordings made in city parks.',
                'It found that city birds sing at a higher pitch than country birds.',
                'The recordings were made between six and nine in the morning.',
                'Traffic noise is at its lowest in those hours.'],
         goal_text='state a limitation of the recording method',
         rule='goal_limitation',
         rule_span='the study cannot say how the birds of a city sing for the rest of the '
                   'day',
         opts=['The study compared its recordings from the city parks with recordings '
               'made in the country and found that the birds of the city sing at a '
               'noticeably higher pitch than the birds outside it do.',
               'Recordings made in the morning can tell us nothing about the song of city '
               'birds.',
               'Because every recording was made between six and nine in the morning, when '
               'traffic noise is at its lowest, the study cannot say how the birds of a '
               'city sing for the rest of the day.',
               'Traffic noise in a city is at its lowest between six and nine in the '
               'morning.'], key='C',
         faults={'A': ('wrong_goal', 'compared its recordings from the city parks with '
                       'recordings made in the country'),
                 'B': ('overreach', 'can tell us nothing about the song of city birds'),
                 'D': ('true_not_asked', 'is at its lowest between six and nine')},
         why="The limitation is that the hours chosen are the quiet hours, so the sentence "
             "must say what those hours leave out.",
         trap="A is the longest and most careful sentence here, and it states the finding "
              "rather than the limitation the goal asked for."),
    dict(strand='BIO-S10', pos=10,
         notes=["A hummingbird's heart beats about 1,200 times a minute in flight.",
                'Its heart is about 2.5 per cent of its body weight.',
                "A blue whale's heart beats about eight times a minute at the surface.",
                "The whale's heart is about half of one per cent of its body weight."],
         goal_text='compare the two hearts on their rate and on their relative size',
         rule='goal_compare',
         rule_span='makes up 2.5 per cent of its weight',
         opts=["A hummingbird's heart beats about 1,200 times a minute and makes up 2.5 "
               "per cent of its weight, while a blue whale's beats about eight times and "
               'makes up half of one per cent.',
               "A blue whale's heart beats about eight times a minute when the animal is "
               'at the surface.',
               'The two hearts are not alike in their rate or in their size.',
               'The smaller an animal is the faster and the relatively larger its '
               'heart must be, which is the rule these two animals illustrate at the '
               'two extremes of the vertebrates.'], key='A',
         faults={'B': ('true_not_asked', 'beats about eight times a minute when the animal '
                       'is at the surface'),
                 'C': ('underreach', 'are not alike in their rate or in their size'),
                 'D': ('overreach', 'The smaller an animal is the faster')},
         why="The goal names two dimensions, rate and relative size, so the sentence has to "
             "compare the hearts on both of them.",
         trap="D states a law of biology where the goal asked for a comparison of two "
              "animals."),
])

PHY = dict(domain='PHY', note_ar=(
    "ملاحظات العلوم الفيزيائية تجمع قيمة القياس وقيمة التوقّع، فيكثر فيها الخيار الذي "
    "يذكر الرقم الصحيح في غير ما سُئل عنه، ويكثر هدف المقارنة بين طريقتين."), xs=[
    dict(strand='PHY-S01', pos=1,
         notes=['The 1919 expedition photographed stars near the eclipsed sun.',
                'It measured a deflection of about 1.6 seconds of arc.',
                'Newtonian physics predicted about 0.9 seconds.',
                'General relativity predicted about 1.75 seconds.'],
         goal_text='state what the expedition found about the deflection',
         rule='goal_finding',
         rule_span='a deflection of about 1.6 seconds of arc, close to the 1.75 that '
                   'general relativity had predicted',
         opts=['The expedition measured a deflection of about 1.6 seconds of arc, close to '
               'the 1.75 that general relativity had predicted.',
               'The expedition measured a deflection of starlight near the eclipsed sun.',
               'Newtonian physics predicted a deflection of about nine tenths of a second '
               'of arc.',
               'The expedition measured about 1.6 seconds of arc, a result its critics '
               'said rested on two photographic plates out of sixteen.'], key='A',
         faults={'B': ('underreach', 'measured a deflection of starlight near the eclipsed '
                       'sun'),
                 'C': ('true_not_asked', 'predicted a deflection of about nine tenths'),
                 'D': ('imported', 'rested on two photographic plates out of sixteen')},
         why="The goal asks what was found, so the sentence has to give the figure "
             "measured and set it beside the prediction it matched.",
         trap="D adds a complaint about the plates that appears in none of the notes."),
    dict(strand='PHY-S02', pos=2,
         notes=['A superconductor carries current with no resistance at all.',
                'The effect appears below a critical temperature.',
                'For mercury that temperature is 4.2 kelvin.',
                'Some ceramic compounds reach it above 90 kelvin.'],
         goal_text='introduce superconductors to a reader meeting them for the first time',
         rule='goal_introduce',
         rule_span='carries current with no resistance at all once it is cooled below a '
                   'critical temperature',
         opts=['Some ceramic compounds become superconducting above ninety kelvin.',
               'A superconductor is a special kind of material used in physics '
               'laboratories.',
               'A superconductor is a material that carries current with no resistance at '
               'all once it is cooled below a critical temperature, which for mercury is '
               '4.2 kelvin.',
               'Superconductors will one day carry the whole electrical supply of a '
               'country without loss.'], key='C',
         faults={'A': ('true_not_asked', 'become superconducting above ninety kelvin'),
                 'B': ('underreach', 'a special kind of material used in physics '
                       'laboratories'),
                 'D': ('overreach', 'will one day carry the whole electrical supply')},
         why="To introduce the thing is to say what it does and under what condition, "
             "which one sentence does with a figure to anchor it.",
         trap="B calls the material special and says nothing at all about what makes it "
              "so."),
    dict(strand='PHY-S03', pos=3,
         notes=['A refracting telescope of forty inches was built at Yerkes in 1897.',
                'It is the largest refractor ever made.',
                'The Hale telescope at Palomar is a reflector of two hundred inches.',
                'A lens must be held at its edge; a mirror can be held from behind.'],
         goal_text='compare the two designs on the size each can reach',
         rule='goal_compare',
         rule_span='because a lens can only be held at its edge, while a mirror held from '
                   'behind reaches two hundred',
         opts=['The Yerkes refractor of 1897 is the largest telescope of its kind ever '
               'made.',
               'The Hale telescope at Palomar is a reflector of two hundred inches.',
               'No refracting telescope will ever be built larger than the one at Yerkes, '
               'because glass cannot be made to hold its shape at any greater size at '
               'all.',
               'The largest refractor ever built reached forty inches because a lens can '
               'only be held at its edge, while a mirror held from behind reaches two '
               'hundred.'], key='D',
         faults={'A': ('wrong_goal', 'is the largest telescope of its kind ever made'),
                 'B': ('true_not_asked', 'is a reflector of two hundred inches'),
                 'C': ('overreach', 'No refracting telescope will ever be built larger')},
         why="To compare the designs on size is to give both sizes and the reason behind "
             "them, which one sentence manages in a single clause each.",
         trap="C turns a limit that has held so far into a law about all future "
              "telescopes."),
    dict(strand='PHY-S04', pos=4,
         notes=['The Tacoma Narrows bridge opened in July 1940.',
                'Its deck was a shallow plate girder rather than an open truss.',
                'Wind could not pass through the deck.',
                'The deck twisted itself apart in a forty-mile wind in November.'],
         goal_text='explain why the bridge failed in a wind it should have survived',
         rule='goal_cause',
         rule_span='because its shallow plate girder, unlike an open truss, gave the wind '
                   'nothing to pass through',
         opts=['The bridge failed in November of the year that it opened because of the '
               'wind.',
               'The deck failed in a forty-mile wind because its shallow plate girder, '
               'unlike an open truss, gave the wind nothing to pass through.',
               'The bridge failed because its deck had been designed two feet thinner than '
               'the engineers of the day thought safe for a span of that length.',
               'Any bridge with a plate girder deck will twist itself apart in a strong '
               'wind.'], key='B',
         faults={'A': ('underreach', 'failed in November of the year that it opened'),
                 'C': ('imported', 'designed two feet thinner than the engineers of the '
                       'day'),
                 'D': ('overreach', 'Any bridge with a plate girder deck')},
         why="The goal is to explain the failure, so the sentence must name the feature of "
             "the deck that the wind could not get past.",
         trap="C invents a figure for the thickness of the deck that the notes never give."),
    dict(strand='PHY-S05', pos=5,
         notes=['A hot-air balloon rises because the air inside it is less dense.',
                'It can rise only while that air is kept hot.',
                'A hydrogen balloon rises because hydrogen is lighter than air.',
                'It rises with no heat at all.'],
         goal_text='emphasize a difference between the two kinds of balloon',
         rule='goal_contrast',
         rule_span='whereas a hydrogen balloon rises with no heat at all because the gas '
                   'itself is lighter than air',
         opts=['A hot-air balloon rises only while its air is kept hot, whereas a hydrogen '
               'balloon rises with no heat at all because the gas itself is lighter than '
               'air.',
               'A hot-air balloon rises because the air inside it is less dense than the '
               'air outside it.',
               'The two kinds of balloon work in rather different ways from each other.',
               'A hot-air balloon must be fired every few minutes, which is why the first '
               'crossing of the Channel in 1785 was made with hydrogen.'], key='A',
         faults={'B': ('true_not_asked', 'rises because the air inside it is less dense'),
                 'C': ('underreach', 'work in rather different ways from each other'),
                 'D': ('imported', 'the first crossing of the Channel in 1785')},
         why="The goal is a contrast, so the sentence has to hold both balloons and the "
             "thing that separates them, which is the heat.",
         trap="D brings in a crossing of the Channel that no note mentions."),
    dict(strand='PHY-S06', pos=6,
         notes=['A diamond and a graphite crystal are both nothing but carbon.',
                'In diamond each atom is bonded to four others in a rigid frame.',
                'In graphite the atoms lie in sheets held together weakly.',
                'Graphite marks paper; diamond cuts glass.'],
         goal_text='explain why the two forms of carbon behave so differently',
         rule='goal_cause',
         rule_span='because the atoms of a diamond are bonded in four directions into a '
                   'rigid frame while those of graphite lie in sheets that slide',
         opts=['Unlike graphite, which marks paper, diamond is hard enough to cut glass.',
               'The two forms of carbon are built differently on the inside.',
               'A diamond crystal and a graphite crystal are both nothing but carbon.',
               'Diamond cuts glass and graphite marks paper because the atoms of a diamond '
               'are bonded in four directions into a rigid frame while those of graphite '
               'lie in sheets that slide.'], key='D',
         faults={'A': ('wrong_goal', 'Unlike graphite, which marks paper'),
                 'B': ('underreach', 'are built differently on the inside'),
                 'C': ('true_not_asked', 'are both nothing but carbon')},
         why="The goal is to explain the difference in behavior, so the sentence must tie "
             "the two structures to the two things the materials do.",
         trap="A states the difference it was asked to explain and offers no explanation of "
              "it at all."),
    dict(strand='PHY-S07', pos=7,
         notes=['Sound travels about 340 meters a second in air.',
                'It travels about 1,500 meters a second in water.',
                'Water is about eight hundred times denser than air.',
                'Water is far less compressible than air.'],
         goal_text='compare the two media on the speed of sound through them',
         rule='goal_compare',
         rule_span='about 1,500 meters a second in water and about 340 in air',
         opts=['Sound travels faster through any medium that is denser, which is why it '
               'moves four times as fast in water as in air and faster still in a bar of '
               'steel.',
               'Water is some eight hundred times denser than the air above it.',
               'Sound travels about 1,500 meters a second in water and about 340 in air, '
               'because water resists compression far more than air does.',
               'Sound moves at different speeds in air and in water.'], key='C',
         faults={'A': ('overreach', 'faster through any medium that is denser'),
                 'B': ('true_not_asked', 'eight hundred times denser than the air above '
                       'it'),
                 'D': ('underreach', 'moves at different speeds in air and in water')},
         why="To compare the media is to give both speeds, and the notes allow the reason "
             "to be given with them.",
         trap="A builds a general law out of two measurements, and the law it builds is the "
              "wrong one."),
    dict(strand='PHY-S08', pos=8,
         notes=['A laboratory measured the half-life of a nucleus by counting decays.',
                'It counted for twelve hours.',
                'The half-life came out at about four thousand years.',
                'Fewer than two hundred decays were recorded.'],
         goal_text='state a limitation of the measurement',
         rule='goal_limitation',
         rule_span='the half-life rests on too few events to be quoted closely',
         opts=['The laboratory measured the half-life of the nucleus by counting its '
               'decays for twelve hours.',
               'Because fewer than two hundred decays were counted in the twelve hours of '
               'the run, the half-life rests on too few events to be quoted closely.',
               'A count of two hundred decays tells us nothing about the half-life of a '
               'nucleus, and a figure drawn from one cannot be called a measurement at '
               'all.',
               'The half-life the laboratory reported came out at about four thousand '
               'years.'], key='B',
         faults={'A': ('wrong_goal', 'measured the half-life of the nucleus by counting '
                       'its decays'),
                 'C': ('overreach', 'tells us nothing about the half-life of a nucleus'),
                 'D': ('true_not_asked', 'came out at about four thousand years')},
         why="A limitation is what the run could not deliver, and the sentence has to name "
             "the number of events and what follows from it.",
         trap="C is the longest sentence here and it throws the measurement away rather "
              "than stating its limit."),
    dict(strand='PHY-S09', pos=9,
         notes=['A 2015 experiment cooled a gas of rubidium to 500 nanokelvin.',
                'Below that point the atoms occupied a single quantum state.',
                'The cloud held about two thousand atoms.',
                'It was held in a magnetic trap for thirty seconds.'],
         goal_text='state what the experiment found about the atoms below that temperature',
         rule='goal_finding',
         rule_span='the two thousand atoms of the cloud occupied one quantum state '
                   'together',
         opts=['The cloud of rubidium was held in a magnetic trap for thirty seconds.',
               'The experiment found that very cold atoms behave in a strange way.',
               'Below five hundred nanokelvin the atoms occupied a single quantum state, '
               'the condensate that Einstein and Bose had predicted seventy years before.',
               'The experiment found that below five hundred nanokelvin the two thousand '
               'atoms of the cloud occupied one quantum state together.'], key='D',
         faults={'A': ('true_not_asked', 'held in a magnetic trap for thirty seconds'),
                 'B': ('underreach', 'very cold atoms behave in a strange way'),
                 'C': ('imported', 'Einstein and Bose had predicted seventy years before')},
         why="The goal asks what was found below the temperature, so the sentence reports "
             "the single state and the number of atoms in it.",
         trap="C names two physicists and a prediction that no note contains, however true "
              "the history happens to be."),
    dict(strand='PHY-S10', pos=10,
         notes=['A climate model was tested against temperatures from 1900 to 2000.',
                'It reproduced the century to within a tenth of a degree.',
                'The model was tuned using data from the same century.',
                'No independent century of data exists.'],
         goal_text='state a limitation of the test',
         rule='goal_limitation',
         rule_span='its agreement with that century is not an independent test of it',
         opts=['The model reproduced the temperatures of the twentieth century to within a '
               'tenth of a degree.',
               'Because the model was tuned on the same century it was then asked to '
               'reproduce, its agreement with that century is not an independent test of '
               'it.',
               'A model tuned on past data can never tell us anything about the climate of '
               'the future, and no result it produces should be published or believed at '
               'all.',
               'No century of temperature data independent of the one used to tune the '
               'model exists.'], key='B',
         faults={'A': ('wrong_goal', 'reproduced the temperatures of the twentieth '
                       'century'),
                 'C': ('overreach', 'can never tell us anything about the climate of the '
                       'future'),
                 'D': ('true_not_asked', 'No century of temperature data independent')},
         why="The limitation is the circle between the tuning and the test, and only one "
             "sentence closes that circle and says what it costs.",
         trap="C condemns a whole method where the goal asked for the limit of one test."),
])

HUM = dict(domain='HUM', note_ar=(
    "ملاحظات الإنسانيات تجمع العنوان والتاريخ والحكم النقدي، فيكثر فيها الخيار الذي "
    "يزيد حكماً نقديّاً ليس في الملاحظات. ولذلك جُعل هذا المجال أصل الفصل، وفيه أهداف "
    "المقارنة والتفسير وذكر الحدّ على اتّساعها."), xs=[
    dict(strand='HUM-S01', pos=1,
         notes=['A Noh play is a Japanese drama with masks and a chorus.',
                'The form was settled in the fourteenth century.',
                'A full program lasts most of a day.',
                'Five plays are performed in a fixed order.'],
         goal_text='introduce Noh drama to a reader who has never seen it',
         rule='goal_introduce',
         rule_span='a Japanese drama of masks and chorus, settled in the fourteenth '
                   'century',
         opts=['A full program of Noh plays runs for most of a day.',
               'Noh is a Japanese drama of masks and chorus, settled in the fourteenth '
               'century, whose five plays are performed in a fixed order over most of a '
               'day.',
               'Noh is a kind of Japanese play with a long history behind it.',
               'Noh is the oldest theatrical form still performed anywhere in the world.'],
         key='B',
         faults={'A': ('true_not_asked', 'runs for most of a day'),
                 'C': ('underreach', 'a kind of Japanese play with a long history'),
                 'D': ('overreach', 'the oldest theatrical form still performed anywhere')},
         why="To introduce the form is to say what it is, when it was settled and how it "
             "is performed, which one sentence does in a single line.",
         trap="D makes a claim of priority over every theater in the world that the notes "
              "do not support."),
    dict(strand='HUM-S02', pos=2,
         notes=['A scholar collated sixty early copies of a medieval poem.',
                'No two of the copies agree on every line.',
                'Half of the copies share one distinctive error.',
                'That half must descend from a single lost manuscript.'],
         goal_text='state what the collation found about how the copies are related',
         rule='goal_finding',
         rule_span='half of the sixty copies share one distinctive error and so must '
                   'descend from a single lost manuscript',
         opts=['No two of the sixty early copies agree with each other on every line.',
               'The collation found that the copies are related to one another in some '
               'way.',
               'Half the copies share one error, which suggests that the lost manuscript '
               'was written in a Yorkshire abbey late in the fourteenth century.',
               'The collation found that half of the sixty copies share one distinctive '
               'error and so must descend from a single lost manuscript.'], key='D',
         faults={'A': ('true_not_asked', 'agree with each other on every line'),
                 'B': ('underreach', 'are related to one another in some way'),
                 'C': ('imported', 'written in a Yorkshire abbey')},
         why="The goal asks what the collation found about the relation between the copies, "
             "and the finding is the shared error and the descent it implies.",
         trap="C places the lost manuscript in a county and a decade that appear in none "
              "of the notes."),
    dict(strand='HUM-S03', pos=3,
         notes=['A Greek tragedy keeps its violence off the stage.',
                'A messenger reports the violence in a speech.',
                'An Elizabethan tragedy stages the violence in front of the audience.',
                'Both forms end with the stage full of the dead.'],
         goal_text='emphasize a difference between the two traditions',
         rule='goal_contrast',
         rule_span='an Elizabethan tragedy puts the violence on the stage in front of the '
                   'audience',
         opts=['Where a Greek tragedy sends a messenger in to report its violence, an '
               'Elizabethan tragedy puts the violence on the stage in front of the '
               'audience.',
               'Both traditions end with a stage full of the dead.',
               'The two traditions handled the violence in their stories differently.',
               'Greek tragedy kept its violence offstage because the theater of Dionysus '
               'seated fourteen thousand people and the back rows could see nothing of it '
               'in any detail.'], key='A',
         faults={'B': ('true_not_asked', 'end with a stage full of the dead'),
                 'C': ('underreach', 'handled the violence in their stories differently'),
                 'D': ('imported', 'seated fourteen thousand people')},
         why="The goal is a contrast, so the sentence must carry the messenger on one side "
             "and the staged killing on the other.",
         trap="D explains the Greek practice with a fact about the size of a theater that "
              "no note supplies."),
    dict(strand='HUM-S04', pos=4,
         notes=['Austen published four novels in her lifetime, all anonymously.',
                'Each sold a few thousand copies.',
                'Dickens published fifteen, under his own name.',
                'His monthly parts sold forty thousand a number.'],
         goal_text='compare the two writers on the size of their audience',
         rule='goal_compare',
         rule_span="while Dickens's monthly parts sold forty thousand a number under his "
                   'own name',
         opts=['Dickens was the better novelist of the two because more people read him.',
               'Austen published four novels in her lifetime and all of them anonymously.',
               "Austen's four novels sold a few thousand copies each and appeared "
               "anonymously, while Dickens's monthly parts sold forty thousand a number "
               'under his own name.',
               'The two writers had audiences of rather different sizes in their own '
               'lifetimes.'], key='C',
         faults={'A': ('overreach', 'the better novelist of the two'),
                 'B': ('true_not_asked', 'published four novels in her lifetime'),
                 'D': ('underreach', 'audiences of rather different sizes')},
         why="To compare the audiences is to put the few thousand against the forty "
             "thousand, which one sentence does and the others avoid.",
         trap="A turns a difference in sales into a judgment of merit the notes cannot "
              "support."),
    dict(strand='HUM-S05', pos=5,
         notes=['The Globe burned down in 1613 during a performance.',
                'A cannon was fired from the roof as a stage effect.',
                'The roof was thatched.',
                'The rebuilt theater had a roof of tile.'],
         goal_text='explain why the theater burned',
         rule='goal_cause',
         rule_span='because a cannon fired from the roof as a stage effect set the thatch '
                   'alight',
         opts=['Unlike the theater that burned, the rebuilt Globe was roofed with tile.',
               'The Globe burned in 1613 because a cannon fired from the roof as a stage '
               'effect set the thatch alight.',
               'The Globe burned down in the course of a performance in 1613.',
               'The Globe burned because a cannon was fired into a thatched roof that the '
               'company had been warned about twice by the authorities of the city.'],
         key='B',
         faults={'A': ('wrong_goal', 'the rebuilt Globe was roofed with tile'),
                 'C': ('underreach', 'burned down in the course of a performance'),
                 'D': ('imported', 'warned about twice by the authorities of the city')},
         why="The goal is to explain the fire, so the sentence must put the cannon and the "
             "thatch in one line.",
         trap="D adds a warning from the city that appears in none of the four notes."),
    dict(strand='HUM-S06', pos=6,
         notes=['A sonnet by Petrarch turns after its eighth line.',
                'Its last six lines answer the first eight.',
                'A sonnet by Shakespeare turns after the twelfth.',
                'Its last two lines answer the first twelve.'],
         goal_text='emphasize a difference between the two sonnet forms',
         rule='goal_contrast',
         rule_span='while a Shakespearean sonnet saves its turn for a closing couplet',
         opts=['A Petrarchan sonnet turns after its eighth line and answers itself in six, '
               'while a Shakespearean sonnet saves its turn for a closing couplet.',
               'The last six lines of a Petrarchan sonnet answer its first eight.',
               'The two forms of the sonnet turn at different places in the poem.',
               'The Shakespearean form puts its turn in the last two lines because English '
               'rhymes are scarcer than Italian ones and a long answer is harder to '
               'sustain in them.'], key='A',
         faults={'B': ('true_not_asked', 'answer its first eight'),
                 'C': ('underreach', 'turn at different places in the poem'),
                 'D': ('imported', 'English rhymes are scarcer than Italian ones')},
         why="The goal is a contrast between the forms, so the sentence has to name where "
             "each one turns and how long its answer runs.",
         trap="D explains the English form with a claim about rhyme that no note makes."),
    dict(strand='HUM-S07', pos=7,
         notes=['A study of the Victorian reading public counted library borrowings.',
                'It used the registers of twelve subscription libraries.',
                'A subscription cost a guinea a year.',
                'A laborer earned about fifty pounds a year.'],
         goal_text='state a limitation of using subscription registers for this purpose',
         rule='goal_limitation',
         rule_span='the registers show what the comfortable borrowed and not what the '
                   'public read',
         opts=['The study counted the borrowings recorded in the registers of twelve '
               'subscription libraries.',
               'Subscription registers tell us nothing at all about Victorian reading.',
               'A subscription to one of the twelve libraries in the study cost a '
               'guinea for the year.',
               'Because a subscription cost a guinea a year when a laborer earned about '
               'fifty pounds, the registers show what the comfortable borrowed and not '
               'what the public read.'], key='D',
         faults={'A': ('wrong_goal', 'counted the borrowings recorded in the registers'),
                 'B': ('overreach', 'tell us nothing at all about Victorian reading'),
                 'C': ('true_not_asked', 'one of the twelve libraries in the study')},
         why="The limitation is who a guinea excluded, so the sentence must set the price "
             "against the wage and say what the registers therefore show.",
         trap="B throws the source away, when a source that covers the comfortable is "
              "narrow rather than worthless."),
    dict(strand='HUM-S08', pos=8,
         notes=['A medieval scribe could copy about four pages a day.',
                'A single Bible took one scribe more than a year.',
                "Gutenberg's press printed about 250 pages a day.",
                'His first run came to about 180 copies.'],
         goal_text='compare the two methods on how fast a page could be produced',
         rule='goal_compare',
         rule_span='which is why a book that took a scribe a year came off the press in '
                   'weeks',
         opts=["Gutenberg's first run of the Bible came to about a hundred and eighty "
               'copies.',
               'The press was a good deal faster than the scribe who worked by hand.',
               'A scribe could copy about four pages a day where the press printed some '
               'two hundred and fifty, which is why a book that took a scribe a year came '
               'off the press in weeks.',
               'The press made the scribe obsolete within one generation and ended the '
               'manuscript book as a way of publishing anything at all.'], key='C',
         faults={'A': ('true_not_asked', 'came to about a hundred and eighty copies'),
                 'B': ('underreach', 'a good deal faster than the scribe'),
                 'D': ('overreach', 'made the scribe obsolete within one generation')},
         why="To compare the methods on speed is to give both rates, and the notes let the "
             "comparison be carried through to a whole book.",
         trap="D claims an end to the manuscript book that the four notes say nothing "
              "about."),
    dict(strand='HUM-S09', pos=9,
         notes=['The first folio of 1623 gathered thirty-six plays.',
                'Eighteen of them had never been printed before.',
                'Two actors of the company assembled it.',
                'Without it those eighteen plays would be lost.'],
         goal_text='explain why the folio matters to us',
         rule='goal_cause',
         rule_span='because eighteen of its thirty-six plays had never been printed',
         opts=['The folio matters because eighteen of its thirty-six plays had never been '
               'printed, and without the two actors who gathered them those eighteen would '
               'be lost.',
               'Two actors of the company put the folio of 1623 together.',
               'The folio is an important book in the history of the drama.',
               'The folio matters because it preserves eighteen plays, and because its '
               'editors worked from the playhouse books rather than from the pirated '
               'quartos then circulating in London.'], key='A',
         faults={'B': ('true_not_asked', 'put the folio of 1623 together'),
                 'C': ('underreach', 'an important book in the history of the drama'),
                 'D': ('imported', 'worked from the playhouse books')},
         why="The goal is to explain why the book matters, so the sentence must join the "
             "eighteen unprinted plays to what would have happened without it.",
         trap="D adds a claim about the editors' copy-text that the notes nowhere make."),
    dict(strand='HUM-S10', pos=10,
         notes=['A study of theatrical taste counted newspaper reviews from 1890 to 1914.',
                'It used the eight London papers that survive in a complete run.',
                'Those eight were read mostly by the middle class.',
                'The music halls were reviewed in none of them.'],
         goal_text='state a limitation of the sample of papers',
         rule='goal_limitation',
         rule_span='the study misses much of the theatrical public of the city',
         opts=['The study counted theatrical reviews printed in London newspapers between '
               '1890 and 1914.',
               'None of the eight papers reviewed the music halls at all.',
               'Because the eight surviving papers were read mostly by the middle class '
               'and reviewed none of the music halls, the study misses much of the '
               'theatrical public of the city.',
               'A study built on eight newspapers can say nothing about what audiences in '
               'London liked, and the surviving reviews are worthless as evidence of what '
               'the city enjoyed.'], key='C',
         faults={'A': ('wrong_goal', 'counted theatrical reviews printed in London '
                       'newspapers'),
                 'B': ('true_not_asked', 'reviewed the music halls at all'),
                 'D': ('overreach', 'are worthless as evidence')},
         why="The limitation is which public the eight papers reached, so the sentence has "
             "to say who read them and what they left out.",
         trap="D is the longest sentence of the four and it dismisses the evidence instead "
              "of bounding it."),
])

SOC = dict(domain='SOC', note_ar=(
    "ملاحظات العلوم الاجتماعية تجمع حجم العيّنة وطريقة جمعها ونتيجتها، فيكثر فيها هدف "
    "ذكر حدّ المنهج: من لم تبلغه العيّنة ولماذا. والخيار الذي يذكر الرقم الصحيح من غير "
    "أن يذكر ما سُئل عنه هو أكثر ما يقع فيه الطالب في هذا المجال."), xs=[
    dict(strand='SOC-S01', pos=1,
         notes=['A study followed twelve hundred families for twenty years.',
                'Half of the families moved at least four times.',
                'Children in the families that moved often changed schools more.',
                'Those children finished school about a year later.'],
         goal_text='state what the study found about the children who moved often',
         rule='goal_finding',
         rule_span='changed schools more and finished school about a year later',
         opts=['Half of the twelve hundred families in the study moved at least four '
               'times.',
               'The study found that moving has an effect on children.',
               'The study found that children in the families that moved often changed '
               'schools more and finished school about a year later.',
               'Children who moved often finished school a year later, a gap that closed '
               'when the family moved inside the same school district.'], key='C',
         faults={'A': ('true_not_asked', 'moved at least four times'),
                 'B': ('underreach', 'moving has an effect on children'),
                 'D': ('imported', 'a gap that closed when the family moved inside the '
                       'same school district')},
         why="The goal asks what the study found about those children, so the sentence "
             "carries both the schools and the year.",
         trap="D adds a condition under which the gap closed, and no note reports any such "
              "thing."),
    dict(strand='SOC-S02', pos=2,
         notes=['The Current Population Survey interviews sixty thousand households a '
                'month.',
                'It has run since 1940.',
                'It produces the monthly unemployment rate.',
                'Each household stays in the sample for sixteen months.'],
         goal_text='introduce the survey to a reader who has not heard of it',
         rule='goal_introduce',
         rule_span='has interviewed sixty thousand households a month since 1940',
         opts=['The Current Population Survey has interviewed sixty thousand households a '
               'month since 1940 and is where the monthly unemployment rate comes from.',
               'Each household stays in the sample of the survey for sixteen months.',
               'The survey is a large survey of households carried out every month.',
               'The survey is the most important statistical program in the world.'],
         key='A',
         faults={'B': ('true_not_asked', 'stays in the sample of the survey for sixteen '
                       'months'),
                 'C': ('underreach', 'a large survey of households carried out every '
                       'month'),
                 'D': ('overreach', 'the most important statistical program in the world')},
         why="To introduce the survey is to say how large it is, how long it has run and "
             "what it produces, which one sentence does.",
         trap="D ranks the survey against every other in the world on no evidence at all."),
    dict(strand='SOC-S03', pos=3,
         notes=['Detroit lost half its population between 1950 and 2010.',
                'Car plants moved to suburban and southern sites after 1950.',
                'Federal mortgage rules favored new suburban houses.',
                'The city kept its boundaries unchanged.'],
         goal_text='explain why the city lost so many people',
         rule='goal_cause',
         rule_span='because the car plants moved out after 1950 and federal mortgage rules '
                   'paid for the suburban houses their workers moved into',
         opts=['Detroit lost a great many people over those sixty years.',
               'Detroit lost half its people because the car plants moved out after 1950 '
               'and federal mortgage rules paid for the suburban houses their workers '
               'moved into.',
               'The boundaries of the city did not change over those sixty years.',
               'Detroit lost half its people because the plants moved out, the mortgage '
               'rules favored the suburbs, and the freeways built in the 1960s cut the old '
               'neighborhoods apart.'], key='B',
         faults={'A': ('underreach', 'lost a great many people over those sixty years'),
                 'C': ('true_not_asked', 'boundaries of the city did not change'),
                 'D': ('imported', 'the freeways built in the 1960s cut the old '
                       'neighborhoods apart')},
         why="The goal is to explain the loss, so the sentence must join the plants and the "
             "mortgage rules to the people who left.",
         trap="D is the fullest explanation of the four and its third cause appears in none "
              "of the notes."),
    dict(strand='SOC-S04', pos=4,
         notes=['In 1960 one American household in eight had no telephone.',
                'A telephone survey then reached seven households in eight.',
                'In 2020 nearly every household had a telephone.',
                'Fewer than one household in ten answered a call from an unknown number.'],
         goal_text='compare the two decades on how well a telephone survey could reach '
                   'people',
         rule='goal_compare',
         rule_span='while in 2020 almost every household had a telephone and fewer than '
                   'one in ten would answer it',
         opts=['In 1960 one American household in eight had no telephone at all.',
               'Telephone surveys worked better in 1960 than they do in the present day.',
               'A telephone survey today cannot produce a usable sample of any population, '
               'and the method should be given up by everyone who still uses it.',
               'A telephone survey in 1960 could reach seven households in eight, while in '
               '2020 almost every household had a telephone and fewer than one in ten '
               'would answer it.'], key='D',
         faults={'A': ('true_not_asked', 'had no telephone at all'),
                 'B': ('underreach', 'worked better in 1960 than they do in the present '
                       'day'),
                 'C': ('overreach', 'cannot produce a usable sample of any population')},
         why="To compare the decades is to put the reach of 1960 against the refusal of "
             "2020, which one sentence does with both figures.",
         trap="C recommends abandoning a method where the goal asked only for a "
              "comparison."),
    dict(strand='SOC-S05', pos=5,
         notes=['A census counts everyone on a single day.',
                'It asks few questions of each household.',
                'A survey asks many questions of a sample.',
                'A survey can be repeated every month.'],
         goal_text='emphasize a difference between a census and a survey',
         rule='goal_contrast',
         rule_span='whereas a survey asks many questions of a sample and can be repeated '
                   'every month',
         opts=['A census asks only a few questions of each household that it counts.',
               'A census and a survey are not the same kind of instrument.',
               'A census counts everyone on a single day with few questions, whereas a '
               'survey asks many questions of a sample and can be repeated every month.',
               'A census counts everyone on one day, which is why the United States writes '
               'one into its constitution and runs it with half a million temporary '
               'staff.'], key='C',
         faults={'A': ('true_not_asked', 'asks only a few questions of each household'),
                 'B': ('underreach', 'are not the same kind of instrument'),
                 'D': ('imported', 'writes one into its constitution')},
         why="The goal is a contrast, so the sentence must hold the census on one side and "
             "the survey on the other with what separates them.",
         trap="D brings in the constitution and the temporary staff, neither of which is "
              "in the notes."),
    dict(strand='SOC-S06', pos=6,
         notes=['An audit study sent five thousand identical resumes to employers.',
                'Half carried names common among white applicants.',
                'Half carried names common among black applicants.',
                'The first half received fifty per cent more callbacks.'],
         goal_text='state what the audit found about the callbacks',
         rule='goal_finding',
         rule_span='received fifty per cent more callbacks than the others',
         opts=['The study sent five thousand identical resumes out to employers.',
               'The audit found that the identical resumes carrying names common among '
               'white applicants received fifty per cent more callbacks than the others.',
               'The audit found a difference between the two halves in the callbacks.',
               'Resumes with white-sounding names drew fifty per cent more callbacks, a gap '
               'as large as the one that eight years of extra experience would close.'],
         key='B',
         faults={'A': ('true_not_asked', 'sent five thousand identical resumes out'),
                 'C': ('underreach', 'found a difference between the two halves'),
                 'D': ('imported', 'as large as the one that eight years of extra '
                       'experience would close')},
         why="The goal asks what the audit found about the callbacks, so the sentence has "
             "to name the fifty per cent and whose resumes drew it.",
         trap="D compares the gap to eight years of experience, a figure that is in no "
              "note."),
    dict(strand='SOC-S07', pos=7,
         notes=['A study of political opinion used an online panel of volunteers.',
                'The panel had forty thousand members.',
                'A volunteer had to own a computer and choose to join.',
                'Panel members voted at twice the national rate.'],
         goal_text='state a limitation of the panel',
         rule='goal_limitation',
         rule_span='its members voted at twice the national rate and cannot stand for the '
                   'country',
         opts=['Because the panel was built from volunteers who owned a computer and chose '
               'to join, its members voted at twice the national rate and cannot stand for '
               'the country.',
               'The study measured political opinion using an online panel of forty '
               'thousand volunteers.',
               'An online panel can tell us nothing about the opinions of a country.',
               'The members of the panel voted at twice the rate of the country as a '
               'whole.'], key='A',
         faults={'B': ('wrong_goal', 'measured political opinion using an online panel'),
                 'C': ('overreach', 'can tell us nothing about the opinions of a country'),
                 'D': ('true_not_asked', 'voted at twice the rate of the country as a '
                       'whole')},
         why="The limitation is how the panel was built and what that did to it, so the "
             "sentence must join the volunteering to the voting rate.",
         trap="D gives the symptom of the problem and never says that it is a limitation of "
              "anything."),
    dict(strand='SOC-S08', pos=8,
         notes=['In 1970 the median American worker changed jobs about every four years.',
                'In 2020 the median was about four years as well.',
                'In 1970 one worker in three belonged to a union.',
                'In 2020 one worker in ten did.'],
         goal_text='compare the two years on job tenure and on union membership',
         rule='goal_compare',
         rule_span='but union membership fell from one worker in three to one in ten',
         opts=['The American labor market has not changed in fifty years in any way that '
               'matters to the worker who has to go out and live in it.',
               'One American worker in three belonged to a union in the year 1970.',
               'Some things about work changed between 1970 and 2020 and some did not.',
               'Job tenure was about four years in both 1970 and 2020, but union '
               'membership fell from one worker in three to one in ten.'], key='D',
         faults={'A': ('overreach', 'has not changed in fifty years in any way that '
                       'matters'),
                 'B': ('true_not_asked', 'belonged to a union in the year 1970'),
                 'C': ('underreach', 'Some things about work changed between 1970 and '
                       '2020')},
         why="The goal names two measures, so the sentence has to compare the years on both "
             "and say which one held and which one moved.",
         trap="A reads one steady measure as proof that nothing has changed, which the "
              "union figures flatly deny."),
    dict(strand='SOC-S09', pos=9,
         notes=['The homicide rate in American cities fell by half between 1991 and 2014.',
                'Police numbers rose through the 1990s.',
                'The crack trade, which was violent, shrank after 1993.',
                'Young men fell as a share of the population.'],
         goal_text='explain why the rate fell',
         rule='goal_cause',
         rule_span='because police numbers rose, the violent crack trade shrank after 1993 '
                   'and young men became a smaller share of the population',
         opts=['The homicide rate fell over those years for a number of different '
               'reasons.',
               'The homicide rate fell by half after 1991 because police numbers rose, the '
               'violent crack trade shrank after 1993 and young men became a smaller share '
               'of the population.',
               'Between 1991 and 2014 the homicide rate in American cities fell by half.',
               'The fall in homicide after 1991 was caused by the rise in police numbers, '
               'and no other explanation offered for it has stood up to the evidence.'],
         key='B',
         faults={'A': ('underreach', 'for a number of different reasons'),
                 'C': ('true_not_asked', 'Between 1991 and 2014 the homicide rate in '
                       'American cities'),
                 'D': ('overreach', 'no other explanation offered for it has stood up')},
         why="The goal is to explain the fall, so the sentence gathers the three causes the "
             "notes give and attaches them to the figure.",
         trap="D picks one of the three causes and dismisses the other two, which the notes "
              "give no ground for."),
    dict(strand='SOC-S10', pos=10,
         notes=['A study measured neighborhood poverty using tax returns.',
                'Tax returns cover the households that file.',
                'Households below the filing threshold need not file.',
                'In the poorest tracts a fifth of households file no return.'],
         goal_text='state a limitation of using tax returns to measure neighborhood '
                   'poverty',
         rule='goal_limitation',
         rule_span='the returns miss the very households the study is about',
         opts=['The study measured the poverty of a neighborhood from the tax returns filed '
               'in it.',
               'Tax returns cannot be used to study poverty in a neighborhood.',
               'In the poorest tracts about a fifth of households file no return at all.',
               'Because households below the filing threshold need not file at all, and a '
               'fifth of those in the poorest tracts do not, the returns miss the very '
               'households the study is about.'], key='D',
         faults={'A': ('wrong_goal', 'measured the poverty of a neighborhood from the tax '
                       'returns'),
                 'B': ('overreach', 'cannot be used to study poverty in a neighborhood'),
                 'C': ('true_not_asked', 'file no return at all')},
         why="The limitation is who the returns leave out, so the sentence must join the "
             "threshold to the fifth of households in the poorest tracts.",
         trap="B rejects the source altogether where the goal asked what the source "
              "cannot see."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
