# -*- coding: utf-8 -*-
"""Unit 27 — Energy and Power Systems. Volume 3."""
from content._g import gaps

_GT, _GA = gaps(
    'Electricity is unusual among the things we buy because it cannot easily be kept. Almost '
    'everything else in an economy is produced, stored and then sold. Electricity is produced '
    'and consumed in the same inst{ant}, and the two must match continu{ously}, second by '
    'second, across an entire country. A grid operator is therefore not selling a product so '
    'much as managing a balance, and the whole architecture of the system follows from that '
    'single constraint. When people say a technology is cheap, they usually mean cheap to '
    'gener{ate}. Whether it is cheap to integ{rate} into a system that must balance every '
    'second is a different question, and often the more import{ant} one.')

_ET, _EA = gaps(
    'Wind and solar are intermittent, which is a pre{cise} word and not a criticism. It means '
    'the output depends on conditions nobody cont{rols}. On a still night a wind farm '
    'produces nothing, and the demand does not oblig{ingly} fall to match it. The system has '
    'to cover the gap, and how it does so decides the real cost of the technol{ogy}. Four '
    'options exist and all four are in use. Storage holds energy from a windy afternoon until '
    'a still evening, which works well over hours and remains expens{ive} over weeks. '
    'Interconnectors import from somewhere the wind is still blow{ing}, which works until the '
    'weather system is large enough to cover both countries. Flexible demand moves '
    'consumption to when the power is there, which is cheap and limited by how much '
    'consumption can actually be mo{ved}. And peaking plant, usually burning gas, simply '
    'fills the gap, which is reliable and defeats part of the purp{ose}. A serious plan uses '
    'all four and argues about the propor{tions}. What it cannot do is pretend the gap does '
    'not exist, and a great deal of public argument about energy consists of exactly that '
    'preten{ce}, from both directions at once.')

UNIT = dict(
    n=27, vol=3, level='B2',
    title='Energy and Power Systems',
    icons=['cpu', 'chart', 'globe'],
    subs=['Storing what cannot be stored', 'Grids and demand', 'The cost of transition'],
    grammar='Third and mixed conditionals',
    field='intermittent, grid, storage',
    opener_line='Energy is the subject where numbers and politics meet most violently, and '
                'where a single unstated assumption can change an answer by a factor of ten. '
                'This unit also teaches the structure English uses to argue about what would '
                'have happened: the conditional that looks back.',
    candos=[
        'I can follow an argument that compares four options against one problem.',
        'I can use the third conditional to argue about a decision already taken.',
        'I can mix time frames in a conditional without losing the sentence.',
        'I can read a cost claim and ask what it excludes.',
        'I can concede a point to one side and still reject its conclusion.',
        'I can write a proposal that anticipates the obvious objection.',
    ],

    acad=[
        ('intermittent', 'available only some of the time'),
        ('emissions', 'what is released into the air by burning'),
        ('grid', 'the network that carries electricity'),
        ('baseload', 'the steady demand that never goes away'),
        ('dispatch', 'to instruct a plant to produce now'),
        ('curtail', 'to shut down output that cannot be used'),
        ('storage', 'holding energy for later use'),
        ('turbine', 'the machine that converts movement into power'),
        ('inertia', 'the resistance of a system to sudden change'),
        ('decarbonise', 'to remove carbon from an activity'),
        ('retrofit', 'to add new equipment to an existing building'),
        ('tariff', 'the price structure charged to users'),
        ('surplus', 'more than is needed at that moment'),
        ('outage', 'a period when supply fails'),
        ('resilience', 'the ability to keep working under stress'),
        ('feedstock', 'the raw material fed into a process'),
        ('interconnector', 'a cable linking two countries’ grids'),
        ('peaking', 'generation used only at times of highest demand'),
    ],
    family=('decarbonise', [
        ('decarbonisation', 'noun', 'the decarbonisation of heating'),
        ('decarbonised', 'adjective', 'a decarbonised grid'),
        ('carbon-intensive', 'adjective', 'a carbon-intensive process'),
    ]),
    collocs=[
        ('meet demand', 'to supply what is needed'),
        ('come online', 'to start operating'),
        ('at scale', 'in quantities that matter nationally'),
        ('run the numbers', 'to do the arithmetic properly'),
        ('a step change', 'a sudden large improvement'),
        ('lock in', 'to make a choice hard to reverse'),
        ('the headline figure', 'the number quoted in public'),
        ('all other things being equal', 'if nothing else changed'),
        ('at the margin', 'for the next unit, not the average'),
        ('phase out', 'to withdraw gradually'),
    ],
    stance=[
        ('is beyond dispute', 'nobody serious disagrees'),
        ('in principle', 'true in theory; practice may differ'),
        ('is projected to', 'a forecast, not a measurement'),
        ('is often overstated', 'the writer thinks it is exaggerated'),
        ('rests on an assumption', 'the writer is flagging a weak point'),
    ],
    nuance=[
        ('power / energy', 'the rate / the total amount'),
        ('capacity / output', 'what it could make / what it did make'),
        ('cost / price', 'what it takes to make / what is charged'),
    ],
    vocab_talk=[
        'Why can electricity not simply be stored like oil?',
        'Describe what happens on a still, cold evening in winter.',
        'Is it fair to charge more for power at peak times? Why?',
        'Name one energy decision that is hard to reverse.',
    ],
    again=['load factor', 'levelised cost', 'firm capacity', 'grid connection',
           'smart meter', 'demand response', 'spinning reserve', 'carbon price'],

    r1=dict(
        sub='Storing what cannot be stored',
        skill=('Suffixes on technical adjectives and adverbs',
               ['Technical prose is dense in adjectives ending -able, -ive, -ent and adverbs '
                'ending -ly.',
                'If the gap sits between to and a noun, it is almost always an adjective.',
                'If it ends a clause after a verb, it is an adverb.']),
        guided_text=_GT, guided=_GA,
        guided_hint='inst{ant} is instant — it follows the same and names a moment, so it is '
                    'a noun.'.replace('{', '').replace('}', ''),
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Grids and demand',
        skill=('Reading two cost claims that use different bases',
               ['Two documents can give different costs for the same thing and both be '
                'correct, because they are measuring different quantities.',
                'Find the basis: per unit generated, per unit delivered, including or '
                'excluding the system cost.',
                'The question is almost never which number is right. It is which number '
                'answers the question being asked.']),
        docs=[
            ('notice', 'Northgate Campus Energy · proposal for a rooftop solar array', [
                '# The proposal',
                'A 1.2 MW array across six roofs, generating about 1,100 MWh a year.',
                '# Costs as presented',
                '* Capital cost £1.1m, grant funded to 40 per cent.',
                '* Generation cost about 5p per kWh over 25 years.',
                '* Campus currently pays 21p per kWh.',
                '# What the figures assume',
                '* That all generation is used on site. Export earns 4p, not 21p.',
                '* No allowance for inverter replacement, expected around year 12.',
            ], 'notice'),
            ('email', 'estates@northgate.edu', 'finance-committee@northgate.edu',
             '08/05/2027', 'Solar proposal — the 5p figure needs a caveat', [
                 'Dear Committee,',
                 '',
                 'I support this proposal and I want it to survive scrutiny, which means',
                 'the 5p figure needs explaining before somebody else explains it for us.',
                 '',
                 '5p per kWh is the generation cost, and it is right. But the saving is 21p',
                 'only for power we use as it is produced. Campus demand in August is a',
                 'third of term-time demand, and August is when the array produces most.',
                 'My estimate is that 30 to 35 per cent of annual output will be exported',
                 'at 4p rather than displacing power at 21p.',
                 '',
                 'Rerunning it on that basis, the payback moves from about 7 years to',
                 'roughly 11. That is still a good project. It is a different project from',
                 'the one in the paper, and the committee should be told which one it is',
                 'approving.',
                 '',
                 'Estates',
             ]),
        ],
        guided=[
            ('How much does the campus currently pay per kWh?',
             ('4p', '5p', '11p', '21p'), 3,
             'The notice gives 21p as the current purchase price, against a 5p generation '
             'cost for the array.'),
            ('What does the array earn for exported power?',
             ('4p', '5p', '21p', 'Nothing'), 0,
             'Export earns 4p, which is the figure the whole of the Estates objection turns '
             'on.'),
            ('What is not included in the capital cost?',
             ('The grant', 'Inverter replacement', 'The roofs', 'Grid connection'), 1,
             'The notice lists it under assumptions: no allowance for inverter replacement '
             'around year 12.'),
            ('What proportion of output does Estates expect to be exported?',
             ('About 5 per cent', 'About 20 per cent', '30 to 35 per cent',
              'All of it'), 2,
             'That is the estimate given, and it is what moves the payback from seven years '
             'to about eleven.'),
        ],
        exam=[
            ('Why does Estates say the 5p figure "is right"?',
             ('It includes export', 'It correctly states the cost of generating',
              'It was independently audited', 'It includes the grant'), 1,
             'The objection is not that the number is wrong but that it answers a different '
             'question from the one the committee is asking.'),
            ('What is the mismatch Estates identifies?',
             ('Between capital cost and grant', 'Between when power is produced and when it is used',
              'Between two different roofs', 'Between export and import tariffs'), 1,
             'August output is highest and August demand is lowest, so a third of the '
             'generation cannot displace purchased power.'),
            ('What happens to the payback period on the revised basis?',
             ('It falls to 5 years', 'It stays at 7 years', 'It rises to about 11 years',
              'It cannot be calculated'), 2,
             'Estates gives both figures explicitly and still describes the result as a good '
             'project.'),
            ('What is Estates’ overall position on the proposal?',
             ('Opposed', 'Supportive, but wanting the basis corrected',
              'Neutral', 'Supportive only if the grant increases'), 1,
             'I support this proposal and I want it to survive scrutiny is the opening line '
             'and governs everything after it.'),
            ('What does "before somebody else explains it for us" imply?',
             ('The paper is confidential', 'A critic will find the weakness if they do not',
              'Another department is bidding', 'The grant is at risk'), 1,
             'It is an argument about who gets to frame the caveat, not about whether the '
             'caveat is real.'),
            ('Which assumption in the notice does the email challenge?',
             ('The 25-year lifetime', 'That all generation is used on site',
              'The grant percentage', 'The roof area'), 1,
             'That assumption is listed in the notice itself, and the email supplies the '
             'figure that shows it does not hold.'),
            ('What does Estates mean by "a different project"?',
             ('A different array', 'The same array with a materially different return',
              'A project on different roofs', 'A project for a different committee'), 1,
             'Nothing physical changes; the financial case the committee would be approving '
             'is not the one on the page.'),
        ],
    ),

    r3=dict(
        sub='The cost of transition',
        title='The Number That Is Always Missing',
        words=284,
        paras=[
            'The cost of generating electricity from wind has fallen by roughly nine tenths '
            'in two decades. This is beyond dispute and it is the figure that appears in '
            'almost every public discussion. Its weight in that discussion is often overstated, '
            'because on its own it is close to useless for '
            'deciding what to build, because it prices a unit of electricity at the moment it '
            'happens to be produced rather than at the moment somebody wants it.',

            'Two systems can generate the same annual total at the same cost per unit and '
            'behave entirely differently. One produces steadily; one produces in bursts '
            'determined by weather. The second requires something else — storage, imports, '
            'flexible demand, or a gas plant kept warm — and that something else has a cost '
            'which belongs to the second system and is conventionally reported separately or '
            'not at all. The result is that the cheap option and the cheap system are '
            'different things, and public argument routinely moves between them without '
            'noticing.',

            'This cuts in both directions, which is why the point is worth making carefully. '
            'Those who dislike renewables use the system cost to imply that the headline fall '
            'in generating cost was illusory, and it was not. Those who favour them quote the '
            'generating cost as though integration were free, and it is not. The honest '
            'position is that the fall is real, the extra cost is real, and the second is '
            'projected to grow as the share rises, slowly at first and then faster beyond '
            'perhaps seventy per cent. Nobody can say exactly where the curve bends, and a '
            'confident number from either side rests on an assumption that is doing more work '
            'than the data.',
        ],
        skill=('Reading an argument that attacks both sides',
               ['A B2 passage sometimes criticises two opposed positions for the same '
                'underlying error.',
                'Expect a sentence like: this cuts in both directions.',
                'An item will ask what the two sides have in common, and the answer is the '
                'error, not the conclusion.']),
        guided=[
            ('What has fallen by about nine tenths?',
             ('The total cost of electricity', 'The cost of generating electricity from wind',
              'The price paid by consumers', 'The cost of storage'), 1,
             'The first sentence is specific about which cost, and the rest of the passage '
             'depends on that precision.'),
            ('Why is the generating cost "close to useless" on its own?',
             ('It is inaccurate', 'It prices power when produced, not when wanted',
              'It is out of date', 'It excludes the grant'), 1,
             'That mismatch between production and demand is the whole basis of the system '
             'cost the author goes on to describe.'),
            ('What does the second system require?',
             ('More turbines', 'Storage, imports, flexible demand or peaking plant',
              'A higher tariff', 'A longer lifetime'), 1,
             'Those four are listed as the ways of covering a gap that the steady system '
             'does not create.'),
            ('The word "illusory" in the third paragraph means',
             ('expensive', 'not real', 'temporary', 'disputed'), 1,
             'The critics imply the fall was not genuine, and the author replies that it '
             'was.'),
        ],
        exam=[
            ('What error do both sides make, according to the author?',
             ('Using out-of-date figures', 'Moving between the cheap option and the cheap system',
              'Ignoring emissions', 'Overstating demand'), 1,
             'That confusion is named at the end of the second paragraph and then applied to '
             'each side in turn.'),
            ('What does the author concede to opponents of renewables?',
             ('That the generating cost fall was illusory', 'That integration is not free',
              'That wind is unreliable', 'That storage is impossible'), 1,
             'The author grants the extra cost is real while rejecting the claim that the '
             'headline fall was not.'),
            ('What does the author concede to supporters of renewables?',
             ('That integration is free', 'That the fall in generating cost is real',
              'That the curve never bends', 'That seventy per cent is achievable'), 1,
             'And it was not is addressed to the critics, granting the supporters their '
             'central fact.'),
            ('What is "projected to grow"?',
             ('The generating cost', 'The extra system cost', 'Demand', 'The grant'), 1,
             'The projection applies to the integration cost as the renewable share rises, '
             'which is the asymmetry the author is pointing at.'),
            ('What does the author say about where the curve bends?',
             ('It bends at seventy per cent', 'Nobody can say exactly',
              'It does not bend', 'It bends earlier than claimed'), 1,
             'Perhaps seventy per cent is offered with a hedge and then explicitly '
             'disclaimed as unknowable.'),
            ('What does "doing more work than the data" mean?',
             ('The calculation is wrong', 'The assumption carries the conclusion rather than the evidence',
              'The data are missing', 'The analysis took a long time'), 1,
             'A confident number from either side rests on an assumption, and the phrase '
             'says the assumption is bearing the weight.'),
            ('Why does the author say the point is "worth making carefully"?',
             ('It is technically difficult', 'Because it could be misused by either side',
              'Because the data are poor', 'Because it is widely known'), 1,
             'It cuts in both directions immediately precedes it, and the paragraph then '
             'takes care to deny each side its preferred misreading.'),
            ('All of the following are named as ways of covering a gap EXCEPT:',
             ('Storage', 'Interconnectors', 'Flexible demand', 'Building more turbines'), 3,
             'Four options are listed and more generation is not among them, because it does '
             'not help on a still night.'),
            ('Which finding would most strengthen the author’s position?',
             ('That generating costs have fallen further',
              'That system costs rise sharply above a measurable share of renewables',
              'That demand is falling',
              'That storage costs are stable'), 1,
             'The author claims the second cost grows with share and that nobody knows where '
             'it accelerates, so measuring that point supports the whole argument.'),
        ],
    ),

    l1=dict(
        sub='Storing what cannot be stored',
        caption='Two engineering students on the way to a lab',
        skill=('Hearing a hypothetical about the past',
               ['Third conditionals are common in technical talk: if we had done X, Y would '
                'have happened.',
                'Listen for the contraction — we’d have, it would’ve — which is where the '
                'tense lives.',
                'Items ask what actually happened, which is always the opposite of the '
                'conditional.']),
        warm=[
            ('Woman: Could the battery have covered the whole evening?',
             ('Not if the afternoon had been cloudy.', 'Yes, it is a big battery.',
              'About four hours.', 'It was installed last year.'), 0,
             'A could-have question about a past possibility, answered with the condition '
             'that would have defeated it.'),
            ('Man: Why did they curtail the wind farm?',
             ('There was nowhere for the power to go.', 'About twenty turbines.',
              'Yes, they did.', 'In February.'), 0,
             'A why question wants the reason, and the answer gives the grid constraint '
             'rather than a fact about the farm.'),
            ('Woman: Would a bigger cable have helped?',
             ('It would have, if the neighbours had had spare demand.', 'Yes, cables help.',
              'About forty kilometres.', 'It is a new cable.'), 0,
             'A would-have question invites a third conditional, and the answer supplies the '
             'condition it depends on.'),
        ],
        script=[
            ('Woman', 'Did you see the figures from last Tuesday? They curtailed about four '
                      'hundred megawatt hours.'),
            ('Man', 'Just threw it away?'),
            ('Woman', 'Paid the operators to stop generating, which is worse than throwing it '
                      'away. There was nowhere for it to go.'),
            ('Man', 'Why not store it?'),
            ('Woman', 'The battery was already full by two in the afternoon. If it had been '
                      'twice the size, it would have taken maybe half of the rest.'),
            ('Man', 'So build a bigger battery.'),
            ('Woman', 'For four hours a year? The economics are brutal. A battery earns money '
                      'by cycling — charging and discharging, day in, day out. One that only '
                      'earns on the handful of days when there is a surplus this large does '
                      'not pay for itself.'),
            ('Man', 'What about the interconnector?'),
            ('Woman', 'Better question. It was running at full capacity in the wrong '
                      'direction for part of the day, because the price signal lagged. If the '
                      'market had cleared an hour earlier, a good chunk of that curtailment '
                      'would not have happened at all, and that fix costs nothing physical.'),
            ('Man', 'So it is a software problem.'),
            ('Woman', 'Partly. Which is the irritating thing — everybody wants to talk about '
                      'batteries and half of this was a scheduling rule written in 2004.'),
        ],
        items=[
            ('What happened last Tuesday?',
             ('A power cut', 'About 400 MWh of wind was curtailed',
              'A battery failed', 'An interconnector broke'), 1,
             'She opens with the figure and then explains that operators were paid to stop '
             'generating.'),
            ('Why does the woman say curtailment is "worse than throwing it away"?',
             ('The power is wasted twice', 'The operators are paid to stop',
              'It damages the turbines', 'It raises emissions'), 1,
             'Money leaves the system as well as the energy, which is the distinction she '
             'draws.'),
            ('Why was the battery no help?',
             ('It had failed', 'It was already full by the afternoon',
              'It was too far away', 'It was being serviced'), 1,
             'Full by two in the afternoon, which is why she then moves to the hypothetical '
             'about doubling its size.'),
            ('What is her objection to simply building a bigger battery?',
             ('It is technically impossible', 'It would only earn on a handful of days',
              'There is no space', 'The grid cannot take it'), 1,
             'A battery earns by cycling, and one sized for rare surpluses does not pay for '
             'itself.'),
            ('What does she say about the interconnector?',
             ('It was broken', 'It was running the wrong way because the price signal lagged',
              'It was too small', 'It was fully used correctly'), 1,
             'Full capacity in the wrong direction for part of the day, caused by the timing '
             'of the market.'),
            ('What would have reduced the curtailment at no physical cost?',
             ('A larger battery', 'The market clearing an hour earlier',
              'More turbines', 'A second interconnector'), 1,
             'She says a good chunk would not have happened and that the fix costs nothing '
             'physical.'),
            ('What does the woman find "irritating"?',
             ('The operators were paid', 'Attention goes to batteries when half the problem is a scheduling rule',
              'The battery was too small', 'Nobody reads the figures'), 1,
             'Her closing line contrasts what everybody wants to talk about with a rule '
             'written in 2004.'),
        ],
    ),

    l2=dict(
        sub='Grids and demand',
        caption='An announcement about a campus energy trial',
        poster=['Flexible power trial · halls of residence',
                'Opt in by 30 September',
                'Cheaper rate 11pm to 6am, higher 5pm to 7pm'],
        skill=('Hearing an offer and its catch together',
               ['An announcement offering a benefit nearly always attaches a condition. '
                'Both get tested.',
                'Listen for the turn: in return, the trade-off is, what we ask.',
                'The catch is usually stated once and quickly.']),
        warm=[
            ('Man: Is the cheaper rate automatic?',
             ('Only if you opt in before the thirtieth.', 'Yes, for everyone.',
              'About 11pm.', 'It is cheaper at night.'), 0,
             'A yes/no about eligibility is answered with the condition and its deadline.'),
            ('Woman: What is the catch?',
             ('Power costs more between five and seven.', 'There is no catch.',
              'About eight pence.', 'Yes, there is one.'), 0,
             'A direct question about the downside deserves the downside, stated plainly.'),
            ('Man: Can I leave the trial if it does not suit me?',
             ('At the end of any month, with a week’s notice.', 'Yes, it is a trial.',
              'About two hundred rooms.', 'It runs for a year.'), 0,
             'A can-I-leave question wants the exit terms rather than reassurance.'),
        ],
        script=[
            ('Woman', 'A note about the flexible power trial in halls, because the deadline '
                      'is Friday and I would rather you decided than drifted. Here is the '
                      'offer. If you opt in, electricity costs you about a third less between '
                      'eleven at night and six in the morning. Over a year that is real money '
                      'for most people. Here is the catch, and I am going to state it plainly '
                      'rather than in a footnote: between five and seven in the evening, it '
                      'costs about half as much again. That is the whole point of the trial. '
                      'The grid is under most strain at exactly the hour everybody cooks, and '
                      'we are testing whether a price signal moves behaviour. Now, whether '
                      'this saves you money depends entirely on what you can actually shift. '
                      'Laundry and dishwashers, yes. Cooking dinner, mostly no. If you are out '
                      'all day and cook at six every evening, you will probably lose a little. '
                      'Two more things. You can leave at the end of any month with a week’s '
                      'notice, and your room will not be colder — heating is not on the trial '
                      'at all. I mention that because it is the question I have been asked '
                      'eleven times.'),
        ],
        items=[
            ('How much cheaper is the overnight rate?',
             ('About a tenth less', 'About a third less', 'About half as much again',
              'It is free'), 1,
             'A third less between eleven and six is the benefit, against half as much again '
             'in the evening peak.'),
            ('When is electricity most expensive on the trial?',
             ('11pm to 6am', '5pm to 7pm', 'All day', 'At weekends'), 1,
             'That is the peak window, and the speaker calls it the hour everybody cooks.'),
            ('What is the trial testing?',
             ('Whether students save money', 'Whether a price signal moves behaviour',
              'Whether heating can be reduced', 'How much power halls use'), 1,
             'She states the purpose directly after naming the catch, which is why the catch '
             'is the whole point.'),
            ('Who is likely to lose money?',
             ('Anyone who does laundry at night',
              'Someone out all day who cooks at six every evening',
              'Anyone with a dishwasher', 'Students in catered halls'), 1,
             'She gives that case as the explicit example of when the trial does not pay.'),
            ('What is not included in the trial?',
             ('Laundry', 'Cooking', 'Heating', 'Lighting'), 2,
             'Heating is not on the trial at all, and she volunteers it because of how often '
             'she has been asked.'),
            ('Why does the speaker mention being asked eleven times?',
             ('To complain', 'To explain why she is answering an unasked question',
              'To show the trial is popular', 'To correct an earlier announcement'), 1,
             'It justifies raising the heating point without anyone in this audience having '
             'raised it.'),
        ],
    ),

    l3=dict(
        sub='The cost of transition',
        caption='A lecture on system cost',
        board=['Cheap option ≠ cheap system',
               'Four ways to cover a gap',
               'System cost rises with share',
               'Both sides quote one number'],
        skill=('Following a talk that refuses both popular answers',
               ['A lecturer taking this line will give each side its strongest point before '
                'rejecting its conclusion.',
                'Expect two concessions, close together, and then the real argument.',
                'The item about the speaker’s own position usually comes last.']),
        warm=[
            ('Woman: Has wind got cheaper?',
             ('Dramatically, and that is not in dispute.', 'Yes, slightly.',
              'About twenty turbines.', 'In the last decade.'), 0,
             'A yes/no question answered with the strength of the claim and a signal that no '
             'argument follows about it.'),
            ('Man: So cheaper generation means cheaper electricity?',
             ('Not by itself — it depends on the system around it.', 'Yes, obviously.',
              'About five pence.', 'Electricity is expensive.'), 0,
             'A checking question that assumes the inference, corrected by naming what else '
             'it depends on.'),
            ('Woman: What do you mean by system cost?',
             ('Everything you need to cover a still evening.', 'The cost of the turbines.',
              'About thirty per cent.', 'It is a technical term.'), 0,
             'A definition question answered with the thing itself rather than a label.'),
        ],
        script=[
            ('Man', 'Two claims are made constantly in public about energy, and they are both '
                    'true and neither answers the question. Claim one: the cost of generating '
                    'electricity from wind has collapsed. That is beyond dispute. It has '
                    'fallen by something like ninety per cent in twenty years and anybody '
                    'telling you otherwise is not reading the data. Claim two: a system that '
                    'runs on weather needs something else behind it, and that something else '
                    'is not free. Also true. Now watch what each side does with these. The '
                    'side that dislikes renewables takes claim two and uses it to suggest '
                    'that claim one was some kind of accounting trick. It was not. The fall '
                    'is real and it is one of the fastest cost reductions in industrial '
                    'history. The other side takes claim one and quotes it as though '
                    'integration were free, which in principle it never has been and at high '
                    'shares increasingly is not. Here is my own position, for what it is '
                    'worth. The interesting number is not the cost of a unit of wind. It is '
                    'the cost of the last unit you add at a seventy or eighty per cent share, '
                    'because that is where the system cost stops being a rounding error. And '
                    'the honest answer about that number is that it is projected rather than '
                    'measured, because nobody has run a grid at that share for long enough to '
                    'find out.'),
        ],
        items=[
            ('What does the speaker say about the fall in wind generating cost?',
             ('It has been exaggerated', 'It is real and beyond dispute',
              'It has stopped', 'It applies only offshore'), 1,
             'He calls it one of the fastest cost reductions in industrial history and says '
             'anyone denying it is not reading the data.'),
            ('What does the anti-renewables side do with claim two?',
             ('Ignores it', 'Uses it to suggest claim one was an accounting trick',
              'Overstates the fall', 'Applies it only to solar'), 1,
             'That is the misuse he names, and he rejects it immediately.'),
            ('What does the pro-renewables side do with claim one?',
             ('Denies it', 'Quotes it as though integration were free',
              'Applies it to storage', 'Understates it'), 1,
             'He says integration never has been free and increasingly is not at high '
             'shares.'),
            ('What does the speaker call the interesting number?',
             ('The average cost of wind', 'The cost of the last unit added at a high share',
              'The total system cost today', 'The price paid by consumers'), 1,
             'That is where the system cost stops being a rounding error, which is his '
             'stated reason.'),
            ('Why is that number uncertain?',
             ('The data are secret', 'Nobody has run a grid at that share long enough',
              'It varies by country', 'It changes every year'), 1,
             'He ends on exactly that: projected rather than measured, for lack of '
             'experience at the relevant share.'),
            ('How does the speaker mark his own view?',
             ('As established fact', 'As his own position, for what it is worth',
              'As the consensus', 'As a prediction'), 1,
             'He changes register explicitly before giving it, having spent the first half '
             'reporting other people’s claims.'),
            ('What is the structure of the talk?',
             ('A history followed by a forecast',
              'Two true claims, two misuses, then the speaker’s own question',
              'A problem and four solutions',
              'A comparison of two countries'), 1,
             'He states both claims, shows what each side does with them, and then names the '
             'number he thinks actually matters.'),
        ],
    ),

    sp=[
        dict(
            sub='Storing what cannot be stored',
            focus='contracted third conditionals at speed',
            skill=('Repeating would have and had been',
                   ['Would have contracts to would’ve and in fast speech to woulda. You '
                    'must produce something between the two.',
                    'If it had been contracts to if it’d been. The d is the whole tense.',
                    'Never stress had or have in these. Stress the main verb.']),
            repeat=[
                'The battery filled up early.',
                'There was nowhere for the power to go.',
                'They paid the operators to stop.',
                'If the battery had been bigger, it would have taken more.',
                'The curtailment would not have happened if the market had cleared earlier.',
                'Had the interconnector been running the other way, most of that energy would have been exported.',
                'If anyone had looked at the scheduling rule before building the battery, we would have solved half the problem for nothing.',
            ],
            theme='decisions, hindsight and infrastructure',
            qs=[
                'Thanks for taking part. To begin, is there a decision in your own life you '
                'would make differently with hindsight?',
                'Large infrastructure decisions are very hard to reverse. Does that make '
                'people too cautious, or not cautious enough? Why?',
                'Now your opinion. Should governments invest in technology that may be '
                'obsolete before it is finished? Why or why not?',
                'A final question. When a public project goes wrong, is it useful to ask who '
                'was responsible, or does that make the next decision worse?',
            ],
            model=[(2, 'Not cautious enough, in my experience, but in a particular way. '
                       'People are careful about the money and careless about whether the '
                       'thing will still be the right answer in fifteen years.'),
                   (4, 'It is useful if the question is what the process missed, and harmful '
                       'if it is who to blame. Blame makes the next set of people choose the '
                       'option that is easiest to defend.')],
            selfcheck=['I contracted would have and had been.',
                       'I stressed the main verb, not the auxiliary.',
                       'I kept the whole conditional in one breath.'],
        ),
        dict(
            sub='Grids and demand',
            focus='stating a condition and its consequence in one breath',
            skill=('Explaining a trade-off to somebody deciding',
                   ['When you explain an offer, state the benefit, the cost, and who it '
                    'suits — in that order.',
                    'The third part is what people actually need and what most speakers '
                    'leave out.',
                    'Use a concrete case: if you cook at six every evening, you will lose a '
                    'little.']),
            repeat=[
                'Power is cheaper overnight.',
                'It costs more in the early evening.',
                'The trial is testing whether price moves behaviour.',
                'Laundry can be moved; cooking mostly cannot.',
                'If you are out all day and cook at six, you will probably lose a little.',
                'Whether this saves you money depends entirely on what you are able to shift.',
                'You can leave at the end of any month with a week’s notice, and the heating is not part of the trial at all.',
            ],
            theme='prices, habits and changing behaviour',
            qs=[
                'Thank you for joining me. First, do you know when electricity is most '
                'expensive where you live? Has it ever changed what you do?',
                'Charging more at busy times is common for trains and electricity. Is it fair '
                'to people who cannot change when they travel or cook? Why?',
                'Now an opinion question. Should prices be used to change behaviour, or should '
                'governments simply make rules? Why?',
                'One final question. If a measure saves energy overall but costs poorer people '
                'more, should it still be introduced? Why or why not?',
            ],
            model=[(2, 'It is fair only if the alternative exists. If you can move your '
                       'laundry, a price signal is information. If you work shifts and cannot '
                       'move anything, it is just a higher bill.'),
                   (4, 'Only with the money recycled. A charge that falls hardest on people '
                       'with least flexibility is defensible if the revenue comes back to '
                       'them, and indefensible if it does not.')],
            selfcheck=['I gave benefit, cost and who it suits.',
                       'I used a concrete case.',
                       'I kept the condition and consequence together.'],
        ),
        dict(
            sub='The cost of transition',
            focus='rejecting a conclusion while granting the premise',
            skill=('Granting a fact and refusing the inference',
                   ['The move: that is true, and it does not follow. Both halves need equal '
                    'weight.',
                    'Stress follow. The listener must hear that you are attacking the step, '
                    'not the fact.',
                    'Then say what does follow, or the move sounds merely negative.']),
            repeat=[
                'Wind has become much cheaper.',
                'That is not in dispute.',
                'A weather-driven system needs something behind it.',
                'That is also true, and it does not make the first claim a trick.',
                'The interesting number is the cost of the last unit, not the average one.',
                'Nobody has run a grid at eighty per cent for long enough to measure what happens.',
                'A confident figure from either side is resting on an assumption that is doing more work than the evidence behind it.',
            ],
            theme='argument, evidence and public debate',
            qs=[
                'Thank you for your time. To start, is there a public argument you have '
                'changed your mind about?',
                'In energy debates both sides often quote true facts and reach opposite '
                'conclusions. How should a reader deal with that?',
                'Now your opinion. Should experts state publicly when they do not know '
                'something, even if it helps the side they disagree with? Why?',
                'And finally. If a policy is right but cannot be explained simply, should a '
                'government pursue it anyway? Why or why not?',
            ],
            model=[(2, 'By asking what each number is a number of. In this case one side '
                       'quotes the cost of generating and the other the cost of the system, '
                       'and once you see that the disagreement mostly dissolves.'),
                   (3, 'Yes, and especially then. An expert who only admits uncertainty when '
                       'it is convenient has told you nothing about the uncertainty and a '
                       'great deal about themselves.')],
            selfcheck=['I granted the fact clearly before refusing the inference.',
                       'I stressed the step I was attacking.',
                       'I said what does follow.'],
        ),
    ],

    w1=dict(
        sub='Questions about decisions',
        skill=('Build a Sentence with a conditional inside',
               ['Some items build a question around a third conditional: do you know '
                'whether it would have helped.',
                'Would have stays together and sits after the subject inside the clause.',
                'The clause keeps statement order however long it gets.']),
        guided=[
            ('They paid the operators to stop generating.',
             ['whether', 'know', 'do', 'you', 'a bigger battery', 'would', 'have', 'helped', 'actually'],
             'Do you know whether a bigger battery would have actually helped?'),
            ('The market cleared an hour late that day.',
             ['us', 'told', 'nobody', 'how much', 'that', 'cost', 'in the end', 'actually', 'had'],
             'Nobody told us how much that had actually cost in the end.'),
            ('My supervisor asked about the scheduling rule.',
             ['she', 'when', 'to know', 'wanted', 'it', 'had', 'been', 'written', 'originally'],
             'She wanted to know when it had originally been written.'),
        ],
        exam=[
            ('The array will export about a third of its output.',
             ['do', 'whether', 'know', 'you', 'that', 'was', 'in the paper', 'at all', 'mentioned'],
             'Do you know whether that was mentioned in the paper at all?'),
            ('The trial raises the price between five and seven.',
             ['to know', 'nobody', 'seems', 'how many', 'people', 'have', 'opted in', 'actually', 'so far'],
             'Nobody seems to know how many people have actually opted in so far.'),
            ('The curtailment lasted about four hours.',
             ['explain', 'can', 'anybody', 'why', 'nobody', 'the rule', 'changed', 'earlier', 'to me'],
             'Can anybody explain to me why nobody changed the rule earlier?'),
            ('The payback moves from seven years to eleven.',
             ['know', 'does', 'anybody', 'which', 'figure', 'the committee', 'was', 'shown', 'actually'],
             'Does anybody know which figure the committee was actually shown?'),
            ('Heating is not part of the trial.',
             ['told', 'she', 'us', 'why', 'she', 'was', 'that', 'mentioning', 'at all'],
             'She told us why she was mentioning that at all.'),
            ('The last unit added is the expensive one.',
             ['at which', 'the share', 'the cost', 'begins', 'to rise', 'is', 'not', 'known', 'precisely'],
             'The share at which the cost begins to rise is not precisely known.'),
            ('The interconnector ran the wrong way for part of the day.',
             ['whether', 'tell', 'can', 'me', 'you', 'that', 'has', 'been', 'fixed'],
             'Can you tell me whether that has been fixed?'),
        ],
    ),

    w2=dict(
        sub='Grids and demand',
        to='estates@northgate.edu',
        date='15/05/2027',
        subject='Flexible power trial — a problem with the evening peak',
        scenario=[
            'You live in halls and joined the flexible power trial. The cheap overnight rate '
            'works well, but the shared kitchen has one oven for twelve people, so everyone '
            'has to cook between five and seven whether they want to or not. Your bill has '
            'gone up. You think the trial is a good idea badly implemented.',
            'Write an email to Estates.',
        ],
        bullets=['Say what is working and what is not.',
                 'Explain why you cannot shift the activity that costs most.',
                 'Propose something that would let the trial work.'],
        skill=('Reporting that a scheme does not fit your situation',
               ['The strongest version is not I am worse off but here is the group your '
                'design did not anticipate.',
                'Give the mechanism, not the outcome. One oven for twelve people explains '
                'itself; my bill went up does not.',
                'Propose a fix the organisation can actually implement.']),
        model=[
            'Dear Estates,',
            '',
            'I opted into the flexible power trial in October and I want to report a problem '
            'with it, although the overnight part works exactly as described.',
            '',
            'The difficulty is the evening peak. Block C has one oven shared between twelve '
            'rooms. Between five and seven it is in continuous use, and the people cooking at '
            'half past six are not choosing that time — they are third in a queue that '
            'started at five. The trial assumes cooking is a fixed habit that a price signal '
            'cannot move. In our case it is a fixed queue, which is a different problem and '
            'arguably an easier one.',
            '',
            'My own bill is up by about four pounds a month, which I mention only as evidence '
            'rather than as a complaint. The point is that the design treats twelve people as '
            'twelve independent decisions when they are in fact one shared constraint.',
            '',
            'Two things would help. A second oven in Block C would spread the load by itself. '
            'Failing that, the peak window could start at half past five rather than five, '
            'which would let the first sitting fall outside it at no cost to the trial.',
            '',
            'I would rather the trial worked than be released from it.',
            '',
            'Marta Olsson, Block C',
        ],
        notes=['It separates what works from what does not, so the report is credible.',
               'The mechanism — one oven, twelve rooms, a queue — explains the outcome '
               'better than the outcome does.',
               'The bill increase is offered as evidence, not as the grievance.',
               'Two fixes are proposed, one cheap, so refusing both requires a reason.'],
        bandpair=dict(
            mid=[
                'Dear Estates,',
                'I am writing about the flexible power trial which I joined at the start of '
                'the year. I have to say that I am quite disappointed with it because my '
                'electricity bill has gone up rather than down.',
                'The problem is that the expensive time is between five and seven and this is '
                'exactly when I have to cook. I cannot cook at a different time because of my '
                'timetable and because the kitchen is always busy. So the trial does not work '
                'for me at all and I feel I am being penalised for something I cannot change.',
                'I would like to ask whether I can be taken off the trial, or whether the '
                'expensive period could be changed to a different time. I do not think it is '
                'fair that students in halls should pay more for cooking a meal.',
                'Yours sincerely, Marta Olsson',
            ],
            top=[
                'Dear Estates,',
                'I opted into the flexible power trial in October and want to report a problem '
                'with it, although the overnight part works exactly as described.',
                'The difficulty is the evening peak. Block C has one oven shared between '
                'twelve rooms. Between five and seven it is in continuous use, and the people '
                'cooking at half past six are third in a queue that started at five. The trial '
                'assumes cooking is a habit a price cannot move. Here it is a queue, which is '
                'a different problem and an easier one.',
                'My bill is up about four pounds a month, which I mention as evidence rather '
                'than as a complaint.',
                'A second oven would spread the load by itself. Failing that, starting the '
                'peak at half past five would let the first sitting fall outside it. I would '
                'rather the trial worked than be released from it. Marta Olsson, Block C',
            ],
            diffs=[
                'It reports rather than complains, and says what is working first, which '
                'makes the rest credible.',
                'It gives the mechanism — one oven, twelve rooms, a queue — so the reader '
                'understands the problem without having to take the writer’s word for it.',
                'It reframes the issue as a design assumption that does not hold, rather than '
                'as unfairness to the writer.',
                'It proposes two fixes, one of which costs nothing, so the reader can act '
                'immediately.',
                'The closing line removes the easy response of simply releasing her from the '
                'trial, which would solve her problem and not the real one.',
            ],
        ),
    ),

    w3=dict(
        sub='The cost of transition',
        prof='Dr Haugen',
        question='Two figures dominate public argument about electricity: the cost of '
                 'generating a unit of power, which has fallen dramatically for wind and '
                 'solar, and the cost of running a system that depends on the weather, which '
                 'rises as their share grows. Some argue that governments should set targets '
                 'using the full system cost, even though it is uncertain and contested. '
                 'Others argue that the system cost is so uncertain that using it invites '
                 'manipulation, and that generating cost at least has an agreed definition. '
                 'Which number should policy use? Why?',
        posts=[('Dilan', 'm',
                'System cost, obviously. The generating cost answers a question nobody is '
                'asking. We do not want cheap electrons at two in the afternoon in June; we '
                'want the lights on in January. Any target built on the wrong number will hit '
                'the target and miss the point.'),
               ('Aiko', 'w',
                'The trouble is that nobody can calculate system cost without assuming a '
                'future mix, and the assumption decides the answer. A number that can be '
                'moved by choosing your assumptions is not a target, it is a negotiating '
                'position dressed up as arithmetic.')],
        skill=('Proposing a third option that takes both objections',
               ['When two posts each identify a real problem with the other’s answer, the '
                'strong move is a mechanism that avoids both.',
                'It has to be concrete. A call for balance is not a third option.',
                'Show which objection each part of your proposal answers.']),
        starters=['Both objections are right, which rules out both answers.',
                  'Dilan’s point survives if…, and Aiko’s does too, provided…',
                  'The mechanism that takes both is…',
                  'What this gets you is…'],
        model=[
            'Both objections are right, which is why neither answer works. Dilan is correct '
            'that the generating cost answers a question nobody is asking: a target met '
            'entirely with summer afternoon solar would be a triumph on paper and a blackout '
            'in January. Aiko is equally correct that a system cost rests on an assumption '
            'about the future mix, and that whoever chooses the assumption chooses the answer.',
            'The mechanism that takes both objections is to stop targeting a cost at all and '
            'target the physical thing the cost is a proxy for. Set the requirement as firm '
            'capacity available at a stated winter peak, and let suppliers meet it however '
            'they like. A wind farm with no storage contributes little to that number; the '
            'same farm with four hours of batteries contributes more; a gas plant contributes '
            'fully and carries its emissions cost elsewhere.',
            'This answers Dilan because it is denominated in the thing he actually wants, '
            'which is the lights staying on. It answers Aiko because nobody has to assume a '
            'future mix: the requirement is a measurement at a moment, not a projection, and '
            'it cannot be moved by changing a spreadsheet.',
            'It is not free of difficulty. Deciding what counts as firm is a judgement, and in '
            'principle it could be gamed in the same way. But it is a narrower judgement than '
            'forecasting an entire system twenty years out, and a narrower judgement is easier '
            'to audit, which is all either post is really asking for.',
        ],
        model_words=250,
    ),

    gram=dict(
        title='Third and mixed conditionals',
        headers=['Type', 'Example'],
        rows=[
            ('third conditional', 'If the battery had been bigger, it would have taken more.'),
            ('inverted third (formal)', 'Had the market cleared earlier, the curtailment would not have happened.'),
            ('mixed: past condition, present result', 'If they had built the storage, we would not be curtailing now.'),
            ('mixed: present condition, past result', 'If she were not an engineer, she would not have noticed it.'),
            ('with might / could', 'A bigger cable might have helped.'),
            ('negative condition', 'If the rule had not been written in 2004, this would be a different problem.'),
            ('unless in a third conditional', 'Unless the wind had dropped, the farm would have kept running.'),
        ],
        notes=[
            'The third conditional talks about a past that did not happen. If it had been '
            'bigger means it was not bigger.',
            'Mixed conditionals cross the time frames. Use them when the condition and the '
            'result belong to different times, which is extremely common in real argument.',
            'The inverted form — had the market cleared — is formal and useful in writing. '
            'It drops if and moves had to the front.',
        ],
        watch='Never write "if it would have been". The condition clause takes had, and only '
              'the result clause takes would have. This is the single most common conditional '
              'error at B2 and examiners mark it every time.',
        ex=[
            ('Complete with the third conditional.',
             ['If the battery ______ (be) bigger, it ______ (take) more.',
              'If the market ______ (clear) earlier, the curtailment ______ (not happen).',
              'If anyone ______ (read) the rule, we ______ (solve) it for nothing.',
              'If the wind ______ (not drop), the farm ______ (keep) running.'],
             ['had been / would have taken', 'had cleared / would not have happened',
              'had read / would have solved', 'had not dropped / would have kept']),
            ('Make a mixed conditional.',
             ['They did not build the storage. We are curtailing now.',
              'She studied engineering. She noticed the error.',
              'The rule was written in 2004. The problem exists today.',
              'I did not opt in. I am paying the standard rate.'],
             ['If they had built the storage, we would not be curtailing now.',
              'If she had not studied engineering, she would not have noticed the error.',
              'If the rule had not been written in 2004, the problem would not exist today.',
              'If I had opted in, I would not be paying the standard rate.']),
            ('Rewrite using inversion, without if.',
             ['If the market had cleared earlier, less would have been wasted.',
              'If the committee had been told, it would have asked.',
              'If the oven had not been shared, the peak would not have mattered.',
              'If the figures had included export, the payback would have been longer.'],
             ['Had the market cleared earlier, less would have been wasted.',
              'Had the committee been told, it would have asked.',
              'Had the oven not been shared, the peak would not have mattered.',
              'Had the figures included export, the payback would have been longer.']),
        ],
        bas='Build a Sentence sometimes embeds a conditional inside a question: do you know '
            'whether a bigger battery would have helped. The would have block stays together '
            'and the clause keeps statement order.',
    ),

    fault=dict(
        text='If the battery would have been bigger, it would have taken more power. Had the '
             'market cleared earlier, less energy was wasted. If they built the storage last '
             'year, we would not be curtailing now. The committee were not told about the '
             'export figure. Nobody knows whether would a second oven have helped.',
        faults=[
            ('If the battery would have been bigger', 'If the battery had been bigger',
             'The condition clause takes had, never would have; only the result takes would.'),
            ('less energy was wasted', 'less energy would have been wasted',
             'The result clause of a third conditional needs would have, not a simple past.'),
            ('If they built the storage last year', 'If they had built the storage last year',
             'A past condition that did not happen takes the past perfect, not the simple past.'),
            ('The committee were not told', 'The committee was not told',
             'A single body acting as one unit takes a singular verb here.'),
            ('whether would a second oven have helped',
             'whether a second oven would have helped',
             'An embedded question keeps statement order, so would follows the subject.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('available only some of the time', 'intermittent'),
            ('the network that carries electricity', 'grid'),
            ('the steady demand that never goes away', 'baseload'),
            ('to shut down output that cannot be used', 'curtail'),
            ('the resistance of a system to sudden change', 'inertia'),
            ('to remove carbon from an activity', 'decarbonise'),
            ('to add new equipment to an existing building', 'retrofit'),
            ('the price structure charged to users', 'tariff'),
            ('more than is needed at that moment', 'surplus'),
            ('a period when supply fails', 'outage'),
            ('a cable linking two countries’ grids', 'interconnector'),
            ('generation used only at the highest demand', 'peaking'),
        ],
        gram=[
            ('If the battery ______ been bigger, it would have taken more.', 'had'),
            ('If the market had cleared earlier, less ______ have been wasted.', 'would'),
            ('______ the committee been told, it would have asked.', 'Had'),
            ('If they had built storage, we ______ not be curtailing now.', 'would'),
            ('If she had not studied engineering, she ______ not have noticed.', 'would'),
            ('A bigger cable ______ have helped, though we cannot be sure.', 'might'),
            ('______ the wind had dropped, the farm would have kept running.', 'Unless'),
            ('Nobody knows whether it ______ have helped.', 'would'),
        ],
        mini=[
            ('Electricity is unusual because it',
             ('cannot be transported', 'must be produced and used at the same instant',
              'cannot be measured', 'has no market price'), 1,
             'Supply and demand must match continuously, and the whole architecture of a '
             'grid follows from that single constraint.'),
            ('Curtailment means',
             ('a power cut', 'shutting down generation that cannot be used',
              'importing power', 'raising the tariff'), 1,
             'Operators are paid to stop generating when there is nowhere for the power to '
             'go, which costs money as well as energy.'),
            ('The 5p generation cost overstates the saving because',
             ('it excludes the grant', 'exported power earns only 4p',
              'inverters need replacing', 'the array is small'), 1,
             'The 21p saving applies only to power used on site, and about a third is '
             'expected to be exported instead.'),
            ('Which sentence is correct?',
             ('If it would have been bigger, it would have helped.',
              'If it had been bigger, it would have helped.',
              'If it had been bigger, it had helped.',
              'If it was bigger, it would have helped.'), 1,
             'Had in the condition and would have in the result is the only arrangement that '
             'works.'),
            ('"Rests on an assumption" signals that the writer',
             ('accepts the claim', 'is flagging a weak point',
              'has proved it', 'is quoting somebody'), 1,
             'It names where the argument is load-bearing and unsupported, which is a '
             'criticism rather than a report.'),
            ('The speaker says the interesting number is',
             ('the average cost of wind', 'the cost of the last unit at a high share',
              'the price consumers pay', 'the capital cost'), 1,
             'That is where system cost stops being a rounding error, and it is projected '
             'rather than measured.'),
        ],
    ),

    tip='"If it would have been" is the error examiners are most tired of seeing. The rule is '
        'mechanical: had in the if-clause, would have in the other one. Drill it until it is '
        'automatic, because a conditional is the natural way to argue about any decision that '
        'has already been taken, and you will reach for one constantly.',
)
