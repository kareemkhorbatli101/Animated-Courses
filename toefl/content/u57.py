# -*- coding: utf-8 -*-
"""Unit 57 - Vagueness and Meaning.

Cycle 3 is the reclassification of Pluto in 2006: the detection
of Eris forced a choice between an indefinite number of planets
and the exclusion of the familiar one, the union voted three
conditions in Prague, and Pluto fails only the third, which is
itself a matter of degree. The passage separates the stipulation
from the discovery - Pluto did not alter in 2006; a word did.

Cycle 4 is the sorites and its three answers. The derivation is
valid, so a premise must go or the logic must, and the second
premise is exactly what makes a vague predicate usable, since a
word turning on a single grain could not be learnt.
Epistemicism pays with an unknowable fact about grains;
supervaluationism pays with a vagueness of the second order, the
admissible sharpenings having no sharp boundary either; a degree
theory pays by attaching a precise figure to a sentence whose
character is its want of precision.

Cycle 5 grants the paradox and denies that the choice among the
three has any consequence for an institution, which receives the
same instruction from all of them, namely none. The real choice
is between a sharp cutoff and a standard committed to judgement,
and it concerns the distribution of authority rather than the
constitution of truth. The taper is a mitigation and not a
dissolution, since it has two endpoints; and a conviction, a
right of residence, an age of criminal responsibility and a
licence admit of no taper at all, so the remedy there is
procedural - declare the stipulation, record the facts, publish
the distribution about the boundary."""

UNIT = {'n': 57,
 'vol': 6,
 'level': 'C1',
 'title': 'Vagueness and Meaning',
 'grammar': 'Scope ambiguity and its repair',
 'field': 'predicate, borderline, threshold case',
 'names': ('Pluto',
           'Eris',
           'Prague',
           'Jupiter',
           'Neptune',
           'Szabo',
           'Margit',
           'Dunmorrow',
           'Delphine',
           'Achebe',
           'Benedikta',
           'Anselm',
           'Lindqvist',
           'Tomasz',
           'Ngozi',
           'Oyelaran'),
 'opener_line': 'This unit is about what happens where a word runs out. Cycle 3 watches a '
                'committee give the word planet an edge it had never had. Cycle 4 sets out the '
                'argument that shows why no ordinary word has one, and prices the three standard '
                'answers to it. Cycle 5 then takes the question away from philosophy, on the '
                'ground that an office with a borderline application to decide by Thursday gets '
                'the same instruction from all three answers, namely none.',
 'subs': ['When a word runs out', 'Why the sorites bites', 'Whether the answer matters'],
 'icons': ['brief', 'brain', 'chart'],
 'acad': [('severally', 'each one separately, not as a group'),
          ('collectively', 'taken all together as one'),
          ('individually', 'one at a time, considered alone'),
          ('narrowly', 'in the strict sense of the word'),
          ('broadly', 'in the loose sense of the word'),
          ('precisely', 'with the boundaries drawn exactly'),
          ('vaguely', 'with no boundary anybody can draw'),
          ('determinate', 'with a settled answer either way'),
          ('indeterminate', 'with no settled answer either way'),
          ('stipulatively', 'by a definition laid down for the purpose'),
          ('paradigmatically', 'as the clearest possible example'),
          ('ambiguously', 'in a way open to two readings'),
          ('equivocally', 'using one word in two senses at once'),
          ('univocally', 'in one sense only throughout')],
 'fieldwords': [('predicate', 'what a sentence says of its subject'),
                ('vagueness', 'the absence of a sharp boundary'),
                ('borderline', 'a case the word neither fits nor fails'),
                ('sorites', 'the argument that runs by single steps'),
                ('heap', 'the ancient example: how many grains make one'),
                ('penumbra', 'the band of cases around the clear ones'),
                ('bivalence', 'the rule that every statement is true or false'),
                ('epistemicism', 'the view that the line exists and is unknown'),
                ('supervaluationism', 'truth on every admissible sharpening'),
                ('sharpening', 'one way of drawing the line precisely'),
                ('paradox', 'an argument from true premises to a false end'),
                ('cutoff', 'the point at which a rule changes its answer'),
                ('taper', 'a gradual change instead of a step'),
                ('stipulation', 'a definition imposed rather than found'),
                ('arbitrariness', 'the want of any reason for this line rather than that'),
                ('cliff', 'the loss that falls on one side of a cutoff')],
 'collocs': [('to draw the line', 'to decide where a class ends'),
             ('a hard case', 'one the rule was not written for'),
             ('a slippery slope', 'a step that commits you to the next'),
             ('for the sake of argument', 'granting something provisionally'),
             ('to all intents and purposes', 'in every way that matters'),
             ('up to a point', 'granting part of a claim'),
             ('in the strict sense', 'taking the word narrowly'),
             ('in round terms', 'approximately, without the detail'),
             ('neither one thing nor the other', 'falling between two classes'),
             ('the thin end of the wedge', 'a small step with a large sequel')],
 'stance': [('the word simply runs out', 'marking a limit of language'),
            ('there is no fact of the matter', 'denying a settled answer'),
            ('a line has to be drawn somewhere', 'conceding a necessity'),
            ('that is a stipulation and not a discovery', 'naming an imposition'),
            ('nothing turns on the exact figure', 'setting precision aside')],
 'nuance': [('vague / ambiguous', 'no boundary / two readings'),
            ('borderline / unknown', 'no answer / an answer nobody has'),
            ('stipulate / discover', 'laid down / found out')],
 'candos': ['I can repair a sentence whose scope can be read two ways.',
            'I can explain why a chain of small steps reaches a false end.',
            'I can state what each answer to the paradox costs.',
            'I can distinguish a vague word from an ambiguous one.',
            'I can say what a sharp cut-off does to the cases beside it.',
            'I can defend a boundary as reviewable rather than as right.'],
 'vocab_talk': ['Where does a hill become a mountain in your language?',
                'What rule in your country turns on a single figure?',
                'Describe a case that your own language has no word for.',
                'Who should decide a case that falls between two rules?'],
 'again': ['threshold',
           'criterion',
           'discretion',
           'indeterminacy',
           'tolerance',
           'gradient',
           'extension',
           'ambiguity'],
 'family': ('stipulate',
            [('stipulation', 'noun', 'the definition is a stipulation'),
             ('stipulated', 'adjective', 'the stipulated figure is eight hundred'),
             ('stipulative',
              'adjective',
              'a stipulative definition settles nothing about the world')]),
 'r1': {'sub': 'When a word runs out',
        'skill': ('Scope: all, only, not, and the quantity’s place',
                  ['All the applications were not assessed has two readings; put the quantity '
                   'where it belongs.',
                   'Only attaches to whatever follows it, so moving it moves the meaning.',
                   'A negative over and leaves the reader guessing: use neither … nor.']),
        'guided_text': 'A sentence can be perfectly grammatical and still have two readings, and '
                       'the commonest cause is the ---pe of a little word. All the applications '
                       'were not assessed may mean that none was assessed or that some were not, '
                       'and the two are not the same -----aint. The repair is to put the '
                       'quantity where it belongs: none of the applications was assessed, or '
                       'some of the applications were not assessed. Only is worse, because it '
                       'attaches to whatever ----ows it, so the officer may only reduce the '
                       'figure and the officer may reduce only the figure are different --wers. '
                       'Write the sentence twice and you will see which one you ---nt.',
        'guided': ['sco', 'compl', 'foll', 'po', 'mea'],
        'guided_hint': '---pe is scope — the slot follows the, so it needs a noun.',
        'exam_text': 'The second family of scope trouble is the reach of a negative over a '
                     '-------tion. He did not read the report and sign it leaves the reader '
                     'guessing: he may have done neither, or he may have read it without '
                     '----ing. English repairs that with a second negative, he neither read the '
                     'report nor signed it, or with an explicit ----ption, he signed the report '
                     'without having read it. The third family is the ---al, where a negative '
                     'may fall inside or outside. You may not withdraw means that withdrawal is '
                     '------den; you need not withdraw means that it is not ------ed; and the '
                     'two are confused so often in official prose that some countries now draft '
                     'the sentences -------ely by rule. In an examination the device that earns '
                     'most is the -----erate second version: having written an ambiguous '
                     'sentence, rewrite it in the reading you intend and leave the clearer of '
                     'the two -----ing. It costs one extra sentence and it removes the only '
                     '------ity an examiner can penalise.',
        'exam': ['conjunc',
                 'sign',
                 'exce',
                 'mod',
                 'forbid',
                 'requir',
                 'separat',
                 'delib',
                 'stand',
                 'ambigu']},
 'r2': {'sub': 'What a cut-off costs',
        'skill': ('Reading a scheme of criteria against a caseworker’s objection',
                  ['A scheme states a figure and, by implication, what happens beside it.',
                   'The objection usually accepts the figure and attacks the step.',
                   'A question about the reply wants the arithmetic, not the sentiment.']),
        'docs': [('notice',
                  'Dunmorrow Council · crisis payment scheme, criteria from April 2035',
                  ['# Who may apply',
                   'Any resident facing an immediate loss of heat, food or shelter, once in any '
                   'six months.',
                   '# The capital test',
                   '* An award may be made where the applicant holds capital of no more than '
                   '£1,000.',
                   '* Capital above £1,000 disqualifies the application in full.',
                   '# The award',
                   '* Up to £700, paid within two working days, no part of it recoverable.',
                   '# Review',
                   '* An applicant may ask for one review by a different officer, within '
                   'fourteen days.',
                   '# Publication',
                   '* The number of awards, refusals and reviews is published each quarter.'],
                  'notice'),
                 ('email',
                  'm.szabo@dunmorrow.gov.uk',
                  'crisisscheme@dunmorrow.gov.uk',
                  '07/02/2035',
                  'April criteria — the capital test is a cliff and a taper costs us almost '
                  'nothing',
                  ['Dear colleagues,',
                   '',
                   'The scheme is a great improvement on the one it replaces, and the',
                   'two-day payment and the second-officer review are both right. I have',
                   'one objection, and it is arithmetical rather than philosophical.',
                   '',
                   'The capital test is a cliff. At £1,000 an applicant may receive',
                   '£700. At £1,001 she receives nothing. The difference in her',
                   'circumstances is one pound and the difference in our treatment of her',
                   'is seven hundred, which no caseworker will be able to explain to her',
                   'and which several of us will quietly avoid by not asking the',
                   'question.',
                   '',
                   'I am not arguing for a higher figure, because a higher figure has a',
                   'cliff at the new place. What I am asking for is a taper: full award',
                   'up to £600, reduced by one pound for every two pounds of capital',
                   'above that, extinguished at £2,000. On last year’s caseload that',
                   'costs an additional £18,000 across 412 awards, which is under two',
                   'per cent of the scheme.',
                   '',
                   'Margit Szabo, Senior Caseworker'])],
        'guided': [('Who may apply to the scheme?',
                    ('Any resident, at any time',
                     'Any resident facing an immediate loss of heat, food or shelter, once in '
                     'six months',
                     'Only residents with no capital',
                     'Only residents referred by an officer'),
                    1,
                    'The frequency limit is part of the eligibility.'),
                   ('What is the capital test?',
                    ('No capital at all',
                     'Capital of no more than a thousand pounds',
                     'Capital of no more than two thousand pounds',
                     'There is no capital test'),
                    1,
                    'Capital above that disqualifies the application in full.'),
                   ('What is the award?',
                    ('Up to seven hundred pounds, paid within two working days, not recoverable',
                     'A loan of seven hundred pounds',
                     'Up to a thousand pounds over six months',
                     'A payment in kind'),
                    0,
                    'No part of it is recoverable from the applicant afterwards.'),
                   ('What review is available?',
                    ('An appeal to a tribunal',
                     'One review by a different officer, within fourteen days',
                     'An annual review of the criteria',
                     'None'),
                    1,
                    'By a different officer, which is the point of the clause.')],
        'exam': [('What does Margit Szabo say about the scheme?',
                  ('It is worse than the one it replaces',
                   'It is a great improvement, and the two-day payment and the second-officer '
                   'review are right',
                   'It should be withdrawn',
                   'It is too generous'),
                  1,
                  'Her objection is confined to one test.'),
                 ('How does she describe her objection?',
                  ('Philosophical',
                   'Arithmetical rather than philosophical',
                   'A matter of principle',
                   'A matter of sentiment'),
                  1,
                  'Which is how she expects it to be answered.'),
                 ('What happens at a thousand and one pounds?',
                  ('A reduced award',
                   'Nothing at all is received',
                   'A referral to a different scheme',
                   'A review'),
                  1,
                  'A difference of one pound against a difference of seven hundred.'),
                 ('What does she say several caseworkers will do?',
                  ('Refuse the applications',
                   'Quietly avoid the question by not asking it',
                   'Refer the cases upward',
                   'Resign'),
                  1,
                  'Because the difference cannot be explained to the applicant.'),
                 ('Why does she not argue for a higher figure?',
                  ('It would cost too much',
                   'A higher figure has a cliff at the new place',
                   'The council would refuse',
                   'The figure is set nationally'),
                  1,
                  'Which is the argument against raising a cut-off rather than replacing it.'),
                 ('What taper does she propose?',
                  ('Full award to a thousand, then nothing',
                   'Full award to six hundred, reduced by a pound for every two above, '
                   'extinguished at two thousand',
                   'A flat award to everybody',
                   'A taper beginning at two thousand'),
                  1,
                  'Three figures, which is what makes it a drafting proposal.'),
                 ('What does the taper cost?',
                  ('Nothing at all',
                   'About a tenth of the scheme',
                   'An additional eighteen thousand pounds across 412 awards',
                   'More than the council can find'),
                  2,
                  'Under two per cent of the scheme, on last year’s caseload.')]},
 'r3': {'sub': 'The day a word changed',
        'title': 'Pluto Did Not Alter in 2006',
        'words': 294,
        'skill': ('Reading a classification settled by a vote',
                  ['The discovery that forced the choice comes first.',
                   'Then the three conditions, and which of them is sharp.',
                   'A question about the ending wants what the vote settled.']),
        'paras': ['Pluto was identified in 1930 and counted as the ninth planet for seventy-six '
                  'years, a classification nobody troubled to defend because nothing turned upon '
                  'it. Its demotion was forced by discovery rather than by argument: the '
                  'detection of Eris in 2005, a body of comparable diameter and greater mass in '
                  'the same remote population, presented astronomy with a choice between the '
                  'admission of an indefinite number of further planets and the exclusion of the '
                  'one everybody had grown up with. The International Astronomical Union voted '
                  'in Prague the following year, and the vote produced a definition rather than '
                  'a finding.',
                  'Three conditions were imposed. A planet orbits the Sun; it possesses '
                  'sufficient mass for its own gravity to have drawn it into a nearly spherical '
                  'shape; and it has cleared the neighbourhood of its orbit of comparable '
                  'bodies. Pluto satisfies the first two conditions and fails the third, its '
                  'orbital region containing a great quantity of similar material, and the '
                  'category of dwarf planet was created to receive it. The first two conditions '
                  'are determinate to a close approximation. The third is not, since clearance '
                  'admits of degrees, and the quantitative sharpenings subsequently proposed '
                  'differ among themselves about where the boundary falls.',
                  'What the episode exhibits is the structure of every boundary of this kind. '
                  'The underlying population of orbiting bodies runs without interruption from '
                  'dust to Jupiter, and there is no fact of the matter about where planethood '
                  'begins. A vote accordingly settles the question in the only sense in which it '
                  'admits of settlement, which is the institutional one: that is a stipulation '
                  'and not a discovery, and the resentment the decision provoked is '
                  'comprehensible only upon the supposition that somebody expected otherwise. '
                  'Pluto did not alter in 2006. A word did.'],
        'guided': [('How long had Pluto counted as the ninth planet?',
                    ('Seven years', 'Seventy-six years', 'A century', 'It never did'),
                    1,
                    'A classification nobody troubled to defend.'),
                   ('What forced the question?',
                    ('An argument among astronomers',
                     'The detection of Eris in 2005',
                     'A change in the definition of a planet',
                     'A vote in Prague'),
                    1,
                    'A body of comparable diameter and greater mass in the same population.'),
                   ('What was the choice astronomy faced?',
                    ('Between two definitions of mass',
                     'Between admitting an indefinite number of further planets and excluding '
                     'Pluto',
                     'Between Pluto and Eris',
                     'Between a vote and a measurement'),
                    1,
                    'Which is why the question could not simply be left open.'),
                   ('What did the vote produce?',
                    ('A finding', 'A definition', 'A measurement', 'A new category of star'),
                    1,
                    'Rather than a finding, in the writer’s phrase.')],
        'exam': [('Which condition does Pluto fail?',
                  ('That it orbits the Sun',
                   'That it is nearly spherical',
                   'That it has cleared the neighbourhood of its orbit',
                   'It fails none of them'),
                  2,
                  'Its orbital region contains a great quantity of similar material.'),
                 ('What was created to receive Pluto?',
                  ('A new class of star',
                   'The category of dwarf planet',
                   'A fourth condition',
                   'Nothing'),
                  1,
                  'Which is the institutional solution rather than the astronomical one.'),
                 ('What does the writer say about the first two conditions?',
                  ('They are vague',
                   'They are determinate to a close approximation',
                   'They are stipulations',
                   'They were added later'),
                  1,
                  'The third is the one that is not.'),
                 ('Why is the third condition not determinate?',
                  ('Nobody has measured it',
                   'Clearance admits of degrees',
                   'The instruments are too coarse',
                   'It was adopted by a narrow vote'),
                  1,
                  'And the quantitative sharpenings proposed differ among themselves.'),
                 ('What does the writer say runs without interruption?',
                  ('The orbit of Pluto',
                   'The population of orbiting bodies, from dust to Jupiter',
                   'The sequence of discoveries',
                   'The history of the definition'),
                  1,
                  'Which is why no boundary is given by the facts.'),
                 ('What does there is no fact of the matter mean here?',
                  ('That the data are missing',
                   'That no settled answer exists about where planethood begins',
                   'That astronomers disagree',
                   'That the vote was invalid'),
                  1,
                  'A continuum does not come divided.'),
                 ('What does the writer mean by a stipulation and not a discovery?',
                  ('That the vote was improper',
                   'That the definition was laid down rather than found out',
                   'That Eris was misidentified',
                   'That Pluto changed'),
                  1,
                  'Which is the distinction the whole passage turns on.'),
                 ('Why was the resentment comprehensible, on the writer’s account?',
                  ('Because the vote was close',
                   'Only upon the supposition that somebody expected a discovery',
                   'Because Pluto had been known since 1930',
                   'Because the category was new'),
                  1,
                  'The expectation was mistaken rather than the decision.'),
                 ('What is the force of the last two sentences?',
                  ('That the vote should be reversed',
                   'That the object was unchanged and only the word moved',
                   'That Eris should also be a planet',
                   'That definitions are unimportant'),
                  1,
                  'Pluto did not alter in 2006; a word did.')]},
 'r4': {'sub': 'Why the sorites bites',
        'title': 'One Grain at a Time',
        'words': 439,
        'skill': ('Reading a paradox and three answers to it',
                  ['The argument comes first, and its form is valid.',
                   'Then the premise that makes the word usable at all.',
                   'A question about the ending wants what each answer costs.']),
        'paras': ['The sorites is ancient and has never been disposed of. A single grain of '
                  'wheat is not a heap; the addition of one grain to something that is not a '
                  'heap leaves something that is not a heap; and it follows, by repeated '
                  'application of the second premise, that ten thousand grains are not a heap. '
                  'The derivation is valid, so either a premise is false or the logic requires '
                  'amendment, and no third possibility exists. The second premise is the '
                  'difficulty, because it is not an idle assumption but the feature that gives a '
                  'vague predicate its application: a word whose use altered with the addition '
                  'of a single grain, a single day or a single pound would defy acquisition and '
                  'would be of no use whatever, and every predicate of ordinary speech carries '
                  'that tolerance. The paradox is accordingly not a curiosity about heaps but a '
                  'condition of the whole vocabulary.',
                  'Three families of answer have been developed and each pays for the paradox in '
                  'a different currency. Epistemicism denies the second premise and holds that a '
                  'sharp boundary exists, some determinate number of grains constituting the '
                  'first heap, our ignorance of its position being precisely what vagueness '
                  'consists in; the price is a fact about grains that no observation could '
                  'reveal and no mechanism could have fixed. Supervaluationism retains the '
                  'premise and abandons bivalence: a borderline sentence is true upon some '
                  'admissible sharpenings and false upon others, and is accordingly neither true '
                  'nor false, truth receiving its definition as truth upon every sharpening. '
                  'Degree theories make truth a matter of gradation, so that a sentence about a '
                  'borderline heap may be true to six tenths and false to four.',
                  'Each of the three answers is embarrassed at the same point, and the '
                  'embarrassment is instructive. The cost of supervaluationism is a vagueness of '
                  'the second order, since the collection of admissible sharpenings has itself '
                  'no sharp boundary, and the apparatus accordingly reproduces the problem at a '
                  'higher level of description. The cost of a degree theory is the assignment '
                  'itself, a precise figure attached to a sentence whose whole character is its '
                  'want of precision, and no procedure for arriving at the figure has won '
                  'general agreement. The cost of epistemicism is the strangeness already noted, '
                  'which its defenders accept and treat as a revelation about language rather '
                  'than an objection to the position, a response that is consistent and '
                  'unsatisfying in equal measure. No one of the three has secured the '
                  'displacement of the others in half a century of argument, and the passage '
                  'that follows asks whether anything outside philosophy turns upon the '
                  'selection.'],
        'guided': [('What is the conclusion of the argument?',
                    ('That one grain is a heap',
                     'That ten thousand grains are not a heap',
                     'That a heap has no parts',
                     'That the premises are false'),
                    1,
                    'By ten thousand applications of the second premise.'),
                   ('What follows from the derivation being valid?',
                    ('That the conclusion is true',
                     'That either a premise is false or the logic requires amendment',
                     'That the argument may be ignored',
                     'That heaps do not exist'),
                    1,
                    'And no third possibility exists.'),
                   ('Why is the second premise not an idle assumption?',
                    ('It is supported by observation',
                     'It is the property that makes a vague predicate serviceable',
                     'It was granted by the ancients',
                     'It cannot be denied'),
                    1,
                    'A word altering with one grain would be unlearnable.')],
        'exam': [('What does epistemicism assert?',
                  ('That the premise is true',
                   'That a sharp boundary exists and our ignorance of its position is what '
                   'vagueness consists in',
                   'That truth comes in degrees',
                   'That bivalence fails'),
                  1,
                  'Some determinate number of grains constitutes the first heap.'),
                 ('What is the price of epistemicism?',
                  ('A loss of bivalence',
                   'A fact about grains that no observation could reveal',
                   'A precise degree of truth',
                   'A vagueness of the second order'),
                  1,
                  'And no mechanism could have fixed it.'),
                 ('What does supervaluationism abandon?',
                  ('The second premise',
                   'Bivalence',
                   'The validity of the argument',
                   'The notion of a sharpening'),
                  1,
                  'A borderline sentence is then neither true nor false.'),
                 ('How is truth defined on that view?',
                  ('As truth on some sharpening',
                   'As truth upon every admissible sharpening',
                   'As a degree between zero and one',
                   'As what an ordinary speaker would say'),
                  1,
                  'Which is what makes a borderline sentence indeterminate.'),
                 ('What is the cost of a degree theory?',
                  ('A vagueness of the second order',
                   'A precise number attached to a sentence whose character is its want of '
                   'precision',
                   'A loss of validity',
                   'A fact nobody could learn'),
                  1,
                  'And no procedure for arriving at the number has commanded assent.')]},
 'r5': {'sub': 'Whether the answer matters',
        'title': 'The Line and the Officer',
        'words': 443,
        'skill': ('Reading an objection that moves a question out of philosophy',
                  ['The objection grants the paradox and denies the practical consequence.',
                   'Then the choice it says is the real one.',
                   'The concession at the end is about what cannot be tapered.']),
        'paras': ['The sorites is granted in the objection that follows, and the significance of '
                  'the three answers is what comes under attack. Whichever of them is correct, '
                  'an institution confronting a borderline application receives the same '
                  'instruction from all three, namely none: epistemicism reports an answer not '
                  'to be had, supervaluationism no answer at all, a degree theory an answer in '
                  'part, and the official who must make an award or refuse one by Thursday is '
                  'left exactly where he stood. The objection is not that the three positions '
                  'are mistaken. It is that the question they answer is not the question an '
                  'institution has.',
                  'The question an institution has is a selection between two instruments, and '
                  'it concerns the distribution of authority rather than the constitution of '
                  'truth, which is why no semantics will settle it. A sharp cutoff abolishes '
                  'discretion, leaves every adjudication open to inspection, and produces pairs '
                  'of claimants whose entitlement differs by seven hundred pounds and whose '
                  'circumstances differ by one, standing together in the penumbra the cutoff was '
                  'obliged to cut. A standard committed to judgement preserves the '
                  'correspondence between rule and case and devolves the adjudication upon '
                  'whoever is on duty, with the attendant inconsistency. It carries a further '
                  'difficulty peculiar to itself: an appeal against a judgement has nothing '
                  'determinate to attack. Neither instrument is to be derived from the semantics '
                  'of a vague predicate, and the selection between them is a political question '
                  'in the costume of a logical one.',
                  'The taper is the engineering answer and is commonly mistaken for a '
                  'dissolution of the paradox rather than a mitigation of it. It is nothing of '
                  'the kind, since a taper has two endpoints and the objection recurs at each: '
                  'all that has altered is the magnitude of the injustice, a cliff of seven '
                  'hundred pounds having given way to a step of half a pound. The mitigation is '
                  'worth having and is no answer. The concession the objection is obliged to '
                  'make is that a great many adjudications of this kind admit of no taper '
                  'whatever, since a conviction, a right of residence, an age of criminal '
                  'responsibility and a licence are conferred entire or refused entire, and '
                  'there the arbitrariness survives every device of drafting. What remains '
                  'available is procedural, and the apparatus recommended is a requirement in '
                  'three parts: that the cutoff be declared a stipulation rather than a '
                  'discovery, that the facts deciding a borderline case be entered in the record '
                  'together with their justification, and that the distribution of outcomes '
                  'about the boundary be published annually, so that an adjudication nobody can '
                  'justify may at least be reviewable by somebody.'],
        'guided': [('What does the objection grant?',
                    ('The significance of the three answers',
                     'The paradox',
                     'The instruction it gives',
                     'Nothing at all'),
                    1,
                    'What it attacks is the significance of the three answers.'),
                   ('What instruction do all three theories give the institution?',
                    ('Draw a sharp line', 'None', 'Use discretion', 'Publish the distribution'),
                    1,
                    'An answer not to be had, no answer at all, or an answer in part.'),
                   ('What is the objection, precisely?',
                    ('That the theories are mistaken',
                     'That the question they answer is not the question an institution has',
                     'That the paradox is invalid',
                     'That officials are untrained'),
                    1,
                    'Which is why it concedes the paradox at the start.')],
        'exam': [('What does a sharp cut-off do?',
                  ('Preserves the fit between rule and case',
                   'Removes discretion, leaves decisions open to inspection, and produces '
                   'indefensible pairs',
                   'Transfers the decision to whoever is on duty',
                   'Dissolves the paradox'),
                  1,
                  'Seven hundred pounds against one pound.'),
                 ('What is the particular difficulty with a standard left to judgement?',
                  ('It is expensive',
                   'An appeal against a judgement has nothing determinate to attack',
                   'It cannot be published',
                   'It removes discretion'),
                  1,
                  'Besides the inconsistency between officers.'),
                 ('Why is a taper not a dissolution of the problem?',
                  ('It is too expensive',
                   'A taper has two endpoints and the objection recurs at each',
                   'It cannot be run',
                   'It requires discretion'),
                  1,
                  'What has altered is the magnitude of the injustice.'),
                 ('What has replaced the cliff, under a taper?',
                  ('Nothing at all',
                   'A step of half a pound',
                   'A judgement left to the officer',
                   'A second review'),
                  1,
                  'Worth having, and not an answer.'),
                 ('Which decisions admit of no taper?',
                  ('Crisis payments',
                   'A conviction, a right of residence, an age of criminal responsibility and a '
                   'licence',
                   'Medical treatments',
                   'Decisions about words'),
                  1,
                  'They are conferred entire or refused entire.')]},
 'l1': {'sub': 'When a word runs out',
        'caption': 'Two caseworkers over a file at the end of the day',
        'skill': ('Hearing somebody refuse to pretend a rule is clear',
                  ['The rule is read out and then shown to have a gap.',
                   'Listen for what he says the word was never doing.',
                   'The item about the recommendation is the one the conversation is for.']),
        'warm': [('Woman: Is she in severe hardship or not?',
                  ('The phrase does not settle it. That is the problem.',
                   'Yes, clearly.',
                   'Eight hundred pounds.',
                   'In the strict sense.'),
                  0,
                  'The rule was not written for this case.'),
                 ('Woman: Then make a judgement and move on.',
                  ('I will. I want the file to say it was a judgement.',
                   'I cannot.',
                   'That is the rule.',
                   'A borderline case.'),
                  0,
                  'Recording the decision as a decision is the whole point.'),
                 ('Woman: Will anybody read the file?',
                  ('Somebody will, on appeal, and I want them to see the gap.',
                   'Nobody ever does.',
                   'Only the auditor.',
                   'Up to a point.'),
                  0,
                  'The note is written for the reader who comes later.')],
        'script': [('Woman', 'You have had that file open for twenty minutes.'),
                   ('Man',
                    'Because I cannot tell whether she qualifies, and I am no longer sure that '
                    'is my fault.'),
                   ('Woman', 'What does the guidance say?'),
                   ('Man',
                    'Payment may be made where the applicant is in severe hardship. That is the '
                    'whole test. No figure, no list, no examples.'),
                   ('Woman', 'And she is not obviously in severe hardship.'),
                   ('Man',
                    'She is not obviously anything. She has eight hundred pounds, which is more '
                    'than the people we pay and less than the people we refuse. If she had two '
                    'hundred I would pay her without reading the rest. If she had four thousand '
                    'I would refuse without reading it either. At eight hundred the phrase '
                    'simply runs out.'),
                   ('Woman', 'So you want a figure in the guidance.'),
                   ('Man',
                    'I thought I did, and then I worked out what a figure would do. Put the line '
                    'at a thousand and the woman with a thousand and five pounds gets nothing, '
                    'and she is in exactly her position. You do not remove the hard case by '
                    'drawing a line. You move it.'),
                   ('Woman', 'Then what are you going to write?'),
                   ('Man',
                    'That I am paying her, that the guidance does not determine the case either '
                    'way, and that I decided it on three facts I am going to list. If somebody '
                    'overturns me on appeal they will have to say which of the three they '
                    'disagree with.'),
                   ('Woman', 'That is a longer note than anybody writes.'),
                   ('Man',
                    'It is four sentences, and it is the difference between a decision and a '
                    'mood. The phrase was never going to settle the middle cases. What it can do '
                    'is make me say out loud that I am in one.')],
        'items': [('Why has he had the file open for twenty minutes?',
                   ('He cannot find the guidance',
                    'He cannot tell whether she qualifies, and doubts that is his fault',
                    'He disagrees with the rule',
                    'He is waiting for a figure'),
                   1,
                   'The test is one phrase with no figure and no examples.'),
                  ('What is the whole test in the guidance?',
                   ('An income limit',
                    'That the applicant is in severe hardship',
                    'A list of qualifying circumstances',
                    'The caseworker’s judgement'),
                   1,
                   'No figure, no list, no examples.'),
                  ('What would he do if she had two hundred pounds?',
                   ('Refuse without reading further',
                    'Pay without reading further',
                    'Refer the case upward',
                    'Ask for more evidence'),
                   1,
                   'And refuse without reading further at four thousand.'),
                  ('What does he say happens if the line is put at a thousand?',
                   ('The hard case disappears',
                    'The woman with a thousand and five pounds is in exactly the same position',
                    'Everybody qualifies',
                    'The guidance becomes clearer'),
                   1,
                   'You do not remove the hard case; you move it.'),
                  ('What is he going to write in the file?',
                   ('That the guidance is unclear',
                    'That he is paying her, that the guidance does not determine the case, and '
                    'the three facts he decided on',
                    'That he refuses the application',
                    'That a figure is needed'),
                   1,
                   'So that an appeal must say which of the three it disputes.'),
                  ('What does he call the difference the note makes?',
                   ('Between a payment and a refusal',
                    'Between a decision and a mood',
                    'Between a rule and a figure',
                    'Between guidance and law'),
                   1,
                   'He says it is four sentences and worth writing.'),
                  ('What does he say the phrase can do?',
                   ('Settle the middle cases',
                    'Make him say out loud that he is in one',
                    'Replace a figure',
                    'Protect him on appeal'),
                   1,
                   'It was never going to settle them.')]},
 'l2': {'sub': 'What a cut-off costs',
        'caption': 'The scheme manager briefing her team before April',
        'poster': ['Capital test: £1,000 · above it, no award',
                   'Award: up to £700 in two working days',
                   'One review, by a different officer, in fourteen days'],
        'skill': ('Hearing a manager accept a correction she will have to pay for',
                  ['She restates the objection as a pair of figures.',
                   'Note what the taper costs and what it buys.',
                   'The item about the published numbers carries the lesson.']),
        'warm': [('Man: Is a thousand the wrong figure?',
                  ('The figure is defensible. The step is not.',
                   'Yes, far too low.',
                   'Seven hundred pounds.',
                   'Two working days.'),
                  0,
                  'Her concession is about the shape, not the level.'),
                 ('Man: What is a taper, in this scheme?',
                  ('A pound off the award for every two pounds of capital.',
                   'A delay in payment.',
                   'A second review.',
                   'Four hundred pounds.'),
                  0,
                  'Full award to six hundred, nothing at two thousand.'),
                 ('Man: Can we afford it?',
                  ('Eighteen thousand pounds. Under two per cent.',
                   'No, not at all.',
                   'Nobody has costed it.',
                   'Four hundred and twelve.'),
                  0,
                  'Eighteen thousand pounds across four hundred and twelve awards.')],
        'script': [('Man',
                    'Margit has written to all of you about the capital test and she is right, '
                    'so I am going to put her case in two numbers and then tell you what I am '
                    'doing about it. Here are the two numbers. One pound and seven hundred '
                    'pounds. An applicant with a thousand pounds of capital can have up to seven '
                    'hundred from us. An applicant with a thousand and one gets nothing. The '
                    'difference between those two women is a pound, and the difference in what '
                    'this council does for them is seven hundred. I have watched people in this '
                    'room deal with that by not asking the capital question too precisely, and I '
                    'want to say plainly that I understand why, and that it is still falsifying '
                    'a record. So from April the test is a taper. Full award up to six hundred '
                    'pounds of capital, then a pound off the award for every two pounds of '
                    'capital, and nothing at all at two thousand. Nobody falls off a cliff, and '
                    'the worst case for any applicant is losing fifty pence for having a pound '
                    'more. We have costed it on last year’s caseload: eighteen thousand pounds '
                    'across four hundred and twelve awards, which is under two per cent of the '
                    'scheme and less than we spent on reviews. And one more change, which is the '
                    'one I expect you to dislike. We publish the number of awards made at each '
                    'hundred pounds of capital, every quarter. If the taper is working the '
                    'distribution will be smooth, and if it is not we will be able to see the '
                    'step we have accidentally left in it.')],
        'items': [('What are the two numbers the manager uses?',
                   ('A thousand and two thousand',
                    'One pound and seven hundred pounds',
                    'Six hundred and two thousand',
                    'Four hundred and twelve'),
                   1,
                   'A difference of a pound against a difference of seven hundred.'),
                  ('What has she watched people in the room do?',
                   ('Refuse applications',
                    'Avoid asking the capital question too precisely',
                    'Refer cases to review',
                    'Ignore the guidance'),
                   1,
                   'She says she understands why and that it is still falsifying a record.'),
                  ('What is the new test from April?',
                   ('A higher capital limit',
                    'A taper: full award to six hundred, a pound off for every two above, '
                    'nothing at two thousand',
                    'A flat award',
                    'A judgement left to the officer'),
                   1,
                   'Nobody falls off a cliff under it.'),
                  ('What is the worst case for an applicant under the taper?',
                   ('Losing the whole award',
                    'Losing fifty pence for having a pound more',
                    'Waiting two extra days',
                    'A second review'),
                   1,
                   'Which is the point of a taper.'),
                  ('What does the taper cost?',
                   ('Eighteen thousand pounds across 412 awards',
                    'Nothing',
                    'A tenth of the scheme',
                    'More than the reviews'),
                   0,
                   'Under two per cent of the scheme, and less than was spent on reviews.'),
                  ('What change does she expect the team to dislike?',
                   ('The taper itself',
                    'Publishing the number of awards at each hundred pounds of capital',
                    'The second review',
                    'The two-day payment'),
                   1,
                   'A smooth distribution would show the taper working.')]},
 'l3': {'sub': 'The day a word changed',
        'caption': 'A lecture on the vote that redefined a planet',
        'board': ['1930: Pluto · ninth planet for 76 years',
                  '2005: Eris · same population, greater mass',
                  '2006 Prague: orbits · round · cleared its neighbourhood',
                  'Pluto fails the third · dwarf planet invented'],
        'skill': ('Hearing a classification treated as a decision',
                  ['The forcing discovery first, then the three conditions.',
                   'Listen for which condition he says is not sharp.',
                   'The item about the anger is the one the lecture is for.']),
        'warm': [('Woman: Did they discover Pluto was not a planet?',
                  ('They decided it. Those are different operations.',
                   'Yes, in 2005.',
                   'Three conditions.',
                   'In Prague.'),
                  0,
                  'A vote produced a definition rather than a finding.'),
                 ('Woman: Which condition is the soft one?',
                  ('Clearing the neighbourhood. Clear by how much?',
                   'Orbiting the Sun.',
                   'Being round.',
                   'Greater mass.'),
                  0,
                  'Clearance admits of degrees, so the condition is soft.'),
                 ('Woman: So why was everybody so angry?',
                  ('Because they thought a fact had been overturned.',
                   'Because the vote was close.',
                   'Because Eris was bigger.',
                   'A dwarf planet.'),
                  0,
                  'The expectation was the mistake.')],
        'script': [('Man',
                    'A case where you can watch a word being cut, in public, by a show of hands. '
                    'Pluto, found in 1930, ninth planet for seventy-six years, and nobody ever '
                    'defended that classification because nothing hung on it. Then in 2005 they '
                    'find Eris, out in the same icy crowd beyond Neptune, about the same width '
                    'as Pluto and heavier. And now astronomy has a problem it cannot avoid, '
                    'because there are hundreds more of those things out there. Either you have '
                    'a hundred planets, or Pluto is not one. Those are the options. There is no '
                    'third. So in 2006 the union meets in Prague and votes, and out comes a '
                    'definition in three parts. It orbits the Sun. It is big enough that its own '
                    'gravity has pulled it round. And it has cleared the neighbourhood of its '
                    'orbit. Pluto gets the first two and fails the third, because its '
                    'neighbourhood is full of its relatives, and so they invent dwarf planet to '
                    'put it in. Now look at that third condition, because it is the interesting '
                    'one. Cleared. Cleared by how much? Earth has not swept its orbit perfectly '
                    'either. People have since proposed numbers for it and the numbers disagree '
                    'about where the line goes, and that is not a failure of astronomy. It is '
                    'what happens when you need a boundary and the universe hands you a smooth '
                    'distribution from dust to Jupiter. At the edge the word simply runs out, '
                    'and a committee finishes the sentence. The anger afterwards was real and it '
                    'was misdirected, because people thought a fact had been overturned, and '
                    'what had happened was that a word had been given an edge it never had.')],
        'items': [('Why had nobody defended Pluto’s classification?',
                   ('It was obviously correct',
                    'Nothing hung on it',
                    'The evidence was poor',
                    'It was defended in 1930'),
                   1,
                   'A classification with no consequences attracts no argument.'),
                  ('What problem did the detection of Eris create?',
                   ('Pluto’s orbit had to be recomputed',
                    'Either there are a hundred planets, or Pluto is not one',
                    'The union had to meet',
                    'Neptune had to be reclassified'),
                   1,
                   'He says there is no third option.'),
                  ('What are the three parts of the definition?',
                   ('Mass, orbit and distance',
                    'It orbits the Sun, it is round under its own gravity, and it has cleared '
                    'its neighbourhood',
                    'Size, shape and composition',
                    'Orbit, moons and atmosphere'),
                   1,
                   'Pluto satisfies the first two and fails only the third.'),
                  ('Why does Pluto fail the third condition?',
                   ('Its orbit is too elliptical',
                    'Its neighbourhood is full of its relatives',
                    'It is too small',
                    'It has a moon'),
                   1,
                   'Hence the invention of the category.'),
                  ('What does he say about the numbers proposed for clearance?',
                   ('They agree closely',
                    'They disagree about where the line goes',
                    'They have been withdrawn',
                    'They settle the question'),
                   1,
                   'Which he refuses to call a failure of astronomy.'),
                  ('What does he say the universe hands you?',
                   ('A sharp boundary',
                    'A smooth distribution from dust to Jupiter',
                    'A hundred planets',
                    'A definition'),
                   1,
                   'And a committee finishes the sentence.'),
                  ('Why was the anger misdirected?',
                   ('The vote was procedurally improper',
                    'People thought a fact had been overturned, when a word had been given an '
                    'edge',
                    'Eris should have been excluded too',
                    'The category was badly named'),
                   1,
                   'The expectation was the mistake rather than the decision.')]},
 'l4': {'sub': 'Why the sorites bites',
        'caption': 'A lecture on an argument nobody has disposed of',
        'board': ['One grain is not a heap',
                  'Add one grain to a non-heap: still a non-heap',
                  'Valid · so a premise goes, or the logic does',
                  'Three answers · three different prices'],
        'skill': ('A lecture that prices three answers to one argument',
                  ['The argument first, in three lines.',
                   'Then why the second premise cannot simply be dropped.',
                   'The last item asks what each answer costs.']),
        'warm': [('Woman: Can we not just deny the second premise?',
                  ('You can, and then one grain makes the difference.',
                   'No, it is settled.',
                   'Ten thousand grains.',
                   'A degree theory.'),
                  0,
                  'That premise is what makes a vague word work at all.'),
                 ('Woman: What does epistemicism cost?',
                  ('A fact about grains that nothing could ever show you.',
                   'Bivalence.',
                   'A precise degree.',
                   'Nothing at all.'),
                  0,
                  'The sharp line exists and is unknowable.'),
                 ('Woman: And supervaluationism?',
                  ('Vagueness again, at a higher level.',
                   'A precise number.',
                   'The validity of the argument.',
                   'Six tenths.'),
                  0,
                  'The admissible sharpenings have no sharp boundary either.')],
        'script': [('Man',
                    'An argument from the fourth century before Christ which nobody has disposed '
                    'of, and three modern answers to it, each of which costs you something you '
                    'would rather keep. The argument first, and I want you to notice how '
                    'ordinary every line of it is. One grain of wheat is not a heap. If '
                    'something is not a heap, adding one grain to it does not make it a heap. '
                    'Therefore ten thousand grains are not a heap. That is valid. There is '
                    'nothing wrong with the form at all. So either one of those premises is '
                    'false or the logic has to be rebuilt, and there is no third exit. Now, you '
                    'will want to drop the second premise, and before you do, see what it is '
                    'doing. It says that one grain cannot flip the word, and that is exactly the '
                    'property that lets a child pick the word up. A word that changed its '
                    'application with a single grain, a single day, a single pound, could not be '
                    'taught to a child and could not be used by an adult. So the second premise '
                    'is not a careless assumption. It is what vague words are for, and anybody '
                    'who drops it has to tell you which grain did the work, which nobody has '
                    'ever been able to do. Three answers, then, and three bills. Epistemicism '
                    'says the sharp line is there and we cannot know where: the bill is a fact '
                    'about grains that no possible observation could reveal. Supervaluationism '
                    'says there are many legitimate places to draw it and a borderline sentence '
                    'is true on some and false on others, so neither true nor false: the bill is '
                    'that the set of legitimate places has no sharp edge either, so you have the '
                    'same problem at a higher level. A degree theory says truth comes in '
                    'degrees: the bill is that you must now attach a precise number to a '
                    'sentence whose whole point was its lack of precision, and nobody has '
                    'produced an agreed way of choosing the number.')],
        'items': [('What does the lecturer say about the form of the argument?',
                   ('It contains a hidden error',
                    'It is impeccable, so a premise must go or the logic must',
                    'It is ancient and therefore suspect',
                    'It depends on the number of grains'),
                   1,
                   'And he says there is no third exit anywhere.'),
                  ('What is the second premise doing?',
                   ('Counting the grains',
                    'Saying that one grain cannot flip the word',
                    'Defining a heap',
                    'Assuming bivalence'),
                   1,
                   'Which is the property that makes the word learnable.'),
                  ('What is the bill for epistemicism?',
                   ('A loss of bivalence',
                    'A fact about grains that no possible observation could reveal',
                    'A precise degree of truth',
                    'A rebuilt logic'),
                   1,
                   'The line is there and unknowable.'),
                  ('What is the bill for supervaluationism?',
                   ('A precise number',
                    'The set of legitimate places to draw the line has no sharp edge either',
                    'The validity of the argument',
                    'A fact nobody can learn'),
                   1,
                   'The same problem at a higher level.'),
                  ('What is the bill for a degree theory?',
                   ('A loss of validity',
                    'Attaching a precise number to a sentence whose point was its lack of '
                    'precision',
                    'A fact nobody could learn',
                    'A vagueness at a higher level'),
                   1,
                   'And no agreed procedure for arriving at the number.')]},
 'l5': {'sub': 'Whether the answer matters',
        'caption': 'A reply from somebody who drafts the rules',
        'board': ['All three answers tell an office the same: nothing',
                  'The real choice: sharp line or standing judgement',
                  'It is about who decides, not about truth',
                  'A taper shrinks the injustice; it does not end it'],
        'skill': ('Hearing a practitioner move a question out of philosophy',
                  ['She grants the paradox in one sentence.',
                   'Then the choice she says is the real one, and who it is about.',
                   'The last item is what she concedes cannot be tapered.']),
        'warm': [('Man: So which answer do you take?',
                  ('None of them, because all three tell my office the same.',
                   'The degree theory.',
                   'Epistemicism.',
                   'A taper.'),
                  0,
                  'The question they answer is not the question an office has.'),
                 ('Man: Then what is the real choice?',
                  ('A sharp line, or a judgement made by whoever is on duty.',
                   'A better definition.',
                   'More training.',
                   'Half a pound.'),
                  0,
                  'It is a question about authority.'),
                 ('Man: Does a taper solve it?',
                  ('It shrinks the injustice from seven hundred pounds to fifty pence.',
                   'Yes, entirely.',
                   'No, not at all.',
                   'Two endpoints.'),
                  0,
                  'Which is worth having and is not an answer.')],
        'script': [('Woman',
                    'I grant the paradox entirely and I draft the rules this authority runs on, '
                    'so let me tell you what those three answers are worth to me on a Thursday '
                    'afternoon. Nothing. Not a little; nothing. The epistemicist tells me there '
                    'is a right answer I cannot have. The supervaluationist tells me there is no '
                    'answer. The degree theorist tells me the answer is partly yes, and I cannot '
                    'pay somebody partly. Three positions, one instruction, and the instruction '
                    'is silence. I say that without any disrespect to the people who hold them; '
                    'they are answering a question, and it is simply not mine. That is not a '
                    'complaint about philosophy. It is a claim that the question I have is a '
                    'different question. Mine is a choice between two instruments. Instrument '
                    'one is a sharp line. It takes the decision away from my staff, it makes '
                    'every case checkable by an auditor, and it produces two women whose '
                    'circumstances differ by a pound and whose money differs by seven hundred. '
                    'Instrument two is a standing judgement. It fits the case, and it hands the '
                    'decision to whoever is on duty, so the answer depends on the rota, and an '
                    'appeal has nothing solid to push against. Notice what that choice is about. '
                    'It is not about truth. It is about who decides and who can be held to it, '
                    'and no amount of logic will settle it for me. Now, the taper. The taper is '
                    'the engineer in the room and it is the best thing we have, and I want to be '
                    'honest that it does not dissolve anything. A taper has a top and a bottom, '
                    'and the argument comes back at both of them. What has changed is the size '
                    'of the wrong: fifty pence instead of seven hundred pounds. I will take that '
                    'trade every time, and it is a trade and not a solution. And some things '
                    'cannot be tapered at all. You cannot half convict somebody, you cannot '
                    'issue half a licence, and there the line stays exactly where it was, '
                    'arbitrary and unavoidable.')],
        'items': [('What does she say the three answers are worth to her?',
                   ('A great deal',
                    'Nothing at all',
                    'Something, on reflection',
                    'More than the taper'),
                   1,
                   'Three positions, one instruction, and the instruction is silence.'),
                  ('What does instrument one do?',
                   ('Fits the case',
                    'Takes the decision from her staff, makes cases checkable, and produces two '
                    'women a pound apart and seven hundred apart',
                    'Hands the decision to the officer on duty',
                    'Dissolves the paradox'),
                   1,
                   'That is instrument one, the sharp line.'),
                  ('What is the particular trouble with instrument two?',
                   ('It is expensive',
                    'The answer depends on the rota, and an appeal has nothing solid to push '
                    'against',
                    'It cannot be audited',
                    'It removes discretion'),
                   1,
                   'Besides the inconsistency it produces.'),
                  ('What does she say the choice is about?',
                   ('Truth',
                    'Who decides and who can be held to it',
                    'Cost',
                    'The wording of the rule'),
                   1,
                   'And no amount of logic will settle it for her.'),
                  ('What does she concede about the taper?',
                   ('That it is too expensive',
                    'That it has a top and a bottom and does not dissolve anything',
                    'That it cannot be administered',
                    'That it is worse than a sharp line'),
                   1,
                   'What has changed is the size of the wrong.')]},
 'w1': {'sub': 'When a word runs out',
        'skill': ('Build a Sentence: asking what a rule does with the middle',
                  ['Nine of the ten are questions, and the useful ones ask about the case beside '
                   'the line.',
                   'An embedded question keeps statement order: do you know what happens at the '
                   'line.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('The guidance says severe hardship and gives no figure.',
                    ['do',
                     'you',
                     'know',
                     'what',
                     'the',
                     'last',
                     'ten',
                     'decisions',
                     'turned',
                     'on'],
                    'Do you know what the last ten decisions turned on?'),
                   ('The cut-off is a thousand pounds.',
                    ['what',
                     'happens',
                     'to',
                     'the',
                     'applicant',
                     'with',
                     'a',
                     'thousand',
                     'and',
                     'five'],
                    'What happens to the applicant with a thousand and five?'),
                   ('The officer may reduce the figure.',
                    ['may',
                     'he',
                     'reduce',
                     'only',
                     'the',
                     'figure',
                     'or',
                     'the',
                     'whole',
                     'award'],
                    'May he reduce only the figure, or the whole award?')],
        'exam': [('All the applications were not assessed.',
                  ['do', 'you', 'mean', 'none', 'of', 'them', 'or', 'some', 'of', 'them'],
                  'Do you mean none of them, or some of them?'),
                 ('He did not read the report and sign it.',
                  ['did', 'he', 'do', 'neither', 'or', 'did', 'he', 'sign', 'it', 'unread'],
                  'Did he do neither, or did he sign it unread?'),
                 ('The rule applies to households jointly.',
                  ['does', 'that', 'mean', 'together', 'or', 'each', 'of', 'them', 'severally'],
                  'Does that mean together, or each of them severally?'),
                 ('You may not withdraw the application.',
                  ['is', 'that', 'a', 'prohibition', 'or', 'simply', 'not', 'a', 'requirement'],
                  'Is that a prohibition, or simply not a requirement?'),
                 ('The payment tapers above eight hundred pounds.',
                  ['where',
                   'does',
                   'the',
                   'taper',
                   'start',
                   'and',
                   'what',
                   'happens',
                   'just',
                   'below',
                   'it'],
                  'Where does the taper start, and what happens just below it?'),
                 ('The appeal panel reviews the figure annually.',
                  ['has', 'the', 'figure', 'moved', 'since', 'the', 'guidance', 'was', 'written'],
                  'Has the figure moved since the guidance was written?'),
                 ('Two caseworkers decided the same case differently.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'which facts',
                   'the two',
                   'of them',
                   'disagreed',
                   'about'],
                  'I would like to know which facts the two of them disagreed about.')]},
 'w2': {'sub': 'What a cut-off costs',
        'to': 'crisisscheme@dunmorrow.gov.uk',
        'date': '14/02/2035',
        'subject': 'April criteria — support for the taper, and the once in six months rule',
        'scenario': ['You are the council’s welfare rights adviser. The scheme manager has '
                     'accepted that the capital test should become a taper and that awards will '
                     'be published by band of capital each quarter. You support both. Your own '
                     'objection is to a different clause: an applicant may apply only once in '
                     'any six months, regardless of what happens in the second crisis.',
                     'Write an email to the scheme team, copied to the manager.'],
        'bullets': ['Support the taper and the published bands, with what each buys.',
                    'Name the fault in the once in six months rule, with an example.',
                    'Propose the wording you want instead.'],
        'skill': ('Supporting two changes and attacking a frequency rule',
                  ['Say what each change buys, so the cost is justified.',
                   'Show the fault with one applicant rather than a principle.',
                   'Propose wording that can be dropped into the criteria.']),
        'model': ['Dear colleagues,',
                  '',
                  'This office supports the taper and the published bands, and asks for the '
                  'frequency rule to be redrafted.',
                  '',
                  'The taper buys the one thing a crisis scheme cannot do without, which is an '
                  'answer a caseworker can give to the applicant’s face. The published bands buy '
                  'the ability to find the next cliff: a distribution with a step in it is '
                  'visible in a table and invisible in a casework file. A line has to be drawn '
                  'somewhere, and the merit of these two changes together is that the line is '
                  'now gradual and the council can see where it falls.',
                  '',
                  'The clause I would redraft is the once in six months limit. In January this '
                  'office saw an applicant whose boiler failed in week one and whose employer '
                  'collapsed in week nine. She received £400 for the boiler and was refused in '
                  'March, correctly under the criteria and absurdly on the facts, because the '
                  'rule treats a second crisis as evidence of a first bad decision. Thirty-one '
                  'applicants were refused on that ground last year and eleven of them returned '
                  'within a fortnight through the homelessness route, which costs this authority '
                  'rather more than £700.',
                  '',
                  'What I propose is a cap on money rather than on occasions: an applicant may '
                  'receive no more than £1,000 in any six months, in any number of awards. That '
                  'keeps the control the clause was written for, removes the perverse refusal, '
                  'and is a single sentence in place of the one that is there.',
                  '',
                  'Delphine Achebe, Welfare Rights Adviser'],
        'notes': ['The support says what each change buys in one clause each, and the sentence '
                  'about a table against a casework file is the argument for publication.',
                  'The example carries dates, a figure and an outcome, so it cannot be read as a '
                  'hard luck story.',
                  'The cost of the present rule is given in the authority’s own money, which is '
                  'the argument the finance team will read.',
                  'The proposal replaces a cap on occasions with a cap on money, which keeps the '
                  'purpose of the clause and is drafted as one sentence.'],
        'bandpair': {'mid': ['Dear colleagues,',
                             'This office is pleased to support the introduction of the taper '
                             'and the publication of awards by capital band. We think both of '
                             'these will make the scheme fairer and easier to explain to '
                             'applicants.',
                             'We would, however, like to raise a concern about the rule that an '
                             'applicant may only apply once in six months. In January we saw a '
                             'woman whose boiler broke and who then lost her job a couple of '
                             'months later, and she had to be refused even though her situation '
                             'was obviously serious. Apparently quite a few people were refused '
                             'for this reason last year.',
                             'Perhaps the rule could be changed so that there is a limit on the '
                             'total amount rather than on the number of applications. This would '
                             'still control the cost of the scheme while avoiding refusals that '
                             'are hard to justify.',
                             'Yours sincerely, Delphine Achebe'],
                     'top': ['Dear colleagues,',
                             'This office supports the taper and the published bands, and asks '
                             'for the frequency rule to be redrafted.',
                             'The taper buys an answer a caseworker can give to the applicant’s '
                             'face. The published bands buy the ability to find the next cliff, '
                             'since a distribution with a step in it is visible in a table and '
                             'invisible in a casework file.',
                             'The clause to redraft is the once in six months limit. In January '
                             'this office saw an applicant whose boiler failed in week one and '
                             'whose employer collapsed in week nine. She received £400 for the '
                             'boiler and was refused in March, correctly under the criteria and '
                             'absurdly on the facts, because the rule treats a second crisis as '
                             'evidence of a first bad decision. Thirty-one applicants were '
                             'refused on that ground last year; eleven returned within a '
                             'fortnight through the homelessness route, which costs this '
                             'authority rather more than £700.',
                             'I propose a cap on money rather than on occasions: no more than '
                             '£1,000 in any six months, in any number of awards. That keeps the '
                             'control the clause was written for, removes the perverse refusal, '
                             'and is one sentence in place of the one that is there. Delphine '
                             'Achebe'],
                     'diffs': ['It states what each supported change buys, instead of calling '
                               'both of them fairer.',
                               'It gives the example in weeks, pounds and months, so the refusal '
                               'can be checked rather than sympathised with.',
                               'It names the mechanism of the fault: the rule treats a second '
                               'crisis as evidence of a first bad decision.',
                               'It costs the present rule in the authority’s own money, which '
                               'the middle answer never attempts.',
                               'It drops the hedging — pleased to support, we would however '
                               'like, obviously, apparently, perhaps — which in the middle '
                               'answer makes a costed case sound like a request.']}},
 'w3': {'sub': 'The day a word changed',
        'prof': 'Professor Lindqvist',
        'question': 'A medical regulator must decide at what gestational age a particular '
                    'treatment becomes available, and the underlying development is continuous. '
                    'One group of advisers wants a sharp week, on the ground that clinicians '
                    'need a rule they can apply at three in the morning. Another wants the '
                    'decision left to clinical judgement in a stated band of weeks, on the '
                    'ground that any sharp week will be arbitrary. What should the regulator '
                    'publish?',
        'posts': [('Benedikta',
                   'w',
                   'Publish the week. A band hands the decision to whoever is on duty, and the '
                   'patient has no way of knowing which clinician she has drawn.'),
                  ('Anselm',
                   'm',
                   'A sharp week treats two patients a day apart as opposites, and the week '
                   'itself came out of a committee rather than out of a body.')],
        'skill': ('A question where a continuum meets a rule',
                  ['Benedikta argues from consistency; Anselm from the arbitrariness of the '
                   'line.',
                   'The passages say a vote settles such a question in the institutional sense '
                   'only.',
                   'A strong answer makes the line reviewable rather than right.']),
        'starters': ['Benedikta is right that…, although it does not follow that…',
                     'Nothing turns on the exact figure…',
                     'A line has to be drawn…',
                     'So the regulator should…, together with…'],
        'model': ['Benedikta is right that a band transfers the decision from the regulator to '
                  'whoever happens to be on duty, and that a patient cannot choose her clinician '
                  'at three in the morning. It does not follow that the sharp week is defensible '
                  'as drawn. Anselm has identified what it does: it treats two patients a day '
                  'apart as belonging to different kinds, and nothing in the underlying '
                  'development supports that. Both objections are sound, which usually means the '
                  'question has been put in the wrong form.',
                  'Nothing turns on the exact figure, and that is the fact the regulator should '
                  'build on rather than conceal. If the week cannot be derived from the '
                  'physiology, then the published week is a stipulation in the service of '
                  'consistency, and the honest document says so: this is the week we have '
                  'chosen, these are the two considerations that fixed it, and we are aware that '
                  'the patient on the day before is in substantially the same condition as the '
                  'patient on the day after. A rule presented in those terms is harder to attack '
                  'than one presented as a discovery, because it concedes the only objection '
                  'anybody can make to it.',
                  'So the regulator should publish the sharp week, together with three things '
                  'the sharp-week advocates usually omit: the reasoning that selected it, a '
                  'named route by which a clinician may treat a patient on the wrong side of it '
                  'and record why, and a review of the week itself every three years against the '
                  'outcomes recorded on both sides. That converts an arbitrary line into a '
                  'reviewable one, which is the most a continuum will ever allow. The '
                  'alternative is not a principled line; it is the same arbitrary line with '
                  'nobody’s name on it.'],
        'model_words': 293},
 'w4': {'sub': 'Why the sorites bites',
        'skill': ('Scope ambiguity and its repair',
                  ['Put the quantity where it belongs: none of them, or some of them not.',
                   'Only attaches to whatever follows it, so move it to the element you mean.',
                   'A negative over and leaves two readings: repair it with neither … nor.']),
        'guided': [('Say that no application was assessed.',
                    ['none',
                     'of',
                     'the',
                     'applications',
                     'was',
                     'assessed',
                     'before',
                     'the',
                     'deadline',
                     'passed'],
                    'None of the applications was assessed before the deadline passed.'),
                   ('Say instead that some were not assessed.',
                    ['some',
                     'of',
                     'the',
                     'applications',
                     'were',
                     'not',
                     'assessed',
                     'before',
                     'the',
                     'deadline'],
                    'Some of the applications were not assessed before the deadline.'),
                   ('Restrict the power to one element.',
                    ['the',
                     'officer',
                     'may',
                     'reduce',
                     'only',
                     'the',
                     'figure',
                     'and',
                     'not',
                     'the',
                     'award'],
                    'The officer may reduce only the figure and not the award.')],
        'exam': [('Restrict the power to one person instead.',
                  ['only',
                   'the',
                   'officer',
                   'may',
                   'reduce',
                   'the figure',
                   'once',
                   'it',
                   'has been',
                   'set'],
                  'Only the officer may reduce the figure once it has been set.'),
                 ('Repair a negative over and.',
                  ['he',
                   'neither',
                   'read',
                   'the report',
                   'nor',
                   'signed',
                   'the minute',
                   'that',
                   'followed',
                   'it'],
                  'He neither read the report nor signed the minute that followed it.'),
                 ('Say the other thing that sentence might have meant.',
                  ['he',
                   'signed',
                   'the',
                   'minute',
                   'without',
                   'having',
                   'read',
                   'the',
                   'report',
                   'at',
                   'all'],
                  'He signed the minute without having read the report at all.'),
                 ('Put the negative outside the modal.',
                  ['the',
                   'applicant',
                   'may',
                   'not',
                   'withdraw',
                   'the claim',
                   'once',
                   'the award',
                   'is',
                   'made'],
                  'The applicant may not withdraw the claim once the award is made.'),
                 ('Put the negative inside it.',
                  ['the',
                   'applicant',
                   'need',
                   'not',
                   'withdraw',
                   'the',
                   'claim',
                   'in',
                   'order',
                   'to',
                   'appeal'],
                  'The applicant need not withdraw the claim in order to appeal.')]},
 'w5': {'sub': 'Whether the answer matters',
        'prof': 'Professor Oyelaran',
        'question': 'A university must decide how to award its degree classifications. The '
                    'present rule is a sharp boundary: an average of 70 gives a first, 69.9 does '
                    'not, and nothing in the marking can distinguish the two candidates. One '
                    'proposal replaces classes with the transcript alone, so that employers see '
                    'the marks and no class at all. Another keeps the classes and adds a '
                    'borderline zone in which a panel may promote a candidate on stated grounds. '
                    'Which should the university adopt?',
        'posts': [('Tomasz',
                   'w',
                   'Abolish the classes. Every borderline rule is a new boundary with the same '
                   'problem, and the transcript already contains everything an employer needs.'),
                  ('Ngozi',
                   'm',
                   'Employers will invent their own classes from the marks, and theirs will be '
                   'unpublished, unappealable and worse than ours.')],
        'skill': ('A question about abolishing a boundary altogether',
                  ['Tomasz argues that a borderline rule only moves the line; Ngozi that the '
                   'line reappears elsewhere.',
                   'The passages say some decisions admit of no taper and the remedy is then '
                   'procedural.',
                   'A strong answer says who ends up drawing the line under each proposal.']),
        'starters': ['Tomasz is right that…, although it does not follow that…',
                     'There is no fact of the matter…',
                     'A line has to be drawn…',
                     'So the university should…, together with…'],
        'model': ['Tomasz is right that a borderline zone does not remove the boundary but '
                  'installs two of them, at the top and the bottom of the zone, and that the '
                  'candidate at 67.9 is in exactly the position the reform was meant to relieve. '
                  'It does not follow that abolition is the remedy. Ngozi has identified what '
                  'happens next. A classification is a compression of a transcript, employers '
                  'require a compression because they cannot read four hundred transcripts '
                  'attentively, and if the university declines to supply one they will each '
                  'build their own from the marks. Those private classifications will be '
                  'unpublished, inconsistent between firms, and subject to no appeal whatever, '
                  'and a candidate who asks how the figure was arrived at will be told that it '
                  'is a matter for the firm.',
                  'There is no fact of the matter about where a first begins, and the question '
                  'is therefore not which proposal is correct but which arrangement puts the '
                  'arbitrary line where it can be seen. On that test abolition performs worst of '
                  'the three options, because it does not abolish the line; it privatises it. '
                  'The borderline panel performs better than the present rule, not because its '
                  'boundaries are more principled, but because the grounds of promotion are '
                  'written down and a candidate may ask whether they were applied to her.',
                  'So the university should keep the classes and add the panel, together with '
                  'the three provisions that make an arbitrary boundary tolerable: the grounds '
                  'of promotion published in advance, the decision in each borderline case '
                  'recorded with the facts that settled it, and the distribution of marks about '
                  'each boundary published annually so that a cluster immediately below 70 can '
                  'be seen by anybody. None of that makes 70 the right number. It makes 70 a '
                  'number the university can be asked to defend in public, by the candidate it '
                  'fell on, which is the most any continuum will permit.'],
        'model_words': 322},
 'sp': [{'sub': 'When a word runs out',
         'focus': 'refusing to pretend a rule decides a case',
         'skill': ('You do not remove the hard case. You move it.',
                   ['Give the test and say what it contains.',
                    'Then the two easy cases on either side.',
                    'Then what a figure would do.']),
         'repeat': ['That is the whole test.',
                    'No figure, no list, no examples.',
                    'At eight hundred the phrase simply runs out.',
                    'At four thousand I would refuse without reading on.',
                    'At two hundred pounds I would pay without reading on.',
                    'Payment may be made where the applicant is in severe hardship.',
                    'Put the line at a thousand and the woman with a thousand and five is in '
                    'exactly the same position.'],
         'theme': 'a rule that stops short of the case in front of you',
         'qs': ['Tell me about a rule that did not reach your case. What happened?',
                'Some people say every rule should contain a figure. How far would you agree?',
                'How would you explain to a friend why drawing a line does not remove the hard '
                'case?',
                'Finally, describe a decision about you that somebody had to make without a '
                'rule.'],
         'model': [(2,
                    'A figure makes the decision checkable, which is worth a great deal, and it '
                    'buys that by treating two almost identical people as opposites. Both '
                    'arrangements have a victim.'),
                   (3,
                    'Because the case that was hard was hard for being in the middle. Draw the '
                    'line anywhere and there is a new middle, an inch to one side of it.')],
         'selfcheck': ['I gave the test and what it contains',
                       'I gave the two easy cases',
                       'I said what a figure would do']},
        {'sub': 'What a cut-off costs',
         'focus': 'putting a cut-off into two numbers',
         'skill': ('One pound and seven hundred pounds',
                   ['Give the two applicants and the one pound between them.',
                    'Then the seven hundred pounds between their outcomes.',
                    'Then the taper, in three figures.']),
         'repeat': ['The difference between them is a pound.',
                    'So from April the test is a taper.',
                    'An applicant with a thousand and one gets nothing.',
                    'The difference in what we do is seven hundred.',
                    'Full award up to six hundred pounds of capital.',
                    'An applicant with a thousand pounds can have seven hundred.',
                    'Then a pound off the award for every two pounds of capital, and nothing at '
                    'two thousand.'],
         'theme': 'a step that nobody can explain to the person it falls on',
         'qs': ['Tell me about a rule whose effect on you turned on one figure. How did it feel?',
                'Some people say every benefit should have a sharp limit. How far would you '
                'agree?',
                'How would you explain to a friend what a taper is?',
                'Finally, describe a cut-off in your own country that should be smoothed.'],
         'model': [(2,
                    'A sharp limit is cheap to administer and easy to check, and it buys that by '
                    'treating two almost identical people as opposites. A taper costs a little '
                    'arithmetic and removes the indefensible case.'),
                   (3,
                    'Instead of losing everything at a line, you lose a little for each pound '
                    'you have. The help fades out rather than stopping.')],
         'selfcheck': ['I gave the two applicants',
                       'I gave the two differences',
                       'I gave the taper in three figures']},
        {'sub': 'The day a word changed',
         'focus': 'describing a decision that looked like a discovery',
         'skill': ('Pluto did not alter in 2006. A word did.',
                   ['Give the forcing discovery in two sentences.',
                    'Then the choice with no third option.',
                    'Then what the vote actually did.']),
         'repeat': ['There is no third option.',
                    'And there are hundreds more out there.',
                    'Pluto was the ninth planet for seventy-six years.',
                    'Nobody defended that, because nothing hung on it.',
                    'Then they found Eris, heavier and just as wide.',
                    'Either you have a hundred planets, or Pluto is not one.',
                    'So a committee voted, and what had happened was that a word had been given '
                    'an edge it never had.'],
         'theme': 'a boundary that had to be invented',
         'qs': ['Tell me about a word in your language with no clear edge. Where does it stop?',
                'Some people say scientists should not vote on definitions. How far would you '
                'agree?',
                'How would you explain to a friend why Pluto itself did not change?',
                'Finally, describe a category in your own country that was created by a '
                'decision.'],
         'model': [(2,
                    'They are not voting on the facts. They are voting on which facts the word '
                    'will cover, and somebody has to, because the universe does not come with '
                    'the word attached.'),
                   (3,
                    'Nothing out there moved. We had a list with nine things on it and a rule '
                    'that would have put a hundred things on it, so we changed the rule and the '
                    'list got shorter.')],
         'selfcheck': ['I gave the forcing discovery',
                       'I gave the choice with no third option',
                       'I said what the vote actually did']},
        {'sub': 'Why the sorites bites',
         'focus': 'pricing three answers to one argument',
         'skill': ('Three answers, and three bills',
                   ['Give the argument in three short lines.',
                    'Then say what the second premise is doing.',
                    'Then the three bills, one sentence each.']),
         'repeat': ['The form is impeccable.',
                    'One grain of wheat is not a heap.',
                    'Therefore ten thousand grains are not a heap.',
                    'So a premise goes, or the logic does.',
                    'Add one grain to something that is not a heap.',
                    'The second premise says one grain cannot flip the word.',
                    'And that is exactly the property that makes the word learnable.'],
         'theme': 'an old argument with no agreed answer',
         'qs': ['Tell me about a question you could not settle because every answer cost '
                'something. What did you choose?',
                'Some people say ordinary words are simply too sloppy for serious use. How far '
                'would you agree?',
                'How would you explain to a friend why the heap argument is hard to answer?',
                'Finally, describe a word in your language that has no clear edge.'],
         'model': [(2,
                    'Their sloppiness is what makes them work. A word that turned on a single '
                    'grain could not be learnt, so the looseness is a feature of the tool rather '
                    'than a fault in it.'),
                   (3,
                    'Because every step looks obviously true and the end is obviously false. You '
                    'cannot point at the step where it goes wrong, and that is the whole '
                    'difficulty.')],
         'selfcheck': ['I gave the argument in three lines',
                       'I said what the second premise does',
                       'I gave the three bills']},
        {'sub': 'Whether the answer matters',
         'focus': 'moving a question out of philosophy',
         'skill': ('Three positions, one instruction, and the instruction is silence',
                   ['Grant the paradox in one sentence.',
                    'Say what each position tells your office.',
                    'Then name the choice that is actually yours.']),
         'repeat': ['I grant the paradox entirely.',
                    'I cannot pay somebody partly.',
                    'The supervaluationist says there is no answer.',
                    'The degree theorist says the answer is partly yes.',
                    'Three positions, one instruction, and the instruction is silence.',
                    'The epistemicist says there is an answer I cannot have.',
                    'My choice is between a sharp line and a judgement made by whoever is on '
                    'duty.'],
         'theme': 'a decision logic will not make for you',
         'qs': ['Tell me about a decision nobody could make for you. How did you make it?',
                'Some people say officials should always have discretion. How far would you '
                'agree?',
                'How would you explain to a friend why a taper is a trade rather than a '
                'solution?',
                'Finally, describe a decision in your own country that cannot be made by '
                'halves.'],
         'model': [(2,
                    'Discretion fits the case and costs you consistency, and the person who '
                    'gains from it is the official rather than the applicant. I would rather '
                    'have a published line and a route round it.'),
                   (3,
                    'Because the unfairness is still there at both ends of the taper. What has '
                    'changed is the size of it, from seven hundred pounds to fifty pence, and I '
                    'would take that trade every time.')],
         'selfcheck': ['I granted the paradox',
                       'I said what each position offers',
                       'I named the choice that is mine']}],
 'gram': {'title': 'Scope ambiguity and its repair',
          'headers': ['Form', 'What it does'],
          'rows': [('all the applications were not assessed', 'two readings: none, or some not'),
                   ('none of the applications was assessed',
                    'the first reading, written unambiguously'),
                   ('some of the applications were not assessed',
                    'the second reading, written unambiguously'),
                   ('only the officer may reduce the figure',
                    'restricts the person: nobody else may'),
                   ('the officer may reduce only the figure',
                    'restricts the thing: not the award'),
                   ('he neither read the report nor signed it',
                    'repairs a negative spread over and'),
                   ('the applicant need not withdraw',
                    'the negative inside the modal: not required')],
          'notes': ['Scope is the reach of a little word, and English marks it by position '
                    'rather than by inflection, which is why a grammatical sentence can carry '
                    'two readings and no punctuation will separate them. All the applications '
                    'were not assessed may report a total failure or a partial one. The repair '
                    'is never a comma; it is to move the quantity: none of the applications was '
                    'assessed, or some of the applications were not assessed. Write both and '
                    'choose.',
                    'Only attaches to the element that follows it. Only the officer may reduce '
                    'the figure says that nobody else may; the officer may reduce only the '
                    'figure says that the award is untouchable. The version that drifts into '
                    'official prose, the officer may only reduce the figure, strictly says that '
                    'reducing is the sole thing he may do to it, and in a dispute that is the '
                    'reading a court will take.',
                    'Two further scope traps are worth knowing by name. A negative spread over '
                    'and leaves the reader guessing: he did not read the report and sign it. Use '
                    'neither … nor for the double denial and without having for the other '
                    'reading. And a negative with a modal falls inside or outside: you may not '
                    'withdraw forbids it, you need not withdraw merely does not require it, and '
                    'the two are confused in official prose more often than any other pair.'],
          'watch': 'Do not use a comma to disambiguate scope. All the applications, were not '
                   'assessed is not a repair and is not a sentence; move the quantity instead.',
          'ex': [('Rewrite unambiguously in the reading given.',
                  ['All the applications were not assessed. (none)',
                   'All the applications were not assessed. (some not)',
                   'The officer may only reduce the figure. (restrict the thing)',
                   'The officer may only reduce the figure. (restrict the person)',
                   'He did not read the report and sign it. (neither)'],
                  ['None of the applications was assessed.',
                   'Some of the applications were not assessed.',
                   'The officer may reduce only the figure.',
                   'Only the officer may reduce the figure.',
                   'He neither read the report nor signed it.']),
                 ('Say whether the negative is inside or outside the modal.',
                  ['The applicant may not withdraw the claim.',
                   'The applicant need not withdraw the claim.',
                   'The panel must not promote a borderline candidate.',
                   'The panel does not have to promote a borderline candidate.'],
                  ['Outside: it is forbidden.',
                   'Inside: it is not required.',
                   'Outside: it is forbidden.',
                   'Inside: it is not required.']),
                 ('Repair the scope.',
                  ['All the files were not checked, only some of them.',
                   'He may only sign the minute, not amend it.',
                   'She did not read the guidance and apply it.',
                   'Every applicant was not assessed before the deadline.'],
                  ['Only some of the files were checked.',
                   'He may sign only the minute, not amend it.',
                   'She neither read the guidance nor applied it.',
                   'Not every applicant was assessed before the deadline.'])],
          'bas': 'Build a Sentence in this unit asks you to place all, only and not. Two of the '
                 'answers differ from each other by the position of a single word, and the '
                 'prompt tells you which element to restrict.'},
 'fault': {'text': 'All the files were not checked, only some of them. He may only sign the '
                   'minute, not amend it. She did not read the guidance and apply it. Every '
                   'applicant was not assessed before the deadline. The two cutoffs was '
                   'published in March. Do you know where did the taper start?',
           'faults': [('All the files were not checked, only some of them',
                       'Only some of the files were checked',
                       'A comma cannot repair scope; the quantity has to move to the front of '
                       'the element it quantifies.'),
                      ('He may only sign the minute, not amend it',
                       'He may sign only the minute, not amend it',
                       'Only before the verb restricts the action; here the restriction is on '
                       'what he may sign.'),
                      ('She did not read the guidance and apply it',
                       'She neither read the guidance nor applied it',
                       'A negative spread over and leaves two readings; neither and nor settle '
                       'it.'),
                      ('Every applicant was not assessed before the deadline',
                       'Not every applicant was assessed before the deadline',
                       'The negative must precede every to deny the universal rather than each '
                       'case.'),
                      ('The two cutoffs was published',
                       'The two cutoffs were published',
                       'A plural subject takes a plural verb however long the phrase before it.'),
                      ('where did the taper start',
                       'where the taper started',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('what a sentence says of its subject', 'predicate'),
                   ('the absence of a sharp boundary', 'vagueness'),
                   ('a case the word neither fits nor fails', 'borderline'),
                   ('the argument that runs by single steps', 'sorites'),
                   ('the band of cases around the clear ones', 'penumbra'),
                   ('the rule that every statement is true or false', 'bivalence'),
                   ('the view that the line exists and is unknown', 'epistemicism'),
                   ('one way of drawing the line precisely', 'sharpening'),
                   ('the point at which a rule changes its answer', 'cutoff'),
                   ('a gradual change instead of a step', 'taper'),
                   ('a definition imposed rather than found', 'stipulation'),
                   ('as the clearest possible example', 'paradigmatically')],
         'gram': [('______ of the applications was assessed; not one.', 'None'),
                  ('______ of the applications were not assessed.', 'Some'),
                  ('The officer may reduce ______ the figure, not the award.', 'only'),
                  ('______ the officer may reduce the figure; nobody else may.', 'Only'),
                  ('He ______ read the report nor signed the minute.', 'neither'),
                  ('The applicant ______ not withdraw in order to appeal.', 'need'),
                  ('The two cutoffs ______ published in March.', 'were'),
                  ('Do you know where the taper ______?', 'started')],
         'mini': [('The sorites argument concludes that',
                   ('one grain is a heap',
                    'ten thousand grains are not a heap',
                    'heaps do not exist',
                    'the premises are false'),
                   1,
                   'By repeated application of the second premise.'),
                  ('The second premise cannot simply be dropped because',
                   ('it is a theorem',
                    'it is the property that makes a vague word usable',
                    'the ancients accepted it',
                    'it follows from bivalence'),
                   1,
                   'A word altering with one grain could not be learnt.'),
                  ('Epistemicism costs its holder',
                   ('bivalence',
                    'a fact about grains that no observation could reveal',
                    'a precise degree of truth',
                    'the validity of the argument'),
                   1,
                   'The sharp line exists and is unknowable.'),
                  ('Pluto was reclassified in 2006 because',
                   ('it was found to be smaller than thought',
                    'a definition was adopted that it fails in one respect',
                    'its orbit was recomputed',
                    'Eris was found to be a planet'),
                   1,
                   'It fails the condition about clearing its neighbourhood.'),
                  ('A sharp cutoff in a benefits rule',
                   ('removes the hard case',
                    'moves the hard case and makes decisions checkable',
                    'increases discretion',
                    'cannot be published'),
                   1,
                   'The applicant a pound above the line is in the same position as the one '
                   'below.'),
                  ('A taper is best described as',
                   ('a dissolution of the paradox',
                    'a reduction in the size of the injustice',
                    'a form of discretion',
                    'a stipulation'),
                   1,
                   'It has two endpoints and the objection recurs at each.')]},
 'tip': 'Find one rule in your own life that turns on a single figure, and work out what happens '
        'to the person a unit on the wrong side of it. If the loss is large and the difference '
        'is small, you have found a cliff, and the question to ask of whoever wrote the rule is '
        'not whether the figure is right but whether it could be a taper instead.'}

