# -*- coding: utf-8 -*-
"""Unit 29 — Philosophy and Ethics. Volume 3."""
from content._g import gaps

_GT, _GA = gaps(
    'An argument is not a disagreement. An argument is a set of claims offered in support of '
    'another claim, and it can be assessed without anybody raising their vo{ice}. Two things '
    'can go wrong and they are quite separ{ate}. The premises may be false, in which case the '
    'argument tells you noth{ing} even if the reasoning is perfect. Or the premises may be '
    'true and simply fail to support the conclusion, in which case the argument is '
    'inval{id}. Most public disputes are conducted as though only the first kind of error '
    'exi{sted}, which is why so many of them consist of two people correcting each other on '
    'facts that neither conclusion actually depends on.')

_ET, _EA = gaps(
    'A thought experiment is a device for isolating one variable, and it works the way a '
    'laboratory does: by removing everything that is not under examin{ation}. The famous '
    'cases are deliberately unreal{istic}. Nobody is ever standing beside a lever with full '
    'knowledge of the consequences and no time pres{sure}, and that is the point rather than '
    'an objec{tion}. The scenario strips away the uncertainty, the personal stake and the '
    'social cost so that one question can be asked clear{ly}: does it matter whether a death '
    'is caused or merely allo{wed}? Critics answer that the stripping away is exactly what '
    'makes the exercise worth{less}, because real decisions are made under uncertainty and by '
    'people who will have to live with their neigh{bours} afterwards. That objection has '
    'force, and it proves less than it appears to. If an intuition survives in the artificial '
    'case, something is generating it that is not explained by the messy features that have '
    'been remo{ved}. If it does not survive, the intuition was about the mess, which is also '
    'worth kno{wing}. Either way the experiment has told you where the work is being done, '
    'which is more than most real cases manage.')

UNIT = dict(
    n=29, vol=3, level='B2',
    title='Philosophy and Ethics',
    icons=['brain', 'people', 'quill'],
    subs=['What we owe strangers', 'The limits of consent', 'Thought experiments'],
    grammar='Hedging and modality of likelihood',
    field='premise, warrant, obligation',
    opener_line='Philosophy is where you learn that an argument can be wrong in two entirely '
                'different ways, and that most people only ever check for one of them. This '
                'unit also teaches hedging: committing to a claim by degree, which is the '
                'skill that separates a 4 from a 5 in Writing.',
    candos=[
        'I can tell a false premise from an invalid inference.',
        'I can commit to a claim at the strength the evidence supports.',
        'I can state an objection to my own position fairly.',
        'I can follow an argument that uses an artificial example on purpose.',
        'I can use may well, is likely to and it is doubtful whether accurately.',
        'I can write a discussion post that strengthens the other side first.',
    ],

    acad=[
        ('premise', 'a claim offered in support of a conclusion'),
        ('warrant', 'what entitles you to move from evidence to claim'),
        ('obligation', 'something you are required to do'),
        ('entail', 'to follow necessarily from'),
        ('refute', 'to show that a claim is false'),
        ('counterexample', 'a single case that defeats a general claim'),
        ('impartial', 'not favouring any particular person'),
        ('consequentialist', 'judging an act by its results'),
        ('duty', 'what you must do regardless of the results'),
        ('virtue', 'a settled trait of good character'),
        ('harm', 'a setback to somebody’s interests'),
        ('autonomy', 'the right to decide about your own life'),
        ('paternalism', 'overriding a choice for the chooser’s own good'),
        ('permissible', 'allowed, though not required'),
        ('culpable', 'deserving blame'),
        ('dilemma', 'a choice between two options both of which cost'),
        ('scrupulous', 'very careful about doing right'),
        ('defensible', 'able to be argued for, though not obviously true'),
    ],
    family=('oblige', [
        ('obligation', 'noun', 'an obligation to strangers'),
        ('obligatory', 'adjective', 'attendance is obligatory'),
        ('obliged', 'adjective', 'we are obliged to explain'),
    ]),
    collocs=[
        ('beg the question', 'to assume what you are trying to prove'),
        ('draw a line', 'to decide where a limit falls'),
        ('on reflection', 'after thinking it through'),
        ('bite the bullet', 'to accept an unwelcome consequence of your view'),
        ('cut both ways', 'to support each side equally'),
        ('all things considered', 'taking everything into account'),
        ('as a matter of principle', 'because of the rule, not the outcome'),
        ('grant for the sake of argument', 'to accept temporarily'),
        ('carry weight', 'to be a serious consideration'),
        ('set aside', 'to leave out of consideration for now'),
    ],
    stance=[
        ('is surely right', 'the writer commits strongly'),
        ('may well', 'possible, and the writer leans to it'),
        ('it is arguable that', 'a case can be made, not more'),
        ('it is hard to see how', 'the writer doubts it strongly'),
        ('is simply false', 'the writer flatly rejects it'),
    ],
    nuance=[
        ('refute / deny', 'to disprove / merely to reject'),
        ('imply / entail', 'to suggest / to follow necessarily'),
        ('permissible / obligatory', 'allowed / required'),
    ],
    vocab_talk=[
        'Do you owe more to a neighbour than to a stranger? Why?',
        'Name a choice somebody should be allowed to make even if it harms them.',
        'When is an artificial example useful? When is it a trick?',
        'Can you be blamed for something you did not know?',
    ],
    again=['valid argument', 'sound argument', 'the trolley problem', 'moral luck',
           'informed consent', 'the harm principle', 'slippery slope', 'burden of proof'],

    r1=dict(
        sub='What we owe strangers',
        skill=('Suffixes in abstract argument',
               ['Philosophical prose is unusually dense in -tion, -ity and -ence nouns and '
                'in -ible / -able adjectives.',
                'Decide the part of speech first. The abstraction is usually a noun doing '
                'the work of a clause.',
                'A gap after is or seems is almost always an adjective.']),
        guided_text=_GT, guided=_GA,
        guided_hint='vo{ice} is voice — it follows raising their, so the slot is a '
                    'noun.'.replace('{', '').replace('}', ''),
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='The limits of consent',
        skill=('Reading a policy against the principle behind it',
               ['Policies state rules; the reasoning behind them is usually in a separate '
                'document or a covering note.',
                'The interesting question is whether the rule actually serves the stated '
                'principle.',
                'Look for a case the rule covers that the principle does not, or the '
                'reverse.']),
        docs=[
            ('notice', 'Ethics Committee · guidance on consent in student research', [
                '# The principle',
                'Participants decide for themselves, on the basis of accurate information, '
                'without pressure.',
                '# What this requires',
                '* Information in plain language, given before any data are collected.',
                '* A right to withdraw, stated clearly, with a cut-off the participant can '
                'understand.',
                '* No recruitment of people over whom the researcher has any power.',
                '# Where consent is not sufficient on its own',
                '* Where the risk of harm is more than minimal, consent does not make the '
                'study permissible. The committee must still judge the design.',
            ], 'notice'),
            ('email', 'r.beckett@northgate.edu', 'ethics@northgate.edu',
             '14/06/2027', 'Query — recruiting from my own seminar group', [
                 'Dear Ms Beckett,',
                 '',
                 'Thank you for asking before rather than after, which is rarer than it',
                 'should be.',
                 '',
                 'The answer is no, and the reason is worth setting out because it is not',
                 'about you. The rule is not that we suspect you of pressuring anybody. It',
                 'is that your students cannot know that they are free, because you mark',
                 'their work. Their consent would be real in your mind and uncertain in',
                 'theirs, and the rule exists to protect them from having to make that',
                 'judgement about you.',
                 '',
                 'Recruit from any other seminar group and we will approve it this week.',
                 'If you want a comparable sample, ask a colleague to swap groups with you.',
                 '',
                 'Ethics Committee',
             ]),
        ],
        guided=[
            ('What three things does the principle require?',
             ('Accuracy, speed, consent', 'Deciding for oneself, accurate information, no pressure',
              'Approval, funding, supervision', 'Anonymity, consent, withdrawal'), 1,
             'Those are the three elements named in the statement of principle, and the '
             'rules beneath it serve them.'),
            ('When must information be given?',
             ('After the study', 'Before any data are collected',
              'At the halfway point', 'Only on request'), 1,
             'The requirement is explicit about timing, because information given afterwards '
             'cannot inform a decision.'),
            ('Who may not be recruited?',
             ('Anyone under 18', 'People over whom the researcher has power',
              'People in other departments', 'Previous participants'), 1,
             'That is the recruitment restriction, and it is the one the email applies to '
             'Ms Beckett’s seminar group.'),
            ('When is consent not sufficient on its own?',
             ('Where the sample is small', 'Where the risk of harm is more than minimal',
              'Where the study is long', 'Where funding is external'), 1,
             'Above that threshold the committee must still judge the design, whatever the '
             'participants agree to.'),
        ],
        exam=[
            ('Why is the request refused?',
             ('The study is risky', 'The researcher has power over the potential participants',
              'The sample is too small', 'The information is unclear'), 1,
             'Marking their work is the power relationship the rule is written to exclude.'),
            ('What does the committee explicitly say the rule is NOT about?',
             ('The design of the study', 'Suspicion of this particular researcher',
              'The size of the sample', 'The timing of the request'), 1,
             'It is not about you is stated directly, which separates the rule from any '
             'judgement about her conduct.'),
            ('What is the committee’s actual concern?',
             ('That she would apply pressure',
              'That students cannot know they are free when she marks their work',
              'That the data would be poor',
              'That she has not read the guidance'), 1,
             'Their consent would be real in your mind and uncertain in theirs is the exact '
             'formulation of the problem.'),
            ('What does the committee offer?',
             ('A waiver', 'Approval if she recruits from another group',
              'A longer deadline', 'An appeal'), 1,
             'Recruit from any other seminar group and we will approve it this week, with a '
             'practical suggestion attached.'),
            ('What does "rarer than it should be" refer to?',
             ('Good study designs', 'Asking before acting rather than after',
              'Students volunteering', 'Committees replying quickly'), 1,
             'It is the opening line and praises the timing of the query rather than its '
             'content.'),
            ('Which part of the policy does the refusal rest on?',
             ('The plain language requirement', 'The recruitment restriction',
              'The withdrawal right', 'The harm threshold'), 1,
             'No recruitment of people over whom the researcher has power is the operative '
             'provision.'),
            ('What does this exchange suggest about the committee’s approach?',
             ('It applies rules without explanation', 'It explains the principle behind the rule',
              'It discourages student research', 'It prefers large samples'), 1,
             'Most of the email is reasoning rather than ruling, and it ends with a way to '
             'proceed.'),
        ],
    ),

    r3=dict(
        sub='Thought experiments',
        title='Why Philosophers Use Impossible Cases',
        words=264,
        paras=[
            'The standard objection to a thought experiment is that it could not happen. '
            'Nobody stands beside a lever knowing exactly who will die, with no time pressure '
            'and nothing at stake for themselves. The objection is correct and it is not the '
            'criticism it is taken to be, because the impossibility is deliberate. The case '
            'is built to remove everything except the one feature under examination.',

            'The reasoning is the same as a physicist’s frictionless surface. Nobody claims '
            'such a surface exists. It is introduced so that the behaviour attributable to '
            'friction can be subtracted and what remains can be seen. A moral thought '
            'experiment subtracts uncertainty, self-interest and social consequence for the '
            'same reason, and what it is looking for is whether an intuition survives the '
            'subtraction.',

            'That is where the real argument begins. If the intuition survives — if people '
            'still feel the difference between killing and letting die when every other '
            'factor has been equalised — then something is generating it that the removed '
            'factors do not explain, and it is arguable that this something deserves a place '
            'in the theory. If it does not survive, the intuition was tracking the mess, '
            'which is also worth knowing and is not a failure. The one conclusion the method '
            'cannot support is the popular one: that because the case is artificial, whatever '
            'people say about it may be disregarded. That inference is simply false, and it is '
            'hard to see how anybody reached it. A '
            'frictionless surface is artificial too, and nobody takes that as a reason to '
            'ignore what happens on it.',
        ],
        skill=('Reading an extended analogy',
               ['A B2 passage often carries one analogy across two paragraphs. Track what '
                'maps onto what.',
                'The author will usually state the limit of the analogy, or use it to close '
                'the argument.',
                'An item will ask what the analogy is doing, not what it describes.']),
        guided=[
            ('What is the standard objection to a thought experiment?',
             ('It is too long', 'The situation could not happen',
              'It is not original', 'It assumes too much knowledge'), 1,
             'The first sentence states it, and the rest of the passage is a reply to it.'),
            ('Why is the impossibility deliberate?',
             ('To make it memorable', 'To remove everything except the feature under examination',
              'To simplify teaching', 'To avoid offence'), 1,
             'That is the stated purpose, and it is what the frictionless surface analogy '
             'then illustrates.'),
            ('What does a frictionless surface allow a physicist to do?',
             ('Measure friction directly', 'Subtract friction and see what remains',
              'Build better machines', 'Avoid calculation'), 1,
             'The analogy turns on subtraction, which is exactly the move the moral case '
             'makes.'),
            ('The word "subtraction" in the second paragraph refers to',
             ('an arithmetic operation', 'removing factors to isolate one',
              'reducing the number of cases', 'shortening the argument'), 1,
             'It names the removal of uncertainty, self-interest and social consequence.'),
        ],
        exam=[
            ('What does the author say the method is looking for?',
             ('A correct answer', 'Whether an intuition survives the subtraction',
              'Agreement among readers', 'A counterexample'), 1,
             'That is stated at the end of the second paragraph and is the hinge of the '
             'whole argument.'),
            ('What follows if the intuition survives?',
             ('The theory is proved',
              'Something unexplained by the removed factors is generating it',
              'The experiment failed',
              'The case was badly designed'), 1,
             'The author then says it is arguable that this something deserves a place in '
             'the theory.'),
            ('What follows if the intuition does not survive?',
             ('The method is useless', 'The intuition was tracking the removed factors',
              'The theory is false', 'The case must be repeated'), 1,
             'Which is also worth knowing and is not a failure — both outcomes are '
             'informative.'),
            ('What is "the popular conclusion" the author rejects?',
             ('That intuitions are unreliable',
              'That artificiality licenses disregarding the responses',
              'That philosophers use too many examples',
              'That physics and ethics are alike'), 1,
             'It is named as the one conclusion the method cannot support, and the '
             'frictionless surface is used against it.'),
            ('How does the author use the frictionless surface at the end?',
             ('To introduce a new argument', 'To show that artificiality alone is not a reason to dismiss',
              'To criticise physicists', 'To define friction'), 1,
             'Nobody takes a frictionless surface as a reason to ignore what happens on it, '
             'which closes the parallel.'),
            ('What does "it is arguable that" signal about the author’s commitment?',
             ('Certainty', 'That a case can be made, no more',
              'Rejection', 'Agreement with critics'), 1,
             'It is the weakest positive commitment in the passage and is used for the '
             'theoretical claim rather than for the method.'),
            ('All of the following are subtracted in a moral thought experiment EXCEPT:',
             ('Uncertainty', 'Self-interest', 'Social consequence', 'The intuition itself'), 3,
             'The intuition is what the experiment is testing, so it is precisely what is '
             'left in.'),
            ('What is the author’s overall view of the standard objection?',
             ('It is mistaken', 'It is correct but does not show what people think it shows',
              'It is irrelevant', 'It is the strongest objection available'), 1,
             'The objection is correct and it is not the criticism it is taken to be is '
             'stated in the first paragraph.'),
            ('Which argument would most damage the author’s position?',
             ('That friction cannot be measured',
              'That moral intuitions are produced only by the features the method removes',
              'That thought experiments are old',
              'That physicists disagree about surfaces'), 1,
             'The whole method assumes an intuition can survive subtraction; if nothing '
             'survives in principle, the subtraction can tell you nothing.'),
        ],
    ),

    l1=dict(
        sub='What we owe strangers',
        caption='Two students walking back from a seminar',
        skill=('Hearing an argument being tested rather than asserted',
               ['Philosophical conversation proceeds by trying a position and then '
                'attacking it.',
                'Listen for: suppose, what if, then you would have to say.',
                'The item often asks what somebody would be committed to, which is not '
                'what they said.']),
        warm=[
            ('Woman: So distance makes no moral difference at all?',
             ('That is what the argument commits you to.', 'Yes, about a thousand miles.',
              'It is a good seminar.', 'No, distance is important.'), 0,
             'A checking question about a consequence, answered by naming it as a '
             'commitment rather than a belief.'),
            ('Man: Would you jump in to save a drowning child?',
             ('Obviously — which is the point of the example.', 'It depends on the water.',
              'About two metres.', 'Yes, it happened once.'), 0,
             'A question whose obvious answer is the premise of the argument, acknowledged '
             'as such.'),
            ('Woman: Is that not just guilt-tripping?',
             ('It might be, and the argument would still be valid.', 'Yes, probably.',
              'About forty pounds.', 'No, it is philosophy.'), 0,
             'An objection about motive, answered by separating the psychology from the '
             'logic.'),
        ],
        script=[
            ('Woman', 'So distance makes no moral difference at all?'),
            ('Man', 'That is what the argument commits you to, yes. If you would wade in to '
                    'save a drowning child in front of you, and the only difference with a '
                    'child a thousand miles away is the distance, then —'),
            ('Woman', 'Then I should be giving away most of my money.'),
            ('Man', 'That is the conclusion, and people hate it.'),
            ('Woman', 'I do not hate it. I think it is probably right and I am not doing it, '
                      'which is a different thing.'),
            ('Man', 'That is more honest than most responses.'),
            ('Woman', 'But I want to push on the premise. Is distance really the only '
                      'difference? With the drowning child I know exactly what to do, I know '
                      'it will work, and nobody else is going to do it. None of those hold '
                      'for the money.'),
            ('Man', 'That is the best objection there is. It is not about distance, it is '
                    'about certainty and about whether your particular contribution makes the '
                    'difference.'),
            ('Woman', 'Does it defeat the argument?'),
            ('Man', 'It weakens the conclusion. It does not get you back to zero. Even if you '
                    'are only ten per cent confident that your money saves a life, ten per '
                    'cent of a life for forty pounds is still an extraordinary rate.'),
            ('Woman', 'That is annoying.'),
            ('Man', 'It is meant to be. The argument is very hard to refute and almost '
                    'nobody acts on it, including the person who wrote it.'),
        ],
        items=[
            ('What does the argument commit you to, according to the man?',
             ('Saving children nearby', 'Giving away most of your money',
              'Distrusting charities', 'Travelling to help'), 1,
             'The woman draws the conclusion herself and he confirms it is the conclusion '
             'people hate.'),
            ('What does the woman say about the conclusion?',
             ('She rejects it', 'She thinks it is probably right and is not acting on it',
              'She has not understood it', 'She finds it obvious'), 1,
             'She distinguishes disagreeing with a conclusion from failing to act on it, '
             'which the man calls honest.'),
            ('What is her objection to the premise?',
             ('Distance does matter', 'Certainty and whether your contribution is decisive also differ',
              'The example is unrealistic', 'Children are a special case'), 1,
             'She lists three things that hold for the drowning child and not for the money.'),
            ('How does the man rate that objection?',
             ('Weak', 'The best objection there is', 'Irrelevant', 'Already refuted'), 1,
             'He names it as the strongest available and restates it more precisely than '
             'she did.'),
            ('Does the objection defeat the argument?',
             ('Yes, entirely', 'It weakens the conclusion without removing it',
              'No, it is irrelevant', 'It strengthens it'), 1,
             'He says it does not get you back to zero and gives the expected-value '
             'calculation that remains.'),
            ('What is his point about ten per cent confidence?',
             ('The argument fails below certainty',
              'Even a small probability leaves an extraordinary rate of return',
              'Confidence cannot be measured',
              'Most people are more confident than that'), 1,
             'Ten per cent of a life for forty pounds is the figure he uses to show the '
             'weakened conclusion still bites.'),
            ('What does the man say about the person who wrote the argument?',
             ('They have refuted it', 'They do not fully act on it either',
              'They have changed their mind', 'They are no longer cited'), 1,
             'Including the person who wrote it closes the conversation and generalises the '
             'gap between accepting and acting.'),
        ],
    ),

    l2=dict(
        sub='The limits of consent',
        caption='A briefing to students about research ethics',
        poster=['Ethics applications · deadline Friday',
                'Apply before collecting any data',
                'Drop-in surgery Wednesday 14.00'],
        skill=('Hearing a rule explained by its purpose',
               ['A good briefing gives the reason, because a rule understood is a rule '
                'followed.',
                'Listen for: the reason is, this exists because, what we are protecting '
                'against.',
                'Items often ask for the purpose rather than the rule.']),
        warm=[
            ('Man: Can I recruit from my own seminar group?',
             ('No, because you mark their work.', 'Yes, if they agree.',
              'About twelve people.', 'On Friday.'), 0,
             'A can-I question answered with the refusal and the reason behind it.'),
            ('Woman: Does consent make a risky study acceptable?',
             ('Not on its own, above minimal risk.', 'Yes, that is what consent is for.',
              'About four forms.', 'It is on the website.'), 0,
             'A question about the scope of consent, answered with the threshold where it '
             'stops being sufficient.'),
            ('Man: When should I apply?',
             ('Before you collect anything, not after.', 'Yes, you should.',
              'About two weeks.', 'To the committee.'), 0,
             'A when question answered with the rule and the error it is guarding against.'),
        ],
        script=[
            ('Woman', 'Three things about ethics applications, and I am going to give you the '
                      'reason for each, because a rule you understand is a rule you remember. '
                      'First: apply before you collect any data. Not because we are '
                      'bureaucratic, but because consent given after the fact is not consent '
                      '— the person is being asked to approve something that has already '
                      'happened to them, which is a different question and a much harder one '
                      'to say no to. Second: you may not recruit people you have power over. '
                      'This is the one that causes complaints, usually from people who are '
                      'quite right that they personally would never apply pressure. The rule '
                      'is not about you. It is about what your participants can know. A '
                      'student whose work you mark cannot be certain they are free to refuse, '
                      'however certain you are that they are. We are protecting them from '
                      'having to make a judgement about your character in order to decline. '
                      'Third, and this surprises people: consent is not always enough. Above '
                      'minimal risk, the committee still has to judge the design. You cannot '
                      'consent your way into a study that should not be run, and we would not '
                      'approve it if you tried.'),
        ],
        items=[
            ('Why must applications come before data collection?',
             ('It is a legal requirement', 'Consent given afterwards is not really consent',
              'The committee meets weekly', 'The data would be lost'), 1,
             'She explains that approving something already done is a different and harder '
             'question to refuse.'),
            ('Which rule causes the most complaints?',
             ('The deadline', 'The restriction on recruiting people you have power over',
              'The risk threshold', 'The plain language requirement'), 1,
             'She says so directly and notes the complainants are usually right about their '
             'own conduct.'),
            ('What is the rule actually protecting?',
             ('The researcher’s reputation', 'Participants from having to judge the researcher’s character',
              'The quality of the data', 'The committee’s time'), 1,
             'She reframes the rule from the researcher’s integrity to the participant’s '
             'position.'),
            ('What surprises people about consent?',
             ('It must be written', 'It is not always sufficient',
              'It can be withdrawn', 'It must be in plain language'), 1,
             'She flags the surprise before stating that above minimal risk the design is '
             'still judged.'),
            ('What does "you cannot consent your way into a study that should not be run" mean?',
             ('Consent forms must be approved',
              'Agreement does not make an unacceptable design acceptable',
              'Participants cannot withdraw',
              'Consent must be repeated'), 1,
             'It is the plain statement of the limit she has just described.'),
            ('Why does the speaker give a reason for each rule?',
             ('To fill the time', 'Because a rule that is understood is remembered',
              'Because the rules are disputed', 'To avoid appeals'), 1,
             'She states that purpose in her opening sentence and follows it consistently.'),
        ],
    ),

    l3=dict(
        sub='Thought experiments',
        caption='A lecture on method in moral philosophy',
        board=['Artificial on purpose',
               'Frictionless surface analogy',
               'Survives subtraction → something else at work',
               'Does not survive → also informative'],
        skill=('Following a defence of a method',
               ['A lecture defending a method states the objection first, in its strongest '
                'form, then answers it.',
                'Listen for the strengthening: and the objection is right, as far as it '
                'goes.',
                'The answer usually turns on what the method is for.']),
        warm=[
            ('Man: Is it not a problem that the case is unrealistic?',
             ('It would be, if realism were what it was for.', 'Yes, a serious one.',
              'About five examples.', 'It is a famous case.'), 0,
             'An objection answered by questioning what the method is supposed to deliver.'),
            ('Woman: What is the physics comparison?',
             ('A frictionless surface — nobody thinks it exists.', 'About forces.',
              'Yes, it is similar.', 'In the first lecture.'), 0,
             'A what-is question wants the analogy itself, which the answer supplies with '
             'its key feature.'),
            ('Man: So the intuition is the data?',
             ('Exactly, and the case is the apparatus.', 'No, the case is the data.',
              'About half of them.', 'Intuitions vary.'), 0,
             'A checking question that gets the structure right, confirmed and completed.'),
        ],
        script=[
            ('Man', 'I want to defend a method that most of you will have been told is '
                    'ridiculous, and I want to start by putting the objection as strongly as '
                    'I can. Here it is. The famous cases in moral philosophy describe '
                    'situations that never occur. You never know with certainty who will die. '
                    'You are never free of self-interest. You always have to live with the '
                    'people afterwards. Therefore, the objection runs, whatever people say '
                    'about these cases tells you about an imaginary world and nothing about '
                    'this one. And the objection is right, as far as it goes — every one of '
                    'those statements is true. Here is why it misses. Consider the '
                    'frictionless surface in a physics problem. It does not exist either. '
                    'Nobody has ever been troubled by that, because everyone understands what '
                    'it is for: you remove friction in order to see what is left when friction '
                    'is gone. The moral case removes uncertainty, self-interest and social '
                    'consequence for exactly the same reason. And now the interesting part. '
                    'Suppose the intuition survives the removal — people still think there is '
                    'a difference between killing and letting die when everything else has '
                    'been equalised. Then something is producing that response which the '
                    'removed factors do not account for, and it is arguable that your theory '
                    'owes it an explanation. Suppose instead it vanishes. Then the intuition '
                    'was about the mess all along, which is a genuine finding and not a '
                    'failed experiment. Either result teaches you something. The only move the '
                    'method cannot support is the one people make most often, which is to say '
                    'that because the case is artificial, the responses can be ignored. It is '
                    'hard to see how that follows from anything.'),
        ],
        items=[
            ('Why does the speaker state the objection at length first?',
             ('To agree with it', 'To put it in its strongest form before answering',
              'Because it cannot be answered', 'To save time'), 1,
             'He says explicitly that he wants to put it as strongly as he can, which is a '
             'deliberate rhetorical choice.'),
            ('What does he concede?',
             ('That the method is flawed', 'That every statement in the objection is true',
              'That the cases should be changed', 'That intuitions vary'), 1,
             'The objection is right, as far as it goes, with each factual claim granted.'),
            ('What is the frictionless surface for?',
             ('Making calculations easier', 'Seeing what is left when friction is removed',
              'Modelling real surfaces', 'Teaching beginners'), 1,
             'The analogy turns entirely on subtraction, which is what he then maps onto the '
             'moral case.'),
            ('What follows if the intuition survives the removal?',
             ('The theory is confirmed',
              'Something unexplained by the removed factors is producing it',
              'The case was badly designed',
              'The intuition is unreliable'), 1,
             'He adds that it is arguable the theory owes that something an explanation.'),
            ('What follows if the intuition vanishes?',
             ('The experiment failed', 'The intuition was about the removed factors',
              'The method is discredited', 'The case must be rebuilt'), 1,
             'He calls that a genuine finding rather than a failed experiment.'),
            ('What is the move the method cannot support?',
             ('Comparing ethics to physics', 'Dismissing responses because the case is artificial',
              'Using more than one case', 'Testing intuitions at all'), 1,
             'He names it as the move people make most often and says it does not follow '
             'from anything.'),
            ('How is the lecture structured?',
             ('Chronologically', 'Objection, concession, analogy, two outcomes, rejection of one inference',
              'Two competing theories', 'A list of famous cases'), 1,
             'Each stage is signalled, and the structure is what carries the defence.'),
        ],
    ),

    sp=[
        dict(
            sub='What we owe strangers',
            focus='keeping a conditional chain intact',
            skill=('Repeating an argument, not a sentence',
                   ['These sentences are steps in a chain. Lose one and the rest means '
                    'nothing.',
                    'Mark the joints with a small pause: if X, and if Y, then Z.',
                    'Do not speed up at the end. The conclusion needs the same weight as '
                    'the premises.']),
            repeat=[
                'You would save a drowning child.',
                'Distance is the only difference.',
                'So you should give the money.',
                'That is the conclusion, and people hate it.',
                'The objection is that certainty is also different, not only distance.',
                'Even at ten per cent confidence, the rate of return is still extraordinary.',
                'The argument is very hard to refute, and almost nobody acts on it, including the person who first set it out.',
            ],
            theme='obligation, distance and what we actually do',
            qs=[
                'Thank you for taking part. To begin, do you give to charity? What decides '
                'where it goes?',
                'People give far more readily to a named individual than to a statistic. Is '
                'that a flaw in us, or is there something right about it?',
                'Now your opinion. Do we have stronger obligations to people in our own '
                'country than to people elsewhere? Why or why not?',
                'A final question. Is it worse to believe an argument and not act on it, or '
                'never to have considered it?',
            ],
            model=[(2, 'Both. It is a flaw if it means we help one person while ignoring a '
                       'thousand. But the response to an individual is also what the response '
                       'to the thousand is made of, so removing it would not obviously help.'),
                   (4, 'Believing and not acting is worse in one sense and better in another. '
                       'You are more culpable, and you are also one step from doing something, '
                       'which the other person is not.')],
            selfcheck=['I kept the steps of the argument in order.',
                       'I paused at the joints rather than inside them.',
                       'I gave the conclusion full weight.'],
        ),
        dict(
            sub='The limits of consent',
            focus='explaining a rule by its purpose',
            skill=('Giving the reason before the rule',
                   ['A rule explained is remembered; a rule asserted is resented. Lead with '
                    'the purpose.',
                    'The structure is: what we are protecting, then what follows from that.',
                    'It is also the structure of a good exam answer about policy.']),
            repeat=[
                'Consent must come first.',
                'Afterwards it is not really consent.',
                'You cannot recruit people you have power over.',
                'The rule is not about whether you would apply pressure.',
                'It is about what your participants are able to know.',
                'A student whose work you mark cannot be certain they are free to refuse.',
                'We are protecting them from having to make a judgement about your character in order to say no.',
            ],
            theme='consent, power and research on people',
            qs=[
                'Thanks for joining me. First, have you ever agreed to something you did not '
                'really want to, because of who was asking?',
                'Consent is treated as the key to research ethics. Are there things somebody '
                'should not be able to agree to? Why?',
                'Now your opinion. Should people be paid to take part in research? What '
                'difference does payment make? Why?',
                'And finally. Who should decide what research is acceptable — researchers, '
                'participants, or someone else?',
            ],
            model=[(2, 'Yes, where the risk is serious enough that agreement starts to look '
                       'like a transfer of responsibility rather than a real decision. That '
                       'is roughly where the rules draw it, and I think they are right.'),
                   (3, 'Payment is fine and changes who volunteers. If the sum is large '
                       'enough to matter to somebody poor and not to anybody else, you have '
                       'quietly selected your sample by income.')],
            selfcheck=['I gave the purpose before the rule.',
                       'I used a concrete example.',
                       'I answered the question that was asked.'],
        ),
        dict(
            sub='Thought experiments',
            focus='stating an objection fairly before answering it',
            skill=('Steelmanning out loud',
                   ['Putting the other side at its strongest costs you nothing and buys you '
                    'everything.',
                    'Mark it clearly: the strongest version of the objection is this.',
                    'Then answer the strong version, not the weak one.']),
            repeat=[
                'The case is unrealistic.',
                'That is true of every example.',
                'The strongest version of the objection is this.',
                'Nobody ever knows the consequences with certainty.',
                'A frictionless surface does not exist either, and nobody minds.',
                'You remove friction in order to see what remains when friction is gone.',
                'If the intuition survives the removal, something is producing it that the removed factors do not account for.',
            ],
            theme='argument, examples and changing minds',
            qs=[
                'Thank you for your time. To start, has an example ever changed your mind '
                'about something, rather than an argument?',
                'In public debate people usually attack the weakest version of the other '
                'side. Why, and what does it cost them?',
                'Now your opinion. Should students be taught to argue for positions they '
                'disagree with? Why or why not?',
                'One last question. Is it possible to change somebody’s mind on a moral '
                'question? What works, if anything?',
            ],
            model=[(2, 'Because the weak version is easier and because an audience usually '
                       'cannot tell. What it costs is that you never find out whether you '
                       'were right, which eventually shows.'),
                   (3, 'Yes, and not mainly for the skill. You cannot tell whether you '
                       'believe something until you have had to build the case against it '
                       'properly.')],
            selfcheck=['I stated the objection at its strongest.',
                       'I answered the strong version.',
                       'I did not concede more than I meant to.'],
        ),
    ],

    w1=dict(
        sub='Questions about arguments',
        skill=('Build a Sentence with a hedge inside',
               ['Several items place a hedge inside the embedded clause: whether it is '
                'arguable that, whether it may well be.',
                'The hedge sits with the verb and does not disturb the word order.',
                'A tile reading may well or is likely to is one block.']),
        guided=[
            ('The argument reaches an uncomfortable conclusion.',
             ['whether', 'know', 'do', 'you', 'that', 'is', 'really', 'valid', 'actually'],
             'Do you know whether that is actually really valid?'),
            ('Nobody mentioned the certainty objection in the seminar.',
             ['us', 'told', 'nobody', 'why', 'that', 'was', 'left out', 'exactly', 'of it'],
             'Nobody told us exactly why that was left out of it.'),
            ('My tutor queried my second premise.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'could', 'it', 'defend', 'actually'],
             'She wanted to know whether I could actually defend it.'),
        ],
        exam=[
            ('The case removes uncertainty on purpose.',
             ['do', 'whether', 'know', 'you', 'that', 'may well', 'be', 'the point', 'actually'],
             'Do you know whether that may well actually be the point?'),
            ('The committee refused the application.',
             ['to know', 'nobody', 'seems', 'on what', 'the refusal', 'was', 'based', 'actually', 'grounds'],
             'Nobody seems to know on what grounds the refusal was actually based.'),
            ('Consent is not sufficient above minimal risk.',
             ['explain', 'can', 'anybody', 'why', 'that', 'is', 'to me', 'exactly', 'so'],
             'Can anybody explain to me exactly why that is so?'),
            ('The intuition survived the subtraction.',
             ['know', 'does', 'anybody', 'what', 'it', 'is', 'that', 'producing', 'actually'],
             'Does anybody know what it is that is actually producing it?'),
            ('She refused to recruit from her own group.',
             ['told', 'she', 'us', 'whether', 'the committee', 'had', 'that', 'asked', 'for'],
             'She told us whether the committee had asked for that.'),
            ('The objection has real force.',
             ['the extent', 'to which', 'it', 'damages', 'the argument', 'is', 'still', 'in', 'dispute'],
             'The extent to which it damages the argument is still in dispute.'),
            ('Ten per cent confidence is still a high rate of return.',
             ['whether', 'tell', 'can', 'me', 'you', 'that', 'is', 'likely to', 'hold'],
             'Can you tell me whether that is likely to hold?'),
        ],
    ),

    w2=dict(
        sub='The limits of consent',
        to='ethics@northgate.edu',
        date='21/06/2027',
        subject='Revised application — recruitment changed',
        scenario=[
            'Your ethics application was refused because you planned to recruit from your own '
            'seminar group. The committee explained why and suggested swapping groups with a '
            'colleague. You have done that, and you have also realised a second problem with '
            'your original design that the committee did not raise.',
            'Write an email resubmitting the application.',
        ],
        bullets=['Say what you have changed in response to their point.',
                 'Raise the second problem yourself and say how you have dealt with it.',
                 'Ask one clear question about what remains.'],
        skill=('Volunteering a problem nobody has found',
               ['Raising a weakness yourself is the strongest thing you can do in an '
                'application of any kind.',
                'It must come with the fix, or it is simply a confession.',
                'It buys credibility for the parts you have not changed.']),
        model=[
            'Dear Committee,',
            '',
            'Thank you for the explanation, which was more useful than the decision. I have '
            'swapped seminar groups with a colleague, so I will recruit from a group I do not '
            'teach or mark, and she will recruit from mine. The revised recruitment section '
            'is attached.',
            '',
            'Working through your reasoning made me notice a second problem you did not '
            'raise. My original withdrawal clause said participants could withdraw "at any '
            'time". For an anonymous survey that is not true after submission, because I '
            'cannot identify which response is theirs in order to remove it. Promising '
            'something I cannot deliver is worse than a shorter promise, so I have changed it '
            'to a cut-off at the point of submission, with that limitation stated in the '
            'information sheet in plain words.',
            '',
            'One question remains and I would rather ask than assume. My study carries no '
            'more than minimal risk by any reading I can give the guidance, but it asks about '
            'experiences of academic failure, which some participants may well find '
            'uncomfortable even though nothing in it is harmful. Does that count as minimal '
            'risk for your purposes, or should I treat it as above the threshold and submit '
            'the fuller design justification?',
            '',
            'With thanks,',
            'Rosa Beckett',
        ],
        notes=['The change made in response is stated first and concretely, so compliance is '
               'visible.',
               'The second problem is volunteered with its fix attached, not merely '
               'confessed.',
               'The reasoning behind the fix is given, which shows the principle was '
               'understood rather than the rule obeyed.',
               'One question is asked, with both possible answers named so either is easy to '
               'give.'],
        bandpair=dict(
            mid=[
                'Dear Committee,',
                'Thank you for your email about my application. I have now made the changes '
                'you asked for and I am resubmitting it for your consideration.',
                'As you suggested, I have arranged to swap seminar groups with a colleague so '
                'that I will not be recruiting any students whose work I mark. I hope this '
                'resolves the issue you identified.',
                'I would also like to ask a question about risk. My study is about experiences '
                'of academic failure. I do not think this is risky but some students might '
                'find it a bit upsetting to talk about. Could you let me know whether this '
                'counts as minimal risk or not? I want to make sure I have done everything '
                'correctly this time.',
                'Thank you for your help. Rosa Beckett',
            ],
            top=[
                'Dear Committee,',
                'Thank you for the explanation, which was more useful than the decision. I '
                'have swapped seminar groups with a colleague, so I will recruit from a group '
                'I do not teach or mark.',
                'Working through your reasoning made me notice a second problem you did not '
                'raise. My withdrawal clause said participants could withdraw at any time. For '
                'an anonymous survey that is untrue after submission, because I cannot '
                'identify which response to remove. I have changed it to a cut-off at '
                'submission, stated plainly in the information sheet.',
                'One question remains. My study carries no more than minimal risk by any '
                'reading I can give the guidance, but it asks about academic failure, which '
                'some participants may well find uncomfortable. Does that count as minimal '
                'risk, or should I submit the fuller design justification?',
                'With thanks, Rosa Beckett',
            ],
            diffs=[
                'It volunteers a second problem the committee did not find, with the fix '
                'already made — which is the single most credibility-earning move available.',
                'It gives the reasoning behind the fix, showing the principle was understood '
                'rather than the instruction obeyed.',
                'The question names both possible answers, so the committee can reply in one '
                'line instead of explaining.',
                'It distinguishes uncomfortable from harmful, which is the actual distinction '
                'the guidance turns on.',
                'It avoids "I want to make sure I have done everything correctly", which '
                'frames the writer as a rule-follower rather than as someone exercising '
                'judgement.',
            ],
        ),
    ),

    w3=dict(
        sub='Thought experiments',
        prof='Dr Arslan',
        question='Moral philosophy relies heavily on artificial cases — a runaway trolley, a '
                 'drowning child, a violinist attached to your bloodstream. Some argue that '
                 'these cases are the discipline’s central tool, because they isolate one '
                 'variable the way an experiment does. Others argue that they systematically '
                 'mislead, because real moral life is made of exactly the features the cases '
                 'remove: uncertainty, relationships, and consequences you must live with. '
                 'Are thought experiments good evidence in ethics? Why or why not?',
        posts=[('Lena', 'w',
                'They are the best tool we have. Every science isolates variables, and the '
                'complaint that the case is unrealistic is a complaint about what isolation '
                'is for. Nobody objects to a frictionless surface.'),
               ('Hassan', 'm',
                'The physics analogy fails, and it fails in a specific way. A frictionless '
                'surface is an idealisation of a real surface, and we can measure how far '
                'real ones depart from it. There is no comparable measurement in ethics, so '
                'we never find out how far the idealisation has taken us from the case we '
                'cared about.')],
        skill=('Attacking an analogy precisely',
               ['An analogy fails at a specific point. Naming the point is an argument; '
                'saying it is a bad analogy is not.',
                'Then say whether the failure matters for the conclusion drawn from it.',
                'Sometimes an analogy fails and the conclusion survives on other grounds.']),
        starters=['Hassan has found the real weakness in the analogy, which is that…',
                  'Lena is right that…, though the physics case differs in…',
                  'The question this leaves is whether…',
                  'What survives of the method is…'],
        model=[
            'Hassan has found the real weakness in the analogy, and it is worth stating even '
            'more sharply than he does. A physicist does not merely idealise; she can run the '
            'experiment on a real surface, measure the discrepancy, and attribute it to '
            'friction. The idealisation is checkable against the thing it idealises. In '
            'ethics there is nothing corresponding to that measurement, so the subtraction is '
            'performed and never audited.',
            'Lena is surely right about what isolation is for, and her objection does '
            'not reach as far as Hassan needs it to. The absence of a check means we cannot '
            'quantify how far the artificial case has drifted. It does not mean we learn '
            'nothing from it. If an intuition survives when uncertainty and self-interest are '
            'removed, that is a fact about the intuition regardless of whether we can measure '
            'the drift, and it is hard to see how it could be explained by factors that are '
            'no longer present.',
            'What this leaves is a narrower claim than either post makes. Thought experiments '
            'are good evidence about the structure of our moral responses and poor evidence '
            'about what to do on Tuesday. That is not a small result; most of the famous cases '
            'were offered as the first and have been read as the second.',
            'So I would keep them and change what we take them to show. Used to ask what a '
            'theory must explain, they are indispensable. Used to decide a case under '
            'uncertainty, with people one has to live beside afterwards, they are simply the '
            'wrong instrument, and Hassan’s objection is exactly why.',
        ],
        model_words=265,
    ),

    gram=dict(
        title='Hedging and modality of likelihood',
        headers=['Expression', 'Strength'],
        rows=[
            ('is bound to / is certain to', 'the writer treats it as settled'),
            ('is likely to / will probably', 'strong, short of certain'),
            ('may well', 'possible, and the writer leans towards it'),
            ('may / might / could', 'possible, with no lean either way'),
            ('it is arguable that', 'a case can be made, no more'),
            ('it is doubtful whether', 'the writer leans against'),
            ('it is hard to see how', 'the writer doubts it strongly'),
        ],
        notes=[
            'These form a scale. Choosing the wrong point on it is a factual error, not a '
            'matter of style: may well and might say different things.',
            'May well is stronger than may. The well is not decoration; it marks a lean '
            'towards the possibility.',
            'Hedges do not stack. Possibly might perhaps is one hedge used three times and '
            'reads as evasion rather than precision.',
        ],
        watch='A hedge protects a claim; it does not excuse one you have no basis for. '
              'Writing it is arguable that in front of something you have not argued for is '
              'the commonest way B2 writers lose credit for a paragraph.',
        ex=[
            ('Put these in order from strongest to weakest commitment.',
             ['may well', 'is bound to', 'it is doubtful whether', 'is likely to',
              'it is hard to see how', 'could'],
             ['is bound to', 'is likely to', 'may well', 'could',
              'it is doubtful whether', 'it is hard to see how']),
            ('Choose the expression that matches the evidence described.',
             ['Every study so far has found it. → It ______ be real.',
              'One study found it; nobody has repeated it. → It ______ be real.',
              'Three studies looked and none found it. → ______ it is real.',
              'The mechanism is unknown but the effect is consistent. → It ______ be real.'],
             ['is almost certainly', 'may', 'It is doubtful whether',
              'is likely to']),
            ('Remove the stacked hedges, keeping the intended strength.',
             ['It is possibly maybe the case that the effect might be real.',
              'It could perhaps arguably be said to be true.',
              'There may possibly be some slight suggestion of an effect.',
              'It is quite likely that it might well be correct.'],
             ['The effect may be real.', 'It is arguable that it is true.',
              'There may be a small effect.', 'It is likely to be correct.']),
        ],
        bas='Build a Sentence often puts a hedge inside the embedded clause: do you know '
            'whether that is likely to hold. The hedge travels with the verb and the clause '
            'keeps statement order.',
    ),

    fault=dict(
        text='It is possibly maybe the case that the argument might be valid. It is arguable '
             'that distance makes no difference, although I have given no reason for this. '
             'The evidence refute the second premise completely. Nobody knows whether can the '
             'intuition survive the subtraction. Having removed self-interest, the intuition '
             'was still present in the case.',
        faults=[
            ('It is possibly maybe the case that the argument might be valid',
             'The argument may be valid',
             'Three hedges stacked on one claim read as evasion rather than precision.'),
            ('although I have given no reason for this', 'because of the drowning-child case',
             'A hedge does not excuse a claim with no argument behind it.'),
            ('The evidence refute', 'The evidence refutes',
             'Evidence is singular here, so the verb takes an s.'),
            ('whether can the intuition survive', 'whether the intuition can survive',
             'An embedded question keeps statement order, so the modal follows the subject.'),
            ('Having removed self-interest, the intuition was still present',
             'Having removed self-interest, we found the intuition still present',
             'The intuition did not remove self-interest; the participle needs a subject that did.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('a claim offered in support of a conclusion', 'premise'),
            ('what entitles you to move from evidence to claim', 'warrant'),
            ('to follow necessarily from', 'entail'),
            ('to show that a claim is false', 'refute'),
            ('a single case that defeats a general claim', 'counterexample'),
            ('not favouring any particular person', 'impartial'),
            ('judging an act by its results', 'consequentialist'),
            ('the right to decide about your own life', 'autonomy'),
            ('overriding a choice for the chooser’s own good', 'paternalism'),
            ('allowed, though not required', 'permissible'),
            ('deserving blame', 'culpable'),
            ('able to be argued for, though not obviously true', 'defensible'),
        ],
        gram=[
            ('Every study found it, so it ______ almost certainly be real.', 'is'),
            ('One study found it, so it ______ be real.', 'may'),
            ('It is ______ whether that holds in every case.', 'doubtful'),
            ('It is ______ to see how that follows.', 'hard'),
            ('It is ______ that distance makes no difference.', 'arguable'),
            ('It ______ well be the point of the example.', 'may'),
            ('The effect is ______ to be small.', 'likely'),
            ('That conclusion is ______ to follow, given the premises.', 'bound'),
        ],
        mini=[
            ('An argument can fail because',
             ('the speaker is wrong', 'a premise is false or the inference is invalid',
              'it is too long', 'nobody agrees'), 1,
             'Those are two separate errors, and most public disputes check only for the '
             'first.'),
            ('A thought experiment removes uncertainty in order to',
             ('simplify teaching', 'see whether an intuition survives without it',
              'make the case memorable', 'avoid offence'), 1,
             'The frictionless surface works the same way: subtract one factor and observe '
             'what remains.'),
            ('Consent is not sufficient when',
             ('the sample is small', 'the risk is more than minimal',
              'the study is long', 'the researcher is a student'), 1,
             'Above that threshold the committee still has to judge the design, whatever '
             'participants agree to.'),
            ('Which is the strongest commitment?',
             ('may well', 'is bound to', 'could', 'it is arguable that'), 1,
             'Is bound to treats the claim as settled; the others all leave the question '
             'open to some degree.'),
            ('"It is hard to see how" signals that the writer',
             ('is uncertain', 'doubts it strongly', 'accepts it', 'is quoting'), 1,
             'It is near the rejecting end of the scale, stronger than doubtful and short of '
             'flat denial.'),
            ('The rule against recruiting your own students protects',
             ('the researcher', 'participants from judging the researcher’s character',
              'the data', 'the committee'), 1,
             'Their consent would be real in the researcher’s mind and uncertain in theirs, '
             'which is the asymmetry the rule removes.'),
        ],
    ),

    tip='Hedging is where B2 writers gain or lose a band. The rule is simple and strict: pick '
        'the point on the scale your evidence actually reaches, use one hedge, and never put a '
        'hedge in front of a claim you have not argued for. An unsupported claim is not made '
        'safer by it is arguable that — it is made conspicuous.',
)
