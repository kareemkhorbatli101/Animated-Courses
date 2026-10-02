# -*- coding: utf-8 -*-
"""Unit 24 — Oceans and Currents. Volume 3."""
from content._g import gaps

_GT, _GA = gaps(
    'The deep ocean moves, but not in the way the surface does. Surface currents are driven '
    'by wind and are relat{ively} fast. The deep circulation is driven by density, and '
    'density depends on two things only: temperature and salt. Water that is cold and salty '
    'is dense, and dense water s{inks}. That is the whole engine. In the North Atlantic, '
    'water that has travelled north at the surface loses heat to the air, becomes dense '
    'enough to sink, and begins a journey of roughly a thous{and} years before it surfaces '
    'again somewhere in the Pacific. The scale of that journey is what makes the system '
    'import{ant} and what makes it slow to r{espond}.')

_ET, _EA = gaps(
    'Upwelling is the process by which deep water is brought to the surface, and it is the '
    'reason a few narrow strips of coast produce a dispropor{tionate} share of the world fish '
    'catch. The mechanism is indirect. Wind blowing along a coast does not push water '
    'ashore; because of the rotation of the planet, it pushes surface water offsh{ore}, and '
    'water from below rises to replace it. What rises is cold and rich in the nutri{ents} '
    'that have been accumul{ating} in the dark for centuries, and a nutrient supply of that '
    'kind supports an extraordinary dens{ity} of life. Four such systems account for a large '
    'fraction of the global catch from a tiny fract{ion} of the ocean surface. The dependence '
    'runs the other way as well. In a year when the wind weak{ens}, the upwelling fails, the '
    'nutrients stay below, and the fishery coll{apses} within a season. Communities along '
    'these coasts have therefore learned to read the wind, and the econom{ic} consequences of '
    'a quiet spring are felt long before any measurement of the water is '
    'publi{shed}.')

UNIT = dict(
    n=24, vol=3, level='B2',
    title='Oceans and Currents',
    icons=['globe', 'flask', 'chart'],
    subs=['The deep circulation', 'Coastal upwelling', 'Measuring a moving sea'],
    grammar='Relative clauses with prepositions',
    field='circulate, gradient, flux',
    opener_line='The ocean is the largest thing on the planet and the hardest to watch. This '
                'unit is about how a science works when it cannot see most of its subject, '
                'and about the structure English uses to say exactly which thing you mean: '
                'the extent to which, the rate at which, the degree to which.',
    candos=[
        'I can follow a description of a process with several linked stages.',
        'I can use a preposition inside a relative clause correctly.',
        'I can write "the extent to which" without losing the sentence.',
        'I can read a dataset description and say what it cannot support.',
        'I can express approximate quantity precisely.',
        'I can write an email that reports a problem I did not cause.',
    ],

    acad=[
        ('circulate', 'to move round a system and return'),
        ('gradient', 'a steady change in something across space'),
        ('saline', 'containing salt'),
        ('density', 'how much mass sits in a given volume'),
        ('upwelling', 'deep water rising to the surface'),
        ('nutrient', 'a substance living things need to grow'),
        ('flux', 'the rate at which something flows through'),
        ('basin', 'a large natural hollow holding water'),
        ('thermal', 'to do with heat'),
        ('buoyancy', 'the tendency to float or rise'),
        ('stratify', 'to settle into separate horizontal layers'),
        ('plume', 'a column of water or gas rising through another'),
        ('sediment', 'material that settles at the bottom'),
        ('turbulence', 'disordered, mixing motion'),
        ('anomaly', 'a reading that departs from the expected'),
        ('equilibrium', 'a state in which opposing forces balance'),
        ('advection', 'transport of a property by bulk movement'),
        ('overturning', 'the sinking and rising that drives deep flow'),
    ],
    family=('circulate', [
        ('circulation', 'noun', 'the deep circulation takes a millennium'),
        ('circulatory', 'adjective', 'a circulatory system'),
        ('recirculate', 'verb', 'water recirculates through the basin'),
    ]),
    collocs=[
        ('the rate at which', 'how fast something happens'),
        ('the extent to which', 'how far something is true'),
        ('give way to', 'to be replaced by'),
        ('on the order of', 'roughly, to the nearest power of ten'),
        ('in the region of', 'approximately'),
        ('draw on', 'to use as a source'),
        ('a proxy for', 'a measurable stand-in for something you cannot measure'),
        ('over the long run', 'across a long period'),
        ('set in motion', 'to start a process that then continues'),
        ('be borne out by', 'to be confirmed by'),
    ],
    stance=[
        ('is now standard', 'accepted practice in the field'),
        ('broadly speaking', 'true in general, not in every case'),
        ('is estimated to', 'a number with uncertainty attached'),
        ('is poorly understood', 'the writer says knowledge is thin'),
        ('seems improbable', 'the writer leans strongly against it'),
    ],
    nuance=[
        ('affect / effect', 'to change / the change produced'),
        ('temperature / heat', 'how hot / how much thermal energy'),
        ('current / tide', 'a flow / a rise and fall'),
    ],
    vocab_talk=[
        'Describe a journey a drop of water might take over a thousand years.',
        'Why is the deep ocean harder to study than space?',
        'What would you need to measure to know the ocean is changing?',
        'Who should pay for ocean monitoring? Why?',
    ],
    again=['salinity', 'thermocline', 'El Niño', 'float array', 'time series',
           'anomaly map', 'moorings', 'research cruise'],

    r1=dict(
        sub='The deep circulation',
        skill=('Suffixes on process nouns',
               ['A gap after a or the and before of is a noun. At B2 it is usually a '
                'process noun: circulation, stratification, overturning.',
                'The commonest endings on this page are -tion, -ance, -ity and -ing.',
                'Read on past the gap. The preposition after it often confirms the part of '
                'speech.']),
        guided_text=_GT, guided=_GA,
        guided_hint='relat--- is relatively — the slot modifies the adjective fast, so it '
                    'has to be an adverb.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Coastal upwelling',
        skill=('Reading a dataset description',
               ['A dataset description tells you what was measured, where, and how often. '
                'All three limit what can be concluded.',
                'Gaps in a time series are the most common trap. A series with a two-year '
                'hole cannot support a claim about those two years.',
                'Note the units and the depth. A surface measurement says nothing about '
                'what is happening below.']),
        docs=[
            ('notice', 'Coastal Monitoring Array · dataset CMA-7, 1998 to 2026', [
                '# What is measured',
                'Temperature and salinity at 5 m, 50 m and 200 m, every six hours.',
                'Wind speed and direction at the surface buoy, every hour.',
                '# Coverage',
                '* Continuous from March 1998, except September 2011 to May 2013.',
                '* The 200 m sensor was replaced in 2014; earlier values are less reliable.',
                '# How to cite',
                '* Cite the version, not the dataset. Values are revised when sensors are '
                'recalibrated.',
                '# Known issues',
                '* Biofouling affects the 5 m sensor in late summer. Flagged, not removed.',
            ], 'notice'),
            ('email', 'j.ferreira@northgate.edu', 'cma-data@oceanlab.org',
             '04/02/2027', 'CMA-7 — question about the 2011 to 2013 gap', [
                 'Dear Dr Ferreira,',
                 '',
                 'Thank you for the query. You are right that the gap matters for what you',
                 'are attempting, and I am afraid it matters more than you may have assumed.',
                 '',
                 'The array was not simply switched off. It was lost in a storm in September',
                 '2011 and the replacement was moored about 400 m from the original position,',
                 'in slightly deeper water. We treat the two periods as separate series for',
                 'that reason, and we would not recommend fitting a single trend across them.',
                 '',
                 'For the 1998 to 2011 period the record is good and I would use it with',
                 'confidence. After 2014 it is good again. The two together are not one',
                 'record, however much it looks like one in the file.',
                 '',
                 'Ocean Lab Data Office',
             ]),
        ],
        guided=[
            ('At how many depths are temperature and salinity measured?',
             ('One', 'Two', 'Three', 'Six'), 2,
             'The notice lists 5 m, 50 m and 200 m, which is what makes the array useful for '
             'questions about layering.'),
            ('How often is wind recorded?',
             ('Every hour', 'Every six hours', 'Daily', 'Only in summer'), 0,
             'Wind is hourly while the water sensors are six-hourly, which is a difference '
             'worth noticing when comparing the two.'),
            ('What should be cited?',
             ('The dataset', 'The version', 'The sensor', 'The mooring position'), 1,
             'Values are revised when sensors are recalibrated, so only a version number '
             'identifies what was actually used.'),
            ('What is done about biofouling?',
             ('The data are removed', 'The data are flagged',
              'The sensor is cleaned weekly', 'Nothing is done'), 1,
             'Flagged, not removed — which leaves the decision to the user rather than '
             'making it for them.'),
        ],
        exam=[
            ('What is the main point of the email?',
             ('The gap can be interpolated', 'The two periods are not one record',
              'The dataset should not be used', 'The sensors were poorly maintained'), 1,
             'The closing line states it directly, and the mooring move is the reason given '
             'for treating them separately.'),
            ('Why were the two periods separated?',
             ('The sensors were different', 'The replacement was moored elsewhere, in deeper water',
              'The funding changed', 'The storm damaged the earlier data'), 1,
             'About 400 m away and slightly deeper is the stated reason, and it is a reason '
             'about place rather than equipment.'),
            ('What does Dr Ferreira appear to have wanted to do?',
             ('Replace the array', 'Fit a single trend across the whole record',
              'Publish the raw data', 'Compare two depths'), 1,
             'The data office advises against exactly that, which tells you it was what was '
             'proposed.'),
            ('Which period does the data office recommend using with confidence?',
             ('1998 to 2011 only', '2014 onwards only', 'Both, but separately',
              'Neither'), 2,
             'Both are described as good, and the warning is only against combining them '
             'into one series.'),
            ('What is implied by "however much it looks like one in the file"?',
             ('The file is corrupted', 'The file format hides the discontinuity',
              'The data were falsified', 'The file is too large'), 1,
             'The numbers run on without a visible break, so the structure of the file '
             'invites exactly the mistake being warned against.'),
            ('Why are values revised?',
             ('Users report errors', 'Sensors are recalibrated',
              'The format changes', 'New depths are added'), 1,
             'The citation section gives recalibration as the reason, which is why the '
             'version matters more than the dataset name.'),
            ('What does the 200 m note in the notice affect?',
             ('Data after 2014', 'Data before 2014', 'Wind data', 'Surface data'), 1,
             'The sensor was replaced in 2014 and earlier values are described as less '
             'reliable, so the caution applies backwards.'),
        ],
    ),

    r3=dict(
        sub='Measuring a moving sea',
        title='How to Weigh an Ocean',
        words=272,
        paras=[
            'Until the late 1990s almost everything known about the deep ocean came from '
            'ships. A research cruise would stop, lower an instrument, record a column of '
            'temperature and salinity, and move on. The result was a set of vertical lines '
            'through a moving fluid, taken years apart and mostly in summer, mostly in the '
            'north, and mostly where it was convenient to sail. The picture built from them '
            'was not wrong. It was thin in exactly the places where the ocean does the most '
            'interesting things.',

            'The array that replaced this approach works on a different principle. Several '
            'thousand floats drift at depth, rise to the surface every ten days, transmit a '
            'profile, and sink again. No float is steered and none is recovered. What the '
            'system gives up is control over where the measurements are taken; what it gains '
            'is that measurements are taken everywhere, continuously, in all seasons. It is '
            'now standard, and the comparison with the ship record is instructive: broadly '
            'speaking, the old picture was right about the mean state and wrong about how '
            'much the mean varies.',

            'Two limits remain. The floats park at a fixed depth and cannot sample the '
            'deepest water, which is estimated to hold a large share of the heat that has '
            'entered the ocean in the last century. And the region beneath sea ice is poorly '
            'understood, because a float that surfaces under ice cannot transmit. Proposals '
            'to extend the array downwards and polewards are technically ready and '
            'financially stalled, which is a familiar pattern: the cost of filling the last '
            'gaps always seems improbable until the gap turns out to matter.',
        ],
        skill=('Reading a before-and-after comparison',
               ['A B2 passage often sets an old method against a new one. Expect a sentence '
                'naming what was given up and what was gained.',
                'The old method is rarely dismissed. Look for a sentence saying it was not '
                'wrong, only limited.',
                'The last paragraph usually says what is still missing.']),
        guided=[
            ('What was the main problem with ship-based measurement?',
             ('The instruments were inaccurate', 'The coverage was uneven in space and season',
              'Ships were too slow', 'The records were lost'), 1,
             'Years apart, mostly in summer, mostly in the north describes a sampling '
             'problem rather than a measurement problem.'),
            ('How often does a float transmit a profile?',
             ('Every day', 'Every ten days', 'Every six hours', 'Once a year'), 1,
             'The cycle described is drift, rise every ten days, transmit, sink again.'),
            ('What does the float system give up?',
             ('Accuracy', 'Control over where measurements are taken',
              'Continuous operation', 'Coverage in winter'), 1,
             'No float is steered, which is stated as the cost of getting coverage '
             'everywhere.'),
            ('The word "instructive" in the second paragraph is closest in meaning to',
             ('confusing', 'revealing', 'expensive', 'routine'), 1,
             'The comparison teaches something — that the old picture was right about the '
             'mean and wrong about its variability.'),
        ],
        exam=[
            ('What does the author say about the old picture of the ocean?',
             ('It was wrong throughout', 'It was right about the mean and wrong about variability',
              'It was never published', 'It was better than the new one'), 1,
             'The comparison sentence gives exactly this split, which is why the author '
             'refuses to call the old picture wrong.'),
            ('Why can floats not sample the deepest water?',
             ('The pressure destroys them', 'They park at a fixed depth',
              'They are too few', 'The signal cannot reach the surface'), 1,
             'The limit is the parking depth, not the instrument, which is why extending the '
             'array downwards is described as technically ready.'),
            ('Why is the region under sea ice poorly covered?',
             ('Floats cannot transmit from under ice', 'Ships cannot reach it',
              'The water is too cold', 'There is no funding for it'), 0,
             'A float that surfaces under ice cannot transmit, which is a communications '
             'limit rather than a sampling one.'),
            ('What is described as "technically ready and financially stalled"?',
             ('The float array', 'Proposals to extend the array deeper and towards the poles',
              'Ship-based cruises', 'Sea-ice monitoring'), 1,
             'That phrase attaches to the extension proposals, and the author then calls the '
             'pattern familiar.'),
            ('What does "a familiar pattern" refer to?',
             ('Floats failing under ice', 'Funding arriving only after a gap proves important',
              'Ships sampling in summer', 'Sensors being recalibrated'), 1,
             'The sentence that follows spells it out: the cost seems improbable until the '
             'gap turns out to matter.'),
            ('What is the author’s attitude to the float array?',
             ('Sceptical', 'Positive but aware of what it still misses',
              'Indifferent', 'Opposed on cost grounds'), 1,
             'It is called now standard and credited with real gains, and the final '
             'paragraph is about completing it rather than replacing it.'),
            ('All of the following were limits of ship sampling EXCEPT:',
             ('Uneven seasonal coverage', 'Uneven geographic coverage',
              'Long gaps between visits', 'Poor instrument accuracy'), 3,
             'Accuracy is never questioned; the complaint throughout is about where and when '
             'the measurements were taken.'),
            ('"Is estimated to hold" signals that the deep-heat figure is',
             ('precisely known', 'a number carrying uncertainty',
              'disputed by most researchers', 'not yet measured at all'), 1,
             'An estimate is a quantity with error attached, which is weaker than a '
             'measurement and stronger than a guess.'),
            ('What would most undermine the case for extending the array?',
             ('Evidence that float costs are falling',
              'Evidence that the deepest water holds little of the added heat',
              'Evidence that sea ice is shrinking',
              'Evidence that ships are still used'), 1,
             'The argument for going deeper rests on the deep water holding a large share of '
             'the heat, so removing that removes the reason.'),
        ],
    ),

    l1=dict(
        sub='The deep circulation',
        caption='Two postgraduates discussing a figure',
        skill=('Hearing a misunderstanding being unpicked',
               ['One speaker has the wrong model and the other works out why. The items ask '
                'what the wrong model was.',
                'Listen for the moment of diagnosis: oh, I see what you are thinking.',
                'The correction usually comes with an analogy.']),
        warm=[
            ('Man: So the deep water is moving fast?',
             ('The opposite — it takes about a thousand years.', 'Yes, very fast.',
              'About four metres.', 'It is deep water.'), 0,
             'A checking question with the wrong assumption, corrected with the figure that '
             'makes the scale clear.'),
            ('Woman: What makes the water sink in the first place?',
             ('It gets cold and salty, so it gets dense.', 'About two kilometres.',
              'Yes, it sinks.', 'In the North Atlantic.'), 0,
             'A what-makes question wants a mechanism, and the answer gives both conditions '
             'and the consequence.'),
            ('Man: Is this the same thing as the tides?',
             ('No, completely different — tides are the moon.', 'Yes, roughly.',
              'Twice a day.', 'The tide is coming in.'), 0,
             'A question conflating two phenomena is answered by separating them and naming '
             'the cause of the other one.'),
        ],
        script=[
            ('Man', 'So the deep water is moving fast?'),
            ('Woman', 'The opposite — it takes about a thousand years to get round.'),
            ('Man', 'A thousand? The arrows on this figure are enormous.'),
            ('Woman', 'Oh, I see what you are thinking. The arrows are not speed. They are '
                      'volume. That one is huge because an enormous amount of water is '
                      'moving, not because it is moving quickly.'),
            ('Man', 'Right. So it is like a very wide, very slow river.'),
            ('Woman', 'That is exactly it. Wide enough to carry more water than every river '
                      'on land put together, and slow enough that a drop takes a human '
                      'lifetime to cross one ocean.'),
            ('Man', 'And that is the thing people worry about slowing down?'),
            ('Woman', 'Yes, although slowing is the wrong word for what the models actually '
                      'show. The concern is about the sinking at the north end. If the '
                      'surface water there gets fresher, it stops being dense enough to sink, '
                      'and the whole thing weakens from the top.'),
            ('Man', 'Fresher from the ice melting.'),
            ('Woman', 'Fresher from ice melt and from more rainfall. Both add fresh water in '
                      'the same place.'),
            ('Man', 'And we would know if that was happening?'),
            ('Woman', 'We would eventually. That is the uncomfortable part — the system we '
                      'are watching responds over decades, so the measurement that settles it '
                      'may arrive after the thing it was measuring.'),
        ],
        items=[
            ('What did the man initially misunderstand?',
             ('The direction of the current', 'What the arrows on the figure represent',
              'The depth of the ocean', 'Where the water sinks'), 1,
             'He read the arrow size as speed, and the woman diagnoses it: the arrows are '
             'volume.'),
            ('What does the woman compare the circulation to?',
             ('A conveyor belt', 'A very wide, very slow river', 'A whirlpool', 'A pump'), 1,
             'The man offers the river image and she endorses it as exactly right, then '
             'extends it.'),
            ('Why might the sinking stop?',
             ('The water gets too warm', 'The surface water gets fresher and less dense',
              'The wind changes direction', 'The basin fills with sediment'), 1,
             'Fresher water is less dense, and density is what makes it sink in the first '
             'place.'),
            ('What two sources of fresh water does the woman name?',
             ('Rivers and ice melt', 'Ice melt and increased rainfall',
              'Rainfall and rivers', 'Ice melt and storms'), 1,
             'She corrects the man’s single source by adding rainfall, and notes both act in '
             'the same place.'),
            ('Why does the woman object to the word "slowing"?',
             ('The system is speeding up', 'It misdescribes what the models show',
              'It is too technical', 'It applies only to surface currents'), 1,
             'She calls it the wrong word for what the models actually show and then '
             'describes weakening from the top instead.'),
            ('What does the woman find "uncomfortable"?',
             ('The cost of monitoring', 'That the confirming measurement may come too late',
              'That the models disagree', 'That the public is not interested'), 1,
             'The system responds over decades, so the measurement that settles the question '
             'may arrive after the change it would have warned about.'),
            ('What is the woman’s role in the conversation?',
             ('She is asking for help', 'She is correcting and then extending his picture',
              'She disagrees with the figure', 'She is reading from notes'), 1,
             'Each of her turns either diagnoses a misreading or adds the next piece, which '
             'is explanation rather than disagreement.'),
        ],
    ),

    l2=dict(
        sub='Coastal upwelling',
        caption='A briefing before a research cruise',
        poster=['Cruise CMA-7R · departs Tuesday 06.00',
                'Berth allocation on the noticeboard',
                'Seasickness medication: take it before you sail'],
        skill=('Hearing priorities inside a list',
               ['A B2 announcement often lists several items and marks one as the important '
                'one.',
                'Listen for the ranking: the one that matters, above all, if you remember '
                'nothing else.',
                'That item is almost always tested, and the others are distractors.']),
        warm=[
            ('Woman: What time do we actually sail?',
             ('Six, and the gangway closes at half five.', 'From berth nine.',
              'Yes, on Tuesday.', 'It takes four days.'), 0,
             'A what-time question is answered with the time and the earlier deadline that '
             'really governs it.'),
            ('Man: Should I take the tablets now or wait?',
             ('Before you sail — afterwards is too late.', 'They are in the mess.',
              'About two a day.', 'Yes, they work.'), 0,
             'A now-or-later question wants the timing and the reason it matters.'),
            ('Woman: Is there internet on board?',
             ('A satellite link, shared, and slow.', 'Yes, in the lab.',
              'About eight people.', 'It costs nothing.'), 0,
             'A yes/no about a facility is answered with what exists and its real '
             'limitations.'),
        ],
        script=[
            ('Man', 'Five things before Tuesday, and I will tell you which one matters. One: '
                    'we sail at six, and the gangway closes at half past five, so arrive '
                    'before that or you will watch us leave. Two: berths are on the '
                    'noticeboard and are not negotiable. Three: there is a satellite link, it '
                    'is shared between twenty-two people, and it is slow — do not plan to '
                    'upload anything. Four: if you take seasickness medication, take it '
                    'before you sail. It does almost nothing once you are already unwell. '
                    'Now, the fifth, and if you remember nothing else from this briefing, '
                    'remember this one. Every instrument you lower goes into the log before '
                    'it goes into the water, with the time and the position. Not afterwards, '
                    'not from memory at the end of the watch. We lost three days of a cruise '
                    'two years ago reconstructing which cast was which, and the data from '
                    'those three days is still flagged as uncertain in the archive. The log '
                    'is not administration. It is the measurement.'),
        ],
        items=[
            ('What time does the gangway close?',
             ('Five', 'Half past five', 'Six', 'Half past six'), 1,
             'The sailing time is six but the gangway closes half an hour earlier, which is '
             'the deadline that actually binds.'),
            ('What does the speaker say about the satellite link?',
             ('It is unavailable', 'It is shared and slow',
              'It costs money', 'It works only in port'), 1,
             'Shared between twenty-two people and slow, with the practical instruction not '
             'to plan on uploading.'),
            ('When should seasickness medication be taken?',
             ('When symptoms start', 'Before sailing', 'Only if needed',
              'Each morning'), 1,
             'He gives the reason too: it does almost nothing once you are already unwell.'),
            ('Which item does the speaker say matters most?',
             ('Arriving on time', 'The berth allocation', 'Logging every instrument before deployment',
              'The medication'), 2,
             'He flags the fifth item explicitly with if you remember nothing else and spends '
             'the most time on it.'),
            ('Why does the speaker mention a cruise from two years ago?',
             ('To praise the crew', 'To give the cost of not logging properly',
              'To explain the berth system', 'To describe the route'), 1,
             'Three days lost and data still flagged as uncertain is the evidence for the '
             'rule he has just given.'),
            ('What does the speaker mean by "the log is not administration — it is the measurement"?',
             ('The log replaces the instruments',
              'Without the log the readings cannot be used',
              'The log is checked by administrators',
              'The log should be written after each watch'), 1,
             'A reading with no reliable time and position attached cannot be placed, which '
             'is exactly what left the earlier data flagged.'),
        ],
    ),

    l3=dict(
        sub='Measuring a moving sea',
        caption='A lecture on the float array',
        board=['Ships: control, poor coverage',
               'Floats: coverage, no control',
               'Mean state vs variability',
               'Gaps: deep water, under ice'],
        skill=('Following a talk organised as a trade-off',
               ['Many B2 talks are built on one exchange: what was given up against what '
                'was gained.',
                'Hold both halves. Items frequently ask for the cost rather than the '
                'benefit.',
                'The conclusion is usually that the trade was worth making, with a named '
                'exception.']),
        warm=[
            ('Woman: How many floats are there?',
             ('Several thousand, drifting freely.', 'About ten days.',
              'Yes, quite a few.', 'In the Atlantic.'), 0,
             'A how-many question wants the number, and the answer adds the fact that makes '
             'the number meaningful.'),
            ('Man: Can the floats be steered?',
             ('No, and that is deliberate.', 'Yes, from shore.',
              'About two kilometres down.', 'They are expensive.'), 0,
             'A can-it question answered with the limitation and a signal that it is a '
             'design choice rather than a failure.'),
            ('Woman: What happens to a float under sea ice?',
             ('It cannot transmit, so the profile is lost.', 'It melts the ice.',
              'About every ten days.', 'Yes, that is a problem.'), 0,
             'A what-happens question wants the consequence, which the other options either '
             'dodge or merely agree with.'),
        ],
        script=[
            ('Woman', 'For most of the twentieth century, ocean measurement meant a ship. '
                      'That gave you complete control: you chose the position, the depth, the '
                      'instrument and the moment. What it did not give you was coverage. '
                      'Cruises happened where it was convenient to sail, in the seasons when '
                      'sailing was pleasant, and years apart. So the record we inherited is '
                      'detailed, accurate, and systematically unrepresentative. Now consider '
                      'the trade the float array makes. Several thousand instruments drift '
                      'wherever the water takes them. You cannot steer one. You cannot '
                      'recover one. You cannot ask for a profile at a particular place on a '
                      'particular day. In exchange, you get measurements from everywhere, in '
                      'every season, continuously, for twenty years and counting. Control for '
                      'coverage. Was it worth it? Overwhelmingly yes, and the evidence is in '
                      'the comparison: broadly speaking the ship record had the average right '
                      'and the variability badly wrong, which is exactly the error you would '
                      'predict from sampling the same convenient places in the same pleasant '
                      'months. But the trade has a limit, and I want to be honest about it. '
                      'Two regions are still effectively unsampled: the water below the '
                      'parking depth, and anywhere under ice. The second is the harder one. '
                      'A float that surfaces beneath an ice sheet cannot transmit, so the '
                      'profile simply never arrives, and a region that is poorly understood '
                      'is precisely the region where the surprises live.'),
        ],
        items=[
            ('What did ship-based measurement provide?',
             ('Coverage', 'Control over where and when', 'Continuous records',
              'Measurements under ice'), 1,
             'The talk opens with complete control over position, depth, instrument and '
             'moment, and contrasts it with coverage.'),
            ('What does the speaker mean by "systematically unrepresentative"?',
             ('The measurements were inaccurate', 'The sampling was biased in a consistent way',
              'The record was incomplete', 'The instruments differed'), 1,
             'Convenient places, pleasant seasons — the bias has a direction, which is what '
             'systematically adds to unrepresentative.'),
            ('What is the trade the float array makes?',
             ('Accuracy for cost', 'Control for coverage', 'Depth for duration',
              'Speed for precision'), 1,
             'She names it in three words and then evidences it from the comparison with the '
             'ship record.'),
            ('What was the ship record wrong about?',
             ('The average state', 'The variability', 'The depth', 'The salinity'), 1,
             'The average was right and the variability badly wrong, which she calls exactly '
             'the predictable error.'),
            ('Why is under-ice sampling the harder problem?',
             ('The water is colder', 'A float there cannot transmit its profile',
              'Floats are crushed by ice', 'Ships cannot deploy there'), 1,
             'The profile never arrives, so the measurement is taken and then lost rather '
             'than never attempted.'),
            ('What does the speaker say about regions that are poorly understood?',
             ('They are unimportant', 'They are where the surprises live',
              'They are too expensive to study', 'They are being covered now'), 1,
             'That is her closing line, and it is the reason she gives for not treating the '
             'gaps as acceptable.'),
            ('What is the speaker’s overall verdict on the trade?',
             ('It was a mistake', 'Overwhelmingly worth it, with two named limits',
              'Too early to say', 'Worth it only in the tropics'), 1,
             'She answers her own question with overwhelmingly yes and then spends the rest '
             'of the talk being honest about where it falls short.'),
        ],
    ),

    sp=[
        dict(
            sub='The deep circulation',
            focus='keeping the preposition with its relative pronoun',
            skill=('Repeating a sentence with a prepositional relative',
                   ['The rate at which, the extent to which, the degree to which — these '
                    'arrive as one block in speech.',
                    'Do not pause between the preposition and which. The pause belongs '
                    'before the whole phrase.',
                    'Practise until the block comes out whole.']),
            repeat=[
                'The deep ocean moves slowly.',
                'Density drives the circulation.',
                'Cold salty water sinks in the north.',
                'The rate at which it sinks depends on salinity.',
                'The extent to which the system weakens is still being measured.',
                'A journey of a thousand years is the scale on which this system responds.',
                'The speed at which fresh water is arriving is the thing about which researchers are most uncertain.',
            ],
            theme='slow processes and short attention',
            qs=[
                'Thank you for joining me. To begin, can you think of something in your own '
                'life that changes too slowly to notice?',
                'Scientists often study systems that respond over decades. What problems does '
                'that create for them, and for the public?',
                'Now your opinion. Should governments act on a risk that will not be '
                'confirmed for thirty years? Why or why not?',
                'A final question. If monitoring a slow change costs a great deal and '
                'produces no news for decades, how would you justify funding it?',
            ],
            model=[(2, 'The main problem is that nothing looks urgent until it is too late to '
                       'act gradually. By the time a signal is unambiguous, the cheap options '
                       'have usually gone.'),
                   (4, 'I would justify it the way you justify a smoke alarm. Most of what it '
                       'produces is silence, and the value is entirely in the one occasion '
                       'when it is not silent.')],
            selfcheck=['I kept the preposition and which together.',
                       'I did not pause inside the phrase.',
                       'I gave an example rather than only a generalisation.'],
        ),
        dict(
            sub='Coastal upwelling',
            focus='saying approximate quantities precisely',
            skill=('Being vague on purpose',
                   ['A B2 speaker who does not know a number should still sound precise '
                    'about how vague they are.',
                    'On the order of, in the region of, roughly, somewhere between — each '
                    'commits to a different width.',
                    'Never say about and then give three decimal places.']),
            repeat=[
                'The catch varies from year to year.',
                'Roughly a fifth comes from these coasts.',
                'The wind failed for most of the spring.',
                'A weak season can cut the catch by something like half.',
                'Four systems account for a share far out of proportion to their area.',
                'In the region of twenty per cent of the global catch comes from under two per cent of the ocean.',
                'When the wind weakens for a season, the nutrients stay below, and the effect on the fishery is felt within months rather than years.',
            ],
            theme='fishing, livelihoods and uncertain forecasts',
            qs=[
                'Thanks for taking part. First, is fishing important where you are from, or '
                'anywhere you have lived?',
                'Forecasts of a bad season are often uncertain. Should they be published '
                'anyway, knowing people may act on them? Why?',
                'Now an opinion question. Should fishing be restricted in a bad year to '
                'protect future catches, even when families depend on it? Why or why not?',
                'One last question. Who should decide how a shared fishery is divided between '
                'countries, and on what basis?',
            ],
            model=[(2, 'Yes, with the uncertainty stated plainly. Withholding a forecast '
                       'protects nobody; people simply make the decision with less to go on.'),
                   (3, 'I would restrict, but I would pay for it. A restriction that takes '
                       'away this year’s income to protect a stock everybody shares is a '
                       'public good bought with private money, and that rarely holds.')],
            selfcheck=['I matched the vagueness of the phrase to my actual confidence.',
                       'I did not give a precise figure I was unsure of.',
                       'I answered the whole question.'],
        ),
        dict(
            sub='Measuring a moving sea',
            focus='stating a trade-off out loud in one sentence',
            skill=('Expressing a trade-off',
                   ['The pattern is: we give up X and we get Y. Say it in one sentence, '
                    'with the stress on both nouns.',
                    'What you lose in control you gain in coverage. The symmetry carries '
                    'the meaning.',
                    'Then say whether it was worth it. A trade-off stated without a verdict '
                    'sounds like indecision.']),
            repeat=[
                'Ships gave control.',
                'Floats give coverage.',
                'You cannot steer a float.',
                'What you lose in control you gain in coverage.',
                'The record from ships was accurate and badly unrepresentative.',
                'The array measures everywhere in every season, which no ship programme could do.',
                'Two regions are still unsampled, and the one under ice is the harder of the two to solve, for reasons that have nothing to do with the instruments.',
            ],
            theme='measurement, money and what we choose not to know',
            qs=[
                'Thank you for your time. To start, has there been a time when you had to '
                'choose between doing something thoroughly and doing it at all?',
                'Research funding often goes to new projects rather than to maintaining old '
                'measurements. Why do you think that is, and is it a problem?',
                'Now your opinion. Should countries be required to share ocean or climate '
                'data they collect? Why or why not?',
                'Finally. If a gap in knowledge would be expensive to fill and might turn out '
                'not to matter, should it be filled anyway? Why?',
            ],
            model=[(2, 'Partly because a new project has a story and a maintained record '
                       'does not. Nobody announces that the measurements continued, so the '
                       'funding for continuing is always the easiest thing to cut.'),
                   (4, 'I would fill it, on the grounds that you cannot tell in advance which '
                       'gap mattered. That is the whole difficulty: the argument for filling '
                       'it is only available after you have filled it.')],
            selfcheck=['I stated the trade-off in a single sentence.',
                       'I then gave a verdict on it.',
                       'I used a hedge that matched my confidence.'],
        ),
    ],

    w1=dict(
        sub='Questions about measurement',
        skill=('Build a Sentence with a prepositional relative',
               ['Two of the ten items will build a relative clause rather than a question. '
                'Those are where the prepositions live.',
                'The preposition goes before which, not at the end, in anything written: '
                'the rate at which, not the rate which it happens at.',
                'A tile reading at which or to which is one block and sits immediately '
                'after its noun.']),
        guided=[
            ('The float array has been running for twenty years.',
             ['know', 'do', 'you', 'how many', 'still', 'floats', 'are', 'reporting', 'actually'],
             'Do you know how many floats are actually still reporting?'),
            ('The two periods are treated as separate series.',
             ['us', 'why', 'told', 'nobody', 'they', 'were', 'split', 'exactly', 'apart'],
             'Nobody told us exactly why they were split apart.'),
            ('The rate of sinking depends on how salty the water is.',
             ['at which', 'the rate', 'it sinks', 'is', 'the thing', 'we', 'are', 'measuring', 'actually'],
             'The rate at which it sinks is the thing we are actually measuring.'),
        ],
        exam=[
            ('The replacement mooring was 400 metres away.',
             ['whether', 'do', 'know', 'you', 'that', 'the record', 'affects', 'much', 'very'],
             'Do you know whether that affects the record very much?'),
            ('A float under ice cannot transmit.',
             ['to which', 'the extent', 'do', 'you', 'know', 'this', 'actually', 'matters', 'at all'],
             'Do you know the extent to which this actually matters at all?'),
            ('The 200 metre sensor was replaced in 2014.',
             ['know', 'does', 'anybody', 'whether', 'the old', 'values', 'were', 'recalibrated', 'ever'],
             'Does anybody know whether the old values were ever recalibrated?'),
            ('The cruise log must be filled in before deployment.',
             ['can', 'me', 'remind', 'you', 'what', 'goes', 'in it', 'exactly', 'again'],
             'Can you remind me exactly what goes in it again?'),
            ('The deep water may hold most of the added heat.',
             ['to know', 'nobody', 'seems', 'how much', 'of it', 'is', 'down there', 'actually', 'still'],
             'Nobody seems to know how much of it is actually still down there.'),
            ('The gangway closes half an hour before we sail.',
             ['told', 'she', 'us', 'when', 'we', 'had', 'to be', 'on board', 'exactly'],
             'She told us exactly when we had to be on board.'),
            ('The array cannot be steered.',
             ['at which', 'the speed', 'they', 'drift', 'is', 'something', 'nobody', 'controls', 'at all'],
             'The speed at which they drift is something nobody controls at all.'),
        ],
    ),

    w2=dict(
        sub='Coastal upwelling',
        to='cma-data@oceanlab.org',
        date='11/02/2027',
        subject='CMA-7 — flagged values in the 2019 summer record',
        scenario=[
            'You are using dataset CMA-7 for a dissertation. The 5 m temperature values for '
            'July and August 2019 are flagged for biofouling but have not been removed. Your '
            'supervisor says you must decide whether to use them and justify the decision. '
            'You need to know how bad the fouling was before you can decide.',
            'Write an email to the data office.',
        ],
        bullets=['Say exactly which values you mean.',
                 'Explain what you need to know and why.',
                 'Ask a question they can answer briefly.'],
        skill=('Asking a technical question well',
               ['Identify the data precisely — dataset, version, depth, dates. A vague '
                'question gets a vague answer or none.',
                'Say what you intend to do with the answer. It lets the expert tell you '
                'something more useful than what you asked for.',
                'Ask something answerable in two lines, and say that you have looked first.']),
        model=[
            'Dear Data Office,',
            '',
            'I am using CMA-7, version 4.2, for an undergraduate dissertation on summer '
            'stratification, and I have a question about the 5 m temperature record for July '
            'and August 2019.',
            '',
            'Those values carry the biofouling flag but are present in the file. I have read '
            'the notes and I understand the policy is to flag rather than remove. What I '
            'cannot tell from the documentation is how large the effect was in that '
            'particular summer — whether the fouling shifted readings by hundredths of a '
            'degree or by something that would change a stratification index.',
            '',
            'I am trying to decide whether to use those two months or treat them as missing, '
            'and I have to justify the choice in the write-up either way.',
            '',
            'Is there a post-recovery comparison for the 2019 deployment that would give me a '
            'rough magnitude? Even an order of magnitude would settle it.',
            '',
            'With thanks for your time,',
            'Joana Ferreira',
        ],
        notes=['The data are identified exactly: dataset, version, depth, months.',
               'It says what has already been read, so nobody repeats the documentation.',
               'It explains the decision the answer will feed, which lets the expert answer '
               'the real question.',
               'The request is bounded — even an order of magnitude would settle it.'],
        bandpair=dict(
            mid=[
                'Dear Data Office,',
                'I am a student using your CMA-7 dataset for my dissertation and I have a '
                'question about some of the data. Some of the temperature values in summer '
                '2019 have a flag on them for biofouling but they are still in the file, '
                'which is confusing.',
                'I would like to know whether I should use these values or not. My supervisor '
                'has asked me to decide and I am not sure what the right thing to do is. It '
                'would be very helpful if you could advise me on this.',
                'Could you please let me know what you think? I am working on summer '
                'stratification so the surface temperatures are quite important for my '
                'analysis. Thank you very much for your time and help.',
                'Best wishes, Joana Ferreira',
            ],
            top=[
                'Dear Data Office,',
                'I am using CMA-7, version 4.2, for a dissertation on summer stratification, '
                'and I have a question about the 5 m temperature record for July and August '
                '2019.',
                'Those values carry the biofouling flag but are present in the file. I have '
                'read the notes and understand the policy is to flag rather than remove. What '
                'I cannot tell is how large the effect was that summer — hundredths of a '
                'degree, or enough to change a stratification index.',
                'I am deciding whether to use the two months or treat them as missing, and I '
                'must justify the choice either way.',
                'Is there a post-recovery comparison for the 2019 deployment that would give '
                'a rough magnitude? Even an order of magnitude would settle it. With thanks, '
                'Joana Ferreira',
            ],
            diffs=[
                'It names the version, depth and exact months, so the data office can look up '
                'the answer instead of writing back to ask which values are meant.',
                'It states what has already been read, which stops the reply being a link to '
                'the documentation.',
                'It asks a question with a bounded answer — an order of magnitude — rather '
                'than asking what somebody thinks.',
                'It gives the decision the answer feeds, so the expert can volunteer the '
                'thing the writer did not know to ask for.',
                'It never asks to be told what to do, which keeps the judgement with the '
                'student where the supervisor put it.',
            ],
        ),
    ),

    w3=dict(
        sub='Measuring a moving sea',
        prof='Dr Lindqvist',
        question='Long-term environmental monitoring produces no publishable result in most '
                 'years and is expensive to maintain. Funding bodies increasingly favour '
                 'short projects with defined outputs. Some argue that monitoring should be '
                 'protected by separate, permanent funding because its value cannot be judged '
                 'year by year. Others argue that protecting any activity from review is how '
                 'waste becomes permanent. Should long-term monitoring have protected '
                 'funding? Why or why not?',
        posts=[('Elin', 'w',
                'Monitoring has to be protected. The value of a forty-year record is in its '
                'length, and length is exactly what a three-year funding cycle destroys. A '
                'gap of two years cannot be filled later at any price, which is not true of '
                'almost any other research output.'),
               ('Sami', 'm',
                'I am not persuaded. Every field claims its work cannot be judged on normal '
                'timescales, and most of those claims are self-serving. If a record is '
                'genuinely irreplaceable, that case can be made to a funding panel like any '
                'other. Protection just removes the need to make it.')],
        skill=('Using a technical fact as an argument',
               ['The highest-value move in a discussion post is a specific fact the other '
                'posters did not have.',
                'It must do work. A fact that merely decorates your position does not '
                'raise the score.',
                'Introduce it plainly: there is a technical point neither post mentions.']),
        starters=['There is a point neither post makes, which is that…',
                  'Elin is right that…, and the reason is stronger than she gives.',
                  'Sami’s test is the right one, but applied properly it gives…',
                  'The distinction that matters is between… and…'],
        model=[
            'There is a point neither post makes, and it decides the question. A gap in a '
            'monitoring record is not merely missing data. It breaks the continuity that '
            'makes the rest of the record interpretable. When the coastal array I work with '
            'lost two years to a storm, the replacement was moored four hundred metres away, '
            'and the data office now treats the two halves as separate series that cannot be '
            'joined. Twenty-eight years of measurement became two records of thirteen and '
            'twelve, and no amount of later funding can recover the missing link.',
            'Elin is right, then, but the reason is stronger than she gives. It is not only '
            'that the gap cannot be filled; it is that the gap devalues the data on both '
            'sides of it.',
            'Sami’s test is nonetheless the right one, and applied properly it does the work '
            'he wants. If irreplaceability is the criterion, then it is a factual question '
            'about each record, and most monitoring would fail it. Broadly speaking, a survey '
            'that can be restarted is not in this category at all.',
            'So I would not protect monitoring as a class. I would protect records that meet '
            'a stated continuity test, reviewed once a decade rather than every three years. '
            'That keeps Sami’s discipline and gives Elin the length she needs.',
        ],
        model_words=219,
    ),

    gram=dict(
        title='Relative clauses with prepositions',
        headers=['Pattern', 'Example'],
        rows=[
            ('preposition + which', 'the rate at which the water sinks'),
            ('preposition + whom', 'the researcher to whom the sample was sent'),
            ('preposition + whose', 'the array on whose data the study depends'),
            ('quantifier + of which', 'four systems, three of which lie in the Pacific'),
            ('the extent / degree to which', 'the extent to which the system has weakened'),
            ('end-position preposition (informal)', 'the rate which it sinks at'),
            ('no relative pronoun possible',
             'the rate at which it sinks  NOT  the rate at that it sinks'),
        ],
        notes=[
            'In academic writing the preposition goes before which or whom. In speech it '
            'often goes to the end. Both are correct English; only one is appropriate in an '
            'essay.',
            'That can never follow a preposition. If you want to keep that, the preposition '
            'must go to the end.',
            'A quantifier takes of which: some of which, most of which, neither of which. '
            'This is the neatest way to attach a statistic to a noun.',
        ],
        watch='"The extent to which" takes a clause, not a noun. The extent to which the '
              'system has weakened, not the extent to which of the weakening. If you cannot '
              'finish the clause, you have used the phrase too early.',
        ex=[
            ('Rewrite with the preposition before the relative pronoun.',
             ['The rate which the water sinks at depends on salt.',
              'The researcher who the sample was sent to has replied.',
              'The period which the sensor was unreliable during is flagged.',
              'The basin which the water returns to is in the Pacific.',
              'The scale which this system responds on is a thousand years.',
              'The colleague who I wrote to has not answered.'],
             ['The rate at which the water sinks depends on salt.',
              'The researcher to whom the sample was sent has replied.',
              'The period during which the sensor was unreliable is flagged.',
              'The basin to which the water returns is in the Pacific.',
              'The scale on which this system responds is a thousand years.',
              'The colleague to whom I wrote has not answered.']),
            ('Join with a quantifier + of which or of whom.',
             ['There are four upwelling systems. Three lie in the Pacific.',
              'Twenty-two people sailed. None had been to sea before.',
              'The array has several thousand floats. Most are still reporting.',
              'Two periods are flagged. Neither can be joined to the other.'],
             ['There are four upwelling systems, three of which lie in the Pacific.',
              'Twenty-two people sailed, none of whom had been to sea before.',
              'The array has several thousand floats, most of which are still reporting.',
              'Two periods are flagged, neither of which can be joined to the other.']),
            ('Complete with the extent to which, the rate at which or the degree to which.',
             ['______ the circulation has weakened is still being measured.',
              '______ fresh water is arriving has increased.',
              '______ the two records can be compared is limited.',
              '______ the fishery depends on the wind surprises people.'],
             ['The extent to which', 'The rate at which', 'The degree to which',
              'The extent to which']),
        ],
        bas='The two non-question items in Build a Sentence are usually relative clauses, and '
            'at B2 one of them will carry a preposition. A tile reading at which or of which '
            'attaches directly to the noun before it and never floats to the end.',
    ),

    fault=dict(
        text='The rate at that the water sinks depends on salinity. The extent to which of '
             'the weakening is still unclear. There are four systems, three of them lie in '
             'the Pacific. The researcher who the sample was sent to have replied. The period '
             'which the sensor was unreliable is flagged in the archive.',
        faults=[
            ('at that the water sinks', 'at which the water sinks',
             'That can never follow a preposition; only which or whom can.'),
            ('The extent to which of the weakening', 'The extent to which the system has weakened',
             'The extent to which introduces a clause, not a noun phrase.'),
            ('three of them lie', 'three of which lie',
             'Joining two clauses needs of which; of them would start a new sentence.'),
            ('was sent to have replied', 'was sent to has replied',
             'The subject is the singular researcher, not the sample next to the verb.'),
            ('The period which the sensor', 'The period during which the sensor',
             'The clause needs a preposition: the sensor was unreliable during that period.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('a steady change in something across space', 'gradient'),
            ('containing salt', 'saline'),
            ('how much mass sits in a given volume', 'density'),
            ('deep water rising to the surface', 'upwelling'),
            ('a substance living things need to grow', 'nutrient'),
            ('the rate at which something flows through', 'flux'),
            ('the tendency to float or rise', 'buoyancy'),
            ('to settle into separate horizontal layers', 'stratify'),
            ('material that settles at the bottom', 'sediment'),
            ('a reading that departs from the expected', 'anomaly'),
            ('a state in which opposing forces balance', 'equilibrium'),
            ('the sinking and rising that drives deep flow', 'overturning'),
        ],
        gram=[
            ('The rate ______ which it sinks depends on salt.', 'at'),
            ('The researcher ______ whom the sample was sent has replied.', 'to'),
            ('Four systems, three ______ which lie in the Pacific.', 'of'),
            ('The ______ to which it has weakened is unclear.', 'extent'),
            ('The period ______ which the sensor failed is flagged.', 'during'),
            ('The scale ______ which this responds is a millennium.', 'on'),
            ('Twenty-two sailed, none ______ whom had been to sea.', 'of'),
            ('The basin ______ which the water returns is in the Pacific.', 'to'),
        ],
        mini=[
            ('Deep water sinks because it is',
             ('warm and fresh', 'cold and salty', 'shallow and still', 'rich in nutrients'), 1,
             'Density drives the circulation, and density depends on temperature and salt '
             'together.'),
            ('Upwelling brings deep water up because wind',
             ('pushes water ashore', 'pushes surface water offshore',
              'warms the surface', 'stops the current'), 1,
             'The rotation of the planet turns an alongshore wind into offshore transport, '
             'and water from below replaces what leaves.'),
            ('The float array gives up',
             ('accuracy', 'control over where measurements are taken',
              'seasonal coverage', 'continuous operation'), 1,
             'No float is steered or recovered, which is the price paid for measuring '
             'everywhere in every season.'),
            ('Which is correct in academic writing?',
             ('the rate at that it sinks', 'the rate at which it sinks',
              'the rate which it sinks at that', 'the rate what it sinks at'), 1,
             'That cannot follow a preposition, and the end-position version belongs to '
             'speech rather than an essay.'),
            ('"Is estimated to" tells you the number is',
             ('exact', 'carrying uncertainty', 'disputed', 'unmeasured'), 1,
             'An estimate reports a quantity with error attached, which is weaker than a '
             'measurement and stronger than a guess.'),
            ('The ship record was wrong mainly about',
             ('the average state', 'how much the average varies',
              'the salinity', 'the depth'), 1,
             'Sampling the same convenient places in the same months gets the mean roughly '
             'right and the variability badly wrong.'),
        ],
    ),

    tip='"The extent to which" is the most useful phrase in academic English and the one B2 '
        'writers most often strand. It needs a full clause after it. If you find yourself '
        'writing the extent to which of, stop and ask what the system actually did — then '
        'write that as a clause.',
)
