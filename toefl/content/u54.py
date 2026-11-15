# -*- coding: utf-8 -*-
"""Unit 54 - Algorithms, Fairness and Audit.

Cycle 4 is the fairness impossibility result. Three conditions are
set out - calibration, equality of the false positive rate,
equality of the false negative rate - with the party each one
protects, and the theorem proved independently in 2016 by
Kleinberg, Mullainathan and Raghavan and by Chouldechova is that
where base rates differ between groups the three are jointly
unattainable, the only exceptions being a perfect predictor and
equal base rates. The COMPAS dispute is the illustration: vendor
and critics each demonstrated a true proposition, and the argument
was about which demand a court must satisfy rather than about
arithmetic. What follows is a requirement of explicitness, since a
choice about the distribution of error is taken whenever a
threshold is set.

Cycle 5 grants the theorem and refuses the inference that fairness
is incoherent: an impossibility result establishes that a choice
must be made, which is what institutions do openly. The serious
obstacle is measurement - a protected attribute survives its own
removal, because residence, referring agency, previous contact and
tenancy history reconstruct it jointly - so only the outcome can
be assessed. Hence publication of the whole classification table
by group with the criterion chosen, and hence the concession the
objection cannot avoid: that table needs the protected attribute
of every individual in it, and collecting exactly that is
restricted by the equality legislation of several jurisdictions.

Cycle 3 is the England examination grading of 2020, where the
formula was published, simple and arithmetically correct, and the
injustice entered with the inputs - which separates opacity from
unfairness before the theorem arrives."""

UNIT = {'n': 54,
 'vol': 6,
 'level': 'C1',
 'title': 'Algorithms, Fairness and Audit',
 'grammar': 'Qualification and scope: only, even, at least',
 'field': 'proxy, disparity, threshold',
 'names': ('Kleinberg', 'Mullainathan', 'Raghavan', 'Chouldechova'),
 'opener_line': 'This unit is about a decision that cannot be avoided. Three reasonable demands '
                'are made of any system that scores people, and a result proved twice in 2016 '
                'shows that where the underlying rates differ between groups, no system can meet '
                'all three. Cycle 5 then asks what an audit can establish about which of the '
                'three a given system has quietly given up, and what such an audit costs.',
 'subs': ['When a system decides',
          'What the impossibility result says',
          'What an audit can reach'],
 'icons': ['chart', 'brief', 'brain'],
 'acad': [('incommensurable', 'not measurable against each other'),
          ('jointly', 'together, and not one at a time'),
          ('mutually', 'each with respect to the other'),
          ('arbitrarily', 'by a choice no reason supports'),
          ('provably', 'in a way that can be demonstrated formally'),
          ('demonstrably', 'in a way anybody can check'),
          ('contingently', 'as things happen to be, not as they must be'),
          ('respectively', 'each with the one named in the same order'),
          ('invariably', 'in every case without exception'),
          ('uniformly', 'to the same degree throughout'),
          ('disproportionate', 'larger than the share would warrant'),
          ('nominally', 'in name, whatever the substance'),
          ('formally', 'as a matter of proof rather than practice'),
          ('correspondingly', 'to a matching degree')],
 'fieldwords': [('proxy', 'a measured thing standing in for the one that matters'),
                ('disparity', 'a difference in outcome between groups'),
                ('parity', 'equality of some stated quantity across groups'),
                ('recidivism', 'the reoffending a risk score tries to predict'),
                ('classifier', 'a rule that sorts cases into two boxes'),
                ('predictor', 'the variable the rule reads'),
                ('specificity', 'how often the rule clears the innocent'),
                ('opacity', 'the state of a model nobody can inspect'),
                ('interpretability', 'how far a model can be explained at all'),
                ('automated', 'carried out by the system without a person'),
                ('profiling', 'judging a person by a group they fall into'),
                ('scoring', 'the assignment of a number to each case'),
                ('allocative', 'to do with who gets what, rather than who is named'),
                ('granular', 'broken down into small units'),
                ('opaque', 'impossible to see into'),
                ('unattainable', 'not reachable at the same time as something else')],
 'collocs': [('a false positive', 'a wrong accusation'),
             ('a false negative', 'a miss'),
             ('the base rate', 'how common the thing is to begin with'),
             ('cut both ways', 'to tell against each side'),
             ('a trade-off', 'a gain bought with a loss'),
             ('on balance', 'weighing everything together'),
             ('at face value', 'without looking behind it'),
             ('by and large', 'generally, with exceptions'),
             ('the benefit of the doubt', 'belief where proof is lacking'),
             ('a blunt instrument', 'a tool too crude for the job')],
 'stance': [('the result is a theorem', 'not a matter of opinion'),
            ('only in the sense that', 'narrowing an admission'),
            ('at least where', 'bounding a claim by a condition'),
            ('the choice cannot be avoided', 'marking an unavoidable decision'),
            ('nothing follows about', 'blocking a general conclusion')],
 'nuance': [('parity / accuracy', 'equal across groups / right on average'),
            ('proxy / cause', 'what is measured / what matters'),
            ('false positive / false negative', 'wrongly flagged / wrongly cleared')],
 'candos': ['I can place only, even and at least where the meaning requires.',
            'I can explain why two fairness criteria cannot both hold.',
            'I can say who bears the error under each rule.',
            'I can describe an audit that would detect a disparity.',
            'I can state what a proof does not settle.',
            'I can argue for publishing a figure that embarrasses me.'],
 'vocab_talk': ['Has a decision about you ever been taken by a system rather than a person?',
                'What is the difference between being right on average and being fair?',
                'Describe a measure that stands in for something it is not.',
                'Who should see the figures behind an automated decision?'],
 'again': ['threshold',
           'calibration',
           'audit',
           'auditable',
           'proxy',
           'sensitivity',
           'covariate',
           'confounder'],
 'family': ('classify',
            [('classifier', 'noun', 'the classifier reads nine variables'),
             ('classification', 'noun', 'the classification is published by group'),
             ('misclassification', 'noun', 'misclassification falls unequally across groups')]),
 'r1': {'sub': 'When a system decides',
        'skill': ('Nouns, adjectives and adverbs from one root',
                  ['Nouns of process take -ion or -ation; of quality, -ity, -ence or -ness.',
                   'An adjective from a verb takes -ed, -ive or -able, and the adverb adds -ly '
                   'to the adjective.',
                   'Decide the word class from the grammar before the meaning.']),
        'guided_text': 'A scoring system does not contain opinions about anybody. It contains a '
                       'list of ------les, a weight on each, and a ------old above which a case '
                       'is flagged. That is the whole of it, and it is also why the usual '
                       'defence is beside the point: nobody needs to have intended anything for '
                       'the ------e to fall unevenly. The weights are chosen to predict the past '
                       'as closely as possible, so a system trained on decisions that were '
                       '------ly made will reproduce them -----fully, and the better it is at '
                       'its stated task the more exactly it will do so.',
        'guided': ['variab', 'thresh', 'outcom', 'uneven', 'faith'],
        'guided_hint': '---les is variables — the slot follows a list of, so it needs a plural '
                       'noun.',
        'exam_text': 'Fairness turns out to be several things that cannot be had at once. A '
                     'score is --------ed if, among everybody given the same score, the same '
                     '-------ion turns out to offend; it has equal false -----ive rates if, '
                     'among those who do not offend, the same ------tion is flagged in each '
                     'group; and it has equal false negative rates if the misses are -----ly '
                     'distributed. Each of the three is a reasonable thing to ask for. The '
                     '---ward fact, which is a theorem and not an ----ion, is that where the '
                     'underlying rates differ between two groups, no -------ier can satisfy all '
                     'three at the same time, and the only ------ions are a perfect predictor '
                     'and equal base rates. So the question is not whether a system is fair. It '
                     'is which of the three you have -----ed to give up, and whether anybody '
                     'outside the room was told.',
        'exam': ['calibrat',
                 'proport',
                 'posit',
                 'propor',
                 'equal',
                 'awk',
                 'opin',
                 'classif',
                 'except',
                 'decid']},
 'r2': {'sub': 'Why the criteria conflict',
        'skill': ('Reading a specification against a procurement objection',
                  ['A specification lists what the supplier must publish. An objection usually '
                   'accepts the aim.',
                   'Look for the figure each party wants and the one neither has asked for.',
                   'A question about the reply wants the ground given, not the tone.']),
        'docs': [('notice',
                  'Hollowmere Council · invitation to tender, automated triage for housing '
                  'applications',
                  ['# What the system does',
                   'Scores every application for priority and refers the top decile to a '
                   'caseworker within two working days.',
                   '# What the supplier must publish, quarterly',
                   '* The proportion referred, and the proportion of referrals the caseworker '
                   'upholds, by ward.',
                   '* The variables the model reads, in a list a reader can check against the '
                   'application form.',
                   '# What the supplier must not do',
                   '* Use any variable the council has not published, or retrain the model '
                   'without notice.',
                   '# Appeal',
                   '* Any applicant may require a caseworker decision instead of a score, once, '
                   'without giving a reason.',
                   '# Contract length',
                   '* Three years, with an annual review against the published figures.'],
                  'notice'),
                 ('email',
                  'd.rasmussen@hollowmere.gov.uk',
                  'procurement@hollowmere.gov.uk',
                  '04/06/2034',
                  'Tender specification — the figures we are asking for will not show the '
                  'problem',
                  ['Dear colleagues,',
                   '',
                   'I have read the specification twice and it is better than anything',
                   'we have put out before. The variable list, the appeal and the',
                   'retraining clause are all right, and I would sign it today if the',
                   'figures were the ones that matter.',
                   '',
                   'We are asking for the proportion referred and the proportion of',
                   'referrals upheld, by ward. Both are useful and neither can show',
                   'the failure I would expect. Suppose the model is harder on one',
                   'kind of applicant. The referral rate by ward may be identical',
                   'across the borough, because a model can hit the same total in',
                   'each ward while flagging the wrong people inside it.',
                   '',
                   'What would show it is the figure nobody has asked for: among the',
                   'applicants a caseworker later judged to be in genuine priority',
                   'need, what proportion did the model fail to refer, by group. That',
                   'is a miss rate, and misses are the errors that fall on applicants',
                   'rather than on us.',
                   '',
                   'Dolores Rasmussen, Housing Policy'])],
        'guided': [('What does the system do with the top decile?',
                    ('Rejects it',
                     'Refers it to a caseworker within two working days',
                     'Publishes it by ward',
                     'Scores it again'),
                    1,
                    'The score decides which applications reach a person and how fast.'),
                   ('What must the supplier publish quarterly?',
                    ('The source code',
                     'The proportion referred and upheld, by ward, and the variable list',
                     'The names of the applicants',
                     'The contract value'),
                    1,
                    'The variable list must be checkable against the application form.'),
                   ('What may the supplier not do?',
                    ('Score every application',
                     'Use an unpublished variable or retrain without notice',
                     'Refer to a caseworker',
                     'Publish by ward'),
                    1,
                    'Both prohibitions are about what the council cannot see.'),
                   ('What may an applicant require?',
                    ('A new model',
                     'A caseworker decision instead of a score, once, without a reason',
                     'A copy of the score',
                     'An annual review'),
                    1,
                    'The appeal costs the applicant no explanation.')],
        'exam': [('What does Dolores Rasmussen say about the specification?',
                  ('It is worse than previous ones',
                   'It is better than anything the council has issued before',
                   'It should be withdrawn',
                   'It is too long'),
                  1,
                  'She names the variable list, the appeal and the retraining clause as right.'),
                 ('What is her objection?',
                  ('The contract is too long',
                   'The figures requested cannot show the failure she expects',
                   'The appeal is too narrow',
                   'The variable list is incomplete'),
                  1,
                  'Both figures are useful and neither is diagnostic.'),
                 ('Why might the referral rate by ward look identical?',
                  ('Because the wards are similar',
                   'Because a model can hit the same total in each ward while flagging the wrong '
                   'people inside it',
                   'Because the threshold is fixed',
                   'Because caseworkers correct it'),
                  1,
                  'A total can be right while its composition is wrong.'),
                 ('What figure does she ask for?',
                  ('The proportion of referrals upheld',
                   'Among applicants later judged to be in priority need, the proportion the '
                   'model failed to refer, by group',
                   'The variable weights',
                   'The quarterly totals'),
                  1,
                  'She calls that a miss rate, and misses fall on applicants.'),
                 ('Why does she single out misses?',
                  ('They are easier to count',
                   'They are the errors that fall on applicants rather than on the council',
                   'They are more common',
                   'They are in the contract'),
                  1,
                  'The distinction is about who bears the error.'),
                 ('What does she say she would do if the figures were right?',
                  ('Ask for a longer contract',
                   'Sign the specification today',
                   'Refer the matter upward',
                   'Require a second supplier'),
                  1,
                  'Her objection is narrow and she says so.'),
                 ('Which clause does her letter leave untouched?',
                  ('The appeal', 'The quarterly figures', 'The contract length', 'The threshold'),
                  0,
                  'She endorses the appeal, the variable list and the retraining clause.')]},
 'r3': {'sub': 'When a formula replaces a judgement',
        'title': 'The Summer Nobody Sat an Examination',
        'words': 299,
        'skill': ('Reading a case where the model was not the problem',
                  ['The constraint comes first: what the regulator had to do and why.',
                   'Then what the formula did, and to whom.',
                   'A question about the ending wants what the case does not show.']),
        'paras': ['The cancellation of the 2020 examinations that determine admission to English '
                  'universities left a regulator with the obligation of awarding grades to some '
                  'three hundred thousand candidates who had sat nothing. Its position was '
                  'accordingly a constrained one: no assessment had taken place, and the only '
                  'information in existence was an estimate supplied by interested parties. '
                  'Teachers submitted a predicted grade together with a ranking of their pupils, '
                  'and the rankings were then subjected to an adjustment derived from each '
                  'centre’s attainment in earlier years. The objective was the prevention of the '
                  'inflation that unadjusted predictions would demonstrably have produced; the '
                  'instrument chosen was the retention of every centre’s historical '
                  'distribution.',
                  'The consequences followed from that instrument. A candidate at a centre whose '
                  'cohorts had underperformed for three successive years was displaced downward '
                  'irrespective of any information about her, while a candidate in a small '
                  'class, where the historical adjustment operated weakly or not at all, '
                  'retained her teacher’s figure. Small classes are disproportionately a feature '
                  'of fee-paying provision. Two fifths of teacher grades were reduced, the '
                  'reduction concentrated in large comprehensive cohorts, and the entire '
                  'arrangement was published with its reasoning intact.',
                  'Withdrawal followed within four days and the teacher grades were reinstated. '
                  'Precision about the lesson repays effort. Nothing in the episode turned on '
                  'inscrutability: the formula was public, arithmetically unexceptionable and '
                  'faithful to its own specification. The injustice entered with the inputs, and '
                  'with the determination to treat a school’s past attainment as evidence about '
                  'a present candidate, and the choice cannot be avoided by improvements in '
                  'engineering, since any system constructed for the prediction of the past will '
                  'reproduce its contents. The distinction between opacity and injustice is the '
                  'whole of what the episode establishes, and it was established at the expense '
                  'of a cohort.'],
        'guided': [('Why was a formula needed at all?',
                    ('The teachers refused to grade',
                     'The examinations had been cancelled and grades still had to be awarded',
                     'The regulator wanted lower grades',
                     'The schools had no records'),
                    1,
                    'Some three hundred thousand candidates had sat nothing.'),
                   ('What did the teachers supply?',
                    ('A grade only',
                     'A predicted grade and a ranking of their pupils',
                     'A ranking only',
                     'Nothing'),
                    1,
                    'The ranking is what the formula then adjusted.'),
                   ('What was the formula built from?',
                    ('The pupils’ earlier marks',
                     'Each school’s results in earlier years',
                     'A national average',
                     'The teachers’ own grades'),
                    1,
                    'Which is what holding a centre close to its history means.'),
                   ('What was the stated intention?',
                    ('To reward strong schools',
                     'To prevent the inflation the predicted grades would have produced',
                     'To reduce the number of university places',
                     'To test the formula'),
                    1,
                    'The predicted grades on their own would plainly have inflated.')],
        'exam': [('What happened to a pupil at a school with three bad years?',
                  ('Her teacher’s grade stood',
                   'She was moved down irrespective of anything known about her',
                   'She was moved up',
                   'She was given an average'),
                  1,
                  'The adjustment read the centre rather than the pupil.'),
                 ('Why did a pupil in a small class keep her teacher’s figure?',
                  ('Small classes are better taught',
                   'The historical adjustment was applied weakly or not at all',
                   'Small classes were exempt by law',
                   'Her teacher appealed'),
                  1,
                  'And small classes are commoner in fee-paying schools.'),
                 ('What proportion of teacher grades was lowered?',
                  ('A tenth', 'Three quarters', 'Two fifths', 'All of them'),
                  2,
                  'The reduction fell hardest on large comprehensive cohorts.'),
                 ('How long did the policy last?',
                  ('Four days', 'Four weeks', 'One term', 'A year'),
                  0,
                  'The teacher grades were then restored.'),
                 ('What does the writer say the case did not turn on?',
                  ('The inputs',
                   'An inscrutable model',
                   'The published reasoning',
                   'The teachers’ rankings'),
                  1,
                  'The formula was public, simple and arithmetically correct.'),
                 ('Where does the writer locate the unfairness?',
                  ('In the arithmetic',
                   'In the inputs, and in treating a school’s past as evidence about a pupil',
                   'In the secrecy of the model',
                   'In the teachers’ predictions'),
                  1,
                  'Which is a decision rather than a defect.'),
                 ('What does the phrase the choice cannot be avoided signal?',
                  ('That the formula was badly built',
                   'That no engineering removes the decision about whose past counts',
                   'That the policy was illegal',
                   'That the regulator had no alternative method'),
                  1,
                  'A system built to predict the past reproduces what the past contained.'),
                 ('Why does the writer mention that the arrangement was published?',
                  ('To praise the regulator',
                   'Because transparency did not prevent the outcome',
                   'To date the policy',
                   'To explain the appeal'),
                  1,
                  'Opacity is not the fault being diagnosed here.'),
                 ('Which would the writer most likely accept?',
                  ('Publishing a model is sufficient for fairness',
                   'A correct and public formula can still encode an unjust decision about what '
                   'counts as evidence',
                   'Teacher grades are always accurate',
                   'Historical data should never be used'),
                  1,
                  'The episode separates opacity from injustice.')]},
 'r4': {'sub': 'What the impossibility result says',
        'title': 'Three Reasonable Demands',
        'words': 425,
        'skill': ('Reading a proof that three demands cannot be met at once',
                  ['The three conditions come first. Note whom each one protects.',
                   'The theorem follows, with its two exceptions.',
                   'A question about the ending wants what the result requires.']),
        'paras': ['Three demands are made of a risk score, each with an obvious claim on '
                  'anybody’s assent. Calibration requires that among all defendants assigned a '
                  'given score the same proportion subsequently offends, so that a number means '
                  'what it says irrespective of the group of the person carrying it. Equality of '
                  'the false positive rate requires that among those who do not go on to offend, '
                  'the proportion wrongly flagged is the same in every group, and equality of '
                  'the false negative rate makes the corresponding demand about the misses. The '
                  'first condition protects the user of the score from a number that is locally '
                  'misleading, and the other two protect the person scored from a '
                  'disproportionate share of the errors. The result established independently in '
                  '2016 by Kleinberg, Mullainathan and Raghavan and by Chouldechova is that the '
                  'three conditions are jointly unattainable: where the base rates of two groups '
                  'differ, no classifier satisfies all three, and the only exceptions are a '
                  'predictor of perfect accuracy and base rates that are equal.',
                  'The demonstration is arithmetical and short, which is worth emphasis: the '
                  'incompatibility is a theorem about proportions rather than a finding about '
                  'one system, and no improvement in data collection or interpretability will '
                  'repeal it. The dispute that brought the result into public argument concerned '
                  'a recidivism instrument used in American courts: its vendor demonstrated '
                  'calibration across groups and its critics a substantial disparity in the '
                  'false positive rate. Both demonstrations were correct. The argument had the '
                  'appearance of a factual disagreement and was in substance a disagreement '
                  'about which of two incommensurable demands a criminal court is obliged to '
                  'satisfy. Neither party had committed an error of computation, and neither had '
                  'stated the commitment its own criterion carried.',
                  'What follows from the impossibility is a requirement of explicitness rather '
                  'than despair. A choice among the three conditions is a decision about the '
                  'distribution of error, and such a decision is taken whenever a threshold is '
                  'set, whether or not anybody records it. Calibration is the natural demand '
                  'where a score allocates a benefit and the difference in base rates reflects '
                  'something the intervention can alter; equality of the false negative rate is '
                  'natural where a miss falls on a person and a false alarm on an institution. '
                  'The position no longer available is that of the designer who announces that '
                  'his instrument is fair, since fairness has been shown to be several things, '
                  'and the passage that follows asks what an audit can establish about which of '
                  'them a system has given up.'],
        'guided': [('What does calibration require?',
                    ('That every group is flagged equally often',
                     'That among all cases given a score, the same proportion offends',
                     'That the misses are equally distributed',
                     'That the predictor is perfect'),
                    1,
                    'So that a number means what it says whoever carries it.'),
                   ('Whom does calibration protect?',
                    ('The person scored',
                     'The user of the score, from a number that is locally misleading',
                     'The vendor',
                     'The court'),
                    1,
                    'The other two conditions protect the person scored.'),
                   ('What are the only exceptions to the result?',
                    ('A large sample and a published model',
                     'A predictor of perfect accuracy and equal base rates',
                     'A court order and a published threshold',
                     'There are none'),
                    1,
                    'Otherwise the three conditions are jointly unattainable.')],
        'exam': [('Why does the writer call the incompatibility a theorem?',
                  ('Because it was published in 2016',
                   'Because it concerns proportions rather than any particular system',
                   'Because the vendor accepted it',
                   'Because the proof is long'),
                  1,
                  'No improvement in data collection will repeal it.'),
                 ('What did the vendor and the critics each demonstrate?',
                  ('That the other was mistaken',
                   'Calibration across groups, and a substantial disparity in the false positive '
                   'rate',
                   'That the instrument was opaque',
                   'That the base rates were equal'),
                  1,
                  'Both demonstrations were correct.'),
                 ('What was the dispute in substance about?',
                  ('An error of computation',
                   'Which of two incommensurable demands a court must satisfy',
                   'The size of the sample',
                   'The commercial interest behind it'),
                  1,
                  'It merely had the appearance of a factual disagreement.'),
                 ('When is a decision about the distribution of error taken?',
                  ('Only when a court orders one',
                   'Whenever a threshold is set, whether or not anybody records it',
                   'Only at the design stage',
                   'Never, in practice'),
                  1,
                  'Which is why the writer asks for explicitness rather than despair.'),
                 ('When is equality of the false negative rate the natural demand?',
                  ('Where the base rates are equal',
                   'Where the score allocates a benefit',
                   'Where the predictor is perfect',
                   'Where a miss falls on a person and a false alarm falls on an institution'),
                  3,
                  'The asymmetry of the two errors decides which criterion applies.')]},
 'r5': {'sub': 'What an audit can reach',
        'title': 'The Figure Nobody Wants to Publish',
        'words': 416,
        'skill': ('Reading an objection that accepts the proof',
                  ['The objection grants the theorem and denies the conclusion drawn from it.',
                   'Then the practical obstacle, and the practice that answers it.',
                   'The concession at the end is the hard part.']),
        'paras': ['The impossibility is granted in the objection that follows, and the inference '
                  'commonly drawn from it is not. From the observation that the three conditions '
                  'cannot hold together it has been concluded that fairness is incoherent and '
                  'that the whole enquiry should be abandoned to the discretion of whoever owns '
                  'the system. That conclusion does not follow. An impossibility result '
                  'establishes that a choice must be made, and a choice about which group shall '
                  'bear which error is of precisely the kind that institutions make openly and '
                  'defend afterwards. The analogy is with a budget rather than with a paradox: '
                  'nobody concludes from the scarcity of money that expenditure cannot be '
                  'discussed. What the result removes is not the possibility of justification '
                  'but the possibility of a system whose fairness requires no justification at '
                  'all.',
                  'The serious obstacle lies elsewhere, in the measurement. Removing a protected '
                  'attribute from the list of predictors accomplishes nothing where its '
                  'information survives in the remainder, and in any administrative dataset of '
                  'reasonable richness it invariably does: residence, the identity of a '
                  'referring agency, the pattern of previous contact with the institution and '
                  'the length of a tenancy history are each correlated with the attribute and '
                  'jointly reconstruct it with considerable precision. The reconstruction is no '
                  'artefact of unusual models but a property of the information in the record, '
                  'and a simpler classifier reproduces it as reliably as a complicated one. The '
                  'consequence is that the exclusion of a variable is no defence and the '
                  'inclusion of one is no confession, and the only assessment with any content '
                  'is of the outcome rather than of the specification.',
                  'Hence the practice the objection recommends, which is modest and unpopular in '
                  'equal measure: publication of the whole classification table by group, at a '
                  'granularity that permits arithmetic, together with the criterion the designer '
                  'has chosen and an account of the error distribution that choice produces. A '
                  'disparity then becomes a figure rather than an allegation, and the argument '
                  'moves from intention, about which nothing can be established, to consequence, '
                  'about which a great deal can. The concession the objection must make is '
                  'substantial and is seldom made cheerfully, since a table of that kind cannot '
                  'be assembled without the protected attribute of every individual in the '
                  'sample, and the collection of exactly that information is restricted or '
                  'forbidden by the equality legislation of several jurisdictions, with the '
                  'consequence that the instrument of the audit is held to be the instrument of '
                  'the injury.'],
        'guided': [('What does the objection grant?',
                    ('That the theorem is mistaken',
                     'The impossibility itself',
                     'That fairness is incoherent',
                     'That the system owner should decide'),
                    1,
                    'What it denies is the inference drawn from the theorem.'),
                   ('What analogy does the writer offer?',
                    ('A paradox', 'A budget', 'A court', 'A measurement'),
                    1,
                    'Nobody concludes from the scarcity of money that spending cannot be '
                    'discussed.'),
                   ('Why does removing a protected attribute accomplish nothing?',
                    ('The models are too complex',
                     'Its information survives in the remaining variables',
                     'The law forbids it',
                     'The attribute is unmeasured'),
                    1,
                    'Several ordinary variables jointly reconstruct it with considerable '
                    'precision.')],
        'exam': [('What has been concluded from the impossibility, in the view the writer '
                  'rejects?',
                  ('That a choice must be made openly',
                   'That fairness is incoherent and the enquiry should be abandoned',
                   'That base rates should be made equal',
                   'That audits are unnecessary'),
                  1,
                  'The writer says that conclusion does not follow.'),
                 ('What does the writer say an impossibility result establishes?',
                  ('That the subject is confused',
                   'That no system can be used',
                   'That a choice must be made',
                   'That the data are inadequate'),
                  2,
                  'And institutions make such choices openly and defend them afterwards.'),
                 ('What follows from the reconstruction of an attribute by other variables?',
                  ('That models should be simpler',
                   'That excluding a variable is no defence and including one is no confession',
                   'That audits are impossible',
                   'That the attribute should be published'),
                  1,
                  'Only the outcome, rather than the specification, can be assessed.'),
                 ('What does the objection recommend?',
                  ('A prohibition on proxies',
                   'Publication of the whole classification table by group, with the criterion '
                   'chosen',
                   'An independent reviewer',
                   'Simpler models'),
                  1,
                  'At a granularity that permits arithmetic.'),
                 ('What concession must the objection make?',
                  ('That the theorem is false',
                   'That such a table requires the protected attribute, whose collection several '
                   'jurisdictions restrict',
                   'That disparities cannot be measured',
                   'That intention matters after all'),
                  1,
                  'The instrument of the audit is held to be the instrument of the injury.')]},
 'l1': {'sub': 'When a system decides',
        'caption': 'Two colleagues after a procurement meeting',
        'skill': ('Hearing somebody reject a defence of a system',
                  ['The usual defence is stated and then dismantled. Follow the reason.',
                   'Listen for what she says the system is actually optimising.',
                   'The item about the better system is the one the conversation is for.']),
        'warm': [('Man: Nobody programmed any prejudice into it.',
                  ('Nobody needed to. It learned the old decisions.',
                   'Yes, somebody did.',
                   'Nine variables.',
                   'A threshold.'),
                  0,
                  'The weights are fitted to the past, whatever the past was.'),
                 ('Man: But it is more accurate than the panel was.',
                  ('Accurate at reproducing the panel, which is the problem.',
                   'No, it is less accurate.',
                   'Yes, much more.',
                   'On balance.'),
                  0,
                  'Accuracy against a biased record is not the virtue it sounds.'),
                 ('Man: So a worse system would be fairer?',
                  ('Sometimes, and that is the sentence nobody wants to hear.',
                   'No, never.',
                   'Yes, always.',
                   'Three criteria.'),
                  0,
                  'The uncomfortable implication of the whole argument.')],
        'script': [('Woman',
                    'The defence they gave in there is the one I hear every time, and it is not '
                    'a defence.'),
                   ('Man', 'That nobody put prejudice into the model.'),
                   ('Woman',
                    'Nobody did. I believe them. There is no line in that code that mentions '
                    'anybody’s background, and it makes no difference whatever.'),
                   ('Man', 'Why not?'),
                   ('Woman',
                    'Because of what the thing was built to do. It was fitted to eleven years of '
                    'decisions made by a panel of human beings, and its whole purpose is to '
                    'reproduce those decisions as closely as it can. If the panel was harder on '
                    'one kind of applicant, the model has learned that as faithfully as it has '
                    'learned everything else.'),
                   ('Man', 'They did say it is more accurate than the panel.'),
                   ('Woman',
                    'More accurate at predicting what the panel would have said. That is the '
                    'measure they used. It is a perfectly good measure of one thing and it is '
                    'not a measure of whether the decisions were right.'),
                   ('Man', 'So the better it gets, the worse this gets.'),
                   ('Woman',
                    'In this respect, yes, and that is the sentence that makes procurement '
                    'meetings uncomfortable. A model that reproduces the old pattern at '
                    'ninety-five per cent is doing more damage than one that manages seventy, '
                    'because the seventy leaves room for somebody to notice.'),
                   ('Man', 'That cannot be the recommendation.'),
                   ('Woman',
                    'It is not. The recommendation is that we stop arguing about intentions and '
                    'ask for two things. What the system was trained to predict, in one '
                    'sentence. And the figures broken down by group, published, every quarter. '
                    'Neither of those is a philosophical question and neither was in the '
                    'contract they showed us.')],
        'items': [('What defence does the woman say she hears every time?',
                   ('That the model is accurate',
                    'That nobody put prejudice into the model',
                    'That the panel was fair',
                    'That the figures are confidential'),
                   1,
                   'She believes it and says it makes no difference.'),
                  ('What was the model fitted to?',
                   ('A random sample',
                    'Eleven years of decisions made by a human panel',
                    'A national benchmark',
                    'The applicants’ own accounts'),
                   1,
                   'Its purpose is to reproduce those decisions as closely as possible.'),
                  ('What is the model more accurate at?',
                   ('Predicting the outcome',
                    'Predicting what the panel would have said',
                    'Detecting fraud',
                    'Ranking applicants'),
                   1,
                   'Which she calls a good measure of one thing and not of whether the decisions '
                   'were right.'),
                  ('Why does she say a more accurate model can do more damage?',
                   ('It is more expensive',
                    'A model that reproduces the old pattern at ninety-five per cent leaves '
                    'nobody room to notice',
                    'It is harder to audit',
                    'It is used more widely'),
                   1,
                   'The seventy per cent version leaves room for somebody to notice.'),
                  ('What two things does she recommend asking for?',
                   ('A new model and a new panel',
                    'What the system was trained to predict, and the figures by group every '
                    'quarter',
                    'An ethics review and a contract clause',
                    'A smaller threshold and an appeal'),
                   1,
                   'Neither is a philosophical question.'),
                  ('What does she say about those two requests?',
                   ('They were refused',
                    'Neither was in the contract they were shown',
                    'They are too expensive',
                    'They are standard practice'),
                   1,
                   'Which is why she raises them after the meeting rather than in it.'),
                  ('What does she say makes procurement meetings uncomfortable?',
                   ('The cost of the system',
                    'That a better model can be worse in this respect',
                    'The absence of a contract',
                    'The length of the record'),
                   1,
                   'She calls it the sentence nobody wants to hear.')]},
 'l2': {'sub': 'Why the criteria conflict',
        'caption': 'A briefing to councillors before the tender goes out',
        'poster': ['Top decile → caseworker in two days',
                   'Publish quarterly: referred, upheld, by ward',
                   'No unpublished variables · no silent retraining'],
        'skill': ('Hearing an officer accept a correction that costs him something',
                  ['He restates the objection in figures before conceding it.',
                   'Note which figure he adds and what it will embarrass.',
                   'The item about the base rate is the one that carries the lesson.']),
        'warm': [('Woman: Is the ward figure useless?',
                  ('Useful, and not diagnostic. Those are different.',
                   'Yes, entirely useless.',
                   'By ward.',
                   'Every quarter.'),
                  0,
                  'A total can be right while its composition is wrong.'),
                 ('Woman: Which figure will you add?',
                  ('The miss rate by group.',
                   'The referral rate.',
                   'The contract value.',
                   'A second supplier.'),
                  0,
                  'Misses are the errors that fall on applicants.'),
                 ('Woman: Will that figure look bad?',
                  ('Almost certainly, and that is the argument for it.',
                   'No, it will look fine.',
                   'We will not know.',
                   'Three years.'),
                  0,
                  'A figure that cannot embarrass anybody is not an audit.')],
        'script': [('Man',
                    'Dolores is right and I want to put her objection in numbers, because it '
                    'took me two readings to see it. Suppose two wards each send us a thousand '
                    'applications and we refer a hundred from each. Identical referral rates, '
                    'and the specification as drafted would show us two tens and a clean bill of '
                    'health. Now suppose that in the first ward the hundred we referred are the '
                    'hundred who needed it, and in the second ward sixty of the hundred needed '
                    'it and forty did not, which means forty who did need it were not referred. '
                    'Same total. Same published figure. Completely different system. So the '
                    'figure we are adding is the one she asked for: among the applicants a '
                    'caseworker later judges to have been in genuine priority need, what '
                    'proportion did the model fail to refer, broken down by group. That is the '
                    'miss rate, and I want to be honest with the committee about two things. '
                    'First, it will almost certainly look bad in the first year, and a figure '
                    'that cannot embarrass anybody is not an audit. Second, it is harder to '
                    'compute than it sounds, because we only learn who was in genuine need when '
                    'a caseworker sees them, and the people the model did not refer are '
                    'precisely the people no caseworker sees. So the contract will also require '
                    'a random sample of the unreferred to be assessed anyway, at our expense, '
                    'which is about forty cases a quarter and is the only honest way to get the '
                    'denominator.')],
        'items': [('What does the officer say about Dolores’s objection?',
                   ('It is mistaken',
                    'She is right, and it took him two readings to see it',
                    'It arrived too late',
                    'It applies to one ward only'),
                   1,
                   'He restates it in numbers rather than summarising it.'),
                  ('In his example, what do the two wards have in common?',
                   ('The same base rate',
                    'The same referral total and the same published figure',
                    'The same caseworkers',
                    'The same variables'),
                   1,
                   'And completely different systems underneath.'),
                  ('In the second ward, how many who needed referral were missed?',
                   ('Sixty', 'Forty', 'A hundred', 'None'),
                   1,
                   'Forty of the hundred referred did not need it, so forty who did were left '
                   'out.'),
                  ('What figure is being added to the contract?',
                   ('The referral rate by group',
                    'The miss rate by group, among applicants later judged to be in priority '
                    'need',
                    'The number of appeals',
                    'The threshold by ward'),
                   1,
                   'Misses are the errors that fall on applicants.'),
                  ('What does he say about a figure that cannot embarrass anybody?',
                   ('It is cheaper to collect',
                    'It is not an audit',
                    'It should be published annually',
                    'It satisfies the committee'),
                   1,
                   'He expects the miss rate to look bad in the first year.'),
                  ('Why is the miss rate hard to compute?',
                   ('The groups are too small',
                    'The people the model did not refer are the people no caseworker sees',
                    'The caseworkers disagree',
                    'The data are confidential'),
                   1,
                   'Hence the random sample of the unreferred, at the council’s expense.')]},
 'l3': {'sub': 'When a formula replaces a judgement',
        'caption': 'A lecture on the summer of 2020',
        'board': ['No examinations · 300,000 candidates',
                  'Teacher grade + ranking → centre history',
                  'Two fifths lowered · small classes untouched',
                  'Published, simple, correct — and withdrawn'],
        'skill': ('Hearing a lecturer separate two complaints',
                  ['He states the constraint before the criticism.',
                   'He refuses one popular explanation and names another.',
                   'The item about the next case is the one the lecture is for.']),
        'warm': [('Woman: Was the formula secret?',
                  ('Not at all. You could read it that week.',
                   'Yes, entirely secret.',
                   'Two fifths.',
                   'Four days.'),
                  0,
                  'Opacity is not the fault being diagnosed.'),
                 ('Woman: Was it wrong arithmetically?',
                  ('It was correct, which is the uncomfortable part.',
                   'Yes, there was an error.',
                   'Nobody checked.',
                   'A ranking.'),
                  0,
                  'It did exactly what it had been designed to do.'),
                 ('Woman: So where was the injustice?',
                  ('In what it was asked to treat as evidence.',
                   'In the code.',
                   'In the publication.',
                   'Three hundred thousand.'),
                  0,
                  'A school’s past standing in for a present pupil.')],
        'script': [('Man',
                    'I want to use the summer of 2020 against two lazy arguments at once, one '
                    'from each side. Begin with the position the regulator was actually in, '
                    'because it is worth being fair to people before you disagree with them. No '
                    'examinations. Three hundred thousand candidates, university places attached '
                    'to their grades, and the only information in the building is what teachers '
                    'say their pupils would have achieved. Use those figures untouched and you '
                    'get an inflation so large that the grades stop carrying information, which '
                    'is a real harm and not an administrative inconvenience. So they built a '
                    'formula. It took the teacher’s ranking inside each class and pulled the '
                    'distribution towards the results that centre had produced in earlier years. '
                    'Now the first lazy argument: it was a black box. It was not. It was '
                    'published, it was arithmetic a sixth-former could follow, and it was '
                    'correct. The second lazy argument is the mirror image: that because it was '
                    'correct and public it must have been fair. A pupil whose school had three '
                    'poor years was marked down for the school, and a pupil in a class of six '
                    'kept whatever her teacher wrote, because the historical pull was too weak '
                    'to apply to six people. Classes of six are not evenly distributed across '
                    'the school system of this country. The system was unfair only in the sense '
                    'that matters: it was asked to treat a centre’s history as evidence about an '
                    'individual, and it did so faithfully. Four days later it was gone. And here '
                    'is what I want you to take from it, because nothing follows about the next '
                    'case from the fact that this one was withdrawn. The question to ask of any '
                    'such system is not whether you can read it. It is what it has been told to '
                    'count as evidence, and whether the person it is counted against was ever '
                    'asked.')],
        'items': [('What two arguments does the lecturer say he is using the case against?',
                   ('Two arguments from the same side',
                    'That it was a black box, and that being correct and public made it fair',
                    'That examinations are unnecessary',
                    'That teachers cannot predict grades'),
                   1,
                   'One from each side, in his phrase.'),
                  ('Why does he begin with the regulator’s position?',
                   ('To excuse the outcome',
                    'Because it is worth being fair to people before disagreeing with them',
                    'To criticise the teachers',
                    'To explain the timetable'),
                   1,
                   'He calls the inflation a real harm.'),
                  ('What would have followed from using the teacher figures untouched?',
                   ('A fairer result',
                    'An inflation so large that the grades stop carrying information',
                    'A legal challenge',
                    'No change at all'),
                   1,
                   'Which he refuses to call an administrative inconvenience.'),
                  ('What did the formula do to a teacher’s ranking?',
                   ('Replaced it',
                    'Pulled the distribution towards the centre’s earlier results',
                    'Published it',
                    'Averaged it nationally'),
                   1,
                   'The ranking inside the class was kept.'),
                  ('Why did a pupil in a class of six keep her teacher’s grade?',
                   ('The class was exempt',
                    'The historical pull was too weak to apply to six people',
                    'Her teacher appealed',
                    'Small classes score higher'),
                   1,
                   'And such classes are not evenly distributed across the school system.'),
                  ('In what sense does he say the system was unfair?',
                   ('It was badly coded',
                    'It was asked to treat a centre’s history as evidence about an individual',
                    'It was kept secret',
                    'It lasted four days'),
                   1,
                   'And it did so faithfully, which is the whole of his point.'),
                  ('What question does he say to ask of such a system?',
                   ('Whether you can read it',
                    'What it has been told to count as evidence, and whether the person was ever '
                    'asked',
                    'Who built it',
                    'How long it will last'),
                   1,
                   'Nothing follows about the next case from this one being withdrawn.')]},
 'l4': {'sub': 'What the impossibility result says',
        'caption': 'A lecture on three demands and one theorem',
        'board': ['Calibration: same score, same proportion offending',
                  'Equal false positives · equal false negatives',
                  'Unequal base rates → pick two at most',
                  'Exceptions: perfect predictor, equal base rates'],
        'skill': ('A lecture that proves something inconvenient',
                  ['The three demands first, and whom each one protects.',
                   'Then the theorem, and what it is not.',
                   'The last item asks what the result obliges a designer to do.']),
        'warm': [('Woman: Is this a flaw in one system?',
                  ('No. It is arithmetic. Every system faces it.',
                   'Yes, in one American product.',
                   'Three demands.',
                   'Equal base rates.'),
                  0,
                  'The result is about proportions, not about a product.'),
                 ('Woman: Could better data fix it?',
                  ('Only a perfect predictor would, and there is no such thing.',
                   'Yes, with more data.',
                   'With a published model.',
                   'Two of the three.'),
                  0,
                  'The other exception is equal base rates.'),
                 ('Woman: So what are we left to decide?',
                  ('Which of the three you give up, and who is told.',
                   'Whether to use a system at all.',
                   'The threshold only.',
                   'Nothing at all.'),
                  0,
                  'A choice about who bears the error.')],
        'script': [('Man',
                    'I am going to prove something to you that will annoy you, and I want you to '
                    'be clear that the annoyance is the correct response and that the proof is '
                    'still a proof. Three things are asked of a risk score. One: if two people '
                    'are given the same number, the same proportion of them should turn out to '
                    'offend, whatever group they belong to. That is calibration, and it protects '
                    'whoever reads the score, because a number that means one thing for you and '
                    'another thing for me is useless to a judge. Two: among the people who do '
                    'not go on to offend, the same proportion should be wrongly flagged in each '
                    'group. Three: among the people who do offend, the misses should be equally '
                    'spread. Those two protect the person being scored, and they protect against '
                    'different injuries, which is why you cannot collapse them. A wrong '
                    'accusation costs a man his liberty before he has done anything; a miss '
                    'costs somebody else their safety. Those are not the same harm, and no '
                    'average of the two is anybody at all. Now hold all three in your head, '
                    'because here is the theorem, proved twice in 2016 by people who had not '
                    'read each other. If the underlying rate differs between two groups, no '
                    'score satisfies all three. Not a badly built score. Any score. The only '
                    'escapes are a predictor that is never wrong and base rates that are exactly '
                    'equal, and in the world you will work in neither of those is on offer. So '
                    'the question you are paid to answer is never whether your system is fair. '
                    'It is which of the three you have given up, and whether you decided that or '
                    'whether it fell out of a threshold somebody set on a Thursday afternoon and '
                    'nobody wrote down. Both of those happen. Only one of them is a decision. A '
                    'system for which nobody chose a criterion still has one.')],
        'items': [('What does the lecturer say about the annoyance his proof causes?',
                   ('It shows the proof is wrong',
                    'It is the correct response, and the proof is still a proof',
                    'It is a sign of inattention',
                    'It will pass'),
                   1,
                   'He states both in his opening sentence, before the proof.'),
                  ('Whom does calibration protect?',
                   ('The person scored', 'Whoever reads the score', 'The vendor', 'Nobody'),
                   1,
                   'A number meaning different things by group is useless to a judge.'),
                  ('Why can the second and third demands not be collapsed?',
                   ('They are measured differently',
                    'They protect against different injuries',
                    'One is harder to compute',
                    'They apply to different systems'),
                   1,
                   'One concerns wrong accusations, the other misses.'),
                  ('What does he say about the two 2016 proofs?',
                   ('One corrected the other',
                    'They were produced by people who had not read each other',
                    'They were later withdrawn',
                    'They disagreed'),
                   1,
                   'Which is part of why he treats the result as settled.'),
                  ('What does he say the question is never?',
                   ('Which criterion was given up',
                    'Whether the system is fair',
                    'Who set the threshold',
                    'What the base rates are'),
                   1,
                   'And he distinguishes a decision from a threshold nobody wrote down.')]},
 'l5': {'sub': 'What an audit can reach',
        'caption': 'A reply from somebody who audits these systems',
        'board': ['Impossibility granted · incoherence denied',
                  'Drop a variable, keep the information',
                  'Publish the table by group, with the criterion',
                  'But the table needs the attribute the law restricts'],
        'skill': ('Hearing a practitioner accept a proof and refuse its moral',
                  ['She grants the theorem in one sentence.',
                   'Then the measurement problem, with the variables that cause it.',
                   'The last item is the concession she cannot avoid.']),
        'warm': [('Man: Does the theorem end the argument?',
                  ('It starts it. A choice has to be made by somebody.',
                   'Yes, there is nothing left to say.',
                   'Three criteria.',
                   'By group.'),
                  0,
                  'She compares it to a budget rather than a paradox.'),
                 ('Man: Can we just not collect the attribute?',
                  ('You can. The information stays in the other columns.',
                   'Yes, that solves it.',
                   'Postcode only.',
                   'A classifier.'),
                  0,
                  'Several ordinary variables rebuild it between them.'),
                 ('Man: What do you ask organisations for?',
                  ('The whole table, by group, and the criterion they chose.',
                   'The source code.',
                   'An apology.',
                   'A simpler model.'),
                  0,
                  'A disparity then becomes a figure rather than an allegation.')],
        'script': [('Woman',
                    'I audit these systems for a living and I accept every line of that lecture, '
                    'so let me tell you what I do with it, because the fashionable conclusion is '
                    'the wrong one. The fashionable conclusion is that fairness has been shown '
                    'to be incoherent and we should all go home. That is like saying a budget '
                    'proves that spending cannot be discussed. A choice has to be made, and '
                    'choices are what institutions are for. Here is the real difficulty, and it '
                    'is not the theorem. Organisations tell me they have removed the protected '
                    'characteristic from the model, as though that settled anything. It settles '
                    'nothing. In any administrative file worth modelling, the postcode, the '
                    'referring agency, the pattern of previous contact and the length of a '
                    'tenancy history will rebuild that characteristic between them to two '
                    'decimal places. So leaving a column out is not a defence and putting one in '
                    'is not a confession, and the only thing I can audit is what came out. Which '
                    'is a liberation, if you let it be, because I no longer have to prove what '
                    'was in anybody’s head. Which is why I ask for one thing. Publish the whole '
                    'table by group: who was flagged, who offended, who was missed, in numbers '
                    'small enough to divide. Publish the criterion you chose and say what it '
                    'cost. Do that and the argument stops being about whether anybody meant any '
                    'harm, which I cannot establish and neither can you, and starts being about '
                    'consequences, which I can count. And now the part I hate. You cannot build '
                    'that table unless you know the protected characteristic of every single '
                    'person in it, and collecting that is restricted or illegal in several of '
                    'the countries I work in. The instrument of the audit is treated as the '
                    'instrument of the injury, and until that is fixed I am auditing with one '
                    'hand. Twice in my career an organisation has published that table without '
                    'being asked, and both times the first year was embarrassing and the third '
                    'was not.')],
        'items': [('What does the auditor call the fashionable conclusion?',
                   ('That the theorem is false',
                    'That fairness is incoherent and everybody should go home',
                    'That audits are unnecessary',
                    'That models should be simpler'),
                   1,
                   'She compares it to concluding that a budget forbids discussion of spending.'),
                  ('What do organisations tell her, as though it settled something?',
                   ('That their model is published',
                    'That they have removed the protected characteristic from the model',
                    'That they audit annually',
                    'That their base rates are equal'),
                   1,
                   'She says it settles nothing at all, and explains why.'),
                  ('Which variables does she say rebuild the characteristic?',
                   ('Age and income',
                    'Postcode, referring agency, previous contact and tenancy length',
                    'The score and the threshold',
                    'None of them'),
                   1,
                   'Between them, to two decimal places.'),
                  ('What does she ask organisations to publish?',
                   ('Their source code',
                    'The whole table by group, the criterion chosen and what it cost',
                    'An apology and a plan',
                    'The names of the designers'),
                   1,
                   'In numbers small enough to divide.'),
                  ('What is the part she says she hates?',
                   ('That the theorem is true',
                    'That the table needs a characteristic whose collection is restricted or '
                    'illegal',
                    'That organisations refuse to publish',
                    'That audits take so long'),
                   1,
                   'The instrument of the audit is treated as the instrument of the injury.')]},
 'w1': {'sub': 'Questions about an automated decision',
        'skill': ('Build a Sentence: asking what a system was trained on',
                  ['Eight of the ten are questions, and the useful ones ask what the target was.',
                   'An embedded question keeps statement order: do you know what it was trained '
                   'to predict.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('The model scores every application.',
                    ['do', 'you', 'know', 'what', 'it', 'was', 'trained', 'to', 'predict'],
                    'Do you know what it was trained to predict?'),
                   ('The system flags about one application in nine.',
                    ['is',
                     'the',
                     'threshold',
                     'the same',
                     'for',
                     'every',
                     'group',
                     'of',
                     'applicants'],
                    'Is the threshold the same for every group of applicants?'),
                   ('The code contains no reference to background.',
                    ['are',
                     'there',
                     'variables',
                     'that',
                     'stand',
                     'in',
                     'for',
                     'it',
                     'without',
                     'naming',
                     'it'],
                    'Are there variables that stand in for it without naming it?')],
        'exam': [('The supplier reports ninety-four per cent accuracy.',
                  ['do',
                   'you',
                   'know',
                   'what',
                   'the',
                   'base',
                   'rate',
                   'in',
                   'that',
                   'population',
                   'is'],
                  'Do you know what the base rate in that population is?'),
                 ('Two groups have different false positive rates.',
                  ['can',
                   'you',
                   'tell',
                   'me',
                   'whether',
                   'the',
                   'score',
                   'is',
                   'calibrated',
                   'in',
                   'both'],
                  'Can you tell me whether the score is calibrated in both?'),
                 ('The figures are published once a year.',
                  ['would',
                   'quarterly',
                   'figures',
                   'broken',
                   'down',
                   'by',
                   'group',
                   'cost',
                   'anything',
                   'much'],
                  'Would quarterly figures broken down by group cost anything much?'),
                 ('An applicant may ask for a review.',
                  ['does',
                   'the',
                   'reviewer',
                   'see',
                   'the',
                   'score',
                   'or',
                   'only',
                   'the',
                   'decision'],
                  'Does the reviewer see the score, or only the decision?'),
                 ('The model was retrained last March.',
                  ['was',
                   'the',
                   'old',
                   'version',
                   'kept',
                   'so that',
                   'the two',
                   'can',
                   'be',
                   'compared'],
                  'Was the old version kept, so that the two can be compared?'),
                 ('The supplier calls the model proprietary.',
                  ['do',
                   'we',
                   'know',
                   'which',
                   'of',
                   'the',
                   'variables',
                   'it',
                   'actually',
                   'reads'],
                  'Do we know which of the variables it actually reads?'),
                 ('The contract runs for five years.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'who',
                   'may',
                   'switch',
                   'it off',
                   'and',
                   'when'],
                  'I would like to know who may switch it off, and when.')]},
 'w2': {'sub': 'Why the criteria conflict',
        'to': 'procurement@hollowmere.gov.uk',
        'date': '09/06/2034',
        'subject': 'Tender — the miss rate, the sample that makes it computable, and one clause '
                   'I would delete',
        'scenario': ['You are the council’s data protection officer. The housing team has '
                     'accepted that the miss rate by group must be published and that a random '
                     'sample of unreferred applicants must be assessed to compute it. You '
                     'support both. You have one objection of your own: the specification '
                     'requires the supplier to publish the variable list, but says nothing about '
                     'variables that stand in for a protected characteristic, and you want that '
                     'clause strengthened rather than a prohibition added.',
                     'Write an email to procurement, copied to the housing team.'],
        'bullets': ['Support the miss rate and the sample, with what each buys.',
                    'Name the gap in the variable clause, with an example.',
                    'Propose the wording you want instead of a prohibition.'],
        'skill': ('Supporting two additions and strengthening a third clause',
                  ['Say what each new figure buys, so the cost is justified.',
                   'Show the gap with a concrete variable rather than a principle.',
                   'Propose wording that can be dropped into the contract.']),
        'model': ['Dear colleagues,',
                  '',
                  'This office supports both additions and asks for one existing clause to be '
                  'strengthened.',
                  '',
                  'The miss rate is the right figure and the sample is what makes it a figure at '
                  'all. It is worth being explicit about the asymmetry it exposes: a false '
                  'referral costs the council a caseworker’s afternoon, and a miss costs an '
                  'applicant a year in unsuitable housing. Publishing the two rates side by '
                  'side, by group, is the only arrangement under which that asymmetry is visible '
                  'to anybody outside this building. Forty assessments a quarter is a trivial '
                  'price for it.',
                  '',
                  'The clause I would strengthen is the variable list. As drafted it requires '
                  'the supplier to publish the variables the model reads, which is necessary and '
                  'not sufficient. Postcode is not a protected characteristic and in this '
                  'borough it predicts one almost perfectly. So does the identity of a referring '
                  'agency, and so, at one remove, does the length of a tenancy history. A list '
                  'of variables with nothing to protect them against is a list that satisfies '
                  'the clause and defeats its purpose.',
                  '',
                  'I am not asking for a prohibition on proxies, which is unworkable: almost '
                  'every useful variable correlates with something protected. What I propose '
                  'instead is a reporting duty. For each published variable, the supplier states '
                  'its association with each protected characteristic in the training data, as a '
                  'single figure, and the council publishes the table with the quarterly '
                  'results. That turns an argument about intentions into a table anybody can '
                  'read, which is what the rest of this specification already does well.',
                  '',
                  'Thandeka Olusanya, Data Protection Officer'],
        'notes': ['The support names the asymmetry between the two errors, which is the reason '
                  'the miss rate matters and the reason the sample is worth paying for.',
                  'The gap is shown with three concrete variables, so it cannot be read as a '
                  'general worry about algorithms.',
                  'The refusal of a prohibition is explicit and reasoned, which makes the '
                  'alternative credible.',
                  'The proposal is drafted as a duty with an output, so it can be inserted into '
                  'the contract without further argument.'],
        'bandpair': {'mid': ['Dear colleagues,',
                             'This office is happy to support the proposed additions to the '
                             'specification. We agree that the miss rate is an important figure '
                             'and that it would be difficult to calculate without some sort of '
                             'sample of the applications that were not referred.',
                             'We do have one concern about the variable list. Although it is '
                             'certainly helpful to know which variables the model uses, this may '
                             'not be enough on its own, because some variables can act as '
                             'substitutes for protected characteristics even though they are not '
                             'protected themselves. Postcode would be an obvious example in this '
                             'borough.',
                             'We are not suggesting that such variables should be banned, as '
                             'that would probably rule out most of the useful ones. Perhaps the '
                             'supplier could be asked to report how closely each variable is '
                             'associated with the protected characteristics, so that this '
                             'information is available alongside the other figures.',
                             'Best wishes, Thandeka Olusanya'],
                     'top': ['Dear colleagues,',
                             'This office supports both additions and asks for one existing '
                             'clause to be strengthened.',
                             'The miss rate is the right figure and the sample is what makes it '
                             'a figure at all. The asymmetry is worth stating: a false referral '
                             'costs a caseworker’s afternoon, a miss costs an applicant a year '
                             'in unsuitable housing. The two rates side by side, by group, are '
                             'the only arrangement that makes the asymmetry visible outside this '
                             'building, and forty assessments a quarter is a trivial price.',
                             'The variable list is necessary and not sufficient. Postcode is not '
                             'protected and predicts a protected characteristic almost perfectly '
                             'in this borough; so does the referring agency; so, at one remove, '
                             'does the length of a tenancy history. A list with nothing to '
                             'protect it against satisfies the clause and defeats its purpose.',
                             'I am not asking for a prohibition on proxies, which is unworkable, '
                             'since almost every useful variable correlates with something '
                             'protected. I propose a reporting duty: for each published variable '
                             'the supplier states its association with each protected '
                             'characteristic in the training data, as one figure, and the '
                             'council publishes that table with the quarterly results. An '
                             'argument about intentions becomes a table anybody can read. '
                             'Thandeka Olusanya'],
                     'diffs': ['It states the asymmetry between the two errors in concrete '
                               'costs, which is why the new figure is worth collecting.',
                               'It names three proxy variables instead of calling postcode an '
                               'obvious example.',
                               'It refuses a prohibition explicitly and gives the reason, which '
                               'makes the alternative credible rather than tentative.',
                               'It drafts the duty as a clause with an output and a publication '
                               'route.',
                               'It drops the hedging — happy to support, certainly helpful, may '
                               'not be enough, perhaps, probably — which in the middle answer '
                               'removes the force of every claim it makes.']}},
 'w3': {'sub': 'When a formula replaces a judgement',
        'prof': 'Professor Vasilenko',
        'question': 'A national health service is choosing how to allocate a scarce surgical '
                    'resource. One proposal ranks patients by a model predicting the years of '
                    'healthy life each operation would add; it is accurate, published, and '
                    'systematically favours younger and less deprived patients, because '
                    'deprivation shortens life expectancy independently of the operation. The '
                    'alternative is a waiting list in order of referral, which is indifferent to '
                    'benefit and to everything else. Which should the service adopt?',
        'posts': [('Perpetua',
                   'w',
                   'The model, obviously. A list in order of referral wastes the resource, and '
                   'wasting a transplant is not neutrality. Somebody dies for our '
                   'squeamishness.'),
                  ('Lorcan',
                   'm',
                   'The model converts an existing injustice into a reason to withhold '
                   'treatment. Deprivation shortens your life, so the model gives you less of '
                   'the thing that would lengthen it.')],
        'skill': ('A question where both options are defensible',
                  ['Perpetua argues from waste; Lorcan from what the predictor is reading.',
                   'The passages say a correct and public rule can still encode an unjust '
                   'decision about evidence.',
                   'A strong answer names the figure that would be published under its own '
                   'proposal.']),
        'starters': ['Perpetua is right that…, although it does not follow that…',
                     'The result is a theorem, at least where…',
                     'The choice cannot be avoided, so…',
                     'So the service should…, and publish…'],
        'model': ['Perpetua is right that a list in order of referral is not neutral and that '
                  'wasted capacity is paid for in deaths, and it does not follow that the '
                  'ranking model is the remedy. Lorcan has identified what the predictor reads. '
                  'Deprivation lowers the predicted benefit without lowering the benefit the '
                  'operation confers, because the shortening it produces operates by routes the '
                  'surgery does not touch. A model trained on observed survival will accordingly '
                  'treat a social fact as a clinical one, and the resulting allocation is '
                  'defensible only in the sense that the arithmetic is right.',
                  'The underlying difficulty is not a defect of this model and will not be '
                  'engineered away. Any ranking that maximises predicted benefit must read the '
                  'correlates of benefit, and the correlates of benefit in an unequal country '
                  'include the inequality. The result is a theorem rather than a complaint about '
                  'implementation, at least where the predictor is accurate and the disparity in '
                  'life expectancy is real. Nothing follows about the ordinary case from the '
                  'fact that the model is public, since the England grading episode of 2020 was '
                  'published, arithmetically correct and withdrawn in four days.',
                  'So the service should adopt the model with the predictor stripped of '
                  'deprivation and of everything that stands in for it, accepting a measurable '
                  'loss of predicted benefit as the price of not charging patients twice for the '
                  'same disadvantage. The choice cannot be avoided, so it should be made in '
                  'public: the service should publish, by deprivation quintile, the share of '
                  'operations allocated and the predicted benefit forgone, and state the figure '
                  'at which it would reconsider. An allocation rule that nobody can be '
                  'embarrassed by has not been audited.'],
        'model_words': 284},
 'w4': {'sub': 'What the impossibility result says',
        'skill': ('Qualification and scope: only, even, at least',
                  ['Only goes immediately before what it restricts, and moving it changes the '
                   'claim.',
                   'Even marks the hardest case the claim still covers.',
                   'At least bounds a claim downward: this much holds, whatever else does.']),
        'guided': [('Restrict the claim to one criterion.',
                    ['the system',
                     'satisfies',
                     'only',
                     'one',
                     'of',
                     'the three',
                     'conditions',
                     'at',
                     'a time'],
                    'The system satisfies only one of the three conditions at a time.'),
                   ('Mark the hardest case the claim covers.',
                    ['even',
                     'a',
                     'published',
                     'and',
                     'correct',
                     'formula',
                     'can',
                     'encode',
                     'an unjust',
                     'decision'],
                    'Even a published and correct formula can encode an unjust decision.'),
                   ('Bound the claim downward.',
                    ['at',
                     'least',
                     'where',
                     'the base rates',
                     'differ',
                     'no',
                     'classifier',
                     'meets',
                     'all three'],
                    'At least where the base rates differ, no classifier meets all three.')],
        'exam': [('Put only where it restricts the agent.',
                  ['only',
                   'the regulator',
                   'may',
                   'set',
                   'the threshold',
                   'at',
                   'which',
                   'a case',
                   'is',
                   'flagged'],
                  'Only the regulator may set the threshold at which a case is flagged.'),
                 ('Put only where it restricts the object.',
                  ['the regulator',
                   'may',
                   'set',
                   'only',
                   'the threshold',
                   'and',
                   'not',
                   'the weights',
                   'behind',
                   'it'],
                  'The regulator may set only the threshold and not the weights behind it.'),
                 ('Use even with a negative.',
                  ['even',
                   'the vendor',
                   'does',
                   'not',
                   'claim',
                   'that',
                   'the three',
                   'criteria',
                   'can',
                   'hold',
                   'together'],
                  'Even the vendor does not claim that the three criteria can hold together.'),
                 ('Use at least to concede a lower bound.',
                  ['the audit',
                   'establishes',
                   'at',
                   'least',
                   'that',
                   'the misses',
                   'fell',
                   'unevenly',
                   'across',
                   'groups'],
                  'The audit establishes at least that the misses fell unevenly across groups.'),
                 ('Combine a restriction with a concession.',
                  ['only',
                   'the outcome',
                   'can',
                   'be',
                   'audited',
                   'and',
                   'even',
                   'that',
                   'requires',
                   'the protected',
                   'attribute'],
                  'Only the outcome can be audited, and even that requires the protected '
                  'attribute.')]},
 'w5': {'sub': 'What an audit can reach',
        'prof': 'Professor Lindqvist',
        'question': 'A government proposes that every public body using an automated decision '
                    'system publish its error rates broken down by ethnic group. Doing so '
                    'requires those bodies to record the ethnicity of every applicant, which the '
                    'present data protection regime permits only in narrow circumstances and '
                    'which some communities have historical reasons to resist. Supporters say an '
                    'unmeasured disparity is a protected disparity. Opponents say the state is '
                    'being asked to build a register of ethnicity in order to prove its own good '
                    'behaviour. Should the requirement be introduced?',
        'posts': [('Anneliese',
                   'w',
                   'Introduce it. You cannot audit what you refuse to count, and the bodies most '
                   'likely to be failing are the ones keenest on not counting.'),
                  ('Tobias',
                   'm',
                   'A register is a register whatever its purpose, and the purposes of a '
                   'register outlive the government that built it. Ask anybody whose family has '
                   'been counted before.')],
        'skill': ('A question where the remedy carries the risk',
                  ['Anneliese argues from what an audit needs; Tobias from what a register '
                   'becomes.',
                   'The passage concedes that the instrument of the audit is held to be the '
                   'instrument of the injury.',
                   'A strong answer separates the counting from the holding of what is '
                   'counted.']),
        'starters': ['Anneliese is right that…, although it does not follow that…',
                     'The choice cannot be avoided, so…',
                     'At least where…, the objection holds…',
                     'So the requirement should…, on condition that…'],
        'model': ['Anneliese is right that an unmeasured disparity is protected by its own '
                  'invisibility, and it does not follow that every public body should hold a '
                  'record of the ethnicity of every person it decides about. Tobias has '
                  'identified the durable risk rather than a sentimental one: a dataset built '
                  'for an audit is governed by the intentions of its builders for about as long '
                  'as they remain in office, and the historical reluctance he appeals to is a '
                  'reasonable induction from experience rather than a failure of civic spirit.',
                  'The choice cannot be avoided, so it is worth separating the two things the '
                  'proposal runs together. An audit needs the joint distribution of outcome and '
                  'group across a population; it does not need any particular body to possess an '
                  'identifiable record of either. Those requirements come apart in practice. A '
                  'statistical authority already trusted with census material can hold the '
                  'linkage, return the table to the public body and to the public, and retain '
                  'nothing that names anybody; a random sample large enough for the arithmetic '
                  'avoids a universal register altogether. The price of a sample is a wider '
                  'interval around the estimate, which is a statistical cost rather than a '
                  'constitutional one. At least where the disparity under investigation is '
                  'substantial, a sample will detect it.',
                  'So the requirement should be introduced with the counting separated from the '
                  'holding: the obligation falls on the body to submit its decisions for '
                  'linkage, not to record ethnicity itself, and the linkage sits with an '
                  'authority whose retention limits are statutory and whose outputs are tables. '
                  'Participation should be voluntary for the individual and compulsory for the '
                  'institution, which is the reverse of the arrangement the objection fears. An '
                  'audit regime that cannot survive the publication of its own retention rules '
                  'has already answered Tobias, and in the wrong direction.'],
        'model_words': 308},
 'sp': [{'sub': 'When a system decides',
         'focus': 'dismantling a defence without disputing its honesty',
         'skill': ('Nobody did. I believe them. It makes no difference.',
                   ['Grant the claim in three short sentences.',
                    'Then say what the system was built to do.',
                    'Then draw the consequence, in the present tense.']),
         'repeat': ['I believe them.',
                    'It makes no difference whatever.',
                    'Nobody put prejudice into the model.',
                    'Its purpose is to reproduce them.',
                    'It learned that as faithfully as everything else.',
                    'It was fitted to eleven years of panel decisions.',
                    'A model that reproduces the old pattern at ninety-five per cent leaves '
                    'nobody room to notice.'],
         'theme': 'a fault that nobody intended',
         'qs': ['Tell me about a fault that nobody intended and everybody produced. How did it '
                'happen?',
                'Some people say a system is fairer than a person because it has no feelings. '
                'How far would you agree?',
                'How would you explain to a friend why a more accurate model can be less fair?',
                'Finally, describe a decision about you that you would want explained.'],
         'model': [(2,
                    'It has no feelings and it has a training set, and the training set is made '
                    'of what people did. A system inherits every habit of the record it was '
                    'fitted to.'),
                   (3,
                    'Because accuracy means agreeing with the old decisions. If those decisions '
                    'were uneven, the better the agreement, the more exactly the unevenness is '
                    'reproduced.')],
         'selfcheck': ['I granted the claim in short sentences',
                       'I said what the system was built to do',
                       'I drew the consequence']},
        {'sub': 'Why the criteria conflict',
         'focus': 'putting an objection into numbers',
         'skill': ('Same total, same published figure, completely different system',
                   ['Build the example with two equal totals.',
                    'Then put the composition underneath them.',
                    'Then the three short sentences that close it.']),
         'repeat': ['Identical referral rates.',
                    'Two wards, a thousand applications each.',
                    'We refer a hundred from each.',
                    'In the second, forty are wrong.',
                    'Forty who needed it were not referred.',
                    'Same total, same published figure, completely different system.',
                    'In the first ward, the hundred are the right hundred.'],
         'theme': 'showing a problem a summary figure hides',
         'qs': ['Tell me about a figure that hid the thing it was supposed to show. What was '
                'hidden?',
                'Some people say publishing averages is enough for accountability. How far would '
                'you agree?',
                'How would you explain to a friend why two identical totals can mean opposite '
                'things?',
                'Finally, describe a number your own institution publishes that nobody could be '
                'embarrassed by.'],
         'model': [(2,
                    'An average is where accountability starts and it hides the thing that '
                    'matters, which is who the errors fell on. Publish the breakdown or publish '
                    'nothing.'),
                   (3,
                    'Because a total says how many and not which. You can refer the right '
                    'hundred or the wrong hundred and the published figure is a hundred either '
                    'way.')],
         'selfcheck': ['I built the example with equal totals',
                       'I put the composition underneath',
                       'I closed with the three short sentences']},
        {'sub': 'When a formula replaces a judgement',
         'focus': 'separating two complaints about one system',
         'skill': ('It was not a black box, and it was not fair',
                   ['Give the constraint the regulator was under.',
                    'Refuse the first explanation in three short sentences.',
                    'Then name where the injustice entered.']),
         'repeat': ['No examinations that summer.',
                    'Three hundred thousand candidates.',
                    'So they built a formula.',
                    'It was published, simple and correct.',
                    'The only figures in the building were the teachers’.',
                    'A pupil in a class of six kept her grade.',
                    'It was asked to treat a school’s history as evidence about a person.'],
         'theme': 'a rule that was transparent and still unjust',
         'qs': ['Tell me about a rule that was clear and still unfair. What made it unfair?',
                'Some people say publishing how a decision was made is enough. How far would you '
                'agree?',
                'How would you explain to a friend why a correct formula can produce an unjust '
                'result?',
                'Finally, describe a decision in your own country that a formula should not '
                'make.'],
         'model': [(2,
                    'Publication tells you what was done and not whether it should have been. A '
                    'rule can be perfectly legible and still read a fact about your '
                    'neighbourhood as a fact about you.'),
                   (3,
                    'Because the arithmetic only does what it was told. If you tell it that a '
                    'school’s past counts as evidence about a pupil, it will apply that '
                    'faithfully, and faithfully is the problem.')],
         'selfcheck': ['I gave the constraint first',
                       'I refused the black box explanation',
                       'I said where the injustice entered']},
        {'sub': 'What the impossibility result says',
         'focus': 'proving something the room does not want',
         'skill': ('The annoyance is the correct response',
                   ['Give the three demands in three short sentences.',
                    'Then the theorem, with its two escapes.',
                    'Then the question the room is actually paid to answer.']),
         'repeat': ['Equal misses.',
                    'Equal wrong accusations.',
                    'Same number, same proportion offending.',
                    'Not a badly built score. Any score.',
                    'Three things are asked of a risk score.',
                    'If the underlying rates differ, no score satisfies all three.',
                    'So the question is which of the three you have given up, and whether '
                    'anybody was told.'],
         'theme': 'an argument that rules out what everybody wanted',
         'qs': ['Tell me about a time you proved something nobody wanted to hear. What happened?',
                'Some people say a system should simply be made fair. How far would you agree?',
                'How would you explain to a friend why two fair-sounding rules cannot both '
                'apply?',
                'Finally, describe a decision in your life that was made by a threshold nobody '
                'wrote down.'],
         'model': [(2,
                    'It sounds like one demand and it is three, and the three pull against each '
                    'other once the groups differ. Asking for all of it is asking for the '
                    'arithmetic to be different.'),
                   (3,
                    'Because being right on average about everybody with your score and being '
                    'wrong equally often about each group are two different things, and you can '
                    'have either one.')],
         'selfcheck': ['I gave the three demands separately',
                       'I stated the theorem and its escapes',
                       'I ended with the question that is left']},
        {'sub': 'What an audit can reach',
         'focus': 'accepting a proof and refusing the conclusion drawn from it',
         'skill': ('A budget does not prove that spending cannot be discussed',
                   ['Grant the theorem in one sentence.',
                    'Refuse the fashionable conclusion with the comparison.',
                    'Then the measurement problem and the one thing you ask for.']),
         'repeat': ['It settles nothing.',
                    'I accept every line of that.',
                    'They tell me they removed the characteristic.',
                    'The other columns rebuild it between them.',
                    'The fashionable conclusion is that we should all go home.',
                    'A budget does not prove that spending cannot be discussed.',
                    'So publish the whole table by group, and the criterion you chose, and what '
                    'it cost.'],
         'theme': 'asking for one figure instead of an argument about motives',
         'qs': ['Tell me about a figure you would publish even though it embarrasses you. Why '
                'that one?',
                'Some people say motives matter more than outcomes. How far would you agree?',
                'How would you explain to a friend why leaving a column out of a form changes '
                'nothing?',
                'Finally, describe something your own institution refuses to count.'],
         'model': [(2,
                    'Motives matter to the person who has them and almost nothing else. I cannot '
                    'establish what anybody meant, and I can count who was flagged and who was '
                    'missed.'),
                   (3,
                    'Because the rest of the form already knows the answer. Where you live and '
                    'who referred you will rebuild the column you deleted.')],
         'selfcheck': ['I granted the proof in one sentence',
                       'I used the comparison to refuse the conclusion',
                       'I ended with the one figure I ask for']}],
 'gram': {'title': 'Qualification and scope: only, even, at least',
          'headers': ['Form', 'What it does'],
          'rows': [('only the regulator may set the threshold',
                    'restricts the agent: nobody else may'),
                   ('the regulator may set only the threshold',
                    'restricts the object: not the weights'),
                   ('the regulator may only set the threshold', 'ambiguous in writing; avoid it'),
                   ('even a correct formula can be unjust',
                    'marks the hardest case the claim still covers'),
                   ('even the vendor does not claim it',
                    'even with a negative: the least likely denier denies it'),
                   ('at least where the base rates differ', 'bounds the claim by a condition'),
                   ('the audit establishes at least that the misses fell unevenly',
                    'bounds the claim downward: this much, whatever else')],
          'notes': ['Only attaches to whatever follows it, and English readers enforce that rule '
                    'in writing even where speech would use stress instead. Only the regulator '
                    'may set the threshold and the regulator may set only the threshold are two '
                    'different rules, and an examiner reads the one you wrote rather than the '
                    'one you meant. Put only immediately before the element it restricts and the '
                    'sentence cannot be misread.',
                    'Even marks a case at the edge of what a claim covers, so the element it '
                    'precedes has to be the surprising one. Even a published formula can encode '
                    'an injustice says that publication, the strongest defence available, is not '
                    'enough; even a formula can be published says something else and probably '
                    'nothing.',
                    'At least does two jobs and the difference is worth holding. Before a clause '
                    'it bounds a claim by a condition: at least where the base rates differ. '
                    'Before a complement it bounds the claim downward: the audit establishes at '
                    'least that the misses fell unevenly, which concedes that it may establish '
                    'no more.'],
          'watch': 'Do not write only in front of the verb when you mean to restrict the object. '
                   'The regulator may only set the threshold reads, strictly, as though setting '
                   'were the only thing it may do to it. Write may set only the threshold.',
          'ex': [('Rewrite so that only restricts the element in brackets.',
                  ['The regulator may set the threshold. (the regulator)',
                   'The regulator may set the threshold. (the threshold)',
                   'The audit reaches the outcome. (the outcome)',
                   'The table requires the attribute. (the table)',
                   'The theorem binds unequal base rates. (unequal base rates)'],
                  ['Only the regulator may set the threshold.',
                   'The regulator may set only the threshold.',
                   'The audit reaches only the outcome.',
                   'Only the table requires the attribute.',
                   'The theorem binds only unequal base rates.']),
                 ('Add even before the surprising element.',
                  ['A published formula can encode an injustice.',
                   'The vendor does not claim that the three criteria hold together.',
                   'The simplest classifier rebuilds the attribute.',
                   'The outcome cannot be audited without the attribute.'],
                  ['Even a published formula can encode an injustice.',
                   'Even the vendor does not claim that the three criteria hold together.',
                   'Even the simplest classifier rebuilds the attribute.',
                   'Even the outcome cannot be audited without the attribute.']),
                 ('Supply only, even or at least.',
                  ['______ where the base rates differ, the three conditions conflict.',
                   'The audit establishes ______ that the misses fell unevenly.',
                   '______ a correct and published formula can be unjust.',
                   'The regulator may set ______ the threshold, not the weights.'],
                  ['At least', 'at least', 'Even', 'only'])],
          'bas': 'Build a Sentence in this unit asks you to place only, even and at least. The '
                 'tiles let you put them in more than one position, and the answer is the '
                 'position the prompt asks for.'},
 'fault': {'text': 'The regulator may only set the threshold, not the weights. A formula can '
                   'even encode an injustice when it is published. At least the misses fell '
                   'unevenly, the audit establishes. The three conditions conflicts where the '
                   'base rates differ. Neither the vendor nor the critics was mistaken. Do you '
                   'know which criterion did they give up?',
           'faults': [('may only set the threshold, not the weights',
                       'may set only the threshold, not the weights',
                       'Only must stand immediately before the element it restricts, and here '
                       'that element is the threshold.'),
                      ('A formula can even encode an injustice when it is published',
                       'Even a published formula can encode an injustice',
                       'Even belongs before the surprising element, which is the publication '
                       'rather than the encoding.'),
                      ('At least the misses fell unevenly, the audit establishes',
                       'The audit establishes at least that the misses fell unevenly',
                       'At least bounding a claim downward sits inside the complement, after the '
                       'reporting verb.'),
                      ('The three conditions conflicts',
                       'The three conditions conflict',
                       'A plural subject takes a plural verb however long the phrase that '
                       'follows it.'),
                      ('Neither the vendor nor the critics was mistaken',
                       'Neither the vendor nor the critics were mistaken',
                       'With neither … nor the verb agrees with the nearer subject, which here '
                       'is plural.'),
                      ('which criterion did they give up',
                       'which criterion they gave up',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('a measured thing standing in for the one that matters', 'proxy'),
                   ('a difference in outcome between groups', 'disparity'),
                   ('equality of some stated quantity across groups', 'parity'),
                   ('a rule that sorts cases into two boxes', 'classifier'),
                   ('how often a rule clears the innocent', 'specificity'),
                   ('the state of a model nobody can inspect', 'opacity'),
                   ('how far a model can be explained at all', 'interpretability'),
                   ('judging a person by a group they fall into', 'profiling'),
                   ('broken down into small units', 'granular'),
                   ('not reachable at the same time as something else', 'unattainable'),
                   ('larger than the share would warrant', 'disproportionate'),
                   ('in every case without exception', 'invariably')],
         'gram': [('______ the regulator may set the threshold; nobody else may.', 'Only'),
                  ('The regulator may set ______ the threshold, not the weights.', 'only'),
                  ('______ a published and correct formula can be unjust.', 'Even'),
                  ('______ the vendor does not claim that all three hold.', 'Even'),
                  ('______ least where the base rates differ, no classifier meets all three.',
                   'At'),
                  ('The audit establishes at ______ that the misses fell unevenly.', 'least'),
                  ('The three conditions ______ where the base rates differ.', 'conflict'),
                  ('Do you know which criterion they ______ up?', 'gave')],
         'mini': [('Calibration requires that',
                   ('every group is flagged equally often',
                    'among all cases given a score, the same proportion offends',
                    'the misses are equally spread',
                    'the predictor is perfect'),
                   1,
                   'It protects whoever reads the score.'),
                  ('The 2016 result shows that',
                   ('one system was badly built',
                    'the three conditions cannot hold together unless the base rates are equal '
                    'or the predictor is perfect',
                    'calibration is impossible',
                    'audits are useless'),
                   1,
                   'It is a theorem about proportions rather than a finding about a product.'),
                  ('The 2020 England grading episode shows that',
                   ('opaque models are dangerous',
                    'a public, simple and correct formula can still encode an unjust decision',
                    'teacher grades are accurate',
                    'historical data should never be used'),
                   1,
                   'The unfairness entered with the inputs.'),
                  ('Removing a protected attribute from a model accomplishes little because',
                   ('models are too complex',
                    'the remaining variables jointly reconstruct it',
                    'the law requires it',
                    'the attribute is unmeasured'),
                   1,
                   'Residence, referring agency and previous contact rebuild it between them.'),
                  ('The audit the objection recommends consists in',
                   ('publishing the source code',
                    'publishing the classification table by group, with the criterion chosen',
                    'appointing a reviewer',
                    'simplifying the model'),
                   1,
                   'A disparity then becomes a figure rather than an allegation.'),
                  ('The concession that audit requires is that',
                   ('the theorem may be wrong',
                    'the table cannot be built without the protected attribute, whose collection '
                    'is restricted',
                    'disparities cannot be measured',
                    'intention matters after all'),
                   1,
                   'The instrument of the audit is held to be the instrument of the injury.')]},
 'tip': 'Find any published score that is applied to people in your own country and ask the one '
        'question of it that cycle 4 leaves you: which of the three conditions has it given up? '
        'If the answer is not in the documentation, that silence is the finding, and it is the '
        'finding an auditor would report first.'}

