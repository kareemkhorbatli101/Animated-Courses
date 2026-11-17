# -*- coding: utf-8 -*-
"""Volume 4 second timed Reading paper: Academic, 3 passages, 40 questions."""

PAPER = dict(
 vol=4, level='B2', band='6.5', form='a',
 title='Reading Paper 2 · Academic',
 intro=(
   'One hour. Forty questions. Three passages, totalling about two '
   'thousand four hundred words, which is the middle of the real '
   'paper’s range. Sit this one at least a week after the first, '
   'and only once you have read every explanation in the first key.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you begin.',
  'Name the two question types that cost you most marks on the first '
  'paper, and be deliberately slower on those.',
  'Move on when your time is up. Passage 3 carries as many marks as '
  'Passage 1 and is the one candidates never reach.',
  'Answer every question, including the guesses. A blank is a mark '
  'given away.',
  'Mark this paper by question type rather than by total, and keep both '
  'score sheets.'],

 passages=[

  dict(no=1, first=1,
       heading='A line on the side of a ship',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, '
             'which are based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'Every merchant ship carries a circle with a horizontal line '
        'through it, painted on the hull amidships, with a short ladder of '
        'further lines beside it. It states how deeply the vessel may be '
        'loaded. It is one of the most effective safety measures ever '
        'devised, it took twenty-five years to make compulsory, and it is '
        'named after the man who campaigned for it rather than after the '
        'physics it embodies.',
        'The physics is straightforward. A floating hull displaces its own '
        'weight of water, so adding cargo makes it sit lower, which reduces '
        'the height of hull above the waterline. That height, called '
        'freeboard, is what keeps water out of the ship in a sea. Below '
        'some freeboard a vessel will be swamped by an ordinary wave rather '
        'than an exceptional one, and the margin between safe and unsafe is '
        'a matter of centimetres on a hull many metres deep.',
        'In the nineteenth century this was understood by every master and '
        'systematically ignored. The reason was the structure of the '
        'industry. A shipowner was paid by the cargo carried; the risk of '
        'loss was covered by insurance; and the people drowned were the '
        'crew, who had no say in loading and no alternative employment. '
        'Overloading was not a mistake. It was a profitable practice whose '
        'costs fell on somebody else.',
        'The loss rates are difficult to believe now. In the eighteen-'
        'seventies, British registered ships were going down at a rate of '
        'about two a day, and several thousand seamen were drowning '
        'annually in peacetime. A parliamentary inquiry heard evidence that '
        'certain vessels were known in their home ports as coffin ships, '
        'and that insurance had been arranged on terms which made their '
        'loss more profitable than their arrival.',
        'Samuel Plimsoll, a member of parliament with no maritime '
        'background, took this up in 1870 and pursued it for six years '
        'using methods his colleagues found intolerable. He published the '
        'names of owners. He accused members of the House, some of whom '
        'were shipowners, of killing men for money, and was obliged to '
        'apologise for the language rather than the accusation. The '
        'Merchant Shipping Act of 1876 required a load line, and it allowed '
        'the owner to decide where to paint it.',
        'That concession made the first version almost useless, and it took '
        'until 1890 for the line to be set by regulation rather than by the '
        'owner. The tables used then were calculated by a committee from '
        'the loss records of the previous twenty years, which is to say '
        'they were derived from the ships that had sunk. The figures have '
        'been revised several times since, always downwards in the sense of '
        'requiring more freeboard.',
        'The modern mark carries the complication that makes it '
        'interesting. Water density varies: a hull floats higher in cold '
        'salt water than in warm fresh water, by a margin large enough to '
        'matter. The ladder of lines beside the circle therefore gives '
        'different limits for tropical seas, for summer and winter in '
        'temperate latitudes, for the North Atlantic in winter, and for '
        'fresh water. A ship loading in a river in the tropics may legally '
        'sit lower than the same ship loading in the North Sea in '
        'January.',
        'What makes the load line worth studying is not the engineering. It '
        'is that the problem was never technical. The calculation was '
        'available, the danger was known to everybody concerned, and the '
        'practice continued for decades because the person who decided how '
        'much cargo to load was not the person who would drown. The remedy '
        'was a line that anybody standing on a dock could see, and the '
        'fight was about who got to paint it.',
              ('Two further details are worth setting beside that conclusion, '
               'because they show how little the mechanism has '
               'changed. The first is that the load line is enforced '
               'by inspection in port rather than at sea, which means '
               'the only moment at which the rule bites is the moment '
               'before the voyage, and a surveyor who misses it has no '
               'second opportunity. Several twentieth-century losses '
               'were traced to vessels that had been loaded correctly, '
               'consumed fuel on passage, and become unstable as the '
               'weight shifted upward in half-empty tanks, which the '
               'mark cannot capture at all. The second is that the '
               'standard applies to registered merchant vessels and '
               'not to fishing boats, which in most countries are '
               'regulated separately and far more loosely. Fishing '
               'remains, by a considerable margin, the most dangerous '
               'occupation in Britain. The reason is recognisably the '
               'one Plimsoll identified: the person who decides how '
               'much to load is not the person who will drown. In a '
               'small boat those two people are now frequently the '
               'same, which turns out to help less than anybody '
               'expected.')],
       items=[
        (
         'Which paragraph explains why owners overloaded ships '
         'deliberately?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 5', 'Paragraph 7'],
         1,
         'Paragraph 3 sets out who was paid, who was insured and who '
         'drowned.',
         {0: 'Paragraph 2 explains freeboard and the physics.', 2: 'Paragraph 5 describes Plimsoll\u2019s campaign.', 3: 'Paragraph 7 explains the ladder of lines.'}),
        ('Which paragraph explains why the first Act achieved little?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 8'],
         2,
         'Paragraph 6 identifies the concession that let owners place '
         'the line themselves.',
         {0: 'Paragraph 4 gives the loss rates of the '
             'eighteen-seventies.', 1: 'Paragraph 5 describes Plimsoll\u2019s campaign.', 3: 'Paragraph 8 states why the problem was never technical.'}),
        ('What is the height of hull above the waterline called?',
         None, 'freeboard',
         'Paragraph 2 names it and explains what it does.'),
        ('The margin between a safe and an unsafe load is measured in',
         ['metres', 'centimetres', 'tonnes', 'degrees'], 1,
         'Paragraph 2 contrasts this with the depth of the hull.',
         {0: 'Metres is the depth of the hull, not the margin.', 2: 'Tonnes measure the cargo, not the margin of freeboard.', 3: 'Degrees are not a unit used in paragraph 2.'}),
        ('Nineteenth-century masters did not understand the danger.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 3 says it was understood by every master and '
         'systematically ignored.',
         {0: 'Paragraph 3 says the danger was understood by every '
             'master.', 2: 'What the masters understood is stated in paragraph 3.'}),
        (
         'At what rate were British ships being lost in the '
         'eighteen-seventies?',
         ['two a week', 'two a day', 'two a month', 'two a year'], 1,
         'Paragraph 4 gives the rate alongside the annual death toll.',
         {0: 'Two a week is a seventh of the rate given.', 2: 'Two a month is far below the rate given.', 3: 'Two a year would not have drowned thousands.'}),
        ('What were certain vessels known as in their home ports?',
         None, 'coffin ships',
         'Paragraph 4 reports the evidence given to the inquiry.'),
        ('In which year did Plimsoll take up the question?',
         None, '1870',
         'Paragraph 5 says he pursued it for six years.'),
        ('Plimsoll apologised for his accusation.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 5 says he apologised for the language rather than '
         'the accusation.',
         {0: 'Paragraph 5 says he apologised for the language only.', 2: 'What he apologised for is stated in paragraph 5.'}),
        ('In which year was the position of the line finally set by '
         'regulation?', None, '1890',
         'Paragraph 6 contrasts this with the 1876 Act.'),
        ('The first official tables were calculated from',
         ['model experiments', 'the records of ships that had sunk', 'the opinions of masters', 'insurance premiums'],
         1,
         'Paragraph 6 makes the point about where the figures came '
         'from.',
         {0: 'No model experiments are mentioned in the passage.', 2: 'Masters understood the danger but set no tables.', 3: 'Insurance premiums are part of paragraph 3, not the '
             'tables.'}),
        ('A hull floats higher in cold ____________ water.',
         None, 'salt',
         'Paragraph 7 explains why the mark has several lines.'),
        ('According to the last paragraph, the problem was never '
         '____________.', None, 'technical',
         'The final paragraph states what the fight was actually '
         'about.')]),

  dict(no=2, first=14,
       heading='How a medicine gets its price',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, '
             'which are based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'The price of a new medicine bears almost no relation to what it '
        'costs to make. A tablet that sells for forty pounds may contain a '
        'few pence of material and a few pence of manufacturing. This is '
        'not a scandal in itself, and it is the reason the pricing of '
        'medicines is argued about in a way that the pricing of almost '
        'nothing else is.',
        'The standard defence is that the price pays for the research, '
        'including the research that failed. A company that brings one '
        'compound to market has abandoned many others, often late and '
        'expensively, and the surviving product has to carry the whole '
        'programme. Published estimates of the cost of a successful '
        'medicine range from a few hundred million to over two billion, '
        'and the range is wide because the estimates depend on which '
        'failures are counted and on what return is assumed on capital '
        'tied up for a decade.',
        'That defence is sound in outline and does not determine any '
        'particular price. Once a compound exists, the cost of the research '
        'is spent and cannot be recovered by charging more or less; it is '
        'what economists call sunk. The price is therefore set by what '
        'health systems will pay, and the research cost appears in the '
        'negotiation as an argument rather than as an input.',
        'What the price actually depends on is the strength of the patent '
        'and the existence of an alternative. A medicine with twelve years '
        'of exclusivity and no close substitute is priced near the limit of '
        'what buyers will accept. The same medicine, once a generic '
        'version appears, typically falls by between eighty and ninety-five '
        'per cent within two years, which indicates how much of the '
        'original price was the patent rather than the pill.',
        'Buyers have developed a method for resisting this, and it is more '
        'interesting than haggling. Several national systems now assess a '
        'new medicine by the health it produces, measured in years of life '
        'adjusted for their quality, and compare that with the price. A '
        'threshold is set, in effect a maximum that the system will pay for '
        'a year of good health, and a medicine above it is refused. The '
        'figure is published, which is the part other countries find '
        'difficult.',
        'Publishing it has two consequences, pulling against each other. It '
        'gives the buyer a defensible position, because a refusal is a '
        'consequence of a stated rule rather than a judgement about a '
        'particular illness. It also tells every seller exactly what to '
        'charge. Analyses of prices in systems with published thresholds '
        'find a conspicuous number of medicines priced just below the '
        'line.',
        'There is a further problem that the method handles badly. A '
        'medicine for a very rare condition cannot spread its development '
        'cost over many patients, so the price per patient is enormous and '
        'the calculation refuses it, even where the benefit to the '
        'individual is large and nothing else exists. Most systems '
        'therefore operate exceptions, and the exceptions are decided by a '
        'process that is explicitly political.',
        'The honest summary is that no method prices medicines well, and '
        'that the published-threshold approach has one clear advantage over '
        'the alternatives. It states what a life-year is worth to the '
        'buyer, which is a sentence most health systems would rather not '
        'write down, and having written it down they can be argued with in '
        'public. Systems that make the same decisions without a published '
        'figure make them anyway, at prices nobody can scrutinise.',
              ('One more feature of the system deserves attention, because it '
               'complicates every figure quoted in a public argument about '
               'drug prices. Almost nobody pays the published price. Health '
               'systems negotiate confidential discounts, sometimes very large '
               'ones, and the published figure is retained because it anchors '
               'negotiations in other countries that use it as a reference. '
               'The result is a market in which the list price is a fiction '
               'maintained by agreement between buyer and seller, each for its '
               'own reasons, and in which a newspaper comparing the cost of a '
               'medicine in two countries is comparing two fictions. Several '
               'national audit offices have objected to this, and the '
               'objection has not prevailed, because the buyer gains from the '
               'secrecy as well: a system that negotiates a thirty per cent '
               'discount does not want the next country to know it was '
               'available.')],
       items=[
        (
         'Which paragraph explains why the research cost cannot set '
         'the price?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 5', 'Paragraph 7'],
         1, 'Paragraph 3 introduces the idea of a sunk cost.',
         {0: 'Paragraph 2 sets out the standard defence.', 2: 'Paragraph 5 describes the threshold method.', 3: 'Paragraph 7 identifies a case the method handles badly.'}),
        (
         'Which paragraph describes an unintended effect of publishing '
         'a threshold?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 8'],
         2,
         'Paragraph 6 reports the clustering of prices just below the '
         'line.',
         {0: 'Paragraph 4 explains patents and generics.', 1: 'Paragraph 5 describes the threshold method.', 3: 'Paragraph 8 gives the honest summary.'}),
        ('Which paragraph identifies a case the method handles badly?',
         ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
         2,
         'Paragraph 7 deals with medicines for very rare conditions.',
         {0: 'Paragraph 5 describes the threshold method.', 1: 'Paragraph 6 describes an unintended effect of publishing '
             'a threshold.', 3: 'Paragraph 8 gives the honest summary.'}),
        ('Published estimates of the cost of a successful medicine vary '
         'because of which failures are ____________.',
         None, 'counted',
         'Paragraph 2 gives this and the assumed return on capital.'),
        ('The writer rejects the research-cost defence entirely.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 3 says it is sound in outline but does not '
         'determine a price.',
         {0: 'Paragraph 3 calls the defence sound in outline.', 2: 'The writer\u2019s view of the defence is given in paragraph '
             '3.'}),
        ('What do economists call a cost that cannot be recovered?',
         None, 'sunk',
         'Paragraph 3 uses the term to explain the pricing logic.'),
        (
         'By how much does a price typically fall once a generic '
         'version appears?',
         ['between ten and twenty per cent', 'between forty and sixty per cent', 'between eighty and ninety-five per cent', 'it does not fall'],
         2,
         'Paragraph 4 gives the range and the period over which it '
         'happens.',
         {0: 'Ten to twenty per cent understates the fall reported.', 1: 'Forty to sixty per cent understates the fall reported.', 3: 'Paragraph 4 says the price does fall, and far.'}),
        ('The fall after a generic appears shows how much of the price '
         'was the ____________.', None, 'patent',
         'Paragraph 4 draws exactly this conclusion.'),
        ('Health is measured in years of life adjusted for their '
         '____________.', None, 'quality',
         'Paragraph 5 describes the assessment method.'),
        (
         'A refusal under a published threshold is a consequence of a '
         'stated', ['judgement', 'rule', 'price', 'illness'],
         1,
         'Paragraph 6 contrasts this with a judgement about a '
         'particular illness.',
         {0: 'A judgement about an illness is what it replaces.', 2: 'The price is what is compared against the rule.', 3: 'The illness is what a judgement would be about.'}),
        ('Medicines for rare conditions are usually dealt with by',
         ['refusing them', 'lowering the threshold', 'exceptions', 'importing them'],
         2, 'Paragraph 7 says the exceptions are decided politically.',
         {0: 'Refusal is what the exceptions avoid.', 1: 'The threshold is not lowered for rare conditions.', 3: 'Importing is not what paragraph 7 describes.'}),
        ('The writer believes some method prices medicines well.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 8 opens by saying no method does.',
         {0: 'Paragraph 8 says in its first sentence that no method '
             'does.', 2: 'Whether any method prices well is answered in paragraph '
             '8.'}),
        (
         'What advantage does the writer claim for the published '
         'threshold?',
         ['it produces lower prices', 'it can be argued with in public', 'it removes political decisions', 'it is cheaper to operate'],
         1,
         'Paragraph 8 says the figure can be scrutinised, unlike an '
         'unstated one.',
         {0: 'Lower prices are not the advantage claimed.', 2: 'The exceptions remain explicitly political.', 3: 'Cost of operation is not the claim made.'})]),

  dict(no=3, first=27,
       heading='Reading the rings of a tree',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, '
             'which are based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'A tree in a temperate climate adds one ring a year, and the width '
        'of that ring depends on the growing conditions of that year. From '
        'these two facts an entire dating method has been built, and it is '
        'more precise than any other method available for the last ten '
        'thousand years, including the radiocarbon dating against which it '
        'is usually compared.',
        'The method works by matching patterns rather than by counting '
        'rings on a single trunk. A sequence of wide and narrow rings over '
        'forty or fifty years is effectively a signature of a particular '
        'run of weather in a particular region. Two pieces of timber from '
        'the same area will carry the same signature for the years in which '
        'they both grew, which allows a sequence from a living tree to be '
        'overlapped with one from an old building, and that with one from a '
        'still older beam, back and back.',
        'This process of overlapping, done thousands of times, has produced '
        'continuous reference sequences for several regions. The European '
        'oak sequence now reaches back more than ten thousand years, and '
        'any new sample of oak from that region can be fitted into it. '
        'When a fit is found, the dating is not approximate: it gives the '
        'calendar year in which each ring grew, and where the bark survives '
        'it gives the year the tree was felled.',
        'That precision has transformed several arguments. Timber from a '
        'building traditionally dated by its style can be placed in a '
        'decade or a year, and style-based datings have frequently proved '
        'wrong by fifty years or more. Panel paintings can be dated from '
        'their wooden supports, which has revealed both forgeries and '
        'misattributions. Volcanic eruptions whose dates were argued over '
        'for a century have been fixed by the narrow rings they produced '
        'across whole continents.',
        'The method also corrected radiocarbon dating rather than competing '
        'with it. Radiocarbon measurement assumes a known concentration of '
        'the isotope in the atmosphere, and that concentration has in fact '
        'varied. Wood of known calendar age, supplied by ring sequences, '
        'allowed the variation to be mapped and radiocarbon results to be '
        'calibrated against it. Every radiocarbon date published today has '
        'been adjusted using a curve built from tree rings.',
        'The limitations are specific rather than general, and they are the '
        'part most often misunderstood. The method requires a species that '
        'produces annual rings, which excludes most tropical trees, where '
        'there is no winter to stop growth. It requires a region with a '
        'reference sequence, and building one takes decades of work. It '
        'requires enough rings in the sample: forty or fifty for a '
        'confident match, so a short offcut cannot be dated at all.',
        'There is also a subtler difficulty. A ring sequence dates the '
        'growth of the wood, not the event an archaeologist cares about. '
        'Timber was reused, stored and traded, so a beam felled in 1486 may '
        'have been built into a wall in 1530, and a ship’s plank may '
        'be older than the ship by a generation. The method gives a date '
        'that is exact and answers a question slightly different from the '
        'one asked, which is a familiar position in any field that '
        'acquires a precise instrument.',
        'The appropriate conclusion is a modest one. Dendrochronology '
        'provides the most precise dates available for the material it can '
        'handle, which is a minority of the material archaeologists '
        'encounter, and its greatest contribution has been to make another '
        'method honest. That is a better description of scientific progress '
        'than the replacement of one technique by a superior one, and it is '
        'what actually happened.',
              ('It is worth adding how the reference sequences themselves were '
               'built, because the labour involved is invisible in any summary '
               'of the method. A single European sequence rests on '
               'measurements from tens of thousands of samples, taken from '
               'buildings, bog oaks, excavated piles, shipwrecks and '
               'furniture, each measured ring by ring under a microscope by '
               'somebody who had to decide, repeatedly, where one ring ended '
               'and the next began. Disagreements about individual boundaries '
               'were resolved by remeasurement and by cross-checking against '
               'other samples, and the sequences published in the nineteen- '
               'eighties have since been corrected in places by a year or two. '
               'That is the ordinary condition of a precise instrument: its '
               'precision is real, it was assembled by hand over four decades, '
               'and it continues to be revised by the same means.')],
       items=[
        (
         'Which paragraph explains how sequences are joined to reach '
         'further back?',
         ['Paragraph 1', 'Paragraph 2', 'Paragraph 4', 'Paragraph 6'],
         1,
         'Paragraph 2 describes overlapping signatures from timbers of '
         'different ages.',
         {0: 'Paragraph 1 states the two facts the method rests on.', 2: 'Paragraph 4 describes what the precision transformed.', 3: 'Paragraph 6 explains why a short offcut cannot be dated.'}),
        (
         'Which paragraph explains why a short offcut cannot be dated?',
         ['Paragraph 3', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
         2,
         'Paragraph 6 gives the minimum number of rings needed for a '
         'match.',
         {0: 'Paragraph 3 describes the reference sequences.', 1: 'Paragraph 5 describes the radiocarbon calibration.', 3: 'Paragraph 7 distinguishes the date of the wood from the '
             'date of the event.'}),
        (
         'Which paragraph distinguishes the date of the wood from the '
         'date of the event?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 7', 'Paragraph 8'],
         2,
         'Paragraph 7 gives the examples of reuse, storage and trade.',
         {0: 'Paragraph 4 describes what the precision transformed.', 1: 'Paragraph 5 describes the radiocarbon calibration.', 3: 'Paragraph 8 gives the modest conclusion.'}),
        ('How long a run of rings makes an effective signature?',
         ['five or ten years', 'twenty years', 'forty or fifty years', 'two hundred years'],
         2,
         'Paragraph 2 describes the length, and paragraph 6 repeats it '
         'as a requirement.',
         {0: 'Five or ten years is too short for a signature.', 1: 'Twenty years is below the length given.', 3: 'Two hundred years is far more than a signature needs.'}),
        ('How far back does the European oak sequence reach?',
         None, 'ten thousand years',
         'Paragraph 3 says any new oak sample from the region can be '
         'fitted into it.'),
        ('Where the bark survives, the method gives the year the tree was '
         '____________.', None, 'felled',
         'Paragraph 3 contrasts this with an approximate date.'),
        ('Datings based on style have often proved wrong by',
         ['a year or two', 'ten years', 'fifty years or more', 'a thousand years'],
         2,
         'Paragraph 4 gives this as one effect of the method on '
         'existing arguments.',
         {0: 'A year or two is the precision the method gives.', 1: 'Ten years understates the errors found.', 3: 'A thousand years is far beyond the errors reported.'}),
        ('What has been dated from the wooden supports of paintings?',
         None, 'forgeries',
         'Paragraph 4 says both forgeries and misattributions were '
         'revealed.'),
        ('Radiocarbon dating assumes a known concentration of the isotope '
         'in the ____________.', None, 'atmosphere',
         'Paragraph 5 explains that the concentration has in fact '
         'varied.'),
        (
         'Every radiocarbon date published today is adjusted using a '
         'curve built from tree rings.',
         ['True', 'False', 'Not Given'], 0,
         'Paragraph 5 states this directly.',
         {1: 'Paragraph 5 states that every published date is '
             'adjusted.', 2: 'The adjustment of every date is stated in paragraph 5.'}),
        ('Most tropical trees cannot be used because there is no '
         '____________ to stop growth.', None, 'winter',
         'Paragraph 6 gives this as the first of three limitations.'),
        ('Building a reference sequence for a new region takes',
         ['a few months', 'about a year', 'decades', 'a century'], 2,
         'Paragraph 6 lists it among the requirements of the method.',
         {0: 'A few months is far less than paragraph 6 implies.', 1: 'About a year is far less than paragraph 6 implies.', 3: 'A century is longer than the work has taken.'}),
        ('The writer says the method has made another method '
         '____________.', None, 'honest',
         'The final paragraph names this as its greatest contribution.'),
        (
         'What does the writer say is a better description of '
         'scientific progress?',
         ['one technique replacing a superior one', 'one method making another honest', 'the invention of precise instruments', 'the abandonment of radiocarbon dating'],
         1,
         'The last sentence contrasts the two descriptions and says '
         'which happened.',
         {0: 'Paragraph 8 says that is not what happened.', 2: 'The invention of instruments is not the description '
             'offered.', 3: 'Radiocarbon dating was calibrated, not abandoned.'})]),
 ])
