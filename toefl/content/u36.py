# -*- coding: utf-8 -*-
"""Unit 36 — Conservation and Biodiversity. Volume 4."""
from content._g import gaps

_GT, _GA = gaps(
    'Rarely does a species disappear because the last individuals were killed. What happens '
    'first is that the habitat is broken into pie{ces} too small to support a breeding '
    'populat{ion}, and the animals that remain are a collection of isolated groups rather '
    'than one. Each group is then vulnerable to an ordinary bad year, and extinction '
    'arr{ives} as a series of small local losses that nobody records as remar{kable} until '
    'the total is counted and found to be ze{ro}.')

_ET, _EA = gaps(
    'Conservation has spent forty years arguing about whether to protect species or habitats, '
    'and the argument has outlived its usefulness. Protecting a species means, in practice, '
    'protecting whatever it depends on, so the two policies converge almost '
    'immedia{tely}. Where they genuinely diverge is in what gets measu{red} and therefore '
    'funded: a programme aimed at a single charismatic animal produces a number that a '
    'minister can repeat, and a programme aimed at an ecosystem produces a report nobody can '
    'summar{ise}. Not until this is treated as a problem about institutions rather than '
    'about ecology will it be solv{able}. There is a further difficulty that conservation '
    'biology has been reluc{tant} to state plainly. Restoration is not reve{rsible} in the '
    'way the word suggests. A woodland replanted on cleared ground reaches something '
    'resembling the original in perhaps a cent{ury}, and the soil community it lost may take '
    'very much lon{ger} or may not return at all, because the species that built it are no '
    'longer in the neighbourhood to recoloni{se}. Replanting is therefore worth doing and is '
    'not a licence for clearance elsewhere, and the distinction matters because the second '
    'claim is routinely made in the language of the fi{rst}.')

UNIT = dict(
    n=36, vol=4, level='B2',
    title='Conservation and Biodiversity',
    icons=['globe', 'chart', 'speech'],
    subs=['How habitats break up', 'Counting what is there',
          'Restoration and what it cannot restore'],
    grammar='Inversion after negative adverbials',
    field='habitat, fragmentation, baseline',
    opener_line='Conservation writing uses inversion more than almost any other field: '
                'rarely does a species vanish, not until the habitat is measured, under no '
                'circumstances should. This unit teaches that structure and the vocabulary '
                'of a discipline that has to argue in public.',
    candos=[
        'I can front a negative adverbial and invert the verb correctly.',
        'I can use rarely, seldom, not until, no sooner and under no circumstances.',
        'I can explain a process that happens gradually and is noticed suddenly.',
        'I can read a monitoring report and say what it does not establish.',
        'I can follow a talk that criticises how success is measured.',
        'I can write about a trade-off where one side is easier to count.',
    ],

    acad=[
        ('habitat', 'the place a species lives in'),
        ('fragmentation', 'the breaking of a habitat into separate pieces'),
        ('corridor', 'a strip of habitat connecting two larger areas'),
        ('endemic', 'found only in one place'),
        ('invasive', 'spreading where it did not previously occur'),
        ('baseline', 'the reference state a change is measured against'),
        ('abundance', 'how many individuals there are'),
        ('biomass', 'the total mass of living material'),
        ('canopy', 'the upper layer of a forest'),
        ('understorey', 'the vegetation below the canopy'),
        ('pollinator', 'an animal that carries pollen between plants'),
        ('keystone', 'a species whose removal changes the whole system'),
        ('trophic', 'to do with feeding levels in a food web'),
        ('succession', 'the orderly change of a community over time'),
        ('restoration', 'returning a degraded place towards an earlier state'),
        ('degradation', 'loss of quality or function'),
        ('viable', 'able to survive and reproduce'),
        ('quadrat', 'a marked square in which organisms are counted'),
    ],
    family=('conserve', [
        ('conservation', 'noun', 'conservation funding fell again'),
        ('conservationist', 'noun', 'a conservationist with field experience'),
        ('conserved', 'adjective', 'a conserved wetland on the floodplain'),
    ]),
    collocs=[
        ('die back', 'to decline without disappearing'),
        ('wipe out', 'to destroy completely'),
        ('set aside', 'to reserve for a purpose'),
        ('bounce back', 'to recover quickly'),
        ('hold on', 'to survive marginally'),
        ('tip over', 'to pass a point of no return'),
        ('in the round', 'considered as a whole'),
        ('on paper', 'in theory but perhaps not in fact'),
        ('at a stroke', 'in one single action'),
        ('with hindsight', 'knowing how it turned out'),
    ],
    stance=[
        ('on paper', 'in theory, perhaps not in fact'),
        ('with hindsight', 'knowing now how it turned out'),
        ('it is no accident that', 'the writer claims a cause'),
        ('has yet to be shown', 'the writer notes a missing result'),
        ('to a limited extent', 'partly and not more'),
    ],
    nuance=[
        ('extinct / extirpated', 'gone everywhere / gone locally'),
        ('abundance / diversity', 'how many / how many kinds'),
        ('restoration / replacement', 'returning a system / building a new one'),
    ],
    vocab_talk=[
        'Describe a place near you that has changed. What was the baseline?',
        'Why is a charismatic animal easier to fund than an ecosystem?',
        'What does replanting a wood not restore?',
        'Is a species protected on paper actually protected? Give an example.',
    ],
    again=['metapopulation', 'edge effect', 'gene flow', 'rewilding',
           'red list', 'offsetting', 'shifting baseline', 'ecosystem service'],

    r1=dict(
        sub='How habitats break up',
        skill=('Completing nouns of quality and of process',
               ['Ecology writing is full of -ation and -ity nouns: fragmentation, '
                'degradation, viability.',
                'The -able and -ible endings mark possibility: solvable, reversible.',
                'A gap after too or so usually needs an adjective, not a noun.']),
        guided_text=_GT, guided=_GA,
        guided_hint='pie--- is pieces — it follows broken into and names things, so the slot '
                    'is a plural noun.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Counting what is there',
        skill=('Reading a survey protocol against a result',
               ['A protocol says how a count must be made. A result is only as good as the '
                'protocol it followed.',
                'Look for the conditions: time of day, season, minimum number of visits.',
                'A result obtained outside the protocol is not wrong; it is unusable for the '
                'purpose the protocol serves.']),
        docs=[
            ('notice', 'County Wildlife Trust · breeding bird survey protocol', [
                '# Required for a valid count',
                '* Four visits between 1 April and 30 June, at least ten days apart.',
                '* Starting within one hour of sunrise, in dry conditions with wind below '
                'force 4.',
                '* The same transect route on every visit, walked at a steady pace.',
                '# What a valid count establishes',
                '* Presence, and a minimum abundance for the species recorded.',
                '# What it does not establish',
                '* Absence. A species not recorded in four visits is unrecorded, not absent.',
                '* Breeding, unless nest, eggs or dependent young are seen.',
            ], 'notice'),
            ('email', 'e.farquharson@countytrust.org', 'b.adeyemi@volunteer.net',
             '03/07/2028', 'Your survey returns — three visits and a question', [
                 'Dear Mr Adeyemi,',
                 '',
                 'Thank you for the returns, which are unusually careful, and for flagging',
                 'the gap yourself rather than leaving me to find it.',
                 '',
                 'You have three valid visits. The fourth was on 2 July, two days outside',
                 'the window, so the count is not a valid survey under the protocol. That is',
                 'not a judgement about your fieldwork — the data is good and I will keep it',
                 'on file as incidental records.',
                 '',
                 'On your question: no, the absence of the lapwing from all four visits does',
                 'not establish that the lapwing has gone. The protocol is explicit, and it',
                 'is the point volunteers find hardest to accept. Four morning walks are',
                 'enough to say a bird is there and nowhere near enough to say it is not.',
                 '',
                 'What would help, if you are willing: the drainage work on the eastern edge',
                 'began in May, and nobody has a baseline for that field from before it. If',
                 'you walked the same transect next April we would have something to',
                 'compare. That is a four-year commitment to be useful and I will understand',
                 'entirely if it is too much.',
                 '',
                 'Dr Farquharson',
             ]),
        ],
        guided=[
            ('How many visits does a valid count require?',
             ('Two', 'Four', 'Six', 'As many as possible'), 1,
             'The protocol sets four, at least ten days apart, inside a fixed window.'),
            ('When must a visit start?',
             ('Any time', 'Within one hour of sunrise',
              'At midday', 'Before the window opens'), 1,
             'The timing condition sits alongside the weather conditions as part of '
             'validity.'),
            ('What does a valid count establish?',
             ('Absence', 'Presence and a minimum abundance',
              'Breeding', 'Population trend'), 1,
             'Those two things are listed together, and everything else is excluded.'),
            ('What does a count not establish?',
             ('Presence', 'Absence', 'Minimum abundance', 'The route walked'), 1,
             'A species not recorded in four visits is unrecorded rather than absent.'),
        ],
        exam=[
            ('Why is the survey not valid?',
             ('The route changed', 'The fourth visit fell outside the window',
              'The weather was wrong', 'Too few visits were made'), 1,
             'Two days past 30 June puts the fourth visit outside the protocol.'),
            ('What does the officer say about the fieldwork itself?',
             ('It was careless', 'The data is good and will be kept as incidental records',
              'It must be repeated', 'It cannot be used at all'), 1,
             'She separates the validity of the survey from the quality of the '
             'observation.'),
            ('What does she say about the missing lapwing?',
             ('It confirms a local extinction', 'It does not establish that the bird has gone',
              'It requires a fifth visit', 'It is a recording error'), 1,
             'Four morning walks can establish presence and not absence.'),
            ('Why does she mention what volunteers find hardest?',
             ('To criticise them', 'To acknowledge that the rule is counter-intuitive',
              'To explain the protocol’s origin', 'To ask for more visits'), 1,
             'She says it is the point they find hardest to accept, which frames the rule '
             'sympathetically.'),
            ('What is the problem with the eastern field?',
             ('It is inaccessible', 'There is no baseline from before the drainage work',
              'It is outside the transect', 'It has been surveyed too often'), 1,
             'Without a before-state the drainage effect cannot be measured.'),
            ('What is she asking for?',
             ('A fifth visit this year', 'The same transect walked next April',
              'A new protocol', 'A report on the drainage'), 1,
             'Repeating the route is what would create something to compare against.'),
            ('What does "a four-year commitment to be useful" tell you?',
             ('The work is easy', 'A single repeat year would not be enough',
              'The Trust pays for four years', 'The protocol lasts four years'), 1,
             'She is stating the real cost of the request before he agrees to it.'),
        ],
    ),

    r3=dict(
        sub='Restoration and what it cannot restore',
        title='What a Replanted Wood Is Not',
        words=294,
        paras=[
            'Replanting is the most popular conservation activity in the world and the least '
            'well understood by the people who fund it. A plantation of native species on '
            'cleared ground is, on paper, a restored woodland, and in the respects most '
            'easily photographed it is one. Canopy closes within twenty years, birds arrive, '
            'and the carbon figures are real. It is no accident that this is the activity '
            'politicians attend: the before and after are visible within a term of office.',

            'What does not return on that timescale is everything below the surface. The soil '
            'community of an old woodland — the fungi, the invertebrates, the particular '
            'chemistry built by centuries of the same litter falling in the same place — is '
            'not planted and cannot be. It arrives, if it arrives, by colonisation from '
            'nearby, which requires somewhere nearby for it to come from. Where the clearance '
            'was extensive there is no source population within reach, and the replanted wood '
            'develops a soil community resembling a young one indefinitely. That this '
            'converges on the original within a human lifetime has yet to be shown anywhere.',

            'None of which is an argument against replanting, and it is routinely used as '
            'one. The conclusion that actually follows is narrower and more awkward: '
            'replanting is worth doing on its own terms and is not an exchange rate. A scheme '
            'that clears mature woodland and plants twice the area elsewhere is, to a limited '
            'extent, replacing what it destroyed, and under no circumstances should the '
            'arithmetic of area be allowed to stand in for the comparison. With hindsight, '
            'the discipline’s mistake was accepting a vocabulary of restoration and offset '
            'that had equivalence built into it, and then trying to argue against the '
            'equivalence in words that assumed it.',
        ],
        skill=('Reading a passage that defends a practice against its own defenders',
               ['An author can support an activity and attack the argument used for it.',
                'Look for the sentence beginning none of which is an argument against.',
                'The real conclusion is usually narrower than either side wants.']),
        guided=[
            ('What does the author say a replanted wood is in the most photographable respects?',
             ('A failure', 'A restored woodland',
              'An ordinary plantation', 'An offset'), 1,
             'The concession is genuine: canopy, birds and carbon figures are all real.'),
            ('Why does the author say politicians attend replanting?',
             ('It is cheap', 'The before and after are visible within a term of office',
              'It is popular with scientists', 'It requires no permits'), 1,
             'It is no accident that marks the claim as causal rather than coincidental.'),
            ('What cannot be planted?',
             ('Native trees', 'The soil community',
              'The canopy', 'The understorey'), 1,
             'The fungi, invertebrates and chemistry arrive by colonisation or not at all.'),
            ('What does colonisation require?',
             ('Time only', 'A source population within reach',
              'Replanting', 'Protection from grazing'), 1,
             'Where the clearance was extensive there is nowhere nearby for it to come '
             'from.'),
        ],
        exam=[
            ('What does "has yet to be shown anywhere" refer to?',
             ('That replanting works', 'That the soil community converges on the original within a human lifetime',
              'That carbon figures are real', 'That birds return'), 1,
             'It marks a specific missing result rather than a general doubt.'),
            ('What conclusion does the author say does not follow?',
             ('That replanting is worth doing', 'That replanting should not be done',
              'That soil matters', 'That offsets are regulated'), 1,
             'None of which is an argument against replanting, and it is routinely used as '
             'one.'),
            ('What is the conclusion the author says does follow?',
             ('Replanting should be expanded', 'Replanting is worth doing but is not an exchange rate',
              'Clearance should be banned', 'Offsets should be doubled'), 1,
             'The author calls it narrower and more awkward than either side wants.'),
            ('What does the author say about a scheme that plants twice the area cleared?',
             ('It fully compensates', 'It replaces what it destroyed only to a limited extent',
              'It is fraudulent', 'It is unmeasurable'), 1,
             'The qualification is deliberate and sets up the objection to the arithmetic.'),
            ('What should not be allowed to stand in for the comparison?',
             ('Carbon accounting', 'The arithmetic of area',
               'Species counts', 'Photographic evidence'), 1,
             'Under no circumstances should marks this as the strongest claim in the '
             'passage.'),
            ('What does the author identify as the discipline’s mistake?',
             ('Opposing replanting', 'Accepting a vocabulary with equivalence built into it',
              'Ignoring soil', 'Trusting politicians'), 1,
             'Arguing against equivalence in words that assume it is the trap the author '
             'describes.'),
            ('Which would most strengthen the second paragraph?',
             ('Evidence that canopy closes faster than thought',
              'Evidence that soil fungi are absent from replanted woods far from old woodland',
              'Evidence that birds return quickly',
              'Evidence that carbon uptake is high'), 1,
             'Distance from a source population is the mechanism the paragraph proposes.'),
            ('All of the following are stated EXCEPT:',
             ('Canopy closes within twenty years',
              'The soil community arrives by colonisation',
              'Replanting is worth doing on its own terms',
              'Replanting restores an old woodland within a century'), 3,
             'The passage says the opposite: convergence within a human lifetime has yet to '
             'be shown.'),
            ('What is the author’s position overall?',
             ('Opposed to replanting', 'In favour of replanting and opposed to the argument used for it',
              'Neutral', 'Opposed to conservation funding'), 1,
             'The passage concedes the benefits in detail and attacks only the equivalence '
             'claim.'),
        ],
    ),

    l1=dict(
        sub='How habitats break up',
        caption='Two students after a field ecology seminar',
        skill=('Hearing a gradual process described',
               ['A gradual process is usually explained in stages. The items test the order '
                'of the stages.',
                'Listen for: first, then, and by the time.',
                'The point is often that nothing dramatic happens at any single stage.']),
        warm=[
            ('Man: Does a species go extinct all at once?',
             ('Rarely — it goes in small local losses.', 'Yes, usually.',
              'About forty years.', 'In the seminar.'), 0,
             'A does-it question answered with a frequency adverb and the actual pattern.'),
            ('Woman: Why does fragment size matter so much?',
             ('A small fragment cannot hold a breeding group.', 'Yes, it does matter.',
              'About ten hectares.', 'On the eastern edge.'), 0,
             'A why question wants the mechanism rather than confirmation.'),
            ('Man: Would a corridor actually help?',
             ('It turns several groups back into one.', 'Yes, probably.',
              'About two kilometres.', 'Along the river.'), 0,
             'A would-it-help question answered with what the corridor changes.'),
        ],
        script=[
            ('Woman', 'The thing I had wrong was thinking extinction is an event.'),
            ('Man', 'Rarely is it an event. Go on.'),
            ('Woman', 'So the habitat gets cut into pieces. Each piece is below the size that '
                      'can hold a breeding population. And then nothing dramatic happens for '
                      'thirty years.'),
            ('Man', 'That is the bit people miss. Every fragment is now one bad winter away '
                    'from losing its group, and over thirty years every fragment gets a bad '
                    'winter.'),
            ('Woman', 'And they cannot be recolonised from each other because they are not '
                      'connected.'),
            ('Man', 'Which is the whole argument for corridors. A corridor does not add '
                    'habitat. It turns six small populations back into one large one, and one '
                    'large one survives a bad winter.'),
            ('Woman', 'So why is anybody against them?'),
            ('Man', 'Nobody is against them in principle. They are against them on their land, '
                    'and a corridor by definition crosses whoever happens to be in the way. '
                    'The ecology was settled decades ago. The hard part has always been the '
                    'map.'),
            ('Woman', 'That is a depressing sentence.'),
            ('Man', 'It is also the only sentence in this subject that tells you where to put '
                    'your effort.'),
        ],
        items=[
            ('What did the woman have wrong?',
             ('The size of fragments', 'That extinction is an event',
              'The role of corridors', 'The timescale'), 1,
             'His reply, rarely is it an event, confirms the correction she is making.'),
            ('What happens to each fragment?',
             ('It is recolonised', 'It falls below the size that can hold a breeding population',
              'It grows back', 'It becomes a corridor'), 1,
             'That threshold is what makes the later losses inevitable.'),
            ('What does the man say people miss?',
             ('The cost', 'That every fragment eventually gets a bad winter',
              'The role of predators', 'The speed of change'), 1,
             'Nothing dramatic happens at any one moment, which is why the process is not '
             'noticed.'),
            ('Why can the fragments not be recolonised?',
             ('No animals remain', 'They are not connected to each other',
              'The habitat is unsuitable', 'The winters are too severe'), 1,
             'That isolation is what the corridor argument is designed to address.'),
            ('What does a corridor do, in his account?',
             ('Adds habitat', 'Turns several small populations into one large one',
              'Protects against predators', 'Improves the soil'), 1,
             'He is explicit that it does not add habitat, and one large population survives '
             'a bad year.'),
            ('Why are corridors opposed?',
             ('The ecology is disputed', 'They cross whoever is in the way',
              'They are expensive', 'They do not work'), 1,
             'Nobody is against them in principle, only on their own land.'),
            ('What does he say the hard part has always been?',
             ('The ecology', 'The map', 'The funding', 'The monitoring'), 1,
             'He contrasts it with the ecology, which he says was settled decades ago.'),
        ],
    ),

    l2=dict(
        sub='Counting what is there',
        caption='A volunteer briefing on survey method',
        poster=['Wildlife Trust · breeding bird survey',
                'Four visits, ten days apart',
                'Within one hour of sunrise'],
        skill=('Hearing what a method cannot show',
               ['A briefing on method will spend most of its time on what the result does '
                'not prove.',
                'Listen for: this tells you, this does not tell you.',
                'The hardest item is usually the one about absence.']),
        warm=[
            ('Woman: Can I do two visits in one week?',
             ('No — they have to be ten days apart.', 'Yes, if you like.',
              'About four visits.', 'In April.'), 0,
             'A can-I question answered with the spacing rule that makes the answer no.'),
            ('Man: If I never see it, is it gone?',
             ('It is unrecorded, which is not the same.', 'Yes, probably gone.',
              'About four visits.', 'On the transect.'), 0,
             'An if-then question answered by replacing one category with another.'),
            ('Woman: Does hearing a bird count?',
             ('Yes, but it does not prove breeding.', 'No, only seeing it.',
              'About twenty species.', 'At sunrise.'), 0,
             'A does-it-count question answered with a yes and the limit on what it '
             'establishes.'),
        ],
        script=[
            ('Man', 'Four visits, between the first of April and the thirtieth of June, at '
                    'least ten days apart, starting within an hour of sunrise, dry, wind below '
                    'force four, same route every time. Those conditions are not '
                    'bureaucracy — each one is there because without it the counts are not '
                    'comparable with anybody else’s. Now the important part, which is what '
                    'your four visits will and will not tell us. They will tell us that a '
                    'species is present, and they will give us a minimum number. If you '
                    'record nine pairs, there are at least nine pairs. Not once has a '
                    'well-run transect overcounted. What they will not tell us is that '
                    'anything is absent. If you walk four mornings and never hear a lapwing, '
                    'the lapwing is unrecorded. It is not gone. Volunteers find this the '
                    'hardest thing to accept, and I understand why — you were there, you were '
                    'looking, and nothing was there. But four mornings out of ninety days is '
                    'not evidence of absence, and if we let it be, we will report local '
                    'extinctions that have not happened, and somebody will stop protecting a '
                    'field that still has lapwings on it. And one more: hearing a bird counts '
                    'as presence. It does not count as breeding. Breeding needs a nest, eggs '
                    'or dependent young, and nothing else will do.'),
        ],
        items=[
            ('Why does he say the conditions are not bureaucracy?',
             ('They are legally required', 'Without them the counts are not comparable',
              'They protect the birds', 'They save time'), 1,
             'Comparability with other surveys is the purpose each condition serves.'),
            ('What does a valid count establish?',
             ('An exact population', 'Presence and a minimum number',
              'Absence', 'Breeding'), 1,
             'If nine pairs are recorded there are at least nine, which is a floor rather '
             'than a figure.'),
            ('What does he say about overcounting?',
             ('It is common', 'Not once has a well-run transect overcounted',
              'It happens in bad weather', 'It is corrected later'), 1,
             'That is why the result is treated as a minimum rather than an estimate.'),
            ('What is the consequence of treating absence as established?',
             ('Better data', 'Reported extinctions that have not happened',
              'More funding', 'Shorter surveys'), 1,
             'He adds the practical consequence: somebody stops protecting a field that still '
             'has the birds.'),
            ('Why does he say he understands the difficulty?',
             ('The rule is poorly written', 'The volunteer was there and looking and saw nothing',
              'The protocol changed recently', 'Four visits is too few'), 1,
             'He concedes the experience before refusing the inference drawn from it.'),
            ('What does hearing a bird establish?',
             ('Breeding', 'Presence only', 'Abundance', 'Nothing'), 1,
             'Breeding requires a nest, eggs or dependent young, and nothing else will do.'),
        ],
    ),

    l3=dict(
        sub='Restoration and what it cannot restore',
        caption='A lecture on restoration and offsetting',
        board=['Canopy: twenty years',
               'Soil community: unknown, possibly never',
               'Colonisation needs a source nearby',
               'Area arithmetic is not equivalence'],
        skill=('Following a talk that attacks a vocabulary',
               ['A speaker may argue that the words available for a debate have the answer '
                'built into them.',
                'Listen for: the moment we accepted the word, we had conceded the argument.',
                'The final item will usually be about the language rather than the '
                'science.']),
        warm=[
            ('Man: Does replanting restore a woodland?',
             ('Above ground, largely. Below ground, no.', 'Yes, within twenty years.',
              'About two hundred hectares.', 'With native species.'), 0,
             'A does-it question answered by splitting the thing being asked about.'),
            ('Woman: Why can the soil community not be planted?',
             ('It has to arrive from somewhere nearby.', 'Because it is too small.',
              'About a century.', 'In the understorey.'), 0,
             'A why-not question answered with the mechanism it depends on.'),
            ('Man: Is planting twice the area a fair exchange?',
             ('Only if area is what was lost.', 'Yes, that is the rule.',
              'About twice as much.', 'On the eastern edge.'), 0,
             'An is-it-fair question answered by exposing the assumption in the question.'),
        ],
        script=[
            ('Woman', 'I am in favour of replanting and I want to spend this hour attacking '
                      'the argument people make for it, because that argument is doing more '
                      'damage than its opponents. Here is what replanting does. Canopy closes '
                      'in about twenty years. Birds arrive. The carbon is real and '
                      'measurable. All of that is genuine and none of it is what I want to '
                      'talk about. Here is what it does not do. An old woodland has a soil '
                      'community — fungi, invertebrates, a chemistry built by centuries of the '
                      'same leaves falling in the same place — and you cannot plant that. It '
                      'has to walk in from somewhere, which means there has to be a somewhere '
                      'within reach. Where the clearance was large, there is not, and the new '
                      'wood keeps a young soil indefinitely. Whether it ever converges has yet '
                      'to be shown anywhere, and I mean anywhere. Now: none of that is an '
                      'argument against replanting, and I keep hearing it used as one. The '
                      'conclusion is narrower. Replanting is worth doing for its own sake and '
                      'it is not an exchange rate. Under no circumstances should a scheme be '
                      'allowed to clear mature woodland and plant twice the area somewhere '
                      'else and call the account settled. And with hindsight I think our own '
                      'mistake was accepting the words. The moment this field agreed to talk '
                      'about restoration and offsetting, equivalence was built into the '
                      'vocabulary, and we have spent twenty years arguing against equivalence '
                      'in language that assumes it.'),
        ],
        items=[
            ('What does she say she is attacking?',
             ('Replanting', 'The argument people make for replanting',
              'Carbon accounting', 'Conservation funding'), 1,
             'She says that argument is doing more damage than its opponents.'),
            ('What does she concede about replanting?',
             ('Nothing', 'Canopy, birds and carbon are all genuine',
              'It is cheap', 'It is popular'), 1,
             'She calls all of it genuine before turning to what it does not do.'),
            ('Why can the soil community not be planted?',
             ('It is too fragile', 'It has to arrive from somewhere within reach',
              'It takes a century', 'It is unknown'), 1,
             'Where the clearance was large there is no such somewhere.'),
            ('What has yet to be shown?',
             ('That canopy closes', 'That the soil community ever converges',
              'That birds return', 'That carbon is captured'), 1,
             'She repeats anywhere for emphasis, marking it as a wholly missing result.'),
            ('What conclusion does she say follows?',
             ('Replanting should stop', 'Replanting is worth doing and is not an exchange rate',
              'Offsetting should double', 'Clearance should be banned'), 1,
             'She calls the conclusion narrower than the one people draw from the same '
             'facts.'),
            ('What does she say about area arithmetic?',
             ('It is a reasonable approximation', 'It should under no circumstances settle the account',
              'It is the only measure available', 'It favours conservation'), 1,
             'The inverted construction marks it as the strongest claim in the lecture.'),
            ('What does she identify as her own field’s mistake?',
             ('Ignoring soil', 'Accepting a vocabulary with equivalence built in',
              'Trusting politicians', 'Overstating carbon'), 1,
             'Twenty years of arguing against equivalence in language that assumes it is the '
             'consequence she names.'),
        ],
    ),

    sp=[
        dict(
            sub='How habitats break up',
            focus='fronting a negative adverbial',
            skill=('Saying rarely does and not until out loud',
                   ['A fronted negative adverbial inverts the verb: rarely does a species '
                    'disappear.',
                    'Stress the adverbial, then drop slightly into the inversion. The '
                    'pattern is heavy-light.',
                    'Do not use two in a row. The structure is emphatic and emphasis repeated '
                    'is emphasis lost.']),
            repeat=[
                'Extinction is not an event.',
                'Rarely does a species disappear all at once.',
                'The habitat is broken into pieces first.',
                'Each piece is too small to hold a breeding group.',
                'Not until the fragments are reconnected does the population become viable again.',
                'A corridor adds no habitat at all; it restores the connection.',
                'Seldom has the ecology been the obstacle, because the ecology was settled decades ago and the difficulty has always been the map.',
            ],
            theme='land, wildlife and competing uses',
            qs=[
                'Thanks for joining me. To begin, is there a wild place near where you grew '
                'up? Has it changed?',
                'Conservation often means telling a landowner what they cannot do. How should '
                'that be handled?',
                'Now your opinion. Should protected areas be expanded even at a cost to '
                'farming? Why?',
                'A final question. Why do people notice a sudden loss and not a slow one?',
            ],
            model=[(2, 'By paying for it, and by being honest that it is a purchase rather '
                       'than a duty. A duty nobody volunteered for gets resisted on '
                       'principle.'),
                   (4, 'Because a slow loss never has a day on which it happened, and '
                       'without a day there is nothing to be angry about.')],
            selfcheck=['I inverted the verb after the fronted adverbial.',
                       'I stressed the adverbial and dropped into the inversion.',
                       'I did not use two inversions in a row.'],
        ),
        dict(
            sub='Counting what is there',
            focus='stating what a result does not show',
            skill=('Saying the limit of your evidence',
                   ['Separate the two claims out loud: this shows presence; it does not show '
                    'absence.',
                    'Give the number as a floor: at least nine pairs, not nine pairs.',
                    'Concede the experience before refusing the inference: you were there, '
                    'and still.']),
            repeat=[
                'Four visits, ten days apart, within an hour of sunrise.',
                'Each condition exists so the counts are comparable.',
                'A valid count shows presence and a minimum number.',
                'If you record nine pairs, there are at least nine pairs.',
                'Not once has a well-run transect overcounted anything.',
                'Four mornings without a lapwing means the lapwing is unrecorded.',
                'If we let unrecorded stand for absent, we will report extinctions that have not happened and somebody will stop protecting a field that still has birds on it.',
            ],
            theme='evidence, fieldwork and what counts as proof',
            qs=[
                'Thank you for your time. First, have you ever done any kind of volunteer '
                'fieldwork or counting?',
                'People treat "we did not find it" as "it is not there". Why is that so '
                'persistent?',
                'Now an opinion question. Should conservation decisions wait for complete '
                'data? Why or why not?',
                'One last question. How would you explain the difference between unrecorded '
                'and absent to somebody impatient?',
            ],
            model=[(2, 'Because looking feels like a complete action. You searched, you '
                       'finished, and the absence of a result feels like a result.'),
                   (3, 'No, because complete data never arrives and waiting is itself a '
                       'decision with consequences. What you owe people is a clear statement '
                       'of how confident you are.')],
            selfcheck=['I kept presence and absence apart.',
                       'I gave the number as a minimum.',
                       'I conceded the experience before refusing the inference.'],
        ),
        dict(
            sub='Restoration and what it cannot restore',
            focus='supporting something while attacking its defence',
            skill=('Separating a practice from its justification',
                   ['Say which you support and which you are attacking, in the first '
                    'sentence.',
                    'Concede the real benefits in detail. A grudging concession is heard as '
                    'opposition.',
                    'End with the narrower conclusion, not the popular one.']),
            repeat=[
                'I am in favour of replanting.',
                'The argument made for it is doing the damage.',
                'Canopy closes in twenty years and the carbon is real.',
                'The soil community cannot be planted at all.',
                'It has to arrive from somewhere within reach, and often there is nowhere.',
                'None of that is an argument against replanting.',
                'Under no circumstances should a scheme clear mature woodland, plant twice the area elsewhere and call the account settled.',
            ],
            theme='trade-offs, offsetting and honest accounting',
            qs=[
                'Thanks for taking part. To start, have you ever planted a tree? Why?',
                'Companies offset damage by paying for something elsewhere. Does that ever '
                'work?',
                'Now your opinion. Should a developer be allowed to destroy an old habitat if '
                'they create a larger new one? Why?',
                'And finally. Can a word itself make an argument harder to win? Give an '
                'example.',
            ],
            model=[(2, 'Where the two things are genuinely the same kind of thing, which is '
                       'rarer than the schemes assume. Carbon offsets against carbon, '
                       'perhaps. Habitat against habitat, almost never.'),
                   (4, 'Offsetting does it. The word contains the claim that the two sides '
                       'balance, so anybody arguing they do not has to argue against the '
                       'vocabulary first.')],
            selfcheck=['I said what I support and what I am attacking first.',
                       'I conceded the benefits in detail.',
                       'I ended on the narrower conclusion.'],
        ),
    ],

    w1=dict(
        sub='Questions about habitat',
        skill=('Build a Sentence with a fronted negative adverbial',
               ['The two non-question items in this unit front a negative adverbial and '
                'invert: rarely does, not until, under no circumstances should.',
                'The inversion takes the auxiliary: rarely does a species disappear, never '
                'has it been shown.',
                'Not until needs a clause before the inversion: not until the fragments are '
                'joined does the population recover.']),
        guided=[
            ('The fourth visit was two days late.',
             ['know', 'do', 'you', 'whether', 'the survey', 'still', 'at all', 'counts', 'actually'],
             'Do you know whether the survey still actually counts at all?'),
            ('The lapwing was not recorded on any visit.',
             ['to know', 'nobody', 'seems', 'whether', 'it', 'the field', 'left', 'has', 'actually'],
             'Nobody seems to know whether it has actually left the field.'),
            ('My supervisor asked about the drainage work.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'a baseline', 'before it', 'recorded'],
             'She wanted to know whether I had recorded a baseline before it.'),
        ],
        exam=[
            ('A corridor does not add habitat.',
             ['do', 'whether', 'know', 'you', 'that', 'is', 'everyone', 'to', 'obvious'],
             'Do you know whether that is obvious to everyone?'),
            ('Replanting does not restore the soil community.',
             ['explain', 'can', 'anybody', 'why', 'that', 'to me', 'planted', 'be', 'cannot'],
             'Can anybody explain to me why that cannot be planted?'),
            ('The scheme planted twice the area it cleared.',
             ['know', 'does', 'anybody', 'whether', 'the regulator', 'that', 'accepted', 'actually', 'in the end'],
             'Does anybody know whether the regulator actually accepted that in the end?'),
            ('Four visits cannot establish absence.',
             ['us', 'told', 'nobody', 'how', 'many', 'visits', 'would', 'needed', 'be'],
             'Nobody told us how many visits would be needed.'),
            ('The ecology of corridors was settled decades ago.',
             ['told', 'he', 'me', 'what', 'the real', 'obstacle', 'had', 'been', 'always'],
             'He told me what the real obstacle had always been.'),
            ('A species does not usually disappear all at once.',
             ['rarely', 'does', 'a species', 'disappear', 'at once', 'all', 'and', 'nobody', 'notices'],
             'Rarely does a species disappear all at once, and nobody notices.'),
            ('The population recovers only when the fragments are joined.',
             ['not until', 'the fragments', 'are', 'joined', 'does', 'the population', 'become', 'again', 'viable'],
             'Not until the fragments are joined does the population become viable again.'),
        ],
    ),

    w2=dict(
        sub='Counting what is there',
        to='records@countytrust.org',
        date='10/07/2028',
        subject='Eastern field transect — four-year commitment, with one condition',
        scenario=[
            'The Trust has told you your fourth visit fell outside the window, so this year’s '
            'survey is invalid but the data will be kept as incidental records. They have '
            'asked you to walk the same transect each April for four years to build a '
            'baseline for a field where drainage work began in May. You want to do it, but '
            'you are away every April for two weeks and need to know whether the window '
            'allows you to work around that.',
            'Write an email to the Trust.',
        ],
        bullets=['Agree to the commitment and say what you are agreeing to.',
                 'Set out the scheduling problem as a constraint, with dates.',
                 'Propose a solution and say what you will do if it is not acceptable.'],
        skill=('Committing to something long with a condition attached',
               ['Say yes first and unambiguously. A conditional yes read as a maybe gets '
                'offered to somebody else.',
                'Give the constraint as dates, and show you have checked the rule yourself.',
                'Propose the solution rather than asking for one. The other person has less '
                'information about your diary than you do.']),
        model=[
            'Dear Dr Farquharson,',
            '',
            'Yes — I will walk the eastern transect every year from April 2029 to April 2032, '
            'four visits a season under the protocol. I would rather commit to the four years '
            'now than do one year and leave you with something unusable.',
            '',
            'One scheduling constraint, which I think the protocol already solves. I am away '
            'from roughly the 8th to the 22nd of April every year for work. That removes two '
            'weeks from the middle of the month.',
            '',
            'As I read it, that does not matter. The window runs from 1 April to 30 June and '
            'the only spacing requirement is ten days between visits, so visits on about 3 '
            'April, 25 April, 10 May and 25 May are all inside the rules and inside the '
            'breeding season. If you would rather the four visits were spread evenly across '
            'the window I can do early April, early May, late May and mid-June instead.',
            '',
            'If my reading is wrong and the Trust needs a visit in mid-April specifically, say '
            'so and I will find somebody to cover that one week — but I would want to train '
            'them on the route with me first, because a different walker on a different line '
            'is not the same transect.',
            '',
            'The drainage baseline is the reason I am saying yes, so tell me if there is '
            'anything else worth recording in the same walk.',
            '',
            'With thanks,',
            'Babatunde Adeyemi',
        ],
        notes=['The commitment is unambiguous and quantified — four seasons, named years — in '
               'the first line.',
               'The constraint is given as dates and the writer has already checked it '
               'against the protocol rather than asking.',
               'A specific schedule is proposed, with an alternative, so the reader can '
               'approve rather than design.',
               'The fallback names its own risk: a substitute walker is not the same '
               'transect, which is a point the Trust would otherwise have to make.'],
        bandpair=dict(
            mid=[
                'Dear Dr Farquharson,',
                'Thank you for your email and for explaining why the fourth visit could not '
                'be counted. I would be very happy to help with the eastern field and to walk '
                'the transect for the next few years if that would be useful to you.',
                'There is one difficulty I should mention. Unfortunately I am away for work '
                'in the middle of April every year, which might make it hard to fit in all '
                'the visits. I am not sure whether this would be a problem or not, so I '
                'thought it was better to ask before committing to anything.',
                'Could you let me know whether the dates are flexible, and how exactly you '
                'would like the visits to be arranged? I am very keen to be involved and I '
                'will do whatever fits best with what the Trust needs.',
                'Thank you again for all your help. Best wishes, Babatunde Adeyemi',
            ],
            top=[
                'Dear Dr Farquharson,',
                'Yes — I will walk the eastern transect every year from April 2029 to April '
                '2032, four visits a season under the protocol. Better to commit to four '
                'years now than leave you with one unusable season.',
                'One constraint, which I think the protocol already solves. I am away from '
                'about the 8th to the 22nd of April each year. As I read it that does not '
                'matter: the window runs to 30 June and the only spacing rule is ten days, so '
                '3 April, 25 April, 10 May and 25 May are all compliant.',
                'If you would rather they were spread across the whole window, I can do early '
                'April, early May, late May and mid-June.',
                'If the Trust needs a mid-April visit specifically, say so and I will find '
                'cover — though I would train them on the route first, because a different '
                'walker on a different line is not the same transect. Babatunde Adeyemi',
            ],
            diffs=[
                'It commits in the first line with named years and a visit count, so nothing '
                'has to be inferred from willingness.',
                'It checks the constraint against the protocol itself and proposes four dates, '
                'leaving the reader to approve rather than solve.',
                'It offers a second schedule, so a preference can be expressed without '
                'reopening the question.',
                'It names the risk in its own fallback — a substitute is not the same '
                'transect — which is the objection the Trust would otherwise raise.',
                'It drops the offer to do whatever fits best, which sounds cooperative and '
                'hands the whole problem back.',
            ],
        ),
    ),

    w3=dict(
        sub='Restoration and what it cannot restore',
        prof='Dr Nkemelu',
        question='Biodiversity offsetting permits a developer to destroy habitat in one place '
                 'provided equivalent or greater habitat is created or protected elsewhere. '
                 'Supporters argue that it channels private money into conservation on a '
                 'scale public funding never reaches, and that refusing it means losing both '
                 'the habitat and the money. Critics argue that no created habitat is '
                 'equivalent to a mature one, that the arithmetic of area conceals this, and '
                 'that offsetting therefore licenses destruction while appearing to prevent '
                 'it. Which position is better founded?',
        posts=[('Ingrid', 'w',
                'The critics are right about equivalence and wrong about the consequence. If '
                'we refuse offsetting the development happens anyway, under a planning system '
                'that was approving it before offsetting existed, and the compensation money '
                'simply does not appear. Imperfect compensation beats none.'),
               ('Tomás', 'm',
                'Ingrid is assuming the approval would have happened regardless, which is the '
                'thing in dispute. Offsetting changes what a planning authority is willing to '
                'approve, because it supplies an answer to the objection. The scheme does not '
                'compensate for losses; it manufactures the permission for them.')],
        skill=('Answering a counterfactual disagreement',
               ['When two sides disagree about what would have happened otherwise, name the '
                'counterfactual explicitly.',
                'Say what evidence would distinguish the two, even if nobody has it.',
                'Then say what to do under uncertainty, which is a different question from '
                'who is right.']),
        starters=['The disagreement here is entirely about a counterfactual.',
                  'Ingrid is right that…, and her argument needs…',
                  'Tomás has identified the mechanism, and not the evidence for it.',
                  'Under that uncertainty, what follows is…'],
        model=[
            'The disagreement here is entirely about a counterfactual, and once that is said '
            'the two positions stop being symmetrical. Ingrid holds that the development '
            'proceeds either way, so offsetting adds money without adding losses. Tomás '
            'holds that offsetting changes approval rates, so some losses exist only because '
            'the scheme does. Both are empirical claims about the same quantity and only one '
            'of them can be true of any particular planning regime.',
            'Ingrid is right that refusing an imperfect remedy on purity grounds usually '
            'leaves the harm and loses the remedy, and her argument needs something she has '
            'not supplied: evidence that approval rates did not move. Tomás has identified '
            'the mechanism and not the evidence for it. The mechanism is entirely plausible — '
            'an authority with an answer to an objection approves more — and plausibility is '
            'not a rate.',
            'What would distinguish them is comparatively simple and has been done in only a '
            'few jurisdictions: approval rates for development on designated habitat, before '
            'and after an offsetting regime, against a control. Where this has been looked '
            'at the answer appears to be that approvals rose, which is Tomás’s prediction, '
            'and the samples are small enough that I would not build a policy on them.',
            'Under that uncertainty what follows is not a verdict but a design rule. '
            'Offsetting should be permitted only where the receiving site is secured before '
            'the clearance, only for habitat types that demonstrably reassemble, and never '
            'on an area ratio alone. Those three conditions cost supporters almost nothing if '
            'Ingrid is right, and they remove most of what Tomás fears if he is. That is '
            'what a policy should look like when the decisive number is missing.',
        ],
        model_words=282,
    ),

    gram=dict(
        title='Inversion after negative adverbials',
        headers=['Fronted element', 'What happens to the verb'],
        rows=[
            ('rarely / seldom', 'rarely does a species disappear all at once'),
            ('never / not once', 'never has it been shown anywhere'),
            ('not until + clause', 'not until the fragments are joined does it recover'),
            ('no sooner … than', 'no sooner had the drainage begun than the field dried'),
            ('under no circumstances', 'under no circumstances should area settle the account'),
            ('little / nowhere', 'little did anybody realise; nowhere is this clearer'),
            ('only after / only when', 'only when the corridor opened did the groups mix'),
        ],
        notes=[
            'The inversion uses the auxiliary, exactly as a question does: rarely does a '
            'species disappear, never has it been shown. If there is no auxiliary, do is '
            'supplied.',
            'Not until and only when invert the main clause, not the fronted one: not until '
            'the fragments are joined does the population recover. Writing not until are the '
            'fragments joined is a common error.',
            'No sooner takes than, never when: no sooner had the work begun than the field '
            'dried. No sooner had the work begun when is wrong.',
        ],
        watch='Inversion is emphatic, and emphasis repeated stops working. One inverted '
              'sentence per paragraph at most, and never two in succession — a paragraph of '
              'inversions reads as parody rather than as force.',
        ex=[
            ('Rewrite with the negative adverbial fronted.',
             ['A species rarely disappears all at once.',
              'It has never been shown anywhere.',
              'The population only becomes viable when the fragments are joined.',
              'A well-run transect has not once overcounted.',
              'Area arithmetic should under no circumstances settle the account.',
              'The groups only mixed after the corridor opened.'],
             ['Rarely does a species disappear all at once.',
              'Never has it been shown anywhere.',
              'Not until the fragments are joined does the population become viable.',
              'Not once has a well-run transect overcounted.',
              'Under no circumstances should area arithmetic settle the account.',
              'Only after the corridor opened did the groups mix.']),
            ('Correct the inversion.',
             ['Rarely a species disappears all at once.',
              'Not until are the fragments joined does it recover.',
              'No sooner had the work begun when the field dried.',
              'Never it has been shown anywhere.'],
             ['Rarely does a species disappear all at once.',
              'Not until the fragments are joined does it recover.',
              'No sooner had the work begun than the field dried.',
              'Never has it been shown anywhere.']),
            ('Join with no sooner … than.',
             ['The drainage began. The field dried out.',
              'The corridor opened. The two groups mixed.',
              'The scheme was approved. The clearance started.',
              'The canopy closed. The birds arrived.'],
             ['No sooner had the drainage begun than the field dried out.',
              'No sooner had the corridor opened than the two groups mixed.',
              'No sooner had the scheme been approved than the clearance started.',
              'No sooner had the canopy closed than the birds arrived.']),
        ],
        bas='Two of the ten Build a Sentence items in this unit front a negative adverbial. '
            'A tile reading rarely or not until begins the sentence, and the tile reading '
            'does or has belongs immediately after the fronted element, not after the '
            'subject.',
    ),

    fault=dict(
        text='Rarely a species disappears all at once. Not until are the fragments joined '
             'does the population recover. No sooner had the drainage begun when the field '
             'dried out. Nobody knows whether was the lapwing recorded. Having been cleared, '
             'the developer replanted twice the area.',
        faults=[
            ('Rarely a species disappears all at once',
             'Rarely does a species disappear all at once',
             'A fronted negative adverbial requires the auxiliary before the subject.'),
            ('Not until are the fragments joined',
             'Not until the fragments are joined',
             'Not until inverts the main clause and leaves its own clause in statement '
             'order.'),
            ('No sooner had the drainage begun when',
             'No sooner had the drainage begun than',
             'No sooner is completed by than, in the same way as a comparative.'),
            ('whether was the lapwing recorded', 'whether the lapwing was recorded',
             'An embedded question keeps statement order and does not invert the verb.'),
            ('Having been cleared, the developer replanted twice the area',
             'Having cleared the site, the developer replanted twice the area',
             'The developer was not cleared; the participle must describe the subject it '
             'attaches to.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('the breaking of a habitat into separate pieces', 'fragmentation'),
            ('a strip of habitat connecting two larger areas', 'corridor'),
            ('found only in one place', 'endemic'),
            ('spreading where it did not previously occur', 'invasive'),
            ('the reference state a change is measured against', 'baseline'),
            ('how many individuals there are', 'abundance'),
            ('the upper layer of a forest', 'canopy'),
            ('a species whose removal changes the whole system', 'keystone'),
            ('the orderly change of a community over time', 'succession'),
            ('loss of quality or function', 'degradation'),
            ('able to survive and reproduce', 'viable'),
            ('a marked square in which organisms are counted', 'quadrat'),
        ],
        gram=[
            ('Rarely ______ a species disappear all at once.', 'does'),
            ('Never ______ it been shown anywhere.', 'has'),
            ('Not ______ the fragments are joined does it recover.', 'until'),
            ('No sooner had the work begun ______ the field dried.', 'than'),
            ('Under no circumstances ______ area settle the account.', 'should'),
            ('Only ______ the corridor opened did the groups mix.', 'after'),
            ('Not ______ has a well-run transect overcounted.', 'once'),
            ('______ is this clearer than on the eastern edge.', 'Nowhere'),
        ],
        mini=[
            ('A species usually goes extinct through',
             ('a single catastrophic event', 'a series of small local losses',
              'hunting alone', 'climate change alone'), 1,
             'Fragmentation leaves each group one bad year from disappearing, and no single '
             'loss looks remarkable.'),
            ('Four valid survey visits can establish',
             ('absence', 'presence and a minimum abundance',
              'breeding', 'population trend'), 1,
             'A species not recorded is unrecorded rather than absent, which is the rule '
             'volunteers find hardest.'),
            ('What a replanted wood does not recover quickly is',
             ('canopy', 'the soil community', 'bird species', 'biomass'), 1,
             'It has to arrive by colonisation, which needs a source population within '
             'reach.'),
            ('Which sentence is correct?',
             ('Rarely a species disappears all at once.',
              'Rarely does a species disappear all at once.',
              'Rarely a species does disappear all at once.',
              'Rarely disappears a species all at once.'), 1,
             'The auxiliary goes immediately after the fronted adverbial and before the '
             'subject.'),
            ('"On paper" tells you the writer thinks something is',
             ('proven', 'true in theory and perhaps not in fact',
              'written down', 'disputed'), 1,
             'It sets up a contrast with what is actually the case.'),
            ('A corridor helps mainly because it',
             ('adds habitat area', 'reconnects small populations into one',
              'excludes predators', 'improves soil quality'), 1,
             'One large population survives a bad year that would remove any one small '
             'group.'),
        ],
    ),

    tip='Inversion is the most conspicuous structure in this volume and the easiest to '
        'overuse. One per paragraph, placed where you most want the reader to slow down. '
        'Examiners notice the first one as range and the third one as a tic.',
)
