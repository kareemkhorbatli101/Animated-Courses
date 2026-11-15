# -*- coding: utf-8 -*-
"""Unit 53 — Causation in Epidemiology.

Cycle 4 defines the subject and lets the methods fall out of the
definition. A causal claim about an individual compares the state
of exposure with the state of its absence, the second being
unobservable by construction rather than by any deficiency of
instrumentation; the population version substitutes the morbidity
under universal exposure against the morbidity under none, which
is estimable though neither term is observable. Confounding then
acquires an exact definition - the failure of the exposed and
unexposed to stand in for those two populations - and
randomisation answers it by construction, since an allocation by
chance cannot be associated with any characteristic, measured or
unmeasured. Where chance is inadmissible: the natural division,
the threshold, the before-and-after across two districts, the
instrument. Each is an argument about what distributed the
exposure, and the Bradford Hill considerations are aids to that
judgement rather than criteria.

Cycle 5 presses the definition until it hurts. A counterfactual
claim is well formed only under a specification of the second
world, and that specification consists in naming an intervention.
Body weight: the effect of a reduction depends on the route, so
exercise, surgery and undiagnosed illness give a family of numbers
wearing one name. A demographic category: no intervention exists
even in principle, and the estimate measures the treatment a
population receives or an artefact of the adjustment. The
consistency assumption is not strained here but inapplicable. Then
the refusal of the conclusion it appears to license, because no
authority can decline to reason about poverty, and the modest
resolution: name the intervention you mean - not the effect of
sugar, which is undefined, but the effect of a levy, which has
been estimated.

Cycle 3 is Snow in 1854, told as a method rather than a triumph:
the district comparison that could not discriminate because
contaminated water and contaminated air coincided district by
district, and then two companies supplying the same streets, one
intake moved upstream in 1852, households divided by the accidents
of commercial competition - with the assumption stated, the
warrant for it called historical rather than statistical, and what
would defeat it named.

Grammar: counterfactual reasoning at length - setting one up,
holding it across sentences, and marking the return to the actual
world."""

UNIT = {'n': 53,
 'vol': 6,
 'level': 'C1',
 'title': 'Causation in Epidemiology',
 'grammar': 'Counterfactual reasoning at length',
 'field': 'counterfactual, instrument, bias',
 'opener_line': 'This unit is about a comparison with one term missing. A causal claim sets the '
                'world that happened beside the world that did not, and the second of those is '
                'unobservable by construction, so every method in the field is an argument about '
                'what may stand in for it. Cycle 5 then asks what becomes of the claim when '
                'nobody could have assigned the exposure at all.',
 'subs': ['When a number frightens people',
          'What a cause means in a population',
          'When the data cannot answer'],
 'icons': ['chart', 'brain', 'brief'],
 'acad': [('unwarranted', 'not supported by what has been shown'),
          ('defeasible', 'holding unless something defeats it'),
          ('inescapable', 'not able to be avoided by any route'),
          ('admissible', 'allowed to count as evidence'),
          ('inadmissible', 'not allowed to count at all'),
          ('decisive', 'settling the matter by itself'),
          ('compelling', 'strong enough that refusal looks perverse'),
          ('cogent', 'clear, orderly and convincing'),
          ('fallacious', 'resting on a mistake in the reasoning'),
          ('vitiate', 'to spoil the force of an argument'),
          ('forestall', 'to prevent by acting first'),
          ('obviate', 'to make unnecessary'),
          ('repudiate', 'to reject formally and in public'),
          ('ineliminable', 'not able to be got rid of')],
 'fieldwords': [('counterfactual', 'what would have happened instead'),
                ('confounder', 'a third thing that explains both'),
                ('confounding', 'the mixing of an effect with its company'),
                ('aetiology', 'the account of what causes a disease'),
                ('morbidity', 'illness in a population, as distinct from death'),
                ('susceptibility', 'how easily a person takes the harm'),
                ('stratification', 'splitting a population before comparing'),
                ('covariate', 'a measured quantity used in the adjustment'),
                ('mediator', 'the step through which a cause acts'),
                ('mediation', 'the route from cause to outcome'),
                ('discontinuity', 'a sharp break at a threshold'),
                ('manipulable', 'able to be set by an intervention'),
                ('identification', 'the argument that a number means what it claims'),
                ('sensitivity', 'how much a conclusion moves with an assumption'),
                ('dose', 'the amount of exposure a person received'),
                ('interventional', 'about what happens when something is done')],
 'collocs': [('a knock-on effect', 'one consequence producing the next'),
             ('all things being equal', 'with nothing else changed'),
             ('other things considered', 'after allowing for the rest'),
             ('on the face of it', 'before looking behind the figure'),
             ('rule out', 'to show that something is not the case'),
             ('a red herring', 'a fact that leads nowhere'),
             ('cause for concern', 'enough to justify worry'),
             ('a false alarm', 'a warning that turned out to be nothing'),
             ('take account of', 'to allow for in the reckoning'),
             ('the long view', 'judgement over a long period')],
 'stance': [('the inference is defeasible', 'held unless defeated'),
            ('nothing in the data can settle', 'marking the limit of evidence'),
            ('it is worth stating the assumption', 'making a premise explicit'),
            ('on the most favourable reading', 'granting the best case'),
            ('the question is what would have happened', 'naming the counterfactual')],
 'nuance': [('confounder / mediator', 'explains both / lies on the route'),
            ('association / causation', 'they move together / one makes the other'),
            ('dose / exposure', 'how much / whether at all')],
 'candos': ['I can hold a counterfactual steady across several sentences.',
            'I can use had it not been for and in that case at length.',
            'I can say what a comparison would have to hold constant.',
            'I can distinguish a confounder from a step on the route.',
            'I can state the assumption a number depends on.',
            'I can describe a natural experiment and what made it one.'],
 'vocab_talk': ['Describe a time two things went together and neither caused the other.',
                'What would you have to hold constant to compare two schools?',
                'When is a public warning worth giving on incomplete evidence?',
                'Can you be sure of a cause you cannot test by experiment?'],
 'again': ['confound',
           'spurious',
           'randomise',
           'blinding',
           'endpoint',
           'surrogate',
           'prevalence',
           'epidemiology'],
 'family': ('cause',
            [('causal', 'adjective', 'the causal claim goes beyond the association'),
             ('causation', 'noun', 'causation is a claim about a counterfactual'),
             ('causative', 'adjective', 'the causative step was identified later')]),
 'r1': {'sub': 'When a number frightens people',
        'skill': ('Nouns, adjectives and verbs from the same root',
                  ['Nouns of process take -ion, -ation or -ment; of quality, -ity, -ence or '
                   '-ness.',
                   'An adjective from a verb takes -able, -ive or -ory; the negative goes on the '
                   'adjective.',
                   'Decide the word class from the grammar before the meaning.']),
        'guided_text': 'Two things that move together may be related in four ways and only one '
                       'of them is the --------ing one. The first may cause the second; the '
                       'second may cause the first, which is more common than people expect; a '
                       'third thing may cause both, which is --------ing; or the pair may have '
                       'been ------ed in a way that produced the pattern. Nothing in the figures '
                       'tells you which, because all four produce the same --------ion, and the '
                       'only route to an answer is an ----ment about what would have happened '
                       'otherwise.',
        'guided': ['interest', 'confound', 'select', 'correlat', 'argu'],
        'guided_hint': '---ing is interesting — the slot follows only one of them is the, so it '
                       'needs an adjective.',
        'exam_text': 'A causal claim is a claim about a world that did not happen. To say that '
                     'the water caused the ----era is to say that if those households had drawn '
                     'their water elsewhere, with everything else about them -------ed, fewer of '
                     'them would have died. That sentence is not an ------ation. It is a '
                     '------ison between the world we have and a world nobody has seen, and '
                     'every method in this field is an attempt to find a -----itute for the '
                     'world we cannot visit. A trial supplies one by -------ing the exposure at '
                     'random, so that the two groups differ in nothing else. Where a trial is '
                     '------ible, the work is to find a comparison that is ----ably as good: two '
                     'populations divided by an accident, a threshold that cuts a continuous '
                     'variable into two, a rule applied in one district and not the next. The '
                     '---------ation is never automatic and the assumption it rests on is always '
                     '-----able, which is the discipline the field is built on.',
        'exam': ['chol',
                 'unchang',
                 'observ',
                 'compar',
                 'subst',
                 'allocat',
                 'imposs',
                 'argu',
                 'identific',
                 'state']},
 'r2': {'sub': 'What a cause means in a population',
        'skill': ('Reading a protocol against a referee’s objection',
                  ['A protocol states what will be adjusted for. An objection usually accepts '
                   'the design.',
                   'Look for the variable each party is arguing about.',
                   'A question about the reply wants the ground given, not the tone.']),
        'docs': [('notice',
                  'Eastmoor Public Health Observatory · analysis plan for the air quality and '
                  'asthma study',
                  ['# The question',
                   'Whether the low emission zone introduced in March 2029 reduced emergency '
                   'admissions for asthma among children under sixteen.',
                   '# The design',
                   '* A comparison of the twelve months before and after the zone began, in the '
                   'zone and in three comparison districts chosen before the data were examined.',
                   '# Prespecified adjustment',
                   '* Age, sex, index of deprivation, distance from the nearest main road, and '
                   'month of year. The covariate list is fixed by this plan and will not be '
                   'extended.',
                   '# What will not be adjusted for',
                   '* Smoking in the household, which is not recorded in the admissions data, '
                   'and housing damp, which is recorded for fewer than a fifth of cases.',
                   '# Sensitivity',
                   '* The main estimate will be published with the figure it would take for an '
                   'unmeasured confounder to account for the whole of it.'],
                  'notice'),
                 ('email',
                  'referee4@thelancet-regional.org',
                  'analysis@eastmoor-pho.nhs.uk',
                  '08/02/2033',
                  'Analysis plan — the comparison districts, and one variable I would move',
                  ['Dear colleagues,',
                   '',
                   'This is the most honest analysis plan I have refereed this year,',
                   'and the sensitivity figure should be standard practice everywhere.',
                   'Two comments, one minor and one that would change the reading.',
                   '',
                   'The minor one. You have chosen the comparison districts before',
                   'looking at the data, which is right, and you have not said what',
                   'you would do if one of them diverged from the other two during',
                   'the study period. A pre-committed rule is worth more than a',
                   'decision taken in September.',
                   '',
                   'The one that matters. Distance from the nearest main road is in',
                   'your covariate list, and I think it is a mediator rather than a',
                   'confounder. The zone works by reducing traffic on exactly those',
                   'roads. Adjust for distance and you remove part of the effect you',
                   'are trying to measure, and the estimate you publish will be the',
                   'part of the benefit that does not operate through traffic, which',
                   'is not the quantity anybody wants.',
                   '',
                   'I would move it out of the adjustment and report the unadjusted',
                   'and adjusted estimates side by side.',
                   '',
                   'Referee 4'])],
        'guided': [('What is the question the plan asks?',
                    ('Whether air quality improved',
                     'Whether the zone reduced emergency admissions for asthma among children',
                     'Whether traffic fell on main roads',
                     'Whether deprivation explains admissions'),
                    1,
                    'The outcome is admissions, and the population is children under sixteen.'),
                   ('What is compared?',
                    ('Two years in the zone only',
                     'Twelve months before and after, in the zone and three comparison districts',
                     'Children and adults',
                     'Three districts before the zone began'),
                    1,
                    'The comparison districts were chosen before the data were examined.'),
                   ('Which variables will be adjusted for?',
                    ('Smoking and damp',
                     'Age, sex, deprivation, distance from a main road and month',
                     'Only age and sex',
                     'Nothing, by design'),
                    1,
                    'And the plan says the list will not be extended.'),
                   ('Why will household smoking not be adjusted for?',
                    ('It has no effect',
                     'It is not recorded in the admissions data',
                     'It was excluded by the referee',
                     'It is a mediator'),
                    1,
                    'Damp is recorded for fewer than a fifth of cases, which is a different '
                    'reason.')],
        'exam': [('What will be published with the main estimate?',
                  ('A list of excluded cases',
                   'The figure an unmeasured confounder would need to account for the whole '
                   'effect',
                   'The three district estimates separately',
                   'A revised covariate list'),
                  1,
                  'Which is what the referee calls the honest part of the plan.'),
                 ('What does the referee say about the comparison districts?',
                  ('They are badly chosen',
                   'Choosing them in advance is right, and the plan lacks a rule for divergence',
                   'They should be replaced',
                   'There should be five of them'),
                  1,
                  'A pre-committed rule is worth more than a decision taken in September.'),
                 ('What does the referee say about distance from a main road?',
                  ('It is measured badly',
                   'It is a mediator rather than a confounder',
                   'It should be the main exposure',
                   'It is irrelevant'),
                  1,
                  'The zone works by reducing traffic on exactly those roads.'),
                 ('What happens if the analysis adjusts for it?',
                  ('The estimate becomes more precise',
                   'Part of the effect being measured is removed',
                   'The sensitivity figure changes',
                   'The comparison districts become unusable'),
                  1,
                  'What is left is the benefit that does not operate through traffic.'),
                 ('What does the referee call that remaining quantity?',
                  ('The causal effect',
                   'Not the quantity anybody wants',
                   'The adjusted estimate',
                   'A mediated effect'),
                  1,
                  'Which is the point of the objection.'),
                 ('What does the referee recommend?',
                  ('Abandoning the adjustment entirely',
                   'Moving the variable out and reporting both estimates side by side',
                   'Adding smoking to the list',
                   'Extending the study period'),
                  1,
                  'Both estimates, so that a reader can see the difference.'),
                 ('Which part of the plan does the referee praise?',
                  ('The covariate list',
                   'The sensitivity figure',
                   'The twelve-month window',
                   'The exclusion of damp'),
                  1,
                  'He says it should be standard practice everywhere.')]},
 'r3': {'sub': 'When the data cannot answer',
        'title': 'Two Companies, One Street',
        'words': 300,
        'skill': ('Reading a comparison that nobody arranged',
                  ['The difficulty comes first: why the obvious comparison was worthless.',
                   'Note what made the eventual comparison a good one.',
                   'A question about the conclusion wants what the case does not establish.']),
        'paras': ['The London cholera epidemics of the eighteen forties and fifties were '
                  'disputed by observers with identical figures before them. Mortality near the '
                  'river exceeded mortality on higher ground, an observation consistent with a '
                  'waterborne aetiology and equally consistent with the prevailing account of '
                  'the agent as a foul atmosphere rising from the same low ground. A comparison '
                  'of districts could not discriminate between the two accounts, since '
                  'contaminated water and contaminated air coincided district by district, and '
                  'the confounding was accordingly complete.',
                  'The comparison that settled the question was nobody’s design. Two companies '
                  'supplied water to the same southern districts, with pipes along the same '
                  'streets and occasionally into adjacent houses, and in 1852 one of them moved '
                  'its intake upstream of the sewage outfalls while the other did not. The '
                  'households of the two companies were otherwise alike in situation, occupation '
                  'and air, their division between the two suppliers being an accident of '
                  'commercial competition rather than any characteristic of their own. Mortality '
                  'among customers drawing from the contaminated reach ran at several times the '
                  'rate recorded among immediate neighbours.',
                  'It is worth stating the assumption on which that inference rests. The '
                  'households had to be alike in everything but the water, and the warrant for '
                  'that is historical rather than a matter of statistical adjustment: the two '
                  'companies had competed street by street for decades and neither selected its '
                  'customers. The inference is defeasible, and its defeat would require evidence '
                  'of some further difference between the two sets of customers, which is '
                  'precisely what later critics sought without success. The case established '
                  'nothing about the organism, identified three decades afterwards, and '
                  'everything about the method: where an exposure has been distributed by '
                  'something unrelated to the outcome, an undesigned comparison can carry the '
                  'weight of a designed one.'],
        'guided': [('Why could comparing districts not settle the question?',
                    ('The figures were unreliable',
                     'The districts were too small',
                     'Every district with bad water also stood in bad air',
                     'Nobody had collected the data'),
                    2,
                    'The confounding between water and air was complete.'),
                   ('What had one of the two companies done in 1852?',
                    ('Lowered its prices',
                     'Moved its intake upstream of the sewage outfalls',
                     'Withdrawn from the southern districts',
                     'Filtered its supply'),
                    1,
                    'The other had not, which is what creates the comparison.'),
                   ('How had households come to be supplied by one company rather than the '
                    'other?',
                    ('By their own choice of quality',
                     'By the accidents of commercial competition',
                     'By district boundaries',
                     'By the water companies selecting them'),
                    1,
                    'Pipes ran along the same streets and sometimes into adjacent houses.'),
                   ('What was the result?',
                    ('No difference between the two sets of customers',
                     'Deaths several times higher among customers of the contaminated supply',
                     'A small difference in one district',
                     'A difference only in the first year'),
                    1,
                    'Recorded among neighbours otherwise alike.')],
        'exam': [('What was the prevailing account of the disease?',
                  ('A waterborne agent',
                   'A foul atmosphere rising from low ground',
                   'Contagion between persons',
                   'An unknown organism'),
                  1,
                  'It fitted the district figures as well as the waterborne account did.'),
                 ('What does the writer say the households had to be alike in?',
                  ('Income', 'Everything except the water', 'Water supply', 'Occupation only'),
                  1,
                  'That is the assumption the inference rests on.'),
                 ('What kind of argument supports that assumption?',
                  ('Statistical', 'Historical', 'Experimental', 'None is given'),
                  1,
                  'The two companies had competed street by street for decades and neither '
                  'selected its customers.'),
                 ('What would defeat the inference?',
                  ('A larger sample',
                   'Evidence that one company’s customers differed in some further respect',
                   'A different account of the organism',
                   'A longer period of observation'),
                  1,
                  'Later critics looked for exactly that and did not find it.'),
                 ('What did the case establish about the organism?',
                  ('That it was waterborne',
                   'Nothing; it was identified three decades afterwards',
                   'That it was airborne',
                   'That it was unidentifiable'),
                  1,
                  'The case is about method rather than about microbiology.'),
                 ('What does the phrase the inference is defeasible signal?',
                  ('That the inference is weak',
                   'That it holds unless specific evidence defeats it',
                   'That it has been defeated',
                   'That it cannot be tested'),
                  1,
                  'And the writer says what such evidence would be.'),
                 ('What general conclusion does the writer draw?',
                  ('That natural comparisons are always adequate',
                   'That where an exposure is distributed by something unrelated to the outcome, '
                   'an undesigned comparison can carry the weight',
                   'That districts should never be compared',
                   'That epidemics are hard to study'),
                  1,
                  'Which is the method the rest of the unit is about.'),
                 ('Why does the writer mention the sewage outfalls?',
                  ('To date the epidemic',
                   'Because the position of the intake relative to them is what divides the two '
                   'supplies',
                   'To explain the atmosphere account',
                   'To criticise the companies'),
                  1,
                  'One company drew from the contaminated reach and the other did not.'),
                 ('Which would the writer most likely accept?',
                  ('A comparison nobody designed is always inferior',
                   'The strength of an undesigned comparison depends on what decided who was '
                   'exposed',
                   'Historical arguments cannot support causal claims',
                   'Confounding can always be adjusted away'),
                  1,
                  'The accidents of competition are what make this comparison as good as a '
                  'designed one.')]},
 'r4': {'sub': 'What a cause means in a population',
        'title': 'The World That Did Not Happen',
        'words': 405,
        'skill': ('Reading a definition and the methods that follow from it',
                  ['The definition comes first and one impossibility follows immediately.',
                   'Four designs are set out. Note what each one argues about.',
                   'A question about the ending wants the assumption they all share.']),
        'paras': ['A causal claim about an individual is a comparison between two states of that '
                  'individual, the state of exposure and the state of its absence, the second of '
                  'which is unobservable by construction. This is the fundamental obstacle of '
                  'the subject rather than a deficiency of instrumentation: no apparatus will '
                  'ever display the unexposed counterpart of an exposed patient. The population '
                  'version substitutes an average for the individual comparison: the difference '
                  'between the morbidity under universal exposure and the morbidity under none, '
                  'and that reformulation renders the quantity estimable without rendering '
                  'either term observable.',
                  'Confounding acquires an exact definition in that framework. The exposed and '
                  'the unexposed are asked to stand in for two populations differing in the '
                  'exposure and in nothing else, and confounding is the failure of that '
                  'substitution: any covariate associated with both exposure and outcome leaves '
                  'the groups unalike in a respect bearing on the result. Randomisation answers '
                  'the difficulty by construction rather than by adjustment, since an allocation '
                  'made by chance cannot be associated with any characteristic, measured or '
                  'unmeasured. Where allocation by chance is inadmissible, which is the ordinary '
                  'case in this field, the work consists in the identification of a substitute '
                  'and the defence of it.',
                  'Four designs are standard, and each is an argument about what distributed the '
                  'exposure. A natural division assigns the exposure by an accident unrelated to '
                  'the outcome, as two water companies once divided a street between them. A '
                  'threshold design exploits a rule that cuts a continuous quantity in two, so '
                  'that the population immediately either side of the discontinuity differs in '
                  'the exposure and in little else. A before-and-after comparison across two '
                  'districts, one of them adopting the measure, subtracts whatever was common to '
                  'both. An instrument is a variable that moves the exposure and reaches the '
                  'outcome by no other route; and the four are not substitutes for one another, '
                  'the choice among them being settled by the accident available: a threshold '
                  'where an administrative rule happens to exist, a natural division where '
                  'competition or geography once sorted a population, an instrument where some '
                  'unrelated lottery moved the exposure and nothing else. The considerations '
                  'collected by Bradford Hill in 1965 — strength, consistency, a gradient with '
                  'dose, plausibility of mechanism — are aids to judgement of this kind rather '
                  'than criteria, and the next passage asks what happens when the exposure is '
                  'one that nobody could have assigned at all.'],
        'guided': [('What is a causal claim about a person, on this account?',
                    ('A statement about a population',
                     'A comparison between two states of that person, one of them unobservable',
                     'An association with a dose',
                     'A prediction about the future'),
                    1,
                    'And the unobservable term is unobservable by construction.'),
                   ('Why is that not a deficiency of our instruments?',
                    ('Instruments are improving',
                     'No apparatus will ever display the unexposed version of an exposed patient',
                     'The data are incomplete',
                     'The effect is too small'),
                    1,
                    'The writer calls it the fundamental obstacle of the subject.'),
                   ('What does the population version substitute?',
                    ('A sample for a population',
                     'An average for the individual comparison',
                     'A trial for an observation',
                     'A gradient for a difference'),
                    1,
                    'Which makes the quantity estimable without making either term observable.')],
        'exam': [('How is confounding defined in this framework?',
                  ('An error of measurement',
                   'The failure of the exposed and unexposed to stand in for the two worlds',
                   'A reversed causal direction',
                   'A selected sample'),
                  1,
                  'A covariate associated with both leaves the groups unalike in a relevant '
                  'respect.'),
                 ('Why does randomisation answer the difficulty by construction?',
                  ('It produces larger samples',
                   'An allocation made by chance cannot be associated with any characteristic',
                   'It removes measurement error',
                   'It allows adjustment afterwards'),
                  1,
                  'Measured or unmeasured, which is the point of the phrase.'),
                 ('What does a threshold design exploit?',
                  ('A natural accident',
                   'A rule that cuts a continuous quantity in two',
                   'A variable that moves the exposure',
                   'A change in one district only'),
                  1,
                  'The population either side of the discontinuity differs in little else.'),
                 ('What does an instrument have to satisfy?',
                  ('It must be measured precisely',
                   'It must move the exposure and reach the outcome by no other route',
                   'It must be randomly assigned',
                   'It must be unrelated to the exposure'),
                  1,
                  'Which is the hardest of the four conditions to defend.'),
                 ('How does the writer describe the Bradford Hill considerations?',
                  ('As criteria that must all be met',
                   'As aids to judgement rather than criteria',
                   'As superseded by the four designs',
                   'As a definition of causation'),
                  1,
                  'Strength, consistency, a gradient with dose and plausibility of mechanism.')]},
 'r5': {'sub': 'When the data cannot answer',
        'title': 'The Intervention Nobody Can Perform',
        'words': 397,
        'skill': ('Reading an objection to a framework from inside it',
                  ['The objection accepts the counterfactual definition and asks what it '
                   'requires.',
                   'Two examples carry the attack. Note what is wrong with each quantity.',
                   'The objection then concedes what a public authority cannot do.']),
        'paras': ['The counterfactual definition is accepted in the objection that follows and '
                  'is the source of it. If a causal claim compares the world of an exposure with '
                  'the world of its absence, the claim is well formed only under a specification '
                  'of that second world, and the specification consists in the naming of an '
                  'intervention that would have produced it. Where the exposure is manipulable '
                  'the requirement is satisfied without comment: the unexposed world is the one '
                  'of the tablet undispensed, the zone unintroduced, the pipe drawing from the '
                  'other reach. Where the exposure is not manipulable the requirement is not '
                  'satisfied at all, and a substantial literature reports estimates of '
                  'quantities that have not been defined.',
                  'Two examples are standard and both are instructive. The first is body weight, '
                  'where the effect of a reduction depends entirely on the route of the '
                  'reduction: populations reduced by exercise, by surgical intervention and by '
                  'undiagnosed illness exhibit different morbidity, so that the effect of weight '
                  'is not one quantity but a family of them. The second is a demographic '
                  'category, where no intervention exists even in principle, and an estimate of '
                  'its effect is either a measure of the treatment a population receives or an '
                  'artefact of the adjustment. The assumption the framework requires at this '
                  'point has a name, the consistency assumption, and in these cases it is not '
                  'approximately satisfied but inapplicable.',
                  'The objection is uncomfortable because the conclusion it appears to license '
                  'is unavailable. No public authority can decline all reasoning about poverty, '
                  'obesity or discrimination on the ground of their unassignability, and a '
                  'strict demand for manipulable exposures would repudiate most of the '
                  'achievement of public health. The resolution proposed by the authors of the '
                  'objection is modest and, in practice, clarifying: specify the intervention '
                  'you actually mean. The effect of sugar is undefined; the effect of a levy on '
                  'sugary drinks is estimable, has been estimated, and is the quantity a '
                  'minister can act upon, though the clarification carries a cost of its own, '
                  'since a question narrowed to one instrument answers for that instrument '
                  'alone, and the minister who enquired about sugar is handed instead an '
                  'estimate about a levy. What remains unsettled is the status of the older '
                  'literature, which asked the undefined question and sometimes obtained an '
                  'answer that has since been confirmed by a study asking the better one.'],
        'guided': [('What is the source of the objection?',
                    ('A rejection of the counterfactual definition',
                     'The counterfactual definition itself',
                     'A new statistical method',
                     'The Bradford Hill considerations'),
                    1,
                    'The claim is well formed only where the second world is specified.'),
                   ('How is the second world specified?',
                    ('By measuring the exposure precisely',
                     'By naming an intervention that would have produced it',
                     'By adjusting for covariates',
                     'By choosing a comparison district'),
                    1,
                    'Which is satisfied without comment where the exposure is manipulable.'),
                   ('What does the writer say a substantial literature reports?',
                    ('Estimates that are too small',
                     'Estimates of quantities that have not been defined',
                     'Trials that were never run',
                     'Associations without gradients'),
                    1,
                    'That is the charge the two examples are brought to support.')],
        'exam': [('Why is the effect of a lower body weight not one quantity?',
                  ('It cannot be measured',
                   'It depends on the route by which the weight was lower',
                   'It varies between countries',
                   'It is confounded by age'),
                  1,
                  'Exercise, surgery and undiagnosed illness give different morbidity.'),
                 ('What does the writer say an estimate for a demographic category is?',
                  ('A causal effect',
                   'A mediated effect',
                   'A measure of the treatment a population receives, or an artefact of the '
                   'adjustment',
                   'Unmeasurable in principle'),
                  2,
                  'No intervention exists even in principle.'),
                 ('What is the consistency assumption said to be in these cases?',
                  ('Approximately satisfied',
                   'Inapplicable',
                   'Satisfied by randomisation',
                   'Testable'),
                  1,
                  'Which is a stronger charge than saying it is strained.'),
                 ('Why is the objection uncomfortable?',
                  ('It is hard to follow',
                   'The conclusion it appears to license is unavailable to a public authority',
                   'It relies on two examples only',
                   'It was made by the framework’s own authors'),
                  1,
                  'No authority can decline to reason about poverty or obesity.'),
                 ('What resolution is proposed?',
                  ('Abandoning the counterfactual framework',
                   'Specifying the intervention actually meant',
                   'Restricting the field to trials',
                   'Adjusting for more covariates'),
                  1,
                  'The effect of sugar is undefined; the effect of a levy is estimable.')]},
 'l1': {'sub': 'When a number frightens people',
        'caption': 'A journalist and a statistician on the telephone',
        'skill': ('Hearing somebody refuse to confirm a headline',
                  ['Four readings of one correlation are offered. Count them.',
                   'Listen for the question she says the figure cannot answer.',
                   'The item about the warning is the one the conversation is for.']),
        'warm': [('Man: So the two go together?',
                  ('They do. That is the only thing the figure shows.',
                   'No, they are unrelated.',
                   'Four readings.',
                   'In the data.'),
                  0,
                  'Association is what the figure reports and all it reports.'),
                 ('Man: Could the second be causing the first?',
                  ('It happens more often than anybody expects.',
                   'No, that is impossible.',
                   'Yes, a third thing.',
                   'A threshold.'),
                  0,
                  'Reverse causation is the second of her four readings.'),
                 ('Man: Can I write that it may be a cause?',
                  ('Write that it is one of four readings and nobody has excluded the others.',
                   'Yes, write that it causes it.',
                   'No, write nothing.',
                   'Next week.'),
                  0,
                  'She offers wording rather than a refusal.')],
        'script': [('Woman',
                    'Before you ask: yes, the two things move together, and that is the whole of '
                    'what the study found.'),
                   ('Man', 'My editor wants to know whether one causes the other.'),
                   ('Woman',
                    'Of course he does. Here is the difficulty. There are four ways two things '
                    'can move together and the figure is the same under all four.'),
                   ('Man', 'Give me the four.'),
                   ('Woman',
                    'One: the first causes the second, which is your headline. Two: the second '
                    'causes the first, which happens far more often than people expect. Three: '
                    'something else causes both. Four: the sample was assembled in a way that '
                    'produced the pattern.'),
                   ('Man', 'The fourth one sounds like an accusation.'),
                   ('Woman',
                    'It is not. Suppose you recruit through a clinic. Everybody in your sample '
                    'is ill enough to attend a clinic, and that alone can manufacture a '
                    'correlation between two things that are unrelated in the street outside.'),
                   ('Man', 'So what am I allowed to print?'),
                   ('Woman',
                    'You are allowed to print what the study says, which is that the two are '
                    'associated, with this size and this interval. What you cannot print is the '
                    'word cause, because nothing in the data can settle which of the four you '
                    'are looking at.'),
                   ('Man', 'And if I write may cause?'),
                   ('Woman',
                    'Then you have written something true and useless, because may cause is also '
                    'true of the other three readings. If you want a sentence that is both true '
                    'and informative, write that it is one of four possible readings and that '
                    'the authors have excluded none of the others.'),
                   ('Man', 'Nobody will read that.'),
                   ('Woman',
                    'Somebody will, and here is the part I would put to your editor. The last '
                    'three times this went the other way, the warning was issued, the advice was '
                    'reversed within a decade, and the people who changed their diet twice '
                    'stopped believing any of it. The cost of a false alarm is not zero. It is '
                    'paid in the next true one.')],
        'items': [('What does the statistician say the study found?',
                   ('That one thing causes another',
                    'That the two things move together, and nothing more',
                    'That the sample was badly assembled',
                    'That the effect is large'),
                   1,
                   'Association with a size and an interval is the whole finding.'),
                  ('Which of her four readings does she say happens more often than people '
                   'expect?',
                   ('The first causes the second',
                    'The second causes the first',
                    'Something else causes both',
                    'The sample produced the pattern'),
                   1,
                   'Reverse causation is her second reading.'),
                  ('What does she say recruiting through a clinic can do?',
                   ('Reduce the sample size',
                    'Manufacture a correlation between unrelated things',
                    'Introduce a confounder',
                    'Improve the estimate'),
                   1,
                   'Everybody in the sample is ill enough to attend a clinic.'),
                  ('What may the journalist print?',
                   ('That one thing causes the other',
                    'That the two are associated, with the size and the interval',
                    'That the study is unreliable',
                    'Nothing at all'),
                   1,
                   'What he cannot print is the word cause.'),
                  ('Why does she object to may cause?',
                   ('It is false',
                    'It is true of the other three readings as well',
                    'It is too cautious',
                    'It overstates the interval'),
                   1,
                   'True and useless, in her phrase.'),
                  ('What wording does she offer instead?',
                   ('That the finding is preliminary',
                    'That it is one of four possible readings and none of the others has been '
                    'excluded',
                    'That the study should be repeated',
                    'That the effect may be reversed'),
                   1,
                   'She supplies a sentence that is both true and informative.'),
                  ('What does she say the cost of a false alarm is paid in?',
                   ('Money', 'The next true one', 'Reputation', 'Nothing'),
                   1,
                   'Advice reversed within a decade leaves people believing none of it.')]},
 'l2': {'sub': 'What a cause means in a population',
        'caption': 'The analysis team answering the referee at a meeting',
        'poster': ['Zone from March 2029 · 12 months either side',
                   'Adjust: age, sex, deprivation, road distance, month',
                   'Publish the confounder a sceptic would need'],
        'skill': ('Hearing a team accept one correction and refuse half of another',
                  ['The lead analyst separates the two comments before answering either.',
                   'Note what she concedes about the mediator and what she keeps.',
                   'The item about the pre-committed rule is the one that carries the lesson.']),
        'warm': [('Man: Is distance a mediator?',
                  ('Partly. That is why the answer is both estimates.',
                   'No, it is a confounder.',
                   'Yes, entirely.',
                   'Three districts.'),
                  0,
                  'A variable can lie on one route and confound another.'),
                 ('Man: Will you write the divergence rule?',
                  ('Today, before we see any data.',
                   'No, we will decide in September.',
                   'It is already written.',
                   'A fifth of cases.'),
                  0,
                  'A rule written in advance is worth more than a decision later.'),
                 ('Man: Does smoking go into the adjustment?',
                  ('It cannot. It is not in the data at all.',
                   'Yes, we have it.',
                   'Only for a fifth.',
                   'As a mediator.'),
                  0,
                  'What is not recorded cannot be adjusted for, at any price.')],
        'script': [('Woman',
                    'Two comments from the referee and I am going to take the second one first, '
                    'because it is the one that would change our answer. He says distance from a '
                    'main road is a mediator and not a confounder. He is partly right, and the '
                    'part where he is right matters. The zone reduces traffic on main roads; '
                    'living near a main road is how the exposure reaches a child; so adjusting '
                    'for distance removes some of the effect we are trying to measure. That is a '
                    'real error and we would have published a number smaller than the truth. '
                    'Where I think he is half-right is that distance is also doing confounder '
                    'work, because the zone boundary and the main roads are not independent of '
                    'each other, and deprivation runs along those roads as well. So we will do '
                    'what he recommends and one thing more: unadjusted and adjusted side by '
                    'side, and a note saying which comparison answers which question. Now the '
                    'first comment, which I had thought was minor and is not. We chose three '
                    'comparison districts in advance, and we never said what we would do if one '
                    'of them went its own way. If that happens in September we shall be deciding '
                    'whether to drop a district while looking at the result of dropping it, '
                    'which is exactly the thing this plan exists to prevent. So it goes in '
                    'today, in writing, before anybody sees a number: if one district diverges '
                    'from the other two by more than a stated amount in the pre-period, it is '
                    'reported separately and the main estimate uses the other two.')],
        'items': [('Which comment does she answer first, and why?',
                   ('The first, because it is minor',
                    'The second, because it would change their answer',
                    'The second, because it is easier',
                    'Neither; she defers both'),
                   1,
                   'The mediator question affects the published number.'),
                  ('How does the exposure reach a child, on her account?',
                   ('Through household smoking',
                    'Through living near a main road',
                    'Through damp housing',
                    'Through the season'),
                   1,
                   'Which is what makes distance a step on the route.'),
                  ('What would their original plan have published?',
                   ('A number larger than the truth',
                    'A number smaller than the truth',
                    'No number at all',
                    'An unadjusted estimate'),
                   1,
                   'Adjusting for a mediator removes part of the effect.'),
                  ('Why does she call the referee half-right?',
                   ('The data are poor',
                    'Distance is also doing confounder work, since deprivation runs along those '
                    'roads',
                    'The zone boundary is unclear',
                    'The referee misread the plan'),
                   1,
                   'A variable can mediate one route and confound another.'),
                  ('What will they publish?',
                   ('The adjusted estimate only',
                    'Both estimates, with a note on which answers which question',
                    'The unadjusted estimate only',
                    'A sensitivity figure instead'),
                   1,
                   'That is the referee’s recommendation and one thing more.'),
                  ('What rule goes in today?',
                   ('A new covariate list',
                    'What to do if one comparison district diverges in the pre-period',
                    'A longer study window',
                    'An exclusion for damp'),
                   1,
                   'Otherwise the decision would be taken while looking at its own result.')]},
 'l3': {'sub': 'When the data cannot answer',
        'caption': 'A lecture on a comparison nobody designed',
        'board': ['Districts: water and air confounded completely',
                  'Two companies, same streets, adjacent houses',
                  '1852: one intake moved upstream',
                  'Assumption: alike in everything but the water'],
        'skill': ('Hearing a case used to teach a method',
                  ['The failed comparison first, then the one that worked.',
                   'Listen for what the lecturer says the whole case rests on.',
                   'The item about the organism is the one the lecture is for.']),
        'warm': [('Woman: Why not just compare the districts?',
                  ('Because bad water and bad air sat in the same places.',
                   'Because the figures were wrong.',
                   'Two companies.',
                   'In 1852.'),
                  0,
                  'The two accounts predicted the same district pattern.'),
                 ('Woman: What made the company comparison work?',
                  ('Nobody chose which house got which supply.',
                   'The companies were honest.',
                   'The sample was larger.',
                   'Three decades.'),
                  0,
                  'Commercial competition had divided the street rather than any characteristic '
                  'of the households.'),
                 ('Woman: Did it prove what the agent was?',
                  ('Not at all. That came thirty years later.',
                   'Yes, immediately.',
                   'Yes, the organism.',
                   'A foul atmosphere.'),
                  0,
                  'The case is about method rather than about microbiology.')],
        'script': [('Man',
                    'I want to teach you a method through a case, and the case begins with a '
                    'comparison that does not work. London, cholera, the middle of the '
                    'nineteenth century. Districts beside the river die at several times the '
                    'rate of districts on the hill. Now, that figure is perfectly consistent '
                    'with the water being the agent. It is also perfectly consistent with the '
                    'orthodox view of the day, which was that the agent was bad air rising off '
                    'the same low wet ground. Two accounts, one figure, no way to choose, '
                    'because every household drinking bad water was also breathing bad air. That '
                    'is confounding, and it is complete: there is no household in London that '
                    'has one without the other. Now the comparison that worked, and notice that '
                    'nobody arranged it. South of the river two water companies competed house '
                    'by house. Same streets. Sometimes the two sides of the same street, '
                    'sometimes adjacent houses. And in 1852 one company moved its intake '
                    'upstream of the sewers and the other did not. So you now have two groups of '
                    'households, alike in income, occupation, air and ground, differing in one '
                    'thing, and the thing that sorted them was which salesman had knocked on '
                    'which door a decade earlier. Deaths among the customers of the company '
                    'still drawing from the dirty reach ran at several times the rate next door. '
                    'Here is the sentence I want you to leave with. The whole case rests on an '
                    'assumption that is historical and not statistical: that nothing about a '
                    'household decided which company supplied it. Everything we now call a '
                    'natural experiment is an argument about that sentence.')],
        'items': [('Why does the lecturer begin with a comparison that does not work?',
                   ('To criticise the data',
                    'To teach the method through the failure',
                    'Because the figures are famous',
                    'To date the epidemic'),
                   1,
                   'Two accounts fit one figure, so the comparison cannot choose.'),
                  ('What did the orthodox view of the day hold?',
                   ('That the water carried the agent',
                    'That bad air rising off low wet ground was the agent',
                    'That the disease passed between persons',
                    'That the cause was unknowable'),
                   1,
                   'And it predicted the same district pattern.'),
                  ('Why does he call the confounding complete?',
                   ('The figures were missing',
                    'No household had bad water without bad air',
                    'The districts were too small',
                    'Nobody kept records'),
                   1,
                   'There is no case in London that separates the two.'),
                  ('What divided the households between the two companies?',
                   ('Their income',
                    'Which salesman had knocked on which door a decade earlier',
                    'The district boundary',
                    'Their own preference about water'),
                   1,
                   'Commercial competition rather than any characteristic of theirs.'),
                  ('What does he say the whole case rests on?',
                   ('A statistical adjustment',
                    'The size of the difference',
                    'The identification of the organism',
                    'An assumption that is historical and not statistical'),
                   3,
                   'That nothing about a household decided which company supplied it.'),
                  ('What does he say every natural experiment is?',
                   ('A substitute for a trial',
                    'An argument about that one sentence',
                    'A comparison of districts',
                    'A historical accident'),
                   1,
                   'Which is the sentence he wants the audience to leave with.'),
                  ('When was the organism identified?',
                   ('In 1852', 'Three decades later', 'Immediately', 'It never was'),
                   1,
                   'The case settled the method rather than the microbiology.')]},
 'l4': {'sub': 'What a cause means in a population',
        'caption': 'A lecture on a comparison with one term missing',
        'board': ['Causal claim = two states, one unobservable',
                  'Population version: all exposed vs none',
                  'Confounding = the substitution fails',
                  'Natural division · threshold · before-and-after · instrument'],
        'skill': ('A lecture that defines a term and derives the methods',
                  ['The definition, then the impossibility, then the population version.',
                   'Four designs, and he says what each one argues about.',
                   'A question about the ending wants what they all share.']),
        'warm': [('Woman: Why can we never observe the second state?',
                  ('Because the same patient cannot be both exposed and not.',
                   'Because the instruments are poor.',
                   'Four designs.',
                   'In the population.'),
                  0,
                  'The missing term is unobservable by construction.'),
                 ('Woman: What is confounding, exactly?',
                  ('The failure of one group to stand in for the other world.',
                   'An error in measurement.',
                   'A reversed direction.',
                   'An instrument.'),
                  0,
                  'A covariate linked to both exposure and outcome breaks the substitution.'),
                 ('Woman: What do the four designs have in common?',
                  ('Each is an argument about what distributed the exposure.',
                   'Each needs a trial.',
                   'Each adjusts for covariates.',
                   'Each uses a threshold.'),
                  0,
                  'That is the sentence the lecture is built towards.')],
        'script': [('Man',
                    'Define your terms and the methods fall out of the definition, which is rare '
                    'enough in this subject to be worth an hour. A causal claim about one '
                    'patient compares two states of that patient: the state in which she took '
                    'the drug and the state in which she did not. You cannot observe the second '
                    'one. Not because our instruments are crude, but because she took the drug, '
                    'and the woman who did not take it does not exist. That is the whole '
                    'difficulty of the field in two sentences. Now, the move that makes the '
                    'subject possible. Go up to the population. Compare the morbidity you would '
                    'see if everybody were exposed with the morbidity you would see if nobody '
                    'were, and now you have a quantity you can estimate, because you have two '
                    'groups of people to stand in for those two worlds. Which gives you '
                    'confounding, properly defined at last. Confounding is when the substitution '
                    'fails: your exposed group and your unexposed group differ in something '
                    'besides the exposure that bears on the outcome. Randomisation fixes that by '
                    'construction, because a coin cannot be correlated with anything, measured '
                    'or unmeasured. And when you cannot randomise, which in public health is '
                    'nearly always, you go looking for a substitute, and here are the four you '
                    'will meet. A natural division: something unrelated sorted the population '
                    'for you. A threshold: an administrative rule cuts a continuous variable in '
                    'two. A before-and-after across two places, one of which acted. An '
                    'instrument: something that moves the exposure and reaches the outcome by no '
                    'other route. Notice what every one of those four is. It is an argument '
                    'about what distributed the exposure, and that argument, not the arithmetic, '
                    'is where the work is. Nobody has ever been refuted on the arithmetic in '
                    'this field. Every serious dispute I have watched has been about the '
                    'sentence before it.')],
        'items': [('Why does the lecturer say the second state cannot be observed?',
                   ('The instruments are crude',
                    'She took the drug, and the woman who did not does not exist',
                    'The data are missing',
                    'The effect is too small'),
                   1,
                   'He calls that the whole difficulty of the field.'),
                  ('What does going up to the population achieve?',
                   ('A larger sample',
                    'A quantity that can be estimated, with two groups to stand in for the two '
                    'worlds',
                    'A randomised allocation',
                    'A smaller confidence interval'),
                   1,
                   'Neither term becomes observable, but the comparison becomes estimable.'),
                  ('How does he define confounding?',
                   ('A measurement error',
                    'The substitution failing, because the groups differ in something else that '
                    'bears on the outcome',
                    'A reversed causal direction',
                    'A missing covariate list'),
                   1,
                   'Properly defined at last, in his phrase.'),
                  ('Why does randomisation fix it by construction?',
                   ('It increases the sample',
                    'A coin cannot be correlated with anything, measured or unmeasured',
                    'It removes the exposure',
                    'It allows adjustment'),
                   1,
                   'Which is the one property adjustment can never have.'),
                  ('What does he say every one of the four designs is?',
                   ('A substitute for a trial',
                    'An argument about what distributed the exposure',
                    'A statistical adjustment',
                    'A threshold rule'),
                   1,
                   'And he says that argument, not the arithmetic, is where the work is.')]},
 'l5': {'sub': 'When the data cannot answer',
        'caption': 'A reply from somebody who writes the guidance',
        'board': ['Well formed only if the intervention is named',
                  'Weight: exercise, surgery, illness — three effects',
                  'A category: no intervention even in principle',
                  'Name the instrument: a levy, not sugar'],
        'skill': ('Hearing an objection that its own author finds inconvenient',
                  ['She accepts the framework and presses it to an awkward conclusion.',
                   'Two examples, and she says what is wrong with each quantity.',
                   'The last item asks what she refuses to conclude.']),
        'warm': [('Man: Does she reject the counterfactual definition?',
                  ('No. She takes it seriously enough to see what it requires.',
                   'Yes, entirely.',
                   'Two examples.',
                   'A levy.'),
                  0,
                  'The objection comes from inside the framework.'),
                 ('Man: What is wrong with the effect of weight?',
                  ('It is three different effects depending on the route.',
                   'It cannot be measured.',
                   'Nothing at all.',
                   'A family of them.'),
                  0,
                  'Exercise, surgery and illness do not give the same morbidity.'),
                 ('Man: So we say nothing about poverty?',
                  ('That conclusion is not available to anybody.',
                   'Yes, nothing at all.',
                   'Only in trials.',
                   'Name the instrument.'),
                  0,
                  'She refuses the inference her own objection appears to license.')],
        'script': [('Woman',
                    'I accept every word of that lecture, and I am going to press it until it '
                    'hurts, because the definition has a consequence most of my own field would '
                    'rather not discuss. If a causal claim compares the world where the exposure '
                    'happened with the world where it did not, then somebody has to say what the '
                    'second world looks like, and the only way to say that is to name an '
                    'intervention that would have produced it. Fine for a tablet. Fine for a '
                    'zone, a tax, a pipe. Now take body weight. What is the effect of being two '
                    'stone lighter? It depends entirely on how you got there. Two stone off '
                    'through exercise, two stone off after surgery, two stone off because '
                    'something undiagnosed is eating you: three populations, three different '
                    'outcomes. So the effect of weight is not a number. It is a family of '
                    'numbers wearing one name. Worse case: a demographic category, where there '
                    'is no intervention even in principle, and an estimate of its effect is '
                    'either a measurement of how that population gets treated or an artefact of '
                    'whatever you adjusted for. Now. The conclusion that seems to follow is that '
                    'public health should stop talking about poverty and obesity, and I want to '
                    'be very clear that I am not saying that and nobody can afford to. What I am '
                    'saying is narrower and more useful. Name the intervention you mean. Not the '
                    'effect of sugar, which is undefined; the effect of a levy on sugary drinks, '
                    'which has been estimated three times and which a minister can actually do. '
                    'And I will tell you what that costs me, because it is not nothing. The '
                    'question I am handing back is narrower than the question I was asked, and '
                    'somebody in the room always points out, quite fairly, that nobody came here '
                    'to ask about taxes.')],
        'items': [('Why does she press the lecture’s definition?',
                   ('Because she rejects it',
                    'Because it has a consequence her field would rather not discuss',
                    'Because it is incomplete',
                    'Because the examples are weak'),
                   1,
                   'She says she accepts every word of it.'),
                  ('What does the effect of being lighter depend on?',
                   ('The starting weight',
                    'How the weight was lost',
                    'The age of the patient',
                    'The measurement method'),
                   1,
                   'Exercise, surgery and undiagnosed illness give three different outcomes.'),
                  ('How does she describe the effect of weight?',
                   ('A single number',
                    'A family of numbers wearing one name',
                    'An artefact',
                    'A mediated effect'),
                   1,
                   'Which is why the quantity is not well defined.'),
                  ('What does she say an estimate for a demographic category is?',
                   ('A causal effect',
                    'A measurement of how that population is treated, or an artefact of the '
                    'adjustment',
                    'A confounded association',
                    'A gradient'),
                   1,
                   'There is no intervention even in principle.'),
                  ('What conclusion does she refuse?',
                   ('That the definition is wrong',
                    'That public health should stop talking about poverty and obesity',
                    'That levies work',
                    'That weight has no effect'),
                   1,
                   'She says nobody can afford that conclusion.')]},
 'w1': {'sub': 'Questions about a study',
        'skill': ('Build a Sentence: asking what a comparison held constant',
                  ['Eight of the ten are questions, and the useful ones ask what was held '
                   'constant.',
                   'An embedded question keeps statement order: do you know what the two groups '
                   'differed in.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('The two districts had different rates.',
                    ['do',
                     'you',
                     'know',
                     'what',
                     'else',
                     'the two districts',
                     'differed',
                     'in',
                     'that',
                     'year'],
                    'Do you know what else the two districts differed in that year?'),
                   ('The households shared the same street.',
                    ['were',
                     'they',
                     'supplied',
                     'by',
                     'the same',
                     'company',
                     'or',
                     'by',
                     'two',
                     'different',
                     'ones'],
                    'Were they supplied by the same company, or by two different ones?'),
                   ('The effect appears above a threshold.',
                    ['is',
                     'there',
                     'a sharp break',
                     'at',
                     'the threshold',
                     'or',
                     'a',
                     'gradual',
                     'change'],
                    'Is there a sharp break at the threshold, or a gradual change?')],
        'exam': [('The study adjusted for income and age.',
                  ['do',
                   'you',
                   'know',
                   'what',
                   'it',
                   'could',
                   'not',
                   'adjust',
                   'for',
                   'at',
                   'all'],
                  'Do you know what it could not adjust for at all?'),
                 ('The exposure was not assigned by anybody.',
                  ['can',
                   'you',
                   'tell me',
                   'what',
                   'decided',
                   'who',
                   'was',
                   'exposed',
                   'and',
                   'who',
                   'was not'],
                  'Can you tell me what decided who was exposed and who was not?'),
                 ('Two cohorts were followed for twenty years.',
                  ['which',
                   'of',
                   'the two',
                   'cohorts',
                   'was',
                   'recruited',
                   'from',
                   'a',
                   'clinic'],
                  'Which of the two cohorts was recruited from a clinic?'),
                 ('The association is stronger at higher doses.',
                  ['would', 'a', 'confounder', 'produce', 'a', 'gradient', 'of', 'that', 'shape'],
                  'Would a confounder produce a gradient of that shape?'),
                 ('The rule applied in one district only.',
                  ['was',
                   'the',
                   'neighbouring',
                   'district',
                   'comparable',
                   'before',
                   'the',
                   'rule',
                   'began'],
                  'Was the neighbouring district comparable before the rule began?'),
                 ('The authors call the result causal.',
                  ['do',
                   'we',
                   'know',
                   'which',
                   'assumption',
                   'that',
                   'conclusion',
                   'rests',
                   'on'],
                  'Do we know which assumption that conclusion rests on?'),
                 ('The exposure cannot be assigned to anybody.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'what',
                   'the',
                   'intervention',
                   'would',
                   'even',
                   'be'],
                  'I would like to know what the intervention would even be.')]},
 'w2': {'sub': 'What a cause means in a population',
        'to': 'analysis@eastmoor-pho.nhs.uk',
        'date': '12/02/2033',
        'subject': 'Analysis plan — both estimates, and the divergence rule in writing',
        'scenario': ['You are a public health consultant on the study steering group. The '
                     'referee has objected that distance from a main road is a mediator, and the '
                     'team has agreed to publish adjusted and unadjusted estimates. You support '
                     'that. You also want the divergence rule written before any data are seen, '
                     'and you want the plan to say in one sentence which estimate the authority '
                     'will quote in its own press release, because that decision will otherwise '
                     'be taken by whoever writes the release.',
                     'Write an email to the analysis team, copied to the steering group.'],
        'bullets': ['Support the two-estimate decision and say what each estimate answers.',
                    'Insist on the divergence rule in writing, with the reason.',
                    'Ask the plan to name the estimate the authority will quote.'],
        'skill': ('Supporting a decision and closing the gaps around it',
                  ['Say what each of the two estimates answers, so the decision is usable.',
                   'Give the reason for pre-commitment as a concrete failure.',
                   'Name the decision that will otherwise be taken by default.']),
        'model': ['Dear colleagues,',
                  '',
                  'The steering group supports publishing both estimates and asks for two '
                  'sentences to be added to the plan before any data are examined.',
                  '',
                  'On the two estimates, it is worth stating the assumption each of them '
                  'carries, because otherwise both will be quoted as though they answered the '
                  'same question. The unadjusted comparison answers what happened to admissions '
                  'in the zone relative to the comparison districts, including everything the '
                  'zone did through traffic. The adjusted comparison answers what happened over '
                  'and above the traffic route, which is a smaller number and a narrower '
                  'question. Neither is the right estimate in the abstract; the first is the one '
                  'a reader wants if they are asking whether the zone worked.',
                  '',
                  'On the divergence rule, I would put the reason in the plan rather than leave '
                  'it to be inferred. If one comparison district goes its own way and we have no '
                  'rule, then in September we shall be deciding whether to drop it while looking '
                  'at what dropping it does to the estimate. The question is what would have '
                  'happened had the rule been written in February, and the answer is that nobody '
                  'would be able to argue about our motives, which is worth more than the '
                  'precision we would lose.',
                  '',
                  'The third thing is not in the referee’s letter and it is the one I expect to '
                  'cause trouble. The plan should name, now, which estimate the authority quotes '
                  'in its own press release. If it does not, that decision will be taken in '
                  'August by whoever drafts the release, under pressure, with both numbers in '
                  'front of them. I propose the unadjusted estimate, with the adjusted one in '
                  'the same paragraph and the sensitivity figure in the next.',
                  '',
                  'Dr Ayotunde Ferreira, Steering Group'],
        'notes': ['Each estimate is given the question it answers, which turns a technical '
                  'concession into something a reader can use.',
                  'The case for pre-commitment is made as a concrete September failure rather '
                  'than as a principle.',
                  'The third request names a decision that will otherwise be made by default and '
                  'under pressure.',
                  'It proposes an answer rather than asking for one, so the plan can be amended '
                  'in a line.'],
        'bandpair': {'mid': ['Dear colleagues,',
                             'The steering group is happy with the decision to publish both '
                             'estimates, which seems to us the sensible response to the '
                             'referee’s point, and we would like to suggest a couple of '
                             'additions to the plan.',
                             'It would probably be helpful if the plan explained what each of '
                             'the two estimates actually tells us, since otherwise people may '
                             'well treat them as answering the same question when in fact one of '
                             'them is a rather narrower measure.',
                             'We also feel that the rule about a diverging comparison district '
                             'ought to be written down now rather than later, as it would be '
                             'difficult to make that decision once the results are known. And it '
                             'might be worth deciding in advance which figure will be used in '
                             'any press release, as otherwise this may be decided rather late.',
                             'Best wishes, Ayotunde Ferreira'],
                     'top': ['Dear colleagues,',
                             'The group supports publishing both estimates and asks for two '
                             'sentences in the plan before any data are examined.',
                             'State what each estimate answers, or both will be quoted as though '
                             'they answered the same question. The unadjusted comparison answers '
                             'what happened to admissions in the zone relative to the comparison '
                             'districts, traffic route included. The adjusted comparison answers '
                             'what happened over and above that route: a smaller number and a '
                             'narrower question. The first is what a reader wants if the '
                             'question is whether the zone worked.',
                             'Put the reason for the divergence rule in the plan. Without one, '
                             'in September we decide whether to drop a district while watching '
                             'what dropping it does to the estimate. Had the rule been written '
                             'in February, nobody could argue about our motives, which is worth '
                             'more than the precision it costs.',
                             'The third point is not in the referee’s letter and will cause the '
                             'most trouble. Name now which estimate the authority quotes in its '
                             'press release. Otherwise that is settled in August by whoever '
                             'drafts it, under pressure, with both numbers to hand. I propose '
                             'the unadjusted estimate, the adjusted one in the same paragraph, '
                             'and the sensitivity figure in the next. Ayotunde Ferreira'],
                     'diffs': ['It gives each estimate the question it answers instead of saying '
                               'the plan should explain them.',
                               'It argues for pre-commitment with a dated failure and a '
                               'counterfactual, rather than calling it difficult to decide '
                               'later.',
                               'It names who will otherwise take the press-release decision, and '
                               'when, and under what pressure.',
                               'It proposes the answer, so the plan can be amended in one line.',
                               'It drops the hedging — seems to us, probably helpful, we also '
                               'feel, might be worth — which in the middle answer removes the '
                               'force of every claim it makes.']}},
 'w3': {'sub': 'When the data cannot answer',
        'prof': 'Professor Adeyemi',
        'question': 'A health department must advise on whether a city should ban the sale of a '
                    'particular food additive. The evidence is an association, consistent across '
                    'eight observational studies in four countries, with a dose-response '
                    'gradient and no trial, because no ethics committee would approve one. '
                    'Supporters of a ban say this is as much evidence as anybody will ever have. '
                    'Opponents say every one of the eight studies shares the same uncontrolled '
                    'confounder, so eight studies are one study repeated. Should the ban be '
                    'recommended?',
        'posts': [('Rosario',
                   'w',
                   'Recommend it. The gradient is the point: a confounder that produced a dose '
                   'response across four countries would have to be a strange thing, and nobody '
                   'has named a candidate.'),
                  ('Vikram',
                   'm',
                   'Nobody has named one because nobody has looked hard. Diet studies measure '
                   'what people report eating, the reporting is correlated with everything, and '
                   'that is a confounder with no name and a very long reach.')],
        'skill': ('A question about acting on observational evidence',
                  ['Rosario argues from the gradient; Vikram from the measurement of the '
                   'exposure.',
                   'The passages say an undesigned comparison is only as good as what '
                   'distributed the exposure.',
                   'A strong answer says what would change its mind.']),
        'starters': ['Rosario is right that…, although it does not follow that…',
                     'It is worth stating the assumption…',
                     'The question is what would have happened…',
                     'So the department should…, and reconsider if…'],
        'model': ['On the most favourable reading, Rosario is right that a dose-response '
                  'gradient reproduced in four countries is not what a simple confounder usually '
                  'looks like, and it does not follow that the eight studies are eight pieces of '
                  'evidence. Vikram has identified the respect in which they may be one: all '
                  'eight measure the exposure by asking people what they eat, and reported diet '
                  'is associated with income, education, attention to health advice and the '
                  'willingness to answer a long questionnaire honestly. A confounder of that '
                  'kind would produce a gradient, because people who report more of anything '
                  'report more of everything.',
                  'It is worth stating the assumption the ban would rest on: that the '
                  'association between the additive and the harm is not produced by whatever '
                  'makes a person report eating it. Nothing in the data can settle it, though '
                  'the assumption is testable in principle and has not been tested, and the test '
                  'does not require a trial of the additive. It requires one study in which the '
                  'exposure is measured without asking anybody anything — from purchase records, '
                  'from manufacturing data, or from a biological marker — and the comparison '
                  'repeated.',
                  'So the department should not recommend a ban and should not wait for a trial '
                  'that will never be approved. It should recommend a labelling requirement, '
                  'which is reversible and proportionate on the present evidence, and commission '
                  'the one study that would settle the matter: exposure measured objectively in '
                  'a single large cohort, with the gradient reproduced or not. The department '
                  'should also say now what would change its advice, because a department that '
                  'cannot name the finding that would move it has not been reasoning from '
                  'evidence at all.'],
        'model_words': 284},
 'w4': {'sub': 'What a cause means in a population',
        'skill': ('Counterfactual reasoning at length',
                  ['Set the counterfactual up once: had the intake not been moved, the deaths '
                   'would have continued.',
                   'Hold it across sentences with on that supposition, in that case, the world '
                   'so described.',
                   'Mark the return to the actual world explicitly: in the event, as it '
                   'happened.']),
        'guided': [('Set up an unreal past condition.',
                    ['had',
                     'the intake',
                     'not',
                     'been',
                     'moved',
                     'the deaths',
                     'would',
                     'have',
                     'continued',
                     'unchanged'],
                    'Had the intake not been moved, the deaths would have continued unchanged.'),
                   ('Continue the same supposition.',
                    ['on',
                     'that',
                     'supposition',
                     'the two',
                     'companies',
                     'would',
                     'have',
                     'looked',
                     'identical'],
                    'On that supposition, the two companies would have looked identical.'),
                   ('Mark the return to what happened.',
                    ['in',
                     'the',
                     'event',
                     'one',
                     'company',
                     'moved',
                     'and',
                     'the other',
                     'did',
                     'not'],
                    'In the event, one company moved and the other did not.')],
        'exam': [('Set up a present counterfactual.',
                  ['were',
                   'the exposure',
                   'assigned',
                   'by',
                   'chance',
                   'no',
                   'adjustment',
                   'would',
                   'be',
                   'needed'],
                  'Were the exposure assigned by chance, no adjustment would be needed.'),
                 ('Hold a counterfactual with in that case.',
                  ['in',
                   'that',
                   'case',
                   'the two groups',
                   'would',
                   'differ',
                   'in',
                   'nothing',
                   'else'],
                  'In that case, the two groups would differ in nothing else.'),
                 ('Use a mixed conditional.',
                  ['had',
                   'the rule',
                   'been',
                   'written',
                   'in February',
                   'we',
                   'would',
                   'not',
                   'be',
                   'arguing',
                   'now'],
                  'Had the rule been written in February, we would not be arguing now.'),
                 ('Deny a counterfactual claim.',
                  ['nothing',
                   'suggests',
                   'that',
                   'the deaths',
                   'would',
                   'have',
                   'fallen',
                   'without',
                   'the',
                   'change'],
                  'Nothing suggests that the deaths would have fallen without the change.'),
                 ('Name the counterfactual as the question.',
                  ['the question',
                   'is',
                   'what',
                   'would',
                   'have',
                   'happened',
                   'to',
                   'those',
                   'households',
                   'otherwise'],
                  'The question is what would have happened to those households otherwise.')]},
 'w5': {'sub': 'When the data cannot answer',
        'prof': 'Professor Oyelaran',
        'question': 'A journal is revising its instructions to authors. One proposal requires '
                    'every paper reporting a causal estimate to state, in the abstract, the '
                    'intervention whose effect is being estimated. Supporters say this would '
                    'prevent the publication of estimates of undefined quantities. Opponents say '
                    'it would exclude most work on social determinants of health, where no '
                    'intervention is available, and would hand the field to the trialists. '
                    'Should the requirement be adopted?',
        'posts': [('Ingeborg',
                   'w',
                   'Adopt it. A paper that cannot name the intervention has not told the reader '
                   'what it measured, and the reader cannot supply the missing sentence.'),
                  ('Mateus',
                   'm',
                   'Then two thirds of the work on poverty and health becomes unpublishable, and '
                   'the journals fill with small trials of things that happen to be '
                   'randomisable.')],
        'skill': ('A question about a requirement on authors',
                  ['Ingeborg argues from what the reader needs; Mateus from what the rule would '
                   'exclude.',
                   'The passage says the demand for a manipulable exposure would repudiate much '
                   'of public health.',
                   'A strong answer requires a statement without requiring an intervention.']),
        'starters': ['Ingeborg is right that…, although it does not follow that…',
                     'It is worth stating the assumption…',
                     'The question is what would have happened…',
                     'So the instruction should…, rather than…'],
        'model': ['Ingeborg is right that a reader cannot supply a missing specification, and it '
                  'does not follow that every paper must name an intervention. Mateus has '
                  'identified what the strict version would cost, and the cost is not merely to '
                  'authors: the questions that would survive are the randomisable ones, which '
                  'are a small and unrepresentative subset of the questions a health service has '
                  'to answer. A rule that improves the clarity of what is published while '
                  'narrowing it to what is convenient has not obviously improved the literature.',
                  'It is worth stating the assumption behind the proposal, which is that a '
                  'well-formed causal estimate and a published quantity have to coincide. They '
                  'need not. A paper may report an association, state the counterfactual it '
                  'would like to estimate, and say in one sentence why that counterfactual is '
                  'not specified by any available intervention. That is more informative than '
                  'either a false precision or a silence, and it is exactly the sentence the '
                  'present literature leaves out.',
                  'So the instruction should require a statement rather than an intervention: '
                  'every paper reporting a causal estimate names the contrast it is estimating, '
                  'and where no intervention defines that contrast, says so and says what would. '
                  'The question is what would have happened had this rule been in force twenty '
                  'years ago, and the answer is that the weight literature would read very '
                  'differently and the work on poverty would have been published with a '
                  'paragraph that nobody could then have quoted as a treatment effect. That is '
                  'the whole of the gain, and it is worth a sentence in an abstract. A '
                  'requirement that produces one honest paragraph in every paper is worth more '
                  'to the field than a rule that produces a shorter list of publishable '
                  'questions.'],
        'model_words': 295},
 'sp': [{'sub': 'When a number frightens people',
         'focus': 'giving four readings of one figure',
         'skill': ('The figure is the same under all four',
                   ['Say how many readings there are, then take them in order.',
                    'Keep each to one clause, in the same grammar.',
                    'Then say what nothing in the data can settle.']),
         'repeat': ['There are four ways.',
                    'The two things move together.',
                    'Something else may cause both.',
                    'The second may cause the first.',
                    'The sample may have produced the pattern.',
                    'That is the whole of what the study found.',
                    'Nothing in the data can settle which of the four you are looking at.'],
         'theme': 'saying exactly what a number does not show',
         'qs': ['Tell me about a figure you have seen misreported. What was wrong with the '
                'report?',
                'Some people say the press should not report single studies. How far would you '
                'agree?',
                'How would you explain to a friend why two things can move together without '
                'either causing the other?',
                'Finally, describe a warning you were given that turned out to be wrong.'],
         'model': [(2,
                    'They should report them with the sentence that says what has not been '
                    'excluded, which is one line and almost never printed.'),
                   (3,
                    'Because something else can be moving both of them. Ice cream and drowning '
                    'rise together every summer, and neither has ever caused the other.')],
         'selfcheck': ['I gave the count before the list',
                       'I kept the four parallel',
                       'I ended with what the data cannot settle']},
        {'sub': 'What a cause means in a population',
         'focus': 'conceding an error that would have changed your number',
         'skill': ('That is a real error and we would have published a number smaller than the '
                   'truth',
                   ['Say what the objection is, in their words.',
                    'Concede the part that is right, and what it would have cost.',
                    'Then say where they are half-right, and what you will do.']),
         'repeat': ['He is partly right.',
                    'The zone reduces traffic on main roads.',
                    'Adjusting for it removes part of the effect.',
                    'He says distance is a mediator, not a confounder.',
                    'We would have published a number smaller than the truth.',
                    'Living near a main road is how the exposure reaches a child.',
                    'Unadjusted and adjusted side by side, with a note saying which comparison '
                    'answers which question.'],
         'theme': 'admitting a mistake in your own method',
         'qs': ['Tell me about an error in your own work that somebody else found. What did it '
                'cost?',
                'Some people say an analysis plan should be fixed before the data arrive. How '
                'far would you agree?',
                'How would you explain to a friend why you can adjust away the thing you are '
                'measuring?',
                'Finally, describe a decision you made while already knowing what each answer '
                'would give you.'],
         'model': [(2,
                    'Fixed in writing and departed from in public, with the departure dated. A '
                    'plan nobody may change is a plan that will be broken quietly.'),
                   (3,
                    'Because some of the things you control for are steps on the route. Take out '
                    'the route and what is left is everything except the effect you were looking '
                    'for.')],
         'selfcheck': ['I stated the objection in their words',
                       'I conceded what it would have cost',
                       'I said where they were half-right']},
        {'sub': 'When the data cannot answer',
         'focus': 'teaching a method through a case that failed first',
         'skill': ('Two accounts, one figure, no way to choose',
                   ['Give the failed comparison and why it fails.',
                    'Then the comparison that worked, and what sorted the two groups.',
                    'Then the assumption the whole case rests on.']),
         'repeat': ['That fits the water account.',
                    'Two companies competed house by house.',
                    'One moved its intake upstream in 1852.',
                    'It fits the bad air account equally well.',
                    'Every household with bad water had bad air.',
                    'Districts by the river died at several times the rate.',
                    'The whole case rests on an assumption that is historical and not '
                    'statistical.'],
         'theme': 'a comparison that nobody arranged',
         'qs': ['Tell me about a comparison you could make only because of an accident. What '
                'made it work?',
                'Some people say you can never show a cause without an experiment. How far would '
                'you agree?',
                'How would you explain to a friend what confounding is?',
                'Finally, describe two groups in your own country that differ in one thing by '
                'accident.'],
         'model': [(2,
                    'An experiment is the cleanest route and not the only one. What matters is '
                    'whether something unrelated to the outcome decided who was exposed, and '
                    'sometimes history arranges that better than a committee would.'),
                   (3,
                    'It is when the thing you are studying arrives in company. Bad water came '
                    'with bad air, so the figures could not tell you which of the two was '
                    'killing people.')],
         'selfcheck': ['I gave the failed comparison first',
                       'I said what sorted the two groups',
                       'I ended with the assumption it rests on']},
        {'sub': 'What a cause means in a population',
         'focus': 'deriving methods from a definition',
         'skill': ('Define your terms and the methods fall out',
                   ['Give the definition in one sentence about one patient.',
                    'Then the impossibility, and why it is not about instruments.',
                    'Then the move to the population, and what it buys.']),
         'repeat': ['You cannot observe the second.',
                    'Go up to the population.',
                    'Not because the instruments are crude.',
                    'Now you have a quantity you can estimate.',
                    'A causal claim compares two states of one patient.',
                    'She took the drug, and the woman who did not does not exist.',
                    'Every one of the four designs is an argument about what distributed the '
                    'exposure.'],
         'theme': 'a definition that decides a method',
         'qs': ['Tell me about a definition that settled an argument. What did it settle?',
                'Some people say you cannot know a cause without an experiment. How far would '
                'you agree?',
                'How would you explain to a friend why we compare groups rather than people?',
                'Finally, describe a question you could answer only by finding an accident.'],
         'model': [(2,
                    'An experiment makes the comparison true by construction, which nothing else '
                    'does. Short of that you argue about what distributed the exposure, and '
                    'sometimes the argument is a good one.'),
                   (3,
                    'Because the person you want to compare does not exist. What you can do is '
                    'find a group that resembles the exposed one in everything except the '
                    'exposure, and that group is always an argument rather than a fact.')],
         'selfcheck': ['I gave the definition first',
                       'I said why the impossibility is not technical',
                       'I ended with what the four designs share']},
        {'sub': 'When the data cannot answer',
         'focus': 'pressing your own framework until it hurts',
         'skill': ('I am going to press it until it hurts',
                   ['Accept the framework completely, in one sentence.',
                    'Then take it to the case where it bites, with the three routes.',
                    'Then refuse the conclusion it seems to license.']),
         'repeat': ['Fine for a tablet.',
                    'I accept every word of that.',
                    'A family of numbers wearing one name.',
                    'It depends entirely on how you got there.',
                    'What is the effect of being two stone lighter?',
                    'Somebody has to say what the second world looks like.',
                    'Name the intervention you mean: not the effect of sugar, but the effect of '
                    'a levy on sugary drinks.'],
         'theme': 'following your own argument to an awkward place',
         'qs': ['Tell me about an argument of yours that led somewhere inconvenient. Where did '
                'it lead?',
                'Some people say we should only study what we can change. How far would you '
                'agree?',
                'How would you explain to a friend why the effect of weight is not one number?',
                'Finally, describe an intervention you would want tested in your own city.'],
         'model': [(2,
                    'As a rule for action, yes. As a rule for research it would leave us '
                    'ignorant about everything that matters and cannot be assigned, which is '
                    'most of what determines how long people live.'),
                   (3,
                    'Because losing it by exercise, by surgery and by illness are three '
                    'different things happening to a body, and the number you get depends on '
                    'which of them you had in mind.')],
         'selfcheck': ['I accepted the framework in one sentence',
                       'I gave the three routes',
                       'I refused the conclusion it seems to license']}],
 'gram': {'title': 'Counterfactual reasoning at length',
          'headers': ['Form', 'What it does'],
          'rows': [('had the intake not been moved, the deaths would have continued',
                    'sets up an unreal past condition'),
                   ('on that supposition, the companies would have looked identical',
                    'continues the same counterfactual'),
                   ('in that case, the groups would differ in nothing else',
                    'holds it across a sentence boundary'),
                   ('were the exposure assigned by chance, no adjustment would be needed',
                    'an unreal present condition'),
                   ('had the rule been written in February, we would not be arguing now',
                    'a mixed conditional: past cause, present result'),
                   ('in the event, one company moved and the other did not',
                    'marks the return to the actual world'),
                   ('nothing suggests that the deaths would have fallen',
                    'denies a counterfactual claim')],
          'notes': ['A counterfactual has to be set up once and then held. English holds it with '
                    'a small set of phrases — on that supposition, in that case, in the world so '
                    'described, on that account — and a paragraph that drops them reads as '
                    'though the writer had begun describing what actually happened. In an '
                    'examination that is marked as a factual error rather than a stylistic one.',
                    'Mark the return to the actual world explicitly: in the event, as it '
                    'happened, in fact. Without the marker the reader cannot tell which world '
                    'the last sentence belonged to, and the two worlds are the whole of a causal '
                    'argument.',
                    'The mixed conditional is the form examiners look for and candidates avoid: '
                    'had the rule been written in February, we would not be arguing now. The '
                    'past perfect carries the cause and the present conditional carries the '
                    'result, and the pair says something no single tense can.'],
          'watch': 'Do not write would have in the if-clause itself. If the intake would have '
                   'been moved is not English; the form is had the intake been moved, with would '
                   'have in the main clause.',
          'ex': [('Rewrite as a counterfactual, using the form in brackets.',
                  ['The intake was moved, so the deaths fell. (had … not)',
                   'Continue the supposition: the companies looked different. (on that '
                   'supposition)',
                   'The exposure was not assigned by chance, so adjustment was needed. (were …)',
                   'The rule was not written in February, so we are arguing now. (mixed)',
                   'Return to what happened: one company moved. (in the event)',
                   'Deny it: the deaths would not have fallen anyway. (nothing suggests)'],
                  ['Had the intake not been moved, the deaths would have continued.',
                   'On that supposition, the companies would have looked identical.',
                   'Were the exposure assigned by chance, no adjustment would be needed.',
                   'Had the rule been written in February, we would not be arguing now.',
                   'In the event, one company moved and the other did not.',
                   'Nothing suggests that the deaths would have fallen without the change.']),
                 ('Supply had, were, would or in.',
                  ['______ the intake not been moved, the deaths would have continued.',
                   '______ the exposure assigned by chance, no adjustment would be needed.',
                   'On that supposition, the two companies ______ have looked identical.',
                   '______ the event, one company moved and the other did not.'],
                  ['Had', 'Were', 'would', 'In']),
                 ('Correct the counterfactual.',
                  ['If the intake would have been moved, the deaths would have fallen.',
                   'Had the rule been written in February, we would not argued now.',
                   'On that supposition, the companies looked identical.',
                   'Were the exposure assigned by chance, no adjustment will be needed.'],
                  ['Had the intake been moved, the deaths would have fallen.',
                   'Had the rule been written in February, we would not be arguing now.',
                   'On that supposition, the companies would have looked identical.',
                   'Were the exposure assigned by chance, no adjustment would be needed.'])],
          'bas': 'Build a Sentence in this unit asks what a comparison held constant. Two of the '
                 'answers are counterfactual, and the auxiliary comes first with no if in front '
                 'of it. The main clause carries the would.'},
 'fault': {'text': 'If the intake would have been moved, the deaths would have fallen. Had the '
                   'rule been written in February, we would not argued now. On that supposition, '
                   'the companies looked identical. Were the exposure assigned by chance, no '
                   'adjustment will be needed. The two companies was supplying the same street. '
                   'Do you know what else did the districts differ in?',
           'faults': [('If the intake would have been moved',
                       'Had the intake been moved',
                       'Would have belongs in the main clause, never in the condition itself.'),
                      ('we would not argued now',
                       'we would not be arguing now',
                       'A mixed conditional takes the present conditional in the main clause, '
                       'not a bare past participle.'),
                      ('On that supposition, the companies looked identical.',
                       'On that supposition, the companies would have looked identical.',
                       'Once a counterfactual is set up, the sentences inside it carry would, or '
                       'the reader takes them as fact.'),
                      ('no adjustment will be needed',
                       'no adjustment would be needed',
                       'An unreal present condition takes would in the main clause, not will.'),
                      ('The two companies was supplying the same street',
                       'The two companies were supplying the same street',
                       'A plural subject takes a plural verb however long the phrase before it.'),
                      ('what else did the districts differ in',
                       'what else the districts differed in',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('what would have happened instead', 'counterfactual'),
                   ('a third thing that explains both', 'confounder'),
                   ('the account of what causes a disease', 'aetiology'),
                   ('illness in a population, as distinct from death', 'morbidity'),
                   ('splitting a population before comparing', 'stratification'),
                   ('a measured quantity used in the adjustment', 'covariate'),
                   ('the step through which a cause acts', 'mediator'),
                   ('a sharp break at a threshold', 'discontinuity'),
                   ('able to be set by an intervention', 'manipulable'),
                   ('how much a conclusion moves with an assumption', 'sensitivity'),
                   ('holding unless something defeats it', 'defeasible'),
                   ('to make unnecessary', 'obviate')],
         'gram': [('______ the intake not been moved, the deaths would have continued.', 'Had'),
                  ('______ the exposure assigned by chance, no adjustment would be needed.',
                   'Were'),
                  ('On that supposition, the companies ______ have looked identical.', 'would'),
                  ('______ the event, one company moved and the other did not.', 'In'),
                  ('Had the rule been written in February, we would not ______ arguing now.',
                   'be'),
                  ('Nothing suggests that the deaths ______ have fallen anyway.', 'would'),
                  ('In that ______, the two groups would differ in nothing else.', 'case'),
                  ('Do you know what else the districts ______ in?', 'differed')],
         'mini': [('A causal claim about one person is impossible to verify because',
                   ('the data are incomplete',
                    'the unexposed state of that person does not exist',
                    'instruments are imprecise',
                    'the effect is small'),
                   1,
                   'The population version substitutes an average for the individual '
                   'comparison.'),
                  ('Confounding, defined exactly, is',
                   ('an error of measurement',
                    'the failure of one group to stand in for the other world',
                    'a reversed causal direction',
                    'a selected sample'),
                   1,
                   'A covariate linked to both exposure and outcome breaks the substitution.'),
                  ('Randomisation answers confounding by construction because',
                   ('it enlarges the sample',
                    'an allocation by chance cannot be associated with any characteristic',
                    'it removes measurement error',
                    'it permits adjustment'),
                   1,
                   'Measured or unmeasured, which is what adjustment cannot reach.'),
                  ('The four observational designs have in common that',
                   ('each needs a threshold',
                    'each is an argument about what distributed the exposure',
                    'each adjusts for covariates',
                    'each requires a trial'),
                   1,
                   'The argument, rather than the arithmetic, is where the work is.'),
                  ('The effect of a lower body weight is ill defined because',
                   ('weight is hard to measure',
                    'the effect depends on the route by which it was lowered',
                    'weight is confounded with age',
                    'no data exist'),
                   1,
                   'Exercise, surgery and undiagnosed illness give three different outcomes.'),
                  ('The resolution proposed is to',
                   ('abandon the counterfactual framework',
                    'name the intervention actually meant',
                    'restrict the field to trials',
                    'adjust for more covariates'),
                   1,
                   'The effect of sugar is undefined; the effect of a levy is estimable.')]},
 'tip': 'Take any health claim in this week’s newspaper and write down the intervention whose '
        'effect is being reported. If you cannot name one in a single clause, the number in the '
        'headline is not an estimate of anything, and you have done in thirty seconds what cycle '
        '5 took a literature twenty years to do.'}

