# -*- coding: utf-8 -*-
"""Practice Test 6 — the exit test for Volume 6 and for the series.

It draws on the whole course: the campus and everyday vocabulary of Units
1-20, the academic fields of Units 21-50, and the C1 prose and five-cycle
habits of Units 51-60. The item table is the same 97 that Practice Tests 1
to 5 pass.
"""
from content._g import gaps

_G1, _A1 = gaps(
    'A test that finds nothing has not found that there is nothing there. The '
    'distinction matters because the two sentences are read as one, and the '
    'first is about the proced{ure} while the second is about the w{orld}. A '
    'scan detecting no awareness in a patient has established only that the '
    'method could not see any, which is compat{ible} with a patient who is '
    'entirely aw{are} and cannot perform the task it sets. A survey finding no '
    'differ{ence} between two groups may simply have been too small to find '
    'one. In each case the honest report names the method and its p{ower}, and '
    'the dishonest report names the conclus{ion}. Nothing is harder to publish '
    'than a null result that says no more than it s{ays}, because a reader '
    'wants a verd{ict} and the procedure has not produced o{ne}.')

_G2, _A2 = gaps(
    'Any rule turning on a single figure treats two almost identical cases as '
    'oppo{sites}, and moving the figure does not remove that case but '
    'relo{cates} it. An applicant with a thousand pounds receives the award '
    'and one with a thousand and one receives nothing, and no caseworker can '
    'explain the differ{ence} to the second of them. The usual remedy is a '
    'tap{er}, under which the award falls by a little for every pound of '
    'capital, so that the worst suffered by anybody at the bound{ary} is the '
    'loss of a few pence. A taper does not dissolve the problem, because a '
    'taper has two ends and the same objection ret{urns} at both of them, but '
    'it reduces the size of the inju{stice} by a factor of a thousand, and '
    'that is a real gain rather than a philosophical o{ne}. Some decisions '
    'cannot be tapered at all. A convi{ction} is entire or it is nothing, and '
    'there the arbitrary line sur{vives} every ingenuity anybody has brought '
    'to it.')

_P1 = [
    'The depletion of stratospheric ozone above Antarctica was reported in '
    '1985 from measurements taken at Halley Bay by a British team, and the '
    'delay in the discovery is the instructive part of the story. The '
    'satellite instruments then in orbit had recorded the same depletion for '
    'several years and had discarded it, because the processing software '
    'treated values that low as instrument error and set them aside '
    'automatically. The ground station had no such filter and no such '
    'sophistication, and its operators looked at the numbers themselves.',
    'The chemistry had been predicted in 1974, before any measurement '
    'existed: chlorine released from stable industrial compounds would '
    'survive its ascent to the stratosphere, where ultraviolet light would '
    'break the compounds apart and the chlorine would catalyse the '
    'destruction of ozone without itself being consumed. What nobody '
    'predicted was the polar mechanism, in which ice crystals in the winter '
    'stratosphere provide surfaces for a reaction that liberates chlorine in '
    'a single fortnight of spring. The prediction of 1974 was accordingly '
    'correct about the agent and wrong about the magnitude by an order.',
    'The Montreal Protocol followed in 1987 and remains the only '
    'environmental agreement ratified by every state. Its drafting took '
    'account of the lesson: the schedule of reductions was tightened on four '
    'occasions as the measurements improved, because the instrument had been '
    'written to be amended rather than to be defended. Two features of the '
    'episode deserve separation. The science was partly wrong and sufficient '
    'to act upon, and the agreement succeeded because its authors assumed '
    'from the start that the science would change under them.',
]

_P2 = [
    'The script now called Linear B survives on some five thousand clay '
    'tablets from Knossos and Pylos, baked hard by the fires that destroyed '
    'the palaces holding them, and it resisted decipherment for fifty years. '
    'The obstacle was not the quantity of material but an assumption. The '
    'tablets were taken to record a language of the Aegean unrelated to '
    'Greek, on the ground that Greek arrived later, and the assumption was '
    'held by everybody competent to work on the problem.',
    'Michael Ventris proceeded in 1952 by internal evidence alone and by a '
    'method with no reference to meaning. A colleague had tabulated the '
    'signs by their distribution and had shown that certain groups appeared '
    'in the same positions with small variations at the end, which is what '
    'an inflected language looks like from outside. Ventris assigned '
    'provisional values to the signs of a few place names that had to appear '
    'on tablets from Crete, propagated the consequences through the grid, '
    'and obtained words. The words were Greek, five centuries earlier than '
    'any Greek anybody had expected.',
    'Two observations about the method have outlasted the result. The '
    'decipherment required no bilingual inscription of any kind, so the '
    'often repeated claim that a script cannot be read without one is false '
    'as a matter of record. And the fifty years of failure are attributable '
    'to a premise nobody had examined rather than to any want of ingenuity, '
    'which is the ordinary shape of such episodes: the industry had been '
    'solving a problem it had itself made insoluble, and a confirmation '
    'arrived in 1953 from a tablet excavated after the solution was '
    'published.',
]

TEST = dict(
    n=6,

    # ------------------------------------------------------------- READING --
    reading=[
        dict(
            gap_text=_G1, gap_ans=_A1,
            docs=[
                ('notice', 'Marchfield University · automated marking of '
                           'first-year coursework, from September', [
                    '# What is marked automatically',
                    'Short written answers of under 300 words in four first-year '
                    'modules, by a system trained on eleven years of marks '
                    'awarded by this department.',
                    '# What is not',
                    '* Any essay above 300 words, any resit, and any submission '
                    'from a student with an agreed adjustment.',
                    '# Checks',
                    '* A random one in ten submissions is marked again by a '
                    'member of staff, and the two marks are recorded.',
                    '* Where the two differ by more than one classification, the '
                    'human mark stands.',
                    '# Appeal',
                    '* Any student may require a human mark instead, once per '
                    'module, without giving a reason.',
                    '# Publication',
                    '* The distribution of automatic and human marks is published '
                    'each term.'],
                 'notice'),
                ('email',
                 'a.castellanos@marchfield.ac.uk',
                 'teaching@marchfield.ac.uk',
                 '14/06/2036',
                 'Automated marking — the safeguards are good and the '
                 'sample will not find the fault',
                 ['Dear colleagues,',
                  '',
                  'The appeal without a reason and the publication of both',
                  'distributions are better than anything our competitors have,',
                  'and I would not lose either.',
                  '',
                  'My objection is to the check. A random one in ten will tell',
                  'you whether the system agrees with us on average, which is',
                  'the question it is least likely to fail. The failure to',
                  'expect is a class of answer the system marks badly: the',
                  'short answer that is correct and unusual. Ten per cent of a',
                  'cohort of 600 is 60 submissions, of which perhaps two will',
                  'be unusual at all.',
                  '',
                  'I am not asking for the sample to be enlarged, which is',
                  'expensive and would still be random. I am asking for a',
                  'stratified one: every submission the system places in the',
                  'top and bottom deciles, plus one in twenty of the rest. On',
                  'last year’s figures that is 94 remarks rather than 60,',
                  'and it puts the staff time where the disagreements are.',
                  '',
                  'Araceli Castellanos, Director of Undergraduate Studies']),
            ],
            daily=[
                ('What is marked automatically?',
                 ('All first-year coursework',
                  'Short written answers under 300 words in four first-year '
                  'modules',
                  'Essays above 300 words',
                  'Resits only'), 1,
                 'The system was trained on eleven years of marks awarded by '
                 'the department itself.'),
                ('What is excluded from automatic marking?',
                 ('Nothing is excluded',
                  'Essays above 300 words, resits, and submissions from '
                  'students with an agreed adjustment',
                  'Only resits',
                  'First-year work in two modules'), 1,
                 'Three exclusions, each of them a case where the training '
                 'data would be thin.'),
                ('What happens where a human and an automatic mark differ by '
                 'more than one classification?',
                 ('The marks are averaged',
                  'The human mark stands',
                  'A third marker is appointed',
                  'The submission is remarked automatically'), 1,
                 'The notice gives the human mark priority only beyond that '
                 'threshold.'),
                ('What may a student require?',
                 ('A new module',
                  'A human mark instead, once per module, without giving a '
                  'reason',
                  'A copy of the training data',
                  'An appeal to the Senate'), 1,
                 'The appeal costs the student no explanation, which is the '
                 'clause the email praises.'),
                ('What is Araceli Castellanos’s objection?',
                 ('The safeguards are inadequate',
                  'A random sample will not find the fault she expects',
                  'The system should not be used at all',
                  'The publication is unnecessary'), 1,
                 'She expects the system to fail on correct but unusual '
                 'answers, which a random sample will rarely contain.'),
            ],
            passage=('The Hole Nobody Was Looking For', _P1,
                     sum(len(p.split()) for p in _P1)),
            academic=[
                ('Why had the satellite instruments missed the depletion?',
                 ('They were not yet in orbit',
                  'Their processing software treated values that low as '
                  'instrument error',
                  'They measured a different altitude',
                  'Their data were never examined'), 1,
                 'The ground station had no such filter, and its operators '
                 'looked at the numbers themselves.'),
                ('What had been predicted in 1974?',
                 ('The polar mechanism',
                  'That chlorine from industrial compounds would catalyse the '
                  'destruction of ozone',
                  'The timing of the spring loss',
                  'The magnitude of the depletion'), 1,
                 'The prediction preceded any measurement of a hole '
                 'whatever.'),
                ('What did nobody predict?',
                 ('The role of chlorine',
                  'The survival of the compounds',
                  'The polar mechanism, in which ice crystals provide '
                  'reaction surfaces',
                  'The ratification of the protocol'), 2,
                 'That mechanism liberates chlorine in a single fortnight of '
                 'spring.'),
                ('How was the 1974 prediction wrong?',
                 ('About the agent',
                  'About the magnitude, by an order',
                  'About the chemistry entirely',
                  'It was not wrong in any respect'), 1,
                 'It was correct about the agent and wrong about the size of '
                 'the effect.'),
                ('Why does the writer say the agreement succeeded?',
                 ('Because the science was complete',
                  'Because its authors assumed from the start that the '
                  'science would change',
                  'Because every state ratified it',
                  'Because the reductions were modest'), 1,
                 'The schedule was tightened four times as the measurements '
                 'improved.'),
            ],
        ),
        dict(
            gap_text=_G2, gap_ans=_A2,
            docs=[
                ('notice', 'Dunmorrow City Council · low emission zone, '
                           'charging from 1 April', [
                    '# The charge',
                    'Twelve pounds a day for any vehicle below the emissions '
                    'standard, between 07.00 and 19.00, seven days a week.',
                    '# Exemptions',
                    '* Vehicles registered to a resident of the zone, for two '
                    'years from the start date.',
                    '* Vehicles adapted for a disabled passenger, '
                    'indefinitely.',
                    '# Support',
                    '* A grant of up to £2,000 towards replacing a '
                    'non-compliant vehicle, for households below the median '
                    'income of the city.',
                    '# Enforcement',
                    '* Camera recognition at every entry point, with a penalty '
                    'of £90 for non-payment.',
                    '# Review',
                    '* The boundary and the charge are reviewed after three '
                    'years against measured air quality.'],
                 'notice'),
                ('email',
                 'j.okonkwo@dunmorrow.gov',
                 'cleanair@dunmorrow.gov',
                 '20/02/2037',
                 'Low emission zone — support for the charge, and the '
                 'grant threshold is a cliff',
                 ['Dear colleagues,',
                  '',
                  'The scheme is right and the resident exemption is the',
                  'sensible compromise. The camera enforcement is also right,',
                  'whatever the correspondence says.',
                  '',
                  'My objection is to the grant. A household one pound below',
                  'the median income receives two thousand pounds and a',
                  'household one pound above it receives nothing, and the two',
                  'are indistinguishable in every respect anybody can',
                  'observe. Of the 214 appeals against the scheme last year,',
                  '171 came from households within five per cent of the',
                  'median.',
                  '',
                  'I am not asking for the grant to be universal, which the',
                  'city cannot afford. I am asking for a taper: the full two',
                  'thousand pounds up to the median, reduced by one pound for',
                  'every three pounds of income above it, extinguished at a',
                  'quarter above the median. That costs an additional 340,000',
                  'pounds against a scheme of 11 million, and it removes the',
                  'case none of us can defend in public.',
                  '',
                  'Josephine Okonkwo, Air Quality Officer']),
            ],
            daily=[
                ('What is the charge, and when does it apply?',
                 ('Twelve pounds a day, 07.00 to 19.00, seven days a week',
                  'Twelve pounds a week, on weekdays',
                  'Ninety pounds a day',
                  'Two thousand pounds a year'), 0,
                 'It applies to any vehicle below the emissions standard '
                 'within those hours.'),
                ('Which exemption is time-limited?',
                 ('The exemption for adapted vehicles',
                  'The exemption for vehicles registered to a resident of the '
                  'zone',
                  'Both are time-limited',
                  'Neither is time-limited'), 1,
                 'The resident exemption runs for two years and the adapted '
                 'vehicle exemption indefinitely.'),
                ('Who may claim the replacement grant?',
                 ('Any resident of the zone',
                  'Households below the median income of the city',
                  'Households with an adapted vehicle',
                  'Nobody; the grant was withdrawn'), 1,
                 'The grant is up to two thousand pounds towards replacing a '
                 'non-compliant vehicle.'),
                ('What is the penalty for non-payment?',
                 ('Twelve pounds', 'Ninety pounds', 'Two thousand pounds',
                  'A warning on the first occasion'), 1,
                 'Enforcement is by camera recognition at every entry point '
                 'to the zone.'),
                ('What does Josephine Okonkwo propose?',
                 ('A universal grant',
                  'A taper on the grant above the median income',
                  'A lower daily charge',
                  'An extension of the resident exemption'), 1,
                 'Full grant to the median, then a pound less for every three '
                 'pounds above it.'),
            ],
            passage=('The Script That Turned Out to Be Greek', _P2,
                     sum(len(p.split()) for p in _P2)),
            academic=[
                ('What does the writer say the obstacle to decipherment was?',
                 ('The quantity of material',
                  'An assumption, held by everybody competent to work on the '
                  'problem',
                  'The condition of the tablets',
                  'The absence of place names'), 1,
                 'The tablets were taken to record a language unrelated to '
                 'Greek.'),
                ('What had a colleague shown before Ventris began?',
                 ('That the language was Greek',
                  'That certain sign groups appeared in the same positions '
                  'with small variations at the end',
                  'That the tablets came from Crete',
                  'That no bilingual text existed'), 1,
                 'Which is what an inflected language looks like from '
                 'outside.'),
                ('How did Ventris proceed?',
                 ('From a bilingual inscription',
                  'By assigning provisional values to the signs of place '
                  'names and propagating the consequences',
                  'By comparison with Egyptian',
                  'By guessing at the meanings of whole tablets'), 1,
                 'The method made no reference to meaning at the start at '
                 'all.'),
                ('What was unexpected about the result?',
                 ('The tablets were administrative',
                  'The words were Greek, five centuries earlier than any Greek '
                  'anybody had expected',
                  'The script was alphabetic',
                  'The signs were pictorial'), 1,
                 'The assumption had been that Greek arrived later.'),
                ('What does the writer say the fifty years of failure are '
                 'attributable to?',
                 ('A want of ingenuity',
                  'The loss of the tablets',
                  'A premise nobody had examined',
                  'The absence of a bilingual text'), 2,
                 'The industry had been solving a problem it had itself made '
                 'insoluble.'),
            ],
        ),
    ],

    # ----------------------------------------------------------- LISTENING --
    listening=[
        dict(
            warm=[
                ('Woman: Is all my coursework marked by the machine now?',
                 ('Only the short answers, in four modules.',
                  'Yes, all of it.', 'None of it.', 'Eleven years.'), 0,
                 'Essays above three hundred words and resits are excluded '
                 'from the scheme.'),
                ('Woman: Can I ask for a person instead?',
                 ('Once per module, and you need not say why.',
                  'No, never.', 'Yes, every time.',
                  'One in ten.'), 0,
                 'The appeal is available once and costs the student no '
                 'explanation.'),
                ('Man: What happens if the two marks disagree badly?',
                 ('The human mark stands.', 'They are averaged.',
                  'A third marker is found.', 'Nothing happens.'), 0,
                 'Beyond a difference of one classification the human mark '
                 'takes priority.'),
                ('Man: How many get marked twice?',
                 ('One in ten, chosen at random.', 'All of them.',
                  'None of them.', 'Sixty per cent.'), 0,
                 'Which is the figure the director of studies says will miss '
                 'the fault.'),
                ('Woman: Why will a random sample miss it?',
                 ('Because the answers it marks badly are rare.',
                  'Because the sample is too large.',
                  'Because nobody checks it.', 'Two thousand pounds.'), 0,
                 'A correct but unusual answer will hardly appear in sixty '
                 'submissions.'),
                ('Woman: Does the grant apply to me?',
                 ('Only below the median income, at present.',
                  'Yes, to everybody.', 'No, it has been withdrawn.',
                  'Ninety pounds.'), 0,
                 'The grant is confined to households below the median income '
                 'of the city.'),
                ('Man: What is wrong with the income threshold?',
                 ('A pound either side of it decides two thousand pounds.',
                  'Nothing at all.', 'It is set too low.',
                  'Three years.'), 0,
                 'Two indistinguishable households are treated as '
                 'opposites.'),
                ('Man: And the proposed remedy?',
                 ('A taper, running out a quarter above the median.',
                  'A universal grant.', 'A lower charge.',
                  'Camera enforcement.'), 0,
                 'A pound off the grant for every three pounds of income '
                 'above the median.'),
            ],
            convos=[
                ([('Man', 'Did you get your first-year mark back?'),
                  ('Woman', 'Sixty-two, and I have no idea whether a person '
                            'read it.'),
                  ('Man', 'Does it say?'),
                  ('Woman', 'No, and that is the only thing in the scheme I '
                            'actually mind about. I do not object to the '
                            'machine. I object to not knowing which of the '
                            'two I am arguing with if I appeal.'),
                  ('Man', 'You can ask for a human mark anyway, once per '
                          'module.'),
                  ('Woman', 'I can, and if I use it on a script a person '
                            'already marked I have spent it for nothing. '
                            'There are six hundred of us in that module and '
                            'one appeal each. The information is free for '
                            'them to give and it decides whether the appeal '
                            'is worth using.'),
                  ('Man', 'Have you written to anybody?'),
                  ('Woman', 'The students’ union has, and the '
                            'department has more or less agreed to put a '
                            'line on the feedback form saying which marker '
                            'produced the figure. That is a single line and '
                            'it costs nothing, which is why it is the one '
                            'thing we asked for.')],
                 [('What does the woman say she does not object to?',
                   ('The appeal procedure', 'The machine marking her work',
                    'The mark she received', 'The size of the module'), 1,
                   'Her complaint is about not knowing which marker produced '
                   'the figure.'),
                  ('Why does the missing information matter to her?',
                   ('It affects her mark',
                    'Using the appeal on a script a person already marked '
                    'spends it for nothing',
                    'It delays the feedback',
                    'It is required by regulation'), 1,
                   'Each student in a cohort of six hundred has one appeal '
                   'per module.')]),
                ([('Woman', 'Twelve pounds a day from April, and we are '
                            'eleven hundred pounds short of the grant '
                            'threshold.'),
                  ('Man', 'Eleven hundred over the median.'),
                  ('Woman', 'Eleven hundred over, which means no grant, which '
                            'means two thousand pounds we do not have, '
                            'against a neighbour who is eleven hundred '
                            'under and gets all of it.'),
                  ('Man', 'That cannot be how it is meant to work.'),
                  ('Woman', 'It is exactly how it is meant to work, and the '
                            'officer who wrote the scheme says so herself. '
                            'She has put a taper to the committee: full '
                            'grant at the median, then a pound off for every '
                            'three pounds above it, nothing at all a quarter '
                            'above.'),
                  ('Man', 'What would that give us?'),
                  ('Woman', 'About one thousand six hundred, by my '
                            'arithmetic. And it costs the city three hundred '
                            'and forty thousand on a scheme of eleven '
                            'million, which is the number worth quoting at '
                            'the meeting rather than ours.')],
                 [('Why does the household receive no grant?',
                   ('It lives outside the zone',
                    'Its income is eleven hundred pounds above the median',
                    'It has an adapted vehicle',
                    'It applied too late'), 1,
                   'A neighbour eleven hundred pounds under the median '
                   'receives the whole two thousand.'),
                  ('Which figure does the woman say is worth quoting at the '
                   'meeting?',
                   ('The one thousand six hundred they would receive',
                    'The three hundred and forty thousand the taper costs '
                    'against a scheme of eleven million',
                    'The twelve pounds a day',
                    'The eleven hundred pounds'), 1,
                   'She prefers the cost of the remedy to the cost to her own '
                   'household.')]),
            ],
            poster=['Automatic marking: short answers, four modules',
                    'One in ten remarked by staff · human mark stands',
                    'Appeal: one per module, no reason required'],
            announce=([('Woman',
                        'Two things about the marking scheme, and then the '
                        'change we have agreed. The first is what the '
                        'scheme covers, because there is a rumour that it '
                        'covers everything and it does not. Short answers, '
                        'under three hundred words, in four first-year '
                        'modules. Not essays, not resits, and not anybody '
                        'with an agreed adjustment. The second is the check. '
                        'One submission in ten is marked again by a member '
                        'of staff and both marks go on the record, and where '
                        'the two differ by more than one classification the '
                        'human mark is the one that stands. Now, the change. '
                        'Dr Castellanos has argued, and the teaching '
                        'committee has accepted, that a random one in ten '
                        'will tell us whether the system agrees with us on '
                        'average and nothing about where it fails. So from '
                        'September the sample is stratified: every '
                        'submission the system puts in the top or bottom '
                        'tenth is remarked, plus one in twenty of '
                        'everything else. That is ninety-four remarks on '
                        'last year’s figures rather than sixty, and it '
                        'puts the staff time where the disagreements '
                        'actually are. And the union has asked for one '
                        'further line, which we are putting on the feedback '
                        'form: whether your mark was produced by the system '
                        'or by a person.')],
                      [('What rumour does the speaker correct?',
                        ('That the scheme has been withdrawn',
                         'That the scheme covers everything',
                         'That appeals are not allowed',
                         'That marks are published'), 1,
                        'It covers short answers under three hundred words in '
                        'four first-year modules.'),
                       ('What will the stratified sample do?',
                        ('Reduce the number of remarks',
                         'Remark everything in the top and bottom tenth, plus '
                         'one in twenty of the rest',
                         'Replace the human marker',
                         'Abolish the appeal'), 1,
                        'Ninety-four remarks rather than sixty, on last '
                        'year’s figures.')]),
            board=['1985: Halley Bay · the hole reported from the ground',
                   'Satellites had it and discarded it as error',
                   '1974: the chemistry predicted, the magnitude not',
                   '1987: a protocol written to be amended'],
            talk=([('Man',
                    'A discovery that was sitting in a database for several '
                    'years, and what it tells you about instruments. In 1985 '
                    'a British team at Halley Bay in Antarctica published '
                    'measurements showing that the ozone above them had '
                    'fallen by something like a third in spring. Now, the '
                    'satellites had been measuring the same thing from orbit '
                    'for years, with far better coverage, and they had the '
                    'hole in their data the whole time. The processing '
                    'software threw those readings away, because somebody '
                    'had quite sensibly written a filter that treated values '
                    'that low as instrument failure. The ground station had '
                    'no filter, because it had no software, because three '
                    'people were reading the numbers off an instrument. '
                    'Second part. The chemistry had been published in 1974, '
                    'eleven years before anybody measured a hole: chlorine '
                    'from industrial compounds survives all the way up to '
                    'the stratosphere, ultraviolet light breaks the '
                    'compounds apart, and the chlorine then destroys ozone '
                    'catalytically, which means it is not used up and one '
                    'atom goes round the cycle thousands of times. What '
                    'nobody had predicted was the polar part. In the '
                    'Antarctic winter you get ice crystals high in the '
                    'stratosphere, and the surfaces of those crystals host a '
                    'reaction that stores the chlorine up and then releases '
                    'it all at once when the sun returns. So the 1974 '
                    'prediction was right about the agent and wrong about '
                    'the size by a factor of about ten. Third part, and it '
                    'is the one I want you to keep. The Montreal Protocol '
                    'was signed in 1987, when the science was known to be '
                    'incomplete, and its schedule was tightened four times '
                    'afterwards. It is the only environmental treaty every '
                    'country has ratified, and the reason it worked is that '
                    'it was drafted on the assumption that it would have to '
                    'be amended.')],
                  [('Why did the satellites miss the hole?',
                    ('They were not measuring ozone',
                     'A filter treated values that low as instrument failure',
                     'Their coverage was poor',
                     'The data were never processed'), 1,
                    'Somebody had sensibly written the filter, and the ground '
                    'station had none.'),
                   ('What does catalytically mean, as the lecturer uses it?',
                    ('The chlorine is used up',
                     'The chlorine is not used up and goes round the cycle '
                     'thousands of times',
                     'The reaction needs sunlight',
                     'The reaction happens on ice'), 1,
                    'Which is why a small quantity of chlorine does so much '
                    'damage.'),
                   ('What had nobody predicted in 1974?',
                    ('The role of chlorine',
                     'The polar mechanism, in which ice crystals store the '
                     'chlorine and release it in spring',
                     'The ratification of the treaty',
                     'The behaviour of ultraviolet light'), 1,
                    'The prediction was accordingly wrong about the size by a '
                    'factor of about ten.'),
                   ('Why does the lecturer say the protocol worked?',
                    ('The science was settled before it was signed',
                     'It was drafted on the assumption that it would have to '
                     'be amended',
                     'Every country wanted it',
                     'The reductions were small'), 1,
                    'Its schedule was tightened on four occasions '
                    'afterwards.')]),
        ),
        dict(
            warm=[
                ('Woman: Is twelve pounds a day a lot?',
                 ('For somebody driving to work, it is three thousand a '
                  'year.',
                  'No, it is nothing.', 'Yes, ninety pounds.',
                  'From April.'), 0,
                 'The figure matters only against the income of whoever is '
                 'paying it.'),
                ('Woman: Did the tablets have a translation beside them?',
                 ('No. That is the remarkable part.',
                  'Yes, in Egyptian.', 'Only at Pylos.',
                  'Five thousand tablets.'), 0,
                 'The decipherment required no bilingual inscription of any '
                 'kind.'),
                ('Man: Why did it take fifty years?',
                 ('Everybody assumed the language could not be Greek.',
                  'The tablets were lost.', 'Nobody tried.',
                  'In 1952.'), 0,
                 'The premise was held by everybody competent to work on the '
                 'problem.'),
                ('Man: What did Ventris start from?',
                 ('Place names that had to appear on tablets from Crete.',
                  'A bilingual text.', 'A dictionary.',
                  'The grid.'), 0,
                 'He assigned provisional values and propagated the '
                 'consequences.'),
                ('Woman: So a score tells you where you stand?',
                 ('In a stated group, and nothing more than that.',
                  'It tells you a quantity.', 'It tells you nothing.',
                  'Half a band.'), 0,
                 'A score is an inference about standing rather than a '
                 'measurement.'),
                ('Woman: My reading is half a band above his.',
                 ('That is inside the error. It is not a difference.',
                  'Then you read better.', 'Yes, considerably.',
                  'Four sections.'), 0,
                 'The standard error for a single section is about half a '
                 'band.'),
                ('Man: Which section should I work on?',
                 ('The lowest one, because it sets your overall band.',
                  'All of them equally.', 'The best one.',
                  'Eight weeks.'), 0,
                 'At the top of the scale the weakest section decides the '
                 'average.'),
                ('Man: Does the test change how people teach?',
                 ('It changes it to whatever the test samples.',
                  'No, not measurably.', 'Only in schools.',
                  'Five topics.'), 0,
                 'Washback follows the sample rather than the construct.'),
            ],
            convos=[
                ([('Woman', 'You sat the full form on Saturday. How was it?'),
                  ('Man', 'Five and a half, which I am trying not to be '
                          'pleased about.'),
                  ('Woman', 'Read me the four.'),
                  ('Man', 'Reading six, listening six, writing six, speaking '
                          'four and a half.'),
                  ('Woman', 'Then you are not a five and a half candidate. '
                            'You are a six candidate with a speaking '
                            'problem, and those are different things to '
                            'spend eight weeks on.'),
                  ('Man', 'I thought I would do a bit of everything.'),
                  ('Woman', 'That is the expensive mistake. Three of those '
                            'four are already where you need them, and work '
                            'on any of the three moves your average by '
                            'nothing at all, because the average is held '
                            'down by the fourth.'),
                  ('Man', 'Eight weeks of nothing but speaking sounds '
                          'grim.'),
                  ('Woman', 'It is four hours a week of talking out loud, '
                            'recorded, with the five-cycle sentences from '
                            'the units you skipped. And you will not do it, '
                            'because everybody prefers reading, which is why '
                            'everybody sits the test twice.')],
                 [('What does the woman say he is?',
                   ('A five and a half candidate',
                    'A six candidate with a speaking problem',
                    'A candidate who should resit immediately',
                    'A reading candidate'), 1,
                   'His other three sections are already at six.'),
                  ('Why does she call doing a bit of everything expensive?',
                   ('It takes more hours',
                    'Work on the three strong sections moves the average by '
                    'nothing',
                    'It costs more in fees',
                    'The sections are equally weighted'), 1,
                   'The average is held down by the weakest '
                   'section.')]),
            ],
            poster=['Low emission zone from 1 April',
                    '£12 a day · 07.00–19.00 · seven days',
                    'Grant to £2,000 below the median income'],
            announce=([('Man',
                        'Three points about the zone and then the amendment. '
                        'The charge is twelve pounds a day for a '
                        'non-compliant vehicle, seven in the morning to '
                        'seven at night, every day of the week. Residents of '
                        'the zone are exempt for two years and adapted '
                        'vehicles indefinitely, and there is a grant of up '
                        'to two thousand pounds towards a replacement for '
                        'households below the median income of this city. '
                        'Now the amendment, and it comes from our own air '
                        'quality officer rather than from the '
                        'correspondence. A household a pound below the '
                        'median gets two thousand pounds and a household a '
                        'pound above it gets nothing, and of the two hundred '
                        'and fourteen appeals we received last year, a '
                        'hundred and seventy-one came from households within '
                        'five per cent of that line. So the grant becomes a '
                        'taper: the full two thousand at the median, a pound '
                        'off for every three pounds of income above it, and '
                        'nothing at all a quarter above the median. Three '
                        'hundred and forty thousand pounds on a scheme of '
                        'eleven million. I am recommending it, and I want '
                        'the committee to notice that it refuses nobody who '
                        'qualifies today.')],
                      [('How many of last year’s appeals came from near '
                        'the threshold?',
                        ('All two hundred and fourteen',
                         'A hundred and seventy-one, from within five per '
                         'cent of the median',
                         'Three hundred and forty',
                         'None of them'), 1,
                        'Which is the evidence that the cliff is where the '
                        'trouble lies.'),
                       ('What does the speaker ask the committee to notice?',
                        ('That the taper is cheap',
                         'That it refuses nobody who qualifies today',
                         'That the charge is unchanged',
                         'That appeals will fall'), 1,
                        'Three hundred and forty thousand pounds on a scheme '
                        'of eleven million.')]),
            board=['A score is an inference, not a quantity',
                   'Reliability: does it repeat? Validity: is the inference '
                   'warranted?',
                   'Standard error ≈ half a band for one section',
                   'Washback follows what is sampled'],
            talk=([('Man',
                    'The last lecture of the course, and it is about the '
                    'number you are about to be given. A score is not a '
                    'quantity of anything. It is an inference about where '
                    'you stand in a stated group, which is why moving the '
                    'group moves the number without touching the candidate, '
                    'and why the Americans were accused of making their '
                    'admissions test easier in 1995 when all they had done '
                    'was stop comparing a modern candidate with a cohort of '
                    'schoolboys from 1941. Second thing, and the one people '
                    'confuse. Reliability is whether the number repeats: '
                    'same candidate, second form, different marker. '
                    'Validity is whether the number licenses the inference '
                    'somebody is about to draw. They are not the same, and '
                    'the proof is that I can give you a perfectly reliable '
                    'test of nothing by measuring the length of your '
                    'forearm. Third, the figure nobody quotes at you. The '
                    'standard error for a single section of a band scale is '
                    'about half a band, which means two candidates half a '
                    'band apart are not in an order and never were. Stop '
                    'comparing. And fourth, the one that decides what you '
                    'do next. Any test that matters reorganises the '
                    'teaching in front of it, and it does so according to '
                    'what the test samples rather than what the test claims '
                    'to measure. You cannot prevent that. What you can do '
                    'is make sure the thing being rehearsed is worth '
                    'rehearsing, which for you means this: learn what the '
                    'test is sampling. Somebody who can do that has learnt '
                    'the language, and somebody who has learnt the format '
                    'has learnt the format and will discover it in the first '
                    'week of a degree.')],
                  [('What does the lecturer say a score is?',
                    ('A quantity of ability',
                     'An inference about where you stand in a stated group',
                     'A prediction of success',
                     'A measurement in units'), 1,
                    'Moving the group moves the number without touching the '
                    'candidate.'),
                   ('What happened in 1995, on his account?',
                    ('The test was made easier',
                     'The comparison stopped being made against a cohort of '
                     '1941',
                     'The questions were changed',
                     'The scale was abolished'), 1,
                    'The accusation of easing the test followed the '
                    'recentring.'),
                   ('What does the forearm example prove?',
                    ('That measurement is unreliable',
                     'That a perfectly reliable test may license no inference '
                     'at all',
                     'That markers disagree',
                     'That validity is easy'), 1,
                    'Reliability is repetition and validity is about the '
                    'inference.'),
                   ('What does he say you can do about washback?',
                    ('Prevent it',
                     'Make sure the thing being rehearsed is worth '
                     'rehearsing',
                     'Ignore it',
                     'Report it'), 1,
                    'Learn what the test is sampling rather than the '
                    'format.')]),
        ),
    ],

    # ------------------------------------------------------------- WRITING --
    writing=dict(
        build=[
            ('Short answers under three hundred words are marked '
             'automatically.',
             ['do', 'you', 'know', 'what', 'the', 'system', 'was', 'trained',
              'on'],
             'Do you know what the system was trained on?'),
            ('One submission in ten is marked again by a member of staff.',
             ['is', 'that', 'sample', 'random', 'or', 'chosen', 'from', 'the',
              'extreme', 'deciles'],
             'Is that sample random, or chosen from the extreme deciles?'),
            ('A student may require a human mark once per module.',
             ['does', 'the', 'feedback', 'say', 'which', 'marker', 'produced',
              'the', 'figure'],
             'Does the feedback say which marker produced the figure?'),
            ('The grant is paid to households below the median income.',
             ['what', 'happens', 'to', 'a', 'household', 'a', 'pound',
              'above', 'that', 'line'],
             'What happens to a household a pound above that line?'),
            ('The satellites had the hole in their data for years.',
             ['why', 'did', 'nobody', 'look', 'at', 'the', 'readings', 'the',
              'filter', 'removed'],
             'Why did nobody look at the readings the filter removed?'),
            ('The 1974 prediction named the agent correctly.',
             ['was', 'anything', 'about', 'the', 'magnitude', 'predicted',
              'at', 'the', 'same', 'time'],
             'Was anything about the magnitude predicted at the same time?'),
            ('Ventris worked without any bilingual inscription.',
             ['can', 'you', 'tell', 'me', 'what', 'he', 'started', 'from',
              'instead', 'of', 'one'],
             'Can you tell me what he started from instead of one?'),
            ('Two candidates are half a band apart in reading.',
             ['is', 'half', 'a', 'band', 'larger', 'than', 'the',
              'published', 'standard', 'error'],
             'Is half a band larger than the published standard error?'),
            ('The department publishes both distributions each term.',
             ['I', 'would', 'like', 'to', 'know', 'whether', 'anybody',
              'reads', 'them', 'afterwards'],
             'I would like to know whether anybody reads them afterwards.'),
            ('A taper replaces the cliff at the median income.',
             ['the', 'worst', 'loss', 'at', 'the', 'boundary', 'becomes',
              'a', 'few', 'pence'],
             'The worst loss at the boundary becomes a few pence.'),
        ],
        email=dict(
            to='teaching@marchfield.ac.uk',
            date='21/06/2036',
            subject='Automated marking — the union supports the '
                    'stratified sample, and one further request',
            scenario=['You are education officer of the students’ '
                      'union. The department has accepted that the remarking '
                      'sample should be stratified rather than random, and '
                      'has agreed to put one line on the feedback form saying '
                      'which marker produced the figure. You accept the '
                      'correction to your own figures: the cohort is 600 and '
                      'not 800, so the random sample was 60 submissions and '
                      'not 80. You want both changes, and you want one '
                      'further thing the department has not mentioned: that '
                      'the appeal, once used, should not be counted as used '
                      'where the original mark turns out to have been a human '
                      'one.',
                      'Write an email to the teaching office, copied to the '
                      'union.'],
            bullets=['Accept the correction to your figures, briefly and '
                     'without retreating from the complaint.',
                     'Support the stratified sample and the line on the '
                     'feedback form, with what each is worth to students.',
                     'Ask for the appeal not to be spent on a script a person '
                     'had already marked, with the reason.'],
        ),
        disc=dict(
            prof='Dr Achterberg',
            question='A national examination board proposes to report four '
                     'section bands and no overall figure at all, on the '
                     'ground that an average conceals the section that '
                     'decides everything and invites comparisons inside the '
                     'error of measurement. Supporters say institutions will '
                     'adapt and that the figure they lose was never '
                     'meaningful. Opponents say every institution will build '
                     'its own average, unpublished and inconsistent, and that '
                     'candidates will be worse off than under an imperfect '
                     'number everybody can see. Should the overall band be '
                     'abolished?',
            posts=[('Perpetua', 'w', 'Abolish it. The average is the one '
                                     'figure on that report which tells a '
                                     'candidate nothing she can act on, and '
                                     'it is the only one anybody looks at.'),
                   ('Raphael', 'm', 'Then four hundred admissions offices '
                                    'will each invent a weighting over a '
                                    'weekend, and not one of them will '
                                    'publish it or be answerable for it.')],
        ),
    ),

    # ------------------------------------------------------------ SPEAKING --
    speaking=dict(
        repeat=['A score is an inference, not a quantity.',
                'The satellites had the hole and threw it away.',
                'Half a band is inside the error of measurement.',
                'Ventris had no bilingual text of any kind.',
                'A taper has two ends, so the objection returns at both.',
                'Your weakest section is the one setting your overall band.',
                'Learn the thing the test is sampling, because somebody who '
                'can do that has learnt the language.'],
        interview=('a study of how people read the numbers they are given',
                   ['Thank you for taking part today. I am calling about a '
                    'study of how people read the numbers they are given. To '
                    'begin, could you tell me about a score or a result that '
                    'mattered to you, and what you did with it?',
                    'Thinking about a rule that turns on a single figure '
                    '— an income, an age, a mark — who do you '
                    'think pays most for where that figure is set, and why?',
                    'Some people say that if a careful study finds no effect, '
                    'there is no effect to find. How far would you agree?',
                    'Finally, describe something you learnt only because an '
                    'examination required it, and say whether you have kept '
                    'it.']),
    ),
)
