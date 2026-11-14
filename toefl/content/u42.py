# -*- coding: utf-8 -*-
"""Unit 42 — Food, Farming and Soil.

Cycle 4 sets out tillage as one operation with two timescales: the
nutrients it releases are the short-run benefit, the organic matter
consumed in releasing them was the material holding the crumbs
together and holding water, and replacement takes decades, so the
policy question is about the horizon a tenancy gives a farmer rather
than about the plough. Cycle 5 objects to the generalisation of the
remedy: no-tillage was established on free-draining soils in warm dry
regions, carries three site-dependent costs, and in a cool maritime
spring the yield penalty never goes away, because better structure
does not relieve a temperature constraint."""

UNIT = {'n': 42,
 'vol': 5,
 'level': 'B2',
 'title': 'Food, Farming and Soil',
 'grammar': 'Reduced relative and appositive clauses',
 'field': 'tillage, topsoil, humus',
 'opener_line': 'This unit is about an operation performed on almost every field in the world '
                'for ten thousand years, whose benefit arrives in one season and whose cost '
                'arrives over thirty. It is also about the difference between the measure that '
                'is easy to take and the measure a farmer decides on, which is a distinction you '
                'will meet again in every applied subject.',
 'subs': ['Buying and storing grain',
          'What tillage does to soil',
          'Yield, and what it leaves out'],
 'icons': ['leaf', 'chart', 'news'],
 'acad': [('augment', 'to add to something that is already there'),
          ('disperse', 'to spread out in all directions'),
          ('residue', 'what is left behind after the main part is gone'),
          ('prevail', 'to be the general condition; also to win out'),
          ('forgo', 'to give up something you could have had'),
          ('latent', 'present but not yet showing'),
          ('marginal', 'at the edge, and only just worth doing'),
          ('optimum', 'the best available, not merely a good one'),
          ('supplement', 'something added to make up a shortfall'),
          ('successive', 'following one after another without a gap'),
          ('render', 'to make something become a certain way'),
          ('subtle', 'small enough to be missed, and important'),
          ('delineate', 'to set out the boundary of something'),
          ('contend', 'to argue for a position against opposition')],
 'fieldwords': [('tillage', 'the ploughing and turning of soil before sowing'),
                ('topsoil', 'the upper layer, where almost all the life is'),
                ('subsoil', 'the layer beneath, dense and nearly lifeless'),
                ('humus', 'the dark decayed matter that holds water in soil'),
                ('mineralise', 'to break organic matter down into simple salts'),
                ('compaction', 'the pressing of soil into a layer roots cannot enter'),
                ('infiltration', 'the rate at which water enters soil instead of running off'),
                ('earthworm', 'the animal whose burrows carry water into subsoil'),
                ('tenure', 'the terms on which land is held, and for how long'),
                ('texture', 'the proportions of sand, silt and clay in a soil'),
                ('mulch', 'a layer left on the surface rather than turned in'),
                ('herbicide', 'a chemical that kills unwanted plants'),
                ('erosion', 'the carrying away of soil by water or wind'),
                ('crumb', 'the small aggregate of soil particles that holds water'),
                ('organic', 'derived from living matter; also a farming standard'),
                ('plough', 'the implement that inverts soil, and the act of using it')],
 'collocs': [('turn the soil', 'to plough it over'),
             ('a working depth', 'how far down an implement reaches'),
             ('crop residue', 'the stalks and leaves left after harvest'),
             ('yield penalty', 'the output given up by a change of method'),
             ('soil structure', 'the arrangement of crumbs and the spaces between'),
             ('water-holding capacity', 'how much water a soil can retain'),
             ('a cover crop', 'one grown to protect soil, not to sell'),
             ('field trial', 'a comparison run on real ground'),
             ('in the first season', 'in the year the change is made'),
             ('over a rotation', 'across the whole cycle of crops')],
 'stance': [('the evidence is mixed', 'the writer refuses to settle it'),
            ('it is often claimed', 'reported, and not endorsed'),
            ('at least in', 'the writer limits where the claim holds'),
            ('what is not in dispute', 'marking the agreed ground'),
            ('on any reading of', 'the claim survives every version')],
 'nuance': [('yield / profit', 'tonnes a hectare / what is left after costs'),
            ('tillage / cultivation', 'turning the soil / growing the crop'),
            ('organic matter / humus', 'all dead material / the decayed fraction')],
 'candos': ['I can read a field trial and say where its result applies.',
            'I can use a reduced relative clause instead of a full one.',
            'I can describe a practice whose benefit and cost arrive at different times.',
            'I can say that evidence is mixed without sounding evasive.',
            'I can write an appositive that defines a term as it passes.',
            'I can ask a supplier what a figure was measured on.'],
 'vocab_talk': ['Describe how food is grown where you come from. What limits it?',
                'What is the difference between a yield and a profit?',
                'Why might a practice be good over ten years and bad in year one?',
                'Name a change that helps in one place and harms in another.'],
 'again': ['intermittent',
           'baseline',
           'timescale',
           'reallocation',
           'provision',
           'constraint',
           'cohort',
           'variance'],
 'family': ('cultivate',
            [('cultivation', 'noun', 'cultivation ceased on the steepest fields'),
             ('cultivable', 'adjective', 'only a third of the holding is cultivable'),
             ('uncultivated', 'adjective', 'the uncultivated margin held the worms')]),
 'r1': {'sub': 'Buying and storing grain',
        'skill': ('Endings that follow from the word class',
                  ['A noun of process takes -tion, -ure or -ing; an adjective takes -ible, '
                   '-able, -ic or -al; an adverb takes -ly.',
                   'Work out the class from the words either side before you write anything.',
                   'Where two endings fit, the preposition after the gap settles it.']),
        'guided_text': 'Grain bought in bulk is cheaper and harder to keep. The enemy is not the '
                       'mouse but moisture, which is measur-- as a percentage and must sit below '
                       'about fourteen. Above that the grain respires, the temperature rises in '
                       'the middle of the heap, and a store that looked perfectly stab-- in '
                       'October is spoil--- by February. The remedy is dull: a thermometer on a '
                       'long probe, a reading once a week, and a written record, because a '
                       'single reading tells you nothing and a series tells you everyth---. Most '
                       'losses are not drama---. They are slow and they are invisible from the '
                       'door.',
        'guided': ['ed', 'le', 'ing', 'ing', 'tic'],
        'guided_hint': 'measur--- is measured — the slot follows which is, so it needs a past '
                       'participle.',
        'exam_text': 'Tillage is the oldest intervention in agriculture and the hardest to argue '
                     'about calmly. Turning the soil buries weeds, warms the seedbed and '
                     'releas-- nutrients, and all three effects are real and immed----. The '
                     'difficulty is that the same operation destroys the crumb struct--- that '
                     'decades of roots and fungi built, and the destruction is not visib-- from '
                     'a tractor seat. A soil with good structure accep-- heavy rain; a soil '
                     'without it sheds the water, and the loss of topsoil that follows is the '
                     'most expens--- thing that can happen to a field. The honest summary is '
                     'awkward. Tillage raises yield reliab-- in the first years and lowers it '
                     'over a generation, which means the farmer who ploughs is making a rat----- '
                     'decision on the time horizon a tenancy gives them, and the policy quest--- '
                     'is about that horizon rather than about the agron---.',
        'exam': ['es', 'iate', 'ure', 'le', 'ts', 'ive', 'ly', 'ional', 'ion', 'omy']},
 'r2': {'sub': 'What tillage does to soil',
        'skill': ('Reading a trial summary against a sceptical reply',
                  ['A summary states a result. A reply usually attacks the conditions it was '
                   'obtained under.',
                   'Look for the soil type, the rainfall and the number of seasons.',
                   'A question about the disagreement wants what the two sides share.']),
        'docs': [('notice',
                  'Eastfield Research Farm · no-tillage trial, seasons 1 to 6',
                  ['# Treatments',
                   '* Control: ploughed to 22 cm each autumn, residue incorporated.',
                   '* No-tillage: direct drilled into standing residue, no soil inversion at any '
                   'point.',
                   '# Yield',
                   '* Seasons 1–2: no-tillage 7 per cent below control.',
                   '* Seasons 3–4: no difference within the error of the trial.',
                   '* Seasons 5–6: no-tillage 4 per cent above control.',
                   '# Soil',
                   '* Infiltration at season 6: 31 mm an hour under no-tillage, 9 mm under the '
                   'plough.',
                   '* Earthworm counts: 2.6 times the control by season 4 and stable after it.',
                   '# Inputs',
                   '* Herbicide use under no-tillage averaged 1.8 times the control across the '
                   'six seasons.',
                   '# Site',
                   '* Free-draining sandy loam, 540 mm annual rainfall, mean spring soil '
                   'temperature 9.4 °C.'],
                  'notice'),
                 ('email',
                  'g.lindqvist@northagri.ac.uk',
                  'trials@eastfield.ac.uk',
                  '02/11/2029',
                  'Your six-season result, and why I cannot use it here',
                  ['Dear Eastfield team,',
                   '',
                   'Thank you for the data, which is the cleanest six-season set I have seen',
                   'on this question. I want to raise one thing before it is quoted at me',
                   'again, which it will be.',
                   '',
                   'Your site is a free-draining sandy loam with 540 mm of rain and a spring',
                   'soil temperature of 9.4 degrees. My farms are heavy clay, 1,100 mm, and',
                   'the spring soil sits near 6 degrees until the end of April. On that',
                   'ground the plough is doing something your trial cannot measure: it is',
                   'drying and warming a seedbed that will not warm by itself.',
                   '',
                   'I am not contending that your result is wrong. I am saying the yield',
                   'penalty you found in seasons 1 and 2 is the whole story on my ground and',
                   'it does not go away in season 5, because the limiting factor here is',
                   'spring temperature and not soil structure.',
                   '',
                   'Would you consider adding a cold-wet site? Two of us would host one.',
                   '',
                   'Greta Lindqvist, Northern Agricultural College'])],
        'guided': [('What happened to yield in seasons 1 and 2?',
                    ('No-tillage was 7 per cent above the control',
                     'No-tillage was 7 per cent below the control',
                     'There was no difference',
                     'The trial was not yet running'),
                    1,
                    'The penalty comes first and the advantage comes later, which is the shape '
                    'of the whole result.'),
                   ('What was infiltration under no-tillage by season 6?',
                    ('9 mm an hour', '31 mm an hour', '22 mm an hour', 'It was not measured'),
                    1,
                    'Against 9 mm under the plough, which is more than three times as much.'),
                   ('What happened to herbicide use under no-tillage?',
                    ('It fell',
                     'It averaged 1.8 times the control',
                     'It was unchanged',
                     'It is not reported'),
                    1,
                    'The notice reports it as an input, which is where the cost of the method '
                    'shows.'),
                   ('What is the site’s soil?',
                    ('Heavy clay', 'A free-draining sandy loam', 'Peat', 'It is not stated'),
                    1,
                    'With 540 mm of rainfall, which is the detail the reply turns on.')],
        'exam': [('What does Greta say about the data?',
                  ('It is unreliable',
                   'It is the cleanest six-season set she has seen',
                   'It is too short',
                   'It contradicts her own trial'),
                  1,
                  'She concedes the quality before she raises the condition.'),
                 ('How does her ground differ from Eastfield’s?',
                  ('It is drier and warmer',
                   'It is heavy clay, wetter and colder in spring',
                   'It has fewer earthworms',
                   'It is at a higher altitude'),
                  1,
                  'Clay, 1,100 mm and about 6 degrees against loam, 540 mm and 9.4.'),
                 ('What does she say the plough is doing on her ground?',
                  ('Burying weeds',
                   'Drying and warming a seedbed that will not warm by itself',
                   'Destroying soil structure',
                   'Reducing herbicide use'),
                  1,
                  'That is the effect she says the trial cannot measure at its own site.'),
                 ('What does she say about the yield penalty?',
                  ('It would not occur on her ground',
                   'It is the whole story on her ground and does not go away',
                   'It is an artefact of the first two seasons',
                   'It is smaller than reported'),
                  1,
                  'Because her limiting factor is spring temperature rather than soil '
                  'structure.'),
                 ('Is she claiming the Eastfield result is wrong?',
                  ('Yes',
                   'No, she says so explicitly',
                   'She does not say',
                   'Only for seasons 5 and 6'),
                  1,
                  'She separates the truth of a result from the range it applies over.'),
                 ('What does she ask for?',
                  ('A retraction',
                   'The addition of a cold-wet site, which two of them would host',
                   'Her own funding',
                   'A longer trial at Eastfield'),
                  1,
                  'One request, with the means of meeting it attached.'),
                 ('What does the exchange show about a field trial?',
                  ('Six seasons is too few',
                   'A result belongs to the conditions it was obtained under',
                   'Trials should be run by farmers',
                   'Infiltration is the only useful measure'),
                  1,
                  'Both documents agree on the numbers and disagree about where they apply.')]},
 'r3': {'sub': 'Yield, and what it leaves out',
        'title': 'The Field That Produced More and Earned Less',
        'words': 295,
        'skill': ('Reading a case where two measures move apart',
                  ['Two numbers are tracked and they go in opposite directions. Keep which is '
                   'which.',
                   'The explanation is in the costs, not in the crop.',
                   'A question about the lesson wants what the measure leaves out.']),
        'paras': ['A holding in eastern England recorded its best wheat yield in thirty years in '
                  '2018 and its worst margin over the same period. The two facts are not in '
                  'tension and the explanation is entirely ordinary. The improvement in yield '
                  'followed from a kind season and from four fungicide applications rather than '
                  'two. The margin fell because those applications, the nitrogen in support of '
                  'the heavier crop and the diesel for a wet harvest in combination cost more '
                  'than the extra tonnes earned at the price prevailing that August.',
                  'It is often claimed that yield and profit move together, and over a long run '
                  'and across whole regions their movement is loosely together. On one farm in '
                  'one year they are distinct quantities responding to distinct influences, and '
                  'the gap between them is where almost every disagreement about farming '
                  'practice actually lives. A method that raises yield by four per cent and '
                  'input costs by nine is a bad method on a commercial holding and a good one in '
                  'a trial report whose measurement is of tonnes.',
                  'What is not in dispute is that the published literature measures yield far '
                  'more often than margin, for reasons of convenience rather than of ideology: '
                  'tonnes a hectare can be weighed on a trailer, and a margin requires the '
                  'pricing of every input, the costing of labour and the depreciation of '
                  'machinery, which differ between two neighbouring farms. The evidence is mixed '
                  'on whether the two diverge enough to matter, at least in the comparisons that '
                  'have been attempted, and the honest position is that a yield figure answers a '
                  'narrower question than the one a farmer is asking. Anybody reading a trial '
                  'should establish which of the two it reports before any decision about what '
                  'it shows.'],
        'guided': [('What two records did the holding set in 2018?',
                    ('Its best yield and its best margin',
                     'Its best yield and its worst margin',
                     'Its worst yield and its best margin',
                     'Its worst yield and its worst margin'),
                    1,
                    'And the passage says the two facts are not in tension.'),
                   ('Why did yield rise?',
                    ('A kind season and four fungicide passes rather than two',
                     'More nitrogen alone',
                     'A new variety',
                     'A dry harvest'),
                    0,
                    'Both reasons are given in the same sentence.'),
                   ('Which of these is NOT given as a reason the margin fell?',
                    ('The fungicide passes',
                     'The nitrogen',
                     'The diesel for a wet harvest',
                     'A fall in the wheat price'),
                    3,
                    'The passage says the extra tonnes earned less than the costs at the price '
                    'prevailing, not that the price fell.'),
                   ('What does the passage say about yield and profit over a long run?',
                    ('They move oppositely',
                     'They loosely move together',
                     'They are unrelated',
                     'Nobody has measured it'),
                    1,
                    'Across whole regions and over a long run, which is the claim it then '
                    'limits.')],
        'exam': [('On one farm in one year, what does the passage say the two are?',
                  ('The same quantity measured twice',
                   'Different quantities with different drivers',
                   'Equally easy to measure',
                   'Both unreliable'),
                  1,
                  'And the gap between them is where the arguments about practice live.'),
                 ('A method raising yield four per cent and costs nine per cent is',
                  ('good on a commercial holding',
                   'bad commercially and good in a report that measures tonnes',
                   'bad by every measure',
                   'impossible'),
                  1,
                  'That contrast is the passage’s illustration of the gap.'),
                 ('Why does the literature measure yield more often?',
                  ('Researchers prefer it',
                   'Tonnes can be weighed and margin requires everything priced and costed',
                   'Margin is commercially confidential',
                   'Yield is more accurate'),
                  1,
                  'The passage puts it down to convenience rather than to ideology.'),
                 ('Why is margin hard to compare between farms?',
                  ('Yields differ',
                   'Labour, inputs and depreciation differ between neighbours',
                   'Prices are secret',
                   'It is measured in different units'),
                  1,
                  'Which is what makes the figure local in a way yield is not.'),
                 ('What is the writer’s position on whether the two diverge enough to matter?',
                  ('They always do',
                   'The evidence is mixed, at least in the comparisons attempted',
                   'They never do',
                   'The question is unanswerable'),
                  1,
                  'The writer marks the state of the evidence rather than settling it.'),
                 ('What does the writer say a yield figure does?',
                  ('Answers the farmer’s question',
                   'Answers a narrower question than the farmer is asking',
                   'Misleads deliberately',
                   'Is impossible to measure'),
                  1,
                  'That is the honest position the paragraph settles on.'),
                 ('What should a reader of a trial establish first?',
                  ('The soil type',
                   'Which of the two measures it reports',
                   'The number of seasons',
                   'Who funded it'),
                  1,
                  'The final sentence makes that the condition of deciding what the trial '
                  'shows.'),
                 ('What does the passage say the gap between yield and margin is?',
                  ('A measurement error',
                   'Where almost every argument about farming practice lives',
                   'Confined to wheat',
                   'Shrinking over time'),
                  1,
                  'That sentence is the hinge of the whole passage.'),
                 ('The word margin in this passage means',
                  ('the edge of a field',
                   'what is left after costs',
                   'the error in a measurement',
                   'a small difference'),
                  1,
                  'The unit’s own nuance pair separates tonnes a hectare from what is left after '
                  'costs.')]},
 'r4': {'sub': 'What tillage does to soil',
        'title': 'Thirty Years of Structure, Undone in an Afternoon',
        'words': 378,
        'skill': ('Reading a mechanism with two timescales in it',
                  ['The benefit and the cost of one operation arrive at different times. Hold '
                   'both intervals.',
                   'A single physical process explains the whole result. Find it.',
                   'A question about the farmer wants the reasoning attributed, not judged.']),
        'paras': ['Soil of any value to a farmer is an assembly rather than a powder: mineral '
                  'particles are bound into small aggregates by the secretions of roots, the '
                  'threads of fungi and the decomposition of plant material. The spaces between '
                  'the aggregates do the work: the larger ones admit water and air, the smaller '
                  'retain water against gravity through the dry weeks of a summer. Construction '
                  'of the arrangement is the product of three decades of root growth, earthworm '
                  'traffic and the slow conversion of litter into humus. Tillage is the '
                  'mechanical inversion of all of it. Its first consequence is a release of '
                  'nutrients, since organic matter formerly protected within the aggregates is '
                  'exposed to the air and mineralised by bacteria within a few weeks.',
                  'That release constitutes the whole of the short-run benefit and the whole of '
                  'the long-run cost, which is the difficulty of the subject in a single '
                  'sentence. The nutrients released by a ploughing are available to the '
                  'following crop, and the improvement in yield admits of immediate measurement. '
                  'The organic matter consumed in their release was also the material holding '
                  'the aggregates together and holding water in June, and its replacement '
                  'proceeds at the rate of supply by roots and worms, a matter of decades rather '
                  'than of seasons. Successive ploughings therefore draw down a stock, and the '
                  'arithmetic of a stock consumed faster than its augmentation delineates the '
                  'entire history of cultivation from the earliest farming to the present.',
                  'The farmer who ploughs is not behaving without reason, and the recognition of '
                  'that is the point at which the subject becomes a question about tenure rather '
                  'than about soil. The benefit of the operation falls within one season and the '
                  'cost is distributed across thirty years, so that a tenancy of three years, a '
                  'mortgage of fifteen and a working life of forty render the same transaction '
                  'three different propositions. An owner of fifty without a successor and a '
                  'tenant on a rolling agreement confront one soil and one implement with quite '
                  'different calculations, and no accumulation of evidence alters either '
                  'calculation. The policy question is accordingly about the horizon rather than '
                  'about the plough, which is the position in which every scheme for the '
                  'protection of soil has so far failed.'],
        'guided': [('What are soil crumbs bound by?',
                    ('Clay alone',
                     'Root exudates, fungal threads and the residues of decayed organic matter',
                     'Water',
                     'Mineral particles only'),
                    1,
                    'The crumb is an assembly, and the binding material is what tillage spends.'),
                   ('What do the large spaces between crumbs do?',
                    ('Retain water against gravity',
                     'Admit water and air',
                     'Hold nutrients',
                     'Nothing of importance'),
                    1,
                    'The small ones retain water; the two sizes do different work.'),
                   ('What is the first effect of tillage?',
                    ('Compaction',
                     'A release of nutrients from exposed organic matter',
                     'Erosion',
                     'A fall in yield'),
                    1,
                    'Organic matter formerly protected inside aggregates is mineralised within '
                    'weeks.')],
        'exam': [('Why is the release both the benefit and the cost?',
                  ('It happens twice',
                   'The matter consumed was also what held the crumbs together and held water',
                   'It is measured twice',
                   'It raises herbicide use'),
                  1,
                  'That identity is what the passage calls the difficulty in a sentence.'),
                 ('How long does replacement of the organic matter take?',
                  ('One season', 'A few years', 'Decades', 'It is immediate'),
                  2,
                  'At the rate roots and worms can supply it.'),
                 ('What does the passage say successive ploughings draw on?',
                  ('A subsidy', 'A stock', 'A reserve of water', 'The subsoil'),
                  1,
                  'And a stock drawn down faster than it is augmented is the history of '
                  'cultivated soils.'),
                 ('What does the passage say about the farmer who ploughs?',
                  ('They are behaving irrationally',
                   'They are not behaving irrationally',
                   'They are poorly advised',
                   'They have not read the evidence'),
                  1,
                  'Which is the point at which the subject becomes a question about tenure.'),
                 ('What does the passage say the policy question is about?',
                  ('The plough', 'The horizon', 'The soil type', 'The price of grain'),
                  1,
                  'And it adds that this is where schemes to protect soil have failed.')]},
 'r5': {'sub': 'Yield, and what it leaves out',
        'title': 'The Remedy That Travels Badly',
        'words': 379,
        'skill': ('Reading an objection about where a result applies',
                  ['The writer accepts a practice and attacks its generalisation. Note what is '
                   'being generalised from.',
                   'Three costs of the remedy are given. Keep them separate.',
                   'A question about the recommendation wants what should be published with a '
                   'trial.']),
        'paras': ['No-tillage is the remedy ordinarily proposed, and the case for it is a strong '
                  'one on the ground where it was established. Direct drilling into standing '
                  'residue leaves the aggregate arrangement intact, produces an increase in '
                  'infiltration by a factor of three or more within a few seasons, multiplies '
                  'earthworm populations and arrests the erosion that follows any deterioration '
                  'of surface structure. None of that is in dispute, and the objection here is '
                  'not to the practice at all. What is in dispute is the inference from a body '
                  'of trials conducted overwhelmingly on free-draining soils in warm dry regions '
                  'to a recommendation for the whole of agriculture.',
                  'Three costs attach to the practice and each of them is local to the site. '
                  'Weed control without inversion falls to herbicides, and the measured addition '
                  'is of the order of eighty per cent, which is a financial cost everywhere and '
                  'an obstacle to registration in countries where registration is becoming '
                  'harder to obtain. Traffic on an untilled surface produces a compaction that '
                  'no subsequent operation relieves, a condition of no importance on sand and of '
                  'considerable importance on clay. The third is the decisive one in cool wet '
                  'climates: a seedbed under residue warms more slowly in spring, and where the '
                  'limitation on establishment is the temperature of the soil rather than the '
                  'condition of its structure, the yield penalty of the first two seasons does '
                  'not disappear in the fifth. It prevails indefinitely, since the constraint it '
                  'offends against is not one that any improvement in structure can relieve.',
                  'What follows is a requirement on the reporting of trials rather than a '
                  'verdict on the practice. A no-tillage result is impossible to interpret '
                  'without the texture of the soil, the annual rainfall and the mean spring soil '
                  'temperature of the site, and those three lines are absent from a large '
                  'fraction of the published literature. A reader in possession of them can '
                  'establish whether a result has any application to their own ground. A reader '
                  'supplied only with a percentage has been handed a conclusion whose domain of '
                  'validity is unstated, and the advocacy that has followed from such results '
                  'has cost money on cold wet clays in a dozen countries where the arithmetic '
                  'was never going to work.'],
        'guided': [('What does the writer say about the case for no-tillage?',
                    ('It is weak',
                     'It is strong on the ground where it was established',
                     'It has never been tested',
                     'It applies only to clay'),
                    1,
                    'The objection falls on the generalisation, not on the practice.'),
                   ('What four effects of direct drilling are listed?',
                    ('Structure intact, higher infiltration, more earthworms, erosion arrested',
                     'Higher yield, lower cost, less labour, more water',
                     'Warmer soil, more nutrients, fewer weeds, less compaction',
                     'None of these'),
                    0,
                    'All four are granted before the objection begins.'),
                   ('What is in dispute, according to the writer?',
                    ('The measured effects',
                     'The inference from trials on free-draining soils in warm dry regions to '
                     'agriculture in general',
                     'The existence of earthworms',
                     'The cost of herbicides'),
                    1,
                    'That is the sentence the whole passage turns on.')],
        'exam': [('By roughly how much does herbicide use rise?',
                  ('Ten per cent', 'Eighty per cent', 'Fourfold', 'It falls'),
                  1,
                  'And the passage calls it a cost everywhere and an obstacle where approval is '
                  'tightening.'),
                 ('Where is compaction from traffic described as severe?',
                  ('On sand', 'On clay', 'In dry regions', 'Under residue'),
                  1,
                  'Trivial on sand and severe on clay is the contrast given.'),
                 ('What is the decisive cost in cool maritime climates?',
                  ('Herbicide use',
                   'A seedbed under residue warms more slowly in spring',
                   'Compaction',
                   'Erosion'),
                  1,
                  'And where temperature is the limiting factor the penalty does not disappear.'),
                 ('Why does the penalty prevail indefinitely there?',
                  ('The soil never improves',
                   'Improving structure does not relieve the constraint it offends against',
                   'Herbicides stop working',
                   'The trials are too short'),
                  1,
                  'The limiting factor is temperature, which structure does not change.'),
                 ('Which three lines does the writer want in every report?',
                  ('Yield, cost and price',
                   'Soil texture, annual rainfall and mean spring soil temperature',
                   'Herbicide use, compaction and erosion',
                   'Seasons, treatments and plot size'),
                  1,
                  'Without them, the writer says a no-tillage result is uninterpretable.')]},
 'l1': {'sub': 'Buying and storing grain',
        'caption': 'Two students at a farm shop, over a sack of grain',
        'skill': ('Hearing a practical reason behind a flat refusal',
                  ['A speaker who will not sell something usually gives the reason second, not '
                   'first.',
                   'Listen for the number that makes the refusal reasonable.',
                   'The item about the record is the one most people miss.']),
        'warm': [('Man: Can we buy the whole ton?',
                  ('Not unless you can keep it below fourteen per cent.',
                   'Yes, it is cheaper.',
                   'In February.',
                   'On a long probe.'),
                  0,
                  'A can-we question answered with the condition rather than a bare no.'),
                 ('Man: Is one reading enough?',
                  ('A series tells you something. One tells you nothing.',
                   'Yes, once is fine.',
                   'Fourteen per cent.',
                   'With a thermometer.'),
                  0,
                  'The answer contrasts the two rather than simply refusing.'),
                 ('Man: Would a cold week help?',
                  ('It would, at least in a well-ventilated store.',
                   'Yes, always.',
                   'Grain respires.',
                   'By February.'),
                  0,
                  'A would-it question answered with a limit on where the help applies.')],
        'script': [('Woman', 'How much were you thinking of taking?'),
                   ('Man', 'All of it. A ton is a third of the price per kilo.'),
                   ('Woman', 'It is. Where are you keeping it, and what is the moisture?'),
                   ('Man', 'In the shed. I had not thought about moisture.'),
                   ('Woman',
                    'Then do not take a ton. Grain above about fourteen per cent respires, which '
                    'warms the middle of the heap, and the heap insulates itself. A store that '
                    'looks perfect in October can be spoiling by February and you cannot see it '
                    'from the door.'),
                   ('Man', 'So I check it.'),
                   ('Woman',
                    'With a thermometer on a long probe, once a week, into the middle. And write '
                    'the readings down, because one reading tells you nothing at all. It is the '
                    'series that tells you something: a steady temperature is fine and a rise of '
                    'two degrees over three weeks is the thing you act on.'),
                   ('Man', 'What if it does rise?'),
                   ('Woman',
                    'Move it. Spread it thinner, get air through it, and use that part first. '
                    'None of this is difficult, and almost all of the loss I see is from people '
                    'who bought well and then stopped looking.'),
                   ('Man', 'Would a colder shed help?'),
                   ('Woman',
                    'It would, at least in a shed that is also dry and ventilated. Cold and damp '
                    'with no air movement is worse than cool and dry, which surprises people '
                    'every single year.'),
                   ('Man', 'Then I will take two hundred kilos and the thermometer.'),
                   ('Woman',
                    'Take the record sheet as well. It is free and it is the only part anybody '
                    'actually forgets.')],
        'items': [('Why does the man want the whole ton?',
                   ('He has a large shed',
                    'A ton is a third of the price per kilo',
                    'The grain is about to spoil',
                    'He has a thermometer'),
                   1,
                   'He gives the price advantage as his only reason.'),
                  ('What does the woman ask about first?',
                   ('The price',
                    'Where he will keep it and the moisture',
                    'The variety',
                    'His thermometer'),
                   1,
                   'Those two questions are what make the quantity sensible or not.'),
                  ('What happens to grain above fourteen per cent?',
                   ('It dries out',
                    'It respires, which warms the middle of the heap',
                    'It attracts mice',
                    'It loses value'),
                   1,
                   'And the heap insulates itself, which is why it cannot be seen from the '
                   'door.'),
                  ('How often does she say to take a reading?',
                   ('Daily', 'Once a week', 'Monthly', 'Only in February'),
                   1,
                   'With a thermometer on a long probe, into the middle of the heap.'),
                  ('What does she say about a single reading?',
                   ('It is sufficient',
                    'It tells you nothing at all',
                    'It should be taken in October',
                    'It must be written down'),
                   1,
                   'The series is what carries the information, not any one reading.'),
                  ('What is the thing to act on?',
                   ('A temperature above fourteen degrees',
                    'A rise of two degrees over three weeks',
                    'Any rise at all',
                    'A fall in temperature'),
                   1,
                   'A steady temperature is fine; it is the trend that matters.'),
                  ('What does she say almost all the loss comes from?',
                   ('Poor grain',
                    'People who bought well and then stopped looking',
                    'Mice',
                    'Cold sheds'),
                   1,
                   'Which is why the record sheet is the part she presses him to take.')]},
 'l2': {'sub': 'What tillage does to soil',
        'caption': 'A farm walk, on what the spade shows',
        'poster': ['Soil pit · field 7',
                   'Compare: ploughed headland, undisturbed margin',
                   'Look for crumb, roots, worm channels'],
        'skill': ('Hearing a comparison made in front of you',
                  ['The speaker describes two things side by side. Keep which is which.',
                   'Listen for the figure he gives for how long the structure took to build.',
                   'The item about what the plough cannot be blamed for is the hard one.']),
        'warm': [('Woman: Which side is the ploughed one?',
                  ('The one that breaks into blocks.',
                   'The one with the worm channels.',
                   'Yes, one of them.',
                   'In field 7.'),
                  0,
                  'He has just contrasted blocky with crumbly, and blocks are the tilled side.'),
                 ('Woman: How long did the structure take to build?',
                  ('Decades.', 'A season.', 'Yes, some time.', 'Twenty-two centimetres.'),
                  0,
                  'The length of time is the point of the whole comparison.'),
                 ('Woman: Is the plough to blame for the clay?',
                  ('No, that is the parent material.',
                   'Yes, entirely.',
                   'Yes, it is.',
                   'On the headland.'),
                  0,
                  'He separates what the implement did from what the ground always was.')],
        'script': [('Man',
                    'Two pits, four metres apart, and I want you to look before I say anything. '
                    'This one is the ploughed headland. That one is the margin, which has not '
                    'been touched since the hedge went in. Now. The headland breaks into blocks '
                    'when you lever it, and the faces of the blocks are smooth and slightly '
                    'grey. The margin comes away in crumbs the size of a pea, and if you look '
                    'into the crumbs you can see roots going through them and channels you could '
                    'put a pencil in. Those channels are worm burrows and they go down past a '
                    'metre. That is the whole difference, and here is the thing I want you to '
                    'hold on to: the crumb structure in the margin took decades to build. Roots, '
                    'fungal threads, worms, and the slow decay of organic matter into humus, '
                    'over something like thirty years. A plough undoes it in an afternoon. Not '
                    'because the implement is badly made but because turning soil is exactly '
                    'what breaks a crumb. One caution, because somebody always overreaches here. '
                    'The grey faces on those blocks are clay, and the clay is not the plough’s '
                    'doing. That is the parent material of this field and it was there before '
                    'any of us. What the plough did was destroy the structure built on top of '
                    'it, which is a different complaint and the one you can actually support.')],
        'items': [('What are the two pits?',
                   ('Two ploughed fields',
                    'A ploughed headland and an untouched margin',
                    'A cover crop and a bare field',
                    'Clay and loam'),
                   1,
                   'The margin has not been touched since the hedge went in.'),
                  ('How does the headland soil behave?',
                   ('It comes away in crumbs',
                    'It breaks into blocks with smooth grey faces',
                    'It holds water',
                    'It is full of channels'),
                   1,
                   'Against crumbs the size of a pea in the margin.'),
                  ('What are the channels in the margin?',
                   ('Cracks from drying', 'Worm burrows', 'Plough marks', 'Root scars'),
                   1,
                   'He says they go down past a metre.'),
                  ('How long does he say the crumb structure took to build?',
                   ('A season', 'Three years', 'About thirty years', 'A century'),
                   2,
                   'Roots, fungal threads, worms and the slow decay of organic matter.'),
                  ('Why does a plough undo it?',
                   ('The implement is badly made',
                    'Turning soil is exactly what breaks a crumb',
                    'It compacts the subsoil',
                    'It buries the residue'),
                   1,
                   'He is explicit that this is not a criticism of the machine.'),
                  ('What does he say is not the plough’s doing?',
                   ('The worm channels',
                    'The clay in the grey faces',
                    'The crumb structure',
                    'The hedge'),
                   1,
                   'That is the parent material of the field, and blaming the plough for it '
                   'weakens the real complaint.')]},
 'l3': {'sub': 'Yield, and what it leaves out',
        'caption': 'A talk on the measure that is easy and the one that matters',
        'board': ['Yield: weighable on a trailer',
                  'Margin: everything priced and costed',
                  'Published work measures the first',
                  'Farmers decide on the second'],
        'skill': ('A talk about why the wrong quantity gets measured',
                  ['The speaker gives a practical reason, not a conspiracy. Note the reason.',
                   'One arithmetic example carries the argument.',
                   'A question about her instruction wants what to look for first in a paper.']),
        'warm': [('Man: Why is yield measured more often?',
                  ('Because it can be weighed.',
                   'Because it matters more.',
                   'Yes, it is.',
                   'Four per cent.'),
                  0,
                  'Her explanation is about ease of measurement, not about motives.'),
                 ('Man: Do yield and margin move together?',
                  ('Loosely, over regions and years.',
                   'Always.',
                   'Yes, they do.',
                   'On one farm.'),
                  0,
                  'She grants the long-run relation and denies it for one farm in one year.'),
                 ('Man: What should I look for first in a paper?',
                  ('Which of the two it reports.',
                   'The soil type.',
                   'Yes, something.',
                   'The funder.'),
                  0,
                  'That is the instruction she ends on.')],
        'script': [('Woman',
                    'Here is a question that sounds pedantic and decides what you believe about '
                    'half the literature in this subject. When a paper reports that a practice '
                    'improved performance by six per cent, six per cent of what? Almost always '
                    'the answer is yield: tonnes a hectare. And the reason is not ideology, it '
                    'is a weighbridge. You can put a trailer on a weighbridge. Yield is cheap to '
                    'measure, hard to dispute and comparable between any two farms in the '
                    'country. Margin is not. To report a margin you have to price every input, '
                    'cost the labour, depreciate the machinery and agree a price for the grain, '
                    'and two neighbours doing all of that honestly will produce different '
                    'numbers for the same field. So the easy quantity gets measured and the '
                    'quantity the farmer actually decides on does not. Now the arithmetic, '
                    'because this is where it bites. A method raises your yield by four per cent '
                    'and your input bill by nine. In a trial report that is a four per cent '
                    'improvement. On a commercial holding it is a loss, and it is a loss every '
                    'year, and nobody in the trial has done anything dishonest. So my '
                    'instruction, and it takes ten seconds: before you read the result of any '
                    'paper in this field, find out which of the two it reports. If it reports '
                    'yield, it has answered a narrower question than the one you are asking, and '
                    'the difference is yours to work out.')],
        'items': [('What question does the speaker call pedantic-sounding?',
                   ('Who funded the work',
                    'Six per cent of what',
                    'How many seasons the trial ran',
                    'Which soil it was on'),
                   1,
                   'She says it decides what you believe about half the literature.'),
                  ('What does she say the reason for measuring yield is?',
                   ('Ideology', 'A weighbridge', 'Tradition', 'Regulation'),
                   1,
                   'Yield is cheap to measure, hard to dispute and comparable between farms.'),
                  ('What four things does reporting a margin require?',
                   ('Pricing inputs, costing labour, depreciating machinery, agreeing a grain '
                    'price',
                    'Weighing, drying, sampling, storing',
                    'Soil, rainfall, temperature, variety',
                    'Yield, cost, price, area'),
                   0,
                   'And two honest neighbours will still produce different numbers.'),
                  ('In her example, what happens to a four per cent yield gain with a nine per '
                   'cent cost rise?',
                   ('It is a small improvement',
                    'It is a loss on a commercial holding',
                    'It breaks even',
                    'It cannot be calculated'),
                   1,
                   'And she adds that nobody in the trial has been dishonest.'),
                  ('What does she say takes ten seconds?',
                   ('Weighing a trailer',
                    'Finding out which of the two measures a paper reports',
                    'Costing the labour',
                    'Reading the abstract'),
                   1,
                   'That is the instruction the talk closes on.'),
                  ('What does she say about a paper that reports yield?',
                   ('It is dishonest',
                    'It has answered a narrower question than yours',
                    'It should be ignored',
                    'It is usually wrong'),
                   1,
                   'And the difference, she says, is yours to work out.'),
                  ('What does she say two honest neighbours would produce?',
                   ('The same margin for the same field',
                    'Different numbers for the same field',
                    'No margin at all',
                    'A margin but not a yield'),
                   1,
                   'Which is what makes a margin local in a way a yield is not.')]},
 'l4': {'sub': 'What tillage does to soil',
        'caption': 'A lecture on one operation with two timescales',
        'board': ['Crumbs: bound by exudates, fungi, humus',
                  'Tillage: releases nutrients in weeks',
                  'The same matter held the crumbs',
                  'Benefit one season, cost thirty years'],
        'skill': ('A lecture that refuses to call a practice irrational',
                  ['The mechanism comes first, then the two timescales, then the defence of the '
                   'farmer.',
                   'Note what he says the policy question is about.',
                   'A question about tenure wants the comparison he draws.']),
        'warm': [('Woman: What binds a crumb together?',
                  ('Exudates, fungal threads and decayed matter.',
                   'Clay.',
                   'Yes, something does.',
                   'Thirty years.'),
                  0,
                  'The binding material is the thing tillage spends.'),
                 ('Woman: Is ploughing irrational?',
                  ('No, it depends on the horizon.',
                   'Yes, on any soil.',
                   'Yes, it is.',
                   'Within weeks.'),
                  0,
                  'He defends the decision and relocates the question.'),
                 ('Woman: What is the policy question about?',
                  ('The horizon, not the plough.',
                   'The plough.',
                   'Yes, there is one.',
                   'A tenancy.'),
                  0,
                  'That is the sentence the lecture ends on.')],
        'script': [('Man',
                    'A crumb of soil is an object, and I want you to think of it as one. Mineral '
                    'particles glued together by root exudates, fungal threads and the sticky '
                    'residues of rotted plant matter, with holes between the crumbs that admit '
                    'air and water, and smaller holes inside them that hold water against '
                    'gravity through a dry June. That object took thirty years to build. Now, '
                    'what does a plough do? It inverts the whole assembly, which exposes organic '
                    'matter that had been protected inside the crumbs, and bacteria mineralise '
                    'it within weeks. Nutrients are released. The following crop gets them and '
                    'the yield goes up, and that effect is real and I am not going to pretend '
                    'otherwise. Here is the difficulty, and it is one sentence. The organic '
                    'matter that got consumed releasing those nutrients is the same material '
                    'that was holding the crumbs together and holding the water. You spent the '
                    'stock to get the income. Replacement takes decades, because roots and worms '
                    'work at the speed they work at. Which brings me to the part students get '
                    'wrong in essays. The farmer who ploughs is not being stupid or badly '
                    'informed. The benefit lands in one season and the cost lands over thirty '
                    'years, and a three-year tenancy, a fifteen-year mortgage and a forty-year '
                    'working life make that a different trade three times over. An owner of '
                    'fifty with no successor and a tenant on a rolling agreement are looking at '
                    'the same field and doing different sums, and no amount of agronomy changes '
                    'either of them. So when you write about this, the question is about the '
                    'horizon and not about the implement. That is where every soil protection '
                    'scheme I know of has come apart.')],
        'items': [('What does the lecturer ask the class to think of a crumb as?',
                   ('A powder', 'An object', 'A measurement', 'A chemical'),
                   1,
                   'Built over thirty years, with holes between and inside it.'),
                  ('What do the smaller holes inside a crumb do?',
                   ('Admit air',
                    'Hold water against gravity through a dry June',
                    'Let roots through',
                    'Carry nutrients away'),
                   1,
                   'He separates the two pore sizes and gives each its job.'),
                  ('What happens within weeks of ploughing?',
                   ('The soil compacts',
                    'Bacteria mineralise the exposed organic matter',
                    'Earthworms return',
                    'Infiltration rises'),
                   1,
                   'Which releases the nutrients the following crop uses.'),
                  ('What does he say the difficulty is, in one sentence?',
                   ('Ploughing is expensive',
                    'The matter consumed releasing nutrients is the matter that held the crumbs '
                    'together',
                    'Yields fall immediately',
                    'Worms are slow'),
                   1,
                   'He calls it spending the stock to get the income.'),
                  ('What three horizons does he compare?',
                   ('A season, a year and a decade',
                    'A three-year tenancy, a fifteen-year mortgage and a forty-year working life',
                    'Spring, summer and autumn',
                    'Thirty years, fifty years and a century'),
                   1,
                   'Each makes the same trade a different proposition.')]},
 'l5': {'sub': 'Yield, and what it leaves out',
        'caption': 'A short talk on a result that does not travel',
        'board': ['No-tillage: the case is strong',
                  'Trials: warm, dry, free-draining',
                  'Cold wet clay: penalty persists',
                  'Publish texture, rainfall, spring temperature'],
        'skill': ('A talk that attacks a generalisation and not a practice',
                  ['The speaker grants the practice in detail. Note how much she grants.',
                   'Three costs, and she says which is decisive and where.',
                   'A question about her request wants the three lines she wants printed.']),
        'warm': [('Man: Is she against no-tillage?',
                  ('No, against the generalisation.',
                   'Yes, she opposes it.',
                   'Yes, she is.',
                   'Eighty per cent.'),
                  0,
                  'She grants four measured benefits before she objects to anything.'),
                 ('Man: Which cost is decisive, and where?',
                  ('Spring soil temperature, in cool maritime climates.',
                   'Herbicide use, everywhere.',
                   'Yes, one of them.',
                   'On sand.'),
                  0,
                  'That is the cost she says does not go away with time.'),
                 ('Man: What does she want printed?',
                  ('Texture, rainfall and spring soil temperature.',
                   'Yield and margin.',
                   'Yes, three things.',
                   'A percentage.'),
                  0,
                  'Those three lines are what let a reader know whether a result travels.')],
        'script': [('Woman',
                    'I want to be careful here, because I am about to criticise something I '
                    'largely believe in. No-tillage works. Direct drilling into residue leaves '
                    'the crumb structure alone, infiltration goes up several times over in four '
                    'or five seasons, worm counts multiply, and the erosion stops. I am not '
                    'disputing any of that and neither is anybody serious. What I am disputing '
                    'is the step from a body of trials to a recommendation for agriculture in '
                    'general, because look at where those trials were done: free-draining soils, '
                    'warm regions, low rainfall. Three costs, and they are not evenly '
                    'distributed. One: weed control without inversion means herbicide, about '
                    'eighty per cent more of it, which is money everywhere and a licensing '
                    'problem in several countries now. Two: traffic on an untilled surface '
                    'compacts it, and nothing you do afterwards lifts that out. On sand, who '
                    'cares. On clay, it is serious. Three, and this is the one that decides it '
                    'for northern Europe: a seedbed under residue warms up slowly in spring. If '
                    'what limits your establishment is soil temperature rather than soil '
                    'structure, then the yield penalty you see in the first two seasons never '
                    'goes away. It is not a transition cost. It is permanent, because better '
                    'structure does not fix a cold April. So here is what I ask of a trial, and '
                    'it is three lines: soil texture, annual rainfall, mean spring soil '
                    'temperature. With those three I can tell whether your result reaches my '
                    'ground, and I can tell it in four seconds. Without them you have given me a '
                    'percentage and no idea where it applies, which is not a finding but a '
                    'rumour with a decimal point in it. And this is not a counsel of despair '
                    'about field trials: those three lines cost nothing.')],
        'items': [('What does the speaker say about no-tillage at the start?',
                   ('It has never worked',
                    'It works, and she largely believes in it',
                    'It is only for warm regions',
                    'It is too expensive'),
                   1,
                   'She grants infiltration, worms and erosion before objecting.'),
                  ('What is she disputing?',
                   ('The measured effects',
                    'The step from a body of trials to a general recommendation',
                    'The honesty of the researchers',
                    'The value of infiltration'),
                   1,
                   'And she points at where those trials were done.'),
                  ('How much more herbicide does she say is used?',
                   ('Twice as much',
                    'About eighty per cent more',
                    'Slightly more',
                    'She does not say'),
                   1,
                   'Which she calls money everywhere and a licensing problem in several '
                   'countries.'),
                  ('Why does the yield penalty never go away in northern Europe?',
                   ('The soil is poorer',
                    'Better structure does not fix a cold April',
                    'Herbicides fail',
                    'The trials are too short'),
                   1,
                   'Where temperature is the limiting factor, structure is not the remedy.'),
                  ('What does she say she has been given without the three lines?',
                   ('A conclusion she can use',
                    'A percentage and no idea where it applies',
                    'An unreliable measurement',
                    'A trial she can replicate'),
                   1,
                   'That is the sentence the talk ends on.')]},
 'w1': {'sub': 'Questions about a field trial',
        'skill': ('Build a Sentence: asking what a figure was measured on',
                  ['Eight of the ten are questions, and the useful ones name the soil, the '
                   'season or the length of the trial.',
                   'An embedded question keeps statement order: do you know whether the trial '
                   'ran over a rotation.',
                   'The long phrase goes last, which is where English carries weight.']),
        'guided': [('The trial reports a nine per cent gain.',
                    ['know',
                     'do',
                     'you',
                     'whether',
                     'that figure',
                     'is',
                     'yield',
                     'or',
                     'profit'],
                    'Do you know whether that figure is yield or profit?'),
                   ('The soil is described as a loam.',
                    ['what',
                     'was',
                     'the clay',
                     'content',
                     'of',
                     'the plots',
                     'in',
                     'that',
                     'trial'],
                    'What was the clay content of the plots in that trial?'),
                   ('The result covers three seasons.',
                    ['does',
                     'three',
                     'seasons',
                     'cover',
                     'a whole',
                     'rotation',
                     'on',
                     'that',
                     'farm'],
                    'Does three seasons cover a whole rotation on that farm?')],
        'exam': [('The trial was run in a dry region.',
                  ['would', 'you', 'expect', 'the same', 'result', 'on', 'a cold', 'wet', 'clay'],
                  'Would you expect the same result on a cold wet clay?'),
                 ('Herbicide use rose in the no-tillage plots.',
                  ['is',
                   'that',
                   'increase',
                   'counted',
                   'in',
                   'the cost',
                   'side',
                   'of',
                   'the comparison'],
                  'Is that increase counted in the cost side of the comparison?'),
                 ('The plots were ploughed to twenty centimetres.',
                  ['can',
                   'you',
                   'tell',
                   'me',
                   'what',
                   'the working',
                   'depth',
                   'was',
                   'in',
                   'the control'],
                  'Can you tell me what the working depth was in the control?'),
                 ('The paper reports a yield penalty in year one.',
                  ['do',
                   'you',
                   'know',
                   'whether',
                   'the penalty',
                   'had',
                   'gone',
                   'by',
                   'the fourth',
                   'season'],
                  'Do you know whether the penalty had gone by the fourth season?'),
                 ('Infiltration was measured once.',
                  ['how',
                   'wet',
                   'was',
                   'the ground',
                   'on',
                   'the day',
                   'that',
                   'measurement',
                   'was',
                   'taken'],
                  'How wet was the ground on the day that measurement was taken?'),
                 ('The trial used a cover crop in the winter.',
                  ['was',
                   'the cover',
                   'crop',
                   'grazed',
                   'or',
                   'left',
                   'as',
                   'a',
                   'surface',
                   'mulch'],
                  'Was the cover crop grazed or left as a surface mulch?'),
                 ('Two trials on the same question disagree.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'what',
                   'the two',
                   'soils',
                   'had',
                   'in',
                   'common'],
                  'I would like to know what the two soils had in common.')]},
 'w2': {'sub': 'What tillage does to soil',
        'to': 'trials@eastfield.ac.uk',
        'date': '06/11/2029',
        'subject': 'Hosting a cold-wet site — what we can offer and what we cannot',
        'scenario': ['Eastfield has replied to Greta Lindqvist and asked whether your college '
                     'could host the cold-wet comparison site. You can offer twelve hectares of '
                     'heavy clay, a spring soil temperature record going back nine years, and '
                     'labour. You cannot offer a direct drill, and your rotation includes two '
                     'years of grass, which the Eastfield protocol does not allow for.',
                     'Write an email to the Eastfield trials team.'],
        'bullets': ['Say what you can offer, with the figures.',
                    'State the two things that do not fit their protocol.',
                    'Propose how to handle the rotation problem.'],
        'skill': ('Offering something with its limits attached',
                  ['Lead with what you have, in figures. An offer without numbers reads as '
                   'enthusiasm.',
                   'Name the mismatches yourself rather than letting them be found later.',
                   'Propose a solution to the hardest one, so the reply can be a yes.']),
        'model': ['Dear Eastfield team,',
                  '',
                  'Yes, and here is exactly what we can put behind it. Twelve hectares of heavy '
                  'clay in one block, uniform enough that we have used it for variety trials '
                  'since 2021. A spring soil temperature record at 10 cm going back nine years, '
                  'daily, which gives you the cold end of the range your current site cannot '
                  'reach: our mean for the first three weeks of April is 6.1 degrees against '
                  'your 9.4. And labour for drilling, sampling and the soil pits, at no cost to '
                  'the trial.',
                  '',
                  'Two things do not fit your protocol and I would rather say so now. We have no '
                  'direct drill. Hiring one for two days a season is about 900 pounds and we '
                  'have not budgeted it, so that is a question for your side or for a joint '
                  'application.',
                  '',
                  'The harder one is the rotation. Ours carries two years of grass in five, '
                  'which your protocol does not allow for, and I am not willing to drop it: the '
                  'grass is what keeps this ground workable and a trial without it would not be '
                  'a trial of anything we actually do. What I would propose instead is that the '
                  'two grass years be treated as a declared departure, with the plots sampled '
                  'through them and the yield comparison made only across the three arable '
                  'years. That gives you a six-season set with three comparable seasons rather '
                  'than six, which is a real loss, and the alternative is a site that answers a '
                  'question nobody here is asking.',
                  '',
                  'If that is unacceptable, say so plainly and we will part on good terms. If it '
                  'will do, I can have the first soil pits open before the end of the month.',
                  '',
                  'With thanks,',
                  'Dr Amara Nwachukwu'],
        'notes': ['The offer comes first and every part of it carries a figure: twelve hectares, '
                  'nine years, 6.1 against 9.4.',
                  'The two mismatches are volunteered rather than discovered, and the cheaper '
                  'one is priced.',
                  'The hard one is refused with a reason about the ground rather than a '
                  'preference, and a workable alternative is proposed in the same paragraph.',
                  'The cost of that alternative is stated by the writer, which is what makes it '
                  'an offer rather than a request.'],
        'bandpair': {'mid': ['Dear Eastfield team,',
                             'Thank you very much for thinking of us, and we would be delighted '
                             'to host the cold-wet site. We have about twelve hectares of heavy '
                             'clay which we think would be very suitable, and we also have quite '
                             'a lot of soil temperature data going back several years which '
                             'might be useful to you. We could also help with the work.',
                             'There are one or two small problems. Unfortunately we do not have '
                             'a direct drill, so we would have to hire one, and I am not sure '
                             'who would pay for that. Also our rotation has some grass in it, '
                             'which I think may not be what your protocol expects, and we would '
                             'prefer to keep the grass because it helps the soil here.',
                             'Perhaps we could discuss how to deal with the grass years. I am '
                             'sure there is a way around it if we talk it through. Do let me '
                             'know what you think and whether you would like to visit.',
                             'Best wishes, Dr Amara Nwachukwu'],
                     'top': ['Dear Eastfield team,',
                             'Yes, and here is what sits behind it. Twelve hectares of heavy '
                             'clay in one block, used for variety trials since 2021. A daily '
                             'spring soil temperature record at 10 cm over nine years: our April '
                             'mean is 6.1 degrees against your 9.4, which is the cold end your '
                             'site cannot reach. Labour for drilling, sampling and pits at no '
                             'cost to the trial.',
                             'Two mismatches, which I would rather raise than have found. We '
                             'have no direct drill; hire is about 900 pounds a season and is '
                             'unbudgeted, so that is for your side or a joint application.',
                             'The rotation is harder. Two years of grass in five, which your '
                             'protocol excludes, and I will not drop it, because the grass is '
                             'what keeps this ground workable and a trial without it tests '
                             'nothing we do. I propose the grass years be a declared departure, '
                             'sampled throughout, with yield compared only across the three '
                             'arable seasons. That is three comparable seasons rather than six, '
                             'a real loss, against a site that answers nobody’s question.',
                             'If that is unacceptable, say so and we will part on good terms. If '
                             'it will do, the first pits can be open this month.',
                             'Dr Amara Nwachukwu'],
                     'diffs': ['Every element of the offer carries a figure, where the middle '
                               'answer says about twelve hectares and quite a lot of data.',
                               'The mismatches are named as mismatches and the cheap one is '
                               'priced, so the reader can dispose of it in a line.',
                               'The refusal is grounded in the soil rather than in a preference, '
                               'which is the difference between would prefer and will not.',
                               'A specific alternative is proposed, with its cost stated by the '
                               'writer rather than left for the reader to discover.',
                               'It offers a clean exit, which makes the whole message easier to '
                               'say yes to than the invitation to discuss it.']}},
 'w3': {'sub': 'Yield, and what it leaves out',
        'prof': 'Dr Saarinen',
        'question': 'A government scheme pays farmers for practices that raise soil organic '
                    'matter. One proposal is to pay on a measured increase in organic matter; '
                    'another is to pay for carrying out the practices, measured or not. '
                    'Measuring organic matter costs about 40 pounds a hectare and is noisy over '
                    'short periods. Which basis should the scheme use?',
        'posts': [('Rosa',
                   'w',
                   'Pay for the outcome. Paying for the practice pays people for doing things '
                   'that may not work on their ground, and the whole lesson of this unit is that '
                   'practices behave differently from one soil to the next.'),
                  ('Teodor',
                   'm',
                   'Measurement at 40 pounds a hectare and noise over five years means you are '
                   'paying for sampling error. On a 200-hectare farm that is 8,000 pounds a '
                   'round to measure something that moves more between two augers than between '
                   'two years.')],
        'skill': ('A question about paying for an outcome or an action',
                  ['Rosa argues from the variation between soils; Teodor from the cost and noise '
                   'of the measurement.',
                   'The unit gives you the distinction between a quantity that is easy to '
                   'measure and the one that matters.',
                   'A strong answer finds a third basis rather than choosing between the two '
                   'given.']),
        'starters': ['Teodor is right that…, although what follows is…',
                     'The distinction worth drawing is between… and…',
                     'On any reading of the evidence, the scheme should…',
                     'What that gives up is…'],
        'model': ['Teodor is right about the noise and has priced the wrong thing. Forty pounds '
                  'a hectare is the cost of measuring to a standard that would settle a '
                  'scientific question, and a payment scheme does not need that: it needs a '
                  'measurement good enough to separate a farm that did the work from one that '
                  'did not. Those are different standards and the second is a great deal '
                  'cheaper.',
                  'Rosa is right that practices behave differently from one soil to the next and '
                  'she has not noticed that her remedy inherits the problem. A farm on a sandy '
                  'loam can raise organic matter by a measurable amount in five years; the same '
                  'effort on a heavy clay already at four per cent will not move the figure at '
                  'all, and paying on outcome pays that farm nothing for identical work.',
                  'So the scheme should pay for the practice and sample for the outcome, which '
                  'is the arrangement neither of them proposed. Payment follows a verified '
                  'action, and a stratified sample of one farm in twenty, measured properly and '
                  'published, tells the scheme whether the practices it is paying for do '
                  'anything on the soils it is paying on. What that gives up is the appearance '
                  'of paying for results, which is politically valuable and, on any reading of '
                  'the evidence about short-run measurement, not actually available to be paid '
                  'for in the first place. The alternative is a scheme that pays for sampling '
                  'error on the farms where the figure happens to move and nothing at all for '
                  'identical work on the farms where it cannot, which is the worst of the three '
                  'arrangements on the table and the one most likely to be adopted.'],
        'model_words': 285},
 'w4': {'sub': 'What tillage does to soil',
        'skill': ('Reduced relative and appositive clauses',
                  ['A relative clause can lose its pronoun and its verb: matter which is held '
                   'inside aggregates becomes matter held inside aggregates.',
                   'An appositive defines a noun as the sentence passes it: humus, the decayed '
                   'fraction, holds the water.',
                   'Both are ways of carrying a definition without stopping for it.']),
        'guided': [('Reduce the relative clause.',
                    ['organic',
                     'matter',
                     'held',
                     'inside',
                     'the aggregates',
                     'is',
                     'mineralised',
                     'within',
                     'weeks'],
                    'Organic matter held inside the aggregates is mineralised within weeks.'),
                   ('Use an appositive to define a term in passing.',
                    ['humus',
                     'the decayed',
                     'fraction',
                     'of',
                     'the',
                     'organic',
                     'matter',
                     'holds',
                     'the water'],
                    'Humus, the decayed fraction of the organic matter, holds the water.'),
                   ('Reduce with a present participle.',
                    ['the trials',
                     'supporting',
                     'that claim',
                     'were',
                     'run',
                     'on',
                     'the',
                     'free-draining',
                     'soils'],
                    'The trials supporting that claim were run on the free-draining soils.')],
        'exam': [('Reduce the relative clause.',
                  ['the nutrients',
                   'released',
                   'by',
                   'a ploughing',
                   'are',
                   'available',
                   'to',
                   'the following',
                   'crop'],
                  'The nutrients released by a ploughing are available to the following crop.'),
                 ('Use an appositive for the second term.',
                  ['compaction',
                   'a layer',
                   'roots',
                   'cannot',
                   'enter',
                   'is',
                   'trivial',
                   'on',
                   'sand'],
                  'Compaction, a layer roots cannot enter, is trivial on sand.'),
                 ('Reduce with a present participle.',
                  ['any scheme',
                   'intending',
                   'to',
                   'protect',
                   'the',
                   'soil',
                   'must',
                   'address',
                   'the horizon'],
                  'Any scheme intending to protect the soil must address the horizon.'),
                 ('Reduce the relative clause after a figure.',
                  ['the eighty',
                   'per cent',
                   'reported',
                   'in',
                   'that trial',
                   'is',
                   'a cost',
                   'almost',
                   'everywhere'],
                  'The eighty per cent reported in that trial is a cost almost everywhere.'),
                 ('Use an appositive to gloss a technical word.',
                  ['tillage',
                   'the mechanical',
                   'inversion',
                   'of',
                   'the soil',
                   'releases',
                   'nutrients',
                   'within',
                   'weeks'],
                  'Tillage, the mechanical inversion of the soil, releases nutrients within '
                  'weeks.')]},
 'w5': {'sub': 'Yield, and what it leaves out',
        'prof': 'Dr Mbeki',
        'question': 'A journal is asked to require that every tillage trial report soil texture, '
                    'annual rainfall and mean spring soil temperature. Its editors say two of '
                    'the three are already standard and the third is not routinely recorded, so '
                    'the rule would exclude good work from institutions without the '
                    'instrumentation. Should the journal require all three?',
        'posts': [('Pia',
                   'w',
                   'Require all three. A trial without the spring temperature cannot be used by '
                   'anybody outside the region it was run in, and publishing it as though it '
                   'could is the whole problem.'),
                  ('Hassan',
                   'm',
                   'Pia is excluding exactly the laboratories whose results we most need. A soil '
                   'thermometer and a logger is 300 pounds, which is nothing to Pia and a month '
                   'of argument with a finance office in a lot of places.')],
        'skill': ('A question where a standard raises a barrier',
                  ['Pia argues from what a reader can do with the result; Hassan from who is '
                   'excluded by the requirement.',
                   'The second passage asks for the three lines and does not say what to do when '
                   'one is unavailable.',
                   'A strong answer prices Hassan’s objection and keeps Pia’s requirement.']),
        'starters': ['Hassan is right that…, although the cost he names…',
                     'The distinction worth drawing is between… and…',
                     'What the journal should require is…',
                     'What that gives up is…'],
        'model': ['Hassan is right that a requirement can exclude, and the figure he gives is '
                  'the argument against his own position. Three hundred pounds of '
                  'instrumentation is less than the cost of one season of plot work, and a rule '
                  'announced two years ahead of enforcement turns it from a barrier into a line '
                  'in a grant application. The objection is about timing rather than about the '
                  'requirement.',
                  'Pia is right about what a reader can do and she has skipped the case that '
                  'actually arises, which is a trial already run and now being written up. For '
                  'that trial the temperature record does not exist and cannot be created, and '
                  'refusing it discards work that is sound on its own ground.',
                  'So the journal should require all three for trials beginning after a stated '
                  'date, and for earlier work require a declared statement that the record was '
                  'not kept, printed where the three lines would have been. That second half is '
                  'the part that does the work. A blank in a table is read by every subsequent '
                  'author, and a blank that appears in one paper in three for a decade becomes '
                  'an embarrassment long before it becomes a rule, so that within a few years '
                  'nobody plans a trial without the logger. That is the outcome Pia wants, '
                  'arrived at by the route Hassan can live with, and it costs the journal '
                  'nothing to announce. What it gives up is immediate comparability, since the '
                  'literature will carry two kinds of paper for a decade, and that is a smaller '
                  'cost than either excluding the work or going on publishing percentages whose '
                  'domain nobody can establish.'],
        'model_words': 276},
 'sp': [{'sub': 'Buying and storing grain',
         'focus': 'giving the condition that makes a refusal reasonable',
         'skill': ('Not unless you can keep it below fourteen per cent',
                   ['Say the refusal, then the condition, with the number in it.',
                    'Stress the number. It is the part that turns a no into advice.',
                    'Keep the whole thing in one breath, or it sounds like two objections.']),
         'repeat': ['The heap insulates itself.',
                    'Grain above fourteen per cent respires.',
                    'Not unless you can keep it dry.',
                    'One reading tells you nothing at all.',
                    'Spread it thinner and use that part first.',
                    'A rise of two degrees over three weeks is the thing to act on.',
                    'Almost all the loss I see is from people who bought well and then stopped '
                    'looking.'],
         'theme': 'storing or keeping something that spoils',
         'qs': ['Tell me about something you had to store carefully. What went wrong, or nearly '
                'did?',
                'Some people say buying in bulk always saves money. How far would you agree?',
                'How would you explain to a friend why one measurement is not enough?',
                'Finally, describe a problem that was invisible until it was serious.'],
         'model': [(2,
                    'I would add a condition rather than disagree. Buying in bulk saves money if '
                    'you can keep the thing in the state you bought it in, and the cost of doing '
                    'that is the part nobody puts in the sum.'),
                   (3,
                    'One reading gives you a value with nothing to compare it to. A series gives '
                    'you a direction, and the direction is what tells you whether to act.')],
         'selfcheck': ['I gave the refusal and then the condition',
                       'I stressed the number',
                       'I used at least two of the unit’s field words']},
        {'sub': 'What tillage does to soil',
         'focus': 'describing two things side by side',
         'skill': ('This one breaks into blocks; that one comes away in crumbs',
                   ['Give the two in the same grammar, so the contrast carries itself.',
                    'Stress the two nouns that differ and nothing else.',
                    'Point before you speak. A comparison spoken before the listener has looked '
                    'is wasted.']),
         'repeat': ['The headland breaks into blocks.',
                    'This one is the ploughed headland.',
                    'That one is the untouched margin.',
                    'The margin comes away in crumbs.',
                    'The crumb structure took about thirty years to build.',
                    'The channels are worm burrows and they go down past a metre.',
                    'A plough undoes it in an afternoon, not because the implement is bad but '
                    'because turning soil breaks a crumb.'],
         'theme': 'two things you can compare in front of somebody',
         'qs': ['Describe two things you have compared side by side. What did the comparison '
                'show?',
                'Some people say you cannot judge soil, or anything, by looking. How far would '
                'you agree?',
                'How would you explain to a friend why a plough damages soil structure?',
                'Finally, describe something that took years to build and was lost quickly.'],
         'model': [(2,
                    'I would say looking is unreliable on its own and indispensable with a '
                    'number beside it. In this unit the spade tells you what to measure, and the '
                    'infiltration figure tells you how much it matters.'),
                   (3,
                    'Soil is held in crumbs, and the crumbs are glued by roots, fungal threads '
                    'and decayed matter. Turning the soil over breaks the crumbs, and the gluing '
                    'took thirty years.')],
         'selfcheck': ['I gave the two halves in the same grammar',
                       'I stressed only the nouns that differ',
                       'I used at least two of the unit’s field words']},
        {'sub': 'Yield, and what it leaves out',
         'focus': 'asking what a percentage is a percentage of',
         'skill': ('Six per cent of what?',
                   ['Ask the short question first. The long version lets the other person choose '
                    'what to answer.',
                    'Then name the two candidates, so the question cannot be dodged.',
                    'Keep the tone neutral. This question sounds hostile if it is rushed.']),
         'repeat': ['Yield, or margin?',
                    'Six per cent of what?',
                    'A margin needs every input priced.',
                    'Yield can be weighed on a trailer.',
                    'Nobody in the trial has been dishonest.',
                    'Four per cent more yield and nine per cent more cost is a loss.',
                    'Find out which of the two a paper reports before you read what it '
                    'concludes.'],
         'theme': 'figures that answer a narrower question than they seem to',
         'qs': ['Tell me about a figure you were given that answered a different question. What '
                'was missing?',
                'Some people think a percentage is always clearer than a description. What do '
                'you think?',
                'How would you explain to a friend the difference between yield and margin?',
                'Finally, describe a decision where the easy measurement was the wrong one.'],
         'model': [(2,
                    'I think a percentage is clearer and more often misunderstood, because it '
                    'hides what it is a percentage of. A description cannot do that: it has to '
                    'name the thing.'),
                   (3,
                    'Yield is how much came off the field. Margin is what was left after you '
                    'paid for everything that made it come off. You can improve the first and '
                    'ruin the second in the same season.')],
         'selfcheck': ['I asked the short question first',
                       'I named both candidates',
                       'I kept the tone neutral']},
        {'sub': 'What tillage does to soil',
         'focus': 'stating a benefit and a cost on two timescales',
         'skill': ('The benefit lands in one season and the cost lands over thirty years',
                   ['Give both intervals explicitly. A listener who hears only one thinks you '
                    'are advocating.',
                    'Stress the two time phrases, not the nouns.',
                    'Then say whose decision it is, so it does not sound like a verdict.']),
         'repeat': ['Replacement takes decades.',
                    'The benefit lands in one season.',
                    'The cost lands over thirty years.',
                    'You spent the stock to get the income.',
                    'The farmer who ploughs is not being stupid.',
                    'A three-year tenancy makes it a different trade.',
                    'The question is about the horizon and not about the implement, which is '
                    'where every scheme has come apart.'],
         'theme': 'a choice whose cost arrives much later',
         'qs': ['Tell me about a decision whose cost arrived long after the benefit. Who paid '
                'it?',
                'Some people say people who take the short view are simply selfish. How far '
                'would you agree?',
                'How would you explain to a friend why a good farmer might damage their soil?',
                'Finally, describe a rule that tried to make people take a longer view.'],
         'model': [(2,
                    'I would be slower than that. A short view is sometimes the only view '
                    'available: if you hold the land for three years, a thirty-year cost is not '
                    'yours to weigh, and calling that selfishness explains nothing and changes '
                    'nothing.'),
                   (3,
                    'Ploughing releases the nutrients locked inside the soil crumbs, and the '
                    'crop gets them. The material that releases them is the same material that '
                    'holds the crumbs together, so you are spending the thing that makes the '
                    'field work.')],
         'selfcheck': ['I gave both intervals explicitly',
                       'I stressed the time phrases',
                       'I said whose decision it is']},
        {'sub': 'Yield, and what it leaves out',
         'focus': 'criticising a generalisation while granting the finding',
         'skill': ('No-tillage works. What I dispute is the step to a general recommendation.',
                   ['Grant the finding in a short flat sentence. Any hedging here reads as '
                    'disagreement.',
                    'Then name the step you reject, using the word step or inference.',
                    'Finish with the condition that would make the step valid.']),
         'repeat': ['No-tillage works.',
                    'Infiltration goes up several times over.',
                    'I am not disputing any of that.',
                    'Look at where those trials were done.',
                    'Better structure does not fix a cold April.',
                    'What I dispute is the step to a general recommendation.',
                    'Give me the texture, the rainfall and the spring soil temperature and I can '
                    'tell whether it reaches my ground.'],
         'theme': 'a finding that does not travel',
         'qs': ['Tell me about advice that worked somewhere else and not where you are. What was '
                'different?',
                'Some people think a result from one place should be assumed to hold everywhere '
                'until shown otherwise. What do you think?',
                'How should somebody report a trial so a stranger can use it?',
                'Finally, describe a case where the conditions mattered more than the method.'],
         'model': [(2,
                    'I would reverse the burden. A result holds where it was obtained, and the '
                    'claim that it travels is a separate claim needing its own evidence, which '
                    'is almost never supplied.'),
                   (3,
                    'Three lines before anything else: what the soil is, how much rain falls, '
                    'and how cold the ground is in spring. With those I can work out whether the '
                    'result is about my field.')],
         'selfcheck': ['I granted the finding flatly first',
                       'I named the step I reject',
                       'I finished with the condition that would make it valid']}],
 'gram': {'title': 'Reduced relative and appositive clauses',
          'headers': ['Full form', 'Reduced or appositive'],
          'rows': [('matter which is held inside aggregates', 'matter held inside aggregates'),
                   ('the trials which support that claim', 'the trials supporting that claim'),
                   ('humus, which is the decayed fraction, holds water',
                    'humus, the decayed fraction, holds water'),
                   ('any scheme which intends to protect soil',
                    'any scheme intending to protect soil'),
                   ('the figure which was reported in that trial',
                    'the figure reported in that trial'),
                   ('tillage, which is the inversion of the soil',
                    'tillage, the inversion of the soil'),
                   ('a layer which roots cannot enter', 'a layer roots cannot enter')],
          'notes': ['A relative clause can drop its pronoun and its form of be. Which is held '
                    'becomes held; which supports becomes supporting. The participle keeps the '
                    'voice: held is passive, supporting is active, and choosing the wrong one '
                    'reverses the sentence.',
                    'An appositive is a noun phrase in commas renaming the noun before it. It is '
                    'the cheapest way to define a technical term without stopping the sentence, '
                    'and this volume uses it constantly for exactly that reason.',
                    'A reduced clause must still attach to the noun beside it. Held inside '
                    'aggregates, bacteria mineralise the matter says that the bacteria were '
                    'inside the aggregates, which is not what anybody meant.'],
          'watch': 'Do not reduce a clause whose pronoun is the subject of a different verb. '
                   '"The farmer who ploughs is not stupid" cannot become "The farmer ploughing '
                   'is not stupid" without changing who is doing what, and at this level the '
                   'examiner will notice.',
          'ex': [('Reduce the relative clause.',
                  ['The matter which is held inside aggregates is mineralised.',
                   'The trials which support that claim were run on sand.',
                   'The nutrients which are released by ploughing feed the crop.',
                   'Any scheme which intends to protect soil must address tenure.',
                   'The figure which was reported in that trial is a cost.',
                   'A layer which roots cannot enter forms under traffic.'],
                  ['The matter held inside aggregates is mineralised.',
                   'The trials supporting that claim were run on sand.',
                   'The nutrients released by ploughing feed the crop.',
                   'Any scheme intending to protect soil must address tenure.',
                   'The figure reported in that trial is a cost.',
                   'A layer roots cannot enter forms under traffic.']),
                 ('Add an appositive defining the term.',
                  ['Humus holds the water. (the decayed fraction)',
                   'Tillage releases nutrients. (the inversion of the soil)',
                   'Compaction is severe on clay. (a layer roots cannot enter)',
                   'Infiltration fell to nine millimetres. (the rate water enters soil)'],
                  ['Humus, the decayed fraction, holds the water.',
                   'Tillage, the inversion of the soil, releases nutrients.',
                   'Compaction, a layer roots cannot enter, is severe on clay.',
                   'Infiltration, the rate water enters soil, fell to nine millimetres.']),
                 ('Correct the dangling reduction.',
                  ['Held inside aggregates, bacteria mineralise the matter.',
                   'Supporting that claim, the soil was free-draining.',
                   'Reported in the trial, the author gave no rainfall.',
                   'Intending to protect soil, the plough was abandoned.'],
                  ['Held inside aggregates, the matter is mineralised by bacteria.',
                   'The trials supporting that claim were run on free-draining soil.',
                   'The figure reported in the trial came with no rainfall.',
                   'Intending to protect soil, the tenant abandoned the plough.'])],
          'bas': 'Build a Sentence in this unit asks what a figure was measured on. The tiles '
                 'usually hold a reduced clause: reported in that trial, released by ploughing. '
                 'Put it straight after the noun it belongs to.'},
 'fault': {'text': 'Held inside aggregates, bacteria mineralise the matter within weeks. The '
                   'trials which supporting that claim were run on sand. Humus which the decayed '
                   'fraction holds the water. Intending to protect soil, the plough was '
                   'abandoned. Do you know whether did the trial report rainfall?',
           'faults': [('Held inside aggregates, bacteria mineralise the matter',
                       'Held inside aggregates, the matter is mineralised by bacteria',
                       'A reduced clause attaches to the noun beside it, and this one says the '
                       'bacteria were inside the aggregates.'),
                      ('The trials which supporting that claim',
                       'The trials supporting that claim',
                       'A reduced clause drops the pronoun as well as the verb; keeping which '
                       'and using a participle gives neither form.'),
                      ('Humus which the decayed fraction holds the water',
                       'Humus, the decayed fraction, holds the water',
                       'An appositive takes commas and no relative pronoun, since it renames the '
                       'noun rather than modifying it.'),
                      ('Intending to protect soil, the plough was abandoned',
                       'Intending to protect soil, the tenant abandoned the plough',
                       'The participle needs a subject that can intend something, and a plough '
                       'cannot.'),
                      ('whether did the trial report rainfall',
                       'whether the trial reported rainfall',
                       'An embedded question keeps statement order and does not use the '
                       'auxiliary did.')]},
 'rev': {'vocab': [('the ploughing and turning of soil before sowing', 'tillage'),
                   ('the dark decayed matter that holds water in soil', 'humus'),
                   ('to break organic matter down into simple salts', 'mineralise'),
                   ('the pressing of soil into a layer roots cannot enter', 'compaction'),
                   ('the rate at which water enters soil instead of running off', 'infiltration'),
                   ('the terms on which land is held, and for how long', 'tenure'),
                   ('the proportions of sand, silt and clay in a soil', 'texture'),
                   ('a layer left on the surface rather than turned in', 'mulch'),
                   ('the carrying away of soil by water or wind', 'erosion'),
                   ('to give up something you could have had', 'forgo'),
                   ('present but not yet showing', 'latent'),
                   ('to set out the boundary of something', 'delineate')],
         'gram': [('The matter ______ inside aggregates is mineralised.', 'held'),
                  ('The trials ______ that claim were run on sand.', 'supporting'),
                  ('Humus, the decayed ______, holds the water.', 'fraction'),
                  ('Any scheme ______ to protect soil must address tenure.', 'intending'),
                  ('The figure ______ in that trial is a cost everywhere.', 'reported'),
                  ('A layer roots ______ enter forms under traffic.', 'cannot'),
                  ('Tillage, the ______ of the soil, releases nutrients.', 'inversion'),
                  ('Do you know whether the trial ______ rainfall?', 'reported')],
         'mini': [('The short-run benefit of tillage comes from',
                   ('warmer soil alone',
                    'organic matter exposed and mineralised',
                    'fewer weeds',
                    'better infiltration'),
                   1,
                   'Matter protected inside aggregates is exposed to air and broken down within '
                   'weeks.'),
                  ('The same process imposes a long-run cost because',
                   ('the soil becomes acidic',
                    'the matter consumed was holding the crumbs together',
                    'nutrients are leached away',
                    'worms are killed'),
                   1,
                   'The binding material and the nutrient source are the same stock.'),
                  ('In the Eastfield trial, no-tillage yields in seasons 1 and 2 were',
                   ('above the control', 'below the control', 'unchanged', 'not measured'),
                   1,
                   'Seven per cent below, with the advantage arriving only by seasons 5 and 6.'),
                  ('Greta Lindqvist objects that the result',
                   ('is statistically invalid',
                    'does not apply to cold wet clay',
                    'ignores herbicide use',
                    'was too short'),
                   1,
                   'Her limiting factor is spring temperature, which better structure does not '
                   'relieve.'),
                  ('A method raising yield 4 per cent and costs 9 per cent is',
                   ('an improvement',
                    'a loss on a commercial holding',
                    'impossible',
                    'within the error of a trial'),
                   1,
                   'Which is the gap between yield and margin that the unit is built on.'),
                  ('The three lines the unit asks every trial to publish are',
                   ('yield, margin and price',
                    'texture, rainfall and mean spring soil temperature',
                    'treatments, plots and seasons',
                    'herbicide, compaction and erosion'),
                   1,
                   'Without them a reader cannot tell whether a result reaches their own '
                   'ground.')]},
 'tip': 'The two academic passages in this unit are the longest you have met so far and they are '
        'about the same practice from opposite ends. Read cycle 4 and then cycle 5 in one '
        'sitting, with twenty minutes between them, and write one sentence saying what the '
        'second one concedes to the first. If you cannot write that sentence, you have read them '
        'as two opinions rather than as an argument.'}

