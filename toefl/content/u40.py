# -*- coding: utf-8 -*-
"""Unit 40 — Risk, Decision and Uncertainty. Volume 4. Closing unit."""
from content._g import gaps

_GT, _GA = gaps(
    'People are not bad at risk. They are bad at the particular kind of risk that has no '
    'story attac{hed}. A one in ten thousand chance of something vivid will be '
    'overestim{ated} by almost everybody, and a one in ten chance of something tedious will '
    'be ign{ored}, and both errors come from the same place: we judge likelihood by how '
    'easily we can imag{ine} the event. This is not stupidity. It is a rule of thumb that '
    'works very well in an environment where the things you can picture are the things that '
    'have actually happ{ened} to somebody you know.')

_ET, _EA = gaps(
    'There are two kinds of not knowing and most public argument conflates them. The first '
    'is risk: the possible outcomes are known and so are their probabil{ities}, as with an '
    'insurance table or a dice game. The second is uncertainty: the outcomes may be known '
    'and the probabilities are not avail{able} at all, because the event has never happened '
    'often enough to produce a frequency. Decisions under risk can be optim{ised}, which is '
    'why insurance works and why casinos are profit{able}. Decisions under uncertainty '
    'cannot be, and the appropriate response to them is complet{ely} different: not a '
    'calculation of the best outcome but an arrangement that survives being '
    'wrong. Institutions get into difficulty when they apply the first set of tools to '
    'the second kind of problem, which they do constantly, because a number is '
    'defens{ible} at a meeting and a judgement is not. The pressure is not intellect{ual}. '
    'Anybody competent knows the difference. The pressure is that a decision supported by a '
    'figure can be justified afterwards by producing the fig{ure}, and a decision supported '
    'by judgement can only be justified by having been ri{ght}. Given that asymmetry, the '
    'invention of spurious precision is not a failure of training but an entirely rat{ional} '
    'response to how the people making decisions are judged.')

UNIT = dict(
    n=40, vol=4, level='B2',
    title='Risk, Decision and Uncertainty',
    icons=['chart', 'speech', 'news'],
    subs=['How people misjudge risk', 'Risk and uncertainty are different',
          'Deciding without the number'],
    grammar='Discourse management and stance',
    field='probability, uncertainty, robustness',
    opener_line='The last unit of the course is about the thing every other unit has been '
                'practising: managing a long argument so a reader can follow it, and marking '
                'your own position in it. Everything you have learned about hedging, '
                'emphasis and cohesion comes together here.',
    candos=[
        'I can manage a long argument with signposts a reader can follow.',
        'I can mark my own position at the right strength and keep it consistent.',
        'I can distinguish risk from uncertainty and write about each correctly.',
        'I can concede, qualify and conclude in a single coherent paragraph.',
        'I can follow an extended talk and identify the speaker’s own view.',
        'I can write a full discussion answer under time pressure.',
    ],

    acad=[
        ('probability', 'the chance of an outcome, as a number'),
        ('uncertainty', 'not knowing the probabilities at all'),
        ('robustness', 'performing acceptably across many possible futures'),
        ('volatility', 'how much a quantity moves up and down'),
        ('expectation', 'the average outcome, weighted by probability'),
        ('heuristic', 'a rule of thumb'),
        ('salience', 'how readily something comes to mind'),
        ('overconfidence', 'stating more certainty than the evidence supports'),
        ('precaution', 'acting to avoid a harm that is not yet proven'),
        ('contingency', 'a possible event planned for in advance'),
        ('mitigation', 'reducing the severity of a harm'),
        ('buffer', 'spare capacity held against a shock'),
        ('aversion', 'a settled dislike of something'),
        ('illusory', 'seeming real without being so'),
        ('tractable', 'able to be handled or solved'),
        ('conjecture', 'a guess offered for testing'),
        ('deliberation', 'careful collective consideration'),
        ('accountable', 'required to answer for a decision'),
    ],
    family=('decide', [
        ('decision', 'noun', 'a decision taken under uncertainty'),
        ('decisive', 'adjective', 'the decisive objection was procedural'),
        ('indecision', 'noun', 'indecision is itself a choice'),
    ]),
    collocs=[
        ('weigh up', 'to consider the balance of'),
        ('rule of thumb', 'a rough practical method'),
        ('err on the side of', 'to choose the safer mistake'),
        ('hedge your bets', 'to avoid committing fully to one outcome'),
        ('worst case', 'the least favourable outcome considered'),
        ('on balance', 'taking everything into account'),
        ('in the final analysis', 'when everything has been considered'),
        ('all things considered', 'weighing everything'),
        ('stack the odds', 'to make an outcome more likely'),
        ('come what may', 'whatever happens'),
    ],
    stance=[
        ('on balance', 'weighing everything together'),
        ('to my mind', 'the writer marks a personal view'),
        ('it seems to me that', 'the writer asserts with reservation'),
        ('whatever else is true', 'the writer marks a fixed point'),
        ('I would go further', 'the writer strengthens a point just made'),
    ],
    nuance=[
        ('risk / uncertainty', 'probabilities known / not available'),
        ('robust / optimal', 'good across many futures / best in one'),
        ('precaution / prohibition', 'acting cautiously / forbidding'),
    ],
    vocab_talk=[
        'Name a risk you overestimate and one you ignore. Why those?',
        'Give an example of risk and one of uncertainty. What is the difference?',
        'When is a rough answer better than a precise one?',
        'Should a decision-maker be judged on the decision or the outcome?',
    ],
    again=['base rate', 'expected value', 'tail risk', 'scenario planning',
           'stress test', 'confidence interval', 'hindsight bias', 'option value'],

    r1=dict(
        sub='How people misjudge risk',
        skill=('Completing the full range of endings',
               ['This closing unit mixes everything: -ity and -ion nouns, -ible and -able '
                'adjectives, -ly adverbs, and bare verbs after modals.',
                'Decide the part of speech from the grammar first, every time.',
                'If a gap could be two parts of speech, read the next three words.']),
        guided_text=_GT, guided=_GA,
        guided_hint='attac--- is attached — the slot follows has no story, so it needs a past '
                    'participle acting as an adjective.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Risk and uncertainty are different',
        skill=('Reading a decision framework against a case',
               ['A framework tells you which method to use when. A case tests which '
                'category it falls into.',
                'The categories usually turn on whether a frequency exists.',
                'A framework that says do not produce a number is unusual, and the reason '
                'will be stated.']),
        docs=[
            ('notice', 'University Risk Committee · framework for decisions under uncertainty', [
                '# Category A — quantified risk',
                '* Where a frequency exists from comparable cases, a probability and an '
                'expected cost must be stated.',
                '# Category B — uncertainty',
                '* Where no frequency exists, no probability is to be stated. Papers must '
                'instead set out three scenarios and the response to each.',
                '# Why no number',
                '* A probability invented for a Category B decision is treated by readers as '
                'evidence and cannot be withdrawn later.',
                '# Approval',
                '* Category B papers require a named decision-owner and a review date, and '
                'may not be approved on the nod.',
            ], 'notice'),
            ('email', 'r.vandermerwe@uni.ac.uk', 'j.halloran@uni.ac.uk',
             '04/12/2028', 'Your paper on the new campus energy contract', [
                 'Dear Dr Halloran,',
                 '',
                 'Thank you for the paper, which is the clearest thing the Committee will see',
                 'this term. I am sending it back for one change and I want to explain why,',
                 'because the change will look like a step backwards.',
                 '',
                 'Section 4 gives a 12 per cent probability that the supplier fails within',
                 'the contract term. Where does that come from? Two failures in a sector of',
                 'seventeen firms over eight years, which is a reasonable thing to look at',
                 'and is not a frequency for this supplier. This is a Category B decision and',
                 'the framework says no probability.',
                 '',
                 'I know the number is doing useful work for you. It is also the only',
                 'sentence in the paper that a committee member will quote back at you in',
                 'three years, and by then the twelve will have become a finding.',
                 '',
                 'What I want instead is Section 4 rewritten as three scenarios: the supplier',
                 'performs, the supplier fails in year one, the supplier fails in year four.',
                 'For each, what we do and what it costs. The year four case is the',
                 'interesting one and your current draft does not address it at all.',
                 '',
                 'Also: the paper needs a named decision-owner and a review date before it',
                 'can go on the agenda. Those are not formalities. A Category B paper with no',
                 'owner gets approved by everybody and defended by nobody.',
                 '',
                 'Professor van der Merwe, Chair',
             ]),
        ],
        guided=[
            ('When must a probability be stated?',
             ('Always', 'Where a frequency exists from comparable cases',
              'Never', 'Where the Committee requests it'), 1,
             'That is the definition of Category A, and Category B is defined by its '
             'absence.'),
            ('What must a Category B paper contain instead of a probability?',
             ('An expected cost', 'Three scenarios and the response to each',
              'A legal opinion', 'A confidence interval'), 1,
             'The framework replaces the number with a structure rather than leaving the '
             'question open.'),
            ('Why is no number permitted in Category B?',
             ('It would be inaccurate', 'Readers treat it as evidence and it cannot be withdrawn',
              'It takes too long', 'The Committee cannot interpret it'), 1,
             'The stated reason is about how a figure behaves once published, not about its '
             'accuracy.'),
            ('What do Category B papers require for approval?',
             ('A unanimous vote', 'A named decision-owner and a review date',
              'An external review', 'A legal sign-off'), 1,
             'The framework adds that they may not be approved on the nod.'),
        ],
        exam=[
            ('Why is the paper sent back?',
             ('It is unclear', 'Section 4 states a probability in a Category B decision',
              'It lacks costings', 'It is too long'), 1,
             'The Chair calls the paper the clearest of the term before identifying the one '
             'problem.'),
            ('Where did the 12 per cent come from?',
             ('The supplier’s accounts', 'Two failures among seventeen firms over eight years',
              'An external consultant', 'A sector average'), 1,
             'The Chair calls that a reasonable thing to look at and not a frequency for this '
             'supplier.'),
            ('What does the Chair predict about the number?',
             ('It will be forgotten', 'It will be quoted back in three years as a finding',
              'It will be revised', 'It will be challenged immediately'), 1,
             'That is his practical reason for removing it, over and above the framework.'),
            ('What does the Chair acknowledge about the number?',
             ('It is accurate', 'It is doing useful work in the paper',
              'It is required', 'It is conventional'), 1,
             'He concedes its usefulness before explaining why it still has to go.'),
            ('Which scenario does the Chair call interesting?',
             ('The supplier performs', 'Failure in year four',
              'Failure in year one', 'Contract renegotiation'), 1,
             'He adds that the current draft does not address it at all.'),
            ('Why does the Chair say the owner and review date are not formalities?',
             ('The rules require them', 'A paper with no owner is approved by everybody and defended by nobody',
              'They speed up approval', 'Auditors check them'), 1,
             'The point is about accountability after the decision rather than before it.'),
            ('What is the structure of the Chair’s email?',
             ('A refusal', 'Praise, one required change with two reasons, and two procedural requirements',
              'A request for data', 'An approval with conditions'), 1,
             'He also warns in advance that the change will look like a step backwards.'),
        ],
    ),

    r3=dict(
        sub='Deciding without the number',
        title='Deciding When Nobody Can Give You a Probability',
        words=300,
        paras=[
            'The standard account of good decision-making assumes you can put a number on '
            'each outcome, and most of the decisions that matter are not like that. A '
            'frequency requires repetition, and the events institutions worry about — a '
            'supplier failing, a technology arriving, a political arrangement collapsing — '
            'happen rarely and never twice under the same conditions. To my mind the useful '
            'response is not better estimation but a different objective: instead of looking '
            'for the course of action with the best expected outcome, look for the one that '
            'performs acceptably across the widest range of futures.',

            'That is a real change rather than a rhetorical one, because the two objectives '
            'often recommend different things. Optimising assumes you know which future you '
            'are in. A robust choice deliberately gives up some performance in the most '
            'likely case in exchange for not failing in the others, and on balance it will '
            'look worse in retrospect roughly whenever the likely case happens to arrive, '
            'which is most of the time. Whatever else is true about institutional incentives, '
            'this one is decisive: the robust choice is the one that is hardest to defend '
            'afterwards.',

            'It seems to me that this, rather than any deficit of numeracy, explains the '
            'persistence of spurious precision. A decision backed by a figure can be '
            'defended by producing the figure, whoever turned out to be right. A decision '
            'backed by judgement can be defended only by the outcome. I would go further: '
            'anybody who has sat on a committee knows this, which means the invention of '
            'unjustified probabilities is not an error to be trained out of people but a '
            'rational response to how they are judged. Fixing it requires changing what '
            'counts as a defensible paper, and that is a question about accountability rather '
            'than about statistics.',
        ],
        skill=('Reading a passage with a sustained first-person position',
               ['Some academic writing marks the author’s view openly: to my mind, it seems '
                'to me, I would go further.',
                'Track the strength of each marker. They are usually ordered from weaker to '
                'stronger.',
                'The conclusion relocates the problem into a different field, and the final '
                'sentence names it.']),
        guided=[
            ('Why do most important decisions lack probabilities?',
             ('Nobody collects data', 'The events are rare and never recur under the same conditions',
              'Statistics are unreliable', 'Institutions are careless'), 1,
             'A frequency requires repetition, which is exactly what these events do not '
             'offer.'),
            ('What does the author recommend instead of better estimation?',
             ('Avoiding decisions', 'A different objective: performing acceptably across many futures',
              'Hiring statisticians', 'Delaying until data exists'), 1,
             'The author calls this a change of objective rather than of technique.'),
            ('What does optimising assume?',
             ('That outcomes are equal', 'That you know which future you are in',
              'That probabilities are low', 'That costs are known'), 1,
             'That assumption is what makes the two objectives recommend different things.'),
            ('What does a robust choice give up?',
             ('Nothing', 'Some performance in the most likely case',
              'All performance', 'Its defensibility only'), 1,
             'In exchange it avoids failing in the other futures.'),
        ],
        exam=[
            ('Why will a robust choice usually look worse in retrospect?',
             ('It is badly explained', 'The likely case arrives most of the time',
              'It costs more', 'It is slower'), 1,
             'The robust choice sacrifices performance precisely in the case that usually '
             'happens.'),
            ('What does the author call decisive?',
             ('The quality of the data', 'That the robust choice is hardest to defend afterwards',
              'The cost of failure', 'The speed of the decision'), 1,
             'Whatever else is true marks this as the fixed point of the argument.'),
            ('What does the author say explains spurious precision?',
             ('Poor numeracy', 'How decision-makers are judged',
              'Pressure of time', 'Weak frameworks'), 1,
             'The author explicitly rejects a deficit of numeracy as the explanation.'),
            ('How can a decision backed by judgement be defended?',
             ('By producing the reasoning', 'Only by the outcome',
              'By citing a framework', 'By naming an owner'), 1,
             'The contrast is with a figure, which can be produced whoever turned out to be '
             'right.'),
            ('What does "I would go further" introduce?',
             ('A qualification', 'A stronger version of the point just made',
              'A counterargument', 'A concession'), 1,
             'The stronger claim is that the behaviour is rational rather than mistaken.'),
            ('What does the author say fixing the problem requires?',
             ('Better statistical training', 'Changing what counts as a defensible paper',
              'More data', 'Fewer committees'), 1,
             'The final sentence relocates the problem into accountability rather than '
             'statistics.'),
            ('Which would most weaken the third paragraph?',
             ('Evidence that committees are numerate',
              'Evidence that decision-makers are in fact judged on their reasoning rather than their outcomes',
              'Evidence that probabilities are often accurate',
              'Evidence that robust choices are rare'), 1,
             'The whole argument depends on the asymmetry in how the two kinds of defence '
             'are received.'),
            ('All of the following are stated EXCEPT:',
             ('A frequency requires repetition',
              'Robust and optimal choices often differ',
              'The robust choice is hard to defend afterwards',
              'Better statistical training would solve the problem'), 3,
             'The author says the opposite: it is not an error to be trained out of people.'),
            ('What is the function of the first-person markers in the passage?',
             ('To soften weak claims', 'To mark which claims are the author’s own judgement, at increasing strength',
              'To avoid citation', 'To address the reader directly'), 1,
             'To my mind, it seems to me and I would go further run from weaker to stronger '
             'across the three paragraphs.'),
        ],
    ),

    l1=dict(
        sub='How people misjudge risk',
        caption='Two students after a lecture on judgement',
        skill=('Hearing two errors with one cause',
               ['When a speaker names two opposite mistakes, expect a single explanation '
                'covering both.',
                'Listen for: both of those come from the same thing.',
                'The item about the cause is the hardest and the most likely to appear.']),
        warm=[
            ('Man: Are people just bad at probability?',
             ('Only where there is no story attached.', 'Yes, hopeless.',
              'About one in ten thousand.', 'In the lecture.'), 0,
             'An are-they question answered by narrowing the claim rather than agreeing.'),
            ('Woman: Why do vivid risks feel larger?',
             ('Because we judge by how easily we picture them.', 'Yes, they do.',
              'About ten per cent.', 'From the news.'), 0,
             'A why question answered with the mechanism behind both errors.'),
            ('Man: Is the rule of thumb useless then?',
             ('It works well where your experience is representative.', 'Yes, entirely.',
              'About two errors.', 'In the seminar.'), 0,
             'An is-it-useless question answered with the condition under which it '
             'succeeds.'),
        ],
        script=[
            ('Woman', 'The bit I liked was that the two mistakes are the same mistake.'),
            ('Man', 'Overestimating the dramatic thing and ignoring the boring one.'),
            ('Woman', 'Right. A one in ten thousand chance of something horrifying gets '
                      'treated as a live possibility, and a one in ten chance of something '
                      'tedious gets no attention at all.'),
            ('Man', 'And both come from judging likelihood by how easily you can picture it.'),
            ('Woman', 'Which is not stupidity. That rule is excellent in an environment where '
                      'the things you can picture are the things that have happened to people '
                      'you know.'),
            ('Man', 'So it breaks when the pictures come from somewhere else.'),
            ('Woman', 'It breaks when your supply of images is selected for being memorable '
                      'rather than for being frequent. Which describes roughly all of modern '
                      'information.'),
            ('Man', 'That is a bleaker conclusion than she drew.'),
            ('Woman', 'She drew it in the last five minutes. She said the fix is not telling '
                      'people the numbers, because they do not retain numbers. It is giving '
                      'them a comparison they can picture — this risk is about the same as '
                      'that one — and letting the heuristic work on better inputs.'),
            ('Man', 'Using the bias rather than fighting it.'),
            ('Woman', 'She called it the only intervention in the literature that has ever '
                      'survived replication, which I thought was a slightly bitter way to put '
                      'it.'),
        ],
        items=[
            ('What does the woman say about the two mistakes?',
             ('They have different causes', 'They are the same mistake',
              'One is worse', 'Neither is avoidable'), 1,
             'She opens with that and the man supplies the two examples.'),
            ('What happens to a one in ten chance of something tedious?',
             ('It is overestimated', 'It gets no attention',
              'It is calculated correctly', 'It is insured against'), 1,
             'That is set against the vivid one in ten thousand chance.'),
            ('What is the common cause?',
             ('Poor education', 'Judging likelihood by how easily the event can be pictured',
              'Media bias', 'Innumeracy'), 1,
             'Both errors follow from the same rule of thumb.'),
            ('When does the rule of thumb work well?',
             ('Always', 'When your images come from what has happened to people you know',
              'With small numbers', 'Never'), 1,
             'She is explicit that it is not stupidity but a rule suited to a different '
             'environment.'),
            ('When does it break?',
             ('When numbers are large', 'When images are selected for being memorable rather than frequent',
              'When events are rare', 'When people are tired'), 1,
             'She adds that this describes roughly all of modern information.'),
            ('What did the lecturer say the fix is not?',
             ('Comparisons', 'Telling people the numbers',
              'Education', 'Regulation'), 1,
             'Her reason is that people do not retain numbers.'),
            ('What is the intervention she recommends?',
             ('Repeating the statistics', 'Giving a comparison people can picture',
              'Avoiding vivid examples', 'Training in probability'), 1,
             'It works by supplying the heuristic with better inputs rather than by '
             'overriding it.'),
        ],
    ),

    l2=dict(
        sub='Risk and uncertainty are different',
        caption='A committee briefing on the risk framework',
        poster=['Risk Committee · papers due 15 December',
                'Category B: no probabilities',
                'Named owner and review date required'],
        skill=('Hearing a prohibition explained',
               ['A rule that forbids something useful will always come with a reason. The '
                'reason is examinable.',
                'Listen for: I know this looks like a step backwards.',
                'The replacement for the forbidden thing is usually specified in detail.']),
        warm=[
            ('Woman: Why can I not give a probability?',
             ('Because no frequency exists for this case.', 'Because it would be wrong.',
              'About twelve per cent.', 'In Section 4.'), 0,
             'A why-not question answered with the condition that puts the decision in '
             'Category B.'),
            ('Man: What goes in its place?',
             ('Three scenarios and what you do in each.', 'Nothing at all.',
              'About four years.', 'The Committee decides.'), 0,
             'A what-instead question answered with the required structure.'),
            ('Woman: Does a paper need a named owner?',
             ('In Category B, yes, and a review date.', 'No, never.',
              'About two names.', 'Before December.'), 0,
             'A does-it-need question answered with the requirement and its companion.'),
        ],
        script=[
            ('Man', 'The framework makes one distinction and everything else follows from it. '
                    'Category A: a frequency exists. We have comparable cases, we can state a '
                    'probability and an expected cost, and you should. Category B: no '
                    'frequency exists. The event is rare, or it has never happened under '
                    'conditions like ours, and in Category B you may not state a probability '
                    'at all. I know that looks like a step backwards and I want to tell you '
                    'exactly why it is not. A number in a committee paper does not stay a '
                    'number. It gets quoted. Three years later nobody remembers that the '
                    'twelve per cent was two failures in a sector of seventeen firms; they '
                    'remember a twelve per cent risk, and you cannot withdraw it, because '
                    'withdrawing it looks like concealing something. What goes in its place is '
                    'not a shrug. Three scenarios: the thing works, the thing fails early, '
                    'the thing fails late. For each one, what we do and what it costs. The '
                    'fails-late scenario is almost always the interesting one and almost '
                    'always the one that is missing. And two procedural requirements that are '
                    'not procedural at all: a named decision-owner and a review date. A '
                    'Category B paper with no owner is approved by everybody and defended by '
                    'nobody, and when it goes wrong the committee discovers it has no '
                    'collective memory of having decided anything.'),
        ],
        items=[
            ('What is the one distinction the framework makes?',
             ('Cost against benefit', 'Whether a frequency exists',
              'Short term against long term', 'Internal against external risk'), 1,
             'Everything else in the framework follows from that division.'),
            ('What may a Category B paper not contain?',
             ('A cost estimate', 'A probability',
              'Scenarios', 'A review date'), 1,
             'The prohibition is absolute, which is why he spends the briefing justifying '
             'it.'),
            ('What does he say happens to a number in a paper?',
             ('It is checked', 'It gets quoted and cannot be withdrawn',
              'It is forgotten', 'It is revised annually'), 1,
             'Withdrawing it looks like concealing something, which is why the damage is '
             'permanent.'),
            ('What will people remember in three years?',
             ('The two failures in seventeen firms', 'A twelve per cent risk',
              'The scenarios', 'The decision-owner'), 1,
             'The derivation is lost and the figure survives, which is his central '
             'argument.'),
            ('Which scenario does he say is usually missing?',
             ('The success case', 'The fails-late case',
              'The fails-early case', 'The renegotiation case'), 1,
             'He calls it almost always the interesting one as well.'),
            ('What happens to a Category B paper with no owner?',
             ('It is rejected', 'It is approved by everybody and defended by nobody',
              'It is deferred', 'It is sent for review'), 1,
             'He adds that the committee then has no collective memory of having decided '
             'anything.'),
        ],
    ),

    l3=dict(
        sub='Deciding without the number',
        caption='A lecture on robustness and accountability',
        board=['Frequency needs repetition',
               'Optimal assumes you know the future',
               'Robust gives up the likely case',
               'Hardest to defend afterwards'],
        skill=('Following a talk that ends by changing the subject',
               ['A lecturer may conclude that the problem belongs to a different field '
                'entirely.',
                'Listen for: this is not a question about statistics, it is a question '
                'about.',
                'The speaker’s own view is usually marked explicitly in the last third.']),
        warm=[
            ('Man: Can we not just estimate the probability?',
             ('Not without a frequency, and there is none.', 'Yes, roughly.',
              'About twelve per cent.', 'In the paper.'), 0,
             'A can-we question answered with the requirement that is missing.'),
            ('Woman: What does a robust choice give up?',
             ('Performance in the likely case.', 'Nothing much.',
              'About ten per cent.', 'Across many futures.'), 0,
             'A what-does-it-give-up question answered with the specific sacrifice.'),
            ('Man: So why does nobody choose it?',
             ('Because it is the hardest to defend afterwards.', 'Because it costs more.',
              'About three years.', 'The committee decides.'), 0,
             'A so-why question answered with the incentive rather than the merits.'),
        ],
        script=[
            ('Woman', 'The textbook account of a good decision assumes a number for every '
                      'outcome, and almost nothing that matters is like that. A probability is '
                      'a frequency, and a frequency needs repetition. The things institutions '
                      'actually worry about — a supplier collapsing, a technology arriving '
                      'early, a political arrangement coming apart — happen rarely and never '
                      'twice under the same conditions. To my mind the response is not to '
                      'estimate better. It is to change the objective. Stop looking for the '
                      'option with the best expected outcome and start looking for the one '
                      'that performs acceptably across the widest range of futures. And I want '
                      'to be clear that this is a real change, not a slogan, because the two '
                      'objectives recommend different things. Optimising assumes you know '
                      'which future you are in. A robust choice deliberately sacrifices '
                      'performance in the most likely case so that it does not fail in the '
                      'others. Which means — and here is the whole problem — on balance it '
                      'will look worse in hindsight whenever the likely case turns up, and the '
                      'likely case turns up most of the time. Whatever else is true about how '
                      'institutions work, that is decisive. The robust option is the hardest '
                      'one to defend at the review. It seems to me that this, and not any '
                      'shortage of numeracy, is why invented probabilities are everywhere. A '
                      'decision with a figure attached can be defended by producing the '
                      'figure. A decision with judgement behind it can only be defended by '
                      'having been right. I would go further: everybody on every committee '
                      'knows this. So the fix is not statistical training. It is changing what '
                      'a committee accepts as a defensible paper, which makes this a problem '
                      'about accountability and not a problem about probability at all.'),
        ],
        items=[
            ('Why is a probability unavailable for these events?',
             ('Data is withheld', 'A frequency needs repetition and these events do not repeat',
              'Models are poor', 'Committees refuse to produce one'), 1,
             'Rare and never twice under the same conditions is the condition she names.'),
            ('What does she say the response should be?',
             ('Estimate better', 'Change the objective',
              'Delay the decision', 'Consult more widely'), 1,
             'She replaces best expected outcome with acceptable across many futures.'),
            ('What does optimising assume?',
             ('That costs are known', 'That you know which future you are in',
              'That outcomes are rare', 'That probabilities are accurate'), 1,
             'That assumption is why the two objectives recommend different things.'),
            ('Why will a robust choice look worse in hindsight?',
             ('It is expensive', 'It sacrifices the likely case, and the likely case usually arrives',
              'It is poorly documented', 'It takes longer'), 1,
             'She calls this the whole problem.'),
            ('What does she call decisive?',
             ('The accuracy of estimates', 'That the robust option is hardest to defend at review',
              'The cost of failure', 'The quality of committees'), 1,
             'Whatever else is true marks it as the fixed point of her argument.'),
            ('What does she say invented probabilities are not caused by?',
             ('Incentives', 'A shortage of numeracy',
              'Committee procedure', 'Time pressure'), 1,
             'She says everybody on every committee knows the difference.'),
            ('What does she conclude the problem is about?',
             ('Probability', 'Accountability', 'Statistics', 'Training'), 1,
             'Her final sentence relocates it deliberately into a different field.'),
        ],
    ),

    sp=[
        dict(
            sub='How people misjudge risk',
            focus='managing a short argument out loud',
            skill=('Signposting as you speak',
                   ['Say how many points you have before you make them: there are two things '
                    'here.',
                    'Mark each one: the first is, the second is, and both come from.',
                    'A listener who knows how many points are coming can follow all of '
                    'them.']),
            repeat=[
                'There are two mistakes and they have one cause.',
                'The first is overestimating a vivid risk.',
                'The second is ignoring a tedious one.',
                'Both come from judging likelihood by how easily we picture the event.',
                'That rule works well where your images come from your own neighbourhood.',
                'It breaks when images are selected for being memorable rather than frequent.',
                'So the fix is not to give people numbers, which they do not retain, but to give them a comparison they can picture.',
            ],
            theme='risk, fear and what we pay attention to',
            qs=[
                'Thanks for joining me. To begin, is there something you worry about that you '
                'know is unlikely?',
                'People fear rare dramatic events and ignore common dull ones. Can that be '
                'changed?',
                'Now your opinion. Should governments spend according to how much harm '
                'something does, or how much people fear it?',
                'A final question. Is it ever rational to act on a fear you know is '
                'exaggerated?',
            ],
            model=[(2, 'Only by working with it. Telling somebody the number does nothing; '
                       'giving them a comparison they can see does quite a lot.'),
                   (4, 'Yes, where the fear itself is costly. If I cannot sleep, that is a '
                       'real harm even if the thing I fear is not.')],
            selfcheck=['I said how many points I had.',
                       'I marked each one.',
                       'I gave the shared cause at the end.'],
        ),
        dict(
            sub='Risk and uncertainty are different',
            focus='defending a rule that looks unhelpful',
            skill=('Saying why a restriction helps',
                   ['Anticipate the objection out loud: I know this looks like a step '
                    'backwards.',
                    'Give the mechanism, not the principle: the number gets quoted and cannot '
                    'be withdrawn.',
                    'Specify the replacement in detail, so the restriction does not sound '
                    'like a refusal.']),
            repeat=[
                'A probability is a frequency.',
                'Where there is no frequency, there is no probability.',
                'I know that looks like a step backwards.',
                'A number in a committee paper does not stay a number.',
                'Three years later nobody remembers where it came from.',
                'What goes in its place is three scenarios and a response to each.',
                'A paper with no named owner is approved by everybody and defended by nobody, which is how a committee ends up with no memory of deciding anything.',
            ],
            theme='rules, numbers and institutional memory',
            qs=[
                'Thank you for your time. First, do you prefer to be given a number or an '
                'explanation?',
                'A precise figure is persuasive even when it is unfounded. Why is that so '
                'hard to resist?',
                'Now an opinion question. Should organisations be banned from publishing '
                'estimates they cannot support? Why?',
                'One last question. What does it mean for a group to be accountable for a '
                'decision?',
            ],
            model=[(2, 'Because precision looks like work. A figure to one decimal place '
                       'implies somebody did something, and we read the implication rather '
                       'than checking it.'),
                   (4, 'That somebody can be asked. A group is accountable when there is a '
                       'name on the paper, and not otherwise, whatever the minutes say.')],
            selfcheck=['I anticipated the objection out loud.',
                       'I gave the mechanism rather than the principle.',
                       'I specified the replacement.'],
        ),
        dict(
            sub='Deciding without the number',
            focus='marking your own position at the right strength',
            skill=('Grading your own claims',
                   ['It seems to me is weaker than to my mind, which is weaker than I would '
                    'go further.',
                    'Use the weak ones early and the strong one once, at the point you most '
                    'want believed.',
                    'Never mark a claim stronger than your evidence. An examiner hears the '
                    'mismatch immediately.']),
            repeat=[
                'A frequency needs repetition.',
                'The decisions that matter do not repeat.',
                'To my mind the answer is to change the objective.',
                'A robust choice performs acceptably across many futures.',
                'It sacrifices the likely case, and the likely case usually arrives.',
                'On balance it is therefore the hardest option to defend afterwards.',
                'I would go further: everybody on every committee knows this, which makes invented precision a rational response rather than a mistake.',
            ],
            theme='judgement, accountability and being wrong',
            qs=[
                'Thanks for taking part. To start, how do you make a decision when you cannot '
                'get the information you want?',
                'A good decision and a good outcome are not the same thing. Does anybody '
                'judge the first?',
                'Now your opinion. Should people be held responsible for decisions that were '
                'reasonable and turned out badly? Why?',
                'And finally. This is the last question of the course: what has changed in '
                'how you argue?',
            ],
            model=[(2, 'Almost nobody, because the outcome is observable and the reasoning is '
                       'not. Which is exactly why reasoning has to be written down before '
                       'the outcome arrives.'),
                   (4, 'I concede more than I used to, and I have stopped treating that as a '
                       'loss. The arguments that survive are the ones that have already '
                       'given something away.')],
            selfcheck=['I graded my markers from weaker to stronger.',
                       'I used the strongest one only once.',
                       'I did not mark a claim stronger than my evidence.'],
        ),
    ],

    w1=dict(
        sub='Questions about judgement',
        skill=('Build a Sentence: everything from the course',
               ['The two non-question items in this closing unit may use any structure from '
                'Volumes 3 and 4.',
                'Read the tiles for the marker first: a cleft, a fronted adverbial, a '
                'concession, a conditional.',
                'The comma in the prompt is still the best clue to which half comes first.']),
        guided=[
            ('Section 4 states a twelve per cent probability.',
             ['know', 'do', 'you', 'whether', 'that', 'has', 'to', 'out', 'come'],
             'Do you know whether that has to come out?'),
            ('No frequency exists for this supplier.',
             ['to know', 'nobody', 'seems', 'how', 'the figure', 'was', 'at all', 'arrived at', 'actually'],
             'Nobody seems to know how the figure was actually arrived at at all.'),
            ('My supervisor asked about the fails-late scenario.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'it', 'at all', 'modelled'],
             'She wanted to know whether I had modelled it at all.'),
        ],
        exam=[
            ('A robust choice looks worse in hindsight.',
             ['do', 'whether', 'know', 'you', 'anybody', 'for', 'that', 'allows', 'at review'],
             'Do you know whether anybody allows for that at review?'),
            ('Category B papers may not state a probability.',
             ['explain', 'can', 'anybody', 'why', 'a number', 'to me', 'is', 'worse', 'than nothing'],
             'Can anybody explain to me why a number is worse than nothing?'),
            ('The paper has no named decision-owner.',
             ['know', 'does', 'anybody', 'who', 'is', 'supposed', 'to', 'sign', 'actually'],
             'Does anybody know who is actually supposed to sign?'),
            ('The committee cannot withdraw a published figure.',
             ['us', 'told', 'nobody', 'what', 'happens', 'when', 'a number', 'wrong', 'goes'],
             'Nobody told us what happens when a number goes wrong.'),
            ('Invented probabilities are a rational response to incentives.',
             ['told', 'he', 'me', 'which', 'incentive', 'the', 'work', 'was', 'doing'],
             'He told me which incentive was doing the work.'),
            ('The hardest option to defend is the robust one.',
             ['it', 'is', 'the robust', 'option', 'that', 'is', 'to', 'defend', 'hardest'],
             'It is the robust option that is hardest to defend.'),
            ('A committee rarely accepts a paper without a figure.',
             ['rarely', 'does', 'a committee', 'accept', 'a paper', 'with', 'no', 'in', 'figure it'],
             'Rarely does a committee accept a paper with no figure in it.'),
        ],
    ),

    w2=dict(
        sub='Risk and uncertainty are different',
        to='riskcommittee@uni.ac.uk',
        date='11/12/2028',
        subject='Energy contract paper — Section 4 rewritten, and one disagreement about Category A',
        scenario=[
            'The Chair has sent your paper back, told you to remove the 12 per cent '
            'probability because the decision is Category B, and asked for three scenarios '
            'including a late-failure case. You have done that. You also think one part of '
            'the paper — the price volatility estimate in Section 6 — genuinely is Category '
            'A, and the Chair’s email implied the whole paper was Category B.',
            'Write an email to the Risk Committee.',
        ],
        bullets=['Confirm what you have changed, briefly.',
                 'Make the Category A argument for Section 6, with the frequency you are relying on.',
                 'Say what you will do if the Chair disagrees.'],
        skill=('Closing a paper out for a committee',
               ['Report the changes in one short paragraph. The Chair wants to know it is '
                'done, not how.',
                'Where you disagree, show the test being met rather than asserting the '
                'conclusion.',
                'Say what you will do if you lose, so the Chair can decide in one line.']),
        model=[
            'Dear Professor van der Merwe,',
            '',
            'Section 4 is rewritten. The probability is gone, and there are now three '
            'scenarios — supplier performs, fails in year one, fails in year four — each with '
            'the response and the cost. You were right that the year four case was the one '
            'missing; it is also the only one in which we are still inside the fixed-price '
            'period, which changes the answer substantially.',
            '',
            'One disagreement, and I think it is about which category Section 6 falls into '
            'rather than about the framework. Section 6 estimates wholesale price volatility '
            'over the contract term. That is not a judgement about this supplier. It is a '
            'frequency: eleven years of half-hourly settlement prices for this market, '
            'published, with the two regulatory interventions identifiable and separable. On '
            'the framework’s own test — does a frequency exist from comparable cases — that is '
            'Category A, and stating a distribution there is required rather than forbidden.',
            '',
            'I may be reading your email too broadly. If the Committee’s view is that a paper '
            'is Category A or B as a whole rather than section by section, then Section 6 '
            'comes out too and I will restate it as a scenario range with no probabilities '
            'attached. That is a worse paper and it is not a worse decision, so I would '
            'rather have the ruling than the argument.',
            '',
            'Either way the paper can be on the agenda by Friday. The decision-owner is named '
            'in the revised cover sheet and the review date is March 2030, twelve months '
            'before the first break clause.',
            '',
            'With thanks,',
            'Jonathan Halloran',
        ],
        notes=['The changes are reported in four lines, with one substantive finding the '
               'Chair did not know.',
               'The disagreement is argued by applying the framework’s own test rather than '
               'by objecting to it.',
               'The frequency is described precisely enough to be checked: eleven years, '
               'half-hourly, published, interventions separable.',
               'The writer states the fallback and calls it a worse paper but not a worse '
               'decision, which lets the Chair rule in one line.'],
        bandpair=dict(
            mid=[
                'Dear Professor van der Merwe,',
                'Thank you very much for your comments on my paper, which were extremely '
                'helpful. I have now rewritten Section 4 as you asked, removing the '
                'probability and adding the three scenarios including the late failure case, '
                'which I agree was an important omission.',
                'There is one point I wanted to raise with you. I am not sure that Section 6 '
                'should really be treated in the same way, because the price volatility '
                'figures are based on a lot of historical market data rather than on a '
                'judgement about the supplier. It seemed to me that this might count as '
                'Category A under the framework.',
                'Of course I may well be wrong about this, and if you think the whole paper '
                'should be Category B then I am happy to take that section out as well. '
                'Please let me know what you would prefer and I will make the changes '
                'straight away.',
                'Thank you again for your help with this. Best wishes, Jonathan Halloran',
            ],
            top=[
                'Dear Professor van der Merwe,',
                'Section 4 is rewritten: the probability is gone and there are three '
                'scenarios — performs, fails in year one, fails in year four — each with '
                'response and cost. You were right that year four was missing; it is also the '
                'only case still inside the fixed-price period, which changes the answer.',
                'One disagreement, about which category Section 6 falls into. Section 6 '
                'estimates wholesale price volatility. That is a frequency: eleven years of '
                'half-hourly settlement prices for this market, published, with the two '
                'regulatory interventions separable. On the framework’s own test that is '
                'Category A, and a distribution there is required rather than forbidden.',
                'If the Committee’s view is that a paper is Category A or B as a whole, '
                'Section 6 comes out and I will restate it as a scenario range. That is a '
                'worse paper and not a worse decision, so I would rather have the ruling than '
                'the argument.',
                'Either way it can be on the agenda by Friday. Owner named, review date March '
                '2030. Jonathan Halloran',
            ],
            diffs=[
                'It reports the rewrite in one line and adds a finding the Chair did not have '
                '— the fixed-price overlap — which is the only new information worth his '
                'time.',
                'It argues by applying the framework’s stated test instead of saying the '
                'section might count as Category A.',
                'It describes the frequency precisely enough to be verified, rather than '
                'calling it a lot of historical market data.',
                'It names the fallback and evaluates it in one clause — a worse paper, not a '
                'worse decision — so the Chair can rule without weighing anything.',
                'It closes the procedural requirements in six words, because a Chair reading '
                'twenty papers needs them confirmed and not explained.',
            ],
        ),
    ),

    w3=dict(
        sub='Deciding without the number',
        prof='Dr Weatherall',
        question='Public institutions are routinely required to attach probabilities to '
                 'events for which no frequency exists, and the resulting figures are then '
                 'quoted as findings. Some argue that institutions should be forbidden from '
                 'publishing unsupported probabilities, and should present scenarios instead. '
                 'Others argue that a decision-maker who refuses to quantify is simply '
                 'passing the judgement to whoever reads the paper, usually less equipped to '
                 'make it, and that a rough number honestly labelled is better than no number '
                 'at all. Which position is better founded?',
        posts=[('Siobhán', 'w',
                'Forbid it. A number acquires an authority its derivation never had, and once '
                'published it cannot be withdrawn — withdrawing it looks like concealment. '
                'Scenarios keep the judgement visible, which is where it belongs.'),
               ('Rafael', 'm',
                'Siobhán is describing what happens to numbers and ignoring what happens to '
                'scenarios. Three scenarios with no probabilities get read as equally likely, '
                'which is itself a probability claim, and a false one. Refusing to quantify '
                'does not remove the estimate; it hides it and leaves it unexamined.')],
        skill=('Answering an argument you largely agree with',
               ['When both sides identify a real failure mode, the question is which failure '
                'is worse and which is fixable.',
                'Look for a design that avoids both rather than choosing between them.',
                'This is the last discussion of the course: mark your own position clearly '
                'and grade it.']),
        starters=['Rafael has found the strongest objection to the scenario approach.',
                  'Siobhán is right about what happens to a number, and that is not the whole case.',
                  'What separates them is which failure is fixable…',
                  'To my mind what follows is…'],
        model=[
            'Rafael has found the strongest objection to the scenario approach and it is '
            'stronger than Siobhán’s reply would be. Three scenarios presented without '
            'weights are read as roughly equally likely; that is an implicit probability '
            'claim, it is almost always false, and nobody can be held to it because nobody '
            'stated it. Refusing to quantify does not remove the estimate from the paper. It '
            'removes it from the part of the paper that can be criticised.',
            'Siobhán is right about what happens to a number, and that is not the whole case. '
            'Her mechanism is real and well documented: the derivation is forgotten, the '
            'figure survives, and withdrawal reads as concealment. But she treats that as a '
            'property of numbers when it is a property of unlabelled numbers. A figure '
            'published with its derivation attached in the same sentence — two failures among '
            'seventeen firms over eight years — does not acquire that authority, because the '
            'thinness is visible every time it is quoted.',
            'What separates them is which failure is fixable, and on that Siobhán loses. The '
            'implicit equal weighting of scenarios cannot be corrected without adding weights, '
            'at which point you are quantifying again. The over-reading of a number can be '
            'corrected by requiring the derivation to travel with it, which is a drafting '
            'rule rather than a change of method.',
            'To my mind what follows is a weaker prohibition than Siobhán wants and a stronger '
            'discipline than Rafael implies: no bare probability anywhere, but a requirement '
            'that every scenario carry an explicit statement of how likely its author thinks '
            'it is and on what basis, even where that basis is only judgement. I would go '
            'further, since this is the point both posts avoid: whatever else is true, the '
            'author of the estimate should be named. The reason unsupported figures persist '
            'is not that institutions cannot tell risk from uncertainty. It is that nobody '
            'has ever been asked, three years later, to account for one.',
        ],
        model_words=328,
    ),

    gram=dict(
        title='Discourse management and stance',
        headers=['Function', 'Expressions'],
        rows=[
            ('announcing structure', 'there are two things here; I want to do three things'),
            ('ordering', 'the first is; the second; and finally'),
            ('conceding', 'granted; I accept that; there is something in that'),
            ('qualifying', 'on balance; to a limited extent; for the most part'),
            ('marking your own view', 'to my mind; it seems to me; in my view'),
            ('strengthening', 'I would go further; more than that; indeed'),
            ('fixing a point', 'whatever else is true; the one thing that is certain is'),
        ],
        notes=[
            'Stance markers have strengths and should be ordered. It seems to me is weaker '
            'than to my mind; I would go further is the strongest and should appear once. '
            'Three strong markers in a paragraph cancel each other out.',
            'A concession needs a following clause that does something with it. Granted, the '
            'data is thin, and I accept the objection is not an argument — the reader is '
            'waiting for the but.',
            'Announcing structure is only useful if you keep to it. If you say there are two '
            'things and then give three, the reader trusts nothing else you signpost.',
        ],
        watch='Do not hedge a claim and then assert it. "It seems to me that this is '
              'certainly decisive" marks the claim twice at two different strengths, and the '
              'reader believes the weaker one.',
        ex=[
            ('Choose the appropriate marker.',
             ['______ there are two mistakes here, and they share a cause.',
              '______, the data is thin — but the direction is clear.',
              '______ the answer is to change the objective, not the estimate.',
              '______ else is true, the robust option is hardest to defend.',
              'I accept the objection, and ______ I would go further.',
              '______ balance the restriction does more good than harm.'],
             ['First', 'Granted', 'To my mind', 'Whatever', 'indeed', 'On']),
            ('Correct the stance error.',
             ['It seems to me that this is certainly decisive.',
              'Granted, the data is thin.',
              'In my view, I think the answer is clear.',
              'There are two things here. First, the frequency. Second, the incentive. Third, the drafting.'],
             ['To my mind this is decisive.',
              'Granted, the data is thin, but the direction is clear.',
              'In my view the answer is clear.',
              'There are three things here. First, the frequency. Second, the incentive. '
              'Third, the drafting.']),
            ('Rewrite with the marker shown, keeping the meaning.',
             ['This is the most important objection. (I would go further)',
              'The estimate is not reliable. (it seems to me)',
              'The restriction helps more than it costs. (on balance)',
              'The robust option is hardest to defend. (whatever else is true)'],
             ['I would go further: this is the objection the whole case rests on.',
              'It seems to me that the estimate is not reliable.',
              'On balance the restriction helps more than it costs.',
              'Whatever else is true, the robust option is hardest to defend.']),
        ],
        bas='The last Build a Sentence of the course draws on everything: clefts, fronted '
            'adverbials, concessions and conditionals. Find the marker in the tiles before '
            'you decide the word order, exactly as you have been doing since Unit 21.',
    ),

    fault=dict(
        text='It seems to me that this is certainly decisive. Granted, the data is thin. In '
             'my view, I think the answer is clear. There are two things here: the frequency, '
             'the incentive and the drafting. Nobody knows whether was the figure supported.',
        faults=[
            ('It seems to me that this is certainly decisive',
             'To my mind this is decisive',
             'The claim is marked twice at two different strengths, and a reader believes the '
             'weaker one.'),
            ('Granted, the data is thin.', 'Granted, the data is thin, but the direction is clear.',
             'A concession needs a following clause that uses it, or the reader is left '
             'waiting.'),
            ('In my view, I think the answer is clear',
             'In my view the answer is clear',
             'In my view and I think do the same job, so using both marks the view twice.'),
            ('There are two things here: the frequency, the incentive and the drafting',
             'There are three things here: the frequency, the incentive and the drafting',
             'An announced structure that does not match what follows destroys the reader’s '
             'trust in every later signpost.'),
            ('whether was the figure supported', 'whether the figure was supported',
             'An embedded question keeps statement order and does not invert the verb.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('not knowing the probabilities at all', 'uncertainty'),
            ('performing acceptably across many possible futures', 'robustness'),
            ('how much a quantity moves up and down', 'volatility'),
            ('a rule of thumb', 'heuristic'),
            ('how readily something comes to mind', 'salience'),
            ('stating more certainty than the evidence supports', 'overconfidence'),
            ('acting to avoid a harm that is not yet proven', 'precaution'),
            ('reducing the severity of a harm', 'mitigation'),
            ('spare capacity held against a shock', 'buffer'),
            ('seeming real without being so', 'illusory'),
            ('able to be handled or solved', 'tractable'),
            ('required to answer for a decision', 'accountable'),
        ],
        gram=[
            ('______ my mind the answer is to change the objective.', 'To'),
            ('It ______ to me that the estimate is unreliable.', 'seems'),
            ('______ else is true, the robust option is hardest to defend.', 'Whatever'),
            ('I would go ______: everybody on the committee knows this.', 'further'),
            ('______ balance the restriction does more good than harm.', 'On'),
            ('______, the data is thin, but the direction is clear.', 'Granted'),
            ('For the most ______, the devices that persuade are the expensive ones.', 'part'),
            ('In the final ______, the question is about accountability.', 'analysis'),
        ],
        mini=[
            ('Risk differs from uncertainty in that',
             ('risk is larger', 'under risk the probabilities are known',
              'uncertainty is rarer', 'risk can be insured only by governments'), 1,
             'A frequency exists in the first case and not in the second, which is what '
             'decides the method.'),
            ('People overestimate vivid risks because',
             ('the media exaggerate', 'likelihood is judged by how easily the event is pictured',
              'the numbers are wrong', 'they are innumerate'), 1,
             'The same rule of thumb also produces the opposite error for tedious risks.'),
            ('A robust choice is hard to defend afterwards because',
             ('it costs more', 'it sacrifices performance in the case that usually arrives',
              'it is poorly documented', 'it is slower'), 1,
             'The likely case turns up most of the time, so the sacrifice is visible and the '
             'protection is not.'),
            ('Which sentence is correct?',
             ('It seems to me that this is certainly decisive.',
              'To my mind this is decisive.',
              'In my view, I think this is decisive.',
              'It seems to me that in my view this is decisive.'), 1,
             'A claim should be marked once, at the strength the evidence supports.'),
            ('"Whatever else is true" signals that the writer is',
             ('uncertain', 'fixing one point as settled before continuing',
              'conceding', 'quoting'), 1,
             'It isolates a claim the writer will not qualify, whatever else gets '
             'qualified.'),
            ('Unsupported probabilities persist mainly because',
             ('decision-makers are innumerate', 'a figure can be defended afterwards and a judgement cannot',
              'frameworks are weak', 'data is expensive'), 1,
             'That asymmetry in how decisions are reviewed makes the invented figure a '
             'rational response.'),
        ],
    ),

    tip='This is the end of the course. The four volumes have taught twenty grammar systems, '
        '1,620 words and every 2026 task type three times over, and the thing that will '
        'actually move your score now is none of those. It is doing a complete timed test, '
        'marking it honestly against the keys, and going back to the three units whose '
        'structures you avoided. You know which three.',
)
