# -*- coding: utf-8 -*-
"""Unit 23 — Neuroscience and Memory. Volume 3."""
from content._g import gaps

_GT, _GA = gaps(
    'A memory is not filed away whole at the moment it is made. What happens at the moment '
    'of an event is encoding, and encoding is partial: a few features are registered and '
    'most are not. Over the following hours the trace is strengthened, a process called '
    'consolid{ation}, and much of it happens during sleep. Deprive a volunteer of sleep on '
    'the night after learning and the material is measur{ably} worse the next week, even '
    'though they were awake and attentive while learning it. The implication is '
    'uncomfort{able} for anyone revising late: the hours after study are not dead time. They '
    'are part of the learn{ing}, and skipping them costs more than the hours them{selves}.')

_ET, _EA = gaps(
    'The reconstructive account of memory says that recall is not playback. Each time a '
    'memory is retrieved it is rebuilt from fragm{ents}, and the rebuild is influ{enced} by '
    'what the person knows now. This explains a finding that is otherwise '
    'inexplic{able}: confident memories can be comprehens{ively} wrong. In one line of '
    'studies, volunteers were shown a traffic accident and then asked how fast the cars were '
    'going when they smashed into each other. A week later those volunteers '
    'report{ed} broken glass that had never been in the film. The verb in the question had '
    'become part of the mem{ory}. Nothing about this makes memory useless. A system that '
    'rebuilt nothing would need to store everything, which is not biolog{ically} available, '
    'and a system that stored everything would retrieve slow{ly}. The cost of the design is '
    'that a memory carries no internal mark of its own accur{acy}. Confidence feels like '
    'evidence and is not, which is why eyewitness testimony is now handled with far more '
    'caut{ion} than it once was.')

UNIT = dict(
    n=23, vol=3, level='B2',
    title='Neuroscience and Memory',
    icons=['brain', 'clock', 'flask'],
    subs=['Consolidation and sleep', 'False memory', 'Imaging what cannot be seen'],
    grammar='Perfect aspect across tenses',
    field='encode, retrieve, impair',
    opener_line='Everything you know about your own memory comes from your memory, which is '
                'the problem. This unit gives you the language for talking about evidence '
                'you cannot inspect directly — and the tense system English uses to place '
                'one event relative to another.',
    candos=[
        'I can follow a text that explains why a system fails by design.',
        'I can use the three perfect tenses to order events in a narrative.',
        'I can describe what an experiment shows and what it does not.',
        'I can report a finding without overstating what it proves.',
        'I can take an argument from one post and apply it to another.',
        'I can write a complaint that stays factual under provocation.',
    ],

    acad=[
        ('encode', 'to put information into a form memory can hold'),
        ('retrieve', 'to bring a memory back'),
        ('impair', 'to make something work less well'),
        ('consolidate', 'to make a new memory stable over time'),
        ('recall', 'the act of bringing something back to mind'),
        ('cue', 'anything that triggers a memory'),
        ('priming', 'being influenced by something seen earlier'),
        ('episodic', 'about events you personally experienced'),
        ('semantic', 'about facts, with no memory of learning them'),
        ('decay', 'gradual weakening over time'),
        ('interference', 'one memory getting in the way of another'),
        ('vivid', 'felt very clearly and in detail'),
        ('implant', 'to put a false memory into somebody'),
        ('misattribute', 'to credit something to the wrong source'),
        ('salient', 'standing out enough to be noticed'),
        ('lesion', 'damage to a region of tissue'),
        ('resolution', 'how fine a detail an instrument can show'),
        ('correlate', 'to vary together, without either causing the other'),
    ],
    family=('consolidate', [
        ('consolidation', 'noun', 'consolidation happens during sleep'),
        ('consolidated', 'adjective', 'a consolidated memory resists decay'),
        ('unconsolidated', 'adjective', 'an unconsolidated trace is fragile'),
    ]),
    collocs=[
        ('lay down a memory', 'to form one in the first place'),
        ('at the time of encoding', 'when the event happened'),
        ('bear on', 'to be relevant to'),
        ('to a degree', 'partly, but not completely'),
        ('on the face of it', 'judging only by appearances'),
        ('a body of work', 'many studies on one question'),
        ('rule out', 'to show that something is not the explanation'),
        ('in the wake of', 'following, and caused by'),
        ('stand up to scrutiny', 'to survive close examination'),
        ('by definition', 'necessarily, because of what the word means'),
    ],
    stance=[
        ('is well established', 'repeated and no longer disputed'),
        ('tends to', 'usually, with exceptions'),
        ('has been argued', 'someone holds it; the writer reports'),
        ('remains an open question', 'the writer says it is unsettled'),
        ('is unlikely to', 'the writer leans against it'),
    ],
    nuance=[
        ('remember / remind', 'you remember; something reminds you'),
        ('recall / recognise', 'produce it / pick it out of a line-up'),
        ('affect / effect', 'usually verb / usually noun'),
    ],
    vocab_talk=[
        'Describe your earliest memory. How do you know it is yours?',
        'What helps you remember a name? Why does it work?',
        'Should a jury be told that confident witnesses are often wrong?',
        'Is it better to revise late and sleep less, or the opposite?',
    ],
    again=['working memory', 'long-term memory', 'eyewitness testimony',
           'control group', 'double-blind', 'scan', 'baseline', 'confound'],

    r1=dict(
        sub='Consolidation and sleep',
        skill=('Deciding the part of speech before the letters',
               ['Almost every B2 gap is a suffix. The sentence tells you which part of '
                'speech the slot needs before you have read a single letter.',
                'After a determiner, the slot is a noun. Before a noun, an adjective. After '
                'a verb or a whole clause, an adverb.',
                'Only then does the spelling matter: -tion, -ence, -able, -ly.']),
        guided_text=_GT, guided=_GA,
        guided_hint='consolid{ation} is consolidation — the slot follows a called and names '
                    'a process, so it has to be a noun.'.replace('{', '').replace('}', ''),
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='False memory',
        skill=('Reading a study description and a press release together',
               ['The press release always claims more than the study. Your job is to find '
                'the gap between them.',
                'Look at the sample: how many people, and who were they?',
                'A claim about everybody from a study of forty undergraduates is the '
                'commonest overreach there is.']),
        docs=[
            ('notice', 'Participant information · Memory and Suggestion study', [
                '# What you will do',
                'Watch a two-minute film, answer questions, and return after seven days.',
                'Total time about 40 minutes across the two visits.',
                '# Who can take part',
                '* Students aged 18 to 30 registered at this university.',
                '* You may not take part if you have taken part in a memory study before.',
                '# What we are testing',
                '* How the wording of a question affects what people later report.',
                '* We are not testing your memory ability, and you will not be given a score.',
                '# Your data',
                '* Responses are anonymous. You may withdraw up to the end of visit two.',
            ], 'notice'),
            ('social', 'Northgate Press Office', '@northgate_news', [
                'NEW RESEARCH: our psychologists have shown that human memory is unreliable',
                'and that eyewitness evidence should not be trusted in court.',
                '',
                'In the study, participants who were asked how fast cars were going when',
                'they "smashed" later remembered broken glass that was never there.',
                '',
                'Lead author Dr Ellis said: "The wording of a question can change what a',
                'person reports a week later. That is a narrower claim than it sounds, and',
                'I would not want it stretched."',
            ], 'h'),
        ],
        guided=[
            ('How many visits does the study require?',
             ('One', 'Two', 'Three', 'Seven'), 1,
             'Participants watch the film and then return after seven days, which the notice '
             'calls visit two.'),
            ('Who may not take part?',
             ('Anyone over 25', 'Anyone who has done a memory study before',
              'Anyone not studying psychology', 'Anyone who has seen the film'), 1,
             'Previous participation is the one exclusion the notice lists, alongside the age '
             'and registration requirements.'),
            ('What does the notice say the study is NOT testing?',
             ('The wording of questions', 'The participant’s memory ability',
              'Reaction times', 'The effect of sleep'), 1,
             'It says so explicitly, and adds that no score will be given, which is there to '
             'stop people treating it as a test of themselves.'),
            ('Until when may a participant withdraw?',
             ('At any time', 'Until the end of visit two',
              'Until seven days after visit one', 'Only during visit one'), 1,
             'The data section sets the limit at the end of visit two, after which the '
             'responses are anonymous and cannot be traced back.'),
        ],
        exam=[
            ('What is the main difference between the press post and Dr Ellis’s quotation?',
             ('They disagree about the result',
              'The post generalises further than the quotation does',
              'The quotation is about a different study',
              'The post gives the sample size'), 1,
             'The post concludes that eyewitness evidence should not be trusted; the '
             'researcher claims only that wording changes what is reported.'),
            ('What does Dr Ellis mean by "a narrower claim than it sounds"?',
             ('The study was small', 'The finding is about question wording, not about memory in general',
              'The result was not significant', 'The film was short'), 1,
             'She is marking the boundary of her own result, which is exactly the boundary '
             'the headline crosses.'),
            ('Which group was studied?',
             ('Jurors', 'Police officers', 'University students aged 18 to 30',
              'Adults of all ages'), 2,
             'The participant information restricts the sample to registered students in '
             'that age band.'),
            ('Why does the sample matter when reading the headline?',
             ('Students have better memories', 'A claim about everyone rests on a narrow group',
              'Students are easier to recruit', 'The sample was too old'), 1,
             'The headline is about human memory and courts; the evidence is forty '
             'undergraduates watching a film.'),
            ('What is the stated purpose of the seven-day gap?',
             ('To let the memory consolidate', 'To allow withdrawal',
              'It is not stated', 'To recruit more participants'), 2,
             'The notice gives the timing but never explains it, so any reason the reader '
             'supplies is their own.'),
            ('What does "you will not be given a score" protect against?',
             ('Participants comparing results',
              'Participants treating the study as a test of their own ability',
              'Data being traced back to individuals',
              'Participants withdrawing early'), 1,
             'It sits directly after we are not testing your memory ability, and removes the '
             'reason somebody might worry about performing.'),
            ('What would make the press post accurate?',
             ('Adding the sample size and limiting the claim to question wording',
              'Removing the quotation', 'Naming the film used',
              'Describing the seven-day gap'), 0,
             'The two faults are the missing sample and the leap from wording effects to '
             'courtroom evidence, and both are fixed by the same change.'),
        ],
    ),

    r3=dict(
        sub='Imaging what cannot be seen',
        title='What a Brain Scan Does Not Show',
        words=262,
        paras=[
            'A functional scan produces an image in which some regions are coloured and most '
            'are not. The colour is easy to misread. It does not show where thinking is '
            'happening; it shows where blood flow changed more than in a comparison '
            'condition. Everything in the image is a difference between two states, and the '
            'choice of comparison decides what appears. Change the comparison and the '
            'coloured regions move.',

            'This is well established among researchers and almost never visible to readers '
            'of the resulting news story. A study reporting that a region lights up when '
            'people see a familiar face has compared familiar faces with something — '
            'unfamiliar faces, perhaps, or a blank screen — and the finding belongs to the '
            'pair, not to the region. A region that appears in one comparison and not '
            'another has not stopped working. It has stopped differing.',

            'The second limit is time. The signal tracks blood, and blood responds over '
            'several seconds, while the activity it stands in for takes milliseconds. A scan '
            'tends to show that two regions were both involved, and is unlikely to settle '
            'which was involved first. For questions about sequence — did the judgement '
            'precede the feeling, or follow it — the method is close to silent, and '
            'researchers who need that answer use other tools. It has been argued that the '
            'popularity of these images has shaped which questions get asked, with sequence '
            'questions quietly dropped because the dominant method cannot reach them. '
            'Whether that has actually happened remains an open question, but the worry is '
            'not an unreasonable one.',
        ],
        skill=('Reading a text whose job is to limit a claim',
               ['Some B2 passages exist to say what something does not show. They are built '
                'as a list of limits.',
                'Each paragraph after the first usually adds one limit. Name them as you go: '
                'comparison, time, and so on.',
                'The final paragraph often raises a worry the author does not fully endorse. '
                'Watch the hedge on it.']),
        guided=[
            ('What does the colour in a functional scan show?',
             ('Where thinking happens', 'Where blood flow changed relative to a comparison',
              'Which regions are largest', 'Where damage has occurred'), 1,
             'The passage corrects the common reading directly: everything in the image is a '
             'difference between two states.'),
            ('What happens if the comparison condition is changed?',
             ('The image stays the same', 'The coloured regions move',
              'The scan takes longer', 'The resolution improves'), 1,
             'Change the comparison and the coloured regions move is stated as the direct '
             'consequence of the method.'),
            ('What does it mean that a region "has stopped differing"?',
             ('It is no longer active', 'It is active in both conditions being compared',
              'It has been damaged', 'It was never active'), 1,
             'Not appearing means the two states did not differ there, which is compatible '
             'with the region working hard in both.'),
            ('The word "settle" in the third paragraph is closest in meaning to',
             ('calm', 'decide', 'pay for', 'locate'), 1,
             'The scan cannot settle which region was involved first, meaning it cannot '
             'decide the question.'),
        ],
        exam=[
            ('What is the main purpose of the passage?',
             ('To criticise neuroscience', 'To set out what the method cannot show',
              'To explain how scanners are built', 'To compare two imaging techniques'), 1,
             'Each paragraph adds a limit — the comparison, then time — and the title names '
             'the purpose directly.'),
            ('Why is the time limit a problem for some questions?',
             ('Scans are expensive', 'Blood responds far more slowly than the activity',
              'Participants move during scanning', 'The resolution is too low'), 1,
             'Seconds against milliseconds is the mismatch, and it is why sequence questions '
             'cannot be answered this way.'),
            ('What does the author say about questions of sequence?',
             ('The method answers them well', 'The method is close to silent on them',
              'They are not worth asking', 'They require larger samples'), 1,
             'Close to silent is the author’s own phrase, followed by the note that '
             'researchers needing the answer use other tools.'),
            ('What worry is raised in the last paragraph?',
             ('That scans are inaccurate', 'That the method may be shaping which questions get asked',
              'That the images are edited', 'That researchers disagree'), 1,
             'The concern is about the field’s agenda rather than the technique, and it is '
             'the only claim in the passage the author hedges twice.'),
            ('How does the author treat that worry?',
             ('Endorses it fully', 'Rejects it', 'Leaves it open while calling it reasonable',
              'Attributes it to the press'), 2,
             'Remains an open question is followed by but the worry is not an unreasonable '
             'one, which withholds agreement without dismissing it.'),
            ('What does "the finding belongs to the pair" mean?',
             ('Two researchers share credit', 'The result is about the two conditions compared',
              'Two regions were involved', 'The study was replicated twice'), 1,
             'The pair is the pair of conditions, and the sentence is saying the result '
             'cannot be detached from the comparison that produced it.'),
            ('All of the following are stated as limits EXCEPT:',
             ('The dependence on a comparison condition', 'The slowness of the blood signal',
              'The inability to settle sequence', 'The small size of typical samples'), 3,
             'Sample size is never mentioned; the other three are each developed at length.'),
            ('What is implied about news reporting of scans?',
             ('It is usually accurate', 'It rarely conveys the comparison condition',
              'It exaggerates sample sizes', 'It ignores the images'), 1,
             'Almost never visible to readers of the resulting news story is the author’s '
             'only remark about reporting, and it is about the comparison.'),
            ('Which finding would most support the worry in the last paragraph?',
             ('That scanner resolution has improved',
              'That published sequence questions have fallen since scanning became common',
              'That scans are used in more countries',
              'That blood flow is well understood'), 1,
             'The worry is that a method is shaping the agenda, so evidence that the '
             'unanswerable questions stopped being asked is exactly what would bear on it.'),
        ],
    ),

    l1=dict(
        sub='Consolidation and sleep',
        caption='Two students outside the library at midnight',
        skill=('Hearing advice that is being resisted',
               ['When one speaker gives advice and the other does not take it, the refusal '
                'is usually indirect: I know, but; that is fine for you.',
                'The item will ask what the second speaker actually intends to do, which is '
                'rarely what they say first.',
                'Listen to the last line. People put the real decision at the end.']),
        warm=[
            ('Woman: Are you still here?',
             ('I have about two hours left in me.', 'Yes, the library is open.',
              'It closes at one.', 'No, I came at six.'), 0,
             'A question that is really about why someone is still working invites a plan '
             'rather than a yes or no.'),
            ('Man: Does sleeping on it actually help?',
             ('The evidence is surprisingly strong.', 'I slept badly.',
              'About eight hours.', 'Yes, it is a good bed.'), 0,
             'A does-it-work question is answered with the state of the evidence, not with '
             'the speaker’s own night.'),
            ('Woman: I have not started the second paper yet.',
             ('Then tonight is not the night to skip sleep.', 'It is a good paper.',
              'Yes, I read it.', 'About forty pages.'), 0,
             'An admission of being behind invites a judgement about the plan, which is what '
             'the conversation then turns on.'),
        ],
        script=[
            ('Woman', 'Are you still here?'),
            ('Man', 'I have about two hours left in me. Maybe three.'),
            ('Woman', 'It is already midnight.'),
            ('Man', 'I know. But I have not finished the methods section and it is due at '
                    'nine.'),
            ('Woman', 'Does sleeping on it actually help, or is that something people say?'),
            ('Man', 'The evidence is surprisingly strong, apparently. They did a study where '
                    'one group slept and one group did not, and a week later the sleepers '
                    'remembered more. Same amount of study time.'),
            ('Woman', 'So you have read the research and you are ignoring it.'),
            ('Man', 'I have read it and I have a deadline. Those are different problems.'),
            ('Woman', 'They are the same problem. If you write it at three and it is bad, you '
                      'rewrite it tomorrow when you are worse.'),
            ('Man', 'That is a fair point, annoyingly.'),
            ('Woman', 'I am not trying to win. I did exactly this in second year and the '
                      'essay I wrote at four in the morning is the lowest mark I have ever '
                      'had.'),
            ('Man', 'Right. I will do the outline and go. The writing can happen at seven.'),
        ],
        items=[
            ('What is the man doing in the library?',
             ('Reading for an exam', 'Finishing the methods section of a paper',
              'Waiting for a friend', 'Returning books'), 1,
             'He names the methods section and the nine o’clock deadline as the reason he is '
             'still there at midnight.'),
            ('What does the study the man describes compare?',
             ('Long study and short study', 'A group that slept and a group that did not',
              'Morning and evening learners', 'Students and non-students'), 1,
             'Same study time, different sleep, measured a week later — that is the design '
             'he reports.'),
            ('What does the woman mean by "you have read the research and you are ignoring it"?',
             ('He has misunderstood the study', 'He is acting against what he knows',
              'The research is unreliable', 'He has not read it carefully'), 1,
             'It is an accusation of inconsistency, and his reply — those are different '
             'problems — concedes that he knows.'),
            ('How does the man first defend staying?',
             ('By doubting the evidence', 'By separating the research from the deadline',
              'By saying he is not tired', 'By blaming his supervisor'), 1,
             'I have read it and I have a deadline draws a line between knowing something '
             'and being free to act on it.'),
            ('Why does the woman mention her second year?',
             ('To show she is more experienced', 'To give evidence from her own cost',
              'To change the subject', 'To recommend a module'), 1,
             'She says explicitly that she is not trying to win, and then supplies the worst '
             'mark she has ever had as the reason.'),
            ('What does the man decide to do?',
             ('Stay another three hours', 'Write the outline and leave',
              'Hand the paper in late', 'Start again in the morning'), 1,
             'His last line splits the task: the outline now, the writing at seven, which '
             'takes the advice without abandoning the deadline.'),
            ('What does "annoyingly" tell you about the man’s reaction?',
             ('He is angry with her', 'He accepts the point and would rather not',
              'He does not understand', 'He is joking about the deadline'), 1,
             'It concedes the argument and registers irritation at having to, which is why '
             'the next line is a change of plan.'),
        ],
    ),

    l2=dict(
        sub='False memory',
        caption='A briefing to volunteers before a psychology study',
        poster=['Memory and Suggestion · visit 1 today',
                'Visit 2 is exactly seven days from now',
                'You may withdraw until the end of visit 2'],
        skill=('Hearing what a speaker rules out',
               ['A careful speaker at B2 spends time saying what they are not claiming. '
                'Those sentences are tested.',
                'Listen for: this is not, we are not testing, that would be a different '
                'study.',
                'The negative statement is usually more precise than the positive one.']),
        warm=[
            ('Man: Will we be told how we did?',
             ('There is no score — that is deliberate.', 'Yes, in about a week.',
              'It takes forty minutes.', 'The film is two minutes long.'), 0,
             'A yes/no about feedback is answered with the fact and the reason behind it.'),
            ('Woman: Can I pull out after the second visit?',
             ('No — the cut-off is the end of visit two.', 'Yes, at any time.',
              'The study runs for a month.', 'You can pull out of visit one.'), 0,
             'A question about a limit is answered by stating the limit precisely rather '
             'than vaguely reassuring.'),
            ('Man: Is this testing how good my memory is?',
             ('No — it is testing how questions are worded.', 'Yes, partly.',
              'About forty people.', 'It is a psychology study.'), 0,
             'A misunderstanding about the purpose is corrected and replaced with the actual '
             'object of study.'),
        ],
        script=[
            ('Woman', 'Thank you all for coming. Before we start, three things, and the third '
                      'is the one people get wrong. First, the practicalities: you will watch '
                      'a short film, answer some questions, and come back in exactly seven '
                      'days. Forty minutes in total across the two visits. Second, '
                      'withdrawal. You can stop at any point up to the end of visit two. '
                      'After that the responses have been anonymised and we genuinely cannot '
                      'find yours to remove it — that is not a policy, it is a limitation. '
                      'Third, and this is the one. This study is not a test of your memory. '
                      'You will not be given a score, and there is no good or bad performance '
                      'here. What we are measuring is something about the questions, not '
                      'something about you. I say that because in the last round several '
                      'people apologised to me afterwards for having a bad memory, and they '
                      'had done nothing of the kind. If anything, the effect we are looking '
                      'for is strongest in people paying the most attention.'),
        ],
        items=[
            ('How long does the whole study take?',
             ('Two minutes', 'Forty minutes across two visits', 'Seven days',
              'It is not stated'), 1,
             'Forty minutes in total across the two visits is given in the practicalities.'),
            ('Why can responses not be removed after visit two?',
             ('It is against policy', 'They have been anonymised and cannot be identified',
              'They have been published', 'The study has ended'), 1,
             'The speaker is careful to say that is not a policy, it is a limitation, which '
             'distinguishes a rule from an impossibility.'),
            ('What does the speaker say people most often get wrong?',
             ('The timing of visit two', 'The withdrawal rule',
              'That the study tests their memory', 'The length of the film'), 2,
             'She numbers it third and flags it as the one, then spends the rest of the '
             'briefing on it.'),
            ('Why does the speaker mention people apologising?',
             ('To ask them not to', 'To show how easily the purpose is misread',
              'To explain the withdrawal rule', 'To thank previous volunteers'), 1,
             'The apologies are offered as evidence that the misunderstanding is common and '
             'has a cost for the participants.'),
            ('What does the speaker say about people paying the most attention?',
             ('They show the effect least', 'They may show the effect most',
              'They should not take part', 'They finish faster'), 1,
             'If anything, the effect is strongest in them — which removes any reading of '
             'the result as a failure of attention.'),
            ('What is the speaker’s main purpose?',
             ('To recruit more volunteers', 'To prevent a specific misunderstanding',
              'To explain the hypothesis', 'To obtain written consent'), 1,
             'Two short practical points are followed by a long third one, and the third is '
             'entirely about what the study is not.'),
        ],
    ),

    l3=dict(
        sub='Imaging what cannot be seen',
        caption='A lecture on reading a functional scan',
        board=['Colour = difference, not activity',
               'Every image has a comparison condition',
               'Blood: seconds. Neurons: milliseconds.',
               'Ask what was subtracted'],
        skill=('Following a talk that teaches one question to ask',
               ['Some B2 talks hand you a single question and apply it repeatedly. The '
                'question is the content.',
                'Here it is: what was this compared with? Everything else follows.',
                'Expect an item that asks you to apply the question to a new case the '
                'speaker has not covered.']),
        warm=[
            ('Man: What do the colours actually mean?',
             ('A difference between two conditions.', 'They are chosen for clarity.',
              'About four colours.', 'Yes, they mean activity.'), 0,
             'A what-do-they-mean question wants the referent, and the answer names the '
             'comparison rather than the region.'),
            ('Woman: Can a scan tell us which region acted first?',
             ('Not really — the blood signal is too slow.', 'Yes, to the millisecond.',
              'About two regions.', 'It can show both.'), 0,
             'A can-it question about sequence is answered with the limitation and the '
             'reason for it.'),
            ('Man: So an uncoloured region is switched off?',
             ('No — it just did not differ between conditions.', 'Yes, entirely.',
              'It is a large region.', 'The scan took an hour.'), 0,
             'A checking question built on a misunderstanding, corrected by restating what '
             'absence of colour actually means.'),
        ],
        script=[
            ('Man', 'I am going to give you one question today, and I want you to ask it '
                    'every time you see a brain image for the rest of your life. The question '
                    'is: what was this compared with? Here is why it matters. A functional '
                    'scan does not measure thought. It measures blood flow, and it reports '
                    'the difference in blood flow between two conditions. So every coloured '
                    'region in every image you have ever seen is the answer to a subtraction. '
                    'Take a real example. A paper reports that a region responds to familiar '
                    'faces. Compared with what? If the comparison was a blank screen, the '
                    'region may simply be responding to faces, or to anything complex. If the '
                    'comparison was unfamiliar faces, the claim is much stronger and much '
                    'narrower. Same region, same colour, entirely different finding, and the '
                    'image looks identical. Now the second limitation, which is harder to fix. '
                    'The blood response takes several seconds. The neural activity takes '
                    'milliseconds. So if you want to know whether region A acted before region '
                    'B, this method tends to be unable to tell you, and a study that claims '
                    'otherwise is unlikely to be using scanning alone. None of this means the '
                    'images are worthless. It means they answer a narrower question than they '
                    'appear to, and anyone who forgets the subtraction is bound to overread '
                    'them.'),
        ],
        items=[
            ('What is the one question the speaker recommends?',
             ('How large is the sample?', 'What was this compared with?',
              'Who funded the study?', 'How long did the scan take?'), 1,
             'He states it at the start and uses it as the organising device for the rest '
             'of the talk.'),
            ('What does a functional scan actually measure?',
             ('Electrical activity', 'Blood flow differences between two conditions',
              'Oxygen levels in one region', 'The size of each region'), 1,
             'He corrects the natural assumption immediately: it does not measure thought, '
             'it reports a difference in blood flow.'),
            ('In the familiar-faces example, why does the comparison matter?',
             ('It changes the colour', 'It changes what the finding actually claims',
              'It changes the scan duration', 'It changes the region studied'), 1,
             'Blank screen and unfamiliar faces give very different findings from an '
             'identical-looking image.'),
            ('What does the speaker say about an image where the comparison was a blank screen?',
             ('It proves face recognition', 'The region may be responding to anything complex',
              'It is invalid', 'It has better resolution'), 1,
             'That is the weaker reading he offers, and it is why he calls the unfamiliar-'
             'face comparison stronger and narrower.'),
            ('Why can the method rarely answer questions about order?',
             ('Scans are too short', 'Blood responds in seconds and neurons in milliseconds',
              'Regions overlap', 'Participants move'), 1,
             'The timescale mismatch is the whole of the second limitation, and he calls it '
             'harder to fix than the first.'),
            ('What does the speaker say about a study claiming to settle sequence?',
             ('It is certainly wrong', 'It is unlikely to be using scanning alone',
              'It must have a large sample', 'It should be replicated'), 1,
             'He hedges rather than rejecting it, which leaves room for studies combining '
             'scanning with a faster method.'),
            ('What is the speaker’s overall position on scans?',
             ('They are worthless', 'They answer a narrower question than they appear to',
              'They should be replaced', 'They are the best available method'), 1,
             'He says explicitly that none of this means the images are worthless, and then '
             'states the narrower claim.'),
        ],
    ),

    sp=[
        dict(
            sub='Consolidation and sleep',
            focus='the contracted perfect — I’ve, he’d, they’ve — at speed',
            skill=('Repeating contracted perfect forms',
                   ['The perfect contracts in speech and the contraction carries the '
                    'meaning. Dropping it changes the tense.',
                    'I’d finished and I finished are a different claim. Practise until the '
                    'contraction is automatic.',
                    'The stress never falls on the auxiliary. It falls on the main verb.']),
            repeat=[
                'I have finished the first draft.',
                'She had already left when I arrived.',
                'They have been working since six.',
                'By Friday I will have written four thousand words.',
                'He had not slept at all before the exam, which showed.',
                'Volunteers who had slept remembered more than those who had stayed awake.',
                'By the time the second visit came round, most of them had forgotten what the original question had said.',
            ],
            theme='sleep, study and how people actually work',
            qs=[
                'Thanks for taking part. To begin, when do you do your best work — morning, '
                'afternoon or late at night?',
                'Many students work late before a deadline even though they know it does not '
                'help. Why do you think people do that?',
                'Now your opinion. Should universities set deadlines at midday rather than '
                'midnight, to discourage working through the night? Why or why not?',
                'One last question. Some employers now track how long staff work rather than '
                'what they produce. Is that reasonable? Why?',
            ],
            model=[(2, 'Partly because the deadline is real and the evidence is abstract. '
                       'You can see the clock. You cannot see the mark you would have got '
                       'with six hours of sleep.'),
                   (3, 'I would support it, although I doubt it would work on its own. '
                       'People would simply start the all-nighter earlier. It would need to '
                       'come with something about how much work is set.')],
            selfcheck=['I used a contracted perfect form at least twice.',
                       'I ordered two past events correctly.',
                       'I gave a reason rather than only a position.'],
        ),
        dict(
            sub='False memory',
            focus='reporting what somebody else said without agreeing with it',
            skill=('Attributing a claim out loud',
                   ['At B2 you must be able to report a view without being taken to hold '
                    'it. That is a tone as much as a structure.',
                    'The research suggests, it has been argued, the press release claimed '
                    '— each one puts distance in.',
                    'Then mark your own view explicitly: for what it is worth, I think.']),
            repeat=[
                'The wording of a question matters.',
                'Confidence is not evidence of accuracy.',
                'Volunteers reported glass that was never there.',
                'It has been argued that memory is reconstructed each time.',
                'A press release claimed far more than the study had shown.',
                'The researchers had compared two groups who had seen exactly the same film.',
                'What the study established was narrow, and what the headline claimed was not, which is a difference worth insisting on.',
            ],
            theme='evidence, confidence and the courtroom',
            qs=[
                'Thank you for your time. First, have you ever been certain about a memory '
                'and later found out you were wrong?',
                'Juries are often impressed by a confident witness. Should they be told that '
                'confidence and accuracy are only weakly related? Why?',
                'Now an opinion question. Should newspapers be required to state the sample '
                'size of any study they report? Why or why not?',
                'And finally. If a scientific finding is likely to be misused in public, '
                'should the researchers publish it anyway? Why?',
            ],
            model=[(2, 'Yes, they should, and told it carefully. The risk is that a jury '
                       'swings from trusting every witness to trusting none, and the second '
                       'error is as bad as the first.'),
                   (4, 'I think they should publish. Withholding a finding assumes the '
                       'researchers can predict the misuse, and the history of that is not '
                       'encouraging. The answer is better reporting, not less research.')],
            selfcheck=['I attributed a claim without endorsing it.',
                       'I then marked my own view clearly.',
                       'I avoided overstating what a study showed.'],
        ),
        dict(
            sub='Imaging what cannot be seen',
            focus='stress on the negative in a limiting statement',
            skill=('Saying what something does not show',
                   ['Negative statements are where B2 speakers lose clarity. The listener '
                    'must hear the not.',
                    'It does NOT show where thinking happens. Stress the auxiliary, not the '
                    'verb, when the point is the denial.',
                    'Then immediately say what it does show. A denial without a replacement '
                    'is a dead end.']),
            repeat=[
                'The scan shows a difference.',
                'It does not show thought.',
                'Every image has a comparison condition.',
                'A region that is not coloured has not stopped working.',
                'The blood signal is far too slow to settle questions of order.',
                'What the image answers is narrower than what it appears to answer.',
                'Anyone who has forgotten what was subtracted will read far more into the picture than the method can support.',
            ],
            theme='pictures, evidence and public understanding',
            qs=[
                'Thanks for joining me. To start, where do you usually come across science '
                'news — and do you follow it up?',
                'Images are very persuasive. Does a picture of a brain make a claim more '
                'convincing to you than a table of numbers would? Why?',
                'Now your opinion. Should journals require that any image in a press release '
                'be published with its comparison condition stated? Why or why not?',
                'One final question. If the public finds a method convincing for the wrong '
                'reasons, whose problem is that — the researchers’, the journalists’, or the '
                'readers’?',
            ],
            model=[(2, 'Honestly, yes, and I know it should not. A picture feels like '
                       'looking at the thing itself, whereas a table feels like somebody’s '
                       'summary. Both are summaries.'),
                   (4, 'I would put most of it on the researchers, because they are the only '
                       'ones who know what was subtracted. Journalists cannot report a '
                       'limitation nobody has told them about.')],
            selfcheck=['I stressed the negative so the denial was audible.',
                       'I followed each denial with what is actually shown.',
                       'I kept going for the whole answer.'],
        ),
    ],

    w1=dict(
        sub='Questions about what is known',
        skill=('Build a Sentence with a perfect tense inside',
               ['The embedded clause now often carries a perfect form: had already, has '
                'ever, will have.',
                'The perfect sits inside the clause and keeps statement word order: whether '
                'she had finished, not whether had she finished.',
                'A tile reading had or has goes directly before its participle, wherever '
                'the clause sits.']),
        guided=[
            ('My flatmate says she never forgets a face.',
             ['whether', 'tested', 'know', 'do', 'you', 'that', 'has', 'been', 'ever'],
             'Do you know whether that has ever been tested?'),
            ('The second visit is exactly seven days later.',
             ['us', 'why', 'told', 'nobody', 'the gap', 'that', 'is', 'long', 'exactly'],
             'Nobody told us exactly why the gap is that long.'),
            ('My supervisor read the draft over the weekend.',
             ['she', 'how much', 'wanted', 'of it', 'to know', 'I', 'had', 'already', 'rewritten'],
             'She wanted to know how much of it I had already rewritten.'),
        ],
        exam=[
            ('The press office published the story on Tuesday.',
             ['do', 'whether', 'you', 'know', 'the authors', 'had', 'seen it', 'first', 'actually'],
             'Do you know whether the authors had actually seen it first?'),
            ('The region appears in one comparison and not the other.',
             ['explain', 'can', 'anybody', 'why', 'that', 'happens', 'at all', 'exactly', 'to me'],
             'Can anybody explain to me exactly why that happens at all?'),
            ('The volunteers came back a week later.',
             ['to know', 'nobody', 'seems', 'how many', 'of them', 'had', 'the film', 'forgotten', 'already'],
             'Nobody seems to know how many of them had already forgotten the film.'),
            ('I have never taken part in a study before.',
             ['whether', 'tell', 'can', 'me', 'that', 'you', 'rules', 'me out', 'actually'],
             'Can you tell me whether that actually rules me out?'),
            ('The scan showed two regions lighting up.',
             ['which', 'know', 'does', 'anybody', 'one', 'responded', 'first', 'actually', 'of them'],
             'Does anybody know which one of them actually responded first?'),
            ('She apologised for having a bad memory.',
             ['told', 'her', 'the researcher', 'that', 'she', 'had', 'nothing', 'wrong', 'done'],
             'The researcher told her that she had done nothing wrong.'),
            ('The deadline is nine in the morning.',
             ['whether', 'I', 'know', 'do not', 'yet', 'I', 'will have', 'by then', 'finished'],
             'I do not know yet whether I will have finished by then.'),
        ],
    ),

    w2=dict(
        sub='False memory',
        to='press@northgate.edu',
        date='19/11/2026',
        subject='Correction request — memory study coverage',
        scenario=[
            'You took part in a psychology study. The university press office has published a '
            'post saying the research shows eyewitness evidence should not be trusted in '
            'court. The lead researcher is quoted in the same post making a much narrower '
            'claim. You are a student journalist and you want the post corrected.',
            'Write an email to the press office.',
        ],
        bullets=['Say what the post claims and what the study actually showed.',
                 'Point out that the researcher’s own quotation contradicts the headline.',
                 'Ask for a specific correction.'],
        skill=('Asking for a correction without accusing anybody',
               ['A correction request works when it gives the reader an easy way to say '
                'yes, and fails when it makes them defend themselves.',
                'Quote their own source back to them. The researcher’s words are far more '
                'persuasive than your opinion.',
                'Propose the replacement wording. An editor who has to write it themselves '
                'usually does nothing.']),
        model=[
            'Dear Press Office,',
            '',
            'I am writing about Tuesday’s post on the memory and suggestion study, which I '
            'took part in as a volunteer.',
            '',
            'The post’s opening line says the research has shown that eyewitness evidence '
            'should not be trusted in court. The study compared how students described a '
            'two-minute film after being asked about it in different words. Those are not the '
            'same claim, and the distance between them is large.',
            '',
            'I would not normally press the point, except that Dr Ellis is quoted lower down '
            'in the same post saying the finding is a narrower claim than it sounds and that '
            'she would not want it stretched. The post therefore contradicts its own source '
            'in the space of four paragraphs.',
            '',
            'Could the opening line be changed to something like: researchers have shown that '
            'the wording of a question can change what people report a week later? That is '
            'what the study found, and it is still a striking result.',
            '',
            'I am happy to be told I have misread it.',
            '',
            'With thanks,',
            'Priya Raman',
        ],
        notes=['It states both claims side by side so the gap is visible without being argued.',
               'It uses the researcher’s own quotation, which is far harder to dismiss.',
               'It supplies replacement wording, so saying yes costs the editor nothing.',
               'The last line leaves room to be wrong, which keeps the exchange open.'],
        bandpair=dict(
            mid=[
                'Dear Press Office,',
                'I am writing to complain about your recent post about the memory study. I was '
                'a participant in this study and I think the post is very misleading and '
                'should be corrected as soon as possible.',
                'The post says that the research proves eyewitness evidence cannot be trusted '
                'in court, but this is not what the study was about at all. The study was only '
                'about how the wording of questions affects what people remember. It is wrong '
                'to say it proves something about courts.',
                'Even Dr Ellis says in your own post that it is a narrow claim. I think you '
                'should change the post because it is not accurate and it gives people the '
                'wrong idea about the research. Please let me know what you decide to do.',
                'Yours faithfully, Priya Raman',
            ],
            top=[
                'Dear Press Office,',
                'I am writing about Tuesday’s post on the memory and suggestion study, which I '
                'took part in as a volunteer.',
                'The post’s opening line says the research has shown that eyewitness evidence '
                'should not be trusted in court. The study compared how students described a '
                'two-minute film after being asked about it in different words. Those are not '
                'the same claim.',
                'I would not normally press the point, except that Dr Ellis is quoted lower '
                'down saying the finding is narrower than it sounds. The post contradicts its '
                'own source in four paragraphs.',
                'Could the opening line be changed to: researchers have shown that the wording '
                'of a question can change what people report a week later? I am happy to be '
                'told I have misread it. With thanks, Priya Raman',
            ],
            diffs=[
                'It describes the study instead of asserting that the post is wrong, and lets '
                'the reader see the gap for themselves.',
                'It builds the case on the press office’s own quotation rather than on the '
                'writer’s judgement, which is much harder to argue with.',
                'It proposes the exact replacement sentence, so agreeing costs the editor '
                'nothing and refusing now needs a reason.',
                '"I would not normally press the point" signals that this is not habitual '
                'complaining, which buys the request a hearing.',
                'It ends by leaving room to be wrong, which keeps the exchange open rather '
                'than demanding a decision.',
            ],
        ),
    ),

    w3=dict(
        sub='Imaging what cannot be seen',
        prof='Dr Mensah',
        question='Brain images are unusually persuasive. Experiments have found that adding '
                 'a brain scan to an article makes readers rate the reasoning as better, even '
                 'when the scan is irrelevant to the argument. Some argue that journals and '
                 'press offices should restrict the use of such images in material aimed at '
                 'the public. Others argue that the problem is explanation, not images, and '
                 'that restricting them patronises readers. Should the use of brain images in '
                 'public communication be restricted? Why or why not?',
        posts=[('Tomas', 'm',
                'I would restrict them. If an image makes a weak argument look strong, it is '
                'doing the work of a rhetorical trick, whatever the intention behind it. We '
                'already regulate other persuasive techniques in advertising, and I do not '
                'see why this should be different.'),
               ('Amara', 'w',
                'Restricting images treats readers as incapable of learning. The effect '
                'Tomas describes shrinks once people are taught what a scan actually shows. '
                'The answer is to publish the comparison condition alongside the image, not '
                'to take the image away.')],
        skill=('Finding the assumption both posts share',
               ['The strongest move at B2 is to notice what the two posts agree on without '
                'saying so, and question that.',
                'Both may assume the same thing about who the reader is, or about what the '
                'image is for.',
                'Signal it: Tomas and Amara disagree about the remedy, but both assume…']),
        starters=['Tomas and Amara disagree about the remedy, but both assume…',
                  'Amara is right that…, though that holds only where…',
                  'The case Tomas has in mind is…, and it is not the common one.',
                  'What follows is neither restriction nor education but…'],
        model=[
            'Tomas and Amara disagree about the remedy, but both assume the image is there to '
            'inform. Usually it is not. A scan in a news article is almost never the evidence '
            'for the claim being made; it is a picture of the research taking place, in the '
            'way a photograph of a laboratory is. Once that is clear, the argument changes '
            'shape.',
            'Amara is right that the persuasion effect shrinks when readers are taught what a '
            'scan shows. But that holds only where the image bears on the claim, so that '
            'understanding it does some work. Teaching somebody to read a comparison condition '
            'does not help if the image was decorative to begin with, and most of them are.',
            'Tomas’s analogy with advertising is closer than Amara allows, though not for his '
            'reason. What is being borrowed is not the persuasive power of the picture but the '
            'authority of the instrument. That is a familiar move, and it tends to be handled '
            'by disclosure rather than prohibition.',
            'So I would require one line: whether the image shown is from the study being '
            'reported. It is doubtful whether anything stronger would survive contact with a '
            'press office, and this one change separates the images that are evidence from the '
            'images that are scenery, which is the distinction both posts needed and neither '
            'made.',
        ],
        model_words=222,
    ),

    gram=dict(
        title='Perfect aspect across tenses',
        headers=['Form', 'What it does'],
        rows=[
            ('present perfect: has encoded', 'a past event with a present consequence'),
            ('present perfect continuous: has been working', 'an activity still going on, with its duration in view'),
            ('past perfect: had encoded', 'an event earlier than another past event'),
            ('past perfect continuous: had been working', 'an activity running up to a point in the past'),
            ('future perfect: will have encoded', 'an event completed before a future point'),
            ('perfect infinitive: seems to have forgotten', 'after a verb, when the event is earlier'),
            ('perfect participle: having slept', 'an earlier event in a participle clause'),
        ],
        notes=[
            'The perfect is not a past tense. It links two times: the time of the event and '
            'the time you are looking from.',
            'The past perfect is only needed when the order is not already clear. After she '
            'arrived, he left needs no perfect; the sequence is in the conjunction.',
            'With since and for, the present perfect continuous is usually right: they have '
            'been working since six, not they work since six.',
        ],
        watch='Do not use the past perfect for everything that happened a long time ago. It '
              'marks one past event as earlier than another past event. With no second past '
              'event in view, use the simple past.',
        ex=[
            ('Put the verb in the right perfect form.',
             ['By Friday I ______ (write) four thousand words.',
              'She ______ (already / leave) when I arrived.',
              'They ______ (work) on the data since six this morning.',
              'He seems ______ (forget) what the question said.',
              '______ (sleep) badly, she found the test harder than usual.',
              'The volunteers ______ (watch) the film a week earlier.'],
             ['will have written', 'had already left', 'have been working',
              'to have forgotten', 'Having slept', 'had watched']),
            ('Decide whether the past perfect is needed. Correct where it is not.',
             ['After she had arrived, he had left.',
              'By the time the second visit came, most had forgotten the wording.',
              'I had studied neuroscience for three years before I changed subject.',
              'The study had been published in 1974.'],
             ['After she arrived, he left.', 'correct as written',
              'correct as written', 'The study was published in 1974.']),
            ('Join the two events, marking which came first.',
             ['She slept badly. She sat the exam.',
              'The press office published the post. The researcher saw it.',
              'The volunteers watched the film. They returned a week later.',
              'I finished the outline. I went home.'],
             ['Having slept badly, she sat the exam.',
              'The press office had published the post before the researcher saw it.',
              'The volunteers returned a week after they had watched the film.',
              'Having finished the outline, I went home.']),
        ],
        bas='Build a Sentence frequently puts a perfect form inside an embedded question: do '
            'you know whether she had already left. The auxiliary goes before the participle '
            'and the whole clause keeps statement order — no inversion, ever.',
    ),

    fault=dict(
        text='The study has been published in 1974 and is still cited. After the volunteers '
             'had watched the film, they had returned a week later. The press office claim '
             'that the research proves something about courts. Having slept badly, the exam '
             'was harder than usual. Nobody knows whether had she seen the post before it '
             'went out.',
        faults=[
            ('has been published in 1974', 'was published in 1974',
             'A finished time such as 1974 takes the simple past, not the present perfect.'),
            ('they had returned a week later', 'they returned a week later',
             'Only the earlier of the two past events takes the past perfect.'),
            ('The press office claim', 'The press office claims',
             'A singular body takes a singular verb when it acts as one unit.'),
            ('Having slept badly, the exam', 'Having slept badly, she found the exam',
             'The exam did not sleep badly; the participle needs the right subject.'),
            ('whether had she seen', 'whether she had seen',
             'An embedded question keeps statement order, so the auxiliary follows the subject.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('to put information into a form memory can hold', 'encode'),
            ('to bring a memory back', 'retrieve'),
            ('to make something work less well', 'impair'),
            ('to make a new memory stable over time', 'consolidate'),
            ('anything that triggers a memory', 'cue'),
            ('about events you personally experienced', 'episodic'),
            ('about facts, with no memory of learning them', 'semantic'),
            ('one memory getting in the way of another', 'interference'),
            ('to credit something to the wrong source', 'misattribute'),
            ('standing out enough to be noticed', 'salient'),
            ('how fine a detail an instrument can show', 'resolution'),
            ('to vary together, without either causing the other', 'correlate'),
        ],
        gram=[
            ('By Friday I ______ written four thousand words.', 'will have'),
            ('She ______ already left when I arrived.', 'had'),
            ('They ______ been working since six.', 'have'),
            ('He seems ______ have forgotten the question.', 'to'),
            ('______ slept badly, she found the test harder.', 'Having'),
            ('The study ______ published in 1974.', 'was'),
            ('Nobody knows whether she ______ seen it.', 'had'),
            ('The volunteers ______ watched the film a week earlier.', 'had'),
        ],
        mini=[
            ('Consolidation mostly happens',
             ('at the moment of the event', 'during sleep after learning',
              'during retrieval', 'only with rehearsal'), 1,
             'The passage puts it in the hours after learning and makes sleep the condition '
             'the effect depends on.'),
            ('A false memory of broken glass shows that',
             ('memory decays quickly', 'the wording of a question can enter the memory',
              'vision is unreliable', 'volunteers lie'), 1,
             'The verb in the question became part of what was later recalled, which is the '
             'reconstructive account in one finding.'),
            ('Colour in a functional scan indicates',
             ('where thinking occurs', 'a difference in blood flow between two conditions',
              'regions of damage', 'the largest regions'), 1,
             'Every coloured region is the answer to a subtraction, so it reports a '
             'difference rather than an absolute activity.'),
            ('Which sentence is correct?',
             ('The study has been published in 1974.', 'The study was published in 1974.',
              'The study had published in 1974.', 'The study is published in 1974.'), 1,
             'A finished time takes the simple past; the present perfect cannot sit with a '
             'date that is over.'),
            ('"Remains an open question" tells you the writer',
             ('has settled it', 'regards it as unsettled', 'rejects it',
              'thinks it unimportant'), 1,
             'It reports the state of the debate rather than the writer’s preference, and '
             'reports it as undecided.'),
            ('A region that is not coloured in a scan',
             ('is inactive', 'did not differ between the two conditions',
              'is damaged', 'was not measured'), 1,
             'Absence of colour means no difference was found there, which is compatible '
             'with the region working hard in both conditions.'),
        ],
    ),

    tip='The past perfect is the tense B2 writers most often overuse. It has exactly one job: '
        'marking an event as earlier than another past event already in view. If there is no '
        'second past event, you want the simple past, and using the perfect anyway makes the '
        'sentence sound translated.',
)
