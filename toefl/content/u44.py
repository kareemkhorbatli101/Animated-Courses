# -*- coding: utf-8 -*-
"""Unit 44 — Judgement and Bias.

Cycle 4 defines anchoring and then defines it by what it survives:
disclosure, incentive, deliberation and expertise, the last of these
through practising judges who watched a sentencing recommendation
come out of a throw of dice and moved towards it with undiminished
confidence. Cycle 5 accepts all four failures and observes that all
four tested one shape of remedy - a person asked to resist an
influence while remaining exposed to it - and that interventions of a
second shape, which change the order or structure of the task, have a
markedly better record and ask nothing of anybody. The persistent
preference for the first is institutional: a course has a date, a
budget and an attendance register."""

UNIT = {'n': 44,
 'vol': 5,
 'level': 'B2',
 'title': 'Judgement and Bias',
 'grammar': 'Concessive conditionals: even if, whether or not',
 'field': 'anchor, hindsight, debiasing',
 'opener_line': 'This unit is about an effect that survives being explained to you, and about '
                'the difference between two kinds of remedy for it. One asks a person to resist '
                'an influence while remaining exposed to it, and has a poor record. The other '
                'changes the order of the task, asks nothing of anybody, and works.',
 'subs': ['Making a decision under pressure',
          'Anchoring and what survives it',
          'Calibration, and whether it can be trained'],
 'icons': ['brain', 'chart', 'brief'],
 'acad': [('postulate', 'to put forward as a starting assumption'),
          ('posit', 'to assume for the sake of an argument'),
          ('envisage', 'to picture something as a possibility'),
          ('endorse', 'to give public support to'),
          ('formulate', 'to put into a precise form of words'),
          ('foster', 'to encourage something to develop'),
          ('imperative', 'something that must be done'),
          ('consensus', 'general agreement, short of unanimity'),
          ('plausibility', 'how believable something is, before testing'),
          ('discrepant', 'not agreeing with the rest'),
          ('aggregation', 'the combining of separate judgements into one'),
          ('prompting', 'a cue given to produce a response'),
          ('ordering', 'the sequence in which things are presented'),
          ('prescribe', 'to lay down as a rule that must be followed')],
 'fieldwords': [('anchor', 'a number present before a judgement, which pulls it'),
                ('anchoring', 'the effect of such a number on the judgement'),
                ('anchored', 'pulled towards a number that was present first'),
                ('debiasing', 'any attempt to remove a bias from a judgement'),
                ('availability', 'how easily an example comes to mind'),
                ('hindsight', 'knowledge of the outcome, which reshapes the memory'),
                ('elicitation', 'the formal procedure for obtaining an estimate'),
                ('nudge', 'a change to how a choice is presented, not to the choice'),
                ('checklist', 'a written sequence of steps, in a fixed order'),
                ('intuitive', 'arrived at without working it out'),
                ('numerical', 'expressed as a number'),
                ('overestimate', 'to put a figure higher than the truth'),
                ('underestimate', 'to put a figure lower than the truth'),
                ('premortem', 'an exercise imagining the failure before it happens'),
                ('blind', 'carried out without knowing the other party’s figure'),
                ('bracket', 'to give a high and a low figure rather than one')],
 'collocs': [('a snap judgement', 'one made in a moment'),
             ('on reflection', 'after thinking it over'),
             ('take a view', 'to commit to a position'),
             ('the going rate', 'what is usually paid or given'),
             ('split the difference', 'to settle between two figures'),
             ('a round number', 'one ending in zeros, and therefore suspect'),
             ('first impression', 'the judgement formed before the evidence'),
             ('in the event', 'as it actually turned out'),
             ('after the fact', 'once the outcome is known'),
             ('a working estimate', 'one good enough to proceed on')],
 'stance': [('the finding is robust', 'it survives every test tried'),
            ('it would be wrong to conclude', 'blocking an inference'),
            ('within the limits of', 'the writer bounds the claim'),
            ('there is reason to think', 'offered, not asserted'),
            ('the question remains open', 'the writer declines to settle it')],
 'nuance': [('bias / error', 'a pull in one direction / any wrong answer'),
            ('anchoring / framing', 'a number pulls / a wording pulls'),
            ('intuitive / careless', 'fast and often right / fast and not')],
 'candos': ['I can describe an experimental finding and what it does not show.',
            'I can use even if and whether or not to concede a condition.',
            'I can explain why a warning does not remove an effect.',
            'I can distinguish a failed training study from an untrainable skill.',
            'I can propose a procedure instead of an exhortation.',
            'I can write an estimate down before I am told anybody else’s.'],
 'vocab_talk': ['Describe a decision you made quickly. Would more time have helped?',
                'What is the difference between a bias and a mistake?',
                'When has a number somebody mentioned changed your own estimate?',
                'Name a procedure that works better than being told to be careful.'],
 'again': ['probability',
           'uncertainty',
           'robustness',
           'variance',
           'confound',
           'replicate',
           'threshold',
           'distribution'],
 'family': ('judge',
            [('judgement', 'noun', 'the judgement was anchored on an irrelevant figure'),
             ('judicious', 'adjective', 'a judicious decision taken in four minutes'),
             ('misjudgement', 'noun', 'the misjudgement was systematic rather than careless')]),
 'r1': {'sub': 'Making a decision under pressure',
        'skill': ('Endings on nouns from verbs and adjectives',
                  ['Nouns from verbs take -ation, -ment or -ing; nouns of quality take -ness, '
                   '-ity or -ence.',
                   'Adjectives take -able, -al, -ive or -ent, and the preposition after the gap '
                   'often decides which.',
                   'Work out the class from the grammar before you consider the meaning.']),
        'guided_text': 'Everybody believes they decide badly under pressure and almost nobody '
                       'knows which part goes wrong. It is not usually the reason---. Under time '
                       'pressure the steps of an argument stay roughly intact and what collapses '
                       'is the search: you consider fewer option-, you stop at the first one '
                       'that is adequ---, and you never discover the better alternative because '
                       'you never looked for it. This matters because the remedy people reach '
                       'for is to think harder, which is not avail---- to somebody who has four '
                       'minutes, and the remedy that works is to write the options down before '
                       'the pressure arrives. A list made on a quiet Tuesday is cheap. A list '
                       'made in an emergency does not get made at all, which is the entire point '
                       'of writ--- one in advance.',
        'guided': ['ing', 's', 'ate', 'able', 'ing'],
        'guided_hint': 'reason--- is reasoning — the slot follows it is not usually the, so it '
                       'needs a noun.',
        'exam_text': 'An anchor is a number that is present before a judgement and alters it. '
                     'The classical demonstr----- asks two groups for an estim--- after showing '
                     'them a figure obtained by spinning a wheel, and the group shown the higher '
                     'figure gives a higher answer, reli----, by a margin that does not depend '
                     'on the credib----- of the wheel. What makes the finding uncomfortable is '
                     'not its exist---- but its robust----. The effect survives telling people '
                     'about it. It survives paying them for accuracy. It survives expert---: '
                     'practising judges given a sentence recommend----- drawn from dice moved '
                     'their own sentences towards it, and the judges were as confid--- '
                     'afterwards as the undergraduates had been. It would be wrong to conclude '
                     'that judgement is therefore worthless, and equally wrong to suppose that a '
                     'warning disposes of the difficulty, which is the assumption behind almost '
                     'every attempt at profession-- training on the subject.',
        'exam': ['ation', 'ate', 'ably', 'ility', 'ence', 'ness', 'ise', 'ation', 'ent', 'al']},
 'r2': {'sub': 'Anchoring and what survives it',
        'skill': ('Reading a protocol against a complaint about it',
                  ['A protocol prescribes an order. A complaint usually says the order is '
                   'awkward.',
                   'Look for what each step is designed to prevent.',
                   'A question about the reply wants the reason given, not the tone.']),
        'docs': [('notice',
                  'Civil Engineering Estimating Unit · procedure for independent cost estimates',
                  ['# Step 1 — before any figure is seen',
                   '* Each estimator writes a bracketed figure, low and high, from the drawings '
                   'alone, and signs it.',
                   '# Step 2 — disclosure',
                   '* Only then is the client budget, the previous scheme cost or any contractor '
                   'indication released to the team.',
                   '# Step 3 — revision',
                   '* Estimators may revise. Any revision of more than 15 per cent requires one '
                   'written sentence saying what new information produced it.',
                   '# Step 4 — aggregation',
                   '* The unit figure is the median of the first-round brackets, not of the '
                   'revised ones.',
                   '# Why this order',
                   '* A figure seen before an estimate is formed cannot be set aside afterwards. '
                   'The procedure is designed on that assumption and not on any view about the '
                   'competence of estimators.'],
                  'notice'),
                 ('email',
                  'd.ferreira@bridgeworks.co.uk',
                  'estimating@bridgeworks.co.uk',
                  '08/02/2030',
                  'The blind-first rule — it cost us two days and I want it changed',
                  ['Colleagues,',
                   '',
                   'I have now run three schemes under the new procedure and I want to',
                   'put the case against it, in the interests of the people who have to',
                   'use it rather than design it.',
                   '',
                   'Estimating from drawings alone, with no sight of the client budget,',
                   'took my team two extra days on the Calder scheme. Two of my four',
                   'estimators produced first-round brackets that were nowhere near the',
                   'eventual figure, and they then had to revise by more than fifteen per',
                   'cent and write the sentence, which they experienced as being marked',
                   'down for following the procedure.',
                   '',
                   'I accept the research. What I am questioning is whether it applies to',
                   'people who do this forty times a year. We are not undergraduates',
                   'guessing at the length of a river.',
                   '',
                   'Could we at least release the client budget at step 1 for the senior',
                   'estimators?',
                   '',
                   'Dani Ferreira, Estimating Manager'])],
        'guided': [('What must each estimator do before seeing any figure?',
                    ('Agree a method with the team',
                     'Write a bracketed figure from the drawings and sign it',
                     'Consult the previous scheme cost',
                     'Produce a single figure'),
                    1,
                    'A low and a high figure, signed, from the drawings alone.'),
                   ('When is the client budget released?',
                    ('At step 1',
                     'At step 2, after the brackets are written',
                     'At step 4',
                     'Never'),
                    1,
                    'The whole order exists so that it arrives after the estimate is formed.'),
                   ('What does a revision of more than 15 per cent require?',
                    ('A new estimate',
                     'One written sentence saying what new information produced it',
                     'Approval from the manager',
                     'A second estimator'),
                    1,
                    'Which is a record rather than a permission.'),
                   ('Which figures does the unit use for its final number?',
                    ('The revised brackets',
                     'The median of the first-round brackets',
                     'The lowest bracket',
                     'The client budget'),
                    1,
                    'And that choice is what makes step 1 consequential rather than '
                    'ceremonial.')],
        'exam': [('What does the notice say the procedure is NOT designed on?',
                  ('The assumption that a seen figure cannot be set aside',
                   'Any view about the competence of estimators',
                   'The median of first-round brackets',
                   'The drawings'),
                  1,
                  'The distinction matters because the complaint reads it as a competence '
                  'judgement.'),
                 ('What is Dani Ferreira’s first objection?',
                  ('The research is wrong',
                   'The procedure cost two extra days on one scheme',
                   'The brackets are too wide',
                   'The median is the wrong statistic'),
                  1,
                  'She begins with the operational cost rather than with the evidence.'),
                 ('What did two of her four estimators experience?',
                  ('A loss of confidence in the drawings',
                   'Being marked down for following the procedure',
                   'A disagreement with the client',
                   'An inability to produce a bracket'),
                  1,
                  'Having to revise by more than fifteen per cent and write the sentence.'),
                 ('What does she accept?',
                  ('That the procedure should continue',
                   'The research',
                   'That her team is inexperienced',
                   'The median rule'),
                  1,
                  'And her question is about its application rather than its truth.'),
                 ('What distinction does she draw?',
                  ('Between estimators and engineers',
                   'Between people who do this forty times a year and undergraduates',
                   'Between brackets and single figures',
                   'Between client budgets and contractor indications'),
                  1,
                  'Which is exactly the claim the research on expertise addresses.'),
                 ('What does she ask for?',
                  ('Abolition of the procedure',
                   'Release of the client budget at step 1 for senior estimators',
                   'More time on every scheme',
                   'A change to the median rule'),
                  1,
                  'One request, confined to the senior estimators.'),
                 ('What would the notice say in reply to her distinction?',
                  ('That the research was done on undergraduates',
                   'That the procedure assumes a seen figure cannot be set aside by anybody',
                   'That senior estimators are exempt',
                   'That two days is a reasonable cost'),
                  1,
                  'The assumption is about the mechanism, not about the people.')]},
 'r3': {'sub': 'Calibration, and whether it can be trained',
        'title': 'The Weather Forecasters Who Are Almost Never Wrong',
        'words': 288,
        'skill': ('Reading a case that contradicts a general claim',
                  ['The general claim comes first. The case is an exception to it.',
                   'Note what is specific about the exception, because that is the lesson.',
                   'A question about the conclusion wants what the case does not show.']),
        'paras': ['Overconfidence in numerical judgement is among the best established findings '
                  'in the field, and the finding is robust across every occupation anybody has '
                  'tested. Asked for a range they are ninety per cent certain contains the '
                  'answer, professionals across a dozen occupations produce ranges containing it '
                  'about half the time, and the pattern holds for physicians, engineers and '
                  'investment analysts alike. One group is a conspicuous exception. Weather '
                  'forecasters issuing probability of precipitation are almost perfectly '
                  'calibrated: of the occasions on which they say thirty per cent, it rains on '
                  'close to thirty per cent of them.',
                  'The temptation is to attribute this to something about meteorology, and the '
                  'explanation is simpler and more useful. Forecasters receive feedback that is '
                  'frequent, prompt, numerical and unambiguous. They make a quantified '
                  'prediction every day, the outcome arrives within hours, and nothing about the '
                  'result is open to interpretation: either it rained or it did not. No other '
                  'profession in the comparison has all four properties. A physician making a '
                  'prognosis may wait years, may never learn the outcome, and can almost always '
                  'explain a surprise after the fact.',
                  'It would be wrong to conclude from this that calibration can be taught by '
                  'exhortation, and equally wrong to conclude that it is a fixed property of a '
                  'person. What the case suggests is narrower and more practical: calibration is '
                  'a trained skill, and the thing that trains it is a feedback loop with those '
                  'four properties rather than instruction about bias. Within the limits of one '
                  'comparison, the implication for any profession wanting better estimates is to '
                  'build the loop, which is an administrative task, and not to run a course, '
                  'which is the response that is almost always chosen instead.'],
        'guided': [('What range do professionals produce when asked for ninety per cent '
                    'certainty?',
                    ('One containing the answer ninety per cent of the time',
                     'One containing the answer about half the time',
                     'One containing the answer almost never',
                     'The passage does not say'),
                    1,
                    'And the pattern holds across a dozen occupations.'),
                   ('Which group is the exception?',
                    ('Physicians', 'Weather forecasters', 'Engineers', 'Investment analysts'),
                    1,
                    'Their probability of precipitation is almost perfectly calibrated.'),
                   ('What does the passage say the temptation is?',
                    ('To doubt the finding',
                     'To attribute the exception to something about meteorology',
                     'To blame the professionals',
                     'To run a training course'),
                    1,
                    'And it says the real explanation is simpler and more useful.'),
                   ('Which of the four properties does a physician lack?',
                    ('Only promptness',
                     'Promptness, and an outcome that is always learned, and a result not open '
                     'to interpretation',
                     'Only frequency',
                     'None of them'),
                    1,
                    'A prognosis may wait years, the outcome may never be learned, and a '
                    'surprise can be explained after the fact.')],
        'exam': [('What four properties does the feedback have?',
                  ('Frequent, prompt, numerical and unambiguous',
                   'Public, written, numerical and prompt',
                   'Frequent, cheap, visible and fair',
                   'Prompt, private, numerical and repeated'),
                  0,
                  'And the passage says no other profession in the comparison has all four.'),
                 ('Why is a physician’s feedback different?',
                  ('It is more accurate',
                   'It may take years, may never arrive, and can be explained away',
                   'It is numerical',
                   'It arrives within hours'),
                  1,
                  'Those are the three ways the passage contrasts it.'),
                 ('What does the passage say it would be wrong to conclude?',
                  ('That forecasters are unusual people',
                   'That calibration can be taught by exhortation, or that it is fixed',
                   'That overconfidence is rare',
                   'That feedback is unimportant'),
                  1,
                  'Both conclusions are blocked in the same sentence.'),
                 ('What does the case suggest calibration is?',
                  ('A fixed property of a person',
                   'A trained skill, trained by a feedback loop',
                   'A matter of intelligence',
                   'Specific to meteorology'),
                  1,
                  'And the loop is specified by the four properties.'),
                 ('What does the passage say the implication is?',
                  ('To run a course',
                   'To build the loop, which is an administrative task',
                   'To recruit differently',
                   'To abandon numerical estimates'),
                  1,
                  'And it adds that the course is the response almost always chosen instead.'),
                 ('How does the passage limit its own claim?',
                  ('It calls the finding doubtful',
                   'It says the implication holds within the limits of one comparison',
                   'It restricts the claim to physicians',
                   'It does not limit it'),
                  1,
                  'The limiting phrase is in the final sentence.'),
                 ('What does unambiguous mean, as the passage uses it?',
                  ('Easy to measure',
                   'Not open to interpretation',
                   'Published promptly',
                   'Agreed between professionals'),
                  1,
                  'Either it rained or it did not is the illustration given.'),
                 ('What is the passage an argument against?',
                  ('Numerical forecasting',
                   'Treating better estimation as a training problem',
                   'Probability of precipitation',
                   'Feedback of any kind'),
                  1,
                  'Build the loop rather than run the course is its conclusion.'),
                 ('The word calibrated in paragraph 1 means',
                  ('measured precisely',
                   'matched between stated confidence and actual frequency',
                   'adjusted for bias',
                   'compared between professions'),
                  1,
                  'Thirty per cent said on the occasions when it rains thirty per cent of the '
                  'time.')]},
 'r4': {'sub': 'Anchoring and what survives it',
        'title': 'The Number That Was Not Supposed to Count',
        'words': 390,
        'skill': ('Reading a finding defined by what it survives',
                  ['The effect is introduced and then tested against four things. Note all four.',
                   'One study is given in detail because it answers an objection. Identify the '
                   'objection.',
                   'A question about the conclusion wants what the writer refuses to infer.']),
        'paras': ['An anchor is a numerical value available to a person before the formation of '
                  'a judgement, and the anchoring effect is the displacement of that judgement '
                  'towards it. The classical demonstration is almost embarrassingly simple. Two '
                  'groups observe the spin of a wheel, which stops at a number with no relation '
                  'whatever to the question, and are then asked for an estimate; the group '
                  'exposed to the higher value returns a higher mean estimate, by a margin whose '
                  'reproduction across decades and across cultures is not in dispute. What gives '
                  'the finding its standing in the literature is not its existence, which taken '
                  'alone would be a curiosity, but its resistance to every obvious remedy '
                  'proposed against it. The remedies are worth setting out individually, since '
                  'each of them is the first thing a sensible person suggests.',
                  'Four remedies have been tested with some care. Disclosure fails: participants '
                  'given a full explanation of the effect, immediately before the task, are '
                  'displaced by about as much as participants told nothing at all, and their '
                  'confidence in their own independence is unaffected. Incentive fails: payment '
                  'for accuracy produces no reliable reduction, and in several designs a slight '
                  'increase. Deliberation fails, or more exactly has no detectable effect on the '
                  'displacement: additional time produces more confident estimates at the same '
                  'distance from the unanchored figure, which is the least useful of all '
                  'possible combinations. Expertise is the interesting one, because the '
                  'objection it answers is the one professionals always raise. Practising '
                  'judges, presented with a sentencing recommendation they had watched being '
                  'generated by a throw of dice, produced sentences displaced towards that '
                  'number, and reported afterwards the same confidence in their independence '
                  'that undergraduates had reported.',
                  'The finding is robust and it supports a narrower conclusion than it is '
                  'usually made to carry. It would be wrong to conclude that numerical judgement '
                  'is worthless, since a displaced estimate is not a random one and remains a '
                  'great deal better than no estimate at all. It would be equally wrong to '
                  'conclude that nothing can be done, which is where the next passage begins: '
                  'what the four failures have in common is that every one of them asks a person '
                  'to resist an influence while remaining exposed to it, and that is a property '
                  'of the remedies rather than a discovery about the mind.'],
        'guided': [('What is an anchor?',
                    ('A judgement made under pressure',
                     'A numerical value available before a judgement is formed',
                     'An estimate given by an expert',
                     'A range rather than a figure'),
                    1,
                    'And the effect is the displacement of the judgement towards it.'),
                   ('What is the relation of the wheel’s number to the question?',
                    ('It is a rough guide',
                     'None whatever',
                     'It is the correct answer',
                     'It is drawn from previous cases'),
                    1,
                    'Which is what makes the displacement hard to explain away.'),
                   ('What gives the finding its standing?',
                    ('Its existence',
                     'Its resistance to every obvious remedy',
                     'Its size',
                     'Its age'),
                    1,
                    'The writer says the existence alone would be a curiosity.')],
        'exam': [('What happens when participants are given a full explanation of the effect?',
                  ('The displacement disappears',
                   'They are displaced by about as much as those told nothing',
                   'They refuse the task',
                   'They become less confident'),
                  1,
                  'Which is the first of the four failures.'),
                 ('What does payment for accuracy produce?',
                  ('A reliable reduction',
                   'No reliable reduction, and sometimes a slight increase',
                   'A refusal to estimate',
                   'Wider ranges'),
                  1,
                  'The absence of an incentive effect is what makes the finding awkward.'),
                 ('What does additional time produce?',
                  ('A smaller displacement',
                   'More confident estimates at the same displacement',
                   'No change in confidence',
                   'A wider range'),
                  1,
                  'Which the writer describes as no detectable effect on the displacement '
                  'itself.'),
                 ('Why is expertise called the interesting one?',
                  ('The effect is largest there',
                   'It answers the objection professionals always raise',
                   'It was tested first',
                   'It involved judges'),
                  1,
                  'And the judges study is given in detail for that reason.'),
                 ('What do the four failures have in common?',
                  ('They were poorly designed',
                   'Each asks a person to resist an influence while remaining exposed to it',
                   'They used students',
                   'They measured confidence'),
                  1,
                  'And the writer calls that a property of the remedies rather than a discovery '
                  'about the mind.')]},
 'r5': {'sub': 'Calibration, and whether it can be trained',
        'title': 'Four Failures, One Shared Mistake',
        'words': 370,
        'skill': ('Reading an objection about what was actually tested',
                  ['The writer accepts the four failures and reinterprets them. Note the '
                   'reinterpretation.',
                   'Three interventions that do work are described. Keep their shapes in mind.',
                   'A question about the conclusion wants the distinction between two kinds of '
                   'remedy.']),
        'paras': ['All four failures are genuine, and none of them licenses the verdict that '
                  'calibration is immune to remedy. Each tested an intervention of a single '
                  'shape: a warning, an incentive or extra time, followed by an estimate made '
                  'while the anchor is still in view. That same result has now been established '
                  'four separate times, which is a genuine contribution, and its content is '
                  'precise: exposure to an anchor is not overcome by effort. That proposition is '
                  'narrower than the sweeping reading usually drawn from it, namely that no '
                  'intervention whatever will improve a numerical estimate at all.',
                  'Interventions of a second shape have a markedly better record, and their '
                  'common feature is the alteration of the order or the structure of a task '
                  'rather than the disposition of the person performing it. Blind first '
                  'estimation, in which a figure is written and signed before the disclosure of '
                  'any external value, removes the exposure instead of demanding resistance to '
                  'it. Aggregation of independent estimates, collected before discussion, '
                  'prevents the convergence of a committee on whichever figure was spoken first. '
                  'The premortem, in which every member of a team writes an account of how the '
                  'project failed before the commitment of any funds, produces measurably wider '
                  'and better calibrated ranges in about twenty minutes of otherwise '
                  'unremarkable meeting time. None of the three is training, and none makes any '
                  'demand on the susceptibility of the individual estimator.',
                  'The distinction worth retaining is between the correction of a person and the '
                  'design of a procedure, and the evidence on the first is poor while the '
                  'evidence on the second is reasonable. There is reason to think the '
                  'institutional preference for the first is a matter of convenience rather than '
                  'evidence: a training course has a date, a budget and an attendance register, '
                  'while an alteration to the sequence in which information reaches an '
                  'estimating team is nobody’s achievement and appears in no annual report. '
                  'Whether the procedural interventions survive a decade of contact with real '
                  'organisations remains an open question, and the honest answer is that the '
                  'follow-up evidence is thin. Whether the mere announcement of a bias dissolves '
                  'it is no longer open, and has been settled since the nineteen seventies.'],
        'guided': [('What shape did all four tested interventions have?',
                    ('A change to the order of the task',
                     'A person informed, motivated or given time, judging in the presence of the '
                     'anchor',
                     'A group discussion',
                     'A written record'),
                    1,
                    'Which is why the writer says they establish something narrower than is '
                    'claimed.'),
                   ('What does the literature therefore establish?',
                    ('That nothing can be done',
                     'That exposure cannot be overcome by effort',
                     'That experts are immune',
                     'That incentives help'),
                    1,
                    'And the writer distinguishes that from the stronger claim.'),
                   ('What is the common feature of the second shape of intervention?',
                    ('They are cheaper',
                     'They alter the order or structure of the task',
                     'They involve training',
                     'They are tested on experts'),
                    1,
                    'Rather than the state of mind of the person performing it.')],
        'exam': [('What does blind first estimation do?',
                  ('Requires resistance to the anchor',
                   'Removes the exposure rather than requiring resistance',
                   'Aggregates several figures',
                   'Delays the judgement'),
                  1,
                  'The figure is written and signed before any external value is disclosed.'),
                 ('What does aggregation of independent estimates prevent?',
                  ('Overconfidence',
                   'Convergence of a group on whichever figure was spoken first',
                   'Exposure to an anchor',
                   'Revision'),
                  1,
                  'Taken before discussion, which is the condition that matters.'),
                 ('What does the premortem require a team to do?',
                  ('Estimate twice',
                   'Write the account of how the project failed before approving it',
                   'Rank the risks',
                   'Consult an outsider'),
                  1,
                  'And it produces measurably wider and better calibrated ranges.'),
                 ('What does the writer say the three have in common?',
                  ('They are forms of training',
                   'None asks anybody to be less susceptible than they are',
                   'They work only for experts',
                   'They require a facilitator'),
                  1,
                  'Which is the distinction the whole passage turns on.'),
                 ('Why does the writer think the preference for training persists?',
                  ('The evidence supports it',
                   'A course has a date, a budget and an attendance register',
                   'Procedures are expensive',
                   'Managers are poorly informed'),
                  1,
                  'The writer calls the reason institutional rather than evidential.')]},
 'l1': {'sub': 'Making a decision under pressure',
        'caption': 'Two students after a seminar on decision-making',
        'skill': ('Hearing a correction about which part of thinking fails',
                  ['One speaker names the part that collapses under pressure. Fix it.',
                   'Listen for why thinking harder is not the remedy.',
                   'The item about the list is the one the whole conversation is for.']),
        'warm': [('Man: So we reason badly under pressure?',
                  ('The reasoning holds. The search collapses.',
                   'Yes, very badly.',
                   'In four minutes.',
                   'On a quiet Tuesday.'),
                  0,
                  'The correction is about which part fails, not about whether something does.'),
                 ('Man: Should I just think harder?',
                  ('You have four minutes. That is not available.',
                   'Yes, think harder.',
                   'The first adequate option.',
                   'Write it down.'),
                  0,
                  'The remedy has to be something you can do in the time you have.'),
                 ('Man: When do I make the list?',
                  ('Before the pressure arrives.',
                   'During the emergency.',
                   'Yes, make one.',
                   'Four options.'),
                  0,
                  'A list made in an emergency does not get made, which is the whole argument.')],
        'script': [('Woman', 'The bit I had wrong was which part of it fails.'),
                   ('Man', 'I assumed the reasoning goes.'),
                   ('Woman',
                    'So did I. Apparently the reasoning holds up quite well. What collapses is '
                    'the search. You look at fewer options, you take the first one that is good '
                    'enough, and you never find the better one because you never looked.'),
                   ('Man', 'Which sounds like you should slow down.'),
                   ('Woman',
                    'Except you cannot. If you have four minutes, advice to think harder is not '
                    'advice, it is a description of something you do not have.'),
                   ('Man', 'So what does work?'),
                   ('Woman',
                    'Writing the options down in advance. Not the decision, the options. On a '
                    'quiet afternoon when nothing is happening, list the four things you might '
                    'do when the thing goes wrong, and then in the emergency you are choosing '
                    'from a list rather than inventing one.'),
                   ('Man', 'That feels like it would never survive the actual day.'),
                   ('Woman',
                    'It survives better than memory does. The list does not have to be clever. '
                    'It has to exist, and a list made under pressure does not get made at all.'),
                   ('Man', 'Did she give evidence or is that just sensible?'),
                   ('Woman',
                    'Both, which is unusual. The checklist studies in surgery and aviation are '
                    'the strong ones, and the effect is larger for people who are already good '
                    'at the job, which is the opposite of what everybody expects.'),
                   ('Man', 'Why would that be?'),
                   ('Woman',
                    'Because the experts are the ones under enough pressure for the search to '
                    'collapse. A beginner is slow and thorough. An expert is fast and skips the '
                    'step they have never needed before.')],
        'items': [('What does the woman say she had wrong?',
                   ('Whether judgement fails',
                    'Which part of it fails',
                    'How long four minutes is',
                    'What a checklist is for'),
                   1,
                   'She separates the reasoning from the search.'),
                  ('What collapses under pressure, in her account?',
                   ('The reasoning', 'The search', 'The memory', 'The confidence'),
                   1,
                   'Fewer options, the first adequate one taken, the better one never found.'),
                  ('Why is thinking harder not advice?',
                   ('It is obvious',
                    'It describes something a person with four minutes does not have',
                    'It has been disproved',
                    'It only works for experts'),
                   1,
                   'The remedy has to fit the time available.'),
                  ('What does she say to write down in advance?',
                   ('The decision', 'The options', 'The outcome', 'The evidence'),
                   1,
                   'And she is explicit that it is the options and not the decision.'),
                  ('What does she say the list has to be?',
                   ('Clever', 'Short', 'In existence', 'Approved'),
                   2,
                   'A list made under pressure does not get made at all.'),
                  ('Which studies does she call the strong ones?',
                   ('Judges and sentencing',
                    'Checklists in surgery and aviation',
                    'Undergraduate estimates',
                    'Wheel-spinning experiments'),
                   1,
                   'And she notes that the effect is larger for people already good at the job.'),
                  ('Why is the effect larger for experts?',
                   ('They follow instructions better',
                    'They are under enough pressure for the search to collapse',
                    'They have more options',
                    'They are more confident'),
                   1,
                   'A beginner is slow and thorough; an expert is fast and skips a step.')]},
 'l2': {'sub': 'Anchoring and what survives it',
        'caption': 'A briefing on an estimating procedure nobody likes',
        'poster': ['Blind first · then disclosure',
                   'Revise over 15% = one written sentence',
                   'Final figure: median of first round'],
        'skill': ('Hearing a defence of an unpopular rule',
                  ['The speaker concedes the cost before defending the rule.',
                   'Note what she says the rule does not assume.',
                   'The item about the median is the one that makes the rule bite.']),
        'warm': [('Man: Does the rule assume we are careless?',
                  ('No, it assumes a seen figure cannot be unseen.',
                   'Yes, broadly.',
                   'Yes, it does.',
                   'Fifteen per cent.'),
                  0,
                  'She separates the mechanism from any judgement about competence.'),
                 ('Man: Why the median of the first round?',
                  ('Because the revised figures are already anchored.',
                   'Because it is easier to calculate.',
                   'Yes, the median.',
                   'At step 4.'),
                  0,
                  'Using the revised figures would undo the whole point of the order.'),
                 ('Man: Does she deny the cost?',
                  ('No, she says it is two days a scheme.',
                   'Yes, she says there is none.',
                   'Yes, she does.',
                   'Three schemes.'),
                  0,
                  'She concedes the cost in figures before she defends anything.')],
        'script': [('Woman',
                    'Let me start with the complaint, because it is correct. This procedure '
                    'costs about two days a scheme, the estimators do not like it, and two out '
                    'of four on the Calder job had to write the fifteen per cent sentence and '
                    'felt they were being marked down for doing what they were told. All true, '
                    'and I am not going to pretend otherwise. Here is what the rule is for. A '
                    'figure you have seen before you form your own estimate cannot be set aside '
                    'afterwards. That is not a claim about you. It survives warning, it survives '
                    'payment for accuracy, and it survives thirty years of practice, and the '
                    'study that bothers me most is the one where practising judges moved their '
                    'sentences towards a number that had been generated by dice in front of '
                    'them. So the procedure does not assume that anybody here is careless. It '
                    'assumes that nobody is immune, which is a different proposition and a '
                    'better supported one. Now the part that makes it bite, and the part people '
                    'miss. The unit figure is the median of the first-round brackets. Not the '
                    'revised ones. If we used the revised figures the whole order would be '
                    'decoration, because the revised figures are the anchored ones. And on the '
                    'request to let senior estimators see the budget first: no, and for the same '
                    'reason. Forty schemes a year is exactly the condition under which the '
                    'search collapses fastest.')],
        'items': [('What does the speaker do first?',
                   ('Defend the rule',
                    'Grant the complaint, with figures',
                    'Dismiss the complaint',
                    'Explain the median'),
                   1,
                   'Two days a scheme, and two of four writing the sentence.'),
                  ('What does she say a seen figure cannot be?',
                   ('Checked', 'Set aside afterwards', 'Disclosed', 'Revised'),
                   1,
                   'Which is the mechanism the procedure is built on.'),
                  ('Which study does she say bothers her most?',
                   ('The undergraduate wheel study',
                    'Judges moving sentences towards a number generated by dice',
                    'The payment-for-accuracy study',
                    'The surgery checklists'),
                   1,
                   'Because it tests expertise directly.'),
                  ('What does the procedure assume?',
                   ('That estimators are careless',
                    'That nobody is immune',
                    'That brackets are better than figures',
                    'That clients mislead'),
                   1,
                   'She calls that a different proposition and a better supported one.'),
                  ('Why is the median taken from the first round?',
                   ('It is easier',
                    'The revised figures are the anchored ones',
                    'The first round is more accurate',
                    'The client requires it'),
                   1,
                   'Otherwise the whole order would be decoration.'),
                  ('What does she say about the request from senior estimators?',
                   ('She will consider it',
                    'No, because forty schemes a year is when the search collapses fastest',
                    'Yes, for the most experienced only',
                    'She refers it upward'),
                   1,
                   'Experience is the condition the rule is most needed under, not least.')]},
 'l3': {'sub': 'Calibration, and whether it can be trained',
        'caption': 'A talk on feedback loops and why courses fail',
        'board': ['90% ranges contain the answer ~50%',
                  'Forecasters: almost perfect',
                  'Feedback: frequent, prompt, numerical, clear',
                  'Build the loop, not the course'],
        'skill': ('A talk that replaces training with a procedure',
                  ['The general finding comes first, then the exception, then the explanation.',
                   'Four properties of feedback. Note all four; the items ask for them.',
                   'A question about his recommendation wants what he says is almost always '
                   'chosen instead.']),
        'warm': [('Woman: How often do ninety per cent ranges contain the answer?',
                  ('About half the time.',
                   'About ninety per cent.',
                   'Yes, usually.',
                   'A dozen occupations.'),
                  0,
                  'The gap between stated and actual confidence is the finding the talk opens '
                  'with.'),
                 ('Woman: Why are forecasters different?',
                  ('Their feedback has four properties.',
                   'They are better trained.',
                   'Yes, they are.',
                   'Thirty per cent.'),
                  0,
                  'He attributes it to the loop rather than to the people.'),
                 ('Woman: What does he recommend?',
                  ('Build the loop.', 'Run a course.', 'Yes, something.', 'Within hours.'),
                  0,
                  'And he says the course is what organisations choose instead.')],
        'script': [('Man',
                    'Ask a professional for a range they are ninety per cent sure contains the '
                    'right answer. Across about a dozen occupations, those ranges contain the '
                    'answer roughly half the time. Physicians, engineers, analysts, the same '
                    'picture. Now, one group breaks the pattern completely, and it is not the '
                    'group anybody guesses. Weather forecasters. When a forecaster says thirty '
                    'per cent chance of rain, it rains on about thirty per cent of those days. '
                    'They are almost perfectly calibrated, and they have been for decades. The '
                    'obvious move is to say something flattering about meteorology, and the real '
                    'explanation is much duller and much more useful. Look at their feedback. It '
                    'is frequent: they predict every single day. It is prompt: the answer '
                    'arrives within hours. It is numerical: they said thirty per cent and you '
                    'can count. And it is unambiguous: it either rained or it did not, and there '
                    'is no arguing about it afterwards. Four properties. Now think about a '
                    'physician giving a prognosis. The outcome may be five years away, they may '
                    'never hear it, and if the patient does badly there are nine good '
                    'explanations available on the day. None of the four properties. So here is '
                    'the conclusion, and it is unwelcome in every organisation I have presented '
                    'it to. If you want better estimates from your people, you do not need a '
                    'course about bias. You need to build the loop: write the estimate down, '
                    'record it, compare it with the outcome, and do that often enough that '
                    'comparison becomes routine. That is an administrative job with a '
                    'spreadsheet, and the course is what gets bought instead, because the course '
                    'can be arranged by Friday.')],
        'items': [('What does the speaker say about ninety per cent ranges?',
                   ('They contain the answer ninety per cent of the time',
                    'They contain it roughly half the time',
                    'They are rarely requested',
                    'They vary by occupation'),
                   1,
                   'And the same picture appears across about a dozen occupations.'),
                  ('What does he say the obvious move is?',
                   ('To doubt the finding',
                    'To say something flattering about meteorology',
                    'To retrain the physicians',
                    'To buy a course'),
                   1,
                   'He calls the real explanation duller and more useful.'),
                  ('Which is NOT one of the four properties?',
                   ('Frequent', 'Prompt', 'Public', 'Unambiguous'),
                   2,
                   'The fourth is numerical; nothing in his list is about publication.'),
                  ('What does he say is available on the day a patient does badly?',
                   ('A numerical record',
                    'Nine good explanations',
                    'A prompt outcome',
                    'A comparison with the forecast'),
                   1,
                   'Which is what makes the feedback ambiguous rather than absent.'),
                  ('What does he say an organisation needs?',
                   ('A course about bias',
                    'To build the loop: write it down, record it, compare it',
                    'Better recruitment',
                    'More experienced staff'),
                   1,
                   'He calls it an administrative job with a spreadsheet.'),
                  ('Why does he say the course gets bought instead?',
                   ('It is cheaper',
                    'It can be arranged by Friday',
                    'It is more popular',
                    'It is better evidenced'),
                   1,
                   'That is the sentence the talk ends on.'),
                  ('What does he say the forecaster gets that nobody else does?',
                   ('A better training course',
                    'Feedback that is frequent, prompt, numerical and unambiguous',
                    'A larger sample',
                    'A statistical qualification'),
                   1,
                   'He goes through the four properties one at a time.')]},
 'l4': {'sub': 'Anchoring and what survives it',
        'caption': 'A lecture on an effect and the four things it survives',
        'board': ['Anchor: a number seen first',
                  'Disclosure fails. Incentive fails.',
                  'Time fails. Expertise fails.',
                  'All four ask you to resist while exposed'],
        'skill': ('A lecture organised as a list of failures',
                  ['Four remedies, in order, each with its result. The items ask for them.',
                   'The judges study answers an objection. Note the objection.',
                   'A question about the ending wants what the four have in common.']),
        'warm': [('Woman: Does telling people about it help?',
                  ('No, they are displaced by about as much.',
                   'Yes, substantially.',
                   'Yes, it helps.',
                   'Four remedies.'),
                  0,
                  'Disclosure is the first of the four failures.'),
                 ('Woman: What does more time do?',
                  ('It makes them more confident at the same displacement.',
                   'It reduces the effect.',
                   'Yes, it helps.',
                   'A throw of dice.'),
                  0,
                  'Confidence rises and the displacement does not move.'),
                 ('Woman: What do the four have in common?',
                  ('They ask you to resist while still exposed.',
                   'They were all done on students.',
                   'Yes, something.',
                   'Since the seventies.'),
                  0,
                  'That shared shape is the point the lecture ends on.')],
        'script': [('Man',
                    'An anchor is a number you see before you make a judgement, and the effect '
                    'is that your judgement moves towards it. The original demonstration is '
                    'almost insultingly simple: two groups watch a wheel spin, the wheel stops '
                    'on a number that has nothing to do with the question, they are asked to '
                    'estimate something, and the group that saw the bigger number gives bigger '
                    'answers. That has been reproduced for fifty years in a dozen countries. '
                    'Now, that on its own is a curiosity. What makes it important is the list of '
                    'things that do not fix it, and there are four. One: telling people. Explain '
                    'the effect fully, immediately before the task, and they are displaced about '
                    'as much as the people you told nothing. Two: paying them. Payment for '
                    'accuracy produces no reliable reduction and in some designs a small '
                    'increase. Three: giving them time. More time produces more confident '
                    'estimates at the same displacement, which is the worst possible '
                    'combination. Four, and this is the one that matters for anybody in this '
                    'room, expertise. Practising judges watched a sentencing recommendation '
                    'being produced by a throw of dice, in front of them, and their sentences '
                    'moved towards it, and afterwards they reported exactly the same confidence '
                    'in their own independence that the undergraduates had reported. So before '
                    'anybody says this is a finding about students: it is not. And before '
                    'anybody says those judges must have been half asleep, they were not; the '
                    'dice went across the table in front of them, and the sentences moved '
                    'anyway. Now look at the four together and ask what they share. Every one of '
                    'them asks a person to resist an influence while leaving them exposed to it. '
                    'That is a fact about the remedies we tried, and the next lecture is about '
                    'remedies of a different shape.')],
        'items': [('What is the original demonstration?',
                   ('Judges and dice',
                    'Two groups watching a wheel spin',
                    'Payment for accuracy',
                    'A premortem'),
                   1,
                   'And the number the wheel stops on has nothing to do with the question.'),
                  ('What does the lecturer say the effect alone would be?',
                   ('Important', 'A curiosity', 'Unbelievable', 'Specific to students'),
                   1,
                   'What makes it important is the list of things that do not fix it.'),
                  ('What does payment for accuracy produce?',
                   ('A reduction',
                    'No reliable reduction, and in some designs a small increase',
                    'Refusal to answer',
                    'Wider ranges'),
                   1,
                   'Which is the second of his four.'),
                  ('Why does he call more time the worst possible combination?',
                   ('It costs money',
                    'Confidence rises and the displacement does not move',
                    'It produces refusals',
                    'It only works for experts'),
                   1,
                   'More confident estimates at the same displacement.'),
                  ('What do the judges show?',
                   ('That the finding is about students',
                    'That expertise does not protect against the effect',
                    'That dice are a poor method',
                    'That sentencing is arbitrary'),
                   1,
                   'They reported the same confidence in their independence as the '
                   'undergraduates.')]},
 'l5': {'sub': 'Calibration, and whether it can be trained',
        'caption': 'A short talk on remedies of a different shape',
        'board': ['All four: resist while exposed',
                  'Blind first: removes exposure',
                  'Aggregate before discussion',
                  'Premortem: write the failure first'],
        'skill': ('A talk that reinterprets a body of failures',
                  ['The speaker accepts the failures and says what they tested.',
                   'Three interventions, each with the thing it removes rather than resists.',
                   'A question about her last point wants why the wrong remedy is chosen.']),
        'warm': [('Man: Does she dispute the four failures?',
                  ('No, she says they tested one shape of remedy.',
                   'Yes, she thinks they are wrong.',
                   'Yes, she does.',
                   'Three interventions.'),
                  0,
                  'Her argument is about what was tested, not whether it failed.'),
                 ('Man: What does blind first estimation remove?',
                  ('The exposure.', 'The incentive.', 'Yes, something.', 'The discussion.'),
                  0,
                  'It removes the exposure rather than requiring resistance to it.'),
                 ('Man: Why is the course chosen instead?',
                  ('It has a date, a budget and a register.',
                   'It is better evidenced.',
                   'Yes, it is chosen.',
                   'Since the seventies.'),
                  0,
                  'She calls the preference institutional rather than evidential.')],
        'script': [('Woman',
                    'I accept all four failures. What I want to point out is what all four of '
                    'them tested, because it is the same thing four times. In every one of those '
                    'designs a person is informed, or paid, or given longer, and then asked to '
                    'produce a judgement with the anchor still sitting in front of them. So what '
                    'the literature has established, very securely, is that exposure cannot be '
                    'defeated by effort. That is worth knowing. It is not the same statement as '
                    'nothing can be done. It is a narrower claim, and the narrower claim is the '
                    'useful one, because it tells you where to stop spending the training '
                    'budget. Now, remedies of a second shape, and their record is a good deal '
                    'better. They all have one thing in common: they change the order or the '
                    'structure of the task, and they ask nobody to be less susceptible than they '
                    'are. Blind first estimation. You write your figure and you sign it before '
                    'anybody tells you the client budget. That does not ask you to resist the '
                    'anchor, it means you never met it. Aggregation. Collect everybody’s '
                    'estimate independently before the meeting, because once a number has been '
                    'said aloud in a room the room converges on it. And the premortem: before '
                    'you approve the project, every person writes down the story of how it '
                    'failed. That one produces measurably wider ranges and better calibration, '
                    'and it takes twenty minutes. None of the three is training. So why do '
                    'organisations keep buying the training? Because a course has a date, a '
                    'budget and an attendance register, and changing the order in which '
                    'information reaches your estimators is nobody’s project and appears in no '
                    'annual report. If you want better estimates next quarter, change the order, '
                    'not the people.')],
        'items': [('What does the speaker say all four designs tested?',
                   ('Four different remedies',
                    'The same thing four times',
                    'Expertise',
                    'Group discussion'),
                   1,
                   'A person informed, paid or given time, judging with the anchor still '
                   'present.'),
                  ('What does she say the literature has established securely?',
                   ('That nothing can be done',
                    'That exposure cannot be defeated by effort',
                    'That experts are immune',
                    'That incentives help'),
                   1,
                   'And she insists that is not the same statement.'),
                  ('What does blind first estimation mean, in her account?',
                   ('Resisting the anchor',
                    'Never meeting the anchor',
                    'Estimating twice',
                    'Aggregating figures'),
                   1,
                   'You write and sign your figure before anybody discloses the budget.'),
                  ('Why collect estimates before the meeting?',
                   ('It is faster',
                    'Once a number is said aloud the room converges on it',
                    'People are more honest in writing',
                    'The chair prefers it'),
                   1,
                   'Which is the mechanism aggregation is designed against.'),
                  ('How long does she say the premortem takes?',
                   ('Two days', 'Twenty minutes', 'A quarter', 'She does not say'),
                   1,
                   'And it produces measurably wider ranges and better calibration.')]},
 'w1': {'sub': 'Questions about an experiment',
        'skill': ('Build a Sentence: asking what a study controlled for',
                  ['Eight of the ten are questions, and the useful ones ask what was held '
                   'constant.',
                   'An embedded question keeps statement order: do you know whether the groups '
                   'were told about the effect.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('The two groups gave different estimates.',
                    ['know',
                     'do',
                     'you',
                     'whether',
                     'the groups',
                     'saw',
                     'the same',
                     'evidence',
                     'beforehand'],
                    'Do you know whether the groups saw the same evidence beforehand?'),
                   ('The anchor was produced by spinning a wheel.',
                    ['were',
                     'the',
                     'participants',
                     'told',
                     'how',
                     'the figure',
                     'had',
                     'been',
                     'generated'],
                    'Were the participants told how the figure had been generated?'),
                   ('The judges moved towards the recommendation.',
                    ['did',
                     'the judges',
                     'know',
                     'that',
                     'the recommendation',
                     'came',
                     'from',
                     'a',
                     'throw',
                     'of dice'],
                    'Did the judges know that the recommendation came from a throw of dice?')],
        'exam': [('Payment for accuracy was offered in one condition.',
                  ['do',
                   'you',
                   'know',
                   'how',
                   'large',
                   'the payment',
                   'was',
                   'relative',
                   'to',
                   'the effect'],
                  'Do you know how large the payment was relative to the effect?'),
                 ('The training session lasted an hour.',
                  ['was',
                   'the effect',
                   'measured',
                   'again',
                   'more',
                   'than',
                   'a',
                   'week',
                   'afterwards'],
                  'Was the effect measured again more than a week afterwards?'),
                 ('Experts and students were compared.',
                  ['which',
                   'of',
                   'the two',
                   'groups',
                   'was',
                   'under',
                   'more',
                   'time',
                   'pressure'],
                  'Which of the two groups was under more time pressure?'),
                 ('The study reports a significant difference.',
                  ['can',
                   'you',
                   'tell',
                   'me',
                   'how',
                   'many',
                   'participants',
                   'were',
                   'in',
                   'each',
                   'condition'],
                  'Can you tell me how many participants were in each condition?'),
                 ('A warning was given before the task.',
                  ['did',
                   'the warning',
                   'name',
                   'the effect',
                   'or',
                   'just',
                   'ask',
                   'for',
                   'care'],
                  'Did the warning name the effect, or just ask for care?'),
                 ('The checklist reduced errors in surgery.',
                  ['is',
                   'the',
                   'reduction',
                   'larger',
                   'for',
                   'the',
                   'more',
                   'experienced',
                   'teams'],
                  'Is the reduction larger for the more experienced teams?'),
                 ('Two studies on debiasing disagree.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'what',
                   'each',
                   'of',
                   'them',
                   'actually',
                   'trained'],
                  'I would like to know what each of them actually trained.')]},
 'w2': {'sub': 'Anchoring and what survives it',
        'to': 'estimating@bridgeworks.co.uk',
        'date': '11/02/2030',
        'subject': 'Blind-first — the two days are real and the exemption is the wrong fix',
        'scenario': ['You are a senior estimator. Dani Ferreira has asked for senior staff to '
                     'see the client budget at step 1. You agree the procedure costs about two '
                     'days a scheme and that the fifteen per cent sentence feels punitive. You '
                     'do not agree with the exemption: the judges study is specifically about '
                     'experienced professionals. You have a different proposal, which is to drop '
                     'the written sentence and keep the order.',
                     'Write an email to the estimating team and Dani Ferreira.'],
        'bullets': ['Agree the two costs, briefly and in figures.',
                    'Say why the exemption is the wrong remedy, with the evidence.',
                    'Propose dropping the sentence and keeping the order.'],
        'skill': ('Agreeing with a complaint and refusing its remedy',
                  ['Concede the costs in figures. A concession without numbers reads as '
                   'politeness.',
                   'Attack the remedy with the evidence that is actually about the people '
                   'concerned.',
                   'Offer the cheaper change, so the reply can be yes rather than a debate.']),
        'model': ['Colleagues,',
                  '',
                  'Dani is right about both costs. Two days a scheme is what it has cost us as '
                  'well, and the fifteen per cent sentence does read as a reprimand to the '
                  'person who wrote the honest bracket. Nobody designing the form intended that '
                  'and it is what the form does.',
                  '',
                  'The exemption is the wrong fix, and the reason is the one piece of evidence '
                  'that is actually about us. The undergraduate studies would support Dani: '
                  'students guessing at unfamiliar quantities are not estimators. The judges '
                  'study does not. Practising judges with decades of sentencing behind them '
                  'moved towards a figure generated by dice in the room, and reported the same '
                  'confidence afterwards as the students had. Within the limits of what that '
                  'study shows, experience is not the protective factor, and there is reason to '
                  'think it is the opposite: the people doing forty schemes a year are the ones '
                  'working fast enough for the search to collapse.',
                  '',
                  'What I would change is the sentence, not the order. Drop the fifteen per cent '
                  'requirement entirely. It produces defensive brackets — a wide first-round '
                  'range that nobody will have to explain — which damages the median we actually '
                  'rely on. Keep the blind first round, keep the median of the first round, and '
                  'let people revise without writing anything.',
                  '',
                  'That removes the part the team resents and keeps the part the evidence '
                  'supports, and it costs nothing to try for a quarter. If the first-round '
                  'brackets tighten over three schemes, the sentence was the problem and we have '
                  'our answer.',
                  '',
                  'Yevgenia Dolan, Senior Estimator'],
        'notes': ['Both costs are conceded in figures, and the second concession names what the '
                  'form does rather than what it intended.',
                  'The evidence is split into the study that supports the request and the study '
                  'that does not, which is more persuasive than citing either alone.',
                  'The counter-proposal identifies a mechanism — defensive brackets — by which '
                  'the resented rule damages the figure the unit depends on.',
                  'It ends with a test over a stated period, so the proposal can be adopted '
                  'provisionally rather than argued about.'],
        'bandpair': {'mid': ['Colleagues,',
                             'I have a lot of sympathy with what Dani says. The new procedure '
                             'does take extra time, probably a couple of days on a bigger '
                             'scheme, and I think the fifteen per cent rule does feel rather '
                             'like a criticism of the estimator, which cannot have been '
                             'intended.',
                             'However, I am not sure that letting the senior estimators see the '
                             'budget first is really the answer. There is quite a famous study '
                             'where experienced judges were influenced by a number from dice, '
                             'which suggests that experience may not protect you as much as we '
                             'would like to think, and in fact being very busy might even make '
                             'it worse.',
                             'Perhaps instead we could look at removing the written sentence, '
                             'while keeping the rest of the procedure as it is. That might deal '
                             'with most of the unhappiness without losing the benefit. It would '
                             'be worth trying for a while to see what happens.',
                             'Best wishes, Yevgenia Dolan'],
                     'top': ['Colleagues,',
                             'Dani is right about both costs. Two days a scheme matches our '
                             'experience, and the fifteen per cent sentence reads as a reprimand '
                             'to whoever wrote the honest bracket. That is what the form does, '
                             'whatever it was meant to do.',
                             'The exemption is the wrong fix. The undergraduate studies would '
                             'support it; the judges study does not. Judges with decades of '
                             'sentencing moved towards a figure generated by dice in the room '
                             'and were as confident afterwards as the students. Experience is '
                             'not the protective factor, and there is reason to think the people '
                             'doing forty schemes a year are the ones working fast enough for '
                             'the search to collapse.',
                             'Change the sentence, not the order. The fifteen per cent rule '
                             'produces defensive brackets, a wide first-round range nobody will '
                             'have to explain, and that damages the median we rely on. Keep the '
                             'blind round, keep the first-round median, let people revise '
                             'silently.',
                             'That drops what the team resents and keeps what the evidence '
                             'supports. If the brackets tighten over three schemes, the sentence '
                             'was the problem. Yevgenia Dolan'],
                     'diffs': ['It concedes both costs with figures and says what the form does '
                               'rather than what nobody intended.',
                               'It splits the evidence into the study that supports the request '
                               'and the study that refutes it, instead of calling one of them '
                               'famous.',
                               'It names the mechanism by which the resented rule damages the '
                               'figure the unit depends on, which the middle answer does not '
                               'reach.',
                               'It proposes a test with a stated length, so the change can be '
                               'adopted provisionally.',
                               'It drops the hedging — I am not sure, perhaps, might, it would '
                               'be worth — which in the middle answer removes the force of every '
                               'claim it makes.']}},
 'w3': {'sub': 'Calibration, and whether it can be trained',
        'prof': 'Dr Ravensbourne',
        'question': 'A hospital trust can spend its improvement budget on a two-day course on '
                    'decision-making for all senior clinicians, or on a system that records '
                    'every prognosis and sends each clinician a personal comparison with '
                    'outcomes every quarter. The course has good evaluations. The system has no '
                    'evaluations because nobody has built one. Which should it fund?',
        'posts': [('Idris',
                   'w',
                   'The system. The whole point of the forecaster case is that the loop does the '
                   'work and the instruction does not, and a two-day course with good '
                   'evaluations is a course people enjoyed.'),
                  ('Mina',
                   'm',
                   'Idris is comparing a measured thing with an imagined one. The course has '
                   'evaluations; the system has a theory and a weather station. I would rather '
                   'fund the thing somebody has actually tried.')],
        'skill': ('A question about evidence for a thing nobody has built',
                  ['Idris argues from the mechanism; Mina from the state of the evidence.',
                   'The passage limits its own implication to one comparison, which is a '
                   'concession to Mina.',
                   'A strong answer says what would count as evidence and how to get it '
                   'cheaply.']),
        'starters': ['Mina is right that…, although what follows from it…',
                     'The distinction worth drawing is between… and…',
                     'The question remains open about…',
                     'So the trust should…, which costs…'],
        'model': ['Mina is right that one of these has been evaluated and the other has not, and '
                  'she has treated that as settling the question when it is the question. Course '
                  'evaluations measure whether participants enjoyed two days and felt better '
                  'informed, and the passage is specifically about interventions of that shape '
                  'failing to move calibration. An evaluation that measures the wrong outcome is '
                  'not evidence for the thing being compared.',
                  'Idris is right about the mechanism and he has skipped the cost. The '
                  'forecaster loop works because the outcome arrives within hours; a prognosis '
                  'loop in a hospital returns results over years, so the feedback is frequent '
                  'and numerical but neither prompt nor entirely unambiguous. Two of the four '
                  'properties, not four.',
                  'So the trust should fund the system in one directorate rather than across the '
                  'trust, and define the outcome before it starts: the proportion of ninety per '
                  'cent ranges containing the result, measured at baseline and at eighteen '
                  'months. That costs a fraction of a trust-wide course and produces the '
                  'evaluation Mina is properly asking for. The question remains open about '
                  'whether a two-year loop trains calibration as a one-day loop does, and the '
                  'only way anybody will ever answer it is for one organisation to build one and '
                  'publish what happened.'],
        'model_words': 214},
 'w4': {'sub': 'Anchoring and what survives it',
        'skill': ('Concessive conditionals: even if, whether or not',
                  ['Even if concedes a condition and denies that it changes the outcome: even if '
                   'the figure is arbitrary, the estimate moves.',
                   'Whether or not concedes both branches at once: whether or not you were '
                   'warned, the effect appears.',
                   'Both take a comma before the main clause, and the main clause carries the '
                   'claim.']),
        'guided': [('Concede the condition and keep the outcome.',
                    ['even if',
                     'the figure',
                     'is',
                     'obviously',
                     'arbitrary',
                     'the',
                     'estimate',
                     'still',
                     'moves'],
                    'Even if the figure is obviously arbitrary, the estimate still moves.'),
                   ('Concede both branches.',
                    ['whether',
                     'or not',
                     'you',
                     'were',
                     'warned',
                     'the effect',
                     'appears',
                     'at',
                     'the same',
                     'size'],
                    'Whether or not you were warned, the effect appears at the same size.'),
                   ('Concede an unlikely condition.',
                    ['even if',
                     'the judges',
                     'had',
                     'been',
                     'paid',
                     'the sentences',
                     'would',
                     'have',
                     'moved'],
                    'Even if the judges had been paid, the sentences would have moved.')],
        'exam': [('Concede the condition with a negative main clause.',
                  ['even if',
                   'the explanation',
                   'is',
                   'given',
                   'first',
                   'the',
                   'displacement',
                   'does',
                   'not',
                   'fall'],
                  'Even if the explanation is given first, the displacement does not fall.'),
                 ('Concede both branches about expertise.',
                  ['whether',
                   'or not',
                   'the estimator',
                   'is',
                   'experienced',
                   'the',
                   'anchor',
                   'does',
                   'its',
                   'work'],
                  'Whether or not the estimator is experienced, the anchor does its work.'),
                 ('Concede a condition about time.',
                  ['even if',
                   'there',
                   'is',
                   'an hour',
                   'available',
                   'the estimate',
                   'moves',
                   'by',
                   'as',
                   'much'],
                  'Even if there is an hour available, the estimate moves by as much.'),
                 ('Concede both branches about the wheel.',
                  ['whether',
                   'or not',
                   'the number',
                   'came',
                   'from',
                   'a wheel',
                   'the group',
                   'is',
                   'displaced'],
                  'Whether or not the number came from a wheel, the group is displaced.'),
                 ('Concede the condition and name the remedy.',
                  ['even if',
                   'nobody',
                   'can',
                   'resist',
                   'it',
                   'the order',
                   'of',
                   'the task',
                   'can',
                   'be',
                   'changed'],
                  'Even if nobody can resist it, the order of the task can be changed.')]},
 'w5': {'sub': 'Calibration, and whether it can be trained',
        'prof': 'Dr Aleksanyan',
        'question': 'A government agency proposes that every major project business case include '
                    'a premortem: before approval, each member of the approving committee writes '
                    'an account of how the project failed. Supporters cite the calibration '
                    'evidence. Opponents say a mandatory premortem becomes a form-filling '
                    'exercise within two years and that the evidence comes from voluntary use. '
                    'Should it be mandatory?',
        'posts': [('Bea',
                   'w',
                   'Make it mandatory. The procedural interventions are the only ones with a '
                   'decent record, and waiting for committees to adopt one voluntarily is how we '
                   'have spent the last thirty years.'),
                  ('Caius',
                   'm',
                   'The evidence Bea cites is from teams who chose to do it. A premortem written '
                   'to satisfy a template is not the same intervention, and I would expect the '
                   'measured benefit to vanish and the paperwork to remain.')],
        'skill': ('A question about making a voluntary practice compulsory',
                  ['Bea argues from the record of the practice; Caius from what compulsion does '
                   'to it.',
                   'The second passage says the open question is whether procedural remedies '
                   'survive contact with organisations.',
                   'A strong answer designs the requirement so that compliance and benefit are '
                   'harder to separate.']),
        'starters': ['Caius is right that…, although the remedy for it is…',
                     'The distinction worth drawing is between… and…',
                     'The question remains open whether…',
                     'So the requirement should be…, on condition that…'],
        'model': ['Caius is right about the mechanism and names the open question in the second '
                  'passage rather than an objection to it. A practice that works because people '
                  'chose it may not work when prescribed, and nobody has tested that, which is '
                  'an argument for designing the requirement carefully rather than for leaving '
                  'the matter to voluntary adoption that has not occurred in thirty years. His '
                  'objection is also the right shape, because it predicts where the measured '
                  'benefit came from instead of merely doubting it.',
                  'Bea is right about the record and treats mandatory and voluntary as the same '
                  'intervention under two names. They are not, and the difference is exactly '
                  'what Caius has identified: the measured effect comes from a team that wanted '
                  'the exercise, and a template filled in on the morning of the approval meeting '
                  'is a different object.',
                  'So the requirement should be mandatory in form and specific in content: each '
                  'member writes, individually and before the meeting, one page naming the '
                  'single most likely cause of failure and the month in which it would become '
                  'visible, and the pages are circulated unedited. Whether or not anybody takes '
                  'it seriously, that produces a record against which the project can later be '
                  'compared, which is the feedback loop the previous passage says trains '
                  'calibration. The paperwork Caius fears is then the intervention rather than a '
                  'substitute for it, and that is the only form of compulsion I can see that '
                  'does not collapse into a form-filling exercise. Even if the exercise is '
                  'resented, the record survives the resentment, and the resentment is not '
                  'evidence about the instrument.'],
        'model_words': 270},
 'sp': [{'sub': 'Making a decision under pressure',
         'focus': 'correcting which part of something fails',
         'skill': ('The reasoning holds. The search collapses.',
                   ['Two short sentences, and the second is the correction.',
                    'Stress the two nouns, not the verbs.',
                    'Then give the consequence, so the correction has a use.']),
         'repeat': ['The reasoning holds.',
                    'The search collapses.',
                    'You never find the better one.',
                    'Write the options down in advance.',
                    'Thinking harder is not available in four minutes.',
                    'You take the first option that is good enough.',
                    'A list made under pressure does not get made at all, which is the whole '
                    'reason for making one early.'],
         'theme': 'deciding quickly',
         'qs': ['Tell me about a decision you had to take in a few minutes. How did you take it?',
                'Some people say the first instinct is usually right. How far would you agree?',
                'How would you explain to a friend why a checklist helps an expert more than a '
                'beginner?',
                'Finally, describe a preparation that made a later decision easier.'],
         'model': [(2,
                    'I would split it. A first instinct is often a good answer and almost never '
                    'the best available, because it is the first thing the search produced '
                    'rather than the best thing in it.'),
                   (3,
                    'A beginner is slow and checks everything anyway. An expert is fast, under '
                    'real pressure, and skips the step they have never needed before, which is '
                    'exactly the step a list catches.')],
         'selfcheck': ['I used two short sentences for the correction',
                       'I stressed the two nouns',
                       'I used at least two of the unit’s field words']},
        {'sub': 'Anchoring and what survives it',
         'focus': 'granting a complaint in figures before answering it',
         'skill': ('Two days a scheme is what it cost us as well',
                   ['Give the number the other person gave. Repeating their figure concedes more '
                    'than any adjective.',
                    'Then the second concession, in one clause.',
                    'Only then turn, and turn with the evidence rather than with a view.']),
         'repeat': ['Dani is right about both costs.',
                    'The sentence reads as a reprimand.',
                    'That is what the form does.',
                    'The exemption is the wrong fix.',
                    'The judges moved towards a number from dice.',
                    'Two days a scheme is what it cost us.',
                    'Experience is not the protective factor, and there is reason to think it is '
                    'the opposite.'],
         'theme': 'agreeing with a complaint and refusing the remedy',
         'qs': ['Tell me about a complaint you agreed with and a solution you did not. What did '
                'you propose?',
                'Some people say experience protects you from making bad judgements. How far '
                'would you agree?',
                'How would you explain to a friend why a rule can be right and resented?',
                'Finally, describe a procedure you follow that you dislike.'],
         'model': [(2,
                    'I would say it protects you from the errors you have met before and does '
                    'nothing about the pull of a number you happened to see first. The judges '
                    'study is the one that settles it for me.'),
                   (3,
                    'Because the thing it prevents is invisible and the cost it imposes is not. '
                    'You feel the two extra days every time and you never see the estimate you '
                    'did not get pulled towards.')],
         'selfcheck': ['I repeated the other person’s own figure',
                       'I made the second concession in one clause',
                       'I turned with evidence rather than with a view']},
        {'sub': 'Calibration, and whether it can be trained',
         'focus': 'blocking two conclusions at once',
         'skill': ('It would be wrong to conclude that it can be taught, and equally wrong to '
                   'conclude that it is fixed',
                   ['Give both wrong conclusions before you give yours.',
                    'Keep them parallel in grammar, so the symmetry does the work.',
                    'Then give your own in one short sentence.']),
         'repeat': ['It is numerical and unambiguous.',
                    'Their feedback is frequent and prompt.',
                    'A physician may never hear the outcome.',
                    'Nine good explanations are available on the day.',
                    'It would be equally wrong to conclude that it is fixed.',
                    'It would be wrong to conclude that it can be taught by instruction.',
                    'Build the loop rather than run the course, because the course can be '
                    'arranged by Friday.'],
         'theme': 'a skill that is trained by something other than training',
         'qs': ['Tell me about a skill you improved without being taught. What produced the '
                'improvement?',
                'Some people say anything can be taught on a course. How far would you agree?',
                'How would you explain to a friend why weather forecasters are well calibrated?',
                'Finally, describe feedback you receive that is too slow to be useful.'],
         'model': [(2,
                    'I would say a course can teach what to do and almost never teaches '
                    'judgement, because judgement needs the loop: a prediction, an outcome and a '
                    'comparison, repeated often enough to be boring.'),
                   (3,
                    'They make a numbered prediction every day and find out within hours whether '
                    'it was right, and nobody can argue about whether it rained. Almost no other '
                    'job has all of that.')],
         'selfcheck': ['I gave both wrong conclusions first',
                       'I kept them parallel in grammar',
                       'I gave my own in one short sentence']},
        {'sub': 'Anchoring and what survives it',
         'focus': 'listing what a finding survives',
         'skill': ('It survives disclosure, incentive, time and expertise',
                   ['Count the items before you list them. Four, then the four.',
                    'Keep each one to two or three words. A long item breaks the rhythm.',
                    'Then give the one that answers the obvious objection, at length.']),
         'repeat': ['It survives being explained.',
                    'It survives more time.',
                    'The judgement moves towards it.',
                    'It survives being paid for accuracy.',
                    'It survives thirty years of practice.',
                    'An anchor is a number you see first.',
                    'The judges watched the number come out of a throw of dice and their '
                    'sentences moved towards it anyway.'],
         'theme': 'a finding that is hard to argue with',
         'qs': ['Tell me about something you believed and then found the evidence against. What '
                'convinced you?',
                'Some people say experiments on students tell us nothing about professionals. '
                'How far would you agree?',
                'How would you explain the anchoring effect to a friend?',
                'Finally, describe a time somebody’s figure changed your own estimate.'],
         'model': [(2,
                    'I would have agreed before this unit. The judges study is the answer: the '
                    'same effect, in people with decades of practice, watching the number being '
                    'generated by dice in front of them.'),
                   (3,
                    'If you see a number before you make an estimate, your estimate moves '
                    'towards it, even when the number is obviously meaningless and even when you '
                    'have just been told that this happens.')],
         'selfcheck': ['I gave the count before the list',
                       'I kept each item short',
                       'I expanded only the one that answers the objection']},
        {'sub': 'Calibration, and whether it can be trained',
         'focus': 'saying what a body of evidence actually tested',
         'skill': ('All four tested the same thing: resisting while exposed',
                   ['Describe the shape of the studies before you evaluate them.',
                    'Stress the word same. The claim is that four results are one result.',
                    'Then name the second shape, and what it removes rather than resists.']),
         'repeat': ['I accept all four failures.',
                    'Exposure cannot be defeated by effort.',
                    'Collect the estimates before anybody speaks.',
                    'They tested the same thing four times.',
                    'Blind first estimation means you never met the anchor.',
                    'That is not the same as nothing can be done.',
                    'A course has a date, a budget and an attendance register, and changing the '
                    'order of a task is nobody’s project.'],
         'theme': 'reinterpreting evidence rather than disputing it',
         'qs': ['Tell me about evidence you accepted and read differently from others. What was '
                'the difference?',
                'Some people think if several studies agree the question is settled. What do you '
                'think?',
                'How would you explain to a friend why a procedure beats a warning?',
                'Finally, describe a change of order or structure that solved a problem.'],
         'model': [(2,
                    'I would ask what they have in common first. Four studies that agree can be '
                    'four tests of one assumption, in which case they are strong evidence about '
                    'that assumption and silent about everything else.'),
                   (3,
                    'A warning asks you to resist something you are still looking at. A '
                    'procedure arranges for you not to be looking at it, which requires nothing '
                    'of you at all.')],
         'selfcheck': ['I described the shape of the studies first',
                       'I stressed that four results were one result',
                       'I named what the second shape removes']}],
 'gram': {'title': 'Concessive conditionals: even if, whether or not',
          'headers': ['Form', 'What it concedes'],
          'rows': [('even if the figure is arbitrary',
                    'one condition, and denies that it matters'),
                   ('whether or not you were warned', 'both branches at once'),
                   ('even if the judges had been paid', 'an unreal past condition'),
                   ('however carefully the estimate is made', 'any degree of the condition'),
                   ('whatever the source of the number', 'any value of a variable'),
                   ('granted that the effect is real', 'the premise, before an objection'),
                   ('for all that the warning was given',
                    'a concession in formal written style')],
          'notes': ['Even if is not the same as if. If introduces a condition the outcome '
                    'depends on; even if introduces one the outcome is independent of. Writing '
                    'even if where you mean if reverses your claim, and this is the commonest '
                    'single error in the Writing section at B2.',
                    'Whether or not concedes both branches and is therefore stronger than even '
                    'if. Use it when neither answer would change your conclusion, and do not use '
                    'it when one of them would.',
                    'All of these take a comma before the main clause, and the main clause is '
                    'where the claim goes. A concessive clause with no main clause after it is '
                    'the other common fault: granted, the data is thin, is not a sentence '
                    'anybody can use.'],
          'watch': 'Do not follow even if with would in the same clause. "Even if they would be '
                   'paid" is not English; the form is even if they were paid, with would in the '
                   'main clause.',
          'ex': [('Join with even if or whether or not.',
                  ['The figure is arbitrary. The estimate moves.',
                   'You were warned. The effect appears.',
                   'The judges had been paid. The sentences would have moved.',
                   'The estimator is experienced. The anchor does its work.',
                   'There is an hour available. The estimate moves by as much.',
                   'Nobody can resist it. The order of the task can be changed.'],
                  ['Even if the figure is arbitrary, the estimate moves.',
                   'Whether or not you were warned, the effect appears.',
                   'Even if the judges had been paid, the sentences would have moved.',
                   'Whether or not the estimator is experienced, the anchor does its work.',
                   'Even if there is an hour available, the estimate moves by as much.',
                   'Even if nobody can resist it, the order of the task can be changed.']),
                 ('Choose if or even if.',
                  ['______ the budget is disclosed first, the estimate is anchored.',
                   '______ you want an unanchored figure, collect it before disclosure.',
                   '______ the explanation is given, the displacement does not fall.',
                   '______ the committee agrees, the procedure begins in April.'],
                  ['Even if', 'If', 'Even if', 'If']),
                 ('Correct the concessive error.',
                  ['Even if they would be paid, the effect appears.',
                   'Granted, the data is thin.',
                   'Whether the estimator is experienced, the anchor works.',
                   'Even if the figure is arbitrary the estimate moves.'],
                  ['Even if they were paid, the effect would appear.',
                   'Granted, the data is thin, but the direction is clear.',
                   'Whether or not the estimator is experienced, the anchor works.',
                   'Even if the figure is arbitrary, the estimate moves.'])],
          'bas': 'Build a Sentence in this unit asks what a study controlled for. Several of the '
                 'tiles hold a concessive opener: even if, whether or not. It goes first, with '
                 'the comma, and the question goes in the main clause.'},
 'fault': {'text': 'Even if they would be paid, the effect appears. Granted, the data is thin. '
                   'Whether the estimator is experienced, the anchor works. Even if the figure '
                   'is arbitrary the estimate moves. The four studies was testing the same '
                   'thing. Do you know whether was the figure disclosed first?',
           'faults': [('Even if they would be paid, the effect appears',
                       'Even if they were paid, the effect would appear',
                       'Would belongs in the main clause of an unreal condition, not in the '
                       'concessive clause.'),
                      ('Granted, the data is thin.',
                       'Granted, the data is thin, but the direction is clear.',
                       'A concessive clause needs a main clause that uses it, or the reader is '
                       'left waiting for the point.'),
                      ('Whether the estimator is experienced, the anchor works',
                       'Whether or not the estimator is experienced, the anchor works',
                       'Whether on its own introduces an embedded question; the concessive form '
                       'is whether or not.'),
                      ('Even if the figure is arbitrary the estimate moves',
                       'Even if the figure is arbitrary, the estimate moves',
                       'A fronted concessive clause takes a comma before the main clause.'),
                      ('The four studies was testing the same thing',
                       'The four studies were testing the same thing',
                       'A plural subject takes a plural verb however long the phrase before it.'),
                      ('whether was the figure disclosed first',
                       'whether the figure was disclosed first',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('a number present before a judgement, which pulls it', 'anchor'),
                   ('any attempt to remove a bias from a judgement', 'debiasing'),
                   ('how easily an example comes to mind', 'availability'),
                   ('knowledge of the outcome, which reshapes the memory', 'hindsight'),
                   ('the formal procedure for obtaining an estimate', 'elicitation'),
                   ('an exercise imagining the failure before it happens', 'premortem'),
                   ('to give a high and a low figure rather than one', 'bracket'),
                   ('the combining of separate judgements into one', 'aggregation'),
                   ('the sequence in which things are presented', 'ordering'),
                   ('to put forward as a starting assumption', 'postulate'),
                   ('not agreeing with the rest', 'discrepant'),
                   ('how believable something is, before testing', 'plausibility')],
         'gram': [('______ if the figure is arbitrary, the estimate moves.', 'Even'),
                  ('Whether ______ not you were warned, the effect appears.', 'or'),
                  ('Even if they ______ paid, the effect would appear.', 'were'),
                  ('______ that the effect is real, the remedy is procedural.', 'Granted'),
                  ('______ the source of the number, the group is displaced.', 'Whatever'),
                  ('______ carefully the estimate is made, the pull remains.', 'However'),
                  ('If you want an unanchored figure, collect it ______ disclosure.', 'before'),
                  ('Do you know whether the figure ______ disclosed first?', 'was')],
         'mini': [('An anchor affects a judgement because',
                   ('it is usually accurate',
                    'a number seen before the judgement displaces it',
                    'people are careless',
                    'it is repeated'),
                   1,
                   'The displacement occurs even when the number is obviously unrelated to the '
                   'question.'),
                  ('Which of these reduces the effect?',
                   ('A full explanation beforehand',
                    'Payment for accuracy',
                    'More time',
                    'Writing the estimate before disclosure'),
                   3,
                   'The first three were tested and failed; the fourth removes the exposure '
                   'instead of resisting it.'),
                  ('The judges study matters because',
                   ('it used a large sample',
                    'it tests whether expertise protects against the effect',
                    'it was replicated',
                    'it involved dice'),
                   1,
                   'The judges were as confident in their independence afterwards as the '
                   'undergraduates had been.'),
                  ('Weather forecasters are well calibrated because',
                   ('meteorology is exact',
                    'their feedback is frequent, prompt, numerical and unambiguous',
                    'they are better trained',
                    'they use probabilities'),
                   1,
                   'No other profession in the comparison has all four properties.'),
                  ('The premortem asks a team to',
                   ('rank the risks',
                    'write the account of how the project failed, before approval',
                    'estimate twice',
                    'consult an outsider'),
                   1,
                   'And it produces measurably wider and better calibrated ranges.'),
                  ('The difference between the two kinds of remedy is that',
                   ('one is cheaper',
                    'one asks a person to resist and the other changes the task',
                    'one is newer',
                    'one works only for experts'),
                   1,
                   'Which is why the second has the better record without asking anybody to be '
                   'less susceptible.')]},
 'tip': 'Try the unit’s own procedure on the unit. Before you read cycle 5, write down in one '
        'sentence what you think can be done about anchoring, and sign it. Then read the passage '
        'and see whether your sentence moved. If it did, you have just felt the effect the whole '
        'unit is about, under laboratory conditions you set up yourself.'}

