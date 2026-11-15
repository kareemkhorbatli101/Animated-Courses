# -*- coding: utf-8 -*-
"""Unit 51 — Quantum Theory and Interpretation. The first unit of
Volume 6, and the first written to the C1 bands: r4 and r5 at
about four hundred words, twenty-nine to thirty-three words a
sentence, nominalisation above seven and a half per cent, and a
1k share near sixty-one.

Cycle 4 puts the formalism on the board as five rules and then
counts them: four describe a system with no observer anywhere in
them, the fifth mentions measurement, and the formalism defines
that word nowhere. Against that, the record - the magnetic moment
of the electron to some twelve significant figures, and the
periodic table, the laser, the semiconductor and the whole of
chemistry from the same five rules with no adjustment - and the
austere doctrine that follows: the theory computes detector
probabilities and owes nobody a picture.

Cycle 5 states the objection as an inconsistency internal to the
five rules. Two laws of motion of incompatible kinds and no rule
for when each applies; apply the first to apparatus and system
together and it yields a superposition of pointer positions.
Four responses, each paying in one currency for its retention of
another: decoherence, which explains why no superposed pointer is
seen and not why one outcome occurs; many worlds, paying in
ontology; the pilot wave, paying in locality; collapse models,
which alter the equation and are therefore testable. Three of the
four are empirically equivalent, so the choice is
underdetermination in the strict sense rather than a shortage of
data.

Cycle 3 is Bell: a dispute thought philosophical for thirty years,
an inequality in 1964 that any theory with definite properties and
no faster-than-light influence must satisfy, the experiments of
1972, the early eighties and 2015, and a careful statement of what
the violation does not show.

Grammar: heavy pre- and postmodification, which is the structural
skill the rest of the volume depends on."""

UNIT = {'n': 51,
 'vol': 6,
 'level': 'C1',
 'title': 'Quantum Theory and Interpretation',
 'grammar': 'Heavy pre- and postmodification',
 'field': 'superposition, decoherence, observable',
 'opener_line': 'Volume 6 opens with the clearest case in science of a theory that works '
                'perfectly and is not finished. Five rules predict the magnetic moment of the '
                'electron to twelve figures; one of the five mentions an operation the formalism '
                'never defines; and the argument about what to do with that has lasted a '
                'century, with one part of it settled by experiment and the rest still open.',
 'subs': ['Explaining physics to a non-physicist',
          'What the formalism says',
          'What the formalism does not say'],
 'icons': ['brain', 'chart', 'brief'],
 'acad': [('empirically', 'as a matter of observation rather than argument'),
          ('predictive', 'able to say in advance what will be seen'),
          ('parsimonious', 'assuming as little as the work allows'),
          ('recalcitrant', 'refusing to yield to the usual treatment'),
          ('explanatory', 'doing the work of explaining rather than describing'),
          ('dispensable', 'able to be dropped without loss'),
          ('austere', 'stripped of everything not strictly needed'),
          ('axiomatic', 'taken as a starting point and not derived'),
          ('underdetermination', 'when the evidence cannot choose between theories'),
          ('inviolable', 'not to be broken under any circumstances'),
          ('ontology', 'what a theory says there is'),
          ('epistemic', 'to do with what is known rather than what exists'),
          ('instrumentalism', 'treating a theory as a tool, not a picture'),
          ('formalism', 'the mathematics of a theory, stripped of commentary')],
 'fieldwords': [('superposition', 'a state that is a combination of other states'),
                ('decoherence', 'the loss of quantum behaviour through contact with the world'),
                ('observable', 'a quantity the theory allows you to measure'),
                ('entanglement', 'a joint state in which neither part has its own'),
                ('eigenstate', 'a state with a definite value of one observable'),
                ('wavefunction', 'the object the formalism assigns to a system'),
                ('indeterminacy', 'the absence of a definite value before measurement'),
                ('locality', 'the rule that nothing acts across a distance at once'),
                ('measurement', 'the operation the theory treats as special'),
                ('electron', 'the particle whose magnetic moment tests the theory'),
                ('probabilistic', 'giving odds rather than outcomes'),
                ('deterministic', 'fixing the future completely from the present'),
                ('photon', 'a single quantum of light'),
                ('detector', 'the apparatus that registers an arrival'),
                ('polarisation', 'the orientation a photon can be measured along'),
                ('unitary', 'of the smooth evolution the equation prescribes')],
 'collocs': [('a leap in the dark', 'an act taken without knowing'),
             ('in practice', 'as things actually turn out'),
             ('for all intents and purposes', 'effectively, if not strictly'),
             ('beside the point', 'true and irrelevant'),
             ('a matter of taste', 'not settled by evidence'),
             ('split hairs', 'to argue over a distinction too fine to matter'),
             ('take it on trust', 'to accept without checking'),
             ('as it stands', 'in its present form'),
             ('by the same token', 'for the same reason'),
             ('stand or fall together', 'to share a single fate')],
 'stance': [('on no reading of the formalism', 'denying every interpretation'),
            ('it is worth being precise here', 'flagging a distinction'),
            ('the standard objection runs', 'reporting an objection'),
            ('nothing in the mathematics requires', 'denying a requirement'),
            ('the dispute is not about', 'clearing ground before arguing')],
 'nuance': [('indeterminate / unknown', 'no value yet / a value nobody has seen'),
            ('entangled / correlated', 'one joint state / two states that agree'),
            ('interpretation / theory', 'what it means / what it predicts')],
 'candos': ['I can build a noun phrase with several modifiers and keep it readable.',
            'I can distinguish what a theory predicts from what it says there is.',
            'I can explain why two theories can agree on every observation.',
            'I can state an objection in the words of the people who hold it.',
            'I can describe an experiment that settled a philosophical question.',
            'I can say what my own position cannot explain.'],
 'vocab_talk': ['What do people mean when they use the word quantum loosely?',
                'What is the difference between unknown and indeterminate?',
                'Describe something you accept on trust because the mathematics works.',
                'Can a question be scientific one year and philosophical the next?'],
 'again': ['probability',
           'variance',
           'threshold',
           'calibration',
           'equivalence',
           'presuppose',
           'construe',
           'invariant'],
 'family': ('determine',
            [('determinate',
              'adjective',
              'the observable has no determinate value before measurement'),
             ('determinism', 'noun', 'determinism survives in the unitary part of the theory'),
             ('indeterminacy',
              'noun',
              'the indeterminacy is in the theory, not in our knowledge')]),
 'r1': {'sub': 'Explaining physics to a non-physicist',
        'skill': ('Building words from Latinate roots',
                  ['Nouns of process take -ation, -ion or -ment; nouns of quality take -ity, '
                   '-ence or -ness.',
                   'Adjectives from verbs take -able, -ible, -ive or -ory, and the negative '
                   'prefix goes on the adjective.',
                   'Work out the class from the grammar before you choose the ending.']),
        'guided_text': 'The word has escaped. A shampoo is advertised as -----um and the claim '
                       'is not merely false but ----ingless, since the systems the theory '
                       'describes are small, cold and isolated, and a bottle of shampoo is none '
                       'of the three. What makes the -------isation hard is not the mathematics. '
                       'It is that every available analogy misleads in a different direction: a '
                       'wave in water suggests a medium, a cloud of probability suggests '
                       'ignorance, and a coin spinning in the air suggests that the answer '
                       'exists and is merely unseen. The honest summary is ---------able and '
                       'short. The theory gives the odds of what a detector will register, those '
                       'odds are the most precisely -------ed numbers in science, and what is '
                       'happening in between has been disputed for a century without any '
                       'experiment settling it.',
        'guided': ['quant', 'mean', 'popular', 'uncomfort', 'confirm'],
        'guided_hint': '---um is quantum — the slot needs the noun the advertisement uses as an '
                       'adjective.',
        'exam_text': 'A century of argument has produced a -------ing amount of agreement. '
                     'Nobody disputes the ------ism; the equations are written identically in '
                     'every textbook and in every laboratory, and their -------ions have been '
                     'confirmed to a precision no other theory approaches. Nobody disputes that '
                     'a measurement yields one outcome rather than a superposition of several. '
                     'What is in dispute is the -------- between those two sentences, and the '
                     'difficulty is that the equation describing the smooth -----tion of a '
                     'system and the rule describing what happens when it is measured are not of '
                     'the same ---d. The first is continuous, reversible and --------istic. The '
                     'second is abrupt, --------ible and probabilistic, and it mentions an '
                     'operation, measurement, which the formalism itself nowhere -----es. The '
                     'theory is therefore -------ely accurate and, taken as a description of the '
                     'world, visibly unfinished, which is an unusual position for a physical '
                     'theory to occupy for a century.',
        'exam': ['surpris',
                 'formal',
                 'predict',
                 'relation',
                 'evolu',
                 'kin',
                 'determin',
                 'irrevers',
                 'defin',
                 'complet']},
 'r2': {'sub': 'What the formalism says',
        'skill': ('Reading a laboratory rule against a request to bend it',
                  ['A rule of access states a reason. A request usually accepts the reason and '
                   'disputes its reach.',
                   'Look for the physical fact each party is relying on.',
                   'A question about the reply wants the ground given, not the tone.']),
        'docs': [('notice',
                  'Northgate Institute for Quantum Technologies · access to the dilution '
                  'refrigerator, from 1 October',
                  ['# Booking',
                   'Cold time is booked in blocks of seventy-two hours. A block begins when the '
                   'mixing chamber reaches ten millikelvin and ends when the warm-up is started.',
                   '# Why blocks and not hours',
                   '* A cool-down takes about thirty hours and consumes about four hundred '
                   'pounds of helium. Nothing is gained by cooling for a single measurement, and '
                   'the cost falls on every other user.',
                   '# Priority',
                   '* First call to projects with an external deadline evidenced in writing; '
                   'then to doctoral students in their final year; then by rotation.',
                   '# Vibration',
                   '* No drilling, no trolleys and no bicycles in the basement corridor while a '
                   'block is running. The published schedule shows which blocks are live.',
                   '# What is not negotiable',
                   '* The warm-up may not be interrupted and a block may not be extended into '
                   'another group’s. Both have happened and both cost somebody else a week.'],
                  'notice'),
                 ('email',
                  'k.oyediran@northgate.edu',
                  'cryolab@northgate.edu',
                  '12/10/2031',
                  'Twelve hours of a block, and I think the rule is written for a different '
                  'problem',
                  ['Dear Facility Manager,',
                   '',
                   'I have read the notice and I accept the arithmetic. Thirty hours and',
                   'four hundred pounds of helium is a real cost and single measurements',
                   'are indefensible.',
                   '',
                   'My request is narrower. I need twelve hours at base temperature, not',
                   'a cool-down. Dr Marchetti’s group is cold until Friday and has agreed',
                   'in writing to give me the last twelve hours of their block, during',
                   'which they would otherwise be warming up. No additional helium is',
                   'consumed, no cool-down is required and nobody waits longer than they',
                   'would have waited.',
                   '',
                   'The notice forbids extending a block into another group’s. It does',
                   'not appear to contemplate a group giving away the end of their own,',
                   'and the reason given for the rule, the cost of cooling, does not',
                   'apply to what I am asking for.',
                   '',
                   'If the answer is still no I would like to know what the remaining',
                   'objection is, because I may be able to design round it.',
                   '',
                   'Kehinde Oyediran, second-year doctoral student'])],
        'guided': [('How is cold time booked?',
                    ('By the hour',
                     'In blocks of seventy-two hours',
                     'By the measurement',
                     'By rotation only'),
                    1,
                    'A block runs from ten millikelvin to the start of the warm-up.'),
                   ('What does a cool-down cost?',
                    ('About thirty hours and four hundred pounds of helium',
                     'About four hundred hours',
                     'Nothing, once the refrigerator is running',
                     'A week of somebody else’s time'),
                    0,
                    'Which is the reason the notice gives for blocks rather than hours.'),
                   ('Who has first call on cold time?',
                    ('Final-year doctoral students',
                     'Projects with an external deadline evidenced in writing',
                     'Whoever books first',
                     'The facility manager'),
                    1,
                    'Final-year students come second and rotation third.'),
                   ('What is forbidden in the basement corridor during a live block?',
                    ('Any entry at all',
                     'Drilling, trolleys and bicycles',
                     'Measurements by other groups',
                     'Helium deliveries'),
                    1,
                    'The published schedule exists so that users can see which blocks are '
                    'live.')],
        'exam': [('What two things does the notice call non-negotiable?',
                  ('Booking and priority',
                   'Interrupting a warm-up and extending a block into another group’s',
                   'Drilling and cycling',
                   'Helium and vibration'),
                  1,
                  'The notice adds that both have happened and both cost somebody a week.'),
                 ('What does Kehinde Oyediran accept?',
                  ('That her request is unreasonable',
                   'The arithmetic of the cool-down',
                   'That single measurements are permitted',
                   'The priority order'),
                  1,
                  'She calls single measurements indefensible before making her own request.'),
                 ('What exactly is she asking for?',
                  ('A new block of seventy-two hours',
                   'Twelve hours at base temperature at the end of another group’s block',
                   'An exemption from the vibration rule',
                   'Priority as a final-year student'),
                  1,
                  'Dr Marchetti’s group has agreed in writing to give up the hours it would '
                  'spend warming.'),
                 ('Why does she say no additional helium is consumed?',
                  ('Because her measurement is short',
                   'Because no cool-down is required',
                   'Because she will supply her own',
                   'Because the refrigerator is idle'),
                  1,
                  'The system is already at base temperature and would otherwise be warming up.'),
                 ('What does she say about the rule and its reason?',
                  ('The rule is arbitrary',
                   'The reason given, the cost of cooling, does not apply to her request',
                   'The rule contradicts the priority order',
                   'The reason has never been published'),
                  1,
                  'She reads the rule as written for a different problem.'),
                 ('What does she ask for if the answer is still no?',
                  ('A review of the notice',
                   'The remaining objection, so that she can design round it',
                   'Priority in the next rotation',
                   'A refund of the helium'),
                  1,
                  'Which is a request for information rather than for an exception.'),
                 ('Which provision of the notice does her request fall under?',
                  ('The vibration rule',
                   'The prohibition on extending a block into another group’s',
                   'The priority order',
                   'The booking unit'),
                  1,
                  'She argues that a group giving away the end of its own block is not what that '
                  'provision contemplates.')]},
 'r3': {'sub': 'What the formalism does not say',
        'title': 'The Question That Became an Experiment',
        'words': 298,
        'skill': ('Reading a case where a philosophical dispute was settled by measurement',
                  ['The two positions are set out as their holders held them.',
                   'Note what the inequality assumes, because that is what the result rules out.',
                   'A question about the conclusion wants what the experiments do not show.']),
        'paras': ['For three decades after the settlement of the formalism, the dispute about '
                  'its description of the world was treated as a question for philosophers '
                  'rather than physicists. The orthodox position held the theory to be complete, '
                  'the probabilities it assigns to be no confession of ignorance, and no further '
                  'description to be available. The dissenting position, associated with '
                  'Einstein and never a crank’s view, held that the probabilities conceal a '
                  'fuller description in which each particle carries definite properties from '
                  'its production. Both positions accounted for every observation then '
                  'available, and the disagreement was accordingly considered to lie beyond the '
                  'reach of experiment.',
                  'In 1964 a theorist showed that it did not: Bell considered pairs of particles '
                  'prepared together and measured at a distance, and derived an inequality that '
                  'must be satisfied by any theory in which each particle carries its own '
                  'properties and no influence travels faster than light. The quantum formalism '
                  'predicts a violation of that inequality in specifiable circumstances, so that '
                  'a question about meaning had become a number, and the number could be '
                  'measured.',
                  'The experiments followed slowly and then conclusively: a first result in '
                  '1972, a celebrated series in the early nineteen eighties with alteration of '
                  'the detector settings while the particles were in flight, and a set of tests '
                  'in 2015 closing the remaining objections of principle. The inequality is '
                  'violated, by the margin the theory predicts. It is worth being precise here '
                  'about what follows and what does not. On no reading of the formalism does '
                  'anything here travel faster than light, and no interpretation is singled out. '
                  'What is ruled out is an entire family of pictures, those in which each '
                  'particle left the source with its answers inside it, and the dispute about '
                  'meaning continues with one fewer option.'],
        'guided': [('How was the dispute treated for thirty years?',
                    ('As a technical problem in the mathematics',
                     'As a question for philosophers rather than physicists',
                     'As settled by the orthodox position',
                     'As a matter for experiment'),
                    1,
                    'Both positions accounted for every observation then available.'),
                   ('What did the orthodox position hold?',
                    ('That the probabilities reflect ignorance',
                     'That the theory is complete and nothing further is to be said',
                     'That particles carry definite properties',
                     'That the formalism is only a tool'),
                    1,
                    'The probabilities are not a confession of ignorance, on that view.'),
                   ('What did the dissenting position hold?',
                    ('That the theory is false',
                     'That the probabilities conceal a fuller description with definite '
                     'properties',
                     'That measurement cannot be defined',
                     'That the dispute is meaningless'),
                    1,
                    'And the writer notes it was never a crank’s view.'),
                   ('What did Bell derive?',
                    ('A new equation of motion',
                     'An inequality that any local theory with definite properties must satisfy',
                     'A proof that the theory is complete',
                     'An interpretation of the formalism'),
                    1,
                    'The quantum formalism predicts a violation of it in specifiable '
                    'circumstances.')],
        'exam': [('Why was the disagreement thought beyond experiment?',
                  ('Nobody had the apparatus',
                   'Both positions accounted for every observation then available',
                   'The mathematics was disputed',
                   'Philosophers had claimed the question'),
                  1,
                  'Agreement on all the evidence is what makes two positions empirically '
                  'equivalent.'),
                 ('What two assumptions does the inequality rest on?',
                  ('Completeness and probability',
                   'Definite properties carried by each particle, and no influence faster than '
                   'light',
                   'Determinism and measurement',
                   'Locality and ignorance'),
                  1,
                  'Those are precisely the assumptions the violation defeats.'),
                 ('What was special about the experiments of the early nineteen eighties?',
                  ('They used single photons',
                   'The detector settings were altered while the particles were in flight',
                   'They were done in two countries',
                   'They produced a null result'),
                  1,
                  'Which closes one route by which the source might have known the settings in '
                  'advance.'),
                 ('What did the 2015 tests do?',
                  ('Measured the margin for the first time',
                   'Closed the remaining objections of principle',
                   'Confirmed the orthodox interpretation',
                   'Overturned the earlier results'),
                  1,
                  'The inequality is violated by the margin the theory predicts.'),
                 ('What does the writer say is ruled out?',
                  ('All interpretations but one',
                   'The family of pictures in which each particle left the source with its '
                   'answers inside it',
                   'Faster-than-light signalling',
                   'The orthodox position'),
                  1,
                  'And the dispute continues with one fewer option in it.'),
                 ('What does the writer say does NOT follow?',
                  ('That the inequality is violated',
                   'That something travels faster than light',
                   'That the experiments were well done',
                   'That the assumptions were testable'),
                  1,
                  'Nothing travels faster than light in these experiments.'),
                 ('What does the phrase it is worth being precise here mark?',
                  ('A doubt about the measurement',
                   'A warning that the popular account overstates the result',
                   'A change of subject',
                   'A concession to the dissenters'),
                  1,
                  'The writer then separates what follows from what does not.'),
                 ('What is the force of the phrase a question about meaning had become a number?',
                  ('That meaning is unimportant',
                   'That a dispute thought philosophical acquired an experimental test',
                   'That numbers settle everything',
                   'That Bell proved the theory'),
                  1,
                  'The measurement became possible only once the inequality existed.'),
                 ('Which would the writer most likely accept?',
                  ('Interpretation is a matter of taste',
                   'An interpretive dispute can sometimes be narrowed by experiment',
                   'The orthodox position has been vindicated',
                   'Philosophers should not discuss physics'),
                  1,
                  'One family of pictures was removed and the rest of the dispute survives.')]},
 'r4': {'sub': 'What the formalism says',
        'title': 'Five Rules and the Most Accurate Prediction in Science',
        'words': 393,
        'skill': ('Reading a claim that a theory needs no picture',
                  ['The formalism is given as a short list. Keep the list separate from the '
                   'commentary on it.',
                   'One rule is unlike the other four. Note which, and why it matters.',
                   'A question about the ending wants the position the next passage attacks.']),
        'paras': ['The content of quantum mechanics can be set out in five rules, and the fact '
                  'that it can is part of the argument about it. A physical system is assigned a '
                  'wavefunction; each observable quantity is associated with an operation on '
                  'that wavefunction; the wavefunction of an undisturbed system develops in time '
                  'according to an equation which is smooth, continuous and entirely '
                  'deterministic; the probability assigned to each possible measurement outcome '
                  'follows from the wavefunction by a fixed prescription; and upon measurement '
                  'the wavefunction is replaced by the eigenstate corresponding to the outcome '
                  'registered. Four of the five describe the behaviour of a system in the '
                  'absence of any observer; the fifth mentions measurement, and the formalism '
                  'nowhere states what a measurement is. The asymmetry between the four and the '
                  'one is the origin of the entire interpretive literature, since the four '
                  'describe an evolution in which no quantity acquires a definite value and the '
                  'fifth describes the single occasion on which something does.',
                  'The predictive record of this apparatus is without parallel in the history of '
                  'science. The magnetic moment of the electron, computed from the theory and '
                  'measured in the laboratory, exhibits agreement to approximately twelve '
                  'significant figures, an agreement of an altogether different order from those '
                  'ordinarily reported in experimental physics. The range is as striking as the '
                  'precision. The arrangement of the chemical elements, the behaviour of matter '
                  'under pressure, the operation of a laser and the whole of undergraduate '
                  'chemistry are consequences of the same five rules, with no adjustment of any '
                  'kind between the cases, and the rules were written down before most of those '
                  'consequences were known.',
                  'From this record follows a position held by a considerable proportion of '
                  'working physicists, austere to the point of severity. The theory is an '
                  'apparatus for the computation of detector probabilities. Those probabilities '
                  'are confirmed to an accuracy nothing else in science approaches, and the '
                  'further demand for a picture of the interval between the preparation of a '
                  'system and the registration of a click is a demand the theory is under no '
                  'obligation to satisfy. On that view the interpretive literature is '
                  'dispensable and the five rules are the whole of the physics. The next passage '
                  'sets out the difficulty that this position has to absorb, which is internal '
                  'to the five rules rather than imported from philosophy.'],
        'guided': [('How many rules does the writer say the mathematical content can be set out '
                    'in?',
                    ('Three', 'Four', 'Five', 'Twelve'),
                    2,
                    'And the brevity of the statement is said to be part of the argument about '
                    'it.'),
                   ('What does the equation of motion do, on this account?',
                    ('Gives probabilities',
                     'Develops the wavefunction in a linear, continuous and deterministic way',
                     'Replaces the wavefunction on measurement',
                     'Associates operations with observables'),
                    1,
                    'That rule describes an undisturbed system.'),
                   ('What is unlike the other four rules?',
                    ('The assignment of a wavefunction',
                     'The rule that mentions measurement',
                     'The probability prescription',
                     'The association of observables with operations'),
                    1,
                    'And the formalism nowhere states what a measurement is.')],
        'exam': [('What agreement does the writer cite as without parallel?',
                  ('The periodic table',
                   'The magnetic moment of the electron, to some twelve significant figures',
                   'The conductivity of a semiconductor',
                   'The operation of a laser'),
                  1,
                  'A correspondence of a different order from the agreements ordinarily '
                  'reported.'),
                 ('What does the writer say is as striking as the precision?',
                  ('The shortness',
                   'The range',
                   'The age of the theory',
                   'The cost of the experiments'),
                  1,
                  'One set of rules covers matter, chemistry, semiconductors and lasers with no '
                  'adjustment.'),
                 ('What position does the writer say follows from the record?',
                  ('That the theory is incomplete',
                   'That the theory is an instrument for computing probabilities and owes no '
                   'picture',
                   'That measurement must be defined',
                   'That interpretation is the central question'),
                  1,
                  'The writer calls it austere to the point of severity.'),
                 ('What does that position say about the demand for a picture?',
                  ('It is premature',
                   'It is a demand the theory is under no obligation to meet',
                   'It is answered by decoherence',
                   'It is the point of the theory'),
                  1,
                  'And on that account the interpretive literature is dispensable.'),
                 ('How does the writer describe the difficulty the next passage sets out?',
                  ('Imported from philosophy',
                   'Internal to the five rules',
                   'Confined to the laboratory',
                   'A matter of taste'),
                  1,
                  'Which is the writer’s answer to the charge that the problem is philosophers’ '
                  'work.')]},
 'r5': {'sub': 'What the formalism does not say',
        'title': 'The Two Laws and the Word Between Them',
        'words': 411,
        'skill': ('Reading an objection internal to a theory',
                  ['The objection is stated as an inconsistency between two rules. Find it.',
                   'Four responses are set out. Note what each keeps and what each pays.',
                   'The objection then concedes what no experiment can settle.']),
        'paras': ['The difficulty is not that the theory is strange but that, as ordinarily '
                  'presented, it contains two laws of motion of incompatible kinds and no '
                  'statement of when each applies. The equation governing an undisturbed system '
                  'is continuous, reversible and deterministic; the rule governing measurement '
                  'is abrupt, irreversible and probabilistic. Since a measuring apparatus is '
                  'itself a physical system composed of the same particles as everything else, '
                  'application of the first law to apparatus and system together yields a '
                  'superposition of pointer positions rather than a pointer position, and '
                  'observation of the former has never once been reported. The word doing the '
                  'work in the standard presentation, measurement, appears in no equation and '
                  'receives no definition anywhere in the formalism. The objection is therefore '
                  'not a complaint that the theory is hard to picture but an observation about '
                  'its structure as taught, and physicists have pressed it harder than '
                  'philosophers.',
                  'Four responses occupy the field, and each pays in one currency for its '
                  'retention of another. The theory of decoherence shows that interaction with '
                  'the surroundings destroys the interference between branches of a '
                  'superposition within times beneath the resolution of any measurement for an '
                  'object of ordinary size, which explains with great success why superpositions '
                  'of pointers are never seen and does not explain why one pointer position '
                  'occurs instead of another. The many-worlds reading retains the first law '
                  'alone and accepts that all the outcomes occur, paying in ontology what it '
                  'saves in dynamics. The pilot-wave reading restores definite positions to the '
                  'particles and a single outcome to the experiment, at the price of an explicit '
                  'dependence of each particle on the configuration of every other. Collapse '
                  'models alter the equation itself so that superpositions decay spontaneously '
                  'at a rate fixed by a new constant of nature.',
                  'The shape of the dispute is now visible, and so is the reason for its '
                  'longevity. Three of the four responses are empirically equivalent: they agree '
                  'on the outcome of every experiment that has been performed or proposed, which '
                  'makes the choice between them a case of underdetermination in the strict '
                  'sense rather than a shortage of data. Only the fourth is testable, and the '
                  'parameter space it occupies has been narrowed for two decades without a '
                  'positive result. On no reading of the formalism does the instrumentalist '
                  'position become false; it becomes unsatisfying, which is a weaker charge than '
                  'its opponents usually admit and a sharper one than its holders usually '
                  'allow.'],
        'guided': [('What does the writer say the difficulty is?',
                    ('That the theory is strange',
                     'That it contains two laws of motion of incompatible kinds with no rule for '
                     'when each applies',
                     'That the probabilities are too precise',
                     'That measurement cannot be performed'),
                    1,
                    'One law is continuous and deterministic, the other abrupt and '
                    'probabilistic.'),
                   ('What follows from applying the first law to the apparatus as well as the '
                    'system?',
                    ('A pointer position',
                     'A superposition of pointer positions',
                     'A probability',
                     'A definite outcome'),
                    1,
                    'And nobody has ever observed the former.'),
                   ('What does the writer say about the word measurement?',
                    ('It is used inconsistently by physicists',
                     'It appears in no equation and is defined nowhere in the formalism',
                     'It was defined only in 1964',
                     'It means an interaction with a detector'),
                    1,
                    'Yet it is the word doing the work in the standard presentation.')],
        'exam': [('What does decoherence explain, and what does it not?',
                  ('Why outcomes occur, but not why they are random',
                   'Why superpositions of pointers are never seen, but not why one outcome '
                   'occurs',
                   'Why the theory is accurate, but not why it is linear',
                   'Neither of these'),
                  1,
                  'Interference between branches is destroyed too fast to measure for ordinary '
                  'objects.'),
                 ('What does the many-worlds reading pay for what it keeps?',
                  ('Precision', 'Ontology', 'Locality', 'Determinism'),
                  1,
                  'It keeps the first law alone and accepts that all outcomes occur.'),
                 ('What is the price of the pilot-wave reading?',
                  ('A loss of determinism',
                   'An explicit dependence of each particle on the configuration of every other',
                   'The abandonment of probability',
                   'A new constant of nature'),
                  1,
                  'It restores definite positions and a single outcome.'),
                 ('What makes the collapse models different from the other three?',
                  ('They are simpler',
                   'They alter the equation and are therefore testable',
                   'They were proposed first',
                   'They abandon locality'),
                  1,
                  'Superpositions decay at a rate fixed by a new constant of nature.'),
                 ('What does the writer say about the instrumentalist position?',
                  ('It is false',
                   'It becomes unsatisfying rather than false',
                   'It is vindicated by decoherence',
                   'It is not open to test'),
                  1,
                  'A weaker charge than its opponents admit and a sharper one than its holders '
                  'allow.')]},
 'l1': {'sub': 'Explaining physics to a non-physicist',
        'caption': 'A physicist and a journalist, before an interview',
        'skill': ('Hearing a specialist refuse the available analogies',
                  ['Three analogies are offered and each is rejected for a different reason.',
                   'Listen for the one sentence she is willing to be quoted on.',
                   'The item about the shampoo is the one the conversation is for.']),
        'warm': [('Man: Can I say it is like a wave in water?',
                  ('Only if you want your readers thinking there is a medium.',
                   'Yes, that is exactly right.',
                   'Three analogies.',
                   'In the laboratory.'),
                  0,
                  'Each analogy misleads in its own direction, and that one invents a '
                  'substance.'),
                 ('Man: Is it like a spinning coin, then?',
                  ('No. That suggests the answer already exists.',
                   'Yes, a coin is good.',
                   'Yes, broadly.',
                   'A detector.'),
                  0,
                  'The coin implies a definite outcome merely unobserved.'),
                 ('Man: So what can I quote?',
                  ('That the odds are the best confirmed numbers in science.',
                   'That nobody understands it.',
                   'Nothing at all.',
                   'A century of dispute.'),
                  0,
                  'She offers one sentence she will stand behind in print.')],
        'script': [('Woman', 'Before we start: which analogy were you planning to use?'),
                   ('Man', 'The wave. Everybody uses the wave.'),
                   ('Woman',
                    'Everybody does, and the trouble is that a wave in English is a wave in '
                    'something. Water, air, a rope. Your reader will finish the sentence by '
                    'inventing a medium, and then we shall spend ten years explaining that there '
                    'is not one.'),
                   ('Man', 'A cloud of probability?'),
                   ('Woman',
                    'Better, and it buys a different error. Probability in ordinary speech is '
                    'about ignorance: the card is a king or it is not, and I do not know which. '
                    'The theory is not saying that. It is saying there is no answer waiting to '
                    'be found.'),
                   ('Man', 'And the spinning coin.'),
                   ('Woman',
                    'Worst of the three, because it is the most comfortable. A coin in the air '
                    'has landed in your imagination before it lands on the table. That is '
                    'exactly the picture the experiments rule out.'),
                   ('Man', 'You are leaving me with nothing to write.'),
                   ('Woman',
                    'I am leaving you with one sentence, and it is a good one. The theory tells '
                    'you the odds that a detector will click, those odds are the most precisely '
                    'confirmed numbers in the whole of science, and what happens in between is '
                    'genuinely disputed and has been for a hundred years.'),
                   ('Man', 'My editor will ask whether anybody is close to settling it.'),
                   ('Woman',
                    'Some of it has been settled, which is the part worth your space. In the '
                    'nineteen sixties somebody turned one of the old philosophical questions '
                    'into an inequality you can test, and the experiments were done, and one '
                    'whole class of comfortable pictures is now dead. That is a better story '
                    'than the shampoo anyway.'),
                   ('Man', 'What shampoo?'),
                   ('Woman',
                    'You will see it on the shelf on your way home. Quantum shampoo. Not false, '
                    'you understand. Not even the kind of thing that could be false.')],
        'items': [('What does the physicist say is wrong with the wave analogy?',
                   ('It is too technical',
                    'A wave in English is a wave in something, so the reader invents a medium',
                    'It has been disproved',
                    'It applies only to light'),
                   1,
                   'And she says the correction would then take ten years.'),
                  ('What error does the probability cloud produce?',
                   ('It suggests the answer is already there and merely unknown',
                    'It suggests a medium',
                    'It suggests the theory is deterministic',
                    'It suggests there is no answer'),
                   0,
                   'Ordinary probability is about ignorance, and the theory is making a stronger '
                   'claim.'),
                  ('Why does she call the coin the worst of the three?',
                   ('It is the least familiar',
                    'It is the most comfortable, and the picture it offers is the one '
                    'experiments rule out',
                    'It involves no mathematics',
                    'It is used by advertisers'),
                   1,
                   'The coin has landed in the imagination before it lands on the table.'),
                  ('What is the one sentence she offers?',
                   ('That nobody understands the theory',
                    'That the odds are the most precisely confirmed numbers in science and the '
                    'rest is disputed',
                    'That the theory is probably wrong',
                    'That analogies should be avoided'),
                   1,
                   'She is willing to be quoted on exactly that.'),
                  ('What does she say has been settled?',
                   ('The interpretation of the theory',
                    'That one whole class of comfortable pictures is dead',
                    'The value of the odds',
                    'Nothing at all'),
                   1,
                   'An old philosophical question was turned into a testable inequality in the '
                   'nineteen sixties.'),
                  ('What does she say about the shampoo?',
                   ('The claim is false',
                    'The claim is not even the kind of thing that could be false',
                    'It uses the word correctly',
                    'It should be banned'),
                   1,
                   'Which is a stronger criticism than calling it false.'),
                  ('What does she say is the better story?',
                   ('The shampoo',
                    'The experiments that killed a class of pictures',
                    'The dispute itself',
                    'The precision of the odds'),
                   1,
                   'She calls it the part worth his space.')]},
 'l2': {'sub': 'What the formalism says',
        'caption': 'The facility manager answering users at a lab meeting',
        'poster': ['Blocks of 72 h · from 10 mK to warm-up',
                   'Cool-down: 30 h, £400 of helium',
                   'No drilling, no trolleys, no bicycles'],
        'skill': ('Hearing a manager grant a request and name a new rule',
                  ['He reads the request back in his own words before answering it.',
                   'Note the physical objection that survives, and the one that does not.',
                   'The item about the register is the one that carries the decision.']),
        'warm': [('Woman: Is she right that the helium argument does not apply?',
                  ('She is right, and it took me an hour to see it.',
                   'No, the helium cost is the same.',
                   'Twelve hours.',
                   'Until Friday.'),
                  0,
                  'No cool-down is required for the hours she is asking for.'),
                 ('Woman: So there is no objection at all?',
                  ('One. The warm-up has to start on schedule.',
                   'None whatever.',
                   'Yes, two objections.',
                   'A week.'),
                  0,
                  'The thermal cycle, not the cost, is what remains.'),
                 ('Woman: Will you write a rule for it?',
                  ('A register, with both groups signing.',
                   'No, I shall decide case by case.',
                   'Yes, a prohibition.',
                   'On the schedule.'),
                  0,
                  'A signed handover is what he puts in place of a prohibition.')],
        'script': [('Man',
                    'I am going to grant this, and I want to set out why I nearly refused it, '
                    'because the reasoning is more useful to you than the answer. The request is '
                    'twelve hours at base temperature at the end of somebody else’s block, given '
                    'up voluntarily by the group that holds it. Now, my first reaction was that '
                    'this is exactly what the notice forbids, and my first reaction was wrong. '
                    'The notice forbids extending your block into another group’s, and the '
                    'reason printed underneath it is the cost of cooling. Neither applies here. '
                    'Nobody is extending anything, no helium is consumed and no cool-down is '
                    'needed, and if I refuse on the words of a rule whose stated reason has '
                    'evaporated, I am administering a sentence rather than a facility. So: '
                    'granted. There is one real objection and it is not financial. A warm-up '
                    'that starts twelve hours late puts the next cool-down twelve hours late, '
                    'and the group after that has a conference deadline. The thermal cycle is '
                    'the scarce thing here, not the money. Which gives us the new rule, and it '
                    'is a register rather than a prohibition. A handover of this kind is '
                    'recorded, both groups sign it, the warm-up time stays exactly where the '
                    'schedule says, and the group receiving the hours accepts that they end when '
                    'the warm-up begins and not when their measurement is finished. That last '
                    'clause is the one that will be tested within a month, and I want it in '
                    'writing before it is.')],
        'items': [('What does the manager say is more useful than his answer?',
                   ('The notice',
                    'The reasoning that nearly produced a refusal',
                    'The schedule',
                    'The cost of helium'),
                   1,
                   'He sets out the argument before he gives the decision.'),
                  ('Why was his first reaction wrong?',
                   ('The group had not agreed in writing',
                    'Neither the prohibition nor its stated reason applies to the request',
                    'The request was for a full block',
                    'The helium cost had risen'),
                   1,
                   'Nobody is extending a block and no cooling is required.'),
                  ('What does he say he would be doing if he refused on the words alone?',
                   ('Protecting the facility',
                    'Administering a sentence rather than a facility',
                    'Following the priority order',
                    'Saving helium'),
                   1,
                   'He calls the stated reason evaporated in this case.'),
                  ('What is the one real objection?',
                   ('The cost',
                    'A late warm-up delays the next cool-down, and the group after that has a '
                    'deadline',
                    'The vibration in the corridor',
                    'The lack of a register'),
                   1,
                   'He calls the thermal cycle the scarce thing rather than the money.'),
                  ('What does he put in place of a prohibition?',
                   ('A fine',
                    'A register, signed by both groups',
                    'A rotation',
                    'An extension of the block'),
                   1,
                   'The warm-up time stays where the schedule puts it.'),
                  ('Which clause does he expect to be tested within a month?',
                   ('The signing requirement',
                    'That the hours end when the warm-up begins, not when the measurement is '
                    'finished',
                    'The vibration rule',
                    'The priority order'),
                   1,
                   'Which is why he wants it in writing beforehand.')]},
 'l3': {'sub': 'What the formalism does not say',
        'caption': 'A lecture on the one question that got settled',
        'board': ['Orthodox: the theory is complete',
                  'Einstein: the odds hide definite properties',
                  '1964: an inequality any local theory must satisfy',
                  '1972 · 1982 · 2015: violated, as predicted'],
        'skill': ('Hearing a lecturer separate a result from its popular version',
                  ['Two positions, then the inequality, then the experiments.',
                   'Listen for the two assumptions the inequality rests on.',
                   'The item about what is not shown is the one the lecture is for.']),
        'warm': [('Man: Was Einstein’s position unreasonable?',
                  ('Not at all. It is what most physicists would want.',
                   'Yes, and it was never taken seriously.',
                   'In 1964.',
                   'Two assumptions.'),
                  0,
                  'The lecturer insists it was never a crank’s view.'),
                 ('Man: What does the inequality assume?',
                  ('Definite properties, and no influence faster than light.',
                   'Only determinism.',
                   'That the theory is complete.',
                   'Three experiments.'),
                  0,
                  'Those two assumptions together are what the violation defeats.'),
                 ('Man: Does the violation mean signals go faster than light?',
                  ('No, and that is the commonest mistake about it.',
                   'Yes, that is exactly what it means.',
                   'Only in 2015.',
                   'By the predicted margin.'),
                  0,
                  'No signal can be sent using the correlations.')],
        'script': [('Woman',
                    'I want to tell you about the one part of this argument that has actually '
                    'been settled, and I want to be careful about how much it settles. Start '
                    'with the two positions as they stood in about 1950. The orthodox view: the '
                    'theory is complete, the probabilities are not hiding anything, stop asking. '
                    'Einstein’s view: the probabilities are hiding something, each particle '
                    'carries its own properties, and a fuller theory will one day show us what '
                    'they are. And I want to say clearly that the second view is the reasonable '
                    'one. It is what anybody trained in physics before 1925 would want, and the '
                    'reason it is not taught as a live option is not that it was silly. Now, '
                    '1964. A theorist asks a question nobody had quite asked: what would any '
                    'theory of the second kind have to predict? And he derives an inequality. If '
                    'each particle carries its own properties, and if nothing influences '
                    'anything faster than light, then a certain combination of measurement '
                    'results on pairs of particles cannot exceed a particular number. Quantum '
                    'mechanics says it does exceed it. That is the whole trick: the two '
                    'assumptions together are testable even though neither is observable. '
                    'Experiments: a first in 1972, the famous ones in the early eighties where '
                    'they switched the detector settings while the particles were already on '
                    'their way, and in 2015 a set of them that closed the last objections '
                    'anybody had left. Violated, every time, by the margin predicted. Now the '
                    'careful part. The standard objection runs that this shows something going '
                    'faster than light, and it does not; you cannot send a message with these '
                    'correlations. And it does not pick an interpretation. It kills a family. '
                    'Every picture in which the particles left home with their answers in their '
                    'pockets is gone, and the rest of the argument is still with us.')],
        'items': [('What does she say about Einstein’s view?',
                   ('It was never taken seriously',
                    'It is the reasonable one and what anybody trained before 1925 would want',
                    'It has been vindicated',
                    'It was untestable in principle'),
                   1,
                   'She says the reason it is not a live option is not that it was silly.'),
                  ('What question does she say nobody had quite asked?',
                   ('Whether the theory is complete',
                    'What any theory of the second kind would have to predict',
                    'How to measure a photon',
                    'Whether probabilities hide ignorance'),
                   1,
                   'The inequality is the answer to that question.'),
                  ('What does the inequality say about a combination of results?',
                   ('It must equal a particular number',
                    'It cannot exceed a particular number',
                    'It cannot be measured',
                    'It depends on the detector'),
                   1,
                   'And quantum mechanics says it does exceed it.'),
                  ('What does she call the whole trick?',
                   ('That the inequality is simple',
                    'That the two assumptions are testable together although neither is '
                    'observable',
                    'That the experiments are cheap',
                    'That the margin is large'),
                   1,
                   'Neither definite properties nor locality can be observed directly.'),
                  ('What was done in the experiments of the early eighties?',
                   ('Single photons were used for the first time',
                    'The detector settings were switched while the particles were on their way',
                    'The source was moved',
                    'The results were kept secret'),
                   1,
                   'Which removes one way the source could have known the settings.'),
                  ('What does she say the result does not do?',
                   ('Rule anything out',
                    'Pick an interpretation',
                    'Confirm the formalism',
                    'Apply to photons'),
                   1,
                   'It kills a family of pictures rather than selecting a survivor.'),
                  ('Why does she say no message can be sent?',
                   ('The correlations are too weak',
                    'You cannot send a message with these correlations',
                    'The detectors are too slow',
                    'The settings are random'),
                   1,
                   'Which is why nothing here travels faster than light.')]},
 'l4': {'sub': 'What the formalism says',
        'caption': 'A lecture on five rules and one missing definition',
        'board': ['State → operator → equation → odds → collapse',
                  'Four rules: no observer anywhere in them',
                  'The fifth: measurement, nowhere defined',
                  'Electron moment: agreement to ~12 figures'],
        'skill': ('A lecture that lists a formalism and then counts it',
                  ['Five rules, in order. Keep them numbered.',
                   'He says which four belong together and why.',
                   'A question about the ending wants the position he describes.']),
        'warm': [('Woman: How many rules are there?',
                  ('Five, and four of them are of one kind.',
                   'Three, in the modern version.',
                   'Twelve figures.',
                   'In the laboratory.'),
                  0,
                  'The fifth is the one that mentions measurement.'),
                 ('Woman: Which rule mentions an observer?',
                  ('Only the fifth, and it does not define one.',
                   'All five of them.',
                   'None at all.',
                   'The equation.'),
                  0,
                  'Four rules describe a system with nobody looking at it.'),
                 ('Woman: Why cite the electron moment?',
                  ('Twelve figures of agreement is not an ordinary result.',
                   'Because it is easy to measure.',
                   'Because it was measured first.',
                   'A laser.'),
                  0,
                  'The precision is what the austere position rests on.')],
        'script': [('Man',
                    'I am going to put the whole of quantum mechanics on this board in five '
                    'lines, and then I am going to count them, because the counting is the '
                    'lecture. One: a system gets a wavefunction. Two: every measurable quantity '
                    'gets an operation that acts on that wavefunction. Three: left alone, the '
                    'wavefunction develops according to an equation which is linear, continuous '
                    'and perfectly deterministic — you tell me the state now and I tell you the '
                    'state at any later time, exactly. Four: the probability of each possible '
                    'outcome of a measurement comes from the wavefunction by a fixed recipe. '
                    'Five: when you measure, the wavefunction is replaced by the one '
                    'corresponding to the outcome you got. Now count. Rules one to four mention '
                    'nobody. There is no observer in them, no apparatus, no laboratory; they '
                    'describe a system in an empty universe. Rule five mentions measurement, and '
                    'I want you to notice that the word measurement appears in none of the '
                    'equations and is defined nowhere in the theory. Before anybody decides this '
                    'is a scandal, look at what these five lines do. The magnetic moment of the '
                    'electron, calculated from them and measured in a laboratory, agree to about '
                    'twelve significant figures. Nothing else in science does that. The periodic '
                    'table, the laser, the semiconductor in your telephone and the whole of '
                    'chemistry come out of the same five lines with no adjustment. Which is why '
                    'a great many physicists hold a position I want you to be able to state '
                    'fairly: the theory computes the odds of detector clicks, the odds are right '
                    'to twelve figures, and if you want a picture of what happens in between, '
                    'the theory does not owe you one. I do not hold that position myself, and I '
                    'want you to be able to defend it before you decide whether you do.')],
        'items': [('What does the lecturer say the counting is?',
                   ('A formality', 'The lecture', 'A digression', 'The hardest part'),
                   1,
                   'He puts the five rules up in order to count them.'),
                  ('What does rule three say about the evolution?',
                   ('It is probabilistic',
                    'It is linear, continuous and perfectly deterministic',
                    'It applies only when nobody is looking',
                    'It cannot be written down'),
                   1,
                   'Given the state now, the state at any later time follows.'),
                  ('What do rules one to four mention?',
                   ('An observer', 'An apparatus', 'A laboratory', 'None of these'),
                   3,
                   'He says they describe a system in an empty universe.'),
                  ('What does he want the audience to notice about measurement?',
                   ('It is hard to perform',
                    'The word appears in none of the equations and is defined nowhere',
                    'It was defined only in 1964',
                    'It applies only to detectors'),
                   1,
                   'Which is the point of counting four against one.'),
                  ('What position does he want them to be able to state fairly?',
                   ('That the theory is incomplete',
                    'That the theory computes the odds and owes nobody a picture',
                    'That measurement must be defined',
                    'That interpretation is a scandal'),
                   1,
                   'The precision of the odds is what that position rests on.')]},
 'l5': {'sub': 'What the formalism does not say',
        'caption': 'A reply from somebody who works on the problem',
        'board': ['Two laws, no rule for when each applies',
                  'Apparatus = physical system → superposed pointers',
                  'Decoherence: why not seen ≠ why one happens',
                  'Three agree on everything; one is testable'],
        'skill': ('Hearing an objection presented as an inconsistency',
                  ['She states the problem as a clash between two rules.',
                   'Four responses, and she says what each pays.',
                   'The last item asks what no experiment can settle.']),
        'warm': [('Man: Is the problem that the theory is strange?',
                  ('No. It is that two of its laws are of different kinds.',
                   'Yes, it is deeply strange.',
                   'Four responses.',
                   'In the formalism.'),
                  0,
                  'Strangeness is not an objection; inconsistency is.'),
                 ('Man: What does decoherence settle?',
                  ('Why we never see a superposed pointer.',
                   'Why one outcome happens.',
                   'Everything, in practice.',
                   'The rate of collapse.'),
                  0,
                  'It explains the absence of interference and not the outcome.'),
                 ('Man: Can any experiment decide between the rest?',
                  ('Three of them agree on every prediction.',
                   'Yes, easily.',
                   'Only the many-worlds one.',
                   'Two decades.'),
                  0,
                  'Which is underdetermination in the strict sense.')],
        'script': [('Woman',
                    'He left you with the austere position and I want to put the difficulty to '
                    'you properly, because it is not that the theory is strange. Strangeness is '
                    'not an objection to anything. The difficulty is that the theory as he wrote '
                    'it on the board has two laws of motion of quite different kinds and no rule '
                    'telling you when each one applies. Left alone: continuous, reversible, '
                    'deterministic. Measured: abrupt, irreversible, probabilistic. Now, a '
                    'measuring instrument is made of atoms. So apply the first law to the atom '
                    'and the instrument together, as the theory says you may, and what you get '
                    'out is a superposition of pointer positions. Not a pointer position. And '
                    'nobody in the history of physics has seen a superposed pointer. Four '
                    'responses, and each buys something with something. Decoherence: contact '
                    'with the air and the light destroys the interference between the branches '
                    'within a time nobody could ever measure, which explains beautifully why you '
                    'never see the superposition, and says nothing whatever about why you get '
                    'one outcome rather than the other. Many worlds: keep the first law, accept '
                    'that both outcomes happen, pay in what exists. Pilot wave: give the '
                    'particles definite positions and keep one outcome, pay in locality, because '
                    'each particle now depends on where all the others are. Collapse models: '
                    'change the equation so superpositions fall apart on their own at some rate, '
                    'and this is the interesting one, because a rate is a number and a number '
                    'can be measured. Here is the part I would make everybody learn. The first '
                    'three agree on every experiment anybody has done or proposed. That is not a '
                    'shortage of data. It is underdetermination in the strict sense, and the '
                    'fourth response is the only door out of it that anybody has found in ninety '
                    'years of fairly determined looking.')],
        'items': [('What does she say the difficulty is not?',
                   ('That two laws conflict',
                    'That the theory is strange',
                    'That measurement is undefined',
                    'That superpositions are unobserved'),
                   1,
                   'She says strangeness is not an objection.'),
                  ('What do you get by applying the first law to atom and instrument together?',
                   ('A pointer position',
                    'A probability',
                    'A superposition of pointer positions',
                    'A collapse'),
                   2,
                   'And nobody has ever seen a superposed pointer.'),
                  ('What does decoherence say nothing about?',
                   ('Why interference disappears',
                    'Why one outcome occurs rather than the other',
                    'How fast the branches separate',
                    'Why pointers are large'),
                   1,
                   'It explains the absence of the superposition beautifully and stops there.'),
                  ('What does the pilot-wave response pay in?',
                   ('Ontology', 'Locality', 'Determinism', 'Precision'),
                   1,
                   'Each particle depends on where all the others are.'),
                  ('Why does she call the collapse models the interesting one?',
                   ('They are the oldest',
                    'They introduce a rate, which is a number that can be measured',
                    'They keep both outcomes',
                    'They abandon the first law'),
                   1,
                   'She calls it the only door out of the underdetermination.')]},
 'w1': {'sub': 'Questions about an experiment',
        'skill': ('Build a Sentence: asking what an experiment ruled out',
                  ['Eight of the ten are questions, and the useful ones ask what a result '
                   'excludes.',
                   'An embedded question keeps statement order: do you know what the experiment '
                   'ruled out.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('The experiment was done in 1982.',
                    ['do',
                     'you',
                     'know',
                     'which',
                     'class',
                     'of',
                     'theories',
                     'it',
                     'ruled',
                     'out'],
                    'Do you know which class of theories it ruled out?'),
                   ('The two detectors agreed more often than chance allows.',
                    ['was',
                     'the',
                     'setting',
                     'chosen',
                     'after',
                     'the photons',
                     'had',
                     'left',
                     'the source'],
                    'Was the setting chosen after the photons had left the source?'),
                   ('The result is called a violation of the inequality.',
                    ['can',
                     'you',
                     'tell',
                     'me',
                     'what',
                     'the inequality',
                     'assumes',
                     'in',
                     'the first',
                     'place'],
                    'Can you tell me what the inequality assumes in the first place?')],
        'exam': [('Two interpretations make identical predictions.',
                  ['is', 'there', 'any', 'measurement', 'that', 'could', 'tell', 'them', 'apart'],
                  'Is there any measurement that could tell them apart?'),
                 ('The collapse models predict a small heating effect.',
                  ['do',
                   'we',
                   'know',
                   'how',
                   'close',
                   'the experiments',
                   'have',
                   'come',
                   'to',
                   'that',
                   'figure'],
                  'Do we know how close the experiments have come to that figure?'),
                 ('Decoherence explains why large objects look classical.',
                  ['does',
                   'it',
                   'explain',
                   'why',
                   'one',
                   'outcome',
                   'occurs',
                   'rather',
                   'than',
                   'another'],
                  'Does it explain why one outcome occurs rather than another?'),
                 ('The formalism nowhere defines measurement.',
                  ['which',
                   'of',
                   'the',
                   'interpretations',
                   'supplies',
                   'a',
                   'definition',
                   'of',
                   'it'],
                  'Which of the interpretations supplies a definition of it?'),
                 ('The loophole-free tests were completed in 2015.',
                  ['what',
                   'exactly',
                   'had',
                   'the earlier',
                   'experiments',
                   'left',
                   'open',
                   'until',
                   'then'],
                  'What exactly had the earlier experiments left open until then?'),
                 ('The theory is probabilistic.',
                  ['would',
                   'a',
                   'deterministic',
                   'version',
                   'of',
                   'it',
                   'predict',
                   'anything',
                   'different'],
                  'Would a deterministic version of it predict anything different?'),
                 ('Nobody disputes the equations.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'what',
                   'exactly',
                   'is',
                   'in',
                   'dispute',
                   'then'],
                  'I would like to know what exactly is in dispute then.')]},
 'w2': {'sub': 'What the formalism says',
        'to': 'cryolab@northgate.edu',
        'date': '15/10/2031',
        'subject': 'Handover hours — the register, and the clause that will be tested',
        'scenario': ['You are the postdoctoral researcher who runs Dr Marchetti’s measurements. '
                     'Your group has offered the last twelve hours of its block to a second-year '
                     'student, and the facility manager has granted it and proposed a signed '
                     'register. You support the register. You think one clause needs tightening '
                     'before it is tested: a group receiving hours must stop at the scheduled '
                     'warm-up even if its measurement is incomplete, and somebody has to be '
                     'named as responsible for starting the warm-up.',
                     'Write an email to the facility manager, copied to the groups.'],
        'bullets': ['Support the register, and say why the distinction he drew matters.',
                    'Name the clause that needs tightening and the failure it prevents.',
                    'Propose who starts the warm-up and what happens if the measurement is '
                    'unfinished.'],
        'skill': ('Supporting a decision and closing the gap in it',
                  ['Endorse the reasoning, not merely the outcome.',
                   'Name the failure the loose clause allows, concretely.',
                   'Give the fix as a named person and a stated time.']),
        'model': ['Dear Facility Manager, and colleagues,',
                  '',
                  'The group supports the register and asks for one clause to be tightened '
                  'before it is used.',
                  '',
                  'The distinction you drew is the right one and it is worth restating, because '
                  'it will be quoted at you. The prohibition in the notice protects a thermal '
                  'cycle, not a budget, and a voluntary handover of hours already paid for '
                  'threatens neither. It is worth being precise here: what is scarce in this '
                  'basement is cold time in sequence, and anything that leaves the sequence '
                  'undisturbed is not the thing the rule was written against.',
                  '',
                  'The clause that needs work is the last one. As drafted, the receiving group '
                  'accepts that its hours end when the warm-up begins. In practice the warm-up '
                  'begins when somebody walks down and starts it, and at two in the morning, '
                  'with a measurement forty minutes from finishing, that somebody will be the '
                  'person who most wants to wait. I have been that person. Nothing in the '
                  'mathematics requires the gas to be warmed on time and nothing in human nature '
                  'does it either.',
                  '',
                  'So I propose that the warm-up be started by the group that owns the block '
                  'rather than the group borrowing the end of it, that the time be entered on '
                  'the register when the handover is signed and not afterwards, and that an '
                  'unfinished measurement at that hour be recorded as unfinished. The receiving '
                  'group loses the data and keeps the hours it was given, which is the correct '
                  'result and the one nobody will argue with at a reasonable hour of the '
                  'afternoon.',
                  '',
                  'Dr Agnieszka Boateng, Marchetti Group'],
        'notes': ['The endorsement restates the manager’s own distinction, which is more useful '
                  'to him than agreement and arms him for the next request.',
                  'The failure is made concrete with a time and a person: two in the morning, '
                  'forty minutes from the end.',
                  'The fix moves a duty to whoever has no interest in delaying it, which is the '
                  'whole of the proposal.',
                  'The last sentence names when the rule will be agreed to, which is a realistic '
                  'account of how such clauses are accepted.'],
        'bandpair': {'mid': ['Dear Facility Manager,',
                             'We are happy to support the register and we think it is a sensible '
                             'way of dealing with these handovers, which seem likely to become '
                             'more common as the group grows.',
                             'There is one part of it that we feel might cause problems later. '
                             'The clause says that the borrowed hours end when the warm-up '
                             'starts, but of course the warm-up only starts when somebody '
                             'actually goes down to start it, and if a measurement is nearly '
                             'finished at that point there will be a temptation to leave it a '
                             'little longer.',
                             'We would therefore suggest that it should be the group that owns '
                             'the block which starts the warm-up, rather than the group '
                             'borrowing the hours, and that the time should be written down in '
                             'advance. If a measurement is not finished by then it would have to '
                             'be abandoned, which seems reasonable.',
                             'Best wishes, Agnieszka Boateng'],
                     'top': ['Dear Facility Manager, and colleagues,',
                             'The group supports the register and asks for one clause to be '
                             'tightened before it is used.',
                             'Your distinction is the right one and will be quoted at you, so it '
                             'is worth restating: the prohibition protects a thermal cycle, not '
                             'a budget, and a voluntary handover of hours already paid for '
                             'threatens neither. What is scarce in this basement is cold time in '
                             'sequence.',
                             'The clause that needs work is the last. As drafted, the borrowed '
                             'hours end when the warm-up begins; in practice the warm-up begins '
                             'when somebody walks down and starts it, and at two in the morning, '
                             'forty minutes from the end of a measurement, that somebody is the '
                             'person who most wants to wait. I have been that person.',
                             'So: the warm-up is started by the group that owns the block, not '
                             'the group borrowing the end of it; the time is entered on the '
                             'register when the handover is signed; and an unfinished '
                             'measurement at that hour is recorded as unfinished. The receiving '
                             'group loses the data and keeps the hours it was given, which is '
                             'the right result and the one nobody disputes at four in the '
                             'afternoon. Agnieszka Boateng'],
                     'diffs': ['It restates the manager’s distinction instead of calling the '
                               'register sensible, which arms him for the next request.',
                               'It makes the failure concrete with an hour and a person, and '
                               'admits to having been that person.',
                               'It moves the duty to the party with no interest in delay, which '
                               'is the mechanism rather than a hope.',
                               'It states what happens to the unfinished measurement, so the '
                               'rule can be applied at two in the morning without a '
                               'conversation.',
                               'It drops the hedging — we feel, might cause, of course, seems '
                               'reasonable — which in the middle answer removes the force of '
                               'every claim it makes.']}},
 'w3': {'sub': 'What the formalism does not say',
        'prof': 'Professor Lindqvist',
        'question': 'A national research council must divide a fixed budget between two '
                    'programmes. The first builds a quantum computer: hard engineering, clear '
                    'milestones, applications claimed within a decade. The second tests collapse '
                    'models, which are the only interpretations of quantum theory that predict '
                    'anything different from the standard formalism, by looking for a tiny '
                    'heating effect in isolated masses. Supporters of the second say it is the '
                    'only experimental route into the measurement problem. Opponents say it is '
                    'philosophy with a cryostat. How should the budget be divided?',
        'posts': [('Hyeon',
                   'w',
                   'Fund the computer. The collapse experiments have been narrowing a parameter '
                   'for twenty years and have found nothing, which is exactly what you would '
                   'expect if there is nothing there.'),
                  ('Mireille',
                   'm',
                   'Finding nothing is a result. Every null has pushed the models into a corner, '
                   'and a corner is where theories die. Hyeon’s argument would have stopped the '
                   'Bell experiments in 1970.')],
        'skill': ('A question about funding an experiment on an interpretation',
                  ['Hyeon argues from the record of nulls; Mireille from what a null does to a '
                   'theory.',
                   'The passage says the Bell case turned a question of meaning into a '
                   'measurement, which is a concession to Mireille.',
                   'A strong answer distinguishes the testable interpretations from the rest.']),
        'starters': ['Hyeon is right that…, although it does not follow that…',
                     'The dispute is not about… but about…',
                     'It is worth being precise here about…',
                     'So the budget should…, with…'],
        'model': ['Hyeon is right that twenty years of nulls is a fact about the world and not '
                  'merely about the apparatus, and it does not follow that the programme is '
                  'philosophy. The dispute is not about whether interpretation is a scientific '
                  'question but about which interpretations make claims that an instrument can '
                  'reach. Most do not: the orthodox reading, the many-worlds reading and the '
                  'pilot-wave reading agree on every prediction, and no apparatus will ever '
                  'separate them. Collapse models are the exception, because they add a physical '
                  'process with a rate in it, and a rate is a number that can be bounded.',
                  'It is worth being precise here about what the nulls have achieved. They have '
                  'not shown that no collapse occurs; they have excluded the parameter ranges in '
                  'which it would occur fast enough to notice, and the region still open is the '
                  'region the models’ own authors proposed. Mireille is right that this is how '
                  'theories die, and she overstates the parallel with the Bell case, where the '
                  'decisive prediction was a violation of an inequality rather than the gradual '
                  'closing of a parameter space.',
                  'So the budget should go mostly to the computer, which has the milestones and '
                  'the engineering, with a standing minority share to the collapse programme on '
                  'an explicit condition: that each grant states in advance the region of '
                  'parameter space it will exclude and that the result is published whether or '
                  'not anything is found. That costs the council a fixed small sum and buys a '
                  'decisive answer within perhaps two decades, since a parameter space closed to '
                  'its last corner is a theory refuted and a programme that can honourably '
                  'stop.'],
        'model_words': 279},
 'w4': {'sub': 'What the formalism says',
        'skill': ('Heavy pre- and postmodification',
                  ['Two or three premodifiers before the head is the readable limit: a linear '
                   'deterministic equation.',
                   'Everything longer goes behind the head: an equation which is linear, '
                   'continuous and deterministic.',
                   'Keep the head word early and let the modifiers follow, so the reader knows '
                   'what is being described.']),
        'guided': [('Put the long modifier behind the head.',
                    ['an equation',
                     'which',
                     'is',
                     'linear',
                     'continuous',
                     'and',
                     'entirely',
                     'deterministic',
                     'governs',
                     'the evolution'],
                    'An equation which is linear, continuous and entirely deterministic governs '
                    'the evolution.'),
                   ('Postmodify with a participle.',
                    ['the superposition',
                     'produced',
                     'by',
                     'applying',
                     'the',
                     'first law',
                     'to',
                     'both',
                     'systems'],
                    'The superposition produced by applying the first law to both systems.'),
                   ('Use apposition after the head.',
                    ['the fifth rule',
                     'the',
                     'one',
                     'that',
                     'mentions',
                     'measurement',
                     'defines',
                     'no',
                     'such',
                     'operation'],
                    'The fifth rule, the one that mentions measurement, defines no such '
                    'operation.')],
        'exam': [('Keep two premodifiers and move the rest behind.',
                  ['a',
                   'celebrated',
                   'series',
                   'of',
                   'experiments',
                   'performed',
                   'in',
                   'the early',
                   'eighties'],
                  'A celebrated series of experiments performed in the early eighties.'),
                 ('Postmodify with a relative clause.',
                  ['the inequality',
                   'that',
                   'any',
                   'local',
                   'theory',
                   'must',
                   'satisfy',
                   'is',
                   'violated'],
                  'The inequality that any local theory must satisfy is violated.'),
                 ('Put the heavy phrase last.',
                  ['the formalism',
                   'assigns',
                   'a',
                   'wavefunction',
                   'to',
                   'every',
                   'system',
                   'that',
                   'it',
                   'describes'],
                  'The formalism assigns a wavefunction to every system that it describes.'),
                 ('Postmodify a head with two prepositional phrases.',
                  ['the agreement',
                   'between',
                   'theory',
                   'and',
                   'experiment',
                   'to',
                   'twelve',
                   'significant',
                   'figures'],
                  'The agreement between theory and experiment to twelve significant figures.'),
                 ('Use a reduced relative clause.',
                  ['the',
                   'detector',
                   'settings',
                   'altered',
                   'while',
                   'the',
                   'particles',
                   'were',
                   'in',
                   'flight'],
                  'The detector settings altered while the particles were in flight.')]},
 'w5': {'sub': 'What the formalism does not say',
        'prof': 'Professor Abeywickrama',
        'question': 'A physics department is revising its first-year syllabus. One proposal '
                    'teaches the formalism alone in the first year, with the measurement problem '
                    'postponed to a third-year option. The other introduces the measurement '
                    'problem in the first term, on the ground that students otherwise acquire a '
                    'picture they must later unlearn. Supporters of postponement say a student '
                    'who cannot yet solve the equation cannot evaluate an interpretation. Which '
                    'syllabus should the department adopt?',
        'posts': [('Rahel',
                   'w',
                   'Postpone it. A first-year student has no way of telling a serious '
                   'interpretive argument from a magazine article, and the only defence against '
                   'that is the mathematics.'),
                  ('Dmitri',
                   'm',
                   'Postpone it and you teach the collapse rule as though it were on the same '
                   'footing as the other four. Students do not arrive without a picture; they '
                   'arrive with a bad one, and the first term is when it sets.')],
        'skill': ('A question about when to teach a difficulty',
                  ['Rahel argues from what a student can evaluate; Dmitri from what a student '
                   'will assume.',
                   'The passages say the fifth rule is unlike the other four and that the word '
                   'it uses is undefined.',
                   'A strong answer separates stating the problem from adjudicating it.']),
        'starters': ['Rahel is right that…, although it does not follow that…',
                     'The dispute is not about… but about…',
                     'It is worth being precise here about…',
                     'So the first year should…, leaving…'],
        'model': ['Rahel is right that a student who cannot yet solve the equation is in no '
                  'position to adjudicate between interpretations, and it does not follow that '
                  'the problem should go unmentioned. The dispute is not about whether '
                  'first-year students should evaluate the interpretive literature but about '
                  'whether they should be told that it exists and why. Those are different '
                  'undertakings with different prerequisites, and the proposal to postpone runs '
                  'them together.',
                  'It is worth being precise here about what a first-year course actually does. '
                  'It presents five rules, four of which describe an undisturbed system and the '
                  'fifth of which invokes an operation the formalism nowhere defines. A syllabus '
                  'that presents all five in the same voice has not avoided interpretation; it '
                  'has taught one, namely that collapse is a physical process on the same '
                  'footing as the Schrödinger evolution, and Dmitri is right that this is the '
                  'version students arrive with and the version they must later unlearn.',
                  'So the first year should state the problem and decline to settle it: one '
                  'lecture, placed where the collapse rule is introduced, which says that the '
                  'rule is of a different kind from the other four, that the word measurement is '
                  'undefined in the formalism, that several reconstructions exist, and that the '
                  'course will not be choosing between them. That leaves the adjudication to the '
                  'third-year option, where the mathematics makes it possible, and it costs an '
                  'hour. A student who has been told honestly that a question is open has '
                  'acquired something a magazine article cannot dislodge, and a student who has '
                  'not been told will meet the same question in print within the year and have '
                  'nothing to set against it. The hour is cheap at the price.'],
        'model_words': 289},
 'sp': [{'sub': 'Explaining physics to a non-physicist',
         'focus': 'rejecting three analogies for three reasons',
         'skill': ('Each of them is misleading in a different direction',
                   ['Give the analogy, then the error it produces, in one sentence each.',
                    'Keep the three parallel, so the pattern is audible.',
                    'Then give the sentence you will stand behind.']),
         'repeat': ['Your reader will invent a medium.',
                    'Probability in ordinary speech is about ignorance.',
                    'The coin has landed in your imagination.',
                    'The theory says there is no answer waiting.',
                    'That is the picture the experiments rule out.',
                    'A wave in English is a wave in something.',
                    'The theory tells you the odds that a detector will click, and those odds '
                    'are the most precisely confirmed numbers in science.'],
         'theme': 'explaining something that resists explanation',
         'qs': ['Tell me about something you have had to explain without a good analogy. How did '
                'you manage?',
                'Some people say if you cannot explain it simply you do not understand it. How '
                'far would you agree?',
                'How would you explain to a friend the difference between unknown and undecided?',
                'Finally, describe a word from science that is misused in advertising.'],
         'model': [(2,
                    'It is a good test of an explanation and a poor test of understanding. Some '
                    'things have no simple true version, and the honest response is to give the '
                    'limits of the simple one.'),
                   (3,
                    'Unknown means the answer exists and I have not seen it. Undecided means '
                    'there is no answer yet, and the difference is not a philosophical nicety: '
                    'the two predict different things.')],
         'selfcheck': ['I gave each analogy its own error',
                       'I kept the three parallel',
                       'I ended with the sentence I will stand behind']},
        {'sub': 'What the formalism says',
         'focus': 'explaining why you nearly refused',
         'skill': ('I want to set out why I nearly refused this',
                   ['Give the decision last, not first.',
                    'Say what your first reaction was, and that it was wrong.',
                    'Then name the objection that survives.']),
         'repeat': ['Nobody is extending anything.',
                    'No helium is consumed.',
                    'My first reaction was wrong.',
                    'The stated reason has evaporated.',
                    'My first reaction was that the notice forbids this.',
                    'The thermal cycle is the scarce thing, not the money.',
                    'The hours end when the warm-up begins and not when your measurement is '
                    'finished.'],
         'theme': 'changing your mind about a rule',
         'qs': ['Tell me about a rule you applied and then reconsidered. What changed your mind?',
                'Some people say rules should be followed as written, whatever the reason behind '
                'them. How far would you agree?',
                'How would you explain to a friend why a shared machine is booked in long '
                'blocks?',
                'Finally, describe a scarce resource where the scarce part is not the money.'],
         'model': [(2,
                    'Followed as written and read with the reason beside them. A rule whose '
                    'stated purpose has disappeared in a particular case is not being followed '
                    'when you apply it; it is being recited.'),
                   (3,
                    'Because the setting up costs more than the work. Thirty hours and four '
                    'hundred pounds of helium to get cold, and then a single measurement takes '
                    'twenty minutes, so the cold is what you are rationing.')],
         'selfcheck': ['I gave the decision last',
                       'I admitted my first reaction was wrong',
                       'I named the objection that survives']},
        {'sub': 'What the formalism does not say',
         'focus': 'stating what a famous result does not show',
         'skill': ('Now the careful part',
                   ['Give the result, then announce the limits.',
                    'Deny the two popular over-readings in turn.',
                    'Then say what the result did kill.']),
         'repeat': ['Now the careful part.',
                    'Nothing goes faster than light.',
                    'It does not pick an interpretation.',
                    'It kills a family of pictures.',
                    'Violated, every time, by the predicted margin.',
                    'You cannot send a message with these correlations.',
                    'Every picture in which the particles left home with their answers in their '
                    'pockets is gone.'],
         'theme': 'a result that is smaller and better than its reputation',
         'qs': ['Tell me about a famous result that is usually misdescribed. What is the actual '
                'claim?',
                'Some people say a question that cannot be tested is not worth asking. How far '
                'would you agree?',
                'How would you explain to a friend what the Bell experiments ruled out?',
                'Finally, describe an argument you have heard that could be turned into a '
                'measurement.'],
         'model': [(2,
                    'Not worth settling, perhaps. Worth asking, certainly, because the Bell case '
                    'began as an untestable question and somebody found the test thirty years '
                    'later.'),
                   (3,
                    'They ruled out every theory in which the two particles carry their answers '
                    'with them and nothing acts across the gap. That is a large family and it '
                    'included the picture most physicists would have preferred.')],
         'selfcheck': ['I gave the result before the limits',
                       'I denied both over-readings',
                       'I said what the result did kill']},
        {'sub': 'What the formalism says',
         'focus': 'listing a formalism and then counting it',
         'skill': ('Now count. Rules one to four mention nobody.',
                   ['Give the rules as short numbered clauses.',
                    'Then the count, and the asymmetry it exposes.',
                    'Then the precision that defends the whole thing.']),
         'repeat': ['A system gets a wavefunction.',
                    'Every measurable quantity gets an operation.',
                    'Left alone, the wavefunction develops deterministically.',
                    'On measurement, the wavefunction is replaced.',
                    'Rules one to four mention nobody.',
                    'The odds come from the wavefunction by a fixed recipe.',
                    'The word measurement appears in none of the equations and is defined '
                    'nowhere in the theory.'],
         'theme': 'stating something precisely enough to criticise it',
         'qs': ['Tell me about something you had to set out exactly before you could argue about '
                'it. How did you set it out?',
                'Some people say a theory that predicts everything needs no explanation. How far '
                'would you agree?',
                'How would you explain to a friend what it means for a theory to be complete?',
                'Finally, describe a rule in your own field that nobody defines.'],
         'model': [(2,
                    'Prediction is what a theory is for and it is not all we want from one. A '
                    'table of odds that works perfectly and says nothing about what is happening '
                    'is a strange thing to call an understanding of nature.'),
                   (3,
                    'Complete means there is nothing further to find out: the description it '
                    'gives is the whole description. The alternative is that the odds are '
                    'standing in for details we have not reached yet.')],
         'selfcheck': ['I gave the rules as short clauses',
                       'I made the count explicit',
                       'I ended with the precision that defends it']},
        {'sub': 'What the formalism does not say',
         'focus': 'stating an objection as an inconsistency',
         'skill': ('Strangeness is not an objection',
                   ['Deny the weak version of your own objection first.',
                    'Then put the strong one: two laws, no rule for when each applies.',
                    'Then the consequence, in one concrete image.']),
         'repeat': ['Strangeness is not an objection.',
                    'Nothing tells you when each one applies.',
                    'A measuring instrument is made of atoms.',
                    'Nobody has ever seen a superposed pointer.',
                    'There are two laws of motion of different kinds.',
                    'What you get out is a superposition of pointer positions.',
                    'The first three agree on every experiment anybody has done or proposed, '
                    'which is underdetermination rather than a shortage of data.'],
         'theme': 'objecting to a theory on its own terms',
         'qs': ['Tell me about a criticism you made from inside a position rather than outside '
                'it. What was the difference?',
                'Some people say a theory that works does not need to be consistent. How far '
                'would you agree?',
                'How would you explain to a friend why two theories can agree on every '
                'experiment?',
                'Finally, describe a case where more data would not settle a question.'],
         'model': [(2,
                    'Working is the hard part and consistency is the cheap part, and a theory '
                    'with two laws and no rule for choosing between them is not yet finished, '
                    'however well it predicts.'),
                   (3,
                    'Because they can differ only in what they say is going on where nothing can '
                    'be measured. If every prediction is the same, no experiment distinguishes '
                    'them, and the choice is made on other grounds or not at all.')],
         'selfcheck': ['I denied the weak version first',
                       'I stated the inconsistency plainly',
                       'I ended with one concrete image']}],
 'gram': {'title': 'Heavy pre- and postmodification',
          'headers': ['Form', 'Where the weight sits'],
          'rows': [('a linear deterministic equation', 'two premodifiers, which is readable'),
                   ('an equation which is linear, continuous and deterministic',
                    'the same content, moved behind the head'),
                   ('the superposition produced by the first law',
                    'a participle postmodifying the head'),
                   ('the fifth rule, the one that mentions measurement',
                    'apposition, which renames the head'),
                   ('the inequality that any local theory must satisfy',
                    'a relative clause, restrictive'),
                   ('the detector settings altered while in flight', 'a reduced relative clause'),
                   ('the agreement between theory and experiment to twelve figures',
                    'two prepositional phrases in series')],
          'notes': ['English tolerates two or three premodifiers before a head noun and no more. '
                    'A linear deterministic equation is ordinary prose; a linear continuous '
                    'deterministic first-order evolution equation is a sentence the reader has '
                    'to take apart with a pencil. Everything beyond the limit goes behind the '
                    'head, where a relative clause or a participle can carry any amount of '
                    'material.',
                    'The reader needs the head noun early. In the superposition produced by '
                    'applying the first law to the apparatus and the system together, the '
                    'subject is known after three words and the rest is detail. In the '
                    'produced-by-applying-the-first-law superposition the reader holds four '
                    'modifiers with nothing to attach them to, which is the commonest fault in '
                    'academic writing at this level and the easiest to repair.',
                    'Apposition is the cheapest form of postmodification and the most underused: '
                    'the fifth rule, the one that mentions measurement, needs no relative '
                    'pronoun and no verb. Use it where the second phrase renames rather than '
                    'restricts, and punctuate it with commas on both sides.'],
          'watch': 'Do not stack nouns as premodifiers where a preposition would do the work. A '
                   'detector setting alteration procedure is four nouns in a row; the procedure '
                   'for altering the detector settings is readable, and one word longer.',
          'ex': [('Move the heavy modifier behind the head.',
                  ['A linear, continuous and entirely deterministic equation governs the '
                   'evolution.',
                   'The produced-by-the-first-law superposition is never observed.',
                   'A performed-in-the-early-eighties series of experiments closed the loophole.',
                   'The must-be-satisfied-by-any-local-theory inequality is violated.',
                   'A detector setting alteration procedure was introduced.',
                   'The twelve-significant-figure theory and experiment agreement is unmatched.'],
                  ['An equation which is linear, continuous and entirely deterministic governs '
                   'the evolution.',
                   'The superposition produced by the first law is never observed.',
                   'A series of experiments performed in the early eighties closed the loophole.',
                   'The inequality that any local theory must satisfy is violated.',
                   'A procedure for altering the detector settings was introduced.',
                   'The agreement between theory and experiment to twelve significant figures is '
                   'unmatched.']),
                 ('Premodify or postmodify?',
                  ['a ______ equation (linear and deterministic)',
                   'an equation ______ is linear, continuous and deterministic',
                   'the fifth rule, ______ one that mentions measurement',
                   'the settings ______ while the particles were in flight'],
                  ['linear deterministic', 'which', 'the', 'altered']),
                 ('Correct the overloaded noun phrase.',
                  ['The detector setting alteration procedure failed.',
                   'The produced-by-applying-the-first-law superposition is unobserved.',
                   'A twelve significant figure theory experiment agreement.',
                   'The must-be-satisfied inequality is violated.'],
                  ['The procedure for altering the detector settings failed.',
                   'The superposition produced by applying the first law is unobserved.',
                   'An agreement between theory and experiment to twelve significant figures.',
                   'The inequality that must be satisfied is violated.'])],
          'bas': 'Build a Sentence in this unit asks what an experiment ruled out. Several of '
                 'the answers carry a long modifier, and in every case it goes behind the head '
                 'noun. Put the head early and let the weight follow it.'},
 'fault': {'text': 'The detector setting alteration procedure failed. The '
                   'produced-by-applying-the-first-law superposition is unobserved. A twelve '
                   'significant figure theory experiment agreement was reported. The '
                   'must-be-satisfied inequality is violated. The fifth rule the one that '
                   'mentions measurement defines nothing. Do you know what did the experiment '
                   'rule out?',
           'faults': [('The detector setting alteration procedure',
                       'The procedure for altering the detector settings',
                       'Four nouns stacked as modifiers; a preposition carries the relation and '
                       'the phrase becomes readable.'),
                      ('The produced-by-applying-the-first-law superposition',
                       'The superposition produced by applying the first law',
                       'The head noun must come before a modifier of that length, or the reader '
                       'has nothing to attach it to.'),
                      ('A twelve significant figure theory experiment agreement',
                       'An agreement between theory and experiment to twelve significant figures',
                       'A premodifier of five words in front of the head is beyond what English '
                       'will carry.'),
                      ('The must-be-satisfied inequality',
                       'The inequality that must be satisfied',
                       'A clause cannot be hyphenated into a premodifier; it goes behind the '
                       'head as a relative clause.'),
                      ('The fifth rule the one that mentions measurement defines nothing',
                       'The fifth rule, the one that mentions measurement, defines nothing',
                       'An appositive phrase takes a comma on both sides, or the sentence reads '
                       'as a garden path.'),
                      ('what did the experiment rule out',
                       'what the experiment ruled out',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('a state that is a combination of other states', 'superposition'),
                   ('the loss of quantum behaviour through contact with the world',
                    'decoherence'),
                   ('a joint state in which neither part has its own', 'entanglement'),
                   ('a state with a definite value of one observable', 'eigenstate'),
                   ('the object the formalism assigns to a system', 'wavefunction'),
                   ('the rule that nothing acts across a distance at once', 'locality'),
                   ('the particle whose magnetic moment tests the theory', 'electron'),
                   ('fixing the future completely from the present', 'deterministic'),
                   ('the orientation a photon can be measured along', 'polarisation'),
                   ('when the evidence cannot choose between theories', 'underdetermination'),
                   ('treating a theory as a tool, not a picture', 'instrumentalism'),
                   ('assuming as little as the work allows', 'parsimonious')],
         'gram': [('An equation ______ is linear and deterministic governs it.', 'which'),
                  ('The superposition ______ by the first law is unobserved.', 'produced'),
                  ('The inequality ______ any local theory must satisfy is violated.', 'that'),
                  ('The fifth rule, the ______ that mentions measurement, defines nothing.',
                   'one'),
                  ('A procedure ______ altering the detector settings was introduced.', 'for'),
                  ('The settings were ______ while the particles were in flight.', 'altered'),
                  ('The agreement ______ theory and experiment is unmatched.', 'between'),
                  ('Do you know what the experiment ______ out?', 'ruled')],
         'mini': [('Four of the five rules of the formalism',
                   ('mention an observer',
                    'describe a system with no observer in it',
                    'are probabilistic',
                    'are empirical'),
                   1,
                   'Only the fifth mentions measurement, and it defines no such operation.'),
                  ('The measurement problem is the problem that',
                   ('the theory is strange',
                    'two laws of different kinds apply with no rule for when each does',
                    'probabilities cannot be measured',
                    'detectors are imperfect'),
                   1,
                   'Applying the first law to the apparatus yields a superposition of pointers.'),
                  ('Decoherence explains',
                   ('why one outcome occurs',
                    'why superpositions of large objects are never observed',
                    'the rate of collapse',
                    'the Born rule'),
                   1,
                   'And it is silent on why one outcome occurs rather than another.'),
                  ('The Bell inequality rests on the assumptions that',
                   ('the theory is complete and linear',
                    'each particle carries definite properties and nothing acts faster than '
                    'light',
                    'measurement is undefined',
                    'detectors are efficient'),
                   1,
                   'The violation defeats the two assumptions taken together.'),
                  ('The violation of the inequality shows that',
                   ('signals travel faster than light',
                    'one family of pictures is ruled out',
                    'the many-worlds reading is correct',
                    'the theory is incomplete'),
                   1,
                   'No interpretation is singled out and no message can be sent.'),
                  ('Collapse models differ from the other interpretations in that',
                   ('they are simpler',
                    'they alter the equation and so make different predictions',
                    'they keep locality',
                    'they abandon probability'),
                   1,
                   'A rate is a number, and a number can be bounded by experiment.')]},
 'tip': 'Write out the five rules from memory tonight, in five short sentences, and then mark '
        'the one that mentions an observer. That mark is the whole of cycle 5 and most of the '
        'philosophy of physics, and you will have found it yourself rather than been told it, '
        'which is the difference this volume is built on.'}

