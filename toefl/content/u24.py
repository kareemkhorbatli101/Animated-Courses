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



# ---------------------------------------------------------------------------
# The two academic cycles, added by the Volumes 3-6 work.
#
# Unit 24 gains its two academic cycles. Cycle 4 is about instrumentation
# rather than findings: how you weigh a current thousands of miles wide,
# why the mooring array is spaced unevenly, and what it discovered, which
# was about variability rather than about the average. Cycle 5 accepts the
# measurement and refuses one use of it, because detecting a slow trend
# against swings that large needs thirty to forty years and the record
# grows at one year a year.
# ---------------------------------------------------------------------------
UNIT['fieldwords'] = [('mooring', 'an instrument anchored to the sea floor to record one spot'),
 ('buoy', 'a floating marker that carries instruments'),
 ('transect', 'a line of measurements taken across a region'),
 ('salinity', 'how much salt the water contains'),
 ('cruise', 'a research voyage made to collect measurements'),
 ('array', 'a set of instruments laid out in a planned pattern'),
 ('latitude', 'how far north or south of the equator a place is'),
 ('amplitude', 'the size of the swing a quantity makes'),
 ('conveyor', 'a belt that carries material steadily from place to place'),
 ('variability', 'the amount a quantity moves about from year to year'),
 ('convenient', 'easy to use, and chosen partly for that reason'),
 ('arithmetic', 'the calculation itself, as opposed to the argument')]
UNIT['r4'] = {'sub': 'Measuring a moving sea',
 'title': 'How You Weigh a Current That Is Thousands of Miles Wide',
 'words': 288,
 'skill': ('Reading a passage about instrumentation rather than findings',
           ['The subject here is how a quantity is measured, so the method is the content '
            'and not the background to it.',
            'Note the problem that makes the measurement difficult, because every design '
            'decision that follows is an answer to it.',
            'A question about the array wants what the spacing of the instruments was chosen '
            'to achieve.']),
 'paras': ['The overturning circulation carries warm surface water towards the pole in a '
           'single broad current and releases its heat to the atmosphere. It returns the '
           'same water at depth, having made it denser by cooling and by an increase in '
           'salinity. The quantity everybody wants is the strength of that overturning, '
           'expressed as a volume of water crossing a line of latitude every second. '
           'Measuring it directly is a problem of a peculiar kind, because the flow is '
           'spread across a basin thousands of miles wide, it reverses with depth, and its '
           'speed at any one point bears very little relation to the total.',
           'The solution adopted is an array. A line of moorings is set across the ocean at '
           'one latitude, each carrying instruments at a series of depths, and each records '
           'temperature, salinity and the speed of the flow continuously for years at a '
           'time. The spacing is not uniform and the reason is instructive. Instruments are '
           'concentrated near the two coasts, where the strongest and least steady flows are '
           'found, and thinned across the interior, where the vertical structure changes '
           'slowly enough that a wide spacing loses little information. The design is a '
           'direct expression of where the variability lives.',
           'What the array produced was a surprise, and the surprise was about variability '
           'rather than about the average. The overturning turned out to fluctuate by a '
           'factor of several over a single year, which no earlier estimate had anticipated, '
           'because earlier estimates came from occasional cruises along the same transect, '
           'and a single cruise records one moment. A quantity sampled once a decade and '
           'moving strongly within a year will appear steady, and that appearance belongs to '
           'the sampling interval rather than to the ocean.'],
 'guided': [('What does the overturning circulation do, by this passage?',
             ('Carries warm water towards the pole and returns it at depth',
              'Carries cold water towards the pole at the surface',
              'Moves water only vertically',
              'Keeps the ocean at one temperature'),
             0,
             'Warm surface water towards the pole, heat released, and the same water '
             'returning southward at depth.'),
            ('Why is the flow hard to measure directly?',
             ('The instruments are expensive',
              'It is basin-wide, reverses with depth, and local speed says little about the '
              'total',
              'It changes direction every day',
              'Salinity cannot be recorded'),
             1,
             'All three difficulties are listed, and together they rule out measuring at a '
             'point.'),
            ('What is the array?',
             ('A single mooring at one depth',
              'A line of moorings across the ocean, each with instruments at several depths',
              'A fleet of research ships',
              'A satellite measurement'),
             1,
             'A line of moorings strung across the ocean at one latitude, each carrying '
             'instruments at a series of depths.')],
 'exam': [('Why is the spacing of the moorings not uniform?',
           ('The ocean floor prevents it',
            'Instruments are concentrated where the flow is most variable',
            'The array was built in stages',
            'Salinity varies at the margins'),
           1,
           'Concentrated near the continental margins, where the strongest and most variable '
           'flows are, and thinned across the interior.'),
          ('The phrase a direct expression of where the variability lives means that',
           ('the design was chosen for convenience',
            'the layout of the instruments follows the structure of the flow',
            'variability cannot be measured',
            'the interior is unimportant'),
           1,
           'The design mirrors the physics: instruments go where the quantity moves most.'),
          ('What was the surprise the array produced?',
           ('The average was much larger than expected',
            'The overturning moves by a factor of several within a year',
            'The circulation had stopped',
            'Salinity was higher than predicted'),
           1,
           'The surprise was about variability rather than about the average.'),
          ('Why had earlier estimates missed it?',
           ('They used the wrong instruments',
            'They came from occasional cruises, each recording one moment',
            'They measured the wrong latitude',
            'They were never published'),
           1,
           'Occasional cruises along the same transect give snapshots, which cannot see '
           'variation within a year.'),
          ('What general point does the last sentence make?',
           ('Oceans are steadier than they appear',
            'An appearance of steadiness can be produced by the sampling interval',
            'Cruises should be abandoned',
            'Variability is unmeasurable'),
           1,
           'A quantity sampled once a decade and varying within a year will look stable, and '
           'that stability belongs to the sampling.')]}
UNIT['r5'] = {'sub': 'Ten years is not a trend',
 'title': 'Ten Years Is Not a Trend',
 'words': 284,
 'skill': ('Reading an objection about the length of a record',
           ['This writer accepts the measurements and disputes what a record of that length '
            'can support.',
            'The argument is statistical, so find the comparison between the variability and '
            'the trend being looked for.',
            'A question about the metaphor wants what it makes a reader expect.']),
 'paras': ['The array did exactly what it was built to do, and the difficulty began when its '
           'output was asked a question it was not long enough to answer. A decade of '
           'continuous measurement established the variability, and the variability turned '
           'out to be large. Detecting a slow decline in the average against fluctuations of '
           'that amplitude requires a record several times longer than the one available, '
           'and the arithmetic is not in dispute. It was, for a period, widely ignored, and '
           'a run of low years was reported in several places as the beginning of a long '
           'decline.',
           'The conveyor metaphor deserves part of the blame. A conveyor belt runs at a '
           'steady rate, can be slowed, and will eventually stop, and a reader holding that '
           'image will treat any fall as movement along a path towards a halt. The behaviour '
           'the array actually recorded has no such character. It is closer to the '
           'circulation of air in a large room, where a measurement at any instant sits a '
           'long way from the mean, and where a sequence of low readings is the ordinary '
           'consequence of variability rather than evidence that anything has changed.',
           'The appropriate conclusion is an unexciting one, and it is worth stating clearly '
           'rather than leaving to a reader to assemble. The instrumentation is excellent, '
           'the variability is now described, the longer record required for trend detection '
           'is accumulating at one year a year, and nothing can speed that up. Models '
           'predict a decline and the observations are not yet in a position to confirm or '
           'deny it, which is an ordinary situation in the physical sciences and an '
           'uncomfortable one in a field whose results are reported as news.'],
 'guided': [('What question was the array not long enough to answer?',
             ('What the average overturning is',
              'Whether there is a slow decline in the average',
              'How variable the flow is',
              'Where the strongest flows are'),
             1,
             'Detecting a slow decline against fluctuations of that amplitude needs a much '
             'longer record.'),
            ('What was reported during that period?',
             ('That the array had failed',
              'That a run of low years was the start of a long-term weakening',
              'That variability was small',
              'That the metaphor was wrong'),
             1,
             'A run of low years was reported in several places as the beginning of a '
             'long-term weakening.'),
            ('What does a conveyor belt image make a reader expect?',
             ('Movement without pattern',
              'A steady rate that can slow and eventually stop',
              'A reversal twice a year',
              'No change at all'),
             1,
             'Steady rate, can be slowed, will eventually stop, and that is the expectation '
             'the metaphor creates.')],
 'exam': [('What comparison does the passage prefer to the conveyor?',
           ('A river in flood',
            'The circulation of air in a large room',
            'A tide moving twice a day',
            'A pump with a switch'),
           1,
           'Closer to the circulation of air in a large room, where any instant differs '
           'considerably from the mean.'),
          ('The word amplitude in paragraph 1 is closest in meaning to',
           ('duration', 'size of the swing', 'direction', 'average value'),
           1,
           'Fluctuations of that amplitude means swings of that size, and the size is what '
           'makes a trend hard to see.'),
          ('What does the passage say about the arithmetic?',
           ('It is disputed',
            'It is not in dispute and was widely ignored',
            'It has never been done',
            'It supports the weakening claim'),
           1,
           'The arithmetic is not in dispute, and it was for a period widely ignored.'),
          ('What does the passage say cannot be accelerated?',
           ('The publication of results',
            'The growth of the longer record',
            'The improvement of instruments',
            'The modelling work'),
           1,
           'The record accumulates at one year a year, and nothing can speed that up.'),
          ('Why is the situation uncomfortable for this field in particular?',
           ('Its instruments are unreliable',
            'Its results are reported as news',
            'Its models are untested',
            'Its records are short everywhere'),
           1,
           'An ordinary situation in the physical sciences and an uncomfortable one in a '
           'field whose results are reported as news.')]}
UNIT['l4'] = {'sub': 'Measuring a moving sea',
 'caption': 'A lecture on designing an array',
 'board': ['Point measurement: useless here',
           'Array: one latitude, many depths',
           'Dense at the margins, sparse inside',
           'The design encodes the physics'],
 'skill': ('A lecture that justifies a design decision',
           ['The lecturer explains why a measurement was made one way rather than another, '
            'so the alternatives he rejects are part of the content.',
            'Note the cost he mentions, because every design argument in this field runs '
            'into it.',
            'A question about the spacing wants the physical reason, not the budget.']),
 'warm': [('Woman: Why will a single mooring not do?',
           ('The flow at one point says little about the total.',
            'A single mooring is too expensive.',
            'Yes, one will not do.',
            'At one latitude.'),
           0,
           'Why wants the physical reason, and it is that local velocity does not scale to a '
           'basin-wide transport.'),
          ('Woman: Where are the instruments concentrated?',
           ('Near the continental margins.',
            'Across the interior.',
            'Yes, they are concentrated.',
            'At the surface.'),
           0,
           'Where wants a place, and the margins are where the strong and variable flows '
           'are.'),
          ('Woman: What does he say the design encodes?',
           ('The physics of where the variability is.',
            'The budget available for instruments.',
            'Yes, it encodes something.',
            'Ten years of data.'),
           0,
           'He says the layout is a statement about the flow, which is the point he wants '
           'remembered.')],
 'script': [('Man',
             'Suppose I hand you a budget and ask you to measure the overturning. Your first '
             'instinct is to put a current meter in the water and read it, and that instinct '
             'is wrong in an instructive way. The flow you want is a transport across an '
             'entire basin, warm water going one way near the surface and cold water coming '
             'back underneath, and the velocity at any single point tells you almost nothing '
             'about the sum. You cannot integrate a quantity you have sampled once. So the '
             'design is an array: a line of moorings along one latitude, each with '
             'instruments at a dozen depths, recording continuously for years. Now the '
             'interesting decision, which is the spacing. You might expect even spacing, and '
             'you would be wasting instruments. The flow near the continental margins is '
             'fast and highly variable, so you need instruments close together there. The '
             'interior changes slowly with distance, so you can thin them out and lose very '
             'little. That asymmetry in the layout is not a compromise with the budget. It '
             'is a statement about where the variability lives, written in the position of '
             'the hardware, and if you understand the array you understand the physics. '
             'There is a cost, and it is the one every observational programme meets: a '
             'deployment of this kind takes a decade to produce a decade of data, and no '
             'amount of money shortens that.')],
 'items': [('Why is putting a single current meter in the water wrong?',
            ('The instrument is inaccurate',
             'A transport across a basin cannot be read from one point',
             'Moorings are cheaper',
             'The flow has no velocity'),
            1,
            'The velocity at any single point tells you almost nothing about the sum, and '
            'you cannot integrate from one sample.'),
           ('What does the array consist of?',
            ('One mooring at many depths',
             'A line of moorings at one latitude with instruments at many depths',
             'A ship repeating a transect',
             'A satellite'),
            1,
            'A line of moorings along one latitude, each with instruments at a dozen depths, '
            'recording continuously.'),
           ('Why would even spacing waste instruments?',
            ('The margins need fewer',
             'The interior changes slowly with distance',
             'The ocean is uniform',
             'Instruments fail at depth'),
            1,
            'The interior changes slowly, so instruments can be thinned there with little '
            'loss.'),
           ('What does the lecturer say the asymmetric layout is?',
            ('A compromise with the budget',
             'A statement about where the variability lives',
             'An accident of deployment',
             'A limitation of the hardware'),
            1,
            'Not a compromise with the budget but a statement about the physics, written in '
            'the position of the hardware.'),
           ('What cost does he say every observational programme meets?',
            ('Instruments fail in salt water',
             'A decade of data takes a decade',
             'Ships are expensive',
             'Data must be published quickly'),
            1,
            'A deployment of this kind takes a decade to produce a decade of data, and money '
            'does not shorten it.')]}
UNIT['l5'] = {'sub': 'Measuring a moving sea',
 'caption': 'A short talk on what a ten-year record can support',
 'board': ['Variability: large, now measured',
           'Trend: needs a much longer record',
           'Low run ≠ decline',
           'Say what the record can carry'],
 'skill': ('A talk about the limits of a dataset the speaker admires',
           ['The speaker praises the measurement and refuses one use of it, so note which is '
            'which.',
            'There is a number in here about how long a record would need to be. Write it '
            'down.',
            'A question about her advice wants a sentence she asks you to write, not a '
            'conclusion about the ocean.']),
 'warm': [('Man: What does she say the record established?',
           ('The size of the variability.',
            'A long-term decline.',
            'Yes, it established something.',
            'Ten years.'),
           0,
           'The decade established the variability, which is what the array was built to '
           'do.'),
          ('Man: What would detecting a trend require?',
           ('A record several times longer.',
            'Better instruments.',
            'Yes, it requires something.',
            'A new metaphor.'),
           0,
           'The length of the record is the limiting factor, not the quality of the '
           'instruments.'),
          ('Man: What does she ask you to write in an essay?',
           ('What the record can and cannot support.',
            'That the circulation is weakening.',
            'Yes, she asks for something.',
            'A description of the array.'),
           0,
           'Her advice is about a sentence that states the limits of the evidence, which is '
           'the transferable habit.')],
 'script': [('Woman',
             'I am an admirer of this dataset and I am going to spend ten minutes on what it '
             'cannot do, which is not a criticism of the people who built it. A decade of '
             'continuous measurement told us the overturning fluctuates by a factor of '
             'several within a single year. That is a genuine discovery and nobody expected '
             'it. Now ask the next question. Can the same record tell us whether the average '
             'is declining? Run the arithmetic: against swings that large you would need '
             'something like thirty to forty years of continuous data before a slow trend '
             'separated itself from the noise. We have had rather less than half of that. So '
             'when a run of low years appeared in the middle of the record, and was reported '
             'in three newspapers as the circulation slowing, the honest answer was that a '
             'run of low years is what large variability looks like. It is not evidence of a '
             'trend, and it is not evidence against one either. Here is the sentence I want '
             'in your essays, and I will accept it in any wording. State what the record is '
             'long enough to establish, and then state what it is not, in the same paragraph '
             'as the finding. That habit costs you two lines of writing, and it is the '
             'difference between a careful paper and a merely confident one.')],
 'items': [('What does the speaker call a genuine discovery?',
            ('A long-term decline',
             'That the overturning fluctuates by a factor of several in a year',
             'The design of the array',
             'The conveyor metaphor'),
            1,
            'Nobody expected the size of the within-year variability, and that is what the '
            'decade established.'),
           ('How long a record would a trend need, by her arithmetic?',
            ('Ten years', 'Thirty to forty years', 'A century', 'Five years'),
            1,
            'Something like thirty to forty years of continuous data before a slow trend '
            'separated itself from the noise.'),
           ('What does she say a run of low years is?',
            ('Evidence of a trend',
             'What large variability looks like',
             'Evidence against a trend',
             'An instrument failure'),
            1,
            'A run of low years is what large variability looks like, and she says it is '
            'evidence neither for nor against a trend.'),
           ('What does she ask students to put in the same paragraph as a finding?',
            ('The newspaper coverage',
             'What the record is long enough to establish and what it is not',
             'A description of the instruments',
             'The model expectation'),
            1,
            'State what the record can establish and then what it cannot, in the same '
            'paragraph, in any wording.'),
           ('What does she say that habit costs?',
            ('A great deal of extra work',
             'Two lines',
             'Nothing at all',
             'A whole paragraph'),
            1,
            'It costs two lines, and she calls it the difference between a careful paper and '
            'a confident one.')]}
UNIT['w4'] = {'sub': 'Measuring a moving sea',
 'skill': ('Relative clauses with a preposition in front',
           ['Academic English moves the preposition to the front of the clause: the latitude '
            'at which the array was placed.',
            'The preposition has to match the verb it belongs to, and that is where most '
            'errors happen.',
            'Which for things and whom for people, after a preposition, every time.']),
 'guided': [('You want to name the latitude the array sits on.',
             ['the latitude',
              'at which',
              'the array',
              'was',
              'deployed',
              'is',
              'chosen',
              'for',
              'the',
              'flow',
              'there'],
             'The latitude at which the array was deployed is chosen for the flow there.'),
            ('You want to describe the interval the sampling used.',
             ['the interval',
              'at which',
              'the cruises',
              'sampled',
              'the',
              'transect',
              'was',
              'too',
              'long',
              'by',
              'far'],
             'The interval at which the cruises sampled the transect was too long by far.'),
            ('You want to describe the depths the instruments record at.',
             ['the depths',
              'at which',
              'the instruments',
              'record',
              'are',
              'spaced',
              'to',
              'capture',
              'the',
              'vertical',
              'structure'],
             'The depths at which the instruments record are spaced to capture the vertical '
             'structure.')],
 'exam': [('You want to describe the conditions the metaphor fails under.',
           ['the conditions',
            'under which',
            'the conveyor',
            'image',
            'fails',
            'are',
            'exactly',
            'those',
            'the',
            'array',
            'recorded'],
           'The conditions under which the conveyor image fails are exactly those the array '
           'recorded.'),
          ('You want to describe the amplitude a trend must be seen against.',
           ['the amplitude',
            'against which',
            'a trend',
            'must',
            'be',
            'detected',
            'is',
            'larger',
            'than',
            'anybody',
            'expected'],
           'The amplitude against which a trend must be detected is larger than anybody '
           'expected.'),
          ('You want to describe the rate the record grows at.',
           ['the rate',
            'at which',
            'the record',
            'accumulates',
            'is',
            'one',
            'year',
            'a year',
            'and',
            'cannot',
            'change'],
           'The rate at which the record accumulates is one year a year and cannot change.'),
          ('You want to describe the margins the flow is fastest at.',
           ['the margins',
            'at which',
            'the flow',
            'is',
            'fastest',
            'are',
            'where',
            'the moorings',
            'are',
            'placed',
            'closest'],
           'The margins at which the flow is fastest are where the moorings are placed '
           'closest.'),
          ('You want to describe the basis a model expectation rests on.',
           ['the basis',
            'on which',
            'the model',
            'expects',
            'a decline',
            'is',
            'not',
            'the basis',
            'the',
            'observations',
            'use'],
           'The basis on which the model expects a decline is not the basis the observations '
           'use.')]}
UNIT['w5'] = {'sub': 'Measuring a moving sea',
 'prof': 'Dr Lindqvist',
 'question': 'A funding panel has one decision to make. It can extend the existing array for '
             'another fifteen years, which would make trend detection possible, or fund '
             'three new arrays elsewhere, which would measure variability in regions nobody '
             'has instrumented. Which is the better use of the money?',
 'posts': [('Priya',
            'w',
            'Extend the one we have. A fifteen-year extension converts a decade of expensive '
            'variability data into the only record capable of answering the question the '
            'programme was funded to answer. Three short records elsewhere will reproduce '
            'exactly the problem we already have, in triplicate.'),
           ('Omar',
            'm',
            'That assumes the question is settled as the right one. We learned from this '
            'array that we did not know what the variability was, and we only learned it by '
            'instrumenting somewhere new. Three arrays will find three more things nobody '
            'predicted, and prediction is not the strong suit of this field.')],
 'skill': ('A question about extending a record or widening coverage',
           ['Priya argues from the value of length; Omar from the history of surprises. Both '
            'are using the same passage.',
            'Use the arithmetic: the second passage is specific about how much longer a '
            'record needs to be, and that number is available to you.',
            'Say what you give up, and in a funding question that means saying what does not '
            'get measured.']),
 'starters': ['Omar is right that…, although that holds only while…',
              'The distinction I would draw is between… and…',
              'It is doubtful whether…, and the passage suggests…',
              'What follows is not… but…'],
 'model': ['Omar is right about the history and draws the wrong lesson from it. The surprise '
           'at this latitude was a discovery about variability, and the reason it was a '
           'discovery is that continuous measurement replaced snapshots. That argument '
           'supports continuous records wherever in the world they are placed, and it says '
           'nothing about whether a fourth decade here is worth less than a first decade '
           'somewhere else.',
           'Priya has the stronger case and understates the cost. A fifteen-year extension '
           'is not an improvement to an existing dataset. It is the only way the central '
           'question gets answered at all, because the record grows at one year a year and '
           'no amount of money shortens that.',
           'So the panel should extend, and should fund one new array rather than three, at '
           'the location where a surprise would most change the modelling. What is given up '
           'is coverage, and two regions stay uninstrumented for another fifteen years, '
           'which is a real loss and the right one. A field that keeps starting records and '
           'never finishes one will end up knowing the variability of every basin in the '
           'world and the trend of none of them, which is a comfortable place to publish '
           'from and a useless one to advise from.'],
 'model_words': 208}
UNIT['sp'] = list(UNIT['sp']) + [{'sub': 'Measuring a moving sea',
  'focus': 'fronting a preposition in a relative clause',
  'skill': ('The latitude at which the array was deployed',
            ['The preposition and which travel together at the front of the clause. Say them '
             'as one unit with no pause between.',
             'Stress the noun before the clause, not the preposition.',
             'In speech you may say the latitude the array was deployed at; in an exam '
             'answer, front it.']),
  'repeat': ['The latitude at which the array sits.',
             'The depths at which the instruments record.',
             'The rate at which the record accumulates.',
             'The conditions under which the metaphor fails.',
             'The amplitude against which a trend must be detected.',
             'The interval at which the cruises sampled was far too long.',
             'The basis on which a model expects a decline is not the basis the observations '
             'are able to use.'],
  'theme': 'measuring something that keeps changing',
  'qs': ['Tell me about something you have tried to measure that would not stay still. How '
         'did you handle it?',
         'Some people say that if a measurement is difficult, an estimate is good enough. '
         'How far would you agree?',
         'If you had to describe how often to measure something, what would you need to know '
         'first?',
         'Finally, describe a time a short run of results misled you.'],
  'model': [(2,
             'It depends entirely on what the estimate is for, and I would want to separate '
             'two cases. For a decision you can revise next week, an estimate is fine. For '
             'anything you will build on for ten years, a bad estimate is worse than an '
             'admitted gap, because nobody goes back to check it.'),
            (4,
             'Three good weeks of sales at a shop I worked in. We hired on the strength of '
             'them and the three weeks turned out to be the ordinary swing rather than the '
             'new level.')],
  'selfcheck': ['I kept the preposition and which together with no pause',
                'I used at least two of the unit’s field words',
                'I said what I would need to know before choosing an interval']},
 {'sub': 'Measuring a moving sea',
  'focus': 'stating what evidence can and cannot support, in one breath',
  'skill': ('The record establishes the variability and cannot settle the trend',
            ['One sentence, two halves, joined by and rather than but. But sounds like a '
             'retreat; and sounds like a description.',
             'Give both halves the same weight and the same speed. Rushing the second half '
             'is what makes a speaker sound evasive.',
             'Name the quantity in each half. Establishes the variability, not establishes '
             'something.']),
  'repeat': ['The record establishes the variability.',
             'It cannot settle the trend.',
             'A run of low years is what variability looks like.',
             'The arithmetic is not controversial and it was widely ignored.',
             'The instrumentation is excellent and the record is still too short.',
             'That is not evidence of a trend and not evidence against one.',
             'State what the record is long enough to establish, and then state what it is '
             'not, in the same paragraph as the finding.'],
  'theme': 'saying what you do not yet know',
  'qs': ['Tell me about a time you had to say you did not know something. How did you put '
         'it?',
         'Some people think admitting uncertainty makes an expert less useful. What do you '
         'think?',
         'How should a news report present a finding the evidence cannot yet support?',
         'Finally, describe a question in your own field that nobody can answer yet. What '
         'would answer it?'],
  'model': [(2,
             'Less comfortable and more useful, and I would put the difference like this. An '
             'expert who says the range is between these two numbers has told me something I '
             'can plan around. An expert who gives me one number and no range has told me '
             'less and sounded like more.'),
            (4,
             'Whether the thing I measure in a term is the thing that matters in five years. '
             'Nothing short of waiting five years answers it, which is an unsatisfying '
             'answer and the true one.')],
  'selfcheck': ['I joined the two halves with and, not but',
                'I gave both halves the same weight',
                'I named the quantity in each half']}]
