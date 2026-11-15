# -*- coding: utf-8 -*-
"""Timed Form 1 — one of the four further forms carried by Volume 6.

A practice test is a diagnosis; a timed form is a rehearsal. The four forms
are the same 97-item shape as Practice Tests 1 to 6 and draw on the whole
series, so that a candidate at the top of the scale can sit four sections in
a row against a clock without meeting a task type for the first time.
"""
from content._g import gaps

_G1, _A1 = gaps(
    'A measurement without a standard is an opinion with a decimal point. The '
    'difficulty is that an instrument which has drifted still agrees with '
    'itself, so every reading confirms every other and the fault is '
    'invis{ible} from the inside. What exposes it is an object of known value '
    'measured on purp{ose}, at a fixed interval, with the result written down '
    'whether or not anything looks wr{ong}. The record is almost always '
    'unevent{ful}, which is the reason the practice is the first thing '
    'abandoned when a laboratory is b{usy}, and the two occasions in a decade '
    'when the entry is not the expe{cted} one are the whole value of it. '
    'Nobody has found a cheaper method of being s{ure}. The laboratories that '
    'gave the procedure up did so because nothing had gone wr{ong} for a long '
    'while, which is an argu{ment} for keeping it rather than against, and the '
    'distinction is the one most easily l{ost} in a meeting about costs.')

_G2, _A2 = gaps(
    'A tax is paid by whoever ends up poorer, and that is rarely the person '
    'who writes the ch{eque}. An employer paying half a payroll contribution '
    'passes most of it into wages that are never off{ered}; a landlord taxed '
    'on rent passes what the market will b{ear} and absorbs the rest. '
    'Economists call this the inci{dence} of a tax, as distinct from its '
    'legal point of collection, and the two coincide only by acci{dent}. The '
    'second fact about taxes is that collecting them costs something, and the '
    'cost falls unevenly: a small trader spends a fort{night} a year on a '
    'return that a large firm processes in an afterno{on}. Any proposal to '
    'simplify a tax is therefore a proposal about compli{ance} as much as '
    'about rates, and the two are argued as though they were one subj{ect}. '
    'Nothing here settles what a tax ought to be. It settles that the '
    'question who pays has an answer nobody can read off the st{atute}.')

_P1 = [
    'The problem of longitude at sea was not a want of mathematics but a want '
    'of a clock. Latitude follows from the elevation of the sun at noon and '
    'was taken daily by any competent navigator; longitude requires the '
    'difference between local noon and the time at a known meridian, so that '
    'a ship which cannot carry the second of those cannot know how far east '
    'or west it has travelled. The consequences were not academic. A squadron '
    'under Shovell was lost on the Scillies in 1707 with some fourteen '
    'hundred men aboard, and the Act establishing a public reward followed '
    'seven years afterwards.',
    'Two solutions were pursued and they were not equally fashionable. The '
    'astronomical method tabulated the position of the moon against the '
    'stars, so that an observer with tables and a clear sky could compute the '
    'reference time; it was favoured by the Board, which was composed largely '
    'of astronomers. The mechanical method required a clock that would keep '
    'time on a rolling deck through changes of temperature and humidity, '
    'which every authority of the period held to be impossible.',
    'John Harrison built four, and the fourth kept time across the Atlantic '
    'in 1761 to within a few seconds. The reward was paid in portions, late, '
    'and after an intervention by the king. The episode is cited as a case of '
    'institutional obstruction and is more interesting than that, since the '
    'Board’s preference was not merely self-interested: a method '
    'depending upon a single irreplaceable artisan is a bad method for a navy '
    'of four hundred ships, and the mechanical solution became the right one '
    'only when the chronometer could be manufactured.',
]

_P2 = [
    'The French attempt upon a canal at Panama was abandoned in 1889 after '
    'the deaths of something above twenty thousand of its workers, most of '
    'them from yellow fever and malaria, and the engineering had not been the '
    'obstacle. The prevailing account of both diseases attributed them to the '
    'air of the place, an account which explained the clustering of cases '
    'near standing water and was for that reason difficult to displace.',
    'The displacement came from Cuba. A commission under Walter Reed tested '
    'in 1900 the proposal, advanced twenty years earlier by Carlos Finlay and '
    'generally disregarded, that yellow fever passes by mosquito. Volunteers '
    'were exposed in two buildings: one filled with the soiled bedding of '
    'patients and sealed against insects, the other clean and admitting '
    'mosquitoes that had fed upon the sick. The occupants of the first '
    'remained well; the occupants of the second did not. The design is what '
    'makes the result decisive, since it separates two accounts that every '
    'previous observation had confounded.',
    'William Gorgas applied the finding at Panama from 1904 by an attack upon '
    'the insect rather than upon the disease: screens, the oiling of standing '
    'water, fumigation and a water supply that removed the household cistern. '
    'Yellow fever was gone from the isthmus within two years. What the '
    'episode establishes is narrower than it is usually made to carry, and '
    'worth stating exactly: a mechanism identified by one well designed '
    'comparison permitted an intervention that fifty years of correlation '
    'between swamps and sickness had not. The correlation had been accurate '
    'throughout and had licensed nothing anybody could do.',
]

TEST = dict(
    n=61, form='1',

    # ------------------------------------------------------------- READING --
    reading=[
        dict(
            gap_text=_G1, gap_ans=_A1,
            docs=[
                ('notice', 'Northgate University · examination timetable '
                           'and clashes, summer session', [
                    '# When the timetable appears',
                    'The full timetable is published six weeks before the '
                    'first paper and is not altered afterwards except for a '
                    'clash.',
                    '# What counts as a clash',
                    '* Two papers in the same session, or three papers in two '
                    'consecutive days.',
                    '# What the office will do',
                    '* Move the later paper to the adjacent session, under '
                    'supervision, with no choice of session offered.',
                    '# What the office will not do',
                    '* Move a paper for travel, for employment, or because '
                    'two papers fall on consecutive days.',
                    '# Deadline',
                    '* Clashes must be reported within ten days of '
                    'publication. After that the timetable stands.'],
                 'notice'),
                ('email',
                 'r.mbeki@northgate.edu',
                 'exams@northgate.edu',
                 '02/05/2036',
                 'Timetable — the ten-day deadline falls before half '
                 'the cohort can see a clash',
                 ['Dear colleagues,',
                  '',
                  'The definition of a clash is the right one and the refusal',
                  'to offer a choice of session is right as well; both of',
                  'those have saved this office a great deal of argument.',
                  '',
                  'My objection is to the deadline. Clashes must be reported',
                  'within ten days of publication, and the optional module',
                  'allocations are confirmed in the third week. A student who',
                  'does not yet know which option she is sitting cannot know',
                  'whether she has a clash. Of the 46 late clash reports last',
                  'summer, 39 came from students whose option was confirmed',
                  'after the deadline had passed.',
                  '',
                  'I am not asking for the deadline to be abolished, which',
                  'would leave the timetable open until the week of the first',
                  'paper. I am asking for one clause: the ten days run from',
                  'publication or from the confirmation of a student’s',
                  'own options, whichever is the later. That moves no',
                  'deadline for the two thirds of the cohort who have no',
                  'options at all.',
                  '',
                  'Rosalind Mbeki, Senior Tutor']),
            ],
            daily=[
                ('When is the timetable published?',
                 ('Ten days before the first paper',
                  'Six weeks before the first paper',
                  'In the third week of term',
                  'It is not published in advance'), 1,
                 'And it is not altered afterwards except for a clash as '
                 'defined.'),
                ('Which of these counts as a clash?',
                 ('Two papers on consecutive days',
                  'Two papers in the same session',
                  'A paper falling on a day of employment',
                  'A paper requiring travel'), 1,
                 'Three papers in two consecutive days also counts; two on '
                 'consecutive days does not.'),
                ('What will the office do about a clash?',
                 ('Offer a choice of session',
                  'Move the later paper to the adjacent session under '
                  'supervision',
                  'Cancel the later paper',
                  'Nothing before the deadline'), 1,
                 'No choice of session is offered, which the email calls '
                 'right.'),
                ('What is the deadline for reporting a clash?',
                 ('Six weeks before the first paper',
                  'Ten days from publication of the timetable',
                  'The third week of term',
                  'There is no deadline'), 1,
                 'After that the timetable stands as published.'),
                ('What does Rosalind Mbeki propose?',
                 ('Abolishing the deadline',
                  'Running the ten days from publication or from '
                  'confirmation of a student’s options, whichever is '
                  'later',
                  'Offering a choice of session',
                  'Publishing the timetable earlier'), 1,
                 'It moves no deadline for the two thirds of the cohort with '
                 'no options.'),
            ],
            passage=('The Clock That Could Not Be Built', _P1,
                     sum(len(p.split()) for p in _P1)),
            academic=[
                ('What does the writer say the longitude problem was not?',
                 ('A want of a clock',
                  'A want of mathematics',
                  'A want of navigators',
                  'A want of money'), 1,
                 'Latitude was taken daily by any competent navigator.'),
                ('What does longitude require?',
                 ('The elevation of the sun at noon',
                  'A tabulated position of the moon only',
                  'The difference between local noon and the time at a known '
                  'meridian',
                  'A clear sky'), 2,
                 'A ship that cannot carry the reference time cannot know how '
                 'far east it has gone.'),
                ('Why was the astronomical method favoured by the Board?',
                 ('It was cheaper',
                  'The Board was composed largely of astronomers',
                  'It required no tables',
                  'It worked in any weather'), 1,
                 'The mechanical method was held by every authority to be '
                 'impossible.'),
                ('What happened to Harrison’s reward?',
                 ('It was refused entirely',
                  'It was paid in portions, late, and after an intervention '
                  'by the king',
                  'It was paid in full in 1761',
                  'It was divided with the astronomers'), 1,
                 'Which is why the episode is cited as institutional '
                 'obstruction.'),
                ('Why does the writer say the Board’s preference was not '
                 'merely self-interested?',
                 ('Astronomy was better funded',
                  'A method depending on one irreplaceable artisan is bad for '
                  'a navy of four hundred ships',
                  'The tables were more accurate',
                  'Harrison had not finished his fourth clock'), 1,
                 'The mechanical solution became right when the chronometer '
                 'could be manufactured.'),
            ],
        ),
        dict(
            gap_text=_G2, gap_ans=_A2,
            docs=[
                ('notice', 'Tarnbrook Water · compulsory metering '
                           'programme, phase three', [
                    '# Who is affected',
                    'All remaining unmetered households in the TA3 and TA4 '
                    'postal districts, from 1 October.',
                    '# The charge',
                    '* A standing charge of £68 a year, plus '
                    '£1.94 for each cubic metre measured.',
                    '# Transitional protection',
                    '* Any household whose metered bill exceeds its previous '
                    'bill pays the previous bill for the first two years.',
                    '# Exemptions from the standing charge',
                    '* Households receiving a means-tested benefit, on '
                    'application, renewable annually.',
                    '# Meter failure',
                    '* Where a meter cannot be read, the bill is estimated '
                    'from the district average and corrected at the next '
                    'reading.'],
                 'notice'),
                ('email',
                 'g.okonkwo@tarnbrook-water.co.uk',
                 'metering@tarnbrook-water.co.uk',
                 '12/09/2037',
                 'Phase three — the protection is right and the '
                 'standing charge falls on the wrong households',
                 ['Dear colleagues,',
                  '',
                  'Two years of transitional protection is more than the',
                  'regulator requires and I would keep it. The estimation',
                  'rule is also right: an estimate corrected at the next',
                  'reading is better than a dispute.',
                  '',
                  'My objection is to the shape of the charge rather than',
                  'its level. A standing charge of £68 is the same for a',
                  'household of one and a household of six, so the smallest',
                  'households pay the largest share of their bill for',
                  'nothing they can control. In TA4 the mean bill for a',
                  'single occupant is £126, of which 54 per cent is the',
                  'standing charge, against 21 per cent for a household of',
                  'four.',
                  '',
                  'I am not asking for the standing charge to be abolished,',
                  'since it recovers a real fixed cost. I am asking for it to',
                  'be charged by meter size rather than per household, which',
                  'is how every industrial customer is already billed. On',
                  'our own figures that moves £11 a year from single',
                  'occupants to the largest households and costs this',
                  'company nothing at all.',
                  '',
                  'Gloria Okonkwo, Customer Policy Manager']),
            ],
            daily=[
                ('Who is affected by phase three?',
                 ('All households in the city',
                  'All remaining unmetered households in TA3 and TA4',
                  'Only households receiving a benefit',
                  'Industrial customers only'), 1,
                 'The programme begins in those districts on 1 October.'),
                ('What is the charge?',
                 ('A standing charge only',
                  'A rate for each cubic metre only',
                  'A flat annual bill',
                  'A standing charge of sixty-eight pounds a year plus a rate '
                  'for each cubic metre'), 3,
                 'The metered rate is one pound ninety-four a cubic '
                 'metre.'),
                ('What is the transitional protection?',
                 ('A discount for two years',
                  'A household whose metered bill exceeds its previous bill '
                  'pays the previous bill for two years',
                  'An exemption from the standing charge',
                  'A free meter'), 1,
                 'The email says it exceeds what the regulator '
                 'requires.'),
                ('What happens when a meter cannot be read?',
                 ('No bill is issued',
                  'The bill is estimated from the district average and '
                  'corrected at the next reading',
                  'The household pays the standing charge only',
                  'A new meter is fitted'), 1,
                 'Which the email calls better than a dispute.'),
                ('What does Gloria Okonkwo propose?',
                 ('Abolishing the standing charge',
                  'Charging the standing charge by meter size rather than per '
                  'household',
                  'Raising the metered rate',
                  'Extending the protection to four years'), 1,
                 'Which is how every industrial customer is already '
                 'billed.'),
            ],
            passage=('The Insect and the Isthmus', _P2,
                     sum(len(p.split()) for p in _P2)),
            academic=[
                ('What does the writer say had not been the obstacle at '
                 'Panama?',
                 ('The mosquitoes', 'The engineering', 'The finance',
                  'The climate'), 1,
                 'Above twenty thousand workers died, most of them of yellow '
                 'fever and malaria.'),
                ('Why was the prevailing account difficult to displace?',
                 ('It was official',
                  'It explained the clustering of cases near standing water',
                  'It had never been tested',
                  'It came from Cuba'), 1,
                 'A false account that fits the observations is the hardest '
                 'kind to remove.'),
                ('What did the two buildings in the Cuban experiment '
                 'contain?',
                 ('Mosquitoes in both',
                  'Soiled bedding and no insects in one; clean bedding and '
                  'fed mosquitoes in the other',
                  'Patients in both',
                  'Neither bedding nor insects'), 1,
                 'The occupants of the first remained well and those of the '
                 'second did not.'),
                ('What makes the result decisive, on the writer’s '
                 'account?',
                 ('The number of volunteers',
                  'The design, which separates two accounts every previous '
                  'observation had confounded',
                  'The reputation of the commission',
                  'The speed of the result'), 1,
                 'Finlay had advanced the proposal twenty years '
                 'earlier.'),
                ('What does the episode establish, stated exactly?',
                 ('That swamps cause disease',
                  'That a mechanism found by one good comparison permitted an '
                  'intervention fifty years of correlation had not',
                  'That fumigation is the key measure',
                  'That the French engineering was at fault'), 1,
                 'The writer says it is narrower than it is usually made to '
                 'carry.'),
            ],
        ),
    ],

    # ----------------------------------------------------------- LISTENING --
    listening=[
        dict(
            warm=[
                ('Woman: Is two papers on consecutive days a clash?',
                 ('No. Two in the same session is.',
                  'Yes, report it.', 'Only in the summer.',
                  'Six weeks.'), 0,
                 'Three papers in two consecutive days counts as well, and '
                 'two on consecutive days does not.'),
                ('Woman: Can I choose which session they move me to?',
                 ('No. They move the later paper to the adjacent one.',
                  'Yes, within the week.', 'Yes, by application.',
                  'Ten days.'), 0,
                 'The notice refuses a choice of session, which the senior '
                 'tutor calls right.'),
                ('Man: My option was confirmed last week. Am I too late?',
                 ('Under the present rule, yes, and that is the argument.',
                  'No, you have six weeks.', 'Yes, by a month.',
                  'Thirty-nine students.'), 0,
                 'The ten days run from publication, not from confirmation of '
                 'the option.'),
                ('Man: How many were late last summer?',
                 ('Forty-six, and thirty-nine of them for that reason.',
                  'Thirty-nine in total.', 'Two thirds of the cohort.',
                  'Nobody was late.'), 0,
                 'Their options were confirmed after the deadline had '
                 'passed.'),
                ('Woman: Was the meter reading estimated again?',
                 ('Yes, from the district average, and corrected next time.',
                  'No, it was read.', 'Yes, and never corrected.',
                  'Sixty-eight pounds.'), 0,
                 'An estimate corrected at the next reading is the rule in '
                 'the notice.'),
                ('Woman: Why does the standing charge bother you?',
                 ('Because it is the same for one person and for six.',
                  'Because it is too low.', 'It does not bother me.',
                  'Fifty-four per cent.'), 0,
                 'The smallest households pay the largest share of a bill '
                 'they cannot control.'),
                ('Man: Did you check the balance against the standard?',
                 ('Every Monday, and last week it was out.',
                  'No, it looked fine.', 'The standard is lost.',
                  'In a decade.'), 0,
                 'A drifted instrument agrees with itself, so only a known '
                 'value exposes it.'),
                ('Man: Why did the other laboratory stop checking?',
                 ('Because nothing had gone wrong for a long while.',
                  'Because the standard failed.', 'They never started.',
                  'Once a decade.'), 0,
                 'Which the gap text calls an argument for keeping the '
                 'procedure rather than against it.'),
            ],
            convos=[
                ([('Man', 'Have you looked at the timetable?'),
                  ('Woman', 'I have, and I cannot tell whether I have a clash '
                            'or not, which is the whole problem.'),
                  ('Man', 'Two papers in the same session. It is not '
                          'complicated.'),
                  ('Woman', 'It is not complicated once you know which papers '
                            'you are sitting. My option is not confirmed '
                            'until the third week, and the clash deadline is '
                            'ten days from today.'),
                  ('Man', 'So report it anyway and sort it out later.'),
                  ('Woman', 'You cannot report a clash you have not got. The '
                            'form asks for two paper codes.'),
                  ('Man', 'Then the deadline is wrong.'),
                  ('Woman', 'The deadline is right for two thirds of the '
                            'cohort, which is why nobody has changed it. The '
                            'senior tutor has asked for one clause instead: '
                            'ten days from publication or from the '
                            'confirmation of your own options, whichever is '
                            'later.'),
                  ('Man', 'And that would fix it without moving anybody '
                          'else’s deadline.'),
                  ('Woman', 'Which is exactly why it has a chance of being '
                            'granted. A general complaint about the timetable '
                            'would not.')],
                 [('Why can the woman not report a clash?',
                   ('The deadline has passed',
                    'She does not yet know which papers she is sitting',
                    'The form is unavailable',
                    'Her option has no examination'), 1,
                   'The form asks for two paper codes and her option is not '
                   'confirmed.'),
                  ('Why does she expect the proposed clause to be granted?',
                   ('It is cheaper than the alternative',
                    'It moves no deadline for the two thirds of the cohort '
                    'with no options',
                    'The tutor has authority to grant it',
                    'The timetable is already published'), 1,
                   'A narrow request carries where a general complaint would '
                   'not.')]),
                ([('Woman', 'Your water bill came. A hundred and twenty-six '
                            'pounds.'),
                  ('Man', 'For one person. And sixty-eight of that is the '
                          'standing charge before a drop comes out of the '
                          'tap.'),
                  ('Woman', 'Fifty-four per cent of your bill, against '
                            'twenty-one per cent of the Hallorans’ next '
                            'door, and there are four of them.'),
                  ('Man', 'Which means they pay less per person for the fixed '
                          'part than I do.'),
                  ('Woman', 'Considerably less. And the company has not '
                            'denied it. Their own policy manager has written '
                            'to say the shape of the charge is wrong, not the '
                            'level.'),
                  ('Man', 'What does she want instead?'),
                  ('Woman', 'The standing charge set by meter size rather '
                            'than per household, which is how every factory '
                            'in the district is already billed. It moves '
                            'about eleven pounds a year off single occupants '
                            'and costs the company nothing.'),
                  ('Man', 'Then why has it not been done?'),
                  ('Woman', 'Because nobody had put the two percentages side '
                            'by side until she did.')],
                 [('What proportion of the man’s bill is the standing '
                   'charge?',
                   ('Twenty-one per cent', 'Fifty-four per cent',
                    'Eleven per cent', 'All of it'), 1,
                   'Against twenty-one per cent for a household of four next '
                   'door.'),
                  ('What does the policy manager say is wrong?',
                   ('The level of the charge',
                    'The shape of the charge',
                    'The metering programme itself',
                    'The transitional protection'), 1,
                   'She proposes charging by meter size rather than per '
                   'household.')]),
            ],
            poster=['Timetable published six weeks before the first paper',
                    'Clash = two papers in one session, or three in two days',
                    'Report within ten days · no choice of session'],
            announce=([('Woman',
                        'Three things about the summer timetable and then the '
                        'one change we are putting to the committee. First, '
                        'the timetable goes out six weeks before the first '
                        'paper and it does not move afterwards except for a '
                        'clash. Second, a clash means two papers in the same '
                        'session, or three papers across two consecutive '
                        'days. Two papers on consecutive days is not a '
                        'clash, however tired you are, and the office will '
                        'not move a paper for travel or for a job. Third, if '
                        'you do have a clash the later paper moves to the '
                        'adjacent session under supervision, and you are not '
                        'offered a choice between them. Now the change. '
                        'Forty-six students reported a clash late last '
                        'summer and thirty-nine of those were students whose '
                        'optional module was confirmed after the ten days had '
                        'run out. Dr Mbeki has asked for one clause: the ten '
                        'days run from publication or from the confirmation '
                        'of your own options, whichever is later. It moves '
                        'nothing for the two thirds of you who have no '
                        'options, and the committee meets on the '
                        'fourteenth.')],
                      [('What does the speaker say is not a clash?',
                        ('Two papers in the same session',
                         'Two papers on consecutive days',
                         'Three papers across two days',
                         'A paper in the first session'), 1,
                        'However tired the candidate is, in her phrase.'),
                       ('What does the proposed clause change?',
                        ('The length of the examination period',
                         'When the ten days begin to run',
                         'The definition of a clash',
                         'The choice of session'), 1,
                        'Publication or the confirmation of a '
                        'student’s options, whichever is later.')]),
            board=['Latitude: the sun at noon · taken daily',
                   'Longitude: local noon against a reference time',
                   '1707: a squadron lost on the Scillies',
                   'Harrison’s fourth clock, 1761'],
            talk=([('Man',
                    'A problem that was solved by a carpenter, and a Board '
                    'that has been unfairly treated by history. Latitude at '
                    'sea is straightforward: measure how high the sun gets '
                    'at noon and you know how far north you are, and every '
                    'navigator in Europe could do it. Longitude is a '
                    'different kind of problem. To know how far east or west '
                    'you have come, you need the difference between noon '
                    'where you are standing and the time at some agreed '
                    'meridian, which means you have to carry that second '
                    'time with you. And in 1700 nothing could carry it. '
                    'Pendulum clocks do not work on a rolling deck. The '
                    'consequences were not theoretical: in 1707 a British '
                    'squadron ran onto the Scilly Isles and about fourteen '
                    'hundred men drowned, and Parliament put up a reward '
                    'seven years later. Two solutions competed. The '
                    'astronomers wanted to use the moon as a clock: tabulate '
                    'its position against the stars and an observer with '
                    'tables can work out the reference time. The engineers '
                    'wanted a clock that would keep time at sea, which every '
                    'serious authority of the day said was impossible. John '
                    'Harrison built four of them, and in 1761 the fourth '
                    'crossed the Atlantic and lost a few seconds. He was '
                    'paid late, in instalments, after the king intervened, '
                    'and that is usually told as a story about obstruction. '
                    'I want to defend the Board for a moment. A navy has '
                    'four hundred ships. A method that depends on one '
                    'irreplaceable craftsman in London is a bad method for '
                    'four hundred ships, and the mechanical solution only '
                    'became the right answer when chronometers could be '
                    'manufactured in quantity.')],
                  [('Why could nothing carry the reference time in 1700?',
                    ('Nobody had thought of it',
                     'Pendulum clocks do not work on a rolling deck',
                     'Tables were unavailable',
                     'The meridian had not been agreed'), 1,
                    'Which is why longitude was a different kind of problem '
                    'from latitude.'),
                   ('What happened in 1707?',
                    ('Harrison built his first clock',
                     'A British squadron was lost on the Scillies with about '
                     'fourteen hundred men',
                     'Parliament offered the reward',
                     'The lunar tables were published'), 1,
                    'The reward followed seven years afterwards.'),
                   ('What did the astronomers propose?',
                    ('A better pendulum',
                     'Using the moon as a clock, tabulated against the stars',
                     'A reward for a chronometer',
                     'Abandoning longitude at sea'), 1,
                    'An observer with tables and a clear sky could then '
                    'compute the reference time.'),
                   ('How does the lecturer defend the Board?',
                    ('The astronomical method was more accurate',
                     'A method depending on one irreplaceable craftsman is '
                     'bad for a navy of four hundred ships',
                     'Harrison was paid in full',
                     'The clocks were never tested'), 1,
                    'The mechanical answer became right when chronometers '
                    'could be made in quantity.')]),
        ),
        dict(
            warm=[
                ('Woman: Was the canal abandoned for engineering reasons?',
                 ('No. It was abandoned because the workers died.',
                  'Yes, the cuttings failed.', 'Partly.',
                  'In 1889.'), 0,
                 'Above twenty thousand deaths, most of them from yellow '
                 'fever and malaria.'),
                ('Woman: What did people think caused yellow fever?',
                 ('The air of the place.', 'Mosquitoes.',
                  'Contaminated water.', 'Nobody had an account.'), 0,
                 'An account that explained the clustering of cases near '
                 'standing water.'),
                ('Man: How was the mosquito account tested?',
                 ('Two buildings: one with bedding, one with insects.',
                  'By observation only.', 'It was never tested.',
                  'In Panama.'), 0,
                 'The design separates two accounts that observation had '
                 'confounded.'),
                ('Man: Who had proposed it first?',
                 ('Finlay, twenty years earlier, and was disregarded.',
                  'Reed, in 1900.', 'Gorgas, in 1904.',
                  'Nobody knows.'), 0,
                 'The commission tested a proposal that had been available '
                 'for two decades.'),
                ('Woman: Who pays a payroll tax, then?',
                 ('Mostly the worker, in wages never offered.',
                  'The employer, by law.', 'Nobody.',
                  'A fortnight a year.'), 0,
                 'The legal point of collection and the incidence coincide '
                 'only by accident.'),
                ('Woman: Why does compliance cost matter?',
                 ('Because a small trader spends a fortnight on the same '
                  'return.',
                  'Because rates are too high.', 'It does not matter.',
                  'An afternoon.'), 0,
                 'A large firm processes the same return in an afternoon, so '
                 'the cost falls unevenly.'),
                ('Man: Did the water company accept the criticism?',
                 ('Their own policy manager made it.',
                  'No, they denied it.', 'Nobody asked them.',
                  'Eleven pounds.'), 0,
                 'She argued that the shape of the charge was wrong rather '
                 'than the level.'),
                ('Man: Will the committee agree to it?',
                 ('It costs the company nothing, so probably.',
                  'No, it is too expensive.', 'Nobody has asked.',
                  'By meter size.'), 0,
                 'The proposal moves money between customers rather than out '
                 'of the company.'),
            ],
            convos=[
                ([('Man', 'You are reading about mosquitoes again.'),
                  ('Woman', 'I am reading about an experiment, which is a '
                            'different thing. Everybody had noticed that '
                            'yellow fever clustered near standing water for '
                            'fifty years before anybody tested why.'),
                  ('Man', 'Standing water is where mosquitoes breed. It '
                          'seems obvious.'),
                  ('Woman', 'It is obvious afterwards. Standing water is also '
                            'where the air smells worst, and the air was the '
                            'accepted explanation, and both accounts predict '
                            'exactly the same clustering. That is the point.'),
                  ('Man', 'So the correlation was useless.'),
                  ('Woman', 'The correlation was perfectly accurate and it '
                            'licensed nothing anybody could do. What changed '
                            'things was two buildings in Cuba: one full of '
                            'soiled bedding with the insects kept out, one '
                            'clean with mosquitoes that had fed on patients. '
                            'The men in the first building stayed well.'),
                  ('Man', 'And that settled it.'),
                  ('Woman', 'That settled it, and four years later Gorgas '
                            'cleared yellow fever out of Panama in two years '
                            'with screens and oil and a different water '
                            'supply. Fifty years of correct observation had '
                            'produced no intervention at all.')],
                 [('Why does the woman say the correlation licensed nothing?',
                   ('It was inaccurate',
                    'Both accounts predicted the same clustering',
                    'Nobody had measured it',
                    'The data were lost'), 1,
                   'Standing water is also where the air smelt worst, and air '
                   'was the accepted account.'),
                  ('What did Gorgas achieve, and how long did it take?',
                   ('A cure for yellow fever, in four years',
                    'The clearance of yellow fever from Panama in two years, '
                    'by screens, oil and a new water supply',
                    'A vaccine, in two years',
                    'The abandonment of the canal'), 1,
                   'Fifty years of correct observation had produced no '
                   'intervention at all.')]),
            ],
            poster=['Compulsory metering · TA3 and TA4 · from 1 '
                    'October',
                    'Standing charge £68 a year + £1.94 a cubic '
                    'metre',
                    'Two years of transitional protection'],
            announce=([('Man',
                        'Three points about phase three of the metering '
                        'programme and then the amendment our own policy team '
                        'has asked for. The charge from October is a standing '
                        'charge of sixty-eight pounds a year plus one pound '
                        'ninety-four for every cubic metre you use. If your '
                        'metered bill comes out higher than the bill you were '
                        'paying before, you pay the old bill for two years, '
                        'which is a year longer than the regulator requires '
                        'of us. And if the meter cannot be read, we estimate '
                        'from the district average and correct it at the next '
                        'reading rather than arguing about it. Now the '
                        'amendment. Ms Okonkwo has pointed out that the '
                        'standing charge is the same for one person as for '
                        'six, so in TA4 it is fifty-four per cent of the bill '
                        'of a single occupant and twenty-one per cent of the '
                        'bill of a household of four. Her proposal is to '
                        'charge it by meter size instead, which is how we '
                        'already bill every industrial customer. It moves '
                        'about eleven pounds a year from single occupants to '
                        'the largest households and it costs this company '
                        'nothing whatever, which is why I am putting it to '
                        'the board in November rather than next year.')],
                      [('How does the transitional protection compare with '
                        'the regulator’s requirement?',
                        ('It is shorter',
                         'It is a year longer',
                         'It is the same',
                         'The regulator requires none'), 1,
                        'A household whose metered bill is higher pays the '
                        'old bill for two years.'),
                       ('Why is the speaker putting the amendment to the '
                        'board in November?',
                        ('The regulator requires it',
                         'It costs the company nothing whatever',
                         'The programme begins in November',
                         'Customers have complained'), 1,
                        'It moves about eleven pounds a year between '
                        'customers.')]),
            board=['1889: the French attempt abandoned',
                   'Twenty thousand dead · the air blamed',
                   '1900 Cuba: two buildings, one with insects',
                   '1904 Panama: screens, oil, two years'],
            talk=([('Man',
                    'The best designed experiment in the history of public '
                    'health, and I want you to see why the design is the '
                    'whole of it. Panama, 1889: the French give up, having '
                    'lost something over twenty thousand workers, most of '
                    'them to yellow fever and malaria. Nobody gave up for '
                    'engineering reasons. Now, what did people believe caused '
                    'yellow fever? The air. Bad air rising off wet ground, '
                    'and before you laugh, notice that this account explains '
                    'the data perfectly. Cases cluster near standing water. '
                    'They do. They also cluster near mosquitoes, because '
                    'that is where mosquitoes breed, and for fifty years '
                    'every observation anybody made was equally consistent '
                    'with both stories. Which is why observation was never '
                    'going to settle it. In 1900 a commission under Walter '
                    'Reed tested a proposal Carlos Finlay had made twenty '
                    'years earlier and nobody had taken seriously. They built '
                    'two huts. In the first they put the soiled bedding of '
                    'yellow fever patients, sealed it against insects, and '
                    'had volunteers sleep in it. In the second they put clean '
                    'bedding and mosquitoes that had fed on the sick. The men '
                    'in the bedding hut stayed well. The men in the clean hut '
                    'did not. Those two huts separate what fifty years of '
                    'looking could not separate. And then the practical part: '
                    'from 1904 William Gorgas attacked the insect rather '
                    'than the disease, with screens, oil on standing water, '
                    'fumigation and a piped supply that got rid of the '
                    'household cistern, and yellow fever was gone from the '
                    'isthmus in two years. Fifty years of accurate '
                    'correlation; one good comparison; two years to '
                    'act.')],
                  [('Why does the lecturer say observation could never settle '
                    'the question?',
                    ('The observations were inaccurate',
                     'Every observation was equally consistent with both '
                     'accounts',
                     'Nobody recorded the cases',
                     'The clustering was invented'), 1,
                    'Cases cluster near standing water, which both stories '
                    'predict.'),
                   ('What was in the first hut?',
                    ('Mosquitoes that had fed on patients',
                     'The soiled bedding of patients, sealed against insects',
                     'Clean bedding and no volunteers',
                     'Nothing at all'), 1,
                    'The men who slept in it stayed well.'),
                   ('Whose proposal did the commission test?',
                    ('Reed’s own',
                     'Finlay’s, made twenty years earlier',
                     'Gorgas’s',
                     'The French engineers’'), 1,
                    'Nobody had taken it seriously in the interval.'),
                   ('What did Gorgas do from 1904?',
                    ('Treated the patients',
                     'Attacked the insect with screens, oil, fumigation and a '
                     'piped supply',
                     'Drained the isthmus',
                     'Moved the workforce'), 1,
                    'Yellow fever was gone from the isthmus in two '
                    'years.')]),
        ),
    ],

    # ------------------------------------------------------------- WRITING --
    writing=dict(
        build=[
            ('The timetable is published six weeks before the first paper.',
             ['do', 'you', 'know', 'when', 'the', 'optional', 'modules',
              'are', 'confirmed'],
             'Do you know when the optional modules are confirmed?'),
            ('Thirty-nine of the late reports came from one cause.',
             ['was', 'that', 'cause', 'put', 'to', 'the', 'committee',
              'in', 'writing'],
             'Was that cause put to the committee in writing?'),
            ('The standing charge is sixty-eight pounds a year.',
             ['what', 'share', 'of', 'a', 'single', 'occupant', 'bill',
              'is', 'that'],
             'What share of a single occupant’s bill is that?'),
            ('Every industrial customer is billed by meter size.',
             ['is', 'there', 'any', 'reason', 'households', 'cannot', 'be',
              'billed', 'the', 'same', 'way'],
             'Is there any reason households cannot be billed the same '
             'way?'),
            ('Harrison’s fourth clock lost a few seconds crossing the '
             'Atlantic.',
             ['how', 'many', 'of', 'those', 'clocks', 'could', 'be', 'made',
              'in', 'a', 'year'],
             'How many of those clocks could be made in a year?'),
            ('The Board preferred the astronomical method.',
             ['can', 'you', 'tell', 'me', 'who', 'sat', 'on', 'that Board',
              'at', 'the time'],
             'Can you tell me who sat on that Board at the time?'),
            ('Cases of yellow fever clustered near standing water.',
             ['does', 'that', 'clustering', 'favour', 'either', 'account',
              'over', 'the', 'other'],
             'Does that clustering favour either account over the other?'),
            ('Volunteers slept in a hut filled with soiled bedding.',
             ['were', 'the', 'insects', 'kept', 'out', 'of', 'that', 'hut',
              'altogether'],
             'Were the insects kept out of that hut altogether?'),
            ('Gorgas cleared the isthmus in two years.',
             ['I', 'would', 'like', 'to', 'know', 'which', 'of', 'his',
              'measures', 'mattered', 'most'],
             'I would like to know which of his measures mattered most.'),
            ('A drifted instrument agrees with every reading it takes.',
             ['only', 'an', 'object', 'of', 'known', 'value', 'will',
              'expose', 'the', 'fault'],
             'Only an object of known value will expose the fault.'),
        ],
        email=dict(
            to='exams@northgate.edu',
            date='09/05/2036',
            subject='Clash deadline — the society supports the proposed '
                    'clause, and one further request',
            scenario=['You are education officer of the students’ '
                      'union. The examinations office has told you it will '
                      'put one clause to the committee on the fourteenth: '
                      'the ten days for reporting a clash run from '
                      'publication or from the confirmation of a '
                      'student’s own options, whichever is later. You '
                      'accept the correction to your own figures: 46 late '
                      'reports last summer and not 60. You want the clause, '
                      'and you want one further thing the office has not '
                      'mentioned: that students sitting three papers across '
                      'two consecutive days be told which paper the office '
                      'would move, before they decide whether to apply.',
                      'Write an email to the examinations office, copied to '
                      'the union.'],
            bullets=['Accept the correction to your figures, briefly and '
                     'without retreating from the complaint.',
                     'Support the proposed clause and say what it is worth '
                     'to students.',
                     'Ask for the further information about three-paper '
                     'cases, with the reason.'],
        ),
        disc=dict(
            prof='Dr Halvorsen',
            question='A university proposes to stop publishing past '
                     'examination papers, on the ground that candidates '
                     'rehearse the format instead of learning the subject '
                     'and that the papers are reused in consequence. '
                     'Supporters say a hidden format rewards the subject '
                     'rather than the drill. Opponents say concealment does '
                     'not stop the drilling, it sells it, since the students '
                     'who can pay a tutor will obtain last year’s paper '
                     'anyway. Should the papers be withheld?',
            posts=[('Perpetua', 'w', 'Publish them. Concealment does not '
                                     'abolish coaching; it distributes it by '
                                     'income, and the people who lose are '
                                     'the ones who have nobody to ask.'),
                   ('Casimir', 'm', 'Publish them and within three years the '
                                    'paper is the syllabus. I have watched '
                                    'the teaching in two departments narrow '
                                    'to whatever appeared last June.')],
        ),
    ),

    # ------------------------------------------------------------ SPEAKING --
    speaking=dict(
        repeat=['A drifted instrument agrees with itself.',
                'Longitude needs a clock you can carry.',
                'The air and the insect predicted the same clustering.',
                'Two huts separated what fifty years could not.',
                'The standing charge is the same for one person and for six.',
                'Ten days from publication, or from the confirmation of your '
                'options.',
                'Fifty years of accurate correlation, one good comparison, '
                'and two years to clear the isthmus.'],
        interview=('a study of how people check things and who pays for '
                   'them',
                   ['Thank you for taking part today. I am calling about a '
                    'study of how people check things and who pays for them. '
                    'To begin, could you tell me about something you check '
                    'regularly, and why you started?',
                    'Thinking about a charge you pay that is the same '
                    'whatever you use — a standing charge, a '
                    'subscription, a fee — do you think it falls '
                    'fairly, and why?',
                    'Some people say that an observation repeated for fifty '
                    'years must be telling us something. How far would you '
                    'agree?',
                    'Finally, describe a deadline you could not meet because '
                    'of something outside your control, and say what you '
                    'would have changed.']),
    ),
)
