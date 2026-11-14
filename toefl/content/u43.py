# -*- coding: utf-8 -*-
"""Unit 43 — Infrastructure and Maintenance.

Cycle 4 establishes the shape of the deterioration curve: an intact
surface excludes water, a three-millimetre crack admits it, and the
cost of intervention runs from about fifteen pounds a square metre to
between eighty and a hundred and twenty once the base is saturated,
so deferral is a borrowing at a rate nobody states. Cycle 5 accepts
every figure and relocates the obstacle in the vote: annuality, the
separation of capital from revenue, and the invisibility of
prevention, none of which any amount of engineering knowledge
touches. Its remedy is an accounting change rather than a campaign,
on the evidence that thirty years of campaigning produced the
present position."""

UNIT = {'n': 43,
 'vol': 5,
 'level': 'B2',
 'title': 'Infrastructure and Maintenance',
 'grammar': 'Marked theme and given-new ordering',
 'field': 'asset, backlog, deferral',
 'opener_line': 'This unit is about why things that everybody knows how to look after are not '
                'looked after. The engineering is settled, the arithmetic is published annually '
                'and free to read, and the obstacle turns out to be in the way money is voted — '
                'which makes this a unit about budgets wearing the clothes of a unit about '
                'bridges.',
 'subs': ['Reporting a fault', 'What a backlog actually is', 'Renewal and the cost of waiting'],
 'icons': ['hammer', 'chart', 'city'],
 'acad': [('appraise', 'to judge the worth or condition of something'),
          ('albeit', 'although; used to attach a short qualification'),
          ('confer', 'to grant something; also to consult together'),
          ('confine', 'to keep within limits'),
          ('contingent', 'depending on something else happening'),
          ('converge', 'to come together towards one point'),
          ('convey', 'to carry, or to communicate'),
          ('consecutive', 'following one after another with no gap'),
          ('circumvent', 'to get round an obstacle rather than through it'),
          ('candidate', 'one of the things being considered'),
          ('behalf', 'in the interest of somebody else'),
          ('auxiliary', 'additional, and brought in to support'),
          ('concurrent', 'running at the same time as something else'),
          ('culminate', 'to reach the point everything was leading to')],
 'fieldwords': [('asset', 'a physical thing an authority owns and must keep up'),
                ('backlog', 'work that should have been done and has not been'),
                ('renewal', 'the replacement of an asset at the end of its life'),
                ('deterioration', 'the worsening of condition over time'),
                ('intervention', 'any work done to an asset to arrest decline'),
                ('appropriation', 'the setting aside of money by a formal vote'),
                ('capital', 'money voted for building; distinct from running costs'),
                ('culvert', 'a pipe carrying a watercourse under a road'),
                ('resurfacing', 'the laying of a new wearing course on a road'),
                ('defect', 'a specific recorded fault in an asset'),
                ('serviceability', 'whether an asset can still do its job'),
                ('lifecycle', 'the whole span from construction to replacement'),
                ('carriageway', 'the part of a road vehicles travel on'),
                ('saturated', 'with every space in the material full of water'),
                ('remediation', 'work to put right damage already done'),
                ('deferral', 'the putting off of work to a later year')],
 'collocs': [('condition survey', 'a formal inspection of the whole stock'),
             ('whole-life cost', 'everything an asset costs from build to replacement'),
             ('planned maintenance', 'work scheduled before anything fails'),
             ('reactive repair', 'work done because something has failed'),
             ('on a cycle', 'repeated at a fixed interval'),
             ('bring forward', 'to do earlier than planned'),
             ('out of service', 'closed and not in use'),
             ('a weight restriction', 'a limit on what may cross'),
             ('in-year saving', 'money not spent this financial year'),
             ('the revenue budget', 'the money for running and repairing')],
 'stance': [('as things stand', 'the writer limits a claim to now'),
            ('nobody seriously disputes', 'marking the agreed ground'),
            ('for all practical purposes', 'true enough to act on'),
            ('it is tempting to suppose', 'a reading the writer will refuse'),
            ('to put it bluntly', 'the writer drops the hedging on purpose')],
 'nuance': [('maintenance / renewal', 'keeping it going / replacing it'),
            ('capital / revenue', 'money to build / money to run and repair'),
            ('defect / failure', 'a recorded fault / the asset stops working')],
 'candos': ['I can read a condition survey and say what it commits an authority to.',
            'I can put the known part of a sentence first and the new part last.',
            'I can explain why deferring work can cost more than doing it.',
            'I can separate a budgeting problem from a knowledge problem.',
            'I can write an email that offers a decision rather than a complaint.',
            'I can say bluntly what I have been hedging, once, for effect.'],
 'vocab_talk': ['Describe something near you that is visibly not maintained.',
                'What is the difference between maintenance and renewal?',
                'Why might an authority know the cheaper course and not take it?',
                'Name a repair that was put off and became more expensive.'],
 'again': ['intermittent',
           'threshold',
           'provision',
           'statutory',
           'timescale',
           'apportioning',
           'distribution',
           'tenure'],
 'family': ('maintain',
            [('maintenance', 'noun', 'the maintenance budget was cut in three consecutive years'),
             ('maintainable',
              'adjective',
              'the design is not maintainable without a road closure'),
             ('unmaintained', 'adjective', 'eleven unmaintained culverts failed in one night')]),
 'r1': {'sub': 'Reporting a fault',
        'skill': ('Endings on nouns of difference and process',
                  ['Nouns of difference take -ence or -ance; nouns of process take -ation, -ment '
                   'or -ing.',
                   'Adjectives from nouns take -ous, -ical or -ate.',
                   'Read the article and the preposition around the gap before you choose.']),
        'guided_text': 'Reporting a fault is a skill and most people do it badly, which is why '
                       'nothing happens. A report that says the path is danger--- gives an '
                       'engineer nothing to act on. A report that gives the locat---, the size '
                       'of the defect and the date you saw it can be put straight into a work '
                       'order. Photographs help, provided there is something in them for scale: '
                       'a coin, a pen, a shoe. And keep the reference number, because the system '
                       'is organ---- by number and a second report about the same hole creates a '
                       'duplic--- rather than urgency. None of this is complic----. It is simply '
                       'not what anybody does when they are annoyed.',
        'guided': ['ous', 'ion', 'ised', 'ate', 'ated'],
        'guided_hint': 'danger--- is dangerous — the slot follows says the path is, so it needs '
                       'an adjective.',
        'exam_text': 'A backlog is not a list of things that are broken. It is the differ---- '
                     'between the work an authority has decided its assets need and the work it '
                     'has fund--, which makes it a figure about budgets rather than about '
                     'bridges. Two authorities with ident---- roads can report backlogs that '
                     'differ by a factor of three, because one has assess-- its stock recently '
                     'and the other has not, and an unsurveyed asset contrib---- nothing to the '
                     'total. This is worth understand--- before the figure is used in an '
                     'argument. A rising backlog can mean deter--------, and it can equally mean '
                     'that somebody has finally carried out a proper survey, which is an '
                     'improv----- in knowledge presented in the newspapers as a collapse in '
                     'condition. The honest way to read the number is as a measur----- of how '
                     'much has been promi--- rather than of how bad anything actually is.',
        'exam': ['ence', 'ed', 'ical', 'ed', 'utes', 'ing', 'ioration', 'ement', 'ement', 'sed']},
 'r2': {'sub': 'What a backlog actually is',
        'skill': ('Reading a survey summary against a press report',
                  ['A survey reports what it measured. A press report usually drops the '
                   'condition the figure was obtained under.',
                   'Look for how much of the stock was actually inspected.',
                   'A question about the rise wants the two explanations kept apart.']),
        'docs': [('notice',
                  'Marchfield District · highway asset condition survey, summary for 2029',
                  ['# Coverage',
                   '* 100 per cent of the carriageway network, inspected in 2029.',
                   '* 100 per cent of road bridges, principal inspection within six years.',
                   '* 64 per cent of culverts. The remaining 36 per cent have no record of '
                   'inspection since 2011.',
                   '# Reported backlog',
                   '* 2028: 7.1 million pounds. 2029: 11.4 million pounds.',
                   '* 3.8 million of the increase is culverts inspected for the first time in '
                   'eighteen years.',
                   '# Note on the figure',
                   '* The backlog is the difference between identified need and funded '
                   'programme. An asset that has not been inspected contributes nothing to it.',
                   '# Programme',
                   '* Resurfacing on a 14-year cycle against a design life of 20 years for the '
                   'surfaces concerned.'],
                  'notice'),
                 ('social',
                  'Marchfield Echo',
                  '@marchfield_echo',
                  ['ROADS CRISIS: council admits repair backlog has risen by 60 PER',
                   'CENT in a single year, from 7.1m to 11.4m.',
                   '',
                   'Opposition leader Cllr Dray: "This is the clearest possible',
                   'evidence of a decade of neglect. Residents can see the state of',
                   'our roads for themselves."',
                   '',
                   'The council said the figure reflected "improved survey coverage"',
                   'and declined to comment further.'],
                  'h')],
        'guided': [('What proportion of culverts was inspected?',
                    ('All of them', '64 per cent', '36 per cent', 'None since 2011'),
                    1,
                    'The remaining 36 per cent have no record of inspection since 2011.'),
                   ('What is the backlog, according to the notice?',
                    ('The cost of all repairs needed',
                     'The difference between identified need and funded programme',
                     'The value of the asset stock',
                     'The number of recorded defects'),
                    1,
                    'Which is why an uninspected asset contributes nothing to it.'),
                   ('How much of the increase is newly inspected culverts?',
                    ('All of it', '3.8 million of it', 'None of it', '7.1 million of it'),
                    1,
                    'Out of a total rise of 4.3 million, which is most of it.'),
                   ('What does the resurfacing cycle compare with the design life?',
                    ('It is longer than the design life',
                     'It is shorter than the design life',
                     'They are the same',
                     'The design life is not given'),
                    1,
                    'A 14-year cycle against a 20-year design life, which means surfaces are '
                    'being replaced early.')],
        'exam': [('What does the newspaper report the rise as?',
                  ('An improvement in survey coverage',
                   'A 60 per cent rise in the repair backlog',
                   'A fall in condition',
                   'A funding announcement'),
                  1,
                  'The headline reports the arithmetic of the two figures and not what produced '
                  'it.'),
                 ('Is the newspaper’s figure wrong?',
                  ('Yes, the rise was smaller',
                   'No, the two figures are the ones in the notice',
                   'The notice gives no figures',
                   'It cannot be checked'),
                  1,
                  'Both numbers are accurate, which is what makes the case interesting.'),
                 ('What does Councillor Dray treat the figure as evidence of?',
                  ('Better surveying',
                   'A decade of neglect',
                   'Underfunding of culverts',
                   'A change of accounting'),
                  1,
                  'He reads a change in the measurement as a change in the thing measured.'),
                 ('Which part of the notice would most weaken his reading?',
                  ('The coverage of bridges',
                   'That 3.8 million of the rise is first-time culvert inspection',
                   'The resurfacing cycle',
                   'The 2028 figure'),
                  1,
                  'Nearly all of the increase is accounted for by new information rather than '
                  'new decay.'),
                 ('What does the council’s own response do?',
                  ('Explains the coverage point in full',
                   'Gives the phrase improved survey coverage and no explanation',
                   'Disputes the figures',
                   'Blames the previous administration'),
                  1,
                  'The phrase is correct and, without the culvert detail, unpersuasive.'),
                 ('What would a complete account of the rise need?',
                  ('The asset values',
                   'The split between new inspection and real deterioration',
                   'A list of defects',
                   'The funding settlement'),
                  1,
                  'Those are the two candidate explanations and the notice separates them.'),
                 ('What does this exchange show about a backlog figure?',
                  ('It is always exaggerated',
                   'It depends on how much has been inspected',
                   'It cannot be compared between years',
                   'It measures condition directly'),
                  1,
                  'An uninspected asset contributes nothing, so coverage and condition move the '
                  'same number.')]},
 'r3': {'sub': 'Renewal and the cost of waiting',
        'title': 'The Bridge That Could Be Rebuilt But Not Painted',
        'words': 280,
        'skill': ('Reading a case about rules rather than about engineering',
                  ['The obstacle is administrative. Find the rule that produces it.',
                   'Two budgets behave differently. Keep straight which pays for what.',
                   'A question about the outcome wants the sequence of decisions.']),
        'paras': ['A steel bridge in a northern English county was inspected in 2014 and found '
                  'to need repainting, a job then costed at 180,000 pounds. The authority did '
                  'not have the money in its revenue budget, which pays for running and '
                  'repairing, and nothing in the rules allowed the use of capital, which pays '
                  'for building and replacing. Repainting is maintenance. The application was '
                  'therefore refused, correctly, by officers who could see exactly what was '
                  'coming, and as things stand nothing in the rules has changed since.',
                  'Corrosion under a failing paint system is not slow. By 2019 two main girders '
                  'had lost enough section to require a weight restriction, by 2022 the '
                  'restriction had tightened to three and a half tonnes, and in 2024 the '
                  'structure was replaced at a cost of 4.1 million pounds. The replacement was '
                  'funded from capital, without difficulty, because a new bridge is a capital '
                  'asset. For all practical purposes the authority was permitted to spend four '
                  'million pounds and forbidden to spend a hundred and eighty thousand, and no '
                  'individual in the story behaved improperly at any point.',
                  'It is tempting to suppose this is an unusual case produced by unusual '
                  'incompetence. It is the ordinary operation of a rule that separates two kinds '
                  'of money, and comparable sequences appear in the audit record of almost every '
                  'authority that holds steel structures. The engineering was never in doubt: '
                  'the 2014 inspection report named the girders, the mechanism and the likely '
                  'interval. What failed was an accounting distinction made for perfectly good '
                  'reasons in the nineteen thirties, applied to assets whose costs do not '
                  'respect it, and defended since by everybody whose budget it protects.'],
        'guided': [('What did the 2014 inspection find?',
                    ('Two girders had lost section',
                     'The bridge needed repainting, costed at 180,000 pounds',
                     'A weight restriction was required',
                     'The bridge should be replaced'),
                    1,
                    'And the authority had no revenue money for it.'),
                   ('Why could capital not be used?',
                    ('There was no capital available',
                     'Repainting is maintenance, and capital pays for building and replacing',
                     'The bridge was too old',
                     'The rules were unclear'),
                    1,
                    'The passage is explicit that the refusal was correct.'),
                   ('What had happened by 2019?',
                    ('The bridge was replaced',
                     'Two main girders had lost enough section to require a weight restriction',
                     'The paint was renewed',
                     'The restriction had tightened to three and a half tonnes'),
                    1,
                    'The tightening to three and a half tonnes came in 2022.'),
                   ('What does the passage say about the 2014 refusal?',
                    ('It was a mistake',
                     'It was correct',
                     'It was never recorded',
                     'It was overturned on appeal'),
                    1,
                    'The passage calls it correct and adds that the officers could see what was '
                    'coming.')],
        'exam': [('What did the replacement cost?',
                  ('180,000 pounds',
                   '4.1 million pounds',
                   '3.5 million pounds',
                   'The passage does not say'),
                  1,
                  'Funded from capital without difficulty, because a new bridge is a capital '
                  'asset.'),
                 ('What does the passage say about the individuals involved?',
                  ('Several acted improperly',
                   'No individual behaved improperly at any point',
                   'The officers were negligent',
                   'The inspectors were wrong'),
                  1,
                  'Which is what makes the case a criticism of a rule rather than of people.'),
                 ('How does the passage describe the case?',
                  ('Unusual and produced by incompetence',
                   'The ordinary operation of a rule separating two kinds of money',
                   'A failure of engineering judgement',
                   'A consequence of underfunding alone'),
                  1,
                  'And it adds that comparable sequences appear in almost every audit record.'),
                 ('What does the passage say was never in doubt?',
                  ('The funding', 'The engineering', 'The rule', 'The replacement cost'),
                  1,
                  'The 2014 report named the girders, the mechanism and the likely interval.'),
                 ('When was the accounting distinction made?',
                  ('In 2014', 'In the nineteen thirties', 'In 1974', 'The passage does not say'),
                  1,
                  'For perfectly good reasons, the passage adds.'),
                 ('Who does the passage say has defended the distinction since?',
                  ('Engineers', 'Everybody whose budget it protects', 'Auditors', 'Nobody'),
                  1,
                  'That is the final clause, and it is the explanation for the rule’s survival.'),
                 ('What was the authority permitted and forbidden to spend?',
                  ('Permitted 180,000; forbidden 4.1 million',
                   'Permitted 4.1 million; forbidden 180,000',
                   'Forbidden both',
                   'Permitted both'),
                  1,
                  'Which the passage gives as the shape of the whole case.'),
                 ('What does the passage say corrosion under failing paint is not?',
                  ('Visible', 'Slow', 'Predictable', 'Expensive'),
                  1,
                  'The five-year sequence from inspection to weight restriction is the '
                  'evidence.'),
                 ('The phrase lost section in paragraph 2 refers to',
                  ('a reduction in the steel’s thickness',
                   'a missing span of the bridge',
                   'a lost inspection record',
                   'a closed carriageway'),
                  0,
                  'Corrosion removes material, and the remaining section is what carries the '
                  'load.')]},
 'r4': {'sub': 'What a backlog actually is',
        'title': 'Deferral Is a Loan at a Rate Nobody States',
        'words': 369,
        'skill': ('Reading a claim about the shape of a curve',
                  ['The relation between condition and cost is not a straight line. Note what '
                   'happens at the turn.',
                   'Two intervention strategies are compared over the same period.',
                   'A question about the conclusion wants the financial analogy, stated '
                   'precisely.']),
        'paras': ['Deterioration of a constructed asset does not proceed at an even rate, and '
                  'almost every error in the management of infrastructure follows from the '
                  'assumption that it does. A road surface in sound condition declines slowly, '
                  'because an intact surface excludes water from the layers beneath it. Once '
                  'water enters, through a crack of three or four millimetres, the progression '
                  'becomes rapid: saturation of the base reduces its stiffness, traffic then '
                  'deforms it under load, and that deformation opens further cracks. The curve '
                  'is therefore flat for fifteen years and very sharp for three, and the cost of '
                  'intervention follows the same shape. Resurfacing a sound carriageway costs '
                  'perhaps fifteen pounds a square metre. Reconstruction of a saturated one, '
                  'once the base has gone, costs between eighty and a hundred and twenty, which '
                  'is not a difference of degree but a difference of category in any appraisal.',
                  'The consequence for any appraisal is a matter of arithmetic. Treatment of a '
                  'surface at year fifteen, before the turn, and repetition of that treatment on '
                  'a cycle, produces a whole-life cost per square metre substantially below the '
                  'cost of a single reconstruction at year twenty-two, and the comparison holds '
                  'under any discount rate a treasury would accept, which is an unusually robust '
                  'result for an exercise in public appraisal. Deferral of the year fifteen '
                  'treatment is accordingly not a saving but a borrowing: the authority retains '
                  'fifteen pounds a square metre this year and undertakes to pay something near '
                  'a hundred within a decade. No rate of interest is stated anywhere in the '
                  'transaction, no instrument records it and no officer signs for it, which is '
                  'the whole difficulty with the arrangement.',
                  'Nobody seriously disputes any of this within the profession, and the '
                  'condition surveys that establish it are produced annually and published. The '
                  'question that the next passage takes up is therefore not whether the '
                  'arithmetic is understood but why an understanding so complete, so cheaply '
                  'available and so frequently restated produces so little change in what '
                  'authorities actually do. The answer is not ignorance, and the assumption that '
                  'it must be ignorance has absorbed a great deal of professional effort that '
                  'might have been directed at the real obstacle.'],
        'guided': [('Why does a sound road surface deteriorate slowly?',
                    ('Traffic is lighter on it',
                     'An intact surface excludes water from the layers beneath',
                     'It is newer',
                     'It is inspected more often'),
                    1,
                    'Water entry is the mechanism the whole curve depends on.'),
                   ('What happens once water enters the base?',
                    ('The surface dries out',
                     'Saturation reduces stiffness, traffic deforms it and cracks open',
                     'The road is closed',
                     'Deterioration stops'),
                    1,
                    'The three steps are given in order and they compound.'),
                   ('What shape does the passage give the curve?',
                    ('A straight line',
                     'Flat for fifteen years and steep for three',
                     'Steep throughout',
                     'Flat throughout'),
                    1,
                    'And the cost of intervention follows the same shape.')],
        'exam': [('What does resurfacing a sound carriageway cost per square metre?',
                  ('Eighty pounds',
                   'About fifteen pounds',
                   'A hundred and twenty pounds',
                   'The passage does not say'),
                  1,
                  'Against eighty to a hundred and twenty for reconstruction of a saturated '
                  'one.'),
                 ('What does the whole-life comparison depend on?',
                  ('A particular discount rate',
                   'No particular discount rate; it holds under any a treasury would accept',
                   'The traffic volume',
                   'The age of the road'),
                  1,
                  'Which is what makes the arithmetic hard to argue with.'),
                 ('What does the passage call deferral?',
                  ('A saving', 'A borrowing', 'An efficiency', 'A deterioration'),
                  1,
                  'Fifteen pounds retained now against something near a hundred within a '
                  'decade.'),
                 ('What does the passage say is missing from the transaction?',
                  ('A survey',
                   'Any stated rate of interest',
                   'A named officer',
                   'A published programme'),
                  1,
                  'And it calls that the whole difficulty with it.'),
                 ('What does the final paragraph say the next question is?',
                  ('Whether the arithmetic is understood',
                   'Why so complete an understanding produces so little change',
                   'How to measure deterioration',
                   'What discount rate to use'),
                  1,
                  'And it adds that the answer is not ignorance.')]},
 'r5': {'sub': 'Renewal and the cost of waiting',
        'title': 'Why the Arithmetic Changes Nothing',
        'words': 380,
        'skill': ('Reading an objection that relocates a problem',
                  ['The writer accepts the previous arithmetic entirely. Note where the obstacle '
                   'is put instead.',
                   'Three features of public budgeting are given. Keep them separate.',
                   'A question about the remedy wants what has to be changed, not who has to be '
                   'persuaded.']),
        'paras': ['Every figure in the previous passage is sound and none of it is the obstacle. '
                  'Authorities do not defer maintenance because they have misunderstood a cost '
                  'curve; they defer it because of three features of the way public money is '
                  'voted. Each of the three is independent of any engineering knowledge '
                  'whatever, and each of them would produce the same deferral in an authority '
                  'staffed entirely by the authors of the condition surveys.',
                  'The first is annuality. Appropriation is made for one financial year, and an '
                  'underspend is surrendered rather than carried, so that a twenty-year '
                  'programme is funded by a sequence of one-year decisions, each taken by a '
                  'differently composed committee under conditions that have changed since the '
                  'last of them. The second is the separation of capital from revenue, which '
                  'produces the outcome in the third passage: the cheap intervention is a '
                  'revenue charge and the expensive replacement is a capital one, and the two '
                  'are not fungible in either direction. The third is the distribution of '
                  'visibility. A pothole repaired is seen by the people who complained about it. '
                  'A resurfacing carried out before the appearance of any crack is '
                  'indistinguishable, to every voter, from the complete absence of work, and the '
                  'officer who proposes it is asking a committee to spend money on an outcome no '
                  'resident will notice, in a year when the potholes are there to be '
                  'photographed.',
                  'The remedy therefore has to be an accounting change rather than a campaign of '
                  'persuasion, and the distinction is not a pedantic one: thirty years of '
                  'persuasion have produced the present position, which is as clean a test of '
                  'the approach as anybody could design. What the arithmetic supports is a '
                  'single whole-life appropriation for each class of asset, voted on a five-year '
                  'horizon, with any deferral conditional on a written statement of the cost '
                  'transferred to a later year. The first provision defeats annuality, the '
                  'second defeats the capital distinction, and the third converts an implicit '
                  'borrowing into an explicit one, which is the only part of the arrangement '
                  'with any bearing on anybody’s incentive. To put it bluntly, the profession '
                  'has spent a generation explaining a curve to people who were never confused '
                  'about it, and the obstacle was in the vote all along.'],
        'guided': [('What does the writer say about the previous passage’s figures?',
                    ('They are mistaken',
                     'They are sound and are not the obstacle',
                     'They are out of date',
                     'They apply only to roads'),
                    1,
                    'The objection is about location, not about truth.'),
                   ('What is annuality?',
                    ('A yearly inspection',
                     'Appropriation for one financial year, with underspend surrendered',
                     'An annual report',
                     'A five-year programme'),
                    1,
                    'So a twenty-year programme rests on a sequence of one-year decisions.'),
                   ('What does the separation of capital from revenue produce?',
                    ('A larger backlog figure',
                     'The outcome described in the third passage',
                     'A longer resurfacing cycle',
                     'More frequent inspection'),
                    1,
                    'The cheap intervention is revenue and the expensive replacement is '
                    'capital.')],
        'exam': [('What is the third feature the writer names?',
                  ('Annuality',
                   'The distribution of visibility',
                   'The separation of budgets',
                   'Inflation'),
                  1,
                  'A repair is seen; prevention is indistinguishable from doing nothing.'),
                 ('What is an officer proposing early resurfacing asking for?',
                  ('More survey data',
                   'Money for an outcome no resident will notice',
                   'A capital appropriation',
                   'A weight restriction'),
                  1,
                  'Which is the political difficulty the arithmetic cannot touch.'),
                 ('Why must the remedy be an accounting change?',
                  ('Persuasion is expensive',
                   'Thirty years of persuasion have produced the present position',
                   'Officers are not trusted',
                   'The arithmetic is disputed'),
                  1,
                  'The writer offers the record as the argument against persuasion.'),
                 ('Which part of the proposal makes the borrowing explicit?',
                  ('The single appropriation',
                   'The five-year horizon',
                   'The written statement of transferred cost',
                   'The asset classes'),
                  2,
                  'And the writer calls that the only part that changes an incentive.'),
                 ('What does the writer say the profession has spent a generation doing?',
                  ('Measuring deterioration',
                   'Explaining a curve to people who were never confused about it',
                   'Arguing about discount rates',
                   'Surveying culverts'),
                  1,
                  'Which is the sentence the passage closes on.')]},
 'l1': {'sub': 'Reporting a fault',
        'caption': 'A phone call to a council contact centre',
        'skill': ('Hearing what turns a complaint into a work order',
                  ['The officer asks for three things. Note all three, because the items ask for '
                   'them.',
                   'Listen for what she says a second report does.',
                   'The item about the reference number is the one most people miss.']),
        'warm': [('Woman: Can you tell me where exactly?',
                  ('Twenty metres east of the bus stop.',
                   'On the path.',
                   'Yes, I can.',
                   'Last Tuesday.'),
                  0,
                  'A where-exactly question wants a located answer, not a general one.'),
                 ('Woman: How big is it?',
                  ('About the width of a dinner plate.',
                   'Quite big.',
                   'Yes, it is big.',
                   'Dangerous.'),
                  0,
                  'A size question answered with a comparison anybody can picture.'),
                 ('Woman: Have you reported it before?',
                  ('No, this is the first time.',
                   'Yes, it is dangerous.',
                   'In August.',
                   'By the bus stop.'),
                  0,
                  'The officer needs to know whether to open a case or add to one.')],
        'script': [('Man', 'I want to report a dangerous footpath.'),
                   ('Woman',
                    'I can take that. Can you tell me where exactly, and how big the defect is?'),
                   ('Man', 'It is just dangerous. Somebody will fall.'),
                   ('Woman',
                    'I believe you, and I cannot send anybody with that. The engineer gets a '
                    'work order with a location, a size and a date on it. Without those three it '
                    'goes into a queue of things nobody can find.'),
                   ('Man',
                    'Right. Twenty metres east of the bus stop on Fairhaven Road. The hole is '
                    'about the width of a dinner plate and perhaps four centimetres deep. I '
                    'noticed it on Tuesday.'),
                   ('Woman',
                    'That is a work order. Thank you. Do you have a photograph with something in '
                    'it for scale?'),
                   ('Man', 'I can take one. A coin?'),
                   ('Woman',
                    'A coin is perfect. And keep the reference I am about to give you, because '
                    'if you ring again without it we open a second case about the same hole, and '
                    'two cases about one defect do not make it twice as urgent. They make it '
                    'look like administrative noise.'),
                   ('Man', 'That is the opposite of what I assumed.'),
                   ('Woman',
                    'Everybody assumes it. The one thing that does move a case up is a recorded '
                    'injury, which I would rather you did not supply.'),
                   ('Man', 'And how long, realistically?'),
                   ('Woman',
                    'On a footpath of that size, eleven weeks as things stand, and I would '
                    'rather tell you eleven than three. If it gets worse, ring with the '
                    'reference and the new measurement, and that does move it.')],
        'items': [('What three things does the officer need?',
                   ('A location, a size and a date',
                    'A photograph, a name and an address',
                    'A reference, a name and a date',
                    'A location, a photograph and an injury'),
                   0,
                   'Without those three it goes into a queue nobody can search.'),
                  ('What does she say about his first description?',
                   ('It is exaggerated',
                    'She believes it and cannot send anybody with it',
                    'It is enough to open a case',
                    'It needs a photograph'),
                   1,
                   'She separates believing him from being able to act.'),
                  ('What does she want in a photograph?',
                   ('The whole street', 'Something for scale', 'A time stamp', 'The bus stop'),
                   1,
                   'He offers a coin and she calls it perfect.'),
                  ('What happens if he rings again without the reference?',
                   ('The case is escalated',
                    'A second case is opened about the same hole',
                    'The first case is closed',
                    'Nothing at all'),
                   1,
                   'And two cases about one defect read as administrative noise.'),
                  ('What does she say does move a case up?',
                   ('A second report', 'A recorded injury', 'A photograph', 'A councillor'),
                   1,
                   'And she adds that she would rather he did not supply one.'),
                  ('How long does she say it will take?',
                   ('Three weeks', 'Eleven weeks', 'She will not say', 'Until the next survey'),
                   1,
                   'And she says she would rather tell him eleven than three.'),
                  ('What does she say he should do if it gets worse?',
                   ('Open a new case',
                    'Ring with the reference and the new measurement',
                    'Contact a councillor',
                    'Send more photographs'),
                   1,
                   'That is the one route she says actually moves a case.')]},
 'l2': {'sub': 'What a backlog actually is',
        'caption': 'A briefing to new councillors on one number',
        'poster': ['Asset management briefing',
                   'Backlog = identified need minus funded programme',
                   'Uninspected assets count as zero'],
        'skill': ('Hearing a definition used to defuse an argument',
                  ['The speaker defines a term and then shows what follows from the definition.',
                   'Two causes of a rise are separated. Keep them apart.',
                   'The item about what she will not say is the hard one.']),
        'warm': [('Man: So a rising backlog means worse roads?',
                  ('Not necessarily. It can mean better surveying.',
                   'Yes, always.',
                   'Sixty per cent.',
                   'Since 2011.'),
                  0,
                  'The two explanations are exactly what the briefing separates.'),
                 ('Man: Does an uninspected culvert count?',
                  ('No, it contributes nothing.',
                   'Yes, at an estimated value.',
                   'Yes, it does.',
                   'Thirty-six per cent.'),
                  0,
                  'Which is the property of the definition the whole briefing turns on.'),
                 ('Man: Will she say the roads are fine?',
                  ('No, she says the figure cannot settle it.',
                   'Yes, she says they are fine.',
                   'Yes, she will.',
                   'In the press release.'),
                  0,
                  'She refuses to use the number in either direction.')],
        'script': [('Woman',
                    'One number is going to be quoted at you for the next four years, so let me '
                    'tell you what it is. The backlog is the difference between the work our '
                    'surveys say the assets need and the work the programme is funded to do. '
                    'That is all it is. It is a statement about two documents, not a measurement '
                    'of a road. Now, the consequence that surprises everybody. An asset nobody '
                    'has inspected contributes nothing to the backlog, because no need has been '
                    'identified for it. We have thirty-six per cent of our culverts with no '
                    'inspection record since 2011. Those culverts are in whatever condition they '
                    'are in, and the backlog figure does not know they exist. So when our number '
                    'went from 7.1 million to 11.4 million this year, 3.8 million of that was '
                    'culverts we looked at for the first time in eighteen years. The condition '
                    'did not change in a year. Our knowledge did. And here is where I will '
                    'disappoint both sides of the chamber. I am not going to tell you the roads '
                    'are fine, because I do not know that, and the remaining culverts are the '
                    'reason I do not. What I am going to tell you is that this figure cannot '
                    'settle the argument you want to have with it, in either direction, and '
                    'anybody who tells you otherwise has not read the note on page two.')],
        'items': [('What does the speaker say the backlog is?',
                   ('The cost of all needed repairs',
                    'The difference between identified need and funded programme',
                    'The value of the asset stock',
                    'A measurement of road condition'),
                   1,
                   'She calls it a statement about two documents.'),
                  ('What does an uninspected asset contribute?',
                   ('An estimated figure', 'Nothing', 'An average value', 'A provisional entry'),
                   1,
                   'Because no need has been identified for it.'),
                  ('How much of the rise was first-time culvert inspection?',
                   ('All of it', '3.8 million', '7.1 million', 'She does not say'),
                   1,
                   'Out of a rise from 7.1 to 11.4 million.'),
                  ('What does she say changed in a year?',
                   ('The condition', 'The knowledge', 'The funding', 'The definition'),
                   1,
                   'She is explicit that condition did not change in a year.'),
                  ('What will she not tell the councillors?',
                   ('How much money is needed',
                    'That the roads are fine',
                    'When the next survey is',
                    'Which culverts failed'),
                   1,
                   'And she names the uninspected culverts as the reason she cannot say it.'),
                  ('What does she say about anybody who claims the figure settles the argument?',
                   ('They are being political',
                    'They have not read the note on page two',
                    'They are probably right',
                    'They should be ignored'),
                   1,
                   'That is the sentence the briefing ends on.')]},
 'l3': {'sub': 'Renewal and the cost of waiting',
        'caption': 'A talk on two budgets and one bridge',
        'board': ['Revenue: run and repair',
                  'Capital: build and replace',
                  '180,000 refused, 4.1m approved',
                  'Nobody behaved improperly'],
        'skill': ('A talk that blames a rule and not a person',
                  ['The speaker refuses two easy explanations. Note both.',
                   'The sequence of dates carries the argument. Follow it.',
                   'A question about his conclusion wants what he says has to change.']),
        'warm': [('Woman: Was somebody at fault?',
                  ('No, everybody applied the rules correctly.',
                   'Yes, the officers.',
                   'Yes, somebody was.',
                   'In 2014.'),
                  0,
                  'He is explicit that the sequence required no misconduct.'),
                 ('Woman: Which budget pays for paint?',
                  ('Revenue.', 'Capital.', 'Yes, one of them.', 'Four million.'),
                  0,
                  'Painting is maintenance, which is the whole difficulty.'),
                 ('Woman: What does he say has to change?',
                  ('The accounting rule.',
                   'The inspection regime.',
                   'Yes, something does.',
                   'The paint system.'),
                  0,
                  'He ends on the single vote rather than on better engineering.')],
        'script': [('Man',
                    'I am going to give you a sequence of dates and I want you to look for the '
                    'villain, because there is not one. 2014: a steel bridge is inspected and '
                    'needs repainting. Cost, a hundred and eighty thousand. The authority has no '
                    'revenue money, and revenue is the budget that pays for running things and '
                    'repairing them. Could they use capital? No, and the officers were right to '
                    'say no, because capital pays for building and replacing and painting is '
                    'neither. Application refused, correctly, by people who could see precisely '
                    'what was coming. 2019: corrosion under failing paint, two girders have lost '
                    'section, weight restriction. 2022: restriction down to three and a half '
                    'tonnes, which on that road means no bus and no fire appliance. 2024: '
                    'structure replaced, four point one million pounds, funded from capital '
                    'without an argument, because a new bridge is a capital asset. So this '
                    'authority was allowed to spend four million and not allowed to spend a '
                    'hundred and eighty thousand. Now, two explanations I am not going to let '
                    'you have. It was not incompetence: the 2014 report named the girders and '
                    'the mechanism and the likely interval. And it was not underfunding in '
                    'general, because the four million was available the whole time in the wrong '
                    'pot. What has to change is the rule that separates the pots, and the reason '
                    'it has not changed in ninety years is that it protects somebody’s budget in '
                    'every authority in the country.')],
        'items': [('What does the speaker tell the class to look for?',
                   ('The engineering error',
                    'The villain, of which there is none',
                    'The cost of the paint',
                    'The weight restriction'),
                   1,
                   'He builds the sequence so that no misconduct is needed.'),
                  ('Why were the officers right to refuse capital?',
                   ('There was no capital',
                    'Capital pays for building and replacing, and painting is neither',
                    'The bridge was too old',
                    'The rules were unclear'),
                   1,
                   'Which makes the refusal correct and the outcome absurd.'),
                  ('What did the 2022 restriction mean on that road?',
                   ('A diversion for lorries',
                    'No bus and no fire appliance',
                    'A closure at night',
                    'A speed limit'),
                   1,
                   'He gives the consequence rather than only the tonnage.'),
                  ('Which two explanations does he refuse?',
                   ('Incompetence and underfunding in general',
                    'Corrosion and poor paint',
                    'Politics and accounting',
                    'The inspectors and the engineers'),
                   0,
                   'The report named everything, and the money existed in the wrong pot.'),
                  ('Why does he say the rule has not changed in ninety years?',
                   ('Nobody has noticed it',
                    'It protects somebody’s budget in every authority',
                    'Changing it would cost too much',
                    'Engineers prefer it'),
                   1,
                   'That is the sentence the talk ends on.'),
                  ('What was available the whole time, according to him?',
                   ('The paint',
                    'The four million, in the wrong pot',
                    'A weight restriction',
                    'A survey'),
                   1,
                   'Which is why he rejects underfunding as the explanation.'),
                  ('What does he say the 2014 report named?',
                   ('The contractor and the price',
                    'The girders, the mechanism and the likely interval',
                    'The weight restriction',
                    'The capital programme'),
                   1,
                   'All three, which is the evidence against calling the outcome '
                   'incompetence.')]},
 'l4': {'sub': 'What a backlog actually is',
        'caption': 'A lecture on a curve that is flat and then steep',
        'board': ['Sound surface: water excluded',
                  'Crack: saturation, deformation, more cracks',
                  'Flat fifteen years, steep three',
                  '15 a square metre, or 100'],
        'skill': ('A lecture built on one mechanism and two prices',
                  ['The mechanism comes first and everything else follows from it.',
                   'Two prices per square metre carry the argument. Hold both.',
                   'A question about the analogy wants the word he insists on.']),
        'warm': [('Woman: Why does a good surface last?',
                  ('It keeps water out of the layers below.',
                   'It is thicker.',
                   'Yes, it lasts.',
                   'Fifteen years.'),
                  0,
                  'Water exclusion is the mechanism the whole lecture rests on.'),
                 ('Woman: What does reconstruction cost?',
                  ('Eighty to a hundred and twenty a square metre.',
                   'Fifteen a square metre.',
                   'Yes, it costs more.',
                   'At year twenty-two.'),
                  0,
                  'Against about fifteen for resurfacing a sound carriageway.'),
                 ('Woman: What word does he insist on?',
                  ('Borrowing.', 'Saving.', 'Yes, one word.', 'Deferral.'),
                  0,
                  'He refuses to let deferral be called a saving.')],
        'script': [('Man',
                    'One mechanism, and then two numbers, and then a word I am going to insist '
                    'on. The mechanism: a sound road surface keeps water out of the layers '
                    'underneath it, and that is the only reason it lasts. Let water in through a '
                    'crack three millimetres wide and the base saturates, saturated base is less '
                    'stiff, traffic deforms it, and the deformation opens more cracks. So the '
                    'curve is not a straight line. It is flat for about fifteen years and then '
                    'steep for three. Which gives you the two numbers. Resurface a sound '
                    'carriageway: about fifteen pounds a square metre. Reconstruct a saturated '
                    'one, once the base has gone: eighty to a hundred and twenty. Not twenty per '
                    'cent more. Six times more, and sometimes eight. Now the word. When an '
                    'authority defers the year fifteen treatment, the papers call it a saving, '
                    'and it is not a saving, it is a borrowing. You keep fifteen pounds a square '
                    'metre this year and you commit to about a hundred within the decade, and '
                    'nowhere in that transaction does anybody write down an interest rate. If a '
                    'finance director borrowed at an undisclosed rate, there would be an '
                    'inquiry. We do it every February and call it prudence. And before anybody '
                    'asks whether the profession has explained this: yes, annually, for thirty '
                    'years, in surveys that are published and free to read. Which raises the '
                    'question the next lecture is about, and it is not a question about '
                    'arithmetic. Before you ask: yes, I have put this to three authorities, and '
                    'all three of them agreed with every word and changed nothing, which is the '
                    'most useful thing that has ever happened to my understanding of this '
                    'subject. Agreement is cheap. The vote is what is expensive.')],
        'items': [('What does the lecturer say is the only reason a surface lasts?',
                   ('Its thickness',
                    'It keeps water out of the layers underneath',
                    'The traffic is light',
                    'It is inspected'),
                   1,
                   'Everything else in the lecture follows from that mechanism.'),
                  ('How wide a crack does he say is enough?',
                   ('Three centimetres',
                    'Three millimetres',
                    'Any crack at all',
                    'He does not say'),
                   1,
                   'Which is why the turn in the curve is so sharp.'),
                  ('How much more does reconstruction cost?',
                   ('Twenty per cent more',
                    'Six to eight times more',
                    'Twice as much',
                    'The same'),
                   1,
                   'Fifteen pounds a square metre against eighty to a hundred and twenty.'),
                  ('What word does he insist on?',
                   ('Prudence', 'Borrowing', 'Deferral', 'Saving'),
                   1,
                   'He refuses the word saving for the same transaction.'),
                  ('What comparison does he make with a finance director?',
                   ('They would be promoted',
                    'Borrowing at an undisclosed rate would prompt an inquiry',
                    'They would refuse to sign',
                    'They would call it prudence'),
                   1,
                   'And he says the authority does it every February.')]},
 'l5': {'sub': 'Renewal and the cost of waiting',
        'caption': 'A short talk on three features of a budget',
        'board': ['Annuality: one year at a time',
                  'Capital and revenue: not fungible',
                  'Prevention is invisible',
                  'Change the vote, not the slides'],
        'skill': ('A talk that gives up on persuasion',
                  ['The speaker grants the arithmetic in one line. Note how little time she '
                   'spends on it.',
                   'Three features, each independent of engineering knowledge.',
                   'A question about her conclusion wants what she says thirty years of '
                   'explaining produced.']),
        'warm': [('Man: Does she dispute the cost curve?',
                  ('No, she says it is not the obstacle.',
                   'Yes, she thinks it is wrong.',
                   'Yes, she does.',
                   'Three features.'),
                  0,
                  'She concedes it in a line and moves on.'),
                 ('Man: What is annuality?',
                  ('Money voted for one year, with underspend surrendered.',
                   'An annual inspection.',
                   'Yes, it is a thing.',
                   'Twenty years.'),
                  0,
                  'Which makes a twenty-year programme a sequence of one-year decisions.'),
                 ('Man: What did thirty years of explaining produce?',
                  ('The present position.',
                   'A change in the rules.',
                   'Yes, something.',
                   'Published surveys.'),
                  0,
                  'That is her argument against more persuasion.')],
        'script': [('Woman',
                    'The curve is right. I have nothing to add to it and I am not going to spend '
                    'this hour on it, because the curve is not why anything happens. Three '
                    'features of how public money is voted, and not one of them has anything to '
                    'do with engineering. One: annuality. The money is voted for a single '
                    'financial year and an underspend is surrendered, not carried. So a '
                    'twenty-year programme is actually a sequence of twenty separate one-year '
                    'decisions, each taken by a different committee in a different situation, '
                    'and nobody has ever been able to commit the nineteenth of them. Two: '
                    'capital and revenue are different votes and they are not interchangeable. '
                    'Paint is revenue. A new bridge is capital. You have seen what that does. '
                    'Three, and this is the one people underrate: prevention is invisible. A '
                    'pothole filled is seen by the twelve people who rang about it. A road '
                    'resurfaced before it cracked looks, to every single voter, exactly like a '
                    'road nobody touched. So the officer recommending it is asking a committee '
                    'for money to produce an outcome no resident will ever notice, in a year '
                    'when the potholes are also there. Now, the conclusion, and it is '
                    'unglamorous. The answer is not better slides. We have had thirty years of '
                    'better slides and the result is the position we are in. The answer is a '
                    'single whole-life vote per asset class, five years ahead, and a written '
                    'note of the cost every deferral moves into a later year. Change the vote. '
                    'The explaining has been done, and for thirty years, by people more '
                    'persuasive than any of us. Take one thing from this hour: when an argument '
                    'has been won repeatedly and nothing has moved, stop rehearsing it and go '
                    'and look at who signs what.')],
        'items': [('What does the speaker say about the curve?',
                   ('It is wrong',
                    'It is right and is not why anything happens',
                    'It needs better data',
                    'It applies only to roads'),
                   1,
                   'She concedes it and refuses to spend the hour on it.'),
                  ('What happens to an underspend under annuality?',
                   ('It is carried forward',
                    'It is surrendered',
                    'It is moved to capital',
                    'It is reinvested'),
                   1,
                   'Which is what makes a long programme a sequence of one-year decisions.'),
                  ('What does she say nobody has ever been able to do?',
                   ('Measure deterioration',
                    'Commit the nineteenth of twenty annual decisions',
                    'Move capital to revenue',
                    'Publish a survey'),
                   1,
                   'Each decision is taken by a different committee in a different situation.'),
                  ('Who sees a pothole repaired?',
                   ('Every voter',
                    'The twelve people who rang about it',
                    'Nobody',
                    'The committee'),
                   1,
                   'Against a resurfacing, which looks to everybody like nothing was done.'),
                  ('What does she say the answer is not?',
                   ('A single vote', 'Better slides', 'A five-year horizon', 'A written note'),
                   1,
                   'Thirty years of better slides produced the present position.')]},
 'w1': {'sub': 'Questions about a condition survey',
        'skill': ('Build a Sentence: questions about what a figure covers',
                  ['Eight of the ten are questions, and the useful ones ask what is inside a '
                   'total and what is outside it.',
                   'An embedded question keeps statement order: do you know whether the culverts '
                   'are in that figure.',
                   'Put the long phrase last, which is where English carries weight.']),
        'guided': [('The survey reports a backlog of eleven million.',
                    ['know',
                     'do',
                     'you',
                     'whether',
                     'the culverts',
                     'are',
                     'in',
                     'that',
                     'figure'],
                    'Do you know whether the culverts are in that figure?'),
                   ('Half the stock was surveyed in 2019.',
                    ['has',
                     'the other',
                     'half',
                     'been',
                     'surveyed',
                     'at',
                     'any',
                     'point',
                     'since'],
                    'Has the other half been surveyed at any point since?'),
                   ('The figure rose by forty per cent in one year.',
                    ['did',
                     'the condition',
                     'change',
                     'or',
                     'did',
                     'the survey',
                     'cover',
                     'more',
                     'assets'],
                    'Did the condition change, or did the survey cover more assets?')],
        'exam': [('The report separates capital from revenue.',
                  ['which', 'of', 'the two', 'budgets', 'pays', 'for', 'painting', 'a', 'bridge'],
                  'Which of the two budgets pays for painting a bridge?'),
                 ('Resurfacing was deferred for three years.',
                  ['do',
                   'you',
                   'know',
                   'what',
                   'the deferral',
                   'added',
                   'to',
                   'the',
                   'eventual',
                   'cost'],
                  'Do you know what the deferral added to the eventual cost?'),
                 ('The authority reports no unsafe structures.',
                  ['does',
                   'that',
                   'cover',
                   'the structures',
                   'nobody',
                   'has',
                   'inspected',
                   'since',
                   '2016'],
                  'Does that cover the structures nobody has inspected since 2016?'),
                 ('A weight restriction was placed on the bridge.',
                  ['is',
                   'the restriction',
                   'counted',
                   'as',
                   'a repair',
                   'or',
                   'as',
                   'a',
                   'failure'],
                  'Is the restriction counted as a repair or as a failure?'),
                 ('The survey gives an average condition score.',
                  ['how',
                   'many',
                   'assets',
                   'sit',
                   'below',
                   'the threshold',
                   'in',
                   'that',
                   'average'],
                  'How many assets sit below the threshold in that average?'),
                 ('The programme is funded for one year.',
                  ['can',
                   'work',
                   'on',
                   'a twenty-year',
                   'cycle',
                   'be',
                   'planned',
                   'on',
                   'an',
                   'annual',
                   'vote'],
                  'Can work on a twenty-year cycle be planned on an annual vote?'),
                 ('Two authorities report very different backlogs.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'when',
                   'each',
                   'of',
                   'them',
                   'last',
                   'surveyed'],
                  'I would like to know when each of them last surveyed.')]},
 'w2': {'sub': 'What a backlog actually is',
        'to': 'committee@marchfield.gov.uk',
        'date': '19/09/2029',
        'subject': 'The 11.4 million figure — what I can and cannot say in public',
        'scenario': ['You are the authority’s asset manager. The committee wants a public '
                     'statement that the rise in the backlog is "purely a survey effect". That '
                     'is not true: 3.8 million of the 4.3 million rise is first-time culvert '
                     'inspection, and the remaining 0.5 million is real deterioration on the '
                     'carriageway network. You also know the uninspected 36 per cent of culverts '
                     'could add several million more.',
                     'Write an email to the committee.'],
        'bullets': ['Give the split of the rise in figures.',
                    'Say what you cannot sign off, and why.',
                    'Propose the wording you can sign off.'],
        'skill': ('Refusing a form of words and supplying another',
                  ['Give the arithmetic first. A refusal that arrives before the figures reads '
                   'as obstruction.',
                   'Name the specific words you cannot sign, not the general sentiment.',
                   'Supply the alternative in quotation marks, so the committee can adopt it '
                   'without a meeting.']),
        'model': ['Dear Committee,',
                  '',
                  'The rise is 4.3 million. Of that, 3.8 million is culverts inspected this year '
                  'for the first time since 2011, and 0.5 million is measured deterioration on '
                  'the carriageway network, chiefly on the twelve kilometres resurfaced in 2011 '
                  'and now at the end of a shortened life. Nobody seriously disputes either '
                  'component; they come from the same survey.',
                  '',
                  'I cannot sign a statement that the rise is purely a survey effect. '
                  'Eighty-eight per cent of it is, and the other twelve per cent is roads '
                  'getting worse, which is a true thing that will be found by anybody who reads '
                  'the appendix. If we say purely and the appendix says otherwise, we have '
                  'handed the opposition a better story than the one we are trying to avoid, and '
                  'I will be the officer who signed it.',
                  '',
                  'There is a second reason, and it is the one that worries me more. Thirty-six '
                  'per cent of our culverts have not been inspected since 2011. On the rate we '
                  'have just found in the inspected thirty-two per cent, those could add '
                  'somewhere between four and seven million when we get to them. To put it '
                  'bluntly, a statement that the backlog rise is an artefact of surveying will '
                  'be quoted back at this committee the moment that survey is done, and it will '
                  'be quoted by us having to explain it.',
                  '',
                  'Here is wording I can sign today: "Most of the increase, 3.8 million of 4.3 '
                  'million, reflects culverts surveyed for the first time since 2011 rather than '
                  'any change in their condition this year. The remaining 0.5 million is '
                  'deterioration on the road network. A further 36 per cent of culverts await '
                  'inspection and the figure will rise again when that work is complete."',
                  '',
                  'That is four sentences, all of them defensible, and it has the advantage of '
                  'making the next rise unsurprising.',
                  '',
                  'Dr Imogen Castellane, Asset Manager'],
        'notes': ['The arithmetic comes first and is split to the half million, so the refusal '
                  'that follows is a consequence rather than an opinion.',
                  'The objection is to one word, purely, and the writer says what that word '
                  'would cost.',
                  'The second reason is the uninspected 36 per cent, which turns the question '
                  'from presentation into forecasting.',
                  'Signable wording is supplied in quotation marks, so the committee can adopt '
                  'it without reconvening.'],
        'bandpair': {'mid': ['Dear Committee,',
                             'Thank you for your request about the public statement. I have '
                             'looked at the figures again and I am afraid that I do not think we '
                             'can say that the rise is purely a survey effect, because '
                             'unfortunately some of it is not. Most of the increase is indeed '
                             'due to the culverts being surveyed, but there is also around half '
                             'a million which is genuine deterioration of the roads.',
                             'I am also a little concerned about the culverts which have not '
                             'been surveyed yet, as there are quite a lot of them and they may '
                             'well add a significant amount to the figure in future years. If we '
                             'say the rise is only a survey effect now, this may be difficult to '
                             'explain later on.',
                             'Perhaps we could find some wording which reflects both of these '
                             'points. I would be happy to draft something if that would be '
                             'helpful, or to discuss it at the next meeting if you would prefer.',
                             'Kind regards, Dr Imogen Castellane'],
                     'top': ['Dear Committee,',
                             'The rise is 4.3 million: 3.8 million is culverts inspected for the '
                             'first time since 2011, and 0.5 million is measured deterioration '
                             'on the carriageway network, mostly the twelve kilometres '
                             'resurfaced in 2011.',
                             'I cannot sign purely. Eighty-eight per cent of the rise is a '
                             'survey effect; the other twelve per cent is roads getting worse, '
                             'and it is in the appendix for anybody who looks. Saying purely '
                             'hands the opposition a better story than the one we are avoiding.',
                             'The larger problem is the 36 per cent of culverts not inspected '
                             'since 2011. At the rate found in the inspected third, they could '
                             'add four to seven million. A statement that this rise is a '
                             'surveying artefact will be read back to us the week that survey '
                             'lands.',
                             'Wording I can sign today: "Most of the increase, 3.8 of 4.3 '
                             'million, reflects culverts surveyed for the first time since 2011 '
                             'rather than any change this year. The remaining 0.5 million is '
                             'deterioration on the road network. A further 36 per cent of '
                             'culverts await inspection and the figure will rise again."',
                             'Four sentences, all defensible, and it makes the next rise '
                             'unsurprising. Dr Imogen Castellane'],
                     'diffs': ['It opens with the split arithmetic, so the refusal reads as a '
                               'consequence of the figures rather than as a reluctance.',
                               'It refuses one word and prices the refusal, where the middle '
                               'answer says I do not think we can say.',
                               'It treats the uninspected culverts as a forecast about the next '
                               'statement rather than as a concern.',
                               'It supplies signable wording in quotation marks instead of '
                               'offering to draft something.',
                               'It ends on the advantage to the committee, which is the only '
                               'reason a committee adopts an officer’s wording.']}},
 'w3': {'sub': 'Renewal and the cost of waiting',
        'prof': 'Dr Achterberg',
        'question': 'An authority can be given a single budget covering both maintenance and '
                    'replacement, with freedom to move money between them, or keep two separate '
                    'votes. A single budget removes the paint-or-replace absurdity. It also '
                    'removes the protection that stops a hard-pressed authority spending its '
                    'replacement money on this year’s potholes. Which should it have?',
        'posts': [('Luc',
                   'w',
                   'One budget. The case in the passage is not a curiosity, it is what the '
                   'separation produces, and it produces it everywhere. An authority that cannot '
                   'buy paint will buy a bridge.'),
                  ('Nadia',
                   'm',
                   'The protection is there because the pressure is real. Give a council one pot '
                   'in a bad year and the twenty-year renewal programme pays for this winter, '
                   'every time, and the people who suffer are the ones who cannot vote yet.')],
        'skill': ('A question about removing a rule that does two things',
                  ['Luc argues from the absurdity the rule produces; Nadia from what the rule '
                   'prevents.',
                   'The passage says the distinction was made for good reasons, which is a '
                   'concession to Nadia.',
                   'A strong answer keeps the protection and removes the absurdity.']),
        'starters': ['Nadia is right that…, although the protection she describes…',
                     'The distinction worth drawing is between… and…',
                     'As things stand, the rule prevents… and permits…',
                     'So the arrangement should be…'],
        'model': ['Nadia is right about the pressure and wrong that two votes are the only '
                  'defence against it. The thing that needs protecting is a twenty-year '
                  'programme against a bad winter, and what protects a programme is a published '
                  'schedule with a named officer answerable for departures from it, which is how '
                  'every regulated utility in the country manages the same temptation with a '
                  'single pot of money.',
                  'Luc is right that the separation produces the absurdity everywhere and he has '
                  'not engaged with what it was for. The passage concedes that the distinction '
                  'was made for perfectly good reasons, and the reason is Nadia’s: revenue is '
                  'where in-year pressure lands, and anything reachable from revenue gets '
                  'reached.',
                  'So the arrangement should be a single whole-life budget for each asset class, '
                  'with a programme published five years ahead and any deferral requiring a '
                  'written statement of the cost it adds. That keeps the protection, since a '
                  'deferral is still possible and is now expensive to explain, and it removes '
                  'the absurdity, since paint and replacement are drawn from the same vote and '
                  'compete on their whole-life cost. What it gives up is the simplicity of two '
                  'pots, which auditors like and which is the reason the rule has lasted ninety '
                  'years. That is a smaller loss than a system in which four million is '
                  'available and a hundred and eighty thousand is not.'],
        'model_words': 232},
 'w4': {'sub': 'What a backlog actually is',
        'skill': ('Marked theme: putting the known part first',
                  ['English prefers the known thing first and the new thing last. Moving a '
                   'phrase to the front marks it as the link to what came before.',
                   'Of that rise, three point eight million is culverts puts the reader where '
                   'the last sentence left them.',
                   'Do not front something the reader has not met. A marked theme carries no '
                   'weight if nothing is being linked.']),
        'guided': [('Front the known quantity.',
                    ['of',
                     'that rise',
                     'three point eight',
                     'million',
                     'is',
                     'culverts',
                     'inspected',
                     'this',
                     'year'],
                    'Of that rise, three point eight million is culverts inspected this year.'),
                   ('Front the condition, keeping the new part last.',
                    ['once',
                     'water',
                     'enters',
                     'the base',
                     'the progression',
                     'accelerates',
                     'within',
                     'a',
                     'season'],
                    'Once water enters the base, the progression accelerates within a season.'),
                   ('Front the prepositional phrase.',
                    ['on',
                     'that',
                     'road',
                     'a weight',
                     'restriction',
                     'means',
                     'no',
                     'bus',
                     'at all'],
                    'On that road, a weight restriction means no bus at all.')],
        'exam': [('Front the known term.',
                  ['as',
                   'for',
                   'the culverts',
                   'thirty-six',
                   'per cent',
                   'have',
                   'no',
                   'record',
                   'since',
                   '2011'],
                  'As for the culverts, thirty-six per cent have no record since 2011.'),
                 ('Front the time phrase.',
                  ['by',
                   'the',
                   'fifteenth',
                   'year',
                   'the surface',
                   'has',
                   'begun',
                   'to',
                   'admit',
                   'water'],
                  'By the fifteenth year, the surface has begun to admit water.'),
                 ('Front the contrast.',
                  ['for',
                   'the officer',
                   'the choice',
                   'is',
                   'between',
                   'two',
                   'budgets',
                   'and',
                   'not',
                   'two',
                   'repairs'],
                  'For the officer, the choice is between two budgets and not two repairs.'),
                 ('Front the concession.',
                  ['albeit',
                   'at',
                   'a cost',
                   'nobody',
                   'stated',
                   'the deferral',
                   'was',
                   'formally',
                   'a saving'],
                  'Albeit at a cost nobody stated, the deferral was formally a saving.'),
                 ('Front the known asset.',
                  ['of',
                   'the bridges',
                   'all',
                   'have',
                   'had',
                   'a principal',
                   'inspection',
                   'within',
                   'six',
                   'years'],
                  'Of the bridges, all have had a principal inspection within six years.')]},
 'w5': {'sub': 'Renewal and the cost of waiting',
        'prof': 'Dr Oyelowo',
        'question': 'A national government proposes that every authority publish, beside each '
                    'deferral, the additional whole-life cost the deferral creates. Authorities '
                    'object that the figure is an estimate, that publishing it will be read as '
                    'an admission of waste, and that the officers producing it will be blamed '
                    'for decisions taken by elected members. Should the requirement go ahead?',
        'posts': [('Esther',
                   'w',
                   'Yes. The whole argument of the second passage is that the borrowing is '
                   'implicit, and a number beside the decision is the only thing that makes it '
                   'explicit. An estimate published is worth more than a certainty withheld.'),
                  ('Rui',
                   'm',
                   'Esther is about to get officers sacked. The figure will be produced by the '
                   'asset team and quoted against them, and the first authority where it happens '
                   'will simply stop producing honest estimates.')],
        'skill': ('A question about a disclosure with a victim',
                  ['Esther argues from what the disclosure makes visible; Rui from who carries '
                   'the consequence.',
                   'The second passage says the written statement is the only part that changes '
                   'an incentive, which is a strong point for Esther.',
                   'A strong answer protects Rui’s officers without losing the figure.']),
        'starters': ['Rui is right that…, although the remedy for it is…',
                     'The distinction worth drawing is between… and…',
                     'For all practical purposes the requirement…',
                     'So the requirement should go ahead, provided that…'],
        'model': ['Rui is right about where the blame lands and that is an argument about who '
                  'signs the figure rather than about whether it is produced. A deferral is a '
                  'decision of elected members, and a statement of its cost should be signed by '
                  'the member who took it, on the officer’s calculation, in the same document. '
                  'That arrangement exists already for every statutory notice an authority '
                  'issues and nobody regards it as unusual.',
                  'Esther is right that the implicit borrowing is the whole problem and she '
                  'concedes too much when she accepts that the number is a mere estimate. The '
                  'cost of reconstructing a saturated carriageway is one of the better-known '
                  'figures in the sector, and the uncertainty in a deferral cost is mostly '
                  'uncertainty about timing, which can be published as a range rather than '
                  'apologised for.',
                  'So the requirement should go ahead, provided the statement carries a range '
                  'rather than a point figure and the signature of the member who decided. What '
                  'that gives up is comfort: a committee will have to put its name to a sentence '
                  'saying this decision adds between four and seven hundred thousand pounds to a '
                  'cost falling in 2038, and some members will refuse to stand for re-election '
                  'rather than sign such things. On the evidence of the last thirty years, that '
                  'discomfort is the only mechanism anybody has proposed that bears on the '
                  'actual obstacle, and the alternative is another generation of published '
                  'curves that change nothing at all, read approvingly by everybody and acted on '
                  'by nobody, which is where this subject has spent my entire working life.'],
        'model_words': 268},
 'sp': [{'sub': 'Reporting a fault',
         'focus': 'giving a located, measured description',
         'skill': ('Twenty metres east of the bus stop, about the width of a dinner plate',
                   ['Location first, then size, then date. The order is what makes it usable.',
                    'Give size as a comparison anybody can picture, not as an adjective.',
                    'Keep your voice level. Urgency in the voice does not move a work order.']),
         'repeat': ['Perhaps four centimetres deep.',
                    'It is on Fairhaven Road.',
                    'I noticed it on Tuesday.',
                    'Twenty metres east of the bus stop.',
                    'About the width of a dinner plate.',
                    'I have a photograph with a coin in it for scale.',
                    'Two cases about one defect do not make it twice as urgent, and they look '
                    'like administrative noise.'],
         'theme': 'reporting something that needs fixing',
         'qs': ['Tell me about a time you reported a problem to an organisation. What happened?',
                'Some people say complaining loudly is the only thing that works. How far would '
                'you agree?',
                'How would you explain to a friend how to report a pothole usefully?',
                'Finally, describe something near you that nobody has repaired.'],
         'model': [(2,
                    'I would say volume works on the person answering and not on the system '
                    'behind them. What moves a case is a location, a measurement and a date, '
                    'because those are the only things that fit into a work order.'),
                   (3,
                    'Say where it is to the nearest few metres, how big it is compared with '
                    'something ordinary, and when you saw it. Then keep the reference number, '
                    'which is the part everybody throws away.')],
         'selfcheck': ['I gave location, size and date in that order',
                       'I described the size by comparison',
                       'I used at least two of the unit’s field words']},
        {'sub': 'What a backlog actually is',
         'focus': 'separating two explanations of the same number',
         'skill': ('The condition did not change in a year. Our knowledge did.',
                   ['Two short sentences, the second contradicting the expected reading.',
                    'Stress the two subjects: condition, knowledge.',
                    'Do not join them with but. The full stop is doing the work.']),
         'repeat': ['Our knowledge did.',
                    'An uninspected asset contributes nothing.',
                    'The backlog is a difference between two documents.',
                    'Thirty-six per cent have no record since 2011.',
                    'The condition did not change in a year.',
                    'This figure cannot settle the argument in either direction.',
                    'Anybody who tells you otherwise has not read the note on page two.'],
         'theme': 'a number that changed for a reason nobody expected',
         'qs': ['Tell me about a figure that changed because of how it was measured. Who '
                'noticed?',
                'Some people say a rise in a problem figure is always bad news. How far would '
                'you agree?',
                'How would you explain to a friend why better surveying can look like decline?',
                'Finally, describe something that got worse while the figures improved.'],
         'model': [(2,
                    'I would want to ask what changed first, the thing or the counting. A rise '
                    'can mean the problem grew or that somebody finally looked, and those two '
                    'call for opposite responses.'),
                   (3,
                    'If you have never inspected something, it contributes nothing to your list '
                    'of problems. The moment you inspect it, everything wrong with it appears at '
                    'once, and the list jumps.')],
         'selfcheck': ['I used two short sentences',
                       'I stressed the two subjects',
                       'I did not join them with but']},
        {'sub': 'Renewal and the cost of waiting',
         'focus': 'refusing the easy explanation',
         'skill': ('It was not incompetence and it was not underfunding',
                   ['Name the explanation you are refusing before you give yours.',
                    'Give the evidence against it immediately, in one clause.',
                    'Do not sound triumphant. The point is that the real cause is duller.']),
         'repeat': ['It was not incompetence.',
                    'It was not underfunding in general.',
                    'The officers were right to say no.',
                    'Look for the villain. There is not one.',
                    'The report named the girders and the mechanism.',
                    'The four million was available the whole time in the wrong pot.',
                    'What has to change is the rule that separates the pots, and it protects '
                    'somebody in every authority.'],
         'theme': 'a bad outcome that nobody caused',
         'qs': ['Tell me about something that went wrong where everybody followed the rules. '
                'What was the rule?',
                'Some people say every failure has somebody responsible for it. How far would '
                'you agree?',
                'How would you explain to a friend why a council might replace a bridge it could '
                'not paint?',
                'Finally, describe a rule that made sense once and does not now.'],
         'model': [(2,
                    'I would say most failures have a cause and a good many have no culprit. If '
                    'everybody in the chain did the correct thing and the outcome is still bad, '
                    'you are looking at the design of the chain.'),
                   (3,
                    'Paint comes out of the budget for repairs and a new bridge comes out of the '
                    'budget for building. The repair budget was empty and the building budget '
                    'was not, so the cheap job was impossible and the expensive one was '
                    'straightforward.')],
         'selfcheck': ['I named the explanation I was refusing first',
                       'I gave the evidence against it at once',
                       'I made the real cause sound duller, not more dramatic']},
        {'sub': 'What a backlog actually is',
         'focus': 'insisting on the right word for a transaction',
         'skill': ('It is not a saving. It is a borrowing.',
                   ['Refuse the word first, then supply yours. Two short sentences.',
                    'Stress the two nouns and nothing else in either sentence.',
                    'Then give the figure that justifies the swap.']),
         'repeat': ['It is a borrowing.',
                    'It is not a saving.',
                    'Nobody writes down an interest rate.',
                    'Six times more, and sometimes eight.',
                    'You keep fifteen pounds a square metre this year.',
                    'You commit to about a hundred within the decade.',
                    'If a finance director borrowed at an undisclosed rate there would be an '
                    'inquiry.'],
         'theme': 'a choice that looks like a saving and is not',
         'qs': ['Tell me about a saving that turned out to cost more. How did it work?',
                'Some people say spending less is always prudent. How far would you agree?',
                'How would you explain to a friend why putting off a repair is borrowing?',
                'Finally, describe a cost that arrived long after the decision.'],
         'model': [(2,
                    'I would separate spending less from spending less in total. A decision that '
                    'reduces this year and multiplies the fourth year is not prudence, it is a '
                    'loan, and the only thing missing is the paperwork.'),
                   (3,
                    'You keep the small amount now and you accept a much larger bill later. That '
                    'is exactly the structure of a loan, and the only difference is that nobody '
                    'tells you the rate.')],
         'selfcheck': ['I refused the word before supplying mine',
                       'I stressed the two nouns',
                       'I gave the figure that justifies the swap']},
        {'sub': 'Renewal and the cost of waiting',
         'focus': 'conceding an argument and refusing its relevance',
         'skill': ('The curve is right, and the curve is not why anything happens',
                   ['Concede in a short flat sentence and do not elaborate.',
                    'Then say where the cause actually is, with a word like because or the '
                    'reason.',
                    'Resist restating the concession. Saying it twice sounds like doubt.']),
         'repeat': ['The curve is right.',
                    'It is not why anything happens.',
                    'An underspend is surrendered, not carried.',
                    'I have nothing to add to it.',
                    'The money is voted for a single year.',
                    'A road resurfaced before it cracked looks like a road nobody touched.',
                    'The answer is not better slides, because thirty years of better slides '
                    'produced the position we are in.'],
         'theme': 'an explanation that is correct and beside the point',
         'qs': ['Tell me about an explanation you accepted and found useless. What was missing?',
                'Some people think once people understand a problem they will act. What do you '
                'think?',
                'How would you explain to a friend why prevention is politically hard?',
                'Finally, describe a time changing a rule worked better than arguing.'],
         'model': [(2,
                    'I think understanding is necessary and almost never sufficient. In this '
                    'unit everybody has understood the arithmetic for thirty years, and the '
                    'thing that has not changed is who votes the money and for how long.'),
                   (3,
                    'Because nobody can see it. A repair is visible to the people who '
                    'complained; work done before anything broke is indistinguishable from doing '
                    'nothing, and you cannot get credit for an absence.')],
         'selfcheck': ['I conceded in one short flat sentence',
                       'I named where the cause actually is',
                       'I did not restate the concession']}],
 'gram': {'title': 'Marked theme and given-new ordering',
          'headers': ['Unmarked', 'Marked theme'],
          'rows': [('Three point eight million of that rise is culverts.',
                    'Of that rise, three point eight million is culverts.'),
                   ('The progression accelerates once water enters.',
                    'Once water enters, the progression accelerates.'),
                   ('A weight restriction means no bus on that road.',
                    'On that road, a weight restriction means no bus.'),
                   ('Thirty-six per cent of the culverts have no record.',
                    'As for the culverts, thirty-six per cent have no record.'),
                   ('The surface admits water by the fifteenth year.',
                    'By the fifteenth year, the surface admits water.'),
                   ('The choice is between two budgets for the officer.',
                    'For the officer, the choice is between two budgets.'),
                   ('The deferral was formally a saving, albeit at a cost.',
                    'Albeit at a cost nobody stated, the deferral was a saving.')],
          'notes': ['English puts the known thing early and the new thing late, and a reader '
                    'uses that order to follow a paragraph. Fronting a phrase marks it as the '
                    'link back to the sentence before, which is why a marked theme reads as '
                    'cohesive and not as decoration.',
                    'The test for whether to front something is whether the reader has already '
                    'met it. Of that rise works because the rise was just mentioned; of the rise '
                    'would not.',
                    'Do not front more than one element. Two fronted phrases leave the reader '
                    'looking for a subject and finding none, which is the commonest '
                    'overcorrection at this level.'],
          'watch': 'Do not front a long clause and then add a comma before the verb as well. "By '
                   'the fifteenth year, the surface, admits water" has two themes and one of '
                   'them is a subject, which no reader can parse.',
          'ex': [('Rewrite with a marked theme.',
                  ['Three point eight million of that rise is culverts.',
                   'The progression accelerates once water enters the base.',
                   'A weight restriction means no bus on that road.',
                   'Thirty-six per cent of the culverts have no record since 2011.',
                   'The surface begins to admit water by the fifteenth year.',
                   'The choice is between two budgets for the officer.'],
                  ['Of that rise, three point eight million is culverts.',
                   'Once water enters the base, the progression accelerates.',
                   'On that road, a weight restriction means no bus.',
                   'As for the culverts, thirty-six per cent have no record since 2011.',
                   'By the fifteenth year, the surface begins to admit water.',
                   'For the officer, the choice is between two budgets.']),
                 ('Choose the opening that links to the sentence before.',
                  ['The backlog rose to 11.4 million. ______ , 3.8 million is new culvert '
                   'inspection.',
                   'Water entered the base in 2016. ______ , the surface failed within three '
                   'years.',
                   'Paint is revenue and a bridge is capital. ______ , the choice is not an '
                   'engineering one.',
                   'The report named the girders. ______ , nobody can call it ignorance.'],
                  ['Of that rise', 'From that point', 'For the officer', 'On that evidence']),
                 ('Correct the double theme.',
                  ['By the fifteenth year, the surface, admits water.',
                   'Of that rise, three point eight million, is culverts.',
                   'On that road, a weight restriction, means no bus.',
                   'As for the culverts, thirty-six per cent, have no record.'],
                  ['By the fifteenth year, the surface admits water.',
                   'Of that rise, three point eight million is culverts.',
                   'On that road, a weight restriction means no bus.',
                   'As for the culverts, thirty-six per cent have no record.'])],
          'bas': 'Build a Sentence in this unit asks what a figure covers. The tiles often begin '
                 'with a fronted phrase: of that rise, as for the culverts, by the fifteenth '
                 'year. Put it first and keep the comma.'},
 'fault': {'text': 'By the fifteenth year, the surface, admits water. Of the rise three point '
                   'eight million is culverts, so the condition did not change but our knowledge '
                   'did change. On that road and in that year, a weight restriction means no '
                   'bus. The officers was right to refuse the application. Do you know whether '
                   'has the culvert been inspected?',
           'faults': [('By the fifteenth year, the surface, admits water',
                       'By the fifteenth year, the surface admits water',
                       'A fronted phrase takes one comma, and the second comma leaves the '
                       'subject stranded from its verb.'),
                      ('Of the rise three point eight million is culverts',
                       'Of that rise, three point eight million is culverts',
                       'A marked theme needs the comma, and that rise rather than the rise, '
                       'because the point of fronting it is the link backwards.'),
                      ('our knowledge did change',
                       'our knowledge did',
                       'The second half of a contrast ends at the auxiliary; repeating the verb '
                       'destroys the parallel the sentence was built on.'),
                      ('On that road and in that year, a weight restriction means no bus',
                       'On that road, a weight restriction means no bus',
                       'Two fronted elements leave a reader looking for a subject, which is the '
                       'usual overcorrection once fronting has been taught.'),
                      ('The officers was right',
                       'The officers were right',
                       'A plural subject takes a plural verb, however far the reader is from '
                       'it.'),
                      ('whether has the culvert been inspected',
                       'whether the culvert has been inspected',
                       'An embedded question keeps statement order and does not invert the '
                       'auxiliary.')]},
 'rev': {'vocab': [('work that should have been done and has not been', 'backlog'),
                   ('the replacement of an asset at the end of its life', 'renewal'),
                   ('any work done to an asset to arrest decline', 'intervention'),
                   ('the setting aside of money by a formal vote', 'appropriation'),
                   ('a pipe carrying a watercourse under a road', 'culvert'),
                   ('whether an asset can still do its job', 'serviceability'),
                   ('with every space in the material full of water', 'saturated'),
                   ('the putting off of work to a later year', 'deferral'),
                   ('the whole span from construction to replacement', 'lifecycle'),
                   ('to judge the worth or condition of something', 'appraise'),
                   ('to get round an obstacle rather than through it', 'circumvent'),
                   ('running at the same time as something else', 'concurrent')],
         'gram': [('______ that rise, 3.8 million is culverts.', 'Of'),
                  ('Once water ______ the base, the progression accelerates.', 'enters'),
                  ('______ that road, a weight restriction means no bus.', 'On'),
                  ('______ for the culverts, thirty-six per cent have no record.', 'As'),
                  ('______ the fifteenth year, the surface admits water.', 'By'),
                  ('______ the officer, the choice is between two budgets.', 'For'),
                  ('The condition did not change. Our knowledge ______ .', 'did'),
                  ('Do you know whether the culvert ______ been inspected?', 'has')],
         'mini': [('A backlog figure rises when',
                   ('an asset deteriorates, or when it is inspected for the first time',
                    'funding is increased',
                    'an asset is replaced',
                    'a survey is postponed'),
                   0,
                   'An uninspected asset contributes nothing, so coverage and condition move the '
                   'same number.'),
                  ('Deterioration of a road surface is',
                   ('linear', 'flat and then steep', 'steep and then flat', 'unpredictable'),
                   1,
                   'An intact surface excludes water; once water enters, the progression '
                   'compounds.'),
                  ('Deferring a treatment is best described as',
                   ('a saving',
                    'a borrowing at an undisclosed rate',
                    'an efficiency',
                    'a deterioration'),
                   1,
                   'Fifteen pounds a square metre retained now against about a hundred within a '
                   'decade.'),
                  ('The bridge in the third passage could not be painted because',
                   ('no contractor was available',
                    'painting is revenue and the revenue budget was empty',
                    'the bridge was unsafe',
                    'the paint had been discontinued'),
                   1,
                   'Capital pays for building and replacing, and the officers were right to '
                   'refuse it.'),
                  ('Annuality means that',
                   ('inspections happen yearly',
                    'money is voted for one year and underspend is surrendered',
                    'assets are revalued yearly',
                    'programmes run for one year'),
                   1,
                   'Which turns a twenty-year programme into a sequence of one-year decisions.'),
                  ('The remedy the fifth passage proposes is',
                   ('a campaign of persuasion',
                    'a single whole-life vote with written statements of deferral cost',
                    'more frequent surveys',
                    'a higher discount rate'),
                   1,
                   'Because thirty years of persuasion produced the present position.')]},
 'tip': 'The two academic passages here are a pair you should read in order and then argue with. '
        'Cycle 4 proves that deferral costs more; cycle 5 accepts the proof and says it explains '
        'nothing. That move — granting an argument and relocating the problem — is the single '
        'most useful thing you can learn to do in the Writing section, and it appears in both '
        'model answers in this unit.'}

